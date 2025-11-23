# @design-system/palettes

Color palette data and utilities for the design system.

## Installation

```bash
pnpm add @design-system/palettes
```

## Usage

### Importing Palettes

```typescript
import { palettes, getPaletteById, getCategories } from '@design-system/palettes/palettes'

// Get all palettes
console.log(palettes)

// Get specific palette
const monochrome = getPaletteById('monochrome')

// Get all categories
const categories = getCategories()
```

### Using Color Utilities

```typescript
import {
  hexToRgb,
  rgbToHex,
  getContrast,
  lighten,
  darken,
  generateColorScale,
  isValidHex
} from '@design-system/palettes/utils'

// Convert colors
const rgb = hexToRgb('#FF5733')
const hex = rgbToHex({ r: 255, g: 87, b: 51 })

// Check contrast (WCAG compliance)
const contrast = getContrast('#FFFFFF', '#000000')
console.log(contrast.ratio) // 21
console.log(contrast.level) // 'AAA'
console.log(contrast.passes.aa) // true

// Lighten/darken colors
const lighter = lighten('#FF5733', 20) // 20% lighter
const darker = darken('#FF5733', 20) // 20% darker

// Generate color scale
const scale = generateColorScale('#FF5733', 9)
// Returns 9 colors from light to dark

// Validate hex color
console.log(isValidHex('#FF5733')) // true
console.log(isValidHex('invalid')) // false
```

### TypeScript Types

```typescript
import type {
  ColorPalette,
  ColorSwatch,
  RgbColor,
  ContrastRatio
} from '@design-system/palettes/types'
```

## API Reference

### Palette Data

- `palettes` - Array of all color palettes
- `getPaletteById(id)` - Get palette by ID
- `getPalettesByCategory(category)` - Get palettes by category
- `getCategories()` - Get all unique categories

### Color Utilities

- `hexToRgb(hex)` - Convert hex to RGB object
- `rgbToHex(rgb)` - Convert RGB object to hex string
- `getContrast(color1, color2)` - Calculate WCAG contrast ratio
- `lighten(hex, percent)` - Lighten color by percentage (0-100)
- `darken(hex, percent)` - Darken color by percentage (0-100)
- `generateColorScale(baseColor, steps)` - Generate color scale
- `isValidHex(hex)` - Validate hex color string

## License

MIT
