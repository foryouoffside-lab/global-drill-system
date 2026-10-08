import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/reflex-training/quick-dodge';
const title = "마우스 피하기 게임 | 탄막 피하기 순발력 테스트 | SkillDrills";
const description = "날아오는 탄막을 마우스 커서로 피하는 무료 마우스 피하기 게임. 아슬아슬한 회피로 콤보를 쌓으며 순발력과 마우스 컨트롤을 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["마우스 피하기 게임", "탄막 피하기 게임", "총알 피하기 게임", "마우스 컨트롤 게임", "순발력 테스트 게임", "마우스 무빙 연습", "투사체 회피 훈련", "무료 피하기 게임"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
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
      "name": "신체 훈련 센터",
      "item": "https://skilldrills.online/ko/drills/physical"
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
      "name": "마우스 피하기 게임",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training/quick-dodge"
    }
  ]
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "퀵 닷지 마우스 피하기 게임",
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
  name: "퀵 닷지 마우스 피하기 게임 웹 앱",
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
  name: "퀵 닷지 마우스 피하기 게임",
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
    "q": "마우스 피하기 게임은 어떻게 하나요?",
    "a": "마우스 커서를 움직여 사방에서 날아오는 붉은 투사체에 맞지 않고 최대한 오래 버티는 게임입니다. 1초 생존할 때마다 점수가 쌓이고, 투사체를 아슬아슬하게 스치면 보너스와 콤보가 붙습니다. 맞으면 콤보가 초기화됩니다."
  },
  {
    "q": "공포 마우스 피하기 게임과 같은가요?",
    "a": "아닙니다. 검색하면 귀신이 나오는 공포 플래시 게임이 많이 나오지만, 이 페이지는 놀라는 요소가 없는 탄막 회피 게임입니다. 투사체의 속도와 개수가 점점 늘어나는 점수형 연습입니다."
  },
  {
    "q": "점수와 콤보는 어떻게 쌓이나요?",
    "a": "1초 생존마다 점수가 쌓이고, 투사체를 아슬아슬하게 스치며 피하면(Close Shave) 추가 점수와 함께 콤보 배율이 오릅니다. 투사체에 맞으면 콤보가 1.0배로 돌아가고 붉은 경고 플래시가 나옵니다."
  },
  {
    "q": "난이도는 어떻게 올라가나요?",
    "a": "점수가 오를수록 투사체 속도가 최대 500px/s까지 빨라지고 생성 간격이 짧아집니다. 후반에는 투사체 수가 늘어 안전한 틈이 좁아집니다. 큰 동작으로 휘젓기보다 작은 움직임으로 틈을 찾는 편이 안정적입니다."
  },
  {
    "q": "반응속도보다 예측이 중요한가요?",
    "a": "빠른 투사체는 보고 나서 움직이면 늦기 쉽습니다. 시각 피드백을 반영하는 데는 100~150ms가 걸린다는 설명이 있고(Woodworth, 1899), 그래서 투사체가 갈 방향을 미리 가늠하고 움직이는 것이 도움이 됩니다. 이 게임의 결과가 개인의 예측 능력을 측정하는 것은 아닙니다."
  },
  {
    "q": "후반에는 어떻게 움직이는 게 좋나요?",
    "a": "커서를 크게 휘두르지 말고 투사체 사이의 틈으로 짧게 이동하세요. 작은 영역에서 미세하게 움직일수록 허용 오차가 좁아지므로(Fitts, 1954) 급하게 멈추고 방향을 바꾸는 연습이 필요합니다. 더 좋은 방법은 사람마다 다릅니다."
  },
  {
    "q": "롤이나 발로란트 무빙 실력이 늘어나나요?",
    "a": "보장할 수 없습니다. 마우스로 움직이는 대상을 피하는 연습이지만 게임의 조작, 화면, 규칙이 달라 같은 결과로 이어진다고 단정할 수 없습니다. 연습 기록을 비교하는 용도로 쓰세요."
  },
  {
    "q": "어떤 마우스 파지법이 유리한가요?",
    "a": "정해진 정답은 없습니다. 손목과 손가락으로 작게 움직이기 편한 평소 파지법을 쓰고, 설정을 바꿨다면 전후 점수를 같은 조건에서 비교하세요. 손목이나 손가락에 통증이 있으면 쉬거나 중단합니다."
  },
  {
    "q": "모니터 주사율이 영향을 주나요?",
    "a": "주사율이 높으면 빠른 투사체가 더 자주 갱신되어 보이고 입력 지연도 줄어드는 경향이 있습니다(Woods et al., 2015). 다만 이 게임에서 점수가 얼마나 달라지는지는 측정하지 않았습니다. 같은 환경에서 기록을 비교하세요."
  },
  {
    "q": "기록은 어디에 저장되나요?",
    "a": "점수와 최고 콤보는 브라우저의 로컬 저장소에 보관되며 이 드릴에서 서버로 올리지 않습니다. 브라우저 데이터를 삭제하면 기록도 사라집니다. 자세한 내용은 개인정보처리방침을 확인하세요."
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
  name: "마우스 피하기 게임 하는 방법",
  description: "탄막을 피하며 점수와 콤보를 쌓는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "중앙에서 시작",
    "text": "커서를 화면 중앙 근처에 두고 사방을 넓게 봅니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "틈 찾기",
    "text": "투사체가 가는 방향을 보고 비어 있는 틈을 찾습니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "작게 이동",
    "text": "크게 휘두르지 말고 짧게 이동해 투사체를 스치며 피합니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "콤보 유지",
    "text": "맞지 않고 이어서 피해 콤보 배율을 높입니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const dodgeGuide = {
  "heading": "마우스 피하기 게임 가이드",
  "intro": [
    "퀵 닷지는 사방에서 날아오는 붉은 투사체를 마우스 커서로 피하며 점수를 쌓는 브라우저 게임입니다. 반응 속도뿐 아니라 투사체가 갈 방향을 가늠하는 판단과 정밀한 마우스 움직임이 함께 쓰입니다.",
    "시각 정보가 움직임에 반영되기까지 100~150ms가 걸린다는 설명이 있어(Woodworth, 1899), 빠른 투사체는 미리 방향을 예상해 움직이는 편이 유리합니다. 예측에 소뇌 내부 모델이 쓰인다는 이론이 있습니다(Kawato, 1999). 이 게임은 그런 상황을 단순하게 만든 연습입니다.",
    "투사체가 늘어나면 안전한 틈이 좁아지고 정밀한 움직임이 더 어려워집니다(Fitts, 1954). 투사체 속도는 점수가 오르면 최대 500px/s까지 빨라집니다.",
    "점수는 같은 마우스, 감도, 모니터에서 비교하세요. 주사율과 입력 장치도 지연에 영향을 줄 수 있습니다(Woods et al., 2015). 결과는 연습 기록이며 의학적 검사나 선수 등급이 아닙니다."
  ],
  "benchmarks": {
    "title": "점수 구간 참고표",
    "headers": [
      "단계",
      "연습 목표",
      "연습 포인트"
    ],
    "rows": [
      [
        "1단계",
        "투사체 맞지 않고 버티기",
        "화면 중앙 근처에서 짧게 움직이기"
      ],
      [
        "2단계",
        "스침 회피 늘리기",
        "투사체 사이의 틈 찾기"
      ],
      [
        "3단계",
        "콤보 이어가기",
        "실수 후 침착하게 위치 회복하기"
      ],
      [
        "4단계",
        "빠른 투사체 대응",
        "커서를 크게 휘두르지 않기"
      ],
      [
        "5단계",
        "긴 세션 유지",
        "피로 전에 쉬고 같은 장비로 비교하기"
      ]
    ],
    "note": "이 표는 SkillDrills의 연습 방향 안내입니다. 점수 기준, 사용자 통계, 백분위가 아닙니다."
  },
  "techniques": {
    "title": "점수를 올리는 4가지 연습법",
    "items": [
      {
        "name": "작게 움직이기",
        "desc": "커서를 크게 휘두르면 새 투사체와 부딪히기 쉽습니다. 투사체 사이의 틈으로 짧게 이동하세요.",
        "tips": "큰 동작이 필요하면 투사체가 적은 쪽을 미리 정합니다."
      },
      {
        "name": "방향을 보고 미리 이동",
        "desc": "투사체가 닿은 뒤에 움직이면 늦습니다. 날아오는 방향을 보고 비어 있는 곳으로 먼저 움직이세요.",
        "tips": "가장 가까운 한두 개만 보기보다 전체 흐름을 봅니다."
      },
      {
        "name": "스침 회피 노리기",
        "desc": "투사체를 아슬아슬하게 스치면 보너스와 콤보가 붙습니다. 다만 무리하게 노리다 맞으면 콤보가 사라지니 안정이 먼저입니다.",
        "tips": "후반 고속 구간에서는 안전한 회피부터 하세요."
      },
      {
        "name": "편한 자세 유지",
        "desc": "손목과 어깨에 힘을 빼고 팔을 편하게 두세요. 힘이 들어가면 작은 움직임이 어려워집니다.",
        "tips": "통증이 있으면 중단하고 쉽니다."
      }
    ]
  },
  "steps": [
    "마우스를 편하게 잡고 커서를 화면 중앙에 둡니다.",
    "날아오는 투사체의 방향을 보고 비어 있는 틈을 찾습니다.",
    "짧게 이동해 투사체를 피하고 스치면 보너스를 얻습니다.",
    "맞지 않고 이어서 피해 콤보를 쌓습니다."
  ],
  "audience": "마우스 피하기 게임을 온라인에서 가볍게 즐기고 싶은 사용자와 마우스 컨트롤을 연습하려는 게이머.",
  faqs,
  sources: pickSources('kawato1999', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePageKo() {
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
      <QuickDodgeClient
        copy={{
          title: "마우스 피하기 게임",
          subtitle: "탄막을 마우스로 피하며 생존하기",
          description: "시각 정보가 움직임에 반영되기까지 100~150ms가 걸린다는 설명이 있어(Woodworth, 1899), 빠른 투사체는 방향을 미리 가늠하고 움직이는 편이 유리합니다. 속도가 빨라질수록 보고 나서 움직일 시간이 줄어듭니다.",
          badge: "순발력 탄막 테스트",
          hudLabels: {
            score: "현재 점수",
            time: "남은 시간",
            bestScore: "최고 점수",
            bestCombo: "최대 콤보",
            getReady: "준비하세요"
          },
          resultLabels: {
            newBest: "최고 기록 달성",
            points: "최종 점수",
            accuracy: "회피 성공률",
            dodges: "회피 횟수",
            peakSpeed: "최고 속도",
            peakLevel: "도달 레벨",
            playAgain: "다시 도전하기"
          },
          rulesTitle: "진행 규칙과 점수 계산",
          rulesItems: [
            {
              "title": "투사체 회피와 생존 점수",
              "text": "사방에서 날아오는 붉은 투사체에 맞지 않고 버티세요. 1초 생존할 때마다 점수가 쌓입니다."
            },
            {
              "title": "아슬아슬한 스침 회피",
              "text": "투사체를 근접해서 스치며 피하면 보너스 점수와 함께 콤보 배율이 오릅니다."
            },
            {
              "title": "점진적 난이도 상승",
              "text": "점수가 오를수록 투사체 속도가 최대 500px/s까지 빨라지고 생성 간격이 짧아집니다."
            },
            {
              "title": "피격",
              "text": "투사체에 맞으면 콤보 배율이 1.0배로 초기화되고 붉은 경고 플래시가 나옵니다."
            }
          ],
          aboutTitle: "마우스 피하기 게임 안내",
          aboutSections: [
            {
              "title": "보고 움직이면 늦는 이유",
              "subtitle": "우드워스(Woodworth, 1899)와 카와토(Kawato, 1999)",
              "content": "시각 정보가 움직임에 반영되기까지 100~150ms가 걸린다는 설명이 있습니다. 빠른 투사체는 방향을 미리 가늠해 움직이는 편이 유리합니다."
            },
            {
              "title": "크게 이동하고 작게 보정하기",
              "subtitle": "우드워스(Woodworth, 1899)의 두 단계 설명",
              "content": "빠른 움직임은 먼저 크게 이동하고 마지막에 작게 보정하는 두 단계로 설명됩니다. 좁은 틈에서는 속도를 줄여 정확히 멈추는 것이 중요합니다."
            },
            {
              "title": "좁아지는 틈",
              "subtitle": "피츠(Fitts, 1954)의 속도-정확도 관계",
              "content": "투사체가 늘어나면 안전한 틈이 좁아집니다. 목표가 작을수록 정밀하게 움직여야 한다는 관계가 이 게임의 후반 난이도를 설명합니다."
            },
            {
              "title": "장비와 지연",
              "subtitle": "우즈(Woods et al., 2015)의 입력 지연 연구",
              "content": "주사율과 입력 장치는 지연에 영향을 줄 수 있습니다. 점수를 비교할 때는 같은 장비를 사용하세요."
            }
          ]
        }}
      />
      <DrillGuide {...dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
