# JCK Font Gallery

A simple, elegant font browsing gallery built with Vite, React, and Cloudflare Workers.

## Tech Stack

- **Frontend**: React 19 + Vite + TypeScript
- **Backend**: Cloudflare Workers + Hono
- **Database**: Cloudflare D1 (SQLite)
- **Storage**: Cloudflare R2
- **Deployment**: Cloudflare Pages

## Features

- Browse fonts by category
- Live font preview with customizable text and size
- Font metadata and statistics (views, downloads)
- Tag-based organization
- Responsive design

## Setup

### Prerequisites

- Node.js 18+
- npm or pnpm
- Cloudflare account
- Wrangler CLI

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create D1 database:
```bash
npx wrangler d1 create jck-font-db
```

3. Update `wrangler.toml` with your database ID from the previous command.

4. Initialize the database schema:
```bash
npx wrangler d1 execute jck-font-db --local --file=./schema.sql
npx wrangler d1 execute jck-font-db --file=./schema.sql
```

5. Add sample data (optional):
```bash
npx wrangler d1 execute jck-font-db --local --file=./seed.sql
npx wrangler d1 execute jck-font-db --file=./seed.sql
```

6. Create R2 bucket:
```bash
npx wrangler r2 bucket create jck-font-storage
```

### Development

Run the development server:
```bash
npm run dev
```

Build the project:
```bash
npm run build
```

Run with Cloudflare Workers (after building):
```bash
npm run dev:workers
```

### Deployment

Deploy to Cloudflare Pages:
```bash
npm run deploy
```

## API Endpoints

- `GET /api/fonts` - List all fonts (supports `?category=` and `?search=` query params)
- `GET /api/fonts/:id` - Get single font details
- `POST /api/fonts/:id/view` - Increment view count
- `POST /api/fonts/:id/download` - Increment download count
- `GET /api/fonts/tags` - Get all tags with counts
- `GET /api/health` - Health check

## Project Structure

```
jck-font/
├── functions/          # Cloudflare Pages Functions
│   └── api/
│       └── [[path]].ts # Hono API routes
├── public/             # Static assets
├── src/                # React frontend
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── schema.sql          # D1 database schema
├── seed.sql            # Sample data
├── wrangler.toml       # Cloudflare configuration
├── vite.config.ts      # Vite configuration
└── package.json
```

## Environment Variables

For local development, create a `.dev.vars` file:

```
# None required for basic functionality
# Add R2 credentials if using custom R2 setup
```

## License

ISC
