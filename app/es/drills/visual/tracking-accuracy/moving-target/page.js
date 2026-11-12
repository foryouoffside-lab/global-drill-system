import KineticInterceptClient from '@/app/drills/visual/tracking-accuracy/moving-target/KineticInterceptClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Predicción de Trayectoria | Objetivo Móvil | SkillDrills",
  description: "Predicción de trayectoria de objetivo móvil : la esfera rebota en los bordes y salta a otro sitio. Acierto +2 s, fallo -1 s. Gratis, no es un test de vista.",
  keywords: [
    "predicción de trayectoria de objetivo móvil",
    "objetivo móvil",
    "interceptar objetivo móvil",
    "objetivo que rebota",
    "anticipar trayectoria",
    "juego de objetivo móvil"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Predicción de Trayectoria | Objetivo Móvil | SkillDrills",
    description: "Lee la trayectoria de una esfera que rebota y haz clic antes de que salte a otro sitio. Entrenamiento gratis en el navegador, no es una prueba médica.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Predicción de Trayectoria | Objetivo Móvil | SkillDrills",
    description: "Predicción de trayectoria de objetivo móvil: anticipa el rebote y haz clic a tiempo. Gratis en el navegador.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/moving-target'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Catálogo de Drills", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Entrenamiento Visual", "item": "https://skilldrills.online/es/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Precisión de Seguimiento", "item": "https://skilldrills.online/es/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Objetivo Móvil", "item": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Predicción de Trayectoria de Objetivo Móvil",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Ejercicio en el navegador: una esfera avanza en línea recta, rebota en los bordes y salta a otra posición tras un plazo corto. Hay que hacer clic sobre ella antes. No es una prueba de visión ni de movimientos oculares.",
  "featureList": [
    "Objetivo que rebota en los bordes y salta a una nueva posición cuando se agota su anillo",
    "Acierto: 150 pts × combo × bonus de nivel y +2 s (máximo 60 s restantes)",
    "A mayor nivel, objetivo más rápido y más pequeño, y menos tiempo hasta el salto",
    "Los récords se guardan solo en el almacenamiento local de tu navegador"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Predicción de Trayectoria de Objetivo Móvil | SkillDrills",
  "alternateName": "Moving Target Pro",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target",
  "dateModified": "2026-11-12",
  "description": "Juego gratis en el navegador: predice la trayectoria del objetivo móvil y haz clic antes de que salte.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador moderno compatible con HTML5 Canvas.",
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
  "teaches": "Seguir un objetivo móvil con la mirada, predecir su trayectoria, precisión del clic con el ratón"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Predicción de Trayectoria de Objetivo Móvil",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target",
  "description": "Haz clic en una esfera que rebota antes de que salte a otro sitio. Juego gratis de predicción de trayectoria de objetivo móvil.",
  "genre": [
    "Action",
    "Aim Trainer",
    "Visual Tracking"
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
  "name": "Cómo jugar a la Predicción de Trayectoria de Objetivo Móvil",
  "dateModified": "2026-11-12",
  "description": "Cuatro pasos para empezar y subir tu puntuación.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Seguir la esfera con la mirada y el cursor",
      "text": "Tras la cuenta atrás aparece una esfera naranja que avanza en línea recta y rebota en los bordes. Mantén el cursor cerca de ella.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Vigilar el anillo",
      "text": "El anillo y los segundos alrededor del objetivo indican cuándo saltará a otro sitio. Al principio es alrededor de 1 segundo; el plazo se acorta con el nivel y el combo.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Hacer clic en el objetivo",
      "text": "Un clic (o toque) sobre la esfera cuenta como acierto: 150 pts × combo × bonus de nivel y +2 s de tiempo (máximo 60 s).",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Evitar los clics fallidos",
      "text": "Un clic fuera cuesta 1 segundo y reinicia el combo. Con 0 segundos termina la ronda.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/moving-target#step-4"
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
      "name": "¿Cómo funciona la predicción de trayectoria de objetivo móvil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una esfera avanza en línea recta por la zona de juego y rebota en los bordes. Tras un plazo corto (alrededor de 1 segundo al principio) salta a otro sitio. Tienes que hacer clic sobre ella antes. La ronda empieza con 45 segundos, cada acierto suma +2 s (máximo 60 s) y termina en 0. No es un test de vista ni una prueba médica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calcula la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acierto vale 150 puntos multiplicados por el combo y por un bonus de nivel. El nivel sube de forma continua con la puntuación: el objetivo se vuelve más rápido y más pequeño y salta antes."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si fallo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un clic fuera del objetivo resta 1 segundo y pone el combo a 0. Si la opción \"Target Timeouts\" está activa en los ajustes (por defecto), un objetivo que salta sin ser alcanzado también cuenta como fallo y cuesta 1 segundo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué apuntar un poco por delante del objetivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre ver, decidir y hacer clic pasa un instante en el que la esfera sigue avanzando. Cuanto más rápida va, más conviene apuntar un poco por delante, en el sentido del movimiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué ayuda predecir la trayectoria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La esfera solo cambia de dirección al chocar con un borde, como una pelota que rebota. Si detectas el rebote a tiempo, puedes llevar el cursor adonde irá después."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre el seguimiento suave y las sacadas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En el seguimiento suave, los ojos se deslizan junto a un objeto en movimiento; una sacada es un salto rápido de la mirada a un punto nuevo. Ambos se controlan por separado (Rashbass, 1961). Aquí necesitas los dos: acompañar la esfera mientras avanza y volver a encontrarla cuando salta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este entrenamiento mejora mi vista?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una puntuación más alta muestra que has mejorado en esta tarea concreta. No está demostrado ningún efecto sobre la agudeza visual, el rendimiento deportivo u otras tareas, y el ejercicio no sustituye una revisión con un oftalmólogo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis y dónde se guardan mis resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis y no necesita cuenta. Los récords y combos se guardan solo en el almacenamiento local de tu navegador."
      }
    }
  ]
};

const guideData = {
  heading: "Predicción de trayectoria de objetivo móvil: cómo funciona",
  intro: [
    "Este es un ejercicio de predicción de trayectoria de objetivo móvil: una esfera avanza en línea recta, rebota en los bordes y salta a otro sitio tras un plazo corto. Tienes que hacer clic sobre ella antes, anticipando hacia dónde va.",
    "La ronda empieza con 45 segundos. Cada acierto vale 150 puntos × combo × bonus de nivel y suma +2 s (máximo 60 s); un clic fallido cuesta 1 segundo y el combo. A medida que sube la puntuación, la esfera es más rápida y más pequeña, y el plazo hasta el salto se acorta desde alrededor de 1 segundo.",
    "Los ojos pueden seguir con suavidad un objeto lento; cuando va demasiado rápido, la mirada se queda atrás y lo alcanza con pequeños saltos (Krauzlis, 2004). El ejercicio convierte esa situación en una tarea sencilla de clic. No mide la agudeza visual ni los movimientos de los ojos."
  ],
  benchmarks: {
    "title": "Niveles de práctica SkillDrills (solo para este ejercicio)",
    "headers": [
      "Nivel",
      "Plazo hasta el salto",
      "Puntos y combo",
      "Perfil de juego"
    ],
    "rows": [
      [
        "Nivel 1",
        "< 0,25 s",
        "16.000+ pts | Combo 25x+",
        "Objetivos muy rápidos y pequeños acertados en serie."
      ],
      [
        "Nivel 2",
        "0,25 – 0,45 s",
        "10.500 – 15.999 pts | Combo 16x+",
        "Pocos fallos incluso con objetivos rápidos."
      ],
      [
        "Nivel 3",
        "0,46 – 0,70 s",
        "6.000 – 10.499 pts | Combo 9x+",
        "Rectas seguras, algún fallo justo después del rebote."
      ],
      [
        "Nivel 4",
        "0,71 – 1,00 s",
        "2.500 – 5.999 pts | Combo 4x+",
        "El cursor suele ir detrás de la esfera."
      ],
      [
        "Nivel 5",
        "> 1,00 s",
        "< 2.500 pts | Combo < 4x",
        "Fase de adaptación al ejercicio."
      ]
    ],
    "note": "Niveles definidos por SkillDrills para practicar, no son normas científicas ni una evaluación de la vista. El monitor y el ratón influyen en el resultado."
  },
  techniques: {
    "title": "Consejos para interceptar el objetivo móvil",
    "items": [
      {
        "name": "Apuntar un poco por delante",
        "desc": "Mientras haces clic, la esfera sigue avanzando. Hacer clic en su posición actual suele fallar por detrás.",
        "tips": "Haz clic un poco por delante, en el sentido del movimiento."
      },
      {
        "name": "Anticipar el rebote",
        "desc": "La esfera rebota en los bordes como una pelota.",
        "tips": "No la sigas hasta el borde: lleva antes el cursor hacia la dirección del rebote."
      },
      {
        "name": "Mover el cursor con ella",
        "desc": "Esperar con el cursor quieto hace perder el momento en los niveles altos.",
        "tips": "Desliza la mirada y el cursor junto con la esfera."
      },
      {
        "name": "No hacer clic sin parar",
        "desc": "Cada clic fallido cuesta 1 segundo y el combo.",
        "tips": "Haz clic solo cuando el cursor esté claramente sobre la esfera."
      }
    ]
  },
  steps: [
    "Haz clic en \"Iniciar\" para empezar la ronda de 45 segundos.",
    "Sigue la esfera con la mirada y el cursor.",
    "Haz clic sobre ella antes de que se agote el anillo, apuntando un poco por delante del movimiento.",
    "Acierto: +150 pts × multiplicador y +2 s; fallo: -1 s y combo reiniciado.",
    "Al final, revisa puntuación, aciertos, precisión y combo máximo."
  ],
  audience: "Para quien quiera practicar la interceptación de objetivos móviles en el navegador, como jugadores de FPS, o busque un ejercicio visual corto.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rashbass1961', 'krauzlis2004'),
  related: [
    {
      "href": "/es/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Seguimiento de Múltiples Objetos"
    },
    {
      "href": "/es/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Persecución con el Cursor"
    },
    {
      "href": "/es/drills/visual/reaction-speed/light-reaction",
      "label": "Test de Reacción a la Luz"
    },
    {
      "href": "/es/drills/visual/reaction-speed/go/no-go",
      "label": "Test Go / No-Go de Control de Impulsos"
    },
    {
      "href": "/es/drills/visual/depth-perception/distance-judgment",
      "label": "Juicio de Distancia y Profundidad"
    },
    {
      "href": "/es/drills/visual/visual-recognition/entropic-grid",
      "label": "Búsqueda en Rejilla Entrópica"
    }
  ]
};

export default function KineticInterceptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <KineticInterceptClient copy={{  "title": "Predicción de Trayectoria: Objetivo Móvil" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
