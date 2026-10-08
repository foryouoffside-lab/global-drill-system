import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/reflex-training/drop-catch';
const title = "낙하 반응속도 게임 | 자 떨어뜨리기 테스트 | SkillDrills";
const description = "떨어지는 초록 표적만 클릭하고 붉은 함정은 피하는 무료 반응속도 게임. 자 떨어뜨리기 테스트처럼 낙하 타이밍과 순발력을 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["낙하 반응속도 게임", "자 반응속도 테스트", "자 떨어뜨리기 반응속도", "반응속도 게임", "순발력 게임", "선택 반응속도 테스트", "반사신경 게임", "드롭 캐치"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch') },
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
      "name": "신체 훈련 허브",
      "item": "https://skilldrills.online/ko/drills/physical"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "반사신경 및 순발력",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "낙하 반응속도 게임 · 드롭 캐치",
      "item": "https://skilldrills.online/ko/drills/physical/reflex-training/drop-catch"
    }
  ]
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "드롭 캐치 낙하 반응속도 게임",
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
  name: "드롭 캐치 낙하 반응속도 게임 웹 앱",
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
  name: "드롭 캐치 낙하 반응속도 게임",
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
    "q": "자 떨어뜨리기 반응속도 테스트와 무엇이 다른가요?",
    "a": "자 떨어뜨리기 테스트는 떨어지는 자를 잡은 위치로 반응 시간을 가늠하는 방법입니다. 드롭 캐치는 화면에서 떨어지는 표적을 클릭하되, 초록 표적만 잡고 붉은 함정은 누르지 않는 선택 과제입니다. 단순 반응이 아니라 판단이 들어가고, 결과는 점수로 기록되는 연습용 게임입니다."
  },
  {
    "q": "초록 표적과 붉은 함정은 어떻게 구분하나요?",
    "a": "초록 표적은 클릭해서 점수와 추가 시간을 얻고, 붉은 함정은 클릭하지 않고 지나가게 둡니다. 함정을 누르면 콤보가 초기화됩니다. 색을 먼저 확인하고 누르는 습관이 점수와 콤보를 지킵니다."
  },
  {
    "q": "선택 반응이 단순 반응보다 느린 이유는 무엇인가요?",
    "a": "자극을 구분해야 하면 보고, 판단하고, 누르거나 참는 단계가 늘어나 반응 시간이 길어지는 경향이 있습니다. 이 구분은 돈더스(Donders, 1868)의 반응 시간 연구로 거슬러 올라갑니다. 이 드릴의 점수는 그 시간을 직접 측정한 값이 아닙니다."
  },
  {
    "q": "왜 붉은 함정을 누르지 않기가 어려운가요?",
    "a": "표적이 나타나면 누르려는 충동이 먼저 생기고, 색을 확인해 멈추는 과정이 그 충동과 경쟁한다는 모형이 있습니다(Logan et al., 1984). 함정 비율이 높아질수록 멈추는 연습도 함께 됩니다. 효과의 크기는 개인과 상황마다 다릅니다."
  },
  {
    "q": "레벨이 오르면 무엇이 달라지나요?",
    "a": "1,750점마다 레벨이 오릅니다. 낙하 속도는 초당 약 400px에서 1,250px까지 빨라지고, 표적 간격은 0.8초에서 0.18초로 짧아지며, 붉은 함정 비율은 15%에서 최대 45%까지 늘어납니다."
  },
  {
    "q": "점수와 시간은 어떻게 계산되나요?",
    "a": "초록 표적을 잡을 때마다 100점에 콤보와 레벨 배수가 곱해지고 남은 시간이 0.6초 늘어납니다. 기본 시간은 45초이며 콤보 배율은 최대 3.0배입니다. 초록 표적을 놓치거나 함정을 누르면 콤보가 1.0배로 돌아갑니다."
  },
  {
    "q": "페널티는 어떻게 적용되나요?",
    "a": "초록 표적이 바닥에 닿아 사라지거나 함정을 누르면 콤보가 초기화됩니다. 설정에서 페널티를 켜면 실수 1회마다 0.8초가 줄어듭니다. 무작정 빠르게 누르기보다 색을 확인하는 편이 유리합니다."
  },
  {
    "q": "어디를 보면서 해야 하나요?",
    "a": "화면 맨 위 한 점에만 집중하기보다 상단에서 중간 영역을 넓게 보면 표적이 나타나는 순간 색을 확인하기 쉽습니다. 떨어지는 경로 아래에 커서를 미리 두면 이동 거리가 줄어듭니다. 더 좋은 방법은 사람마다 다르니 직접 비교해 보세요."
  },
  {
    "q": "모니터 주사율이 영향을 주나요?",
    "a": "주사율이 높으면 빠르게 떨어지는 표적이 프레임마다 덜 크게 이동해 보이고, 입력 지연도 줄어드는 경향이 있습니다(Woods et al., 2015). 다만 이 드릴에서 점수가 얼마나 달라지는지는 측정하지 않았습니다. 기록은 같은 환경에서 비교하세요."
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
  name: "낙하 반응속도 게임 하는 방법",
  description: "초록 표적은 잡고 붉은 함정은 피하는 4단계 연습법입니다.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "색 먼저 확인",
    "text": "표적이 나타나면 초록인지 붉은색인지 먼저 확인합니다."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "함정은 누르지 않기",
    "text": "붉은 함정이면 클릭하지 않고 그대로 떨어지게 둡니다."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "경로 아래에 커서 두기",
    "text": "초록 표적이면 떨어지는 경로 아래에 커서를 두고 클릭합니다."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "콤보 유지",
    "text": "실수 없이 이어서 맞혀 콤보와 추가 시간을 쌓습니다."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const dropGuide = {
  "heading": "낙하 반응속도 게임 가이드",
  "intro": [
    "드롭 캐치는 화면 위에서 떨어지는 표적 중 초록색만 클릭하고 붉은 함정은 누르지 않는 브라우저 반응속도 게임입니다. 자 떨어뜨리기 테스트처럼 낙하 타이밍을 보지만, 색을 구분하는 선택 과제가 더해졌습니다.",
    "자극을 구분해서 반응해야 하는 선택 반응은 단순 반응보다 시간이 더 걸리는 경향이 있습니다(Donders, 1868). 또 표적을 누르려는 충동과 멈추려는 과정이 경쟁한다는 설명이 있습니다(Logan et al., 1984). 이 드릴은 두 가지를 가볍게 연습하는 게임입니다.",
    "떨어지는 대상이 닿기까지 남은 시간을 사람이 가늠하는 방식은 리(Lee, 1976)의 연구에서 다뤄집니다. 낙하 속도가 400px/s에서 1,250px/s까지 빨라지므로 늦게 누를수록 어려워집니다.",
    "점수는 같은 장비와 모니터에서 비교하세요. 결과는 연습 기록이며 의학적 반응속도 검사나 선수 등급이 아닙니다."
  ],
  "benchmarks": {
    "title": "점수 구간 참고표",
    "headers": [
      "단계",
      "점수 구간",
      "명중률 목표",
      "연습 포인트"
    ],
    "rows": [
      [
        "1단계",
        "6,000점 미만",
        "70% 미만",
        "붉은 함정을 누르지 않는 습관 만들기"
      ],
      [
        "2단계",
        "6,000 – 10,999점",
        "70 – 81%",
        "색을 확인한 뒤 클릭하기"
      ],
      [
        "3단계",
        "11,000 – 16,999점",
        "82 – 89%",
        "콤보를 끊지 않고 이어가기"
      ],
      [
        "4단계",
        "17,000 – 23,999점",
        "90 – 94%",
        "빠른 낙하에서도 함정 피하기"
      ],
      [
        "5단계",
        "24,000점 이상",
        "95% 이상",
        "추가 시간으로 긴 세션 유지하기"
      ]
    ],
    "note": "이 구간은 SkillDrills가 연습용으로 나눈 점수 범위입니다. 사용자 통계, 백분위, 전문 선수 기준이 아닙니다."
  },
  "techniques": {
    "title": "점수를 올리는 4가지 연습법",
    "items": [
      {
        "name": "넓게 보고 색 먼저 확인하기",
        "desc": "화면 한 점에 고정하기보다 상단에서 중간까지 넓게 보고, 표적이 나타나면 색부터 확인하세요.",
        "tips": "색을 확인하기 전에는 손가락에 힘을 주지 않습니다."
      },
      {
        "name": "함정은 그냥 보내기",
        "desc": "붉은 함정은 놓쳐도 손해가 없습니다. 눌렀을 때만 콤보가 사라지니 망설여지면 누르지 마세요.",
        "tips": "함정 비율이 높아지는 후반에는 정확도를 먼저 지킵니다."
      },
      {
        "name": "경로 아래에 커서 두기",
        "desc": "표적을 쫓아 내려가기보다 떨어질 경로 아래에 커서를 먼저 두면 이동 거리가 줄어듭니다.",
        "tips": "화면 중간쯤에서 끊어 누르면 여유가 생깁니다."
      },
      {
        "name": "가벼운 파지법",
        "desc": "위아래로 커서를 빠르게 움직일 때는 손에 힘을 빼고 손가락과 손목으로 짧게 보정하세요.",
        "tips": "피로하면 쉬고 같은 장비로 비교합니다."
      }
    ]
  },
  "steps": [
    "커서를 화면 중앙에 두고 상단에서 중간까지 넓게 봅니다.",
    "표적이 떨어지면 초록인지 붉은색인지 먼저 확인합니다.",
    "초록 표적은 클릭하고, 붉은 함정은 누르지 않고 보냅니다.",
    "추가 시간 0.6초와 콤보를 유지하며 점수를 올립니다."
  ],
  "audience": "자 떨어뜨리기 반응속도 테스트를 온라인에서 해 보고 싶은 사용자와, 선택 반응과 충동 조절을 가볍게 연습하려는 게이머.",
  faqs,
  sources: pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedDropCatchPageKo() {
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
      <DropCatchClient
        copy={{
          title: "낙하 반응속도 게임 · 드롭 캐치",
          subtitle: "낙하 표적을 잡고 붉은 함정을 피하기",
          hudLabels: {
            score: "현재 점수",
            time: "남은 시간",
            bestScore: "최고 점수",
            bestCombo: "최대 콤보"
          },
          rulesTitle: "진행 규칙과 점수 계산",
          rulesItems: [
            { title: "초록색 타깃 포착 & 시간 보너스", text: "떨어지는 초록 표적을 클릭하면 100점(콤보와 레벨 배수 적용)과 0.6초의 추가 시간을 얻습니다." },
            { title: "콤보 시스템 증폭", text: "실수 없이 연속으로 맞히면 콤보 배수가 최대 3.0배까지 오릅니다." },
            { title: "점진적 난이도 상향", text: "1,750점마다 레벨이 상승하며 낙하 속도(최대 1250 px/s)와 붉은 함정 출현 확률(최대 45%)이 높아집니다." },
            { title: "함정 오클릭 및 놓침 페널티", text: "초록 표적을 놓치거나 붉은 함정을 클릭하면 콤보가 초기화되고, 페널티를 켠 경우 0.8초가 줄어듭니다." }
          ],
          aboutTitle: "드롭 캐치 안내",
          aboutSections: [
            {
              title: "떨어지는 표적의 타이밍",
              subtitle: "리(Lee, 1976)의 접촉 시간 연구",
              content: "낙하 표적은 점점 빨라집니다. 대상이 닿기까지 남은 시간을 사람이 가늠하는 방식에 관한 연구로, 클릭 타이밍을 잡는 데 참고가 됩니다."
            },
            {
              title: "누르려는 충동과 멈추기",
              subtitle: "로건(Logan, 1984)의 정지 신호 모형",
              content: "붉은 함정이 나오면 누르려는 충동과 멈추려는 과정이 경쟁한다는 모형이 있습니다. 함정을 누르지 않는 연습이 됩니다."
            },
            {
              title: "선택 반응과 반응 시간",
              subtitle: "돈더스(Donders, 1868)의 반응 시간 연구",
              content: "자극을 구분해 반응해야 하면 단순 반응보다 시간이 길어지는 경향이 있습니다. 초록만 누르는 선택 과제입니다."
            },
            {
              title: "크게 움직이고 작게 보정하기",
              subtitle: "우드워스(1899)와 피츠(1954)의 연구",
              content: "빠른 조준은 크게 이동한 뒤 마지막에 작게 보정하는 두 단계로 설명됩니다. 낙하 경로 아래로 먼저 옮기고 마지막에 속도를 줄여 클릭하세요."
            }
          ]
        }}
      />
      <DrillGuide {...dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
