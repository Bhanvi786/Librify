function addToCart() {
  // Get book details dynamically from the page
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

  // Update cart count badge if present
  const badge = document.getElementById('cartCountBadge');
  if (badge) {
    const totalQuantity = cart.reduce((acc, item) => acc + item.item, 0);
    badge.textContent = totalQuantity;
    badge.style.display = totalQuantity > 0 ? 'inline-block' : 'none';
  }

  alert(`${title} (x${quantity}) added to cart.`);

  // Redirect to simple_cart.html to show updated cart
  window.location.href = 'simple_cart.html';
}

function buyNow() {
  alert('Proceeding to checkout!');
}

function addToWishlist() {
  alert('Added to wishlist!');
}
