import PhysicalDrillsClient from './PhysicalDrillsClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  // GSC (180d): physical drills (pos 9.0) and physical fitness drills (pos 50)
  // land here against a title that never said "physical drills".
  title: 'Free Agility Drills - Reflex, Balance & Coordination',
  description: 'Free online physical training drills and games. Train your reaction time, reflexes, stability, balance, agility, and motor coordination. 11 free drills.',
  keywords: [
    'physical training drills', 'free physical training online', 'physical training game',
    'reaction time test', 'free reaction time test', 'online reaction time test',
    'reflex test online', 'free reflex training', 'reflex game online',
    'balance training online', 'free balance training', 'balance test online',
    'agility ladder drills', 'agility training online', 'free agility drills',
    'hand eye coordination exercises', 'hand eye coordination training', 'hand eye coordination game',
    'coordination exercises online', 'coordination training game', 'free coordination drill',
    'motor skills training', 'motor control exercises', 'fine motor training online',
    'reflex training for gamers', 'FPS training online', 'gaming reaction time',
    'dodge game online', 'pattern memory game', 'mouse precision test',
    'balance exercises online', 'stability training game', 'click speed test',
    'free fitness drills online', 'online fitness games', 'motor fitness training',
    'physical therapy exercises online', 'rehabilitation training game', 'sports training drills',
    'skilldrills physical', 'skilldrills fitness', 'skilldrills reflex',
    'no download physical training', 'browser fitness drills', 'instant motor training',
    '11 free drills', 'physical skill games', 'body training online free',
    'agility ladder drills online', 'reaction chain impulse arrest',
    'how to improve footwork agility', 'balance exercises online game',
    'cross body coordination drills', 'peripheral threat scanning',
    'sports agility training exercises', 'dodge reflex test online',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/drills/physical',
    languages: getAlternateLanguages('/drills/physical'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Free Agility Drills - Reflex, Balance & Coordination | SkillDrills',
    description: 'Free online physical training drills — reaction time tests, reflex games, balance training, agility ladder drills, and coordination exercises. 11 free drills. No sign-up.',
    type: 'website',
    url: 'https://skilldrills.online/drills/physical',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{
      url: 'https://skilldrills.online/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'Free Agility Drills - Reflex, Balance & Coordination | SkillDrills',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Agility Drills - Reflex, Balance & Coordination | SkillDrills',
    description: 'Free reaction time tests, reflex games, balance training, agility drills, and coordination exercises. 11 drills. No sign-up.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
};

Object.assign(metadata, {
  title: 'Physical Reflex & Agility Drills | SkillDrills',
  description: 'Free reflex and agility drills for reaction time, dodging, footwork rhythm, balance and coordination. 11 browser drills, no sign-up.',
  keywords: [
    'physical drills online', 'reaction time drills', 'reflex training online',
    'agility drills online', 'coordination drills', 'balance training online',
    'footwork training', 'hand eye coordination', 'spatial evasion game',
    'browser sports training', 'free physical training drills'
  ],
  openGraph: {
    ...metadata.openGraph,
    title: 'Physical Reflex & Agility Drills | SkillDrills',
    description: '11 free browser drills for reaction time, footwork, balance, coordination, and fast target decisions.',
  },
  twitter: {
    ...metadata.twitter,
    title: 'Physical Reflex & Agility Drills | SkillDrills',
    description: 'Train reaction time, agility, balance, coordination, and footwork with 11 free browser drills.',
  },
});

// --- Structured Data ---

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
    { "@type": "ListItem", "position": 2, "name": "Physical Training", "item": "https://skilldrills.online/drills/physical" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "en",
  "dateModified": "2026-10-08",
  "name": "Physical Reflex & Agility Drills",
  "url": "https://skilldrills.online/drills/physical",
  "description": "Free reflex and agility drills for reaction time, dodging, footwork rhythm, balance and coordination. 11 browser drills, no sign-up.",
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "hasPart": [
    // Balance Training (1 Drill)
    { "@type": "WebApplication", "name": "Stability Challenge - Wind Force Resistance Game", "url": "https://skilldrills.online/drills/physical/balance-training/stability-challenge" },
    // Coordination (3 Drills)
    { "@type": "WebApplication", "name": "Complex Pattern - Memory Path Drawing Game", "url": "https://skilldrills.online/drills/physical/coordination/complex-pattern" },
    { "@type": "WebApplication", "name": "Cross Body Movement - Multi-Node Coordinate Interception", "url": "https://skilldrills.online/drills/physical/coordination/cross-body-movement" },
    { "@type": "WebApplication", "name": "Dynamic Grid Evasion - 3x3 Fast Reflex Dodge Game", "url": "https://skilldrills.online/drills/physical/coordination/dynamic-grid-evasion" },
    // Fitness (3 Drills)
    { "@type": "WebApplication", "name": "Agility Ladder - Scrolling Footwork Agility Drill", "url": "https://skilldrills.online/drills/physical/fitness/agility-ladder" },
    { "@type": "WebApplication", "name": "Jump Sequence - Ball Launch & Target Calibration", "url": "https://skilldrills.online/drills/physical/fitness/jump-sequence" },
    { "@type": "WebApplication", "name": "Speed Drill - Shrinking Reflex Target Game", "url": "https://skilldrills.online/drills/physical/fitness/speed-drill" },
    // Reflex Training (4 Drills)
    { "@type": "WebApplication", "name": "Drop Catch - Decoy Ball Avoidance Reflex Test", "url": "https://skilldrills.online/drills/physical/reflex-training/drop-catch" },
    { "@type": "WebApplication", "name": "Quick Dodge - Homing Threat Chaos Game", "url": "https://skilldrills.online/drills/physical/reflex-training/quick-dodge" },
    { "@type": "WebApplication", "name": "Reaction Chain - Impulse Arrest Deceleration Drill", "url": "https://skilldrills.online/drills/physical/reflex-training/reaction-chain" },
    { "@type": "WebApplication", "name": "Peripheral Threat Sweeper - Reactive Vision Perimeter Scan", "url": "https://skilldrills.online/drills/physical/reflex-training/peripheral-threat-sweeper" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What drills are in the physical training hub?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hub has 11 browser drills grouped into reflex and evasion (Drop Catch, Quick Dodge, Reaction Chain, Peripheral Threat Sweeper), agility and fitness (Agility Ladder, Jump Sequence, Speed Drill), coordination and pathing, and balance and stability."
      }
    },
    {
      "@type": "Question",
      "name": "Are these reflex tests and agility drills real physical exercise?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. They are mouse and keyboard tasks on a screen that practise visual timing, decision speed and movement sequencing. They do not replace strength work, plyometrics, mobility practice or sport-specific coaching."
      }
    },
    {
      "@type": "Question",
      "name": "How do the agility ladder drills work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agility Ladder scrolls footwork cues toward you and asks you to respond on time with the matching input. It practises rhythm and visual cue recognition at the screen; it does not train the footwork itself."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Reaction Chain drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reaction Chain asks you to respond to a sequence of cues and stop yourself when a decoy appears, so you practise inhibiting a response you have already started. The score reflects this browser task only."
      }
    },
    {
      "@type": "Question",
      "name": "What does the Stability Challenge measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It asks you to keep a marker steady against simulated force and drift using continuous corrections with your mouse. It measures control in the game, not real balance or posture."
      }
    },
    {
      "@type": "Question",
      "name": "Do cross-body and grid evasion drills improve coordination?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cross Body Movement and Dynamic Grid Evasion practise alternating timing and choosing a path across a compact grid. They give repeatable practice at those tasks; carry-over to sport or daily movement varies and is not guaranteed."
      }
    },
    {
      "@type": "Question",
      "name": "What does Peripheral Threat Sweeper train?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It trains noticing and responding to targets that appear toward the edge of the screen while you keep looking at the centre. It is a screen task, not an eye test or a medical vision assessment."
      }
    },
    {
      "@type": "Question",
      "name": "How long should a physical reflex session last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a few focused rounds and stop when accuracy or attention drops. Short, regular sessions under the same conditions are easier to compare than one long session while tired."
      }
    },
    {
      "@type": "Question",
      "name": "Can browser reflex games complement gym or sports training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They can add practice for visual timing and quick decisions alongside normal training. They do not build strength, power or conditioning, and no browser result predicts performance in a sport."
      }
    },
    {
      "@type": "Question",
      "name": "Do these drills work on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are designed for a desktop browser with a mouse and keyboard. Touchscreens change the task, so scores on a phone are not comparable with desktop scores."
      }
    }
  ]
};

export default function PhysicalDrillsPage() {
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
      <PhysicalDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
