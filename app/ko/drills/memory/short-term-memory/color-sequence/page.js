import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

// ============================================================
// SEO EMPIRICAL RESEARCH FINDINGS — ko-KR (color-sequence)
// PRIMARY DOMESTIC: "사이먼 게임 온라인" — Core classic Simon memory game search
//                   "색깔 기억 게임" — High-demand domestic brain training query
// SECONDARY / LSI:
//                   "순서 기억력 테스트" — Sequence memory capacity test
//                   "단기기억력 테스트" — Short-term memory assessment
//                   "작업기억력 훈련" — Working memory cognitive training
//                   "시각 기억력 게임" — Visual memory game
//                   "시공간 메모장 훈련" — Baddeley visuospatial sketchpad
//                   "청킹 암기법 훈련" — Memory chunking strategy
//                   "색상 패턴 기억" — Chromatic pattern retention
//                   "사이먼 세이즈 게임" — Simon says game synonym
// WINNER TITLE:     사이먼 게임 – 온라인 색깔 순서 기억력 테스트 | SkillDrills (36 chars)
// ============================================================

export const metadata = {
  title: '색깔 순서 기억 게임 | SkillDrills',
  description: '무료 색깔 순서 기억 게임: 빛과 소리로 제시되는 색상 순서를 기억해 같은 순서로 눌러 보세요.',
  keywords: [
    '색깔 순서 기억',
    '색깔 기억력 게임',
    '순서 기억 게임',
    '기억력 게임',
    '사이먼 스타일 게임',
    '색깔 기억 게임',
    '순서 기억력 테스트',
    '단기기억력 테스트',
    '작업기억력 훈련',
    '시각 기억력 게임',
    '시공간 메모장 훈련',
    '청킹 암기법 훈련',
    '색상 패턴 기억',
    '사이먼 세이즈 게임',
    '두뇌 기억력 테스트',
    '순차적 기억 측정',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: '색깔 순서 기억 게임 | SkillDrills',
    description: '무료 색깔 순서 기억 게임: 빛과 소리로 제시되는 색상 순서를 기억해 같은 순서로 눌러 보세요.',
    url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: '색깔 순서 기억 게임 | SkillDrills',
    description: '무료 색깔 순서 기억 게임: 빛과 소리로 제시되는 색상 순서를 기억해 같은 순서로 눌러 보세요.',
  },
};

const copyKo = {
  title: '색깔 순서 기억 게임',
  subtitle: '빛나는 색의 순서를 기억해 그대로 누르기',
  caption: '점차 길어지는 색상 신호의 순서를 집중해서 관찰하고, 기억하여 동일한 순서대로 입력하세요.',
  statScore: '점수',
  statTime: '남은 시간',
  statLevel: '레벨',
  statBestScore: '최고 점수',
  rulesTitle: '훈련 규칙 & 채점 시스템',
  rule1Text: '순서 재현 타건',
  rule1Highlight: '+100 PTS',
  rule1Result: '깜빡인 색상 시퀀스를 정확한 순서대로 클릭하여 입력',
  rule2Text: '레벨 상승 보너스',
  rule2Highlight: '+10% PTS / 레벨',
  rule2Result: '시퀀스가 길어질수록 더 높은 배율의 점수 획득',
  rule3Text: '오답 / 시간 초과',
  rule3Highlight: '-1 레벨',
  rule3Result: '점수나 시간 차감 없이 해당 난이도 재도전',
  rule4Text: '적응형 난이도 엔진',
  rule4Highlight: '실시간 가변',
  rule4Result: '플레이어의 성공 여부에 따라 시퀀스 길이가 지능적으로 조절',
  aboutTitle: '색깔 순서 기억 게임 & 시각 작업기억 정보',
  overviewTitle: '색깔 순서 기억 훈련(사이먼 스타일)이란?',
  overviewLead: '인간의 시각 작업 기억은 한 번에 약 4개의 단순한 항목만을 유지할 수 있으며, 이 한계는 대상의 복잡성이 아닌 개수에 의해 결정됩니다 (Luck & Vogel, 1997; Cowan, 2001). 점진적으로 길어지는 색상 시퀀스는 이 인지적 한계를 직접 시험합니다.',
  aboutCards: [
    { title: '추천 대상', text: '학습 효율과 집중력을 높이고자 하는 학생, 두뇌 회전과 작업 기억 용량을 단련하려는 성인 및 게이머.' },
    { title: '단련되는 인지 능력', text: '단기 시각 기억력, 작업 기억 지속력, 시공간 메모장(Baddeley & Hitch, 1974) 순차 부호화, 순간 주의 집중력.' },
    { title: '청킹(Chunking) 암기 전략', text: '개별 색상을 2~3개씩 묶음(예: 빨강-파랑)으로 묶어 4개 용량 한계를 뛰어넘는 전략적 부호화 습득 (Miller, 1956).' },
  ],
};

export default function KoreanColorSequencePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'SkillDrills 홈', item: 'https://skilldrills.online/ko' },
      { '@type': 'ListItem', position: 2, name: '기억력 훈련', item: 'https://skilldrills.online/ko/drills/memory' },
      { '@type': 'ListItem', position: 3, name: '단기 기억력', item: 'https://skilldrills.online/ko/drills/memory/short-term-memory' },
      { '@type': 'ListItem', position: 4, name: '색깔 순서 기억 게임', item: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '색깔 순서 기억 게임 (사이먼 스타일)',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    dateModified: '2026-11-12',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    description: '무료 온라인 사이먼 스타일 색깔 순서 기억 게임. 45초 동안 점점 길어지는 색 순서를 기억해 재현하며 시각 작업기억과 청킹 전략을 연습합니다.',
    genre: 'Cognitive Training / Visual Working Memory',
    url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence',
    publisher: {
      '@type': 'Organization',
      name: 'SkillDrills',
      url: 'https://skilldrills.online',
    },
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '색깔 순서 기억 게임',
    url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence',
    description: '6가지 색상의 순서를 기억해 같은 순서로 누르는 무료 브라우저 사이먼 스타일 게임. 레벨 1은 3색, 성공할 때마다 1색씩 늘어납니다.',
    dateModified: '2026-11-12',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: '색깔 순서 기억 게임',
    url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence',
    description: '가운데 원에 하나씩 켜지는 색의 순서를 기억해 6개 색 버튼으로 따라 누르는 사이먼 스타일 기억력 게임.',
    genre: ['Memory Game', 'Brain Training', 'Puzzle'],
    gamePlatform: ['Web Browser', 'Mobile', 'Tablet', 'Desktop'],
    applicationCategory: 'Game',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '색깔 순서 기억 게임은 어떻게 진행되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1978년 출시된 전자 게임 사이먼(Simon)과 같은 방식의 사이먼 스타일 기억력 게임입니다. 화면 가운데 원에 색이 하나씩 켜지면, 그 순서를 기억했다가 6개 색 버튼을 같은 순서로 누릅니다. 레벨 1은 3색으로 시작하며(색 개수 = 레벨 + 2), 성공하면 레벨이 1 오르고 틀리면 1 내려갑니다. 매 라운드 새로운 무작위 순서가 나오고, 한 세션은 45초입니다.',
        },
      },
      {
        '@type': 'Question',
        name: '색상 순서를 기억할 때 뇌의 어떤 부위와 인지 기능이 활성화되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '배들리와 히치(Baddeley & Hitch, 1974)의 작업 기억 모델 중 시공간 메모장(Visuospatial Sketchpad)과 음운 루프(Phonological Loop)가 동시에 활성화됩니다. 또한 전두엽의 집행 제어 기능이 작동하여 연속 자극을 부호화하고 인출합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '러크와 보겔(1997)의 4개 항목 기억 한계란 무엇인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '스티븐 러크와 에드워드 보겔의 네이처(Nature) 논문에 따르면, 인간의 시각 작업 기억은 개별적 정보 단위 약 3~4개 수준에서 포화 상태에 도달합니다. 이 연구는 동시에 제시된 배열을 다루었지만, 긴 색 순서를 기억할 때도 묶어서 외우는 전략(청킹)이 도움이 되는 이유를 설명해 줍니다.',
        },
      },
      {
        '@type': 'Question',
        name: '청킹(Chunking) 암기법이란 무엇이며 게임에서 어떻게 활용하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '청킹은 개별 정보를 의미 있는 덩어리로 묶는 기억 기술입니다 (Miller, 1956). 예를 들어 빨강, 파랑, 노랑, 초록을 개별적으로 기억하지 않고 "빨강-파랑" 한 묶음, "노랑-초록" 한 묶음으로 2개의 청크로 압축하면 기억 부하가 절반으로 줄어듭니다.',
        },
      },
      {
        '@type': 'Question',
        name: '클래식 4색 게임과 달리 6가지 색상을 사용하는 이유는 무엇인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '기존의 4가지 색상(빨강, 파랑, 초록, 노랑)에 보라색과 주황색을 추가하여 선택 엔트로피를 높였습니다. 이를 통해 숙련된 게이머와 성인 사용자에게 더 깊은 수준의 시각적 식별과 작업 기억 부하를 제공합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '순서를 틀리거나 시간이 초과되면 점수 페널티가 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '아니요, 점수나 시간 감소 페널티는 없습니다. 색을 잘못 누르거나 8초 안에 다음 색을 누르지 않으면 레벨이 1단계(색 1개) 내려가고(최저 레벨 1), 새로운 무작위 순서로 다시 시작합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '어느 정도 레벨이나 점수면 잘한 건가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '공식 기준은 없습니다. SkillDrills는 사용자 데이터를 수집하지 않으므로 평균이나 백분위를 제시하지 않습니다. 레벨 L의 순서는 L+2개 색이고, 라운드 성공 시 100 × (1 + 0.1 × 레벨)점을 얻습니다. 아래 연습 구간을 참고해 자신의 이전 기록과 비교하세요.',
        },
      },
      {
        '@type': 'Question',
        name: '이 훈련이 일상생활의 건망증 개선에도 도움이 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '보장할 수는 없습니다. 연습하면 이 과제 자체의 기록은 오를 수 있지만, 일상 기억력으로 효과가 옮겨 가는지는 연구마다 결과가 엇갈립니다. 짧고 재미있는 순서 기억 연습으로 활용하세요. 기억력이 걱정된다면 전문의와 상담하세요.',
        },
      },
      {
        '@type': 'Question',
        name: '모바일 스마트폰이나 태블릿에서도 원활하게 터치 플레이가 가능한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 반응형 웹 터치 인터페이스에 완벽하게 최적화되어 있어 스마트폰, 태블릿, PC 브라우저 어디서나 지연 없이 즉각적인 터치와 클릭으로 플레이할 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: '이 게임은 완전 무료인가요? 점수가 외부에 공개되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '완전 무료이며 회원가입이나 앱 다운로드가 전혀 필요 없습니다. 최고 점수와 훈련 통계는 브라우저의 로컬 저장소(localStorage)에만 안전하게 저장됩니다.',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '색깔 순서 기억 게임 훈련 가이드',
    description: '4단계를 거쳐 시각적 작업 기억력과 시퀀스 패턴 기억 능력을 극대화하는 훈련법.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: '깜빡이는 색상 순서 집중 관찰',
        text: '세션을 시작하고 화면 가운데 원에 하나씩 켜지는 색을 주의 깊게 봅니다.',
        url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence#step-1',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '색상 패턴을 2~3개 단위 청크로 묶기',
        text: '불빛의 순서를 머릿속으로 소리 내거나 도형 궤적으로 묶어 청크(Chunk)를 형성합니다.',
        url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence#step-2',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '기억한 순서대로 정확하게 터치',
        text: '입력 신호가 켜지면 방금 본 순서 그대로 색상 버튼을 차례대로 누릅니다.',
        url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence#step-3',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: '레벨을 높여 최고 점수 갱신',
        text: '성공할 때마다 한 단계씩 길어지는 고난도 시퀀스를 돌파하며 최고 기록을 달성합니다.',
        url: 'https://skilldrills.online/ko/drills/memory/short-term-memory/color-sequence#step-4',
      },
    ],
  };

  const sequenceGuide = {
    heading: '색깔 순서 기억 게임 가이드 & 시각 작업기억',
    intro: [
      '색상 순서를 기억하고 재현하는 과제는 인간의 시각적 작업 기억(Visual Working Memory)과 연속적 패턴 보존 능력을 정밀하게 측정하고 단련하기 위한 대표적인 신경인지 훈련입니다. 1978년 랄프 베어(Ralph H. Baer)와 하워드 모리슨에 의해 개발된 전자식 기억 게임 \'사이먼(Simon)\'을 모태로 하며, 역동적으로 점멸하는 색채 자극을 즉각 부호화하고 구조화된 버퍼에 저장한 뒤 정확한 시계열 순서로 인출하도록 설계되었습니다.',
      '인간 단기 기억의 인지적 용량 한계는 수십 년에 걸친 신경심리학 연구를 통해 명확히 규명되었습니다. 조지 밀러(George A. Miller, 1956)가 언어적 시연에서 $7 \\pm 2$개의 정보 병목을 제시한 반면, 스티븐 러크와 에드워드 보겔(Luck & Vogel, 1997) 및 넬슨 코완(Nelson Cowan, 2001)의 기념비적 연구는 순수 시각 작업 기억의 용량이 엄격하게 \'약 4개 독립 항목\'으로 제한됨을 입증했습니다. 능동적인 재부호화 전략이 동반되지 않는다면, 인간의 즉각 회상 능력은 4개 이상의 연속 자극에서 급격히 붕괴합니다.',
      '앨런 배들리의 작업 기억 다중 구성요소 모형(Baddeley & Hitch, 1974; Baddeley, 2000)에 따르면, 시각적 연속 자극의 처리는 \'시공간 메모장(Visuospatial Sketchpad)\'을 가동합니다. 로버트 로기(Robert H. Logie, 1995)는 이를 수동적 시각 캐시(색상 및 형태 유지)와 능동적 내부 서기관(시공간적 운동 궤적 시연)으로 세분화했습니다. 숙련된 수행자는 음운 루프(Phonological Loop)를 동시 결합하여 이중 부호화(시각적 심상 + 내적 발성)를 수행함으로써 작업 기억 버퍼의 보존력을 두 배로 확장합니다.',
      '이 게임은 45초 세션 동안 점수, 도달한 최고 레벨(순서 길이), 정확도(성공 라운드 비율)를 기록합니다. 색을 누르는 반응 시간은 측정하지 않습니다.',
      '라운드 진행 방식: 레벨 L에서는 6가지 색 중 L + 2개의 색이 매번 새로운 무작위 순서로 나타납니다. 레벨이 오를수록 각 색이 켜지는 시간이 짧아지며(약 0.7초에서 최소 0.25초), 이후 각 입력마다 8초가 주어집니다. 틀린 색을 누르거나 시간이 지나면 레벨이 1 내려갑니다.',
      '데이터 투명성 및 개인정보 보호: SkillDrills는 사용자의 플레이 결과나 집계 데이터를 외부 서버로 전송하거나 수집하지 않습니다. 모든 기억 점수, 반응 지연 시간, 레벨 진행 기록은 전적으로 사용자의 브라우저 로컬 저장소(localStorage)에만 안전하게 보관됩니다. 따라서 본 페이지는 사용자 평균, 백분위, 이용자 수를 제시하지 않으며, 인용된 수치는 하단 참고문헌의 연구에서 가져온 것입니다.'
    ],
    benchmarks: {
      title: '색깔 순서 기억 게임 연습 구간 (SkillDrills 기준, 45초 세션)',
      headers: ['연습 구간', '달성 레벨', '실수 없이 도달 시 점수', '전형적인 암기 방식'],
      rows: [
        ['구간 1', 'Level 11 이상 (13색 이상)', '약 1,550 PTS 이상', '색 이름 되뇌기와 묶어 외우기를 함께 사용'],
        ['구간 2', 'Level 8 – 10 (10–12색)', '약 980 – 1,549 PTS', '2~3개 단위 청킹을 안정적으로 사용'],
        ['구간 3', 'Level 5 – 7 (7–9색)', '약 500 – 979 PTS', '빠른 색 전환에서 중간 색을 놓치기 쉬움'],
        ['구간 4', 'Level 3 – 4 (5–6색)', '약 230 – 499 PTS', '낱개로 외우며 청킹은 아직 미사용'],
        ['구간 5', 'Level 1 – 2 (3–4색)', '230 PTS 미만', '규칙과 속도에 익숙해지는 단계']
      ],
      note: '인구 평균이 아닌 SkillDrills 연습 구간입니다. 점수는 실수 없이 해당 레벨에 도달했을 때의 값입니다(라운드 점수 = 100 × (1 + 0.1 × 레벨)). 실수하면 레벨이 내려가므로 실제 점수는 달라질 수 있습니다.'
    },
    techniques: {
      title: '긴 시퀀스를 기억하기 위한 4가지 과학적 기억 전략',
      items: [
        {
          name: '리듬 청킹 기법 (밀러의 정보 묶기)',
          desc: '색상을 낱개로 기억하지 말고 리듬감 있는 묶음으로 암기하세요. 머릿속으로 "빨강-파랑 ... 초록-노랑"과 같이 일정한 박자에 맞추어 호흡합니다.',
          tips: '시퀀스가 4개를 넘어가면 무조건 2개 또는 3개 단위로 묶어 처리하세요.'
        },
        {
          name: '입력 버튼 위치로 경로 만들기',
          desc: '색은 가운데 원 한 곳에서만 켜지지만, 입력할 6개 색 버튼(3×2 격자)의 위치는 고정되어 있습니다. 색이 켜질 때마다 해당 버튼의 위치를 떠올려 손가락이 지나갈 경로로 기억해 보세요 (Logie, 1995).',
          tips: '시작 전에 버튼 배치를 한 번 익혀 두면 경로를 떠올리기 쉽습니다.'
        },
        {
          name: '색 이름 되뇌기 (음운 루프 활용)',
          desc: '색이 켜질 때마다 머릿속으로 "빨-파-초"처럼 색 이름의 첫 글자를 되뇌면, 시각 기억에 언어 기억이 더해져 이중으로 저장됩니다 (Baddeley, 2000).',
          tips: '두 개씩 끊어 리듬 있게 되뇌세요.'
        },
        {
          name: '중간 색 지키기 (계열 위치 효과)',
          desc: '매 라운드 완전히 새로운 무작위 순서가 나오므로 이전 라운드의 패턴은 도움이 되지 않습니다. 처음과 마지막 색은 비교적 잘 기억되지만 중간 색이 가장 잘 잊히므로, 중간 부분을 의식적으로 묶어 두세요.',
          tips: '첫 묶음은 바로 되뇌고, 마지막 색은 방금 본 잔상에 맡기세요.'
        }
      ]
    },
    steps: [
      '45초 세션을 시작하고 화면 가운데 원을 주시합니다.',
      '하나씩 켜지는 색의 순서를 집중해서 관찰합니다.',
      '머릿속에서 패턴을 리듬감 있는 2~3개 단위 청크로 재구성합니다.',
      '입력 차례가 오면 기억한 순서대로 6개 색 버튼을 누릅니다(각 입력은 8초 이내).',
      '레벨을 계속 끌어올려 더 긴 체인을 완성하고 최고 점수를 갱신합니다.'
    ],
    audience: '시험 대비 기억력 향상이 필요한 학생, 시각적 순간 포착과 반응을 높이려는 게이머, 뇌 건강과 집중력을 강화하려는 성인.',
    faqs: faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'luck1997', 'baddeley1974', 'miller1956'),
    related: [
      { href: '/ko/drills/memory/working-memory/n-back', label: '듀얼 N-백 작업기억 훈련' },
      { href: '/ko/drills/memory/short-term-memory/digit-span', label: '디지트 스팬 숫자 기억 테스트' },
      { href: '/ko/drills/memory/spatial-memory/grid-memorization', label: '격자 공간 기억력 훈련' },
      { href: '/ko/drills/cognitive/focus/concentration-grid', label: '슐테 테이블 집중력 격자' },
      { href: '/ko/drills/cognitive/focus/distraction-fighter', label: '스트룹 검사 인지 억제 훈련' }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ColorSequenceClient copy={copyKo} />
      <DrillGuide guide={sequenceGuide} />
      <RelatedDrills />
    </>
  );
}
