import DualTargetFlowClient from '@/app/drills/cognitive/attention/multi-tasking/DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "멀티태스킹 테스트 | 이중 표적 추적 | SkillDrills",
  description: "무료 브라우저 멀티태스킹 테스트로 양쪽 표적 흐름을 함께 추적하세요. 의료 진단이 아닌 인지 자기 점검입니다.",
  keywords: ["멀티태스킹 테스트", "이중 표적 추적 훈련", "멀티태스킹 게임", "멀티태스킹 능력 테스트", "멀티태스킹 연습", "병렬 처리 검사", "과제 전환 비용 측정", "주의 전환 훈련", "인지 유연성 테스트", "두뇌 멀티태스킹", "시각 스트림 추적", "분할주의 집중력", "집중력 분할 검사"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "멀티태스킹 테스트 | 이중 표적 추적 | SkillDrills",
    description: "무료 멀티태스킹 테스트: 반대 방향으로 흐르는 두 도형 흐름에서 각 칸의 목표 기호만 골라 누르는 멀티태스킹 능력 테스트입니다. 의료 진단이 아닌 인지 자기 점검입니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "멀티태스킹 테스트 | 이중 표적 추적 | SkillDrills",
    description: "무료 멀티태스킹 테스트: 반대 방향으로 흐르는 두 도형 흐름에서 각 칸의 목표 기호만 골라 누르는 멀티태스킹 능력 테스트입니다. 의료 진단이 아닌 인지 자기 점검입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "멀티태스킹 테스트",
      "item": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "멀티태스킹 이중 표적 추적 트레이너",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 멀티태스킹 테스트: 반대 방향으로 흐르는 두 도형 흐름에서 각 칸의 목표 기호만 골라 누르는 멀티태스킹 능력 테스트입니다. 의료 진단이 아닌 인지 자기 점검입니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking",
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
  "name": "멀티태스킹 테스트・이중 표적 추적 훈련 – 병렬 인지 속도 측정",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "멀티태스킹 테스트 – 대향 스트림 동시 추적 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking",
  "description": "무료 멀티태스킹 테스트: 반대 방향으로 흐르는 두 도형 흐름에서 각 칸의 목표 기호만 골라 누르는 멀티태스킹 능력 테스트입니다. 의료 진단이 아닌 인지 자기 점검입니다.",
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
      "name": "멀티태스킹 테스트(Dual-Target Flow)란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면을 두 칸(가로 화면은 좌우, 세로 화면은 위아래)으로 나누고, 가운데에서 바깥쪽으로 반대 방향으로 흐르는 도형 중 각 칸에 표시된 목표 기호만 클릭하거나 탭하는 멀티태스킹 연습입니다. 임상 검사가 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "과제 전환 비용(Switch Cost, Rogers & Monsell 1995)이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "서로 다른 규칙을 교대로 처리할 때 뇌의 작업 기억 재구성으로 인해 반응 속도가 지연되는 현상입니다."
      }
    },
    {
      "@type": "Question",
      "name": "인간의 뇌는 진정한 멀티태스킹이 가능한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "복잡한 결정이 필요한 과제에서 뇌는 완전한 병렬 처리가 아닌 극도로 빠른 시분할 교대 처리를 수행합니다(Pashler, 1994)."
      }
    },
    {
      "@type": "Question",
      "name": "미디어 멀티태스킹의 부작용(Ophir et al., 2009)은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "주의가 산만해지고 관련 없는 시각 자극을 차단하는 억제 기능이 약화될 수 있다는 연구 결과가 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수는 어떻게 계산되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "목표 기호를 맞히면 기본 100점에 콤보 배수와 레벨 배수가 곱해지고 +2초(최대 60초)가 추가됩니다. 다른 기호를 누르거나 목표 기호를 놓치면 -1초, 콤보 초기화입니다. 정확도 = 성공 ÷ (성공 + 실수)이며, 결과 등급은 점수 기준(24,000점이 최고 등급 기준)인 SkillDrills 연습용 기준입니다."
      }
    },
    {
      "@type": "Question",
      "name": "높은 점수를 얻기 위한 시선 처리 비법은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "한쪽 흐름에 시선을 고정하지 말고 두 칸의 경계 근처를 보며 양쪽을 번갈아 확인하세요. 목표 기호는 20초마다 바뀌므로 각 칸의 기호 표시를 수시로 확인해야 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "난이도 상승에 따른 변화는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수가 오르면 레벨이 올라 도형이 더 빨리, 더 자주 나옵니다. 레벨 3부터는 두 칸의 목표 기호가 서로 달라집니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율이 멀티태스킹에 미치는 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "주사율이 높으면 빠르게 움직이는 도형이 더 선명하게 보일 수 있지만, 기록에 미치는 영향은 측정하지 않았습니다. 기록은 같은 기기에서 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "한 판은 얼마나 걸리나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45초로 시작해 정답마다 +2초(최대 60초), 실수마다 -1초가 적용되며 시간이 0이 되면 끝납니다. 몇 판을 같은 조건에서 반복해 점수를 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "모바일 기기에서도 원활한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네. 세로 화면에서는 두 칸이 위아래로, 가로 화면에서는 좌우로 나뉘며 터치로 플레이합니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "멀티태스킹 테스트・이중 표적 추적 훈련",
  "description": "무료 멀티태스킹 테스트: 반대 방향으로 흐르는 두 도형 흐름에서 각 칸의 목표 기호만 골라 누르는 멀티태스킹 능력 테스트입니다. 의료 진단이 아닌 인지 자기 점검입니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "두 칸 경계 근처 보기",
      "text": "두 갈래 흐름의 정중앙에 시선을 두고 양쪽 화면을 균등하게 감시합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "목표 형상 템플릿 인지",
      "text": "각 칸 위쪽에 표시된 목표 기호를 확인합니다. 목표 기호는 20초마다 바뀝니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "유효 표적 순간 타격",
      "text": "흘러가는 도형 중 그 칸의 목표 기호와 같은 것만 클릭하거나 탭합니다(+2초). 다른 기호를 누르면 -1초입니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "가속 구간 리듬 유지",
      "text": "레벨이 오르면 도형이 빨라지고 레벨 3부터 두 칸의 목표가 달라집니다. 실수 없이 이어 가면 콤보 배수가 커집니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "멀티태스킹 테스트 가이드",
    paragraphs: [
      "무료 멀티태스킹 테스트: 반대 방향으로 흐르는 두 도형 흐름에서 각 칸의 목표 기호만 골라 누르는 멀티태스킹 능력 테스트입니다. 의료 진단이 아닌 인지 자기 점검입니다.",
      "서로 다른 규칙을 교대로 처리할 때 뇌의 작업 기억 재구성으로 인해 반응 속도가 지연되는 현상입니다.",
      "복잡한 결정이 필요한 과제에서 뇌는 완전한 병렬 처리가 아닌 극도로 빠른 시분할 교대 처리를 수행합니다(Pashler, 1994).",
    ],
  },
  benchmarks: {
    title: 'SkillDrills 연습 단계 (정확도 기준)',
    note: '단계는 SkillDrills가 정한 연습용 참고 구분이며 인구 통계나 백분위가 아닙니다.',
    headers: ['등급 (Tier)', '호칭 (Rank)', '평가 기준', '도달 수준', '정확도', '연습 단계'],
    rows: [
      { tier: 'Tier 1', rank: '멀티태스킹 최상위 단계', stat: '최상위 단계', level: '마스터리 (최상위)', accuracy: '98% 이상', percentile: '최상위 단계' },
      { tier: 'Tier 2', rank: '고급 병렬 처리자', stat: '상급 단계', level: '다이아몬드 (우수)', accuracy: '94–97%', percentile: '상급 단계' },
      { tier: 'Tier 3', rank: '숙련 조작자', stat: '중상급 단계', level: '플래티넘 (숙련)', accuracy: '88–93%', percentile: '중상급 단계' },
      { tier: 'Tier 4', rank: '표준 연습 단계', stat: '표준 단계', level: '골드 (표준)', accuracy: '78–87%', percentile: '표준 단계' },
      { tier: 'Tier 5', rank: '초보 / 입문 기준선', stat: '기준선 (기초)', level: '실버 (기초)', accuracy: '78% 미만', percentile: '기준선 (하위)' },
    ],
  },
  protocols: {
    title: '멀티태스킹 연습 4단계',
    description: '과제 전환 비용(Rogers & Monsell, 1995)을 참고해 두 흐름을 번갈아 확인하는 연습 순서입니다.',
    items: [
      { title: "두 칸 경계 근처 보기", description: "두 갈래 흐름의 정중앙에 시선을 두고 양쪽 화면을 균등하게 감시합니다." },
      { title: "목표 형상 템플릿 인지", description: "각 칸 위쪽에 표시된 목표 기호를 확인합니다. 목표 기호는 20초마다 바뀝니다." },
      { title: "유효 표적 순간 타격", description: "흘러가는 도형 중 그 칸의 목표 기호와 같은 것만 클릭하거나 탭합니다(+2초). 다른 기호를 누르면 -1초입니다." },
      { title: "가속 구간 리듬 유지", description: "레벨이 오르면 도형이 빨라지고 레벨 3부터 두 칸의 목표가 달라집니다. 실수 없이 이어 가면 콤보 배수가 커집니다." },
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
      <DualTargetFlowClient copy={{
        title: "멀티태스킹 테스트", subtitle: "양쪽 표적 흐름을 동시에 추적하는 인지 훈련",
        statScore: "점수", statTime: "시간", timeLeft: "남은 시간", statLevel: "레벨", statBest: "최고 점수",
        startTitle: "멀티태스킹 테스트", startSubtitle: "이중 흐름 · 주변 집중", getReady: "준비하세요", accuracy: "정확도", hits: "성공", peakLevel: "최고 레벨", maxCombo: "최대 콤보",
        caption: "서로 반대 방향으로 움직이는 두 표적 흐름에서 같은 기호를 찾아 빠르게 누르세요.",
        rulesTitle: "드릴 안내 및 점수 기준", ruleItems: [
          { text: "목표 기호 맞히기", highlight: "+100점, +2초", result: "칸에 표시된 기호 클릭" },
          { text: "두 칸 동시 확인", highlight: "레벨 3부터", result: "칸마다 목표가 다름" },
          { text: "오입력 / 놓침", highlight: "콤보 초기화", result: "-1초" },
          { text: "목표 변경", highlight: "20초마다", result: "기호 표시 다시 확인" },
        ],
        aboutTitle: "멀티태스킹과 이중 표적 흐름", aboutLead: "이 드릴은 두 시각 흐름을 함께 추적하는 비임상 인지 자기 점검으로, 실제 멀티태스킹보다 빠른 주의 전환과 양쪽 정확도에 초점을 둡니다.",
        audienceTitle: "추천 대상", audienceText: "게임에서 여러 화면 요소를 보는 플레이어, 학습자, 동시에 들어오는 정보를 정리하고 싶은 사람에게 적합합니다.",
        skillsTitle: "훈련하는 능력", skillsText: "양쪽 시각 추적, 주변 표적 탐지, 주의 전환, 실행 기능 조절을 연습합니다.", flexibilityTitle: "과제 전환 속도", flexibilityText: "레벨이 오를수록 표적 규칙과 속도가 바뀌므로 두 흐름 사이를 빠르고 정확하게 전환해야 합니다."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
