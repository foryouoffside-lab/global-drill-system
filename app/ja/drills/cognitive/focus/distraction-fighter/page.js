import DistractionFighterClient from '@/app/drills/cognitive/focus/distraction-fighter/DistractionFighterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

// ============================================================
// SEO RESEARCH FINDINGS — ja-JP (distraction-fighter / stroop-test)
// PRIMARY DOMESTIC: "ストループテスト" — 121 exact / 121 broad searches/mo
//                   "ストループ効果"   — 86 exact searches/mo
//                   Combined cluster: >200 searches/mo (Cognitive test winner)
// SECONDARY:        "認知的抑制機能 測定", "前頭前野 トレーニング"
// WINNER TITLE:     ストループテスト – 無料オンライン認知干渉・抑制機能テスト | SkillDrills
// ============================================================

export const metadata = {
  title: 'ストループテスト｜ストループ課題 無料 | SkillDrills',
  description:
    '無料のストループテスト（ストループ課題）をブラウザで。色名の文字の意味ではなくインクの色を選び、ストループ効果を体験できます。45秒から始まり正解ごとに+2秒、誤答は-1秒の練習ゲームで、診断ではありません。',
  keywords: [
    'ストループテスト',
    'ストループ課題',
    'ストループ効果',
    'ストループテスト 無料',
    'ストループテスト やり方',
    'ストループテスト 何がわかる',
    'ストループテスト 注意機能',
    'ストループテスト 効果',
    'ストループテスト web',
    'ストループ 効果 テスト',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter',
    languages: getAlternateLanguages('/drills/cognitive/focus/distraction-fighter'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'ストループテスト｜ストループ課題 無料 | SkillDrills',
    description:
      '無料のストループテスト（ストループ課題）をブラウザで。色名の文字の意味ではなくインクの色を選び、ストループ効果を体験できます。45秒から始まり正解ごとに+2秒、誤答は-1秒の練習ゲームで、診断ではありません。',
    url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'ストループテスト｜ストループ課題 無料 | SkillDrills',
    description: '無料のストループテスト（ストループ課題）をブラウザで。色名の文字の意味ではなくインクの色を選び、ストループ効果を体験できます。45秒から始まり正解ごとに+2秒、誤答は-1秒の練習ゲームで、診断ではありません。',
  },
  robots: { index: true, follow: true },
};

// --- Structured Data Schemas ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills ホーム', item: 'https://skilldrills.online/ja' },
    { '@type': 'ListItem', position: 2, name: 'ドリル一覧', item: 'https://skilldrills.online/ja/drills' },
    { '@type': 'ListItem', position: 3, name: '認知機能', item: 'https://skilldrills.online/ja/drills/cognitive' },
    { '@type': 'ListItem', position: 4, name: 'ストループテスト', item: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Stroop_effect", "https://en.wikipedia.org/wiki/Inhibitory_control"],
  name: 'ストループテスト（ストループ課題）オンライン',
  alternateName: ['ストループテスト', 'ストループ効果テスト', 'Stroop Test Online Japan'],
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  description: '文字の意味とインク色が食い違う色名を見て、インクの色を選ぶストループ課題の無料練習ゲーム。',
  browserRequirements: 'JavaScript対応の最新Webブラウザ（Chrome, Edge, Safari, Firefox）',
  softwareVersion: '2.0',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'ストループテスト｜ストループ課題 無料 | SkillDrills',
  url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter',
  description: '無料オンラインのストループテスト。色名の文字のインク色を選び、ストループ効果による干渉を体験・練習できます。',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  browserRequirements: 'JavaScript対応の最新Webブラウザが必要。',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Educational Game',
  teaches: 'ストループ効果, 認知的抑制, 選択的注意',
};


const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'ストループテスト オンライン (Stroop Test Game)',
  url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter',
  description: '文字の意味とインク色の不一致を見極めるストループ課題の脳トレゲーム。',
  dateModified: '2026-11-12',
  gamePlatform: 'Web Browser',
  genre: ['認知トレーニング', '脳トレ', 'ストループテスト', '注意力テスト'],
  playMode: 'SinglePlayer',
  applicationCategory: 'Game',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'ストループテストのやり方（4ステップ）',
  description: 'このストループ課題を1回プレイする手順。',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter#step-1',
      name: 'インクの色にのみ意識を集中する',
      text: '画面に表示される文字の意味（赤・青などの漢字）を読まず、物理的なフォントの色（インク色）だけを注視します。',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter#step-2',
      name: '該当する色の選択ボタンを素早く押す',
      text: '表示された文字の意味に惑わされず、インク色と一致する選択肢ボタン（最初は4色、レベル4から6色）をタップします。',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter#step-3',
      name: '衝動的な誤答を避けてコンボを維持する',
      text: '焦って文字の意味に引きずられたボタンを押さないよう、一瞬の認知的ブレーキ（抑制機能）を働かせます。',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/ja/drills/cognitive/focus/distraction-fighter#step-4',
      name: 'レベルアップによる制限時間の短縮に対応する',
      text: 'レベルが上がるほど1語あたりの制限時間が短くなります。時計は45秒から始まり、正解で+2秒（最大60秒）、誤答やタイムアウトで-1秒。0秒になると終了です。',
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  dateModified: '2026-11-12',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'ストループテストとは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ストループテスト（Stroop test）は、1935年にJ.リドリー・ストループによって発表された心理学の古典的実験課題です。「赤」という文字が青色のインクで書かれている場合のように、文字の意味と物理的な色が食い違う状況において、文字の意味を無視して「青」と答える課題を通じて、認知的抑制や選択的注意を調べる課題です。このページはその課題を練習用ゲームにしたもので、心理検査ではありません。',
      },
    },
    {
      '@type': 'Question',
      name: 'ストループ効果が起きる理由は何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '人間にとって「文字を読む」という行為は長年の学習により高度に自動化されており、意識しなくても勝手に意味が頭に入ってきます。一方、「文字のインク色を識別して名付ける」行為には意識的な努力が必要です。自動的な読みの反応が先に立ち上がってしまうため、それを前頭葉で抑制するのに時間がかかり、反応の遅れやエラー（干渉効果）が生じます（MacLeod, 1991）。',
      },
    },
    {
      '@type': 'Question',
      name: '認知的抑制機能（インヒビション）とは何ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '認知的抑制機能（Inhibitory Control）とは、目的の達成を妨げる不要な衝動、思考、自動的習慣、周囲の刺激を自制・ブロックする脳の実行機能の一つです。ワーキングメモリや認知的柔軟性と並ぶ前頭前野の最重要機能であり、注意散漫の防止やマルチタスク環境での集中維持に役立つ可能性があります。',
      },
    },
    {
      '@type': 'Question',
      name: 'ストループテストで良いスコアを出すコツはありますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '文字の意味を頭の中で発音（内言）しないよう意識し、文字の輪郭や全体の色調だけを幾何学的な図形として捉えることが有効です。また、焦って早押ししようとすると自動的な読みの衝動に負けやすくなるため、一呼吸おいて色を視覚的に確認してから選択するリズムを掴むのが高得点への近道です。',
      },
    },
    {
      '@type': 'Question',
      name: 'このドリルはスマートフォンのタッチ操作にも対応していますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'はい。PCではマウスクリック、スマートフォンやタブレットではタップで画面下部の色ボタンを選びます。キーボードでの回答には対応していません（Escキーは中断のみ）。',
      },
    },
    {
      '@type': 'Question',
      name: 'このストループテストのルールと採点は？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '表示される色名は必ずインクの色と食い違います。インク色のボタンを押すと正解で、100点 × コンボ倍率（最大3倍）× レベル倍率が入り、時計が2秒増えます（最大60秒）。誤答や制限時間切れ（タイムアウト設定がオンのとき。初期設定はオン）はコンボがリセットされ1秒減ります。時計は45秒から始まり、0秒で終了します。',
      },
    },
    {
      '@type': 'Question',
      name: 'ストループテストの利用は無料ですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '完全無料です。会員登録やアプリのダウンロードは一切不要で、Webブラウザを開くだけでいつでも何度でも練習・自己ベストの記録が可能です。',
      },
    },
    {
      '@type': 'Question',
      name: 'なぜ人間はこれほど気が散りやすいのですか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '人間には新奇性や動き、目立つ刺激に無意識に注意を向ける「定位反射」が備わっています。これは危険や獲物を瞬時に察知するための進化的な生存本能です。現代のデジタル環境では通知や画面のチラつきがこの反射を過剰に刺激するため、気が散りやすいのは自然なことです。ストループ課題はその「つい反応してしまう」感覚を安全に体験できる練習です。',
      },
    },
    {
      '@type': 'Question',
      name: 'フランカー課題とは何ですか？ストループ効果とどう違いますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'フランカー課題（Eriksen Flanker Task）は、中央の標的刺激の両脇に一致または不一致の妨害記号を配置し、方向判断を求める認知実験です。ストループ課題が「文字の意味と色」という刺激自体の内部矛盾に対する抑制力を測るのに対し、フランカー課題は「空間的に隣接する外的な妨害刺激」を遮断する能力を測定します。いずれも注意制御の必須スキルです。',
      },
    },
    {
      '@type': 'Question',
      name: 'ストループ効果のトレーニングは仕事や学習の生産性向上に役立ちますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '保証はできません。練習でこのドリルのスコアは上がり得ますが、その効果が仕事や勉強の集中力に移ることを示す根拠は限られています。作業前の短いウォームアップとして使ってください。',
      },
    },
    {
      '@type': 'Question',
      name: 'このストループドリルでADHDや発達障害の診断・治療はできますか？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'いいえ。本ドリルは練習用の無料ブラウザゲームであり、医療機器や診断ツールではありません。スコアの高低はADHD等の医学的診断を示すものではありません。集中力や注意力についてお悩みの場合は、専門医や医療機関にご相談ください。',
      },
    },
  ],
};

export default function JapaneseDistractionFighterPage() {
  const sources = pickSources('stroop1935', 'macleod1991', 'logan1984', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <DistractionFighterClient
        copy={{
          title: 'ストループテスト｜ストループ課題 無料',
          subtitle: '文字の意味ではなくインクの色を選ぶ、ストループ効果の練習ゲーム',
          caption: '文字の意味に惑わされず、表示された文字のインク色を素早く判断してタップします。',
          rulesItems: [
            { num: '1', text: '色と意味が違う文字', highlight: 'インク色を選ぶ', result: '意味は無視' },
            { num: '2', text: '正解', highlight: '100点×コンボ×レベル', result: '+2秒（最大60秒）' },
            { num: '3', text: '誤答・タイムアウト', highlight: 'コンボリセット', result: '-1秒' },
            { num: '4', text: 'レベル上昇', highlight: '制限時間が短縮', result: 'Lv4から6色' },
          ],
        }}
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />

      <DrillGuide
        eyebrow="認知神経心理学 & 前頭前野実行機能"
        title="ストループテストの科学：自動化された言語処理と認知的抑制の葛藤"
        sources={sources}
      >
        <p>
          ストループテストとは、色の名前を表す文字が別の色のインクで書かれているときに、文字の意味ではなくインクの色を答える課題です。読む自動処理を抑える必要があるため、色と文字が一致するときより答えるのが遅くなります。このページでは45秒から始まる時計（正解ごとに+2秒、最大60秒）でインク色を素早く選び、スコア・正解率・到達レベルを確かめられます。
        </p>
        <h3>ストループ効果とは</h3>
        <p>
          ストループ効果（Stroop Effect）は、1935年にJ.リドリー・ストループによって報告されて以来、認知心理学および神経科学において最も堅牢で信頼性の高い知見の一つとして知られています（Stroop, 1935）。文字の意味と異なるインク色を提示された際、人間の反応速度は著しく低下し、エラー率が上昇します。
        </p>

        <h3>自動的読解と選択的抑制の競合（MacLeod, 1991）</h3>
        <p>
          成人にとって文字の読解は日常の反復により無意識かつ自動的な処理として確立されています。一方で、フォントの「色」を同定する処理は意図的な視覚注意を必要とします。不一致条件（例：青色インクで書かれた「あか」）では、読む反応とインク色を答える反応が競合し、読む反応を抑えられないと誤答が生じます。自動的な反応を止める過程は、反応抑制の研究では「競争（レース）」として説明されることもあります（Logan &amp; Cowan, 1984）。
        </p>

        <h3>神経画像研究と前頭前野抑制回路（Posner &amp; Petersen, 1990）</h3>
        <p>
          機能的磁気共鳴画像法（fMRI）の研究知見によれば、ストループ課題における葛藤解決と認知的抑制は、主に前帯状皮質（ACC）と背外側前頭前野（DLPFC）の神経ネットワークによって制御されています（Posner &amp; Petersen, 1990）。このドリルは脳活動を測定せず、日常の集中力の向上も保証しません。
        </p>

        <h3>タイミングとハードウェア遅延（Woods et al., 2015）</h3>
        <p>
          タイミングについて：本ドリルは反応時間を表示せず、スコア・正解率・到達レベルを記録します。1語ごとの制限時間はブラウザのタイマーで端末内で処理されます。ブラウザ仕様としてSpectre対策のためタイマー分解能が約1msに丸められている点、およびディスプレイのリフレッシュレート（60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1ms; Woods et al., 2015）による物理的表示量子化が存在します。他者の環境ではなく同一ハードウェア環境での自己記録比較を行ってください。
        </p>

        <h3>データ透明性と非医療用免責事項</h3>
        <p>
          データ透明性と非医療用免責事項：アカウント登録は不要で、スコアや設定値はお使いのブラウザのローカルストレージに保存されます。サイト全体のアクセス状況は匿名で計測しています（詳細はプライバシーポリシー）。本ドリルは練習用の無料ブラウザゲームであり、医療機器やADHD等の診断ツールではありません。注意や集中に関する医学的な懸念がある場合は、専門医にご相談ください。
        </p>

        <h3>ストループテスト ランク目安（1回のスコア）</h3>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left border-collapse border border-white/10 text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/5 text-slate-200">
                <th className="p-2.5 border border-white/10 font-bold">ランク</th>
                <th className="p-2.5 border border-white/10 font-bold">スコア</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">S+</td>
                <td className="p-2.5 border border-white/10">21,660 以上</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">S</td>
                <td className="p-2.5 border border-white/10">17,340 – 21,659</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">A</td>
                <td className="p-2.5 border border-white/10">13,500 – 17,339</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">B</td>
                <td className="p-2.5 border border-white/10">8,640 – 13,499</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">C</td>
                <td className="p-2.5 border border-white/10">4,860 – 8,639</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">D</td>
                <td className="p-2.5 border border-white/10">2,160 – 4,859</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold">F</td>
                <td className="p-2.5 border border-white/10">2,160 未満</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-1 mb-4 leading-relaxed">
          ※SkillDrillsの練習目安です。結果画面のランク計算式（基準24,000点に対する割合）からそのまま算出したもので、利用者の統計や臨床基準ではありません。
        </p>

        <h3>認知的抑制力を鍛える4つの実践プロトコル</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>フォントの輪郭注視：</strong> 単語全体を「読む」のではなく、文字のエッジや輪郭の色そのものに焦点を当てることで言語処理の介入を抑えます。
          </li>
          <li>
            <strong>内的言語化の抑制：</strong> 頭の中で単語を音読せず、色を視覚パターンとして直接認識しボタンへ指を運ぶ練習をします。
          </li>
          <li>
            <strong>リズミカルな判断テンポ：</strong> 焦って衝動的にクリックすると誤答が増加します。確実な弁別リズムを保ちながら徐々にテンポを上げましょう。
          </li>
          <li>
            <strong>短時間・高頻度セッション：</strong> 疲れると誤答が増えます。1日3〜5分程度の短いセッションが続けやすくおすすめです。
          </li>
        </ul>

      </DrillGuide>
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
