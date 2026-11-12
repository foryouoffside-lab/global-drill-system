import VisualSearchClient from '@/app/drills/visual/visual-recognition/visual-search/VisualSearchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/ko/drills/visual/visual-recognition/visual-search";
const TITLE = "다른 글자 찾기 – 시각 탐색 테스트 | SkillDrills";
const DESCRIPTION = "다른 글자 찾기 게임: 회전된 비슷한 글자 95개 사이에 숨은 표적 글자 하나를 45초 동안 최대한 많이 찾으세요. 브라우저에서 바로 하는 무료 시각 탐색 연습입니다.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "다른 글자 찾기",
    "틀린 글자 찾기",
    "시각 탐색 테스트",
    "글자 찾기 게임",
    "시각 탐색",
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: URL,
    siteName: "SkillDrills",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/visual-search', 'ko'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko/" },
    { "@type": "ListItem", "position": 2, "name": "시각 훈련", "item": "https://skilldrills.online/ko/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "시각 인지", "item": "https://skilldrills.online/ko/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "다른 글자 찾기", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "다른 글자 찾기",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION,
  "url": URL,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "다른 글자 찾기 진행 방법",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "표적 글자 확인", "text": "화면 위 'FIND' 옆에 찾을 글자가 표시됩니다. 예: C, E, P, 6." },
    { "@type": "HowToStep", "position": 2, "name": "격자 훑어보기", "text": "12 × 8 = 96칸 격자에 표적은 딱 하나, 나머지 95칸은 비슷한 방해 글자입니다. 모든 글자가 0·90·180·270도로 무작위 회전되어 있습니다." },
    { "@type": "HowToStep", "position": 3, "name": "표적 클릭", "text": "표적을 클릭하거나 탭하면 곧바로 새 격자와 새 표적 글자가 나옵니다." },
    { "@type": "HowToStep", "position": 4, "name": "45초 동안 반복", "text": "한 판은 45초로 고정이며, 표적을 찾을 때마다 150점입니다." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "다른 글자 찾기는 어떻게 하나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "위에 표시된 표적 글자가 12 × 8 격자 안에 딱 한 번 있고, 나머지 95칸은 비슷한 방해 글자입니다(예: O·Q·G 사이의 C). 표적을 누르면 새 격자와 새 표적이 바로 나오며, 한 판은 45초입니다." }
    },
    {
      "@type": "Question",
      "name": "점수는 어떻게 계산되나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "표적 하나를 찾을 때마다 150점입니다. 750점(5개)마다 레벨 표시가 올라가지만 격자는 계속 96칸입니다. 끝나면 점수, 정확도, 최고 레벨, 찾은 개수를 보여 줍니다." }
    },
    {
      "@type": "Question",
      "name": "잘못 누르면 감점이 있나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "없습니다. 잘못 누른 칸이 잠깐 빨갛게 표시될 뿐 점수와 시간은 줄지 않습니다. 결과의 정확도만 낮아집니다." }
    },
    {
      "@type": "Question",
      "name": "글자는 왜 회전되어 있나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "표적과 방해 글자는 곡선과 획이 비슷하고, 무작위 회전 때문에 방해 글자들이 고른 무늬로 묶이지 않습니다. 그래서 표적이 저절로 튀어나오지 않고 한 칸씩 확인해야 합니다. 표적과 방해 자극이 비슷할수록 탐색은 느려집니다(Duncan & Humphreys, 1989)." }
    },
    {
      "@type": "Question",
      "name": "특징 탐색과 결합 탐색은 어떻게 다른가요?",
      "acceptedAnswer": { "@type": "Answer", "text": "색처럼 한 가지 특징만 다른 표적은 방해 자극 수와 상관없이 거의 바로 눈에 띕니다. 여러 특징을 함께 따져야 하는 탐색은 방해 자극이 늘수록 느려집니다(Treisman & Gelade, 1980; Wolfe, 1994)." }
    },
    {
      "@type": "Question",
      "name": "시력 검사나 주의력 검사인가요?",
      "acceptedAnswer": { "@type": "Answer", "text": "아닙니다. 브라우저에서 하는 무료 연습 게임이며 시력 검사나 표준화된 심리 검사가 아닙니다. 점수는 자신의 이전 기록과 비교하는 용도로만 쓰세요." }
    },
    {
      "@type": "Question",
      "name": "더 빨리 찾으려면 어떻게 하나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "찾기 전에 표적 글자의 모양을 먼저 기억하고, 격자를 한 줄씩 또는 4등분해서 차례로 훑으세요. 같은 칸을 두 번 보지 않게 됩니다." }
    }
  ]
};

export default function VisualSearchLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <VisualSearchClient copy={{ title: "다른 글자 찾기", subtitle: "비슷한 글자 95개 속 표적 하나 찾기" }} />
      <DrillGuide
        eyebrow="시각 탐색"
        title="다른 글자 찾기: 진행 방식, 점수, 요령"
        sources={sources}
      >
        <p><strong>다른 글자 찾기</strong>는 브라우저에서 바로 하는 무료 시각 탐색 연습입니다. 12 × 8 격자의 회전된 글자 96개 중 표적 글자는 하나뿐이고, 45초 동안 최대한 많이 찾으면 됩니다. 하나를 찾을 때마다 격자와 표적 글자가 바뀝니다.</p>

        <h3>격자에서 일어나는 일</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>비슷한 방해 글자:</strong> 표적마다 닮은 글자 3종이 섞입니다. 예: O·Q·G 사이의 C, F·L·P 사이의 E, 8·9·0 사이의 6.</li>
          <li><strong>무작위 회전:</strong> 표적을 포함한 모든 글자가 0·90·180·270도 중 하나로 회전됩니다.</li>
          <li><strong>고정 시간:</strong> 45초, 시간 보너스나 시간 차감은 없습니다.</li>
          <li><strong>입력:</strong> 마우스 클릭 또는 터치 한 번.</li>
        </ul>

        <h3>왜 한 칸씩 확인하게 될까</h3>
        <p>지각 심리학에서는 표적이 한 가지 특징만으로 바로 튀어나오는 특징 탐색과, 여러 특징을 묶어 하나씩 확인해야 하는 결합 탐색을 구분합니다(Treisman &amp; Gelade, 1980; Wolfe, 1994). 표적과 방해 자극이 비슷할수록, 방해 자극끼리 제각각일수록 탐색은 느려집니다(Duncan &amp; Humphreys, 1989). 이 격자는 비슷한 모양과 무작위 회전으로 바로 그 조건을 만듭니다.</p>

        <h3>SkillDrills 연습 단계 (45초)</h3>
        <p>아래 단계는 이 격자에 대한 SkillDrills 자체 기준이며 과학적 규준이 아닙니다.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">연습 단계</th>
                <th className="py-2.5 px-3 font-semibold">찾은 개수</th>
                <th className="py-2.5 px-3 font-semibold">점수</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">입문</td><td className="py-2.5 px-3 tabular-nums">0–3</td><td className="py-2.5 px-3 tabular-nums">0–450</td></tr>
              <tr><td className="py-2.5 px-3">안정</td><td className="py-2.5 px-3 tabular-nums">4–6</td><td className="py-2.5 px-3 tabular-nums">600–900</td></tr>
              <tr><td className="py-2.5 px-3">우수</td><td className="py-2.5 px-3 tabular-nums">7–9</td><td className="py-2.5 px-3 tabular-nums">1,050–1,350</td></tr>
              <tr><td className="py-2.5 px-3">최상</td><td className="py-2.5 px-3 tabular-nums">10+</td><td className="py-2.5 px-3 tabular-nums">1,500+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>요령</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>표적을 먼저 기억:</strong> 닮은 글자와 구별되는 부분, 예를 들어 C의 열린 곳이나 G의 가로획을 확인하세요.</li>
          <li><strong>체계적으로 훑기:</strong> 한 줄씩 또는 4등분으로 훑어 같은 칸을 두 번 보지 않습니다.</li>
          <li><strong>침착하게 클릭:</strong> 잘못 눌러도 시간은 줄지 않지만 정확도가 떨어집니다.</li>
        </ol>

        <h3>자주 묻는 질문 (FAQ)</h3>
        <div className="space-y-4 my-6">
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name}>
              <h4 className="font-semibold text-white">{q.name}</h4>
              <p className="text-slate-300 mt-1">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
