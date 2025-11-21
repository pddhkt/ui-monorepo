interface Env {
  DB: D1Database
  BUCKET: R2Bucket
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { DB, BUCKET } = context.env
  const id = context.params.id as string

  try {
    // Get font metadata to verify it exists
    const font = await DB.prepare('SELECT * FROM fonts WHERE id = ?')
      .bind(id)
      .first()

    if (!font) {
      return new Response(JSON.stringify({ error: 'Font not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Get the font file from R2 bucket
    const fontKey = `fonts/${id}.woff2`
    const fontFile = await BUCKET.get(fontKey)

    if (!fontFile) {
      return new Response(JSON.stringify({ error: 'Font file not found in storage' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Return the font file with appropriate headers
    return new Response(fontFile.body, {
      headers: {
        'Content-Type': 'font/woff2',
        'Cache-Control': 'public, max-age=31536000',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error) {
    console.error('Error serving font file:', error)
    return new Response(JSON.stringify({ error: 'Failed to serve font file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
