import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Concentración FPS | Entrenamiento de Flow | SkillDrills",
  description: "Entrenamiento gratis de concentración para FPS: mantén el ritmo de la puntería, ajusta el reto a tu nivel y mide tu tracking suave.",
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
    "aim trainer flow gratis"
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
    description: "Mantén el ritmo de la puntería y reduce distracciones en este entrenamiento FPS gratuito. Ajusta el reto y revisa tu tracking.",
    url: "https://skilldrills.online/es/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Concentración FPS | Entrenamiento de Flow | SkillDrills",
    description: "Mantén el ritmo de la puntería y reduce distracciones en este entrenamiento FPS gratuito. Ajusta el reto y revisa tu tracking.",
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
    "description": "Entrenador de atención sostenida y estado de flow para shooters. Elimina dudas y entrena un seguimiento suave y continuo con el ratón."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "Concentración FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Herramienta científica de entrenamiento psicomotor para inducir el estado de zona y resistencia atencional en deportes electrónicos.",
    "genre": "Entrenamiento FPS / Foco Mental",
    "url": "https://skilldrills.online/es/drills/fps/flow-state",
    "dateModified": "2026-09-20",
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
    "description": "Simulador dinámico con curvas Bézier orgánicas enfocado en eliminar vacilaciones motoras y sostener la máxima concentración.",
    "gamePlatform": "Web Browser",
    "genre": ["Entrenamiento FPS", "Entrenador de Puntería"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-09-20"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-09-20",
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
          "text": "Es la desactivación selectiva y temporal del córtex prefrontal dorsolateral en tareas de alta exigencia (Dietrich, 2004), permitiendo que los ganglios basales y el cerebelo ejecuten los reflejos sin interferencia analítica."
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
          "text": "Fija la mirada ligeramente por delante del objetivo en la dirección del desplazamiento. Esta técnica activa los circuitos de predicción motora y previene la fatiga ocular."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué decae la puntería tras varias horas seguidas de juego?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El esfuerzo atencional continuado agota los neurotransmisores de la red atencional frontoparietal (Posner & Petersen, 1990), transformando el seguimiento suave en micro-correcciones erráticas."
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
          "text": "Sí. La capacidad de sostener atención ininterrumpida e ignorar estímulos irrelevantes es una función cognitiva generalizable al trabajo profundo, la lectura compleja o la programación."
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
        "text": "Selecciona tu shooter principal e introduce tu sensibilidad para conservar total correspondencia biomecánica.",
        "url": "https://skilldrills.online/es/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Activar Modo Pantalla Completa y Bloqueo de Puntero",
        "text": "Haz clic en iniciar para capturar el ratón.",
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
        "text": "Permanece dentro del radio del blanco para cargar el medidor de flow y activar multiplicadores elevados.",
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
    startSubtitle: "Entrada RAW de ratón • Resistencia de foco • Dificultad adaptativa",
    getReady: "Prepararse",
    pausedTitle: "Foco en Pausa",
    pausedSubtitle: "Haz clic para reanudar (se reactivará el bloqueo de puntero)",
    stageCaption: "Sigue la trayectoria de curvas Bézier sin perder la cadencia y mantén un ritmo de puntería continuo.",
    rulesTitle: "Reglas de Entrenamiento y Puntuación",
    rulesItems: [
      { num: "1", text: "Alineación Continua", highlight: "+10 PTS (+0,4s/s)", result: "Foco continuo sobre el blanco" },
      { num: "2", text: "Multiplicador de Flow", highlight: "Hasta 3,0x puntos", result: "Cadena de concentración" },
      { num: "3", text: "Subida de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Velocidad Bézier adaptativa" },
      { num: "4", text: "Pérdida de Foco", highlight: "1,0s fuera de zona", result: "Reinicio de racha (-0,6s)" }
    ],
    aboutTitle: "Acerca del Entrenador de Estado de Flow y Foco FPS"
  };

  const flowStateGuide = {
    heading: "Guía de Concentración FPS y Benchmarks del Estado de Flow",
    intro: [
      "El entrenamiento de concentración FPS consiste en seguir un objetivo con ritmo estable, reducir distracciones y ajustar el reto al nivel real de puntería. Este drill mide la precisión del tracking y la resistencia de la atención; no promete crear flow a voluntad, sino mostrar cuándo se deterioran el foco y el control.",
      "La hipótesis de hipofrontalidad transitoria planteada por Dietrich (2004) explica la base biológica de este proceso: al modular a la baja la actividad analítica del córtex prefrontal dorsolateral (DLPFC), el control motor pasa directamente a los ganglios basales y al cerebelo. En shooters competitivos, este estado libera a los reflejos de la vacilación consciente y permite microajustes veloces e instintivos.",
      "A través de la API performance.now() del navegador con la resolución temporal del navegador, de ~1 ms (Woods et al., 2015) y trayectorias generadas mediante curvas Bézier suaves (Krauzlis, 2004; Posner & Petersen, 1990), este simulador entrena la resistencia mental sin necesidad de descargas ni instalaciones locales.",
      "Medición técnica en tu dispositivo: cada evento se registra de forma local mediante el temporizador de alta resolución de tu navegador, sin transferir datos a servidores ajenos. Ten en cuenta que los navegadores limitan la resolución a ~1 ms para evitar ataques de temporización, y los monitores muestran cuadros a frecuencias concretas (16.7 ms a 60 Hz frente a 4.1 ms a 240 Hz). Por tanto, evalúa tu progreso comparando sesiones en el mismo equipo."
    ],
    benchmarks: {
      title: "Niveles de Inducción al Flow y Umbrales de Resistencia de la Atención",
      headers: ["Nivel", "Dimensión del Flow", "Indicador Fisiológico", "Mecanismo Cognitivo", "Objetivo de Rendimiento"],
      rows: [
        ["Nivel 1", "Orientación Atencional", "Filtrado sensorial y fijación foveal", "La red de alerta de Posner inhibe estímulos distractores", "Alineación foveal con el objetivo en menos de 200 ms"],
        ["Nivel 2", "Equilibrio Reto-Habilidad", "Ajuste dinámico de velocidad", "Canal de Csikszentmihalyi: velocidad acoplada a la capacidad motora", "Mantener entre 70% y 80% de permanencia sobre el objetivo"],
        ["Nivel 3", "Seguimiento Ocular Suave", "Sincronización de velocidad foveal", "Las vías corticoestriadas de Krauzlis eliminan sacádicos de alcance", "Lograr >85% de permanencia continua en curvas Bézier compuestas"],
        ["Nivel 4", "Hipofrontalidad Transitoria", "Modulación a la baja del DLPFC", "Hipótesis de Dietrich: autorregulación motora sin vacilación consciente", "Encadenar >30 segundos ininterrumpidos en flow sin dudar"],
        ["Nivel 5", "Resistencia de Atención Máxima", "Inmunidad al agotamiento mental", "La red ejecutiva previene la degradación cronométrica ante fatiga", "Completar secuencias de más de 60 segundos al multiplicador máximo"]
      ],
      note: "Métricas sintetizadas a partir de la psicología del flow (Csikszentmihalyi, 1975, 1990), mecanismos neurocognitivos del flow (Dietrich, 2004), neurofisiología del seguimiento ocular suave (Krauzlis, 2004) y la teoría de redes de atención (Posner & Petersen, 1990)."
    },
    techniques: {
      title: "Protocolos Basados en Evidencia para Inducir el Flow en Shooters",
      items: [
        {
          name: "Guía Visual Tangencial Predictiva",
          desc: "En lugar de perseguir el centro del blanco con retraso, ubica tu atención de 2 a 3 grados por delante sobre el vector de velocidad instantánea. Esta proyección visual anticipatoria activa el seguimiento suave predictivo (Krauzlis, 2004), suprimiendo los sacádicos de corrección y atenuando la fatiga ocular.",
          tips: "Dirige la vista ligeramente por delante del objetivo anticipando la trayectoria."
        },
        {
          name: "Reducción del Diálogo Interno (Hipofrontalidad)",
          desc: "Alcanzar el flow requiere acallar el córtex prefrontal dorsolateral (Dietrich, 2004). Pensamientos como '¿estoy fallando?' o 'pierdo la mira' reactivan la supervisión consciente y bloquean la memoria muscular. Cambia la autoevaluación por una respiración rítmica y una ejecución libre de dudas.",
          tips: "Sincroniza la respiración diafragmática con las transiciones de dirección para calmar la activación autonómica."
        },
        {
          name: "Calibración Óptima del Desafío",
          desc: "El flow se rompe si la prueba es demasiado sencilla (provocando desatención) o exageradamente compleja (generando tensión y bloqueo). Regula tu ritmo para que tu precisión ronde entre el 70% y el 80%, habitando el punto dulce definido por Csikszentmihalyi (1990).",
          tips: "Si sufres pérdidas reiteradas de foco antes de 5 segundos, reduce la velocidad hasta enlazar cadenas de 20 segundos."
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
          desc: "La cognición visual moviliza subsistemas de alerta, orientación y control ejecutivo. Entrenar el foco sostenido optimiza estas redes y suprime las interferencias periféricas."
        },
        {
          name: "Eficiencia Subcortical del Movimiento",
          desc: "Al sustituir la supervisión deliberada por la ejecución motora automática, el sistema nervioso ahorra energía y responde a la velocidad máxima permitida por la fisiología."
        }
      ]
    },
    steps: [
      "Selecciona tu sensibilidad dentro del juego usando el selector universal para practicar con una sensibilidad familiar.",
      "Haz clic en 'Iniciar' para activar la pantalla completa con Pointer Lock.",
      "Fija la atención visual en el blanco móvil a medida que recorre curvas Bézier continuas y orgánicas por el lienzo.",
      "Mantén la retícula continuamente dentro del radio del objetivo para recargar la barra de Flow y entrar en la Zona.",
      "Sostén rachas ininterrumpidas de concentración para multiplicar tu puntuación y forjar una resistencia atencional a prueba de fatiga."
    ],
    audience: "Jugadores competitivos de FPS y shooters tácticos (Valorant, CS2, Apex Legends, Overwatch 2, Warzone), profesionales de eSports en fases de calentamiento y deportistas cognitivos que entrenan la atención sostenida y la resistencia al cansancio mental.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/es/drills/reaction-speed/fps-tracking-trainer", label: "Entrenador de Tracking FPS" },
      { href: "/es/drills/fps/anti-zigzag-movement-trainer", label: "Entrenador Anti-Zigzag" },
      { href: "/es/drills/fps/anti-strafe-jitter-duel", label: "Duelo de Jitter Anti-Strafe" },
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
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
