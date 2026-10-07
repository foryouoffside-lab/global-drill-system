import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: '시각 훈련 & 동체시력·입체시 테스트 | SkillDrills',
  description: '동체시력, 입체시(원근감), 시각 반응속도, 다중 객체 추적(MOT), 시각 탐색 훈련 등 9가지 신경과학 기반 무료 시각 기능 훈련 및 시력 검사 도구.',
  keywords: [
    '동체시력 테스트', '동체시력 훈련 게임', '입체시 검사',
    '원근감 테스트', '눈 운동 훈련 프로그램', '시각 반응속도 검사',
    '빛 반응속도 테스트', '다중 객체 추적 검사', '주변 시야 테스트',
    '시각 탐색 훈련', '안구 운동 트레이닝', '스무스 퍼슈트 눈 운동',
    '시각 주의력 검사', '선택적 주의력 테스트', '스포츠 시각 훈련 도구'
  ],
  openGraph: {
    title: '시각 훈련 & 동체시력·입체시 테스트 | SkillDrills',
    description: '동체시력, 입체시(원근감), 시각 반응속도, 다중 객체 추적(MOT), 시각 탐색 훈련 등 9가지 신경과학 기반 무료 시각 기능 훈련 및 시력 검사 도구.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/visual',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: 'SkillDrills 시각 기능 및 동체시력 훈련' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '시각 훈련 & 동체시력·입체시 테스트 | SkillDrills',
    description: '동체시력, 입체시(원근감), 다중 객체 추적(MOT), 시각 반응속도 등 9가지 신경과학 기반 무료 시각 훈련 도구.',
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual',
    languages: getAlternateLanguages('/ko/drills/visual'),
  },
};

Object.assign(metadata, {
  title: '동체시력·시각 탐색 훈련 | 동체시력 테스트 9종 | SkillDrills',
  description: '동체시력 테스트·훈련 게임, 시각 탐색, 주변시, 거리 판단과 시각 반응속도를 연습하는 9개 무료 브라우저 드릴.',
  keywords: ['동체시력 테스트', '동체시력 훈련', '동체시력 게임', '시각 탐색 검사', '반응속도 테스트', '주변시 훈련', '시각 훈련', '눈손협응', '거리 판단 테스트', '다중 객체 추적', '무료 시각 훈련'],
  openGraph: { ...metadata.openGraph, title: '동체시력·시각 탐색 훈련 | 동체시력 테스트 9종 | SkillDrills', description: '동체시력, 시각 탐색, 주변시와 거리 판단을 연습하는 9개 무료 브라우저 드릴.' },
  twitter: { ...metadata.twitter, title: '동체시력·시각 탐색 훈련 | SkillDrills', description: '동체시력과 시각 탐색을 연습하는 9개 무료 드릴.' },
  alternates: { ...metadata.alternates, languages: getAlternateLanguages('/drills/visual') },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "퍼포먼스 훈련", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각 인지 & 동체시력", "item": "https://skilldrills.online/ko/drills/visual" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ko",
  "dateModified": "2026-09-20",
  "name": "시각 기능 훈련 & 동체시력 검사 (9개 종목)",
  "url": "https://skilldrills.online/ko/drills/visual",
  "description": "동체시력, 입체시 검사, 광학 반응속도, 다중 객체 추적, 시각 탐색 및 주기 분해능을 평가하는 9가지 시각 인지 훈련.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": visualDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ko', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ko${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ko",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "동체시력 훈련은 구기 종목이나 FPS 게임에 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "동체시력은 움직이는 대상을 선명하게 따라 보는 능력을 가리킵니다. 이 사이트의 추적 드릴은 움직이는 표적을 눈으로 따라가는 연습을 제공하지만, 야구·테니스나 FPS 게임 실력이 향상된다고 보장하지는 않습니다. 같은 기기에서 본인의 기록 변화를 확인하는 보조 연습으로 쓰세요."
      }
    },
    {
      "@type": "Question",
      "name": "원근감·입체시 테스트는 무엇을 연습하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면 속 물체의 거리를 비교해 판단하는 과제입니다. 양안 시차를 정밀하게 재는 임상 입체시 검사가 아니므로 진단에 쓸 수 없으며, 거리 판단을 연습하는 용도로만 활용하세요."
      }
    },
    {
      "@type": "Question",
      "name": "다중 객체 추적(MOT) 훈련은 어떤 연습인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "여러 움직이는 대상 중 지정된 표적을 계속 추적하는 과제로, 분할 주의와 시각 작업기억을 사용합니다. 유효 시야가 넓어지거나 운전·구기 종목 상황에 전이된다는 보장은 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "스무스 퍼슈트 안구 운동 훈련이란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "움직이는 표적을 시선이 끊기지 않게 부드럽게 따라가는 안구 운동 연습입니다. 표적이 빠르면 시선이 도약(사카드)으로 끊길 수 있습니다. 눈이 피로하면 쉬고, 통증이나 이상이 있으면 중단하세요."
      }
    },
    {
      "@type": "Question",
      "name": "광 반응속도 검사와 일반 반응속도 테스트는 어떻게 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "두 과제 모두 화면 신호를 보고 입력하는 시간을 재며, 신호의 종류와 판단 단계가 다릅니다. 측정값에는 화면 표시와 입력 장치의 지연이 포함되므로 의학적 신경 전달 지연으로 해석할 수 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "시각 탐색 훈련은 어떤 능력을 연습하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "방해 자극 속에서 표적을 찾아내는 시각 탐색과 선택적 주의를 연습합니다. 복잡한 화면에서 정보를 찾는 속도에 도움이 될 수 있지만, 일상 전이 효과는 개인차가 있고 보장되지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "시각 훈련 세션은 얼마나 자주 하는 것이 좋을까요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정해진 정답은 없습니다. 눈이 피로하지 않도록 10~20분 안팎의 짧은 세션을 주 몇 회 하고, 중간에 먼 곳을 보며 쉬는 방식이 부담이 적습니다. 통증이나 두통이 있으면 중단하세요."
      }
    },
    {
      "@type": "Question",
      "name": "브라우저 시각 훈련이 임상 시각 훈련이나 스포츠 비전 트레이닝을 대신할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "대신할 수 없습니다. 무료 브라우저 연습과 개인 기록 도구이며, 효과가 임상적으로 입증된 것은 아닙니다. 시력이나 안구 운동에 걱정이 있다면 안과 전문의와 상담하세요."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  { "@type": "Question", "name": "이 시각 훈련 목록에는 몇 가지 드릴이 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "목록에는 반응·충동 억제, 목표 추적·안구 움직임, 시각 인식·거리 판단의 세 영역으로 나뉜 9개 브라우저 드릴이 있습니다. 카드를 선택하면 해당 드릴을 열 수 있습니다." } },
  { "@type": "Question", "name": "브라우저 시각 드릴이 안과 시력검사를 대신할 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "아닙니다. 화면에서 반응, 추적, 탐색과 공간 판단을 반복 측정하는 훈련이며 시력이나 안질환을 진단하지 않습니다. 필요한 검사는 안과 전문의에게 상담하세요." } }
);

export default function VisualDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VisualDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
