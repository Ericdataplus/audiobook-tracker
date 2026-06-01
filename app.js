// Book data extracted from READING_LIST.md and index.html timeline
const initialBooks = [
    // Ancient Greece
    { id: 'homer-iliad', title: 'The Iliad', author: 'Homer', listenedTimes: 0 },
    { id: 'homer-odyssey', title: 'The Odyssey', author: 'Homer', listenedTimes: 0 },
    
    { id: 'hesiod-theogony', title: 'Theogony', author: 'Hesiod', listenedTimes: 0 },
    { id: 'hesiod-works', title: 'Works and Days', author: 'Hesiod', listenedTimes: 0 },

    // Plato's Complete Dialogues
    { id: 'plato-euthyphro', title: 'Euthyphro', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-apology', title: 'Apology', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-crito', title: 'Crito', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-phaedo', title: 'Phaedo', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-charmides', title: 'Charmides', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-laches', title: 'Laches', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-lysis', title: 'Lysis', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-ion', title: 'Ion', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-hippias-major', title: 'Hippias Major', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-hippias-minor', title: 'Hippias Minor', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-menexenus', title: 'Menexenus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-euthydemus', title: 'Euthydemus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-protagoras', title: 'Protagoras', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-gorgias', title: 'Gorgias', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-meno', title: 'Meno', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-cratylus', title: 'Cratylus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-symposium', title: 'Symposium', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-phaedrus', title: 'Phaedrus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-republic', title: 'Republic', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-parmenides', title: 'Parmenides', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-theaetetus', title: 'Theaetetus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-sophist', title: 'Sophist', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-statesman', title: 'Statesman', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-philebus', title: 'Philebus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-timaeus', title: 'Timaeus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-critias', title: 'Critias', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-laws', title: 'Laws', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-epistles', title: 'Epistles (Letters)', author: 'Plato', listenedTimes: 0 },

    // Aristotle's Complete Surviving Works
    { id: 'aristotle-categories', title: 'Categories', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-interpretation', title: 'On Interpretation', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-prior-analytics', title: 'Prior Analytics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-posterior-analytics', title: 'Poster Analytics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-topics', title: 'Topics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-sophistical-refutations', title: 'Sophistical Refutations', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-physics', title: 'Physics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-heavens', title: 'On the Heavens', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-generation', title: 'On Generation and Corruption', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-meteorology', title: 'Meteorology', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-soul', title: 'On the Soul (De Anima)', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-parva', title: 'Parva Naturalia', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-history-animals', title: 'History of Animals', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-parts-animals', title: 'Parts of Animals', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-movement-animals', title: 'Movement of Animals', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-progression-animals', title: 'Progression of Animals', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-generation-animals', title: 'Generation of Animals', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-metaphysics', title: 'Metaphysics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-nicomachean', title: 'Nicomachean Ethics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-eudemian', title: 'Eudemian Ethics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-magna', title: 'Magna Moralia', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-politics', title: 'Politics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-constitution', title: 'Constitution of the Athenians', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-rhetoric', title: 'Rhetoric', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-poetics', title: 'Poetics', author: 'Aristotle', listenedTimes: 0 },

    { id: 'epicurus-letter', title: 'Letter to Menoeceus', author: 'Epicurus', listenedTimes: 0 },
    
    // Rome & Late Antiquity
    { id: 'lucretius-nature', title: 'On the Nature of Things', author: 'Lucretius', listenedTimes: 0 },
    { id: 'cicero-duties', title: 'On Duties', author: 'Cicero', listenedTimes: 0 },
    
    // Seneca's Complete Philosophical Works
    { id: 'seneca-letters', title: 'Letters from a Stoic', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-anger', title: 'On Anger', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-shortness', title: 'On the Shortness of Life', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-happy-life', title: 'On the Happy Life', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-leisure', title: 'On Leisure', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-tranquility', title: 'On Tranquility of Mind', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-providence', title: 'On Providence', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-firmness', title: 'On the Firmness of the Wise Person', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-clemency', title: 'On Clemency', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-benefits', title: 'On Benefits', author: 'Seneca', listenedTimes: 0 },
    { id: 'seneca-natural-questions', title: 'Natural Questions', author: 'Seneca', listenedTimes: 0 },

    { id: 'epictetus-enchiridion', title: 'The Enchiridion', author: 'Epictetus', listenedTimes: 0 },
    { id: 'aurelius-meditations', title: 'Meditations', author: 'Marcus Aurelius', listenedTimes: 0 },
    { id: 'augustine-confessions', title: 'Confessions', author: 'St. Augustine', listenedTimes: 0 },
    { id: 'boethius-consolation', title: 'Consolation of Philosophy', author: 'Boethius', listenedTimes: 0 },

    // Islamic Golden Age
    { id: 'alkindi-first-philosophy', title: 'On First Philosophy', author: 'Al-Kindi', listenedTimes: 0 },
    { id: 'avicenna-canon', title: 'The Canon of Medicine', author: 'Avicenna', listenedTimes: 0 },
    { id: 'alghazali-incoherence', title: 'The Incoherence of the Philosophers', author: 'Al-Ghazali', listenedTimes: 0 },
    { id: 'averroes-treatise', title: 'The Decisive Treatise', author: 'Averroes', listenedTimes: 0 },

    // Middle Ages & Renaissance
    { id: 'aquinas-summa', title: 'Summa Theologica', author: 'Thomas Aquinas', listenedTimes: 0 },
    { id: 'machiavelli-prince', title: 'The Prince', author: 'Machiavelli', listenedTimes: 0 },
    { id: 'machiavelli-discourses', title: 'Discourses on Livy', author: 'Machiavelli', listenedTimes: 0 },

    // Enlightenment & Modern Era
    { id: 'hobbes-leviathan', title: 'Leviathan', author: 'Thomas Hobbes', listenedTimes: 0 },
    
    // Descartes Complete Philosophical Works
    { id: 'descartes-rules', title: 'Rules for the Direction of the Mind', author: 'Descartes', listenedTimes: 0 },
    { id: 'descartes-world', title: 'The World / Treatise on Man', author: 'Descartes', listenedTimes: 0 },
    { id: 'descartes-discourse', title: 'Discourse on the Method', author: 'Descartes', listenedTimes: 0 },
    { id: 'descartes-meditations', title: 'Meditations on First Philosophy', author: 'Descartes', listenedTimes: 0 },
    { id: 'descartes-principles', title: 'Principles of Philosophy', author: 'Descartes', listenedTimes: 0 },
    { id: 'descartes-passions', title: 'The Passions of the Soul', author: 'Descartes', listenedTimes: 0 },

    { id: 'spinoza-theological', title: 'Theological-Political Treatise', author: 'Spinoza', listenedTimes: 0 },
    { id: 'spinoza-ethics', title: 'Ethics', author: 'Spinoza', listenedTimes: 0 },
    { id: 'locke-treatises', title: 'Two Treatises of Government', author: 'John Locke', listenedTimes: 0 },
    { id: 'hume-enquiry', title: 'Enquiry Concerning Human Understanding', author: 'David Hume', listenedTimes: 0 },
    { id: 'rousseau-contract', title: 'The Social Contract', author: 'J.J. Rousseau', listenedTimes: 0 },
    { id: 'smith-wealth', title: 'The Wealth of Nations', author: 'Adam Smith', listenedTimes: 0 },
    { id: 'kant-critique', title: 'Critique of Pure Reason', author: 'Immanuel Kant', listenedTimes: 0 },
    { id: 'hegel-phenomenology', title: 'Phenomenology of Spirit', author: 'G.W.F. Hegel', listenedTimes: 0 },
    
    // 19th & 20th Century
    { id: 'darwin-origin', title: 'Origin of Species', author: 'Charles Darwin', listenedTimes: 0 },
    { id: 'marx-kapital', title: 'Das Kapital', author: 'Karl Marx', listenedTimes: 0 },
    { id: 'nietzsche-zarathustra', title: 'Thus Spoke Zarathustra', author: 'Nietzsche', listenedTimes: 0 },
    { id: 'nietzsche-beyond', title: 'Beyond Good and Evil', author: 'Nietzsche', listenedTimes: 0 },
    { id: 'nietzsche-genealogy', title: 'On the Genealogy of Morality', author: 'Nietzsche', listenedTimes: 0 },
    { id: 'freud-unconscious', title: 'The Unconscious', author: 'Sigmund Freud', listenedTimes: 0 },
    { id: 'einstein-relativity', title: 'Relativity', author: 'Albert Einstein', listenedTimes: 0 },
    { id: 'sartre-being', title: 'Being and Nothingness', author: 'J.P. Sartre', listenedTimes: 0 },
    
    // Modern Biblical Scholars
    { id: 'macdonald-homeric', title: 'The Homeric Epics and the Gospel of Mark', author: 'Dennis MacDonald', listenedTimes: 0 },
    { id: 'livesey-galatians', title: 'Galatians and the Rhetoric of Crisis', author: 'Nina E. Livesey', listenedTimes: 0 },
    { id: 'adler-origins', title: 'The Origins of Judaism', author: 'Yonatan Adler', listenedTimes: 0 },
    { id: 'barnea-selected', title: 'Selected Works', author: 'Gad Barnea', listenedTimes: 0 },
    { id: 'gmirkin-plato', title: 'Plato and the Creation of the Hebrew Bible', author: 'Russell Gmirkin', listenedTimes: 0 }
];

// Map of Author to Author + Dates for descriptive chronological viewing
const authorDates = {
    'Homer': 'Homer (c. 8th Century BCE)',
    'Hesiod': 'Hesiod (c. 750 – 650 BCE)',
    'Plato': 'Plato (c. 427 – 347 BCE)',
    'Aristotle': 'Aristotle (c. 384 – 322 BCE)',
    'Epicurus': 'Epicurus (c. 341 – 270 BCE)',
    'Lucretius': 'Lucretius (c. 99 – 55 BCE)',
    'Cicero': 'Cicero (106 – 43 BCE)',
    'Seneca': 'Seneca (c. 4 BCE – 65 CE)',
    'Epictetus': 'Epictetus (c. 55 – 135 CE)',
    'Marcus Aurelius': 'Marcus Aurelius (121 – 180 CE)',
    'St. Augustine': 'St. Augustine (354 – 430 CE)',
    'Boethius': 'Boethius (c. 477 – 524 CE)',
    'Al-Kindi': 'Al-Kindi (801 – 873 CE)',
    'Avicenna': 'Avicenna (980 – 1037 CE)',
    'Al-Ghazali': 'Al-Ghazali (1058 – 1111 CE)',
    'Averroes': 'Averroes (1126 – 1198 CE)',
    'Thomas Aquinas': 'Thomas Aquinas (1225 – 1274 CE)',
    'Machiavelli': 'Machiavelli (1469 – 1527 CE)',
    'Thomas Hobbes': 'Thomas Hobbes (1588 – 1679)',
    'Descartes': 'Descartes (1596 – 1650)',
    'Spinoza': 'Spinoza (1632 – 1677)',
    'John Locke': 'John Locke (1632 – 1704)',
    'David Hume': 'David Hume (1711 – 1776)',
    'J.J. Rousseau': 'J.J. Rousseau (1712 – 1778)',
    'Adam Smith': 'Adam Smith (1723 – 1790)',
    'Immanuel Kant': 'Immanuel Kant (1724 – 1804)',
    'G.W.F. Hegel': 'G.W.F. Hegel (1770 – 1831)',
    'Charles Darwin': 'Charles Darwin (1809 – 1882)',
    'Karl Marx': 'Karl Marx (1818 – 1883)',
    'Nietzsche': 'Nietzsche (1844 – 1900)',
    'Sigmund Freud': 'Sigmund Freud (1856 – 1939)',
    'Albert Einstein': 'Albert Einstein (1879 – 1955)',
    'Alan Turing': 'Alan Turing (1912 – 1954)',
    'J.P. Sartre': 'J.P. Sartre (1905 – 1980)',
    'Dennis MacDonald': 'Dennis MacDonald (Modern Scholar)',
    'Nina E. Livesey': 'Nina E. Livesey (Modern Scholar)',
    'Yonatan Adler': 'Yonatan Adler (Modern Scholar)',
    'Gad Barnea': 'Gad Barnea (Modern Scholar)',
    'Russell Gmirkin': 'Russell Gmirkin (Modern Scholar)'
};

const bookArtworks = {
    'plato-republic': 'assets/books/plato_republic_1780296306777.png',
    'plato-symposium': 'assets/books/plato_symposium_1780296319510.png',
    'plato-apology': 'assets/books/plato_apology_1780296334032.png',
    'plato-phaedrus': 'assets/books/plato_phaedrus_1780296344994.png',
    'plato-timaeus': 'assets/books/plato_timaeus_1780296357663.png',
    'plato-laws': 'assets/books/plato_laws_1780296818835.png',
    'plato-gorgias': 'assets/books/plato_gorgias_1780296830774.png',
    'plato-meno': 'assets/books/plato_meno_1780296842045.png',
    'plato-protagoras': 'assets/books/plato_protagoras_1780296855249.png',
    'plato-cratylus': 'assets/books/plato_cratylus_1780296867029.png',
    'aristotle-nicomachean': 'assets/books/aristotle_nicomachean_1780296370393.png',
    'aristotle-politics': 'assets/books/aristotle_politics_1780296383598.png',
    'aristotle-metaphysics': 'assets/books/aristotle_metaphysics_1780296397119.png',
    'aristotle-poetics': 'assets/books/aristotle_poetics_1780296410879.png',
    'aristotle-soul': 'assets/books/aristotle_soul_1780296425280.png',
    'aristotle-physics': 'assets/books/aristotle_physics_1780296878390.png',
    'aristotle-rhetoric': 'assets/books/aristotle_rhetoric_1780296889443.png',
    'aristotle-heavens': 'assets/books/aristotle_heavens_1780296899901.png',
    'aristotle-generation': 'assets/books/aristotle_generation_1780296912162.png',
    'aristotle-categories': 'assets/books/aristotle_categories_1780296923168.png',
    'homer-iliad': 'assets/books/homer_iliad_1780297012876.png',
    'homer-odyssey': 'assets/books/homer_odyssey_1780297027602.png',
    'hesiod-theogony': 'assets/books/hesiod_theogony_1780297040511.png',
    'hesiod-works': 'assets/books/hesiod_works_1780297051767.png'
};

const authorAvatars = {
    'Homer (c. 8th Century BCE)': 'assets/avatars/homer.png',
    'Hesiod (c. 750 – 650 BCE)': 'assets/avatars/hesiod.png',
    'Plato (c. 427 – 347 BCE)': 'assets/avatars/plato.png',
    'Aristotle (c. 384 – 322 BCE)': 'assets/avatars/aristotle.png',
    'Seneca (c. 4 BCE – 65 CE)': 'assets/avatars/seneca.png',
    'Marcus Aurelius (121 – 180 CE)': 'assets/avatars/marcus_aurelius.png',
    'St. Augustine (354 – 430 CE)': 'assets/avatars/st_augustine.png',
    'Descartes (1596 – 1650)': 'assets/avatars/descartes.png',
    'Dennis MacDonald (Modern Scholar)': 'assets/avatars/dennis_macdonald.png',
    'Nina E. Livesey (Modern Scholar)': 'assets/avatars/nina_livesey.png',
    'Yonatan Adler (Modern Scholar)': 'assets/avatars/yonatan_adler.png',
    'Gad Barnea (Modern Scholar)': 'assets/avatars/gad_barnea.png',
    'Russell Gmirkin (Modern Scholar)': 'assets/avatars/russell_gmirkin.png'
};

const bookDataFiles = {
    'homer-iliad': 'data/homer_iliad.js',
    'homer-odyssey': 'data/homer_odyssey.js',
    'plato-apology': 'data/plato_apology.js',
    'plato-phaedo': 'data/plato_phaedo.js',
    'plato-republic': 'data/plato_republic.js',
    'plato-timaeus': 'data/plato_timaeus.js',
    'plato-critias': 'data/plato_critias.js',
    'plato-laws': 'data/plato_laws.js',
    'aristotle-nicomachean': 'data/aristotle_nicomachean_ethics.js',
    'aristotle-poetics': 'data/aristotle_poetics.js',
    'aristotle-politics': 'data/aristotle_politics.js',
    'aristotle-rhetoric': 'data/aristotle_rhetoric.js'
};

// Apply dates to initialBooks
initialBooks.forEach(book => {
    if (authorDates[book.author]) {
        book.author = authorDates[book.author];
    }
});

// App State
let rawData = localStorage.getItem('libraryDataV2');
let appData;

if (rawData) {
    appData = JSON.parse(rawData);
    if (!appData.authorNotes) appData.authorNotes = {}; // Migration
    
    // Merge new books from initialBooks that might be missing in localStorage
    initialBooks.forEach(initialBook => {
        if (!appData.books.find(b => b.id === initialBook.id)) {
            // Find the correct index to insert it chronologically based on initialBooks
            const targetIndex = initialBooks.findIndex(b => b.id === initialBook.id);
            // Insert it at the targetIndex (or end if array is shorter)
            appData.books.splice(targetIndex, 0, initialBook);
        }
    });
} else {
    // Migration from old V1 format or completely new
    let oldData = JSON.parse(localStorage.getItem('libraryData'));
    appData = {
        books: JSON.parse(JSON.stringify(initialBooks)), // Deep copy to prevent reference issues
        notes: oldData && oldData.notes ? oldData.notes : {},
        authorNotes: {}
    };
    if (oldData && oldData.books) {
        oldData.books.forEach(oldBook => {
            if (oldBook.status === 'completed') {
                const b = appData.books.find(b => b.id === oldBook.id);
                if (b) b.listenedTimes = 1;
            }
        });
    }
}

// Fix orphan books caused by ID changes in previous updates (e.g. aristotle-ethics -> aristotle-nicomachean)
appData.books.forEach(book => {
    if (initialBooks.findIndex(b => b.id === book.id) === -1) {
        // This is an orphan. Try to find its new ID by matching the title.
        let baseAuthor = book.author.split(' (')[0];
        
        let matchingNewBook = initialBooks.find(b => 
            b.title.toLowerCase() === book.title.toLowerCase() && 
            b.author.startsWith(baseAuthor)
        );
        
        // Fallback: If author only has one book, match by author
        if (!matchingNewBook) {
            const authorBooks = initialBooks.filter(b => b.author.startsWith(baseAuthor));
            if (authorBooks.length === 1) {
                matchingNewBook = authorBooks[0];
            }
        }
        
        if (matchingNewBook) {
            // Transfer states to the existing new book if it was already merged
            const alreadyMerged = appData.books.find(b => b.id === matchingNewBook.id && b !== book);
            if (alreadyMerged) {
                if (book.listenedTimes > alreadyMerged.listenedTimes) alreadyMerged.listenedTimes = book.listenedTimes;
                if (book.isPinned) alreadyMerged.isPinned = true;
                // Transfer notes if any
                if (appData.notes[book.id]) {
                    appData.notes[matchingNewBook.id] = appData.notes[book.id];
                    delete appData.notes[book.id];
                }
                book.markForDeletion = true;
            } else {
                book.id = matchingNewBook.id;
            }
        } else {
            // Unresolvable orphan, clean it up so it doesn't break sorting
            book.markForDeletion = true;
        }
    }
});

// Remove old duplicates
appData.books = appData.books.filter(b => !b.markForDeletion);

// Migrate existing books to use author names with dates
appData.books.forEach(book => {
    const initialBook = initialBooks.find(b => b.id === book.id);
    if (initialBook) {
        book.author = initialBook.author;
    }
});

// Migrate author notes keys to use author names with dates
const newAuthorNotes = {};
for (const [oldAuthorKey, notes] of Object.entries(appData.authorNotes)) {
    const newAuthorName = authorDates[oldAuthorKey] || oldAuthorKey;
    newAuthorNotes[newAuthorName] = notes;
}
appData.authorNotes = newAuthorNotes;

// Preserve chronological order based on initialBooks (in case of legacy state)
appData.books.sort((a, b) => {
    const indexA = initialBooks.findIndex(book => book.id === a.id);
    const indexB = initialBooks.findIndex(book => book.id === b.id);
    return indexA - indexB;
});

let currentFilter = 'all';
let currentSort = 'author';
let currentBookId = null;
let currentAuthorId = null; // Track if we are viewing an author
let saveTimeout = null;
let collapsedAuthors = {}; // Track which authors are collapsed
let audiobookPlayer = null; // Global audiobook player instance

// DOM Elements
const bookListEl = document.getElementById('book-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const toggleAllBtn = document.getElementById('toggle-all-btn');
const welcomeScreen = document.getElementById('welcome-screen');
const bookView = document.getElementById('book-view');

const bookTitleEl = document.getElementById('book-title');
const bookAuthorEl = document.getElementById('book-author');
const authorLargeArtworkEl = document.getElementById('author-large-artwork');
const bookStatusEl = document.getElementById('book-status');
const bookWordcountEl = document.getElementById('book-wordcount');
const listenCountEl = document.getElementById('listen-count');
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');
const bookMetaContainer = document.getElementById('book-meta-container');
const listenCounterContainer = document.getElementById('listen-counter-container');

const viewTabs = document.getElementById('view-tabs');
const viewTabBtns = document.querySelectorAll('.view-tab-btn');
const notesView = document.getElementById('notes-view');
const readerView = document.getElementById('reader-view');
const readerText = document.getElementById('reader-text');
const readerViewport = document.getElementById('reader-viewport');
const pagePrevBtn = document.getElementById('page-prev');
const pageNextBtn = document.getElementById('page-next');
const pageIndicator = document.getElementById('page-indicator');

let currentPage = 0;
let totalPages = 0;

let allCollapsed = false;

const notesEditor = document.getElementById('notes-editor');
const saveStatus = document.getElementById('save-status');

// Initialize
function init() {
    saveData(); // Save the newly merged books
    renderBookList();
    setupEventListeners();
    audiobookPlayer = new AudiobookPlayer();
}

// Save to LocalStorage
function saveData() {
    localStorage.setItem('libraryDataV2', JSON.stringify(appData));
    
    saveStatus.textContent = "Saved";
    saveStatus.style.opacity = "1";
    setTimeout(() => { saveStatus.style.opacity = "0"; }, 2000);
}

function createBookElement(book) {
    const li = document.createElement('li');
    li.className = `book-item ${book.id === currentBookId ? 'active' : ''}`;
    li.dataset.id = book.id;
    
    const isListened = book.listenedTimes > 0;
    const isPinned = book.isPinned;
    
    li.innerHTML = `
        <input type="checkbox" class="book-checkbox" ${isListened ? 'checked' : ''} data-id="${book.id}">
        <div class="book-item-content">
            <div class="book-item-author">${book.author}</div>
            <div class="book-item-title">${book.title}</div>
            ${isListened ? `<div class="book-item-listens">Listened: ${book.listenedTimes}x</div>` : ''}
        </div>
        <button class="pin-btn ${isPinned ? 'pinned' : ''}" title="Pin to top">
            <i data-lucide="star" ${isPinned ? 'fill="currentColor"' : ''}></i>
        </button>
    `;
    
    li.addEventListener('click', (e) => {
        if (e.target.closest('.book-checkbox') || e.target.closest('.pin-btn')) return;
        loadBook(book.id);
    });
    
    const checkbox = li.querySelector('.book-checkbox');
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            if (book.listenedTimes === 0) book.listenedTimes = 1;
        } else {
            book.listenedTimes = 0;
        }
        saveData();
        renderBookList();
        if (currentBookId === book.id) loadBook(book.id);
    });

    const pinBtn = li.querySelector('.pin-btn');
    pinBtn.addEventListener('click', (e) => {
        book.isPinned = !book.isPinned;
        saveData();
        renderBookList();
    });

    return li;
}

// Render the sidebar list
function renderBookList() {
    bookListEl.innerHTML = '';
    
    let filteredBooks = appData.books.filter(book => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'unread') return book.listenedTimes === 0;
        if (currentFilter === 'listened') return book.listenedTimes > 0;
        return true;
    });

    // Pinned books always bypass groupings and go to the very top
    const pinnedBooks = filteredBooks.filter(b => b.isPinned);
    const unpinnedBooks = filteredBooks.filter(b => !b.isPinned);

    // Render Pinned Books
    if (pinnedBooks.length > 0) {
        const pinnedHeader = document.createElement('div');
        pinnedHeader.className = 'author-group-header pinned-header';
        pinnedHeader.innerHTML = `<span>⭐ Pinned</span>`;
        bookListEl.appendChild(pinnedHeader);

        const pinnedContainer = document.createElement('div');
        pinnedContainer.className = 'author-group-content';
        pinnedBooks.forEach(book => {
            pinnedContainer.appendChild(createBookElement(book));
        });
        bookListEl.appendChild(pinnedContainer);
    }

    if (currentSort === 'author') {
        toggleAllBtn.classList.remove('hidden');
        // Group by Author (Chronological order maintained by original array index)
        const authorGroups = {};
        unpinnedBooks.forEach(book => {
            if (!authorGroups[book.author]) authorGroups[book.author] = [];
            authorGroups[book.author].push(book);
        });

        for (const [author, books] of Object.entries(authorGroups)) {
            const isCollapsed = collapsedAuthors[author] || false;
            
            const header = document.createElement('div');
            header.className = `author-group-header ${isCollapsed ? 'collapsed' : ''}`;
            
            const avatarSrc = authorAvatars[author];
            const avatarHtml = avatarSrc ? `<img src="${avatarSrc}" class="author-avatar" alt="${author}">` : '';

            header.innerHTML = `
                <div class="author-info">
                    ${avatarHtml}
                    <span>${author}</span>
                </div>
                <div class="author-header-actions">
                    <button class="author-notes-btn" title="Author Notes">
                        <i data-lucide="file-text"></i>
                    </button>
                    <i class="chevron" data-lucide="chevron-down"></i>
                </div>
            `;
            
            const content = document.createElement('div');
            content.className = `author-group-content ${isCollapsed ? 'collapsed' : ''}`;
            
            // Toggle collapse
            header.addEventListener('click', (e) => {
                if (e.target.closest('.author-notes-btn')) return; // Ignore if clicking notes btn
                collapsedAuthors[author] = !collapsedAuthors[author];
                renderBookList();
            });

            // Author Notes click
            const notesBtn = header.querySelector('.author-notes-btn');
            notesBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                loadAuthor(author);
            });

            books.forEach(book => {
                content.appendChild(createBookElement(book));
            });

            bookListEl.appendChild(header);
            bookListEl.appendChild(content);
        }
    } else {
        toggleAllBtn.classList.add('hidden');
        
        // Flat Lists
        unpinnedBooks.sort((a, b) => {
            if (currentSort === 'alphabetical') {
                return a.title.localeCompare(b.title);
            } else if (currentSort === 'listens') {
                return b.listenedTimes - a.listenedTimes;
            } else {
                return appData.books.indexOf(a) - appData.books.indexOf(b); // chronological
            }
        });

        const flatContainer = document.createElement('div');
        flatContainer.className = 'author-group-content';
        unpinnedBooks.forEach(book => {
            flatContainer.appendChild(createBookElement(book));
        });
        bookListEl.appendChild(flatContainer);
    }
    
    lucide.createIcons();
}

// Load a specific book
function loadBook(bookId) {
    currentBookId = bookId;
    currentAuthorId = null;
    
    // Update active class
    document.querySelectorAll('.book-item').forEach(el => {
        el.classList.toggle('active', el.dataset.id === bookId);
    });
    
    const book = appData.books.find(b => b.id === bookId);
    if (!book) return;

    welcomeScreen.classList.add('hidden');
    bookView.classList.remove('hidden');

    // Show Book Meta & Listen Counter
    bookMetaContainer.classList.remove('hidden');
    listenCounterContainer.classList.remove('hidden');

    bookTitleEl.textContent = book.title;
    bookAuthorEl.textContent = book.author;
    
    const artworkSrc = bookArtworks[bookId];
    if (artworkSrc) {
        authorLargeArtworkEl.src = artworkSrc;
        authorLargeArtworkEl.classList.remove('hidden');
    } else {
        authorLargeArtworkEl.classList.add('hidden');
    }
    
    const isListened = book.listenedTimes > 0;
    bookStatusEl.textContent = isListened ? 'Listened Through' : 'Up Next';
    bookStatusEl.className = `status-tag ${isListened ? 'listened' : 'active'}`;
    
    const wordCount = window.bookWordCounts ? window.bookWordCounts[bookId] : null;
    if (wordCount) {
        bookWordcountEl.innerHTML = `<i data-lucide="bar-chart-2"></i> ${wordCount}`;
        bookWordcountEl.classList.remove('hidden');
    } else {
        bookWordcountEl.classList.add('hidden');
    }
    
    listenCountEl.textContent = book.listenedTimes;

    notesEditor.value = appData.notes[bookId] || '';
    notesEditor.placeholder = "Write your thoughts, quotes, and summaries here. These notes stay with the book no matter how many times you re-listen...";
    
    if (bookDataFiles[bookId]) {
        viewTabs.classList.remove('hidden');
    } else {
        viewTabs.classList.add('hidden');
    }
    switchTab('notes');

    lucide.createIcons();
}

// Load Author Notes View
function loadAuthor(authorName) {
    currentAuthorId = authorName;
    currentBookId = null;

    // Remove active class from books
    document.querySelectorAll('.book-item').forEach(el => {
        el.classList.remove('active');
    });

    welcomeScreen.classList.add('hidden');
    bookView.classList.remove('hidden');

    // Hide Book Meta & Listen Counter
    bookMetaContainer.classList.add('hidden');
    listenCounterContainer.classList.add('hidden');

    const avatarSrc = authorAvatars[authorName];
    if (avatarSrc) {
        authorLargeArtworkEl.src = avatarSrc;
        authorLargeArtworkEl.classList.remove('hidden');
    } else {
        authorLargeArtworkEl.classList.add('hidden');
    }

    bookTitleEl.textContent = `Notes on ${authorName}`;
    
    notesEditor.value = appData.authorNotes[authorName] || '';
    notesEditor.placeholder = `Write high-level thoughts, themes, or historical context about ${authorName} here...`;
    
    viewTabs.classList.add('hidden');
    switchTab('notes');

    lucide.createIcons();
}

function switchTab(viewId) {
    viewTabBtns.forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.querySelector(`.view-tab-btn[data-view="${viewId}"]`);
    if (targetBtn) targetBtn.classList.add('active');
    
    if (viewId === 'notes') {
        notesView.classList.remove('hidden');
        readerView.classList.add('hidden');
    } else {
        notesView.classList.add('hidden');
        readerView.classList.remove('hidden');
        loadBookText();
    }
}

async function loadBookText() {
    if (!currentBookId) return;
    const file = bookDataFiles[currentBookId];
    if (!file) return;
    
    window.bookDataCache = window.bookDataCache || {};
    if (window.bookDataCache[currentBookId]) {
        renderBookTextFromCache();
        return;
    }
    
    readerText.innerHTML = '<div style="text-align: center; opacity: 0.5; margin-top: 50px;"><i data-lucide="loader" class="spin"></i> Loading text...</div>';
    lucide.createIcons();
    
    const script = document.createElement('script');
    script.src = file;
    script.onload = () => {
        if (window.bookDataCache[currentBookId]) {
            renderBookTextFromCache();
        } else {
            readerText.innerHTML = '<div style="color: #ff5252; text-align: center; margin-top: 50px;">Failed to load book text.</div>';
        }
    };
    script.onerror = () => {
        readerText.innerHTML = '<div style="color: #ff5252; text-align: center; margin-top: 50px;">Failed to load book text.</div>';
    };
    document.body.appendChild(script);
}

function renderBookTextFromCache() {
    const rawText = window.bookDataCache[currentBookId].text;
    const artworks = window.inlineArtworks ? (window.inlineArtworks[currentBookId] || {}) : {};
    
    // Format into proper book paragraphs
    const paragraphs = rawText.split(/\n\s*\n/);
    let formattedHtml = '';
    let paragraphIndex = 0;
    
    paragraphs.forEach(p => {
        const text = p.trim();
        if (!text) return;
        
        // Inject inline artwork if it exists for this paragraph
        if (artworks[paragraphIndex]) {
            formattedHtml += `<img src="${artworks[paragraphIndex]}" class="inline-scene" alt="Scene illustration" loading="lazy">`;
        }
        
        // Detect chapter headings (short, often uppercase)
        if (text.length < 60 && (text.toUpperCase() === text || text.startsWith('BOOK') || text.startsWith('CHAPTER') || text.match(/^[IVXLCDM]+\.?$/))) {
             formattedHtml += `<p class="chapter-heading" data-paragraph-index="${paragraphIndex}">${text}</p>`;
        } else {
             // Collapse inner newlines so the paragraph flows naturally
             formattedHtml += `<p data-paragraph-index="${paragraphIndex}">${text.replace(/\n/g, ' ')}</p>`; 
        }
        paragraphIndex++;
    });
    
    readerText.innerHTML = formattedHtml;
    readerText.style.transform = 'translateX(0px)';
    
    setTimeout(() => {
        // Initialize audiobook player for this book
        if (audiobookPlayer) {
            audiobookPlayer.init(currentBookId);
        }
    }, 100);
}

// Pagination removed in favor of continuous scroll

// Event Listeners
function setupEventListeners() {
    viewTabBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            switchTab(e.currentTarget.dataset.view);
        });
    });

    window.addEventListener('resize', () => {
        // Handle window resize logic if needed
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            renderBookList();
        });
    });

    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderBookList();
    });

    toggleAllBtn.addEventListener('click', () => {
        allCollapsed = !allCollapsed;
        const authors = new Set(appData.books.map(b => b.author));
        authors.forEach(author => {
            collapsedAuthors[author] = allCollapsed;
        });
        
        if (allCollapsed) {
            toggleAllBtn.innerHTML = '<i data-lucide="chevrons-down"></i>';
        } else {
            toggleAllBtn.innerHTML = '<i data-lucide="chevrons-up-down"></i>';
        }
        lucide.createIcons();
        renderBookList();
    });

    btnDecrease.addEventListener('click', () => {
        if (!currentBookId) return;
        const book = appData.books.find(b => b.id === currentBookId);
        if (book.listenedTimes > 0) {
            book.listenedTimes--;
            saveData();
            loadBook(currentBookId);
            renderBookList();
        }
    });

    btnIncrease.addEventListener('click', () => {
        if (!currentBookId) return;
        const book = appData.books.find(b => b.id === currentBookId);
        book.listenedTimes++;
        saveData();
        loadBook(currentBookId);
        renderBookList();
    });

    notesEditor.addEventListener('input', (e) => {
        if (!currentBookId && !currentAuthorId) return;
        
        saveStatus.textContent = "Saving...";
        saveStatus.style.opacity = "1";
        
        clearTimeout(saveTimeout);
        saveTimeout = setTimeout(() => {
            if (currentBookId) {
                appData.notes[currentBookId] = e.target.value;
            } else if (currentAuthorId) {
                appData.authorNotes[currentAuthorId] = e.target.value;
            }
            saveData();
        }, 800);
    });
}

// ============================================
// AUDIOBOOK PLAYER CLASS
// ============================================

class AudiobookPlayer {
    constructor() {
        this.audio = new Audio();
        this.ambienceAudio = null;
        this.metadata = null;
        this.currentChapter = 1;
        this.currentParagraphIndex = -1;
        this.isPlaying = false;
        this.totalChapters = 24;
        this.manifest = null;
        this.animFrameId = null;
        this.illustrationTimeout = null;
        this.currentBookId = null;
        this.immersiveMode = false;
        this.currentIllustrationSrc = null;
        this.paragraphIndexMap = {}; // Maps metadata index -> DOM paragraph index

        this.ambienceMap = {
            ocean: '🌊',
            palace: '🏛️',
            cave: '🕳️',
            storm: '⛈️',
            feast_hall: '🍷',
            battlefield: '⚔️',
            underworld: '💀',
            island: '🏝️',
            forest: '🌲',
            city: '🏙️',
            temple: '🛕',
            night: '🌙',
            dawn: '🌅',
            fire: '🔥'
        };

        this.controls = {
            playPause: document.getElementById('ab-play-pause'),
            progress: document.getElementById('ab-progress'),
            time: document.getElementById('ab-time'),
            chapterSelect: document.getElementById('ab-chapter-select'),
            ambienceIcon: document.getElementById('ab-ambience-icon'),
            volume: document.getElementById('ab-volume'),
            speed: document.getElementById('ab-speed'),
            prevChapter: document.getElementById('ab-prev-chapter'),
            nextChapter: document.getElementById('ab-next-chapter'),
            container: document.getElementById('audiobook-controls'),
            illustration: document.getElementById('scene-illustration'),
            illustrationImg: document.getElementById('scene-illustration-img'),
            immersiveToggle: document.getElementById('ab-immersive-toggle'),
            illustrationPanel: document.getElementById('illustration-panel'),
            panelImg: document.getElementById('panel-illustration-img'),
            panelCaption: document.getElementById('panel-illustration-caption'),
            readerSplit: document.getElementById('reader-split'),
        };

        this.bindEvents();
    }

    async init(bookId) {
        this.currentBookId = bookId;
        try {
            const resp = await fetch(`audiobook/manifest.json`);
            if (!resp.ok) {
                this.hideControls();
                return;
            }
            this.manifest = await resp.json();
        } catch (e) {
            this.hideControls();
            return;
        }

        // Check if this book has audiobook data
        // Manifest uses chapters array format
        const hasAudiobook = bookId === 'homer-odyssey' && this.manifest.chapters && this.manifest.chapters.length > 0;
        if (!hasAudiobook) {
            this.hideControls();
            return;
        }

        this.totalChapters = this.manifest.total_chapters || this.manifest.chapters.length;
        this.currentChapter = 1;

        // Populate chapter select
        this.controls.chapterSelect.innerHTML = '';
        for (let i = 0; i < this.manifest.chapters.length; i++) {
            const ch = this.manifest.chapters[i];
            const opt = document.createElement('option');
            opt.value = ch.book_num;
            opt.textContent = ch.title ? `${ch.chapter} - ${ch.title}` : ch.chapter;
            this.controls.chapterSelect.appendChild(opt);
        }

        // Show controls and mark reader as having audiobook
        this.showControls();
        readerText.classList.add('audiobook-active');
        readerView.classList.add('has-audiobook');

        // Load first chapter
        await this.loadChapter(1);

    }

    async loadChapter(chapterNum) {
        this.pause();
        this.currentChapter = chapterNum;
        this.currentParagraphIndex = -1;
        this.clearHighlight();

        const padded = String(chapterNum).padStart(2, '0');
        const audioPath = `audiobook/chapters/book_${padded}.wav`;
        const metaPath = `audiobook/chapters/book_${padded}_meta.json`;

        try {
            const metaResp = await fetch(metaPath);
            if (metaResp.ok) {
                this.metadata = await metaResp.json();
            } else {
                this.metadata = null;
            }
        } catch (e) {
            this.metadata = null;
        }

        this.audio.src = audioPath;
        this.audio.load();
        this.audio.volume = this.controls.volume.value / 100;

        // Update chapter select
        this.controls.chapterSelect.value = chapterNum;

        // Reset progress
        this.controls.progress.value = 0;
        this.controls.time.textContent = `0:00 / 0:00`;

        // Set initial ambience from first paragraph
        if (this.metadata && this.metadata.paragraphs && this.metadata.paragraphs.length > 0) {
            const firstAmbience = this.metadata.paragraphs[0].ambience;
            if (firstAmbience) {
                this.setAmbience(firstAmbience);
            }
        }

        // Build mapping from metadata paragraph indices to DOM paragraph indices
        this.buildParagraphMap();
    }

    buildParagraphMap() {
        this.paragraphIndexMap = {};
        if (!this.metadata || !this.metadata.paragraphs) return;

        const domParagraphs = readerText.querySelectorAll('p[data-paragraph-index]');
        if (domParagraphs.length === 0) return;

        // Build a normalized text lookup from DOM paragraphs
        const domTexts = [];
        domParagraphs.forEach(el => {
            const idx = parseInt(el.dataset.paragraphIndex);
            // Normalize: collapse whitespace, trim, lowercase, take first 60 chars
            const normalized = el.textContent.replace(/\s+/g, ' ').trim().toLowerCase().substring(0, 60);
            domTexts.push({ idx, normalized });
        });

        // For each metadata paragraph, find the matching DOM paragraph
        this.metadata.paragraphs.forEach(metaPara => {
            const metaText = (metaPara.text || '').replace(/\s+/g, ' ').trim().toLowerCase().substring(0, 60);
            if (!metaText) return;

            const match = domTexts.find(d => d.normalized.startsWith(metaText.substring(0, 40)) || metaText.startsWith(d.normalized.substring(0, 40)));
            if (match) {
                this.paragraphIndexMap[metaPara.index] = match.idx;
            }
        });

        // If text matching found nothing, try offset-based fallback
        if (Object.keys(this.paragraphIndexMap).length === 0) {
            // Simple fallback: assume metadata indices map 1:1
            this.metadata.paragraphs.forEach(metaPara => {
                this.paragraphIndexMap[metaPara.index] = metaPara.index;
            });
        }
    }

    play() {
        if (!this.audio.src) return;
        this.audio.play().catch(() => {});
        this.isPlaying = true;
        this.controls.playPause.textContent = '⏸';
        this.controls.playPause.classList.add('playing');
        this.startAnimLoop();
    }

    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.controls.playPause.textContent = '▶';
        this.controls.playPause.classList.remove('playing');
        this.stopAnimLoop();
    }

    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    }

    startAnimLoop() {
        const loop = () => {
            this.onTimeUpdate();
            this.animFrameId = requestAnimationFrame(loop);
        };
        this.animFrameId = requestAnimationFrame(loop);
    }

    stopAnimLoop() {
        if (this.animFrameId) {
            cancelAnimationFrame(this.animFrameId);
            this.animFrameId = null;
        }
    }

    onTimeUpdate() {
        const currentTime = this.audio.currentTime;
        const duration = this.audio.duration || 0;

        // Update progress bar
        if (duration > 0) {
            this.controls.progress.value = Math.floor((currentTime / duration) * 1000);
        }

        // Update time display
        this.controls.time.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(duration)}`;

        // Find current paragraph from metadata
        if (!this.metadata || !this.metadata.paragraphs) return;

        const paragraphs = this.metadata.paragraphs;
        let newIndex = -1;

        for (let i = paragraphs.length - 1; i >= 0; i--) {
            if (currentTime >= paragraphs[i].start_time) {
                newIndex = paragraphs[i].index;
                break;
            }
        }

        if (newIndex !== this.currentParagraphIndex && newIndex >= 0) {
            const prevIndex = this.currentParagraphIndex;
            this.currentParagraphIndex = newIndex;

            this.highlightParagraph(newIndex, prevIndex);

            // Check for ambience changes
            const para = paragraphs.find(p => p.index === newIndex);
            if (para) {
                if (para.ambience) {
                    this.setAmbience(para.ambience);
                }
                // Check for illustration
                if (para.illustration) {
                    this.showIllustration(para.illustration);
                }
            }
        }
    }

    highlightParagraph(index, prevIndex) {
        // Use the map to translate metadata index -> DOM index
        const domIndex = this.paragraphIndexMap[index];
        const prevDomIndex = this.paragraphIndexMap[prevIndex];

        // Remove previous highlight
        if (prevDomIndex !== undefined && prevDomIndex >= 0) {
            const prevEl = readerText.querySelector(`p[data-paragraph-index="${prevDomIndex}"]`);
            if (prevEl) {
                prevEl.classList.remove('paragraph-active');
            }
        }

        // Add new highlight
        if (domIndex === undefined) return;
        const el = readerText.querySelector(`p[data-paragraph-index="${domIndex}"]`);
        if (!el) return;

        el.classList.add('paragraph-active');

        // Auto page turn if needed
        this.autoPageTurn(el);
    }

    clearHighlight() {
        const active = readerText.querySelector('.paragraph-active');
        if (active) active.classList.remove('paragraph-active');
    }

    autoPageTurn(paragraphElement) {
        paragraphElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setAmbience(name) {
        const icon = this.ambienceMap[name];
        if (icon) {
            this.controls.ambienceIcon.textContent = icon;
            this.controls.ambienceIcon.title = `Ambience: ${name}`;
        }

        // If ambience audio files exist, crossfade to them
        if (this.currentAmbience === name) return;
        this.currentAmbience = name;

        const ambiencePath = `audiobook/ambience/${name}.mp3`;

        // Fade out old ambience
        if (this.ambienceAudio) {
            const oldAmbience = this.ambienceAudio;
            this.fadeAudio(oldAmbience, oldAmbience.volume, 0, 1500, () => {
                oldAmbience.pause();
                oldAmbience.src = '';
            });
        }

        // Start new ambience
        const newAmbience = new Audio(ambiencePath);
        newAmbience.loop = true;
        newAmbience.volume = 0;
        this.ambienceAudio = newAmbience;
        newAmbience.play().then(() => {
            const targetVol = Math.min(0.15, (this.controls.volume.value / 100) * 0.2);
            this.fadeAudio(newAmbience, 0, targetVol, 2000);
        }).catch(() => {
            // Ambience file not found — that's fine, just skip
        });
    }

    fadeAudio(audioEl, from, to, duration, onDone) {
        const startTime = performance.now();
        const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            audioEl.volume = from + (to - from) * progress;
            if (progress < 1) {
                requestAnimationFrame(step);
            } else if (onDone) {
                onDone();
            }
        };
        requestAnimationFrame(step);
    }

    showIllustration(imagePath) {
        const fullPath = imagePath.startsWith('audiobook/') ? imagePath : `audiobook/${imagePath}`;

        // Avoid reloading the same image
        if (this.currentIllustrationSrc === fullPath) return;
        this.currentIllustrationSrc = fullPath;

        if (this.immersiveMode) {
            // Side panel mode — show alongside text
            if (!this.controls.panelImg) return;
            this.controls.panelImg.classList.remove('loaded');
            this.controls.panelImg.src = fullPath;
            this.controls.panelImg.onload = () => {
                this.controls.panelImg.classList.add('loaded');
            };
        } else {
            // Overlay mode — show on top of text
            if (!this.controls.illustration || !this.controls.illustrationImg) return;
            this.controls.illustrationImg.src = fullPath;
            this.controls.illustration.classList.remove('hidden');

            requestAnimationFrame(() => {
                this.controls.illustration.classList.add('visible');
            });

            clearTimeout(this.illustrationTimeout);
            this.illustrationTimeout = setTimeout(() => {
                this.hideIllustration();
            }, 8000);
        }
    }

    hideIllustration() {
        if (!this.controls.illustration) return;
        this.controls.illustration.classList.remove('visible');
        setTimeout(() => {
            this.controls.illustration.classList.add('hidden');
        }, 800);
    }

    toggleImmersiveMode() {
        this.immersiveMode = !this.immersiveMode;

        // Toggle button state
        if (this.controls.immersiveToggle) {
            this.controls.immersiveToggle.classList.toggle('active', this.immersiveMode);
        }

        // Toggle full screen reader by hiding sidebar
        const appContainer = document.querySelector('.app-container');
        if (appContainer) {
            appContainer.classList.toggle('immersive-mode', this.immersiveMode);
        }
    }

    seekToProgress(value) {
        const duration = this.audio.duration || 0;
        if (duration > 0) {
            this.audio.currentTime = (value / 1000) * duration;
        }
    }

    seekToParagraph(index) {
        if (!this.metadata || !this.metadata.paragraphs) return;
        const para = this.metadata.paragraphs.find(p => p.index === index);
        if (para) {
            this.audio.currentTime = para.start_time;
            if (!this.isPlaying) {
                this.play();
            }
        }
    }

    formatTime(seconds) {
        if (isNaN(seconds) || !isFinite(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    showControls() {
        if (this.controls.container) {
            this.controls.container.classList.remove('hidden');
        }
    }

    hideControls() {
        if (this.controls.container) {
            this.controls.container.classList.add('hidden');
        }
        readerText.classList.remove('audiobook-active');
    }

    bindEvents() {
        // Play/Pause
        if (this.controls.playPause) {
            this.controls.playPause.addEventListener('click', () => this.toggle());
        }

        // Progress bar seek
        if (this.controls.progress) {
            this.controls.progress.addEventListener('input', (e) => {
                this.seekToProgress(parseInt(e.target.value));
            });
        }

        // Volume
        if (this.controls.volume) {
            this.controls.volume.addEventListener('input', (e) => {
                this.audio.volume = e.target.value / 100;
                if (this.ambienceAudio) {
                    this.ambienceAudio.volume = Math.min(0.15, (e.target.value / 100) * 0.2);
                }
            });
        }

        // Speed control
        if (this.controls.speed) {
            this.controls.speed.addEventListener('change', (e) => {
                this.audio.playbackRate = parseFloat(e.target.value);
            });
        }

        // Immersive mode toggle
        if (this.controls.immersiveToggle) {
            this.controls.immersiveToggle.addEventListener('click', () => {
                this.toggleImmersiveMode();
            });
        }

        // Chapter select
        if (this.controls.chapterSelect) {
            this.controls.chapterSelect.addEventListener('change', (e) => {
                this.loadChapter(parseInt(e.target.value));
            });
        }

        // Previous / Next chapter
        if (this.controls.prevChapter) {
            this.controls.prevChapter.addEventListener('click', () => {
                if (this.currentChapter > 1) {
                    this.loadChapter(this.currentChapter - 1);
                }
            });
        }
        if (this.controls.nextChapter) {
            this.controls.nextChapter.addEventListener('click', () => {
                if (this.currentChapter < this.totalChapters) {
                    this.loadChapter(this.currentChapter + 1);
                }
            });
        }

        // Audio ended — auto-advance chapter
        this.audio.addEventListener('ended', () => {
            if (this.currentChapter < this.totalChapters) {
                this.loadChapter(this.currentChapter + 1).then(() => this.play());
            } else {
                this.pause();
            }
        });

        // Click-on-paragraph to seek
        readerText.addEventListener('click', (e) => {
            const p = e.target.closest('p[data-paragraph-index]');
            if (!p || !readerText.classList.contains('audiobook-active')) return;
            const domIdx = parseInt(p.dataset.paragraphIndex);
            if (isNaN(domIdx)) return;

            // Reverse-map: find metadata index from DOM index
            let metaIdx = null;
            for (const [metaKey, domVal] of Object.entries(this.paragraphIndexMap)) {
                if (domVal === domIdx) {
                    metaIdx = parseInt(metaKey);
                    break;
                }
            }
            if (metaIdx !== null) {
                this.seekToParagraph(metaIdx);
            }
        });

        // Click illustration to dismiss
        if (this.controls.illustration) {
            this.controls.illustration.addEventListener('click', () => {
                this.hideIllustration();
            });
        }

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Only handle when audiobook controls are visible
            if (!this.controls.container || this.controls.container.classList.contains('hidden')) return;
            // Don't capture when typing in textarea
            if (e.target.tagName === 'TEXTAREA' || e.target.tagName === 'INPUT') return;

            switch (e.code) {
                case 'Space':
                    e.preventDefault();
                    this.toggle();
                    break;
                case 'ArrowLeft':
                    if (e.shiftKey) {
                        this.audio.currentTime = Math.max(0, this.audio.currentTime - 30);
                    } else {
                        this.audio.currentTime = Math.max(0, this.audio.currentTime - 10);
                    }
                    break;
                case 'ArrowRight':
                    if (e.shiftKey) {
                        this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 30);
                    } else {
                        this.audio.currentTime = Math.min(this.audio.duration, this.audio.currentTime + 10);
                    }
                    break;
            }
        });
    }

    destroy() {
        this.pause();
        this.stopAnimLoop();
        this.audio.src = '';
        if (this.ambienceAudio) {
            this.ambienceAudio.pause();
            this.ambienceAudio.src = '';
        }
        clearTimeout(this.illustrationTimeout);
        this.clearHighlight();
        this.hideControls();
    }
}

// Run
init();
