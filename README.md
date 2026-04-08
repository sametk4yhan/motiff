# Motiff

Motiff is a preview-first interface pattern catalog built for modern product teams.
It helps designers and frontend engineers study UI patterns visually before touching code.

## Live Demo

- Production: [motiff-alpha.vercel.app](https://motiff-alpha.vercel.app/)

## Why This Project Exists

Most block libraries start with code snippets. Motiff starts with visual context.

- Browse curated categories first
- Inspect block details with isolated previews
- Copy implementation code only when the pattern fits your product

This makes Motiff useful as both a production reference and a portfolio-grade frontend system.

## Product Highlights

- Editorial, category-first home experience
- Search + filter flow for faster pattern discovery
- Dedicated category routes: `/category/[slug]`
- Dedicated block routes: `/category/[slug]/[blockId]`
- Full preview routes: `/category/[slug]/[blockId]/preview`
- Copy code + share link actions on block detail pages
- Distinct monochrome visual language with custom motif accents

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Data-driven content model (`data/categories.ts`, `data/blocks.ts`)
- Component architecture for scalable catalog growth

## Key Routes

- `/` -> Home + category catalog
- `/about` -> Project positioning
- `/category/[slug]` -> Category-level browsing
- `/category/[slug]/[blockId]` -> Block detail + code
- `/category/[slug]/[blockId]/preview` -> Isolated full preview

## Local Development

```bash
npm install
npm run dev
```

Default URL: [http://localhost:3000](http://localhost:3000)

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Project Structure

```text
app/
  page.tsx
  about/page.tsx
  category/[slug]/page.tsx
  category/[slug]/[blockId]/page.tsx
  category/[slug]/[blockId]/preview/page.tsx

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

1. Push `main` to GitHub
2. Import repo in Vercel
3. Set framework to Next.js (auto-detected)
4. Deploy
5. Attach your custom domain later via Cloudflare DNS

## Portfolio Positioning

Motiff is designed to be shown as:

- A product-thinking frontend project
- A design-sensitive engineering implementation
- A reusable UI reference system, not just a static landing page

## Author

Samet Kayhan

- GitHub: [sametk4yhan](https://github.com/sametk4yhan)
