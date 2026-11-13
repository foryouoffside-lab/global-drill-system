import WordRecallClient from './WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Verbal Memory Test – Word Recall Game | SkillDrills",
  description: "Free verbal memory test: study a list of words for 2 seconds, then type back every one. The list grows from 3 to 12 words as you recall it correctly.",
  keywords: [
    "verbal memory test",
    "word recall test",
    "word memory test",
    "free recall memory test",
    "verbal working memory test",
    "short term verbal memory test",
    "word list memory test",
    "immediate word recall",
    "how to improve verbal memory",
    "言語 記憶 テスト",
    "언어 기억 테스트"
  ],
  alternates: {
    canonical: "https://skilldrills.online/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Verbal Memory Test – Word Recall Game | SkillDrills",
    description: "Free online verbal memory test: memorize a word list in 2 seconds, then type all the words back in any order. Lists grow from 3 to 12 words.",
    url: "https://skilldrills.online/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Verbal Memory Test – Word Recall Game | SkillDrills",
    description: "Free online verbal memory test: memorize a word list in 2 seconds, then type all the words back in any order. Lists grow from 3 to 12 words.",
  },
};

export default function WordRecallPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Short-Term Memory", "item": "https://skilldrills.online/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "Word Recall", "item": "https://skilldrills.online/drills/memory/short-term-memory/word-recall" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Verbal Memory Test",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Free word recall game: a list of words is shown all at once for 2 seconds, then you type every word back in any order. Lists run from 3 to 12 words.",
    "genre": "Memory Game / Verbal Memory",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Verbal Memory Test",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall",
    "description": "Free browser-based word recall game with a one-up, one-down list length from 3 to 12 words and feedback on which words you got, missed or added.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Verbal Memory Test",
    "description": "Free word recall game: a list of words is shown all at once for 2 seconds, then you type every word back in any order. Lists run from 3 to 12 words.",
    "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall",
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
        "name": "What is the Verbal Memory Test (Word Recall)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a free word recall game, not a clinical test. A list of words (3 at the start, up to 12) is shown all at once for 2 seconds. You then have 12 seconds to type every word, in any order, separated by spaces or commas, and press Enter. A round counts only if you get every word and add none."
        }
      },
      {
        "@type": "Question",
        "name": "What is free recall and how does it differ from recognition memory?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Free recall requires active spontaneous retrieval of stored memory traces from internal cues without prompts. Recognition memory presents items and merely asks if they were previously seen. Free recall is usually harder than recognition, because you must generate the words yourself."
        }
      },
      {
        "@type": "Question",
        "name": "How is the word recall game scored?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A perfect round (every word, no extras, spelling exact apart from capitals and accents) scores 150 x (1 + 0.15 x (words - 3)) points and adds one word to the next list, up to 12. A missed word, a misspelled or extra word, or the 12-second timeout removes one word (not below 3). Nothing is deducted from your score or the 45-second clock. SkillDrills collects no user data, so there is no average score to compare against."
        }
      },
      {
        "@type": "Question",
        "name": "What is the serial position effect in word lists?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Described by Bennet B. Murdock Jr. in 1962, the serial position effect shows that memory accuracy follows a U-shaped curve: early words benefit from primacy and final words from recency, leaving middle words most vulnerable to forgetting. That classic result comes from words presented one at a time; in this drill the whole list appears at once, so the order you read it in matters most."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I remember the first and last words but forget the middle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Middle words suffer from both proactive interference (interference from preceding words) and retroactive interference (interference from newly presented words), causing an informational bottleneck in the working memory buffer."
        }
      },
      {
        "@type": "Question",
        "name": "How does narrative linking improve word recall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Narrative linking weaves isolated words into a vivid, cohesive storyline. Craik & Lockhart's (1972) levels-of-processing account predicts that this kind of meaningful encoding is remembered better than rote repetition. With only 2 seconds to study, a very short story or image works best."
        }
      },
      {
        "@type": "Question",
        "name": "Does word order matter during free recall testing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. You can type the words in any order. Separate them with spaces or commas; capitals and accents are ignored, but spelling must otherwise be exact."
        }
      },
      {
        "@type": "Question",
        "name": "Does practising word recall improve my memory in general?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You will get better at this task, and mnemonic strategies you practise here -- grouping, narrative linking, imagery -- can help with remembering other lists. Broad improvement to memory in general is a much weaker claim: gains on a trained task often fail to generalise to untrained ones. Treat this as practice and a strategy workout, not as a treatment for anything, and note that nothing here can prevent, diagnose or screen for any medical condition."
        }
      },
      {
        "@type": "Question",
        "name": "Is this online Verbal Memory Test free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It is free, runs in your web browser with no download or account, and shows after each round which words you got, missed or added. Your best score is kept only in your browser's local storage."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Verbal Free Recall Memory",
    "description": "Step-by-step methodology to encode, narratively link, and freely retrieve progressive word lists.",
    "step": [
      {
        "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall#step-1",
        "name": "Read and Semantically Encode the Word List",
        "text": "The whole list appears at once for 2 seconds. Read it quickly, saying each word to yourself while forming a mental image."
      },
      {
        "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall#step-2",
        "name": "Construct an Associative Narrative Link",
        "text": "Weave the words into a vivid, continuous micro-story (e.g., 'The knight climbed the mountain with a golden lantern') to chunk the items together."
      },
      {
        "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall#step-3",
        "name": "Offload Terminal Recency Words Immediately",
        "text": "When the input box appears you have 12 seconds. Type the words you are least sure of first, while they are still fresh."
      },
      {
        "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/memory/short-term-memory/word-recall#step-4",
        "name": "Execute Free Recall Retrieval from Narrative Schema",
        "text": "Unroll your mental story to recall the rest, separating words with spaces or commas, and press Enter to submit."
      }
    ]
  };

  const wordRecallGuide = {
    heading: "Verbal Memory Test Guide & Immediate Free Recall",
    intro: [
      "A verbal memory test shows a list of words and asks you to type back as many as you can remember. In this free online version a list of 3 words is shown all at once for 2 seconds; you then have 12 seconds to type them all. The list grows by one word (up to 12) when you recall it perfectly and shrinks by one after a miss, and word order does not matter, so it settles near your free-recall word span.",
      "The scientific study of verbal memory began with Hermann Ebbinghaus (1885), who mathematically formulated the human forgetting curve and the dynamics of serial learning. Clinical word-list tests later standardized this kind of task; this drill is not one of them and gives no clinical result.",
      "In 1962, Bennet B. Murdock Jr. described the serial position curve in free recall: better memory for the first items (primacy) and the last items (recency). Fergus I. M. Craik & Robert S. Lockhart (1972) proposed the 'levels of processing' framework, which holds that meaningful encoding, such as linking words into a story, is usually remembered better than rote repetition.",
      "How the game works: a run lasts 45 seconds. Each round shows a new random list all at once for 2 seconds, then gives you 12 seconds to type it. A perfect round scores 150 x (1 + 0.15 x (words - 3)) points and adds a word; any missed, misspelled or extra word, or a timeout, removes a word. Nothing is deducted from your score or clock, and typing speed is not measured or scored.",
      "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below.",
      "This drill is a free browser game for practice and interest. It is not a medical device, a diagnostic instrument, or a screening or treatment tool for any condition, and no score here says anything about your health or your memory in a clinical sense. If you have concerns about your memory or thinking, speak to a qualified clinician."
    ],
    benchmarks: {
      title: "Verbal Free Recall: SkillDrills Practice Bands",
      headers: ["Practice Band", "Peak List Length", "Points per Perfect Round", "What It Takes"],
      rows: [
        ["Band 1", "3 – 4 words", "150 – 173", "Reading the list once and typing it back"],
        ["Band 2", "5 – 6 words", "195 – 218", "Quick grouping or a short story"],
        ["Band 3", "7 – 8 words", "240 – 263", "Reliable story linking or imagery in 2 seconds"],
        ["Band 4", "9 – 10 words", "285 – 308", "Fast, consistent encoding with no spelling slips"],
        ["Band 5", "11 – 12 words", "330 – 353", "Top of the drill (max 12 words)"]
      ],
      note: "SkillDrills practice bands derived from the scoring code (points = 150 x (1 + 0.15 x (words - 3))). They are not population norms: SkillDrills collects no user data, so use them only to track your own runs."
    },
    techniques: {
      title: "Evidence-Based Protocols to Expand Verbal Free Recall",
      items: [
        {
          name: "Narrative Story Linking & Associative Chaining",
          desc: "Weave unrelated words into a bizarre, vivid mental micro-story (Craik & Lockhart, 1972; Tulving, 1962). Linking 'eagle', 'castle', and 'lantern' into 'An eagle carrying a burning lantern landed on the castle roof' binds 3 separate words into one scene that is easier to recall.",
          tips: "The more exaggerated, colorful, or physically impossible the narrative image, the more indelible the mental trace."
        },
        {
          name: "Dual-Coding Method (Mental Imagery + Auditory Echo)",
          desc: "Activate Allan Paivio's dual-coding mechanism by visualizing each noun's physical appearance while pronouncing its phonetic syllables. Paivio's dual-coding theory holds that a word stored both as an image and as a sound has two routes back during recall.",
          tips: "Visualize the object's color and texture for half a second while silently articulating its name."
        },
        {
          name: "Categorical & Semantic Clustering",
          desc: "Mentally reorganize the presented list into conceptual categories (architecture, nature, precious materials, tools) regardless of presented sequence (Tulving, 1962). Semantic clustering enables associative priming: recalling one category member unlocks the others.",
          tips: "Tag words by shared traits (e.g., 'castle, temple = buildings; diamond, crystal = gems')."
        },
        {
          name: "Recency-First Dumping Strategy",
          desc: "When the recall window opens, type the words you feel least sure of immediately (Murdock, 1962), while they are still fresh, then rebuild the rest from your story.",
          tips: "Type the shakiest words first, then unroll your story; you have 12 seconds."
        }
      ]
    },
    steps: [
      "Center your gaze on the word display area: the whole list appears at once for 2 seconds.",
      "As you read the list, connect the words into a vivid mental narrative or thematic clusters.",
      "Form high-contrast visual mental images of each noun to establish dual-coded episodic traces.",
      "When the input box appears, type the words you are least sure of first, then unroll your story and press Enter.",
      "Allow the adaptive staircase to calibrate your current capacity and progressively expand your verbal memory boundaries."
    ],
    audience: "Students, professionals and anyone who wants a quick, free word memory challenge and a place to practise memory strategies such as story linking and imagery.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    // Works named in this page's copy, with DOIs so a reader or an answer
    // engine can check the figures rather than take them on trust.
    sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
    related: [
      { href: "/drills/memory/short-term-memory/digit-span", label: "Digit Span Memory Test" },
      { href: "/drills/memory/short-term-memory/color-sequence", label: "Color Memory Game" },
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
      <WordRecallClient
        copy={{
          h1Keyword: "Verbal Memory Test",
          h1Suffix: " - Free Word Recall Game"
        }}
      />
      <DrillGuide guide={wordRecallGuide} />
    </>
  );
}