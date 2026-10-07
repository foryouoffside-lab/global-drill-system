import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

export const metadata = {
  title: '신체 순발력 & 반사신경 훈련 테스트 (11개 드릴) | SkillDrills',
  description: '온라인 신체 순발력 및 반사신경 훈련. 11가지 과학적 드릴: 반응속도, 신체 균형 감각, 손 눈 협응력, 사다리 풋워크 및 장애물 회피 테스트.',
  keywords: [
    '신체 순발력 훈련', '반사신경 테스트 게임', '반응속도 테스트 온라인',
    '균형 감각 테스트 온라인', '손 눈 협응력 게임', '사다리 스텝 민첩성 훈련',
    '마우스 피하기 게임 순발력', '주변 시야 테스트 게임', '고노고 반응 억제 훈련',
    '동적 장애물 회피 테스트', '자 떨어뜨리기 반응속도', '순발력 기르는 운동',
    '양측 정중선 교차 협응', '운동신경 반응속도 올리는법', '무료 브라우저 순발력 게임'
  ],
  openGraph: {
    title: '신체 순발력 & 반사신경 훈련 테스트 (11개 드릴) | SkillDrills',
    description: '온라인 신체 순발력 및 반사신경 훈련. 11가지 과학적 드릴: 반응속도, 신체 균형 감각, 손 눈 협응력, 사다리 풋워크 및 장애물 회피 테스트.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/physical',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: '반응속도·민첩성 훈련 | 순발력 테스트 | SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '신체 순발력 & 반사신경 훈련 테스트 (11개 드릴) | SkillDrills',
    description: '11가지 과학적 신체 순발력 및 반사신경 테스트. 반응속도, 신체 균형감각, 사다리 스텝, 장애물 회피를 브라우저에서 무료로 훈련하세요.',
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/physical',
    languages: getAlternateLanguages('/ko/drills/physical'),
  },
};

Object.assign(metadata, {
  title: '반응속도·민첩성 훈련 | 순발력 테스트 11종 | SkillDrills',
  description: '순발력 테스트, 반응속도, 민첩성, 균형감각과 손눈협응을 브라우저에서 연습하는 11개 무료 피지컬 드릴.',
  keywords: ['순발력 테스트', '순발력 테스트 게임', '순발력 훈련', '반응속도 테스트', '민첩성 훈련', '반사신경 테스트', '손눈협응', '균형감각 훈련', '발놀림 훈련', '방향전환 훈련', '마우스 회피 게임', '무료 반응 훈련'],
  openGraph: {
    ...metadata.openGraph,
    title: '반응속도·민첩성 훈련 | 순발력 테스트 11종 | SkillDrills',
    description: '반응속도, 순발력, 균형감각과 손눈협응을 연습하는 11개 무료 브라우저 드릴.',
  },
  twitter: {
    ...metadata.twitter,
    title: '반응속도·민첩성 훈련 | 순발력 테스트 | SkillDrills',
    description: '반응속도와 민첩성을 연습하는 11개 무료 피지컬 드릴.',
  },
  alternates: { ...metadata.alternates, languages: getAlternateLanguages('/drills/physical') },
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "신체 순발력 & 반사 훈련", "item": "https://skilldrills.online/ko/drills/physical" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ko",
  "dateModified": "2026-09-20",
  "name": "신체 순발력 & 반사신경 훈련 도감 (11개 드릴)",
  "url": "https://skilldrills.online/ko/drills/physical",
  "description": "11가지 인터랙티브 신체 반사신경, 균형 감각, 손 눈 협응, 풋워크 민첩성 및 장애물 회피 테스트.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ko', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ko${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ko",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "컴퓨터 화면 사다리 훈련이 실제 발놀림과 민첩성에 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면 사다리 드릴은 신호를 보고 방향을 정해 입력하는 시각 타이밍과 리듬을 연습합니다. 실제 발놀림이나 근력 훈련을 대신하지는 않으며, 스포츠 민첩성에 미치는 효과를 이 페이지에서 주장하지 않습니다. 같은 기기에서 기록 변화를 비교하는 보조 연습으로 쓰세요."
      }
    },
    {
      "@type": "Question",
      "name": "반응 체인과 충동 조절 훈련은 어떤 연습인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "신호에 반응하다가 페이크나 유인 신호가 나오면 입력을 멈추는 연습입니다. 성급한 입력을 줄이는 감각을 기르는 데 쓸 수 있지만, 실제 경기에서의 오버커밋을 막는다고 보장하지는 않습니다."
      }
    },
    {
      "@type": "Question",
      "name": "외력 저항 안정성 훈련은 무엇을 연습하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면의 외력에 맞서 표적을 중심에 유지하도록 마우스를 미세하게 조정하는 과제입니다. 신체 평형 감각을 직접 훈련하는 것이 아니라 시각과 손의 조절을 연습하는 도구입니다."
      }
    },
    {
      "@type": "Question",
      "name": "양측 정중선 교차 훈련은 왜 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "좌우 손이나 방향을 번갈아 쓰는 과제로 좌우 전환과 순서 기억을 연습합니다. 뇌 반구 사이의 정보 교환 같은 효과는 이 페이지에서 주장하지 않으며, 협응 연습을 위한 보조 과제로 보세요."
      }
    },
    {
      "@type": "Question",
      "name": "동적 그리드 회피 드릴은 무엇을 연습하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "위험 구역을 피해 안전한 칸으로 이동하는 선택 반응 과제입니다. 반응 시간이 얼마나 줄어드는지는 사람과 기기에 따라 다르며 특정 수치를 약속하지 않습니다. 같은 기기에서 레벨과 정확도 기록을 비교하세요."
      }
    },
    {
      "@type": "Question",
      "name": "주변 시야 위험 감지 드릴은 무엇을 연습하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "중앙을 보면서 가장자리에 나타나는 위협을 찾아내는 과제로 주변시 주의를 연습합니다. 시야 확장이나 부상 예방 효과는 입증된 것이 아니므로 보조 연습으로만 활용하세요."
      }
    },
    {
      "@type": "Question",
      "name": "신체 순발력 훈련의 권장 루틴과 주기는 어떻게 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정해진 정답은 없습니다. 집중이 유지되는 15~25분 안팎의 세션을 주 몇 회 하고, 피로하면 쉬는 방식이 부담이 적습니다. 눈이나 손목에 통증이 있으면 중단하세요."
      }
    },
    {
      "@type": "Question",
      "name": "온라인 반사신경 게임이 실제 체육관과 필드 훈련을 보완할 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "근력, 플라이오메트릭, 종목 훈련을 대체하지는 않습니다. 화면 신호를 보고 판단해 입력하는 시각 타이밍과 판단 속도를 연습하는 보조 도구로 활용할 수 있습니다."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  {
    "@type": "Question",
    "name": "피지컬 트레이닝 목록에는 몇 가지 드릴이 있나요?",
    "acceptedAnswer": { "@type": "Answer", "text": "목록에는 반응·회피, 민첩성, 협응·경로, 균형·안정성의 네 영역으로 나뉜 11개 브라우저 드릴이 있습니다. 카드를 선택하면 각 드릴의 설명과 훈련 방법을 확인할 수 있습니다." }
  },
  {
    "@type": "Question",
    "name": "브라우저 반응 훈련이 실제 체력 훈련을 대신할 수 있나요?",
    "acceptedAnswer": { "@type": "Answer", "text": "아닙니다. 이 드릴은 시각 타이밍, 판단 속도, 조작 정확도와 움직임 순서를 연습합니다. 근력, 순발력, 가동성 또는 종목별 코칭을 대신하지 않고 보완하는 도구입니다." }
  }
);

export default function PhysicalDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PhysicalDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
