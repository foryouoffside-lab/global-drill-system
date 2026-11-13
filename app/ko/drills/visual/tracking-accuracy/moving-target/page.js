import KineticInterceptClient from '@/app/drills/visual/tracking-accuracy/moving-target/KineticInterceptClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "동체시력 키우는 게임 | 이동 표적 요격 | SkillDrills",
  description: "벽에 튕기며 움직이다 순간이동하는 표적을 클릭해 맞히는 무료 동체시력 키우는 게임. 설치 없이 브라우저에서 45초로 시작해 명중마다 +2초, 빗나가면 -1초. 시력 검사가 아닙니다.",
  keywords: [
    "동체시력 키우는 게임",
    "동체시력 키우는 법",
    "이동 표적 요격",
    "움직이는 표적 클릭",
    "시각 추적 연습",
    "리드샷 연습",
    "궤적 예측"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "동체시력 키우는 게임 | 이동 표적 요격 | SkillDrills",
    description: "움직이는 표적의 궤적을 읽고 사라지기 전에 클릭해 맞히는 무료 브라우저 동체시력 키우는 게임입니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "동체시력 키우는 게임 | 이동 표적 요격 | SkillDrills",
    description: "이동 표적을 따라가며 궤적 예측과 요격 타이밍을 연습하는 무료 동체시력 키우는 게임입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/moving-target'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "훈련 카탈로그", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각 훈련", "item": "https://skilldrills.online/ko/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "추적 정확도", "item": "https://skilldrills.online/ko/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "동체시력 키우는 게임", "item": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "동체시력 키우는 게임: 이동 표적 요격",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "description": "벽에 튕겨 다니다 일정 시간이 지나면 다른 위치로 순간이동하는 구체를 클릭해 맞히는 브라우저 연습 게임입니다.",
  "featureList": [
    "벽에 반사되며 움직이고 제한 시간이 끝나면 새 위치로 이동하는 표적",
    "명중 150점 × 콤보 배율 × 레벨 보너스, 명중마다 +2초(최대 60초)",
    "레벨이 오를수록 표적이 빨라지고 작아지며 이동 주기가 짧아짐",
    "기록은 브라우저 로컬 저장소에만 보관"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "동체시력 키우는 게임: 이동 표적 요격 | SkillDrills",
  "alternateName": "Moving Target Pro",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target",
  "dateModified": "2026-11-12",
  "description": "무료 온라인 동체시력 키우는 게임. 화면을 튕겨 다니는 구체를 눈으로 따라가다가 다른 위치로 이동하기 전에 클릭해 맞히세요.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas를 지원하는 최신 웹 브라우저.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "움직이는 표적 시각 추적, 궤적 예측, 마우스 요격 정확도"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "동체시력 키우는 게임: 이동 표적 요격",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target",
  "description": "움직이는 표적을 따라가며 사라지기 전에 클릭해 맞히는 무료 온라인 동체시력 게임.",
  "genre": ["Action", "Aim Trainer", "Visual Tracking"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "동체시력 키우는 게임 하는 법",
  "dateModified": "2026-11-12",
  "description": "이동 표적 요격 게임을 시작하고 점수를 올리는 4단계 가이드.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "움직이는 구체를 눈으로 따라가기",
      "text": "카운트다운이 끝나면 주황색 구체가 나타나 한 방향으로 움직이며 벽에 튕깁니다. 커서를 표적 근처에 두고 함께 따라가세요.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "이동 타이머 확인",
      "text": "표적 주위의 링과 숫자는 표적이 다른 위치로 이동하기까지 남은 시간입니다. 처음에는 약 1초이며 레벨이 오를수록 짧아집니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "표적 클릭",
      "text": "표적을 클릭(터치)하면 명중입니다: +150점 × 콤보 × 레벨 보너스, 그리고 남은 시간 +2초(최대 60초).",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "빗나간 클릭 줄이기",
      "text": "표적 밖을 클릭하면 1초가 차감되고 콤보가 초기화됩니다. 시간이 0이 되면 세션이 끝납니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/moving-target#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "이 동체시력 키우는 게임은 어떻게 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면을 튕겨 다니는 구체를 클릭(터치)해 맞히면 됩니다. 표적은 정해진 시간(처음 약 1초, 레벨이 오를수록 최소 0.2초까지 단축)이 지나면 다른 위치로 이동합니다. 세션은 45초로 시작하고 명중마다 +2초(최대 60초)가 붙으며, 시간이 0이 되면 끝납니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수는 어떻게 계산되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "명중 1회당 150점에 콤보 배율과 레벨 보너스가 곱해집니다. 점수가 오르면 레벨이 연속적으로 올라가 표적이 더 빨라지고 작아지며 이동 주기도 짧아집니다."
      }
    },
    {
      "@type": "Question",
      "name": "빗나가면 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "표적 밖을 클릭하면 남은 시간이 1초 줄고 콤보가 0으로 초기화됩니다. 드릴 설정의 Target Timeouts(표적 시간 초과)가 켜져 있으면(기본값) 표적을 맞히지 못한 채 위치가 바뀌는 경우도 빗나감으로 계산되어 1초가 차감됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "스무스 퍼슈트(활동성 안구운동)와 사케이드(도약 안구운동)의 차이는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "스무스 퍼슈트는 움직이는 물체를 시야 중심에 두기 위해 눈이 미끄러지듯 따라가는 운동이고, 사케이드는 시선을 한 지점에서 다른 지점으로 빠르게 건너뛰는 운동입니다. 두 운동은 서로 다른 제어 경로를 가진다고 알려져 있습니다(Rashbass, 1961). 이 게임에서는 표적이 위치를 바꿀 때마다 사케이드로 다시 찾아야 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "움직이는 표적을 맞출 때 왜 약간 앞쪽을 노려야 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "보고, 판단하고, 손을 움직이는 데에는 시간이 걸리므로 클릭하는 순간 표적은 이미 조금 이동해 있습니다. 표적이 빠를수록 진행 방향 쪽을 조금 앞서 노리는 편이 명중에 유리합니다."
      }
    },
    {
      "@type": "Question",
      "name": "이 게임으로 동체시력이 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "게임 안에서 점수가 오르는 것은 이 과제에 익숙해졌다는 뜻입니다. 실제 시력, 스포츠 경기력이나 다른 과제로의 향상을 보장하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율이 결과에 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "표적은 화면이 갱신될 때마다 그려지므로 주사율이 높은 모니터에서는 움직임이 더 매끄럽게 보입니다. 기기와 마우스 환경이 다르면 점수를 직접 비교하기 어렵습니다."
      }
    },
    {
      "@type": "Question",
      "name": "무료인가요? 기록은 어디에 저장되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 회원가입이나 결제 없이 무료로 이용할 수 있습니다. 최고 점수와 콤보 기록은 사용 중인 브라우저의 로컬 저장소에만 저장됩니다."
      }
    }
  ]
};

const movingTargetGuide = {
  heading: "동체시력 키우는 게임: 이동 표적을 따라가 요격하는 법",
  intro: [
    "이 동체시력 키우는 게임은 화면을 튕겨 다니는 구체를 눈으로 따라가다가 클릭해 맞히는 브라우저 연습입니다. 표적은 일정한 방향과 속도로 움직이며 벽에 반사되고, 정해진 시간이 지나면 다른 위치로 이동하므로 계속 따라가면서 다시 찾아야 합니다.",
    "세션은 45초로 시작합니다. 명중마다 150점 × 콤보 × 레벨 보너스를 얻고 남은 시간이 2초 늘어나며(최대 60초), 빗나간 클릭은 1초를 차감하고 콤보를 초기화합니다. 점수가 오를수록 표적은 빨라지고 작아지며 이동 주기는 약 1초에서 최소 0.2초까지 짧아집니다.",
    "움직이는 물체를 눈으로 쫓는 스무스 퍼슈트는 비교적 느린 속도에서 정확하게 유지되고, 그보다 빨라지면 눈이 뒤처져 보정 사케이드로 따라잡게 됩니다(Krauzlis, 2004). 이 게임은 그런 상황을 단순한 클릭 과제로 연습하는 것이며, 시력이나 안구운동을 측정하는 검사가 아닙니다."
  ],
  benchmarks: {
    title: "SkillDrills 연습 구간 (이 게임 전용 참고치)",
    headers: ["구간", "표적 이동 주기", "점수 & 콤보", "플레이 특징"],
    rows: [
      ["구간 1", "< 0.25초", "16,000점+ | 콤보 25회+", "매우 빠르고 작은 표적을 연속으로 명중."],
      ["구간 2", "0.25 – 0.45초", "10,500 – 15,999점 | 콤보 16회+", "빠른 표적에도 빗나간 클릭이 적음."],
      ["구간 3", "0.46 – 0.70초", "6,000 – 10,499점 | 콤보 9회+", "직선 구간은 안정적, 벽 반사 직후에 가끔 놓침."],
      ["구간 4", "0.71 – 1.00초", "2,500 – 5,999점 | 콤보 4회+", "표적을 뒤쫓아 클릭하는 경우가 많음."],
      ["구간 5", "> 1.00초", "< 2,500점 | 콤보 < 4회", "게임에 익숙해지는 단계."]
    ],
    note: "SkillDrills가 정한 연습 구간이며 연구 기반 규준이나 시력 평가 기준이 아닙니다. 모니터 주사율과 마우스 환경에 따라 달라집니다."
  },
  techniques: {
    title: "움직이는 표적을 더 잘 맞히는 법",
    items: [
      {
        name: "진행 방향 앞쪽 노리기",
        desc: "클릭하는 동안에도 표적은 움직이므로 현재 위치를 그대로 클릭하면 뒤쪽으로 빗나가기 쉽습니다.",
        tips: "표적이 진행하는 방향으로 조금 앞을 노려 클릭하세요."
      },
      {
        name: "벽 반사 미리 읽기",
        desc: "표적은 벽에 닿으면 입사각 그대로 반사됩니다.",
        tips: "벽 쪽으로 커서를 쫓아가지 말고, 튕겨 나올 방향에 커서를 먼저 두세요."
      },
      {
        name: "커서를 함께 움직이기",
        desc: "멈춘 커서로 표적이 지나가길 기다리면 빠른 레벨에서 타이밍이 맞지 않습니다.",
        tips: "눈과 커서가 표적과 함께 부드럽게 움직이도록 따라가세요."
      },
      {
        name: "연타하지 않기",
        desc: "빗나간 클릭마다 1초가 줄고 콤보가 초기화됩니다.",
        tips: "커서가 표적 위에 있다고 확인될 때만 클릭하세요."
      }
    ]
  },
  steps: [
    "시작 버튼을 눌러 45초 세션을 시작합니다.",
    "나타난 구체를 눈과 커서로 따라갑니다.",
    "표적 주위 링이 줄어들기 전에, 진행 방향을 감안해 클릭합니다.",
    "명중하면 +150점 × 배율과 +2초, 빗나가면 -1초와 콤보 초기화.",
    "시간이 0이 되면 명중 수, 정확도, 최고 레벨과 최고 콤보를 확인합니다."
  ],
  audience: "FPS 게임에서 움직이는 상대를 맞히는 연습을 하고 싶은 사람, 그리고 가볍게 동체시력 게임을 즐기고 싶은 모든 사용자.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rashbass1961', 'krauzlis2004', 'land2000', 'bahill1980', 'woods2015'),
  related: [
    { href: "/ko/drills/visual/tracking-accuracy/multiple-targets", label: "다중 객체 추적 검사" },
    { href: "/ko/drills/visual/tracking-accuracy/pursuit-tracker", label: "시선 추적 게임" },
    { href: "/ko/drills/visual/reaction-speed/light-reaction", label: "순간 발광 반응 테스트" },
    { href: "/ko/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go 충동 제어 검사" },
    { href: "/ko/drills/visual/depth-perception/distance-judgment", label: "거리 판별 심시력 검사" },
    { href: "/ko/drills/visual/visual-recognition/entropic-grid", label: "엔트로피 그리드 탐색 훈련" }
  ]
};

export default function KineticInterceptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <KineticInterceptClient copy={{ title: "동체시력 키우는 게임: 이동 표적 요격" }} />
      <DrillGuide guide={movingTargetGuide} />
      <RelatedDrills />
    </>
  );
}
