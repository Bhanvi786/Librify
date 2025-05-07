function addToCart() {
  const titleElem = document.querySelector('.book-title');
  const priceElem = document.querySelector('.price');
  const imgElem = document.querySelector('.book-cover');
  const quantityElem = document.getElementById('quantity');

  const title = titleElem ? titleElem.textContent.trim() : 'Unknown Book';
  const priceText = priceElem ? priceElem.textContent.replace(/[^\d]/g, '') : '0';
  const price = parseFloat(priceText);
  const img = imgElem ? imgElem.src : '';
  const quantity = quantityElem ? parseInt(quantityElem.value) : 1;

  let cart = JSON.parse(localStorage.getItem('data')) || [];

  const existingIndex = cart.findIndex(item => item.name === title);
  if (existingIndex !== -1) {
    cart[existingIndex].item += quantity;
  } else {
    cart.push({
      id: Date.now(),
      name: title,
      price: price,
      img: img,
      item: quantity
    });
  }

  localStorage.setItem('data', JSON.stringify(cart));

  
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    const totalQuantity = cart.reduce((acc, item) => acc + item.item, 0);
    badge.textContent = totalQuantity;
    badge.style.display = totalQuantity > 0 ? 'inline-block' : 'none';
  }

  alert(`${title} (x${quantity}) added to cart.`);

  window.location.href = 'cart.html';
}

function addToWishlist() {

  const titleElem = document.querySelector('.book-title');
  const imgElem = document.querySelector('.book-cover');

  const title = titleElem ? titleElem.textContent.trim() : 'Unknown Book';
  const img = imgElem ? imgElem.src : '';

  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

  const exists = wishlist.some(item => item.name === title);
  if (!exists) {
    wishlist.push({
      id: Date.now(),
      name: title,
      img: img,
      item: 1
    });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${title} added to wishlist.`);
  } else {
    alert(`${title} is already in your wishlist.`);
  }
}

function buyNow() {
  alert('Proceeding to checkout!');
}
