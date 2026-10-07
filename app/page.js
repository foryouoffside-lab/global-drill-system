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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <HomePageClient />
    </>
  );
}
