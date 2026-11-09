import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Tracking en Zigzag: objetivos evasivos | SkillDrills";
const DESCRIPTION = "Tracking en zigzag gratis: mantén la mira sobre un objetivo que cambia de dirección de golpe y vacía su barra de vida antes de que escape. Niveles sin límite.";
const NAME = "Tracking en Zigzag";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tracking en zigzag",
    "tracking zigzag",
    "objetivos evasivos",
    "tracking reactivo",
    "práctica de tracking"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/es/drills/fps/anti-zigzag-movement-trainer",
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

export default function AntiZigzagEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/es/drills/fps/anti-zigzag-movement-trainer" }
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
    "description": "Práctica gratis de tracking en zigzag en el navegador: mantén la mira sobre un objetivo evasivo hasta vaciar su barra de vida.",
    "genre": "FPS Training / Reactive Tracking",
    "url": "https://skilldrills.online/es/drills/fps/anti-zigzag-movement-trainer",
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
    "url": "https://skilldrills.online/es/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Tracking reactivo en el navegador contra objetivos evasivos que cambian de dirección en zigzag."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/es/drills/fps/anti-zigzag-movement-trainer",
    "description": "Práctica gratis de tracking en zigzag en el navegador: mantén la mira sobre un objetivo evasivo hasta vaciar su barra de vida.",
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
        "name": "¿Cómo funciona el tracking en zigzag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un objetivo aparece en un punto aleatorio, corre hacia la izquierda o la derecha con una ligera oscilación arriba o abajo y cambia de dirección en intervalos irregulares. No haces clic: mientras la mira está sobre el objetivo, su barra de vida baja. La partida empieza con 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo destruyo un objetivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con la mira encima, el objetivo pierde 65 de vida por segundo: con unos 1,5 segundos en total basta. Entonces ganas un bonus de 25 puntos por el combo y aparece un objetivo nuevo. La vida ya quitada no se recupera aunque te salgas a mitad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se calculan los puntos y el combo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sobre el objetivo, cada 0,25 segundos sumas 10 puntos por el combo y un bonus de nivel, y el reloj gana 0,1 segundos (máximo 60 segundos). Cada segundo sostenido sin interrupción suma 1 al combo; el multiplicador llega a un máximo de 3,0× con combo 50."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué desaparece el objetivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada objetivo tiene un tiempo de vida: unos 4,2 segundos en el nivel 1, bajando hasta unos 1,8 segundos en niveles altos. Si no lo destruyes a tiempo, escapa, el combo vuelve a 0 y aparece otro. Más de 1 segundo fuera del objetivo también reinicia el combo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo sube la dificultad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El nivel sube 1 cada 1400 puntos, sin tope. Con cada nivel el objetivo se hace más pequeño y rápido, y el intervalo entre cambios de dirección se acorta a partir de unos 1,2 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo seguir mejor a los objetivos evasivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un flick grande en cada cambio de dirección casi siempre se pasa del objetivo. Mira su centro, frena un instante tras el cambio y adáptate a la nueva velocidad. El ejercicio reproduce cambios bruscos de dirección, no deslizamientos: útil por ejemplo en Apex Legends, Valorant o Call of Duty contra rivales que esquivan. Cuánto se traslada al juego depende de cada persona."
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
    "name": "Cómo practicar tracking en zigzag",
    "description": "Pasos para seguir y destruir un objetivo evasivo que cambia de dirección en zigzag.",
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
        "name": "Seguir encima",
        "text": "Mantén la mira sobre el objetivo para vaciar su barra de vida."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Destruir a tiempo",
        "text": "Destruye el objetivo antes de que escape para ganar el bonus y mantener el combo."
      }
    ]
  };

  const esGuide = {
    heading: "Tracking en Zigzag: guía contra objetivos evasivos",
    intro: [
      "En este ejercicio de tracking en zigzag de SkillDrills mantienes la mira sobre un objetivo que cambia de dirección de golpe para vaciar su barra de vida. No hay clics: el tiempo sobre el objetivo es el daño.",
      "El objetivo aparece al azar, se mueve de lado con una ligera oscilación vertical y rebota en los bordes. En el nivel 1 cambia de dirección más o menos cada 1,2 segundos, y cada vez más a menudo después. Cada objetivo tiene un tiempo de vida limitado y escapa si tardas.",
      "La partida empieza con 45 segundos; sobre el objetivo, el reloj gana 0,4 segundos por segundo (máximo 60 segundos). Los puntos y los niveles no tienen tope."
    ],
    techniques: {
      title: "Consejos de tracking en zigzag",
      items: [
        {
          name: "Sin flick excesivo",
          desc: "Un flick grande en el cambio de dirección manda la mira al otro lado y desperdicia tiempo de daño.",
          tips: "Tras el cambio, frena un instante y entra en la nueva velocidad."
        },
        {
          name: "Leer la estela",
          desc: "Un trazo corto detrás del objetivo muestra su último recorrido.",
          tips: "La dirección del trazo indica hacia dónde va el objetivo ahora."
        },
        {
          name: "Destruir primero",
          desc: "Si se agota el tiempo de vida, pierdes el combo: acumula tiempo encima y acaba con él rápido.",
          tips: "Por debajo de la mitad de vida la barra se pone roja. No lo sueltes ahora."
        },
        {
          name: "Agarre suave",
          desc: "Con la mano tensa, las pequeñas correcciones en todas direcciones salen a saltos.",
          tips: "Agarra lo justo para que dedos y muñeca se muevan libres."
        }
      ]
    },
    steps: [
      "Ajustar la sensibilidad de ratón común en la página de drills.",
      "Pulsar Iniciar para activar pantalla completa y Pointer Lock.",
      "Mantener la mira sobre el objetivo en zigzag para vaciar su barra de vida.",
      "Destruirlo antes de que acabe su tiempo de vida para ganar 25 puntos × combo.",
      "Al terminar, comparar precisión, mejor combo y nivel."
    ],
    audience: "Jugadores de Apex Legends, Valorant o Call of Duty que pierden a rivales que esquivan, y cualquiera que quiera practicar tracking en zigzag gratis en el navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/es/drills/fps/anti-strafe-jitter-duel", label: "Tracking contra Strafe ADAD" },
      { href: "/es/drills/reaction-speed/fps-tracking-trainer", label: "Entrenamiento de Tracking FPS" },
      { href: "/es/drills/fps/pro-smooth-pursuit", label: "Tracking Suave Smooth Pursuit" },
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
      <AntiZigzagClient
        copy={{
          h1Keyword: "Tracking en Zigzag",
          h1Suffix: " — acierta a objetivos evasivos",
          statScore: "Puntos",
          statTime: "Tiempo",
          statAccuracy: "Precisión",
          statBestScore: "Récord",
          startTitle: NAME,
          startSubtitle: "Tracking reactivo • Niveles sin fin",
          getReady: "PREPÁRATE",
          stageCaption: "Mantén la mira sobre el objetivo en zigzag y vacía su barra de vida. No hace falta hacer clic.",
          rulesTitle: "Reglas y puntuación",
          rulesItems: [
            { num: "1", text: "Estar sobre el objetivo", highlight: "10 pts / 0,25 s (+0,1 s)", result: "×Combo" },
            { num: "2", text: "Objetivo destruido", highlight: "25 pts × combo", result: "Objetivo nuevo" },
            { num: "3", text: "Progresión", highlight: "+1 nivel / 1400 pts", result: "Más pequeño y rápido" },
            { num: "4", text: "Objetivo escapa / 1 s fuera", highlight: "Penalización", result: "Combo a 0" }
          ],
          aboutTitle: "Sobre el tracking en zigzag"
        }}
      />
      <DrillGuide guide={esGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
