import VisualTrackingDrillsClient from '@/app/drills/visual-tracking/VisualTrackingDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';
import { buildVisualTrackingHubMetadata, getVisualTrackingHubCollectionFields, getVisualTrackingHubFaqFields } from '@/lib/i18n/visualTrackingHubNative';

const trackingDrills = DRILLS.filter((d) => d.category === 'visual-tracking');

const baseMetadata = buildVisualTrackingHubMetadata('es', 'https://skilldrills.online/es/drills/visual-tracking', trackingDrills.length, getAlternateLanguages('/drills/visual-tracking'));

export const metadata = {
  ...baseMetadata,
  title: 'Seguimiento visual online: ejercicios gratis | SkillDrills',
  description: 'Seguimiento visual online: 15 ejercicios gratis para seguir un objetivo en onda sinusoidal, en ocho, en zigzag o con saltos. Sin registro.',
  keywords: ['seguimiento visual online', 'ejercicios de seguimiento visual', 'juegos de seguimiento visual', 'seguimiento ocular', 'seguir objetivos móviles', 'predicción de trayectoria', 'visión periférica', 'ejercicios en el navegador'],
  openGraph: { ...baseMetadata.openGraph, title: 'Seguimiento visual online: ejercicios gratis | SkillDrills', description: 'Seguimiento visual online: 15 ejercicios gratis para seguir un objetivo en onda sinusoidal, en ocho, en zigzag o con saltos. Sin registro.', images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Seguimiento visual online: ejercicios gratis' }] },
  twitter: { ...baseMetadata.twitter, title: 'Seguimiento visual online: ejercicios gratis | SkillDrills', description: 'Seguimiento visual online: 15 ejercicios gratis para seguir un objetivo en onda sinusoidal, en ocho, en zigzag o con saltos. Sin registro.' },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Directorio de Ejercicios", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Seguimiento visual", "item": "https://skilldrills.online/es/drills/visual-tracking" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "url": "https://skilldrills.online/es/drills/visual-tracking",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  ...getVisualTrackingHubCollectionFields('es', trackingDrills.length),
  "name": "Seguimiento visual online: ejercicios gratis",
  "description": "15 ejercicios gratis en el navegador para el seguimiento visual: onda sinusoidal, ocho, zigzag, triángulo, escalones, cambios de dirección, objetivo que salta, pantalla dividida y señales periféricas.",
  "dateModified": "2026-11-12",
  "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Peripheral_vision"],
  "hasPart": trackingDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'es', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/es${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre el seguimiento ocular suave y las sacadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En el seguimiento suave los ojos siguen un objetivo en movimiento de forma continua; las sacadas son saltos rápidos de la mirada de un punto a otro. Los ejercicios piden sobre todo seguimiento, pero el sitio no mide tus movimientos oculares."
      }
    },
    {
      "@type": "Question",
      "name": "¿Los ejercicios de seguimiento visual ayudan en deportes o juegos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Practican seguir objetivos en movimiento con la mirada y el ratón y reaccionar a cambios de trayectoria. No se garantiza una mejora en deportes ni en FPS. Úsalos como práctica extra y compara tus resultados en el mismo equipo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué ejercicios de seguimiento hay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "15 trayectorias y tareas: onda sinusoidal, ocho (infinito), zigzag, triángulo, escalones verticales, cambios de dirección imprevisibles, objetivo teletransportado, pantalla dividida, predicción estroboscópica, señales periféricas y otros. Se diferencian por la forma del recorrido y los cambios de velocidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿La tasa de refresco del monitor afecta a los resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Una pantalla se actualiza cada 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz, así que un objetivo rápido se ve más o menos fluido. Compara sesiones con la misma pantalla, el mismo ratón y el mismo navegador."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo debo practicar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay una duración ideal demostrada. Haz sesiones cortas y regulares, mira a lo lejos en las pausas y para si notas cansancio, dolor de cabeza o mareo."
      }
    }
  ]
};

const { additions, ...faqFields } = getVisualTrackingHubFaqFields('es');
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
