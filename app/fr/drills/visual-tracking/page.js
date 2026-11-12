import VisualTrackingDrillsClient from '@/app/drills/visual-tracking/VisualTrackingDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');

const baseMetadata = buildVisualTrackingHubMetadata('fr', 'https://skilldrills.online/fr/drills/visual-tracking', trackingDrills.length, getAlternateLanguages('/drills/visual-tracking'));

export const metadata = {
  ...baseMetadata,
  title: 'Poursuite oculaire : exercices en ligne | SkillDrills',
  description: 'Poursuite oculaire : 15 exercices en ligne gratuits pour suivre une cible en sinusoïde, en huit, en zigzag ou par sauts. Pas un test de vue.',
  keywords: ['poursuite oculaire', 'exercices poursuite oculaire', 'suivi visuel', 'suivi de cible', 'suivre une cible mobile', 'prédiction de trajectoire', 'vision périphérique', 'exercices dans le navigateur'],
  openGraph: { ...baseMetadata.openGraph, title: 'Poursuite oculaire : exercices en ligne | SkillDrills', description: 'Poursuite oculaire : 15 exercices en ligne gratuits pour suivre une cible en sinusoïde, en huit, en zigzag ou par sauts. Pas un test de vue.', images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Poursuite oculaire : exercices en ligne' }] },
  twitter: { ...baseMetadata.twitter, title: 'Poursuite oculaire : exercices en ligne | SkillDrills', description: 'Poursuite oculaire : 15 exercices en ligne gratuits pour suivre une cible en sinusoïde, en huit, en zigzag ou par sauts. Pas un test de vue.' },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/fr" },
    { "@type": "ListItem", "position": 2, "name": "Répertoire des Entraînements", "item": "https://skilldrills.online/fr/drills" },
    { "@type": "ListItem", "position": 3, "name": "Poursuite oculaire", "item": "https://skilldrills.online/fr/drills/visual-tracking" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://skilldrills.online/fr/drills/visual-tracking",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  ...getVisualTrackingHubCollectionFields('fr', trackingDrills.length),
  "name": "Poursuite oculaire : exercices en ligne",
  "description": "15 exercices gratuits dans le navigateur pour la poursuite oculaire : sinusoïde, huit couché, zigzag, triangle, marches, changements de direction, cible qui saute, écran partagé et signaux périphériques.",
  "dateModified": "2026-11-12",
  "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Peripheral_vision"],
  "hasPart": trackingDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'fr', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/fr${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quelle différence entre poursuite oculaire et saccades ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La poursuite lisse est le suivi régulier d’une cible mobile, les saccades sont des sauts rapides du regard d’un point à un autre. Les exercices demandent surtout de la poursuite, mais le site ne mesure pas vos mouvements oculaires."
      }
    },
    {
      "@type": "Question",
      "name": "Les exercices de poursuite oculaire aident-ils au sport ou en FPS ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ils font suivre des cibles mobiles du regard et à la souris et réagir aux changements de trajectoire. Un progrès en sport ou en FPS n’est pas garanti. Utilisez-les comme pratique d’appoint et comparez vos scores sur le même appareil."
      }
    },
    {
      "@type": "Question",
      "name": "Quels exercices de suivi sont proposés ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "15 trajectoires et tâches : sinusoïde, huit couché, zigzag, triangle, marches verticales, changements de direction imprévus, cible qui saute, écran partagé, prédiction stroboscopique, signaux périphériques, entre autres. Elles diffèrent par la forme du trajet et les changements de vitesse."
      }
    },
    {
      "@type": "Question",
      "name": "La fréquence de l’écran influence-t-elle les résultats ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Un écran se rafraîchit toutes les 16,7 ms à 60 Hz, 6,9 ms à 144 Hz et 4,1 ms à 240 Hz, donc une cible rapide paraît plus ou moins fluide. Comparez vos séances avec le même écran, la même souris et le même navigateur."
      }
    },
    {
      "@type": "Question",
      "name": "Combien de temps s’entraîner ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il n’existe pas de durée prouvée. Faites des séances courtes et régulières, regardez au loin pendant les pauses et arrêtez en cas de fatigue, de maux de tête ou de vertige."
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('fr');
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
