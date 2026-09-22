import { NextResponse } from 'next/server';
import { LOCALES, DEFAULT_LOCALE, hasLocalizedRoute, localeUrl, stripLocale } from '@/lib/i18n/locales';

export const COOKIE = 'skilldrills_locale';

// Country -> locale. Only countries where the language is genuinely dominant
// are listed; anything unlisted falls through to English, which is the
// x-default and the only honest answer for a market with no translated tree.
const COUNTRY_LOCALE = {
  DE: 'de', AT: 'de',
  ES: 'es', MX: 'es', AR: 'es', CO: 'es', CL: 'es', PE: 'es', VE: 'es', EC: 'es',
  GT: 'es', BO: 'es', DO: 'es', HN: 'es', PY: 'es', SV: 'es', NI: 'es', CR: 'es',
  PA: 'es', UY: 'es', CU: 'es', GQ: 'es',
  FR: 'fr', MC: 'fr',
  BR: 'pt', PT: 'pt', AO: 'pt', MZ: 'pt',
  JP: 'ja',
  KR: 'ko',
};

// Countries with more than one official language, where the country code alone
// would pick the wrong tree for a large minority. Accept-Language decides these.
const MULTILINGUAL = {
  CH: ['de', 'fr'],
  BE: ['fr'],
  LU: ['fr', 'de'],
  CA: ['fr'],
};

// Crawlers are never redirected. They must always receive the canonical URL
// they asked for, or hreflang stops meaning anything and the locale trees
// compete with each other. This is what keeps the geo routing compatible with
// the "no hard IP auto-redirect" rule in CLAUDE.md section 10.
const BOT = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|quora|pinterest|vkshare|whatsapp|telegram|discord|preview|headless|lighthouse|pagespeed|gtmetrix|chrome-lighthouse|ia_archiver|semrush|ahrefs|duckduck|yandex|baidu|applebot|petalbot|gptbot|claudebot|perplexity|oai-searchbot|google-extended/i;

function fromAcceptLanguage(header) {
  if (!header) return null;
  // "fr-CH, fr;q=0.9, en;q=0.8" -> ['fr','fr','en'] in descending quality.
  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q.split('=')[1]) : 1 };
    })
    .filter((e) => e.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (base !== DEFAULT_LOCALE && LOCALES.includes(base)) return base;
    if (base === DEFAULT_LOCALE) return DEFAULT_LOCALE;
  }
  return null;
}

function pickLocale(request) {
  const accept = fromAcceptLanguage(request.headers.get('accept-language'));
  const country = (request.headers.get('x-vercel-ip-country') || '').toUpperCase();

  // Multilingual country: the browser's own language breaks the tie.
  const options = MULTILINGUAL[country];
  if (options) {
    if (accept && options.includes(accept)) return accept;
    if (accept === DEFAULT_LOCALE) return DEFAULT_LOCALE;
    return options[0];
  }

  if (COUNTRY_LOCALE[country]) return COUNTRY_LOCALE[country];

  // No geo signal (local dev, a VPN, a country with no translated tree).
  // Accept-Language is the only remaining evidence of what the reader reads.
  return accept || DEFAULT_LOCALE;
}

export function middleware(request) {
  const { pathname, search } = request.nextUrl;

  // A visitor who has already chosen — or been sent somewhere once — is never
  // moved again. LanguageSwitcher writes this cookie on a manual switch, so an
  // explicit choice always outranks geography.
  if (request.cookies.has(COOKIE)) return NextResponse.next();

  if (BOT.test(request.headers.get('user-agent') || '')) return NextResponse.next();

  // Already inside a locale tree: record it so the cookie exists from here on,
  // but do not move the visitor.
  const current = pathname.split('/')[1];
  if (LOCALES.includes(current) && current !== DEFAULT_LOCALE) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, current, { path: '/', maxAge: 31536000, sameSite: 'lax' });
    return res;
  }

  const locale = pickLocale(request);

  // English, or a language with no translated page for this exact route:
  // stay on the English URL. Never send someone to a hub they did not ask for.
  if (locale === DEFAULT_LOCALE || !hasLocalizedRoute(locale, stripLocale(pathname))) {
    const res = NextResponse.next();
    res.cookies.set(COOKIE, DEFAULT_LOCALE, { path: '/', maxAge: 31536000, sameSite: 'lax' });
    return res;
  }

  const url = request.nextUrl.clone();
  url.pathname = localeUrl(locale, stripLocale(pathname));
  url.search = search;

  // 307, never 308: this is a per-visitor convenience, not a statement that the
  // English URL has permanently moved. A permanent redirect here would poison
  // the canonical for every crawler that ever ignored the bot check.
  const res = NextResponse.redirect(url, 307);
  res.cookies.set(COOKIE, locale, { path: '/', maxAge: 31536000, sameSite: 'lax' });
  return res;
}

export const config = {
  // Only real page requests. Static assets, the image optimizer, the sitemap,
  // robots and every file with an extension skip the middleware entirely so
  // nothing on the critical loading path pays for it.
  matcher: [
    '/((?!_next/static|_next/image|api|favicon.ico|favicon.svg|logo.svg|manifest.json|robots.txt|sitemap.xml|llms.txt|security.txt|indexnow-key.txt|browserconfig.xml|sw.js|icons|images|\\.well-known|.*\\.[\\w]+$).*)',
  ],
};
