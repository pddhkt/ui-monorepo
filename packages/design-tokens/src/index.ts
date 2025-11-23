/**
 * Design Tokens Package
 *
 * Comprehensive design token system for consistent styling across applications
 * Includes: spacing, breakpoints, shadows, radius, opacity, typography, and colors
 */

export { spacing, type SpacingToken } from './tokens/spacing'
export {
  breakpoints,
  breakpointValues,
  containerMaxWidths,
  type BreakpointToken,
} from './tokens/breakpoints'
export { shadows, coloredShadows, type ShadowToken } from './tokens/shadows'
export { radius, componentRadius, type RadiusToken } from './tokens/radius'
export { opacity, semanticOpacity, type OpacityToken } from './tokens/opacity'
export {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  textDecorationThickness,
  textUnderlineOffset,
  headingStyles,
  bodyStyles,
  type FontFamilyToken,
  type FontSizeToken,
  type FontWeightToken,
} from './tokens/typography'
export {
  colors,
  semanticColors,
  darkModeColors,
  type ColorToken,
} from './tokens/colors'

/**
 * All tokens exported as a single object for convenience
 */
export const tokens = {
  spacing: () => import('./tokens/spacing'),
  breakpoints: () => import('./tokens/breakpoints'),
  shadows: () => import('./tokens/shadows'),
  radius: () => import('./tokens/radius'),
  opacity: () => import('./tokens/opacity'),
  typography: () => import('./tokens/typography'),
  colors: () => import('./tokens/colors'),
}
