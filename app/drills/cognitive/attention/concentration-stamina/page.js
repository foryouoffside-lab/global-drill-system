import ConcentrationStaminaClient from './ConcentrationStaminaClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Attention Span Test Online | Sustained Focus | SkillDrills",
  description: "Free browser attention span test for sustained focus, target detection, response inhibition, and rule switching. Non-clinical practice.",
  keywords: ["attention span test online", "attention test online", "sustained attention test", "concentration test online", "continuous performance test", "vigilance test", "response inhibition test", "focus training", "cognitive endurance drill", "rule switching test"],
  openGraph: {
    title: "Attention Span Test Online | Sustained Focus | SkillDrills",
    description: "Free browser attention span test for sustained focus, target detection, response inhibition, and rule switching. Non-clinical practice.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/attention/concentration-stamina',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Attention Span Test Online | Sustained Focus | SkillDrills",
    description: "Free browser attention span test for sustained focus, target detection, response inhibition, and rule switching. Non-clinical practice.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/attention/concentration-stamina',
    languages: getAlternateLanguages('/drills/cognitive/attention/concentration-stamina'),
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
      "name": "Concentration Stamina",
      "item": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Vigilance_(psychology)", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Concentration Stamina — CPT-Style Attention Drill",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free attention span test online. A 45-second sustained-attention drill: respond to vowels or primes, ignore everything else, and keep up as the rule flips every 10 seconds and the pace rises.",
  "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "en-US",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Concentration Stamina – Attention Span Test",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina",
  "inLanguage": "en-US",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Concentration Stamina – Sustained Vigilance & Focus Game",
  "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina",
  "description": "Free attention span test online. A 45-second sustained-attention drill: respond to vowels or primes, ignore everything else, and keep up as the rule flips every 10 seconds and the pace rises.",
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
      "name": "What is the Attention Span Test (Concentration Stamina)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a free, non-clinical drill in the style of a continuous performance test (CPT). Letters and digits flash one at a time for 45 seconds; you respond only to items that match the active rule and hold back on everything else. It is practice, not a diagnostic or ADHD screening tool."
      }
    },
    {
      "@type": "Question",
      "name": "What is vigilance decrement (Mackworth, 1948)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In radar-watch style experiments, Norman Mackworth found that signal detection declines over a long monitoring session, with much of the drop appearing within the first half hour. A 45-second run cannot measure that kind of long-session decline; this drill trains staying on task under a rising pace instead."
      }
    },
    {
      "@type": "Question",
      "name": "How does the rule switching work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every 10 seconds the target rule flips between Vowels (A, E, I, O, U) and Prime digits (2, 3, 5, 7). An item that was a target a moment ago can become a non-target, so you have to update the rule you are applying instead of responding by habit (task switching is reviewed in Monsell, 2003)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between selective and sustained attention?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selective attention is picking the relevant item out of competing ones at a given moment (Broadbent, 1958); sustained attention is keeping that focus going over time. This drill asks for both: pick out the targets, and keep doing it for the whole run."
      }
    },
    {
      "@type": "Question",
      "name": "What happens on a false alarm or a missed target?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Responding to a non-target is a false alarm: it flashes red and locks your input for 1 second. Letting a target disappear without responding counts as a miss. Both lower your accuracy, which is hits divided by hits plus false alarms plus misses. There is no time penalty; the 45-second clock never changes."
      }
    },
    {
      "@type": "Question",
      "name": "How is the score and grade calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each correct hit is worth 100 points. The level rises as your score grows, and each level shows items for a shorter time with a shorter gap between them. The end-screen grade compares your score with a SkillDrills reference score of 4,000 points; it is a practice band, not a population norm or percentile."
      }
    },
    {
      "@type": "Question",
      "name": "Which controls does the drill use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click or tap the play area, or press Space or Enter, when a target is shown. Escape exits the run."
      }
    },
    {
      "@type": "Question",
      "name": "Does my monitor or device affect the result?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The drill does not score reaction time in milliseconds, so refresh rate matters far less than in aim drills. A steady frame rate still helps you see short flashes; close heavy background tabs if the display stutters."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I practice concentration stamina?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A few runs in one sitting, spread across the week, is a reasonable routine. Track your own score and accuracy over time; improvement in this drill does not guarantee better focus in other tasks."
      }
    },
    {
      "@type": "Question",
      "name": "Is this tool free and accessible on all devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. It is free and runs in modern desktop and mobile browsers with no sign-up. Scores are saved only in your browser."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Attention Span Test",
  "description": "Free attention span test online. A 45-second sustained-attention drill: respond to vowels or primes, ignore everything else, and keep up as the rule flips every 10 seconds and the pace rises.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Launch Drill and Calibrate Focal Vision",
      "text": "Center your vision on the central display and observe the active rule banner.",
      "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Discriminate Target Stimuli",
      "text": "Evaluate each flashing symbol against the active rule (e.g., Vowels: A, E, I, O, U or Primes: 2, 3, 5, 7).",
      "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute Precise Inhibitory Control",
      "text": "Click, tap, or press Space or Enter on valid targets, and hold back on every non-target. A false alarm locks input for 1 second.",
      "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Adapt Instantly to Rule Switches",
      "text": "When the rule flips every 10 seconds, switch to the new criterion straight away. The run lasts 45 seconds.",
      "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('mackworth1948', 'parasuraman1979', 'robertson1997', 'monsell2003', 'broadbent1958', 'woods2015'),
  intro: {
    title: "Attention Span Test – Concentration Stamina",
    paragraphs: [
      "Free attention span test online. A 45-second sustained-attention drill: respond to vowels or primes, ignore everything else, and keep up as the rule flips every 10 seconds and the pace rises.",
      "In radar-watch style experiments, Norman Mackworth found that signal detection declines over a long monitoring session. A 45-second run does not measure that decline; it trains staying on task as the pace rises.",
      "Every 10 seconds the target rule flips between Vowels and Prime digits, so you must update the rule you apply instead of responding by habit (Monsell, 2003). The drill is non-clinical practice, not a diagnostic test.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills Practice Bands',
    note: 'Bands come from the end-screen grade formula (score compared with a 4,000-point SkillDrills reference). They are practice markers, not population statistics or percentiles.',
    headers: ['Grade', 'Label', 'Score in a 45s run'],
    rows: [
      ['S+', 'Legendary', '3,610+'],
      ['S', 'Elite', '2,890-3,609'],
      ['A', 'Excellent', '2,250-2,889'],
      ['B', 'Great', '1,440-2,249'],
      ['C', 'Good', '810-1,439'],
      ['D', 'Keep Going', '360-809'],
      ['F', 'Needs Practice', 'Under 360'],
    ],
  },
  protocols: {
    title: 'How to Play',
    description: 'The four steps of a Concentration Stamina run.',
    items: [
      { title: "Launch Drill and Calibrate Focal Vision", description: "Center your vision on the central display and observe the active rule banner." },
      { title: "Discriminate Target Stimuli", description: "Evaluate each flashing symbol against the active rule (e.g., Vowels: A, E, I, O, U or Primes: 2, 3, 5, 7)." },
      { title: "Execute Precise Inhibitory Control", description: "Click, tap, or press Space or Enter on valid targets, and hold back on every non-target. A false alarm locks input for 1 second." },
      { title: "Adapt Instantly to Rule Switches", description: "When the rule flips every 10 seconds, switch to the new criterion straight away. The run lasts 45 seconds." },
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
      <ConcentrationStaminaClient copy={{ title: "Attention Span Test – Concentration Stamina", subtitle: "Attention span test for sustained focus, target discrimination, and cognitive endurance under time pressure" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
