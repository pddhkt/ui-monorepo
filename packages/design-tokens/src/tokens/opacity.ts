/**
 * Opacity tokens for transparency and layering
 * Percentage-based values for consistent transparency
 */

export const opacity = {
  // Fully transparent
  0: '0',

  // Subtle transparency
  5: '0.05',
  10: '0.1',
  15: '0.15',
  20: '0.2',

  // Light transparency
  25: '0.25',
  30: '0.3',
  35: '0.35',
  40: '0.4',

  // Medium transparency
  50: '0.5',
  60: '0.6',

  // Heavy transparency
  70: '0.7',
  75: '0.75',
  80: '0.8',
  85: '0.85',

  // Subtle opacity
  90: '0.9',
  95: '0.95',

  // Fully opaque
  100: '1',
} as const

/**
 * Semantic opacity tokens for specific use cases
 */
export const semanticOpacity = {
  // Disabled states
  disabled: opacity[40],

  // Hover states
  hover: opacity[90],

  // Loading states
  loading: opacity[60],

  // Placeholder text
  placeholder: opacity[50],

  // Muted content
  muted: opacity[70],

  // Overlays
  overlay: {
    light: opacity[10],
    DEFAULT: opacity[50],
    dark: opacity[80],
  },

  // Backdrop blur
  backdrop: {
    light: opacity[20],
    DEFAULT: opacity[40],
    heavy: opacity[60],
  },

  // Borders
  border: {
    subtle: opacity[10],
    DEFAULT: opacity[20],
    strong: opacity[40],
  },
} as const

export type OpacityToken = keyof typeof opacity

export default opacity
