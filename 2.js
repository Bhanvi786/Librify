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
