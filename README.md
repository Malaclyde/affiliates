# Affiliate Links App

A Next.js static site generator that creates an affiliate dashboard and landing pages based on JSON definitions in the `@pages` directory. UTM parameters are tracked and automatically appended to internal links, while external affiliate links are kept clean.

## Requirements

- Node.js 20+
- npm (or yarn/pnpm)

## Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project is configured for static export (`output: 'export'` in `next.config.ts`).

```bash
npm run build
```

This will generate an `out/` directory containing the static HTML/CSS/JS files, which can be deployed to any static host (like GitHub Pages).

## Configuration

All data is driven by the JSON files in the `pages` directory:
- `pages/about-me.json` - Defines the main page's intro and contact details.
- `pages/products.json` - Defines the available products, descriptions, and affiliate URLs.
- `pages/accounts.json` - Defines individual account pages and which products they display.

## Continuous Deployment

A GitHub Actions workflow is included at `.github/workflows/deploy.yml` which will automatically build and deploy this site to GitHub Pages whenever changes are pushed to the `main` branch.
