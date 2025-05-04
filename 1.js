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

updateCarousel();

