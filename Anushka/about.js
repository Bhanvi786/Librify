
  window.addEventListener('scroll', revealSections);
  
  function revealSections() {
    const reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 150;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('visible');
      }
    }
  }
  
  revealSections();