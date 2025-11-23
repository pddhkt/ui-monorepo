import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { ColorPalette } from '@design-system/palettes/types'
import type { FontDefinition } from '@design-system/fonts/types'
import { palettes } from '@design-system/palettes/palettes'
import { fontCatalog } from '@design-system/fonts/catalog'

export type SpacingScale = 'compact' | 'comfortable' | 'spacious'

export interface ThemeState {
  // Font selections
  headingFont: FontDefinition
  bodyFont: FontDefinition
  monoFont: FontDefinition

  // Color palette
  palette: ColorPalette

  // Spacing
  spacingScale: SpacingScale

  // Preview settings
  previewText: string
  previewMode: 'typography' | 'components' | 'colors'
}

export interface ThemeActions {
  setHeadingFont: (font: FontDefinition) => void
  setBodyFont: (font: FontDefinition) => void
  setMonoFont: (font: FontDefinition) => void
  setPalette: (palette: ColorPalette) => void
  setSpacingScale: (scale: SpacingScale) => void
  setPreviewText: (text: string) => void
  setPreviewMode: (mode: ThemeState['previewMode']) => void
  resetTheme: () => void
}

export type ThemeContextType = ThemeState & ThemeActions

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

// Default theme configuration
const getDefaultTheme = (): ThemeState => {
  const defaultHeadingFont = fontCatalog.find((f) => f.id === 'inter') ?? fontCatalog[0]
  const defaultBodyFont = fontCatalog.find((f) => f.id === 'inter') ?? fontCatalog[0]
  const defaultMonoFont = fontCatalog.find((f) => f.id === 'fira-code') ?? fontCatalog[3]
  const defaultPalette = palettes[0]

  if (!defaultHeadingFont || !defaultBodyFont || !defaultMonoFont || !defaultPalette) {
    throw new Error('Failed to load default theme - missing fonts or palettes')
  }

  return {
    headingFont: defaultHeadingFont,
    bodyFont: defaultBodyFont,
    monoFont: defaultMonoFont,
    palette: defaultPalette,
    spacingScale: 'comfortable',
    previewText: 'The quick brown fox jumps over the lazy dog',
    previewMode: 'typography',
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeState>(getDefaultTheme())

  const actions: ThemeActions = {
    setHeadingFont: (font) => setTheme((prev) => ({ ...prev, headingFont: font })),
    setBodyFont: (font) => setTheme((prev) => ({ ...prev, bodyFont: font })),
    setMonoFont: (font) => setTheme((prev) => ({ ...prev, monoFont: font })),
    setPalette: (palette) => setTheme((prev) => ({ ...prev, palette })),
    setSpacingScale: (scale) => setTheme((prev) => ({ ...prev, spacingScale: scale })),
    setPreviewText: (text) => setTheme((prev) => ({ ...prev, previewText: text })),
    setPreviewMode: (mode) => setTheme((prev) => ({ ...prev, previewMode: mode })),
    resetTheme: () => setTheme(getDefaultTheme()),
  }

  // Effect to load and apply fonts dynamically
  useEffect(() => {
    const fonts = [theme.headingFont, theme.bodyFont, theme.monoFont]
    const uniqueFonts = Array.from(new Set(fonts.map(f => f.name)))

    // Load fonts from Google Fonts
    const fontFamilies = uniqueFonts.map(name => name.replace(/ /g, '+')).join('&family=')
    const linkId = 'dynamic-google-fonts'

    // Remove existing font link if present
    const existingLink = document.getElementById(linkId)
    if (existingLink) {
      existingLink.remove()
    }

    // Add new font link
    const link = document.createElement('link')
    link.id = linkId
    link.rel = 'stylesheet'
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamilies}&display=swap`
    document.head.appendChild(link)

    // Apply fonts to CSS variables
    document.documentElement.style.setProperty('--font-heading', `"${theme.headingFont.name}", sans-serif`)
    document.documentElement.style.setProperty('--font-body', `"${theme.bodyFont.name}", sans-serif`)
    document.documentElement.style.setProperty('--font-mono', `"${theme.monoFont.name}", monospace`)
  }, [theme.headingFont, theme.bodyFont, theme.monoFont])

  // Effect to apply color palette dynamically
  useEffect(() => {
    const palette = theme.palette

    // Helper function to convert hex to oklch (simplified - using hex directly for now)
    const hexToOklch = (hex: string): string => {
      // For simplicity, we'll use the hex color directly in oklch format
      // In a production app, you'd want proper color space conversion
      const r = parseInt(hex.slice(1, 3), 16) / 255
      const g = parseInt(hex.slice(3, 5), 16) / 255
      const b = parseInt(hex.slice(5, 7), 16) / 255

      // Simple lightness calculation (proper oklch conversion would be more complex)
      const lightness = 0.2126 * r + 0.7152 * g + 0.0722 * b

      return `oklch(${lightness.toFixed(3)} 0 0)`
    }

    // Map palette colors to theme colors based on position
    if (palette.colors.length >= 1) {
      const color1 = palette.colors[0]?.hex || '#FFFFFF'
      const color2 = palette.colors[1]?.hex || '#9CA3AF'
      const color3 = palette.colors[2]?.hex || '#374151'

      // Update primary and accent colors based on the palette
      // Using the middle color as primary
      document.documentElement.style.setProperty('--color-accent', hexToOklch(color2))

      // Set custom properties that we can use in our components
      document.documentElement.style.setProperty('--palette-color-1', color1)
      document.documentElement.style.setProperty('--palette-color-2', color2)
      document.documentElement.style.setProperty('--palette-color-3', color3)
    }
  }, [theme.palette])

  const value: ThemeContextType = {
    ...theme,
    ...actions,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
