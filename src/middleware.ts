// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista de orígenes permitidos
const allowedOrigins = ['http://localhost:3000', 'https://san-alberto.vercel.app']

export function middleware (request: NextRequest) {
  const origin = request.headers.get('origin')

  // Verifica si el origen está en la lista de permitidos
  if (origin && allowedOrigins.includes(origin)) {
    const response = NextResponse.next()

    // Configura los encabezados CORS para el origen permitido
    response.headers.set('Access-Control-Allow-Origin', '*')
    response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
    response.headers.set('Access-Control-Allow-Headers', 'Content-Type')

    // Manejo de las solicitudes preflight OPTIONS
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 200, headers: response.headers })
    }

    return response
  }

  // Si el origen no está permitido, deniega el acceso
  return new NextResponse('Origen no permitido', { status: 403 })
}

// Configuración para aplicar el middleware solo en las rutas de `/api`
export const config = {
  matcher: '/api/:path*'
}
