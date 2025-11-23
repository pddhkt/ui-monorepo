import { ThemeProvider } from 'next-themes'
import { Toaster } from '@design-system/ui/components/ui/sonner'
import { Button } from '@design-system/ui/components/ui/button'
import { Moon, Sun, Palette } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useState } from 'react'
import { SpacingShowcase } from './components/SpacingShowcase'
import { BreakpointsShowcase } from './components/BreakpointsShowcase'
import { ShadowsShowcase } from './components/ShadowsShowcase'
import { RadiusShowcase } from './components/RadiusShowcase'
import { OpacityShowcase } from './components/OpacityShowcase'
import { TypographyShowcase } from './components/TypographyShowcase'
import { ColorsShowcase } from './components/ColorsShowcase'

type TokenCategory =
  | 'all'
  | 'colors'
  | 'typography'
  | 'spacing'
  | 'breakpoints'
  | 'shadows'
  | 'radius'
  | 'opacity'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

function AppContent() {
  const [activeCategory, setActiveCategory] = useState<TokenCategory>('all')

  const categories: { id: TokenCategory; label: string }[] = [
    { id: 'all', label: 'All Tokens' },
    { id: 'colors', label: 'Colors' },
    { id: 'typography', label: 'Typography' },
    { id: 'spacing', label: 'Spacing' },
    { id: 'breakpoints', label: 'Breakpoints' },
    { id: 'shadows', label: 'Shadows' },
    { id: 'radius', label: 'Radius' },
    { id: 'opacity', label: 'Opacity' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Palette className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold">Design Tokens</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b bg-muted/50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Introduction */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Design Token System</h2>
            <p className="text-muted-foreground">
              A comprehensive set of design tokens for building consistent, scalable user
              interfaces. Tokens include colors, typography, spacing, breakpoints, shadows,
              border radius, and opacity values.
            </p>
          </div>

          {/* Showcases */}
          <div className="space-y-8">
            {(activeCategory === 'all' || activeCategory === 'colors') && <ColorsShowcase />}
            {(activeCategory === 'all' || activeCategory === 'typography') && (
              <TypographyShowcase />
            )}
            {(activeCategory === 'all' || activeCategory === 'spacing') && <SpacingShowcase />}
            {(activeCategory === 'all' || activeCategory === 'breakpoints') && (
              <BreakpointsShowcase />
            )}
            {(activeCategory === 'all' || activeCategory === 'shadows') && <ShadowsShowcase />}
            {(activeCategory === 'all' || activeCategory === 'radius') && <RadiusShowcase />}
            {(activeCategory === 'all' || activeCategory === 'opacity') && <OpacityShowcase />}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Design Tokens • Built with{' '}
            <a
              href="https://github.com/anthropics/anthropic-sdk-typescript"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              TypeScript
            </a>{' '}
            •{' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </footer>

      <Toaster />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <AppContent />
    </ThemeProvider>
  )
}
