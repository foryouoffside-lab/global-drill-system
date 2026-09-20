import ProFlickClient from '@/app/drills/fps/flick-shot-training/ProFlickClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Aim Trainer - Entrenamiento de puntería | SkillDrills",
  description: "Entrenador de puntería gratuito en el navegador para practicar flicks y primeros disparos en Valorant y CS2. Mide puntuación, tiempo y precisión.",
  keywords: [
    "aim trainer",
    "entrenador de puntería",
    "aim trainer online",
    "entrenamiento de puntería",
    "entrenamiento de puntería FPS",
    "puntería Valorant",
    "entrenamiento de flick",
    "práctica de puntería FPS",
    "precisión primer disparo",
    "flick aim",
    "test de puntería",
    "entrenador de puntería gratis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/flick-shot-training",
    languages: getAlternateLanguages('/drills/fps/flick-shot-training'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Aim Trainer - Entrenamiento de puntería | SkillDrills",
    description: "Entrenador de puntería gratuito en el navegador para practicar flicks y primeros disparos en Valorant y CS2. Mide puntuación, tiempo y precisión.",
    url: "https://skilldrills.online/es/drills/fps/flick-shot-training",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Aim Trainer - Entrenamiento de puntería | SkillDrills",
    description: "Entrenador de puntería gratuito en el navegador para practicar flicks y primeros disparos en Valorant y CS2. Mide puntuación, tiempo y precisión.",
  },
};

export default function FlickShotEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Aim Trainer y Flick", "item": "https://skilldrills.online/es/drills/fps/flick-shot-training" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aim Trainer y Flick",
    "url": "https://skilldrills.online/es/drills/fps/flick-shot-training",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requiere navegador compatible con HTML5 Canvas y JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entrenador de puntería y flick gratuito en el navegador para practicar precisión, frenado del ratón y primeros disparos en FPS."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Aim Trainer y Flick SkillDrills",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Herramienta de entrenamiento de puntería y flick para jugadores competitivos de FPS, con puntuación, tiempo y precisión.",
    "genre": "Entrenamiento FPS / Puntería Rápida",
    "url": "https://skilldrills.online/es/drills/fps/flick-shot-training",
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
    "name": "Aim Trainer y Flick FPS",
    "url": "https://skilldrills.online/es/drills/fps/flick-shot-training",
    "description": "Simulador interactivo de puntería con objetivos dinámicos para practicar el tiempo de adquisición y la precisión del primer disparo.",
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
        "name": "¿Qué es el flick shot en juegos de disparos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El flick shot (o puntería de golpe rápido) es la habilidad neuromuscular de mover la retícula desde una posición neutral hasta un objetivo fuera de centro en un único impulso balístico explosivo, seguido de un clic inmediato."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo mejorar el flick shot en Valorant y CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mejora tu flick practicando una aceleración uniforme combinada con frenado muscular firme contra la alfombrilla, eliminando cualquier aceleración por software y realizando rutinas diarias de 15 a 20 minutos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre tracking y flick shot?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tracking consiste en seguir suavemente objetivos en movimiento constante (clave en Apex y Overwatch). El flick shot es una aceleración balística discreta hacia un objetivo estático o repentino para conseguir una baja instantánea."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo corregir el sobre-flick (pasarse del objetivo)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El sobre-flick ocurre por deficiencia en la desaceleración mecánica. Activa los músculos antagonistas del antebrazo y presiona las yemas de los dedos sobre la alfombrilla al final del trayecto, o ajusta tu sensibilidad ligeramente a la baja."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el eDPI óptimo para entrenar flick shots?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En Valorant, un rango de 200 a 320 eDPI (por ejemplo, 800 DPI con 0.25–0.4) garantiza máxima estabilidad. En CS2, un rango de 600 a 1000 eDPI brinda agilidad y control óptimo del primer disparo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo influye la Ley de Fitts en la puntería rápida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Ley de Fitts establece que el tiempo de movimiento depende de la distancia y del ancho de la diana (ID = log2(2D/W)). Entrenar con diferentes radios perfecciona la respuesta neuromuscular ante objetivos difíciles."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se debe priorizar la velocidad o la precisión?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prioriza siempre la precisión de frenado (90% a 95% de aciertos limpios) antes de forzar la velocidad. La memoria muscular sin movimientos erráticos secundarios permite acelerar de manera natural y consistente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Afecta la tasa de refresco del monitor al rendimiento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monitores de 144 Hz (6.94 ms) y 240 Hz (4.17 ms) reducen notablemente el retardo de visualización frente a pantallas de 60 Hz (16.67 ms), permitiendo iniciar la corrección terminal mucho antes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo conviene entrenar al día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una sesión enfocada de 15 a 20 minutos diarios optimiza la retención neuromuscular sin causar fatiga articular o riesgo de lesiones por sobrecarga en la muñeca."
        }
      },
      {
        "@type": "Question",
        "name": "¿Aumenta la dificultad con rachas consecutivas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Junto a los 15 niveles de progresión, un algoritmo de calor dinámico reduce el diámetro de los objetivos y acorta los intervalos de aparición durante rachas continuas de impactos."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Entrenar Flick Shots y Puntería Rápida en el Navegador",
    "description": "Pasos detallados para entrenar la aceleración motora y la frenada precisa del ratón.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibrar Sensibilidad y Posición Inicial",
        "text": "Alinea tu sensibilidad eDPI con la de tu juego competitivo y mantén el ratón centrado en posición neutral."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fijación Visual Relajada y Detección Periférica",
        "text": "Mantén la mirada suave en el centro para detectar inmediatamente la aparición del objetivo periférico."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Impulso Balístico Rápido y Clic Instantáneo",
        "text": "Desplaza el ratón en una línea recta y fluida hacia el centro de la diana y haz clic antes de que expire el tiempo del objetivo."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Frenado Muscular y Apoyo en la Alfombrilla",
        "text": "Aplica fricción controlada con la palma y las yemas de los dedos sobre la alfombrilla para frenar en seco sobre el objetivo."
      }
    ]
  };

  const flickGuide = {
    heading: "Aim Trainer: práctica de Flick y puntería FPS",
    intro: [
      "Para quien busca un aim trainer, el flick es el movimiento rápido que lleva la retícula hasta un objetivo y termina con un frenado limpio antes del primer disparo. En FPS como Valorant, CS2 y Apex Legends, entrenar esta combinación de velocidad y precisión ayuda a responder cuando el objetivo aparece fuera del centro.",
      "Conforme a la Ley de Fitts (Fitts, 1954), la duración del movimiento depende de la dificultad de la tarea: ID = log2(2D/W), donde la distancia al objetivo (D) y su diámetro (W) determinan el tiempo necesario. El entrenamiento deliberado optimiza la desaceleración muscular antagonista (Schmidt et al., 1979), permitiendo detener el cursor en seco sobre el centro sin oscilaciones de retroceso.",
      "La latencia de los componentes y la precisión del temporizador en el navegador influyen directamente en la medición. Este entrenador utiliza performance.now() para registrar cada evento con exactitud de microsegundos. Con un ratón de 1000 Hz de sondeo (1.0 ms) y monitores de alta frecuencia (144 Hz a 6.94 ms, 240 Hz a 4.17 ms), el jitter de cuantificación se minimiza para medir el tiempo real de adquisición sensoriomotora (Woods et al., 2015).",
      "Medición técnica en tu dispositivo: cada pulsación se cronometra localmente con el reloj de alta resolución del navegador, sin enviar registros a servidores externos. Recuerda que los navegadores limitan la resolución a aproximadamente 1 ms por mitigaciones de Spectre, y los monitores muestran fotogramas a intervalos fijos (16.7 ms a 60 Hz frente a 4.1 ms a 240 Hz). Evalúa tu mejora comparando tus marcas en un mismo equipo."
    ],
    benchmarks: {
      title: "Parámetros de Adquisición de Objetivos y Tiempo de Movimiento (TM)",
      headers: ["Fase del Movimiento / Métrica", "Latencia Típica (ms)", "Mecanismo de Control Motor", "Fase de Habilidad y Ley de Fitts"],
      rows: [
        ["Sacada Visual Inicial y Latencia", "180 – 220 ms", "Foveación ocular y latencia en corteza visual", "Detección del estímulo antes del impulso balístico (Woods et al. 2015)"],
        ["Movimiento Balístico Primario (Impulso)", "120 – 180 ms", "Activación explosiva de músculos agonistas", "Vuelo balístico en bucle abierto que cubre el 80–90% de la distancia (Elliott et al. 2010)"],
        ["Microcorrección Secundaria (Ajuste)", "60 – 120 ms", "Retroalimentación visual y frenado mecánico", "Fase terminal en bucle cerrado resolviendo el índice de dificultad (Fitts 1954)"],
        ["Tiempo Total de Adquisición (Bruto)", "360 – 520 ms", "Ciclo sensoriomotor completo + ejecución del clic", "Línea de base estándar entre tiradores aficionados y avanzados"],
        ["Adquisición Subconsciente de Élite", "240 – 320 ms", "Sinergia motora automatizada con microajustes mínimos", "Dominio competitivo de alto nivel en shooters tácticos con frenado limpio"]
      ],
      note: "Métricas sintetizadas a partir de estudios de control motor (Fitts 1954; Schmidt et al. 1979; Elliott et al. 2010) y cronometría digital (Woods et al. 2015). El rendimiento individual varía según la tasa de refresco, el sondeo del ratón y la amplitud del objetivo."
    },
    techniques: {
      title: "Calibración Recomendada de eDPI por Juego",
      items: [
        {
          name: "Calibración para Valorant",
          desc: "Rango óptimo de eDPI: 200 - 320 (DPI × Sensibilidad interna). Ej.: 800 DPI con 0.25 - 0.4. Favorece la precisión milimétrica del primer disparo a la cabeza.",
          tips: "Usa el antebrazo para giros amplios de 90° y la muñeca para microajustes precisos en esquinas."
        },
        {
          name: "Calibración para Counter-Strike 2 (CS2)",
          desc: "Rango óptimo de eDPI: 600 - 1000. Ej.: 800 DPI con 0.8 - 1.25. Combina estabilidad de apuntado con rapidez para frenar ante un enemigo en carrera.",
          tips: "Alinea la mira a la altura de la cabeza en ángulos predecibles antes de iniciar el flick."
        },
        {
          name: "Calibración para Apex Legends y Juegos de Alta Movilidad",
          desc: "Rango óptimo de eDPI: 1000 - 1600. Permite un seguimiento continuo en combates cercanos y maniobras de movimiento vertical rápido.",
          tips: "Utiliza alfombrillas de baja fricción y combina rutinas de seguimiento continuo con ejercicios de impacto."
        },
        {
          name: "Calibración para Overwatch 2 (Héroes de Disparo Preciso)",
          desc: "Rango óptimo de eDPI: 800 - 1200 para personajes de alta precisión como Cassidy o Ashe.",
          tips: "Mantén una presión equilibrada en la mano para que el ratón no tiemble al frenar sobre el blanco."
        }
      ]
    },
    scientificPrinciples: {
      title: "Fundamentos Biomecánicos de la Puntería de Choque",
      items: [
        {
          name: "Ley de Fitts y Compromiso Velocidad-Precisión",
          desc: "Aumentar la velocidad sin consolidar la trayectoria motora degrada el acierto terminal. Automatiza primero la trayectoria limpia antes de buscar marcas extremas."
        },
        {
          name: "Modelo de Doble Bucle de Elliott",
          desc: "Los tiradores de élite reducen casi por completo la fase de corrección secundaria, alcanzando el objetivo en un único impulso fluido y controlado."
        },
        {
          name: "Frenado Mecánico y Coactivación Antagonista",
          desc: "El frenado instantáneo requiere coordinar la contracción simultánea de músculos extensores y flexores junto con la fricción física de la alfombrilla."
        }
      ]
    },
    steps: [
      "Haz clic en Iniciar Entrenamiento para abrir la arena de flick shot en pantalla completa.",
      "Mantén la mirada relajada en el centro de la retícula.",
      "En cuanto aparezca el objetivo, desplaza el ratón con un impulso ágil hacia su centro y dispara.",
      "Evita barridos lentos: prioriza una aceleración decidida seguida de un frenado firme sobre el blanco.",
      "Revisa tu porcentaje de acierto, tiempo promedio al blanco y clasificación de rango en la tarjeta de resultados."
    ],
    audience: "Jugadores competitivos de FPS tácticos (Valorant, CS2, Rainbow Six Siege), Battle Royale (Apex Legends, Fortnite) y cualquiera que busque una puntería mecánica de primer disparo rápida y precisa.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'elliott2010', 'fitts1954', 'schmidt1979'),
    related: [
      { href: "/es/drills/fps/180-degree-awareness", label: "Conciencia Espacial 180°" },
      { href: "/es/drills/fps/angle-hold-trainer", label: "Colocación de Mira y Retención de Ángulos" },
      { href: "/es/drills/reaction-speed/reaction-time-test", label: "Test de Tiempo de Reacción" },
      { href: "/es/drills/motor/movement-speed/rapid-tapping", label: "Test de CPS y Velocidad de Clics" }
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
      <ProFlickClient
        copy={{
          h1Keyword: "Aim Trainer",
          h1Suffix: " - Entrenamiento de puntería",
          subtitle: "Practica flicks y primeros disparos para Valorant y CS2 directamente en el navegador.",
          statScore: "Puntuación",
          statTime: "Tiempo Restante",
          statAccuracy: "Precisión",
          statBestScore: "Récord Personal",
          statAvgFlick: "Flick Medio",
          statMaxCombo: "Combo Máximo",
          statPeakLevel: "Nivel Máximo",
          startTitle: "Pro Flick Trainer",
          startSubtitle: "Flicks Balísticos & Adquisición de Blancos • Dificultad Dinámica Infinita",
          getReady: "Prepárate",
          toggleFlash: "Alternar Flash de Fallo",
          toggleSound: "Alternar Efectos de Sonido",
          pausedTitle: "Pausado",
          pausedSubtitle: "Haz clic para continuar — El bloqueo de cursor se reactivará.",
          stageCaption: "Apunta velozmente a los blancos aleatorios y dispara con precisión antes de que expire el tiempo límite.",
          rulesTitle: "Reglas de Entrenamiento y Puntuación",
          rulesItems: [
            { num: "1", text: "Impacto en Diana", highlight: "+100 PTS (+0,6s)", result: "×Multiplicador Combo" },
            { num: "2", text: "Racha de Combo", highlight: "Hasta 3.0×", result: "Blancos Más Rápidos" },
            { num: "3", text: "Subida de Nivel", highlight: "+1 / 1800 PTS", result: "Escalado Adaptativo" },
            { num: "4", text: "Fallo / Tiempo Límite", highlight: "Penalización", result: "Reinicio Combo (-0,8s)" }
          ],
          aboutTitle: "Acerca del Pro Flick Trainer",
          aboutHeading: "¿Qué es el Flick Aim?",
          aboutText: "El flick aim es la habilidad motora de desplazar la retícula balísticamente en un único impulso hacia el objetivo y frenar en seco. Siguiendo la Ley de Fitts (1954), la dificultad depende de la distancia y el tamaño. La maestría reside en perfeccionar el frenado mecánico antagonista sobre la alfombrilla (Elliott et al., 2010)."
        }}
      />
      <DrillGuide guide={flickGuide} />
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <RelatedDrills
          currentCategory="fps"
          currentHref="/es/drills/fps/flick-shot-training"
          locale="es"
        />
      </div>
      <DrillFooter />
    </>
  );
}
