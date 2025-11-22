import { useEffect, useState } from 'react';
import { useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import type { SpringOptions } from 'framer-motion';

/**
 * Hook to detect if element is in viewport with animation trigger
 */
export function useAnimateOnScroll(ref: React.RefObject<Element>, options?: { once?: boolean; margin?: string }) {
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? '0px 0px -100px 0px',
  });

  return isInView;
}

/**
 * Hook for parallax scroll effect
 */
export function useParallax(distance = 100) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, distance]);
  return y;
}

/**
 * Hook for smooth spring animation value
 */
export function useSmoothSpring(value: number, options?: SpringOptions) {
  const defaultOptions: SpringOptions = {
    stiffness: 300,
    damping: 30,
    ...options,
  };

  return useSpring(value, defaultOptions);
}

/**
 * Hook for staggered children animation
 */
export function useStagger(count: number, delay = 0.1) {
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    const arr = Array.from({ length: count }, (_, i) => i);
    setItems(arr);
  }, [count]);

  const getDelay = (index: number) => index * delay;

  return { items, getDelay };
}

/**
 * Hook for sequential reveal animation
 */
export function useSequentialReveal(itemCount: number, options?: { delay?: number; once?: boolean }) {
  const [revealedCount, setRevealedCount] = useState(0);
  const delay = options?.delay ?? 100;
  const once = options?.once ?? true;

  useEffect(() => {
    if (once && revealedCount === itemCount) return;

    const timer = setInterval(() => {
      setRevealedCount((prev) => {
        if (prev >= itemCount) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(timer);
  }, [itemCount, delay, once, revealedCount]);

  const isRevealed = (index: number) => index < revealedCount;

  return { revealedCount, isRevealed };
}

/**
 * Hook for scroll-based opacity
 */
export function useScrollOpacity(scrollRange = 400) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, scrollRange], [1, 0]);
  return opacity;
}

/**
 * Hook for scroll-based scale
 */
export function useScrollScale(scrollRange = 400, scaleRange: [number, number] = [1, 0.8]) {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, scrollRange], scaleRange);
  return scale;
}
