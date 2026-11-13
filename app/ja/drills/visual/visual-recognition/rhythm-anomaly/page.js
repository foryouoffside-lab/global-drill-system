import RhythmAnomalyClient from '@/app/drills/visual/visual-recognition/rhythm-anomaly/RhythmAnomalyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = "https://skilldrills.online/ja/drills/visual/visual-recognition/rhythm-anomaly";
const TITLE = "点滅のズレ探しゲーム｜視覚リズムテスト | SkillDrills";
const DESCRIPTION = "点滅のズレ探しゲーム：6×6のマスの中から、ひとつだけ違うテンポで点滅するマスを見つけてクリック。45秒の無料視覚リズムテストです。";
const FAQS = [
  [
    "点滅のズレ探しゲームでは何を測りますか？",
    "45秒間でテンポが違うマスを何回見つけたか（1回10点）、連続正解数、ミスの数を記録します。視覚リズムを見比べる練習用のスコアです。"
  ],
  [
    "フリッカーテスト（CFF）と同じですか？",
    "いいえ。マスは毎秒約0.6〜2.5回とゆっくり点滅しており、点滅が融合して見える臨界融合頻度（約50〜60Hz）は測っていません。"
  ],
  [
    "スコアとレベルはどう上がりますか？",
    "正解1回で10点、3回ごとにレベルが1上がります。正解するほど全体のテンポが速くなり（周期1.6秒から0.6秒まで）、妨害の点滅も増えます。"
  ],
  [
    "間違えると減点されますか？",
    "減点や時間のペナルティはありません。ミスすると赤いフラッシュが出て連続正解がリセットされるだけです。タイムアウト設定をオンにした場合は、時間内に見つけないとズレたマスが移動します。"
  ],
  [
    "一瞬暗くなるマスは何ですか？",
    "ランダムな妨害刺激です。一度だけ変わるマスではなく、違うテンポで点滅し続けるマスが正解です。"
  ],
  [
    "キーボードでも遊べますか？",
    "マウスのクリックか画面のタッチで操作します。キーボードは使いません。"
  ],
  [
    "モニターのリフレッシュレートは影響しますか？",
    "点滅がゆっくりなので60Hzの画面でも十分に表示されます。ただし画面の明るさや大きさ、入力遅延は結果に影響しうるので、同じ端末で比べてください（Woods et al., 2015）。"
  ],
  [
    "光に敏感でも遊べますか？",
    "マスは暗い灰色でゆっくり点滅しますが、点滅する画面がつらい方や光過敏の症状がある方は控えてください。頭痛やめまいが出たらすぐにやめましょう。"
  ]
];
const RULES = [
  "正解のマスをクリック：+10点。ズレたマスは別の場所に移ります。",
  "3回正解するごとにレベルが1上がり、全体のテンポと妨害の点滅が速くなります。",
  "ランダムに数マスが一瞬暗くなる妨害刺激が出続けます。",
  "間違ったマスをクリック：赤いフラッシュが出て連続正解がリセットされるだけで、減点や時間のペナルティはありません。",
  "設定でタイムアウトをオンにすると、6秒（後半は最短1.8秒）以内に見つけられないとズレたマスが移動し、連続正解がリセットされます。"
];
const BANDS = [
  [
    "レンジ 1",
    "< 50",
    "0–4",
    "L1–2"
  ],
  [
    "レンジ 2",
    "50–99",
    "5–9",
    "L2–4"
  ],
  [
    "レンジ 3",
    "100–149",
    "10–14",
    "L4–5"
  ],
  [
    "レンジ 4",
    "150–199",
    "15–19",
    "L6–7"
  ],
  [
    "レンジ 5",
    "200+",
    "20+",
    "L7+"
  ]
];
const TIPS = [
  "1マスずつ見るより、マス全体をぼんやり広く見ると、ひとつだけテンポがズレたマスが目に入りやすくなります。",
  "一瞬暗くなって戻るマスは妨害刺激です。2回以上違うテンポで点滅したマスをクリックしましょう。",
  "レベルが上がってテンポが速くなったら、新しいリズムを1拍見てからクリックしましょう。",
  "記録は同じ端末・同じ画面の明るさで比べましょう。"
];
const INTRO = [
  "点滅のズレ探しゲームは、6×6の36マスが同じテンポでゆっくり点滅する中で、ひとつだけ速いテンポで点滅するマスを見つけてクリックする45秒の視覚リズムテストです。マウスかタッチでブラウザから無料で遊べます。",
  "ズレたマスの周期は周りの約72%で、約1.4倍の速さで点滅し、いちばん明るい瞬間も少しだけ明るくなります。正解するたびにマス全体のテンポが速くなります（周期1.6秒から最短0.6秒）。最初は簡単ですが、後半ほどテンポの違いを素早く読み取る必要があります。",
  "点滅は毎秒約0.6〜2.5回で、点滅がひとつの光に融合して見える臨界融合頻度（約50〜60Hz；De Lange, 1958; Kelly, 1961）よりずっと遅い速度です。このためCFFを測るフリッカーテストではなく、複数のマスのリズムを見比べる注意の課題です。2つの刺激が同じテンポかを判断できる限界は、点滅そのものに気づく限界よりずっと低い速度にあります（Holcombe, 2009）。"
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "点滅のズレ探し",
  "視覚リズムテスト",
  "リズムのズレ 見つける",
  "点滅 違い 探す ゲーム",
  "視覚タイミング 練習"
],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
    siteName: "SkillDrills",
    locale: "ja_JP",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/rhythm-anomaly', 'ja'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja/" },
    { "@type": "ListItem", "position": 2, "name": "視覚トレーニング", "item": "https://skilldrills.online/ja/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "視覚認識", "item": "https://skilldrills.online/ja/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "点滅のズレ探しゲーム", "item": PAGE_URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "点滅のズレ探しゲーム（視覚リズムテスト）",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "6×6のマスの中から、ひとつだけ速いテンポで点滅するマスを探す45秒のブラウザゲーム。マウスかタッチで操作します。",
  "url": PAGE_URL,
  "inLanguage": "ja-JP",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "点滅のズレ探しゲームの遊び方",
  "inLanguage": "ja-JP",
  "step": [
  [
    "マス全体を見る",
    "6×6のマスの中央あたりに視線を置き、36マスが一緒に点滅する基本のテンポをつかみます。"
  ],
  [
    "違うテンポを探す",
    "ひとつだけ速く点滅するマスを探します。一瞬暗くなるマスは妨害刺激です。"
  ],
  [
    "クリックかタッチ",
    "そのマスをクリックかタッチすると10点が入り、ズレたマスは別の場所に移ります。"
  ],
  [
    "速くなるテンポに合わせる",
    "3回正解するごとにレベルが上がりテンポが速くなります。45秒後にスコアと連続正解を確認します。"
  ]
].map(([name, text], i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": name,
    "text": text,
    "url": `${PAGE_URL}#step-${i + 1}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-12",
  "mainEntity": FAQS.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function JapaneseRhythmAnomalyPage() {
  const sources = pickSources('holcombe2009', 'kelly1961', 'delange1958', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RhythmAnomalyClient copy={{ title: "点滅のズレ探しゲーム", subtitle: "視覚リズムテスト：ひとつだけテンポが違うマス" }} />
      <DrillGuide
        eyebrow={"視覚リズムテストのガイド"}
        title={"点滅のズレ探しゲーム：遊び方とスコアの目安"}
        sources={sources}
      >
        {INTRO.map((p) => <p key={p}>{p}</p>)}

        <h3>{"ルール"}</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h3>{"SkillDrills練習レンジ"}</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                {[
  "レンジ",
  "45秒スコア",
  "正解数",
  "到達レベル"
].map((h) => <th key={h} className="py-2.5 px-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {BANDS.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => <td key={i} className="py-2.5 px-3 tabular-nums">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{"SkillDrillsの練習用の目安です。統計値やパーセンタイルではありません。"}</p>

        <h3>{"コツ"}</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ol>

        <h3>{"よくある質問"}</h3>
        <div className="space-y-4 my-6">
          {FAQS.map(([q, a]) => (
            <div key={q}>
              <h4 className="font-semibold text-white">{q}</h4>
              <p className="text-slate-300 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
