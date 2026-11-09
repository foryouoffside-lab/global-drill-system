import VerticalAirTrackClient from '@/app/drills/fps/vertical-air-track/VerticalAirTrackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Puntería Vertical: Tracking Aéreo FPS | SkillDrills',
  description: 'Puntería vertical gratis en el navegador: mantén el clic sobre blancos aéreos que suben y caen en parábola y practica tracking aéreo en el eje Y para Apex y Overwatch 2.',
  keywords: [
    'puntería vertical FPS',
    'tracking aéreo',
    'rastreo aéreo shooter',
    'seguimiento vertical Apex',
    'control del eje Y',
    'vertical aim trainer',
    'puntería parabólica Overwatch',
    'smooth pursuit vertical',
    'precisión vertical FPS',
    'sensibilidad de ratón vertical',
    'ejercicios de puntería'
  ],
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/fps/vertical-air-track',
    languages: getAlternateLanguages('/drills/fps/vertical-air-track'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Puntería Vertical: Tracking Aéreo FPS | SkillDrills',
    description: 'Puntería vertical gratis en el navegador: mantén el clic sobre blancos aéreos que suben y caen en parábola y practica tracking aéreo en el eje Y para Apex y Overwatch 2.',
    url: 'https://skilldrills.online/es/drills/fps/vertical-air-track',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Puntería Vertical: Tracking Aéreo FPS | SkillDrills',
    description: 'Puntería vertical gratis en el navegador: mantén el clic sobre blancos aéreos que suben y caen en parábola y practica tracking aéreo en el eje Y para Apex y Overwatch 2.',
  },
};

export default function VerticalAirTrackEsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamientos FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Puntería Vertical FPS", "item": "https://skilldrills.online/es/drills/fps/vertical-air-track" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Puntería Vertical - Tracking Aéreo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Any (Web Browser)",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Entrenador en línea gratuito de puntería vertical y seguimiento de blancos aéreos bajo aceleración gravitatoria para shooters de alta movilidad."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Puntería Vertical - Tracking Aéreo",
    "url": "https://skilldrills.online/es/drills/fps/vertical-air-track",
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
    "name": "Puntería Vertical - Tracking Aéreo",
    "description": "Simulador de blancos aéreos en arco parabólico para perfeccionar la sincronización motora en el eje Y y anticipación de caídas.",
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
        "name": "¿Qué es el entrenamiento de puntería vertical en juegos FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Se enfoca en el movimiento del ratón en el eje Y (vertical), un plano motriz poco practicado respecto al horizontal. Es indispensable para seguir objetivos en salto o caída en Apex Legends y Overwatch 2."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es el popcorn tracking y cómo lo desarrolla este simulador?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es el seguimiento continuo de blancos que rebotan en arcos parabólicos en el aire. El ejercicio entrena la velocidad angular constante y la predicción de la aceleración por gravedad en el vértice."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo beneficia la puntería vertical en Apex Legends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Apex Legends cuenta con trampolines de Octane, ascensores de Horizon y tirolinas de Pathfinder. Este ejercicio aísla el seguimiento de esas trayectorias en el eje Y para repetirlo por separado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es un 'elevator peek' en shooters competitivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ocurre cuando un rival asciende por una cuerda o desnivel de terreno para asomarse repentinamente sobre tu retícula. El ejercicio entrena a seguir blancos que salen desde abajo de la pantalla y cambian de altura de golpe."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué el rastreo vertical es biomecánicamente más exigente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El movimiento horizontal utiliza la rotación fluida del codo y flexión de muñeca. El movimiento vertical exige extensión forzada de muñeca o deslizar el antebrazo superando la fricción estática de la alfombrilla."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo entrenan los jugadores de Overwatch 2 contra héroes voladores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Practican el seguimiento continuo sobre Pharah, Echo, Mercy o saltos de Winston y Doomfist, igualando la velocidad en el eje Y sin dar tirones. Este ejercicio reproduce ese tipo de seguimiento vertical, no las hitboxes ni los movimientos exactos del juego."
        }
      },
      {
        "@type": "Question",
        "name": "¿Tiene impacto el entrenamiento vertical en Halo Infinite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, Halo Infinite incluye cañones de impulsión, saltos de repulsor y ganchos. El ejercicio trabaja el seguimiento vertical de un blanco en el aire; funciona con el clic mantenido y no reproduce las ráfagas del Battle Rifle."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo se penalizan los fallos en Vertical Air-Track?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mientras mantienes el clic izquierdo con la mira dentro del blanco, este pierde vida (100); en 0 se destruye. Cada destrucción da 100 puntos más bonus de altura (+25/+50/+75 por encima del 25 %/50 %/75 % de la altura de pantalla), multiplicados por combo y nivel, y suma 2 s al reloj (máx. 60 s). El reloj empieza en 45 s. Si un blanco sale por la parte inferior de la pantalla, se reinicia el combo y pierdes 1 s (con la opción Timeout desactivada, rebota). Salirte del blanco un instante no rompe el combo, pero baja el porcentaje de tracking. Cada 1.400 puntos sube el nivel: más gravedad y esquivas, blancos más pequeños y, desde el nivel 5, dos blancos a la vez."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia se debe practicar la puntería vertical?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay cifra mágica; sesiones de 10 a 15 minutos, 3 a 4 veces por semana, son un buen ritmo. Sigue tu porcentaje de tracking y el nivel alcanzado con el mismo equipo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Este ejercicio de puntería vertical es gratis?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, es gratis y funciona en un navegador de PC sin descargas ni registro. Necesitas ratón: al empezar, el cursor se bloquea (Pointer Lock), y Esc o la pérdida del bloqueo terminan la sesión. No funciona en dispositivos solo táctiles."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Entrenar Puntería Vertical y Rastreo Aéreo en el Navegador",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sincronizar Sensibilidad y Bloquear el Cursor",
        "text": "Ajusta la sensibilidad global en la página /drills (1,00x = 30 cm/360) y pulsa Iniciar para bloquear el cursor."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Interceptar el Despegue del Blanco",
        "text": "Sitúa la retícula en la trayectoria ascendente del objetivo nada más ser lanzado."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Seguir la Desaceleración en el Vértice",
        "text": "Modera la velocidad de arrastre en el punto más alto del arco, donde la velocidad vertical se reduce a cero."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Acelerar en la Caída Libre por Gravedad",
        "text": "Tira firmemente hacia abajo con el ratón para acompañar la aceleración gravitacional (g = 9.81 m/s²)."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Mantener la Racha y Subir de Nivel",
        "text": "Destruye los blancos en lo alto de la pantalla para el bonus de altura (hasta +75) y antes de que salgan por abajo."
      }
    ]
  };

  const verticalAirTrackGuide = {
    heading: "Puntería Vertical: tracking aéreo y eje Y",
    intro: [
      "Este ejercicio gratis de puntería vertical funciona en el navegador: los blancos aéreos se lanzan desde la parte inferior de la pantalla, esquivan en el aire (saltos, dashes laterales, picados) y caen por la gravedad. Mantienes el clic izquierdo y sigues el blanco en el eje Y hasta destruirlo. La precisión es la parte del tiempo de disparo en que la mira está sobre un blanco. Un calentamiento de tracking aéreo para Apex Legends y Overwatch 2.",
      "La neurobiología del seguimiento visual de persecución vertical difiere sustancialmente del plano horizontal. Krauzlis (2004) señala que el seguimiento suave (smooth pursuit) es preciso hasta unos 30°/s, y Rashbass (1961) probó que el smooth pursuit está impulsado por el error de velocidad retiniana (retinal slip) y no por un simple error de posición estática, exigiendo una igualación continua de la velocidad visual.",
      "Seguir y abatir entidades suspendidas en el aire exige internalizar la física de la aceleración gravitatoria (g = 9,81 m/s²). Land & McLeod (2000) muestran que los interceptores expertos predicen dónde estará el blanco en lugar de perseguirlo, y anticipan la deceleración de la trayectoria parabólica en la cúspide (ápice) del salto y su subsiguiente aceleración durante el descenso. Los jugadores que no anticipan esta curvatura cinemática sufren un desfase constante, quedando rezagados al rastrear caídas libres.",
      "Los blancos también tienen velocidad lateral y dashes, pero lo principal del movimiento es el eje Y: subida, vértice y caída. Si sueles entrenar tracking horizontal, este ejercicio cubre la parte vertical.",
      "Cómo se mide el rendimiento: cada evento e interacción se registra directamente con el reloj de alta resolución performance.now() del navegador, ejecutándose de forma estrictamente local en tu dispositivo — ninguna puntuación se envía al exterior. Dos variables físicas no pueden controlarse: los temporizadores web sufren una atenuación deliberada para mitigar vulnerabilidades Spectre (típicamente a 1 ms) y los monitores cuantizan la señal al intervalo de su tasa de refresco — unos 16,7 ms por cuadro a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz (Woods et al., 2015). El polling rate del ratón añade unos 8 ms a 125 Hz frente a 1 ms a 1000 Hz. Por ello, las variaciones menores a 5 ms constituyen ruido de medición y conviene comparar series de rendimiento en el mismo equipo."
    ],
    benchmarks: {
      title: "Niveles de práctica SkillDrills: porcentaje de tracking",
      headers: ["Nivel", "Porcentaje de tracking", "Perfil típico"],
      rows: [
        ["Nivel 1", "> 82 %", "Transición suave en el vértice; las esquivas apenas sacan la mira del blanco"],
        ["Nivel 2", "70 % – 82 %", "Seguimiento estable; leves dudas tras una esquiva"],
        ["Nivel 3", "58 % – 70 %", "Sólido en la subida; pierde el blanco en la caída acelerada"],
        ["Nivel 4", "45 % – 58 %", "Micro-flicks espasmódicos en lugar de un movimiento continuo en el eje Y"],
        ["Nivel 5", "< 45 %", "Muñeca rígida; la mira se queda por detrás de los blancos en caída"]
      ],
      note: "Porcentaje de tracking = parte del tiempo con el clic mantenido en que la mira está sobre un blanco. Niveles propios de SkillDrills, no normas científicas, estadísticas de usuarios ni rangos de juegos."
    },
    techniques: {
      title: "Protocolos Clínicos para Maximizar la Puntería Vertical",
      items: [
        {
          name: "Sincronización de Velocidad Retiniana en el Eje Y",
          desc: "Concéntrate en calcar la velocidad angular del blanco en lugar de ejecutar múltiples micro-flicks correctivos (Rashbass, 1961; Krauzlis, 2004).",
          tips: "Fija la mirada en el centro del blanco aéreo y desplaza la mano de forma fluida y sin frenazos."
        },
        {
          name: "Anticipación del Vértice Parabólico",
          desc: "Modera la velocidad de arrastre antes de que el objetivo llegue a la cúspide y prepárate para tirar hacia abajo (Land & McLeod, 2000).",
          tips: "Aprovecha la ralentización en la cima del salto para asegurar la bonificación de altura (+75 PTS) antes de la caída."
        },
        {
          name: "Articulación Mixta: Dedos y Antebrazo",
          desc: "En agarres claw o fingertip, contrae y estira los dedos para ajustar pequeños ángulos verticales sin desplazar la muñeca.",
          tips: "Para desplazamientos largos por la pantalla, mueve el antebrazo sin clavar el codo en la mesa."
        },
        {
          name: "Control de Fricción Estática Vertical",
          desc: "Evita apretar el ratón contra la alfombrilla, manteniendo una presión liviana y constante que facilite los cambios de sentido.",
          tips: "Si el ratón tropieza al ascender, disminuye la fuerza con la palma y limpia la superficie de deslizamiento."
        }
      ]
    },
    steps: [
      "Ajusta la sensibilidad global en la página /drills y pulsa Iniciar para bloquear el cursor.",
      "Detecta el lanzamiento del blanco e intercepta su trayectoria ascendente de inmediato.",
      "Sigue la curvatura parabólica manteniendo la retícula sobre el centro de la diana.",
      "Ajusta el ritmo al frenar en el vértice para cobrar el bonus de altura.",
      "Acelera hacia abajo durante la caída y vacía la vida del blanco antes de que salga por la parte inferior de la pantalla."
    ],
    audience: "Jugadores de Apex Legends, Overwatch 2, Halo y Destiny 2 que quieren practicar la puntería vertical contra blancos aéreos desde el navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'rashbass1961', 'land2000'),
    related: [
      { href: "/es/drills/fps/pro-smooth-pursuit", label: "Pro Smooth Pursuit" },
      { href: "/es/drills/fps/strafe-tracking", label: "Rastreo de Strafe" },
      { href: "/es/drills/fps/target-switching-swarm", label: "Target Switching Swarm" },
      { href: "/es/drills/fps/target-acquisition", label: "Adquisición de Objetivos FPS" },
      { href: "/es/drills/fps/flow-state", label: "Flow State" }
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

      <VerticalAirTrackClient
        copy={{
          h1Keyword: "Puntería Vertical",
          h1Suffix: ": Tracking Aéreo FPS",
          statScore: "Puntos",
          statTime: "Tiempo",
          statAccuracy: "Precisión",
          statBestScore: "Récord",
          statTargetsDestroyed: "Blancos Eliminados",
          statMaxCombo: "Combo Máximo",
          statPeakLevel: "Nivel Máximo",
          startTitle: "Vertical Air-Track",
          startSubtitle: "Pointer Lock • Progresión Dinámica de Niveles",
          startButtonText: "Iniciar Ejercicio",
          playAgainText: "Jugar de Nuevo",
          shareText: "Compartir Puntuación",
          exitText: "Salir",
          stageCaption: "Puntería vertical: mantén el clic sobre los blancos aéreos hasta vaciar su vida antes de que salgan por abajo.",
          rulesTitle: "Instrucciones del Ejercicio y Sistema de Puntos",
          aboutTitle: "Sobre la Puntería Vertical (Vertical Air-Track)",
          rulesItems: [
            {
              num: "1",
              text: "Rastrear Blanco Aéreo",
              highlight: "+100 PTS / +2s al destruir (máx. 60s)",
              result: "Sigue la curva parabólica de forma continua"
            },
            {
              num: "2",
              text: "Bono de Altura",
              highlight: "Hasta +75 PTS adicionales",
              result: "Elimina blancos cerca del vértice del salto"
            },
            {
              num: "3",
              text: "Regla de Penalización",
              highlight: "Reinicio de combo / -1s",
              result: "Cuando un blanco sale por abajo (opción Timeout)"
            },
            {
              num: "4",
              text: "Progresión de Nivel",
              highlight: "Cada 1.400 PTS +1 Nivel",
              result: "Más gravedad y esquivas, blancos más pequeños, 2 blancos desde el nivel 5"
            }
          ]
        }}
      />
      <DrillGuide guide={verticalAirTrackGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
