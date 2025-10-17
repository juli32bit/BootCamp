// Destaca links na página alvo para visualização rápida
(() => {
  try {
    const links = document.querySelectorAll('a');
    for (const anchorElement of links) {
      anchorElement.style.outline = '2px solid #ec0089';
      anchorElement.style.outlineOffset = '2px';
    }
  } catch (_e) {
    // Sem falhar a página hospedeira
  }
})();
