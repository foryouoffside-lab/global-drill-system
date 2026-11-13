import WordRecallClient from '@/app/drills/memory/short-term-memory/word-recall/WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de memoria con palabras | Memoria verbal | SkillDrills",
  description: "Test de memoria con palabras gratis: la lista aparece 2 segundos y escribes las palabras en cualquier orden. Empieza con 3 y llega hasta 12 palabras.",
  keywords: [
    "test de memoria verbal",
    "test de memoria de palabras",
    "recordar palabras",
    "recuerdo libre",
    "retención de palabras",
    "memoria verbal a corto plazo",
    "memoria de trabajo verbal",
    "efecto de posición serial",
    "test de recuerdo de palabras",
    "ejercicio de memoria verbal",
    "agrupamiento semántico",
    "test de memoria gratis",
    "lista de palabras memoria",
    "memoria de palabras online"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall', 'es'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de memoria con palabras | Memoria verbal | SkillDrills",
    description: "Test de memoria con palabras gratis: la lista aparece 2 segundos y escribes las palabras en cualquier orden. Empieza con 3 y llega hasta 12 palabras.",
    url: "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de memoria con palabras | Memoria verbal | SkillDrills",
    description: "Test de memoria con palabras gratis: la lista aparece 2 segundos y escribes las palabras en cualquier orden. Empieza con 3 y llega hasta 12 palabras.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedWordRecallPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamiento de Memoria", "item": "https://skilldrills.online/es/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memoria a Corto Plazo", "item": "https://skilldrills.online/es/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "Test de memoria con palabras", "item": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Test de memoria con palabras",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Test de memoria con palabras gratis: la lista aparece 2 segundos y escribes las palabras en cualquier orden. Empieza con 3 y llega hasta 12 palabras.",
    "genre": "Cognitive Assessment / Verbal Memory",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Test de memoria con palabras",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall",
    "description": "Test de memoria con palabras gratis: la lista aparece 2 segundos y escribes las palabras en cualquier orden. Empieza con 3 y llega hasta 12 palabras.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "sameAs": ["https://es.wikipedia.org/wiki/Capacidad_de_memoria"],
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Test de memoria con palabras",
    "description": "Test de memoria con palabras gratis: la lista aparece 2 segundos y escribes las palabras en cualquier orden. Empieza con 3 y llega hasta 12 palabras.",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall",
    "genre": ["Memory Game", "Cognitive Training", "Brain Game"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo funciona este test de memoria con palabras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una lista de palabras aparece entera durante 2 segundos. Después, en un máximo de 12 segundos, escribes todas las palabras que recuerdes, separadas por espacios o comas, y envías con Enter. El orden da igual (recuerdo libre). Empiezas con 3 palabras; si aciertas todas sin palabras de más, sumas 1 palabra (máximo 12); si no, restas 1 (mínimo 3). La sesión dura 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se calcula la puntuación?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo puntúan las rondas en las que escribes todas las palabras de la lista sin ninguna de más: 150 × (1 + 0,15 × (palabras − 3)). 3 palabras = 150 puntos, 12 palabras = unos 353. Fallar no quita puntos ni tiempo, solo resta una palabra."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántas palabras recuerda una persona de media?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkillDrills no recoge datos de usuarios, así que no damos medias ni percentiles. Con 2 segundos de exposición y 12 de escritura, este juego no se compara con tests estandarizados de listas de palabras. Usa las etapas de práctica de abajo y tus propios récords."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si escribo mal una palabra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada palabra debe coincidir con la de la lista (se ignoran mayúsculas y tildes). Una errata cuenta como palabra de más y la correcta como olvidada, así que la ronda se pierde."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué diferencia hay entre recuerdo libre y reconocimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En el recuerdo libre sacas las palabras de la memoria sin pistas; en el reconocimiento eliges lo que ya viste entre opciones. Este test de memoria verbal usa recuerdo libre, por eso es más difícil."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el efecto de posición serial en listas de palabras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las palabras del principio (primacía) y del final (recencia) de una lista se recuerdan mejor que las del medio (Murdock, 1962). Como aquí aparecen todas juntas, el orden en que las lees cumple ese papel."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué ayuda unir las palabras en una escena?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pensar en el significado o unir las palabras hace que se procesen más a fondo y se recuerden mejor (niveles de procesamiento, Craik & Lockhart, 1972). Con solo 2 segundos, una escena sencilla es más realista que una historia larga."
        }
      },
      {
        "@type": "Question",
        "name": "¿Importa el orden al escribir las palabras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. La ronda vale si están todas las palabras de la lista, en cualquier orden. Conviene escribir primero las últimas que leíste."
        }
      },
      {
        "@type": "Question",
        "name": "¿Practicar con palabras mejora la memoria del día a día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No está garantizado. Con práctica sueles mejorar en este juego, pero la transferencia al día a día es discutida en la investigación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es gratis este test online de memoria con palabras?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es gratis, sin registro ni instalación. Tus récords se guardan solo en tu navegador."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo hacer el test de memoria con palabras",
    "description": "Cuatro pasos para memorizar una lista que se muestra 2 segundos y escribir las palabras (sesión de 45 segundos).",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall#step-1",
        "name": "Mira la lista durante 2 segundos",
        "text": "La lista completa aparece de una vez durante 2 segundos. Léela rápido."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall#step-2",
        "name": "Únelas en una escena",
        "text": "Imagina todas las palabras juntas en una escena breve."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall#step-3",
        "name": "Escribe primero las últimas",
        "text": "Cuando aparezca el campo, escribe primero las últimas palabras que leíste. El orden da igual."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/word-recall#step-4",
        "name": "Envía en menos de 12 segundos",
        "text": "Separa las palabras con espacios o comas y envía con Enter. Tienes 12 segundos."
      }
    ]
  };

  const wordRecallGuide = {
    heading: "Guía del test de memoria con palabras (recuerdo libre)",
    intro: [
      "El test de memoria con palabras muestra brevemente una lista y después escribes, en cualquier orden, las palabras que recuerdes. Es una versión de práctica del recuerdo libre que estudia la psicología de la memoria y un test de memoria verbal de entrenamiento.",
      "La investigación con listas de palabras empieza con Hermann Ebbinghaus (1885). Bennet Murdock (1962) describió el efecto de posición serial en el recuerdo libre —el principio y el final de la lista se recuerdan mejor— y Endel Tulving (1962) mostró que las personas agrupan las palabras por su cuenta.",
      "Según los niveles de procesamiento (Craik & Lockhart, 1972), las palabras que se piensan por su significado o se relacionan entre sí tienden a recordarse mejor. Con la exposición corta de este juego, ayuda unir las palabras rápidamente en una escena.",
      "Cómo funciona: empieza con 3 palabras; la lista aparece completa durante 2 segundos. Después tienes 12 segundos para escribir las palabras separadas por espacios o comas y enviar con Enter. Si aciertas todas sin palabras de más: +1 palabra (máximo 12); si falta alguna, hay una errónea o se acaba el tiempo: −1 palabra (mínimo 3). El juego registra puntuación, lista más larga y precisión (porcentaje de rondas acertadas); no mide el tiempo de reacción.",
      "Transparencia de datos: SkillDrills no recoge resultados en servidores; todo queda en el localStorage de tu navegador. Por eso esta página no muestra medias de usuarios, percentiles ni número de usuarios; los estudios citados aparecen abajo."
    ],
    benchmarks: {
      title: "Etapas de práctica del test de memoria con palabras (SkillDrills, 45 s)",
      headers: ["Etapa", "Palabras alcanzadas", "Puntos sin fallos hasta ahí", "Estrategia típica"],
      rows: [
        ["Etapa 1", "12 palabras", "unos 2.160+", "Une la lista entera en una escena al instante"],
        ["Etapa 2", "10–11 palabras", "unos 1.520–2.159", "Agrupa por significado de 2 en 2 o de 3 en 3"],
        ["Etapa 3", "8–9 palabras", "unos 980–1.519", "Recuerda principio y final, pierde las del medio"],
        ["Etapa 4", "6–7 palabras", "unos 520–979", "Lee y memoriza palabra por palabra"],
        ["Etapa 5", "3–5 palabras", "menos de 520", "Aprendiendo la exposición de 2 s y la escritura"]
      ],
      note: "Etapas de práctica de SkillDrills, no baremos de población. Los puntos corresponden a una sesión sin fallos desde 3 palabras hasta esa longitud (puntos por ronda = 150 × (1 + 0,15 × (palabras − 3))). En 45 segundos caben pocas rondas y los fallos acortan la lista, así que la puntuación real varía."
    },
    techniques: {
      title: "Estrategias para recordar más palabras",
      items: [
        {
          "name": "Una sola escena",
          "desc": "Mete todas las palabras en una imagen (p. ej., 'río', 'vela', 'dragón' → un dragón con una vela sobre un río). Relacionarlas por significado profundiza el procesamiento (Craik & Lockhart, 1972).",
          "tips": "Mantén la escena sencilla para montarla en 2 segundos."
        },
        {
          "name": "Agrupar por categorías",
          "desc": "Junta palabras parecidas: animales, lugares, objetos. Las personas agrupan las palabras de forma natural (Tulving, 1962).",
          "tips": "Al escribir, recupéralas categoría por categoría."
        },
        {
          "name": "Las últimas primero",
          "desc": "Las palabras recién leídas se desvanecen rápido (recencia). Escríbelas primero y luego recupera el principio y el medio (Murdock, 1962).",
          "tips": "El orden de escritura no afecta a la puntuación."
        },
        {
          "name": "Cuidado con las erratas",
          "desc": "Una errata cuenta como palabra errónea y hace perder la ronda entera. Escribir con precisión en los 12 segundos es clave.",
          "tips": "Adivinar una palabra que no estaba en la lista también hace perder la ronda."
        }
      ]
    },
    steps: [
      "Inicia la sesión de 45 segundos y mira la zona de palabras en el centro.",
      "Lee rápido la lista que aparece 2 segundos y une las palabras en una escena.",
      "En el campo de texto, escribe primero las últimas palabras que leíste.",
      "Escribe todas las palabras separadas por espacios o comas en menos de 12 segundos y envía con Enter.",
      "Los aciertos alargan la lista y los fallos la acortan: compara tu puntuación y tu lista más larga con tus propios récords."
    ],
    audience: "Estudiantes, opositores, profesionales y curiosos que quieran saber cuántas palabras pueden memorizar.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
    related: [
      { href: "/es/drills/memory/short-term-memory/digit-span", label: "Test de dígitos" },
      { href: "/es/drills/memory/short-term-memory/color-sequence", label: "Juego de colores" },
      { href: "/es/drills/memory/spatial-memory/grid-memorization", label: "Test de memoria visual" },
      { href: "/es/drills/memory/spatial-memory/object-location", label: "Memoria de ubicaciones" },
      { href: "/es/drills/memory/working-memory/n-back", label: "Test N-Back" }
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
      <WordRecallClient copy={{
          "h1Keyword": "Test de memoria con palabras",
          "h1Suffix": " – Memoria verbal",
          "subtitle": "Memoriza palabras y recuérdalas libremente",
          "statScore": "Puntos",
          "statTime": "Tiempo",
          "statWords": "Palabras",
          "wordsUnit": "Palabras",
          "statBestScore": "Récord",
          "memorizePhase": "MEMORIZA LAS PALABRAS",
          "btnSkip": "Saltar",
          "inputPhase": "ESCRIBE LAS PALABRAS RECORDADAS",
          "inputPlaceholder": "Escribe las palabras recordadas separadas por espacios...",
          "btnSubmit": "ENVIAR RESPUESTAS",
          "inputHint": "Pulsa Enter para enviar",
          "feedbackPhase": "EVALUACIÓN DEL RECUERDO",
          "extraWordsLabel": "Palabras incorrectas o sobrantes escritas:",
          "startTitle": "Recuerdo Verbal Pro",
          "startSubtitle": "Memoria verbal • recuerdo libre",
          "countdownSubtitle": "PREPÁRATE",
          "newBest": "NUEVO RÉCORD",
          "pointsLabel": "Puntos",
          "statAccuracy": "Precisión",
          "statPeakWords": "Palabras Máx.",
          "statPerfects": "Perfectos",
          "btnPlayAgain": "Jugar de Nuevo",
          "rulesTitle": "Instrucciones del Ejercicio y Puntuación",
          "aboutTitle": "Acerca del Test de Memoria Verbal (Word Recall)",
          "rulesItems": [
                    {
                              "num": "1",
                              "text": "Recuerdo de Lista",
                              "highlight": "+150 PTS",
                              "result": "Memoriza las palabras y escríbelas en la fase de recuerdo"
                    },
                    {
                              "num": "2",
                              "text": "Bonificación de Nivel",
                              "highlight": "Hasta +135%",
                              "result": "Ronda = 150 × (1 + 0,15 × (palabras − 3)) puntos"
                    },
                    {
                              "num": "3",
                              "text": "Fallo / Tiempo Agotado",
                              "highlight": "-1 Palabra",
                              "result": "Falta, errata o más de 12 s: sin perder puntos ni tiempo, 1 palabra menos"
                    },
                    {
                              "num": "4",
                              "text": "Amplitud Adaptativa",
                              "highlight": "Sube y Baja",
                              "result": "Todas bien +1 palabra, fallo −1 palabra (3 a 12)"
                    }
          ],
          "wordBank": [
                    "manzana",
                    "puente",
                    "castillo",
                    "diamante",
                    "águila",
                    "bosque",
                    "jardín",
                    "martillo",
                    "isla",
                    "selva",
                    "caballero",
                    "linterna",
                    "montaña",
                    "aguja",
                    "océano",
                    "palacio",
                    "reina",
                    "cohete",
                    "atardecer",
                    "templo",
                    "paraguas",
                    "valle",
                    "ventana",
                    "cebra",
                    "vela",
                    "dragón",
                    "pluma",
                    "plata",
                    "oro",
                    "mármol",
                    "terciopelo",
                    "cristal",
                    "bronce",
                    "cobre",
                    "sombra",
                    "espíritu",
                    "sabiduría",
                    "honor",
                    "gloria",
                    "sueño",
                    "tormenta",
                    "río",
                    "nube",
                    "llama",
                    "piedra",
                    "trueno",
                    "arcoíris",
                    "fénix",
                    "reloj",
                    "espejo"
          ]
}} />
      <DrillGuide guide={wordRecallGuide} />
      <RelatedDrills />
    </>
  );
}
