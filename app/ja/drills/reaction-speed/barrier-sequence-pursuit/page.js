import BarrierSequencePursuitClient from '@/app/drills/reaction-speed/barrier-sequence-pursuit/BarrierSequencePursuitWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { buildBarrierSequenceGuide, buildBarrierSequenceSeo, getBarrierSequenceContent, getBarrierSequenceUi } from '@/lib/i18n/drills/barrierSequencePursuit';

const locale = 'ja';
const url = 'https://skilldrills.online/ja/drills/reaction-speed/barrier-sequence-pursuit';
const data = getBarrierSequenceContent(locale);
const ui = getBarrierSequenceUi(locale).barrierSequencePursuit;
const seo = buildBarrierSequenceSeo(locale, url, getAlternateLanguages('/ja/drills/reaction-speed/barrier-sequence-pursuit'));
export const metadata = seo.metadata;
const guideProps = buildBarrierSequenceGuide(locale, pickSources('donders1868', 'dewet2020', 'kosinski2008', 'woods2015'));

export default function JapaneseBarrierSequencePursuitPage() {
  return (
    <>
      {[seo.breadcrumbSchema, seo.softwareApplicationSchema, seo.webApplicationSchema, seo.videoGameSchema, seo.faqSchema, seo.howToSchema].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <BarrierSequencePursuitClient copy={{ title: data.title, subtitle: data.subtitle, caption: ui.caption }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
