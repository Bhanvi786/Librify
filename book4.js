document.addEventListener('DOMContentLoaded', function() {
    const addCartBtn = document.getElementById('addCartBtn');
    const buyNowBtn = document.getElementById('buyNowBtn');
    const wishlistBtn = document.getElementById('wishlistBtn');
    const quantitySelect = document.getElementById('quantity');
    const actionMessage = document.getElementById('actionMessage');
  
    function showMessage(msg, color='#197d3a') {
      actionMessage.textContent = msg;
      actionMessage.style.color = color;
      setTimeout(() => {
        actionMessage.textContent = '';
      }, 2500);
    }
  
