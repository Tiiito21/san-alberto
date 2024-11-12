// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware (req: NextRequest) {
  // Configura los encabezados CORS
  const response = NextResponse.next()
  response.headers.set('Access-Control-Allow-Origin', '*') // Permite todos los orígenes
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  // Maneja las solicitudes de preflight (OPTIONS)
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization'
      }
    })
  }

  return response
}

// Configura las rutas donde quieres aplicar el middleware
export const config = {
  matcher: '/api/:path*' // Aplica el middleware solo a las rutas bajo `/api`
}
