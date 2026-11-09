import FingerSequencingClient from '@/app/drills/motor/movement-speed/finger-sequencing/FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/ko/drills/motor/movement-speed/finger-sequencing';
const TITLE = '순서 클릭 연습 | 경로 순서대로 타깃 클릭 | SkillDrills';
const DESCRIPTION = '무료 순서 클릭 연습: 점선 경로가 알려주는 순서대로 타깃 3~5개를 마우스로 클릭하세요. 정타마다 +2초, 미스와 함정은 -1초. 레벨이 오를수록 타깃이 작아지는 브라우저 마우스 연습 게임입니다.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '순서 클릭 연습',
    '순서대로 클릭',
    '마우스 클릭 연습',
    '마우스 정확도 연습',
    '마우스 연습 게임',
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
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '운동 제어 훈련', item: 'https://skilldrills.online/ko/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '동작 속도', item: 'https://skilldrills.online/ko/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: '순서 클릭 연습', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'ko-KR',
  name: '순서 클릭 연습',
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
  name: '순서 클릭 연습',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas 및 JavaScript 지원 필요',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'ko-KR',
  name: '순서 클릭 연습',
  url: PAGE_URL,
  description: '점선으로 이어진 타깃을 정해진 순서대로 클릭하는 마우스 연습 게임. 레벨이 오를수록 타깃이 작아지고 멀어지며 체인 제한 시간이 짧아집니다.',
  genre: ['Mouse Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
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
      name: '순서 클릭 연습은 어떻게 하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '화면에 타깃 3개(레벨 1~2), 4개(레벨 3~5) 또는 5개(레벨 6 이상)가 한 체인으로 나타나고, 보라색 점선이 클릭 순서를 보여 줍니다. 빛나는 현재 타깃부터 순서대로 마우스로 클릭(터치 기기는 탭)하세요. 숫자는 표시되지 않으므로 점선 경로를 따라가면 됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '시간과 점수는 어떻게 계산되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '시작 시간은 45초이며, 순서에 맞는 타깃을 맞힐 때마다 +2초(최대 60초)가 추가됩니다. 체인을 끝까지 완료하면 150점 × 연속 체인 배율(최대 3.0배) × 레벨 보너스가 들어옵니다. 시간이 0이 되면 기록이 종료됩니다.',
      },
    },
    {
      '@type': 'Question',
      name: '빨간 느낌표(!) 타깃은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '레벨 6부터 등장하는 함정 타깃입니다. 클릭하면 빈 곳을 클릭한 미스와 똑같이 -1초, 연속 기록 초기화, 새 체인 생성이 적용됩니다. 점선 경로에 포함되지 않으므로 건너뛰고 다음 타깃을 누르세요.',
      },
    },
    {
      '@type': 'Question',
      name: '체인 제한 시간이 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '타임아웃 설정이 켜져 있으면(기본값) 체인마다 제한 시간이 있습니다. 첫 레벨에서 약 3.2초이고 레벨과 연속 기록이 오를수록 짧아집니다. 시간 안에 끝내지 못하면 -1초와 연속 기록 초기화가 적용되고 새 체인이 나옵니다.',
      },
    },
    {
      '@type': 'Question',
      name: '레벨이 오르면 무엇이 바뀌나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1,750점마다 레벨이 1씩 오르고 상한은 없습니다. 레벨이 오를수록 타깃 수가 늘고, 타깃이 작아지며 서로 멀어지고, 체인 제한 시간이 짧아집니다. 낮은 레벨에서는 뒤쪽 타깃이 더 작고 흐리게 보이는 힌트가 있지만 레벨 10 무렵 사라집니다.',
      },
    },
    {
      '@type': 'Question',
      name: 'CPS 테스트와 무엇이 다른가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CPS 테스트는 한 자리에서 버튼을 누르는 횟수만 셉니다. 순서 클릭 연습은 정해진 순서대로 마우스를 옮겨 정확히 멈추고 누르는 동작을 연습하며, 클릭 횟수보다 이동과 정확도가 점수를 좌우합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '정확도는 어떻게 계산되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '전체 시도(클릭, 함정 클릭, 체인 시간 초과 포함) 중 순서에 맞게 맞힌 타깃의 비율입니다. 결과 화면에는 정확도, 완료한 체인 수, 최고 레벨, 최대 콤보가 표시됩니다.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ko-KR',
  dateModified: '2026-11-09',
  name: '순서 클릭 연습 하는 법',
  description: '점선 경로를 따라 타깃을 순서대로 클릭하는 단계별 방법.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: '경로 확인',
      text: '첫 클릭 전에 보라색 점선이 이어 주는 타깃 순서를 한눈에 확인합니다.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: '빛나는 타깃부터 클릭',
      text: '현재 빛나는 타깃을 클릭하고, 점선을 따라 다음 타깃으로 이동합니다.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: '함정 건너뛰기',
      text: '레벨 6부터 나오는 빨간 느낌표 타깃은 누르지 말고 경로 위 타깃만 클릭합니다.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: '결과 확인',
      text: '정확도, 완료한 체인 수, 최고 레벨, 최대 콤보를 보고 다음 판의 목표를 정합니다.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954'),
  intro: {
    title: '순서 클릭 연습이란',
    paragraphs: [
      '순서 클릭 연습은 가장 가까운 타깃이 아니라 정해진 순서대로 타깃을 클릭하는 마우스 연습입니다. 타깃 사이 이동 시간은 거리와 크기에 따라 달라지고(Fitts, 1954), 정해진 순서의 동작은 하나로 묶어 미리 계획할 수 있습니다(Lashley, 1951; Keele, 1968).',
      '측정은 브라우저 타이머와 모니터 주사율의 영향을 받으므로 같은 기기와 같은 마우스 설정에서 자신의 기록 변화를 비교하세요.',
    ],
  },
  benchmark: {
    title: '순서 클릭 연습 참고 구간',
    description: 'SkillDrills가 정한 연습용 참고 구간입니다. 연구 기준이나 사용자 통계, 백분위가 아닙니다.',
    columns: ['구간', '도달 레벨', '정확도'],
    rows: [
      { tier: '구간 1', level: '레벨 12+', accuracy: '95% 이상' },
      { tier: '구간 2', level: '레벨 9–11', accuracy: '90–94%' },
      { tier: '구간 3', level: '레벨 6–8', accuracy: '85–89%' },
      { tier: '구간 4', level: '레벨 3–5', accuracy: '75–84%' },
      { tier: '구간 5', level: '레벨 1–2', accuracy: '75% 미만' },
    ],
  },
  protocols: {
    title: '연습 팁',
    description: '기록을 안정적으로 올리기 위한 방법.',
    items: [
      {
        title: '경로를 먼저 읽기',
        description: '첫 클릭 전에 점선 전체를 보고 체인을 하나의 움직임으로 계획하세요. 타깃마다 멈춰서 다음 위치를 찾는 시간이 줄어듭니다.',
      },
      {
        title: '먼 거리는 빠르게, 마지막은 정확하게',
        description: '먼 거리는 팔로 빠르게 이동하고 타깃 가까이에서 손목과 손가락으로 멈추세요. 레벨이 오르면 타깃이 작아지므로 정확하게 멈추는 연습이 중요합니다.',
      },
      {
        title: '서두르지 않기',
        description: '미스 한 번이 -1초와 연속 기록 초기화로 이어지므로, 빠르지만 정확한 일정한 템포가 더 높은 점수로 이어집니다.',
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
  title: '순서 클릭 연습',
  subtitle: '점선 경로를 따라 타깃을 순서대로 클릭하는 마우스 연습',
  score: '점수',
  timeLeft: '남은 시간',
  accuracy: '정확도',
  bestScore: '최고 점수',
  startButtonText: '훈련 시작',
  startSubtitle: '경로 순서대로 클릭 • 45초 시작, 정타마다 +2초',
  getReady: '준비하세요',
  rulesTitle: '훈련 방법 및 점수',
  rulesItems: [
    { num: '1', text: '순서대로 맞힌 타깃', highlight: '+2초 (최대 60초)', result: '체인 완료 150점 × 배율' },
    { num: '2', text: '연속 체인 배율', highlight: '최대 3.0배', result: '연속 완료 시 상승' },
    { num: '3', text: '레벨', highlight: '1,750점마다 +1', result: '타깃 증가·축소' },
    { num: '4', text: '미스 / 함정 / 시간 초과', highlight: '-1초', result: '연속 기록 초기화' }
  ],
  chainsCleared: '완료한 체인',
  peakLevel: '최고 레벨',
  maxCombo: '최대 콤보',
  playAgain: '다시 훈련하기',
  shareTitle: '점수 공유',
  exitTitle: '나가기'
};

export default function KoreanFingerSequencingPage() {
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
      <FingerSequencingClient copy={koCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
