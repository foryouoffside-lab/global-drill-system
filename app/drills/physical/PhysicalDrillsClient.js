'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Zap,
  Dumbbell,
  Activity,
  Hand,
  Heart,
  Home,
  ChevronRight,
  Sparkles,
  Layers,
  Compass,
  Gauge
} from 'lucide-react';
import { DRILLS } from '@/lib/drillsRegistry';
import { getDrillTagline, sortByInterest } from '@/lib/drillCatalog';
import { getDifficultyRank } from '@/lib/scoringEngine';
import { isIdleFrameSkippable } from '@/lib/performance';
import SiteFooter from '@/components/SiteFooter';
import Reveal from '@/components/Reveal';
import AdjacentHubs from '@/components/AdjacentHubs';
import DrillCarousel from '@/components/drill/DrillCarousel';
import StickyMobileCta from '@/components/StickyMobileCta';
import { useTranslation } from '@/lib/i18n/useTranslation';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { hasLocalizedRoute } from '@/lib/i18n/locales';

const FOLDER_TO_STORAGE_KEY = {
  'dynamic-grid-evasion': 'skilldrills_physical_grid_evasion_v3',
  'peripheral-threat-sweeper': 'skilldrills_physical_peripheral_sweeper_v3',
  'reaction-chain': 'skilldrills_reaction_chain_v2',
};

// Tactical metadata & categorized discipline taxonomy for Physical / Agility skills
const PHYSICAL_METADATA = {
  'stability-challenge': {
    discipline: 'balance',
    disciplineName: 'Balance & Stability',
    focus: 'Wind-Force Equilibrium',
    skills: ['Centering', 'Force Resistance'],
    icon: Activity,
  },
  'complex-pattern': {
    discipline: 'coordination',
    disciplineName: 'Coordination & Pathing',
    focus: 'Memory Path Reconstruction',
    skills: ['Spatial Memory', 'Path Tracing'],
    icon: Compass,
  },
  'cross-body-movement': {
    discipline: 'coordination',
    disciplineName: 'Coordination & Pathing',
    focus: 'Cross-Screen Coordinate Intercept',
    skills: ['Vector Tracking', 'Bilateral Reach'],
    icon: Hand,
  },
  'dynamic-grid-evasion': {
    discipline: 'coordination',
    disciplineName: 'Coordination & Pathing',
    focus: '3x3 Rapid Directional Dodge',
    skills: ['WASD Footwork', 'Grid Evasion'],
    icon: Gauge,
  },
  'agility-ladder': {
    discipline: 'fitness',
    disciplineName: 'Agility & Fitness',
    focus: 'Scrolling Rung Cadence',
    skills: ['Alternating Cadence', 'Rhythm'],
    icon: Heart,
  },
  'jump-sequence': {
    discipline: 'fitness',
    disciplineName: 'Agility & Fitness',
    focus: 'Charge & Parabolic Steering',
    skills: ['Impulse Control', 'Aerial Vector'],
    icon: Dumbbell,
  },
  'speed-drill': {
    discipline: 'fitness',
    disciplineName: 'Agility & Fitness',
    focus: 'Vanishing Target Acceleration',
    skills: ['Burst Speed', 'Shrinking Rings'],
    icon: Zap,
  },
  'drop-catch': {
    discipline: 'reflex',
    disciplineName: 'Reflex & Evasion',
    focus: 'Falling Target Catch & Decoy Avoidance',
    skills: ['Stimulus Discrimination', 'Drop Timing'],
    icon: Zap,
  },
  'peripheral-threat-sweeper': {
    discipline: 'reflex',
    disciplineName: 'Reflex & Evasion',
    focus: 'Perimeter Radial Scan',
    skills: ['Peripheral Field', 'Threat Intercept'],
    icon: Activity,
  },
  'quick-dodge': {
    discipline: 'reflex',
    disciplineName: 'Reflex & Evasion',
    focus: 'Homing Threat Chaos Evasion',
    skills: ['Dynamic Evasion', 'Collision Avoidance'],
    icon: Gauge,
  },
  'reaction-chain': {
    discipline: 'reflex',
    disciplineName: 'Reflex & Evasion',
    focus: 'Deceleration & Impulse Arrest',
    skills: ['Target Snapping', 'Node Freeze'],
    icon: Zap,
  },
};

const physDrills = DRILLS.filter((d) => d.category === 'physical');

const physicalCategories = [
  {
    id: 'reflex',
    name: 'Reflex & Evasion',
    icon: Zap,
    description: 'Visual trigger reaction, stimulus discrimination, and dynamic threat evasion',
    drills: physDrills
      .filter((d) => PHYSICAL_METADATA[d.folderName]?.discipline === 'reflex')
      .sort((a, b) => getDifficultyRank(a.difficulty) - getDifficultyRank(b.difficulty)),
  },
  {
    id: 'fitness',
    name: 'Agility & Fitness',
    icon: Dumbbell,
    description: 'Movement cadence, alternating footwork rhythm, and acceleration bursts',
    drills: physDrills
      .filter((d) => PHYSICAL_METADATA[d.folderName]?.discipline === 'fitness')
      .sort((a, b) => getDifficultyRank(a.difficulty) - getDifficultyRank(b.difficulty)),
  },
  {
    id: 'coordination',
    name: 'Coordination & Pathing',
    icon: Hand,
    description: 'Cross-body bilateral reaching, spatial memory pathing, and grid evasion',
    drills: physDrills
      .filter((d) => PHYSICAL_METADATA[d.folderName]?.discipline === 'coordination')
      .sort((a, b) => getDifficultyRank(a.difficulty) - getDifficultyRank(b.difficulty)),
  },
  {
    id: 'balance',
    name: 'Balance & Stability',
    icon: Activity,
    description: 'Continuous force equilibrium, center-of-mass corrections, and motor steadiness',
    drills: physDrills
      .filter((d) => PHYSICAL_METADATA[d.folderName]?.discipline === 'balance')
      .sort((a, b) => getDifficultyRank(a.difficulty) - getDifficultyRank(b.difficulty)),
  },
];

// Native hub copy is authored per locale from the category research note.
// It is intentionally separate from the drill-name registry: a category query
// needs native market phrasing, not a word-for-word translation of English UI.
const PHYSICAL_HUB_COPY = {
  en: {
    h1: 'Physical Reflex & Agility Drills',
    description: 'Choose from 11 free browser drills for reaction time, footwork, balance, coordination, and fast target decisions. No sign-up; scores stay in your browser.',
    drillsHeading: 'Choose a physical drill',
    domainsHeading: 'Choose a training focus',
    drill: 'Drill',
    drills: 'Drills',
    categories: {
      reflex: { name: 'Reflex & Evasion', description: 'React to visual cues, stop impulses, and avoid moving threats.' },
      fitness: { name: 'Agility & Fitness', description: 'Train footwork rhythm, jump timing, and rapid target acquisition.' },
      coordination: { name: 'Coordination & Pathing', description: 'Practice cross-body reach, spatial paths, and grid movement.' },
      balance: { name: 'Balance & Stability', description: 'Build cursor steadiness and continuous force-centering control.' },
    },
    engineHeading: 'What these browser drills measure',
    engine: [
      { title: 'Dynamic evasion timing', description: 'Train visual choice, stopping control, and fast responses to changing target paths.' },
      { title: 'Equilibrium and control', description: 'Practice steady tracking and continuous corrections against simulated force and drift.' },
      { title: 'Bilateral agility rhythm', description: 'Build alternating timing and cross-body path selection across compact movement grids.' },
    ],
    faqHeading: 'Questions about physical drills',
    cta: 'Start a physical drill',
  },
  ja: {
    h1: '反応速度・敏捷性トレーニング',
    description: '反応速度テスト、フットワーク、リズムジャンプ、バランス、手と目の協調をブラウザで練習できる無料の11ドリル。気になる種目を選び、記録はブラウザ内に保存します。',
    drillsHeading: 'フィジカルドリルを選ぶ',
    domainsHeading: '練習する能力を選ぶ',
    drill: 'ドリル',
    drills: 'ドリル',
    categories: {
      reflex: { name: '反応・回避', description: '視覚刺激への反応、衝動の停止、動く脅威の回避を練習します。' },
      fitness: { name: '敏捷性・フィットネス', description: 'フットワークのリズム、ジャンプのタイミング、素早い標的選択を鍛えます。' },
      coordination: { name: '協調運動・経路', description: '左右をまたぐ操作、空間経路、グリッド移動を練習します。' },
      balance: { name: 'バランス・安定性', description: 'カーソルの安定、中心合わせ、連続的な姿勢調整を練習します。' },
    },
    engineHeading: 'ブラウザで測る運動スキル',
    engine: [
      { title: '回避のタイミング', description: '視覚的な選択、停止操作、変化する標的への素早い反応を鍛えます。' },
      { title: '平衡感覚と操作', description: '力やずれを想定した画面上で、安定した追従と連続修正を練習します。' },
      { title: '左右の敏捷性リズム', description: '小さな移動グリッドで、左右交互のタイミングと経路選択を高めます。' },
    ],
    faqHeading: 'フィジカルドリルのよくある質問',
    cta: 'ドリルを始める',
  },
  ko: {
    h1: '반응속도·민첩성 훈련',
    description: '반응속도 테스트, 순발력, 발놀림, 균형감각과 손눈협응을 브라우저에서 연습하는 무료 11개 드릴입니다. 원하는 종목을 선택하고 기록은 브라우저에만 저장됩니다.',
    drillsHeading: '피지컬 드릴 선택',
    domainsHeading: '훈련 영역 선택',
    drill: '드릴',
    drills: '드릴',
    categories: {
      reflex: { name: '반응·회피', description: '시각 신호에 반응하고 충동을 멈추며 움직이는 위협을 피합니다.' },
      fitness: { name: '민첩성·체력', description: '발놀림 리듬, 점프 타이밍과 빠른 목표 선택을 연습합니다.' },
      coordination: { name: '협응·경로', description: '교차 동작, 공간 경로와 그리드 이동을 연습합니다.' },
      balance: { name: '균형·안정성', description: '커서 안정, 중심 맞추기와 연속적인 조절 능력을 기릅니다.' },
    },
    engineHeading: '브라우저에서 측정하는 운동 능력',
    engine: [
      { title: '동적 회피 타이밍', description: '시각 선택, 멈춤 조절과 변하는 목표 경로에 대한 빠른 반응을 연습합니다.' },
      { title: '균형과 조절', description: '가상의 힘과 흔들림에 맞춰 안정적으로 추적하고 계속 보정합니다.' },
      { title: '양측 민첩성 리듬', description: '작은 이동 그리드에서 좌우 교대 타이밍과 경로 선택을 기릅니다.' },
    ],
    faqHeading: '피지컬 드릴 자주 묻는 질문',
    cta: '드릴 시작하기',
  },
  de: {
    h1: 'Reaktion, Agilität & Koordination trainieren',
    description: 'Kostenlose Browser-Drills für Reaktionszeit, Fußarbeit, Gleichgewicht, Koordination und schnelle Zielentscheidungen. Wählen Sie aus 11 interaktiven Übungen; Ergebnisse bleiben im Browser.',
    drillsHeading: 'Einen Physical-Drill wählen',
    domainsHeading: 'Trainingsbereich wählen',
    drill: 'Drill',
    drills: 'Drills',
    categories: {
      reflex: { name: 'Reaktion & Ausweichen', description: 'Auf visuelle Signale reagieren, Impulse stoppen und bewegte Gefahren vermeiden.' },
      fitness: { name: 'Agilität & Fitness', description: 'Fußarbeitsrhythmus, Sprungtiming und schnelle Zielauswahl trainieren.' },
      coordination: { name: 'Koordination & Wege', description: 'Überkreuzbewegungen, räumliche Wege und Gitterbewegungen üben.' },
      balance: { name: 'Gleichgewicht & Stabilität', description: 'Ruhige Steuerung, Zentrierung und laufende Korrekturen entwickeln.' },
    },
    engineHeading: 'Was diese Browser-Drills messen',
    engine: [
      { title: 'Dynamisches Ausweichen', description: 'Visuelle Auswahl, Bremskontrolle und Reaktion auf wechselnde Zielwege trainieren.' },
      { title: 'Gleichgewicht und Kontrolle', description: 'Stabiles Tracking und laufende Korrekturen bei simuliertem Druck und Drift üben.' },
      { title: 'Beidseitiger Agilitätsrhythmus', description: 'Wechselnde Schrittzeiten und Wegauswahl in kompakten Bewegungsrastern verbessern.' },
    ],
    faqHeading: 'Fragen zu Physical-Drills',
    cta: 'Physical-Drill starten',
  },
  pt: {
    h1: 'Treinos de Agilidade e Reflexo',
    description: '11 treinos gratuitos no navegador para tempo de reação, agilidade, equilíbrio, coordenação motora e decisão rápida sobre alvos. Escolha um exercício; seus resultados ficam no navegador.',
    drillsHeading: 'Escolha um treino físico',
    domainsHeading: 'Escolha o foco do treino',
    drill: 'treino',
    drills: 'treinos',
    categories: {
      reflex: { name: 'Reflexo e esquiva', description: 'Reaja a sinais visuais, freie impulsos e evite ameaças em movimento.' },
      fitness: { name: 'Agilidade e condicionamento', description: 'Treine ritmo dos pés, tempo de salto e seleção rápida de alvos.' },
      coordination: { name: 'Coordenação e trajetórias', description: 'Pratique movimentos cruzados, caminhos espaciais e deslocamentos em grade.' },
      balance: { name: 'Equilíbrio e estabilidade', description: 'Desenvolva controle firme, centralização e correções contínuas.' },
    },
    engineHeading: 'O que estes treinos no navegador medem',
    engine: [
      { title: 'Tempo de esquiva dinâmica', description: 'Treine escolha visual, controle da parada e resposta a trajetórias que mudam.' },
      { title: 'Equilíbrio e controle', description: 'Pratique rastreamento estável e correções contínuas contra força e desvio simulados.' },
      { title: 'Ritmo de agilidade bilateral', description: 'Melhore alternância dos lados e escolha de trajetórias em grades compactas.' },
    ],
    faqHeading: 'Dúvidas sobre treinos físicos',
    cta: 'Começar um treino',
  },
  es: {
    h1: 'Entrenamiento de Reflejos y Agilidad',
    description: '11 ejercicios gratuitos en el navegador para tiempo de reacción, agilidad, equilibrio, coordinación motriz y decisiones rápidas ante objetivos. Elige una prueba y guarda tus marcas localmente.',
    drillsHeading: 'Elige un ejercicio físico',
    domainsHeading: 'Elige el foco del entrenamiento',
    drill: 'ejercicio',
    drills: 'ejercicios',
    categories: {
      reflex: { name: 'Reflejos y evasión', description: 'Responde a señales visuales, frena impulsos y evita amenazas en movimiento.' },
      fitness: { name: 'Agilidad y condición física', description: 'Entrena el ritmo de pies, el tiempo de salto y la selección rápida de objetivos.' },
      coordination: { name: 'Coordinación y trayectorias', description: 'Practica movimientos cruzados, recorridos espaciales y desplazamientos en cuadrícula.' },
      balance: { name: 'Equilibrio y estabilidad', description: 'Mejora el control preciso, el centrado y las correcciones continuas.' },
    },
    engineHeading: 'Qué miden estos ejercicios en el navegador',
    engine: [
      { title: 'Tiempo de evasión dinámica', description: 'Entrena la elección visual, el frenado y la respuesta ante trayectorias cambiantes.' },
      { title: 'Equilibrio y control', description: 'Practica el seguimiento estable y las correcciones continuas frente a fuerza y deriva simuladas.' },
      { title: 'Ritmo de agilidad bilateral', description: 'Mejora la alternancia izquierda-derecha y la elección de recorridos en cuadrículas compactas.' },
    ],
    faqHeading: 'Preguntas sobre los ejercicios físicos',
    cta: 'Empezar un ejercicio',
  },
  fr: {
    h1: 'Entraînement des réflexes et de la vivacité',
    description: '11 exercices gratuits dans le navigateur pour le temps de réaction, la vivacité, l’équilibre, la coordination motrice et la décision rapide face aux cibles. Choisissez un test; vos scores restent dans le navigateur.',
    drillsHeading: 'Choisissez un exercice physique',
    domainsHeading: 'Choisissez votre objectif',
    drill: 'exercice',
    drills: 'exercices',
    categories: {
      reflex: { name: 'Réflexes et esquive', description: 'Réagissez aux signaux visuels, freinez vos impulsions et évitez les menaces mobiles.' },
      fitness: { name: 'Vivacité et condition physique', description: 'Travaillez le rythme des appuis, le timing des sauts et le choix rapide des cibles.' },
      coordination: { name: 'Coordination et trajectoires', description: 'Pratiquez les gestes croisés, les parcours spatiaux et les déplacements sur grille.' },
      balance: { name: 'Équilibre et stabilité', description: 'Développez la précision du contrôle, le centrage et les corrections continues.' },
    },
    engineHeading: 'Ce que mesurent ces exercices dans le navigateur',
    engine: [
      { title: 'Timing d’esquive dynamique', description: 'Travaillez le choix visuel, le freinage et la réponse aux trajectoires changeantes.' },
      { title: 'Équilibre et contrôle', description: 'Pratiquez le suivi stable et les corrections continues face à une force et une dérive simulées.' },
      { title: 'Rythme d’agilité bilatérale', description: 'Améliorez l’alternance gauche-droite et le choix de trajectoire sur des grilles compactes.' },
    ],
    faqHeading: 'Questions sur les exercices physiques',
    cta: 'Commencer un exercice',
  },
};

// Flat, interest-ordered list for the carousel picker
const orderedPhysicalDrills = sortByInterest(
  physicalCategories.flatMap((category) =>
    category.drills.map((drill) => ({ ...drill, icon: category.icon }))
  )
);

export default function PhysicalDrillsClient({ faqs = [] }) {
  const { locale, localizeHref, t } = useTranslation();
  const hubCopy = PHYSICAL_HUB_COPY[locale] ?? PHYSICAL_HUB_COPY.en;
  const [isClient, setIsClient] = useState(false);
  const [drillLevels, setDrillLevels] = useState({});
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Retrieve saved personal bests from localStorage
  useEffect(() => {
    if (!isClient) return;
    try {
      const levels = {};
      const allPhys = DRILLS.filter((d) => d.category === 'physical');
      allPhys.forEach((d) => {
        const override = FOLDER_TO_STORAGE_KEY[d.folderName];
        const keys = override
          ? [override]
          : [
              `skilldrills_physical_${d.folderName.replace(/-/g, '_')}_v3`,
              `skilldrills_physical_${d.folderName.replace(/-/g, '_')}_v2`,
              `skilldrills_${d.folderName.replace(/-/g, '_')}`,
            ];
        for (const k of keys) {
          const raw = localStorage.getItem(k);
          if (raw) {
            try {
              const parsed = JSON.parse(raw);
              if (parsed && parsed.bestLevel) {
                levels[d.folderName] = parsed.bestLevel;
                break;
              }
            } catch {}
          }
        }
      });
      setDrillLevels(levels);
    } catch {}
  }, [isClient]);

  // Subtle speed streams background canvas
  useEffect(() => {
    if (!isClient) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = performance.now();

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const streams = [];
    const count = 18;
    for (let i = 0; i < count; i++) {
      streams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 80 + 40,
        speed: Math.random() * 2.5 + 1.5,
        opacity: Math.random() * 0.12 + 0.04,
      });
    }

    const draw = (time) => {
      if (isIdleFrameSkippable(false, time, lastTime)) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      streams.forEach((s) => {
        ctx.strokeStyle = `rgba(251, 113, 133, ${s.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.length, s.y + s.length * 0.5);
        ctx.stroke();

        s.x += s.speed;
        s.y += s.speed * 0.5;

        if (s.x > canvas.width || s.y > canvas.height) {
          s.x = -s.length;
          s.y = Math.random() * canvas.height - s.length;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, [isClient]);



  return (
    <div className="min-h-screen bg-canvas text-ink-1 font-sans selection:bg-rose-500/30 selection:text-rose-200 relative overflow-hidden">
      {/* Kinetic velocity stream canvas */}
      <canvas
        style={{ touchAction: 'none' }}
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25"
      />

      {/* Layered ambient lighting: Rose + Amber glow + subtle grid mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[480px] bg-rose-600/[0.10] rounded-full blur-[160px]" />
        <div className="absolute top-[25%] -right-40 w-[460px] h-[460px] bg-orange-500/[0.07] rounded-full blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 85% 60% at 50% 15%, black 40%, transparent 90%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-mono text-ink-3 uppercase tracking-wider">
            <li>
              <Link
                href={localizeHref('/')}
                className="flex items-center gap-1.5 hover:text-rose-400 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>{t('ui.nav.hq', 'HQ')}</span>
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3 text-hairline-2" /></li>
            <li>
              <Link
                href={hasLocalizedRoute(locale, '/drills') ? localizeHref('/drills') : '/drills'}
                className="hover:text-rose-400 transition-colors"
              >
                {t('ui.nav.drills', 'DRILLS')}
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3 text-hairline-2" /></li>
            <li>
              <span className="text-rose-400 font-bold" aria-current="page">
                {t('header.physical', 'PHYSICAL')}
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
            {hubCopy.description || t(
              'hubs.physical.desc',
              'Reflex and coordination drills measure how fast you can react to something appearing, and how accurately you can steer, stop and sequence a movement once you have. Simple visual reaction costs about 200–250 ms before any of that starts (Woods et al., 2015), and vision needs roughly 100–150 ms more to correct a movement already under way (Woodworth, 1899) — which is why the faster drills reward prediction over reaction. These run in a browser through a mouse or touchscreen, so they train the timing and the decision rather than physical fitness. Free, no sign-up, and every score stays in your browser.'
            )}
          </p>
        </div>

        {/* Drill Matrix - Swipeable Carousel */}
        <Reveal>
          <DrillCarousel
            headingId="physical-drills"
            heading={hubCopy.drillsHeading}
            accent="rose"
            icon={Activity}
            showcase
            allLabel={t('ui.viewAll', 'View all')}
            drills={orderedPhysicalDrills.map((drill) => {
              const fallbackTagline = getDrillTagline(drill.href, drill.description);
              const localized = getLocalizedDrill(drill.href, locale, drill.name, fallbackTagline);
              return {
                href: drill.href,
                name: localized.name,
                tagline: localized.tagline,
                difficulty: drill.difficulty,
                duration: drill.duration,
                icon: drill.icon,
                badge: drillLevels[drill.folderName] ? `Lv. ${drillLevels[drill.folderName]}` : null,
              };
            })}
          />
        </Reveal>

        {/* Physical Training Domains - 4 Category Cards with Crawlable Links */}
        <Reveal className="mb-14">
          <div className="bg-surface-1 border border-hairline rounded-3xl p-6 sm:p-8 relative overflow-hidden backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Layers className="w-5 h-5 text-rose-400" />
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-ink-1">
                {hubCopy.domainsHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {physicalCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={cat.id}
                    className="bg-surface-2/80 border border-hairline rounded-2xl p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold tracking-tight text-ink-1">
                            {hubCopy.categories[cat.id].name}
                          </h3>
                          <span className="text-xs font-medium text-rose-400">
                            {cat.drills.length} {cat.drills.length === 1 ? hubCopy.drill : hubCopy.drills}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-ink-2 leading-relaxed mb-4">
                        {hubCopy.categories[cat.id].description}
                      </p>
                    </div>

                    <div className="space-y-2 pt-3 border-t border-hairline">
                      {cat.drills.map((drill) => {
                        const href = hasLocalizedRoute(locale, drill.href)
                          ? localizeHref(drill.href)
                          : drill.href;
                        const fallbackTagline = getDrillTagline(drill.href, drill.description);
                        const localized = getLocalizedDrill(drill.href, locale, drill.name, fallbackTagline);
                        return (
                          <Link
                            key={drill.href}
                            href={href}
                            className="group/item flex items-center justify-between p-2 rounded-xl bg-surface-1/60 hover:bg-rose-500/10 border border-hairline hover:border-rose-500/30 transition-all text-sm"
                          >
                            <span className="font-medium text-ink-1 group-hover/item:text-rose-300 transition-colors truncate pr-2">
                              {localized.name}
                            </span>
                            <span className="text-xs font-medium text-ink-3 group-hover/item:text-rose-400 shrink-0 flex items-center gap-1">
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

        {/* Biomechanics & Kinematic Specifications */}
        <Reveal className="mb-14">
          <div className="rounded-3xl bg-surface-1/70 border border-hairline p-6 sm:p-8 backdrop-blur-xl shadow-xl">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-rose-400" />
              <h2 className="text-base sm:text-lg font-semibold tracking-tight text-ink-1">
                {hubCopy.engineHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-surface-2/80 border border-hairline rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-ink-1 mb-1.5">
                  {hubCopy.engine[0].title}
                </h3>
                <p className="text-2xs text-ink-3 leading-relaxed">
                  {hubCopy.engine[0].description}
                </p>
              </div>

              <div className="bg-surface-2/80 border border-hairline rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                  <Activity className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold tracking-tight text-ink-1 mb-1.5">
                  {hubCopy.engine[1].title}
                </h3>
                <p className="text-2xs text-ink-3 leading-relaxed">
                  {hubCopy.engine[1].description}
                </p>
              </div>

              <div className="bg-surface-2/80 border border-hairline rounded-2xl p-5">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mb-3">
                  <Gauge className="w-4 h-4" />
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
                <Sparkles className="w-5 h-5 text-rose-400" />
                <h2 className="text-base sm:text-lg font-semibold tracking-tight text-ink-1">
                  {hubCopy.faqHeading}
                </h2>
              </div>

              <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-surface-2/80 border border-hairline rounded-2xl p-5 flex flex-col justify-start">
                    <dt className="font-bold text-ink-1 text-sm font-sans flex items-start gap-2.5">
                      <span className="text-rose-400 font-mono text-xs font-bold shrink-0 mt-0.5">
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

        {/* Clean Adjacent Hubs Navigation */}
        <AdjacentHubs currentCat="physical" />

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
          href={hasLocalizedRoute(locale, '/drills/physical/reflex-training/quick-dodge') ? localizeHref('/drills/physical/reflex-training/quick-dodge') : '/drills/physical/reflex-training/quick-dodge'}
          label={hubCopy.cta}
          categoryName={t('header.physical', 'Physical')}
        />
      </div>

      <SiteFooter />
    </div>
  );
}
