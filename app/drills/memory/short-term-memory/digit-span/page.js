import DigitSpanClient from './DigitSpanClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Digit Span Test – Free Online Number Memory | SkillDrills",
  description: "Free online digit span test. Repeat growing number strings in order, find your digit span, and learn the chunking that stretches it.",
  keywords: [
    "digit span test",
    "digit span memory test",
    "forward digit span",
    "number memory test",
    "working memory test digit span",
    "short term memory test numbers",
    "digit span test online",
    "phonological loop digit span",
    "how to improve digit span",
    "数唱 検査",
    "숫자 기억 테스트"
  ],
  alternates: {
    canonical: "https://skilldrills.online/drills/memory/short-term-memory/digit-span",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Digit Span Test – Free Online Number Memory | SkillDrills",
    description: "Free online digit span test: random number strings from 3 to 15 digits, one digit longer after each correct answer. Practice chunking and see how far you get.",
    url: "https://skilldrills.online/drills/memory/short-term-memory/digit-span",
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digit Span Test – Free Online Number Memory | SkillDrills",
    description: "Free online digit span test: random number strings from 3 to 15 digits, one digit longer after each correct answer. Practice chunking and see how far you get.",
  },
};

export default function DigitSpanPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Short-Term Memory", "item": "https://skilldrills.online/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "Digit Span", "item": "https://skilldrills.online/drills/memory/short-term-memory/digit-span" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Digit Span Memory Test",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Free forward digit span practice game: memorize a random number string, then type it back in the same order. Strings run from 3 to 15 digits.",
    "genre": "Memory Game / Working Memory",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Digit Span Memory Test",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span",
    "description": "Free browser-based forward digit span game with a one-up, one-down level staircase from 3 to 15 digits and a 45-second run.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Digit Span Memory Test",
    "description": "Free forward digit span practice game: memorize a random number string, then type it back in the same order. Strings run from 3 to 15 digits.",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span",
    "genre": ["Memory Game", "Cognitive Training", "Brain Game"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "SkillDrills"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Digit Span test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digit span test shows a string of digits and asks you to repeat it in order; psychologists have long used the format to study short-term memory. This SkillDrills version is a free practice game: a random string of 3 to 15 digits is shown all at once, then you type it back in forward order."
        }
      },
      {
        "@type": "Question",
        "name": "What digit span do people usually reach?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miller (1956) described immediate memory span as about seven items, plus or minus two. SkillDrills collects no user data, so it publishes no averages of its own; compare your peak level with your own earlier runs rather than with a norm."
        }
      },
      {
        "@type": "Question",
        "name": "Does this drill test forward or backward digit span?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Forward only: you type the digits in the order shown. Backward digit span, where you repeat the string in reverse, adds mental manipulation on top of storage, but this drill does not include a backward mode."
        }
      },
      {
        "@type": "Question",
        "name": "Is this the WAIS Digit Span subtest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Wechsler Adult Intelligence Scale includes a digit span subtest that a trained examiner administers and scores against norms. This drill is an unrelated free practice game: it uses its own timing and scoring and gives no scaled score or IQ result."
        }
      },
      {
        "@type": "Question",
        "name": "How does the phonological loop affect digit span performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alan Baddeley's model shows that numbers are held in the phonological store ('inner ear') and maintained through sub-vocal articulatory rehearsal ('inner voice'). Baddeley's work suggests that the faster you can rehearse, the more items you can keep refreshed, which is why chunking digits into short groups helps."
        }
      },
      {
        "@type": "Question",
        "name": "What is Miller's Law and the magical number 7?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formulated by psychologist George A. Miller in 1956, Miller's Law states that immediate human memory span is limited to approximately seven, plus or minus two items ($7 \\pm 2$). Modern cognitive models (Cowan, 2001) demonstrate that unchunked focal capacity is closer to 4 items, with higher spans achieved through chunking."
        }
      },
      {
        "@type": "Question",
        "name": "How does chunking improve digit span memory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chunking groups individual digits into meaningful, rhythmic multi-digit clusters (such as phone numbers: '839 - 241'). This recodes 6 individual items into 2 informational units, bypassing the 4-item cognitive bottleneck."
        }
      },
      {
        "@type": "Question",
        "name": "Why does the sequence length decrease after a mistake in this drill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The drill uses a simple one-up, one-down staircase. A correct answer adds one digit (up to 15) and shortens the display by 0.1 s (from 2.5 s down to 0.8 s); a wrong answer or 8 seconds without submitting removes one digit (not below 3) and lengthens the display by 0.2 s. That keeps the string near the length you can just manage."
        }
      },
      {
        "@type": "Question",
        "name": "Will playing Digit Span improve focus or other abilities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not reliably. Practice and chunking strategies will raise your score in this game, but research on working memory training generally finds that gains transfer poorly to untrained tasks. Treat it as practice and a challenge, not a guaranteed improvement."
        }
      },
      {
        "@type": "Question",
        "name": "Is this online Digit Span test free and browser-based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It is free, runs in your browser with no install or account, and works with the on-screen keypad or your keyboard (0-9, Backspace/Delete to erase, Enter to submit). Each correct string scores 100 x (1 + 0.1 x (digits - 3)) points; your best score stays in local storage."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Forward Digit Span Memory",
    "description": "Step-by-step methodology to encode, rhythmically chunk, and accurately recall progressive numerical sequences.",
    "step": [
      {
        "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span#step-1",
        
        "name": "Encode the Presented Digit String",
        "text": "The whole digit string appears at once for 2.5 seconds at first; the display gets 0.1 s shorter after each correct answer, down to 0.8 s."
      },
      {
        "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span#step-2",
        
        "name": "Apply Rhythmical Chunking in Triads",
        "text": "Group the digits into pairs or triplets (e.g., 3-digit clusters like phone numbers) to reduce cognitive load."
      },
      {
        "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span#step-3",
        
        "name": "Sustain Sub-Vocal Articulatory Loop Rehearsal",
        "text": "Sub-vocalize the sequence continuously in an internal loop to prevent trace decay across the phonological store."
      },
      {
        "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/digit-span#step-4",
        
        "name": "Enter the Sequence via Keyboard or Numpad",
        "text": "When the input prompt appears, type the digits in forward order on the keypad or keyboard and press Enter within 8 seconds."
      }
    ]
  };

  const digitSpanGuide = {
    heading: "Digit Span Test Guide: How Working Memory Span Works",
    intro: [
      "A digit span test shows a string of numbers and asks you to enter them back in order. In this free online version the string starts at 3 digits, grows by one digit when you succeed (up to 15) and shrinks by one after a miss, so it settles near the longest sequence you can hold: your digit span. Miller (1956) put the typical limit near seven.",
      "The theoretical foundation of digit span began with George A. Miller's seminal 1956 paper, 'The Magical Number Seven, Plus or Minus Two', which identified human immediate memory span as approximately seven discrete informational items. David Wechsler (1939, 1955, 2008) later included digit span tasks in his intelligence scales. This drill is not that subtest and gives no IQ score.",
      "According to Alan Baddeley's multicomponent working memory model (Baddeley & Hitch, 1974; Baddeley, 1986, 2000), numerical strings are temporarily maintained in the Phonological Loop. The phonological store holds sound-based traces that fade within a couple of seconds unless refreshed by silent rehearsal (the 'inner voice'). Nelson Cowan (2001) argued that when rehearsal and grouping are prevented, capacity is closer to about four items, so longer spans depend heavily on chunking.",
      "How the game works: a run lasts 45 seconds. Each round shows a new random digit string all at once (2.5 s at first, 0.1 s shorter after each correct answer, never under 0.8 s). You then have 8 seconds to type it and press Enter. Correct answers score 100 x (1 + 0.1 x (digits - 3)) points and add a digit; a wrong answer or timeout removes a digit. Nothing is deducted from your score or clock, and typing speed is not measured or scored.",
      "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below."
    ],
    benchmarks: {
      title: "What Is a Good Digit Span? SkillDrills Practice Bands",
      headers: ["Practice Band", "Peak Digit Count", "Level Reached", "Points per Correct String"],
      rows: [
        ["Band 1", "3 – 4 digits", "Starting levels", "100 – 110"],
        ["Band 2", "5 – 6 digits", "2 – 3 levels above the start", "120 – 130"],
        ["Band 3", "7 – 8 digits", "Around Miller's 7 ± 2", "140 – 150"],
        ["Band 4", "9 – 11 digits", "Needs reliable chunking", "160 – 180"],
        ["Band 5", "12 – 15 digits", "Top of the drill (max 15)", "190 – 220"]
      ],
      note: "SkillDrills practice bands derived from the scoring code (points = 100 x (1 + 0.1 x (digits - 3))). They are not population norms or WAIS scaled scores: SkillDrills collects no user data, so use them only to track your own runs."
    },
    techniques: {
      title: "Evidence-Based Protocols to Expand Digit Span Memory",
      items: [
        {
          name: "Phonetic Rhythm & Rhythmical Chunking",
          desc: "Divide continuous number strings into structured 3-digit clusters (e.g., '739 - 281 - 405') matching the prosody of telephone numbers (Miller, 1956). Grouping converts 9 independent digits into 3 manageable chunks, fitting comfortably within Cowan's 4-chunk bottleneck (Cowan, 2001).",
          tips: "Raise the mental pitch on the first digit of each triplet to establish distinct chunk boundaries."
        },
        {
          name: "Sub-Vocal Articulatory Loop Synchronization",
          desc: "Actively chant the numbers internally in a rapid, continuous loop (Baddeley, 1986). Because the acoustic trace in the phonological store fades in under 2 seconds, rapid articulatory rehearsal refreshes the signal before memory decay occurs.",
          tips: "Say digits as rapid multi-syllable phrases rather than isolated single digits."
        },
        {
          name: "Spatial Numpad Kinesthetic Path Association",
          desc: "Connect numeric strings to finger paths on the on-screen keypad (Logie, 1995). Picturing the digits as a shape on the keypad adds a spatial trace alongside the spoken one.",
          tips: "Visualize the geometric zigzag or column line drawn across the keypad as each number is shown."
        },
        {
          name: "Primacy-Recency Serial Position Buffering",
          desc: "Due to the serial position effect, early digits benefit from initial rehearsal (primacy), while the final 2 digits linger fresh in immediate echoic memory (recency). Concentrate conscious rehearsal on cementing the opening chunk, then pull the final digits from echoic memory.",
          tips: "Lock in the first 3-4 digits immediately; rely on auditory echo for the last 2 digits."
        }
      ]
    },
    steps: [
      "Center your gaze on the numeric display box and get ready: the whole string appears at once, for 2.5 seconds at first.",
      "As the digits appear, immediately divide them into 2 or 3-digit rhythmic groups.",
      "Chant the chunked sequence sub-vocally in a continuous loop to prevent phonological decay.",
      "When the input box activates, type or tap the digits decisively using the on-screen keypad or your keyboard's number keys, then press Enter.",
      "Allow the adaptive staircase to calibrate your current capacity and progressively expand your working memory boundaries."
    ],
    audience: "Students, professionals and anyone curious about short-term memory who wants a quick, free number memory challenge and a way to practice chunking.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    // Works named in this page's copy, with DOIs so a reader or an answer
    // engine can check the figures rather than take them on trust.
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
    related: [
      { href: "/drills/memory/short-term-memory/color-sequence", label: "Color Memory Game" },
      { href: "/drills/memory/short-term-memory/word-recall", label: "Verbal Memory Test" },
      { href: "/drills/memory/spatial-memory/grid-memorization", label: "Visual Memory Test" },
      { href: "/drills/memory/spatial-memory/object-location", label: "Object Location Memory Test" },
      { href: "/drills/memory/working-memory/n-back", label: "3-Back Working Memory Test" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <DigitSpanClient
        copy={{
          h1Keyword: "Digit Span Test",
          h1Suffix: " - Free Online Number Memory Game"
        }}
      />
      <DrillGuide guide={digitSpanGuide} />
    </>
  );
}