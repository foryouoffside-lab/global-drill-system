import CognitiveHubClient from './CognitiveHubClient';
import { DRILLS } from '../../../lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');
const cognitiveDrillCount = cognitiveDrills.length;

export const metadata = {
  // GSC (180d): train your brain online (pos 70.5) and processing speed games
  // online (pos 87) both land here; neither phrase contained "online".
  title: 'Free Cognitive Training & Brain Games | SkillDrills',
  description: 'Free browser brain games for attention, concentration, choice reaction and processing speed: Stroop test, Schulte table, RSVP reading and more. No sign-up.',
  keywords: [
    'cognitive training online', 'free cognitive training', 'brain training games',
    'free brain games', 'attention training', 'concentration training',
    'focus training', 'attention span test', 'divided attention test',
    'selective attention test', 'processing speed test',
    'reaction time cognitive test', 'Stroop test online', 'Schulte table test',
    'cognitive flexibility training', 'executive function training',
    'mental agility games', 'browser brain training', 'no download brain games',
    'how to improve concentration',
  ],
  openGraph: {
    title: 'Free Cognitive Training & Brain Games | SkillDrills',
    description: 'Free browser brain games for attention, concentration, choice reaction and processing speed: Stroop test, Schulte table, RSVP reading and more. No sign-up.',
    type: 'website',
    url: 'https://skilldrills.online/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Free Cognitive Training Online - Brain Training Drills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Cognitive Training & Brain Games | SkillDrills',
    description: 'Free browser brain games for attention, concentration, choice reaction and processing speed: Stroop test, Schulte table, RSVP reading and more. No sign-up.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/cognitive',
    languages: getAlternateLanguages('/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
    { "@type": "ListItem", "position": 2, "name": "Cognitive Training", "item": "https://skilldrills.online/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "en-US",
  "dateModified": "2026-11-12",
  "name": "Free Cognitive Training & Brain Games",
  "url": "https://skilldrills.online/drills/cognitive",
  "description": `${cognitiveDrillCount} free browser drills for attention, concentration, choice reaction and processing speed. No sign-up required.`,
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "hasPart": [
    // Attention Training (3 Drills)
    { "@type": "WebApplication", "name": "Concentration Stamina - Sustained Attention Drill", "url": "https://skilldrills.online/drills/cognitive/attention/concentration-stamina" },
    { "@type": "WebApplication", "name": "Divided Attention Test - Dual-Task Focus Drill", "url": "https://skilldrills.online/drills/cognitive/attention/divided-attention" },
    { "@type": "WebApplication", "name": "Multitasking Test - Rapid Task Switching & Attention Allocation Drill", "url": "https://skilldrills.online/drills/cognitive/attention/multi-tasking" },
    // Focus & Concentration (2 Drills)
    { "@type": "WebApplication", "name": "Schulte Table Trainer - Visual Search Number Grid", "url": "https://skilldrills.online/drills/cognitive/focus/concentration-grid" },
    { "@type": "WebApplication", "name": "Distraction Fighter - Selective Attention & Stroop Inhibition Trainer", "url": "https://skilldrills.online/drills/cognitive/focus/distraction-fighter" },
    // Processing Speed (3 Drills)
    { "@type": "WebApplication", "name": "Choice Reaction Test - Rule-Switching Decision Drill", "url": "https://skilldrills.online/drills/cognitive/processing-speed/reaction-time" },
    { "@type": "WebApplication", "name": "RSVP Speed Reader - Rapid Serial Visual Presentation Reading Trainer", "url": "https://skilldrills.online/drills/cognitive/processing-speed/rsvp-reader" },
    { "@type": "WebApplication", "name": "SDMT-Style Symbol Digit Test - Symbol Matching Drill", "url": "https://skilldrills.online/drills/cognitive/processing-speed/symbol-matching" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en-US",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is cognitive training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cognitive training means practising structured mental tasks, such as keeping attention on a stream of items, ignoring a distracting cue, or matching symbols quickly. The drills on this page are short, timed browser games for attention, focus and processing speed."
      }
    },
    {
      "@type": "Question",
      "name": "Can cognitive drills improve processing speed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will usually get faster and more accurate at the specific drill you practise, because the task becomes familiar. Whether that speed carries over to other tasks is much less certain, so treat your scores as a record of practice on these drills, not as a measure of your general processing speed."
      }
    },
    {
      "@type": "Question",
      "name": "How does attention training differ from focus training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "On this site, the attention drills ask you to split or switch attention: two streams at once (Divided Attention, Multitasking) or a rule that flips every 10 seconds (Concentration Stamina). The focus drills ask you to keep attention on one task while ignoring a distraction: the Stroop test (ignore the word, tap the ink color) and the Schulte table (find numbers in order on a growing grid)."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Stroop effect and how does it measure inhibition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Stroop effect is the slowdown and extra errors when you name the ink color of a color word that spells a different color (Stroop, 1935). In the lab it is measured by comparing conflicting trials with neutral ones. Our Stroop drill shows conflicting words and gives you a score, level and accuracy; it does not compute a Stroop interference score."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Schulte table used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Schulte table is a grid of shuffled numbers that you find and tap in ascending order, named after Walter Schulte. It is a popular visual search and focus exercise. Our version starts at 3x3, grows one size per cleared grid up to 8x8, and runs on one 45-second clock. There is no good evidence that it widens your visual field or speeds up reading."
      }
    },
    {
      "@type": "Question",
      "name": "How often should you practice cognitive drills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no proven ideal dose. A few runs per drill in one sitting, a few times a week, is a reasonable routine and makes your scores easy to compare. Stop when you notice your accuracy dropping from fatigue."
      }
    },
    {
      "@type": "Question",
      "name": "Do cognitive skills transfer to gaming and daily performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not reliably. Practice tends to improve performance on the trained task and on very similar tasks, while transfer to broader skills such as gaming, work or school is weak or unproven in the research. Use these drills as focused practice and a fun challenge, not as a guaranteed boost elsewhere."
      }
    },
    {
      "@type": "Question",
      "name": "Do brain-training games actually work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The research separates near transfer (getting better at the trained task and close variants) from far transfer (gains in unrelated abilities). Near transfer is common; far transfer, for example to IQ or everyday functioning, is not well supported."
      }
    }
  ]
};

export default function CognitiveDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CognitiveHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
