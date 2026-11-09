import InstantResponseClient from '@/app/drills/fps/instant-response/InstantResponseClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "FPS 클릭 반응 테스트 | 클릭 반응속도 측정 | SkillDrills",
  description: "FPS 클릭 반응 테스트: 화면 중앙 표적이 녹색으로 켜지는 순간 클릭해 반응 시간을 ms로 기록합니다. 무작위 대기와 페인트로 예측 클릭을 걸러내는 무료 브라우저 드릴. 마우스 필요.",
  keywords: [
    "FPS 클릭 반응 테스트",
    "클릭 반응속도 측정",
    "클릭 반응속도",
    "FPS 반응속도",
    "에임 반응속도",
    "발로란트 클릭 반응",
    "카스2 클릭 반응",
    "앵글 홀드 반응",
    "예측 클릭 억제"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/instant-response",
    languages: getAlternateLanguages('/drills/fps/instant-response'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "FPS 클릭 반응 테스트 | 클릭 반응속도 측정 | SkillDrills",
    description: "FPS 클릭 반응 테스트: 화면 중앙 표적이 녹색으로 켜지는 순간 클릭해 반응 시간을 ms로 기록합니다. 무작위 대기와 페인트로 예측 클릭을 걸러내는 무료 브라우저 드릴. 마우스 필요.",
    url: "https://skilldrills.online/ko/drills/fps/instant-response",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "FPS 클릭 반응 테스트 | 클릭 반응속도 측정 | SkillDrills",
    description: "FPS 클릭 반응 테스트: 화면 중앙 표적이 녹색으로 켜지는 순간 클릭해 반응 시간을 ms로 기록합니다. 무작위 대기와 페인트로 예측 클릭을 걸러내는 무료 브라우저 드릴. 마우스 필요.",
  },
};

export default function InstantResponseKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 트레이너", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "FPS 클릭 반응 테스트", "item": "https://skilldrills.online/ko/drills/fps/instant-response" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
    "name": "FPS 클릭 반응 테스트",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "중앙 표적이 켜진 순간부터 클릭까지의 시간을 밀리초 단위로 기록하는 무료 브라우저 FPS 클릭 반응 드릴.",
    "genre": "FPS Training / Reaction Speed",
    "url": "https://skilldrills.online/ko/drills/fps/instant-response",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FPS 클릭 반응 테스트",
    "url": "https://skilldrills.online/ko/drills/fps/instant-response",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "브라우저에서 실행되는 FPS 클릭 반응 테스트. 무작위 대기 뒤 켜지는 녹색 표적에 클릭하고, 중반 레벨부터 나오는 페인트는 참습니다."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "FPS 클릭 반응 테스트",
    "url": "https://skilldrills.online/ko/drills/fps/instant-response",
    "description": "중앙 표적이 켜진 순간부터 클릭까지의 시간을 밀리초 단위로 기록하는 무료 브라우저 FPS 클릭 반응 드릴.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reaction Trainer", "Aim Trainer"],
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
        "name": "FPS에서 반응속도(Reaction Time)란 무엇이며 어떻게 측정되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "화면에 적 목표가 나타난 순간부터 마우스 클릭이 물리적으로 입력되기까지의 시간 간격(밀리초)입니다. 망막의 광수용, 시신경 전달, 대뇌 피질 처리, 척수로 신경 전달, 손가락 스위치 입력까지의 전 과정을 포함합니다."
        }
      },
      {
        "@type": "Question",
        "name": "반응속도의 기준은 어느 정도인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "일반 성인의 단순 시각 반응속도는 220~260ms 수준으로 알려져 있습니다. 고주사율 모니터(144Hz~360Hz) 환경에서 연습하면 이 연습 화면에서의 기록이 짧아질 수 있습니다. 수치는 참고용이며 개인차와 기기 지연이 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "반응속도는 의도적인 훈련으로 향상시킬 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "어느 정도는 가능합니다. 신경 전도 속도 자체는 생물학적으로 제한적이지만, 연습으로 망설임이 줄어들면 이 연습 화면에서의 반응 시간이 짧아질 수 있습니다. 단축 폭에는 개인차가 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "단순 반응 시간과 선택 반응 시간의 차이는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1868년 돈데르스가 정립한 개념으로, 단 하나의 자극에 대해 정해진 단일 동작을 수행하는 것이 단순 반응 시간(Type A)입니다. 여러 자극을 식별하고 판단하는 선택 반응 시간(Type B)은 힉의 법칙에 따라 인지 판단 지연이 추가됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "인간의 시각 반응속도 생물학적 한계는 몇 밀리초인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "빛을 보고 클릭하는 데에는 눈, 뇌, 손가락 근육을 거치는 처리 시간이 필요해 예측 없이 100ms보다 빠른 기록은 드뭅니다. 이 드릴에서 그보다 빠른 기록이 자주 나온다면 예측 클릭을 의심해 보세요. 기록에는 기기 지연도 포함됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "모니터 주사율과 마우스 폴링레이트가 반응속도에 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "영향을 줍니다. 60Hz 모니터는 프레임 표시 지연이 최대 16.7ms에 달하지만, 240Hz 모니터는 4.16ms로 줄어들어 12.5ms의 하드웨어 이점을 제공합니다. 또한 1000Hz 마우스는 1ms 간격으로 좌표를 보고하여 입력 지터를 최소화합니다 (Woods et al., 2015)."
        }
      },
      {
        "@type": "Question",
        "name": "조기 격발(예측 클릭)은 왜 패널티를 받나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시각적 확인 없이 타이밍 예측에만 의존해 사격하면 실전에서 상대의 페이크 무빙이나 피킹 타이밍 변화에 취약해집니다. 본 드릴은 무작위 대기 시간과 (중반 레벨부터) 흐린 페인트를 배치하여 시각 확인 후 발사하는 엄격한 격발 규율을 훈련합니다."
        }
      },
      {
        "@type": "Question",
        "name": "수면 부족과 피로는 반응속도에 어떤 영향을 미치나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "수면 부족과 피로는 반응 시간을 늘릴 수 있습니다. 피곤할 때의 기록은 평소 기록과 따로 비교하세요."
        }
      },
      {
        "@type": "Question",
        "name": "발로란트나 카스2에서 각을 쨀 때(앵글 홀드) 반응속도를 극대화하는 법은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "피커스 어드밴티지(Peeker's Advantage)로 인해 뛰어나오는 적이 시각적 우선권을 가지므로, 본인의 반응속도에 맞춰 크로스헤어를 벽 모서리에서 살짝 떼어 배치(오프셋)하는 것이 가장 효과적입니다."
        }
      },
      {
        "@type": "Question",
        "name": "경기 전 가장 효과적인 반사신경 워밍업 루틴은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "손가락과 손목 스트레칭 3분, 본 드릴을 활용한 단순 반응 자극 훈련 5분, 실전 마이크로 플릭 에임 연습 2분으로 이어지는 10분 루틴을 예로 들 수 있습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "FPS 반응속도 정확한 측정 및 훈련 방법",
    "description": "시각 반응속도와 격발 반사신경을 정확히 측정하고 단련하는 단계별 가이드.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 일치 및 포인터 락 활성화",
        "text": "세션 설정에서 주 게임 감도를 일치시킨 후 '훈련 시작'을 클릭하여 Pointer Lock을 고정합니다."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "중앙 조준선에 시선 고정 및 긴장 완화",
        "text": "전완근의 힘을 빼고 부드러운 집중 상태로 중앙 트리거 레티클에 시선을 둡니다."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "트리거 스위치 프리로드 준비",
        "text": "검지 손가락을 마우스 스위치 직전 지점에 가볍게 접촉시켜 물리적 이동 거리를 없앱니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "녹색 플래시 식별 시 즉각 클릭",
        "text": "무작위 지연 후 녹색 불빛이 점등되는 찰나에 즉각 격발하며, 흐린 페인트 자극에는 반응하지 않는 자제력을 유지합니다."
      }
    ]
  };

  const instantResponseGuide = {
    heading: "FPS 클릭 반응 테스트 가이드",
    intro: [
      "FPS 클릭 반응 테스트는 화면 중앙 표적이 녹색으로 켜진 순간부터 클릭까지의 시간을 측정합니다. 이 드릴은 클릭 반응속도를 밀리초로 기록하고, 무작위 대기와 페인트로 예측 클릭을 걸러내 발로란트·카운터스트라이크2의 앵글 홀드 반응을 연습합니다.",
      "멘탈 크로노메트리의 학문적 기원은 네덜란드 안과의사 프란시스쿠스 돈데르스(1868)의 감산법에서 시작되었습니다. 단 하나의 자극에 대해 즉각 반응하는 '단순 반응 시간(Type A)'은 인간 대뇌 피질과 중추신경계의 순수한 정보 전달 능력을 보여줍니다.",
      "본 트레이너는 HTML5 Pointer Lock API 환경에서 브라우저의 performance.now() 고해상도 타임스탬프를 통해 밀리초 단위로 측정됩니다 (Woods et al., 2015). 표적은 화면 중앙에 고정되고 조준선도 중앙에서 시작하므로, 플릭 훈련과 달리 큰 이동 없이 클릭 반응만 기록합니다. 기록에는 모니터·마우스·브라우저 지연이 포함됩니다.",
      "측정 방식 안내: 모든 반응 시간은 브라우저의 performance.now() 고정밀 클록을 통해 기기 내부에서 로컬로 측정되며 서버로 전송되지 않습니다. 브라우저 보안 타이머 완화(Spectre 방지, 통상 약 1ms) 및 디스플레이 주사율(60Hz 기준 약 16.7ms, 144Hz 기준 약 6.9ms, 240Hz 기준 약 4.1ms)에 따른 오차가 존재하므로 5ms 미만의 차이는 측정 노이즈로 간주하고 동일 기기 내에서의 기록 향상 추이를 비교하는 것이 바람직합니다 (Woods et al., 2015)."
    ],
    benchmarks: {
      title: "클릭 반응 시간별 SkillDrills 연습 구간",
      headers: ["SkillDrills 연습 구간", "드릴 측정값 (ms)", "명중 1회 기본 점수 (콤보·레벨 배율 전)", "참고"],
      rows: [
        ["구간 A", "≤ 150 ms", "100 + 속도 보너스 150", "속도 보너스 최대. 이 구간이 잦다면 예측 클릭 여부도 점검"],
        ["구간 B", "150 – 250 ms", "100 + 약 107~150", "보너스가 크게 남는 구간"],
        ["구간 C", "250 – 350 ms", "100 + 약 64~107", "보너스가 절반 안팎으로 줄어드는 구간"],
        ["구간 D", "350 – 500 ms", "100 + 0~64", "보너스가 0에 가까워지는 구간"],
        ["구간 E", "> 500 ms", "100 (보너스 없음)", "레벨 1의 표시 시간은 약 550ms이며 레벨이 오를수록 짧아져 시간 초과가 됩니다"]
      ],
      note: "이 표는 드릴의 점수 규칙에서 나온 SkillDrills 연습 구간입니다. 연구 규준이나 사용자 데이터가 아니며, 측정값에는 모니터·마우스·브라우저 지연이 포함됩니다."
    },
    techniques: {
      title: "트리거 반응속도를 극대화하는 실전 테크닉",
      items: [
        {
          name: "시선 집중 및 중심와 앵커링",
          desc: "화면 전체를 흐릿하게 보지 말고, 자극이 나타나는 중앙 레티클에 시선을 정확히 고정하세요. 자극이 나올 위치에 미리 주의를 두면 반응이 빨라질 수 있다는 주의 연구(Posner 계열)가 있습니다.",
          tips: "눈에 과도한 힘을 주지 말고 편안하게 중심을 응시하는 집중력을 유지하세요."
        },
        {
          name: "검지 스위치 프리트래블 제거",
          desc: "클릭 직전에 검지 손가락을 마우스 스위치의 작동 지점 바로 앞까지 가볍게 밀착시켜 두세요. 버튼까지의 허공 이동 거리를 없애면 클릭에 드는 시간을 줄이는 데 도움이 됩니다.",
          tips: "팔 전체에 힘이 들어가면 오히려 반사신경이 굳어지므로 손가락 끝만 가볍게 준비하세요."
        },
        {
          name: "하드웨어 지연의 최소화",
          desc: "고주사율 모니터(144Hz~360Hz)를 사용하고 마우스 폴링레이트를 1000Hz 이상으로 설정하며 수직동기화(V-Sync)를 해제하세요. 인게임 NVIDIA Reflex나 AMD Anti-Lag을 켜서 렌더링 지연을 제거합니다.",
          tips: "디스플레이 스케일링을 GPU가 아닌 디스플레이로 설정하여 추가 입력 지연을 방지할 수 있습니다."
        },
        {
          name: "호흡 조절을 통한 각성 수치 안정화",
          desc: "과도한 흥분은 페인트 자극에 낚이는 조기 격발을 부릅니다. 여키스-도슨 법칙에 따라 코로 천천히 복식호흡을 진행하여 최적의 각성 영역을 유지하세요.",
          tips: "불빛이 켜지기 전에 손가락이 멋대로 나간다면 호흡을 가다듬고 침착함을 되찾으세요."
        }
      ]
    },
    steps: [
      "세션 설정에서 선호하는 마우스 감도를 맞춰 입력 좌표를 일관되게 고정합니다.",
      "'훈련 시작'을 클릭하여 전체화면과 Pointer Lock을 활성화합니다.",
      "중앙 조준선에 시선을 두고 검지 손가락을 스위치 작동 지점에 가볍게 얹습니다.",
      "녹색 플래시가 번쩍이는 순간 번개처럼 클릭하며, 무작위 대기 시간 중 조기 격발을 억제합니다.",
      "명중마다 2초가 추가되고(최대 60초) 조기 격발·빗맞힘·시간 초과마다 1초가 줄어듭니다. 시간이 0이 되면 종료되며, 평균 반응시간(ms), 명중률, 최대 콤보, 최고 레벨을 확인합니다."
    ],
    audience: "발로란트, 카스2 등에서 앵글 홀드 반응을 높이고자 하는 게이머, 자신의 반사신경을 정밀 측정하고 싶은 플레이어, 격발 찰나의 순발력을 기르고자 하는 모든 FPS 유저.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'donders1969', 'hick1952'),
    related: [
      { href: "/ko/drills/fps/angle-hold-trainer", label: "앵글 홀드 (크로스헤어 배치) 트레이너" },
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭 에임 연습" },
      { href: "/ko/drills/fps/180-degree-awareness", label: "180도 플릭 에임 연습" },
      { href: "/ko/drills/visual/reaction-speed/light-reaction", label: "반응속도 테스트" },
      { href: "/ko/drills/reaction-speed/reflex-training-drill", label: "반사신경 트레이닝" }
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
      <InstantResponseClient
        copy={{
          h1Keyword: "FPS 클릭 반응 테스트",
          h1Suffix: " - 클릭 반응속도 측정",
          subtitle: "클릭 반응속도를 ms로 기록하고 예측 클릭을 참는 격발 규율을 훈련합니다",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "명중률",
          statBestScore: "최고 점수",
          startTitle: "FPS 클릭 반응 테스트",
          startSubtitle: "마우스 + Pointer Lock • 45초 시작 • 무한 난이도 진행",
          getReady: "준비 완료",
          pausedTitle: "일시 정지됨",
          pausedSubtitle: "클릭하여 재개 — 커서 잠금이 다시 활성화됩니다",
          stageCaption: "중앙 목표가 녹색으로 번쩍이는 즉시 클릭하세요. 어두운 페인트 자극을 걸러내는 격발 규율이 필요합니다.",
          rulesTitle: "훈련 규칙 & 점수 체계",
          rulesItems: [
            { num: "1", text: "플래시 반응 명중", highlight: "+100 PTS (+2초, 최대 60초)", result: "×콤보 배율" },
            { num: "2", text: "스피드 보너스 체계", highlight: "500ms 미만 적중", result: "최대 +150 PTS (150ms 이하)" },
            { num: "3", text: "레벨 난이도 진행", highlight: "+1 레벨 / 1400 PTS", result: "적응형 노출시간" },
            { num: "4", text: "조기 격발 / 빗맞힘", highlight: "페인트·시간 초과 포함", result: "콤보 리셋 (-1초)" }
          ],
          aboutTitle: "FPS 클릭 반응 테스트 정보",
          aboutHeading: "FPS 반응속도 훈련이란 무엇인가요?"
        }}
      />
      <DrillGuide guide={instantResponseGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
