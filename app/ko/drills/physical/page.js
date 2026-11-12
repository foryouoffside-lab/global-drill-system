import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

const title = '피지컬 테스트 | 무료 마우스 게임 11종 | SkillDrills';
const description = '피지컬 테스트를 브라우저에서 무료로 해 보세요. 움직이는 표적 클릭, 장애물 피하기, 커서 안정성, 경로 기억 등 마우스로 하는 11가지 피지컬 게임입니다. 실제 체력 측정이 아닌 조작 연습입니다.';

export const metadata = {
  title,
  description,
  keywords: ['피지컬 테스트', '피지컬 테스트 게임', '마우스 피지컬 테스트', '마우스 게임', '무료 마우스 게임', '피지컬 게임'],
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/physical',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/physical',
    languages: getAlternateLanguages('/drills/physical'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "피지컬 테스트", "item": "https://skilldrills.online/ko/drills/physical" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ko",
  "dateModified": "2026-11-10",
  "name": "피지컬 테스트 · 마우스 게임 11종",
  "url": "https://skilldrills.online/ko/drills/physical",
  "description": "표적 클릭, 장애물 피하기, 커서 안정성, 경로 기억과 타이밍을 마우스로 연습하는 11가지 브라우저 피지컬 테스트.",
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
  "dateModified": "2026-11-10",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "화면 사다리 게임이 실제 발놀림과 민첩성에 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "화면 사다리 드릴은 아래로 내려오는 사다리의 왼쪽·오른쪽 칸에 커서를 순서대로 옮기는 타이밍과 리듬을 연습합니다. 실제 발놀림이나 근력 훈련을 대신하지는 않으며, 스포츠 민첩성에 미치는 효과를 이 페이지에서 주장하지 않습니다. 같은 기기에서 기록 변화를 비교하는 보조 연습으로 쓰세요."
      }
    },
    {
      "@type": "Question",
      "name": "오버에임 교정 훈련(반응 체인)은 어떤 연습인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "움직이는 노드 안에서 커서를 완전히 멈춰야 점수를 얻고, 멈추지 않고 지나치거나 노드를 놓치면 콤보가 끊기고 1초가 줄어드는 제동 연습입니다. 실제 게임의 에임이 좋아진다고 보장하지는 않습니다."
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
      "name": "눈 손 협응력 테스트는 무엇을 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "시작 노드에 커서를 올린 뒤 화면을 가로질러 목표 노드까지 정해진 통로 안에서 커서를 옮기는 과제입니다. 통로를 벗어나면 콤보만 초기화됩니다. 뇌 반구 사이의 정보 교환 같은 효과는 주장하지 않습니다."
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
      "name": "피지컬 테스트는 얼마나 자주 하면 좋나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정해진 정답은 없습니다. 집중이 유지되는 15~25분 안팎의 세션을 주 몇 회 하고, 피로하면 쉬는 방식이 부담이 적습니다. 눈이나 손목에 통증이 있으면 중단하세요."
      }
    },
    {
      "@type": "Question",
      "name": "마우스 게임이 실제 체육관과 필드 훈련을 보완할 수 있나요?",
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
    "name": "피지컬 테스트가 실제 체력 훈련을 대신할 수 있나요?",
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
