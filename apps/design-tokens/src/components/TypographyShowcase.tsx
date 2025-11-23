import {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
  headingStyles,
} from '@design-system/tokens/typography'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'

export function TypographyShowcase() {
  const fontFamilyEntries = Object.entries(fontFamily)
  const fontSizeEntries = Object.entries(fontSize).slice(0, 10) // Show first 10
  const fontWeightEntries = Object.entries(fontWeight)
  const lineHeightEntries = Object.entries(lineHeight)
  const letterSpacingEntries = Object.entries(letterSpacing)
  const headingEntries = Object.entries(headingStyles)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Typography Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Font Families */}
          <div>
            <h3 className="text-sm font-semibold mb-3">Font Families</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Curated font stacks from the font gallery
            </p>
            <div className="space-y-3">
              {fontFamilyEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="font-mono text-xs text-muted-foreground mb-2">
                    {key}
                  </div>
                  <div
                    className="text-2xl"
                    style={{ fontFamily: value }}
                  >
                    The quick brown fox jumps over the lazy dog
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Heading Styles */}
          <div className="pt-6 border-t">
            <h3 className="text-sm font-semibold mb-3">Heading Styles</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Pre-configured heading styles for consistency
            </p>
            <div className="space-y-3">
              {headingEntries.map(([key]) => (
                <div
                  key={key}
                  className="p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="font-mono text-xs text-muted-foreground mb-2">
                    {key}
                  </div>
                  <div
                    className={`font-bold ${
                      key === 'h1' ? 'text-4xl' :
                      key === 'h2' ? 'text-3xl' :
                      key === 'h3' ? 'text-2xl' :
                      key === 'h4' ? 'text-xl' :
                      key === 'h5' ? 'text-lg' :
                      'text-base'
                    }`}
                  >
                    Heading {key.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Font Sizes */}
          <div className="pt-6 border-t">
            <h3 className="text-sm font-semibold mb-3">Font Sizes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {fontSizeEntries.map(([key, [size]]) => (
                <div
                  key={key}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="font-mono text-xs text-muted-foreground">
                    {key} - {size}
                  </div>
                  <div style={{ fontSize: size }}>Sample Text</div>
                </div>
              ))}
            </div>
          </div>

          {/* Font Weights */}
          <div className="pt-6 border-t">
            <h3 className="text-sm font-semibold mb-3">Font Weights</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {fontWeightEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="font-mono text-xs text-muted-foreground mb-1">
                    {key} - {value}
                  </div>
                  <div style={{ fontWeight: value }} className="text-lg">
                    Sample Text
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Line Heights */}
          <div className="pt-6 border-t">
            <h3 className="text-sm font-semibold mb-3">Line Heights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lineHeightEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="font-mono text-xs text-muted-foreground mb-2">
                    {key} - {value}
                  </div>
                  <div style={{ lineHeight: value }} className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore.
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Letter Spacing */}
          <div className="pt-6 border-t">
            <h3 className="text-sm font-semibold mb-3">Letter Spacing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {letterSpacingEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="p-3 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="font-mono text-xs text-muted-foreground mb-1">
                    {key} - {value}
                  </div>
                  <div style={{ letterSpacing: value }} className="text-base">
                    SAMPLE TEXT
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
