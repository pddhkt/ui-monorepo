/**
 * Re-export utility functions from data and configs modules
 */

// Font catalog utilities
export {
  getFontById,
  getFontsByCategory,
  getCategories,
  getFeaturedFonts,
  searchFonts,
} from '../data/catalog.js'

// Font stack utilities
export {
  getFontStackById,
  getFontStacksByCategory,
  getSystemFontStacks,
  getFontPairingById,
} from '../configs/stacks.js'

/**
 * Generate a CSS font-family stack string
 * @param fontName - Primary font name
 * @param fallbacks - Array of fallback font names
 * @returns CSS font-family string
 */
export function generateFontStack(fontName: string, fallbacks: string[]): string {
  const quotedFont = fontName.includes(' ') ? `"${fontName}"` : fontName
  const quotedFallbacks = fallbacks.map((f) => (f.includes(' ') ? `"${f}"` : f))
  return [quotedFont, ...quotedFallbacks].join(', ')
}

/**
 * Check if a font name needs quotes in CSS
 * @param fontName - Font name to check
 * @returns True if font name should be quoted
 */
export function needsQuotes(fontName: string): boolean {
  return fontName.includes(' ') || fontName.includes('-')
}

/**
 * Format font name for CSS
 * @param fontName - Font name
 * @returns Properly formatted font name for CSS
 */
export function formatFontName(fontName: string): string {
  return needsQuotes(fontName) ? `"${fontName}"` : fontName
}
