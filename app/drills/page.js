import DrillsDirectoryClient from './DrillsDirectoryClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildDirectoryMetadata, getDirectoryCollectionFields, getDirectoryFaqSchema } from '@/lib/i18n/siteLandingSeoNative';

// GSC (180d): this URL takes 29 impr for "online drills" (pos 14.7) and 23 for
// "drills online" (pos 10.6) without the phrase appearing in the title at all.
const TITLE = `Free Online Drills - ${DRILLS.length} Skill Training Drills`;
const DESCRIPTION = `Browse ${DRILLS.length}+ free training drills across 8 categories. FPS aim trainer, cognitive brain training, visual tracking, memory games, reaction speed and more.`;

const legacyMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: 'https://skilldrills.online/drills',
    languages: getAlternateLanguages('/drills'),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: 'https://skilldrills.online/drills',
    siteName: 'SkillDrills',
    locale: 'en_US',
    images: [{
      url: 'https://skilldrills.online/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'SkillDrills Training Drills',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
};

export const metadata = {
  ...legacyMetadata,
  ...buildDirectoryMetadata('en', 'https://skilldrills.online/drills', DRILLS.length, getAlternateLanguages('/drills')),
};

const directoryFaqSchema = getDirectoryFaqSchema('en');

export default function DrillsPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/' },
      { '@type': 'ListItem', position: 2, name: 'All Drills', item: 'https://skilldrills.online/drills' },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: TITLE,
    description: DESCRIPTION,
    url: 'https://skilldrills.online/drills',
    hasPart: DRILLS.map((d) => ({
      '@type': 'WebPage',
      name: d.name,
      url: `https://skilldrills.online${d.href}`,
    })),
  };
  Object.assign(collectionSchema, getDirectoryCollectionFields('en', DRILLS.length));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(directoryFaqSchema) }} />
      <DrillsDirectoryClient
        faqs={directoryFaqSchema.mainEntity.map((item) => ({ q: item.name, a: item.acceptedAnswer.text }))}
      />
    </>
  );
}
