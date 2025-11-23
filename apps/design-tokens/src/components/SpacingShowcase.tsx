import { spacing } from '@design-system/tokens/spacing'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'

export function SpacingShowcase() {
  const spacingEntries = Object.entries(spacing)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Spacing Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Based on a 4px base unit scale for consistent spacing
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spacingEntries.map(([key, value]) => (
              <div
                key={key}
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div
                  className="bg-primary shrink-0"
                  style={{
                    width: value,
                    height: value === '0' ? '2px' : value,
                    minWidth: '2px',
                    minHeight: '2px',
                  }}
                />
                <div className="flex-1 min-w-0">
                  <div className="font-mono text-sm font-medium">{key}</div>
                  <div className="font-mono text-xs text-muted-foreground truncate">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
