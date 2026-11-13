import NBackClient from '@/app/drills/memory/working-memory/n-back/NBackClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "엔백 게임 | N-back 작업기억 훈련 | SkillDrills",
  description: "무료 엔백 게임: 화면에 하나씩 나오는 글자가 3개 전 글자와 같은지 판단하세요. 정답 8개마다 4-back, 5-back으로 올라가는 브라우저 N-back 작업기억 훈련으로 엔백 연습을 시작해 보세요.",
  keywords: ['엔백 게임', '엔백 연습', '엔백 훈련', '엔백 테스트', 'N-back', '작업기억 훈련', '듀얼 엔백'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "엔백 게임 | N-back 작업기억 훈련 | SkillDrills",
    description: "글자가 N개 전 글자와 같은지 판단하는 무료 엔백 게임. 3-back에서 시작해 단계가 오르는 브라우저 작업기억 훈련입니다.",
    type: "website",
    url: "https://skilldrills.online/ko/drills/memory/working-memory/n-back",
    siteName: "SkillDrills",
    locale: "ko_KR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "엔백 게임 | N-back 작업기억 훈련 | SkillDrills",
    description: "글자가 N개 전 글자와 같은지 판단하는 무료 엔백 게임. 3-back에서 시작해 단계가 오르는 브라우저 작업기억 훈련입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ko/drills/memory/working-memory/n-back",
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
};

const appDescription = "화면에 하나씩 나오는 글자가 N개 전 글자와 같은지 '일치/불일치'로 판단하는 무료 브라우저 엔백 게임. 3-back에서 시작하며 정답 8개마다 한 단계씩 올라갑니다.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "기억력 훈련", "item": "https://skilldrills.online/ko/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "작업기억", "item": "https://skilldrills.online/ko/drills/memory/working-memory" },
    { "@type": "ListItem", "position": 4, "name": "엔백 게임", "item": "https://skilldrills.online/ko/drills/memory/working-memory/n-back" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "엔백 게임 (N-back 작업기억 훈련)",
  "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "엔백 게임 (N-back 작업기억 훈련)",
  "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back",
  "description": appDescription,
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Working Memory", "N-Back"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "엔백 게임 (N-back 작업기억 훈련)",
  "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "엔백 게임 하는 방법",
  "description": "글자를 N개 전 글자와 비교해 일치/불일치를 고르는 4단계.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back#step-1",
      "name": "처음 3글자 외우기",
      "text": "시작하면 처음 3글자는 비교할 대상이 없으므로 외우기만 합니다. 이 동안에는 시간이 줄지 않습니다."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back#step-2",
      "name": "N개 전 글자와 비교",
      "text": "새 글자가 나오면 정확히 N개 전(처음에는 3개 전) 글자와 같은지 확인합니다."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back#step-3",
      "name": "일치 또는 불일치 누르기",
      "text": "같으면 '일치', 다르면 '불일치' 버튼을 클릭하거나 탭합니다. 응답 시간은 2초에서 시작합니다."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ko/drills/memory/working-memory/n-back#step-4",
      "name": "머릿속 목록 갱신",
      "text": "판단 후에는 가장 오래된 글자를 버리고 새 글자를 목록 끝에 붙여 최근 N개를 유지합니다."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "엔백 게임은 어떻게 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "알파벳 글자가 하나씩 나옵니다. 각 글자가 정확히 N개 전에 나온 글자와 같으면 '일치', 다르면 '불일치'를 누르세요. 정답마다 +150점입니다. 처음 N개 글자는 비교 대상이 없어 외우기만 하며, 이 동안에는 시간이 줄지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "몇 back부터 시작하고 어떻게 올라가나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "3-back에서 시작합니다. 1,200점(정답 8개)마다 한 단계씩 올라가 4-back, 5-back이 되며, 다음 글자부터 바로 새 단계 기준으로 비교합니다. 틀려도 단계는 내려가지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "응답 시간과 제한 시간은 얼마인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "글자마다 응답 시간은 2초이고, 단계가 오를 때마다 0.1초씩 줄어 최소 1.2초까지 짧아집니다. 세션 시계는 45초이며 처음 N글자를 외우는 동안에는 멈춰 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "틀리거나 응답하지 못하면 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "감점이나 시간 차감은 없습니다. 오답과 무응답은 정확도에서 실패로 기록되고 다음 글자로 넘어갑니다. 일치 글자는 대략 3개 중 1개꼴로 나오므로 '불일치' 판단도 똑같이 중요합니다."
      }
    },
    {
      "@type": "Question",
      "name": "듀얼 엔백과 같은 건가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 이 게임은 글자 하나만 추적하는 싱글 N-back입니다. 듀얼 엔백은 화면 위치와 소리처럼 두 가지 자극을 동시에 비교하는 변형이며, 여기서는 제공하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "키보드로 할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "현재는 화면의 '일치'와 '불일치' 버튼을 마우스로 클릭하거나 터치로 탭해 응답합니다. 키보드 단축키는 지원하지 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "엔백 훈련을 하면 IQ가 오르나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "확립되지 않았습니다. Jaeggi 등(2008)이 N-back 훈련과 유동성 지능의 관계를 보고했지만 이후 연구 결과가 엇갈려 지능 향상 효과는 입증되지 않았습니다. 연습하면 이 과제 자체의 점수는 오를 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수는 저장되나요? 의학적 의미가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "최고 점수와 최고 단계는 이 브라우저의 localStorage에만 저장되며 서버로 전송되지 않습니다."
      }
    }
  ]
};

const nBackClientCopyKo = {
  h1Keyword: "엔백 게임",
  h1Suffix: " – N-back 작업기억 훈련",
  subtitle: "글자가 N개 전 글자와 같은지 판단하세요. 3-back에서 시작합니다.",
  statScore: "점수",
  statTime: "남은 시간",
  statLevel: "단계",
  statBest: "최고 점수",
  hudScore: "점수",
  hudTime: "남은 시간",
  modeSuffix: "-Back",
  memorizingText: "처음 {n}글자를 외우는 중...",
  btnMatch: "일치",
  btnNoMatch: "불일치",
  startTitle: "엔백 게임",
  startSubtitle: "작업기억 • 3-back부터",
  countdownSubtitle: "준비하세요",
  newBest: "최고 기록 달성",
  statPoints: "점수",
  statAccuracy: "정확도",
  statPeakLevel: "최고 단계",
  statPerfects: "정답",
  btnPlayAgain: "다시 시작",
  rulesTitle: "규칙 & 점수 방식",
  rulesItems: [
    { num: "1", text: "일치/불일치 판단 (N개 전 글자)", highlight: "+150 PTS", result: "정답 하나마다" },
    { num: "2", text: "단계 상승", highlight: "3-Back → 4-Back+", result: "1,200점(정답 8개)마다" },
    { num: "3", text: "응답 시간 단축", highlight: "2.0초 → 최소 1.2초", result: "단계마다 0.1초씩 짧아짐" },
    { num: "4", text: "무응답", highlight: "감점 없음", result: "점수·시간 차감 없이 실패로만 기록" },
    { num: "5", text: "오답", highlight: "감점 없음", result: "단계 유지, 45초 시계는 그대로 진행" }
  ]
};

const guideKo = {
  intro: [
    "엔백 게임은 화면에 하나씩 나오는 글자가 정확히 N개 전에 나온 글자와 같은지 판단하는 무료 브라우저 N-back 작업기억 훈련입니다. 최근 N개 글자를 머릿속에 유지하면서 새 글자가 올 때마다 목록을 갱신해야 하므로, 단순 암기보다 작업기억의 '갱신'을 많이 요구합니다(Kirchner, 1958).",
    "게임은 3-back에서 시작합니다. 처음 3글자는 외우기만 하고, 그 뒤부터 글자마다 '일치' 또는 '불일치'를 누릅니다. 정답은 +150점이며 1,200점(정답 8개)마다 4-back, 5-back으로 올라갑니다. 응답 시간은 2초에서 시작해 단계마다 0.1초씩 줄어 최소 1.2초가 됩니다.",
    "세션 시계는 45초이며 처음 글자를 외우는 동안에는 멈춥니다. 오답이나 무응답에는 감점이 없고 단계도 내려가지 않으며, 정확도에만 실패로 기록됩니다. 이 게임은 글자만 사용하는 싱글 N-back이며 듀얼 엔백(위치+소리)은 아닙니다. 입력은 화면 버튼 클릭 또는 터치입니다.",
    "데이터 투명성: 점수는 이 브라우저의 localStorage에만 저장되며 서버로 전송되지 않습니다. 따라서 이 사이트는 사용자 평균이나 순위를 게시하지 않습니다."
  ],
  benchmarks: {
    title: "SkillDrills 연습 구간 (점수 = 정답 수 × 150점)",
    headers: ["연습 구간", "정답 수", "점수", "도달 단계"],
    rows: [
      ["입문", "0~3개", "0~450점", "3-back. 규칙과 응답 리듬에 익숙해지는 단계"],
      ["기본", "4~7개", "600~1,050점", "3-back 유지. 최근 3글자 목록을 안정적으로 갱신"],
      ["숙련", "8~15개", "1,200~2,250점", "4-back 도달, 응답 시간 1.9초"],
      ["상급", "16개 이상", "2,400점 이상", "5-back 이상, 응답 시간 1.8초 이하"]
    ],
    note: "이 표는 이 게임의 채점 규칙에서 계산한 SkillDrills 연습 구간이며, 인구 규준이 아닙니다."
  },
  techniques: {
    title: "엔백 게임 요령",
    items: [
      { name: "작은 소리로 되뇌기", desc: "최근 N개 글자를 일정한 리듬으로 속으로 반복합니다(예: B-M-T → M-T-R). 새 글자가 오면 맨 앞 글자와 비교하고 버립니다.", tips: "글자 이름을 짧게 발음하면 리듬을 유지하기 쉽습니다." },
      { name: "가까운 글자에 속지 않기", desc: "1~2개 전에 나온 글자는 익숙하게 느껴지지만 정답이 아닙니다. 정확히 N개 전인지 확인하세요.", tips: "익숙함만으로 '일치'를 누르지 마세요." },
      { name: "'불일치'도 적극적으로", desc: "일치 글자는 대략 3개 중 1개꼴입니다. 확신이 없을 때 응답을 미루면 무응답 실패가 됩니다.", tips: "응답 시간 안에 반드시 하나를 고르세요." },
      { name: "놓치면 바로 다시 시작", desc: "순서를 잃었으면 과거를 떠올리려 하지 말고 지금 글자부터 다시 목록을 쌓습니다.", tips: "N글자가 지나면 다시 정확하게 비교할 수 있습니다." }
    ]
  },
  steps: [
    "시작 버튼을 누르고 3초 카운트다운을 기다립니다.",
    "처음 3글자를 외웁니다(시간이 줄지 않음).",
    "이후 글자마다 3개 전 글자와 같으면 '일치', 다르면 '불일치'를 누릅니다.",
    "정답 8개마다 4-back, 5-back으로 올라가며 응답 시간이 짧아집니다.",
    "45초가 끝나면 점수, 최고 단계, 정확도를 확인합니다."
  ],
  audience: "엔백 연습이나 엔백 훈련을 브라우저에서 바로 해 보고 싶은 사람, 작업기억 과제를 체험해 보려는 학생, 짧은 두뇌 게임을 찾는 모든 사용자.",
  faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text })),
  sources: pickSources('baddeley1974', 'cowan2001'),
  related: [
    { href: "/ko/drills/memory/spatial-memory/path-tracing", label: "코르시 블록 테스트" },
    { href: "/ko/drills/memory/spatial-memory/grid-memorization", label: "순간 기억 테스트" },
    { href: "/ko/drills/memory/spatial-memory/object-location", label: "공간 기억력 테스트" },
    { href: "/ko/drills/memory/short-term-memory/digit-span", label: "숫자 기억력 테스트" },
    { href: "/ko/drills/memory/short-term-memory/word-recall", label: "단어 기억력 테스트" }
  ]
};

export default function NBackPageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NBackClient copy={nBackClientCopyKo} />

      <DrillGuide guide={guideKo} />

      <RelatedDrills />
    </>
  );
}
