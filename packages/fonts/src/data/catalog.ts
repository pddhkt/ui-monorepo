import type { FontDefinition } from '../types/index.js'

/**
 * Curated font catalog for design system
 * Metadata only - actual font files hosted separately
 */
export const fontCatalog: FontDefinition[] = [
  // Sans-Serif Fonts
  {
    id: 'inter',
    name: 'Inter',
    description: 'A highly readable sans-serif font designed for user interfaces',
    type: 'WOFF2',
    category: 'SANS_SERIF',
    tags: ['modern', 'ui', 'clean', 'geometric'],
    featured: true,
  },
  {
    id: 'helvetica-now',
    name: 'Helvetica Now',
    description: 'Modern take on the classic Helvetica typeface',
    type: 'WOFF2',
    category: 'SANS_SERIF',
    tags: ['swiss', 'classic', 'versatile'],
    featured: false,
  },
  {
    id: 'gt-walsheim',
    name: 'GT Walsheim',
    description: 'A contemporary geometric sans with personality',
    type: 'WOFF2',
    category: 'SANS_SERIF',
    tags: ['geometric', 'friendly', 'modern'],
    featured: false,
  },

  // Monospace Fonts
  {
    id: 'roboto-mono',
    name: 'Roboto Mono',
    description: 'A monospaced addition to the Roboto type family',
    type: 'WOFF2',
    category: 'MONOSPACE',
    tags: ['monospace', 'code', 'google', 'programming'],
    featured: true,
  },
  {
    id: 'fira-code',
    name: 'Fira Code',
    description: 'Developer favorite with programming ligatures',
    type: 'WOFF2',
    category: 'MONOSPACE',
    tags: ['code', 'ligatures', 'developer', 'coding'],
    featured: true,
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    description: 'Professional coding font with increased height',
    type: 'WOFF2',
    category: 'MONOSPACE',
    tags: ['code', 'ide', 'programming'],
    featured: false,
  },

  // Serif Fonts
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    description: 'Elegant serif font for titles and headings',
    type: 'WOFF2',
    category: 'SERIF',
    tags: ['elegant', 'serif', 'display', 'luxury'],
    featured: false,
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    description: 'Readable serif designed for screens',
    type: 'WOFF2',
    category: 'SERIF',
    tags: ['readable', 'text', 'editorial'],
    featured: false,
  },
  {
    id: 'crimson-pro',
    name: 'Crimson Pro',
    description: 'Classic book typeface with modern touch',
    type: 'WOFF2',
    category: 'SERIF',
    tags: ['classic', 'book', 'text'],
    featured: false,
  },

  // Display Fonts
  {
    id: 'bebas-neue',
    name: 'Bebas Neue',
    description: 'A bold display font perfect for headlines',
    type: 'WOFF2',
    category: 'DISPLAY',
    tags: ['bold', 'display', 'headlines', 'impact'],
    featured: true,
  },
  {
    id: 'druk-wide',
    name: 'Druk Wide',
    description: 'Ultra-wide display face for maximum impact',
    type: 'WOFF2',
    category: 'DISPLAY',
    tags: ['wide', 'bold', 'poster', 'impact'],
    featured: false,
  },
  {
    id: 'monument-extended',
    name: 'Monument Extended',
    description: 'Geometric display font with strong presence',
    type: 'WOFF2',
    category: 'DISPLAY',
    tags: ['geometric', 'modern', 'bold'],
    featured: false,
  },

  // Script Fonts
  {
    id: 'dancing-script',
    name: 'Dancing Script',
    description: 'A lively casual script font',
    type: 'WOFF2',
    category: 'SCRIPT',
    tags: ['script', 'handwriting', 'casual', 'playful'],
    featured: false,
  },
  {
    id: 'pacifico',
    name: 'Pacifico',
    description: 'Surf-inspired brush script font',
    type: 'WOFF2',
    category: 'SCRIPT',
    tags: ['brush', 'casual', 'retro'],
    featured: false,
  },

  // Handwriting Fonts
  {
    id: 'allura',
    name: 'Allura',
    description: 'Elegant calligraphy script',
    type: 'WOFF2',
    category: 'HANDWRITING',
    tags: ['calligraphy', 'wedding', 'elegant'],
    featured: false,
  },
  {
    id: 'caveat',
    name: 'Caveat',
    description: 'Handwritten marker-style font',
    type: 'WOFF2',
    category: 'HANDWRITING',
    tags: ['handwritten', 'marker', 'casual'],
    featured: false,
  },

  // Decorative Fonts
  {
    id: 'abril-fatface',
    name: 'Abril Fatface',
    description: 'Dramatic display font with high contrast',
    type: 'WOFF2',
    category: 'DECORATIVE',
    tags: ['dramatic', 'fashion', 'luxury'],
    featured: false,
  },
  {
    id: 'righteous',
    name: 'Righteous',
    description: 'Futuristic display with rounded edges',
    type: 'WOFF2',
    category: 'DECORATIVE',
    tags: ['futuristic', 'rounded', 'tech'],
    featured: false,
  },
  {
    id: 'bungee',
    name: 'Bungee',
    description: 'Multi-style urban display typeface',
    type: 'WOFF2',
    category: 'DECORATIVE',
    tags: ['urban', 'colorful', 'street'],
    featured: false,
  },
]

/**
 * Get a font by ID
 */
export function getFontById(id: string): FontDefinition | undefined {
  return fontCatalog.find((font) => font.id === id)
}

/**
 * Get all fonts in a specific category
 */
export function getFontsByCategory(category: string): FontDefinition[] {
  return fontCatalog.filter((font) => font.category === category)
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return [...new Set(fontCatalog.map((font) => font.category))]
}

/**
 * Get all featured fonts
 */
export function getFeaturedFonts(): FontDefinition[] {
  return fontCatalog.filter((font) => font.featured)
}

/**
 * Search fonts by name or tags
 */
export function searchFonts(query: string): FontDefinition[] {
  const lowerQuery = query.toLowerCase()
  return fontCatalog.filter(
    (font) =>
      font.name.toLowerCase().includes(lowerQuery) ||
      font.description.toLowerCase().includes(lowerQuery) ||
      font.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}
