import DualTargetFlowClient from '@/app/drills/cognitive/attention/multi-tasking/DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Multitarea | Rastreo Doble | SkillDrills",
  description: "Test de multitarea gratis: en dos flujos de símbolos opuestos, pulsa solo el símbolo objetivo de cada lado. Es un autocheck.",
  keywords: [
    "test de multitarea",
    "test de flexibilidad cognitiva",
    "test de alternancia de tareas",
    "juego de multitarea mental",
    "entrenamiento de procesamiento paralelo",
    "evaluacion de sobrecarga cognitiva",
    "coste de cambio cognitivo test",
    "test de capacidad multitarea online",
    "ejercicios de agilidad mental gratis",
    "velocidad de alternancia atencional"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Multitarea | Rastreo Doble | SkillDrills",
    description: "Test de multitarea gratis: en dos flujos de símbolos opuestos, pulsa solo el símbolo objetivo de cada lado. Es un autocheck.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Multitarea | Rastreo Doble | SkillDrills",
    description: "Test de multitarea gratis: en dos flujos de símbolos opuestos, pulsa solo el símbolo objetivo de cada lado. Es un autocheck.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "Entrenamientos",
      "item": "https://skilldrills.online/es/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Entrenamiento Cognitivo",
      "item": "https://skilldrills.online/es/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Test de Multitarea",
      "item": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "Test de Multitarea – Entrenamiento de Atención en Flujo Doble",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test de multitarea gratis: en dos flujos de símbolos opuestos, pulsa solo el símbolo objetivo de cada lado. Es un autocheck.",
  "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking",
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
  "name": "Test de Multitarea",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requiere un navegador moderno compatible con JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Juego de Multitarea – Flujo Visual Dual",
  "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking",
  "description": "Test de multitarea gratis: en dos flujos de símbolos opuestos, pulsa solo el símbolo objetivo de cada lado. Es un autocheck.",
  "genre": [
    "Accion",
    "Juego Mental",
    "Entrenamiento Cognitivo"
  ],
  "gamePlatform": [
    "Navegador Web",
    "Escritorio",
    "Dispositivos Moviles"
  ],
  "applicationCategory": "Game",
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
      "name": "¿Qué es el Test de Multitarea (Dual-Target Flow)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un ejercicio de práctica: la pantalla se divide en dos carriles (izquierda/derecha en horizontal, arriba/abajo en vertical) donde las figuras salen del centro hacia fuera. Haces clic o tocas solo el símbolo objetivo que aparece en cada carril."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es el coste de cambio (switch cost) según Rogers y Monsell (1995)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es la pérdida de rapidez y precisión al pasar de una regla de tarea a otra, en lugar de repetir la misma."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede el cerebro hacer de verdad dos cosas a la vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para decisiones no automatizadas, los estudios sobre el cuello de botella central sugieren una alternancia rápida más que un procesamiento realmente paralelo (Pashler, 1994)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué observaron Ophir, Nass y Wagner (2009) en usuarios de multitarea intensiva?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las personas con mucha multitarea mediática rindieron peor en tareas que exigen ignorar estímulos irrelevantes. El estudio es correlacional y no demuestra causa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada objetivo acertado vale 100 puntos base multiplicados por el combo y el nivel, y suma +2 s (máximo 60 s). Pulsar un símbolo equivocado o dejar pasar un símbolo objetivo resta 1 s y reinicia el combo. Precisión = aciertos ÷ (aciertos + errores). La nota depende de la puntuación (24.000 puntos = nota máxima) y es una referencia de práctica de SkillDrills."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué estrategias ayudan a puntuar más?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No fijes la vista en un solo carril: mira cerca del límite entre ambos y revisa los dos lados. Los símbolos objetivo cambian cada 20 segundos, así que comprueba el indicador de cada carril a menudo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo aumenta la dificultad con el nivel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El nivel sube con la puntuación: las figuras avanzan más rápido y aparecen más a menudo. Desde el nivel 3, los dos carriles tienen símbolos objetivo distintos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Influye la frecuencia de la pantalla en el resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una frecuencia alta puede mostrar más nítidas las figuras rápidas, pero no hemos medido su efecto en la puntuación. Compara resultados en el mismo dispositivo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura una partida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El reloj empieza en 45 segundos: +2 s por acierto (máximo 60 s) y −1 s por error. La partida termina cuando el tiempo llega a cero. Compara varias partidas en las mismas condiciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratuito este test de multitarea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, SkillDrills lo ofrece gratis en el navegador, sin descargas ni registro."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Realizar el Test de Multitarea",
  "description": "Guía práctica para vigilar dos flujos de símbolos y pulsar solo los objetivos de cada carril.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Centra la Mirada en la Zona Intermedia",
      "text": "Mira cerca del límite entre los dos carriles para vigilar ambos lados.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Reconoce los Símbolos Objetivo",
      "text": "Comprueba el símbolo objetivo que aparece en cada carril; cambia cada 20 segundos.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Presiona las Figuras Coincidentes",
      "text": "Haz clic o toca los símbolos iguales al objetivo de su carril antes de que lleguen al borde (+2 s). Un símbolo equivocado cuesta 1 s.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Conserva el Ritmo con la Aceleración",
      "text": "La velocidad sube con el nivel y, desde el nivel 3, cada carril tiene su propio objetivo. Sin errores, el multiplicador de combo crece.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "Test de Multitarea: Guía",
    paragraphs: [
      "Este test de multitarea gratis te pide vigilar dos flujos de símbolos a la vez y pulsar solo el objetivo de cada carril. Es una autoevaluación.",
      "El coste de cambio (switch cost) es la demora y el aumento de errores al pasar de una regla a otra en lugar de mantener una sola (Rogers & Monsell, 1995).",
      "Aquí los objetivos cambian cada 20 segundos y son distintos entre carriles desde el nivel 3, así que hay que actualizar la regla de cada lado (Pashler, 1994; Wickens, 2002).",
    ],
  },
  benchmarks: {
    title: 'Etapas de práctica SkillDrills (precisión)',
    headers: ['Nivel', 'Rango', 'Calificacion', 'Precision', 'Marcador de práctica'],
    note: "Etapas editoriales de práctica para comparar tus propias sesiones; no son estadísticas de población.",

    rows: [
      { tier: 'Etapa 1', rank: 'Muy avanzada', stat: 'Ritmo muy alto', accuracy: '98%+', marker: 'Ritmo muy alto con alta precisión' },
      { tier: 'Etapa 2', rank: 'Avanzada', stat: 'Ritmo alto', accuracy: '94-97%', marker: 'Ritmo alto y regular' },
      { tier: 'Etapa 3', rank: 'Sólida', stat: 'Ritmo estable', accuracy: '88-93%', marker: 'Ritmo estable con algunos errores' },
      { tier: 'Etapa 4', rank: 'En desarrollo', stat: 'Ritmo medio', accuracy: '78-87%', marker: 'Ritmo medio con margen de mejora' },
      { tier: 'Etapa 5', rank: 'Inicial', stat: 'Ritmo inicial', accuracy: '<78%', marker: 'Punto de partida' },
    ],
  },
  protocols: {
    title: 'Pasos de una partida',
    description: 'Cómo vigilar los dos carriles sin perder el combo.',
    items: [
      { title: "Centra la Mirada en la Zona Intermedia", description: "Mira cerca del límite entre los dos carriles para vigilar ambos lados." },
      { title: "Reconoce los Símbolos Objetivo", description: "Comprueba el símbolo objetivo que aparece en cada carril; cambia cada 20 segundos." },
      { title: "Presiona las Figuras Coincidentes", description: "Haz clic o toca los símbolos iguales al objetivo de su carril antes de que lleguen al borde (+2 s). Un símbolo equivocado cuesta 1 s." },
      { title: "Conserva el Ritmo con la Aceleración", description: "La velocidad sube con el nivel y, desde el nivel 3, cada carril tiene su propio objetivo. Sin errores, el multiplicador de combo crece." },
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

export default function EnhancedPage() {
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
      <DualTargetFlowClient copy={{
        title: "Test de Multitarea", subtitle: "Vigila dos flujos de símbolos al mismo tiempo",
        statScore: "Puntos", statTime: "Tiempo", timeLeft: "Tiempo restante", statLevel: "Nivel", statBest: "Mejor puntuación",
        startTitle: "Test de Multitarea", startSubtitle: "Dos flujos · foco periférico", getReady: "Prepárate", accuracy: "Precisión", hits: "Aciertos", peakLevel: "Nivel máximo", maxCombo: "Combo máximo",
        caption: "Encuentra símbolos iguales en dos flujos opuestos y responde antes de que aumente la velocidad.",
        rulesTitle: "Instrucciones y puntuación", ruleItems: [
          { text: "Acierta el objetivo", highlight: "+100 PTS, +2 s", result: "Símbolo del carril" },
          { text: "Dos carriles", highlight: "Desde nivel 3", result: "Un objetivo por carril" },
          { text: "Error / objetivo perdido", highlight: "Combo a cero", result: "−1 s" },
          { text: "Cambio de objetivo", highlight: "Cada 20 s", result: "Revisa el símbolo" },
        ],
        aboutTitle: "Sobre multitarea y flujo de doble objetivo", aboutLead: "Este autocheck cognitivo combina dos flujos visuales y observa la precisión practicada y la velocidad de cambio atencional, no una capacidad general para todas las tareas cotidianas.",
        audienceTitle: "Para quién sirve", audienceText: "Para jugadores que vigilan varios elementos en pantalla, estudiantes y personas que quieren organizar información simultánea.",
        skillsTitle: "Habilidades entrenadas", skillsText: "Rastreo visual bilateral, detección periférica, cambio atencional y control ejecutivo.", flexibilityTitle: "Velocidad de cambio", flexibilityText: "Cada nivel modifica ritmo y patrones: cambia entre los flujos sin perder precisión."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
