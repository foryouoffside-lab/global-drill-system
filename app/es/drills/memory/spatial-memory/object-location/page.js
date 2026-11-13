import ObjectLocationClient from '@/app/drills/memory/spatial-memory/object-location/ObjectLocationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de memoria espacial online | SkillDrills",
  description: "Test de memoria espacial online gratis: los objetos aparecen 1,5 segundos en la cuadrícula y pulsas dónde estaba el objeto pedido. Memoria visoespacial.",
  keywords: ['test de memoria espacial', 'memoria espacial online', 'memoria de localización de objetos', 'memoria visoespacial', 'test de posiciones', 'memoria de trabajo visoespacial', 'localización de objetos', 'ejercicio de memoria espacial', 'juego de memoria espacial', 'razonamiento espacial test'],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/memory/spatial-memory/object-location",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/object-location', 'es'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de memoria espacial online | SkillDrills",
    description: "Test de memoria espacial online gratis: los objetos aparecen 1,5 segundos en la cuadrícula y pulsas dónde estaba el objeto pedido. Memoria visoespacial.",
    url: "https://skilldrills.online/es/drills/memory/spatial-memory/object-location",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de memoria espacial online | SkillDrills",
    description: "Test de memoria espacial online gratis: los objetos aparecen 1,5 segundos en la cuadrícula y pulsas dónde estaba el objeto pedido. Memoria visoespacial.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedObjectLocationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamiento de Memoria", "item": "https://skilldrills.online/es/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memoria Espacial", "item": "https://skilldrills.online/es/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Test de Memoria Espacial", "item": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Test de Memoria Espacial (Localización de Objetos)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Test de memoria espacial gratis en el navegador: memoriza dónde aparecen los objetos durante 1,5 segundos y encuentra la casilla del objeto pedido.",
    "genre": "Memory Game / Spatial Memory",
    "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Test de Memoria Espacial (Localización de Objetos)",
    "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location",
    "description": "Test de memoria espacial gratis en el navegador: memoriza dónde aparecen los objetos durante 1,5 segundos y encuentra la casilla del objeto pedido.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "sameAs": "https://es.wikipedia.org/wiki/Memoria_espacial",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Test de Memoria Espacial (Localización de Objetos)",
    "description": "Test de memoria espacial gratis en el navegador: memoriza dónde aparecen los objetos durante 1,5 segundos y encuentra la casilla del objeto pedido.",
    "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location",
    "genre": ["Memory Game", "Cognitive Training", "Spatial Memory"],
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
            "name": "¿Qué es un test de memoria espacial de localización de objetos?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Es un juego de práctica gratuito de memoria de localización de objetos: memorizas qué objeto estaba en qué casilla y luego encuentras la posición de un objeto pedido. No es un psicotécnico oficial; la puntuación es solo una referencia personal de práctica."
            }
      },
      {
            "@type": "Question",
            "name": "¿Cómo funciona este ejercicio?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En una cuadrícula de 3x3 aparecen 2 objetos (emojis) durante 1,5 segundos. Después se muestra un objeto objetivo arriba y tienes 8 segundos para pulsar la casilla donde estaba. Cada acierto suma 150 puntos y sube un nivel; cada nivel añade un objeto (máximo 10). La cuadrícula pasa a 4x4 en el nivel 8 y a 5x5 en el nivel 15. La partida dura 45 segundos en total."
            }
      },
      {
            "@type": "Question",
            "name": "¿Es esto la tarea de localización de objetos de Silverman y Eals?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Eals y Silverman (1994) estudiaron la memoria de localización de objetos con una tarea de investigación en la que se pregunta por la posición de objetos tras observarlos. Este juego usa una idea parecida, pero no sigue su procedimiento ni sus normas."
            }
      },
      {
            "@type": "Question",
            "name": "¿Qué es el 'Feature Binding' en neurociencia cognitiva?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El proceso por el cual la vía visual ventral (procesamiento del objeto) y la vía dorsal (procesamiento espacial) se integran en el hipocampo formando una representación episódica unificada."
            }
      },
      {
            "@type": "Question",
            "name": "¿Cómo se calcula la puntuación?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cada posición objetivo encontrada suma 150 puntos. La nota de la pantalla de resultados es una franja de práctica de SkillDrills con 1.000 puntos como referencia superior; no es una media."
            }
      },
      {
            "@type": "Question",
            "name": "¿En qué se diferencia de un test de cuadrícula tradicional?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En el test de memoria visual (cuadrícula) repites todo un patrón de casillas iluminadas y puedes agruparlo en formas. Aquí memorizas qué objeto estaba en qué casilla y solo buscas la posición de un objeto objetivo."
            }
      },
      {
            "@type": "Question",
            "name": "¿Por qué es más difícil recordar la ubicación de objetos que simples figuras?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Porque la conjunción de características impone un alto coste atencional en la memoria de trabajo (Luck & Vogel, 1997), requiriendo sostener dos dimensiones simultáneas en lugar de una sola."
            }
      },
      {
            "@type": "Question",
            "name": "¿Qué áreas cerebrales intervienen en la memoria de localización?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Principalmente el hipocampo bilateral, el giro parahipocampal, la corteza parietal posterior y la corteza prefrontal dorsolateral (DLPFC) para el mantenimiento activo de coordenadas."
            }
      },
      {
            "@type": "Question",
            "name": "¿Hay penalizaciones de tiempo o puntos por equivocarse?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Un clic erróneo o no responder en 8 segundos termina solo la ronda, sin restar puntos. El nivel no baja y aparece una nueva disposición en el mismo nivel. Eso sí, el reloj de 45 segundos sigue corriendo."
            }
      },
      {
            "@type": "Question",
            "name": "¿Cómo influye este entrenamiento en la vida diaria y en los videojuegos?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El ejercicio se parece a situaciones en las que recuerdas una disposición de un vistazo, como dónde dejaste las llaves o posiciones en el minimapa. No se garantiza una mejora en otras actividades."
            }
      }
]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo entrenar la memoria espacial y la localización de objetos",
    "description": "Cuatro pasos prácticos para memorizar la posición de los objetos en 1,5 segundos y encontrar el objeto objetivo.",
    "step": [
      {
            "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location#step-1",
            
            "name": "Escaneo por cuadrantes",
            "text": "En cuanto aparezcan los objetos, divide mentalmente el tablero en 4 sectores (superior izquierdo, superior derecho, inferior izquierdo e inferior derecho) para evaluar la distribución."
      },
      {
            "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location#step-2",
            
            "name": "Anclaje en puntos de referencia",
            "text": "Vincula la posición de cada objeto con puntos fijos como las esquinas, los bordes exteriores o la celda central."
      },
      {
            "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location#step-3",
            
            "name": "Emparejamiento semántico-espacial",
            "text": "Crea asociaciones verbales o visuales inmediatas entre el tipo de objeto y su dirección (p. ej., 'estrella arriba, llave abajo')."
      },
      {
            "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/es/drills/memory/spatial-memory/object-location#step-4",
            
            "name": "Localización y clic del objetivo",
            "text": "Cuando el tablero quede vacío y aparezca el icono a buscar, consulta tu mapa mental y pulsa sin dudar en la celda correcta."
      }
]
  };

  const objectLocationGuide = {
    intro: [
      "Este test de memoria espacial online muestra objetos (emojis) durante 1,5 segundos en una cuadrícula. Después se pide un objeto objetivo y pulsas la casilla donde estaba: es práctica de memoria visoespacial de localización de objetos, no de patrones. Empiezas con 2 objetos en una cuadrícula de 3x3; cada acierto añade un objeto (máximo 10), la cuadrícula pasa a 4x4 en el nivel 8 y a 5x5 en el nivel 15.",
      "El fundamento empírico de esta evaluación proviene de las investigaciones de Marion Eals e Irwin Silverman (1994), quienes demostraron que recordar la posición de objetos constituye un módulo adaptativo independiente de la rotación espacial euclidiana. Este juego no es su tarea de investigación, sino un ejercicio de formato parecido. Anteriormente, Edward C. Tolman (1948) sentó las bases del mapa cognitivo (Cognitive Map), explicando cómo los seres vivos estructuran representaciones internas de su entorno.",
      "En el campo de la memoria de trabajo, Robert H. Logie (1995) y Alan Baddeley (2000) identificaron que la unión objeto-posición es coordinada por el búfer episódico (Episodic Buffer), que integra datos del caché visual con el escriba interno espacial. Asimismo, Steven J. Luck y Edward K. Vogel (1997) probaron que las conjunciones de características conllevan una alta sobrecarga atencional, y Nelson Cowan (2001) estimó la capacidad del foco de la memoria de trabajo en unos 3 o 4 elementos.",
      "Cómo funciona: la disposición se ve durante 1,5 segundos y luego tienes 8 segundos para responder. Un acierto suma 150 puntos y sube un nivel; un fallo o tiempo agotado termina la ronda sin restar puntos, y aparece una nueva disposición en el mismo nivel. La partida dura 45 segundos en total; no se mide el tiempo de reacción.",
      "Datos: tu puntuación y tu récord se guardan solo en el localStorage del navegador y no se envían a ningún servidor."
],
    benchmarks: {
      title: "Franjas de práctica SkillDrills (una partida)",
      headers: ["Franja", "Puntos", "Aciertos", "Dificultad alcanzada"],
      rows: [
        ["Franja alta", "1.050 o más", "7 o más", "Nivel 8+, 9 a 10 objetos, cuadrícula 4x4 (5x5 tras 14 aciertos)"],
        ["Franja media", "600 – 900", "4 – 6", "Nivel 5 a 7, 6 a 8 objetos, cuadrícula 3x3"],
        ["Franja inicial", "150 – 450", "1 – 3", "Nivel 2 a 4, 3 a 5 objetos, cuadrícula 3x3"],
        ["Inicio", "0", "0", "Nivel 1, 2 objetos, cuadrícula 3x3"]
      ],
      note: "Puntos = aciertos × 150. Las franjas se calculan a partir de las reglas del juego: son referencias de práctica de SkillDrills, no estadísticas de población."
    },
    techniques: {
      title: "Estrategias con base científica para potenciar la retención espacial",
      items: [
        {
                "name": "Anclaje en puntos de referencia (Landmark Anchoring)",
                "desc": "Fija los objetos respecto a esquinas, bordes o el centro de la cuadrícula (Tolman, 1948). Asociar 'el diamante está en la esquina superior izquierda' permite prescindir del cálculo numérico de coordenadas.",
                "tips": "En cuanto aparezcan los objetos, identifica qué iconos ocupan los bordes y esquinas."
        },
        {
                "name": "Emparejamiento semántico-espacial",
                "desc": "Crea asociaciones mentales inmediatas entre el objeto y su dirección (Baddeley, 2000). Por ejemplo, asocia una estrella superior con el cielo y una llave inferior con una cerradura en el suelo.",
                "tips": "Utiliza etiquetas verbales concisas como 'estrella arriba, fuego al centro'."
        },
        {
                "name": "Zonificación por cuadrantes",
                "desc": "Subdivide mentalmente los tableros grandes en cuatro cuadrantes y cuenta cuántos objetos habitan en cada uno antes de detallar su posición.",
                "tips": "Fija primero la cantidad de elementos por zona y luego determina su celda específica."
        },
        {
                "name": "Fijación central y barrido parafoveal",
                "desc": "Mantén la mirada en el centro del tablero para captar la distribución general con la visión periférica, aplicando solo 1 o 2 microsacadas a iconos dudosos.",
                "tips": "Evita movimientos erráticos con los ojos; mantén la cabeza quieta y realiza un barrido sereno."
        }
]
    },
    steps: [
      "Fija la mirada en el centro del tablero y observa la disposición inicial de los objetos.",
      "Durante los 1,5 s de muestra, ancla cada objeto a un punto de referencia (esquinas, bordes o centro).",
      "Genera asociaciones semántico-espaciales inmediatas que unan el icono con su ubicación.",
      "Cuando el tablero se despeje y veas el objetivo, busca en tu mapa mental y pulsa la celda correspondiente.",
      "En cada nivel entra un objeto y la cuadrícula crece de 3x3 a 4x4 y 5x5: aplica los mismos puntos de referencia a más objetos."
],
    audience: "Jugadores competitivos que buscan optimizar el control del minimapa, radiólogos, estudiantes de ciencias técnicas y personas interesadas en potenciar su memoria de trabajo visoespacial.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'luck1997', 'tolman1948', 'eals1994'),
    related: [
      {
            "href": "/es/drills/memory/spatial-memory/grid-memorization",
            "label": "Test de Memoria Visual (Memory Matrix)"
      },
      {
            "href": "/es/drills/memory/spatial-memory/path-tracing",
            "label": "Test de Trazado de Rutas (Path Tracing)"
      },
      {
            "href": "/es/drills/memory/short-term-memory/digit-span",
            "label": "Test de Dígitos (Digit Span)"
      },
      {
            "href": "/es/drills/memory/short-term-memory/word-recall",
            "label": "Test de Memoria Verbal (Word Recall)"
      },
      {
            "href": "/es/drills/memory/working-memory/n-back",
            "label": "Test Dual N-Back"
      }
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
      <ObjectLocationClient
        copy={{
        "h1Keyword": "Test de memoria espacial online",
        "h1Suffix": "",
        "subtitle": "Recuerda dónde estaba cada objeto en la cuadrícula",
        "statScore": "Puntuación",
        "statTime": "Tiempo",
        "statLevel": "Nivel",
        "statBestScore": "Mejor Récord",
        "levelPrefix": "Nv.",
        "memorizePrompt": "MEMORIZA LAS POSICIONES",
        "targetPrompt": "OBJETIVO:",
        "startTitle": "Localización de Objetos Pro",
        "startSubtitle": "Memoria espacial • Posiciones",
        "countdownSubtitle": "PREPÁRATE",
        "newBest": "NUEVO RÉCORD",
        "pointsLabel": "Puntos",
        "statAccuracy": "Precisión",
        "statPeakLevel": "Nivel Máximo",
        "statPerfects": "Aciertos",
        "btnPlayAgain": "Jugar de nuevo",
        "rulesTitle": "Instrucciones & Sistema de Puntuación",
        "aboutTitle": "Sobre el Entrenamiento de Memoria Espacial",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Memoriza y localiza el objetivo",
                        "highlight": "+150 PTS",
                        "result": "Memoriza la matriz en 1,5 s y pulsa la casilla del objetivo indicado"
                },
                {
                        "num": "2",
                        "text": "Progresión de cuadrícula",
                        "highlight": "3x3 → 4x4 → 5x5",
                        "result": "Un objeto más por nivel (máx. 10), 4x4 en el nivel 8, 5x5 en el nivel 15"
                },
                {
                        "num": "3",
                        "text": "Fallo o tiempo agotado",
                        "highlight": "Sin penalización",
                        "result": "La ronda termina sin restar puntos; 8 s para responder, el reloj de 45 s sigue"
                },
                {
                        "num": "4",
                        "text": "Dificultad adaptativa estable",
                        "highlight": "Sin descenso",
                        "result": "El nivel no retrocede, lo que te permite consolidar tu mapa mental"
                }
        ]
}}
      />
      <DrillGuide guide={objectLocationGuide} />
      <RelatedDrills />
    </>
  );
}
