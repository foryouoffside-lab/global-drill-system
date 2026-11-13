import ChromaSyncClient from '@/app/drills/visual/reaction-speed/go/no-go/ChromaSyncClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "고노고 과제 (Go/No-Go) 무료 온라인 반응 억제 테스트 | SkillDrills",
  description: "고노고 과제를 브라우저에서 무료로 해 보세요. 초록 원은 바로 클릭, 빨간 원은 누르지 않고 참는 반응 억제 연습입니다. 오반응과 놓침을 기록합니다.",
  keywords: [
    "고노고 과제",
    "고노고 테스트",
    "Go/No-Go 과제",
    "Go/No-Go 테스트",
    "반응 억제",
    "반응 억제 테스트",
    "억제 조절 게임",
    "충동성 게임",
    "오반응 누락 오류"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "고노고 과제 (Go/No-Go) 무료 온라인 반응 억제 테스트 | SkillDrills",
    description: "초록 원은 바로 클릭, 빨간 원은 참기. 반응 억제와 오반응을 브라우저에서 확인하는 무료 고노고 과제입니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "고노고 과제 (Go/No-Go) 무료 온라인 반응 억제 테스트 | SkillDrills",
    description: "초록은 클릭, 빨강은 참기. 반응 억제를 연습하는 무료 고노고 과제."
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/go/no-go'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "훈련 카탈로그", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각 훈련", "item": "https://skilldrills.online/ko/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "반응 속도", "item": "https://skilldrills.online/ko/drills/visual/reaction-speed" },
    { "@type": "ListItem", "position": 5, "name": "고노고 과제", "item": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Inhibitory_control"],
  "name": "고노고 과제 (반응 억제 테스트)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "description": "초록 Go 신호에는 클릭하고 빨간 No-Go 신호에는 누르지 않고 참는 브라우저용 고노고 과제입니다. 오반응, 놓침, 반응 시간을 기록하는 연습 도구입니다.",
  "featureList": [
    "performance.now() API로 반응 시간을 ms 단위로 기록",
    "레벨이 오르면 신호 표시 시간이 약 600ms에서 최소 100ms까지 짧아짐",
    "오반응(커미션 오류)과 놓침(오미션 오류)을 구분해 기록",
    "기록은 브라우저 안(LocalStorage)에만 저장"
  ],
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "고노고 과제 (Go/No-Go) 무료 온라인 반응 억제 테스트 | SkillDrills",
  "alternateName": "Go/No-Go Pro",
  "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go",
  "dateModified": "2026-11-08",
  "description": "무료 온라인 고노고 과제. 초록 Go 신호에는 클릭하고 빨간 No-Go 신호에서는 멈추는 반응 억제 연습입니다.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas를 지원하는 최신 브라우저.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "반응 억제, 오반응 줄이기, 색 판별 후 반응하기"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "고노고 과제 (반응 억제 훈련)",
  "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go",
  "description": "초록이면 클릭, 빨강이면 멈추는 반응 억제 브라우저 게임.",
  "genre": ["Action", "Brain Game", "Reaction Speed"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "고노고 과제 하는 법",
  "dateModified": "2026-11-08",
  "description": "브라우저용 고노고 과제를 하는 4단계.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "화면 중앙에 시선 두기",
      "text": "원이 나타나는 화면 중앙을 보고, 손가락과 마우스에 힘을 빼고 기다립니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "초록 Go 신호가 나오면 바로 클릭",
      "text": "초록 원이 나오면 사라지기 전에 화면을 클릭하거나 탭합니다(+150점 × 콤보). 키보드 입력은 지원하지 않습니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "빨간 No-Go 신호에서는 참기",
      "text": "빨간 원이 나오면 사라질 때까지 누르지 않고 기다립니다. 참으면 +100점입니다. 원이 없을 때 클릭하거나 연타해도 오반응으로 처리됩니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "빨라져도 색을 확인하고 누르기",
      "text": "레벨과 콤보가 오르면 원의 표시 시간이 최소 100ms까지 짧아집니다. 색을 확인한 뒤 누르는 습관을 유지합니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/go/no-go#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "고노고 과제란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "자주 나오는 Go 신호에는 바로 반응하고, 가끔 나오는 No-Go 신호에서는 반응을 멈추는 과제입니다. 심리학에서 반응 억제를 살펴보는 과제로 쓰여 왔습니다. 이 페이지는 그 방식을 빌린 브라우저 연습으로, 초록 원에서 클릭하고 빨간 원에서는 누르지 않고 기다립니다."
      }
    },
    {
      "@type": "Question",
      "name": "고노고 과제는 어떻게 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "'훈련 시작'을 누르면 45초로 시작합니다. 화면 중앙에 초록 원이 나오면 클릭하거나 탭하고, 빨간 원이 나오면 사라질 때까지 참습니다. 맞힐 때마다 2초가 늘어나며(최대 60초), 신호는 약 70%가 초록, 30%가 빨강입니다. 입력은 마우스와 터치만 되며 키보드는 지원하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "오반응과 놓침은 어떻게 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "오반응(커미션 오류)은 빨간 No-Go 신호나 원이 없는 순간에 눌러 버리는 것입니다. 놓침(오미션 오류)은 초록 Go 신호가 사라지기 전에 누르지 못한 것입니다. 앞의 것은 멈추는 힘, 뒤의 것은 주의가 끊기거나 반응이 늦었다는 신호로 볼 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "빨간색인 걸 알면서도 왜 눌러 버리나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "초록이 더 자주 나오기 때문에 누를 준비가 습관이 되기 때문입니다. 반응을 시작하는 과정과 멈추는 과정이 경쟁하고, 멈추는 과정이 먼저 도착할 때만 반응을 막을 수 있다는 설명이 있습니다(Logan & Cowan, 1984). 표시 시간이 짧아질수록 멈출 여유가 줄어 오반응이 늘기 쉽습니다."
      }
    },
    {
      "@type": "Question",
      "name": "FPS 게임 연습이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "쏘기 전에 색을 보고 판단한다는 점은 적과 아군을 구분한 뒤 쏘는 상황과 비슷합니다. 하지만 이 과제는 화면 중앙의 원에 반응할 뿐이며 조준 이동, 시야 확인, 이동, 소리는 포함하지 않습니다. 발로란트 등의 실력이 오른다고 보장하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "결과가 매번 다른 이유는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "결과는 화면, 입력 기기, 졸음, 집중도에 따라 달라집니다. 같은 기기와 비슷한 컨디션에서 여러 번 해 보고 기록을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "연습하면 반응 억제가 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "같은 과제를 반복하면 그 과제의 점수는 오르기 쉽습니다. 다만 일상생활이나 다른 게임까지 효과가 이어지는지는 연구 결과가 일관되지 않고 개인차도 있습니다. 같은 조건에서 기록을 비교하는 용도로 쓰세요."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율이 결과에 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "줍니다. 화면은 60Hz에서 약 16.7ms, 240Hz에서 약 4.2ms마다 갱신되고, 입력 기기에도 지연이 있습니다(Woods et al., 2015). 다른 사람과 비교하기보다 같은 기기와 브라우저에서 내 기록끼리 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "기록이 외부로 전송되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수와 기록은 사용 중인 브라우저 안(LocalStorage)에 저장됩니다. 브라우저 데이터를 지우면 이전 기록도 사라질 수 있습니다."
      }
    }
  ]
};

const goNoGoGuide = {
  heading: "고노고 과제로 연습하는 반응 억제",
  intro: [
    "고노고 과제(Go/No-Go)는 자주 나오는 신호에는 반응하고, 가끔 나오는 신호에서는 반응을 멈추는 과제입니다. 빨리 누르는 것뿐 아니라 누르면 안 되는 순간에 멈출 수 있는지를 본다는 점이 단순 반응속도 테스트와 다릅니다.",
    "이 브라우저 버전에서는 화면 중앙에 초록 원(Go) 또는 빨간 원(No-Go)이 나옵니다. 초록은 클릭하거나 탭하고, 빨강은 누르지 않고 기다립니다. 원이 없을 때의 클릭이나 빠른 연타도 오반응으로 처리됩니다. 레벨이 오르면 표시 시간이 약 600ms에서 짧아져 최소 100ms가 됩니다.",
    "선택해서 반응하는 과제의 발상은 돈더스(1868)의 반응 시간 연구로 거슬러 올라가며, 반응을 시작하는 과정과 멈추는 과정의 경쟁은 Logan & Cowan(1984)이 모델로 정리했습니다. 이 점수는 화면, 입력 기기, 브라우저를 포함한 연습 결과입니다.",
    "시간은 브라우저의 performance.now()로 잽니다. 디스플레이 갱신과 입력 지연이 결과에 더해지므로(Woods et al., 2015) 같은 기기끼리 기록을 비교하세요. 데이터는 이 기기의 브라우저 안에 저장됩니다."
  ],
  benchmarks: {
    title: "오반응률 연습 기준 (이 드릴 자체 기준)",
    headers: ["단계", "오반응률", "점수와 콤보", "보는 법"],
    rows: [
      ["상급", "2.0% 미만", "16,000점 이상 / 콤보 30 이상", "표시가 짧아져도 색을 확인하고 누른다"],
      ["안정", "2.0~4.9%", "11,000~15,999점 / 콤보 20 이상", "오반응이 적다. 속도를 조금씩 올려도 되는 단계"],
      ["보통", "5.0~9.9%", "6,500~10,999점 / 콤보 12 이상", "템포가 빨라지면 빨강에서 누르는 경우가 있다"],
      ["연습 중", "10.0~18.0%", "3,000~6,499점 / 콤보 6 이상", "색을 보기 전에 누르는 경우가 많다. 속도보다 정확도 우선"],
      ["기초", "18.0% 초과", "3,000점 미만 / 콤보 6 미만", "빨강에서 멈추기와 연타하지 않기부터 연습"]
    ],
    note: "이 표는 SkillDrills 연습용 기준이며 연구 기준값이나 연령별 평균이 아닙니다. 졸음, 집중도, 화면 환경에 따라 결과가 달라집니다."
  },
  techniques: {
    title: "고노고 과제에서 오반응을 줄이는 요령",
    items: [
      {
        name: "색을 확인하고 누르기",
        desc: "원이 나타났다는 사실이 아니라 색을 신호로 삼습니다. 무언가 보였다고 느끼는 순간 누르면 빨강에서도 누르기 쉽습니다.",
        tips: "처음에는 조금 느려도 괜찮으니 초록임을 확인한 뒤 클릭합니다. 오반응이 줄면 속도를 올립니다."
      },
      {
        name: "손가락 힘 빼고 기다리기",
        desc: "버튼을 반쯤 누른 상태로 기다리면 멈추는 것이 늦어집니다.",
        tips: "마우스나 터치 화면 위에 손가락을 가볍게 올려 두고 누르지 않은 채 대기합니다."
      },
      {
        name: "리듬으로 누르지 않기",
        desc: "초록이 이어지면 일정한 템포로 누르는 버릇이 생기고, 드물게 나오는 빨강에서 오반응이 늘어납니다(Robertson et al., 1997).",
        tips: "매번 새로운 신호로 봅니다. 원이 없을 때는 클릭하지 마세요. 연타하면 원이 나오지 않습니다."
      },
      {
        name: "같은 환경에서 기록하기",
        desc: "표시 시간이 짧은 단계에서는 화면 갱신 간격과 입력 지연의 차이도 결과에 드러납니다(Woods et al., 2015).",
        tips: "모니터, 브라우저, 입력 기기, 시간대를 맞추고 오반응률과 평균 반응을 비교합니다."
      }
    ]
  },
  steps: [
    "'훈련 시작'을 눌러 45초로 시작하는 고노고 과제를 시작합니다.",
    "원이 나오는 화면 중앙에 시선을 둡니다.",
    "초록 Go 원이 나오면 사라지기 전에 클릭하거나 탭합니다.",
    "빨간 No-Go 원이 나오면 사라질 때까지 누르지 않고 기다립니다.",
    "끝나면 오반응률, 평균 반응, 도달 레벨을 확인합니다."
  ],
  audience: "고노고 과제를 온라인으로 해 보고 싶은 분, 빠르기뿐 아니라 '누르지 않는 판단'을 연습하고 싶은 게이머와 운동하는 분께 맞습니다.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('donders1868', 'logan1984', 'robertson1997', 'woods2015'),
  related: [
    { href: "/ko/drills/visual/reaction-speed/light-reaction", label: "반응속도 테스트" },
    { href: "/ko/drills/reaction-speed", label: "반응속도 훈련" },
    { href: "/ko/drills/visual/depth-perception/distance-judgment", label: "거리 판별 심시력 검사" },
    { href: "/ko/drills/visual/tracking-accuracy/moving-target", label: "이동 표적 요격 훈련" },
    { href: "/ko/drills/visual/tracking-accuracy/multiple-targets", label: "다중 객체 추적 검사" },
    { href: "/ko/drills/visual/visual-recognition/entropic-grid", label: "엔트로피 그리드 탐색 훈련" }
  ]
};

export default function ChromaSyncPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <ChromaSyncClient copy={{ title: "고노고 과제 (반응 억제 테스트)", subtitle: "초록 원은 바로 클릭, 빨간 원은 누르지 말고 참기. 브라우저에서 무료로 하는 고노고 과제입니다." }} />
      <DrillGuide guide={goNoGoGuide} />
      <RelatedDrills />
    </>
  );
}
