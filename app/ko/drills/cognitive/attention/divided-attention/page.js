import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "분할 주의력 테스트 | 이중과제 훈련 | SkillDrills",
  description: "무료 브라우저 분할 주의력 테스트로 움직이는 표적 추적과 숫자 분류를 동시에 연습하세요. 의료 진단이 아닌 인지 자기 점검입니다.",
  keywords: ["분할 주의력 테스트", "분할주의력 검사", "이중과제 훈련", "듀얼태스크 연습", "멀티태스킹 뇌 훈련", "주의력 분할", "시지각 동시처리", "인지속도 검사", "뇌 기능 트레이닝",
    "분할주의력훈련",
    "듀얼태스크검사"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "분할 주의력 테스트・이중과제 훈련 – 듀얼태스크 인지능력 측정 | SkillDrills",
    description: "무료 브라우저 주의분할(이중과제) 테스트 도구. 움직이는 시각 표적 추적과 연속 숫자 분류를 동시에 수행하여 심리적 불응기(PRP)와 대뇌의 병목 정보처리 능력을 밀리초 단위로 정밀 측정합니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "분할 주의력 테스트・이중과제 훈련 – 듀얼태스크 인지능력 측정 | SkillDrills",
    description: "무료 브라우저 주의분할(이중과제) 테스트 도구. 움직이는 시각 표적 추적과 연속 숫자 분류를 동시에 수행하여 심리적 불응기(PRP)와 대뇌의 병목 정보처리 능력을 밀리초 단위로 정밀 측정합니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills 홈",
      "item": "https://skilldrills.online/ko"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "훈련 허브",
      "item": "https://skilldrills.online/ko/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "인지·집중력 훈련",
      "item": "https://skilldrills.online/ko/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "주의분할 테스트",
      "item": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "주의분할 이중과제 인지능력 트레이너",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 브라우저 주의분할(이중과제) 테스트 도구. 움직이는 시각 표적 추적과 연속 숫자 분류를 동시에 수행하여 심리적 불응기(PRP)와 대뇌의 병목 정보처리 능력을 밀리초 단위로 정밀 측정합니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "주의분할 테스트・이중과제 훈련 – 듀얼태스크 인지능력 측정",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention",
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "주의분할 테스트 – 시각 표적 추적 및 숫자 판별 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention",
  "description": "무료 브라우저 주의분할(이중과제) 테스트 도구. 움직이는 시각 표적 추적과 연속 숫자 분류를 동시에 수행하여 심리적 불응기(PRP)와 대뇌의 병목 정보처리 능력을 밀리초 단위로 정밀 측정합니다.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "주의분할(Divided Attention)이란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "두 개 이상의 독립적인 정보 흐름에 주의 자원을 동시에 배분하여 다중 작업을 병렬로 처리하는 고차원 인지 기능입니다."
      }
    },
    {
      "@type": "Question",
      "name": "심리적 불응기(PRP, Pashler 1994)란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "두 번째 자극이 첫 번째 자극 직후에 주어졌을 때, 뇌의 중심 의사결정 기전이 점유되어 두 번째 반응이 지연되는 현상입니다."
      }
    },
    {
      "@type": "Question",
      "name": "위켄스의 다중자원 이론(Wickens, 2002)의 핵심은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "공간 시각 과제와 언어/숫자 과제처럼 서로 다른 감각 및 인지 자원을 사용할 때 간섭이 최소화되어 효과적으로 주의를 분할할 수 있다는 이론입니다."
      }
    },
    {
      "@type": "Question",
      "name": "훈련을 통해 듀얼태스크 수행력이 향상되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, Spelke et al.(1976)의 연구처럼 반복 훈련을 통해 한쪽 작업이 자동화(Automatization)되면 병목 현상이 완화되어 두 과제를 모두 정확하게 처리할 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "실제 일상생활이나 e스포츠에서 어떤 효과가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "복잡한 운전 상황에서 계기판과 전방 도로를 동시에 파악하거나, 게임 중 교전과 미니맵 분석을 동시에 해내는 능력을 강화합니다."
      }
    },
    {
      "@type": "Question",
      "name": "최상위 연습 단계의 기준 점수는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "15,000점 이상 및 양쪽 채널 종합 정확도 92% 이상을 기록하면 최고 등급에 해당합니다."
      }
    },
    {
      "@type": "Question",
      "name": "수면 부족이 주의분할에 미치는 악영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "피로는 대뇌 피질의 인지 대역폭을 급감시켜 부차적 신호를 완전히 인지하지 못하는 '터널 시야'를 유발합니다."
      }
    },
    {
      "@type": "Question",
      "name": "디스플레이 주사율의 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "144Hz 이상의 고주사율은 표적의 궤적을 선명하게 유지하여(Woods et al., 2015) 시지각 계산 부담을 줄여줍니다."
      }
    },
    {
      "@type": "Question",
      "name": "가장 효과적인 훈련 루틴은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "하루 10~15분 동안 진행하는 것이 신경계 피로 없이 이어가기 좋은 방법입니다."
      }
    },
    {
      "@type": "Question",
      "name": "설치 없이 바로 이용 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 브라우저에서 아무런 설치 없이 100% 무료로 즉시 사용할 수 있습니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "주의분할 테스트・이중과제 훈련",
  "description": "무료 브라우저 주의분할(이중과제) 테스트 도구. 움직이는 시각 표적 추적과 연속 숫자 분류를 동시에 수행하여 심리적 불응기(PRP)와 대뇌의 병목 정보처리 능력을 밀리초 단위로 정밀 측정합니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "이중 스트림 세션 개시",
      "text": "시작 버튼을 눌러 시각 표적 캔버스와 우측 숫자 스트림을 동시에 활성화합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "비행 타깃 추적 및 타격",
      "text": "화면을 떠다니는 파란색 표적을 관찰하고 사라지기 전에 클릭하여 시간을 보충합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "숫자 패널 짝수 실시간 판별",
      "text": "우측 패널에 짝수(0, 2, 4, 6, 8)가 뜨는 순간 MATCH 버튼을 즉시 탭합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "양방향 정확도 균형 유지",
      "text": "어느 한쪽 채널도 놓치지 않고 완벽한 타이밍을 유지하여 콤보 배수를 극대화합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "주의분할 테스트・이중과제 훈련 – 듀얼태스크 인지능력 측정",
    paragraphs: [
      "무료 브라우저 주의분할(이중과제) 테스트 도구. 움직이는 시각 표적 추적과 연속 숫자 분류를 동시에 수행하여 심리적 불응기(PRP)와 대뇌의 병목 정보처리 능력을 밀리초 단위로 정밀 측정합니다.",
      "두 번째 자극이 첫 번째 자극 직후에 주어졌을 때, 뇌의 중심 의사결정 기전이 점유되어 두 번째 반응이 지연되는 현상입니다.",
      "공간 시각 과제와 언어/숫자 과제처럼 서로 다른 감각 및 인지 자원을 사용할 때 간섭이 최소화되어 효과적으로 주의를 분할할 수 있다는 이론입니다.",
    ],
  },
  benchmarks: {
    title: '인지 수행 능력 표준 평가 벤치마크',
    note: '단계는 SkillDrills가 정한 연습용 참고 구분이며 인구 통계나 백분위가 아닙니다.',
    headers: ['등급 (Tier)', '호칭 (Rank)', '평가 기준', '도달 수준', '정확도', '연습 단계'],
    rows: [
      { tier: 'Tier 1', rank: '다중처리 최상위 단계', stat: '최상위 단계', level: '마스터리 (최상위)', accuracy: '98% 이상', percentile: '최상위 단계' },
      { tier: 'Tier 2', rank: '고급 주의분할자', stat: '상급 단계', level: '다이아몬드 (우수)', accuracy: '94–97%', percentile: '상급 단계' },
      { tier: 'Tier 3', rank: '숙련 듀얼태스커', stat: '중상급 단계', level: '플래티넘 (숙련)', accuracy: '88–93%', percentile: '중상급 단계' },
      { tier: 'Tier 4', rank: '일반 성인 표준', stat: '표준 단계', level: '골드 (표준)', accuracy: '78–87%', percentile: '표준 단계' },
      { tier: 'Tier 5', rank: '초보 / 입문 기준선', stat: '기준선 (기초)', level: '실버 (기초)', accuracy: '78% 미만', percentile: '기준선 (하위)' },
    ],
  },
  protocols: {
    title: '두뇌 처리 속도와 집중력을 극대화하는 4대 훈련 프로토콜',
    description: '인지심리학의 다중자원 이론(Wickens, 2002)과 심리적 불응기(PRP) 극복을 위한 과학적 이중과제 훈련 프로토콜입니다.',
    items: [
      { title: "이중 스트림 세션 개시", description: "시작 버튼을 눌러 시각 표적 캔버스와 우측 숫자 스트림을 동시에 활성화합니다." },
      { title: "비행 타깃 추적 및 타격", description: "화면을 떠다니는 파란색 표적을 관찰하고 사라지기 전에 클릭하여 시간을 보충합니다." },
      { title: "숫자 패널 짝수 실시간 판별", description: "우측 패널에 짝수(0, 2, 4, 6, 8)가 뜨는 순간 MATCH 버튼을 즉시 탭합니다." },
      { title: "양방향 정확도 균형 유지", description: "어느 한쪽 채널도 놓치지 않고 완벽한 타이밍을 유지하여 콤보 배수를 극대화합니다." },
    ],
  },
  faqs: {
    title: '자주 묻는 질문 (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function LocalizedCognitivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <DividedAttentionClient copy={{
        title: "분할 주의력 테스트",
        subtitle: "움직이는 표적과 숫자를 동시에 처리하는 이중과제 훈련",
        statScore: "점수", statTime: "시간", timeLeft: "남은 시간", statLevel: "레벨", statBest: "최고 점수",
        match: "판정", evenNumbers: "짝수", tapEven: "짝수일 때 누르기", startTitle: "분할 주의력 테스트", startSubtitle: "이중과제 · 집중 전환",
        getReady: "준비하세요", dualAccuracy: "통합 정확도", hits: "성공", misses: "실수", peakLevel: "최고 레벨",
        caption: "움직이는 표적을 추적하면서 숫자 흐름에서 짝수를 동시에 판정하세요.",
        rulesTitle: "드릴 안내 및 점수 기준", ruleItems: [
          { text: "표적 맞히기", highlight: "+시간", result: "움직이는 표적 클릭" },
          { text: "짝수 판정", highlight: "정확히 누르기", result: "짝수일 때 판정" },
          { text: "홀수 무시", highlight: "오입력 없음", result: "홀수에는 누르지 않기" },
          { text: "두 채널 균형", highlight: "콤보 유지", result: "추적과 판정 모두 정확하게" },
        ],
        aboutTitle: "분할 주의력 테스트와 이중과제 훈련", aboutLead: "이 드릴은 움직이는 시각 표적 추적과 숫자 분류를 동시에 요구하는 비임상 인지 자기 점검입니다.",
        audienceTitle: "추천 대상", audienceText: "게임 중 미니맵과 목표를 함께 보는 플레이어, 학습자, 여러 입력을 빠르게 처리해야 하는 사람에게 적합합니다.",
        skillsTitle: "훈련하는 능력", skillsText: "이중과제 처리, 시각 추적, 숫자 판단, 주의 자원 배분을 연습합니다.", flexibilityTitle: "병렬 처리", flexibilityText: "두 정보 흐름을 번갈아 확인하면서 한쪽의 정확도가 무너지지 않도록 조절합니다."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
