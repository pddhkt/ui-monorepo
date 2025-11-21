interface Env {
  DB: D1Database
  BUCKET: R2Bucket
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { DB } = context.env

  try {
    const { results } = await DB.prepare('SELECT * FROM fonts ORDER BY featured DESC, createdAt DESC LIMIT 50').all()

    return new Response(JSON.stringify({
      fonts: results,
      total: results.length
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
  } catch (error) {
    console.error('Error fetching fonts:', error)
    return new Response(JSON.stringify({ error: 'Failed to fetch fonts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
