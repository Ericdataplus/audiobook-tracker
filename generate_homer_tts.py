import torch
from kokoro import KPipeline
import soundfile as sf
import numpy as np
import os

device = 'cuda' if torch.cuda.is_available() else 'cpu'
print(f"Using device: {device}")
pipeline = KPipeline(lang_code='a', device=device)

text = "Tell me, O muse, of that ingenious hero who travelled far and wide after he had sacked the famous town of Troy. Many cities did he visit, and many were the nations with whose manners and customs he was acquainted; moreover he suffered much by sea while trying to save his own life and bring his men safely home; but do what he might he could not save his men, for they perished through their own sheer folly in eating the cattle of the Sun-god Hyperion; so the god prevented them from ever reaching home."

print("Synthesizing audio...")
generator = pipeline(text, voice="am_michael", speed=1.0)
audio_chunks = []
for graphemes, phonemes, audio_chunk in generator:
    if audio_chunk is not None:
        audio_chunks.append(audio_chunk)

full_audio = np.concatenate(audio_chunks)
out_path = "assets/homer_sample.wav"
sf.write(out_path, full_audio, 24000)
print(f"Audio saved to {out_path}")
