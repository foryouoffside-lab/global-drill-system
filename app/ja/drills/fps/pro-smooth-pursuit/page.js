import ProSmoothPursuitClient from '@/app/drills/fps/pro-smooth-pursuit/ProSmoothPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "トラッキングエイム練習｜なめらかに追い続ける | SkillDrills",
  description: "無料のトラッキングエイム練習。画面上を曲線で動き続けるターゲットにマウスで照準を乗せ続け、Apex・OW2向けのなめらかな追従をブラウザで練習できます。",
  keywords: [
    "トラッキングエイム練習",
    "トラッキング エイム 練習",
    "トラッキング エイム 練習 ブラウザ",
    "トラッキング エイム 練習 サイト",
    "トラッキング エイム コツ",
    "なめらかな追従",
    "スムーズトラッキング"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit",
    languages: getAlternateLanguages('/drills/fps/pro-smooth-pursuit'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "トラッキングエイム練習｜なめらかに追い続ける | SkillDrills",
    description: "無料のトラッキングエイム練習。画面上を曲線で動き続けるターゲットにマウスで照準を乗せ続け、Apex・OW2向けのなめらかな追従をブラウザで練習できます。",
    url: "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "トラッキングエイム練習｜なめらかに追い続ける | SkillDrills",
    description: "無料のトラッキングエイム練習。画面上を曲線で動き続けるターゲットにマウスで照準を乗せ続け、Apex・OW2向けのなめらかな追従をブラウザで練習できます。",
  },
};

export default function ProSmoothPursuitJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "トラッキングエイム練習", "item": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "トラッキングエイム練習",
    "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "ブラウザで動作する無料スムーズトラッキング練習。リサジュー曲線による滑走性眼球運動と前腕安定化を鍛えます。"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "トラッキングエイム練習",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "不規則な曲線移動に滑らかに照準を同期させる無料ブラウザFPSスムーズトラッキング・エイムドリル。",
    "genre": "FPS Training / Smooth Pursuit Aim",
    "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "トラッキングエイム練習",
    "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit",
    "description": "不規則な曲線移動に滑らかに照準を同期させる無料ブラウザFPSスムーズトラッキング・エイムドリル。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Smooth Pursuit"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "このトラッキングエイム練習はどんなドリルですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "画面上をリサジュー曲線でなめらかに動き続ける円形ターゲットに、マウスで照準を乗せ続けるドリルです。クリックは不要で、照準がターゲットに重なっている時間だけスコアが増えます。"
        }
      },
      {
        "@type": "Question",
        "name": "滑走性眼球運動とサッカード（跳躍運動）の神経学的な違いは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rashbass（1961）の研究により、両者は異なる神経経路で制御されることが証明されています。サッカードは位置のズレに反応する開放ループ運動ですが、滑走性眼球運動はMT/V5野を通じた速度情報（網膜スリップ）によって継続的にフィードバック制御されます（Krauzlis, 2004）。"
        }
      },
      {
        "@type": "Question",
        "name": "トラッキング中にエイムがガクガクと震えてしまう原因は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "前腕や手首の過度な力み、マウスパッドの静摩擦係数の高さ、そして『クロスヘアの点を見つめてしまう癖』が原因です。目標ではなくクロスヘアを見ると、脳が過剰な微修正指令を出し続けて手の震えが生じます。"
        }
      },
      {
        "@type": "Question",
        "name": "中心窩視線の先読み（Foveal Gaze Leading）とは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "照準ではなく、動くターゲットとその進行方向を見る意識のことです。Land & McLeod（2000）は熟練者の視線が次の動作に先行する傾向を報告しており、ターゲットを見て追うと曲線の切り返しに備えやすくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "ApexやOverwatch 2などの高TTKタイトルでなぜ重要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "高TTKのゲームでは敵を倒すまでに数秒間の持続的な射撃が必要です。単発のフリック精度よりも、敵の立体機動（スライディング、ジャンプパッド等）に対して照準を外さない『ダメージアップタイム』が勝敗に影響しやすくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "なぜ練習にリサジュー曲線（Lissajous curve）が使われるのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "リサジュー曲線は直交する正弦波が合成された幾何学軌道です。一定速度の直線運動と異なり、頂点での減速と中心での加速が常に滑らかに変化するため、真の速度追従適応力を養えます。"
        }
      },
      {
        "@type": "Question",
        "name": "モニターのリフレッシュレートやマウスのポーリングレートは影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "影響する場合があります。リフレッシュレートが高いほどフレーム間隔が短く（60Hzで約16.7ms、144Hzで約6.9ms）曲線の動きが細かく表示され、ポーリングレートが高いほど入力の更新も細かくなります。ただしスコア差は機材より練習量や個人差の影響が大きいこともあります。"
        }
      },
      {
        "@type": "Question",
        "name": "滑らかなトラッキングに最適なマウスの持ち方は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "手のひらの基部をマウス後部に適度に預け、指先に余計な力を入れないリラックスしたつかみ持ちやハイブリッド持ちが最適です。肘を回転軸にして腕全体で滑らかにマウスを運びます。"
        }
      },
      {
        "@type": "Question",
        "name": "スムーズトラッキング練習はどのくらいの頻度で行うべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ランク戦前のウォーミングアップとして10〜15分程度がおすすめです。腕が疲れたり手首が痛む場合は休憩してください。"
        }
      },
      {
        "@type": "Question",
        "name": "スコア・コンボ・残り時間はどう計算されますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "照準がターゲットに重なっている間、0.25秒ごとに基本50点（コンボ倍率とレベル倍率を適用）と0.1秒が加算されます（残り時間の上限は60秒）。1秒途切れずに追うとコンボが1上がり、倍率は最大3.0倍です。ターゲットから1秒続けて外れるとコンボが0に戻ります。45秒から始まり、0秒で終了です。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "スムーズトラッキング（滑走性眼球運動）の練習手順",
    "description": "リサジュー曲線の不規則な軌道に照準を滑らかに合わせ続けるステップバイステップ訓練法。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "ゲーム感度を合わせる",
        "text": "ドリル一覧（/drills）の設定でマウス感度倍率を普段のゲームに近づけます。",
        "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "ポインターロックを有効化",
        "text": "開始ボタンを押すとフルスクリーンになり、カウントダウン後にポインターロックがかかります。",
        "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "視線をターゲットの進行方向先端に固定",
        "text": "クロスヘアを見つめるのではなく、移動するターゲットの進行方向エッジに視線を集中させます。",
        "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "腕の脱力を保ち速度を同調させる",
        "text": "肘を支点にリラックスしてマウスを滑らせ、曲線の加減速に合わせて照準を連続同期させます。",
        "url": "https://skilldrills.online/ja/drills/fps/pro-smooth-pursuit#step-4"
      }
    ]
  };

  const copy = {
    h1Keyword: "トラッキングエイム練習",
    h1Suffix: "｜なめらかに追い続ける",
    statScore: "スコア",
    statTime: "残り時間",
    statAccuracy: "トラッキング精度",
    statBestScore: "自己ベスト",
    startTitle: "トラッキングエイム練習",
    startSubtitle: "リサジュー曲線追従 • ポインターロック • エンドレス難易度",
    getReady: "準備完了",
    pausedTitle: "一時停止",
    pausedSubtitle: "クリックして再開（マウスロックが再有効化されます）",
    stageCaption: "画面上を滑らかに周回・振動するリサジュー曲線のターゲットに照準を乗せ続けます。",
    rulesTitle: "トレーニングルール & スコアリング",
    rulesItems: [
      { num: "1", text: "ターゲットに重ねる", highlight: "0.25秒ごと +50 PTS (+0.4s/s)", result: "×コンボ倍率" },
      { num: "2", text: "1秒連続追従", highlight: "コンボ+1・最大 3.0×", result: "最大倍率" },
      { num: "3", text: "レベル難易度進行", highlight: "+1 レベル / 1400 PTS", result: "適応型曲線" },
      { num: "4", text: "オフターゲット", highlight: "1.0秒連続で離脱", result: "コンボリセット" }
    ],
    aboutTitle: "トラッキングエイム練習について",
  };

  const jaGuide = {
    heading: "トラッキングエイム練習ガイド：なめらかな追従のコツ",
    intro: [
      "トラッキングエイム練習は、動くターゲットに照準をなめらかに合わせ続けるトレーニングです。このドリルはリサジュー曲線で動く円形ターゲットを使い、Apex・OW2のような撃ち合いで必要な照準維持を練習し、追従精度（%）として記録します。",
      "滑走性眼球運動の神経基盤はKrauzlis（2004）によって解明されており、内側上側頭野（MST）、前頭眼野（FEF）、視覚運動野（MT/V5）の反復性皮質ループが目標の速度ベクトルをリアルタイムに計算して眼球筋を連続駆動します。この神経回路は受動的に反応するのではなく、標的の速度と位相を予測モデル化して眼球運動系を同期させます。",
      "Cyril Rashbass（1961）の古典的実験では、位置ズレに反応するサッカード（跳躍眼球運動）と速度変化（網膜スリップ）に反応するスムーズパシュートが解剖学的・機能的に独立した神経機構であることが証明されました。力んでフリックしようとしたり、マウスを握りしめすぎるとスムーズパシュート回路が破綻し、不随意の補正サッカードが混入してエイムの目立つカクつき（Aim Stutter）を引き起こします。",
      "本ドリルでは、リサジュー曲線による調和振動座標生成に、中心窩視線の先読み理論（Land & McLeod, 2000）、動的注意視覚の拡張（Green & Bavelier, 2003）、およびブラウザ計測の考え方（Woods et al., 2015）を参考に、前腕の力を抜いて曲線に沿って照準を保つ練習に絞っています。",
      "測定方法とハードウェア遅延について：すべての追従判定はブラウザ内蔵のperformance.now()高精度クロックによってローカル環境でのみ計測され、外部へのデータ送信は一切行われません。ブラウザのタイマーはSpectre対策により約1ms単位で丸められており、モニターの垂直同期はフレームごとに視覚情報を量子化します（60Hzで約16.7ms、144Hzで6.9ms、240Hzで4.1ms、Woods et al., 2015）。マウスのポーリングレートは125Hzで約8ms、1000Hzで約1msの遅延差を生じさせます。5ms未満の差異は測定ノイズとして扱い、同一のハードウェア環境で継続的に自己記録の変化を追跡してください。"
    ],
    benchmarks: {
      title: "トラッキング維持率の目安（SkillDrills練習基準）",
      headers: ["目安", "追従率（%）", "よく見られる状態", "練習のポイント"],
      rows: [
        ["目安1", "85% – 95%+", "曲線の変曲点でも照準がほとんど外れない", "高レベルでも維持率を保つ"],
        ["目安2", "72% – 85%", "軌道の頂点での減速に合わせて追従できる", "中央を通る速い区間で遅れない"],
        ["目安3", "58% – 72%", "直線に近い区間は安定、曲がる瞬間に少し外れる", "頂点の手前で減速する"],
        ["目安4", "42% – 58%", "フリックで追う傾向、力みで震えや行き過ぎ", "握りを緩めて腕全体で動かす"],
        ["目安5", "42%未満", "常にターゲットの後ろを追い、大きな修正フリックを繰り返す", "低レベルで重なり続ける感覚をつかむ"]
      ],
      note: "追従率はセッションのフレームのうち照準がターゲット内にあった割合です。区分はSkillDrillsの練習用の目安で、研究基準やユーザー統計ではありません。"
    },
    techniques: {
      title: "なめらかなトラッキングのための4つのポイント",
      items: [
        {
          name: "中心窩視線の先読み（Foveal Gaze Leading）",
          desc: "クロスヘア自体を見るのをやめ、動くターゲットとその進行方向に視線を置きます（Land & McLeod, 2000）。",
          tips: "エイムがカクついたら息を吐いて力を抜き、ターゲットに意識を戻してください。"
        },
        {
          name: "前腕の脱力と肘支点のストローク",
          desc: "手首を固めて指先だけで追おうとすると拮抗筋が反発して震えが生じます。前腕をマウスパッドに軽く預け、肘から滑らかに旋回させます。",
          tips: "マウスは落とさない程度に軽く持ちます。"
        },
        {
          name: "リサジュー曲線の減速リズム予見",
          desc: "正弦波の物理特性として、軌道の外側頂点では減速し、中央を通過する際は加速します（Krauzlis, 2004）。",
          tips: "動きのリズムを感じ取り、頂点の手前で自然に速度を落とす意識を持ちます。"
        },
        {
          name: "修正サッカードの抑制（慌てて振らない）",
          desc: "照準が少し外れた際に勢いよくマウスを振ると、反対側へ行き過ぎやすくなります。小さな修正で戻しましょう。",
          tips: "急激に振るのではなく、滑らかに速度を上げて自然に目標の輪郭へ照準を戻します。"
        }
      ]
    },
    steps: [
      "/drillsの設定でマウス感度倍率を合わせ、開始ボタンを押します（カウントダウン後にポインターロック）。",
      "画面上をリサジュー軌道で巡回する光るターゲットに視線を合わせます。",
      "肘を支点にリラックスしてマウスを滑らせ、滑走速度を同調させます。",
      "連続追従時間を維持してコンボ倍率を最大3.0倍まで高め、1400点ごとにレベルアップします。",
      "セッション終了後の統計画面で追従精度とオフターゲット時間を確認し、弱点変曲点を把握します。"
    ],
    audience: "Apex Legends、Overwatch 2、The Finals、Warzoneなどで、中距離・近距離の持続射撃時に照準がブレて弾を外してしまうすべてのFPSプレイヤー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/ja/drills/fps/anti-zigzag-movement-trainer", label: "ジグザグ移動 練習 (スライディング追従)" },
      { href: "/ja/drills/fps/anti-strafe-jitter-duel", label: "レレレ撃ち対策" },
      { href: "/ja/drills/fps/strafe-tracking", label: "ストレイフ追いエイム練習" },
      { href: "/ja/drills/fps/flick-shot-training", label: "フリック エイム 練習" },
      { href: "/ja/drills/fps/micro-correction-precision", label: "マイクロフリック 練習" },
      { href: "/ja/drills/visual/reaction-speed/light-reaction", label: "反射神経テスト" }
    ]
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <ProSmoothPursuitClient copy={copy} />
      <RelatedDrills />
      <DrillGuide guide={jaGuide} />
      <DrillFooter />
    </>
  );
}
