import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/coordination/dynamic-grid-evasion';
const title = "칸 피하기 게임 | 3x3 격자 위험 회피 | SkillDrills";
const description = "3x3 격자에서 주황색으로 깜빡이는 위험 칸이 터지기 전에 안전한 칸으로 마우스를 옮기는 무료 칸 피하기 게임입니다. 45초 동안 웨이브를 연속으로 피해 콤보를 쌓고, 짧아지는 경고 시간에 맞서 안전한 칸 찾기를 연습하세요.";

export const metadata = {
  title,
  description,
  keywords: ["칸 피하기 게임", "격자 위험 회피", "안전한 칸 찾기", "위험 칸 피하기", "3x3 격자 게임", "마우스 회피 연습"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion') },
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
    { '@type': 'ListItem', position: 3, name: '협응 훈련', item: 'https://skilldrills.online/ko/drills/physical/coordination' },
    { '@type': 'ListItem', position: 4, name: '칸 피하기 게임', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: '칸 피하기 게임 (Dynamic Grid Evasion)',
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
  { q: "칸 피하기 게임은 어떻게 하나요?", a: "화면이 3x3 격자로 나뉘고, 웨이브마다 몇 칸이 주황색으로 깜빡이며 경고합니다. 경고 시간이 끝나는 순간 그 칸들이 붉게 터지는데, 이때 커서가 경고 칸 밖에 있으면 그 웨이브를 피한 것입니다. 폭발 0.35초 뒤 다음 웨이브가 바로 시작되고, 한 세션은 45초입니다." },
  { q: "커서 위치는 언제 판정되나요?", a: "폭발하는 순간 한 번만 판정합니다. 경고 중에 위험 칸을 지나가도 괜찮고, 폭발 순간 안전한 칸 안에 있으면 됩니다. 처음 커서는 격자 중앙에서 시작하며, 중앙 칸도 위험 칸이 될 수 있습니다." },
  { q: "점수와 콤보는 어떻게 계산되나요?", a: "피한 웨이브마다 100점에 콤보 배율을 곱해 더합니다. 배율은 연속 3웨이브 1.1배, 5웨이브 1.25배, 10웨이브 1.5배, 20웨이브 2.0배, 30웨이브 2.5배입니다. 코드상 50연속에서 3.0배가 되지만, 45초 안에 나올 수 있는 웨이브는 최대 40여 개라 실제로 볼 수 있는 최고 배율은 2.5배입니다." },
  { q: "난이도는 어떻게 올라가나요?", a: "레벨은 매 세션 1에서 시작해 250점마다 1씩, 그리고 연속 생존 4웨이브마다 1씩 더 오릅니다. 레벨이 오를수록 경고 시간이 1.4초에서 0.45초로 줄고 위험 칸이 3개에서 7개로 늘어 안전한 칸은 2개만 남습니다. 두 값은 레벨 15에서 한계에 도달합니다." },
  { q: "폭발에 맞으면 어떻게 되나요?", a: "콤보가 0으로 초기화되고 붉은 플래시와 화면 흔들림이 나옵니다. 점수나 남은 시간은 줄지 않습니다. 붉은 플래시는 게임 중 오른쪽 아래 버튼으로 끌 수 있습니다." },
  { q: "등급은 어떻게 정해지나요?", a: "최종 점수를 17,000점 기준과 비교해 등급을 매깁니다(B 6,120점 이상, C 약 3,450점 이상, D 1,530점 이상). 45초 안에 모든 웨이브를 피해도 계산상 약 8,400점 정도가 한계라, 이 드릴에서 현실적인 최고 등급은 B입니다." },
  { q: "어떤 조작을 쓰나요?", a: "마우스만 씁니다. 시작하면 포인터가 잠기고 사이트의 감도 설정이 적용됩니다. 키보드는 Esc(종료)만 사용합니다. 터치 전용 기기에서는 커서를 움직일 수 없어 마우스가 있는 PC를 권장합니다." },
  { q: "날아오는 장애물을 피하는 게임과는 어떻게 다른가요?", a: "칸 피하기 게임은 정해진 9칸 중 안전한 칸을 골라 경고가 끝나기 전에 옮겨 가는 방식입니다. 사방에서 날아오는 장애물을 피하는 게임은 같은 카테고리의 퀵 닷지를 이용하세요." },
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
  "시작 버튼을 누르면 3초 카운트다운 뒤 커서가 격자 중앙에서 시작합니다.",
  "주황색으로 깜빡이는 위험 칸을 보고 경고가 없는 안전한 칸을 찾습니다.",
  "폭발 전에 커서를 안전한 칸 안으로 옮기고 경계선 근처에서 멈추지 않도록 칸 안쪽에 둡니다.",
  "연속으로 피해 콤보를 이어가며 45초 동안 최고 점수에 도전합니다.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '칸 피하기 게임 하는 방법',
  description: '3x3 격자에서 위험 칸을 피해 안전한 칸으로 옮기는 4단계 방법입니다.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `${i + 1}단계`, text, url: `${url}#step-${i + 1}` })),
};

const gridGuide = {
  heading: '칸 피하기 게임 가이드',
  intro: [
    "칸 피하기 게임은 3x3 격자에서 주황색으로 경고되는 위험 칸이 터지기 전에 마우스 커서를 안전한 칸으로 옮기는 브라우저 게임입니다. 날아오는 물체를 피하는 대신 9칸 중 어디가 안전한지 고르는 격자 위험 회피라서, 빠른 판단과 정확한 정지가 함께 필요합니다.",
    "경고 시간은 레벨이 오를수록 1.4초에서 0.45초까지 줄고, 위험 칸은 3개에서 7개까지 늘어납니다. 후반에는 안전한 칸이 2개뿐이라 한 칸씩 확인할 여유가 없습니다. 주의를 끄는 신호가 반응을 빠르게 한다는 연구(Posner, 1980)처럼, 깜빡이는 칸과 어두운 칸의 대비를 한 번에 읽는 것이 핵심입니다.",
    "빠른 이동은 크게 움직인 뒤 끝에서 작게 보정하는 두 단계로 설명됩니다(Woodworth, 1899). 안전한 칸 찾기에 성공해도 커서가 칸 경계를 넘어가면 실패하므로 칸 안쪽에서 멈추는 연습이 필요합니다.",
    "결과는 SkillDrills 안에서 쓰는 연습 기록입니다. 의학적 검사, 시력 측정, 실제 운동 능력 평가가 아닙니다. 점수를 비교할 때는 같은 마우스, 감도, 모니터를 사용하세요.",
  ],
  benchmarks: {
    title: '등급 기준표 (SkillDrills 연습 구간)',
    headers: ['등급', '점수', '비고'],
    rows: [
      ['B', '6,120점 이상', '45초 동안 거의 모든 웨이브를 피해야 하는 구간'],
      ['C', '약 3,450점 이상', '웨이브 절반 이상을 연속으로 피하는 구간'],
      ['D', '1,530점 이상', '경고를 보고 안전한 칸으로 옮기는 데 익숙해지는 구간'],
      ['F', '1,530점 미만', '처음 시작하는 구간'],
    ],
    note: '등급은 최종 점수를 17,000점 기준과 비교한 SkillDrills 연습 구간입니다. A 이상은 45초 세션에서 계산상 도달할 수 없습니다. 사용자 통계나 백분위가 아닙니다.',
  },
  techniques: {
    title: '점수를 올리는 연습법',
    items: [
      { name: '어두운 칸을 먼저 찾기', desc: '깜빡이는 위험 칸을 하나씩 세기보다 불이 켜지지 않은 칸을 바로 찾는 편이 빠릅니다.', tips: '후반에는 안전한 칸이 2개뿐이라 가장 가까운 쪽을 고르세요.' },
      { name: '가까운 안전한 칸으로', desc: '경고 시간이 0.5초 안팎으로 줄면 먼 칸까지 가기 어렵습니다. 지금 위치에서 가장 가까운 안전한 칸으로 옮기세요.', tips: '대각선보다 상하좌우 이동이 짧은 경우가 많습니다.' },
      { name: '칸 안쪽에서 멈추기', desc: '판정은 커서의 정확한 위치로 합니다. 경계선에 걸치면 옆 칸으로 판정될 수 있습니다.', tips: '칸 가운데를 목표로 움직이세요.' },
      { name: '콤보 유지', desc: '연속 생존이 길수록 배율과 레벨이 함께 오릅니다. 무리하게 먼 칸으로 가다 맞으면 콤보가 사라집니다.', tips: '확실한 칸을 먼저 고르세요.' },
    ],
  },
  steps,
  audience: '격자 위에서 위험 칸을 피하는 마우스 게임을 찾는 사용자, 경고를 보고 빠르게 판단해 정확히 멈추는 연습을 하려는 게이머.',
  faqs,
  sources: pickSources('posner1980', 'woodworth1899', 'fitts1954'),
};

export default function DynamicGridEvasionPageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DynamicGridEvasionClient
        copy={{
          title: "칸 피하기 게임",
          hudLabels: { score: "점수", timeLeft: "남은 시간", bestScore: "최고 점수", bestCombo: "최고 콤보" },
          rulesTitle: "게임 규칙과 점수 계산",
          rules: [
            { title: "위험 칸 경고", text: "웨이브마다 몇 칸이 주황색으로 깜빡입니다. 경고가 끝나면 그 칸들이 터집니다." },
            { title: "안전한 칸으로 이동", text: "폭발 순간 커서가 경고 칸 밖에 있으면 생존입니다. 100점에 콤보 배율을 곱해 얻습니다." },
            { title: "레벨 상승", text: "250점마다, 그리고 연속 4웨이브마다 레벨이 오릅니다. 경고 시간은 1.4초에서 0.45초로 줄고 위험 칸은 3개에서 7개로 늘어납니다." },
            { title: "폭발에 맞으면", text: "콤보만 0으로 초기화됩니다. 점수와 45초 세션 시간은 줄지 않습니다." },
          ],
          aboutTitle: "칸 피하기 게임이란?",
          aboutHeading: "3x3 격자 위험 회피",
          aboutText: "칸 피하기 게임은 3x3 격자에서 주황색으로 깜빡이는 위험 칸을 보고, 폭발 전에 안전한 칸으로 마우스를 옮기는 게임입니다. 레벨이 오를수록 경고 시간이 짧아지고 위험 칸이 늘어납니다. 빠른 판단과 칸 안에서 정확히 멈추는 마우스 조작을 연습하는 용도이며, 의학적 측정이 아닙니다.",
          aboutCards: [
            { title: "추천 대상", desc: "격자 위험 회피 방식의 마우스 게임을 즐기거나, 경고를 보고 빠르게 움직이는 연습을 하려는 사용자." },
            { title: "연습하는 것", desc: "위험 칸과 안전한 칸 구분, 가까운 칸 선택, 칸 안에서 커서 멈추기." },
            { title: "세션 구성", desc: "45초 고정, 매 세션 레벨 1부터 시작. 맞아도 점수와 시간은 줄지 않습니다." },
          ],
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
