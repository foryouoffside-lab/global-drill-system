import SineWavePursuitClient from './SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Smooth Pursuit Eye Training – Sine Wave | SkillDrills",
  description: "Free smooth pursuit exercise: follow a target along a sine wave to practise steady, rhythmic eye tracking in your browser. No sign-up.",
  keywords: [
    "smooth pursuit eye training",
    "sine wave pursuit training",
    "sinusoidal eye movement",
    "wave tracking exercise",
    "oscillating target drill",
    "eye tracking training",
    "harmonic pursuit drill",
    "smooth pursuit velocity exercise",
    "gaze stability training",
    "ocular motor agility practice",
    "zero phase lag tracking",
    "visual tracking speed test"
  ],
  alternates: {
    canonical: "https://skilldrills.online/drills/visual-tracking/sine-wave-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/sine-wave-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Smooth Pursuit Eye Training – Sine Wave | SkillDrills",
    description: "Free smooth pursuit exercise: follow a target along a sine wave to practise steady, rhythmic eye tracking in your browser. No sign-up.",
    url: "https://skilldrills.online/drills/visual-tracking/sine-wave-pursuit",
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Smooth Pursuit Eye Training – Sine Wave | SkillDrills",
    description: "Free smooth pursuit exercise: follow a target along a sine wave to practise steady, rhythmic eye tracking in your browser. No sign-up.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Visual Tracking",
      "item": "https://skilldrills.online/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Sine Wave Pursuit",
      "item": "https://skilldrills.online/drills/visual-tracking/sine-wave-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Sine Wave Pursuit Eye Training",
  "operatingSystem": "Web Browser",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Browser practice task: follow a target along a sinusoidal path with the pointer; the end screen reports pointer-to-target distance, not eye movement."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sine Wave Pursuit Drill",
  "url": "https://skilldrills.online/drills/visual-tracking/sine-wave-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "All modern browsers",
  "browserRequirements": "Requires JavaScript and HTML5 Canvas support"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Sine Wave Pursuit",
  "description": "Continuous ocular tracking exercise where users foveate moving targets undergoing rhythmic harmonic velocity oscillations.",
  "genre": ["Visual Training", "Smooth Pursuit", "Reflex Training"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Web Browser"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Train Harmonic Tracking with Sine Wave Pursuit",
  "description": "Step-by-step protocol to condition cerebellar phase-locking and eliminate sensory phase lag along wave curves.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Phase-Lock Oscillation Frequency",
      "text": "Position yourself 50-70 cm from the screen. Observe the initial wave cycles to internalize oscillation frequency and rhythm."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Foveate Midpoint Acceleration",
      "text": "Accelerate eye velocity through the central axis crossing where tangential target velocity reaches its peak."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cushion Deceleration at Turning Points",
      "text": "Smoothly decelerate extraocular tension as the target approaches wave crests and troughs to avoid position overshoot."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Suppress Corrective Saccades",
      "text": "Rely entirely on continuous feedforward pursuit velocity matching rather than stuttered catch-up saccadic jumps."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Sine Wave Pursuit drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sine Wave Pursuit trains harmonic smooth pursuit tracking along horizontal and vertical wave curves, conditioning the brain to eliminate visual phase lag through cerebellar feedforward prediction (Robinson, 1965)."
      }
    },
    {
      "@type": "Question",
      "name": "How does sinusoidal tracking differ from constant velocity pursuit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sinusoidal targets continuously alter velocity and acceleration: peak speed occurs at midpoint crossings, while velocity drops to zero at directional turning points, challenging dynamic neuromuscular calibration (Stark et al., 1962)."
      }
    },
    {
      "@type": "Question",
      "name": "What is zero phase lag tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zero phase lag occurs when the cerebellar internal clock synchronizes with target rhythm, allowing eye movements to match target trajectory in real time without the typical 130-150 ms visual reflex delay."
      }
    },
    {
      "@type": "Question",
      "name": "What causes catch-up saccades during wave tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If smooth pursuit velocity gain drops below 1.0, the eye falls behind the target. The brain then fires a ballistic catch-up saccade to re-center the fovea (Bahill et al., 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "How does sinusoidal pursuit benefit competitive FPS aim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In games like Apex Legends and Overwatch 2, opponents execute rhythmic strafing and jumping curves. Conditioning harmonic pursuit prevents overshooting at directional apexes."
      }
    },
    {
      "@type": "Question",
      "name": "How does this drill transfer to ball sports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In tennis, volleyball, and soccer, balls describe parabolic and oscillating flight paths. Smooth pursuit allows players to maintain clear dynamic visual acuity throughout the trajectory."
      }
    },
    {
      "@type": "Question",
      "name": "Why is head immobility essential during wave pursuit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Involuntary cervical rotations engage the vestibulo-ocular reflex (VOR), which generates counter-rotations and destabilizes smooth pursuit gain (Leigh & Zee, 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "How does monitor refresh rate affect harmonic tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High refresh monitors (144Hz+) render smooth continuous curves without frame judder, providing seamless motion input for cortical pursuit centers (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Is this sinusoidal training tool free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this training completely free directly in your web browser with zero registration or installation required."
      }
    },
    {
      "@type": "Question",
      "name": "How frequently should I practice sine wave pursuit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short sessions of 5 to 10 minutes with breaks are a comfortable starting point. The page does not measure eye velocity or saccades, so compare sessions by pointer time on target at the same settings, and stop if your eyes feel strained."
      }
    }
  ]
};

const guide = {
  heading: "Sine Wave Pursuit - Ocular Motor Training Standards",
  intro: [
    "Sine Wave Pursuit is a free smooth pursuit exercise. A target moves along a repeating sine wave and you follow it steadily with your eyes, keeping up as it speeds and slows through each curve. Choose a speed and duration, press start, and aim for a smooth, even track.",
    "The fidelity of the human oculomotor smooth pursuit system is most rigorously tested when tracking harmonic oscillatory trajectories rather than simple linear paths. Along a sinusoidal curve, target velocity and acceleration fluctuate continuously: speed reaches its maximum at the central zero-crossing axis, while decelerating smoothly to zero at the orbital crests and troughs before reversing direction (Stark et al., 1962; Robinson, 1965).",
    "Studies by David Robinson (1965) and Barnes (2008) established that while unpredictable motion produces a mandatory 130 to 150 ms sensorimotor delay (phase lag), periodic sinusoidal stimulation triggers rapid cerebellar adaptation. By establishing a predictive internal rhythm, feedforward motor commands fire directly to extraocular motor nuclei, achieving zero phase lag synchronization.",
    "When tracking frequency or velocity exceeds physiological limits, pursuit gain collapses. As demonstrated by Rashbass (1961) and Bahill et al. (1980), when eye velocity lags target speed, the visual system resorts to stuttered catch-up saccades. Sine Wave Pursuit lets you practise following a smooth wave at a speed you choose; it does not measure eye movement."
  ],
  benchmarks: {
    title: "SkillDrills Practice Bands (Time on Target)",
    headers: ["Practice Band", "Time on Target", "What to Try Next"],
    rows: [
      ["Settling in", "< 40%", "Keep speed at 1.0x or lower and repeat until the pointer stays near the target."],
      ["Holding", "40% – 70%", "Keep the same settings for a few sessions so results stay comparable."],
      ["Steady", "> 70%", "Raise speed by 0.5x or turn on Hide Line, then repeat."]
    ],
    note: "※ SkillDrills practice bands, not norms or percentiles. Time on target is the share of time the pointer is inside the target radius; it depends on target size, speed, screen and input device, and does not measure eye movement."
  },
  techniques: {
    title: "Four Core Techniques for Harmonic Sinusoidal Tracking",
    items: [
      {
        name: "Harmonic Phase-Locking",
        desc: "Use the opening oscillations to mentally calibrate target frequency. Engage internal cerebellar clocks to drive eye acceleration in sync with target rhythm (Robinson, 1965).",
        tips: "Count an internal steady cadence ('one-two, one-two') to eliminate passive sensory reaction lag."
      },
      {
        name: "Apex Deceleration Cushioning",
        desc: "As the target approaches crests or troughs, progressively relax ocular motor force. Prevent momentum from overshooting the spatial reversal point.",
        tips: "Visualize the weightless apogee of a swinging pendulum smoothly pivoting at its highest arc."
      },
      {
        name: "Zero-Crossing Acceleration Surge",
        desc: "Tangential speed reaches maximum velocity when crossing the central baseline. Proactively boost ocular drive through this sector to avoid falling behind.",
        tips: "Apply an intentional acceleration pulse at the midline to maintain continuous foveal lock."
      },
      {
        name: "Disciplined Saccade Suppression",
        desc: "Resist the urge to trigger twitchy catch-up saccades when minor positional errors occur. Compensate by adjusting smooth pursuit speed smoothly (Bahill et al., 1980).",
        tips: "Maintain ocular muscles relaxed and elastic, letting the gaze flow like liquid across wave crests."
      }
    ]
  },
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/drills/visual-tracking/constant-slow-pursuit", label: "Smooth Pursuit Eye Exercise (Constant Slow)" },
    { href: "/drills/visual-tracking/directional-chaos-pursuit", label: "Directional Chaos Pursuit (Erratic Motion)" },
    { href: "/drills/visual-tracking/dynamic-evasion-pursuit", label: "Dynamic Evasion Pursuit (Reactive Tracking)" },
    { href: "/drills/visual-tracking/ghosting-suppress-pursuit", label: "Ghosting Suppress Pursuit (Fixation Stability)" },
    { href: "/drills/visual-tracking/infinity-pursuit", label: "Figure-8 Eye Tracking Exercise (Infinity)" },
    { href: "/drills/visual-tracking/momentum-teleport-pursuit", label: "Teleport Gaze Tracking Drill (Momentum)" }
  ]
};

export default function SineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{ title: "Sine Wave Pursuit", subtitle: "Smooth pursuit eye training along a sine wave to build gaze stability, rhythm control, and continuous visual tracking" }} />
      <DrillGuide guide={guide} />
      <DrillFooter />
    </>
  );
}
