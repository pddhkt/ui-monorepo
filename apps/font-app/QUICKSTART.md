# Quick Start Guide

This guide will help you get the JCK Font Gallery running in minutes.

## Prerequisites

- Node.js 18+ installed
- npm or pnpm installed

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Database is Already Set Up!

The D1 database has already been created and seeded with sample data. The database ID is configured in `wrangler.toml`.

### 3. Run Development Server

You have two options:

**Option A: Frontend Only (Fast)**
```bash
npm run dev
```
This runs the Vite dev server on http://localhost:5173. The API routes won't work yet.

**Option B: Full Stack with Workers (Recommended)**
```bash
npm run dev:full
```
This builds the project and runs it with Cloudflare Pages Functions, so the API endpoints work.

### 4. View Your Font Gallery

Open your browser to the URL shown in the terminal (usually http://localhost:8788 for full mode or http://localhost:5173 for dev mode).

You should see 5 sample fonts:
- Inter (Sans Serif)
- Roboto Mono (Monospace)
- Playfair Display (Serif)
- Dancing Script (Script)
- Bebas Neue (Display)

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Run Vite dev server (frontend only) |
| `npm run dev:full` | Build and run with Cloudflare Workers |
| `npm run build` | Build for production |
| `npm run deploy` | Deploy to Cloudflare Pages |
| `npm run db:init` | Reset database schema |
| `npm run db:seed` | Add sample data |

## Project Structure

```
jck-font/
├── functions/api/[[path]].ts    # API routes (Hono)
├── src/
│   ├── App.tsx                   # Main React component
│   ├── main.tsx                  # App entry point
│   └── index.css                 # Styles
├── schema.sql                    # Database schema
├── seed.sql                      # Sample data
├── wrangler.toml                 # Cloudflare config
└── package.json
```

## Next Steps

### Adding Your Own Fonts

To add more fonts to the database:

1. Create a new SQL file or edit `seed.sql`:
```sql
INSERT INTO fonts (id, name, description, type, category, previewUrl, downloadUrl, tags)
VALUES ('font-6', 'My Font', 'Description here', 'TTF', 'SANS_SERIF',
        'https://example.com/preview', 'https://example.com/download',
        '["tag1", "tag2"]');
```

2. Run the seed command:
```bash
npm run db:seed
```

### Deploying to Production

When ready to deploy:

```bash
npm run deploy
```

Follow the prompts to connect your Cloudflare account.

## Troubleshooting

**"Failed to fetch fonts"**
- Make sure you're running `npm run dev:full` (not just `npm run dev`)
- Check that the D1 database is initialized

**"No fonts found"**
- Run `npm run db:seed` to add sample data

**Build errors**
- Delete `node_modules` and run `npm install` again
- Make sure TypeScript and Vite are installed

## Features

- ✅ Browse fonts by category
- ✅ Live preview with custom text
- ✅ Adjustable font size
- ✅ View and download counts
- ✅ Tag-based organization
- ✅ Responsive design

## Tech Stack

- React 19 + Vite
- Cloudflare Workers (Hono)
- Cloudflare D1 (SQLite)
- TypeScript
