import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/reflex-training/reaction-chain';
const title = "오버에임 교정 훈련 | 마우스 에임 브레이킹 | SkillDrills";
const description = "표적을 맞힌 뒤 커서를 정확히 멈추는 무료 오버에임 교정 훈련. 마우스 에임 브레이킹으로 오버플릭과 정지 조작을 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["오버에임 교정", "오버에임 트레이닝", "오버플릭 교정", "마우스 에임 브레이킹", "마우스 정지 연습", "에임 정지 훈련", "정지 조작 연습", "무료 에임 연습"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain') },
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
      "name": "훈련 드릴",
      "item": "https://skilldrills.online/ko/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "반사신경 훈련",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "오버에임 교정 · 마우스 에임 브레이킹",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training/reaction-chain"
    }
  ]
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "리액션 체인 마우스 에임 브레이킹",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  inLanguage: 'ko',
  dateModified: '2026-10-08',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "리액션 체인 마우스 에임 브레이킹 웹 앱",
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
  name: "리액션 체인 마우스 에임 브레이킹",
  url,
  description,
  genre: ['Action Game', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ko',
  dateModified: '2026-10-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  {
    "q": "오버에임 교정 훈련은 무엇을 하나요?",
    "a": "빠르게 다가오는 노드를 맞히고 노드 안에서 커서를 완전히 멈추는 연습입니다. 표적을 지나쳐 버리는 오버에임이나 오버플릭을 줄이려면 마지막에 멈추는 동작이 중요하고, 이 드릴은 그 부분만 따로 연습하게 합니다. 특정 게임 점수를 보장하지는 않습니다."
  },
  {
    "q": "오버에임과 오버플릭은 같은 말인가요?",
    "a": "비슷하게 쓰입니다. 커서나 조준점이 표적을 지나쳐 가는 현상을 가리키는 게이머 용어로, 사람마다 쓰는 범위가 조금 다릅니다. 이 페이지에서는 표적을 지나쳐 버리는 움직임 전반을 뜻합니다."
  },
  {
    "q": "점수는 어떻게 얻나요?",
    "a": "노드를 맞히고 노드 안에서 커서를 완전히 멈추면(ARREST READY 표시) 50점을 얻습니다. 실수 없이 이어가면 콤보 배율이 최대 3.0배까지 오릅니다. 멈추지 않고 스쳐 지나가거나 놓치면 콤보가 초기화되며 점수가 깎이지는 않습니다."
  },
  {
    "q": "멈춘 것으로 인정되는 기준은 무엇인가요?",
    "a": "노드 안에서 커서 이동 속도가 프레임당 1.5px 미만으로 줄어들면 정지로 판정합니다. 노드를 지나치지 않고 안에서 속도를 줄이는 것이 핵심입니다. 판정은 이 드릴 안에서만 쓰이는 기준입니다."
  },
  {
    "q": "난이도는 어떻게 올라가나요?",
    "a": "점수가 오를수록 노드 속도가 최대 1,800px/s까지 빨라지고 유효 정지 반경이 줄어듭니다. 기본 시간은 45초입니다. 속도가 빨라질수록 멈출 여유가 줄어 감속 타이밍이 더 중요해집니다."
  },
  {
    "q": "멈추는 것이 가속하는 것보다 어려운가요?",
    "a": "많은 사람이 그렇게 느끼지만 개인차가 있습니다. 움직이는 명령과 멈추는 명령이 경쟁한다는 모형이 있고(Logan & Cowan, 1984), 멈추는 쪽이 늦으면 관성으로 지나치게 됩니다. 이 드릴의 점수가 멈춤 반응 시간을 직접 재는 것은 아닙니다."
  },
  {
    "q": "크게 이동하고 작게 보정하는 것은 무슨 뜻인가요?",
    "a": "빠른 조준 동작은 먼저 크게 이동한 뒤 마지막에 작게 보정하는 두 단계로 설명됩니다(Woodworth, 1899). 표적이 작거나 좁을수록 정밀한 보정이 어려워진다는 관계는 피츠의 법칙(Fitts, 1954)이 설명합니다. 이 드릴은 그 마지막 보정 구간을 연습합니다."
  },
  {
    "q": "발로란트나 카운터스트라이크 실력이 늘어나나요?",
    "a": "보장할 수 없습니다. 표적을 지나치지 않고 멈추는 연습이지만 게임의 감도, 화면, 규칙이 달라 같은 결과로 이어진다고 단정할 수 없습니다. 연습 기록을 비교하는 용도로 쓰세요."
  },
  {
    "q": "포인터 잠금과 마우스 설정은 어떻게 하나요?",
    "a": "이 드릴은 시작하면 화면에 포인터 잠금을 요청하며, 일시 정지 후 화면을 클릭하면 다시 잠깁니다. 평소 쓰는 DPI와 감도로 시작하고, 설정을 바꿨다면 바꾸기 전후 점수를 같은 조건에서 비교하세요. 입력이 가공되지 않는다는 보장은 하지 않습니다."
  },
  {
    "q": "기록은 어디에 저장되나요?",
    "a": "점수와 정지 정확도는 브라우저의 로컬 저장소에 보관되며 이 드릴에서 서버로 올리지 않습니다. 브라우저 데이터를 삭제하면 기록도 사라집니다. 자세한 내용은 개인정보처리방침을 확인하세요."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "오버에임 교정 훈련 하는 방법",
  description: "표적을 맞히고 커서를 정확히 멈추는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "크게 이동",
    "text": "노드가 나타나면 커서를 노드 근처까지 한 번에 옮깁니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "진입 전에 감속",
    "text": "노드 경계에 들어오기 직전 속도를 줄입니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "안에서 멈추기",
    "text": "노드 안에서 커서를 완전히 멈춰 정지 표시가 뜨게 합니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "콤보 유지",
    "text": "지나치지 않고 연속으로 멈춰 콤보 배율을 높입니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  "heading": "오버에임 교정 훈련 가이드",
  "intro": [
    "리액션 체인은 빠르게 다가오는 노드를 맞히고 노드 안에서 커서를 완전히 멈추는 브라우저 훈련입니다. 표적을 지나쳐 버리는 오버에임과 오버플릭을 줄이려면 마지막에 멈추는 동작이 중요하고, 이 드릴은 그 동작만 따로 연습하게 합니다.",
    "움직임을 시작하는 명령과 멈추는 명령이 경쟁한다는 모형이 있습니다(Logan & Cowan, 1984). 또 빠른 조준은 먼저 크게 이동하고 마지막에 작게 보정하는 두 단계로 설명됩니다(Woodworth, 1899). 표적이 작을수록 정밀하게 멈춰야 하는 관계는 피츠의 법칙으로 알려져 있습니다(Fitts, 1954).",
    "노드 속도는 점수에 따라 최대 1,800px/s까지 빨라지고 유효 정지 반경은 줄어듭니다. 커서 속도가 프레임당 1.5px 미만이 되면 정지로 판정합니다.",
    "점수는 같은 마우스, 감도, 모니터에서 비교하세요. 주사율과 입력 장치도 지연에 영향을 줄 수 있습니다(Woods et al., 2015). 결과는 연습 기록이며 게임 실력이나 등급을 보장하지 않습니다."
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
        "노드 안에서 한 번 멈추기",
        "천천히 접근하고 정지 표시 확인하기"
      ],
      [
        "2단계",
        "연속으로 멈추기",
        "노드 경계 직전에 감속하기"
      ],
      [
        "3단계",
        "콤보 이어가기",
        "스쳐 지나가려는 습관 줄이기"
      ],
      [
        "4단계",
        "빠른 노드 대응",
        "크게 이동한 뒤 짧게 보정하기"
      ],
      [
        "5단계",
        "좁은 정지 반경",
        "손가락 힘을 빼고 정확히 멈추기"
      ]
    ],
    "note": "이 표는 SkillDrills의 연습 방향 안내입니다. 점수 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "정확히 멈추는 4가지 연습법",
    "items": [
      {
        "name": "진입 전에 감속하기",
        "desc": "노드 경계에 닿은 뒤에 속도를 줄이면 이미 늦습니다. 경계에 들어오기 직전에 감속을 시작하세요.",
        "tips": "처음에는 점수보다 정지 표시가 뜨는지 확인합니다."
      },
      {
        "name": "힘 빼고 멈추기",
        "desc": "멈출 때 손목과 손가락에 힘이 들어가면 커서가 흔들립니다. 손의 힘을 빼고 관성을 줄이듯 멈추세요.",
        "tips": "마우스 패드와 피트의 마찰 때문에 정지감이 달라질 수 있으니 같은 장비로 비교합니다."
      },
      {
        "name": "스쳐 지나가지 않기",
        "desc": "노드를 스치며 클릭하는 습관은 정지 판정을 못 받고 콤보를 끊습니다. 속도보다 정확한 정지를 먼저 챙기세요.",
        "tips": "정지 상태를 잠깐 유지하는 연습을 합니다."
      },
      {
        "name": "콤보 관리",
        "desc": "한 번 놓치면 콤보가 1.0배로 돌아갑니다. 무리하게 속도를 올리기보다 안정적으로 이어가세요.",
        "tips": "점수의 많은 부분이 높은 콤보 구간에서 나오므로 침착하게 이어갑니다."
      }
    ]
  },
  "steps": [
    "포인터 잠금이 켜진 상태에서 커서를 중앙에 둡니다.",
    "노드가 나타나면 커서를 크게 움직여 접근합니다.",
    "경계 직전에 감속해 노드 안에서 커서를 완전히 멈춥니다.",
    "45초 동안 연속으로 멈춰 콤보와 점수를 쌓습니다."
  ],
  "audience": "표적을 자꾸 지나치는 오버에임을 연습으로 줄여 보고 싶은 FPS 게이머와, 마우스 정지 동작을 연습하려는 사용자.",
  faqs,
  sources: pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedReactionChainPageKo() {
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
      <ReactionChainClient
        copy={{
          title: "오버에임 교정 훈련",
          subtitle: "표적을 맞춘 뒤 커서를 정확히 멈추기",
          badge: "마우스 에임 브레이킹",
          description: "표적을 향해 빠르게 움직이는 것보다 정확히 멈추는 것이 더 어렵다고 느끼는 사람이 많습니다. 움직임을 시작하는 명령과 멈추는 명령이 경쟁한다는 모형이 있으며(Logan & Cowan, 1984), 멈춤이 늦으면 관성으로 표적을 지나치게 됩니다. 노드를 맞히고 그 안에서 커서를 멈춰 보세요.",
          hudLabels: {
            score: "현재 점수",
            time: "남은 시간",
            accuracy: "정지 정확도",
            bestScore: "최고 점수",
            getReady: "준비하세요"
          },
          pauseTitle: "훈련 일시 정지",
          pauseSubtitle: "화면을 클릭하면 포인터 잠금이 다시 활성화됩니다.",
          resultLabels: {
            newBest: "최고 기록 달성",
            points: "최종 점수",
            accuracy: "정지 정확도",
            totalArrests: "요격 정지 성공",
            maxCombo: "최대 콤보",
            peakLevel: "도달 레벨",
            playAgain: "다시 도전하기"
          },
          rulesTitle: "훈련 규칙과 점수 계산",
          rulesItems: [
            {
              "title": "정지 성공 (+50점)",
              "text": "다가오는 노드를 맞히고 노드 안에서 커서를 완전히 멈추면(ARREST READY) 50점을 얻습니다."
            },
            {
              "title": "콤보 배율 (최대 3.0배)",
              "text": "실수 없이 연속으로 정지에 성공하면 콤보 배율이 최대 3.0배까지 오릅니다."
            },
            {
              "title": "스쳐 지나감과 놓침",
              "text": "멈추지 않고 노드를 스쳐 지나가거나 놓치면 콤보가 초기화됩니다(점수 차감은 없음)."
            },
            {
              "title": "속도 증가",
              "text": "점수가 오를수록 노드 속도가 최대 1,800px/s까지 빨라지고 유효 정지 반경이 줄어듭니다."
            }
          ],
          aboutTitle: "오버에임 교정 훈련 안내",
          aboutSections: [
            {
              "title": "멈추는 동작 따로 연습하기",
              "content": "리액션 체인은 표적을 맞힌 뒤 커서를 멈추는 동작을 따로 연습하게 합니다. 단순히 클릭하는 것이 아니라 노드 안에서 속도를 줄여 완전히 멈춰야 점수를 얻습니다."
            },
            {
              "title": "시작 명령과 멈춤 명령의 경쟁",
              "content": "움직임을 시작하는 명령과 멈추는 명령이 경쟁한다는 모형이 있습니다(Logan & Cowan, 1984). 멈춤이 늦으면 관성으로 표적을 지나칠 수 있습니다. 이 드릴의 효과는 검증되지 않았으며 연습 기록 비교용입니다."
            }
          ],
          aboutCards: [
            {
              "title": "이런 분께",
              "desc": "표적을 지나치는 오버에임을 줄이려는 FPS 게이머와 정지 동작을 연습하려는 사용자.",
              "bgClass": "bg-blue-600/30",
              "iconClass": "text-blue-400"
            },
            {
              "title": "연습하는 것",
              "desc": "감속 타이밍, 정지 조작, 노드 위치 예상.",
              "bgClass": "bg-emerald-600/30",
              "iconClass": "text-emerald-400"
            },
            {
              "title": "정지 판정",
              "desc": "노드 안에서 커서 속도가 프레임당 1.5px 미만이 되면 정지로 판정합니다.",
              "bgClass": "bg-purple-600/30",
              "iconClass": "text-purple-400"
            }
          ]
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/reaction-chain" />
      </ReactionChainClient>
    </>
  );
}
