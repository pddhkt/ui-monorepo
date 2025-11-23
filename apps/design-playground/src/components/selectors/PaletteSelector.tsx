import { useState } from 'react'
import { palettes, getCategories } from '@design-system/palettes/palettes'
import type { ColorPalette } from '@design-system/palettes/types'
import { Button } from '@design-system/ui/components/ui/button'
import { Check } from 'lucide-react'

interface PaletteSelectorProps {
  selectedPalette: ColorPalette
  onSelect: (palette: ColorPalette) => void
}

export function PaletteSelector({ selectedPalette, onSelect }: PaletteSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const categories = getCategories()

  const filteredPalettes =
    selectedCategory === 'all'
      ? palettes
      : palettes.filter((palette) => palette.category === selectedCategory)

  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">Select Color Palette</label>
        <p className="text-xs text-muted-foreground">Currently: {selectedPalette.name}</p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-1">
        <Button
          variant={selectedCategory === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
          className="h-7 text-xs"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedCategory(category)}
            className="h-7 text-xs"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Palette Grid */}
      <div className="space-y-3">
        {filteredPalettes.map((palette) => (
          <button
            key={palette.id}
            onClick={() => onSelect(palette)}
            className={`w-full text-left p-4 rounded-md border transition-colors ${
              selectedPalette.id === palette.id
                ? 'bg-primary/10 border-primary ring-2 ring-primary/20'
                : 'bg-card hover:bg-muted/50 border-border'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{palette.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                    {palette.description}
                  </p>
                </div>
                {selectedPalette.id === palette.id && (
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                )}
              </div>

              {/* Color Swatches */}
              <div className="flex gap-2">
                {palette.colors.map((color) => (
                  <div
                    key={color.hex}
                    className="h-10 flex-1 rounded border border-border"
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
