interface Env {
  DB: D1Database
  BUCKET: R2Bucket
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { DB } = context.env
  const url = new URL(context.request.url)
  const category = url.searchParams.get('category')

  try {
    let query = 'SELECT * FROM fonts'
    let params: string[] = []

    if (category && category !== 'all') {
      query += ' WHERE category = ?'
      params.push(category)
    }

    query += ' ORDER BY featured DESC, createdAt DESC LIMIT 50'

    const { results } = params.length > 0
      ? await DB.prepare(query).bind(...params).all()
      : await DB.prepare(query).all()

    return new Response(JSON.stringify({
      fonts: results,
      total: results.length,
      category: category || 'all'
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
