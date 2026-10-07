import ConcentrationStaminaClient from '@/app/drills/cognitive/attention/concentration-stamina/ConcentrationStaminaClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "집중력 테스트 | 지속 주의력 측정 | SkillDrills",
  description: "무료 브라우저 집중력 테스트로 지속 주의력, 오반응 억제, 규칙 전환 능력을 확인하세요. 의료 진단이 아닌 자기 점검입니다.",
  keywords: ["집중력 테스트", "집중력 테스트 무료", "집중력 테스트 사이트", "지속 주의력", "주의력 테스트", "공부 집중력 테스트", "집중력 테스트 게임", "집중력 훈련 게임", "억제 제어", "주의력 측정", "성인 집중력 테스트", "CPT 테스트"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "집중력 테스트 | 지속 주의력 측정 | SkillDrills",
    description: "무료 브라우저 집중력 테스트로 지속 주의력, 오반응 억제, 규칙 전환 능력을 확인하세요. 의료 진단이 아닌 자기 점검입니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "집중력 테스트 | 지속 주의력 측정 | SkillDrills",
    description: "무료 브라우저 집중력 테스트로 지속 주의력, 오반응 억제, 규칙 전환 능력을 확인하세요. 의료 진단이 아닌 자기 점검입니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina',
    languages: getAlternateLanguages('/drills/cognitive/attention/concentration-stamina'),
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
      "name": "집중력 테스트",
      "item": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Vigilance_(psychology)", "https://en.wikipedia.org/wiki/Attention"],
  "name": "집중력 지속수행평가(CPT) 트레이너",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 브라우저 집중력 테스트로 지속 주의력, 오반응 억제, 규칙 전환 수행을 기록하는 비임상 자기 점검 도구입니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina",
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
  "name": "집중력 테스트・지속 주의력 검사 – 주의력 스태미나 측정",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina",
  "inLanguage": "ko-KR",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "집중력 테스트 – 지속 주의력 및 충동 억제 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina",
  "description": "무료 브라우저 집중력 테스트로 지속 주의력, 오반응 억제, 규칙 전환 수행을 기록하는 비임상 자기 점검 도구입니다.",
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
      "name": "지속수행검사(CPT, Continuous Performance Test)란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "연속적으로 제시되는 시각 자극 중에서 목표 자극에만 반응하고 방해 자극은 억제하는 능력을 장시간 측정하는 표준 신경심리 검사입니다."
      }
    },
    {
      "@type": "Question",
      "name": "맥워스의 각성 저하 법칙(Mackworth, 1948)이란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "레이더 감시 연구에서 유래한 이론으로, 인간의 주의 집중 효율은 지속적 과제 수행 20~30분 후 급격히 저하된다는 사실을 입증했습니다."
      }
    },
    {
      "@type": "Question",
      "name": "모음과 소수 규칙 교대가 의미하는 바는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10초마다 판별 기준이 뒤바뀌므로 전두엽의 작업기억 갱신과 과제 전환 능력(Monsell, 2003)을 극한으로 시험합니다."
      }
    },
    {
      "@type": "Question",
      "name": "선택적 주의와 지속적 주의의 차이점은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "선택적 주의가 특정 순간 유해 자극을 걸러내는 필터라면(Broadbent, 1958), 지속적 주의는 집중을 끝까지 유지하는 인지적 지구력입니다."
      }
    },
    {
      "@type": "Question",
      "name": "오답 클릭(False Alarm)이 잦은 이유는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "목표물이 아닌 자극을 보고 충동적으로 손가락이 나가는 현상으로, 전두엽의 반응 억제 조절력이 흔들릴 때 나타납니다(Robertson et al., 1997)."
      }
    },
    {
      "@type": "Question",
      "name": "훈련을 통해 집중 지속 시간을 늘릴 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, 점진적으로 난이도를 높이는 지속 주의력 과제를 반복하면 뇌의 각성 유지 회로가 강화됩니다."
      }
    },
    {
      "@type": "Question",
      "name": "유산소 운동이 주의력 유지에 미치는 효과는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "가벼운 운동은 대뇌 혈류량을 늘리고 도파민 분비를 촉진하여 지속 주의력 피로 저항성을 높여줍니다."
      }
    },
    {
      "@type": "Question",
      "name": "모니터 주사율이 검사에 미치는 영향은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "144Hz 이상의 디스플레이는 자극 출현 타이밍의 오차를 5ms 이내로 줄여주어(Woods et al., 2015) 정밀한 측정을 보장합니다."
      }
    },
    {
      "@type": "Question",
      "name": "추천하는 일일 훈련 방식은?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "공부나 업무 시작 전 10분간 진행하면 뇌의 기본모드신경망(DMN)을 억제하고 집중에 최적화된 상태를 만듭니다."
      }
    },
    {
      "@type": "Question",
      "name": "검사 비용은 무료인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "네, SkillDrills의 모든 인지 검사는 회원가입 없이 100% 무료로 브라우저에서 실행됩니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "집중력 테스트・지속 주의력 검사",
  "description": "무료 브라우저 집중력 테스트로 지속 주의력, 오반응 억제, 규칙 전환 수행을 기록하는 비임상 자기 점검 도구입니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "화면 중앙 응시 및 기준 규칙 확인",
      "text": "시선을 중앙 박스에 고정하고 상단에 표시된 현재의 규칙(모음 또는 소수)을 파악합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "순간적 표적 자극 식별",
      "text": "빠르게 깜빡이는 문자·숫자 중 현재 규칙에 일치하는 대상이 나타나는지 집중 감시합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "정밀 격발 및 오반응 억제",
      "text": "일치하는 표적이 떴을 때만 스페이스바나 화면을 탭하고, 비표적은 단호히 억제합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "10초 주기 규칙 반전에 신속 적응",
      "text": "규칙이 반전되는 순간 즉시 머릿속 기준을 교체하여 무결점 연속 스트릭을 유지합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/attention/concentration-stamina#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('mackworth1948', 'parasuraman1979', 'robertson1997', 'monsell2003', 'broadbent1958', 'woods2015'),
  intro: {
    title: "집중력 테스트와 지속 주의력 측정 가이드",
    paragraphs: [
      "이 무료 브라우저 집중력 테스트는 점멸 자극에서 지속 주의력, 오반응 억제, 규칙 전환 수행을 기록하는 비임상 자기 점검 도구입니다. 결과는 당일 컨디션과 익숙함의 영향을 받으며 의료 진단을 대신하지 않습니다.",
      "레이더 감시 연구에서 유래한 이론으로, 인간의 주의 집중 효율은 지속적 과제 수행 20~30분 후 급격히 저하된다는 사실을 입증했습니다.",
      "10초마다 판별 기준이 뒤바뀌므로 전두엽의 작업기억 갱신과 과제 전환 능력(Monsell, 2003)을 극한으로 시험합니다.",
    ],
  },
  benchmarks: {
    title: '인지 수행 능력 표준 평가 벤치마크',
    headers: ['등급 (Tier)', '호칭 (Rank)', '평가 기준', '도달 수준', '정확도', '백분위'],
    rows: [
      { tier: 'Tier 1', rank: '그랜드마스터 / 최상위 엘리트', stat: '상위 1%', level: '마스터리 (최상위)', accuracy: '98% 이상', percentile: '상위 1%' },
      { tier: 'Tier 2', rank: '고급 지속 집중자', stat: '상위 5%', level: '다이아몬드 (우수)', accuracy: '94–97%', percentile: '상위 5%' },
      { tier: 'Tier 3', rank: '숙련 조작자', stat: '상위 15%', level: '플래티넘 (숙련)', accuracy: '88–93%', percentile: '상위 15%' },
      { tier: 'Tier 4', rank: '일반 성인 표준', stat: '상위 50%', level: '골드 (표준)', accuracy: '78–87%', percentile: '상위 50%' },
      { tier: 'Tier 5', rank: '초보 / 입문 기준선', stat: '기준선 (기초)', level: '실버 (기초)', accuracy: '78% 미만', percentile: '기준선 (하위)' },
    ],
  },
  protocols: {
    title: '두뇌 처리 속도와 집중력을 극대화하는 4대 훈련 프로토콜',
    description: '신경인지 심리학 및 지속수행평가(CPT) 연구에 기반한 과학적 두뇌 집중력 강화 훈련 프로토콜입니다.',
    items: [
      { title: "화면 중앙 응시 및 기준 규칙 확인", description: "시선을 중앙 박스에 고정하고 상단에 표시된 현재의 규칙(모음 또는 소수)을 파악합니다." },
      { title: "순간적 표적 자극 식별", description: "빠르게 깜빡이는 문자·숫자 중 현재 규칙에 일치하는 대상이 나타나는지 집중 감시합니다." },
      { title: "정밀 격발 및 오반응 억제", description: "일치하는 표적이 떴을 때만 스페이스바나 화면을 탭하고, 비표적은 단호히 억제합니다." },
      { title: "10초 주기 규칙 반전에 신속 적응", description: "규칙이 반전되는 순간 즉시 머릿속 기준을 교체하여 무결점 연속 스트릭을 유지합니다." },
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
      <ConcentrationStaminaClient copy={{
        title: "집중력 테스트 | 지속 주의력 측정",
        subtitle: "점멸 자극 속 지속 집중, 표적 판별, 오반응 억제를 기록하는 비임상 자기 점검",
        statScore: "점수", statTime: "남은 시간", statLevel: "레벨", statBest: "최고 점수",
        ruleLabel: "규칙", vowels: "모음 (A E I O U)", primes: "소수 (2 3 5 7)",
        startTitle: "집중력 테스트", startSubtitle: "지속 주의력 • CPT 방식 집중 훈련", getReady: "준비하세요",
        flashTitle: "오반응 플래시 전환", soundTitle: "소리 전환", newBest: "최고 기록", points: "점",
        accuracy: "정확도", misses: "오반응", peakLevel: "최고 레벨", playAgain: "다시 하기", shareScore: "점수 공유", exitDrill: "훈련 종료",
        caption: "현재 규칙에 맞는 자극에만 빠르게 반응하고, 규칙이 바뀔 때 방해 자극을 억제하세요.",
        rulesTitle: "훈련 안내 및 점수 체계",
        ruleItems: [{ text: "표적 규칙", highlight: "10초마다 전환", result: "모음 ↔ 소수" }, { text: "표적 적중", highlight: "+100점", result: "탭 또는 스페이스" }, { text: "비표적", highlight: "억제", result: "일치하지 않으면 무시" }, { text: "오반응", highlight: "패널티", result: "정확도에 반영" }],
        aboutTitle: "집중력 테스트 정보",
        aboutLead: "희귀한 신호를 오래 감시할수록 지속 주의력이 떨어질 수 있습니다. 이 훈련은 짧은 세션에서 규칙 전환, 표적 판별, 오반응을 기록하며 의료 진단이 아닌 자기 점검을 제공합니다.",
        aboutText: "지속 주의력은 반복되는 자극 속에서 중요한 신호를 계속 골라내는 능력입니다. 같은 조건으로 반복해 점수와 오반응 변화를 비교하세요.\n\n결과는 수면, 스트레스, 화면 환경, 과제에 대한 익숙함의 영향을 받으므로 진단 결과로 해석하지 마세요.",
        audienceTitle: "누구에게 도움이 되나요?", audienceText: "공부나 시험을 앞둔 학습자, 경기 후반에도 정확도를 유지하려는 게이머, 오래 집중해야 하는 직무의 작업자에게 적합합니다.",
        skillsTitle: "향상되는 능력", skillsText: "지속 주의력, 표적 판별, 피로 상황의 경계, 오반응 억제를 연습합니다.",
        flexibilityTitle: "인지적 유연성", flexibilityText: "10초마다 모음과 소수 규칙이 바뀌어 자극을 새 기준으로 재분류하는 전환 능력을 훈련합니다."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
