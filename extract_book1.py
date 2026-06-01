"""
extract_book1.py — Extract Book I text from the Odyssey data file for analysis.
"""
import re

# Read the JS file and extract the text
with open("data/homer_odyssey.js", "r", encoding="utf-8") as f:
    content = f.read()

# Find the text field value
match = re.search(r'"text":\s*"(.*)"', content, re.DOTALL)
if not match:
    print("ERROR: Could not find text field")
    exit(1)

full_text = match.group(1)
# Unescape JS string
full_text = full_text.replace("\\r\\n", "\n").replace("\\n", "\n").replace('\\"', '"').replace("\\'", "'")

# Find BOOK I section
book1_start = full_text.find("BOOK I\n")
book2_start = full_text.find("\nBOOK II\n")

if book1_start == -1 or book2_start == -1:
    print(f"ERROR: Could not find book markers. book1={book1_start}, book2={book2_start}")
    exit(1)

book1_text = full_text[book1_start:book2_start].strip()

# Write to file
with open("audiobook/book1_raw.txt", "w", encoding="utf-8") as f:
    f.write(book1_text)

# Also split into paragraphs and print count
paragraphs = [p.strip() for p in re.split(r'\n\s*\n', book1_text) if p.strip()]
print(f"Book I extracted: {len(book1_text)} chars, {len(paragraphs)} paragraphs")

# Print first 5 paragraphs for verification
for i, p in enumerate(paragraphs[:5]):
    print(f"\n--- Paragraph {i} ---")
    print(p[:200] + ("..." if len(p) > 200 else ""))
