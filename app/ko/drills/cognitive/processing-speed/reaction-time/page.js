import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "선택 반응 시간 테스트 | 색상 규칙 전환 훈련 | SkillDrills",
  description: "색상 규칙이 바뀔 때 맞는 표적을 고르는 선택 반응 시간 테스트입니다. 판단 속도와 정확도를 연습하는 무료 브라우저 훈련이며 임상 검사가 아닙니다.",
  keywords: ["선택 반응 시간 테스트", "선택 반응 시간", "선택 반응 테스트", "판단 속도 테스트", "색상 규칙 전환 훈련", "인지 처리 속도"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "선택 반응 시간 테스트 | 색상 규칙 전환 훈련 | SkillDrills",
    description: "색상 규칙이 바뀔 때 맞는 표적을 고르는 선택 반응 시간 테스트입니다. 판단 속도와 정확도를 연습하는 무료 브라우저 훈련이며 임상 검사가 아닙니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "선택 반응 시간 테스트 | 색상 규칙 전환 훈련 | SkillDrills",
    description: "색상 규칙이 바뀔 때 맞는 표적을 고르는 선택 반응 시간 테스트입니다. 판단 속도와 정확도를 연습하는 무료 브라우저 훈련이며 임상 검사가 아닙니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "선택 반응시간 테스트",
      "item": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "선택 반응 시간 테스트",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 브라우저 선택 반응 시간 테스트. 빨강·파랑 표적 중 상단 규칙에 맞는 색을 눌러 판단 속도와 정확도를 연습합니다. 결과는 점수·정확도·최고 레벨이며 밀리초 기록이나 임상 검사가 아닙니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time",
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
  "name": "선택 반응 시간 테스트 – 색상 규칙 전환 훈련",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "ko-KR",
    "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "선택 반응 시간 테스트 – 색상 규칙 전환 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time",
  "description": "무료 브라우저 선택 반응 시간 테스트. 빨강·파랑 표적 중 상단 규칙에 맞는 색을 눌러 판단 속도와 정확도를 연습합니다. 결과는 점수·정확도·최고 레벨이며 밀리초 기록이나 임상 검사가 아닙니다.",
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
      "name": "선택 반응 시간(Choice Reaction Time)이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "여러 자극 중 규칙에 맞는 대상을 구별하고 알맞은 반응을 골라 실행하기까지 걸리는 시간입니다. 이 드릴에서는 빨강과 파랑 중 현재 규칙에 맞는 색을 누릅니다."
      }
    },
    {
      "@type": "Question",
      "name": "단순 반응 시간과의 차이점은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "단순 반응은 하나의 예상된 자극에 바로 반응합니다. 선택 반응은 자극을 구별하고 반응을 고르는 단계가 더해져 일반적으로 더 느립니다(Donders). 이 드릴은 여기에 규칙 전환을 더했습니다."
      }
    },
    {
      "@type": "Question",
      "name": "힉의 법칙(Hick's Law, 1952)이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "선택지의 수가 늘어날수록 반응 시간이 로그 함수 형태로 길어진다는 법칙입니다. 이 드릴은 매번 규칙을 확인하게 해 판단 단계를 연습하게 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "규칙 전환은 어떻게 작동하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "상단 배너가 누를 색(빨강 또는 파랑)을 알려 줍니다. 레벨 2부터는 현재 색을 일정 횟수 맞히면 규칙이 바뀌고, 레벨이 오를수록 바뀌기까지 필요한 횟수가 줄어듭니다(최소 2회)."
      }
    },
    {
      "@type": "Question",
      "name": "시간은 어떻게 계산되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45초로 시작합니다. 정답마다 2초가 더해지며 최대 60초입니다. 다른 색을 누르거나 표적 시간 초과(설정의 Target Timeouts가 켜져 있을 때)가 나면 1초가 줄고 콤보가 초기화됩니다. 시간이 0이 되면 종료됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수와 등급은 어떻게 정해지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정답 한 번에 100점에 콤보 배율과 레벨 배율을 곱한 점수를 얻습니다. 최종 점수는 SkillDrills가 정한 고정 기준과 비교해 F부터 S+까지 등급으로 표시됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "반응 시간을 밀리초로 알려 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아니요. 결과는 점수, 정확도(전체 시도 중 정답 비율), 최고 레벨, 최대 콤보입니다. 개별 반응 시간을 밀리초로 기록하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "연습하면 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "이 과제의 점수는 연습할수록 대체로 오릅니다. 매번 규칙 배너를 먼저 확인하고 정확도를 유지해 콤보를 쌓는 것이 핵심입니다. 다른 일상 과제의 반응 속도 향상을 보장하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "의학적 검사인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아니요. 연습용 브라우저 드릴이며 진단이나 선별 검사가 아닙니다. 결과는 기기와 컨디션에 따라 달라지므로 같은 기기에서 자신의 기록 변화를 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "무료인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 회원가입 없이 무료로 브라우저에서 바로 이용할 수 있습니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "선택 반응시간 테스트・판단 속도 측정",
  "description": "무료 브라우저 선택 반응 시간 테스트. 빨강·파랑 표적 중 상단 규칙에 맞는 색을 눌러 판단 속도와 정확도를 연습합니다. 결과는 점수·정확도·최고 레벨이며 밀리초 기록이나 임상 검사가 아닙니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "상단 활성 규칙 인지",
      "text": "상단 배너에 표시된 지정 타깃 색상(TAP RED 또는 TAP BLUE)을 확인합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "스폰된 타깃 실시간 분별",
      "text": "화면에 함께 나타나는 빨강·파랑 표적 중 현재 규칙 색상과 같은 표적을 찾습니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "오답 회피 및 전광석화 클릭",
      "text": "다른 색 표적은 피하고, 표적이 바뀌기 전에 정답 표적을 누릅니다. 오답이나 시간 초과는 1초 감점과 콤보 초기화입니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "규칙 역전에 대한 즉각 대응",
      "text": "규칙 배너가 반전되는 즉시 과거의 반응을 억제하고 새로운 색상으로 즉시 전환합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "선택 반응 시간 테스트 – 색상 규칙 전환 훈련",
    paragraphs: [
      "선택 반응 시간 테스트는 여러 자극 중 규칙에 맞는 것을 골라 반응하는 과제입니다. 이 드릴에서는 빨강·파랑 표적이 함께 나타나고, 상단 배너가 가리키는 색을 눌러야 합니다. 레벨 2부터 규칙이 바뀌므로 매번 규칙을 다시 확인해야 합니다.",
      "자극이 하나뿐인 단순 반응과 달리, 선택 반응에는 자극을 구별하고 반응을 고르는 단계가 더해져 일반적으로 더 느립니다(Donders, 1868/1969).",
      "선택지가 늘수록 판단 시간이 로그 형태로 길어진다는 경향은 힉의 법칙(Hick, 1952)으로 알려져 있습니다. 이 드릴은 밀리초 기록 대신 점수, 정확도, 최고 레벨, 최대 콤보를 보여 주며 임상 검사가 아닙니다.",
    ],
  },
  benchmarks: {
    title: '선택 반응 수행 구간(참고용)',
    headers: ['단계', '구간 이름', '해석', '도달 수준', '정확도 목표', '비고'],
    rows: [
      { tier: 'Tier 1', rank: '고속 의사결정', stat: '매우 높음', level: '최상위 구간', accuracy: '98% 이상', percentile: '정확도 유지가 핵심' },
      { tier: 'Tier 2', rank: '상급 분별', stat: '높음', level: '우수', accuracy: '94–97%', percentile: '규칙 전환 직후 오답 관리' },
      { tier: 'Tier 3', rank: '숙련 반응', stat: '평균 이상', level: '숙련', accuracy: '88–93%', percentile: '속도와 정확도 균형' },
      { tier: 'Tier 4', rank: '일반 수준', stat: '평균 범위', level: '표준', accuracy: '78–87%', percentile: '기본 규칙 익히기' },
      { tier: 'Tier 5', rank: '입문', stat: '기준선', level: '기초', accuracy: '78% 미만', percentile: '천천히 정확하게 시작' },
    ],
    note: '구간은 SkillDrills가 정한 참고용 구분이며 사용자 통계, 백분위 또는 임상 기준이 아닙니다.',
  },
  protocols: {
    title: '선택 반응 시간 테스트 진행 순서',
    description: '두 색 표적과 바뀌는 규칙에 맞춰 판단과 정확도를 연습하는 순서입니다. 선택지와 판단 시간의 관계는 힉의 법칙(Hick, 1952)으로 설명됩니다.',
    items: [
      { title: "상단 활성 규칙 인지", description: "상단 배너에 표시된 지정 타깃 색상(TAP RED 또는 TAP BLUE)을 확인합니다." },
      { title: "스폰된 타깃 실시간 분별", description: "화면에 함께 나타나는 빨강·파랑 표적 중 현재 규칙 색상과 같은 표적을 찾습니다." },
      { title: "오답 회피 및 전광석화 클릭", description: "다른 색 표적은 피하고, 표적이 바뀌기 전에 정답 표적을 누릅니다. 오답이나 시간 초과는 1초 감점과 콤보 초기화입니다." },
      { title: "규칙 역전에 대한 즉각 대응", description: "규칙 배너가 반전되는 즉시 과거의 반응을 억제하고 새로운 색상으로 즉시 전환합니다." },
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
      <EliteNeuroSwitchClient
        copy={{
          title: "선택 반응 시간 테스트",
          subtitle: "색상 규칙 전환에 맞춰 표적을 고르는 선택 반응·판단 속도 훈련",
          startTitle: "선택 반응 시간 테스트",
          startSubtitle: "선택 반응 • 판단 속도",
          stageCaption: "상단 규칙과 같은 색 표적을 빠르게 누르세요. 규칙과 색상이 계속 바뀝니다.",
          rulesTitle: "드릴 안내 및 점수 시스템",
          aboutTitle: "선택 반응 시간 테스트란?",
          faqTitle: "자주 묻는 질문",
          labels: { score: "점수", time: "시간", level: "레벨", bestScore: "최고 점수", timeLeft: "남은 시간", rule: "규칙", ready: "준비", accuracy: "정확도", hits: "성공 횟수", peakLevel: "최고 레벨", maxCombo: "최대 콤보" },
          ruleBanner: { RED: "빨간 표적", BLUE: "파란 표적" },
          aboutLead: "선택 반응시간은 여러 자극 중 규칙에 맞는 반응을 고르는 데 걸리는 시간입니다. 선택지가 늘면 판단 시간도 대체로 로그 형태로 증가한다는 힉의 법칙과 관련됩니다.",
          aboutText: "이 드릴은 두 색 표적을 구별하고 현재 규칙에 맞는 표적을 선택하는 과정을 측정합니다. 점수에는 시각 처리, 판단, 손가락 움직임, 기기 지연이 함께 반영됩니다. 단순 반응 테스트와 달리 규칙이 바뀌므로 색을 본 뒤 올바른 행동을 선택해야 합니다.",
          aboutCards: [
            { title: "누구에게 유용한가요?", desc: "게이머, 학생, 운전자처럼 빠른 시각 판단과 정확한 반응을 연습하려는 사람에게 적합합니다." },
            { title: "훈련하는 능력", desc: "선택 반응시간, 시각적 분별, 운동 반응, 규칙 전환에 대한 주의력을 연습합니다." },
            { title: "규칙 전환 민첩성", desc: "활성 색상 규칙이 바뀔 때 반응 기준을 빠르게 갱신하는 능력을 자극합니다." }
          ],
          rulesItems: [
            { num: "1", text: "활성 규칙", highlight: "빨강 / 파랑", result: "상단 배너 따르기" },
            { num: "2", text: "정답 표적", highlight: "+100점", result: "콤보·레벨 배율, +2초(최대 60초)" },
            { num: "3", text: "규칙 전환", highlight: "레벨 2부터", result: "레벨이 오를수록 더 자주 바뀜" },
            { num: "4", text: "오답 / 시간 초과", highlight: "콤보 초기화", result: "-1초" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
