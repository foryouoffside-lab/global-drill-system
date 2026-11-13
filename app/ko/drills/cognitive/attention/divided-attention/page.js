import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "분할 주의력 테스트 | 이중과제 훈련 | SkillDrills",
  description: "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
  keywords: ["분할 주의력 테스트", "분할주의력 검사", "이중과제 훈련", "듀얼태스크 연습", "멀티태스킹 뇌 훈련", "주의력 분할", "시지각 동시처리", "인지속도 검사", "뇌 기능 트레이닝",
    "분할주의력훈련",
    "듀얼태스크검사"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "분할 주의력 테스트 | 이중과제 훈련 | SkillDrills",
    description: "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "분할 주의력 테스트 | 이중과제 훈련 | SkillDrills",
    description: "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
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
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-12"
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
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "주의분할 테스트 – 시각 표적 추적 및 숫자 판별 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention",
  "description": "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
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
        "text": "반복하면 이 드릴의 점수는 오를 수 있지만 다른 과제나 일상으로의 향상은 보장되지 않습니다. Spelke et al.(1976)은 장기간 연습으로 두 과제를 함께 수행하는 능력이 좋아진 사례를 보고했습니다."
      }
    },
    {
      "@type": "Question",
      "name": "실제 일상생활이나 e스포츠에서 어떤 효과가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "운전 중 계기판과 도로, 게임 중 교전과 미니맵처럼 두 정보 흐름을 함께 보는 부담을 연습합니다. 실제 운전이나 경기 실력 향상을 보장하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "결과 등급은 어떻게 정해지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "등급은 점수로 정해지며 24,000점이 최고 등급 기준입니다. 정답마다 기본 100점에 콤보 배수와 레벨 배수가 곱해집니다. 정확도는 따로 표시되며, 모두 SkillDrills 연습용 기준이지 인구 통계가 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "수면 부족이 주의분할에 미치는 악영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "수면 부족과 피로는 한쪽 채널을 놓치는 실수를 늘릴 수 있습니다. 비슷한 컨디션에서 기록을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "디스플레이 주사율의 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "표적은 움직이지 않고 무작위 위치에 나타났다 사라지므로 주사율의 영향은 크지 않습니다. 기록은 같은 기기에서 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "한 판은 얼마나 걸리나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45초로 시작하며 정답마다 +2초(최대 60초), 실수나 놓침마다 -1초입니다. 시간이 0이 될 때까지 계속되고, 점수가 오를수록 레벨이 올라 표적이 더 빨리 바뀌고 작아집니다."
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
  "description": "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
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
      "name": "파란 표적 클릭",
      "text": "무작위 위치에 나타나는 파란색 표적을 사라지기 전에 클릭하거나 탭합니다. 맞히면 +2초(최대 60초)입니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "숫자 패널 짝수 실시간 판별",
      "text": "우측 패널에 짝수(0, 2, 4, 6, 8)가 뜨면 판정 버튼을 탭합니다. 홀수에 누르거나 같은 숫자에 두 번 누르면 실수입니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "양방향 정확도 균형 유지",
      "text": "두 채널을 모두 놓치지 않으면 콤보 배수가 커집니다. 실수하면 콤보가 초기화되고 1초가 줄어듭니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "분할 주의력 테스트 가이드",
    paragraphs: [
      "무료 분할 주의력 테스트: 무작위 위치에 나타나는 파란 표적을 클릭하면서 숫자 흐름의 짝수를 판정하는 이중과제 훈련입니다.",
      "두 번째 자극이 첫 번째 자극 직후에 주어졌을 때, 뇌의 중심 의사결정 기전이 점유되어 두 번째 반응이 지연되는 현상입니다.",
      "공간 시각 과제와 언어/숫자 과제처럼 서로 다른 감각 및 인지 자원을 사용할 때 간섭이 최소화되어 효과적으로 주의를 분할할 수 있다는 이론입니다.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills 연습 단계 (정확도 기준)',
    note: '단계는 SkillDrills가 정한 연습용 참고 구분이며 인구 통계나 백분위가 아닙니다.',
    headers: ['등급 (Tier)', '호칭 (Rank)', '평가 기준', '도달 수준', '정확도', '연습 단계'],
    rows: [
      { tier: 'Tier 1', rank: '다중처리 최상위 단계', stat: '최상위 단계', level: '마스터리 (최상위)', accuracy: '98% 이상', percentile: '최상위 단계' },
      { tier: 'Tier 2', rank: '고급 주의분할자', stat: '상급 단계', level: '다이아몬드 (우수)', accuracy: '94–97%', percentile: '상급 단계' },
      { tier: 'Tier 3', rank: '숙련 듀얼태스커', stat: '중상급 단계', level: '플래티넘 (숙련)', accuracy: '88–93%', percentile: '중상급 단계' },
      { tier: 'Tier 4', rank: '표준 연습 단계', stat: '표준 단계', level: '골드 (표준)', accuracy: '78–87%', percentile: '표준 단계' },
      { tier: 'Tier 5', rank: '초보 / 입문 기준선', stat: '기준선 (기초)', level: '실버 (기초)', accuracy: '78% 미만', percentile: '기준선 (하위)' },
    ],
  },
  protocols: {
    title: '이중과제 연습 4단계',
    description: '다중자원 이론(Wickens, 2002)을 참고해 두 채널을 함께 처리하는 연습 순서입니다.',
    items: [
      { title: "이중 스트림 세션 개시", description: "시작 버튼을 눌러 시각 표적 캔버스와 우측 숫자 스트림을 동시에 활성화합니다." },
      { title: "파란 표적 클릭", description: "무작위 위치에 나타나는 파란색 표적을 사라지기 전에 클릭하거나 탭합니다. 맞히면 +2초(최대 60초)입니다." },
      { title: "숫자 패널 짝수 실시간 판별", description: "우측 패널에 짝수(0, 2, 4, 6, 8)가 뜨면 판정 버튼을 탭합니다. 홀수에 누르거나 같은 숫자에 두 번 누르면 실수입니다." },
      { title: "양방향 정확도 균형 유지", description: "두 채널을 모두 놓치지 않으면 콤보 배수가 커집니다. 실수하면 콤보가 초기화되고 1초가 줄어듭니다." },
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
        subtitle: "나타나는 표적과 숫자를 동시에 처리하는 이중과제 훈련",
        statScore: "점수", statTime: "시간", timeLeft: "남은 시간", statLevel: "레벨", statBest: "최고 점수",
        match: "판정", evenNumbers: "짝수", tapEven: "짝수일 때 누르기", startTitle: "분할 주의력 테스트", startSubtitle: "이중과제 · 집중 전환",
        getReady: "준비하세요", dualAccuracy: "통합 정확도", hits: "성공", misses: "실수", peakLevel: "최고 레벨",
        caption: "나타나는 표적을 클릭하면서 숫자 흐름에서 짝수를 동시에 판정하세요.",
        rulesTitle: "드릴 안내 및 점수 기준", ruleItems: [
          { text: "표적 맞히기", highlight: "+100점", result: "표적 클릭 (+2초, 최대 60초)" },
          { text: "짝수 판정", highlight: "정확히 누르기", result: "짝수일 때 판정" },
          { text: "홀수 무시", highlight: "오입력 없음", result: "홀수에는 누르지 않기" },
          { text: "실수 / 놓침", highlight: "콤보 초기화", result: "-1초" },
        ],
        aboutTitle: "분할 주의력 테스트와 이중과제 훈련", aboutLead: "이 드릴은 나타나는 시각 표적 클릭과 숫자 분류를 동시에 요구하는 인지 훈련입니다.",
        audienceTitle: "추천 대상", audienceText: "게임 중 미니맵과 목표를 함께 보는 플레이어, 학습자, 여러 입력을 빠르게 처리해야 하는 사람에게 적합합니다.",
        skillsTitle: "훈련하는 능력", skillsText: "이중과제 처리, 시각 추적, 숫자 판단, 주의 자원 배분을 연습합니다.", flexibilityTitle: "병렬 처리", flexibilityText: "두 정보 흐름을 번갈아 확인하면서 한쪽의 정확도가 무너지지 않도록 조절합니다."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
