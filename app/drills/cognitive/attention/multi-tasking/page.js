import DualTargetFlowClient from './DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Multitasking Test Online | Dual Task Focus | SkillDrills",
  description: "Free multitasking test online: track two visual streams and maintain accuracy during a dual-task focus drill. Non-clinical practice.",
  keywords: ["multitasking test online", "dual task test", "divided attention test", "dual stream tracking", "task switching test", "cognitive flexibility test", "multitasking brain game", "parallel visual tracking", "executive function drill", "dual target training"],
  openGraph: {
    title: "Multitasking Test Online | Dual Task Focus | SkillDrills",
    description: "Free multitasking test online: track two visual streams and maintain accuracy during a dual-task focus drill. Non-clinical practice.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Multitasking Test Online | Dual Task Focus | SkillDrills",
    description: "Free multitasking test online: track two visual streams and maintain accuracy during a dual-task focus drill. Non-clinical practice.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://skilldrills.online"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Drills Hub",
      "item": "https://skilldrills.online/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cognitive Drills",
      "item": "https://skilldrills.online/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Multitasking Test",
      "item": "https://skilldrills.online/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "Multitasking Test — Dual-Target Attention Drill",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test your multitasking ability online with this free dual-target attention drill. Track simultaneous visual streams and process dual inputs under speed pressure.",
  "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "en-US",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Multitasking Test",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking",
  "inLanguage": "en-US",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Multitasking Test – Dual-Stream Target Flow Game",
  "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking",
  "description": "Test your multitasking ability online with this free dual-target attention drill. Track simultaneous visual streams and process dual inputs under speed pressure.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Multitasking Test (Dual-Target Flow)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This drill challenges the brain to track two independent visual streams flowing in opposing directions, testing bilateral hemispheric attention and concurrent target identification."
      }
    },
    {
      "@type": "Question",
      "name": "What is switch cost in task switching (Rogers & Monsell, 1995)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Switch cost is the measurable degradation in speed and accuracy that occurs when shifting between disparate cognitive task rules rather than repeating the same task."
      }
    },
    {
      "@type": "Question",
      "name": "Are humans capable of true concurrent multitasking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cognitive neuroscience demonstrates that for complex, non-automated tasks, the human brain executes rapid time-sliced serial processing rather than genuine concurrent parallel computation (Pashler, 1994)."
      }
    },
    {
      "@type": "Question",
      "name": "What did Ophir, Nass & Wagner (2009) discover about heavy media multitaskers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They discovered that habitual multitaskers often exhibit higher susceptibility to distraction and worse task-switching efficiency due to impaired attentional filtering."
      }
    },
    {
      "@type": "Question",
      "name": "How does bilateral hemispheric tracking work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Streaming shapes across left and right visual fields activates both occipital-parietal pathways simultaneously, testing cross-corpus-callosum coordination under time constraints."
      }
    },
    {
      "@type": "Question",
      "name": "What strategies maximize score in dual-stream flow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Adopt an expanded soft-focus gaze centered between streams, using peripheral vision to identify shape matches before committing motor taps."
      }
    },
    {
      "@type": "Question",
      "name": "How does level progression challenge executive control?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stream velocities increase, target shapes diversify, and decay windows shorten as your combo increases, demanding elite sensory throughput."
      }
    },
    {
      "@type": "Question",
      "name": "Does input latency affect multitasking evaluation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A high-refresh monitor and low-latency mouse can make moving shapes easier to see, and display timing limits what a browser test can resolve (Woods et al., 2015). Neither is required; compare your own runs on one setup."
      }
    },
    {
      "@type": "Question",
      "name": "How long should a multitasking training session last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10 to 15 minutes of deliberate dual-stream practice optimizes synaptic plasticity without inducing severe cognitive strain."
      }
    },
    {
      "@type": "Question",
      "name": "Is this multitasking test free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this test completely free with no registration or downloads required."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Multitasking Test",
  "description": "Test your multitasking ability online with this free dual-target attention drill. Track simultaneous visual streams and process dual inputs under speed pressure.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Expand Gaze Across Dual Flow Channels",
      "text": "Center your vision between the two opposing streams to monitor both channels simultaneously.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identify Target Templates",
      "text": "Check the active TOP and BOTTOM target templates shown in the upper HUD.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute Rapid Matching Taps",
      "text": "Tap or click incoming shapes that match either active template before they exit the active playfield.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Sustain High-Flow Bilateral Tracking",
      "text": "Maintain rhythmic coordination as stream velocities accelerate, building your combo multiplier.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "Multitasking Test",
    paragraphs: [
      "Test your multitasking ability online with this free dual-target attention drill. Track simultaneous visual streams and process dual inputs under speed pressure.",
      "Switch cost is the measurable degradation in speed and accuracy that occurs when shifting between disparate cognitive task rules rather than repeating the same task.",
      "Cognitive neuroscience demonstrates that for complex, non-automated tasks, the human brain executes rapid time-sliced serial processing rather than genuine concurrent parallel computation (Pashler, 1994).",
    ],
  },
  benchmarks: {
    title: 'Cognitive Performance Standards & Benchmarks',
    note: 'Stages are editorial practice markers set by SkillDrills, not population statistics or percentiles.',
    headers: ['Tier', 'Rank', 'Rating', 'Accuracy', 'Practice stage'],
    rows: [
      { tier: 'Tier 1', rank: 'Grandmaster / Elite', stat: 'Highest tier', level: 'Mastery', accuracy: '98%+', percentile: 'Highest tier' },
      { tier: 'Tier 2', rank: 'Advanced Focus', stat: 'Upper tier', level: 'Diamond', accuracy: '94-97%', percentile: 'Upper tier' },
      { tier: 'Tier 3', rank: 'Proficient Operator', stat: 'Above-average tier', level: 'Platinum', accuracy: '88-93%', percentile: 'Above-average tier' },
      { tier: 'Tier 4', rank: 'Standard Adult', stat: 'Mid tier', level: 'Gold', accuracy: '78-87%', percentile: 'Mid tier' },
      { tier: 'Tier 5', rank: 'Novice Baseline', stat: 'Base', level: 'Silver', accuracy: '<78%', percentile: 'Baseline' },
    ],
  },
  protocols: {
    title: 'Core Neuroplastic Optimization Protocols',
    description: 'Scientifically validated executive function enhancement protocols.',
    items: [
      { title: "Expand Gaze Across Dual Flow Channels", description: "Center your vision between the two opposing streams to monitor both channels simultaneously." },
      { title: "Identify Target Templates", description: "Check the active TOP and BOTTOM target templates shown in the upper HUD." },
      { title: "Execute Rapid Matching Taps", description: "Tap or click incoming shapes that match either active template before they exit the active playfield." },
      { title: "Sustain High-Flow Bilateral Tracking", description: "Maintain rhythmic coordination as stream velocities accelerate, building your combo multiplier." },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPage() {
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
      <DualTargetFlowClient copy={{ title: "Multitasking Test", subtitle: "Track two visual streams and maintain accuracy during a dual-task focus challenge" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
