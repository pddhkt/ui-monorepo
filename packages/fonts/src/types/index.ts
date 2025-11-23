/**
 * Font file format types
 */
export type FontType = 'TTF' | 'OTF' | 'WOFF' | 'WOFF2' | 'OTHER'

/**
 * Font classification categories
 */
export type FontCategory =
  | 'SANS_SERIF'
  | 'SERIF'
  | 'MONOSPACE'
  | 'DISPLAY'
  | 'HANDWRITING'
  | 'SCRIPT'
  | 'DECORATIVE'
  | 'OTHER'

/**
 * Font weight values
 */
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

/**
 * Font metadata definition
 */
export interface FontDefinition {
  /** Unique identifier */
  id: string
  /** Display name of the font */
  name: string
  /** Brief description of the font and its use cases */
  description: string
  /** Font file format */
  type: FontType
  /** Font classification category */
  category: FontCategory
  /** Searchable tags for filtering */
  tags: string[]
  /** Whether this font is featured/recommended */
  featured: boolean
  /** Preview URL (if available) */
  previewUrl?: string
  /** Download URL (if available) */
  downloadUrl?: string
  /** License information URL */
  licenseUrl?: string
}

/**
 * Font stack configuration for CSS fallbacks
 */
export interface FontStack {
  /** Unique identifier */
  id: string
  /** Display name */
  name: string
  /** Description of the font stack */
  description: string
  /** CSS font-family value */
  stack: string
  /** Category this stack belongs to */
  category: FontCategory
  /** Whether this is a system font stack */
  isSystem: boolean
}

/**
 * Font pairing suggestion
 */
export interface FontPairing {
  /** Unique identifier */
  id: string
  /** Display name */
  name: string
  /** Description of the pairing */
  description: string
  /** Heading font ID */
  headingFont: string
  /** Body text font ID */
  bodyFont: string
  /** Optional monospace font ID */
  monoFont?: string
}
