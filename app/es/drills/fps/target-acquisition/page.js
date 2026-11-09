import TargetAcquisitionClient from '@/app/drills/fps/target-acquisition/TargetAcquisitionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Aim Trainer para Valorant: Adquisición de Objetivos | SkillDrills",
  description: "Aim trainer para Valorant gratis en el navegador: acierta de 3 a 8 objetivos del más claro al más oscuro y practica la adquisición y el primer disparo.",
  keywords: [
    "aim trainer valorant",
    "aim trainer para valorant",
    "adquisición de objetivos",
    "primer disparo",
    "precisión primer disparo",
    "detección visual FPS",
    "identificación de amenazas",
    "puntería Valorant",
    "entrenador de puntería",
    "test de puntería"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/target-acquisition",
    languages: getAlternateLanguages('/drills/fps/target-acquisition'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Aim Trainer para Valorant: Adquisición de Objetivos | SkillDrills",
    description: "Aim trainer para Valorant gratis en el navegador: acierta de 3 a 8 objetivos del más claro al más oscuro y practica la adquisición y el primer disparo.",
    url: "https://skilldrills.online/es/drills/fps/target-acquisition",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Aim Trainer para Valorant: Adquisición de Objetivos | SkillDrills",
    description: "Aim trainer para Valorant gratis en el navegador: acierta de 3 a 8 objetivos del más claro al más oscuro y practica la adquisición y el primer disparo.",
  },
};

export default function TargetAcquisitionEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Ejercicios FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Adquisición de Objetivos", "item": "https://skilldrills.online/es/drills/fps/target-acquisition" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Aim Trainer para Valorant: Adquisición de Objetivos",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Drill gratuito de adquisición de objetivos para jugadores de Valorant: acierta los objetivos por orden de brillo y practica el primer disparo.",
    "genre": "Entrenamiento FPS / Precisión Primer Disparo",
    "url": "https://skilldrills.online/es/drills/fps/target-acquisition",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aim Trainer para Valorant: Adquisición de Objetivos",
    "url": "https://skilldrills.online/es/drills/fps/target-acquisition",
    "description": "Drill gratuito de adquisición de objetivos para jugadores de Valorant: acierta los objetivos por orden de brillo y practica el primer disparo.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requiere soporte de HTML5 Canvas y Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Aim Trainer para Valorant: Adquisición de Objetivos",
    "url": "https://skilldrills.online/es/drills/fps/target-acquisition",
    "description": "Drill gratuito de adquisición de objetivos para jugadores de Valorant: acierta los objetivos por orden de brillo y practica el primer disparo.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Entrenamiento FPS", "Aim Trainer", "Adquisición de Objetivos"],
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
        "name": "¿Cómo funciona este aim trainer para Valorant de adquisición de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada sesión dura 60 segundos. Aparecen grupos de 3 a 8 objetivos con distinto brillo y hay que acertarlos del más claro al más oscuro. Un objetivo correcto vale +100 puntos multiplicados por el combo y el nivel; limpiar el grupo suma +400 puntos multiplicados por el nivel y genera un grupo nuevo. Acertar el objetivo equivocado o hacer clic en el vacío reinicia el combo y resta 0,6 segundos si la penalización de tiempo está activada. Se juega con ratón y bloqueo del puntero; Esc termina el drill. SkillDrills es una herramienta independiente, sin relación con Riot Games."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la adquisición de objetivos en shooters FPS competitivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La adquisición de objetivos es la secuencia visomotora y cognitiva que coordina detectar a un enemigo en el campo visual, discriminarlo del fondo y aliados, planificar la trayectoria del cursor y ejecutar un flick balístico para conectar el primer disparo."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué se diferencia la adquisición de blancos del tiempo de reacción simple?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo de reacción simple evalúa solo el retardo entre un estímulo predecible y un clic. La adquisición de objetivos integra búsqueda espacial, atención selectiva, discriminación de contrastes y precisión motora bajo presión de tiempo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo explica la Teoría de Integración de Características la detección de enemigos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Formulada por Anne Treisman y Garry Gelade (1980), esta teoría demuestra que las características primarias (luminancia, color, orientación) se analizan en paralelo por el campo visual antes de que la atención focalizada las ensamble como una amenaza individual."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo usar la mirada para adquirir objetivos más rápido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Según el modelo Guided Search (Wolfe, 2007), la atención va primero a lo que más destaca. En vez de recorrer la pantalla línea por línea, mantén la mirada en el centro, localiza el objetivo más visible y lleva el ratón a donde ya está tu mirada. Es justo la secuencia que este drill te hace repetir."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué impacto tiene la precisión del primer disparo en CS2 y Valorant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En shooters tácticos donde un único impacto a la cabeza es mortal (como Vandal o AK-47), el primer impacto suele decidir el duelo, y fallar el primer tiro da tiempo al rival para responder. Este drill no simula disparos a la cabeza reales, pero aísla el hábito de elegir el objetivo correcto y luego colocar con precisión el primer clic."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se debe usar la visión central o periférica para detectar blancos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Detecta los blancos con la visión periférica y usa la visión fóvea central junto con la cruceta para fijar el disparo. Quedarse mirando fijamente la retícula reduce la ventana de atención y retrasa la reacción periférica."
        }
      },
      {
        "@type": "Question",
        "name": "¿De qué forma afecta la densidad visual de elementos a la velocidad de puntería?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cuando varios distractores comparten atributos con el blanco principal, la búsqueda cambia de procesamiento paralelo rápido a búsqueda secuencial lenta, lo que alarga el tiempo para encontrar el objetivo (Treisman & Gelade, 1980). En este drill, el número de objetivos aumenta y la diferencia de brillo disminuye al subir de nivel."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el mejor agarre de ratón para la rápida adquisición de múltiples blancos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los agarres Claw y Fingertip son los más adecuados, ya que facilitan micro-correcciones inmediatas con las yemas y una frenada firme en la alfombrilla, manteniendo el antebrazo ágil para giros amplios."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué importa una sensibilidad constante en la adquisición de objetivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una sensibilidad constante mantiene estable la relación entre la mano y la pantalla, lo que ayuda al sistema neuromuscular a calibrar el impulso balístico."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo se aconseja entrenar adquisición de blancos al día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay una duración ideal demostrada. Unas cuantas sesiones de 60 segundos bien concentradas al calentar son un buen punto de partida; para antes de la fatiga visual y compara tus resultados en el mismo equipo."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Dominar la Adquisición de Objetivos y el Primer Tiro",
    "description": "Procedimiento paso a paso para identificar objetivos clave, suprimir dudas visuales y acertar el primer impacto.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar Sensibilidad con Entrada Directa",
        "text": "Ajusta la sensibilidad en la página /drills para que coincida con la de tu juego. El puntero se bloquea automáticamente al empezar.",
        "url": "https://skilldrills.online/es/drills/fps/target-acquisition#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Conservar Atención Periférica Relajada",
        "text": "Mantén la vista relajada en el centro de la pantalla para percibir la aparición del conjunto de blancos con visión periférica.",
        "url": "https://skilldrills.online/es/drills/fps/target-acquisition#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Discriminar el Contraste del Objetivo Principal",
        "text": "Identifica de inmediato el objetivo con mayor brillo sin realizar barridos oculares individuales sobre cada elemento.",
        "url": "https://skilldrills.online/es/drills/fps/target-acquisition#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Lanzar Flick Balístico con Frenado en Alfombrilla",
        "text": "Desplaza la cruceta velozmente al centro del blanco y dispara, empleando el rozamiento del tapete para evitar sobretiros.",
        "url": "https://skilldrills.online/es/drills/fps/target-acquisition#step-4"
      }
    ]
  };

  const targetAcquisitionGuide = {
    heading: "Aim trainer para Valorant: adquisición de objetivos y primer disparo",
    intro: [
      "Este aim trainer para Valorant, gratis en el navegador, entrena la adquisición de objetivos: durante 60 segundos aparecen de 3 a 8 objetivos con distinto brillo que debes acertar del más claro al más oscuro. Así repites el paso de elegir el objetivo correcto a acertar el primer disparo, útil para Valorant, CS2 y otros shooters tácticos. SkillDrills es una herramienta independiente, sin relación con Riot Games.",
      "La base científica de la búsqueda visual y la identificación de objetivos fue formulada por Anne Treisman y Garry Gelade (1980) en su Teoría de Integración de Características. Treisman demostró que las propiedades visuales elementales —como contraste de luminancia, tono y orientación de bordes— se extraen de forma simultánea y paralela por todo el campo de visión. Solo cuando la atención focalizada apunta a una coordenada exacta, estos atributos se unen en una amenaza reconocible.",
      "Ampliando el procesamiento paralelo, el modelo Guided Search de Jeremy M. Wolfe (1994, 2007) explica cómo los mapas sensoriales de prominencia se coordinan con las expectativas del jugador para dirigir la atención. Al entrenar la discriminación de contrastes, la corteza visual aprende a ignorar ruidos y elementos secundarios de forma instantánea, lo que puede recortar el tiempo entre la aparición del objetivo y el inicio del movimiento en esta tarea, sin garantía de mejora en partida.",
      "Integrando las leyes psicomotoras de Paul M. Fitts (1954), la teoría de submovimientos balísticos de David E. Meyer et al. (1988) y la cronometría digital de alta precisión (Woods et al., 2015), este ejercicio se centra en iniciar el primer flick sin dudar y frenar con precisión en el centro del objetivo. No garantiza mejoras en partida; sirve para seguir la evolución de tus propios resultados.",
      "Sobre los resultados: la pantalla final muestra puntuación, precisión (aciertos en el objetivo correcto ÷ clics totales), grupos limpiados, combo máximo y nivel alcanzado. Tu récord se guarda solo en este navegador. Este drill no mide tiempo de reacción en milisegundos. La tasa de refresco del monitor y el polling rate del ratón cambian la sensación, así que compárate en el mismo equipo."
    ],
    benchmarks: {
      title: "Rangos de práctica de precisión en adquisición de objetivos",
      headers: ["Rango", "Precisión", "Qué indica"],
      rows: [
        ["Rango 1", "95% o más", "Casi ningún error de orden ni clic en el vacío"],
        ["Rango 2", "88% – 95%", "Incluso en niveles altos sueles elegir primero el objetivo más claro"],
        ["Rango 3", "80% – 88%", "Aparecen errores de orden cuando hay muchos objetivos"],
        ["Rango 4", "70% – 80%", "Confundes a menudo objetivos de brillo parecido"],
        ["Rango 5", "menos de 70%", "Asegura el orden antes de subir la velocidad"]
      ],
      note: "La precisión es el valor de la pantalla final (aciertos en el objetivo correcto ÷ clics totales). Los rangos son referencias de práctica de SkillDrills, no normas científicas, rangos de juego ni estadísticas de usuarios."
    },
    techniques: {
      title: "Protocolos Respaldados por Evidencia para Perfeccionar la Adquisición",
      items: [
        {
          name: "Búsqueda Paralela frente a Inspección Secuencial",
          desc: "Evita mirar una por una las zonas de la pantalla. Aprovecha los filtros preatencionales (Treisman & Gelade, 1980) para percibir cambios de contraste con visión periférica manteniendo la mirada en el centro.",
          tips: "Mantén la vista relajada en el centro de la pantalla; deja que el blanco de mayor brillo dirija tu sacada ocular inicial."
        },
        {
          name: "Acoplamiento Sacádico-Motor en el Flick",
          desc: "Desvincula el movimiento de ojos y manos: realiza primero la sacada ocular para fijar el centro del blanco, permitiendo que la memoria muscular dirija el cursor velozmente hacia él.",
          tips: "Asegúrate de que tu mirada ya esté en el centro del objetivo antes de mover el ratón."
        },
        {
          name: "Filtrado Rápido del Umbral de Contraste",
          desc: "En zonas con varios elementos, las siluetas atenuadas corresponden a distractores, mientras que el brillo intenso delata la amenaza prioritaria. Aprende a filtrar el ruido sin frenar el flick.",
          tips: "Acostúmbrate a descartar los blancos secundarios menos visibles hasta abatir el objetivo principal."
        },
        {
          name: "Frenado Dinámico en Alfombrilla",
          desc: "Equilibra la rapidez del flick con la capacidad de detención (Meyer et al., 1988). Emplea el rozamiento de la alfombrilla y la presión de los dedos para frenar en el centro exacto sin pasarte.",
          tips: "Ejerce una sutil presión descendente con los dedos al final del recorrido para frenar el ratón de forma mecánica."
        }
      ]
    },
    steps: [
      "Ajusta la sensibilidad en la página /drills para que coincida con la de tu juego y empieza; el puntero se bloquea automáticamente.",
      "Mantén la vista descansada en el centro de la pantalla, esperando la aparición del conjunto de objetivos.",
      "Identifica al instante el blanco de mayor brillo y prioridad mediante el filtrado visual de contrastes en paralelo.",
      "Ejecuta un flick limpio al centro del objetivo y dispara para sumar +100 PTS × multiplicadores de combo y nivel. El tiempo es fijo de 60 segundos y no aumenta con los aciertos.",
      "Elimina los blancos restantes en orden decreciente de luminancia para conseguir el bono de grupo de +400 PTS × multiplicador de nivel."
    ],
    audience: "Jugadores competitivos de Valorant, Counter-Strike 2, Apex Legends y Overwatch 2 que quieren practicar por separado la elección del objetivo y el primer disparo. Se necesita ratón.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/es/drills/fps/target-prioritization", label: "Entrenamiento de Priorización de Objetivos" },
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
      { href: "/es/drills/fps/micro-correction-precision", label: "Entrenamiento de Micro-Corrección" },
      { href: "/es/drills/fps/strafe-tracking", label: "Entrenamiento de Strafe Tracking" },
      { href: "/es/drills/fps/180-degree-awareness", label: "Entrenamiento de Conciencia 180° Pro" }
    ]
  };

  const copyEs = {
    h1Keyword: "Aim Trainer para Valorant",
    h1Suffix: ": Adquisición de Objetivos",
    subtitle: "Gratis para jugadores de Valorant: acierta los objetivos del más claro al más oscuro y practica el primer disparo en el navegador.",
    statScore: "Puntuación",
    statTime: "Tiempo",
    statAccuracy: "Precisión",
    statBestScore: "Récord",
    statSetsCleared: "Series Completadas",
    statMaxCombo: "Combo Máximo",
    statPeakLevel: "Nivel Máximo",
    startTitle: "Adquisición de Objetivos Pro",
    startSubtitle: "Velocidad de Reconocimiento Visual · Niveles Dinámicos Ilimitados",
    getReady: "PREPÁRATE",
    toggleFlash: "Alternar Flash de Fallo",
    toggleSound: "Alternar Efectos de Sonido",
    pausedTitle: "Juego Pausado",
    pausedSubtitle: "Haz clic para reanudar — el bloqueo de cursor se activará de nuevo.",
    stageCaption: "Localiza y haz clic en el blanco más brillante (mayor opacidad) de cada grupo con la mayor rapidez y precisión posible.",
    rulesTitle: "Instrucciones del Ejercicio y Puntuación",
    rulesItems: [
      { num: "1", text: "Impacto en Diana", highlight: "+100 PTS × Nivel", result: "×Multiplicador Combo" },
      { num: "2", text: "Serie Despejada", highlight: "+400 PTS × Nivel", result: "Nuevo Grupo" },
      { num: "3", text: "Subida de Nivel", highlight: "+1 / 1400 PTS", result: "Escalado Dinámico Continuo" },
      { num: "4", text: "Blanco Erróneo / Fallo", highlight: "Penalización", result: "Reinicio Combo (-0,6s con penalización activa)" }
    ],
    aboutTitle: "Acerca del Entrenamiento de Adquisición",
    aboutHeading: "¿Qué es la Adquisición de Objetivos?",
    aboutText: "La adquisición de objetivos consiste en identificar la amenaza pertinente y desplazar la mira hacia ella. Las cualidades visuales básicas como color, brillo y orientación se procesan en paralelo a través del campo visual antes de que la atención focalice estos rasgos en un objeto (Treisman & Gelade, 1980) — motivo por el cual un rival contrastado se percibe con mucha mayor celeridad que uno camuflado."
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
      <TargetAcquisitionClient copy={copyEs} />
      <DrillGuide guide={targetAcquisitionGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
