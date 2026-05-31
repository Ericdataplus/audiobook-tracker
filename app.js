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
    { id: 'sartre-being', title: 'Being and Nothingness', author: 'J.P. Sartre', listenedTimes: 0 }
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
    'J.P. Sartre': 'J.P. Sartre (1905 – 1980)'
};

const authorAvatars = {
    'Homer (c. 8th Century BCE)': 'assets/avatars/homer.png',
    'Hesiod (c. 750 – 650 BCE)': 'assets/avatars/hesiod.png',
    'Plato (c. 427 – 347 BCE)': 'assets/avatars/plato.png',
    'Aristotle (c. 384 – 322 BCE)': 'assets/avatars/aristotle.png',
    'Seneca (c. 4 BCE – 65 CE)': 'assets/avatars/seneca.png',
    'Marcus Aurelius (121 – 180 CE)': 'assets/avatars/marcus_aurelius.png',
    'Descartes (1596 – 1650)': 'assets/avatars/descartes.png'
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

// DOM Elements
const bookListEl = document.getElementById('book-list');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');
const welcomeScreen = document.getElementById('welcome-screen');
const bookView = document.getElementById('book-view');

const bookTitleEl = document.getElementById('book-title');
const bookAuthorEl = document.getElementById('book-author');
const authorLargeArtworkEl = document.getElementById('author-large-artwork');
const bookStatusEl = document.getElementById('book-status');
const listenCountEl = document.getElementById('listen-count');
const btnDecrease = document.getElementById('btn-decrease');
const btnIncrease = document.getElementById('btn-increase');
const bookMetaContainer = document.getElementById('book-meta-container');
const listenCounterContainer = document.getElementById('listen-counter-container');

const notesEditor = document.getElementById('notes-editor');
const saveStatus = document.getElementById('save-status');

// Initialize
function init() {
    saveData(); // Save the newly merged books
    renderBookList();
    setupEventListeners();
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
    authorLargeArtworkEl.classList.add('hidden');
    
    const isListened = book.listenedTimes > 0;
    bookStatusEl.textContent = isListened ? 'Listened Through' : 'Up Next';
    bookStatusEl.className = `status-tag ${isListened ? 'listened' : 'active'}`;
    
    listenCountEl.textContent = book.listenedTimes;

    notesEditor.value = appData.notes[bookId] || '';
    notesEditor.placeholder = "Write your thoughts, quotes, and summaries here. These notes stay with the book no matter how many times you re-listen...";
    
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
    
    lucide.createIcons();
}

// Event Listeners
function setupEventListeners() {
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

// Run
init();
