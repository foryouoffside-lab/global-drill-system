import AutoPursuitClient from '@/app/drills/visual/tracking-accuracy/pursuit-tracker/AutoPursuitClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "시선 추적 게임 | 움직이는 점 따라가기 | SkillDrills",
  description: "방향과 속도를 바꾸며 떠도는 점을 마우스 커서로 계속 따라가는 무료 시선 추적 게임. 1초 동안 놓치지 않을 때마다 +5점, 45초 라운드. 카메라 시선 추적이나 의료 검사가 아닙니다.",
  keywords: [
    "시선 추적 게임",
    "시선 추적 테스트",
    "움직이는 점 따라가기",
    "커서 따라가기 게임",
    "스무스 퍼슈트",
    "마우스 추적 연습"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "시선 추적 게임 | 움직이는 점 따라가기 | SkillDrills",
    description: "떠도는 점 위에 커서를 계속 올려 두는 무료 시선 추적 게임. 눈이 아니라 커서 위치로 점수를 매깁니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "시선 추적 게임 | 움직이는 점 따라가기 | SkillDrills",
    description: "움직이는 점을 커서로 45초 동안 따라가는 무료 시선 추적 게임입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/pursuit-tracker'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills 홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "훈련 허브", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각·동체시력 훈련", "item": "https://skilldrills.online/ko/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "동체 추적 및 정밀도", "item": "https://skilldrills.online/ko/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "시선 추적 게임", "item": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "시선 추적 게임",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "화면을 떠돌며 속도와 방향을 바꾸는 점 위에 마우스 커서(또는 손가락)를 계속 올려 두는 45초 브라우저 연습입니다. 점수는 커서 위치로만 계산하며 카메라 시선 추적, 시력 검사, 의료 검사가 아닙니다.",
  "featureList": [
    "45초 고정 라운드, 점은 무작위로 속도·방향을 바꾸고 벽에서 튕김",
    "커서가 점 위(넉넉한 판정 범위)에 약 1초 동안 머물 때마다 +5점과 연속 기록 +1",
    "2초 넘게 벗어나면 연속 기록만 초기화, 점수·시간 감점 없음",
    "점수가 오를수록 점이 작아지고 빨라짐, 기록은 브라우저 로컬 저장소에만 저장"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "시선 추적 게임 | SkillDrills",
  "alternateName": "Pursuit Tracker Pro",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker",
  "dateModified": "2026-11-12",
  "description": "무료 시선 추적 게임: 움직이는 점을 커서로 45초 동안 놓치지 않고 따라가세요.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas를 지원하는 최신 브라우저",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "움직이는 대상을 눈으로 따라가며 커서를 계속 겹쳐 두기"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "시선 추적 게임",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker",
  "description": "속도와 방향을 바꾸며 떠도는 점을 커서로 계속 따라가는 무료 시선 추적 게임.",
  "genre": [
    "Action",
    "Visual Tracking"
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "시선 추적 게임 하는 법",
  "dateModified": "2026-11-12",
  "description": "45초 라운드를 진행하는 4단계.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "점 위에 커서 올리기",
      "text": "카운트다운 뒤 주황색 점이 나타나 화면을 떠돕니다. 커서(터치 화면에서는 손가락)를 점 위에 올리면 점이 초록색으로 바뀝니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "1초씩 유지하기",
      "text": "점 주위의 링이 다 차면(약 1초) +5점과 연속 기록 +1이 됩니다. 중간에 벗어나면 링이 처음부터 다시 찹니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "방향 전환에 대응하기",
      "text": "점은 예고 없이 속도와 방향을 바꾸고 벽에서 튕깁니다. 점수와 연속 기록이 오를수록 더 빠르고 작아집니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "끝까지 따라가기",
      "text": "2초 넘게 놓치면 연속 기록만 초기화되고 점수나 시간은 줄지 않습니다. 45초가 지나면 라운드가 끝납니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/pursuit-tracker#step-4"
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
      "name": "이 시선 추적 게임은 어떻게 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면을 떠도는 점 위에 마우스 커서를 계속 올려 두는 45초 게임입니다. 끊기지 않고 약 1초를 유지할 때마다 5점을 얻습니다. 점수는 커서 위치로만 계산하며, 카메라나 아이트래커로 눈의 움직임을 측정하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "점을 놓치면 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "벗어나는 순간 진행 중이던 1초 링이 초기화되고, 2초 넘게 벗어나면 연속 기록이 0으로 돌아갑니다. 점수나 남은 시간이 깎이지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "점점 어려워지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수가 오를수록 점이 작아지고(원래 크기의 절반까지) 최고 속도가 올라갑니다. 연속 기록이 길어져도 점이 더 빨라집니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율이 점수에 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네. 이 게임은 화면 프레임 수로 시간을 세기 때문에 60Hz 기준으로 약 1초마다 점수가 오르고, 주사율이 높은 모니터에서는 점수와 점의 움직임이 더 빨라집니다. 다른 기기끼리 점수를 단순 비교하기 어렵습니다."
      }
    },
    {
      "@type": "Question",
      "name": "스무스 퍼슈트(부드러운 추적 눈운동)란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "움직이는 물체를 시야 중심에 두기 위해 눈이 부드럽게 따라가는 움직임입니다. 물체가 너무 빠르면 눈이 뒤처지고 짧은 도약 눈운동(사케이드)으로 따라잡습니다(Krauzlis, 2004). 이 게임은 그런 상황을 커서로 연습해 보는 것이며 눈의 움직임을 측정하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "이 게임으로 시력이나 에임 실력이 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수가 오르면 이 과제에 익숙해졌다는 뜻입니다. 시력, 게임 실력, 운동 능력 향상을 보장하지 않으며 안과 검사를 대신하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "무료인가요? 기록은 어디에 저장되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "회원가입 없이 무료입니다. 최고 점수 등 기록은 사용 중인 브라우저의 로컬 저장소에만 저장됩니다."
      }
    }
  ]
};

const guideData = {
  heading: "시선 추적 게임: 움직이는 점을 커서로 따라가는 법",
  intro: [
    "이 시선 추적 게임은 화면을 떠도는 점을 눈으로 따라가며 마우스 커서를 그 위에 계속 올려 두는 45초 연습입니다. 점수는 커서가 점 위에 머문 시간으로만 계산하며, 카메라로 눈을 추적하지 않습니다.",
    "커서가 점 위(넉넉한 판정 범위)에 약 1초 동안 끊기지 않고 머물면 +5점과 연속 기록 +1을 얻습니다. 점은 예고 없이 속도와 방향을 바꾸고 벽에서 튕기며, 점수가 오를수록 작고 빨라집니다. 2초 넘게 놓쳐도 연속 기록만 초기화될 뿐 감점은 없습니다.",
    "눈은 느린 물체는 부드럽게 따라가지만, 너무 빠르면 뒤처져 짧은 도약 운동으로 따라잡습니다(Krauzlis, 2004). 이 게임은 그런 상황을 단순한 커서 과제로 옮긴 것이며 시력이나 눈운동을 측정·진단하지 않습니다."
  ],
  benchmarks: {
    "title": "SkillDrills 연습 구간 (이 게임 전용, 60Hz 기준)",
    "headers": [
      "구간",
      "45초 점수",
      "설명"
    ],
    "rows": [
      [
        "상위",
        "180점 이상",
        "거의 모든 시간 동안 점을 놓치지 않음."
      ],
      [
        "안정",
        "120 – 179점",
        "방향 전환 직후에만 가끔 놓침."
      ],
      [
        "연습 중",
        "60 – 119점",
        "빠른 구간에서 자주 끊김."
      ],
      [
        "시작 단계",
        "60점 미만",
        "게임에 익숙해지는 단계."
      ]
    ],
    "note": "SkillDrills가 이 게임에 맞춰 정한 연습용 구간이며, 연구 기준값이나 시력 평가가 아닙니다. 주사율과 마우스 환경에 따라 달라집니다."
  },
  techniques: {
    "title": "점을 놓치지 않는 요령",
    "items": [
      {
        "name": "점의 중심에 커서 두기",
        "desc": "가장자리에 걸쳐 있으면 작은 방향 전환에도 벗어납니다.",
        "tips": "커서를 점의 한가운데에 두고 함께 움직이세요."
      },
      {
        "name": "손목을 부드럽게",
        "desc": "손에 힘이 들어가면 커서가 튀어 판정 범위를 벗어나기 쉽습니다.",
        "tips": "작은 움직임은 손목, 큰 이동은 팔로 나눠서 따라가세요."
      },
      {
        "name": "벽 근처에서 대비하기",
        "desc": "점은 벽에 닿으면 바로 튕겨 나옵니다.",
        "tips": "점이 벽에 가까워지면 반대 방향으로 움직일 준비를 하세요."
      },
      {
        "name": "놓쳐도 바로 복귀",
        "desc": "2초 안에 다시 올라오면 연속 기록이 유지됩니다.",
        "tips": "놓쳤다고 멈추지 말고 곧바로 점 위로 돌아가세요."
      }
    ]
  },
  steps: [
    "시작 버튼을 누르고 카운트다운을 기다립니다.",
    "나타난 점 위에 커서를 올려 초록색으로 바뀌는지 확인합니다.",
    "링이 찰 때마다(약 1초) 5점씩 쌓이도록 점을 계속 따라갑니다.",
    "점이 방향을 바꾸거나 벽에서 튕겨도 커서를 겹쳐 둡니다.",
    "45초가 끝나면 점수, 연속 기록, 등급을 확인합니다."
  ],
  audience: "움직이는 대상을 커서로 꾸준히 따라가는 연습을 해 보고 싶은 사람, 트래킹 감각을 가볍게 확인하고 싶은 게이머.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('krauzlis2004', 'rashbass1961'),
  related: [
    {
      "href": "/ko/drills/visual/tracking-accuracy/moving-target",
      "label": "동체시력 키우는 게임"
    },
    {
      "href": "/ko/drills/visual/tracking-accuracy/multiple-targets",
      "label": "다중 객체 추적 테스트"
    },
    {
      "href": "/ko/drills/visual/visual-recognition/visual-search",
      "label": "시각 탐색 게임"
    },
    {
      "href": "/ko/drills/reaction-speed/visual-tracking-speed-test",
      "label": "시각 추적 속도 테스트"
    }
  ]
};

export default function LocalizedPursuitTrackerKoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <AutoPursuitClient copy={{  "title": "시선 추적 게임: 움직이는 점 따라가기" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
