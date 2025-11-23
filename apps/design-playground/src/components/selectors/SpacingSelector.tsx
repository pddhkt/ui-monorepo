import type { SpacingScale } from '../../lib/theme-context'
import { Button } from '@design-system/ui/components/ui/button'
import { Check } from 'lucide-react'

interface SpacingSelectorProps {
  selectedScale: SpacingScale
  onSelect: (scale: SpacingScale) => void
}

const spacingOptions: Array<{
  value: SpacingScale
  label: string
  description: string
}> = [
  {
    value: 'compact',
    label: 'Compact',
    description: 'Tighter spacing for dense layouts',
  },
  {
    value: 'comfortable',
    label: 'Comfortable',
    description: 'Balanced spacing for most use cases',
  },
  {
    value: 'spacious',
    label: 'Spacious',
    description: 'Generous spacing for breathing room',
  },
]

export function SpacingSelector({ selectedScale, onSelect }: SpacingSelectorProps) {
  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">Spacing Scale</label>
        <p className="text-xs text-muted-foreground">Choose your preferred spacing density</p>
      </div>

      <div className="space-y-2">
        {spacingOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => onSelect(option.value)}
            className={`w-full text-left p-4 rounded-md border transition-colors ${
              selectedScale === option.value
                ? 'bg-primary/10 border-primary ring-2 ring-primary/20'
                : 'bg-card hover:bg-muted/50 border-border'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm">{option.label}</p>
                  {selectedScale === option.value && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1">{option.description}</p>

                {/* Visual spacing indicator */}
                <div className="mt-3 flex items-center gap-1">
                  {option.value === 'compact' && (
                    <>
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                    </>
                  )}
                  {option.value === 'comfortable' && (
                    <>
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                      <div className="w-2" />
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                      <div className="w-2" />
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                    </>
                  )}
                  {option.value === 'spacious' && (
                    <>
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                      <div className="w-4" />
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                      <div className="w-4" />
                      <div className="h-6 w-6 bg-primary/20 rounded" />
                    </>
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
