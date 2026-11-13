import ObjectLocationClient from './ObjectLocationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Object Location Memory Test – Spatial Recall | SkillDrills',
  description: 'Free object location memory test. Memorise where 2 to 10 objects sit on a 3x3, 4x4 or 5x5 grid for 1.5 seconds, then tap where the target object was.',
  keywords: [
    'object location memory test',
    'spatial position memory',
    'object location test',
    'spatial memory test online',
    'spatial location memory',
    'object placement memory',
    'location recall memory test',
    'visuospatial working memory test',
    'object location binding',
    'spatial memory training online',
    'visual spatial memory test',
    'where was it memory test',
    'matrix location memory',
    'object position recall',
    'spatial memory exercise',
    'spatial cognitive mapping',
    'visual object location test'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/drills/memory/spatial-memory/object-location',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/object-location'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Object Location Memory Test - Free Spatial Recall',
    description: 'Free object location memory test: see 2 to 10 objects on a 3x3 to 5x5 grid for 1.5 seconds, then tap where the target object was within 8 seconds.',
    type: 'website',
    url: 'https://skilldrills.online/drills/memory/spatial-memory/object-location',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Object Location Memory Test - Free Spatial Recall',
    description: 'Free object location memory test: see 2 to 10 objects on a 3x3 to 5x5 grid for 1.5 seconds, then tap where the target object was within 8 seconds.',
  },
};

export default function ObjectLocationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Spatial Memory", "item": "https://skilldrills.online/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Object Location Memory Test", "item": "https://skilldrills.online/drills/memory/spatial-memory/object-location" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Object Location Memory Test",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free object location memory game: memorize where several objects sit on a grid for 1.5 seconds, then tap the cell where one target object was.",
    "dateModified": "2026-11-12"
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Object Location Memory Test",
    "url": "https://skilldrills.online/drills/memory/spatial-memory/object-location",
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
    "name": "Object Location Memory Test",
    "description": "Free object location memory game: memorize where several objects sit on a grid for 1.5 seconds, then tap the cell where one target object was.",
    "url": "https://skilldrills.online/drills/memory/spatial-memory/object-location",
    "genre": ["Memory Game", "Cognitive Training", "Spatial Memory"],
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
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an Object Location Memory Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An object location memory test asks you to remember both what an object is and where it was. This SkillDrills version is a free practice game: you memorize a grid of objects, then show where one of them was."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Object Location drill work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Level 1 shows 2 objects on a 3x3 grid for 1.5 seconds; each level adds one object, up to 10. The grid becomes 4x4 at level 8 and 5x5 at level 15. When the objects hide, one target object is shown and you have 8 seconds to tap the cell where it was. A correct tap scores 150 points and moves you up a level. A run lasts 45 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "Is this the Silverman-Eals object location task?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Eals and Silverman (1994) studied memory for object locations using arrays of drawn objects in a research setting. This drill is an unrelated free game with its own grid, timing and scoring, and gives no normed result."
        }
      },
      {
        "@type": "Question",
        "name": "What is object-location binding in cognitive neuroscience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Object-location binding is linking an object's identity ('what') with its position ('where'). Research associates the 'what' and 'where' information with different visual pathways and links their combination with medial temporal lobe regions, including the hippocampus."
        }
      },
      {
        "@type": "Question",
        "name": "How is the object location game scored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each correct tap scores 150 points and adds one object to the next round (up to 10). A wrong tap or the 8-second timeout scores nothing and loads a new layout at the same level; no points or time are deducted. SkillDrills collects no user data, so there is no average score; compare against your own best."
        }
      },
      {
        "@type": "Question",
        "name": "How does this test differ from pure grid memorization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pure grid memorization only tests binary cell occupancy (which cells were lit), allowing simple Gestalt shape chunking. Object Location requires feature conjunction: remembering which specific object occupied which specific coordinate."
        }
      },
      {
        "@type": "Question",
        "name": "Why is it harder to remember an object's location than a simple pattern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You have to hold two kinds of information together, which object and which cell, rather than just which cells were filled. Remembering combinations of features is generally harder than remembering one feature alone."
        }
      },
      {
        "@type": "Question",
        "name": "What brain structures support object location memory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Research links object location memory with the hippocampus and nearby medial temporal regions, along with parietal and prefrontal areas involved in spatial attention and working memory. This game does not measure brain activity."
        }
      },
      {
        "@type": "Question",
        "name": "Are there score or timer penalties for missed clicks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. A wrong tap or an 8-second timeout never deducts points or time; it just scores nothing for that round. The next round is a new layout at the same level, so the difficulty never drops. The 45-second clock keeps running throughout."
        }
      },
      {
        "@type": "Question",
        "name": "Will this help me remember where I put things?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not reliably. You will get better at this game, but research on memory training generally finds that gains transfer poorly to untrained, everyday tasks such as finding your keys or tracking positions in games. Treat it as practice and a challenge, not a guaranteed improvement."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Object Location Spatial Memory",
    "description": "Four steps to encode objects and their positions in 1.5 seconds, then tap where the target object was.",
    "step": [
      {
        "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/object-location#step-1",
        
        "name": "Scan Grid Quadrants",
        "text": "Immediately partition the grid into 4 sectors (top-left, top-right, bottom-left, bottom-right) as the objects appear."
      },
      {
        "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/object-location#step-2",
        
        "name": "Anchor to Landmarks",
        "text": "Bind each object's identity to fixed landmarks such as corners, edges, or the center cell."
      },
      {
        "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/object-location#step-3",
        
        "name": "Form Semantic-Spatial Pairs",
        "text": "Create quick verbal or visual associations linking the object's identity with its position (e.g. 'star in top-right corner')."
      },
      {
        "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/object-location#step-4",
        
        "name": "Execute Precise Target Localization",
        "text": "When the target icon appears, recall its landmark and tap the cell within 8 seconds. You get one tap per round."
      }
    ]
  };

  const objectLocationGuide = {
    intro: [
      "An object location memory test shows several objects on a grid, hides them, then asks where a given object was. In this free online version level 1 shows 2 objects on a 3x3 grid; each level adds one object (up to 10), the grid becomes 4x4 at level 8 and 5x5 at level 15, so you see how many object positions you can hold at once.",
      "Marion Eals & Irwin Silverman (1994) studied memory for object locations and reported that it behaves differently from mental rotation; this drill is not their task. Earlier, Edward C. Tolman (1948) established the concept of cognitive mapping, showing how organisms form internal spatial models of their environment.",
      "In Baddeley's (2000) model, the episodic buffer combines information from different stores, such as what an object looks like and where it is; Logie (1995) separated the visual cache from the spatial inner scribe. Luck & Vogel (1997) and Cowan (2001) suggest working memory holds only about 3 to 4 items at a time, which is why the later levels become hard.",
      "How the game works: a run lasts 45 seconds and the clock runs continuously. Each round shows the objects for 1.5 seconds, then a target object; you have 8 seconds and one tap to find its cell. A correct tap scores 150 points and adds an object; a wrong tap or timeout scores nothing and repeats the level with a new layout. Tap speed is not measured or scored.",
      "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below."
    ],
    benchmarks: {
      title: "Object Location: SkillDrills Practice Bands",
      headers: ["Practice Band", "Correct Taps", "Score", "Level, Objects & Grid Reached"],
      rows: [
        ["Band 1", "0 – 2", "0 – 300", "Level 1 – 3, 2 – 4 objects, 3x3"],
        ["Band 2", "3 – 6", "450 – 900", "Level 4 – 7, 5 – 8 objects, 3x3"],
        ["Band 3", "7 – 10", "1,050 – 1,500", "Level 8 – 11, 9 – 10 objects, 4x4"],
        ["Band 4", "11 – 13", "1,650 – 1,950", "Level 12 – 14, 10 objects, 4x4"],
        ["Band 5", "14+", "2,100+", "Level 15+, 10 objects, 5x5"]
      ],
      note: "SkillDrills practice bands derived from the scoring code (150 points per correct tap; objects = level + 1, max 10; 4x4 from level 8, 5x5 from level 15; 45-second run). They are not population norms: SkillDrills collects no user data, so use them only to track your own runs."
    },
    techniques: {
      title: "Evidence-Based Protocols to Expand Object-Location Binding",
      items: [
        {
          name: "Relational Landmark Anchoring",
          desc: "Anchor target objects relative to permanent topological landmarks such as the 4 corners, center cell, or outer borders (Tolman, 1948). Remembering 'the diamond is in the top-left corner' anchors the object to a salient spatial beacon, bypassing complex coordinate calculation.",
          tips: "Note which items occupy corner or edge cells as soon as the grid appears."
        },
        {
          name: "Semantic-Spatial Associative Pairing",
          desc: "Create rapid narrative or functional associations linking an object's identity with its position (Baddeley, 2000). For example, mentally associate a 'star' at the top with the sky, or a 'key' at the bottom with a hidden drawer.",
          tips: "Form an instant verbal label connecting the item name with its spatial direction (e.g. 'star high, key low')."
        },
        {
          name: "Quadrantal Zoning & Chunking",
          desc: "Mentally subdivide the larger 4x4 and 5x5 grids into 4 distinct quadrants (top-left, top-right, bottom-left, bottom-right). Count how many objects inhabit each zone (e.g. 2 in top-left, 1 in bottom-right) to constrain your search space.",
          tips: "Count items per quadrant first, then identify their specific cell within that sub-grid."
        },
        {
          name: "Parafoveal Foveal Sweep",
          desc: "Anchor your gaze at the exact center of the grid during exposure to absorb the global distribution via parafoveal vision, then make 1 or 2 targeted micro-saccades to resolve ambiguous peripheral icons.",
          tips: "Avoid rapid chaotic eye darting; keep your head steady and sweep smoothly across the layout."
        }
      ]
    },
    steps: [
      "Center your gaze on the matrix and observe the initial object distribution.",
      "During the 1.5-second display, bind each object to a landmark (corners, borders, center).",
      "Form rapid semantic-spatial pairs connecting the icon identity with its position.",
      "When the grid clears and the target icon appears, query your landmark map and tap the recalled cell.",
      "Each correct answer adds an object; the grid grows from 3x3 to 4x4 at level 8 and to 5x5 at level 15."
    ],
    audience: "Gamers, students and anyone who wants a quick, free spatial memory challenge.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    // Works named in this page's copy, with DOIs so a reader or an answer
    // engine can check the figures rather than take them on trust.
    sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'luck1997', 'tolman1948', 'eals1994'),
    related: [
      { href: "/drills/memory/spatial-memory/grid-memorization", label: "Visual Memory Test" },
      { href: "/drills/memory/spatial-memory/path-tracing", label: "Path Tracing Memory Test" },
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
      <ObjectLocationClient
        copy={{
          h1Keyword: "Object Location Memory Test",
          h1Suffix: " - Free Spatial Recall"
        }}
      />
      <DrillGuide guide={objectLocationGuide} />
    </>
  );
}