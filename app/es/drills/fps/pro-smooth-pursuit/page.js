import ProSmoothPursuitClient from '@/app/drills/fps/pro-smooth-pursuit/ProSmoothPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Smooth Tracking: Seguimiento Suave en FPS | SkillDrills",
  description: "Smooth tracking gratis en el navegador: mantén la mira con el ratón sobre un objetivo que se desliza en curvas de Lissajous. Seguimiento suave para Apex y OW2.",
  keywords: [
    "smooth tracking",
    "seguimiento suave",
    "tracking suave",
    "seguimiento en curva",
    "tracking con ratón"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/pro-smooth-pursuit",
    languages: getAlternateLanguages('/drills/fps/pro-smooth-pursuit'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Smooth Tracking: Seguimiento Suave en FPS | SkillDrills",
    description: "Smooth tracking gratis en el navegador: mantén la mira con el ratón sobre un objetivo que se desliza en curvas de Lissajous. Seguimiento suave para Apex y OW2.",
    url: "https://skilldrills.online/es/drills/fps/pro-smooth-pursuit",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Smooth Tracking: Seguimiento Suave en FPS | SkillDrills",
    description: "Smooth tracking gratis en el navegador: mantén la mira con el ratón sobre un objetivo que se desliza en curvas de Lissajous. Seguimiento suave para Apex y OW2.",
  },
};

export default function ProSmoothPursuitPage() {
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
        "name": "Smooth Tracking: Seguimiento Suave en FPS",
        "item": "https://skilldrills.online/es/drills/fps/pro-smooth-pursuit"
      }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Smooth Tracking: Seguimiento Suave en FPS",
    "url": "https://skilldrills.online/es/drills/fps/pro-smooth-pursuit",
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
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Smooth Tracking - seguimiento suave",
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
    "name": "Smooth Tracking - seguimiento en curva",
    "description": "Simulador de seguimiento continuo en curvas armónicas de Lissajous con bloqueo de cursor.",
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
        "name": "¿Qué es el entrenamiento de Smooth Pursuit (seguimiento suave) en FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smooth Pursuit es la capacidad fisiológica de coordinar el sistema oculomotor y los músculos del brazo para mantener la retícula alineada continuamente sobre un objetivo en movimiento mediante la sincronización fluida de velocidades sin saltos bruscos."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia neurológica entre seguimiento suave y movimientos sacádicos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los movimientos sacádicos (flicks) son impulsos balísticos directos regulados por el colículo superior, mientras que el Smooth Pursuit es gestionado por la corteza temporal media (área MT/V5) y el cerebelo para computar velocidad y mantener aceleración continua sin interrupciones visuales."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué tiembla mi puntería al intentar rastrear trayectorias curvas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El temblor se produce cuando el jugador intenta realizar el seguimiento mediante micro flicks sucesivos en vez de un deslizamiento continuo. La tensión muscular excesiva en la muñeca genera fricción estática que rompe la fluidez motora."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la anticipación visual foveal (Foveal Gaze Leading) en el tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Consiste en mirar al objetivo y su dirección de movimiento en lugar de tu propia retícula. La mirada suele adelantarse al gesto, lo que ayuda a prepararse para los cambios de curva."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué el Smooth Pursuit es crucial en juegos de alto TTK como Apex Legends y Overwatch 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En títulos con prolongado Time-to-Kill, abatir a un rival requiere mantener fuego efectivo durante varios segundos mientras el enemigo maniobra o salta. Un seguimiento continuo ayuda a mantener el daño por segundo (DPS)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es una curva de Lissajous y por qué se emplea en este ejercicio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Las curvas de Lissajous son figuras armónicas bidimensionales generadas por oscilaciones sinusoidales en los ejes X e Y. Obligan a ajustar aceleración y desaceleración en ambos ejes a la vez, sin una trayectoria recta que memorizar."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo afectan los hercios del monitor y el polling rate del ratón al tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Una tasa de refresco mayor acorta el intervalo entre fotogramas (60 Hz ≈ 16,7 ms, 144 Hz ≈ 6,9 ms) y muestra las curvas con más detalle. Un polling rate de 1000 Hz actualiza la posición del ratón cada milisegundo aproximadamente. Aun así, la práctica y las diferencias individuales suelen pesar más que el equipo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué agarre de ratón proporciona mayor estabilidad en el tracking prolongado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los agarres tipo Palm o Claw relajados proporcionan un apoyo equilibrado sobre el chasis del ratón, permitiendo que los grupos musculares del antebrazo y hombro guíen el movimiento sin cargar tensiones en la articulación de la muñeca."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia se debe practicar el seguimiento suave de puntería?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se recomienda practicar entre 10 y 15 minutos diarios antes de iniciar sesiones clasificatorias. Dado el alto nivel de concentración sensoriomotora, descansos breves previenen la fatiga de los tendones del antebrazo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué perder contacto con la diana reinicia el combo en este entrenador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El multiplicador premia el contacto ininterrumpido. Sobre el objetivo ganas 50 puntos base cada 0,25 s (multiplicados por el combo y el nivel) y +0,1 s de reloj (máximo 60 s); cada segundo sin perderlo suma 1 al combo, hasta 3,0×. Si pasas 1 s seguido fuera del objetivo, el combo vuelve a 0. La ronda empieza con 45 s."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Entrenar el Tracking Suave y Seguimiento en Curva",
    "description": "Guía práctica para sincronizar velocidad de retícula y eliminar temblores en trayectorias armónicas.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Configuración y Bloqueo de Puntero",
        "text": "Ajusta el multiplicador de sensibilidad en la configuración de /drills y pulsa iniciar; el puntero se bloquea (Pointer Lock) al terminar la cuenta atrás."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fijación Inicial en el Blanco",
        "text": "Al aparecer la esfera móvil, alinea la retícula suavemente sin tirones bruscos de la mano."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Deslizamiento Guiado por el Antebrazo",
        "text": "Conduce el ratón desde el antebrazo siguiendo la curva de Lissajous con presión ligera y velocidad constante."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Sostén del Multiplicador de Combo",
        "text": "Mantén la retícula firme sobre la esfera durante las aceleraciones para alcanzar multiplicadores de puntuación elevados."
      }
    ]
  };

  const copyEs = {
    h1Keyword: "Smooth Tracking",
    h1Suffix: ": Seguimiento Suave en FPS",
    statScore: "Puntuación",
    statTime: "Tiempo",
    statAccuracy: "Precisión",
    statBestScore: "Récord",
    pausedTitle: "Juego Pausado",
    pausedSubtitle: "Haz clic en la pantalla para reactivar el bloqueo de cursor.",
    startTitle: "Smooth Tracking",
    startSubtitle: "Curvas de Lissajous • Pointer Lock • Progresión Continua",
    getReady: "PREPÁRATE",
    stageCaption: "Sigue continuamente el objetivo en movimiento oscilatorio por las curvas de la pantalla sin perder contacto visual.",
    rulesTitle: "Instrucciones de Entrenamiento y Puntuación",
    rulesItems: [
      { num: "1", text: "Seguimiento en Objetivo", highlight: "+50 PTS / 0,25s (+0,4s/s)", result: "×Multiplicador Combo" },
      { num: "2", text: "1s Sin Perderlo", highlight: "Combo +1, hasta 3,0×", result: "Multiplicador Máx" },
      { num: "3", text: "Subida de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Curvas Adaptativas" },
      { num: "4", text: "Pérdida de Contacto", highlight: "1,0s seguido fuera", result: "Reinicio Combo" }
    ],
    aboutTitle: "Sobre el smooth tracking",
    aboutHeading: "¿Qué es el Seguimiento Suave (Smooth Pursuit)?",
    aboutText: "El seguimiento suave (Smooth Pursuit) es la facultad oculomotora de mantener el foco visual sobre un objeto en movimiento continuo mediante la modulación de velocidad de los músculos oculares y el antebrazo (Krauzlis, 2004; Barnes, 2008). Este ejercicio erradica micro flicks innecesarios transformando tu puntería en un trazo fluido y constante."
  };

  const smoothPursuitGuide = {
    heading: "Smooth Tracking: guía de seguimiento suave en FPS",
    intro: [
      "El smooth tracking es mantener la retícula sobre un objetivo móvil sin movimientos bruscos. Este drill desliza un objetivo redondo por curvas de Lissajous y mide el porcentaje de tiempo con la mira encima, como práctica de seguimiento suave para Apex, Overwatch 2 y otros FPS de TTK largo.",
      "A diferencia de los flicks balísticos gobernados por la Ley de Fitts (1954), el seguimiento suave involucra estructuras corticales especializadas en el área temporal medial (MT/V5) y en el cerebelo (Krauzlis, 2004; Lisberger et al., 1987). Estos centros procesan vectores ópticos continuos y calibran el tono neuromuscular para igualar la velocidad del blanco.",
      "La cinemática del ejercicio emplea trayectorias armónicas de Lissajous generadas por funciones sinusoidales en ambos ejes. Esta configuración imposibilita patrones lineales previsibles y estimula el control predictivo (Barnes, 2008) sin provocar sobresaltos sacádicos intermitentes.",
      "Mediante la integración de la API Pointer Lock y cronometría de alta resolución con performance.now() (Woods et al., 2015), la aplicación registra el tiempo de permanencia en la diana para que sigas tu regularidad entre sesiones.",
      "Cómo se mide: el porcentaje de permanencia y la estabilidad del cursor se registran localmente en tiempo real. Diferencias menores a 5 ms corresponden a tolerancias naturales de refresco de pantalla y muestreo del sensor."
    ],
    benchmarks: {
      title: "Smooth tracking: franjas de práctica SkillDrills",
      headers: ["Franja", "Tiempo en Diana (%)", "Lo que se suele ver", "Qué practicar"],
      rows: [
        ["Franja 1", "85% – 95%+", "La mira sigue en el objetivo incluso en las inflexiones", "Mantener el porcentaje en niveles altos"],
        ["Franja 2", "72% – 85%", "Frena junto al objetivo en los vértices", "No quedarse atrás en el tramo central rápido"],
        ["Franja 3", "58% – 72%", "Estable en tramos rectos, pierde el objetivo un instante en las inversiones", "Reducir antes del vértice"],
        ["Franja 4", "42% – 58%", "Micro flicks en vez de deslizar; temblor por rigidez", "Soltar el agarre y guiar desde el antebrazo"],
        ["Franja 5", "Menos de 42%", "La mira va siempre detrás, con correcciones grandes", "Aprender a quedarse sobre el objetivo en los primeros niveles"]
      ],
      note: "El tiempo en diana es la fracción de fotogramas con la retícula sobre el objetivo. Franjas de práctica de SkillDrills para autoevaluarte, no rangos de juego, normas de investigación ni estadísticas de usuarios."
    },
    techniques: {
      title: "Cuatro claves para un seguimiento suave",
      items: [
        {
          name: "Deslizamiento con el Antebrazo y Muñeca Neutra",
          desc: "Ejecuta la mayor parte del recorrido continuo moviendo el antebrazo desde el codo, conservando la muñeca relajada para evitar micro frenados provocados por fricción estática.",
          tips: "Apoya cómodamente el antebrazo sobre el escritorio para mantener un plano de movimiento estable en curvas amplias."
        },
        {
          name: "Anticipación Visual Foveal (Gaze Leading)",
          desc: "Mira al objetivo y a la dirección de la curva, no a tu retícula, para anticipar mejor los cambios de velocidad.",
          tips: "No fijes la vista en tu propia retícula; concéntrate en el borde frontal del blanco en movimiento."
        },
        {
          name: "Modulación Suave en Puntos de Inflexión",
          desc: "En los vértices de la curva donde la diana reduce su marcha para cambiar de sentido, no frenes bruscamente. Disminuye la velocidad gradualmente e invierte el desplazamiento con suavidad.",
          tips: "Visualiza la trayectoria como un flujo armónico continuo y no como segmentos angulados independientes."
        },
        {
          name: "Presión Uniforme sobre la Alfombrilla",
          desc: "Aplica una presión descendente suave y constante para mantener una resistencia cinética homogénea en la base del ratón durante todo el trayecto.",
          tips: "Una alfombrilla con textura equilibrada y baja fricción estática previene tirones al inicio de curvaturas pronunciadas."
        }
      ]
    },
    steps: [
      "Ajusta el multiplicador de sensibilidad en la configuración de /drills y pulsa iniciar; el cursor se bloquea tras la cuenta atrás.",
      "Al generarse la esfera en movimiento, acopla la retícula al centro con un movimiento gradual.",
      "Acompaña la trayectoria de Lissajous deslizando el antebrazo a la misma velocidad que describe la diana.",
      "Conserva la retícula sobre el objetivo para prolongar el multiplicador de combo y superar niveles más veloces."
    ],
    audience: "Jugadores de Apex Legends, Overwatch 2 y The Finals orientados a erradicar temblores y afinar un seguimiento constante de alta precisión.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'barnes2008', 'krauzlis2004', 'lisberger1987'),
    related: [
      { href: "/es/drills/fps/anti-zigzag-movement-trainer", label: "Entrenador de Movimiento Anti-Zigzag" },
      { href: "/es/drills/fps/anti-strafe-jitter-duel", label: "Tracking contra Strafe ADAD" },
      { href: "/es/drills/fps/strafe-tracking", label: "Tracking de Strafe: puntería en movimiento" },
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
      { href: "/es/drills/fps/micro-correction-precision", label: "Micro Corrección de Puntería" }
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

      <ProSmoothPursuitClient copy={copyEs} />

      <DrillGuide guide={smoothPursuitGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
