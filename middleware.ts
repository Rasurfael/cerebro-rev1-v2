import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('cerebro-token')?.value
  const perfil = request.cookies.get('cerebro-perfil')?.value
  const url = request.nextUrl.clone()

  // Redireciona para login se não estiver autenticado
  if (!token && url.pathname.startsWith('/admin')) {
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // Redireciona para seleção de perfil se logado mas sem perfil
  if (token && !perfil && url.pathname !== '/admin/perfil') {
    url.pathname = '/admin/perfil'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}

