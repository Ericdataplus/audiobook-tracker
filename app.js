// Book data extracted from READING_LIST.md
const initialBooks = [
    { id: 'homer-iliad', title: 'The Iliad', author: 'Homer', listenedTimes: 0 },
    { id: 'homer-odyssey', title: 'The Odyssey', author: 'Homer', listenedTimes: 0 },
    { id: 'plato-apology', title: 'Apology', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-phaedrus', title: 'Phaedrus', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-republic', title: 'Republic', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-laws', title: 'Laws', author: 'Plato', listenedTimes: 0 },
    { id: 'plato-timaeus', title: 'Timaeus', author: 'Plato', listenedTimes: 0 },
    { id: 'aristotle-metaphysics', title: 'Metaphysics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-ethics', title: 'Nicomachean Ethics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-politics', title: 'Politics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'aristotle-poetics', title: 'Poetics', author: 'Aristotle', listenedTimes: 0 },
    { id: 'epicurus-letter', title: 'Letter to Menoeceus', author: 'Epicurus', listenedTimes: 0 },
    { id: 'lucretius-nature', title: 'On the Nature of Things', author: 'Lucretius', listenedTimes: 0 },
    { id: 'seneca-letters', title: 'Letters from a Stoic', author: 'Seneca', listenedTimes: 0 },
    { id: 'aurelius-meditations', title: 'Meditations', author: 'Marcus Aurelius', listenedTimes: 0 },
    { id: 'machiavelli-prince', title: 'The Prince', author: 'Machiavelli', listenedTimes: 0 },
    { id: 'machiavelli-discourses', title: 'Discourses on Livy', author: 'Machiavelli', listenedTimes: 0 },
    { id: 'descartes-discourse', title: 'Discourse on the Method', author: 'Descartes', listenedTimes: 0 },
    { id: 'descartes-meditations', title: 'Meditations on First Philosophy', author: 'Descartes', listenedTimes: 0 },
    { id: 'spinoza-theological', title: 'Theological-Political Treatise', author: 'Spinoza', listenedTimes: 0 },
    { id: 'spinoza-ethics', title: 'Ethics', author: 'Spinoza', listenedTimes: 0 },
    { id: 'nietzsche-zarathustra', title: 'Thus Spoke Zarathustra', author: 'Nietzsche', listenedTimes: 0 },
    { id: 'nietzsche-beyond', title: 'Beyond Good and Evil', author: 'Nietzsche', listenedTimes: 0 },
    { id: 'nietzsche-genealogy', title: 'On the Genealogy of Morality', author: 'Nietzsche', listenedTimes: 0 }
];

// App State
let rawData = localStorage.getItem('libraryDataV2');
let appData;

if (rawData) {
    appData = JSON.parse(rawData);
    if (!appData.authorNotes) appData.authorNotes = {}; // Migration
} else {
    // Migration from old V1 format or completely new
    let oldData = JSON.parse(localStorage.getItem('libraryData'));
    appData = {
        books: initialBooks,
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
            header.innerHTML = `
                <span>${author}</span>
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
