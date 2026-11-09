import RecoilControlClient from '@/app/drills/fps/recoil-control/RecoilControlClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "Control de Retroceso | Entrenamiento FPS | SkillDrills",
  description: "Entrenamiento gratis de control de retroceso en navegador: practica patrones de spray y compensación para CS2, Valorant y otros FPS.",
  keywords: [
    "control de retroceso",
    "control de recoil",
    "control de spray",
    "entrenamiento de recoil",
    "patrones de spray",
    "spray FPS",
    "retroceso CS2",
    "retroceso Valorant",
    "compensación de retroceso",
    "entrenador de recoil gratis",
    "control de retroceso vertical",
    "control de retroceso horizontal"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/recoil-control",
    languages: getAlternateLanguages('/drills/fps/recoil-control'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Control de Retroceso | Entrenamiento FPS | SkillDrills",
    description: "Entrenamiento gratis de control de retroceso en navegador: practica patrones de spray y compensación para CS2, Valorant y otros FPS.",
    url: "https://skilldrills.online/es/drills/fps/recoil-control",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Control de Retroceso | Entrenamiento FPS | SkillDrills",
    description: "Entrenamiento gratis de control de retroceso en navegador: practica patrones de spray y compensación para CS2, Valorant y otros FPS.",
  },
};

export default function RecoilControlPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://skilldrills.online/es"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Ejercicios FPS",
        "item": "https://skilldrills.online/es/drills/fps"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Control de Retroceso",
        "item": "https://skilldrills.online/es/drills/fps/recoil-control"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Entrenador de Control de Retroceso SkillDrills",
    "url": "https://skilldrills.online/es/drills/fps/recoil-control",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any",
    "browserRequirements": "Requiere navegador moderno con soporte de API Pointer Lock",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Entrenamiento de Control de Retroceso y Spray",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Recoil Control Pattern Trainer",
    "description": "Simulador de patrones de retroceso y compensación motora con bloqueo de cursor.",
    "genre": ["Action", "Esports Trainer", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Browser Game"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el control de retroceso (Recoil Control) en FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El control de retroceso es la habilidad psicomotora de contrarrestar la elevación y dispersión lateral de las armas automáticas desplazando el ratón en la trayectoria opuesta al patrón de disparo del arma."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué los primeros 8 a 10 disparos son la fase más crítica del spray?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En la mayoría de shooters tácticos, las primeras 8 a 10 balas siguen un retroceso principalmente vertical altamente predecible. El patrón de este ejercicio sigue la misma lógica: unas 10 balas de subida vertical y después oscilaciones laterales, así que el tirón inicial es la prioridad."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué se diferencia el retroceso entre CS2, Valorant y Apex Legends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En CS2 el spray sigue trayectorias fijas y reproducibles. En Valorant el retroceso vertical es fijo, pero la dispersión horizontal final tiene factores aleatorios. En Apex Legends el retroceso es continuo y adaptado a objetivos en rápido movimiento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo explica el Programa Motor Generalizado (GMP) la memoria muscular del spray?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Según Schmidt & Lee (2011), el cerebro almacena la trayectoria compensatoria en programas motores de bucle abierto. Como el patrón es fijo, la bajada puede empezar por anticipación, sin esperar a ver cada impacto."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es un spray transfer y cómo se ejecuta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consiste en cambiar el punto de apuntado hacia un segundo enemigo sin soltar el clic de disparo continuo, ajustando simultáneamente la posición del spray actual en el cargador y la distancia angular al nuevo blanco."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo influyen la sensibilidad y el rozamiento de la alfombrilla en el control?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una sensibilidad moderada facilita un deslizamiento vertical del antebrazo con mayor precisión. Alfombrillas con fricción equilibrada ayudan a frenar tirones excesivos hacia abajo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se debe tirar hacia abajo con la muñeca o con el antebrazo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para ráfagas cortas de 5 a 7 balas la muñeca y los dedos son suficientes. En sprays prolongados de 30 balas es indispensable involucrar el antebrazo para no bloquear el rango articular de la muñeca."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre dispersión aleatoria (bloom) y patrón de retroceso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El retroceso es un desplazamiento ordenado y compensable mecánicamente. El bloom es el cono estocástico aleatorio de desviación de cada proyectil que no se puede anticipar completamente."
        }
      },
      {
        "@type": "Question",
        "name": "¿Este entrenamiento de control de retroceso es gratis y qué necesito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es gratis y funciona en un navegador de PC sin descargas ni registro. Necesitas ratón: al empezar, el cursor se bloquea (Pointer Lock) y Esc o la pérdida del bloqueo terminan la sesión. No funciona en dispositivos solo táctiles. Es un ejercicio de habilidad con el ratón, no un macro anti-retroceso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia se debe practicar el control de retroceso?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unas sesiones de 10 a 15 minutos antes de jugar suelen bastar. Mejor sesiones cortas y frecuentes que una larga con el brazo cansado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué patrón de spray y qué reglas usa este ejercicio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Un único patrón de 30 balas tipo AK-47: unas 10 balas de retroceso vertical y después oscilaciones a izquierda y derecha (retroceso horizontal). No es una copia exacta del arma de un juego concreto. Mantener el clic izquierdo dispara cada 120 ms (500 disparos/min); soltarlo reinicia el patrón. Tras 30 balas, recarga automática de 1,2 s. Cabeza 100, pecho 40, extremidades 20 puntos, multiplicados por combo y nivel; fallar reinicia el combo. El tiempo empieza en 45 s y los aciertos no lo alargan. Cada 1400 puntos sube el nivel, con un objetivo más rápido y más retroceso."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Entrenar el Control de Retroceso en Disparos FPS",
    "description": "Protocolo estructurado para memorizar la bajada del ratón y el control de patrones de spray.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configuración y Bloqueo de Puntero",
        "text": "Ajusta la sensibilidad global en la página /drills y pulsa Iniciar; el cursor se bloquea tras la cuenta atrás."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Bajada Vertical en Disparo Inicial",
        "text": "Al iniciar el fuego sostenido, desplaza el ratón hacia abajo con velocidad constante compensando la subida del arma."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Compensación de Oscilaciones Laterales",
        "text": "A partir del décimo proyectil, modula el ratón hacia los lados en sentido opuesto a la dispersión de la trayectoria."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Mantenimiento del Grupo de Impactos",
        "text": "Conserva todos los impactos agrupados en la silueta central para elevar tu multiplicador de puntuación."
      }
    ]
  };

  const copyEs = {
    h1Keyword: "Control de Retroceso",
    h1Suffix: " – Entrenamiento de Spray FPS",
    caption: "Entrenamiento gratis de control de retroceso: mantén el clic sobre un objetivo en movimiento y baja el ratón en sentido contrario al patrón de spray para dejar las balas en cabeza y pecho.",
    statScore: "Puntuación",
    statTime: "Tiempo",
    statAccuracy: "Precisión",
    statBest: "Récord",
    statAmmo: "Munición",
    statReloading: "RECARGANDO...",
    pausedTitle: "Juego Pausado",
    pausedPrompt: "Haz clic en la pantalla para reactivar el bloqueo de cursor.",
    startTitle: "Entrenamiento de Control de Retroceso",
    startSubtitle: "Patrón de Spray tipo AK-47 y Compensación • Progresión Continua",
    startButtonText: "INICIAR ENTRENAMIENTO",
    getReady: "PREPÁRATE",
    statHeadshots: "Headshots",
    statMaxCombo: "Combo Máximo",
    statPeakLevel: "Nivel Máximo",
    playAgainText: "JUGAR DE NUEVO",
    shareText: "COMPARTIR RESULTADO",
    rulesTitle: "Instrucciones de Entrenamiento y Puntuación",
    rulesItems: [
      { num: "1", text: "Disparo a la Cabeza", highlight: "+100 PTS (sin bonus de tiempo)", result: "×Multiplicador de Combo" },
      { num: "2", text: "Tiro a Pecho y Extremidades", highlight: "+40 / +20 PTS", result: "Mantiene Racha de Combo" },
      { num: "3", text: "Progresión de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Escala Velocidad y Retroceso" },
      { num: "4", text: "Disciplina de Cargador", highlight: "<40% Penalización", result: "Reinicia Combo" }
    ],
    aboutTitle: "Sobre el Control de Retroceso y Spray",
    aboutHeading: "¿Qué es el Control de Retroceso (Recoil)?",
    aboutText: "El retroceso es el movimiento ascendente y lateral acumulativo que experimenta el arma al disparar en ráfagas. Su control demanda programas motores de bucle abierto (Schmidt & Lee, 2011) que corrigen la trayectoria por anticipación muscular sin depender del retardo visual."
  };

  const recoilControlGuide = {
    heading: "Guía de Control de Retroceso y Patrones de Spray FPS",
    intro: [
      "Este entrenamiento de control de retroceso funciona en el navegador: mantienes el clic izquierdo sobre un objetivo que se mueve de lado a lado y compensas un spray de 30 balas tipo AK-47 bajando el ratón (control de retroceso vertical) y corrigiendo a los lados (horizontal). Si acierta menos del 40 % de un cargador, se pierde el combo. Un calentamiento de spray para CS2, Valorant, Apex Legends y PUBG.",
      "Las armas automáticas de los juegos disparan cientos de balas por minuto (aquí, 500 por minuto, una cada 120 ms). Como el patrón es fijo, la compensación puede apoyarse en un programa motor de circuito abierto aprendido de antemano (Schmidt & Lee, 2011) en lugar de corregir bala a bala.",
      "El módulo condiciona al tirador en dos etapas críticas: un arrastre vertical uniforme durante los primeros 10 tiros y una modulación lateral compensatoria durante el resto del cargador, siguiendo el modelo de los fusiles de asalto habituales.",
      "Con la API de Pointer Lock, cada bala cuenta como cabeza, pecho o extremidades según dónde cae (mira + desplazamiento del retroceso). Bajar de más deja las balas por debajo del objetivo; bajar de menos, por encima.",
      "Cómo se mide: el porcentaje de impactos se calcula localmente en tu navegador. Variaciones menores a 5 ms corresponden a tolerancias habituales de frecuencia de monitor y tasa de sondeo del sensor."
    ],
    benchmarks: {
      title: "Niveles de práctica SkillDrills: precisión por cargador",
      headers: ["Nivel de Habilidad", "Precisión por Cargador (%)", "Características de Control Motor", "Impacto Competitivo en Juego"],
      rows: [
        ["Tier 1 (Láser Apex)", "78% – 90%+", "Ajuste de velocidad casi perfecto; micro compensaciones laterales a lo largo de las 30 balas sin dispersión", "Práctica de spray transfers entre varios blancos con compensación estable"],
        ["Tier 2 (Etapa Intermedia-Alta)", "62% – 78%", "Agrupación precisa en los primeros 10 disparos; recentrado ágil en oscilaciones laterales del spray", "Sprays estables a media distancia; listo para practicar spray transfers"],
        ["Tier 3 (Nivel Avanzado FPS)", "48% – 62%", "Buena bajada vertical; ligeras vacilaciones o sobrecompensación entre las balas 12 y 25", "Sprays consistentes a corta y media distancia; leve dificultad en transferencias lejanas"],
        ["Tier 4 (Intermedio)", "35% – 48%", "Velocidad de bajada desigual; dudas en torno a la séptima bala permitiendo que la mira supere la cabeza", "Vulnerable en intercambios directos de fuego continuo; obligado a recurrir a ráfagas cortas"],
        ["Tier 5 (En Desarrollo)", "Menos de 35%", "Arrastre vertical tardío o errático; falta de ajuste lateral que produce dispersión descontrolada", "Pérdida continua de duelos directos; la ráfaga se dispersa por completo alrededor del blanco"]
      ],
      note: "Niveles propios de SkillDrills, no normas científicas, estadísticas de usuarios ni rangos de juegos. Precisión = balas acertadas ÷ balas disparadas."
    },
    techniques: {
      title: "Protocolos Basados en Evidencia para Optimizar el Control de Retroceso",
      items: [
        {
          name: "División del Spray en Dos Fases Motoras",
          desc: "Estructura el cargador como dos acciones distintas: una bajada vertical firme y fluida en las primeras 10 balas y micro ajustes laterales con los dedos en las restantes.",
          tips: "La inmensa mayoría de bajas tácticas se producen en los primeros 8 disparos; perfecciona esa primera fase."
        },
        {
          name: "Deslizamiento con el Antebrazo",
          desc: "Mueve el antebrazo sobre el escritorio para ejecutar la bajada continua, evitando forzar la muñeca hacia una flexión extrema.",
          tips: "Doblar la muñeca al límite bloquea la movilidad lateral necesaria para corregir las oscilaciones finales del spray."
        },
        {
          name: "Aprovechamiento de la Fricción Dinámica",
          desc: "Ejerce una presión descendente suave y regular para apoyarte en la fricción de la alfombrilla y evitar tirones verticales excesivos.",
          tips: "Una alfombrilla con textura controlada facilita descensos más homogéneos sin aceleraciones desmedidas."
        },
        {
          name: "Fijación Visual en el Objetivo y no en la Retícula",
          desc: "Mantén tu mirada clavada en la silueta del adversario. Deja que la mano ejecute la trayectoria inversa de forma automatizada.",
          tips: "Seguir la retícula en lugar del objetivo retrasa las correcciones y abre el spray."
        }
      ]
    },
    steps: [
      "Ajusta la sensibilidad global en la página /drills (1,00x = 30 cm/360) y pulsa Iniciar para bloquear el cursor.",
      "Al iniciar el fuego, aplica una bajada suave y constante que neutralice la subida inicial del cañón.",
      "Superada la décima bala, modula el ratón a los lados en sentido opuesto a la desviación horizontal del arma.",
      "Mantén todos los disparos agrupados en la diana central para elevar el multiplicador de combo y avanzar de nivel."
    ],
    audience: "Jugadores de PC de CS2, Valorant, Apex Legends y PUBG que quieren practicar el control de retroceso en fuego automático desde el navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'woodworth1899'),
    related: [
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
      { href: "/es/drills/fps/pro-smooth-pursuit", label: "Tracking Suave Profesional" },
      { href: "/es/drills/fps/micro-correction-precision", label: "Micro Corrección de Puntería" },
      { href: "/es/drills/fps/anti-strafe-jitter-duel", label: "Duelo Anti-Strafe Jitter" }
    ]
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <RecoilControlClient copy={copyEs} />

      <DrillGuide guide={recoilControlGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
