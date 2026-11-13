import DigitSpanClient from '@/app/drills/memory/short-term-memory/digit-span/DigitSpanClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "숫자 기억력 테스트 | 숫자 외우기 | SkillDrills",
  description: "무료 숫자 기억력 테스트: 점점 길어지는 숫자 배열을 기억한 뒤 같은 순서로 입력해 숫자 기억력과 작업기억을 연습하세요.",
  keywords: [
    "숫자 기억력 테스트",
    "숫자 외우기 테스트",
    "숫자 기억 테스트",
    "디지트 스팬 테스트",
    "작업기억 숫자 검사",
    "단기기억 숫자",
    "숫자 기억력 게임",
    "숫자 배열 기억",
    "순차 기억력 테스트",
    "기억력 훈련 숫자",
    "음운 루프",
    "숫자 청킹",
    "무료 기억력 테스트",
    "작업기억력 테스트"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "숫자 기억력 테스트 | 숫자 외우기 | SkillDrills",
    description: "무료 숫자 기억력 테스트: 점점 길어지는 숫자 배열을 기억한 뒤 같은 순서로 입력해 숫자 기억력과 작업기억을 연습하세요.",
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "숫자 기억력 테스트 | 숫자 외우기 | SkillDrills",
    description: "무료 숫자 기억력 테스트: 점점 길어지는 숫자 배열을 기억한 뒤 같은 순서로 입력해 숫자 기억력과 작업기억을 연습하세요.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "기억력 훈련", "item": "https://skilldrills.online/ko/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "단기 기억력", "item": "https://skilldrills.online/ko/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "숫자 기억력 테스트", "item": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "숫자 기억력 테스트 (디지트 스팬)",
  "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://ko.wikipedia.org/wiki/%EC%9E%91%EC%97%85_%EA%B8%B0%EC%96%B5"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "숫자 기억력 테스트 (디지트 스팬)",
  "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span",
  "description": "한꺼번에 잠깐 나타나는 숫자 배열을 기억하고 같은 순서로 입력하는 무료 숫자 기억력 테스트. 3자리에서 시작해 맞히면 1자리씩 늘어납니다.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Working Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "숫자 기억력 테스트 (디지트 스팬)",
  "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "숫자 기억력 테스트 하는 방법",
  "description": "45초 동안 숫자 배열을 기억하고 같은 순서로 입력하는 4단계 방법.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span#step-1",
      "name": "숫자 배열 한 번에 보기",
      "text": "숫자 배열 전체가 한꺼번에 화면에 나타납니다. 처음에는 2.5초 동안 보이고, 맞힐 때마다 0.1초씩(최소 0.8초) 짧아집니다."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span#step-2",
      "name": "2~3자리씩 묶기",
      "text": "전화번호처럼 숫자를 2~3자리 단위(예: '739-281')로 묶어 기억할 덩어리 수를 줄입니다."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span#step-3",
      "name": "속으로 되뇌기",
      "text": "숫자가 사라진 뒤에도 묶음을 속으로 빠르게 되뇌어 기억을 유지합니다(음운 루프)."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ko/drills/memory/short-term-memory/digit-span#step-4",
      "name": "8초 안에 입력",
      "text": "화면 키패드나 키보드 숫자키로 같은 순서대로 입력하고 Enter 또는 확인 버튼으로 제출합니다. Backspace로 지울 수 있고, 입력 시간은 8초입니다."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "숫자 기억력 테스트는 어떻게 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "무작위 숫자 배열이 한꺼번에 잠깐 나타났다 사라지면, 같은 순서(정방향)로 입력합니다. 3자리에서 시작해 맞히면 1자리 늘고(최대 15자리), 틀리거나 8초 안에 입력하지 않으면 1자리 줄어듭니다(최소 3자리). 한 세션은 45초입니다."
      }
    },
    {
      "@type": "Question",
      "name": "숫자 기억력 테스트 점수는 어떻게 계산되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정확히 입력하면 100 × (1 + 0.1 × (자릿수 − 3))점을 얻습니다. 3자리는 100점, 15자리는 220점입니다. 틀려도 점수나 시간이 깎이지 않고 자릿수만 1 줄어듭니다."
      }
    },
    {
      "@type": "Question",
      "name": "숫자 기억력 평균은 몇 자리인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SkillDrills는 사용자 데이터를 수집하지 않으므로 평균이나 백분위를 제시하지 않습니다. 연구 문헌에서는 밀러(1956)가 단기기억 폭을 약 7±2개로 제시했고, 되뇌기와 청킹을 막은 조건에서는 약 4개(Cowan, 2001)로 봅니다. 이 게임은 시간 제한과 자동 난이도 조절이 있어 연구 결과와 직접 비교할 수 없으니, 아래 연습 구간과 자신의 기록을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "거꾸로 따라 하기(역방향)도 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아니요. 이 테스트는 정방향만 있습니다. 역방향 과제는 기억한 숫자를 머릿속에서 뒤집어야 해서 작업기억의 조작 능력을 더 많이 요구하지만, 여기서는 제공하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "웩슬러 지능검사(WAIS)의 숫자 소검사와 같은 검사인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아니요. 비슷한 숫자 따라 하기 형식이지만 WAIS의 숫자 소검사가 아니며, 지능지수(IQ)나 환산 점수를 계산하지 않습니다. 무료 연습용 게임입니다."
      }
    },
    {
      "@type": "Question",
      "name": "음운 루프는 숫자 기억에 어떤 역할을 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "배들리의 작업기억 모델에 따르면 숫자는 말소리 형태로 '음운 저장소'에 잠시 보관되고, 속으로 되뇌는 '내적 시연'으로 유지됩니다. 되뇌지 않으면 약 2초 안에 흐려지기 때문에 숫자가 사라진 뒤 바로 되뇌는 것이 중요합니다."
      }
    },
    {
      "@type": "Question",
      "name": "청킹(Chunking)을 활용하면 왜 숫자 외우기가 쉬워지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "숫자를 전화번호처럼 '839-241'처럼 3자리씩 묶으면 6개의 숫자를 2개의 덩어리로 기억할 수 있습니다. 기억해야 할 단위 수가 줄어 더 긴 배열을 유지하기 쉬워집니다."
      }
    },
    {
      "@type": "Question",
      "name": "틀리면 자릿수가 1개 줄어드는 이유는 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "맞히면 1자리 늘고 틀리면 1자리 줄어드는 1-up/1-down 방식이라 자릿수가 자신의 한계 근처에서 오르내립니다. 맞히면 숫자 표시 시간도 0.1초 짧아지고, 틀리면 0.2초 길어집니다(0.8~2.5초)."
      }
    },
    {
      "@type": "Question",
      "name": "숫자 기억력 훈련이 일상과 학습에 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "보장할 수 없습니다. 연습하면 이 게임 기록은 오를 수 있지만, 일상 기억력이나 학습 능력으로 효과가 옮겨 가는지는 연구마다 결과가 엇갈립니다. 기억력 게임으로 즐기시고, 기억력이 걱정된다면 전문의와 상담하세요."
      }
    },
    {
      "@type": "Question",
      "name": "이 온라인 숫자 기억력 테스트는 무료인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 무료이며 설치나 회원가입 없이 브라우저에서 바로 할 수 있습니다. 화면 키패드(터치·클릭)와 키보드 숫자키 모두 사용할 수 있고, 기록은 브라우저에만 저장됩니다."
      }
    }
  ]
};

const digitSpanGuide = {
  intro: [
  "숫자 기억력 테스트는 잠깐 보인 숫자 배열을 같은 순서로 입력하는 숫자 외우기 게임입니다. 심리학에서 단기기억 폭을 연구할 때 오래 써 온 '숫자 따라 하기(디지트 스팬)' 과제를 연습용으로 만든 것입니다.",
  "이 과제의 배경에는 조지 밀러(George A. Miller, 1956)의 '마법의 숫자 7±2' 연구가 있습니다. 비슷한 숫자 따라 하기 형식이 웩슬러 지능검사(WAIS)에도 들어 있지만, 이 페이지의 게임은 그 검사가 아니며 환산 점수를 계산하지 않습니다.",
  "앨런 배들리(Alan Baddeley, 1974, 2000)의 작업기억 모델에 따르면 숫자 배열은 '음운 루프'를 통해 유지되며, 되뇌지 않으면 약 2초 안에 흐려집니다. 넬슨 코완(Nelson Cowan, 2001)은 되뇌기와 묶기를 막으면 순수 용량이 4개 안팎이라고 보았기 때문에, 긴 배열에는 청킹 전략이 도움이 됩니다.",
  "게임 방식: 3자리에서 시작하며, 숫자 배열 전체가 한꺼번에 나타납니다(처음 2.5초, 맞힐 때마다 0.1초씩 짧아져 최소 0.8초, 틀리면 0.2초 길어짐). 사라진 뒤 8초 안에 화면 키패드나 키보드로 입력합니다. 맞히면 1자리 늘고(최대 15자리), 틀리거나 시간이 지나면 1자리 줄어듭니다(최소 3자리). 45초 동안 점수, 최대 자릿수, 정확도(맞힌 라운드 비율)를 기록하며 입력 반응 시간은 측정하지 않습니다.",
  "데이터 투명성: SkillDrills는 사용자의 점수를 서버에 수집하지 않습니다. 모든 기록은 브라우저 localStorage에만 저장되므로 이 페이지는 사용자 평균, 백분위, 이용자 수를 제시하지 않으며, 인용한 수치는 아래 참고문헌의 연구에서 가져왔습니다."
],
  benchmarks: {
    title: "숫자 기억력 테스트 연습 구간 (SkillDrills 기준, 45초)",
    headers: ["연습 구간", "도달 자릿수", "실수 없이 도달했을 때 점수", "흔한 기억 방식"],
    rows: [
  ["구간 1", "13자리 이상", "약 1,450점 이상", "3~4자리 청킹과 빠른 되뇌기를 함께 사용"],
  ["구간 2", "11~12자리", "약 1,080~1,449점", "3자리 묶음이 안정적"],
  ["구간 3", "9~10자리", "약 750~1,079점", "2~3자리 묶기를 쓰지만 가운데 숫자를 자주 놓침"],
  ["구간 4", "7~8자리", "약 460~749점", "숫자를 하나씩 되뇌며 묶기는 아직 사용하지 않음"],
  ["구간 5", "3~6자리", "460점 미만", "규칙과 표시 속도에 익숙해지는 단계"]
],
    note: "인구 평균이나 WAIS 점수가 아닌 SkillDrills 연습 구간입니다. 점수는 3자리부터 실수 없이 그 자릿수에 도달했을 때의 값입니다(1라운드 점수 = 100 × (1 + 0.1 × (자릿수 − 3))). 틀리면 자릿수가 줄기 때문에 실제 점수는 달라집니다."
  },
  techniques: {
    title: "숫자 기억 폭을 늘리는 전략",
    items: [
  {
    "name": "음성 리듬과 3자리 청킹",
    "desc": "연속된 숫자를 전화번호처럼 3자리 단위(예: '739 - 281 - 405')로 묶습니다 (Miller, 1956). 9개의 숫자가 3개의 덩어리가 되어 기억하기 쉬워집니다.",
    "tips": "각 묶음의 첫 숫자를 속으로 살짝 높여 읽으면 경계가 선명해집니다."
  },
  {
    "name": "속으로 빠르게 되뇌기(음운 루프)",
    "desc": "숫자 묶음을 머릿속으로 빠르게 되뇌어 순환시킵니다 (Baddeley, 2000). 되뇌지 않으면 약 2초 안에 흐려지므로 숫자가 사라진 직후부터 되뇌세요.",
    "tips": "숫자를 하나씩 끊어 읽지 말고 묶음 단위로 이어서 발음하세요."
  },
  {
    "name": "키패드 위 손가락 경로 떠올리기",
    "desc": "숫자 배열을 화면 키패드 위의 손가락 이동 경로로 바꿔 기억합니다 (Logie, 1995). 소리 기억에 공간 기억을 더해 이중으로 저장하는 방법입니다.",
    "tips": "숫자를 보는 동안 키패드 위를 지나가는 선을 머릿속으로 그려 보세요."
  },
  {
    "name": "가운데 숫자 지키기(계열 위치 효과)",
    "desc": "처음 숫자와 마지막 숫자는 비교적 잘 기억되지만 가운데 숫자가 가장 잘 빠집니다. 의식적인 되뇌기는 가운데 묶음에 집중하세요.",
    "tips": "앞 3자리를 먼저 확정하고, 마지막 2자리는 방금 본 기억에 맡기세요."
  }
]
  },
  steps: [
  "45초 세션을 시작하고 화면 중앙에 시선을 고정합니다.",
  "숫자 배열이 한꺼번에 나타나면 바로 2~3자리씩 묶습니다.",
  "숫자가 사라진 뒤 묶음을 속으로 빠르게 되뇝니다.",
  "8초 안에 화면 키패드나 키보드 숫자키로 같은 순서대로 입력하고 Enter로 제출합니다.",
  "맞히면 1자리 늘고 틀리면 1자리 줄어드니, 최대 자릿수와 점수를 자신의 기록과 비교하세요."
],
  audience: "숫자 기억력과 집중력을 키우고 싶은 학생, 공무원 시험이나 적성 검사를 준비하는 수험생, 두뇌 훈련에 관심 있는 모든 사람.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
  related: [
  {
    "href": "/ko/drills/memory/working-memory/n-back",
    "label": "3-Back 작업기억 훈련"
  },
  {
    "href": "/ko/drills/memory/spatial-memory/grid-memorization",
    "label": "순간 기억 테스트 (시각 기억력 검사)"
  },
  {
    "href": "/ko/drills/cognitive/focus/concentration-grid",
    "label": "슐테 테이블 (집중력 격자)"
  },
  {
    "href": "/ko/drills/visual/reaction-speed/light-reaction",
    "label": "반응속도 테스트"
  },
  {
    "href": "/ko/drills/reaction-speed/reflex-training-drill",
    "label": "순발력 테스트 (반사신경 게임)"
  }
]
};

export default function LocalizedDigitSpanPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitSpanClient copy={{
        "h1Keyword": "숫자 기억력 테스트",
        "h1Suffix": " – 숫자 외우기·작업기억 훈련",
        "subtitle": "숫자 배열을 기억하고 같은 순서로 입력",
        "caption": "화면에 나타난 숫자 배열을 기억한 뒤 사라지면 같은 순서로 입력하세요.",
        "statScore": "점수",
        "statTime": "남은 시간",
        "statSpan": "스팬",
        "digitsUnit": "자리",
        "statBest": "최고 기록",
        "hudScore": "점수",
        "hudTime": "시간",
        "memorizeTitle": "숫자 배열 기억하기",
        "evaluating": "평가 중...",
        "startTitle": "디지트 스팬 Pro",
        "startSubtitle": "숫자 기억력 • 작업기억 훈련",
        "countdownSubtitle": "준비하세요",
        "newBest": "최고 기록 갱신",
        "pointsLabel": "점수",
        "statAccuracy": "정확도",
        "statPeakSpan": "최대 스팬",
        "statPerfects": "완벽 성공",
        "btnPlayAgain": "다시 시작",
        "rulesTitle": "훈련 규칙 및 점수 산정 방식",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "숫자 순차 회상",
                        "highlight": "+100 PTS",
                        "result": "화면에 제시된 숫자를 기억하고 키패드로 순서대로 입력"
                },
                {
                        "num": "2",
                        "text": "자릿수 보너스",
                        "highlight": "최대 +120% PTS",
                        "result": "자릿수가 길어질수록 타격당 획득 점수 상승"
                },
                {
                        "num": "3",
                        "text": "오답 / 타임아웃",
                        "highlight": "-1 자리",
                        "result": "틀리거나 8초 내 미입력: 점수·시간 감점 없이 1자리 짧은 새 배열"
                },
                {
                        "num": "4",
                        "text": "적응형 스팬 검사",
                        "highlight": "자동 조절",
                        "result": "맞히면 +1자리, 틀리면 −1자리 (3~15자리)"
                }
        ]
}} />
      <DrillGuide guide={digitSpanGuide} />
      <RelatedDrills />
    </>
  );
}
