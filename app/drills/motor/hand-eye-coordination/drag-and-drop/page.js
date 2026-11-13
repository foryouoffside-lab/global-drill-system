import DragAndDropClient from './DragAndDropClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — drag-and-drop (motor-drag-and-drop)
// PRIMARY:  "drag and drop test"          — Core motor precision query (~1,400 searches/mo)
//           "drag and drop mouse trainer" — Specialized training phrase
// SECONDARY / LSI:
//           "drag and drop precision"     — Spatial accuracy and stability term
//           "mouse drag test"             — Hardware and manual dexterity assessment
//           "cursor control test"         — General motor coordination query
//           "mouse coordination test"     — Fine motor evaluation query
//           "mouse dragging practice"     — Habitual skill drill search
//           "fine motor control test"     — Ergonomics search
//           "mouse stopping power"        — Sensorimotor deceleration term
//           "deceleration aim drill"      — FPS braking and target tracking query
//           "inventory drag drill"        — Tactical gaming interface manipulation
// LOCALES:
//           ja: "ドラッグ アンド ドロップ 練習" (Drag and Drop Practice / Mouse Control Test)
//           ko: "드래그 앤 드롭 테스트" (Drag and Drop Test / Mouse Control Drill)
//           de: "drag and drop test" (Drag and Drop Test Maus Präzision)
// ============================================================

export const metadata = {
  title: 'Drag and Drop Test – Mouse Control Drill | SkillDrills',
  description: 'Train mouse dragging accuracy, cursor deceleration, and spatial release timing with this free online motor drill. Grounded in the Accot-Zhai Steering Law.',
  keywords: [
    'drag and drop test',
    'drag and drop mouse trainer',
    'drag and drop precision',
    'mouse drag test',
    'cursor control test',
    'mouse coordination test',
    'mouse dragging practice',
    'fine motor control test mouse',
    'mouse stopping power',
    'deceleration aim drill',
    'inventory drag drill',
    'free mouse trainer',
  ],
  openGraph: {
    title: 'Drag and Drop Test – Mouse Control Drill | SkillDrills',
    description: 'Train mouse dragging accuracy, cursor deceleration, and spatial release timing with this free online motor drill. Free, instant browser-based tool.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drag and Drop Test – Mouse Control Drill | SkillDrills',
    description: 'Train mouse dragging accuracy, cursor deceleration, and spatial release timing with this free online motor drill. Free, instant browser-based tool.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/drag-and-drop'),
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
    { '@type': 'ListItem', position: 4, name: 'Drag and Drop Mouse Trainer', item: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Drag_and_drop", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Drag and Drop Test – Free Mouse Control Drill',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based drag and drop precision trainer. Drag a ball into a moving container and release it inside; your score raises the level, which shrinks the ball and container and speeds the container up.',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-16',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Drag and Drop Mouse Trainer',
  browserRequirements: 'Requires HTML5 Canvas, Pointer Lock API, and JavaScript',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop',
  applicationCategory: 'EducationalApplication',
  dateModified: '2026-09-16',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Drag and Drop Test – Mouse Control Drill',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop',
  description: 'Train mouse dragging accuracy, cursor deceleration, and spatial release timing with this free online motor drill.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
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
      name: 'What is the Drag and Drop Mouse Trainer and how does it test motor control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For 45 seconds you grab a ball by holding the left mouse button, drag it to a moving round container and release it inside. The results show score, accuracy (share of successful drops), number of drops, max combo and level reached. The clock is fixed: drops do not add time and misses do not remove any.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is dragging significantly more difficult than simple pointing or clicking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'MacKenzie, Sellen and Buxton (1991) found that dragging with the same device is measurably slower and more error-prone than simply pointing at the same target. Your finger has to keep the button pressed while the wrist and arm move the mouse, which makes the movement harder to control.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Accot-Zhai Steering Law and how does it apply to mouse dragging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulated by Johnny Accot and Shumin Zhai (1997), the Steering Law extends Fitts\'s Law to continuous trajectory-based tasks. It establishes that movement time scales with the integral of trajectory length divided by tunnel width. In dragging tasks, maintaining the payload inside target boundaries requires continuous closed-loop visual feedback rather than open-loop ballistic bursts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do players overshoot moving target containers during rapid dragging?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overshooting occurs when the neuromuscular braking impulse is mistimed relative to the target container velocity vector. Aimed movements end with a visually guided slowing phase (Elliott et al., 2010). If you accelerate too hard, there is not enough time to correct before release, so the ball lands outside the container rim.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does physical mouse grip style affect dragging accuracy and stability?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Palm grip provides maximum surface friction and forearm stabilization for smooth, consistent straight-line dragging. Claw grip offers greater vertical micro-adjustment dexterity through the fingertips but requires higher isometric endurance to maintain continuous button actuation without trembling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does drag and drop training help competitive FPS and MOBA gamers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dragging shows up in games as inventory management and looting (e.g. Apex Legends, PUBG) and as box selection in RTS titles. This drill practises controlled click-hold movement and accurate release; how much it transfers to a specific game varies from player to player.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do professional UI/UX designers and video editors benefit from dragging drills?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digital artists, CAD users and video editors drag constantly: timeline playheads, keyframes and bezier handles. The drill practises the same controlled carry and accurate release.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is drag accuracy and combo multiplier calculated in this drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Accuracy is successful drops divided by drop attempts. Each drop scores 100 points × your combo multiplier (up to 3.0×) × a level bonus. Your level rises every 250 points, plus a bonus level for every 4 drops in a row: the ball and container get smaller, and the container moves faster and changes direction more often. Releasing outside the container, or letting the container timer run out (while Target Timeouts is on), resets the combo to zero.',
      },
    },
    {
      '@type': 'Question',
      name: 'What hardware settings optimize cursor deceleration and dragging precision?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Disable Windows mouse acceleration (Enhance Pointer Precision), keep the same DPI and sensitivity between runs, use a mousepad with predictable glide, and a 1000 Hz polling rate if your mouse supports it. The drill needs a mouse and Pointer Lock; touch-only devices are not supported.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much daily drag and drop practice is recommended for muscle memory?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A few 45-second runs with short breaks is a sensible routine. Stop when your hand or forearm feels tense or tired, because holding the button while fatigued makes drops less accurate.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Train Drag and Drop Mouse Precision',
  description: 'Step-by-step training protocol for mastering cursor deceleration, spatial payload carrying, and boundary release timing.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Align Crosshair Over Pickup Node',
      text: 'Move the crosshair onto the green ball.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Depress and Hold Primary Mouse Button',
      text: 'Press and hold the left mouse button to pick the ball up.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Carry the Ball to the Container',
      text: 'Move the ball smoothly toward the moving container, aiming where it is heading rather than where it was.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Release Cleanly Within Destination Bounds',
      text: 'Release the button when the ball centre is inside the container rim. A clean drop raises your combo; a release outside resets it.',
      url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'mackenzie1991', 'fitts1954', 'elliott2010', 'woods2015'),
  intro: {
    title: `What Is a Drag and Drop Test? Dragging, Steering and Deceleration`,
    paragraphs: [
      `A drag and drop test measures how accurately you can pick up an item with the mouse and release it on a target. In this free browser drill you drag a ball into a moving container for 45 seconds; every clean drop scores points multiplied by your combo, and your score raises the level, which shrinks both and speeds the container up. It trains controlled dragging rather than simple clicking.`,
      'In human-computer interaction, continuous dragging represents a fundamentally distinct neuromuscular challenge compared to point-and-click targeting. While discrete pointing is governed by Fitts\'s Law (Fitts, 1954), dragging requires sustained isometric co-contraction of digit flexor muscles to keep the mouse switch depressed while simultaneously coordinating multiaxial limb translation across a physical surface.',
      'MacKenzie, Sellen and Buxton (1991) found that dragging is measurably slower and more error-prone than pointing at the same target with the same device. Holding the button down while moving restricts fine finger movement and makes the carry harder to control.',
      'Furthermore, Johnny Accot and Shumin Zhai (1997) formulated the Steering Law to mathematically describe trajectory-constrained motor performance: movement time scales with the integral of distance over tunnel width along the entire trajectory. In dynamic dragging tasks, users must continually balance forward momentum against the necessity of decelerating within a moving terminal boundary (Elliott et al., 2010), engaging antagonistic muscle groups to prevent overshooting.',
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same mouse and display rather than against someone else\'s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmarks: {
    title: 'Drag and Drop Test: SkillDrills Practice Bands',
    caption: 'SkillDrills practice bands, not research norms or user data: SkillDrills collects no aggregate data. They match the grade on the results screen, which is set by your final score.',
    headers: ['Grade', 'Label', 'Final Score', 'Band'],
    rows: [
      ['S+', 'Legendary', '14,440+ PTS', 'SkillDrills practice band'],
      ['S', 'Elite', '11,560+ PTS', 'SkillDrills practice band'],
      ['A', 'Excellent', '9,000+ PTS', 'SkillDrills practice band'],
      ['B', 'Great', '5,760+ PTS', 'SkillDrills practice band'],
      ['C', 'Good', '3,240+ PTS', 'SkillDrills practice band'],
      ['D', 'Keep Going', '1,440+ PTS', 'SkillDrills practice band'],
      ['F', 'Needs Practice', 'under 1,440 PTS', 'SkillDrills practice band'],
    ],
  },
  protocols: {
    title: 'How to train dragging accuracy',
    items: [
      {
        title: 'Protocol 1: Isometric Grip Force Stabilization (Levels 1–4)',
        description: 'Focus exclusively on maintaining minimal, relaxed downward switch pressure during mouse translation. Over-gripping the mouse switch stiffens the wrist flexors and induces high-frequency tremors. Aim for a feather-light click hold while executing smooth, deliberate transport strokes.',
      },
      {
        title: 'Protocol 2: Accot-Zhai Steering Tunnel Calibration (Levels 5–8)',
        description: 'Minimize spatial path deviation between payload pickup and the target container. Visualize an imaginary straight-line tunnel connecting the two coordinates; consciously eliminate lateral arc swings and zig-zag corrections to maximize steering throughput and conserve session time.',
      },
      {
        title: 'Protocol 3: Antagonist Deceleration & Release Braking (Levels 9–12)',
        description: 'Start slowing the cursor before you reach the moving container instead of sliding in at full speed, and release once the ball is settled inside the rim.',
      },
      {
        title: 'Protocol 4: Lead the Moving Container (Higher Levels)',
        description: 'At higher levels the container moves faster and changes direction more often. Steer toward where it is heading rather than where it is now, and drop the ball into its path.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About Drag and Drop Motor Control',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEn = {
  title: "Drag & Drop Mouse Trainer",
  subtitle: "Drag and drop mouse accuracy drill for placing targets precisely and improving cursor coordination",
  startButtonText: "START DRILL",
  playAgainText: "Play Again",
  shareText: "Share Score",
  exitText: "Exit",
  accuracyLabel: "Accuracy",
  targetDropsLabel: "Target Drops",
  maxComboLabel: "Max Combo",
  peakLevelLabel: "Peak Level",
  rulesTitle: "Drill Instructions & Scoring System",
  rulesItems: [
    { num: "1", text: "Target Drop", highlight: "+100 PTS × Combo", result: "Clean Drag & Release in Container" },
    { num: "2", text: "Continuous Combo", highlight: "Up to 3.0× Multiplier", result: "Chain Consecutive Drops" },
    { num: "3", text: "Level Progression", highlight: "+1 Level / 250 PTS", result: "Smaller ball & container, faster moves" },
    { num: "4", text: "Miss & Timeout", highlight: "Combo Reset", result: "No time penalty; clock fixed at 45s" }
  ],
};

export default function DragAndDropPage() {
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
      <DragAndDropClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
