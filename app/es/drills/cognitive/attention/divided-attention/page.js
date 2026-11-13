import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Atención Dividida | Doble Tarea | SkillDrills",
  description: "Test de atención dividida online gratis: haz clic en los objetivos que aparecen y marca a la vez los números pares. Ejercicio de doble tarea.",
  keywords: [
    "test de atencion dividida",
    "atencion dividida ejercicios",
    "test de doble tarea online",
    "entrenamiento de atencion dividida",
    "periodo refractario psicologico",
    "cuello de botella cognitivo test",
    "test de atencion compartida",
    "multitarea cognitiva test",
    "rastreo visual y numeros",
    "ejercicio de doble foco mental",
    "entrenamiento de doble tarea"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Atención Dividida | Doble Tarea | SkillDrills",
    description: "Test de atención dividida online gratis: haz clic en los objetivos que aparecen y marca a la vez los números pares. Ejercicio de doble tarea.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Atención Dividida | Doble Tarea | SkillDrills",
    description: "Test de atención dividida online gratis: haz clic en los objetivos que aparecen y marca a la vez los números pares. Ejercicio de doble tarea.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
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
      "name": "Atención Dividida y Doble Tarea",
      "item": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "Test de Atención Dividida – Doble Tarea",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test de atención dividida online gratis: haz clic en los objetivos que aparecen y marca a la vez los números pares. Ejercicio de doble tarea.",
  "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention",
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
  "name": "Test de Atención Dividida Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requiere un navegador moderno compatible con JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Juego de Foco Dividido y Multitarea Cognitiva",
  "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention",
  "description": "Test de atención dividida online gratis: haz clic en los objetivos que aparecen y marca a la vez los números pares. Ejercicio de doble tarea.",
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
      "name": "¿Qué es la atención dividida y qué evalúa esta prueba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La atención dividida consiste en atender dos fuentes de información a la vez. Aquí haces clic en los objetivos azules que aparecen en posiciones aleatorias y pulsas «Clasificar» cuando el dígito (0 a 9) del panel lateral es par."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es el Periodo Refractario Psicológico (PRP, Pashler 1994)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El PRP es el retraso de la segunda respuesta cuando un segundo estímulo aparece instantes después del primero, atribuido a un cuello de botella central en la selección de respuestas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué explica la Teoría de Recursos Múltiples de Wickens (2002)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Según Wickens, la atención se divide con más facilidad cuando las tareas usan canales sensoriales y códigos distintos (por ejemplo, espacial-visual y numérico)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede entrenar la capacidad de realizar dos tareas a la vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu puntuación en este ejercicio puede subir con la práctica, pero no se garantiza la transferencia a otras tareas ni a la vida diaria. Spelke et al. (1976) observaron que la práctica prolongada puede mejorar la realización de dos tareas a la vez."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué combina objetivos en pantalla y clasificación de números?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las dos tareas usan códigos distintos: localizar una posición en pantalla por un lado y aplicar una regla (par o impar) a un dígito por el otro. Es la situación que describe la teoría de recursos múltiples."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué relación tiene con los videojuegos o la conducción?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El ejercicio reproduce la carga de vigilar dos flujos a la vez, como el minimapa y la acción en el juego o la carretera y el salpicadero al conducir. No garantiza mejoras en el juego ni al volante."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calculan la puntuación y la nota?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acierto vale 100 puntos base multiplicados por el combo y el nivel. La nota depende de la puntuación, y 24.000 puntos equivalen a la nota máxima; la precisión se muestra aparte. Son referencias de práctica de SkillDrills, no estadísticas de población."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto dura una partida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El reloj empieza en 45 segundos: +2 s por acierto (máximo 60 s) y −1 s por error u objetivo perdido. La partida sigue hasta que el tiempo llega a cero; al subir la puntuación sube el nivel, los estímulos cambian más rápido y los objetivos se hacen más pequeños."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué cuenta como error?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pulsar «Clasificar» con un número impar, pulsar dos veces el mismo número, dejar que desaparezca un objetivo o dejar pasar un número par. Cada error muestra un destello rojo, reinicia el combo y resta 1 segundo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este test de atención dividida es gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, SkillDrills proporciona esta herramienta de forma 100% gratuita y ejecutable directamente en el navegador sin registros ni descargas."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Realizar el Test de Atención Dividida",
  "description": "Test de atención dividida online gratis: haz clic en los objetivos que aparecen y marca a la vez los números pares. Ejercicio de doble tarea.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Haz Clic en el Objetivo Azul",
      "text": "Haz clic o toca el objetivo azul que aparece en una posición aleatoria antes de que desaparezca: +2 s por acierto (máximo 60 s).",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Decodifica el Flujo de Números",
      "text": "Vigila el panel lateral: si el dígito es par (0, 2, 4, 6, 8), pulsa «Clasificar»; si es impar, no hagas nada.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Responde con Ratón o Toque",
      "text": "Las dos tareas se responden con clic o toque (el teclado no se usa, salvo Esc para salir).",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Equilibra el Rendimiento Global",
      "text": "No descuides ninguna de las dos tareas: sin errores, el multiplicador de combo crece; cada error lo reinicia y cuesta 1 segundo.",
      "url": "https://skilldrills.online/es/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "Test de Atención Dividida: Guía",
    paragraphs: [
      "Este test de atención dividida online gratis te pide dos tareas a la vez: hacer clic en los objetivos que aparecen y marcar los números pares. Es una autoevaluación.",
      "Los estudios de Harold Pashler (1994) sobre el Periodo Refractario Psicológico (PRP) describen un cuello de botella central: cuando hay que elegir dos respuestas casi a la vez, la segunda se retrasa.",
      "Inspirado en la Teoría de Recursos Múltiples de Christopher Wickens (2002), el ejercicio combina una tarea espacial (hacer clic en el objetivo) con otra numérica (par o impar).",
    ],
  },
  benchmarks: {
    title: 'Etapas de práctica SkillDrills (precisión)',
    headers: ['Nivel', 'Categoría', 'Rango de Eficiencia', 'Precisión', 'Marcador de práctica'],
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
    title: 'Protocolos de Optimización en Doble Tarea',
    description: 'Los pasos de una partida, para atender los dos canales sin perder el combo.',
    items: [
      { title: "Haz Clic en el Objetivo Azul", description: "Haz clic o toca el objetivo azul que aparece en una posición aleatoria antes de que desaparezca: +2 s por acierto (máximo 60 s)." },
      { title: "Decodifica el Flujo de Números", description: "Vigila el panel lateral: si el dígito es par (0, 2, 4, 6, 8), pulsa «Clasificar»; si es impar, no hagas nada." },
      { title: "Responde con Ratón o Toque", description: "Las dos tareas se responden con clic o toque (el teclado no se usa, salvo Esc para salir)." },
      { title: "Equilibra el Rendimiento Global", description: "No descuides ninguna de las dos tareas: sin errores, el multiplicador de combo crece; cada error lo reinicia y cuesta 1 segundo." },
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
      <DividedAttentionClient copy={{
        title: "Test de Atención Dividida", subtitle: "Pulsa objetivos y clasifica números al mismo tiempo",
        statScore: "Puntos", statTime: "Tiempo", timeLeft: "Tiempo restante", statLevel: "Nivel", statBest: "Mejor puntuación",
        match: "Clasificar", evenNumbers: "NÚMEROS PARES", tapEven: "Pulsa con pares", startTitle: "Test de Atención Dividida", startSubtitle: "Doble tarea · cambio de foco",
        getReady: "Prepárate", dualAccuracy: "Precisión doble", hits: "Aciertos", misses: "Errores", peakLevel: "Nivel máximo",
        caption: "Pulsa el objetivo que aparece y clasifica a la vez los números pares del flujo lateral.",
        rulesTitle: "Instrucciones y puntuación", ruleItems: [
          { text: "Acierta el objetivo", highlight: "+100 PTS", result: "Objetivo pulsado: +2 s (máx. 60 s)" },
          { text: "Clasifica los pares", highlight: "Respuesta correcta", result: "Pulsa cuando sea par" },
          { text: "Ignora los impares", highlight: "Sin error", result: "No pulses con impares" },
          { text: "Error / objetivo perdido", highlight: "Combo a cero", result: "−1 s" },
        ],
        aboutTitle: "Sobre atención dividida y doble tarea", aboutLead: "Este autocheck cognitivo combina pulsar objetivos y clasificación numérica para observar el rendimiento de los dos canales.",
        audienceTitle: "Para quién sirve", audienceText: "Para jugadores que miran minimapa y objetivo, estudiantes y personas que procesan varias entradas con rapidez.",
        skillsTitle: "Habilidades entrenadas", skillsText: "Procesamiento de doble tarea, rastreo visual, decisión numérica y reparto de la atención.", flexibilityTitle: "Procesamiento paralelo", flexibilityText: "Cambia entre ambos flujos sin dejar que caiga la precisión de un canal."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
