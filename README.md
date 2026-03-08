# Vengoh Equestrian - Website Clone + AI Integration

A demo project cloning [vengoh.com](https://vengoh.com) (premium equestrian fashion brand, Luxembourg) into a modern Next.js + Supabase stack, with architecture prepared for AI agent integration. Features a brand-first homepage experience, premium product display with hover image swap, and 73 real product/lifestyle images from the original site.

## Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4
- **Database**: Supabase (PostgreSQL + Row Level Security)
- **AI** (planned): Claude API for chatbot + product recommendations
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- A [Supabase](https://supabase.com) project (free tier works)

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

Copy `.env.local.example` or create `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 3. Set up database

Run the migration SQL in your Supabase SQL editor:

```
supabase/migrations/001_initial_schema.sql
```

This creates 8 tables: `collections`, `products`, `product_variants`, `product_images`, `reviews`, `chat_conversations`, `chat_messages`, `shipping_policies` — all with RLS policies.

### 4. Seed the database

```bash
npm run seed
```

### 5. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (Baskervville + Inter fonts, Navbar, Footer, ChatWidget)
│   ├── page.tsx                   # Brand-first homepage (cinematic Hero, editorial Collections, philosophy mosaic, Reviews)
│   ├── globals.css                # Tailwind config + Vengoh theme colors
│   ├── collections/
│   │   ├── page.tsx               # All collections grid
│   │   └── [handle]/page.tsx      # Single collection with product grid
│   ├── products/
│   │   └── [handle]/page.tsx      # Product detail (gallery, variants, description)
│   ├── contact/page.tsx           # Contact form + company info
│   ├── b2b/page.tsx               # Wholesale inquiry form
│   └── api/
│       ├── chat/route.ts          # AI chatbot endpoint (placeholder)
│       └── recommendations/route.ts # AI recommendations endpoint (placeholder)
├── components/
│   ├── layout/                    # Navbar, Footer, MobileMenu
│   ├── home/                      # Cinematic Hero carousel, editorial FeaturedCollections, ShopTheLook mosaic, Reviews carousel
│   ├── products/                  # ProductCard (hover swap), ProductGallery (zoom), VariantSelector
│   └── ai/                        # ChatWidget
├── lib/
│   ├── supabase.ts                # Supabase client
│   └── types.ts                   # Database TypeScript types
├── data/
│   └── seed.ts                    # All product/collection/review seed data
public/
└── images/
    ├── brand/                     # Hero carousel images, logo (4 files)
    ├── collections/               # Collection banner images (10 files)
    ├── lifestyle/                 # Lifestyle/editorial photography (14 files)
    └── products/                  # Product photos, multiple angles (47 files)
scripts/
└── seed.ts                        # Database seeding script
supabase/
└── migrations/
    └── 001_initial_schema.sql     # Full database schema
```

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| `vengoh-primary` | `#F6E2ED` | Dusty pink backgrounds |
| `vengoh-accent` | `#8D2D5B` | Burgundy CTAs, links, accents |
| `vengoh-sage` | `#8B9E7E` | Sage green accents |
| `vengoh-navy` | `#1B2A4A` | Dark text/backgrounds |
| Font (serif) | Baskervville | Headings, brand text |
| Font (sans) | Inter | Body text |

## Seed Data

- **52 products** across base layers, breeches, leggings, vests, belts, gift cards, and services
- **31 collections** (product lines, categories, colors, meta)
- **10 customer reviews**
- **4 shipping regions** (Luxembourg, EU, Other Europe, Rest of World)
- **73 real images** scraped from vengoh.com (products, collections, lifestyle, brand)
- **Business info**: Unbelievable Products S.a r.l., 74 Grand-Rue, L-1660 Luxembourg

## Homepage Design

The homepage is brand-first, introducing Vengoh's identity before showing products:

1. **Hero** — Full-screen cinematic carousel with 3 auto-rotating slides, crossfade transitions, serif typography ("Ride with Elegance")
2. **Featured Collections** — Editorial alternating layout showcasing Azalea, Camellia, and Iris lines with real photography
3. **Brand Values** — Minimal strip with core values (European Craftsmanship, Performance Fabrics, etc.)
4. **Shop the Look** — Dark-themed philosophy section with 6-image editorial mosaic
5. **Reviews** — Single-review carousel with serif italic blockquotes

## Product Display

- **ProductCard**: Hover image swap between primary and secondary product photos, "Quick View" overlay with backdrop blur, sale badges
- **ProductGallery**: Zoom on hover (scale-110), frosted glass navigation arrows, image counter badge, ring-based thumbnail highlighting

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |
| `npm run seed` | Populate Supabase with product data |

## AI Integration (Planned)

The architecture is prepared for:

1. **Customer Support Chatbot** — `ChatWidget` component + `/api/chat` route, backed by `chat_conversations` and `chat_messages` tables
2. **Product Recommendations** — `/api/recommendations` route for semantic similarity search
3. **Knowledge Base** — shipping policies, business info, and product data available for AI context

## License

Private — demo project for Vengoh Equestrian.
