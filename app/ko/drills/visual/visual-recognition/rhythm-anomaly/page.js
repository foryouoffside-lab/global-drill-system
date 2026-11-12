import RhythmAnomalyClient from '@/app/drills/visual/visual-recognition/rhythm-anomaly/RhythmAnomalyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = "https://skilldrills.online/ko/drills/visual/visual-recognition/rhythm-anomaly";
const TITLE = "깜빡임 구별 게임: 시각 리듬 테스트 | SkillDrills";
const DESCRIPTION = "깜빡임 구별 게임: 6x6 격자에서 혼자 다른 박자로 깜빡이는 칸을 찾아 클릭하세요. 45초 무료 시각 리듬 테스트이며 의료 검사가 아닙니다.";
const FAQS = [
  [
    "깜빡임 구별 게임은 무엇을 측정하나요?",
    "45초 동안 혼자 다른 박자로 깜빡이는 칸을 몇 번 찾았는지(1회 10점)와 연속 성공, 오답 수를 기록합니다. 시각 리듬을 비교하는 연습용 점수이며 시력이나 신경 기능을 진단하지 않습니다."
  ],
  [
    "플리커 검사(CFF)와 같은 건가요?",
    "아닙니다. 격자는 초당 약 0.6~2.5회로 천천히 깜빡이며, 깜빡임이 하나로 합쳐 보이는 임계 융합 빈도(약 50~60Hz)를 측정하지 않습니다."
  ],
  [
    "점수와 레벨은 어떻게 올라가나요?",
    "정답 1회에 10점, 3회마다 레벨이 1 오릅니다. 정답을 맞힐수록 격자 박자가 빨라지고(주기 1.6초에서 0.6초까지) 방해 깜빡임도 잦아집니다."
  ],
  [
    "틀리면 감점되나요?",
    "감점이나 시간 차감은 없습니다. 오답 시 빨간 섬광이 나오고 연속 성공만 초기화됩니다. 시간 제한 설정을 켠 경우 제한 시간 안에 못 찾으면 이상 칸이 이동합니다."
  ],
  [
    "잠깐 어두워지는 칸은 무엇인가요?",
    "무작위 방해 자극입니다. 한 번만 바뀌는 칸이 아니라 계속 다른 박자로 깜빡이는 칸이 정답입니다."
  ],
  [
    "키보드로도 할 수 있나요?",
    "마우스 클릭이나 화면 터치로 플레이합니다. 키보드는 사용하지 않습니다."
  ],
  [
    "모니터 주사율이 결과에 영향을 주나요?",
    "점멸이 느려 60Hz 화면에서도 충분히 표시됩니다. 다만 화면 밝기, 크기, 입력 지연은 결과에 영향을 줄 수 있으니 같은 기기에서 비교하세요(Woods et al., 2015)."
  ],
  [
    "빛에 민감해도 해도 되나요?",
    "격자는 어두운 회색으로 천천히 깜빡이지만, 깜빡이는 화면이 불편하거나 광과민 증상이 있다면 하지 마세요. 두통이나 어지러움이 생기면 바로 멈추세요."
  ]
];
const RULES = [
  "정답 칸 클릭: +10점, 이상 칸이 다른 위치로 이동합니다.",
  "3번 맞힐 때마다 레벨이 1 오르고, 격자 박자와 방해 깜빡임이 빨라집니다.",
  "무작위로 몇 칸이 잠깐 어두워지는 방해 자극이 계속 나옵니다.",
  "오답 클릭: 빨간 섬광과 함께 연속 성공만 초기화되며 점수·시간 감점은 없습니다.",
  "시간 제한 설정을 켜면 이상 칸을 6초(후반 최저 1.8초) 안에 찾지 못할 때 위치가 바뀌고 연속 성공이 초기화됩니다."
];
const BANDS = [
  [
    "구간 1",
    "< 50",
    "0–4",
    "L1–2"
  ],
  [
    "구간 2",
    "50–99",
    "5–9",
    "L2–4"
  ],
  [
    "구간 3",
    "100–149",
    "10–14",
    "L4–5"
  ],
  [
    "구간 4",
    "150–199",
    "15–19",
    "L6–7"
  ],
  [
    "구간 5",
    "200+",
    "20+",
    "L7+"
  ]
];
const TIPS = [
  "한 칸씩 훑기보다 격자 전체를 넓게 보세요. 혼자 박자가 어긋난 칸이 더 잘 보입니다.",
  "한 번 어두워졌다 돌아오는 칸은 방해 자극입니다. 두 번 이상 다른 박자로 깜빡이는 칸을 클릭하세요.",
  "레벨이 올라 박자가 빨라지면 새 리듬을 한 박자 정도 본 뒤 클릭하세요.",
  "기록은 같은 기기, 같은 화면 밝기에서 비교하세요."
];
const INTRO = [
  "깜빡임 구별 게임은 6x6 격자의 36칸이 같은 박자로 천천히 깜빡이는 가운데, 혼자 더 빠른 박자로 깜빡이는 칸 하나를 찾아 클릭하는 45초 시각 리듬 테스트입니다. 마우스나 터치로 브라우저에서 무료로 플레이하며, 시력 검사나 의료 검사가 아닙니다.",
  "이상 칸의 주기는 주변 칸의 약 72%라서 약 1.4배 빠르게 깜빡이고, 가장 밝을 때 조금 더 밝습니다. 정답을 맞힐 때마다 격자 전체의 박자가 빨라집니다(주기 1.6초에서 최저 0.6초). 처음에는 쉽지만 후반에는 박자 차이를 더 빨리 읽어야 합니다.",
  "점멸 속도는 초당 약 0.6~2.5회로, 깜빡임이 하나의 빛으로 합쳐 보이는 임계 융합 빈도(약 50~60Hz; De Lange, 1958; Kelly, 1961)보다 훨씬 느립니다. 그래서 이 게임은 CFF나 플리커 검사가 아니라 여러 칸의 리듬을 비교하는 주의 과제에 가깝습니다. 두 자극이 같은 박자인지 판단하는 일은 깜빡임 자체를 알아차리는 것보다 훨씬 느린 속도에서 한계에 이릅니다(Holcombe, 2009)."
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "깜빡임 구별 게임",
  "시각 리듬 테스트",
  "깜빡임 구별",
  "다른 박자 찾기",
  "시각 타이밍 연습"
],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
    siteName: "SkillDrills",
    locale: "ko_KR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/rhythm-anomaly', 'ko'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko/" },
    { "@type": "ListItem", "position": 2, "name": "시각 훈련", "item": "https://skilldrills.online/ko/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "시각 인지", "item": "https://skilldrills.online/ko/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "깜빡임 구별 게임", "item": PAGE_URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "깜빡임 구별 게임 (시각 리듬 테스트)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "6x6 격자에서 혼자 더 빠른 박자로 깜빡이는 칸을 찾는 45초 브라우저 게임. 마우스·터치로 플레이하며 의료 검사가 아닙니다.",
  "url": PAGE_URL,
  "inLanguage": "ko-KR",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "깜빡임 구별 게임 하는 방법",
  "inLanguage": "ko-KR",
  "step": [
  [
    "격자 전체 보기",
    "6x6 격자 가운데에 시선을 두고 36칸이 함께 깜빡이는 기본 박자를 봅니다."
  ],
  [
    "다른 박자 찾기",
    "혼자 더 빠르게 깜빡이는 칸 하나를 찾습니다. 잠깐 어두워지는 칸은 방해 자극입니다."
  ],
  [
    "클릭 또는 터치",
    "그 칸을 클릭하거나 터치하면 10점을 얻고 이상 칸이 다른 위치로 옮겨 갑니다."
  ],
  [
    "빨라지는 박자에 맞추기",
    "3번 맞힐 때마다 레벨이 오르고 박자가 빨라집니다. 45초가 끝나면 점수와 연속 성공을 확인합니다."
  ]
].map(([name, text], i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": name,
    "text": text,
    "url": `${PAGE_URL}#step-${i + 1}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-12",
  "mainEntity": FAQS.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function KoreanRhythmAnomalyPage() {
  const sources = pickSources('holcombe2009', 'kelly1961', 'delange1958', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RhythmAnomalyClient copy={{ title: "깜빡임 구별 게임", subtitle: "시각 리듬 테스트: 박자가 다른 칸 찾기" }} />
      <DrillGuide
        eyebrow={"시각 리듬 테스트 가이드"}
        title={"깜빡임 구별 게임: 방법과 점수 기준"}
        sources={sources}
      >
        {INTRO.map((p) => <p key={p}>{p}</p>)}

        <h3>{"규칙"}</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h3>{"SkillDrills 연습 구간"}</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                {[
  "구간",
  "45초 점수",
  "정답 수",
  "도달 레벨"
].map((h) => <th key={h} className="py-2.5 px-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {BANDS.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => <td key={i} className="py-2.5 px-3 tabular-nums">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{"SkillDrills 연습 구간입니다. 인구 통계나 백분위, 진단 기준이 아닙니다."}</p>

        <h3>{"요령"}</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ol>

        <h3>{"자주 묻는 질문"}</h3>
        <div className="space-y-4 my-6">
          {FAQS.map(([q, a]) => (
            <div key={q}>
              <h4 className="font-semibold text-white">{q}</h4>
              <p className="text-slate-300 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
