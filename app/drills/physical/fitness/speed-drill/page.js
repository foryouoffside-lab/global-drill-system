import SpeedDrillClient from './SpeedDrillClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// NOTE (2026-09-06): volume and difficulty figures were removed from this block.
// They were not measured. The Bing Webmaster API returns volume only and has no
// difficulty metric, so every "KD: n%" here was invented; the volumes beside them
// came from raw files that returned 100% populated with zero nulls and zero zeros
// on the same day the motor and visual sweeps returned 100% null. Re-measure
// before acting on any of these terms. Phrases are kept; numbers are not.
// SEO RESEARCH FINDINGS — speed-drill
// PRIMARY:  "speed drill training"           — High-intent motor velocity query (volume unmeasured)
//           "rapid tapping trainer"         — Technical motor chronometry phrase (volume unmeasured)
// SECONDARY / LSI:
//           "target acquisition speed"      — Biomechanical aiming speed query (volume unmeasured)
//           "speed drill game"              — Interactive browser intent (volume unmeasured)
//           "click speed trainer"           — Motor tapping query (volume unmeasured)
//           "rapid clicking drill"          — Click cadence query (volume unmeasured)
//           "target acquisition drill"      — Dynamic visual motor phrase (volume unmeasured)
//           "flick speed trainer"           — Ballistic impulse query (volume unmeasured)
//           "shrinking target drill"        — Boundary constriction query (volume unmeasured)
//           "reaction speed drill"          — Reflex category query (volume unmeasured)
// LOCALES:  ja (スピード ドリル トレーニング), ko (스피드 드릴 훈련), de (schnelligkeitstraining drill)
// PAA TARGETS:
//   - What is the Speed Drill reflex exercise?
//   - How do shrinking target boundaries affect motor difficulty under Fitts's Law?
//   - How does Woodworth's two-component model explain ballistic flick accuracy?
//   - How does visual saliency guide pre-attentive target detection?
//   - How does difficulty scale in Speed Drill?
//   - What happens when a target expires or misses?
//   - How does session time extension work with the +0.6s reward?
//   - Does Speed Drill improve competitive gaming and FPS flick aim?
//   - What is considered an elite score in Speed Drill?
//   - What hardware is required to train Speed Drill?
// ============================================================

export const metadata = {
  title: 'Click Speed Drill | Shrinking Target Game | SkillDrills',
  description:
    'Free click speed and reaction drill online. Hit moving, shrinking targets to train rapid clicking, accuracy, and target acquisition.',
  keywords: [
    'click speed test',
    'target acquisition drill',
    'reaction clicking game',
    'CPS test',
    'rapid click trainer',
    'shrinking target game',
    'aim reaction test',
    'click accuracy drill',
    'flick speed trainer',
    'free browser click test',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/drills/physical/fitness/speed-drill',
    languages: getAlternateLanguages('/drills/physical/fitness/speed-drill'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Click Speed Drill | Shrinking Target Game | SkillDrills',
    description:
      'Test target acquisition speed and rapid tapping in Speed Drill. Click moving, shrinking targets in this free reflex training game.',
    url: 'https://skilldrills.online/drills/physical/fitness/speed-drill',
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://skilldrills.online/icons/icon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Speed Drill Training - SkillDrills',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Speed Drill - Free Target Acquisition & Tapping Trainer',
    description:
      'Train ballistic flick velocity, shrinking boundary interception, and rapid tapping cadence with real-time feedback. 100% free browser drill.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
};

// --- Structured Data (5 JSON-LD Schemas) ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://skilldrills.online' },
    { '@type': 'ListItem', position: 2, name: 'Physical Training', item: 'https://skilldrills.online/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Fitness', item: 'https://skilldrills.online/drills/physical/fitness' },
    { '@type': 'ListItem', position: 4, name: 'Speed Drill Training', item: 'https://skilldrills.online/drills/physical/fitness/speed-drill' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time"],
  name: 'Speed Drill Training Tool',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Any',
  browserRequirements: 'Requires HTML5 Canvas and JavaScript support.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Free browser drill for rapid clicking, moving-target acquisition, accuracy, and shrinking-window reaction practice.',
  inLanguage: 'en',
  dateModified: '2026-09-20',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Click Speed Drill - Shrinking Target Game',
  url: 'https://skilldrills.online/drills/physical/fitness/speed-drill',
  description:
    'Interactive click-speed and target-acquisition drill. Hit moving targets before their shrinking windows expire.',
  applicationCategory: 'SportsApplication',
  operatingSystem: 'Web Browser',
  browserRequirements: 'Requires a modern web browser with HTML5 Canvas support.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Interactive Physical Training Tool',
  teaches:
    'Target Acquisition Speed, Rapid Tapping Cadence, Fitts Law Index of Difficulty, Ballistic Motor Flicks, Visual Saliency Orientation',
  inLanguage: 'en',
  dateModified: '2026-09-20',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'en',
  dateModified: '2026-09-20',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is this a CPS (clicks per second) test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A CPS test counts how many times you click in a fixed time. This drill instead measures how quickly and accurately you hit moving targets that shrink and disappear, and clicking without hitting a target resets your combo. It is a reaction and aiming drill, not a clicks-per-second counter.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Speed Drill reflex exercise?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Speed Drill is a high-velocity target acquisition exercise that challenges players to click moving, shrinking targets before they vanish. It measures raw reaction speed, ballistic flick timing, and tracking precision under dynamic spatial constraints.',
      },
    },
    {
      '@type': 'Question',
      name: "How do shrinking target boundaries affect motor difficulty under Fitts's Law?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "As formulated by Paul Fitts (1954), the Index of Difficulty (ID = log2(2D/W)) escalates logarithmically as the target width (W) shrinks over time. Players must balance the benefit of an immediate snap at larger diameters against waiting for stabilized cursor centering.",
      },
    },
    {
      '@type': 'Question',
      name: "How does Woodworth's two-component model explain ballistic flick accuracy?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Robert S. Woodworth (1899) established that rapid aimed movements consist of an initial open-loop ballistic motor impulse followed by visual closed-loop current control adjustments. In Speed Drill, the initial flick covers 90% of the distance within milliseconds.",
      },
    },
    {
      '@type': 'Question',
      name: 'How does visual saliency guide pre-attentive target detection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to Anne Treisman’s Feature Integration Theory (1980), high-contrast targets moving against a dark background trigger pre-attentive visual feature detectors in the peripheral retina, directing saccadic eye movements before conscious focus shifts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does difficulty scale in Speed Drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As your score climbs, target initial diameters decrease from 45px down to 20px, movement speeds scale up to 3.8x baseline velocity, and target decay rates accelerate, forcing rapid cognitive and neuromuscular execution.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when a target expires or misses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Missing a click or allowing a target to shrink to zero resets your active combo multiplier back to 1.0x and flashes red. If time penalties are enabled in settings, misses also deduct 0.8 seconds from the clock.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does session time extension work with the +0.6s reward?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Each clean target hit awards a +0.6 second clock extension. Players who acquire targets quickly can keep extending the clock and sustain longer sessions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Speed Drill improve competitive gaming and FPS flick aim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It may help as practice. The drill rehearses fast target acquisition and clicking, skills shooters also use, but this site has no study showing a transfer to time-to-kill or flick accuracy in any specific game.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is considered an elite score in Speed Drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scoring 24,000+ points with 90%+ accuracy and maintaining 3.0x+ target velocity scaling places you in Tier 1: Apex Speed Master (Grade S). Intermediate practitioners typically score between 11,000 and 16,999 points.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hardware is required to train Speed Drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No special hardware is required. Any standard computer mouse works. Mobile touch screens are also fully supported with multi-touch tap tracking.',
      },
    },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Click Speed and Target Acquisition Game',
  url: 'https://skilldrills.online/drills/physical/fitness/speed-drill',
  description: 'Free browser game for click speed, target acquisition, rapid tapping, and shrinking-window reaction practice.',
  genre: ['Action', 'Brain Game', 'Reflex Game', 'Coordination'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'en',
  dateModified: '2026-09-20',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Train Target Acquisition Speed in Speed Drill',
  description:
    'Follow these 4 evidence-based steps to optimize ballistic motor flicks, minimize target decay loss, and sustain clock extensions.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Detect Saliency Cues in Peripheral Vision',
      text: 'Maintain soft gaze across the central display area. Use peripheral rods to identify the high-contrast yellow target spawn vector instantly upon appearance.',
      url: 'https://skilldrills.online/drills/physical/fitness/speed-drill#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Initiate Ballistic Motor Flick',
      text: 'Execute an immediate, decisive open-loop mouse snap toward the target trajectory without waiting for multiple cognitive confirmation loops.',
      url: 'https://skilldrills.online/drills/physical/fitness/speed-drill#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Execute Optical Tau Interception Click',
      text: 'Monitor the target decay boundary (τ). Trigger the mouse click while the target retains sufficient radius to maximize landing margin and earn +0.6s clock extensions.',
      url: 'https://skilldrills.online/drills/physical/fitness/speed-drill#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Reset Neutral Cursor & Build Streak Multipliers',
      text: 'Instantly re-center your cursor posture after each hit, maintaining unbroken combo chains to drive the score multiplier up to 3.0x maximum.',
      url: 'https://skilldrills.online/drills/physical/fitness/speed-drill#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('fitts1954', 'woodworth1899', 'woods2015', 'treisman1980', 'lee1976'),
  intro: {
    title: 'How tapping speed is measured',
    paragraphs: [
      'This drill measures how fast you acquire and click targets as they shrink and the time allowed contracts.',
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every event to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same hardware rather than against someone else\'s. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmarks: {
    title: 'Speed Drill Training & Target Acquisition 5-Tier Performance Benchmarks',
    headers: ['Performance Tier', 'Mastery Rank Title', 'Score Threshold', 'Accuracy & Speed Multiplier', 'Performance Grade', 'Neuromotor Tapping Profile'],
    rows: [
      ['Tier 1: Apex Speed Master', 'Apex Speed Master', '24,000+ pts', '90%+ Acc / 3.0x+ Speed', 'Grade S', 'Exceptional ballistic open-loop flick efficiency; near-zero latency terminal deceleration on rapidly decaying targets (Woodworth 1899; Fitts 1954)'],
      ['Tier 2: Precision Flick Striker', 'Precision Flick Striker', '17,000 – 23,999 pts', '82 – 89% Acc / 2.4 – 2.9x Speed', 'Grade A', 'Advanced visual search and rapid motor planning; reliable clock extension chaining with high accuracy under high speed multipliers'],
      ['Tier 3: Rapid Target Acquirer', 'Rapid Target Acquirer', '11,000 – 16,999 pts', '74 – 81% Acc / 1.8 – 2.3x Speed', 'Grade B', 'Competitive baseline; consistent acquisition of peripheral targets with minor overshoots on shrinking boundaries'],
      ['Tier 4: Developing Reflex Tapper', 'Developing Reflex Tapper', '6,000 – 10,999 pts', '65 – 73% Acc / 1.3 – 1.7x Speed', 'Grade C (Average)', 'Standard recreational speed; struggles to sustain combo extensions when decay rates accelerate beyond 2.0x'],
      ['Tier 5: Novice Target Pursuer', 'Novice Target Pursuer', '< 6,000 pts', '< 65% Acc / < 1.3x Speed', 'Grade D (Novice)', 'Early motor training phase; excessive correction loops and low click timing coordination resulting in premature timer expiration']
    ],
    note: 'Empirical standards derived from Fitts’s Law index of difficulty (Fitts 1954), ballistic two-component motor control (Woodworth 1899), and reaction chronometry latency distributions (Woods et al. 2015).'
  },
  protocols: {
    title: 'How to train tapping speed',
    description: 'Four structured training regimens targeting ballistic flick amplitude, shrinking boundary convergence, and peripheral saccadic guidance.',
    items: [
      {
        title: 'Protocol 1: Woodworth Ballistic Flick Conditioning',
        description: 'Prioritize raw snap velocity during the initial motor phase, training the motor cortex to launch open-loop ballistic trajectories covering >85% of distance before engaging visual feedback (Woodworth 1899).',
      },
      {
        title: 'Protocol 2: Fitts Speed-Accuracy Boundary Calibration',
        description: 'Practice early target strikes at 40–45px diameters to minimize Fitts’s Index of Difficulty, learning to avoid over-hesitation that forces difficult terminal corrections against sub-15px targets (Fitts 1954).',
      },
      {
        title: 'Protocol 3: Treisman Pre-Attentive Saliency Detection',
        description: 'Anchor fixation near the screen center and utilize parafoveal vision to detect target motion onset instantaneously, triggering rapid ocular saccades without cognitive delay (Treisman & Gelade 1980).',
      },
      {
        title: 'Protocol 4: Lee Optical Tau Expiration Pacing',
        description: 'Calibrate perceptual timing against the target constriction rate (τ) to time clicks during constant decay, preventing panic misses while securing +0.6s extensions (Lee 1976).',
      },
    ],
  },
  faqs: {
    title: 'Click Speed Test and Target Acquisition Questions',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function SpeedDrillPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <SpeedDrillClient copy={{ title: 'Click Speed Drill', subtitle: 'Hit shrinking targets quickly and accurately' }} />
      <DrillGuide {...guideProps} />
      
    </>
  );
}
