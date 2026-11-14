'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Same map as the inline <head> script in app/layout.js. That script only runs
// on a full page load; client-side navigations (language switcher, in-app
// links between /de/... and /...) keep the old <html lang>. This keeps it in
// sync after hydration. Renders nothing.
const LANGS = { pt: 'pt-BR', es: 'es-ES', ja: 'ja-JP', de: 'de-DE', ko: 'ko-KR', fr: 'fr-FR' };

export default function HtmlLangSync() {
  const pathname = usePathname() || '/';
  useEffect(() => {
    const seg = pathname.split('/')[1];
    const lang = LANGS[seg] || 'en';
    if (document.documentElement.lang !== lang) document.documentElement.lang = lang;
  }, [pathname]);
  return null;
}
