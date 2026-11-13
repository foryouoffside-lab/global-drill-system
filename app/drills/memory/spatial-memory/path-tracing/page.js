import PathTracingClient from './PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Path Tracing Memory Test – Spatial Span Game | SkillDrills',
  description: 'Free path tracing memory test. Watch a path of adjacent tiles light up, then retrace it in order. Corsi-style spatial span practice on grids from 3x3 to 7x7.',
  keywords: [
    'path tracing memory test',
    'sequence memory test',
    'spatial sequence memory',
    'path memory test',
    'path recall test',
    'corsi block tapping test',
    'corsi block test online',
    'sequential memory test',
    'visual path memory',
    'path tracing drill',
    'sequence memory game',
    'route recall test',
    'spatial sequence recall',
    'path reproduction test',
    'visuomotor sequence learning',
    'spatial path memory',
    'how to train sequence memory',
    'visual sequential memory test'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/drills/memory/spatial-memory/path-tracing',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Path Tracing Memory Test - Free Spatial Span Game',
    description: 'Free path tracing memory test: watch a path of adjacent tiles light up, then tap it back in order within 10 seconds. Paths start at 3 steps and grow one step per level.',
    type: 'website',
    url: 'https://skilldrills.online/drills/memory/spatial-memory/path-tracing',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Path Tracing Memory Test - Free Spatial Span Game',
    description: 'Free path tracing memory test: watch a path of adjacent tiles light up, then tap it back in order within 10 seconds. Paths start at 3 steps and grow one step per level.',
  },
};

export default function PathTracingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Spatial Memory", "item": "https://skilldrills.online/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Path Tracing Memory Test", "item": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Path Tracing Memory Test",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript and HTML5 support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free path memory game: a route of adjacent tiles lights up one step at a time, then you tap it back in the same order. Paths grow from 3 steps on a 3x3 grid up to 7x7 grids.",
    "dateModified": "2026-11-12"
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Path Tracing Memory Test",
    "url": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing",
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
    "name": "Path Tracing Memory Test",
    "description": "Free path memory game: a route of adjacent tiles lights up one step at a time, then you tap it back in the same order. Paths grow from 3 steps on a 3x3 grid up to 7x7 grids.",
    "url": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing",
    "genre": ["Memory Game", "Cognitive Training", "Spatial Sequence Memory"],
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
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Path Tracing Memory Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a free spatial sequence memory game, not a clinical test. A path lights up one tile at a time (one step every 0.5 seconds); each step moves to a tile directly above, below, left or right of the last, never revisiting a tile. You then tap the path back in the same order. Level 1 is 3 steps on a 3x3 grid, and each level adds one step."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Corsi Block-Tapping Test relate to path tracing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Corsi block-tapping task (Corsi, 1972) is a classic research and clinical measure of spatial span, in which an examiner taps blocks in sequence. Path tracing borrows the idea of reproducing a spatial sequence, but on a grid with adjacent steps and its own timing and scoring. It is Corsi-style practice, not the Corsi test, and gives no normed result."
        }
      },
      {
        "@type": "Question",
        "name": "What cognitive faculty does sequential path memory measure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Logie's (1995) account, remembering a sequence of positions draws on the 'inner scribe', the part of visuospatial working memory associated with movement and spatial sequences, rather than the 'visual cache' that holds static patterns."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'Inner Scribe' in working memory theory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Proposed by cognitive psychologist Robert H. Logie (1995), the Inner Scribe is an active spatial rehearsal mechanism that encodes movement transitions and sequential trajectories, distinct from the passive Visual Cache that stores static visual patterns."
        }
      },
      {
        "@type": "Question",
        "name": "How is the path tracing game scored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each fully correct path scores 150 points and adds one step to the next path. A wrong tile, or not finishing within 10 seconds, scores nothing and loads a new path at the same length; no points or time are deducted. The 60-second clock runs only while you are tapping, not while a path is being shown. SkillDrills collects no user data, so there is no average to compare against."
        }
      },
      {
        "@type": "Question",
        "name": "How does directional vector chunking improve path recall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because every step goes up, down, left or right, you can remember runs of steps as moves (such as 'two right, one up, two left') or as shapes (an L or a staircase). Grouping a six-step path into two or three moves is much easier than holding six separate tiles."
        }
      },
      {
        "@type": "Question",
        "name": "How does path tracing differ from static grid pattern memorization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Static grid memorization (like the Visual Patterns Test) presents all lit cells simultaneously to test passive visual cache capacity. Path tracing requires temporal-order encoding: each step must be remembered in chronological sequence, requiring active sequential rehearsal."
        }
      },
      {
        "@type": "Question",
        "name": "Why do longer paths require hierarchical trajectory chunking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cowan (2001) argued that working memory holds only about 4 items without grouping. Paths of 7 or more steps go well past that, so grouping them into a few moves or shapes becomes essential."
        }
      },
      {
        "@type": "Question",
        "name": "Will this improve navigation or gaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not reliably. Remembering sequences of positions is part of tasks like following directions or learning routes, but research on memory training generally finds that gains on one game transfer poorly to untrained tasks. Treat it as practice and a challenge, not a guaranteed improvement."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get better at path tracing with practice?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, at this game. With practice most players get faster at spotting moves and shapes in the path, which lets them reproduce longer paths. That is improvement on this task; it is not evidence of broader memory gains."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Sequential Spatial Memory with Path Tracing",
    "description": "Four steps for remembering and retracing a path of adjacent tiles.",
    "step": [
      {
        "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing#step-1",
        
        "name": "Fixate Initial Starting Dot & Anticipate Motion Trajectory",
        "text": "Watch the first tile that lights up. Steps follow every 0.5 seconds, each to a tile directly above, below, left or right."
      },
      {
        "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing#step-2",
        
        "name": "Group Discrete Steps into Directional Vector Chunks",
        "text": "Mentally group steps into moves or shapes (e.g., 'right-right-down' or 'L-shape') so a long path becomes a few units."
      },
      {
        "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing#step-3",
        
        "name": "Rehearse the Route",
        "text": "As the last step fades, the input phase starts right away; replay the route in your head as you begin."
      },
      {
        "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/memory/spatial-memory/path-tracing#step-4",
        
        "name": "Retrace the Sequence with Deliberate Motor Cadence",
        "text": "Tap the tiles in the same order. You have 10 seconds for the whole path, and one wrong tile ends the round."
      }
    ]
  };

  const pathTracingGuide = {
    intro: [
      "A path tracing memory test, inspired by the Corsi block-tapping task, shows a route across a grid and asks you to retrace it in the same order. In this free online version each level adds one step (level 1 is 3 steps), and the grid grows from 3x3 to 4x4, 5x5, 6x6 and 7x7 as paths get longer, so you see how long a spatial sequence you can hold.",
      "During each round a tile lights up every 0.5 seconds; each step moves to an adjacent tile (up, down, left or right) and never revisits one. You then have 10 seconds to tap the whole path in order. A correct path scores 150 points and adds a step; a wrong tile or timeout repeats the length with a new path. The 60-second clock runs only while you are tapping, so demonstrations do not use up your time. Tap speed is not measured or scored.",
      "In working memory architecture, Logie (1995) and Alan Baddeley (2000) identified that sequential movement is retained by the Inner Scribe, a dynamic spatial rehearsal loop. George A. Miller (1956) and Herbert A. Simon (1974) described how grouping items into chunks extends memory span, and Nelson Cowan (2001) argued that working memory holds roughly 4 items without grouping.",
      "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below.",
      "This drill is a free browser game for practice and interest. It is not a medical device, a diagnostic instrument, or a screening or treatment tool for any condition, and no score here says anything about your health or your memory in a clinical sense. If you have concerns about your memory or thinking, speak to a qualified clinician."
    ],
    benchmarks: {
      title: "Path Tracing: SkillDrills Practice Bands",
      headers: ["Practice Band", "Correct Paths", "Score", "Path Length & Grid Reached"],
      rows: [
        ["Band 1", "0 – 2", "0 – 300", "3 – 5 steps, 3x3"],
        ["Band 2", "3 – 5", "450 – 750", "6 – 8 steps, 4x4"],
        ["Band 3", "6 – 9", "900 – 1,350", "9 – 12 steps, 5x5"],
        ["Band 4", "10 – 13", "1,500 – 1,950", "13 – 16 steps, 6x6"],
        ["Band 5", "14+", "2,100+", "17+ steps, 7x7"]
      ],
      note: "SkillDrills practice bands derived from the scoring code (150 points per correct path; path length = level + 2; 60-second clock counting tapping time only). They are not population norms or Corsi span scores: SkillDrills collects no user data, so use them only to track your own runs."
    },
    techniques: {
      title: "Evidence-Based Protocols to Expand Spatial Path Memory",
      items: [
        {
          name: "Directional Vector Chunking (Miller 1956; Simon 1974)",
          desc: "Mentally group discrete sequential steps into directional macro-vectors. For example, instead of remembering steps 1, 2, 3, 4, 5, encode the path as 'two steps East, one step North, two steps West'. Three moves are far easier to hold than five tiles.",
          tips: "Look for shapes like L-turns, U-turns, and staircases rather than individual tiles."
        },
        {
          name: "Kinesthetic Scribe Trajectory Pre-Planning (Logie 1995)",
          desc: "Mentally trace the continuous line connecting the tiles as they light up. Many players find that rehearsing the movement makes the path easier to reproduce.",
          tips: "Feel the movement in your hand before touching the screen."
        },
        {
          name: "Parafoveal Matrix Anchoring",
          desc: "Keep your gaze near the center of the grid rather than jumping your eyes to each lit tile; on the small grids you can follow the whole path without moving your eyes much.",
          tips: "Keep your head and eyes still, allowing the flashing dots to register across your visual field."
        },
        {
          name: "Rhythmical Cadence & Pacing",
          desc: "Retrace the path with steady, rhythmic tapping. You have 10 seconds per path, and long pauses make the later steps easier to forget.",
          tips: "Execute each path in an unbroken rhythmic sequence rather than hesitating between individual cells."
        }
      ]
    },
    steps: [
      "Fixate your gaze on the matrix centroid and watch the animated dot path sequence.",
      "Mentally chunk individual tile flashes into moves (e.g. 'right-up-right').",
      "As the last tile fades, replay the route in your head; input starts right away.",
      "Tap the tiles in the same order within 10 seconds; one wrong tile ends the round.",
      "Each correct path adds a step, and the grid grows from 3x3 up to 7x7 as paths get longer."
    ],
    audience: "Gamers, students and anyone who wants a quick, free spatial sequence memory challenge.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    // Works named in this page's copy, with DOIs so a reader or an answer
    // engine can check the figures rather than take them on trust.
    sources: pickSources('corsi1972', 'milner1971', 'logie1995', 'cowan2001', 'baddeley2000', 'miller1956', 'simon1974'),
    related: [
      { href: "/drills/memory/spatial-memory/grid-memorization", label: "Visual Memory Test" },
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
      <PathTracingClient
        copy={{
          h1Keyword: "Path Tracing Memory Test",
          h1Suffix: " - Free Spatial Span Game"
        }}
      />
      <DrillGuide guide={pathTracingGuide} />
    </>
  );
}
