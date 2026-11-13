import ColorSequenceClient from './ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Color Memory Game – Simon Sequence Test | SkillDrills",
  description: "Play the free Color Memory Game online: Simon-style color sequences that grow one color longer each level. Watch, tap them back in order. No download.",
  keywords: [
    "color memory game",
    "simon game",
    "simon says game",
    "simon game online",
    "color sequence memory",
    "visual memory test",
    "sequence memory test",
    "color sequence game",
    "visual working memory",
    "short term memory test online",
    "color pattern memory",
    "simon memory game online",
    "visual memory drill",
    "visuospatial sketchpad test",
    "memory chunking techniques"
  ],
  alternates: {
    canonical: "https://skilldrills.online/drills/memory/short-term-memory/color-sequence",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Color Memory Game – Simon Sequence Test | SkillDrills",
    description: "Play the free Color Memory Game online: Simon-style color sequences that grow one color longer each level. Watch, tap them back in order. No download.",
    url: "https://skilldrills.online/drills/memory/short-term-memory/color-sequence",
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Color Memory Game – Simon Sequence Test | SkillDrills",
    description: "Play the free Color Memory Game online: Simon-style color sequences that grow one color longer each level. Watch, tap them back in order. No download.",
  },
};

const copyEn = {
  title: "Color Memory Game",
  subtitle: "Simon Game Online & Visual Working Memory Sequence Test",
};

export default function ColorSequencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Short-Term Memory", "item": "https://skilldrills.online/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "Color Sequence", "item": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Color Memory Game",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Free Simon-style color sequence game: watch a random sequence of six colors flash, then tap it back in order. Level 1 shows 3 colors and each clear adds one.",
    "genre": "Cognitive Training / Visual Working Memory",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Color Memory Game",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence",
    "description": "Free browser-based visual working memory drill with 6 vibrant colors and adaptive difficulty. Practice sequential pattern recall and memory chunking.",
    "dateModified": "2026-09-05",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  
const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Color Sequence Memory Test",
  "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence",
  "description": "Interactive visual sequence recall game. Watch a random color sequence flash, then reproduce it in order; each clear makes the next sequence one color longer.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Training", "Brain Games", "Visual Memory", "Sequential Recall"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Color Memory Game?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Color Memory Game is a free Simon-style sequence game (not the Hasbro product). Six colored pads flash a random sequence one color at a time; you then tap the pads back in the same order. Level 1 shows 3 colors, and each level adds one (sequence length = level + 2). A run lasts 45 seconds."
        }
      },
      {
        "@type": "Question",
        "name": "How is the Color Memory Game scored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each fully correct sequence scores 100 points times (1 + 0.1 x level), so a level 5 clear is worth 150 points, and moves you up one level. A wrong tap, or 8 seconds without a tap during input, drops you one level and shows a new sequence; no points or time are taken away. The flashes also get faster as the level rises."
        }
      },
      {
        "@type": "Question",
        "name": "How many items can human visual short-term memory hold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While George A. Miller (1956) famously posited 7 ± 2 items for verbal memory, research on pure visual working memory by Nelson Cowan (2001) and Steven J. Luck & Edward K. Vogel (1997) demonstrates that unchunked visual capacity is strictly limited to approximately 4 items. Expanding beyond 4 items requires active cognitive chunking."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between visual working memory and short-term memory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Short-term memory refers to passive storage of visual information over brief intervals. Visual working memory, as modeled by Alan Baddeley (2000), involves active manipulation, filtering, sequential ordering, and chunking of visual stimuli in the visuospatial sketchpad while executing a task."
        }
      },
      {
        "@type": "Question",
        "name": "What does a Simon-style sequence game exercise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reproducing a sequence of flashes asks you to hold both which colors appeared and in what order. In Logie's (1995) account of the visuospatial sketchpad, that draws on the visual cache (what the colors were) and the inner scribe (rehearsing the sequence of positions)."
        }
      },
      {
        "@type": "Question",
        "name": "What is chunking in memory training and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Chunking is the cognitive process of grouping individual stimuli into higher-order conceptual units. For example, grouping 'Red, Blue, Green, Yellow' into two pairs ('Red-Blue' and 'Green-Yellow') allows players to store four colors as two memory units, bypassing the 4-item working memory bottleneck."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I forget the middle colors in long sequences?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This occurs due to the Serial Position Effect. The primacy effect protects early sequence items through initial rehearsal, while the recency effect preserves the final items via sensory echoic or iconic storage. Middle items experience proactive and retroactive interference, making them most vulnerable to forgetting."
        }
      },
      {
        "@type": "Question",
        "name": "How does Color Sequence differ from the Digit Span test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Digit Span shows numbers, which are easy to rehearse with your inner voice. Color Sequence shows colored pads flashing in turn, so you can remember it as colors, as positions on the pad layout, or by naming the colors to yourself. Many players combine those strategies."
        }
      },
      {
        "@type": "Question",
        "name": "Will training color sequence memory improve everyday focus and learning?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not reliably. Practice makes you better at this game, but research on working memory training generally finds that gains transfer poorly to untrained tasks. Treat it as a fun memory challenge, not a guaranteed way to improve focus, school work or gaming."
        }
      },
      {
        "@type": "Question",
        "name": "How does the adaptive difficulty staircase work in this drill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sequence length = level + 2. A correct sequence moves you up one level; a wrong tap or an 8-second input timeout moves you down one level (never below level 1). Each round is a new random sequence, so the game settles near the longest sequence you can reproduce."
        }
      },
      {
        "@type": "Question",
        "name": "Is this Color Memory Game free and browser-based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It is free, runs in your web browser with no download, install or account, and keeps your best score only in your browser's local storage."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Visual Sequence Memory",
    "description": "Step-by-step methodology to encode, chunk, and accurately recall progressive chromatic sequences.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence#step-1",
        "name": "Observe the Sequence Presentation",
        "text": "Watch the 6-pad color grid carefully as the sequence illuminates one color at a time without distractions."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence#step-2",
        "name": "Chunk Elements into Multi-Color Units",
        "text": "Group colors into pairs or triplets (e.g., Red-Blue, Green-Yellow) rather than trying to hold individual hues independently."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence#step-3",
        "name": "Reproduce the Sequence in Order",
        "text": "When the input prompt triggers, tap the color pads in the exact temporal sequence presented."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/drills/memory/short-term-memory/color-sequence#step-4",
        "name": "Let the Level Adjust",
        "text": "A correct sequence adds one color to the next round; a wrong tap or 8 seconds without input removes one. Keep playing until the 45-second clock runs out."
      }
    ]
  };

  const colorSequenceGuide = {
    heading: "Color Memory Game Guide & Sequential Visual Working Memory",
    intro: [
      "A color sequence memory game, often called a Simon-style game, flashes colors in a pattern that you then repeat in the same order. In this free online version each round is a new random sequence of six possible colors: it gets one color longer after a correct round and one shorter after a miss, so it settles near the longest color sequence you can hold in visual working memory.",
      "The architectural limits of human short-term memory have been thoroughly mapped across decades of cognitive psychology. While George A. Miller (1956) identified the informational bottleneck of $7 \\pm 2$ items in verbal rehearsal, seminal work by Nelson Cowan (2001) and Steven J. Luck & Edward K. Vogel (1997) revealed that pure visual working memory capacity is strictly constrained to approximately 4 distinct items. Without structured re-coding strategies, unassisted human recall rapidly collapses beyond four sequential elements.",
      "According to Alan Baddeley's multi-component model of working memory (Baddeley & Hitch, 1974; Baddeley, 2000), retaining sequential visual arrays engages the Visuospatial Sketchpad (VSSP). Robert H. Logie (1995) further divided the VSSP into the visual cache (which stores passive chromatic representations) and the inner scribe (which actively rehearses spatial-temporal sequences). Naming the colors to yourself adds a verbal trace alongside the visual one, which many players find helps on longer sequences.",
      "How the game works: a run lasts 45 seconds. Level 1 shows 3 colors and sequence length is always level + 2. Each flash starts at about 0.7 seconds and gets shorter as the level rises. A correct sequence scores 100 x (1 + 0.1 x level) points and moves you up a level; a wrong tap, or 8 seconds without a tap during input, moves you down a level. Nothing is subtracted from your score or clock. Response times are not measured or scored.",
      "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below.",
      "This drill is a free browser game for practice and interest. It is not a medical device, a diagnostic instrument, or a screening or treatment tool for any condition, and no score here says anything about your health or your memory in a clinical sense. If you have concerns about your memory or thinking, speak to a qualified clinician."
    ],
    benchmarks: {
      title: "SkillDrills Practice Bands (Color Sequence)",
      headers: ["Practice Band", "Level", "Sequence Length", "Points per Correct Sequence"],
      rows: [
        ["Band 1", "Level 1 – 2", "3 – 4 colors", "110 – 120"],
        ["Band 2", "Level 3 – 4", "5 – 6 colors", "130 – 140"],
        ["Band 3", "Level 5 – 6", "7 – 8 colors", "150 – 160"],
        ["Band 4", "Level 7 – 9", "9 – 11 colors", "170 – 190"],
        ["Band 5", "Level 10+", "12+ colors", "200+"]
      ],
      note: "SkillDrills practice bands derived from the scoring code (length = level + 2; points = 100 x (1 + 0.1 x level)). They are not population norms: SkillDrills collects no user data, so these bands only help you track your own runs."
    },
    techniques: {
      title: "Evidence-Based Protocols to Expand Sequence Memory",
      items: [
        {
          name: "Relational Paired Chunking",
          desc: "Divide incoming color streams into discrete binary or trinary chunks (Miller, 1956). Rather than memorizing 'Red, Blue, Green, Yellow', compress them into 'Red-Blue' and 'Green-Yellow'. This cuts informational load in half, fitting complex 8-element sequences into Cowan's 4-item bottleneck (Cowan, 2001).",
          tips: "Mentally pause between pairs during the display phase to establish distinct cognitive boundaries."
        },
        {
          name: "Dual-Modal Cross-Coding (Phonological Loop Integration)",
          desc: "Engage Baddeley's phonological loop in tandem with your visuospatial sketchpad (Baddeley, 2000). Silently vocalize the initial letters or syllables of each color ('R-B-G-Y') in rhythmic meter while watching the screen, creating redundant verbal and visual storage traces.",
          tips: "Whisper initials in groups of two with an upbeat cadence (e.g., 'Red-Blue... Green-Yellow')."
        },
        {
          name: "Spatial Trajectory Kinesthetic Mapping",
          desc: "Map color positions to geometric paths across the 6-pad grid (Logie, 1995). Rather than memorizing abstract hues, encode the sequence as a continuous shape or directional motion (e.g., 'clockwise loop' or 'zigzag from top to bottom').",
          tips: "Trace the polygonal path mentally between pad centers as each color lights up."
        },
        {
          name: "Serial Position Shielding",
          desc: "Due to the serial position effect, middle sequence items experience the highest error rates from proactive and retroactive interference. Anchor the opening chunk immediately into long-term working memory, while relying on immediate sensory echo for the final color.",
          tips: "Rehearse the first chunk immediately upon display start; let the final item linger in fresh visual memory."
        }
      ]
    },
    steps: [
      "Center your gaze across the 6-pad display matrix to maintain full visual coverage of all color positions.",
      "Observe the presentation sequence without tapping, keeping your breathing steady and focus unbroken.",
      "Group incoming colors into 2-pad chunks using silent initial phonetics or geometric movement lines.",
      "When the prompt activates, tap the pads decisively in sequence without hesitation.",
      "Adapt to level shifts: let the staircase recalibrate your challenge level to progressively widen your working memory span."
    ],
    audience: "Students, esports competitors, professionals, and cognitive fitness enthusiasts looking to expand visual working memory capacity, master informational chunking, and build sustained mental focus under time pressure.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    // Works named in this page's copy, with DOIs so a reader or an answer
    // engine can check the figures rather than take them on trust.
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995', 'luck1997', 'simon1974'),
    related: [
      { href: "/drills/memory/short-term-memory/digit-span", label: "Digit Span Memory Test" },
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
      <ColorSequenceClient copy={copyEn} />
      <DrillGuide guide={colorSequenceGuide} />
      
    </>
  );
}