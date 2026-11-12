import EntropicGridClient from '@/app/drills/visual/visual-recognition/entropic-grid/EntropicGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/ko/drills/visual/visual-recognition/entropic-grid";
const TITLE = "글자 찾기 게임 – 격자 속 코드 찾기 | SkillDrills";
const DESCRIPTION = "글자 찾기 게임: 10 × 10 격자의 두 글자 코드 100개 중 목표 코드를 45초 동안 모두 찾아 클릭하세요. 주변 칸은 계속 바뀝니다. 브라우저에서 바로 하는 무료 시각 탐색 연습입니다.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "글자 찾기 게임",
    "숨은 글자 찾기",
    "시각 탐색 훈련",
    "코드 찾기",
    "글자 찾기",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/entropic-grid', 'ko'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko/" },
    { "@type": "ListItem", "position": 2, "name": "시각 훈련", "item": "https://skilldrills.online/ko/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "시각 인지", "item": "https://skilldrills.online/ko/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "글자 찾기 게임", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "글자 찾기 게임",
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
  "name": "글자 찾기 게임 진행 방법",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "목표 코드 확인", "text": "화면 위 'FIND TARGET CODE' 아래에 영문자와 숫자로 된 두 글자 코드가 표시됩니다. 예: K7." },
    { "@type": "HowToStep", "position": 2, "name": "격자 훑어보기", "text": "10 × 10 격자에 두 글자 코드 100개가 있고, 목표 코드는 그중 최소 2곳에 있습니다." },
    { "@type": "HowToStep", "position": 3, "name": "모두 클릭", "text": "찾을 때마다 150점입니다. 모두 찾으면 새 목표 코드와 새 격자가 나옵니다." },
    { "@type": "HowToStep", "position": 4, "name": "45초 동안 반복", "text": "0.7초마다 방해 칸 3개의 코드가 바뀌고, 늦어도 12초마다 목표 코드가 바뀝니다." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "글자 찾기 게임은 어떻게 하나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "위에 두 글자 목표 코드가 표시되고, 10 × 10 격자의 코드 100개 중 여러 곳에 숨어 있습니다. 모두 클릭하거나 12초가 지나면 새 목표 코드와 새 격자가 나옵니다. 한 판은 45초입니다." }
    },
    {
      "@type": "Question",
      "name": "목표 코드는 몇 개 있나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "처음에는 2개입니다. 레벨이 오르면 늘어나 레벨 3부터 3개, 레벨 6부터 4개, 레벨 9부터 5개, 레벨 12부터 최대 6개입니다." }
    },
    {
      "@type": "Question",
      "name": "격자가 계속 바뀌는 이유는?",
      "acceptedAnswer": { "@type": "Answer", "text": "0.7초마다 무작위 방해 칸 3개가 새 코드로 바뀝니다. 목표 코드 칸은 그대로입니다. 그래서 격자 위치를 외워서 풀 수 없습니다." }
    },
    {
      "@type": "Question",
      "name": "점수는 어떻게 계산되나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "찾을 때마다 150점이고, 750점(5개)마다 레벨이 오릅니다. 끝나면 점수, 정확도, 최고 레벨, 찾은 개수를 보여 줍니다." }
    },
    {
      "@type": "Question",
      "name": "잘못 누르면 감점이 있나요?",
      "acceptedAnswer": { "@type": "Answer", "text": "없습니다. 잘못 누른 칸이 잠깐 빨갛게 표시될 뿐 점수와 시간은 줄지 않습니다. 정확도만 낮아집니다." }
    },
    {
      "@type": "Question",
      "name": "집중력 검사나 시력 검사인가요?",
      "acceptedAnswer": { "@type": "Answer", "text": "아닙니다. 브라우저에서 하는 무료 연습 게임이며 표준화된 심리 검사나 시력 검사가 아닙니다. 점수는 자신의 이전 기록과 비교하는 용도로만 쓰세요." }
    },
    {
      "@type": "Question",
      "name": "더 빨리 찾으려면?",
      "acceptedAnswer": { "@type": "Answer", "text": "코드를 글자 두 개가 아니라 한 쌍으로 기억하고, 격자를 4등분하거나 한 줄씩 훑으세요. 방해 칸이 계속 바뀌므로 위치를 외우는 것은 도움이 되지 않습니다." }
    }
  ]
};

export default function EntropicGridLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <EntropicGridClient copy={{ title: "글자 찾기 게임", subtitle: "계속 바뀌는 100칸 격자에서 목표 코드 찾기" }} />
      <DrillGuide
        eyebrow="시각 탐색 게임"
        title="글자 찾기 게임: 진행 방식, 점수, 요령"
        sources={sources}
      >
        <p><strong>글자 찾기 게임</strong>은 10 × 10 격자의 두 글자 코드 100개 속에서 목표 코드를 모두 찾아 누르는 무료 브라우저 연습입니다. 한 판은 45초이고, 방해 칸이 계속 바뀌어 격자가 같은 모습으로 남지 않습니다. 마우스나 터치로 할 수 있습니다.</p>

        <h3>격자에서 일어나는 일</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>목표 코드:</strong> 영문자(I, O 제외)와 숫자 2–9로 된 두 글자.</li>
          <li><strong>여러 개의 목표:</strong> 처음 2개, 레벨에 따라 최대 6개가 동시에 있습니다.</li>
          <li><strong>노이즈:</strong> 0.7초마다 방해 칸 3개가 새 코드로 바뀝니다.</li>
          <li><strong>목표 교체:</strong> 모두 찾거나 12초가 지나면 새 목표 코드가 나옵니다.</li>
        </ul>

        <h3>왜 찾기 어려울까</h3>
        <p>두 글자 코드는 눈에 띄는 한 가지 특징이 아니라 두 글자의 조합으로만 방해 코드와 구별됩니다. 이런 탐색은 항목을 하나씩 확인하는 방식에 가깝고(Treisman &amp; Gelade, 1980; Wolfe, 1994), 목표와 방해 자극이 비슷할수록 느려집니다(Duncan &amp; Humphreys, 1989). 계속 바뀌는 노이즈는 위치를 외워서 푸는 것도 막습니다.</p>

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
              <tr><td className="py-2.5 px-3">입문</td><td className="py-2.5 px-3 tabular-nums">0–2</td><td className="py-2.5 px-3 tabular-nums">0–300</td></tr>
              <tr><td className="py-2.5 px-3">안정</td><td className="py-2.5 px-3 tabular-nums">3–4</td><td className="py-2.5 px-3 tabular-nums">450–600</td></tr>
              <tr><td className="py-2.5 px-3">우수</td><td className="py-2.5 px-3 tabular-nums">5–6</td><td className="py-2.5 px-3 tabular-nums">750–900</td></tr>
              <tr><td className="py-2.5 px-3">최상</td><td className="py-2.5 px-3 tabular-nums">7+</td><td className="py-2.5 px-3 tabular-nums">1,050+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>요령</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>코드를 한 쌍으로 읽기:</strong> 글자 하나가 아니라 두 글자 순서 전체를 찾으세요.</li>
          <li><strong>4등분으로 훑기:</strong> 격자를 4등분해 차례로 확인하면 빠뜨리는 칸이 줄어듭니다.</li>
          <li><strong>찾은 뒤에도 계속:</strong> 같은 코드가 거의 항상 한 곳 더 있습니다.</li>
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
