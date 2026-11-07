# Blue Player — Website

**Live:** [aynazar-sylyyew-dev.github.io/blueplayer-web](https://aynazar-sylyyew-dev.github.io/blueplayer-web/)

## Features

- Hero with animated phone mockup (auto-cycling 3 screenshots)
- 3 showcase sections (Now playing / Track library / Equalizer)
- Theme switcher: System / Light / Dark (persisted in localStorage)
- 7 languages: English, Русский, Türkçe, Қазақша, O'zbekcha, Кыргызча, Тоҷикӣ
- Used Libraries dropdown with external links
- Legal docs: Privacy Policy, Terms of Service, Disclaimer & DMCA
- Scroll reveal animations via IntersectionObserver
- Fully responsive

## Tech Stack

- React 19 + TypeScript 7
- Vite 8
- Oxlint
- Pure CSS with CSS variables
- GitHub Pages

## Quick Start

Requires **Node.js 22+** and **npm 10+**.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # preview production build
npm run lint       # lint with Oxlint
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

This runs `npm run build` and publishes `dist/` to the `gh-pages` branch via gh-pages package.

## One-time GitHub setup (UI)

1. Open **Settings → Pages** in the repo
2. Under **Build and deployment → Branch**, select `gh-pages` / `/` (root)
3. Click **Save**

Site goes live at https://aynazar-sylyyew-dev.github.io/blueplayer-web/ within ~60 seconds.

## After code changes

```bash
git add .
git commit -m "describe changes"
git push
npm run deploy
```

## Contact

- **Support:** blueplayer.support@gmail.com
- **Developer:** Aýnazar Sylyýew