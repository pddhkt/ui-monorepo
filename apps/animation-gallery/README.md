# Animation Gallery

Interactive showcase for the `@design-system/animations` library. View all available animation presets, transitions, and hooks with live examples and copy-paste ready code.

## Features

- Live preview of all animation presets
- Interactive controls to replay animations
- Copy-paste ready code examples
- Dark mode support
- Responsive design

## Development

```bash
# Install dependencies (from root)
pnpm install

# Start dev server
pnpm --filter animation-gallery dev

# Build for production
pnpm --filter animation-gallery build

# Deploy to Cloudflare Pages
pnpm --filter animation-gallery deploy
```

## Tech Stack

- **React 19** - Latest React features
- **Vite** - Fast build tooling
- **Framer Motion** - Animation library
- **Tailwind CSS v4** - Styling
- **TypeScript** - Type safety
- **shadcn/ui** - UI components from `@design-system/ui`

## Structure

```
src/
├── App.tsx              # Main application
├── main.tsx            # Entry point
├── index.css           # Global styles
└── components/
    ├── Header.tsx      # Hero header
    ├── AnimationCard.tsx  # Interactive animation cards
    └── CodeBlock.tsx   # Code display with copy button
```

## Deployment

This app is ready to deploy to Cloudflare Pages:

```bash
pnpm --filter animation-gallery deploy
```

## Using the Animation Library

All animations shown in this gallery are importable from `@design-system/animations`:

```tsx
import { fadeInUp, springBouncy } from '@design-system/animations/presets';
import { useAnimateOnScroll } from '@design-system/animations/hooks';
```

See the [animations package README](../../packages/animations/README.md) for detailed documentation.
