'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Eye,
  Home,
  ChevronRight,
  Sparkles,
  Layers,
  Zap,
  Target,
  Clock,
  Activity
} from 'lucide-react';
import { DRILLS } from '@/lib/drillsRegistry';
import { getDrillTagline, sortByInterest } from '@/lib/drillCatalog';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import DrillCarousel from '@/components/drill/DrillCarousel';
import AdjacentHubs from '@/components/AdjacentHubs';
import StickyMobileCta from '@/components/StickyMobileCta';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { hasLocalizedRoute } from '@/lib/i18n/locales';

const visualCategories = [
  {
    id: 'reaction-control',
    name: 'Reaction & Impulse Control',
    icon: Zap,
    description: 'Calibrate phototransduction reaction speed and suppress false-positive motor responses',
    drillNames: ['light-reaction', 'no-go'],
  },
  {
    id: 'tracking-accuracy',
    name: 'Tracking & Smooth Pursuit',
    icon: Eye,
    description: 'Condition continuous foveal tracking, catch-up saccades, and multiple object tracking',
    drillNames: ['moving-target', 'multiple-targets', 'pursuit-tracker'],
  },
  {
    id: 'recognition-depth',
    name: 'Recognition & Spatial Depth',
    icon: Target,
    description: 'Accelerate parallel feature scanning, contrast sensitivity, and 3D depth judgment',
    drillNames: ['distance-judgment', 'visual-search', 'entropic-grid', 'rhythm-anomaly'],
  },
];

// Native visual-hub copy is authored per market from the category research
// note. It keeps the visible category intent local instead of translating the
// English hub sentence by sentence.
const VISUAL_HUB_COPY = {
  en: {
    h1: 'Visual Reaction, Tracking & Perception Drills',
    description: 'Choose from 9 free browser drills for visual reaction time, dynamic vision, target tracking, depth judgment, and visual search. No sign-up; scores stay in your browser.',
    drillsHeading: 'Choose a visual drill',
    domainsHeading: 'Choose a visual skill',
    drill: 'Drill',
    drills: 'Drills',
    categories: {
      'reaction-control': { name: 'Reaction & Impulse Control', description: 'Train visual response speed and hold back false-positive clicks.' },
      'tracking-accuracy': { name: 'Tracking & Eye Movement', description: 'Follow moving targets, smooth pursuit paths, and multiple objects.' },
      'recognition-depth': { name: 'Recognition & Depth Judgment', description: 'Find visual targets, read patterns, and estimate spatial distance.' },
    },
    engineHeading: 'What these visual drills measure',
    engine: [
      { title: 'Visual timing and inhibition', description: 'Measure how quickly you detect a visual signal and whether you can wait for the correct response.' },
      { title: 'Target tracking control', description: 'Practice continuous target following, catch-up corrections, and divided visual attention.' },
      { title: 'Search and spatial judgment', description: 'Train target isolation, pattern reading, contrast decisions, and depth estimation.' },
    ],
    faqHeading: 'Questions about visual drills',
    cta: 'Start a visual drill',
  },
  ja: {
    h1: '動体視力・視覚探索トレーニング',
    description: '動体視力テスト、視覚探索、周辺視、奥行き判断、反応速度をブラウザで練習できる9種類の無料ドリル。登録不要で、記録はブラウザ内に保存します。',
    drillsHeading: '視覚ドリルを選ぶ',
    domainsHeading: '伸ばしたい視覚スキルを選ぶ',
    drill: 'ドリル',
    drills: 'ドリル',
    categories: {
      'reaction-control': { name: '反応・衝動抑制', description: '視覚刺激への反応速度を測り、早とちりのクリックを抑えます。' },
      'tracking-accuracy': { name: '追従・眼球運動', description: '動く標的、滑らかな追従、複数対象の同時追跡を練習します。' },
      'recognition-depth': { name: '認識・奥行き判断', description: '標的を見つけ、パターンを読み、空間的な距離を判断します。' },
    },
    engineHeading: 'ブラウザで測る視覚スキル',
    engine: [
      { title: '視覚反応と抑制', description: '視覚信号を捉える速さと、正しい刺激まで反応を待てるかを測ります。' },
      { title: '標的追従の操作', description: '連続追従、追いつき修正、分割された視覚注意を練習します。' },
      { title: '探索と空間判断', description: '標的の分離、パターン認識、コントラスト判断、奥行き推定を鍛えます。' },
    ],
    faqHeading: '視覚ドリルのよくある質問',
    cta: '視覚ドリルを始める',
  },
  ko: {
    h1: '동체시력·시각 탐색 훈련',
    description: '동체시력 테스트, 시각 탐색, 주변시, 거리 판단과 시각 반응속도를 브라우저에서 연습하는 무료 9개 드릴입니다. 가입 없이 기록은 브라우저에 저장됩니다.',
    drillsHeading: '시각 드릴 선택',
    domainsHeading: '훈련할 시각 능력 선택',
    drill: '드릴',
    drills: '드릴',
    categories: {
      'reaction-control': { name: '반응·충동 억제', description: '시각 신호에 빠르게 반응하고 잘못된 클릭을 억제합니다.' },
      'tracking-accuracy': { name: '추적·안구 움직임', description: '움직이는 목표, 부드러운 추적과 여러 목표 동시 추적을 연습합니다.' },
      'recognition-depth': { name: '인식·거리 판단', description: '목표를 찾고 패턴을 읽으며 공간적 거리를 판단합니다.' },
    },
    engineHeading: '브라우저에서 측정하는 시각 능력',
    engine: [
      { title: '시각 타이밍과 억제', description: '시각 신호를 감지하는 속도와 올바른 자극까지 반응을 참는 능력을 측정합니다.' },
      { title: '목표 추적 조절', description: '연속 추적, 따라잡기 보정과 분산된 시각 주의를 연습합니다.' },
      { title: '탐색과 공간 판단', description: '목표 분리, 패턴 읽기, 대비 판단과 거리 추정을 훈련합니다.' },
    ],
    faqHeading: '시각 드릴 자주 묻는 질문',
    cta: '시각 드릴 시작하기',
  },
  de: {
    h1: 'Dynamisches Sehen, visuelle Suche & Reaktion',
    description: '9 kostenlose Browser-Drills für dynamisches Sehen, visuelle Suche, Reaktionszeit, Zielverfolgung und Tiefenwahrnehmung. Ohne Anmeldung; Ergebnisse bleiben im Browser.',
    drillsHeading: 'Einen visuellen Drill wählen',
    domainsHeading: 'Visuelle Fähigkeit wählen',
    drill: 'Drill',
    drills: 'Drills',
    categories: {
      'reaction-control': { name: 'Reaktion & Impulskontrolle', description: 'Visuelle Reaktion beschleunigen und voreilige Klicks unterdrücken.' },
      'tracking-accuracy': { name: 'Verfolgung & Augenbewegung', description: 'Bewegte Ziele, Blickfolge und mehrere Objekte gleichzeitig verfolgen.' },
      'recognition-depth': { name: 'Erkennung & Tiefenwahrnehmung', description: 'Ziele finden, Muster lesen und räumliche Entfernung einschätzen.' },
    },
    engineHeading: 'Was diese visuellen Drills messen',
    engine: [
      { title: 'Visuelles Timing und Hemmung', description: 'Messen, wie schnell ein Signal erkannt wird und ob die richtige Reaktion abgewartet wird.' },
      { title: 'Kontrolle der Zielverfolgung', description: 'Kontinuierliche Verfolgung, Aufholkorrekturen und geteilte Aufmerksamkeit üben.' },
      { title: 'Suche und räumliches Urteil', description: 'Zielisolierung, Musterlesen, Kontrastentscheidung und Entfernungsschätzung trainieren.' },
    ],
    faqHeading: 'Fragen zu visuellen Drills',
    cta: 'Visuellen Drill starten',
  },
  pt: {
    h1: 'Visão Dinâmica, Busca Visual e Reação',
    description: '9 exercícios gratuitos no navegador para visão dinâmica, busca visual, tempo de reação, rastreamento de alvos e percepção de profundidade. Sem cadastro; os resultados ficam no navegador.',
    drillsHeading: 'Escolha um treino visual',
    domainsHeading: 'Escolha a habilidade visual',
    drill: 'treino',
    drills: 'treinos',
    categories: {
      'reaction-control': { name: 'Reação e controle de impulsos', description: 'Treine a velocidade da resposta visual e evite cliques precipitados.' },
      'tracking-accuracy': { name: 'Rastreamento e movimento ocular', description: 'Acompanhe alvos móveis, trajetórias suaves e vários objetos.' },
      'recognition-depth': { name: 'Reconhecimento e profundidade', description: 'Encontre alvos, leia padrões e estime distâncias no espaço.' },
    },
    engineHeading: 'O que estes treinos visuais medem',
    engine: [
      { title: 'Tempo visual e inibição', description: 'Meça a rapidez para detectar um sinal e esperar o estímulo correto antes de responder.' },
      { title: 'Controle do rastreamento', description: 'Pratique acompanhamento contínuo, correções de alcance e atenção visual dividida.' },
      { title: 'Busca e julgamento espacial', description: 'Treine isolamento do alvo, leitura de padrões, contraste e estimativa de profundidade.' },
    ],
    faqHeading: 'Dúvidas sobre treinos visuais',
    cta: 'Começar um treino visual',
  },
  es: {
    h1: 'Agudeza Visual Dinámica, Búsqueda y Reacción',
    description: '9 ejercicios gratuitos en el navegador para agudeza visual dinámica, búsqueda visual, tiempo de reacción, seguimiento de objetivos y percepción de profundidad. Sin registro; tus marcas quedan en el navegador.',
    drillsHeading: 'Elige un ejercicio visual',
    domainsHeading: 'Elige la habilidad visual',
    drill: 'ejercicio',
    drills: 'ejercicios',
    categories: {
      'reaction-control': { name: 'Reacción y control de impulsos', description: 'Entrena la velocidad de respuesta visual y evita clics precipitados.' },
      'tracking-accuracy': { name: 'Seguimiento y movimiento ocular', description: 'Sigue objetivos móviles, trayectorias suaves y varios objetos.' },
      'recognition-depth': { name: 'Reconocimiento y profundidad', description: 'Encuentra objetivos, lee patrones y estima distancias espaciales.' },
    },
    engineHeading: 'Qué miden estos ejercicios visuales',
    engine: [
      { title: 'Tiempo visual e inhibición', description: 'Mide la rapidez para detectar una señal y esperar el estímulo correcto antes de responder.' },
      { title: 'Control del seguimiento', description: 'Practica el seguimiento continuo, las correcciones de alcance y la atención visual dividida.' },
      { title: 'Búsqueda y juicio espacial', description: 'Entrena el aislamiento del objetivo, la lectura de patrones, el contraste y la profundidad.' },
    ],
    faqHeading: 'Preguntas sobre los ejercicios visuales',
    cta: 'Empezar un ejercicio visual',
  },
  fr: {
    h1: 'Vision dynamique, recherche visuelle et réaction',
    description: '9 exercices gratuits dans le navigateur pour vision dynamique, recherche visuelle, temps de réaction, suivi de cibles et perception de la profondeur. Sans inscription; vos scores restent dans le navigateur.',
    drillsHeading: 'Choisissez un exercice visuel',
    domainsHeading: 'Choisissez la capacité visuelle',
    drill: 'exercice',
    drills: 'exercices',
    categories: {
      'reaction-control': { name: 'Réaction et contrôle des impulsions', description: 'Travaillez la vitesse de réponse visuelle et évitez les clics précipités.' },
      'tracking-accuracy': { name: 'Suivi et mouvements oculaires', description: 'Suivez des cibles mobiles, des trajectoires fluides et plusieurs objets.' },
      'recognition-depth': { name: 'Reconnaissance et profondeur', description: 'Trouvez les cibles, lisez les motifs et estimez les distances spatiales.' },
    },
    engineHeading: 'Ce que mesurent ces exercices visuels',
    engine: [
      { title: 'Timing visuel et inhibition', description: 'Mesurez la rapidité de détection d’un signal et la capacité à attendre le bon stimulus.' },
      { title: 'Contrôle du suivi de cible', description: 'Travaillez le suivi continu, les corrections de rattrapage et l’attention visuelle divisée.' },
      { title: 'Recherche et jugement spatial', description: 'Entraînez l’isolement de cible, la lecture de motifs, le contraste et la profondeur.' },
    ],
    faqHeading: 'Questions sur les exercices visuels',
    cta: 'Commencer un exercice visuel',
  },
};

const FOLDER_TO_STORAGE_KEY = {
  'visual-search': 'skilldrills_visual_search_v4',
  'no-go': 'skilldrills_visual_go_nogo_v5',
  'light-reaction': 'skilldrills_visual_light_reaction_v5',
  'moving-target': 'skilldrills_visual_moving_target_v5',
  'pursuit-tracker': 'skilldrills_visual_pursuit_tracker_v2',
  'multiple-targets': 'skilldrills_visual_multiple_targets_v1',
  'distance-judgment': 'skilldrills_visual_distance_judgment_v4',
  'entropic-grid': 'skilldrills_visual_entropic_grid_v4',
  'rhythm-anomaly': 'rhythmAnomalyBestScore_v8',
};

export default function VisualDrillsClient({ faqs = [] }) {
  const { locale, localizeHref, t } = useTranslation();
  const hubCopy = VISUAL_HUB_COPY[locale] ?? VISUAL_HUB_COPY.en;
  const [isClient, setIsClient] = useState(false);
  const [drillLevels, setDrillLevels] = useState({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  const drills = DRILLS.filter(d => d.category === 'visual');

  useEffect(() => {
    if (!isClient) return;
    try {
      const levels = {};
      drills.forEach(d => {
        const override = FOLDER_TO_STORAGE_KEY[d.folderName];
        const slug = d.folderName.replace(/-/g, '_');
        const keys = override ? [override, override.replace(/_v\d+$/, '_v4'), override.replace(/_v\d+$/, '')] : [
          `skilldrills_visual_${slug}_v5`,
          `skilldrills_visual_${slug}_v4`,
          `skilldrills_visual_${slug}_v3`,
          `skilldrills_${slug}`,
        ];
        for (const k of keys) {
          const raw = localStorage.getItem(k);
          if (raw) {
            try {
              const parsed = JSON.parse(raw);
              if (parsed && typeof parsed === 'object') {
                if (typeof parsed.bestLevel === 'number') {
                  levels[d.folderName] = `Lv. ${parsed.bestLevel}`;
                  break;
                } else if (typeof parsed.bestScore === 'number' && parsed.bestScore > 0) {
                  levels[d.folderName] = `Score: ${parsed.bestScore}`;
                  break;
                } else if (typeof parsed.totalSessions === 'number' && parsed.totalSessions > 0) {
                  levels[d.folderName] = `${parsed.totalSessions} ${parsed.totalSessions === 1 ? 'run' : 'runs'}`;
                  break;
                }
              } else if (typeof parsed === 'number' && parsed > 0) {
                levels[d.folderName] = `Best: ${parsed}`;
                break;
              }
            } catch {
              const num = parseInt(raw, 10);
              if (!isNaN(num) && num > 0) {
                levels[d.folderName] = `Best: ${num}`;
                break;
              }
            }
          }
        }
      });
      setDrillLevels(levels);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient]);

  // Interest-ordered list for the picker: the drill most people want first,
  // rather than four sector grids the visitor has to scroll past.
  const orderedVisualDrills = sortByInterest(drills);

  return (
    <div className="min-h-screen bg-canvas text-ink-1 font-sans selection:bg-fuchsia-500/30 relative overflow-hidden">

      {/* Layered premium background: hub-tinted mesh blobs + grid + grain */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-fuchsia-600/[0.12] rounded-full blur-[150px]" />
        <div className="absolute top-[30%] -right-40 w-[480px] h-[480px] bg-pink-500/[0.08] rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.3]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 10%, black 40%, transparent 90%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-ink-3 font-mono">
            <li>
              <Link href={localizeHref('/')} className="flex items-center gap-1.5 hover:text-fuchsia-400 transition-colors">
                <Home className="w-4 h-4" />
                <span>{t('ui.nav.hq', 'HQ')}</span>
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-hairline-2" /></li>
            <li>
              <Link href={hasLocalizedRoute(locale, '/drills') ? localizeHref('/drills') : '/drills'} className="hover:text-fuchsia-400 transition-colors">
                {t('ui.nav.drills', 'DRILLS')}
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5 text-hairline-2" /></li>
            <li>
              <span className="text-fuchsia-400 font-semibold uppercase tracking-wider" aria-current="page">
                {t('header.visual', 'VISUAL TRAINING')}
              </span>
            </li>
          </ol>
        </nav>

        {/* Page heading */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink-1">
            {hubCopy.h1}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-ink-2 leading-relaxed">
            {hubCopy.description}
          </p>
        </div>

        {/* Drill picker: one drill at a time, arrows to move, "View all" for the grid */}
        <Reveal>
          <DrillCarousel
            headingId="visual-drills"
            heading={hubCopy.drillsHeading}
            accent="fuchsia"
            icon={Eye}
            showcase
            allLabel={t('ui.viewAll', 'View all')}
            drills={orderedVisualDrills.map((drill) => {
              const fallbackTagline = getDrillTagline(drill.href, drill.description);
              const localized = getLocalizedDrill(drill.href, locale, drill.name, fallbackTagline);
              return {
                href: drill.href,
                name: localized.name,
                tagline: localized.tagline,
                difficulty: drill.difficulty,
                duration: drill.duration,
              };
            })}
          />
        </Reveal>

        {/* Visual Training Domains - 3 Category Cards with Crawlable Links */}
        <Reveal className="mb-14">
          <div className="bg-surface-1 border border-hairline rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-fuchsia-400" />
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-ink-1">
                {hubCopy.domainsHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {visualCategories.map((cat) => {
                const Icon = cat.icon;
                const drillsInCat = drills.filter((d) => cat.drillNames.includes(d.folderName));
                return (
                  <div
                    key={cat.id}
                    className="bg-surface-2/80 border border-hairline rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold tracking-tight text-ink-1">
                            {hubCopy.categories[cat.id].name}
                          </h3>
                          <span className="text-xs font-medium text-fuchsia-400">
                            {drillsInCat.length} {drillsInCat.length === 1 ? hubCopy.drill : hubCopy.drills}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed mb-4">
                        {hubCopy.categories[cat.id].description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-hairline">
                      {drillsInCat.map((drill) => {
                        const href = hasLocalizedRoute(locale, drill.href)
                          ? localizeHref(drill.href)
                          : drill.href;
                        const fallbackTagline = getDrillTagline(drill.href, drill.description);
                        const localized = getLocalizedDrill(drill.href, locale, drill.name, fallbackTagline);
                        return (
                          <Link
                            key={drill.href}
                            href={href}
                            className="group/item flex items-center justify-between p-2 rounded-xl bg-surface-1/60 hover:bg-fuchsia-500/10 border border-hairline hover:border-fuchsia-500/30 transition-all text-sm"
                          >
                            <span className="font-medium text-ink-1 group-hover/item:text-fuchsia-300 transition-colors truncate pr-2">
                              {localized.name}
                            </span>
                            <span className="text-xs font-medium text-ink-3 group-hover/item:text-fuchsia-400 shrink-0 flex items-center gap-1">
                              {drill.duration}
                              <ChevronRight className="w-3 h-3 transition-transform group-hover/item:translate-x-0.5" />
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Engine & Hardware Optimization */}
        <Reveal className="mb-14">
          <div className="rounded-3xl bg-surface-1/70 border border-hairline p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-fuchsia-400" />
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-ink-1">
                {hubCopy.engineHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-2/80 border border-hairline rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-ink-1 mb-1.5">
                  {hubCopy.engine[0].title}
                </h3>
                <p className="text-2xs text-ink-3 leading-relaxed">
                  {hubCopy.engine[0].description}
                </p>
              </div>

              <div className="bg-surface-2/80 border border-hairline rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-3">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-ink-1 mb-1.5">
                  {hubCopy.engine[1].title}
                </h3>
                <p className="text-2xs text-ink-3 leading-relaxed">
                  {hubCopy.engine[1].description}
                </p>
              </div>

              <div className="bg-surface-2/80 border border-hairline rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-fuchsia-500/10 border border-fuchsia-500/20 text-fuchsia-400 flex items-center justify-center mb-3">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-ink-1 mb-1.5">
                  {hubCopy.engine[2].title}
                </h3>
                <p className="text-2xs text-ink-3 leading-relaxed">
                  {hubCopy.engine[2].description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Frequently Asked Questions (SEO / AEO / GEO) */}
        {faqs?.length > 0 && (
          <Reveal className="mb-14">
            <div className="rounded-3xl bg-surface-1/70 border border-hairline p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="w-5 h-5 text-fuchsia-400" />
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-ink-1">
                  {hubCopy.faqHeading}
                </h2>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-surface-2/80 border border-hairline rounded-2xl p-5 flex flex-col justify-start">
                    <dt className="font-bold text-ink-1 text-sm font-sans flex items-start gap-2.5">
                      <span className="text-fuchsia-400 font-mono text-xs font-bold shrink-0 mt-0.5">
                        Q{i + 1}.
                      </span>
                      <span>{f.q}</span>
                    </dt>
                    <dd className="mt-2.5 text-xs text-ink-3 leading-relaxed pl-6 font-sans">
                      {f.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        )}

        <AdjacentHubs currentCat="visual" />

        {/* Back Link */}
        <div className="mt-12 border-t border-hairline pt-6">
          <Link 
            href={hasLocalizedRoute(locale, '/drills') ? localizeHref('/drills') : '/drills'}
            className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold text-ink-3 hover:text-ink-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('ui.returnToAllSectors', 'Return to All Sectors')}
          </Link>
        </div>

        <StickyMobileCta
          href={hasLocalizedRoute(locale, '/drills/visual/reaction-speed/light-reaction') ? localizeHref('/drills/visual/reaction-speed/light-reaction') : '/drills/visual/reaction-speed/light-reaction'}
          label={hubCopy.cta}
          categoryName={t('header.visual', 'Visual')}
        />
        <SiteFooter />
      </div>
    </div>
  );
}
