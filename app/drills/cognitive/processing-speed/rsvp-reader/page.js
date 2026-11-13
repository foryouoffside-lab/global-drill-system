import RSVPReaderClient from './RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Reading Speed Test Online | RSVP Reader | SkillDrills",
  description: "Free reading speed test online using RSVP: words flash at one point from 250 to 850 WPM and you catch the target word. Practise fast word recognition.",
  keywords: ["reading speed test online", "reading speed test", "rsvp speed reader", "rapid serial visual presentation", "speed reading test", "wpm reading test", "words per minute test", "reading fluency test", "optimal recognition point", "visual reading speed",
    "speed reading app free",
    "reading comprehension speed",
    "text processing drill"],
  openGraph: {
    title: "Reading Speed Test Online | RSVP Reader | SkillDrills",
    description: "Free reading speed test online using RSVP: words flash at one point from 250 to 850 WPM and you catch the target word. Practise fast word recognition.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Reading Speed Test Online | RSVP Reader | SkillDrills",
    description: "Free reading speed test online using RSVP: words flash at one point from 250 to 850 WPM and you catch the target word. Practise fast word recognition.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
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
      "name": "RSVP Speed Reader",
      "item": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "RSVP Speed Reader — Reading Speed & Lexical Test",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free RSVP speed reader and reading speed test. Words flash one at a time at a fixed point, from 250 up to 850 WPM, and you tap when the target word appears. It does not test comprehension.",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader",
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
  "name": "Reading Speed Test",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "en-US",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "RSVP Speed Reader – High-Throughput Lexical Presentation Game",
  "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader",
  "description": "Free RSVP speed reader and reading speed test. Words flash one at a time at a fixed point, from 250 up to 850 WPM, and you tap when the target word appears. It does not test comprehension.",
  "genre": [
    "Educational",
    "Brain Game",
    "Reading Training"
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
      "name": "What is RSVP (Rapid Serial Visual Presentation)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RSVP (rapid serial visual presentation) flashes words one at a time at a single point, so your eyes do not have to move along a line. This drill runs from 250 to 850 WPM; research on RSVP finds comprehension tends to fall as the rate rises."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Optimal Recognition Point (ORP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ORP is the specific character location within a word (typically just left of center) where the eye can identify the full lexical token with minimal fixation time (Rayner, 1998)."
      }
    },
    {
      "@type": "Question",
      "name": "Why does traditional reading have a speed limit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In normal reading the eyes alternate between brief fixations and quick jumps (saccades), with occasional backward regressions (Rayner, 1998; Rayner et al., 2016). Most reading time is spent in fixations, so removing eye movements alone does not make reading several times faster."
      }
    },
    {
      "@type": "Question",
      "name": "What is the average reading speed for adults?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Normal reading of prose is often cited at about 200-300 words per minute (Rayner, 1998). In this drill the WPM is set by your level, not measured from your reading, so the speed you reach is a drill result, not your reading speed on a page."
      }
    },
    {
      "@type": "Question",
      "name": "What speed tiers are available in this drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Level 1 starts at 250 WPM, progressing through Level 2 (350 WPM), Level 3 (480 WPM), Level 4 (650 WPM), up to Level 5 (850 WPM). Every 2 target words caught (200 points) move you up one level."
      }
    },
    {
      "@type": "Question",
      "name": "How does target word detection verify comprehension?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tapping when the target word appears shows you recognised that word in the stream. It does not check that you understood the passage. Each catch is worth 100 points; a wrong tap or a missed target lowers accuracy, and a wrong tap locks the button for 1 second. The run lasts 45 seconds."
      }
    },
    {
      "@type": "Question",
      "name": "Can RSVP improve cognitive processing speed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RSVP flashes one word at a time at a fixed point, so it practises fast word recognition without eye movements. This site does not claim it strengthens specific brain regions, and RSVP is not shown here to improve comprehension at high speeds."
      }
    },
    {
      "@type": "Question",
      "name": "Does screen refresh rate affect RSVP reading?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Browser display timing is tied to the refresh rate (Woods et al., 2015), so word durations are rounded to whole frames. A higher refresh rate rounds less, but any modern display works; close heavy background tabs if words stutter."
      }
    },
    {
      "@type": "Question",
      "name": "Who benefits most from RSVP training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Students, researchers, executives reading heavy documentation loads, and gamers seeking faster on-screen UI scanning."
      }
    },
    {
      "@type": "Question",
      "name": "Is this RSVP speed reader free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this reading speed test 100% free with no account or installation required."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "RSVP Speed Reader",
  "description": "Free RSVP speed reader and reading speed test. Words flash one at a time at a fixed point, from 250 up to 850 WPM, and you tap when the target word appears. It does not test comprehension.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Inspect the Upcoming Target Word",
      "text": "Note the designated target word displayed in the top banner.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Fixate on the Central ORP Anchor",
      "text": "Keep your eyes on the highlighted letter at the center of the stream.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Process High-Velocity Lexical Tokens",
      "text": "Let the words flash past at the current speed. Every 2 catches raise the level, from 250 up to 850 WPM.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Trigger Target Detection Instantly",
      "text": "Tap TARGET DETECTED while the target word is on screen. A wrong tap locks the button for 1 second. The run lasts 45 seconds.",
      "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "Reading Speed Test",
    paragraphs: [
      "Free RSVP speed reader and reading speed test. Words flash one at a time at a fixed point, from 250 up to 850 WPM, and you tap when the target word appears. It does not test comprehension.",
      "The ORP is the specific character location within a word (typically just left of center) where the eye can identify the full lexical token with minimal fixation time (Rayner, 1998).",
      "In normal reading the eyes alternate between brief fixations and quick jumps (saccades), with occasional backward regressions (Rayner, 1998; Rayner et al., 2016). Most reading time is spent in fixations, so removing eye movements alone does not make reading several times faster.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills Practice Bands',
    note: 'Bands come from the end-screen grade formula (score compared with a 2,500-point SkillDrills reference). Each catch is 100 points. They are practice markers, not population statistics or reading-speed norms.',
    headers: ['Grade', 'Label', 'Score (catches)'],
    rows: [
      ['S+', 'Legendary', '2,300+ (23+)'],
      ['S', 'Elite', '1,900-2,200 (19-22)'],
      ['A', 'Excellent', '1,500-1,800 (15-18)'],
      ['B', 'Great', '900-1,400 (9-14)'],
      ['C', 'Good', '600-800 (6-8)'],
      ['D', 'Keep Going', '300-500 (3-5)'],
      ['F', 'Needs Practice', 'Under 300 (0-2)'],
    ],
  },
  protocols: {
    title: 'How to Play',
    description: 'The four steps of a Reading Speed Test run.',
    items: [
      { title: "Inspect the Upcoming Target Word", description: "Note the designated target word displayed in the top banner." },
      { title: "Fixate on the Central ORP Anchor", description: "Keep your eyes on the highlighted letter at the center of the stream." },
      { title: "Process High-Velocity Lexical Tokens", description: "Let the words flash past at the current speed. Every 2 catches raise the level, from 250 up to 850 WPM." },
      { title: "Trigger Target Detection Instantly", description: "Tap TARGET DETECTED while the target word is on screen. A wrong tap locks the button for 1 second. The run lasts 45 seconds." },
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
      <RSVPReaderClient copy={{ title: "Reading Speed Test", subtitle: "RSVP reading speed test for WPM, fixed-point word recognition, and visual reading fluency" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
