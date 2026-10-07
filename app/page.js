import HomePageClient from './HomePageClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildHomeMetadata, buildHomeSchema } from '@/lib/i18n/siteLandingSeoNative';

const legacyMetadata = {
  title: 'Free Aim Trainer & Brain Training Drills | SkillDrills',
  description: `Master your mind and mechanics with ${DRILLS.length}+ free interactive drills. Improve FPS aim, reaction time, memory, focus, and visual skills. No sign-up.`,
  keywords: [
    'free aim trainer', 'FPS aim trainer', 'flick shot training', 'tracking aim practice',
    'Valorant aim trainer', 'CS2 aim practice', 'free brain training', 'cognitive training',
    'memory games', 'reaction time test', 'speed reading',
    'focus training', 'brain games free', 'online drills',
    'hand eye coordination', 'visual tracking', 'peripheral vision test',
    'esports training', 'gaming skills trainer', 'free cognitive assessment',
    'working memory exercises', 'attention training', 'problem solving games',
    'skilldrills', 'skill drills', 'free online brain games', 'mental fitness training'
  ],
  openGraph: {
    title: 'SkillDrills - Free FPS Aim Trainer & Cognitive Brain Training',
    description: `${DRILLS.length}+ free drills for FPS gaming, cognitive skills, memory, and mental fitness. No registration. Start now.`,
    url: 'https://skilldrills.online',
    siteName: 'SkillDrills',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'SkillDrills - Free Brain Training Platform' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SkillDrills - Free FPS & Cognitive Training Platform',
    description: `${DRILLS.length}+ free training drills. No sign-up required. Start training instantly.`,
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online',
    languages: getAlternateLanguages('/'),
  },
};

export const metadata = {
  ...legacyMetadata,
  ...buildHomeMetadata('en', 'https://skilldrills.online', DRILLS.length, getAlternateLanguages('/')),
};

const homeSchema = buildHomeSchema('en', 'https://skilldrills.online', DRILLS.length);

const homeFaqs = [
  {
    q: 'What is SkillDrills?',
    a: `SkillDrills is a free collection of ${DRILLS.length} browser-based training drills for aim, reaction time, memory, attention, motor control and eye tracking. Every drill runs in your browser with no sign-up and nothing to install, and your scores stay on your own device.`,
  },
  {
    q: 'Is SkillDrills free, and do I need an account?',
    a: `Yes, all ${DRILLS.length} drills are free and no account is needed. You open a drill and start. Your best scores are saved in your browser's local storage, so clearing site data also clears them.`,
  },
  {
    q: 'What skills can I train on SkillDrills?',
    a: 'Eight areas: reaction speed, motor skills and mouse control, cognitive training, memory, FPS aim training, visual perception, eye tracking and smooth pursuit, and physical coordination. Each area has its own hub page that lists its drills.',
  },
  {
    q: 'How accurate are the timings?',
    a: 'Timings use performance.now(). Browser timers are coarsened to about 1 ms and displays quantize to the refresh interval (about 16.7 ms at 60 Hz), so differences under roughly 5 ms are measurement noise. Compare your own sessions on the same device rather than against other people.',
  },
  {
    q: 'Do I need a mouse, or can I play on a phone?',
    a: 'FPS, motor and physical drills need a mouse and are desktop-only. Memory and cognitive drills also work on phones and tablets.',
  },
  {
    q: 'What data does SkillDrills collect?',
    a: 'Drill scores and settings are stored in your browser, not on our servers. The website uses cookie-less Vercel Analytics and Speed Insights to measure traffic and page performance without collecting personally identifiable information. The Privacy page has the details.',
  },
];

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }} />
      <HomePageClient faqs={homeFaqs} />
    </>
  );
}
