# Motiff

![Motiff Logo](./app/icon.svg)

![Stars](https://img.shields.io/github/stars/sametk4yhan/motiff?style=social)
![Forks](https://img.shields.io/github/forks/sametk4yhan/motiff?style=social)
![Issues](https://img.shields.io/github/issues/sametk4yhan/motiff)

Preview-first interface pattern catalog for designers and frontend teams.

[Live Demo](https://motiff-alpha.vercel.app/) · [Issues](https://github.com/sametk4yhan/motiff/issues)

## Overview

Motiff helps teams evaluate UI patterns visually before implementation.
Instead of starting with raw snippets, you start with context: category, preview, then code.

## Core Features

- Category-first discovery experience
- Search and filter across pattern groups
- Dedicated category pages (`/category/[slug]`)
- Dedicated block detail pages (`/category/[slug]/[blockId]`)
- Isolated full preview pages (`/category/[slug]/[blockId]/preview`)
- Copy code and copy link actions
- Custom Open Graph image for social sharing

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Data-driven catalog architecture (`data/categories.ts`, `data/blocks.ts`, `data/catalog.ts`)

## Quick Start

```bash
npm install
npm run dev
```

Local app: [http://localhost:3000](http://localhost:3000)

## Available Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Environment

For correct social metadata in production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://motiff-alpha.vercel.app
```

## Project Structure

```text
app/
  page.tsx
  about/page.tsx
  category/[slug]/page.tsx
  category/[slug]/[blockId]/page.tsx
  category/[slug]/[blockId]/preview/page.tsx
  opengraph-image.tsx

components/
  Header.tsx
  HomeCatalog.tsx
  CategoryCard.tsx
  CategoryBlocks.tsx
  BlockCard.tsx
  BlockDetailActions.tsx
  BlockThumb.tsx
  HeroMotifField.tsx

data/
  categories.ts
  blocks.ts
  catalog.ts
```

## Deployment

Recommended setup:

- Hosting: Vercel
- DNS/Domain: Cloudflare

Deploy flow:

1. Push to `main`
2. Import repository in Vercel
3. Confirm build command (`npm run build`) and output defaults
4. Deploy
5. Attach custom domain from Cloudflare DNS

## Roadmap

- Add more editorially curated block sets
- Add stronger tagging and sorting presets
- Move data source to CMS/JSON pipeline
- Add visual regression checks for block previews

## Contributing

Contributions are welcome.

1. Fork the repo
2. Create a feature branch
3. Run `npm run lint` and `npm run build`
4. Open a PR with a clear summary and screenshots (if UI changes)

## License

This repository currently does not include a `LICENSE` file.
Add a license (for example MIT) before accepting external contributions at scale.

## Author

Samet Kayhan

- GitHub: [sametk4yhan](https://github.com/sametk4yhan)
