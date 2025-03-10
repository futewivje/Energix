function sendAdvice() {
    const input = document.getElementById('advice-input');
    const message = document.getElementById('success-message');
  
    if (input.value.trim() !== '') {
      message.classList.remove('hidden');
      input.value = '';
  
      setTimeout(() => {
        message.classList.add('hidden');
      }, 3000);
    }
  }
  