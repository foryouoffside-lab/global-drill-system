import GhostLinkClient from '@/app/drills/visual/tracking-accuracy/multiple-targets/GhostLinkClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Seguimiento de Múltiples Objetos | MOT | SkillDrills",
  description: "Test gratis de seguimiento de múltiples objetos (MOT): memoriza 3 bolas marcadas y síguelas 60 s entre bolas iguales.",
  keywords: [
    "seguimiento de múltiples objetos",
    "test MOT",
    "MOT",
    "multiple object tracking",
    "seguir varios objetos",
    "atención dividida"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Seguimiento de Múltiples Objetos | MOT | SkillDrills",
    description: "Memoriza 3 bolas marcadas y vuelve a encontrarlas tras 60 segundos de movimiento. Test MOT gratis en el navegador, sin diagnóstico.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Seguimiento de Múltiples Objetos | MOT | SkillDrills",
    description: "Seguimiento de múltiples objetos: no pierdas 3 objetivos durante 60 s entre bolas iguales.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/multiple-targets'),
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
    { "@type": "ListItem", "position": 5, "name": "Seguimiento de Múltiples Objetos", "item": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test de Seguimiento de Múltiples Objetos (MOT)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Ejercicio en el navegador: entre bolas iguales, 3 objetivos se iluminan en verde durante 2 segundos. Después todas las bolas se mueven 60 segundos rebotando entre sí y tú señalas los 3 objetivos. No es una prueba diagnóstica de la vista ni de la atención.",
  "featureList": [
    "Empieza con 8 bolas, 3 de ellas marcadas en verde durante 2 segundos",
    "60 segundos de movimiento: todas las bolas son iguales y rebotan en los bordes y entre sí",
    "Después, elige 3 bolas y confirma: 20 puntos por objetivo correcto (máx. 60), sin penalización por error",
    "Cuanto mayor tu récord, más bolas y algo más de velocidad; datos solo en el almacenamiento local"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Seguimiento de Múltiples Objetos (MOT) | SkillDrills",
  "alternateName": "GhostLink MOT",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets",
  "dateModified": "2026-11-12",
  "description": "Test MOT gratis online: sigue 3 objetivos durante 60 segundos entre bolas iguales.",
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
  "teaches": "Seguir varios objetos en movimiento con la atención, atención dividida"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test de Seguimiento de Múltiples Objetos (MOT)",
  "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets",
  "description": "Memoriza 3 bolas marcadas, síguelas entre bolas iguales y encuéntralas al final. Juego MOT gratis.",
  "genre": [
    "Puzzle",
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
  "name": "Cómo funciona el test MOT",
  "dateModified": "2026-11-12",
  "description": "Los cuatro pasos de una ronda.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Memorizar 3 objetivos",
      "text": "Tras la cuenta atrás aparecen las bolas y 3 de ellas se iluminan en verde durante 2 segundos. Memoriza sus posiciones.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Seguir durante 60 segundos",
      "text": "Después todas las bolas se vuelven iguales y se mueven durante 60 segundos. Rebotan en los bordes y entre sí.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Elegir 3 bolas",
      "text": "Al final las bolas se detienen. Haz clic (o toca) en las 3 que creas que son los objetivos. Un segundo clic deshace la selección.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Confirmar",
      "text": "Con 3 bolas elegidas, pulsa Confirmar: 20 puntos por objetivo correcto; una elección errónea vale 0, sin penalización.",
      "url": "https://skilldrills.online/es/drills/visual/tracking-accuracy/multiple-targets#step-4"
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
      "name": "¿Cómo funciona el test de seguimiento de múltiples objetos (MOT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entre bolas iguales, 3 objetivos se iluminan en verde durante 2 segundos. Después todas las bolas se mueven durante 60 segundos; cuando se detienen, eliges los 3 objetivos y confirmas. Cada objetivo correcto vale 20 puntos, 60 como máximo por ronda."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas bolas hay y se vuelve más difícil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Empiezas con 8 bolas. Por cada 30 puntos de récord se añade una bola, y la velocidad aumenta un poco con el récord. Siempre hay exactamente 3 objetivos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si elijo una bola equivocada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La bola equivocada vale 0 puntos, sin penalización. Un nuevo clic deshace la selección, así que puedes cambiar de idea hasta confirmar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos objetos puede seguir una persona a la vez?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Desde el primer experimento MOT de Pylyshyn & Storm (1988) se ha descrito que el límite para objetos iguales ronda los cuatro y baja cuando aumenta la velocidad (Cavanagh & Alvarez, 2005). Este test usa siempre 3 objetivos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Debo mirar las bolas de una en una?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mientras la mirada salta a una bola, otro objetivo puede cruzarse con una bola distractora y pierdes la referencia. A mucha gente le resulta más fácil mirar más o menos al centro de los objetivos y mantener los tres a la vista a la vez."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo no perder un objetivo en las colisiones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las bolas rebotan entre sí. Fíjate en la dirección justo antes del choque y en hacia dónde irá después: así confundirás menos objetivo y distractor."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este entrenamiento mejora mi rendimiento en juegos o deportes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una puntuación mayor indica que dominas mejor esta tarea concreta. No está garantizado que se traslade a juegos, deportes o la conducción."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratis y dónde se guardan mis datos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis y no necesita cuenta. Los récords se guardan solo en el almacenamiento local de tu navegador."
      }
    }
  ]
};

const guideData = {
  heading: "Seguimiento de múltiples objetos: cómo funciona y consejos",
  intro: [
    "En este test de seguimiento de múltiples objetos (MOT) sigues 3 objetivos marcados entre bolas iguales y los señalas al final. La tarea proviene del experimento de Pylyshyn & Storm (1988), adaptado como un juego sencillo en el navegador.",
    "Tras la cuenta atrás, 3 bolas se iluminan en verde durante 2 segundos; después todas las bolas, ya iguales, se mueven durante 60 segundos rebotando en los bordes y entre sí. Cuando se detienen, eliges 3 bolas y confirmas: 20 puntos por objetivo correcto (máx. 60), sin penalización por error. Cuanto mayor es tu récord, más bolas y más velocidad.",
    "Seguir varios objetos a la vez no depende de mirar rápidamente de uno a otro, sino de mantener la atención repartida entre varias posiciones (Cavanagh & Alvarez, 2005). El test es un juego de práctica."
  ],
  benchmarks: {
    "title": "Niveles de práctica SkillDrills (solo para este juego)",
    "headers": [
      "Nivel",
      "Objetivos correctos",
      "Puntos",
      "Descripción"
    ],
    "rows": [
      [
        "Perfecto",
        "3 / 3",
        "60",
        "Los 3 objetivos mantenidos durante 60 segundos."
      ],
      [
        "Bueno",
        "2 / 3",
        "40",
        "Un objetivo perdido en una colisión."
      ],
      [
        "En práctica",
        "1 / 3",
        "20",
        "Varias confusiones por el camino."
      ],
      [
        "Inicio",
        "0 / 3",
        "0",
        "Adaptación al juego."
      ]
    ],
    "note": "Niveles definidos por SkillDrills para este juego, no son normas científicas ni una evaluación de capacidades cognitivas."
  },
  techniques: {
    "title": "Consejos para no perder varios objetivos",
    "items": [
      {
        "name": "Mirar al centro",
        "desc": "Seguir con los ojos un solo objetivo hace perder fácilmente los demás.",
        "tips": "Mira más o menos al centro de los 3 objetivos y mantén los tres a la vista."
      },
      {
        "name": "Anticipar los rebotes",
        "desc": "Las bolas rebotan en los bordes y entre sí.",
        "tips": "Fíjate menos en el punto del choque y más en la dirección siguiente."
      },
      {
        "name": "Volver a contar tras un cruce",
        "desc": "El momento más confuso es cuando objetivo y distractor se separan.",
        "tips": "Comprueba rápido que sigues teniendo los 3 objetivos."
      },
      {
        "name": "Elegir con calma",
        "desc": "Cuando las bolas se detienen, no hay límite de tiempo.",
        "tips": "Si dudas, deshaz la selección con un clic y vuelve a elegir."
      }
    ]
  },
  steps: [
    "Pulsa Iniciar y, tras la cuenta atrás, memoriza las 3 bolas verdes.",
    "Sigue los 3 objetivos con la mirada durante 60 segundos.",
    "Cuando las bolas se detengan, haz clic en las 3 que creas que son los objetivos.",
    "Confirma y revisa objetivos acertados y puntos (20 por objetivo correcto).",
    "Consulta precisión y nota en la pantalla de resultados y vuelve a jugar."
  ],
  audience: "Para quien quiera probar a seguir varios objetos en movimiento a la vez, como jugadores de FPS y MOBA, o busque un juego corto de concentración.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('pylyshyn1988', 'cavanagh2005'),
  related: [
    {
      "href": "/es/drills/visual/tracking-accuracy/moving-target",
      "label": "Predicción de Trayectoria de Objetivo Móvil"
    },
    {
      "href": "/es/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Persecución con el Cursor"
    },
    {
      "href": "/es/drills/visual-tracking/split-screen-tracking",
      "label": "Seguimiento en Pantalla Dividida"
    },
    {
      "href": "/es/drills/visual/reaction-speed/go/no-go",
      "label": "Test Go/No-Go"
    },
    {
      "href": "/es/drills/visual-tracking/peripheral-ping-pursuit",
      "label": "Persecución Periférica"
    }
  ]
};

export default function MultipleTargetsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GhostLinkClient copy={{  "title": "Seguimiento de Múltiples Objetos" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
