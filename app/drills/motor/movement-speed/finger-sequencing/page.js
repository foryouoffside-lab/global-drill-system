import FingerSequencingClient from './FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — finger-sequencing (motor-finger-sequencing)
// PRIMARY:  "sequence aim trainer"        — Core search phrase (~1,800 searches/mo)
//           "finger speed test"           — High-volume speed/dexterity assessment query
// SECONDARY / LSI:
//           "sequential clicking test"    — Direct mechanism search
//           "finger sequencing aim drill" — Specialized tactical aim routine term
//           "click speed test online"     — Universal speed query
//           "finger speed training fps"   — Esports mechanical training phrase
//           "mouse control aim drill"     — Motor coordination search
//           "fast target switching aim trainer" — In-game mechanic transfer query
//           "ordered target click trainer"— Mechanics-specific long-tail
//           "finger dexterity aim test"   — Neuromotor precision query
//           "crosshair pathing test"      — Movement efficiency query
//           "valorant sequence drill"     — Tactical shooter mechanic query
//           "cs2 target switching"        — Tactical shooter target switching query
// ============================================================

export const metadata = {
  title: 'Sequence Aim Trainer – Free Finger Speed Test',
  description: 'Free sequence aim trainer. Measure how fast you switch between targets in a set order, built on Lashley and Keele on serial-order motor programs.',
  keywords: [
    'sequence aim trainer',
    'finger speed test',
    'sequential clicking test',
    'finger sequencing aim drill',
    'click speed test online',
    'finger speed training fps',
    'mouse control aim drill',
    'fast target switching aim trainer',
    'ordered target click trainer',
    'finger dexterity aim test',
    'crosshair pathing test',
    'valorant sequence drill',
    'cs2 target switching',
  ],
  openGraph: {
    title: 'Sequence Aim Trainer – Free Finger Speed Test | SkillDrills',
    description: 'Train sequential target switching, finger speed, and ordered mouse accuracy with this free online sequence aim trainer. Instant browser drill, no install required.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sequence Aim Trainer – Free Finger Speed Test | SkillDrills',
    description: 'Train sequential target switching, finger speed, and ordered mouse accuracy with this free online sequence aim trainer. Instant browser drill, no install required.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing',
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/' },
    { '@type': 'ListItem', position: 2, name: 'Motor Training', item: 'https://skilldrills.online/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Movement Speed', item: 'https://skilldrills.online/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Sequence Aim Trainer', item: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  name: 'Sequence Aim Trainer – Free Finger Speed Test',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based sequence aim trainer and finger speed test. Click targets in the order shown by a dotted line; each hit adds 2 seconds and levels bring more, smaller targets.',
  url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-05',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Sequence Aim Trainer',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires HTML5 Canvas and JavaScript support',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing',
  dateModified: '2026-09-05',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Sequence Aim Trainer – Finger Speed Test',
  url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing',
  description: 'Measure how fast you switch between targets in a set order, built on serial-order motor programs.',
  genre: ['Aim Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a sequence aim trainer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each round shows a chain of 3 targets (levels 1–2), 4 targets (levels 3–5) or 5 targets (level 6 and up). A dotted purple line shows the order and the active target glows. Click the targets in that order with the mouse, or tap them on a touchscreen. No numbers are shown: follow the line.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do the clock and scoring work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You start with 45 seconds. Every target you hit in order adds 2 seconds (up to a 60-second maximum). A completed chain scores 150 points × your combo multiplier (up to 3.0×) × a level bonus. The run ends when the clock reaches zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the red targets with an exclamation mark?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They are traps, which appear from level 6. Clicking one counts as a miss: -1 second, your combo resets and a new chain appears. They are never on the dotted line, so simply leave them alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a time limit for each chain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, while the Target Timeouts setting is on (it is on by default). Early on each chain has about 3.2 seconds, and less as your level and combo rise. If it runs out: -1 second, your combo resets and a new chain appears. A click that misses every target costs the same -1 second.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the difficulty increase?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your level rises by 1 every 1,750 points, with no cap. Higher levels bring more targets per chain, smaller and more spread-out targets, and less time per chain. On the first levels the later targets in a chain are drawn smaller and fainter as a hint to the order; that hint fades out by about level 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does sequence aim training differ from a raw click speed (CPS) test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A CPS test only counts clicks in one place. Here you move the mouse from target to target in a set order and have to stop accurately on each one, so the path and precision matter more than raw clicking speed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is motor chunking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Motor chunking (Lashley 1951; Keele 1968) describes how a sequence of movements can be planned and run as one unit instead of one fresh decision per step. In this drill that means reading the whole chain along the dotted line before you start, rather than looking for each target after the last click.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best mouse sensitivity for sequence aim training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the sensitivity you play with, and keep it the same between runs so your results stay comparable. There is no single correct value; what matters is that large moves come from the arm and the final stop on each target from the wrist and fingers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a training session be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A few focused runs with short breaks between them is a sensible routine. Stop when your wrist or forearm starts to feel tired or tense, because fatigue makes your clicks less accurate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is the accuracy figure computed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accuracy is the share of targets hit in the correct order out of all attempts: clicks, trap clicks and chains that timed out. The results screen shows accuracy, chains cleared, peak level and max combo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Train Sequential Aim and Finger Speed',
  description: 'The steps for following the dotted line and hitting the targets one by one.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Read the Chain',
      text: 'Before the first click, see the order in which the dotted purple line connects the targets.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Hit the Glowing Target',
      text: 'Click the target that glows, then follow the line to the next one. Each hit adds 2 seconds to the clock.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Avoid the Red Traps',
      text: 'Do not click the red "!" targets (from level 6); only click the targets on the line.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Review Your Results',
      text: 'Check accuracy, chains cleared, peak level and max combo to set your next goal.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/finger-sequencing#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954', 'mackenzie1992', 'woods2015'),
  intro: {
    title: `What Is a Sequence Aim Trainer, and How Is It Measured?`,
    paragraphs: [
      `A sequence aim trainer has you click a set of targets in a required order, so you practise switching between targets instead of always picking the nearest one. In this free browser drill a dotted line shows the order, each hit adds 2 seconds to the clock, and every completed chain raises your score and, over time, your level.`,
      'Sequential target switching is clicking a set of targets in a required order rather than whichever is nearest. Each transition between two targets is a Fitts’s Law movement, timed by the log of the gap between them divided by their width (Fitts, 1954; MacKenzie, 1992), and the order itself is held as a pre-planned motor program rather than re-decided at each target (Lashley, 1951; Keele, 1968).',
      'How this is measured, and what it cannot resolve: timing comes from the browser’s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same mouse and display rather than against someone else’s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmark: {
    title: 'Sequence Aim Trainer: SkillDrills Practice Bands',
    description: 'SkillDrills practice bands, not research norms, user statistics or percentiles. They match the grade on the results screen, which is set by your final score.',
    columns: ['Grade', 'Label', 'Final Score', 'Band'],
    rows: [
      { tier: 'S+', rank: 'Legendary', score: '21,660+ pts', band: 'SkillDrills practice band' },
      { tier: 'S', rank: 'Elite', score: '17,340+ pts', band: 'SkillDrills practice band' },
      { tier: 'A', rank: 'Excellent', score: '13,500+ pts', band: 'SkillDrills practice band' },
      { tier: 'B', rank: 'Great', score: '8,640+ pts', band: 'SkillDrills practice band' },
      { tier: 'C', rank: 'Good', score: '4,860+ pts', band: 'SkillDrills practice band' },
      { tier: 'D', rank: 'Keep Going', score: '2,160+ pts', band: 'SkillDrills practice band' },
      { tier: 'F', rank: 'Needs Practice', score: 'under 2,160 pts', band: 'SkillDrills practice band' },
    ],
  },
  protocols: {
    title: 'How to train target switching',
    description: 'For steady, repeatable progress.',
    items: [
      {
        title: 'Protocol 1: Plan the Whole Chain (Lashley 1951)',
        description: 'Before the first click, read the whole chain along the dotted line and plan it as one movement, instead of searching for each target after the last click.',
      },
      {
        title: 'Protocol 2: Fast Transport, Careful Stop (Keele 1968)',
        description: 'Move quickly between widely spaced targets, then slow down for the final stop on each one. Large moves come from the arm; the stop comes from the wrist and fingers, which matters more as targets get smaller at higher levels.',
      },
      {
        title: 'Protocol 3: Ignore the Traps',
        description: 'From level 6 red "!" targets appear off the line. Clicking one costs 1 second and your combo, so keep your eyes on the dotted line.',
      },
      {
        title: 'Protocol 4: Clean Rhythm Over Rushing',
        description: 'Every miss costs 1 second and resets your combo. A steady, clean rhythm builds the combo multiplier and scores more than rushed clicks.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About Sequence Aim Training',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEn = {
  title: "Sequence Aim Trainer",
  desc: "Sequential target switching means clicking a set of targets in a required order rather than whichever one is easiest to reach. An ordered sequence like that runs as a single pre-planned motor program instead of one fresh decision per target (Lashley, 1951; Keele, 1968), so the time is spent in the transitions between targets, not in the clicks. Each transition is itself a Fitts's Law movement, timed by the log of the gap between two targets divided by their width (Fitts, 1954).",
  score: "Score",
  timeLeft: "Time Left",
  accuracy: "Accuracy",
  bestScore: "Best Score",
  startButtonText: "Start Training",
  startSubtitle: "Motor Precision & Sequential Pathing • Continuous Scaling",
  getReady: "GET READY",
  rulesTitle: "Drill Instructions & Scoring System",
  rulesItems: [
    { num: "1", text: "Ordered Target Hit", highlight: "+2s (max 60s)", result: "Chain: 150 PTS × Combo" },
    { num: "2", text: "Combo Multiplier", highlight: "Up to 3.0×", result: "Rises with each chain" },
    { num: "3", text: "Level Progression", highlight: "+1 per 1,750 PTS", result: "More & smaller targets" },
    { num: "4", text: "Miss / Trap / Timeout", highlight: "-1s", result: "Resets combo" }
  ],
  chainsCleared: "Chains Cleared",
  peakLevel: "Peak Level",
  maxCombo: "Max Combo",
  playAgain: "Play Again",
  shareTitle: "Share Score",
  exitTitle: "Exit"
};

export default function FingerSequencingPage() {
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
      <FingerSequencingClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
