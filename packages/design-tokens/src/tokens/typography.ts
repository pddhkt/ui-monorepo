/**
 * Typography tokens for consistent text styling
 * Font families, sizes, weights, and line heights
 */

/**
 * Font family tokens
 */
export const fontFamily = {
  sans: [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'sans-serif',
  ].join(', '),

  serif: [
    'Playfair Display',
    'Georgia',
    'Cambria',
    'Times New Roman',
    'Times',
    'serif',
  ].join(', '),

  mono: [
    'Roboto Mono',
    'ui-monospace',
    'SFMono-Regular',
    'Menlo',
    'Monaco',
    'Consolas',
    'Liberation Mono',
    'Courier New',
    'monospace',
  ].join(', '),

  display: [
    'Bebas Neue',
    'Impact',
    'Arial Black',
    'sans-serif',
  ].join(', '),
} as const

/**
 * Font size tokens with rem values
 */
export const fontSize = {
  xs: ['0.75rem', { lineHeight: '1rem' }],     // 12px
  sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
  base: ['1rem', { lineHeight: '1.5rem' }],    // 16px
  lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
  xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 20px
  '2xl': ['1.5rem', { lineHeight: '2rem' }],   // 24px
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
  '5xl': ['3rem', { lineHeight: '1' }],           // 48px
  '6xl': ['3.75rem', { lineHeight: '1' }],        // 60px
  '7xl': ['4.5rem', { lineHeight: '1' }],         // 72px
  '8xl': ['6rem', { lineHeight: '1' }],           // 96px
  '9xl': ['8rem', { lineHeight: '1' }],           // 128px
} as const

/**
 * Font weight tokens
 */
export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const

/**
 * Line height tokens
 */
export const lineHeight = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
} as const

/**
 * Letter spacing tokens
 */
export const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const

/**
 * Text decoration thickness
 */
export const textDecorationThickness = {
  auto: 'auto',
  'from-font': 'from-font',
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const

/**
 * Text underline offset
 */
export const textUnderlineOffset = {
  auto: 'auto',
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
} as const

/**
 * Semantic typography styles
 */
export const headingStyles = {
  h1: {
    fontSize: fontSize['4xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h2: {
    fontSize: fontSize['3xl'],
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.tight,
    letterSpacing: letterSpacing.tight,
  },
  h3: {
    fontSize: fontSize['2xl'],
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
  },
  h4: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.semibold,
    lineHeight: lineHeight.snug,
  },
  h5: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
  h6: {
    fontSize: fontSize.base,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.normal,
  },
} as const

export const bodyStyles = {
  large: {
    fontSize: fontSize.lg,
    lineHeight: lineHeight.relaxed,
  },
  base: {
    fontSize: fontSize.base,
    lineHeight: lineHeight.normal,
  },
  small: {
    fontSize: fontSize.sm,
    lineHeight: lineHeight.normal,
  },
} as const

export type FontFamilyToken = keyof typeof fontFamily
export type FontSizeToken = keyof typeof fontSize
export type FontWeightToken = keyof typeof fontWeight

export default {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  headingStyles,
  bodyStyles,
}
