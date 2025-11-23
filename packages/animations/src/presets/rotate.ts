import type { Variants } from 'framer-motion';

/**
 * Rotate in clockwise
 */
export const rotateIn: Variants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: { rotate: 0, opacity: 1 },
};

/**
 * Rotate out clockwise
 */
export const rotateOut: Variants = {
  visible: { rotate: 0, opacity: 1 },
  hidden: { rotate: 180, opacity: 0 },
};

/**
 * Flip in horizontally
 */
export const flipInX: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

/**
 * Flip in vertically
 */
export const flipInY: Variants = {
  hidden: { rotateY: -90, opacity: 0 },
  visible: { rotateY: 0, opacity: 1 },
};

/**
 * Spin animation (continuous)
 */
export const spin: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};
