# 🐳 Bootcamp Helper - Chrome Extension with E2E Testing

A Chrome Extension (Manifest V3) with containerized end-to-end testing using Playwright and automated CI/CD with GitHub Actions.

## 📦 Features

- **Chrome Extension MV3**: Modern Chrome extension with popup, content scripts, and background service worker
- **Containerized Testing**: Docker setup with Playwright for reliable E2E testing
- **Automated CI/CD**: GitHub Actions workflow for testing and artifact generation
- **Extension Packaging**: Automated build script that creates distributable ZIP files

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Docker and Docker Compose (for containerized testing)
- Chrome/Chromium browser (for local development)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd bootcamp-helper-extension

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install chromium
```

### Development

```bash
# Build the extension
npm run build

# Run E2E tests locally
npm run test:e2e

# Run tests with browser visible (for debugging)
npm run dev

# View test report
npm run report
```

### Docker Testing

```bash
# Build Docker image
docker compose build

# Run tests in container
docker compose run --rm e2e

# View reports (mounted as volumes)
npx playwright show-report
```

## 📁 Project Structure

```
bootcamp-helper-extension/
├── src/                          # Extension source code
│   ├── popup/                    # Popup UI
│   │   ├── popup.html
│   │   ├── popup.js
│   │   └── popup.css
│   ├── content/                  # Content scripts
│   │   └── content.js
│   ├── background/               # Background service worker
│   │   └── service-worker.js
│   ├── options/                  # Options page
│   │   └── options.html
│   └── styles/                   # Shared styles
│       └── global.css
├── icons/                        # Extension icons
├── tests/                        # E2E tests
│   ├── extension.spec.ts
│   └── playwright.config.ts
├── scripts/                      # Build scripts
│   └── build-extension.mjs
├── dist/                         # Built extension (auto-generated)
├── .github/workflows/            # CI/CD workflows
│   └── ci.yml
├── Dockerfile                    # Container definition
├── docker-compose.yml           # Container orchestration
├── package.json                 # Dependencies and scripts
└── manifest.json                # Extension manifest
```

## 🧪 Testing

The project includes comprehensive E2E tests using Playwright:

### Test Coverage

- ✅ Extension loads successfully
- ✅ Content script functionality verification
- ✅ Popup HTML structure validation
- ✅ Manifest file validation
- ✅ Service worker status check

### Running Tests

```bash
# Run all tests
npm test

# Run only E2E tests
npm run test:e2e

# Run specific test
npx playwright test --grep "extension loads"

# Run with UI mode
npx playwright test --ui
```

## 🐳 Docker Setup

### Dockerfile Features

- Based on `mcr.microsoft.com/playwright:v1.46.0-jammy`
- Pre-installed Chromium browser
- Optimized for headless testing
- Automatic extension building

### Docker Compose Features

- Volume mounting for test reports
- Increased shared memory (2GB) for Chromium stability
- Environment variables for CI mode
- Easy test execution

## ⚙️ CI/CD Pipeline

The GitHub Actions workflow (`.github/workflows/ci.yml`) provides:

### Features

- **Dual Testing**: Both native and Docker-based test execution
- **Artifact Generation**: 
  - Extension ZIP package
  - Playwright HTML reports
  - Test results JSON
- **Multi-Environment**: Tests on Ubuntu latest
- **Caching**: NPM dependency caching for faster builds

### Artifacts

After each CI run, the following artifacts are available:

1. **extension-zip**: Ready-to-install Chrome extension
2. **playwright-report**: Detailed test results with screenshots
3. **test-results**: Raw test data in JSON format
4. **extension-dist**: Full extension source for debugging

## 📋 Available Scripts

```json
{
  "build": "Build extension to dist/ folder",
  "test:e2e": "Run Playwright E2E tests",
  "test": "Build extension and run tests",
  "ci": "Full CI pipeline (install + test)",
  "dev": "Run tests with browser visible",
  "report": "Open Playwright test report"
}
```

## 🔧 Configuration

### Playwright Configuration

- **Browsers**: Chromium with extension pre-loaded
- **Reporters**: List, HTML, and JSON
- **Screenshots**: On failure only
- **Videos**: On failure only
- **Traces**: On failure only

### Extension Configuration

- **Manifest Version**: 3
- **Permissions**: Storage
- **Content Scripts**: Matches `https://developer.chrome.com/*`
- **Background**: Service worker based

## 📊 Test Reports

Playwright generates detailed HTML reports with:

- Test execution timeline
- Screenshots of failures
- Video recordings (on failure)
- Trace files for debugging
- Performance metrics

Access reports via:
```bash
npx playwright show-report
```

## 🚀 Deployment

### Manual Release

1. Run the build: `npm run build`
2. Upload `dist/extension.zip` to Chrome Web Store
3. Or load `dist/` folder in Chrome Developer Mode

### Automated Release

The CI pipeline generates release artifacts automatically:

1. Push to main branch
2. GitHub Actions builds and tests
3. Download artifacts from Actions tab
4. Use `extension-zip` artifact for distribution

## 🛠️ Development Tips

### Loading Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `dist/` folder

### Debugging Tests

```bash
# Run with browser visible
npm run dev

# Run specific test with debug
npx playwright test --grep "popup" --headed --debug

# Generate trace for failed tests
npx playwright test --trace on
```

### Docker Debugging

```bash
# Run container interactively
docker compose run --rm -it e2e bash

# Check container logs
docker compose logs e2e
```

## 📝 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Submit a pull request

## 📞 Support

For issues and questions:

1. Check the [GitHub Issues](../../issues)
2. Review the Playwright documentation
3. Check Chrome Extension development guides

---

**Built with ❤️ for Bootcamp II**