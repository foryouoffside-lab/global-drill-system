import JumpSequenceClient from '@/app/drills/physical/fitness/jump-sequence/JumpSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/ko.md)
// Primary: 점프 타이밍 게임 (no measured volume; honest descriptive).
// Deleted the dead base title (점프력 / 서전트 / 플라이오메트릭): this is a
// charge-release-steer mouse game, not jump or plyometric training.
// ============================================================

const TITLE = '점프 타이밍 게임 | 충전해서 뛰고 공중에서 표적 맞히기 | SkillDrills';
const DESCRIPTION = '무료 점프 타이밍 게임. 마우스 버튼을 눌러 점프 힘을 충전하고 놓아서 뛰어오른 뒤, 공중에서 마우스로 방향을 틀어 움직이는 표적을 맞히세요. 45초 동안 콤보를 이어 점수를 쌓습니다. 설치 없이 바로 플레이하세요.';
const URL = 'https://skilldrills.online/ko/drills/physical/fitness/jump-sequence';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['점프 타이밍 게임', '점프 게임', '충전 점프 게임', '공중 조작 게임', '마우스 타이밍 게임'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/jump-sequence'),
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
    { "@type": "ListItem", "position": 4, "name": "점프 타이밍 게임", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "점프 타이밍 게임",
  "description": "버튼을 눌러 충전하고 놓아서 뛰어오른 뒤 공중에서 방향을 틀어 움직이는 표적을 맞히는 45초 무료 브라우저 게임.",
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
    q: "점프 타이밍 게임은 어떤 게임인가요?",
    a: "점프 타이밍 게임은 바닥의 점(플레이어)을 충전해서 뛰어오르게 하고, 공중에서 방향을 틀어 화면을 떠다니는 표적에 맞히는 무료 브라우저 게임입니다. 한 판은 45초입니다."
  },
  {
    q: "어떻게 조작하나요?",
    a: "조준점을 바닥의 플레이어 점 위에 두고 마우스 버튼을 누르고 있으면 점프 힘이 충전됩니다(약 1초에 최대). 버튼을 놓으면 위로 뛰어오르고, 공중에 있는 동안 플레이어는 마우스의 좌우 위치를 따라 이동합니다. Esc 키는 드릴을 종료합니다."
  },
  {
    q: "점수와 콤보는 어떻게 계산되나요?",
    a: "공중에서 표적에 닿으면 적중입니다. 적중 1회의 기본 점수는 레벨 1에서 5점이고 레벨이 오를수록 커지며, 여기에 연속 적중 수에 따른 콤보 배율(최대 3.0배, 50연속)이 곱해집니다."
  },
  {
    q: "레벨이 오르면 무엇이 바뀌나요?",
    a: "점수 250점마다 레벨이 1 오르고, 연속 적중 4회마다 보너스 레벨이 더해집니다. 표적 속도는 120 px/s에서 시작해 레벨 15에서 약 800 px/s(긴 콤보 시 최대 900 px/s)가 되고 그 뒤에도 계속 빨라집니다. 표적 반지름은 35px에서 12px까지 줄어듭니다."
  },
  {
    q: "표적을 맞히지 못하면 어떻게 되나요?",
    a: "표적에 닿지 못하고 바닥에 내려오면 실패로 처리되어 연속 적중과 콤보가 초기화되고 붉은 플래시가 나타납니다. 점수와 남은 시간은 줄어들지 않으며, 새 표적이 나타납니다."
  },
  {
    q: "실제 운동 효과가 있나요?",
    a: "아닙니다. 이 게임은 마우스로 충전 시간과 공중 방향을 조절하는 타이밍 게임이며, 실제 점프 높이나 다리 힘을 측정하거나 훈련하지 않습니다. 운동 효과를 주장하지 않습니다."
  },
  {
    q: "결과 화면의 등급은 어떻게 정해지나요?",
    a: "등급은 최종 점수만으로 정해집니다. 15,343점 이상 S+, 12,283점 이상 S, 9,563점 이상 A, 6,120점 이상 B, 3,443점 이상 C, 1,530점 이상 D, 그 미만은 F입니다. SkillDrills 연습용 기준이며 다른 사람과의 비교 통계가 아닙니다."
  },
  {
    q: "기록은 어디에 저장되나요?",
    a: "최고 점수, 최고 콤보, 최고 레벨은 사용하는 브라우저의 localStorage에만 저장되며 서버로 전송되지 않습니다. 설치나 회원 가입 없이 무료로 플레이할 수 있습니다."
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
  "시작 버튼을 누르고 카운트다운(3-2-1)이 끝나면 조준점을 바닥의 플레이어 점 위에 둡니다.",
  "표적의 높이를 보고 마우스 버튼을 눌러 점프 힘을 충전한 뒤 놓습니다.",
  "공중에 있는 동안 마우스를 좌우로 움직여 표적이 지나갈 위치로 방향을 틉니다.",
  "45초 동안 연속 적중을 이어 콤보 배율을 올립니다."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "점프 타이밍 게임 하는 법",
  "description": "충전해서 뛰어오르고 공중에서 방향을 틀어 움직이는 표적을 맞히는 방법.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `${i + 1}단계`, "text": text }))
};

const jumpGuide = {
  heading: "점프 타이밍 게임 가이드",
  intro: [
    "점프 타이밍 게임은 '얼마나 오래 충전할지'와 '공중에서 어디로 틀지'를 맞추는 마우스 게임입니다. 버튼을 누르고 있는 시간만큼 점프가 높아지고, 공중에서는 플레이어가 마우스의 좌우 위치를 따라갑니다. 표적은 화면 안을 떠다니며 벽에 부딪히면 튕겨 나옵니다.",
    "한 판은 45초입니다. 표적을 맞힐 때마다 점수와 연속 적중이 쌓이고, 레벨이 오르면 표적이 더 빠르고 작아집니다. 표적에 닿지 못하고 내려오면 콤보만 초기화되고 점수와 시간은 그대로입니다.",
    "움직이는 물체를 맞히려면 현재 위치가 아니라 만날 지점을 예측해야 합니다(Lee, 1976). 뛰어오른 뒤 짧은 순간에 방향을 고치는 것은 미리 계획한 큰 동작과 마지막 보정으로 나뉩니다(Woodworth, 1899). 이 게임은 그런 타이밍을 마우스로 연습하는 것이며, 실제 점프 능력과는 관계가 없습니다."
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
      { name: "필요한 만큼만 충전", desc: "항상 끝까지 충전하면 표적을 지나쳐 버립니다. 표적 높이에 맞춰 충전 시간을 짧게 끊으세요.", tips: "충전 게이지를 보며 표적 높이와 비교하세요." },
      { name: "앞질러 방향 틀기", desc: "표적을 뒤쫓지 말고 표적이 지나갈 자리로 먼저 마우스를 옮기세요. 플레이어는 마우스 쪽으로 서서히 따라갑니다.", tips: "튕겨 나오는 방향까지 예측하면 더 쉽습니다." },
      { name: "착지 후 바로 다음 점프", desc: "적중이나 실패 뒤에는 새 표적이 나타납니다. 조준점을 바로 플레이어 점으로 되돌려 다음 충전을 준비하세요.", tips: "시간 손실을 줄일수록 콤보를 길게 이어갈 수 있습니다." }
    ]
  },
  steps: STEPS,
  audience: "짧은 마우스 타이밍 게임을 원하는 사람, 움직이는 표적의 위치를 예측하는 연습을 하고 싶은 PC 사용자.",
  faqs: FAQS,
  sources: pickSources('lee1976', 'woodworth1899', 'kawato1999', 'fitts1954')
};

export default function JumpSequencePageKo() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <JumpSequenceClient
        copy={{
          title: "점프 타이밍 게임",
          hudLabels: { score: "점수", timeLeft: "남은 시간", bestScore: "최고 점수", bestCombo: "최고 콤보" },
          rulesTitle: "점프 타이밍 게임 규칙",
          rules: [
            { title: "충전과 점프", text: "조준점을 플레이어 점 위에 두고 마우스 버튼을 누르고 있으면 충전되고, 놓으면 위로 뛰어오릅니다." },
            { title: "공중 방향 조절", text: "공중에 있는 동안 마우스를 좌우로 움직이면 플레이어가 그쪽으로 따라가 표적을 향해 방향을 틉니다." },
            { title: "콤보 배율", text: "연속으로 표적을 맞히면 콤보 배율이 최대 3.0배까지 오릅니다." },
            { title: "실패 시 콤보 초기화", text: "표적을 맞히지 못하고 바닥에 내려오면 콤보가 초기화됩니다. 점수와 시간은 줄지 않습니다." }
          ],
          aboutTitle: "점프 타이밍 게임 소개"
        }}
      />
      <DrillGuide guide={jumpGuide} />
      <RelatedDrills />
    </>
  );
}
