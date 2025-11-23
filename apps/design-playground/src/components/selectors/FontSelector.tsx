import { useState } from 'react'
import { fontCatalog, getCategories } from '@design-system/fonts/catalog'
import type { FontDefinition } from '@design-system/fonts/types'
import { Button } from '@design-system/ui/components/ui/button'
import { Check } from 'lucide-react'

interface FontSelectorProps {
  selectedFont: FontDefinition
  onSelect: (font: FontDefinition) => void
  label: string
}

export function FontSelector({ selectedFont, onSelect, label }: FontSelectorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const categories = getCategories()

  const filteredFonts =
    selectedCategory === 'all'
      ? fontCatalog
      : fontCatalog.filter((font) => font.category === selectedCategory)

  return (
    <div className="space-y-3">
      <div>
        <label className="text-sm font-medium">{label}</label>
        <p className="text-xs text-muted-foreground">Currently: {selectedFont.name}</p>
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
            {category.replace('_', ' ')}
          </Button>
        ))}
      </div>

      {/* Font List */}
      <div className="max-h-64 overflow-y-auto space-y-2 border rounded-md p-2">
        {filteredFonts.map((font) => (
          <button
            key={font.id}
            onClick={() => onSelect(font)}
            className={`w-full text-left p-3 rounded-md border transition-colors ${
              selectedFont.id === font.id
                ? 'bg-primary/10 border-primary'
                : 'bg-card hover:bg-muted/50 border-border'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-semibold text-sm truncate">{font.name}</p>
                  {font.featured && (
                    <span className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-md">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                  {font.description}
                </p>
              </div>
              {selectedFont.id === font.id && (
                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
