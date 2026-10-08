import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  "title": "시간 감각 게임｜목표 시간 맞추기 | SkillDrills",
  "description": "목표 시간을 보고 그 시간이 지났다고 느낄 때 클릭하는 시간 감각 게임입니다. 반응속도 테스트가 아닙니다. 신호 반응은 빛 반응속도 테스트에서 확인하세요.",
  "keywords": [
    "시간 감각 게임",
    "시간 추정 게임",
    "타이밍 게임",
    "목표 시간 맞추기",
    "체내 시계 게임",
    "스톱워치 게임",
    "시간 감각 훈련",
    "클릭 타이밍 연습"
  ],
  "alternates": {
    "canonical": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test",
    "languages": getAlternateLanguages('/drills/reaction-speed/reaction-time-test')
  },
  "openGraph": {
    "images": [
      {
        "url": "https://skilldrills.online/opengraph-image",
        "width": 1200,
        "height": 630
      }
    ],
    "title": "시간 감각 게임｜목표 시간 맞추기 | SkillDrills",
    "description": "1~8초 목표 시간을 체내 시계로 맞추고 클릭 오차를 밀리초로 확인하는 무료 시간 감각 게임입니다.",
    "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test",
    "siteName": "SkillDrills",
    "locale": "ko_KR",
    "type": "website"
  },
  "twitter": {
    "images": [
      "https://skilldrills.online/opengraph-image"
    ],
    "card": "summary_large_image",
    "title": "시간 감각 게임｜목표 시간 맞추기 | SkillDrills",
    "description": "목표 시간을 기억하고 지났다고 느낄 때 클릭하세요. 오차를 밀리초로 확인하는 시간 감각 게임입니다."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills 홈",
      "item": "https://skilldrills.online/ko"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "훈련 허브",
      "item": "https://skilldrills.online/ko/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "반응 속도",
      "item": "https://skilldrills.online/ko/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "시간 감각 게임",
      "item": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Time_perception"
  ],
  "name": "시간 감각 게임｜목표 시간 맞추기",
  "alternateName": [
    "시간 추정 게임",
    "스톱 더 타이머 게임",
    "체내 시계 훈련"
  ],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "브라우저에서 즐기는 시간 감각 게임. 목표 시간을 보고 지났다고 느낄 때 클릭하면 오차가 밀리초로 표시됩니다."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "시간 감각 게임｜목표 시간 맞추기 | SkillDrills",
  "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test",
  "description": "무료 시간 감각 게임입니다. 클릭이 목표 시간에 얼마나 가까운지 측정하며, 신호에 대한 반응속도를 재는 테스트가 아닙니다.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "시간 추정, 간격 타이밍, 클릭 타이밍의 일관성"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "시간 감각 게임｜목표 시간 맞추기",
  "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test",
  "description": "타이밍 게임: 1~8초 목표 시간을 기억하고 지났다고 느낄 때 클릭합니다.",
  "genre": [
    "Timing Game",
    "Casual"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "시간 감각 게임 하는 방법",
  "description": "목표 시간을 기억하고, 지났다고 느낄 때 클릭한 뒤 오차를 밀리초로 확인합니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "훈련 시작",
      "text": "훈련 시작 버튼을 클릭하거나 탭하여 전체화면 아레나를 엽니다.",
      "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "목표 시간 기억",
      "text": "1~8초 사이의 목표 시간을 읽습니다. 숫자는 잠시 후 사라집니다.",
      "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "시간이 지났을 때 클릭",
      "text": "목표 시간이 지났다고 느껴지는 순간 클릭하거나 탭합니다. 시계가 흐르는 동안 숫자는 표시되지 않습니다.",
      "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "오차 확인",
      "text": "여러 라운드를 플레이하며 평균 오차와 일관성을 비교합니다.",
      "url": "https://skilldrills.online/ko/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "이것은 반응속도 테스트인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아니요, 시간 감각 게임입니다. 목표 시간이 표시되고, 그 시간이 지났다고 느낄 때 클릭하면 오차가 밀리초로 표시됩니다. 신호에 얼마나 빨리 반응하는지 재려면 빛 반응속도 테스트를 이용하세요."
      }
    },
    {
      "@type": "Question",
      "name": "게임은 어떻게 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "목표 시간이 잠깐 표시되었다가 사라집니다. 이후 숫자가 없는 빛나는 구체가 움직이고 뒤에서 시계가 흐르며, 목표 시간이 지났다고 느낄 때 클릭하면 클릭한 정확한 시점과 오차가 표시됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "목표 시간은 얼마나 긴가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "처음에는 약 1~2초 범위에서 시작하고, 레벨이 오르면 상한이 늘어 최대 8초가 됩니다. 목표는 3.250s처럼 소수점 셋째 자리까지 표시됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수는 어떻게 계산되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "오차는 클릭 시점에서 목표 시간을 뺀 값입니다. 오차가 50ms에 목표의 5%를 더한 범위 안이면 명중으로 인정되며, 3초 목표라면 200ms입니다. 가까울수록 점수가 높고, 10ms 미만은 EXACT 평가를 받으며, 연속 명중 시 콤보 배율이 최대 3.0배까지 올라갑니다."
      }
    },
    {
      "@type": "Question",
      "name": "너무 일찍 또는 너무 늦게 클릭하면 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "둘 다 오차로 계산됩니다. 허용 범위를 벗어난 클릭은 실패로 처리되어 콤보가 초기화되고 빨간 경고가 나타나지만, 점수는 유지됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "머릿속으로 숫자를 세도 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 숫자 세기는 본인의 전략입니다. 구체에는 숫자 표시가 없고 주변 링이 1초에 한 번 맥동하므로 박자로 활용할 수 있습니다. 여러 방법을 시도해 평균 오차가 가장 작은 방식을 고르세요."
      }
    },
    {
      "@type": "Question",
      "name": "주사율이나 입력 지연이 결과에 영향을 주나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "약간 영향을 줍니다. 클릭은 브라우저의 performance.now()로 기록되지만, 화면은 60Hz에서 16.7ms, 144Hz에서 6.9ms, 240Hz에서 4.2ms마다 새 프레임을 표시하고 입력 장치에도 폴링 지연이 더해집니다(Woods et al., 2015). 같은 기기에서 기록끼리 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "연습하면 타이밍이 좋아지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "연습한 과제는 보통 좋아지므로 이 훈련의 평균 오차도 줄어들 가능성이 큽니다. 다른 과제로 얼마나 이어지는지는 사람마다 다르며 보장되지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "10초 챌린지와 같은 건가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "시계 없이 시간 간격을 가늠한다는 점은 비슷하지만, 목표가 라운드마다 바뀌며 10초로 고정되어 있지 않습니다. 또 성공·실패가 아니라 오차의 크기로 점수를 매깁니다."
      }
    },
    {
      "@type": "Question",
      "name": "무료인가요? 모바일에서도 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 무료이며 가입이나 다운로드가 필요 없습니다. 모바일 브라우저에서도 작동하지만 터치 입력에는 자체 지연이 있으므로 같은 기기에서의 기록끼리만 비교하세요."
      }
    }
  ]
};

const reactionGuide = {
  "heading": "시간 감각 게임: 시간 추정 훈련의 원리와 채점 방식",
  "intro": [
    "신호에 반응하는 속도를 재는 테스트가 아니라 시간 감각을 겨루는 게임입니다. 1~8초 사이의 목표 시간이 잠깐 표시되었다 사라지고, 그 시간이 지났다고 느껴질 때 클릭합니다. 클릭과 목표의 차이가 밀리초로 표시됩니다. 시각 신호에 얼마나 빨리 반응하는지 재려면 빛 반응속도 테스트를 이용하세요.",
    "모든 클릭은 기기 안에서 브라우저의 performance.now() 타이머로 기록됩니다. 디스플레이는 보이는 화면을 주사 간격으로 나눕니다. 60Hz는 프레임당 약 16.7ms, 144Hz는 6.9ms, 240Hz는 4.2ms입니다(Woods et al., 2015). 마우스 폴링은 125Hz에서 약 8ms, 1000Hz에서 약 1ms의 지연을 더합니다.",
    "약 5ms 미만의 차이는 측정 잡음으로 보고, 다른 사람의 환경이 아니라 같은 기기에서의 내 기록끼리 비교하세요. 연습용 도구이며 의학적 측정이 아닙니다."
  ],
  "benchmarks": {
    "title": "타이밍 오차 평가 방식",
    "headers": [
      "평가",
      "허용 오차",
      "목표 3.000s일 때 예시"
    ],
    "rows": [
      [
        "EXACT",
        "10ms 이내",
        "2.990s~3.010s 사이에 클릭"
      ],
      [
        "PERFECT",
        "명중 범위의 20%까지",
        "40ms 이내"
      ],
      [
        "EXCELLENT",
        "명중 범위의 40%까지",
        "80ms 이내"
      ],
      [
        "GOOD",
        "명중 범위의 60%까지",
        "120ms 이내"
      ],
      [
        "OK",
        "명중 범위의 80%까지",
        "160ms 이내"
      ],
      [
        "HIT",
        "명중 범위 전체까지",
        "200ms 이내"
      ]
    ],
    "note": "명중 범위는 50ms에 목표 시간의 5%를 더한 값이므로, 목표가 길수록 절대값으로는 더 관대합니다. 이 훈련의 채점 규칙이며 일반 인구 기준이 아닙니다."
  },
  "techniques": {
    "title": "짧은 시간 간격을 가늠하는 방법",
    "items": [
      {
        "name": "일정한 속도로 세기",
        "desc": "속으로 잘게 나누어 세면 반복 가능한 내부 박자를 만들 수 있습니다. 목표에 따라 어울리는 세는 속도가 다릅니다.",
        "tips": "세는 속도를 하나 정해 세션 내내 유지하면 오차를 비교하기 쉽습니다."
      },
      {
        "name": "1초 맥동 활용하기",
        "desc": "구체 주변의 링은 1초에 한 번 맥동합니다. 맥동 한 번을 1초로 세면 정수 초는 더하고 나머지만 가늠하면 됩니다.",
        "tips": "3.250s처럼 소수점이 있는 목표에서는 마지막 클릭이 맥동과 맥동 사이에 옵니다."
      },
      {
        "name": "부호 있는 오차 확인하기",
        "desc": "클릭할 때마다 언제 클릭했는지 표시됩니다. 계속 빠르거나 늦다면 내부 카운트를 그만큼 조정하세요.",
        "tips": "작고 일정한 편향은 크게 흩어지는 오차보다 고치기 쉽습니다."
      }
    ]
  },
  "steps": [
    "훈련 시작 버튼을 눌러 전체화면 아레나를 엽니다.",
    "목표 시간이 사라지기 전에 확인합니다.",
    "목표 시간이 지났다고 느껴지는 순간 클릭하거나 탭합니다.",
    "여러 라운드를 플레이하며 평균 오차와 일관성을 비교합니다."
  ],
  "audience": "게이머, 음악 연주자, 운동선수 등 클릭 타이밍을 더 일정하게 만들고 짧은 시간 간격 감각을 키우고 싶은 모든 사용자.",
  "faqs": faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('woods2015'),
  "related": [
    {
      "href": "/ko/drills/visual/reaction-speed/light-reaction",
      "label": "반응속도 테스트(빛 반응)"
    },
    {
      "href": "/ko/drills/reaction-speed",
      "label": "반응속도 훈련 허브"
    },
    {
      "href": "/ko/drills/motor/movement-speed/rapid-tapping",
      "label": "CPS 클릭 속도 테스트"
    },
    {
      "href": "/ko/drills/reaction-speed/fps-tracking-trainer",
      "label": "FPS 트래킹 에임 트레이너"
    },
    {
      "href": "/ko/drills/fps/flick-shot-training",
      "label": "플릭샷 훈련"
    }
  ]
};

export default function KoreanReactionTimeTestPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ReactionTimeTestWrapper
        copy={{
          title: "시간 감각 게임｜목표 시간 맞추기",
          subtitle: "목표 시간을 기억하고 지났다고 느낄 때 클릭하세요. 오차를 밀리초로 확인하는 시간 감각 게임",
          caption: "목표 시간이 나타났다 사라집니다. 그 시간이 지났다고 느껴지는 순간 클릭하세요.",
        }}
      />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
