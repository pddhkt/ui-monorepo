import type { Transition } from 'framer-motion';

/**
 * Quick spring transition
 */
export const springQuick: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
};

/**
 * Smooth spring transition
 */
export const springSmooth: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 25,
};

/**
 * Bouncy spring transition
 */
export const springBouncy: Transition = {
  type: 'spring',
  stiffness: 500,
  damping: 20,
};

/**
 * Slow spring transition
 */
export const springSlow: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 30,
};

/**
 * Fast ease transition
 */
export const easeFast: Transition = {
  duration: 0.2,
  ease: 'easeInOut',
};

/**
 * Normal ease transition
 */
export const easeNormal: Transition = {
  duration: 0.3,
  ease: 'easeInOut',
};

/**
 * Slow ease transition
 */
export const easeSlow: Transition = {
  duration: 0.5,
  ease: 'easeInOut',
};

/**
 * Bounce transition
 */
export const bounce: Transition = {
  type: 'spring',
  bounce: 0.5,
  duration: 0.6,
};

/**
 * Stagger children animation helper
 */
export const staggerChildren = (staggerDelay = 0.1): Transition => ({
  staggerChildren: staggerDelay,
});

/**
 * Delay transition helper
 */
export const withDelay = (delay: number, transition: Transition = easeNormal): Transition => ({
  ...transition,
  delay,
});
