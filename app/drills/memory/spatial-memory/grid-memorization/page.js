import GridMemorizationClient from './GridMemorizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Visual Memory Test – Grid Pattern Memory Game | SkillDrills',
  description: 'Free visual memory test. Memorise purple cell patterns flashed for 1.5 seconds on a 4x4, then 5x5 grid, and tap them back. No sign-up, plays in your browser.',
  keywords: [
    'visual memory test',
    'grid memory test',
    'spatial memory test',
    'visual pattern test',
    'pattern memory test',
    'memory matrix test',
    'grid memorization',
    'visual working memory test',
    'visual patterns test',
    'spatial working memory test',
    'visual memory human benchmark',
    'how to improve visual memory',
    'spatial memory training',
    'grid pattern memory game',
    'visual span test',
    'matrix memory test',
    'spatial chunking visual memory'
  ],
  openGraph: {
    title: 'Visual Memory Test - Free Grid Pattern Memory Game',
    description: 'Free visual memory test: memorize cell patterns flashed for 1.5 seconds, from 5 cells on a 4x4 grid up to 12 cells on a 5x5 grid, then tap them back.',
    type: 'website',
    url: 'https://skilldrills.online/drills/memory/spatial-memory/grid-memorization',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visual Memory Test - Free Grid Pattern Memory Game',
    description: 'Free visual memory test: memorize cell patterns flashed for 1.5 seconds, from 5 cells on a 4x4 grid up to 12 cells on a 5x5 grid, then tap them back.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/memory/spatial-memory/grid-memorization',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
};

export default function GridMemorizationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Spatial Memory", "item": "https://skilldrills.online/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Visual Memory Test", "item": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Visual Memory Test (Grid Memorization)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free grid pattern memory game: a pattern of purple cells flashes for 1.5 seconds, then you tap the same cells from memory. Patterns grow from 5 cells on a 4x4 grid to 12 on a 5x5 grid.",
    "dateModified": "2026-11-12"
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Visual Memory Test (Grid Memorization)",
    "url": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "SkillDrills"
    },
    "isAccessibleForFree": true,
    "dateModified": "2026-11-12"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Visual Memory Test (Grid Memorization)",
    "description": "Free grid pattern memory game: a pattern of purple cells flashes for 1.5 seconds, then you tap the same cells from memory. Patterns grow from 5 cells on a 4x4 grid to 12 on a 5x5 grid.",
    "url": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization",
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
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Visual Memory Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A visual memory test asks you to hold a visual pattern in mind for a few seconds and reproduce it. This SkillDrills version is a free practice game, not a clinical test: you memorize which grid cells lit up and tap them back."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Grid Memorization drill work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A pattern of purple cells lights up for 1.5 seconds. When it clears, tap every cell that was lit, in any order; there is no time limit per round. It starts with 5 cells on a 4x4 grid and adds one cell per perfect round up to 7; then the grid becomes 5x5 with 5 cells and grows to a maximum of 12. Each perfect round scores 150 points. The 60-second clock only runs while you are recalling, not while the pattern is shown."
        }
      },
      {
        "@type": "Question",
        "name": "Is this the Visual Patterns Test (VPT)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Visual Patterns Test, developed by Della Sala, Logie and colleagues (1997), is a research and clinical task that also uses grids of filled squares. This drill borrows the general idea but uses its own grid sizes, timing and scoring, and gives no clinical or normed result."
        }
      },
      {
        "@type": "Question",
        "name": "How does this test differ from the Corsi Block-Tapping Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Corsi Block-Tapping Test (Corsi, 1972) measures sequential spatial memory (tapping blocks in temporal order), recruiting the active 'inner scribe'. In contrast, Grid Memorization presents all cells simultaneously, isolating the static 'visual cache' matrix pattern retention."
        }
      },
      {
        "@type": "Question",
        "name": "How is the grid memory game scored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every perfect round adds 150 points and makes the next pattern one cell larger (up to 12 cells on 5x5). Tapping a wrong cell ends the round with no points and loads a new pattern at the same size. SkillDrills collects no user data, so it publishes no average scores; compare against your own best."
        }
      },
      {
        "@type": "Question",
        "name": "How does spatial chunking improve visual memory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Research suggests visual working memory holds only about 3 to 4 separate items at once (Luck & Vogel, 1997; Cowan, 2001). Spatial chunking bypasses this limit by grouping adjacent illuminated cells into recognizable geometric shapes (e.g., an 'L', square, diagonal, or letter), compressing multiple cells into a single cognitive unit."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between the visual cache and the inner scribe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Logie's (1995) model of visuospatial working memory, the 'visual cache' is a passive store that holds static visual form, color, and matrix images, while the 'inner scribe' actively rehearses spatial sequences and movement paths."
        }
      },
      {
        "@type": "Question",
        "name": "Why do grid patterns decay so quickly after 1.5 seconds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Iconic memory, the brief visual afterimage, fades within a fraction of a second. Unless you encode the pattern into working memory, for example as a few shapes, the detail is quickly lost."
        }
      },
      {
        "@type": "Question",
        "name": "Are there score penalties for incorrect clicks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Tapping an incorrect cell ends that round without points, but never deducts points or time. The next round is a new pattern at the same size, so the difficulty never drops."
        }
      },
      {
        "@type": "Question",
        "name": "Will this improve visual memory in real-world tasks or gaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not reliably. You will get better at this game, but research on working memory training generally finds that gains transfer poorly to untrained tasks such as minimap awareness or navigation. Treat it as practice and a challenge, not a guaranteed improvement."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Visual Memory on Grid Matrices",
    "description": "Four steps to encode, chunk, and reconstruct grid patterns flashed for 1.5 seconds.",
    "step": [
      {
        "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization#step-1",
        
        "name": "Anchor Central Gaze",
        "text": "Fixate your eyes at the center of the grid prior to pattern illumination to exploit parafoveal vision across the entire matrix."
      },
      {
        "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization#step-2",
        
        "name": "Execute Gestalt Shape Chunking",
        "text": "Group lit cells into geometric clusters (corners, lines, blocks) rather than trying to memorize isolated coordinates."
      },
      {
        "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization#step-3",
        
        "name": "Engage Motor-Spatial Tracing",
        "text": "Mentally trace a continuous line through the highlighted cells during the 1.5-second exposure window to prime motor recall."
      },
      {
        "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/grid-memorization#step-4",
        
        "name": "Systematic Matrix Reconstruction",
        "text": "Tap the recognized shape clusters first, then the isolated cells. There is no per-round time limit, but the 60-second clock runs while you recall."
      }
    ]
  };

  const gridGuide = {
    intro: [
      "A visual memory test flashes a pattern of lit cells on a grid, then asks you to tap the same cells from memory. In this free online version the pattern starts at 5 cells on a 4x4 grid and grows by one cell per perfect round; after 7 cells the grid becomes 5x5 and grows to 12 cells. A wrong tap loads a new pattern at the same size, so you see how large a spatial pattern you can hold.",
      "The study of visuospatial span was pioneered by Pietro Corsi (1972) through the Corsi Block-Tapping Test, which demonstrated that visuospatial memory operates as a distinct neural system from verbal digit span (Milner, 1971). In 1997, Sergio Della Sala, Robert H. Logie, and colleagues developed the Visual Patterns Test (VPT) to study static pattern memory separately from sequential movement. This drill is not that test.",
      "In modern cognitive neuroscience, Robert H. Logie (1995) and Alan Baddeley (2000) subdivided the Visuo-Spatial Sketchpad into the 'Visual Cache' (a passive store for chromatic, brightness, and static matrix representations) and the 'Inner Scribe' (an active mechanism for spatial movement planning and rehearsal). Research by Steven J. Luck & Edward K. Vogel (1997) and Nelson Cowan (2001) suggests that visual working memory holds roughly 3 to 4 separate items. Expanding matrix span requires spatial chunking—grouping lit cells into holistic Gestalt shapes.",
      "How the game works: each pattern of purple cells is shown for 1.5 seconds. You then tap the lit cells in any order, with no per-round time limit. A perfect round scores 150 points and adds a cell; one wrong tap ends the round and loads a new pattern at the same size. The 60-second clock runs only during recall, so reveals do not use up your time. Click speed is not measured or scored.",
      "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below.",
      "This drill is a free browser game for practice and interest. It is not a medical device, a diagnostic instrument, or a screening or treatment tool for any condition, and no score here says anything about your health or your memory in a clinical sense. If you have concerns about your memory or thinking, speak to a qualified clinician."
    ],
    benchmarks: {
      title: "Grid Memory: SkillDrills Practice Bands",
      headers: ["Practice Band", "Perfect Rounds", "Score", "Pattern Reached"],
      rows: [
        ["Band 1", "0 – 2", "0 – 300", "4x4 grid, 5 – 7 cells"],
        ["Band 2", "3 – 5", "450 – 750", "5x5 grid, 5 – 7 cells"],
        ["Band 3", "6 – 8", "900 – 1,200", "5x5 grid, 8 – 10 cells"],
        ["Band 4", "9 – 10", "1,350 – 1,500", "5x5 grid, 11 – 12 cells"],
        ["Band 5", "11+", "1,650+", "5x5 grid, 12 cells (maximum) repeated"]
      ],
      note: "SkillDrills practice bands derived from the scoring code (150 points per perfect round; 4x4 from 5 to 7 cells, then 5x5 from 5 to 12 cells; 60-second clock counting recall time only). They are not population norms: SkillDrills collects no user data, so use them only to track your own runs."
    },
    techniques: {
      title: "Evidence-Based Protocols to Expand Matrix Visual Recall",
      items: [
        {
          name: "Gestalt Spatial Shape Chunking",
          desc: "Mentally group adjacent lit cells into recognizable geometric primitives such as triangles, lines, squares, or familiar letters (Wertheimer, 1923; Della Sala et al., 1999). Remembering 7 cells as two recognizable shapes is far easier than holding 7 separate positions.",
          tips: "Search immediately for connected lines and corner blocks rather than scanning isolated cells."
        },
        {
          name: "Negative Space & Complementary Parsing",
          desc: "When a matrix cluster is densely populated with lit cells, count and remember the unlit (empty) cells instead. Encoding 2 missing cells within a 6-cell block is far more token-efficient than encoding the 4 filled positions.",
          tips: "If a quadrant is nearly full, memorize the dark 'holes' instead of the illuminated lights."
        },
        {
          name: "Kinesthetic Scribe Trajectory Encoding",
          desc: "Engage the 'inner scribe' (Logie, 1995) by mentally tracing a continuous line or trajectory connecting the illuminated cells during the 1.5-second exposure. Many players find that a planned path makes the pattern easier to reproduce.",
          tips: "Follow a sweeping motion (e.g., top-left to bottom-right) to give the pattern directional flow."
        },
        {
          name: "Central Fixation & Parafoveal Snapshotting",
          desc: "Keep your gaze anchored firmly at the exact center of the grid when the round starts. Avoid making frantic saccades between individual cells; parafoveal vision captures the global spatial topology simultaneously.",
          tips: "Soften your visual focus slightly to absorb the pattern as a single holistic photographic silhouette."
        }
      ]
    },
    steps: [
      "Fixate your eyes on the center of the grid and await pattern illumination.",
      "During the 1.5-second flash, instantly group lit cells into 2 or 3 geometric shape chunks.",
      "Identify negative space 'holes' in dense clusters to minimize informational units.",
      "When the grid clears, tap the recognized geometric chunks back onto the matrix.",
      "Progress through expanding 4x4 to 5x5 matrices to continuously calibrate your visual working memory ceiling."
    ],
    audience: "Gamers, students, chess players and anyone who wants a quick, free visual pattern memory challenge.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    // Works named in this page's copy, with DOIs so a reader or an answer
    // engine can check the figures rather than take them on trust.
    sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
    related: [
      { href: "/drills/memory/spatial-memory/path-tracing", label: "Path Tracing Memory Test" },
      { href: "/drills/memory/spatial-memory/object-location", label: "Object Location Memory Test" },
      { href: "/drills/memory/short-term-memory/digit-span", label: "Digit Span Memory Test" },
      { href: "/drills/memory/short-term-memory/word-recall", label: "Verbal Memory Test" },
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
      <GridMemorizationClient
        copy={{
          h1Keyword: "Visual Memory Test",
          h1Suffix: " – Free Grid Pattern Memory Game"
        }}
      />
      <DrillGuide guide={gridGuide} />
    </>
  );
}
