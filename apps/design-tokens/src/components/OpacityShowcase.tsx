import { opacity } from '@design-system/tokens/opacity'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'

export function OpacityShowcase() {
  const opacityEntries = Object.entries(opacity)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Opacity Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Transparency levels for layering and visual hierarchy
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {opacityEntries.map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div className="relative h-16 bg-muted rounded-lg overflow-hidden">
                  <div
                    className="absolute inset-0 bg-primary"
                    style={{ opacity: value }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-sm font-medium mix-blend-difference text-white">
                      {key}
                    </span>
                  </div>
                </div>
                <div className="font-mono text-xs text-muted-foreground text-center">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
