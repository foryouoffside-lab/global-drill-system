import ConcentrationStaminaClient from '@/app/drills/cognitive/attention/concentration-stamina/ConcentrationStaminaClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Concentración | Atención Sostenida | SkillDrills",
  description: "Test de concentración online gratis de 45 segundos: evalúa atención sostenida, control inhibitorio y cambios de regla.",
  keywords: [
    "test de concentración",
    "test de concentración gratis",
    "test de concentración online",
    "test de atención sostenida",
    "test de concentración y atención",
    "test de foco y atención",
    "test de concentración visual",
    "test de vigilancia cognitiva",
    "entrenamiento de concentración gratis",
    "control inhibitorio y atención",
    "test CPT online",
    "ejercicio de concentración prolongada"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Concentración | Atención Sostenida | SkillDrills",
    description: "Test de concentración online gratis de 45 segundos: evalúa atención sostenida, control inhibitorio y cambios de regla.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Concentración | Atención Sostenida | SkillDrills",
    description: "Test de concentración online gratis de 45 segundos: evalúa atención sostenida, control inhibitorio y cambios de regla.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina',
    languages: getAlternateLanguages('/drills/cognitive/attention/concentration-stamina'),
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
      "name": "Atención Sostenida y Concentración",
      "item": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Vigilance_(psychology)", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Test de Concentración y Atención Sostenida",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test de concentración online gratis de 45 segundos: responde solo a las vocales o a los números primos de la regla activa y entrena la atención sostenida.",
  "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina",
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
  "name": "Test de Concentración Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requiere un navegador moderno compatible con JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Juego de Resistencia de Foco y Concentración",
  "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina",
  "description": "Test de concentración online gratis de 45 segundos: responde solo a las vocales o a los números primos de la regla activa y entrena la atención sostenida.",
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
      "name": "¿Qué es el Test de Atención Sostenida y Resistencia de Concentración?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un ejercicio de 45 segundos con formato CPT (tarea de rendimiento continuo): aparecen letras y números en secuencia y solo respondes a los que cumplen la regla activa (vocales o números primos), ignorando el resto."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué significa el decaimiento de vigilancia (Mackworth, 1948)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mackworth (1948) observó en operadores de radar que la detección de señales poco frecuentes baja a medida que la vigilancia se alarga. Este test dura solo 45 segundos: no reproduce ese decaimiento, sino que entrena la concentración a ritmo rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué cambian las reglas de clasificación periódicamente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada 10 segundos la regla alterna entre vocales (A E I O U) y números primos (2 3 5 7). Así entrenas el paso inmediato a un nuevo criterio (cambio de tarea, Monsell, 2003)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La puntuación no mide tiempo de reacción en milisegundos: cuenta los aciertos (+100 puntos), los objetivos no respondidos (omisiones) y las falsas alarmas (comisiones). Precisión = aciertos ÷ (aciertos + omisiones + falsas alarmas)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo saber si mi concentración está decayendo durante la prueba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En este test, la caída de concentración se ve en los objetivos no respondidos y en las falsas alarmas. Cada falsa alarma muestra un destello rojo y bloquea la respuesta durante 1 segundo; no se restan puntos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo mejorar en este test de concentración?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mantén en mente la regla activa (vocales o números primos), responde solo a los elementos que la cumplen y deja pasar el resto. Compara tus propias sesiones en el mismo dispositivo para seguir tu precisión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la frecuencia ideal de práctica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unas cuantas partidas (45 segundos cada una) antes de estudiar o trabajar son suficientes; compara tus puntuaciones a la misma hora y en el mismo dispositivo. No se garantiza una mejora en la vida diaria."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo afecta la falta de sueño a los resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La privación de sueño puede acelerar la pérdida de vigilancia y empeorar la estabilidad de respuesta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué significan los niveles de rendimiento obtenidos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Son etapas de práctica de SkillDrills basadas en tu precisión, para comparar tus propias sesiones. No se basan en baremos ni datos normativos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este test de concentración es totalmente gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, SkillDrills ofrece esta herramienta online de forma 100% gratuita y sin necesidad de descargas ni suscripciones."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Realizar el Test de Concentración Continua",
  "description": "Test de concentración online gratis de 45 segundos: responde solo a las vocales o a los números primos de la regla activa y entrena la atención sostenida.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Consulta la Regla Activa Inicial",
      "text": "Verifica en el banner superior cuál es el criterio que define un objetivo válido (ejemplo: Vocales o Números Primos).",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Mantén la Mirada Fija y Atenta",
      "text": "Observa el flujo sucesivo de caracteres sin apartar la atención del centro del panel interactivo.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Pulsa Únicamente ante Objetivos Válidos",
      "text": "Haz clic, toca la pantalla o pulsa Espacio o Intro solo cuando el carácter cumpla la regla activa.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Adáptate a la Inversión de Reglas",
      "text": "Cada 10 segundos, reconfigura tu criterio mental sin titubear cuando el cartel superior indique la nueva condición.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/concentration-stamina#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('mackworth1948', 'parasuraman1979', 'robertson1997', 'monsell2003', 'broadbent1958', 'woods2015'),
  intro: {
    title: "Test de Concentración y Atención Sostenida: Guía",
    paragraphs: [
      "Este test de concentración online gratis de 45 segundos registra atención sostenida, control inhibitorio y cambios de regla como una autoevaluación. El resultado varía según el estado del día y la familiaridad y no sustituye una evaluación profesional.",
      "Mackworth (1948) observó en operadores de radar que la detección de señales poco frecuentes baja a medida que la vigilancia se alarga, y la caída es mayor cuando los eventos son rápidos (Parasuraman, 1979). Este test condensa el ejercicio en 45 segundos.",
      "Cada 10 segundos la regla alterna entre vocales y números primos: hay que abandonar el criterio anterior y aplicar el nuevo al instante (Monsell, 2003).",
    ],
  },
  benchmarks: {
    title: 'Etapas de Práctica de Atención Sostenida (CPT)',
    headers: ['Nivel', 'Categoría', 'Rango de Rendimiento', 'Precisión', 'Marcador de práctica'],
    note: "Etapas editoriales de práctica para comparar tus propias sesiones; no son estadísticas de población.",

    rows: [
      { tier: 'Etapa 1', rank: 'Muy avanzada', stat: 'Ritmo muy alto', accuracy: '98%+', marker: 'Ritmo muy alto con alta precisión' },
      { tier: 'Etapa 2', rank: 'Avanzada', stat: 'Ritmo alto', accuracy: '94-97%', marker: 'Ritmo alto y regular' },
      { tier: 'Etapa 3', rank: 'Sólida', stat: 'Ritmo estable', accuracy: '88-93%', marker: 'Ritmo estable con algunos errores' },
      { tier: 'Etapa 4', rank: 'En desarrollo', stat: 'Ritmo medio', accuracy: '78-87%', marker: 'Ritmo medio con margen de mejora' },
      { tier: 'Etapa 5', rank: 'Inicial', stat: 'Ritmo inicial', accuracy: '< 78%', marker: 'Punto de partida' },
    ],
  },
  protocols: {
    title: 'Protocolos de Resistencia Atencional y Foco',
    description: 'Pautas de práctica para mantener el foco durante toda la partida y evitar distracciones.',
    items: [
      { title: "Consulta la Regla Activa Inicial", description: "Verifica en el banner superior cuál es el criterio que define un objetivo válido (ejemplo: Vocales o Números Primos)." },
      { title: "Mantén la Mirada Fija y Atenta", description: "Observa el flujo sucesivo de caracteres sin apartar la atención del centro del panel interactivo." },
      { title: "Pulsa Únicamente ante Objetivos Válidos", description: "Haz clic, toca la pantalla o pulsa Espacio o Intro solo cuando el carácter cumpla la regla activa." },
      { title: "Adáptate a la Inversión de Reglas", description: "Cada 10 segundos, reconfigura tu criterio mental sin titubear cuando el cartel superior indique la nueva condición." },
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
      <ConcentrationStaminaClient copy={{
        title: "Test de Concentración | Atención Sostenida", subtitle: "Autoevaluación de foco continuo, detección de objetivos y control inhibitorio",
        statScore: "Puntos", statTime: "Tiempo", statLevel: "Nivel", statBest: "Mejor puntuación", ruleLabel: "Regla", vowels: "Vocales (A E I O U)", primes: "Primos (2 3 5 7)", startTitle: "Test de Concentración", startSubtitle: "Atención sostenida • Entrenamiento tipo CPT", getReady: "Prepárate", flashTitle: "Flash de error", soundTitle: "Sonido", newBest: "Nuevo récord", points: "Puntos", accuracy: "Precisión", misses: "Errores", peakLevel: "Nivel máximo", playAgain: "Jugar de nuevo", shareScore: "Compartir puntuación", exitDrill: "Salir del ejercicio",
        caption: "Responde solo a los estímulos que coinciden con la regla activa y filtra las distracciones cuando cambie.", rulesTitle: "Instrucciones y sistema de puntuación", ruleItems: [{ text: "Regla objetivo", highlight: "Cambia cada 10 s", result: "Vocales ↔ Primos" }, { text: "Acierto", highlight: "+100 PTS", result: "Clic/toque, Espacio o Intro" }, { text: "No objetivo", highlight: "Inhibir", result: "Ignora el que no coincide" }, { text: "Falsa alarma", highlight: "Bloqueo de 1 s", result: "Afecta a la precisión" }],
        aboutTitle: "Sobre el test de concentración", aboutLead: "La atención sostenida puede disminuir al vigilar señales poco frecuentes durante mucho tiempo. Este test breve registra cambios de regla, detección y errores como autoevaluación.", aboutText: "La atención sostenida permite seleccionar señales relevantes dentro de una secuencia repetitiva. Repítelo en las mismas condiciones y observa cómo cambian tus puntos y errores.\n\nEl sueño, el estrés, la pantalla y la familiaridad influyen en el resultado; no sustituye una evaluación profesional.", audienceTitle: "¿Para quién es útil?", audienceText: "Para estudiantes antes de exámenes largos, jugadores que buscan mantener la precisión y personas que necesitan concentrarse durante periodos prolongados.", skillsTitle: "Habilidades entrenadas", skillsText: "Atención sostenida, detección de objetivos, vigilancia bajo fatiga y control de impulsos.", flexibilityTitle: "Flexibilidad cognitiva", flexibilityText: "Cambiar entre vocales y números primos cada 10 segundos entrena la alternancia rápida entre reglas."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
