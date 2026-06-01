"""
generate_audiobook.py — Multi-voice TTS generation pipeline for the Odyssey.

Uses Kokoro TTS with character-specific voices, dynamic pacing, and
generates timing metadata for web player synchronization.

Usage:
    python generate_audiobook.py           # Generate all chapters
    python generate_audiobook.py --book 1  # Generate only Book I
"""

import json
import os
import re
import sys
import time
import argparse
import numpy as np

# ─── Configuration ───────────────────────────────────────────────

SAMPLE_RATE = 24000
DATA_DIR = "data"
AUDIOBOOK_DIR = "audiobook"
CHAPTERS_DIR = os.path.join(AUDIOBOOK_DIR, "chapters")
ANALYSIS_DIR = AUDIOBOOK_DIR  # where book1_analysis.json etc. live

# Voice configuration — character to Kokoro voice mapping
VOICE_MAP = {
    "narrator":     {"voice_id": "am_michael",  "lang": "a"},
    "odysseus":     {"voice_id": "am_fenrir",   "lang": "a"},
    "telemachus":   {"voice_id": "am_adam",     "lang": "a"},
    "penelope":     {"voice_id": "af_bella",    "lang": "a"},
    "athena":       {"voice_id": "bf_emma",     "lang": "b"},
    "zeus":         {"voice_id": "bm_george",   "lang": "b"},
    "poseidon":     {"voice_id": "am_santa",    "lang": "a"},
    "calypso":      {"voice_id": "af_nicole",   "lang": "a"},
    "circe":        {"voice_id": "af_heart",    "lang": "a"},
    "hermes":       {"voice_id": "bm_daniel",   "lang": "b"},
    "nestor":       {"voice_id": "bm_lewis",    "lang": "b"},
    "menelaus":     {"voice_id": "bm_lewis",    "lang": "b"},
    "polyphemus":   {"voice_id": "am_santa",    "lang": "a"},
    "antinous":     {"voice_id": "am_echo",     "lang": "a"},
    "eurymachus":   {"voice_id": "am_echo",     "lang": "a"},
    "default_female": {"voice_id": "af_sky",    "lang": "a"},
    "default_male":   {"voice_id": "am_echo",   "lang": "a"},
}

# Pipeline cache — one per language code to avoid re-initialization
_pipelines = {}


def get_pipeline(lang_code):
    """Get or create a Kokoro pipeline for the given language code."""
    global _pipelines
    if lang_code not in _pipelines:
        import torch
        from kokoro import KPipeline
        device = 'cuda' if torch.cuda.is_available() else 'cpu'
        print(f"  Initializing Kokoro pipeline for lang='{lang_code}' on {device}...")
        _pipelines[lang_code] = KPipeline(lang_code=lang_code, device=device)
    return _pipelines[lang_code]


def clean_text(text):
    """Clean text for TTS — remove footnote markers, normalize whitespace."""
    # Remove footnote number references like "1" "2" etc. at end of words
    text = re.sub(r'(\w)(\d+)\s', r'\1 ', text)
    # Remove standalone footnote numbers
    text = re.sub(r'\b\d+\b(?=\s*$)', '', text)
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def extract_book_text(book_num):
    """Extract a single book's text from the Odyssey JS data file."""
    with open(os.path.join(DATA_DIR, "homer_odyssey.js"), "r", encoding="utf-8") as f:
        content = f.read()

    match = re.search(r'"text":\s*"(.*)"', content, re.DOTALL)
    if not match:
        raise ValueError("Could not find text field in homer_odyssey.js")

    full_text = match.group(1)
    full_text = full_text.replace("\\r\\n", "\n").replace("\\n", "\n")
    full_text = full_text.replace('\\"', '"').replace("\\'", "'")

    # Roman numeral mapping
    roman = {
        1: "I", 2: "II", 3: "III", 4: "IV", 5: "V", 6: "VI",
        7: "VII", 8: "VIII", 9: "IX", 10: "X", 11: "XI", 12: "XII",
        13: "XIII", 14: "XIV", 15: "XV", 16: "XVI", 17: "XVII",
        18: "XVIII", 19: "XIX", 20: "XX", 21: "XXI", 22: "XXII",
        23: "XXIII", 24: "XXIV"
    }

    book_marker = f"BOOK {roman[book_num]}\n"
    start = full_text.find(book_marker)
    if start == -1:
        raise ValueError(f"Could not find '{book_marker.strip()}' in text")

    # Find the next book or end markers
    if book_num < 24:
        next_marker = f"\nBOOK {roman[book_num + 1]}\n"
        end = full_text.find(next_marker, start + len(book_marker))
    else:
        end = full_text.find("\nFOOTNOTES:", start)
    
    if end == -1:
        end = len(full_text)

    book_text = full_text[start:end].strip()

    # Split into paragraphs
    paragraphs = [p.strip() for p in re.split(r'\n\s*\n', book_text) if p.strip()]

    # Skip the "BOOK X" header and subtitle paragraphs
    content_paragraphs = []
    for p in paragraphs:
        # Skip the "BOOK I" line
        if re.match(r'^BOOK\s+[IVXLC]+$', p.strip()):
            continue
        # Skip ALL-CAPS subtitle lines
        if p.strip().upper() == p.strip() and len(p.strip()) > 5:
            continue
        content_paragraphs.append(p)

    return content_paragraphs


def synthesize_paragraph(text, voice_config, speed=1.0):
    """Synthesize a single paragraph using Kokoro TTS.
    
    Returns: numpy array of audio samples at SAMPLE_RATE Hz.
    """
    pipeline = get_pipeline(voice_config["lang"])
    clean = clean_text(text)
    
    if not clean:
        return np.array([], dtype=np.float32)
    
    audio_chunks = []
    generator = pipeline(
        clean,
        voice=voice_config["voice_id"],
        speed=speed,
    )
    
    for graphemes, phonemes, audio_chunk in generator:
        if audio_chunk is not None:
            audio_chunks.append(audio_chunk)
    
    if not audio_chunks:
        return np.array([], dtype=np.float32)
    
    return np.concatenate(audio_chunks)


def generate_chapter(book_num, analysis_path=None):
    """Generate audio for an entire chapter with multi-voice casting.
    
    Args:
        book_num: Integer 1-24
        analysis_path: Path to the analysis JSON (speaker/mood metadata).
                      If None, defaults to narrator voice for everything.
    
    Returns:
        Path to the generated WAV file.
    """
    import soundfile as sf
    
    print(f"\n{'='*60}")
    print(f"  GENERATING BOOK {book_num}")
    print(f"{'='*60}")
    
    # Extract paragraphs
    paragraphs = extract_book_text(book_num)
    print(f"  Extracted {len(paragraphs)} content paragraphs")
    
    # Load analysis metadata if available
    analysis = None
    if analysis_path and os.path.exists(analysis_path):
        with open(analysis_path, "r", encoding="utf-8") as f:
            analysis = json.load(f)
        print(f"  Loaded analysis: {len(analysis['paragraphs'])} paragraph entries")
    
    # Generate audio paragraph by paragraph
    all_audio = []
    metadata_paragraphs = []
    cumulative_time = 0.0
    
    # Add a short silence at the start (0.5s)
    silence_start = np.zeros(int(SAMPLE_RATE * 0.5), dtype=np.float32)
    all_audio.append(silence_start)
    cumulative_time += 0.5
    
    for i, para_text in enumerate(paragraphs):
        # Look up analysis for this paragraph
        voice_config = VOICE_MAP["narrator"]
        speed = 1.0
        mood = "calm"
        ambience = "ocean"
        illustration = None
        speaker = "narrator"
        
        if analysis:
            for entry in analysis["paragraphs"]:
                if entry["index"] == i:
                    speaker = entry.get("speaker", "narrator")
                    voice_key = entry.get("voice", "am_michael")
                    # Find voice config by voice_id
                    for k, v in VOICE_MAP.items():
                        if v["voice_id"] == voice_key:
                            voice_config = v
                            break
                    speed = entry.get("speed", 1.0)
                    mood = entry.get("mood", "calm")
                    ambience = entry.get("ambience", "ocean")
                    illustration = entry.get("illustration")
                    break
        
        start_time = cumulative_time
        
        print(f"  [{i+1}/{len(paragraphs)}] {speaker} ({voice_config['voice_id']}) "
              f"speed={speed} mood={mood} — {para_text[:60]}...")
        
        # Synthesize
        t0 = time.time()
        audio = synthesize_paragraph(para_text, voice_config, speed)
        gen_time = time.time() - t0
        
        if len(audio) > 0:
            all_audio.append(audio)
            duration = len(audio) / SAMPLE_RATE
            cumulative_time += duration
            
            # Add inter-paragraph silence (0.8s for normal, 1.5s for scene changes)
            pause_duration = 1.5 if (i > 0 and analysis and 
                any(e["index"] == i and e.get("ambience") != 
                    next((e2.get("ambience") for e2 in analysis["paragraphs"] 
                          if e2["index"] == i-1), None)
                    for e in analysis["paragraphs"])) else 0.8
            silence = np.zeros(int(SAMPLE_RATE * pause_duration), dtype=np.float32)
            all_audio.append(silence)
            cumulative_time += pause_duration
            
            print(f"         -> {duration:.1f}s audio (generated in {gen_time:.1f}s) "
                  f"| cumulative: {cumulative_time:.1f}s")
        else:
            print(f"         -> (no audio generated)")
            duration = 0
        
        end_time = cumulative_time
        
        # Record metadata
        metadata_paragraphs.append({
            "index": i,
            "text": para_text,
            "speaker": speaker,
            "voice": voice_config["voice_id"],
            "mood": mood,
            "speed": speed,
            "ambience": ambience,
            "start_time": round(start_time, 3),
            "end_time": round(end_time, 3),
            "illustration": illustration.get("filename") if illustration else None
        })
    
    # Concatenate all audio
    full_audio = np.concatenate(all_audio)
    total_duration = len(full_audio) / SAMPLE_RATE
    
    # Save WAV
    book_num_str = f"{book_num:02d}"
    wav_path = os.path.join(CHAPTERS_DIR, f"book_{book_num_str}.wav")
    sf.write(wav_path, full_audio, SAMPLE_RATE)
    print(f"\n  [OK] Audio saved: {wav_path} ({total_duration:.1f}s / {total_duration/60:.1f}min)")
    
    # Save metadata JSON
    chapter_title = analysis["title"] if analysis else f"BOOK {book_num}"
    meta = {
        "chapter": f"BOOK {book_num}",
        "title": chapter_title,
        "duration_seconds": round(total_duration, 3),
        "paragraphs": metadata_paragraphs
    }
    
    meta_path = os.path.join(CHAPTERS_DIR, f"book_{book_num_str}_meta.json")
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2, ensure_ascii=False)
    print(f"  [OK] Metadata saved: {meta_path}")
    
    return wav_path


def generate_manifest():
    """Generate the master manifest.json from all chapter metadata files."""
    chapters = []
    for i in range(1, 25):
        meta_path = os.path.join(CHAPTERS_DIR, f"book_{i:02d}_meta.json")
        if os.path.exists(meta_path):
            with open(meta_path, "r", encoding="utf-8") as f:
                meta = json.load(f)
            chapters.append({
                "book_num": i,
                "chapter": meta["chapter"],
                "title": meta["title"],
                "duration_seconds": meta["duration_seconds"],
                "audio_file": f"chapters/book_{i:02d}.wav",
                "meta_file": f"chapters/book_{i:02d}_meta.json",
                "paragraph_count": len(meta["paragraphs"]),
                "illustrations": [
                    p["illustration"] for p in meta["paragraphs"] 
                    if p.get("illustration")
                ]
            })
    
    manifest = {
        "title": "The Odyssey",
        "author": "Homer",
        "translator": "Samuel Butler",
        "total_chapters": len(chapters),
        "total_duration_seconds": sum(c["duration_seconds"] for c in chapters),
        "chapters": chapters
    }
    
    manifest_path = os.path.join(AUDIOBOOK_DIR, "manifest.json")
    with open(manifest_path, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    print(f"\n[OK] Manifest saved: {manifest_path}")
    return manifest_path


def main():
    parser = argparse.ArgumentParser(description="Generate immersive audiobook for Homer's Odyssey")
    parser.add_argument("--book", type=int, help="Generate only this book number (1-24)")
    args = parser.parse_args()
    
    os.makedirs(CHAPTERS_DIR, exist_ok=True)
    
    if args.book:
        # Generate a single book
        book_num = args.book
        analysis_path = os.path.join(ANALYSIS_DIR, f"book{book_num}_analysis.json")
        generate_chapter(book_num, analysis_path)
    else:
        # Generate all 24 books
        for book_num in range(1, 25):
            analysis_path = os.path.join(ANALYSIS_DIR, f"book{book_num}_analysis.json")
            generate_chapter(book_num, analysis_path)
    
    # Generate manifest
    generate_manifest()
    
    print("\n" + "="*60)
    print("  AUDIOBOOK GENERATION COMPLETE!")
    print("="*60)


if __name__ == "__main__":
    main()
