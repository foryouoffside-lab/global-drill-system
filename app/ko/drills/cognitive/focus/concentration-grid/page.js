import ConcentrationGridClient from '@/app/drills/cognitive/focus/concentration-grid/ConcentrationGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "슐테 테이블 게임 – 숫자 순서 찾기 | SkillDrills",
  description: "무료 슐테 테이블 게임입니다. 흩어진 숫자를 1부터 순서대로 찾아 누르는 45초 세션으로, 3x3에서 시작해 판을 깰 때마다 격자가 커집니다. 터치 속도와 정확도가 점수에 반영됩니다.",
  keywords: [
    "슐테 테이블 게임",
    "숫자 순서 찾기",
    "집중력 훈련 게임",
    "집중력 향상 게임",
    "슐테 테이블",
    "슐테 표",
    "집중력 격자",
    "주변 시야 훈련",
    "속독 훈련 숫자",
    "시각 탐색 속도",
    "시야각 확장 훈련",
    "사케드 안구 운동",
    "무료 뇌 인지 훈련",
    "슐테 테이블 5x5 연습"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "슐테 테이블 게임 – 숫자 순서 찾기 | SkillDrills",
    description: "숫자를 1부터 순서대로 터치하는 무료 슐테 테이블 게임. 45초 동안 3x3부터 커지는 격자에서 시각 탐색 속도를 연습하세요.",
    type: "website",
    url: "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid",
    siteName: "SkillDrills",
    locale: "ko_KR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "슐테 테이블 게임 – 숫자 순서 찾기 | SkillDrills",
    description: "숫자를 1부터 순서대로 터치하는 무료 슐테 테이블 게임. 45초 동안 3x3부터 커지는 격자에서 시각 탐색 속도를 연습하세요.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid",
    languages: getAlternateLanguages('/drills/cognitive/focus/concentration-grid'),
  },
};

export default function ConcentrationGridPageKo() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
      { "@type": "ListItem", "position": 2, "name": "인지 드릴", "item": "https://skilldrills.online/ko/drills/cognitive" },
      { "@type": "ListItem", "position": 3, "name": "슐테 테이블", "item": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Attention"],
    "name": "슐테 테이블 온라인 (집중력 격자)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "설치 없이 웹 브라우저에서 실행되는 무료 슐테 테이블(Schulte Table) 및 집중력 격자 훈련 도구.",
    "genre": "인지 훈련 / 주변 시야 / 집중력",
    "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "슐테 테이블 온라인 (집중력 격자)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "HTML5 Canvas, JavaScript 지원 웹 브라우저",
    "description": "설치 없이 웹 브라우저에서 실행되는 무료 슐테 테이블(Schulte Table) 및 집중력 격자 훈련 도구.",
    "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "슐테 테이블 온라인 (집중력 격자)",
    "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid",
    "description": "무작위로 배치된 숫자를 순서대로 터치하여 주변 시야와 시각 탐색 속도를 강화하는 인지 훈련 게임.",
    "dateModified": "2026-11-12",
    "gamePlatform": "Web Browser",
    "genre": ["인지 훈련", "주변 시야", "슐테 테이블", "집중력 격자"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "슐테 테이블(Schulte Table)이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "독일의 정신과 의사 발터 슐테(Walter Schulte)의 이름을 딴 주의력 과제입니다. 무작위로 흩어져 있는 숫자들을 1부터 순서대로 빠르게 찾아내는 방식으로, 시각 탐색 속도와 주의 집중을 연습하는 데 쓰입니다."
        }
      },
      {
        "@type": "Question",
        "name": "슐테 테이블 훈련이 주변 시야 확장에 어떻게 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "시선을 격자의 중심에 둔 채 주변 시야(Parafoveal vision)로 외곽 숫자를 포착하는 연습을 반복하게 됩니다. 시야 범위가 실제로 넓어진다는 보장은 없으며, 이 도구는 시야를 측정하지 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "속독을 연습할 때 슐테 표를 쓰는 이유는 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "글자를 한 자씩 짚으며 읽는 습관 대신 여러 글자를 한눈에 훑는 연습으로 쓰이기 때문입니다. 시선의 불필요한 도약과 되돌아 읽기를 줄이는 데 도움이 될 수 있지만, 읽기 속도 향상이 보장되지는 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "중앙 고정 주시(Central Fixation) 원칙이란 무엇인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "격자의 정중앙을 편안하게 응시한 상태에서 시선을 고정하고, 숫자를 찾을 때 눈을 좌우상하로 격렬하게 움직이지 않는 올바른 훈련법입니다."
        }
      },
      {
        "@type": "Question",
        "name": "시각적 밀집 현상(Crowding)이란 무엇이며 난이도에 어떤 영향을 주나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "격자 크기가 3x3에서 5x5, 6x6, 8x8로 확장될수록 주변 방해 숫자들의 밀도가 높아집니다. 비슷한 숫자들 사이에서 다음 숫자만 골라내는 선택적 주의를 연습하게 됩니다. 작은 화면(폭 380px 미만)에서는 최대 7x7까지 커집니다."
        }
      },
      {
        "@type": "Question",
        "name": "5x5 슐테 표는 몇 초면 빠른 편인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "공인된 기준 시간은 없고 사람과 화면 크기에 따라 크게 다릅니다. 이 도구는 3x3부터 격자가 커지는 45초 세션이므로 한 판의 시간보다 세션 점수와 최대 격자 크기를 본인의 이전 기록과 비교하세요."
        }
      },
      {
        "@type": "Question",
        "name": "FPS 게이머에게도 도움이 되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "게임 실력 향상이 입증된 것은 아니지만, 중앙에 시선을 둔 채 가장자리 정보를 훑는 연습이라 화면 구석의 미니맵이나 스킬 표시를 확인하는 습관과 닮아 있습니다. 보조 연습으로 활용하세요."
        }
      },
      {
        "@type": "Question",
        "name": "하루에 몇 번씩 연습하는 것이 가장 효과적인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "정해진 정답은 없습니다. 눈이 피로하지 않도록 한 번에 10분 안팎으로 하고, 중간에 쉬면서 꾸준히 반복하는 방식이 부담이 적습니다."
        }
      },
      {
        "@type": "Question",
        "name": "숫자를 잘못 클릭하면 페널티가 부여되나요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "잘못된 숫자를 누르면 화면에 경고 깜빡임이 발생하고 정확도 통계가 차감되지만, 45초의 제한 시간 동안 게임이 강제 종료되지는 않습니다."
        }
      },
      {
        "@type": "Question",
        "name": "이 슐테 테이블 훈련 도구는 무료인가요?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "네, 완전 무료이며 별도의 가입이나 앱 다운로드 없이 PC와 모바일 브라우저에서 즉시 실행할 수 있습니다."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "슐테 테이블로 주변 시야와 집중력을 단련하는 4단계",
    "description": "시각 탐색 속도와 주변 시야 확장을 완성하는 체계적인 4단계 훈련 프로토콜.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "격자의 정중앙에 시선 고정",
        "text": "눈동자를 개별 칸마다 움직이지 말고, 격자 한가운데를 부드럽게 바라보며 전체 판을 시야에 담습니다.",
        "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "주변 시야로 숫자 1 탐색 및 터치",
        "text": "중앙 고정 상태에서 외곽 시야를 활성화하여 시작 숫자 1을 포착하고 즉시 터치합니다.",
        "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "연속 숫자를 오름차순으로 순차 터치",
        "text": "현재 숫자를 누르면서 다음 숫자의 위치를 미리 시야에 담아두는 선행 탐색을 적용하여 연속으로 터치합니다.",
        "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "격자 완료 후 상위 차원으로 확장",
        "text": "45초 타이머 내에 격자를 완성하면 더 큰 매트릭스(4x4, 5x5, 6x6)로 확장되며 시야 한계에 도전합니다.",
        "url": "https://skilldrills.online/ko/drills/cognitive/focus/concentration-grid#step-4"
      }
    ]
  };

  const concentrationGridGuide = {
    heading: "슐테 테이블 가이드 & 주변 시야 인지 과학",
    intro: [
      "슐테 테이블(Schulte Table)은 독일의 정신과 의사 발터 슐테(Walter Schulte)의 이름을 딴 시지각·주의력 과제입니다. 주의력의 안정성과 작업 능력을 가늠하는 데 쓰여 왔으며, 5x5 격자에 무작위로 분산된 1부터 25까지의 숫자를 시선을 중심에 둔 채 오름차순으로 신속하게 찾아내는 표준 프로토콜을 사용합니다.",
      "응용 스포츠 심리학에서는 '집중력 격자(Concentration Grid)'(Harris & Harris, 1984)라는 이름으로 발전하여 테니스, 모터스포츠, 야구 선수들이 시간 압박 속에서 시각 탐색 속도와 주의 집중력을 단련하는 핵심 도구로 채택되었습니다. 8~11세 아동을 대상으로 한 사건관련전위(ERP) 뇌파 연구에 따르면, 연속적인 순차 탐색은 단일 탐색에 비해 훨씬 높은 인지 자원을 소모하며 색상 간섭 자극이 추가될 때 뇌파 잠복기가 지연되는 경향이 보고되었습니다 (Lu et al., 2022).",
      "SkillDrills 슐테 테이블 게임은 이 고전 과제를 하나의 45초 연속 세션으로 재구성했습니다. 고정된 단일 판이 아닌 3x3에서 8x8까지 격자가 동적으로 확장되며, 5x5 단계부터는 숫자에 미세한 회전 노이즈가 가미되어 45초라는 엄격한 시간 제한 속에서 시야각의 한계와 중심와-주변 시야 협응력을 시험합니다 (Treisman & Gelade, 1980; Wolfe, 2007).",
      "정밀 측정 크로노메트리: 모든 터치 및 클릭 반응은 브라우저의 performance.now() API로 기기 안에서 측정됩니다. 브라우저의 Spectre 보안 완화 조치(~1ms) 및 디스플레이 주사율(60Hz 기준 프레임당 약 16.7ms, Woods et al., 2015)을 고려하여 동일 기기 환경에서의 추세 변화를 기준으로 측정하는 것을 권장합니다.",
      "데이터 프라이버시: SkillDrills는 사용자의 어떠한 세션 기록이나 개인 점수도 외부 서버로 수집·전송하지 않습니다. 모든 훈련 기록과 설정값은 브라우저 로컬 저장소(localStorage)에만 안전하게 보관됩니다."
    ],
    benchmarks: {
      title: "슐테 테이블 등급 구간 (45초 세션 점수)",
      headers: ["등급", "세션 점수"],
      rows: [
        ["S+", "7,220점 이상"],
        ["S", "5,780 – 7,219점"],
        ["A", "4,500 – 5,779점"],
        ["B", "2,880 – 4,499점"],
        ["C", "1,620 – 2,879점"],
        ["D", "720 – 1,619점"],
        ["F", "720점 미만"]
      ],
      note: "SkillDrills 연습 구간입니다. 종료 화면의 등급 공식(기준 점수 8,000점 대비 비율)에서 그대로 계산한 값이며, 사용자 통계가 아닙니다. 정답 터치마다 100점과 빠를수록 커지는 속도 보너스(최대 120점), 판을 완성하면 격자 크기에 비례한 보너스가 더해집니다."
    },
    techniques: {
      title: "슐테 테이블 기록 단축을 위한 4가지 신경 인지 기술",
      items: [
        {
          name: "중앙 고정점(Central Fixation) 유지",
          desc: "시선을 판의 정중앙에 고정하고 판 전체를 하나의 풍경 사진처럼 부드럽게 바라보세요. 눈동자가 숫자를 쫓아다니면 완료 시간이 길어지기 쉽습니다.",
          tips: "화면 중심점을 가볍게 응시하며 시야의 시야각을 좌우로 넓게 펼치세요."
        },
        {
          name: "다음 목표 숫자의 선행 버퍼링 (Parafoveal Pre-caching)",
          desc: "현재 숫자(예: 3번)를 누르는 찰나에 주변 시야로는 이미 4번과 5번의 대략적인 위치를 포착해 두어야 합니다 (Rayner, 1998).",
          tips: "클릭 직후 찾기를 시작하지 말고 항상 1~2개 앞선 숫자를 눈의 가장자리에 담아두세요."
        },
        {
          name: "속발음(Subvocalization) 억제",
          desc: "숫자를 찾으면서 머릿속으로 '하나, 둘, 셋...' 하고 소리 내어 읽으면 탐색 리듬이 말하는 속도에 묶이기 쉽습니다.",
          tips: "숫자의 이름을 소리로 읽지 말고 기하학적 형상(패턴)으로 즉각 인식하세요."
        },
        {
          name: "시야 긴장 완화와 호흡 조절",
          desc: "긴장으로 안면 근육이나 어깨가 굳으면 시야가 좁아지는 터널 비전(Tunnel Vision)이 발생합니다. 부드럽게 숨을 내쉬며 넓은 시야를 유지하세요.",
          tips: "눈에 힘을 풀고 멍하니 보듯 판 전체를 시야에 품으세요."
        }
      ]
    },
    steps: [
      "45초 세션을 시작하고 시선을 화면 정중앙에 편안하게 고정합니다.",
      "주변 시야를 활용해 숫자 1을 포착하고 즉시 터치합니다.",
      "흐름을 끊지 않고 오름차순으로 순차적인 숫자들을 연속 터치합니다.",
      "제한 시간 내에 격자를 클리어하여 더 큰 크기(4x4, 5x5, 6x6)로 확장합니다.",
      "세션 종료 후 최종 점수, 클리어한 격자 수, 정확도 통계를 점검합니다."
    ],
    audience: "속독 능력을 기르고자 하는 수험생, 독서가, 시각 탐색 속도와 주변 시야 반응을 극대화하고자 하는 게이머 및 스포츠 선수.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('lu2022', 'treisman1980', 'rayner1998', 'rayner2016', 'wolfe2007', 'woods2015'),
    related: [
      { href: "/ko/drills/cognitive/processing-speed/symbol-matching", label: "기호 일치 속도 테스트" },
      { href: "/ko/drills/cognitive/attention/concentration-stamina", label: "집중력 지구력 테스트" },
      { href: "/ko/drills/cognitive/processing-speed/rsvp-reader", label: "RSVP 속독 훈련기" },
      { href: "/ko/drills/reaction-speed/visual-tracking-speed-test", label: "시각 추적 속도 테스트" },
      { href: "/ko/drills/reaction-speed/reaction-game", label: "반응속도 테스트 게임" }
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
      <ConcentrationGridClient
        copy={{
          h1Keyword: "슐테 테이블",
          h1Suffix: " 게임 – 숫자 순서 찾기",
          subtitle: "숫자를 1부터 순서대로 찾으며 시각 탐색 속도와 주변 시야, 집중을 연습하는 슐테 테이블 훈련",
          startTitle: "슐테 테이블 게임",
          startSubtitle: "순차 숫자 찾기 • 확장되는 슐테 격자",
          startButtonText: "훈련 시작",
          getReady: "준비",
          caption: "확장되는 슐테 테이블 격자에서 숫자를 순서대로 터치하세요. 주변 시야 확장, 시야각 및 시각 탐색 속도를 체계적으로 훈련합니다.",
          statScore: "점수",
          statTime: "남은 시간",
          statGridSize: "격자 크기",
          statBest: "최고 점수",
          hudTarget: "목표 숫자:",
          statPoints: "획득 점수",
          statAccuracy: "적중 정확도",
          statGridsCleared: "완료 격자",
          statPeakGrid: "최대 격자",
          playAgainText: "다시 도전",
          shareText: "결과 공유",
          exitText: "나가기",
          stageCaption: "확장되는 슐테 격자 매트릭스에서 제한 시간 동안 숫자를 순서대로 빠르게 찾아 터치하세요.",
          rulesTitle: "훈련 규칙 & 점수 체계",
          aboutTitle: "슐테 테이블 & 집중력 격자 상세 안내",
          aboutLead: "슐테 테이블은 흩어진 숫자를 순서대로 찾는 시각 탐색 과제로, 탐색 중 시선 고정과 주변 시야 활용을 연습하는 데 쓰입니다 (Lu et al., 2022; Rayner, 1998).",
          aboutText: "집중력 격자는 점진적인 시각 밀집(Visual Crowding) 환경에서 빠른 안구 도약(Saccades)과 선택적 주의 집중을 훈련합니다 (Treisman & Gelade, 1980; Wolfe, 2007).\n\n규칙적인 연습은 시선 이동과 숫자 변별을 반복하는 기회가 되지만, 집중력 향상이 보장되지는 않습니다.\n\n45초 고정 세션으로 진행되므로 운에 기댄 난타보다 지속적인 침착성과 정확도가 높은 점수를 결정합니다.",
          aboutCards: [
            { title: "누구에게 필요한가요?", text: "속독 능력을 기르고자 하는 학습자, 광범위한 정보 처리가 필요한 운동선수 및 E-스포츠 플레이어.", color: "bg-blue-600" },
            { title: "훈련되는 인지 역량", text: "시각 탐색 속도, 미세 사케드 안구 운동 효율성, 공간 스캐닝 규율, 지속적 주의 집중력.", color: "bg-emerald-600" },
            { title: "주변 시야 확장", text: "격자가 커질수록 시선을 중앙에 둔 채 눈을 굴리지 않고 더 넓은 영역의 숫자를 인지해야 합니다.", color: "bg-purple-600" }
          ],
          rulesItems: [
            { title: "순차 탐색", text: "격자 위의 1번부터 시작하여 가장 높은 숫자까지 오름차순으로 빠짐없이 터치합니다." },
            { title: "확장 격자", text: "한 격자를 모두 클리어하면 다음 크기(3x3 → 4x4 → 5x5...)로 확장되어 더 넓은 시야를 시험합니다." },
            { title: "45초 단일 세션", text: "세션은 정확히 45초 동안 지속됩니다. 판을 클리어해도 타이머는 늘어나지 않습니다." },
            { title: "정확도 관리", text: "잘못 터치하면 시각 경고가 발생하며 정확도가 하락합니다. 신중하게 스캔한 뒤 터치하세요." }
          ]
        }}
      />
      <DrillGuide guide={concentrationGridGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
