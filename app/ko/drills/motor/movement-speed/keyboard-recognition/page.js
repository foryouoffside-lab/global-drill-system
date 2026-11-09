import KeyboardRecognitionClient from '@/app/drills/motor/movement-speed/keyboard-recognition/KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ko/drills/motor/movement-speed/keyboard-recognition';
const TITLE = '키보드 반응속도 테스트 | 게임 키 바인드 연습 | SkillDrills';
const DESCRIPTION = '무료 키보드 반응속도 테스트: 화면에 뜬 키를 제한 시간 안에 누르고, 가짜 프롬프트는 참으세요. 60초 동안 평균 반응 시간, 정확도, KPM을 기록합니다. 발로란트·롤 키 바인드 프리셋 제공.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '키보드 반응속도 테스트',
    '키보드 반응속도 테스트 사이트',
    '키 바인드 연습',
    '발로란트 키 바인드 연습',
    'WASD 반응 연습',
    '선택 반응 시간',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '운동 제어 훈련', item: 'https://skilldrills.online/ko/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '동작 속도', item: 'https://skilldrills.online/ko/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: '키보드 반응속도 테스트', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  inLanguage: 'ko-KR',
  name: '키보드 반응속도 테스트',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ko-KR',
  name: '키보드 반응속도 테스트',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'JavaScript 지원 브라우저와 물리 키보드 필요',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'ko-KR',
  name: '키보드 반응속도 테스트',
  url: PAGE_URL,
  description: '화면에 표시된 키(단일 키, 2~5키 연속, 기억 모드)를 제한 시간 안에 누르고 가짜 프롬프트는 무시하는 60초 키 반응 게임.',
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko-KR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: '키보드 반응속도 테스트는 무엇을 측정하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '화면에 키 프롬프트가 나타난 뒤 그 키를 정확히 누르기까지의 시간을 잽니다. 결과 화면에는 평균 반응 시간(ms), 정확도, KPM(분당 키 입력 수), 최대 콤보, 등급이 표시됩니다. 키보드 장치의 입력 지연(하드웨어 레이턴시)이나 타자 속도(타수)를 재는 도구가 아니라, 표시된 키에 대한 사람의 반응을 재는 연습입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '어떤 프롬프트가 나오나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '단일 키, 2~3개 키를 순서대로 누르는 시퀀스(긴 시퀀스 모드는 5개), 3개 키를 1초 보여 준 뒤 숨기는 기억 모드, 그리고 누르면 안 되는 가짜 프롬프트가 섞여 나옵니다. 키 풀은 A~Z, 0~9, Space, Shift, Ctrl, Alt, Tab, Enter, 기호, F1~F6, 방향키입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '점수는 어떻게 계산되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '정확히 입력하면 120점 × 콤보 배율이며, 시퀀스는 1.4배, 기억 모드는 1.8배입니다. 가짜 프롬프트를 끝까지 누르지 않으면 +200점입니다. 틀린 키를 누르거나 가짜 프롬프트에 반응하거나 제한 시간이 지나면 콤보가 초기화됩니다. 세션은 60초 고정입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '난이도와 제한 시간은 어떻게 정해지나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '기본값인 적응형 모드는 프롬프트당 약 1.8초에서 시작해 연속으로 맞히면 짧아지고(최소 약 0.8초) 실수하면 다시 길어집니다. 고정 난이도는 쉬움 1.5배, 보통 1.0배, 어려움 0.75배, 전문가 0.55배 시간입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '발로란트나 롤 키 배치로 연습할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '네. Valorant, CS2, Fortnite, Minecraft, League of Legends, Apex Legends 프리셋을 누르면 해당 게임의 기본 키 바인드만 프롬프트로 나옵니다. 각 게임과 제휴한 공식 도구는 아닙니다.',
      },
    },
    {
      '@type': 'Question',
      name: '타자 연습이나 키보드 키 테스트로 쓸 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '아니요. 단어나 문장을 치는 타자 연습이 아니고, 모든 키가 정상 입력되는지 확인하는 키보드 테스터도 아닙니다. 한글 자판도 지원하지 않습니다. 정해진 키에 빠르고 정확하게 반응하는 게임용 키 바인드 연습입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '모바일에서도 할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '물리 키보드가 필요합니다. 터치 전용 기기에서는 시작할 수 없으며, 태블릿은 블루투스 키보드를 연결하면 됩니다.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ko-KR',
  dateModified: '2026-11-09',
  name: '키보드 반응속도 테스트 하는 법',
  description: '표시된 키에 반응하고 가짜 프롬프트를 참는 60초 연습 순서.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: '모드와 프리셋 선택',
      text: '훈련 모드, 난이도, 필요하면 게임 프리셋을 고른 뒤 왼손을 평소 쓰는 키 위에 올립니다.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '화면 프롬프트 보기',
      text: '키보드를 내려다보지 말고 화면 가운데에 뜨는 키를 확인합니다.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '누르거나 참기',
      text: '진짜 프롬프트는 제한 시간 안에 누르고, 가짜 프롬프트는 사라질 때까지 아무 키도 누르지 않습니다.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '결과 확인',
      text: '60초 후 평균 반응 시간, 정확도, KPM, 최대 콤보를 확인합니다.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966'),
  intro: {
    title: '키보드 반응속도 테스트란',
    paragraphs: [
      '키보드 반응속도 테스트는 여러 키 중 화면에 나온 하나를 골라 누르는 선택 반응 과제입니다(Donders, 1868). 고를 수 있는 키가 많을수록 반응이 느려지고(Hick, 1952), 가짜 프롬프트에서 멈추는 것은 반응 억제 연습입니다(Logan, 1984).',
      '반응 시간은 브라우저 타이머, 모니터 주사율, 키보드에 따라 달라지므로 같은 기기에서 자신의 기록 변화를 비교하세요.',
    ],
  },
  benchmark: {
    title: '드릴 등급 기준',
    description: '결과 등급은 이 드릴 코드에 정해진 점수와 정확도 기준으로 매겨집니다. 연구 기준이나 사용자 통계, 백분위가 아닙니다.',
    columns: ['등급', '점수', '정확도'],
    rows: [
      { grade: 'S+', score: '3,500+', accuracy: '95%+' },
      { grade: 'S', score: '2,200+', accuracy: '90%+' },
      { grade: 'A', score: '1,400+', accuracy: '85%+' },
      { grade: 'B', score: '700+', accuracy: '80%+' },
      { grade: 'C', score: '300+', accuracy: '75%+' },
      { grade: 'D', score: '100+', accuracy: '65%+' },
    ],
  },
  protocols: {
    title: '연습 팁',
    description: '실수를 줄이고 기록을 올리는 방법.',
    items: [
      {
        title: '키 구역 나누기',
        description: '이동(WASD), 스킬(Q, E, C, X), 숫자열(1~4)처럼 구역을 나눠 기억하면 프롬프트를 보고 손가락을 고르는 시간이 줄어듭니다.',
      },
      {
        title: '가짜 프롬프트에서 멈추기',
        description: '확인하기 전에 누르는 습관이 있으면 콤보가 자주 끊깁니다. 프롬프트 종류를 먼저 보고 누르세요.',
      },
      {
        title: '시퀀스는 묶어서 입력',
        description: '2~5키 시퀀스는 키를 하나씩 읽지 말고 한 묶음으로 기억해 이어서 누르세요(Sternberg, 1966).',
      },
    ],
  },
  faqs: {
    title: '자주 묻는 질문 (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const koCopy = {
  title: '키보드 반응속도 테스트',
  subtitle: '화면에 뜬 키를 누르는 게임 키 바인드 반응 연습',
};

export default function KoreanKeyboardRecognitionPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <KeyboardRecognitionClient copy={koCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
    </>
  );
}
