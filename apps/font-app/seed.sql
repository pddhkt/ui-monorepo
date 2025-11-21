-- Enhanced font gallery with diverse examples

-- Featured Sans-Serif Fonts
INSERT INTO fonts (id, name, description, type, category, previewUrl, downloadUrl, tags, viewCount, downloadCount, featured) VALUES
('font-1', 'Inter', 'A highly readable sans-serif font designed for user interfaces', 'WOFF2', 'SANS_SERIF', '/api/fonts/font-1/file', '/api/fonts/font-1/file', '["modern", "ui", "clean", "geometric"]', 2847, 1523, 1),
('font-6', 'Helvetica Now', 'Modern take on the classic Helvetica typeface', 'WOFF2', 'SANS_SERIF', '/api/fonts/font-1/file', '/api/fonts/font-1/file', '["swiss", "classic", "versatile"]', 1923, 892, 0),
('font-7', 'GT Walsheim', 'A contemporary geometric sans with personality', 'WOFF2', 'SANS_SERIF', '/api/fonts/font-1/file', '/api/fonts/font-1/file', '["geometric", "friendly", "modern"]', 1456, 734, 0),

-- Monospace Fonts for Developers
('font-2', 'Roboto Mono', 'A monospaced addition to the Roboto type family', 'WOFF2', 'MONOSPACE', '/api/fonts/font-2/file', '/api/fonts/font-2/file', '["monospace", "code", "google", "programming"]', 5234, 2891, 1),
('font-8', 'Fira Code', 'Developer favorite with programming ligatures', 'WOFF2', 'MONOSPACE', '/api/fonts/font-2/file', '/api/fonts/font-2/file', '["code", "ligatures", "developer", "coding"]', 4567, 2345, 1),
('font-9', 'JetBrains Mono', 'Professional coding font with increased height', 'WOFF2', 'MONOSPACE', '/api/fonts/font-2/file', '/api/fonts/font-2/file', '["code", "ide", "programming"]', 3892, 1654, 0),

-- Elegant Serif Fonts
('font-3', 'Playfair Display', 'Elegant serif font for titles and headings', 'WOFF2', 'SERIF', '/api/fonts/font-3/file', '/api/fonts/font-3/file', '["elegant", "serif", "display", "luxury"]', 3456, 1789, 0),
('font-10', 'Merriweather', 'Readable serif designed for screens', 'WOFF2', 'SERIF', '/api/fonts/font-3/file', '/api/fonts/font-3/file', '["readable", "text", "editorial"]', 2134, 987, 0),
('font-11', 'Crimson Pro', 'Classic book typeface with modern touch', 'WOFF2', 'SERIF', '/api/fonts/font-3/file', '/api/fonts/font-3/file', '["classic", "book", "text"]', 1876, 654, 0),

-- Creative Display Fonts
('font-5', 'Bebas Neue', 'A bold display font perfect for headlines', 'WOFF2', 'DISPLAY', '/api/fonts/font-5/file', '/api/fonts/font-5/file', '["bold", "display", "headlines", "impact"]', 4123, 2234, 1),
('font-12', 'Druk Wide', 'Ultra-wide display face for maximum impact', 'WOFF2', 'DISPLAY', '/api/fonts/font-5/file', '/api/fonts/font-5/file', '["wide", "bold", "poster", "impact"]', 2789, 1456, 0),
('font-13', 'Monument Extended', 'Geometric display font with strong presence', 'WOFF2', 'DISPLAY', '/api/fonts/font-5/file', '/api/fonts/font-5/file', '["geometric", "modern", "bold"]', 2345, 1123, 0),

-- Script & Handwriting Fonts
('font-4', 'Dancing Script', 'A lively casual script font', 'WOFF2', 'SCRIPT', '/api/fonts/font-4/file', '/api/fonts/font-4/file', '["script", "handwriting", "casual", "playful"]', 3567, 1654, 0),
('font-14', 'Pacifico', 'Surf-inspired brush script font', 'WOFF2', 'SCRIPT', '/api/fonts/font-4/file', '/api/fonts/font-4/file', '["brush", "casual", "retro"]', 2987, 1432, 0),
('font-15', 'Allura', 'Elegant calligraphy script', 'WOFF2', 'HANDWRITING', '/api/fonts/font-4/file', '/api/fonts/font-4/file', '["calligraphy", "wedding", "elegant"]', 2456, 1098, 0),
('font-16', 'Caveat', 'Handwritten marker-style font', 'WOFF2', 'HANDWRITING', '/api/fonts/font-4/file', '/api/fonts/font-4/file', '["handwritten", "marker", "casual"]', 1987, 876, 0),

-- Decorative & Unique Fonts
('font-17', 'Abril Fatface', 'Dramatic display font with high contrast', 'WOFF2', 'DECORATIVE', '/api/fonts/font-3/file', '/api/fonts/font-3/file', '["dramatic", "fashion", "luxury"]', 2678, 1345, 0),
('font-18', 'Righteous', 'Futuristic display with rounded edges', 'WOFF2', 'DECORATIVE', '/api/fonts/font-5/file', '/api/fonts/font-5/file', '["futuristic", "rounded", "tech"]', 1876, 943, 0),
('font-19', 'Bungee', 'Multi-style urban display typeface', 'WOFF2', 'DECORATIVE', '/api/fonts/font-5/file', '/api/fonts/font-5/file', '["urban", "colorful", "street"]', 2123, 1087, 0);
