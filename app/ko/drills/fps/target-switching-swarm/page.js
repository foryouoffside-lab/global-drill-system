import TargetSwitchingSwarmClient from '@/app/drills/fps/target-switching-swarm/TargetSwitchingSwarmClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ko-KR (fps / target-switching-swarm)
// PRIMARY DOMESTIC: "타겟 스위칭 에임"          — Technical aim phrase
//                   "타겟 스위칭"              — #1 Google Suggest hit ('타겟 스위칭 디시')
//                   "에임 스위칭"              — Exact Google Suggest hit
//                   "다중 타겟 에임 연습"      — Descriptive high-intent phrase
//                   "타겟 스위칭 연습"         — Practice query
// SECONDARY / LSI:
//                   "FPS 타겟 전환"            — Tactical keyword
//                   "발로란트 타겟 스위칭"     — Game specific search
//                   "무료 에임 연습 사이트"    — Platform intent
// WINNER TITLE:     타겟 스위칭 에임 연습 – 브라우저 무료 FPS 다중 타겟 전환 트레이너 | SkillDrills
// ============================================================

export const metadata = {
  title: "타겟 스위칭 에임 연습 - 다중 타겟 전환 | SkillDrills",
  description: "브라우저에서 무료로 하는 타겟 스위칭 연습. 화면을 움직이는 타겟 2~5개를 연속으로 맞히며 다중 타겟 전환을 훈련합니다. 명중마다 +2초(최대 60초), 빗나가면 -1초가 적용되는 무한 난이도 드릴입니다.",
  keywords: [
    '타겟 스위칭 에임',
    '타겟 스위칭',
    '에임 스위칭',
    '다중 타겟 에임 연습',
    '타겟 스위칭 연습',
    'FPS 타겟 전환',
    '무료 에임 연습 사이트',
    '스프레이 전환 에임',
    '스프레이 전환',
    '연속 플릭',
    '무료 에임 연습',
    '다중 타겟 전환',
    '타겟 전환 속도',
    '타겟 스위칭 연습 사이트'
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/target-switching-swarm",
    languages: getAlternateLanguages('/drills/fps/target-switching-swarm'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "타겟 스위칭 에임 연습 - 다중 타겟 전환 | SkillDrills",
    description: "브라우저에서 무료로 하는 타겟 스위칭 연습. 화면을 움직이는 타겟 2~5개를 연속으로 맞히며 다중 타겟 전환을 훈련합니다. 명중마다 +2초(최대 60초), 빗나가면 -1초가 적용되는 무한 난이도 드릴입니다.",
    url: "https://skilldrills.online/ko/drills/fps/target-switching-swarm",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "타겟 스위칭 에임 연습 - 다중 타겟 전환 | SkillDrills",
    description: "브라우저에서 무료로 하는 타겟 스위칭 연습. 화면을 움직이는 타겟 2~5개를 연속으로 맞히며 다중 타겟 전환을 훈련합니다. 명중마다 +2초(최대 60초), 빗나가면 -1초가 적용되는 무한 난이도 드릴입니다.",
  },
};

export default function TargetSwitchingSwarmPageKo() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 드릴", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "타겟 스위칭 에임 연습", "item": "https://skilldrills.online/ko/drills/fps/target-switching-swarm" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Saccade", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "타겟 스위칭 에임 연습 - 다중 타겟 전환",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "설치 없이 브라우저에서 실행되는 무료 타겟 스위칭 연습. 화면을 튕기며 움직이는 타겟 2~5개를 연속으로 맞히며 다중 타겟 전환을 훈련합니다.",
    "genre": "FPS Training / Target Switching",
    "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "타겟 스위칭 에임 연습 - 다중 타겟 전환",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Pointer Lock API, JavaScript, HTML5 Canvas 지원 브라우저",
    "description": "설치 없이 브라우저에서 실행되는 무료 타겟 스위칭 연습. 화면을 튕기며 움직이는 타겟 2~5개를 연속으로 맞히며 다중 타겟 전환을 훈련합니다.",
    "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "타겟 스위칭 에임 연습 - 다중 타겟 전환",
    "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm",
    "description": "설치 없이 브라우저에서 실행되는 무료 타겟 스위칭 연습. 화면을 튕기며 움직이는 타겟 2~5개를 연속으로 맞히며 다중 타겟 전환을 훈련합니다.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Switching"],
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
        "name": "FPS에서 '타겟 스위칭(Target Switching)'이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "타겟 스위칭은 여러 개의 서로 다른 표적 사이를 조준선의 멈춤이나 망설임 없이 신속하게 연속 전환하여, 각 대상을 빠른 플릭과 사격으로 제압하는 운동 역학적 에임 기술입니다."
        }
      },
      {
        "@type": "Question",
        "name": "일반 플릭 훈련과 타겟 스위칭의 차이점은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "일반 플릭 훈련은 단일 표적을 쏜 뒤 조준선을 중앙으로 복귀시키는 경우가 많지만, 타겟 스위칭은 화면에 동시에 혹은 연속 생성되는 다중 표적 무리를 물 흐르듯 연속 사격하므로 시각적 사전 인덱싱과 궤적 최적화 능력이 요구됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 타겟 스위칭 연습은 어떤 규칙으로 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시작 시간은 45초이며, 화면을 튕기며 움직이는 타겟이 레벨에 따라 2~5개 유지됩니다. 타겟을 맞히면 +100점에 콤보·레벨 배수가 붙고 시간이 2초 늘어납니다(최대 60초). 빈 곳을 클릭하면 1초가 줄고 콤보가 초기화됩니다. 타겟 제한 시간 설정이 켜져 있으면 일정 시간(초반 약 2.8초, 레벨이 오르면 더 짧게) 안에 맞히지 못한 타겟은 사라지고 1초가 줄어듭니다. 2100점마다 레벨이 오르며 타겟이 더 작고 빨라집니다. 마우스와 포인터 락으로 플레이하고 Esc로 종료합니다."
        }
      },
      {
        "@type": "Question",
        "name": "적을 처치한 후 다음 표적으로의 전환이 지체되는 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "적이 죽었는지를 눈이나 귀로 확인하는 '킬 확인 딜레이(확신 망설임)' 때문입니다. 이 드릴에서는 맞힌 타겟이 즉시 사라지고 새 타겟이 생기므로, 확인을 기다리지 않고 다음 타겟으로 시선과 마우스를 넘기는 습관을 반복 연습할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "CS2 같은 게임의 스프레이 전환(Spray Transfer)에도 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "부분적으로만 그렇습니다. 이 드릴은 클릭 단위로 판정하며 반동이나 연사를 재현하지 않습니다. 다만 한 타겟에서 다음 타겟으로 조준선을 옮겨 정확히 멈추는 동작은 스프레이 전환의 기초가 되므로 보조 연습으로 쓸 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "타겟 스위칭이 특히 중요한 게임은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "카운터 스트라이크 2, 에이펙스 레전드, 오버워치 2처럼 여러 적을 연달아 상대하는 상황이 잦은 FPS에서 특히 쓰임새가 큽니다."
        }
      },
      {
        "@type": "Question",
        "name": "빠른 타겟 전환에 가장 적합한 마우스 그립법은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "클로 그립(Claw Grip)이나 핑거팁 그립(Fingertip Grip)이 유리합니다. 손목과 손가락 관절의 독립적인 미세 조절이 가능하여 급격한 플릭 정지 시 발생하는 흔들림을 효과적으로 흡수할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "피츠의 법칙(Fitts' Law)과 탄도 운동은 어떻게 연관되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "피츠의 법칙에 따르면 이동 시간은 거리가 멀수록, 표적이 작을수록 길어집니다. 또 확률적 최적 하위운동 모델(Meyer et al., 1988)에 따르면 조준은 빠른 1차 이동으로 대부분의 거리를 좁힌 뒤 짧은 수정 이동으로 마무리됩니다. 타겟이 작고 빠를수록 수정 이동이 더 필요해집니다."
        }
      },
      {
        "@type": "Question",
        "name": "타겟 스위칭 에임 연습은 얼마나 자주 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 정답은 없습니다. 게임 전 웜업으로 몇 세션을 짧게 집중해서 하는 방식을 권하며, 같은 장비에서 본인 기록 변화를 비교하세요. 실전 실력 향상을 보장하지는 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 타겟 스위칭 에임 트레이너는 무료로 이용할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 별도 설치나 회원가입 없이 PC 브라우저에서 무료로 실행됩니다. 마우스와 포인터 락이 필요하며 터치 전용 기기에서는 플레이할 수 없습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "타겟 스위칭 에임 훈련법",
    "description": "움직이는 다중 타겟을 연속으로 맞히며 타겟 전환을 연습하는 4단계.",
        "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 일치 및 포인터 락 활성화",
        "text": "/drills 페이지의 감도 설정을 평소 게임 감도에 맞춘 뒤 시작합니다. 시작하면 포인터 락이 자동으로 걸립니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "가장 가까운 스와름 타겟 신속 포착",
        "text": "움직이는 타겟 중 가장 가까운 대상에게 플릭해 클릭으로 파괴하고 +2초(최대 60초)를 얻습니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "킬 확인 멈춤 없이 즉각적인 다음 플릭 전환",
        "text": "파괴 모션을 기다려 확인하지 않고, 클릭과 동시에 다음 인접 표적을 향해 지체 없이 탄도 플릭을 발사합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "탈력된 플로우 리듬으로 연속 스트릭 유지",
        "text": "손목 긴장을 풀고 리듬을 유지하며, 타겟이 제한 시간에 사라지기 전에 연속으로 맞혀 콤보와 레벨을 쌓습니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-switching-swarm#step-4"
      }
    ]
  };

  const targetSwitchingGuide = {
    heading: "타겟 스위칭 연습: 다중 타겟 전환 가이드",
    intro: [
      "타겟 스위칭 연습을 찾는 FPS 플레이어를 위한 무료 브라우저 드릴입니다. 화면을 튕기며 움직이는 타겟 2~5개가 계속 유지되고, 하나를 맞히면 바로 새 타겟이 생기므로 다중 타겟 전환을 쉬지 않고 반복하게 됩니다. 45초로 시작해 명중마다 2초가 늘고(최대 60초) 빗나가면 1초가 줄어, 정확하게 계속 맞히는 동안 세션이 이어집니다.",
      "타겟 스위칭의 정신물리학은 피츠의 법칙(Fitts, 1954)과 David E. Meyer 등(1988)의 확률적 최적 하위운동 모델을 기반으로 합니다. 조준 운동은 대부분의 거리를 빠르게 좁히는 초기 탄도 운동(Primary Submovement)과 시각 피드백으로 미세 조정하는 2차 수정 운동으로 나뉩니다. 많은 플레이어가 맞힌 뒤 '적이 죽었는지' 확인하느라 잠깐 멈추는데, 클릭과 동시에 시선을 다음 타겟으로 옮기는 연습이 이 멈춤을 줄이는 데 초점을 둡니다.",
      "복잡한 스와름 타겟군 속에서의 공간 인덱싱은 특징 통합 이론과 사전주의적 시각 탐색 메커니즘(Treisman & Gelade, 1980; Wolfe, 2007)을 따릅니다. 사람은 소수의 움직이는 대상 위치를 동시에 추적할 수 있으므로, 가까운 타겟부터 짧은 경로로 처리하는 순서를 미리 정해 두면 전환이 매끄러워집니다.",
      "기록 안내: 결과 화면에는 점수, 적중률(명중 ÷ 전체 클릭), 파괴한 타겟 수, 최대 콤보, 최고 레벨이 표시되며 최고 기록은 이 브라우저에만 저장됩니다. 타겟 간 전환 시간(ms)은 측정하지 않습니다. 모니터 주사율과 마우스 폴링레이트에 따라 체감이 달라지므로 같은 환경에서 본인 기록 변화를 비교하세요."
    ],
    benchmarks: {
      title: "타겟 스위칭 적중률 연습 구간",
      headers: ["연습 구간", "적중률", "의미"],
      rows: [
        ["구간 1", "95% 이상", "높은 레벨에서도 빈 클릭이 거의 없는 상태"],
        ["구간 2", "88% – 95%", "빠른 타겟에서 가끔 빗나가지만 전환 흐름이 유지되는 상태"],
        ["구간 3", "80% – 88%", "멀리 떨어진 타겟으로 전환할 때 오버슈트가 생기는 상태"],
        ["구간 4", "70% – 80%", "서두르다 빈 클릭이 잦아 시간이 자주 줄어드는 상태"],
        ["구간 5", "70% 미만", "속도를 낮추고 정확한 정지부터 잡아야 하는 상태"]
      ],
      note: "적중률은 결과 화면의 값(명중 ÷ 전체 클릭)입니다. 구간은 SkillDrills가 정한 연습용 구분이며 연구 기준, 게임 랭크, 사용자 통계와 무관합니다."
    },
    techniques: {
      title: "타겟 스위칭을 완성하는 과학적 에임 프로토콜",
      items: [
        {
          name: "사케드 사전 루팅과 시각 인덱싱",
          desc: "첫 번째 타겟에 대한 최종 미세 조정이 끝나기 직전, 시선(중심시)을 먼저 다음 타겟으로 도약시킵니다 (Treisman & Gelade, 1980; Wolfe, 2007). 보통 시선이 손보다 먼저 목표에 도착합니다.",
          tips: "클릭한 타겟을 계속 보지 마세요. 주변 시야로 파괴를 확인하고 중심시는 이미 다음 적에 꽂혀 있어야 합니다."
        },
        {
          name: "종말 제동력과 탄도 하위운동 최적화",
          desc: "플릭 궤적의 마지막 10% 구간에서 길항근의 반대 방향 텐션을 단단히 주어 타겟 중심에 조준선을 칼같이 세웁니다 (Meyer et al., 1988).",
          tips: "마우스에 유압식 브레이크가 달렸다고 상상하세요. 출발은 폭발적으로, 도착은 흔들림 없이 정지해야 합니다."
        },
        {
          name: "최단 각거리 기반 클러스터 소탕",
          desc: "화면을 무작정 횡단하지 말고 각도 거리가 가장 가까운 타겟 쌍부터 순서대로 정리해 나갑니다 (Fitts, 1954).",
          tips: "멀리 떨어진 단독 타겟으로 무리하게 날아가지 말고, 가까운 군집부터 빠르게 쓸어 담으세요."
        },
        {
          name: "그립 탈력 유지 및 미세 조절력 보존",
          desc: "마우스 그립 압력을 10점 만점에 3점 정도로 가볍게 유지하여, 초고속 플릭 직후에도 손가락 끝으로 미세한 수정 조준이 가능하게 합니다.",
          tips: "긴 연속 교전에서 손에 쥐가 나거나 조준선이 튄다면 엄지와 새끼손가락의 쥐는 힘을 의도적으로 풀어주세요."
        }
      ]
    },
    steps: [
      "/drills 페이지의 감도 설정을 평소 게임 감도에 맞추고 시작 (포인터 락 자동 적용).",
      "화면에 스폰된 스와름 전체를 시야에 담고 각도 차이가 작은 타겟 클러스터를 신속 식별.",
      "가장 가까운 타겟으로 플릭하여 격추하고 +100점 × 콤보·레벨 배수와 +2초(최대 60초) 획득.",
      "킬 확인 멈춤을 배제하고 즉시 다음 인접 타겟으로 마우스 탄도 운동을 부드럽게 연계.",
      "빈 클릭(-1초)을 줄이며 연속 콤보를 쌓아 더 작고 빠른 타겟이 나오는 높은 레벨에 도전."
    ],
    audience: "카운터 스트라이크 2, 에이펙스 레전드, 오버워치 2 등에서 여러 적을 연달아 상대하는 타겟 전환을 따로 연습하고 싶은 FPS 플레이어. 마우스가 필요합니다.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/ko/drills/fps/vertical-air-track", label: "수직 에임 연습 (공중 타겟 트래킹)" },
      { href: "/ko/drills/fps/strafe-tracking", label: "에임 트래킹 연습 (무빙 추적)" },
      { href: "/ko/drills/motor/hand-eye-coordination/aim-trainer", label: "에임 트레이너 (플릭 샷)" },
      { href: "/ko/drills/reaction-speed/reaction-game", label: "반응속도 테스트 게임" },
      { href: "/ko/drills/reaction-speed/visual-tracking-speed-test", label: "시각 추적 속도 테스트" }
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
      <TargetSwitchingSwarmClient
        copy={{
          h1Keyword: "타겟 스위칭 에임 연습",
          h1Suffix: " - 다중 타겟 전환",
          subtitle: "움직이는 여러 타겟 사이를 빠르고 정확하게 전환하는 연습을 브라우저에서 무료로 하세요.",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "적중률",
          statBestScore: "최고 점수",
          statTargetsDestroyed: "파괴 타겟",
          statMaxCombo: "최대 콤보",
          statPeakLevel: "최고 레벨",
          startTitle: "Target Switching Swarm",
          startSubtitle: "포인터 락 입력 • 무한 난이도 진행",
          stageCaption: "화면을 움직이는 타겟을 사라지기 전에 빠른 플릭으로 연속 격추하세요.",
          rulesTitle: "드릴 조작법 & 점수 획득 규칙",
          aboutTitle: "타겟 스위칭(Target Switching)에 대하여",
          rulesItems: [
            { num: "1", text: "타겟 명중", highlight: "+100점 (+2초, 최대 60초)", result: "×콤보 배수" },
            { num: "2", text: "지속 스와름", highlight: "즉시 리스폰", result: "2~5개 타겟 유지" },
            { num: "3", text: "빗나감 / 제한 시간 초과", highlight: "페널티", result: "콤보 초기화 (-1초)" },
            { num: "4", text: "레벨 난이도 상승", highlight: "+1 레벨 / 2100점", result: "소형화 & 가속" }
          ]
        }}
      />
      <DrillGuide guide={targetSwitchingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
