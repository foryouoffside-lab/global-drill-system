import TargetPrioritizationClient from '@/app/drills/fps/target-prioritization/TargetPrioritizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Prioridad de Objetivos: Selección en FPS | SkillDrills",
  description: "Prioridad de objetivos gratis: acierta los rojos antes que los amarillos y nunca dispares a los aliados verdes. Selección de objetivos y control del disparo.",
  keywords: [
    "prioridad de objetivos",
    "selección de objetivos",
    "selección de objetivos Valorant",
    "priorización de objetivos FPS",
    "evaluación de amenazas",
    "decisión táctica FPS",
    "disciplina de gatillo"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/target-prioritization",
    languages: getAlternateLanguages('/drills/fps/target-prioritization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Prioridad de Objetivos: Selección en FPS | SkillDrills",
    description: "Prioridad de objetivos gratis: acierta los rojos antes que los amarillos y nunca dispares a los aliados verdes. Selección de objetivos y control del disparo.",
    url: "https://skilldrills.online/es/drills/fps/target-prioritization",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Prioridad de Objetivos: Selección en FPS | SkillDrills",
    description: "Prioridad de objetivos gratis: acierta los rojos antes que los amarillos y nunca dispares a los aliados verdes. Selección de objetivos y control del disparo.",
  },
};

export default function TargetPrioritizationEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Ejercicios FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Prioridad de objetivos - selección en FPS", "item": "https://skilldrills.online/es/drills/fps/target-prioritization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Prioridad de objetivos - selección en FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Drill gratis de prioridad de objetivos con blancos rojos, amarillos y verdes: evaluación de amenazas y control del disparo (Go/No-Go) para shooters.",
    "genre": "Entrenamiento FPS / Puntería Cognitiva y Toma de Decisiones",
    "url": "https://skilldrills.online/es/drills/fps/target-prioritization",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Prioridad de objetivos - selección en FPS",
    "url": "https://skilldrills.online/es/drills/fps/target-prioritization",
    "description": "Drill gratis de prioridad de objetivos con blancos rojos, amarillos y verdes: evaluación de amenazas y control del disparo (Go/No-Go) para shooters.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requiere soporte de HTML5 Canvas y Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Prioridad de objetivos - selección en FPS",
    "url": "https://skilldrills.online/es/drills/fps/target-prioritization",
    "description": "Drill gratis de prioridad de objetivos con blancos rojos, amarillos y verdes: evaluación de amenazas y control del disparo (Go/No-Go) para shooters.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Entrenamiento FPS", "Aim Trainer", "Priorización de Objetivos"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es la priorización de objetivos en shooters FPS competitivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La priorización de objetivos es la función cognitiva ejecutiva que evalúa velozmente múltiples amenazas en pantalla, determina cuál posee el mayor peligro inmediato y la neutraliza primero, conteniendo el disparo ante blancos secundarios y aliados."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona este drill de prioridad de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Al empezar se activan la pantalla completa y el Pointer Lock, y el reloj arranca en 45 segundos. De 2 a 4 objetivos se mueven a la vez y rebotan en los bordes. El rojo (amenaza alta) vale 100 puntos y el amarillo (amenaza media) 50, multiplicados por el combo y el nivel, y cada acierto suma 2 segundos (máximo 60). El amarillo se vuelve rojo pasado un tiempo; el verde (aliado) no se debe disparar y desaparece a los 3 segundos aproximadamente. Acertar un amarillo mientras aún hay un rojo en pantalla es un error de prioridad: sin puntos y combo a cero. El fuego amigo y los fallos también reinician el combo y restan 1 segundo. Cada 1400 puntos sube el nivel, con más objetivos, más velocidad y más rojos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué los jugadores disparan en pánico al blanco equivocado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bajo estrés es habitual reaccionar al elemento más cercano o al primer movimiento en lugar de a la amenaza más peligrosa, antes de comprobar qué es. Practicar contener el disparo ayuda a mantener ese control."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se aplica el paradigma Go/No-Go al juego táctico?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Introducido por Franciscus Donders (1868), el método Go/No-Go evalúa la capacidad de ejecutar un disparo inmediato ante estímulos válidos y suprimir el clic ante blancos neutrales o aliados, evitando el fuego amigo y la pérdida de ventaja posicional."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el Tiempo de Reacción de Señal de Parada (SSRT)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El SSRT (Logan & Cowan, 1984) mide el tiempo que toma frenar una acción motora ya activada. Cuanto más corto, antes se puede cancelar un disparo hacia un aliado o señuelo. Este drill no mide el SSRT directamente; entrena a no disparar a los objetivos verdes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo ordenar las amenazas cuando entran varios enemigos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los criterios habituales son la línea de visión directa, la letalidad del arma rival y el tiempo hasta el primer disparo: quien ya te está apuntando va antes que quien se mueve de espaldas. Este drill lo simplifica en un orden fijo, rojo antes que amarillo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la supresión de distractores en neurociencia visual?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es el mecanismo de atención selectiva que inhibe la respuesta a estímulos irrelevantes (Treisman, 1980), permitiendo mantener la vista central en la amenaza principal sin dejarse engañar por señuelos perimetrales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el coste de disparar a aliados o señuelos en Valorant y CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Disparar a señuelos (como clones de Yoru o granadas señuelo) delata tu posición acústica, gasta munición y desvía la mira del oponente real, lo que da una ventana al rival real."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué sensibilidad de ratón optimiza la toma de decisiones en tiroteos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una sensibilidad muy alta dificulta frenar en el objetivo y una muy baja ralentiza el cambio a blancos lejanos. Usa preferiblemente tu sensibilidad habitual de juego, con la que frenas con seguridad."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué la adrenalina excesiva empeora la selección de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La activación simpática extrema produce visión de túnel y satura la memoria operativa, limitando la capacidad de procesar múltiples blancos sin un entrenamiento cognitivo regular."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia se debe practicar la priorización táctica?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay una regla fija. Unos 10 minutos antes de jugar son un formato razonable; compara tu precisión y tu número de fuego amigo en el mismo equipo a lo largo de los días."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Dominar la Priorización de Objetivos y la Disciplina de Disparo",
    "description": "Procedimiento paso a paso para configurar la sensibilidad, categorizar amenazas y abatir blancos en el orden óptimo.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar Sensibilidad",
        "text": "Ajusta la sensibilidad para que se parezca a la de tu juego habitual.",
        "url": "https://skilldrills.online/es/drills/fps/target-prioritization#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Reconocer la Jerarquía de Colores",
        "text": "Asocia los objetivos rojos como amenaza prioritaria (+100 PTS), los amarillos como secundarios (+50 PTS) y los verdes como aliados prohibidos.",
        "url": "https://skilldrills.online/es/drills/fps/target-prioritization#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Abatir Objetivos Rojos Críticos de Inmediato",
        "text": "Realiza un flick preciso hacia los blancos rojos antes de que sus temporizadores se agoten y resten puntuación.",
        "url": "https://skilldrills.online/es/drills/fps/target-prioritization#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Inhibir el Disparo ante Aliados Verdes",
        "text": "Suprime deliberadamente el clic al pasar la cruceta cerca de blancos verdes para mantener intacto tu multiplicador de combo.",
        "url": "https://skilldrills.online/es/drills/fps/target-prioritization#step-4"
      }
    ]
  };

  const targetPrioritizationGuide = {
    heading: "Prioridad de objetivos en FPS: selección de objetivos y control del disparo",
    intro: [
      "Este drill de prioridad de objetivos practica la decisión de elegir al enemigo más peligroso antes de disparar: primero los objetivos rojos en movimiento (amenaza alta), después los amarillos y nunca los aliados verdes. Entrenas la evaluación de amenazas, el filtrado de la atención y el control del tiro, por ejemplo para tiroteos con varios rivales en Valorant y CS2.",
      "La base de la inhibición motora fue explicada por Gordon D. Logan y William B. Cowan (1984) con el modelo horse-race: cuando aparece una señal de detención, la orden inhibitoria compite contra la orden motora que ya está en curso. Bajo presión, el clic suele ganar antes de comprobar el objetivo: es el disparo por pánico.",
      "Integrando la cronometría mental de Franciscus Cornelis Donders (1868/1969) para tiempos de reacción de elección y la teoría de integración de rasgos de Anne Treisman y Garry Gelade (1980), esta práctica obliga al sistema visual a clasificar los blancos por su nivel de peligro antes de autorizar el clic.",
      "Al combinar el modelo de atención orientada de Michael I. Posner (1990), los paradigmas espaciales de C. Shawn Green y Daphne Bavelier (2003) y la medición digital precisa (Woods et al., 2015), el ejercicio practica la puntería selectiva y el control del disparo con límite de tiempo.",
      "Cómo se evalúa: cada disparo se cronometra en milisegundos mediante performance.now() en el navegador de manera local sin transferencia externa. Factores del equipo: los relojes web presentan 1 ms de granularidad típica, y las pantallas actualizan en ciclos de 16,7 ms (60 Hz), 6,9 ms (144 Hz) y 4,1 ms (240 Hz). El polling rate del ratón suma cerca de 8 ms a 125 Hz frente a 1 ms a 1000 Hz (Woods et al., 2015). Evalúa tus registros siempre con la misma configuración."
    ],
    benchmarks: {
      title: "Cómo leer la pantalla de resultados",
      headers: ["Valor", "Cómo lo cuenta el drill", "Significado", "Cómo mejorar"],
      rows: [
        ["Precisión", "(aciertos rojos + amarillos) ÷ todos los clics", "Parte de los disparos con la prioridad correcta", "Compara tus propios valores en el mismo dispositivo"],
        ["Amenazas resueltas", "Aciertos en objetivos rojos y amarillos", "Cuántas amenazas resolviste en el tiempo", "Aumentarlas manteniendo el combo"],
        ["Fuego amigo / error de prioridad", "Disparo al verde, o al amarillo con un rojo visible", "Fallo al contener el disparo o al evaluar la amenaza", "Buscar el rojo primero"],
        ["Combo máximo · nivel máximo", "Aciertos seguidos sin error, 1 nivel cada 1400 puntos", "Constancia y dificultad alcanzada", "Reducir errores antes que ganar velocidad"]
      ],
      note: "Esta tabla describe los valores que este drill registra de verdad; no son rangos, tiers ni estadísticas de usuarios."
    },
    techniques: {
      title: "Protocolos Respaldados por Evidencia para Dominar la Priorización",
      items: [
        {
          name: "Inhibición de Respuesta Ejecutiva (Disciplina Go/No-Go)",
          desc: "Ejercita la contención deliberada del clic inmediato al detectar movimiento. Condiciona el dedo a esperar la verificación del color en la corteza visual antes de accionar el interruptor del ratón.",
          tips: "Mantén el dedo apoyado con suavidad sobre el botón izquierdo, sin generar tensión muscular previa."
        },
        {
          name: "Inspección Dinámica de la Jerarquía de Peligro",
          desc: "Explora la escena buscando en primer lugar el color de mayor amenaza (rojo). Elimina ese blanco primordial antes de prestar atención a las amenazas secundarias en cuenta atrás (amarillo).",
          tips: "Resuelve los objetivos rojos antes de cualquier otra acción; considera los amarillos como amenazas en transición."
        },
        {
          name: "Supresión de Distractores Periféricos",
          desc: "Aprende a desestimar elementos neutros o aliados verdes que surjan en la periferia de la vista, manteniendo el foco visual en los sectores con enemigos activos.",
          tips: "No desvíes la cruceta hacia objetivos verdes aunque aparezcan muy cerca de la retícula."
        },
        {
          name: "Puntería Balística Cadenciada y Parada Firme",
          desc: "Lanza cada flick como un gesto motor intencionado y firme. Desplaza la mira con velocidad al centro del objetivo crítico y frena con decisión sobre la alfombrilla.",
          tips: "Es preferible un movimiento cadenciado y seguro a movimientos espasmódicos sin control cromático."
        }
      ]
    },
    steps: [
      "Ajusta la sensibilidad para que se parezca a la de tu juego habitual e inicia el drill.",
      "Dirige la vista al centro de la pantalla y aguarda la salida simultánea de blancos rojos, amarillos y verdes.",
      "Detecta y neutraliza los objetivos rojos de alta prioridad con disparos veloces (+100 PTS / +2 s de tiempo, máximo 60 s).",
      "Elimina los blancos amarillos (+50 PTS / +2 s) solo cuando no quede ningún rojo en pantalla, antes de que cambien a rojo.",
      "Contén por completo el disparo ante objetivos verdes aliados; dispararles, acertar un amarillo con un rojo visible o fallar reinicia tu combo."
    ],
    audience: "Jugadores competitivos de Valorant, Counter-Strike 2, Rainbow Six Siege y Apex Legends que buscan erradicar el clic por impulso, perfeccionar la disciplina de disparo y resolver tiroteos con múltiples blancos.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'green2003', 'donders1969', 'treisman1980', 'logan1984'),
    related: [
      { href: "/es/drills/fps/target-acquisition", label: "Entrenamiento de Adquisición de Objetivos" },
      { href: "/es/drills/fps/target-switching-swarm", label: "Entrenamiento de Target Switching Swarm" },
      { href: "/es/drills/fps/vertical-air-track", label: "Entrenamiento de Rastreo Aéreo Vertical" },
      { href: "/es/drills/fps/strafe-tracking", label: "Entrenamiento de Strafe Tracking" },
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" }
    ]
  };

  const copyEs = {
    h1Keyword: "Prioridad de objetivos",
    h1Suffix: " – selección de objetivos en FPS",
    subtitle: "Elige el objetivo más peligroso y controla el disparo bajo presión directamente en el navegador.",
    statScore: "Puntuación",
    statTime: "Tiempo",
    statAccuracy: "Precisión",
    statBestScore: "Récord",
    statThreatsCleared: "Amenazas Resueltas",
    statMaxCombo: "Combo Máximo",
    statPeakLevel: "Nivel Máximo",
    startTitle: "Prioridad de objetivos",
    startSubtitle: "Evaluación de Amenazas · Filtrado Cognitivo · Dificultad Dinámica",
    getReady: "PREPÁRATE",
    toggleFlash: "Alternar Flash de Fallo",
    toggleSound: "Alternar Efectos de Sonido",
    pausedTitle: "Juego en Pausa",
    pausedSubtitle: "Haz clic para reanudar — el bloqueo de cursor se activará de nuevo.",
    stageCaption: "Elimina primero los objetivos rojos de alta amenaza y luego los amarillos. ¡Contén el disparo ante aliados verdes!",
    rulesTitle: "Instrucciones del Ejercicio y Puntuación",
    rulesItems: [
      { num: "1", text: "Diana de Alta Amenaza", highlight: "Rojo (+100 PTS / +2s, máx. 60s)", result: "Prioridad Máxima" },
      { num: "2", text: "Amenaza Media", highlight: "Amarillo (+50 PTS / +2s)", result: "Puntúa solo sin rojo visible; pasa a rojo tras un tiempo" },
      { num: "3", text: "Unidad Aliada", highlight: "Verde (NO DISPARAR)", result: "Fuego amigo, error de prioridad o fallo reinicia combo (-1s)" },
      { num: "4", text: "Subida de Nivel", highlight: "+1 / 1400 PTS", result: "Escalado Dinámico Continuo" }
    ],
    aboutTitle: "Sobre este drill de prioridad de objetivos",
    aboutHeading: "¿Qué es la Priorización de Objetivos?",
    aboutText: "La prioridad de objetivos es la habilidad de elegir rápidamente qué amenaza abatir primero mientras se frena el tiro ante el resto de estímulos. Detener una acción ya emprendida es un proceso propio que compite con la orden de disparo (Logan & Cowan, 1984) — por eso retener el tiro cuesta más que disparar. Este drill lo entrena con la regla rojo antes que amarillo y ningún disparo al verde."
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
      <TargetPrioritizationClient copy={copyEs} />
      <DrillGuide guide={targetPrioritizationGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
