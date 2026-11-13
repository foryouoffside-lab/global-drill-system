import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Juego de secuencia de colores estilo Simón | SkillDrills",
  description: "Juego de secuencia de colores estilo Simón, gratis: memoriza los colores que se iluminan y repítelos en 6 botones. Empieza con 3 colores, +1 por acierto.",
  keywords: [
    "juego Simón",
    "Simón online",
    "memoria de colores",
    "secuencia de colores",
    "juego de simon dice online",
    "juego de memoria de colores",
    "juego simon online gratis",
    "test de memoria secuencial",
    "juegos de memoria para adultos",
    "test de memoria a corto plazo",
    "entrenamiento de memoria de trabajo",
    "juego de recordar colores",
    "evaluacion de retencion visual",
    "ejercicios para mejorar la memoria",
    "capacidad de memoria de trabajo",
    "tecnica de chunking memoria"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Juego de secuencia de colores estilo Simón | SkillDrills",
    description: "Juego de secuencia de colores estilo Simón, gratis: memoriza los colores que se iluminan y repítelos en 6 botones. Empieza con 3 colores, +1 por acierto.",
    url: "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Juego de secuencia de colores estilo Simón | SkillDrills",
    description: "Juego de secuencia de colores estilo Simón, gratis: memoriza los colores que se iluminan y repítelos en 6 botones. Empieza con 3 colores, +1 por acierto.",
  },
};

export default function SpanishColorSequencePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos de memoria", "item": "https://skilldrills.online/es/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memoria a corto plazo", "item": "https://skilldrills.online/es/drills/memory" },
      { "@type": "ListItem", "position": 4, "name": "Juego de colores estilo Simón", "item": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Juego de secuencia de colores estilo Simón",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Juego gratuito de memoria de secuencias de colores: practica la memoria de trabajo visual, el agrupamiento (chunking) y la atención sostenida en el navegador.",
    "genre": "Entrenamiento cognitivo / Memoria visual de trabajo",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Juego de secuencia de colores estilo Simón",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    "description": "Juego estilo Simon gratuito en el navegador, con 6 botones de colores: la secuencia gana un color por acierto y pierde uno por fallo.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Secuencia de colores estilo Simón",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    "description": "Juego de memoria estilo Simon: los colores se iluminan uno a uno en el círculo central y los repites en el mismo orden con 6 botones.",
    "genre": ["Juego de memoria", "Entrenamiento mental", "Puzzle"],
    "gamePlatform": ["Navegador web", "Móvil", "Tablet", "Escritorio"],
    "applicationCategory": "Game",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es este juego estilo Simón y cómo se juega online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es un juego de memoria estilo Simon, inspirado en el aparato electrónico de 1978 (no es el producto oficial de Hasbro). Los colores se iluminan uno a uno en el círculo central y tú los repites pulsando los 6 botones de colores en el mismo orden. El nivel 1 tiene 3 colores (longitud = nivel + 2); acertar sube un nivel y fallar baja uno. Cada ronda es una secuencia aleatoria nueva y la sesión dura 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué funciones de la memoria se ponen en juego al recordar secuencias de colores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intervienen sobre todo la memoria de trabajo visual y la agenda visoespacial (Baddeley & Hitch, 1974), además de la atención selectiva y el recuerdo en orden. Es un juego de práctica."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántos elementos podemos retener según Luck y Vogel (1997)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luck y Vogel (1997) y Cowan (2001) describen una capacidad de memoria de trabajo visual de unos 4 elementos independientes. Su estudio usaba objetos mostrados a la vez, no secuencias, pero explica por qué agrupar los colores en bloques (chunking) ayuda con secuencias largas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el chunking y cómo lo aplico en este juego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El chunking (Miller, 1956) consiste en unir elementos sueltos en bloques con sentido. Si divides seis colores en dos grupos de tres, como rojo-azul-verde y amarillo-violeta-naranja, solo tienes que retener dos bloques en lugar de seis elementos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué hay 6 colores en vez de los 4 del juego electrónico clásico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El violeta y el naranja amplían el juego a 6 paneles, así que cada paso tiene más opciones posibles y la secuencia es más difícil de adivinar. Es una variante pensada para quien ya domina el clásico juego de 4 colores."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se pierde tiempo o puntos al fallar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No se resta tiempo del cronómetro ni se pierden los puntos ya acumulados. Si pulsas un color equivocado o pasan 8 segundos sin pulsar, bajas un nivel (mínimo nivel 1) y empieza una secuencia aleatoria nueva."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué nivel o puntuación es un buen punto de referencia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay una norma oficial. En el nivel N la secuencia tiene N + 2 colores y cada ronda acertada da 100 × (1 + 0,1 × N) puntos. Como referencia, llegar sin fallos al nivel 8 (10 colores) supone unos 980 puntos y al nivel 11, unos 1.550. Son etapas de práctica de SkillDrills, no estadísticas de población."
        }
      },
      {
        "@type": "Question",
        "name": "¿Sirve este juego para evitar olvidos cotidianos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay pruebas de que practicar este juego evite olvidos de la vida diaria. Sí entrena una habilidad concreta, recordar una secuencia en orden, y la estrategia de chunking puede servirte para retener códigos o listas cortas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Funciona en móvil y tablet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Los botones de colores responden a toques en teléfonos y tabletas y a clics de ratón en ordenador."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es gratis y hace falta registrarse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es gratis, sin descargas ni cuenta de usuario. Tus récords se guardan solo en tu navegador (almacenamiento local) y no se envían a ningún servidor."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo jugar al juego de memoria de colores estilo Simón",
    "description": "Cuatro pasos para repetir secuencias de colores cada vez más largas en este juego estilo Simón.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence#step-1",
        "name": "Observa los destellos",
        "text": "Fija la mirada en el círculo central y sigue el orden en que se iluminan los colores."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence#step-2",
        "name": "Agrupa los colores",
        "text": "Divide la secuencia en parejas o tríos con ritmo para no superar los 4 elementos que cabe retener a la vez."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence#step-3",
        "name": "Repite la secuencia",
        "text": "Pulsa los botones de colores en el mismo orden; tienes 8 segundos para cada pulsación."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence#step-4",
        "name": "Sube de nivel",
        "text": "Cada ronda superada sube un nivel: la siguiente secuencia, nueva y aleatoria, tiene un color más y da más puntos."
      }
    ]
  };

  const esCopy = {
    title: 'Juego de secuencia de colores estilo Simón',
    subtitle: 'Juego estilo Simon: memoriza los colores y repite la secuencia exacta',
    caption: 'Los colores se iluminan uno a uno en el círculo central. Repítelos en el mismo orden; cada acierto alarga la siguiente secuencia en un color.',
    statScore: 'Puntuación',
    statTime: 'Tiempo',
    statLevel: 'Nivel',
    statBestScore: 'Récord',
    rulesTitle: 'Instrucciones del juego y sistema de puntos',
    rule1Text: 'Secuencia correcta',
    rule1Highlight: '+100 PTS',
    rule1Result: 'Repite los destellos en el mismo orden en que aparecieron',
    rule2Text: 'Bonus de nivel',
    rule2Highlight: '+10% PTS / nivel',
    rule2Result: 'Ronda en el nivel N = 100 × (1 + 0,1 × N) puntos',
    rule3Text: 'Fallo o tiempo agotado',
    rule3Highlight: '-1 nivel',
    rule3Result: 'Color equivocado u 8 s sin pulsar: sin perder puntos ni tiempo; secuencia nueva más corta',
    rule4Text: 'Dificultad adaptativa',
    rule4Highlight: 'Dinámica',
    rule4Result: 'Nivel N = N + 2 colores; los destellos se aceleran con cada nivel',
    aboutTitle: 'Sobre el juego de secuencia de colores estilo Simón',
    overviewTitle: '¿Qué se practica con el juego de memoria de colores?',
    overviewLead: 'La memoria de trabajo visual retiene unos 4 elementos independientes a la vez (Luck & Vogel, 1997; Cowan, 2001). Una secuencia de colores que se alarga permite practicar cerca de ese límite.',
    aboutIntro: [
      'Este juego practica la memoria visual: ver una secuencia de colores, retenerla y repetirla en el mismo orden.',
      'Al repetir secuencias cada vez más largas aprendes a agruparlas en bloques (chunking) y a mantener la atención durante la sesión.',
    ],
    aboutCards: [
      { title: '¿Para quién es?', text: 'Para estudiantes, opositores, profesionales y jugadores de esports que quieran practicar la memoria a corto plazo y la concentración.' },
      { title: 'Qué se practica', text: 'Amplitud de memoria visual y recuerdo en orden con la agenda visoespacial (Baddeley & Hitch, 1974).' },
      { title: 'Estrategia de chunking', text: 'Agrupa los colores en bloques con ritmo o en trayectorias para superar el límite de unos 4 elementos de la memoria de trabajo (Miller, 1956).' },
    ],
  };

  const esColorSequenceGuide = {
    heading: 'Guía del juego de colores estilo Simón y la memoria de trabajo visual',
    intro: [
      'Este juego de colores estilo Simón consiste en ver una secuencia de colores, uno a uno, y repetirla en el mismo orden; cada ronda superada alarga la siguiente secuencia en un color. Esta versión estilo Simon tiene 6 botones y sesiones de 45 segundos. Practica la memoria de trabajo visual y el chunking, y sirve para comparar tus propias puntuaciones en el mismo dispositivo.',
      'El juego de secuencias de colores es un ejercicio para practicar la memoria de trabajo visual y la retención del orden. Popularizado por un dispositivo electrónico de Ralph Baer y Howard Morrison (1978), este formato exige la codificación inmediata de estímulos cromáticos dinámicos, su organización en búferes estructurados y su recuperación en estricto orden temporal.',
      'Los límites arquitectónicos de la memoria humana a corto plazo han sido cartografiados exhaustivamente por la psicología cognitiva. Mientras que George A. Miller (1956) identificó el cuello de botella verbal de $7 \\pm 2$ elementos, las investigaciones fundamentales de Nelson Cowan (2001) y Steven J. Luck & Edward K. Vogel (1997) demostraron que la capacidad pura de la memoria de trabajo visual está estrictamente limitada a unas 4 unidades independientes. Sin estrategias estructuradas de recodificación, la retención humana colapsa rápidamente más allá de cuatro elementos secuenciales.',
      'En el modelo multicomponente de memoria de trabajo de Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000), retener secuencias visuales activa la agenda visoespacial (Visuospatial Sketchpad). Robert H. Logie (1995) subdividió este componente en el retén visual pasivo (que almacena colores y formas) y el escriba interno (que ensaya activamente patrones espaciotemporales). Los ejecutantes avanzados reclutan sistemáticamente el bucle fonológico para crear representaciones de codificación dual (visual y subvocal), que ayuda a sostener la secuencia.',
      'Qué se registra: en 45 segundos el juego guarda la puntuación, el nivel máximo alcanzado (longitud de la secuencia) y la precisión (porcentaje de rondas acertadas). No mide el tiempo de reacción por pulsación.',
      'Cómo funciona una ronda: en el nivel N aparecen N + 2 colores de 6 posibles, siempre en una secuencia aleatoria nueva. Cuanto más alto el nivel, menos tiempo se ilumina cada color (de unos 0,7 s hasta un mínimo de 0,25 s). Después tienes 8 segundos para cada pulsación; un color equivocado o el tiempo agotado bajan un nivel.',
      'Transparencia y privacidad de datos: SkillDrills no recopila datos agregados de usuarios ni métricas de telemetría. Sus puntuaciones y progresiones de nivel permanecen guardadas estrictamente en el almacenamiento local (localStorage) de su navegador web y jamás se envían a servidores externos. Las referencias científicas se citan en el panel inferior; las etapas de la tabla son marcadores editoriales de práctica.'
    ],
    benchmarks: {
      title: 'Etapas de práctica en el juego estilo Simón (sesión de 45 segundos)',
      headers: ['Etapa', 'Nivel alcanzado', 'Puntos sin fallos hasta ese nivel', 'Estrategia de memoria'],
      rows: [
        ['Etapa 1', 'Nivel 11+ (13+ colores)', 'unos 1.550+ PTS', 'Nombra los colores y los agrupa en bloques'],
        ['Etapa 2', 'Nivel 8 – 10 (10–12 colores)', 'unos 980 – 1.549 PTS', 'Agrupa con soltura en parejas o tríos'],
        ['Etapa 3', 'Nivel 5 – 7 (7–9 colores)', 'unos 500 – 979 PTS', 'Pierde los colores del medio cuando los destellos se aceleran'],
        ['Etapa 4', 'Nivel 3 – 4 (5–6 colores)', 'unos 230 – 499 PTS', 'Recuerda color a color, todavía sin agrupar'],
        ['Etapa 5', 'Nivel 1 – 2 (3–4 colores)', 'menos de 230 PTS', 'Aprendiendo las reglas y el ritmo']
      ],
      note: 'Etapas de práctica de SkillDrills, no estadísticas de población. La puntuación corresponde a llegar sin fallos a ese nivel (puntos por ronda = 100 × (1 + 0,1 × nivel)); los fallos bajan el nivel, así que la puntuación real varía.'
    },
    techniques: {
      title: 'Cuatro estrategias para recordar secuencias de colores más largas',
      items: [
        {
          name: 'Agrupamiento rítmico (chunking)',
          desc: 'No memorices cada color por separado. Forma bloques con ritmo nombrando mentalmente los colores con una cadencia fija (por ejemplo, "rojo-azul ... verde-amarillo").',
          tips: 'Divide la secuencia en bloques de 2 o 3 colores en cuanto pase de 4 elementos.'
        },
        {
          name: 'Trayectoria sobre los botones',
          desc: 'Los colores se iluminan solo en el círculo central, pero los 6 botones de respuesta (cuadrícula 3 × 2) tienen un sitio fijo. Con cada color, imagina su botón y recuerda el recorrido del dedo (Logie, 1995).',
          tips: 'Mira la disposición de los botones antes de empezar.'
        },
        {
          name: 'Nombrar los colores en voz baja',
          desc: 'Di mentalmente el nombre de cada color que se ilumina ("rojo, azul, verde") para sumar un registro verbal al visual (bucle fonológico; Baddeley, 2000).',
          tips: 'Recita por parejas y con ritmo fijo.'
        },
        {
          name: 'Proteger el centro de la secuencia',
          desc: 'Cada ronda es una secuencia aleatoria completamente nueva, así que la anterior no ayuda. El principio y el final se recuerdan mejor y los colores del medio son los que más se olvidan (efecto de posición serial): agrupa sobre todo el centro.',
          tips: 'Recita el principio enseguida como bloque y confía en la imagen reciente para el final.'
        }
      ]
    },
    steps: [
      'Inicia la sesión de 45 segundos y fija la mirada en el círculo central.',
      'Sigue con atención los colores que se iluminan uno a uno.',
      'Reorganiza mentalmente la secuencia en bloques de dos o tres colores.',
      'Cuando termine la muestra, pulsa los paneles en el mismo orden y con ritmo firme.',
      'Cada acierto sube un nivel: secuencias más largas y más puntos por ronda.'
    ],
    audience: 'Estudiantes, profesionales, opositores y jugadores de esports que quieran practicar la memoria de trabajo, el chunking y la concentración con límite de tiempo.',
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995', 'luck1997'),
    related: [
      { href: "/es/drills/memory/short-term-memory/digit-span", label: "Test de dígitos (Digit Span)" },
      { href: "/es/drills/memory/short-term-memory/word-recall", label: "Test de memoria verbal" },
      { href: "/es/drills/memory/spatial-memory/grid-memorization", label: "Memoria espacial en cuadrícula" },
      { href: "/es/drills/cognitive/focus/concentration-grid", label: "Tabla de Schulte online" },
      { href: "/es/drills/cognitive/focus/distraction-fighter", label: "Test de Stroop online" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <ColorSequenceClient copy={esCopy} />
      <DrillGuide guide={esColorSequenceGuide} />
      <RelatedDrills />
    </>
  );
}
