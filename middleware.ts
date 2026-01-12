import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Block WordPress paths and PHP files
  if (pathname.startsWith('/wp-') || 
      pathname.includes('/wp-content/') ||
      pathname.includes('/wp-includes/') ||
      pathname.includes('/wp-admin/') ||
      pathname.includes('/wordpress/') ||
      pathname.endsWith('.php')) {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }

  // Block malformed URLs with template variables
  if (pathname.includes('%7B') || 
      pathname.includes('%7D') ||
      pathname.includes('{search_term') ||
      pathname === '/)') {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico|sitemap.xml|robots.txt|ads.txt).*)',
  ],
}
