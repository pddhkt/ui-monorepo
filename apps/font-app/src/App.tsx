import { useState, useEffect } from 'react'

interface Font {
  id: string
  name: string
  description: string | null
  type: string
  category: string | null
  previewUrl: string
  downloadUrl: string
  tags: string
  viewCount: number
  downloadCount: number
  createdAt: string
  featured: number
}

function App() {
  const [fonts, setFonts] = useState<Font[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [previewText, setPreviewText] = useState('The quick brown fox jumps over the lazy dog')
  const [fontSize, setFontSize] = useState(48)
  const [letterSpacing, setLetterSpacing] = useState(0)

  useEffect(() => {
    fetchFonts()
  }, [selectedCategory])

  const fetchFonts = async () => {
    try {
      const url = selectedCategory === 'all'
        ? '/api/fonts'
        : `/api/fonts?category=${selectedCategory}`
      const response = await fetch(url)
      const data = await response.json() as { fonts: Font[] }
      setFonts(data.fonts || [])
    } catch (error) {
      console.error('Error fetching fonts:', error)
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { value: 'all', label: 'All Fonts' },
    { value: 'SANS_SERIF', label: 'Sans Serif' },
    { value: 'SERIF', label: 'Serif' },
    { value: 'MONOSPACE', label: 'Monospace' },
    { value: 'DISPLAY', label: 'Display' },
    { value: 'HANDWRITING', label: 'Handwriting' },
    { value: 'SCRIPT', label: 'Script' },
    { value: 'DECORATIVE', label: 'Decorative' }
  ]

  const parseTags = (tagsString: string): string[] => {
    try {
      return JSON.parse(tagsString)
    } catch {
      return []
    }
  }

  return (
    <div className="overflow-hidden px-4 sm:px-6 min-h-screen">
      <div className="relative mx-auto w-full max-w-7xl before:absolute before:inset-y-0 before:-left-6 before:w-px before:bg-[linear-gradient(to_bottom,var(--border)_0%,var(--border)_200px,var(--border)_calc(100%-200px),var(--border)_100%)] after:absolute after:inset-y-0 after:-right-6 after:w-px after:bg-[linear-gradient(to_bottom,var(--border)_0%,var(--border)_200px,var(--border)_calc(100%-200px),var(--border)_100%)]">
        <div className="relative flex min-h-screen flex-col">

          {/* Header */}
          <header className="border-b py-6">
            <div className="px-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight">JCK Font Gallery</h1>
                  <p className="text-muted-foreground mt-1">Discover beautifully crafted typefaces for every creative project</p>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="grow">
            <div className="mx-auto max-w-6xl border-x px-6 py-6">

              {/* Preview Controls */}
              <div className="bg-muted/40 rounded-lg p-4 space-y-4 mb-6">
                <div className="space-y-2">
                  <input
                    type="text"
                    value={previewText}
                    onChange={(e) => setPreviewText(e.target.value)}
                    placeholder="Type to preview fonts..."
                    className="w-full px-4 py-2 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="flex gap-3 flex-wrap justify-center items-center">
                  <div className="flex gap-2 items-center">
                    <label className="whitespace-nowrap text-sm font-medium">
                      Font Size: {fontSize}px
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="128"
                      value={fontSize}
                      onChange={(e) => setFontSize(Number(e.target.value))}
                      className="w-40"
                    />
                  </div>

                  <div className="flex gap-2 items-center">
                    <label className="whitespace-nowrap text-sm font-medium">
                      Letter Spacing: {letterSpacing}px
                    </label>
                    <input
                      type="range"
                      min="-5"
                      max="20"
                      value={letterSpacing}
                      onChange={(e) => setLetterSpacing(Number(e.target.value))}
                      className="w-40"
                    />
                  </div>

                  <div className="flex gap-2 items-center">
                    <label className="whitespace-nowrap text-sm font-medium">Category:</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="px-3 py-1.5 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => {
                      setPreviewText('The quick brown fox jumps over the lazy dog')
                      setFontSize(48)
                      setLetterSpacing(0)
                    }}
                    className="px-3 py-1.5 border border-input rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Loading State */}
              {loading ? (
                <div className="grid gap-2 py-3">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="bg-card h-48 animate-pulse rounded-3xl border p-4" />
                  ))}
                </div>
              ) : fonts.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="mb-4 text-2xl font-semibold">No fonts found</h3>
                  <p className="text-muted-foreground mb-6">Try adjusting your category filter</p>
                </div>
              ) : (
                /* Font Cards */
                <div className="grid gap-2">
                  {fonts.map((font) => {
                    const tags = parseTags(font.tags)
                    return (
                      <div key={font.id}>
                        <div className="bg-muted/50 dark:bg-muted/50 overflow-hidden rounded-3xl">
                          <div className="relative p-2">
                            {/* Font Preview */}
                            <div
                              className="min-h-[200px] flex items-center justify-center p-8 bg-background/50 rounded-2xl mb-2"
                              style={{
                                fontSize: `${fontSize}px`,
                                letterSpacing: `${letterSpacing}px`,
                                fontFamily: `'${font.name}', sans-serif`
                              }}
                            >
                              {previewText}
                            </div>

                            {/* Font Info */}
                            <div className="grid items-start justify-between gap-2 md:flex">
                              <div className="grid items-center gap-3 px-4 md:flex md:gap-6">
                                <div className="flex items-center gap-2">
                                  <h3 className="truncate text-lg font-semibold">{font.name}</h3>
                                  {font.featured === 1 && (
                                    <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                      ⭐ Featured
                                    </span>
                                  )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  <span className="border border-border px-2 py-1 rounded-md text-xs">
                                    {font.type}
                                  </span>
                                  {font.category && (
                                    <span className="border border-border px-2 py-1 rounded-md text-xs">
                                      {font.category.replace('_', ' ')}
                                    </span>
                                  )}
                                  {tags.slice(0, 2).map((tag) => (
                                    <span key={tag} className="border border-border px-2 py-1 rounded-md text-xs">
                                      {tag}
                                    </span>
                                  ))}
                                  {tags.length > 2 && (
                                    <span className="border border-border px-2 py-1 rounded-md text-xs">
                                      +{tags.length - 2}
                                    </span>
                                  )}
                                </div>
                                <div className="text-muted-foreground flex items-center space-x-2 text-sm">
                                  <span>👁 {font.viewCount}</span>
                                  <span>⬇ {font.downloadCount}</span>
                                </div>
                              </div>
                              <div className="px-3 space-x-2 pb-3 md:pb-0">
                                <a
                                  href={font.downloadUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                                >
                                  Download
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t py-6 mt-12">
            <div className="px-6 text-center text-sm text-muted-foreground">
              <p>JCK Font Gallery · Powered by Cloudflare Workers</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
