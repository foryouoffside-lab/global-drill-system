import MotorDrillsClient from './MotorDrillsClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: 'CPS Test, Aim Trainer & Mouse Precision Drills | SkillDrills',
  description: 'Free CPS test, aim trainer and mouse precision drills for click speed, accuracy, steady-hand control and keyboard speed. 8 drills, no sign-up.',
  keywords: [
    'mouse precision training', 'mouse accuracy test', 'aim trainer online',
    'motor skills drills', 'hand eye coordination training', 'click speed test',
    'cps test online', 'keyboard speed test', 'fine motor skills training',
    'flick training', 'finger dexterity test', 'steady hand game',
    'mouse tracing game', 'drag and drop game', 'reaction time training',
    'FPS aim practice', 'esports aim training', 'precision control drills',
    'cursor control training', 'movement speed drills', 'coordination exercises',
    'free browser motor drills', 'no download aim trainer', 'how to improve mouse accuracy',
  ],
  openGraph: {
    title: 'CPS Test, Aim Trainer & Mouse Precision Drills | SkillDrills',
    description: 'Free CPS test, aim trainer and mouse precision drills for click speed, accuracy, steady-hand control and keyboard speed. 8 drills, no sign-up.',
    type: 'website',
    url: 'https://skilldrills.online/drills/motor',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{
      url: 'https://skilldrills.online/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'Free Aim Trainer & Motor Skills Drills Online',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CPS Test, Aim Trainer & Mouse Precision Drills | SkillDrills',
    description: 'Free CPS test, aim trainer and mouse precision drills for click speed, accuracy, steady-hand control and keyboard speed. 8 drills, no sign-up.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor',
    languages: getAlternateLanguages('/drills/motor'),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en-US",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a good CPS score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Plain clicking on public click-speed tests is commonly reported at roughly 6 to 7 clicks per second over a few seconds, and faster techniques such as jitter or butterfly clicking can score higher on some mice. Results depend heavily on your mouse, test length and technique, so use your own repeated scores as the baseline."
      }
    },
    {
      "@type": "Question",
      "name": "How do motor skills drills help hand-eye coordination?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They give you repeatable aiming, tracing and click tasks that pair what you see with how you move the mouse. Practice usually improves the tasks you train; how far that carries into sport or daily life varies by person, and these drills are not a clinical test."
      }
    },
    {
      "@type": "Question",
      "name": "How can I improve mouse accuracy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with Aim Trainer for target acquisition, then Steady Hand Game and Mouse Tracing Game for slow, controlled movement. Keep desk, mouse, sensitivity and screen the same between sessions, practise in short blocks, and compare accuracy before speed."
      }
    },
    {
      "@type": "Question",
      "name": "What is Fitts's law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fitts's law (Fitts, 1954) predicts that the time to hit a target grows with its distance and shrinks as the target gets wider, commonly written MT = a + b log2(2D/W). It is why small, far targets take longer to click and why precision drills use varied target sizes."
      }
    },
    {
      "@type": "Question",
      "name": "Which motor drill should I start with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with CPS Test for click speed, Aim Trainer for mouse accuracy, Steady Hand Game for fine control, and Keyboard Speed Test or Sequence Aim Trainer for input sequencing. Precision Flick Shot and Drag and Drop Test add fast movements and cursor timing."
      }
    },
    {
      "@type": "Question",
      "name": "Are these motor skills tests clinical or diagnostic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. They are free browser practice tools for mouse and keyboard skill. They do not assess motor development or medical conditions; for those concerns see a qualified clinician."
      }
    },
    {
      "@type": "Question",
      "name": "How accurate are browser-based motor and mouse tests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Browser timers are precise, but the input and display path is not: results are bounded by display refresh rate (about 16 ms per frame at 60 Hz, 8 ms at 120 Hz) and mouse polling rate. Scores are best used to track your own progress on the same hardware, not to compare with people on different setups."
      }
    },
    {
      "@type": "Question",
      "name": "Do the motor drills work on phones and tablets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are designed for a desktop browser with a mouse and keyboard. Touchscreens change the task, so scores from a phone are not comparable with mouse scores."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
    { "@type": "ListItem", "position": 2, "name": "Motor Training", "item": "https://skilldrills.online/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "en-US",
  "dateModified": "2026-09-20",
  "name": "CPS Test, Aim Trainer & Mouse Precision Drills",
  "url": "https://skilldrills.online/drills/motor",
  "description": "Free CPS test, aim trainer and mouse precision drills for click speed, accuracy, steady-hand control and keyboard speed. 8 drills, no sign-up.",
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "hasPart": [
    // Hand-Eye Coordination (3 Drills)
    { "@type": "WebApplication", "name": "Aim Trainer - Target Snapping & Mouse Precision Test", "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/aim-trainer" },
    { "@type": "WebApplication", "name": "Drag and Drop - Cursor Grip & Spatial Timing Interception", "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/drag-and-drop" },
    { "@type": "WebApplication", "name": "Precision Flick Shot - Aperture Centering & Target Snap Drill", "url": "https://skilldrills.online/drills/motor/hand-eye-coordination/precision-flick-shot" },
    // Movement Speed (3 Drills)
    { "@type": "WebApplication", "name": "Finger Sequencing - Scale-Ordered Node Dexterity Test", "url": "https://skilldrills.online/drills/motor/movement-speed/finger-sequencing" },
    { "@type": "WebApplication", "name": "Keyboard Recognition - Keybind Muscle Memory Speed Trainer", "url": "https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition" },
    { "@type": "WebApplication", "name": "Rapid Tapping - CPS Click Cadence & Burst Speed Test", "url": "https://skilldrills.online/drills/motor/movement-speed/rapid-tapping" },
    // Precision Control (2 Drills)
    { "@type": "WebApplication", "name": "Steady Hand Trainer - Micro-Tremor Suppression & Path Tracing", "url": "https://skilldrills.online/drills/motor/precision-control/steady-hand" },
    { "@type": "WebApplication", "name": "Mouse Tracing - Continuous Wave Tracking & Path Guidance Drill", "url": "https://skilldrills.online/drills/motor/precision-control/tracing" }
  ]
};

export default function MotorDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MotorDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
