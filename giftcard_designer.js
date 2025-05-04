document.addEventListener('DOMContentLoaded', () => {
  const imageSelect = document.getElementById('imageSelect');
  const messageInput = document.getElementById('messageInput');
  const textColorInput = document.getElementById('textColor');
  const fontSizeInput = document.getElementById('fontSize');
  const fontFamilyInput = document.getElementById('fontFamily');
  const textAlignInput = document.getElementById('textAlign');
  const bgColorInput = document.getElementById('bgColor');
  const cardImage = document.getElementById('cardImage');
  const cardText = document.getElementById('cardText');
  const cardPreview = document.getElementById('cardPreview');
  const sendGiftCardBtn = document.getElementById('sendGiftCardBtn');

  imageSelect.addEventListener('change', () => {
    cardImage.src = imageSelect.value;
  });

  messageInput.addEventListener('input', () => {
    cardText.textContent = messageInput.value || 'Your message here';
  });

  textColorInput.addEventListener('input', () => {
    cardText.style.color = textColorInput.value;
  });

  fontSizeInput.addEventListener('change', () => {
    cardText.style.fontSize = fontSizeInput.value;
  });

  
  fontFamilyInput.addEventListener('change', () => {
    cardText.style.fontFamily = fontFamilyInput.value;
  });

  textAlignInput.addEventListener('change', () => {
    cardText.style.textAlign = textAlignInput.value;
  });

  bgColorInput.addEventListener('input', () => {
    cardPreview.style.backgroundColor = bgColorInput.value;
  });

sendGiftCardBtn.addEventListener('click', () => {
    // Remove alert and directly navigate to giftcard_amount.html
    window.location.href = 'giftcard_amount.html';
  });
});
