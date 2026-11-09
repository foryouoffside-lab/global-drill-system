import AimTrainerClient from '@/app/drills/motor/hand-eye-coordination/aim-trainer/AimTrainerClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native research: 에임 연습, 에임 연습 사이트, 에임 트레이너, 마우스 정확도 테스트,
// 플릭샷 연습, 초탄 조준 연습, 타겟 전환, 마우스 감도 연습, 발로란트 에임 연습.
// ============================================================

export const metadata = {
  title: '에임 연습 사이트 | 무료 에임 테스트 | SkillDrills',
  description: '설치 없이 브라우저에서 하는 무료 에임 연습 사이트이자 에임 테스트입니다. 움직이는 타겟 2개를 마우스로 클릭해 명중률·콤보·레벨을 기록하고, 명중할 때마다 +2초로 45초 제한 시간을 늘려 보세요.',
  keywords: ['에임 연습 사이트', '에임 테스트', '에임 테스트 사이트', '마우스 에임 테스트', '에임 정확도 테스트', '에임연습 사이트', '무료 에임 연습', '마우스 정확도 연습'],
  alternates: {
    canonical: 'https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/aim-trainer'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: '에임 연습 사이트 | 무료 에임 테스트 | SkillDrills',
    description: '무료 에임 연습 사이트. 움직이는 타겟을 마우스로 클릭해 명중률과 콤보를 기록하는 브라우저 에임 테스트입니다.',
    url: 'https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer',
    siteName: 'SkillDrills',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: '에임 연습 사이트 | 무료 에임 테스트 | SkillDrills',
    description: '설치 없는 무료 에임 연습 사이트. 움직이는 타겟을 클릭해 명중률·콤보·레벨을 기록하는 에임 테스트.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills 홈', item: 'https://skilldrills.online/ko' },
    { '@type': 'ListItem', position: 2, name: '훈련 허브', item: 'https://skilldrills.online/ko/drills' },
    { '@type': 'ListItem', position: 3, name: '운동 제어・마우스 조작', item: 'https://skilldrills.online/ko/drills/motor' },
    { '@type': 'ListItem', position: 4, name: '시각-운동 협응', item: 'https://skilldrills.online/ko/drills/motor' },
    { '@type': 'ListItem', position: 5, name: '에임 연습', item: 'https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'ko-KR',
  name: '에임 연습 사이트 – 무료 브라우저 에임 테스트',
  alternateName: ['에임연습 사이트', '에임 연습 사이트', '에임 테스트', 'Aim Trainer'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  description:
    '웹브라우저에서 설치 없이 실행되는 무료 에임 연습 사이트. 움직이는 타겟 2개를 마우스로 클릭해 명중률, 콤보, 레벨을 기록합니다.',
  browserRequirements: '자바스크립트 및 Pointer Lock을 지원하는 최신 브라우저, 마우스',
  softwareVersion: '2.0',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'ko-KR',
  name: '에임 연습 사이트 — 무료 에임 테스트 | SkillDrills',
  url: 'https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer',
  description:
    '무료 온라인 에임 연습 사이트. 레벨이 오를수록 작아지고 빨라지는 이동 타겟을 클릭해 마우스 조준 정확도를 연습합니다.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  browserRequirements: '자바스크립트 및 마우스 포인터 락 API 지원 브라우저',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Educational Game',
  teaches: '에임 정확도, 마우스 플릭, 이동 타겟 포착, 시각-운동 협응',
};


const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "ko-KR",
  "name": "에임 연습 사이트 (Aim Trainer)",
  "url": "https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "브라우저에서 움직이는 타겟을 마우스로 클릭해 조준 정확도와 클릭 타이밍을 연습하는 무료 2D 에임 테스트입니다.",
  "dateModified": "2026-11-09",
  "gamePlatform": "Web Browser",
  "genre": ["Aim Trainer", "FPS Training", "Hand-Eye Coordination"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'ko-KR',
  name: '에임 연습 사이트 이용 방법',
  description: 'SkillDrills 에임 연습 드릴을 시작하고 점수를 쌓는 4단계.',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer#step-1",
      name: '훈련 시작 및 커서 잠금',
      text: '「훈련 시작」을 클릭하면 마우스 포인터가 잠기고(Pointer Lock) 3초 카운트다운 후 45초 제한 시간이 시작됩니다. Esc로 언제든 종료할 수 있습니다.',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer#step-2",
      name: '움직이는 타겟 포착',
      text: '화면에는 항상 타겟 2개가 무작위 방향으로 움직이며 벽에 튕깁니다. 각 타겟은 일정 시간이 지나면 사라집니다.',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer#step-3",
      name: '마우스로 클릭',
      text: '크로스헤어를 타겟 위에 올리고 클릭합니다. 명중하면 점수와 +2초(최대 60초)를 얻고, 빗맞히거나 타겟이 사라지면 콤보가 초기화되고 1초가 줄어듭니다.',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/ko/drills/motor/hand-eye-coordination/aim-trainer#step-4",
      name: '콤보 유지 및 레벨 상승',
      text: '연속 명중으로 콤보 배율(최대 3.0배)을 올리세요. 1,750점마다 레벨이 올라 타겟이 작아지고 빨라지며, 시간이 0이 되면 종료됩니다.',
    },
  ],
};

const faqs = [
  {
    q: '에임 연습 사이트(Aim Trainer)는 어떤 방식인가요?',
    a: '움직이는 타겟 2개를 마우스로 클릭하는 무료 브라우저 에임 테스트입니다. 45초에서 시작해 명중할 때마다 +2초(최대 60초), 빗맞히거나 타겟이 사라질 때마다 -1초가 적용되며 시간이 0이 되면 끝납니다. 설치나 회원가입은 필요 없습니다.',
  },
  {
    q: '점수는 어떻게 계산되나요?',
    a: '명중 1회당 100점에 콤보 배율(연속 3회 1.1배부터 연속 50회 3.0배까지)과 레벨 배율을 곱합니다. 빗맞히거나 타겟을 놓치면 콤보가 0으로 초기화됩니다.',
  },
  {
    q: '난이도는 어떻게 올라가나요?',
    a: '1,750점마다 레벨이 1 오르고 상한은 없습니다. 레벨 15까지 타겟 반경은 26px에서 12px로 줄고(콤보가 높으면 더 작아져 최소 8px), 이동 속도는 80px/s에서 370px/s로, 타겟 유지 시간은 2.8초에서 0.4초로 짧아집니다.',
  },
  {
    q: '빗맞히거나 타겟을 놓치면 어떤 불이익이 있나요?',
    a: '콤보 배율이 1.0배로 초기화되고 남은 시간에서 1초가 차감됩니다. 무작정 클릭하기보다 정확하게 맞히는 쪽이 점수와 시간 모두에 유리합니다.',
  },
  {
    q: '피츠의 법칙(Fitts’s Law)이 에임 연습과 어떤 관련이 있나요?',
    a: '피츠의 법칙은 목표까지의 거리와 목표 크기의 비율로 이동 시간을 예측하는 모델입니다. 이 드릴에서는 레벨이 오를수록 타겟이 작아져 난이도 지수(ID)가 커지므로 더 정밀한 마우스 제어가 필요합니다.',
  },
  {
    q: '발로란트나 배틀그라운드 실력 향상에 도움이 되나요?',
    a: '보조 연습으로 쓸 수 있습니다. 2D 이동 타겟을 빠르게 클릭하는 연습이므로 게임 속 3D 조준과는 다르며, 실전 실력 향상이 보장되지는 않습니다.',
  },
  {
    q: '에임 테스트 점수 기준표는 어떻게 되나요?',
    a: 'SkillDrills 연습 구간 기준으로 입문 8,000점 미만, 초급 8,000~17,999점, 중급 18,000~31,999점, 상급 32,000~47,999점, 최상위 48,000점 이상입니다. 게임 랭크나 사용자 통계가 아닌 연습용 구간입니다.',
  },
  {
    q: '마우스 감도를 게임과 맞출 수 있나요?',
    a: '드릴 설정의 감도 배율로 크로스헤어 이동 속도를 조절할 수 있습니다. 다만 게임 내 감도(cm/360)를 자동으로 변환하지는 않으므로 직접 비슷한 느낌으로 맞춰야 합니다.',
  },
  {
    q: '모바일이나 터치스크린에서도 할 수 있나요?',
    a: '아니요. 마우스 포인터 잠금(Pointer Lock)을 사용하므로 마우스가 연결된 PC 브라우저에서만 플레이할 수 있습니다.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ko-KR',
  dateModified: '2026-11-09',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AimTrainerKoreanPage() {
  const sources = pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <AimTrainerClient
        copy={{
          title: '에임 연습 사이트',
          subtitle: '움직이는 타겟・마우스 에임 테스트・명중률 기록',
          caption: '움직이는 타겟 2개가 사라지기 전에 정확하게 클릭하세요. 명중 +2초, 빗맞힘·놓침 -1초.',
          startButtonText: '훈련 시작',
          playAgainText: '다시 도전',
          shareText: '결과 공유',
          exitText: '나가기',
          rulesTitle: '드릴 조작법 & 점수 획득 규칙',
          aboutTitle: '에임 연습(Aim Trainer Elite)에 대하여',
          rulesItems: [
            {
              num: "1",
              text: "타겟 명중",
              highlight: "+100점 / +2초 (최대 60초)",
              result: "콤보 배율 적용"
            },
            {
              num: "2",
              text: "연속 콤보",
              highlight: "최대 3.0배 배율",
              result: "연속 클린 히트로 점수 배율 극대화"
            },
            {
              num: "3",
              text: "레벨 상승",
              highlight: "1750점마다 레벨업",
              result: "타겟 축소 및 이동 속도 가속화"
            },
            {
              num: "4",
              text: "미스 및 타임아웃",
              highlight: "콤보 리셋",
              result: "-1초 차감"
            }
          ]
        }}
      />

      <DrillGuide
        eyebrow="운동 제어 정신물리학 & 인간-컴퓨터 상호작용 (HCI)"
        title="에임 연습의 과학: 피츠의 법칙과 2요소 운동 모델을 통한 마우스 정밀도 이해하기"
        sources={sources}
      >
        <p>
          SkillDrills <strong>에임 연습 사이트</strong>는 설치 없이 브라우저에서 바로 하는 무료 에임 테스트입니다. 마우스를 사용한 타겟 포착(Target Acquisition)은 인간-컴퓨터 상호작용(HCI)과 스포츠 정신물리학 분야에서 가장 정밀한 미세 운동 협응 과제 중 하나입니다. 택티컬 FPS 교전 상황에서 모퉁이를 클리어하거나 로봇 수술을 수행할 때, 인간 신경근 시스템은 2차원 시각 좌표를 손, 손목, 전완근의 마이크로 단위 급속 근수축으로 즉각 변환해야 합니다 (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>피츠의 법칙(Fitts&apos;s Law)과 난이도 지수(ID)</h3>
        <p>
          1954년 폴 M. 피츠는 목표 영역으로 빠르게 이동하는 데 소요되는 운동 시간(\(MT\))이 목표물까지의 거리(\(D\))와 목표물의 폭이나 직경(\(W\))의 비율에 의해 대수적으로 결정됨을 증명했습니다:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 my-3 text-center font-mono text-sm text-cyan-300">
          MT = a + b · log₂(2D / W) = a + b · ID
        </div>
        <p>
          이 대수적 요소를 <strong>난이도 지수(ID: Index of Difficulty)</strong>라고 부르며 비트 단위로 측정됩니다. SkillDrills의 <em>에임 연습</em>에서는 레벨이 오를수록 타겟 반경이 26픽셀에서 12픽셀(레벨 15 기준, 높은 콤보에서는 최소 8픽셀)로 줄어 목표 폭(\(W\))이 작아지고, 그만큼 난이도 지수가 커집니다 (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>목표 지향적 조준의 2요소 모델 (Woodworth 1899; Elliott et al. 2010)</h3>
        <p>
          고속 마우스 에이밍은 단일 연속 동작이 아닙니다. 우드워스(1899)와 현대 신경근 통합 이론을 정립한 엘리엇 등(2010)의 연구에 따르면, 조준 동작은 생리학적으로 서로 다른 두 단계로 구성됩니다:
        </p>
        <ol className="list-decimal pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>초기 탄도 임펄스 (오픈루프 단계):</strong> 중추신경계가 사전에 계획된 신경근 폭발을 방출하여 이동 거리의 80~90%를 단번에 도약합니다. 이 탄도 단계는 약 120~180밀리초 내에 이루어지므로 시각적 피드백으로 경로를 수정할 수 없습니다.
          </li>
          <li>
            <strong>종말 감속 제어 (클로즈드루프 단계):</strong> 크로스헤어가 타겟 경계에 접근함에 따라 시각 시스템이 망막 오차를 감지하고 소뇌와 운동피질을 거쳐 미세 수정을 거친 후 클릭을 발동합니다.
          </li>
        </ol>
        <p>
          초보자들은 흔히 <em>오버 플릭</em>(과도한 힘으로 지나친 후 되돌림)이나 <em>언더 플릭</em>(너무 일찍 멈추어 느리게 접근함)을 겪습니다. 숙련된 슈터는 탄도 임펄스를 타겟의 테두리에 정확히 도달하도록 최적화하여 종말 수정 오차를 최소화합니다 (Elliott et al., 2010; Woods et al., 2015).
        </p>

        <h3>입력 폴링율, 디스플레이 주사율 및 지연 시간</h3>
        <p>
          정밀한 클릭 타이밍은 시스템 레이턴시를 최소화할 때 완성됩니다. 우즈 등(2015)이 밝혀냈듯 인간의 신경 반응 지연은 망막 전달(~30–50ms), 시각피질 인지(~60–80ms), 척수운동 신경전달(~40–60ms)을 거칩니다. 60Hz 모니터에서는 16.7ms마다 프레임이 갱신되고, 144Hz는 6.9ms, 240Hz는 4.1ms마다 갱신됩니다. 같은 기기와 같은 설정에서 기록을 비교해야 점수 변화를 공정하게 볼 수 있습니다.
        </p>

        <h3>에임 테스트 점수 구간 (SkillDrills 연습 기준)</h3>
        <p>
          아래 표는 45초에서 시작하는 세션(명중 시 +2초, 최대 60초)의 점수, 명중률 및 최대 콤보를 SkillDrills가 참고용으로 나눈 연습 구간입니다. 사용자 통계나 게임 랭크와 무관하며, 같은 기기에서 본인 기록을 비교할 때만 의미가 있습니다.
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left border-collapse border border-white/10 text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/5 text-slate-200">
                <th className="p-2.5 border border-white/10 font-bold">티어</th>
                <th className="p-2.5 border border-white/10 font-bold">세션 점수</th>
                <th className="p-2.5 border border-white/10 font-bold">최고 레벨</th>
                <th className="p-2.5 border border-white/10 font-bold">명중률</th>
                <th className="p-2.5 border border-white/10 font-bold">실력 분류</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-emerald-400">Tier 1 (최상위 단계)</td>
                <td className="p-2.5 border border-white/10">&gt; 48,000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 12+</td>
                <td className="p-2.5 border border-white/10">&gt; 95% (콤보 25+)</td>
                <td className="p-2.5 border border-white/10">최상위 참고 구간</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-cyan-400">Tier 2 (고수)</td>
                <td className="p-2.5 border border-white/10">32,000 – 47,999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 9–11</td>
                <td className="p-2.5 border border-white/10">88% – 94% (콤보 18–24)</td>
                <td className="p-2.5 border border-white/10">상급 참고 구간</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-blue-400">Tier 3 (중급)</td>
                <td className="p-2.5 border border-white/10">18,000 – 31,999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 6–8</td>
                <td className="p-2.5 border border-white/10">78% – 87% (콤보 12–17)</td>
                <td className="p-2.5 border border-white/10">안정적인 중간 구간</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-amber-400">Tier 4 (초급)</td>
                <td className="p-2.5 border border-white/10">8,000 – 17,999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 3–5</td>
                <td className="p-2.5 border border-white/10">65% – 77% (콤보 6–11)</td>
                <td className="p-2.5 border border-white/10">연습 단계 / 미스 다수 발생</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-rose-400">Tier 5 (입문)</td>
                <td className="p-2.5 border border-white/10">&lt; 8,000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 1–2</td>
                <td className="p-2.5 border border-white/10">&lt; 65% (콤보 &lt; 6)</td>
                <td className="p-2.5 border border-white/10">에임 흔들림 심함 / 조급한 클릭 성향</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>에임 연습을 효율적으로 하는 4가지 실천법</h3>
        <p>
          표적 획득 잠복기를 체계적으로 단축하고 미세 플릭 정확도를 최고조로 끌어올리기 위해, 훈련 중 다음 네 가지 근거 중심의 신경운동 프로토콜을 적용하십시오:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>초기 탄도 임펄스 과감화 (Woodworth, 1899):</strong> 타겟까지의 거리 대부분을 주저함 없이 단숨에 도약하세요. 플릭 도중 멈칫거리지 않고 한 번의 호흡으로 목표점 부근까지 손을 밀어야 합니다.
          </li>
          <li>
            <strong>종말 감속과 미세 보정의 조화 (Fitts, 1954):</strong> 타겟 경계 부근에서 부드럽게 감속하여 손목과 손가락 끝으로 목표 중심을 안정적으로 맞추세요.
          </li>
          <li>
            <strong>감도 일치화 및 근육 기억 보존 (MacKenzie, 1992):</strong> 플레이하는 주 게임과 일치하는 감도를 설정하여 신경근 간섭을 방지하세요.
          </li>
          <li>
            <strong>클릭 시 그립 완화와 손가락 분리 (Woods et al., 2015):</strong> 마우스를 클릭할 때 손목 전체에 힘이 들어가 에임이 아래나 옆으로 틀어지지 않도록, 편안한 그립에서 검지만 가볍게 클릭하는 습관을 들이세요.
          </li>
        </ul>

        <h3>자주 묻는 질문 (FAQ)</h3>
        <div className="space-y-4 my-4">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-3">
              <h4 className="font-bold text-white text-sm mb-1">{f.q}</h4>
              <p className="text-xs sm:text-sm text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
