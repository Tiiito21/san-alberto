import { getTotal, increase, decrease } from '@/database/functions'

export async function POST (request: Request) {
  const { tipoEntrada, accion } = await request.json()

  try {
    if (accion === 'increase') {
      const nuevaCantidad = await increase(tipoEntrada)
      return new Response(JSON.stringify({ nuevaCantidad }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
    if (accion === 'decrease') {
      const nuevaCantidad = await decrease(tipoEntrada)
      return new Response(JSON.stringify({ nuevaCantidad }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }
  } catch (error) {
    console.error('Error updating entry count:', error)
    return new Response('Error updating entry count', { status: 500 })
  }
}

export async function GET (request: Request) {
  const url = new URL(request.url)
  const tipoEntrada = url.searchParams.get('tipoEntrada') || ''

  try {
    const total = await getTotal(tipoEntrada)
    return new Response(JSON.stringify({ total }), {
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.error('Error getting entry count:', error)
    return new Response('Error getting entry count', { status: 500 })
  }
}
