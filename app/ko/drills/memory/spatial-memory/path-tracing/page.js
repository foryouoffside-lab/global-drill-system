import PathTracingClient from '@/app/drills/memory/spatial-memory/path-tracing/PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "코르시 블록 테스트 | 순서 기억 | SkillDrills",
  description: "무료 코르시 블록 테스트: 격자 위에서 차례로 켜지는 타일의 위치와 순서를 기억한 뒤 같은 순서로 눌러 보세요. 3x3에서 7x7까지 길어지는 경로로 블록 순서 기억과 시공간 작업기억을 연습합니다.",
  keywords: ['코르시 블록 테스트', '블록 순서 기억', '시공간 작업기억', '순서 기억력 테스트', '경로 기억 게임', '공간 순서 기억'],
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing', 'ko'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "코르시 블록 테스트 | 순서 기억 | SkillDrills",
    description: "차례로 켜지는 타일의 위치와 순서를 기억해 같은 순서로 누르는 무료 코르시 블록 테스트. 블록 순서 기억과 시공간 작업기억 연습.",
    url: "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing",
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "코르시 블록 테스트 | 순서 기억 | SkillDrills",
    description: "차례로 켜지는 타일의 위치와 순서를 기억해 같은 순서로 누르는 무료 코르시 블록 테스트. 블록 순서 기억과 시공간 작업기억 연습.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedPathTracingPage() {
  const appDescription = "격자 위에서 인접한 타일이 하나씩 켜지며 만드는 경로를 기억한 뒤 같은 순서로 누르는 무료 브라우저 코르시 블록 방식 순서 기억 연습. 경로를 완성할 때마다 한 단계씩 길어집니다.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "기억력 훈련", "item": "https://skilldrills.online/ko/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "공간 기억", "item": "https://skilldrills.online/ko/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "코르시 블록 테스트", "item": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "코르시 블록 테스트 (순서 기억)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": appDescription,
    "genre": "Spatial Memory",
    "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "코르시 블록 테스트 (순서 기억)",
    "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing",
    "description": appDescription,
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "코르시 블록 테스트 (순서 기억)",
    "description": appDescription,
    "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing",
    "genre": ["Memory Game", "Spatial Sequence Memory"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "코르시 블록 테스트는 어떻게 진행되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "격자 위 타일이 0.5초 간격으로 하나씩 켜지며 경로를 보여 줍니다. 시연이 끝나면 10초 안에 같은 타일을 같은 순서로 클릭하거나 탭하세요. 경로를 끝까지 맞히면 +150점이고 다음 경로가 한 단계 길어집니다."
        }
      },
      {
        "@type": "Question",
        "name": "원래의 코르시 블록 검사와 같은 것인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "아닙니다. 코르시 블록 과제(Corsi, 1972)처럼 위치의 순서를 기억해 재현한다는 원리는 같지만, 여기서는 정사각형 격자를 쓰고 각 단계가 바로 옆(상하좌우) 타일로만 이어지며 같은 타일을 다시 지나지 않습니다. 연습용 게임입니다."
        }
      },
      {
        "@type": "Question",
        "name": "경로 길이와 격자 크기는 어떻게 늘어나나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "레벨 1은 3단계 경로로 시작하고, 경로를 완성할 때마다 레벨과 경로 길이가 1씩 늘어납니다. 격자는 5단계까지 3x3, 6~8단계 4x4, 9~12단계 5x5, 13~16단계 6x6, 17단계 이상 7x7입니다."
        }
      },
      {
        "@type": "Question",
        "name": "제한 시간은 어떻게 계산되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "세션 시계는 60초이며 직접 경로를 누르는 입력 단계에서만 줄어듭니다. 경로 시연과 결과 표시 시간은 계산되지 않습니다. 각 경로는 입력 시작 후 10초 안에 끝내야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "틀린 타일을 누르면 어떻게 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "그 라운드가 바로 끝나고 같은 길이의 새 경로가 나옵니다. 점수나 남은 시간은 줄지 않고 레벨도 내려가지 않습니다. 10초 안에 입력하지 못한 경우도 같은 방식으로 처리되며, 둘 다 정확도에 실패로 기록됩니다."
        }
      },
      {
        "@type": "Question",
        "name": "긴 경로를 기억하는 요령이 있나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "경로가 항상 이웃한 타일로 이어지므로 칸 하나하나 대신 '오른쪽 두 칸, 위로 한 칸'처럼 방향 덩어리로 묶어 기억하면 도움이 됩니다(Miller, 1956). 시연 중에는 격자 전체를 보며 꺾이는 지점을 기억하세요."
        }
      },
      {
        "@type": "Question",
        "name": "순간 기억 테스트(격자 기억)와는 무엇이 다른가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "격자 기억은 여러 칸이 한꺼번에 켜져 하나의 패턴처럼 외울 수 있습니다. 코르시 블록 테스트는 타일이 하나씩 켜지므로 위치와 함께 순서까지 기억해야 합니다."
        }
      },
      {
        "@type": "Question",
        "name": "점수는 저장되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "최고 점수와 최고 레벨은 이 브라우저의 localStorage에만 저장되고 서버로 전송되지 않습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "코르시 블록 테스트 하는 방법",
    "description": "차례로 켜지는 타일 경로를 기억해 같은 순서로 재현하는 4단계.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing#step-1",
        "name": "격자 전체 보기",
        "text": "시연이 시작되면 첫 타일만 쫓지 말고 격자 전체를 보며 경로가 어디로 꺾이는지 확인합니다."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing#step-2",
        "name": "방향으로 묶기",
        "text": "각 단계는 바로 옆 타일로 이동하므로 '오른쪽 2, 위 1'처럼 방향 덩어리로 묶어 기억합니다."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing#step-3",
        "name": "같은 순서로 누르기",
        "text": "시연이 끝나면 10초 안에 시작 타일부터 같은 순서로 클릭하거나 탭합니다."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/ko/drills/memory/spatial-memory/path-tracing#step-4",
        "name": "실수 후 바로 이어가기",
        "text": "틀려도 감점이나 레벨 하락이 없으니 같은 길이의 새 경로에 바로 집중합니다."
      }
    ]
  };

  const pathTracingGuide = {
    intro: [
      "코르시 블록 테스트는 격자 위에서 차례로 켜지는 타일의 위치와 순서를 기억했다가 같은 순서로 다시 누르는 무료 순서 기억 게임입니다. 블록 순서 기억과 시공간 작업기억을 연습하는 코르시 블록 과제(Milner, 1971; Corsi, 1972)의 원리를 격자 경로 형태로 옮겼습니다.",
      "레벨 1에서는 3x3 격자에 3단계 경로가 나옵니다. 타일은 0.5초 간격으로 켜지고, 각 단계는 상하좌우로 이웃한 타일로만 이어지며 같은 타일을 두 번 지나지 않습니다. 경로를 맞힐 때마다 +150점, 레벨 +1, 경로 +1단계이며 격자는 4x4, 5x5, 6x6을 거쳐 7x7까지 커집니다.",
      "세션 시계는 60초이고 입력 단계에서만 줄어듭니다. 경로 하나는 10초 안에 끝내야 합니다. 틀린 타일을 누르거나 시간을 넘기면 감점 없이 같은 길이의 새 경로가 나오며 레벨은 내려가지 않습니다. 입력은 마우스 클릭 또는 터치입니다.",
      "데이터 투명성: 점수는 이 브라우저의 localStorage에만 저장되며 서버로 전송되지 않습니다. 따라서 이 사이트는 사용자 평균이나 순위를 게시하지 않습니다."
    ],
    benchmarks: {
      title: "SkillDrills 연습 구간 (점수 = 완성한 경로 × 150점)",
      headers: ["연습 구간", "도달한 경로 길이 · 격자", "점수", "의미"],
      rows: [
        ["입문", "3~4단계 · 3x3", "0~150점", "경로 0~1개 완성. 규칙과 입력 리듬에 익숙해지는 단계"],
        ["기본", "5~7단계 · 3x3~4x4", "300~600점", "경로 2~4개 완성. 격자가 4x4로 넓어지기 시작"],
        ["숙련", "8~12단계 · 4x4~5x5", "750~1,350점", "경로 5~9개 완성. 방향 덩어리로 묶는 전략이 필요"],
        ["상급", "13단계 이상 · 6x6~7x7", "1,500점 이상", "경로 10개 이상 완성. 60초 입력 시간 안에 긴 경로를 연속으로 재현"]
      ],
      note: "이 표는 이 게임의 채점 규칙에서 계산한 SkillDrills 연습 구간이며, 인구 규준이 아닙니다."
    },
    techniques: {
      title: "긴 경로를 기억하는 요령",
      items: [
        {
          "name": "방향 덩어리 만들기",
          "desc": "경로는 항상 이웃한 타일로 이어지므로 칸 위치 대신 '오른쪽 2, 위 1, 왼쪽 1' 같은 방향 묶음으로 기억합니다(Miller, 1956).",
          "tips": "L자, 계단, 지그재그처럼 모양 이름을 붙여 보세요."
        },
        {
          "name": "꺾이는 지점 표시하기",
          "desc": "직선 구간은 쉽게 기억되므로 방향이 바뀌는 타일과 시작 타일을 특히 확실히 잡아 둡니다.",
          "tips": "시작점과 마지막 방향 전환을 먼저 떠올린 뒤 입력하세요."
        },
        {
          "name": "격자 전체 보기",
          "desc": "켜지는 타일마다 시선을 급히 옮기기보다 격자 중앙 근처를 보며 경로의 흐름을 따라갑니다.",
          "tips": "큰 격자(6x6, 7x7)에서 특히 효과적입니다."
        },
        {
          "name": "일정한 리듬으로 입력하기",
          "desc": "입력 시간은 10초이므로 서두를 필요는 없지만, 중간에 오래 멈추면 뒷부분 순서를 잊기 쉽습니다.",
          "tips": "머릿속 덩어리 단위로 끊어서 차례로 누르세요."
        }
      ]
    },
    steps: [
      "시작 버튼을 누르고 3초 카운트다운을 기다립니다.",
      "타일이 하나씩 켜지는 경로를 끝까지 봅니다.",
      "10초 안에 같은 타일을 같은 순서로 클릭하거나 탭합니다.",
      "성공하면 경로가 한 단계 길어지고, 실패하면 같은 길이의 새 경로가 나옵니다.",
      "60초 입력 시간이 끝나면 점수, 최고 레벨, 정확도를 확인합니다."
    ],
    audience: "블록 순서 기억과 시공간 작업기억을 게임으로 연습하고 싶은 사람, 맵 동선이나 동작 순서를 외워야 하는 게이머와 운동선수, 짧은 두뇌 게임을 찾는 모든 사용자.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('corsi1972', 'milner1971', 'logie1995', 'miller1956'),
    related: [
      {
        "href": "/ko/drills/memory/spatial-memory/grid-memorization",
        "label": "순간 기억 테스트 (Visual Memory)"
      },
      {
        "href": "/ko/drills/memory/spatial-memory/object-location",
        "label": "공간 기억력 테스트 (Object Location Test)"
      },
      {
        "href": "/ko/drills/memory/short-term-memory/digit-span",
        "label": "숫자 기억력 테스트 (Digit Span)"
      },
      {
        "href": "/ko/drills/memory/short-term-memory/word-recall",
        "label": "단어 기억력 테스트 (Verbal Memory)"
      },
      {
        "href": "/ko/drills/memory/working-memory/n-back",
        "label": "엔백 게임 (N-back)"
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
      <PathTracingClient
        copy={{
        "h1Keyword": "코르시 블록 테스트",
        "h1Suffix": " – 순서 기억",
        "subtitle": "차례로 켜지는 타일의 위치와 순서를 기억해 같은 순서로 누르세요.",
        "statScore": "점수",
        "statTime": "남은 시간",
        "statLevel": "레벨",
        "statBestScore": "최고 점수",
        "levelPrefix": "Lv.",
        "startTitle": "코르시 블록 테스트",
        "startSubtitle": "블록 순서 기억 • 시공간 작업기억",
        "countdownSubtitle": "준비하세요",
        "newBest": "최고 기록 달성",
        "pointsLabel": "포인트",
        "statAccuracy": "정확도",
        "statPeakLevel": "최고 레벨",
        "statPerfects": "퍼펙트",
        "btnPlayAgain": "다시 도전하기",
        "rulesTitle": "규칙 & 점수 방식",
        "aboutTitle": "코르시 블록 테스트에 대하여",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "경로를 같은 순서로 재현",
                        "highlight": "+150 PTS",
                        "result": "성공 시 레벨 +1, 경로 +1단계 (입력 제한 10초)"
                },
                {
                        "num": "2",
                        "text": "격자 확장",
                        "highlight": "3x3 → 7x7",
                        "result": "경로가 길어지면 격자가 자동으로 커짐"
                },
                {
                        "num": "3",
                        "text": "오답 및 시간 초과",
                        "highlight": "감점 없음",
                        "result": "점수·시간 차감 없이 같은 길이의 새 경로"
                },
                {
                        "num": "4",
                        "text": "레벨 유지",
                        "highlight": "레벨 하락 없음",
                        "result": "실패해도 현재 레벨 유지, 60초는 입력 중에만 감소"
                }
        ]
}}
      />
      <DrillGuide guide={pathTracingGuide} />
      <RelatedDrills />
    </>
  );
}
