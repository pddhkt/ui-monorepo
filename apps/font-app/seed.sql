-- Sample font data for testing

INSERT INTO fonts (id, name, description, type, category, previewUrl, downloadUrl, tags, featured) VALUES
('font-1', 'Inter', 'A highly readable sans-serif font designed for user interfaces', 'WOFF2', 'SANS_SERIF', '/api/fonts/font-1/file', '/api/fonts/font-1/file', '["modern", "ui", "clean"]', 1),
('font-2', 'Roboto Mono', 'A monospaced addition to the Roboto type family', 'WOFF2', 'MONOSPACE', '/api/fonts/font-2/file', '/api/fonts/font-2/file', '["monospace", "code", "google"]', 1),
('font-3', 'Playfair Display', 'Elegant serif font for titles and headings', 'WOFF2', 'SERIF', '/api/fonts/font-3/file', '/api/fonts/font-3/file', '["elegant", "serif", "display"]', 0),
('font-4', 'Dancing Script', 'A lively casual script font', 'WOFF2', 'SCRIPT', '/api/fonts/font-4/file', '/api/fonts/font-4/file', '["script", "handwriting", "casual"]', 0),
('font-5', 'Bebas Neue', 'A bold display font perfect for headlines', 'WOFF2', 'DISPLAY', '/api/fonts/font-5/file', '/api/fonts/font-5/file', '["bold", "display", "headlines"]', 1);
