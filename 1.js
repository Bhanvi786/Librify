
  const totalSeconds = 3 * 3600 + 28 * 60 + 3; 
  let remaining = totalSeconds;

  function updateTimer() {
    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    if (remaining > 0) {
      remaining--;
    } else {
      clearInterval(timerInterval);
    }
  }
  updateTimer();
  const timerInterval = setInterval(updateTimer, 1000);

  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeLogin = document.getElementById('closeLogin');

  loginBtn.onclick = function() {
      loginModal.style.display = "block";
  }

  closeLogin.onclick = function() {
      loginModal.style.display = "none";
  }

  