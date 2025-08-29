import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }
  return NextResponse.next();
}

// Optionally, limit the middleware to only run on the root path
export const config = {
  matcher: ['/'],
};