import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/peripheral-ping-pursuit';
const title = "주변시 훈련 | 중심을 보며 주변 알아채기 | SkillDrills";
const description = "화면 가운데 십자선에 시선을 둔 채, 화면 곳곳에 잠깐 깜빡이는 점을 눈을 돌리지 않고 알아채는 무료 주변시 훈련. 속도와 시간을 조절할 수 있습니다.";

export const metadata = {
  title,
  description,
  keywords: ["주변시 훈련", "주변시 연습", "주변 시야 게임", "중심 고정 훈련", "fps 주변시", "시선 고정 연습"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "홈", item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: "드릴 목록", item: 'https://skilldrills.online/ko/drills' },
    { '@type': 'ListItem', position: 3, name: "시각 추적 및 안구 운동", item: 'https://skilldrills.online/ko/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "주변시 훈련", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "주변시 훈련",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  inLanguage: 'ko',
  dateModified: '2026-11-12',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "주변시 훈련 하는 방법",
  description: "가운데 십자선에 시선을 고정한 채 주변에 깜빡이는 점을 알아채는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "편한 자세 잡기",
    "text": "화면에서 편한 거리를 두고 앉아 어깨와 목의 힘을 뺍니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "십자선에 시선 고정",
    "text": "세션이 시작되면 화면 가운데 십자선을 바라보고 시선을 그대로 둡니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "눈을 돌리지 않고 알아채기",
    "text": "화면 어딘가에 점이 잠깐 깜빡이면 눈을 돌리지 말고 주변 시야로만 알아챕니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "설정은 하나씩",
    "text": "편안해지면 속도를 올리거나 선 숨기기·무작위 속도를 한 번에 하나씩 켭니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "주변시 훈련은 어떻게 진행되나요?",
    "a": "화면 가운데에 십자선이 고정되어 있고, 화면의 무작위 위치에 점이 하나씩 잠깐 나타났다 사라집니다. 1.0배 속도에서 점은 약 0.75초 보이며, 사라진 뒤 짧은 간격을 두고 다른 곳에 나타납니다. 점은 움직이지 않습니다. 시선은 십자선에 둔 채 점을 알아채는 것이 목표이며, 클릭할 필요는 없습니다."
  },
  {
    "q": "속도와 Hide Line은 무엇을 바꾸나요?",
    "a": "속도를 올리면 점이 더 자주 나타나고 더 짧게 보입니다(가장 짧게 약 0.25초). Random Speed를 켜면 점멸 빈도와 길이가 계속 달라집니다. Hide Line을 켜면 가운데 십자선이 사라져 기준점 없이 시선을 중앙에 두어야 합니다."
  },
  {
    "q": "점을 보려고 눈을 돌리면 안 되나요?",
    "a": "연습 취지는 가운데에 시선을 유지하는 것입니다. 브라우저는 시선을 기록하지 못하므로, 눈이 점 쪽으로 따라가는지 스스로 확인해야 합니다. 자주 따라가면 속도를 낮추세요."
  },
  {
    "q": "눈의 움직임이나 점수를 기록하나요?",
    "a": "아닙니다. 브라우저는 시선이 어디를 향하는지 알 수 없고, 클릭이나 명중 판정도 없습니다. 점수 없이 끝낸 세션 수만 이 브라우저에 저장됩니다. 시선을 지키는 것은 스스로의 몫입니다."
  },
  {
    "q": "어떤 설정을 바꿀 수 있나요?",
    "a": "3-2-1 카운트다운 뒤 30·45·60·90·120초(기본 60초) 세션이 진행됩니다. 속도 0.5~9.0배, 표적 크기 10~50px, 표적 색, Hide Line(선 숨기기)·Random Speed(무작위 속도)·Gaze Trail(잔상)·Neon Glow·Scanlines 토글과 밝은/어두운 배경을 고를 수 있습니다. Esc 키로 언제든 종료합니다."
  },
  {
    "q": "시력이나 게임 실력이 좋아지나요?",
    "a": "보장하지 않습니다. 눈으로 표적을 보는 연습 도구이며 시력 개선이나 에임 향상을 약속하지 않습니다. 같은 화면과 설정에서 세션 기록을 비교하세요."
  },
  {
    "q": "얼마나 연습하면 되나요?",
    "a": "1~2분 세션을 몇 번 하고 쉬는 짧은 블록이면 충분합니다. 눈이 피로하거나 건조하면 먼 곳을 보며 깜빡이고, 통증·어지럼·메스꺼움·두통이 있으면 중단하세요."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "주변시 훈련 가이드",
  "intro": [
    "주변시 훈련은 화면 가운데 십자선에 시선을 둔 채, 화면 곳곳에 잠깐 깜빡이는 점을 눈을 돌리지 않고 알아채는 브라우저 연습입니다. 점은 한 번에 하나씩 무작위 위치에 나타나며, 1.0배 속도에서 약 0.75초 동안 보입니다.",
    "중심시야는 시선이 향한 좁은 영역의 세부를 보고, 주변시야는 그 바깥의 변화를 알아챕니다. 주변에서 무언가가 나타나면 눈이 그쪽으로 빠르게 움직이려는 경향이 있는데(Findlay & Walker, 1999), 이 연습은 그 충동을 참고 중앙에 시선을 두는 상황을 반복합니다.",
    "브라우저는 표적을 그린 위치와 설정만 알고, 눈이 실제로 어디를 봤는지는 기록하지 못합니다. 점수나 정확도 수치도 없으니 같은 화면·거리·설정에서 스스로 편안함과 집중을 비교하세요. 주사율과 화면 지연도 보이는 방식에 영향을 줍니다(Woods et al., 2015)."
  ],
  "benchmarks": {
    "title": "연습 단계 (SkillDrills 안내)",
    "headers": [
      "단계",
      "연습 목표"
    ],
    "rows": [
      [
        "1단계",
        "1.0배, 십자선 표시, 시선을 중앙에 유지"
      ],
      [
        "2단계",
        "눈을 돌리지 않고 대부분의 점멸 알아채기"
      ],
      [
        "3단계",
        "속도를 올려 더 짧고 잦은 점멸에 적응"
      ],
      [
        "4단계",
        "Hide Line 또는 Random Speed를 하나씩 추가"
      ]
    ],
    "note": "SkillDrills의 연습 단계 안내일 뿐이며 공식 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "연습 요령",
    "items": [
      {
        "name": "시선은 가운데, 주의는 넓게",
        "desc": "십자선을 편하게 바라보면서 화면 전체를 넓게 의식하세요. 점을 찾으려고 눈을 굴리지 않습니다.",
        "tips": "눈이 자꾸 따라가면 속도를 낮추고 십자선을 표시한 상태로 돌아갑니다."
      },
      {
        "name": "커서가 아닌 표적 보기",
        "desc": "마우스는 쓰지 않아도 됩니다. 손을 내려놓고 눈으로만 표적을 보세요.",
        "tips": "머리나 목이 같이 돌아가지 않는지 가끔 확인합니다."
      },
      {
        "name": "한 번에 하나만 어렵게",
        "desc": "속도, 선 숨기기, 무작위 속도를 따로따로 올리세요. 편안함이 무너지면 이전 설정으로 돌아갑니다.",
        "tips": "설정을 바꾸면 이전 세션과 직접 비교하지 마세요."
      },
      {
        "name": "짧게 하고 쉬기",
        "desc": "짧은 세션 사이에 눈을 깜빡이고 먼 곳을 보세요. 오래 한다고 더 좋은 것은 아닙니다.",
        "tips": "통증이나 어지럼이 있으면 바로 멈춥니다."
      }
    ]
  },
  "steps": [
    "화면에서 편한 거리를 두고 앉아 어깨와 목의 힘을 뺍니다.",
    "30~60초, 1.0배 속도, 선 표시 상태로 시작합니다.",
    "십자선에서 눈을 떼지 않고, 화면 곳곳에 깜빡이는 점을 주변 시야로 알아챕니다.",
    "편안해지면 속도를 올리거나 선 숨기기·무작위 속도를 하나씩 켭니다."
  ],
  "audience": "가운데를 보면서 주변의 변화를 알아채는 연습을 가볍게 해 보고 싶은 사람."
},
  faqs,
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "방향 변화 시선 추적" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "회피 표적 추적 훈련" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/momentum-teleport-pursuit", label: "순간이동 표적 시선 재포착" }
  ],
};

export default function KoreanPeripheralPingPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient copy={{"title": "주변시 훈련", "subtitle": "가운데 십자선을 보며 주변 점멸 알아채기", "description": "주변시 훈련은 가운데 십자선에 시선을 둔 채, 무작위 위치에 약 0.75초(1.0배 속도) 깜빡이는 점을 눈을 돌리지 않고 알아채는 연습입니다. 클릭이나 점수는 없고, 브라우저는 시선을 기록하지 않습니다."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
