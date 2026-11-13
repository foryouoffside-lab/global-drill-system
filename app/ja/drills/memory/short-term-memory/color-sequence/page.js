import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

// ============================================================
// SEO EMPIRICAL RESEARCH FINDINGS — ja-JP (color-sequence)
// PRIMARY DOMESTIC: "サイモンゲーム オンライン" — Core classic Simon memory game query
//                   "色 記憶 ゲーム" — High-demand domestic visual training term
// SECONDARY / LSI:
//                   "順番 記憶 テスト" — Sequence retention test query
//                   "短期記憶 トレーニング" — Short-term memory conditioning
//                   "ワーキングメモリ 訓練" — Working memory capacity search
//                   "視覚記憶 テスト" — Visual memory assessment
//                   "チャンキング 記憶術" — Miller chunking technique
//                   "カラー シーケンス ゲーム" — Color sequence game synonym
//                   "記憶力 テスト 無料" — Free brain test search
//                   "視空間スケッチパッド" — Baddeley visuospatial sketchpad
// WINNER TITLE:     サイモンゲーム – 無料オンライン色と順番の記憶力テスト | SkillDrills (40 chars)
// ============================================================

export const metadata = {
  title: '色の順番記憶ゲーム｜サイモン風 無料 | SkillDrills',
  description: '無料の色の順番記憶ゲーム（サイモン風）。中央の円に1色ずつ光る色の順番を覚え、6色のボタンを同じ順番でタップ。レベル1は3色から始まり、正解するたびに1色ずつ長くなる45秒の短期記憶トレーニングです。',
  keywords: [
    '色の順番記憶ゲーム',
    '色と順番の記憶',
    '色順番記憶',
    '記憶力ゲーム',
    'サイモン風 ゲーム',
    '色 記憶 ゲーム',
    '順番 記憶 テスト',
    '短期記憶 テスト',
    'ワーキングメモリ 訓練',
    '視覚記憶力 ゲーム',
    '視空間スケッチパッド',
    'チャンキング 記憶術',
    '色彩パターン 記憶',
    'サイモンセイズ 無料',
    '脳トレ 記憶力 ゲーム',
    '系列記憶 測定',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: '色の順番記憶ゲーム｜サイモン風 無料 | SkillDrills',
    description: '無料の色の順番記憶ゲーム（サイモン風）。中央の円に1色ずつ光る色の順番を覚え、6色のボタンを同じ順番でタップ。レベル1は3色から始まり、正解するたびに1色ずつ長くなる45秒の短期記憶トレーニングです。',
    url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: '色の順番記憶ゲーム｜サイモン風 無料 | SkillDrills',
    description: '無料の色の順番記憶ゲーム（サイモン風）。中央の円に1色ずつ光る色の順番を覚え、6色のボタンを同じ順番でタップ。レベル1は3色から始まり、正解するたびに1色ずつ長くなる45秒の短期記憶トレーニングです。',
  },
};

const copyJa = {
  title: '色の順番記憶ゲーム',
  subtitle: '光る色の順番を覚えて同じ順序でタップ',
  caption: '中央の円に点灯する色の順番を集中して記憶し、同じ順番でタップして再現。ラウンドごとに長くなるシーケンスに挑戦。',
  statScore: 'スコア',
  statTime: '残り時間',
  statLevel: 'レベル',
  statBestScore: 'ハイスコア',
  rulesTitle: '測定ルール & スコア評価システム',
  rule1Text: 'シーケンス再現',
  rule1Highlight: '+100 PTS',
  rule1Result: '光った色の順番通りに正確にパネルをタップ',
  rule2Text: 'レベルボーナス',
  rule2Highlight: '+10% PTS / レベル',
  rule2Result: 'シーケンスが長くなるほど高得点を獲得',
  rule3Text: 'ミス / 時間切れ',
  rule3Highlight: '-1 レベル',
  rule3Result: 'スコア減少や時間ペナルティなしで再挑戦可能',
  rule4Text: '適応型難易度',
  rule4Highlight: '自動調整',
  rule4Result: 'プレイヤーの能力に合わせてシーケンス長がリアルタイムに変動',
  aboutTitle: '色の順番記憶ゲーム＆視覚ワーキングメモリについて',
  overviewTitle: '色の順番記憶ゲーム（サイモン風）とは？',
  overviewLead: '人間の視覚的ワーキングメモリ（作業記憶）が一度に保持できる情報量は約4項目に制限されており、この限界は対象の複雑さではなく個数によって規定されます（Luck & Vogel, 1997; Cowan, 2001）。次第に長くなるカラーシーケンスは、この限界付近で練習するための課題です。',
  aboutCards: [
    { title: '対象ユーザー', text: '学習効率や集中力を高めたい学生、記憶ゲームで頭を使いたい大人、瞬時の視覚パターン把握を鍛えたいゲーマー。' },
    { title: '向上する能力', text: '短期視覚記憶、ワーキングメモリ保持容量、視空間スケッチパッド（Baddeley & Hitch, 1974）の順次符号化、瞬間的集中力。' },
    { title: 'チャンキング記憶術', text: '個別の色を「赤-青」のように2〜3色のまとまり（チャンク）として圧縮記憶し、4項目の限界を突破する技術（Miller, 1956）。' },
  ],
};

export default function JapaneseColorSequencePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'SkillDrills ホーム', item: 'https://skilldrills.online/ja' },
      { '@type': 'ListItem', position: 2, name: '記憶力トレーニング', item: 'https://skilldrills.online/ja/drills/memory' },
      { '@type': 'ListItem', position: 3, name: '短期記憶', item: 'https://skilldrills.online/ja/drills/memory/short-term-memory' },
      { '@type': 'ListItem', position: 4, name: '色の順番記憶ゲーム', item: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '色の順番記憶ゲーム（サイモン風）',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    dateModified: '2026-11-12',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
    description: '無料のサイモン風・色の順番記憶ゲーム。45秒間、次第に長くなる色の順番を覚えて再現し、視覚ワーキングメモリとチャンキングを練習します。',
    genre: 'Cognitive Training / Visual Working Memory',
    url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence',
    publisher: {
      '@type': 'Organization',
      name: 'SkillDrills',
      url: 'https://skilldrills.online',
    },
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '色の順番記憶ゲーム',
    url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence',
    description: '6色の順番を覚えて同じ順にタップする無料ブラウザゲーム。レベル1は3色、正解ごとに1色ずつ増えます。',
    dateModified: '2026-11-12',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: '色の順番記憶ゲーム',
    url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence',
    description: '中央の円に1色ずつ光る色の順番を覚え、6色のボタンで再現するサイモン風記憶ゲーム。',
    genre: ['Memory Game', 'Brain Training', 'Puzzle'],
    gamePlatform: ['Web Browser', 'Mobile', 'Tablet', 'Desktop'],
    applicationCategory: 'Game',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '色の順番記憶ゲームはどのように遊びますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '1978年発売の電子ゲーム『サイモン（Simon）』と同じ仕組みのサイモン風記憶ゲームです。画面中央の円に色が1つずつ光るので、その順番を覚え、6色のボタンを同じ順番でタップします。レベル1は3色（色の数＝レベル＋2）で、正解するとレベルが1上がり、間違えると1下がります。毎ラウンド新しいランダムな順番が出題され、1セッションは45秒です。',
        },
      },
      {
        '@type': 'Question',
        name: '色の順番を記憶する際、脳のどの機能が鍛えられますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'アラン・バドリー（Baddeley & Hitch, 1974）の作業記憶モデルにおける「視空間スケッチパッド」と「音韻ループ」が連動して鍛えられます。また、前頭前野の実行機能による短期的な情報保持と想起能力が活性化されます。',
        },
      },
      {
        '@type': 'Question',
        name: 'ラック＆ボーゲル（1997）の4項目記憶限界とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'スティーブン・ラックとエドワード・ボーゲルによるNature掲載の実験により、人間の視覚ワーキングメモリは一度に約3〜4個の視覚情報しか保持できないことが証明されました。この実験は同時提示の配列を扱ったものですが、長い色の順番をまとめて覚える工夫（チャンキング）が役立つ理由を説明してくれます。',
        },
      },
      {
        '@type': 'Question',
        name: 'チャンキング（Chunking）記憶法とは何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'チャンキングとは、個別の情報を意味のあるまとまり（塊）として圧縮して記憶する手法です（Miller, 1956）。「赤・青・緑・黄」をバラバラに覚えるのではなく、「赤青」「緑黄」と2つのペアにグループ化することで、脳の記憶負荷を大幅に削減できます。',
        },
      },
      {
        '@type': 'Question',
        name: '従来の4色ではなく6色が使用されている理由は何ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '従来の4色（赤、青、緑、黄）に紫とオレンジを加えた6色構成にすることで、選択肢のエントロピー（情報量）を高め、上級者や成人ユーザーにとってもより挑戦的で高い脳トレ効果が得られるように設計されています。',
        },
      },
      {
        '@type': 'Question',
        name: '間違えたり時間切れになった場合、ペナルティはありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'いいえ、スコアの没収や残り時間の減算はありません。色を間違えるか、8秒以内に次の色をタップしないとレベルが1つ（1色）下がり（最低レベル1）、新しいランダムな順番で再開します。',
        },
      },
      {
        '@type': 'Question',
        name: 'どのくらいのレベルやスコアが高成績の目安ですか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '公式な基準はありません。SkillDrills は利用者データを収集しないため、平均値やパーセンタイルは示していません。レベルLの順番はL＋2色で、正解すると100 ×（1 ＋ 0.1 × レベル）点を獲得します。下の練習帯を目安に、自分の過去の記録と比べてください。',
        },
      },
      {
        '@type': 'Question',
        name: 'このトレーニングは日常の物忘れ対策にも効果がありますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '効果は保証できません。練習すればこの課題自体の記録は伸びる可能性がありますが、日常の記憶力に効果が移るかどうかは研究によって結果が分かれています。気軽な記憶ゲームとしてお使いください。',
        },
      },
      {
        '@type': 'Question',
        name: 'スマートフォンやタブレットでもタッチ操作で快適に遊べますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'はい、完全レスポンシブ対応となっており、スマートフォンやタブレットのタッチスクリーン、PCのマウスクリックの両方で遅延なく快適にプレイできます。',
        },
      },
      {
        '@type': 'Question',
        name: 'このゲームは無料ですか？データは外部に送信されますか？',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '完全無料でご利用いただけます。登録やアプリのインストールは一切不要です。スコアやトレーニング記録はブラウザのローカルストレージにのみ保存され、外部サーバーに送信されることはありません。',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: '色の順番記憶ゲームの練習手順',
    description: '4つのステップで視覚ワーキングメモリと連続パターン記憶力を最大化する練習手順。',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: '光る色の順番を集中して観察',
        text: 'ゲームを開始し、画面中央の円に順番に点灯する色を集中して見つめます。',
        url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence#step-1',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: '色の組み合わせを2〜3色のチャンクにまとめる',
        text: '頭の中でリズムに乗せたり位置の軌跡として結びつけ、チャンク（情報の塊）を作ります。',
        url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence#step-2',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: '記憶した順番通りに正確にタップ',
        text: '入力フェーズに切り替わったら、直前に覚えた順番通りに色パネルをタップします。',
        url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence#step-3',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'レベルを上げてハイスコアを更新',
        text: '成功するたびに1段階ずつ長くなる高難度シーケンスをクリアし、自己最高記録を伸ばします。',
        url: 'https://skilldrills.online/ja/drills/memory/short-term-memory/color-sequence#step-4',
      },
    ],
  };

  const sequenceGuide = {
    heading: '色の順番記憶ゲーム ガイド＆視覚ワーキングメモリ',
    intro: [
      '色の順番を記憶して正確に再現する課題は、人間の視覚的作業記憶（ビジュアルワーキングメモリ）および系列順序保持能力を測定・強化するための代表的な神経認知トレーニングです。1978年にラルフ・ベアとハワード・モリソンによって開発された電子記憶ゲーム『サイモン』を原点とし、瞬間的な色彩刺激の符号化、構造化バッファへの保持、および厳密な時系列順での想起能力を段階的に鍛え上げます。',
      '人間の短期記憶の限界は、認知心理学の歴史の中で綿密に解明されてきました。ジョージ・ミラー（Miller, 1956）が言語記憶における「$7 \\pm 2$」の情報ボトルネックを示したのに対し、スティーブン・ラックとエドワード・ボーゲル（Luck & Vogel, 1997）およびネルソン・コーワン（Cowan, 2001）の研究は、純粋な視覚ワーキングメモリの保持容量が厳密に「約4項目」に制限されていることを実証しました。構造化された再符号化戦略を用いない限り、4要素を超える系列保持は急速に崩壊します。',
      'アラン・バドリーのワーキングメモリ複合モデル（Baddeley & Hitch, 1974; Baddeley, 2000）において、視覚シーケンスの保持は「視空間スケッチパッド（VSSP）」を活性化させます。ロバート・ロギー（Logie, 1995）はこの領域を受動的な視覚キャッシュ（色や形状の保持）と能動的なインナースクライブ（空間的・時間的運動パターンのリハーサル）に細分化しました。熟練した実践者は音韻ループを併用して二重符号化（視覚像＋内省的発声）を確立し、メモリバッファの耐久性の向上に役立つ可能性があります。',
      'このゲームは45秒間のスコア、到達した最高レベル（順番の長さ）、正答率（成功ラウンドの割合）を記録します。タップの反応時間は計測しません。',
      'ラウンドの仕組み：レベルLでは6色のうちL＋2色が毎回新しいランダムな順番で表示されます。レベルが上がるほど各色の点灯時間は短くなり（約0.7秒から最短0.25秒）、その後は1回の入力ごとに8秒の制限があります。間違えるか時間切れになるとレベルが1下がります。',
      'データ透明性とプライバシー保護：SkillDrills はユーザーのプレイデータや統計ログを外部サーバーに収集・保存しません。すべてのスコアと達成記録はお使いの端末のローカルストレージ（localStorage）内にのみ保持されます。そのため本ページでは利用者の平均値、パーセンタイル、利用者数を示しておらず、引用している数値は下部の参考文献パネルの研究によるものです。'
    ],
    benchmarks: {
      title: '色の順番記憶ゲーム 練習帯（SkillDrills基準・45秒セッション）',
      headers: ['練習帯', '到達レベル', 'ノーミス到達時のスコア', '典型的な覚え方'],
      rows: [
        ['帯 1', 'Level 11以上（13色以上）', '約1,550 PTS以上', '色名の唱えとチャンキングを併用'],
        ['帯 2', 'Level 8 – 10（10–12色）', '約980 – 1,549 PTS', '2〜3色単位のチャンキングが安定'],
        ['帯 3', 'Level 5 – 7（7–9色）', '約500 – 979 PTS', '速い切り替えで中間の色を落としやすい'],
        ['帯 4', 'Level 3 – 4（5–6色）', '約230 – 499 PTS', '1色ずつ覚えていてチャンキングは未使用'],
        ['帯 5', 'Level 1 – 2（3–4色）', '230 PTS未満', 'ルールと速度に慣れる段階']
      ],
      note: '人口平均ではなく SkillDrills の練習帯です。スコアはノーミスでそのレベルに到達した場合の値です（1ラウンドの得点 = 100 ×（1 ＋ 0.1 × レベル））。ミスするとレベルが下がるため、実際のスコアは変わります。'
    },
    techniques: {
      title: '長いシーケンスを記憶するための4つの科学的アプローチ',
      items: [
        {
          name: 'リズム・チャンキング法（ミラーの法則）',
          desc: '色を単独で覚えず、一定のリズムに乗せて記憶します。頭の中で「赤・青…緑・黄」と一定の拍子で唱えることで、記憶の保持時間を伸ばします。',
          tips: '4色を超えたら、必ず2つまたは3つのペアに区切って処理してください。'
        },
        {
          name: '入力ボタンの位置で経路を作る',
          desc: '色は中央の円の1か所でしか光りませんが、入力用の6色ボタン（3×2のグリッド）の位置は固定です。色が光るたびに対応するボタンの位置を思い浮かべ、指の通り道として覚えます（Logie, 1995）。',
          tips: '開始前にボタンの配置を一度確認しておくと経路を描きやすくなります。'
        },
        {
          name: '色名を心の中で唱える（音韻ループの併用）',
          desc: '色が光るたびに「あか・あお・みどり」と心の中で唱えると、視覚の記憶に言語の記憶が加わり二重に保持できます（Baddeley, 2000）。',
          tips: '2色ずつ区切ってリズムよく唱えましょう。'
        },
        {
          name: '中間の色を守る（系列位置効果）',
          desc: '毎ラウンド完全に新しいランダムな順番が出題されるため、前のラウンドのパターンは使えません。最初と最後の色は覚えやすい一方、中間の色が最も抜けやすいので、中間部分を意識してまとめましょう。',
          tips: '最初のまとまりはすぐに唱え、最後の色は直前の残像に任せます。'
        }
      ]
    },
    steps: [
      '45秒セッションを開始し、中央の円を注視します。',
      '1色ずつ点灯する色の順番を集中して観察します。',
      '頭の中でパターンをリズミカルな2〜3色のチャンクに再構成します。',
      '入力の合図が出たら、覚えた順番通りに6色のボタンをタップします（各タップは8秒以内）。',
      'レベルを次々に引き上げ、より長いシーケンスを攻略して自己ベストを更新します。'
    ],
    audience: '勉強や資格試験の暗記力を高めたい学生、瞬間的な視覚判断を磨きたいゲーマー、認知機能や集中力を維持したい大人。',
    faqs: faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'luck1997', 'baddeley1974', 'miller1956'),
    related: [
      { href: '/ja/drills/memory/working-memory/n-back', label: 'デュアル N-バック記憶訓練' },
      { href: '/ja/drills/memory/short-term-memory/digit-span', label: 'ディジットスパン数字記憶テスト' },
      { href: '/ja/drills/memory/spatial-memory/grid-memorization', label: 'グリッド空間記憶トレーニング' },
      { href: '/ja/drills/cognitive/focus/concentration-grid', label: 'シュルテテーブル集中力グリッド' },
      { href: '/ja/drills/cognitive/focus/distraction-fighter', label: 'ストループテスト抑制訓練' }
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
      <ColorSequenceClient copy={copyJa} />
      <DrillGuide guide={sequenceGuide} />
      <RelatedDrills />
    </>
  );
}
