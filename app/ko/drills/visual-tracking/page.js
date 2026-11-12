import VisualTrackingDrillsClient from '@/app/drills/visual-tracking/VisualTrackingDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');

const baseMetadata = buildVisualTrackingHubMetadata('ko', 'https://skilldrills.online/ko/drills/visual-tracking', trackingDrills.length, getAlternateLanguages('/drills/visual-tracking'));

export const metadata = {
  ...baseMetadata,
  keywords: ['동체시력 훈련', '시각 추적 훈련', '안구 운동', '움직이는 표적 추적', '주변시 훈련', '부드러운 안구 추종', '궤적 예측', '무료 브라우저 훈련'],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "동체시력 및 시각 추적", "item": "https://skilldrills.online/ko/drills/visual-tracking" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://skilldrills.online/ko/drills/visual-tracking",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  ...getVisualTrackingHubCollectionFields('ko', trackingDrills.length),
  "dateModified": "2026-11-12",
  "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Peripheral_vision"],
  "hasPart": trackingDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ko', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ko${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "부드러운 안구 추종과 도약 안구 운동(사카드)은 어떻게 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "부드러운 안구 추종은 움직이는 표적을 눈으로 끊김 없이 따라가는 움직임이고, 사카드는 한 지점에서 다른 지점으로 시선을 빠르게 옮기는 움직임입니다. 이 드릴들은 주로 추종을 요구하지만, 사이트가 실제 눈의 움직임을 측정하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "동체시력 훈련이 스포츠나 FPS 실력을 올려 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "드릴은 움직이는 표적을 시선과 마우스로 따라가고 경로 변화에 대응하는 연습입니다. 스포츠나 FPS 실력 향상은 보장되지 않습니다. 보조 연습으로 활용하고 같은 기기에서 자신의 기록끼리 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "어떤 종류의 추적 드릴이 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "사인파, 8자(무한대) 경로, 지그재그, 삼각형, 계단식 상하 이동, 갑작스러운 방향 전환, 순간이동하는 표적, 분할 화면, 스트로브 예측, 주변 신호 등 15가지 경로와 과제가 있습니다. 경로 모양과 속도 변화가 각 드릴의 차이입니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율이 결과에 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네. 60Hz 화면은 약 16.7ms, 144Hz는 6.9ms, 240Hz는 4.1ms마다 화면을 갱신하므로 빠른 표적의 움직임이 다르게 보일 수 있습니다. 같은 화면, 마우스, 브라우저로 기록을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "하루에 얼마나 연습하면 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "검증된 최적 시간은 없습니다. 짧고 규칙적으로 연습하고, 중간에 먼 곳을 바라보며 쉬고, 피로·두통·어지럼이 느껴지면 멈추세요."
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('ko');
const enrichedFaqSchema = { ...faqSchema, ...faqFields, dateModified: "2026-11-12", mainEntity: [...faqSchema.mainEntity, ...additions] };

export default function LocalizedVisualTrackingDrillsClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedFaqSchema) }} />
      <VisualTrackingDrillsClient
        faqs={enrichedFaqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

