import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Lectura Rápida Online | Lector RSVP | SkillDrills",
  description: "Lectura rápida online gratis: las palabras aparecen una a una en un punto fijo, de 250 a 850 palabras por minuto, y pulsas la palabra objetivo. No mide comprensión.",
  keywords: ["lectura rápida", "lectura rápida online", "ejercicios de lectura rápida", "palabras por minuto", "RSVP", "lector RSVP"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Lectura Rápida Online | Lector RSVP | SkillDrills",
    description: "Lectura rápida online gratis: las palabras aparecen una a una en un punto fijo, de 250 a 850 palabras por minuto, y pulsas la palabra objetivo. No mide comprensión.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Lectura Rápida Online | Lector RSVP | SkillDrills",
    description: "Lectura rápida online gratis: las palabras aparecen una a una en un punto fijo, de 250 a 850 palabras por minuto, y pulsas la palabra objetivo. No mide comprensión.",
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
  "name": "Lectura Rápida Online – Lector RSVP",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Lectura rápida online gratis con el método RSVP: palabras de un texto en inglés aparecen una a una en un punto fijo, de 250 a 850 PPM, y pulsas cuando sale la palabra objetivo. No mide comprensión.",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lectura Rápida Online",
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
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Entrenamiento de Lectura Rápida RSVP",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/rsvp-reader",
  "description": "Lectura rápida online gratis con el método RSVP: palabras de un texto en inglés aparecen una a una en un punto fijo, de 250 a 850 PPM, y pulsas cuando sale la palabra objetivo. No mide comprensión.",
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
  "dateModified": "2026-11-12",
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
        "text": "Es una forma de lectura en la que las palabras aparecen una a una en el mismo punto de la pantalla, sin que la mirada tenga que recorrer la línea. No garantiza mejor comprensión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona este ejercicio de lectura rápida online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El banner muestra una palabra objetivo. En el centro pasan palabras en inglés, una a una; pulsar el botón mientras la palabra objetivo está en pantalla da 100 puntos. Cada ronda dura 45 segundos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo sube la velocidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La ronda empieza en el nivel 1 (250 palabras por minuto). Cada 2 palabras objetivo detectadas (cada 200 puntos) sube un nivel: 350, 480, 650 y 850 PPM en el nivel 5."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si me equivoco o se me escapa el objetivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pulsar otra palabra cuenta como error y bloquea el botón 1 segundo. Dejar pasar la palabra objetivo cuenta como fallo. Ambos bajan la precisión, pero no restan tiempo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Las PPM mostradas son mi velocidad de lectura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Son la velocidad de presentación de cada nivel. El resultado muestra puntos, aciertos, errores, precisión y nivel alcanzado, no tu velocidad de lectura personal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Mide la comprensión lectora?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. No hay preguntas sobre el texto. Los estudios indican que la comprensión puede bajar cuando sube el ritmo de RSVP (Rayner et al., 2016)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la velocidad media de lectura?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para la lectura silenciosa en inglés se suelen citar unas 200 a 300 palabras por minuto (Rayner, 1998). No es directamente comparable con los niveles de este ejercicio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo practicar con texto en español?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Todavía no: el flujo de palabras está en inglés."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué se destaca una letra de cada palabra en color rojo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Marca el punto de reconocimiento óptimo (ORP), un poco a la izquierda del centro, para que la mirada se quede en un mismo lugar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este ejercicio de lectura rápida es gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis, sin registro ni descargas, directamente en el navegador."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo hacer el ejercicio de lectura rápida",
  "description": "Lectura rápida online gratis con el método RSVP: palabras de un texto en inglés aparecen una a una en un punto fijo, de 250 a 850 PPM, y pulsas cuando sale la palabra objetivo. No mide comprensión.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fija la mirada en la letra roja",
      "text": "Relaja la vista sobre la letra roja central sin mover los ojos de lado a lado.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Empieza a 250 PPM",
      "text": "Cada ronda empieza en el nivel 1 (250 PPM) para que te acostumbres al flujo de palabras.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Pulsa la palabra objetivo",
      "text": "Recuerda la palabra del banner y pulsa el botón mientras está en pantalla. Pulsar otra palabra bloquea el botón 1 segundo.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "La velocidad sube sola",
      "text": "Cada 2 palabras objetivo detectadas, la velocidad sube un nivel, hasta 850 PPM.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "Lectura Rápida Online con RSVP",
    paragraphs: [
      "Lectura rápida online con el método RSVP: las palabras aparecen una a una en el mismo punto de la pantalla, con la letra del ORP en rojo. Pulsa el botón cuando aparezca la palabra objetivo del banner; cada 2 aciertos la velocidad sube un nivel, de 250 a 850 palabras por minuto. El texto que se muestra está en inglés.",
      "En la lectura habitual, la mirada salta de palabra en palabra (movimientos sacádicos) y a veces retrocede (Rayner, 1998). RSVP elimina esos saltos, pero a ritmos altos la comprensión puede bajar (Rayner et al., 2016).",
      "Este ejercicio solo mide si detectas la palabra objetivo: muestra puntos, aciertos, errores, precisión y nivel alcanzado. No es un curso de lectura rápida, no mide comprensión y no es una prueba clínica.",
    ],
  },
  benchmarks: {
    title: 'Etapas de práctica SkillDrills (nivel alcanzado)',
    headers: ['Nivel', 'Categoría', 'Nivel alcanzado', 'Precisión', 'Marcador de práctica'],
    note: "Etapas de práctica definidas por SkillDrills para comparar tus propias sesiones; no son estadísticas de población ni normas clínicas, y no miden comprensión.",
    rows: [
      { tier: 'Etapa 1', rank: 'Muy avanzada', stat: 'Nivel 5 (850 PPM)', accuracy: '95%+', marker: 'Flujo más rápido seguido con precisión' },
      { tier: 'Etapa 2', rank: 'Avanzada', stat: 'Nivel 4 (650 PPM)', accuracy: '90-94%', marker: 'Buen seguimiento a alta velocidad' },
      { tier: 'Etapa 3', rank: 'Sólida', stat: 'Nivel 3 (480 PPM)', accuracy: '85-89%', marker: 'Seguimiento estable' },
      { tier: 'Etapa 4', rank: 'En desarrollo', stat: 'Nivel 2 (350 PPM)', accuracy: '75-84%', marker: 'En progreso' },
      { tier: 'Etapa 5', rank: 'Inicial', stat: 'Nivel 1 (250 PPM)', accuracy: '< 75%', marker: 'Punto de partida' },
    ],
  },
  protocols: {
    title: 'Cómo se juega',
    description: 'Los cuatro pasos de cada ronda.',
    items: [
      { title: "Fija la mirada en la letra roja", description: "Relaja la vista sobre la letra roja central sin mover los ojos de lado a lado." },
      { title: "Empieza a 250 PPM", description: "Cada ronda empieza en el nivel 1 (250 PPM) para que te acostumbres al flujo de palabras." },
      { title: "Pulsa la palabra objetivo", description: "Recuerda la palabra del banner y pulsa el botón mientras está en pantalla. Pulsar otra palabra bloquea el botón 1 segundo." },
      { title: "La velocidad sube sola", description: "Cada 2 palabras objetivo detectadas, la velocidad sube un nivel, hasta 850 PPM." },
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
          title: "Lectura rápida online",
          subtitle: "Procesa palabras en un punto fijo y entrena tu velocidad de lectura",
          startTitle: "Lectura rápida online",
          startSubtitle: "Reconocimiento de palabras • Enfoque ORP",
          stageCaption: "Las palabras aparecen en el centro. Pulsa cuando aparezca la palabra objetivo.",
          rulesTitle: "Instrucciones del ejercicio y puntuación",
          aboutTitle: "¿Qué es la lectura RSVP?",
          faqTitle: "Preguntas frecuentes",
          labels: { score: "Puntos", time: "Tiempo", speed: "Velocidad", bestScore: "Mejor puntuación", timeLeft: "Tiempo restante", targetWord: "Palabra objetivo", detected: "OBJETIVO DETECTADO", ready: "PREPÁRATE", accuracy: "Precisión", hits: "Aciertos", errors: "Errores", points: "Puntos", playAgain: "Jugar de nuevo" },
          aboutLead: "RSVP muestra las palabras una a una en el mismo punto de la pantalla. Reduce parte de los saltos oculares, pero la comprensión puede bajar cuando el ritmo aumenta.",
          aboutText: "Este ejercicio entrena el reconocimiento de palabras de un texto en inglés en el punto óptimo de reconocimiento (ORP). PPM describe el ritmo de presentación; la latencia de la pantalla y del toque también influye. 850 PPM es el nivel superior del ejercicio, no una promesa de comprensión general a esa velocidad.",
          aboutCards: [
            { title: "¿Para quién sirve?", desc: "Para estudiantes, profesionales y personas que leen mucho o quieren practicar lectura rápida." },
            { title: "¿Qué habilidades entrena?", desc: "Reconocimiento de palabras, memoria de trabajo y atención sostenida ante información visual rápida." },
            { title: "Ritmo progresivo", desc: "Cinco niveles de 250 a 850 PPM; cada 2 palabras objetivo detectadas el ritmo sube un nivel." }
          ],
          rulesItems: [
            { num: "1", text: "Palabra objetivo", highlight: "Banner superior", result: "Encontrarla en el flujo central" },
            { num: "2", text: "Foco ORP", highlight: "Reduce los movimientos oculares", result: "Lee en el mismo punto" },
            { num: "3", text: "Objetivo detectado", highlight: "+100 puntos", result: "Pulsa mientras aparece" },
            { num: "4", text: "Nivel de ritmo", highlight: "250 → 850 PPM", result: "Sube cada 2 aciertos" }
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
