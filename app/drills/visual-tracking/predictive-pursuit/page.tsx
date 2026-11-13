import PredictivePursuitClient from './PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Predictive Eye Tracking Drill – Pursuit | SkillDrills",
  description: "Free browser drill: the target glides to a new point every few seconds and stops. Anticipate where it lands and follow it with the pointer. No sign-up.",
  keywords: [
    "predictive eye tracking drill",
    "predictive pursuit",
    "predictive smooth pursuit",
    "trajectory anticipation drill",
    "anticipatory eye tracking",
    "predictive gaze shifts",
    "motion prediction eye exercise",
    "visual anticipation training",
    "predictive tracking test",
    "esports lead aim practice"
  ],
  alternates: {
    canonical: "https://skilldrills.online/drills/visual-tracking/predictive-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/predictive-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Predictive Eye Tracking Drill – Pursuit | SkillDrills",
    description: "Free browser drill: the target glides to a new point every few seconds and stops. Anticipate where it lands and follow it with the pointer. No sign-up.",
    url: "https://skilldrills.online/drills/visual-tracking/predictive-pursuit",
    siteName: 'SkillDrills',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Predictive Eye Tracking Drill – Pursuit | SkillDrills",
    description: "Free browser drill: the target glides to a new point every few seconds and stops. Anticipate where it lands and follow it with the pointer. No sign-up.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Visual Tracking",
      "item": "https://skilldrills.online/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Predictive Pursuit",
      "item": "https://skilldrills.online/drills/visual-tracking/predictive-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Predictive Pursuit Gaze Training",
  "operatingSystem": "Web Browser",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Browser practice task: anticipate where a gliding target will stop and follow it; reports pointer-to-target distance, not eye movement."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Predictive Pursuit Drill",
  "url": "https://skilldrills.online/drills/visual-tracking/predictive-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "All modern browsers",
  "browserRequirements": "Requires JavaScript and HTML5 Canvas support"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Predictive Pursuit",
  "description": "Visual tracking exercise: follow a target that glides to a new point every few seconds and anticipate where it stops.",
  "genre": ["Visual Training", "Predictive Tracking", "Reflex Training"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Web Browser"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Practise Trajectory Anticipation with Predictive Pursuit",
  "description": "Steps to practise anticipating where a moving target will stop.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Set Up the Session",
      "text": "Sit about 50-70 cm from the screen. Choose a duration (30-120 s) and speed; start at 1.0x with the destination line visible."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Read the Start of Each Glide",
      "text": "About every 2.2 seconds at 1.0x, the target picks a new point and starts gliding toward it. Use the first part of the movement to judge its direction."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Look Ahead to the Landing Point",
      "text": "The target slows as it nears the new point and then stops. Move your eyes and the pointer toward where you expect it to stop, then hold on it until the next glide."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Review the End Screen and Adjust",
      "text": "The end screen shows time on target and mean and RMS pointer distance. Repeat at the same settings, then raise speed or turn on Hide Line one change at a time."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the Predictive Pursuit drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A free browser drill in which a target glides to a new random point every few seconds, slows down and stops. You anticipate where it will land and follow it with your eyes and the pointer."
      }
    },
    {
      "@type": "Question",
      "name": "How often does the target move, and does it ever disappear?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At 1.0x a new destination is chosen about every 2.2 seconds; higher speeds shorten the cycle and Random Speed varies it. The target is always visible: it never hides or vanishes."
      }
    },
    {
      "@type": "Question",
      "name": "What does Hide Line do?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "By default a faint line runs from the target to its next destination. Hide Line removes it, so you have to judge the landing point from the direction and speed of the glide alone."
      }
    },
    {
      "@type": "Question",
      "name": "What does the end screen measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It reports time on target (share of time the pointer was inside the target radius) and the mean and RMS distance from the pointer to the target centre, time-weighted. It measures the pointer, not your eyes."
      }
    },
    {
      "@type": "Question",
      "name": "Does the drill track my eye movements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The browser cannot see where you look. Following with the pointer gives a rough, repeatable record, but it is not an eye-tracking or vision test."
      }
    },
    {
      "@type": "Question",
      "name": "How should I read the practice bands?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "They are SkillDrills practice suggestions based on time on target, not norms or percentiles. Use them to decide when to keep the same settings and when to make the drill harder."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my time on target drop during each glide?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The target moves fastest at the start of a glide, so the pointer usually trails it until it slows near the landing point. Looking ahead to the landing point helps the pointer arrive sooner."
      }
    },
    {
      "@type": "Question",
      "name": "Does my screen affect the results?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Refresh rate, display latency, screen size and input device all change how the motion looks and how the pointer responds (Woods et al., 2015). Compare sessions on the same setup and settings."
      }
    },
    {
      "@type": "Question",
      "name": "Is this predictive eye tracking tool free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this training tool 100% free directly in your web browser with zero subscriptions or downloads required."
      }
    },
    {
      "@type": "Question",
      "name": "How long should a session be?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A few 60-second sessions with breaks is a comfortable start. Stop if your eyes feel tired, dry or sore, or if you feel dizzy or get a headache."
      }
    }
  ]
};

const guide = {
  heading: "Predictive Pursuit - Ocular Motor Training Standards",
  intro: [
    "Predictive Pursuit is a free browser drill that practises anticipating motion. Every few seconds the target glides to a new point and slows to a stop, so you look ahead to where it will land; Hide Line removes the destination line. Pick a speed and duration, press start, and follow the target with your eyes and the pointer; the end screen reports pointer-to-target distance.",
    "Each cycle has two parts: a glide that starts fast and eases off as the target nears its new point, and a pause where it sits still until the next destination is chosen. At 1.0x a cycle lasts about 2.2 seconds; higher speeds shorten it and Random Speed varies it between cycles.",
    "With the line visible you can see the destination before the target gets there. With Hide Line on, only the direction and speed of the start of the glide tell you where it will stop. Eyes can move ahead of a target whose motion is expected (Kowler, 1989); this drill gives you a simple, repeatable way to practise that.",
    "The browser does not record eye position. If you follow with the pointer, the end screen shows time on target and the mean and RMS pointer distance from the target centre, weighted by time. Treat these as a practice record for comparing sessions on the same screen and settings, not as an eye test."
  ],
  benchmarks: {
    title: "SkillDrills Practice Bands (Time on Target)",
    headers: ["Practice Band", "Time on Target", "What to Try Next"],
    rows: [
      ["Settling in", "< 40%", "Keep speed at 1.0x or lower and repeat until the pointer stays near the target."],
      ["Holding", "40% – 70%", "Keep the same settings for a few sessions so results stay comparable."],
      ["Steady", "> 70%", "Raise speed by 0.5x or turn on Hide Line, then repeat."]
    ],
    note: "※ SkillDrills practice bands, not norms or percentiles. Time on target is the share of time the pointer is inside the target radius; it depends on target size, speed, screen and input device, and does not measure eye movement."
  },
  techniques: {
    title: "Four Techniques for Anticipating the Landing Point",
    items: [
      {
        name: "Read the First Part of the Glide",
        desc: "The direction of the first part of each glide is the best clue to the landing point, especially with Hide Line on.",
        tips: "Watch which way the target sets off before trying to follow it closely."
      },
      {
        name: "Look Ahead, Then Wait",
        desc: "Move your eyes toward where the glide is heading instead of chasing the target from behind, then hold steady while it slows and stops.",
        tips: "Aim to arrive at the landing point a little before the target does."
      },
      {
        name: "Use the Pause",
        desc: "Between glides the target sits still. Keep the pointer on it and relax your gaze so you are ready for the next cycle.",
        tips: "A steady pointer during the pause raises time on target without extra effort."
      },
      {
        name: "Change One Setting at a Time",
        desc: "Raise speed, turn on Hide Line or enable Random Speed separately, so a change in time on target can be traced to one setting.",
        tips: "Repeat a setting for a few sessions before making it harder."
      }
    ]
  },
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('kowler1989', 'woods2015'),
  related: [
    { href: "/drills/visual-tracking/constant-slow-pursuit", label: "Smooth Pursuit Eye Exercise (Constant Slow)" },
    { href: "/drills/visual-tracking/directional-chaos-pursuit", label: "Directional Chaos Pursuit (Erratic Motion)" },
    { href: "/drills/visual-tracking/dynamic-evasion-pursuit", label: "Dynamic Evasion Pursuit (Reactive Tracking)" },
    { href: "/drills/visual-tracking/ghosting-suppress-pursuit", label: "Ghosting Suppress Pursuit (Fixation Stability)" },
    { href: "/drills/visual-tracking/infinity-pursuit", label: "Figure-8 Eye Tracking Exercise (Infinity)" },
    { href: "/drills/visual-tracking/momentum-teleport-pursuit", label: "Teleport Gaze Tracking Drill (Momentum)" }
  ]
};

export default function PredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{ title: "Predictive Pursuit", subtitle: "Predictive eye tracking drill: anticipate where a gliding target will stop" }} />
      <DrillGuide guide={guide} />
      <DrillFooter />
    </>
  );
}
