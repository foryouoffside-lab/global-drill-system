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
  description: 'Train mouse accuracy, micro-flicks, and reaction speed with this free FPS aim trainer, grounded in Fitts Law with dynamic score-based difficulty scaling.',
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
  description: 'Free browser-based FPS aim trainer. Sharpen mouse accuracy, ballistic micro-flicks, and target acquisition latency with adaptive difficulty scaling.',
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
        text: 'Aim Trainer Elite is an interactive motor coordination drill engineered to test and enhance raw mouse precision, target acquisition speed, and click timing. Observers acquire moving targets that shrink and accelerate dynamically across a canvas stage.',
      },
    },
    {
      '@type': 'Question',
      name: "How does Fitts's Law apply to FPS aim training?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Fitts's Law states that the movement time required to hit a target is a logarithmic function of the ratio between target distance and target width. As targets shrink and spawn further away, the movement's Index of Difficulty (ID) increases, requiring tighter neuromuscular control.",
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
        text: 'Yes. First-shot headshot accuracy in tactical shooters heavily depends on micro-flick precision—making small, rapid 5 to 15-degree ballistic adjustments to center crosshairs on moving opponent hitboxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good score on Aim Trainer Elite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Novice performers typically score below 8,000 PTS (Level 1–2). Competent intermediate aimers achieve 18,000 to 31,999 PTS (Level 6–8), while elite competitive FPS athletes reach 48,000+ PTS (Level 12+) with accuracy above 95%.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does score-based difficulty scaling function in this drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For every 1,750 points scored, your difficulty level advances. Target radius shrinks from 26px down to 8px, velocity increases from 80px/s to 370px/s, and target time-to-live drops from 2.8s down to 0.40s.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do missed clicks penalize score and streak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Missing shots or allowing targets to expire resets your combo multiplier back to 1.0x. This enforces trigger discipline, discouraging uncontrolled spam-clicking and rewarding deliberate, centered precision.',
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
        text: 'Higher refresh rates (144 Hz / 240 Hz) and high mouse polling rates (1000 Hz+) reduce frame rendering lag and cursor motion jitter, allowing the visual cortex to receive real-time target feedback 10–12 ms earlier per movement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warmup routine yields the fastest motor coordination gains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A structured 10 to 15-minute daily warmup focusing on smooth ballistic initial impulses and gradual speed acceleration primes motor cortex excitability and enhances hand-eye coordination before competitive matches.',
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
      text: 'Chain consecutive hits without misses or timeouts to compound combo multipliers up to 3.0x bonus points.',
    },
  ],
};

const copyEn = {
  h1Keyword: "Aim Trainer Online",
  h1Suffix: " - Aim Trainer Elite Online",
  subtitle: "Online aim trainer for mouse accuracy, target acquisition, reaction speed, and precision click timing",
  rulesItems: [
    { num: "1", text: "Target Hit", highlight: "+100 PTS / +0.6s", result: "Acquire & Click Moving Targets" },
    { num: "2", text: "Continuous Combo", highlight: "Up to 3.0× Points", result: "Chain Consecutive Hits" },
    { num: "3", text: "Level Progression", highlight: "+1 Level / 1750 PTS", result: "Targets Shrink & Accelerate" },
    { num: "4", text: "Miss & Timeout", highlight: "Combo Reset", result: "Penalty Deducts -0.8s" }
  ],
};

const guideProps = {
  sources: pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  eyebrow: "Motor Control Psychophysics & Human-Computer Interaction",
  intro: {
    title: "The Science of Mouse Aim, Fitts's Law & Motor Acquisition Precision",
    paragraphs: [
      "Target acquisition with a computer mouse is among the most demanding fine motor coordination tasks evaluated in human-computer interaction (HCI) and sports psychophysics. Whether clearing corners in tactical first-person shooters, operating surgical robotic interfaces, or conducting rapid visual-motor inspection, the human neuromuscular system must translate two-dimensional visual coordinates into rapid, sub-millimeter physical contractions of the hand, wrist, and forearm (Fitts, 1954; MacKenzie, 1992).",
    ],
  },
  science: {
    title: "How Aim Precision Actually Works",
    items: [
      {
        title: "Fitts's Law & the Index of Difficulty (ID)",
        body: "In his foundational 1954 treatise, Paul M. Fitts proved that the movement time (MT = a + b · log₂(2D / W) = a + b · ID) required to rapidly move to a target area is mathematically modeled by the distance to the target (D) and the target width or diameter (W). The logarithmic component is termed the Index of Difficulty (ID), measured in bits. In Aim Trainer Elite, as your score level advances, target diameter (W) contracts from 26 pixels down to 8 pixels, while targets move and disperse across greater distances (D). This causes the Index of Difficulty to scale exponentially, directly taxing your motor system's information capacity (Fitts, 1954; MacKenzie, 1992).",
      },
      {
        title: "The two-component model of goal-directed aiming (Woodworth 1899; Elliott et al. 2010)",
        body: "High-speed mouse aiming is not a single continuous movement. Pioneering work by Woodworth (1899) and modern neuromuscular synthesis by Elliott et al. (2010) established that goal-directed aiming comprises two distinct sub-movements: an initial ballistic impulse (open-loop phase), where the central nervous system issues a pre-programmed neuromuscular burst that propels the mouse across 80% to 90% of the trajectory in roughly 120–180 milliseconds — too fast for visual feedback to modify the flight path — followed by current control and terminal deceleration (closed-loop phase), where the visual system processes retinal slip error and sends rapid sensory corrections via the cerebellum and motor cortex to make sub-millimeter adjustments before the click. Untrained players frequently suffer from over-flicking (excessive ballistic force requiring back-and-forth correction) or under-flicking (premature deceleration causing sluggish creep); elite marksmen minimize movement variance by optimizing the ballistic impulse to terminate right on the target edge (Elliott et al., 2010; Woods et al., 2015).",
      },
      {
        title: "Input polling, refresh quantization & sensory delays",
        body: "Precise click timing requires minimizing system latency. Human motor reaction times are bounded by neurosensory conduction (retinal transmission ~30–50 ms, visual cortex processing ~60–80 ms, corticospinal motor execution ~40–60 ms). At 60 Hz display refresh, frames are quantized in 16.7 ms intervals; at 144 Hz or 240 Hz, this delay drops to 6.9 ms or 4.1 ms, providing clearer retinal feedback that significantly reduces trajectory error in the closed-loop aiming phase (Woods et al., 2015).",
      },
    ],
  },
  benchmark: {
    title: "Empirical Aim Precision Benchmarks",
    description: "The bands below are an editorial guide to reading your own 45-second session score, accuracy and peak combo. They are set by SkillDrills to make the numbers legible, not measured population norms: this site collects no aggregate data, and neither Fitts (1954) nor MacKenzie (1992) publishes percentiles for this task.",
    columns: ['Tier', 'Session Score', 'Peak Level', 'Hit Accuracy', 'Classification'],
    rows: [
      { tier: 'Tier 1', score: '> 48,000 PTS', level: 'Level 12+', accuracy: '> 95% (Combo 25+)', classification: 'Apex Marksman / Tactical Tier 1' },
      { tier: 'Tier 2', score: '32,000 – 47,999 PTS', level: 'Level 9–11', accuracy: '88% – 94% (Combo 18–24)', classification: 'Precision Fragger / Competitive FPS' },
      { tier: 'Tier 3', score: '18,000 – 31,999 PTS', level: 'Level 6–8', accuracy: '78% – 87% (Combo 12–17)', classification: 'Proficient Gunfighter / Intermediate' },
      { tier: 'Tier 4', score: '8,000 – 17,999 PTS', level: 'Level 3–5', accuracy: '65% – 77% (Combo 6–11)', classification: 'Developing Aimer / Baseline Recreational' },
      { tier: 'Tier 5', score: '< 8,000 PTS', level: 'Level 1–2', accuracy: '< 65% (Combo < 6)', classification: 'High Tracking Jitter / Over-Flicker' },
    ],
  },
  protocols: {
    title: "How to Train Mouse Aim",
    description: "To systematically compress target acquisition latency and elevate micro-flick precision, apply these four evidence-based motor protocols during training.",
    items: [
      { title: "Ballistic Initial Impulse Calibration (Woodworth, 1899; Elliott et al., 2010)", description: "Train your primary flick movement to cover 90% of the target distance in a single clean motor burst. Avoid multiple hesitations during flight; commit fully to the ballistic impulse." },
      { title: "Terminal Deceleration & Micro-Correction (Fitts, 1954)", description: "As crosshairs enter the target perimeter, transition to fine wrist/finger control. Smoothly decelerate to absorb cursor momentum rather than snapping past the hitbox." },
      { title: "Universal Sensitivity & Motor Memory Calibration (MacKenzie, 1992)", description: "Calibrate your physical mouse cm/360 so that an identical physical hand displacement produces consistent crosshair translation across all games and drills, eliminating neuromuscular interference." },
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
