import EliteNeuroSwitchClient from './EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Choice Reaction Test Online | Decision Speed | SkillDrills",
  description: "Free choice reaction test online: match targets to a changing rule and practise decision speed, visual discrimination, and accuracy. Non-clinical.",
  keywords: ["choice reaction test online", "choice reaction time test", "reaction time test", "reaction time test online", "decision speed test", "visual reaction time", "cognitive processing speed", "Hick's law test", "reaction test browser"],
  openGraph: {
    title: "Choice Reaction Test Online | Decision Speed | SkillDrills",
    description: "Free choice reaction test online: match targets to a changing rule and practise decision speed, visual discrimination, and accuracy. Non-clinical.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Choice Reaction Test Online | Decision Speed | SkillDrills",
    description: "Free choice reaction test online: match targets to a changing rule and practise decision speed, visual discrimination, and accuracy. Non-clinical.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "Choice Reaction Test Online",
      "item": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Choice Reaction Time Test — Neuro Speed & Reflex Drill",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free choice reaction time test online. Measure decision-making latency, visual discrimination speed, and cognitive flexibility under dynamic rule-switching pressure.",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time",
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
  "name": "Choice Reaction Test Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "en-US",
    "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Neuro Speed & Reflex Test – Choice Reaction Game",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time",
  "description": "Free choice reaction time test online. Measure decision-making latency, visual discrimination speed, and cognitive flexibility under dynamic rule-switching pressure.",
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
  "dateModified": "2026-09-20",
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
      "name": "What is choice reaction time (CRT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choice reaction time is the time required to detect a stimulus, discriminate its identity among multiple options, and execute the correct motor response corresponding to that specific stimulus."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between simple and choice reaction time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple reaction time (SRT) requires responding to a single predictable stimulus. Choice reaction time adds a decision-making stage, so it is slower than simple reaction time (Donders, 1868)."
      }
    },
    {
      "@type": "Question",
      "name": "What is Hick's Law (Hick, 1952; Hyman, 1953)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hick's Law states that choice reaction time increases logarithmically as a function of the number of stimulus-response alternatives available: RT = a + b * log2(n)."
      }
    },
    {
      "@type": "Question",
      "name": "What are typical human benchmarks for choice reaction time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Choice reaction time is slower than simple reaction time and depends on the number of options and the task. Large studies show it slows gradually with age and varies widely between people (Der & Deary, 2006), so compare your own scores over time rather than against a single norm."
      }
    },
    {
      "@type": "Question",
      "name": "How does rule switching add cognitive complexity?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Flipping the target colour means you must stop using the old rule and apply the new one. Task-switching studies generally find a slowdown right after a switch, which is why this drill changes the rule during play."
      }
    },
    {
      "@type": "Question",
      "name": "Can choice reaction time be improved with training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practice usually makes you faster and more accurate at the task you practise, because the stimulus-response mapping becomes familiar. Transfer to other tasks varies and is not guaranteed."
      }
    },
    {
      "@type": "Question",
      "name": "How does sleep deprivation degrade reaction speed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sleep loss is generally associated with slower and more variable reaction times and more errors in the research literature. Test when rested if you want comparable scores."
      }
    },
    {
      "@type": "Question",
      "name": "How does hardware affect reaction time measurement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Display refresh latency (16.7ms at 60Hz vs 4.1ms at 240Hz) and mouse polling rate introduce hardware quantization (Woods et al., 2015). Differences under ~5ms reflect measurement noise."
      }
    },
    {
      "@type": "Question",
      "name": "What is the optimal training routine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Short, regular sessions of a few minutes under the same conditions are easier to compare than one long session. Stop when accuracy drops."
      }
    },
    {
      "@type": "Question",
      "name": "Is this reaction time test completely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this tool free with no installation or registration."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Choice Reaction Time Test",
  "description": "Free choice reaction time test online. Measure decision-making latency, visual discrimination speed, and cognitive flexibility under dynamic rule-switching pressure.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Inspect the Active Rule Banner",
      "text": "Note the active color target rule displayed at the top of the canvas.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Discriminate Target Nodes",
      "text": "As targets spawn across the field, instantly evaluate which node matches the active rule color.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute Ballistic Choice Tap",
      "text": "Tap or click the valid target with maximum precision before its expiration timer runs out.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Adapt Instantly to Rule Inversions",
      "text": "When the rule banner switches, immediately suppress the old rule and tap the newly designated color.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "Choice Reaction Time Test Guide & Decision Speed Benchmarks",
    paragraphs: [
      "Free choice reaction time test online. Measure decision-making latency, visual discrimination speed, and cognitive flexibility under dynamic rule-switching pressure.",
      "Simple reaction time (SRT) requires responding to a single predictable stimulus. Choice reaction time adds a decision-making stage, so it is slower than simple reaction time (Donders, 1868).",
      "Hick's Law states that choice reaction time increases logarithmically as a function of the number of stimulus-response alternatives available: RT = a + b * log2(n).",
    ],
  },
  benchmarks: {
    title: 'Accuracy Bands for Your Own Sessions',
    headers: ['Tier', 'Label', 'Accuracy'],
    rows: [
      { tier: 'Tier 1', rank: 'Very consistent', accuracy: '98%+' },
      { tier: 'Tier 2', rank: 'Strong', accuracy: '94-97%' },
      { tier: 'Tier 3', rank: 'Solid', accuracy: '88-93%' },
      { tier: 'Tier 4', rank: 'Developing', accuracy: '78-87%' },
      { tier: 'Tier 5', rank: 'Starting out', accuracy: '<78%' },
    ],
  },
  protocols: {
    title: 'How to Play the Choice Reaction Test',
    description: 'Four steps for each round.',
    items: [
      { title: "Inspect the Active Rule Banner", description: "Note the active color target rule displayed at the top of the canvas." },
      { title: "Discriminate Target Nodes", description: "As targets spawn across the field, instantly evaluate which node matches the active rule color." },
      { title: "Execute Ballistic Choice Tap", description: "Tap or click the valid target with maximum precision before its expiration timer runs out." },
      { title: "Adapt Instantly to Rule Inversions", description: "When the rule banner switches, immediately suppress the old rule and tap the newly designated color." },
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
      <EliteNeuroSwitchClient copy={{ title: "Choice Reaction Test", subtitle: "Choice reaction time drill for decision speed, visual discrimination, and accurate rule switching" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
