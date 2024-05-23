// export { auth as authmiddleware } from "@/auth";
import auth from "@/auth";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isAuthPath = path === '/signin' || path === '/signup';

  const token = request.cookies.get('token')?.value || '';

  if (isAuthPath && token) {
    // user is trying to visit page to login/signup while logged in
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  if (!isAuthPath && !token) {
    // user needs to be logged in to access page
    return NextResponse.redirect(new URL('/signin', request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/task-management/:path*'
  ]
}