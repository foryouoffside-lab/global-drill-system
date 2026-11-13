import TargetSwitchingSwarmClient from '@/app/drills/fps/target-switching-swarm/TargetSwitchingSwarmClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Cambio de Objetivos: Target Switching en FPS | SkillDrills',
  description: 'Practica el cambio de objetivos gratis en el navegador: acierta de 2 a 5 objetivos en movimiento seguidos. +2 s por acierto (máx. 60 s) y -1 s por clic fallado.',
  keywords: [
    'cambio de objetivos',
    'cambio de objetivo FPS',
    'varios objetivos',
    'target switching',
    'spray transfer CS2',
    'cambio rápido de blancos',
    'transición de objetivos',
    'flick continuo',
    'puntería multiobjetivo',
    'velocidad de cambio de objetivo'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/fps/target-switching-swarm',
    languages: getAlternateLanguages('/drills/fps/target-switching-swarm'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Cambio de Objetivos: Target Switching en FPS | SkillDrills',
    description: 'Practica el cambio de objetivos gratis en el navegador: acierta de 2 a 5 objetivos en movimiento seguidos. +2 s por acierto (máx. 60 s) y -1 s por clic fallado.',
    url: 'https://skilldrills.online/es/drills/fps/target-switching-swarm',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Cambio de Objetivos: Target Switching en FPS | SkillDrills',
    description: 'Practica el cambio de objetivos gratis en el navegador: acierta de 2 a 5 objetivos en movimiento seguidos. +2 s por acierto (máx. 60 s) y -1 s por clic fallado.',
  },
};

export default function TargetSwitchingSwarmEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Target Switching Swarm", "item": "https://skilldrills.online/es/drills/fps/target-switching-swarm" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Saccade", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Cambio de Objetivos: Target Switching en FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any (Web Browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entrenamiento gratuito de cambio de objetivos en el navegador: 2 a 5 objetivos en movimiento que rebotan por la pantalla, para acertar uno tras otro."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cambio de Objetivos: Target Switching en FPS",
    "url": "https://skilldrills.online/es/drills/fps/target-switching-swarm",
    "browserRequirements": "Requires Pointer Lock API and WebGL support",
    "applicationCategory": "ShooterTraining",
    "creator": {
      "@type": "Organization",
      "name": "SkillDrills"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Cambio de Objetivos: Target Switching en FPS",
    "description": "Drill gratuito de cambio de objetivos: un enjambre de 2 a 5 objetivos en movimiento que reaparecen al acertarlos, para practicar el encadenamiento.",
    "genre": ["First-Person Shooter", "Aim Trainer", "Reaction Training"],
    "playMode": "SinglePlayer",
    "gamePlatform": ["PC", "Web Browser"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el target switching en el entrenamiento de puntería FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El target switching (cambio de objetivo) es la técnica de eliminar un blanco y lanzar la retícula al siguiente adversario de forma instantánea y continua, sin pausas de confirmación ni regresar a un centro neutro."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué se diferencia el target switching de un flick shot estándar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un flick shot estándar involucra un único movimiento balístico desde una posición de reposo. El target switching exige enlazar múltiples flicks continuos con frenado brusco en el centro de cada blanco, encadenando impactos en sucesión inmediata."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuáles son las reglas de este entrenamiento de cambio de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El cronómetro empieza en 45 segundos. Según el nivel, hay de 2 a 5 objetivos en movimiento que rebotan por la pantalla. Cada acierto vale +100 puntos multiplicados por el combo y el nivel y suma 2 segundos (máximo 60). Un clic en el vacío resta 1 segundo y reinicia el combo. Con la opción de tiempo límite de objetivos activada, un objetivo que no aciertas a tiempo (unos 2,8 segundos al principio, menos en niveles altos) desaparece y también resta 1 segundo. Cada 2.100 puntos subes de nivel y los objetivos se vuelven más pequeños y rápidos. Se juega con ratón y bloqueo del puntero; Esc termina el drill."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué los jugadores tienden a dudar o congelarse tras conseguir una baja?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Esa pausa ocurre cuando esperas el sonido o la animación de confirmación de la baja antes de buscar un nuevo enemigo. En este drill, el objetivo acertado desaparece al instante y aparece otro, así que repites el paso directo de la mirada y el ratón al siguiente objetivo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ayuda el cambio de objetivos con los spray transfers en CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solo en parte. Este drill cuenta clics sueltos y no simula retroceso ni ráfagas. Aun así, llevar la mira de un objetivo al siguiente y frenar con precisión es la base del spray transfer, por lo que sirve como práctica complementaria."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué títulos competitivos requieren mayor habilidad en cambio de blanco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Counter-Strike 2, Apex Legends, Overwatch 2 y Call of Duty Warzone, entre otros. En shooters tácticos ayuda en duelos contra varios rivales seguidos; en battle royales permite cambiar de foco al derribar escudos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué agarre de ratón favorece un target switching más rápido y preciso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El Claw grip y el Fingertip grip ofrecen la mayor ventaja porque combinan la amplitud del brazo para movimientos extensos con la articulación de los dedos para frenar y ajustar micrométricamente en el blanco."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se aplica la Ley de Fitts al cambio de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Ley de Fitts (Fitts, 1954) relaciona el tiempo de movimiento con la distancia y tamaño del objetivo. En target switching, aprender a elegir objetivos cercanos minimiza la distancia angular, lo que acorta el tiempo de cada cambio."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia se debe practicar target switching?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay una duración ideal demostrada. Unas cuantas sesiones concentradas como calentamiento antes de jugar son un buen punto de partida; compara tus resultados en el mismo equipo. No se garantiza una mejora en partida."
        }
      },
      {
        "@type": "Question",
        "name": "¿Es gratis y compatible este entrenador de cambio de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es gratis y sin descargas ni registros. Funciona en el navegador con ratón y bloqueo del puntero; no se puede jugar en dispositivos solo táctiles."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Entrenar Target Switching y Cambio Rápido de Blanco en FPS",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configurar la Sensibilidad y Bloquear el Cursor",
        "text": "Ajusta la sensibilidad en la página /drills para que coincida con la de tu juego y empieza; el puntero se bloquea automáticamente."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Detectar Agrupaciones de Blancos Cercanos",
        "text": "Realiza un barrido visual del enjambre para localizar pares o ternas de blancos con menor separación angular."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Disparar al Primer Blanco y Ganar Bonificación de Tiempo",
        "text": "Acierta el primer objetivo para obtener +100 puntos y sumar 2 segundos al cronómetro (máximo 60)."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Encadenar el Siguiente Blanco sin Pausa de Confirmación",
        "text": "Aprovecha la inercia para saltar al siguiente blanco contiguo de inmediato, sin esperar confirmaciones visuales."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Sostener Rachas de Combo para Desbloquear Niveles Rápidos",
        "text": "Mantén el ritmo sin fallos para disparar el multiplicador de puntos y avanzar a rondas con mayor velocidad."
      }
    ]
  };

  const targetSwitchingGuide = {
    heading: "Cambio de objetivos: encadenar varios objetivos en movimiento",
    intro: [
      "Este entrenamiento gratuito de cambio de objetivos mantiene siempre de 2 a 5 objetivos en movimiento rebotando por la pantalla. En cuanto aciertas uno aparece otro, así que repites el paso de la mira al siguiente objetivo sin pausa de confirmación. El cronómetro empieza en 45 segundos, cada acierto suma 2 segundos (máximo 60) y cada clic fallado resta 1; mientras aciertes con precisión, la sesión sigue.",
      "La psicofísica del cambio de objetivo está fundamentada en la Ley de Fitts (Fitts, 1954) y en el modelo estocástico de submovimientos optimizados de David E. Meyer et al. (1988). Según estos principios, un movimiento de puntería consta de una fase inicial rápida que recorre la mayor parte de la distancia, continuada por microajustes correctivos guiados visualmente. Muchos jugadores hacen una pausa breve tras cada baja para confirmarla. Este drill busca llevar la mirada al siguiente objetivo ya en el clic para acortar esa pausa.",
      "El procesamiento de enjambres poblados depende de la integración de características y de la búsqueda visual preatencional (Anne M. Treisman & Garry Gelade, 1980; Jeremy M. Wolfe, 2007). Podemos seguir unos pocos objetos en movimiento a la vez; planear un orden corto entre objetivos cercanos hace los cambios más fluidos.",
      "Sobre los resultados: la pantalla final muestra puntuación, precisión (aciertos ÷ clics totales), objetivos destruidos, combo máximo y nivel alcanzado. Tu récord se guarda solo en este navegador. Este drill no mide tiempos de transición en milisegundos. La tasa de refresco del monitor y el polling rate del ratón cambian la sensación, así que compárate en el mismo equipo."
    ],
    benchmarks: {
      title: "Rangos de práctica de precisión en cambio de objetivos",
      headers: ["Rango", "Precisión", "Qué indica"],
      rows: [
        ["Rango 1", "95% o más", "Casi ningún clic en el vacío, incluso en niveles altos"],
        ["Rango 2", "88% – 95%", "Fallos ocasionales con objetivos rápidos, pero el ritmo de cambio se mantiene"],
        ["Rango 3", "80% – 88%", "Te pasas del objetivo al cambiar a objetivos lejanos"],
        ["Rango 4", "70% – 80%", "Los clics precipitados te hacen perder tiempo a menudo"],
        ["Rango 5", "menos de 70%", "Baja la velocidad y asegura el frenado antes de acelerar"]
      ],
      note: "La precisión es el valor de la pantalla final (aciertos ÷ clics totales). Los rangos son referencias de práctica de SkillDrills, no normas científicas, rangos de juego ni estadísticas de usuarios."
    },
    techniques: {
      title: "Protocolos para Maximizar el Target Switching",
      items: [
        {
          name: "Planificación Sacádica e Indexación Visual",
          desc: "Dirige la vista al siguiente blanco mientras la mano todavía asienta el microajuste en el blanco presente (Treisman & Gelade, 1980; Wolfe, 2007). Normalmente la mirada llega al objetivo antes que la mano.",
          tips: "No te quedes mirando el objetivo que acabas de destruir; permite que la visión periférica verifique la baja mientras la fóvea visual enfoca el próximo blanco."
        },
        {
          name: "Frenado Terminal y Control Submovimental",
          desc: "Ejerce una tensión muscular controlada al final del flick para detener el ratón en seco sobre el centro de la diana sin rebotar (Meyer et al., 1988).",
          tips: "Imagina que tu ratón tiene frenos de alto rendimiento: acelera con potencia saliendo del objetivo anterior y afianza el freno al llegar al siguiente."
        },
        {
          name: "Enrutamiento Espacial por Proximidad Inmediata",
          desc: "Prioriza eliminar blancos que compartan la menor separación angular antes de cruzar la pantalla en trayectorias caóticas (Fitts, 1954).",
          tips: "Limpia parejas contiguas primero para maximizar multiplicadores antes de realizar giros extensos."
        },
        {
          name: "Relajación Muscular y Capacidad de Microcorrección",
          desc: "Mantén una presión de agarre moderada (3 sobre 10) que permita al pulgar y meñique realizar ajustes de precisión sin tensionar el antebrazo.",
          tips: "Si notas calambres o sacudidas bruscas, afloja conscientemente la fuerza de agarre sobre los laterales del ratón."
        }
      ]
    },
    steps: [
      "Ajusta la sensibilidad en la página /drills igual a la de tu juego y empieza (puntero bloqueado automáticamente).",
      "Localiza rápidamente las agrupaciones de blancos con menor separación angular en la pantalla.",
      "Acierta el primer objetivo para sumar +100 puntos × multiplicadores de combo y nivel y +2 s al cronómetro (máx. 60 s).",
      "Transfiere el movimiento de inmediato al siguiente blanco sin detenerte a verificar el impacto anterior.",
      "Evita los clics fallados (-1 s), encadena aciertos para subir el combo y llega a niveles con objetivos más pequeños y rápidos."
    ],
    audience: "Jugadores de CS2, Apex Legends y Overwatch 2 que quieren practicar por separado el cambio de objetivo entre varios rivales. Se necesita ratón.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/es/drills/fps/target-prioritization", label: "Priorización de Objetivos FPS" },
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
      { href: "/es/drills/fps/target-acquisition", label: "Adquisición de Objetivos FPS" },
      { href: "/es/drills/fps/180-degree-awareness", label: "Percepción 180° Pro" },
      { href: "/es/drills/fps/recoil-control", label: "Control de Retroceso" }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <TargetSwitchingSwarmClient
        copy={{
          h1Keyword: "Cambio de Objetivos",
          h1Suffix: ": Target Switching en FPS",
          subtitle: "Practica cambios rápidos y precisos entre varios objetivos en movimiento, gratis en el navegador.",
          statScore: "Puntos",
          statTime: "Tiempo",
          statAccuracy: "Precisión",
          statBestScore: "Récord",
          statTargetsDestroyed: "Blancos Eliminados",
          statMaxCombo: "Combo Máximo",
          statPeakLevel: "Nivel Máximo",
          startTitle: "Target Switching Swarm",
          startSubtitle: "Entrada Raw de Hardware • Progresión Continua",
          stageCaption: "Acierta los objetivos en movimiento uno tras otro antes de que desaparezcan. Cada clic fallado cuesta 1 segundo y el combo.",
          rulesTitle: "Reglas del Ejercicio y Sistema de Puntos",
          aboutTitle: "Sobre el Target Switching en Juegos FPS",
          rulesItems: [
            { num: "1", text: "Objetivo Acertado", highlight: "+100 PTS (+2s, máx. 60s)", result: "×Multiplicador Combo" },
            { num: "2", text: "Enjambre Continuo", highlight: "Reaparición Inmediata", result: "2 a 5 objetivos activos" },
            { num: "3", text: "Tiro Fallido / Tiempo Agotado", highlight: "Penalización", result: "Reinicio de Combo (-1s)" },
            { num: "4", text: "Progresión de Nivel", highlight: "+1 Nivel / 2.100 PTS", result: "Más Rápido y Pequeño" }
          ]
        }}
      />
      <DrillGuide guide={targetSwitchingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
