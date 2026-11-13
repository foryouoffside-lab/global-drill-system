import GridMemorizationClient from '@/app/drills/memory/spatial-memory/grid-memorization/GridMemorizationClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de memoria visual online | SkillDrills",
  description: "Test de memoria visual online gratis: memoriza las casillas que se iluminan 1,5 segundos en la cuadrícula y repite el patrón, de 4x4 hasta 12 casillas en 5x5.",
  keywords: ['test de memoria visual', 'test de memoria visual online', 'memoria visual test', 'matriz de memoria', 'memoria visoespacial', 'patrones visuales', 'memoria de trabajo visual', 'test de memoria online', 'entrenamiento de memoria visual'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de memoria visual online | SkillDrills",
    description: "Test de memoria visual online gratis: memoriza las casillas que se iluminan 1,5 segundos en la cuadrícula y repite el patrón, de 4x4 hasta 12 casillas en 5x5.",
    type: 'website',
    url: 'https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de memoria visual online | SkillDrills",
    description: "Test de memoria visual online gratis: memoriza las casillas que se iluminan 1,5 segundos en la cuadrícula y repite el patrón, de 4x4 hasta 12 casillas en 5x5.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento de Memoria", "item": "https://skilldrills.online/es/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Memoria Espacial", "item": "https://skilldrills.online/es/drills/memory/spatial-memory" },
    { "@type": "ListItem", "position": 4, "name": "Test de Memoria Visual", "item": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Memoria Visual Online (Juego de Cuadrícula)",
  "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "sameAs": "https://es.wikipedia.org/wiki/Memoria_espacial",
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Memoria Visual Online (Juego de Cuadrícula)",
  "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization",
  "description": "Test de memoria visual gratis en el navegador: memoriza las casillas que se iluminan 1,5 segundos en una cuadrícula de 4x4 a 5x5 y repite el patrón.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Spatial Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de Memoria Visual Online (Juego de Memoria en Cuadrícula)",
  "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo entrenar la memoria visual en cuadrículas matriciales",
  "description": "Cuatro pasos prácticos para retener en 1,5 segundos un patrón de casillas iluminadas y repetirlo en la cuadrícula.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization#step-1",
      
      "name": "Fijar la mirada central",
      "text": "Enfoca tus ojos en el centro de la cuadrícula antes de que aparezca el patrón para utilizar la visión parafoveal en toda la matriz."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization#step-2",
      
      "name": "Ejecutar chunking de formas Gestalt",
      "text": "Agrupa las celdas iluminadas en bloques geométricos reconocibles (líneas, esquinas, 'L', cuadrados) en lugar de memorizar coordenadas aisladas."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization#step-3",
      
      "name": "Trazado visoespacial motor",
      "text": "Traza mentalmente una línea continua a través de las celdas marcadas durante los 1,5 segundos de exposición para preparar la memoria motora."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/grid-memorization#step-4",
      
      "name": "Reconstrucción sistemática de la cuadrícula",
      "text": "Pulsa primero los bloques geométricos identificados y luego completa las celdas periféricas aisladas antes de que la imagen mental se disipe."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un test de memoria visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aquí es un ejercicio de memoria de trabajo visoespacial: memorizas qué casillas se iluminan en la cuadrícula y luego las pulsas de memoria, sin repetir las posiciones con palabras. Es un juego de práctica gratuito, no una prueba clínica ni un psicotécnico oficial."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el ejercicio de memoria en cuadrícula?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En una cuadrícula de 4x4 se iluminan 5 casillas en morado durante 1,5 segundos. Al apagarse, pulsas todas las que estaban encendidas. Cada patrón completo suma 150 puntos y añade una casilla. Tras 7 casillas en 4x4, pasas a 5x5 (de 5 a un máximo de 12 casillas). El reloj de 60 segundos solo corre mientras repites el patrón."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es esto el Visual Patterns Test (VPT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. El Visual Patterns Test (Della Sala et al., 1997) es una prueba neuropsicológica de investigación con patrones en cuadrícula. Este ejercicio es un juego de práctica gratuito con un formato parecido, pero no sigue su procedimiento ni sus normas."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué se diferencia del Test de Corsi (Corsi Block-Tapping)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El test de bloques de Corsi (Corsi, 1972) mide la memoria espacial secuencial (tocar bloques en un orden temporal) usando el 'escriba interno'. Por contra, este ejercicio muestra todas las celdas a la vez, evaluando el 'caché visual' estático."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada patrón repetido por completo suma 150 puntos. La nota de la pantalla de resultados es una franja de práctica de SkillDrills con 1.150 puntos como referencia superior; no es una media ni un valor normativo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué el agrupamiento (chunking) mejora la memoria visual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La memoria de trabajo visual tiene un límite estricto de 3 a 4 elementos independientes (Luck & Vogel, 1997; Cowan, 2001). El chunking supera esta barrera al agrupar celdas adyacentes en figuras geométricas familiares (líneas, triángulos, letras), comprimiendo la información en una sola unidad cognitiva."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre el caché visual y el escriba interno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En el modelo de Logie (1995), el 'caché visual' es un almacén pasivo que retiene la forma, el color y las imágenes estáticas, mientras que el 'escriba interno' ensaya y actualiza activamente los movimientos espaciales."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué los patrones se olvidan tan rápido tras 1,5 segundos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En este ejercicio la exposición dura siempre 1,5 segundos. La memoria icónica conserva la imagen muy poco tiempo; lo que no agrupes en figuras o en una línea imaginaria en ese intervalo suele perderse antes de pulsar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Hay penalizaciones de puntuación por hacer clic en una casilla errónea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Una casilla incorrecta solo termina la ronda actual, sin restar puntos ni tiempo. Después aparece un patrón nuevo en el mismo nivel."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo ayuda la memoria visual en los videojuegos y la vida cotidiana?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El ejercicio se parece a situaciones en las que ves una disposición un instante y tienes que recordarla, como el minimapa o un tablero de ajedrez. No se garantiza una mejora en otras actividades."
      }
    }
  ]
};

const gridGuide = {
  intro: [
  "Este test de memoria visual online muestra durante 1,5 segundos unas casillas iluminadas en una cuadrícula y luego repites el patrón de memoria. Empiezas con 5 casillas en una cuadrícula de 4x4; cada patrón correcto añade una casilla y en la cuadrícula de 5x5 se llega hasta 12 casillas. Se trata de recordar la forma del patrón, no de describirlo con palabras.",
  "El estudio clínico del span visoespacial fue iniciado por Pietro Corsi (1972) con el test de bloques de Corsi, demostrando que la memoria visoespacial opera en un sistema neural independiente del span de dígitos verbales (Milner, 1971). En 1997, Sergio Della Sala, Robert H. Logie y colaboradores publicaron el Visual Patterns Test (VPT) para aislar la retención de patrones matriciales estáticos respecto a movimientos secuenciales dinámicos. Este ejercicio usa un formato parecido, pero no es el VPT.",
  "En la neurociencia cognitiva moderna, Robert H. Logie (1995) y Alan Baddeley (2000) subdividieron la agenda visoespacial en el 'Caché Visual' (almacén pasivo de forma, color y patrones estáticos) y el 'Escriba Interno' (mecanismo activo de planificación y repaso espacial). Además, investigaciones de Steven J. Luck & Edward K. Vogel (1997) y Nelson Cowan (2001) confirmaron que la memoria de trabajo visual pura está limitada a 3 o 4 elementos independientes. Expandir este límite exige aplicar chunking espacial: agrupar casillas en figuras Gestalt completas.",
  "Cómo funciona: cada patrón se muestra 1,5 segundos. El reloj de 60 segundos solo corre mientras repites el patrón. Un patrón completo suma 150 puntos; una casilla incorrecta termina la ronda sin restar puntos ni tiempo, y aparece un patrón nuevo en el mismo nivel. No se mide el tiempo de reacción.",
  "Datos: tu puntuación y tu récord se guardan solo en el localStorage del navegador y no se envían a ningún servidor.",
  "Este ejercicio es un juego cognitivo gratuito orientado a la práctica y el entrenamiento mental; no es un dispositivo médico ni una prueba diagnóstica clínica. Si tienes dudas sobre tu salud cognitiva, consulta con un profesional médico."
],
  benchmarks: {
    title: "Franjas de práctica SkillDrills (una partida)",
    headers: ["Franja", "Puntos", "Patrones completos", "Dificultad alcanzada"],
    rows: [
      ["Franja alta", "1.200 o más", "8 o más", "Cuadrícula 5x5, 10 a 12 casillas"],
      ["Franja media", "600 – 1.050", "4 – 7", "Cuadrícula 5x5, 6 a 9 casillas"],
      ["Franja inicial", "150 – 450", "1 – 3", "4x4 con 6 a 7 casillas; tras 3 patrones, 5x5"],
      ["Inicio", "0", "0", "Cuadrícula 4x4, 5 casillas"]
    ],
    note: "Puntos = patrones completos × 150. Las franjas se calculan a partir de las reglas del juego: son referencias de práctica de SkillDrills, no estadísticas de población ni normas clínicas."
  },
  techniques: {
    title: "Técnicas comprobadas para ampliar la memoria visual matricial",
    items: [
  {
    "name": "Agrupamiento de formas espaciales (Chunking Gestalt)",
    "desc": "Agrupa mentalmente las celdas encendidas contiguas en formas geométricas familiares como triángulos, líneas, cuadrados o letras (Wertheimer, 1923; Della Sala et al., 1999). Convertir 7 coordenadas en 2 o 3 figuras reduce el número de unidades que hay que recordar.",
    "tips": "Busca esquinas y líneas continuas de inmediato en lugar de observar casillas aisladas."
  },
  {
    "name": "Codificación de espacio negativo (huecos)",
    "desc": "Cuando un sector de la cuadrícula esté densamente ocupado por celdas iluminadas, memoriza las casillas vacías (apagadas). Recordar 2 huecos oscuros dentro de un bloque de 6 casillas es mucho más eficiente que memorizar 4 luces.",
    "tips": "Si un cuadrante está casi lleno, concéntrate solo en los 'agujeros' oscuros."
  },
  {
    "name": "Trazado cinestésico del escriba interno",
    "desc": "Activa el 'escriba interno' (Logie, 1995) trazando mentalmente una línea continua que una todas las celdas encendidas durante la exposición de 1,5 segundos. La planificación motora refuerza la huella en el caché visual pasivo.",
    "tips": "Mantén un sentido de barrido uniforme (de arriba a la izquierda hacia abajo a la derecha) para dar direccionalidad al patrón."
  },
  {
    "name": "Fijación central y captura parafoveal",
    "desc": "Mantén los ojos firmemente fijados en el centro geométrico de la cuadrícula. Evita mover los ojos con sacadas constantes entre casillas; la visión parafoveal captura la topología global simultáneamente.",
    "tips": "Suaviza el enfoque visual para registrar el patrón completo como una sola silueta fotográfica."
  }
]
  },
  steps: [
  "Fija la mirada en el centro de la cuadrícula y espera a que el patrón se ilumine.",
  "Durante el destello de 1,5 segundos, agrupa las casillas en 2 o 3 figuras geométricas.",
  "En áreas con muchas luces, memoriza los huecos vacíos (espacio negativo) para ahorrar memoria.",
  "Cuando la cuadrícula se apague, pulsa rápidamente las figuras memorizadas sobre el tablero.",
  "Avanza a través de matrices de 4x4 y 5x5 para seguir empujando tu límite de memoria de trabajo."
],
  audience: "Jugadores de esports que buscan mejorar su visión de minimapa, estudiantes de carreras técnicas o arquitectura, ajedrecistas, radiólogos y cualquier persona interesada en entrenar su memoria visoespacial.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
  related: [
  {
    "href": "/es/drills/memory/working-memory/n-back",
    "label": "Test N-Back (Memoria de Trabajo)"
  },
  {
    "href": "/es/drills/cognitive/focus/concentration-grid",
    "label": "Tabla de Schulte (Cuadrícula de Concentración)"
  },
  {
    "href": "/es/drills/memory/short-term-memory/digit-span",
    "label": "Test de Dígitos (Span de Memoria)"
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

export default function LocalizedGridMemorizationPage() {
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
      <GridMemorizationClient copy={{
        "h1Keyword": "Test de memoria visual online",
        "h1Suffix": "",
        "subtitle": "Memoriza patrones iluminados en una cuadrícula",
        "caption": "La memoria de trabajo visual almacena aproximadamente cuatro objetos distintos a la vez; el cuello de botella es la cantidad de objetos y no el nivel de detalle (Luck & Vogel, 1997). Las cuadrículas matriciales estáticas evalúan el 'caché visual', el almacén pasivo de formas y disposición espacial (Logie, 1995).",
        "statScore": "Puntos",
        "statTime": "Tiempo",
        "statGridSize": "Cuadrícula",
        "statBest": "Récord",
        "hudScore": "Puntos",
        "hudTime": "Tiempo",
        "startTitle": "Memoria Visual Pro",
        "startSubtitle": "Memoria visual • Matriz",
        "countdownSubtitle": "PREPÁRATE",
        "newBest": "NUEVO RÉCORD",
        "pointsLabel": "Puntos",
        "statAccuracy": "Precisión",
        "cellsUnit": "Celdas",
        "statPeakPattern": "Patrón Máximo",
        "statPerfects": "Perfectos",
        "btnPlayAgain": "Jugar de nuevo",
        "rulesTitle": "Instrucciones del Ejercicio y Puntuación",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Retención de Patrón",
                        "highlight": "+150 PTS",
                        "result": "Memoriza la posición de las celdas y pulsa para recrearlas"
                },
                {
                        "num": "2",
                        "text": "Progresión de Nivel",
                        "highlight": "4x4 → 5x5",
                        "result": "Una casilla más por patrón correcto, hasta 12 casillas en 5x5"
                },
                {
                        "num": "3",
                        "text": "Error",
                        "highlight": "Sin Penalización",
                        "result": "La ronda termina, sin restar puntos ni tiempo"
                },
                {
                        "num": "4",
                        "text": "Nivel Estable",
                        "highlight": "Mantiene Nivel",
                        "result": "Tras un fallo, un patrón nuevo en el mismo nivel"
                }
        ]
}} />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
