import ConstantSlowPursuitClient from '@/app/drills/visual-tracking/constant-slow-pursuit/ConstantSlowPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { buildConstantSlowPursuitGuide, buildConstantSlowPursuitSeo, getConstantSlowPursuitUi } from '@/lib/i18n/drills/constantSlowPursuitNative';

const locale = 'ja';
const url = 'https://skilldrills.online/ja/drills/visual-tracking/constant-slow-pursuit';
const ui = getConstantSlowPursuitUi(locale).constantSlowPursuit;
const seo = buildConstantSlowPursuitSeo(locale, url, getAlternateLanguages('/drills/visual-tracking/constant-slow-pursuit'));
export const metadata = seo.metadata;
const guideProps = buildConstantSlowPursuitGuide(locale, pickSources('rashbass1961', 'krauzlis2004', 'woods2015', 'kosinski2008'));

export default function ConstantSlowPursuitPage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.softwareApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.webApplicationSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.videoGameSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.faqSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.howToSchema) }} /><ConstantSlowPursuitClient copy={ui} /><DrillGuide {...guideProps} /><div className="max-w-6xl mx-auto px-4 pb-12"><RelatedDrills /></div><DrillFooter /></>;
}
