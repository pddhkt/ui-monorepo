/**
 * Represents a single color in a palette
 */
export interface ColorSwatch {
  name: string
  hex: string
  description: string
}

/**
 * Represents a complete color palette
 */
export interface ColorPalette {
  id: string
  name: string
  description: string
  category: string
  colors: ColorSwatch[]
}

/**
 * RGB color representation
 */
export interface RgbColor {
  r: number
  g: number
  b: number
}

/**
 * Color contrast ratio result
 */
export interface ContrastRatio {
  ratio: number
  level: 'AAA' | 'AA' | 'AA-Large' | 'Fail'
  passes: {
    aa: boolean
    aaLarge: boolean
    aaa: boolean
    aaaLarge: boolean
  }
}
