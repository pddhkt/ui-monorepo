import { radius } from '@design-system/tokens/radius'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'

export function RadiusShowcase() {
  const radiusEntries = Object.entries(radius)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Border Radius Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            From sharp corners to fully rounded elements
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {radiusEntries.map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div
                  className="w-full h-20 bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium"
                  style={{ borderRadius: value }}
                >
                  {key}
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
