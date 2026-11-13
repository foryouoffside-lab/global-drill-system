import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "속독 테스트·속독 훈련 | RSVP 읽기 | SkillDrills",
  description: "단어를 한 지점에 하나씩 보여 주는 무료 속독 테스트·속독 훈련입니다. 250~850 WPM 단계를 올리며 표적 단어를 찾는 정확도를 확인합니다. 독해력 평가는 아닙니다.",
  keywords: ["속독 테스트", "속독 훈련", "속독테스트", "독해속도 테스트", "속독 연습", "속독 테스트 온라인", "분당 단어수", "RSVP 속독"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "속독 테스트·속독 훈련 | RSVP 읽기 | SkillDrills",
    description: "단어를 한 지점에 하나씩 보여 주는 무료 속독 테스트·속독 훈련입니다. 250~850 WPM 단계를 올리며 표적 단어를 찾는 정확도를 확인합니다. 독해력 평가는 아닙니다.",
    type: 'article',
    url: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "속독 테스트·속독 훈련 | RSVP 읽기 | SkillDrills",
    description: "단어를 한 지점에 하나씩 보여 주는 무료 속독 테스트·속독 훈련입니다. 250~850 WPM 단계를 올리며 표적 단어를 찾는 정확도를 확인합니다. 독해력 평가는 아닙니다.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
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
      "name": "RSVP 속독 테스트",
      "item": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "RSVP 속독 테스트",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "description": "무료 온라인 RSVP 속독 테스트. 영어 문장의 단어를 한 지점에 하나씩 250~850 WPM 단계로 보여 주고, 표적 단어가 나올 때 버튼을 누릅니다. 결과는 적중·정확도·도달 속도 단계이며 독해력 평가는 아닙니다.",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader",
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
  "name": "속독 테스트·속독 훈련 – RSVP 읽기",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "KRW"
  },
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "RSVP 속독 테스트 – 표적 단어 찾기 게임",
  "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader",
  "description": "무료 온라인 RSVP 속독 테스트. 영어 문장의 단어를 한 지점에 하나씩 250~850 WPM 단계로 보여 주고, 표적 단어가 나올 때 버튼을 누릅니다. 결과는 적중·정확도·도달 속도 단계이며 독해력 평가는 아닙니다.",
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
      "name": "RSVP(Rapid Serial Visual Presentation) 속독이란?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면의 한 지점에 단어를 하나씩 연속으로 보여 주어 시선 이동 없이 읽게 하는 방식입니다. 이해도를 보장하는 방법은 아니므로 속도만으로 독해 실력을 판단할 수 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "이 속독 테스트는 어떻게 진행되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "상단 배너에 표적 단어가 표시됩니다. 중앙에 영어 단어가 하나씩 지나가고, 표적 단어가 보이는 동안 '표적 발견' 버튼을 누르면 100점을 얻습니다. 한 판은 45초입니다."
      }
    },
    {
      "@type": "Question",
      "name": "5단계 속도는 어떻게 올라가나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1단계 250 WPM에서 시작해 350, 480, 650, 최고 5단계 850 WPM까지 있습니다. 표적 단어를 2번 찾을 때마다(200점마다) 한 단계씩 올라갑니다."
      }
    },
    {
      "@type": "Question",
      "name": "틀리거나 놓치면 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "표적이 아닌 단어에서 누르면 오류로 기록되고 버튼이 1초 동안 잠깁니다. 표적 단어를 누르지 못하고 지나가면 놓침으로 기록됩니다. 둘 다 정확도에 반영되지만 시간이 줄지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "결과로 무엇을 알 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "점수, 적중 수, 오류, 정확도, 도달한 속도 단계를 보여 줍니다. WPM은 단어 표시 속도 단계이며 내 읽기 속도를 측정한 값이 아닙니다."
      }
    },
    {
      "@type": "Question",
      "name": "독해속도 테스트와 같은가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아니요. 독해속도 테스트는 보통 글을 읽고 내용을 이해했는지 함께 확인합니다. 이 드릴은 이해도 문제가 없고, 빠른 단어 흐름에서 표적 단어를 찾는 정확도만 봅니다."
      }
    },
    {
      "@type": "Question",
      "name": "한국어 문장으로도 할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "현재 제시되는 문장은 영어입니다. 한국어는 단어 단위가 달라 WPM 수치를 그대로 비교하기도 어렵습니다."
      }
    },
    {
      "@type": "Question",
      "name": "최적 인식점(ORP)이란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "단어 안에서 시선을 고정하기 좋은 기준 글자 위치로, 보통 중심보다 약간 앞쪽입니다. 이 드릴은 그 글자를 강조해 한 지점에 시선을 두게 합니다."
      }
    },
    {
      "@type": "Question",
      "name": "성인의 평균 독서 속도(WPM)는?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "영어 묵독 연구에서는 분당 약 200~300단어로 보고됩니다(Rayner, 1998). 이 드릴의 단계 속도와 직접 비교할 수는 없습니다."
      }
    },
    {
      "@type": "Question",
      "name": "가입이나 설치가 필요한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "아닙니다. 회원가입이나 설치 없이 웹 브라우저에서 무료로 바로 시작할 수 있습니다."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "속독 테스트 진행 방법",
  "description": "무료 온라인 RSVP 속독 테스트. 영어 문장의 단어를 한 지점에 하나씩 250~850 WPM 단계로 보여 주고, 표적 단어가 나올 때 버튼을 누릅니다. 결과는 적중·정확도·도달 속도 단계이며 독해력 평가는 아닙니다.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "도래할 목표 단어 숙지",
      "text": "상단 배너에 안내되는 '출현 예정 표적 단어'를 기억합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "중앙 ORP 피벗 글자에 시선 고정",
      "text": "눈동자를 굴리지 말고 중앙의 붉은 피벗 문자에 시선을 가만히 고정합니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "빠른 단어 흐름 따라가기",
      "text": "한 지점에 하나씩 나타나는 영어 단어를 따라 읽으며 표적 단어를 기다립니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "표적 단어 등장 즉시 포착 탭",
      "text": "표적 단어가 화면에 있는 동안 '표적 발견' 버튼을 누릅니다. 다른 단어에서 누르면 1초 동안 버튼이 잠깁니다.",
      "url": "https://skilldrills.online/ko/drills/cognitive/processing-speed/rsvp-reader#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "속독 테스트·속독 훈련 – RSVP 읽기",
    paragraphs: [
      "속독 테스트·속독 훈련: 무료 온라인 RSVP 방식으로 단어를 화면의 한 지점(ORP)에 하나씩 보여 줍니다. 상단 배너의 표적 단어가 나오면 버튼을 누르고, 표적을 2번 찾을 때마다 표시 속도가 250 WPM에서 최고 850 WPM까지 한 단계씩 올라갑니다. 제시되는 문장은 영어입니다.",
      "ORP는 단어 안에서 시선을 고정하기 좋은 기준 글자 위치로, 보통 중심보다 약간 앞쪽입니다. 이 드릴은 그 글자를 강조해 시선을 한 곳에 두게 합니다.",
      "일반 읽기에서는 시선이 단어 사이를 뛰어넘는 도약 운동(사카드)과 되돌아 읽기가 반복됩니다(Rayner, 1998). RSVP는 이를 없애지만 속도가 오르면 이해도가 떨어질 수 있습니다(Rayner 외, 2016). 이 드릴은 독해력을 측정하지 않습니다.",
    ],
  },
  benchmarks: {
    title: 'RSVP 읽기 수행 구간(참고용)',
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
    title: '속독 테스트 진행 순서',
    description: '한 지점에 시선을 두고 빠르게 지나가는 단어 중 표적 단어를 찾는 순서입니다.',
    items: [
      { title: "도래할 목표 단어 숙지", description: "상단 배너에 안내되는 '출현 예정 표적 단어'를 기억합니다." },
      { title: "중앙 ORP 피벗 글자에 시선 고정", description: "눈동자를 굴리지 말고 중앙의 붉은 피벗 문자에 시선을 가만히 고정합니다." },
      { title: "빠른 단어 흐름 따라가기", description: "한 지점에 하나씩 나타나는 영어 단어를 따라 읽으며 표적 단어를 기다립니다." },
      { title: "표적 단어 등장 즉시 포착 탭", description: "표적 단어가 화면에 있는 동안 '표적 발견' 버튼을 누릅니다. 다른 단어에서 누르면 1초 동안 버튼이 잠깁니다." },
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
      <RSVPReaderClient
        copy={{
          title: "속독 테스트·속독 훈련",
          subtitle: "고정된 시선 위치에서 단어를 처리하며 읽기 속도와 정확도를 연습합니다",
          startTitle: "속독 테스트",
          startSubtitle: "단어 인식 • ORP 집중",
          stageCaption: "화면 중앙에 단어가 빠르게 나타납니다. 지정된 단어가 보이면 즉시 버튼을 누르세요.",
          rulesTitle: "드릴 안내 및 점수 시스템",
          aboutTitle: "RSVP 속독이란?",
          faqTitle: "자주 묻는 질문",
          labels: { score: "점수", time: "시간", speed: "속도", bestScore: "최고 점수", timeLeft: "남은 시간", targetWord: "표적 단어", detected: "표적 발견", ready: "준비", accuracy: "정확도", hits: "적중", errors: "오류", points: "점수", playAgain: "다시 하기" },
          aboutLead: "RSVP는 단어를 한 지점에 하나씩 보여 주는 읽기 방식입니다. 눈을 문장 전체에서 좌우로 움직이는 부담을 줄이지만, 속도가 높아지면 내용 이해가 떨어질 수 있어 속도와 정확도를 함께 확인해야 합니다.",
          aboutText: "이 드릴은 중앙의 ORP 인식 지점에 시선을 두고 빠르게 지나가는 영어 단어를 처리하는 연습입니다. WPM은 단어 표시 속도를 뜻하며, 기기와 화면 지연도 결과에 영향을 줍니다. 850 WPM은 이 드릴의 최고 단계이지 모든 글을 그 속도로 이해할 수 있다는 뜻은 아닙니다.",
          aboutCards: [
            { title: "누구에게 유용한가요?", desc: "많은 글을 읽는 학생과 직장인, 속독을 연습하려는 사람에게 유용합니다." },
            { title: "훈련하는 능력", desc: "단어 인식 속도, 작업기억, 빠른 시각 정보에 대한 지속 집중력을 연습합니다." },
            { title: "단계별 속도", desc: "250~850 WPM의 다섯 단계이며, 표적 단어를 2번 찾을 때마다 한 단계씩 올라갑니다." }
          ],
          rulesItems: [
            { num: "1", text: "표적 단어", highlight: "상단 배너", result: "중앙 흐름에서 찾기" },
            { num: "2", text: "ORP 고정", highlight: "눈 움직임 최소화", result: "한 지점에서 단어 보기" },
            { num: "3", text: "표적 포착", highlight: "+100점", result: "표적이 보일 때 버튼 누르기" },
            { num: "4", text: "속도 단계", highlight: "250 → 850 WPM", result: "표적 2개마다 1단계 상승" }
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
