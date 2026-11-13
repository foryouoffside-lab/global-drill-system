import PathTracingClient from '@/app/drills/memory/spatial-memory/path-tracing/PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Corsi online | Bloques de Corsi | SkillDrills",
  description: "Test de Corsi online y gratis: memoriza las casillas que se iluminan una a una y tócalas en el mismo orden. Cada acierto alarga el recorrido, de 3x3 a 7x7.",
  keywords: ['test de Corsi', 'test de Corsi online', 'bloques de Corsi', 'test de bloques de Corsi', 'memoria secuencial', 'span visoespacial'],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing', 'es'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Corsi online | Bloques de Corsi | SkillDrills",
    description: "Test de Corsi gratis: toca las casillas iluminadas en el mismo orden y practica la memoria de los bloques de Corsi en el navegador, sin registro.",
    url: "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Corsi online | Bloques de Corsi | SkillDrills",
    description: "Test de Corsi gratis: toca las casillas iluminadas en el mismo orden y practica la memoria de los bloques de Corsi en el navegador, sin registro.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedPathTracingPage() {
  const appDescription = "Test de Corsi gratis en el navegador: casillas vecinas se iluminan una a una y forman un recorrido que repites en el mismo orden. Cada recorrido completado se alarga un paso.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamiento de memoria", "item": "https://skilldrills.online/es/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Memoria espacial", "item": "https://skilldrills.online/es/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Test de Corsi", "item": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Test de Corsi online",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": appDescription,
    "genre": "Spatial Memory",
    "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Test de Corsi online",
    "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing",
    "description": appDescription,
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Test de Corsi online",
    "description": appDescription,
    "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing",
    "genre": ["Memory Game", "Spatial Sequence Memory"],
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
        "name": "¿Cómo funciona el test de Corsi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las casillas de la cuadrícula se iluminan una a una cada 0,5 segundos y dibujan un recorrido. Después tienes 10 segundos para hacer clic o tocar las mismas casillas en el mismo orden. Cada recorrido completo suma +150 puntos y el siguiente tiene un paso más."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es el mismo test de bloques de Corsi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. El principio es el de la tarea de bloques de Corsi (Corsi, 1972): recordar posiciones en orden y reproducirlas. Aquí, sin embargo, la cuadrícula es cuadrada, cada paso va solo a una casilla vecina (arriba, abajo, izquierda, derecha) y ninguna casilla se visita dos veces. Es un juego de práctica."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo crecen el recorrido y la cuadrícula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El nivel 1 empieza con un recorrido de 3 pasos. Cada recorrido completado sube el nivel y la longitud en 1. La cuadrícula es de 3x3 hasta 5 pasos, 4x4 de 6 a 8, 5x5 de 9 a 12, 6x6 de 13 a 16 y 7x7 desde 17."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se cuenta el tiempo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El reloj de la sesión tiene 60 segundos y solo corre mientras repites el recorrido. La demostración y la pantalla de resultado no cuentan. Cada recorrido debe completarse en un máximo de 10 segundos desde que empieza tu respuesta."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si toco una casilla equivocada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La ronda termina al instante y aparece un recorrido nuevo de la misma longitud. No pierdes puntos ni tiempo y el nivel no baja. Pasarte de los 10 segundos se trata igual; en ambos casos el intento cuenta como fallo en la precisión."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo recordar recorridos más largos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Como el recorrido siempre pasa a una casilla vecina, guarda bloques de dirección en lugar de casillas sueltas, por ejemplo 'dos a la derecha, una arriba' (agrupamiento, Miller, 1956). Durante la demostración mira la cuadrícula entera y fíjate sobre todo en los giros."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué se diferencia del test de memoria visual (cuadrícula)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En el test de memoria visual se iluminan varias casillas a la vez y se pueden recordar como un solo patrón. En el test de Corsi se iluminan de una en una, así que hay que recordar el orden además de las posiciones."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se guardan mis resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La mejor puntuación y el nivel máximo se guardan solo en el localStorage de este navegador y no se envían a ningún servidor. Los resultados son marcas de práctica."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo jugar al test de Corsi",
    "description": "Cuatro pasos para repetir en el mismo orden un recorrido que se ilumina casilla a casilla.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing#step-1",
        "name": "Mirar toda la cuadrícula",
        "text": "Durante la demostración no sigas solo la primera casilla: observa toda la cuadrícula y fíjate dónde gira el recorrido."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing#step-2",
        "name": "Agrupar por direcciones",
        "text": "Cada paso va a una casilla vecina, así que guarda bloques de dirección como 'derecha 2, arriba 1'."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing#step-3",
        "name": "Tocar en el mismo orden",
        "text": "Tras la demostración, haz clic o toca las casillas en el mismo orden desde la inicial, en menos de 10 segundos."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/es/drills/memory/spatial-memory/path-tracing#step-4",
        "name": "Seguir tras un error",
        "text": "Fallar no cuesta puntos ni nivel, así que céntrate enseguida en el nuevo recorrido de la misma longitud."
      }
    ]
  };

  const pathTracingGuide = {
    intro: [
      "El test de Corsi online es un juego gratuito de memoria del orden: las casillas de una cuadrícula se iluminan una tras otra y después las tocas en el mismo orden. Lleva el principio de la tarea de bloques de Corsi (Milner, 1971; Corsi, 1972) a un recorrido sobre la cuadrícula para practicar la memoria secuencial y el span visoespacial.",
      "En el nivel 1 aparece un recorrido de 3 pasos en una cuadrícula de 3x3. Las casillas se iluminan cada 0,5 segundos; cada paso va a una casilla de arriba, abajo, izquierda o derecha, y ninguna casilla se visita dos veces. Cada recorrido completado suma +150 puntos, nivel +1 y un paso más; la cuadrícula crece a 4x4, 5x5 y 6x6 hasta 7x7.",
      "El reloj de la sesión tiene 60 segundos y solo corre durante la respuesta. Cada recorrido debe completarse en 10 segundos. Una casilla equivocada o agotar el tiempo termina la ronda sin descuento; llega un recorrido nuevo de la misma longitud y el nivel no baja. Respuesta con clic o toque.",
      "Transparencia de datos: los resultados se guardan solo en el localStorage de este navegador y no se envían a ningún servidor. Por eso SkillDrills no publica medias de usuarios ni clasificaciones."
    ],
    benchmarks: {
      title: "Niveles de práctica SkillDrills (puntos = recorridos completados × 150)",
      headers: ["Nivel de práctica", "Longitud alcanzada · cuadrícula", "Puntos", "Significado"],
      rows: [
        ["Inicial", "3–4 pasos · 3x3", "0–150", "0 a 1 recorrido completado. Aprendiendo las reglas y el ritmo"],
        ["Básico", "5–7 pasos · 3x3–4x4", "300–600", "2 a 4 recorridos completados. La cuadrícula pasa a 4x4"],
        ["Intermedio", "8–12 pasos · 4x4–5x5", "750–1.350", "5 a 9 recorridos completados. Agrupar por direcciones se vuelve necesario"],
        ["Avanzado", "13+ pasos · 6x6–7x7", "1.500+", "10 o más recorridos completados. Recorridos largos seguidos en 60 segundos de respuesta"]
      ],
      note: "Estos niveles se calculan a partir de las reglas de puntuación del juego; no son normas de población."
    },
    techniques: {
      title: "Consejos para recorridos largos",
      items: [
        {
          "name": "Formar bloques de dirección",
          "desc": "El recorrido siempre pasa a una casilla vecina. Guarda bloques como 'derecha 2, arriba 1, izquierda 1' en lugar de casillas sueltas (Miller, 1956).",
          "tips": "Ponles nombre a las formas: L, escalera, zigzag."
        },
        {
          "name": "Marcar los giros",
          "desc": "Los tramos rectos se recuerdan con facilidad. Fija sobre todo la casilla inicial y las casillas donde cambia la dirección.",
          "tips": "Antes de responder, repasa el inicio y el último giro."
        },
        {
          "name": "Ver toda la cuadrícula",
          "desc": "En vez de saltar de una casilla iluminada a otra, mira cerca del centro de la cuadrícula y sigue el trazado.",
          "tips": "Sirve sobre todo en cuadrículas de 6x6 y 7x7."
        },
        {
          "name": "Responder a ritmo constante",
          "desc": "Con 10 segundos para responder no hace falta correr, pero las pausas largas hacen olvidar el final del recorrido.",
          "tips": "Responde bloque a bloque."
        }
      ]
    },
    steps: [
      "Pulsa Iniciar y espera la cuenta atrás de 3 segundos.",
      "Observa el recorrido mientras las casillas se iluminan una a una.",
      "En menos de 10 segundos, haz clic o toca las mismas casillas en el mismo orden.",
      "Si aciertas, el recorrido gana un paso; si fallas, aparece un recorrido nuevo de la misma longitud.",
      "Tras 60 segundos de respuesta, revisa tu puntuación, nivel máximo y precisión."
    ],
    audience: "Quien quiera practicar la memoria secuencial y el span visoespacial jugando, gamers y deportistas que deben memorizar rutas o secuencias de movimientos, y cualquiera que busque un juego de memoria corto.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('corsi1972', 'milner1971', 'logie1995', 'miller1956'),
    related: [
      {
        "href": "/es/drills/memory/spatial-memory/grid-memorization",
        "label": "Test de Memoria Visual (Memory Matrix)"
      },
      {
        "href": "/es/drills/memory/spatial-memory/object-location",
        "label": "Test de Memoria Espacial (Object Location)"
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
        "label": "Test N-Back"
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
      <PathTracingClient
        copy={{
        "h1Keyword": "Test de Corsi online",
        "h1Suffix": " – Bloques de Corsi",
        "subtitle": "Memoriza las casillas que se iluminan una a una y tócalas en el mismo orden.",
        "statScore": "Puntuación",
        "statTime": "Tiempo",
        "statLevel": "Nivel",
        "statBestScore": "Mejor Récord",
        "levelPrefix": "Nv.",
        "startTitle": "Test de Corsi",
        "startSubtitle": "Bloques de Corsi • Memoria secuencial",
        "countdownSubtitle": "PREPÁRATE",
        "newBest": "NUEVO RÉCORD",
        "pointsLabel": "Puntos",
        "statAccuracy": "Precisión",
        "statPeakLevel": "Nivel Máximo",
        "statPerfects": "Perfectos",
        "btnPlayAgain": "Jugar de nuevo",
        "rulesTitle": "Reglas y puntuación",
        "aboutTitle": "Sobre el test de Corsi",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Repetir el recorrido en el mismo orden",
                        "highlight": "+150 PTS",
                        "result": "Acierto: nivel +1 y un paso más (10 s para responder)"
                },
                {
                        "num": "2",
                        "text": "La cuadrícula crece",
                        "highlight": "3x3 → 7x7",
                        "result": "La cuadrícula aumenta sola a medida que el recorrido se alarga"
                },
                {
                        "num": "3",
                        "text": "Casilla equivocada / tiempo agotado",
                        "highlight": "Sin descuento",
                        "result": "Sin pérdida de puntos ni tiempo; recorrido nuevo de la misma longitud"
                },
                {
                        "num": "4",
                        "text": "Nivel conservado",
                        "highlight": "Sin bajada",
                        "result": "El nivel nunca baja; los 60 segundos solo corren durante la respuesta"
                }
        ]
}}
      />
      <DrillGuide guide={pathTracingGuide} />
      <RelatedDrills />
    </>
  );
}
