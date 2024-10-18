// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    console.log('Middleware triggered'); // Log to confirm middleware is running
    const { pathname } = request.nextUrl;

    const token = request.cookies.get('token')?.value;
    console.log('Token:', token); // Log the token for debugging
    const isAuthenticated = token === 'umeshkumawat';
    console.log('Is Authenticated:', isAuthenticated); // Log authentication status

    const isHospitalRoute = pathname.startsWith('/hospital');
    const isPatientviewRoute = pathname.startsWith('/ramdeva/patientview');
    const isHomeRoute = pathname === '/';

    // Redirect to login if the user is not authenticated and trying to access hospital or patientview routes
    if ((isHospitalRoute || isPatientviewRoute) && !isAuthenticated) {
        console.log('Redirecting to login'); // Log redirection
        return NextResponse.redirect(new URL('/login', request.url));
    }

    // Redirect to login if the user is not authenticated and trying to access the home page
    if (isHomeRoute && !isAuthenticated) {
        console.log('Redirecting to login from home page'); // Log redirection
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/hospital/:path*', '/ramdeva/patientview/:path*'], // Apply middleware to hospital and patientview routes
};
