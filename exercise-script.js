function startTimer() {
    let timer = 10;
    const display = document.getElementById('timer-display');
    
    const interval = setInterval(() => {
      timer--;
      display.textContent = `00:${timer < 10 ? '0' + timer : timer}`;
      
      if (timer <= 0) {
        clearInterval(interval);
        alert('Time\'s up! Great job!');
        display.textContent = '00:10';
      }
    }, 1000);
  }
  