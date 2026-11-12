import CrossBodyMovementClient from '@/app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ko/drills/physical/coordination/cross-body-movement';
const TITLE = "눈 손 협응력 테스트 | 화면 가로지르기 마우스 게임 | SkillDrills";
const DESCRIPTION = "눈 손 협응력 테스트: 화면 한쪽의 시작 노드에서 반대쪽 노드까지 좁은 통로를 벗어나지 않고 마우스를 움직이세요. 45초 동안 통로가 점점 좁아지는 무료 브라우저 게임으로, 설치 없이 바로 플레이할 수 있습니다.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "눈 손 협응력 테스트",
  "협응력 게임",
  "협응력 테스트",
  "마우스 협응 게임"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/cross-body-movement'),
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
    "q": "눈 손 협응력 테스트는 어떻게 하나요?",
    "a": "화면 한쪽 가장자리의 하늘색 노드에 커서를 올리면 연결이 시작됩니다. 두 노드를 잇는 직선 주변의 통로를 벗어나지 않고 반대편 자홍색 노드에 닿으면 득점합니다. 클릭은 필요 없습니다."
  },
  {
    "q": "통로를 벗어나면 어떻게 되나요?",
    "a": "그 시도는 실패로 끝나고 새 노드 쌍이 나타납니다. 콤보 배율이 1.0배로 돌아가지만 점수와 남은 시간은 줄지 않습니다."
  },
  {
    "q": "레벨이 오르면 무엇이 달라지나요?",
    "a": "통로 허용 폭(선에서 떨어질 수 있는 거리)이 10px에서 4px로, 노드 반지름이 16px에서 8px로 줄고, 노드가 화면 가장자리에 가까워져 이동 거리가 길어집니다. 성공 한 번당 기본 점수도 10점에서 40점으로 오릅니다."
  },
  {
    "q": "점수는 어떻게 계산되나요?",
    "a": "도착할 때마다 레벨에 따른 기본 점수에 콤보 배율을 곱해 더합니다. 콤보 배율은 연속 성공에 따라 최대 3.0배까지 오릅니다."
  },
  {
    "q": "한 판은 얼마나 걸리나요?",
    "a": "45초로 고정되어 있으며, 레벨은 매 판 1에서 시작합니다."
  },
  {
    "q": "협응력을 평가하는 검사인가요?",
    "a": "아닙니다. 마우스 조작 연습용 게임이며, 아이의 발달이나 운동 기능을 평가하거나 치료 효과를 주는 도구가 아닙니다."
  },
  {
    "q": "휴대폰에서도 할 수 있나요?",
    "a": "마우스로 조작하도록 만든 게임이라 마우스가 연결된 PC 브라우저를 권장합니다. 게임 중 Esc 키를 누르면 종료됩니다."
  },
  {
    "q": "무료인가요?",
    "a": "무료이며 설치나 회원가입이 필요 없습니다. 기록은 사용 중인 브라우저에만 저장됩니다."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills 홈", item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: "피지컬 테스트", item: 'https://skilldrills.online/ko/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "눈 손 협응력 테스트", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "눈 손 협응력 테스트",
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
  "heading": "눈 손 협응력 테스트 가이드",
  "intro": [
    "눈 손 협응력 테스트는 화면을 보면서 마우스 커서를 좁은 통로 안으로 정확히 움직이는 무료 브라우저 게임입니다. 한쪽 가장자리의 하늘색 노드에 커서를 올린 뒤, 두 노드를 잇는 직선에서 벗어나지 않게 반대편 자홍색 노드까지 이동하면 득점합니다. 통로를 벗어나면 그 시도는 실패하고 새 노드 쌍이 나타납니다.",
    "한 판은 45초이며 레벨은 매 판 1에서 시작합니다. 레벨이 오를수록 통로 허용 폭이 10px에서 4px로, 노드 반지름이 16px에서 8px로 줄고 노드가 화면 가장자리에 가까워집니다. 거리가 길고 목표가 좁을수록 이동이 어려워진다는 피츠의 법칙(Fitts, 1954)을 난이도 설계의 참고로 삼았습니다. 이 게임은 마우스 조작 연습이며 발달이나 운동 기능을 평가·진단하는 검사가 아닙니다."
  ],
  "techniques": {
    "title": "통로를 벗어나지 않는 요령",
    "items": [
      {
        "name": "목표를 먼저 보기",
        "desc": "시작 노드에 커서를 올리기 전에 반대편 노드의 위치를 먼저 확인하면 처음 방향을 정확히 잡을 수 있습니다.",
        "tips": "시작 노드에 닿는 순간 연결이 시작되므로, 시작 노드 쪽으로 다가갈 때부터 진행 방향을 생각하세요."
      },
      {
        "name": "일정한 속도로 직선 유지",
        "desc": "빠르게 휘두르면 끝에서 흔들려 통로를 벗어나기 쉽습니다. 처음부터 끝까지 비슷한 속도로 곧게 움직이세요.",
        "tips": "통로가 4px까지 좁아지는 높은 레벨에서는 속도를 조금 낮추는 편이 콤보 유지에 유리합니다."
      },
      {
        "name": "도착 직전 감속",
        "desc": "빠르게 접근한 뒤 목표 근처에서 천천히 마무리하는 움직임(Woodworth, 1899)이 작은 노드를 정확히 맞히는 데 도움이 됩니다.",
        "tips": "노드 바로 앞에서 손목 힘을 빼고 짧게 멈추듯 도착하세요."
      }
    ]
  },
  "steps": [
    "시작 버튼을 누르고 카운트다운을 기다립니다.",
    "반대편 자홍색 노드의 위치를 확인합니다.",
    "하늘색 시작 노드에 커서를 올려 연결을 시작합니다.",
    "통로를 벗어나지 않게 자홍색 노드까지 커서를 이동합니다."
  ],
  "audience": "마우스를 길게, 곧게 움직이는 감각을 연습하고 싶은 PC 사용자와 게이머.",
  faqs: faqItems,
  sources: pickSources('carey1996', 'fitts1954', 'woodworth1899'),
};

export default function CrossBodyMovementPageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CrossBodyMovementClient
        copy={{
  "title": "눈 손 협응력 테스트",
  "subtitle": "통로를 벗어나지 않고 화면 반대편까지",
  "rulesTitle": "눈 손 협응력 테스트 규칙",
  "rules": [
    {
      "title": "시작 노드에 올리기",
      "text": "화면 한쪽 가장자리의 하늘색 시작 노드에 커서를 올리면 연결이 시작됩니다. 클릭할 필요는 없습니다."
    },
    {
      "title": "통로 따라 이동",
      "text": "두 노드를 잇는 직선 주변의 통로 안에서 반대편 자홍색 노드까지 커서를 움직입니다."
    },
    {
      "title": "도착하면 득점",
      "text": "통로를 벗어나지 않고 자홍색 노드에 닿으면 점수를 얻고 연속 성공 콤보가 오릅니다."
    },
    {
      "title": "이탈 시 콤보 리셋",
      "text": "통로를 벗어나면 그 시도는 실패로 끝나고 새 노드 쌍이 나타나며, 콤보 배율만 1.0배로 돌아갑니다. 점수와 시간은 깎이지 않습니다."
    }
  ],
  "aboutTitle": "눈 손 협응력 테스트 소개",
  "aboutHeading": "좁은 통로를 따라 화면을 가로지르기",
  "aboutText": "이 게임은 화면 왼쪽과 오른쪽 가장자리에 하나씩 나타나는 두 노드를 마우스로 잇는 45초 연습입니다. 두 노드의 높이가 무작위라 경로는 대각선이나 수평이 되며, 레벨이 오를수록 통로 허용 폭이 10px에서 4px로 좁아지고 노드가 작아지면서 화면 가장자리 쪽으로 이동해 이동 거리가 길어집니다."
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/cross-body-movement" />
    </>
  );
}
