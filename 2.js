// Carousel functionality
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const comboCards = document.querySelectorAll('.combo-card');
const carouselContainer = document.querySelector('.carousel-container');

let position = 0;
let visibleCards = 4;

function updateVisibleCards() {
  const cardWidth = comboCards[0].offsetWidth + 18; // 18px gap
  const containerWidth = carouselContainer.offsetWidth;
  visibleCards = Math.floor(containerWidth / cardWidth);
  if (visibleCards < 1) visibleCards = 1;
  moveCarousel(0); // Reset position on resize
}

function moveCarousel(direction) {
  const totalCards = comboCards.length;
  position += direction;

  // Clamp position
  if (position < 0) position = 0;
  if (position > totalCards - visibleCards) position = totalCards - visibleCards;

  const cardWidth = comboCards[0].offsetWidth + 18; // 18px gap
  track.style.transform = `translateX(-${position * cardWidth}px)`;

  // Disable/enable buttons
  prevBtn.disabled = position === 0;
  nextBtn.disabled = position >= totalCards - visibleCards;
}

// Button events
prevBtn.addEventListener('click', () => moveCarousel(-1));
nextBtn.addEventListener('click', () => moveCarousel(1));
window.addEventListener('resize', updateVisibleCards);
// Initialize
updateVisibleCards();
// Book data with matching HTML page for each
const books = [
  { title: "Atomic Habits", author: "James Clear", page: "book1.html" },
  { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", page: "book2.html" },
  { title: "Grandma's Bag of Stories", author: "Sudha Murty", page: "book3.html" },
  { title: "Onyx Storm", author: "Rebecca Yarros", page: "book4.html" }
];

const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
const searchForm = document.getElementById('searchForm');

// Render dropdown with clickable links
function renderDropdown(results) {
  if (!results.length) {
    searchDropdown.innerHTML = `<ul><li style="color:#888;cursor:default;">No books found.</li></ul>`;
    searchDropdown.style.display = 'block';
    return;
  }
  searchDropdown.innerHTML = `<ul>` + results.map(book =>
    `<li tabindex="0" data-page="${book.page}">
      <span class="book-title">${book.title}</span>
      <span class="book-author">by ${book.author}</span>
    </li>`
  ).join('') + `</ul>`;
  searchDropdown.style.display = 'block';
}

// Hide dropdown
function hideDropdown() {
  searchDropdown.style.display = 'none';
}

// Filter books by query
function filterBooks(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return books.filter(book =>
    book.title.toLowerCase().includes(q) ||
    book.author.toLowerCase().includes(q)
  );
}

// Show dropdown on input
searchInput.addEventListener('input', function() {
  const val = this.value;
  const results = filterBooks(val);
  if (val.trim()) {
    renderDropdown(results);
  } else {
    hideDropdown();
  }
});

// Fill input and go to book page on dropdown click
searchDropdown.addEventListener('click', function(e) {
  const li = e.target.closest('li[data-page]');
  if (li) {
    searchInput.value = li.querySelector('.book-title').textContent;
    hideDropdown();
    // Navigate to the selected book's page
    window.location.href = li.getAttribute('data-page');
  }
});

// Show dropdown on focus if input has value
searchInput.addEventListener('focus', function() {
  const val = this.value;
  if (val.trim()) {
    renderDropdown(filterBooks(val));
  }
});

// Hide dropdown when clicking outside
document.addEventListener('click', function(e) {
  if (!searchDropdown.contains(e.target) && !searchForm.contains(e.target)) {
    hideDropdown();
  }
});

// Prevent form submission for demo
searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const results = filterBooks(searchInput.value);
  renderDropdown(results);
});

// --- CLICKABLE BOOK CARDS LOGIC ---

// Select all book cards (ensure these have class "book-card" in your HTML)
const bookCards = document.querySelectorAll('.book-card');

// Add click listeners to each book card
bookCards.forEach((card, idx) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    if (books[idx] && books[idx].page) {
      window.location.href = books[idx].page;
    }
  });
});
