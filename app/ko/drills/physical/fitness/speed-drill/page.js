import SpeedDrillClient from '@/app/drills/physical/fitness/speed-drill/SpeedDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/fitness/speed-drill';
const title = '에임 반응속도 테스트 | 클릭 속도 게임 | SkillDrills';
const description = '작아지는 표적을 빠르게 클릭하는 무료 에임 반응속도 테스트 게임. 클릭 속도와 조준 정확도, 콤보 유지력을 브라우저에서 연습하세요.';

export const metadata = {
  title,
  description,
  keywords: ['에임 반응속도 테스트', '클릭 속도 게임', '마우스 반응속도 테스트', '클릭 속도 훈련', '순발력 테스트', '에임 속도 테스트', '표적 클릭 게임', '타겟 조준 훈련', '무료 에임 연습'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/fitness/speed-drill') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills 홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '신체 훈련 허브', item: 'https://skilldrills.online/ko/drills/physical' },
    { '@type': 'ListItem', position: 3, name: '피트니스 및 순발력', item: 'https://skilldrills.online/ko/drills/physical/fitness' },
    { '@type': 'ListItem', position: 4, name: '에임 반응속도 테스트', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '에임 반응속도 테스트 · 클릭 속도 게임',
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
  name: '에임 반응속도 테스트 웹 앱',
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
  name: '스피드 드릴: 작아지는 표적 클릭 게임',
  url,
  description: '움직이며 작아지는 표적이 사라지기 전에 클릭하는 반응속도·조준 게임.',
  genre: ['Action Game', 'Aim Trainer', 'Reflex Game'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ko',
  dateModified: '2026-10-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: '에임 반응속도 테스트는 무엇을 하나요?', a: '움직이며 작아지는 표적이 사라지기 전에 클릭하는 게임입니다. 표적을 찾는 시간, 커서를 옮기는 속도, 클릭 정확도가 한 번에 쓰이고 점수와 콤보로 기록됩니다. 의료용 반응 검사가 아니라 브라우저 연습 도구입니다.' },
  { q: '표적은 왜 계속 작아지나요?', a: '표적이 작을수록 맞히기 어려워지는 관계는 피츠의 법칙(Fitts, 1954)으로 설명됩니다. 이 드릴은 표적을 45px에서 12px까지 줄여, 늦게 클릭할수록 어려워지게 만듭니다. 크게 보일 때 빨리 클릭하는 것이 요령입니다.' },
  { q: '점수와 시간은 어떻게 계산되나요?', a: '표적을 맞힐 때마다 100점에 콤보와 레벨 배수가 곱해지고 남은 시간이 0.6초 늘어납니다. 기본 시간은 45초이며 1,750점마다 레벨이 오릅니다. 표적이 사라지거나 빈 곳을 클릭하면 콤보가 1.0배로 돌아갑니다.' },
  { q: '클릭 속도 측정(CPS)과 무엇이 다른가요?', a: '클릭 속도 측정은 정해진 시간 동안 같은 자리를 몇 번 누르는지 세는 도구입니다. 이 드릴은 위치가 계속 바뀌는 표적을 맞혀야 해서 연타 횟수보다 조준과 반응이 점수를 좌우합니다. 연타 속도만 재려면 연타 훈련 페이지를 이용하세요.' },
  { q: '레벨이 오르면 무엇이 달라지나요?', a: '표적의 이동 속도가 기본 1.0배에서 최대 3.8배까지, 축소 속도가 0.6배에서 2.2배 이상까지 빨라집니다. 연속 성공 시 콤보 배율은 최대 3.0배까지 오릅니다. 속도와 정확도를 같이 유지해야 점수가 크게 오릅니다.' },
  { q: '빗맞히면 어떤 불이익이 있나요?', a: '표적이 사라지거나 빈 곳을 클릭하면 콤보가 즉시 초기화됩니다. 설정에서 페널티를 켜면 실수 1회마다 0.8초가 줄어듭니다. 천천히 정확히 하는 것보다 빠르고 안정적으로 맞히는 균형이 필요합니다.' },
  { q: 'FPS 게임 실력이 늘어나나요?', a: '이 페이지는 FPS 실력 향상을 보장하지 않습니다. 움직이는 작은 표적을 빠르게 맞히는 동작은 에임 연습과 비슷하지만 게임 감도, 화면, 규칙이 달라 같은 결과로 이어진다고 단정할 수 없습니다. 연습 기록을 비교하는 용도로 쓰세요.' },
  { q: '마우스 설정은 어떻게 하면 좋나요?', a: '정해진 정답은 없습니다. 평소 쓰는 DPI와 감도, 파지법으로 시작하고, 설정을 바꿨다면 바꾸기 전후 점수를 같은 조건에서 비교하세요. 손목이나 손가락에 통증이 있으면 쉬거나 중단합니다.' },
  { q: '모니터 주사율과 마우스 폴링레이트가 영향을 주나요?', a: '주사율이 높으면 표적 움직임이 더 자주 갱신되어 보이고, 폴링레이트가 높으면 마우스 입력이 더 자주 전달됩니다. 두 값은 지연 시간에 영향을 주는 요소로 알려져 있지만(Woods et al., 2015) 이 드릴에서 점수가 얼마나 달라지는지는 측정하지 않았습니다.' },
  { q: '기록은 어디에 저장되나요?', a: '점수와 최고 콤보 같은 기록은 브라우저의 로컬 저장소에 보관되며 이 드릴에서 서버로 올리지 않습니다. 브라우저 데이터를 지우면 기록도 사라집니다. 자세한 내용은 개인정보처리방침을 확인하세요.' },
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
  name: '에임 반응속도 테스트 하는 방법 4단계',
  description: '작아지는 표적을 빠르게 클릭해 점수와 콤보를 쌓는 방법입니다.',
  step: [
    { '@type': 'HowToStep', position: 1, name: '표적 위치 확인', text: '화면 중앙을 넓게 보며 표적이 나타나는 위치를 빠르게 찾습니다.', url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: '커서를 한 번에 이동', text: '표적을 확인하면 망설이지 말고 커서를 표적 근처까지 한 번에 옮깁니다.', url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: '작아지기 전에 클릭', text: '표적이 아직 클 때 마지막에 속도를 줄여 정확히 클릭합니다.', url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: '콤보 유지', text: '실수 없이 연속으로 맞혀 콤보 배율과 추가 시간을 쌓습니다.', url: `${url}#step-4` },
  ],
};

const speedGuide = {
  heading: '에임 반응속도 테스트 가이드',
  intro: {
    title: '에임 반응속도 테스트란?',
    paragraphs: [
      '스피드 드릴은 움직이며 작아지는 원형 표적을 사라지기 전에 클릭하는 브라우저 게임입니다. 한 번의 클릭에 표적 탐색, 커서 이동, 클릭 정확도가 모두 들어가므로 단순 반응 시간 테스트와는 다른 종류의 연습이 됩니다.',
      '빠른 마우스 조준은 먼저 크게 움직이고 마지막에 작게 보정하는 두 단계로 설명되곤 합니다(Woodworth, 1899). 표적이 작을수록 맞히기 어려워지는 관계는 피츠의 법칙(Fitts, 1954)이 설명합니다. 이 드릴은 표적이 계속 줄어들기 때문에 먼저 크게 움직이는 단계를 빨리 시작하는 것이 유리합니다.',
      '밝고 대비가 큰 움직이는 표적은 주변 시야에서도 눈에 잘 띕니다(Treisman & Gelade, 1980). 화면 한 점만 보지 말고 전체를 넓게 보면 새 표적을 더 빨리 찾을 수 있습니다.',
      '점수는 같은 마우스, 감도, 모니터에서 비교하세요. 주사율과 입력 장치도 지연에 영향을 줄 수 있습니다(Woods et al., 2015). 결과는 연습 기록이며 의학적 반응속도 검사나 선수 등급이 아닙니다.',
    ],
  },
  benchmarks: {
    title: '점수 구간 참고표',
    headers: ['단계', '점수 구간', '명중률 목표', '연습 포인트'],
    rows: [
      ['1단계', '6,000점 미만', '70% 미만', '표적 위치를 빠르게 찾고 빗맞힘부터 줄이기'],
      ['2단계', '6,000 – 10,999점', '70 – 81%', '표적이 클 때 일찍 클릭하기'],
      ['3단계', '11,000 – 16,999점', '82 – 89%', '콤보를 끊지 않고 이어가기'],
      ['4단계', '17,000 – 23,999점', '90 – 94%', '빠른 표적에서도 정확도 유지하기'],
      ['5단계', '24,000점 이상', '95% 이상', '시간 보너스로 긴 세션 유지하기'],
    ],
    note: '이 구간은 SkillDrills가 연습용으로 나눈 점수 범위입니다. 사용자 통계, 백분위, 프로 선수 기준이 아닙니다.',
  },
  techniques: {
    title: '점수를 올리는 4가지 연습법',
    items: [
      { name: '크게 움직이고 작게 보정하기', desc: '표적을 찾으면 커서를 한 번에 표적 근처까지 옮기고, 도착하기 직전에만 속도를 줄이세요. 천천히 끌고 가면 그동안 표적이 작아집니다.', tips: '손목과 팔의 움직임을 크게, 손가락 보정은 작게 나눠 보세요.' },
      { name: '표적이 클 때 클릭하기', desc: '표적이 작아질수록 맞히기 어려워집니다. 완벽한 중앙을 노리기보다 표적이 아직 클 때 경계 안쪽을 빠르게 클릭하세요.', tips: '정확도가 급격히 떨어지면 속도를 한 단계 낮춰 안정시킵니다.' },
      { name: '화면을 넓게 보기', desc: '한 점만 보면 반대편에 나타난 표적을 늦게 찾습니다. 화면 중앙을 부드럽게 보고 주변의 움직임을 함께 확인하세요.', tips: '눈이 먼저 가고 손이 바로 뒤따르는 리듬을 만들어 보세요.' },
      { name: '편한 파지법 유지하기', desc: '힘을 빼고 손이 편한 파지법을 유지하세요. 불필요하게 힘을 주면 정확도가 떨어지고 손목이 쉽게 피로해집니다.', tips: '피로하면 쉬고, 같은 장비로 기록을 비교하세요.' },
    ],
  },
  steps: [
    '편하게 앉아 커서를 화면 중앙에 둡니다.',
    '표적이 나타나면 커서를 한 번에 표적 근처로 옮깁니다.',
    '표적이 작아지기 전에 클릭해 점수와 추가 시간 0.6초를 얻습니다.',
    '연속 성공으로 콤보를 쌓아 점수를 올립니다.',
  ],
  audience: '클릭 속도와 조준 정확도, 손·눈 협응을 가볍게 연습하려는 게이머와 일반 사용자.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'treisman1980', 'lee1976', 'woods2015'),
};

export default function LocalizedSpeedDrillPageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SpeedDrillClient
        copy={{
          title: '에임 반응속도 테스트',
          subtitle: '작아지는 표적을 빠르고 정확하게 맞히기',
          hudLabels: { score: '현재 점수', time: '남은 시간', bestScore: '최고 점수', bestCombo: '최대 콤보' },
          rulesTitle: '진행 규칙과 점수 계산',
          rulesItems: [
            { title: '표적 클릭과 시간 연장', text: '표적이 사라지기 전에 클릭하세요. 성공할 때마다 100점(콤보와 레벨 배수 적용)과 0.6초의 추가 시간이 주어집니다.' },
            { title: '콤보 배율', text: '실수 없이 표적을 연속으로 맞히면 콤보 배율이 최대 3.0배까지 오릅니다.' },
            { title: '점진적 난이도 상승', text: '1,750점을 얻을 때마다 레벨이 오르고, 표적의 이동 속도와 축소 속도가 빨라집니다.' },
            { title: '놓침과 빗맞힘', text: '표적이 사라지거나 빈 곳을 클릭하면 콤보가 초기화되고, 페널티를 켠 경우 0.8초가 줄어듭니다.' },
          ],
          aboutTitle: '스피드 드릴 안내',
          aboutSections: [
            { title: '크게 움직이고 작게 보정하기', subtitle: '우드워스(Woodworth, 1899)의 두 단계 운동 설명', content: '빠른 조준은 먼저 크게 이동한 뒤 마지막에 작게 보정하는 두 단계로 설명됩니다. 레벨이 오를수록 보정할 시간이 짧아집니다.' },
            { title: '작아지는 표적과 피츠의 법칙', subtitle: '표적 크기가 줄수록 어려워지는 관계', content: '표적이 45px에서 12px로 줄면 허용 오차가 좁아집니다. 크게 보일 때 빠르게 클릭하는 것이 핵심입니다.' },
            { title: '눈에 띄는 움직이는 표적', subtitle: '트리즈먼(Treisman, 1980) 시각 탐색 연구', content: '대비가 큰 움직이는 표적은 주변 시야에서도 눈에 잘 띕니다. 화면 전체를 넓게 보면 새 표적을 빨리 찾을 수 있습니다.' },
            { title: '사라지기까지 남은 시간 가늠하기', subtitle: '리(Lee, 1976)의 접촉 시간 연구', content: '움직이거나 커지고 작아지는 대상까지 남은 시간을 사람이 가늠하는 방식에 관한 연구입니다. 표적이 사라지기 전 클릭 타이밍을 잡는 데 참고가 됩니다.' },
          ],
        }}
      />
      <DrillGuide {...speedGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/fitness/speed-drill" />
    </>
  );
}
