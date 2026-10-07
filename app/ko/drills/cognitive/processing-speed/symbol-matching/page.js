import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "처리속도 테스트 | 기호 숫자 매칭 훈련 | SkillDrills",
  description: "기호와 숫자를 짝지어 입력하는 무료 처리속도 테스트입니다. SDMT 방식으로 정보처리속도와 시각 탐색을 연습하며 임상 검사가 아닙니다.",
  keywords: ["처리속도 테스트", "처리속도 훈련", "기호 숫자 매칭 인지속도", "SDMT 인지 검사", "정보처리속도 테스트", "기호 쓰기 검사 온라인", "DSST 테스트", "시각 탐색 검사", "단기 연상기억 훈련", "두뇌 인지속도 측정", "신경심리 검사 무료", "성인 뇌 반응속도",
    "기호숫자검사",
    "웨슬러 인지처리속도"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "처리속도 테스트 | 기호 숫자 매칭 훈련 | SkillDrills",
    description: "기호와 숫자를 짝지어 입력하는 무료 처리속도 테스트입니다. SDMT 방식으로 정보처리속도와 시각 탐색을 연습하며 임상 검사가 아닙니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "처리속도 테스트 | 기호 숫자 매칭 훈련 | SkillDrills",
    description: "기호와 숫자를 짝지어 입력하는 무료 처리속도 테스트입니다. SDMT 방식으로 정보처리속도와 시각 탐색을 연습하며 임상 검사가 아닙니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills 홈",
      "item": "https://skilldrills.online/ko"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "훈련 허브",
      "item": "https://skilldrills.online/ko/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "인지·집중력 훈련",
      "item": "https://skilldrills.online/ko/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "기호 숫자 매칭 (SDMT)",
      "item": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "기호 숫자 매칭 SDMT 인지속도 측정기",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 온라인 기호 숫자 매칭 인지 검사(SDMT). 고유 기호와 숫자의 매핑 관계를 신속히 대조하여 정보 처리 속도, 시각 탐색 효율성, 단기 연상 기억력을 정밀하게 측정합니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "기호 숫자 매칭 인지속도・SDMT 인지 검사 – 정보처리속도 테스트",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "기호 숫자 매칭 SDMT – 기호 숫자 고속 대조 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching",
  "description": "무료 온라인 기호 숫자 매칭 인지 검사(SDMT). 고유 기호와 숫자의 매핑 관계를 신속히 대조하여 정보 처리 속도, 시각 탐색 효율성, 단기 연상 기억력을 정밀하게 측정합니다.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "기호 숫자 양식 검사(SDMT, Symbol Digit Modalities Test)란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aaron Smith(1973)가 개발한 표준 신경심리 평가로, 기호와 숫자의 대응표를 참조하여 신속하게 대조 입력하는 정보 처리 속도 검사입니다."
      }
    },
    {
      "@type": "Question",
      "name": "DSST 검사와의 차이점은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DSST는 숫자를 보고 복잡한 기호를 직접 그려야 하지만, SDMT는 기호를 보고 친숙한 숫자를 입력하므로 그리기 동작의 영향을 줄이고 기호 대응과 입력 속도에 초점을 맞춥니다."
      }
    },
    {
      "@type": "Question",
      "name": "어떤 두뇌 능력을 집중 측정하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "(1) 중추 정보 처리 속도, (2) 시각 탐색 기민성, (3) 단기 연상 기억 형성력, (4) 지속적 집행 주의력입니다."
      }
    },
    {
      "@type": "Question",
      "name": "정상 성인의 평균 수행 기준은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "이 드릴은 임상 SDMT가 아니며 대응표와 시간이 달라 임상 규준을 그대로 적용할 수 없습니다. 연령에 따라 처리 속도가 달라진다는 연구가 있으므로(Der & Deary, 2006), 같은 기기에서 본인의 기록 변화를 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "공식적인 의료 진단 검사인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 본 훈련은 동일한 인지 패러다임을 차용한 무료 두뇌 트레이닝 도구이며 질환의 진단 목적으로 사용할 수 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "대응표 암기가 속도에 미치는 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "기호와 숫자의 짝을 작업기억에 초반에 각인시키면 상단 표로 시선이 오가는 표를 확인하는 시선 이동이 줄어 속도가 빨라질 수 있습니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수를 극대화하는 핵심 전략은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "상단 표와 중앙 영역 사이의 시선 이동 반경을 최소화하고, 기호를 2~3개씩 묶어서(Chunking) 처리하는 것입니다."
      }
    },
    {
      "@type": "Question",
      "name": "나이가 들면 정보 처리 속도가 저하되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "연령이 높아질수록 처리 속도가 완만하게 느려지는 경향이 보고되어 있습니다(Der & Deary, 2006). 개인차가 크며, 이 드릴이 노화에 따른 변화를 막는다고 주장하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "권장 훈련 주기는 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정해진 정답은 없습니다. 하루 10분 안팎의 짧은 세션을 반복하며 같은 조건에서 기록을 비교하는 방식이 부담이 적습니다."
      }
    },
    {
      "@type": "Question",
      "name": "모바일 터치 환경에서도 정밀한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 모바일 화면 하단에 1~6 숫자 키패드가 최적 크기로 배치되어 있어 편리하게 검사할 수 있습니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "기호 숫자 매칭 인지속도・SDMT 인지 검사",
  "description": "무료 온라인 기호 숫자 매칭 인지 검사(SDMT). 고유 기호와 숫자의 매핑 관계를 신속히 대조하여 정보 처리 속도, 시각 탐색 효율성, 단기 연상 기억력을 정밀하게 측정합니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "상단 기호-숫자 매칭 표 확인",
      "text": "상단 헤더에 나열된 6개 기호와 1~6번 숫자의 연결 관계를 파악합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "중앙 제시 기호 순간 식별",
      "text": "중앙 박스에 출현하는 타깃 기호를 눈으로 즉시 포착합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "일치하는 숫자 키 즉각 입력",
      "text": "작업기억 또는 신속한 표 스캔을 통해 해당하는 숫자 키패드를 탭합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "연속적인 연상 리듬 유지",
      "text": "기호와 숫자의 연합을 자동화하여 끊김 없는 고속 스트릭을 달성합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "기호 숫자 매칭 인지속도・SDMT 인지 검사 – 정보처리속도 테스트",
    paragraphs: [
      "무료 온라인 기호 숫자 매칭 인지 검사(SDMT). 고유 기호와 숫자의 매핑 관계를 신속히 대조하여 정보 처리 속도, 시각 탐색 효율성, 단기 연상 기억력을 정밀하게 측정합니다.",
      "DSST는 숫자를 보고 복잡한 기호를 직접 그려야 하지만, SDMT는 기호를 보고 친숙한 숫자를 입력하므로 그리기 동작의 영향을 줄이고 기호 대응과 입력 속도에 초점을 맞춥니다.",
      "(1) 중추 정보 처리 속도, (2) 시각 탐색 기민성, (3) 단기 연상 기억 형성력, (4) 지속적 집행 주의력입니다.",
    ],
  },
  benchmarks: {
    title: '기호 숫자 매칭 수행 구간(참고용)',
    headers: ['단계', '구간 이름', '해석', '도달 수준', '정확도 목표', '비고'],
    rows: [
      { tier: 'Tier 1', rank: '최상위 구간', stat: '매우 높음', level: '최상위', accuracy: '98% 이상', percentile: '정확도 유지가 핵심' },
      { tier: 'Tier 2', rank: '상급', stat: '높음', level: '우수', accuracy: '94–97%', percentile: '속도 상승 시 오답 관리' },
      { tier: 'Tier 3', rank: '숙련', stat: '평균 이상', level: '숙련', accuracy: '88–93%', percentile: '속도와 정확도 균형' },
      { tier: 'Tier 4', rank: '일반 수준', stat: '평균 범위', level: '표준', accuracy: '78–87%', percentile: '기본 규칙 익히기' },
      { tier: 'Tier 5', rank: '입문', stat: '기준선', level: '기초', accuracy: '78% 미만', percentile: '천천히 정확하게 시작' },
    ],
    note: '구간은 SkillDrills가 정한 참고용 구분이며 사용자 통계, 백분위 또는 임상 기준이 아닙니다.',
  },
  protocols: {
    title: '두뇌 처리 속도와 집중력을 극대화하는 4대 훈련 프로토콜',
    description: '스미스 기호 숫자 양식 검사(SDMT, Smith, 1973) 및 신경인지 처리 속도 규준에 기반한, 시각-기호 즉각 연합과 작업기억 전환을 극대화하는 과학적 인지 훈련 프로토콜입니다.',
    items: [
      { title: "상단 기호-숫자 매칭 표 확인", description: "상단 헤더에 나열된 6개 기호와 1~6번 숫자의 연결 관계를 파악합니다." },
      { title: "중앙 제시 기호 순간 식별", description: "중앙 박스에 출현하는 타깃 기호를 눈으로 즉시 포착합니다." },
      { title: "일치하는 숫자 키 즉각 입력", description: "작업기억 또는 신속한 표 스캔을 통해 해당하는 숫자 키패드를 탭합니다." },
      { title: "연속적인 연상 리듬 유지", description: "기호와 숫자의 연합을 자동화하여 끊김 없는 고속 스트릭을 달성합니다." },
    ],
  },
  faqs: {
    title: '자주 묻는 질문 (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function LocalizedCognitivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <SymbolMatchingClient
        copy={{
          title: "처리속도 테스트",
          subtitle: "기호와 숫자의 대응을 빠르게 찾아 정보처리속도를 연습합니다",
          startTitle: "기호 숫자 매칭",
          stageCaption: "중앙의 표적 기호를 위 키와 비교한 뒤 맞는 숫자를 누르세요.",
          rulesTitle: "드릴 안내 및 점수 시스템",
          aboutTitle: "기호 숫자 매칭이란?",
          faqTitle: "자주 묻는 질문",
          readyLabel: "준비",
          labels: { score: "점수", time: "시간", level: "레벨", bestScore: "최고 점수", timeLeft: "남은 시간", targetSymbol: "표적 기호", accuracy: "정확도", hits: "적중", misses: "실수", peakLevel: "최고 레벨" },
          aboutLead: "기호 숫자 과제는 제한 시간 안에 기호와 숫자의 대응을 찾아 지식보다 정보처리속도와 시각 탐색을 연습합니다. 이 드릴은 임상 도구가 아닌 연습용 게임입니다.",
          aboutText: "이 드릴은 SDMT와 DSST에서 볼 수 있는 기호-숫자 대응 형식을 참고합니다. 키를 확인하고 표적 기호에 맞는 숫자를 선택하면서 시각 탐색, 연상기억, 선택 반응을 반복합니다. 점수는 이 게임의 수행을 나타내며 의료적 판단이나 진단이 아닙니다.",
          aboutCards: [
            { title: "누구에게 유용한가요?", desc: "정보처리속도와 시각 탐색을 집중적으로 연습하고 싶은 학생, 직장인, 게이머에게 유용합니다." },
            { title: "훈련하는 능력", desc: "시각 탐색, 기호-숫자 연상기억, 선택 반응, 반복 과제에서의 지속 집중력을 연습합니다." },
            { title: "매번 바뀌는 키", desc: "세션마다 기호-숫자 키가 바뀌어 단순 암기보다 실제 대응과 탐색을 사용하게 합니다." }
          ],
          rulesItems: [
            { num: "1", text: "기호-숫자 키", highlight: "6개 대응", result: "상단 키에서 숫자 확인" },
            { num: "2", text: "표적 기호", highlight: "+100점", result: "콤보·레벨 배수 적용" },
            { num: "3", text: "틀린 숫자", highlight: "콤보 초기화", result: "설정 시 시간 차감" },
            { num: "4", text: "연속 기록·패널티", highlight: "시간 초과·오입력", result: "활성화 시 −0.8초" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
