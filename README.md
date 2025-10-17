Extensão Chrome (Manifest V3)

Extensão simples para o Bootcamp II: popup que envia PING ao background e exibe o horário retornado; content script que destaca links no domínio permitido.

## Requisitos atendidos
- Manifest V3 (Chrome 114+)
- Popup (`action.default_popup`) com UI simples
- Service worker em `background.service-worker`
- Content script opcional (ativado para `developer.chrome.com`)
- Princípio do menor privilégio: `storage` e host restrito
- Ícones 16/32/48/128 em `icons/`
- CSP padrão (scripts locais, sem eval)

## Estrutura
```
my-chrome-extension/
├─ src/
│  ├─ popup/
│  │  ├─ popup.html
│  │  ├─ popup.js
│  │  └─ popup.css
│  ├─ content/
│  │  └─ content.js
│  ├─ background/
│  │  └─ service-worker.js
│  ├─ options/
│  │  └─ options.html
│  └─ styles/
│     └─ global.css
├─ icons/
│  ├─ icon16.png
│  ├─ icon32.png
│  ├─ icon48.png
│  └─ icon128.png
├─ docs/
│  └─ index.html
├─ manifest.json
├─ README.md
└─ LICENSE
```

## Instalação (local)
1. Acesse `chrome://extensions` e ative Developer mode
2. Clique em Load unpacked e selecione a pasta do projeto
3. Abra o popup pelo ícone da extensão

## Desenvolvimento
- Edite o popup em `src/popup/`
- Altere o service worker em `src/background/service-worker.js`
- Ajuste o content script e `matches` no `manifest.json`

## Publicação (GitHub Pages)
- Habilite Pages em Settings → Pages: branch `main`, pasta `/docs`
- A página inicial está em `docs/index.html`
- Opcional: adicionar link para Release com `.zip`

## Licença
MIT — veja `LICENSE`.
