import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/reflex-training/quick-dodge';
const title = "마우스 피하기 게임 | 장애물 피하기 게임 | SkillDrills";
const description = "사방에서 커서를 향해 날아오는 붉은 장애물을 마우스로 피하는 무료 마우스 피하기 게임입니다. 45초 동안 연속으로 피해 콤보 배율을 쌓고, 점점 빨라지는 장애물 속에서 최고 점수에 도전하세요.";

export const metadata = {
  title,
  description,
  keywords: ["마우스 피하기 게임", "피하기 게임", "장애물 피하기 게임", "총알 피하기 게임", "마우스 컨트롤 게임", "무료 피하기 게임"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills 홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '피지컬 테스트', item: 'https://skilldrills.online/ko/drills/physical' },
    { '@type': 'ListItem', position: 3, name: '마우스 피하기 게임', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: '마우스 피하기 게임 (Quick Dodge)',
  url,
  description,
  genre: ['Action Game', 'Browser Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  operatingSystem: 'All',
  inLanguage: 'ko',
  dateModified: '2026-11-10',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: "마우스 피하기 게임은 어떻게 하나요?", a: "붉은 원형 장애물이 화면 네 가장자리 중 한 곳에서 생겨나, 생성되는 순간의 커서 위치를 향해 직선으로 날아옵니다. 커서를 움직여 맞지 않으면 장애물이 화면 밖으로 빠져나갈 때 회피 1회로 인정됩니다. 한 세션은 45초입니다." },
  { q: "장애물이 커서를 계속 따라오나요?", a: "아닙니다. 생성 순간의 커서 위치를 겨냥해 출발한 뒤에는 방향을 바꾸지 않고 직선으로 날아갑니다. 날아오면서 크기가 조금씩 커지므로 여유 있게 비켜 서는 것이 안전합니다." },
  { q: "위에서 떨어지는 것을 피하는 고전 피하기 게임과 같은가요?", a: "같은 피하기 게임 계열이지만 다른 게임입니다. 똥피하기처럼 날아오는 것을 피하는 게임이지만, 위에서만 떨어지지 않고 사방에서 커서를 향해 날아오며 마우스로 화면 전체를 움직여 피합니다. 맞아도 게임이 끝나지 않고 콤보만 초기화됩니다." },
  { q: "공포 마우스 피하기 게임과 같은가요?", a: "아닙니다. 검색하면 귀신이 갑자기 나오는 공포 플래시 게임도 나오지만, 이 게임에는 놀래키는 요소가 없습니다. 장애물 속도와 개수가 점점 늘어나는 점수형 게임입니다." },
  { q: "점수와 콤보는 어떻게 계산되나요?", a: "장애물을 하나 피할 때마다 기본 점수에 콤보 배율을 곱해 얻습니다. 기본 점수는 레벨이 오를수록 2점에서 20점까지 커집니다. 배율은 연속 회피 3회 1.1배, 10회 1.5배, 20회 2.0배, 30회 2.5배, 50회 3.0배입니다." },
  { q: "난이도는 어떻게 올라가나요?", a: "레벨은 매 세션 1에서 시작해 250점마다 1씩, 연속 회피 4회마다 1씩 더 오릅니다. 장애물 속도는 초당 300px에서 레벨 15에 1,600px까지 빨라지고 그 뒤로도 계속 오르며, 콤보가 길면 최대 200px/s가 더해집니다. 생성 간격은 0.65초에서 0.10초로 줄고 화면에 동시에 있을 수 있는 장애물은 8개에서 58개까지 늘어납니다." },
  { q: "장애물에 맞으면 어떻게 되나요?", a: "콤보가 1.0배로 초기화되고 화면의 장애물이 모두 사라지며, 붉은 플래시와 화면 흔들림이 나옵니다. 점수와 남은 시간은 줄지 않습니다. 붉은 플래시는 게임 중 오른쪽 아래 버튼으로 끌 수 있습니다." },
  { q: "어떤 조작을 쓰나요?", a: "마우스만 씁니다. 시작하면 포인터가 잠기고 사이트의 감도 설정이 적용됩니다. 키보드는 Esc(종료)만 사용합니다. 마우스가 있는 PC를 권장합니다." },
  { q: "등급은 어떻게 정해지나요?", a: "최종 점수를 17,000점 기준과 비교해 S+(약 15,350점 이상), S(약 12,300점), A(약 9,550점), B(6,120점), C(약 3,450점), D(1,530점)로 나눕니다. SkillDrills 안의 연습 구간이며 사용자 통계나 백분위가 아닙니다." },
  { q: "무료인가요? 기록은 어디에 저장되나요?", a: "무료이며 설치나 가입 없이 브라우저에서 실행됩니다. 최고 점수와 최고 콤보는 브라우저의 로컬 저장소에만 보관됩니다." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  "시작 버튼을 누르면 3초 카운트다운 뒤 커서가 화면 중앙에서 시작합니다.",
  "가장자리에서 장애물이 생기면 지금 커서 위치로 날아온다는 점을 기억하고 옆으로 비켜 섭니다.",
  "크게 휘두르지 말고 짧게 움직여 장애물 사이의 빈 공간에 머뭅니다.",
  "맞지 않고 연속으로 피해 콤보 배율을 올리며 45초 동안 최고 점수에 도전합니다.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '마우스 피하기 게임 하는 방법',
  description: '날아오는 장애물을 마우스로 피하며 콤보를 쌓는 4단계 방법입니다.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `${i + 1}단계`, text, url: `${url}#step-${i + 1}` })),
};

const dodgeGuide = {
  heading: '마우스 피하기 게임 가이드',
  intro: [
    "마우스 피하기 게임(퀵 닷지)은 화면 사방에서 커서를 향해 날아오는 붉은 장애물을 마우스로 피하며 점수를 쌓는 브라우저 게임입니다. 장애물 피하기 게임이나 총알 피하기 게임처럼 맞지 않고 버티는 것이 목표이고, 연속으로 피할수록 콤보 배율이 오릅니다.",
    "장애물은 생성되는 순간의 커서 위치를 겨냥해 직선으로 날아옵니다. 그래서 가만히 있으면 맞고, 조금만 비켜 서도 피할 수 있습니다. 빠른 움직임은 미리 계획해서 시작한다는 설명(Kawato, 1999)처럼, 장애물이 보이면 어디로 갈지 먼저 정하는 편이 유리합니다.",
    "레벨이 오를수록 장애물이 빨라지고 자주 생기며 커집니다. 빈 공간이 좁아질수록 작은 목표 안에서 정확히 움직여야 하므로 더 어려워집니다(Fitts, 1954). 맞으면 화면이 비워지고 콤보만 초기화됩니다.",
    "결과는 SkillDrills 안에서 쓰는 연습 기록입니다. 주사율과 입력 장치도 지연에 영향을 줄 수 있으므로(Woods et al., 2015) 같은 장비에서 기록을 비교하세요.",
  ],
  benchmarks: {
    title: '등급 기준표 (SkillDrills 연습 구간)',
    headers: ['등급', '점수'],
    rows: [
      ['S+', '약 15,350점 이상'],
      ['S', '약 12,300점 이상'],
      ['A', '약 9,550점 이상'],
      ['B', '6,120점 이상'],
      ['C', '약 3,450점 이상'],
      ['D', '1,530점 이상'],
    ],
    note: '등급은 최종 점수를 17,000점 기준과 비교한 SkillDrills 연습 구간입니다. 사용자 통계나 백분위가 아닙니다.',
  },
  techniques: {
    title: '점수를 올리는 연습법',
    items: [
      { name: '생성 순간을 보기', desc: '장애물은 생길 때의 커서 위치로 날아옵니다. 생기는 순간을 보고 바로 옆으로 비켜 서면 대부분 피할 수 있습니다.', tips: '한 자리에 오래 머물지 마세요.' },
      { name: '작게 움직이기', desc: '커서를 크게 휘두르면 새로 날아오는 장애물과 부딪히기 쉽습니다. 짧게 움직여 빈 공간에 머무세요.', tips: '가장자리보다 장애물이 지나간 쪽이 비어 있는 경우가 많습니다.' },
      { name: '커지는 크기 고려', desc: '장애물은 날아오면서 커집니다. 아슬아슬하게 피하려 하기보다 여유를 두세요.', tips: '후반 고속 구간에서는 안전한 거리가 우선입니다.' },
      { name: '콤보 유지', desc: '연속 회피가 길수록 배율과 레벨이 함께 오릅니다. 맞으면 화면이 비워지니 침착하게 다시 시작하세요.', tips: '손목과 어깨에 힘을 빼고, 통증이 있으면 쉬세요.' },
    ],
  },
  steps,
  audience: '마우스 피하기 게임이나 장애물 피하기 게임을 브라우저에서 가볍게 즐기려는 사용자, 마우스 컨트롤을 연습하려는 게이머.',
  faqs,
  sources: pickSources('kawato1999', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuickDodgeClient
        copy={{
          title: "마우스 피하기 게임",
          hudLabels: { score: "현재 점수", time: "남은 시간", bestScore: "최고 점수", bestCombo: "최대 콤보", getReady: "준비하세요" },
          resultLabels: { newBest: "최고 기록 달성", points: "최종 점수", accuracy: "회피 성공률", dodges: "회피 횟수", peakSpeed: "최고 속도", peakLevel: "도달 레벨", playAgain: "다시 도전하기" },
          rulesTitle: "게임 규칙과 점수 계산",
          rulesItems: [
            { title: "장애물 피하기", text: "붉은 장애물이 가장자리에서 생겨 그 순간의 커서 위치로 날아옵니다. 맞지 않고 화면 밖으로 보내면 회피 1회입니다." },
            { title: "콤보 배율", text: "연속 회피가 쌓이면 배율이 올라 최대 3.0배(50회 연속)까지 커집니다." },
            { title: "난이도 상승", text: "점수와 연속 회피에 따라 레벨이 오르며 장애물 속도가 300px/s에서 1,600px/s 이상으로 빨라지고 더 자주 생깁니다." },
            { title: "맞으면", text: "콤보가 1.0배로 초기화되고 화면의 장애물이 사라집니다. 점수와 45초 세션 시간은 줄지 않습니다." },
          ],
          aboutTitle: "마우스 피하기 게임 안내",
          aboutSections: [
            { title: "직선으로 날아오는 장애물", content: "장애물은 생성 순간의 커서 위치를 겨냥해 직선으로 날아옵니다. 생기는 순간 비켜 서는 것이 기본입니다." },
            { title: "미리 정하고 움직이기", subtitle: "Kawato, 1999", content: "빠른 움직임은 미리 계획해 시작한다는 설명이 있습니다. 장애물이 보이면 갈 방향을 먼저 정하세요." },
            { title: "좁아지는 빈 공간", subtitle: "Fitts, 1954", content: "장애물이 많아질수록 빈 공간이 좁아져 정확한 움직임이 필요합니다." },
            { title: "장비와 기록 비교", subtitle: "Woods et al., 2015", content: "주사율과 입력 장치는 지연에 영향을 줄 수 있습니다. 같은 장비에서 기록을 비교하세요." },
          ],
        }}
      />
      <DrillGuide guide={dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
