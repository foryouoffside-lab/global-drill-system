import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "반응속도 테스트 | 선택 반응 시간 훈련 | SkillDrills",
  description: "무료 브라우저 반응속도 테스트: 바뀌는 규칙에 맞는 표적을 골라 선택 반응 시간과 판단 속도를 연습합니다. 임상 검사가 아닙니다.",
  keywords: ["반응속도 테스트", "반응속도 테스트 무료", "반응속도 테스트 온라인", "선택 반응 시간", "선택 반응 테스트", "판단 속도", "반응속도 측정", "인지 처리 속도"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "반응속도 테스트 | 선택 반응 시간 훈련 | SkillDrills",
    description: "무료 브라우저 반응속도 테스트: 바뀌는 규칙에 맞는 표적을 골라 선택 반응 시간과 판단 속도를 연습합니다. 임상 검사가 아닙니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "반응속도 테스트 | 선택 반응 시간 훈련 | SkillDrills",
    description: "무료 브라우저 반응속도 테스트: 바뀌는 규칙에 맞는 표적을 골라 선택 반응 시간과 판단 속도를 연습합니다. 임상 검사가 아닙니다.",
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
  "name": "선택 반응시간 및 판단 속도 진단 도구",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 브라우저 선택 반응시간(CRT) 측정 도구. 동적으로 뒤바뀌는 색상 규칙을 식별하고 올바른 표적을 타격하여 두뇌의 시지각 분별 속도와 의사결정 지연 시간을 밀리초 단위로 평가합니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time",
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
  "name": "선택 반응시간 테스트・판단 속도 측정 – 힉의 법칙 인지속도",
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
    "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "선택 반응시간 테스트 – 동적 규칙 판별 및 반사신경 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time",
  "description": "무료 브라우저 선택 반응시간(CRT) 측정 도구. 동적으로 뒤바뀌는 색상 규칙을 식별하고 올바른 표적을 타격하여 두뇌의 시지각 분별 속도와 의사결정 지연 시간을 밀리초 단위로 평가합니다.",
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
      "name": "선택 반응시간(CRT, Choice Reaction Time)이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "여러 개의 자극 중 유효한 대상을 분별하고 알맞은 동작을 선택하여 실행하기까지 걸리는 총 의사결정 소요 시간입니다."
      }
    },
    {
      "@type": "Question",
      "name": "단순 반응시간과의 차이점은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "자극 출현 즉시 누르는 단순 반응(~200ms)과 달리, 대뇌 피질에서 자극 식별과 행동 선택 단계가 추가되어 50~100ms 더 소요됩니다(Donders, 1868)."
      }
    },
    {
      "@type": "Question",
      "name": "힉의 법칙(Hick's Law, 1952)이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "선택지의 수가 늘어날수록 반응 시간이 로그 함수 형태로 길어진다는 인지공학의 기본 법칙입니다."
      }
    },
    {
      "@type": "Question",
      "name": "일반 성인의 평균 선택 반응속도는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "일반 성인의 평균은 280~350ms이며, 고도로 숙련된 프로게이머는 180~230ms 대를 기록합니다(Der & Deary, 2006)."
      }
    },
    {
      "@type": "Question",
      "name": "규칙 전환(Rule-Switching)이 추가된 이유는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "빨간색과 파란색 표적 규칙이 수시로 바뀌어, 전두엽의 인지적 유연성과 충동 억제력을 함께 평가하기 위함입니다."
      }
    },
    {
      "@type": "Question",
      "name": "훈련을 통해 판단 속도가 빨라질 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 신경 전달 경로가 효율화되고 시각 변별 패턴이 뇌에 각인되어 불필요한 망설임 시간이 단축됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "나이가 들면 반응시간이 느려지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "20대 중반 이후 점진적으로 지연되지만, 지속적인 인지 훈련을 통해 상당 부분 감퇴를 늦출 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터와 마우스 성능이 측정에 미치는 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "144Hz 고주사율 모니터와 1000Hz 폴링레이트 마우스는 하드웨어 지연을 최소화합니다(Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "가장 권장하는 일일 연습 방식은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "집중력이 높은 시간대에 하루 10~15분 동안 반복하는 것이 최적입니다."
      }
    },
    {
      "@type": "Question",
      "name": "검사는 무료로 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, SkillDrills의 모든 검사는 회원가입 없이 무료로 브라우저에서 바로 제공됩니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "선택 반응시간 테스트・판단 속도 측정",
  "description": "무료 브라우저 선택 반응시간(CRT) 측정 도구. 동적으로 뒤바뀌는 색상 규칙을 식별하고 올바른 표적을 타격하여 두뇌의 시지각 분별 속도와 의사결정 지연 시간을 밀리초 단위로 평가합니다.",
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
      "text": "필드에 생성되는 타깃들 중 현재 활성화된 규칙 색상과 일치하는 노드를 시각적으로 식별합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "오답 회피 및 전광석화 클릭",
      "text": "다른 색상의 노드를 피해 정답 타깃을 소멸 시간 전에 번개처럼 클릭합니다.",
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
    title: "선택 반응시간 테스트・판단 속도 측정 – 힉의 법칙 인지속도",
    paragraphs: [
      "무료 브라우저 선택 반응시간(CRT) 측정 도구. 동적으로 뒤바뀌는 색상 규칙을 식별하고 올바른 표적을 타격하여 두뇌의 시지각 분별 속도와 의사결정 지연 시간을 밀리초 단위로 평가합니다.",
      "자극 출현 즉시 누르는 단순 반응(~200ms)과 달리, 대뇌 피질에서 자극 식별과 행동 선택 단계가 추가되어 50~100ms 더 소요됩니다(Donders, 1868).",
      "선택지의 수가 늘어날수록 반응 시간이 로그 함수 형태로 길어진다는 인지공학의 기본 법칙입니다.",
    ],
  },
  benchmarks: {
    title: '인지 수행 능력 표준 평가 벤치마크',
    headers: ['등급 (Tier)', '호칭 (Rank)', '평가 기준', '도달 수준', '정확도', '백분위'],
    rows: [
      { tier: 'Tier 1', rank: '그랜드마스터 / 초고속 의사결정 엘리트', stat: '상위 1%', level: '마스터리 (최상위)', accuracy: '98% 이상', percentile: '상위 1%' },
      { tier: 'Tier 2', rank: '상급 인지 분별자', stat: '상위 5%', level: '다이아몬드 (우수)', accuracy: '94–97%', percentile: '상위 5%' },
      { tier: 'Tier 3', rank: '숙련 반응 조작자', stat: '상위 15%', level: '플래티넘 (숙련)', accuracy: '88–93%', percentile: '상위 15%' },
      { tier: 'Tier 4', rank: '일반 성인 표준', stat: '상위 50%', level: '골드 (표준)', accuracy: '78–87%', percentile: '상위 50%' },
      { tier: 'Tier 5', rank: '초보 / 입문 기준선', stat: '기준선 (기초)', level: '실버 (기초)', accuracy: '78% 미만', percentile: '기준선 (하위)' },
    ],
  },
  protocols: {
    title: '두뇌 처리 속도와 집중력을 극대화하는 4대 훈련 프로토콜',
    description: '힉의 법칙(Hick, 1952)과 돈더스 감산법(Donders, 1969)에 기반한, 시각 분별 시간과 신경 결정 지연을 단축시키는 과학적 선택 반응시간 훈련 프로토콜입니다.',
    items: [
      { title: "상단 활성 규칙 인지", description: "상단 배너에 표시된 지정 타깃 색상(TAP RED 또는 TAP BLUE)을 확인합니다." },
      { title: "스폰된 타깃 실시간 분별", description: "필드에 생성되는 타깃들 중 현재 활성화된 규칙 색상과 일치하는 노드를 시각적으로 식별합니다." },
      { title: "오답 회피 및 전광석화 클릭", description: "다른 색상의 노드를 피해 정답 타깃을 소멸 시간 전에 번개처럼 클릭합니다." },
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
          title: "반응속도 테스트",
          subtitle: "색상 규칙 전환에 맞춰 표적을 고르는 선택 반응·판단 속도 훈련",
          startTitle: "반응속도 테스트",
          startSubtitle: "선택 반응 • 판단 속도",
          stageCaption: "상단 규칙과 같은 색 표적을 빠르게 누르세요. 규칙과 색상이 계속 바뀝니다.",
          rulesTitle: "드릴 안내 및 점수 시스템",
          aboutTitle: "반응속도 테스트란?",
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
            { num: "2", text: "정답 표적", highlight: "+100점", result: "콤보·레벨 배율 적용" },
            { num: "3", text: "규칙 전환", highlight: "자동 변경", result: "레벨이 오를수록 빨라짐" },
            { num: "4", text: "오답 / 시간 초과", highlight: "콤보 초기화", result: "설정 시 -0.8초" }
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
