import CognitiveHubClient from '@/app/drills/cognitive/CognitiveHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');

export const metadata = {
  title: 'Entrenamiento cerebral y concentración | SkillDrills',
  description: 'Entrenamiento cerebral gratis: 8 ejercicios para el cerebro online de atención selectiva y dividida, reacción de elección, Stroop y tabla de Schulte. Sin registro.',
  keywords: [
    'entrenamiento cerebral', 'ejercicios para el cerebro online', 'entrenamiento cognitivo', 'juegos mentales gratis',
    'test de atención', 'velocidad de procesamiento', 'reacción de elección', 'atención selectiva',
    'test Stroop', 'tabla de Schulte', 'entrenar la atención', 'juegos cerebrales online',
    'gimnasia mental', 'atención dividida', 'agilidad mental'
  ],
  openGraph: {
    title: 'Entrenamiento cerebral y concentración | SkillDrills',
    description: 'Entrenamiento cerebral gratis: 8 ejercicios para el cerebro online de atención selectiva y dividida, reacción de elección, Stroop y tabla de Schulte. Sin registro.',
    type: 'website',
    url: 'https://skilldrills.online/es/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Entrenamiento Cognitivo y Ejercicios Mentales en SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrenamiento cerebral y concentración | SkillDrills',
    description: 'Entrenamiento cerebral gratis en tu navegador: 8 ejercicios para el cerebro de atención, reacción de elección y velocidad de procesamiento.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive',
    languages: getAlternateLanguages('/es/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Ejercicios de Rendimiento", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Entrenamiento Cognitivo y Mental", "item": "https://skilldrills.online/es/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12",
  "name": "Entrenamiento cerebral y concentración (8 ejercicios)",
  "url": "https://skilldrills.online/es/drills/cognitive",
  "description": "8 ejercicios de entrenamiento cerebral en el navegador para atención selectiva y dividida, reacción de elección, efecto Stroop, tabla de Schulte y velocidad de procesamiento.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": cognitiveDrills.map((drill) => {
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
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el entrenamiento cognitivo y cómo mejora el rendimiento mental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El entrenamiento cognitivo reúne tareas repetibles que exigen atención selectiva, atención dividida, cambio de regla y velocidad de procesamiento. En lugar de memorizar contenido, practicas elegir la respuesta correcta con presión de tiempo. Con práctica regular sueles volverte más rápido y preciso en la misma tarea; un efecto duradero sobre el funcionamiento del cerebro no está demostrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué capacidades se practican con estos ejercicios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los 8 ejercicios cubren cinco áreas: velocidad de procesamiento (emparejamiento de símbolos y lectura RSVP), inhibición de distracciones (ejercicio Stroop), atención dividida y multitarea (varios flujos a la vez), búsqueda visual con la tabla de Schulte y cambio de regla (reacción de elección con una regla que cambia). Los ejercicios de memoria están en la categoría Memoria."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué consiste el test de Stroop y por qué es fundamental para la concentración?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Descrito por John Ridley Stroop en 1935, el efecto Stroop es la interferencia que aparece cuando el significado de una palabra (por ejemplo, AZUL) choca con el color de su tinta (por ejemplo, rojo): hay que frenar el reflejo de lectura para responder el color. El test clásico mide la diferencia de tiempo entre ensayos congruentes e incongruentes. El ejercicio Stroop de SkillDrills es práctica, no un test diagnóstico: eliges el color de la tinta y se registran puntuación, precisión y nivel, sin puntuación de interferencia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo ayuda la tabla de Schulte a la velocidad de lectura y procesamiento visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La tabla de Schulte es una cuadrícula de números desordenados, asociada al psiquiatra Walter Schulte, que recorres desde el 1 en orden ascendente; la versión 5×5 es la más conocida. En SkillDrills la cuadrícula empieza en 3×3 y crece con cada tabla completada. Mantener la mirada en el centro y buscar el siguiente número con la visión periférica es una buena estrategia de práctica, pero no hay una mejora garantizada en la lectura ni fuera de la pantalla: sigue tu propio tiempo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo y con qué frecuencia se debe practicar el entrenamiento mental?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No existe una duración óptima demostrada. Las sesiones breves y concentradas, de unos 10 a 15 minutos varias veces por semana, son más fáciles de comparar que las sesiones largas y agotadoras. Descansa cuando baje tu precisión."
      }
    },
    {
      "@type": "Question",
      "name": "¿El entrenamiento cognitivo en línea realmente tiene transferencia a los videojuegos competitivos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No de forma garantizada. Las mejoras se ven sobre todo en tareas muy parecidas a las practicadas; la transferencia a videojuegos, trabajo o vida diaria es incierta y varía entre personas. La búsqueda visual y el filtrado de distracciones se parecen a algunas acciones de juego, como leer el minimapa, y pueden servir como práctica complementaria."
      }
    },
    {
      "@type": "Question",
      "name": "¿Estos ejercicios de agilidad mental son adecuados para niños, adultos y adultos mayores?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los pueden usar adolescentes y adultos, con una dificultad que sube con cada nivel. No son pruebas médicas ni herramientas de diagnóstico o prevención: no tratan el TDAH ni protegen del deterioro cognitivo. Úsalos para seguir tus propios resultados; si las dificultades persisten, consulta a un profesional de la salud."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué hardware o configuración técnica se requiere para realizar las pruebas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ninguno especial. Todos los ejercicios funcionan directamente en el navegador, con ratón o pantalla táctil, sin descargas ni registro. Para resultados más comparables, usa el mismo dispositivo y navegador, cierra aplicaciones pesadas en segundo plano y no cambies de equipo entre sesiones."
      }
    }
  ]
};

export default function LocalizedCognitiveHubClientPage() {
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
      <CognitiveHubClient faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))} />
    </>
  );
}
