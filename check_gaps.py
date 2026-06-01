import json
with open("audiobook/chapters/book_01_meta.json", "r", encoding="utf-8") as f:
    meta = json.load(f)
for p in meta["paragraphs"]:
    if not p.get("illustration"):
        print(f"Para {p['index']}: {p['speaker']}")
