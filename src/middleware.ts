import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "@i18n/routing";

const nextIntlMiddleware = createMiddleware({
  ...routing,
  localeDetection: true,
});

export default function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|avif|ico)$/) ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt"
  ) {
    return NextResponse.next();
  }

  return nextIntlMiddleware(req);
}

export const config = {
  matcher: "/:path*",
};
