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
  
    addCartBtn.addEventListener('click', function() {
      const qty = quantitySelect.value;
      showMessage(`Added ${qty} item(s) to your cart!`);
    });
  
    buyNowBtn.addEventListener('click', function() {
      const qty = quantitySelect.value;
      showMessage(`Proceeding to buy ${qty} item(s).`, '#c32d2d');
    });
  
    wishlistBtn.addEventListener('click', function() {
      showMessage('Added to your wishlist!', '#197d3a');
    });
  
    // Keyboard accessibility
    document.getElementById('orderForm').addEventListener('keydown', function(e) {
      if (e.key === "Enter") {
        e.preventDefault();
        addCartBtn.click();
      }
    });
  });
  