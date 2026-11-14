const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', async () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });

  try {
    await fetch('/api/yes', { method: 'POST' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
  }
});