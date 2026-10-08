import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// JAPANESE SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "周辺視野 トレーニング" (Peripheral vision training) / "中心視 周辺視 同時"
// Secondary:    "周辺視野 拡大", "視野拡大 トレーニング", "動体視力 周辺視野 テスト"
// LSI / Domain:  "視覚的注意 分配", "潜在的空間注意 訓練", "機能的視野 FFOV",
//               "トンネルビジョン 改善", "周辺視 索敵 エイム", "視線固定 周辺検知"
// Authentic Domain Terms: 周辺視野トレーニング（Peripheral Vision Training）, 潜在的空間注意（Covert Spatial Attention）, 機能的視野（Functional Field of View / FFOV）, 視覚的ズームレンズ（Visual Zoom Lens）, 網膜杆体細胞（Retinal Rods）, サッケード抑制（Saccadic Suppression）
// ============================================================

export const metadata = {
  title: "周辺視野トレーニング｜中心を見たまま反応 | SkillDrills",
  description: "中心の動く標的を目で追いながら、周辺に出る光刺激を視線を動かさず探す無料ブラウザ練習。ブラウザですぐ試せます。",
  keywords: [
    "周辺視野 トレーニング",
    "中心視 周辺視 同時",
    "周辺視野 反応",
    "周辺視野 スポーツ",
    "視覚的注意 分配",
    "周辺刺激 反応練習",
    "動体視力 トレーニング",
    "視線固定 周辺検知",
    "周辺視野 オンライン",
    "スポーツビジョン 周辺視"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "周辺視野トレーニング｜中心を見たまま反応 | SkillDrills",
    description: "中心の動く標的を追いながら、周辺の光刺激を目を向けずに見つける無料ブラウザ練習。",
    type: "website",
    url: "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit",
    siteName: "SkillDrills",
    locale: "ja_JP",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "周辺視野トレーニング｜中心を見たまま反応 | SkillDrills",
    description: "中心の動く標的を追いながら、周辺の光刺激に反応する無料オンライン練習。",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "ホーム", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "視覚追従・アイトラッキング", "item": "https://skilldrills.online/ja/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "周辺視野ピン追従トレーニング・中心視周辺視統合テスト", "item": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Peripheral_vision", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "周辺視野ピン追従トレーニング・中心視周辺視統合テスト",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "中心標的を目で追いながら、周辺に現れるパルスピンに視線を向けず気づく練習をする無料のブラウザ練習ツール。医療機器や診断ツールではありません。",
  "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/ja" },
  "inLanguage": "ja",
  "dateModified": "2026-10-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "周辺視野ピン追従トレーニング・中心視周辺視統合テスト – 視野拡大＆潜在的空間注意 | SkillDrills",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas対応ブラウザ（Chrome, Edge, Firefox, Safari）",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit",
  "inLanguage": "ja",
  "dateModified": "2026-10-08"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "周辺視野ピン追従トレーニング・中心視周辺視統合テスト",
  "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit",
  "description": "移動する中心ターゲットを視線固定で追従しながら、視野外周にフラッシュするピンを即座に検知・応答するブラウザビジョントレーニングゲーム。",
  "genre": ["視覚練習", "脳トレ", "視線追従", "周辺視野トレーニング"],
  "gamePlatform": ["ブラウザ", "パソコン", "スマートフォン"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-10-08"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-10-08",
  "name": "周辺視野ピン追従トレーニングの測定・実践手順",
  "description": "中心視の固定安定性と周辺視野の潜在的注意検知を同時に両立させる4段階の実践ステップ。",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "視距離の確保と視野角アライメント",
      "text": "ディスプレイから約50〜70cmの距離を確保し、画面全体が左右視野角約40〜60度の中に収まるように姿勢を整えます。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "セッション時間と速度倍率の選択",
      "text": "訓練目的に応じてセッション時間（30秒〜120秒）と速度倍率（0.5x〜9.0x）を設定します。初心者は1.0xから開始します。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "中心窩ロックを維持したまま周辺ピンの検知",
      "text": "中心で移動するターゲットを中心窩で追尾し続けます。周辺部にパルスピンが点滅しても視線を向けず、周辺視野の意識だけで検知してキー入力（スペースキー等）を行います。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "検知反応潜時と中心視離脱エラーの分析",
      "text": "セッション後、周辺ピンに気づけた感覚と、視線が中心から外れてしまった場面を自分で振り返ります。ブラウザは視線そのものを測定できないため、振り返りは自己評価です。",
      "url": "https://skilldrills.online/ja/drills/visual-tracking/peripheral-ping-pursuit#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "周辺視野ピン追従トレーニングとはどのようなドリルですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面の中央部を滑らかに移動するプライマリターゲットを中心窩で注視し続けながら、画面の四隅や外周部に突発的に点滅する『周辺パルスピン』を視線を動かさずに検知し、気づいたらすぐ反応する練習です。中心を追う課題と周辺に注意を向ける課題を同時に行います。視力や視野の検査ではなく、効果を保証するものでもありません。"
      }
    },
    {
      "@type": "Question",
      "name": "なぜ周辺の光へ目を向けずに中心を見続けなければならないのですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "周辺の刺激へ毎回眼球を向けると、中心の標的から視線が外れ、追従と検知を同時に比べにくくなります。視線を動かさず注意の焦点だけを周辺へ広げる『潜在的注意』を使うと、中心の追従を保ったまま周辺刺激への反応を練習できます。"
      }
    },
    {
      "@type": "Question",
      "name": "「潜在的注意」と「顕在的注意」の違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "顕在的注意は、興味のある対象へ眼球や頭部を向けて見ることです。潜在的注意は、視線を一点に保ったまま意識の焦点だけを別の位置へ移す働きで、Posner（1980）の空間的注意研究で扱われました。"
      }
    },
    {
      "@type": "Question",
      "name": "周辺で光が点滅した際、反射的に目がそちらへ動いてしまうのを防ぐには？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "突然の光刺激に対して中脳上丘が自動的にサッケードを引き起こそうとする原始的な視覚反射（視覚的捕捉）が働くためです。対策として、中心ターゲットの色や形に意識を置き、周辺の光は見に行かず背景のチラつきとして捉える練習が有効とされます。個人差があり、必ず防げるわけではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "FPSゲーム（VALORANT, Apex Legends, CS2）でどのような効果がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "クロスヘアを敵に合わせている最中に、画面端のミニマップの赤点やキルログの更新、別方向から現れた敵の影に気づく場面を想定した練習です。ゲーム内の成績向上や視野狭窄の解消は保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "球技スポーツ（サッカー、バスケ）や車の運転にも効果がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "このページはスポーツや運転の成績を保証するものではありません。中心を見たまま周辺の変化に気づく課題として、球技の状況把握や日常の視覚的注意を考える練習材料にできます。運転中の視野検査や安全判断の代わりにはなりません。"
      }
    },
    {
      "@type": "Question",
      "name": "緊張したり焦ると視野が狭くなる「トンネルビジョン」の原因は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "強い緊張や焦りがあると注意が一点に集中し、周辺への気づきが減ると考えられています。このドリルは中心と周辺を同時に意識する練習ですが、トンネルビジョンの予防や改善を保証するものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのサイズや目との適切な距離はどう設定すべきですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "24〜27インチのモニターなら、目から50〜70cm程度が目安です。画面の端が中心から離れて見える距離にすると、周辺の光に気づく練習になります。見づらい、疲れると感じたら、無理せず距離や明るさを調整してください。"
      }
    },
    {
      "@type": "Question",
      "name": "1日の推奨練習時間と効果的なセッション頻度は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "1セッション60秒を、間に30秒の休憩を挟んで3〜5セット行うのが一つの目安です。集中が途切れたと感じたら無理に続けず、その日は切り上げてください。回数に決まった基準はありません。"
      }
    },
    {
      "@type": "Question",
      "name": "練習中に目の奥の疲労や頭痛を感じた場合の対処法は？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "中心を見続けながら周辺にも注意を向けるため、目や頭が疲れることがあります。すぐにドリルを中断し、目を閉じるか遠くを眺めて休んでください。痛みや不快感が続く場合は使用をやめ、眼科などに相談してください。再開時は速度倍率を下げて負荷を調整できます。"
      }
    }
  ]
};

const guideProps = {
  heading: "周辺視野ピン追従・潜在的空間注意の認知神経科学基準",
  intro: [
    "周辺視野ピン追従は、中央で動く標的を追いながら、画面の外周に短く現れる光刺激を視線を向けずに検知する二重課題型の練習です。中心の追従と周辺への注意配分を同時に行う課題で、注意の向け方を扱う研究を背景にしています（Posner, 1980; Eriksen & St. James, 1986）。",
    "顕在的サッケードの抑制とPosnerの潜在的注意ネットワーク：周辺部に新たな視覚的過渡変化（ピンの点滅）が発生した際、中脳上丘（Superior Colliculus）は反射的に視線を光の発生源へ飛ばそうとする弾道サッケード信号を生成します（Findlay & Walker, 1999）。しかし、周辺へ視線を向けると中心の標的追従が途切れてしまいます。前頭眼野（FEF）および後頭頂皮質から構成される背側注意ネットワークは、この不要なサッケード出力を能動的にブレーキ（抑制制御）し、視線を動かさずに意識のビームのみを周辺部へ割り振る『潜在的注意の解離』を成立させます（Posner, 1980）。",
    "視覚的ズームレンズモデル（Eriksen & St. James）と機能的視野（FFOV）の伸縮：Eriksen & St. James（1986）が提唱した注意のズームレンズモデルによれば、人間の視覚的注意野はカメラのズームレンズのように、狭い高解像度の中心領域から広い低解像度の全視野領域まで連続的に調節可能です。強い緊張下では注意の範囲が狭まるとされますが、本ドリルはこの考え方を背景に、中心を追いながら周辺にも注意を広げる練習として作られています。訓練による向上は保証されません（Wolfe, 1994; Leigh & Zee, 2015）。",
    "ゲームや球技への応用を考える場合も、結果は画面、入力機器、経験、競技環境に左右されます。この課題は、中心の追従を保ちながら周辺の変化に気づく練習として使い、実際の競技や運転の能力を測る検査とは区別してください。"
  ],
  benchmarks: {
    title: "周辺視野ピン練習の段階の目安",
    headers: ["練習段階", "周辺ピンに気づく感覚", "視線の動き", "練習時の読み方"],
    rows: [
      ["段階 5", "ほとんど気づけている", "中心から離れることがほぼない", "速度倍率を上げる、または周辺の位置を増やして負荷を調整する段階"],
      ["段階 4", "多くのピンに気づける", "ときどき視線が動く", "視線を動かした場面を振り返り、中心の色や形に意識を置き直す"],
      ["段階 3", "半分程度に気づける", "遠い位置のピンで視線が動きやすい", "速度倍率1.0x前後で、ピンを見に行かない練習を繰り返す"],
      ["段階 2", "気づけない場面が目立つ", "中心の追従が途切れやすい", "速度倍率を下げ、中心の追従だけを安定させる"],
      ["段階 1", "ほとんど気づけない", "ピンのたびに視線が動く", "0.5x〜1.0xから始め、短いセッションで慣れる"]
    ],
    note: "段階は SkillDrills が設けた練習用の目安で、人口統計や医療的な基準ではありません。ブラウザは視線を測定できないため、気づけた感覚と視線の動きは自分で判断する目安です。"
  },
  techniques: {
    title: "中心窩ロックと広域周辺視野検知を両立する4大テクニック",
    items: [
      {
        name: "中心視の固定と反射的な視線移動の抑制",
        desc: "周辺部に光が点滅した際、眼球を動かして確認しようとする本能的反射を大脳皮質で強力に抑え込みます。Findlay & Walker（1999）のモデルに基づき、視線は中心のオーブの中心核に釘付けにしたまま、手元のキー入力だけで応答します。",
        tips: "『光を見た瞬間に負け』と意識し、視線が周辺ピンへ1ピクセルも飛びつかないよう自己制御してください。"
      },
      {
        name: "注意のズームレンズ広角開放プロトコル (Zoom-Lens Field Dilation)",
        desc: "Eriksen & St. James（1986）のズームレンズ理論を活用し、意識のフォーカスを中央の点だけに絞り込まず、モニターの四隅の外枠まで均一に注意の膜を広げるイメージを持ちます。",
        tips: "画面の中央を『点』で見るのではなく、画面全体を『空間の膜』として知覚する感覚を養いましょう。"
      },
      {
        name: "網膜周辺部・杆体細胞のチラつき知覚信頼 (Rod Photoreceptor Transient Reliance)",
        desc: "網膜の周辺部には色や微細な文字を判別する錐体細胞は少ないですが、明暗の変化や動きに極めて敏感な杆体細胞が高密度に分布しています（Wolfe, 1994）。光の形を確認しようとせず、周辺視野のチラつきを検知した瞬間に反射入力します。",
        tips: "形や文字を読もうとするとサッケードが起きます。『白く光った』という感覚だけでボタンを押してください。"
      },
      {
        name: "呼吸調律による交感神経性視野狭窄の解除 (Autonomic Field Stabilization)",
        desc: "焦りや力みで息を止めると、交感神経が急激に興奮して機能的視野（FFOV）が物理的に狭まります。Leigh & Zee（2015）の知見に基づき、深い腹式呼吸を続けながらリラックスした覚醒状態を維持します。",
        tips: "肩の力を抜き、ゆっくりと息を吐き出しながらセッションに臨むと、視野の端が自然と明るく見えてきます。"
      }
    ]
  },
  steps: [
    "モニターから約50〜70cmの距離を取り、画面全体が左右視野角内に収まる姿勢を作ります。",
    "セッション時間（30秒〜120秒）と速度倍率（0.5x〜9.0x）を設定し、ドリルを開始します。",
    "中心で移動するターゲットを中心窩で滑らかにロックし続けます。",
    "視野の隅や外周部にパルスピンが点滅しても絶対に目を向けず、周辺視野で感知してキーを押します。",
    "セッション完了後、周辺ピン検知率と平均反応時間を分析し、段階的に難易度を上げます。"
  ],
  audience: "中心を見たまま周辺の変化に気づく練習をしたいゲーム利用者、スポーツ選手、視覚的注意の向け方を振り返りたいユーザー。医療検査や運転能力の判定には使いません。",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/ja/drills/visual-tracking/constant-slow-pursuit", label: "低速追従眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/directional-chaos-pursuit", label: "方向変化の視線追従テスト" },
    { href: "/ja/drills/visual-tracking/dynamic-evasion-pursuit", label: "反応的な動体追従訓練" },
    { href: "/ja/drills/visual-tracking/ghosting-suppress-pursuit", label: "残像を抑える固視訓練" },
    { href: "/ja/drills/visual-tracking/infinity-pursuit", label: "8の字眼球運動トレーニング" },
    { href: "/ja/drills/visual-tracking/momentum-teleport-pursuit", label: "瞬間移動標的の視線再捕捉" }
  ]
};

export default function JapanesePeripheralPingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient
        copy={{
          title: "周辺視野トレーニング：中心を見たまま周辺の光に気づく",
          subtitle: "中心の追従を維持しながら視野周辺の光刺激を検知する二重課題",
          description: "中心の動く標的を追いながら、周辺に短く現れる光刺激に気づいて反応する二重課題の練習です。無料でブラウザから利用できます。"
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
