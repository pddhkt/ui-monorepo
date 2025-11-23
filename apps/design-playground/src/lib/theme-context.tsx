import { createContext, useContext, useState, type ReactNode } from 'react'
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
