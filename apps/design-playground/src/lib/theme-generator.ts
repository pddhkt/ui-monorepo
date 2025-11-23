import type { ThemeState } from './theme-context'

export interface ThemeConfig {
  fonts: {
    heading: string
    body: string
    mono: string
  }
  palette: {
    id: string
    name: string
    colors: Array<{
      name: string
      hex: string
    }>
  }
  spacing: string
}

/**
 * Generate theme configuration object from theme state
 */
export function generateThemeConfig(theme: ThemeState): ThemeConfig {
  return {
    fonts: {
      heading: theme.headingFont.name,
      body: theme.bodyFont.name,
      mono: theme.monoFont.name,
    },
    palette: {
      id: theme.palette.id,
      name: theme.palette.name,
      colors: theme.palette.colors.map((c) => ({
        name: c.name,
        hex: c.hex,
      })),
    },
    spacing: theme.spacingScale,
  }
}

/**
 * Generate JSON export string
 */
export function generateJSON(theme: ThemeState): string {
  const config = generateThemeConfig(theme)
  return JSON.stringify(config, null, 2)
}

/**
 * Generate CSS variables export string
 */
export function generateCSSVariables(theme: ThemeState): string {
  const config = generateThemeConfig(theme)

  let css = ':root {\n'

  // Font families
  css += `  /* Font Families */\n`
  css += `  --font-heading: "${config.fonts.heading}", sans-serif;\n`
  css += `  --font-body: "${config.fonts.body}", sans-serif;\n`
  css += `  --font-mono: "${config.fonts.mono}", monospace;\n\n`

  // Colors
  css += `  /* Palette: ${config.palette.name} */\n`
  config.palette.colors.forEach((color) => {
    const varName = color.name.toLowerCase().replace(/\s+/g, '-')
    css += `  --color-${varName}: ${color.hex};\n`
  })

  css += '}\n'

  return css
}

/**
 * Generate TypeScript config export string
 */
export function generateTypeScript(theme: ThemeState): string {
  const config = generateThemeConfig(theme)

  return `export const theme = ${JSON.stringify(config, null, 2)} as const

export type Theme = typeof theme
`
}

/**
 * Generate Tailwind CSS config extension
 */
export function generateTailwindConfig(theme: ThemeState): string {
  const config = generateThemeConfig(theme)

  let tailwindConfig = `// Add to your tailwind.config.js
export default {
  theme: {
    extend: {
      fontFamily: {
        heading: ["${config.fonts.heading}", "sans-serif"],
        body: ["${config.fonts.body}", "sans-serif"],
        mono: ["${config.fonts.mono}", "monospace"],
      },
      colors: {
        palette: {\n`

  config.palette.colors.forEach((color) => {
    const key = color.name.toLowerCase().replace(/\s+/g, '-')
    tailwindConfig += `          "${key}": "${color.hex}",\n`
  })

  tailwindConfig += `        },
      },
    },
  },
}
`

  return tailwindConfig
}

/**
 * Download file helper
 */
export function downloadFile(content: string, filename: string, type: string = 'text/plain') {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  link.click()
  URL.revokeObjectURL(url)
}

/**
 * Copy to clipboard helper
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}
