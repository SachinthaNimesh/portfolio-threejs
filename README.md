# Portfolio Three.js

Minimal Three.js portfolio project.

## Install

npm install

## Dev

npm run dev

## Build

npm run build

## Deploy to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured to automatically deploy to GitHub Pages using GitHub Actions whenever you push to the `main` branch.

**Setup Steps:**

1. Push your code to GitHub:

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

2. Enable GitHub Pages in your repository:

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**

3. The workflow will automatically trigger and deploy your site to:
   ```
   https://sachinthanimes.github.io/portfolio-threejs/
   ```

### Manual Deployment (Alternative)

If you prefer to deploy manually:

1. Install gh-pages package:

```bash
npm install --save-dev gh-pages
```

2. Deploy manually:

```bash
npm run deploy
```

### Important Notes

- The site will be available at: `https://sachinthanimes.github.io/portfolio-threejs/`
- The `base` path in `vite.config.ts` is set to `/portfolio-threejs/` to match the repository name
- If you rename your repository, update the `base` value in `vite.config.ts` accordingly
- Changes pushed to the `main` branch will automatically trigger a new deployment
