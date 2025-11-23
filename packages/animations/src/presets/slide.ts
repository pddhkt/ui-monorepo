import type { Variants } from 'framer-motion';

/**
 * Slide in from top
 */
export const slideInDown: Variants = {
  hidden: { y: '-100%' },
  visible: { y: 0 },
};

/**
 * Slide in from bottom
 */
export const slideInUp: Variants = {
  hidden: { y: '100%' },
  visible: { y: 0 },
};

/**
 * Slide in from left
 */
export const slideInLeft: Variants = {
  hidden: { x: '-100%' },
  visible: { x: 0 },
};

/**
 * Slide in from right
 */
export const slideInRight: Variants = {
  hidden: { x: '100%' },
  visible: { x: 0 },
};

/**
 * Slide out to top
 */
export const slideOutUp: Variants = {
  visible: { y: 0 },
  hidden: { y: '-100%' },
};

/**
 * Slide out to bottom
 */
export const slideOutDown: Variants = {
  visible: { y: 0 },
  hidden: { y: '100%' },
};

/**
 * Slide out to left
 */
export const slideOutLeft: Variants = {
  visible: { x: 0 },
  hidden: { x: '-100%' },
};

/**
 * Slide out to right
 */
export const slideOutRight: Variants = {
  visible: { x: 0 },
  hidden: { x: '100%' },
};
