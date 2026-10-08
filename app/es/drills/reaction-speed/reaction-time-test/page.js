import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  "title": "Juego de sentido del tiempo: acierta el tiempo | SkillDrills",
  "description": "Juego de sentido del tiempo: ves un tiempo objetivo y haces clic cuando pasa. No es un test de reacción; para eso, Test de reacción (señal luminosa).",
  "keywords": [
    "juego de sentido del tiempo",
    "juego de estimación del tiempo",
    "juego de timing",
    "acertar el tiempo objetivo",
    "reloj interno juego",
    "entrenar sentido del tiempo",
    "juego parar el cronómetro",
    "practicar timing de clic"
  ],
  "alternates": {
    "canonical": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test",
    "languages": getAlternateLanguages('/drills/reaction-speed/reaction-time-test')
  },
  "openGraph": {
    "images": [
      {
        "url": "https://skilldrills.online/opengraph-image",
        "width": 1200,
        "height": 630
      }
    ],
    "title": "Juego de sentido del tiempo: acierta el tiempo | SkillDrills",
    "description": "Estima un tiempo objetivo de entre 1 y 8 segundos, haz clic en el momento justo y mira tu error en milisegundos.",
    "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test",
    "siteName": "SkillDrills",
    "locale": "es_ES",
    "type": "website"
  },
  "twitter": {
    "images": [
      "https://skilldrills.online/opengraph-image"
    ],
    "card": "summary_large_image",
    "title": "Juego de sentido del tiempo: acierta el tiempo | SkillDrills",
    "description": "Juego de estimación del tiempo: memoriza el tiempo objetivo, haz clic cuando pase y ve tu desviación en milisegundos."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Inicio",
      "item": "https://skilldrills.online/es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Entrenamientos",
      "item": "https://skilldrills.online/es/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Velocidad de Reacción",
      "item": "https://skilldrills.online/es/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Juego de Sentido del Tiempo",
      "item": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Time_perception"
  ],
  "name": "Juego de sentido del tiempo: acierta el tiempo",
  "alternateName": [
    "Juego de estimación del tiempo",
    "Juego de parar el cronómetro",
    "Entrenamiento del reloj interno"
  ],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Juego en el navegador para estimar el tiempo: se muestra un tiempo objetivo, haces clic cuando crees que ha pasado y ves tu desviación en milisegundos."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Juego de sentido del tiempo: acierta el tiempo | SkillDrills",
  "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test",
  "description": "Juego online gratuito de estimación del tiempo. Mide lo cerca que está tu clic de un tiempo objetivo; no mide la reacción ante una señal.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Estimación del tiempo, timing de intervalos, regularidad en el momento del clic"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Juego de sentido del tiempo: acierta el tiempo",
  "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test",
  "description": "Juego de timing: memoriza un tiempo objetivo de entre 1 y 8 segundos y haz clic en el momento justo.",
  "genre": [
    "Timing Game",
    "Casual"
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
    "priceCurrency": "EUR"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo jugar al juego de sentido del tiempo",
  "description": "Memoriza el tiempo objetivo, haz clic cuando haya pasado y lee tu error en milisegundos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Iniciar el drill",
      "text": "Haz clic o toca Iniciar Drill para entrar en la arena a pantalla completa.",
      "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Memorizar el tiempo objetivo",
      "text": "Lee el tiempo objetivo, de entre uno y ocho segundos. Desaparece al cabo de un instante.",
      "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Hacer clic cuando pase el tiempo",
      "text": "Haz clic o toca cuando creas que ha transcurrido el tiempo objetivo. Mientras corre el reloj no hay lectura numérica.",
      "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Revisar tu error",
      "text": "Juega varias rondas y compara tu error medio y tu regularidad.",
      "url": "https://skilldrills.online/es/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Es un test de reacción?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Es un juego de estimación del tiempo. Se muestra un tiempo objetivo, haces clic cuando crees que ha pasado y el drill muestra tu desviación en milisegundos. Para medir la rapidez con la que reaccionas a una señal, usa el Test de reacción (señal luminosa)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el juego?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un tiempo objetivo aparece un instante y desaparece. Un orbe luminoso sin lectura numérica sigue activo mientras el reloj cuenta en segundo plano, y haces clic cuando crees que ha pasado el tiempo objetivo. Después el drill muestra el momento exacto de tu clic y tu error."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto duran los tiempos objetivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los objetivos empiezan entre 1 y unos 2 segundos, y el límite superior sube con el nivel hasta un máximo de 8 segundos. El objetivo se muestra con tres decimales, por ejemplo 3,250 s."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu error es el momento del clic menos el tiempo objetivo. El clic cuenta como acierto si el error está dentro de 50 ms más el 5 % del objetivo; con 3 segundos son 200 ms. Cuanto más cerca, más puntos; un error inferior a 10 ms se valora como EXACT y los aciertos consecutivos suben un multiplicador de combo hasta 3,0x."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si hago clic demasiado pronto o demasiado tarde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ambos casos cuentan como error. Un clic fuera de la ventana permitida es un fallo: reinicia el combo y muestra una alerta roja, pero conservas la puntuación."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puedo contar mentalmente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, contar es tu propia estrategia. El orbe no tiene lectura numérica y sus anillos pulsan una vez por segundo, algo que puedes usar como pulso. Prueba métodos distintos y quédate con el que dé el menor error medio."
      }
    },
    {
      "@type": "Question",
      "name": "¿Afectan la tasa de refresco o el retardo de entrada al resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ligeramente. Los clics se marcan con el reloj performance.now() del navegador, pero tu pantalla muestra un fotograma nuevo cada 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,2 ms a 240 Hz, y los dispositivos de entrada añaden retardo de sondeo (Woods et al., 2015). Compara resultados en el mismo dispositivo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede mejorar mi timing con la práctica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La práctica suele mejorar el rendimiento en la tarea entrenada, así que tu error medio en este drill probablemente se reduzca. Hasta qué punto se traslada a otras tareas varía y no está garantizado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es lo mismo que el reto de los 10 segundos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La idea es parecida, juzgar un intervalo sin reloj visible, pero el objetivo cambia en cada ronda y no se fija en 10 segundos. Además puntúa el tamaño de tu error en lugar de un simple acierto o fallo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis y funciona en el móvil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis, sin registro ni descarga. Funciona en un navegador móvil, pero la entrada táctil añade su propia latencia, así que compara resultados solo con otros intentos en el mismo dispositivo."
      }
    }
  ]
};

const reactionGuide = {
  "heading": "Juego de sentido del tiempo: cómo funciona el drill de estimación",
  "intro": [
    "Es un juego de estimación del tiempo, no un test de reacción. Se muestra brevemente un tiempo objetivo de entre uno y ocho segundos, desaparece y haces clic cuando crees que ha pasado. El drill indica la diferencia entre tu clic y el objetivo en milisegundos. Para comprobar la rapidez con la que reaccionas a una señal visual, usa el Test de reacción (señal luminosa).",
    "Cada clic se marca con el reloj performance.now() del navegador, íntegramente en tu dispositivo. Tu pantalla cuantiza lo que ves a su intervalo de refresco: unos 16,7 ms por fotograma a 60 Hz, 6,9 ms a 144 Hz y 4,2 ms a 240 Hz (Woods et al., 2015). El sondeo del ratón añade unos 8 ms a 125 Hz frente a 1 ms a 1000 Hz.",
    "Considera ruido de medición las diferencias de menos de unos 5 ms y compara tus propias sesiones con el mismo equipo, no con el de otra persona. Es una herramienta de práctica, no una medición clínica."
  ],
  "benchmarks": {
    "title": "Cómo se valora el error de timing",
    "headers": [
      "Valoración",
      "Error permitido",
      "Ejemplo con objetivo de 3,000 s"
    ],
    "rows": [
      [
        "EXACT",
        "Hasta 10 ms",
        "Clic entre 2,990 s y 3,010 s"
      ],
      [
        "PERFECT",
        "Hasta el 20 % de la ventana de acierto",
        "Dentro de 40 ms"
      ],
      [
        "EXCELLENT",
        "Hasta el 40 % de la ventana de acierto",
        "Dentro de 80 ms"
      ],
      [
        "GOOD",
        "Hasta el 60 % de la ventana de acierto",
        "Dentro de 120 ms"
      ],
      [
        "OK",
        "Hasta el 80 % de la ventana de acierto",
        "Dentro de 160 ms"
      ],
      [
        "HIT",
        "Hasta la ventana de acierto completa",
        "Dentro de 200 ms"
      ]
    ],
    "note": "La ventana de acierto es de 50 ms más el 5 % del tiempo objetivo, así que los objetivos largos son más permisivos en términos absolutos. Son las reglas de puntuación de este drill, no normas poblacionales."
  },
  "techniques": {
    "title": "Formas de juzgar un intervalo corto",
    "items": [
      {
        "name": "Contar a un ritmo constante",
        "desc": "Contar subdivisiones en silencio te da un pulso interno repetible. Distintas velocidades de cuenta encajan con distintos objetivos.",
        "tips": "Elige una velocidad de cuenta y mantenla durante toda la sesión para que tus errores sean comparables."
      },
      {
        "name": "Usar el pulso de un segundo",
        "desc": "Los anillos alrededor del orbe pulsan una vez por segundo. Si cuentas cada pulso como un tic, sumas segundos enteros y solo estimas el resto.",
        "tips": "Con objetivos con decimales, como 3,250 s, el último clic cae entre dos pulsos."
      },
      {
        "name": "Revisar el error con signo",
        "desc": "Tras cada clic el drill muestra cuándo hiciste clic. Si siempre te adelantas o te retrasas, ajusta tu cuenta interna.",
        "tips": "Un pequeño sesgo constante es más fácil de corregir que una gran dispersión aleatoria."
      }
    ]
  },
  "steps": [
    "Pulsa Iniciar Drill para entrar en la arena a pantalla completa.",
    "Lee el tiempo objetivo antes de que desaparezca.",
    "Haz clic o toca cuando creas que ha transcurrido el tiempo objetivo.",
    "Juega varias rondas y compara tu error medio y tu regularidad."
  ],
  "audience": "Jugadores, músicos, deportistas y cualquiera que quiera practicar un timing de clic más constante y mejor noción de los intervalos cortos.",
  "faqs": faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('woods2015'),
  "related": [
    {
      "href": "/es/drills/visual/reaction-speed/light-reaction",
      "label": "Test de reacción (señal luminosa)"
    },
    {
      "href": "/es/drills/reaction-speed",
      "label": "Hub de Velocidad de Reacción"
    },
    {
      "href": "/es/drills/motor/movement-speed/rapid-tapping",
      "label": "Test de CPS y Velocidad de Clic"
    },
    {
      "href": "/es/drills/reaction-speed/fps-tracking-trainer",
      "label": "Entrenador de Tracking FPS"
    },
    {
      "href": "/es/drills/fps/flick-shot-training",
      "label": "Entrenamiento de Flick Shot"
    }
  ]
};

export default function SpanishReactionTimeTestPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <ReactionTimeTestWrapper
        copy={{
          title: "Juego de sentido del tiempo: acierta el tiempo",
          subtitle: "Estimación del tiempo: memoriza el tiempo objetivo, haz clic en el momento justo y mira tu error en milisegundos",
          caption: "Aparece un tiempo objetivo y desaparece. Haz clic cuando creas que ha pasado ese tiempo.",
        }}
      />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
