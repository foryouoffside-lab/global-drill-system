import StaircaseStepClient from '@/app/drills/visual-tracking/staircase-step/StaircaseStepClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/staircase-step';
const title = "상하 시선 추적 훈련 | 수직 추적 드릴 | SkillDrills";
const description = "계단처럼 오르내리는 경로를 따라 움직이는 표적을 눈으로 따라가는 무료 수직 추적 훈련. 속도와 시간을 조절하며 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["상하 시선 추적", "수직 추적 훈련", "시선 추적 훈련", "눈 운동 게임", "계단식 추적", "안구 운동 연습", "움직이는 표적 추적", "위아래 시선 이동"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/staircase-step') },
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
      "name": "시각 추적 드릴",
      "item": "https://skilldrills.online/ko/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "상하 시선 추적 훈련",
      "item": "https://skilldrills.online/ko/drills/visual-tracking/staircase-step"
    }
  ]
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "상하 시선 추적 훈련",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  inLanguage: 'ko',
  dateModified: '2026-10-08',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "상하 시선 추적 훈련 웹 앱",
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
  name: "상하 시선 추적 훈련",
  url,
  description,
  genre: ['Action Game', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ko',
  dateModified: '2026-10-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "계단식 수직 추적 훈련 하는 방법",
  description: "계단처럼 위아래로 단계적으로 오르내리는 경로를 따라 움직이는 표적를 눈으로 따라가는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "편한 자세 잡기",
    "text": "화면에서 편한 거리를 두고 앉아 어깨와 손의 힘을 뺍니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "단계 확인",
    "text": "표적이 한 단씩 오르내리는 리듬을 눈으로 확인합니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "부드럽게 따라가기",
    "text": "커서가 아닌 표적을 눈으로 부드럽게 따라가며 세션을 진행합니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "설정 조절",
    "text": "편안해지면 속도를 올리거나 경로 숨기기를 하나씩 추가합니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "계단식 수직 추적 훈련은 무엇인가요?",
    "a": "계단처럼 위아래로 단계적으로 오르내리는 경로를 따라 움직이는 표적를 눈으로 따라가는 브라우저 훈련입니다. 위아래 방향 변화에 시선을 맞추는 연습이 목적이며, 속도·시간·경로 표시를 조절할 수 있습니다. 시력 검사나 치료가 아니라 연습 도구입니다."
  },
  {
    "q": "눈의 움직임을 직접 측정하나요?",
    "a": "아닙니다. 브라우저는 시선이 어디를 향하는지 알 수 없고, 표적을 그린 위치와 설정만 알고 있습니다. 포인터는 보조일 뿐 커서 위치가 시선을 증명하지 않으며, 결과는 반복 가능한 연습 기록입니다."
  },
  {
    "q": "수직 추적은 왜 따로 연습하나요?",
    "a": "가로 움직임을 따라가는 것과 위아래로 따라가는 것은 사람에 따라 편한 정도가 다를 수 있습니다. 이 훈련은 계단식 경로로 위아래 시선 이동을 집중해서 연습하게 합니다."
  },
  {
    "q": "계단식 경로는 어떻게 움직이나요?",
    "a": "표적이 단계적으로 오르내리며 단과 단 사이에서 방향이 바뀝니다. 직선 구간과 꺾이는 구간이 번갈아 나옵니다."
  },
  {
    "q": "위로 볼 때 눈이 피곤한데 괜찮은가요?",
    "a": "장시간 위쪽을 보면 눈이 피로할 수 있습니다. 짧게 하고 쉬세요. 눈 통증이나 두통이 계속되면 중단하고 필요하면 안과 진료를 받으세요."
  },
  {
    "q": "처음에는 어떤 설정으로 시작하나요?",
    "a": "30~60초의 짧은 세션, 느린 속도, 경로 표시 상태로 시작하세요. 편안하게 따라갈 수 있게 된 뒤 속도를 올리고, 경로 숨기기와 무작위 속도는 한 번에 하나씩 추가합니다."
  },
  {
    "q": "시선은 어디에 두어야 하나요?",
    "a": "표적의 중심을 보고, 커서를 따라가지 않도록 하세요. 어깨와 목, 마우스를 쥔 손의 힘을 빼고 자연스럽게 깜빡이며 편안한 거리에서 화면을 봅니다."
  },
  {
    "q": "이 훈련으로 시력이나 게임 실력이 좋아지나요?",
    "a": "보장할 수 없습니다. 이 훈련은 눈으로 표적을 따라가는 연습이며 시력 개선, 질환 치료, FPS 에임 향상을 약속하지 않습니다. 눈에 문제가 의심되면 전문가의 진료를 받으세요."
  },
  {
    "q": "화면과 환경이 결과에 영향을 주나요?",
    "a": "주사율, 밝기, 대비, 화면 크기와 거리, 브라우저가 표적이 보이는 방식을 바꿉니다. 입력 장치와 화면 지연도 영향을 줄 수 있으니(Woods et al., 2015) 같은 환경에서 비교하세요."
  },
  {
    "q": "얼마나 연습해야 하나요?",
    "a": "5~10분처럼 짧고 반복 가능한 블록으로 하고 쉬세요. 눈이 피로하거나 건조하면 멈추고 먼 곳을 보며 깜빡이세요. 통증, 어지럼, 메스꺼움, 두통이 있으면 중단합니다."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guide = {
  "heading": "계단식 수직 추적 훈련 가이드",
  "intro": [
    "상하 시선 추적 훈련은 계단처럼 위아래로 단계적으로 오르내리는 경로를 따라 움직이는 표적를 눈으로 따라가는 브라우저 훈련입니다. 위아래 방향 변화에 시선을 맞추는 연습을 반복해서 경험할 수 있고, 속도·시간·경로 표시를 조절할 수 있습니다.",
    "움직이는 표적을 부드럽게 따라가는 눈의 움직임과 시선을 빠르게 옮기는 움직임은 서로 다른 움직임으로 설명됩니다. 이 훈련에서는 둘이 번갈아 쓰이는 상황을 연습할 수 있습니다.",
    "브라우저는 표적을 그린 위치와 설정을 알 수 있지만 눈이 실제로 향한 위치는 기록하지 못합니다. 따라서 결과는 임상적 추적 능력이나 시력 수치가 아니라 반복 가능한 연습 기록으로 해석하세요.",
    "편안한 거리와 자세에서, 같은 화면과 브라우저로 비교하세요. 주사율과 입력 장치도 영향을 줄 수 있습니다(Woods et al., 2015). 통증, 어지럼, 메스꺼움, 지속적인 흐림이나 이상 증상이 생기면 중단하세요."
  ],
  "benchmarks": {
    "title": "연습 단계 참고표",
    "headers": [
      "단계",
      "연습 목표"
    ],
    "rows": [
      [
        "1단계",
        "느린 속도, 경로 표시"
      ],
      [
        "2단계",
        "단 사이 방향 전환 따르기"
      ],
      [
        "3단계",
        "빠른 속도에서 리듬 유지"
      ],
      [
        "4단계",
        "경로 숨기기 추가"
      ],
      [
        "5단계",
        "무작위 속도 추가"
      ]
    ],
    "note": "이 표는 SkillDrills의 연습 방향 안내입니다. 시각 기능 검사 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "연습 요령 4가지",
    "items": [
      {
        "name": "단과 단 사이 리듬 익히기",
        "desc": "계단의 한 단마다 방향이 바뀌는 리듬이 있습니다. 한 단을 쫓기보다 전체 리듬에 눈을 맞춰 부드럽게 이어가세요.",
        "tips": "불편하면 속도를 낮추고 경로를 표시한 상태로 돌아가세요."
      },
      {
        "name": "커서가 아닌 표적 보기",
        "desc": "포인터는 보조일 뿐입니다. 커서가 아니라 표적을 눈으로 따라가며 어깨와 손의 힘을 빼세요.",
        "tips": "목이나 머리를 같이 돌리지 않았는지 가끔 확인합니다."
      },
      {
        "name": "한 번에 하나만 어렵게 하기",
        "desc": "속도, 경로 숨기기, 무작위 속도를 각각 따로 올리세요. 편안함이 무너지면 이전 설정으로 돌아갑니다.",
        "tips": "설정을 바꾸면 기록을 새로 시작합니다."
      },
      {
        "name": "짧게 하고 쉬기",
        "desc": "5~10분 단위로 하고 눈을 깜빡이며 먼 곳을 보세요. 오래 한다고 더 좋은 것은 아닙니다.",
        "tips": "통증, 어지럼, 메스꺼움이 있으면 즉시 중단합니다."
      }
    ]
  },
  "steps": [
    "화면에서 편한 거리를 두고 앉아 어깨와 손의 힘을 뺍니다.",
    "30~60초, 느린 속도, 경로 표시 상태로 시작합니다.",
    "커서가 아닌 표적을 눈으로 부드럽게 따라갑니다.",
    "편안해지면 속도를 올리거나 설정을 하나씩 추가합니다."
  ],
  "audience": "계단식 수직 추적를 가볍게 연습해 보고 싶은 사용자와, 눈으로 표적을 따라가는 감각을 게임처럼 연습하려는 사람.",
  faqs,
  sources: pickSources('rottach1996', 'collewijn1984', 'ke2013', 'buttner1997', 'lisberger2010', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/split-screen-tracking", label: "화면 분할 시각 추적" },
    { href: "/ko/drills/visual-tracking/sine-wave-pursuit", label: "사인파 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "불규칙 방향 전환・급제동 추적 훈련" },
    { href: "/ko/drills/visual-tracking/predictive-pursuit", label: "예측 에임 연습・가림 궤적 추적 테스트" },
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "원활추종 기초 안구 운동 훈련" }
  ],
};

export default function StaircaseStepKoPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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

      <StaircaseStepClient
        copy={{
          title: "상하 시선 추적 훈련",
          subtitle: "계단식 수직 추적",
          description: "상하 시선 추적 훈련은 계단처럼 위아래로 단계적으로 오르내리는 경로를 따라 움직이는 표적를 눈으로 따라가는 연습입니다. 브라우저는 시선을 기록하지 않으며 포인터는 보조일 뿐이므로, 결과는 의료 검사가 아닌 연습 기록으로 보세요."
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
