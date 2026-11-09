import VerticalAirTrackClient from '@/app/drills/fps/vertical-air-track/VerticalAirTrackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ko-KR (fps / vertical-air-track)
// PRIMARY DOMESTIC: "수직 에임 연습"          — High conversion intent (Winner)
//                   "트래킹 에임"              — Top Korean aim search query
//                   "트래킹 에임 연습"         — High-intent practice term
//                   "수직 트래킹 에임"         — Airborne tracking technical term
//                   "에임 연습 게임"           — Broad domestic gaming term
// SECONDARY / LSI:
//                   "공중 타겟 트래킹"         — Aerial pursuit specific
//                   "FPS 수직 에임"            — Genre keyword
//                   "오버워치 파라 에임 연습"   — Game specific demand
//                   "에임 트레이너 사이트"     — Platform search term
// WINNER TITLE:     수직 에임 연습 – 브라우저 무료 FPS 공중 트래킹 에임 트레이너 | SkillDrills
// ============================================================

export const metadata = {
  title: "수직 에임 연습 - 공중 트래킹 | SkillDrills",
  description: "브라우저에서 무료로 하는 수직 에임 연습. 아래에서 튀어 올라 포물선으로 떨어지는 공중 타겟을 좌클릭을 누른 채 따라가며 공중 트래킹과 Y축 마우스 제어를 훈련하세요.",
  keywords: [
    '수직 에임 연습',
    '수직 트래킹 에임',
    '공중 타겟 트래킹',
    '낙하 타겟 에임 연습',
    '공중 타겟 트래킹',
    'FPS 수직 에임',
    'Y축 에임',
    '에이펙스 수직 에임',
    '오버워치 공중 에임',
    '무료 에임 트레이너',
    '수직 트래킹 연습'
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/vertical-air-track",
    languages: getAlternateLanguages('/drills/fps/vertical-air-track'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "수직 에임 연습 - 공중 트래킹 | SkillDrills",
    description: "브라우저에서 무료로 하는 수직 에임 연습. 아래에서 튀어 올라 포물선으로 떨어지는 공중 타겟을 좌클릭을 누른 채 따라가며 공중 트래킹과 Y축 마우스 제어를 훈련하세요.",
    url: "https://skilldrills.online/ko/drills/fps/vertical-air-track",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "수직 에임 연습 - 공중 트래킹 | SkillDrills",
    description: "브라우저에서 무료로 하는 수직 에임 연습. 아래에서 튀어 올라 포물선으로 떨어지는 공중 타겟을 좌클릭을 누른 채 따라가며 공중 트래킹과 Y축 마우스 제어를 훈련하세요.",
  },
};

export default function VerticalAirTrackPageKo() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 드릴", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "수직 에임 연습", "item": "https://skilldrills.online/ko/drills/fps/vertical-air-track" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "수직 에임 연습 - 공중 트래킹",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "설치 없이 웹 브라우저에서 실행되는 무료 FPS 수직 트래킹 에임 연습 도구. 중력 가속도로 낙하하는 공중 타겟의 포물선 궤적 예측과 Y축 마우스 조작을 단련합니다.",
    "genre": "FPS Training / Vertical Tracking",
    "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "수직 에임 연습 - 공중 트래킹",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Pointer Lock API, JavaScript, HTML5 Canvas 지원 브라우저",
    "description": "설치 없이 웹 브라우저에서 실행되는 무료 FPS 수직 트래킹 에임 연습 도구. 중력 가속도로 낙하하는 공중 타겟의 포물선 궤적 예측과 Y축 마우스 조작을 단련합니다.",
    "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "수직 에임 연습 - 공중 트래킹",
    "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track",
    "description": "설치 없이 웹 브라우저에서 실행되는 무료 FPS 수직 트래킹 에임 연습 도구. 중력 가속도로 낙하하는 공중 타겟의 포물선 궤적 예측과 Y축 마우스 조작을 단련합니다.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Vertical Tracking"],
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
        "name": "FPS 게임에서 '수직 에임(Y축 에임)' 연습이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "수직 에임 연습은 마우스의 Y축(상하 방향) 이동과 시각 추적 능력을 집중적으로 훈련하는 과정입니다. 좌우 수평 트래킹에 비해 평소 연습량이 부족하기 쉬운 공중 및 낙하 궤적 조준을 전문적으로 보완합니다."
        }
      },
      {
        "@type": "Question",
        "name": "팝콘 트래킹이란 무엇이며, 이 드릴로 연습할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "팝콘 트래킹은 팝콘이 튀어 오르듯 공중으로 높이 발사된 후 중력에 의해 포물선을 그리며 떨어지는 타겟을 매끄럽게 추적하는 기술입니다. 이 드릴의 타겟도 화면 아래에서 발사되어 중력에 따라 포물선으로 떨어지므로 팝콘 트래킹 연습에 쓸 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "에이펙스 레전드(Apex Legends)에서 수직 에임이 중요한 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "에이펙스 레전드는 옥테인의 점프 패드, 호라이즌의 중력 리프트, 패스파인더의 그래플링 훅, 발키리의 제트팩 등 공중 입체 기동이 매우 빈번합니다. 수직 에임 연습은 이런 공중 기동 중인 적을 따라가는 Y축 트래킹을 따로 반복하는 데 도움이 됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "FPS 경기에서 '엘리베이터 피크'란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "로프나 집라인 승강, 혹은 고지대 낙하를 통해 수평이 아닌 수직 상하에서 돌발적으로 머리를 내미는 교전 형태를 말합니다. 본 드릴은 상하 돌발 등장에 대한 신속한 초기 정렬과 추적을 단련합니다."
        }
      },
      {
        "@type": "Question",
        "name": "수직 트래킹이 수평 트래킹보다 생체역학적으로 더 어려운 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "수평 트래킹은 팔꿈치 회전과 손목의 자연스러운 굴곡으로 편안하게 수행되지만, 수직 트래킹은 손목 신전, 손가락 굴곡, 또는 전완 전체를 마우스패드 위에 마찰시키며 당겨야 하므로 정지 마찰력의 변화가 훨씬 크기 때문입니다."
        }
      },
      {
        "@type": "Question",
        "name": "오버워치 2(Overwatch 2) 대공 트래킹에 실질적인 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "공중 트래킹 감각을 따로 연습하는 웜업으로 쓸 수 있습니다. 파라, 에코, 메르시처럼 체공하는 영웅이나 윈스턴, 둠피스트의 포물선 도약을 따라가는 상황과 비슷한 Y축 추적을 반복합니다. 실제 게임 속 히트박스나 이동을 그대로 재현하지는 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "헤일로 인피니트 같은 하이퍼 슈터에서도 유용한가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "그래플샷, 리펄서 도약, 맨 캐논 등으로 체공하는 상대를 따라가는 Y축 마우스 컨트롤을 연습하는 용도로 쓸 수 있습니다. 이 드릴은 버튼을 누른 채 연속 트래킹하는 방식이며 점사 사격은 구현하지 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "Vertical Air-Track 드릴의 점수 체계와 페널티는 어떻게 작동하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "좌클릭을 누른 채 조준선이 타겟 안에 있으면 체력(100)이 깎이고, 0이 되면 타겟이 파괴됩니다. 파괴할 때마다 100점에 고도 보너스(화면 높이 25%/50%/75% 이상에서 +25/+50/+75)를 더한 뒤 콤보와 레벨 배율을 곱하고, 시간이 +2초(최대 60초) 늘어납니다. 시작 시간은 45초입니다. 타겟을 놓쳐 화면 아래로 떨어뜨리면 콤보가 초기화되고 1초가 차감됩니다(타임아웃 설정이 꺼져 있으면 타겟이 다시 튀어 오릅니다). 조준선이 잠깐 벗어나는 것만으로는 콤보가 끊기지 않지만 트래킹 적중률이 떨어집니다. 1400점마다 레벨이 올라 중력과 회피가 강해지고 타겟이 작아지며, 5레벨부터는 타겟 2개가 동시에 나옵니다."
        }
      },
      {
        "@type": "Question",
        "name": "수직 에임 연습은 일주일에 몇 번 하는 것이 좋은가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 횟수는 없지만 회당 10~15분, 주 3~4회 정도의 짧고 꾸준한 연습을 권장합니다. 같은 기기와 감도에서 트래킹 적중률과 최고 레벨 변화를 기록해 보세요."
        }
      },
      {
        "@type": "Question",
        "name": "이 수직 에임 트레이너는 무료로 이용할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 무료이며 다운로드나 회원가입 없이 PC 브라우저에서 실행됩니다. 마우스가 필요하고 시작하면 포인터 락이 걸립니다. Esc를 누르거나 포인터 락이 풀리면 세션이 종료되며, 터치 전용 기기에서는 플레이할 수 없습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "수직 Y축 트래킹 에임 훈련법",
    "description": "공중 포물선 낙하 타겟을 예측하고 매끄러운 수직 마우스 컨트롤을 완성하는 4단계.",
        "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 일치 및 포인터 락 활성화",
        "text": "/drills 페이지의 공통 마우스 감도 슬라이더(1.00x = 30cm/360)를 맞추고 시작을 눌러 포인터 락을 활성화합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "포물선 상승 궤적 및 정점 감속 속도 일치",
        "text": "발사된 타겟의 상승 궤적을 부드럽게 추종하며, 최고 정점(Apex)에서 수직 속도가 0에 수렴하는 순간을 예측해 마우스 속도를 조절합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "중력 가속 낙하에 맞춘 매끄러운 수직 드래그",
        "text": "정점을 지나 중력으로 가속 낙하하는 타겟에 맞춰 손목과 손가락을 부드럽게 이완시키며 수직으로 흔들림 없이 마우스를 아래로 당깁니다.",
        "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "바닥 착지 전 요격 완료 및 크로스헤어 재정렬",
        "text": "타겟이 화면 아래로 떨어지기 전에 완전히 파괴하고, 여분의 반동 없이 신속하게 중앙으로 조준선을 복귀시켜 다음 발사에 대비합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/vertical-air-track#step-4"
      }
    ]
  };

  const verticalAirTrackGuide = {
    heading: "수직 에임 연습: 공중 타겟 트래킹과 낙하 궤적",
    intro: [
      "SkillDrills 수직 에임 연습은 화면 아래에서 튀어 올라 중력에 따라 포물선으로 떨어지는 공중 타겟을 좌클릭을 누른 채 따라가며 파괴하는 무료 브라우저 드릴입니다. 타겟은 공중에서 갑자기 위로 솟거나 옆으로 대시하거나 아래로 내리꽂히고, 측정값은 사격 버튼을 누른 시간 중 조준선이 타겟 위에 있던 비율(트래킹 적중률)입니다. 에이펙스 레전드와 오버워치 2에서 필요한 공중 트래킹과 수직 마우스 제어를 연습할 수 있습니다.",
      "상하(수직) 부드러운 안구 추종(Smooth Pursuit)의 신경생리학적 메커니즘은 좌우 수평 추적과 근본적으로 다릅니다. Krauzlis(2004)는 부드러운 추종 운동이 약 30°/s까지 정확하다고 정리했고, Rashbass(1961)가 보였듯 매끄러운 추적 운동은 위치 오차가 아닌 '속도 오차(망막 슬립)'에 의해 구동되므로, 딱딱 끊어 치는 플릭이 아닌 연속적인 속도 동기화가 필수적입니다.",
      "공중에 뜬 적을 명중시키려면 중력 가속도(g = 9.81 m/s²)의 물리 법칙을 직관적으로 내면화해야 합니다. Land & McLeod(2000)에 따르면 숙련된 요격자는 공의 현재 위치를 쫓기보다 도약 정점에서의 감속과 이후의 급격한 낙하 가속을 미리 예측하고 시선과 손목을 선행 연동시킵니다.",
      "타겟에도 좌우 속도와 옆 대시가 있지만 움직임의 중심은 상승·정점·낙하의 Y축입니다. 평소 좌우 트래킹 위주로 연습했다면 부족한 수직 추적을 따로 보충하는 용도로 쓰세요.",
      "측정 정확도 안내: 모든 이벤트는 브라우저의 performance.now() 고정밀 클록을 사용해 사용자 기기 내에서 밀리초 단위로 안전하게 처리됩니다. 브라우저 보안 완화책으로 타이머는 약 1ms 단위로 반올림되며, 디스플레이 주사율(60Hz 기준 약 16.7ms, 144Hz 기준 약 6.9ms, 240Hz 기준 약 4.1ms)에 따른 양자화가 발생합니다. 5ms 미만의 차이는 측정 편차로 간주하고 다른 사람의 PC 환경과 단순 비교하기보다는 동일한 기기 환경에서의 개인 성취도 향상 지표로 활용하시기 바랍니다."
    ],
    benchmarks: {
      title: "트래킹 적중률 연습 구간 (SkillDrills 기준)",
      headers: ["연습 구간", "트래킹 적중률", "주로 보이는 모습"],
      rows: [
        ["구간 1", "82% 이상", "정점 감속과 낙하 가속 전환이 매끄럽고 회피 동작에도 조준선이 거의 떨어지지 않음"],
        ["구간 2", "70% – 82%", "안정적인 Y축 트래킹. 갑작스러운 회피 직후 잠깐 흔들림"],
        ["구간 3", "56% – 70%", "예측 가능한 포물선은 잘 따라가지만 옆 대시가 섞이면 늦어짐"],
        ["구간 4", "40% – 56%", "낙하 가속 때 조준선이 타겟 뒤로 처지고, 만회하려다 지나침"],
        ["구간 5", "40% 미만", "손목과 팔에 힘이 들어가 정점 이후 타겟을 놓치는 경우가 많음"]
      ],
      note: "트래킹 적중률 = 사격 버튼을 누르고 있던 시간 중 조준선이 타겟 위에 있던 비율. 이 구간은 SkillDrills 자체 연습 기준이며 연구 기준치, 사용자 통계, 게임 랭크와 무관합니다."
    },
    techniques: {
      title: "수직 에임 정밀도를 극대화하는 신경 운동 프로토콜",
      items: [
        {
          name: "손목 신전과 손가락 관절의 독립적 미세 조절",
          desc: "마우스 상하 이동 시 팔 전체를 경직시켜 움직이지 말고 손가락을 굽히고 펴면서 세밀하게 컨트롤합니다 (Fitts, 1954). 어깨나 팔에 불필요한 힘이 들어가면 좌우로 흔들리는 와블 현상이 발생합니다.",
          tips: "손가락을 살짝 오므려 마우스를 부드럽게 아래로 당기고, 손가락을 펴면서 위로 밀어 올리세요."
        },
        {
          name: "포물선 정점(Apex)에서의 속도 감속 동기화",
          desc: "점프의 최고 정점에서는 수직 이동 속도가 일시적으로 0에 가까워집니다 (Rashbass, 1961; Land & McLeod, 2000). 타겟이 멈추기 직전 마우스 이동 속도를 의도적으로 늦추어야 합니다.",
          tips: "정점 구간은 가장 손쉬운 킬 찬스입니다. 궤적의 꼭대기 직전에 마우스 당김 속도를 늦추세요."
        },
        {
          name: "낙하 가속에 선행하는 시선 하단 앵커링",
          desc: "타겟이 낙하하기 시작하면 시선을 타겟의 밑단으로 빠르게 옮기세요. 중력 가속도로 인해 떨어지는 속도가 급격히 빨라지므로 시선이 하단을 먼저 리드해야 합니다.",
          tips: "떨어지는 적의 윗부분을 보지 마세요. 적의 바닥 실루엣에 시선을 두고 마우스를 아래로 당기세요."
        },
        {
          name: "전완 마찰 감소 및 마우스패드 글라이딩",
          desc: "책상이나 패드에 팔뚝 피부가 들러붙으면 마우스를 아래로 당길 때 턱턱 걸리는 현상이 발생합니다. 정지 마찰력이 높으면 부드러운 수직 추적이 불가능합니다.",
          tips: "암 슬리브를 착용하거나 손목을 패드의 매끄러운 부위에 위치시켜 피부 마찰 저항을 없애세요."
        }
      ]
    },
    steps: [
      "/drills 페이지의 공통 마우스 감도를 맞추고 시작을 눌러 포인터 락 활성화.",
      "화면 하단의 타겟 발사 위치 부근에 크로스헤어를 미리 배치하고 돌발 수직 사출에 대비.",
      "공중으로 솟구치는 상승 궤적을 부드럽게 추종하며 손가락 신전을 이용해 상승 속도와 일치.",
      "정점에서의 감속 타이밍에 맞춰 마우스 호흡을 가다듬고 체공 시간 동안 집중 타격.",
      "중력으로 가속 낙하하는 타겟에 맞춰 마우스를 아래로 가속하며 화면 아래로 떨어지기 전에 체력을 모두 깎아 격추."
    ],
    audience: "에이펙스 레전드, 오버워치 2, 헤일로 인피니트 등에서 공중 기동하는 적을 따라가는 수직 에임을 따로 연습하고 싶은 PC FPS 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'fitts1954', 'rashbass1961', 'land2000'),
    related: [
      { href: "/ko/drills/fps/strafe-tracking", label: "에임 트래킹 연습 (무빙 추적)" },
      { href: "/ko/drills/motor/hand-eye-coordination/aim-trainer", label: "에임 트레이너 (플릭 샷)" },
      { href: "/ko/drills/reaction-speed/reaction-game", label: "반응속도 테스트 게임" },
      { href: "/ko/drills/reaction-speed/visual-tracking-speed-test", label: "시각 추적 속도 테스트" },
      { href: "/ko/drills/motor/movement-speed/keyboard-recognition", label: "키보드 반응속도 테스트" }
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
      <VerticalAirTrackClient
        copy={{
          h1Keyword: "수직 에임 연습",
          h1Suffix: " - 공중 트래킹 트레이너",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "트래킹 적중률",
          statBestScore: "최고 점수",
          statTargetsDestroyed: "파괴 타겟",
          statMaxCombo: "최대 콤보",
          statPeakLevel: "최고 레벨",
          startTitle: "Vertical Air-Track",
          startSubtitle: "포인터 락 입력 • 무한 난이도 진행",
          startButtonText: "훈련 시작",
          playAgainText: "다시 도전",
          shareText: "결과 공유",
          exitText: "나가기",
          stageCaption: "수직 에임 연습: 포물선으로 떨어지는 공중 타겟을 좌클릭을 누른 채 따라가 체력을 깎아 파괴하세요.",
          rulesTitle: "드릴 조작법 & 점수 획득 규칙",
          aboutTitle: "수직 에임 연습(Vertical Air-Track)에 대하여",
          rulesItems: [
            {
              num: "1",
              text: "공중 타겟 추적",
              highlight: "파괴 시 +100점 / +2초 (최대 60초)",
              result: "중력 포물선 낙하 궤적을 부드럽게 추종"
            },
            {
              num: "2",
              text: "고도 보너스",
              highlight: "최대 +75점",
              result: "높은 고도에서 타겟을 요격할수록 추가 점수"
            },
            {
              num: "3",
              text: "타겟 낙하 페널티",
              highlight: "콤보 초기화 / -1초",
              result: "타겟이 화면 아래로 떨어지면 적용 (타임아웃 설정 시)"
            },
            {
              num: "4",
              text: "레벨 상승 시스템",
              highlight: "1400점마다 레벨업",
              result: "중력·회피 증가, 타겟 축소, 5레벨부터 타겟 2개"
            }
          ]
        }}
      />
      <DrillGuide guide={verticalAirTrackGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
