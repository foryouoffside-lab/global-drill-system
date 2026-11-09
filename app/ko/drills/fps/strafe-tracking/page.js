import StrafeTrackingClient from '@/app/drills/fps/strafe-tracking/StrafeTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — ko-KR (fps / strafe-tracking)
// PRIMARY (2026-11 Phase B): "무빙 에임 연습" — 트래킹 에임 연습 is owned by reaction fps-tracking-trainer,
//                   에임 트래킹 연습 by fps/pro-smooth-pursuit, 트래킹 연습 사이트 by fps/anti-strafe-jitter-duel
// SECONDARY:        "좌우 무빙 에임", "AD 무빙 트래킹" (autocomplete only; Bing 0)
// ============================================================

export const metadata = {
  title: "무빙 에임 연습 | 좌우 AD 무빙 트래킹 | SkillDrills",
  description: "무료 무빙 에임 연습: 좌우 AD 무빙으로 수시로 방향을 바꾸는 타깃에 조준선을 계속 올려 두세요. 설치 없이 브라우저에서 마우스로 바로 시작합니다.",
  keywords: [
    "무빙 에임 연습",
    "좌우 무빙 에임",
    "AD 무빙 트래킹",
    "ad무빙 에임",
    "스트레이프 트래킹",
    "방향 전환 트래킹"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/strafe-tracking",
    languages: getAlternateLanguages('/drills/fps/strafe-tracking'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "무빙 에임 연습 | 좌우 AD 무빙 트래킹 | SkillDrills",
    description: "무료 무빙 에임 연습: 좌우 AD 무빙으로 수시로 방향을 바꾸는 타깃에 조준선을 계속 올려 두세요. 설치 없이 브라우저에서 마우스로 바로 시작합니다.",
    url: "https://skilldrills.online/ko/drills/fps/strafe-tracking",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "무빙 에임 연습 | 좌우 AD 무빙 트래킹 | SkillDrills",
    description: "무료 무빙 에임 연습: 좌우 AD 무빙으로 수시로 방향을 바꾸는 타깃에 조준선을 계속 올려 두세요. 설치 없이 브라우저에서 마우스로 바로 시작합니다.",
  },
};

export default function StrafeTrackingPageKo() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
      { "@type": "ListItem", "position": 2, "name": "FPS 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "무빙 에임 연습", "item": "https://skilldrills.online/ko/drills/fps/strafe-tracking" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "무빙 에임 연습 (Strafe Tracking)",
    "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking",
    "description": "불규칙한 좌우 AD 무빙과 급격한 방향 전환에 조준선을 유지하는 브라우저 무료 무빙 에임 연습 도구.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires HTML5 Canvas and Pointer Lock API support",
    "dateModified": "2026-11-09"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "무빙 에임 연습 (Strafe Tracking)",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "불규칙한 좌우 AD 무빙과 급격한 방향 전환에 조준선을 유지하는 브라우저 무료 무빙 에임 연습 도구.",
    "genre": "FPS Training / Strafe Tracking Aim",
    "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "무빙 에임 연습 (Strafe Tracking)",
    "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking",
    "description": "불규칙한 좌우 AD 무빙과 급격한 방향 전환에 조준선을 유지하는 브라우저 무료 무빙 에임 연습 도구.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Strafe Tracking", "Tracking Aim"],
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
        "name": "무빙 에임 연습은 어떤 훈련인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "좌우로만 움직이는 캡슐형 타깃이 약 0.2~0.8초 간격으로 무작위로 방향을 바꾸고, 플레이어는 마우스로 조준선을 그 위에 계속 올려 두는 트래킹 훈련입니다. 클릭은 필요 없으며, 조준선이 타깃 위에 있는 시간만큼 점수가 쌓입니다. 에이펙스 레전드나 오버워치 2처럼 TTK가 긴 게임의 무빙 추적 연습에 맞춰져 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "적이 좌우로 방향 전환(무빙/스트레이프)할 때 에임이 빗나가는 이유는?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "인간이 움직이는 대상을 부드럽게 추종할 수 있는 각속도 한계는 약 30°/초이며, 적이 급격하게 방향을 바꿀 때 뇌가 속도와 궤적 변화를 인지하고 교정 사케드(Catch-up Saccade)를 발동하기까지 약 100~130밀리초의 불가피한 신경 지연이 발생하기 때문입니다(Rashbass, 1961; Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "플릭 에임(Flick Aim)과 트래킹 에임(Tracking Aim)의 신경과학적 차이점은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "플릭 에임은 목표 지점을 향해 한 번에 마우스를 튕겨 도달시키는 개방 루프(Open-loop) 탄도 사케드 운동(약 150~200ms)입니다. 반면 트래킹 에임은 망막 상의 이미지 미끄러짐(Retinal Slip Velocity)을 시각 피질이 실시간으로 감지하고 소뇌를 통해 손의 미세 근육 출력을 끊임없이 보정하는 폐쇄 루프(Closed-loop) 연속 추종 제어입니다(Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "트래킹 시 마우스가 적을 지나치는 '오버트래킹'을 방지하려면 어떻게 해야 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "오버트래킹은 손목과 전완근의 과도한 긴장이나 성급한 예측으로 인해 적의 속도보다 마우스를 더 빠르게 휘두를 때 발생합니다. 적의 이동 궤적을 억지로 앞지르려 하지 말고, 적의 각속도에 마우스 이동 속도를 정확히 동기화(Velocity Matching)시키는 감각을 훈련하면 크게 개선됩니다(Land & Horwood, 1995)."
        }
      },
      {
        "@type": "Question",
        "name": "마우스 감도(DPI 및 인게임 감도)는 트래킹 정확도에 어떤 영향을 미치나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "일반적으로 중감도 및 저감도(eDPI 기준 낮은 세팅)가 마우스패드 상에서 더 넓은 이동 거리를 제공하여 손의 미세한 떨림이나 근육 노이즈가 조준선에 반영되는 폭을 줄여주므로, 부드럽고 매끄러운 트래킹 궤적을 유지하는 데 유리합니다."
        }
      },
      {
        "@type": "Question",
        "name": "본 에임 트래킹 훈련 도구가 오버워치 2나 에이펙스 레전드 실전에 직접적인 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "보조 연습으로 도움이 될 수 있습니다. 본 도구는 브라우저 포인터 잠금(Pointer Lock)을 사용하며, 운영체제와 브라우저 설정에 따라 마우스 가속의 영향이 남을 수 있습니다. 게임과 비슷한 감도로 설정해 불규칙한 ADAD 무빙을 따라가는 연습을 하되, 실전 향상 폭은 개인차가 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "점수, 콤보, 시간은 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "조준선이 타깃 위에 있으면 0.25초마다 기본 50점(콤보 배율과 레벨 배율 적용)과 0.1초가 추가됩니다(남은 시간 최대 60초). 1초를 끊김 없이 따라가면 콤보가 1 오르고 배율은 최대 3.0배까지 커집니다. 타깃에서 벗어나는 순간 콤보는 0으로 초기화되며, 시간 페널티 설정을 켠 경우 1초 이탈할 때마다 0.6초가 줄어듭니다. 45초에서 시작해 시간이 0이 되면 끝납니다."
        }
      },
      {
        "@type": "Question",
        "name": "144Hz / 240Hz 고주사율 모니터가 에임 트래킹 성능에 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "영향을 줄 수 있습니다. 60Hz는 프레임 간격이 약 16.7ms, 144Hz는 약 6.9ms, 240Hz는 약 4.1ms라서 주사율이 높을수록 타깃의 방향 전환이 더 촘촘한 화면으로 보입니다. 다만 점수 차이는 장비보다 연습량과 개인차가 더 크게 좌우할 수 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "에임 트래킹 실력을 가장 빠르게 향상시키는 일일 훈련 루틴은 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "하루 15~20분 동안 힘을 뺀 상태에서 속도 동기화에 집중하는 것이 효과적입니다. 첫 5분은 조준선의 부드러움에 집중하고, 다음 10분은 방향 전환 시 오버슈트 없는 신속한 미세 교정(사케드 회복)을 의식하며 반복 훈련하세요."
        }
      },
      {
        "@type": "Question",
        "name": "이 무빙 에임 연습은 브라우저에서 무료로 이용할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 무료입니다. 별도의 프로그램 설치나 회원가입, 결제 없이 웹 브라우저에서 바로 무빙 에임 연습을 시작할 수 있습니다. 포인터 잠금을 쓰는 마우스 전용 훈련이라 PC에서 이용하세요."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "무빙 에임 연습 4단계 훈련법",
    "description": "불규칙한 좌우 무빙과 급격한 방향 전환에 조준선을 유지하는 무빙 에임 연습 절차.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 맞추고 시작",
        "text": "드릴 목록(/drills)의 설정에서 마우스 감도 배율을 평소 게임과 비슷하게 맞춘 뒤 훈련 시작을 누릅니다. 카운트다운이 끝나면 포인터 잠금이 적용됩니다.",
        "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "타깃 출현 즉시 중앙 조준선 록온",
        "text": "화면 중앙에 나타난 이동 타깃의 중심부에 신속하게 조준선을 올리고 추적을 시작합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "부드러운 각속도 일치(Velocity Matching)",
        "text": "타깃의 좌우 이동 속도와 손의 마우스 이동 속도를 정확히 일치시켜 조준선이 타깃 중심에서 미끄러지지 않도록 부드럽게 슬라이딩합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "방향 전환 시 캐치업 사케드 복구",
        "text": "타깃이 급반전하는 순간 발생하는 100ms의 인지 지연을 침착하게 받아들이고, 작은 미세 플릭으로 조준선을 즉시 중앙으로 재정렬합니다.",
        "url": "https://skilldrills.online/ko/drills/fps/strafe-tracking#step-4"
      }
    ]
  };

  const strafeGuideKo = {
    heading: "무빙 에임 연습 가이드: 좌우 AD 무빙 트래킹",
    intro: [
      "무빙 에임 연습은 AD로 좌우 이동하며 방향을 바꾸는 적에게 조준선을 계속 맞추는 FPS 훈련입니다. 에이펙스 레전드와 오버워치 2처럼 TTK가 긴 게임에서는 순간 플릭보다 좌우 무빙 에임과 지속적인 적중 시간이 교전 결과에 영향을 줍니다.",
      "인간의 안구 및 손의 운동 추적 메커니즘은 Cyril Rashbass(1961)의 '독립 이중 시각 제어 기제'와 Richard J. Krauzlis(2004)의 '부드러운 안구 추종과 사케드 통합 모델'을 통해 연구되어 왔습니다. 인간이 대상을 매끄럽게 추종할 수 있는 안구 각속도의 상한선은 약 30°/초이며, 목표가 불규칙하게 반전하는 순간 약 100~130밀리초의 불가피한 신경 신호 전달 지연이 발생합니다. 이 지연 시간을 최소화하고 뒤처진 조준선을 신속한 교정 사케드(Catch-up Saccade)로 재배치하는 능력이 트래킹 정확도에 영향을 줍니다.",
      "시각 유도형 마우스 제어에서는 Michael F. Land & David N. Horwood(1995)의 이중 주시점 모델과 C.S. Green & D. Bavelier(2003)의 액션 비디오 게임 시각 인지 이론이 적용됩니다. 시선은 단순히 타깃의 외곽선만을 쫓는 것이 아니라 이동 궤적의 미세한 예비 동작과 가감속(속도 신호)을 인지하여, 전두안야와 소뇌를 거쳐 매끄러운 근육 출력 제어로 변환됩니다.",
      "측정 방식: 매 프레임 조준선이 타깃 히트박스 안에 있는지 확인해 정확도(%)와 타깃 이탈 시간을 기록합니다. 점수와 최고 기록은 이 브라우저에만 저장되며 외부로 전송되지 않습니다.",
      "디스플레이 및 입력 장비 최적화: 일반적인 60Hz 모니터에서는 약 16.7ms의 프레임 지연이 발생하여 급격한 방향 전환 시 타깃이 뚝뚝 끊겨 보일 수 있습니다. 144Hz(약 6.9ms) 또는 240Hz(약 4.1ms) 고주사율 모니터와 폴링레이트가 높은 마우스를 사용하면 화면 갱신 간격이 짧아 타깃의 방향 전환이 더 촘촘하게 보입니다."
    ],
    benchmarks: {
      title: "무빙 에임 정확도 참고 구간 (SkillDrills 기준)",
      headers: ["평가 티어", "트래킹 정확도 %", "최대 록온 유지 시간", "해석(참고용)"],
      rows: [
        ["티어 1 (최상위)", "82% – 95%+", "5.0초 이상", "빠른 ADAD 무빙과 방향 반전에도 조준선이 표적 안에 오래 머뭅니다. 반전 직후 회복이 빠른 구간입니다."],
        ["티어 2 (상급)", "68% – 81%", "3.5초 – 4.9초", "일정 속도 추종이 매끄럽고 반전 시 뒤처짐을 작은 보정으로 복구합니다."],
        ["티어 3 (숙련)", "54% – 67%", "2.0초 – 3.4초", "일반적인 좌우 이동은 안정적으로 추적하지만 급격한 반전에서 오버트래킹이 생깁니다."],
        ["티어 4 (중급)", "38% – 53%", "1.0초 – 1.9초", "방향 전환에 반응이 늦어 조준선이 표적 뒤에 남는 일이 잦습니다."],
        ["티어 5 (입문)", "38% 미만", "1.0초 미만", "불규칙 무빙에 시선이 따라가지 못하거나 손 힘이 들어가 조준선이 흔들리는 단계입니다."]
      ],
      note: "정확도는 세션 프레임 중 조준선이 표적 히트박스 안에 있던 비율이고, 최대 록온 시간은 끊김 없이 따라간 최장 시간(초)입니다. 구간은 SkillDrills가 정한 참고용 구분이며 게임 랭크나 사용자 통계와 무관합니다."
    },
    techniques: {
      title: "무빙 에임을 다듬는 4가지 포인트",
      items: [
        {
          name: "각속도 일치(Velocity Matching)와 손목 이완",
          desc: "에임 트래킹에서 가장 핵심적인 원리는 '조준선을 따라잡으려 애쓰는 것'이 아니라 '타깃과 동일한 속도로 마우스를 계속 움직이는 것'입니다. 손에 힘이 들어가면 마우스패드와의 마찰력이 급증하여 끊김 현상이 발생합니다. 손바닥과 손가락의 긴장을 풀고 패드 위를 미끄러지듯 조작하세요(Schmidt et al., 1979).",
          tips: "타깃보다 앞서나가려 하지 말고, 타깃의 이동 속도에 마우스 조작 속도를 정확히 동기화하는 감각을 유지하세요."
        },
        {
          name: "방향 전환 순간의 캐치업 사케드(Catch-up Saccade)",
          desc: "타깃이 반전할 때 인간의 신경 전달 지연으로 인해 약 100ms 동안은 조준선이 반드시 뒤처집니다. 이 지연을 조급해하지 말고 차분하게 받아들인 후, 작고 빠른 미세 플릭(교정 사케드)으로 조준선을 신속하게 중앙으로 재배치하세요(Rashbass, 1961; Krauzlis, 2004).",
          tips: "방향 전환 시 당황해서 마우스를 크게 휘두르지 마세요. 작고 간결한 교정 플릭 후 즉시 부드러운 추종 모드로 전환합니다."
        },
        {
          name: "전완근 슬라이딩과 손목 관절의 역할 분담",
          desc: "근거리의 자잘한 좌우 레레레 무빙은 손목의 가동 범위로 신속하게 처리하고, 좌우로 길게 빠지는 대형 스트레이프는 팔꿈치를 축으로 한 전완근 슬라이딩(암 글라이드)으로 대응합니다. 관절 역할을 유기적으로 분담해야 손목 가동 범위 한계로 인한 걸림을 방지할 수 있습니다.",
          tips: "팔이 책상에 들러붙지 않도록 암슬리브(팔토시)를 착용하거나 충분히 넓은 마우스패드 공간을 확보하세요."
        },
        {
          name: "오버트래킹 억제와 섣부른 예측 자제",
          desc: "적이 곧 방향을 바꿀 것이라 지레짐작하고 마우스를 미리 멈추거나 반대로 꺾는 '예측 에임'은 적이 직진할 경우 치명적인 실수가 됩니다. 눈으로 확실한 반전 신호를 확인하고 반응하는 트리거 규율을 유지하면 추적의 일관성 향상에 도움이 될 수 있습니다(Land & Horwood, 1995).",
          tips: "'눈으로 확인한 뒤 마우스를 움직인다'는 반응 규율을 철저히 지키면 상대의 페이크 무빙에 낚이지 않습니다."
        }
      ]
    },
    steps: [
      "/drills 설정에서 마우스 감도 배율을 맞추고 훈련 시작을 누릅니다(카운트다운 후 포인터 잠금 적용).",
      "화면 중앙에 출현한 이동 타깃에 신속하게 조준선을 올리고 추적을 시작합니다.",
      "타깃의 좌우 이동 속도에 마우스 조작을 부드럽게 일치시켜 조준선을 중심에 고정합니다.",
      "타깃이 급반전할 때는 침착하게 작은 미세 플릭으로 조준선을 재배치하여 록온 지속 시간을 늘립니다.",
      "훈련 종료 후 추적 정확도(%), 최대 록온 시간, 타깃 이탈 시간을 확인하고 약점을 분석합니다."
    ],
    audience: "에이펙스 레전드, 오버워치 2, 더 파이널스, 발로란트 등에서 적의 격렬한 좌우 무빙에 흔들리지 않고 조준선을 오래 붙여 두는 무빙 에임을 연습하고 싶은 PC 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/ko/drills/fps/recoil-control", label: "리코일 연습 (Recoil Control Trainer)" },
      { href: "/ko/drills/fps/angle-hold-trainer", label: "각도 홀드 연습 (Angle Hold Trainer)" },
      { href: "/ko/drills/fps/pro-smooth-pursuit", label: "에임 트래킹 연습 (스무스 트래킹)" },
      { href: "/ko/drills/fps/anti-strafe-jitter-duel", label: "트래킹 연습 사이트 (ADAD 무빙 대응)" },
      { href: "/ko/drills/fps/micro-correction-precision", label: "마이크로 에임 연습 (Micro-Correction)" }
    ]
  };

  const copyKo = {
    h1Keyword: "무빙 에임 연습",
    h1Suffix: " - 좌우 AD 무빙 트래킹",
    caption: "무빙 에임 연습은 좌우로 불규칙하게 움직이는 적에게 조준선을 유지하는 운동 시각 제어 기술입니다. 인간의 부드러운 안구 추종은 각속도 약 30°/초가 한계이며, 급격한 방향 전환 시 약 100~130ms의 신경 인지 지연이 발생합니다(Rashbass, 1961; Krauzlis, 2004). 침착한 속도 동기화와 신속한 에임 복구 능력을 기르세요.",
    statStatus: "상태",
    statusTracking: "추적 중",
    statusComplete: "완료",
    statusStandby: "대기 중",
    statTime: "남은 시간",
    statAccuracy: "추적 정확도",
    statBest: "최고 점수",
    statScore: "점수",
    pausedTitle: "일시 정지됨",
    pausedPrompt: "화면을 클릭하여 마우스 커서를 고정하고 훈련을 재개하세요.",
    startTitle: "무빙 에임 연습",
    startSubtitle: "좌우 AD 무빙 추적 • 포인터 잠금 • 무제한 난이도 상승",
    startButtonText: "훈련 시작",
    getReady: "준비하세요",
    statLockStreak: "최대 록온 시간",
    statPeakLevel: "도달 레벨",
    statOffTarget: "타깃 이탈 시간",
    playAgainText: "다시 도전",
    shareText: "점수 공유하기",
    exitText: "종료",
    bottomCaption: "좌우로 격렬하게 무빙하는 타깃을 조준선 중심에 유지하며 방향 전환에 대한 반응 추적력을 단련하세요.",
    rulesTitle: "훈련 규칙 및 설정",
    rulesItems: [
      { num: "1", text: "타깃 위 유지", highlight: "0.25초마다 +50점 (+0.4초/초)", result: "콤보 배율 적용" },
      { num: "2", text: "1초 연속 추적", highlight: "콤보 +1, 최대 3.0배", result: "최대 배율" },
      { num: "3", text: "레벨 상승", highlight: "+1 레벨 / 1400점", result: "가변 무빙 가속" },
      { num: "4", text: "타깃 이탈", highlight: "즉시 콤보 초기화", result: "1초당 -0.6초 (페널티 ON)" }
    ],
    aboutTitle: "무빙 에임 연습 정보",
    whatIsTitle: "무빙 에임 연습이란?",
    whatIsLead: "무빙 에임(좌우 무빙 트래킹)이란 예측 불가능하게 움직이는 적에게 조준선을 일치시켜 유지하는 운동 시각 제어 기술입니다. 인간의 부드러운 안구 추종은 각속도 약 30°/초까지 정확히 기능하며, 반전 시마다 약 100~130밀리초의 불가피한 신경 전달 지연(교정 사케드)이 발생합니다(Rashbass, 1961; Krauzlis, 2004).",
    aboutIntro: [
      "본 훈련은 에이펙스 레전드, 오버워치 2, 발로란트 등에서 적의 격렬한 ADAD 좌우 무빙과 회피 기동을 놓치지 않고 데미지를 누적시키는 에임 추적력을 집중적으로 단련합니다."
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "추천 대상", text: "에이펙스 레전드나 오버워치 2에서 적의 빠른 좌우 레레레 무빙과 불규칙 회피 기동을 포착하고 싶은 경쟁전 플레이어." },
      { iconBg: "bg-fuchsia-600", title: "강화 능력치", text: "반응형 트래킹, 조준선의 부드러움(Smoothness), 무빙 예측 절제, 방향 전환 회복 속도, 전완근 슬라이딩 제어." },
      { iconBg: "bg-orange-600", title: "포인터 잠금 입력", text: "브라우저 포인터 잠금을 사용해 게임 내 조작감에 가깝게 연습합니다. 마우스 가속의 영향은 운영체제와 브라우저 설정에 따라 다를 수 있습니다." }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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

      <StrafeTrackingClient copy={copyKo} />

      <DrillGuide guide={strafeGuideKo} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
