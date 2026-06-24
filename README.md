# 🎧 Audiobook Tracker

A browser-based library for tracking listens, taking notes, and reading the classics — built around a curated canon of ancient Greek and Roman philosophy and literature.

## Overview

Audiobook Tracker is a static, client-side web app for organizing a personal audiobook and reading list. Books are grouped by author in a sidebar, and each title has its own view where you can bump a listen counter, jot notes, and read the full text in a built-in paginated reader. Everything is stored locally in your browser, so no account or server is required.

The repo also includes a small set of Python helper scripts used to prepare the content: generating sample text-to-speech narration, creating illustrations, and computing word counts for the library.

## 🛠 Tech stack

- **Frontend:** Vanilla JavaScript, HTML, CSS (no framework)
- **Icons & fonts:** [Lucide](https://lucide.dev) icons, Google Fonts (Inter / Outfit)
- **Persistence:** Browser `localStorage`
- **Content data:** Plain-JS data modules in `data/` (book texts, stats, inline artwork)
- **Tooling (optional):** Python scripts for TTS, illustration generation, and word counts

## ✨ Features

- **Author-grouped library** — collapsible sidebar listing works by Homer, Hesiod, Plato, Aristotle, and more
- **Sorting & filtering** — group by author or view a flat list (chronological, A–Z, or most-listened); filter by "Up Next" vs "Listened"
- **Listen counter** — increment/decrement how many times you've listened to each title
- **Pinning** — pin favorite books to the top of the sidebar
- **Notes** — per-book and per-author notes, saved automatically to local storage
- **Built-in reader** — paginated reading view for titles that include full text
- **Local-first** — all progress and notes persist in `localStorage`; nothing leaves your browser

## 🚀 Getting started

This is a fully static site — no build step or dependencies required. Just serve the folder:

```bash
# Python 3
python -m http.server 8000

# or any static file server you prefer
npx serve .
```

Then open `http://localhost:8000` in your browser.

The Python scripts in the repo (e.g. `generate_homer_tts.py`, `update_illustrations.py`, `update_word_counts.py`) are optional content-prep tools and are not needed to run the app.

## 📌 Status

A personal, evolving project. The included library reflects a specific reading list (ancient philosophy and classics), but the structure is easy to adapt to any collection.
