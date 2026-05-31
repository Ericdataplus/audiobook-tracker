import urllib.request
import json
import re

def fetch_and_clean(url, start_marker, end_marker):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req) as response:
        text = response.read().decode('utf-8')
    
    start_idx = text.find(start_marker)
    end_idx = text.find(end_marker)
    
    if start_idx != -1 and end_idx != -1:
        text = text[start_idx:end_idx].strip()
    return text

iliad_url = "https://www.gutenberg.org/cache/epub/2199/pg2199.txt"
odyssey_url = "https://www.gutenberg.org/cache/epub/1727/pg1727.txt"

print("Fetching Iliad...")
iliad_text = fetch_and_clean(iliad_url, "*** START OF THE PROJECT GUTENBERG EBOOK THE ILIAD ***", "*** END OF THE PROJECT GUTENBERG EBOOK THE ILIAD ***")
if "BOOK I." in iliad_text:
    iliad_text = iliad_text[iliad_text.find("BOOK I."):]

iliad_data = {
    "name": "The Iliad",
    "source": "Homer",
    "author": "Homer",
    "translator": "Samuel Butler",
    "text": iliad_text
}
with open("data/homer_iliad.json", "w", encoding="utf-8") as f:
    json.dump(iliad_data, f, ensure_ascii=False, indent=2)

print("Fetching Odyssey...")
odyssey_text = fetch_and_clean(odyssey_url, "*** START OF THE PROJECT GUTENBERG EBOOK THE ODYSSEY ***", "*** END OF THE PROJECT GUTENBERG EBOOK THE ODYSSEY ***")
if "BOOK I." in odyssey_text:
    odyssey_text = odyssey_text[odyssey_text.find("BOOK I."):]

odyssey_data = {
    "name": "The Odyssey",
    "source": "Homer",
    "author": "Homer",
    "translator": "Samuel Butler",
    "text": odyssey_text
}
with open("data/homer_odyssey.json", "w", encoding="utf-8") as f:
    json.dump(odyssey_data, f, ensure_ascii=False, indent=2)

print("Done.")
