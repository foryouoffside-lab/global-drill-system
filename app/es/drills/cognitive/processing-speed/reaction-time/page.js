import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Tiempo de Reacción de Elección | Velocidad de Decisión",
  description: "Test gratuito de tiempo de reacción de elección: selecciona el objetivo según una regla cambiante. Practica decisión visual; no es clínico.",
  keywords: ["tiempo de reacción de elección", "reacción de elección", "velocidad de decisión", "cambio de regla", "ley de Hick"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tiempo de Reacción de Elección | Velocidad de Decisión",
    description: "Test gratuito de tiempo de reacción de elección: selecciona el objetivo según una regla cambiante. Practica decisión visual; no es clínico.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Tiempo de Reacción de Elección | Velocidad de Decisión",
    description: "Test gratuito de tiempo de reacción de elección: selecciona el objetivo según una regla cambiante. Practica decisión visual; no es clínico.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
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
      "name": "Tiempo de Reacción de Elección",
      "item": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Tiempo de Reacción de Elección",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Ejercicio gratis de tiempo de reacción de elección en el navegador: pulsa el objetivo del color que indica una regla cambiante. Resultado en puntos, precisión y nivel, sin medición en milisegundos.",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time",
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
  "name": "Tiempo de Reacción de Elección | Velocidad de Decisión",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requiere un navegador web moderno compatible con JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "es-ES",
    "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Tiempo de Reacción de Elección – Juego de Regla de Color",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time",
  "description": "Ejercicio gratis de tiempo de reacción de elección en el navegador: pulsa el objetivo del color que indica una regla cambiante. Resultado en puntos, precisión y nivel, sin medición en milisegundos.",
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
      "name": "¿Qué es el tiempo de reacción de elección?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es el tiempo para identificar, entre varios estímulos, el que corresponde a una regla y elegir la respuesta correcta. Aquí aparecen un objetivo rojo y uno azul, y pulsas el color que pide la regla activa."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre tiempo de reacción simple y de elección?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la reacción simple respondes a un único estímulo esperado. En la de elección se añaden la discriminación y la selección de la respuesta, por eso suele ser más lenta (Donders). Este ejercicio añade además cambios de regla."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué dice la Ley de Hick (Hick, 1952)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo de reacción crece de forma logarítmica con el número de opciones. Como debes comprobar la regla antes de cada pulsación, el ejercicio trabaja precisamente esa fase de decisión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el cambio de regla?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El aviso superior indica qué color pulsar (rojo o azul). Desde el nivel 2, la regla se invierte tras una serie de aciertos; cuanto más alto el nivel, menos aciertos hacen falta para el cambio (mínimo 2)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el tiempo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La ronda empieza con 45 segundos. Cada acierto suma 2 segundos, hasta 60. Pulsar el color equivocado, o dejar que caduque una pareja de objetivos (con Target Timeouts activado), resta 1 segundo y reinicia el combo. La ronda termina al llegar a 0."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calculan los puntos y la nota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acierto da 100 puntos multiplicados por el multiplicador de combo y el de nivel. La puntuación final se compara con una referencia fija de SkillDrills y se muestra como nota de F a S+."
      }
    },
    {
      "@type": "Question",
      "name": "¿El ejercicio mide mi tiempo de reacción en milisegundos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Muestra puntos, precisión (aciertos sobre todos los intentos), nivel máximo y mejor combo. No registra tiempos de respuesta individuales en milisegundos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede mejorar con práctica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu puntuación en esta tarea suele subir con la práctica. Revisa la regla antes de cada pulsación y mantén la precisión alta para que crezca el combo. Eso no garantiza reacciones más rápidas en otras situaciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es una prueba médica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Es un ejercicio de práctica en el navegador, no un diagnóstico, cribado ni test psicotécnico oficial. El resultado también depende del dispositivo y del día; compara tus propias sesiones en el mismo dispositivo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis, sin registro, y funciona directamente en el navegador."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo hacer el ejercicio de tiempo de reacción de elección",
  "description": "Ejercicio gratis de tiempo de reacción de elección en el navegador: pulsa el objetivo del color que indica una regla cambiante. Resultado en puntos, precisión y nivel, sin medición en milisegundos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Observa la Regla Superior Activa",
      "text": "Fíjate en el cartel superior que indica el color del objetivo válido (ejemplo: TOCA ROJO o TOCA AZUL).",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Discrimina los Objetivos Visuales",
      "text": "Aparecen a la vez un objetivo rojo y uno azul: identifica cuál coincide con la regla de color activa.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ejecuta el Clic de Decisión",
      "text": "Pulsa el objetivo correcto antes de que cambie la pareja. Un error o un tiempo agotado cuestan 1 segundo y el combo.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Reacciona a los Cambios de Regla",
      "text": "Cuando la regla se invierta, inhibe el hábito anterior y comienza a pulsar de inmediato sobre el nuevo color marcado.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "Tiempo de Reacción de Elección",
    paragraphs: [
      "El tiempo de reacción de elección es el tiempo que tardas en identificar, entre varios estímulos, el que cumple una regla y elegir la respuesta correcta. En este ejercicio gratis aparecen a la vez un objetivo rojo y uno azul, y pulsas el color que indica el aviso superior. Desde el nivel 2 la regla se invierte, así que revísala antes de cada pulsación.",
      "A diferencia de la reacción simple a un único estímulo, la reacción de elección añade la discriminación del estímulo y la selección de la respuesta, por lo que suele ser más lenta (Donders).",
      "La Ley de Hick-Hyman (Hick, 1952; Hyman, 1953) describe el aumento logarítmico del tiempo de decisión con el número de opciones. El ejercicio muestra puntos, precisión, nivel máximo y mejor combo; no mide milisegundos y no es una prueba clínica.",
    ],
  },
  benchmarks: {
    title: 'Etapas de práctica SkillDrills (precisión)',
    headers: ['Nivel', 'Rango', 'Tasa de Precisión', 'Marcador de práctica'],
    note: "Etapas de práctica definidas por SkillDrills para comparar tus propias sesiones; no son estadísticas de población ni normas clínicas.",
    rows: [
      { tier: 'Etapa 1', rank: 'Muy precisa', accuracy: '98%+', marker: 'Casi sin errores, incluso tras los cambios de regla' },
      { tier: 'Etapa 2', rank: 'Avanzada', accuracy: '94-97%', marker: 'Regular' },
      { tier: 'Etapa 3', rank: 'Sólida', accuracy: '88-93%', marker: 'Buen equilibrio entre velocidad y precisión' },
      { tier: 'Etapa 4', rank: 'En desarrollo', accuracy: '78-87%', marker: 'Errores sobre todo tras los cambios de regla' },
      { tier: 'Etapa 5', rank: 'Inicial', accuracy: '< 78%', marker: 'Punto de partida' },
    ],
  },
  protocols: {
    title: 'Cómo se juega',
    description: 'Los cuatro pasos de cada ronda.',
    items: [
      { title: "Observa la Regla Superior Activa", description: "Fíjate en el cartel superior que indica el color del objetivo válido (ejemplo: TOCA ROJO o TOCA AZUL)." },
      { title: "Discrimina los Objetivos Visuales", description: "Aparecen a la vez un objetivo rojo y uno azul: identifica cuál coincide con la regla de color activa." },
      { title: "Ejecuta el Clic de Decisión", description: "Pulsa el objetivo correcto antes de que cambie la pareja. Un error o un tiempo agotado cuestan 1 segundo y el combo." },
      { title: "Reacciona a los Cambios de Regla", description: "Cuando la regla se invierta, inhibe el hábito anterior y comienza a pulsar de inmediato sobre el nuevo color marcado." },
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
      <EliteNeuroSwitchClient
        copy={{
          title: "Tiempo de Reacción de Elección",
          subtitle: "Elige el objetivo según el color activo y entrena la velocidad de decisión",
          startTitle: "Tiempo de Reacción de Elección",
          startSubtitle: "Reacción de elección • Velocidad de decisión",
          stageCaption: "Pulsa el objetivo que coincide con la regla activa. Los colores y la regla cambian rápido.",
          rulesTitle: "Instrucciones del ejercicio y puntuación",
          aboutTitle: "¿Qué es el tiempo de reacción de elección?",
          faqTitle: "Preguntas frecuentes",
          labels: { score: "Puntuación", time: "Tiempo", level: "Nivel", bestScore: "Mejor puntuación", timeLeft: "Tiempo restante", rule: "REGLA", ready: "PREPÁRATE", accuracy: "Precisión", hits: "Aciertos", peakLevel: "Nivel máximo", maxCombo: "Combo máximo" },
          ruleBanner: { RED: "OBJETIVO ROJO", BLUE: "OBJETIVO AZUL" },
          aboutLead: "El tiempo de reacción de elección es el intervalo necesario para seleccionar la respuesta correcta entre varios estímulos. Al aumentar las alternativas, suele aumentar el tiempo de decisión, como explica la ley de Hick.",
          aboutText: "Este ejercicio combina discriminación visual, lectura de la regla y respuesta motora. El resultado también incluye la latencia de la pantalla, el dispositivo de entrada y el navegador. Como la regla cambia, cada objetivo exige una nueva decisión.",
          aboutCards: [
            { title: "¿Para quién sirve?", desc: "Para jugadores, estudiantes y cualquier persona que quiera practicar decisiones visuales rápidas con precisión." },
            { title: "Habilidades entrenadas", desc: "Reacción de elección, discriminación visual, ejecución motora y atención ante cambios de regla." },
            { title: "Agilidad al cambiar", desc: "El color activo cambia para estimular la actualización rápida de tu mapa de respuesta." }
          ],
          rulesItems: [
            { num: "1", text: "Regla activa", highlight: "ROJO / AZUL", result: "Sigue el aviso superior" },
            { num: "2", text: "Objetivo correcto", highlight: "+100 pts.", result: "Combo × nivel, +2 s (máx. 60 s)" },
            { num: "3", text: "Cambio de regla", highlight: "Desde el nivel 2", result: "Más frecuente al subir de nivel" },
            { num: "4", text: "Objetivo erróneo / tiempo", highlight: "Reinicia el combo", result: "−1 s" }
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
