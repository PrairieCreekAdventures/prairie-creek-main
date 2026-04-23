# Prairie Creek Adventures

A lifestyle journal of hope, farm life, and family — written from a small farm in Arkansas by Kayla & David.

## Quick start

See `DEPLOY.md` for step-by-step setup. Short version: unzip → upload to GitHub → connect to Netlify → set up admin via DecapBridge.

## What's here

- **Homepage, About, Journal, Recipes, Categories** — all the pages you need
- **Admin panel** at `/admin` (after DecapBridge setup) for writing new posts with no code required
- **Full design system** — Parisienne + Fraunces + Inter, wildflower palette, hand-drawn SVG ornaments

## Making changes

**Content** (posts, photos, categories): do through the admin panel at `/admin`.

**Design** (colors, fonts, layout copy): edit these files on GitHub:
- Colors and fonts: `src/styles/global.css` (top of file, `:root` section)
- Homepage: `src/pages/index.astro`
- About page: `src/pages/about.astro`
- Header/footer/nav: `src/layouts/BaseLayout.astro`

## Tech

- Framework: Astro 5
- Hosting: Netlify
- CMS: Decap CMS via DecapBridge
- Storage: Markdown files in Git

## Credits

Built with Claude.
