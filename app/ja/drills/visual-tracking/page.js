import VisualTrackingDrillsClient from '@/app/drills/visual-tracking/VisualTrackingDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');

const baseMetadata = buildVisualTrackingHubMetadata('ja', 'https://skilldrills.online/ja/drills/visual-tracking', trackingDrills.length, getAlternateLanguages('/drills/visual-tracking'));

export const metadata = {
  ...baseMetadata,
  keywords: ['動体視力 トレーニング', '視覚追跡 トレーニング', '視線追従', '眼球運動', '動く標的 追跡', '周辺視', '軌道予測', '無料 ブラウザ'],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/ja" },
    { "@type": "ListItem", "position": 2, "name": "全ドリル一覧", "item": "https://skilldrills.online/ja/drills" },
    { "@type": "ListItem", "position": 3, "name": "動体視力・視覚追跡", "item": "https://skilldrills.online/ja/drills/visual-tracking" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://skilldrills.online/ja/drills/visual-tracking",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  ...getVisualTrackingHubCollectionFields('ja', trackingDrills.length),
  "dateModified": "2026-11-12",
  "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Peripheral_vision"],
  "hasPart": trackingDrills.map((drill) => {
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
  "mainEntity": [
    {
      "@type": "Question",
      "name": "滑動性追従眼球運動とサッカードの違いは何ですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "滑動性追従は動く標的を目で途切れなく追う動き、サッカードは視線をある点から別の点へ素早く移す動きです。これらのドリルは主に追従を求めますが、サイトが実際の目の動きを測定することはありません。"
      }
    },
    {
      "@type": "Question",
      "name": "視覚追跡トレーニングでスポーツやFPSが上達しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ドリルは動く標的を視線とマウスで追い、軌道の変化に対応する練習です。スポーツやFPSの上達は保証されません。補助的な練習として使い、同じ機器で自分の記録同士を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "どんな追跡ドリルがありますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "サイン波、8の字（無限大）、ジグザグ、三角形、階段状の上下移動、急な方向転換、瞬間移動する標的、画面分割、ストロボ予測、周辺の合図など15種類の軌道と課題があります。軌道の形と速度の変化が各ドリルの違いです。"
      }
    },
    {
      "@type": "Question",
      "name": "モニターのリフレッシュレートは結果に影響しますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。60Hzでは約16.7ms、144Hzでは6.9ms、240Hzでは4.1msごとに画面が更新されるため、速い標的の見え方が変わります。同じ画面、マウス、ブラウザで記録を比べてください。"
      }
    },
    {
      "@type": "Question",
      "name": "1日にどのくらい練習すればよいですか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "実証された最適な時間はありません。短く定期的に行い、合間に遠くを見て休み、疲れ・頭痛・めまいを感じたら中止してください。"
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('ja');
const enrichedFaqSchema = { ...faqSchema, ...faqFields, dateModified: "2026-11-12", mainEntity: [...faqSchema.mainEntity, ...additions] };

export default function LocalizedVisualTrackingDrillsClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedFaqSchema) }} />
      <VisualTrackingDrillsClient
        faqs={enrichedFaqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
