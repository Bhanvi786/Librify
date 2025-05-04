const swiper = new Swiper('.mySwiper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  }
});

document.querySelector('.send-gift-btn').addEventListener('click', () => {
  alert('Gift card sent! (Implement your own action here)');
});
