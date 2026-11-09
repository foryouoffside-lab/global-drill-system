import AngleHoldClient from '@/app/drills/fps/angle-hold-trainer/AngleHoldClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Colocación de Mira: Mantener el Ángulo en FPS | SkillDrills",
  description: "Colocación de mira gratis: mantén el ángulo a la altura de la cabeza y haz clic cuando el objetivo asome. Separación y reacción al peek (Valorant, CS2).",
  keywords: [
    "colocación de mira",
    "colocacion de mira entrenamiento",
    "crosshair placement",
    "mantener el ángulo",
    "como aguantar angulos valorant",
    "entrenamiento de pre aim cs2",
    "ventaja del peeker como defender",
    "entrenar aguantar angulo fps",
    "distancia de la mira a la pared",
    "mira a la altura de la cabeza",
    "entrenamiento de reflejos para esquinas"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/fps/angle-hold-trainer",
    languages: getAlternateLanguages('/drills/fps/angle-hold-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Colocación de Mira: Mantener el Ángulo en FPS | SkillDrills",
    description: "Colocación de mira gratis: mantén el ángulo a la altura de la cabeza y haz clic cuando el objetivo asome. Separación y reacción al peek (Valorant, CS2).",
    url: "https://skilldrills.online/es/drills/fps/angle-hold-trainer",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Colocación de Mira: Mantener el Ángulo en FPS | SkillDrills",
    description: "Colocación de mira gratis: mantén el ángulo a la altura de la cabeza y haz clic cuando el objetivo asome. Separación y reacción al peek (Valorant, CS2).",
  },
};

export default function SpanishAngleHoldPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Drills de FPS", "item": "https://skilldrills.online/es/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Colocación de mira - mantener el ángulo", "item": "https://skilldrills.online/es/drills/fps/angle-hold-trainer" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Colocación de mira - mantener el ángulo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Entrenador en línea de colocación de mira, retención defensiva de esquinas y pre-aiming para shooters tácticos.",
    "genre": "Entrenamiento FPS / Colocación de Mira",
    "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Colocación de mira - mantener el ángulo",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Simulador interactivo de retención de ángulos y disciplina de disparo para contrarrestar el peeker's advantage en CS2 y Valorant.",
    "genre": "Entrenamiento FPS / Colocación de Mira",
    "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer",
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
    "name": "Colocación de mira - mantener el ángulo",
    "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer",
    "description": "Entrenador interactivo de reflejos y colocación de retícula en esquinas para shooters competitivos.",
    "gamePlatform": "Web Browser",
    "genre": ["Entrenamiento de FPS", "Entrenador de Puntería"],
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
        "name": "¿Qué es la colocación de la mira (crosshair placement)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es la mecánica táctica básica de mantener el retículo siempre a la altura de la cabeza y en el punto exacto donde asomará el adversario, evitando tener que realizar flicks reactivos al verlo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo funciona este drill de colocación de mira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Al empezar se activan la pantalla completa y el Pointer Lock, y el reloj arranca en 45 segundos. Los objetivos asoman por el borde izquierdo o derecho de la pared a una altura aleatoria y vuelven a esconderse. Cada impacto vale 100 puntos multiplicados por el combo y el nivel y suma 2 segundos (máximo 60). Cada 1400 puntos sube el nivel: los asomos duran menos y los objetivos son más pequeños, y en niveles altos aparecen asomos falsos naranjas. Fallar, disparar sin objetivo o disparar a un asomo falso reinicia el combo y resta 1 segundo. La partida termina cuando el tiempo llega a 0."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué es la ventaja del peeker (peeker's advantage) en shooters tácticos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es el desfase de latencia de red cliente-servidor. El atacante que asoma una esquina envía sus paquetes antes de que el defensor estático los reciba, otorgando al peeker una pequeña ventaja cuya duración depende del ping, el tickrate y la interpolación."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo aguantan ángulos los jugadores competitivos de CS2 y Valorant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Colocando el retículo ligeramente separado del borde de la pared. Este hueco absorbe el tiempo de reacción humano y la velocidad de desplazamiento, permitiendo un clic limpio en cuanto el rival entra en la mira."
        }
      },
      {
        "@type": "Question",
        "name": "¿A qué distancia de la pared debe colocarse la mira al defender una esquina?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Varía según la velocidad prevista del atacante: ante asomos abiertos a máxima velocidad, separa más la mira. Ante jiggles cortos o aperturas lentas en shift, acércala al borde de la pared."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué provoca disparar antes de tiempo (prefire accidental) al aguantar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La ansiedad anticipatoria y fallar en la discriminación cognitiva Go/No-Go ante fintas o cebos. En este drill, en niveles altos aparecen asomos falsos naranjas muy breves y dispararles cuenta como prefire. Así practicas disparar únicamente cuando el objetivo se muestra de verdad."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué se diferencia aguantar un ángulo de hacer jiggle peek?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aguantar un ángulo es una posición defensiva pasiva basada en velocidad de reacción pura. Hacer jiggle peek es un movimiento activo con strafes A-D para sacar información o forzar tiros sin arriesgarse."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es la fórmula de red que define la ventaja del peeker?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La ecuación es: T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. La demora equivale a la mitad del ping de ambos jugadores sumada al búfer de interpolación del servidor."
        }
      },
      {
        "@type": "Question",
        "name": "¿Afectan los hercios del monitor a la reacción al aguantar ángulos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí. Un monitor a 240 Hz refresca fotogramas cada 4,17 ms frente a los 16,67 ms de una pantalla a 60 Hz, lo que muestra de media antes el primer fotograma del rival; la ganancia no supera la diferencia entre los intervalos de fotograma."
        }
      },
      {
        "@type": "Question",
        "name": "¿Con qué frecuencia se debe entrenar la colocación de la mira?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay una regla fija. Sesiones de 10 a 15 minutos antes de jugar, junto con deathmatch, son un formato razonable. Compara tu tiempo de reacción medio y tu precisión en el mismo equipo a lo largo de los días."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo captura este simulador el movimiento del ratón?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usa la API HTML5 Pointer Lock para leer el movimiento relativo del ratón y registra los clics con performance.now(). No solicita entrada sin aceleración, así que los ajustes de puntero del sistema pueden seguir aplicándose. Necesitas un ratón; el drill no arranca en dispositivos solo táctiles."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Practicar la Colocación de Mira y Retención de Ángulos",
    "description": "Pasos detallados para calibrar la altura de la retícula, distancia a la pared y contrarrestar el peeker's advantage.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Calibra la separación de la mira respecto a la pared",
        "text": "Sitúa el retículo ligeramente despegado de la esquina para dejar el margen que exige tu tiempo de reacción.",
        "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fija la mira exactamente a la altura de la cabeza",
        "text": "Alinea la retícula con marcas del entorno a nivel de la cabeza para acertar sin tener que hacer microcorrecciones.",
        "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Anticipa la velocidad de carrera del oponente",
        "text": "Amplía la separación ante asomos abiertos en carrera y redúcela si esperas asomos lentos o precavidos.",
        "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Dispara en cuanto el objetivo entre en la retícula",
        "text": "Confía en tu pre-aim y haz un clic inmediato al cruzar el blanco la retícula, sin intentar flicks secundarios.",
        "url": "https://skilldrills.online/es/drills/fps/angle-hold-trainer#step-4"
      }
    ]
  };

  const angleHoldGuideEs = {
    heading: "Colocación de mira: mantener el ángulo en FPS",
    intro: [
      "Este drill de colocación de mira practica mantener el retículo a la altura de la cabeza antes de que el rival asome por la esquina. Los objetivos aparecen en el borde izquierdo o derecho de una pared y haces clic en cuanto entran en el retículo: separación de la pared, mantener el ángulo y reacción al peek, para jugadores de Valorant y CS2.",
      "En redes multijugador el retardo de paquetes causa el conocido peeker's advantage: T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. Para neutralizar esta desventaja, el defensor debe separar la mira de la pared en D_offset = v_peeker × T_reaccion, permitiendo que el rival entre en el retículo justo cuando se ejecuta el clic.",
      "La precisión motora responde a la Ley de Fitts (Fitts, 1954): cada microcorrección de última hora cuesta tiempo. Angle Hold Pro registra los clics con performance.now(); la frecuencia de la pantalla y el sondeo del ratón de tu equipo siguen influyendo en los valores, y los asomos falsos añaden una decisión Go/No-Go (Hick, 1952; Woods et al., 2015).",
      "Medición de rendimiento: cada impacto y tiempo de respuesta se calcula de forma local con reloj de alta resolución. Conserva la misma sensibilidad y espacio físico en la alfombrilla entre sesiones para asentar patrones reflejos consistentes."
    ],
    benchmarks: {
      title: "Referencias de reacción y red al mantener el ángulo",
      headers: ["Fase / Métrica", "Referencia (ms)", "Factor", "Lectura"],
      rows: [
        ["Reacción visual simple", "aprox. 200 – 250 ms (rango de investigación)", "Ver el estímulo y hacer clic", "Reacción simple a un estímulo esperado (Woods et al., 2015)"],
        ["Reacción de discriminación (asomo falso / jiggle)", "unas decenas de ms más", "Decisión Go/No-Go", "Más alternativas, reacción más lenta (Hick, 1952)"],
        ["Peeker's advantage", "varía según servidor y ping", "RTT cliente-servidor + buffer de interpolación", "Ventaja de red del atacante en movimiento"],
        ["Separación estable de la pared", "referencia", "Retículo a la altura de la cabeza delante del borde antes del asomo", "Compara tus propios valores en el mismo dispositivo"]
      ],
      note: "Valores orientativos basados en rangos generales de la investigación sobre tiempo de reacción (Donders, 1868; Hick, 1952; Woods et al., 2015); no son estadísticas de usuarios ni rangos competitivos. Los tiempos varían según los hercios de la pantalla, la tasa de sondeo del ratón y el nivel de concentración."
    },
    techniques: {
      title: "Geometría de Colocación y Directrices para Aguantar Ángulos",
      items: [
        {
          name: "Calibración del Margen respecto a la Esquina",
          desc: "No pegues la mira al borde de la pared. Deja una separación horizontal proporcional a tus reflejos: más amplia contra asomos rápidos en carrera y más ceñida ante asomos lentos.",
          tips: "Si los rivales suelen rebasar tu mira antes de que dispares, ensancha un poco el margen; si disparas antes de tiempo y fallas, acércalo."
        },
        {
          name: "Disciplina Horizontal a la Altura de la Cabeza",
          desc: "Fija la elevación de la mira usando referencias del mapa como cajas, marcos de puertas o marcas de pared alineadas con la cabeza a distancias habituales.",
          tips: "Evita que la mano se relaje hacia abajo haciendo caer la mira al suelo en ángulos pasivos."
        },
        {
          name: "La Regla 'Haz Clic, No Corrijas'",
          desc: "Al aguantar un ángulo con pre-aim calibrado, comprométete a hacer clic en cuanto el rival entre en el retículo, sin intentar microflicks, que añaden un movimiento de corrección y, por tanto, retraso.",
          tips: "Confía en tu colocación y centra la mirada un poco por delante del retículo."
        },
        {
          name: "Posicionamiento en Off-Angles",
          desc: "Las esquinas habituales reciben disparos anticipados (prefires). Da medio paso hacia posiciones atípicas para descolocar el pre-aim rival manteniendo tu ángulo de tiro.",
          tips: "Planea siempre una vía de escape segura antes de tomar un off-angle arriesgado."
        }
      ]
    },
    steps: [
      "Haz clic en Iniciar para activar la pantalla completa y bloquear el cursor.",
      "Apunta a la esquina prevista a la altura de la cabeza, ajustando la separación respecto al muro.",
      "Mantén la mano firme con una tensión suave para evitar temblores por anticipación.",
      "En el instante en que el objetivo cruce la línea del retículo, haz un único clic inmediato.",
      "Monitorea tu latencia media de reacción (ms) y disciplina de disparo en las diferentes rondas."
    ],
    audience: "Jugadores de CS2, Valorant y Rainbow Six Siege que buscan perfeccionar su colocación de mira, disciplina de gatillo y reflejos de retención en esquinas.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'woodworth1899'),
    related: [
      { href: "/es/drills/fps/flick-shot-training", label: "Entrenamiento de Flick Shot" },
      { href: "/es/drills/fps/180-degree-awareness", label: "Entrenamiento de Giro 180°" },
      { href: "/es/drills/fps/micro-correction-precision", label: "Entrenamiento de Microcorrección" },
      { href: "/es/drills/visual/reaction-speed/light-reaction", label: "Test de Tiempo de Reacción" }
    ]
  };

  const copyEs = {
    h1Prefix: null,
    bottomCaption: "Mantén la mira fija en la esquina y haz clic en cuanto aparezca el objetivo.",
    h1Keyword: "Colocación de mira",
    h1Suffix: " — mantener el ángulo en FPS",
    aboutIntro: [
      "Este drill de colocación de mira (crosshair placement) entrena mantener el ángulo: retículo a la altura de la cabeza junto al borde de una pared y clic en cuanto asoma un objetivo. Es para jugadores de Valorant y CS2 que quieren aguantar ángulos con disciplina, y al final muestra el tiempo de reacción medio, la precisión, el combo y el nivel.",
      "Cada asomo sale por la izquierda o la derecha a una altura aleatoria, así que no se puede memorizar un ritmo. Al subir de nivel, los asomos duran menos y los objetivos son más pequeños, y los asomos falsos naranjas castigan los clics precipitados. El drill no reproduce el código de red ni el ranking de un juego real: úsalo como complemento de entrenamiento."
    ],
    subtitle: "Entrenamiento de Retención de Esquinas y Defensa contra Peeker's Advantage",
    rulesItems: [
      { num: "1", text: "Impacto en Objetivo", highlight: "+100 PTS (+2s, máx. 60s)", result: "×Multiplicador" },
      { num: "2", text: "Spawns en Esquinas", highlight: "Borde izquierdo/derecho de la pared", result: "Más breve y más pequeño" },
      { num: "3", text: "Progresión de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Escalado Adaptativo" },
      { num: "4", text: "Fallo / Prefire / Asomo Falso", highlight: "Penalización", result: "Reinicio Combo (-1s)" }
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "Recomendado para", text: "Defensores de zonas en Valorant, anclajes de CS2, jugadores de R6 Siege y quienes quieran dominar esquinas con disciplina." },
      { iconBg: "bg-orange-600", title: "Habilidades Entrenadas", text: "Calibración de distancia a la esquina, disciplina de gatillo frente a fintas, tiempo de reacción y consistencia de altura de cabeza." },
      { iconBg: "bg-purple-600", title: "Detección de Asomos Falsos", text: "Los niveles altos añaden asomos falsos naranjas muy breves. Entrena el juicio Go/No-Go para disparar solo ante avances confirmados." }
    ],
    aboutSections: [
      {
        title: "Separación Óptima de la Pared (Geometría de Offset)",
        paragraphs: [
          "El fallo más común al aguantar un ángulo es pegar la mira al borde de la pared. Dado que hay un tiempo de reacción entre ver y hacer clic, un rival que asoma en carrera sobrepasará la mira pegada antes de que puedas disparar.",
          "Al dejar una separación horizontal entre la esquina y el retículo (D_offset = v_peeker × T_reacción), el enemigo entra exactamente en el punto donde se activa tu disparo, sin requerir microflicks desesperados."
        ]
      },
      {
        title: "Compensar el Peeker's Advantage",
        paragraphs: [
          "Por la latencia de red (RTT), el atacante en carrera ve al defensor quieto un poco antes, según el ping y el servidor. Esta desventaja se puede atenuar abriendo más la mira de la pared para absorber la velocidad transversal del adversario."
        ]
      },
      {
        title: "Metodología de Medición y Precisión",
        paragraphs: [
          "Angle Hold Pro emplea la API HTML5 Pointer Lock y marcas temporales de performance.now() para registrar latencias de clic con la resolución temporal del navegador (~1 ms)."
        ]
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

      <AngleHoldClient copy={copyEs} />

      <RelatedDrills />

      <DrillGuide guide={angleHoldGuideEs} />
      <DrillFooter />
    </>
  );
}
