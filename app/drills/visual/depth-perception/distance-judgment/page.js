import DistanceJudgmentClient from './DistanceJudgmentClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Depth Perception Test - Free Online Distance Judgment Drill",
  description: "Free depth perception test. Judge how far away an approaching target is and intercept it in time, using optical expansion rather than stereo cues.",
  keywords: [
    "depth perception test",
    "depth perception test online",
    "distance judgment test",
    "depth perception games",
    "how to test depth perception",
    "distance estimation test",
    "visual depth test",
    "depth perception training",
    "how to improve depth perception",
    "time to contact test",
    "intercept timing drill",
    "visual training online"
  ],
  openGraph: {
    title: "Depth Perception Test & Distance Judgment | SkillDrills",
    description: "Free online depth perception test: judge an approaching target's distance and click when it matches the ring. A timing drill, not an eye exam.",
    type: "website",
    url: "https://skilldrills.online/drills/visual/depth-perception/distance-judgment",
    siteName: "SkillDrills",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Depth Perception Test & Distance Judgment | SkillDrills",
    description: "Free depth perception test in your browser: time your click as an approaching sphere matches the target ring. Distance judgment practice.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/drills/visual/depth-perception/distance-judgment",
    languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skilldrills.online" },
    { "@type": "ListItem", "position": 2, "name": "Drills Hub", "item": "https://skilldrills.online/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visual Training", "item": "https://skilldrills.online/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Distance Judgment Depth Perception Test", "item": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Depth_perception"],
  "name": "Distance Judgment Depth Perception Test",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Browser depth perception test that times your click as an approaching sphere's on-screen size matches a reference ring (optical expansion, not stereo vision).",
  "featureList": [
    "Millisecond looming velocity and distance estimation tracking",
    "Dynamic accelerating approach speeds from 2200ms to 500ms",
    "Percentage size-deviation scoring (Perfect within 7% narrowing to 4%, Close within 16% narrowing to 10%)",
    "Scores are stored locally in your browser"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Distance Judgment Depth Perception Test | SkillDrills",
  "alternateName": "Distance Judgment Pro",
  "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment",
  "dateModified": "2026-11-12",
  "description": "Free online depth perception test. Click when an approaching sphere matches the target ring as approach speed rises with each level.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with HTML5 Canvas support.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Distance Judgment, Time-to-Contact Estimation, Optical Expansion Timing, Intercept Timing"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Distance Judgment Test — Depth Perception Simulator",
  "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment",
  "description": "Interactive depth perception and distance judgment drill. Time your click as an approaching sphere grows to match a reference ring.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Visual Training", "Depth Perception", "Distance Judgment"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Take the Distance Judgment Depth Perception Test",
  "dateModified": "2026-11-12",
  "description": "Step-by-step procedure to measure and train visual depth estimation and looming intercept timing.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment#step-1",
      
      "name": "Anchor Visual Gaze on the Target Depth Ring",
      "text": "Fixate your visual attention on the cyan target depth ring located along the center of the perspective corridor."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment#step-2",
      
      "name": "Track the Looming Optical Expansion",
      "text": "Observe the 3D sphere as it spawns in the deep virtual distance and travels forward along the visual Z-axis."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment#step-3",
      
      "name": "Execute Intercept Tap at Coplanar Alignment",
      "text": "Click or tap at the exact instant the expanding sphere's perimeter matches the reference ring's diameter."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/drills/visual/depth-perception/distance-judgment#step-4",
      
      "name": "Adapt to Progressive Velocity Scaling",
      "text": "As your score advances, approach velocity accelerates from 2,200 ms down to 500 ms, testing rapid temporal-to-spatial calibration."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the distance judgment depth perception test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is a free browser drill in which a sphere approaches down a perspective tunnel and you click or tap when its on-screen size matches a reference ring. It practises judging distance and time-to-contact from how fast an object grows (optical expansion) on a flat screen."
      }
    },
    {
      "@type": "Question",
      "name": "How does the brain calculate distance and time-to-contact?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As established by David N. Lee (1976), the brain calculates time-to-contact (TTC) using the optical variable tau (τ)—the ratio of an object's current retinal image size to its rate of optical expansion. Psychophysical experiments suggest the visual system has channels tuned to changing size, so this does not require a conscious distance calculation (Regan & Beverley, 1978)."
      }
    },
    {
      "@type": "Question",
      "name": "Can you improve depth perception with training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practice usually makes you better at the specific task you practise. This drill lets you practise timing an intercept from optical expansion; gains in the drill are not a guarantee of gains elsewhere."
      }
    },
    {
      "@type": "Question",
      "name": "What affects your score on the distance judgment drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A flat monitor cannot show each eye a different image, so this drill uses single-eye cues such as perspective and how fast the target grows. Your score also varies with fatigue, display refresh rate and viewing distance, so compare runs on the same device and screen."
      }
    },
    {
      "@type": "Question",
      "name": "How does display refresh rate affect distance judgment tests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard 60 Hz monitors introduce up to 16.7 ms of frame display quantization delay, which at high target approach velocities can cause spatial jumping of the sphere edge. High-refresh displays (144 Hz at ~6.9 ms, 240 Hz at ~4.1 ms) render smooth optical looming gradients, enabling more precise temporal interception (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good score on the distance judgment drill?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no published norm for this drill. Use your own best score as the benchmark: you level up every 750 points, and 1,500 points in a 45-second run is the drill's top S+ target. Compare runs on the same device and screen."
      }
    },
    {
      "@type": "Question",
      "name": "Is this depth perception test completely free?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Distance Judgment Depth Perception Test on SkillDrills is 100% free to play in any modern desktop or mobile web browser, with no account registration, subscriptions, or downloads required."
      }
    }
  ]
};

const distanceGuide = {
  heading: "How the Distance Judgment Depth Perception Test Works",
  intro: [
    "The Distance Judgment depth perception test asks you to judge how far away an approaching target is and intercept it in time. It relies on how fast the target grows on screen, not on stereo vision, so it is a timing drill. Start, watch the target approach, and act when it is in range.",
    "Depth perception is the visual faculty that enables organisms to perceive the world in three dimensions and accurately judge the distance, spatial volume, and trajectory of objects. In dynamic sports (such as baseball, tennis, and motorsports), aviation, tactical driving, and competitive esports, split-second distance estimation determines the difference between a clean interception and a catastrophic collision.",
    "The drill is built on optical expansion research (Lee, 1976; Regan & Beverley, 1978): the rate at which an approaching object's image grows tells you its time-to-contact. A sphere moves down a perspective tunnel toward a fixed reference ring, and approach speed rises from about 2.2 s to 0.5 s per pass as you level up.",
    "Timing & Measurement Methodology: All intercept deviations are captured client-side using the high-resolution performance.now() API. Deviation is computed as the relative percentage error (|Actual Diameter - Target Diameter| / Target Diameter). Hardware latency adds display quantization delay (~16.7 ms at 60 Hz, ~6.9 ms at 144 Hz, ~4.1 ms at 240 Hz) and input polling intervals (~8 ms at 125 Hz vs ~1 ms at 1000 Hz), as documented by Woods et al. (2015). Compare runs on the same hardware setup for consistent longitudinal tracking.",
    "Data Transparency: Scores, level progressions, and accuracy percentages are stored in your browser's local storage."
  ],
  benchmarks: {
    title: "SkillDrills practice bands (45-second run)",
    headers: ["Practice Band", "Score in One Run", "Level Reached", "What It Looks Like"],
    rows: [
      ["Top band", "1,500+", "Level 3+", "Reaches the drill's S+ target; consistent Perfect intercepts at the faster approach speeds."],
      ["Solid", "750 – 1,499", "Level 2", "Reliable Close and Perfect intercepts at moderate speeds; some early or late clicks as speed rises."],
      ["Building", "Under 750", "Level 1", "Still learning the timing; clicks often land before or after the sphere matches the ring."]
    ],
    note: "SkillDrills practice bands based on the drill's own scoring (level up every 750 points; 1,500 points is the S+ target). They are not population norms. Results vary with fatigue, display refresh rate, and viewing distance."
  },
  techniques: {
    title: "How to train distance judgment",
    items: [
      {
        name: "Optical Looming Expansion Matching",
        desc: "As modeled by David N. Lee (1976) and David Regan & Kenneth I. Beverley (1978), the rate of visual expansion of an approaching object's retinal image directly encodes its time-to-contact (TTC).",
        tips: "Avoid tracking the center of the sphere; anchor your visual focus on the outer boundary of the sphere and execute your click the instant its edge aligns with the cyan target ring."
      },
      {
        name: "Foveal Gaze Anchoring on the Reference Plane",
        desc: "Visual pursuit of an approaching object induces micro-saccades and retinal slip. Keeping the fovea firmly locked onto the stationary depth ring provides a stable spatial frame of reference.",
        tips: "Fixate your eyes solidly on the target ring rather than following the moving sphere from the back of the tunnel forward."
      },
      {
        name: "Motor Decoupling & Anti-Anticipation Discipline",
        desc: "Under accelerating speeds, the visual motor system often triggers premature speculative responses due to anxiety over missing the window (Woods et al., 2015).",
        tips: "Maintain light fingertip tension on your mouse or touch screen. Inhale smoothly and trust visual contour confirmation before firing the motor impulse."
      },
      {
        name: "Hardware Latency & High-Refresh Calibration",
        desc: "At approach speeds below 800 ms, a 60 Hz monitor renders only ~48 distinct frames throughout the entire tunnel transit, introducing up to 16.7 ms of spatial quantization error (Woods et al., 2015).",
        tips: "For optimal depth calibration, use a 144 Hz or 240 Hz monitor to provide the visual cortex with maximum temporal motion frames."
      }
    ]
  },
  steps: [
    "Click Start Drill to initialize the 45-second distance judgment session.",
    "Fixate your gaze on the cyan reference ring positioned at the middle depth plane.",
    "Watch the 3D sphere as it spawns at the far end of the tunnel and accelerates toward you.",
    "Tap the screen or click the mouse at the exact moment the expanding sphere matches the target ring diameter.",
    "Review your feedback (Perfect: +150 PTS within 7% size error, Close: +100 PTS within 16%; both windows narrow to 4% and 10% at higher levels). You level up every 750 points and the approach speeds up."
  ],
  audience: "Gamers and anyone who wants a short browser challenge in judging when an approaching object arrives. It is practice for this task, not a driving, flying or sports-vision assessment.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('lee1976', 'regan1978', 'woods2015'),
  related: [
    { href: "/drills/visual/tracking-accuracy/moving-target", label: "Moving Target Intercept" },
    { href: "/drills/visual/reaction-speed/light-reaction", label: "Light Reaction Test" },
    { href: "/drills/visual/tracking-accuracy/multiple-targets", label: "Multiple Object Tracking" },
    { href: "/drills/visual/tracking-accuracy/pursuit-tracker", label: "Smooth Pursuit Tracker" },
    { href: "/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go Impulse Test" },
    { href: "/drills/visual/visual-recognition/entropic-grid", label: "Entropic Grid Search" }
  ]
};

const copyEn = {
  h1Keyword: "Distance Judgment Test",
  h1Suffix: " — Online Depth Perception Trainer",
};

export default function DistanceJudgmentPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <DistanceJudgmentClient copy={copyEn} />
      <DrillGuide guide={distanceGuide} />
      
    </>
  );
}
