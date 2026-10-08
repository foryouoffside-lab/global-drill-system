import MemoryClient from '@/app/drills/memory/MemoryClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildMemoryHubSeo, getMemoryHubFaqs, getMemoryHubUi } from '@/lib/i18n/memoryHubNative';

const locale = 'ko';
const url = 'https://skilldrills.online/ko/drills/memory';
const ui = getMemoryHubUi(locale);
const seo = buildMemoryHubSeo(locale, url, getAlternateLanguages('/drills/memory'));
const socialImage = 'https://skilldrills.online/opengraph-image';
export const metadata = {
  ...seo.metadata,
  openGraph: { ...seo.metadata.openGraph, images: [{ url: socialImage, width: 1200, height: 630, alt: ui.h1 }] },
  twitter: { ...seo.metadata.twitter, images: [socialImage] },
};

export default function MemoryPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.collectionPageSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><MemoryClient copy={ui} faqs={getMemoryHubFaqs(locale)} /></>;
}
