import NBackClient from './NBackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'N-Back Test – Working Memory Training Game | SkillDrills',
  description: 'Free N-back working memory test. Decide whether each letter matches the one n steps back, starting at 3-back and moving up every 8 correct answers.',
  keywords: [
    'n-back test',
    'n-back task',
    'working memory test',
    '3-back test',
    'n-back training',
    'n-back online',
    'working memory training online',
    'n back memory test',
    'n-back task online',
    'working memory capacity test',
    'cognitive n-back test',
    'free n-back training',
    'n-back test free',
    'working memory updating test',
    'how to train n-back'
  ],
  openGraph: {
    title: 'N-Back Test - Free Working Memory Training Game',
    description: 'Free single n-back letter test: decide MATCH or NO MATCH for each letter against the one n steps back. Starts at 3-back and moves up every 8 correct answers.',
    type: 'website',
    url: 'https://skilldrills.online/drills/memory/working-memory/n-back',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N-Back Test - Free Working Memory Training Game',
    description: 'Free single n-back letter test: decide MATCH or NO MATCH for each letter against the one n steps back. Starts at 3-back and moves up every 8 correct answers.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/memory/working-memory/n-back',
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
};

export default function NBackPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
      { "@type": "ListItem", "position": 2, "name": "Memory Drills", "item": "https://skilldrills.online/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Working Memory", "item": "https://skilldrills.online/drills/memory/working-memory" },
      { "@type": "ListItem", "position": 4, "name": "N-Back Working Memory Test", "item": "https://skilldrills.online/drills/memory/working-memory/n-back" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "N-Back Working Memory Test",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requires JavaScript and HTML5 support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Free single n-back letter game: for each letter, decide whether it matches the letter shown n steps earlier. Starts at 3-back; every 8 correct answers adds one level.",
    "dateModified": "2026-11-12"
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "N-Back Working Memory Test",
    "url": "https://skilldrills.online/drills/memory/working-memory/n-back",
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the N-Back Working Memory Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The n-back task is a classic research task for working memory updating: you watch a stream of items and decide whether the current one matches the item n steps earlier. This SkillDrills version is a free single n-back game with letters, not a clinical test. It starts at 3-back; you answer each letter with the MATCH or NO MATCH button (no keyboard keys) within the display window."
        }
      },
      {
        "@type": "Question",
        "name": "Who invented the N-Back task and what was its original purpose?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wayne K. Kirchner described the n-back task in 1958, in a study of age differences in short-term retention of rapidly changing information; he reported that older participants found the task harder than younger ones."
        }
      },
      {
        "@type": "Question",
        "name": "What cognitive faculty does N-Back primarily assess?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "N-back is mainly used to study working memory updating: keeping track of the last few items while new ones keep arriving and old ones drop out."
        }
      },
      {
        "@type": "Question",
        "name": "How does N-Back differ from simple digit span or short-term memory tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple span tests measure passive short-term storage (holding items statically until recall). N-Back requires active manipulation and updating: with every new stimulus, the oldest item must be dropped and the newest appended while maintaining serial order."
        }
      },
      {
        "@type": "Question",
        "name": "Can N-Back training improve fluid intelligence (IQ)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jaeggi et al. (2008) reported that adaptive N-back training improved fluid intelligence on non-verbal reasoning tasks, but later meta-analyses (for example Melby-Lervåg and Hulme, 2013) found little evidence that working memory training transfers to reasoning. Treat N-back as practice for the task itself, and do not expect an IQ gain."
        }
      },
      {
        "@type": "Question",
        "name": "How is this n-back game scored and levelled?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Each correct MATCH or NO MATCH answer scores 150 points; every 8 correct answers (1,200 points) raises the level by one (3-back, then 4-back, 5-back...) and shortens the letter window by 0.1 s, from 2.0 s down to 1.2 s. A wrong answer or no answer in time scores nothing; nothing is deducted. The 45-second clock pauses while the first n letters are shown for memorizing. There is no population norm, because SkillDrills collects no user data."
        }
      },
      {
        "@type": "Question",
        "name": "Is this dual n-back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This is single n-back: one stream of letters on screen. Dual n-back presents two streams at once (typically grid positions and spoken letters) and asks for a match decision on each; this drill does not include a dual mode."
        }
      },
      {
        "@type": "Question",
        "name": "How does sub-vocal articulatory rehearsal assist in N-Back performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sub-vocalization recruits the phonological loop (Baddeley, 1986). Mentally repeating the last n letters like a sliding queue (e.g., 'C-K-M' becoming 'K-M-R') helps keep them available for the next comparison."
        }
      },
      {
        "@type": "Question",
        "name": "Why does performance decline significantly at 4-Back and 5-Back?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cowan (2001) argued that working memory holds only about 4 items without grouping. At 4-back and 5-back you must keep that many letters in order while updating them, and the letter window is also shorter, so errors rise quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Will n-back training improve real-world performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not reliably. You will get better at n-back with practice, but meta-analyses of working memory training generally find that gains transfer poorly to untrained tasks such as reading, work or gaming. Treat it as practice and a challenge, not a guaranteed improvement."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train Working Memory Updating with N-Back",
    "description": "Four steps for keeping track of the last n letters and answering MATCH or NO MATCH.",
    "step": [
      {
        "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/memory/working-memory/n-back#step-1",
        
        "name": "Sub-Vocalize the Target Window as a Sliding Queue",
        "text": "Mentally recite the active N-letter sequence in forward chronological order. Keep an internal sliding buffer (e.g., holding 'A-T-M' at 3-back)."
      },
      {
        "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/memory/working-memory/n-back#step-2",
        
        "name": "Compare Current Stimulus to the Nth Prior Item",
        "text": "When a new stimulus appears, immediately match it against the oldest item in your active buffer (the item presented exactly N steps ago)."
      },
      {
        "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/memory/working-memory/n-back#step-3",
        
        "name": "Eject the Oldest Item and Append the Newest Item",
        "text": "Execute an immediate mental update: discard the oldest verified item from focal memory and append the current item to the front of your mental queue."
      },
      {
        "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/memory/working-memory/n-back#step-4",
        
        "name": "Maintain Consistent Attentional Rhythm Without Lapsing",
        "text": "Answer every letter with the MATCH or NO MATCH button before its window ends (2.0 s at first, down to 1.2 s). If you miss one, move on; dwelling on a mistake makes you lose the next letters too."
      }
    ]
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "N-Back Test – Working Memory Training Game",
    "url": "https://skilldrills.online/drills/memory/working-memory/n-back",
    "description": "Single n-back letter game starting at 3-back, with one level added every 8 correct answers and a response window that shrinks from 2.0 to 1.2 seconds.",
    "dateModified": "2026-11-12",
    "gamePlatform": "Web Browser",
    "genre": ["Cognitive Training", "Working Memory", "N-Back Test", "Brain Training"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
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

      <NBackClient
        copy={{
          h1Keyword: "N-Back Test",
          h1Suffix: " – Free Working Memory Training Game",
        }}
      />

      <DrillGuide
        lead={[
          "An N-back test shows a stream of letters and asks whether the current letter matches the one shown n steps earlier. In this free online version you start at 3-back, move up one level every 8 correct answers, and each letter's response window shrinks from 2.0 to 1.2 seconds as you level up, so it exercises working-memory updating, not just storage.",
          "Unlike passive span tests that measure raw storage capacity, the N-Back task requires participants to continuously update a dynamic mental buffer. As letters appear in rapid succession, users must decide whether the current letter matches the one presented exactly N steps earlier (starting at 3-back, progressing to 4-back and beyond), constantly dropping old letters and adding new ones. About a third of letters are matches. This is single n-back with letters only, answered with on-screen buttons; there is no dual mode and no keyboard control.",
          "How the game works: a run lasts 45 seconds, and the clock pauses while the first n letters are shown for memorizing. Each correct answer scores 150 points; a wrong answer or a timeout scores nothing and nothing is deducted. Response speed is not measured or scored, beyond answering inside the window.",
          "Data transparency: SkillDrills collects no aggregate data. Your scores and settings live only in your browser's localStorage and are never uploaded, so this site publishes no user averages, percentiles or player counts. Every figure quoted here comes from the published work in the References panel below.",
          "This drill is a free browser game for practice and interest. It is not a medical device, a diagnostic instrument, or a screening or treatment tool for any condition, and no score here says anything about your health. If you have concerns about your memory or thinking, speak to a qualified clinician."
        ]}
        metrics={[
          {
            label: "Peak N-Back Level",
            desc: "Highest n-back level reached: 3-back at the start, 4-back after 8 correct answers, 5-back after 16, and so on."
          },
          {
            label: "Total Drill Score",
            desc: "Cumulative points (+150 per correct MATCH or NO MATCH answer over the 45-second run; nothing is deducted). The clock pauses while the first n letters are shown for memorizing."
          },
          {
            label: "Target Judgment Accuracy",
            desc: "Percentage of correct MATCH / NO MATCH answers out of all answers, with timeouts counted as errors."
          },
        ]}
        benchmarks={[
          {
            tier: "SkillDrills Practice Band 1",
            range: "3-Back, 0 – 1,050 Points",
            desc: "0 – 7 correct answers. Still at the starting level; letter window 2.0 s."
          },
          {
            tier: "SkillDrills Practice Band 2",
            range: "4-Back, 1,200 – 2,250 Points",
            desc: "8 – 15 correct answers. Reached 4-back; letter window 1.9 s."
          },
          {
            tier: "SkillDrills Practice Band 3",
            range: "5-Back or Higher, 2,400+ Points",
            desc: "16+ correct answers. Reached 5-back; letter window 1.8 s or shorter. Practice bands come from the scoring code (150 points per correct answer, one level per 8 correct); they are not population norms, because SkillDrills collects no user data."
          }
        ]}
        science={[
          {
            title: "Wayne K. Kirchner (1958): Origins of the N-Back Paradigm",
            body: "Kirchner introduced the n-back task in a 1958 study of age differences in short-term retention of rapidly changing information, reporting that older participants found keeping up with the changing items harder."
          },
          {
            title: "Alan Baddeley (1986, 2000): Central Executive Control",
            body: "In Baddeley's multicomponent model, tasks like n-back are often described as drawing on the central executive, which controls attention and updating, together with the phonological loop used to rehearse the letters."
          },
          {
            title: "Adele Diamond (2013): Executive Functions Triad",
            body: "Diamond's review describes working memory, inhibitory control and cognitive flexibility as core executive functions. N-back mainly exercises working memory updating, and resisting 'lure' letters that match a nearer position also calls on inhibition."
          },
          {
            title: "Jaeggi et al. (2008) and Later Meta-Analyses: The Transfer Debate",
            body: "Jaeggi and colleagues (2008) reported that training on adaptive dual n-back was followed by gains on a fluid-reasoning test. Later meta-analyses (for example Melby-Lervåg and Hulme, 2013) found little reliable evidence that working memory training transfers to reasoning or IQ, so improvement on this game should not be expected to raise intelligence."
          },
          {
            title: "Nelson Cowan (2001): About Four Items",
            body: "Cowan argued that the focus of attention holds roughly 4 items when grouping is prevented. That helps explain why moving from 3-back to 4-back feels like a big jump."
          },
        ]}
        protocols={[
          {
            title: "Sliding Queue Sub-Vocalization (Baddeley 1986)",
            body: "Maintain a rolling 3-letter verbal loop in your head. When a new letter arrives, check it against the first letter of your loop, then drop that first letter and add the new one to the end (e.g., 'B-M-T' becomes 'M-T-R'). Practice rhythmic internal repetition."
          },
          {
            title: "Inhibitory Gating Against Familiarity Lures (Diamond 2013)",
            body: "Watch out for 'lures'—letters that match the item from 1 step or 2 steps ago rather than 3 steps ago. Familiarity produces an impulse to press MATCH. Check the exact position before answering."
          },
          {
            title: "Verbal Loop Plus Visual Slots",
            body: "Complement your subvocal loop by visualizing three horizontal slots in front of you. Shift each letter one slot to the left as new letters appear. Some players find that combining the spoken loop with a visual picture of the slots helps."
          },
          {
            title: "Paced Attentional Reset",
            body: "If you lose track of the sequence, do not panic or try to reconstruct the past from memory. Immediately treat the next incoming letter as step 1 and rebuild your 3-item buffer afresh over the next two stimuli."
          }
        ]}
        // Works named in this page's copy, with DOIs so a reader or an answer
        // engine can check the figures rather than take them on trust.
        sources={pickSources('baddeley1974', 'baddeley1986', 'cowan2001')}
        faqs={faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text }))}
        related={[
          {
            href: "/drills/memory/spatial-memory/path-tracing",
            title: "Path Tracing Memory Test",
            desc: "Retrace dynamic spatial routes and train the Inner Scribe on progressive matrix grids."
          },
          {
            href: "/drills/memory/spatial-memory/grid-memorization",
            title: "Visual Memory Test",
            desc: "Memorize static 2D checkerboard patterns and assess visual cache capacity."
          },
          {
            href: "/drills/memory/spatial-memory/object-location",
            title: "Object Location Memory Test",
            desc: "Test spatial relational binding and object placement across multi-quadrant maps."
          },
          {
            href: "/drills/memory/short-term-memory/digit-span",
            title: "Digit Span Memory Test",
            desc: "Evaluate forward numerical memory capacity and phonological loop rehearsal."
          },
          {
            href: "/drills/memory/short-term-memory/word-recall",
            title: "Verbal Memory Test",
            desc: "Measure immediate verbal recall and semantic clustering under time constraints."
          },
          {
            href: "/drills/memory/short-term-memory/color-sequence",
            title: "Color Memory Game",
            desc: "Recall progressive sequences of flashing colors under escalating speeds."
          }
        ]}
      />
    </>
  );
}
