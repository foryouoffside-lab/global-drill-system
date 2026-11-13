import WordRecallClient from '@/app/drills/memory/short-term-memory/word-recall/WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "단어 기억력 테스트 | 단어 회상 | SkillDrills",
  description: "무료 단어 기억력 테스트: 단어 목록을 기억한 뒤 자유롭게 회상하며 언어 기억력과 작업기억을 연습하세요.",
  keywords: [
    "단어 기억력 테스트",
    "단어 암기 테스트",
    "단어목록 기억",
    "단어목록 회상",
    "자유 회상 테스트",
    "단기 언어 기억",
    "언어 작업기억",
    "단어 회상 훈련",
    "단어 기억 게임",
    "언어성 기억력 검사",
    "의미적 청킹",
    "계열 위치 효과",
    "무료 기억력 테스트",
    "단어 기억력 훈련"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall', 'ko'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "단어 기억력 테스트 | 단어 회상 | SkillDrills",
    description: "무료 단어 기억력 테스트: 단어 목록을 기억한 뒤 자유롭게 회상하며 언어 기억력과 작업기억을 연습하세요.",
    url: "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "단어 기억력 테스트 | 단어 회상 | SkillDrills",
    description: "무료 단어 기억력 테스트: 단어 목록을 기억한 뒤 자유롭게 회상하며 언어 기억력과 작업기억을 연습하세요.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedWordRecallPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "기억력 훈련", "item": "https://skilldrills.online/ko/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "단기 기억", "item": "https://skilldrills.online/ko/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "단어 기억력 테스트", "item": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "단어 기억력 테스트 (Verbal Memory Test)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "2초 동안 보인 단어 목록을 순서와 상관없이 입력하는 무료 단어 기억력 테스트. 3단어에서 시작해 모두 맞히면 1단어씩 늘어납니다.",
    "genre": "Cognitive Assessment / Verbal Memory",
    "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall",
    "sameAs": ["https://ko.wikipedia.org/wiki/%EC%9E%91%EC%97%85_%EA%B8%B0%EC%96%B5"],
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "단어 기억력 테스트 (Verbal Memory Test)",
    "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall",
    "description": "2초 동안 보인 단어 목록을 순서와 상관없이 입력하는 무료 단어 기억력 테스트. 3단어에서 시작해 모두 맞히면 1단어씩 늘어납니다.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "단어 기억력 테스트 (Verbal Memory Test)",
    "description": "2초 동안 보인 단어 목록을 순서와 상관없이 입력하는 무료 단어 기억력 테스트. 3단어에서 시작해 모두 맞히면 1단어씩 늘어납니다.",
    "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall",
    "genre": ["Memory Game", "Cognitive Training", "Brain Game"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "단어 기억력 테스트는 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "단어 목록이 한꺼번에 2초 동안 나타났다 사라지면, 12초 안에 기억나는 단어를 띄어쓰기나 쉼표로 구분해 입력하고 Enter로 제출합니다. 순서는 상관없습니다(자유 회상). 3단어에서 시작해 모두 맞히면 1단어 늘고(최대 12단어), 하나라도 빠뜨리거나 목록에 없는 단어를 입력하면 1단어 줄어듭니다(최소 3단어). 한 세션은 45초입니다."
        }
      },
      {
        "@type": "Question",
        "name": "점수는 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "목록의 단어를 모두, 다른 단어 없이 입력한 라운드만 점수가 납니다. 1라운드 점수 = 150 × (1 + 0.15 × (단어 수 − 3))로, 3단어는 150점, 12단어는 약 353점입니다. 틀려도 점수나 시간은 깎이지 않고 단어 수만 1 줄어듭니다."
        }
      },
      {
        "@type": "Question",
        "name": "단어 기억력 평균은 몇 개인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkillDrills는 사용자 데이터를 수집하지 않으므로 평균이나 백분위를 제시하지 않습니다. 이 게임은 2초 노출과 12초 입력 제한이 있어 연구실 기억력 검사와 직접 비교할 수 없습니다. 아래 연습 구간과 자신의 이전 기록을 비교하세요."
        }
      },
      {
        "@type": "Question",
        "name": "오타를 내면 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "입력한 단어는 목록의 단어와 정확히 일치해야 합니다(영문은 대소문자와 악센트 무시). 오타는 '목록에 없는 단어'로 처리되고 원래 단어는 빠뜨린 것으로 계산되므로 그 라운드는 실패가 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "자유 회상과 재인 기억은 어떻게 다른가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "자유 회상은 단서 없이 기억에서 직접 단어를 꺼내는 방식이고, 재인은 보기 중에서 본 적 있는 것을 고르는 방식입니다. 이 테스트는 자유 회상 방식이라 재인보다 어렵습니다."
        }
      },
      {
        "@type": "Question",
        "name": "단어 목록의 계열 위치 효과란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "목록의 처음 단어(초두 효과)와 마지막 단어(최신 효과)는 잘 기억되고 가운데 단어는 잘 잊히는 현상입니다(Murdock, 1962). 이 게임은 단어가 한꺼번에 나타나므로 단어를 읽은 순서가 그 역할을 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "단어를 이야기로 연결하면 왜 더 잘 기억되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "단어를 의미 있게 연결하면 겉모양만 볼 때보다 깊게 처리되어 기억에 오래 남는 경향이 있습니다(처리 수준 이론, Craik & Lockhart, 1972). 다만 2초는 짧으므로 짧은 그림 한 장으로 묶는 정도가 현실적입니다."
        }
      },
      {
        "@type": "Question",
        "name": "단어를 입력하는 순서가 중요한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아니요. 순서와 상관없이 목록의 단어가 모두 들어 있으면 정답입니다. 가장 먼저 사라질 것 같은 마지막 단어부터 입력하는 것도 좋은 방법입니다."
        }
      },
      {
        "@type": "Question",
        "name": "기억력테스트 단어 게임으로 일상 기억력이 좋아지나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "보장할 수 없습니다. 연습하면 이 게임 기록은 오를 수 있지만, 일상 기억력으로 효과가 옮겨 가는지는 연구마다 결과가 엇갈립니다. 이 테스트는 진단 검사가 아니므로, 기억력이 걱정된다면 전문의와 상담하세요."
        }
      },
      {
        "@type": "Question",
        "name": "이 온라인 단어 기억력 테스트는 무료인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 무료이며 설치나 회원가입 없이 브라우저에서 바로 할 수 있습니다. 기록은 브라우저에만 저장됩니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "단어 기억력 테스트 하는 방법",
    "description": "45초 동안 단어 목록을 2초간 보고 기억나는 단어를 입력하는 4단계 방법.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall#step-1",
        "name": "2초 동안 단어 목록 보기",
        "text": "단어 목록 전체가 한꺼번에 2초 동안 나타납니다. 빠르게 훑어 읽으세요."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall#step-2",
        "name": "짧은 장면으로 묶기",
        "text": "단어들을 하나의 짧은 장면이나 그림으로 묶어 떠올립니다."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall#step-3",
        "name": "마지막에 본 단어부터 입력",
        "text": "입력창이 나타나면 금방 사라질 마지막 단어부터 입력합니다. 순서는 상관없습니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/word-recall#step-4",
        "name": "12초 안에 제출",
        "text": "단어를 띄어쓰기나 쉼표로 구분해 모두 입력하고 Enter로 제출합니다. 입력 시간은 12초입니다."
      }
    ]
  };

  const wordRecallGuide = {
    heading: "단어 기억력 테스트 가이드 & 자유 회상",
    intro: [
      "단어 기억력 테스트는 잠깐 보인 단어 목록을 순서와 상관없이 다시 떠올려 입력하는 단어 회상 게임입니다. 심리학의 자유 회상 과제를 연습용으로 만든 것으로, 임상 검사나 진단 도구가 아닙니다.",
      "단어 목록 기억 연구는 헤르만 에빙하우스(1885)의 기억 실험에서 시작되었습니다. 베넷 머독(Murdock, 1962)은 자유 회상에서 목록의 처음과 끝 단어가 잘 기억되는 계열 위치 효과를 보고했고, 털빙(Tulving, 1962)은 사람들이 단어를 스스로 묶어 기억한다는 점을 보였습니다.",
      "크레이크와 록하트(Craik & Lockhart, 1972)의 처리 수준 이론에 따르면 단어의 의미를 생각하거나 서로 연결할수록 기억에 더 잘 남는 경향이 있습니다. 노출 시간이 짧은 이 게임에서는 단어들을 한 장면으로 빠르게 묶는 것이 도움이 됩니다.",
      "게임 방식: 3단어에서 시작하며, 단어 목록이 한꺼번에 2초 동안 표시됩니다. 사라진 뒤 12초 안에 기억나는 단어를 띄어쓰기나 쉼표로 구분해 입력하고 Enter로 제출합니다. 모든 단어를 맞히고 다른 단어가 없으면 1단어 늘고(최대 12단어), 빠뜨리거나 틀린 단어가 있거나 시간이 지나면 1단어 줄어듭니다(최소 3단어). 45초 동안 점수, 최대 단어 수, 정확도(성공한 라운드 비율)를 기록하며 반응 시간은 측정하지 않습니다.",
      "데이터 투명성: SkillDrills는 플레이 결과를 서버에 수집하지 않습니다. 모든 기록은 브라우저 localStorage에만 저장되므로 이 페이지는 사용자 평균, 백분위, 이용자 수를 제시하지 않으며, 인용한 연구는 아래 참고문헌에 있습니다.",
      "의학적 고지: 본 게임은 무료 기억력 연습 도구이며 의료 기기나 진단 검사가 아닙니다. 기억력이나 인지 건강이 걱정된다면 전문의와 상담하세요."
    ],
    benchmarks: {
      title: "단어 기억력 테스트 연습 구간 (SkillDrills 기준, 45초)",
      headers: ["연습 구간", "도달 단어 수", "실수 없이 도달했을 때 점수", "흔한 기억 방식"],
      rows: [
        ["구간 1", "12단어", "약 2,160점 이상", "단어 전체를 한 장면으로 즉시 묶음"],
        ["구간 2", "10~11단어", "약 1,520~2,159점", "의미별로 2~3개씩 묶어 기억"],
        ["구간 3", "8~9단어", "약 980~1,519점", "처음과 끝은 기억하지만 가운데 단어를 놓침"],
        ["구간 4", "6~7단어", "약 520~979점", "단어를 하나씩 읽고 외움"],
        ["구간 5", "3~5단어", "520점 미만", "2초 노출과 입력 방식에 익숙해지는 단계"]
      ],
      note: "인구 평균이 아닌 SkillDrills 연습 구간입니다. 점수는 3단어부터 실수 없이 그 단어 수에 도달했을 때의 값입니다(1라운드 점수 = 150 × (1 + 0.15 × (단어 수 − 3))). 45초 안에 할 수 있는 라운드 수가 제한되고 틀리면 단어 수가 줄기 때문에 실제 점수는 달라집니다."
    },
    techniques: {
      title: "단어를 더 많이 기억하는 전략",
      items: [
        {
          "name": "한 장면으로 묶기",
          "desc": "단어들을 하나의 장면에 넣어 떠올립니다(예: '강' '양초' '용' → 강 위에 양초를 든 용). 의미로 연결하면 더 깊게 처리됩니다(Craik & Lockhart, 1972).",
          "tips": "2초 안에 완성할 수 있도록 장면은 단순하게 만드세요."
        },
        {
          "name": "범주로 나누기",
          "desc": "동물, 장소, 물건처럼 비슷한 단어끼리 묶습니다. 사람은 단어를 스스로 묶어 기억하는 경향이 있습니다(Tulving, 1962).",
          "tips": "입력할 때도 범주별로 떠올리면 빠뜨리는 단어가 줄어듭니다."
        },
        {
          "name": "마지막 단어부터 입력",
          "desc": "방금 본 단어는 금방 사라지므로(최신 효과) 입력창이 열리면 먼저 입력하고, 그다음 처음 단어와 가운데 단어를 떠올립니다(Murdock, 1962).",
          "tips": "순서는 채점에 영향을 주지 않습니다."
        },
        {
          "name": "오타 주의",
          "desc": "오타는 틀린 단어로 처리되어 라운드 전체가 실패합니다. 12초 안에 정확히 입력하는 것이 중요합니다.",
          "tips": "자신 없는 단어를 추측해서 넣으면 오히려 실패할 수 있습니다."
        }
      ]
    },
    steps: [
      "45초 세션을 시작하고 화면 중앙의 단어 목록 영역을 봅니다.",
      "단어 목록이 2초 동안 한꺼번에 나타나면 빠르게 읽으며 한 장면으로 묶습니다.",
      "입력창이 나타나면 마지막에 본 단어부터 입력합니다.",
      "모든 단어를 띄어쓰기나 쉼표로 구분해 12초 안에 입력하고 Enter로 제출합니다.",
      "모두 맞히면 1단어 늘고 틀리면 1단어 줄어드니, 점수와 최대 단어 수를 자신의 기록과 비교하세요."
    ],
    audience: "단어 기억력을 시험해 보고 싶은 학생과 직장인, 기억력 게임으로 머리를 쓰고 싶은 모든 사람.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
    related: [
      { href: "/ko/drills/memory/short-term-memory/digit-span", label: "숫자 기억력 테스트" },
      { href: "/ko/drills/memory/short-term-memory/color-sequence", label: "색깔 순서 기억 게임" },
      { href: "/ko/drills/memory/spatial-memory/grid-memorization", label: "격자 기억력 테스트" },
      { href: "/ko/drills/memory/spatial-memory/object-location", label: "위치 기억 테스트" },
      { href: "/ko/drills/memory/working-memory/n-back", label: "N-Back 작업기억 훈련" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <WordRecallClient copy={{
          "h1Keyword": "단어 기억력 테스트",
          "h1Suffix": " – 단어 회상·언어 기억력",
          "subtitle": "단어 목록을 기억하고 자유롭게 회상",
          "statScore": "점수",
          "statTime": "남은 시간",
          "statWords": "단어 수",
          "wordsUnit": "단어",
          "statBestScore": "최고 점수",
          "memorizePhase": "단어를 기억하세요",
          "btnSkip": "건너뛰기",
          "inputPhase": "기억한 단어 입력",
          "inputPlaceholder": "기억나는 단어들을 띄어쓰기로 구분하여 입력...",
          "btnSubmit": "단어 제출",
          "inputHint": "Enter 키를 눌러 제출할 수 있습니다",
          "feedbackPhase": "회상 결과 판정",
          "extraWordsLabel": "추가 또는 잘못 입력된 단어:",
          "startTitle": "단어 기억 Pro",
          "startSubtitle": "단어 기억력 • 자유 회상",
          "countdownSubtitle": "준비하세요",
          "newBest": "신기록",
          "pointsLabel": "포인트",
          "statAccuracy": "정확도",
          "statPeakWords": "최대 단어수",
          "statPerfects": "퍼펙트",
          "btnPlayAgain": "다시 도전",
          "rulesTitle": "훈련 규칙 및 점수 계산 체계",
          "aboutTitle": "단어 기억력 검사(Verbal Memory)에 대하여",
          "rulesItems": [
                    {
                              "num": "1",
                              "text": "단어 목록 자유 회상",
                              "highlight": "+150 PTS",
                              "result": "암기 단계에서 단어를 외우고 입력 단계에서 정확하게 입력"
                    },
                    {
                              "num": "2",
                              "text": "스팬 레벨 보너스",
                              "highlight": "최대 +135% PTS",
                              "result": "1라운드 = 150 × (1 + 0.15 × (단어 수 − 3))점"
                    },
                    {
                              "num": "3",
                              "text": "오답 및 시간 초과",
                              "highlight": "-1 단어",
                              "result": "빠뜨림·틀린 단어·12초 초과: 점수·시간 감점 없이 1단어 줄어듦"
                    },
                    {
                              "num": "4",
                              "text": "적응형 기억 스팬 측정",
                              "highlight": "자동 조절",
                              "result": "모두 맞히면 +1단어, 틀리면 −1단어 (3~12단어)"
                    }
          ],
          "wordBank": [
                    "사과",
                    "성곽",
                    "다리",
                    "다이아몬드",
                    "독수리",
                    "숲",
                    "정원",
                    "망치",
                    "섬",
                    "정글",
                    "기사",
                    "랜턴",
                    "산",
                    "바늘",
                    "바다",
                    "궁전",
                    "여왕",
                    "로켓",
                    "노을",
                    "신전",
                    "우산",
                    "계곡",
                    "창문",
                    "얼룩말",
                    "양초",
                    "용",
                    "깃털",
                    "은",
                    "금",
                    "대리석",
                    "수정",
                    "청동",
                    "그림자",
                    "영혼",
                    "지혜",
                    "명예",
                    "영광",
                    "꿈",
                    "폭풍",
                    "강",
                    "구름",
                    "불꽃",
                    "돌",
                    "천둥",
                    "무지개",
                    "불사조",
                    "시계",
                    "거울",
                    "모자"
          ]
}} />
      <DrillGuide guide={wordRecallGuide} />
      <RelatedDrills />
    </>
  );
}
