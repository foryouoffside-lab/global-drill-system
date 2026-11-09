import RapidTappingClient from './RapidTappingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// Native query clusters and live localized SERP evidence are documented in
// docs/seo/research/rapid-tapping-2026-09-20.md. No unverified volume claim is
// used as a ranking guarantee.

export const metadata = {
  title: 'CPS Test | Click Speed & Clicks Per Second | SkillDrills',
  description: 'Free browser CPS test for clicks per second and clicking techniques over a 45-second run. No download required.',
  keywords: [
    'cps test',
    'click speed test',
    'clicks per second',
    'rapid tapping test',
    'finger tapping speed test',
    'cps trainer',
    'click speed game',
    'jitter clicking test',
    'butterfly clicking test',
    'mouse click speed test',
    'minecraft cps test',
    'fast clicking test',
    'click endurance test',
  ],
  openGraph: {
    title: 'CPS Test | Click Speed & Clicks Per Second | SkillDrills',
    description: 'Measure your clicks per second over a 45-second run in a free browser test.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPS Test | Click Speed & Clicks Per Second | SkillDrills',
    description: 'Free CPS click speed test with live browser results.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping',
    languages: getAlternateLanguages('/drills/motor/movement-speed/rapid-tapping'),
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
    { '@type': 'ListItem', position: 4, name: 'CPS Test', item: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'en-US',
  name: 'CPS Test – Click Speed & Clicks Per Second Trainer',
  alternateName: ['Rapid Tapping Test', 'Click Speed Test'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based CPS click speed test and finger tapping endurance trainer. Click a ball in the centre of the screen for 45 seconds; each click grows it, and it shrinks faster as your score rises.',
  url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-20',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'en-US',
  name: 'CPS Test',
  alternateName: 'Rapid Tapping Test',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires modern web browser with HTML5 Canvas and high-frequency pointer input support',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping',
  dateModified: '2026-09-20',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'en-US',
  name: 'CPS Test – Free Click Speed Test & Clicks Per Second Trainer',
  url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping',
  description: 'Free online CPS test measuring clicks per second, for single-finger, jitter and butterfly clicking.',
  genre: ['Clicker Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en-US',
  dateModified: '2026-09-20',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a CPS test (Clicks Per Second)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A CPS test counts how many mouse clicks or touchscreen taps you make per second. Here you click a ball in the centre of the screen for 45 seconds; only clicks on the ball count, and your result is total clicks divided by the seconds elapsed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an average CPS score for casual gamers versus esports competitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no official statistic, and SkillDrills collects no player data. As a rough guide, ordinary single-finger clicking sits around 5 to 7 CPS and practised players reach about 8 to 10 CPS; jitter and butterfly clicking can go higher. Compare against your own earlier runs on the same mouse.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is jitter clicking and how does it work physiologically?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jitter clicking involves generating continuous isometric co-contraction in the forearm flexor and extensor muscles. The resulting fast vibration is passed through a stiff wrist into the mouse button, so clicks come faster than separate deliberate finger presses. It can strain the forearm, so keep sessions short.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is butterfly clicking and how does it differ from jitter clicking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Butterfly clicking utilizes alternating strikes between the index and middle fingers on a single mouse switch. Because each finger actuates independently with relaxed arm muscles, many players find it less tiring than jitter clicking, and it can reach higher click rates on mice with a short debounce time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is high CPS critical in competitive Minecraft PvP?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In legacy Minecraft combat (1.8 mechanics), hit detection registers faster and deals consistent knockback when click frequency is maximized. Many players treat a high, steady click rate as an advantage in that combat system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does click speed matter in tactical shooters like Valorant and CS2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While crosshair placement and micro-corrections are primary in tactical shooters, fast, controlled tapping helps with semi-automatic pistols (Classic, Ghost, USP-S) as long as it does not pull the crosshair off target.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the neuromuscular limits of single-finger tapping frequency?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic finger tapping test (Halstead 1947; Todor & Kyprie 1980) puts a healthy adult’s dominant index finger at roughly 50 to 55 taps per 10 seconds, about 5 to 7 taps per second. Going well beyond that usually needs a different technique, such as jitter clicking or alternating two fingers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the 45-second rapid tapping drill scale in difficulty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each click on the ball grows it by 10 px (up to 140 px). Every 10 clicks scores 1 point, and every 5 points the ball shrinks faster, from 45 px per second up to a cap of 600. If it shrinks to nothing (while Target Timeouts is on), it pops back to a small size with a warning signal; no points are taken away. The round always lasts 45 seconds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I increase my clicking speed and prevent forearm muscle fatigue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rest between runs (for example 45 seconds of clicking, then a minute of relaxing your hand). Move from the finger knuckle rather than pressing down with the whole arm, and stop if your hand or forearm hurts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take the CPS click speed test on mobile devices and touchscreens?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On a touchscreen you tap the ball directly, including alternating two fingers; every tap on the ball counts separately. Keyboard input does not count; Esc only ends the round.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'en-US',
  dateModified: '2026-09-20',
  name: 'How to Test and Train Click Speed (CPS)',
  description: 'Step-by-step guide to measuring your clicks per second.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Prepare Grip and Position Cursor',
      text: 'Rest your wrist comfortably on your mousepad. Align your index finger over the primary mouse button and position the crosshair within the arena.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Initiate 45-Second Sprint',
      text: 'Click "Start Drill" and, after the 3-2-1 countdown, click the ball in the centre as fast as you can. Only clicks on the ball count.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Counter Dynamic Ball Decay',
      text: 'Each click grows the ball. Keep a fast, steady rhythm; the ball shrinks faster every 5 points you score.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Review Your Average CPS',
      text: 'Review your average CPS, total clicks and max difficulty on the results screen, alongside your best CPS so far, and compare them with your own earlier runs on the same mouse.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/rapid-tapping#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('halstead1947', 'todor1980', 'keele1968', 'woods2015'),
  intro: {
    title: `What Is a CPS Test, and How Is Click Speed Measured?`,
    paragraphs: [
      `A CPS test counts how many times you click a mouse button in one second. This free browser version runs a 45-second tapping drill on a ball that shrinks faster as your score rises, and reports your average clicks per second over the run. It runs in your browser with no download.`,
      'Sustained one-finger clicking runs to roughly 5\u20137 clicks per second, anchored to the published finger tapping baseline of about 50\u201355 taps per 10 seconds for a healthy adult\u2019s dominant index finger (Halstead, 1947; Todor & Kyprie, 1980). Bursts above that are open-loop: they run as a pre-programmed motor sequence rather than one deliberate press per click (Keele, 1968).',
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same mouse and display rather than against someone else\'s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmark: {
    title: 'CPS Test: SkillDrills Practice Bands',
    description: 'SkillDrills practice bands, not research norms or user data: SkillDrills collects no aggregate data. They match the grade on the results screen, which you earn by reaching either the score or the average CPS shown (score = 1 point per 10 clicks on the ball).',
    columns: ['Grade', 'Rank Title', 'Score', 'or Average CPS', 'Band'],
    rows: [
      { tier: 'S+', rank: 'Elite Tapper', score: '60+', cps: '11+ CPS', band: 'SkillDrills practice band' },
      { tier: 'S', rank: 'Master Tapper', score: '40+', cps: '9+ CPS', band: 'SkillDrills practice band' },
      { tier: 'A', rank: 'Pro Tapper', score: '25+', cps: '7+ CPS', band: 'SkillDrills practice band' },
      { tier: 'B', rank: 'Advanced', score: '15+', cps: '5+ CPS', band: 'SkillDrills practice band' },
      { tier: 'C', rank: 'Intermediate', score: '5+', cps: '3+ CPS', band: 'SkillDrills practice band' },
      { tier: 'D', rank: 'Rookie', score: 'under 5', cps: 'under 3 CPS', band: 'SkillDrills practice band' },
    ],
  },
  protocols: {
    title: 'How to train clicking speed',
    description: 'Technique notes for faster, more relaxed clicking.',
    items: [
      {
        title: 'Protocol 1: Halstead Motor Rhythm Calibration (Deliberate Knuckle Pivot)',
        description: 'For standard single-finger clicking, anchor your wrist on the desk and isolate movement to the metacarpophalangeal (MCP) knuckle joint. Keeping your forearm relaxed reduces muscle tension and provides the cleanest transition between rapid clicks and precise crosshair tracking.',
      },
      {
        title: 'Protocol 2: Burst Intervals (Micro-Rest Pacing)',
        description: 'Alternate short all-out bursts with a few seconds of relaxed, steady clicking. It lets you practise top speed without tensing up for the whole run.',
      },
      {
        title: 'Protocol 3: Isometric Forearm Micro-Vibration (Jitter Clicking Stabilization)',
        description: 'To master jitter clicking, generate gentle co-contraction in the wrist flexors and extensors, letting forearm tremors vibrate through the index finger. Lighten downward pressure on the mouse to ensure sensor tracking and mouse gliding remain fluid.',
      },
      {
        title: 'Protocol 4: Alternating Kinematic Dual-Finger Articulation (Butterfly Clicking)',
        description: 'Position index and middle fingers flat across the left mouse switch. Practice a rhythmic, alternating drumming motion. Mice with a short debounce time register fast alternating presses more reliably.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About CPS & Click Speed Testing',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEn = {
  title: "CPS Test",
  desc: "A CPS test counts how many times you can click a mouse button in one second. Sustained one-finger clicking runs to roughly 5–7 clicks per second, because the standard finger tapping test puts a healthy adult's dominant index finger near 50–55 taps per 10 seconds (Halstead, 1947) — the much higher numbers quoted online come from jitter and butterfly techniques, which do not use one finger press per click.",
  score: "Score",
  timeLeft: "Time Left",
  cpsRate: "CPS Rate",
  bestScore: "Best Score",
  startButtonText: "Start Drill",
  startSubtitle: "CPS click speed test • 45s",
  getReady: "GET READY",
  playAgain: "Play Again",
  shareTitle: "Share Score",
  exitTitle: "Exit & Return",
  avgCps: "Average CPS",
  totalClicks: "Total Clicks",
  maxDifficulty: "Max Difficulty",
  peakCps: "Best CPS",
  newBest: "NEW BEST",
  rulesTitle: "Drill Instructions & Scoring System",
  rulesItems: [
    { num: "1", text: "Rapid Target Tapping", highlight: "Tactical Emerald Target", result: "Expands target radius & prevents decay" },
    { num: "2", text: "Scoring Threshold", highlight: "+1 Point per 10 Clicks", result: "Only clicks on the ball count" },
    { num: "3", text: "Dynamic Shrink Rate", highlight: "Faster every 5 points", result: "Shrinks to zero: resets, no point loss" },
    { num: "4", text: "Tapping Techniques", highlight: "Jitter / Butterfly / Raw", result: "Maximize raw clicking speed" }
  ],
};

export default function RapidTappingPage() {
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
      <RapidTappingClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
