import ReactionSpeedDrillsClient from '@/app/drills/reaction-speed/ReactionSpeedDrillsClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildReactionSpeedHubSeo, getReactionSpeedHubFaqs, getReactionSpeedHubUi } from '@/lib/i18n/reactionSpeedHubNative';

const locale = 'ko';
const url = 'https://skilldrills.online/ko/drills/reaction-speed';
const ui = getReactionSpeedHubUi(locale);
const seo = buildReactionSpeedHubSeo(locale, url, getAlternateLanguages('/drills/reaction-speed'));
const socialImage = 'https://skilldrills.online/opengraph-image';
export const metadata = {
  ...seo.metadata,
  openGraph: { ...seo.metadata.openGraph, images: [{ url: socialImage, width: 1200, height: 630, alt: ui.h1 }] },
  twitter: { ...seo.metadata.twitter, images: [socialImage] },
};

export default function ReactionSpeedDrillsPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.collectionPageSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><ReactionSpeedDrillsClient copy={ui} faqs={getReactionSpeedHubFaqs(locale)} /></>;
}

