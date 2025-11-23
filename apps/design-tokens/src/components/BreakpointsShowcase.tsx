import { breakpoints, containerMaxWidths } from '@design-system/tokens/breakpoints'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'
import { Monitor, Tablet, Smartphone } from 'lucide-react'

export function BreakpointsShowcase() {
  const breakpointEntries = Object.entries(breakpoints)
  const containerEntries = Object.entries(containerMaxWidths)

  const getIcon = (key: string) => {
    if (key === 'xs' || key === 'sm') return <Smartphone className="w-4 h-4" />
    if (key === 'md' || key === 'lg') return <Tablet className="w-4 h-4" />
    return <Monitor className="w-4 h-4" />
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Breakpoint Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold mb-3">Breakpoints</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Mobile-first responsive breakpoints for different device sizes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {breakpointEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="text-primary">{getIcon(key)}</div>
                  <div className="flex-1">
                    <div className="font-mono text-sm font-medium">{key}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      min-width: {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t">
            <h3 className="text-sm font-semibold mb-3">Container Max Widths</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Maximum container widths for each breakpoint
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {containerEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center gap-3 p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-mono text-sm font-medium">{key}</div>
                    <div className="font-mono text-xs text-muted-foreground">
                      max-width: {value}
                    </div>
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
