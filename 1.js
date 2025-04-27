const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

// Open modal when user icon is clicked
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

// Close popup by vertical tab arrow
document.querySelector('.coupon-popup-vertical').onclick = function() {
  document.getElementById('couponPopup').classList.remove('open');
  document.getElementById('couponTrigger').style.display = 'flex';
  // Also close modal if open
  document.getElementById('couponModal').classList.remove('open');
};

// Show coupon modal
// document.getElementById('showCouponBtn').onclick = function(e) {
//   e.stopPropagation();
//   document.getElementById('couponModal').classList.add('open');
// };

// Close modal by button
document.getElementById('closeModalBtn').onclick = function() {
  document.getElementById('couponModal').classList.remove('open');
};

// Close modal by clicking outside
document.getElementById('couponModal').onclick = function(event) {
  if (event.target === this) {
    this.classList.remove('open');
  }
};

// Animate main image up and down
const mainImg = document.querySelector('.main_img img');
if (mainImg) {
  let direction = 1; // 1 for down, -1 for up
  let position = 0;
  const maxOffset = 20; // max pixels to move up/down
  const speed = 0.5; // pixels per frame

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
