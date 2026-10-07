import FPSHubClient from './FPSHubClient';
import { DRILLS } from '../../../lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');
const fpsDrillCount = fpsDrills.length;

export const metadata = {
  // GSC (180d) for this URL: fps training 48 impr (pos 28.8), fps practice 28,
  // fps trainer 16, practice fps aim 12. The old title carried "aim trainer"
  // and "aim training" but never the phrase "FPS Training" those queries use.
  title: 'FPS Aim Training & Free Aim Trainer | SkillDrills',
  description: `Free browser FPS aim training for flick shots, tracking, recoil control, target switching, and reaction drills. No sign-up.`,
  keywords: [
    'fps aim training', 'free fps aim trainer', 'aim trainer online',
    'free aim trainer', 'fps training online', 'Valorant aim trainer',
    'CS2 aim training', 'Apex Legends aim trainer', 'flick shot training',
    'tracking aim trainer', 'recoil control training', 'target switching aim',
    'crosshair placement training', 'reaction time test fps', 'strafe tracking aim',
    'target acquisition training', 'micro correction aim', 'smooth pursuit tracking',
    'fps sensitivity training', 'esports aim training', 'browser aim trainer',
    'no download aim trainer', 'how to improve aim in fps', 'cm 360 aim sensitivity',
  ],
  openGraph: {
    title: 'FPS Aim Training & Free Aim Trainer | SkillDrills',
    description: 'Free browser FPS aim training for flick shots, tracking, recoil control, target switching, and reaction drills. No sign-up.',
    type: 'website',
    url: 'https://skilldrills.online/drills/fps',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Free FPS Aim Trainer - Online Aim Training Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FPS Aim Training & Free Aim Trainer | SkillDrills',
    description: 'Free browser FPS aim training for flick shots, tracking, recoil control, target switching, and reaction drills. No sign-up.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/fps',
    languages: getAlternateLanguages('/drills/fps'),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "en-US",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does dedicated aim training transfer to tactical shooters like Valorant and CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dedicated aim training isolates pure mouse kinematics—such as micro-corrections, crosshair deceleration, and click timing—free from in-game round downtime, economy management, and spectating. In tactical shooters like Valorant and CS2 where time-to-kill (TTK) is sub-200ms, practicing hundreds of micro-flicks in a 10-minute browser drill conditions the motor cortex to execute sub-pixel adjustments reflexively, freeing cognitive bandwidth for crosshair placement and tactical positioning."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between Click Timing, Tracking, and Target Switching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FPS aiming divides into three foundational mechanical pillars: 1) Click Timing (Static & Dynamic Flicks): moving the cursor to a target and confirming the shot the instant the reticle intersects the hitbox, vital for single-tap weapons like the Vandal or AK-47; 2) Tracking (Smooth Pursuit & Reactive): continuously synchronizing reticle velocity with a moving target's vector, essential for automatic weapon fire in Apex Legends and Overwatch 2; and 3) Target Switching: snapping ballistically between multiple targets at maximum velocity with minimal dwell time, critical for multi-enemy clutch engagements."
      }
    },
    {
      "@type": "Question",
      "name": "How long should you practice aim drills each day for optimal improvement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The optimal aim training routine is 15 to 30 minutes of deliberate, focused practice per day, 4 to 6 days per week. Motor learning neuroscience indicates that neural fatigue degrades fine-motor calibration after approximately 35 minutes of continuous aiming. High-intensity, brief sessions followed by adequate sleep promote neural myelin consolidation, producing faster muscle memory gains and lower risk of repetitive strain injury (RSI) compared to marathon multi-hour sessions."
      }
    },
    {
      "@type": "Question",
      "name": "Should you use wrist aiming, arm aiming, or a hybrid technique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Competitive esports players utilize a hybrid aiming technique: the forearm and elbow execute wide horizontal turns and 180-degree sweeps, the wrist manages medium-range target acquisition, and the fingertips provide fine sub-pixel micro-corrections and vertical recoil control. Relying exclusively on wrist aiming restricts your effective range and increases carpal tunnel risk, while purely arm aiming lacks the fine dexterity needed for precision headshots."
      }
    },
    {
      "@type": "Question",
      "name": "How do you find your optimal mouse sensitivity and cm/360?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Optimal sensitivity is measured in centimeters per 360-degree rotation (cm/360). For tactical shooters (Valorant, CS2), a lower sensitivity of 35 to 55 cm/360 provides maximum micro-adjustment stability. For tracking-heavy arena shooters (Apex Legends, Overwatch 2, The Finals), a medium sensitivity of 24 to 38 cm/360 balances rapid 180-degree turns with continuous target pursuit. To calibrate, choose a sensitivity where you can smoothly track a stationary point while strafing left and right without your crosshair jittering off-target."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my aim feel shaky or inconsistent, and how do I fix it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shaky aim is predominantly caused by excessive muscular tension in the hand and forearm, over-gripping the mouse during high-stress gunfights, or using a sensitivity too high for your current fine motor control. To eliminate tremors: 1) Run smooth pursuit tracking drills to train fluid, low-tension cursor movement; 2) Lower your sensitivity by 10% to 15% to increase your margin of error; and 3) Ensure your forearm rests comfortably on the desk or mousepad to minimize friction drag."
      }
    },
    {
      "@type": "Question",
      "name": "Is an online browser aim trainer as responsive as downloadable software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For practice, mostly. SkillDrills draws on an HTML5 Canvas and uses the browser's Pointer Lock API, which hides the cursor and delivers relative mouse movement (movementX/movementY), so long flicks never stop at the screen edge. Target motion is calculated from elapsed time rather than frame count, so drills behave consistently on 144 Hz, 240 Hz, or 360 Hz displays. Browser input still passes through your operating system's pointer settings, so keep your DPI, sensitivity, and mouse-acceleration settings unchanged between sessions when you compare scores."
      }
    },
    {
      "@type": "Question",
      "name": "What is crosshair placement versus raw flick aiming, and which matters more?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Crosshair placement is proactive spatial positioning—pre-aiming common sightlines and head-level angles before peeking—whereas raw flick aiming is reactive motor correction when an enemy appears away from your crosshair. In tactical shooters, crosshair placement accounts for approximately 70% of gunfight wins. However, elite raw flick precision and micro-correction speed are what secure the remaining 30% of unpredictable encounters, wide swings, and multi-target trades."
      }
    }
  ]
};

export default function FPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
          { "@type": "ListItem", "position": 2, "name": "FPS Aim Training", "item": "https://skilldrills.online/drills/fps" }
        ]
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "inLanguage": "en-US",
        "dateModified": "2026-09-20",
        "name": "FPS Aim Training & Free Aim Trainer",
        "url": "https://skilldrills.online/drills/fps",
        "description": `Free browser FPS aim training with ${fpsDrillCount} drills for flick shots, tracking, recoil control, target switching, crosshair placement, and reaction practice. No sign-up required.`,
        "author": { "@type": "Organization", "name": "SkillDrills" },
        "hasPart": fpsDrills.map((drill) => ({
          "@type": "WebApplication",
          "name": drill.name,
          "url": `https://skilldrills.online${drill.href}`
        }))
      })}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
