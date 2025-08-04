import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent') || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    const isPageRequest =
        !req.nextUrl.pathname.startsWith('/_next') &&
        !req.nextUrl.pathname.startsWith('/static') &&
        !/\.[^/]+$/.test(req.nextUrl.pathname);

    if (isMobile && isPageRequest && !req.nextUrl.pathname.startsWith('/mobile-blocked')) {
        const url = req.nextUrl.clone();
        url.pathname = '/mobile-blocked';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!mobile-blocked).*)'],
};
