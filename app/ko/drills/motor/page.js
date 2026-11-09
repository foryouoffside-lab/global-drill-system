import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: '마우스 연습 | 에임·클릭속도·정확도 무료 훈련 | SkillDrills',
  description: '무료 마우스 연습 게임 8종. 움직이는 타겟 클릭, 과녁 중앙 맞히기, 45초 CPS 측정, 드래그 앤 드롭, 좁은 통로 통과, 경로 따라가기, 키 인식 반응까지 브라우저에서 바로 기록하세요.',
  keywords: [
    '마우스 연습', '마우스 연습 게임', '마우스 연습 사이트', '마우스 컨트롤 훈련',
    '눈손 협응력 훈련',
    '마우스 미세 제어', '손 안정성 훈련', '게이밍 마우스 정확도',
    '손가락 민첩성 훈련', '무료 모터 스킬 드릴'
  ],
  openGraph: {
    title: '마우스 연습 | 에임·클릭속도·정확도 무료 훈련 | SkillDrills',
    description: '무료 마우스 연습 게임 8종. 움직이는 타겟 클릭, 과녁 중앙 맞히기, 45초 CPS 측정, 드래그 앤 드롭, 좁은 통로 통과, 경로 따라가기, 키 인식 반응까지 브라우저에서 바로 기록하세요.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/motor',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: '마우스 연습 게임 | SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '마우스 연습 | 에임·클릭속도·정확도 무료 훈련 | SkillDrills',
    description: '무료 마우스 연습 게임 8종. 움직이는 타겟 클릭, 과녁 중앙 맞히기, 45초 CPS 측정, 드래그 앤 드롭, 좁은 통로 통과, 경로 따라가기, 키 인식 반응까지 브라우저에서 바로 기록하세요.',
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/motor',
    languages: getAlternateLanguages('/ko/drills/motor'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "모터 스킬 & 마우스 정밀도", "item": "https://skilldrills.online/ko/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09",
  "name": "마우스 연습 게임 (8종)",
  "url": "https://skilldrills.online/ko/drills/motor",
  "description": "마우스 정확도, 에임 제어, CPS 클릭, 키 인식 반응과 눈손 협응을 연습하는 무료 브라우저 드릴 8종.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": motorDrills.map((drill) => {
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
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "이 마우스 연습 게임들은 무엇을 훈련하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "움직이는 타겟 클릭(에임 연습), 과녁 중앙 맞히기, 순서대로 클릭, 드래그 앤 드롭, 45초 CPS 측정, 벽에 닿지 않고 좁은 통로 통과, 움직이는 점 따라가기, 화면에 나온 키 누르기까지 8가지 마우스 연습입니다. 눈과 손의 협응과 커서 조작을 반복 연습하며, 개선 폭은 개인차가 있으니 같은 기기에서 본인 기록을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "평균적인 CPS(초당 클릭 수)는 얼마이며, 주요 클릭 기술은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CPS는 기기, 클릭 방식, 측정 시간에 따라 크게 달라지므로 공인된 평균값은 없습니다. 흔히 쓰이는 방식은 일반 클릭, 지터 클릭(팔 근육을 긴장시켜 손가락을 빠르게 떨게 하는 방식), 버터플라이 클릭(두 손가락으로 번갈아 누르는 방식)입니다. SkillDrills CPS 측정은 45초 동안 마우스 클릭을 세어 평균 CPS를 보여 주며, 같은 기기에서 본인 기록을 비교하는 용도로 쓰는 것이 좋습니다."
      }
    },
    {
      "@type": "Question",
      "name": "마우스 경로 추적과 손떨림 제어 훈련은 어떻게 에임 흔들림을 제거하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "마우스 오버슈팅(목표를 지나치는 현상)과 불규칙한 손떨림은 길항근의 감속 능력 부족에서 비롯됩니다. 좁아지는 통로 통과 훈련과 사인파 추적 드릴은 서브픽셀 단위의 정밀한 커서 제어를 강제하여 손목과 전완근의 안정화 근섬유를 단련하고 미세 떨림을 억제합니다."
      }
    },
    {
      "@type": "Question",
      "name": "피츠의 법칙(Fitts's Law)이란 무엇이며, 어떻게 속도와 정확도를 최적화하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "피츠의 법칙은 이동 시간이 목표 거리와 목표 너비의 비율에 로그 비례한다는 인간-컴퓨터 상호작용 원리입니다(MT = a + b * log2(2D/W)). 정밀 훈련은 거리의 80~90%를 빠르게 도달하는 1단계 탄도식 고속 이동 후, 감속하며 오버슈팅 없이 목표를 정확히 타격하는 2단계 미세 제어로 연결됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "키보드 키 인식 드릴은 무엇을 연습하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면에 표시되는 키(영문, 숫자, WASD, 방향키 등)를 보고 60초 동안 빠르고 정확하게 누르는 반응 드릴입니다. 가짜 프롬프트는 누르지 않아야 합니다. 타자 속도(타수) 측정이나 키보드 하드웨어 검사 도구는 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "브라우저 기반 마우스 및 키보드 테스트는 얼마나 정확한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "브라우저 타이머는 performance.now()를 사용하며 값은 브라우저 보안 설정에 따라 반올림될 수 있습니다. 전체 측정은 디스플레이 주사율(120Hz 약 8ms, 60Hz 약 16ms)과 마우스/키보드 폴링레이트(1000Hz 약 1ms)의 하드웨어 한계 내에서 작동하며, 브라우저 환경에서 장치 성능 및 개인 기록 향상을 추적하기에 충분한 정밀도를 제공합니다."
      }
    },
    {
      "@type": "Question",
      "name": "마우스 감도(DPI 및 인게임 감도)와 eDPI 설정이 모터 스킬 형성에 미치는 영향은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DPI(인치당 도트 수)와 인게임 감도의 곱인 eDPI는 손목, 전완근, 어깨의 운동 단위(Motor Unit) 동원 비율을 결정합니다. 고감도는 손목과 손가락의 미세 근육(소근육)에 의존하여 빠른 180도 회전에 유리하지만 미세 조준 시 손떨림에 취약합니다. 반면 저감도는 팔 전체의 대근육을 활용하여 일관된 궤적과 안정성을 제공합니다. 모터 훈련 시 일관된 eDPI를 유지해야 소뇌의 근육 기억(Muscle Memory) 내부 모델이 왜곡 없이 정립됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "키보드 채터링(Chattering)과 고스팅(Ghosting) 현상은 타건 정확도에 어떤 문제를 일으키나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "채터링은 기계식 스위치의 접점 바운스 현상으로 단일 키 입력이 2회 이상 중복 인식되는 하드웨어 결함이며, 고스팅은 매트릭스 신호 간섭으로 누르지 않은 키가 오작동하거나 3개 이상의 동시 입력이 누락되는 문제입니다. 키보드 반응 드릴은 키 입력이 인식되는 시점을 기록해 입력 지연을 확인하는 데 참고할 수 있지만, 스위치 불량 진단이나 NKRO 보증을 위한 전용 검사 도구는 아닙니다."
      }
    }
  ]
};

export default function KoreanMotorHubPage() {
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
      <MotorDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

