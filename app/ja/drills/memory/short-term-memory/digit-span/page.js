import DigitSpanClient from '@/app/drills/memory/short-term-memory/digit-span/DigitSpanClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "数字記憶テスト｜何桁覚えられる？無料 | SkillDrills",
  description: "無料の数字記憶テスト（数唱課題形式）。一瞬表示される数字の列を覚えて同じ順番で入力します。3桁から始まり、正解ごとに1桁増えて最大15桁。何桁覚えられるか45秒の数字記憶ゲームで試せます。",
  keywords: [
    "数字記憶テスト",
    "数字 記憶 何桁",
    "数唱テスト",
    "デジットスパンテスト",
    "数字記憶ゲーム",
    "ワーキングメモリ 数字",
    "短期記憶 数字",
    "数字 覚える テスト",
    "記憶力トレーニング 数字",
    "音韻ループ テスト",
    "記憶スパン 測定",
    "数字列 記憶",
    "順番記憶 テスト",
    "無料 脳トレ 数字"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "数字記憶テスト｜何桁覚えられる？無料 | SkillDrills",
    description: "無料の数字記憶テスト（数唱課題形式）。一瞬表示される数字の列を覚えて同じ順番で入力します。3桁から始まり、正解ごとに1桁増えて最大15桁。何桁覚えられるか45秒の数字記憶ゲームで試せます。",
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "数字記憶テスト｜何桁覚えられる？無料 | SkillDrills",
    description: "無料の数字記憶テスト（数唱課題形式）。一瞬表示される数字の列を覚えて同じ順番で入力します。3桁から始まり、正解ごとに1桁増えて最大15桁。何桁覚えられるか45秒の数字記憶ゲームで試せます。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "記憶力トレーニング", "item": "https://skilldrills.online/ja/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "短期記憶", "item": "https://skilldrills.online/ja/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "数字記憶テスト", "item": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "数字記憶テスト（数唱課題形式）",
  "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://ja.wikipedia.org/wiki/ワーキングメモリ"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "数字記憶テスト（数唱課題形式）",
  "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span",
  "description": "一度に短く表示される数字の列を覚え、同じ順番で入力する無料の数字記憶ゲーム。3桁から始まり、正解ごとに1桁ずつ増えます。",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Working Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "数字記憶テスト（数唱課題形式）",
  "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "数字記憶テストのやり方",
  "description": "45秒間、表示される数字の列を覚えて同じ順番で入力する4ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span#step-1",
      "name": "数字の列を一度に見る",
      "text": "数字の列全体が一度に表示されます。最初は2.5秒間表示され、正解するたびに0.1秒ずつ短くなります（最短0.8秒）。"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span#step-2",
      "name": "2〜3桁ずつ区切る",
      "text": "電話番号のように2〜3桁のまとまり（例：'739-281'）に区切り、覚える単位を減らします。"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span#step-3",
      "name": "頭の中で繰り返す",
      "text": "数字が消えたあとも、まとまりを頭の中で素早く唱え続けて記憶を保ちます（音韻ループ）。"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/ja/drills/memory/short-term-memory/digit-span#step-4",
      "name": "8秒以内に入力",
      "text": "画面のテンキーまたはキーボードの数字キーで同じ順番に入力し、Enterか決定ボタンで送信します。Backspaceで消せます。入力時間は8秒です。"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "数字記憶テストはどのように進みますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ランダムな数字の列が一度に短時間表示され、消えたら同じ順番（順唱）で入力します。3桁から始まり、正解すると1桁増え（最大15桁）、間違えるか8秒以内に入力しないと1桁減ります（最小3桁）。1セッションは45秒です。"
      }
    },
    {
      "@type": "Question",
      "name": "数字は平均で何桁まで覚えられますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "研究では、ミラー（1956）が短期記憶の容量を約7±2個とし、リハーサルやまとめ方（チャンキング）を封じた条件ではコーワン（2001）が約4個としています。SkillDrills は利用者データを収集しないため、このゲームでの平均やパーセンタイルは示していません。時間制限と自動難易度調整があるため研究値とは直接比べられません。下の練習帯と自分の記録を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "スコアはどのように計算されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正しく入力すると 100 ×（1 ＋ 0.1 ×（桁数 − 3））点を獲得します。3桁は100点、15桁は220点です。間違えてもスコアや残り時間は減らず、桁数が1つ下がるだけです。"
      }
    },
    {
      "@type": "Question",
      "name": "逆唱（逆から答える課題）もありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ、このテストは順唱のみです。逆唱は覚えた数字を頭の中で並べ替える操作が必要で、ワーキングメモリへの負荷がより大きい課題ですが、ここでは用意していません。"
      }
    },
    {
      "@type": "Question",
      "name": "WAISの数唱と同じ検査ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "いいえ。数唱と似た形式ですが、WAISの下位検査ではなく、IQや評価点は算出しません。無料の練習用ゲームです。"
      }
    },
    {
      "@type": "Question",
      "name": "音韻ループは数字の記憶にどう関係しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "バドリーのワーキングメモリモデルでは、数字は音の形で「音韻ストア」に一時保存され、頭の中で唱える「内的リハーサル」によって保たれます。唱えないと約2秒で薄れていくため、数字が消えた直後から唱え続けるのがコツです。"
      }
    },
    {
      "@type": "Question",
      "name": "チャンキングを使うとなぜ覚えやすくなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "数字を電話番号のように「839-241」と3桁ずつ区切ると、6個の数字を2つのまとまりとして覚えられます。保持する単位が減るので、長い列でも維持しやすくなります。"
      }
    },
    {
      "@type": "Question",
      "name": "間違えると桁数が1つ減るのはなぜですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "正解で1桁増え、不正解で1桁減る方式なので、桁数が自分の限界付近で上下します。正解すると表示時間も0.1秒短くなり、間違えると0.2秒長くなります（0.8〜2.5秒）。"
      }
    },
    {
      "@type": "Question",
      "name": "数字記憶ゲームで日常の記憶力は良くなりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "効果は保証できません。練習すればこのゲームの記録は伸びる可能性がありますが、日常の記憶力や学習への効果の移り方は研究によって結果が分かれます。気軽な記憶ゲームとしてお使いください。"
      }
    },
    {
      "@type": "Question",
      "name": "この数字記憶テストは無料ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい、無料で、インストールや会員登録なしにブラウザですぐ遊べます。画面のテンキー（タップ・クリック）とキーボードの数字キーの両方に対応し、記録はブラウザ内にだけ保存されます。"
      }
    }
  ]
};

const digitSpanGuide = {
  intro: [
  "数字記憶テストは、一瞬表示される数字の列を同じ順番で入力し、何桁まで覚えられるかを試す数字記憶ゲームです。心理学で短期記憶の容量を調べるのに使われてきた数唱課題（デジットスパン）の形式を練習用にしたものです。",
  "背景にはジョージ・ミラー（George A. Miller, 1956）の「マジカルナンバー7±2」の研究があります。似た数唱形式はウェクスラー式知能検査（WAIS）にも含まれますが、このページのゲームはその検査ではなく、評価点も算出しません。",
  "アラン・バドリー（Alan Baddeley, 1974, 2000）のワーキングメモリモデルでは、数字の列は「音韻ループ」で保持され、唱えないと約2秒で薄れていきます。ネルソン・コーワン（Nelson Cowan, 2001）はリハーサルとまとめ方を封じると純粋な容量は4個前後だとしており、長い列にはチャンキングが役立ちます。",
  "平均何桁？：ミラー（1956）の約7±2桁という値がよく引用されますが、これは研究室の条件での目安です。このゲームは表示時間が短くなっていき、8秒の入力制限もあるため、同じ物差しではありません。SkillDrills は利用者の平均値を集計していないので、下の練習帯で自分の記録の推移を確認してください。",
  "ゲームの仕組み：3桁から始まり、数字の列全体が一度に表示されます（最初2.5秒、正解ごとに0.1秒短く最短0.8秒、不正解で0.2秒長く）。消えたあと8秒以内に画面のテンキーかキーボードで入力します。正解で1桁増え（最大15桁）、不正解や時間切れで1桁減ります（最小3桁）。45秒間のスコア、最大桁数、正答率（正解ラウンドの割合）を記録し、入力の反応時間は計測しません。",
  "データの透明性：SkillDrills はスコアをサーバーに収集しません。記録はブラウザの localStorage にのみ保存されるため、このページでは利用者の平均値、パーセンタイル、利用者数を示しておらず、引用している数値は下部の参考文献の研究によるものです。"
],
  benchmarks: {
    title: "数字記憶テスト 練習帯（SkillDrills基準・45秒）",
    headers: ["練習帯", "到達桁数", "ノーミス到達時のスコア", "典型的な覚え方"],
    rows: [
  ["帯 1", "13桁以上", "約1,450点以上", "3〜4桁のチャンキングと素早い内的リハーサルを併用"],
  ["帯 2", "11〜12桁", "約1,080〜1,449点", "3桁区切りが安定"],
  ["帯 3", "9〜10桁", "約750〜1,079点", "2〜3桁で区切るが中間の数字を落としやすい"],
  ["帯 4", "7〜8桁", "約460〜749点", "1つずつ唱えて覚え、区切りはまだ使っていない"],
  ["帯 5", "3〜6桁", "460点未満", "ルールと表示速度に慣れる段階"]
],
    note: "人口平均やWAISの評価点ではなく SkillDrills の練習帯です。スコアは3桁からノーミスでその桁数に到達した場合の値です（1ラウンドの得点 = 100 ×（1 ＋ 0.1 ×（桁数 − 3）））。間違えると桁数が下がるため、実際のスコアは変わります。"
  },
  techniques: {
    title: "覚えられる桁数を伸ばすコツ",
    items: [
  {
    "name": "リズムをつけた3桁チャンキング",
    "desc": "数字を電話番号のように3桁ずつ（例：'739 - 281 - 405'）区切ります（Miller, 1956）。9個の数字が3つのまとまりになり、覚えやすくなります。",
    "tips": "各まとまりの最初の数字を頭の中で少し高く読むと区切りがはっきりします。"
  },
  {
    "name": "頭の中で素早く唱える（音韻ループ）",
    "desc": "まとまりを頭の中で素早く繰り返し唱えます（Baddeley, 2000）。唱えないと約2秒で薄れるので、数字が消えた直後から唱えましょう。",
    "tips": "1つずつ区切らず、まとまりごとに続けて発音します。"
  },
  {
    "name": "テンキー上の指の動きを思い描く",
    "desc": "数字の列を画面テンキー上の指の通り道として覚えます（Logie, 1995）。音の記憶に空間の記憶を加える二重の覚え方です。",
    "tips": "数字を見ている間に、テンキー上をなぞる線を頭の中で描いてみましょう。"
  },
  {
    "name": "中間の数字を守る（系列位置効果）",
    "desc": "最初と最後の数字は比較的覚えやすく、中間の数字が最も抜けやすくなります。意識的な唱え直しは中間のまとまりに集中させましょう。",
    "tips": "最初の3桁を先に確定し、最後の2桁は見た直後の記憶に任せます。"
  }
]
  },
  steps: [
  "45秒セッションを開始し、画面中央を見ます。",
  "数字の列が一度に表示されたら、すぐに2〜3桁ずつ区切ります。",
  "数字が消えたあと、まとまりを頭の中で素早く唱えます。",
  "8秒以内に画面のテンキーかキーボードの数字キーで同じ順番に入力し、Enterで送信します。",
  "正解で1桁増え、不正解で1桁減ります。最大桁数とスコアを自分の過去の記録と比べましょう。"
],
  audience: "数字を覚える力や集中力を試したい学生、通勤中などに数字記憶ゲームで頭を使いたい大人、何桁覚えられるか気になるすべての方。",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
  related: [
  {
    "href": "/ja/drills/memory/working-memory/n-back",
    "label": "3-Back ワーキングメモリ課題"
  },
  {
    "href": "/ja/drills/memory/spatial-memory/grid-memorization",
    "label": "瞬間記憶テスト（グリッド記憶）"
  },
  {
    "href": "/ja/drills/cognitive/focus/concentration-grid",
    "label": "シュルテテーブル（集中力グリッド）"
  },
  {
    "href": "/ja/drills/visual/reaction-speed/light-reaction",
    "label": "反射神経・反応速度テスト"
  },
  {
    "href": "/ja/drills/reaction-speed/reflex-training-drill",
    "label": "反射神経ゲーム"
  }
]
};

export default function LocalizedDigitSpanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitSpanClient copy={{
        "h1Keyword": "数字記憶テスト",
        "h1Suffix": "｜何桁覚えられる？",
        "subtitle": "数字記憶ゲーム：数字の列を覚えて同じ順番で入力",
        "caption": "表示される数字の列を覚え、消えたあとに同じ順番で正確に入力してください。",
        "statScore": "スコア",
        "statTime": "残り時間",
        "statSpan": "スパン",
        "digitsUnit": "桁",
        "statBest": "ベストスコア",
        "hudScore": "スコア",
        "hudTime": "時間",
        "memorizeTitle": "数字シーケンスを記憶",
        "evaluating": "判定中...",
        "startTitle": "数字記憶テスト",
        "startSubtitle": "数字記憶 • ワーキングメモリ練習",
        "countdownSubtitle": "準備してください",
        "newBest": "自己新記録",
        "pointsLabel": "ポイント",
        "statAccuracy": "正解率",
        "statPeakSpan": "最大スパン",
        "statPerfects": "パーフェクト",
        "btnPlayAgain": "もう一度プレイ",
        "rulesTitle": "ドリルルール & スコア算出方法",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "数字シーケンス再生",
                        "highlight": "+100 PTS",
                        "result": "一度に表示される数字を覚え、テンキーかキーボードで入力"
                },
                {
                        "num": "2",
                        "text": "桁数ボーナス",
                        "highlight": "最大+120% PTS",
                        "result": "1ラウンド = 100 ×（1 ＋ 0.1 ×（桁数 − 3））点"
                },
                {
                        "num": "3",
                        "text": "ミス・時間切れ",
                        "highlight": "-1 桁",
                        "result": "不正解や8秒以内に未入力：減点・時間減少なし、1桁短い新しい列"
                },
                {
                        "num": "4",
                        "text": "適応型スパン測定",
                        "highlight": "自動昇降",
                        "result": "正解で＋1桁、不正解で−1桁（3〜15桁）"
                }
        ]
}} />
      <DrillGuide guide={digitSpanGuide} />
      <RelatedDrills />
    </>
  );
}
