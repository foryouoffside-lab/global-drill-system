import ConcentrationGridClient from './ConcentrationGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — concentration-grid
// PRIMARY:  "schulte table"                  — high-intent visual-search query
//           "concentration grid"             — matching drill-format query
// SECONDARY / LSI:
//           "the concentration grid"         — direct-format query
//           "concentration grid online"      — High-intent web query
//           "concentration grids"            — High volume plural query
//           "schulte table online"           — High-intent web query
//           "concentration grid test"        — Timed assessment search intent
//           "schulte table trainer"          — Specialized training tool query
//           "visual search test"             — Cognitive mechanism query
//           "tabela de schulte"              — Brazilian Portuguese target (pt-BR)
//           "tabla de schulte"               — Spanish target (es-ES)
//           "シュルテテーブル"                — Japanese target (ja-JP)
// ============================================================

export const metadata = {
  title: "Schulte Table Online | Concentration Grid | SkillDrills",
  description: "Free Schulte table online: find sequential numbers on expanding grids to practice visual search, focus, and peripheral scanning.",
  keywords: [
    "schulte table online",
    "schulte table trainer",
    "concentration grid",
    "schulte table",
    "concentration grid test",
    "concentration grid online",
    "visual search speed",
    "peripheral vision training",
    "schulte grid",
    "speed reading vision drill",
    "sequential number search",
    "focus training game",
    "free cognitive training",
    "saccadic eye movement training"
  ],
  openGraph: {
    title: "Schulte Table Online | Concentration Grid | SkillDrills",
    description: "Free Schulte table online: find sequential numbers on expanding grids to practice visual search, focus, and peripheral scanning.",
    type: "website",
    url: "https://skilldrills.online/drills/cognitive/focus/concentration-grid",
    siteName: "SkillDrills",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Schulte Table Online | Concentration Grid | SkillDrills",
    description: "Free Schulte table online: find sequential numbers on expanding grids to practice visual search, focus, and peripheral scanning.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/drills/cognitive/focus/concentration-grid",
    languages: getAlternateLanguages('/drills/cognitive/focus/concentration-grid'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
    { "@type": "ListItem", "position": 2, "name": "Drills Hub", "item": "https://skilldrills.online/drills" },
    { "@type": "ListItem", "position": 3, "name": "Cognitive Drills", "item": "https://skilldrills.online/drills/cognitive" },
    { "@type": "ListItem", "position": 4, "name": "Schulte Table Trainer", "item": "https://skilldrills.online/drills/cognitive/focus/concentration-grid" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Schulte Table Trainer",
  "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid",
  "description": "An interactive web-based cognitive trainer that tests visual search speed and sustained attention by tapping sequential numbers on expanding grids.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12",
  "educationalUse": ["Visual Search Practice", "Peripheral Scanning Practice", "Sustained Attention Practice"]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Schulte Table & Concentration Grid Trainer",
  "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "An interactive web-based cognitive trainer that tests visual search speed and sustained attention by tapping sequential numbers on expanding grids.",
  "genre": "Cognitive Training / Visual Search",
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Train with Schulte Table & Concentration Grid",
  "description": "Step-by-step instructions for training visual search speed, peripheral vision, and sustained focus with expanding number grids.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid#step-1",
      "name": "Anchor Gaze at Grid Center",
      "text": "Position your eyes near the center of the display matrix. Maintain a soft visual focus rather than darting your fovea randomly across individual tiles."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid#step-2",
      "name": "Locate and Tap Numbers Sequentially",
      "text": "Find and tap each number in ascending order starting strictly from 1 (1, 2, 3...) as quickly as possible without hesitation."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid#step-3",
      "name": "Expand Parafoveal Vision",
      "text": "Use your peripheral vision to spot the locations of upcoming digits (e.g. locating 4 and 5 while tapping 3), chaining movements seamlessly."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid#step-4",
      "name": "Adapt to Expanding & Rotated Grids",
      "text": "Clearing each grid immediately expands the matrix (from 3x3 to 4x4 up to 8x8) and introduces rotational noise, testing visual search discipline within the 45-second clock."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Schulte Table and Concentration Grid drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Schulte table is a grid of shuffled numbers, named after the German psychiatrist Walter Schulte, that you find and tap in ascending order. The concentration grid is a similar focus exercise from sports psychology (Harris & Harris, 1984). This drill starts at 3x3, grows one size per cleared grid up to 8x8 (7x7 on very narrow phones), tilts the numbers slightly from 5x5 onward, and runs on one 45-second clock."
      }
    },
    {
      "@type": "Question",
      "name": "How does this drill improve peripheral vision and speed reading?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The drill practises finding numbers quickly while keeping your gaze near the grid center and noticing upcoming numbers before you reach them. Reading research shows how much text the eyes take in around each fixation (Rayner, 1998), but there is no good evidence that grid practice by itself makes you read faster, so treat any carry-over to reading or sport as unproven."
      }
    },
    {
      "@type": "Question",
      "name": "Why do the numbers rotate at larger grid sizes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From the 5x5 grid onward each number is tilted by a small random angle (up to about 12 degrees on 5x5 and 6x6, about 20 degrees from 7x7). Tilted numbers are a little harder to recognise at a glance, which keeps the search from getting easier as the grids grow (visual search is reviewed in Treisman & Gelade, 1980; Wolfe, 2007)."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good Schulte table time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Printed Schulte tables are usually timed on a single 5x5 grid, and published norms vary by age and source. This drill is different: it runs one continuous 45-second clock across growing grids, so classic completion-time norms do not map onto it. Compare your own score on the same device and input method over repeated runs."
      }
    },
    {
      "@type": "Question",
      "name": "How is the performance score calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each correct tap is worth 100 points plus a speed bonus of up to 120 points, which shrinks the longer you take after your previous correct tap and reaches zero at 1.2 seconds. Clearing a whole grid adds a bonus of 500 points scaled by grid size (500 on 3x3, about 889 on 4x4, about 1,389 on 5x5, and so on)."
      }
    },
    {
      "@type": "Question",
      "name": "Does the 45-second timer pause or reset between grids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The drill operates on a single continuous 45-second clock with zero pauses, time refills, or deductions. Clearing a grid instantly loads the next larger dimension while the countdown continues uninterrupted, measuring sustained focus endurance."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I tap the wrong number?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An incorrect tap flashes a red visual error warning and counts against your final accuracy percentage, but it does not end your session early or deduct seconds from your clock. Every session runs until the 45-second timer reaches zero."
      }
    },
    {
      "@type": "Question",
      "name": "What is considered an elite score on this drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The end-screen grade compares your score with a SkillDrills reference score of 8,000 points. S+ starts at 7,220 points, S at 5,780 and A at 4,500. The grade depends on score only; accuracy is shown separately. These are practice bands, not population norms."
      }
    },
    {
      "@type": "Question",
      "name": "Who uses Schulte tables and concentration grids in real-world training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Concentration grids are described in sports psychology (Harris & Harris, 1984) as a focus exercise for athletes, and Schulte tables are widely used by speed-reading and attention-training hobbyists. Treat them as practice for visual scanning and focus, not as proof of any real-world performance gain."
      }
    },
    {
      "@type": "Question",
      "name": "How can I improve my Schulte table score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scan the whole grid from a point near the center instead of hunting cell by cell, and compare your own runs on the same device. The grid grows one size each time you clear it and the 45-second clock never resets, so clearing the small grids quickly leaves more time for the larger ones."
      }
    },
    {
      "@type": "Question",
      "name": "Is the Schulte Table Trainer free to play?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Schulte Table Trainer on SkillDrills is 100% free with no registration, subscription fees, or software downloads required. It runs directly in any modern desktop or mobile browser."
      }
    }
  ]
};

// --- Guide Content ---

const concentrationGridGuide = {
  heading: "Schulte Table Trainer Guide & Visual Search Benchmarks",
  intro: [
    "A Schulte table is a grid of shuffled numbers that you tap in ascending order as fast as you can, a classic test of visual search speed and attention. This free online version expands from 3x3 to 8x8 inside one continuous 45-second run, so you practise scanning, not just one fixed grid.",
    "The Schulte table is named after the German psychiatrist Walter Schulte. In its traditional form, the numbers 1 to 25 are shuffled across a 5x5 grid and you find each one in ascending order, usually while trying to keep your gaze near the center.",
    "Sports psychology describes a similar 'concentration grid' exercise (Harris & Harris, 1984) as a simple focus drill for athletes. An event-related potential study of 27 children aged 8-11 searching Schulte grids found that searching for numbers in sequence took longer than locating a single target, and that adding a second colour slowed both, with matching differences in the recorded ERP signal (Lu et al., 2022).",
    "The SkillDrills version does not stop at one grid. It starts at 3x3 and grows one size each time you clear a grid, up to 8x8 (7x7 on very narrow phones), tilts the numbers slightly from 5x5 onward, and runs on one fixed 45-second clock with no time bonuses or penalties.",
    "How this is measured: every event is timestamped with the browser's performance.now() high-resolution clock, entirely on your device -- no score is uploaded. Browser timers are deliberately coarsened as a Spectre mitigation (typically to about 1 ms), and your display quantizes each change to its refresh interval, about 16.7 ms per frame at 60 Hz (Woods et al., 2015). Treat differences smaller than about 5 ms as measurement noise, and compare your own runs on the same hardware rather than against someone else's setup.",
    "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below."
  ],
  benchmarks: {
    title: "SkillDrills Practice Bands",
    headers: ["Grade", "Label", "Score in a 45s run"],
    rows: [
      ["S+", "Legendary", "7,220+"],
      ["S", "Elite", "5,780 - 7,219"],
      ["A", "Excellent", "4,500 - 5,779"],
      ["B", "Great", "2,880 - 4,499"],
      ["C", "Good", "1,620 - 2,879"],
      ["D", "Keep Going", "720 - 1,619"],
      ["F", "Needs Practice", "Under 720"]
    ],
    note: "Bands come from the end-screen grade formula (score compared with an 8,000-point SkillDrills reference). They are practice markers, not population statistics or percentiles, and scores vary with device and input method."
  },
  techniques: {
    title: "Evidence-Based Techniques for Peak Grid Performance",
    items: [
      {
        name: "Center Foveal Anchor with Soft Peripheral Focus",
        desc: "Do not chase each number with full-body eye saccades. Keep your primary gaze loosely anchored near the center of the grid, allowing your wider visual field to register candidate numbers simultaneously (Lu et al., 2022).",
        tips: "Avoid pinning your eyes to the screen corners; widen your attentional aperture."
      },
      {
        name: "Paired Sequential Chunking (Lookahead Technique)",
        desc: "Never search for one digit in isolation. If you spot '4' while looking for '3', store its spatial coordinate in visuospatial working memory. When '3' is tapped, immediately execute the planned saccade to '4' with zero latency (Rayner, 1998).",
        tips: "Maintain a mental map of 1-2 upcoming numbers to chain consecutive rapid taps."
      },
      {
        name: "Feature Integration & Guided Search (Wolfe, 2007)",
        desc: "Guided search models propose that knowing what you are looking for steers attention toward matching features (Wolfe, 2007; Treisman & Gelade, 1980). Holding the next number's shape in mind before you scan may help you spot it sooner.",
        tips: "Mentally visualize the next numeral's distinct geometry before scanning the board."
      },
      {
        name: "Rotational Invariance & Invariant Feature Extraction",
        desc: "From 5x5 onward the numbers are tilted slightly, so they no longer match the upright shape you expect. Recognising them by their distinctive parts keeps your search steady.",
        tips: "Identify structural invariant landmarks (e.g. the loop of a 6/9, the horizontal crossbar of a 4)."
      }
    ]
  },
  steps: [
    "Anchor your gaze softly near the grid center to take in the full matrix.",
    "Locate '1' and tap it cleanly to start the sequential search chain.",
    "Look ahead: as you confirm the current target, scan your peripheral field for subsequent numbers.",
    "Advance through expanding grids: clear smaller boards swiftly to unlock larger 5x5, 6x6, and 7x7 layouts.",
    "Sustain visual discipline: navigate rotated number tiles without breaking your scanning rhythm across the full 45 seconds."
  ],
  audience: "Anyone who enjoys timed visual search puzzles: students, gamers, athletes and brain-game fans who want a quick, repeatable focus exercise.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('lu2022', 'treisman1980', 'rayner1998', 'rayner2016', 'wolfe2007', 'woods2015'),
  related: [
    { href: "/drills/cognitive/attention/concentration-stamina", label: "Focus Test" },
    { href: "/drills/cognitive/attention/divided-attention", label: "Divided Attention Test" },
    { href: "/drills/cognitive/attention/multi-tasking", label: "Multitasking Test" },
    { href: "/drills/cognitive/focus/distraction-fighter", label: "Stroop Test Online" },
    { href: "/drills/cognitive/processing-speed/rsvp-reader", label: "Reading Speed Test" },
    { href: "/drills/cognitive/processing-speed/symbol-matching", label: "Symbol Digit Modalities Test" },
    { href: "/drills/cognitive/processing-speed/reaction-time", label: "Neuro Speed & Reflex Test" }
  ]
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Concentration Grid – Schulte Table Trainer Online",
  "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid",
  "description": "Sequential number search on expanding Schulte tables and concentration grids. Train peripheral vision and visual search speed.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Cognitive Training", "Visual Search", "Schulte Table", "Concentration Grid"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const copyEn = {
  h1Keyword: "Schulte Table",
  h1Suffix: " Online — Concentration Grid Trainer",
  subtitle: "Schulte table concentration test for faster visual scanning, number search, and focused attention",
};

export default function ConcentrationGridPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ConcentrationGridClient copy={copyEn} />
      <DrillGuide guide={concentrationGridGuide} />
      <DrillFooter />
    </>
  );
}
