/**
 * Shadow tokens for depth and elevation
 * Based on Material Design and modern shadow systems
 */

export const shadows = {
  // No shadow
  none: 'none',

  // Subtle shadows for subtle elevation
  xs: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',

  // Standard shadows for cards and panels
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',

  // Large shadows for modals and popovers
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',

  // Inner shadows for inset effects
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const

/**
 * Colored shadows for interactive elements
 */
export const coloredShadows = {
  // Primary color shadows
  primary: {
    sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 0 0 1px oklch(0.205 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 0 0 1px oklch(0.205 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 0 0 1px oklch(0.205 0 0 / 0.15)',
  },

  // Accent/focus shadows
  focus: {
    ring: '0 0 0 3px oklch(0.205 0 0 / 0.1)',
    outline: '0 0 0 2px oklch(1 0 0), 0 0 0 4px oklch(0.205 0 0)',
  },

  // Error/danger shadows
  error: {
    sm: '0 1px 3px 0 rgb(239 68 68 / 0.2)',
    md: '0 4px 6px -1px rgb(239 68 68 / 0.2)',
  },

  // Success shadows
  success: {
    sm: '0 1px 3px 0 rgb(34 197 94 / 0.2)',
    md: '0 4px 6px -1px rgb(34 197 94 / 0.2)',
  },
} as const

export type ShadowToken = keyof typeof shadows

export default shadows
