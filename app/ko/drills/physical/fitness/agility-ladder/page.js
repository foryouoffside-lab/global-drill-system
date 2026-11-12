import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/ko.md)
// Primary: 스텝레더 게임 (no measured volume; honest descriptive).
// Retargeted from 스텝레더 훈련 / 풋워크: this is a mouse sequence game,
// not a real ladder workout. No footwork, fitness or FPS outcome claims.
// ============================================================

const TITLE = '스텝레더 게임 | 마우스로 사다리 칸 순서대로 맞히기 | SkillDrills';
const DESCRIPTION = '무료 스텝레더 게임. 위에서 내려오는 사다리의 칸 4개를 좌-우-좌-우 순서대로 마우스 커서로 지나가세요. 45초 동안 콤보를 이어 점수를 쌓고, 레벨이 오를수록 사다리가 빨라집니다. 설치 없이 바로 플레이하세요.';
const URL = 'https://skilldrills.online/ko/drills/physical/fitness/agility-ladder';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['스텝레더 게임', '사다리 칸 순서 클릭', '좌우 리듬 마우스 게임', '마우스 순서 게임', '무료 브라우저 리듬 게임'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills 홈", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "신체 훈련 허브", "item": "https://skilldrills.online/ko/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "피트니스", "item": "https://skilldrills.online/ko/drills/physical/fitness" },
    { "@type": "ListItem", "position": 4, "name": "스텝레더 게임", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "스텝레더 게임",
  "description": "내려오는 사다리의 칸 4개를 좌-우-좌-우 순서대로 마우스 커서로 지나가는 45초 무료 브라우저 게임.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas와 마우스를 지원하는 최신 웹 브라우저",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": URL,
  "inLanguage": "ko",
  "dateModified": "2026-11-10"
};

const FAQS = [
  {
    q: "스텝레더 게임은 어떤 게임인가요?",
    a: "스텝레더 게임은 화면 위에서 내려오는 사다리마다 칸 4개(좌-우-좌-우)를 정해진 순서대로 마우스 커서로 지나가는 무료 브라우저 게임입니다. 한 판은 45초이며, 사다리를 완성할 때마다 점수를 얻습니다."
  },
  {
    q: "어떻게 조작하나요? 클릭해야 하나요?",
    a: "클릭은 필요 없습니다. 마우스를 움직여 조준점을 현재 칸(초록 테두리) 위로 가져가면 그 칸을 밟은 것으로 처리되고 다음 칸이 활성화됩니다. 순서는 1(좌)→2(우)→3(좌)→4(우)입니다. Esc 키는 드릴을 종료합니다."
  },
  {
    q: "점수와 콤보는 어떻게 계산되나요?",
    a: "사다리 하나를 완성하면 100점에 콤보 배율을 곱한 점수를 얻습니다. 연속 완성 수에 따라 배율이 3연속 1.1배, 5연속 1.25배, 10연속 1.5배, 20연속 2.0배, 50연속 최대 3.0배까지 오릅니다."
  },
  {
    q: "레벨이 오르면 무엇이 바뀌나요?",
    a: "점수 250점마다 레벨이 1 오르고, 연속 완성 4개마다 보너스 레벨이 더해집니다. 사다리 스크롤 속도는 150 px/s에서 시작해 레벨 15에서 750 px/s가 되며, 그 뒤에도 계속 빨라집니다. 칸의 판정 범위는 18px에서 10px까지 줄어듭니다."
  },
  {
    q: "칸을 놓치면 어떻게 되나요?",
    a: "4칸을 다 지나기 전에 사다리가 화면 아래쪽에 닿으면 실패로 처리되어 콤보가 0으로 초기화되고 붉은 플래시와 화면 흔들림이 나타납니다. 이미 얻은 점수나 남은 시간은 줄어들지 않습니다."
  },
  {
    q: "실제 사다리 운동(스텝레더 훈련)을 대신할 수 있나요?",
    a: "아닙니다. 이 게임은 사다리 운동의 좌우 순서 패턴을 화면 위에서 손과 마우스로 따라가는 것일 뿐, 발놀림이나 체력, 민첩성 향상을 측정하거나 보장하지 않습니다."
  },
  {
    q: "결과 화면의 등급은 어떻게 정해지나요?",
    a: "등급은 최종 점수만으로 정해집니다. 15,343점 이상 S+, 12,283점 이상 S, 9,563점 이상 A, 6,120점 이상 B, 3,443점 이상 C, 1,530점 이상 D, 그 미만은 F입니다. SkillDrills 연습용 기준이며 다른 사람과의 비교 통계가 아닙니다."
  },
  {
    q: "기록은 어디에 저장되나요?",
    a: "최고 점수, 최고 콤보, 최고 레벨은 사용하는 브라우저의 localStorage에만 저장되며 서버로 전송되지 않습니다. 회원 가입이나 설치 없이 무료로 플레이할 수 있습니다."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ko",
  "dateModified": "2026-11-10",
  "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const STEPS = [
  "시작 버튼을 누르면 카운트다운(3-2-1) 뒤 게임이 시작됩니다(데스크톱에서는 포인터 락이 켜집니다).",
  "내려오는 사다리의 1번 칸(좌측, 초록 테두리) 위로 조준점을 가져갑니다.",
  "2번(우), 3번(좌), 4번(우) 칸을 같은 리듬으로 이어서 지나가 사다리를 완성합니다.",
  "45초 동안 사다리를 놓치지 않고 이어가며 콤보 배율을 올립니다."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "스텝레더 게임 하는 법",
  "description": "사다리 칸 4개를 좌-우-좌-우 순서대로 마우스 커서로 지나가는 방법.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `${i + 1}단계`, "text": text }))
};

const ladderGuide = {
  heading: "스텝레더 게임 가이드",
  intro: [
    "스텝레더 게임은 사다리 운동의 '좌-우-좌-우' 스텝 순서를 마우스 게임으로 옮긴 드릴입니다. 사다리가 위에서 내려오면 칸 4개를 정해진 순서대로 조준점으로 지나가야 하며, 클릭 없이 마우스 이동만으로 플레이합니다.",
    "한 판은 45초입니다. 사다리를 하나 완성할 때마다 100점에 콤보 배율(최대 3.0배)을 곱한 점수를 얻고, 점수 250점마다 레벨이 올라 사다리가 더 빨리 내려오고 칸의 판정 범위가 좁아집니다.",
    "빠른 연속 동작은 한 칸씩 따로 반응하기보다 네 칸을 하나의 묶음으로 미리 계획할 때 더 안정적이라는 연구가 있습니다(Lashley, 1951; Schmidt, 1975). 이 게임은 그런 순서와 리듬을 손으로 연습하는 것이며, 실제 발놀림이나 체력을 훈련하지는 않습니다."
  ],
  benchmarks: {
    title: "결과 등급 기준 (SkillDrills 연습 구간)",
    headers: ["등급", "최종 점수"],
    rows: [
      ["S+", "15,343점 이상"],
      ["S", "12,283 – 15,342점"],
      ["A", "9,563 – 12,282점"],
      ["B", "6,120 – 9,562점"],
      ["C", "3,443 – 6,119점"],
      ["D", "1,530 – 3,442점"],
      ["F", "1,530점 미만"]
    ],
    note: "게임 코드의 등급 공식에서 계산한 SkillDrills 연습 구간입니다. 다른 사용자와의 비교 통계나 백분위가 아닙니다."
  },
  techniques: {
    title: "점수를 올리는 요령",
    items: [
      { name: "네 칸을 한 묶음으로", desc: "칸 하나씩 보고 반응하면 늦습니다. 좌-우-좌-우 지그재그를 하나의 동작으로 그리듯 이어서 지나가세요.", tips: "칸 사이에서 멈추지 말고 커서를 계속 흘려보내세요." },
      { name: "아래쪽을 노리기", desc: "사다리가 계속 내려오므로 칸의 현재 위치보다 조금 아래를 향해 움직이면 판정 범위 안에 들어가기 쉽습니다.", tips: "속도가 빨라질수록 더 아래쪽을 예측하세요." },
      { name: "중앙에 시선 두기", desc: "칸은 화면 가운데 세로 축 양옆에 생깁니다. 시선을 가운데에 두면 좌우 칸을 한눈에 볼 수 있습니다.", tips: "레벨 4부터는 사다리 위치가 좌우로 조금씩 달라집니다." }
    ]
  },
  steps: STEPS,
  audience: "마우스로 하는 짧은 리듬·순서 게임을 원하는 사람, 좌우 왕복 커서 이동을 반복 연습하고 싶은 PC 사용자.",
  faqs: FAQS,
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954')
};

export default function AgilityLadderPageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <MotorSequencingClient
        copy={{
          title: "스텝레더 게임",
          hudLabels: { score: "점수", timeLeft: "남은 시간", bestScore: "최고 점수", bestCombo: "최고 콤보" },
          rulesTitle: "스텝레더 게임 규칙",
          rules: [
            { title: "칸 4개 순서대로", text: "내려오는 사다리의 칸을 1(좌)→2(우)→3(좌)→4(우) 순서로 조준점으로 지나갑니다. 클릭은 필요 없습니다." },
            { title: "콤보 배율", text: "사다리를 연속으로 완성하면 콤보 배율이 최대 3.0배까지 오릅니다. 사다리 하나는 100점 × 배율입니다." },
            { title: "레벨 상승", text: "점수 250점마다 레벨이 오르며 스크롤 속도가 빨라지고 칸의 판정 범위가 좁아집니다." },
            { title: "놓친 사다리", text: "사다리가 다 완성되기 전에 화면 아래에 닿으면 콤보가 초기화됩니다. 점수와 시간은 줄지 않습니다." }
          ],
          aboutTitle: "스텝레더 게임 소개",
          aboutHeading: "좌우 순서와 리듬을 마우스로",
          aboutText: "스텝레더 게임은 사다리 운동의 좌-우-좌-우 스텝 순서를 마우스 게임으로 옮긴 45초 드릴입니다. 내려오는 사다리의 칸 4개를 순서대로 조준점으로 지나가면 사다리가 완성되고, 점수가 오를수록 스크롤 속도가 150 px/s에서 레벨 15의 750 px/s를 넘어 계속 빨라집니다. 손과 마우스로 순서와 리듬을 연습하는 게임이며, 실제 발놀림이나 체력 향상을 측정하지 않습니다."
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
