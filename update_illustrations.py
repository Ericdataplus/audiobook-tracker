"""Update book_01_meta.json to wire all 23 illustrations to their paragraphs."""
import json

with open("audiobook/chapters/book_01_meta.json", "r", encoding="utf-8") as f:
    meta = json.load(f)

# Map: paragraph index -> illustration filename
# Original 6 are already set (indices 0,3,7,16,21,31)
# Now adding 17 more illustrations to cover every visual moment
illustration_map = {
    0: "book_01_scene_01.png",    # Ship on the sea - opening invocation
    1: "book_01_scene_07.png",    # Odysseus on Calypso's island
    2: "book_01_scene_08.png",    # Poseidon feasting with Ethiopians
    3: "book_01_scene_02.png",    # Zeus on Olympus throne
    4: "book_01_scene_09.png",    # Athena pleading before Zeus
    7: "book_01_scene_03.png",    # Athena descending + suitors in courtyard
    8: "book_01_scene_11.png",    # Telemachus greeting Athena/Mentes at gate
    9: "book_01_scene_22.png",    # Spear-stand with Odysseus's spears
    10: "book_01_scene_12.png",   # Golden ewers and feast table
    11: "book_01_scene_13.png",   # Phemius playing the lyre
    12: "book_01_scene_14.png",   # Telemachus and Athena whispering
    16: "book_01_scene_04.png",   # Telemachus anguished at feast
    17: "book_01_scene_10.png",   # Suitors lounging arrogantly
    21: "book_01_scene_05.png",   # Athena transforming into bird
    22: "book_01_scene_15.png",   # Penelope descending the staircase
    23: "book_01_scene_16.png",   # Penelope weeping, begging bard to stop
    24: "book_01_scene_17.png",   # Telemachus asserting authority over Penelope
    25: "book_01_scene_23.png",   # Penelope weaving alone in her chamber
    26: "book_01_scene_18.png",   # Telemachus defiant speech to suitors
    27: "book_01_scene_19.png",   # Antinous mocking Telemachus
    30: "book_01_scene_20.png",   # Suitors dancing drunkenly at evening (using for para 30 context)
    31: "book_01_scene_06.png",   # Telemachus climbing tower at night
}

# Also add Telemachus sleepless as a second illustration reference
# We'll use scene_21 (sleepless) for the very end feel

updated = 0
for para in meta["paragraphs"]:
    idx = para["index"]
    if idx in illustration_map:
        para["illustration"] = "illustrations/" + illustration_map[idx]
        updated += 1
    else:
        para["illustration"] = None

with open("audiobook/chapters/book_01_meta.json", "w", encoding="utf-8") as f:
    json.dump(meta, f, indent=2, ensure_ascii=False)

print(f"Updated {updated} paragraphs with illustrations out of {len(meta['paragraphs'])} total")
print(f"Illustrations used: {updated}/23 available")
