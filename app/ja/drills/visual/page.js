import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: '動体視力トレーニング 無料・ブラウザで9種 | SkillDrills',
  description: '無料・ブラウザで動体視力トレーニング。動く標的の追従、複数対象の追跡、視覚探索、奥行き判断、光への反応を練習できる9種類のドリル。登録不要です。',
  keywords: ['動体視力トレーニング', '動体視力トレーニング 無料', '動体視力トレーニング ブラウザ', '動体視力 ゲーム', '視覚探索', '周辺視', '奥行き判断', '多目標追跡', '眼球運動'],
  openGraph: {
    title: '動体視力トレーニング 無料・ブラウザで9種 | SkillDrills',
    description: '無料・ブラウザで動体視力トレーニング。動く標的の追従、複数対象の追跡、視覚探索、奥行き判断、光への反応を練習できる9種類のドリル。登録不要です。',
    type: 'website',
    url: 'https://skilldrills.online/ja/drills/visual',
    siteName: 'SkillDrills',
    locale: 'ja_JP',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'SkillDrills 動体視力トレーニング' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '動体視力トレーニング 無料・ブラウザで9種 | SkillDrills',
    description: '無料・ブラウザで動体視力トレーニング。動く標的の追従、複数対象の追跡、視覚探索、奥行き判断、光への反応を練習できる9種類のドリル。登録不要です。',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/ja/drills/visual',
    languages: getAlternateLanguages('/drills/visual'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "パフォーマンストレーニング", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "視覚認知 & 動体視力", "item": "https://skilldrills.online/ja/drills/visual" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "ja",
  "dateModified": "2026-11-12",
  "name": "動体視力トレーニング・視覚ドリル (9種目)",
  "url": "https://skilldrills.online/ja/drills/visual",
  "description": "動く標的の追従、多目標追跡、光への反応、視覚探索、奥行き判断をブラウザで練習する9種類の視覚ドリル。",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": visualDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'ja', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/ja${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "ja",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "動体視力トレーニングは野球やテニス、FPSゲームに役立ちますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "動体視力は動く対象をはっきり捉え続ける力を指します。ここの追従ドリルは動く標的を目とマウスで追う練習ですが、野球・テニスやFPSの成績が上がることは保証しません。同じ機器で自分の記録の変化を見る補助練習として使ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "奥行き判断ドリルは深視力検査（三桿法）の代わりになりますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "なりません。平面モニターには両眼視差がないため、立体視や三桿法の深視力は測れません。近づいてくる球が画面上で大きくなる様子を見て、表示された距離に届いた瞬間にクリックする、距離とタイミングの判断練習です。"
      }
    },
    {
      "@type": "Question",
      "name": "多目標追跡（MOT）はどんな練習ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "同じ見た目の動く物体の中から、指定された標的を見失わずに追い続ける課題です。分割注意と視覚的作業記憶を使いますが、有効視野が広がる、運転や球技に効果があるといった保証はありません。"
      }
    },
    {
      "@type": "Question",
      "name": "滑動性追従（スムーズパシュート）とサッケードの違いは？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "滑動性追従は動く対象を滑らかに目で追う動き、サッケードは視線をすばやく跳ばす動きです。追従ドリルは主に前者を使いますが、このサイトは目の動きそのものを測定していません。"
      }
    },
    {
      "@type": "Question",
      "name": "光反応ドリルは何を測っていますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "画面に光の合図が出てからクリックするまでの時間を測ります。結果には画面、マウス、ブラウザの遅延も含まれるため、神経の伝達速度そのものではありません。"
      }
    },
    {
      "@type": "Question",
      "name": "視覚探索ドリルではどんな力を練習しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "妨害刺激の中から標的を探し出す課題で、選択的注意と探す速さをその課題の中で練習します。日常生活への効果は個人差があり、保証されません。"
      }
    },
    {
      "@type": "Question",
      "name": "結果はモニターやマウスに左右されますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。画面は60Hzで約16.7ms、144Hzで約6.9ms、240Hzで約4.1msごとに更新されます。記録を比べるときは同じ画面、マウス、ブラウザを使ってください。"
      }
    },
    {
      "@type": "Question",
      "name": "1回どれくらい練習すればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "決まった正解はありません。目が疲れないよう短いセッションを無理なく繰り返し、合間に遠くを見て休みましょう。痛みや頭痛、違和感があれば中止してください。"
      }
    }
  ]
};

faqSchema.mainEntity.push(
  { "@type": "Question", "name": "この視覚トレーニング一覧には何種類のドリルがありますか？", "acceptedAnswer": { "@type": "Answer", "text": "動体視力と反応・衝動抑制、標的追従と眼球運動、視覚認識と奥行き判断の3分野に分かれた9種類のブラウザドリルがあります。カードから各ドリルを開けます。" } },
  { "@type": "Question", "name": "ブラウザの視覚ドリルは眼科の視力検査の代わりになりますか？", "acceptedAnswer": { "@type": "Answer", "text": "いいえ。画面上の反応、追従、探索、空間判断を繰り返し測る練習であり、視力や眼疾患を診断するものではありません。必要な検査は眼科医や視機能の専門家に相談してください。" } }
);

export default function VisualDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VisualDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
