'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Target, Zap, Activity, ShieldCheck, MousePointerClick, ArrowRight
} from 'lucide-react';
import SiteFooter from '@/components/SiteFooter';
import DrillGlobalSettings from '@/components/drill/DrillGlobalSettings';
import { DRILLS, DESKTOP_ONLY_CATEGORIES } from '@/lib/drillsRegistry';
import { SITE_CATEGORIES, getCategoryCount, getCategoryDrills } from '@/lib/siteCategories';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const trustIcons = [ShieldCheck, MousePointerClick, Activity];

// Card chrome for the localized /<locale>/drills directories. Taglines are
// keyed by category id; English falls back to lib/siteCategories.js.
const DIRECTORY_COPY = {
  en: {
    trust: ['No sign-up, ever', 'Instant start, zero installs', '100% runs in your browser'],
    desktop: 'Desktop', count: (n) => `${n} Drills`, explore: (n) => `Explore ${n} Drills`, sessionPrefs: 'Session preferences',
    taglines: {},
  },
  pt: {
    trust: ['Sem cadastro', 'Começa na hora, sem instalar', '100% no navegador'],
    desktop: 'Computador', count: (n) => `${n} treinos`, explore: (n) => `Ver ${n} treinos`, sessionPrefs: 'Preferências da sessão',
    taglines: {
      fps: 'Flicks, tracking e controle de recoil', cognitive: 'Foco, atenção e velocidade de processamento',
      memory: 'Sequências de dígitos e memória espacial', motor: 'Precisão do mouse e velocidade de clique',
      physical: 'Reflexos, equilíbrio e coordenação', visual: 'Visão periférica e percepção de profundidade',
      'visual-tracking': 'Perseguição visual e estabilidade do olhar', 'reaction-speed': 'Testes de tempo de reação e reflexos',
    },
  },
  es: {
    trust: ['Sin registro', 'Empieza al instante, sin instalar', '100% en tu navegador'],
    desktop: 'Ordenador', count: (n) => `${n} ejercicios`, explore: (n) => `Ver ${n} ejercicios`, sessionPrefs: 'Preferencias de la sesión',
    taglines: {
      fps: 'Flicks, tracking y control del retroceso', cognitive: 'Concentración, atención y velocidad de procesamiento',
      memory: 'Series de dígitos, secuencias y memoria espacial', motor: 'Precisión del ratón y velocidad de clic',
      physical: 'Reflejos, equilibrio y coordinación', visual: 'Visión periférica y percepción de profundidad',
      'visual-tracking': 'Seguimiento visual y estabilidad de la mirada', 'reaction-speed': 'Tests de tiempo de reacción y reflejos',
    },
  },
  ja: {
    trust: ['登録不要', 'インストール不要ですぐ開始', 'ブラウザだけで動作'],
    desktop: 'PC向け', count: (n) => `${n}種`, explore: (n) => `${n}種のドリルを見る`, sessionPrefs: 'セッション設定',
    taglines: {
      fps: 'フリック・トラッキング・リコイル制御', cognitive: '集中力・注意力・処理速度',
      memory: '数字の記憶・順序・空間記憶', motor: 'マウス精度とクリック速度',
      physical: '反射・バランス・協調性', visual: '周辺視野と奥行き知覚',
      'visual-tracking': '追従視と視線の安定', 'reaction-speed': '反応速度テストと反射ドリル',
    },
  },
  de: {
    trust: ['Keine Anmeldung', 'Sofort starten, nichts installieren', '100 % im Browser'],
    desktop: 'Desktop', count: (n) => `${n} Drills`, explore: (n) => `${n} Drills ansehen`, sessionPrefs: 'Sitzungseinstellungen',
    taglines: {
      fps: 'Flicks, Tracking und Rückstoßkontrolle', cognitive: 'Fokus, Aufmerksamkeit und Verarbeitungstempo',
      memory: 'Zahlenspanne, Sequenzen und räumliches Erinnern', motor: 'Mauspräzision und Klickgeschwindigkeit',
      physical: 'Reflexe, Balance und Koordination', visual: 'Peripheres Sehen und Tiefenwahrnehmung',
      'visual-tracking': 'Blickverfolgung und ruhiger Blick', 'reaction-speed': 'Reaktionstests und Reflex-Drills',
    },
  },
  ko: {
    trust: ['회원가입 없음', '설치 없이 바로 시작', '브라우저에서 100% 실행'],
    desktop: '데스크톱', count: (n) => `${n}개 훈련`, explore: (n) => `훈련 ${n}개 보기`, sessionPrefs: '세션 설정',
    taglines: {
      fps: '플릭, 트래킹, 반동 제어', cognitive: '집중력, 주의력, 처리 속도',
      memory: '숫자 폭, 순서, 공간 기억', motor: '마우스 정확도와 클릭 속도',
      physical: '반사신경, 균형, 협응력', visual: '주변 시야와 깊이 지각',
      'visual-tracking': '시선 추적과 시선 안정', 'reaction-speed': '반응속도 테스트와 반사신경 드릴',
    },
  },
  fr: {
    trust: ['Sans inscription', 'Démarrage immédiat, rien à installer', '100 % dans le navigateur'],
    desktop: 'Ordinateur', count: (n) => `${n} exercices`, explore: (n) => `Voir les ${n} exercices`, sessionPrefs: 'Préférences de session',
    taglines: {
      fps: 'Flicks, tracking et contrôle du recul', cognitive: 'Concentration, attention et vitesse de traitement',
      memory: 'Empan de chiffres, séquences et mémoire spatiale', motor: 'Précision de la souris et vitesse de clic',
      physical: 'Réflexes, équilibre et coordination', visual: 'Vision périphérique et perception de la profondeur',
      'visual-tracking': 'Poursuite visuelle et stabilité du regard', 'reaction-speed': 'Tests de temps de réaction et réflexes',
    },
  },
};

export default function DrillsDirectoryClient({ faqs = [] }) {
  const { t, localizeHref, locale } = useTranslation();
  const copy = DIRECTORY_COPY[locale] || DIRECTORY_COPY.en;
  const [isMobile, setIsMobile] = useState(false);

  const totalDrills = DRILLS.length;

  // Detect mobile viewport so desktop-only categories can be pushed to the end
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const updateIsMobile = () => setIsMobile(mq.matches);
    updateIsMobile();
    mq.addEventListener('change', updateIsMobile);
    return () => mq.removeEventListener('change', updateIsMobile);
  }, []);

  // On mobile, mobile-supported categories lead and desktop-only ones move to the end
  const baseCategories = isMobile
    ? [...SITE_CATEGORIES].sort((a, b) => {
        const aDesktopOnly = DESKTOP_ONLY_CATEGORIES.includes(a.cat);
        const bDesktopOnly = DESKTOP_ONLY_CATEGORIES.includes(b.cat);
        if (aDesktopOnly === bDesktopOnly) return 0;
        return aDesktopOnly ? 1 : -1;
      })
    : SITE_CATEGORIES;

  return (
    <div className="min-h-screen bg-canvas text-ink-1 font-sans relative overflow-hidden flex flex-col justify-between">

      {/* Layered premium background: mesh blobs + grid + grain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[520px] bg-blue-600/[0.14] rounded-full blur-[150px]" />
        <div className="absolute top-[22%] -left-40 w-[520px] h-[520px] bg-purple-600/[0.10] rounded-full blur-[140px]" />
        <div className="absolute top-[38%] -right-40 w-[520px] h-[480px] bg-cyan-500/[0.08] rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 90%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 relative z-10 w-full flex-1">

        {/* Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-tight">
            {t('directory.h1Prefix', 'Free')} {t('directory.h1Highlight', 'Online Drills')}
          </h1>
          <p className="text-sm sm:text-base text-ink-2 leading-relaxed max-w-2xl mx-auto">
            {totalDrills} {t('directory.subtitle', 'free training drills across 8 categories. No sign-up, no installs, instant start.')}
          </p>

          {/* Trust Strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2">
            {copy.trust.map((label, i) => {
              const Icon = trustIcons[i];
              return (
                <div key={i} className="flex items-center gap-1.5 text-2xs sm:text-xs font-mono font-semibold text-ink-3 uppercase tracking-wider">
                  <Icon className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Category Cards Grid (Styled per Image 3 Reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {baseCategories.map((cat) => {
            const Icon = cat.icon;
            const isDesktopOnly = DESKTOP_ONLY_CATEGORIES.includes(cat.cat);
            const catTitle = t('sectors.' + cat.cat + '.title', cat.name);
            const catHref = localizeHref(cat.href);
            const drillCount = getCategoryCount(cat.cat);
            const sampleDrills = getCategoryDrills(cat.cat).slice(0, 2);

            return (
              <div key={cat.cat} className="h-full">
                <div
                  className="group relative isolate flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#0c0f1d]/90 backdrop-blur-xl p-6 sm:p-7 transition-all duration-300 hover:border-white/25 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl"
                >
                  <div className="relative">
                    {/* Top Row: Squircle icon left, drill count badge right */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300 shrink-0`}>
                        <div className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-br ${cat.color} opacity-40 blur-md -z-10 group-hover:opacity-70 transition-opacity`} />
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isDesktopOnly && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                            {copy.desktop}
                          </span>
                        )}
                        <span className="px-3.5 py-1 rounded-full text-xs font-semibold text-white/90 bg-white/5 border border-white/15">
                          {copy.count(drillCount)}
                        </span>
                      </div>
                    </div>

                    {/* Category Title & Tagline */}
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {catTitle}
                      </h2>
                      <p className="text-sm text-zinc-400 font-normal mt-1 leading-snug">
                        {copy.taglines[cat.cat] || cat.tagline || cat.blurb}
                      </p>
                    </div>

                    {/* 3 Drill Preview Capsules */}
                    <div className="space-y-2.5 my-4">
                      {sampleDrills.map((drill, itemIdx) => {
                        const RowIcon = itemIdx === 0 ? Zap : itemIdx === 1 ? Target : Activity;
                        return (
                          <Link
                            key={drill.id || itemIdx}
                            href={localizeHref(drill.href)}
                            className="flex items-center gap-3 px-4 py-2.5 sm:py-3 rounded-xl bg-surface-2/60 hover:bg-surface-2 border border-white/5 hover:border-white/15 transition-all group/item"
                          >
                            <RowIcon className={`w-4 h-4 ${cat.accent} shrink-0`} />
                            <span className="text-sm font-medium text-zinc-200 group-hover/item:text-white truncate">
                              {getLocalizedDrill(drill.href, locale, drill.name).name}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Full Width Gradient Button */}
                  <div className="relative pt-2">
                    <Link
                      href={catHref}
                      className={`w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r ${cat.color} hover:brightness-110 active:scale-[0.98] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg transition-all mt-2`}
                    >
                      <span>{copy.explore(drillCount)}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Session preferences */}
        <div className="max-w-2xl mx-auto pb-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-widest text-ink-3 mb-3 text-center">
            {copy.sessionPrefs}
          </h2>
          <DrillGlobalSettings />
        </div>

        {/* Frequently Asked Questions (SEO / AEO / GEO) */}
        {faqs?.length > 0 && (
          <div className="mb-14">
            <div className="rounded-3xl bg-[#0c0f1d]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {t('home.faqTitle', 'Frequently Asked Questions')}
                </h2>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-5 flex flex-col justify-start">
                    <dt className="font-bold text-white text-sm font-sans flex items-start gap-2.5">
                      <span className="text-emerald-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                        Q{i + 1}.
                      </span>
                      <span>{f.q}</span>
                    </dt>
                    <dd className="mt-2.5 text-xs text-zinc-400 leading-relaxed pl-6 font-sans">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}

