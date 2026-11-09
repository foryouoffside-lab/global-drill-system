import TargetPrioritizationClient from '@/app/drills/fps/target-prioritization/TargetPrioritizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "타겟 우선순위 판단 연습 | 위협 판단·사격 억제 | SkillDrills",
  description: "무료 타겟 우선순위 판단 연습: 움직이는 빨강(고위협)·노랑(중위협) 타겟 중 빨강을 먼저 쏘고, 초록 아군은 쏘지 마세요. 위협 판단과 사격 억제를 설치 없이 브라우저에서 마우스로 훈련합니다.",
  keywords: [
    "타겟 우선순위 판단",
    "타겟 우선순위 판단 연습",
    "위협 판단",
    "타겟 선택",
    "타겟 우선순위",
    "사격 억제 훈련",
    "FPS 위협 평가",
    "다중 타겟 판단"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/target-prioritization",
    languages: getAlternateLanguages('/drills/fps/target-prioritization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "타겟 우선순위 판단 연습 | 위협 판단·사격 억제 | SkillDrills",
    description: "무료 타겟 우선순위 판단 연습: 움직이는 빨강(고위협)·노랑(중위협) 타겟 중 빨강을 먼저 쏘고, 초록 아군은 쏘지 마세요. 위협 판단과 사격 억제를 설치 없이 브라우저에서 마우스로 훈련합니다.",
    url: "https://skilldrills.online/ko/drills/fps/target-prioritization",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "타겟 우선순위 판단 연습 | 위협 판단·사격 억제 | SkillDrills",
    description: "무료 타겟 우선순위 판단 연습: 움직이는 빨강(고위협)·노랑(중위협) 타겟 중 빨강을 먼저 쏘고, 초록 아군은 쏘지 마세요. 위협 판단과 사격 억제를 설치 없이 브라우저에서 마우스로 훈련합니다.",
  },
};

export default function TargetPrioritizationKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "타겟 우선순위 판단 연습", "item": "https://skilldrills.online/ko/drills/fps/target-prioritization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "타겟 우선순위 판단 연습 - 위협 판단·사격 억제",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "움직이는 빨강·노랑·초록 타겟으로 위협 판단, 아군 오사 방지, 우선순위 타겟 격파를 연습하는 무료 브라우저 FPS 드릴.",
    "genre": "FPS Training / Target Prioritization",
    "url": "https://skilldrills.online/ko/drills/fps/target-prioritization",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "타겟 우선순위 판단 연습 - 위협 판단·사격 억제",
    "url": "https://skilldrills.online/ko/drills/fps/target-prioritization",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "움직이는 빨강·노랑·초록 타겟으로 위협 판단, 아군 오사 방지, 우선순위 타겟 격파를 연습하는 무료 브라우저 FPS 드릴."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "타겟 우선순위 판단 연습 - 위협 판단·사격 억제",
    "url": "https://skilldrills.online/ko/drills/fps/target-prioritization",
    "description": "움직이는 빨강·노랑·초록 타겟으로 위협 판단, 아군 오사 방지, 우선순위 타겟 격파를 연습하는 무료 브라우저 FPS 드릴.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Prioritization"],
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
        "name": "경쟁전 FPS에서 '타겟 우선순위(Target Prioritization)'란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "타겟 우선순위는 화면에 여러 명의 적과 오브젝트가 동시에 등장했을 때 위협의 시급성, 위험도, 적의 역할을 신속히 평가하여 가장 치명적인 대상부터 순서대로 타격하는 인지적 판단 과정입니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 타겟 우선순위 판단 연습은 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시작하면 전체화면과 마우스 고정(Pointer Lock)이 켜지고 45초 타이머로 시작합니다. 화면에는 동시에 2~4개의 타겟이 움직이며 벽에 튕깁니다. 빨강(고위협)은 100점, 노랑(중위협)은 50점에 콤보·레벨 배율이 곱해지고, 적중할 때마다 2초가 늘어납니다(최대 60초). 노랑은 일정 시간이 지나면 빨강으로 바뀌고, 초록(아군)은 쏘면 안 되며 약 3초 뒤 사라집니다. 빨강이 화면에 남아 있는데 노랑을 쏘면 우선순위 실수로 점수 없이 콤보가 초기화되고, 초록 사격과 빗나감도 콤보를 초기화합니다. 실수마다 1초가 차감되며, 1400점마다 레벨이 올라 타겟 수·속도·빨강 비율이 늘어납니다."
        }
      },
      {
        "@type": "Question",
        "name": "한타 교전에서 왜 패닉 사격을 하며 엉뚱한 대상을 쏘게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시각 정보가 많고 긴장감이 높으면 쏘지 말아야 할 순간에 클릭을 멈추기 어려워지기 때문입니다. 그래서 가장 위험한 적 대신 화면에서 크게 움직이거나 가까운 대상에 먼저 반응하기 쉽습니다."
        }
      },
      {
        "@type": "Question",
        "name": "전술 슈팅 게임에서의 'Go/No-Go' 인지 패러다임이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Go/No-Go 과제는 특정 위협 자극(적)에는 즉시 방아쇠를 당기고(Go), 아군이나 디코이 같은 비위협 자극에는 사격 충동을 즉각 억제하는(No-Go) 신경심리학적 테스트입니다. 실전 오사 방지와 침착한 샷의 기초가 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "FPS 게임에서 정지 신호 반응 시간(SSRT: Stop-Signal Reaction Time)이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SSRT는 이미 시작되었거나 준비된 운동 동작(마우스 클릭 등)을 중간에 취소하는 데 걸리는 시간입니다. Logan & Cowan(1984)의 경주 모델에 따르면, SSRT가 짧을수록 돌발 상황에서 사격을 더 빨리 취소할 수 있습니다. 이 드릴은 SSRT를 직접 측정하지는 않으며, 초록 아군을 쏘지 않는 습관을 연습하게 해 줍니다."
        }
      },
      {
        "@type": "Question",
        "name": "적 여러 명이 사이트로 진입할 때 위협 순위는 어떻게 정하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "흔히 쓰는 기준은 ①자신을 직접 조준하고 있는 적, ②사격 중인 엔트리, ③스킬을 쓰는 서포터 순서입니다. 상황마다 달라지지만, 이 드릴에서는 빨강 → 노랑 순서로 고정해 판단 습관을 단순하게 연습합니다."
        }
      },
      {
        "@type": "Question",
        "name": "시각 인지 과학에서의 '방해물 억제(Distractor Suppression)'란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "주의를 기울일 필요가 없는 디코이, 아군, 주변 이펙트 등의 비위협 시각 자극을 무시하는 과정입니다. 이를 통해 주의를 진짜 적에게 집중할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "발로란트나 CS2에서 아군이나 디코이에 헛사격하면 라운드 승률에 어떤 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "헛사격은 탄약과 시간을 소모할 뿐 아니라 반동 회복 시간을 만들어 진짜 적에게 먼저 맞을 위험을 키웁니다. 특히 1vX 클러치처럼 한 발이 중요한 상황에서 손해가 큽니다."
        }
      },
      {
        "@type": "Question",
        "name": "마우스 감도는 타겟 선택과 위협 전환에 어떤 영향을 미치나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "지나치게 높은 감도는 미세한 조준 정지와 억제 제동을 어렵게 만들고, 너무 낮은 감도는 먼 거리의 위협 목표로 전환하는 속도를 늦춥니다. 정밀하게 플릭을 멈출 수 있는 최적의 감도를 유지해야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "아드레날린 분비가 전술적 판단 속도를 왜 저하시키나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "강한 긴장은 시야가 좁아지는 '터널 비전'을 일으켜 주변 상황 파악이 늦어지고, 확인 없이 쏘는 패닉 사격으로 이어지기 쉽습니다."
        }
      },
      {
        "@type": "Question",
        "name": "타겟 우선순위 훈련은 얼마나 자주 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 정답은 없지만, 회당 10~15분 정도 짧게 하고 같은 기기에서 정확도와 오사 횟수를 비교하는 방식을 권장합니다. 피로가 쌓이면 기록이 흔들리므로 길게 몰아서 하기보다 짧게 자주 하는 편이 좋습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "타겟 우선순위 및 위협 평가 훈련 단계",
    "description": "신속한 위협 판별, 방해물 억제, 사격 충동 제어를 숙달하기 위한 4단계 가이드.",
        "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "입력 감도 캘리브레이션",
        "text": "세션 설정에서 사용하는 DPI와 인게임 감도를 일치시켜 머슬 메모리 정착에 도움이 됩니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-prioritization#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "최우선 빨간색(고위협) 타겟 즉각 포착",
        "text": "스폰 영역 전체를 빠르게 스캔하여 타이머 만료 전 활성화된 빨간색 타겟을 최우선으로 격파합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-prioritization#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "중위협(노란색) 타겟으로의 신속한 전환",
        "text": "급박한 빨간색 목표를 제거한 직후, 빨간색으로 승격하기 전에 노란색 타겟으로 조준을 빠르게 이동합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-prioritization#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "아군(초록색) 유닛에 대한 사격 충동 억제",
        "text": "초록색 아군 유닛을 향해서는 운동 억제력을 발휘하여 사격을 철저히 보류하고 콤보와 시간을 지킵니다.",
        "url": "https://skilldrills.online/ko/drills/fps/target-prioritization#step-4"
      }
    ]
  };

  const targetPrioritizationGuide = {
    heading: "타겟 우선순위 판단 연습 가이드: 위협 판단과 사격 억제",
    subtitle: "난전 상황에서의 위협 평가, 방해 자극 억제, 사격 충동 제어를 연습하는 방법",
    intro: [
      "타겟 우선순위 판단 연습은 여러 적이 보일 때 가장 위험한 타겟을 먼저 고르고, 쏘지 말아야 할 대상에는 클릭을 억제하는 훈련입니다. 이 드릴에서는 움직이는 빨강(고위협)을 먼저, 노랑(중위협)을 다음으로 쏘고 초록(아군)은 쏘지 않으며, 발로란트·CS2 같은 혼전에서 필요한 위협 판단 습관을 연습합니다.",
      "운동 억제와 의사결정 통제의 신경학적 기반은 Logan and Cowan(1984)의 정지 신호 패러다임(Stop-Signal Paradigm)으로 설명됩니다. 그들의 연구에 따르면 인간의 행동 실행(Go 프로세스)과 행동 억제(Stop 프로세스)는 전두엽-기저핵 네트워크에서 두 마리의 말이 결승선을 향해 달리는 '경주 모델(Horse-Race Model)'처럼 상호 독립적으로 속도 경쟁을 벌입니다. 그래서 위협을 확인하기 전에 클릭이 먼저 나가는 패닉 사격이 생기기 쉽습니다.",
      "선택적 시각 필터링 기전은 Donald E. Broadbent(1958)와 Anne Treisman(1964)의 초기 여과 및 감쇄 모델로 정립되었습니다. 여러 시각 자극이 망막의 인지 자원을 두고 경쟁할 때, 뇌는 하향식 주의 게이팅(Top-Down Attentional Gating; Posner & Petersen, 1990)을 작동시켜 비위협적인 아군 및 배경 무빙을 주변시에서 걸러내고 가장 치명적인 위협 벡터에 중심와 시각을 집중시킵니다.",
      "본 드릴은 F.C. Donders(1868)의 Go/No-Go 식별 반응시간 모델에 performance.now() 디지털 정밀 크로노메트리(Woods et al., 2015)를 결합하여, 단순한 마우스 조준 감각과 실전 교전 압박 하에서의 즉각적인 전술적 의사결정 속도를 하나로 연결합니다.",
      "측정 기준 및 하드웨어 지연 시간 안내: 모든 판정 이벤트는 브라우저 내장 performance.now() 고해상도 시계를 통해 로컬 기기 내에서만 정밀 측정되며 외부 서버로 데이터가 전송되지 않습니다. 브라우저 타이머는 스펙터(Spectre) 완화 조치로 약 1ms 단위로 양자화되며, 모니터 디스플레이는 주사율에 맞춰 시각 프레임을 양자화합니다(60Hz=약 16.7ms, 144Hz=약 6.9ms, 240Hz=약 4.1ms, Woods et al., 2015). 마우스 폴링레이트는 125Hz에서 약 8ms, 1000Hz에서 약 1ms의 지연 편차를 추가합니다. 따라서 약 5ms 미만의 차이는 기술적 측정 노이즈로 간주되며, 타인의 장비와 단순 비교하기보다는 동일한 하드웨어 환경에서 본인의 지연 시간 및 억제 성공률 개선도를 추적하십시오."
    ],
    benchmarks: {
      title: "결과 화면 지표 읽는 법",
      headers: ["지표", "드릴에서 세는 방식", "의미", "개선 방향"],
      rows: [
        ["정확도", "(빨강 + 노랑 적중) ÷ 전체 클릭", "올바른 순서로 위협을 처리한 비율", "같은 기기에서 본인 기록과 비교"],
        ["격파한 위협", "빨강·노랑 타겟 적중 수", "시간 안에 처리한 위협의 양", "콤보를 유지하며 늘리기"],
        ["오사 / 우선순위 실수", "초록 사격, 빨강이 남아 있을 때 노랑 사격", "사격 억제와 위협 판단의 실패", "빨강을 먼저 확인하는 습관"],
        ["최대 콤보 · 최고 레벨", "실수 없이 이어진 적중 수, 1400점당 1레벨", "판단의 일관성과 도달 난이도", "속도보다 실수 줄이기 우선"]
      ],
      note: "이 표는 이 드릴이 실제로 기록하는 지표를 설명한 것이며, 랭크·티어나 사용자 통계와는 관계가 없습니다."
    },
    techniques: {
      title: "타겟 우선순위를 극대화하는 실전 테크닉",
      items: [
        {
          name: "Go/No-Go 사격 억제 연습",
          desc: "적과 아군의 색상을 반사적으로 판별하여, 초록색 유닛을 포착하는 순간 검지 손가락의 클릭 동작을 급제동하는 통제력을 기릅니다(Logan & Cowan, 1984).",
          tips: "초록 유닛이 보이면 무리하게 조준을 꺾지 말고 조준선이 그냥 스쳐 지나가게 두는 연습을 반복하세요."
        },
        {
          name: "시야 전체 위협 트리아지 (우선순위 선별)",
          desc: "시야 내 목표를 하나씩 훑지 않고, 빨강(긴급)→노랑(준긴급) 순서를 무의식적으로 정렬하는 전주의적 필터를 가동합니다(Treisman & Gelade, 1980).",
          tips: "빨간색 타겟이 남아있는 동안에는 아무리 가까이 다른 타겟이 있어도 빨간색 외에는 마우스를 주지 마세요."
        },
        {
          name: "방해 자극 (아군 / 디코이) 능동 억제",
          desc: "비위협 시각 신호를 뇌에서 적극적으로 무시하는 필터링 역량을 길러 인지 자원의 낭비를 방지합니다(Posner, 1990).",
          tips: "아군의 갑작스러운 움직임에 시선이 뺏기려 할 때마다 중앙 시야를 이완하며 냉정함을 유지하세요."
        },
        {
          name: "종단 브레이킹과 번개 같은 타겟 전환",
          desc: "빨간색 목표 격파 후 패드 마찰력을 활용하여 불필요한 오버슈트 없이 다음 노란색 타겟으로 예리하게 플릭합니다.",
          tips: "타겟을 쏘는 순간 시선을 다음 빨강 또는 노랑 타겟으로 먼저 옮기세요."
        }
      ]
    },
    steps: [
      "인게임 감도를 확인하고 포인터 락을 활성화하여 훈련을 시작합니다.",
      "스폰되는 다중 타겟 중에서 최우선 목표인 '빨간색(고위협)'을 순간 포착합니다.",
      "빨간색 타겟을 신속히 사격하여 +100점(+2초, 최대 60초)을 획득합니다.",
      "빨간색이 모두 사라진 뒤 '노란색(중위협)'을 타격해 빨간색으로 승격되기 전에 처리합니다. 빨간색이 남아 있을 때 노란색을 쏘면 우선순위 실수입니다.",
      "초록색(아군) 유닛에 대한 사격은 철저히 억제하여 높은 정확도와 콤보 배율을 사수하세요."
    ],
    audience: "발로란트, 오버워치 2, 카운터스트라이크 2, 에이펙스 레전드에서 한타 난전 시 침착하게 우선순위 타겟을 식별하고 제압하고자 하는 모든 FPS 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'green2003', 'donders1969', 'treisman1980', 'logan1984'),
    related: [
      { href: "/ko/drills/fps/target-acquisition", label: "타겟 획득 에임 연습" },
      { href: "/ko/drills/fps/target-switching-swarm", label: "타겟 스위칭 에임 연습" },
      { href: "/ko/drills/fps/vertical-air-track", label: "수직 에임 트래킹 연습" },
      { href: "/ko/drills/fps/strafe-tracking", label: "스트레이프 트래킹 연습" },
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭샷 에임 연습" }
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
      <TargetPrioritizationClient
        copy={{
          h1Keyword: "타겟 우선순위 판단",
          h1Suffix: " - 위협 판단·사격 억제 트레이너",
          subtitle: "여러 적의 위험도를 판단하고 쏘지 말아야 할 순간을 브라우저에서 훈련하세요.",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "정확도",
          statBestScore: "최고 점수",
          statThreatsCleared: "격파한 위협",
          statMaxCombo: "최대 콤보",
          statPeakLevel: "최고 레벨",
          startTitle: "타겟 우선순위 판단",
          startSubtitle: "위협 평가 & 인지 필터링 • 무한 레벨 난이도 진행",
          getReady: "준비",
          toggleFlash: "미스 플래시 켜기/끄기",
          toggleSound: "효과음 켜기/끄기",
          pausedTitle: "일시 정지됨",
          pausedSubtitle: "클릭하여 계속하기 — 마우스 커서 락이 다시 활성화됩니다.",
          stageCaption: "최고 위협인 붉은색 타겟을 최우선 사격하고 노란색 타겟을 처리하세요. 아군(초록색)은 절대 사격하지 마세요.",
          rulesTitle: "훈련 규칙 및 점수 산정 방식",
          rulesItems: [
            { num: "1", text: "고위협 타겟", highlight: "빨강 (+100점 / +2초, 최대 60초)", result: "최우선 격파" },
            { num: "2", text: "중위협 타겟", highlight: "노랑 (+50점 / +2초)", result: "빨강이 없을 때만 득점, 시간이 지나면 빨강 승격" },
            { num: "3", text: "아군 유닛", highlight: "초록 (사격 금지)", result: "오사·우선순위 실수·미스 시 콤보 초기화 (-1초)" },
            { num: "4", text: "레벨 상승", highlight: "+1 / 1400점", result: "밀도 및 속도 지속 증가" }
          ],
          aboutTitle: "타겟 우선순위 판단 연습 소개",
          aboutHeading: "타겟 우선순위(Target Prioritization)란?",
          aboutText: "타겟 우선순위 판단은 시야 안의 여러 목표 중 위협 긴급도에 따라 쏠 대상을 고르고, 동시에 아군이나 방해물에 대한 사격을 참는 능력입니다. 이미 시작된 동작을 멈추는 과정은 동작을 시작하는 과정과 경주하듯 따로 진행되므로(Logan & Cowan, 1984), 쏘는 것보다 쏘지 않는 것이 더 어렵습니다. 이 드릴은 빨강 → 노랑 순서와 초록 사격 금지 규칙으로 그 판단을 반복 연습하게 합니다."
        }}
      />
      <DrillGuide guide={targetPrioritizationGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
