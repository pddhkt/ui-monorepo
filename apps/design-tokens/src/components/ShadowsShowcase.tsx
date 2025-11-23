import { shadows } from '@design-system/tokens/shadows'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'

export function ShadowsShowcase() {
  const shadowEntries = Object.entries(shadows)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Shadow Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Elevation and depth using carefully crafted shadow systems
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shadowEntries.map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div
                  className="w-full h-24 bg-card rounded-lg flex items-center justify-center"
                  style={{ boxShadow: value }}
                >
                  <span className="font-mono text-sm font-medium">{key}</span>
                </div>
                <div className="font-mono text-xs text-muted-foreground break-all">
                  {value === 'none' ? 'none' : value.substring(0, 40) + '...'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
