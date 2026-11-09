import AimTrainerClient from './AimTrainerClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — aim-trainer (motor-aim-trainer)
// PRIMARY:  "aim trainer"                 — Core commercial / competitive gaming query (~9,800 searches/mo)
//           "fps aim trainer"             — Tactical gamer training search
// SECONDARY / LSI:
//           "mouse accuracy test"         — Baseline manual dexterity assessment
//           "aim trainer online"          — Zero-install web tool query
//           "aim training drill"          — Action-oriented practice phrase
//           "mouse precision test"        — Sensorimotor precision term
//           "flick aim trainer"           — Ballistic flick target search
//           "click accuracy test"         — Timing and precision click query
//           "aim practice online"         — General FPS warmup search
//           "hand eye coordination aim"   — Motor psychophysics assessment query
//           "target acquisition drill"    — Tactical marksmanship and esport phrase
//           "gridshot online"             — Popular benchmark clone search
// LOCALES:
//           ja: "エイム 練習" (Aim Practice / Aim Trainer)
//           ko: "에임 연습" (Aim Practice / Aim Trainer)
//           de: "aim trainer online" (Aim Trainer Online)
// ============================================================

export const metadata = {
  title: 'Aim Trainer – Mouse Precision and Flick Shot | SkillDrills',
  description: 'Train mouse accuracy, micro-flicks, and reaction speed with this free FPS aim trainer, grounded in Fitts Law with score-based difficulty scaling.',
  keywords: [
    'aim trainer',
    'fps aim trainer',
    'mouse accuracy test',
    'aim trainer online',
    'aim training drill',
    'mouse precision test',
    'flick aim trainer',
    'click accuracy test',
    'aim practice online',
    'hand eye coordination aim test',
    'target acquisition drill',
    'gridshot online',
    'free aim trainer',
  ],
  openGraph: {
    title: 'Aim Trainer Elite – Free Online Mouse Precision Drill | SkillDrills',
    description: 'Train mouse accuracy, micro-flicks, and reaction speed with this free FPS aim trainer. Free, instant browser-based tool.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aim Trainer Elite – Free Online Mouse Precision Drill | SkillDrills',
    description: 'Train mouse accuracy, micro-flicks, and reaction speed with this free FPS aim trainer. Free, instant browser-based tool.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/aim-trainer'),
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
    { '@type': 'ListItem', position: 4, name: 'Aim Trainer Elite', item: 'https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Aim Trainer – Free Mouse Precision & Flick Shot Drill',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based FPS aim trainer. Click two moving targets before they expire; each hit adds 2 seconds and your score raises the level, which makes new targets smaller, faster and shorter-lived.',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-05',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Aim Trainer Elite',
  browserRequirements: 'Requires HTML5 Canvas, Pointer Lock API, and JavaScript',
  url: 'https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer',
  applicationCategory: 'EducationalApplication',
  dateModified: '2026-09-05',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-09-05',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Aim Trainer Elite and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Aim Trainer Elite is a mouse precision drill. Two targets drift across the stage, bouncing off the edges, and each one expires after a short lifetime (while Target Timeouts is on). Click them before they disappear. You start with 45 seconds; every hit adds 2 seconds (up to 60) and the run ends when the clock reaches zero.',
      },
    },
    {
      '@type': 'Question',
      name: "How does Fitts's Law apply to FPS aim training?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Fitts's Law states that the movement time required to hit a target is a logarithmic function of the ratio between target distance and target width. As your level rises, new targets spawn smaller and move faster, so the Index of Difficulty (ID) of each click increases.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is the two-component model of aimed motor movement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulated by Woodworth (1899) and updated by Elliott et al. (2010), goal-directed aiming consists of an initial open-loop ballistic impulse that covers the majority of the distance, followed by a closed-loop current control phase using visual feedback for final micro-adjustments.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does training micro-flicks transfer to games like Valorant and CS2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drill practises the same kind of small, fast corrections onto a moving target that first-shot accuracy in tactical shooters relies on. How much it transfers to a specific game varies from player to player.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good score on Aim Trainer Elite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkillDrills collects no player data, so there are no population norms. The results screen grades your final score: S+ from 43,320 points, S from 34,680, A from 27,000, B from 17,280, C from 9,720 and D from 4,320. The most useful comparison is your own personal best on the same mouse and display.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does score-based difficulty scaling function in this drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your level rises by 1 for every 1,750 points, with no cap. Each new target spawns according to the current level: its radius goes from 26 px toward 12 px (as low as 8 px on a long combo), its speed from 80 toward 370 px/s, and its lifetime from 2.8 s toward 0.4 s. A target does not shrink while it is on screen.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens when I miss or a target expires?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A missed click or an expired target resets your combo multiplier to 1.0× and costs 1 second of clock time. Points already scored are never taken away. This discourages spam-clicking and rewards deliberate, centered clicks.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does this drill support universal mouse sensitivity?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The drill incorporates raw pointer-lock input and integrates with the global mouse sensitivity slider on the drills hub to ensure matched cm/360 rotational sensitivity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does display refresh rate and mouse polling rate impact aim performance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 60 Hz display updates every 16.7 ms, a 144 Hz display every 6.9 ms and a 240 Hz display every 4.1 ms, and a 1000 Hz mouse reports every 1 ms against 8 ms at 125 Hz. Faster hardware shows target positions more smoothly; compare your runs on the same setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warmup routine yields the fastest motor coordination gains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A short warmup of a few runs, starting smooth and controlled and only then pushing speed, is a sensible routine before matches. Stop when your hand or forearm feels tense or tired.',
      },
    },
  ],
};


const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Aim Trainer Elite Online",
  "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "Free online browser-based 2D aim trainer for FPS gamers. Practice target acquisition, mouse accuracy, and click timing.",
  "dateModified": "2026-09-11",
  "gamePlatform": "Web Browser",
  "genre": ["Aim Trainer", "FPS Training", "Hand-Eye Coordination", "Reaction Speed"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Train Mouse Aim Precision and Flick Accuracy',
  description: 'Master raw mouse accuracy, micro-flicks, and target acquisition with Aim Trainer Elite.',
  dateModified: '2026-09-05',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer#step-1",
      
      name: 'Initialize Raw Mouse Input',
      text: 'Click the start card to lock pointer input and establish your baseline crosshair centering.',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer#step-2",
      
      name: 'Execute Ballistic Target Acquisition',
      text: 'Rapidly flick toward newly spawned targets with a smooth, decisive primary arm/wrist impulse.',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer#step-3",
      
      name: 'Apply Terminal Micro-Corrections',
      text: 'Decelerate smoothly as the crosshair nears the target, centering the reticle before executing the click.',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer#step-4",
      
      name: 'Build and Sustain Combo Multipliers',
      text: 'Chain consecutive hits without misses or timeouts to raise the combo multiplier up to 3.0× points.',
    },
  ],
};

const copyEn = {
  h1Keyword: "Aim Trainer Online",
  h1Suffix: null,
  subtitle: "Free mouse accuracy, target acquisition, and click-timing drill",
  rulesItems: [
    { num: "1", text: "Target Hit", highlight: "+100 PTS / +2s (max 60s)", result: "Click Moving Targets" },
    { num: "2", text: "Continuous Combo", highlight: "Up to 3.0× Points", result: "Chain Consecutive Hits" },
    { num: "3", text: "Level Progression", highlight: "+1 Level / 1750 PTS", result: "New Targets Smaller & Faster" },
    { num: "4", text: "Miss & Timeout", highlight: "Combo Reset", result: "-1s Clock" }
  ],
};

const guideProps = {
  sources: pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  eyebrow: "Motor Control Psychophysics & Human-Computer Interaction",
  intro: {
    title: `What Is an Aim Trainer? Fitts's Law and Mouse Precision`,
    paragraphs: [
      `An aim trainer is a browser drill where you click moving targets as fast and accurately as you can to train mouse control. In this free one two targets drift across the screen and expire after a short lifetime; each hit adds 2 seconds to the clock, and your score raises the level, which makes new targets smaller, faster and shorter-lived. It tracks accuracy and streak, so you can compare your own sessions.`,
      "Target acquisition with a computer mouse is among the most demanding fine motor coordination tasks evaluated in human-computer interaction (HCI) and sports psychophysics. Each click requires translating a target position on screen into a fast, accurate movement of the hand, wrist and forearm (Fitts, 1954; MacKenzie, 1992).",
    ],
  },
  science: {
    title: "How Aim Precision Actually Works",
    items: [
      {
        title: "Fitts's Law & the Index of Difficulty (ID)",
        body: "In his foundational 1954 treatise, Paul M. Fitts proved that the movement time (MT = a + b · log₂(2D / W) = a + b · ID) required to rapidly move to a target area is mathematically modeled by the distance to the target (D) and the target width or diameter (W). The logarithmic component is termed the Index of Difficulty (ID), measured in bits. In Aim Trainer Elite, as your level advances, new targets spawn with a smaller radius (26 px toward 12 px, as low as 8 px on a long combo) and move faster, so the Index of Difficulty of each click rises (Fitts, 1954; MacKenzie, 1992).",
      },
      {
        title: "The two-component model of goal-directed aiming (Woodworth 1899; Elliott et al. 2010)",
        body: "High-speed mouse aiming is not a single continuous movement. Pioneering work by Woodworth (1899) and modern neuromuscular synthesis by Elliott et al. (2010) established that goal-directed aiming comprises two distinct sub-movements: an initial ballistic impulse (open-loop phase) that covers most of the distance, followed by a slower closed-loop phase in which vision guides the final corrections before the click. Common errors are over-flicking (too much force, then back-and-forth correction) and under-flicking (stopping early and creeping onto the target) (Elliott et al., 2010).",
      },
      {
        title: "Input polling, refresh quantization & sensory delays",
        body: "Your hardware adds delay of its own. At 60 Hz the display updates in 16.7 ms steps; at 144 Hz or 240 Hz that drops to 6.9 ms or 4.1 ms, and mouse polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz (Woods et al., 2015). Treat differences under about 5 ms as noise and compare runs on the same setup.",
      },
    ],
  },
  benchmark: {
    title: "Aim Trainer: SkillDrills Practice Bands",
    description: "SkillDrills practice bands, not research norms or user data: this site collects no aggregate data. They match the grade on the results screen, which is set by your final score.",
    columns: ['Grade', 'Label', 'Final Score', 'Band'],
    rows: [
      { tier: 'S+', label: 'Legendary', score: '43,320+ PTS', band: 'SkillDrills practice band' },
      { tier: 'S', label: 'Elite', score: '34,680+ PTS', band: 'SkillDrills practice band' },
      { tier: 'A', label: 'Excellent', score: '27,000+ PTS', band: 'SkillDrills practice band' },
      { tier: 'B', label: 'Great', score: '17,280+ PTS', band: 'SkillDrills practice band' },
      { tier: 'C', label: 'Good', score: '9,720+ PTS', band: 'SkillDrills practice band' },
      { tier: 'D', label: 'Keep Going', score: '4,320+ PTS', band: 'SkillDrills practice band' },
      { tier: 'F', label: 'Needs Practice', score: 'under 4,320 PTS', band: 'SkillDrills practice band' },
    ],
  },
  protocols: {
    title: "How to Train Mouse Aim",
    description: "Coaching guidance based on the models cited above.",
    items: [
      { title: "Ballistic Initial Impulse Calibration (Woodworth, 1899; Elliott et al., 2010)", description: "Train your primary flick to cover most of the distance in a single clean movement. Avoid multiple hesitations during flight; commit fully to the ballistic impulse." },
      { title: "Terminal Deceleration & Micro-Correction (Fitts, 1954)", description: "As crosshairs enter the target perimeter, transition to fine wrist/finger control. Smoothly decelerate to absorb cursor momentum rather than snapping past the hitbox." },
      { title: "Universal Sensitivity & Motor Memory Calibration (MacKenzie, 1992)", description: "Calibrate your physical mouse cm/360 so that an identical physical hand displacement produces consistent crosshair translation across all games and drills." },
      { title: "Rhythmic Decoupling & Click Discipline (Woods et al., 2015)", description: "Maintain a relaxed grip on the mouse chassis. Ensure the physical finger actuation of the mouse click button does not cause downward or lateral torque that pulls the reticle off target." },
    ],
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text })),
  },
};

export default function AimTrainerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <AimTrainerClient copy={copyEn} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
