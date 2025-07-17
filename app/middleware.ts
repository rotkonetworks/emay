import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const pathname = request.nextUrl.pathname

  // Get the preferred locale from the request
  const preferredLocale = request.headers.get("accept-language")?.split(",")[0].split("-")[0] || "en"

  // Check if the pathname already includes a locale
  const pathnameHasLocale = ["/en", "/es"].some((locale) => pathname.startsWith(locale) || pathname === locale)

  // If the pathname doesn't have a locale and it's not a special path (like api, _next, etc.)
  if (!pathnameHasLocale && !pathname.startsWith("/_next") && !pathname.startsWith("/api") && !pathname.includes(".")) {
    // If the preferred locale is Spanish and the path doesn't already have a locale
    if (preferredLocale === "es") {
      return NextResponse.redirect(new URL(`/es${pathname}`, request.url))
    }

    // For all other cases, we'll use English as default but don't redirect
    return NextResponse.next()
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
