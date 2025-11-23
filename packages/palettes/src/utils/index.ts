import type { RgbColor, ContrastRatio } from '../types/index.js'

/**
 * Convert hex color to RGB
 * @param hex - Hex color string (with or without #)
 * @returns RGB color object
 */
export function hexToRgb(hex: string): RgbColor {
  const cleanHex = hex.replace('#', '')
  const r = parseInt(cleanHex.substring(0, 2), 16)
  const g = parseInt(cleanHex.substring(2, 4), 16)
  const b = parseInt(cleanHex.substring(4, 6), 16)
  return { r, g, b }
}

/**
 * Convert RGB to hex color
 * @param rgb - RGB color object
 * @returns Hex color string with #
 */
export function rgbToHex(rgb: RgbColor): string {
  const toHex = (n: number) => {
    const hex = Math.round(n).toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }
  return `#${toHex(rgb.r)}${toHex(rgb.g)}${toHex(rgb.b)}`.toUpperCase()
}

/**
 * Calculate relative luminance of a color (WCAG formula)
 * @param rgb - RGB color object
 * @returns Relative luminance (0-1)
 */
function getLuminance(rgb: RgbColor): number {
  const normalize = (val: number) => {
    const normalized = val / 255
    return normalized <= 0.03928
      ? normalized / 12.92
      : Math.pow((normalized + 0.055) / 1.055, 2.4)
  }

  const r = normalize(rgb.r)
  const g = normalize(rgb.g)
  const b = normalize(rgb.b)

  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}

/**
 * Calculate contrast ratio between two colors (WCAG formula)
 * @param color1 - First hex color
 * @param color2 - Second hex color
 * @returns Contrast ratio analysis
 */
export function getContrast(color1: string, color2: string): ContrastRatio {
  const lum1 = getLuminance(hexToRgb(color1))
  const lum2 = getLuminance(hexToRgb(color2))

  const lighter = Math.max(lum1, lum2)
  const darker = Math.min(lum1, lum2)
  const ratio = (lighter + 0.05) / (darker + 0.05)

  // WCAG 2.0 level AA requires 4.5:1 for normal text, 3:1 for large text
  // WCAG 2.0 level AAA requires 7:1 for normal text, 4.5:1 for large text
  const passes = {
    aa: ratio >= 4.5,
    aaLarge: ratio >= 3,
    aaa: ratio >= 7,
    aaaLarge: ratio >= 4.5,
  }

  let level: ContrastRatio['level']
  if (passes.aaa) level = 'AAA'
  else if (passes.aa) level = 'AA'
  else if (passes.aaLarge) level = 'AA-Large'
  else level = 'Fail'

  return { ratio, level, passes }
}

/**
 * Lighten a color by a percentage
 * @param hex - Hex color string
 * @param percent - Percentage to lighten (0-100)
 * @returns Lightened hex color
 */
export function lighten(hex: string, percent: number): string {
  const rgb = hexToRgb(hex)
  const factor = percent / 100
  return rgbToHex({
    r: rgb.r + (255 - rgb.r) * factor,
    g: rgb.g + (255 - rgb.g) * factor,
    b: rgb.b + (255 - rgb.b) * factor,
  })
}

/**
 * Darken a color by a percentage
 * @param hex - Hex color string
 * @param percent - Percentage to darken (0-100)
 * @returns Darkened hex color
 */
export function darken(hex: string, percent: number): string {
  const rgb = hexToRgb(hex)
  const factor = 1 - percent / 100
  return rgbToHex({
    r: rgb.r * factor,
    g: rgb.g * factor,
    b: rgb.b * factor,
  })
}

/**
 * Generate a color scale from a base color
 * @param baseColor - Base hex color
 * @param steps - Number of steps in the scale (default: 9)
 * @returns Array of hex colors from light to dark
 */
export function generateColorScale(baseColor: string, steps: number = 9): string[] {
  const scale: string[] = []
  const middleIndex = Math.floor(steps / 2)

  for (let i = 0; i < steps; i++) {
    if (i === middleIndex) {
      scale.push(baseColor)
    } else if (i < middleIndex) {
      const percent = ((middleIndex - i) / middleIndex) * 90
      scale.push(lighten(baseColor, percent))
    } else {
      const percent = ((i - middleIndex) / (steps - middleIndex - 1)) * 60
      scale.push(darken(baseColor, percent))
    }
  }

  return scale
}

/**
 * Check if a hex color is valid
 * @param hex - Hex color string
 * @returns True if valid hex color
 */
export function isValidHex(hex: string): boolean {
  return /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex)
}
