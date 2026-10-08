import ReactionTimeTestWrapper from './ReactionTimeTestWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const TITLE = 'Stop the Timer Game: Time Estimation Drill | SkillDrills';
const DESCRIPTION = 'Stop the timer game: a target time flashes, then you click when it has elapsed. A time-estimation drill, not a reaction test. See the Light Reaction Test.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'stop the timer game', 'stop the clock game', 'time estimation game',
    'timing game', 'time estimation test', 'internal clock test',
    'time perception game', 'click on time game', '10 second challenge',
    'timing accuracy game', 'timing practice'
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
    { "@type": "ListItem", "position": 4, "name": "Stop the Timer Game", "item": "https://skilldrills.online/drills/reaction-speed/reaction-time-test" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": TITLE,
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
  "teaches": "Time estimation, interval timing, click timing consistency"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Play the Stop the Timer Game",
  "description": "Memorize a target time, click when you judge it has elapsed and read your error in milliseconds.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Launch the Drill",
      "text": "Click or tap Start Drill to enter the fullscreen timing arena.",
      "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Memorize the Target Time",
      "text": "Read the target time shown on screen, between one and eight seconds. It disappears after a short moment.",
      "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Click When the Time Has Passed",
      "text": "Click your mouse or tap your touchscreen when you judge that the target time has elapsed. There is no numeric readout while the clock runs.",
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
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Time_perception"],
  "name": "Stop the Timer Game",
  "alternateName": ["Time Estimation Drill", "Stop the Clock Game"],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Stop the Timer Game: Time Estimation Drill",
  "url": "https://skilldrills.online/drills/reaction-speed/reaction-time-test",
  "description": DESCRIPTION,
  "genre": ["Timing Game", "Casual"],
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
      "name": "Is this a reaction time test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. This is a time-estimation game. A target time is shown, you click when you judge that time has elapsed, and the drill reports your timing error in milliseconds. To measure how fast you react to a signal, use the Light Reaction Test."
      }
    },
    {
      "@type": "Question",
      "name": "How does the stop the timer game work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A target time appears for a moment and then disappears. A glowing orb with no numeric readout runs while the clock counts in the background, and you click when you think the target time has passed. The drill then shows the exact time you clicked and your error."
      }
    },
    {
      "@type": "Question",
      "name": "How long are the target times?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Targets start between 1 and roughly 2 seconds, and the upper limit rises with your level up to a maximum of 8 seconds. The target is shown with three decimals, for example 3.250s."
      }
    },
    {
      "@type": "Question",
      "name": "How is the score calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your error is your click time minus the target time. A click counts as a hit when the error is within 50 ms plus 5% of the target, so a 3-second target allows 200 ms. Closer clicks earn more points, an error under 10 ms is rated EXACT, and consecutive hits raise a combo multiplier up to 3.0x."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I click too early or too late?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both count as error. A click outside the allowed window is a miss: it resets your combo and flashes a red alert, but your score is kept."
      }
    },
    {
      "@type": "Question",
      "name": "Can I count in my head?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, counting is your own strategy. The orb has no numeric readout, and its rings pulse once per second, which you can use as a beat. Try different methods and keep the one that gives the smallest average error."
      }
    },
    {
      "@type": "Question",
      "name": "Does refresh rate or input lag affect the result?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Slightly. Clicks are timestamped with the browser's performance.now() clock, but your display shows a new frame every 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.2 ms at 240 Hz, and input devices add polling delay (Woods et al., 2015). Compare scores on the same device."
      }
    },
    {
      "@type": "Question",
      "name": "Can practice improve my timing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practice usually improves performance on the task you practise, so your average error on this drill is likely to shrink. How far that carries over to other tasks varies and is not guaranteed."
      }
    },
    {
      "@type": "Question",
      "name": "Is this the same as the 10 second challenge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a similar idea, judging an interval without a visible clock, but the target changes every round and is not fixed at 10 seconds. It also scores the size of your error rather than a single pass or fail."
      }
    },
    {
      "@type": "Question",
      "name": "Is it free, and does it work on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, it is free with no sign-up or download. It runs in a mobile browser, but touch input adds its own latency, so compare scores only against other attempts on the same device."
      }
    }
  ]
};

const reactionGuide = {
  heading: "Stop the Timer Game: How the Time-Estimation Drill Works",
  intro: [
    "This is a time-estimation game, not a reaction time test. A target time between one and eight seconds is shown briefly, it disappears, and you click when you judge that the time has passed. The drill reports the gap between your click and the target in milliseconds. To test how fast you react to a visual signal, use the Light Reaction Test instead.",
    "Every click is timestamped with the browser's performance.now() clock, entirely on your device. Your display quantizes what you see to its refresh interval: about 16.7 ms per frame at 60 Hz, 6.9 ms at 144 Hz and 4.2 ms at 240 Hz (Woods et al., 2015). Mouse polling adds roughly 8 ms at 125 Hz versus 1 ms at 1000 Hz.",
    "Treat differences smaller than about 5 ms as measurement noise, and compare your own runs on the same hardware rather than against someone else's setup. This is a practice tool, not a clinical measurement."
  ],
  benchmarks: {
    title: "How Timing Error Is Rated",
    headers: ["Rating", "Allowed error", "Example at a 3.000s target"],
    rows: [
      ["EXACT", "Up to 10 ms", "Click between 2.990s and 3.010s"],
      ["PERFECT", "Up to 20% of the hit window", "Within 40 ms"],
      ["EXCELLENT", "Up to 40% of the hit window", "Within 80 ms"],
      ["GOOD", "Up to 60% of the hit window", "Within 120 ms"],
      ["OK", "Up to 80% of the hit window", "Within 160 ms"],
      ["HIT", "Up to the full hit window", "Within 200 ms"]
    ],
    note: "The hit window is 50 ms plus 5% of the target time, so longer targets are more forgiving in absolute terms. These are this drill's scoring rules, not population norms."
  },
  techniques: {
    title: "Ways to Judge a Short Interval",
    items: [
      {
        name: "Count at a steady pace",
        desc: "Counting subdivisions silently gives you a repeatable internal beat. Different counting speeds suit different targets.",
        tips: "Pick one counting speed and keep it for a whole session so your errors are comparable."
      },
      {
        name: "Use the one-second pulse",
        desc: "The rings around the orb pulse once per second. Treating each pulse as a tick lets you add whole seconds and estimate only the remainder.",
        tips: "Target times with decimals, such as 3.250s, mean the last click falls between pulses."
      },
      {
        name: "Review the signed error",
        desc: "After each click the drill shows when you clicked. If you are consistently early or late, shift your internal count accordingly.",
        tips: "A steady small bias is easier to fix than a large random spread."
      }
    ]
  },
  steps: [
    "Press Start Drill to enter the fullscreen timing arena.",
    "Read the target time shown on screen before it disappears.",
    "Click your mouse or tap your touch screen when you judge that the target time has elapsed.",
    "Complete multiple rounds and compare your average timing error and consistency."
  ],
  audience: "Gamers, musicians, athletes and anyone practising steady trigger timing and a better feel for short intervals.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('woods2015'),
  related: [
    { href: "/drills/visual/reaction-speed/light-reaction", label: "Reaction Time Test (Light Reaction Test)" },
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
      <ReactionTimeTestWrapper copy={{ title: 'Stop the Timer Game', subtitle: 'Time-estimation drill: memorize the target time, click when it elapses and review your timing error in milliseconds' }} />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
