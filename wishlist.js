let wishlist = [];

window.addEventListener('load', () => {
  const storedWishlist = JSON.parse(localStorage.getItem('wishlist'));
  if (storedWishlist && storedWishlist.length > 0) {
    wishlist = storedWishlist;
  }
  renderWishlist();
});

window.addEventListener('storage', (event) => {
  if (event.key === 'wishlist') {
    wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    renderWishlist();
  }
});

function renderWishlist() {
  const container = document.getElementById('wishlist-container');
  if (!wishlist.length) {
    container.innerHTML = '<div class="empty-wishlist">Your wishlist is empty.<br>Add some books to get started!</div>';
    return;
  }
  container.innerHTML = '';
  wishlist.forEach((item, index) => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'wishlist-item';
    itemDiv.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      <div class="wishlist-details">
        <div class="wishlist-title">${item.name}</div>
      </div>
      <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
    `;
    container.appendChild(itemDiv);
  });
}

function removeItem(index) {
  wishlist.splice(index, 1);
  saveWishlist();
  renderWishlist();
}

function saveWishlist() {
  localStorage.setItem('wishlist', JSON.stringify(wishlist));
}
