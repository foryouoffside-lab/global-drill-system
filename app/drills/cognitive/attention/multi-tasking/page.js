import DualTargetFlowClient from './DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Multitasking Test Online | Dual Task Focus | SkillDrills",
  description: "Free multitasking test online: watch two lanes of moving shapes and tap only each lane's target shape in a dual-task focus drill.",
  keywords: ["multitasking test online", "dual task test", "divided attention test", "dual stream tracking", "task switching test", "cognitive flexibility test", "multitasking brain game", "parallel visual tracking", "executive function drill", "dual target training"],
  openGraph: {
    title: "Multitasking Test Online | Dual Task Focus | SkillDrills",
    description: "Free multitasking test online: watch two lanes of moving shapes and tap only each lane's target shape in a dual-task focus drill.",
    type: 'article',
    url: 'https://skilldrills.online/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Multitasking Test Online | Dual Task Focus | SkillDrills",
    description: "Free multitasking test online: watch two lanes of moving shapes and tap only each lane's target shape in a dual-task focus drill.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "Multitasking Test",
      "item": "https://skilldrills.online/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "Multitasking Test — Dual-Target Attention Drill",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free multitasking test online. Shapes flow outward through two lanes; tap the ones that match each lane's target shape while the pace rises and the targets change.",
  "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking",
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
  "name": "Multitasking Test",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking",
  "inLanguage": "en-US",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Multitasking Test – Dual-Stream Target Flow Game",
  "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking",
  "description": "Free multitasking test online. Shapes flow outward through two lanes; tap the ones that match each lane's target shape while the pace rises and the targets change.",
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
      "name": "What is the Multitasking Test (Dual-Target Flow)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a free dual-task drill. Shapes flow outward from the center through two lanes (left and right, or top and bottom on a portrait phone), and you tap only the shapes that match each lane's current target. It is practice, not a psychometric or job-aptitude test."
      }
    },
    {
      "@type": "Question",
      "name": "What is switch cost in task switching (Rogers & Monsell, 1995)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Switch cost is the loss of speed and accuracy when you change from one task rule to another instead of repeating the same one. In this drill the lane targets change every 20 seconds, and from level 3 the two lanes use different targets, so you keep updating what counts as a hit."
      }
    },
    {
      "@type": "Question",
      "name": "Are humans capable of true concurrent multitasking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For demanding tasks, research on dual-task interference suggests that decisions are largely handled one at a time, so a second decision waits for the first (Pashler, 1994). That bottleneck is what makes two fast lanes hard."
      }
    },
    {
      "@type": "Question",
      "name": "What did Ophir, Nass & Wagner (2009) discover about heavy media multitaskers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In their study, people who reported heavy media multitasking did worse on some filtering and task-switching measures than light multitaskers. The finding is correlational and has been debated since; it does not show that multitasking causes the difference."
      }
    },
    {
      "@type": "Question",
      "name": "How do the two lanes and targets work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each lane has its own target shape shown in the HUD. At first both lanes share the same target; from level 3 they get different ones. Both targets are re-drawn every 20 seconds. About a third of the shapes in each lane are targets."
      }
    },
    {
      "@type": "Question",
      "name": "How are the score, clock and grade calculated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The clock starts at 45 seconds. Each correct tap is worth 100 points times your combo multiplier and a level bonus, and adds 2 seconds up to a maximum of 60. Tapping a non-target or letting a target leave the screen costs 1 second and resets the combo. Accuracy is correct taps divided by correct taps plus mistakes. The grade compares your score with a SkillDrills reference score of 24,000 points; it is a practice band, not a population norm."
      }
    },
    {
      "@type": "Question",
      "name": "How does level progression work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your level rises continuously with your score. Higher levels make shapes move faster and spawn more often, and a long combo speeds things up a little more. There is no level cap; the run ends when the clock reaches zero."
      }
    },
    {
      "@type": "Question",
      "name": "Does input latency affect multitasking evaluation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A high-refresh monitor and low-latency mouse can make moving shapes easier to see, and display timing limits what a browser test can resolve (Woods et al., 2015). Neither is required; compare your own runs on one setup."
      }
    },
    {
      "@type": "Question",
      "name": "How long should a multitasking training session last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A few runs in one sitting is enough to see your score trend. Improvement in this drill does not guarantee better multitasking at work or school."
      }
    },
    {
      "@type": "Question",
      "name": "Is this multitasking test free to use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, SkillDrills provides this test completely free with no registration or downloads required."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Multitasking Test",
  "description": "Free multitasking test online. Shapes flow outward through two lanes; tap the ones that match each lane's target shape while the pace rises and the targets change.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Watch Both Lanes",
      "text": "Center your gaze between the two lanes so you can watch both at once.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Check the Lane Targets",
      "text": "Check the target shape for each lane in the HUD. Both targets change every 20 seconds.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Tap Matching Shapes",
      "text": "Tap or click shapes that match their own lane's target before they leave the screen. Each clean hit adds 2 seconds, up to 60.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Keep the Combo Going",
      "text": "Keep your combo going as the shapes speed up. Tapping a non-target or letting a target escape costs 1 second and resets the combo.",
      "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "Multitasking Test",
    paragraphs: [
      "Free multitasking test online. Shapes flow outward through two lanes; tap the ones that match each lane's target shape while the pace rises and the targets change.",
      "Switch cost is the measurable degradation in speed and accuracy that occurs when shifting between disparate cognitive task rules rather than repeating the same task.",
      "For demanding tasks, dual-task research suggests decisions are largely handled one at a time (Pashler, 1994). This drill lets you practise that situation.",
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
    description: 'The four steps of a Multitasking Test run.',
    items: [
      { title: "Watch Both Lanes", description: "Center your gaze between the two lanes so you can watch both at once." },
      { title: "Check the Lane Targets", description: "Check the target shape for each lane in the HUD. Both targets change every 20 seconds." },
      { title: "Tap Matching Shapes", description: "Tap or click shapes that match their own lane's target before they leave the screen. Each clean hit adds 2 seconds, up to 60." },
      { title: "Keep the Combo Going", description: "Keep your combo going as the shapes speed up. Tapping a non-target or letting a target escape costs 1 second and resets the combo." },
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
      <DualTargetFlowClient copy={{ title: "Multitasking Test", subtitle: "Track two visual streams and maintain accuracy during a dual-task focus challenge" }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
