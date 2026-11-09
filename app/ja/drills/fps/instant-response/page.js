import InstantResponseClient from '@/app/drills/fps/instant-response/InstantResponseClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "FPS反応速度測定｜クリック反応をms表示 | SkillDrills",
  description: "FPS反応速度測定：画面中央の的が緑に光った瞬間にクリックし、クリック反応をms表示。ランダムな待機とフェイントでヤマ張りを防ぐ無料ブラウザドリル。マウス必須。",
  keywords: [
    "FPS 反応速度 測定",
    "fps 反応速度",
    "fps 反応速度 平均",
    "クリック反応",
    "クリック 反応速度",
    "置きエイム 反応",
    "VALORANT 反応速度",
    "CS2 反応速度"
  ],
  alternates: {
    canonical: "https://skilldrills.online/ja/drills/fps/instant-response",
    languages: getAlternateLanguages('/drills/fps/instant-response'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "FPS反応速度測定｜クリック反応をms表示 | SkillDrills",
    description: "FPS反応速度測定：中央の的が緑に光った瞬間のクリック反応をmsで記録。置きエイムの反応練習に使える無料ブラウザドリル。",
    url: "https://skilldrills.online/ja/drills/fps/instant-response",
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "FPS反応速度測定｜クリック反応をms表示 | SkillDrills",
    description: "FPS反応速度測定：中央の的が緑に光った瞬間のクリック反応をmsで記録。置きエイムの反応練習に使える無料ブラウザドリル。",
  },
};

export default function InstantResponseJaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
      { "@type": "ListItem", "position": 2, "name": "FPSエイム練習", "item": "https://skilldrills.online/ja/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "FPS反応速度測定", "item": "https://skilldrills.online/ja/drills/fps/instant-response" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
    "name": "FPS反応速度測定",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "中央の的が光ってからクリックするまでの時間をミリ秒単位で記録する無料ブラウザのFPS反応速度測定ドリル。",
    "genre": "FPS Training / Reaction Speed",
    "url": "https://skilldrills.online/ja/drills/fps/instant-response",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FPS反応速度測定",
    "url": "https://skilldrills.online/ja/drills/fps/instant-response",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "ブラウザで動くFPS反応速度測定。ランダムな待機後に緑に光る的をクリックし、中盤レベルから出るフェイントには反応しない練習です。"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "FPS反応速度測定",
    "url": "https://skilldrills.online/ja/drills/fps/instant-response",
    "description": "中央の的が光ってからクリックするまでの時間をミリ秒単位で記録する無料ブラウザのFPS反応速度測定ドリル。",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reaction Trainer", "Aim Trainer"],
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
        "name": "FPSにおける反応速度（リアクションタイム）とは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "画面上に敵が出現してからマウスをクリックするまでの時間差（ミリ秒）です。網膜での光刺激受容、視神経伝達、視覚野および運動野での情報処理、運動ニューロン伝達、指のスイッチ押下までの神経筋全行程を含みます。"
        }
      },
      {
        "@type": "Question",
        "name": "反応速度の目安はどのくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "一般成人の単純視覚反応速度は220〜260ms程度とされます。高リフレッシュレート環境（144Hz〜360Hz）で練習を重ねると、この練習画面での記録が短くなることがあります。数値は目安であり、個人差や機器の遅延があります。"
        }
      },
      {
        "@type": "Question",
        "name": "反応速度はトレーニングによって短縮できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ある程度は可能です。生来の神経伝達速度そのものは大きく変わりませんが、練習で判断の迷いが減ると、この練習画面での反応時間が短くなることがあります。短縮幅には個人差があります。"
        }
      },
      {
        "@type": "Question",
        "name": "単純反応時間と選択反応時間の違いは何ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "1868年にドンデルスが提唱した分類で、単一の刺激に対して単一の決まった動作を行うのが単純反応時間（Type A）です。複数の刺激を識別して判断を挟む選択反応時間（Type B）は、ヒックの法則に従って判断遅延が加わります。"
        }
      },
      {
        "@type": "Question",
        "name": "人間の視覚反応速度の生物学的限界は何ミリ秒ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "光を見てクリックするまでには目・脳・指の筋肉を通る処理時間が必要なため、予測なしで100msより速い記録はまれです。このドリルでそれより速い記録が頻繁に出る場合はヤマ張りを疑ってください。記録には機器の遅延も含まれます。"
        }
      },
      {
        "@type": "Question",
        "name": "モニターのリフレッシュレートやマウスポーリングレートは影響しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "影響します。60Hzモニターのフレーム表示間隔は約16.7msですが、240Hzでは約4.16msとなりハードウェア遅延が12.5ms短縮されます。また、1000Hzのマウスは1msごとに座標更新を行うため、入力ジッターが最小限に抑えられます (Woods et al., 2015)。"
        }
      },
      {
        "@type": "Question",
        "name": "早期射撃（ヤマ張り・プリファイア）はなぜ減点されるのですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "視覚認知を待たずにタイミング予測だけでクリックすると、実戦で敵のフェイントや飛び出しのタイミングのズレに対応できなくなります。本ドリルではランダムな待機時間と（中盤レベルから）薄いフェイント光を導入し、確実な視認後クリックを徹底させています。"
        }
      },
      {
        "@type": "Question",
        "name": "睡眠不足や疲労は反応速度にどれほど悪影響を及ぼしますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "睡眠不足や疲労は反応時間を長くすることがあります。疲れているときの記録は、普段の記録と分けて比較してください。"
        }
      },
      {
        "@type": "Question",
        "name": "VALORANTやCS2の「置きエイム」で勝つためのコツは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "角から飛び出してくる敵には「飛び出し側有利（Peeker's Advantage）」が働くため、自分の反応速度に合わせてクロスヘアを壁から少し離して置く（オフセット配置）ことが勝率を安定させる極意です。"
        }
      },
      {
        "@type": "Question",
        "name": "試合前の最も効果的な反射神経ウォーミングアップは？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "指先と手首の軽いストレッチ3分、本ドリルでの単純反射刺激ウォームアップ5分、その後の実戦マイクロフリック2分という10分間のルーティンが一例です。"
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "FPS反応速度の正確な測定・訓練方法",
    "description": "視覚反応速度とトリガー反射を正確に測定・強化するステップバイステップ手順。",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "感度設定とポインタロックの固定",
        "text": "セッション設定でゲーム感度を合わせ、「ドリル開始」をクリックしてPointer Lockを有効化します。"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "中心レティクルへの視線固定と脱力",
        "text": "前腕の余計な筋緊張を抜き、中心の照準レティクルへ集中した柔らかい視線を置きます。"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "トリガースイッチへの指先プリロード",
        "text": "人差し指をクリックボタンの作動直前位置に軽く触れさせ、キーストロークの空走距離をゼロにします。"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "真のフラッシュ視認時のみ即座にクリック",
        "text": "ランダムな待機時間後の緑色点灯を捉えた瞬間にクリックし、薄いフェイント光には動じない自制心を保ちます。"
      }
    ]
  };

  const instantResponseGuide = {
    heading: "FPS反応速度測定とクリック反応ガイド",
    intro: [
      "FPS反応速度測定は、画面中央の的が緑に光ってからクリックするまでの時間を測る練習です。このドリルはクリック反応をms表示し、ランダムな待機とフェイントでヤマ張りを防ぎながら、VALORANT・CS2の置きエイムに必要な反応を確認します。",
      "精神時間測定学の基礎はオランダの眼科医フランシスクス・ドンデルス (1868) の減算法によって確立されました。単一の刺激に対して反射的に指を動かす「単純反応時間（Type A）」は、人間の大脳皮質および中枢神経系が持つ純粋な情報伝達帯域幅をダイレクトに反映します。",
      "本ドリルはHTML5 Pointer Lock API配下でブラウザの performance.now() 高精度タイムスタンプを用いて計測されます (Woods et al., 2015)。的は画面中央に固定され照準も中央から始まるため、フリック練習と違い大きな移動なしでクリック反応だけを記録します。ランダム待機時間とフェイント刺激でヤマ張り（プリファイア）を減点します。記録にはモニター・マウス・ブラウザの遅延が含まれます。",
      "測定仕様について：すべてのイベントはお使いの端末の performance.now() 高分解能クロックによって完全にローカルで記録され、外部へスコアが送信されることはありません。ブラウザのタイマー解像度制限（Spectre対策で通常約1ms）およびディスプレイのリフレッシュ間隔（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms）による量子化誤差が生じるため、5ms未満の微小な差異は測定誤差として扱い、他者の環境との比較よりも同一環境での自己記録の推移を重視してください (Woods et al., 2015)。"
    ],
    benchmarks: {
      title: "クリック反応時間別のSkillDrills練習ゾーン",
      headers: ["SkillDrills練習ゾーン", "ドリル計測値 (ms)", "1ヒットの基本点（コンボ・レベル倍率前）", "メモ"],
      rows: [
        ["ゾーン A", "≤ 150 ms", "100 + スピードボーナス 150", "ボーナス最大。頻発する場合はヤマ張りでないか確認"],
        ["ゾーン B", "150 – 250 ms", "100 + 約107〜150", "ボーナスが大きく残るゾーン"],
        ["ゾーン C", "250 – 350 ms", "100 + 約64〜107", "ボーナスが半分前後まで減るゾーン"],
        ["ゾーン D", "350 – 500 ms", "100 + 0〜64", "ボーナスが0に近づくゾーン"],
        ["ゾーン E", "> 500 ms", "100（ボーナスなし）", "レベル1の表示時間は約550msで、レベルが上がるほど短くなりタイムアウトになります"]
      ],
      note: "この表はドリルの得点ルールから導いたSkillDrillsの練習ゾーンです。研究上の基準値やユーザーデータではなく、計測値にはモニター・マウス・ブラウザの遅延が含まれます。"
    },
    techniques: {
      title: "トリガー反応速度を極限まで高めるための実践プロトコル",
      items: [
        {
          name: "視線集中と中心視野アンカー",
          desc: "画面周辺を漫然と眺めるのではなく、刺激が現れる中央のレティクルへ視線をピンポイントで集中させます。刺激が出る位置に前もって注意を向けると反応が速くなりうるという注意研究（Posner系）があります。",
          tips: "目のピントをガチガチに固めず、リラックスした状態で中心を見つめるのがコツです。"
        },
        {
          name: "人差し指のプリトラベル（遊び）除去",
          desc: "クリックする前に人差し指をマウスマイクロスイッチの作動点ギリギリまであらかじめ軽く押し当てておきます。指の空走距離をなくすと、クリックにかかる時間を縮める助けになります。",
          tips: "前腕全体に力を入れると逆に初動が遅れるため、指先の第1関節のみを脱力して準備してください。"
        },
        {
          name: "ハードウェア遅延の徹底排除",
          desc: "高リフレッシュレートモニター（144Hz〜360Hz）を使用し、マウスポーリングレートを1000Hz以上に設定、垂直同期（V-Sync）をオフにしてください。ゲーム内のNVIDIA ReflexやAMD Anti-Lagを有効化してレンダリング待ちをゼロにします。",
          tips: "ディスプレイのスケーリング設定をGPUではなくディスプレイ側に任せることで入力遅延を減らせる場合があります。"
        },
        {
          name: "呼吸調整による覚醒水準のコントロール",
          desc: "過度の緊張はフェイントへの誤爆（早期射撃）を引き起こします。ヤーキーズ・ドットソンの法則に基づき、鼻からの深呼吸で自律神経を整え、最適な覚醒ゾーンを維持してください。",
          tips: "光る前に指が勝手に動いてしまう場合は、一度深呼吸して焦りをリセットしましょう。"
        }
      ]
    },
    steps: [
      "セッション設定でお好みの感度を合わせ、入力座標の均一性を確保します。",
      "「ドリル開始」をクリックして全画面表示とPointer Lockを有効化します。",
      "中央の照準レティクルへ集中を保ちながら、指先をスイッチ作動点へ軽く構えます。",
      "緑色フラッシュを視認した瞬間に電光石火のクリックを行い、ランダムな待機時間中の早期射撃を抑えます。",
      "命中ごとに2秒加算（最大60秒）、早撃ち・ミス・タイムアウトごとに1秒減少します。残り時間0で終了し、平均反応速度（ms）、命中率、最大コンボ、最高レベルを確認します。"
    ],
    audience: "VALORANTやCS2などで置きエイムの勝率を上げたいプレイヤー、自身の反射神経をミリ秒単位で正確に計測したいゲーマー、そしてクリック反応を練習したいすべてのFPSプレイヤー。",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'donders1969', 'hick1952'),
    related: [
      { href: "/ja/drills/fps/angle-hold-trainer", label: "置きエイム練習 (クロスヘアプレイスメント)" },
      { href: "/ja/drills/fps/flick-shot-training", label: "フリック エイム 練習" },
      { href: "/ja/drills/fps/180-degree-awareness", label: "180度 振り向き 練習" },
      { href: "/ja/drills/visual/reaction-speed/light-reaction", label: "反応速度測定テスト" },
      { href: "/ja/drills/reaction-speed/reflex-training-drill", label: "反射神経トレーニング" }
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
      <InstantResponseClient
        copy={{
          h1Keyword: "FPS反応速度測定",
          h1Suffix: " - クリック反応をms表示",
          subtitle: "視覚反応の遅れ、クリック速度、発砲の規律を計測・練習します",
          statScore: "スコア",
          statTime: "残り時間",
          statAccuracy: "命中率",
          statBestScore: "自己ベスト",
          startTitle: "FPS反応速度測定",
          startSubtitle: "マウス + ポインターロック • 45秒スタート • エンドレス難易度",
          getReady: "準備完了",
          pausedTitle: "一時停止中",
          pausedSubtitle: "クリックして再開 — カーソルロックが再適用されます",
          stageCaption: "中央ターゲットが緑色にフラッシュした瞬間にクリックしてください。フェイントを見極める自制心が求められます。",
          rulesTitle: "ドリル手順 & スコアリングシステム",
          rulesItems: [
            { num: "1", text: "フラッシュ反応命中", highlight: "+100 PTS (+2秒、最大60秒)", result: "×コンボ倍率" },
            { num: "2", text: "スピードボーナス", highlight: "500ms未満ヒット", result: "最大 +150 PTS（150ms以下）" },
            { num: "3", text: "レベル難易度進行", highlight: "+1 レベル / 1400 PTS", result: "適応型露出時間" },
            { num: "4", text: "早期射撃 / ミス", highlight: "フェイント・タイムアウト含む", result: "コンボリセット (-1秒)" }
          ],
          aboutTitle: "FPS反応速度測定について",
          aboutHeading: "FPS反応速度トレーニングとは？"
        }}
      />
      <DrillGuide guide={instantResponseGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
