import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/reflex-training/peripheral-threat-sweeper';
const title = "주변시야 훈련 게임 | 주변 시야 반응 테스트 | SkillDrills";
const description = "화면 중앙을 보면서 바깥에서 다가오는 표적을 찾아 클릭하는 무료 주변시야 훈련 게임. 시야 인지와 반응 속도를 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["주변시야 훈련", "주변시야 훈련 게임", "주변 시야 테스트", "시야 넓히기", "주변시 훈련", "터널 시야", "주변시야 반응속도", "주변시야 게임"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
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
      "name": "신체 훈련 허브",
      "item": "https://skilldrills.online/ko/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "반사신경 및 순발력",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "주변시야 훈련 게임",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training/peripheral-threat-sweeper"
    }
  ]
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "주변 위협 스위퍼 주변시야 훈련 게임",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  inLanguage: 'ko',
  dateModified: '2026-10-08',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "주변 위협 스위퍼 주변시야 훈련 게임 웹 앱",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas를 지원하는 최신 브라우저',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'ko',
  dateModified: '2026-10-08',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: "주변 위협 스위퍼 주변시야 훈련 게임",
  url,
  description,
  genre: ['Action Game', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ko',
  dateModified: '2026-10-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  {
    "q": "주변시야 훈련 게임은 무엇을 하나요?",
    "a": "화면 중앙의 코어를 보면서 바깥쪽에서 중심으로 다가오는 표적을 찾아 클릭하는 게임입니다. 시선을 한곳에 두고 주변의 움직임을 알아채는 연습이 됩니다. 시야 검사나 치료가 아니라 브라우저 연습 도구입니다."
  },
  {
    "q": "주변시야와 중심시야는 어떻게 다른가요?",
    "a": "중심시야는 시선의 중앙 아주 좁은 범위에서 글자와 세부를 보는 영역이고, 주변시야는 그 바깥에서 움직임과 큰 변화를 알아채는 영역입니다. 이 드릴은 중심에 시선을 두고 주변에서 오는 표적에 반응하는 과제입니다."
  },
  {
    "q": "눈동자를 움직이면 안 되나요?",
    "a": "중앙 코어를 계속 보고 주변을 의식하는 연습이 목적입니다. 눈동자를 돌려 표적을 따라가면 주변시야 연습이 되지 않습니다. 시선 방향은 브라우저가 기록하지 못하므로 스스로 지켜야 합니다."
  },
  {
    "q": "점수와 시간은 어떻게 계산되나요?",
    "a": "표적을 클릭하면 100점에 콤보와 레벨 배수가 곱해지고 시간이 0.6초 늘어납니다. 콤보 배율은 최대 3.0배입니다. 표적이 중앙 코어에 닿거나 빈 곳을 클릭하면 콤보가 초기화되고, 페널티를 켠 경우 0.8초가 줄어듭니다."
  },
  {
    "q": "난이도는 어떻게 올라가나요?",
    "a": "점수가 오를수록 표적의 이동 속도가 최대 520px/s까지 빨라지고 생성 간격이 최소 0.20초까지 짧아집니다. 처음에는 약 1.4초 간격으로 시작해 여유 있게 위치를 익힐 수 있습니다."
  },
  {
    "q": "터널 시야란 무엇인가요?",
    "a": "긴장하거나 한 곳에 몰두하면 주변을 덜 알아채는 현상을 터널 시야라고 부르기도 합니다. 이 게임은 중심에 집중하면서 주변도 놓치지 않는 연습을 하는 놀이입니다. 질환으로 인한 시야 좁아짐은 이 게임으로 판단할 수 없고 안과 진료가 필요합니다."
  },
  {
    "q": "이 훈련으로 시야가 넓어지나요?",
    "a": "시야 범위가 넓어진다고 보장할 수 없습니다. 비슷한 과제를 연습하면 그 과제의 성적이 오를 수 있다는 연구는 있지만(Posner, 1980 등 주의 연구), 이 드릴의 효과는 검증되지 않았습니다. 기록 비교용으로 쓰세요."
  },
  {
    "q": "동체시력 테스트와 같은가요?",
    "a": "아닙니다. 동체시력은 움직이는 물체를 보는 능력을 가리키는 말이고, 이 드릴은 시선을 고정한 채 주변 표적에 반응하는 과제입니다. 움직이는 점을 눈으로 따라가는 연습은 동체시력 테스트 페이지에서 할 수 있습니다."
  },
  {
    "q": "모니터 크기와 거리가 영향을 주나요?",
    "a": "화면이 크고 가까울수록 표적이 시야 바깥쪽에서 나타나고 주변시야를 더 많이 쓰게 됩니다. 같은 거리와 자세에서 기록을 비교해야 점수 변화를 해석할 수 있습니다. 주사율과 입력 지연도 영향을 줄 수 있습니다(Woods et al., 2015)."
  },
  {
    "q": "기록은 어디에 저장되나요?",
    "a": "점수, 정확도, 최고 콤보는 브라우저의 로컬 저장소에 보관되며 이 드릴에서 서버로 올리지 않습니다. 브라우저 데이터를 삭제하면 기록도 사라집니다. 자세한 내용은 개인정보처리방침을 확인하세요."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "주변시야 훈련 게임 하는 방법",
  description: "중앙을 보면서 주변 표적을 처리하는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "중앙 고정",
    "text": "화면 중앙의 코어에 시선을 두고 눈동자를 움직이지 않습니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "주변 알아채기",
    "text": "바깥에서 다가오는 표적의 움직임을 시선 이동 없이 알아챕니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "빠르게 클릭",
    "text": "표적이 코어에 닿기 전에 위치를 찾아 클릭합니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "콤보 유지",
    "text": "실수 없이 이어서 처리해 콤보와 추가 시간을 쌓습니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  "heading": "주변시야 훈련 게임 가이드",
  "intro": [
    "주변 위협 스위퍼는 화면 중앙의 코어를 보면서 바깥에서 다가오는 표적을 클릭하는 브라우저 게임입니다. 시선을 고정한 채 주변의 움직임을 알아채는 연습이 됩니다.",
    "시선을 옮기지 않고도 주의를 화면의 다른 위치로 돌릴 수 있다는 연구가 있습니다(Posner, 1980). 대비가 큰 움직이는 표적은 주변에서도 눈에 잘 띕니다(Treisman & Gelade, 1980). 이 드릴은 이런 과제를 게임으로 만든 것입니다.",
    "처음에는 약 1.4초 간격으로 천천히 시작해 표적 위치를 익히고, 점수가 오를수록 표적 속도(최대 520px/s)와 생성 간격(최소 0.20초)이 빨라집니다. 클릭할 때는 먼저 크게 이동하고 마지막에 작게 보정하는 방식이 효율적입니다(Woodworth, 1899; Fitts, 1954).",
    "결과는 연습 기록입니다. 시야 검사, 진단, 치료를 대신하지 않습니다. 시야가 좁아졌거나 이상이 느껴지면 안과 진료를 받으세요."
  ],
  "benchmarks": {
    "title": "점수 구간 참고표",
    "headers": [
      "단계",
      "점수 구간",
      "연습 포인트"
    ],
    "rows": [
      [
        "1단계",
        "6,000점 미만",
        "시선을 중앙에 두는 습관 만들기"
      ],
      [
        "2단계",
        "6,000 – 10,999점",
        "표적이 코어에 닿기 전에 처리하기"
      ],
      [
        "3단계",
        "11,000 – 16,999점",
        "콤보를 끊지 않고 이어가기"
      ],
      [
        "4단계",
        "17,000 – 23,999점",
        "빠른 표적에서도 시선 고정 유지하기"
      ],
      [
        "5단계",
        "24,000점 이상",
        "여러 표적을 연속으로 처리하기"
      ]
    ],
    "note": "이 구간은 SkillDrills가 연습용으로 나눈 점수 범위입니다. 사용자 통계, 백분위, 시야 검사 기준이 아닙니다."
  },
  "techniques": {
    "title": "점수를 올리는 4가지 연습법",
    "items": [
      {
        "name": "중앙에 시선 고정하기",
        "desc": "코어를 보면서 눈동자를 움직이지 않는 것이 이 드릴의 핵심입니다. 표적을 눈으로 따라가면 연습 목적에서 벗어납니다.",
        "tips": "눈이 자꾸 움직이면 속도를 낮춰 습관부터 만드세요."
      },
      {
        "name": "전체를 한 번에 보기",
        "desc": "한 방향에 집중하지 말고 화면 전체를 흐릿하게 한꺼번에 본다는 느낌으로 보세요. 움직임이 있으면 먼저 알아챌 수 있습니다.",
        "tips": "눈의 힘을 빼고 초점을 부드럽게 둡니다."
      },
      {
        "name": "크게 이동하고 작게 보정하기",
        "desc": "표적 위치를 알면 커서를 한 번에 가까이 옮기고 마지막에만 속도를 줄여 클릭하세요.",
        "tips": "코어 근처에서 서두르다 빗맞히면 콤보가 사라집니다."
      },
      {
        "name": "짧게 하고 쉬기",
        "desc": "눈이 피로하면 집중이 급격히 떨어집니다. 짧은 세션을 반복하고 화면에서 눈을 떼어 쉬세요.",
        "tips": "통증이나 어지럼이 있으면 중단합니다."
      }
    ]
  },
  "steps": [
    "화면 중앙 코어를 보며 편하게 앉습니다.",
    "바깥에서 다가오는 표적을 눈동자를 움직이지 않고 알아챕니다.",
    "표적이 코어에 닿기 전에 클릭합니다.",
    "콤보와 추가 시간을 유지하며 점수를 올립니다."
  ],
  "audience": "주변 움직임에 대한 반응을 게임으로 연습해 보고 싶은 사용자와, 시선을 고정한 채 주변을 보는 감각을 훈련해 보려는 게이머.",
  faqs,
  sources: pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function PeripheralThreatSweeperKoPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <PeripheralThreatSweeperClient
        copy={{
          title: "주변시야 훈련 게임",
          subtitle: "중앙을 보며 주변 위협 찾아내기",
          hudLabels: {
            score: "현재 점수",
            time: "남은 시간",
            bestScore: "최고 점수",
            bestCombo: "최대 콤보",
            accuracy: "요격 정확도",
            sweeps: "요격 횟수",
            breaches: "코어 침공",
            peakLevel: "도달 레벨",
            getReady: "준비"
          },
          rulesTitle: "진행 규칙과 점수 계산",
          rulesItems: [
            {
              "title": "표적 클릭과 시간 연장",
              "text": "바깥에서 다가오는 표적을 클릭하면 100점(콤보와 레벨 배수 적용)과 0.6초의 추가 시간을 얻습니다."
            },
            {
              "title": "콤보 배율",
              "text": "실수 없이 연속으로 처리하면 콤보 배율이 최대 3.0배까지 오릅니다."
            },
            {
              "title": "점진적 난이도 상승",
              "text": "점수가 오를수록 표적 속도(최대 520px/s)가 빨라지고 생성 간격(최소 0.20초)이 짧아집니다."
            },
            {
              "title": "코어 침범과 빗맞힘",
              "text": "표적이 중앙 코어에 닿거나 빈 곳을 클릭하면 콤보가 초기화되고, 페널티를 켠 경우 0.8초가 줄어듭니다."
            }
          ],
          aboutTitle: "주변시야 훈련 안내",
          aboutSections: [
            {
              "title": "시선을 고정한 채 주의 옮기기",
              "subtitle": "포스너(Posner, 1980)의 주의 연구",
              "content": "눈을 움직이지 않고도 주의를 화면의 다른 위치로 돌릴 수 있다는 연구가 있습니다. 중앙을 보면서 주변 표적을 알아채는 과제입니다."
            },
            {
              "title": "눈에 띄는 움직이는 표적",
              "subtitle": "트리즈먼(Treisman, 1980)의 시각 탐색 연구",
              "content": "대비가 큰 움직이는 표적은 주변 시야에서도 눈에 잘 띕니다. 화면 전체를 넓게 보면 새 표적을 먼저 알아챌 수 있습니다."
            },
            {
              "title": "크게 이동하고 작게 보정하기",
              "subtitle": "우드워스(1899)와 피츠(1954)의 연구",
              "content": "빠른 클릭은 먼저 크게 이동한 뒤 마지막에 작게 보정하는 두 단계로 설명됩니다. 코어 근처에서는 속도를 줄여 정확히 누르세요."
            },
            {
              "title": "한 번에 여러 표적 처리하기",
              "subtitle": "생성 간격이 짧아지는 후반 구간",
              "content": "후반에는 표적이 연달아 나타나 주의를 나눠야 합니다. 시선은 중앙에 두고 가까운 표적부터 처리하는 연습이 됩니다."
            }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
