import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "처리속도 테스트 | 기호 숫자 매칭 훈련 | SkillDrills",
  description: "기호와 숫자를 짝지어 입력하는 무료 처리속도 테스트입니다. SDMT 방식으로 정보처리속도와 시각 탐색을 연습하며 임상 검사가 아닙니다.",
  keywords: ["처리속도 테스트", "처리속도 훈련", "기호 숫자 매칭", "정보처리속도 테스트", "기호 숫자 대응 게임", "시각 탐색 연습"],
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
  "name": "처리속도 테스트 – 기호 숫자 매칭",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 온라인 처리속도 테스트. 상단 키에서 6개 기호와 숫자 1~6의 짝을 보고, 제시된 기호에 맞는 숫자를 누릅니다. SDMT 형식을 참고한 연습용 게임이며 임상 검사가 아닙니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "처리속도 테스트 – 기호 숫자 매칭 훈련",
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
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "기호 숫자 매칭 – 처리속도 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching",
  "description": "무료 온라인 처리속도 테스트. 상단 키에서 6개 기호와 숫자 1~6의 짝을 보고, 제시된 기호에 맞는 숫자를 누릅니다. SDMT 형식을 참고한 연습용 게임이며 임상 검사가 아닙니다.",
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
  "dateModified": "2026-11-12",
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
        "text": "Aaron Smith(1973)가 만든 신경심리 검사로, 기호-숫자 대응표를 보고 기호에 맞는 숫자를 답합니다. 이 드릴은 그 형식만 참고한 연습용 게임이며 SDMT가 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "DSST 검사와의 차이점은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DSST는 숫자를 보고 기호를 그리고, SDMT는 기호를 보고 숫자를 답합니다. 이 드릴은 SDMT처럼 기호를 보고 숫자 버튼을 누릅니다."
      }
    },
    {
      "@type": "Question",
      "name": "이 처리속도 테스트는 어떻게 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "상단 키에 6개 기호와 숫자 1~6의 짝이 나옵니다. 가운데 기호가 나오면 맞는 숫자 버튼을 누릅니다. 키는 세션마다 바뀌고 한 세션 동안은 고정됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "시간과 감점은 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "45초로 시작해 정답마다 2초가 더해집니다(최대 60초). 틀린 숫자나 시간 초과(Target Timeouts가 켜져 있을 때)는 1초가 줄고 콤보가 초기화됩니다. 시간이 0이 되면 끝납니다."
      }
    },
    {
      "@type": "Question",
      "name": "점수와 난이도는 어떻게 정해지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정답 한 번에 100점에 콤보 배율과 레벨 배율을 곱합니다. 점수가 오르면 레벨이 올라가고, 레벨이 높을수록 기호 하나에 주어지는 응답 시간이 짧아집니다."
      }
    },
    {
      "@type": "Question",
      "name": "결과로 무엇을 알 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수, 정확도, 적중·오답 수, 최고 레벨과 SkillDrills 고정 기준에 따른 F~S+ 등급입니다. 임상 규준이나 IQ와는 비교할 수 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "공식적인 의료 진단 검사인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 무료 연습용 게임이며 질환의 진단이나 선별에 사용할 수 없습니다. 기억력이나 사고력이 걱정되면 전문가와 상담하세요."
      }
    },
    {
      "@type": "Question",
      "name": "점수를 올리는 요령은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "세션 초반에 키를 익혀 두고, 상단 키와 가운데 기호 사이의 시선 이동을 줄이세요. 오답은 1초와 콤보를 잃으므로 정확도를 우선하는 것이 좋습니다."
      }
    },
    {
      "@type": "Question",
      "name": "연습하면 처리속도가 빨라지나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "이 과제의 점수는 연습할수록 대체로 오릅니다. 다만 다른 일상 과제까지 빨라진다는 보장은 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "모바일에서도 할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 화면 하단의 1~6 숫자 버튼을 터치해 진행합니다. 회원가입 없이 무료입니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "처리속도 테스트 진행 방법",
  "description": "무료 온라인 처리속도 테스트. 상단 키에서 6개 기호와 숫자 1~6의 짝을 보고, 제시된 기호에 맞는 숫자를 누릅니다. SDMT 형식을 참고한 연습용 게임이며 임상 검사가 아닙니다.",
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
      "text": "키를 기억하거나 다시 확인해 해당 숫자 버튼(1~6)을 누릅니다. 틀리거나 시간 초과 시 1초 감점과 콤보 초기화입니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "연속적인 연상 리듬 유지",
      "text": "정확도를 유지해 콤보를 이어 갑니다. 레벨이 오를수록 기호당 응답 시간이 짧아집니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "처리속도 테스트 – 기호 숫자 매칭 훈련",
    paragraphs: [
      "처리속도 테스트: 상단 키에 6개 기호와 숫자 1~6의 짝이 표시되고, 가운데 나온 기호에 맞는 숫자 버튼을 누르는 무료 연습입니다. 키는 세션마다 새로 섞입니다. 45초로 시작해 정답마다 2초가 더해지고(최대 60초), 오답·시간 초과는 1초 감점입니다.",
      "기호를 보고 숫자로 답하는 방식은 SDMT(Smith, 1973)와 같은 형식이며, 숫자를 보고 기호를 쓰는 DSST와는 방향이 반대입니다. 이 드릴은 두 검사 모두 아니며 임상 규준과 비교할 수 없습니다.",
      "결과는 점수, 정확도, 적중·오답 수, 최고 레벨로 표시됩니다. 진단, IQ 또는 인지 기능 평가가 아닌 연습용 게임입니다.",
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
    title: '처리속도 테스트 진행 순서',
    description: '상단 키를 보고 제시된 기호에 맞는 숫자를 고르는 순서입니다. 형식은 SDMT(Smith, 1973)를 참고했지만 임상 검사는 아닙니다.',
    items: [
      { title: "상단 기호-숫자 매칭 표 확인", description: "상단 헤더에 나열된 6개 기호와 1~6번 숫자의 연결 관계를 파악합니다." },
      { title: "중앙 제시 기호 순간 식별", description: "중앙 박스에 출현하는 타깃 기호를 눈으로 즉시 포착합니다." },
      { title: "일치하는 숫자 키 즉각 입력", description: "키를 기억하거나 다시 확인해 해당 숫자 버튼(1~6)을 누릅니다. 틀리거나 시간 초과 시 1초 감점과 콤보 초기화입니다." },
      { title: "연속적인 연상 리듬 유지", description: "정확도를 유지해 콤보를 이어 갑니다. 레벨이 오를수록 기호당 응답 시간이 짧아집니다." },
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
            { num: "2", text: "표적 기호", highlight: "+100점", result: "콤보·레벨 배수, +2초(최대 60초)" },
            { num: "3", text: "틀린 숫자", highlight: "콤보 초기화", result: "−1초" },
            { num: "4", text: "시간 초과", highlight: "응답 시간 단축", result: "−1초·콤보 초기화" }
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
