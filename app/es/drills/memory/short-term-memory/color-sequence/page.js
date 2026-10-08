import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

export const metadata = {
  title: "Juego Simón online | Secuencia de colores | SkillDrills",
  description: "Juega a Simón online gratis: observa una secuencia creciente de colores y sonidos y repítela en el mismo orden desde el navegador.",
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
    title: "Juego Simón online | Secuencia de colores | SkillDrills",
    description: "Juega a Simón online gratis: observa una secuencia creciente de colores y sonidos y repítela en el mismo orden desde el navegador.",
    url: "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Juego Simón online | Secuencia de colores | SkillDrills",
    description: "Juega a Simón online gratis: observa una secuencia creciente de colores y sonidos y repítela en el mismo orden desde el navegador.",
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
      { "@type": "ListItem", "position": 4, "name": "Juego Simón de colores", "item": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Juego Simón Online",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-16",
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
    "name": "Juego Simón Online",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    "description": "Juego tipo Simón gratuito en el navegador, con 6 paneles de colores y una secuencia que se alarga o se acorta según tus aciertos.",
    "dateModified": "2026-09-16",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "sameAs": ["https://es.wikipedia.org/wiki/Simon_%28juego%29"]
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Juego Simón – Secuencia de colores",
    "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence",
    "description": "Versión online del clásico juego electrónico de memoria: observa la secuencia de colores y sonidos y repítela en el mismo orden.",
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
        "name": "¿Qué es el juego Simón y cómo se juega online?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es un juego de memoria secuencial inspirado en el aparato electrónico Simon de 1978. La página ilumina una secuencia de paneles de colores con su sonido y tú la repites pulsando los mismos paneles en el mismo orden. En cada ronda acertada se añade un color más."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué funciones de la memoria se ponen en juego al recordar secuencias de colores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intervienen sobre todo la memoria de trabajo visual y la agenda visoespacial (Baddeley & Hitch, 1974), además de la atención selectiva y el recuerdo en orden. Es un juego de práctica, no una prueba clínica ni una medida de tu capacidad cognitiva."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuántos elementos podemos retener según Luck y Vogel (1997)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luck y Vogel (1997) y Cowan (2001) describen una capacidad de memoria de trabajo visual de unos 4 elementos independientes. Para recordar secuencias más largas hace falta agruparlos en bloques, es decir, usar chunking."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el chunking y cómo lo aplico en el juego Simón?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El chunking (Miller, 1956) consiste en unir elementos sueltos en bloques con sentido. Si divides seis colores en dos grupos de tres, como rojo-azul-verde y amarillo-violeta-naranja, solo tienes que retener dos bloques en lugar de seis elementos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué hay 6 colores en vez de los 4 del Simon original?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El violeta y el naranja amplían el juego a 6 paneles, así que cada paso tiene más opciones posibles y la secuencia es más difícil de adivinar. Es una variante pensada para quien ya domina el Simón clásico de 4 colores."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se pierde tiempo o puntos al fallar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No se resta tiempo del cronómetro ni se pierden los puntos ya acumulados. Al fallar, la secuencia retrocede un nivel y puedes seguir jugando hasta que termine la sesión de 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué nivel o puntuación es un buen punto de referencia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Como referencia personal, los niveles 8 a 10 (de 1.100 a 1.499 puntos) forman la Etapa 2 de la tabla y el nivel 11 o superior (más de 1.500 puntos) la Etapa 1. Son etapas editoriales de práctica, no estadísticas de población: compara tus sesiones en el mismo dispositivo."
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
          "text": "Sí. Los paneles responden a toques en teléfonos y tabletas y a clics de ratón en ordenador. El rendimiento depende del dispositivo, por eso conviene comparar tus puntuaciones en el mismo aparato."
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
    "name": "Cómo jugar al juego Simón de memoria de colores",
    "description": "Cuatro pasos para repetir secuencias de colores cada vez más largas en el juego Simón online.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence#step-1",
        "name": "Observa los destellos",
        "text": "Fija la mirada en el centro de los 6 paneles y sigue el orden de las luces y los sonidos."
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
        "text": "Pulsa los paneles en el mismo orden, con un ritmo constante y sin vacilar."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/es/drills/memory/short-term-memory/color-sequence#step-4",
        "name": "Sube de nivel",
        "text": "Cada ronda superada añade un color más a la secuencia y aumenta el multiplicador de puntos."
      }
    ]
  };

  const esCopy = {
    title: 'Juego Simón online',
    subtitle: 'Memoriza los colores y repite la secuencia exacta',
    caption: 'Observa la secuencia de luces y sonidos y repítela en el mismo orden a medida que se alarga.',
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
    rule2Result: 'Las secuencias más largas acumulan multiplicadores progresivos',
    rule3Text: 'Fallo o tiempo agotado',
    rule3Highlight: '-1 nivel',
    rule3Result: 'No pierdes los puntos acumulados; la secuencia se acorta',
    rule4Text: 'Dificultad adaptativa',
    rule4Highlight: 'Dinámica',
    rule4Result: 'La longitud de la secuencia se ajusta a tus aciertos',
    aboutTitle: 'Sobre el juego Simón de secuencia de colores',
    overviewTitle: '¿Qué se practica con el juego de memoria de colores?',
    overviewLead: 'La memoria de trabajo visual retiene unos 4 elementos independientes a la vez (Luck & Vogel, 1997; Cowan, 2001). Una secuencia de colores que se alarga pone a prueba ese límite de forma directa.',
    aboutIntro: [
      'Este juego practica la memoria visual: ver una secuencia de colores, retenerla y repetirla en el mismo orden.',
      'Al repetir secuencias cada vez más largas aprendes a agruparlas en bloques (chunking) y a mantener la atención durante la sesión.',
    ],
    aboutCards: [
      { title: '¿Para quién es?', text: 'Para estudiantes, opositores, profesionales y jugadores de esports que quieran practicar la memoria a corto plazo y la concentración.' },
      { title: 'Qué se practica', text: 'Amplitud de memoria visual, recuerdo en orden con la agenda visoespacial (Baddeley & Hitch, 1974) y rapidez de respuesta.' },
      { title: 'Estrategia de chunking', text: 'Agrupa los colores en bloques con ritmo o en trayectorias para superar el límite de unos 4 elementos de la memoria de trabajo (Miller, 1956).' },
    ],
  };

  const esColorSequenceGuide = {
    heading: 'Guía del juego Simón y la memoria de trabajo visual',
    intro: [
      'El juego Simón online consiste en ver una secuencia de colores y sonidos y repetirla en el mismo orden; cada ronda superada añade un color. Aquí tiene 6 paneles y sesiones de 45 segundos. Practica la memoria de trabajo visual y el chunking, y sirve para comparar tus propias puntuaciones en el mismo dispositivo.',
      'El Juego de Memoria de Secuencias de Colores es una herramienta interactiva rigurosa diseñada para evaluar, desafiar y expandir la memoria de trabajo visual y la retención secuencial de patrones. Popularizado por el dispositivo electrónico Simon, de Ralph Baer y Howard Morrison (1978), este formato exige la codificación inmediata de estímulos cromáticos dinámicos, su organización en búferes estructurados y su recuperación en estricto orden temporal.',
      'Los límites arquitectónicos de la memoria humana a corto plazo han sido cartografiados exhaustivamente por la psicología cognitiva. Mientras que George A. Miller (1956) identificó el cuello de botella verbal de $7 \\pm 2$ elementos, las investigaciones fundamentales de Nelson Cowan (2001) y Steven J. Luck & Edward K. Vogel (1997) demostraron que la capacidad pura de la memoria de trabajo visual está estrictamente limitada a unas 4 unidades independientes. Sin estrategias estructuradas de recodificación, la retención humana colapsa rápidamente más allá de cuatro elementos secuenciales.',
      'En el modelo multicomponente de memoria de trabajo de Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000), retener secuencias visuales activa la agenda visoespacial (Visuospatial Sketchpad). Robert H. Logie (1995) subdividió este componente en el retén visual pasivo (que almacena colores y formas) y el escriba interno (que ensaya activamente patrones espaciotemporales). Los ejecutantes avanzados reclutan sistemáticamente el bucle fonológico para crear representaciones de codificación dual (visual y subvocal), duplicando con eficacia la capacidad del búfer.',
      'Con cronometría digital de alta precisión en milisegundos (Woods et al., 2015), este ejercicio mide tanto la amplitud de la secuencia retenida como la latencia de respuesta motora por pulsación, lo que te permite seguir tu propia evolución, sin que sea una medida clínica de la memoria operativa.',
      'Metodología de medición y latencia de hardware: Cada evento interactivo se registra localmente en el navegador mediante el reloj de alta resolución performance.now() – ningún dato de rendimiento se sube a la red. Los navegadores limitan deliberadamente los temporizadores a ~1 ms como mitigación frente a ataques de temporización (Spectre), y su monitor cuantiza cada cambio a su intervalo de refresco nativo (~16,7 ms a 60 Hz, ~6,9 ms a 144 Hz, ~4,1 ms a 240 Hz; Woods et al., 2015). Variaciones menores a 5 ms constituyen ruido instrumental habitual; compare sus puntuaciones principalmente sobre el mismo hardware.',
      'Transparencia y privacidad de datos: SkillDrills no recopila datos agregados de usuarios ni métricas de telemetría. Sus puntuaciones, tiempos de reacción y progresiones de nivel permanecen guardadas estrictamente en el almacenamiento local (localStorage) de su navegador web y jamás se envían a servidores externos. Las referencias científicas se citan en el panel inferior; las etapas de la tabla son marcadores editoriales de práctica.',
      'Aviso médico y descargo de responsabilidad: Este ejercicio es un juego cognitivo web gratuito orientado al entrenamiento mental y la práctica personal. No constituye un dispositivo médico, una herramienta de diagnóstico clínico ni un tratamiento para el deterioro cognitivo o afecciones neurológicas. Si tiene inquietudes sobre su memoria o agudeza cognitiva, consulte a un profesional médico o neuropsicólogo colegiado.'
    ],
    benchmarks: {
      title: 'Etapas de práctica en el juego Simón (sesión de 45 segundos)',
      headers: ['Etapa', 'Nivel alcanzado', 'Puntuación (45 s)', 'Estrategia de memoria'],
      rows: [
        ['Etapa 1', 'Nivel 11 o más', 'Más de 1.500 PTS', 'Chunking constante; combina el recuerdo visual con el de los tonos'],
        ['Etapa 2', 'Nivel 8 – 10', '1.100 – 1.499 PTS', 'Supera con regularidad el límite de unos 4 elementos agrupando en parejas'],
        ['Etapa 3', 'Nivel 5 – 7', '700 – 1.099 PTS', 'Recuerda bien secuencias cortas; vacila cuando el ritmo se acelera'],
        ['Etapa 4', 'Nivel 3 – 4', '350 – 699 PTS', 'Memoria de trabajo en su límite natural; todavía sin agrupar en bloques'],
        ['Etapa 5', 'Menos de nivel 3', 'Menos de 350 PTS', 'Se pierde a partir del tercer color; los destellos anteriores interfieren']
      ],
      note: 'Etapas editoriales de práctica para comparar tus propias sesiones de 45 segundos con secuencias adaptativas de 6 colores; no son estadísticas de población ni normas clínicas. Referencias sobre el límite de la memoria de trabajo: Luck & Vogel (1997); Cowan (2001); Woods et al. (2015).'
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
          name: 'Trayectorias en el espacio',
          desc: 'Imagina una línea que una las posiciones de los paneles encendidos (triángulos, zigzag o rombos) en lugar de retener nombres sueltos.',
          tips: 'Una figura es más fácil de recordar que una lista de posiciones.'
        },
        {
          name: 'Asociación con los tonos',
          desc: 'Cada panel suena con una nota distinta. Memoriza la melodía resultante para que la memoria auditiva te sirva de apoyo.',
          tips: 'Mantén el sonido activado para recordar también con el oído.'
        },
        {
          name: 'Atención en el último color',
          desc: 'El principio de la secuencia se repite en cada turno; concentra la atención en el color nuevo que se añade al final.',
          tips: 'Repite en voz baja el tramo inicial y reserva la atención para el último destello.'
        }
      ]
    },
    steps: [
      'Inicia la sesión de 45 segundos y fija la mirada en el centro de los paneles.',
      'Sigue con atención la secuencia de destellos y tonos.',
      'Reorganiza mentalmente la secuencia en bloques de dos o tres colores.',
      'Cuando termine la muestra, pulsa los paneles en el mismo orden y con ritmo firme.',
      'Sube de nivel poco a poco para aumentar el multiplicador y mejorar tu récord.'
    ],
    audience: 'Estudiantes, profesionales, opositores y jugadores de esports que quieran practicar la memoria de trabajo, el chunking y la concentración con límite de tiempo.',
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'luck1997', 'woods2015'),
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
