import CognitiveHubClient from '@/app/drills/cognitive/CognitiveHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');

export const metadata = {
  title: '무료 두뇌 훈련 & 집중력 테스트 | SkillDrills',
  description: '집중력, 기억력, 반응속도와 정보처리 속도를 훈련하는 무료 두뇌 게임 8종. 브라우저에서 바로 시작하세요.',
  keywords: [
    '두뇌 트레이닝', '두뇌 훈련 무료', '집중력 테스트', '집중력 향상 훈련',
    '인지 기능 훈련', '기억력 테스트', '반응속도 테스트', '정보처리 속도 테스트',
    '스트룹 테스트', '슐테 테이블', '분할 주의력 테스트', '작업 기억 훈련',
    '두뇌 게임', '무료 뇌 운동', '주의력 훈련'
  ],
  openGraph: {
    title: '무료 두뇌 훈련 & 집중력 테스트 | SkillDrills',
    description: '집중력, 기억력, 반응속도와 정보처리 속도를 훈련하는 무료 두뇌 게임 8종. 브라우저에서 바로 시작하세요.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: '무료 온라인 두뇌 트레이닝 및 인지 기능 훈련 도감' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '무료 두뇌 훈련 & 집중력 테스트 | SkillDrills',
    description: '집중력, 기억력, 반응속도를 훈련하는 두뇌 게임 8종을 브라우저에서 무료로 플레이하세요.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive',
    languages: getAlternateLanguages('/ko/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "두뇌 및 인지 기능 훈련", "item": "https://skilldrills.online/ko/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20",
  "name": "무료 온라인 두뇌 트레이닝 & 인지 기능 훈련 도감 (8 Drills)",
  "url": "https://skilldrills.online/ko/drills/cognitive",
  "description": "집중력, 주의력 분할, 작업 처리 속도, 스트룹 억제 제어, 슐테 테이블 등 8가지 신경심리학 기반 인지 훈련을 무료로 제공합니다.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": cognitiveDrills.map((drill) => {
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
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "인지 기능 훈련(Cognitive Training)이란 무엇이며, 뇌에 어떤 생리학적 변화를 일으키나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "인지 기능 훈련은 전전두엽 피질(Prefrontal Cortex)이 관장하는 고차원 실행 기능(Executive Functions)을 강화하기 위해 설계된 표적화된 신경 인지 연습입니다. 단순 암기가 아닌 선택적 주의 집중, 작업 기억 용량, 인지 유연성(규칙 전환), 시각 정보 처리 속도를 지속적으로 자극합니다. 적절한 인지 부하를 가한 연습을 반복하면 같은 종류의 과제 처리에 익숙해집니다."
      }
    },
    {
      "@type": "Question",
      "name": "두뇌 트레이닝 게임이 뇌의 정보 처리 속도(Processing Speed)를 실제로 빠르게 만드나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 시각-운동 루프를 자극하는 타임어택 드릴은 시각 피질에서 두정엽 연합 영역, 운동 실행 영역으로 이어지는 신경 경로의 전달 지연을 단축시킵니다. 목표 자극을 인지하고 입력하는 연습을 반복하면 이 연습 화면에서의 판단과 입력 흐름에 익숙해져 반응 시간이 짧아질 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "단순 집중력(Sustained Focus)과 분할 주의력(Divided Attention)의 차이는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "단순 집중력(지속적 각성)은 청반-노르에피네프린계와 전전두엽이 외부 방해나 잡념을 억제하면서 단일 과제에 장시간 몰입을 유지하는 능력입니다. 반면 분할 주의력(이중 과제 처리)은 배측 및 복측 주의 네트워크를 활성화하여 동시에 주어지는 둘 이상의 독립된 정보 흐름 사이에서 인지 자원을 균형 있게 분배하거나 빠르게 전환하는 멀티태스킹 조율 능력입니다."
      }
    },
    {
      "@type": "Question",
      "name": "스트룹 효과(Stroop Effect)란 무엇이며, 인지 억제 제어 능력을 어떻게 측정하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "스트룹 효과는 자동화된 무의식적 처리(단어 읽기)와 의식적 실행 제어(글자 색상 명명) 사이의 충돌 현상을 나타냅니다. 예를 들어 빨간색 잉크로 쓰인 '파랑'이라는 단어를 볼 때, 전대상피질(ACC)이 충돌을 감지하고 배외측 전전두엽(DLPFC)이 반사적인 단어 읽기 충동을 억제해야 합니다. 일치 조건과 불일치 조건 사이의 반응 시간 차이(간섭 지연)를 통해 충동 억제 제어 및 인지 유연성을 정밀 측정합니다."
      }
    },
    {
      "@type": "Question",
      "name": "슐테 테이블(Schulte Table) 훈련은 주변시와 시각 탐색 속도 향상에 어떤 원리로 작용하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "슐테 테이블은 항공 조종사의 시각 탐색 효율과 속독 능력 측정을 위해 개발된 5x5 숫자 격자 도구입니다. 화면 중앙에 시선을 고정한 채 눈동자를 크게 움직이지 않고 주변시야를 확장하여 1부터 25까지의 숫자를 순서대로 찾아내는 훈련입니다. 이를 통해 망막 주변부의 공간 정보 처리 범위가 넓어져, 목표물을 찾기 위해 필요한 불필요한 도약 안구 운동(Saccades) 횟수를 절반 이하로 줄여줍니다."
      }
    },
    {
      "@type": "Question",
      "name": "두뇌 트레이닝 게임의 효과가 e스포츠나 일상 업무 능력으로 전이(Transfer)되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "훈련한 과제와 비슷한 과제에서의 성적 향상(근접 전이)은 연구에서 보고되었지만, e스포츠나 일상 업무로의 전이는 확립되지 않았고 효과에는 개인차가 있습니다. 시각 탐색, 선택적 주의, 방해 자극 억제를 반복하는 연습은 미니맵 확인이나 적 우선순위 설정과 비슷한 동작의 보조 연습이 될 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "두뇌 및 인지 훈련은 하루에 몇 분 정도 수행하는 것이 뇌 피로 없이 가장 효과적인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "전두엽의 인지 포도당 대사는 매우 빠르기 때문에 세션당 10~15분, 주 3~5회가 황금 루틴입니다. 20분 이상 무리하게 고난도 인지 억제 및 멀티태스킹 과제를 진행하면 중추 신경 피로(Mental Fatigue)가 누적되어 오히려 주의 집중력이 급격히 저하되고 효율이 떨어집니다. 짧고 폭발적인 몰입 후 충분한 뇌 휴식을 취하는 것이 가장 효과적입니다."
      }
    },
    {
      "@type": "Question",
      "name": "두뇌 훈련 게임이 성인 ADHD 집중력 개선 및 뇌 노화 예방에 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "의료나 치료를 대신하지 않습니다. ADHD 개선이나 치매 예방을 나타내는 것이 아니며, 정보 처리 속도와 작업 기억을 사용하는 연습으로 본인의 기록 변화를 확인하는 용도로 이용하세요. 증상이 걱정되면 전문 의료기관과 상담하세요."
      }
    }
  ]
};

export default function LocalizedCognitiveHubClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CognitiveHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
