import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getToken } from './lib/utils/cookie';

const PUBLIC_ROUTES = ['/login', '/forgot-password', '/signup'];

export async function middleware(request: NextRequest) {
  const token = await getToken(); // pass request if needed

  const { pathname } = request.nextUrl;

  // Allow access to public routes and their subpaths
  if (PUBLIC_ROUTES.some(route => pathname === route || pathname.startsWith(`${route}/`))) {
    return NextResponse.next();
  }

  // Redirect if no token
  if (!token) {
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|uploads|images|.*\\..*).*)'],
};
