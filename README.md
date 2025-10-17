# Bootcamp Helper — Extensão Chrome (Manifest V3)

Extensão simples para o Bootcamp II com popup, background service worker e content script opcional.

## Funcionalidades
- Popup com botão que envia `PING` para o background
- Service worker registra instalação e responde mensagens
- Content script (opcional) destaca links em `developer.chrome.com`
- Página de opções minimalista
- Landing page em `docs/` para GitHub Pages

## Instalação (modo desenvolvedor)
1. Abra `chrome://extensions` e ative o **Developer mode**.
2. Clique em **Load unpacked** e selecione a pasta do projeto.
3. Abra o popup pelo ícone da extensão e verifique o console (F12).

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
│  ├─ assets/
│  │  └─ logo.svg (opcional)
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
├─ LICENSE
└─ .gitignore
```

## Permissões
- `storage`

## Publicação (GitHub Pages)
- Em **Settings → Pages**, selecione **Branch: main** e **Folder: /docs**.
- Acesse: `https://<usuario>.github.io/<repo>/`.

## Empacotamento (.zip)
- Use o script `scripts/package.sh` para gerar o pacote de distribuição em `release/`.

## Licença
MIT — veja `LICENSE`.
