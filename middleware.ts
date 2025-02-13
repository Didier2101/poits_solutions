// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const token = request.cookies.get('auth-token')?.value
    const { pathname } = request.nextUrl

    console.log('Middleware ejecutándose en:', pathname)
    console.log('Token presente:', !!token)

    // Si intenta acceder a dashboard sin token
    if (pathname.startsWith('/dashboard') && !token) {
        console.log('Redirigiendo a login por falta de token')
        return NextResponse.redirect(new URL('/', request.url))
    }

    // Si tiene token y está en login/register
    if ((pathname === '/login' || pathname === '/register') && token) {
        console.log('Redirigiendo a dashboard porque ya tiene token')
        return NextResponse.redirect(new URL('/inicio', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/login', '/register']
}