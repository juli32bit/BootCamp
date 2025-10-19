# 🐳 Extensão Chrome (Manifest V3) — Bootcamp Helper com Testes E2E e CI/CD

Extensão Chrome (MV3) com popup que envia PING ao background e exibe o horário retornado; content script que destaca links no domínio permitido.
Inclui testes E2E com **Playwright**, execução containerizada via **Docker/Compose** e pipeline automatizado no **GitHub Actions** que gera artefatos de distribuição.

---

## ✅ Recursos

* **Manifest V3 (Chrome 114+)**
* **Popup (`action.default_popup`)** com UI simples
* **Background** com *service worker* em `background.service-worker`
* **Content script** (ativado para `https://developer.chrome.com/*`)
* **Princípio do menor privilégio**: usa `storage` e host restrito
* **Teste E2E com Playwright** (relatórios HTML/JSON, screenshots e vídeos em falhas)
* **Execução em Docker** (Playwright container)
* **CI/CD (GitHub Actions)**: build, testes (nativo e Docker) e artefatos (ZIP da extensão, relatório Playwright, resultados JSON, `dist/`)

---

## 📁 Estrutura do Projeto

```
.
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
├─ docs/                 # Página simples p/ GitHub Pages (opcional)
│  └─ index.html
├─ tests/                # Playwright
│  ├─ extension.spec.ts
│  └─ playwright.config.ts
├─ scripts/
│  └─ build-extension.mjs
├─ .github/workflows/
│  └─ ci.yml
├─ dist/                 # Gerado no build
├─ Dockerfile
├─ docker-compose.yml
├─ package.json
├─ manifest.json
├─ README.md
└─ LICENSE
```

---

## 🚀 Pré-requisitos

* **Node.js 18+**
* **(Opcional)** Docker e Docker Compose
* **Chrome/Chromium** (para desenvolvimento local)

---

## 🧩 Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Instalar navegadores do Playwright (se necessário)
npx playwright install chromium

# Build da extensão
npm run build

# Carregar no Chrome:
# 1) Acesse chrome://extensions
# 2) Ative "Developer mode"
# 3) Clique em "Load unpacked" e selecione a pasta dist/
```

---

## 🧪 Testes (Playwright)

```bash
# Rodar todos os testes
npm test

# Apenas E2E
npm run test:e2e

# UI mode
npx playwright test --ui

# Ver relatório
npm run report
# ou
npx playwright show-report
```

---

## 🐳 Testes em Docker

```bash
# Build da imagem
docker compose build

# Executar testes no container
docker compose run --rm e2e

# Ver relatórios (montados via volume)
npx playwright show-report
```

---

## ⚙️ CI/CD (GitHub Actions)

Pipeline em `.github/workflows/ci.yml`:

### 🔄 Recursos

* Testes nativos e em Docker
* Artefatos gerados automaticamente:

  1. **extension-zip** – pacote pronto para instalação no Chrome
  2. **playwright-report** – relatório HTML com logs e screenshots
  3. **test-results** – resultados em JSON
  4. **extension-dist** – build completo da extensão
* Cache de dependências NPM para builds mais rápidos

---

## 📦 Scripts úteis (npm)

```json
{
  "build": "Build para a pasta dist/",
  "test:e2e": "Testes E2E com Playwright",
  "test": "Build + testes",
  "ci": "Pipeline local (instalação + testes)",
  "dev": "Testes com navegador visível",
  "report": "Abre o relatório do Playwright"
}
```

---

## 🌐 GitHub Pages (opcional)

* Ative em **Settings → Pages**: branch `main`, pasta `/docs`
* A *landing page* simples fica em `docs/index.html`
* Opcional: vincular uma *Release* com o `.zip` gerado pela Action

---

## 🔐 Permissões e Configurações

* **Manifest Version**: 3
* **Permissions**: `storage`
* **Content Scripts**: `matches: ["https://developer.chrome.com/*"]`
* **Background**: *service worker*
* **CSP padrão** (scripts locais, sem `eval`)

---

## 🧰 Dicas de Debug

```bash
# Rodar com navegador visível
npm run dev

# Filtrar por teste específico
npx playwright test --grep "popup" --headed --debug

# Gerar trace de todos os testes
npx playwright test --trace on
```

---

## 📄 Licença

MIT — veja o arquivo `LICENSE`.

---

## 💡 Créditos

Construído com ❤️ para o **Bootcamp II** — integrando desenvolvimento de extensões Chrome com testes automatizados, containerização e entrega contínua.

---

## 🧭 Contribuindo

1. Faça um fork do repositório
2. Crie uma *feature branch*:

   ```bash
   git checkout -b minha-feature
   ```
3. Faça suas alterações
4. Rode os testes:

   ```bash
   npm test
   ```
5. Envie um *pull request* 🚀

---

## 🆘 Suporte

Para dúvidas e problemas:

1. Verifique os [Issues no GitHub](../../issues)
2. Consulte a documentação do [Playwright](https://playwright.dev/)
3. Veja o guia oficial de [Extensões Chrome MV3](https://developer.chrome.com/docs/extensions/)

---
```
