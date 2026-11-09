import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "지그재그 무빙 트래킹 | 회피 무빙 대응 | SkillDrills";
const DESCRIPTION = "무료 지그재그 무빙 트래킹 드릴. 불규칙하게 방향을 꺾는 표적에 조준선을 올려 체력 바를 깎아 처치하세요. 너무 오래 놓치면 표적이 사라지고 콤보가 끊깁니다. 마우스와 포인터 락으로 브라우저에서 플레이.";
const NAME = "지그재그 무빙 트래킹";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "지그재그 무빙 트래킹",
    "지그재그 무빙",
    "회피 무빙 대응",
    "무빙 트래킹",
    "리액티브 트래킹",
    "방향 전환 트래킹"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/ko/drills/fps/anti-zigzag-movement-trainer",
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

export default function AntiZigzagKoPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "FPS 에임 훈련", "item": "https://skilldrills.online/ko/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/ko/drills/fps/anti-zigzag-movement-trainer" }
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
    "description": "불규칙하게 방향을 꺾는 표적에 조준선을 유지해 처치하는 무료 브라우저 지그재그 무빙 트래킹 드릴.",
    "genre": "FPS Training / Reactive Tracking",
    "url": "https://skilldrills.online/ko/drills/fps/anti-zigzag-movement-trainer",
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
    "url": "https://skilldrills.online/ko/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "브라우저에서 실행되는 무료 지그재그 무빙 트래킹. 회피 무빙처럼 방향을 바꾸는 표적을 따라가 처치합니다."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/ko/drills/fps/anti-zigzag-movement-trainer",
    "description": "불규칙하게 방향을 꺾는 표적에 조준선을 유지해 처치하는 무료 브라우저 지그재그 무빙 트래킹 드릴.",
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
        "name": "지그재그 무빙 트래킹 드릴은 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "표적이 화면의 무작위 위치에 나타나 좌우로 달리면서 위아래로도 조금씩 흔들리고, 일정하지 않은 간격으로 방향을 꺾습니다. 클릭 없이 마우스로 조준선을 표적 위에 올려 두면 표적 위의 체력 바가 줄어듭니다. 시작 시간은 45초입니다."
        }
      },
      {
        "@type": "Question",
        "name": "표적은 어떻게 처치하나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "조준선이 표적 위에 있는 동안 체력이 초당 65씩 줄어, 약 1.5초 동안 붙어 있으면 처치됩니다. 처치하면 25점에 콤보 배율을 곱한 보너스를 받고 새 표적이 나타납니다. 끊겼다가 다시 붙어도 깎인 체력은 유지됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "점수와 콤보는 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "표적 위에 있으면 0.25초마다 10점에 콤보 배율과 레벨 보정이 곱해지고, 남은 시간이 0.1초 늘어납니다(최대 60초). 1초 연속 유지마다 콤보가 1 오르며 배율은 콤보 50에서 최대 3.0배입니다."
        }
      },
      {
        "@type": "Question",
        "name": "표적이 사라지는 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "각 표적에는 수명이 있어 레벨 1에서는 약 4.2초, 레벨이 오를수록 짧아져 약 1.8초까지 줄어듭니다. 그 안에 처치하지 못하면 표적이 도망가고 콤보가 0이 되며, 새 표적이 나타납니다. 1초 이상 표적에서 벗어나도 콤보가 초기화됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "난이도는 어떻게 올라가나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1400점마다 레벨이 1 오르고 상한은 없습니다. 레벨이 오를수록 표적이 작아지고 빨라지며, 방향을 꺾는 간격이 약 1.2초에서 점점 짧아집니다."
        }
      },
      {
        "@type": "Question",
        "name": "회피 무빙 대응에 어떤 요령이 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "방향이 꺾일 때마다 크게 플릭하면 반대쪽으로 지나치기 쉽습니다. 표적 중심을 보고, 꺾인 직후 짧게 감속한 뒤 새 방향 속도에 맞춰 다시 붙이세요. 에이펙스 레전드, 발로란트, 오버워치 2 등에서 상대의 지그재그 무빙을 놓치는 플레이어에게 반복 연습용으로 쓸 수 있습니다. 효과는 사람마다 다릅니다."
        }
      },
      {
        "@type": "Question",
        "name": "모바일이나 터치스크린에서도 할 수 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아니요. 포인터 락으로 마우스 이동량을 읽기 때문에 마우스가 필요합니다. 터치 전용 기기에서는 시작 버튼 대신 안내가 표시됩니다. 플레이 중 Esc를 누르면 종료됩니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "지그재그 무빙 트래킹 연습 방법",
    "description": "방향을 꺾는 표적에 조준선을 유지해 처치하는 연습 순서.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "감도 맞추기",
        "text": "드릴 목록 페이지의 공용 마우스 감도를 평소 감각에 가깝게 맞춥니다."
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
        "name": "따라붙기",
        "text": "방향을 꺾는 표적 위에 조준선을 올려 체력 바를 깎습니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "수명 안에 처치",
        "text": "표적이 사라지기 전에 처치해 보너스를 받고 콤보를 이어 갑니다."
      }
    ]
  };

  const koGuide = {
    heading: "지그재그 무빙 트래킹: 회피 무빙 대응 가이드",
    intro: [
      "SkillDrills의 지그재그 무빙 트래킹 드릴은 불규칙하게 방향을 꺾는 표적에 조준선을 붙여 체력 바를 깎아 처치하는 연습입니다. 클릭은 필요 없고, 표적 위에 머무는 시간이 곧 대미지입니다.",
      "표적은 무작위 위치에 나타나 좌우로 달리면서 위아래로도 흔들리고, 벽에 닿으면 튕겨 나옵니다. 방향 전환 간격은 레벨 1에서 약 1.2초이며 레벨이 오를수록 짧아집니다. 표적마다 수명이 있어 오래 놓치면 도망갑니다.",
      "세션은 45초로 시작하고, 표적 위에 있는 동안 1초당 0.4초씩 늘어납니다(최대 60초). 점수와 레벨에는 상한이 없습니다."
    ],
    techniques: {
      title: "지그재그 무빙 트래킹 팁",
      items: [
        {
          name: "꺾이는 지점에서 오버플릭 금지",
          desc: "방향이 꺾일 때 크게 플릭하면 반대쪽으로 지나쳐 체력을 깎는 시간을 잃습니다.",
          tips: "꺾인 직후 짧게 감속하고 새 방향 속도에 맞춰 다시 붙으세요."
        },
        {
          name: "궤적 꼬리 활용",
          desc: "표적 뒤에 최근 이동 경로가 짧은 선으로 그려집니다.",
          tips: "꼬리의 방향으로 지금 표적이 어디로 가는지 확인하세요."
        },
        {
          name: "처치 우선",
          desc: "표적 수명이 다하면 콤보가 끊기므로, 붙어 있는 시간을 모아 빨리 처치하는 것이 중요합니다.",
          tips: "체력 바가 반 이하로 줄면 색이 바뀝니다. 끝까지 놓치지 마세요."
        },
        {
          name: "가볍게 쥐기",
          desc: "손에 힘이 들어가면 상하좌우 미세 보정이 뚝뚝 끊깁니다.",
          tips: "손끝과 손목이 자유롭게 움직일 정도로만 쥐세요."
        }
      ]
    },
    steps: [
      "드릴 목록 페이지에서 공용 마우스 감도를 맞춥니다.",
      "시작 버튼을 눌러 전체화면과 포인터 락을 켭니다.",
      "방향을 꺾는 표적 위에 조준선을 올려 체력 바를 깎습니다.",
      "수명 안에 처치해 25점 × 콤보 보너스를 받고 다음 표적으로 넘어갑니다.",
      "종료 후 추적 정확도, 최고 콤보, 도달 레벨을 확인합니다."
    ],
    audience: "에이펙스 레전드, 발로란트, 오버워치 2 등에서 지그재그·회피 무빙을 하는 상대를 놓치는 플레이어, 브라우저에서 무료로 무빙 트래킹을 연습하고 싶은 PC 게이머.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/ko/drills/fps/anti-strafe-jitter-duel", label: "트래킹 연습 사이트 (ADAD 무빙 대응)" },
      { href: "/ko/drills/fps/flick-shot-training", label: "플릭 에임 연습 (Flick Shot)" },
      { href: "/ko/drills/fps/180-degree-awareness", label: "180도 플릭 에임 연습" },
      { href: "/ko/drills/fps/instant-response", label: "FPS 반응속도 테스트" },
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
      <AntiZigzagClient
        copy={{
          h1Keyword: "지그재그 무빙 트래킹",
          h1Suffix: " - 회피 무빙 대응",
          statScore: "점수",
          statTime: "남은 시간",
          statAccuracy: "트래킹 정확도",
          statBestScore: "최고 점수",
          startTitle: NAME,
          startSubtitle: "방향을 꺾는 표적 추적 • 무한 레벨",
          getReady: "준비",
          stageCaption: "불규칙하게 방향을 꺾는 표적에 조준선을 올려 체력 바를 깎으세요. 클릭은 필요 없습니다.",
          rulesTitle: "훈련 규칙 및 점수 체계",
          rulesItems: [
            { num: "1", text: "표적 위 유지", highlight: "0.25초마다 10점 (+0.1초)", result: "콤보 배율 적용" },
            { num: "2", text: "표적 처치", highlight: "25점 × 콤보 보너스", result: "새 표적 생성" },
            { num: "3", text: "레벨 상승", highlight: "+1 레벨 / 1400점", result: "더 작고 빠른 표적" },
            { num: "4", text: "수명 만료 / 1초 이탈", highlight: "페널티", result: "콤보 초기화" }
          ],
          aboutTitle: "지그재그 무빙 트래킹 정보"
        }}
      />
      <DrillGuide guide={koGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
