# Motiff

Motiff is a preview-first catalog of reusable interface blocks for the web. It focuses on clean category browsing, isolated previews, and copyable code samples.

## Current Scope

- Home page category showcase
- Category detail pages with searchable block lists
- Preview and code tabs for each block
- Dedicated block detail and full-preview routes
- Static Next.js build

## Tech

- Next.js App Router
- React 19
- TypeScript
- Inline-style based UI system

## Local Development

```bash
npm install
npm run dev
```

Default address: [http://localhost:3000](http://localhost:3000)

## Commands

```bash
npm run dev
npm run build
npm run lint
```

## Project Structure

```text
app/
  page.tsx
  about/page.tsx
  category/[slug]/page.tsx
components/
  Header.tsx
  HomeCatalog.tsx
  CategoryBlocks.tsx
  CategoryCard.tsx
  BlockCard.tsx
  BlockThumb.tsx
data/
  categories.ts
  blocks.ts
```

## Next Steps

1. Add stronger editorial ordering and featured sets.
2. Expand block metadata with framework variants.
3. Move block data to JSON or a CMS-backed source.
4. Finalize GitHub repo, deployment, and release flow.
