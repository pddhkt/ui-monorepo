/**
 * Color tokens using OKLCH color space
 * OKLCH provides better perceptual uniformity and dark mode support
 *
 * Format: oklch(lightness chroma hue / alpha)
 * - Lightness: 0-1 (0 = black, 1 = white)
 * - Chroma: 0-0.4 (saturation)
 * - Hue: 0-360 (color wheel angle)
 */

/**
 * Base color palette
 */
export const colors = {
  // Neutral colors (grayscale)
  white: 'oklch(1 0 0)',
  black: 'oklch(0 0 0)',

  gray: {
    50: 'oklch(0.985 0 0)',
    100: 'oklch(0.97 0 0)',
    200: 'oklch(0.922 0 0)',
    300: 'oklch(0.871 0 0)',
    400: 'oklch(0.757 0 0)',
    500: 'oklch(0.571 0 0)',
    600: 'oklch(0.486 0 0)',
    700: 'oklch(0.393 0 0)',
    800: 'oklch(0.278 0 0)',
    900: 'oklch(0.207 0 0)',
    950: 'oklch(0.145 0 0)',
  },

  // Primary colors (can be customized per brand)
  primary: {
    50: 'oklch(0.97 0.01 240)',
    100: 'oklch(0.94 0.02 240)',
    200: 'oklch(0.88 0.04 240)',
    300: 'oklch(0.78 0.08 240)',
    400: 'oklch(0.66 0.14 240)',
    500: 'oklch(0.55 0.18 240)',
    600: 'oklch(0.45 0.20 240)',
    700: 'oklch(0.38 0.18 240)',
    800: 'oklch(0.32 0.14 240)',
    900: 'oklch(0.27 0.10 240)',
    950: 'oklch(0.18 0.06 240)',
  },

  // Accent/Secondary colors
  accent: {
    50: 'oklch(0.97 0.01 300)',
    100: 'oklch(0.94 0.03 300)',
    200: 'oklch(0.88 0.06 300)',
    300: 'oklch(0.78 0.12 300)',
    400: 'oklch(0.66 0.20 300)',
    500: 'oklch(0.55 0.24 300)',
    600: 'oklch(0.45 0.24 300)',
    700: 'oklch(0.38 0.20 300)',
    800: 'oklch(0.32 0.16 300)',
    900: 'oklch(0.27 0.12 300)',
    950: 'oklch(0.18 0.08 300)',
  },

  // Semantic colors
  success: {
    50: 'oklch(0.97 0.01 145)',
    100: 'oklch(0.94 0.03 145)',
    200: 'oklch(0.88 0.06 145)',
    300: 'oklch(0.78 0.12 145)',
    400: 'oklch(0.68 0.18 145)',
    500: 'oklch(0.58 0.20 145)',
    600: 'oklch(0.48 0.20 145)',
    700: 'oklch(0.38 0.16 145)',
    800: 'oklch(0.32 0.12 145)',
    900: 'oklch(0.27 0.08 145)',
    950: 'oklch(0.18 0.04 145)',
  },

  warning: {
    50: 'oklch(0.97 0.01 85)',
    100: 'oklch(0.94 0.03 85)',
    200: 'oklch(0.88 0.08 85)',
    300: 'oklch(0.82 0.14 85)',
    400: 'oklch(0.74 0.18 85)',
    500: 'oklch(0.66 0.20 85)',
    600: 'oklch(0.58 0.20 85)',
    700: 'oklch(0.48 0.16 85)',
    800: 'oklch(0.38 0.12 85)',
    900: 'oklch(0.32 0.08 85)',
    950: 'oklch(0.22 0.04 85)',
  },

  error: {
    50: 'oklch(0.97 0.01 25)',
    100: 'oklch(0.94 0.03 25)',
    200: 'oklch(0.88 0.08 25)',
    300: 'oklch(0.78 0.14 25)',
    400: 'oklch(0.66 0.20 25)',
    500: 'oklch(0.55 0.22 25)',
    600: 'oklch(0.48 0.22 25)',
    700: 'oklch(0.40 0.20 25)',
    800: 'oklch(0.34 0.16 25)',
    900: 'oklch(0.28 0.12 25)',
    950: 'oklch(0.18 0.06 25)',
  },

  info: {
    50: 'oklch(0.97 0.01 220)',
    100: 'oklch(0.94 0.03 220)',
    200: 'oklch(0.88 0.06 220)',
    300: 'oklch(0.78 0.12 220)',
    400: 'oklch(0.66 0.18 220)',
    500: 'oklch(0.55 0.20 220)',
    600: 'oklch(0.45 0.20 220)',
    700: 'oklch(0.38 0.16 220)',
    800: 'oklch(0.32 0.12 220)',
    900: 'oklch(0.27 0.08 220)',
    950: 'oklch(0.18 0.04 220)',
  },
} as const

/**
 * Semantic color tokens for theming
 * These map to the appropriate colors based on light/dark mode
 */
export const semanticColors = {
  // Background colors
  background: {
    primary: colors.white,
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
    inverse: colors.gray[900],
  },

  // Foreground/text colors
  foreground: {
    primary: colors.gray[950],
    secondary: colors.gray[700],
    tertiary: colors.gray[500],
    inverse: colors.white,
    disabled: colors.gray[400],
  },

  // Border colors
  border: {
    DEFAULT: colors.gray[200],
    hover: colors.gray[300],
    focus: colors.primary[500],
    error: colors.error[500],
  },

  // Interactive element colors
  interactive: {
    primary: colors.primary[600],
    'primary-hover': colors.primary[700],
    'primary-active': colors.primary[800],
    secondary: colors.gray[200],
    'secondary-hover': colors.gray[300],
    'secondary-active': colors.gray[400],
  },

  // State colors
  state: {
    success: colors.success[600],
    warning: colors.warning[600],
    error: colors.error[600],
    info: colors.info[600],
  },
} as const

/**
 * Dark mode color overrides
 * Apply these when in dark mode
 */
export const darkModeColors = {
  background: {
    primary: colors.gray[950],
    secondary: colors.gray[900],
    tertiary: colors.gray[800],
    inverse: colors.gray[50],
  },

  foreground: {
    primary: colors.gray[50],
    secondary: colors.gray[300],
    tertiary: colors.gray[500],
    inverse: colors.gray[950],
    disabled: colors.gray[600],
  },

  border: {
    DEFAULT: colors.gray[800],
    hover: colors.gray[700],
    focus: colors.primary[400],
    error: colors.error[400],
  },

  interactive: {
    primary: colors.primary[500],
    'primary-hover': colors.primary[400],
    'primary-active': colors.primary[300],
    secondary: colors.gray[700],
    'secondary-hover': colors.gray[600],
    'secondary-active': colors.gray[500],
  },
} as const

export type ColorToken = keyof typeof colors

export default colors
