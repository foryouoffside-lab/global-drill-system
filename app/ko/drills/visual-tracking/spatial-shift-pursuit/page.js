import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/spatial-shift-pursuit';
const title = "궤도 급변 시선 추적 훈련 | SkillDrills";
const description = "직선으로 움직이며 벽에 튕기다 예고 없이 방향과 속도가 갑자기 바뀌는 표적을 눈으로 따라가는 무료 시선 추적 훈련. 속도와 시간을 조절할 수 있습니다.";

export const metadata = {
  title,
  description,
  keywords: ["궤도 급변 시선 추적 훈련", "궤도 변화 추적", "시선 추적 훈련", "안구 추적 연습", "눈 운동 게임", "움직이는 표적 따라가기"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "궤도 급변 시선 추적 훈련", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "궤도 급변 시선 추적 훈련",
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
  name: "궤도 급변 시선 추적 훈련 하는 방법",
  description: "갑자기 방향과 속도가 바뀌는 표적을 놓치지 않고 따라가는 4단계 연습법입니다.",
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
    "name": "직선 구간 따라가기",
    "text": "표적이 직선으로 움직이고 화면 가장자리에서 튕기는 동안 눈으로 부드럽게 따라갑니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "급변에 다시 맞추기",
    "text": "표적의 방향과 속도가 갑자기 바뀌면 새 움직임에 시선을 다시 맞춰 계속 따라갑니다."
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
    "q": "궤도 급변 시선 추적 훈련에서 표적은 어떻게 움직이나요?",
    "a": "표적은 직선으로 움직이다 화면 가장자리에서 튕기며, 튕길 때마다 조금씩(약 2%) 빨라집니다. 그리고 무작위 순간에 예고 없이 방향과 속도가 바뀝니다. 가로·세로 방향이 각각 뒤집히거나 그대로이고, 속도는 0.8~1.3배로 달라집니다. 순간이동이나 화면 흔들림은 없습니다. 시선만 쓰는 브라우저 연습이며 시력 검사가 아닙니다."
  },
  {
    "q": "방향 변화는 얼마나 자주 일어나나요?",
    "a": "정해진 주기 없이 무작위로 일어나며, 보통 1초에 한 번 안팎으로 자주 바뀝니다. Random Speed를 켜면 변화 확률이 두 배가 되고 이동 속도도 계속 출렁입니다."
  },
  {
    "q": "표적에서 뻗은 선은 무엇인가요?",
    "a": "현재 이동 방향과 빠르기를 보여 주는 선입니다. Hide Line을 켜면 사라지므로 표적의 움직임만 보고 방향 변화를 알아채야 합니다."
  },
  {
    "q": "눈의 움직임이나 점수를 기록하나요?",
    "a": "아닙니다. 브라우저는 시선이 어디를 향하는지 알 수 없고, 클릭이나 명중 판정도 없습니다. 끝나면 포인터 값(표적 위 시간, 중심까지 거리)만 보여 주며 눈의 값은 아닙니다. 이 브라우저에는 끝낸 세션 수만 저장됩니다. 시선을 지키는 것은 스스로의 몫입니다."
  },
  {
    "q": "어떤 설정을 바꿀 수 있나요?",
    "a": "3-2-1 카운트다운 뒤 30·45·60·90·120초(기본 60초) 세션이 진행됩니다. 속도 0.5~9.0배, 표적 크기 10~50px, 표적 색, Hide Line(선 숨기기)·Random Speed(무작위 속도)·Gaze Trail(잔상)·Neon Glow·Scanlines 토글과 밝은/어두운 배경을 고를 수 있습니다. Esc 키로 언제든 종료합니다."
  },
  {
    "q": "시력이나 게임 실력이 좋아지나요?",
    "a": "보장하지 않습니다. 시력 검사나 치료가 아니라 눈으로 표적을 보는 연습 도구입니다. 시력 개선이나 에임 향상을 약속하지 않으며, 눈에 이상이 의심되면 전문가의 진료를 받으세요."
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
  "heading": "궤도 급변 시선 추적 훈련 가이드",
  "intro": [
    "궤도 급변 시선 추적 훈련은 직선으로 움직이며 벽에 튕기다 예고 없이 방향과 속도가 갑자기 바뀌는 표적을 눈으로 따라가는 브라우저 연습입니다. 변화는 무작위로 자주 일어나며, 표적은 순간이동하지 않고 화면도 움직이지 않습니다.",
    "움직이는 표적의 방향이 갑자기 바뀌면 부드러운 추적만으로는 늦어 시선을 빠르게 옮기는 보정 움직임이 섞인다고 설명됩니다(Robinson, 1965; Krauzlis, 2004). 이 연습은 그런 재조정이 반복되는 상황을 만듭니다.",
    "브라우저는 표적을 그린 위치와 설정만 알고, 눈이 실제로 어디를 봤는지는 기록하지 못합니다. 보여 주는 값은 포인터 기준(표적 위 시간, 중심까지 거리)뿐이니 같은 화면·거리·설정에서 스스로 편안함과 집중을 비교하세요. 주사율과 화면 지연도 보이는 방식에 영향을 줍니다(Woods et al., 2015)."
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
        "1.0배, 방향 선 표시로 급변 뒤 다시 맞추기"
      ],
      [
        "2단계",
        "방향이 바뀌어도 표적을 거의 놓치지 않기"
      ],
      [
        "3단계",
        "속도를 올려 더 빠른 급변에 적응"
      ],
      [
        "4단계",
        "Hide Line 또는 Random Speed를 하나씩 추가"
      ]
    ],
    "note": "SkillDrills의 연습 단계 안내일 뿐이며 검사 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "연습 요령",
    "items": [
      {
        "name": "미리 단정하지 않기",
        "desc": "직선 구간에서도 언제든 방향이 바뀔 수 있다고 생각하고 표적 자체에 시선을 두세요. 앞질러 보면 급변 때 더 크게 놓칩니다.",
        "tips": "자주 놓치면 속도를 낮추고 방향 선을 켠 상태로 돌아갑니다."
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
    "표적의 방향과 속도가 갑자기 바뀌면 새 움직임에 시선을 다시 맞춰 따라갑니다.",
    "편안해지면 속도를 올리거나 선 숨기기·무작위 속도를 하나씩 켭니다."
  ],
  "audience": "예측하기 어려운 움직임을 눈으로 따라가는 연습을 가볍게 해 보고 싶은 사람."
},
  faqs,
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "방향 전환 추적 훈련" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "회피 표적 추적 훈련" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/predictive-pursuit", label: "가림 궤적 예측 추적" }
  ],
};

export default function KoreanSpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{"title": "궤도 급변 시선 추적 훈련", "subtitle": "예고 없이 방향과 속도가 바뀌는 표적 따라가기", "description": "궤도 급변 시선 추적 훈련은 직선으로 움직이며 벽에 튕기다 무작위 순간에 방향과 속도가 바뀌는 표적을 눈으로 따라가는 연습입니다. Hide Line을 켜면 방향 선이 사라집니다. 클릭은 없고 끝나면 포인터와 표적의 거리를 보여 주지만, 브라우저는 시선을 기록하지 않습니다."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
