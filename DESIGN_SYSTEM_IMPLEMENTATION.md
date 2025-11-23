# Design System Implementation Plan

## Overview
Build a design system compositor/playground that allows previewing and applying font + color + spacing combinations across apps in the monorepo.

## Architecture Vision

```
packages/
├── design-tokens/        (✅ existing - spacing, shadows, etc.)
├── palettes/             (🆕 color palette data + utilities)
├── fonts/                (🆕 font metadata + configs)
└── ui/                   (existing shared components)

apps/
├── design-playground/       (🆕 compositor/playground - design system showcase)
├── font-app/                (consumer + specialized font browsing)
└── color-palette/           (consumer + specialized palette browsing)
```

---

## Implementation Steps

### Phase 1: Build Packages

#### ✅ Step 1: Create `@design-system/palettes` Package (COMPLETED)
- [x] Create package structure in `packages/palettes/`
- [x] Set up package.json with proper exports
- [x] Migrate color palette data from `apps/color-palette/src/data/palettes.ts`
- [x] Add TypeScript types
- [x] Add utility functions (color manipulation, contrast checking, etc.)
- [x] Set up TypeScript config
- [x] Test package builds

#### ✅ Step 2: Create `@design-system/fonts` Package (COMPLETED)
- [x] Create package structure in `packages/fonts/`
- [x] Set up package.json with proper exports
- [x] Define font catalog structure (metadata only, not actual font files)
- [x] Add font family definitions and categories
- [x] Add font stack configurations
- [x] Add TypeScript types
- [x] Set up TypeScript config
- [x] Test package builds

#### Step 3: Enhance `@design-system/tokens` (if needed)
- [ ] Review existing tokens
- [ ] Add any missing tokens needed for showcase
- [ ] Ensure proper exports for all tokens

---

### Phase 2: Update Existing Apps to Use Packages

#### ✅ Step 4: Update `color-palette` App (COMPLETED)
- [x] Install `@design-system/palettes` dependency
- [x] Replace local `palettes.ts` import with package import
- [x] Update any broken imports/references
- [x] Test app functionality
- [x] Remove old `src/data/palettes.ts` file

#### Step 5: Update `font-app` App
- [ ] Install `@design-system/fonts` dependency
- [ ] Integrate font metadata from package
- [ ] Keep D1 database for dynamic features (uploads, stats)
- [ ] Use package as source of truth for font categories/metadata
- [ ] Test app functionality

---

### Phase 3: Build Design Playground App

#### ✅ Step 6: Set Up Design Playground Structure (COMPLETED)
- [x] Review existing `apps/design-playground/` setup
- [x] Install package dependencies (palettes, fonts, tokens, ui)
- [x] Create theme context for state management
- [x] Create theme generator utilities
- [x] Build compositor layout with tabs (Fonts, Colors, Spacing)
- [x] Add live preview area (Typography + Colors)

#### ✅ Step 7: Build Theme Compositor UI (COMPLETED)
- [x] Create FontSelector component with category filtering
- [x] Create PaletteSelector component with visual swatches
- [x] Create SpacingSelector component with toggle options
- [x] Integrate selectors into App with live preview
- [x] Add real-time preview updates

#### Step 8: Build Preview Components
- [ ] Typography preview (headings, body text, code)
- [ ] Component preview (buttons, cards, inputs)
- [ ] Layout preview (spacing, grids)
- [ ] Color contrast checker
- [ ] Responsive preview

#### Step 9: Theme Export System
- [ ] Design theme configuration format
- [ ] Build export functionality (JSON/CSS variables/TypeScript)
- [ ] Add copy-to-clipboard feature
- [ ] Add download theme config feature
- [ ] Add theme import/load feature

---

### Phase 4: Integration & Polish

#### Step 10: Apply Themes to Other Apps
- [ ] Create theme application system
- [ ] Update font-app and color-palette to accept themes
- [ ] Document how to apply themes
- [ ] Test theme portability across apps

#### Step 11: Documentation
- [ ] Document package APIs
- [ ] Create usage examples
- [ ] Add README files to each package
- [ ] Document showcase app usage
- [ ] Add architecture documentation

#### Step 12: Testing & Refinement
- [ ] Test all apps with new packages
- [ ] Verify build process works
- [ ] Check TypeScript types
- [ ] Performance testing
- [ ] Cross-app theme testing

---

## Current Status

**Phase:** 3 - Build Design Playground App
**Step:** 7 - Build Theme Compositor UI
**Status:** ✅ Completed - App Running!

**Dev Server:** http://localhost:5173/

**Features Working:**
- ✅ Interactive font selection (19 fonts, filterable by category)
- ✅ Palette selection (2 palettes, filterable)
- ✅ Spacing scale selector (compact/comfortable/spacious)
- ✅ Live preview of typography, colors, and spacing
- ✅ Real-time updates when selections change

**Next Steps:**
- Step 8: Enhance preview components (component preview, dark mode)
- Step 9: Add export functionality (JSON, CSS, TypeScript)

---

## Notes & Decisions

### Font Data Strategy
- Fonts package will contain static metadata (families, categories, preview text)
- font-app keeps D1 database for uploaded files, downloads, and dynamic features
- Package serves as source of truth for font categories and base definitions

### Theme Export Format
- TBD: JSON config, CSS variables, or TypeScript objects?
- Should support easy integration into any app

### Future Enhancements
- Theme versioning
- Theme marketplace/sharing
- AI-powered theme suggestions
- Accessibility scoring
