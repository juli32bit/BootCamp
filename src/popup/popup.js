const pingButton = document.getElementById('ping');
const statusElement = document.getElementById('status');

async function sendPing() {
  statusElement.textContent = 'Enviando PING...';
  try {
    const response = await chrome.runtime.sendMessage({ type: 'PING' });
    if (response && response.ok) {
      statusElement.textContent = `Background está vivo: ${response.time}`;
    } else {
      statusElement.textContent = 'Sem resposta do background.';
    }
  } catch (error) {
    statusElement.textContent = 'Erro ao enviar mensagem.';
  }
}

pingButton.addEventListener('click', sendPing);
