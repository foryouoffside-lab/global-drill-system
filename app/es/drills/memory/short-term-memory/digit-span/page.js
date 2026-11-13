import DigitSpanClient from '@/app/drills/memory/short-term-memory/digit-span/DigitSpanClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de dígitos online | Memoria numérica | SkillDrills",
  description: "Test de dígitos online gratis: memoriza la secuencia de números que aparece un instante y escríbela en el mismo orden. Empieza con 3 dígitos, hasta 15.",
  keywords: [
    "test de dígitos online",
    "test de memoria de números",
    "amplitud de dígitos",
    "retención de dígitos",
    "memoria numérica",
    "memoria de trabajo con números",
    "test de memoria a corto plazo",
    "span de dígitos",
    "test de memoria con números",
    "ejercicio de memoria numérica",
    "recordar números",
    "agrupamiento de números",
    "bucle fonológico",
    "test de memoria gratis",
    "secuencia de números"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de dígitos online | Memoria numérica | SkillDrills",
    description: "Test de dígitos online gratis: memoriza la secuencia de números que aparece un instante y escríbela en el mismo orden. Empieza con 3 dígitos, hasta 15.",
    type: 'website',
    url: 'https://skilldrills.online/es/drills/memory/short-term-memory/digit-span',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de dígitos online | Memoria numérica | SkillDrills",
    description: "Test de dígitos online gratis: memoriza la secuencia de números que aparece un instante y escríbela en el mismo orden. Empieza con 3 dígitos, hasta 15.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/memory/short-term-memory/digit-span',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento de Memoria", "item": "https://skilldrills.online/es/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Memoria a Corto Plazo", "item": "https://skilldrills.online/es/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "Test de Dígitos", "item": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de dígitos online (span de dígitos)",
  "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://es.wikipedia.org/wiki/Capacidad_de_memoria"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de dígitos online (span de dígitos)",
  "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span",
  "description": "Juego gratuito de memoria con números: la secuencia aparece de una vez durante poco tiempo y la escribes en el mismo orden. Empieza con 3 dígitos, +1 por acierto.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Working Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de dígitos online (span de dígitos)",
  "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo hacer el test de dígitos",
  "description": "Cuatro pasos para memorizar una secuencia de números y escribirla en el mismo orden (sesión de 45 segundos).",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span#step-1",
      "name": "Mira la secuencia de un vistazo",
      "text": "La secuencia completa aparece de golpe: 2,5 segundos al principio y 0,1 segundos menos tras cada acierto (mínimo 0,8 segundos)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span#step-2",
      "name": "Agrupa los dígitos",
      "text": "Divide los números en bloques de 2 o 3, como un teléfono (por ejemplo, '739-281')."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span#step-3",
      "name": "Repite mentalmente",
      "text": "Cuando los números desaparezcan, repite los bloques en tu cabeza (bucle fonológico) hasta escribirlos."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/es/drills/memory/short-term-memory/digit-span#step-4",
      "name": "Escribe en menos de 8 segundos",
      "text": "Escribe los dígitos en el mismo orden con el teclado de la pantalla o las teclas numéricas del ordenador y confirma con Enter. Retroceso borra un dígito."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona este test de dígitos online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una secuencia de números aleatorios aparece brevemente de una sola vez y después la escribes en el mismo orden (dígitos directos). Empiezas con 3 dígitos; cada acierto suma 1 dígito (máximo 15) y cada fallo, o 8 segundos sin confirmar, resta 1 (mínimo 3). La sesión dura 45 segundos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos dígitos recuerda una persona de media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En la investigación, Miller (1956) habló de unos 7 ± 2 elementos; sin repaso ni agrupamiento, Cowan (2001) sitúa la capacidad cerca de 4. SkillDrills no recoge datos de usuarios, así que no damos medias ni percentiles de este juego, que por su límite de tiempo y su ajuste automático no se compara directamente con valores de laboratorio. Usa las etapas de práctica de abajo y tus propios récords."
      }
    },
    {
      "@type": "Question",
      "name": "¿Incluye dígitos directos e inversos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Solo dígitos directos. En la variante inversa hay que dar la vuelta a la secuencia mentalmente, lo que exige más a la memoria de trabajo; aquí no está disponible."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es el mismo subtest de dígitos de la WAIS o la WISC?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El formato se parece al de retención de dígitos, pero no es un subtest de la WAIS ni de la WISC y no calcula CI ni puntuaciones escalares. Es un juego gratuito de práctica, no una prueba psicotécnica oficial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué papel tiene el bucle fonológico al recordar números?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En el modelo de Baddeley, los números se guardan como sonido en el almacén fonológico y se mantienen repitiéndolos por dentro. Sin repaso, la huella se desvanece en unos 2 segundos, así que conviene empezar a repetir en cuanto la secuencia desaparece."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada secuencia correcta da 100 × (1 + 0,1 × (dígitos − 3)) puntos: 100 puntos con 3 dígitos y 220 con 15. Fallar no quita puntos ni tiempo, solo resta un dígito."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo ayuda el chunking en un test de memoria con números?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si agrupas los números como un teléfono ('839-241'), recuerdas 6 dígitos como 2 bloques. Con menos unidades que sostener, es más fácil mantener secuencias largas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué la secuencia baja un dígito cuando fallo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los aciertos suman un dígito y los fallos restan uno (1-up/1-down), así que la longitud oscila cerca de tu límite actual. El tiempo de exposición también baja 0,1 s tras un acierto y sube 0,2 s tras un fallo (entre 0,8 y 2,5 s)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Entrenar con dígitos mejora la memoria del día a día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No está garantizado. Con práctica sueles mejorar en este juego, pero la transferencia a la memoria cotidiana, los estudios o el trabajo es discutida en la investigación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis y funciona en el móvil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis, sin registro ni instalación. En el móvil usa el teclado numérico de la pantalla; en el ordenador también las teclas 0 a 9, Retroceso y Enter. Tus récords se guardan solo en tu navegador."
      }
    }
  ]
};

const digitSpanGuide = {
  intro: [
  "El test de dígitos muestra brevemente una secuencia de números que después escribes en el mismo orden. Es una versión de práctica de la tarea de span de dígitos, usada desde hace décadas en psicología para estudiar la memoria a corto plazo, y no es una prueba de CI ni un psicotécnico oficial.",
  "La pregunta por la amplitud de memoria se hizo famosa con el 'número mágico 7 ± 2' de George A. Miller (1956). Un formato parecido aparece en las escalas Wechsler (WAIS, WISC), pero este juego no es ese subtest y no calcula puntuaciones escalares.",
  "En el modelo de memoria de trabajo de Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000), las secuencias de números se mantienen en el bucle fonológico y se desvanecen en unos 2 segundos sin repaso. Según Nelson Cowan (2001), la capacidad bruta sin repaso ni agrupamiento ronda las 4 unidades; para secuencias largas ayuda el chunking.",
  "Cómo funciona: empieza con 3 dígitos; la secuencia aparece completa de una vez (2,5 s al principio, 0,1 s menos tras cada acierto hasta 0,8 s, 0,2 s más tras un fallo). Después tienes 8 segundos para escribirla con el teclado de la pantalla o del ordenador. Acierto: +1 dígito (máximo 15); fallo o tiempo agotado: −1 dígito (mínimo 3). El juego registra puntuación, secuencia más larga y precisión (porcentaje de rondas acertadas); no mide el tiempo de reacción.",
  "Transparencia de datos: SkillDrills no recoge puntuaciones en servidores; todo queda en el localStorage de tu navegador. Por eso esta página no muestra medias de usuarios, percentiles ni número de usuarios; las cifras citadas proceden de los estudios listados abajo."
],
  benchmarks: {
    title: "Etapas de práctica del test de dígitos (SkillDrills, 45 s)",
    headers: ["Etapa", "Longitud alcanzada", "Puntos sin fallos hasta ahí", "Estrategia típica"],
    rows: [
  ["Etapa 1", "13+ dígitos", "unos 1.450+", "Bloques de 3 o 4 y repaso interno rápido"],
  ["Etapa 2", "11–12 dígitos", "unos 1.080–1.449", "Bloques de 3 estables"],
  ["Etapa 3", "9–10 dígitos", "unos 750–1.079", "Agrupa de 2 en 2 o de 3 en 3, pero pierde los del medio"],
  ["Etapa 4", "7–8 dígitos", "unos 460–749", "Repite los números uno a uno, sin agrupar"],
  ["Etapa 5", "3–6 dígitos", "menos de 460", "Aprendiendo las reglas y el ritmo de exposición"]
],
    note: "Etapas de práctica de SkillDrills, no baremos de población ni puntuaciones WAIS. Los puntos corresponden a una sesión sin fallos desde 3 dígitos hasta esa longitud (puntos por ronda = 100 × (1 + 0,1 × (dígitos − 3))); los fallos acortan la secuencia, así que la puntuación real varía."
  },
  techniques: {
    title: "Estrategias para recordar más dígitos",
    items: [
  {
    "name": "Bloques rítmicos de 3 dígitos",
    "desc": "Divide la secuencia como un teléfono ('739 - 281 - 405'; Miller, 1956): 9 dígitos se convierten en 3 bloques.",
    "tips": "Acentúa un poco por dentro el primer número de cada bloque para marcar los límites."
  },
  {
    "name": "Repaso interno rápido",
    "desc": "Haz girar los bloques en tu cabeza (bucle fonológico; Baddeley, 2000). Sin repaso la huella se pierde en unos 2 segundos, así que empieza en cuanto desaparezca la secuencia.",
    "tips": "Pronuncia cada bloque como una sola palabra, no dígito a dígito."
  },
  {
    "name": "Recorrido del dedo en el teclado",
    "desc": "Convierte la secuencia en un recorrido sobre el teclado numérico de la pantalla (Logie, 1995) para sumar una pista espacial a la sonora.",
    "tips": "Mientras ves los números, dibuja mentalmente la línea entre las teclas."
  },
  {
    "name": "Protege el centro de la secuencia",
    "desc": "El principio y el final se recuerdan mejor; los dígitos del medio son los que más se pierden (efecto de posición serial). Centra el repaso en los bloques centrales.",
    "tips": "Fija enseguida los 3 primeros dígitos y deja los 2 últimos a la memoria inmediata."
  }
]
  },
  steps: [
  "Inicia la sesión de 45 segundos y mira al centro de la pantalla.",
  "Cuando aparezca la secuencia, divídela enseguida en bloques de 2 o 3 dígitos.",
  "Cuando desaparezca, repite los bloques mentalmente.",
  "Escribe los dígitos en el mismo orden en menos de 8 segundos y confirma con Enter.",
  "Los aciertos alargan la secuencia y los fallos la acortan: compara tu puntuación y tu secuencia más larga con tus propios récords."
],
  audience: "Estudiantes, opositores, profesionales y curiosos que quieran saber cuántos números recuerdan y practicar la memoria de trabajo.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
  related: [
  {
    "href": "/es/drills/memory/working-memory/n-back",
    "label": "Test N-Back (Memoria de Trabajo)"
  },
  {
    "href": "/es/drills/memory/spatial-memory/grid-memorization",
    "label": "Test de Memoria Visual (Cuadrícula)"
  },
  {
    "href": "/es/drills/cognitive/focus/concentration-grid",
    "label": "Tabla de Schulte (Cuadrícula de Concentración)"
  },
  {
    "href": "/es/drills/visual/reaction-speed/light-reaction",
    "label": "Test de Reflejos (Tiempo de Reacción)"
  },
  {
    "href": "/es/drills/reaction-speed/reflex-training-drill",
    "label": "Juego de Reflejos (Multi-Objetivo)"
  }
]
};

export default function LocalizedDigitSpanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DigitSpanClient copy={{
        "h1Keyword": "Test de dígitos",
        "h1Suffix": " – Memoria numérica",
        "subtitle": "Memoriza números y repite la secuencia",
        "caption": "La secuencia de números aparece de una vez y desaparece: escríbela en el mismo orden. Cada acierto alarga la siguiente secuencia en un dígito.",
        "statScore": "Puntos",
        "statTime": "Tiempo",
        "statSpan": "Amplitud",
        "digitsUnit": "Dígitos",
        "statBest": "Récord",
        "hudScore": "Puntos",
        "hudTime": "Tiempo",
        "memorizeTitle": "MEMORIZA LA SECUENCIA",
        "evaluating": "Evaluando...",
        "startTitle": "Test de dígitos",
        "startSubtitle": "Memoria numérica • amplitud de dígitos",
        "countdownSubtitle": "PREPÁRATE",
        "newBest": "NUEVO RÉCORD",
        "pointsLabel": "Puntos",
        "statAccuracy": "Precisión",
        "statPeakSpan": "Amplitud Máx",
        "statPerfects": "Perfectos",
        "btnPlayAgain": "Jugar de nuevo",
        "rulesTitle": "Instrucciones del Ejercicio y Puntuación",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Retención de Dígitos",
                        "highlight": "+100 PTS",
                        "result": "Memoriza la secuencia numérica y escríbela con el teclado"
                },
                {
                        "num": "2",
                        "text": "Bonus de Amplitud",
                        "highlight": "Hasta +120% PTS",
                        "result": "Ronda = 100 × (1 + 0,1 × (dígitos − 3)) puntos"
                },
                {
                        "num": "3",
                        "text": "Fallo / Tiempo límite",
                        "highlight": "-1 Dígito",
                        "result": "Fallo u 8 s sin confirmar: sin perder puntos ni tiempo, siguiente secuencia 1 dígito más corta"
                },
                {
                        "num": "4",
                        "text": "Escalera Adaptativa",
                        "highlight": "Ajuste continuo",
                        "result": "Acierto +1 dígito, fallo −1 dígito (3 a 15)"
                }
        ]
}} />
      <DrillGuide guide={digitSpanGuide} />
      <RelatedDrills />
    </>
  );
}
