import MemoryClient from '@/app/drills/memory/MemoryClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildMemoryHubSeo, getMemoryHubFaqs, getMemoryHubUi } from '@/lib/i18n/memoryHubNative';

const locale = 'fr';
const url = 'https://skilldrills.online/fr/drills/memory';
const ui = getMemoryHubUi(locale);
const seo = buildMemoryHubSeo(locale, url, getAlternateLanguages('/drills/memory'));
export const metadata = seo.metadata;

export default function MemoryPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.collectionPageSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><MemoryClient copy={ui} faqs={getMemoryHubFaqs(locale)} /></>;
}
