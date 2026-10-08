import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/dynamic-evasion-pursuit';
const title = "급선회 표적 추적 훈련 | 시선 재포착 연습 | SkillDrills";
const description = "갑자기 방향을 바꿔 피하듯 움직이는 표적을 눈으로 따라가는 무료 시선 추적 훈련. 속도와 시간을 조절하며 재포착을 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["급선회 표적 추적", "시선 재포착", "시선 추적 훈련", "눈 운동 게임", "회피 표적 추적", "움직이는 표적 추적", "안구 운동 연습", "시선 반응 훈련"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/dynamic-evasion-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "드릴 목록", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "시각 추적 및 안구 훈련", "item": "https://skilldrills.online/ko/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "급선회 표적 추적 훈련", "item": "https://skilldrills.online/ko/drills/visual-tracking/dynamic-evasion-pursuit" }
  ]
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "급선회 표적 추적 훈련",
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
  name: "급선회 표적 추적 훈련 웹 앱",
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
  name: "급선회 표적 추적 훈련",
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
  name: "급선회 표적 추적 훈련 하는 방법",
  description: "갑자기 방향을 바꿔 피하듯 움직이는 표적를 눈으로 따라가는 4단계 연습법입니다.",
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
    "name": "방향 전환 확인",
    "text": "표적이 방향을 바꾼 것을 확인하고 시선을 새 방향으로 부드럽게 옮깁니다."
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
    "q": "급선회 표적 추적 훈련은 무엇인가요?",
    "a": "갑자기 방향을 바꿔 피하듯 움직이는 표적를 눈으로 따라가는 브라우저 훈련입니다. 방향이 바뀐 표적을 다시 눈으로 맞추는 반응이 목적이며, 속도·시간·경로 표시를 조절할 수 있습니다. 시력 검사나 치료가 아니라 연습 도구입니다."
  },
  {
    "q": "눈의 움직임을 직접 측정하나요?",
    "a": "아닙니다. 브라우저는 시선이 어디를 향하는지 알 수 없고, 표적을 그린 위치와 설정만 알고 있습니다. 포인터는 보조일 뿐 커서 위치가 시선을 증명하지 않으며, 결과는 반복 가능한 연습 기록입니다."
  },
  {
    "q": "회피 표적이란 무엇인가요?",
    "a": "시선이 맞춰질 즈음 갑자기 방향을 바꾸는 식으로 움직이는 표적입니다. 같은 경로를 계속 따라가는 훈련과 달리 방향 전환 뒤 다시 따라붙는 반응이 더 자주 필요합니다."
  },
  {
    "q": "방향 전환을 미리 예측해야 하나요?",
    "a": "모든 전환을 미리 맞히려 하지 않아도 됩니다. 방향이 바뀐 것을 확인하고 부드럽게 다시 따라붙는 것이 기본이며, 익숙해지면 경로 숨기기로 난이도를 올릴 수 있습니다."
  },
  {
    "q": "경로 숨기기와 무작위 속도 중 무엇을 먼저 켜야 하나요?",
    "a": "둘 다 난이도를 올리는 옵션입니다. 한 번에 하나씩 켜서 어떤 변화가 어려움을 만들었는지 구분하세요. 같은 설정끼리만 기록을 비교하는 편이 좋습니다."
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

const guideProps = {
  "heading": "급선회 표적 추적 훈련 가이드",
  "intro": [
    "급선회 표적 추적 훈련은 갑자기 방향을 바꿔 피하듯 움직이는 표적를 눈으로 따라가는 브라우저 훈련입니다. 방향이 바뀐 표적을 다시 눈으로 맞추는 반응을 반복해서 경험할 수 있고, 속도·시간·경로 표시를 조절할 수 있습니다.",
    "움직이는 표적을 부드럽게 따라가는 눈의 움직임과 시선을 빠르게 옮기는 움직임은 서로 다른 움직임으로 설명됩니다 (Rashbass, 1961; Krauzlis, 2004). 이 훈련에서는 둘이 번갈아 쓰이는 상황을 연습할 수 있습니다.",
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
        "전환 뒤 따라붙기"
      ],
      [
        "3단계",
        "빠른 전환에도 시선 유지"
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
        "name": "전환 뒤 서두르지 않기",
        "desc": "표적이 방향을 바꾼 뒤 크게 눈을 흔들면 오히려 놓치기 쉽습니다. 새 방향을 확인한 뒤 편안하게 다시 따라붙으세요.",
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
  "audience": "급선회 표적 추적를 가볍게 연습해 보고 싶은 사용자와, 눈으로 표적을 따라가는 감각을 게임처럼 연습하려는 사람.",
  faqs,
  sources: pickSources('bahill1980', 'rashbass1961', 'krauzlis2004', 'robinson1965', 'barnes2008', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "정속 저속 추종 안구 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "카오스 방향 추적 훈련" },
    { href: "/ko/drills/visual-tracking/sine-wave-pursuit", label: "사인파 추종 훈련" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 루프 안구 추적 훈련" },
    { href: "/ko/drills/visual-tracking/predictive-pursuit", label: "예측 시선 추적" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "시선 고정 안정성 훈련" }
  ],
};

export default function LocalizedPage() {
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
      <DynamicEvasionPursuitClient
        copy={{
          title: "급선회 표적 추적 훈련",
          subtitle: "피하는 표적 시선 재포착",
          description: "급선회 표적 추적 훈련은 갑자기 방향을 바꿔 피하듯 움직이는 표적를 눈으로 따라가는 연습입니다. 브라우저는 시선을 기록하지 않으며 포인터는 보조일 뿐이므로, 결과는 의료 검사가 아닌 연습 기록으로 보세요."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
