import DistanceJudgmentClient from '@/app/drills/visual/depth-perception/distance-judgment/DistanceJudgmentClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/visual/depth-perception/distance-judgment';
const title = "거리감 테스트 게임 | 원근감·거리 판단 연습 | SkillDrills";
const description = "다가오는 구체가 기준 링과 겹치는 순간 클릭하는 무료 거리감 테스트 게임. 원근감과 도달 타이밍을 연습하며, 의료용 입체시 검사는 아닙니다.";

export const metadata = {
  title,
  description,
  keywords: ["거리감 테스트", "원근감 테스트", "거리감 테스트 게임", "거리 판단 연습", "입체시 검사 차이", "깊이 지각", "도달 시간 판단", "거리감 훈련"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '시각 훈련', item: 'https://skilldrills.online/ko/drills/visual' },
    { '@type': 'ListItem', position: 3, name: '깊이 지각', item: 'https://skilldrills.online/ko/drills/visual/depth-perception' },
    { '@type': 'ListItem', position: 4, name: '거리감 테스트 게임', item: 'https://skilldrills.online/ko/drills/visual/depth-perception/distance-judgment' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "거리감 테스트 게임",
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
  name: "거리감 테스트 게임 웹 앱",
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
  name: "거리감 테스트 게임",
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
  name: "거리감 테스트 게임 하는 방법",
  description: "기준 링과 겹치는 순간을 맞히는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "기준 링 확인",
    "text": "화면 가운데의 기준 링 크기를 확인합니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "구체 지켜보기",
    "text": "깊은 곳에서 다가오는 구체가 커지는 속도를 지켜봅니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "겹치는 순간 클릭",
    "text": "구체의 가장자리가 기준 링과 겹치는 순간 클릭하거나 화면을 터치합니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "오차 확인",
    "text": "정확도를 확인하고 일찍 누르는 습관을 줄입니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "거리감 테스트 게임은 무엇을 하나요?",
    "a": "터널 깊은 곳에서 다가오는 구체의 가장자리가 기준 링의 크기와 겹치는 순간에 클릭하는 게임입니다. 구체가 커지는 속도를 보고 도달 시점을 가늠하는 연습이며, 클릭 시점의 오차율이 점수로 계산됩니다. 의료용 검사가 아니라 브라우저 연습 도구입니다."
  },
  {
    "q": "입체시 검사와 같은가요?",
    "a": "아닙니다. 입체시 검사는 두 눈의 시차를 이용한 깊이 지각을 보는 의료 검사입니다. 이 게임은 평면 모니터에서 구체의 크기 변화로 도달 시점을 가늠하는 연습이라 입체시를 측정하거나 진단하지 않습니다. 입체시가 걱정되면 안과 검진을 받으세요."
  },
  {
    "q": "운전면허 적성검사나 심시력 검사 연습이 되나요?",
    "a": "공식 검사와 방식이 다르므로 대비용으로 쓸 수 없습니다. 공식 검사는 지정된 장비와 절차로 진행되고, 이 게임은 구체가 기준 링과 겹치는 시점을 맞히는 연습입니다. 결과는 합격 여부와 무관한 연습 기록입니다."
  },
  {
    "q": "점수는 어떻게 계산되나요?",
    "a": "구체가 기준 링과 겹치는 시점에서 깊이 오차가 5% 미만이면 150점, 12% 미만이면 100점을 얻습니다. 시간 초과나 빗나감에는 감점이 없고 점수 없이 다음 표적이 나옵니다. 세션은 45초이며 레벨이 오르면 구체 속도가 빨라집니다."
  },
  {
    "q": "구체의 커지는 속도로 거리를 가늠할 수 있나요?",
    "a": "다가오는 물체가 커지는 속도로 부딪히기까지 남은 시간을 가늠할 수 있다는 연구가 있습니다(Lee, 1976; Regan & Beverley, 1978). 이 게임은 그런 상황을 단순하게 만든 것이며 개인의 시각 능력을 평가하는 도구가 아닙니다."
  },
  {
    "q": "어디를 보면서 해야 하나요?",
    "a": "다가오는 구체만 쫓지 말고 기준 링의 가장자리에 시선을 두고, 구체의 경계가 링에 닿는 순간을 기다려 클릭해 보세요. 더 좋은 방법은 사람마다 다를 수 있으니 직접 비교해 보세요."
  },
  {
    "q": "일찍 클릭하게 되는 건 왜 그런가요?",
    "a": "속도가 빨라지면 긴장해서 미리 누르기 쉽습니다. 클릭 타이밍을 늦추는 연습을 하고, 한 번에 레벨을 올리기보다 현재 속도에서 오차율을 안정시키세요."
  },
  {
    "q": "하워드-돌먼 검사와 관련이 있나요?",
    "a": "하워드-돌먼 장치는 두 막대의 거리 차이를 맞히는 전통적인 깊이 판단 검사입니다(Howard, 1919). 이 게임은 그 검사가 아니며 원리도 다릅니다. 깊이 판단을 주제로 한 연습 게임이라는 점만 공통입니다."
  },
  {
    "q": "모니터와 장비가 점수에 영향을 주나요?",
    "a": "주사율과 입력 지연이 클릭 시점에 영향을 줄 수 있습니다(Woods et al., 2015). 모니터 크기와 거리도 구체의 크기 변화가 보이는 방식을 바꿉니다. 같은 환경에서 기록을 비교하세요."
  },
  {
    "q": "기록은 어디에 저장되나요?",
    "a": "점수와 최고 레벨은 브라우저의 로컬 저장소에 보관되며 이 드릴에서 서버로 올리지 않습니다. 브라우저 데이터를 삭제하면 기록도 사라집니다. 자세한 내용은 개인정보처리방침을 확인하세요."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const distanceGuideKo = {
  "heading": "거리감 테스트 게임 가이드",
  "intro": [
    "이 드릴은 터널 깊은 곳에서 다가오는 3D 구체가 기준 링과 같은 크기로 보이는 순간에 클릭하는 거리감 연습 게임입니다. 구체가 커지는 속도를 보고 도달 시점을 가늠하는 판단과 클릭 타이밍을 함께 연습합니다.",
    "다가오는 물체가 커지는 속도로 부딪히기까지 남은 시간을 가늠할 수 있다는 연구가 있습니다(Lee, 1976; Regan & Beverley, 1978). 하워드-돌먼 장치는 전통적인 깊이 판단 검사로 알려져 있지만(Howard, 1919), 이 게임은 그 검사가 아닙니다.",
    "세션은 45초이며 깊이 오차가 5% 미만이면 150점, 12% 미만이면 100점을 얻습니다. 레벨이 오르면 구체 속도가 빨라지고, 빗나가도 감점은 없습니다.",
    "결과는 연습 기록입니다. 입체시 검사나 운전면허 적성검사를 대신하지 않으며, 시력 문제가 의심되면 안과 진료를 받으세요. 주사율과 입력 장치도 클릭 시점에 영향을 줄 수 있으니(Woods et al., 2015) 같은 환경에서 비교하세요."
  ],
  "benchmarks": {
    "title": "연습 단계 참고표",
    "headers": [
      "단계",
      "평균 오차율 참고",
      "연습 포인트"
    ],
    "rows": [
      [
        "1단계",
        "25% 초과",
        "구체가 링에 닿기 전에 누르는 습관 줄이기"
      ],
      [
        "2단계",
        "16 – 25%",
        "링 가장자리를 기준으로 기다리기"
      ],
      [
        "3단계",
        "10 – 16%",
        "일정한 리듬으로 클릭하기"
      ],
      [
        "4단계",
        "5 – 10%",
        "빠른 속도에서도 타이밍 유지하기"
      ],
      [
        "5단계",
        "5% 미만",
        "같은 오차율을 여러 판 유지하기"
      ]
    ],
    "note": "이 표는 SkillDrills의 연습 방향 안내입니다. 시각 검사 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "거리감 연습 요령 4가지",
    "items": [
      {
        "name": "링 가장자리에 시선 두기",
        "desc": "다가오는 구체를 쫓지 말고 기준 링 가장자리에 시선을 둔 채 구체의 경계가 닿는 순간을 기다리세요.",
        "tips": "시선이 흔들리면 속도를 한 단계 낮춥니다."
      },
      {
        "name": "일찍 누르지 않기",
        "desc": "속도가 빨라지면 긴장해서 미리 누르기 쉽습니다. 완전히 겹치는 순간까지 기다리는 연습을 하세요.",
        "tips": "오차율이 늘면 이전 속도로 돌아가 안정시킵니다."
      },
      {
        "name": "리듬 만들기",
        "desc": "구체가 커지는 간격에 맞춰 일정한 리듬으로 클릭하면 판마다 오차가 줄어듭니다.",
        "tips": "같은 손가락과 같은 클릭 방식으로 일정하게 누릅니다."
      },
      {
        "name": "눈 쉬게 하기",
        "desc": "화면을 오래 보면 깜빡임이 줄어 눈이 건조해집니다. 세트 사이에 깜빡이고 먼 곳을 보세요.",
        "tips": "눈이 불편하면 중단합니다."
      }
    ]
  },
  "steps": [
    "시작 버튼을 눌러 45초 세션을 시작합니다.",
    "화면 가운데의 기준 링 가장자리에 시선을 둡니다.",
    "터널 깊은 곳에서 다가오는 구체가 커지는 속도를 지켜봅니다.",
    "구체의 가장자리가 기준 링과 겹치는 순간 클릭하거나 터치합니다.",
    "판정을 확인하며 점점 빨라지는 속도에 적응합니다."
  ],
  "audience": "구체의 도달 시점을 가늠하는 거리 판단 게임을 해 보고 싶은 사용자와 구기 종목, 레이싱, FPS 게이머.",
  faqs,
  sources: pickSources('howard1919', 'lee1976', 'regan1978', 'julesz1971', 'woods2015'),
  related: [
    { href: "/ko/drills/visual/tracking-accuracy/moving-target", label: "움직이는 타겟 인터셉트" },
    { href: "/ko/drills/visual/reaction-speed/light-reaction", label: "빛 반응 속도 테스트" },
    { href: "/ko/drills/visual/tracking-accuracy/multiple-targets", label: "다중 객체 추적 (MOT)" },
    { href: "/ko/drills/visual/tracking-accuracy/pursuit-tracker", label: "활창 추종 안구 운동 트래커" },
    { href: "/ko/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go 충동 제어 훈련" },
    { href: "/ko/drills/visual/visual-recognition/entropic-grid", label: "엔트로픽 시각 탐색 테스트" }
  ],
};

const copyKo = {
  title: '거리감 테스트 게임',
  subtitle: '원근감·거리 판단 연습',
  caption: '다가오는 구체가 기준 링과 같은 크기로 보이는 순간을 맞혀 보세요. 구체가 커지는 속도로 도달 시점을 가늠하는 연습이며(Lee, 1976; Regan & Beverley, 1978) 의료 검사는 아닙니다.',
  statScore: '점수',
  statTime: '남은 시간',
  statLevel: '레벨',
  statBestScore: '최고 기록',
  startTitle: '거리감 테스트',
  startSubtitle: '다가오는 목표물의 거리감·타이밍 연습',
  startBtn: '테스트 시작',
  getReady: '준비하세요',
  newBest: '신기록 달성',
  statPoints: '점수',
  statAccuracy: '정확도',
  statPeakLevel: '최고 레벨',
  statIntercepts: '퍼펙트 일치',
  playAgain: '다시 하기',
  shareScore: '점수 공유',
  returnOptions: '종료',
  rulesTitle: '규칙과 점수 계산',
  rule1Text: '완벽한 거리 일치',
  rule1Highlight: '+150점',
  rule1Result: '깊이 오차 5% 미만',
  rule2Text: '근접 거리 일치',
  rule2Highlight: '+100점',
  rule2Result: '깊이 오차 12% 미만',
  rule3Text: '단계별 속도 가속',
  rule3Highlight: '고속 접근',
  rule3Result: '레벨 상승 시 구체 속도 증가',
  rule4Text: '시간 초과 / 빗나감',
  rule4Highlight: '감점 없음',
  rule4Result: '점수 없이 다음 타겟 즉시 출현',
  aboutTitle: '거리감 테스트 안내',
  overviewTitle: '이 테스트가 측정하는 핵심 능력',
  overviewLead: '다가오는 물체가 커지는 속도로 도달 시점을 가늠해 타이밍을 맞추는 연습입니다.',
  overviewBody: '구체가 커지는 속도를 보고 기준 링과 겹치는 순간을 맞히는 단순한 게임입니다. 의료용 입체시 검사나 면허 검사를 대신하지 않습니다.',
  aboutCards: [
    { iconBg: 'bg-blue-600', title: '추천 대상', text: '거리 판단 게임을 해 보고 싶은 사용자와 구기 종목, 레이싱, FPS 게이머.' },
    { iconBg: 'bg-cyan-600', title: '연습하는 것', text: '도달 시점 가늠, 클릭 타이밍, 눈과 손의 협응.' },
    { iconBg: 'bg-purple-600', title: '요령', text: '다가오는 구체보다 기준 링의 경계면에 시선을 두고 겹치는 순간에 클릭하세요.' }
  ]
};

export default function KoreanDistanceJudgmentPage() {
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
      <DistanceJudgmentClient copy={copyKo} />
      <DrillGuide guide={distanceGuideKo} />
      <RelatedDrills currentCategory="visual" currentHref="/drills/visual/depth-perception/distance-judgment" locale="ko" />
    </>
  );
}
