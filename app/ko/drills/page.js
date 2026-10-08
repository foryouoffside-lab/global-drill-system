import DrillsDirectoryClient from '@/app/drills/DrillsDirectoryClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildDirectoryMetadata, getDirectoryCollectionFields } from '@/lib/i18n/siteLandingSeoNative';

const legacyMetadata = {
  title: '에임 연습 & 두뇌 훈련 81종 무료 드릴 모음 | SkillDrills',
  description: '8개 핵심 카테고리 81종의 무료 온라인 피지컬 훈련. 발로란트 에임 연습, 반응속도 테스트, 시각 추적, 기억력 게임, 인지 능력 향상 드릴을 설치 없이 브라우저에서 즉시 시작하세요.',
  keywords: [
    '무료 에임 연습 사이트', '발로란트 에임 연습', '반응속도 테스트',
    '두뇌 훈련 게임', '기억력 테스트 게임', '시각 추적 훈련',
    '마우스 정확도 측정', 'cps 측정 사이트', '반사신경 테스트',
    '동체시력 테스트', '작업기억력 향상 게임', '순발력 훈련',
    '스트룹 검사 온라인', '공간지각력 테스트', '피지컬 트레이닝 온라인'
  ],
  openGraph: {
    title: '에임 연습 & 두뇌 훈련 81종 무료 드릴 모음 | SkillDrills',
    description: '8개 핵심 카테고리 81종의 무료 온라인 피지컬 훈련. 발로란트 에임 연습, 반응속도 테스트, 시각 추적, 기억력 게임, 인지 능력 향상 드릴을 설치 없이 브라우저에서 즉시 시작하세요.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{
      url: 'https://skilldrills.online/icons/icon-512x512.png',
      width: 512,
      height: 512,
      alt: 'SkillDrills 전체 훈련 드릴 도감',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '에임 연습 & 두뇌 훈련 81종 무료 드릴 모음 | SkillDrills',
    description: '8대 분야 81종의 무료 온라인 에임 트레이너, 반응속도, 두뇌 인지 훈련.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills',
    languages: getAlternateLanguages('/ko/drills'),
  },
};

const directoryMetadata = buildDirectoryMetadata('ko', 'https://skilldrills.online/ko/drills', DRILLS.length, getAlternateLanguages('/ko/drills'));
const socialImage = 'https://skilldrills.online/opengraph-image';

export const metadata = {
  ...legacyMetadata,
  ...directoryMetadata,
  openGraph: { ...directoryMetadata.openGraph, images: [{ url: socialImage, width: 1200, height: 630, alt: '에임 연습 사이트·반응속도 테스트 | SkillDrills' }] },
  twitter: { ...directoryMetadata.twitter, images: [socialImage] },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills 홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "전체 에임 연습 및 인지 신체 훈련 도감 (81종)",
  "url": "https://skilldrills.online/ko/drills",
  "description": "8대 핵심 분야 81종의 과학적 인터랙티브 훈련 드릴 모음. 에임 트레이너, 반응속도, 시각 추적, 인지 제어, 기억력 평가.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": DRILLS.map((drill) => {
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "무료 에임 연습 사이트로 쓸 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네. 에임 트레이너, 플릭샷, 트래킹 에임 드릴을 가입이나 설치 없이 브라우저에서 바로 실행할 수 있습니다. 마우스를 쓰는 FPS 드릴은 데스크톱 환경을 권장하며, 발로란트·오버워치·카스2 같은 게임의 감도와 비슷하게 맞춰 연습하면 감각을 옮기기 쉽습니다."
      }
    },
    {
      "@type": "Question",
      "name": "반응속도 테스트 평균은 몇 ms인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면 신호에 반응하는 단순 시각 반응시간은 연구에 따라 대체로 200~300ms 범위로 보고됩니다(Woods 외, 2015). 모니터 주사율, 마우스 폴링레이트, 브라우저 지연이 더해져 같은 사람도 기기마다 값이 달라지므로, 같은 기기에서 본인의 기록 변화를 비교하는 것이 가장 정확합니다."
      }
    },
    {
      "@type": "Question",
      "name": "처음이라면 어떤 드릴부터 시작하면 좋을까요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "목적에 따라 고르세요. 클릭 속도는 CPS 측정, 반사신경은 반응속도 테스트, 에임은 플릭샷과 트래킹 연습, 기억력은 숫자 기억 드릴부터 시작하면 됩니다. 분야별 허브에서 드릴 설명과 난이도를 확인한 뒤 짧은 세션부터 반복해 보세요."
      }
    },
    {
      "@type": "Question",
      "name": "FPS 게임 전 워밍업은 어떻게 구성하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "예시 루틴은 15분입니다. 반응속도 테스트로 감각을 깨우고, 플릭샷으로 빠른 조준을, 부드러운 추적 드릴로 움직이는 표적 따라가기를, 타깃 전환 드릴로 여러 표적의 우선순위 판단을 연습합니다. 개인차가 크므로 본인에게 맞게 시간을 조절하세요."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율과 마우스 설정이 점수에 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "영향을 줍니다. 60Hz 모니터는 한 프레임이 약 16.7ms, 144Hz는 약 6.9ms, 240Hz는 약 4.2ms이므로 화면 표시 지연이 달라지고 마우스 폴링레이트도 입력 지연에 더해집니다. 점수는 다른 사람과 비교하기보다 같은 환경에서 본인의 변화를 추적하는 용도로 쓰세요."
      }
    },
    {
      "@type": "Question",
      "name": "점수와 기록은 어디에 저장되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "최고 점수와 설정은 사용자의 브라우저 저장소에 보관됩니다. 로그인이나 회원가입이 필요 없으며, 브라우저 데이터를 지우거나 다른 기기에서 접속하면 기록이 보이지 않을 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "스마트폰이나 태블릿에서도 훈련할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "반응속도 테스트, 기억력 게임, 인지 판단 드릴처럼 터치로 진행되는 드릴은 모바일에서도 실행할 수 있습니다. 포인터 잠금과 정밀한 마우스 제어가 필요한 FPS 에임 트레이너와 정밀 모터 드릴은 마우스가 연결된 데스크톱 환경을 권장합니다."
      }
    },
    {
      "@type": "Question",
      "name": "하루에 얼마나 훈련하는 것이 좋을까요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정해진 정답은 없지만 지친 상태로 길게 하기보다 집중이 유지되는 15~25분 안팎의 짧은 세션을 자주 하는 방식이 부담이 적습니다. 눈이나 손목이 피로하면 쉬고, 세션 사이에 1~2분 휴식을 두며 통증이 있으면 중단하세요."
      }
    }
  ]
};

Object.assign(collectionSchema, getDirectoryCollectionFields('ko', DRILLS.length));

export default function LocalizedDirectoryPage() {
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
      <DrillsDirectoryClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
