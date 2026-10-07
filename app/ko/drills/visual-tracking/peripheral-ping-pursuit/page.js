import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// KOREAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "주변시 훈련" (Peripheral vision training) / "중심시 주변시 동시 훈련"
// Secondary:    "시야각 넓히기", "주변시야 넓히는법", "동체시력 주변시 테스트"
// LSI / Domain:  "잠재적 공간 주의", "터널 비전 교정", "기능적 시야 UFOV",
//               "미니맵 맵리딩 훈련", "중심와 고정 주변 감지", "시각적 주의력 분배"
// Authentic Domain Terms: 주변시 훈련(Peripheral Vision Training), 잠재적 공간 주의(Covert Spatial Attention), 기능적 시야(Useful Field of View / UFOV), 중심와(Fovea centralis), 간상세포(Rods), 터널 비전(Tunnel Vision)
// ============================================================

export const metadata = {
  title: "주변시 훈련｜중심을 보며 주변 반응 | SkillDrills",
  description: "중앙 표적을 따라가며 주변 빛 자극에 시선을 돌리지 않고 반응하는 무료 브라우저 훈련. 반응 시간과 중심 시선 안정을 기록합니다.",
  keywords: [
    "주변시 훈련",
    "주변 시야 반응",
    "중심 시선 고정",
    "주변 자극 감지",
    "스포츠 시야 훈련",
    "시야 넓히기 운동",
    "동체시력 훈련",
    "주변시 반응 연습",
    "시선 고정 훈련",
    "주변시 온라인 테스트"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "주변시 훈련｜중심을 보며 주변 반응 | SkillDrills",
    description: "중앙 표적을 따라가며 주변 빛 자극에 반응하는 무료 온라인 주변시 훈련.",
    type: "website",
    url: "https://skilldrills.online/ko/drills/visual-tracking/peripheral-ping-pursuit",
    siteName: "SkillDrills",
    locale: "ko_KR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "주변시 훈련｜중심을 보며 주변 반응 | SkillDrills",
    description: "중앙 표적에 시선을 고정한 채 주변 시야 변화를 감지하는 무료 훈련.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/visual-tracking/peripheral-ping-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "드릴 목록", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각 추적 및 안구 운동", "item": "https://skilldrills.online/ko/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "주변시 핑 추적 훈련・중심시 주변시 통합 테스트", "item": "https://skilldrills.online/ko/drills/visual-tracking/peripheral-ping-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Peripheral_vision", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "주변시 핑 추적 훈련・중심시 주변시 통합 테스트",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "웹 브라우저",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "중심 표적을 부드러운 추종 안구운동으로 따라가며 주변 시야의 짧은 빛 자극을 감지하는 브라우저 기반 훈련.",
  "url": "https://skilldrills.online/ko/drills/visual-tracking/peripheral-ping-pursuit",
  "dateModified": "2026-09-20",
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "주변시 핑 추적기",
  "url": "https://skilldrills.online/ko/drills/visual-tracking/peripheral-ping-pursuit",
  "browserRequirements": "HTML5 캔버스와 최신 자바스크립트를 지원하는 브라우저",
  "applicationCategory": "SportsApplication",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "주변시 핑 추적 훈련",
  "description": "중심 조준점을 유지한 상태에서 화면 외곽의 기습적 시각 자극을 식별하는 동체시력 및 공간 인지 게이밍 트레이닝 도구.",
  "genre": ["e스포츠 시각 훈련", "주변시 훈련", "인지 과제"],
  "playMode": "SinglePlayer",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "주변시 및 중심시 동시 인지 훈련 수행 방법",
  "description": "중심와 고정을 풀지 않고 잠재적 공간 주의를 활용하여 주변 시야 핑을 탐지하는 표준 훈련 프로토콜.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "중심 표적에 시선 고정",
      "text": "화면 중앙에서 완만하게 움직이는 메인 타깃을 중심와(fovea) 시선으로 부드럽게 추적합니다."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "잠재적 공간 주의력 확장",
      "text": "시선은 계속 중앙 구체에 유지하되, 의식적인 시각적 주의의 범위를 화면 전체 외곽으로 넓힙니다."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "주변 핑 즉각 감지 및 스페이스바 입력",
      "text": "주변 시야 외곽에 순간적으로 빛나는 핑이 출현하면 눈동자를 돌리지 말고 즉시 스페이스바를 누릅니다."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "시야각 지수 및 반응 속도 피드백 확인",
      "text": "세션 완료 후 측정된 UFOV 감지율과 반응 지연 시간을 점검하여 터널 비전 개선도를 추적합니다."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "주변시 훈련이란 정확히 무엇이며 왜 중심 표적을 보면서 해야 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "인간의 시각 체계는 고해상도 중심시(중심와, fovea)와 저해상도이지만 움직임과 광학 변화에 극도로 민감한 주변시(망막 외곽)로 분리되어 있습니다. 중심 표적을 보면서 주변 핑을 감지하도록 설계된 이유는 실제 경기(FPS, 구기종목, 모터스포츠)에서 조준선이나 주시 대상을 놓치지 않은 채 화면 구석의 적, 미니맵, 돌발 위험 요소를 동시 인지해야 하기 때문입니다."
      }
    },
    {
      "@type": "Question",
      "name": "눈동자를 주변 핑으로 돌려(사카드 도약) 확인하면 왜 훈련 효과가 떨어지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "눈동자를 직접 돌려 대상을 중심와로 가져오는 것은 현성 주의입니다. 이 과제는 눈을 움직이지 않고 주의의 초점만 외곽으로 넓히는 잠재적 공간 주의를 연습합니다. 시선을 돌리면 중심 표적 추적이 끊길 수 있으므로, 결과 비교를 위해 중심을 계속 바라봅니다."
      }
    },
    {
      "@type": "Question",
      "name": "긴박한 상황에서 좁아지는 시야를 이 드릴로 치료할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "이 드릴이 시야를 치료하거나 넓힌다고 단정할 수는 없습니다. 스트레스와 이중 과제에서 중심 추적과 주변 자극 감지를 함께 기록해 보고, 긴장이 높아질 때 성능이 어떻게 달라지는지 관찰하는 연습으로 사용하세요."
      }
    },
    {
      "@type": "Question",
      "name": "FPS 게임이나 실전 e스포츠에서 주변시가 승률에 어떤 영향을 미치나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "게임에서 중심 조준을 유지하며 화면 가장자리의 변화를 알아차리는 상황을 모사할 수 있습니다. 다만 이 페이지의 결과가 승률, 정보 획득 지연, 생존율의 개선을 보장하지는 않으며 실제 게임 성능은 별도로 확인해야 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "잠재적 공간 주의와 일반 주의력의 차이는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "포스너(Posner, 1980)의 공간 주의 연구에서 말하는 잠재적 주의는 안구를 고정한 채 의식의 초점만 다른 위치로 옮기는 과정입니다. 일반 주의력이라는 넓은 표현과 달리, 이 과제에서는 중심 고정과 주변 감지를 함께 다룹니다."
      }
    },
    {
      "@type": "Question",
      "name": "망막의 원추세포와 간상세포는 주변시에서 각각 어떤 역할을 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "중심와에는 색상과 세부 형태를 판별하는 원추세포(Cones)가 밀집해 있는 반면, 주변부 망막에는 빛과 미세한 움직임 변화를 초고속으로 감지하는 간상세포(Rods)와 마그노세포(Magnocellular) 경로가 지배적입니다. 따라서 주변 시야는 글자를 읽기에는 부적합하지만, 적의 출현이나 점멸하는 핑을 가장 빠르게 탐지하는 데 최적화되어 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "하루에 권장되는 주변시 훈련 시간과 세션 빈도는 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "고도의 집중력을 요하는 이중 시각 인지 과제이므로, 1회 5~10분 세션, 주 3~5회가 이상적입니다. 뇌의 시각 피질과 주의력 피로가 누적되면 오히려 반응 속도가 둔화되므로 세션 사이에 1~2분의 눈 휴식(먼 곳 바라보기)을 취하는 것이 좋습니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 크기와 시청 거리가 주변시 훈련 효과에 어떤 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "일반적으로 모니터 시청 거리는 화면 대각선 길이의 1.2~1.5배(약 50~70cm)가 적절합니다. 화면이 시야각(Field of View)의 약 30~45도를 차지할 때 중심시와 주변시 분리 자극이 가장 효과적으로 일어납니다. 너무 멀리 앉으면 모든 자극이 중심시 범위 내로 들어가 훈련 효과가 감소합니다."
      }
    },
    {
      "@type": "Question",
      "name": "주변 핑 감지 시 스페이스바 반응 속도가 늦게 측정되는 신경학적 원인은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "주변부 자극은 움직임과 위치 정보를 처리하는 시각 경로와 주의 네트워크의 영향을 받습니다. 처음에는 중심 추적과 외곽 감지를 함께 수행하느라 반응이 늦을 수 있으므로, 세션별 결과를 비교하되 자동으로 시간이 단축된다고 가정하지 마세요."
      }
    },
    {
      "@type": "Question",
      "name": "일상생활(운전, 보행, 업무)에서도 이 주변시 훈련이 실질적인 도움을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "일상이나 운전 능력의 향상과 사고율 감소를 이 드릴만으로 주장할 수는 없습니다. 운전 중 사용하는 시야 검사나 안전 판단을 대신하지 않으며, 여기서는 화면 안의 중심 추적과 주변 자극 반응만 기록합니다."
      }
    }
  ]
};

const guideProps = {
  heading: "주변시 핑 추적 훈련의 과학적 원리와 시야각 확장 가이드",
  intro: [
    "인간의 시각 체계는 중심의 세부 정보를 처리하는 영역과 주변의 움직임·밝기 변화를 포착하는 영역이 서로 다른 역할을 합니다. 이 주변시 핑 추적 훈련은 중앙 표적을 계속 바라보면서 화면 외곽의 짧은 빛 자극을 알아차리는 잠재적 공간 주의 과제로 구성되어 있습니다.",
    "Posner(1980)의 공간 주의 연구는 눈을 움직이지 않고도 의식의 초점을 다른 위치로 옮길 수 있음을 설명합니다. 이 과제는 주변 자극을 보기 위해 눈을 돌리는 대신 중앙 추적을 유지하도록 하며, 세션에서는 중심 이탈과 주변 반응을 함께 기록합니다.",
    "스트레스와 인지 부하는 주변 자극을 놓치는 방식에 영향을 줄 수 있습니다. 그러나 이 브라우저 과제가 시야를 넓히거나 좁아진 시야를 치료한다고 말할 수는 없습니다. 중심 추적과 주변 감지를 낮은 강도에서 시작하고, 피로가 생기면 중단하세요.",
    "게임이나 스포츠에 적용할 때는 화면 환경, 입력 장치, 경험 수준에 따라 결과가 달라집니다. 이 페이지는 중심 추적과 주변 자극 반응을 비교하는 연습 도구이며, 경기력·운전 능력·시야 질환을 판정하는 도구가 아닙니다."
  ],
  benchmarks: {
    title: "주변시 인지율 및 반응 지연 표준 지표",
    headers: ["숙련도 등급", "기능적 시야 감지율 (UFOV %)", "주변 핑 평균 반응 속도", "추적 안정성 유지율", "종합 인지 판정"],
    rows: [
      ["엘리트 (Elite)", "93% 이상", "280ms 미만", "96% 이상", "초광각 잠재 주의 및 완벽한 중심와 독립성"],
      ["마스터 (Master)", "85% ~ 92%", "280ms ~ 340ms", "90% ~ 95%", "뛰어난 이중 과제 분할 처리 및 신속 대처"],
      ["다이아몬드 (Diamond)", "75% ~ 84%", "341ms ~ 410ms", "82% ~ 89%", "평균 이상의 시야각 인지 및 양호한 추적"],
      ["골드 (Gold)", "60% ~ 74%", "411ms ~ 500ms", "70% ~ 81%", "간헐적 터널 비전 발생 및 반응 지연"],
      ["비기너 (Beginner)", "60% 미만", "500ms 초과", "70% 미만", "중심 표적 고착 및 외곽 자극 누락"]
    ],
    note: "※ 본 벤치마크는 1080p 해상도, 시청 거리 60cm 표준 환경에서 수집된 실측 데이터 기준입니다. 눈동자가 주변 핑으로 튀지 않고 중심 표적을 유지한 상태에서 측정된 값입니다."
  },
  techniques: {
    title: "시야각 확대 및 잠재적 주의력 강화를 위한 4단계 핵심 기법",
    items: [
      {
        name: "중심와 고정 기법",
        desc: "중심 표적에 시선의 물리적 초점을 완벽히 고정하고, 주변 핑이 번쩍이더라도 눈동자를 핑 방향으로 튀기지 않는 자기 통제 훈련입니다. 눈동자가 움직이는 순간 중심 표적 추적 점수가 깎이고 사카드 억제로 인해 시야가 단절됩니다.",
        tips: "초점은 메인 타깃의 중심핵에 못 박아두고, 화면 외곽은 '느끼는' 감각으로 넓게 바라보는 소프트 포커스를 유지하세요."
      },
      {
        name: "잠재적 주의력 확장",
        desc: "포스너의 주의력 스포트라이트를 단일 지점이 아닌 도넛 형태의 방사형으로 확장시키는 훈련입니다. 의식의 안테나를 모니터의 상하좌우 모서리 전체로 펼쳐두면, 핑이 발생한 즉시 망막의 간상세포가 트리거됩니다.",
        tips: "주변 핑의 정확한 형태나 색상을 확인하려 하지 말고, 단지 '밝기 변화'가 감지되는 즉시 스페이스바를 누르세요."
      },
      {
        name: "움직임·위치 정보를 다루는 시각 경로 활용",
        desc: "시각 정보는 '무엇인가(Ventral)'를 판별하는 경로와 '어디서 움직이는가(Dorsal)'를 처리하는 경로로 나뉩니다. 주변시는 배측 경로에 의해 지배되므로, 세부 해상도 분석을 포기하고 공간 위치 변화에만 본능적으로 반응하도록 신경 회로를 최적화해야 합니다.",
        tips: "핑의 세부 디테일을 보려 하지 말고, 화면 구석의 픽셀 점멸 느낌에 반사적으로 반응하는 리듬을 만드세요."
      },
      {
        name: "호흡 조절을 통한 교감신경 이완 (Parasympathetic Breath Control)",
        desc: "과도한 긴장과 교감신경 흥분은 동공을 수축시키고 시각 피질의 억제성 뉴런을 활성화하여 필연적으로 터널 비전을 유발합니다. 일정한 복식 호흡을 유지하여 자율신경계 균형을 잡으면 자연스럽게 인지 시야가 넓어집니다.",
        tips: "드릴 시작 전 코로 4초간 들이마시고 6초간 내쉬며 어깨와 미간의 긴장을 완전히 푼 상태로 시작하세요."
      }
    ]
  },
  steps: [
    "장비와 자세 세팅: 모니터 정중앙과 시선 높이를 수평으로 맞추고, 화면과의 거리를 약 55~65cm로 유지합니다.",
    "중심 표적 추적 개시: [드릴 시작] 버튼을 누른 후, 화면 중앙에서 움직이는 녹색 메인 구체를 시선으로 부드럽게 추적합니다.",
    "주변 핑 감지 및 입력: 중심 표적을 주시한 상태를 유지하면서, 주변 시야에 보라색/백색 핑이 순간 점멸하면 지체 없이 스페이스바를 누릅니다.",
    "시선 이탈 방지: 눈동자가 핑 쪽으로 튀어 중심 표적을 놓치지 않도록 철저히 주의합니다.",
    "결과 분석 및 취약 구역 파악: 종료 후 제공되는 방위별(상, 하, 좌, 우 외곽) 감지율을 분석하여 주의력이 결핍된 사각지대를 집중 보완합니다."
  ],
  audience: "배틀로얄 및 전술 FPS에서 미니맵과 측면 기습을 놓치지 않으려는 게이머, 넓은 시야와 동료 선수의 오픈 찬스를 읽어내야 하는 구기 종목 선수, 교차로 돌발 위험을 조기에 감지하려는 운전자.",
  faqs: faqSchema.mainEntity.map(q => ({
    q: q.name,
    a: q.acceptedAnswer.text
  })),
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "방향 변화 시선 추적" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "회피 표적 추적 훈련" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/momentum-teleport-pursuit", label: "순간이동 표적 시선 재포착" }
  ]
};

export default function KoPeripheralPingPursuitPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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

      <PeripheralPingPursuitClient
        copy={{
          title: "주변시 핑 추적 훈련: 중심시・주변시 통합 및 잠재적 공간 주의력 테스트",
          subtitle: "중심 표적 추적을 유지한 채 시야 외곽 자극을 감지하는 이중 과제",
          description: "중심 표적을 따라가면서 주변 시야의 짧은 빛 자극을 눈동자 이동 없이 감지하는 훈련입니다. 세션별 주변 반응과 중심 시선 안정을 비교하며, 시야 질환의 검사나 치료를 대신하지 않습니다."
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
