import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  const path = request.nextUrl.pathname

  // Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Protect Admin Routes
  if (path.startsWith('/admin') && path !== '/admin/login') {
    const adminCookie = request.cookies.get('admin_session')?.value || request.cookies.get('next-auth.session-token')?.value
    let token = null
    try {
      token = await getToken({ req: request as any, secret: process.env.NEXTAUTH_SECRET || "fallback_secret_for_dev_only" } as any)
    } catch {
      // Ignore token parse error
    }

    if (!token && !adminCookie) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*'],
}
