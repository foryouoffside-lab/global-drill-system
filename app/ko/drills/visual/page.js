import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: '동체시력·시각 탐색 훈련 | 동체시력 테스트 9종 | SkillDrills',
  description: '동체시력 테스트·훈련 게임, 시각 탐색, 주변시, 거리 판단과 시각 반응속도를 연습하는 9개 무료 브라우저 드릴.',
  keywords: ['동체시력 테스트', '동체시력 훈련', '동체시력 게임', '시각 탐색 검사', '반응속도 테스트', '주변시 훈련', '시각 훈련', '눈손협응', '거리 판단 테스트', '다중 객체 추적', '무료 시각 훈련'],
  openGraph: {
    title: '동체시력·시각 탐색 훈련 | 동체시력 테스트 9종 | SkillDrills',
    description: '동체시력, 시각 탐색, 주변시와 거리 판단을 연습하는 9개 무료 브라우저 드릴.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/visual',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: 'SkillDrills 동체시력·시각 탐색 훈련' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '동체시력·시각 탐색 훈련 | SkillDrills',
    description: '동체시력과 시각 탐색을 연습하는 9개 무료 드릴.',
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual',
    languages: getAlternateLanguages('/drills/visual'),
  },
};

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
  "dateModified": "2026-11-12",
  "name": "동체시력·시각 탐색 훈련 (9개 드릴)",
  "url": "https://skilldrills.online/ko/drills/visual",
  "description": "움직이는 표적 추적, 다중 객체 추적, 시각 반응속도, 시각 탐색과 거리 판단을 브라우저에서 연습하는 9개 시각 드릴.",
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
  "dateModified": "2026-11-12",
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
      "name": "거리 판단 드릴은 입체시 검사인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 평면 모니터에는 양안 시차가 없으므로 입체시를 검사할 수 없습니다. 다가오는 구가 화면에서 커지는 모습을 보고 표시된 거리에 닿는 순간 클릭하는 거리·타이밍 판단 연습입니다."
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
      "name": "시각 드릴 기록은 어떻게 비교하면 좋나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "같은 기기와 설정에서 여러 세션의 기록을 비교하세요. 화면 주사율, 입력 지연, 피로에 따라 결과가 달라질 수 있습니다."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  { "@type": "Question", "name": "이 시각 훈련 목록에는 몇 가지 드릴이 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "목록에는 반응·충동 억제, 목표 추적·안구 움직임, 시각 인식·거리 판단의 세 영역으로 나뉜 9개 브라우저 드릴이 있습니다. 카드를 선택하면 해당 드릴을 열 수 있습니다." } },
  { "@type": "Question", "name": "브라우저 시각 드릴은 무엇을 측정하나요?", "acceptedAnswer": { "@type": "Answer", "text": "화면에서 반응, 추적, 탐색과 공간 판단을 반복 측정하는 훈련입니다. 같은 기기에서 기록을 비교하며 연습하세요." } }
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
