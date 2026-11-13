import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual-tracking/momentum-teleport-pursuit';
const title = "순간이동 표적 시선 재포착 | 안구 운동 게임 | SkillDrills";
const description = "직선으로 움직이다 약 1.2초마다 무작위 위치로 순간이동하는 표적을 눈으로 다시 찾는 무료 안구 운동 게임. 이동 방향과 속도는 유지되며, 속도·시간을 조절할 수 있습니다.";

export const metadata = {
  title,
  description,
  keywords: ["순간이동 표적 시선 재포착", "시선 재포착", "순간이동 표적 추적", "안구 운동 게임", "시선 추적 훈련", "사케드 연습"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "홈", item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: "훈련 목록", item: 'https://skilldrills.online/ko/drills' },
    { '@type': 'ListItem', position: 3, name: "시각 추적・아이 트래킹", item: 'https://skilldrills.online/ko/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "순간이동 표적 시선 재포착", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "순간이동 표적 시선 재포착",
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
  name: "순간이동 표적 시선 재포착 하는 방법",
  description: "순간이동한 표적을 다시 찾고, 같은 방향의 움직임을 이어서 따라가는 4단계 연습법입니다.",
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
    "name": "움직임 따라가기",
    "text": "표적이 직선으로 움직이다 화면 가장자리에서 튕기는 동안 눈으로 부드럽게 따라갑니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "순간이동 뒤 다시 찾기",
    "text": "표적이 다른 위치로 옮겨가면 시선을 한 번에 새 위치로 옮기고, 같은 방향의 움직임을 이어서 따라갑니다."
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
    "q": "순간이동 표적 시선 재포착은 어떤 훈련인가요?",
    "a": "표적이 일정한 방향과 속도로 직선 이동하다 화면 가장자리에서 튕기고, 1.0배 속도에서 약 1.2초마다 무작위 위치로 순간이동합니다. 순간이동한 뒤에도 이동 방향과 속도는 그대로입니다. 새 위치를 눈으로 다시 찾고 그 움직임을 이어서 따라가는 브라우저 연습이며, 시력 검사나 치료가 아닙니다."
  },
  {
    "q": "순간이동할 위치를 미리 알 수 있나요?",
    "a": "아닙니다. 새 위치는 매번 무작위입니다. 미리 알 수 있는 것은 순간이동 뒤에도 같은 방향과 속도로 움직인다는 점뿐입니다. 표적에서 뻗은 짧은 선이 이동 방향을 보여 주며, Hide Line을 켜면 이 선이 사라집니다."
  },
  {
    "q": "속도를 올리면 무엇이 달라지나요?",
    "a": "표적이 빨라지고 순간이동 간격도 짧아집니다. 2배 속도에서는 약 0.6초마다 위치가 바뀝니다. Random Speed를 켜면 속도가 계속 출렁이고 순간이동 간격도 불규칙해집니다."
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
  "heading": "순간이동 표적 시선 재포착 가이드",
  "intro": [
    "순간이동 표적 시선 재포착은 직선으로 움직이던 표적이 갑자기 다른 위치로 옮겨갔을 때 눈으로 다시 찾는 브라우저 연습입니다. 표적은 화면 가장자리에서 튕기며 움직이고, 1.0배 속도에서 약 1.2초마다 무작위 위치로 순간이동하지만 이동 방향과 속도는 유지됩니다.",
    "움직이는 표적을 부드럽게 따라가는 눈의 움직임과, 멀리 옮겨간 표적으로 시선을 빠르게 옮기는 움직임(사케드)은 서로 다른 움직임으로 설명됩니다(Rashbass, 1961; Krauzlis, 2004). 이 연습에서는 둘이 번갈아 필요한 상황을 반복해서 경험합니다.",
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
        "1.0배 속도, 방향 선 표시로 편안하게 재포착"
      ],
      [
        "2단계",
        "순간이동 뒤 한 번에 새 위치 찾기"
      ],
      [
        "3단계",
        "속도를 올려 짧아진 간격에 적응"
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
        "name": "한 번에 옮기고 이어서 따라가기",
        "desc": "표적이 옮겨가면 여기저기 찾지 말고 새 위치로 시선을 한 번에 옮긴 뒤, 직전과 같은 방향으로 움직임을 이어서 따라갑니다.",
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
    "표적이 순간이동하면 새 위치로 시선을 옮기고 같은 방향의 움직임을 이어서 따라갑니다.",
    "편안해지면 속도를 올리거나 선 숨기기·무작위 속도를 하나씩 켭니다."
  ],
  "audience": "움직이다 위치가 바뀌는 표적을 눈으로 다시 찾는 연습을 가볍게 해 보고 싶은 사람."
},
  faqs,
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/ko/drills/visual-tracking/constant-slow-pursuit", label: "저속 시선 추적 훈련" },
    { href: "/ko/drills/visual-tracking/directional-chaos-pursuit", label: "방향 변화 시선 추적" },
    { href: "/ko/drills/visual-tracking/dynamic-evasion-pursuit", label: "움직이는 표적 추적 훈련" },
    { href: "/ko/drills/visual-tracking/ghosting-suppress-pursuit", label: "잔상 억제 시선 고정 훈련" },
    { href: "/ko/drills/visual-tracking/infinity-pursuit", label: "8자 안구 운동 훈련" },
    { href: "/ko/drills/visual-tracking/predictive-pursuit", label: "가림 구간 예측 추적" }
  ],
};

export default function KoreanMomentumTeleportPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient copy={{"title": "순간이동 표적 시선 재포착", "subtitle": "같은 방향으로 계속 움직이는 표적 다시 찾기", "description": "순간이동 표적 시선 재포착은 직선으로 움직이다 약 1.2초마다(1.0배 속도) 무작위 위치로 순간이동하는 표적을 눈으로 다시 찾는 연습입니다. 이동 방향과 속도는 유지됩니다. 클릭은 없고 끝나면 포인터와 표적의 거리를 보여 주지만, 브라우저는 시선을 기록하지 않습니다."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
