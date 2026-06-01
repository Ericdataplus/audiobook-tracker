"""Final pass: wire illustrations to EVERY paragraph in Book I."""
import json

with open("audiobook/chapters/book_01_meta.json", "r", encoding="utf-8") as f:
    meta = json.load(f)

# Complete map: every paragraph gets an illustration
illustration_map = {
    0:  "illustrations/book_01_scene_01.png",   # Ship on the sea - opening
    1:  "illustrations/book_01_scene_07.png",   # Odysseus on Calypso's island
    2:  "illustrations/book_01_scene_08.png",   # Poseidon feasting with Ethiopians
    3:  "illustrations/book_01_scene_02.png",   # Zeus on Olympus throne - speaking
    4:  "illustrations/book_01_scene_09.png",   # Athena pleading before Zeus
    5:  "illustrations/book_01_scene_24.png",   # Zeus speaking of Polyphemus
    6:  "illustrations/book_01_scene_25.png",   # Athena declaring her plan
    7:  "illustrations/book_01_scene_03.png",   # Athena descending to Ithaca
    8:  "illustrations/book_01_scene_11.png",   # Telemachus greeting at gate
    9:  "illustrations/book_01_scene_22.png",   # Spear-stand with Odysseus's spears
    10: "illustrations/book_01_scene_12.png",   # Golden ewers and feast table
    11: "illustrations/book_01_scene_13.png",   # Phemius playing the lyre
    12: "illustrations/book_01_scene_14.png",   # Telemachus and Athena whispering
    13: "illustrations/book_01_scene_26.png",   # Athena as Mentes telling stories
    14: "illustrations/book_01_scene_27.png",   # Telemachus sorrowful portrait
    15: "illustrations/book_01_scene_28.png",   # Athena surveying the chaos
    16: "illustrations/book_01_scene_04.png",   # Telemachus anguished at feast
    17: "illustrations/book_01_scene_10.png",   # Suitors lounging arrogantly
    18: "illustrations/book_01_scene_29.png",   # Athena urging vengeance
    19: "illustrations/book_01_scene_30.png",   # Telemachus offering gift
    20: "illustrations/book_01_scene_31.png",   # Athena's farewell
    21: "illustrations/book_01_scene_05.png",   # Athena transforming into bird
    22: "illustrations/book_01_scene_15.png",   # Penelope descending staircase
    23: "illustrations/book_01_scene_16.png",   # Penelope weeping
    24: "illustrations/book_01_scene_17.png",   # Telemachus asserting authority
    25: "illustrations/book_01_scene_23.png",   # Penelope weaving alone
    26: "illustrations/book_01_scene_18.png",   # Telemachus defiant speech
    27: "illustrations/book_01_scene_19.png",   # Antinous mocking
    28: "illustrations/book_01_scene_32.png",   # Telemachus vs Antinous confrontation
    29: "illustrations/book_01_scene_33.png",   # Eurymachus speaking
    30: "illustrations/book_01_scene_20.png",   # Suitors dancing drunkenly
    31: "illustrations/book_01_scene_06.png",   # Telemachus climbing tower at night
}

for para in meta["paragraphs"]:
    idx = para["index"]
    if idx in illustration_map:
        para["illustration"] = illustration_map[idx]

with open("audiobook/chapters/book_01_meta.json", "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

# Verify
illustrated = sum(1 for p in meta["paragraphs"] if p.get("illustration"))
print(f"RESULT: {illustrated}/{len(meta['paragraphs'])} paragraphs now have illustrations")
print("EVERY SINGLE PARAGRAPH HAS ART!" if illustrated == len(meta["paragraphs"]) else "Some gaps remain")
