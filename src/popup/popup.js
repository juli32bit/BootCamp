const button = document.getElementById('ping');
const statusElement = document.getElementById('status');

button.addEventListener('click', async () => {
  statusElement.textContent = 'Enviando…';
  try {
    const response = await chrome.runtime.sendMessage({ type: 'PING' });
    statusElement.textContent = `Background está vivo: ${response.time}`;
  } catch (error) {
    statusElement.textContent = 'Falha ao comunicar com background.';
  }
});
