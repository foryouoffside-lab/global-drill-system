import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Lectura Rápida | Lector RSVP | SkillDrills",
  description: "Entrenamiento de lectura rápida gratis: procesa palabras en un punto fijo y sigue PPM y precisión. No es una prueba clínica.",
  keywords: ["lectura rápida", "test de velocidad de lectura", "velocidad de lectura", "lector rápido online", "RSVP lectura", "palabras por minuto", "entrenamiento de lectura rápida"],
  openGraph: {
    title: "Lectura Rápida | Lector RSVP | SkillDrills",
    description: "Entrenamiento de lectura rápida gratis: procesa palabras en un punto fijo y sigue PPM y precisión. No es una prueba clínica.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Lectura Rápida | Lector RSVP | SkillDrills",
    description: "Entrenamiento de lectura rápida gratis: procesa palabras en un punto fijo y sigue PPM y precisión. No es una prueba clínica.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://skilldrills.online/es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ejercicios",
      "item": "https://skilldrills.online/es/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Cognitivo",
      "item": "https://skilldrills.online/es/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Lector RSVP",
      "item": "https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "Lector RSVP – Test de Velocidad de Lectura WPM",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Lector RSVP y test de lectura rápida online gratis: Elimina saltos sacádicos oculares y entrena tu velocidad léxica y comprensión hasta 850 WPM sin registro.",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "es-ES",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lector RSVP Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requiere un navegador moderno compatible con JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "es-ES",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Entrenamiento de Lectura Rápida RSVP",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader",
  "description": "Lector RSVP y test de lectura rápida online gratis: Elimina saltos sacádicos oculares y entrena tu velocidad léxica y comprensión hasta 850 WPM sin registro.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la técnica RSVP (Presentación Visual Serial Rápida)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "RSVP es una tecnología de lectura que proyecta palabras de manera individual y sucesiva en un punto focal fijo, suprimiendo los saltos sacádicos oculares."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué significa Punto de Reconocimiento Óptimo (ORP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El ORP (Optimal Recognition Point) es la posición intra-palabra (ligeramente a la izquierda del centro) donde la fóvea visual identifica el término con la menor latencia posible (Rayner, 1998)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué la lectura tradicional tiene un límite de velocidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En papel o pantalla convencional, hasta el 80% del tiempo lector se invierte en micro-movimientos sacádicos (20-40ms) y fijaciones, limitando el promedio a 200-250 palabras por minuto (Rayner, 2016)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la velocidad promedio y cuánto se puede mejorar con RSVP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El promedio adulto se sitúa en 200-250 WPM. Mediante entrenamiento regular con RSVP, los lectores dinámicos pueden alcanzar entre 500 y 850 WPM manteniendo una sólida comprensión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se pierde comprensión lectora al utilizar lectores RSVP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En rangos de 400 a 600 WPM para textos estructurados, la retención es equivalente a la lectura convencional. Por encima de 800 WPM, se requiere mayor disciplina de atención."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo ayuda RSVP a erradicar la subvocalización?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La subvocalización consiste en pronunciar internamente las palabras. Al mostrar el texto a velocidades superiores a la articulación vocal (>350 WPM), el cerebro asimila el significado directamente."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo se recomienda entrenar cada día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sesiones cortas de 10 a 15 minutos diarios son óptimas para acondicionar la musculatura ocular y la velocidad de decodificación léxica sin causar fatiga."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es eficaz el lector RSVP en teléfonos móviles?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, resulta especialmente ventajoso en smartphones al concentrar todo el texto en una sola línea fija, suprimiendo la necesidad de desplazamientos continuos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué se destaca una letra de cada palabra en color rojo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La letra destacada marca con precisión el ORP de la palabra, guiando a la fóvea hacia el punto neurálgico para captar el término en un solo impacto perceptual."
      }
    },
    {
      "@type": "Question",
      "name": "¿Esta herramienta y test de velocidad lectora son gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, SkillDrills proporciona esta herramienta en línea de forma 100% gratuita y sin necesidad de registro ni descargas."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Entrenar con el Lector RSVP",
  "description": "Lector RSVP y test de lectura rápida online gratis: Elimina saltos sacádicos oculares y entrena tu velocidad léxica y comprensión hasta 850 WPM sin registro.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fija la Mirada en la Línea Central",
      "text": "Relaja la visión y sitúa el foco sobre la guía central fija sin desplazar los ojos lateralmente.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Configura tu Velocidad Inicial (WPM)",
      "text": "Comienza a una velocidad accesible (ejemplo: 300 WPM) para adaptar la agilidad de reconocimiento léxico.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Suprime la Voz Mental Interna",
      "text": "Evita articular internamente los sonidos de las palabras y permítete comprender la idea visualmente.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Incrementa la Velocidad Progresivamente",
      "text": "Añade incrementos de 50 WPM conforme domines cada fragmento hasta superar marcas de 600 WPM.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "Neurociencia de la Lectura Rápida RSVP & Punto de Reconocimiento Óptimo",
    paragraphs: [
      "La Presentación Visual Serial Rápida (RSVP - Rapid Serial Visual Presentation) es una metodología de la psicología cognitiva concebida para superar las limitaciones biomecánicas del sistema oculomotor.",
      "En la lectura habitual de textos impresos o pantallas, aproximadamente el 80% del tiempo transcurre realizando movimientos sacádicos (20 a 40ms) y fijaciones foveales (200 a 250ms), agravados por saltos regresivos debidos a distracciones externas (Rayner, 1998, 2016).",
      "Al anclar de forma estricta cada término en su Punto de Reconocimiento Óptimo (ORP), la tecnología RSVP proyecta las palabras directamente sobre la fóvea visual, facilitando velocidades de procesamiento léxico de hasta 850 palabras por minuto sin cansancio muscular.",
    ],
  },
  benchmarks: {
    title: 'Estándares de Velocidad Lectora & Baremos Cognitivos (WPM)',
    headers: ['Nivel', 'Categoría', 'Velocidad de Lectura', 'Tasa de Comprensión', 'Percentil'],
    rows: [
      { tier: 'Tier 1', rank: 'Lector Rápido de Élite', stat: '650 – 850+ WPM', level: 'Maestría', accuracy: '95%+', percentile: 'Top 1%' },
      { tier: 'Tier 2', rank: 'Lector Avanzado Veloz', stat: '450 – 649 WPM', level: 'Diamante', accuracy: '90-94%', percentile: 'Top 5%' },
      { tier: 'Tier 3', rank: 'Competente Superior', stat: '300 – 449 WPM', level: 'Platino', accuracy: '85-89%', percentile: 'Top 15%' },
      { tier: 'Tier 4', rank: 'Promedio Adulto Estándar', stat: '200 – 299 WPM', level: 'Oro', accuracy: '75-84%', percentile: 'Top 50%' },
      { tier: 'Tier 5', rank: 'Iniciación / Lectura Lenta', stat: '< 200 WPM', level: 'Plata', accuracy: '< 75%', percentile: 'Base' },
    ],
  },
  protocols: {
    title: 'Protocolos de Optimización de Velocidad Lectora',
    description: 'Directrices basadas en evidencia científica para maximizar el procesamiento visual.',
    items: [
      { title: "Fija la Mirada en la Línea Central", description: "Relaja la visión y sitúa el foco sobre la guía central fija sin desplazar los ojos lateralmente." },
      { title: "Configura tu Velocidad Inicial (WPM)", description: "Comienza a una velocidad accesible (ejemplo: 300 WPM) para adaptar la agilidad de reconocimiento léxico." },
      { title: "Suprime la Voz Mental Interna", description: "Evita articular internamente los sonidos de las palabras y permítete comprender la idea visualmente." },
      { title: "Incrementa la Velocidad Progresivamente", description: "Añade incrementos de 50 WPM conforme domines cada fragmento hasta superar marcas de 600 WPM." },
    ],
  },
  faqs: {
    title: 'Preguntas Frecuentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <RSVPReaderClient
        copy={{
          title: "Lectura rápida",
          subtitle: "Procesa palabras en un punto fijo y entrena tu velocidad de lectura",
          startTitle: "Entrenamiento RSVP",
          startSubtitle: "Reconocimiento de palabras • Enfoque ORP",
          stageCaption: "Las palabras aparecen en el centro. Pulsa cuando aparezca la palabra objetivo.",
          rulesTitle: "Instrucciones del ejercicio y puntuación",
          aboutTitle: "¿Qué es la lectura RSVP?",
          faqTitle: "Preguntas frecuentes",
          labels: { score: "Puntos", time: "Tiempo", speed: "Velocidad", bestScore: "Mejor puntuación", timeLeft: "Tiempo restante", targetWord: "Palabra objetivo", detected: "OBJETIVO DETECTADO", ready: "PREPÁRATE", accuracy: "Precisión", hits: "Aciertos", errors: "Errores", points: "Puntos", playAgain: "Jugar de nuevo" },
          aboutLead: "RSVP muestra las palabras una a una en el mismo punto de la pantalla. Reduce parte de los saltos oculares, pero la comprensión puede bajar cuando el ritmo aumenta.",
          aboutText: "Este ejercicio entrena el reconocimiento de palabras en el punto óptimo de reconocimiento (ORP). PPM describe el ritmo de presentación; la latencia de la pantalla y del toque también influye. 850 PPM es el nivel superior del ejercicio, no una promesa de comprensión general a esa velocidad.",
          aboutCards: [
            { title: "¿Para quién sirve?", desc: "Para estudiantes, profesionales y personas que leen mucho o quieren practicar lectura rápida." },
            { title: "¿Qué habilidades entrena?", desc: "Reconocimiento de palabras, memoria de trabajo y atención sostenida ante información visual rápida." },
            { title: "Ritmo progresivo", desc: "Cinco niveles de 250 a 850 PPM suben el ritmo mientras controlas la precisión." }
          ],
          rulesItems: [
            { num: "1", text: "Palabra objetivo", highlight: "Banner superior", result: "Encontrarla en el flujo central" },
            { num: "2", text: "Foco ORP", highlight: "Reduce los movimientos oculares", result: "Lee en el mismo punto" },
            { num: "3", text: "Objetivo detectado", highlight: "+100 puntos", result: "Pulsa el botón de detección" },
            { num: "4", text: "Nivel de ritmo", highlight: "250 → 850 PPM", result: "Cinco niveles de dificultad" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
