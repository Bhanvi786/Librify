const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

loginBtn.onclick = function(e) {
  e.preventDefault();
  loginModal.style.display = "block";
}

closeLogin.onclick = function() {
  loginModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target === loginModal) {
    loginModal.style.display = "none";
  }
}

document.getElementById('couponTrigger').onclick = function() {
  document.getElementById('couponPopup').classList.add('open');
  document.getElementById('couponTrigger').style.display = 'none';
};


document.querySelector('.coupon-popup-vertical').onclick = function() {
  document.getElementById('couponPopup').classList.remove('open');
  document.getElementById('couponTrigger').style.display = 'flex';
  
  document.getElementById('couponModal').classList.remove('open');
};


document.getElementById('closeModalBtn').onclick = function() {
  document.getElementById('couponModal').classList.remove('open');
};


document.getElementById('couponModal').onclick = function(event) {
  if (event.target === this) {
    this.classList.remove('open');
  }
};


const mainImg = document.querySelector('.main_img img');
if (mainImg) {
  let direction = 1; 
  let position = 0;
  const maxOffset = 20; 
  const speed = 0.5; 
  function animate() {
    position += direction * speed;
    if (position > maxOffset || position < 0) {
      direction *= -1;
    }
    mainImg.style.transform = `translateY(${position}px)`;
    requestAnimationFrame(animate);
  }
  animate();
}


const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselTrack = document.getElementById('carouselTrack');

let currentIndex = 0;

function updateCarousel() {
  const cards = carouselTrack.querySelectorAll('.combo-card');
  const cardWidth = cards[0].offsetWidth;
  const visibleCards = Math.floor(carouselTrack.parentElement.offsetWidth / cardWidth);
  const maxIndex = cards.length - visibleCards;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  carouselTrack.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
const books = [
  { title: "Atomic Habits", author: "James Clear", page: "book1.html", image: "Images/book1.jpg" },
  { title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki", page: "book2.html", image: "Images/book2.jpg" },
  { title: "Grandma's Bag of Stories", author: "Sudha Murty", page: "book3.html", image: "Images/book3.jpeg" },
  { title: "Onyx Storm", author: "Rebecca Yarros", page: "book4.html", image: "Images/book4.jpeg" },
  { title: "Invisible Helix", author: "Keigo Higashino", page: "book5.html", image: "Images/book6.jpg" },
  { title: "How AI Works", author: "Unknown", page: "book6.html", image: "Images/book7.jpg" },
  { title: "The Science of Self-Discipline", author: "Peter Hollins", page: "book5.html", image: "book5.jpg" },
  { title: "Rewire Your Anxious Brain", author: "Nick Trenton", page: "book8.html", image: "book8.jpg" },
  { title: "House of Glass", author: "Sarah Pekkanen", page: "book9.html", image: "book9.jpg" }
];



const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
const searchForm = document.getElementById('searchForm');

function filterBooks(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return books.filter(book =>
    book.title.toLowerCase().includes(q) ||
    book.author.toLowerCase().includes(q)
  );
}


function renderDropdown(results) {
  if (!results.length) {
    searchDropdown.innerHTML = `<ul><li style="color:#888;cursor:default;">No books found.</li></ul>`;
    searchDropdown.style.display = 'block';
    return;
  }
  searchDropdown.innerHTML = `<ul>` + results.map(book =>
    `<li tabindex="0" data-page="${book.page}" class="book-item">
      <div class="book-image">
        <img src="${book.image}" alt="${book.title}" width="40">
      </div>
      <div class="book-info">
        <span class="book-title">${book.title}</span>
        <span class="book-author">by ${book.author}</span>
      </div>
    </li>`
  ).join('') + `</ul>`;
  searchDropdown.style.display = 'block';
}

function hideDropdown() {
  searchDropdown.style.display = 'none';
}


searchInput.addEventListener('input', function() {
  const val = this.value;
  const results = filterBooks(val);
  if (val.trim()) {
    renderDropdown(results);
  } else {
    hideDropdown();
  }
});


searchForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const val = searchInput.value.trim();
  if (val) {
    const results = filterBooks(val);
    renderDropdown(results);
  } else {
    hideDropdown();
  }
});


searchDropdown.addEventListener('click', function(e) {
  const li = e.target.closest('li[data-page]');
  if (li) {
    window.location.href = li.getAttribute('data-page');
  }
});


document.addEventListener('click', function(e) {
  if (!searchDropdown.contains(e.target) && !searchForm.contains(e.target)) {
    hideDropdown();
  }
});


searchInput.addEventListener('focus', function() {
  const val = this.value;
  if (val.trim()) {
    renderDropdown(filterBooks(val));
  }
});
