import TargetAcquisitionClient from '@/app/drills/fps/target-acquisition/TargetAcquisitionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "발로란트 에임 연습 사이트 - 첫 발 타겟 포착 | SkillDrills",
  description: "발로란트 에임 연습 사이트를 찾는다면 설치 없이 브라우저에서 시작하세요. 밝기가 다른 3~8개 타겟을 가장 밝은 것부터 맞히는 60초 무료 타겟 포착 드릴로 첫 발 정확도와 판단 속도를 반복 연습합니다.",
  keywords: [
    "발로란트 에임 연습 사이트",
    "발로 에임 연습 사이트",
    "발로란트 에임 연습",
    "발로란트 연습 사이트",
    "타겟 포착",
    "초탄 정확도",
    "적 식별 연습",
    "위협 식별",
    "FPS 타겟 포착",
    "시각 탐지 훈련",
    "초탄 헤드샷",
    "무료 에임 연습"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/target-acquisition",
    languages: getAlternateLanguages('/drills/fps/target-acquisition'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "발로란트 에임 연습 사이트 - 첫 발 타겟 포착 | SkillDrills",
    description: "발로란트 에임 연습 사이트를 찾는다면 설치 없이 브라우저에서 시작하세요. 밝기가 다른 3~8개 타겟을 가장 밝은 것부터 맞히는 60초 무료 타겟 포착 드릴로 첫 발 정확도와 판단 속도를 반복 연습합니다.",
    url: "https://skilldrills.online/ko/drills/fps/target-acquisition",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "발로란트 에임 연습 사이트 - 첫 발 타겟 포착 | SkillDrills",
    description: "발로란트 에임 연습 사이트를 찾는다면 설치 없이 브라우저에서 시작하세요. 밝기가 다른 3~8개 타겟을 가장 밝은 것부터 맞히는 60초 무료 타겟 포착 드릴로 첫 발 정확도와 판단 속도를 반복 연습합니다.",
  },
};

export default function TargetAcquisitionKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "타겟 포착", "item": "https://skilldrills.online/ko/drills/fps/target-acquisition" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "발로란트 에임 연습 사이트 - 첫 발 타겟 포착",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "발로란트 플레이어를 위한 무료 브라우저 타겟 포착 드릴. 밝기 순서대로 타겟을 맞히며 시각 식별과 첫 발 정확도를 연습합니다.",
    "genre": "FPS Training / Target Acquisition",
    "url": "https://skilldrills.online/ko/drills/fps/target-acquisition",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "발로란트 에임 연습 사이트 - 첫 발 타겟 포착",
    "url": "https://skilldrills.online/ko/drills/fps/target-acquisition",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "발로란트 플레이어를 위한 무료 브라우저 타겟 포착 드릴. 밝기 순서대로 타겟을 맞히며 시각 식별과 첫 발 정확도를 연습합니다."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "발로란트 에임 연습 사이트 - 첫 발 타겟 포착",
    "url": "https://skilldrills.online/ko/drills/fps/target-acquisition",
    "description": "발로란트 플레이어를 위한 무료 브라우저 타겟 포착 드릴. 밝기 순서대로 타겟을 맞히며 시각 식별과 첫 발 정확도를 연습합니다.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Acquisition"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "이 발로란트 에임 연습 사이트의 타겟 포착 드릴은 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "60초 동안 밝기가 서로 다른 타겟 3~8개가 한 세트로 나타나며, 가장 밝은 타겟부터 어두운 순서대로 맞혀야 합니다. 올바른 타겟은 +100점에 콤보·레벨 배수가 붙고, 세트를 모두 지우면 +400점 × 레벨 배수 보너스와 함께 새 세트가 생성됩니다. 순서가 틀린 타겟이나 빈 공간을 클릭하면 콤보가 초기화됩니다. 마우스와 포인터 락으로 플레이하며 Esc로 종료합니다. SkillDrills는 Riot Games와 무관한 독립 연습 도구입니다."
        }
      },
      {
        "@type": "Question",
        "name": "경쟁전 FPS 게임에서 '타겟 획득(Target Acquisition)'이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "타겟 획득은 시야 내 복잡한 지형지물 사이에서 적을 시각적으로 탐지하고, 아군 및 주변 사물과 즉각 구별한 뒤 운동 궤적을 형성하여 초탄을 정확히 적중시키는 인지 및 운동 제어 과정입니다."
        }
      },
      {
        "@type": "Question",
        "name": "타겟 획득은 단순 반응속도와 어떻게 다른가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "단순 반응속도는 하나의 예측 가능한 자극에 대한 단순 클릭 지연 시간만을 측정합니다. 반면 타겟 획득은 시각 탐색, 선택적 공간 주의, 명도/실루엣 대비 식별, 시간 압박 하에서의 정밀 포인팅을 복합적으로 요구합니다."
        }
      },
      {
        "@type": "Question",
        "name": "타겟 식별에 관한 '특징 통합 이론(Feature-Integration Theory)'은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anne Treisman과 Garry Gelade(1980)가 제창한 이론으로, 밝기, 색상, 방향 같은 기본 시각적 특징은 시야 전체에서 무의식적이고 병렬적으로 먼저 처리되며, 이후 공간적 주의가 결합되어 개별 목표물로 인식됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "적을 더 빠르게 포착하려면 시선을 어떻게 써야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "안내 탐색 모델(Wolfe, 2007)에 따르면 주의는 눈에 띄는 특징 쪽으로 먼저 끌립니다. 화면을 한 칸씩 훑기보다 중앙에 시선을 두고 가장 두드러지는 대상을 찾은 뒤, 시선이 닿은 곳으로 마우스를 옮기는 습관을 이 드릴에서 반복해 보세요."
        }
      },
      {
        "@type": "Question",
        "name": "발로란트나 카운터스트라이크 2 같은 전술 FPS에서 초탄 정확도가 왜 결정적인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TTK가 짧은 전술 FPS에서는 첫 발이 빗나가면 상대에게 반격할 시간을 주게 됩니다. 이 드릴은 실제 게임의 헤드샷을 재현하지는 않지만, 올바른 대상을 고른 뒤 첫 클릭을 정확히 넣는 습관을 따로 떼어 연습하게 해 줍니다."
        }
      },
      {
        "@type": "Question",
        "name": "적의 위치를 찾을 때 중심시와 주변시 중 무엇에 집중해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "초기 적 발견에는 넓은 시야를 감지하는 주변시(소프트 포커스)를 활용하고, 대상 위치가 포착되는 순간 중심와(Fovea)로 시선을 도약시켜 정밀한 미세 조준을 마무리하는 방식이 가장 이상적입니다."
        }
      },
      {
        "@type": "Question",
        "name": "시야 내의 오브젝트 밀도와 시각적 혼란 요소는 포착 속도에 어떤 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "방해 요소가 많고 목표와 비슷할수록 팝아웃 효과가 약해져 하나씩 살펴보는 직렬 탐색에 가까워지고, 목표를 찾는 시간이 길어집니다(Treisman & Gelade, 1980). 이 드릴은 레벨이 오를수록 타겟 수가 늘고 밝기 차이가 줄어 이 효과를 체감할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "신속한 다중 타겟 포착에 가장 적합한 마우스 그립법은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "클로 그립(Claw Grip)이나 핑거팁 그립(Fingertip Grip)이 유리합니다. 손가락과 손목 관절의 가동 범위가 넓어 급격한 초탄 플릭과 패드 마찰력을 활용한 감속 제동을 정밀하게 수행할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "윈도우 마우스 가속 끄기가 타겟 획득 일관성에 어떤 도움을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "마우스 가속을 끄면 손의 이동 거리와 조준선의 이동량이 일정한 비율을 유지해 근육 기억을 쌓기 쉽습니다. 게임과 운영체제의 가속 설정을 확인하되, 브라우저에서 연습할 때의 입력 처리는 환경에 따라 다를 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "타겟 획득 훈련은 매일 얼마나 연습하는 것이 좋은가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 정답은 없지만 60초 세션을 여러 번, 짧게 집중해서 하는 방식을 권합니다. 눈이 피로해지기 전에 멈추고 같은 장비에서 본인 기록 변화를 비교하세요."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "타겟 획득 에임 트레이닝 효율적 연습 단계",
    "description": "타겟 포착 드릴에서 시각 식별과 첫 발 정확도를 연습하는 4단계.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 캘리브레이션",
        "text": "/drills 페이지의 감도 설정을 평소 게임 감도에 맞춥니다. 시작하면 포인터 락이 자동으로 걸립니다."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "소프트 포커스(중앙 시선 이완) 유지",
        "text": "화면 중앙에 편안하게 시선을 두고, 주변시 전체로 고대비 타겟의 팝아웃 출현을 대기합니다."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "최우선 타겟 대비 식별",
        "text": "타겟 군집이 나타나면 병렬 시각 필터를 작동시켜 가장 밝고 선명한 최고 우선순위 목표를 즉각 판별합니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "탄도 플릭 및 패드 브레이킹 사격",
        "text": "목표 중심점으로 단번에 플릭한 뒤, 마우스패드 마찰력과 손끝 제동으로 조준선을 정확히 멈추고 클릭합니다."
      }
    ]
  };

  const targetAcquisitionGuide = {
    title: "발로란트 에임 연습: 타겟 포착과 초탄 정확도 가이드",
    subtitle: "시각적 식별 속도, 특징 대비 판별력, 그리고 빗나가지 않는 초탄 헤드샷 정확도를 완성하는 과학적 방법론",
    intro: [
      "발로란트 에임 연습 사이트를 찾는 플레이어를 위한 무료 브라우저 드릴입니다. 60초 동안 밝기가 다른 타겟 3~8개가 나타나면 가장 밝은 것부터 순서대로 맞혀야 하므로, 올바른 대상을 먼저 고른 뒤 첫 발을 정확히 넣는 과정을 반복하게 됩니다. 발로란트나 CS2처럼 첫 발이 중요한 게임을 하는 사람에게 맞춘 연습이며, SkillDrills는 Riot Games와 무관한 독립 연습 도구입니다.",
      "시각 탐색 및 객체 식별의 이론적 토대는 Anne Treisman과 Garry Gelade(1980)의 '특징 통합 이론(Feature-Integration Theory)'에서 수립되었습니다. 트레이스먼은 휘도 대비, 색상 팝아웃, 모서리 방향성과 같은 저차원 시각 특징들이 시야 전체에 걸쳐 전주의적(Preattentive)으로 병렬 추출됨을 입증했습니다. 오직 초점화된 공간 주의가 특정 좌표로 유도될 때에만 이러한 개별 특징들이 하나의 인지 가능한 적의 위협으로 결합됩니다.",
      "병렬 시각 정보 처리를 확장한 Jeremy M. Wolfe(1994, 2007)의 '안내 탐색(Guided Search)' 모델은 하향식(Top-down) 인지 기대와 상향식(Bottom-up) 감각 현저성 지도가 상호작용하여 주의의 우선순위를 부여하는 기전을 규명합니다. 시각 대비 식별을 집중 훈련하면 시각 피질이 낮은 대비의 배경 잡음과 방해 요소를 즉시 기각하도록 적응하여, 표적 출현과 운동 개시 사이의 인지 지연 시간을 획기적으로 줄여줍니다.",
      "Paul M. Fitts(1954)의 운동 난이도 법칙, David E. Meyer 등(1988)의 확률적 최적화 하위운동 모델, 그리고 고정밀 디지털 시간 측정(Woods et al., 2015)을 유기적으로 융합한 본 드릴은 망설임 없이 1차 플릭을 시작하고 목표에서 정확히 멈추는 연습에 초점을 맞춥니다. 실전 실력 향상을 보장하지는 않으며, 꾸준한 반복으로 본인 기록을 비교하는 용도입니다.",
      "기록 안내: 결과 화면에는 점수, 정확도(올바른 타겟 명중 수 ÷ 전체 클릭 수), 클리어 세트, 최대 콤보, 최고 레벨이 표시되며 최고 기록은 이 브라우저에만 저장됩니다. 반응 시간(ms)은 측정하지 않습니다. 모니터 주사율과 마우스 폴링레이트에 따라 체감이 달라지므로, 다른 장비와 비교하기보다 같은 환경에서 본인 기록 변화를 추적하세요."
    ],
    benchmarks: {
      title: "타겟 포착 정확도 연습 구간",
      headers: ["연습 구간", "정확도", "의미"],
      rows: [
        ["구간 1", "95% 이상", "순서 실수와 빈 클릭이 거의 없는 상태"],
        ["구간 2", "88% – 95%", "높은 레벨에서도 가장 밝은 타겟을 대부분 먼저 고르는 상태"],
        ["구간 3", "80% – 88%", "타겟이 많아지면 순서 실수가 생기기 시작하는 상태"],
        ["구간 4", "70% – 80%", "밝기가 비슷한 타겟을 자주 잘못 누르는 상태"],
        ["구간 5", "70% 미만", "속도보다 순서 정확도를 먼저 잡아야 하는 상태"]
      ],
      note: "정확도는 결과 화면의 값(올바른 타겟 명중 수 ÷ 전체 클릭 수)입니다. 구간은 SkillDrills가 정한 연습용 구분이며 연구 기준, 게임 랭크, 사용자 통계와 무관합니다."
    },
    techniques: {
      title: "타겟 획득력을 극대화하는 실전 테크닉",
      items: [
        {
          name: "주변시를 활용한 병렬 스캐닝 (소프트 포커스)",
          desc: "화면 영역을 하나하나 눈으로 쫓는 직렬 주시를 피하고, 화면 중앙에 시선을 편안히 둔 채 주변시를 통해 최고 명도 타겟의 팝아웃을 감지합니다(Treisman & Gelade, 1980).",
          tips: "시선을 특정 지점에 과도하게 고정하지 말고 시야 전체를 감싸듯 이완하여 자동 시각 반응을 유도하세요."
        },
        {
          name: "도약 안구-운동 신경 커플링을 통한 초탄 스냅",
          desc: "눈과 손의 움직임을 정밀 결합합니다. 먼저 도약 안구 운동(사카드)으로 타겟 중심점을 확보하고, 그 시선 벡터를 따라 마우스를 신속하게 플릭합니다.",
          tips: "마우스를 움직이기 전에 시선이 먼저 목표 중심에 가 있도록 의식하세요."
        },
        {
          name: "명도 대비 식별 임계값 제어",
          desc: "어두운 방해 요소(낮은 위협)에 흔들리지 않고 가장 밝은 고위협 대상을 선별하는 인지 필터를 확립합니다.",
          tips: "최고 밝기의 목표물이 완전히 제거될 때까지는 주변의 다른 타겟을 시야에서 철저히 무시하세요."
        },
        {
          name: "패드 마찰력을 이용한 종단 브레이킹",
          desc: "빠른 속도로 출발한 탄도 플릭을 목표 지점 직전에서 마우스패드 마찰력과 손끝 미세 압력으로 정확히 정지시킵니다(Meyer et al., 1988).",
          tips: "플릭이 멈추는 순간 손바닥 하단이나 새끼손가락에 미세한 하향 압력을 주어 오버슈트를 차단하세요."
        }
      ]
    },
    steps: [
      "/drills 페이지의 감도 설정을 평소 게임 감도에 맞추고 시작합니다. 포인터 락은 자동으로 걸립니다.",
      "화면 중앙에 편안히 시선을 유지한 채 타겟 클러스터의 출현을 기다립니다.",
      "병렬 시각 필터를 활용하여 가장 밝은 최우선 타겟을 순간적으로 판별합니다.",
      "목표 중심점으로 플릭하고 클릭하여 +100점 × 콤보·레벨 배수를 얻습니다. 시간은 60초로 고정이며 명중해도 늘어나지 않습니다.",
      "남은 타겟을 밝기 순서대로 모두 지워 +400점 × 레벨 배수 세트 보너스를 받으세요."
    ],
    audience: "발로란트, CS2, 오버워치 2, 에이펙스 레전드를 하며 적을 고르는 판단과 첫 발 정확도를 따로 연습하고 싶은 FPS 플레이어. 마우스가 필요합니다.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/ko/drills/fps/target-switching-swarm", label: "타겟 스위칭 에임 연습" },
      { href: "/ko/drills/fps/vertical-air-track", label: "수직 에임 트래킹 연습" },
      { href: "/ko/drills/fps/strafe-tracking", label: "스트레이프 트래킹 연습" }
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
      <TargetAcquisitionClient
        copy={{
          h1Keyword: "발로란트 에임 연습 사이트",
          h1Suffix: " - 첫 발 타겟 포착",
          subtitle: "발로란트 플레이어를 위한 무료 연습: 가장 밝은 타겟부터 순서대로 맞히며 첫 발 정확도를 훈련하세요.",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "정확도",
          statBestScore: "최고 점수",
          statSetsCleared: "클리어 세트",
          statMaxCombo: "최대 콤보",
          statPeakLevel: "최고 레벨",
          startTitle: "타겟 포착 Pro",
          startSubtitle: "시각적 식별 속도 • 무한 레벨 난이도 진행",
          getReady: "준비",
          toggleFlash: "미스 플래시 켜기/끄기",
          toggleSound: "효과음 켜기/끄기",
          pausedTitle: "일시 정지됨",
          pausedSubtitle: "클릭하여 계속하기 — 마우스 커서 락이 다시 활성화됩니다.",
          stageCaption: "각 타겟 클러스터에서 가장 밝은(불투명도가 높은) 목표를 가장 빠르고 정확하게 찾아 클릭하세요.",
          rulesTitle: "훈련 규칙 및 점수 산정 방식",
          rulesItems: [
            { num: "1", text: "타겟 명중", highlight: "+100점 × 레벨 배수", result: "콤보 배수 적용" },
            { num: "2", text: "세트 클리어", highlight: "+400점 × 레벨", result: "클러스터 즉시 생성" },
            { num: "3", text: "레벨 상승", highlight: "+1 / 1400점", result: "적응형 난이도 진행" },
            { num: "4", text: "오클릭 / 미스", highlight: "페널티", result: "콤보 초기화" }
          ],
          aboutTitle: "타겟 포착 드릴 소개",
          aboutHeading: "타겟 획득(Target Acquisition)이란?",
          aboutText: "타겟 획득은 시야 내 수많은 시각 정보 속에서 적을 즉각 식별하고 초탄 조준을 완료하는 인지-운동 과정입니다. 색상과 명도 같은 시각 특성은 병렬적으로 처리되므로(Treisman & Gelade, 1980), 이 드릴은 밝기 차이로 우선 대상을 고른 뒤 첫 발을 맞히는 과정을 반복 연습하게 합니다."
        }}
      />
      <DrillGuide guide={targetAcquisitionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
