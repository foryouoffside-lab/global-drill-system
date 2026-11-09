import PrecisionFlickShotClient from './PrecisionFlickShotClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — precision-flick-shot (motor-precision-flick-shot)
// PRIMARY:  "mouse accuracy test"         — Core benchmark / dexterity query (~3,600 searches/mo)
//           "precision flick shot"        — Direct tactical gamer training query
// SECONDARY / LSI:
//           "flick aim trainer"           — Core competitive FPS drill term
//           "flick shot test"             — Assessment query
//           "micro flick trainer"         — Precision targeting term
//           "mouse flick practice"        — Habitual skill drill search
//           "flick aim drill"             — Practical mechanical routine query
//           "target acquisition test"     — Reaction and tracking assessment
//           "bullseye aim test"           — Center-click accuracy search
//           "mouse click accuracy test"   — Timing and click accuracy query
//           "fps flick practice"          — Game-specific training phrase
//           "deceleration aim test"       — Stopping power chronometry query
// LOCALES:
//           ja: "フリック エイム 練習" (Flick Aim Practice / Mouse Accuracy Test)
//           ko: "플릭 에임 연습" (Flick Aim Practice / Mouse Accuracy Test)
//           de: "maus zielgenauigkeit test" (Mouse Target Accuracy Test)
// ============================================================

export const metadata = {
  title: 'Mouse Accuracy Test – Precision Flick Shot | SkillDrills',
  description: 'Free mouse accuracy test. Measure flick precision, target acquisition time and bulls-eye hit rate against the two-phase model of rapid aimed movement.',
  keywords: [
    'mouse accuracy test',
    'precision flick shot',
    'flick aim trainer',
    'flick shot test',
    'micro flick trainer',
    'mouse flick practice',
    'flick aim drill',
    'target acquisition test',
    'bullseye aim test',
    'mouse click accuracy test',
    'fps flick practice',
    'deceleration aim test',
    'free flick trainer',
  ],
  openGraph: {
    title: 'Mouse Accuracy Test – Precision Flick Shot | SkillDrills',
    description: 'Test mouse flick accuracy, target acquisition latency, and bulls-eye center precision with this free online flick trainer. Free, instant browser-based tool.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouse Accuracy Test – Precision Flick Shot | SkillDrills',
    description: 'Test mouse flick accuracy, target acquisition latency, and bulls-eye center precision with this free online flick trainer. Free, instant browser-based tool.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/precision-flick-shot'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/' },
    { '@type': 'ListItem', position: 2, name: 'Motor Training', item: 'https://skilldrills.online/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Hand-Eye Coordination', item: 'https://skilldrills.online/drills/motor/hand-eye-coordination' },
    { '@type': 'ListItem', position: 4, name: 'Precision Flick Shot', item: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Mouse Accuracy Test – Precision Flick Shot Trainer',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based flick aim trainer and mouse accuracy test. Two shrinking targets are on screen at once; click them before they vanish, and land within 8 px of the centre for double points.',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-16',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Precision Flick Shot',
  browserRequirements: 'Requires HTML5 Canvas, Pointer Lock API, and JavaScript',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot',
  applicationCategory: 'EducationalApplication',
  dateModified: '2026-09-16',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Mouse Accuracy Test – Precision Flick Shot Trainer',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot',
  description: 'Measure flick precision, target acquisition latency, and bulls-eye accuracy against the two-phase model of rapid aimed movement.',
  genre: ['Shooting Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-09-16',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Precision Flick Shot drill and how does it test mouse accuracy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Precision Flick Shot is a mouse accuracy drill. Two circular targets are on screen at once and shrink over time (while Target Timeouts is on); the active one shrinks fastest. Click a target before it shrinks away: a hit within 8 px of its centre is a bulls-eye. You start with 45 seconds, every hit adds 2 seconds (up to 60) and the run ends when the clock reaches zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Stochastic Optimized Submovement Model in flick aiming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulated by David E. Meyer et al. (1988), the model states that rapid aimed movements consist of an initial ballistic primary submovement followed by optional feedback-guided corrective submovements. If noise in the primary stroke makes the cursor miss the target region, a secondary corrective submovement is needed, which adds to the total movement time.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does bulls-eye scoring improve aiming mechanics?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A normal hit scores 100 base points; a hit within 8 pixels of the target centre scores 200 base points, both multiplied by your combo and level bonus. Rewarding the centre encourages you to aim for a smaller point inside the target rather than settling for any contact with the edge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do players over-flick or under-flick targets in tactical shooters?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Over-flicking occurs when antagonist braking muscle groups fail to arrest limb momentum before the target boundary. Under-flicking occurs when players decelerate prematurely due to visual uncertainty. Practising with a fixed sensitivity makes the size of the flick more consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are there two targets at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both targets shrink, but the active one shrinks faster (the other at about 58% of the rate). When one shrinks away it counts as a timeout and the other becomes the active target. Taking the smaller, closer-to-vanishing target first avoids timeouts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does flick shot training help in CS2 and Valorant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First-shot accuracy in tactical shooters relies on quick, accurate flicks onto a small target, which is what this drill practises. How much it transfers to a specific game varies from player to player.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ideal mouse sensitivity and DPI for flick training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the sensitivity you play with and keep it the same between runs so your results stay comparable. There is no single correct value; what matters is that large moves come from the arm and the final stop from the wrist and fingers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is flick accuracy and session grading calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accuracy is target hits divided by clicks. The results screen also shows bulls-eye hits, target hits and peak level. The letter grade (F to S+) is based on your final score alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hardware optimizations improve flick shot responsiveness?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a high-refresh monitor (144 Hz or higher) to minimize display quantization delays (Woods et al., 2015), disable Windows Enhance Pointer Precision to reduce pointer-speed variation, and keep the same mouse and settings between runs.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I train precision flicking for optimal gains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A few short, focused runs before you play is a sensible routine. Stop when your wrist or forearm feels tense or tired, because fatigue makes flicks less accurate.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Train Precision Mouse Flick Shots and Micro-Flick Accuracy',
  description: 'Step-by-step methodology to master ballistic mouse flicks, bulls-eye center targeting, and deceleration control.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Calibrate Crosshair and Sensitivity',
      text: 'Match your mouse sensitivity to your primary competitive title in Session Settings and center your vision on the stage crosshair.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Identify and Prioritize Spawning Target',
      text: 'Watch both targets and take the one that is closer to shrinking away first.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Execute Single-Impulse Ballistic Flick',
      text: 'Snap your mouse directly toward the target center in a single swift motion, avoiding jerky multi-step micro-corrections.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Brake Firmly and Eliminate Residual Drift',
      text: 'Stop the mouse on the target centre before clicking; a hit within 8 px of the centre scores double.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('meyer1988', 'fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  intro: {
    title: `What Is a Flick Shot Mouse Accuracy Test? Micro-Flicks and Submovements`,
    paragraphs: [
      `A flick shot mouse accuracy test measures how precisely you can snap your cursor onto a target in one fast movement. In this free drill two targets shrink until they vanish, each hit adds 2 seconds to the clock, and a bulls-eye hit (within 8 px of the centre) scores double, so it rewards precision as well as speed.`,
      'In competitive marksmanship and human-computer interaction, a flick shot is a high-velocity, discrete manual aiming movement executed under extreme time constraints. Robert S. Woodworth (1899) first established that goal-directed movements operate via a dual-phase control architecture: an initial ballistic impulse that propels the limb toward the target, followed by a current control phase where visual feedback guides terminal adjustments.',
      'In their seminal theoretical framework, David E. Meyer et al. (1988) formulated the Stochastic Optimized Submovement Model. They proved that human motor output is subject to neural noise proportional to movement velocity. When players flick too fast, primary movement endpoint scatter increases. If the primary impulse lands outside the target, a secondary corrective submovement has to follow, which costs time.',
      'To achieve elite flicking throughput (MacKenzie, 1992), aimers must calibrate their ballistic impulse velocity so that the primary movement distribution falls reliably within target confines. By rewarding inner bulls-eye center hits, this drill trains the sensorimotor system to tighten endpoint distribution dispersion and minimize corrective deceleration submovements.',
      'The distance-versus-size trade-off behind a flick is Fitts\'s Law: movement time grows with the log of the distance to a target divided by its width (Fitts, 1954). The modern synthesis of the two-phase account — one ballistic impulse followed by visually guided correction, and the many processes that feed it — is Elliott et al. (2010).',
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same mouse and display rather than against someone else\'s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmarks: {
    title: 'Precision Flick Shot: SkillDrills Practice Bands',
    caption: 'SkillDrills practice bands, not research norms or user data: SkillDrills collects no aggregate data. They match the grade on the results screen, which is set by your final score.',
    headers: ['Grade', 'Label', 'Final Score', 'Band'],
    rows: [
      ['S+', 'Legendary', '46,028+ PTS', 'SkillDrills practice band'],
      ['S', 'Elite', '36,848+ PTS', 'SkillDrills practice band'],
      ['A', 'Excellent', '28,688+ PTS', 'SkillDrills practice band'],
      ['B', 'Great', '18,360+ PTS', 'SkillDrills practice band'],
      ['C', 'Good', '10,328+ PTS', 'SkillDrills practice band'],
      ['D', 'Keep Going', '4,590+ PTS', 'SkillDrills practice band'],
      ['F', 'Needs Practice', 'under 4,590 PTS', 'SkillDrills practice band'],
    ],
  },
  protocols: {
    title: 'How to train flick accuracy',
    items: [
      {
        title: 'Protocol 1: Primary Ballistic Impulse Calibration (Levels 1–4)',
        description: 'Prioritize a single smooth flick over rushing. Avoid hesitation or mid-flight pauses. Commit to your primary ballistic trajectory and rely on open-loop motor memory to land within the outer target perimeter.',
      },
      {
        title: 'Protocol 2: Meyer Stochastic Submovement Minimization (Levels 5–8)',
        description: 'Aim for the bulls-eye: anything within 8 pixels of the centre scores double. Aiming at a smaller point inside the target also reduces near-miss edge clicks.',
      },
      {
        title: 'Protocol 3: Dual-Target Priority Sequencing (Levels 9–12)',
        description: 'Two targets are always on screen. Take the active, faster-shrinking target first, then flick across to the other one before it becomes active.',
      },
      {
        title: 'Protocol 4: Antagonist Deceleration & Overflick Braking (Levels 13–15)',
        description: 'At high levels targets start smaller and shrink faster. Practise clean stops on the target centre so the mouse does not slide past it.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About Flick Aiming and Accuracy',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEn = {
  title: "Mouse Accuracy Test: Precision Flick Shot",
  subtitle: "Precision flick aim drill for hitting shrinking targets, improving micro-corrections, and building accurate mouse control",
  startButtonText: "START DRILL",
  playAgainText: "Play Again",
  shareText: "Share Score",
  exitText: "Exit",
  accuracyLabel: "Accuracy",
  targetHitsLabel: "Target Hits",
  bullseyesLabel: "Bulls-eyes",
  peakLevelLabel: "Peak Level",
  rulesTitle: "Drill Instructions & Scoring System",
  rulesItems: [
    { num: "1", text: "Bullseye Hit", highlight: "+200 PTS / +2s (max 60s)", result: "Within 8 px of centre" },
    { num: "2", text: "Standard Hit", highlight: "+100 PTS / +2s (max 60s)", result: "×Combo Mult" },
    { num: "3", text: "Level Progression", highlight: "+1 Level / 1400 PTS", result: "Smaller targets, faster shrink" },
    { num: "4", text: "Miss & Timeout", highlight: "Combo Reset", result: "-1s Clock" }
  ],
};

export default function PrecisionFlickShotPage() {
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
      <PrecisionFlickShotClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
