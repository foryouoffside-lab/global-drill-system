import Link from 'next/link';
import KeyboardTesterClient from '@/app/drills/motor/movement-speed/keyboard-tester/KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const PAGE_URL = 'https://skilldrills.online/ko/drills/motor/movement-speed/keyboard-tester';
const TITLE = '키보드 테스트 – 모든 키 입력 확인 | SkillDrills';
const DESCRIPTION = '무료 온라인 키보드 테스트: 아무 키나 눌러 입력되는지 확인하고, event.key와 event.code, 여러 키 동시 입력(고스팅·키 롤오버)까지 점검하세요. 두벌식 배열 지원, 설치·회원가입이 필요 없습니다.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['키보드 테스트', '키보드 입력 테스트', '키보드 키 테스트', '키보드 고스팅 테스트', '키 롤오버 테스트', '키보드 테스트 사이트'],
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: '이 키보드 테스트는 어떻게 사용하나요?',
    a: '화면의 키보드를 클릭해 포커스를 준 뒤 키를 하나씩 눌러 보세요. 누르고 있는 동안 키가 밝게 빛나고, 손을 떼면 초록색으로 남습니다. 끝까지 초록색이 되지 않는 키는 브라우저까지 입력이 전달되지 않은 것입니다. 카운터에는 배열에 있는 키 중 지금까지 테스트한 개수가 표시됩니다.',
  },
  {
    q: '키보드 고스팅이란 무엇인가요?',
    a: '고스팅은 이미 여러 키를 누르고 있을 때 키보드가 특정 키 입력을 보고하지 못하는 현상입니다. 많은 키보드가 키끼리 배선을 공유하기 때문에 일부 조합은 동시에 인식되지 않습니다. 확인하려면 실제로 쓰는 조합(예: W, A, Shift)을 함께 누르고 모든 키가 동시에 켜지는지 보세요.',
  },
  {
    q: 'N키 롤오버란 무엇이고, "동시 입력 최대" 카운터와 어떤 관계인가요?',
    a: '롤오버는 키보드가 동시에 보고할 수 있는 키의 개수입니다. N키 롤오버는 모든 키를 한꺼번에 보고할 수 있다는 뜻이며, 많은 키보드는 USB에서 6키로 제한되거나 특정 조합에서 그보다 적습니다. "동시 입력 최대" 카운터는 이 페이지가 한 번에 눌린 것으로 확인한 키의 최대 개수입니다. 정밀 측정이 아닌 간단한 확인용이며, 브라우저, 운영체제, 그리고 손가락 개수에 따라 표시할 수 있는 값이 제한됩니다.',
  },
  {
    q: '브라우저 키보드 테스트에서 인식되지 않는 키가 있는 이유는 무엇인가요?',
    a: '일부 키는 웹 페이지에 전달되기 전에 처리됩니다. Windows 키나 Command 키, Fn, 많은 미디어·밝기 키, 그리고 Ctrl+W, Ctrl+T, Alt+F4 같은 단축키는 운영체제나 브라우저가 먼저 가져갑니다. 한/영 키와 한자 키도 IME가 먼저 처리해 표시되지 않거나 다르게 표시될 수 있습니다. Print Screen은 손을 뗄 때만 보고되는 경우가 많습니다. 이런 키가 켜지지 않는다고 고장 난 것은 아니므로 데스크톱 앱에서 다시 확인하세요.',
  },
  {
    q: '한국어 키보드(두벌식 배열)에서도 작동하나요?',
    a: '네. 키는 입력되는 글자가 아니라 물리적 위치(event.code)로 매칭되므로 두벌식 키보드도 화면 키보드에 그대로 대응됩니다. 키를 누르면 실제로 입력된 값이 마지막 키 패널에 표시됩니다. 다만 그림은 미국식 ANSI 배열이라 한/영, 한자처럼 다른 배열에만 있는 키는 그림에 없을 수 있으며, 그런 키는 마지막 키 패널에서 확인하세요.',
  },
  {
    q: 'event.key, event.code, keyCode는 무엇을 뜻하나요?',
    a: 'event.code는 물리적인 키(예: KeyA)를, event.key는 현재 배열과 보조키 상태에서 그 키가 만든 글자나 동작(예: a, A, ㅁ)을 나타냅니다. keyCode는 브라우저가 아직 보고하는 예전 숫자 코드입니다. location은 왼쪽 Shift와 오른쪽 Shift처럼 같은 키의 왼쪽·오른쪽 구분이나 숫자 키패드 여부를 알려 줍니다.',
  },
  {
    q: '휴대폰이나 태블릿에서도 사용할 수 있나요?',
    a: '물리 키보드를 연결한 경우에만 가능합니다. 화면 터치 키보드는 물리 키 코드를 같은 방식으로 보고하지 않으므로 USB나 블루투스 키보드가 필요합니다.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '운동 제어 훈련', item: 'https://skilldrills.online/ko/drills/motor' },
    { '@type': 'ListItem', position: 3, name: '동작 속도', item: 'https://skilldrills.online/ko/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: '키보드 테스트', item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ko-KR',
  name: '키보드 테스트',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'JavaScript 지원 브라우저와 물리 키보드 필요',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko-KR',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: '키보드 테스트로 무엇을 확인하나요?',
    paragraphs: [
      '키보드 테스트는 키보드의 각 키가 컴퓨터까지 제대로 입력되는지 보여 줍니다. 키를 누르면 그림에서 불이 켜지고, 손을 떼면 테스트 완료로 표시되어 죽은 키나 간헐적으로 끊기는 키가 눈에 띕니다. 여러 키를 함께 누르면 키보드가 동시에 보고할 수 있는지 확인할 수 있으며, 고스팅과 키 롤오버 한계가 여기서 드러납니다.',
      '이 페이지에는 타이머도 점수도 없습니다. 브라우저가 받은 정보(물리 키 코드, 입력된 글자, 위치, 자동 반복 여부)만 보여 주며, 아무것도 기록하거나 전송하지 않습니다.',
    ],
  },
  faqs: { title: '키보드 테스트 자주 묻는 질문', items: FAQS },
};

const copy = {
  h1: '키보드 테스트 – 모든 키 입력을 온라인으로 확인',
  subtitle: '아무 키나 눌러 입력되는지 확인하고, 여러 키를 함께 눌러 고스팅과 키 롤오버를 점검하세요',
  keysTested: '테스트한 키',
  heldNow: '지금 누르는 키',
  maxHeld: '동시 입력 최대',
  touchNote: '이 테스트에는 물리 키보드가 필요합니다. 터치 키보드는 물리 키 코드를 보고하지 않습니다.',
  ariaLabel: '키보드 테스트. 키를 눌러 테스트하세요. 바깥을 클릭하면 키보드 포커스가 해제됩니다.',
  listening: '입력 대기 중 – 아무 키나 누르세요',
  clickToStart: '키보드를 클릭해 테스트를 시작하세요',
  reset: '초기화',
  legendPressed: '누르는 중',
  legendTested: '테스트 완료',
  legendUntested: '아직 안 누름',
  lastKey: '마지막 키 이벤트',
  noKeyYet: '아직 누른 키가 없습니다.',
  note: '키는 물리적 위치(event.code)로 매칭되므로 두벌식, JIS, AZERTY 등 다른 배열도 작동하며, 키를 누르면 배열이 만든 글자가 표시됩니다. 그림은 미국식 ANSI 배열이라 한/영, 한자 같은 키는 그림에 없을 수 있습니다. 일부 키는 웹 페이지에 전달되지 않습니다: Windows/Command 키 조합, Fn, 많은 미디어 키, Ctrl+W나 Alt+F4 같은 단축키는 운영체제나 브라우저가 먼저 처리합니다. Print Screen은 손을 뗄 때만 보고되는 경우가 많습니다.',
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];
const linkClass = 'text-cyan-300 underline underline-offset-2 hover:text-white';

export default function KoreanKeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient copy={copy} />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        모든 키가 정상인가요? 이제 연습해 보세요.{' '}
        <Link href="/ko/drills/motor/movement-speed/keyboard-recognition" className={linkClass}>키보드 반응속도 테스트</Link>는 화면에 뜬 키를 얼마나 빨리 정확히 누르는지 재고,{' '}
        <Link href="/ko/drills/motor/movement-speed/rapid-tapping" className={linkClass}>CPS 테스트</Link>는 초당 클릭 수를 측정합니다.
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
