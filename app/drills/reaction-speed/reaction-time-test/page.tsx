import ReactionTimeTestWrapper from './ReactionTimeTestWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const TITLE = 'Reaction Time Test: Millisecond Timing Drill | SkillDrills';
const DESCRIPTION = 'Free reaction timing test: a target time is shown, you click the instant it elapses and see your error in milliseconds. Includes reference ranges.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'reaction time test', 'reflex test', 'reaction test',
    'average reaction time', 'reaction speed test',
    'online reaction time test', 'click reaction test',
    'human benchmark reaction time', 'gaming reflex test',
    'how to improve reaction time', 'average reaction time in milliseconds',
    'test your reaction time online', 'reaction latency test'
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://skilldrills.online/drills/reaction-speed/reaction-time-test',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  // hreflang is emitted again now that ko and ja locale pages exist for this route.
  // getAlternateLanguages() is route-aware -- it consults ROUTE_LOCALES and so
  // lists only the locales that actually have a page.js, never the full six.
  // Keep this in step with the locale pages: hreflang must be reciprocal, and
  // the localized pages already point back here, so dropping it silently voids
  // the annotation on both sides.
  alternates: {
    canonical: 'https://skilldrills.online/drills/reaction-speed/reaction-time-test',
    languages: getAlternateLanguages('/drills/reaction-speed/reaction-time-test'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
    { "@type": "ListItem", "position": 2, "name": "Drills Hub", "item": "https://skilldrills.online/drills" },
    { "@type": "ListItem", "position": 3, "name": "Reaction Speed", "item": "https://skilldrills.online/drills/reaction-speed" },
    { "@type": "ListItem", "position": 4, "name": "Reaction Time Test", "item": "https://skilldrills.online/drills/reaction-speed/reaction-time-test" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Reaction Time Test: Millisecond Timing Drill | SkillDrills",
  "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test",
  "dateModified": "2026-10-08",
  "description": DESCRIPTION,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Reaction timing, interval estimation, response consistency"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Take the Reaction Time Test",
  "description": "Memorise a target time, click the moment it elapses and read your error in milliseconds.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Launch the Drill",
      "text": "Click or tap Start Drill to enter the fullscreen reaction test arena.",
      "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Memorize Target Interval",
      "text": "Observe the target millisecond duration displayed on screen before the timing sequence begins.",
      "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Click on Cue",
      "text": "Click your mouse or tap your touchscreen at the exact instant the target interval elapses.",
      "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Review Your Error",
      "text": "Complete multiple rounds and compare your average timing error and consistency.",
      "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Reaction Time Test",
  "alternateName": ["Reaction Timing Test", "Interval Timing Drill"],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Reaction Time Test: Millisecond Timing Drill",
  "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test",
  "description": DESCRIPTION,
  "genre": ["Reflex Game", "Action"],
  "gamePlatform": ["Web Browser", "Desktop"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is this a classic reaction time test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This drill shows a target time, you click when that time has elapsed, and it reports your timing error in milliseconds. For a stimulus-and-click reaction test, where you click as soon as the screen changes, use the Light Reaction Test."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good reaction time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple visual reaction time is commonly reported at about 200 to 250 ms for healthy adults (Kosinski, 2008), and auditory reaction time at about 140 to 160 ms (Jain et al., 2015). Browser tests usually read higher because of display and input latency."
      }
    },
    {
      "@type": "Question",
      "name": "How is reaction time measured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reaction time is the interval in milliseconds from a stimulus to a registered input, timestamped here with the browser's performance.now() clock. The measured value includes display refresh quantization and input polling delay as well as your own response (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Can you train your reaction time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practice usually improves performance on the task you practise. Some studies report that action video game players respond faster without losing accuracy (Dye, Green, & Bavelier, 2009); how far this carries to other tasks varies and is not guaranteed."
      }
    },
    {
      "@type": "Question",
      "name": "Why do reaction times vary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reaction times fluctuate with sleep, time of day, fatigue, age, attention, input hardware latency and display refresh rate."
      }
    },
    {
      "@type": "Question",
      "name": "Does monitor refresh rate affect reaction scores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A 60 Hz monitor shows a new frame every 16.7 ms, so a signal can appear up to one frame late. At 144 Hz a frame lasts about 6.9 ms and at 240 Hz about 4.2 ms, so higher refresh rates reduce this delay."
      }
    },
    {
      "@type": "Question",
      "name": "Is reaction the same as a reflex?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A reflex such as the knee-jerk reflex is an involuntary spinal response that does not need conscious processing. A reaction time involves perceiving a signal, deciding and making a voluntary movement, and takes much longer."
      }
    },
    {
      "@type": "Question",
      "name": "Why is auditory reaction time faster than visual reaction time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Studies comparing the two usually find faster responses to sounds than to lights, which is commonly attributed to faster sensory transduction for sound (Shelton & Kumar, 2010; Jain et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "How does age affect reaction time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simple reaction time is typically fastest in young adulthood and slows gradually with age (Der & Deary, 2006). Individual differences are large, so compare your own scores over time."
      }
    },
    {
      "@type": "Question",
      "name": "Does caffeine improve reaction speed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Some studies report that moderate caffeine improves alertness and reaction time (Smith, 2002). Effects differ between people and with dose, and too much can reduce steadiness."
      }
    },
    {
      "@type": "Question",
      "name": "How does this drill differ from Human Benchmark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Human Benchmark tests a simple wait-for-green click. This drill tests timing: you estimate a displayed interval and click when it elapses, which practises avoiding early clicks and keeping your trigger timing steady."
      }
    },
    {
      "@type": "Question",
      "name": "Is this reaction time test free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all drills on SkillDrills are free with no sign-up or download."
      }
    },
    {
      "@type": "Question",
      "name": "Does this test work on mobile devices?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It runs in a mobile browser, but touch input adds its own latency, so compare scores only against other attempts on the same device."
      }
    },
    {
      "@type": "Question",
      "name": "How often should I test my reaction speed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A few short rounds at the same time of day make scores easy to compare. Stop when attention drops, because fatigue slows responses."
      }
    }
  ]
};

const reactionGuide = {
  heading: "Reaction Time Test Guide & Timing Reference Ranges",
  intro: [
    "Reaction time is the interval between a stimulus and a response. This drill is a timing variant: it shows a target duration, you click when that duration has elapsed, and it reports the error in milliseconds. It practises steady trigger timing and avoiding early clicks. For a stimulus-and-click test, use the Light Reaction Test.",
    "Every event is timestamped with the browser's performance.now() clock, entirely on your device. Browser timers are coarsened by browsers as a security measure, and your display quantizes what you see to its refresh interval: about 16.7 ms per frame at 60 Hz, 6.9 ms at 144 Hz and 4.2 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz versus 1 ms at 1000 Hz.",
    "Treat differences smaller than about 5 ms as measurement noise, and compare your own runs on the same hardware rather than against someone else's setup. This is a practice tool, not a clinical measurement."
  ],
  benchmarks: {
    title: "Simple Visual Reaction Time Reference Ranges (ms)",
    headers: ["Reaction time", "Reading", "Notes"],
    rows: [
      ["Under 150 ms", "Unusually fast", "Often reflects anticipation or very low-latency equipment rather than a true response to the signal"],
      ["150 - 200 ms", "Fast", "Quicker than the commonly reported adult range"],
      ["200 - 250 ms", "Typical healthy adult", "Commonly reported range for simple visual reaction time (Kosinski, 2008)"],
      ["250 - 300 ms", "Slightly slower", "Common on 60 Hz displays and with higher input latency"],
      ["Over 300 ms", "Slow", "Can reflect fatigue, distraction or high display and input lag"]
    ],
    note: "Reference ranges come from the reaction-time literature (Kosinski, 2008; Woods et al., 2015). They describe simple stimulus-and-click tasks and are given for orientation only; this drill scores timing error rather than reaction time."
  },
  techniques: {
    title: "Sensory Latency & Measurement Limits",
    items: [
      {
        name: "Visual stimulus latency (about 200-250 ms)",
        desc: "A visual signal must be sensed, processed and turned into a movement. Studies report roughly 200 to 250 ms for simple visual reaction time in healthy adults (Kosinski, 2008).",
        tips: "Keep a relaxed gaze and avoid clicking early; anticipation produces misleadingly fast numbers."
      },
      {
        name: "Auditory stimulus latency (about 140-170 ms)",
        desc: "Responses to sounds are usually faster than responses to lights in comparison studies (Shelton & Kumar, 2010; Jain et al., 2015).",
        tips: "In games, sound cues can give an earlier warning than visual ones."
      },
      {
        name: "Display and hardware lag",
        desc: "A 60 Hz monitor can show a signal up to 16.7 ms late compared with about 4.2 ms at 240 Hz (Woods et al., 2015).",
        tips: "A high-refresh display and a 1000 Hz polling mouse reduce measurement overhead."
      }
    ]
  },
  steps: [
    "Press Start Drill to enter the fullscreen reaction arena.",
    "Observe and memorize the target interval displayed before the clock begins.",
    "Click your mouse or tap your touch screen at the exact moment the target interval elapses.",
    "Complete multiple rounds and compare your average timing error and consistency."
  ],
  audience: "Gamers, drivers, athletes and anyone practising steady trigger timing and consistent responses.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('kosinski2008', 'woods2015', 'jain2015', 'shelton2010', 'dye2009', 'der2006', 'smith2002'),
  related: [
    { href: "/drills/visual/reaction-speed/light-reaction", label: "Light Reaction Test" },
    { href: "/drills/reaction-speed/reflex-training-drill", label: "Reflex Training Drill" },
    { href: "/drills/reaction-speed/reaction-game", label: "Reaction Game" },
    { href: "/drills/reaction-speed/fps-tracking-trainer", label: "FPS Tracking Trainer" },
    { href: "/drills/motor/movement-speed/rapid-tapping", label: "CPS Test & Click Speed Test" }
  ]
};

export default function ReactionTimeTestPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
      <ReactionTimeTestWrapper copy={{ title: 'Reaction Time Test', subtitle: 'Millisecond timing drill: click the moment the target time elapses and review your error and consistency' }} />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
