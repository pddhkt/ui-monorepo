-- JCK Font Gallery Database Schema

DROP TABLE IF EXISTS fonts;

CREATE TABLE fonts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK(type IN ('TTF', 'OTF', 'WOFF', 'WOFF2', 'OTHER')),
  category TEXT CHECK(category IN ('SANS_SERIF', 'SERIF', 'MONOSPACE', 'DISPLAY', 'HANDWRITING', 'SCRIPT', 'DECORATIVE', 'OTHER')),
  previewUrl TEXT NOT NULL,
  downloadUrl TEXT NOT NULL,
  zipFileUrl TEXT,
  licenceUrl TEXT,
  tags TEXT DEFAULT '[]',
  viewCount INTEGER DEFAULT 0,
  downloadCount INTEGER DEFAULT 0,
  featured INTEGER DEFAULT 0,
  publicId TEXT,
  createdAt TEXT DEFAULT CURRENT_TIMESTAMP,
  updatedAt TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_fonts_category ON fonts(category);
CREATE INDEX idx_fonts_type ON fonts(type);
CREATE INDEX idx_fonts_featured ON fonts(featured);
CREATE INDEX idx_fonts_created_at ON fonts(createdAt);
