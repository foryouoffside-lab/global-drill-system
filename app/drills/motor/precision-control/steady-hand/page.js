import SteadyHandClient from './SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// Primary intent: steady hand game, mouse precision test, cursor control.
// ============================================================

export const metadata = {
  title: 'Steady Hand Game | Mouse Precision Test | SkillDrills',
  description: 'Free browser test for cursor precision, steady-hand control, and narrow-path tracing. Each lap in a row adds more bends to the path.',
  keywords: [
    'steady hand game', 'mouse precision test', 'cursor control test',
    'mouse path tracing', 'hand steadiness test', 'fine motor control test mouse',
    'mouse steadiness drill', 'mouse maze game', 'corridor tracing game',
    'narrow path mouse test', 'smooth cursor control', 'hand stability training',
  ],
  openGraph: {
    title: 'Steady Hand Game | Mouse Precision Test | SkillDrills',
    description: 'Free browser test for cursor precision, steady-hand control, and narrow-path tracing. Each lap in a row adds more bends to the path.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steady Hand Game | Mouse Precision Test | SkillDrills',
    description: 'Free browser test for cursor precision, steady-hand control, and narrow-path tracing. Each lap in a row adds more bends to the path.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/' },
    { '@type': 'ListItem', position: 2, name: 'Motor Training', item: 'https://skilldrills.online/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Precision Control', item: 'https://skilldrills.online/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Steady Hand Game', item: 'https://skilldrills.online/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'en-US',
  name: 'Steady Hand Game – Mouse Path Tracing Drill',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based steady hand game and mouse path tracing drill. Guide the cursor along a winding glowing path without slipping off it; each lap in a row adds more bends and bigger swings.',
  url: 'https://skilldrills.online/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-20',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'en-US',
  name: 'Steady Hand Circuit Trainer',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires modern web browser with HTML5 Canvas and continuous high-polling pointer support',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://skilldrills.online/drills/motor/precision-control/steady-hand',
  dateModified: '2026-09-20',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'en-US',
  name: 'Steady Hand Game & Motor Precision Drill',
  url: 'https://skilldrills.online/drills/motor/precision-control/steady-hand',
  description: 'Online steady hand wire game for practising fine cursor precision along a winding path.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  dateModified: '2026-09-20',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en-US',
  dateModified: '2026-09-20',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Steady Hand Game and how does it measure motor control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You guide the cursor from the green start zone on the left along a winding glowing path to the goal zone on the right without slipping off it. It is not a reaction-time test but practice in smooth, steady cursor control with continuous visual correction. Your score is the number of laps you clear before the 45-second clock runs out.',
      },
    },
    {
      '@type': 'Question',
      name: 'What scientific law governs mouse movement through narrow corridors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Movement through constrained corridors is governed by the Accot-Zhai Steering Law (Accot & Zhai, 1997), an extension of Fitts's Law for trajectory tasks. The law dictates that steering time is proportional to the integral of trajectory length divided by corridor width: narrower paths mathematically force slower velocities to avoid boundary collisions.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my cursor reset to the beginning when touching the corridor wall?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every frame the drill measures the distance from the cursor to the centre line of the path. Between the start and goal zones, anything over 2.5 pixels counts as a wall touch: the cursor jumps back to the start, the error counter goes up by 1 and your streak drops to 0. The clock keeps running.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the drill get harder with each lap?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The tolerance (2.5 pixels either side of the centre line) never changes. With every lap in your current streak, the next path gets more bends (from 15 up to a maximum of 120 segments) and bigger up-and-down swings. A wall touch resets the streak to 0, so the next path flattens out again. Every cleared lap resets the clock to 45 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes hand tremor during precision mouse navigation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normal physiological tremor (8–12 Hz) is caused by synchronous firing of motor units and mechanical resonance in the limbs. In high-precision tasks, excessive muscle co-contraction (gripping the mouse too tightly), mental stress, or caffeine can amplify tremor amplitude, causing boundary wall strikes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What mouse grip and DPI settings are optimal for the steady hand drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A relaxed palm or claw grip that allows both forearm gliding and subtle finger micro-adjustments works best. Lower DPI settings (400 to 800 DPI) reduce cursor jitter caused by micro-tremors, allowing smoother closed-loop trajectory steering compared to ultra-high sensitivities.',
      },
    },
    {
      '@type': 'Question',
      name: "How does Woodworth's two-component model apply to path tracing?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Robert S. Woodworth (1899) demonstrated that aimed movements consist of an initial ballistic impulse followed by a current-control feedback phase. In corridor tracing, steering requires uninterrupted closed-loop current control where continuous visual feedback guides minor adjustments before reaching the wall boundary.",
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from the buzzer wire steady hand game?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic steady hand game is a physical circuit: you move a metal loop along a bent wire and a buzzer sounds on contact. This drill keeps the same idea on screen. You move the cursor along a corridor instead of a wire, a wall touch resets you to the start instead of sounding a buzzer, and each lap in a row adds more bends.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can steady hand drills help digital artists and gamers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drill resembles movements from digital illustration and esports tracking, where the pointer has to stay calm on a narrow line. How much that transfers varies from person to person. The game is not a medical tremor test.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I prevent muscle fatigue and hand cramping during long sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maintain an ergonomic arm posture with your elbow supported at roughly 90 degrees. Avoid pressing down heavily on the mouse skates, take 60-second micro-breaks between attempts, and consciously exhale during tight hairpin turns to relax your shoulder and forearm muscles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the Steady Hand Game work with a trackball or touchscreen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On a computer the drill reads mouse movement through Pointer Lock, so mice and trackballs work. On touch-only devices you steer by dragging your finger. Graphics tablet pens behave differently depending on the device. Only compare results from the same device.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'en-US',
  dateModified: '2026-09-20',
  name: 'How to Train Mouse Steadiness and Corridor Steering',
  description: 'Step-by-step protocol for staying on an increasingly winding path.',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/drills/motor/precision-control/steady-hand#step-1",
      name: 'Position Cursor in Start Zone',
      text: 'Click "Start Drill". After a 3-second countdown the cursor sits in the green start zone on the left and the 45-second clock starts. On a computer the pointer is locked (Pointer Lock); Esc ends the drill.',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/drills/motor/precision-control/steady-hand#step-2",
      name: 'Maintain Steady Velocity Along the Path',
      text: 'Glide smoothly along the glowing corridor path. Balance forward speed against precision so you clear the lap before the 45-second clock runs out.',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/drills/motor/precision-control/steady-hand#step-3",
      name: 'Anticipate Corners and Choke Points',
      text: 'Decelerate slightly before sharp hairpins to allow closed-loop visual adjustments, then accelerate through straight corridor segments.',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/drills/motor/precision-control/steady-hand#step-4",
      name: 'Reach the Goal Zone for the Next Lap',
      text: 'Reach the green goal zone on the right to complete the lap. The clock resets to 45 seconds, and the longer your streak, the more bends and swings the next path has.',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: 'What is the steady hand game, and how is it measured?',
    paragraphs: [
      'The steady hand game is a precision test where you guide a cursor along a winding corridor without touching its walls. In this free browser version the tolerance stays fixed at 2.5 px either side of the line, and every lap in a row adds more bends, so it tests how steadily you control the mouse and how well you slow down for tight turns. Your score is the laps you clear before the 45-second clock runs out.',
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same mouse and display rather than against someone else\'s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmark: {
    title: 'Steady Hand Game: SkillDrills Practice Bands',
    description: 'SkillDrills practice bands, not research norms or user data. They match the grade on the results screen: laps cleared and wall touches in one session.',
    columns: ['Grade', 'Rank Title', 'Laps', 'Wall Touches', 'Band'],
    rows: [
      { tier: 'S+', rank: 'Grandmaster Stability', stat: '8+ laps', errors: '0', band: 'SkillDrills practice band' },
      { tier: 'S', rank: 'Master Stability', stat: '6+ laps', errors: '1 or fewer', band: 'SkillDrills practice band' },
      { tier: 'A', rank: 'Diamond Precision', stat: '4+ laps', errors: '2 or fewer', band: 'SkillDrills practice band' },
      { tier: 'B', rank: 'Platinum Control', stat: '2+ laps', errors: 'any', band: 'SkillDrills practice band' },
      { tier: 'C', rank: 'Gold Steady', stat: 'under 2 laps', errors: 'any', band: 'SkillDrills practice band' },
    ],
  },
  protocols: {
    title: 'How to train hand steadiness',
    description: 'Coaching guidance from the models cited above, for minimizing physiological tremor, optimizing velocity through narrow channels, and mastering closed-loop cursor steering.',
    items: [
      {
        title: 'Protocol 1: Accot-Zhai Steering Law Velocity Regulation (Tunnel Width Pacing)',
        description: 'According to the Accot-Zhai steering law (1997), traversing constrained tunnels requires dynamic velocity scaling inversely proportional to channel width. Use the flatter stretches to bank lap time, and slow down clearly before sharp bends to avoid wall touches.',
      },
      {
        title: 'Protocol 2: Woodworth Continuous Closed-Loop Feedback (Current Control)',
        description: "Leverage Woodworth's (1899) current-control model: focus visual attention approximately 20 to 30 pixels ahead of your cursor rather than directly on the pointer. Looking slightly ahead gives you time to plan the next correction before the cursor drifts off the line.",
      },
      {
        title: 'Protocol 3: Physiological Tremor Attenuation & Joint Decoupling',
        description: 'Isolate long curving strokes to the elbow and forearm while reserving finger flexion solely for micro-trimming. Avoid death-gripping the mouse: tensing opposing muscles at the same time makes the hand shakier and causes wall touches.',
      },
      {
        title: 'Protocol 4: Corner Centering on Dense Paths',
        description: 'Once a long streak has packed the path with sharp bends, prioritize staying on the centre line over forward speed. Entering corners slightly toward the inside apex provides maximum clearance buffer against centrifugal cursor drift.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About Steady Hand Training & Motor Precision',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEn = {
  title: "Steady Hand Circuit",
  subtitle: "Cursor precision & steady hand • 45s",
  startButtonText: "Start Drill",
  trainAgain: "Train Again",
  shareTitle: "Share Score",
  exitTitle: "Exit & Return",
  statLaps: "Laps Cleared",
  statTime: "Time Left",
  statStreak: "Current Streak",
  statBest: "Best Laps",
  errorsLabel: "Off-Path Errors",
  maxStreakLabel: "Max Streak",
  difficultyLabel: "Difficulty Level",
  rulesTitle: "Drill Instructions & Scoring System",
  rulesItems: [
    { num: "1", text: "Trace Corridor", highlight: "Tactical Emerald Path", result: "Goal Clear resets timer to 45s" },
    { num: "2", text: "Reaching Goal", highlight: "Endless Scaling", result: "More bends & bigger swings" },
    { num: "3", text: "Off-Path Reset", highlight: "Wall Collision", result: "Start, errors +1, streak 0" },
    { num: "4", text: "Mouse with Pointer Lock", highlight: "Touch works too", result: "Esc ends the drill" }
  ],
  aboutP1: "The Steady Hand Game practises hand-eye coordination, fine cursor control and steady path tracing. You steer along a narrow glowing line that gets more winding the longer your streak, which trains small corrections from the wrist and forearm.",
  aboutP2: "Grounded in Accot & Zhai's (1997) Steering Law: the time to travel a path scales with its length divided by its width, so a path half as wide takes about twice as long to cross without a touch. Here the tolerance stays fixed at 2.5 px either side of the line, but each lap in a row makes the path longer and more winding, so you need constant visual correction (Woodworth, 1899).",
  aboutCard1Text: "Esports players, digital artists, designers and anyone who wants a steadier hand and more accurate cursor control.",
  aboutCard3Title: "Increasingly Winding Paths",
  aboutCard3Text: "The tolerance (2.5 px) stays the same; every lap in your streak gives the next path more bends and bigger swings.",
};

export default function SteadyHandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <SteadyHandClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
