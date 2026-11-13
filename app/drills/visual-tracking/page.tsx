import VisualTrackingDrillsClient from './VisualTrackingDrillsClient';
import { DRILLS } from '../../../lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');
const trackingDrillCount = trackingDrills.length;

const legacyMetadata = {
  title: `Free Eye Tracking Training - Smooth Pursuit Drills`,
  description: `Free browser-based visual motion practice with ${trackingDrillCount} smooth-pursuit and tracking drills. No sign-up required; results are based on pointer position.`,
  keywords: [
    'eye tracking training online', 'free eye tracking training', 'eye tracking exercises',
    'smooth pursuit eye movement', 'smooth pursuit training', 'pursuit eye training',
    'eye tracking game', 'gaze tracking training', 'eye movement training',
    'visual tracking exercises', 'eye coordination training', 'eye agility training',
    'infinity pursuit eye', 'sine wave pursuit',
    'peripheral ping pursuit', 'predictive pursuit drill', 'staircase step eye',
    'split screen tracking', 'strobe prediction pursuit', 'constant slow pursuit',
    'sports visual tracking practice', 'athlete visual tracking practice', 'esports visual tracking',
    'gaming eye tracking', 'fps eye movement practice', 'baseball visual tracking practice',
    'gaze stability practice', 'eye tracking for sports', 'free online eye drills',
    'browser eye tracking game', 'no download eye training', 'skilldrills visual tracking',
    'smooth pursuit eye movement exercises', 'catch up saccades tracking',
    'dynamic visual acuity practice', 'gaze stability exercises', 'predictive visual pursuit drill',
  ],
  openGraph: {
    title: `Free Eye Tracking Training Online - ${trackingDrillCount} Smooth Pursuit Drills | SkillDrills`,
    description: `Free browser-based visual motion practice with ${trackingDrillCount} smooth-pursuit drills. Results are based on pointer position.`,
    type: 'website',
    url: 'https://skilldrills.online/drills/visual-tracking',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Free Eye Tracking Training Online - Smooth Pursuit Drills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Free Eye Tracking Training Online - ${trackingDrillCount} Smooth Pursuit Drills | SkillDrills`,
    description: `Free eye tracking training online. ${trackingDrillCount} smooth pursuit drills. No sign-up.`,
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/visual-tracking',
    languages: getAlternateLanguages('/drills/visual-tracking'),
  },
};

export const metadata = { ...legacyMetadata, ...buildVisualTrackingHubMetadata('en', 'https://skilldrills.online/drills/visual-tracking', trackingDrillCount, getAlternateLanguages('/drills/visual-tracking')) };

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between Smooth Pursuit and Saccadic eye movements?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Smooth Pursuit Eye Movements (SPEM) involve voluntary, continuous tracking of a moving visual target to keep its image centered on the high-acuity fovea. In contrast, Saccades are rapid, ballistic jumps (up to 900 degrees/second) that shift gaze between stationary points. Athletes and gamers rely on smooth pursuit to track trajectories continuously and saccades to snap rapidly between targets."
      }
    },
    {
      "@type": "Question",
      "name": "How does dynamic visual tracking training improve sports performance?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sports use moving-target observation and timing, but this browser task cannot measure dynamic visual acuity or prove transfer to a sport. Treat it as repeatable practice and compare only sessions made on the same setup."
      }
    },
    {
      "@type": "Question",
      "name": "What is predictive pursuit, and how does the brain track occluded targets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Predictive pursuit describes using recent motion information to anticipate a target during a brief controlled occlusion. These drills provide a practice task; they do not measure the brain or guarantee a sport-performance change."
      }
    },
    {
      "@type": "Question",
      "name": "What causes catch-up saccades during eye tracking, and how do you fix them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Catch-up saccades occur when your smooth pursuit velocity falls behind target speed (pursuit gain < 1.0), forcing an involuntary eye jerk to catch up. Graduated speed drills such as constant-slow pursuit and sine-wave tracking let you practise following a target at controlled speeds; they record pointer distance, not eye movement, and do not promise to remove catch-up saccades."
      }
    },
    {
      "@type": "Question",
      "name": "What do these drills record, and how should you use the result?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Each session records your settings and the pointer position relative to the target: time on target and average distance from the target centre. Eye position is not recorded. Compare results only between sessions on the same screen, browser and settings, and change one setting at a time."
      }
    },
    {
      "@type": "Question",
      "name": "What is gaze stability, and how does it relate to the Vestibulo-Ocular Reflex (VOR)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gaze stability means keeping a visual target clear while the visual scene or head position changes. These drills keep the head still and therefore do not train or measure the vestibulo-ocular reflex (VOR)."
      }
    },
    {
      "@type": "Question",
      "name": "How long should you practice eye tracking drills each day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use short, comfortable blocks with breaks rather than chasing a fixed prescription. Stop for pain, dizziness, nausea, persistent blur, double vision, or unusual symptoms; seek professional advice if symptoms persist."
      }
    },
    {
      "@type": "Question",
      "name": "Why do high refresh rate monitors (144Hz to 360Hz) matter for visual tracking drills?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Refresh rate and browser load affect how smooth the animation appears, but a higher refresh rate does not change what the task records: pointer position relative to the target. The drills now use time-based motion, a capped render loop, and cached canvas layers to reduce avoidable frame work."
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('en');
const enrichedFaqSchema = { ...faqSchema, ...faqFields, mainEntity: [...faqSchema.mainEntity, ...additions] };

export default function VisualTrackingDrillsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
          { "@type": "ListItem", "position": 2, "name": "Eye Tracking Training", "item": "https://skilldrills.online/drills/visual-tracking" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": `Free Eye Tracking Training Online - ${trackingDrillCount} Smooth Pursuit Drills`,
        "url": "https://skilldrills.online/drills/visual-tracking",
        "description": `${trackingDrillCount} free eye tracking training drills online. Smooth pursuit exercises (sine-wave, infinity, staircase, predictive, and more). No sign-up required.`,
        "author": { "@type": "Organization", "name": "SkillDrills" },
        ...getVisualTrackingHubCollectionFields('en', trackingDrillCount),
        "hasPart": trackingDrills.map((drill) => ({
          "@type": "WebApplication",
          "name": drill.name,
          "url": `https://skilldrills.online${drill.href}`
        }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedFaqSchema) }} />
      <VisualTrackingDrillsClient
        faqs={enrichedFaqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
