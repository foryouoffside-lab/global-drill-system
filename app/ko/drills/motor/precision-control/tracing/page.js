import FineMotorClient from '@/app/drills/motor/precision-control/tracing/TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: '마우스 트레이싱 게임 | 커서 추적 테스트 | SkillDrills',
  description: '마우스 트레이싱 게임: 화면을 흐르는 파형 위에 45초 동안 커서를 유지하며 마우스 추적과 미세 제어를 연습하는 무료 브라우저 테스트. 파형은 점점 빨라지고 커집니다.',
  keywords: ['마우스 트레이싱 게임', '마우스 선 따라가기', '커서 추적 테스트', '마우스 트래킹 연습', '정밀 마우스 제어', '마우스 궤적 테스트', '연속 트래킹 연습', '미세 운동 조절', '마우스 움직임 연습', '커서 경로 추적', '손목 컨트롤 연습'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: '마우스 트레이싱 게임 | 커서 추적 테스트 | SkillDrills',
    description: '마우스 트레이싱 게임: 화면을 흐르는 파형 위에 45초 동안 커서를 유지하며 마우스 추적과 미세 제어를 연습하는 무료 브라우저 테스트. 파형은 점점 빨라지고 커집니다.',
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: '마우스 트레이싱 게임 | 커서 추적 테스트 | SkillDrills',
    description: '마우스 트레이싱 게임: 화면을 흐르는 파형 위에 45초 동안 커서를 유지하며 마우스 추적과 미세 제어를 연습하는 무료 브라우저 테스트. 파형은 점점 빨라지고 커집니다.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
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
      "name": "운동 조작 훈련",
      "item": "https://skilldrills.online/ko/drills/motor"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "마우스 트레이싱 게임",
      "item": "https://skilldrills.online/ko/drills/motor/precision-control/tracing"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  "name": "마우스 트레이싱 정밀 궤적 추적 도구",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "움직이는 파형 곡선을 벗어나지 않고 따라가는 무료 브라우저 마우스 트레이싱 게임. 파형 위아래 22픽셀 안에 커서를 유지하는 동안 점수가 쌓입니다.",
  "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "마우스 트레이싱 게임・정밀 궤적 추적 테스트 – 마우스 미세 제어 능력 측정",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas, Pointer Lock API, modern web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "ko-KR",
  "name": "마우스 트레이싱 게임 – 연속 파형 궤적 추적 및 제어 게임",
  "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing",
  "description": "움직이는 파형 곡선을 벗어나지 않고 따라가는 무료 브라우저 마우스 트레이싱 게임. 파형 위아래 22픽셀 안에 커서를 유지하는 동안 점수가 쌓입니다.",
  "genre": [
    "Action",
    "Aim Trainer",
    "Esports Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "dateModified": "2026-11-09"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "마우스 트레이싱 게임(Mouse Tracing Game)이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면을 가로질러 흐르는 파형 곡선 위에 45초 동안 커서를 계속 유지하는 정밀 제어 훈련입니다. 커서가 선에서 위아래 22픽셀 안에 있으면 프레임마다 1점, 4초 연속 유지마다 +5점, 이탈 후 다시 선에 올라오면 +10점을 얻습니다."
      }
    },
    {
      "@type": "Question",
      "name": "단순 클릭 측정과 비교했을 때 트레이싱 훈련의 장점은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "일회성 타격 속도가 아니라, 목표물의 지속적인 움직임에 손의 속도를 일정하게 동기화시키는 연속 폐루프 신경 피드백 제어를 훈련합니다."
      }
    },
    {
      "@type": "Question",
      "name": "스무스 퍼슈트 안구 운동(Krauzlis, 2004)이란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "시야 내에서 움직이는 대상을 놓치지 않고 망막 중심와로 매끄럽게 뒤쫓는 눈의 생리학적 추적 기전입니다."
      }
    },
    {
      "@type": "Question",
      "name": "래시바스의 연구(Rashbass, 1961)가 증명한 사실은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "시각계가 물체의 위치 오차와 속도 정보를 별도로 계산하여 안구와 손의 추종 속도를 정밀하게 제어한다는 점입니다."
      }
    },
    {
      "@type": "Question",
      "name": "스티어링 법칙(Steering Law, Accot & Zhai, 1997)은 어떻게 작용하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "곡선의 폭이 좁고 굴곡이 가파를수록 허용 이동 속도가 물리적으로 제한된다는 컴퓨터 인터페이스 공학 법칙입니다."
      }
    },
    {
      "@type": "Question",
      "name": "경로를 벗어났을 때(Off-Path) 어떤 현상이 발생하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "벗어난 동안에는 점수가 쌓이지 않고, 연속 프레임이 0이 되며 플로우 안정도가 초당 25%씩 떨어집니다(선 위에서는 초당 15%씩 회복). 이탈 순간 빨간 경고 플래시와 효과음이 나옵니다. 이미 얻은 점수는 깎이지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "경로 이탈 없이 안정적으로 따라가는 팁은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "마우스를 손가락 끝으로만 쥐지 말고 손바닥 하단부를 패드에 지지대로 밀착시켜 마찰 안정성을 확보하는 것이 중요합니다."
      }
    },
    {
      "@type": "Question",
      "name": "FPS 게임 트래킹 연습에 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "에이펙스 레전드나 오버워치처럼 움직이는 적을 계속 따라가야 하는 게임을 하는 분에게 비슷한 손 동작을 연습할 기회가 됩니다. 실제 게임 실력에 얼마나 옮겨지는지는 사람마다 다릅니다."
      }
    },
    {
      "@type": "Question",
      "name": "마우스 패드 선택이 트레이싱에 미치는 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "마찰 계수가 균일한 밸런스형 패드가 미세한 방향 전환 시 커서 튐을 방지해 주어 이상적입니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수와 통계는 어디에 보관되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "최고 점수는 브라우저의 로컬 저장소(localStorage)에만 저장되며 서버로 전송되지 않습니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09",
  "name": "마우스 트레이싱 게임・정밀 궤적 추적 테스트 – 마우스 미세 제어 능력 측정",
  "description": "움직이는 파형 곡선을 벗어나지 않고 따라가는 무료 브라우저 마우스 트레이싱 게임. 파형 위아래 22픽셀 안에 커서를 유지하는 동안 점수가 쌓입니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "포인터 락 활성화 및 곡선 정렬",
      "text": "훈련 시작을 누르면 3초 카운트다운 뒤 포인터가 고정되고(터치 기기는 손가락으로 조작) 커서가 화면 왼쪽 4분의 1 지점에 놓입니다. 바로 파형 위로 커서를 옮기세요. Esc로 종료합니다.",
      "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "일정한 속도로 파형 추종 유지",
      "text": "곡선이 이동하는 속도에 맞춰 손목을 부드럽게 글라이딩하며 선 중앙을 유지합니다.",
      "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "변곡점 미세 감속 제어",
      "text": "곡선의 최고점과 최저점 굴곡 구간에서 순간적인 미세 브레이킹을 통해 바깥쪽 이탈을 방지합니다.",
      "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "슈퍼 플로우 스트릭 유지",
      "text": "4초 연속으로 선 위에 머물 때마다 +5점과 플로우 +10%를 얻습니다. 45초 동안 파형은 2.2에서 3.8 px/프레임으로 빨라지고 진폭도 커지니 끝까지 리듬을 유지하세요.",
      "url": "https://skilldrills.online/ko/drills/motor/precision-control/tracing#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: "마우스 트레이싱 게임・정밀 궤적 추적 테스트 – 마우스 미세 제어 능력 측정",
    paragraphs: [
      "마우스 트레이싱 게임은 움직이는 파형 곡선을 벗어나지 않고 45초 동안 따라가는 무료 브라우저 게임입니다. 파형은 오른쪽에서 왼쪽으로 흐르며 시간이 갈수록 빨라지고 위아래로 더 크게 흔들립니다.",
      "일회성 타격 속도가 아니라, 목표물의 지속적인 움직임에 손의 속도를 일정하게 동기화시키는 연속 폐루프 신경 피드백 제어를 훈련합니다.",
      "시야 내에서 움직이는 대상을 놓치지 않고 망막 중심와로 매끄럽게 뒤쫓는 눈의 생리학적 추적 기전입니다.",
    ],
  },
  benchmarks: {
    title: '마우스 트레이싱 게임 SkillDrills 연습 구간',
    note: '연구 기준이나 사용자 통계가 아닌 SkillDrills 연습 구간이며, 결과 화면 등급 기준(세션 종료 시 플로우 안정도와 점수)과 같습니다. 점수는 프레임당 1점이라 모니터 주사율이 높을수록 커지므로 같은 기기끼리 비교하세요.',
    headers: ['등급', '칭호', '종료 시 플로우 안정도', '점수 조건', '구간'],
    rows: [
      { tier: 'S+', rank: '그랜드마스터 플로우', flow: '90% 이상', score: '1,400점 이상', band: 'SkillDrills 연습 구간' },
      { tier: 'S', rank: '피크 플로우', flow: '80% 이상', score: '-', band: 'SkillDrills 연습 구간' },
      { tier: 'A', rank: '안정적 고정 추적', flow: '60% 이상', score: '-', band: 'SkillDrills 연습 구간' },
      { tier: 'B', rank: '꾸준한 추적', flow: '35% 이상', score: '-', band: 'SkillDrills 연습 구간' },
      { tier: 'C', rank: '트레이싱 완료', flow: '35% 미만', score: '-', band: 'SkillDrills 연습 구간' },
    ],
  },
  protocols: {
    title: '마우스 조작 제어력을 극대화하는 4대 훈련 프로토콜',
    description: '스티어링 법칙(Accot-Zhai, 1997) 및 부드러운 안구 추적(Smooth Pursuit, Krauzlis, 2004)에 기반한, 연속 궤적 일치도와 손목 미세 제어를 최적화하는 과학적 모터 훈련 프로토콜입니다.',
    items: [
      { title: "시작 직후 곡선 정렬", description: "카운트다운이 끝나면 커서가 화면 왼쪽 4분의 1 지점에 놓입니다. 곧바로 파형 위로 옮겨 첫 점수를 쌓으세요." },
      { title: "일정한 속도로 파형 추종 유지", description: "곡선이 이동하는 속도에 맞춰 손목을 부드럽게 글라이딩하며 선 중앙을 유지합니다." },
      { title: "변곡점 미세 감속 제어", description: "곡선의 최고점과 최저점 굴곡 구간에서 순간적인 미세 브레이킹을 통해 바깥쪽 이탈을 방지합니다." },
      { title: "슈퍼 플로우 스트릭 유지", description: "4초 연속 유지마다 +5점과 플로우 +10%가 붙습니다. 등급은 세션이 끝날 때의 플로우 안정도로 정해지므로 마지막 몇 초가 특히 중요합니다." },
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

const koCopy = {
  title: "커서 추적 테스트",
  subtitle: "연속 커서 추적 • 45초",
  startButtonText: "훈련 시작",
  startBtn: "훈련 시작",
  trainAgain: "다시 훈련",
  shareTitle: "결과 공유",
  exitTitle: "나가기",
  statFlowScore: "플로우 점수",
  statTimeLeft: "남은 시간",
  statFlowIntegrity: "플로우 안정도",
  statBestScore: "최고 점수",
  maxStreakLabel: "최대 연속 프레임",
  peakFlowLabel: "종료 시 플로우 안정도",
  bestScoreLabel: "개인 최고 점수",
  rulesTitle: "훈련 가이드 및 점수 규칙",
  rulesItems: [
    { num: "1", text: "궤적 추종", highlight: "에메랄드 파형", result: "경로 유지 시 프레임당 +1점" },
    { num: "2", text: "속도 가속", highlight: "점진적 가속", result: "45초간 2.2 → 3.8 px/f 증속" },
    { num: "3", text: "플로우 보너스", highlight: "슈퍼 플로우", result: "4초 연속 유지 시 +5점 추가" },
    { num: "4", text: "이탈", highlight: "허용 범위 ±22px", result: "연속 초기화, 플로우 감소" }
  ],
};

export default function LocalizedMotorPage() {
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
      <FineMotorClient copy={koCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
