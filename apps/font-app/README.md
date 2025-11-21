# JCK Font Gallery

A modern font gallery application with 19 curated example fonts, powered by React, Vite, and Cloudflare Workers.

## 🎨 Example Fonts Included

The gallery comes pre-loaded with diverse professional fonts across all categories:

### Sans Serif (3 fonts)
- **Inter** ⭐ Featured - Modern UI font (2,847 views, 1,523 downloads)
- **Helvetica Now** - Classic Swiss typeface
- **GT Walsheim** - Geometric sans with personality

### Monospace (3 fonts)
- **Roboto Mono** ⭐ Featured - Most popular with 5,234 views
- **Fira Code** ⭐ Featured - Developer favorite with programming ligatures
- **JetBrains Mono** - Professional IDE font

### Serif (3 fonts)
- **Playfair Display** - Elegant display font for luxury brands
- **Merriweather** - Screen-optimized editorial font
- **Crimson Pro** - Classic book typography

### Display (3 fonts)
- **Bebas Neue** ⭐ Featured - Bold headlines with maximum impact
- **Druk Wide** - Ultra-wide poster font
- **Monument Extended** - Strong geometric presence

### Script & Handwriting (4 fonts)
- **Dancing Script** - Lively casual script
- **Pacifico** - Surf-inspired brush style
- **Allura** - Elegant wedding calligraphy
- **Caveat** - Handwritten marker style

### Decorative (3 fonts)
- **Abril Fatface** - Dramatic high-contrast fashion font
- **Righteous** - Futuristic rounded tech aesthetic
- **Bungee** - Urban street style

## Features

- 🎨 **19 Example Fonts** - Professionally curated across all categories
- 🔍 **Category Filtering** - Browse by Sans Serif, Serif, Monospace, Display, Script, Handwriting, Decorative
- ⚡ **Live Preview Controls** - Customize text, font size (12-128px), and letter spacing
- 📊 **Realistic Metadata** - View counts, download stats, tags, and featured status
- 🎯 **Tag System** - Fonts tagged with descriptive keywords
- 🚀 **Cloudflare Powered** - Fast global delivery with D1 and R2
- 💎 **Shared UI Components** - Uses `@design-system/ui` from monorepo

## Tech Stack

- **Frontend**: React 19.2 + TypeScript 5.9 + Vite 7
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Backend**: Cloudflare Workers + Hono 4.10.6
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2 (S3-compatible)
- **Monorepo**: Part of Turborepo + pnpm workspace

## Quick Start

### From Monorepo Root

```bash
# Install all dependencies
pnpm install

# Run font-app dev server
pnpm turbo dev --filter=font-app

# Or run all apps together
pnpm turbo dev
```

### Standalone Setup

```bash
cd apps/font-app

# Initialize database with schema
pnpm db:init

# Load 19 example fonts
pnpm db:seed

# Start dev server
pnpm dev
```

Visit **http://localhost:5173/**

## Database Setup

### Initialize Schema

```bash
wrangler d1 execute jck-font-db --local --file=./schema.sql
```

### Seed Example Data

```bash
wrangler d1 execute jck-font-db --local --file=./seed.sql
```

This populates the database with **19 professionally curated fonts** including:
- 4 Featured fonts (Inter, Roboto Mono, Fira Code, Bebas Neue)
- Realistic view counts (876 - 5,234 views)
- Realistic download counts (654 - 2,891 downloads)
- Descriptive tags for each font
- Proper categorization

## API Endpoints

### `GET /api/fonts`
List fonts with optional category filter.

```bash
# All fonts
curl http://localhost:5173/api/fonts

# Only monospace fonts (returns 3 fonts)
curl http://localhost:5173/api/fonts?category=MONOSPACE

# Display fonts (returns 3 fonts)
curl http://localhost:5173/api/fonts?category=DISPLAY
```

**Response:**
```json
{
  "fonts": [
    {
      "id": "font-1",
      "name": "Inter",
      "description": "A highly readable sans-serif font...",
      "type": "WOFF2",
      "category": "SANS_SERIF",
      "tags": "[\"modern\", \"ui\", \"clean\", \"geometric\"]",
      "viewCount": 2847,
      "downloadCount": 1523,
      "featured": 1
    }
  ],
  "total": 19,
  "category": "all"
}
```

### `GET /api/fonts/:id/file`
Serve font file from R2 storage or local filesystem.

## Font Files

The 5 actual font files are included:

- `public/fonts/Inter-Regular.woff2`
- `public/fonts/RobotoMono-Regular.woff2`
- `public/fonts/PlayfairDisplay-Regular.woff2`
- `public/fonts/DancingScript-Regular.woff2`
- `public/fonts/BebasNeue-Regular.woff2`

Additional example fonts reuse these files for demonstration purposes.

## Shared UI Components

This app leverages the monorepo's shared design system:

```typescript
import { Button } from '@design-system/ui/components/ui/button'
import { Card } from '@design-system/ui/components/ui/card'
import { Input } from '@design-system/ui/components/ui/input'
import { Label } from '@design-system/ui/components/ui/label'
```

All UI components come from `packages/ui` - single source of truth!

## Development Commands

```bash
# Start dev server (Vite only)
pnpm dev

# Full stack dev (with Cloudflare Workers)
pnpm dev:full

# Build for production
pnpm build

# Type check
pnpm lint

# Deploy to Cloudflare Pages
pnpm deploy
```

## Deployment

Deploy to Cloudflare Pages:

```bash
# Build and deploy
pnpm deploy
```

**Requirements:**
1. Cloudflare account
2. D1 database created: `wrangler d1 create jck-font-db`
3. R2 bucket created: `wrangler r2 bucket create jck-font-storage`
4. Run schema and seed SQL on production database

## Project Structure

```
font-app/
├── functions/api/
│   ├── fonts.ts                # List fonts with category filter
│   └── fonts/[id]/file.ts      # Serve font files from R2
├── public/fonts/               # 5 actual WOFF2 font files
├── src/
│   ├── App.tsx                 # Main gallery (255 lines)
│   ├── main.tsx                # Entry point
│   └── index.css               # Tailwind v4 + custom styles
├── schema.sql                  # D1 database schema
├── seed.sql                    # 19 example fonts with metadata
├── wrangler.jsonc              # Cloudflare config
└── package.json
```

## Database Schema

```sql
CREATE TABLE fonts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL,              -- WOFF2, TTF, OTF
  category TEXT,                   -- SANS_SERIF, SERIF, etc.
  previewUrl TEXT NOT NULL,
  downloadUrl TEXT NOT NULL,
  tags TEXT DEFAULT '[]',          -- JSON array of strings
  viewCount INTEGER DEFAULT 0,
  downloadCount INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,      -- 0 or 1 for featured badge
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
);
```

## Environment Variables

No environment variables required for local development! The app works out of the box.

For production, configure in `wrangler.jsonc`:
- D1 database binding
- R2 bucket binding

## Features in Action

1. **Live Preview** - Type any text and see it rendered in all fonts
2. **Size Control** - Adjust from 12px to 128px with slider
3. **Letter Spacing** - Fine-tune spacing from -5px to +20px
4. **Category Filter** - Instantly filter by font category
5. **Featured Badges** - See popular fonts marked with ⭐
6. **Statistics** - View realistic view and download counts
7. **Tags** - See relevant tags like "modern", "code", "elegant"
8. **Reset Button** - Quickly reset all controls to defaults

## Contributing

This is part of the `ui-monorepo` project. See the root README for contribution guidelines.

## License

MIT
