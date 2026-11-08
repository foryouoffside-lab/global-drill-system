import StrobeLatencyClient from '@/app/drills/visual/reaction-speed/light-reaction/StrobeLatencyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "반응속도 테스트 | 반속 테스트·평균 ms 측정 | SkillDrills",
  description: "반응속도 테스트: 화면이 빛나는 순간 클릭해 반응속도를 ms로 재는 무료 반속 테스트. 평균 기록을 비교하세요. 의료 진단은 아닙니다.",
  keywords: [
    "반응속도 테스트",
    "반응속도테스트",
    "반속 테스트",
    "반속테스트",
    "반응속도 테스트 평균",
    "반응속도 평균 ms",
    "반응속도 측정",
    "ms 테스트",
    "발로란트 반응속도 테스트",
    "반응속도 테스트 모바일",
    "반응속도 테스트 사이트",
    "시각 반응시간"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "반응속도 테스트 | 반속 테스트·평균 ms 측정 | SkillDrills",
    description: "무료 반응속도 테스트: 빛이 켜지는 순간 클릭하고 내 반응속도를 ms로 확인하세요. 평균과 기록을 같은 기기에서 비교합니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "반응속도 테스트 | 반속 테스트·평균 ms 측정 | SkillDrills",
    description: "반속 테스트: 빛 신호가 나타나는 순간 클릭해 반응속도를 ms로 기록하세요. 결과는 현재 브라우저에서만 처리됩니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/light-reaction'),
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
    { "@type": "ListItem", "position": 5, "name": "빛 반응속도 테스트", "item": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
  "name": "빛 반응속도 테스트 (시각 반사신경 검사)",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "description": "광학 섬광 자극에 대한 단순 시각 반응 시간(SRT) 및 광전기-신경근 신호 전달 잠복기를 밀리초 단위로 측정하는 신경인지 도구.",
  "featureList": [
    "performance.now() 고해상도 API 기반 밀리초(ms) 정밀 시각 잠복기 측정",
    "300ms ~ 2,500ms 범위의 무작위 자극 간격 제시를 통한 선행 예측 차단",
    "예측 오클릭 및 스팸 클릭 방지 휴리스틱 시스템 탑재",
    "외부 서버 통신 없는 완전한 브라우저 로컬 데이터 보관"
  ],
  "dateModified": "2026-09-05"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "빛 반응속도 테스트 — 시각 반사신경 측정 | SkillDrills",
  "alternateName": "Light Reaction Pro",
  "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction",
  "dateModified": "2026-09-05",
  "description": "무료 온라인 시각 반사속도 검사. 화면 중앙의 목표가 백색으로 점멸하는 순간 지체 없이 클릭하여 순발력을 측정하세요.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas를 지원하는 최신 웹 브라우저.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "단순 시각 반응 시간, 광학-운동 잠복기, 신경근 반사 속도, 피에롱의 법칙, 시각 주의력"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "빛 반응속도 반사 훈련",
  "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction",
  "description": "빛의 섬광에 반응하여 순간 순발력과 반사신경을 극대화하는 온라인 반응 훈련 게임.",
  "genre": ["Action", "Reaction Speed", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "KRW" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "빛 반응속도 테스트 진행 방법",
  "dateModified": "2026-09-05",
  "description": "스트로브 발광 프로토콜을 통해 시각 반응 시간과 신경근 반사 잠복기를 측정하는 4단계 방법.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "중앙 타깃 원반에 시선 고정",
      "text": "캔버스 중앙의 어두운 원형 타깃에 시선을 편안히 집중하고 불필요한 근육 긴장을 풉니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "예측할 수 없는 백색 섬광 대기",
      "text": "300ms에서 2,500ms 사이의 무작위 간격 동안 섣불리 누르지 않고 고도의 집중 상태를 유지합니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "백색 섬광 점멸 즉시 타격 실행",
      "text": "타깃이 순백색으로 번쩍이는 찰나 마우스로 클릭하거나 화면을 탭합니다 (+150점 × 콤보 × 레벨).",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "예측 스팸 클릭 지양",
      "text": "빛이 번쩍이기 전에 누르면 1.2초의 쿨다운 패널티가 발생하므로 진정한 신경 반사로 격발해야 합니다.",
      "url": "https://skilldrills.online/ko/drills/visual/reaction-speed/light-reaction#step-4"
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
      "name": "반응속도 테스트 평균은 몇 ms인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "단순 시각 반응시간 연구에서 건강한 성인은 대략 200~250ms 범위로 보고됩니다(Kosinski, 2008; Woods et al., 2015). 브라우저 테스트는 모니터 주사율, 마우스나 터치 입력, 브라우저 처리 지연이 더해져 보통 이보다 조금 높게 나옵니다. 한 번의 기록보다 같은 기기에서 여러 번 잰 평균을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "반속 테스트는 어떻게 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "시작 버튼을 누른 뒤 화면 중앙의 어두운 원을 바라봅니다. 0.3~2.5초 사이 무작위로 원이 하얗게 빛나면 바로 클릭하거나 화면을 탭하세요. 빛나기 전에 누르면 1.2초 동안 신호가 멈춥니다. 45초 세션이 끝나면 평균 반응속도와 정확도를 확인할 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "발로란트 반응속도 테스트로 써도 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "빛 신호에 반응하는 단순 반응속도만 따로 잴 수 있어 기준 기록으로는 쓸 만합니다. 하지만 발로란트나 다른 FPS의 교전에는 위치 선정, 크로스헤어 배치, 마우스 조준과 게임 판단이 함께 들어갑니다. 에임은 에임 연습 드릴로 따로 연습하고, 이 기록만으로 티어나 실력을 판단하지 마세요."
      }
    },
    {
      "@type": "Question",
      "name": "모바일과 PC에서 결과가 다른 이유는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "결과에는 화면이 신호를 그리는 시간과 입력이 전달되는 시간이 함께 들어갑니다. 60Hz 화면은 프레임 간격이 약 16.7ms, 144Hz는 약 6.9ms, 240Hz는 약 4.2ms입니다. 터치 입력, 브라우저와 기기 성능도 기록을 바꾸므로 같은 기기끼리만 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "반응속도는 연습하면 빨라지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "반복하면 신호를 기다리는 집중과 손 준비가 익숙해져 기록이 더 일정해지고 너무 일찍 누르는 실수가 줄어드는 경우가 많습니다. 단순 반응속도 자체의 향상 폭은 대체로 크지 않으며, 수면과 피로, 장비 지연이 숫자를 더 크게 바꾸기도 합니다. 의료 진단 도구는 아닙니다."
      }
    }
  ]
};

const lightReactionGuide = {
  heading: "반응속도 테스트(반속 테스트)로 재는 내 반응속도 ms",
  intro: [
    "이 반응속도 테스트는 화면 중앙의 원이 하얗게 빛나는 순간 클릭하는 단순 시각 반응 검사입니다. 기다리는 시간이 매번 달라 미리 누를 수 없고, 빛이 켜진 뒤 클릭까지 걸린 시간을 ms 단위로 기록합니다. 결과에는 화면, 브라우저, 마우스나 터치 입력의 지연도 함께 들어갑니다.",
    "빛 자극에 대한 신경근 연쇄 반응은 네 단계의 생리학적 경로를 거칩니다: (1) 망막 로돕신 이성질화에 따른 광전기 변환(~20–40 ms), (2) 외측슬상핵(LGN)을 거쳐 1차 시각피질 V1으로 향하는 구심성 신경 전달(~30–50 ms), (3) 후두정엽 및 보조운동영역에서의 지각 및 운동 계획 수립(~50–80 ms), (4) 피질척수로(Pyramidal tract)를 따라 손가락 굴근을 수축시키는 원심성 신호 하달(~30–50 ms)을 거치며, 건강한 일반인의 정상 반응 시간은 약 200–250 ms로 형성됩니다 (Kosinski, 2008; Jain et al., 2015; Shelton & Kumar, 2010).",
    "피에롱의 법칙(Piéron, 1952; Pins & Bonnet, 1996)에 따르면, 자극의 휘도가 배경 대비 높을수록 반응 잠복기는 쌍곡선 함수 형태로 단축됩니다. 이 테스트는 어두운 배경에 대비가 높은 흰색 신호를 사용해 신호를 알아보기 쉽게 했습니다. 포스너(Posner, 1980)의 공간 주의 연구와 Dye et al.(2009)의 연구는 주의와 연습이 반응 시간에 영향을 줄 수 있음을 보여 줍니다.",
    "측정 기준 및 하드웨어 정밀 보정: 모든 자극 점멸과 사용자 입력은 performance.now() 고정밀 API를 통해 밀리초 단위로 수집됩니다. 디스플레이 재생률과 마우스 USB 폴링 주기에 따른 하드웨어 양자화 지연(Woods et al., 2015)을 고려하여 분석되며, 모든 데이터는 로컬 환경에만 안전하게 격리됩니다."
  ],
  benchmarks: {
    title: "반응속도 테스트 연습 기준 (이 드릴 자체 기준)",
    headers: ["단계", "평균 반응 시간 (ms)", "점수・콤보 기준", "확인할 점"],
    rows: [
      ["1단계: 매우 빠름", "< 180 ms", "15,000점 이상 | 콤보 28x+", "부정 출발(미리 클릭)이 섞이지 않았는지 확인하세요."],
      ["2단계: 빠름", "180 – 219 ms", "10,500 – 14,999점 | 콤보 18x+", "속도를 유지하면서 편차를 줄여 보세요."],
      ["3단계: 보통", "220 – 259 ms", "6,000 – 10,499점 | 콤보 10x+", "브라우저 측정에서 흔히 보이는 범위입니다. 컨디션에 따라 달라집니다."],
      ["4단계: 조금 느림", "260 – 319 ms", "2,500 – 5,999점 | 콤보 5x+", "화면 지연, 눈의 피로, 집중력 저하를 점검하세요."],
      ["5단계: 연습 시작", "> 320 ms", "< 2,500점 | 콤보 < 5x", "60Hz 화면, 터치 입력 지연, 피로의 영향일 수 있습니다."]
    ],
    note: "이 기준은 SkillDrills 연습용 구간이며 연령별 순위, 사용자 백분위, 의학적 기준이 아닙니다. 화면, 입력 기기, 컨디션에 따라 결과가 달라집니다."
  },
  techniques: {
    title: "반응속도 테스트 결과를 안정시키는 훈련법",
    items: [
      {
        name: "중심와 사전 활성화 및 시선 고정",
        desc: "시야의 중심와(Fovea)를 중앙 목표점에 고정하면 주의 이동에 소모되는 20~30ms의 지연을 제거할 수 있습니다 (Posner, 1980).",
        tips: "어두운 중앙 타깃에 시선을 못박아 두세요. 섬광을 기다리는 동안 점수판이나 타이머로 시선이 흔들려서는 안 됩니다."
      },
      {
        name: "피에롱 대비 극대화 및 광수용체 프라이밍",
        desc: "최고 수준의 휘도 대비는 망막 신경절 발화 주파수를 높여 감각 변환 시간을 단축시킵니다 (Pins & Bonnet, 1996).",
        tips: "실내 조명을 살짝 어둡게 조절하여 동공을 미세하게 확장시키면 백색 섬광의 대비 체감과 신경 전달 속도가 극대화됩니다."
      },
      {
        name: "등척성 손가락 예비 장력 유지",
        desc: "손가락이 공중에 떠 있으면 키 이동 거리와 스위치 디바운스로 인해 불필요한 기계적 지연이 추가됩니다 (Woods et al., 2015).",
        tips: "손가락 끝을 마우스 버튼이나 화면에 가볍게 접촉시킨 채로 부드러운 예비 장력을 유지하여 무유격 격발을 준비하십시오."
      },
      {
        name: "고주사율 하드웨어 최적화",
        desc: "60Hz 모니터는 최대 16.7ms의 화면 지연을 추가하지만 240Hz 모니터는 이를 4.1ms로 압축합니다 (Woods et al., 2015).",
        tips: "144Hz 이상의 고주사율 모니터와 1,000Hz 폴링레이트 마우스를 사용하여 신체 본연의 반사 신경을 온전히 기록하십시오."
      }
    ]
  },
  steps: [
    "훈련 시작 버튼을 클릭하여 45초 세션을 활성화합니다.",
    "캔버스 중앙의 어두운 원형 타깃에 시선을 조용히 고정합니다.",
    "300ms에서 2,500ms 사이의 불규칙한 대기 시간 동안 침착하게 대기합니다.",
    "타깃이 순백색으로 번쩍이는 순간 지체 없이 마우스를 클릭합니다 (+150점 × 배율).",
    "세션 종료 후 평균 반응 시간, 최고 레벨, 정확도 평가 등급을 확인합니다."
  ],
  audience: "FPS e스포츠 게이머, 격투기 선수, 육상 단거리 선수, 모터스포츠 레이서 및 시각 운동 반사 신경을 극대화하고자 하는 모든 사용자.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('woods2015', 'kosinski2008', 'pins1996', 'posner1980', 'jain2015', 'dye2009'),
  related: [
    { href: "/ko/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go 충동 제어 검사" },
    { href: "/ko/drills/visual/depth-perception/distance-judgment", label: "거리 판별 심시력 검사" },
    { href: "/ko/drills/visual/tracking-accuracy/moving-target", label: "이동 표적 요격 훈련" },
    { href: "/ko/drills/visual/tracking-accuracy/multiple-targets", label: "다중 객체 추적 검사" },
    { href: "/ko/drills/visual/tracking-accuracy/pursuit-tracker", label: "스무스 퍼슈트 추적기" },
    { href: "/ko/drills/visual/visual-recognition/entropic-grid", label: "엔트로피 그리드 탐색 훈련" }
  ]
};

export default function StrobeLatencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <StrobeLatencyClient copy={{ title: "반응속도 테스트 (반속 테스트)", startCardTitle: "반응속도 테스트", startCardSubtitle: "빛이 켜지는 순간 클릭 · 반응속도 ms 측정" }} />
      <DrillGuide guide={lightReactionGuide} />
      <RelatedDrills />
    </>
  );
}
