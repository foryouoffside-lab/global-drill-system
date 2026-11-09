import AntiStrafeJitterClient from '@/app/drills/fps/anti-strafe-jitter-duel/AntiStrafeJitterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Tracking contra Strafe ADAD: práctica gratis | SkillDrills";
const DESCRIPTION = "Tracking contra strafe ADAD gratis: mantén la mira sobre un objetivo que cambia de lado al azar. Puntos cada 0,25 s, combo por segundo sostenido.";
const NAME = "Tracking contra Strafe ADAD";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tracking contra strafe ADAD",
    "tracking contra strafe",
    "tracking reactivo",
    "tracking ADAD",
    "práctica de tracking",
    "anti strafe"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/anti-strafe-jitter-duel",
    languages: getAlternateLanguages('/drills/fps/anti-strafe-jitter-duel'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/es/drills/fps/anti-strafe-jitter-duel",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AntiStrafeJitterEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Drills de FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/es/drills/fps/anti-strafe-jitter-duel" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Práctica gratis de tracking contra strafe ADAD en el navegador: mantén la mira sobre un objetivo que cambia de lado al azar.",
    "genre": "FPS Training / Anti-Strafe",
    "url": "https://skilldrills.online/es/drills/fps/anti-strafe-jitter-duel",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": NAME,
    "url": "https://skilldrills.online/es/drills/fps/anti-strafe-jitter-duel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Tracking reactivo en el navegador contra un objetivo que hace strafe a izquierda y derecha, como un rival en ADAD."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/es/drills/fps/anti-strafe-jitter-duel",
    "description": "Práctica gratis de tracking contra strafe ADAD en el navegador: mantén la mira sobre un objetivo que cambia de lado al azar.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cómo funciona esta práctica de tracking contra strafe ADAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una esfera se mueve solo a izquierda y derecha, a media altura de la pantalla, y cambia de dirección y velocidad en intervalos aleatorios. No haces clic: mantienes la mira sobre el objetivo con el ratón. La partida empieza con 45 segundos y termina cuando el tiempo llega a cero."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se calculan los puntos y el combo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mientras la mira está sobre el objetivo, cada 0,25 segundos sumas 10 puntos por el multiplicador de combo y un bonus de nivel, y el reloj gana 0,1 segundos (máximo 60 segundos). Cada segundo sostenido sin interrupción suma 1 al combo; el multiplicador es 1,1× con combo 3 y llega a un máximo de 3,0× con combo 50."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pasa si pierdo el objetivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tras más de 1 segundo fuera del objetivo, el combo vuelve a 0."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo sube la dificultad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El nivel sube 1 cada 1400 puntos, sin tope. Con cada nivel el objetivo se hace más pequeño, el strafe más rápido y los cambios de dirección más seguidos. Un combo alto también endurece un poco el ejercicio."
        }
      },
      {
        "@type": "Question",
        "name": "¿El tracking reactivo sirve en partidas reales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El ejercicio simplifica la situación en la que un rival alterna A y D a corta distancia. Repites el gesto de recolocar la mira justo después de un cambio de dirección, útil por ejemplo en Valorant, CS2, Apex Legends u Overwatch 2. Cuánto se traslada a tu juego depende de cada persona."
        }
      },
      {
        "@type": "Question",
        "name": "Mi mira se queda atrás en los cambios de dirección, ¿qué hago?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Agarra el ratón sin tensión y mira el objetivo, no la mira. En lugar de hacer un flick largo en cada cambio, frena un instante y vuelve a seguir a la velocidad del objetivo: así suele bajar el tiempo fuera del objetivo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Funciona en el móvil o en pantalla táctil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. El ejercicio lee el movimiento del ratón con Pointer Lock, así que necesitas ratón. En dispositivos solo táctiles aparece un aviso en lugar del botón de inicio. La tecla Esc cierra el ejercicio en cualquier momento."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo practicar tracking contra strafe ADAD",
    "description": "Pasos para mantener la mira sobre un objetivo que cambia de lado entre izquierda y derecha.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Ajustar la sensibilidad",
        "text": "En la página de drills, ajusta la sensibilidad de ratón común para que se parezca a la que usas."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Empezar",
        "text": "Pulsa Iniciar: el ejercicio pasa a pantalla completa y activa el Pointer Lock tras la cuenta atrás."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Seguir el objetivo",
        "text": "Mantén la mira sobre el objetivo y recolócala justo después de cada cambio de dirección."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Analizar",
        "text": "Al terminar, compara la precisión de tracking, el tiempo fuera del objetivo, el mejor combo y el nivel alcanzado."
      }
    ]
  };

  const antiStrafeGuide = {
    heading: "Tracking contra Strafe ADAD: guía del ejercicio",
    intro: [
      "Esta práctica de tracking contra strafe ADAD de SkillDrills te pide mantener la mira sobre un objetivo que va a la izquierda o a la derecha al azar. No hay clics: solo cuenta el tiempo que pasas sobre el objetivo.",
      "El objetivo solo se mueve en horizontal y cambia de dirección y velocidad en intervalos irregulares; algunos cambios salen más rápidos que otros. Anticipar ayuda poco: lo decisivo es el tracking reactivo justo después del cambio.",
      "La partida empieza con 45 segundos. Mientras estás sobre el objetivo, el reloj gana 0,4 segundos por segundo (máximo 60 segundos). Los puntos y los niveles no tienen tope."
    ],
    techniques: {
      title: "Consejos de tracking contra strafe",
      items: [
        {
          name: "Agarre suave",
          desc: "Apretar el ratón bloquea la muñeca en los cambios de dirección y vuelve la mira temblorosa.",
          tips: "Agarra lo justo para que dedos y muñeca se muevan libres y suelta la mano entre partidas largas."
        },
        {
          name: "Mirar el objetivo",
          desc: "Fijar la vista en la esfera, y no en la mira, ayuda a notar antes el cambio de dirección.",
          tips: "Si el objetivo se pone rojo, te has salido: usa el cambio de color como señal."
        },
        {
          name: "Evitar el flick excesivo",
          desc: "Un flick grande en el cambio suele mandar la mira al otro lado del objetivo.",
          tips: "Haz el cambio como una frenada y una nueva aceleración, no como dos flicks."
        },
        {
          name: "La regla de 1 segundo",
          desc: "Cada segundo sostenido da +1 de combo; más de 1 segundo fuera lo borra.",
          tips: "Tras perder el objetivo, intenta volver en menos de un segundo."
        }
      ]
    },
    steps: [
      "Ajustar la sensibilidad de ratón común en la página de drills.",
      "Pulsar Iniciar para activar pantalla completa y Pointer Lock.",
      "Mantener la mira sobre el objetivo que va de izquierda a derecha.",
      "En cada cambio, frenar un instante en lugar de hacer un flick largo.",
      "Al terminar, comparar precisión (%), tiempo fuera del objetivo, mejor combo y nivel."
    ],
    audience: "Jugadores de Valorant, CS2, Apex Legends u Overwatch 2 que pierden duelos cercanos contra strafes ADAD, y cualquiera que quiera practicar tracking reactivo gratis en el navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/es/drills/fps/anti-zigzag-movement-trainer", label: "Tracking en Zigzag" },
      { href: "/es/drills/reaction-speed/fps-tracking-trainer", label: "Entrenador de Tracking FPS" },
      { href: "/es/drills/fps/pro-smooth-pursuit", label: "Entrenador de Persecución Suave" },
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
      { href: "/es/drills/visual/reaction-speed/light-reaction", label: "Test de Tiempo de Reacción" }
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
      <AntiStrafeJitterClient
        copy={{
          h1Keyword: "Tracking contra Strafe ADAD",
          h1Suffix: " — práctica reactiva en el navegador",
          statScore: "Puntos",
          statTime: "Tiempo",
          statAccuracy: "Precisión",
          statBestScore: "Récord",
          startTitle: NAME,
          startSubtitle: "Tracking reactivo • Niveles sin fin",
          getReady: "PREPÁRATE",
          pausedTitle: "PAUSA",
          pausedSubtitle: "Haz clic para continuar — el cursor se bloqueará de nuevo.",
          stageCaption: "Mantén la mira sobre el objetivo que cambia de lado al azar. No hace falta hacer clic.",
          rulesTitle: "Reglas y puntuación",
          rulesItems: [
            { num: "1", text: "Estar sobre el objetivo", highlight: "10 pts / 0,25 s (+0,1 s)", result: "×Combo" },
            { num: "2", text: "Sostener 1 s seguido", highlight: "Combo +1", result: "Hasta 3,0×" },
            { num: "3", text: "Progresión", highlight: "+1 nivel / 1400 pts", result: "Más pequeño y rápido" },
            { num: "4", text: "Más de 1 s fuera", highlight: "Penalización", result: "Combo a 0" }
          ],
          aboutTitle: "Sobre el tracking contra strafe ADAD"
        }}
      />
      <DrillGuide guide={antiStrafeGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
