import FPSTrackingTrainerClient from '@/app/drills/reaction-speed/fps-tracking-trainer/FPSTrackingTrainerWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { buildFpsTrackingGuide, buildFpsTrackingSeo, getFpsTrackingContent, getFpsTrackingUi } from '@/lib/i18n/drills/fpsTrackingTrainer';

const locale = 'de';
const url = 'https://skilldrills.online/de/drills/reaction-speed/fps-tracking-trainer';
const data = getFpsTrackingContent(locale);
const ui = getFpsTrackingUi(locale).fpsTrackingTrainer;
const seo = buildFpsTrackingSeo(locale, url, getAlternateLanguages('/de/drills/reaction-speed/fps-tracking-trainer'));
export const metadata = seo.metadata;
const guideProps = buildFpsTrackingGuide(locale, pickSources('krauzlis2004', 'rashbass1961', 'green2003', 'woods2015'));

export default function GermanFPSTrackingTrainerPage() {
  return (
    <>
      {[seo.breadcrumbSchema, seo.softwareApplicationSchema, seo.webApplicationSchema, seo.videoGameSchema, seo.faqSchema, seo.howToSchema].map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <FPSTrackingTrainerClient copy={{ title: data.title, subtitle: data.subtitle, caption: ui.caption }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
