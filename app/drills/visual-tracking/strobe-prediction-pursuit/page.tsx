import StrobePredictionPursuitClient from './StrobePredictionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Occlusion Prediction Pursuit | SkillDrills",
  description: "Practise visual prediction during controlled target occlusion in a browser. Free tracking practice; not a clinical eye test or treatment.",
  keywords: [
    "occlusion prediction pursuit",
    "visual motion occlusion practice",
    "controlled target occlusion",
    "occlusion visual tracking",
    "trajectory extrapolation test",
    "visual prediction practice",
    "anticipatory target tracking",
    "intermittent visual occlusion",
    "dynamic visual acuity drill",
    "esports blind target tracking",
    "forward internal model tracking",
    "gaze prediction speed test"
  ],
  alternates: {
    canonical: "https://skilldrills.online/drills/visual-tracking/strobe-prediction-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/strobe-prediction-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Occlusion Prediction Pursuit | SkillDrills",
    description: "Practise visual prediction during controlled target occlusion in a browser. Not a clinical eye test or treatment.",
    url: "https://skilldrills.online/drills/visual-tracking/strobe-prediction-pursuit",
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Occlusion Prediction Pursuit | SkillDrills",
    description: "Practise visual prediction during controlled target occlusion in a browser. Not a clinical eye test or treatment.",
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
      "name": "Occlusion Prediction Pursuit",
      "item": "https://skilldrills.online/drills/visual-tracking/strobe-prediction-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Occlusion Prediction Pursuit",
  "operatingSystem": "Web Browser",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Browser practice task for following a moving point and predicting its position during controlled occlusion."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Occlusion Prediction Pursuit Drill",
  "url": "https://skilldrills.online/drills/visual-tracking/strobe-prediction-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "All modern browsers",
  "browserRequirements": "Requires JavaScript and HTML5 Canvas support"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Occlusion Prediction Pursuit",
  "description": "Visual tracking practice task for observing a moving point and estimating its reappearance after controlled occlusion.",
  "genre": ["Visual Training", "Motion Tracking", "Reflex Training"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Web Browser"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Practise Target Prediction with Controlled Occlusion",
  "description": "A short browser protocol for observing a moving point and estimating where it will reappear.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Observe the visible path",
      "text": "Choose a comfortable viewing distance and follow the point while it is visible. Keep your head relaxed and do not force the eyes."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Estimate the covered segment",
      "text": "During the brief covered interval, make a calm estimate of the point's continuing direction. This is a practice task, not a measurement of neural activity."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Check the reappearance",
      "text": "Notice where the point returns and compare it with your estimate without making a large forced eye movement."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Stop when symptoms appear",
      "text": "Take a break or stop for pain, dizziness, nausea, persistent blur, double vision, or unusual visual symptoms."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    ["What is Occlusion Prediction Pursuit?", "It is a browser task in which a moving point is briefly covered and then shown again. You observe the visible path and compare the reappearance with your estimate; the page does not measure eye position."],
    ["Is this a strobe-light or strobe-glasses exercise?", "No. It is a controlled target-occlusion task, not a simulation of medical equipment or a recommendation for stroboscopic eyewear. It should remain comfortable and should be stopped if visual symptoms appear."],
    ["Does the drill measure smooth-pursuit gain or visual acuity?", "No. The browser knows the point's drawn position and your settings, but it cannot see your eyes. Results are task and setup records, not clinical measurements."],
    ["What should I watch during the covered interval?", "Keep a relaxed estimate of the point's continuing direction. Do not force a large eye or head movement, and do not treat a mismatch as evidence of a visual disorder."],
    ["Can this diagnose a tracking or binocular problem?", "No. Diagnosis requires an appropriate history and examination by a qualified eye-care professional. This page cannot assess binocular coordination, vestibular function, or eye health."],
    ["Can this replace vision therapy or concussion rehabilitation?", "No. Use clinician-directed care for concussion, double vision, persistent dizziness, eye pain, or another diagnosed condition. Stop this task if symptoms worsen."],
    ["Can it improve sports or gaming performance?", "Transfer is not established by this browser task. It can provide repeatable practice for observing moving targets, but it does not promise a sport, gaming, or eyesight benefit."],
    ["How should I set the difficulty?", "Start with the slowest comfortable setting and a visible path. Change one variable at a time, keep the session short, and return to the previous setting if comfort or control drops."],
    ["How long should I practise?", "Use short blocks with breaks and stop when the task becomes uncomfortable. There is no universal prescription for this browser exercise."],
    ["When should I stop and seek advice?", "Stop for pain, dizziness, nausea, persistent blur, double vision, headache, or unusual visual symptoms. Seek professional advice if symptoms persist or recur outside the task."]
  ].map(([name, text]) => ({
    "@type": "Question",
    name,
    acceptedAnswer: { "@type": "Answer", text }
  }))
};

const guide = {
  heading: "Occlusion Prediction Pursuit - Controlled Target Prediction Practice",
  intro: [
    "This browser exercise presents one moving point, briefly covers it, and then shows it again. The task is designed as repeatable visual-motion practice for observing direction and estimating a short continuation; it is not a clinical intervention, diagnostic test, or simulation of stroboscopic equipment.",
    "During occlusion, the point continues along its programmed path. A user can make a calm prediction and compare it with the reappearance, but the browser cannot determine where the eyes were looking or whether a mismatch came from vision, attention, input, or display timing.",
    "Use a comfortable distance, neutral posture, normal blinking, and short sessions. Keep the path visible while learning the task, change only one setting at a time, and stop for pain, dizziness, nausea, persistent blur, double vision, headache, or unusual symptoms."
  ],
  benchmarks: {
    title: "Controlled-Occlusion Practice Bands",
    headers: ["Practice band", "Speed setting", "What to compare", "Comfort check", "Use"],
    rows: [
      ["Orientation", "0.5x–1.0x", "Can you describe the continuing direction?", "No symptom increase", "Learn the task"],
      ["Steady", "1.0x–2.0x", "Does the estimate stay consistent?", "Relaxed eyes and posture", "Repeat the same setup"],
      ["Variable", "2.0x–3.0x", "Does one changed setting alter comfort?", "Short block with breaks", "Add one challenge"],
      ["Advanced practice", "3.0x+", "Compare only like-for-like sessions", "Stop before strain", "Optional challenge"],
      ["Reference", "Any setting", "Record duration, device, and symptoms", "Comfort is the gate", "Personal baseline"]
    ],
    note: "These are practice bands for this browser exercise, not clinical norms, population percentiles, or eye-movement measurements."
  },
  techniques: {
    title: "Four Core Techniques for Controlled Occlusion Practice",
    items: [
      {
        name: "Observe the visible path",
        desc: "Follow the point while it is visible and note its continuing direction without forcing your eyes or head.",
        tips: "Keep the path visible while learning the task and blink normally."
      },
      {
        name: "Estimate the covered segment",
        desc: "During the brief covered interval, make a calm estimate of where the point will continue, treating it as a simple task prediction.",
        tips: "Use the last visible direction; do not chase a perfect answer."
      },
      {
        name: "Compare the reappearance",
        desc: "Notice where the point returns and compare it with your estimate. The result is a practice observation, not a measure of eye accuracy.",
        tips: "Compare like-for-like sessions on the same display and browser."
      },
      {
        name: "Use a symptom stop rule",
        desc: "Keep sessions short and stop for pain, dizziness, nausea, persistent blur, double vision, headache, or unusual visual symptoms.",
        tips: "Seek professional advice if symptoms persist or recur outside the task."
      }
    ]
  },
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('appelbaum2011', 'bennett2007', 'mitroff2013', 'smith2016', 'woods2015', 'leigh2015'),
  related: [
    { href: "/drills/visual-tracking/constant-slow-pursuit", label: "Smooth Pursuit Eye Exercise (Constant Slow)" },
    { href: "/drills/visual-tracking/directional-chaos-pursuit", label: "Directional Chaos Pursuit (Erratic Motion)" },
    { href: "/drills/visual-tracking/dynamic-evasion-pursuit", label: "Dynamic Evasion Pursuit (Reactive Tracking)" },
    { href: "/drills/visual-tracking/ghosting-suppress-pursuit", label: "Ghosting Suppress Pursuit (Fixation Stability)" },
    { href: "/drills/visual-tracking/infinity-pursuit", label: "Figure-8 Eye Tracking Exercise (Infinity)" },
    { href: "/drills/visual-tracking/sine-wave-pursuit", label: "Sine Wave Pursuit (Harmonic Motion)" }
  ]
};

export default function StrobePredictionPursuitPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <StrobePredictionPursuitClient copy={{ title: "Occlusion Prediction Pursuit", subtitle: "Controlled visual prediction drill with a brief covered interval; not a clinical eye test" }} />
      <DrillGuide guide={guide} />
    </>
  );
}
