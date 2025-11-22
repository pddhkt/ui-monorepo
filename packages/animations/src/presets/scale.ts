import type { Variants } from 'framer-motion';

/**
 * Scale up animation
 */
export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
};

/**
 * Scale down animation
 */
export const scaleOut: Variants = {
  visible: { scale: 1, opacity: 1 },
  hidden: { scale: 0.8, opacity: 0 },
};

/**
 * Pop in with bounce
 */
export const popIn: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 500,
      damping: 25,
    },
  },
};

/**
 * Grow from center
 */
export const grow: Variants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

/**
 * Shrink to center
 */
export const shrink: Variants = {
  visible: { scale: 1 },
  hidden: { scale: 0 },
};
