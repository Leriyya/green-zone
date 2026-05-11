import { NextRequest, NextResponse } from 'next/server'
import { LANGS } from './lib/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Find lang prefix in path
  const lang = LANGS.find(l => pathname === `/${l}` || pathname.startsWith(`/${l}/`))

  if (lang) {
    // Pass x-lang header so root layout can set html[lang] correctly on SSR
    const response = NextResponse.next()
    response.headers.set('x-lang', lang)
    return response
  }

  // No lang prefix — redirect to /en
  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|images|api).*)'],
}
