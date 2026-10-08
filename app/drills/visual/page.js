import VisualDrillsClient from './VisualDrillsClient';
import { DRILLS } from '../../../lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';

const visualDrillCount = DRILLS.filter((d) => d.category === 'visual').length;

export const metadata = {
  title: `Free Visual Training Online - Vision & Tracking Drills`,
  description: `Free visual training online. ${visualDrillCount} drills for reaction speed, tracking accuracy, depth perception and visual recognition. No sign-up needed.`,
  keywords: [
    'visual training online', 'free visual training', 'visual training drills',
    'reaction time test', 'reaction time training', 'reaction speed test',
    'visual perception training', 'depth perception test', 'visual perception game',
    'tracking accuracy game', 'eye tracking training', 'visual tracking game',
    'visual search test', 'visual recognition game',
    'go no go test', 'impulse control training', 'inhibition control game',
    'light reaction test',
    'multiple object tracking', 'smooth pursuit tracking', 'moving target game',
    'visual pattern recognition', 'rhythm anomaly game',
    'visual processing speed', 'brain vision training', 'eye training online',
    'vision training exercises', 'visual skill training', 'cognitive visual training',
    'fps visual training', 'gaming vision training', 'esports vision drill',
    'skilldrills visual', 'free vision drills', 'online vision training',
    'no download visual game', 'browser visual training', 'instant vision drill',
    'comprehensive visual training', 'vision improvement game',
    'depth perception exercises', 'go no go test online',
    'multiple object tracking test', 'visual search training',
    'sports vision training drills', 'how to improve visual reaction speed',
  ],
  openGraph: {
    title: `Free Visual Training Online - Reaction Speed, Tracking & Perception Drills | SkillDrills`,
    description: `Free visual training online. ${visualDrillCount} drills for reaction speed, tracking accuracy, depth perception, and visual recognition. No sign-up.`,
    type: 'website',
    url: 'https://skilldrills.online/drills/visual',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Free Visual Training Online - Reaction & Tracking Drills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Visual Training Online - Reaction Speed, Tracking & Perception Drills | SkillDrills`,
    description: `Free visual training online. ${visualDrillCount} drills — reaction speed, tracking accuracy, depth perception, visual recognition. No sign-up.`,
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/visual',
    languages: getAlternateLanguages('/drills/visual'),
  },
};

Object.assign(metadata, {
  title: 'Visual Reaction, Tracking & Perception Drills | SkillDrills',
  description: `${visualDrillCount} free visual drills: reaction time, target tracking, depth perception test, go/no-go and visual search. Browser-based, no sign-up.`,
  keywords: [
    'visual reaction drills', 'visual search test', 'dynamic vision training',
    'visual tracking drills', 'depth perception test', 'peripheral vision training',
    'multiple object tracking', 'go no go test', 'visual processing speed',
    'sports vision drills', 'free visual training online'
  ],
  openGraph: {
    ...metadata.openGraph,
    title: 'Visual Reaction, Tracking & Perception Drills | SkillDrills',
    description: `${visualDrillCount} free browser drills for visual reaction time, target tracking, depth judgment, and visual search.`,
  },
  twitter: {
    ...metadata.twitter,
    title: 'Visual Reaction, Tracking & Perception Drills | SkillDrills',
    description: `Train visual reaction, tracking, depth judgment, and visual search with ${visualDrillCount} free drills.`,
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What visual drills are in this hub?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The hub has nine browser drills: Depth Perception Test, Chroma-Sync Lab (go/no-go), Strobe-Latency Lab (light reaction), Kinetic Intercept, Ghost-Link Tracking, Auto-Pursuit, Entropic Grid, Rhythm Anomaly and Visual Search."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Depth Perception Test a medical eye test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. It asks you to judge relative distances on a screen. It does not diagnose eyesight or stereo vision problems and does not replace an eye examination by an optometrist or ophthalmologist."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Go/No-Go test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Go/No-Go test asks you to respond quickly to some stimuli (go) and hold back on others (no-go). It is a standard way to study response inhibition; here it is a browser practice task, not a clinical measure."
      }
    },
    {
      "@type": "Question",
      "name": "What is multiple object tracking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Multiple object tracking asks you to follow several moving targets among identical distractors. Ghost-Link Tracking uses this task format to practise sustained visual attention across moving objects."
      }
    },
    {
      "@type": "Question",
      "name": "What is visual search practice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visual search means finding a target among distractors. Entropic Grid and Visual Search present target-in-clutter tasks so you can practise scanning and spotting speed, and compare your own results over repeated sessions."
      }
    },
    {
      "@type": "Question",
      "name": "Why is my visual reaction time different from other tests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A browser result includes display refresh, input latency and the click as well as your own response. Compare scores on the same device and settings rather than against other people's numbers."
      }
    },
    {
      "@type": "Question",
      "name": "How can I reduce eye strain during visual drills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Take regular breaks and look at something distant. The 20-20-20 rule (every 20 minutes, look at something 20 feet away for 20 seconds) is a widely recommended habit for screen use. Stop if your eyes feel uncomfortable."
      }
    },
    {
      "@type": "Question",
      "name": "Can visual training games improve real-world vision?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They give structured practice at specific visual tasks, and people usually improve at the tasks they practise. They do not change eyesight or correct refractive error, and transfer to sport or driving is not guaranteed."
      }
    },
    {
      "@type": "Question",
      "name": "Which visual drill should I start with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Start with Strobe-Latency Lab for a simple visual reaction baseline, Chroma-Sync Lab for response control, Auto-Pursuit or Kinetic Intercept for tracking, and Visual Search for scanning."
      }
    },
    {
      "@type": "Question",
      "name": "Do visual browser drills replace an eye examination?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. These drills measure repeatable browser tasks such as visual timing, tracking, search and spatial judgment. They do not diagnose eyesight or eye disease. See a qualified eye-care professional for any vision concern."
      }
    }
  ]
};

export default function VisualDrillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
          { "@type": "ListItem", "position": 2, "name": "Visual Training", "item": "https://skilldrills.online/drills/visual" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "inLanguage": "en",
        "dateModified": "2026-10-08",
        "name": "Free Visual Training Online - Reaction Speed, Tracking & Perception Drills",
        "url": "https://skilldrills.online/drills/visual",
        "description": `${visualDrillCount} free visual training drills online. Reaction speed tests, tracking accuracy games, depth perception tests, and visual recognition exercises. No sign-up required.`,
        "author": { "@type": "Organization", "name": "SkillDrills" },
        "hasPart": [
          { "@type": "WebApplication", "name": "Depth Perception Test - Distance Judgment", "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment" },
          { "@type": "WebApplication", "name": "Go No Go Test - Impulse Control Drill", "url": "https://skilldrills.online/drills/visual/reaction-speed/go/no-go" },
          { "@type": "WebApplication", "name": "Reaction Time Test - Light Reaction", "url": "https://skilldrills.online/drills/visual/reaction-speed/light-reaction" },
          { "@type": "WebApplication", "name": "Moving Target Tracking Game", "url": "https://skilldrills.online/drills/visual/tracking-accuracy/moving-target" },
          { "@type": "WebApplication", "name": "Multiple Object Tracking - Ghost-Link", "url": "https://skilldrills.online/drills/visual/tracking-accuracy/multiple-targets" },
          { "@type": "WebApplication", "name": "Smooth Pursuit Tracking - Auto-Pursuit", "url": "https://skilldrills.online/drills/visual/tracking-accuracy/pursuit-tracker" },
          { "@type": "WebApplication", "name": "Visual Search Game - Entropic Grid", "url": "https://skilldrills.online/drills/visual/visual-recognition/entropic-grid" },
          { "@type": "WebApplication", "name": "Visual Pattern Recognition - Rhythm Anomaly", "url": "https://skilldrills.online/drills/visual/visual-recognition/rhythm-anomaly" },
          { "@type": "WebApplication", "name": "Visual Search Test - Conjunctive Scanning", "url": "https://skilldrills.online/drills/visual/visual-recognition/visual-search" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VisualDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
