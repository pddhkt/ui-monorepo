import type { ColorPalette } from '../types/index.js'

/**
 * Curated color palettes for design system
 */
export const palettes: ColorPalette[] = [
  {
    id: 'monochrome',
    name: 'Monochrome',
    description: 'Pure grayscale palette for minimalist and professional designs',
    category: 'Technical',
    colors: [
      {
        name: 'Pure White',
        hex: '#FFFFFF',
        description: 'Clean white base',
      },
      {
        name: 'Medium Gray',
        hex: '#9CA3AF',
        description: 'Balanced gray',
      },
      {
        name: 'Charcoal',
        hex: '#374151',
        description: 'Deep gray',
      },
    ],
  },
  {
    id: 'retro',
    name: 'Retro',
    description: 'Vintage warm colors inspired by classic design eras',
    category: 'Creative',
    colors: [
      {
        name: 'Vintage Cream',
        hex: '#F6F7EB',
        description: 'Aged paper tone',
      },
      {
        name: 'Burnt Orange',
        hex: '#E94F37',
        description: 'Classic red-orange',
      },
      {
        name: 'Slate Gray',
        hex: '#393E41',
        description: 'Industrial charcoal',
      },
    ],
  },
]

/**
 * Get a palette by ID
 */
export function getPaletteById(id: string): ColorPalette | undefined {
  return palettes.find((palette) => palette.id === id)
}

/**
 * Get all palettes in a specific category
 */
export function getPalettesByCategory(category: string): ColorPalette[] {
  return palettes.filter((palette) => palette.category === category)
}

/**
 * Get all unique categories
 */
export function getCategories(): string[] {
  return [...new Set(palettes.map((palette) => palette.category))]
}
