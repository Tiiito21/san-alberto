import { getAll } from '@/database/functions'

export async function GET () {
  try {
    const tipos = await getAll()
    return new Response(JSON.stringify({ tipos }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error getting entry types: ', error)
    return new Response('Error getting entry types', { status: 500 })
  }
}
