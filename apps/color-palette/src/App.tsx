import { ColorPaletteRow } from '@/components/ColorPaletteRow'
import { palettes } from '@/data/palettes'
import { Toaster } from '@design-system/ui/components/ui/sonner'

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-8 bg-background p-8">
        <div className="w-full max-w-6xl">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-5xl font-bold tracking-tight">
              Color Palette Showcase
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore carefully curated color palettes for modern design systems
            </p>
          </div>

          <div className="space-y-6">
            {palettes.map((palette) => (
              <ColorPaletteRow key={palette.id} palette={palette} />
            ))}
          </div>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Color palettes powered by OKLCH color space</p>
            <p className="mt-1">
              From{' '}
              <code className="rounded bg-muted px-1.5 py-0.5">
                tanstack-cloudflare-template
              </code>
            </p>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  )
}

export default App
