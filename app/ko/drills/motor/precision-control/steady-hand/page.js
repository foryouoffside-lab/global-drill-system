import SteadyHandClient from '@/app/drills/motor/precision-control/steady-hand/SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// ============================================================

export const metadata = {
  title: '마우스 미로 게임 | 손 안정성 테스트 | SkillDrills',
  description: '마우스 미로 게임: 빛나는 선에서 벗어나지 않고 커서를 골인 지점까지 옮기는 무료 전기충격 미로. 랩을 깨면 시간이 45초로 돌아가고 다음 길은 더 구불구불해집니다.',
  keywords: [
    '마우스 미로 게임', '마우스 미로', '손 떨림 미로', '손 안정성 테스트',
    '마우스 경로 추적', '미세 운동 조절', '마우스 정밀 조작',
    '커서 제어 테스트', '전기충격 미로게임',
    '손 떨림 제어', '게이밍 마우스 정밀도', '마우스 조작 연습',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: '마우스 미로 게임 | 손 안정성 테스트 | SkillDrills',
    description: '마우스 미로 게임: 빛나는 선에서 벗어나지 않고 커서를 골인 지점까지 옮기는 무료 전기충격 미로. 랩을 깨면 시간이 45초로 돌아가고 다음 길은 더 구불구불해집니다.',
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: '마우스 미로 게임 | 손 안정성 테스트 | SkillDrills',
    description: '마우스 미로 게임: 빛나는 선에서 벗어나지 않고 커서를 골인 지점까지 옮기는 무료 전기충격 미로. 랩을 깨면 시간이 45초로 돌아가고 다음 길은 더 구불구불해집니다.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '운동 훈련', item: 'https://skilldrills.online/ko/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '정밀 제어', item: 'https://skilldrills.online/ko/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: '전기충격 미로게임', item: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'ko-KR',
  name: '전기충격 미로게임 – 마우스 정밀도 연습',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description: '브라우저에서 바로 즐기는 무료 온라인 전기충격 미로게임. 선 중심에서 2.5픽셀 넘게 벗어나면 출발점으로 돌아가며, 랩을 이어 갈수록 길이 더 구불구불해집니다.',
  url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ko-KR',
  name: '전기충격 미로게임 온라인',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas 및 고속 포인터 이벤트를 지원하는 최신 웹 브라우저',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'ko-KR',
  name: '전기충격 미로게임 & 마우스 정밀 제어 드릴',
  url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand',
  description: '선에서 벗어나지 않고 커서를 골인 지점까지 옮기는 온라인 미로 게임. 미세한 마우스 조절과 손 안정성을 연습합니다.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko-KR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: '전기충격 미로게임이란 무엇이며 어떤 운동 능력을 측정하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '전기충격 미로게임(Steady Hand Game)은 구불구불하게 빛나는 선을 벗어나지 않고 커서를 왼쪽 출발 영역에서 오른쪽 골인 영역까지 옮기는 마우스 정밀도 게임입니다. 반사 신경이 아니라 느리고 안정적인 커서 제어와 시각 피드백에 따른 미세 보정을 연습합니다. 점수는 45초 안에 클리어한 랩 수입니다.',
      },
    },
    {
      '@type': 'Question',
      name: '좁은 통로를 통과할 때 마우스 이동을 지배하는 과학적 법칙은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '경계로 제한된 좁은 통로를 통과하는 운동 시간은 조니 아콧과 슈민 자이(Accot & Zhai, 1997)의 스티어링 법칙(Steering Law)에 의해 지배됩니다. 통과 시간은 경로 길이를 통로 폭으로 적분한 값에 비례하므로, 통로 폭이 좁아질수록 벽 충돌을 피하기 위해 물리적으로 속도를 줄여야 합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '통로 벽에 닿으면 커서가 왜 시작 지점으로 즉시 리셋되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '엔진은 매 프레임 커서와 경로 중심선 사이의 거리를 계산합니다. 출발 영역과 골인 영역 사이에서 중심선에서 2.5픽셀 넘게 벗어나면 벽 충돌로 판정되어 커서가 출발점으로 돌아가고, 벽 충돌이 1회 늘며 연속 랩이 0이 됩니다. 타이머는 멈추지 않습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '랩을 클리어할수록 난이도는 어떻게 변화하나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '허용 오차(중심선 ±2.5픽셀)는 처음부터 끝까지 같습니다. 대신 랩을 연속으로 클리어할수록 다음 경로의 꺾임 수(15개에서 최대 120개)와 위아래 진폭이 커져 길이 더 구불구불해집니다. 벽에 닿으면 연속 랩이 0으로 돌아가므로 다음 경로는 다시 완만해집니다.',
      },
    },
    {
      '@type': 'Question',
      name: '마우스 조작 중 손떨림이 발생하는 원인은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '정상적인 사람이라도 운동 단위의 동기 발화와 사지의 기계적 공진으로 인해 8~12Hz 주기의 생리적 진전(손떨림)이 발생합니다. 마우스를 너무 세게 쥐거나(길항근 과긴장), 심리적 긴장 또는 카페인 섭취 시 진전 진폭이 증폭되어 벽 충돌을 유발합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '전기충격 미로게임에 가장 적합한 마우스 그립법과 DPI 설정은 무엇인가요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '팔 전체의 부드러운 글라이딩과 손가락 끝의 미세 제어가 조화되는 핑거팁 또는 클로 그립이 추천됩니다. DPI는 400~800 DPI 범위의 저감도로 설정하여 미세 떨림으로 인한 커서 요동을 물리적으로 흡수하는 것이 유리합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '우드워스의 2요소 운동 모델(1899)은 이 게임에 어떻게 적용되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '로버트 우드워스는 목표를 향한 손 움직임이 초기 탄도성 추진과 후속 피드백 기반 현재 제어(Current Control)로 나뉜다고 규명했습니다. 미로 통로 주행은 시각 피드백으로 벽과의 거리를 실시간 계산하여 미세 보정하는 폐루프 현재 제어가 연속적으로 작동합니다.',
      },
    },
    {
      '@type': 'Question',
      name: '손 안정성 연습이 게이머와 일러스트레이터에게 도움이 되나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'FPS 게임의 미세 트래킹 에임이나 디지털 펜 드로잉의 선화 작업처럼 좁은 궤적을 안정적으로 유지해야 하는 작업과 비슷한 동작을 연습할 수 있습니다. 효과에는 개인차가 있습니다.',
      },
    },
    {
      '@type': 'Question',
      name: '장시간 연습 시 손목 통증과 근육 경련을 방지하는 팁이 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '팔꿈치를 90도로 받치고 마우스 피트를 책상에 과도하게 내리누르지 않아야 합니다. 급커브에 진입하기 전 의식적으로 숨을 내쉬어 어깨와 전완근의 힘을 빼고, 1세트마다 손목 스트레칭을 병행하세요.',
      },
    },
    {
      '@type': 'Question',
      name: '트랙볼 마우스나 타블렛 펜(스타일러스)으로도 진행할 수 있나요?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PC에서는 포인터 잠금으로 마우스 이동량을 읽으므로 마우스와 트랙볼로 조작할 수 있고, 터치스크린에서는 손가락을 끌어 조작합니다. 타블렛 펜은 기기에 따라 동작이 다를 수 있습니다. 기기마다 결과가 다르니 같은 기기에서 비교하세요. 이 게임은 의학적 손떨림 검사가 아닙니다.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ko-KR',
  dateModified: '2026-11-09',
  name: '전기충격 미로게임으로 마우스 정밀도와 손떨림을 훈련하는 방법',
  description: '점점 구불구불해지는 코스를 벽 접촉 없이 완주하고 스티어링 효율을 높이는 단계별 프로토콜.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand#step-1',
      name: '시작 존에 커서 위치',
      text: '「훈련 시작」을 누르면 3초 카운트다운 뒤 커서가 왼쪽 녹색 출발 영역에 놓이고 45초 타이머가 시작됩니다. PC에서는 포인터 잠금이 걸리며 Esc로 종료합니다.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand#step-2',
      name: '등속의 매끄러운 궤적으로 전진',
      text: '빛나는 녹색 선을 따라 커서를 부드럽게 미끄러뜨립니다. 제한 시간과 벽 충돌 위험 사이의 균형을 유지합니다.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand#step-3',
      name: '급커브 진입 전 감속 및 시선 선행',
      text: '헤어핀 곡선에 진입하기 전 속도를 약 40% 줄이고, 커서의 20~30픽셀 전방을 주시하여 시각 피드백 보정을 선제적으로 수행합니다.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand#step-4',
      name: '골인 존 도달로 다음 랩 진입',
      text: '오른쪽 녹색 골인 영역에 도달하면 랩이 완료되고 타이머가 45초로 리셋됩니다. 연속 랩이 늘수록 다음 경로의 꺾임과 진폭이 커집니다.',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: '손떨림과 미세 제어 능력의 측정 원리와 한계',
    paragraphs: [
      '측정 정밀도와 하드웨어적 한계: 본 드릴의 시간 측정은 브라우저의 performance.now() API(스펙터 완화책으로 약 1ms 해상도로 양자화)를 사용합니다. 시각적 렌더링은 모니터 주사율에 의해 60Hz에서 약 16.7ms, 144Hz에서 약 6.9ms, 240Hz에서 약 4.1ms 주기로 갱신됩니다(Woods et al., 2015). 마우스 폴링레이트는 125Hz에서 약 8ms, 1000Hz에서 약 1ms의 딜레이를 유발합니다. 5ms 미만의 차이는 측정 노이즈로 간주하고 타인의 장비와 비교하기보다 동일 환경에서 자신의 기록 추세를 비교 분석하십시오. SkillDrills는 모든 점수를 브라우저 로컬 저장소에만 안전하게 기록하며 외부 서버로 수집하지 않습니다.',
    ],
  },
  benchmark: {
    title: '전기충격 미로게임 SkillDrills 연습 구간',
    description: '연구 기준이나 사용자 통계가 아닌 SkillDrills 연습 구간입니다. 결과 화면의 등급 기준(한 세션의 클리어 랩 수와 벽 충돌 횟수)과 같습니다.',
    columns: ['등급', '칭호', '클리어 랩', '벽 충돌', '구간'],
    rows: [
      { tier: 'S+', rank: '신의 손 안정성', stat: '8랩 이상', errors: '0회', band: 'SkillDrills 연습 구간' },
      { tier: 'S', rank: '달인급 조타력', stat: '6랩 이상', errors: '1회 이하', band: 'SkillDrills 연습 구간' },
      { tier: 'A', rank: '정밀 컨트롤', stat: '4랩 이상', errors: '2회 이하', band: 'SkillDrills 연습 구간' },
      { tier: 'B', rank: '안정적 컨트롤', stat: '2랩 이상', errors: '제한 없음', band: 'SkillDrills 연습 구간' },
      { tier: 'C', rank: '기초 완주', stat: '2랩 미만', errors: '제한 없음', band: 'SkillDrills 연습 구간' },
    ],
  },
  protocols: {
    title: '손떨림 억제 및 미세 조타 훈련 프로토콜',
    description: '좁은 통로에서 속도와 정확성을 함께 연습하기 위한 지침입니다.',
    items: [
      {
        title: '프로토콜 1: 아콧-자이 스티어링 법칙 속도 조절 (통로 폭 페이싱)',
        description: 'Accot-Zhai(1997) 법칙에 따르면 제한된 터널을 지나는 시간은 경로가 좁고 길수록 늘어납니다. 완만한 구간에서는 빠르게 이동해 시간을 아끼고, 급하게 꺾이는 구간 직전에는 속도를 크게 줄여 벽 충돌을 막으세요.',
      },
      {
        title: '프로토콜 2: 우드워스 시선 선행 피드포워드 추종',
        description: 'Robert S. Woodworth(1899)의 현재 제어 모델에 근거하여, 커서 위치가 아닌 커서 전방 20~30픽셀 앞을 시선으로 리드합니다. 이 선행 추종을 통해 시각 피질이 약 150ms의 지연을 극복하고 벽에 부딪히기 전 미세 궤도 수정을 완수합니다.',
      },
      {
        title: '프로토콜 3: 생리적 진전(8~12Hz) 억제와 관절 분리',
        description: '완만한 곡선은 팔꿈치와 전완근의 글라이딩으로 그리고, 손가락은 중심선 미세 보정에만 국한합니다. 마우스를 너무 꽉 쥐면 주동근과 길항근이 동시 수축하여 8~12Hz 생리적 진전이 증폭되므로 의식적으로 힘을 빼야 합니다.',
      },
      {
        title: '프로토콜 4: 급커브 구간 에이펙스(인코스) 코너링',
        description: '연속 랩이 쌓여 꺾임이 촘촘해지면 속도보다 선 중심 유지가 최우선입니다. 코너를 돌 때 살짝 안쪽 정점(Apex)을 노리면 급회전에서 커서가 바깥쪽으로 밀려나는 실수를 줄일 수 있습니다.',
      },
    ],
  },
  faqs: {
    title: '전기충격 미로게임에 관한 자주 묻는 질문(FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const koCopy = {
  h1Keyword: '마우스 미로 게임',
  subtitle: '빛나는 선에서 벗어나지 않고 골인까지 커서를 옮기며 손 안정성과 경로 정밀도를 연습합니다',
  h1Suffix: ' (손 안정성 & 경로 추적)',
  caption: '전기충격 미로게임은 빛나는 선에서 벗어나지 않고 커서를 골인 지점까지 옮기며 마우스 미세 조절과 손 안정성을 연습하는 게임입니다. 아콧-자이 스티어링 법칙(1997)과 우드워스 폐루프 피드백 모델(1899)을 참고했습니다.',
  statLaps: '클리어 랩',
  statTime: '남은 시간',
  statStreak: '연속 통과',
  statBest: '최고 기록',
  pausedTitle: '일시 중지됨',
  pausedPrompt: '화면을 클릭하여 커서를 고정하고 게임을 재개하세요.',
  startTitle: '전기충격 미로게임',
  startSubtitle: '손 안정성과 경로 정밀도 • 45초',
  startBtn: '훈련 시작',
  countdownSubtitle: '집중하세요',
  newBest: '신기록 달성',
  errorsLabel: '벽 충돌 횟수',
  maxStreakLabel: '최대 연속 랩',
  difficultyLabel: '도달 레벨',
  trainAgain: '다시 도전',
  shareTitle: '점수 공유',
  exitTitle: '종료 및 복귀',
  rulesTitle: '조작 방법 및 스코어 판정',
  rulesItems: [
    { num: '1', text: '발광하는 에메랄드', highlight: '미로 통로를 정확히 추종', result: '골인 도달 시 45초로 시간 리셋' },
    { num: '2', text: '랩 클리어', highlight: '무한 난이도 상승', result: '꺾임과 진폭 증가' },
    { num: '3', text: '벽 접촉 시', highlight: '시작 지점 즉시 리셋', result: '연속 랩 초기화, 충돌 +1' },
    { num: '4', text: '마우스 (포인터 잠금)', highlight: '터치 지원', result: 'Esc로 종료' },
  ],
  rule1Text: '발광하는 에메랄드',
  rule1Highlight: '미로 통로를 정확히 추종',
  rule1Result: '골인 도달 시 45초로 시간 리셋',
  rule2Text: '랩 클리어',
  rule2Highlight: '무한 난이도 상승',
  rule2Result: '꺾임과 진폭 증가',
  rule3Text: '벽 접촉 시',
  rule3Highlight: '시작 지점 즉시 리셋',
  rule3Result: '연속 랩 초기화, 충돌 +1',
  rule4Text: '마우스 (포인터 잠금)',
  rule4Highlight: '터치 지원',
  rule4Result: 'Esc로 종료',
  aboutTitle: '전기충격 미로게임(Steady Hand Drill) 정보',
  aboutHeading: '연속 궤적 추종 정밀도와 생리적 손떨림 억제',
  aboutP1: '마우스 미로 게임(전기충격 미로게임)은 커서를 빛나는 선에서 벗어나지 않게 골인 지점까지 옮기는 게임입니다. 랩을 연속으로 클리어할수록 다음 길의 꺾임과 진폭이 커지고, 선에서 2.5픽셀 넘게 벗어나면 시작 지점으로 돌아갑니다. 눈과 손의 협응, 느리지만 안정적인 커서 제어를 연습하는 용도이며 의학적 손떨림 검사는 아닙니다.',
  aboutP2: 'Johnny Accot & Shumin Zhai(1997)의 스티어링 법칙에 따르면 터널 통과 시간은 경로 길이를 폭으로 나눈 적분값에 비례합니다. 허용 폭이 좁고 경로가 길고 구불구불할수록 실시간 시각 피드백(Woodworth, 1899)에 따른 미세 보정이 더 많이 필요합니다.',
  aboutCard1Title: '추천 대상',
  aboutCard1Text: 'FPS/MOBA 게이머, 디지털 일러스트레이터 등 커서 떨림을 줄이고 마우스를 안정적으로 다루고 싶은 분.',
  aboutCard2Title: '훈련 효과',
  aboutCard2Text: '미세 운동 협응, 커서 안정성, 코너 구간 속도 제어를 연습합니다. 효과에는 개인차가 있습니다.',
  aboutCard3Title: '점점 구불구불해지는 경로',
  aboutCard3Text: '허용 폭(±2.5픽셀)은 그대로이고, 연속 랩이 늘 때마다 다음 경로의 꺾임 수와 위아래 진폭이 커집니다.',
  gradeLabels: {
    'S+': '신의 손 안정성 (Grandmaster)',
    'S': '달인급 조타력 (Master)',
    'A': '정밀 에임 마스터 (Diamond)',
    'B': '안정적 컨트롤 (Platinum)',
    'C': '기초 완주 (Gold)',
  },
  shareDrillName: '전기충격 미로게임',
  shareUrl: 'https://skilldrills.online/ko/drills/motor/precision-control/steady-hand',
  shareTextTemplate: '🖐️ {drillName}에서 {laps}랩 완주 (정밀도: {acc}) 달성! skilldrills.online에서 무료로 도전해보세요!',
  copiedAlert: '점수 카드가 클립보드에 복사되었습니다!',
};

export default function KoreanSteadyHandPage() {
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
      <SteadyHandClient copy={koCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
