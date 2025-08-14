/*
*
* import { NextResponse } from 'next/server';
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

*
* */



import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent') || '';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

    const hasSeen = req.cookies.get('mobileAlertShown')?.value === '1';

    const isPageRequest =
        !req.nextUrl.pathname.startsWith('/_next') &&
        !req.nextUrl.pathname.startsWith('/static') &&
        !/\.[^/]+$/.test(req.nextUrl.pathname);

    if (isMobile && isPageRequest && !hasSeen) {
        const originalUrl = req.nextUrl.href;

        const html = `<!doctype html>
<html lang="ko">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>안내</title>
  <script>
    (function () {
      try {
        alert('PC 환경에 최적화되어있습니다');
        document.cookie = 'mobileAlertShown=1; path=/; samesite=lax';
      } catch (e) {}
      location.replace(${JSON.stringify(originalUrl)});
    })();
  </script>
</html>`;

        const res = new NextResponse(html, {
            headers: { 'content-type': 'text/html; charset=utf-8' },
        });

        res.cookies.set({
            name: 'mobileAlertShown',
            value: '1',
            path: '/',
            sameSite: 'lax',

        });

        return res;
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api).*)'],
};
