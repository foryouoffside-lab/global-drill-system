import AntiStrafeJitterClient from '@/app/drills/fps/anti-strafe-jitter-duel/AntiStrafeJitterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "트래킹 연습 사이트 | ADAD 무빙 대응 | SkillDrills";
const DESCRIPTION = "무료 트래킹 연습 사이트. 좌우로 무작위 방향 전환하는 ADAD 무빙 표적에 조준선을 붙여 두면 0.25초마다 점수가 오르고, 1초 유지마다 콤보가 쌓입니다. 마우스와 포인터 락으로 브라우저에서 바로 플레이.";
const NAME = "트래킹 연습 - ADAD 무빙 대응";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "트래킹 연습 사이트",
    "트래킹 연습",
    "ADAD 대응",
    "ADAD 무빙",
    "무빙 트래킹",
    "반응 트래킹",
    "리액티브 트래킹",
    "근거리 트래킹 연습"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/anti-strafe-jitter-duel",
    languages: getAlternateLanguages('/drills/fps/anti-strafe-jitter-duel'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/ko/drills/fps/anti-strafe-jitter-duel",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AntiStrafeJitterKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 트레이너", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/ko/drills/fps/anti-strafe-jitter-duel" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "좌우로 무작위 방향 전환하는 표적에 조준선을 유지하는 무료 브라우저 트래킹 연습. ADAD 무빙 대응용 FPS 드릴.",
    "genre": "FPS Training / Anti-Strafe",
    "url": "https://skilldrills.online/ko/drills/fps/anti-strafe-jitter-duel",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": NAME,
    "url": "https://skilldrills.online/ko/drills/fps/anti-strafe-jitter-duel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "브라우저에서 실행되는 무료 트래킹 연습 사이트. 근거리 ADAD 무빙처럼 좌우로 방향을 바꾸는 표적을 따라갑니다."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/ko/drills/fps/anti-strafe-jitter-duel",
    "description": "좌우로 무작위 방향 전환하는 표적에 조준선을 유지하는 무료 브라우저 트래킹 연습. ADAD 무빙 대응용 FPS 드릴.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
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
        "name": "이 트래킹 연습은 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "화면 중앙 높이에서 표적 구체가 좌우로만 움직이며, 무작위 간격으로 방향과 속도를 바꿉니다. 클릭할 필요 없이 마우스로 조준선을 표적 위에 올려 두는 동안 점수가 쌓입니다. 시작 시간은 45초이고, 시간이 다 떨어지면 세션이 끝납니다."
        }
      },
      {
        "@type": "Question",
        "name": "점수와 콤보는 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "조준선이 표적 위에 있으면 0.25초마다 10점에 콤보 배율과 레벨 보정이 곱해져 들어오고, 남은 시간이 0.1초씩 늘어납니다(최대 60초). 1초 연속으로 유지할 때마다 콤보가 1 오르며, 콤보 배율은 콤보 3에서 1.1배, 콤보 50에서 최대 3.0배입니다."
        }
      },
      {
        "@type": "Question",
        "name": "표적을 놓치면 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "표적에서 1초 이상 벗어나면 콤보가 0으로 초기화됩니다. 드릴 설정에서 시간 페널티를 켠 경우에는 이때 0.6초가 추가로 차감됩니다. 기본값은 꺼져 있습니다."
        }
      },
      {
        "@type": "Question",
        "name": "난이도는 어떻게 올라가나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1400점마다 레벨이 1 오르고 상한은 없습니다. 레벨이 오를수록 표적이 작아지고, 좌우 이동 속도가 빨라지며, 방향 전환 간격이 짧아집니다. 콤보가 높을 때도 같은 방향으로 조금씩 어려워집니다."
        }
      },
      {
        "@type": "Question",
        "name": "실제 게임의 ADAD 대응에 어떻게 연결되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "이 드릴은 근거리에서 상대가 A·D를 번갈아 누르며 좌우로 흔드는 상황을 단순화한 것입니다. 발로란트, 에이펙스 레전드, 오버워치 2 같은 게임에서 방향이 바뀐 직후 조준선을 다시 붙이는 반응 트래킹을 반복 연습할 수 있습니다. 실력 향상 정도는 개인마다 다릅니다."
        }
      },
      {
        "@type": "Question",
        "name": "방향 전환 때 에임이 튀거나 뒤처지면 어떻게 하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "마우스를 너무 세게 쥐지 말고, 조준선보다 표적 자체를 보세요. 방향이 바뀔 때 크게 플릭해서 따라잡기보다 짧게 멈췄다가 표적 속도에 맞춰 다시 붙이는 쪽이 이탈 시간을 줄이기 쉽습니다."
        }
      },
      {
        "@type": "Question",
        "name": "모바일이나 터치스크린에서도 할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아니요. 마우스 이동량을 읽는 포인터 락 방식이라 마우스가 필요합니다. 터치 전용 기기에서는 시작 버튼 대신 안내 문구가 표시됩니다. 플레이 중 Esc를 누르면 드릴이 종료됩니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "ADAD 무빙 대응 트래킹 연습 방법",
    "description": "좌우로 방향을 바꾸는 표적에 조준선을 유지하는 트래킹 연습 순서.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 맞추기",
        "text": "드릴 목록 페이지의 공용 마우스 감도 설정을 평소 감각에 가깝게 맞춥니다."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "시작",
        "text": "시작 버튼을 누르면 전체화면이 되고, 카운트다운 후 포인터 락이 켜집니다."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "표적 따라가기",
        "text": "좌우로 흔들리는 표적 위에 조준선을 계속 올려 두고, 방향이 바뀌면 바로 다시 붙입니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "결과 확인",
        "text": "세션이 끝나면 추적 정확도, 이탈 시간, 최고 콤보, 도달 레벨을 확인합니다."
      }
    ]
  };

  const antiStrafeGuide = {
    heading: "트래킹 연습 사이트: ADAD 무빙 대응 가이드",
    intro: [
      "SkillDrills의 이 트래킹 연습 사이트 드릴은 좌우로 무작위 방향 전환하는 표적에 조준선을 붙여 두는 ADAD 무빙 대응 연습입니다. 클릭 없이 마우스 움직임만으로 표적 위에 머무는 시간을 겨룹니다.",
      "표적은 수평으로만 움직이고, 정해지지 않은 간격으로 방향과 속도를 바꿉니다. 일부 전환은 더 빠르게 튀어 나가므로 미리 예측하기보다 방향이 바뀐 직후 다시 따라붙는 반응 트래킹이 핵심입니다.",
      "세션은 45초로 시작하며, 표적 위에 있는 동안 1초당 0.4초씩 시간이 늘어납니다(최대 60초). 점수와 레벨에는 상한이 없습니다."
    ],
    techniques: {
      title: "ADAD 대응 트래킹 팁",
      items: [
        {
          name: "가볍게 쥐기",
          desc: "마우스를 세게 쥐면 방향 전환 때 손목이 굳어 조준선이 뚝뚝 끊기기 쉽습니다.",
          tips: "손끝과 손목이 자유롭게 움직일 정도로만 쥐고, 긴 세션 중간에는 손을 풀어 주세요."
        },
        {
          name: "표적을 보기",
          desc: "조준선이 아니라 표적 구체 중심을 보면 방향이 바뀌는 순간을 더 빨리 알아차릴 수 있습니다.",
          tips: "표적이 빨간색으로 바뀌면 조준선이 벗어난 상태입니다. 색 변화를 신호로 삼으세요."
        },
        {
          name: "오버플릭 줄이기",
          desc: "방향이 바뀔 때 크게 플릭하면 반대편으로 지나치기 쉽습니다.",
          tips: "전환을 두 번의 플릭이 아니라 하나의 감속과 재가속으로 이어 보세요."
        },
        {
          name: "1초 규칙 기억하기",
          desc: "1초 연속 유지마다 콤보가 오르고, 1초 이상 벗어나면 콤보가 사라집니다.",
          tips: "놓쳤을 때는 1초 안에 다시 붙이는 것을 목표로 하세요."
        }
      ]
    },
    steps: [
      "드릴 목록 페이지에서 공용 마우스 감도를 평소 감각에 맞춥니다.",
      "시작 버튼을 눌러 전체화면과 포인터 락을 켭니다.",
      "좌우로 흔들리는 표적 위에 조준선을 계속 올려 둡니다.",
      "방향이 바뀌면 크게 플릭하지 말고 짧게 감속한 뒤 다시 붙입니다.",
      "종료 후 추적 정확도(%), 이탈 시간, 최고 콤보, 도달 레벨로 다음 목표를 정합니다."
    ],
    audience: "발로란트, 에이펙스 레전드, 오버워치 2 등에서 근거리 ADAD 무빙을 놓치는 플레이어, 무료 트래킹 연습 사이트를 찾는 PC 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/ko/drills/fps/anti-zigzag-movement-trainer", label: "지그재그 무빙 트래킹" },
      { href: "/ko/drills/fps/vertical-air-track", label: "공중 수직 트래킹" },
      { href: "/ko/drills/fps/pro-smooth-pursuit", label: "스무스 퍼슈트 에임 트레이너" },
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭 에임 연습" },
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
      <AntiStrafeJitterClient
        copy={{
          h1Keyword: "트래킹 연습 사이트",
          h1Suffix: " - ADAD 무빙 대응",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "추적 정확도",
          statBestScore: "최고 점수",
          startTitle: NAME,
          startSubtitle: "좌우 방향 전환 표적 추적 • 무한 레벨",
          getReady: "준비",
          pausedTitle: "일시 정지됨",
          pausedSubtitle: "클릭하여 재개 — 커서 잠금이 다시 활성화됩니다",
          stageCaption: "좌우로 무작위 방향을 바꾸는 표적 위에 조준선을 계속 올려 두세요. 클릭은 필요 없습니다.",
          rulesTitle: "훈련 규칙 & 점수 체계",
          rulesItems: [
            { num: "1", text: "표적 위 유지", highlight: "0.25초마다 10점 (+0.1초)", result: "콤보 배율 적용" },
            { num: "2", text: "1초 연속 유지", highlight: "콤보 +1", result: "최대 3.0배" },
            { num: "3", text: "레벨 상승", highlight: "+1 레벨 / 1400점", result: "더 작고 빠른 표적" },
            { num: "4", text: "1초 이상 이탈", highlight: "콤보 초기화", result: "페널티 설정 시 -0.6초" }
          ],
          aboutTitle: "트래킹 연습과 ADAD 무빙 대응",
          aboutHeading: "반응 트래킹이란 무엇인가요?"
        }}
      />
      <DrillGuide guide={antiStrafeGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
