import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item'
import { Button } from '@design-system/ui/components/ui/button'
import type { ColorPalette } from '@/data/palettes'
import { Copy, CopyCheck } from 'lucide-react'
import { toast } from 'sonner'
import { useState } from 'react'

interface ColorPaletteRowProps {
  palette: ColorPalette
}

export function ColorPaletteRow({ palette }: ColorPaletteRowProps) {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = async (text: string, colorName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedColor(text)
      toast.success(`Copied ${colorName}`, {
        description: text,
      })
      setTimeout(() => setCopiedColor(null), 2000)
    } catch (err) {
      toast.error('Failed to copy', {
        description: 'Please try again',
      })
    }
  }

  const copyAllColors = async () => {
    const allColors = palette.colors.map(c => c.hex).join(', ')
    try {
      await navigator.clipboard.writeText(allColors)
      toast.success(`Copied all ${palette.name} colors`, {
        description: allColors,
      })
    } catch (err) {
      toast.error('Failed to copy', {
        description: 'Please try again',
      })
    }
  }

  return (
    <Item variant="outline" className="w-full flex-col gap-6 p-6">
      <div className="flex items-center justify-between gap-4">
        <ItemContent className="gap-1">
          <ItemTitle>{palette.name}</ItemTitle>
          <ItemDescription>{palette.description}</ItemDescription>
        </ItemContent>
        <div className="flex-none rounded-md bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
          {palette.category}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {palette.colors.map((color) => (
          <div key={color.hex} className="flex flex-col items-center gap-3">
            <button
              onClick={() => copyToClipboard(color.hex, color.name)}
              className="relative w-full group cursor-pointer"
              title={`Click to copy ${color.name}`}
            >
              <div
                className="h-32 w-full rounded-lg border-2 border-border shadow-sm transition-transform group-hover:scale-105"
                style={{ backgroundColor: color.hex }}
              />
              {copiedColor === color.hex && (
                <div className="absolute top-2 right-2 rounded-md bg-background/80 p-2 backdrop-blur-sm pointer-events-none">
                  <CopyCheck className="h-4 w-4 text-green-600" />
                </div>
              )}
            </button>
            <div className="text-center">
              <div className="font-medium text-sm">{color.name}</div>
              <button
                onClick={() => copyToClipboard(color.hex, color.name)}
                className="font-mono text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {color.hex}
              </button>
            </div>
          </div>
        ))}
      </div>

      <ItemActions className="justify-center">
        <Button onClick={copyAllColors} variant="outline" size="sm">
          <Copy className="mr-2 h-4 w-4" />
          Copy All Colors
        </Button>
      </ItemActions>
    </Item>
  )
}
