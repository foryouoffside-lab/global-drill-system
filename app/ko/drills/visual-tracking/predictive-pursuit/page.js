import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/predictive-pursuit';
const title = "예측 추적 훈련 | 도착 지점 예측하기 | SkillDrills";
const description = "약 2.2초마다 새 목적지로 미끄러지듯 이동해 감속하며 멈추는 표적을 따라가는 무료 예측 추적 훈련. 목적지 선을 숨기면 움직임만 보고 도착점을 내다봐야 합니다.";

export const metadata = {
  title,
  description,
  keywords: ["예측 추적 훈련", "예측 시선 추적", "도착 지점 예측", "안구 추적 연습", "시선 추적 게임", "눈 운동 게임"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "예측 추적 훈련", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "예측 추적 훈련",
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
  name: "예측 추적 훈련 하는 방법",
  description: "새 목적지로 이동하는 표적을 따라가며 멈출 위치를 미리 내다보는 4단계 연습법입니다.",
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
    "name": "목적지 선 보기",
    "text": "처음에는 표적과 목적지를 잇는 선을 켠 채, 표적이 선을 따라 이동해 멈추는 모습을 눈으로 따라갑니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "도착점 내다보기",
    "text": "Hide Line을 켜고, 표적이 출발하는 방향과 속도만 보고 어디서 멈출지 미리 내다보며 따라갑니다."
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
    "q": "예측 추적 훈련에서 표적은 어떻게 움직이나요?",
    "a": "1.0배 속도에서 약 2.2초마다 화면의 무작위 지점이 새 목적지로 정해집니다. 표적은 그쪽으로 빠르게 출발해 점점 느려지며 약 1.5초 안에 멈추고, 다음 목적지가 정해질 때까지 기다립니다. 가려지거나 사라지는 구간은 없습니다. 시선만 쓰는 브라우저 연습이며 시력 검사가 아닙니다."
  },
  {
    "q": "무엇을 예측하는 건가요?",
    "a": "표적이 멈출 위치입니다. 기본 상태에서는 표적과 목적지를 잇는 선이 보여 도착점이 드러납니다. Hide Line을 켜면 선이 사라지므로 출발 방향과 감속을 보고 도착점을 내다봐야 합니다."
  },
  {
    "q": "속도와 Random Speed는 무엇을 바꾸나요?",
    "a": "속도를 올리면 이동과 목적지 변경이 모두 빨라집니다. Random Speed를 켜면 속도가 계속 출렁이고 다음 목적지까지의 간격도 불규칙해집니다."
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
  "heading": "예측 추적 훈련 가이드",
  "intro": [
    "예측 추적 훈련은 새 목적지로 미끄러지듯 이동해 감속하며 멈추는 표적을 눈으로 따라가고, 멈출 위치를 미리 내다보는 브라우저 연습입니다. 1.0배 속도에서 약 2.2초마다 무작위 목적지가 정해지며, 목적지 선을 숨기면 움직임만 보고 도착점을 예측해야 합니다.",
    "부드러운 추적은 움직임이 시작된 뒤 조금 늦게 따라붙기 때문에, 움직임을 예상하면 그 지연을 줄이는 데 도움이 된다고 설명됩니다(Kowler, 1989; Barnes, 2008). 이 연습은 그런 예상이 필요한 상황을 반복합니다.",
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
        "1.0배, 목적지 선 표시로 이동과 멈춤 따라가기"
      ],
      [
        "2단계",
        "표적보다 먼저 도착점을 바라보기"
      ],
      [
        "3단계",
        "Hide Line을 켜고 출발 방향만으로 예측"
      ],
      [
        "4단계",
        "속도 또는 Random Speed를 하나씩 추가"
      ]
    ],
    "note": "SkillDrills의 연습 단계 안내일 뿐이며 검사 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "연습 요령",
    "items": [
      {
        "name": "출발 순간을 놓치지 않기",
        "desc": "표적이 움직이기 시작하는 순간의 방향과 빠르기에 집중하세요. 감속하는 곡선을 보면 멈출 위치를 가늠할 수 있습니다.",
        "tips": "선을 숨긴 상태가 어렵다면 다시 선을 켜고 도착 패턴을 익힙니다."
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
    "표적이 출발하면 방향과 감속을 보고 멈출 위치를 미리 내다보며 따라갑니다.",
    "편안해지면 속도를 올리거나 선 숨기기·무작위 속도를 하나씩 켭니다."
  ],
  "audience": "움직이는 표적이 어디서 멈출지 내다보며 따라가는 연습을 가볍게 해 보고 싶은 사람."
},
  faqs,
  sources: pickSources('barnes2008', 'bennett2003', 'kowler1989', 'krauzlis2004', 'robinson1965', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 안구 추적 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "방향 변화 표적 추적" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "회피 표적 추적 훈련" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/momentum-teleport-pursuit", label: "순간이동 표적 에임 연습" }
  ],
};

export default function KoreanPredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{"title": "예측 추적 훈련", "subtitle": "표적이 멈출 곳을 미리 내다보기", "description": "예측 추적 훈련은 약 2.2초마다(1.0배 속도) 새 목적지로 이동해 감속하며 멈추는 표적을 따라가며, 멈출 위치를 미리 내다보는 연습입니다. Hide Line을 켜면 목적지 선이 사라집니다. 클릭은 필요 없고, 종료 화면에 포인터와 표적 사이 거리가 표시됩니다. 브라우저는 시선을 기록하지 않습니다."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
