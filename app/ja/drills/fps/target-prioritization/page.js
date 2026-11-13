import TargetPrioritizationClient from '@/app/drills/fps/target-prioritization/TargetPrioritizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "ターゲット優先順位の判断練習｜脅威判定・撃たない判断 | SkillDrills",
  description: "無料のターゲット優先順位の判断練習。動き回る赤（高脅威）・黄（中脅威）の中から赤を先に撃ち、緑（味方）は撃たない。脅威判定と撃たない判断をインストール不要のブラウザ上でマウスを使って練習します。",
  keywords: [
    "ターゲット優先順位の判断",
    "ターゲット優先順位 練習",
    "脅威判定",
    "撃たない判断",
    "ターゲット選択",
    "ターゲット優先度",
    "脅威判定 練習",
    "索敵 射撃判断 練習",
    "プリエイム"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/target-prioritization",
    languages: getAlternateLanguages('/drills/fps/target-prioritization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "ターゲット優先順位の判断練習｜脅威判定・撃たない判断 | SkillDrills",
    description: "無料のターゲット優先順位の判断練習。動き回る赤（高脅威）・黄（中脅威）の中から赤を先に撃ち、緑（味方）は撃たない。脅威判定と撃たない判断をインストール不要のブラウザ上でマウスを使って練習します。",
    url: "https://skilldrills.online/ja/drills/fps/target-prioritization",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "ターゲット優先順位の判断練習｜脅威判定・撃たない判断 | SkillDrills",
    description: "無料のターゲット優先順位の判断練習。動き回る赤（高脅威）・黄（中脅威）の中から赤を先に撃ち、緑（味方）は撃たない。脅威判定と撃たない判断をインストール不要のブラウザ上でマウスを使って練習します。",
  },
};

export default function TargetPrioritizationJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "ターゲット優先順位の判断練習", "item": "https://skilldrills.online/ja/drills/fps/target-prioritization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "ターゲット優先順位の判断練習 - 脅威判定・撃たない判断",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "動き回る赤・黄・緑のターゲットで脅威判定、味方誤射の抑制、優先ターゲットの撃破を練習する無料ブラウザFPSドリル。",
    "genre": "FPS Training / Target Prioritization",
    "url": "https://skilldrills.online/ja/drills/fps/target-prioritization",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ターゲット優先順位の判断練習 - 脅威判定・撃たない判断",
    "url": "https://skilldrills.online/ja/drills/fps/target-prioritization",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "動き回る赤・黄・緑のターゲットで脅威判定、味方誤射の抑制、優先ターゲットの撃破を練習する無料ブラウザFPSドリル。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "ターゲット優先順位の判断練習 - 脅威判定・撃たない判断",
    "url": "https://skilldrills.online/ja/drills/fps/target-prioritization",
    "description": "動き回る赤・黄・緑のターゲットで脅威判定、味方誤射の抑制、優先ターゲットの撃破を練習する無料ブラウザFPSドリル。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Prioritization"],
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
        "name": "競技FPSにおける「ターゲット優先度（Target Prioritization）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ターゲット優先度とは、画面上に複数の敵やオブジェクトが同時に出現した際、緊急度・危険度・役割を瞬時に評価し、最も高い脅威から順に射撃目標を選択する認知的判断プロセスです。"
        }
      },
      {
        "@type": "Question",
        "name": "このターゲット優先順位の判断練習はどう進みますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "開始するとフルスクリーンとポインターロックが有効になり、45秒のタイマーで始まります。画面には同時に2〜4個のターゲットが動き回り、壁で跳ね返ります。赤（高脅威）は100点、黄（中脅威）は50点にコンボ倍率とレベル倍率が掛かり、命中ごとに時間が2秒延長されます（最大60秒）。黄は一定時間が経つと赤に変わり、緑（味方）は撃ってはいけず約3秒で消えます。赤が画面に残っている間に黄を撃つと優先順位ミスとなり、得点なしでコンボがリセットされます。緑への誤射と外しもコンボをリセットし、ミスごとに1秒減ります。1400点ごとにレベルが上がり、ターゲット数・速度・赤の割合が増えます。"
        }
      },
      {
        "@type": "Question",
        "name": "集団戦でパニック射撃を起こして誤った目標を撃ってしまうのはなぜですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "見える情報が多く緊張が高いと、撃つべきでない瞬間にクリックを止めにくくなるためです。その結果、最も危険な敵ではなく、近いものや大きく動いたものに先に反応しがちです。"
        }
      },
      {
        "@type": "Question",
        "name": "戦術シューターにおける「Go/No-Go」認知パラダイムとは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Go/No-Go課題とは、特定の刺激（敵）に対しては迅速に行動を起こし（Go）、別の刺激（味方やデコイ）に対しては射撃衝動を即座に停止する（No-Go）古典的な課題です。実戦での誤射防止と冷静なターゲット選択の基礎となります。"
        }
      },
      {
        "@type": "Question",
        "name": "FPSにおける停止信号反応時間（SSRT: Stop-Signal Reaction Time）とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SSRTとは、すでに準備または開始された運動動作（マウスクリックなど）を途中でキャンセルするのに要する潜時です。Logan & Cowan（1984）のレースモデルに基づき、SSRTが短いほど直前の状況変化に応じて射撃を早く取り消せます。このドリルはSSRTを直接測定するものではなく、緑の味方を撃たない習慣を練習するためのものです。"
        }
      },
      {
        "@type": "Question",
        "name": "複数の敵がサイトに入ってきたとき、脅威の順番はどう決めますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "よく使われる目安は①自分にクロスヘアを向けている敵、②射撃中の敵やエントリー役、③スキルを使っているサポート役の順です。状況によって変わりますが、このドリルでは赤→黄の順に固定して判断の習慣をシンプルに練習します。"
        }
      },
      {
        "@type": "Question",
        "name": "認知視覚科学における「妨害刺激抑制（Distractor Suppression）」とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "注意を必要としないデコイや味方、環境エフェクトなどの非脅威の視覚シグナルを無視する働きです。これにより注意を本当の脅威に集中させやすくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "VALORANTやCS2で味方やデコイを誤射するとラウンド勝率にどう影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "誤射は弾薬と時間を浪費するだけでなく、リコイルや次弾ディレイを発生させて本当の脅威への反撃が遅れる原因になります。1vXのように一発が重要な場面ほど損失が大きくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "マウス感度はターゲット選択と脅威切り替えにどう影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "極端に高すぎる感度は微細なフリック停止と抑制ブレーキを困難にし、低すぎる感度は遠くの優先目標へのフリックを遅らせます。自身が正確にフリックをピタリと停止できる適正感度を見つけることが重要です。"
        }
      },
      {
        "@type": "Question",
        "name": "アドレナリンの高まりは戦術的判断スピードをなぜ低下させるのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "強い緊張は「トンネルビジョン（視野狭窄）」を起こし、周辺の状況把握が遅れるため、確認せずに撃つパニック射撃につながりやすくなります。"
        }
      },
      {
        "@type": "Question",
        "name": "ターゲット優先度ドリルはどのくらいの頻度で練習すべきですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "決まった正解はありませんが、1回10〜15分ほど短く行い、同じ端末で命中率と誤射の回数を比べる使い方をおすすめします。疲れてくると記録がぶれるため、長時間よりも短く頻繁に行うほうが向いています。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "ターゲット優先度と脅威度判定の練習ステップ",
    "description": "迅速な脅威判定、妨害刺激抑制、射撃衝動コントロールを習得するための4段階トレーニング手順。",
        "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "入力センシビリティの統一",
        "text": "セッション設定で普段のゲーム内感度とDPIを一致させ、マッスルメモリーの定着に役立てます。",
        "url": "https://skilldrills.online/ja/drills/fps/target-prioritization#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "最優先の赤（高脅威）ターゲットの瞬時特定",
        "text": "出現エリア全体を見渡し、制限時間内に赤ターゲットを捉えて最優先でフリック撃破します。",
        "url": "https://skilldrills.online/ja/drills/fps/target-prioritization#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "中脅威（黄）ターゲットへの切り替え",
        "text": "高脅威の赤を排除した直後、赤へ昇格する前に黄ターゲットへ素早くエイムをシフトして処理します。",
        "url": "https://skilldrills.online/ja/drills/fps/target-prioritization#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "味方（緑）ユニットへの射撃抑制",
        "text": "緑の味方ユニットに対しては運動抑制を働かせて射撃を完全にホールドし、コンボとタイマーを守ります。",
        "url": "https://skilldrills.online/ja/drills/fps/target-prioritization#step-4"
      }
    ]
  };

  const targetPrioritizationGuide = {
    heading: "ターゲット優先順位の判断練習ガイド：脅威判定と撃たない判断",
    subtitle: "乱戦時の脅威評価、妨害刺激の抑制、射撃の抑制を練習する方法",
    intro: [
      "ターゲット優先順位の判断練習は、複数の敵が見える場面で最も危険な相手を先に選び、撃たない対象へのクリックを止める練習です。このドリルでは動き回る赤（高脅威）を先に、黄（中脅威）を次に撃ち、緑（味方）は撃ちません。VALORANT・CS2のような乱戦で必要な脅威判定の習慣づくりに使えます。",
      "運動抑制と意思決定制御の神経基盤は、Logan and Cowan（1984）のストップシグナルパラダイムによって確立されました。彼らの『競馬モデル（Horse-Race Model）』は、行動実行プロセス（Go）と行動抑制プロセス（Stop）が前頭葉—大脳基底核ネットワークにおいて互いに独立して速度を競い合っていることを実証しました。そのため、敵味方の確認が終わる前にクリックが出てしまうパニック射撃が起こりやすくなります。",
      "視覚的フィルタリングの生体力学的メカニズムは、Donald E. Broadbent（1958）およびAnne Treisman（1964）の選択的注意フィルター／減衰モデルによって定式化されました。複数の視覚刺激が網膜の処理リソースを巡って競合する際、脳はトップダウンの注意ゲーティング機構（Posner & Petersen, 1990）を作動させ、非脅威的な周辺運動を抑制しつつ、最も差し迫った脅威ベクトルへと中心窩の注意を集中させます。",
      "本ドリルは、F.C. Donders（1868）のGo/No-Go弁別反応時間モデルとperformance.now()高精度デジタルクロノメトリ（Woods et al., 2015）を統合し、マウス操作と時間制限下での判断を同時に練習できるようにしています。",
      "測定方法とハードウェア遅延について：すべての判定イベントはブラウザのperformance.now()高解像度クロックを用いて端末内でのみミリ秒単位で記録され、外部サーバーへのスコア送信は一切行われません。ブラウザタイマーはSpectre対策により約1ms単位に丸められており、ディスプレイは垂直走査周波数に応じて視覚フレームを量子化します（60Hzで約16.7ms、144Hzで6.9ms、240Hzで4.1ms、Woods et al., 2015）。マウスのポーリングレートは125Hzで約8ms、1000Hzで約1msの遅延差を生じさせます。5ms未満の差異は測定ノイズとして扱い、同一のハードウェア環境で継続的に自己記録を比較してください。"
    ],
    benchmarks: {
      title: "結果画面の指標の読み方",
      headers: ["指標", "ドリルでの数え方", "意味", "伸ばし方"],
      rows: [
        ["命中率", "（赤＋黄の命中）÷ 全クリック", "正しい順番で脅威を処理できた割合", "同じ端末で自己記録と比較"],
        ["撃破脅威数", "赤・黄ターゲットの命中数", "時間内に処理できた脅威の量", "コンボを切らさずに増やす"],
        ["誤射・優先順位ミス", "緑への射撃、赤が残っている間の黄への射撃", "撃たない判断と脅威判定の失敗", "まず赤を確認する習慣"],
        ["最大コンボ・最高レベル", "ミスなしで続いた命中数、1400点ごとに1レベル", "判断の安定度と到達難易度", "速さよりミスを減らすことを優先"]
      ],
      note: "この表はドリルが実際に記録する指標を説明したもので、ランクやティア、ユーザー統計とは関係ありません。"
    },
    techniques: {
      title: "ターゲット優先度を高めるための科学的実践テクニック",
      items: [
        {
          name: "Go/No-Go 射撃抑制の練習",
          desc: "敵と味方の色識別を反射的に行い、緑ユニットを捉えた瞬間に人差し指のトリガー運動を急停止させるブレーキ制御を体得します（Logan & Cowan, 1984）。",
          tips: "緑ユニットが見えたら無理にフリックせず、照準を通過させるだけでクリックしない訓練を繰り返します。"
        },
        {
          name: "視野全体の脅威トリアージ（優先度選別）",
          desc: "視界内の目標を単一で追わず、赤（緊急）→黄（準緊急）の順序を無意識に構築する前注意フィルタを活用します（Treisman & Gelade, 1980）。",
          tips: "赤ターゲットが残っている間は、どんなに近くに黄や緑があっても赤以外にクロスヘアを動かさない規律を保ちます。"
        },
        {
          name: "妨害刺激（デコイ・味方）のアクティブ抑制",
          desc: "視覚的ノイズを脳内で能動的に無視するフィルタリング能力を高め、注意リソースの浪費を防ぎます（Posner, 1990）。",
          tips: "味方や無害なオブジェクトの動きに視線が引っ張られそうになったら、深呼吸して中央視野の焦点を保ちます。"
        },
        {
          name: "終末制動と素早いターゲット移行",
          desc: "赤ターゲット撃破後、マウスパッドの摩擦を活用して余計なオーバーシュートなく次の黄色目標へ鋭くフリックします。",
          tips: "撃った瞬間に、視線を次の赤または黄のターゲットへ先に移します。"
        }
      ]
    },
    steps: [
      "感度設定を確認し、ポインターロックを有効化してドリルを開始します。",
      "出現するターゲット群の中から、最優先の「赤（高脅威）」を瞬時に見つけ出します。",
      "赤ターゲットを素早く撃って+100点（時間+2秒・最大60秒）を獲得します。",
      "赤がいなくなったら「黄（中脅威）」を処理し、赤への昇格を防ぎます。赤が残っている間に黄を撃つと優先順位ミスです。",
      "「緑（味方）」への射撃は絶対に控え、高い命中率とコンボ倍率を維持しましょう。"
    ],
    audience: "VALORANT、CS2、Apex Legends、Overwatch 2などで、集団戦の混乱下でも冷静に優先ターゲットを識別・撃破したいすべての競技FPSプレイヤー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'green2003', 'donders1969', 'treisman1980', 'logan1984'),
    related: [
      { href: "/ja/drills/fps/target-acquisition", label: "ターゲット捕捉 エイム練習" },
      { href: "/ja/drills/fps/target-switching-swarm", label: "ターゲット スイッチング エイム練習" },
      { href: "/ja/drills/fps/vertical-air-track", label: "垂直エイム トラッキング練習" },
      { href: "/ja/drills/fps/strafe-tracking", label: "ストレイフ トラッキング練習" },
      { href: "/ja/drills/fps/flick-shot-training", label: "フリックショット エイム練習" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <TargetPrioritizationClient
        copy={{
          h1Keyword: "ターゲット優先順位の判断",
          h1Suffix: " - 脅威判定・撃たない判断の練習",
          subtitle: "複数の敵から優先目標を選び、撃たない判断をブラウザで測定・練習できます。",
          statScore: "スコア",
          statTime: "残り時間",
          statAccuracy: "命中率",
          statBestScore: "自己ベスト",
          statThreatsCleared: "撃破脅威数",
          statMaxCombo: "最大コンボ",
          statPeakLevel: "最高レベル",
          startTitle: "ターゲット優先順位の判断",
          startSubtitle: "脅威評価 & 認知フィルタリング • エンドレス難易度進行",
          getReady: "準備完了",
          toggleFlash: "ミスフラッシュ切替",
          toggleSound: "効果音切替",
          pausedTitle: "一時停止中",
          pausedSubtitle: "クリックして再開 — カーソルロックが再適用されます",
          stageCaption: "最優先の赤ターゲットを即座に撃破し、次に黄ターゲットを排除。味方（緑）への誤射は厳禁です。",
          rulesTitle: "ドリル手順 & スコアリングシステム",
          rulesItems: [
            { num: "1", text: "高脅威ターゲット", highlight: "赤 (+100点 / +2秒・最大60秒)", result: "最優先で撃破" },
            { num: "2", text: "中脅威ターゲット", highlight: "黄 (+50点 / +2秒)", result: "赤がいない時のみ得点、時間経過で赤へ昇格" },
            { num: "3", text: "味方ユニット", highlight: "緑 (射撃禁止)", result: "誤射・優先順位ミス・外しでコンボリセット（-1秒）" },
            { num: "4", text: "レベル進行", highlight: "+1 / 1400点", result: "スポーン密度・速度の継続増加" }
          ],
          aboutTitle: "ターゲット優先順位の判断練習について",
          aboutHeading: "ターゲット優先度（Target Prioritization）とは？",
          aboutText: "ターゲット優先度とは、視界内の複数の目標から脅威度や役割に基づいて瞬時に撃つべき敵を選択し、同時に味方や不要なオブジェクトへの射撃を抑制する能力です。開始した動作を途中で止める過程は、動作を始める過程と競争するように別々に進むため（Logan & Cowan, 1984）、撃つことより撃たないことのほうが難しくなります。このドリルは赤→黄の順番と緑への射撃禁止ルールで、その判断を繰り返し練習します。"
        }}
      />
      <DrillGuide guide={targetPrioritizationGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
