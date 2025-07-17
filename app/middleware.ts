import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "es", "de", "fr", "th", "id", "zh"]
const defaultLocale = "en"

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Redirect based on cookie or header
  const cookieLocale = request.cookies.get("locale")?.value
  const headerLocale = request.headers.get("accept-language")?.split(",")[0].split("-")[0]

  let targetLocale = cookieLocale || headerLocale

  if (!locales.includes(targetLocale as string)) {
    targetLocale = defaultLocale
  }

  // Redirect to the same path with the detected locale
  return NextResponse.redirect(
    new URL(`/${targetLocale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url),
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, assets)
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
}
