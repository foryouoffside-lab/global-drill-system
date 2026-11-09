import ProFlickClient from '@/app/drills/fps/flick-shot-training/ProFlickClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Aim Test: Test de Puntería con Flicks | SkillDrills",
  description: "Aim test en el navegador: haz flick a objetivos que aparecen al azar. Empiezas con 45 s, +2 s por acierto, -1 s por fallo. Test de puntería para Valorant y CS2.",
  keywords: [
    "aim test",
    "test de puntería",
    "aim test online",
    "aim flick",
    "flick aim trainer",
    "puntería Valorant",
    "entrenamiento de flick",
    "práctica de puntería FPS",
    "precisión primer disparo",
    "flick aim",
    "test de puntería gratis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/flick-shot-training",
    languages: getAlternateLanguages('/drills/fps/flick-shot-training'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Aim Test: Test de Puntería con Flicks | SkillDrills",
    description: "Aim test en el navegador: haz flick a objetivos que aparecen al azar. Empiezas con 45 s, +2 s por acierto, -1 s por fallo. Test de puntería para Valorant y CS2.",
    url: "https://skilldrills.online/es/drills/fps/flick-shot-training",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Aim Test: Test de Puntería con Flicks | SkillDrills",
    description: "Aim test en el navegador: haz flick a objetivos que aparecen al azar. Empiezas con 45 s, +2 s por acierto, -1 s por fallo. Test de puntería para Valorant y CS2.",
  },
};

export default function FlickShotEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Aim Test con Flicks", "item": "https://skilldrills.online/es/drills/fps/flick-shot-training" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Aim Test con Flicks",
    "url": "https://skilldrills.online/es/drills/fps/flick-shot-training",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requiere navegador compatible con HTML5 Canvas y JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Aim test gratuito en el navegador: flicks a objetivos que aparecen al azar, con puntuación, precisión y tiempo medio de flick."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Aim Test con Flicks SkillDrills",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Test de puntería con flicks para jugadores competitivos de FPS, con puntuación, tiempo y precisión.",
    "genre": "Entrenamiento FPS / Puntería Rápida",
    "url": "https://skilldrills.online/es/drills/fps/flick-shot-training",
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
    "name": "Aim Test con Flicks FPS",
    "url": "https://skilldrills.online/es/drills/fps/flick-shot-training",
    "description": "Simulador interactivo de puntería con objetivos dinámicos para practicar el tiempo de adquisición y la precisión del primer disparo.",
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
          "text": "En Valorant, un rango de 200 a 320 eDPI (por ejemplo, 800 DPI con 0.25–0.4) suele aportar estabilidad. En CS2, un rango de 600 a 1000 eDPI brinda agilidad y control óptimo del primer disparo."
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
          "text": "Sí. El nivel sube 1 cada 1.800 puntos, sin límite: el radio de los objetivos (empieza en 32 px) y su tiempo de vida (empieza en 1,3 s) se reducen. Además, una racha de aciertos seguidos hace los objetivos aún más pequeños y rápidos. Un fallo pone el combo a 0 y devuelve la dificultad al nivel actual."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto dura una partida del aim test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La partida empieza con 45 segundos. Cada acierto suma 2 segundos (máximo 60 segundos en el reloj). Un clic al vacío, un disparo fallado o un objetivo que expira resta 1 segundo y reinicia el combo. La partida termina en 0 segundos, así que cuanto más preciso seas, más dura. Cada acierto da 100 puntos multiplicados por el combo (hasta 3,0×) y por el nivel."
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
    heading: "Aim Test: test de puntería con flicks",
    intro: [
      "Este aim test mide el flick: el movimiento rápido que lleva la retícula hasta un objetivo y termina con un frenado limpio antes del primer disparo. En FPS como Valorant, CS2 y Apex Legends, entrenar esta combinación de velocidad y precisión ayuda a responder cuando el objetivo aparece fuera del centro.",
      "Conforme a la Ley de Fitts (Fitts, 1954), la duración del movimiento depende de la dificultad de la tarea: ID = log2(2D/W), donde la distancia al objetivo (D) y su diámetro (W) determinan el tiempo necesario. El entrenamiento deliberado optimiza la desaceleración muscular antagonista (Schmidt et al., 1979), permitiendo detener el cursor en seco sobre el centro sin oscilaciones de retroceso.",
      "La latencia de los componentes y la precisión del temporizador en el navegador influyen directamente en la medición. Este entrenador utiliza performance.now() para registrar cada evento con exactitud de microsegundos. Con un ratón de 1000 Hz de sondeo (1.0 ms) y monitores de alta frecuencia (144 Hz a 6.94 ms, 240 Hz a 4.17 ms), el jitter de cuantificación se minimiza para medir el tiempo real de adquisición sensoriomotora (Woods et al., 2015).",
      "Medición técnica en tu dispositivo: cada pulsación se cronometra localmente con el reloj de alta resolución del navegador, sin enviar registros a servidores externos. Recuerda que los navegadores limitan la resolución a aproximadamente 1 ms por mitigaciones de Spectre, y los monitores muestran fotogramas a intervalos fijos (16.7 ms a 60 Hz frente a 4.1 ms a 240 Hz). Evalúa tu mejora comparando tus marcas en un mismo equipo."
    ],
    benchmarks: {
      title: "Rangos de práctica SkillDrills por fase del flick (referencia)",
      headers: ["Fase del Movimiento / Métrica", "Latencia Típica (ms)", "Mecanismo de Control Motor", "Fase de Habilidad y Ley de Fitts"],
      rows: [
        ["Sacada Visual Inicial y Latencia", "180 – 220 ms", "Foveación ocular y latencia en corteza visual", "Detección del estímulo antes del impulso balístico (Woods et al. 2015)"],
        ["Movimiento Balístico Primario (Impulso)", "120 – 180 ms", "Activación explosiva de músculos agonistas", "Vuelo balístico en bucle abierto que cubre el 80–90% de la distancia (Elliott et al. 2010)"],
        ["Microcorrección Secundaria (Ajuste)", "60 – 120 ms", "Retroalimentación visual y frenado mecánico", "Fase terminal en bucle cerrado resolviendo el índice de dificultad (Fitts 1954)"],
        ["Tiempo Total de Adquisición (Bruto)", "360 – 520 ms", "Ciclo sensoriomotor completo + ejecución del clic", "Referencia para las primeras sesiones"],
        ["Adquisición Subconsciente Avanzada", "240 – 320 ms", "Sinergia motora automatizada con microajustes mínimos", "Práctica de frenado limpio con microajustes mínimos"]
      ],
      note: "Los valores en ms son rangos de práctica de SkillDrills, no normas de investigación ni datos de usuarios. Las fuentes (Fitts 1954; Schmidt et al. 1979; Elliott et al. 2010; Woods et al. 2015) respaldan los conceptos de cada fase. El rendimiento individual varía según la tasa de refresco, el sondeo del ratón y la amplitud del objetivo."
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
          desc: "Un flick combina un impulso balístico que cubre casi toda la distancia y una corrección final más corta. El entrenamiento busca acortar esa corrección."
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
      "Revisa en la tarjeta de resultados tu puntuación, porcentaje de acierto, tiempo medio de flick, combo máximo, nivel alcanzado y nota."
    ],
    audience: "Jugadores competitivos de FPS tácticos (Valorant, CS2, Rainbow Six Siege), Battle Royale (Apex Legends, Fortnite) y cualquiera que busque una puntería mecánica de primer disparo rápida y precisa.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'elliott2010', 'fitts1954', 'schmidt1979'),
    related: [
      { href: "/es/drills/fps/180-degree-awareness", label: "Conciencia Espacial 180°" },
      { href: "/es/drills/fps/angle-hold-trainer", label: "Colocación de Mira y Retención de Ángulos" },
      { href: "/es/drills/visual/reaction-speed/light-reaction", label: "Test de Tiempo de Reacción" },
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
          h1Keyword: "Aim Test",
          h1Suffix: ": Test de Puntería con Flicks",
          subtitle: "Un aim test para jugadores de Valorant y CS2: haz flick con el ratón a objetivos que aparecen al azar y mide tu precisión.",
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
            { num: "1", text: "Impacto en Diana", highlight: "+100 PTS (+2,0s)", result: "×Multiplicador Combo" },
            { num: "2", text: "Racha de Combo", highlight: "Hasta 3.0×", result: "Blancos Más Rápidos" },
            { num: "3", text: "Subida de Nivel", highlight: "+1 / 1800 PTS", result: "Escalado Adaptativo" },
            { num: "4", text: "Fallo / Tiempo Límite", highlight: "Penalización", result: "Reinicio Combo (-1,0s)" }
          ],
          aboutTitle: "Acerca del Pro Flick Trainer",
          aboutHeading: "¿Qué es el Flick Aim?",
          aboutText: "El flick aim es la habilidad motora de desplazar la retícula balísticamente en un único impulso hacia el objetivo y frenar en seco. Siguiendo la Ley de Fitts (1954), la dificultad depende de la distancia y el tamaño. La maestría reside en perfeccionar el frenado mecánico antagonista sobre la alfombrilla (Elliott et al., 2010)."
        }}
      />
      <DrillGuide guide={flickGuide} framed />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
