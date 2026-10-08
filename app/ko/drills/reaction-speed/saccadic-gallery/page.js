import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/reaction-speed/saccadic-gallery';
const title = "시선 이동 훈련 게임 | 사케드 안구 운동 연습 | SkillDrills";
const description = "화면에 나타나는 표적으로 시선을 빠르게 옮겨 클릭하는 무료 시선 이동 훈련 게임. 사케드 안구 운동과 눈-손 협응을 브라우저에서 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["시선 이동 훈련", "시선 이동 훈련 게임", "사케드 안구 운동", "단속성 안구운동", "눈 운동 게임", "시각 포착 연습", "동체시력 게임", "눈-손 협응 게임"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills 홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '훈련 허브', item: 'https://skilldrills.online/ko/drills' },
    { '@type': 'ListItem', position: 3, name: '반응 속도', item: 'https://skilldrills.online/ko/drills/reaction-speed' },
    { '@type': 'ListItem', position: 4, name: '시선 이동 훈련 게임', item: 'https://skilldrills.online/ko/drills/reaction-speed/saccadic-gallery' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "사케드 갤러리 시선 이동 훈련 게임",
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
  name: "사케드 갤러리 시선 이동 훈련 게임 웹 앱",
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
  name: "사케드 갤러리 시선 이동 훈련 게임",
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
  name: "시선 이동 훈련 게임 하는 방법",
  description: "표적으로 시선을 빠르게 옮기고 클릭하는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "자세 잡기",
    "text": "화면에서 50~70cm 떨어져 편하게 앉고 시선을 화면 중앙에 둡니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "표적 알아채기",
    "text": "머리를 고정한 채 화면에 나타나는 표적을 알아챕니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "시선 옮기기",
    "text": "시선을 표적으로 한 번에 옮깁니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "정확히 클릭",
    "text": "표적에 초점을 맞춘 뒤 클릭하고 기록을 확인합니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "시선 이동 훈련 게임은 무엇을 하나요?",
    "a": "화면의 여러 위치에 나타나는 표적으로 시선을 빠르게 옮기고 클릭하는 게임입니다. 한 점에서 다른 점으로 시선을 옮기는 눈의 움직임(사케드)과 클릭 타이밍을 함께 연습합니다. 시력 검사나 치료가 아니라 브라우저 연습 도구입니다."
  },
  {
    "q": "사케드(단속성 안구운동)란 무엇인가요?",
    "a": "한 곳에서 다른 곳으로 시선을 빠르게 옮기는 눈의 움직임입니다. 책을 읽거나 화면을 훑어볼 때 계속 일어납니다(Rayner, 1998). 이 게임은 눈의 움직임을 직접 기록하지 않고 표적이 나타난 뒤 클릭까지 걸린 시간을 보여 줍니다."
  },
  {
    "q": "눈 움직임을 직접 측정하나요?",
    "a": "아닙니다. 브라우저는 시선 위치를 알 수 없고 클릭 시점과 위치만 기록합니다. 결과에는 시선 이동뿐 아니라 손 움직임, 화면 주사율, 마우스 입력 지연이 함께 들어 있으므로 사케드 지연 시간으로 해석하면 안 됩니다."
  },
  {
    "q": "클릭 반응 시간은 보통 얼마나 걸리나요?",
    "a": "사람과 환경에 따라 크게 다릅니다. 이 페이지는 평균이나 순위를 제공하지 않고, 같은 환경에서 자신의 기록을 비교하는 용도로만 쓰도록 권합니다. 기준표의 구간도 통계가 아닌 연습 단계입니다."
  },
  {
    "q": "머리를 움직이지 않는 것이 중요한가요?",
    "a": "눈만 움직이는 연습이 목적이므로 머리를 크게 돌리지 않는 것이 좋습니다. 자세를 고정하면 기록 비교도 쉬워집니다. 목이나 눈에 불편함이 있으면 중단하세요."
  },
  {
    "q": "사케드 억제란 무엇인가요?",
    "a": "눈이 빠르게 움직이는 동안 흐려지는 화면을 의식하지 못하는 현상입니다. 시선 이동 중에는 시각 정보가 덜 처리되는 경향이 있다는 연구가 있습니다(Leigh & Zee, 2015). 이 게임으로 억제 정도를 측정하지는 않습니다."
  },
  {
    "q": "FPS 게임이나 독서 속도에 도움이 되나요?",
    "a": "보장할 수 없습니다. 화면을 빠르게 훑는 상황과 비슷한 연습이지만 게임, 읽기, 스포츠는 규칙과 조건이 다릅니다. 연습 기록을 비교하는 용도로 쓰세요."
  },
  {
    "q": "모니터 주사율이 영향을 주나요?",
    "a": "주사율이 높으면 화면이 더 자주 갱신되어 표시 지연이 줄어드는 경향이 있습니다(Woods et al., 2015). 다만 이 게임에서 점수가 얼마나 달라지는지는 측정하지 않았습니다. 같은 환경에서 비교하세요."
  },
  {
    "q": "하루에 얼마나 연습해야 하나요?",
    "a": "5~10분처럼 짧은 블록으로 하고 쉬세요. 눈이 피로하거나 건조하면 멈추고 먼 곳을 바라보며 깜빡이세요. 오래 한다고 더 좋은 것은 아닙니다."
  },
  {
    "q": "이 도구는 무료인가요? 기록은 어디에 저장되나요?",
    "a": "무료이며 설치나 계정이 필요 없습니다. 기록은 브라우저의 로컬 저장소에 보관되고 이 드릴에서 서버로 올리지 않습니다. 브라우저 데이터를 지우면 기록도 사라집니다."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

faqSchema.mainEntity = faqSchema.mainEntity.slice(0, 10);
const saccadicGuide = {
  "heading": "시선 이동 훈련 게임 가이드",
  "intro": [
    "사케드 갤러리는 화면에 나타나는 표적으로 시선을 빠르게 옮기고 클릭하는 브라우저 게임입니다. 한 곳에서 다른 곳으로 시선을 옮기는 눈의 움직임을 단속성 안구운동(사케드)이라고 부르며, 읽기나 화면 탐색 중에 계속 일어납니다(Rayner, 1998; Fischer & Boch, 1984).",
    "눈이 빠르게 움직이는 동안에는 시각 정보 처리가 줄어드는 경향이 있고(Leigh & Zee, 2015), 도착 위치가 어긋나면 다시 작은 교정 움직임이 일어납니다. 이 게임은 표적이 나타난 뒤 클릭할 때까지의 시간과 정확도를 연습 기록으로 보여 줍니다.",
    "측정 한계: 브라우저는 시선 위치를 알 수 없습니다. 기록에는 시선 이동뿐 아니라 손 움직임, 화면 주사율, 마우스 입력 지연이 함께 들어 있습니다(Woods et al., 2015). 사케드 지연 시간이나 눈 건강을 측정한 값이 아닙니다.",
    "같은 기기, 거리, 자세에서 꾸준히 연습하며 기록의 흐름을 비교하세요. 눈이 피로하면 멈추고, 통증이나 이상이 있으면 안과 진료를 받으세요."
  ],
  "benchmarks": {
    "title": "연습 단계 참고표",
    "headers": [
      "단계",
      "연습 목표",
      "연습 포인트"
    ],
    "rows": [
      [
        "1단계",
        "표적을 놓치지 않고 클릭하기",
        "정확하게 클릭하는 감각 익히기"
      ],
      [
        "2단계",
        "시선을 한 번에 옮기기",
        "표적 위치를 보고 곧바로 이동하기"
      ],
      [
        "3단계",
        "클릭 리듬 유지하기",
        "서두르지 않고 일정한 템포 만들기"
      ],
      [
        "4단계",
        "정확도 유지하며 빠르게",
        "오버슈트와 재조준 줄이기"
      ],
      [
        "5단계",
        "긴 세션 유지하기",
        "피로 전에 쉬고 같은 조건으로 비교하기"
      ]
    ],
    "note": "이 표는 SkillDrills의 연습 방향 안내입니다. 반응 시간 기준, 사용자 통계, 백분위, 임상 기준이 아닙니다."
  },
  "techniques": {
    "title": "시선 이동 연습 요령 4가지",
    "items": [
      {
        "name": "머리는 고정, 눈만 움직이기",
        "desc": "고개를 돌리지 않고 눈만 움직이도록 연습하세요. 자세를 고정하면 기록도 비교하기 쉽습니다.",
        "tips": "턱을 편하게 두고 고개가 돌아가는지 가끔 확인합니다."
      },
      {
        "name": "주변부로 먼저 알아채기",
        "desc": "화면 중앙을 부드럽게 보며 주변에 나타나는 표적을 먼저 알아챈 뒤 시선을 옮기세요.",
        "tips": "한 점을 노려보지 말고 시야를 넓게 둡니다."
      },
      {
        "name": "한 번에 도착하기",
        "desc": "표적에 못 미치거나 지나치면 다시 조정해야 합니다. 서두르기보다 한 번에 정확히 도착하는 것을 목표로 하세요.",
        "tips": "속도 경쟁보다 정확한 도착을 먼저 챙깁니다."
      },
      {
        "name": "눈 쉬게 하기",
        "desc": "화면을 오래 보면 깜빡임이 줄어 눈이 건조해집니다. 세트 사이에 의식적으로 눈을 깜빡이고 먼 곳을 보세요.",
        "tips": "20분마다 20초 정도 먼 곳 보기를 권장하는 눈 휴식 방법이 널리 쓰입니다."
      }
    ]
  },
  "steps": [
    "화면에서 50~70cm 떨어져 정면으로 앉습니다.",
    "훈련을 시작하고 시선을 화면 중앙에 둡니다.",
    "표적이 나타나면 눈으로 먼저 빠르게 이동합니다.",
    "표적에 초점을 맞추고 클릭한 뒤 기록을 확인합니다.",
    "세트가 끝나면 같은 조건의 이전 기록과 비교합니다."
  ],
  "audience": "화면 탐색과 시선 이동을 게임으로 연습해 보고 싶은 사용자와 FPS 게이머, 구기 종목 팬.",
  faqs,
  sources: pickSources('rayner1998', 'fischer1984', 'leigh2015', 'woods2015'),
  related: [
    { href: '/ko/drills/reaction-speed', label: '반응 속도 허브' },
    { href: '/ko/drills/visual/reaction-speed/light-reaction', label: '반응속도 테스트' },
    { href: '/ko/drills/reaction-speed/reflex-training-drill', label: '순발력 테스트 (반사신경 게임)' },
    { href: '/ko/drills/reaction-speed/visual-tracking-speed-test', label: '동체시력 테스트' },
  ],
};

export default function KoreanSaccadicGalleryPage() {
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
      <SaccadicGalleryWrapper copy={{ title: '시선 이동 훈련 게임', subtitle: '시선 도약 · 빠른 시각 포착', caption: '타깃 사이로 시선을 빠르게 옮기고 정확하게 클릭하세요.' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
