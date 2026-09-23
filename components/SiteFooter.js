'use client';

import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { DRILLS, DESKTOP_ONLY_CATEGORIES } from '@/lib/drillsNav';
import { SITE_CATEGORIES, getCategoryCount } from '@/lib/siteCategories';
import { useTranslation } from '@/lib/i18n/useTranslation';

// The footer is the last chance to answer "who runs this and can I trust it".
// Privacy, terms and account deletion pages already existed but were reachable
// from nowhere — a dead end for both visitors and crawlers.
const LEGAL_LINKS = [
  { href: '/privacy', key: 'privacy' },
  { href: '/terms', key: 'terms' },
  { href: '/delete-account', key: 'deleteData' },
];

const SITE_LINKS = [
  { href: '/drills', key: 'allDrills' },
  { href: '/search', key: 'search' },
  { href: '/about', key: 'about' },
];

const FOOTER_COPY = {
  en: { description: (count) => `${count} free training drills for aim, reaction speed, memory, focus and coordination. They run in your browser, and your scores stay on your device.`, free: 'Free · no account · no installs', categories: 'Training categories', privacy: 'Privacy', terms: 'Terms', deleteData: 'Delete data', allDrills: 'All drills', search: 'Search', about: 'About', drills: 'drills', desktop: 'desktop' },
  pt: { description: (count) => `${count} treinos gratuitos de mira, reação, memória, foco e coordenação. Tudo funciona no navegador e suas pontuações ficam no dispositivo.`, free: 'Grátis · sem conta · sem instalação', categories: 'Categorias de treino', privacy: 'Privacidade', terms: 'Termos', deleteData: 'Apagar dados', allDrills: 'Todos os treinos', search: 'Pesquisar', about: 'Sobre', drills: 'treinos', desktop: 'computador' },
  es: { description: (count) => `${count} ejercicios gratuitos de puntería, reacción, memoria, concentración y coordinación. Funcionan en el navegador y tus resultados quedan en tu dispositivo.`, free: 'Gratis · sin cuenta · sin instalaciones', categories: 'Categorías de entrenamiento', privacy: 'Privacidad', terms: 'Términos', deleteData: 'Borrar datos', allDrills: 'Todos los ejercicios', search: 'Buscar', about: 'Acerca de', drills: 'ejercicios', desktop: 'ordenador' },
  ja: { description: (count) => `エイム、反応速度、記憶力、集中力、協調運動の無料トレーニング${count}件。ブラウザで動作し、スコアは端末内に保存されます。`, free: '無料・アカウント不要・インストール不要', categories: 'トレーニングカテゴリ', privacy: 'プライバシー', terms: '利用規約', deleteData: 'データ削除', allDrills: 'すべてのドリル', search: '検索', about: '概要', drills: 'ドリル', desktop: 'デスクトップ' },
  de: { description: (count) => `${count} kostenlose Drills für Aim, Reaktion, Gedächtnis, Fokus und Koordination. Sie laufen im Browser; deine Ergebnisse bleiben auf deinem Gerät.`, free: 'Kostenlos · kein Konto · keine Installation', categories: 'Trainingskategorien', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', deleteData: 'Daten löschen', allDrills: 'Alle Drills', search: 'Suche', about: 'Über uns', drills: 'Drills', desktop: 'Desktop' },
  ko: { description: (count) => `에임, 반응속도, 기억력, 집중력, 협응력을 위한 무료 훈련 ${count}개입니다. 브라우저에서 실행되며 점수는 기기에 저장됩니다.`, free: '무료 · 계정 없음 · 설치 없음', categories: '훈련 카테고리', privacy: '개인정보 보호', terms: '이용약관', deleteData: '데이터 삭제', allDrills: '전체 훈련', search: '검색', about: '소개', drills: '훈련', desktop: '데스크톱' },
  fr: { description: (count) => `${count} exercices gratuits pour la visée, les réflexes, la mémoire, la concentration et la coordination. Ils fonctionnent dans le navigateur et vos scores restent sur votre appareil.`, free: 'Gratuit · sans compte · sans installation', categories: 'Catégories d’entraînement', privacy: 'Confidentialité', terms: 'Conditions', deleteData: 'Supprimer les données', allDrills: 'Tous les exercices', search: 'Recherche', about: 'À propos', drills: 'exercices', desktop: 'ordinateur' },
};

export default function SiteFooter() {
  const { locale, localizeHref } = useTranslation();
  const copy = FOOTER_COPY[locale] || FOOTER_COPY.en;
  const totalDrills = DRILLS.length;

  return (
    <footer className="bg-canvas border-t border-hairline text-ink-2 py-14 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-hairline">

          {/* Brand */}
          <div className="md:col-span-4 space-y-4">
            <Link href={localizeHref('/')} className="flex items-center gap-2.5">
              <img
                src="/logo.svg"
                alt="SkillDrills"
                width={32}
                height={32}
                className="w-8 h-8 shrink-0"
              />
              <span className="text-xl font-bold tracking-tight text-white">
                Skill<span className="text-blue-400">Drills</span>
              </span>
            </Link>
            <p className="text-sm text-ink-2 leading-relaxed max-w-sm">
              {copy.description(totalDrills)}
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-ink-3">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{copy.free}</span>
            </div>
          </div>

          {/* Categories */}
          <nav className="md:col-span-8" aria-label={copy.categories}>
            <h2 className="text-xs font-mono uppercase tracking-widest text-ink-1 font-bold mb-4">
              {copy.categories}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SITE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const count = getCategoryCount(cat.cat);
                const isDesktopOnly = DESKTOP_ONLY_CATEGORIES.includes(cat.cat);
                return (
                  <Link
                    key={cat.cat}
                    href={localizeHref(cat.href)}
                    className="p-3 rounded-xl bg-surface-1 hover:bg-surface-2 border border-hairline hover:border-hairline-2 active:scale-[0.98] transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-4 h-4 ${cat.accent}`} />
                      <span className="text-xs font-semibold text-ink-1 group-hover:text-blue-400 transition-colors truncate">
                        {cat.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] text-ink-3 font-mono">{count} {copy.drills}</span>
                      {isDesktopOnly && (
                        <span className="text-[9px] font-mono text-ink-3">{copy.desktop}</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-3 gap-4">
          <p>&copy; {new Date().getFullYear()} SkillDrills</p>
          <nav aria-label="Site and legal links" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[...SITE_LINKS, ...LEGAL_LINKS].map((link) => (
              <Link key={link.href} href={localizeHref(link.href)} className="hover:text-ink-1 transition-colors">
                {copy[link.key]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
