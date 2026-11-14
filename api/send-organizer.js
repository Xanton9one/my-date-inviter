const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', async () => {
  try {
    await fetch('/api/consent-handler', { method: 'POST' });
  } catch (error) {
    console.error('Ошибка отправки:', error);
  }
});