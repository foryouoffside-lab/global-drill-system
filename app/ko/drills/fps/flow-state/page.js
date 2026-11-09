import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "FPS 집중력 훈련 | 플로우 상태 연습 | SkillDrills",
  description: "FPS 집중력 훈련: 곡선으로 움직이는 타겟에 조준선을 붙여 두는 무료 브라우저 트래킹 드릴. 1초 이상 놓치면 콤보가 끊기고 점수가 오를수록 타겟이 작고 빨라지는 플로우 상태 연습입니다.",
  keywords: [
    "FPS 집중력 훈련",
    "게임 몰입 훈련",
    "에임 집중력",
    "몰입 상태 에임",
    "부드러운 트래킹",
    "리듬 에임 연습",
    "발로란트 집중력 연습",
    "집중력 트래킹",
    "플로우 상태 연습",
    "주의집중 지구력 훈련"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/flow-state",
    languages: getAlternateLanguages('/drills/fps/flow-state'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "FPS 집중력 훈련 | 플로우 상태 연습 | SkillDrills",
    description: "FPS 집중력 훈련: 곡선으로 움직이는 타겟에 조준선을 붙여 두는 무료 브라우저 트래킹 드릴. 1초 이상 놓치면 콤보가 끊기고 점수가 오를수록 타겟이 작고 빨라지는 플로우 상태 연습입니다.",
    url: "https://skilldrills.online/ko/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "FPS 집중력 훈련 | 플로우 상태 연습 | SkillDrills",
    description: "FPS 집중력 훈련: 곡선으로 움직이는 타겟에 조준선을 붙여 두는 무료 브라우저 트래킹 드릴. 1초 이상 놓치면 콤보가 끊기고 점수가 오를수록 타겟이 작고 빨라지는 플로우 상태 연습입니다.",
  },
};

export default function FlowStateKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "FPS 집중력 훈련", "item": "https://skilldrills.online/ko/drills/fps/flow-state" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "FPS 집중력 훈련",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "몰입(플로우) 이론에서 착안해 곡선 궤적 타겟을 끊김 없이 따라가며 집중 지속력을 연습하는 무료 브라우저 FPS 트래킹 드릴.",
    "genre": "FPS Training / Flow State",
    "url": "https://skilldrills.online/ko/drills/fps/flow-state",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FPS 집중력 훈련",
    "url": "https://skilldrills.online/ko/drills/fps/flow-state",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "웹 브라우저에서 실행되는 무료 플로우 상태 연습. 곡선으로 움직이는 타겟을 따라가며 집중 유지와 부드러운 트래킹을 연습합니다."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "FPS 집중력 훈련",
    "url": "https://skilldrills.online/ko/drills/fps/flow-state",
    "description": "몰입(플로우) 이론에서 착안해 곡선 궤적 타겟을 끊김 없이 따라가며 집중 지속력을 연습하는 무료 브라우저 FPS 트래킹 드릴.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Cognitive Focus"],
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
        "name": "FPS 및 게이밍에서의 '플로우 상태(몰입, Zone)'란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "심리학자 미하이 칙센트미하이가 정의한 몰입(Flow) 상태는 과제에 완전히 매료되어 자의식이나 망설임 없이 행동이 물 흐르듯 자동 수행되는 최적의 심리 상태입니다. FPS에서는 조준선의 완벽한 밀착, 무의식적인 반사, 잡념의 완전한 침묵으로 구현됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "경쟁전 중 의도적으로 플로우 상태에 도달하려면 어떻게 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "명확한 단기 목표(조준선 유지), 즉각적이고 왜곡 없는 감각 피드백, 외부 산만함 차단, 그리고 실력과 도전 과제의 균형이 필수적입니다. 매치 전 짧은 연속 트래킹 연습은 손을 풀고 주의를 화면에 모으는 루틴으로 쓸 수 있지만, 플로우 진입을 보장하지는 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "몰입 상태일 때 뇌 속에서는 어떤 변화가 일어나나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dietrich(2004)의 일시적 전두엽 기능 저하 가설(Transient Hypofrontality)에 따르면, 배외측 전전두엽 피질(DLPFC)의 활성이 일시적으로 억제됩니다. 이에 따라 자기반성적 불안이나 과도한 분석이 사라지고, 기저핵과 소뇌의 자동화된 운동 루틴이 자유롭게 발현됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "몰입에 필요한 '도전과 실력의 균형'이란?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "과제가 너무 쉬우면 지루해지고, 너무 어려우면 긴장과 불안이 유발됩니다. 칙센트미하이는 도전 수준과 실력이 비슷하게 맞을 때 몰입이 잘 일어난다고 설명했습니다. 이 드릴에서는 점수가 오를수록 레벨이 올라 타겟이 작고 빨라지며, 콤보가 쌓이면 난이도가 조금 더 올라갑니다."
        }
      },
      {
        "@type": "Question",
        "name": "왜 연속적인 곡선 트래킹이 몰입 유도에 탁월한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "단발성 플릭은 표적 사이에 인지적 휴식 틈이 발생하지만, 연속 곡선 추종은 망막 속도 오차와 손의 움직임을 쉼 없이 동기화해야 합니다(Krauzlis, 2004). 멈추는 순간이 거의 없기 때문에 주의를 계속 타겟에 두는 연습이 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "플로우 에임 훈련은 1회당 몇 분이 적당한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 정답은 없습니다. 게임 전 웜업으로는 몇 판(5~10분 정도)이면 충분하고, 길게 할 때는 15분 정도 연습한 뒤 잠깐 쉬는 식으로 나누는 것이 무난합니다. 손이 피곤하거나 정확도가 떨어지면 멈추세요."
        }
      },
      {
        "@type": "Question",
        "name": "e스포츠에서 '일시적 전두엽 기능 저하'의 실전 이점은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "이 개념은 아직 가설이며 e스포츠에서의 이점이 직접 증명된 것은 아닙니다. 다만 많은 선수들이 '생각이 줄어들고 손이 먼저 나가는' 느낌을 이야기하며, 반복 연습으로 익숙해진 동작일수록 의식적인 점검이 덜 필요하다는 점은 일반적인 운동 학습 경험과 맞습니다."
        }
      },
      {
        "@type": "Question",
        "name": "정신적 피로가 에임을 망가뜨리는 원리는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "오래 집중하면 주의를 한곳에 유지하기가 점점 어려워집니다. 그러면 타겟을 부드럽게 따라가지 못하고 뒤늦게 크게 보정하는 횟수가 늘어나, 에임이 끊기듯 덜컹거리게 됩니다. 이 드릴의 집중 이탈 횟수와 트래킹 정확도로 그 변화를 확인할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "장시간 랭크 게임 중 집중력 저하를 막는 팁은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "매치 사이 60초 눈 휴식, 복식 호흡을 통한 심박 안정화, 충분한 수분 섭취, 그리고 각 라운드 전 손목과 어깨의 미세 근육 긴장을 리셋하는 것이 핵심입니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 훈련이 학업이나 업무의 딥워크(Deep Work)에도 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네. 시각적 산만함을 억제하고 대상에 깊이 침잠하는 훈련은 코딩, 독서, 연구 등 장시간 지적 집중 작업의 지구력 향상에 도움이 될 수 있습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "플로우 상태 에임 및 몰입 훈련 방법",
    "description": "심리적 몰입 상태를 유도하고 지속적 주의력과 부드러운 베지에 곡선 트래킹을 단련하는 단계별 연습법.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "마우스 감도 설정",
        "text": "/drills 페이지 설정에서 마우스 감도를 한 번 맞추면 모든 마우스 드릴에 적용됩니다. 주력 게임과 비슷한 체감으로 맞추세요.",
        "url": "https://skilldrills.online/ko/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "전체화면 포인터 락 모드 진입",
        "text": "시작 버튼을 클릭하여 전체화면 포인터 락 상태로 진입합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/flow-state#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "유기적 베지에 곡선 궤적 선행 추종",
        "text": "타겟의 중심을 뒤쫓지 말고 곡선의 진행 방향 앞쪽을 시각적으로 선행 포착하며 매끄럽게 추적합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/flow-state#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "집중 체인을 유지하며 몰입 구역 진입",
        "text": "1초 연속으로 타겟 안에 머물 때마다 콤보가 1 오르고 점수 배수가 최대 3.0배까지 커집니다. 1초 이상 벗어나면 콤보가 초기화됩니다.",
        "url": "https://skilldrills.online/ko/drills/fps/flow-state#step-4"
      }
    ]
  };

  const copy = {
    h1Keyword: "FPS 집중력 훈련",
    h1Suffix: " - 플로우 상태 연습",
    statScore: "점수",
    statTime: "남은 시간",
    statAccuracy: "트래킹 정확도",
    statBestScore: "최고 점수",
    startTitle: "플로우 상태 에임 연습",
    startSubtitle: "포인터 락 입력 • 주의집중 지구력 • 무한 난이도",
    getReady: "준비",
    pausedTitle: "몰입 일시 정지됨",
    pausedSubtitle: "클릭하여 계속하기 (마우스 포인터 락이 다시 켜집니다)",
    stageCaption: "연속적으로 부드럽게 유영하는 베지에 곡선 타겟에 조준선을 유지하며 에임 리듬을 타세요.",
    rulesTitle: "훈련 규칙 및 점수 체계",
    rulesItems: [
      { num: "1", text: "추적 정렬 유지", highlight: "+10 PTS / 0.25초", result: "타겟 안에 있으면 시간 +0.4초/초 (최대 60초)" },
      { num: "2", text: "플로우 배수", highlight: "최대 3.0× 배수", result: "연속 집중 체인 지속" },
      { num: "3", text: "레벨 상승", highlight: "+1 레벨 / 1400 PTS", result: "적응형 베지에 궤적 가속" },
      { num: "4", text: "집중 이탈 페널티", highlight: "1.0초 이탈", result: "콤보 초기화" }
    ],
    aboutTitle: "플로우 상태(몰입) 에임 훈련 정보",
  };

  const koGuide = {
    heading: "FPS 집중력 훈련과 플로우 상태 벤치마크",
    intro: [
      "FPS 집중력 훈련은 목표를 따라가는 동안 잡념을 줄이고 일정한 에임 리듬을 유지하는 연습입니다. 이 드릴은 45초로 시작해 타겟 위에 머무는 동안 시간이 늘어나고, 점수와 콤보에 따라 난이도가 올라가면서 트래킹 정확도와 집중 지속력을 기록하므로, 플로우를 억지로 만든다고 약속하기보다 집중이 무너지는 지점을 확인하고 반복하게 해 줍니다.",
      "Dietrich(2004)의 일시적 전두엽 기능 저하 가설(Transient Hypofrontality)은 몰입 중 자의식적 통제가 줄어드는 현상을 설명하려는 가설입니다. 이 드릴이 그 상태를 만들어 준다고 보장할 수는 없지만, 끊김 없는 트래킹을 반복하며 집중이 언제 무너지는지 확인하는 데는 도움이 됩니다.",
      "타겟은 2차 베지에 곡선을 따라 움직이고, 레벨이 오를수록 반경이 줄고 곡선이 더 급해집니다. 입력은 포인터 락 마우스이며, 터치 전용 기기에서는 플레이할 수 없습니다. 설치 없이 브라우저에서 바로 시작할 수 있습니다.",
      "측정 정밀도 및 하드웨어 환경 안내: 본 훈련의 모든 상호작용은 브라우저의 performance.now() 고해상도 타이머를 통해 사용자 기기 로컬에서만 측정되며 외부 서버로 전송되지 않습니다. 브라우저 타이머는 스펙터(Spectre) 보안 완화 조치로 인해 약 1ms 단위로 양자화되며, 모니터 주사율(60Hz 약 16.7ms, 144Hz 약 6.9ms, 240Hz 약 4.1ms, Woods et al., 2015) 및 마우스 폴링레이트(125Hz 약 8ms vs 1000Hz 약 1ms)에 따른 물리적 지연 편차가 존재합니다. 5ms 미만의 차이는 측정 노이즈로 해석해야 하며, 타인과의 단순 비교보다는 동일 하드웨어 환경에서의 개인 훈련 추이를 추적하는 지표로 활용하세요."
    ],
    benchmarks: {
      title: "인지 몰입 단계 및 주의 지속력 벤치마크 티어",
      headers: ["티어 단계", "몰입 상태 차원", "생리적 지표", "인지 메커니즘", "실행 목표"],
      rows: [
        ["티어 1", "주의 경각 및 지향", "감각 게이팅 및 시선 고정", "Posner 경각 네트워크가 외부 산만 자극을 억제", "트래킹 정확도 50% 이상으로 첫 판 완주"],
        ["티어 2", "도전과 기량의 균형", "동적 속도 보정", "칙센트미하이 채널: 기량에 맞춘 타겟 속도 유지", "지루함과 불안을 방지하며 70~80%의 추적 유지율 확보"],
        ["티어 3", "중심와 활창 추종 지속", "속도 동기화 연속성", "Krauzlis 피질선조체 추종 경로가 단속 운동을 배제", "복합 베지에 곡선 상에서 85% 이상의 연속 조준선 접촉 달성"],
        ["티어 4", "일시적 전두엽 기능 저하", "DLPFC 자의식 억제", "Dietrich 가설: 의식적 자기 감시가 멈추고 운동이 자동화", "의식적 망설임 없이 30초 이상의 연속 집중 체인 유지"],
        ["티어 5", "최정상 주의집중 지구력", "인지 피로 저항력", "집행 네트워크 지구력으로 반응 지연 및 이탈 방지", "콤보 50 도달 (최대 3.0× 배수)"]
      ],
      note: "목표 수치는 SkillDrills 연습 기준이며 연구 규준이나 사용자 데이터가 아닙니다. 단계 이름은 몰입 심리학(Csikszentmihalyi, 1975, 1990), Dietrich(2004), Krauzlis(2004), Posner & Petersen(1990)의 개념을 참고했습니다."
    },
    techniques: {
      title: "인게임 몰입 상태를 유도하고 유지하는 4대 프로토콜",
      items: [
        {
          name: "접선 시선 선행 고정 (Tangent Gaze Leading)",
          desc: "타겟의 뒤를 쫓아가지 않고, 곡선이 향하는 방향의 조금 앞쪽을 바라봅니다.",
          tips: "타겟이 지나갈 경로를 투시하듯 바라보고, 주변 시야 피드백으로 미세 조작을 수행하세요."
        },
        {
          name: "자기 검열 억제 (전두엽 기능 저하 프로토콜)",
          desc: "'에임이 빗나가나?', '손이 떨리나?' 같은 마음속 독백은 집행 감시망을 깨워 자동화를 방해합니다(Dietrich, 2004).",
          tips: "궤적 변곡점에 맞춰 규칙적인 호흡을 유지하며 긴장을 풀고 이완된 몰입을 유지하세요."
        },
        {
          name: "동적 도전-실력 튜닝",
          desc: "너무 쉬우면 딴생각이 들고, 너무 어려우면 불안해집니다. SkillDrills에서는 트래킹 정확도가 70~80% 정도에 머무는 구간을 연습 목표로 권장합니다.",
          tips: "집중 이탈이 잦다면 높은 레벨을 쫓기보다 정확도를 먼저 올리세요. 콤보가 끊기면 타겟이 조금 커지고 느려집니다."
        },
        {
          name: "전완근 미세 긴장 완화 및 인체공학",
          desc: "지속적인 트래킹은 엄지 손가락 두덩과 전완 굴근에 등척성 수축을 유발하여 손 떨림을 만듭니다.",
          tips: "방향이 전환되는 타이밍마다 마우스 그립 압력을 의식적으로 리셋하여 최소한의 힘으로 쥡니다."
        }
      ]
    },
    steps: [
      "/drills 페이지 설정에서 마우스 감도를 한 번 맞춥니다. 모든 마우스 드릴에 같은 값이 적용됩니다.",
      "‘시작하기’를 눌러 전체화면 포인터 락 모드로 진입합니다.",
      "유기적인 베지에 곡선을 그리며 이동하는 타겟의 진행 방향에 시선을 집중합니다.",
      "조준선을 타겟 반경 안에 유지합니다. 1초 연속 추적마다 콤보가 오르고, 1초 이상 벗어나면 콤보가 초기화됩니다.",
      "콤보를 이어가며 점수 배수를 높이고, 판이 끝나면 정확도와 집중 이탈 횟수를 이전 기록과 비교하세요."
    ],
    audience: "발로란트, CS2, 에이펙스 레전드, 오버워치 2 등 집중력 승부가 중요한 모든 FPS 게이머 및 딥워크 집중력을 단련하려는 지적 작업자.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/ko/drills/fps/pro-smooth-pursuit", label: "스무스 트래킹 에임 연습 (활창 추적)" },
      { href: "/ko/drills/fps/anti-zigzag-movement-trainer", label: "지그재그 무빙 트래킹 (슬라이딩 추적)" },
      { href: "/ko/drills/fps/anti-strafe-jitter-duel", label: "무빙 트래킹 에임 연습 (ADAD 지터)" },
      { href: "/ko/drills/fps/instant-response", label: "FPS 클릭 반응 테스트" },
      { href: "/ko/drills/visual/reaction-speed/light-reaction", label: "반응속도 테스트" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
      <FlowStateClient copy={copy} />
      <RelatedDrills />
      <DrillGuide guide={koGuide} />
      <DrillFooter />
    </>
  );
}
