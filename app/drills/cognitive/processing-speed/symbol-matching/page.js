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
      "name": "SDMT-Style Symbol Digit Test",
      "item": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SDMT-Style Symbol Digit Test — Processing Speed Practice Drill",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free SDMT-style symbol matching drill online. A key pairs six symbols with the digits 1 to 6; tap the digit for each symbol as the response window shrinks. Practice, not the SDMT.",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching",
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
  "name": "SDMT-Style Symbol Digit Test",
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
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "SDMT-Style Symbol Digit Test – Symbol Matching Game",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching",
  "description": "Free SDMT-style symbol matching drill online. A key pairs six symbols with the digits 1 to 6; tap the digit for each symbol as the response window shrinks. Practice, not the SDMT.",
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
  "dateModified": "2026-11-12",
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
        "text": "The SDMT is a clinical neuropsychological test developed by Aaron Smith (1973), used to assess information processing speed. This drill borrows its symbol-to-digit format but is not the SDMT, uses different symbols and timing, and produces no clinical score."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between SDMT and DSST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In the digit symbol substitution test (DSST) you write the symbol that goes with each digit. In the SDMT you give the digit that goes with each symbol, and it can be answered orally as well as in writing. This drill follows the SDMT direction: see a symbol, tap its digit."
      }
    },
    {
      "@type": "Question",
      "name": "What cognitive domains does symbol matching evaluate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The drill practises quick visual lookup (finding the symbol in the key), learning the symbol-digit pairs during a run, and keeping a steady pace as the response window shrinks. It reports score, accuracy, hits, misses and peak level; it is not a standardized measure of any cognitive domain."
      }
    },
    {
      "@type": "Question",
      "name": "Can I compare my score with SDMT norms?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Clinical SDMT norms come from the official test, given under standard conditions by a trained examiner. This drill uses a different format, an on-screen key, a changing clock and a combo multiplier, so its scores cannot be converted into SDMT results."
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
        "text": "The key is reshuffled at the start of every run but stays the same during the run. If you learn the pairs in the first few seconds, you can answer without looking back at the key each time, which usually saves time."
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
        "text": "A few runs in one sitting, a few times a week, is enough to track your own trend. Each run starts with 45 seconds; a correct digit scores 100 points times your combo and a level bonus and adds 2 seconds (up to 60), while a wrong digit or a timeout costs 1 second and resets the combo. Scores usually rise with practice on this task, but that does not guarantee gains elsewhere."
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
  "name": "SDMT-Style Symbol Digit Test",
  "description": "Free SDMT-style symbol matching drill online. A key pairs six symbols with the digits 1 to 6; tap the digit for each symbol as the response window shrinks. Practice, not the SDMT.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Inspect the Symbol-Digit Key Matrix",
      "text": "Review the 6 symbol-to-digit pairs in the key bar. The key is reshuffled every run.",
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
      "text": "Tap the matching on-screen digit button (1-6), from memory or by checking the key.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Sustain Continuous Rhythm for Maximum Combo",
      "text": "Each correct digit adds 2 seconds (up to 60) and builds your combo. A wrong digit or a timeout costs 1 second and resets the combo.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "SDMT-Style Symbol Digit Test",
    paragraphs: [
      "Free SDMT-style symbol matching drill online. A key pairs six symbols with the digits 1 to 6; tap the digit for each symbol as the response window shrinks. Practice, not the SDMT.",
      "In the digit symbol substitution test (DSST) you write the symbol that goes with each digit. In the SDMT you give the digit that goes with each symbol, and it can be answered orally as well as in writing. This drill follows the SDMT direction: see a symbol, tap its digit.",
      "The drill practises quick visual lookup (finding the symbol in the key), learning the symbol-digit pairs during a run, and keeping a steady pace as the response window shrinks. It reports score, accuracy, hits, misses and peak level; it is not a standardized measure of any cognitive domain.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills Practice Bands',
    note: 'Bands come from the end-screen grade formula (score compared with a 24,000-point SkillDrills reference). They are practice markers, not SDMT norms, population statistics or percentiles.',
    headers: ['Grade', 'Label', 'Score'],
    rows: [
      ['S+', 'Legendary', '21,660+'],
      ['S', 'Elite', '17,340-21,659'],
      ['A', 'Excellent', '13,500-17,339'],
      ['B', 'Great', '8,640-13,499'],
      ['C', 'Good', '4,860-8,639'],
      ['D', 'Keep Going', '2,160-4,859'],
      ['F', 'Needs Practice', 'Under 2,160'],
    ],
  },
  protocols: {
    title: 'How to Play',
    description: 'The four steps of a Symbol Digit Test run.',
    items: [
      { title: "Inspect the Symbol-Digit Key Matrix", description: "Review the 6 symbol-to-digit pairs in the key bar. The key is reshuffled every run." },
      { title: "Foveate on the Central Target Symbol", description: "Instantly identify the active symbol appearing in the central prompt area." },
      { title: "Execute Direct Associative Number Tap", description: "Tap the matching on-screen digit button (1-6), from memory or by checking the key." },
      { title: "Sustain Continuous Rhythm for Maximum Combo", description: "Each correct digit adds 2 seconds (up to 60) and builds your combo. A wrong digit or a timeout costs 1 second and resets the combo." },
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
