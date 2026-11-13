import DividedAttentionClient from './DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Divided Attention Test Online | Dual Task | SkillDrills",
  description: "Free divided attention test online: tap pop-up targets while flagging even digits in a dual-task focus drill. Non-clinical practice.",
  keywords: ["divided attention test online", "dual task test", "dual task training", "multitasking test", "split attention test", "divided attention task", "dual visual tracking test", "simultaneous processing test", "attention sharing test", "cognitive multitasking drill"],
  openGraph: {
    title: "Divided Attention Test Online | Dual Task | SkillDrills",
    description: "Free divided attention test online: tap pop-up targets while flagging even digits in a dual-task focus drill. Non-clinical practice.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Divided Attention Test Online | Dual Task | SkillDrills",
    description: "Free divided attention test online: tap pop-up targets while flagging even digits in a dual-task focus drill. Non-clinical practice.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://skilldrills.online"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Drills Hub",
      "item": "https://skilldrills.online/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cognitive Drills",
      "item": "https://skilldrills.online/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Divided Attention Test",
      "item": "https://skilldrills.online/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "Divided Attention Test — Dual-Task Split Focus Drill",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free divided attention test online. Tap blue targets that pop up on the field while pressing MATCH on even digits in a side stream, in this split-focus drill.",
  "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "en-US",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Divided Attention Test",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention",
  "inLanguage": "en-US",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Divided Attention Test – Dual-Stream Focus & Tracking Game",
  "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention",
  "description": "Free divided attention test online. Tap blue targets that pop up on the field while pressing MATCH on even digits in a side stream, in this split-focus drill.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is divided attention and what does this test measure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Divided attention is handling two streams of information at once. In this drill you tap blue targets that pop up at random spots on the field while watching a digit stream and pressing MATCH only for even digits. The result is a score, a peak level and a dual accuracy figure for the run; it is practice, not a clinical assessment."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Psychological Refractory Period (PRP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The psychological refractory period (Pashler, 1994) is the delay seen when a second stimulus needs a decision shortly after a first: the second response tends to slow down. Here a target and a new digit often arrive close together, which is why the drill gets harder as the pace rises."
      }
    },
    {
      "@type": "Question",
      "name": "What does Wickens' Multiple Resources Theory tell us about divided attention?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Christopher Wickens (2002) proposed that two tasks interfere less when they use different resources, for example vision and hearing. Both streams in this drill are visual, so they compete for the same resources by design."
      }
    },
    {
      "@type": "Question",
      "name": "Can you actually improve divided attention or multitasking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Possibly. Spelke, Hirst & Neisser (1976) reported that two participants trained over many weeks could perform two tasks together with far less interference. That was a small laboratory study, so treat it as evidence that practice can reduce dual-task cost, not a guarantee for this drill."
      }
    },
    {
      "@type": "Question",
      "name": "How does the clock work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The run starts with 45 seconds. Each clean hit, on a target or on an even digit, adds 2 seconds, up to a maximum of 60. A wrong MATCH (odd digit or a second press on the same digit), an even digit you let pass, or a target that expires costs 1 second and resets your combo. The run ends when the clock reaches zero."
      }
    },
    {
      "@type": "Question",
      "name": "How are the score and grade calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each clean hit is worth 100 points times your combo multiplier and a level bonus. The level rises with your score, and higher levels show targets and digits for less time and make targets smaller. The end-screen grade compares your score with a SkillDrills reference score of 24,000 points; it is a practice band, not a population norm."
      }
    },
    {
      "@type": "Question",
      "name": "Which controls does the drill use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click or tap the blue targets on the field, and click or tap the MATCH button for even digits. The number channel uses the on-screen button, not a keyboard key. Escape exits the run."
      }
    },
    {
      "@type": "Question",
      "name": "Does monitor refresh rate influence dual-task scores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Targets do not move, and the drill does not score reaction time in milliseconds, so refresh rate is not a major factor. A steady frame rate still helps; close heavy background tabs if the display stutters."
      }
    },
    {
      "@type": "Question",
      "name": "What is a reasonable practice routine?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A few runs in one sitting, a few times a week, is enough to see whether your score and accuracy trend upward. Gains in this drill do not guarantee better multitasking elsewhere."
      }
    },
    {
      "@type": "Question",
      "name": "Is this divided attention test free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this test 100% free with no registration, downloads, or payment required."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Divided Attention Test",
  "description": "Free divided attention test online. Tap blue targets that pop up on the field while pressing MATCH on even digits in a side stream, in this split-focus drill.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Initiate the Dual Stream",
      "text": "Click Start Drill to open the target field and the number panel. The clock starts at 45 seconds.",
      "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Tap the Visual Targets",
      "text": "Watch the field for blue target circles and tap each before it expires. Each clean hit adds 2 seconds to the clock, up to 60 seconds.",
      "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Classify the Numerical Stream Simultaneously",
      "text": "Simultaneously scan the right panel; when an EVEN number appears, tap the MATCH button immediately and ignore odd numbers.",
      "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Maintain Dual Channel Accuracy",
      "text": "Clean hits on either channel build your combo multiplier. A wrong MATCH, a missed even digit or an expired target costs 1 second and resets the combo.",
      "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "Divided Attention Test",
    paragraphs: [
      "Free divided attention test online. Tap blue targets that pop up on the field while pressing MATCH on even digits in a side stream, in this split-focus drill.",
      "Dual-task research describes a psychological refractory period (Pashler, 1994): when two decisions arrive close together, the second response is delayed. This drill is non-clinical practice of that situation, not a diagnostic test.",
      "Multiple resource theory (Wickens, 2002) predicts less interference when two tasks draw on different resources, such as vision and hearing. Both channels in this drill are visual, so expect them to compete; that competition is the point of the exercise.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills Practice Bands',
    note: 'Bands come from the end-screen grade formula (score compared with a 24,000-point SkillDrills reference score). They are practice markers, not population statistics or percentiles.',
    headers: ['Grade', 'Label', 'Score'],
    rows: [
      ['S+', 'Legendary', '21,660+'],
      ['S', 'Elite', '17,340-21,659'],
      ['A', 'Excellent', '13,500-17,339'],
      ['B', 'Great', '8,640-13,499'],
      ['C', 'Good', '4,860-8,639'],
      ['D', 'Keep Going', '2,160-4,859'],
      ['F', 'Needs Practice', 'Under 2,160'],
    ],
  },
  protocols: {
    title: 'How to Play',
    description: 'The four steps of a Divided Attention run.',
    items: [
      { title: "Initiate the Dual Stream", description: "Click Start Drill to open the target field and the number panel. The clock starts at 45 seconds." },
      { title: "Tap the Visual Targets", description: "Watch the field for blue target circles and tap each before it expires. Each clean hit adds 2 seconds to the clock, up to 60 seconds." },
      { title: "Classify the Numerical Stream Simultaneously", description: "Simultaneously scan the right panel; when an EVEN number appears, tap the MATCH button immediately and ignore odd numbers." },
      { title: "Maintain Dual Channel Accuracy", description: "Clean hits on either channel build your combo multiplier. A wrong MATCH, a missed even digit or an expired target costs 1 second and resets the combo." },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <DividedAttentionClient copy={{ title: "Divided Attention Test", subtitle: "Tap pop-up targets while flagging even digits in a dual-task focus challenge" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
