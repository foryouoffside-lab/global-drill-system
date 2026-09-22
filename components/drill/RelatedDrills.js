'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { DRILLS } from '@/lib/drillsNav';
import { getRelatedDrills } from '@/lib/relatedDrills';
import { DRILL_SEO, getDrillSeo } from '@/lib/drillSeo';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { stripLocale, hasLocalizedRoute } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

// Keyword-bearing cross-links between drill pages.
//
// Mounted once in app/drills/layout.js and self-gating: it renders nothing
// unless the current path is an exact drill href, so hub pages (which have
// their own drill grids) are untouched.
//
// It is a client component only because it reads the path from usePathname().
// Everything it renders is derived from the static registry, so the markup is
// identical on the server and the client — the links are in the initial HTML
// and a crawler sees them without executing any JavaScript. That matters here:
// the GSC URL Inspection API showed 64 of 81 drill URLs with no referring URL
// at all, which is why they sat in "Discovered - currently not indexed".
//
// The visible link text is the drill's target search phrase from lib/drillSeo.js
// rather than its product name. Names like "Ghost-Link Tracking" and "Triangular
// Pursuit" have no search volume; "Multiple Object Tracking Test" and "Eye
// Tracking Accuracy Drill" do, and anchor text is one of the few keyword signals
// a low-authority page can actually earn for itself.

const CATEGORY_HUB = {
  fps: { href: '/drills/fps', label: 'FPS aim training' },
  cognitive: { href: '/drills/cognitive', label: 'brain training' },
  memory: { href: '/drills/memory', label: 'memory training' },
  motor: { href: '/drills/motor', label: 'mouse precision drills' },
  physical: { href: '/drills/physical', label: 'reflex and coordination drills' },
  visual: { href: '/drills/visual', label: 'visual training' },
  'visual-tracking': { href: '/drills/visual-tracking', label: 'eye tracking training' },
  'reaction-speed': { href: '/drills/reaction-speed', label: 'reaction time drills' },
};

const RELATED_COPY = {
  en: { heading: (term) => `Drills related to ${term}`, description: 'Train the same skill from a different angle. Every drill below runs free in the browser with no sign-up.', aria: 'Related drills', browse: 'Or browse every', all: (count) => `all ${count} free online drills`, relation: { 'same-subcategory': 'Same skill', 'same-category': 'Same category', 'related-topic': 'Related skill', 'more-drills': 'More drills' }, categories: { fps: 'FPS aim training', cognitive: 'brain training', memory: 'memory training', motor: 'mouse precision drills', physical: 'reflex and coordination drills', visual: 'visual training', 'visual-tracking': 'eye tracking training', 'reaction-speed': 'reaction time drills' } },
  pt: { heading: (term) => `Treinos relacionados a ${term}`, description: 'Treine a mesma habilidade por outro ângulo. Todos os treinos abaixo são gratuitos no navegador e não exigem cadastro.', aria: 'Treinos relacionados', browse: 'Ou veja todos os treinos de', all: (count) => `todos os ${count} treinos online gratuitos`, relation: { 'same-subcategory': 'Mesma habilidade', 'same-category': 'Mesma categoria', 'related-topic': 'Habilidade relacionada', 'more-drills': 'Mais treinos' }, categories: { fps: 'treino de mira FPS', cognitive: 'treino cerebral', memory: 'treino de memória', motor: 'treinos de precisão do mouse', physical: 'treinos de reflexo e coordenação', visual: 'treino visual', 'visual-tracking': 'treino de rastreamento visual', 'reaction-speed': 'treinos de tempo de reação' } },
  es: { heading: (term) => `Ejercicios relacionados con ${term}`, description: 'Practica la misma habilidad desde otro ángulo. Todos los ejercicios funcionan gratis en el navegador y no requieren registro.', aria: 'Ejercicios relacionados', browse: 'O explora todos los ejercicios de', all: (count) => `los ${count} ejercicios online gratuitos`, relation: { 'same-subcategory': 'Misma habilidad', 'same-category': 'Misma categoría', 'related-topic': 'Habilidad relacionada', 'more-drills': 'Más ejercicios' }, categories: { fps: 'entrenamiento de puntería FPS', cognitive: 'entrenamiento cognitivo', memory: 'entrenamiento de memoria', motor: 'ejercicios de precisión del ratón', physical: 'ejercicios de reflejos y coordinación', visual: 'entrenamiento visual', 'visual-tracking': 'entrenamiento de seguimiento visual', 'reaction-speed': 'ejercicios de tiempo de reacción' } },
  ja: { heading: (term) => `${term}に関連するトレーニング`, description: '同じスキルを別の角度から練習できます。以下のトレーニングはすべて無料で、登録なしでブラウザ上で動作します。', aria: '関連するトレーニング', browse: 'または、すべての', all: (count) => `${count}件の無料オンラインドリルを見る`, relation: { 'same-subcategory': '同じスキル', 'same-category': '同じカテゴリ', 'related-topic': '関連スキル', 'more-drills': '他のドリル' }, categories: { fps: 'FPSエイム練習', cognitive: '認知トレーニング', memory: '記憶力トレーニング', motor: 'マウス精度トレーニング', physical: '反射神経・協調運動', visual: '視覚トレーニング', 'visual-tracking': '視覚追跡トレーニング', 'reaction-speed': '反応速度トレーニング' } },
  de: { heading: (term) => `Passende Drills zu ${term}`, description: 'Trainiere dieselbe Fähigkeit aus einem anderen Blickwinkel. Alle folgenden Drills laufen kostenlos im Browser ohne Anmeldung.', aria: 'Passende Drills', browse: 'Oder alle Übungen für', all: (count) => `${count} kostenlose Online-Drills ansehen`, relation: { 'same-subcategory': 'Gleiche Fähigkeit', 'same-category': 'Gleiche Kategorie', 'related-topic': 'Verwandte Fähigkeit', 'more-drills': 'Weitere Drills' }, categories: { fps: 'FPS-Zieltraining', cognitive: 'Gehirntraining', memory: 'Gedächtnistraining', motor: 'Mauspräzision', physical: 'Reflex- und Koordinationstraining', visual: 'Sehtraining', 'visual-tracking': 'Blickverfolgung', 'reaction-speed': 'Reaktionszeittraining' } },
  ko: { heading: (term) => `${term} 관련 훈련`, description: '같은 능력을 다른 방식으로 연습해 보세요. 아래 훈련은 모두 무료이며 가입 없이 브라우저에서 실행됩니다.', aria: '관련 훈련', browse: '또는 다음의 모든', all: (count) => `${count}개 무료 온라인 훈련 보기`, relation: { 'same-subcategory': '같은 기술', 'same-category': '같은 카테고리', 'related-topic': '관련 기술', 'more-drills': '더 많은 훈련' }, categories: { fps: 'FPS 에임 훈련', cognitive: '인지 훈련', memory: '기억력 훈련', motor: '마우스 정밀도 훈련', physical: '반사신경·협응 훈련', visual: '시각 훈련', 'visual-tracking': '시각 추적 훈련', 'reaction-speed': '반응속도 훈련' } },
  fr: { heading: (term) => `Exercices liés à ${term}`, description: 'Travaillez la même compétence sous un autre angle. Tous les exercices sont gratuits dans le navigateur et sans inscription.', aria: 'Exercices liés', browse: 'Ou parcourez tous les exercices de', all: (count) => `les ${count} exercices gratuits en ligne`, relation: { 'same-subcategory': 'Même compétence', 'same-category': 'Même catégorie', 'related-topic': 'Compétence liée', 'more-drills': 'Autres exercices' }, categories: { fps: 'entraînement de visée FPS', cognitive: 'entraînement cognitif', memory: 'entraînement de la mémoire', motor: 'précision de la souris', physical: 'réflexes et coordination', visual: 'entraînement visuel', 'visual-tracking': 'suivi visuel', 'reaction-speed': 'exercices de temps de réaction' } },
};

export default function RelatedDrills() {
  const pathname = usePathname();
  const { locale, localizeHref } = useTranslation();
  const cleanPath = stripLocale(pathname || '');
  const drill = DRILLS.find((d) => d.href === cleanPath);
  const related = useMemo(() => (drill ? getRelatedDrills(drill.href, 6) : []), [drill]);
  if (!drill || related.length === 0) return null;

  const hub = CATEGORY_HUB[drill.category];
  const copy = RELATED_COPY[locale] || RELATED_COPY.en;
  const localizedSelfSeo = getDrillSeo(drill.href, locale);
  const localizedSelf = getLocalizedDrill(drill.href, locale, drill.name);
  const hasNativeSelfSeo = locale === 'en' || Boolean(DRILL_SEO[drill.href]?.locales?.[locale]);
  const term = hasNativeSelfSeo ? localizedSelfSeo?.term || localizedSelf.name : localizedSelf.name;
  const singleLineTitles = true;

  return (
    <section
      className="max-w-6xl w-full mx-auto px-4 pb-12 font-sans"
      aria-labelledby="related-drills-heading"
    >
      <div className="border border-gray-800 bg-black rounded-2xl px-6 py-7">
        <h2
          id="related-drills-heading"
          className={`text-xl font-bold text-white tracking-tight mb-1.5 ${singleLineTitles ? 'truncate whitespace-nowrap' : ''}`}
        >
          {copy.heading(term || drill.name)}
        </h2>
        <p className="text-sm leading-relaxed text-gray-400 mb-6">
          {copy.description}
        </p>

        <nav aria-label={copy.aria}>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {related.map((r) => {
              const href = hasLocalizedRoute(locale, r.href) ? localizeHref(r.href) : r.href;
              const localizedSeo = getDrillSeo(r.href, locale);
              const hasNativeSeo = locale === 'en' || Boolean(DRILL_SEO[r.href]?.locales?.[locale]);
              const anchor = hasNativeSeo ? localizedSeo?.anchor || getLocalizedDrill(r.href, locale, r.name).name : getLocalizedDrill(r.href, locale, r.name).name;
              const name = getLocalizedDrill(r.href, locale, r.name).name;
              return (
                <li key={r.href}>
                  <Link
                    href={href}
                    className="group flex h-full flex-col gap-1.5 p-4 rounded-xl border border-gray-800 bg-white/[0.02] hover:bg-white/[0.05] hover:border-gray-700 transition-colors duration-200"
                  >
                    <span className={`block min-w-0 text-sm font-bold text-white group-hover:text-blue-300 transition-colors ${singleLineTitles ? 'truncate whitespace-nowrap' : ''}`}>
                      {anchor}
                    </span>
                    <span className="text-xs text-gray-400">{name}</span>
                    <span className="mt-auto pt-2 text-[11px] uppercase tracking-wide text-gray-500">
                      {copy.relation[r.relation] || copy.relation['more-drills']} · {copy.categories[r.category] || r.categoryLabel} · {r.duration}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {hub && (
          <p className="mt-6 text-sm text-gray-400">
            {copy.browse}{' '}
            <Link href={hasLocalizedRoute(locale, hub.href) ? localizeHref(hub.href) : hub.href} className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              {copy.categories[drill.category] || hub.label}
            </Link>
            {' '}·{' '}
            <Link href={hasLocalizedRoute(locale, '/drills') ? localizeHref('/drills') : '/drills'} className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
              {copy.all(DRILLS.length)}
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
