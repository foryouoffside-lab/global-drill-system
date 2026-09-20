import ReflexTrainingDrillWrapper from './ReflexTrainingDrillWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { buildReflexTrainingDrillGuide, buildReflexTrainingDrillSeo, getReflexTrainingDrillUi } from '@/lib/i18n/drills/reflexTrainingDrillNative';

const locale = 'en';
const url = 'https://skilldrills.online/drills/reaction-speed/reflex-training-drill';
const ui = getReflexTrainingDrillUi(locale).reflexTrainingDrill;
const seo = buildReflexTrainingDrillSeo(locale, url, getAlternateLanguages('/drills/reaction-speed/reflex-training-drill'));
export const metadata = seo.metadata;
const guideProps = buildReflexTrainingDrillGuide(locale, pickSources('hick1952', 'donders1868', 'kosinski2008', 'woods2015'));

export default function ReflexTrainingDrillPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.softwareApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.webApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.videoGameSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.howToSchema) }} /><ReflexTrainingDrillWrapper copy={ui} /><DrillGuide {...guideProps} /><div className="max-w-6xl mx-auto px-4 pb-12"><RelatedDrills /></div><DrillFooter /></>;
}
