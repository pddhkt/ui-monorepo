export interface ColorSwatch {
  name: string
  hex: string
  description: string
}

export interface ColorPalette {
  id: string
  name: string
  description: string
  category: string
  colors: ColorSwatch[]
}

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
