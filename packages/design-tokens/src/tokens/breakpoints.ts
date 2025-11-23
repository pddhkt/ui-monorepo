/**
 * Responsive breakpoint tokens
 * Mobile-first approach with common device breakpoints
 */

export const breakpoints = {
  // Mobile devices (default, no media query needed)
  xs: '0px',

  // Small tablets and large phones (landscape)
  sm: '640px',

  // Tablets (portrait)
  md: '768px',

  // Small laptops and tablets (landscape)
  lg: '1024px',

  // Desktops
  xl: '1280px',

  // Large desktops
  '2xl': '1536px',

  // Extra large screens
  '3xl': '1920px',
} as const

export const breakpointValues = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
} as const

/**
 * Container max-widths for each breakpoint
 */
export const containerMaxWidths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

export type BreakpointToken = keyof typeof breakpoints

export default breakpoints
