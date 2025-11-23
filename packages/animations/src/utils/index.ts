import type { Variants, Transition } from 'framer-motion';

/**
 * Combine multiple variants into one
 */
export function combineVariants(...variants: Variants[]): Variants {
  return variants.reduce((acc, variant) => {
    Object.keys(variant).forEach((key) => {
      acc[key] = {
        ...acc[key],
        ...variant[key],
      };
    });
    return acc;
  }, {} as Variants);
}

/**
 * Create staggered container variants
 */
export function createStaggerContainer(staggerDelay = 0.1, delayChildren = 0): Variants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };
}

/**
 * Apply custom transition to existing variants
 */
export function withTransition(variants: Variants, transition: Transition): Variants {
  const newVariants: Variants = {};

  Object.keys(variants).forEach((key) => {
    newVariants[key] = {
      ...variants[key],
      transition,
    };
  });

  return newVariants;
}

/**
 * Create variants with delay
 */
export function withDelay(variants: Variants, delay: number): Variants {
  const newVariants: Variants = {};

  Object.keys(variants).forEach((key) => {
    const existing = variants[key];
    if (typeof existing === 'object' && existing !== null) {
      newVariants[key] = {
        ...existing,
        transition: {
          ...(existing.transition as Transition),
          delay,
        },
      };
    }
  });

  return newVariants;
}

/**
 * Create variants with custom duration
 */
export function withDuration(variants: Variants, duration: number): Variants {
  const newVariants: Variants = {};

  Object.keys(variants).forEach((key) => {
    const existing = variants[key];
    if (typeof existing === 'object' && existing !== null) {
      newVariants[key] = {
        ...existing,
        transition: {
          ...(existing.transition as Transition),
          duration,
        },
      };
    }
  });

  return newVariants;
}

/**
 * Generate random animation delay for organic feel
 */
export function randomDelay(min = 0, max = 0.5): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generate stagger delays for array of items
 */
export function staggerDelays(count: number, baseDelay = 0.1): number[] {
  return Array.from({ length: count }, (_, i) => i * baseDelay);
}
