document.addEventListener('DOMContentLoaded', function () {

  const sendGiftBtn = document.querySelector('.send-gift-btn');
  if (sendGiftBtn) {
    
    sendGiftBtn.replaceWith(sendGiftBtn.cloneNode(true));
  }
});
