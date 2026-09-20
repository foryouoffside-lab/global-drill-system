import ReactionSpeedDrillsClient from './ReactionSpeedDrillsClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildReactionSpeedHubSeo, getReactionSpeedHubFaqs, getReactionSpeedHubUi } from '@/lib/i18n/reactionSpeedHubNative';

const locale = 'en';
const url = 'https://skilldrills.online/drills/reaction-speed';
const ui = getReactionSpeedHubUi(locale);
const seo = buildReactionSpeedHubSeo(locale, url, getAlternateLanguages('/drills/reaction-speed'));
export const metadata = seo.metadata;

export default function ReactionSpeedDrillsPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.collectionPageSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><ReactionSpeedDrillsClient copy={ui} faqs={getReactionSpeedHubFaqs(locale)} /></>;
}

