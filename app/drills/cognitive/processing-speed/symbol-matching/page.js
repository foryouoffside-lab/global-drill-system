import SymbolMatchingClient from './SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "SDMT-Style Symbol Digit Test Online | SkillDrills",
  description: "Free symbol matching test online inspired by SDMT: practise visual scanning, symbol-to-digit lookup, and processing speed in your browser. Non-clinical.",
  keywords: ["symbol matching test online", "symbol matching test", "symbol digit modalities test", "sdmt test online", "digit symbol substitution test", "dsst test online", "processing speed test", "cognitive processing speed", "visual scanning test", "associative memory test",
    "sdmt cognitive assessment",
    "symbol matching speed game",
    "free neuropsychological test online"],
  openGraph: {
    title: "SDMT-Style Symbol Digit Test Online | SkillDrills",
    description: "Free symbol matching test online inspired by SDMT: practise visual scanning, symbol-to-digit lookup, and processing speed in your browser. Non-clinical.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SDMT-Style Symbol Digit Test Online | SkillDrills",
    description: "Free symbol matching test online inspired by SDMT: practise visual scanning, symbol-to-digit lookup, and processing speed in your browser. Non-clinical.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
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
      "name": "Symbol Digit Modalities Test",
      "item": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Symbol Digit Modalities Test — Cognitive Processing Speed Drill",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free Symbol Digit Modalities Test (SDMT) and symbol matching drill online. Test processing speed, visual scanning efficiency, and short-term associative memory.",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching",
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
  "name": "Symbol Digit Modalities Test",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "en-US",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Symbol Digit Modalities Test – Rapid Symbol Matching Game",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching",
  "description": "Free Symbol Digit Modalities Test (SDMT) and symbol matching drill online. Test processing speed, visual scanning efficiency, and short-term associative memory.",
  "genre": [
    "Action",
    "Brain Game",
    "Neuropsychological Training"
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
      "name": "What is the Symbol Digit Modalities Test (SDMT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The SDMT is a clinical neuropsychological evaluation developed by Aaron Smith (1973) that measures information processing speed, visual scanning efficiency, and short-term working memory."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between SDMT and DSST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the DSST (Wechsler), you write symbols corresponding to digits. In the SDMT, you match symbols to digits, isolating pure cognitive speed with reduced motor coordination confounding."
      }
    },
    {
      "@type": "Question",
      "name": "What cognitive domains does symbol matching evaluate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It measures: (1) processing speed, (2) visual scanning efficiency, (3) paired-associate learning, and (4) sustained executive attention."
      }
    },
    {
      "@type": "Question",
      "name": "What is a normal adult score on the SDMT?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In clinical standardizations, healthy adults aged 20–34 typically complete 65–75 correct substitutions within 90 seconds (Smith, 1973; Der & Deary, 2006)."
      }
    },
    {
      "@type": "Question",
      "name": "Is this an official medical diagnostic test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This is a free cognitive training game based on the same paradigm. It does not provide medical diagnoses and should not be used as clinical evaluation."
      }
    },
    {
      "@type": "Question",
      "name": "How does legend memorization accelerate performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Building direct associative memory bonds between symbols and digits eliminates the latency of re-scanning the legend for every trial."
      }
    },
    {
      "@type": "Question",
      "name": "What strategies maximize symbol matching throughput?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Memorize digit-symbol associations early, use chunking, and minimize extraneous eye travel between the legend and prompt."
      }
    },
    {
      "@type": "Question",
      "name": "Does cognitive processing speed decline with age?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Processing speed tends to be highest in early adulthood and to slow gradually with age. Whether practice on a task like this offsets that is not settled, so use the drill for practice and for tracking your own runs, not as a health measure."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I train symbol matching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A 10-minute session daily provides significant improvements in visual lookup speed and short-term associative memory."
      }
    },
    {
      "@type": "Question",
      "name": "Is this tool free and accessible on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this test completely free in all modern desktop and mobile browsers."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Symbol Digit Modalities Test",
  "description": "Free Symbol Digit Modalities Test (SDMT) and symbol matching drill online. Test processing speed, visual scanning efficiency, and short-term associative memory.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Inspect the Symbol-Digit Key Matrix",
      "text": "Review the 6 unique symbol-to-digit mappings in the header legend.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Foveate on the Central Target Symbol",
      "text": "Instantly identify the active symbol appearing in the central prompt area.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Execute Direct Associative Number Tap",
      "text": "Tap the corresponding number key (1–6) based on working memory or rapid legend scanning.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Sustain Continuous Rhythm for Maximum Combo",
      "text": "Maintain uninterrupted high-speed matching to build your combo multiplier before time expires.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "Symbol Digit Modalities Test",
    paragraphs: [
      "Free Symbol Digit Modalities Test (SDMT) and symbol matching drill online. Test processing speed, visual scanning efficiency, and short-term associative memory.",
      "In the DSST (Wechsler), you write symbols corresponding to digits. In the SDMT, you match symbols to digits, isolating pure cognitive speed with reduced motor coordination confounding.",
      "It measures: (1) processing speed, (2) visual scanning efficiency, (3) paired-associate learning, and (4) sustained executive attention.",
    ],
  },
  benchmarks: {
    title: 'Cognitive Performance Standards & Benchmarks',
    headers: ['Tier', 'Rank', 'Rating', 'Accuracy', 'Percentile'],
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
      { title: "Inspect the Symbol-Digit Key Matrix", description: "Review the 6 unique symbol-to-digit mappings in the header legend." },
      { title: "Foveate on the Central Target Symbol", description: "Instantly identify the active symbol appearing in the central prompt area." },
      { title: "Execute Direct Associative Number Tap", description: "Tap the corresponding number key (1–6) based on working memory or rapid legend scanning." },
      { title: "Sustain Continuous Rhythm for Maximum Combo", description: "Maintain uninterrupted high-speed matching to build your combo multiplier before time expires." },
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
      <SymbolMatchingClient copy={{ title: "Symbol Digit Test (SDMT-Style)", subtitle: "SDMT-style symbol matching for processing speed, visual scanning, and associative working memory" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
