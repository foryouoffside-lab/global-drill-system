import VisualSearchClient from '@/app/drills/visual/visual-recognition/visual-search/VisualSearchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/ja/drills/visual/visual-recognition/visual-search";
const TITLE = "文字探しゲーム｜無料ブラウザで遊ぶ文字探し | SkillDrills";
const DESCRIPTION = "文字探しゲームを無料でブラウザから。回転した似た文字95個の中にある標的の文字1つを、45秒でできるだけ多く見つけます。登録不要の視覚探索の練習です。";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "文字探しゲーム",
    "文字探し 無料",
    "文字探し ブラウザ",
    "視覚探索",
    "文字探し",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/visual-search', 'ja'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja/" },
    { "@type": "ListItem", "position": 2, "name": "視覚トレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "視覚認識", "item": "https://skilldrills.online/ja/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "文字探しゲーム", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "文字探しゲーム",
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
  "name": "文字探しゲームの遊び方",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "探す文字を確認", "text": "画面上部の「FIND」の横に探す文字が出ます。例：C、E、P、6。" },
    { "@type": "HowToStep", "position": 2, "name": "グリッドを探す", "text": "12 × 8 = 96マスのうち標的は1つだけ、残り95マスは似た文字です。すべての文字が0・90・180・270度のいずれかにランダムに回転しています。" },
    { "@type": "HowToStep", "position": 3, "name": "標的をクリック", "text": "標的をクリックまたはタップすると、すぐに新しいグリッドと新しい標的の文字に切り替わります。" },
    { "@type": "HowToStep", "position": 4, "name": "45秒間くり返す", "text": "1回は45秒固定で、見つけるたびに150点です。" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "文字探しゲームはどう遊びますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "上に表示された標的の文字が12 × 8のグリッドに1つだけあり、残り95マスは似た文字です（例：O・Q・Gの中のC）。見つけてクリックすると新しいグリッドと新しい標的が出ます。1回は45秒です。" }
    },
    {
      "@type": "Question",
      "name": "得点の計算方法は？",
      "acceptedAnswer": { "@type": "Answer", "text": "1つ見つけるごとに150点です。750点（5個）ごとにレベル表示が上がりますが、グリッドは96マスのままです。終了後に得点、正確率、最高レベル、見つけた数が表示されます。" }
    },
    {
      "@type": "Question",
      "name": "間違えると減点されますか？",
      "acceptedAnswer": { "@type": "Answer", "text": "されません。間違えたマスが一瞬赤くなるだけで、得点も時間も減りません。結果の正確率だけが下がります。" }
    },
    {
      "@type": "Question",
      "name": "なぜ文字が回転しているのですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "標的と妨害文字は曲線や線が似ていて、ランダムな回転のせいで妨害文字が均一な模様にまとまりません。そのため標的が自然に目立たず、1マスずつ確かめる必要があります。標的と妨害刺激が似ているほど探索は遅くなります（Duncan & Humphreys, 1989）。" }
    },
    {
      "@type": "Question",
      "name": "特徴探索と結合探索の違いは？",
      "acceptedAnswer": { "@type": "Answer", "text": "色など1つの特徴だけが違う標的は、妨害刺激の数に関係なくすぐに目に入ります。複数の特徴を組み合わせて判断する探索は、妨害刺激が増えるほど遅くなります（Treisman & Gelade, 1980; Wolfe, 1994）。" }
    },
    {
      "@type": "Question",
      "name": "視力検査や注意力の検査ですか？",
      "acceptedAnswer": { "@type": "Answer", "text": "いいえ。ブラウザで遊べる無料の練習ゲームで、視力検査や標準化された心理検査ではありません。得点は自分の過去の記録と比べるためだけに使ってください。" }
    },
    {
      "@type": "Question",
      "name": "速く見つけるコツは？",
      "acceptedAnswer": { "@type": "Answer", "text": "探す前に標的の文字の形を覚え、グリッドを1行ずつ、または4分割して順に見ていきましょう。同じマスを2回見ずにすみます。" }
    }
  ]
};

export default function VisualSearchLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <VisualSearchClient copy={{ title: "文字探しゲーム", subtitle: "似た文字95個の中から1つを探す" }} />
      <DrillGuide
        eyebrow="視覚探索"
        title="文字探しゲーム：ルール・得点・コツ"
        sources={sources}
      >
        <p><strong>文字探しゲーム</strong>は、ブラウザで無料で遊べる視覚探索の練習です。12 × 8のグリッドに並ぶ回転した96文字のうち、標的の文字は1つだけ。45秒でできるだけ多く見つけます。見つけるたびにグリッドと標的の文字が変わります。</p>

        <h3>グリッドの仕組み</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>似た妨害文字：</strong> 標的ごとに似た文字が3種類混ざります。例：O・Q・Gの中のC、F・L・Pの中のE、8・9・0の中の6。</li>
          <li><strong>ランダムな回転：</strong> 標的を含むすべての文字が0・90・180・270度のいずれかに回転します。</li>
          <li><strong>固定時間：</strong> 45秒。時間ボーナスや時間の減点はありません。</li>
          <li><strong>操作：</strong> マウスのクリックまたはタッチ1回。</li>
        </ul>

        <h3>なぜ1マスずつ確かめることになるのか</h3>
        <p>知覚心理学では、1つの特徴だけで標的がすぐに目立つ特徴探索と、複数の特徴を組み合わせて1つずつ確かめる結合探索を区別します（Treisman &amp; Gelade, 1980; Wolfe, 1994）。標的と妨害刺激が似ているほど、また妨害刺激どうしがばらばらなほど、探索は遅くなります（Duncan &amp; Humphreys, 1989）。このグリッドは似た形とランダムな回転でその条件を作っています。</p>

        <h3>SkillDrills練習段階（45秒）</h3>
        <p>以下はこのグリッド用のSkillDrills独自の目安で、科学的な基準値ではありません。</p>
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
              <tr><td className="py-2.5 px-3">入門</td><td className="py-2.5 px-3 tabular-nums">0–3</td><td className="py-2.5 px-3 tabular-nums">0–450</td></tr>
              <tr><td className="py-2.5 px-3">安定</td><td className="py-2.5 px-3 tabular-nums">4–6</td><td className="py-2.5 px-3 tabular-nums">600–900</td></tr>
              <tr><td className="py-2.5 px-3">上級</td><td className="py-2.5 px-3 tabular-nums">7–9</td><td className="py-2.5 px-3 tabular-nums">1,050–1,350</td></tr>
              <tr><td className="py-2.5 px-3">トップ</td><td className="py-2.5 px-3 tabular-nums">10+</td><td className="py-2.5 px-3 tabular-nums">1,500+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>コツ</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>標的を先に覚える：</strong> 似た文字と区別できる部分、たとえばCの開いた部分やGの横線を確認します。</li>
          <li><strong>順番に見る：</strong> 1行ずつ、または4分割して見ると、同じマスを2回見ずにすみます。</li>
          <li><strong>落ち着いてクリック：</strong> 間違えても時間は減りませんが、正確率が下がります。</li>
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
