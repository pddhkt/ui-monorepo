/**
 * Border radius tokens for consistent rounding
 * From sharp to fully rounded corners
 */

export const radius = {
  // No rounding
  none: '0',

  // Small radius for subtle rounding
  sm: '0.125rem',  // 2px
  DEFAULT: '0.25rem', // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px

  // Large radius for cards and panels
  '2xl': '1rem',   // 16px
  '3xl': '1.5rem', // 24px

  // Full radius for pills and circular elements
  full: '9999px',
} as const

/**
 * Component-specific radius tokens
 * Semantic naming for specific use cases
 */
export const componentRadius = {
  // Buttons
  button: {
    sm: radius.md,
    DEFAULT: radius.lg,
    lg: radius.xl,
  },

  // Input fields
  input: radius.md,

  // Cards and containers
  card: radius.xl,
  panel: radius['2xl'],

  // Modals and dialogs
  modal: radius['2xl'],
  dialog: radius['3xl'],

  // Badges and tags
  badge: radius.md,
  tag: radius.full,

  // Avatars
  avatar: {
    square: radius.md,
    rounded: radius.lg,
    circle: radius.full,
  },

  // Images
  image: {
    sm: radius.md,
    DEFAULT: radius.lg,
    lg: radius.xl,
  },
} as const

export type RadiusToken = keyof typeof radius

export default radius
