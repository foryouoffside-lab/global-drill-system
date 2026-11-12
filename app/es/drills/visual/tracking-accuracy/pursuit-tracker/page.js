import AutoPursuitClient from '@/app/drills/visual/tracking-accuracy/pursuit-tracker/AutoPursuitClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Persecución con el Cursor | Sigue el Punto | SkillDrills",
  description: "Persecución con el cursor: mantén el ratón 45 s sobre un punto que cambia de velocidad y dirección, +5 pts por segundo. No es un test de la vista.",
  keywords: [
    "persecución con el cursor",
    "mantener el cursor sobre el objetivo",
    "seguir un punto en movimiento",
    "precisión con el ratón",
    "smooth pursuit",
    "juego de seguir el punto"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Persecución con el Cursor | Sigue el Punto | SkillDrills",
    description: "Mantén el cursor sobre un punto que cambia de velocidad y dirección. Solo se evalúa el cursor, no tus ojos. Gratis en el navegador.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Persecución con el Cursor | Sigue el Punto | SkillDrills",
    description: "Persecución con el cursor: sigue un punto en movimiento durante 45 segundos sin perderlo.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/pursuit-tracker'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamientos", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Percepción Visual", "item": "https://skilldrills.online/es/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Precisión de Seguimiento", "item": "https://skilldrills.online/es/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Persecución con el Cursor", "item": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Persecución con el Cursor",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Ejercicio de 45 segundos en el navegador: mantén el cursor (o el dedo) sobre un punto que cambia de velocidad y dirección. Solo se evalúa la posición del cursor; no hay medición de la mirada por cámara ni test de la vista o prueba médica.",
  "featureList": [
    "Ronda fija de 45 segundos; el punto cambia de velocidad y dirección al azar y rebota en los bordes",
    "Alrededor de 1 segundo de cursor sobre el punto (zona de contacto amplia): +5 puntos y racha +1",
    "Más de 2 segundos fuera solo reinicia la racha, sin perder puntos ni tiempo",
    "Cuanto mayor la puntuación, más pequeño y rápido el punto; datos solo en el almacenamiento local"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Persecución con el Cursor | SkillDrills",
  "alternateName": "Pursuit Tracker Pro",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker",
  "dateModified": "2026-11-12",
  "description": "Ejercicio gratis de persecución con el cursor: mantén un punto en movimiento bajo el ratón durante 45 segundos.",
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
  "teaches": "Seguir un objetivo en movimiento con la mirada y mantener el cursor encima"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Persecución con el Cursor",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker",
  "description": "Mantén el cursor sobre un punto que cambia de velocidad y dirección. Juego gratis de persecución con el cursor.",
  "genre": [
    "Action",
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
  "name": "Cómo funciona la persecución con el cursor",
  "dateModified": "2026-11-12",
  "description": "Los cuatro pasos de la ronda de 45 segundos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Poner el cursor sobre el punto",
      "text": "Tras la cuenta atrás aparece un punto naranja que se mueve. Con el cursor (o el dedo en pantalla táctil) encima, el punto se vuelve verde.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Mantener alrededor de 1 segundo",
      "text": "Cuando el anillo alrededor del punto se llena (alrededor de 1 segundo): +5 puntos y racha +1. Si te sales, el anillo vuelve a empezar.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Seguir los cambios de dirección",
      "text": "El punto cambia de velocidad y dirección sin aviso y rebota en los bordes. Se vuelve más rápido y pequeño con la puntuación y la racha.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Aguantar hasta el final",
      "text": "Más de 2 segundos fuera solo reinicia la racha; puntos y tiempo se mantienen. La ronda termina a los 45 segundos.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/pursuit-tracker#step-4"
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
      "name": "¿Cómo funciona la persecución con el cursor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mantienes el cursor sobre un punto en movimiento durante 45 segundos. Cada segundo (aprox.) de contacto continuo vale 5 puntos. Solo cuenta la posición del cursor: ninguna cámara ni eye tracker mide tus ojos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si pierdo el punto?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El anillo de un segundo vuelve a empezar, y tras más de 2 segundos fuera la racha vuelve a 0. No se resta ningún punto ni tiempo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se vuelve más difícil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuanto mayor la puntuación, más se encoge el punto (hasta la mitad de su tamaño) y más sube su velocidad máxima. Una racha larga también lo hace más rápido."
      }
    },
    {
      "@type": "Question",
      "name": "¿Influye la frecuencia de actualización del monitor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. El ejercicio cuenta fotogramas: a 60 Hz los puntos llegan más o menos cada segundo; en monitores más rápidos llegan antes y el punto se mueve más rápido. Las puntuaciones de distintos equipos no son comparables."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es el seguimiento ocular suave (smooth pursuit)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es el movimiento de los ojos que se desliza junto a un objeto para mantenerlo en el centro de la mirada. Si el objeto va demasiado rápido, el ojo se retrasa y lo alcanza con pequeñas sacadas (Krauzlis, 2004). El ejercicio reproduce esa situación con el cursor, sin medir los ojos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este entrenamiento mejora mi vista o mi puntería?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una puntuación mayor indica que has mejorado en esta tarea. No se garantiza ninguna mejora de la vista, en juegos o en deportes, y el ejercicio no sustituye una revisión con un oftalmólogo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis y dónde se guardan mis resultados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, gratis y sin cuenta. Los récords se guardan solo en el almacenamiento local de tu navegador."
      }
    }
  ]
};

const guideData = {
  heading: "Persecución con el cursor: mantén el objetivo bajo el ratón",
  intro: [
    "En la persecución con el cursor sigues con la mirada un punto en movimiento durante 45 segundos y mantienes el cursor encima. Solo cuenta el tiempo que el cursor pasa sobre el punto; tus ojos no se graban.",
    "Cada segundo, aproximadamente, de contacto continuo (zona amplia) vale +5 puntos y alarga la racha. El punto cambia de velocidad y dirección sin aviso, rebota en los bordes y se vuelve más pequeño y rápido a medida que sube la puntuación. Más de 2 segundos fuera solo reinicia la racha.",
    "Los ojos siguen con suavidad un objeto lento; si va demasiado rápido, la mirada se queda atrás y lo alcanza con pequeños saltos (Krauzlis, 2004). El ejercicio lo convierte en una tarea sencilla de cursor y no mide ni diagnostica la vista ni los movimientos oculares."
  ],
  benchmarks: {
    "title": "Niveles de práctica SkillDrills (solo para este ejercicio, 60 Hz)",
    "headers": [
      "Nivel",
      "Puntos en 45 s",
      "Descripción"
    ],
    "rows": [
      [
        "Alto",
        "180+",
        "El punto se mantiene casi todo el tiempo."
      ],
      [
        "Estable",
        "120 – 179",
        "Solo se escapa justo después de los cambios de dirección."
      ],
      [
        "En práctica",
        "60 – 119",
        "Interrupciones frecuentes en las fases rápidas."
      ],
      [
        "Inicio",
        "< 60",
        "Adaptación al ejercicio."
      ]
    ],
    "note": "Niveles definidos por SkillDrills, no son normas científicas ni una evaluación de la vista. La frecuencia del monitor y el ratón influyen en el resultado."
  },
  techniques: {
    "title": "Consejos para mantener el cursor sobre el objetivo",
    "items": [
      {
        "name": "Apuntar al centro",
        "desc": "En el borde del punto, cualquier cambio de dirección te saca.",
        "tips": "Mantén el cursor en el centro del punto y muévete con él."
      },
      {
        "name": "Muñeca relajada",
        "desc": "Una mano tensa hace que el cursor salte.",
        "tips": "Correcciones pequeñas con la muñeca, desplazamientos grandes con el brazo."
      },
      {
        "name": "Anticipar los bordes",
        "desc": "El punto rebota en cuanto toca un borde.",
        "tips": "Cuando se acerque a un borde, prepárate para ir en sentido contrario."
      },
      {
        "name": "Volver enseguida",
        "desc": "Volver en menos de 2 segundos mantiene la racha.",
        "tips": "Si te sales, no te detengas: vuelve de inmediato al punto."
      }
    ]
  },
  steps: [
    "Pulsa Iniciar y espera la cuenta atrás.",
    "Pon el cursor sobre el punto hasta que se vuelva verde.",
    "Mantente encima para sumar 5 puntos más o menos cada segundo.",
    "Sigue los cambios de dirección y los rebotes.",
    "Tras 45 segundos, revisa puntuación, racha y nota."
  ],
  audience: "Para quien quiera practicar mantener el cursor sobre un objetivo en movimiento y jugadores que quieran probar rápidamente su seguimiento con el ratón.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('krauzlis2004', 'rashbass1961'),
  related: [
    {
      "href": "/es/drills/visual/tracking-accuracy/moving-target",
      "label": "Predicción de Trayectoria de Objetivo Móvil"
    },
    {
      "href": "/es/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Seguimiento de Múltiples Objetos"
    },
    {
      "href": "/es/drills/visual/reaction-speed/go/no-go",
      "label": "Test Go/No-Go"
    },
    {
      "href": "/es/drills/fps/strafe-tracking",
      "label": "Strafe Tracking FPS"
    },
    {
      "href": "/es/drills/fps/pro-smooth-pursuit",
      "label": "Pro Smooth Pursuit FPS"
    }
  ]
};

export default function PursuitTrackerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <AutoPursuitClient copy={{  "title": "Persecución con el Cursor" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
