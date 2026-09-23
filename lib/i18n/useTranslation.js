'use client';

import { usePathname } from 'next/navigation';
import { LOCALES, DEFAULT_LOCALE, localizedPath } from '@/lib/i18n/locales';
import { DICTIONARIES } from '@/lib/i18n/dictionaries';

/**
 * @param drillDict Optional per-drill vocabulary, keyed by locale, from
 *   lib/i18n/drills/<drill>.js. It is merged over the shared dictionary so
 *   call sites keep using the same `t('<drill>.key')` paths. Passing it here
 *   rather than holding it in dictionaries.js keeps ~133 KB of drill prose out
 *   of the client bundle of every page: SiteHeader and SiteSchemas call this
 *   hook from the root layout, so whatever dictionaries.js imports ships
 *   site-wide.
 */
export function useTranslation(drillDict = null) {
  const pathname = usePathname() || '';

  // Determine current locale from URL path
  let locale = DEFAULT_LOCALE;
  for (const loc of LOCALES) {
    if (loc !== DEFAULT_LOCALE && (pathname === '/' + loc || pathname.startsWith('/' + loc + '/'))) {
      locale = loc;
      break;
    }
  }

  const base = DICTIONARIES[locale] || DICTIONARIES.en;
  const extra = drillDict && (drillDict[locale] || drillDict.en);
  const dict = extra ? { ...base, ...extra } : base;

  const enExtra = drillDict && drillDict.en;
  const enDict = enExtra ? { ...DICTIONARIES.en, ...enExtra } : DICTIONARIES.en;

  /**
   * Helper to get localized route href
   */
  const localizeHref = (href = '/') => {
    if (locale === DEFAULT_LOCALE) return href;
    if (href.startsWith('http://') || href.startsWith('https://')) return href;
    // Route-aware: only 11 routes exist per locale, so this degrades to the
    // nearest localized ancestor rather than emitting a 404.
    return localizedPath(locale, href.startsWith('/') ? href : '/' + href);
  };

  /**
   * Translate helper with dot-notation and fallback
   */
  const t = (keyPath, fallback = '') => {
    const keys = keyPath.split('.');
    let cur = dict;
    for (const k of keys) {
      if (cur && cur[k] !== undefined) {
        cur = cur[k];
      } else {
        cur = undefined;
        break;
      }
    }
    if (cur !== undefined) return cur;

    // Fallback to English dictionary
    let enCur = enDict;
    for (const k of keys) {
      if (enCur && enCur[k] !== undefined) {
        enCur = enCur[k];
      } else {
        enCur = undefined;
        break;
      }
    }
    return enCur !== undefined ? enCur : fallback;
  };

  return {
    locale,
    dict,
    t,
    localizeHref,
    isRTL: false,
  };
}
