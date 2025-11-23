import { useState } from 'react'
import { ThemeProvider, useTheme } from './lib/theme-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@design-system/ui/components/ui/card'
import { Button } from '@design-system/ui/components/ui/button'
import { Separator } from '@design-system/ui/components/ui/separator'
import { Palette, Type, Ruler } from 'lucide-react'
import { FontSelector } from './components/selectors/FontSelector'
import { PaletteSelector } from './components/selectors/PaletteSelector'
import { SpacingSelector } from './components/selectors/SpacingSelector'

type Tab = 'fonts' | 'colors' | 'spacing'

function ThemeCompositor() {
  const theme = useTheme()
  const [activeTab, setActiveTab] = useState<Tab>('fonts')

  return (
    <div className="flex min-h-screen bg-background">
      {/* Left Sidebar - Controls */}
      <aside className="w-96 border-r bg-card p-6 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Design Playground</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Compose your design system theme
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="grid grid-cols-3 gap-2">
            <Button
              variant={activeTab === 'fonts' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('fonts')}
              className="flex items-center gap-2"
            >
              <Type className="h-4 w-4" />
              Fonts
            </Button>
            <Button
              variant={activeTab === 'colors' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('colors')}
              className="flex items-center gap-2"
            >
              <Palette className="h-4 w-4" />
              Colors
            </Button>
            <Button
              variant={activeTab === 'spacing' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTab('spacing')}
              className="flex items-center gap-2"
            >
              <Ruler className="h-4 w-4" />
              Spacing
            </Button>
          </div>

          {/* Tab Content */}
          <div className="space-y-4">
            {activeTab === 'fonts' && (
              <>
                <FontSelector
                  label="Heading Font"
                  selectedFont={theme.headingFont}
                  onSelect={theme.setHeadingFont}
                />
                <Separator className="my-4" />
                <FontSelector
                  label="Body Font"
                  selectedFont={theme.bodyFont}
                  onSelect={theme.setBodyFont}
                />
                <Separator className="my-4" />
                <FontSelector
                  label="Monospace Font"
                  selectedFont={theme.monoFont}
                  onSelect={theme.setMonoFont}
                />
              </>
            )}

            {activeTab === 'colors' && (
              <PaletteSelector selectedPalette={theme.palette} onSelect={theme.setPalette} />
            )}

            {activeTab === 'spacing' && (
              <SpacingSelector
                selectedScale={theme.spacingScale}
                onSelect={theme.setSpacingScale}
              />
            )}
          </div>
        </div>
      </aside>

      {/* Main Content - Preview */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold">Live Preview</h2>
            <p className="text-muted-foreground">
              See how your design system choices come together
            </p>
            {/* Visual indicator showing palette colors */}
            <div className="flex justify-center gap-2 pt-2">
              {theme.palette.colors.map((color) => (
                <div
                  key={color.hex}
                  className="w-12 h-2 rounded-full transition-all duration-300"
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Typography Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Typography Preview</CardTitle>
              <CardDescription>
                Heading: {theme.headingFont.name} · Body: {theme.bodyFont.name} · Mono:{' '}
                {theme.monoFont.name}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold">Heading 1 - {theme.headingFont.name}</h1>
                <h2 className="text-3xl font-bold">Heading 2 - Design Systems</h2>
                <h3 className="text-2xl font-semibold">Heading 3 - Typography Matters</h3>
                <h4 className="text-xl font-semibold">Heading 4 - Consistent Design</h4>
                <p className="text-base leading-relaxed">
                  This is body text using {theme.bodyFont.name}. {theme.previewText} The
                  typography scale creates visual hierarchy and improves readability across your
                  design system.
                </p>
                <code className="block p-6 bg-muted rounded-lg font-mono text-sm leading-relaxed">
                  {`// ${theme.monoFont.name}`}
                  <br />
                  const greeting = "Hello, World!"
                  <br />
                  console.log(greeting)
                </code>
              </div>
            </CardContent>
          </Card>

          {/* Color Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                {theme.palette.name} - {theme.palette.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-6">
                {theme.palette.colors.map((color) => (
                  <div key={color.hex} className="space-y-3">
                    <div
                      className="h-32 rounded-lg border-2 border-border shadow-sm transition-all duration-300"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div className="text-center">
                      <p className="font-medium text-sm">{color.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Spacing Preview */}
          <Card>
            <CardHeader>
              <CardTitle>Spacing Scale</CardTitle>
              <CardDescription>
                Current scale: {theme.spacingScale.charAt(0).toUpperCase() + theme.spacingScale.slice(1)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">xs (2px)</div>
                  <div className="h-2 w-2 bg-primary rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">sm (8px)</div>
                  <div className="h-2 w-8 bg-primary rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">md (16px)</div>
                  <div className="h-2 w-16 bg-primary rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">lg (32px)</div>
                  <div className="h-2 w-32 bg-primary rounded" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-24 text-sm text-muted-foreground">xl (64px)</div>
                  <div className="h-2 w-64 bg-primary rounded" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <ThemeCompositor />
    </ThemeProvider>
  )
}

export default App
