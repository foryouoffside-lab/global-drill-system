import StrafeTrackingClient from '@/app/drills/fps/strafe-tracking/StrafeTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Tracking de Strafe: Puntería en Movimiento | SkillDrills",
  description: "Tracking de strafe gratis en el navegador: mantén la mira sobre un objetivo que se mueve de lado a lado y cambia de dirección sin aviso. Para Apex y Overwatch 2.",
  keywords: [
    "tracking de strafe",
    "puntería en movimiento",
    "entrenamiento de tracking",
    "tracking reactivo FPS",
    "cómo mejorar tracking Apex",
    "seguimiento ADAD puntería",
    "control de puntería en strafe",
    "entrenador de tracking gratis",
    "mejorar tracking Overwatch 2",
    "seguimiento de objetivo en movimiento",
    "ejercicio de tracking FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/strafe-tracking",
    languages: getAlternateLanguages('/drills/fps/strafe-tracking'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tracking de Strafe: Puntería en Movimiento | SkillDrills",
    description: "Tracking de strafe gratis en el navegador: mantén la mira sobre un objetivo que se mueve de lado a lado y cambia de dirección sin aviso. Para Apex y Overwatch 2.",
    url: "https://skilldrills.online/es/drills/fps/strafe-tracking",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Tracking de Strafe: Puntería en Movimiento | SkillDrills",
    description: "Tracking de strafe gratis en el navegador: mantén la mira sobre un objetivo que se mueve de lado a lado y cambia de dirección sin aviso. Para Apex y Overwatch 2.",
  },
};

export default function StrafeTrackingEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Ejercicios FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Tracking de Strafe", "item": "https://skilldrills.online/es/drills/fps/strafe-tracking" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Tracking de Strafe FPS",
    "url": "https://skilldrills.online/es/drills/fps/strafe-tracking",
    "description": "Entrenador online de strafe tracking reactivo, lectura de cambios de dirección y respuesta motora de seguimiento suave para shooters competitivos.",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requiere soporte de HTML5 Canvas y Pointer Lock API",
    "dateModified": "2026-11-09"
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Tracking de Strafe FPS",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Entrenador online de strafe tracking reactivo, lectura de cambios de dirección y respuesta motora de seguimiento suave para shooters competitivos.",
    "genre": "Entrenamiento FPS / Tracking Reactivo",
    "url": "https://skilldrills.online/es/drills/fps/strafe-tracking",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Tracking de Strafe FPS",
    "url": "https://skilldrills.online/es/drills/fps/strafe-tracking",
    "description": "Entrenador online de strafe tracking reactivo, lectura de cambios de dirección y respuesta motora de seguimiento suave para shooters competitivos.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["Entrenamiento FPS", "Aim Trainer", "Tracking Reactivo"],
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
        "name": "¿Qué es el tracking de strafe en shooters FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tracking de strafe (strafe tracking) es la habilidad de mantener la retícula fija sobre un adversario que se desplaza lateralmente con cambios erráticos de dirección (ADAD). Integra la regulación de velocidad de seguimiento suave con una corrección motora inmediata ante inversiones de sentido."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué se diferencia el tracking reactivo del seguimiento ocular suave predecible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El seguimiento suave predecible ocurre cuando el objetivo mantiene una velocidad y ruta constantes, permitiendo al cerebro anticipar la trayectoria. El tracking reactivo requiere leer en tiempo real las desaceleraciones y cambios de sentido sin adivinar a ciegas, procesando el error retiniano continuo (Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo afecta la tensión muscular del brazo a la precisión durante duelos de strafe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La tensión isométrica excesiva en el antebrazo y la muñeca activa grupos musculares antagonistas, provocando temblores y alargando el tiempo mecánico para frenar e invertir la dirección del ratón. Un agarre más relajado suele facilitar cambios limpios; prueba qué te funciona."
        }
      },
      {
        "@type": "Question",
        "name": "¿Debo mirar a mi retícula de mira o directamente al objetivo enemigo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fija la visión fóvea central directamente en el torso o centro de masa del objetivo. Land & McLeod (2000) y Krauzlis (2004) describen el papel del desplazamiento del blanco en la retina en el seguimiento; la visión periférica y la propiocepción ayudan a alinear la mira."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué el tiempo para matar (TTK) eleva la importancia del strafe tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En títulos con TTK prolongado como Apex Legends, Overwatch 2 y The Finals, los rivales absorben muchos impactos mientras ejecutan esquivas complejas. En estos combates, el porcentaje de tiempo con la mira en el blanco (uptime) es el factor principal que determina la victoria."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué sensibilidad de ratón es idónea para dominar el strafe tracking reactivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay un valor universal. Muchos jugadores de tracking usan entre 28 cm y 42 cm por giro de 360°; lo importante es mantener la misma sensibilidad para comparar tus sesiones."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué importa una sensibilidad constante al leer strafes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una relación estable entre el desplazamiento del ratón y el movimiento en pantalla facilita comparar sesiones. La aceleración del ratón hace que el mismo gesto recorra distancias distintas según la velocidad, así que conviene desactivarla."
        }
      },
      {
        "@type": "Question",
        "name": "¿Entrenar strafe tracking en el navegador se transfiere de verdad a partidas reales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En parte. El ejercicio usa la Pointer Lock API y los desplazamientos relativos del ratón con un multiplicador de sensibilidad que ajustas en /drills. No reproduce retroceso, campo de visión ni red, así que la transferencia no está garantizada: compruébala en tu propio juego."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo recuperar la puntería si pierdo contacto con el objetivo en un strafe largo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Realiza una micro-sacada rápida y controlada hacia el centro de masa del objetivo y relaja de inmediato la mano para reanudar el seguimiento suave continuo, siguiendo el modelo de conmutación visomotora de Rashbass (1961)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el tiempo diario sugerido para entrenar tracking de puntería?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sesiones de 15 a 20 minutos con descansos breves suelen rendir más que sesiones muy largas y evitan la fatiga del antebrazo. Para si notas dolor en la muñeca."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se calculan los puntos, el combo y el tiempo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mientras la mira está sobre el objetivo ganas 50 puntos base cada 0,25 s (multiplicados por el combo y el nivel) y +0,1 s de reloj (máximo 60 s restantes). Cada segundo sin perder el objetivo suma 1 al combo, cuyo multiplicador llega a 3,0×. Al salir del objetivo el combo vuelve a 0 al instante; con la penalización de tiempo activada, cada segundo fuera resta 0,6 s. La ronda empieza con 45 s y termina en 0. No se hace clic: solo cuenta el movimiento del ratón."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Dominar el Strafe Tracking Reactivo",
    "description": "Guía práctica paso a paso para calibrar la sensibilidad, suprimir sobretiros y dominar el seguimiento en movimiento.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Ajustar la Sensibilidad",
        "text": "Ajusta el multiplicador de sensibilidad en la configuración de /drills y pulsa Iniciar Ejercicio; el cursor se bloquea al terminar la cuenta atrás.",
        "url": "https://skilldrills.online/es/drills/fps/strafe-tracking#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fijar la Mirada en el Blanco",
        "text": "Mantén tu visión fóvea central fija en el modelo del objetivo en lugar de mirar directamente a la cruceta.",
        "url": "https://skilldrills.online/es/drills/fps/strafe-tracking#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Coordinar Velocidad de Desplazamiento Suave",
        "text": "Desliza el ratón con soltura en el antebrazo, manteniendo contacto continuo para elevar el multiplicador de combo.",
        "url": "https://skilldrills.online/es/drills/fps/strafe-tracking#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Reaccionar sin Anticipaciones Injustificadas",
        "text": "Evita suponer cuándo cambiará de sentido; espera la confirmación visual de la inversión antes de revertir la trayectoria.",
        "url": "https://skilldrills.online/es/drills/fps/strafe-tracking#step-4"
      }
    ]
  };

  const strafeTrackingGuide = {
    heading: "Guía de Tracking de Strafe y Puntería en Movimiento",
    intro: [
      "Este tracking de strafe trabaja la puntería en movimiento contra evasiones erráticas en ADAD. En Apex Legends, Overwatch 2, The Finals y Call of Duty, mantener la mira sobre el objetivo mientras cambia de dirección ayuda a conservar el daño.",
      "La base neurofisiológica del seguimiento visual de movimiento fue desarrollada por Richard J. Krauzlis (2004), describiendo cómo el cerebro coordina los movimientos oculares de persecución suave a través de circuitos recíprocos entre la corteza visual de movimiento (MT/V5), el área temporal superior medial (MST) y el campo ocular frontal (FEF). Al detectar desplazamiento, estas áreas calculan el error de velocidad retiniana en tiempo real para sincronizar las respuestas motrices ocular y manual.",
      "En un descubrimiento fundamental de la psicofísica visual, Cyril Rashbass (1961) demostró que el seguimiento suave y los movimientos sacádicos están gobernados por subsistemas fisiológicos independientes: las sacadas responden a diferencias posicionales, mientras que el seguimiento suave reacciona exclusivamente a la velocidad retiniana. En combate, los jugadores que intentan adivinar las inversiones provocan sacadas involuntarias de corrección, generando sobretiro (overshoot) e inestabilidad en la puntería.",
      "Integrando el modelo de atención orientada de Michael I. Posner (1990), los paradigmas de seguimiento espacial de C. Shawn Green & Daphne Bavelier (2003) y la cronometría digital de baja latencia (Woods et al., 2015), este ejercicio busca que practiques no adivinar, reducir la tensión del antebrazo y seguir al objetivo de forma reactiva.",
      "Cómo se mide: cada acción se registra mediante el reloj de alta precisión performance.now() del navegador, ejecutándose íntegramente en tu equipo sin envío de datos al exterior. Factores de hardware: los temporizadores web presentan una granularidad típica de 1 ms por seguridad, y la pantalla cuantifica las actualizaciones según su frecuencia de refresco — unos 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz (Woods et al., 2015). El polling rate del ratón añade unos 8 ms a 125 Hz frente a 1 ms a 1000 Hz. Considera las variaciones inferiores a 5 ms como ruido y evalúa tu progreso en un mismo equipo."
    ],
    benchmarks: {
      title: "Franjas de práctica de tracking de strafe (SkillDrills)",
      headers: ["Franja", "% Tiempo en Blanco", "Racha Máx. en Blanco", "Lo que se suele ver"],
      rows: [
        ["Franja 1", "85% – 95%+", "> 7 s", "Seguimiento muy constante; casi sin sobretiro ante strafes rápidos"],
        ["Franja 2", "72% – 85%", "4,5 – 7 s", "Mucho tiempo en blanco; recuperación rápida tras cambios de sentido"],
        ["Franja 3", "58% – 72%", "2,5 – 4,5 s", "Tracking lineal consistente; pierde el blanco por momentos en inversiones bruscas"],
        ["Franja 4", "42% – 58%", "1,2 – 2,5 s", "Anticipación precipitada recurrente; la mira sobrepasa continuamente al rival antes de aplicar sacadas lentas de corrección"],
        ["Franja 5", "<42%", "< 1,2 s", "Temblores y falta de fluidez; dificultades para igualar la velocidad del blanco; la mira va constantemente con retraso"]
      ],
      note: "Franjas de práctica de SkillDrills para comparar tus propias sesiones, no normas de investigación ni estadísticas de usuarios. El % de tiempo en blanco es la fracción de fotogramas con la mira sobre el objetivo; la racha máxima es el tiempo más largo sin perderlo."
    },
    techniques: {
      title: "Protocolos Respaldados por Evidencia para Strafe Tracking Reactivo",
      items: [
        {
          name: "Lectura Reactiva frente a Predicción Temprana",
          desc: "Controla la urgencia de adivinar el momento exacto del giro enemigo. Querer predecir contra rivales experimentados causa graves desviaciones cuando modifican su cadencia. Fomenta un enfoque puramente reactivo: deja que el sistema visual confirme la inversión real antes de emitir la orden manual.",
          tips: "Centra la atención en la cadera o el torso del blanco; la desaceleración del cuerpo es visible antes de que los pies cambien de rumbo."
        },
        {
          name: "Desacoplamiento de la Tensión de Brazo y Muñeca",
          desc: "La rigidez isométrica en los músculos del antebrazo reduce la fluidez y retrasa el tiempo de parada e inversión. Con los músculos agarrotados, el cambio de dirección suele salir más lento y brusco.",
          tips: "Mantén un agarre ligero (cerca del 30% del esfuerzo voluntario máximo) para ejecutar giros suaves sin resistencia."
        },
        {
          name: "Anclaje Foveal en el Objetivo",
          desc: "Mantén la mirada centrada en el blanco móvil y nunca en tu cruceta. Land & McLeod (2000) y Krauzlis (2004) describen cómo el desplazamiento retiniano del objetivo alimenta el seguimiento. Mirar la retícula genera interferencias visomotoras que entorpecen la fluidez.",
          tips: "Permite que la memoria propioceptiva y la visión periférica alineen la cruceta mientras la fóvea evalúa la velocidad rival."
        },
        {
          name: "Calibración de Sacadas de Corrección",
          desc: "Si el objetivo se sale de la mira durante un strafe extenso, realiza una micro-sacada directa y precisa al centro del rival y relaja de inmediato la tensión para continuar con el seguimiento suave. Cyril Rashbass (1961) demostró la transición natural entre sacadas y seguimiento según el error posicional.",
          tips: "Mueve la mira con un chasquido limpio hacia la vanguardia del blanco y adapta la velocidad en el acto."
        }
      ]
    },
    steps: [
      "Ajusta el multiplicador de sensibilidad en la configuración de /drills y pulsa Iniciar Ejercicio; el cursor se bloquea tras la cuenta atrás.",
      "Fija la vista en el objetivo brillante mientras inicia su desplazamiento impredecible de lado a lado.",
      "Desliza el ratón con presión relajada en el antebrazo, acompañando la velocidad horizontal de forma constante.",
      "Mantén el cursor sobre el blanco: cada segundo sin perderlo sube el combo (multiplicador hasta 3,0x) y cada 1400 puntos subes un nivel.",
      "Revisa tu porcentaje de precisión y el tiempo fuera de blanco en las estadísticas finales para pulir tus cambios de dirección."
    ],
    audience: "Jugadores competitivos de Apex Legends, Overwatch 2, The Finals, Call of Duty Warzone, Valorant y CS2 que buscan disparos de seguimiento letales, lectura ágil de cambios de trayectoria y control motor reactivo refinado.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/es/drills/fps/pro-smooth-pursuit", label: "Smooth Tracking: seguimiento suave" },
      { href: "/es/drills/fps/anti-strafe-jitter-duel", label: "Duelo Anti-Strafe Jitter" },
      { href: "/es/drills/fps/anti-zigzag-movement-trainer", label: "Entrenamiento de Puntería Anti-Zigzag" },
      { href: "/es/drills/fps/micro-correction-precision", label: "Entrenamiento de Micro-Corrección" },
      { href: "/es/drills/fps/recoil-control", label: "Entrenamiento de Control de Retroceso" }
    ]
  };

  const copyEs = {
    h1Prefix: null,
    h1Keyword: "Tracking de Strafe",
    h1Suffix: ": Puntería en Movimiento",
    caption: "El strafe tracking es la destreza de mantener la mira sobre un rival con desplazamientos impredecibles. La persecución suave humana responde con precisión hasta unos 30°/s, y cada giro brusco demanda una sacada de corrección tras 100–130 ms (Rashbass, 1961; Krauzlis, 2004). Entrena la sincronización de velocidad y la reacción inmediata.",
    statStatus: "Estado",
    statusTracking: "SEGUIMIENTO",
    statusComplete: "COMPLETADO",
    statusStandby: "EN ESPERA",
    statTime: "Tiempo Restante",
    statAccuracy: "Precisión de Tracking",
    statBest: "Mejor Puntuación",
    statScore: "Puntuación",
    pausedTitle: "Juego en Pausa",
    pausedPrompt: "Haz clic para reanudar — el bloqueo de cursor se activará de nuevo.",
    startTitle: "Tracking de Strafe",
    startSubtitle: "Bloqueo del Puntero · Niveles sin Límite",
    startButtonText: "Iniciar Ejercicio",
    getReady: "PREPÁRATE",
    statLockStreak: "Mayor Racha Continua",
    statPeakLevel: "Nivel Máximo",
    statOffTarget: "Tiempo Fuera del Blanco",
    playAgainText: "Entrenar de Nuevo",
    shareText: "Compartir Resultado",
    exitText: "Volver al Menú",
    bottomCaption: "Sostén la retícula sobre el objetivo iluminado mientras realiza counter-strafes veloces y cambia de dirección por la pista.",
    rulesTitle: "Instrucciones del Ejercicio y Configuración",
    rulesItems: [
      { num: "1", text: "Mira en el Blanco", highlight: "+50 PTS / 0,25s (+0,4s/s)", result: "×Mult de Combo" },
      { num: "2", text: "1s Sin Perderlo", highlight: "Combo +1, hasta 3,0×", result: "Multiplicador Máx" },
      { num: "3", text: "Progresión de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Strafe Adaptativo" },
      { num: "4", text: "Fuera del Blanco", highlight: "Combo a 0 al instante", result: "-0,6s / s (penalización ON)" }
    ],
    aboutTitle: "Sobre Tracking y Puntería en Movimiento",
    whatIsTitle: "¿Qué es el Tracking de Strafe?",
    whatIsLead: "El strafe tracking consiste en sostener la mira sobre un contrincante que varía su trayectoria de manera errática. El seguimiento suave humano opera de manera óptima hasta unos 30°/s, y cada cambio súbito de dirección requiere una sacada de ajuste 100–130 ms más tarde (Rashbass, 1961; Krauzlis, 2004).",
    aboutIntro: [
      "En enfrentamientos a corta y media distancia con TTK extenso, los jugadores emplean strafes en ADAD y cambios de ritmo para evitar recibir disparos. Quienes dependen de predicciones suelen perder el contacto continuo con el objetivo.",
      "Este ejercicio te hace practicar responder a los cambios reales de dirección del objetivo con el brazo relajado."
    ],
    aboutCards: [
      {
        title: "Persecución Suave Visual",
        description: "Entrena a la mano a igualar la velocidad del objetivo en pantalla."
      },
      {
        title: "Disminución de Latencia en Giros",
        description: "Entrena el frenado inmediato y la inversión de trayectoria sin sufrir sobretiros ni parálisis motora."
      },
      {
        title: "Eficacia en TTK Prolongado",
        description: "Incrementa el porcentaje de tiempo con la mira en el enemigo, clave para resolver duelos en Apex Legends y Overwatch 2."
      }
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
      <StrafeTrackingClient copy={copyEs} />
      <DrillGuide guide={strafeTrackingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
