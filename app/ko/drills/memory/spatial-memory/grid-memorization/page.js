import GridMemorizationClient from '@/app/drills/memory/spatial-memory/grid-memorization/GridMemorizationClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "순간 기억력 테스트 | 시각 기억 게임 | SkillDrills",
  description: "무료 순간 기억력 테스트: 격자에서 잠깐 빛나는 칸의 위치를 기억하고 같은 패턴을 다시 눌러 시각 기억력과 공간 기억력을 훈련하세요.",
  keywords: ['순간 기억력 테스트', '시각 기억력 테스트', '시각 기억력 게임', '공간 기억력 테스트', '격자 패턴 기억', '기억력 테스트 그림', '시각 작업기억', '단기 시각 기억력', '패턴 기억력 훈련', '두뇌 기억력 게임'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "순간 기억력 테스트 | 시각 기억 게임 | SkillDrills",
    description: "무료 순간 기억력 테스트: 빛나는 격자 패턴의 위치를 기억하고 브라우저에서 바로 재현하세요.",
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "순간 기억력 테스트 | 시각 기억 게임 | SkillDrills",
    description: "무료 순간 기억력 테스트: 빛나는 격자 패턴의 위치를 기억하고 브라우저에서 바로 재현하세요.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "기억력 훈련", "item": "https://skilldrills.online/ko/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "공간 기억력", "item": "https://skilldrills.online/ko/drills/memory/spatial-memory" },
    { "@type": "ListItem", "position": 4, "name": "순간 기억 테스트", "item": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "순간 기억 테스트 (시각 기억력 검사)",
  "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "sameAs": "https://ko.wikipedia.org/wiki/%EC%8B%9C%EA%B0%81_%EA%B8%B0%EC%96%B5",
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "순간 기억 테스트 (시각 기억력 검사)",
  "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization",
  "description": "4x4에서 5x5로 커지는 격자에서 1.5초 동안 켜진 칸의 위치를 기억하고 다시 눌러 복원하는 무료 순간 기억력 테스트 게임.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Spatial Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "순간 기억 테스트 (시각 기억력 검사)",
  "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "순간 기억 테스트로 시각 작업기억을 향상시키는 방법",
  "description": "시각 작업기억의 용량 한계를 극복하고 순간 제시되는 격자 패턴을 체계적으로 기억·복원하기 위한 4단계 인지 프로토콜.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization#step-1",
      
      "name": "시선 중앙 고정",
      "text": "패턴이 켜지기 전 격자 정중앙에 시선을 고정하여 주변시를 활용해 매트릭스 전체의 공간 구조를 한눈에 파악합니다."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization#step-2",
      
      "name": "게슈탈트 형태 청킹 실행",
      "text": "개별 타일 좌표를 따로 외우지 않고, 인접한 점등 타일을 기하학적 형태(직선, L자, 사각형, 삼각형 등)로 묶어 기억합니다."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization#step-3",
      
      "name": "운동-공간 궤적 시각화",
      "text": "1.5초 노출 시간 동안 점등된 타일들을 하나의 선으로 연결하듯 마음속으로 경로를 추적하여 운동 피질의 기억을 활성화합니다."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/grid-memorization#step-4",
      
      "name": "체계적인 격자 복원",
      "text": "기억이 사라지기 전에 청킹으로 묶어둔 기하학적 덩어리를 먼저 클릭하고, 남은 개별 타일을 채워 넣습니다."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "순간 기억 테스트(시각 기억력 검사)란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "격자에서 잠깐 켜진 칸들의 위치를 기억했다가 다시 눌러 복원하는 시공간 작업기억 연습 게임입니다. 숫자나 단어를 되뇌는 대신 시각적 배치를 순간적으로 기억하는 능력을 연습합니다. 의학적 검사나 진단 도구는 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "그리드 순간기억 훈련의 작동 방식은 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "4x4 격자에서 5칸이 1.5초 동안 보라색으로 켜집니다. 불이 꺼지면 켜졌던 칸을 모두 눌러 복원하며, 완성할 때마다 150점을 얻고 켜지는 칸이 1개씩 늘어납니다. 4x4에서 7칸을 통과하면 5x5 격자(5칸부터 최대 12칸)로 넘어갑니다. 60초 제한 시간은 복원 단계에서만 흐릅니다."
      }
    },
    {
      "@type": "Question",
      "name": "이 게임은 시각 패턴 검사(VPT)와 같은 것인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 시각 패턴 검사(Della Sala et al., 1997)는 격자 패턴을 사용하는 연구용 신경심리 검사이고, 이 게임은 비슷한 격자 회상 방식을 쓰는 무료 연습 도구일 뿐 그 검사의 절차나 규준을 따르지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "코르시 블록 검사(Corsi Block-Tapping Test)와의 차이점은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "코르시 블록 검사(Corsi, 1972)는 블록이 차례대로 두드려지는 동적인 시간적 순서를 기억하는 방식으로 '내적 서기(Inner Scribe)'를 활용합니다. 반면 본 그리드 테스트는 모든 타일이 동시에 켜져 정적 형태와 배치를 보관하는 '시각 캐시(Visual Cache)' 용량을 측정합니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수는 어떻게 계산되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "패턴 하나를 빠짐없이 복원할 때마다 150점입니다. 결과 화면의 등급은 1,150점을 최상위 기준으로 삼은 SkillDrills 연습 등급이며, 인구 평균이나 규준 점수가 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "공간 청킹(Chunking)을 활용하면 왜 기억력이 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "인간의 시각 작업기억은 약 3~4개의 독립된 항목만 동시에 저장할 수 있는 생리학적 한계가 있습니다 (Luck & Vogel, 1997; Cowan, 2001). 인접한 타일들을 사각형이나 선 등의 친숙한 기하학적 덩어리로 묶으면 여러 칸을 하나의 인지 단위로 압축하여 한계를 극복할 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "시각 캐시(Visual Cache)와 내적 서기(Inner Scribe)의 차이는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Logie(1995)의 시공간 작업기억 모델에서 '시각 캐시'는 형태, 색상, 정적 이미지를 수동적으로 보관하는 창고이며, '내적 서기'는 공간적 이동 경로를 능동적으로 되뇌고 업데이트하는 실행 메커니즘입니다."
      }
    },
    {
      "@type": "Question",
      "name": "왜 격자 패턴은 1.5초가 지나면 빠르게 잊혀지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "망막 감각 영상 기억(Iconic Memory)은 250~500밀리초 내에 급격히 소멸합니다. 1.5초 노출 동안 공간 청킹이나 심상 추적을 통해 작업기억으로 능동 전이시키지 않으면 시각적 잔상은 새로운 입력에 덮어씌워집니다."
      }
    },
    {
      "@type": "Question",
      "name": "잘못된 타일을 클릭했을 때 점수 감점 페널티가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 잘못된 칸을 누르면 그 라운드는 바로 끝나지만 점수나 남은 시간은 줄지 않습니다. 같은 난이도에서 새 패턴이 나옵니다."
      }
    },
    {
      "@type": "Question",
      "name": "시각 기억력은 실제 일상이나 게임에서 어떻게 활용되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "미니맵의 위치 정보를 한눈에 기억하거나 바둑·체스 판의 배치를 기억하는 것처럼, 짧게 본 배치를 기억하는 상황과 비슷한 연습입니다. 다른 과제로의 전이 효과는 보장되지 않습니다."
      }
    }
  ]
};

const gridGuide = {
  intro: [
  "순간 기억력 테스트는 격자에서 1.5초 동안 켜진 칸의 위치를 기억했다가 다시 눌러 복원하는 무료 시각 기억 게임입니다. 4x4 격자의 5칸에서 시작해 성공할 때마다 칸이 늘어나고, 이후 5x5 격자에서 최대 12칸까지 올라갑니다. 숫자나 단어를 되뇌는 대신 시각적 배치를 기억하는 연습입니다.",
  "시공간 기억 폭에 대한 임상 연구는 Pietro Corsi(1972)의 코르시 블록 검사로 시작되었으며, 시공간 기억이 언어적 숫자 기억과 해부학적·기능적으로 구분된 독립 신경망에서 작동함이 증명되었습니다(Milner, 1971). 이후 Della Sala 등(1997)은 정적인 격자 패턴 기억을 따로 다루는 시각 패턴 검사(VPT)를 발표했습니다. 이 게임은 비슷한 형식의 연습 도구이며 VPT 자체는 아닙니다.",
  "현대 인지신경과학에서 Robert H. Logie(1995)와 Alan Baddeley(2000)는 시공간 메모장을 '시각 캐시(형태·색상·정적 배치를 담는 수동 저장고)'와 '내적 서기(공간 이동 및 리허설을 담당하는 능동 기전)'로 세분화했습니다. 나아가 Steven J. Luck & Edward K. Vogel(1997)과 Nelson Cowan(2001)의 연구에 따르면 가공되지 않은 순수 시각 작업기억 용량은 3~4개 항목으로 엄격히 제한됩니다. 이 한계를 넘어 매트릭스 기억 폭을 넓히려면 점등 타일을 의미 있는 도형으로 묶는 '공간 청킹(Spatial Chunking)'이 필수적입니다.",
  "진행 방식: 패턴은 1.5초 동안 보이고, 60초 제한 시간은 칸을 눌러 복원하는 동안에만 줄어듭니다. 패턴을 완성하면 150점을 얻고, 잘못된 칸을 누르면 감점 없이 같은 난이도의 새 패턴이 나옵니다. 반응 시간은 측정하지 않습니다.",
  "데이터: 점수와 최고 기록은 브라우저 localStorage에만 저장되며 서버로 전송되지 않습니다.",
  "본 도구는 인지 기능 이해와 자기 훈련을 위한 무료 브라우저 게임이며, 의료 기기나 의학적 진단 도구가 아닙니다. 인지 건강에 우려가 있다면 전문 의료진과 상담하십시오."
],
  benchmarks: {
    title: "SkillDrills 연습 구간 (1회 플레이)",
    headers: ["구간", "점수", "완성한 패턴", "도달 단계"],
    rows: [
      ["상위 연습 구간", "1,200점 이상", "8개 이상", "5x5 격자, 10~12칸 패턴"],
      ["중간 연습 구간", "600~1,050점", "4~7개", "5x5 격자, 6~9칸 패턴"],
      ["초기 연습 구간", "150~450점", "1~3개", "4x4 격자 6~7칸, 3개 완성 시 5x5 진입"],
      ["시작 단계", "0점", "0개", "4x4 격자, 5칸 패턴"]
    ],
    note: "점수는 완성한 패턴 수 × 150점입니다. 구간은 게임 규칙에서 계산한 SkillDrills 연습 기준이며 인구 통계나 규준이 아닙니다."
  },
  techniques: {
    title: "매트릭스 시각 기억력을 확장하는 과학적 전략",
    items: [
  {
    "name": "게슈탈트 공간 형태 청킹",
    "desc": "인접한 점등 타일을 삼각형, 직선, 사각형, 알파벳 글자 등의 친숙한 기하학적 도형으로 묶어 인식합니다 (Wertheimer, 1923; Della Sala et al., 1999). 7개의 좌표를 2~3개의 도형으로 묶으면 기억할 단위가 줄어듭니다.",
    "tips": "개별 타일을 낱개로 세지 말고, 연결된 모서리나 직선 블록을 가장 먼저 탐색하세요."
  },
  {
    "name": "빈칸(여백) 기억법",
    "desc": "특정 영역에 타일이 빽빽하게 켜져 있다면, 켜지지 않은 '빈칸'을 기억합니다. 6개 구역 중 4개의 불빛을 외우는 것보다 꺼져 있는 2개의 빈칸 위치를 외우는 것이 기억 효율이 훨씬 높습니다.",
    "tips": "타일이 밀집된 곳에서는 어두운 빈 공간의 위치만 의식적으로 포착하세요."
  },
  {
    "name": "운동감각적 서기(Inner Scribe) 궤적 추적",
    "desc": "1.5초 노출 동안 점등된 타일들을 하나의 연속된 선으로 연결하듯 마음속으로 경로를 그리며 내적 서기(Logie, 1995)를 활성화합니다. 운동 피질의 경로 계획이 수동적 시각 캐시의 파지를 보강합니다.",
    "tips": "좌상단에서 우하단 등 일관된 방향으로 선을 그리면 패턴에 방향성이 생겨 회상이 쉬워집니다."
  },
  {
    "name": "중앙 시선 고정과 주변시 스냅샷",
    "desc": "라운드 시작 시 격자의 정중앙에 시선을 고정합니다. 타일 하나하나로 눈을 빠르게 굴리면(단속성 운동) 잔상이 흐려지므로, 주변시를 통해 전체 공간 토폴로지를 한 장의 사진처럼 담아냅니다.",
    "tips": "초점을 약간 부드럽게 풀고 패턴 전체를 하나의 실루엣으로 포착하는 느낌을 유지하세요."
  }
]
  },
  steps: [
  "격자 중앙에 시선을 고정하고 패턴이 켜지기를 기다립니다.",
  "1.5초 동안 점등된 타일들을 즉시 2~3개의 기하학적 도형(청크)으로 묶습니다.",
  "밀집된 구역에서는 켜지지 않은 빈칸(여백)을 찾아 정보량을 줄입니다.",
  "불이 꺼지면 기억해둔 기하학적 덩어리를 격자판 위에 신속하게 탭하여 복원합니다.",
  "4x4에서 5x5로 확장되는 격자판에서 자신의 시각 작업기억 한계치를 지속적으로 갱신합니다."
],
  audience: "미니맵 상황 파악 능력을 높이고 싶은 FPS 게이머, 기하학 및 입체 공간을 다루는 이공계 학생, 방사선과 의사, 바둑 및 체스 플레이어, 비언어적 시각 기억력을 극대화하고 싶은 모든 사람.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
  related: [
  {
    "href": "/ko/drills/memory/working-memory/n-back",
    "label": "3-Back 작업기억 훈련"
  },
  {
    "href": "/ko/drills/cognitive/focus/concentration-grid",
    "label": "슐테 테이블 (집중력 격자)"
  },
  {
    "href": "/ko/drills/memory/short-term-memory/digit-span",
    "label": "숫자 기억 폭 테스트"
  },
  {
    "href": "/ko/drills/visual/reaction-speed/light-reaction",
    "label": "반응속도 테스트"
  },
  {
    "href": "/ko/drills/reaction-speed/reflex-training-drill",
    "label": "순발력 테스트 (반사신경 게임)"
  }
]
};

export default function LocalizedGridMemorizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GridMemorizationClient copy={{
        "h1Keyword": "순간 기억력 테스트",
        "h1Suffix": " 시각 기억 게임",
        "subtitle": "빛나는 칸의 위치를 기억하는 격자 훈련",
        "caption": "시각 작업기억은 한 번에 약 4개의 독립된 대상을 저장할 수 있으며, 이 한계는 대상의 복잡도가 아닌 개수에 의해 결정됩니다 (Luck & Vogel, 1997). 정적 격자 매트릭스 패턴은 뇌의 형태·위치 수동 보관소인 시각 캐시(Visual Cache)를 직접 측정합니다 (Logie, 1995).",
        "statScore": "점수",
        "statTime": "남은 시간",
        "statGridSize": "격자 크기",
        "statBest": "최고 기록",
        "hudScore": "점수",
        "hudTime": "시간",
        "startTitle": "그리드 순간기억 Pro",
        "startSubtitle": "시각 기억력 • 격자",
        "countdownSubtitle": "준비하세요",
        "newBest": "최고 기록 갱신",
        "pointsLabel": "점수",
        "statAccuracy": "정확도",
        "cellsUnit": "칸",
        "statPeakPattern": "최대 패턴",
        "statPerfects": "완벽 성공",
        "btnPlayAgain": "다시 시작",
        "rulesTitle": "규칙 및 점수 계산 방식",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "패턴 기억",
                        "highlight": "+150 PTS",
                        "result": "점등된 타일 위치를 기억하고 탭하여 복원"
                },
                {
                        "num": "2",
                        "text": "난이도 상승",
                        "highlight": "4x4 → 5x5",
                        "result": "정답 시 매트릭스와 점등 칸 수가 점진적 확장"
                },
                {
                        "num": "3",
                        "text": "오답",
                        "highlight": "감점 없음",
                        "result": "라운드 종료, 점수·시간 차감 없음"
                },
                {
                        "num": "4",
                        "text": "레벨 유지",
                        "highlight": "현재 레벨 유지",
                        "result": "실패 시 같은 단계의 새 패턴으로 재도전"
                }
        ]
}} />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
