import RecoilControlClient from '@/app/drills/fps/recoil-control/RecoilControlClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "반동 연습 사이트 | 반동 제어·스프레이 컨트롤 | SkillDrills",
  description: "설치 없는 무료 반동 연습 사이트. 30발 풀오토 스프레이를 마우스로 끌어내리며 반동 제어 연습을 하고, 움직이는 표적으로 배그·발로란트·CS2용 반동 잡기 연습을 하세요.",
  keywords: [
    "반동 연습 사이트",
    "반동 제어 연습",
    "반동 잡기 연습",
    "배그 반동 연습",
    "반동 제어",
    "리코일 연습",
    "스프레이 제어",
    "FPS 반동 제어",
    "반동 제어 테스트",
    "배그 반동 제어",
    "발로란트 반동 제어",
    "CS2 반동 제어",
    "스프레이 패턴 연습",
    "수직 반동 제어",
    "집탄율 향상 훈련"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/recoil-control",
    languages: getAlternateLanguages('/drills/fps/recoil-control'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "반동 연습 사이트 | 반동 제어·스프레이 컨트롤 | SkillDrills",
    description: "설치 없는 무료 반동 연습 사이트. 30발 풀오토 스프레이를 마우스로 끌어내리며 반동 제어 연습을 하고, 움직이는 표적으로 배그·발로란트·CS2용 반동 잡기 연습을 하세요.",
    url: "https://skilldrills.online/ko/drills/fps/recoil-control",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "반동 연습 사이트 | 반동 제어·스프레이 컨트롤 | SkillDrills",
    description: "설치 없는 무료 반동 연습 사이트. 30발 풀오토 스프레이를 마우스로 끌어내리며 반동 제어 연습을 하고, 움직이는 표적으로 배그·발로란트·CS2용 반동 잡기 연습을 하세요.",
  },
};

export default function RecoilControlKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "반동 제어 연습", "item": "https://skilldrills.online/ko/drills/fps/recoil-control" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "반동 제어 연습 (Recoil Control Trainer)",
    "url": "https://skilldrills.online/ko/drills/fps/recoil-control",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "웹 브라우저에서 실행되는 무료 FPS 반동 제어 연습. 수직 마우스 드래그 및 수평 반동 상쇄 훈련 도구."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "반동 제어 연습 (Recoil Control Trainer)",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "총기 반동 패턴, 수직 마우스 드래그 속도, 수평 스프레이 상쇄를 훈련하는 무료 브라우저 FPS 반동 제어 트레이너.",
    "genre": "FPS Training / Recoil & Spray Control",
    "url": "https://skilldrills.online/ko/drills/fps/recoil-control",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "반동 제어 연습 (Recoil Control Trainer)",
    "url": "https://skilldrills.online/ko/drills/fps/recoil-control",
    "description": "총기 반동 패턴, 수직 마우스 드래그 속도, 수평 스프레이 상쇄를 훈련하는 무료 브라우저 FPS 반동 제어 트레이너.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Recoil Control"],
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
        "name": "FPS 게임에서 반동 제어(Recoil Control)란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "반동 제어는 연사 사격 시 총기가 물리적으로 위로 솟구치고 좌우로 흔들리는 탄튐 현상에 맞서, 마우스를 반대 방향과 속도로 정밀하게 조작하여 탄착군을 표적에 집중시키는 운동 제어 기술입니다."
        }
      },
      {
        "@type": "Question",
        "name": "초탄 8~10발의 수직 하향 드래그가 가장 중요한 이유는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "많은 돌격소총 패턴에서 초반 8~10발은 좌우 흔들림이 적고 거의 수직으로 상승합니다. 이 드릴의 30발 패턴도 처음 약 10발은 위로 올라가고 그 뒤부터 좌우로 흔들립니다. 교전 대부분이 초반 탄에서 결정되므로 일정한 속도의 하향 드래그를 먼저 익히는 것이 효율적입니다."
        }
      },
      {
        "@type": "Question",
        "name": "배틀그라운드, 발로란트, CS2의 반동 메커니즘 차이는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CS2는 30발 전체가 정해진 고정 기하학적 스프레이 패턴을 가집니다. 발로란트는 초반 5~6발이 고정 수직 반동이고 이후 좌우 랜덤 탄퍼짐(Bloom)이 발생합니다. 배틀그라운드는 강력한 수직 반동과 프레임별 무작위 수평 반동이 혼합되어 실시간 즉각 보정이 요구됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "일반화 운동 프로그램(GMP 이론)은 반동 제어를 어떻게 설명하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GMP 이론(Schmidt & Lee, 2011)은 빠르고 반복되는 동작이 매번 시각 피드백으로 조정되기보다 미리 학습된 힘과 타이밍의 개방 루프(Open-loop) 프로그램으로 실행된다고 설명합니다. 스프레이 패턴이 고정되어 있으면 탄착을 확인하기 전에 하향 드래그를 시작할 수 있는 이유입니다."
        }
      },
      {
        "@type": "Question",
        "name": "스프레이 트랜스퍼(다수 적 연속 사격)의 비결은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "스프레이 트랜스퍼는 사격 버튼을 떼지 않고 연사를 유지하며 다음 적으로 조준선을 전환하는 기술입니다. 현재 발사 중인 탄환 번호에 따른 총기 반동 오프셋을 머릿속으로 계산하여 다음 적의 상체에 겹쳐 놓아야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "마우스 감도와 패드 마찰력이 반동 조절에 미치는 영향은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "저감도(Low Sens)는 팔 전체를 사용하는 큰 드래그 동작을 요구하여 미세 손 떨림 오차를 줄여줍니다. 또한 동마찰력이 높은 브레이킹 패드는 급격한 감속 시 마우스가 튀는 현상을 막아줍니다."
        }
      },
      {
        "@type": "Question",
        "name": "수직 반동을 내릴 때 손목과 팔 중 무엇을 써야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "3~7발의 짧은 점사는 손가락 굽힘과 손목 하향 꺾임으로 신속히 대응합니다. 15~30발의 장기 연사는 손목 가동 범위를 넘어서므로, 팔꿈치를 축으로 전완근 전체를 아래로 매끄럽게 미끄러뜨려야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "탄퍼짐(Bloom)과 반동 패턴(Recoil Pattern)의 차이는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "반동 패턴은 총신 물리 운동에 의한 예측 가능한 규칙적 궤적입니다. 반면 탄퍼짐(블룸)은 사격 지속 시 발생하는 원뿔형 무작위 탄환 오차로, 마우스 조작으로 상쇄할 수 없고 사격을 멈춰 리셋해야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 반동 연습 사이트는 무료이고 무엇이 필요한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네. 무료이며 설치나 가입 없이 크롬, 엣지 등 데스크톱 브라우저에서 바로 실행됩니다. 마우스가 필요하고, 시작하면 포인터 락이 걸려 마우스 이동만으로 조준합니다. 포인터 락이 풀리거나 Esc를 누르면 세션이 종료됩니다. 터치 전용 기기에서는 플레이할 수 없습니다."
        }
      },
      {
        "@type": "Question",
        "name": "반동 제어 훈련은 매일 얼마나 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "경쟁전 전 10~15분 정도 웜업으로 몇 세션 하는 방식을 권장합니다. 팔이 지치면 드래그가 거칠어지므로 길게 몰아서 하기보다 짧게 자주 연습하는 편이 좋습니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 반동 잡기 연습의 스프레이 패턴과 규칙은 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AK-47 스타일의 30발 패턴 하나를 사용합니다(처음 약 10발 수직 상승, 이후 좌우 흔들림). 특정 게임의 총기 패턴을 그대로 복제한 것은 아닙니다. 좌클릭을 누르고 있으면 120ms마다(분당 500발) 발사되고, 버튼을 떼면 패턴이 처음으로 돌아갑니다. 30발을 다 쓰면 1.2초 자동 재장전됩니다. 헤드 100, 가슴 40, 팔다리 20점에 콤보와 레벨 배율이 곱해지고, 빗나가면 콤보가 초기화됩니다. 시작 시간은 45초이며 적중해도 시간이 늘지 않습니다. 1400점마다 레벨이 올라 표적 속도와 반동 배율이 커집니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "총기 반동 제어 숙달을 위한 4단계 훈련법",
    "description": "총기 스프레이 패턴 상쇄, 수직 하향 드래그 속도, 수평 조향 기술을 단계별로 훈련하는 방법.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "게임 감도 및 마우스 좌표 동기화",
        "text": "/drills 페이지의 공통 마우스 감도 슬라이더(1.00x = 30cm/360)를 맞춘 뒤 시작을 눌러 포인터 락을 활성화합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/recoil-control#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "연속 사격 개시",
        "text": "표적을 향해 마우스 좌클릭을 누르고 풀오토 연사를 개시하며 총신 상승폭을 주시합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/recoil-control#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "수직 하향 드래그 실행",
        "text": "초탄 8~10발 동안 총신 상승 속도에 맞춰 마우스를 일정한 속도로 부드럽게 아래로 당깁니다.",
        "url": "https://skilldrills.online/ko/drills/fps/recoil-control#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "수평 카운터 스티어링 적용",
        "text": "스프레이가 좌우로 흔들리기 시작하면 총기가 튀는 반대 방향으로 마우스를 미세 조향합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/recoil-control#step-4"
      }
    ]
  };

  const copyKo = {
    h1Keyword: "반동 연습 사이트",
    h1Suffix: " - 반동 제어·스프레이 컨트롤",
    statScore: "점수",
    statTime: "남은 시간",
    statAccuracy: "정확도",
    statBest: "최고 점수",
    caption: "브라우저에서 바로 하는 반동 연습 사이트입니다. 스프레이 패턴이 일정하므로 탄착을 보고 반응하기 전에 마우스를 먼저 끌어내리는 반동 제어 연습을 반복하세요.",
    rulesTitle: "훈련 규칙 및 점수 체계",
    rulesItems: [
      { num: "1", text: "헤드샷 정밀 타격", highlight: "+100 PTS (시간 보너스 없음)", result: "×콤보 배율" },
      { num: "2", text: "가슴 및 팔다리 적중", highlight: "+40 / +20 PTS", result: "콤보 스트릭 유지" },
      { num: "3", text: "레벨 상승 메커니즘", highlight: "1400점당 +1 레벨", result: "속도 및 반동 증가" },
      { num: "4", text: "탄창 사격 규율", highlight: "명중률 40% 미만 시", result: "콤보 초기화 (페널티 설정 시 -0.6초)" }
    ],
    aboutTitle: "반동 제어와 스프레이 컨트롤 정보",
    aboutIntro: [
      "반동 제어 훈련은 연사 사격 시 총기의 상향 반동과 좌우 탄튐에 맞서 마우스를 지속적으로 미세 조작하는 감각 운동 능력을 배양합니다.",
      "초탄 수직 하향 드래그와 후반 수평 탄튐 상쇄(카운터 스티어링)를 반복해 배틀그라운드, 발로란트, CS2에서 쓰는 스프레이 컨트롤 감각을 연습합니다."
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "훈련 권장 대상", text: "CS2, 발로란트, 배그, 에이펙스 등에서 연사 집탄률과 스프레이 트랜스퍼를 개선하고 싶은 게이머." },
      { iconBg: "bg-red-600", title: "초탄 8발의 결정적 중요성", text: "이 드릴의 패턴은 처음 약 10발이 수직으로 상승합니다. 이 구간을 일정하게 내리는 것이 첫 번째 목표입니다." },
      { iconBg: "bg-orange-600", title: "사격 규율 확립", text: "무의미한 난사를 지양하고, 적절한 점사와 정확한 드래그로 탄환 낭비와 페널티를 방지합니다." }
    ],
    aboutSections: [
      {
        title: "반동 보정이 에임에 미치는 결정적 영향",
        paragraphs: [
          "택티컬 슈터와 하이퍼 FPS 모두에서 초탄 타겟 포착과 지속적인 반동 보정의 조화는 필수적입니다. 상대가 무빙으로 회피하더라도 안정적인 대미지를 꽂아 넣을 수 있습니다.",
          "매끄러운 마우스 하향 동작은 총구 상승을 억제하여 중장거리 교전에서도 탄착군을 줄이는 데 도움이 됩니다."
        ]
      }
    ]
  };

  const recoilGuideKo = {
    heading: "반동 제어 연습과 FPS 스프레이 컨트롤 가이드",
    intro: [
      "SkillDrills 반동 연습 사이트는 AK-47 스타일 30발 스프레이의 수직 상승과 좌우 흔들림을 마우스 드래그로 보정하는 무료 브라우저 드릴입니다. 좌우로 움직이는 표적 하나를 상대로 좌클릭을 누른 채 연사하며(120ms 간격), 탄창마다 명중률이 40% 미만이면 콤보가 초기화됩니다. 카운터 스트라이크 2, 발로란트, 배틀그라운드, 에이펙스 레전드 플레이어가 반동 제어 연습과 배그 반동 연습 전 웜업으로 쓸 수 있습니다.",
      "반동 제어의 운동 학습 기전은 Schmidt & Lee(2011)의 일반화 운동 프로그램(GMP 이론)으로 설명할 수 있습니다. 패턴이 고정되어 있으면 탄 하나하나를 보고 반응하기보다 미리 학습한 개방 루프 동작으로 하향 드래그를 시작할 수 있습니다.",
      "이 과정은 Woodworth(1899)의 2성분 조준 모델 및 Meyer et al.(1988)의 최적 하위운동 모델과 일치합니다: 초반 탄도학적 수직 하향 드래그에 이어, 수평 탄튐과 적의 회피에 반응하는 미세 시각 추종 폐루프 보정이 결합되어 극강의 명중률이 완성됩니다.",
      "운동 정밀도는 피츠의 법칙(Fitts, 1954)과 슈미트의 충격량 변동성 모델(Schmidt et al., 1979)을 따릅니다: 마우스를 과도하게 강하게 잡아당기면 근육의 운동 변동성이 커져 오히려 집탄이 망가집니다. 그래서 세게 당기기보다 일정한 속도로 매끄럽게 당기는 연습이 중요합니다.",
      "측정 기준 및 하드웨어 지연 시간: 모든 마우스 입력 이벤트는 외부 서버 전송 없이 브라우저 내장 고해상도 performance.now() 시계를 통해 로컬 기기에서만 정밀 측정됩니다. 브라우저 타이머는 스펙터(Spectre) 보안 완화 조치로 인해 약 1ms 단위로 양자화되며, 모니터 디스플레이는 주사율에 따라 시각 자극 프레임을 양자화합니다(60Hz 기준 약 16.7ms, 144Hz 기준 약 6.9ms, 240Hz 기준 약 4.1ms) (Woods et al., 2015). 마우스 폴링레이트는 125Hz에서 약 8ms, 1000Hz에서 1ms의 지연 편차를 추가합니다. 따라서 약 5ms 미만의 오차는 정상적인 측정 노이즈로 간주되며, 타인의 세팅과 단순 비교하기보다는 동일한 하드웨어 환경에서 본인의 기록 변화를 추적하는 것이 과학적입니다."
    ],
    benchmarks: {
      title: "탄창 명중률 연습 구간 (SkillDrills 기준)",
      headers: ["평가 티어", "탄창 명중률 %", "운동 제어 메커니즘 특성", "인게임 실전 전투력"],
      rows: [
        ["티어 1 (최상위 단계)", "78% – 90%+", "완벽에 가까운 수직 하향 등속 제어; 30발 전탄에 걸친 서브픽셀 수평 카운터 상쇄로 탄환 낭비 제로.", "여러 적에 대한 연속 스프레이 전환을 중점적으로 연습하는 단계"],
        ["티어 2 (상급 단계)", "62% – 78%", "초탄 10발 헤드샷 집탄이 매우 정밀; 수평 반동 변곡점에서 신속한 재정렬로 이동 표적 안정 제압.", "중거리 스프레이가 안정적이며 스프레이 트랜스퍼 연습으로 넘어갈 수 있는 단계."],
        ["티어 3 (상급 게이머)", "48% – 62%", "견고한 수직 드래그; 12~25발 사이 수평 반동 전환 시 미세한 오버슈트 또는 보정 지연 발생.", "근~중거리 스프레이는 매우 강력하나 장거리 전탄 스프레이 트랜스퍼 시 탄환이 일부 튐."],
        ["티어 4 (중급자)", "35% – 48%", "하향 드래그 속도가 불규칙; 7발 전후에서 망설임이 발생하여 총구가 적 머리 위로 들림.", "스프레이 맞대결 시 패배 빈도가 높으며, 풀오토 대신 점사나 단발 사격에 의존하는 경향."],
        ["티어 5 (입문 / 탄튐 패닉)", "35% 미만", "전완근과 손목에 과도한 힘이 들어가 수직 드래그가 거침; 화면 전체에 탄이 산란되어 스프레이 통제 상실.", "탄창 규율 기준(40%)을 충족하지 못하고 적 히트박스 바깥으로 탄약을 대량 낭비."]
      ],
      note: "이 구간은 SkillDrills 자체 연습 기준이며 연구 기준치나 사용자 통계, 게임 랭크와 무관합니다. 명중률 = 적중 탄수 ÷ 발사 탄수."
    },
    techniques: {
      title: "완벽한 반동 제어를 위한 4대 실전 프로토콜",
      items: [
        {
          name: "개방 루프 초탄 10발 즉각 드래그",
          desc: "탄이 어디 맞는지 보고 내리지 마세요. 돌격소총 초탄 8~10발은 일정한 속도로 수직 상승하므로 사격 개시와 동시에 즉각 하향 드래그를 실행해야 합니다(Schmidt & Lee, 2011).",
          tips: "수평 보정을 시도하기 전에 일정한 수직 하향 속도를 근육에 100% 각인시키세요."
        },
        {
          name: "손목 꺾임 방지 및 팔꿈치 글라이딩",
          desc: "손목만 꺾어 내리면 12발 부근에서 손목 가동 범위 한계에 부딪혀 마우스가 패드에 걸립니다. 팔꿈치를 축으로 전완근 전체를 아래로 미끄러뜨리세요.",
          tips: "손목 중립 자세를 유지하고 팔 전체로 마우스를 부드럽게 끌어내립니다."
        },
        {
          name: "수평 반전 카운터 스티어링",
          desc: "총기 스프레이가 우측으로 휠 때 마우스는 좌측으로 조향해야 합니다. 수직 상승이 멈추고 수평 요동이 시작되는 변곡점을 파악하세요.",
          tips: "화면의 탄착군을 뒤쫓지 말고 총기 리듬에 맞춰 선제적으로 역핸들을 잡으세요."
        },
        {
          name: "근육 긴장 완화 및 소프트 그립",
          desc: "전완근을 꽉 쥐면 근육 노이즈가 급증하여 수직 떨림이 심해집니다(Schmidt et al., 1979). 가벼운 그립 압력을 유지해야 마우스가 패드 위를 매끄럽게 활주합니다.",
          tips: "스프레이가 덜컹거린다면 마우스를 쥐는 악력을 평소의 절반 수준으로 의식적으로 낮추세요."
        }
      ]
    },
    steps: [
      "/drills 페이지의 공통 마우스 감도를 맞추고 시작을 눌러 포인터 락을 활성화합니다.",
      "표적을 향해 마우스 좌클릭을 누르고 풀오토 연사를 개시합니다.",
      "초탄 8~10발 동안 총구 상승 속도에 맞춰 마우스를 일정한 속도로 부드럽게 당겨 헤드와 가슴 존에 탄환을 집중시킵니다.",
      "스프레이 전개에 맞춰 수평 역조향을 적용하며 30발 전탄 동안 조준선을 지속 밀착시킵니다.",
      "세션 종료 후 탄창 명중률과 헤드샷 비율을 분석하여 취약한 스프레이 구간을 보완하세요."
    ],
    audience: "CS2, 발로란트, 배틀그라운드, 에이펙스 레전드에서 풀오토 집탄을 연습하고 싶은 PC FPS 게이머. 반동 잡기 연습을 짧은 웜업으로 하고 싶은 분.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'schmidtLee2011', 'schmidt1979', 'woodworth1899'),
    related: [
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭 에임 연습 (Flick Shot)" },
      { href: "/ko/drills/fps/pro-smooth-pursuit", label: "스무스 트래킹 에임 연습 (활창 추적)" },
      { href: "/ko/drills/fps/micro-correction-precision", label: "마이크로 플릭 에임 연습" },
      { href: "/ko/drills/fps/anti-strafe-jitter-duel", label: "무빙 트래킹 에임 연습 (ADAD 지터)" },
      { href: "/ko/drills/fps/target-acquisition", label: "타겟 획득 에임 트레이너" }
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

      <RecoilControlClient copy={copyKo} />

      <DrillGuide guide={recoilGuideKo} />

      <RelatedDrills />

      <DrillFooter />
    </>
  );
}
