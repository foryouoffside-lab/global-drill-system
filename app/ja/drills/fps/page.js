import FPSHubClient from '@/app/drills/fps/FPSHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');

export const metadata = {
  title: 'FPSエイム練習・無料エイムトレーナー | SkillDrills',
  description: 'VALORANT・CS2・Apex向け無料FPSエイム練習15種。フリック、追いエイム、リコイル制御、反応速度をブラウザで鍛えます。',
  keywords: [
    'エイム練習', '無料 エイム練習', 'VALORANT エイム練習',
    'Apex エイム練習', 'CS2 エイム練習', '無料 エイムトレーナー',
    'フリック練習', '追いエイム', '置きエイム',
    'リコイル制御', 'FPS 反応速度 測定', 'クロスヘア 合わせ方',
    '腕エイム 手首エイム', 'eDPI 感度設定', 'ブラウザ エイム練習'
  ],
  openGraph: {
    title: 'FPSエイム練習・無料エイムトレーナー | SkillDrills',
    description: 'VALORANT・CS2・Apex向け無料FPSエイム練習15種。フリック、追いエイム、リコイル制御、反応速度をブラウザで鍛えます。',
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/fps',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: '無料FPSエイム練習ハブ' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FPSエイム練習・無料エイムトレーナー | SkillDrills',
    description: 'VALORANT・CS2・Apex向け無料FPSエイム練習15種をブラウザで始められます。',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/fps',
    languages: getAlternateLanguages('/ja/drills/fps'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "FPS エイム練習", "item": "https://skilldrills.online/ja/drills/fps" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09",
  "name": "FPSエイム練習・無料エイムトレーナー（15種）",
  "url": "https://skilldrills.online/ja/drills/fps",
  "description": `VALORANT・CS2・Apex向け無料FPSエイム練習15種。フリック、追いエイム、リコイル制御、ターゲット切替と反応練習をブラウザで始められます。`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": fpsDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ja', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ja${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja-JP",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "VALORANTやCS2のようなタクティカルFPSにおいて、ブラウザでのエイム練習はどのように役立ちますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VALORANTやCS2では最初の数発で撃ち合いが決まることが多く、初弾の精度と小さな修正が重要です。デスマッチはリスポーン待ちや移動の時間が長い一方、ブラウザのエイム練習なら短時間で多くのフリックと照準の止めを繰り返せます。動きが安定すれば、実戦ではクロスヘアの置き位置や状況判断に集中しやすくなります。効果には個人差があるため、試合の成績と合わせて確認してください。"
      }
    },
    {
      "@type": "Question",
      "name": "フリックエイム、追いエイム（トラッキング）、ターゲットスイッチングの違いと重要性は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FPSエイムの3大基礎要素は以下の通りです：1）フリックエイム：静止状態から標的へ瞬時にカーソルを飛ばして撃ち抜く技術で、ヴァンダルやAK-47のワンタップ撃ちに役立つ可能性があります。2）追いエイム（トラッキング）：敵の不規則な移動ベクトルに合わせて照準を吸い付かせる技術で、Apex LegendsやOverwatch 2のフルオート射撃に必須です。3）ターゲットスイッチング：複数出現する敵の間を最高速で切り替えて倒す技術で、1対複数の乱戦やクラッチ状況で決定的な役割を果たします。"
      }
    },
    {
      "@type": "Question",
      "name": "エイム練習では腕エイム、手首エイム、指先エイムのどれを使うべきですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "多くのプレイヤーは腕・手首・指先を組み合わせるハイブリッドエイムを使っています。腕と肩で180度の振り向きなど大きな移動を、手首で中距離の捕捉を、指先でヘッドライン付近の小さな修正を担当します。手首だけでは可動域が狭く、腕だけではごく小さな修正が難しくなりがちです。自分が楽な形を選び、痛みを感じたら練習を中断して休んでください。"
      }
    },
    {
      "@type": "Question",
      "name": "自分に最適なeDPIおよび振り向き（cm/360）感度はどのように見つければよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "感度はマウスパッド上で真後ろ（360度）を向くために必要な移動距離（cm/360）で管理するのが最も正確です。VALORANTやCS2などのタクティカルシューターでは、微細なヘッドライン維持のため35〜55cm/360（eDPI 200〜320前後）のローセンシが標準的です。一方、ApexやOW2のような激しいトラッキングが求められるタイトルでは24〜38cm/360のミドルセンシが適しています。左右にレレレ移動（ストレイフ）しながら静止した的に照準をブレずに固定し続けられる感度を基準に調整してください。"
      }
    },
    {
      "@type": "Question",
      "name": "エイムが震えたり、敵を行き過ぎる（オーバーシュート）原因と改善策は何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "エイムのブレや行き過ぎの主な原因は、前腕の過剰な力み（緊張）、マウスを握る圧力が強すぎること、または自身の制動筋力に対して感度が高すぎることです。改善策として：1）マウスパッドの摩擦面を活用し、停止時にマウスをパッドへ軽く押し込むストッピング技術（制動メカニズム）を練習する、2）スムースパースート（滑らかな視線追従）ドリルで脱力したエイム動作を身につける、3）感度を10〜15%下げて許容誤差範囲を広げることが極めて効果的です。"
      }
    },
    {
      "@type": "Question",
      "name": "ブラウザ型のエイム練習サイトは、Steam等のダウンロード版ソフトと同等の応答性がありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "練習用途ならおおむね問題ありません。SkillDrillsはHTML5 CanvasとブラウザのPointer Lock APIを使い、カーソルを隠して相対的なマウス移動量（movementX / movementY）を読み取るため、大きなフリックでも画面端で止まりません。標的の動きはフレーム数ではなく経過時間から計算されるので、144Hz・240Hz・360Hzのディスプレイでも一貫して動作します。ただしブラウザの入力は今もOSのポインタ設定を経由します。スコアを比べるときは、DPI・感度・マウス加速の設定をセッション間で変えないでください。"
      }
    },
    {
      "@type": "Question",
      "name": "プリエイム（ヘッドライン維持）と純粋なフリックエイムは実戦でどちらが重要ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "敵が出てくる位置と頭の高さにあらかじめ照準を置くプリエイム（クロスヘアプレイスメント）ができていれば大きなフリックがほとんど要らないため、実戦ではこちらが役立つ場面の方が多くなります。ただし、予想外のオフアングル、ワイドピーク、複数の敵が同時に出る場面ではプリエイムだけでは対応できず、素早いフリックと微調整が必要です。置きエイム練習とフリックエイム練習で両方を鍛えましょう。"
      }
    },
    {
      "@type": "Question",
      "name": "エイム練習は1日あたり何分くらい行うのが最も効果的ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "数時間まとめて練習するより、短く集中したセッションの方が続けやすくなります。目安として1日15〜25分を週に数回から始め、精度が落ちてきたり手が疲れたりしたらその日は終えるのがおすすめです。誰にでも当てはまる正解の時間はないので、自分の記録を見ながら調整してください。"
      }
    }
  ]
};

export default function JapaneseFPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
