import { colors, semanticColors } from '@design-system/tokens/colors'
import { Card, CardHeader, CardTitle, CardContent } from '@design-system/ui/components/ui/card'
import { Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

export function ColorsShowcase() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (color: string, name: string) => {
    navigator.clipboard.writeText(color)
    setCopiedColor(name)
    toast.success(`Copied ${name}`)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const renderColorScale = (name: string, scale: Record<string, string>) => {
    return (
      <div key={name} className="space-y-2">
        <h4 className="text-sm font-semibold capitalize">{name}</h4>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(scale).map(([shade, color]) => (
            <button
              key={shade}
              onClick={() => copyToClipboard(color, `${name}-${shade}`)}
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors group"
            >
              <div
                className="w-12 h-12 rounded-md border shrink-0"
                style={{ backgroundColor: color }}
              />
              <div className="flex-1 text-left min-w-0">
                <div className="font-mono text-sm font-medium">
                  {name}-{shade}
                </div>
                <div className="font-mono text-xs text-muted-foreground truncate">
                  {color}
                </div>
              </div>
              {copiedColor === `${name}-${shade}` ? (
                <Check className="w-4 h-4 text-green-600 shrink-0" />
              ) : (
                <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    )
  }

  const renderSemanticColors = () => {
    return Object.entries(semanticColors).map(([category, colorSet]) => (
      <div key={category} className="space-y-2">
        <h4 className="text-sm font-semibold capitalize">{category}</h4>
        <div className="grid grid-cols-1 gap-2">
          {Object.entries(colorSet).map(([name, color]) => (
            <button
              key={name}
              onClick={() => copyToClipboard(color, `${category}-${name}`)}
              className="flex items-center gap-3 p-3 border rounded-lg hover:bg-accent/50 transition-colors group"
            >
              <div
                className="w-12 h-12 rounded-md border shrink-0"
                style={{ backgroundColor: color }}
              />
              <div className="flex-1 text-left min-w-0">
                <div className="font-mono text-sm font-medium">{name}</div>
                <div className="font-mono text-xs text-muted-foreground truncate">
                  {color}
                </div>
              </div>
              {copiedColor === `${category}-${name}` ? (
                <Check className="w-4 h-4 text-green-600 shrink-0" />
              ) : (
                <Copy className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              )}
            </button>
          ))}
        </div>
      </div>
    ))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Tokens</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground">
            OKLCH color space for better perceptual uniformity and dark mode support. Click any
            color to copy.
          </p>

          {/* Neutral Colors */}
          <div>
            <h3 className="text-base font-semibold mb-4">Neutral Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderColorScale('gray', colors.gray)}
            </div>
          </div>

          {/* Brand Colors */}
          <div className="pt-6 border-t">
            <h3 className="text-base font-semibold mb-4">Brand Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderColorScale('primary', colors.primary)}
              {renderColorScale('accent', colors.accent)}
            </div>
          </div>

          {/* Semantic Colors */}
          <div className="pt-6 border-t">
            <h3 className="text-base font-semibold mb-4">Semantic Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderColorScale('success', colors.success)}
              {renderColorScale('warning', colors.warning)}
              {renderColorScale('error', colors.error)}
              {renderColorScale('info', colors.info)}
            </div>
          </div>

          {/* Semantic Tokens */}
          <div className="pt-6 border-t">
            <h3 className="text-base font-semibold mb-4">Semantic Tokens</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Contextual color tokens that adapt to light/dark themes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderSemanticColors()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
