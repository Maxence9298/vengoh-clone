# CLAUDE.md — Project Guide for Claude Code

## Project Overview

Vengoh Equestrian website clone — a Next.js 16 demo project replicating vengoh.com with AI integration architecture. Premium equestrian fashion brand based in Luxembourg. Brand-first homepage with cinematic hero, editorial collections, and premium product display with real images.

## Commands

- `npm run dev` — Start dev server (Turbopack, usually port 3000)
- `npm run build` — Production build (must pass before committing)
- `npm run lint` — ESLint
- `npm run seed` — Seed Supabase database (requires .env.local)

## Architecture

- **Framework**: Next.js 16 App Router with TypeScript strict mode
- **Styling**: Tailwind CSS 4 with custom theme tokens defined in `src/app/globals.css`
- **Database**: Supabase (PostgreSQL). Client at `src/lib/supabase.ts`, types at `src/lib/types.ts`
- **Static data**: `src/data/seed.ts` — all products, collections, reviews, shipping policies. Pages import directly from this file for static generation.
- **Path alias**: `@/*` maps to `./src/*`

## File Conventions

- Pages use the App Router convention: `src/app/[route]/page.tsx`
- Components are grouped by domain: `layout/`, `home/`, `products/`, `ai/`
- All components use Tailwind utility classes — no CSS modules or styled-components
- Client components are marked with `'use client'` — keep server components as default
- Dynamic routes use `generateStaticParams()` for static generation

## Design Tokens (Tailwind)

- `vengoh-primary` (#F6E2ED) — dusty pink backgrounds
- `vengoh-accent` (#8D2D5B) — burgundy buttons, links, accents
- `vengoh-sage` (#8B9E7E) — sage green
- `vengoh-navy` (#1B2A4A) — dark tones
- Serif font: Baskervville (`font-serif`)
- Sans font: Inter (default)

## Key Files

- `src/data/seed.ts` — Single source of truth for all product data (52 products, 31 collections, image paths)
- `supabase/migrations/001_initial_schema.sql` — Database schema (8 tables with RLS)
- `scripts/seed.ts` — Database seeding script
- `.env.local` — Supabase credentials (not committed)
- `public/images/` — 73 real images (brand/, collections/, lifestyle/, products/)

## Patterns

- Product/collection pages use seed data for static generation and fall back to `notFound()` for missing handles
- Variants are rendered via `VariantSelector` component which auto-detects size vs color grouping
- `ProductCard` supports `hoverImageUrl` prop for image swap on hover — pass `product.images[1]?.url`
- Homepage components are brand-first: Hero (carousel), FeaturedCollections (editorial), ShopTheLook (mosaic), Reviews (carousel)
- `ProductGallery` has zoom-on-hover and frosted glass navigation
- The `ChatWidget` is a placeholder — AI endpoints at `/api/chat` and `/api/recommendations` return stub responses
- Forms (contact, B2B) are UI-only — no backend handlers yet
- Image paths in seed data point to `public/images/` — all images are committed to git

## Database Tables

`collections`, `products`, `product_variants`, `product_images`, `reviews`, `chat_conversations`, `chat_messages`, `shipping_policies`

All have Row Level Security enabled with public read access. Chat tables allow public insert.

## Don'ts

- Don't remove `'use client'` from interactive components (Navbar, MobileMenu, ChatWidget, ProductGallery, VariantSelector)
- Don't hardcode Supabase credentials — always use env vars
- Don't break static generation — product and collection pages must work without a database connection (they import from `src/data/seed.ts`)
- Don't remove real images from `public/images/` — they are committed assets used by seed data and components
