import GhostLinkClient from '@/app/drills/visual/tracking-accuracy/multiple-targets/GhostLinkClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "다중 객체 추적 테스트 | 주변시 훈련 | SkillDrills",
  description: "여러 움직이는 표적을 동시에 따라가는 무료 다중 객체 추적 테스트. 주변시와 분할 주의력을 연습하세요.",
  keywords: [
    "다중 객체 추적",
    "다중 객체 추적 테스트",
    "다중 물체 추적",
    "MOT 테스트",
    "여러 공 동시 추적",
    "분할 주의력",
    "움직이는 공 기억하기"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "다중 객체 추적 테스트 | 주변시 훈련 | SkillDrills",
    description: "여러 움직이는 표적을 동시에 따라가는 무료 다중 객체 추적 테스트. 주변시와 분할 주의력을 연습하세요.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "다중 객체 추적 테스트 | 주변시 훈련 | SkillDrills",
    description: "똑같이 생긴 공들 사이에서 표적 3개를 끝까지 따라가는 무료 다중 객체 추적 테스트입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/multiple-targets'),
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
    { "@type": "ListItem", "position": 5, "name": "다중 객체 추적 테스트", "item": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "다중 객체 추적 테스트",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "똑같이 생긴 공들 가운데 처음 2초 동안 초록색으로 표시된 표적 3개를 기억하고, 공들이 60초 동안 서로 부딪히며 움직인 뒤 그 3개를 다시 골라내는 브라우저 연습입니다.",
  "featureList": [
    "공 8개로 시작, 그중 3개가 2초 동안 초록색으로 표시",
    "60초 동안 모든 공이 같은 모습으로 벽과 서로에게 튕기며 이동",
    "멈춘 뒤 공 3개를 골라 확인: 정답 1개당 20점(최대 60점), 오답 감점 없음",
    "최고 점수가 오를수록 공 개수와 속도가 조금씩 증가, 기록은 브라우저 로컬 저장소에만 저장"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "다중 객체 추적 테스트 | SkillDrills",
  "alternateName": "GhostLink MOT",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets",
  "dateModified": "2026-11-12",
  "description": "무료 온라인 다중 객체 추적 테스트: 똑같은 공들 사이에서 표적 3개를 60초 동안 놓치지 않고 따라가세요.",
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
  "teaches": "여러 움직이는 물체를 동시에 주의로 따라가기, 분할 주의"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "다중 객체 추적 테스트",
  "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets",
  "description": "똑같이 생긴 공들 중 표시된 표적 3개를 기억하고 끝까지 따라가 다시 찾아내는 무료 다중 객체 추적 게임.",
  "genre": [
    "Puzzle",
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
  "name": "다중 객체 추적 테스트 하는 법",
  "dateModified": "2026-11-12",
  "description": "한 라운드를 진행하는 4단계.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "표적 3개 기억하기",
      "text": "카운트다운 뒤 공들이 나타나고, 그중 3개가 2초 동안 초록색으로 표시됩니다. 위치를 기억하세요.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "60초 동안 따라가기",
      "text": "표시가 사라지면 모든 공이 같은 모습이 되어 60초 동안 움직입니다. 공은 벽과 서로에게 부딪히면 튕겨 나갑니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "공 3개 고르기",
      "text": "시간이 끝나면 공이 멈춥니다. 표적이라고 생각하는 공 3개를 클릭(탭)하세요. 다시 누르면 선택이 취소됩니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "확인하고 결과 보기",
      "text": "3개를 고른 뒤 확인 버튼을 누르면 정답 1개당 20점이 주어집니다. 틀린 선택은 0점이며 감점은 없습니다.",
      "url": "https://skilldrills.online/ko/drills/visual/tracking-accuracy/multiple-targets#step-4"
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
      "name": "다중 객체 추적(MOT) 테스트는 어떻게 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "똑같이 생긴 공들 중 3개가 처음 2초 동안 초록색으로 표시됩니다. 그 뒤 모든 공이 같은 모습으로 60초 동안 움직이고, 멈추면 처음 표시된 3개를 골라 확인합니다. 정답 1개당 20점, 한 라운드 최대 60점입니다. 시력이나 주의력을 진단하는"
      }
    },
    {
      "@type": "Question",
      "name": "공은 몇 개이고 점점 어려워지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "처음에는 공 8개로 시작합니다. 최고 점수가 30점 오를 때마다 공이 1개 늘고, 공의 속도도 최고 점수에 따라 조금씩 빨라집니다. 표적 수는 항상 3개입니다."
      }
    },
    {
      "@type": "Question",
      "name": "틀린 공을 고르면 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "틀린 선택은 0점으로 처리되며 별도의 감점은 없습니다. 고른 공을 다시 누르면 선택이 취소되므로, 확인 버튼을 누르기 전까지 바꿀 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "사람은 한 번에 몇 개까지 따라갈 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "MOT 패러다임을 처음 제시한 Pylyshyn & Storm(1988)의 실험 이후, 같은 모양의 물체 여러 개를 동시에 추적하는 능력은 대략 4개 안팎에서 한계에 이르고 속도가 빠를수록 줄어든다고 보고되어 왔습니다(Cavanagh & Alvarez, 2005). 이 테스트는 표적 3개로 고정되어 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "공을 하나씩 번갈아 쳐다보면 안 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "한 공에 시선을 옮기는 동안 다른 표적이 방해 공과 겹치면 어느 쪽이 표적인지 헷갈리기 쉽습니다. 많은 사람이 표적들 사이의 가운데쯤을 바라보며 전체를 한꺼번에 의식하는 방법을 편하게 느낍니다."
      }
    },
    {
      "@type": "Question",
      "name": "공끼리 부딪힐 때 놓치지 않으려면?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "공은 서로 부딪히면 튕겨 나갑니다. 충돌 직전의 방향을 기억해 두고, 튕겨 나간 뒤 어느 쪽으로 갈지를 미리 의식하면 표적과 방해 공이 뒤바뀌는 실수를 줄일 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "이 훈련으로 게임이나 스포츠 실력이 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수가 오르면 이 과제에 익숙해졌다는 뜻입니다. 게임, 스포츠, 운전 같은 다른 상황으로 효과가 이어진다는 보장은 없으며, 의료적 평가를 대신하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "무료인가요? 기록은 어디에 저장되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "회원가입 없이 무료로 이용할 수 있습니다. 최고 점수 등 기록은 사용 중인 브라우저의 로컬 저장소에만 저장됩니다."
      }
    }
  ]
};

const guideData = {
  heading: "다중 객체 추적 테스트: 진행 방법과 요령",
  intro: [
    "다중 객체 추적 테스트(Multiple Object Tracking, MOT)는 똑같이 생긴 여러 공 가운데 처음에 표시된 표적 3개를 끝까지 따라가 다시 찾아내는 과제입니다. Pylyshyn & Storm(1988)이 처음 소개한 실험 방식을 단순한 브라우저 게임으로 옮긴 것입니다.",
    "카운트다운 뒤 공 3개가 2초 동안 초록색으로 표시되고, 이어서 모든 공이 같은 모습으로 60초 동안 벽과 서로에게 튕기며 움직입니다. 공이 멈추면 3개를 골라 확인하며, 정답 1개당 20점(최대 60점)을 얻고 오답은 감점 없이 0점입니다. 최고 점수가 오를수록 공 개수와 속도가 조금씩 늘어납니다.",
    "여러 물체를 동시에 따라가는 일은 눈을 하나하나 옮겨 보는 것이 아니라 주의를 여러 위치에 나누어 유지하는 방식으로 이루어진다고 설명됩니다(Cavanagh & Alvarez, 2005). 이 테스트는 그런 상황을 연습해 보는 게임이며, 주의력이나 시력을 측정·진단하지 않습니다."
  ],
  benchmarks: {
    "title": "SkillDrills 연습 구간 (이 게임 전용 기준)",
    "headers": [
      "구간",
      "맞힌 표적",
      "점수",
      "설명"
    ],
    "rows": [
      [
        "완벽",
        "3 / 3",
        "60점",
        "60초 동안 표적 3개를 모두 유지."
      ],
      [
        "양호",
        "2 / 3",
        "40점",
        "충돌이나 겹침에서 하나를 놓침."
      ],
      [
        "연습 중",
        "1 / 3",
        "20점",
        "중간에 표적 여러 개가 뒤바뀜."
      ],
      [
        "시작 단계",
        "0 / 3",
        "0점",
        "게임에 익숙해지는 단계."
      ]
    ],
    "note": "SkillDrills가 이 게임에 맞춰 정한 연습용 구간이며, 연구에서 나온 기준값이나 인지 능력 평가가 아닙니다."
  },
  techniques: {
    "title": "여러 표적을 놓치지 않는 요령",
    "items": [
      {
        "name": "가운데를 바라보기",
        "desc": "표적 하나만 쫓으면 나머지를 놓치기 쉽습니다.",
        "tips": "표적 3개 사이의 가운데쯤에 시선을 두고 세 개를 한꺼번에 의식해 보세요."
      },
      {
        "name": "충돌 방향 미리 읽기",
        "desc": "공은 벽과 다른 공에 부딪히면 튕겨 나갑니다.",
        "tips": "부딪히는 지점보다 튕겨 나갈 방향을 먼저 의식하세요."
      },
      {
        "name": "겹친 직후 다시 확인",
        "desc": "표적과 방해 공이 겹쳤다 떨어지는 순간이 가장 헷갈립니다.",
        "tips": "겹침이 풀리면 표적 3개가 여전히 있는지 짧게 다시 세어 보세요."
      },
      {
        "name": "고르기 전에 침착하게",
        "desc": "공이 멈춘 뒤에는 시간 제한 없이 고를 수 있습니다.",
        "tips": "확신이 없는 공은 다시 눌러 선택을 취소한 뒤 바꿔도 됩니다."
      }
    ]
  },
  steps: [
    "시작 버튼을 누르고 카운트다운 뒤 초록색으로 표시된 공 3개를 기억합니다.",
    "표시가 사라지면 60초 동안 표적 3개를 눈으로 따라갑니다.",
    "공이 멈추면 표적이라고 생각하는 공 3개를 클릭합니다.",
    "확인 버튼을 눌러 정답 수와 점수(정답 1개당 20점)를 확인합니다.",
    "결과 화면에서 정확도와 등급을 보고 다시 도전합니다."
  ],
  audience: "여러 움직이는 대상을 동시에 따라가는 연습을 해 보고 싶은 사람, FPS·MOBA 게이머, 짧은 집중력 게임을 찾는 모든 분.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('pylyshyn1988', 'cavanagh2005'),
  related: [
    {
      "href": "/ko/drills/visual/tracking-accuracy/moving-target",
      "label": "동체시력 키우는 게임"
    },
    {
      "href": "/ko/drills/visual/visual-recognition/visual-search",
      "label": "시각 탐색 게임"
    },
    {
      "href": "/ko/drills/visual/depth-perception/distance-judgment",
      "label": "거리 판단 훈련"
    },
    {
      "href": "/ko/drills/reaction-speed/visual-tracking-speed-test",
      "label": "시각 추적 속도 테스트"
    }
  ]
};

export default function LocalizedMultipleTargetsKoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GhostLinkClient copy={{  "title": "다중 객체 추적" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
