import os

data_dir = 'data'
file_to_id = {
    'homer_iliad.json': 'homer-iliad',
    'homer_odyssey.json': 'homer-odyssey',
    'plato_apology.json': 'plato-apology',
    'plato_phaedo.json': 'plato-phaedo',
    'plato_republic.json': 'plato-republic',
    'plato_timaeus.json': 'plato-timaeus',
    'plato_critias.json': 'plato-critias',
    'plato_laws.json': 'plato-laws',
    'aristotle_nicomachean_ethics.json': 'aristotle-nicomachean',
    'aristotle_poetics.json': 'aristotle-poetics',
    'aristotle_politics.json': 'aristotle-politics',
    'aristotle_rhetoric.json': 'aristotle-rhetoric'
}

for filename, book_id in file_to_id.items():
    filepath = os.path.join(data_dir, filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            data = f.read()
        
        js_content = f'window.bookDataCache = window.bookDataCache || {{}};\nwindow.bookDataCache["{book_id}"] = {data};'
        
        js_filepath = os.path.join(data_dir, filename.replace('.json', '.js'))
        with open(js_filepath, 'w', encoding='utf-8') as f:
            f.write(js_content)
        
        os.remove(filepath)
        print(f"Converted {filename} to .js")
