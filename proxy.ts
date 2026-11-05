import { NextRequest, NextResponse } from "next/server";

const protectedPaths = [
  "/delivery",
  "/orders",
  "/dashboard",
  "/profile",
  "/notifications",
  "/user",
  "/moderator",
  "/admin",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isProtected = protectedPaths.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  const role = request.cookies.get("qfly-role")?.value;

  if (!role || !["user", "moderator", "admin"].includes(role)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("next", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (pathname.startsWith("/user") && role !== "user") {
    return NextResponse.redirect(new URL(`/${role}`, request.url));
  }

  if (pathname.startsWith("/moderator") && role !== "moderator") {
    return NextResponse.redirect(new URL(`/${role}`, request.url));
  }

  if (pathname.startsWith("/admin") && role !== "admin") {
    return NextResponse.redirect(new URL(`/${role}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/delivery/:path*",
    "/orders/:path*",
    "/dashboard/:path*",
    "/profile/:path*",
    "/notifications/:path*",
    "/user/:path*",
    "/moderator/:path*",
    "/admin/:path*",
  ],
};