import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/sine-wave-pursuit';
const title = "사인파 안구 추적 훈련 | 곡선 따라가기 | SkillDrills";
const description = "화면을 좌우로 오가며 고정된 사인파(물결) 곡선을 따라 오르내리는 표적을 눈으로 따라가는 무료 안구 추적 훈련. 속도와 시간을 조절할 수 있습니다.";

export const metadata = {
  title,
  description,
  keywords: ["사인파 안구 추적 훈련", "사인파 추적", "곡선 시선 추적", "안구 추적 연습", "눈 운동 게임", "부드러운 추적 연습"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "사인파 안구 추적 훈련", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "사인파 안구 추적 훈련",
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
  name: "사인파 안구 추적 훈련 하는 방법",
  description: "물결 곡선을 따라 좌우로 오가는 표적을 눈으로 부드럽게 따라가는 4단계 연습법입니다.",
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
    "name": "곡선 확인",
    "text": "처음에는 곡선이 보이는 상태에서 표적이 지나갈 물결 경로를 눈으로 확인합니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "부드럽게 따라가기",
    "text": "표적이 곡선을 따라 오르내리며 좌우 끝에서 방향을 바꾸는 동안 눈으로 끊김 없이 따라갑니다."
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
    "q": "사인파 안구 추적 훈련에서 표적은 어떻게 움직이나요?",
    "a": "표적은 화면 너비의 약 5%~95% 사이를 일정한 가로 속도로 오가며(1.0배에서 초당 약 220픽셀), 화면 높이의 약 28% 진폭을 가진 고정된 사인파 곡선을 따라 오르내립니다. 양 끝에 닿으면 방향을 바꿔 같은 곡선을 되돌아옵니다. 시선만 쓰는 브라우저 연습입니다."
  },
  {
    "q": "왜 위아래 속도가 계속 바뀌나요?",
    "a": "가로 속도는 일정하지만 곡선의 기울기가 달라지기 때문입니다. 곡선의 가운데를 지날 때 세로 움직임이 가장 빠르고, 꼭대기와 바닥에서는 잠깐 세로 움직임이 멈춘 듯 보입니다."
  },
  {
    "q": "Hide Line과 Random Speed는 무엇을 바꾸나요?",
    "a": "Hide Line을 켜면 곡선이 사라져 경로를 기억하거나 움직임만 보고 따라가야 합니다. Random Speed를 켜면 이동 속도가 계속 출렁입니다. 경로 자체는 바뀌지 않습니다."
  },
  {
    "q": "눈의 움직임이나 점수를 기록하나요?",
    "a": "아닙니다. 브라우저는 시선이 어디를 향하는지 알 수 없고, 클릭이나 명중 판정도 없습니다. 등급은 없습니다. 포인터로 표적을 따라가면 종료 화면에 포인터가 표적 위에 있던 시간과 표적 중심까지의 평균 거리가 표시됩니다. 측정 대상은 눈이 아니라 포인터입니다. 시선을 지키는 것은 스스로의 몫입니다."
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
  "heading": "사인파 안구 추적 훈련 가이드",
  "intro": [
    "사인파 안구 추적 훈련은 화면을 좌우로 오가며 고정된 사인파(물결) 곡선을 따라 오르내리는 표적을 눈으로 부드럽게 따라가는 브라우저 연습입니다. 표적은 일정한 가로 속도로 움직이고 양 끝에서 방향을 바꿉니다.",
    "부드러운 추적 눈 운동은 느린 표적에서는 표적 속도에 가깝게 따라가지만, 빨라질수록 뒤처지기 쉽다고 설명됩니다(Robinson, 1965). 이 연습에서는 속도를 바꿔 가며 곡선의 꼭대기와 가운데에서 달라지는 움직임을 따라갑니다.",
    "브라우저는 표적을 그린 위치와 설정만 알고, 눈이 실제로 어디를 봤는지는 기록하지 못합니다. 표시되는 것은 포인터와 표적 사이 거리일 뿐 눈의 측정값이 아니니 같은 화면·거리·설정에서 스스로 편안함과 집중을 비교하세요. 주사율과 화면 지연도 보이는 방식에 영향을 줍니다(Woods et al., 2015)."
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
        "1.0배, 곡선 표시로 끊김 없이 따라가기"
      ],
      [
        "2단계",
        "좌우 끝에서 방향이 바뀔 때도 놓치지 않기"
      ],
      [
        "3단계",
        "속도를 올려 빠른 가운데 구간 따라가기"
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
        "name": "꼭대기와 가운데의 리듬 익히기",
        "desc": "꼭대기에서 잠깐 느려지고 가운데에서 빨라지는 리듬을 미리 알고 따라가면 끊김이 줄어듭니다.",
        "tips": "표적보다 뒤처지는 느낌이 들면 속도를 낮추세요."
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
    "표적이 물결 곡선을 따라 오르내리며 좌우로 오가는 동안 눈으로 끊김 없이 따라갑니다.",
    "편안해지면 속도를 올리거나 선 숨기기·무작위 속도를 하나씩 켭니다."
  ],
  "audience": "규칙적인 곡선을 따라 움직이는 표적을 눈으로 따라가는 연습을 가볍게 해 보고 싶은 사람."
},
  faqs,
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 안구 운동 훈련 (Constant Slow)" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "카오스 방향 전환 추적 (Directional Chaos)" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "회피 표적 추적 훈련 (Dynamic Evasion)" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련 (Ghosting Suppress)" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 안구 운동 훈련 (Infinity)" },
    { href: "/ko/drills/visual-tracking/predictive-pursuit", label: "가림 궤적 예측 추적 (Predictive Pursuit)" }
  ],
};

export default function KoreanSineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{"title": "사인파 안구 추적 훈련", "subtitle": "물결 곡선을 오가는 표적 따라가기", "description": "사인파 안구 추적 훈련은 화면을 좌우로 오가며 고정된 물결 곡선을 따라 오르내리는 표적을 눈으로 따라가는 연습입니다. Hide Line을 켜면 곡선이 사라집니다. 클릭은 필요 없고, 종료 화면에 포인터와 표적 사이 거리가 표시됩니다. 브라우저는 시선을 기록하지 않습니다."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
