import AngleHoldClient from '@/app/drills/fps/angle-hold-trainer/AngleHoldClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "대기샷 연습 사이트 | 발로란트 프리에이밍·각 잡기 | SkillDrills",
  description: "무료 대기샷 연습 사이트: 모퉁이 각을 잡고 조준선을 머리 높이에 둔 채, 벽에서 튀어나오는 표적이 보이는 순간 클릭하세요. 발로란트·카스2 프리에이밍과 대기폭을 설치 없이 브라우저에서 연습합니다.",
  keywords: [
    "대기샷 연습",
    "대기샷 연습 사이트",
    "발로란트 대기샷 연습 사이트",
    "발로란트 대기샷 연습",
    "프리에이밍 연습",
    "프리에이밍 연습 사이트",
    "각 잡기",
    "프리에임",
    "대기 에임",
    "각 잡기 연습",
    "크로스헤어 플레이스먼트 연습",
    "피커스 어드밴티지 대처 훈련",
    "발로란트 대기 에임",
    "카스2 대기샷",
    "프리 에임 훈련",
    "모퉁이 대기 에임",
    "피킹 반응속도 훈련"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/angle-hold-trainer",
    languages: getAlternateLanguages('/drills/fps/angle-hold-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "대기샷 연습 사이트 | 발로란트 프리에이밍·각 잡기 | SkillDrills",
    description: "무료 대기샷 연습 사이트: 모퉁이 각을 잡고 조준선을 머리 높이에 둔 채, 벽에서 튀어나오는 표적이 보이는 순간 클릭하세요. 발로란트·카스2 프리에이밍과 대기폭을 설치 없이 브라우저에서 연습합니다.",
    url: "https://skilldrills.online/ko/drills/fps/angle-hold-trainer",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "대기샷 연습 사이트 | 발로란트 프리에이밍·각 잡기 | SkillDrills",
    description: "무료 대기샷 연습 사이트: 모퉁이 각을 잡고 조준선을 머리 높이에 둔 채, 벽에서 튀어나오는 표적이 보이는 순간 클릭하세요. 발로란트·카스2 프리에이밍과 대기폭을 설치 없이 브라우저에서 연습합니다.",
  },
};

export default function KoreanAngleHoldPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "대기샷 연습 - 발로란트 프리에이밍", "item": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "대기샷 연습 - 발로란트 프리에이밍",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "모퉁이 벽에서 튀어나오는 표적을 상대로 각 잡기, 크로스헤어 플레이스먼트, 대기폭을 연습하는 무료 브라우저 대기샷 연습 드릴.",
    "genre": "FPS Training / Crosshair Placement",
    "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
      "name": "대기샷 연습 - 발로란트 프리에이밍",
    "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer",
    "description": "모퉁이 벽에서 튀어나오는 표적을 상대로 각 잡기, 크로스헤어 플레이스먼트, 대기폭을 연습하는 무료 브라우저 대기샷 연습 드릴.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires HTML5 Canvas and Pointer Lock API support",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "대기샷 연습 - 발로란트 프리에이밍",
    "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer",
    "description": "모퉁이 벽에서 튀어나오는 표적을 상대로 각 잡기, 크로스헤어 플레이스먼트, 대기폭을 연습하는 무료 브라우저 대기샷 연습 드릴.",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "대기샷(대기 에임·각 잡기)이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "대기샷(대기 에임, Angle Hold)이란 적이 튀어나올 것으로 예상되는 모퉁이 벽이나 초크포인트의 헤드라인(머리 높이)에 미리 조준선을 두고 각을 잡은 채 기다리는 방어 기본기입니다. 적이 나타난 뒤 마우스를 크게 끌어 치는 플릭 에임과 달리 조준 이동을 최소화하고, 표적이 조준선에 들어오는 순간의 반응 격발에 집중합니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 대기샷 연습 사이트는 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시작하면 전체화면과 마우스 고정(Pointer Lock)이 켜지고 45초 타이머로 시작합니다. 표적이 왼쪽이나 오른쪽 벽 모서리에서 무작위 높이로 튀어나왔다 다시 들어가며, 적중 시 +100점에 콤보·레벨 배율이 곱해지고 시간이 2초 늘어납니다(최대 60초). 1400점마다 레벨이 올라 노출 시간과 표적 크기가 줄고, 레벨이 오르면 주황색 페이크 피크가 섞입니다. 빗나감, 표적이 없을 때의 조기 격발, 페이크 사격은 콤보를 초기화하며, 시간 패널티 옵션을 켜면 1초가 차감됩니다. 시간이 0이 되면 종료됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "FPS에서 피커스 어드밴티지(Peeker's Advantage, 튀어나오는 자의 이점)란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "피커스 어드밴티지는 온라인 게임의 클라이언트-서버 통신 지연(핑 및 보간 버퍼)으로 인해 발생합니다. 벽에서 튀어나오는 공격자의 움직임이 서버를 거쳐 방어자의 화면에 렌더링되기까지 핑과 서버 설정에 따라 달라지는 시간차가 발생하여, 움직이는 공격자가 가만히 서 있는 방어자를 먼저 보게 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "발로란트나 카스2에서 모퉁이를 지킬 때 조준선을 벽에서 얼마나 떼어놓아야 하나요(대기폭)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "적정 대기폭은 자신의 시각 반응속도와 적의 피킹 속도(와이드 스윙인지 숄더 피킹인지)에 비례합니다. 벽 모서리에 조준선을 딱 붙이면 시각 반응 지연 때문에 적의 머리가 조준선을 지나치므로, 적이 스스로 조준선 안으로 달려와 걸리도록 캐릭터 몇 걸음 정도 바깥쪽 공간에 대기폭을 둡니다."
        }
      },
      {
        "@type": "Question",
        "name": "대기 에임 중 상대의 페이크 피크(숄더 피크)에 낚여 성급하게 격발하는 원인은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "성급한 조기 격발은 긴장 상태에서 쏠지 말지(Go/No-Go) 판단이 앞서 나갈 때 생깁니다. 이 드릴에서는 높은 레벨에서 짧게 찌르고 들어가는 주황색 페이크 피크가 섞이며, 이를 쏘면 조기 격발로 처리됩니다. 실제 노출을 확인한 뒤 쏘는 트리거 디시플린(격발 절제력)을 반복 연습하세요."
        }
      },
      {
        "@type": "Question",
        "name": "대기 에임과 프리 에임(각 지우기/클리어링)의 차이점은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "대기 에임은 방어자가 유리한 위치를 선점하고 적이 진입하기를 기다리는 수동적 방어 기술인 반면, 프리 에임은 공격자가 모퉁이를 돌면서 적이 숨어 있을 법한 각을 하나씩 조준선으로 지워나가는(각 쪼개기) 능동적 진입 기술입니다."
        }
      },
      {
        "@type": "Question",
        "name": "넷코드상 피커스 어드밴티지의 지연 시간 계산 공식은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "피커스 어드밴티지 지연 시간 공식은 대체로 'T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp'로 정의됩니다. 양 플레이어의 편도 핑 합계에 서버 보간 지연을 더한 값이 정지해 있는 방어자가 겪게 되는 순수 시각 지연 결손폭입니다."
        }
      },
      {
        "@type": "Question",
        "name": "모니터 주사율(Hz)이 대기 에임 반응속도에 미치는 영향은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "모니터 주사율은 시각 프레임 지연을 직접 단축합니다. 60Hz 모니터의 프레임 간격은 약 16.67ms인 반면 240Hz는 4.17ms, 360Hz는 2.78ms에 불과하여, 적이 모퉁이에서 튀어나오는 첫 프레임이 화면에 표시되는 시점을 최대 프레임 간격의 차이만큼(60Hz 대비 240Hz는 약 12ms) 앞당길 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "오프 앵글(비정석 포지션)을 활용하는 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정석적인 모퉁이 대기 위치는 공격자에게 프리파이어(예측 샷)를 당할 위험이 큽니다. 일반적인 각에서 반 보 벗어난 오프 앵글에 서면 적의 사전 조준선이 빗나가게 되어 공격자에게 미세 조준(마이크로 플릭)을 강제함으로써 교전 우위를 점할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "대기 에임 훈련은 하루에 얼마나 수행해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 정답은 없지만, 랭크 게임 전 10~15분 정도 짧게 대기샷 연습을 하고 같은 기기에서 평균 반응속도와 정확도 기록을 비교하는 방식을 권장합니다. 피로가 쌓이면 기록이 흔들리므로 길게 몰아서 하기보다 짧게 자주 하는 편이 좋습니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 도구는 브라우저에서 Pointer Lock을 지원하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네. HTML5 Pointer Lock API를 통해 마우스 상대 이동량을 읽어 입력을 처리합니다. 마우스가 필요하며 터치 전용 기기에서는 시작할 수 없습니다. 클릭 시간은 performance.now() 고해상도 타이머로 측정됩니다. 보안상 브라우저 타이머는 약 1ms로 반올림되며 디스플레이 주사율 오차를 감안할 때 5ms 미만의 차이는 측정 노이즈로 간주됩니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "대기샷 연습 방법: 각 잡기와 피킹 대처",
    "description": "모퉁이 벽에서의 적 튀어나옴에 맞춘 헤드라인 정렬, 대기폭 설정, 단발 격발 훈련의 단계별 가이드.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "대기폭(벽 이격 거리) 설정",
        "text": "모퉁이 벽 끝에 조준선을 딱 붙이지 말고, 자신의 시각 반응속도에 맞춰 적절한 간격(대기폭)을 두고 거치합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "헤드라인 수평 고정",
        "text": "맵 상의 상자 모서리나 벽면 구조물을 기준으로 적 머리 높이에 조준선 높이를 수평으로 맞춰 고정합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "상대 피킹 속도 예측",
        "text": "적의 이동 속도(달려 나오는 와이드 스윙인지 천천히 엿보는 숄더 피킹인지)를 감안하여 대기폭을 미세 조정합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "조준선 진입 즉시 단발 격발",
        "text": "적 표적이 조준선 중앙에 진입하는 순간 마우스를 흔들지 말고 침착하게 원클릭으로 격발하여 불필요한 보정 지연을 제거합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/angle-hold-trainer#step-4"
      }
    ]
  };

  const angleHoldGuideKo = {
    heading: "대기샷 연습 가이드: 발로란트 프리에이밍과 각 잡기",
    intro: [
      "대기샷 연습은 적이 나올 모퉁이에 조준선을 미리 두고 각을 잡은 채, 표적이 조준선에 겹치는 순간 클릭하는 훈련입니다. 이 드릴은 벽에서 튀어나오는 표적으로 대기폭, 헤드라인, 피킹 반응을 연습하게 해 주며, 발로란트·CS2의 모퉁이 교전에 필요한 프리에이밍 기본기를 다집니다.",
      "발로란트나 카스2와 같은 온라인 멀티플레이어 환경에서는 네트워크 패킷 왕복 지연으로 인해 모퉁이를 돌아 나오는 공격자가 정지해 있는 방어자를 먼저 보게 되는 '피커스 어드밴티지(Peeker's Advantage)'가 필연적으로 발생합니다(T_advantage = RTT_peeker/2 + RTT_holder/2 + T_interp). 이러한 불리함을 상쇄하려면 벽 모서리에 조준선을 붙이지 않고 D_offset = v_peeker × T_reaction 공식에 따라 일정 간격(대기폭)을 띄워 두어야 합니다.",
      "본 훈련 도구는 브라우저의 performance.now() 시계로 반응을 측정하며 마우스 폴링률과 디스플레이 주사율에 따라 값이 달라집니다(Woods et al., 2015). 페이크 피크 구별과 격발 반응을 연습하는 과제 설계는 Fitts(1954)와 Hick(1952)의 반응 이론을 참고했습니다.",
      "측정 방식 안내: 모든 이벤트는 브라우저의 performance.now() 고해상도 시계를 통해 사용자 기기 내에서 100% 로컬로 측정됩니다. 브라우저 보안 규정(Spectre 방지)상 타이머는 약 1ms 단위로 처리되며 화면 갱신 주사율(60Hz 약 16.7ms, 144Hz 약 6.9ms, 240Hz 약 4.1ms)에 따른 오차가 존재하므로, 약 5ms 미만의 차이는 측정 환경 노이즈로 간주하고 동일 환경에서의 점진적 기록 향상에 집중하는 것이 바람직합니다."
    ],
    benchmarks: {
      title: "대기 에임 방어 반응속도 및 넷코드 기준 지표 (ms)",
      headers: ["교전 단계 / 지표", "평균 레이텐시 (ms)", "신경생리학 및 넷코드 요인", "퍼포먼스 등급 분류"],
      rows: [
        ["단순 시각 자극 격발 반응속도", "약 200 – 250 ms (연구 범위)", "시각 자극 인지 후 클릭", "예상된 자극에 대한 단순 반응 (Woods et al., 2015)"],
        ["선택적 식별 반응 지연 (페이크/숄더 피크)", "단순 반응보다 수십 ms 길어짐", "Go/No-Go 인지적 실표적 식별", "낚시성 움직임에 대한 조기 격발 자제력 (Hick, 1952)"],
        ["피커스 어드밴티지 지연 결손폭", "서버·네트워크에 따라 다름", "클라이언트-서버 RTT 왕복 지연 + 보간 버퍼", "이동 중인 공격자에게 생기는 넷코드상 시각 선행권"],
        ["대기폭 안정 구간", "참고용", "표적이 나타나기 전 조준선이 머리 높이와 모서리 앞에 유지되는지", "같은 기기에서 본인 기록 비교"]
      ],
      note: "표의 값은 인지 반응 문헌(Donders, 1868; Hick, 1952; Woods et al., 2015)의 일반적 범위를 참고한 설명용이며 게임 랭크나 사용자 통계와 무관합니다. 개인별 반응속도는 모니터 주사율과 마우스 폴링률, 컨디션에 따라 달라집니다."
    },
    techniques: {
      title: "전술적 크로스헤어 플레이스먼트 & 대기폭 기하학 원칙",
      items: [
        {
          name: "벽 모서리 이격 거리(대기폭)의 엄격한 교정",
          desc: "조준선을 모퉁이 벽면에 딱 붙여놓는 것은 가장 흔한 실수입니다. 자신의 시각 반응속도와 상대방의 피킹 속도를 고려하여 적이 스스로 조준선에 걸려들도록 통과 예상 지점에 여유 공간을 둡니다.",
          tips: "적의 머리가 조준선을 지나친 뒤에 격발된다면 대기폭을 조금 더 넓히고, 너무 일찍 쏴서 빗나간다면 좁히세요."
        },
        {
          name: "환경 기준점을 활용한 헤드라인 유지",
          desc: "맵 내 상자의 이음새, 문 손잡이, 벽면 텍스처 띠 등 머리 높이에 일치하는 배경 요소를 가이드라인 삼아 조준선 수평 높이를 고정합니다.",
          tips: "수동적으로 대기할 때 조준선이 바닥 쪽으로 슬그머니 처지는 '바닥 에임' 습관을 원천 차단하세요."
        },
        {
          name: "'쫓아가지 않고 걸리면 쏜다'의 원칙",
          desc: "대기 에임의 핵심은 적이 나타났을 때 마우스를 움직여 맞추려 하지 않고, 조준선 안으로 적의 머리가 들어오는 순간 클릭하는 것입니다. 마우스를 흔들면 추가 보정 동작이 생겨 격발이 늦어집니다.",
          tips: "자신이 배치한 조준선을 신뢰하고, 조준선 약간 앞쪽 공간에 시각적 초점을 두고 기다리세요."
        },
        {
          name: "오프 앵글(비정석 위치) 활용",
          desc: "누구나 알고 있는 정석적인 모퉁이 위치는 상대방에게 프리파이어를 당하기 쉽습니다. 일반적인 각에서 반 걸음 벗어난 변칙 위치에 서서 상대의 사전 조준을 무력화하세요.",
          tips: "오프 앵글을 잡을 때는 첫 교전 후 안전하게 숨거나 퇴각할 수 있는 엄폐 동선을 반드시 확보하세요."
        }
      ]
    },
    steps: [
      "'훈련 시작'을 클릭하여 전체화면으로 전환하고 마우스 커서를 고정합니다.",
      "적이 나타날 초크포인트를 바라보고 헤드라인에 조준선을 정렬한 뒤 적정 대기폭을 둡니다.",
      "손목에 불필요한 힘을 빼고 차분하게 모퉁이 틈을 주시합니다.",
      "표적이 조준선 면을 가르는 즉시 마우스를 흔들지 말고 단발로 신속히 클릭합니다.",
      "페이크 피크에 흔들리지 않는 자제력을 유지하며 평균 반응속도(ms)와 적중률을 분석합니다."
    ],
    audience: "발로란트, 카스2, 레인보우 식스 시즈 등 택티컬 FPS 플레이어, 사이트 방어 앵커 포지션, 정밀한 크로스헤어 플레이스먼트와 격발 절제력을 기르고자 하는 모든 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'woodworth1899'),
    related: [
      { href: "/ko/drills/fps/flick-shot-training", label: "프로 플릭샷 트레이너" },
      { href: "/ko/drills/fps/180-degree-awareness", label: "180도 화면전환 인식 훈련" },
      { href: "/ko/drills/fps/micro-correction-precision", label: "마이크로 에임 미세보정" },
      { href: "/ko/drills/visual/reaction-speed/light-reaction", label: "반응속도 테스트" }
    ]
  };

  const copyKo = {
    h1Prefix: null,
    aboutIntro: [
      "대기샷 연습은 적이 나올 위치에 조준선을 미리 두고 각을 잡는 프리에이밍 연습입니다. 이 드릴은 모퉁이에서 튀어나오는 표적에 대해 조준선을 머리 높이에 대기시키고, 표적이 조준선에 들어오는 순간 클릭하는 습관을 훈련합니다. 발로란트나 카스2처럼 사이트를 지키는 상황에서 쓰는 기본기이며, 점수는 평균 반응과 정확도, 콤보로 확인합니다.",
      "라운드마다 왼쪽이나 오른쪽 모퉁이에서 표적이 무작위 높이로 나타나 리듬을 외울 수 없습니다. 레벨이 오르면 노출 시간과 표적 크기가 줄고, 주황색 페이크 피크가 섞여 성급한 클릭에 패널티를 줍니다. 실제 게임의 네트워크 지연이나 랭크를 재현하지는 않으니 연습용 보조 도구로 쓰세요.",
    ],
    h1Keyword: "대기샷 연습",
    h1Suffix: " - 발로란트 프리에이밍·각 잡기",
    subtitle: "벽에서 튀어나오는 표적을 잡는 대기 에임 & 피킹 반응 트레이너",
    caption: "모퉁이 벽에서 튀어나오는 표적에 대해 적정 대기폭을 유지하고 즉시 사격하는 대기샷 연습 도구.",
    startTitle: "대기샷 연습",
    startSubtitle: "각 잡기・피킹 반응・트리거 디시플린 • 끝없는 레벨 진행",
    statScore: "점수",
    statTime: "남은 시간",
    statAccuracy: "정확도",
    statBestScore: "최고 점수",
    statAvgReaction: "평균 반응속도",
    statMaxCombo: "최대 콤보",
    statPeakLevel: "도달 레벨",
    getReady: "조준선을 거치하세요",
    bottomCaption: "벽 모서리에서 적정 대기폭을 두고 조준선을 고정한 뒤, 표적이 튀어나오는 순간 즉시 클릭하세요.",
    accordionRulesTitle: "훈련 규칙 및 점수 산정 방식",
    accordionAboutTitle: "대기샷 연습 상세 안내",
    overviewTitle: "대기샷(대기 에임)과 크로스헤어 플레이스먼트의 원리",
    overviewLead: "대기 에임이란 적이 출현할 위치에 미리 조준선을 대기시켜 두고, 적이 겹쳐지는 순간 사격하는 방어 기술입니다. 인간의 단순 시각 반응 시간은 약 200~250ms이지만, 쏠지 말지 구별하는 판단이 더해지면 반응이 늦어지고, 선택지가 늘수록 반응 시간은 로그 함수 형태로 증가합니다(Donders, 1868; Hick, 1952).",
    rulesItems: [
      { num: "1", text: "피킹 적중", highlight: "+100 PTS (+2초, 최대 60초)", result: "×콤보 배율" },
      { num: "2", text: "피킹 출현", highlight: "좌우 벽 모서리", result: "노출시간·크기 감소" },
      { num: "3", text: "레벨 진행", highlight: "+1 레벨 / 1400 PTS", result: "적응형 난이도" },
      { num: "4", text: "빗나감 / 조기격발 / 페이크 사격", highlight: "실패 페널티", result: "콤보 리셋 (시간 패널티 ON 시 -1초)" }
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "추천 대상 플레이어", text: "발로란트에서 사이트를 홀딩하는 앵커, 카스2에서 초크포인트를 수비하는 디펜더, 정밀한 프리 에임 반응을 극한으로 끌어올리고 싶은 게이머." },
      { iconBg: "bg-orange-600", title: "향상되는 핵심 역량", text: "벽과의 적정 대기폭 조절 능력, 트리거 디시플린(성급한 격발 자제), 튀어나옴 반응속도, 고저차 헤드라인 유지력." },
      { iconBg: "bg-purple-600", title: "페이크 피크 대처", text: "고난도 구간에서는 표적이 낚시성 페이크 스윙을 시도합니다. 불완전한 노출에서의 조기 격발을 억제하고 온전한 실노출을 확인한 뒤 쏘는 판단력을 기릅니다." }
    ],
    aboutSections: [
      {
        title: "벽에서 얼마나 떼어놓고 대기해야 하는가 (대기폭의 중요성)",
        paragraphs: [
          "모퉁이 대기 시 가장 치명적인 실수는 조준선을 벽 모서리에 딱 붙여놓고 기다리는 것입니다. 시각 정보를 보고 클릭하기까지는 반응 지연이 있으므로, 벽에 붙여두면 상대의 빠른 피킹 속도를 따라잡지 못해 머리가 지나간 뒤 허공을 쏘게 됩니다.",
          "자신의 반응속도와 상대의 이동 속도(와이드 스윙인지 천천히 각을 쪼개는지)를 계산하여 미리 통과 예상 지점에 여유 공간을 확보해 두면 상대가 자발적으로 조준선 안으로 뛰어드는 형태를 만들 수 있습니다."
        ]
      },
      {
        title: "점진적 난이도 에스컬레이션",
        paragraphs: [
          "점수가 상승함에 따라 레벨이 올라가며 표적의 노출 시간(노출 윈도우)이 지속적으로 단축되고 피킹 간격이 조밀해지며, 콤보가 쌓일수록 추가로 빨라집니다."
        ]
      },
      {
        title: "기록 및 분석되는 핵심 지표",
        paragraphs: [
          "평균 반응속도(ms)는 표적이 출현한 시점부터 클릭을 완료하기까지의 순수 응답 시간을 측정합니다. 최대 콤보 수는 조기 격발이나 놓침 없이 얼마나 견고한 방어 절제력을 유지했는지를 증명합니다."
        ]
      }
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

      <AngleHoldClient copy={copyKo} />

      <RelatedDrills />

      <DrillGuide guide={angleHoldGuideKo} />
      <DrillFooter />
    </>
  );
}
