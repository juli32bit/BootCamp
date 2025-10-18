# Use official Playwright image with Chromium pre-installed
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm ci --silent --only=production=false

# Install Playwright browsers (Chromium specifically)
RUN npx playwright install --with-deps chromium

# Copy the rest of the application
COPY . .

# Build the extension
RUN npm run build

# Set environment variables for headless operation
ENV CI=true
ENV PLAYWRIGHT_BROWSERS_PATH=/ms-playwright

# Default command
CMD ["npm", "test"]