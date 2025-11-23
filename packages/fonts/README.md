# @design-system/fonts

Font catalog, configurations, and utilities for the design system.

## Installation

```bash
pnpm add @design-system/fonts
```

## Usage

### Importing Font Catalog

```typescript
import {
  fontCatalog,
  getFontById,
  getFontsByCategory,
  getCategories,
  getFeaturedFonts,
  searchFonts
} from '@design-system/fonts/catalog'

// Get all fonts
console.log(fontCatalog) // 19 curated fonts

// Get specific font
const inter = getFontById('inter')

// Get fonts by category
const monoFonts = getFontsByCategory('MONOSPACE')

// Get featured fonts
const featured = getFeaturedFonts()

// Search fonts
const results = searchFonts('code')
```

### Using Font Stacks

```typescript
import {
  fontStacks,
  fontPairings,
  getFontStackById,
  getFontStacksByCategory,
  getSystemFontStacks,
  getFontPairingById
} from '@design-system/fonts/stacks'

// Get all font stacks
console.log(fontStacks)

// Get specific stack
const systemUI = getFontStackById('system-ui')
console.log(systemUI.stack)
// '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, ...'

// Get system font stacks
const systemStacks = getSystemFontStacks()

// Get font pairing
const pairing = getFontPairingById('modern-ui')
console.log(pairing.headingFont) // 'inter'
console.log(pairing.bodyFont)    // 'inter'
console.log(pairing.monoFont)    // 'fira-code'
```

### Using Utility Functions

```typescript
import {
  generateFontStack,
  formatFontName,
  needsQuotes,
  // Re-exported from catalog and stacks
  getFontById,
  getSystemFontStacks
} from '@design-system/fonts/utils'

// Generate custom font stack
const stack = generateFontStack('Inter', ['Helvetica', 'Arial', 'sans-serif'])
// '"Inter", Helvetica, Arial, sans-serif'

// Format font name for CSS
const formatted = formatFontName('Roboto Mono')
// '"Roboto Mono"'

// Check if font needs quotes
console.log(needsQuotes('Inter'))        // false
console.log(needsQuotes('Roboto Mono'))  // true
```

### TypeScript Types

```typescript
import type {
  FontDefinition,
  FontCategory,
  FontType,
  FontWeight,
  FontStack,
  FontPairing
} from '@design-system/fonts/types'
```

## Font Categories

- **SANS_SERIF** - Modern, clean fonts for UI and body text
- **SERIF** - Traditional fonts for editorial content
- **MONOSPACE** - Fixed-width fonts for code
- **DISPLAY** - Bold, attention-grabbing fonts for headlines
- **HANDWRITING** - Handwritten-style fonts
- **SCRIPT** - Calligraphic and script fonts
- **DECORATIVE** - Unique, artistic fonts

## Font Catalog

19 curated fonts across all categories:

### Sans-Serif (3)
- Inter (featured)
- Helvetica Now
- GT Walsheim

### Monospace (3)
- Roboto Mono (featured)
- Fira Code (featured)
- JetBrains Mono

### Serif (3)
- Playfair Display
- Merriweather
- Crimson Pro

### Display (3)
- Bebas Neue (featured)
- Druk Wide
- Monument Extended

### Script (2)
- Dancing Script
- Pacifico

### Handwriting (2)
- Allura
- Caveat

### Decorative (3)
- Abril Fatface
- Righteous
- Bungee

## Font Pairings

Pre-configured font combinations:

- **Modern UI** - Inter + Fira Code
- **Elegant Editorial** - Playfair Display + Merriweather
- **Bold Impact** - Bebas Neue + Inter
- **Developer Friendly** - Inter + JetBrains Mono
- **Classic Professional** - Helvetica Now + Crimson Pro

## Notes

- This package contains **metadata only**, not actual font files
- Font files should be hosted separately and loaded via CDN or self-hosted
- All fonts are referenced by ID for consistency across the design system

## License

MIT
