import ProSmoothPursuitClient from '@/app/drills/fps/pro-smooth-pursuit/ProSmoothPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "에임 트래킹 연습 | 스무스 트래킹 FPS | SkillDrills",
  description: "무료 에임 트래킹 연습: 화면 위를 곡선으로 움직이는 타깃에 조준선을 계속 올려 두는 스무스 트래킹 훈련. 브라우저에서 마우스로 바로 시작하세요.",
  keywords: [
    "에임 트래킹 연습",
    "스무스 트래킹",
    "마우스 트래킹 연습",
    "에임 트래킹 잘하는법",
    "오버워치 에임 트래킹",
    "에이펙스 에임 트래킹"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit",
    languages: getAlternateLanguages('/drills/fps/pro-smooth-pursuit'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "에임 트래킹 연습 | 스무스 트래킹 FPS | SkillDrills",
    description: "무료 에임 트래킹 연습: 화면 위를 곡선으로 움직이는 타깃에 조준선을 계속 올려 두는 스무스 트래킹 훈련. 브라우저에서 마우스로 바로 시작하세요.",
    url: "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "에임 트래킹 연습 | 스무스 트래킹 FPS | SkillDrills",
    description: "무료 에임 트래킹 연습: 화면 위를 곡선으로 움직이는 타깃에 조준선을 계속 올려 두는 스무스 트래킹 훈련. 브라우저에서 마우스로 바로 시작하세요.",
  },
};

export default function ProSmoothPursuitKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "에임 트래킹 연습 - 스무스 트래킹", "item": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "에임 트래킹 연습 - 스무스 트래킹",
    "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "웹 브라우저에서 실행되는 무료 스무스 트래킹 연습. 리사주 곡선을 활용한 부드러운 추종 안구 운동 및 전완근 안정화 훈련."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "에임 트래킹 연습 - 스무스 트래킹",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "연속적인 비선형 곡선 이동에 조준선을 매끄럽게 일치시키는 무료 브라우저 FPS 스무스 트래킹 에임 훈련 도구.",
    "genre": "FPS Training / Smooth Pursuit Aim",
    "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "에임 트래킹 연습 - 스무스 트래킹",
    "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit",
    "description": "연속적인 비선형 곡선 이동에 조준선을 매끄럽게 일치시키는 무료 브라우저 FPS 스무스 트래킹 에임 훈련 도구.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Smooth Pursuit"],
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
        "name": "FPS 게임에서 스무스 퍼슈트(부드러운 추종 안구 운동) 훈련이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "스무스 트래킹 훈련은 화면 위를 리사주 곡선으로 부드럽게 움직이는 원형 표적에 마우스로 조준선을 계속 올려 두는 연습입니다. 클릭은 필요 없고, 조준선이 표적 위에 있는 시간만큼 점수가 쌓입니다."
        }
      },
      {
        "@type": "Question",
        "name": "부드러운 추종(Smooth Pursuit)과 단속 운동(Saccade)의 신경학적 차이는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rashbass(1961)의 연구에 따르면 두 운동은 서로 완전히 독립된 신경 경로를 거칩니다. 단속 운동은 위치 오차에 반응하는 개방 루프 도약이지만, 부드러운 추종은 MT/V5 영역을 통한 망막 속도 오차에 의해 실시간 폐루프 피드백으로 제어됩니다(Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "곡선 트래킹을 할 때 에임이 덜컹거리며 떨리는 이유는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "전완근이나 손목의 과도한 경직, 패드의 높은 초기 마찰력, 그리고 '조준선 점을 쳐다보는 습관' 때문입니다. 표적이 아닌 조준선을 보면 뇌가 과도한 미세 교정 신호를 발생시켜 손 떨림이 유발됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "중심와 시선 선행(Foveal Gaze Leading)이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "조준선이 아니라 움직이는 표적과 그 진행 방향을 바라보는 습관을 말합니다. Land & McLeod(2000)는 숙련자의 시선이 다음 동작보다 앞서 움직이는 경향을 보고했으며, 표적을 보고 따라가면 곡선의 변곡점에 대비하기 쉬워집니다."
        }
      },
      {
        "@type": "Question",
        "name": "에이펙스 레전드나 오버워치 2 같은 하이 TTK 게임에서 왜 필수적인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "적을 처치하기까지 수초간 지속 대미지를 넣어야 하는 게임에서는 한 발의 플릭보다 연속적인 '대미지 가동 시간(Uptime)'이 승패를 결정합니다. 공중 기동이나 슬라이딩 중에도 빔을 유지해야 교전에서 승리할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "훈련에 리사주 곡선(Lissajous curve)을 사용하는 이유는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "리사주 곡선은 수직과 수평의 조화 진동이 합성된 비선형 궤적입니다. 직선 이동과 달리 꼭짓점에서의 감속과 중심 관통 시의 가속이 끊임없이 교차하여 진정한 실시간 속도 적응력을 시험합니다."
        }
      },
      {
        "@type": "Question",
        "name": "모니터 주사율과 마우스 폴링레이트가 트래킹에 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "영향을 줄 수 있습니다. 주사율이 높을수록 프레임 간격이 짧아(60Hz 약 16.7ms, 144Hz 약 6.9ms) 곡선 움직임이 더 촘촘하게 보이고, 폴링레이트가 높으면 입력이 더 자주 갱신됩니다. 다만 점수 차이는 장비보다 연습과 개인차의 영향이 클 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "매끄러운 트래킹을 위한 최적의 마우스 그립법은?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "손바닥 뒷부분을 마우스 엉덩이에 안정적으로 지지하고 손가락에 힘을 뺀 릴랙스드 클로 또는 팜클로 그립이 좋습니다. 손목만 꺾지 말고 팔꿈치를 회전축으로 삼아 팔 전체로 부드럽게 유영하듯 조작합니다."
        }
      },
      {
        "@type": "Question",
        "name": "스무스 트래킹 훈련은 얼마나 자주 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "경쟁전 전에 10~15분 정도 워밍업 루틴으로 해 보세요. 팔이 피로하거나 손목이 아프면 쉬는 것이 좋습니다."
        }
      },
      {
        "@type": "Question",
        "name": "점수, 콤보, 시간은 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "조준선이 표적 위에 있으면 0.25초마다 기본 50점(콤보·레벨 배율 적용)과 0.1초가 추가됩니다(남은 시간 최대 60초). 1초를 끊김 없이 따라가면 콤보가 1 오르고 배율은 최대 3.0배입니다. 표적에서 1초 연속으로 벗어나면 콤보가 0으로 초기화됩니다. 45초에서 시작해 0초가 되면 끝납니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "스무스 트래킹(부드러운 추종) 훈련 방법",
    "description": "리사주 곡선 궤적을 부드럽게 추종하며 조준선을 밀착시키는 단계별 연습법.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "인게임 마우스 감도 설정",
        "text": "드릴 목록(/drills) 설정에서 마우스 감도 배율을 평소 게임과 비슷하게 맞춥니다.",
        "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "전체화면 포인터 락 모드 진입",
        "text": "훈련 시작을 누르면 전체화면으로 전환되고, 카운트다운이 끝나면 포인터 락이 걸립니다.",
        "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "표적의 진행 방향 앞단에 시선 고정",
        "text": "조준선을 직접 보지 않고 이동하는 표적 모델의 앞쪽 가장자리에 시각을 집중합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "팔꿈치 축으로 유영하듯 속도 동기화",
        "text": "손목에 힘을 빼고 팔꿈치를 축으로 삼아 곡선의 가감속에 맞춰 매끄럽게 조준선을 유지합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/pro-smooth-pursuit#step-4"
      }
    ]
  };

  const copy = {
    h1Keyword: "에임 트래킹 연습",
    h1Suffix: " - 스무스 트래킹 FPS",
    statScore: "점수",
    statTime: "남은 시간",
    statAccuracy: "트래킹 정확도",
    statBestScore: "최고 점수",
    startTitle: "에임 트래킹 연습",
    startSubtitle: "리사주 곡선 추적 • 포인터 락 • 무한 난이도",
    getReady: "준비",
    pausedTitle: "일시 정지됨",
    pausedSubtitle: "클릭하여 계속하기 (마우스 포인터 락이 다시 켜집니다)",
    stageCaption: "화면 위를 부드러운 곡선으로 진동 회주하는 타겟에 조준선을 계속 밀착시키세요.",
    rulesTitle: "훈련 규칙 및 점수 체계",
    rulesItems: [
      { num: "1", text: "표적 위 유지", highlight: "0.25초마다 +50 PTS (+0.4s/s)", result: "×콤보 배율" },
      { num: "2", text: "1초 연속 추적", highlight: "콤보 +1, 최대 3.0×", result: "최대 배율" },
      { num: "3", text: "레벨 난이도 진행", highlight: "+1 레벨 / 1400 PTS", result: "적응형 궤적" },
      { num: "4", text: "이탈 페널티", highlight: "1.0초 연속 이탈", result: "콤보 초기화" }
    ],
    aboutTitle: "에임 트래킹과 스무스 추적 정보",
  };

  const koGuide = {
    heading: "에임 트래킹 연습과 스무스 추적 성능 가이드",
    intro: [
      "에임 트래킹 연습은 움직이는 타깃에 조준선을 부드럽게 붙여 두는 스무스 트래킹 훈련입니다. 이 드릴은 리사주 곡선으로 움직이는 원형 표적을 사용해, 에이펙스·오버워치 2처럼 긴 교전에서 필요한 조준 유지 시간을 연습하고 정확도(%)로 기록합니다.",
      "안구의 부드러운 추종 운동은 Krauzlis(2004)의 연구에서 규명되었듯 중간상측두영역(MST), 전두안구영역(FEF), 시각운동피질(MT/V5)로 이루어진 피질 피드백 루프가 표적의 속도 벡터를 실시간 연산하여 안구 운동계를 지속적으로 구동합니다. 이 신경 회로는 수동적으로 반응하는 것이 아니라, 표적의 속도와 위상을 능동적으로 모델링하여 시선을 동기화합니다.",
      "Cyril Rashbass(1961)의 고전적 정신물리학 실험에 따르면, 위치 오차에 반응하는 단속성 안구 운동(Saccade)과 망막 속도 오차(Retinal Slip)에 반응하는 부드러운 추종 운동은 신경학적으로 완전히 분리된 체계입니다. 마우스를 강하게 쥐거나 움직이는 표적을 향해 무리하게 미세 플릭을 시도하면 부드러운 추종 회로가 깨지면서 불필요한 교정 사카드가 유발되어 심각한 에임 떨림과 덜컹거림이 발생합니다.",
      "본 드릴은 리사주 조화 곡선 궤적에 중심와 시선 선행 이론(Land & McLeod, 2000), 동적 주의집중 시각 확장(Green & Bavelier, 2003), 브라우저 측정 기준(Woods et al., 2015)을 참고해, 전완근 긴장을 풀고 곡선을 따라 조준선을 유지하는 연습에 초점을 맞췄습니다.",
      "측정 기준 및 하드웨어 지연 시간: 모든 트래킹 이벤트는 브라우저 내장 performance.now() 고해상도 시계를 통해 로컬 기기에서만 정밀 측정되며 외부로 점수나 데이터가 전송되지 않습니다. 브라우저 타이머는 스펙터(Spectre) 완화 조치로 약 1ms 단위로 양자화되며, 모니터 디스플레이는 주사율에 맞춰 시각 프레임을 양자화합니다(60Hz=약 16.7ms, 144Hz=약 6.9ms, 240Hz=약 4.1ms, Woods et al., 2015). 마우스 폴링레이트는 125Hz에서 약 8ms, 1000Hz에서 약 1ms의 지연 편차를 추가합니다. 따라서 약 5ms 미만의 차이는 기술적 측정 노이즈로 간주되며, 타인의 장비와 단순 비교하기보다는 동일한 하드웨어 환경에서 본인의 지연 시간 및 트래킹 개선도를 추적하십시오."
    ],
    benchmarks: {
      title: "에임 트래킹 유지율 참고 구간 (SkillDrills 기준)",
      headers: ["참고 구간", "조준 유지율(%)", "자주 보이는 모습", "연습 포인트"],
      rows: [
        ["구간 1", "85% – 95%+", "리사주 변곡점에서도 조준선이 거의 떨어지지 않음", "높은 레벨에서 유지율을 지키는 연습"],
        ["구간 2", "72% – 85%", "꼭짓점에서 표적이 느려질 때 함께 감속함", "빠른 중심 통과 구간에서 뒤처지지 않기"],
        ["구간 3", "58% – 72%", "직선에 가까운 구간은 안정적이나 방향이 꺾일 때 잠깐씩 이탈", "변곡점 직전 미리 감속하기"],
        ["구간 4", "42% – 58%", "끊어 움직이는 경향, 주기적인 오버런과 떨림", "그립 힘을 빼고 팔 전체로 움직이기"],
        ["구간 5", "42% 미만", "조준선이 표적 뒤를 쫓으며 큰 보정 플릭을 반복", "낮은 레벨에서 표적 위에 머무는 감각 익히기"]
      ],
      note: "유지율은 세션 프레임 중 조준선이 표적 히트박스 안에 있던 비율입니다. 구간은 SkillDrills가 정한 연습용 참고 구분이며 연구 기준이나 사용자 통계가 아닙니다."
    },
    techniques: {
      title: "완벽한 스무스 트래킹을 위한 4대 실전 프로토콜",
      items: [
        {
          name: "중심와 시선 선행 고정 (Foveal Gaze Leading)",
          desc: "조준선 십자선을 쳐다보지 마세요. 표적과 그 진행 방향에 시선을 두면(Land & McLeod, 2000) 속도 변화에 대비하기 쉬워집니다.",
          tips: "에임이 덜컥거리면 즉시 호흡을 내쉬고 타겟 표면 중심에 시선을 집중하세요."
        },
        {
          name: "전완근 미세 긴장 완화 및 팔꿈치 관절 분리",
          desc: "손목만 비틀어 조준하면 근육 충돌로 인해 떨림이 발생합니다. 전완근을 패드에 살짝 얹고 팔꿈치를 축으로 넓은 곡선을 그리세요.",
          tips: "마우스는 떨어뜨리지 않을 정도로만 가볍게 쥐세요."
        },
        {
          name: "리사주 곡선 감속 리듬 예측",
          desc: "곡선 운동은 양 끝단 꼭짓점에서 속도가 0에 가깝게 줄어들고 중심부를 지나갈 때 최대 속도가 됩니다(Krauzlis, 2004).",
          tips: "움직임의 조화 리듬을 체득하여 꼭짓점에 도달하기 직전 자연스럽게 감속하세요."
        },
        {
          name: "보정 단속 운동 억제 (패닉 플릭 금지)",
          desc: "조준선이 표적에서 살짝 벗어났을 때 갑자기 마우스를 크게 휘두르면 오히려 반대쪽으로 지나치기 쉽습니다. 작은 보정으로 다시 붙이세요.",
          tips: "얼음판 위에서 차를 조향하듯 부드럽게 가속하여 표적 윤곽선을 자연스럽게 재포착하세요."
        }
      ]
    },
    steps: [
      "/drills 설정에서 마우스 감도 배율을 맞추고 훈련 시작을 누릅니다(카운트다운 후 포인터 락 적용).",
      "화면 위에서 부드러운 리사주 곡선을 그리기 시작하는 타겟에 시선을 맞춥니다.",
      "팔꿈치를 축으로 힘을 빼고 마우스를 미끄러뜨리며 표적 속도와 부드럽게 동조합니다.",
      "연속 추적 시간을 늘려 콤보 배수를 최대 3.0배까지 누적하고 1400점마다 레벨을 올립니다.",
      "세션 종료 후 트래킹 정확도와 이탈 시간을 분석하여 취약한 궤적 구간을 확인합니다."
    ],
    audience: "에이펙스 레전드, 오버워치 2, 더 파이널스, 콜 오브 듀티 워존 등에서 적을 추적할 때 손이 떨리거나 탄이 새는 모든 FPS 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/ko/drills/fps/anti-zigzag-movement-trainer", label: "지그재그 무빙 트래킹 (슬라이딩 추적)" },
      { href: "/ko/drills/fps/anti-strafe-jitter-duel", label: "트래킹 연습 사이트 (ADAD 무빙 대응)" },
      { href: "/ko/drills/fps/strafe-tracking", label: "무빙 에임 연습 (좌우 AD 무빙)" },
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭 에임 연습 (Flick Shot)" },
      { href: "/ko/drills/fps/micro-correction-precision", label: "마이크로 플릭 에임 연습" },
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
      <ProSmoothPursuitClient copy={copy} />
      <RelatedDrills />
      <DrillGuide guide={koGuide} />
      <DrillFooter />
    </>
  );
}
