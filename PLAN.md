# UI Monorepo - Implementation Plan

## Overview
This document outlines the plan to transform multiple standalone design system applications into a unified monorepo with shared UI components based on shadcn/ui.

## Current Situation

### Existing Applications
1. **font-app** (deployed to Cloudflare Workers)
   - Location: Previously at `/design-system/font-app`, now needs to be moved to `apps/`
   - Deployed: https://font-app.pddhkt.workers.dev
   - GitHub: https://github.com/pddhkt/font-app
   - Tech: React 19, Vite 7, Tailwind v4, Hono, Cloudflare Workers
   - Features: Font management with D1 database and R2 storage

2. **jck-font** (font gallery)
   - Location: `/ui-monorepo/jck-font/`
   - Status: Not yet deployed
   - Tech: React 19, Vite 7, Tailwind v3, Hono, Cloudflare Pages
   - Features: Font gallery with D1 database

3. **color-palette-app** (color palette manager)
   - Location: `/ui-monorepo/color-palette-app/`
   - Status: Not yet deployed
   - Tech: React 19, Vite 7, Tailwind v4, Cloudflare Workers
   - Features: Color palette management with shadcn components already installed

### Current Directory Structure
```
ui-monorepo/
├── apps/                    # Empty - to be populated
├── packages/                # Empty - to be created
├── jck-font/               # Existing font gallery app
├── color-palette-app/      # Existing color palette app
└── (font-app is on GitHub) # Needs to be brought back or created fresh
```

## Goal

Create a **Turborepo + pnpm monorepo** that:
1. Organizes all 3 apps into `apps/` directory
2. Extracts shared UI components into `packages/ui`
3. Enables component reuse across all apps
4. Uses shadcn/ui as the foundation for UI components
5. Maintains Cloudflare Workers/Pages deployment capability
6. Keeps it simple initially (no complex database integrations to start)

## Target Structure

```
ui-monorepo/
├── apps/
│   ├── font-app/              # Primary font management app
│   ├── font-gallery/          # Font gallery/showcase (from jck-font)
│   └── color-palette/         # Color palette manager
│
├── packages/
│   ├── ui/                    # Shared shadcn UI components
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── ui/       # Button, Card, Input, Label, etc.
│   │   │   └── lib/
│   │   │       └── utils.ts  # cn() utility
│   │   ├── components.json
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── tsconfig/              # Shared TypeScript configs
│       ├── base.json
│       ├── react.json
│       └── package.json
│
├── package.json               # Root package.json with Turborepo
├── pnpm-workspace.yaml        # pnpm workspace configuration
├── turbo.json                 # Turborepo build configuration
├── .gitignore
├── README.md
└── PLAN.md                    # This file
```

## Technology Stack

### Core Tools
- **Package Manager**: pnpm (fast, efficient, workspace support)
- **Build System**: Turborepo (intelligent caching, parallel builds)
- **Monorepo Scope**: `@design-system/*` for all internal packages

### Frontend Stack
- **Framework**: React 19.1.1
- **Build Tool**: Vite 7.x
- **Language**: TypeScript 5.8
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (official monorepo support)
- **Component Variants**: class-variance-authority
- **Utility**: clsx, tailwind-merge

### Backend/Deployment
- **API Framework**: Hono 4.x
- **Deployment**: Cloudflare Workers & Pages
- **Database**: D1 (SQLite) - to be added later
- **Storage**: R2 - to be added later

## Implementation Steps

### Phase 1: Setup Monorepo Foundation ✓ (In Progress)
- [x] Rename `design-system` to `ui-monorepo`
- [x] Create `apps/` and `packages/` directories
- [ ] Create plan documentation (this file)
- [ ] Install pnpm globally (if needed)
- [ ] Initialize root `package.json` with Turborepo
- [ ] Create `pnpm-workspace.yaml`
- [ ] Create `turbo.json` configuration
- [ ] Update `.gitignore`

### Phase 2: Create Shared UI Package
- [ ] Create `packages/ui/` directory structure
- [ ] Set up `package.json` as `@design-system/ui`
- [ ] Configure `components.json` for monorepo usage
- [ ] Extract shadcn components from existing apps:
  - Button
  - Card
  - Input
  - Label
  - Separator
  - (and any others found in color-palette-app)
- [ ] Set up `src/lib/utils.ts` with cn() utility
- [ ] Configure TypeScript with proper paths
- [ ] Set up Tailwind CSS for the package
- [ ] Create index.ts to export all components

### Phase 3: Create Shared TypeScript Config
- [ ] Create `packages/tsconfig/` directory
- [ ] Create `base.json` with common settings
- [ ] Create `react.json` extending base
- [ ] Create package.json for the config package

### Phase 4: Move and Update Existing Apps

#### 4a. Move jck-font → apps/font-gallery
- [ ] Move `jck-font/` to `apps/font-gallery/`
- [ ] Update `package.json` to use workspace dependencies
- [ ] Add dependency: `"@design-system/ui": "workspace:*"`
- [ ] Update imports to use `@design-system/ui`
- [ ] Update Tailwind config to include shared UI package
- [ ] Test build and dev server

#### 4b. Move color-palette-app → apps/color-palette
- [ ] Move `color-palette-app/` to `apps/color-palette/`
- [ ] Update `package.json` to use workspace dependencies
- [ ] Add dependency: `"@design-system/ui": "workspace:*"`
- [ ] Update imports to use `@design-system/ui`
- [ ] Update Tailwind config to include shared UI package
- [ ] Test build and dev server

#### 4c. Create/Update apps/font-app
**Option A**: Pull from GitHub
- [ ] Clone from https://github.com/pddhkt/font-app into `apps/font-app/`
- [ ] Simplify by removing D1/R2 for initial version
- [ ] Update to use workspace dependencies
- [ ] Update imports to use shared UI

**Option B**: Create fresh simplified version
- [ ] Create new Vite + React app in `apps/font-app/`
- [ ] Use shared UI components from `@design-system/ui`
- [ ] Create simple font preview functionality
- [ ] Keep it lightweight for initial implementation

### Phase 5: Create Component Showcase App
- [ ] Create `apps/component-showcase/` directory
- [ ] Initialize Vite + React + TypeScript project
- [ ] Add dependency: `"@design-system/ui": "workspace:*"`
- [ ] Create pages showcasing all shadcn components
- [ ] Add live code examples for each component
- [ ] Add component documentation
- [ ] Configure for Cloudflare Pages deployment

### Phase 6: Testing and Validation
- [ ] Run `pnpm install` from root
- [ ] Test all apps with `pnpm dev`
- [ ] Test individual app dev: `pnpm --filter font-app dev`
- [ ] Build all apps with `turbo build`
- [ ] Verify component imports work across all apps
- [ ] Test Turborepo caching (build twice, second should be instant)
- [ ] Verify no TypeScript errors
- [ ] Test hot reload in dev mode

### Phase 7: Deployment Setup
- [ ] Configure Cloudflare Workers deployment for apps
- [ ] Update GitHub repository with monorepo structure
- [ ] Add deployment scripts to package.json
- [ ] Test deployments individually
- [ ] Document deployment process

### Phase 8: Documentation and Polish
- [ ] Create comprehensive README.md
- [ ] Document how to add new apps
- [ ] Document how to add new shared components
- [ ] Document how to run/build/deploy
- [ ] Add contributing guidelines

## Key Configuration Files

### Root package.json
```json
{
  "name": "ui-monorepo",
  "private": true,
  "packageManager": "pnpm@9.15.0",
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "lint": "turbo run lint",
    "clean": "turbo run clean"
  },
  "devDependencies": {
    "turbo": "^2.3.0",
    "typescript": "~5.8.3"
  }
}
```

### pnpm-workspace.yaml
```yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### turbo.json
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".wrangler/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "dependsOn": ["^build"]
    }
  }
}
```

## Component Sharing with shadcn/ui

### Installing Components
When you need to add a new shadcn component:

```bash
# From root, run:
npx shadcn@latest add <component-name>

# CLI will detect monorepo and ask where to install:
# - Select "packages/ui" for shared components
# - Select specific app for app-only components
```

### Using Shared Components in Apps
```typescript
// In any app (font-app, color-palette, etc.)
import { Button } from '@design-system/ui/components/ui/button'
import { Card } from '@design-system/ui/components/ui/card'
import { cn } from '@design-system/ui/lib/utils'

function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  )
}
```

## Benefits of This Structure

1. **Component Reusability**: All apps share the same UI components
2. **Single Source of Truth**: Design changes in one place affect all apps
3. **Type Safety**: Shared TypeScript types across packages
4. **Fast Builds**: Turborepo caching makes rebuilds 99% faster
5. **Parallel Development**: Work on multiple apps simultaneously
6. **Consistent Styling**: Tailwind config shared across all apps
7. **Easy Maintenance**: Update a component once, use everywhere
8. **Scalability**: Easy to add new apps and packages
9. **Developer Experience**: Hot reload works across packages

## Future Enhancements

Once the basic monorepo is working, we can add:

### Additional Packages
- `@design-system/design-tokens` - Colors, fonts, spacing constants
- `@design-system/api-types` - Shared TypeScript types for APIs
- `@design-system/utils` - Shared utility functions
- `@design-system/eslint-config` - Shared ESLint configuration

### Database Integration
- Re-add D1 database support to font-app
- Re-add R2 storage support to font-app
- Add database migrations package
- Shared database utilities

### CI/CD
- GitHub Actions for automated testing
- Automated deployments on push
- Preview deployments for PRs
- Turborepo Remote Caching

### Developer Tools
- Storybook for component documentation
- Playwright for E2E testing
- Vitest for unit testing
- Prettier for code formatting

## Questions to Resolve

- [ ] Should we keep 3 separate font apps or consolidate?
- [ ] Which font app should be the "primary" one?
- [ ] Should component-showcase be a separate app or integrated into one?
- [ ] Do we want to deploy all apps or just some?
- [ ] Should we add a design tokens package immediately or later?

## References

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [shadcn/ui Monorepo Guide](https://ui.shadcn.com/docs/monorepo)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Vite](https://vitejs.dev/)

---

**Last Updated**: November 21, 2025
**Status**: Phase 1 in progress
**Next Step**: Create root package.json and initialize Turborepo
