import MicroCorrectionClient from '@/app/drills/fps/micro-correction-precision/MicroCorrectionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "에임 미세조정 연습 | 마이크로 플릭 | SkillDrills",
  description: "에임 미세조정 연습: 큰 앵커 타겟을 맞히면 근처에 작은 마이크로 타겟이 뜹니다. 중심에 가까울수록 점수가 높고, 명중마다 +1초, 미스는 -1초. 발로란트·CS2 헤드샷 정밀도를 브라우저에서 무료로 연습하세요.",
  keywords: [
    "에임 미세조정 연습",
    "에임 미세조정",
    "발로 에임 미세 조정",
    "마이크로 플릭",
    "미세 에임",
    "FPS 헤드샷 에임 연습",
    "헤드샷 미세조정",
    "마우스 감속 제어",
    "CS2 마이크로 플릭"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/micro-correction-precision",
    languages: getAlternateLanguages('/drills/fps/micro-correction-precision'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "에임 미세조정 연습 | 마이크로 플릭 | SkillDrills",
    description: "에임 미세조정 연습: 큰 앵커 타겟을 맞히면 근처에 작은 마이크로 타겟이 뜹니다. 중심에 가까울수록 점수가 높고, 명중마다 +1초, 미스는 -1초. 발로란트·CS2 헤드샷 정밀도를 브라우저에서 무료로 연습하세요.",
    url: "https://skilldrills.online/ko/drills/fps/micro-correction-precision",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "에임 미세조정 연습 | 마이크로 플릭 | SkillDrills",
    description: "에임 미세조정 연습: 큰 앵커 타겟을 맞히면 근처에 작은 마이크로 타겟이 뜹니다. 중심에 가까울수록 점수가 높고, 명중마다 +1초, 미스는 -1초. 발로란트·CS2 헤드샷 정밀도를 브라우저에서 무료로 연습하세요.",
  },
};

export default function MicroCorrectionKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "에임 미세조정 연습 - 마이크로 플릭", "item": "https://skilldrills.online/ko/drills/fps/micro-correction-precision" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Fine_motor_skill"],
    "name": "에임 미세조정 연습 - 마이크로 플릭",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "앵커 타겟 다음에 나타나는 작은 마이크로 타겟을 정밀하게 맞히며 미세조정 시간과 정밀도를 기록하는 무료 브라우저 에임 미세조정 연습.",
    "genre": "FPS Training / Micro-Correction",
    "url": "https://skilldrills.online/ko/drills/fps/micro-correction-precision",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "에임 미세조정 연습 - 마이크로 플릭",
    "url": "https://skilldrills.online/ko/drills/fps/micro-correction-precision",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "앵커 타겟 다음에 나타나는 작은 마이크로 타겟을 정밀하게 맞히며 미세조정 시간과 정밀도를 기록하는 무료 브라우저 에임 미세조정 연습."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "에임 미세조정 연습 - 마이크로 플릭",
    "url": "https://skilldrills.online/ko/drills/fps/micro-correction-precision",
    "description": "앵커 타겟 다음에 나타나는 작은 마이크로 타겟을 정밀하게 맞히며 미세조정 시간과 정밀도를 기록하는 무료 브라우저 에임 미세조정 연습.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Micro Correction"],
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
        "name": "FPS 에임에서 '마우스 감속 제어(Deceleration Control)'란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "마우스 감속 제어는 빠른 초기 플릭 후 마우스패드의 마찰력과 손끝의 미세 하향 압력을 활용하여, 조준선이 목표를 지나치지 않고(오버슈트 없이) 헤드라인 위에 정확히 멈추도록 통제하는 운동 기술입니다."
        }
      },
      {
        "@type": "Question",
        "name": "전술 슈팅 게임에서 목표를 자꾸 지나치는(오버플릭) 주요 원인은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "초기 가속도에 비해 손목과 손가락의 길항근 브레이킹이 늦거나, 현재 사용하는 eDPI가 너무 높기 때문입니다. 목표 지점 직전에서 의도적으로 마우스를 멈추는 감속 브레이킹 훈련이 필수적입니다."
        }
      },
      {
        "@type": "Question",
        "name": "2단계 조준 모델(Two-Component Aiming Model)은 에임 미세조정을 어떻게 설명하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Woodworth(1899)와 Meyer 등(1988)이 정립한 이론으로, 인간의 목표 조준은 '거리의 대부분을 단숨에 이동하는 초기 탄도 운동'과 '착탄 직전 시각 피드백을 통한 미세 보정'의 2단계로 진행됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "발로란트·CS2에서 마이크로 플릭은 어떻게 연습하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "프리에임 위치와 실제 머리 위치 사이의 몇 픽셀 오차를 손가락과 손목의 작은 움직임으로 맞추는 연습을 반복합니다. 이 드릴에서는 앵커 타겟을 맞힌 뒤 55~90px(레벨이 오르면 최대 145px) 떨어진 곳에 나타나는 작은 마이크로 타겟으로 조준을 옮기는 동작이 그 연습입니다."
        }
      },
      {
        "@type": "Question",
        "name": "사격 전 '타겟 확인(Target Confirmation)'이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "조준선이 적의 머리 중심에 완벽히 정렬된 것을 시각적으로 확인한 후 방아쇠를 당기는 과정입니다. 확인 없는 무조건적 속사는 헛사격과 반동 낭비의 원인이 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "마이크로 플릭 훈련이 헤드샷 적중률을 실질적으로 높여주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "도움이 될 수 있습니다. 초탄 플릭이 머리에서 살짝 빗나갔을 때 조준을 다시 머리 중심으로 옮기는 보정 동작을 반복 연습하기 때문입니다. 효과는 개인과 연습량에 따라 다르며 보장되지는 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "모니터 주사율과 마우스 폴링레이트가 미세조정에 영향을 미치나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "결정적인 영향을 미칩니다. 고주사율(144Hz/240Hz)과 1000Hz 이상의 폴링레이트는 시각 지연과 입력 끊김을 극소화하여 밀리미터 단위의 정밀한 손끝 미세조정을 정확히 화면에 반영합니다."
        }
      },
      {
        "@type": "Question",
        "name": "마이크로 플릭 훈련은 얼마나 자주 하는 것이 좋나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "매일 15~20분 정도, 플릭 및 트래킹 훈련과 병행하는 것이 이상적입니다. 손가락 관절 피로가 쌓이기 전 맑은 상태에서 고집중 훈련을 수행하는 것이 좋습니다."
        }
      },
      {
        "@type": "Question",
        "name": "마우스 그립법이 손끝 미세조정에 어떤 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "팜 그립(Palm Grip)은 손가락 관절이 마우스에 밀착되어 미세조정이 제한적입니다. 반면 클로(Claw)나 핑거팁(Fingertip) 그립은 손가락 관절이 자유로워 미세한 조준 오차를 가장 빠르게 수정할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 드릴에서 빗나가거나 시간 초과 시 콤보가 리셋되는 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "속도보다 정확한 확인 사격을 연습하게 하기 위해서입니다. 앵커나 마이크로 타겟을 빗나가거나 타겟이 사라질 때까지 맞히지 못하면 콤보가 0이 되고 남은 시간이 1초 줄어듭니다. 콤보는 마이크로 타겟을 맞힐 때만 오르며, 콤보 배수는 최대 3.0배입니다."
        }
      },
      {
        "@type": "Question",
        "name": "에임 미세조정 연습은 몇 초 동안 진행되고 점수는 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "45초로 시작하며 앵커 명중과 마이크로 명중마다 각각 +1초가 추가됩니다(최대 60초). 시간이 0이 되면 종료됩니다. 앵커 명중은 10점, 마이크로 명중은 중심에 가까울수록 100~150점이며 여기에 콤보 배수와 레벨 배수가 곱해집니다. 1,400점마다 레벨이 1씩 오르고 상한은 없으며, 레벨이 오를수록 타겟이 작아지고 표시 시간(1.8초에서 시작)이 짧아집니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "에임 미세조정 및 마이크로 플릭 4단계 실전 훈련법",
    "description": "초기 플릭 감속과 손끝을 이용한 고정밀 위치 보정을 체득하기 위한 단계별 가이드.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "인게임 감도 캘리브레이션",
        "text": "실제 플레이하는 게임의 감도와 DPI를 세션 설정에서 동일하게 맞춥니다."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "앵커 타겟으로의 1차 탄도 플릭",
        "text": "화면에 크게 나타난 앵커 타겟으로 빠르게 플릭하여 클릭하고 2차 마이크로 타겟을 출현시킵니다."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "패드 마찰력을 이용한 급감속 브레이킹",
        "text": "앵커 주변에서 손바닥 하단과 손끝 하향 압력으로 마우스패드 마찰력을 가해 조준선을 단번에 급정지시킵니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "손끝 미세조정 및 착탄 확인 사격",
        "text": "손가락 관절을 미세하게 굴려 조준선을 마이크로 타겟 중심으로 빨아들이듯 밀어 넣고 정확히 클릭합니다."
      }
    ]
  };

  const microCorrectionGuide = {
    heading: "에임 미세조정 연습과 마이크로 플릭 가이드",
    subtitle: "초기 플릭 직후의 미세 조준 보정, 종단 마찰 감속 제동, 그리고 빗나가지 않는 헤드샷 정밀도를 완성하는 과학적 방법론",
    intro: [
      "에임 미세조정 연습은 초기 플릭으로 목표 근처에 도달한 뒤 조준선을 짧게 멈추고 중심을 맞추는 과정을 반복하는 훈련입니다. 이 드릴은 작은 표적의 마지막 미세조정 시간과 적중률을 기록해 발로란트·CS2에서 오버플릭과 늦은 보정을 줄이는 데 집중합니다.",
      "목표 지향적 고속 운동을 지배하는 이론적 기틀은 Robert S. Woodworth(1899)의 기념비적인 2원 모델에서 확립되었습니다. 즉, 사지를 시각 자극 방향으로 강하게 가속하는 초기 개루프(Open-loop) 탄도 임펄스와, 지속적인 감각 피드백에 의해 안내되는 후속 폐루프(Closed-loop) 제어 단계입니다. 이러한 속도-정확도 상충 관계는 Paul M. Fitts(1954)의 피츠 법칙(Fitts's Law)으로 수학적 공식화되었으며, 운동 시간은 표적 거리와 표적 폭의 비율에 따라 로그 함수적으로 증가합니다(ID = log2(2D / W)).",
      "이후 David E. Meyer 등(1988)의 확률적 최적화 하위운동 모델(Stochastic Optimized Submovement Model)은 인간의 운동 제어 체계가 과도한 관성 오버슈트를 방지하기 위해 1차 주운동을 표적 경계의 직전이나 근방에 안착시킨 후, 연속되는 신속한 교정 하위운동(Submovements)을 통해 좌표 오차를 즉각 해소하도록 프로그래밍되어 있음을 증명했습니다.",
      "시야가 목표에 완전히 고정되는 종단 주시 단계에서, 인간의 안구운동계는 미세 도약(Microsaccades; 1도 미만의 무의식적 미세 안구 도약)을 생성하여 망막의 신경 표상을 갱신하고 중심와를 고주파수 시각 표적 정중앙에 정렬합니다(Rolfs, 2009; Martinez-Conde et al., 2004). 본 훈련은 포인터 락 입력과 performance.now() 디지털 정밀 시계(Woods et al., 2015)를 결합하여 에임 감속 시의 미세 진동과 오버플릭을 줄이는 연습을 돕습니다.",
      "측정 기준 및 하드웨어 지연 투명성: 모든 조준 및 타격 이벤트는 브라우저 내부의 performance.now() 고해상도 시계를 통해 사용자 기기 내에서 즉각 타임스탬프 처리되며 외부로 점수가 전송되지 않습니다. 다만 브라우저의 Spectre 보안 완화 조치로 타이머가 약 1ms 단위로 양자화되며, 모니터 주사율에 따른 화면 갱신 주기(60Hz 약 16.7ms, 144Hz 6.9ms, 240Hz 4.1ms; Woods et al., 2015)와 마우스 폴링레이트(125Hz 8ms 대 1000Hz 1ms)가 물리적 변수로 작용합니다. 따라서 5ms 미만의 미세 차이는 측정 노이즈로 간주하고, 서로 다른 장비 간 단순 비교보다는 동일한 장비 환경에서 본인의 기록 변화를 추적하는 지표로 활용하시기 바랍니다."
    ],
    benchmarks: {
      title: "SkillDrills 미세조정 연습 구간 (참고용)",
      headers: ["연습 구간", "평균 미세보정 시간", "마이크로 적중률", "연습 포인트"],
      rows: [
        ["구간 1", "140 ms 미만", "95% – 99%+", "플릭과 미세조정이 하나로 이어지는 단계"],
        ["구간 2", "140 – 190 ms", "88% – 95%", "감속 제어가 안정된 단계"],
        ["구간 3", "190 – 250 ms", "80% – 88%", "손목 긴장으로 가끔 오버슈트가 나는 단계"],
        ["구간 4", "250 – 340 ms", "70% – 80%", "목표를 지나친 뒤 되돌리는 '이중 보정'이 잦은 단계"],
        ["구간 5", "340 ms 이상", "70% 미만", "팔 전체로만 미세조정을 시도하는 처음 단계"]
      ],
      note: "SkillDrills 연습용 참고 구간이며 연구 규범, 게임 랭크, 사용자 데이터가 아닙니다. 평균 미세보정 시간은 앵커 타겟 적중 순간부터 마이크로 타겟 명중까지의 시간입니다."
    },
    techniques: {
      title: "마이크로 플릭 정확도를 극대화하는 생체역학 테크닉",
      items: [
        {
          name: "손가락 관절을 이용한 미세 스트로크 (핑거팁 제어)",
          desc: "수 픽셀의 오차를 팔이나 손목으로 무리하게 맞추지 않고, 마우스를 쥔 엄지·약지·새끼손가락의 관절 굴신으로 마우스를 미세하게 슬라이딩합니다.",
          tips: "손바닥 하단을 마우스패드에 가볍게 접촉시켜 기준점을 만들고 손끝을 자유롭게 가동하세요."
        },
        {
          name: "마우스패드 마찰력을 활용한 능동적 브레이킹",
          desc: "앵커 타겟 착탄 직전 손바닥이나 새끼손가락 쪽에 순간적인 하향 압력을 주어 마우스 피트와 패드의 마찰력을 극대화하여 관성을 단숨에 차단합니다.",
          tips: "과도하게 힘을 주면 다음 미세조정 시 손이 굳으므로 0.1초만 순간적으로 제동하고 힘을 빼세요."
        },
        {
          name: "착탄 직전 시각적 확신 (타겟 컨퍼메이션)",
          desc: "조준선이 마이크로 타겟 중심에 확실히 들어간 것을 시각적으로 인지한 후 클릭하는 사격 규율을 체득합니다(Rolfs, 2009).",
          tips: "도착하기도 전에 반사적으로 클릭하는 조급한 습관을 의식적으로 교정하세요."
        },
        {
          name: "앵커-마이크로 간의 일정한 리듬 확립",
          desc: "'탁-탁' 하는 두 박자의 리듬을 몸에 각인시켜 극한의 교전 긴장 속에서도 근육 동결(프리즈)을 방지합니다.",
          tips: "일정한 박자감을 유지할 때 근육 기억이 가장 효율적으로 활성화됩니다."
        }
      ]
    },
    steps: [
      "인게임 감도와 DPI를 맞추고 포인터 락을 활성화하여 훈련을 시작합니다.",
      "화면에 크게 나타나는 앵커 타겟으로 빠르게 플릭하여 클릭합니다.",
      "앵커 격파와 동시에 마우스를 급감속시키고, 바로 옆에 나타나는 작은 마이크로 타겟으로 손끝을 미세하게 조정합니다.",
      "중심점에 정확히 정렬된 것을 확인한 후 클릭하여 고득점 보너스를 챙기세요.",
      "미스로 인한 콤보 단절을 주의하며 레벨 상승에 따른 극소형 타겟 정복에 도전하세요."
    ],
    audience: "발로란트, 카운터스트라이크 2, 레인보우 식스 시즈, 에이펙스 레전드에서 헤드샷 적중률을 극적으로 높이고자 하는 모든 FPS 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'martinezConde2004', 'rolfs2009', 'woodworth1899'),
    related: [
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭 에임 연습" },
      { href: "/ko/drills/fps/target-acquisition", label: "타겟 획득 에임 연습" },
      { href: "/ko/drills/fps/target-prioritization", label: "타겟 우선순위 에임 연습" },
      { href: "/ko/drills/fps/target-switching-swarm", label: "타겟 스위칭 에임 연습" }
    ]
  };

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <MicroCorrectionClient
        copy={{
          h1Keyword: "에임 미세조정 연습",
          h1Suffix: " - 마이크로 플릭 트레이너",
          subtitle: "에임 미세조정 연습: 앵커 타겟을 맞힌 뒤 바로 옆에 뜨는 작은 마이크로 타겟으로 조준을 옮겨 중심을 맞히세요. 발로란트·CS2 헤드샷 정밀도 연습용입니다.",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "정확도",
          statBestScore: "최고 점수",
          statAvgCorrection: "평균 미세보정",
          statMaxCombo: "최대 콤보",
          statPeakLevel: "최고 레벨",
          startTitle: "에임 미세조정 연습",
          startSubtitle: "입력 캘리브레이션 • 무한 레벨 난이도 진행",
          getReady: "준비",
          toggleFlash: "미스 플래시 켜기/끄기",
          toggleSound: "효과음 켜기/끄기",
          stageCaption: "앵커 타겟을 클릭한 후 즉시 조준선을 미세 조정하여 작은 마이크로 타겟을 정밀 타격하세요.",
          rulesTitle: "훈련 규칙 및 점수 산정 방식",
          rulesItems: [
            { num: "1", text: "앵커 타겟 명중", highlight: "+10점 (+1.0초)", result: "마이크로 해제" },
            { num: "2", text: "마이크로 명중", highlight: "100~150점 (+1.0초)", result: "정밀도 × 콤보 × 레벨" },
            { num: "3", text: "레벨 상승", highlight: "+1 레벨 / 1,400점", result: "가변 축소 난이도" },
            { num: "4", text: "미스 / 초과", highlight: "페널티", result: "콤보 리셋 (-1.0초)" }
          ],
          aboutTitle: "에임 미세조정 연습 소개",
          aboutHeading: "마이크로 플릭(에임 미세조정)이란?",
          aboutText: "대부분의 조준 운동은 하나의 동작이 아닌 두 단계로 이루어집니다. 빠른 탄도학적 초기 플릭과 착탄 직전의 감속 및 미세 위치 보정입니다(Woodworth, 1899; Meyer et al., 1988). 이 드릴은 실제 헤드샷 승패를 판가름하는 두 번째 단계, 즉 미세조정 능력을 극대화합니다."
        }}
      />

      <DrillGuide guide={microCorrectionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
