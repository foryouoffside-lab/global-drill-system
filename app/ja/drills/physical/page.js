import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

const url = 'https://skilldrills.online/ja/drills/physical';
const title = "瞬発力テスト｜マウスで遊べる無料フィジカルドリル11種 | SkillDrills";
const description = "マウスで遊べる無料の瞬発力テスト11種。動く的のクリック、障害物よけ、カーソルの安定、経路の記憶とタイミングをブラウザで練習できます。学校の体力テストのような身体測定ではなく、記録はブラウザ内に保存されます。";

export const metadata = {
  title,
  description,
  keywords: ["瞬発力テスト", "瞬発力テスト 無料", "瞬発力テスト ゲーム", "敏捷性テスト", "フィジカルドリル", "マウス ゲーム 無料"],
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: 'SkillDrills',
    locale: 'ja_JP',
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
    canonical: url,
    languages: getAlternateLanguages('/drills/physical'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "瞬発力テスト", "item": url }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ja",
  "dateModified": "2026-11-10",
  "name": "瞬発力テスト・フィジカルドリル11種",
  "url": url,
  "description": "的のクリック、障害物よけ、カーソルの安定、経路の記憶とタイミングをマウスで練習する11種類のブラウザドリル。",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ja', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ja${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqs = [
  { q: "画面のラダーゲームは実際のフットワークに役立ちますか？", a: "このドリルは、下に流れてくるラダーの左右のマスへ順番にカーソルを動かすタイミングとリズムの練習です。実際のフットワークや筋力トレーニングの代わりにはならず、スポーツの敏捷性への効果もこのページでは主張しません。同じ機器で記録の変化を比べる補助練習として使ってください。" },
  { q: "反応チェーン（オーバーエイム修正）はどんな練習ですか？", a: "動くノードの中でカーソルを完全に止めると得点になり、止まらずに通り過ぎたりノードを見逃したりするとコンボが切れ、残り時間が1秒減る制動の練習です。実際のゲームでエイムが良くなることは保証しません。" },
  { q: "外力に逆らうバランステストでは何を練習しますか？", a: "画面上の風（外力）に逆らって、照準を中央の安全リングの中に保つマウス操作の課題です。リングから外れるとコンボだけがリセットされます。身体の平衡感覚を直接鍛えるものではありません。" },
  { q: "手と目の協調ドリル（クロスボディ）では何をしますか？", a: "開始ノードにカーソルを乗せ、画面を横切って目標ノードまで決められた通路の中でカーソルを運ぶ課題です。通路から外れるとコンボがリセットされます。左右の脳半球の連携が高まるといった効果は主張しません。" },
  { q: "グリッド回避ドリルでは何を練習しますか？", a: "警告で光ったマスが危険ゾーンになる前に、カーソルを安全なマスへ移す選択の課題です。反応時間が何ミリ秒短くなるといった数値は約束しません。同じ機器でレベルと命中率の記録を比べてください。" },
  { q: "周辺視野のドリルでは何を練習しますか？", a: "画面の外側に現れる脅威ノードを見つけてクリックし、周辺への注意を練習する課題です。視野が広がる、けがを防げるといった効果は確認されていないため、補助的な練習として使ってください。" },
  { q: "どれくらいの頻度で練習すればよいですか？", a: "決まった正解はありません。集中が続く15〜25分程度のセッションを週に数回行い、疲れたら休む形が負担の少ない方法です。目や手首に痛みがあれば中止してください。" },
  { q: "ブラウザのドリルはジムやフィールドでの練習を補えますか？", a: "筋力トレーニング、プライオメトリクス、競技練習の代わりにはなりません。画面の合図を見て判断し入力する、視覚的なタイミングと判断の速さを練習する補助ツールとして使えます。" },
  { q: "一覧には何種類のドリルがありますか？", a: "反応・回避、敏捷性、協調運動、バランスの4分野に分かれた11種類のブラウザドリルがあります。カードから各ドリルの説明と遊び方を開けます。" },
  { q: "瞬発力テストは実際の体力測定の代わりになりますか？", a: "いいえ。ここでの瞬発力テストは、学校の体力テストのような身体測定ではなく、マウス操作のタイミング、判断の速さ、操作の正確さを練習するブラウザゲームです。筋力や跳躍力は測定しません。" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "dateModified": "2026-11-10",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
};

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
      <PhysicalDrillsClient faqs={faqs} />
    </>
  );
}
