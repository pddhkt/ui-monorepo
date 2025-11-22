# @design-system/animations

Reusable animation presets, transitions, and motion utilities built with Framer Motion for the Design System monorepo.

## Installation

This package is automatically available to all apps in the monorepo via workspace dependencies:

```json
{
  "dependencies": {
    "@design-system/animations": "workspace:*"
  }
}
```

## Features

- **Presets**: Ready-to-use animation variants (fade, scale, slide, rotate)
- **Transitions**: Configurable spring and ease transitions
- **Hooks**: React hooks for scroll-based animations and more
- **Utils**: Helper functions for combining and customizing animations

## Usage

### Basic Animation

```tsx
import { motion } from 'framer-motion';
import { fadeInUp } from '@design-system/animations/presets';

function MyComponent() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
      Hello World
    </motion.div>
  );
}
```

### With Custom Transitions

```tsx
import { motion } from 'framer-motion';
import { scaleIn } from '@design-system/animations/presets';
import { springBouncy } from '@design-system/animations/transitions';

function MyComponent() {
  return (
    <motion.div initial="hidden" animate="visible" variants={scaleIn} transition={springBouncy}>
      Bouncy Animation
    </motion.div>
  );
}
```

### Scroll-Based Animations

```tsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@design-system/animations/hooks';
import { fadeInUp } from '@design-system/animations/presets';

function MyComponent() {
  const ref = useRef(null);
  const isInView = useAnimateOnScroll(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
    >
      Animates when scrolled into view
    </motion.div>
  );
}
```

## Available Presets

### Fade
- `fadeIn`, `fadeOut`
- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`

### Scale
- `scaleIn`, `scaleOut`
- `popIn`, `grow`, `shrink`

### Slide
- `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight`
- `slideOutUp`, `slideOutDown`, `slideOutLeft`, `slideOutRight`

### Rotate
- `rotateIn`, `rotateOut`
- `flipInX`, `flipInY`
- `spin`

## Available Transitions

- `springQuick`, `springSmooth`, `springBouncy`, `springSlow`
- `easeFast`, `easeNormal`, `easeSlow`
- `bounce`
- `staggerChildren(delay)`, `withDelay(delay, transition)`

## Available Hooks

- `useAnimateOnScroll(ref, options)` - Trigger animations on scroll
- `useParallax(distance)` - Parallax scroll effect
- `useSmoothSpring(value, options)` - Smooth spring animation value
- `useStagger(count, delay)` - Staggered children animation
- `useSequentialReveal(itemCount, options)` - Sequential reveal animation
- `useScrollOpacity(scrollRange)` - Scroll-based opacity
- `useScrollScale(scrollRange, scaleRange)` - Scroll-based scale

## View Live Examples

Check out the [Animation Gallery](/apps/animation-gallery) app to see all animations in action with interactive examples and code snippets.
