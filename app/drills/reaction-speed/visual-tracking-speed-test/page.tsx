import VisualTrackingSpeedTestWrapper from './VisualTrackingSpeedTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { buildVisualTrackingSpeedTestGuide, buildVisualTrackingSpeedTestSeo, getVisualTrackingSpeedTestUi } from '@/lib/i18n/drills/visualTrackingSpeedTestNative';

const locale = 'en';
const url = 'https://skilldrills.online/drills/reaction-speed/visual-tracking-speed-test';
const ui = getVisualTrackingSpeedTestUi(locale).visualTrackingSpeedTest;
const seo = buildVisualTrackingSpeedTestSeo(locale, url, getAlternateLanguages('/drills/reaction-speed/visual-tracking-speed-test'));
export const metadata = seo.metadata;
const guideProps = buildVisualTrackingSpeedTestGuide(locale, pickSources('rashbass1961', 'krauzlis2004', 'woods2015', 'kosinski2008'));

export default function VisualTrackingSpeedTestPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.softwareApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.webApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.videoGameSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.howToSchema) }} /><VisualTrackingSpeedTestWrapper copy={ui} /><DrillGuide {...guideProps} /><div className="max-w-6xl mx-auto px-4 pb-12"><RelatedDrills /></div><DrillFooter /></>;
}
