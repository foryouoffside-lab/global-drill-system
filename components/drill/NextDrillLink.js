'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getRelatedDrills } from '@/lib/relatedDrills';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { stripLocale } from '@/lib/i18n/locales';

export default function NextDrillLink({ className = 'mt-2.5' }) {
  const { t, locale, localizeHref } = useTranslation();
  const pathname = usePathname();
  const nextDrill = getRelatedDrills(stripLocale(pathname || ''), 1)[0];
  if (!nextDrill) return null;

  return (
    <Link
      href={localizeHref(nextDrill.href)}
      onClick={() => { if (document.fullscreenElement) document.exitFullscreen().catch(() => {}); }}
      className={`${className} w-full py-2.5 px-3 rounded-[13px] bg-white/[0.04] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] flex items-center justify-between gap-2 text-left transition-colors`}
    >
      <span className="min-w-0">
        <span className="block text-[9px] font-bold uppercase tracking-wider text-slate-500">{t('ui.nextDrill', 'Next drill')}</span>
        <span className="block text-xs font-semibold text-white truncate">{getLocalizedDrill(nextDrill.href, locale, nextDrill.name).name}</span>
      </span>
      <ArrowRight className="w-4 h-4 text-slate-400 shrink-0" />
    </Link>
  );
}
