import VisualTrackingDrillsClient from './VisualTrackingDrillsClient';
import { DRILLS } from '../../../lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');
const trackingDrillCount = trackingDrills.length;

const legacyMetadata = {
  title: `Free Eye Tracking Training - Smooth Pursuit Drills`,
  description: `Free browser-based visual motion practice with ${trackingDrillCount} smooth-pursuit and tracking drills. No sign-up required; not a clinical eye test or treatment.`,
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
    description: `Free browser-based visual motion practice with ${trackingDrillCount} smooth-pursuit drills. Not a clinical eye test or treatment.`,
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
        "text": "Predictive pursuit describes using recent motion information to anticipate a target during a brief controlled occlusion. These drills provide a practice task; they do not measure the brain or guarantee a clinical or sport-performance change."
      }
    },
    {
      "@type": "Question",
      "name": "What causes catch-up saccades during eye tracking, and how do you fix them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Catch-up saccades occur when your smooth pursuit velocity falls behind target speed (pursuit gain < 1.0), forcing an involuntary eye jerk to catch up. Graduated speed drills—such as constant-slow pursuit and sinusoidal wave tracking—condition continuous ocular motor gain, smoothing eye movement and eliminating visual jitter."
      }
    },
    {
      "@type": "Question",
      "name": "Can these drills replace vision therapy or concussion care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A browser animation is not an assessment or rehabilitation plan. Anyone with concussion symptoms, double vision, persistent dizziness, eye pain, or a diagnosed visual disorder should follow a qualified clinician’s advice and stop if symptoms worsen."
      }
    },
    {
      "@type": "Question",
      "name": "What is gaze stability, and how does it relate to the Vestibulo-Ocular Reflex (VOR)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gaze stability means keeping a visual target clear while the visual scene or head position changes. These drills keep the head still and therefore do not test the vestibulo-ocular reflex (VOR) or diagnose visual-vestibular function."
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
        "text": "Refresh rate and browser load affect how smooth the animation appears, but a higher refresh rate does not make the task a clinical measurement. The drills now use time-based motion, a capped render loop, and cached canvas layers to reduce avoidable frame work."
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
