import NBackClient from '@/app/drills/memory/working-memory/n-back/NBackClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test N-Back online | Memoria de trabajo | SkillDrills",
  description: "Test N-Back online y gratis: indica si la letra en pantalla es igual a la de N pasos atrás. Empieza en 3-back y sube un nivel cada 8 aciertos, en el navegador.",
  keywords: ['test n-back', 'test n-back online', 'test de memoria de trabajo', 'memoria de trabajo', '3-back', 'tarea n-back'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test N-Back online | Memoria de trabajo | SkillDrills",
    description: "Test N-Back gratis en el navegador: compara cada letra con la de N pasos atrás y practica la memoria de trabajo desde el 3-back, sin registro.",
    type: "website",
    url: "https://skilldrills.online/es/drills/memory/working-memory/n-back",
    siteName: "SkillDrills",
    locale: "es_ES",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Test N-Back online | Memoria de trabajo | SkillDrills",
    description: "Test N-Back gratis en el navegador: compara cada letra con la de N pasos atrás y practica la memoria de trabajo desde el 3-back, sin registro.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/es/drills/memory/working-memory/n-back",
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
};

const appDescription = "Test N-Back gratis en el navegador: las letras aparecen una a una y indicas si cada una es igual a la de N pasos atrás. Empieza en 3-back y sube un nivel cada 8 aciertos.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento de memoria", "item": "https://skilldrills.online/es/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Memoria de trabajo", "item": "https://skilldrills.online/es/drills/memory/working-memory" },
    { "@type": "ListItem", "position": 4, "name": "Test N-Back", "item": "https://skilldrills.online/es/drills/memory/working-memory/n-back" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test N-Back online (memoria de trabajo)",
  "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test N-Back online (memoria de trabajo)",
  "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back",
  "description": appDescription,
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Working Memory", "N-Back"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test N-Back online (memoria de trabajo)",
  "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo hacer el test N-Back",
  "description": "Cuatro pasos para comparar cada letra con la de N pasos atrás.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back#step-1",
      "name": "Memorizar las 3 primeras letras",
      "text": "Las 3 primeras letras aún no tienen con qué compararse: solo memorízalas. Mientras tanto, el reloj no corre."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back#step-2",
      "name": "Comparar con la letra de N pasos atrás",
      "text": "Con cada letra nueva, comprueba si es igual a la de exactamente N pasos atrás (3 al principio)."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back#step-3",
      "name": "Elegir Coincide o No coincide",
      "text": "Haz clic o toca 'Coincide' si es la misma letra; si no, 'No coincide'. La ventana de respuesta empieza en 2 segundos."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/es/drills/memory/working-memory/n-back#step-4",
      "name": "Actualizar la lista mental",
      "text": "Tras cada respuesta, descarta la letra más antigua y añade la nueva para mantener siempre las últimas N."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona el test N-Back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las letras aparecen de una en una. Si la letra actual es igual a la de exactamente N pasos atrás, pulsa 'Coincide'; si no, 'No coincide'. Cada acierto suma +150 puntos. Las N primeras letras son solo para memorizar y el reloj no corre durante ese tiempo."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué nivel empieza y cómo sube?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El test empieza en 3-back. Cada 1.200 puntos (8 aciertos) el nivel sube a 4-back, 5-back y así sucesivamente; la nueva distancia se aplica desde la letra siguiente. Fallar nunca hace bajar el nivel."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo tengo para responder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tienes 2 segundos por letra; la ventana se reduce 0,1 segundos por nivel, hasta un mínimo de 1,2 segundos. La sesión dura 45 segundos y el reloj se detiene mientras memorizas las N primeras letras."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si fallo o no respondo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No pierdes puntos ni tiempo. Los fallos y la falta de respuesta cuentan como error en la precisión y aparece la letra siguiente. Más o menos una de cada tres letras coincide, así que responder 'No coincide' importa igual."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es un dual n-back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Es un N-Back simple, solo con letras. El dual n-back compara dos estímulos a la vez, como posición y sonido; esa variante no está disponible aquí."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede jugar con el teclado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Por ahora respondes con los dos botones de la pantalla, con clic del ratón o tocando. No hay atajos de teclado."
      }
    },
    {
      "@type": "Question",
      "name": "¿El N-Back aumenta el CI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No está demostrado. Jaeggi et al. (2008) informaron de una relación entre el entrenamiento N-Back y la inteligencia fluida, pero los estudios posteriores dieron resultados contradictorios. Con práctica puede subir tu puntuación en esta tarea concreta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se guardan mis resultados? ¿Tienen valor médico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mejor puntuación y el nivel máximo se guardan solo en el localStorage de este navegador y no se envían a ningún servidor. Son marcas de práctica y no diagnostican problemas de memoria de trabajo ni TDAH."
      }
    }
  ]
};

const nBackClientCopyEs = {
  h1Keyword: "Test N-Back online",
  h1Suffix: " – Memoria de trabajo",
  subtitle: "¿La letra es igual a la de N pasos atrás? Empieza en 3-back.",
  statScore: "Puntuación",
  statTime: "Tiempo",
  statLevel: "Nivel",
  statBest: "Récord",
  hudScore: "Puntuación",
  hudTime: "Tiempo",
  modeSuffix: "-BACK",
  memorizingText: "Memorizando las primeras {n} letras...",
  btnMatch: "COINCIDE",
  btnNoMatch: "NO COINCIDE",
  startTitle: "Test N-Back",
  startSubtitle: "Memoria de trabajo • desde 3-back",
  countdownSubtitle: "PREPÁRATE",
  newBest: "NUEVO RÉCORD",
  statPoints: "Puntos",
  statAccuracy: "Precisión",
  statPeakLevel: "Nivel máximo",
  statPerfects: "Aciertos",
  btnPlayAgain: "Jugar de nuevo",
  rulesTitle: "Reglas y puntuación",
  rulesItems: [
    { num: "1", text: "Coincide / No coincide (N pasos atrás)", highlight: "+150 PTS", result: "Por acierto" },
    { num: "2", text: "Subida de nivel", highlight: "3-Back → 4-Back+", result: "Cada 1.200 puntos (8 aciertos)" },
    { num: "3", text: "Ventana de respuesta más corta", highlight: "2,0 s → mín. 1,2 s", result: "0,1 s menos por nivel" },
    { num: "4", text: "Sin respuesta", highlight: "Sin descuento", result: "Sin pérdida de puntos ni tiempo, cuenta como error" },
    { num: "5", text: "Respuesta incorrecta", highlight: "Sin descuento", result: "El nivel se mantiene, el reloj de 45 s sigue igual" }
  ]
};

const guideEs = {
  intro: [
    "El test N-Back online es un entrenamiento gratuito de memoria de trabajo en el navegador: las letras aparecen una a una e indicas si cada una es igual a la de exactamente N pasos atrás. Como hay que mantener las últimas N letras y actualizar la lista con cada letra nueva, la tarea exige sobre todo actualizar la memoria de trabajo (Kirchner, 1958).",
    "El test empieza en 3-back. Las 3 primeras letras son solo para memorizar; después respondes 'Coincide' o 'No coincide' a cada letra. Cada acierto suma +150 puntos y cada 1.200 puntos (8 aciertos) el nivel sube a 4-back, 5-back, etc. La ventana de respuesta empieza en 2 segundos y se reduce 0,1 segundos por nivel, hasta 1,2 segundos.",
    "La sesión dura 45 segundos; el reloj se detiene mientras memorizas las primeras letras. Los fallos y la falta de respuesta no cuestan puntos ni tiempo y no bajan el nivel: solo cuentan como error en la precisión. Es un N-Back simple con letras, no un dual n-back (posición + sonido). Respuesta con clic o toque en los botones.",
    "Transparencia de datos: los resultados se guardan solo en el localStorage de este navegador y no se envían a ningún servidor. Por eso SkillDrills no publica medias de usuarios ni clasificaciones.",
    "Esta herramienta es un juego gratuito de práctica en el navegador. No es un dispositivo médico ni una herramienta de diagnóstico, y los resultados no indican problemas de memoria, TDAH ni CI."
  ],
  benchmarks: {
    title: "Niveles de práctica SkillDrills (puntos = aciertos × 150)",
    headers: ["Nivel de práctica", "Aciertos", "Puntos", "Nivel alcanzado"],
    rows: [
      ["Inicial", "0–3", "0–450", "3-back. Aprendiendo las reglas y el ritmo"],
      ["Básico", "4–7", "600–1.050", "Aún 3-back. Actualización estable de las 3 últimas letras"],
      ["Intermedio", "8–15", "1.200–2.250", "4-back alcanzado, ventana de 1,9 s"],
      ["Avanzado", "16+", "2.400+", "5-back o más, ventana de 1,8 s o menos"]
    ],
    note: "Estos niveles se calculan a partir de las reglas de puntuación del juego; no son normas de población ni umbrales clínicos."
  },
  techniques: {
    title: "Consejos para el test N-Back",
    items: [
      { name: "Repetir en voz baja", desc: "Repite mentalmente las últimas N letras con un ritmo fijo (p. ej., B-M-T → M-T-R). Cuando llegue una nueva, compárala con la primera y descártala.", tips: "Nombres cortos para las letras ayudan a mantener el ritmo." },
      { name: "Cuidado con las letras cercanas", desc: "Una letra vista hace 1 o 2 pasos resulta familiar, pero no es la correcta. Comprueba que sean exactamente N pasos.", tips: "La familiaridad por sí sola no basta para pulsar 'Coincide'." },
      { name: "Responder 'No coincide' sin miedo", desc: "Solo una de cada tres letras aproximadamente coincide. Si dudas demasiado, la respuesta caduca.", tips: "Elige siempre una de las dos respuestas dentro de la ventana." },
      { name: "Reiniciar rápido si te pierdes", desc: "Si pierdes la secuencia, no intentes recordar el pasado: vuelve a montar la lista desde la letra actual.", tips: "Tras N letras podrás volver a comparar con seguridad." }
    ]
  },
  steps: [
    "Pulsa Iniciar y espera la cuenta atrás de 3 segundos.",
    "Memoriza las 3 primeras letras (el reloj no corre).",
    "Después, con cada letra, elige 'Coincide' si es igual a la de 3 pasos atrás; si no, 'No coincide'.",
    "Cada 8 aciertos el nivel sube a 4-back, 5-back y la ventana de respuesta se acorta.",
    "Tras 45 segundos, revisa tu puntuación, nivel máximo y precisión."
  ],
  audience: "Quien quiera hacer un test N-Back o un test de memoria de trabajo directamente en el navegador, estudiantes que conocen la tarea y cualquiera que busque un juego mental corto.",
  faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text })),
  sources: pickSources('baddeley1974', 'cowan2001'),
  related: [
    { href: "/es/drills/memory/spatial-memory/path-tracing", label: "Test de Corsi" },
    { href: "/es/drills/memory/spatial-memory/grid-memorization", label: "Test de Memoria Visual" },
    { href: "/es/drills/memory/spatial-memory/object-location", label: "Test de Memoria Espacial" },
    { href: "/es/drills/memory/short-term-memory/digit-span", label: "Test de Dígitos" },
    { href: "/es/drills/memory/short-term-memory/word-recall", label: "Test de Memoria Verbal" }
  ]
};

export default function NBackPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NBackClient copy={nBackClientCopyEs} />

      <DrillGuide guide={guideEs} />

      <RelatedDrills />
    </>
  );
}
