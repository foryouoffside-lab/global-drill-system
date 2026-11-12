import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: 'Ejercicios de percepción visual online | SkillDrills',
  description: 'Ejercicios de percepción visual online: 9 ejercicios gratis en el navegador para reacción visual, seguimiento de objetivos, búsqueda visual y distancias.',
  keywords: ['ejercicios de percepción visual online', 'percepción visual', 'búsqueda visual', 'seguimiento de objetivos', 'atención visual', 'percepción de profundidad', 'reacción a la luz', 'seguimiento de múltiples objetos'],
  openGraph: {
    title: 'Ejercicios de percepción visual online | SkillDrills',
    description: 'Ejercicios de percepción visual online: 9 ejercicios gratis en el navegador para reacción visual, seguimiento de objetivos, búsqueda visual y distancias.',
    type: 'website',
    url: 'https://skilldrills.online/es/drills/visual',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Ejercicios de percepción visual online en SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ejercicios de percepción visual online | SkillDrills',
    description: 'Ejercicios de percepción visual online: 9 ejercicios gratis en el navegador para reacción visual, seguimiento de objetivos, búsqueda visual y distancias.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual',
    languages: getAlternateLanguages('/drills/visual'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Ejercicios de Rendimiento", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Percepción Visual", "item": "https://skilldrills.online/es/drills/visual" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "es",
  "dateModified": "2026-11-12",
  "name": "Ejercicios de percepción visual online (9 ejercicios)",
  "url": "https://skilldrills.online/es/drills/visual",
  "description": "9 ejercicios gratis en el navegador para reacción visual, control de impulsos, objetivos en movimiento, varios objetos, búsqueda visual y cálculo de distancias.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": visualDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'es', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/es${drill.href}`,
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
  "inLanguage": "es",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿El entrenamiento visual en el navegador ayuda en deportes o juegos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los ejercicios practican seguir objetivos en movimiento con la mirada y el ratón, reaccionar a señales visuales y buscar objetivos. No se garantiza una mejora en deportes ni en juegos FPS. Úsalos como práctica extra y compara tus propios resultados en el mismo equipo."
      }
    },
    {
      "@type": "Question",
      "name": "¿El ejercicio de distancias mide la visión en profundidad (3D)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Una pantalla plana no tiene disparidad binocular, así que no evalúa la visión estereoscópica. Una esfera se acerca y crece en pantalla; haces clic cuando llega a la profundidad marcada. Se practica calcular distancia y timing."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué entrena el seguimiento de objetos múltiples (MOT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sigues objetivos marcados entre objetos idénticos en movimiento. Exige atención dividida y memoria de trabajo visual. No está demostrado que amplíe el campo visual ni que mejore la conducción."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre el seguimiento ocular suave y las sacadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En el seguimiento suave los ojos siguen un objetivo en movimiento de forma continua; las sacadas son saltos rápidos de la mirada. Los ejercicios de seguimiento piden sobre todo seguimiento suave, pero el sitio no mide tus movimientos oculares."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué mide el ejercicio de reacción a la luz?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo entre la señal luminosa en pantalla y tu clic. Incluye retrasos de la pantalla, el ratón y el navegador; no es un tiempo neural puro."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué entrena la búsqueda visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buscas un objetivo entre elementos que distraen. Practica la atención selectiva y la rapidez de búsqueda en esa tarea; la transferencia a la vida diaria varía y no está garantizada."
      }
    },
    {
      "@type": "Question",
      "name": "¿Mis resultados dependen del equipo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Una pantalla se actualiza cada 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz. Compara sesiones con la misma pantalla, el mismo ratón y el mismo navegador."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto debe durar una sesión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay una duración ideal demostrada. Haz sesiones cortas y regulares, mira a lo lejos en las pausas y para si notas cansancio, dolor de cabeza o molestias."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  { "@type": "Question", "name": "¿Cuántos ejercicios incluye la categoría de entrenamiento visual?", "acceptedAnswer": { "@type": "Answer", "text": "La categoría reúne 9 ejercicios de navegador en tres focos: reacción y control de impulsos, seguimiento y movimiento ocular, y reconocimiento y profundidad. Cada tarjeta abre el ejercicio correspondiente." } },
  { "@type": "Question", "name": "¿Los ejercicios visuales del navegador sustituyen un examen de la vista?", "acceptedAnswer": { "@type": "Answer", "text": "No. Practican tareas repetibles de tiempo visual, seguimiento, búsqueda y juicio espacial. No diagnostican la vista ni enfermedades oculares y no sustituyen una consulta con un optometrista u oftalmólogo." } }
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
