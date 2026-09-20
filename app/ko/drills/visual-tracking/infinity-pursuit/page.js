import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// KOREAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "8자 안구 운동" (Figure-8 eye exercise) / "8자 눈 운동"
// Secondary:    "양안 협응 운동", "정중선 교차 안구 훈련", "비전트레이닝 8자 운동"
// LSI / Domain:  "원활추종 8자 검사", "외안근 복합 훈련", "동체시력 8자 트레이닝",
//               "사선 시선 이동 훈련", "베르누이 렘니스케이트 추적", "시선 떨림 교정", "눈 피로 8자 운동"
// Authentic Domain Terms: 8자 안구 운동（Figure-8 Eye Movement）, 베르누이 렘니스케이트（Lemniscate of Bernoulli）, 정중선 교차（Midline Crossing）, 양안 협응 운동（Binocular Coordination）, 원활추종 안구운동（Smooth Pursuit）, 보정 사케드 억제（Catch-up Saccade Suppression）
// ============================================================

export const metadata = {
  title: "8자 안구 운동 훈련 | SkillDrills",
  description: "움직이는 8자 표적을 두 눈으로 따라가며 시선 추적과 정중선 통과를 연습하는 무료 안구 운동 훈련입니다.",
  keywords: [
    "8자 안구 운동 훈련",
    "무한대 눈 운동",
    "시선 추적 안구 운동",
    "안구 운동 훈련",
    "정중선 교차",
    "양안 협응",
    "동체시력 8자",
    "8자 비전트레이닝",
    "추종 안구 운동",
    "시선 튐 억제",
    "눈으로 8자 그리기",
    "무료 시선 추적 연습"
  ],
  openGraph: {
    title: "8자 안구 운동 훈련 | SkillDrills",
    description: "움직이는 8자 표적을 두 눈으로 따라가며 시선 추적과 정중선 통과를 연습하는 무료 안구 운동 훈련입니다.",
    type: "website",
    url: "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit",
    siteName: "SkillDrills",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "8자 시선 추적 훈련 | SkillDrills",
    description: "8자 궤적을 따라가며 중앙을 지날 때 시선의 흔들림을 관찰하는 무료 온라인 훈련입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/infinity-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "훈련 목록", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각 추적・아이 트래킹", "item": "https://skilldrills.online/ko/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "8자 안구 운동 훈련・인피니티 시각 추적 테스트", "item": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "8자 안구 운동 훈련・인피니티 시각 추적 테스트",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "브라우저",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "베르누이 렘니스케이트(8자 무한 궤적)를 따라 6개 외안근을 복합 연동시키며 정중선 교차와 양안 협응성을 극대화하는 무료 비전트레이닝 도구.",
  "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/ko" },
  "inLanguage": "ko",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "8자 안구 운동 훈련・인피니티 시각 추적 테스트 – 양안 협응 & 정중선 교차 원활추종 | SkillDrills",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "브라우저",
  "browserRequirements": "HTML5 Canvas 지원 브라우저 (Chrome, Edge, Firefox, Safari)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit",
  "inLanguage": "ko",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "8자 안구 운동 훈련・인피니티 시각 추적 테스트",
  "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit",
  "description": "8자 렘니스케이트 궤도 위를 연속 이동하는 표적을 중심와로 포착하여 원활추종 안구운동과 정중선 교차 능력을 측정하고 강화하는 아이 트래킹 게임.",
  "genre": ["안구 운동 훈련", "스포츠 시각 훈련", "시선 추적"],
  "gamePlatform": ["브라우저"],
  "dateModified": "2026-09-20",
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "8자 안구 운동 훈련 측정 및 실천 4단계 가이드",
  "description": "베르누이 렘니스케이트 궤적을 활용하여 양안 협응력과 정중선 교차 추적 능력을 체계적으로 향상시키는 훈련 절차.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "시거리 확보 및 두부 고정",
      "text": "모니터와 약 50~70cm 거리를 유지하고 턱을 당겨 머리를 완전히 고정합니다. 고개를 돌리지 않고 순수하게 안구만으로 표적을 추적할 준비를 합니다.",
      "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "세션 시간 및 속도 배율 선택",
      "text": "훈련 목적에 맞춰 30초~120초 세션 시간과 0.5x~9.0x 속도 배율을 설정합니다. 초심자는 1.0x 기본 속도에서 원활추종이 끊기지 않는지 확인합니다.",
      "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "중심와 고정 및 정중선 교차 연속 추적",
      "text": "시작 신호와 함께 8자 궤도를 순환하는 타깃의 정중앙을 시선 중심와로 물샐틈없이 추종합니다. 중앙 교차점(신체 정중선)을 지날 때 시선이 튀지 않도록 매끄럽게 유지합니다.",
      "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "추종 정확도 확인 및 점진적 부하 증강",
      "text": "세션 완료 후 시선 유지율과 정중선 통과 시의 안정성을 평가합니다. 시선 도약이 발생하지 않고 완벽히 추종되면 속도 단계를 0.2x씩 점진적으로 끌어올립니다.",
      "url": "https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit#step-4"
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
      "name": "8자 안구 운동(인피니티 퍼슈트)이란 어떤 훈련인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "수학적인 베르누이 렘니스케이트(가로로 누운 8자・무한대 기호 ∞) 곡선 궤적을 따라 이동하는 표적을 고개를 고정한 채 오직 안구(시선 중심와)만으로 매끄럽게 추종하는 비전트레이닝입니다. 수평·수직·사선 방향의 시선 이동이 끊김 없이 복합적으로 이어지기 때문에 안구를 둘러싼 6개 외안근을 고르게 자극하고 시각 추적 유연성을 극대화합니다."
      }
    },
    {
      "@type": "Question",
      "name": "단순한 직선이나 원형 추적보다 왜 8자(렘니스케이트) 궤적이 더 효과적인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "직선 운동은 끝점에서 속도가 0이 되는 정지점이 생기고, 단순 원형 운동은 회전 방향이 일정하여 특정 근육군에 편향되기 쉽습니다. 반면 8자 궤적은 곡률 반경이 연속적으로 변화하며 시계 방향과 반시계 방향이 번갈아 교차하고, 신체 좌우를 가르는 '정중선(중심축)'을 대각선으로 통과합니다. 이러한 가속도 변화와 궤도 반전의 조합이 소뇌의 예측적 운동 제어와 양안 협응력을 가장 균형 있게 단련합니다."
      }
    },
    {
      "@type": "Question",
      "name": "정중선을 지날 때 시선이 튀거나 불안정해지는 이유는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "시선이 시야 중앙을 가로지를 때 표적이 좌우 시야 사이를 이동합니다. 이 구간에서 표적을 놓치거나 시선이 튀는지 관찰하면 어느 부분이 어려운지 알 수 있습니다. 이 기록은 훈련 관찰이며 진단 결과가 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "8자 궤적 추적에 관여하는 눈 근육(외안근)은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "내직근·외직근(좌우 수평 운동), 상직근·하직근(상하 수직 운동), 그리고 상사근·하사근(안구 회전 및 대각선 상하 운동)의 총 6쌍의 외안근이 긴밀하게 협력합니다. 특히 8자 루프의 완만한 외곽 선회부와 대각선 교차 통과 구간에서는 사근과 직근이 복합적으로 동시 수축해야 하므로 전반적인 안구 근육 밸런스를 잡는 데 탁월합니다."
      }
    },
    {
      "@type": "Question",
      "name": "FPS 게임의 에임 트래킹과 반동 제어에 구체적으로 어떤 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FPS 게임에서 적이 대각선으로 점프하거나 슬라이딩하며 불규칙한 호를 그릴 때, 시선이 부드럽게 따라가지 못하고 사케드로 뚝뚝 끊기면 화면이 흔들려 정밀한 에임 조준선 보정이 불가능해집니다. 8자 안구 운동을 통해 추종 게인(Gain)을 1.0에 가깝게 끌어올리면 곡선 기동을 펼치는 타깃에도 조준선이 안정적으로 밀착되며, 오버슈팅이나 손목의 불필요한 경직을 획기적으로 줄일 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "독서 속도, 집중력, 학습 능력 향상에도 실질적인 효과가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "그렇습니다. 독서 시 줄을 바꿔 읽거나 긴 문장을 스캔할 때, 그리고 공 구기 종목에서 날아오는 공의 입체 궤적을 쫓을 때 중심 시야를 가로지르는 양안 협응력이 필수적입니다. 8자 운동으로 정중선 교차가 매끄러워지면 줄 건너뜀, 읽기 피로, 시선 걸림 현상이 사라져 시각 정보의 흡수 및 뇌내 처리 속도가 뚜렷하게 향상됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "머리가 타깃을 따라 함께 움직이는 것을 어떻게 방지하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "머리가 움직이는 것은 눈 근육의 부담을 줄이기 위해 경추 회전과 전정안반사(VOR)를 동원하려는 뇌의 본능적인 보상 기전입니다. 턱밑에 가볍게 손가락을 대어 머리가 전혀 움직이지 않음을 촉각으로 인지하거나, 모니터 하단에 턱을 가볍게 받치고 목 근육을 완전히 이완시킨 채 오직 안구만을 독립적으로 굴리는 '순수 안구 운동 격리' 연습을 의식적으로 진행해야 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "하루 권장 훈련 시간과 적정 세션 반복 횟수는 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1회 60초~90초 세션을 하루 2~3회 수행하는 것이 가장 이상적입니다. 지나치게 오랜 시간 연속으로 화면을 응시하면 외안근 피로와 조절성 눈 피로(조절경련)가 발생하여 오히려 추종 정밀도가 떨어지므로, 세션 사이에 20초 이상 먼 곳(6미터 이상)을 바라보는 '20-20-20 규칙'을 지키며 휴식을 병행해야 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터와의 권장 거리 및 화면 크기 세팅은 어떻게 설정하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "모니터 화면과 50cm~70cm 거리를 유지하며, 화면 상단 모서리가 눈높이와 수평이 되도록 의자 높이를 조절합니다. 시야각 기준 좌우 약 30~40도 범위에서 타깃이 이동하도록 브라우저 창 크기를 조절하면 외안근의 가동 범위를 최대한으로 활용하는 최적의 운동 환경이 조성됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "훈련 중 눈이 뻑뻑하거나 가벼운 어지러움이 느껴질 때는 어떻게 대처하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "평소 사용 빈도가 낮은 안구 사근군과 정중선 교차 신경망에 새로운 자극이 전달되면 일시적으로 가벼운 어지럼증이나 눈 피로감이 들 수 있습니다. 이러한 증상이 나타나면 즉시 훈련을 멈추고 눈을 감은 채 심호흡을 하거나 먼 창밖을 응시하세요. 다음 세션에서는 속도를 0.8x나 0.5x로 낮춰 적응 기간을 거친 뒤 서서히 단계를 높이는 것이 안전합니다."
      }
    }
  ]
};

const guideProps = {
  heading: "8자 안구 운동・인피니티 시각 추적의 신경안과학 기준",
  intro: [
    "8자, 즉 베르누이 렘니스케이트는 좌우 곡선과 중앙 교차를 하나의 궤도로 묶은 형태입니다. 움직이는 표적을 눈으로 따라가면 수평·수직·사선 방향의 시선 이동이 이어집니다. 이 페이지는 그 움직임을 연습하는 도구이며 눈 질환을 검사하거나 치료하는 기기가 아닙니다.",
    "좌우 고리가 만나는 중앙에서는 시선이 왼쪽과 오른쪽 시야를 오갑니다. 표적을 놓치거나 시선이 작게 튀거나 중앙에서 멈추는지 관찰하면 같은 조건에서 어려운 구간을 비교할 수 있습니다. 이 기록은 훈련 관찰이며 진단 결과가 아닙니다.",
    "움직임의 편안함은 화면 거리, 표적 크기, 표시의 부드러움과 피로에 따라 달라집니다. 속도보다 편안한 추적을 우선하고 자연스럽게 눈을 깜박이세요. 통증, 복시, 메스꺼움 또는 어지러움이 생기면 중단하고 증상이 계속되면 전문가에게 상담하세요.",
    "독서나 스포츠 수행의 향상을 일괄적으로 약속할 수는 없습니다. 이 페이지는 움직이는 표적에 대한 시선 추적을 짧게 연습하고 같은 조건에서 기록을 돌아보도록 설계되었습니다."
  ],
  benchmarks: {
  title: "8자 안구 운동・시선 추적 성능 지표",
    headers: ["숙련도", "표적 추적", "중앙에서의 시선 이탈", "궤적 정확도", "실용적 해석"],
    rows: [
      ["엘리트 (프로 선수급)", "0.96 ～ 1.02", "2% 미만 (완전 평활)", "98% 이상", "전체 외안근의 완벽한 협응. 정중선 교차 시에도 사케드 간섭이 전혀 없으며 소뇌 내부 예측 모델이 완전 동기화"],
      ["상급 (랭커 게이머급)", "0.90 ～ 0.95", "2% ～ 5%", "92% ～ 97%", "우수한 원활추종 안정성. 급격한 곡률 변화 구간에서 미세한 위상 지연만 관측되며 중심와 고정 유지"],
      ["표준 실용급 (건강한 성인)", "0.80 ～ 0.89", "6% ～ 12%", "82% ～ 91%", "일상적 시각 추적에 충분한 수준. 정중선 통과 및 외곽 루프 정점에서 간헐적인 보정 사케드 발생"],
      ["훈련 요망 (발달 과정・경미 피로)", "0.68 ～ 0.79", "13% ～ 22%", "70% ～ 81%", "추종 지연이 현저함. 잦은 시선 도약이 발생하며, 외안근 경직 및 좌우 반구 간 협응 지연이 관찰됨"],
      ["초심자 (협응 결손・심한 피로)", "0.68 미만", "22% 초과", "70% 미만", "원활추종 지속 불가. 고개가 함께 돌아가는 보상 작용이 빈번하며 외안근 유연성 및 양안 협응 기초 훈련 필요"]
    ],
    note: "※ 본 기준표는 시거리 50~70cm 조건에서 속도 1.0x~2.0x로 60초간 연속 8자 렘니스케이트 추적을 수행한 안구 운동 계측 분석에 기반합니다. 추종 게인은 '안구 각속도 ÷ 표적 각속도'로 산출되며 1.0은 완전 일치를 의미합니다."
  },
  techniques: {
    title: "8자 무한 궤적 추종 게인과 정중선 교차를 극대화하는 4대 테크닉",
    items: [
      {
        name: "머리를 안정시키고 눈으로만 따라가기",
        desc: "턱밑에 손가락을 가볍게 받쳐 머리가 미세하게도 회전하지 않음을 확인하며 오직 안구 근육만으로 시선을 움직이세요. 경추 회전을 완벽히 차단해야 전정안반사(VOR)의 개입 없이 순수 대뇌-소뇌-외안근 신경 회로만 집중 단련됩니다.",
        tips: "목덜미와 어깨의 긴장을 풀고 모니터 중앙과 코끝을 잇는 가상의 중심축을 단단히 고정하세요."
      },
      {
        name: "중앙 교차 전에 속도 조절하기",
        desc: "8자의 중앙 교차점에 다다를 때 표적은 가속도를 동반하여 진입합니다. 표적이 중심점에 도달하기 약 50밀리초 전부터 시선을 교차점의 수 픽셀 앞쪽으로 부드럽게 흘려보내는 느낌을 유지하여 뇌량 전이 지연을 선제적으로 상쇄하세요.",
        tips: "중심을 지나는 순간 '응시'하려 힘주지 말고 시선이 자연스럽게 미끄러지도록 유도하면 사케드가 사라집니다."
      },
      {
        name: "바깥 고리까지 빠짐없이 따라가기",
        desc: "바깥쪽 선회 구간에서는 진행 방향이 180도 역전되므로 시선이 지름길을 찾아 안쪽으로 가로지르려는 유혹에 빠지기 쉽습니다. 표적의 바깥쪽 외곽선까지 시선 중심와를 끝까지 밀착시키며 상사근과 하사근이 최대 가동 반경까지 늘어나는 감각을 유지하세요.",
        tips: "선회부 끝점에서 시선이 먼저 질러가지 않도록 타깃의 중심핵에 끝까지 시선을 묶어두세요."
      },
      {
        name: "속도를 단계적으로 올리고 쉬기",
        desc: "처음부터 고속(3.0x 이상)으로 훈련하면 안구가 표적을 놓쳐 사케드로 점프하게 되고, 잘못된 신경 습관이 고착됩니다. 1.0x 속도에서 60초간 시선 단절이 0회인 세션을 먼저 완성한 뒤 0.2x씩 속도를 올리세요. 세션 후에는 먼 곳을 20초간 바라보며 외안근의 긴장을 푸세요.",
        tips: "눈이 뻑뻑해지면 무리하게 참지 말고 의식적으로 깜빡여 각막 표면의 눈물층을 유지하세요."
      }
    ]
  },
  steps: [
    "모니터와 약 50~70cm 거리를 유지하고 턱을 당겨 머리를 완전히 고정합니다.",
    "훈련 목적에 맞춰 30초~120초 세션 시간과 0.5x~9.0x 속도 배율을 설정합니다.",
    "시작 신호와 함께 8자 궤도를 순환하는 타깃의 정중앙을 시선 중심와로 물샐틈없이 추종합니다.",
    "중앙 교차점(신체 정중선)을 지날 때 시선이 튀지 않도록 매끄럽게 유지합니다.",
    "세션 완료 후 시선 유지율을 확인하고, 안정적으로 추종되면 속도 단계를 점진적으로 끌어올립니다."
  ],
  audience: "FPS(Apex Legends, Overwatch, VALORANT) 게이머, 동체시력과 시각 반응성을 높이고 싶은 운동선수, 독서 시 시선 걸림 및 모니터 장시간 응시로 인한 안구 피로를 해소하고 싶은 모든 사용자.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('robinson1965', 'leigh2015', 'barnes2008', 'krauzlis2004', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 시선 추적 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "방향 변화 시선 추적" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "움직이는 표적 추적 훈련" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련" },
    { href: "/ko/drills/visual-tracking/sine-wave-pursuit", label: "사인파 시선 추적 훈련" },
    { href: "/ko/drills/visual-tracking/predictive-pursuit", label: "가림 구간 예측 추적" }
  ]
};

export default function KoreanInfinityPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <InfinityPursuitClient
        copy={{
          title: "8자 안구 운동 훈련",
          subtitle: "시선 추적과 정중선 통과 연습",
          description: "8자 궤도를 움직이는 표적을 두 눈으로 따라가며 중앙을 지날 때 시선의 연속성을 연습합니다. 편안한 속도에서 기록을 비교하세요."
        }}
      />

      <DrillGuide guide={guideProps} />

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="visual-tracking" currentHref="https://skilldrills.online/ko/drills/visual-tracking/infinity-pursuit" />
      </div>
      <DrillFooter />
    </>
  );
}
