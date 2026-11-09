import TracingClient from './TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// Native keyword research: docs/seo/research/tracing-2026-09-20.md

export const metadata = {
  title: 'Mouse Tracking Test | Tracing Game | SkillDrills',
  description: 'Free browser mouse tracking test: follow a moving wave to train smooth cursor control, path accuracy, and fine motor coordination.',
  keywords: [
    'mouse tracking test', 'mouse tracing game', 'cursor tracking test',
    'wave tracing game', 'cursor tracing game', 'mouse tracking exercise',
    'smooth mouse movement', 'smooth cursor control', 'mouse precision training',
    'fine motor control game', 'aim smoothing game', 'smooth pursuit training',
  ],
  openGraph: {
    title: 'Mouse Tracking Test | Tracing Game | SkillDrills',
    description: 'Free browser mouse tracking test: follow a moving wave to train smooth cursor control, path accuracy, and fine motor coordination.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouse Tracking Test | Tracing Game | SkillDrills',
    description: 'Free browser mouse tracking test: follow a moving wave to train smooth cursor control, path accuracy, and fine motor coordination.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
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
    { '@type': 'ListItem', position: 4, name: 'Mouse Tracing Game', item: 'https://skilldrills.online/drills/motor/precision-control/tracing' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'en-US',
  name: 'Mouse Tracing Game – Wave Tracking Precision Trainer',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based mouse tracing game and smooth pursuit tracking drill. Follow an accelerating continuous wave filament with a 22px tolerance band to measure fine motor steadiness, velocity modulation, and flow integrity.',
  url: 'https://skilldrills.online/drills/motor/precision-control/tracing',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-20',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'en-US',
  name: 'Wave Tracing Trainer',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires modern web browser with HTML5 Canvas and continuous high-polling pointer input',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://skilldrills.online/drills/motor/precision-control/tracing',
  dateModified: '2026-09-20',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'en-US',
  name: 'Mouse Tracing Game – Wave Tracking & Precision Drill',
  url: 'https://skilldrills.online/drills/motor/precision-control/tracing',
  description: 'Follow a moving wave with your cursor to train smooth pursuit tracking and fine cursor control.',
  genre: ['Tracking Game', 'Action', 'Esports Training'],
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
      name: 'What is the Mouse Tracing Game and how does it evaluate motor control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You keep your cursor on a wave that scrolls continuously across the screen for 45 seconds. Every frame your cursor is within 22 pixels (vertically) of the line earns 1 point; staying on it for 4 seconds in a row adds a +5 bonus, and getting back on after drifting off adds +10. It practises smooth, steady cursor tracking rather than reaction time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the wave continuously scroll instead of waiting for user input?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Continuous motion forces active kinematic engagement. In static drills, users can freeze to regain composure; in the Mouse Tracing Game, the wave never halts, demanding continuous forward prediction, smooth pursuit ocular tracking, and immediate small corrections whenever the cursor drifts off the line.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Flow Integrity and how is the 0–100% meter calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flow Integrity is a 0–100% meter that starts at 100%. While your cursor is within 22 px of the line it rises by 15 points per second (plus 10 on each 4-second bonus); while you are off the line it falls by 25 points per second. Being off the line never takes points from your score, it only drains this meter and resets your streak. The highest value you reach (Peak Flow) sets your grade.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does scroll speed and wave amplitude ramp up during the 45-second drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The wave starts scrolling at 2.2 px per frame with a 90 px main swing. Over the 45 seconds the speed rises smoothly to 3.8 px per frame, the main swing grows to 125 px and a second, faster ripple grows from 8 px to 32 px, so the curve gets steeper and less regular toward the end.',
      },
    },
    {
      '@type': 'Question',
      name: 'What scientific models explain continuous trajectory tracking in HCI?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Dynamic corridor following is modeled by the Accot-Zhai Steering Law (Accot & Zhai, 1997) and Robert Woodworth's (1899) two-component motor model. Staying inside a moving band is a closed-loop task: vision keeps correcting the hand while the movement is still under way.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do smooth pursuit eye movements differ from corrective saccades during tracking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As demonstrated by Krauzlis (2004) and Rashbass (1961), smooth pursuit eye movements match target velocity continuously, while saccades are rapid ballistic jumps. When you drift off the wave, the eyes make a quick catch-up saccade and then settle back into smooth pursuit; the hand has to follow without overshooting the 22 px band.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does mouse tracing relate to tracking in FPS games like Apex Legends and Overwatch?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tracking in high time-to-kill shooters means keeping the crosshair on a moving opponent for a sustained period. This drill practises the same kind of smooth, continuous mouse movement and direction changes. How much it transfers to a specific game varies from player to player.',
      },
    },
    {
      '@type': 'Question',
      name: 'What mouse sensitivity and DPI settings are best for wave tracing drills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many players find a medium-to-low sensitivity easier for smooth tracking because it lets the forearm do the large movements and keeps small hand shakes from moving the cursor much. A 1000 Hz polling rate gives smoother cursor updates than 125 Hz. Keep the same settings between runs so your results stay comparable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I prevent muscle tension and hand fatigue during continuous tracking sessions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid clamping down on the mouse switch or surface. Maintain a relaxed fingertip or claw grip, glide from the elbow for broad vertical shifts, and use subtle wrist flexions for crest and trough micro-corrections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a trackball or touchscreen on this tracing drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'On a computer the drill reads mouse movement through Pointer Lock, so mice and trackballs work; Esc ends the drill. On touch-only devices you steer by dragging your finger. Graphics tablet pens behave differently depending on the device, and pen pressure is not used. Only compare results from the same device.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'en-US',
  dateModified: '2026-09-20',
  name: 'How to Train Mouse Tracing and Smooth Tracking Precision',
  description: 'Step-by-step protocol for smoother continuous cursor tracking.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Start the Drill and Find the Wave',
      text: 'Click Start Drill. After the countdown your cursor appears at the left of the screen and the 45-second clock starts; move it onto the scrolling wave. On a computer the pointer is locked (Pointer Lock).',
      url: 'https://skilldrills.online/drills/motor/precision-control/tracing#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Match Wave Velocity and Trajectory',
      text: 'Glide your mouse steadily along the undulating curve as it flows across the screen, matching its exact speed.',
      url: 'https://skilldrills.online/drills/motor/precision-control/tracing#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Suppress Saccadic Micro-Jitter',
      text: 'Relax grip tension and maintain continuous smooth pursuit eye tracking to prevent falling off the line.',
      url: 'https://skilldrills.online/drills/motor/precision-control/tracing#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Review Your Flow Score and Peak Flow',
      text: 'Check your Flow Score, longest streak in frames, Peak Flow percentage and personal best on the results screen.',
      url: 'https://skilldrills.online/drills/motor/precision-control/tracing#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: `What Is a Mouse Tracing Game, and How Is Tracking Measured?`,
    paragraphs: [
      `A mouse tracing game asks you to keep your cursor on a wave that scrolls across the screen. This free browser drill speeds the wave up (2.2 to 3.8 px per frame) and widens its swings over 45 seconds. You earn a point for every frame you stay within 22 px of the line, and a flow meter tracks how consistently you stay on it, so it trains smooth cursor tracking.`,
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same mouse and display rather than against someone else\'s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmark: {
    title: 'Mouse Tracing Game: SkillDrills Practice Bands',
    description: 'SkillDrills practice bands, not research norms or user data. They match the grade on the results screen, which is set by your Peak Flow (the highest the flow meter reached) and, for S+, your total Flow Score.',
    columns: ['Grade', 'Rank Title', 'Peak Flow', 'Flow Score', 'Band'],
    rows: [
      { tier: 'S+', rank: 'Grandmaster Flow', peak: '90%+', score: '1400+ pts', band: 'SkillDrills practice band' },
      { tier: 'S', rank: 'Peak Flow State', peak: '80%+', score: 'any', band: 'SkillDrills practice band' },
      { tier: 'A', rank: 'Locked-In Tracking', peak: '60%+', score: 'any', band: 'SkillDrills practice band' },
      { tier: 'B', rank: 'Steady Tracking', peak: '35%+', score: 'any', band: 'SkillDrills practice band' },
      { tier: 'C', rank: 'Tracing Complete', peak: 'under 35%', score: 'any', band: 'SkillDrills practice band' },
    ],
  },
  protocols: {
    title: 'How to train continuous tracking',
    description: 'Coaching guidance from the models cited above, for smoother eye-hand tracking and steadier cursor movement.',
    items: [
      {
        title: 'Protocol 1: Smooth Pursuit Gaze-Centering & Predictive Feedforward',
        description: 'As demonstrated by Krauzlis (2004), smooth pursuit works best when the eyes are already following the motion. Look slightly ahead on the oncoming wave rather than directly under the cursor, so you can prepare for each turn before it arrives.',
      },
      {
        title: 'Protocol 2: Rashbass Dual-Mode Tracking (Decoupling Saccades from Pursuit)',
        description: 'When you drift outside the 22 px band, make one quick correction back to the line (like a catch-up saccade, Rashbass 1961), then relax back into smooth following. Avoid repeated jerky flicks that bounce you on and off the line.',
      },
      {
        title: 'Protocol 3: Accot-Zhai Curvature Modulation (Crest & Trough Deceleration)',
        description: 'In accordance with the Accot-Zhai Steering Law (1997), curvature peaks demand lower tangential velocities than flatter wave segments. Feather your movement speed slightly when cresting sinusoidal peaks to prevent overshoot drift.',
      },
      {
        title: 'Protocol 4: Forearm Glide Ergonomics & Kinetic Friction Neutralization',
        description: 'Rest your forearm lightly on a smooth mousepad without anchoring the wrist heel into the desk. Pivot smoothly from the elbow for the large vertical swings and keep finger movement for small adjustments.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About Mouse Tracing & Wave Tracking',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEn = {
  title: "Mouse Tracking Test",
  subtitle: "Mouse tracing game: follow the wave • 45s",
  startButtonText: "Start Drill",
  trainAgain: "Train Again",
  shareTitle: "Share Score",
  exitTitle: "Exit & Return",
  statFlowScore: "Flow Score",
  statTimeLeft: "Time Left",
  statFlowIntegrity: "Flow Integrity",
  statBestScore: "Best Score",
  maxStreakLabel: "Max Streak Frames",
  peakFlowLabel: "Peak Flow State",
  bestScoreLabel: "Personal Best",
  rulesTitle: "Drill Instructions & Scoring System",
  rulesItems: [
    { num: "1", text: "Trace Corridor", highlight: "Emerald Wave", result: "+1 PT / frame locked-on" },
    { num: "2", text: "Speed Ramps", highlight: "Progressive Wave", result: "2.2 → 3.8 px/f over 45s" },
    { num: "3", text: "Flow Integrity", highlight: "Super Flow", result: "4s Lock-on yields +5 Bonus" },
    { num: "4", text: "Mouse with Pointer Lock", highlight: "Touch works too", result: "Off-path: streak 0, flow drains" }
  ],
  aboutP1: "The Mouse Tracing Game practises hand-eye coordination, fine cursor control and smooth visual tracking. You keep your cursor within a 22 px band around a wave that scrolls continuously across the screen, which trains steady, continuous movement from the wrist and forearm.",
  aboutP2: "Grounded in Accot & Zhai's (1997) Steering Law, staying inside a moving band needs constant speed adjustment. The scroll speed rises from 2.2 to 3.8 px per frame over 45 seconds and the swings grow, so you rely on closed-loop visual correction (Woodworth, 1899) and smooth pursuit eye movements (Krauzlis 2004, Rashbass 1961). Drifting off never costs points; it resets your streak and drains the flow meter.",
};

export default function TracingPage() {
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
      <TracingClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
