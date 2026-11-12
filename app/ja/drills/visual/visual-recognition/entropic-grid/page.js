import EntropicGridClient from '@/app/drills/visual/visual-recognition/entropic-grid/EntropicGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/ja/drills/visual/visual-recognition/entropic-grid";
const TITLE = "視覚探索トレーニング｜変化する格子で文字コード探し | SkillDrills";
const DESCRIPTION = "視覚探索トレーニング：10 × 10の格子に並ぶ2文字コード100個から、指定コードをすべて見つけてクリック。周りのマスは変わり続けます。45秒・無料・ブラウザで遊べます。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "視覚探索トレーニング",
    "文字コード探し",
    "視覚探索 ゲーム",
    "コード探し",
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: URL,
    siteName: "SkillDrills",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/entropic-grid', 'ja'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja/" },
    { "@type": "ListItem", "position": 2, "name": "視覚トレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "視覚認識", "item": "https://skilldrills.online/ja/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "視覚探索トレーニング", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "視覚探索トレーニング",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION,
  "url": URL,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "視覚探索トレーニングの遊び方",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "探すコードを確認", "text": "画面上部の「FIND TARGET CODE」の下に、英字と数字の2文字コードが出ます。例：K7。" },
    { "@type": "HowToStep", "position": 2, "name": "格子を探す", "text": "10 × 10の格子に2文字コードが100個並び、探すコードは少なくとも2か所にあります。" },
    { "@type": "HowToStep", "position": 3, "name": "すべてクリック", "text": "1つ見つけるごとに150点。すべて見つけると新しいコードと新しい格子に切り替わります。" },
    { "@type": "HowToStep", "position": 4, "name": "45秒間くり返す", "text": "0.7秒ごとに妨害マス3つのコードが変わり、遅くとも12秒ごとに探すコードが変わります。" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "視覚探索トレーニングはどう遊びますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "上に2文字のコードが表示され、10 × 10の格子の100個のコードの中に複数隠れています。すべてクリックするか12秒たつと、新しいコードと新しい格子になります。1回は45秒です。" }
    },
    {
      "@type": "Question",
      "name": "探すコードはいくつありますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "最初は2つです。レベルが上がると増え、レベル3から3つ、レベル6から4つ、レベル9から5つ、レベル12から最大6つです。" }
    },
    {
      "@type": "Question",
      "name": "格子が変わり続けるのはなぜ？",
      "acceptedAnswer": { "@type": "Answer", "text": "0.7秒ごとにランダムな妨害マス3つが新しいコードに変わります。探すコードのマスはそのままです。そのため位置を覚えて解くことはできません。" }
    },
    {
      "@type": "Question",
      "name": "得点の計算方法は？",
      "acceptedAnswer": { "@type": "Answer", "text": "1つ見つけるごとに150点、750点（5個）ごとにレベルが上がります。終了後に得点、正確率、最高レベル、見つけた数が表示されます。" }
    },
    {
      "@type": "Question",
      "name": "間違えると減点されますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "されません。間違えたマスが一瞬赤くなるだけで、得点も時間も減りません。正確率だけが下がります。" }
    },
    {
      "@type": "Question",
      "name": "注意力の検査や視力検査ですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "いいえ。ブラウザで遊べる無料の練習ゲームで、標準化された心理検査や視力検査ではありません。得点は自分の過去の記録と比べるためだけに使ってください。" }
    },
    {
      "@type": "Question",
      "name": "速く見つけるコツは？",
      "acceptedAnswer": { "@type": "Answer", "text": "コードを1文字ずつではなく2文字の組として覚え、格子を4分割するか1行ずつ順に見ていきましょう。妨害マスは変わり続けるので、位置を覚えても役に立ちません。" }
    }
  ]
};

export default function EntropicGridLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <EntropicGridClient copy={{ title: "視覚探索トレーニング", subtitle: "変化する100マスの格子で文字コードを探す" }} />
      <DrillGuide
        eyebrow="視覚探索ゲーム"
        title="視覚探索トレーニング：ルール・得点・コツ"
        sources={sources}
      >
        <p>この<strong>視覚探索トレーニング</strong>は、10 × 10の格子に並ぶ2文字コード100個の中から指定のコードをすべて見つけてクリックする、無料のブラウザ練習です。1回は45秒で、妨害マスが変わり続けるので格子が同じ形のまま残りません。マウスでもタッチでも遊べます。</p>

        <h3>格子の仕組み</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>探すコード：</strong> 英字（I・Oを除く）と数字2〜9からなる2文字。</li>
          <li><strong>複数の正解：</strong> 最初は2つ、レベルに応じて最大6つが同時にあります。</li>
          <li><strong>ノイズ：</strong> 0.7秒ごとに妨害マス3つが新しいコードに変わります。</li>
          <li><strong>コードの交代：</strong> すべて見つけるか12秒たつと、新しいコードになります。</li>
        </ul>

        <h3>なぜ探しにくいのか</h3>
        <p>2文字コードは目立つ1つの特徴ではなく、2文字の組み合わせでしか妨害コードと区別できません。このような探索は1つずつ確かめるやり方に近く（Treisman &amp; Gelade, 1980; Wolfe, 1994）、標的と妨害刺激が似ているほど遅くなります（Duncan &amp; Humphreys, 1989）。変わり続けるノイズは、位置の暗記で解くことも防ぎます。</p>

        <h3>SkillDrills練習段階（45秒）</h3>
        <p>以下はこの格子用のSkillDrills独自の目安で、科学的な基準値ではありません。</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">練習段階</th>
                <th className="py-2.5 px-3 font-semibold">見つけた数</th>
                <th className="py-2.5 px-3 font-semibold">得点</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">入門</td><td className="py-2.5 px-3 tabular-nums">0–2</td><td className="py-2.5 px-3 tabular-nums">0–300</td></tr>
              <tr><td className="py-2.5 px-3">安定</td><td className="py-2.5 px-3 tabular-nums">3–4</td><td className="py-2.5 px-3 tabular-nums">450–600</td></tr>
              <tr><td className="py-2.5 px-3">上級</td><td className="py-2.5 px-3 tabular-nums">5–6</td><td className="py-2.5 px-3 tabular-nums">750–900</td></tr>
              <tr><td className="py-2.5 px-3">トップ</td><td className="py-2.5 px-3 tabular-nums">7+</td><td className="py-2.5 px-3 tabular-nums">1,050+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>コツ</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>2文字の組で読む：</strong> 1文字ではなく、2文字の並び全体を探します。</li>
          <li><strong>4分割で見る：</strong> 格子を4つに分けて順に確認すると見落としが減ります。</li>
          <li><strong>見つけた後も続ける：</strong> 同じコードがほぼ必ずもう1か所あります。</li>
        </ol>

        <h3>よくある質問（FAQ）</h3>
        <div className="space-y-4 my-6">
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name}>
              <h4 className="font-semibold text-white">{q.name}</h4>
              <p className="text-slate-300 mt-1">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
