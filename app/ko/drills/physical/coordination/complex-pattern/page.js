import ComplexPatternClient from '@/app/drills/physical/coordination/complex-pattern/ComplexPatternClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ko/drills/physical/coordination/complex-pattern';
const TITLE = "도형 순서 기억 게임 | 경로 기억해서 그리기 | SkillDrills";
const DESCRIPTION = "도형 순서 기억 게임: 잠깐 보였다 사라지는 경로를 외운 뒤 시작점부터 끝점까지 마우스로 그대로 그리세요. 노드 3~8개, 45초 동안 일치율로 판정하는 무료 브라우저 연습으로, 설치 없이 바로 시작할 수 있습니다.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "도형 순서 기억 게임",
  "도형 순서 기억하기 연습",
  "경로 따라 그리기",
  "경로 기억 게임",
  "패턴 기억 게임"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/complex-pattern'),
  },
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    "q": "도형 순서 기억 게임은 어떻게 하나요?",
    "a": "경로가 잠깐 표시된 뒤 사라집니다. 하늘색 시작 노드 안에서 마우스 버튼을 누른 채 기억한 순서대로 점을 지나 자홍색 끝 노드에서 버튼을 놓으면, 그린 선이 원래 경로와 비교되어 성공 여부가 결정됩니다."
  },
  {
    "q": "일치율(%)은 어떻게 계산되나요?",
    "a": "그린 선과 원래 경로를 같은 개수의 점으로 나눈 뒤, 서로 가장 가까운 점까지의 평균 거리(픽셀)를 구해 100에서 뺍니다. 시작점이나 끝점이 노드에서 약 45px 이상 벗어나면 실패로 처리됩니다."
  },
  {
    "q": "레벨이 오르면 무엇이 달라지나요?",
    "a": "경로의 점 수가 3개에서 8개로 늘고, 표시 시간이 2.0초에서 0.6초로 줄며, 성공에 필요한 일치율이 50%에서 85%로 올라갑니다. 레벨 3부터 지그재그, 레벨 4부터 나선형 경로가 나올 수 있습니다."
  },
  {
    "q": "틀리면 감점이 있나요?",
    "a": "없습니다. 기준 일치율에 못 미치면 콤보 배율이 1.0배로 돌아갈 뿐, 점수나 남은 시간은 줄지 않습니다. 콤보 배율은 연속 성공에 따라 최대 3.0배까지 올라갑니다."
  },
  {
    "q": "한 판은 얼마나 걸리나요?",
    "a": "45초로 고정되어 있습니다. 레벨은 매 판 1에서 다시 시작합니다."
  },
  {
    "q": "AI 역량검사의 도형 순서 기억하기와 같은 과제인가요?",
    "a": "아닙니다. 이 게임은 역량검사 문항을 재현하거나 대비용으로 만든 것이 아니며 형식과 채점 방식도 다릅니다. 짧게 본 경로를 기억해 그리는 일반적인 연습으로만 이용하세요."
  },
  {
    "q": "휴대폰에서도 할 수 있나요?",
    "a": "마우스 드래그로 조작하는 게임이라 마우스가 연결된 PC 브라우저에서 이용하는 것을 권장합니다."
  },
  {
    "q": "무료인가요? 기록은 어디에 저장되나요?",
    "a": "무료이며 설치나 회원가입이 필요 없습니다. 최고 점수 같은 기록은 사용 중인 브라우저에만 저장됩니다."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills 홈", item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: "피지컬 테스트", item: 'https://skilldrills.online/ko/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "도형 순서 기억 게임", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "도형 순서 기억 게임",
  description: DESCRIPTION,
  url: PAGE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "HTML5 Canvas를 지원하는 최신 브라우저와 마우스",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  inLanguage: 'ko',
  dateModified: '2026-11-10',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  dateModified: '2026-11-10',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const guide = {
  "heading": "도형 순서 기억 게임 가이드",
  "intro": [
    "도형 순서 기억 게임은 짧게 표시된 경로를 기억해 마우스로 다시 그리는 무료 브라우저 연습입니다. 경로가 사라지면 하늘색 시작 노드에서 드래그를 시작해 기억한 순서대로 점을 지나 자홍색 끝 노드에서 버튼을 놓습니다. 그린 선이 원래 경로와 얼마나 가까운지가 일치율(%)로 계산되고, 기준을 넘으면 점수와 콤보가 올라갑니다.",
    "한 판은 45초입니다. 레벨은 매 판 1에서 시작해 점수와 연속 성공에 따라 오르며, 레벨 15 부근에서 점 8개, 표시 시간 0.6초, 기준 일치율 85%에 도달합니다. 시공간 정보를 잠시 붙잡아 두는 작업기억(Baddeley & Hitch, 1974)과 그 용량이 대략 4개 항목 안팎이라는 연구(Cowan, 2001)를 난이도 설계의 참고로 삼았습니다."
  ],
  "techniques": {
    "title": "더 정확하게 그리는 요령",
    "items": [
      {
        "name": "점 대신 모양으로 기억하기",
        "desc": "점이 5개 이상이면 하나씩 외우기보다 'N자', '삼각형+직선'처럼 큰 모양 두세 덩어리로 묶어 기억하는 편이 쉽습니다.",
        "tips": "표시 시간 동안 시작점과 끝점 위치를 먼저 확인하고, 나머지는 전체 윤곽으로 잡으세요."
      },
      {
        "name": "시작과 끝을 정확히",
        "desc": "시작 노드에서 너무 멀리(약 45px 이상) 떨어져 시작하거나 끝 노드에서 벗어나 손을 떼면 모양이 맞아도 실패로 처리됩니다.",
        "tips": "드래그를 시작하기 전에 커서가 하늘색 노드 안에 있는지 확인하세요."
      },
      {
        "name": "꺾이는 지점에서 속도 줄이기",
        "desc": "직선 구간은 빠르게, 꺾이는 점 근처에서는 천천히 움직이면 지나치는 실수가 줄어듭니다.",
        "tips": "급하게 그리기보다 일정한 속도로 한 번에 그리는 것이 일치율에 유리합니다."
      }
    ]
  },
  "steps": [
    "시작 버튼을 누르고 카운트다운이 끝날 때까지 기다립니다.",
    "화면에 표시되는 경로의 모양과 순서를 기억합니다.",
    "경로가 사라지면 하늘색 시작 노드 안에서 마우스 버튼을 누릅니다.",
    "기억한 순서대로 점을 지나 자홍색 끝 노드에서 버튼을 놓습니다."
  ],
  "audience": "짧게 본 모양을 기억해 손으로 옮기는 연습을 하고 싶은 사람, 마우스로 정확한 선을 그리는 감각을 익히고 싶은 PC 사용자.",
  faqs: faqItems,
  sources: pickSources('baddeley1974', 'cowan2001', 'lashley1951', 'woodworth1899'),
};

export default function ComplexPatternPageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComplexPatternClient
        copy={{
  "title": "도형 순서 기억 게임",
  "subtitle": "경로를 외우고 마우스로 다시 그리기",
  "rulesTitle": "도형 순서 기억 게임 규칙",
  "rules": [
    {
      "title": "경로 외우기",
      "text": "점과 선으로 된 경로가 잠깐 표시됩니다. 사라지기 전에 모양과 순서를 기억하세요."
    },
    {
      "title": "시작점에서 드래그",
      "text": "하늘색 시작 노드 안에서 마우스 버튼을 누른 채 모든 점을 지나 자홍색 끝 노드에서 버튼을 놓습니다."
    },
    {
      "title": "일치율 판정",
      "text": "그린 선이 원래 경로와 기준 일치율(처음 50%, 레벨이 오르면 최대 85%)을 넘고 시작·끝 노드에 맞으면 성공입니다."
    },
    {
      "title": "실패해도 감점 없음",
      "text": "기준에 못 미치면 콤보 배율만 1.0배로 돌아갑니다. 점수와 45초 제한 시간은 깎이지 않습니다."
    }
  ],
  "aboutTitle": "도형 순서 기억 게임 소개",
  "aboutHeading": "보고, 기억하고, 그대로 그리기",
  "aboutText": "도형 순서 기억 게임은 화면에 잠깐 나타난 경로를 기억해 두었다가, 경로가 사라진 뒤 마우스 드래그로 같은 모양을 다시 그리는 45초 연습입니다. 처음에는 점 3개짜리 경로가 2초 동안 보이고, 레벨이 오를수록 점이 8개까지 늘고 표시 시간은 0.6초까지 짧아지며 지그재그·나선형 경로가 섞입니다."
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/complex-pattern" />
    </>
  );
}
