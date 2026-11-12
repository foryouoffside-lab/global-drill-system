import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/ko/drills/physical/balance-training/stability-challenge';
const title = "마우스 에임 안정성 테스트 | 바람에 맞서 조준선 유지 | SkillDrills";
const description = "무료 마우스 에임 안정성 테스트입니다. 조준선을 무작위로 밀어내는 바람에 맞서 45초 동안 중앙 안전 링 안에 유지하세요. 커서 안정성과 에임 흔들림을 설치 없이 브라우저에서 바로 연습해 보세요.";

export const metadata = {
  title,
  description,
  keywords: ["마우스 에임 안정성 테스트", "커서 안정성", "에임 흔들림", "조준선 유지 연습", "마우스 안정성 게임", "에임 안정성 연습"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ko_KR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills 홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '피지컬 드릴', item: 'https://skilldrills.online/ko/drills/physical' },
    { '@type': 'ListItem', position: 3, name: '마우스 에임 안정성 테스트', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '마우스 에임 안정성 테스트',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas와 포인터 잠금을 지원하는 브라우저, 마우스',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ko' },
  inLanguage: 'ko',
  dateModified: '2026-11-10',
};

const faqs = [
  {
    q: "마우스 에임 안정성 테스트는 무엇을 하나요?",
    a: "화면 중앙에 안전 링이 있고, 바람처럼 작용하는 힘이 조준선을 계속 바깥으로 밀어냅니다. 마우스로 반대 방향을 보정해 45초 동안 조준선을 링 안에 붙잡아 두는 커서 안정성 드릴입니다.",
  },
  {
    q: "점수는 어떻게 쌓이나요?",
    a: "조준선이 링 안에 있는 동안 0.15초마다 콤보가 1씩 오르고 15점 × 콤보 배율이 더해집니다. 배율은 콤보 3에서 1.1배로 시작해 콤보 50에서 최대 3.0배가 됩니다. 클릭은 필요 없습니다.",
  },
  {
    q: "링 밖으로 밀려나면 어떻게 되나요?",
    a: "콤보가 0으로 돌아가고 빨간 플래시가 켜집니다(설정에서 끌 수 있음). 점수나 시간은 깎이지 않으며, 다시 링 안으로 들어오면 콤보를 새로 쌓습니다.",
  },
  {
    q: "난이도는 어떻게 올라가나요?",
    a: "250점마다, 그리고 링 안에서 긴 연속 유지를 할 때 레벨이 오릅니다. 레벨 상한은 없습니다. 안전 링 반경은 45px에서 최소 16px까지 줄고, 바람의 세기는 250에서 시작해 계속 커집니다(레벨 15에서 850).",
  },
  {
    q: "건강 상태나 신체 균형을 검사하는 도구인가요?",
    a: "아닙니다. 이 드릴은 마우스 커서를 다루는 게임이며 신체 균형이나 건강 상태를 검사하거나 진단하지 않습니다. 몸의 증상이 걱정되면 의료 전문가와 상담하세요.",
  },
  {
    q: "등급은 어떻게 정해지나요?",
    a: "최종 점수를 SkillDrills 기준 점수 17,000점과 비교해 등급을 매깁니다. 대략 9,563점 이상이 A, 12,283점 이상이 S, 15,342점 이상이 S+입니다. 사용자 통계나 백분위가 아닌 연습용 구간입니다.",
  },
  {
    q: "FPS 반동 제어 실력이 늘어나나요?",
    a: "보장할 수 없습니다. 떠밀리는 조준선을 작게 계속 보정하는 연습이지만, 게임의 반동 패턴이나 감도와는 다르므로 실력 향상으로 이어진다고 단정할 수 없습니다.",
  },
  {
    q: "모바일에서도 할 수 있나요?",
    a: "마우스와 포인터 잠금이 필요해 터치 전용 기기에서는 시작할 수 없습니다. Esc 키를 누르면 드릴이 종료되고 시작 화면으로 돌아갑니다.",
  },
  {
    q: "기록은 어디에 저장되나요?",
    a: "최고 점수, 최대 콤보, 최고 레벨은 브라우저의 로컬 저장소에만 저장됩니다. 무료이며 회원가입이 필요 없습니다.",
  },
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
  name: '마우스 에임 안정성 테스트 하는 방법',
  description: '바람에 맞서 조준선을 안전 링 안에 유지하는 4단계입니다.',
  step: [
    { '@type': 'HowToStep', position: 1, name: '시작', text: '시작 버튼을 누르면 3초 카운트다운 뒤 포인터 잠금이 켜집니다.' },
    { '@type': 'HowToStep', position: 2, name: '밀리는 방향 읽기', text: '조준선이 밀려나는 방향을 보고 반대쪽으로 마우스를 작게 움직입니다.' },
    { '@type': 'HowToStep', position: 3, name: '링 안에 머물기', text: '링 안에 오래 머물수록 콤보와 배율이 올라갑니다.' },
    { '@type': 'HowToStep', position: 4, name: '좁아지는 링 대응', text: '레벨이 오르면 링이 작아지고 바람이 강해지므로 더 일찍, 더 작게 보정합니다.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guide = {
  heading: '마우스 에임 안정성 테스트 가이드',
  intro: [
    '마우스 에임 안정성 테스트는 무작위로 방향이 바뀌는 바람이 조준선을 화면 중앙에서 밀어내는 동안, 마우스로 반대 방향을 보정해 조준선을 안전 링 안에 유지하는 브라우저 드릴입니다. 한 판은 45초로 고정되어 있습니다.',
    '빠른 조준 동작은 크게 이동한 뒤 시각 피드백으로 작게 보정하는 과정으로 설명됩니다(Woodworth, 1899). 이 드릴은 그 작은 보정을 쉬지 않고 반복하게 만들며, 링이 작아질수록 같은 보정도 더 정확해야 합니다(Fitts, 1954).',
    '커서 안정성과 에임 흔들림을 연습하는 게임일 뿐, 신체 균형이나 건강 상태를 검사하지 않습니다. 점수는 같은 마우스, 감도, 모니터에서 자기 기록끼리 비교하세요. 주사율과 마우스 폴링레이트도 입력 지연에 영향을 줍니다(Woods et al., 2015).',
  ],
  benchmarks: {
    title: 'SkillDrills 연습 등급 구간',
    headers: ['등급', '점수', '표시 문구'],
    rows: [
      ['S+', '15,342점 이상', 'LEGENDARY'],
      ['S', '12,283 – 15,341점', '최상위'],
      ['A', '9,563 – 12,282점', '매우 우수'],
      ['B', '6,120 – 9,562점', '우수'],
      ['C', '3,443 – 6,119점', '양호'],
      ['D', '1,530 – 3,442점', '분발 필요'],
      ['F', '1,530점 미만', '연습 필요'],
    ],
    note: '등급은 최종 점수를 기준 점수 17,000점과 비교해 계산하는 SkillDrills 연습 구간입니다. 사용자 통계, 백분위, 의학적 기준이 아닙니다.',
  },
  techniques: {
    title: '링 안에 오래 머무는 4가지 요령',
    items: [
      { name: '중앙에서 시작하기', desc: '카운트다운 동안 조준선은 중앙에 놓입니다. 시작 직후 큰 동작을 하지 말고 밀리는 방향부터 확인하세요.', tips: '첫 몇 초는 점수보다 방향 읽기에 집중합니다.' },
      { name: '작게, 일찍 보정하기', desc: '링 가장자리에 닿은 뒤 크게 당기면 반대편으로 넘어가기 쉽습니다. 밀리기 시작할 때 작게 보정하세요.', tips: '링 중심과 조준선 사이의 간격을 보며 움직입니다.' },
      { name: '바람 방향 전환 대비', desc: '바람 방향은 무작위로 바뀌고 서서히 새 방향으로 옮겨 갑니다. 갑자기 보정이 과해지지 않게 손에 힘을 빼세요.', tips: '팔과 손목에 힘이 들어가면 조준선이 더 흔들립니다.' },
      { name: '콤보 지키기', desc: '배율은 콤보 50에서 3.0배로 최대가 됩니다. 한 번 이탈하면 콤보가 0이 되므로 무리한 큰 보정보다 안정적인 유지가 점수에 유리합니다.', tips: '이탈 횟수는 결과 화면의 Blowouts에 표시됩니다.' },
    ],
  },
  steps: [
    '평소 쓰는 마우스와 감도로 시작 버튼을 누릅니다.',
    '조준선이 밀리는 방향의 반대쪽으로 마우스를 작게 움직입니다.',
    '안전 링 안에 머물며 콤보와 배율을 쌓습니다.',
    '45초가 끝나면 등급, 안정성 %, 이탈 횟수, 최고 레벨을 확인합니다.',
  ],
  audience: '조준선이 흔들리지 않게 붙잡아 두는 연습을 하고 싶은 게이머와 커서 안정성을 가볍게 확인해 보고 싶은 사용자.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
};

export default function StabilityChallengeKoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <StabilityChallengeClient
        copy={{
          title: '마우스 에임 안정성 테스트',
          hudLabels: {
            score: '점수',
            time: '시간',
            getReady: '준비하세요',
            points: '점수',
            stability: '안정성',
            blowouts: '이탈',
            maxStreak: '최대 콤보',
            peakLevel: '최고 레벨',
            playAgain: '다시 하기',
          },
          rulesTitle: '규칙과 점수 계산',
          rulesItems: [
            { title: '중앙 안전 링 유지', text: '무작위로 방향이 바뀌는 바람이 조준선을 밀어냅니다. 마우스로 반대 방향을 보정해 링 안에 머무르세요.' },
            { title: '콤보 배율 (최대 3.0배)', text: '링 안에 있는 동안 0.15초마다 콤보가 오르고 15점 × 배율을 얻습니다. 콤보 50에서 3.0배입니다.' },
            { title: '레벨 상승', text: '250점마다, 그리고 긴 연속 유지로 레벨이 오릅니다. 링은 최소 16px까지 줄고 바람은 계속 강해집니다.' },
            { title: '이탈', text: '링 밖으로 밀려나면 콤보가 0이 됩니다. 점수와 시간은 깎이지 않습니다.' },
          ],
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
