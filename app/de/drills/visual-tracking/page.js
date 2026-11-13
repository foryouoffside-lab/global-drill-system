import VisualTrackingDrillsClient from '@/app/drills/visual-tracking/VisualTrackingDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');

const baseMetadata = buildVisualTrackingHubMetadata('de', 'https://skilldrills.online/de/drills/visual-tracking', trackingDrills.length, getAlternateLanguages('/drills/visual-tracking'));

export const metadata = {
  ...baseMetadata,
  title: 'Visuelles Tracking: Blickverfolgung üben | SkillDrills',
  description: 'Blickverfolgung üben im Browser: 15 kostenlose Tracking-Drills mit Sinuswelle, liegender Acht, Zickzack, Sprüngen und Randreizen. Ohne Anmeldung.',
  keywords: ['Blickverfolgung üben', 'visuelles Tracking', 'Augenfolgebewegung', 'bewegte Ziele verfolgen', 'Tracking-Übungen im Browser', 'Bahnvorhersage', 'peripheres Sehen', 'kostenlose Browser-Drills'],
  openGraph: { ...baseMetadata.openGraph, title: 'Visuelles Tracking: Blickverfolgung üben | SkillDrills', description: 'Blickverfolgung üben im Browser: 15 kostenlose Tracking-Drills mit Sinuswelle, liegender Acht, Zickzack, Sprüngen und Randreizen. Ohne Anmeldung.', images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Visuelles Tracking: Blickverfolgung üben' }] },
  twitter: { ...baseMetadata.twitter, title: 'Visuelles Tracking: Blickverfolgung üben | SkillDrills', description: 'Blickverfolgung üben im Browser: 15 kostenlose Tracking-Drills mit Sinuswelle, liegender Acht, Zickzack, Sprüngen und Randreizen. Ohne Anmeldung.' },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Alle Trainingsdrills", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Blickverfolgung üben", "item": "https://skilldrills.online/de/drills/visual-tracking" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://skilldrills.online/de/drills/visual-tracking",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  ...getVisualTrackingHubCollectionFields('de', trackingDrills.length),
  "name": "Visuelles Tracking: Blickverfolgung üben",
  "description": "15 kostenlose Browser-Drills zur Blickverfolgung: Sinuswelle, liegende Acht, Zickzack, Dreieck, Treppenstufen, Richtungswechsel, Sprungziele, geteilter Bildschirm und Randreize.",
  "dateModified": "2026-11-12",
  "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Peripheral_vision"],
  "hasPart": trackingDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'de', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/de${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Blickfolge und Sakkaden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei der glatten Blickfolge folgen die Augen einem bewegten Ziel gleichmäßig, Sakkaden sind schnelle Blicksprünge von Punkt zu Punkt. Die Drills fordern vor allem Blickfolge, die Seite misst deine Augenbewegungen aber nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Hilft Blickverfolgung üben beim Sport oder in FPS-Spielen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Drills üben, bewegte Ziele mit Blick und Maus zu verfolgen und auf Bahnwechsel zu reagieren. Eine Verbesserung im Sport oder in FPS-Spielen ist nicht garantiert. Nutze sie als Zusatzübung und vergleiche deine Werte auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Tracking-Drills gibt es?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "15 Bahnen und Aufgaben: Sinuswelle, liegende Acht, Zickzack, Dreieck, Treppenstufen, unvorhersehbare Richtungswechsel, springende Ziele, geteilter Bildschirm, Stroboskop-Vorhersage, Randreize und weitere. Sie unterscheiden sich in Bahnform und Tempowechseln."
      }
    },
    {
      "@type": "Question",
      "name": "Beeinflusst die Bildwiederholrate meine Ergebnisse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Ein Bildschirm aktualisiert bei 60 Hz etwa alle 16,7 ms, bei 144 Hz alle 6,9 ms und bei 240 Hz alle 4,1 ms, schnelle Ziele wirken dadurch unterschiedlich flüssig. Vergleiche Durchgänge mit demselben Bildschirm, derselben Maus und demselben Browser."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange sollte ich üben?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine belegte Idealdauer gibt es nicht. Übe kurz und regelmäßig, schau zwischendurch in die Ferne und hör bei Ermüdung, Kopfschmerzen oder Schwindel auf."
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('de');
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
