import ReactionSimulatorWrapper from './ReactionSimulatorWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildReactionGameGuide, buildReactionGameSeo, getReactionGameUi } from '@/lib/i18n/drills/reactionGame';

const locale = 'en';
const url = 'https://skilldrills.online/drills/reaction-speed/reaction-game';
const ui = getReactionGameUi(locale).reactionGame;
const seo = buildReactionGameSeo(locale, url, getAlternateLanguages('/drills/reaction-speed/reaction-game'));
export const metadata = seo.metadata;
const guideProps = buildReactionGameGuide(locale, pickSources('kosinski2008', 'hick1952', 'woods2015', 'donders1868'));

export default function ReactionGamePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.softwareApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.webApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.videoGameSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.howToSchema) }} /><ReactionSimulatorWrapper copy={ui} /><DrillGuide {...guideProps} /><div className="max-w-6xl mx-auto px-4 pb-12"><RelatedDrills /></div><DrillFooter /></>;
}
