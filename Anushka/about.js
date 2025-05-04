const quotes = [
    "A room without books is like a body without a soul. – Marcus Tullius Cicero",
    "So many books, so little time. – Frank Zappa",
    "Reading is essential for those who seek to rise above the ordinary. – Jim Rohn",
    "Until I feared I would lose it, I never loved to read. One does not love breathing. – Harper Lee",
    "Books are a uniquely portable magic. – Stephen King",
    "There is no friend as loyal as a book. – Ernest Hemingway"
  ];
  
  function generateQuote() {
    const quoteElement = document.getElementById('randomQuote');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  }
  
  
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