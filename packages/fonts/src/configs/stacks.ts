import type { FontStack, FontPairing } from '../types/index.js'

/**
 * System and web-safe font stacks
 */
export const fontStacks: FontStack[] = [
  // System Sans-Serif Stacks
  {
    id: 'system-ui',
    name: 'System UI',
    description: 'Native system font stack for optimal performance',
    stack:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    category: 'SANS_SERIF',
    isSystem: true,
  },
  {
    id: 'inter-stack',
    name: 'Inter Stack',
    description: 'Inter with system font fallbacks',
    stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    category: 'SANS_SERIF',
    isSystem: false,
  },
  {
    id: 'helvetica-stack',
    name: 'Helvetica Stack',
    description: 'Classic Helvetica with Arial fallback',
    stack: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    category: 'SANS_SERIF',
    isSystem: true,
  },

  // System Serif Stacks
  {
    id: 'system-serif',
    name: 'System Serif',
    description: 'Native system serif fonts',
    stack: 'Georgia, "Times New Roman", Times, serif',
    category: 'SERIF',
    isSystem: true,
  },
  {
    id: 'playfair-stack',
    name: 'Playfair Stack',
    description: 'Playfair Display with serif fallbacks',
    stack: '"Playfair Display", Georgia, "Times New Roman", serif',
    category: 'SERIF',
    isSystem: false,
  },
  {
    id: 'merriweather-stack',
    name: 'Merriweather Stack',
    description: 'Merriweather with Georgia fallback',
    stack: '"Merriweather", Georgia, serif',
    category: 'SERIF',
    isSystem: false,
  },

  // System Monospace Stacks
  {
    id: 'system-mono',
    name: 'System Monospace',
    description: 'Native system monospace fonts',
    stack:
      'ui-monospace, "SF Mono", "Cascadia Code", "Roboto Mono", Menlo, Consolas, monospace',
    category: 'MONOSPACE',
    isSystem: true,
  },
  {
    id: 'fira-code-stack',
    name: 'Fira Code Stack',
    description: 'Fira Code with monospace fallbacks',
    stack: '"Fira Code", "Roboto Mono", "Courier New", monospace',
    category: 'MONOSPACE',
    isSystem: false,
  },
  {
    id: 'jetbrains-mono-stack',
    name: 'JetBrains Mono Stack',
    description: 'JetBrains Mono with system mono fallback',
    stack: '"JetBrains Mono", ui-monospace, monospace',
    category: 'MONOSPACE',
    isSystem: false,
  },

  // Display Font Stacks
  {
    id: 'bebas-stack',
    name: 'Bebas Neue Stack',
    description: 'Bebas Neue with impact fallback',
    stack: '"Bebas Neue", Impact, "Arial Black", sans-serif',
    category: 'DISPLAY',
    isSystem: false,
  },
]

/**
 * Curated font pairings
 */
export const fontPairings: FontPairing[] = [
  {
    id: 'modern-ui',
    name: 'Modern UI',
    description: 'Clean and modern pairing for user interfaces',
    headingFont: 'inter',
    bodyFont: 'inter',
    monoFont: 'fira-code',
  },
  {
    id: 'elegant-editorial',
    name: 'Elegant Editorial',
    description: 'Sophisticated pairing for content-heavy sites',
    headingFont: 'playfair-display',
    bodyFont: 'merriweather',
  },
  {
    id: 'bold-impact',
    name: 'Bold Impact',
    description: 'High-contrast pairing for maximum visual impact',
    headingFont: 'bebas-neue',
    bodyFont: 'inter',
  },
  {
    id: 'developer-friendly',
    name: 'Developer Friendly',
    description: 'Optimized for code-heavy documentation',
    headingFont: 'inter',
    bodyFont: 'inter',
    monoFont: 'jetbrains-mono',
  },
  {
    id: 'classic-professional',
    name: 'Classic Professional',
    description: 'Timeless and trustworthy combination',
    headingFont: 'helvetica-now',
    bodyFont: 'crimson-pro',
  },
]

/**
 * Get a font stack by ID
 */
export function getFontStackById(id: string): FontStack | undefined {
  return fontStacks.find((stack) => stack.id === id)
}

/**
 * Get all font stacks for a category
 */
export function getFontStacksByCategory(category: string): FontStack[] {
  return fontStacks.filter((stack) => stack.category === category)
}

/**
 * Get all system font stacks
 */
export function getSystemFontStacks(): FontStack[] {
  return fontStacks.filter((stack) => stack.isSystem)
}

/**
 * Get a font pairing by ID
 */
export function getFontPairingById(id: string): FontPairing | undefined {
  return fontPairings.find((pairing) => pairing.id === id)
}
