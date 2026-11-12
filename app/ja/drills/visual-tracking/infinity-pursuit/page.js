import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/ja/drills/visual-tracking/infinity-pursuit';
const name = "8の字眼球運動トレーニング";
const title = `${name} | SkillDrills`;
const description = "8の字眼球運動トレーニングをブラウザで無料で。8の字(レムニスケート)の軌道を動く標的を目で追い、中央を通るたびに視線の連続性を練習します。";

export const metadata = {
  title,
  description,
  keywords: ["8の字 眼球運動 トレーニング","8の字 眼球運動","眼球運動 トレーニング","目で追う 練習","レムニスケート 追従","ブラウザ 目の練習"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/infinity-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'ja_JP', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('ja', url, 'visual-tracking', name, true),
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/ja' },
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "8の字眼球運動トレーニング Webアプリ",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "HTML5 Canvas対応の最新ブラウザ",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'ja',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name,
  url,
  description,
  genre: ['Visual training', 'Eye tracking exercise'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'ja',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "8の字眼球運動トレーニングのやり方",
  description: "8の字眼球運動トレーニングを無理なく進める4つのステップです。",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "楽な姿勢を作る",
    "text": "画面から楽な距離に座り、肩と手の力を抜きます。"
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "中央を通る瞬間を意識する",
    "text": "標的が中央を越えるときも、視線をとぎれさせずに追い続けます。"
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "目で追い続ける",
    "text": "カーソルではなく標的を目で追い、30〜120秒のセッションを最後まで続けます。"
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "設定を一つずつ変える",
    "text": "慣れたら速度を上げるか、ライン非表示・ランダム速度を一つずつ追加します。"
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "8の字眼球運動トレーニングとは何ですか？",
    "a": "8の字の軌道を動く標的を目で追うブラウザ練習です。時間(30〜120秒)、速度、標的の大きさ、ライン表示を調整できます。視力検査や治療ではなく練習用のツールです。"
  },
  {
    "q": "なぜ8の字の軌道なのですか？",
    "a": "8の字は横と縦の動きを含み、1周ごとに中央で交差する連続した軌道です。急に位置が変わらないので、同じ条件の練習を比べやすくなります。"
  },
  {
    "q": "目の動きを直接測定しますか？",
    "a": "いいえ。ブラウザは視線の位置を知ることができず、標的を描いた位置と設定だけを扱います。ポインターは補助で、カーソル位置が視線を示すわけではありません。スコアもありません。"
  },
  {
    "q": "ランダム速度をオンにすると何が変わりますか？",
    "a": "標的の速さが時間とともに不規則に変わり、先読みしにくくなります。基準速度で楽に追えるようになってから、ライン非表示とは別々に追加してください。"
  },
  {
    "q": "ラインは表示したほうがよいですか？",
    "a": "ラインがあると標的の動きを予想しやすく、最初は助けになります。慣れたら非表示にして難しくできます。どちらが正解ということはないので、同じ設定どうしで比べてください。"
  },
  {
    "q": "最初はどんな設定で始めればよいですか？",
    "a": "30〜60秒の短いセッション、遅い速度(0.5〜1.0倍)、ライン表示から始めます。速度は0.5〜9.0倍、標的の大きさは10〜50pxで調整でき、慣れたら一つずつ変えます。"
  },
  {
    "q": "この練習で視力やゲームの腕が上がりますか？",
    "a": "保証はできません。これは動く標的を目で追う練習で、視力の改善、目の病気の治療、FPSのエイム向上を約束するものではありません。目の不調が気になる場合は専門家に相談してください。"
  },
  {
    "q": "画面や環境は結果に影響しますか？",
    "a": "リフレッシュレート、明るさ、コントラスト、画面の大きさと距離、ブラウザで標的の見え方が変わります。入力機器や表示の遅延も影響するので(Woods et al., 2015)、同じ環境で比べてください。"
  },
  {
    "q": "どのくらい練習すればよいですか？",
    "a": "5〜10分ほどの短いブロックで行い、休憩を入れます。目が疲れたり乾いたりしたら止めて遠くを見てまばたきします。痛み、めまい、吐き気、頭痛があれば中止してください。"
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'ja',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "8の字眼球運動トレーニングガイド",
  "intro": [
    "8の字眼球運動トレーニングでは、標的が8の字(レムニスケート)の軌道をくり返し回ります。横と縦の動きが組み合わさり、1周ごとに画面の中央を通るので、中央を越えるときも視線をとぎれさせずに追う練習になります(Barnes, 2008)。ライン非表示やランダム速度で先読みしにくくできます。",
    "ブラウザが分かるのは標的を描いた位置と設定だけで、目が実際にどこを見ているかは記録しません。スコアはなく、残るのは完了したセッション数です。結果は臨床的な追従能力や視力ではなく、同じ条件で繰り返せる練習記録として扱ってください。",
    "楽な距離と姿勢で、同じ画面とブラウザで比べてください。リフレッシュレートや入力機器も見え方に影響します(Woods et al., 2015)。痛み、めまい、吐き気、続くぼやけなどがあれば中止してください。"
  ],
  "benchmarks": {
    "title": "練習段階の目安",
    "headers": [
      "段階",
      "練習の目標"
    ],
    "rows": [
      [
        "1",
        "遅い速度・ライン表示"
      ],
      [
        "2",
        "基準速度で楽に追える"
      ],
      [
        "3",
        "中央を通っても標的から離れない"
      ],
      [
        "4",
        "ライン非表示を追加"
      ],
      [
        "5",
        "ランダム速度を追加"
      ]
    ],
    "note": "この表はSkillDrillsの練習段階の目安です。視機能検査の基準、利用者統計、パーセンタイルではありません。"
  },
  "techniques": {
    "title": "練習のコツ4つ",
    "items": [
      {
        "name": "中央でも追い続ける",
        "desc": "中央の交差点で視線が止まったり飛んだりしやすいので、標的の中心を見たまま滑らかに通過します。",
        "tips": "つらいときは速度を下げ、ラインを表示した状態に戻します。"
      },
      {
        "name": "カーソルではなく標的を見る",
        "desc": "ポインターは補助にすぎません。カーソルではなく標的を目で追い、肩と手の力を抜きます。",
        "tips": "首や頭が一緒に動いていないかときどき確認します。"
      },
      {
        "name": "一度に一つだけ難しくする",
        "desc": "速度、ライン非表示、ランダム速度は別々に上げます。快適さが崩れたら前の設定に戻します。",
        "tips": "設定を変えたら新しい記録として比べます。"
      },
      {
        "name": "短く区切って休む",
        "desc": "5〜10分を目安にし、まばたきして遠くを見て休みます。長くやるほど良いわけではありません。",
        "tips": "痛み、めまい、吐き気があればすぐ中止します。"
      }
    ]
  },
  "steps": [
    "画面から楽な距離に座り、肩と手の力を抜きます。",
    "30〜60秒、遅い速度、ライン表示で始めます。",
    "カーソルではなく標的を目で追います。",
    "慣れたら速度を上げるか、設定を一つずつ追加します。"
  ],
  "audience": "8の字眼球運動トレーニングを気軽に試したい人、動く標的を目で追う感覚をゲーム感覚で練習したい人。"
},
  faqs,
  sources: pickSources('robinson1965', 'leigh2015', 'barnes2008', 'krauzlis2004', 'woods2015'),
  related: [
  {
    "href": "/ja/drills/visual-tracking/constant-slow-pursuit",
    "label": "ゆっくり動く点を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/directional-chaos-pursuit",
    "label": "ランダムに揺れ動く標的を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "急に向きを変える標的を目で追う練習"
  },
  {
    "href": "/ja/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "残像トレイルに惑わされず標的を追う練習"
  }
],
};

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <InfinityPursuitClient
        copy={{
          title: name,
          subtitle: "視線追従と正中線通過の練習",
          description: "8の字の軌道を動く標的を目で追い、中央を通るときの視線の連続性を練習します。ブラウザは視線を記録せずスコアもないため、結果は練習の記録として見てください。",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
