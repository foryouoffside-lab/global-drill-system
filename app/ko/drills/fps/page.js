import FPSHubClient from '@/app/drills/fps/FPSHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');

export const metadata = {
  title: 'FPS 에임 연습 & 무료 에임 트레이너 | SkillDrills',
  description: '발로란트·CS2·에이펙스용 무료 FPS 에임 연습 15종. 플릭, 트래킹, 반동 제어와 반응속도를 브라우저에서 훈련하세요.',
  keywords: [
    '무료 FPS 에임 연습', '발로란트 에임 연습', 'CS2 에임 연습',
    '에임 트레이너', '에임 연습 사이트', '플릭샷 연습',
    '에임 트래킹', 'FPS 반동 제어', 'FPS 클릭 반응 테스트',
    '조준선 배치', '타깃 스위칭', '무설치 에임 트레이너',
    '에임 감도 설정', '마우스 에임 연습', 'Apex 에임 연습'
  ],
  openGraph: {
    title: 'FPS 에임 연습 & 무료 에임 트레이너 | SkillDrills',
    description: '발로란트·CS2·에이펙스용 무료 FPS 에임 연습 15종. 플릭, 트래킹, 반동 제어와 반응속도를 브라우저에서 훈련하세요.',
    type: 'website',
    url: 'https://skilldrills.online/ko/drills/fps',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: '무료 FPS 에임 연습 허브' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FPS 에임 연습 & 무료 에임 트레이너 | SkillDrills',
    description: '발로란트·CS2·에이펙스용 무료 FPS 에임 연습 15종. 브라우저에서 바로 훈련하세요.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/fps',
    languages: getAlternateLanguages('/ko/drills/fps'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ko" },
    { "@type": "ListItem", "position": 2, "name": "전체 훈련 도감", "item": "https://skilldrills.online/ko/drills" },
    { "@type": "ListItem", "position": 3, "name": "FPS 에임 연습", "item": "https://skilldrills.online/ko/drills/fps" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09",
  "name": "FPS 에임 연습 & 무료 에임 트레이너 (15종)",
  "url": "https://skilldrills.online/ko/drills/fps",
  "description": `발로란트·CS2·에이펙스용 무료 FPS 에임 연습 15종. 플릭, 트래킹, 반동 제어, 타깃 스위칭과 반응 훈련을 브라우저에서 시작하세요.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": fpsDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ko', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ko${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ko-KR",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "발로란트 및 카스2(CS2) 같은 택티컬 FPS에 브라우저 에임 연습이 어떻게 도움이 되나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "발로란트와 카스2에서는 첫 몇 발로 교전이 끝나는 경우가 많아 초탄 정확도와 미세 조정이 중요합니다. 인게임 데스매치는 리스폰 대기와 이동 시간이 길지만, 브라우저 에임 연습은 짧은 시간에 훨씬 많은 플릭과 조준점 멈춤을 반복할 수 있습니다. 반복으로 손동작이 일정해지면 실전에서는 크로스헤어 플레이스먼트와 상황 판단에 더 집중할 수 있습니다. 효과는 사람마다 다르므로 인게임 기록과 함께 비교해 보세요."
      }
    },
    {
      "@type": "Question",
      "name": "플릭(끌어치기), 트래킹(추적), 타깃 스위칭(전환)의 차이점과 중요성은 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FPS 에임의 3대 핵심 기둥은 다음과 같습니다: 1) 플릭(Flick/끌어치기): 정지된 상태에서 표적을 향해 순간적으로 탄도성 궤적을 그리며 이동 후 격발하는 기술로, 밴달이나 AK-47의 단발 헤드샷에 필수적입니다. 2) 트래킹(Tracking/동체 추적): 불규칙하게 움직이는 적의 이동 벡터에 조준선을 계속 밀착시키는 기술로, 에이펙스 레전드와 오버워치 2의 자동 화기 교전에 도움이 될 수 있습니다. 3) 타깃 스위칭(Target Switching): 다수의 표적 사이를 최고 속도로 이동하여 순차 사격하는 능력으로, 다인 교전 클러치 상황의 핵심 역량입니다."
      }
    },
    {
      "@type": "Question",
      "name": "에임 연습 시 손목 에임과 팔 에임 중 어떤 방식을 사용해야 하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "많은 플레이어가 팔·손목·손가락을 함께 쓰는 하이브리드 방식을 사용합니다. 팔과 어깨는 180도 회전처럼 큰 이동을, 손목은 중간 거리 조준을, 손가락은 헤드라인 근처의 작은 보정을 맡습니다. 손목만 쓰면 이동 범위가 좁고, 팔만 쓰면 아주 작은 보정이 어려울 수 있습니다. 편한 방식을 고르고, 통증이 느껴지면 연습을 멈추고 쉬세요."
      }
    },
    {
      "@type": "Question",
      "name": "자신에게 맞는 최적의 eDPI 및 cm/360 감도는 어떻게 찾나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "마우스 감도는 마우스패드 위에서 360도 회전하는 데 필요한 물리적 이동 거리인 cm/360으로 표준화하여 측정합니다. 발로란트, 카스2 같은 저감도 택티컬 FPS는 35~55 cm/360 (eDPI 200~320 수준)이 미세 조준 안정성에 가장 유리하며, 에이펙스 레전드나 오버워치 같은 트래킹 중심 하이퍼 FPS는 24~38 cm/360의 중감도가 광범위한 타깃 추적에 적합합니다. 좌우로 스트레이프 무빙을 하면서 정지된 고정 표적에 크로스헤어를 흔들림 없이 유지할 수 있는 감도가 본인에게 가장 이상적인 감도입니다."
      }
    },
    {
      "@type": "Question",
      "name": "에임이 떨리거나 목표물을 지나치는 오버플릭 현상은 어떻게 교정하나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "에임 떨림과 오버플릭(Overshooting)의 주된 원인은 전완근의 과도한 긴장, 마우스 그립을 너무 강하게 쥐는 버릇, 또는 본인의 신경근 제동력보다 높은 감도를 사용하는 데 있습니다. 이를 교정하려면: 1) 마우스패드 표면과의 적절한 마찰력을 활용하여 동작 종단에서 손바닥 하단과 손가락으로 마우스를 지그시 누르는 제동 기술(Braking Mechanism)을 연습하고, 2) 스무스 퍼슈트(Smooth Pursuit) 트래킹 훈련을 통해 근육 긴장도를 낮추며, 3) 감도를 10~15% 낮추어 오차 허용 범위를 확보하는 것이 효과적입니다."
      }
    },
    {
      "@type": "Question",
      "name": "브라우저 기반 에임 트레이너가 스팀 다운로드 프로그램만큼 반응이 빠른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "연습 용도로는 대체로 그렇습니다. SkillDrills는 HTML5 캔버스와 브라우저의 Pointer Lock API를 사용해 커서를 숨기고 상대적인 마우스 이동량(movementX/movementY)을 읽기 때문에, 긴 플릭도 화면 가장자리에서 멈추지 않습니다. 타깃 움직임은 프레임 수가 아니라 경과 시간으로 계산되어 144Hz·240Hz·360Hz 모니터에서도 일관되게 동작합니다. 다만 브라우저 입력은 여전히 운영체제의 포인터 설정을 거치므로, 점수를 비교할 때는 DPI, 감도, 마우스 가속 설정을 세션마다 같게 유지하세요."
      }
    },
    {
      "@type": "Question",
      "name": "크로스헤어 플레이스먼트(헤드라인)와 순수 플릭 에임 중 실전에서 무엇이 더 중요한가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "적이 나올 위치와 머리 높이에 미리 조준점을 두는 크로스헤어 플레이스먼트가 잘 되어 있으면 큰 플릭이 거의 필요 없기 때문에, 실전에서는 더 자주 도움이 됩니다. 다만 예상 밖의 오프 앵글, 와이드 스윙, 여러 명이 동시에 나오는 상황에서는 선조준만으로 대응할 수 없고 빠른 플릭과 미세 조정이 필요합니다. 대기 에임 연습으로 배치를, 플릭샷 연습으로 플릭을 따로 연습해 보세요."
      }
    },
    {
      "@type": "Question",
      "name": "하루에 에임 연습은 몇 분 정도 하는 것이 가장 효과적인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "몇 시간씩 몰아서 하는 것보다 짧고 집중된 세션이 꾸준히 이어가기 쉽습니다. 시작점으로는 하루 15~25분, 주 여러 번이 무난하며, 정확도가 떨어지거나 손이 피곤해지면 그날은 멈추는 것이 좋습니다. 모두에게 맞는 정답 시간은 없으니 본인 기록을 보며 조절하세요."
      }
    }
  ]
};

export default function LocalizedFPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

