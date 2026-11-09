import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Concentración FPS | Entrenamiento de Flow | SkillDrills",
  description: "Concentración FPS gratis: mantén la mira sobre un objetivo que sigue curvas. 1 s fuera rompe el combo, y cada nivel hace el objetivo más pequeño y rápido.",
  keywords: [
    "entrenamiento de concentración FPS",
    "estado de flow gaming",
    "entrar en la zona Valorant",
    "concentración para jugar FPS",
    "puntería en estado de flow",
    "tracking suave",
    "cómo mantener el foco en CS2",
    "rutina de enfoque gaming",
    "entrenamiento de resistencia mental FPS",
    "estado de flow FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/flow-state",
    languages: getAlternateLanguages('/drills/fps/flow-state'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Concentración FPS | Entrenamiento de Flow | SkillDrills",
    description: "Concentración FPS gratis: mantén la mira sobre un objetivo que sigue curvas. 1 s fuera rompe el combo, y cada nivel hace el objetivo más pequeño y rápido.",
    url: "https://skilldrills.online/es/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Concentración FPS | Entrenamiento de Flow | SkillDrills",
    description: "Concentración FPS gratis: mantén la mira sobre un objetivo que sigue curvas. 1 s fuera rompe el combo, y cada nivel hace el objetivo más pequeño y rápido.",
  },
};

export default function FlowStateEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Concentración FPS", "item": "https://skilldrills.online/es/drills/fps/flow-state" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Concentración FPS",
    "url": "https://skilldrills.online/es/drills/fps/flow-state",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requiere navegador compatible con HTML5 Canvas y JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Ejercicio gratis de concentración FPS: seguir sin interrupción un objetivo en curvas Bézier para practicar atención sostenida y tracking suave con el ratón."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "Concentración FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Ejercicio de tracking continuo en el navegador para practicar la concentración de jugadores de FPS.",
    "genre": "Entrenamiento FPS / Foco Mental",
    "url": "https://skilldrills.online/es/drills/fps/flow-state",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Concentración FPS",
    "url": "https://skilldrills.online/es/drills/fps/flow-state",
    "description": "Ejercicio de tracking con curvas Bézier para practicar un foco continuo en la mira.",
    "gamePlatform": "Web Browser",
    "genre": ["Entrenamiento FPS", "Entrenador de Puntería"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el estado de flow en los shooters FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El estado de flow (o entrar en la zona) es un estado psicológico óptimo donde la dificultad del reto y la destreza del jugador se coordinan a la perfección (Csikszentmihalyi, 1990), eliminando dudas y automatizando los movimientos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo entrar en la Zona en partidas de Valorant y CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Entra en la zona manteniendo una respiración serena, aislando cualquier distracción ambiental y siguiendo la dirección de los objetivos con suavidad en vez de pensar en la posición de tus dedos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la hipofrontalidad transitoria en la puntería?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es una hipótesis de Dietrich (2004): durante el flow, la actividad del córtex prefrontal dorsolateral bajaría temporalmente, reduciendo el control consciente de los movimientos. Sigue en debate y este drill no la mide."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué tiembla la puntería al estar bajo presión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La tensión activa el sistema simpático provocando co-contracción de músculos agonistas y antagonistas. Esta sobrecarga muscular interrumpe la suavidad del rastreo y produce movimientos toscos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué las curvas Bézier favorecen la concentración continua?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las trayectorias Bézier generan aceleraciones continuas sin cortes bruscos, exigiendo al sistema visual mantener un seguimiento foveal suave (Krauzlis, 2004) y suprimiendo saltos sacádicos innecesarios."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué sensibilidad de ratón es recomendable para el flow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Utiliza tu sensibilidad habitual en juego. El objetivo del flow es consolidar la memoria muscular que empleas en competición real."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se debe mirar al centro de la mira o anticipar el blanco?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fija la mirada ligeramente por delante del objetivo en la dirección del desplazamiento. Así es más fácil anticipar las curvas en lugar de corregir tarde."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué decae la puntería tras varias horas seguidas de juego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tras mucho tiempo concentrado cuesta más mantener la atención en un punto: el seguimiento pierde fluidez y aumentan las correcciones tardías. Las pérdidas de foco y la precisión de rastreo de este drill muestran ese cambio."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué pausas ayudan a no perder el foco entre rondas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mira hacia un punto lejano durante 30 a 60 segundos, hidrátate periódicamente y relaja los hombros para eliminar la tensión isométrica acumulada en el antebrazo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Ayuda este entrenamiento al rendimiento laboral o académico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No está demostrado. La transferencia de un ejercicio de tracking al estudio o al trabajo no se ha probado, aunque el drill puede servir como una pausa corta de concentración."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Entrenar el Foco e Inducir el Estado de Flow en Shooters",
    "description": "Instrucciones paso a paso para alcanzar concentración plena y seguimiento visual ininterrumpido.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Ajustar Sensibilidad Equivalente",
        "text": "Ajusta una vez la sensibilidad del ratón en la configuración de la página /drills; se aplica a todos los ejercicios con ratón.",
        "url": "https://skilldrills.online/es/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Activar Modo Pantalla Completa y Bloqueo de Puntero",
        "text": "Haz clic en iniciar para pasar a pantalla completa y capturar el ratón (Pointer Lock). Necesitas un ratón; las pantallas táctiles no son compatibles.",
        "url": "https://skilldrills.online/es/drills/fps/flow-state#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Anticipar la Curvatura de la Trayectoria",
        "text": "Orienta la mirada ligeramente por delante del objetivo anticipando la curva para lograr un seguimiento armónico.",
        "url": "https://skilldrills.online/es/drills/fps/flow-state#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Mantener Rachas en la Zona de Máxima Puntuación",
        "text": "Cada segundo completo sobre el objetivo suma 1 al combo y el multiplicador sube hasta 3,0x. Tras 1 segundo fuera del objetivo, el combo vuelve a cero.",
        "url": "https://skilldrills.online/es/drills/fps/flow-state#step-4"
      }
    ]
  };

  const copyEs = {
    h1Keyword: "Concentración FPS",
    h1Suffix: " – Entrenamiento de Flow",
    statScore: "Puntuación",
    statTime: "Tiempo Restante",
    statAccuracy: "Precisión de Rastreo",
    statBestScore: "Récord Personal",
    startTitle: "Entrenamiento de Foco FPS y Estado de Flow",
    startSubtitle: "Pointer Lock • Resistencia de foco • Dificultad progresiva",
    getReady: "Prepararse",
    pausedTitle: "Foco en Pausa",
    pausedSubtitle: "Haz clic para reanudar (se reactivará el bloqueo de puntero)",
    stageCaption: "Sigue la trayectoria de curvas Bézier sin perder la cadencia y mantén un ritmo de puntería continuo.",
    rulesTitle: "Reglas de Entrenamiento y Puntuación",
    rulesItems: [
      { num: "1", text: "Alineación Continua", highlight: "+10 PTS / 0,25 s", result: "Sobre el objetivo: +0,4 s/s de tiempo (máx. 60 s)" },
      { num: "2", text: "Multiplicador de Flow", highlight: "Hasta 3,0x puntos", result: "Cadena de concentración" },
      { num: "3", text: "Subida de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Velocidad Bézier adaptativa" },
      { num: "4", text: "Pérdida de Foco", highlight: "1,0s fuera de zona", result: "Combo a cero" }
    ],
    aboutTitle: "Acerca del Entrenador de Estado de Flow y Foco FPS"
  };

  const flowStateGuide = {
    heading: "Guía de Concentración FPS y Benchmarks del Estado de Flow",
    intro: [
      "El entrenamiento de concentración FPS consiste en seguir un objetivo con ritmo estable y reducir distracciones. El drill empieza con 45 segundos, suma tiempo mientras sigues sobre el objetivo y se vuelve más difícil con la puntuación y el combo. Mide la precisión del tracking y la resistencia de la atención; no promete crear flow a voluntad, sino mostrar cuándo se deterioran el foco y el control.",
      "La hipótesis de hipofrontalidad transitoria de Dietrich (2004) intenta explicar por qué el control consciente disminuye durante el flow. Este drill no garantiza ese estado, pero ayuda a repetir un seguimiento sin interrupciones y a ver en qué momento cae la concentración.",
      "El objetivo sigue curvas Bézier cuadráticas; con cada nivel su radio se reduce y las curvas se cierran más. Se controla con el ratón en Pointer Lock, sin descargas, directamente en el navegador.",
      "Medición técnica en tu dispositivo: cada evento se registra de forma local mediante el temporizador de alta resolución de tu navegador, sin transferir datos a servidores ajenos. Ten en cuenta que los navegadores limitan la resolución a ~1 ms para evitar ataques de temporización, y los monitores muestran cuadros a frecuencias concretas (16.7 ms a 60 Hz frente a 4.1 ms a 240 Hz). Por tanto, evalúa tu progreso comparando sesiones en el mismo equipo."
    ],
    benchmarks: {
      title: "Niveles de Inducción al Flow y Umbrales de Resistencia de la Atención",
      headers: ["Nivel", "Dimensión del Flow", "Indicador Fisiológico", "Mecanismo Cognitivo", "Objetivo de Rendimiento"],
      rows: [
        ["Nivel 1", "Orientación Atencional", "Filtrado sensorial y fijación foveal", "La red de alerta de Posner inhibe estímulos distractores", "Terminar una partida con al menos 50% de precisión de rastreo"],
        ["Nivel 2", "Equilibrio Reto-Habilidad", "Ajuste dinámico de velocidad", "Canal de Csikszentmihalyi: velocidad acoplada a la capacidad motora", "Mantener entre 70% y 80% de permanencia sobre el objetivo"],
        ["Nivel 3", "Seguimiento Ocular Suave", "Sincronización de velocidad foveal", "Las vías corticoestriadas de Krauzlis eliminan sacádicos de alcance", "Lograr >85% de permanencia continua en curvas Bézier compuestas"],
        ["Nivel 4", "Hipofrontalidad Transitoria", "Modulación a la baja del DLPFC", "Hipótesis de Dietrich: autorregulación motora sin vacilación consciente", "Encadenar >30 segundos ininterrumpidos en flow sin dudar"],
        ["Nivel 5", "Resistencia de Atención Máxima", "Inmunidad al agotamiento mental", "La red ejecutiva previene la degradación cronométrica ante fatiga", "Llegar a un combo de 50 (multiplicador máximo 3,0x)"]
      ],
      note: "Los objetivos son rangos de práctica de SkillDrills, no normas de investigación ni datos de usuarios. Los nombres de los niveles se inspiran en Csikszentmihalyi (1975, 1990), Dietrich (2004), Krauzlis (2004) y Posner & Petersen (1990)."
    },
    techniques: {
      title: "Protocolos Basados en Evidencia para Inducir el Flow en Shooters",
      items: [
        {
          name: "Guía Visual Tangencial Predictiva",
          desc: "En lugar de perseguir el centro del blanco con retraso, mira un poco por delante, en la dirección hacia la que va la curva.",
          tips: "Dirige la vista ligeramente por delante del objetivo anticipando la trayectoria."
        },
        {
          name: "Reducción del Diálogo Interno (Hipofrontalidad)",
          desc: "Alcanzar el flow requiere acallar el córtex prefrontal dorsolateral (Dietrich, 2004). Pensamientos como '¿estoy fallando?' o 'pierdo la mira' reactivan la supervisión consciente y bloquean la memoria muscular. Cambia la autoevaluación por una respiración rítmica y una ejecución libre de dudas.",
          tips: "Sincroniza la respiración diafragmática con las transiciones de dirección para calmar la activación autonómica."
        },
        {
          name: "Calibración Óptima del Desafío",
          desc: "El flow se rompe si la prueba es demasiado sencilla (provocando desatención) o exageradamente compleja (generando tensión y bloqueo). Como objetivo de práctica, SkillDrills recomienda una precisión de rastreo de alrededor del 70% al 80%.",
          tips: "Si pierdes el foco a menudo, trabaja primero la precisión antes que los niveles altos. Tras reiniciarse el combo, el objetivo vuelve a ser algo más grande y lento."
        },
        {
          name: "Liberación de Tensión en Antebrazo y Agarre",
          desc: "El tracking continuo genera contracción isométrica acumulada en mano y flexores del antebrazo. El exceso de fuerza crispa la motricidad fina y genera trayectorias espasmódicas. Relaja la presión sobre el ratón en cada viraje pronunciado.",
          tips: "Sostén el ratón con la presión justa; la rigidez muscular arruina el seguimiento fluido."
        }
      ]
    },
    scientificPrinciples: {
      title: "Fundamentos Psicológicos y Motores del Estado de Flow",
      items: [
        {
          name: "El Canal de Flow de Csikszentmihalyi",
          desc: "Cuando la tarea resulta elemental sobreviene el tedio; si supera con creces la habilidad surge la ansiedad. El flow habita en el canal intermedio donde el desafío expande la capacidad al límite."
        },
        {
          name: "Redes de Atención de Posner",
          desc: "La cognición visual moviliza subsistemas de alerta, orientación y control ejecutivo. Este drill practica sobre todo mantener la atención orientada a un objetivo en movimiento."
        },
        {
          name: "Eficiencia Subcortical del Movimiento",
          desc: "Un movimiento bien practicado necesita menos control consciente, lo que deja más atención libre para el juego."
        }
      ]
    },
    steps: [
      "Ajusta una vez la sensibilidad del ratón en la configuración de la página /drills; el valor se aplica a todos los ejercicios con ratón.",
      "Haz clic en 'Iniciar' para activar la pantalla completa con Pointer Lock.",
      "Fija la atención visual en el blanco móvil a medida que recorre curvas Bézier continuas y orgánicas por el lienzo.",
      "Mantén la retícula dentro del radio del objetivo: cada segundo completo sube el combo y 1 segundo fuera lo reinicia.",
      "Alarga el combo para subir el multiplicador y luego compara la precisión y las pérdidas de foco con partidas anteriores."
    ],
    audience: "Jugadores competitivos de FPS y shooters tácticos (Valorant, CS2, Apex Legends, Overwatch 2, Warzone), profesionales de eSports en fases de calentamiento y deportistas cognitivos que entrenan la atención sostenida y la resistencia al cansancio mental.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/es/drills/reaction-speed/fps-tracking-trainer", label: "Entrenador de Tracking FPS" },
      { href: "/es/drills/fps/anti-zigzag-movement-trainer", label: "Tracking en Zigzag" },
      { href: "/es/drills/fps/anti-strafe-jitter-duel", label: "Tracking contra Strafe ADAD" },
      { href: "/es/drills/fps/flick-shot-training", label: "Aim Test: Test de Puntería con Flicks" },
      { href: "/es/drills/reaction-speed/visual-tracking-speed-test", label: "Test de Velocidad de Seguimiento Visual" }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FlowStateClient copy={copyEs} />
      <RelatedDrills />
      <DrillGuide guide={flowStateGuide} />
      <DrillFooter />
    </>
  );
}
