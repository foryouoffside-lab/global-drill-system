import SteadyHandClient from '@/app/drills/motor/precision-control/steady-hand/SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Juego del Pulso Online | Test de Mano Firme | SkillDrills',
  description: 'Juego del pulso online gratis: lleva el cursor por la línea iluminada hasta la meta sin salirte. Cada racha vuelve el trazado más sinuoso. Entrena la mano firme.',
  keywords: [
    'juego del pulso online', 'test de mano firme', 'precisión del cursor',
    'juego de pulso firme', 'control motor fino', 'mano firme',
    'juego de laberinto del ratón', 'control del cursor', 'entrenamiento de precisión',
    'estabilidad de la mano', 'juego del pulso',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Juego del Pulso Online | Test de Mano Firme | SkillDrills',
    description: 'Juego del pulso online gratis: lleva el cursor por la línea iluminada hasta la meta sin salirte. Cada racha vuelve el trazado más sinuoso. Entrena la mano firme.',
    type: 'article',
    url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Juego del Pulso Online | Test de Mano Firme | SkillDrills',
    description: 'Juego del pulso online gratis: lleva el cursor por la línea iluminada hasta la meta sin salirte. Cada racha vuelve el trazado más sinuoso. Entrena la mano firme.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Entrenamiento Motor', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Control de Precisión', item: 'https://skilldrills.online/es/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Juego del Pulso', item: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'es-ES',
  name: 'Juego del Pulso Online – Test de Mano Firme',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Juego del pulso gratuito para navegador. Desviarte más de 2,5 píxeles de la línea central te devuelve al inicio, y cada vuelta en racha hace más sinuoso el siguiente trazado.',
  url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'es-ES',
  name: 'Juego del Pulso Online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno con HTML5 Canvas y Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'es-ES',
  name: 'Juego del Pulso y Precisión Motora',
  url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand',
  description: 'Juego de habilidad para practicar el pulso y la precisión de trazado con el ratón.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el Juego del Pulso y qué entrena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el Juego del Pulso llevas el cursor desde la zona de salida a la izquierda hasta la meta a la derecha siguiendo una línea iluminada y serpenteante, sin salirte. No mide reflejos: entrena un control lento y estable del ratón con corrección visual continua. La puntuación son las vueltas completadas antes de que se agote el reloj de 45 segundos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué ley científica describe el movimiento del ratón en pasillos estrechos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El desplazamiento por túneles restringidos está determinado por la Ley de Dirección de Accot-Zhai (1997), una extensión de la Ley de Fitts para tareas de navegación. La ley indica que el tiempo de recorrido es proporcional a la integral de la distancia dividida por el ancho del pasillo: a menor anchura, menor debe ser la velocidad para no salirse.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué se reinicia el cursor al inicio al rozar la pared?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En cada fotograma el motor calcula la distancia entre el cursor y la línea central. Entre la salida y la meta, un desvío de más de 2,5 píxeles cuenta como toque: el cursor vuelve al inicio, los fallos suben 1 y la racha vuelve a 0. El reloj sigue corriendo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo aumenta la dificultad en cada vuelta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tolerancia (±2,5 píxeles alrededor de la línea) nunca cambia. Lo que cambia es el trazado: con cada vuelta completada en racha, el siguiente recorrido tiene más segmentos (de 15 hasta 120) y oscilaciones verticales más amplias. Un toque pone la racha a 0 y el trazado siguiente vuelve a ser suave. Cada vuelta completada reinicia el reloj a 45 segundos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué causa el temblor de la mano al realizar movimientos de precisión?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El temblor fisiológico habitual (8–12 Hz) se debe a la sincronización de las unidades motoras y la resonancia mecánica de las extremidades. Sujetar el ratón con demasiada fuerza (cocontracción muscular), el estrés o la cafeína incrementan este temblor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor agarre de ratón y la sensibilidad DPI adecuada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un agarre fingertip o claw relajado permite combinar el deslizamiento del antebrazo con sutiles microajustes de los dedos. Una sensibilidad de 400 a 800 DPI filtra eficazmente las oscilaciones involuntarias en comparación con sensibilidades altas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo explica el modelo de Woodworth (1899) el seguimiento de rutas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robert S. Woodworth demostró que un movimiento orientado consta de un impulso balístico inicial seguido de una fase de control continuo basada en retroalimentación visual. En el Juego del Pulso, este control en bucle cerrado permite corregir el rumbo antes de tocar el borde.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Resulta útil este entrenamiento para dibujantes y jugadores de FPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El gesto se parece al entintado digital y a la puntería de seguimiento en shooters, donde el puntero debe mantenerse en una trayectoria estrecha. La mejora varía de una persona a otra y el juego no es una prueba médica de temblor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evitar el cansancio muscular y la tensión en la muñeca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mantén el codo apoyado a unos 90 grados y no ejerzas presión hacia abajo contra la alfombrilla. Exhala de forma consciente antes de entrar en curvas cerradas para aflojar los hombros y realiza pausas cortas cada 5 minutos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede jugar con trackball o pantalla táctil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En ordenador el juego lee el movimiento del ratón mediante Pointer Lock, así que funcionan ratón y trackball. En dispositivos solo táctiles se arrastra el dedo. Los lápices de tableta gráfica se comportan distinto según el equipo. Compara resultados en el mismo dispositivo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  name: 'Cómo entrenar el pulso y la precisión con el ratón',
  description: 'Protocolo de entrenamiento para recorrer trazados cada vez más sinuosos y dominar la Ley de Accot-Zhai.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand#step-1',
      name: 'Colocar el cursor en la zona de inicio',
      text: 'Haz clic en „Iniciar Drill“. Tras una cuenta atrás de 3 segundos, el cursor aparece en la zona verde de salida a la izquierda y arranca el temporizador de 45 segundos. En PC el puntero se bloquea (Pointer Lock); Esc sale.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand#step-2',
      name: 'Mantener una velocidad fluida y continua',
      text: 'Avanza con soltura por el sendero iluminado equilibrando rapidez y exactitud para no agotar el tiempo disponible.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand#step-3',
      name: 'Anticipar giros cerrados y frenar con antelación',
      text: 'Reduce la marcha un 40% antes de llegar a curvas cerradas y fija la mirada 20 o 30 píxeles por delante del cursor.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand#step-4',
      name: 'Entrar en la meta para la siguiente vuelta',
      text: 'Alcanza la zona de llegada verde a la derecha para completar la vuelta. El reloj vuelve a 45 segundos y, cuanto más larga sea tu racha, más sinuoso será el siguiente trazado.',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: 'Cómo se mide el pulso y la estabilidad manual',
    paragraphs: [
      'El juego del pulso online funciona como el clásico de feria: llevas el cursor por una línea iluminada hasta la meta y cualquier desvío te devuelve al inicio. Cuentan las vueltas que completes antes de que se agote el reloj de 45 segundos. No es una prueba médica de temblor.',
      'Precisión de la medición y consideraciones técnicas: El registro del tiempo proviene del reloj performance.now() del navegador, limitado a aproximadamente 1 ms por motivos de seguridad. La pantalla muestra los fotogramas según su tasa de refresco — unos 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz (Woods et al., 2015). La tasa de sondeo del ratón aporta unos 8 ms a 125 Hz frente a 1 ms a 1000 Hz. Cualquier variación inferior a 5 ms debe considerarse ruido experimental. SkillDrills guarda tus puntuaciones únicamente en tu navegador.',
    ],
  },
  benchmark: {
    title: 'Juego del Pulso: niveles de práctica SkillDrills',
    description: 'Niveles de práctica SkillDrills para comparar tus propias sesiones; no son normas de investigación ni datos de usuarios. Siguen la nota de la pantalla de resultados: vueltas completadas y toques en una sesión.',
    columns: ['Nota', 'Rango', 'Vueltas', 'Toques', 'Nivel'],
    rows: [
      { tier: 'S+', rank: 'Estabilidad de gran maestro', stat: '8+ vueltas', errors: '0', band: 'Nivel de práctica SkillDrills' },
      { tier: 'S', rank: 'Conducción de maestro', stat: '6+ vueltas', errors: 'máx. 1', band: 'Nivel de práctica SkillDrills' },
      { tier: 'A', rank: 'Control preciso', stat: '4+ vueltas', errors: 'máx. 2', band: 'Nivel de práctica SkillDrills' },
      { tier: 'B', rank: 'Buen pulso', stat: '2+ vueltas', errors: 'sin límite', band: 'Nivel de práctica SkillDrills' },
      { tier: 'C', rank: 'Control básico', stat: 'menos de 2 vueltas', errors: 'sin límite', band: 'Nivel de práctica SkillDrills' },
    ],
  },
  protocols: {
    title: 'Protocolos de Entrenamiento para Mejorar el Pulso',
    description: 'Directrices prácticas para un movimiento más calmado y trazados sinuosos.',
    items: [
      {
        title: 'Protocolo 1: Regulación de Velocidad por Accot-Zhai (Ritmo en Pasillos)',
        description: 'Según la Ley de Accot-Zhai (1997), el tiempo para cruzar un túnel crece con su longitud y baja con su anchura. Aprovecha los tramos suaves para ganar segundos y frena claramente antes de los quiebres bruscos del trazado.',
      },
      {
        title: 'Protocolo 2: Enfoque Visual Anticipado de Woodworth',
        description: 'Dirige tu vista unos 20 o 30 píxeles por delante del puntero. Esta anticipación otorga a la corteza motora unos 150 ms de margen para computar correcciones antes de rozar la pared.',
      },
      {
        title: 'Protocolo 3: Atenuación del Temblor Fisiológico (8–12 Hz) y Postura',
        description: 'Traza las curvas amplias con el antebrazo y utiliza los dedos exclusivamente para microcorrecciones. Evita apretar el ratón con demasiada fuerza, ya que la tensión excesiva incrementa el temblor.',
      },
      {
        title: 'Protocolo 4: Trazado por el Vértice en Curvas Cerradas',
        description: 'Cuando la racha crece y el trazado se llena de zigzags, prioriza el centro de la línea sobre la rapidez. Apuntar ligeramente al interior de la curva reduce la deriva del cursor hacia fuera.',
      },
    ],
  },
  faqs: {
    title: 'Preguntas Frecuentes sobre el Juego del Pulso y Control del Ratón',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const esCopy = {
  h1Keyword: 'Juego del Pulso Online',
  h1Suffix: ' (Test de Mano Firme)',
  subtitle: 'Lleva el cursor por la línea iluminada hasta la meta sin salirte',
  caption: 'El Juego del Pulso entrena la firmeza de tu mano y tu precisión motora fina: guía el cursor por una línea iluminada sin salirte. Basado en la Ley de Accot-Zhai (1997) y en el control en bucle cerrado de Woodworth (1899).',
  statLaps: 'Vueltas',
  statTime: 'Tiempo Restante',
  statStreak: 'Racha',
  statBest: 'Récord',
  pausedTitle: 'Pausado',
  pausedPrompt: 'Haz clic en la pantalla para fijar el cursor y reanudar.',
  startTitle: 'Circuito del Pulso',
  startSubtitle: 'Mano firme y precisión del trazado • 45 s',
  startBtn: 'Iniciar Drill',
  countdownSubtitle: 'PREPÁRATE',
  newBest: 'NUEVO RÉCORD',
  errorsLabel: 'Toques con la Pared',
  maxStreakLabel: 'Mejor Racha',
  difficultyLabel: 'Nivel Alcanzado',
  trainAgain: 'Repetir Intento',
  shareTitle: 'Compartir Puntuación',
  exitTitle: 'Salir y Volver',
  rulesTitle: 'Instrucciones y Sistema de Puntos',
  rulesItems: [
    { num: '1', text: 'Sigue el sendero esmeralda', highlight: 'iluminado con precisión', result: 'Llegar a la meta reinicia a 45s' },
    { num: '2', text: 'Vuelta completada', highlight: 'Escalado continuo', result: 'Más quiebres y oscilación' },
    { num: '3', text: 'Toque de pared', highlight: 'Reinicio al comienzo', result: 'Fallo +1, racha a 0' },
    { num: '4', text: 'Ratón (Pointer Lock)', highlight: 'Táctil compatible', result: 'Esc para salir' },
  ],
  rule1Text: 'Sigue el sendero esmeralda',
  rule1Highlight: 'iluminado con precisión',
  rule1Result: 'Llegar a la meta reinicia a 45s',
  rule2Text: 'Vuelta completada',
  rule2Highlight: 'Escalado continuo',
  rule2Result: 'Más quiebres y oscilación',
  rule3Text: 'Toque de pared',
  rule3Highlight: 'Reinicio al comienzo',
  rule3Result: 'Fallo +1, racha a 0',
  rule4Text: 'Ratón (Pointer Lock)',
  rule4Highlight: 'Táctil compatible',
  rule4Result: 'Esc para salir',
  aboutTitle: 'Acerca del Juego del Pulso',
  aboutHeading: 'Trazado Continuo de Trayectorias y Control del Temblor',
  aboutP1: 'El Juego del Pulso es una herramienta de entrenamiento diseñada para perfeccionar la coordinación mano-ojo, la motricidad fina de los dedos y la estabilidad del puntero. Seguir una línea estrecha que se vuelve más sinuosa en cada racha exige pequeñas correcciones de muñeca y antebrazo.',
  aboutP2: 'Siguiendo la Ley de Accot & Zhai (1997), el tiempo necesario para cruzar un túnel aumenta al reducirse el ancho. Aquí la tolerancia se mantiene en ±2,5 px, pero el trazado gana zigzags en cada racha y exige una corrección visual permanente (Woodworth, 1899).',
  aboutCard1Title: 'Público Recomendado',
  aboutCard1Text: 'Jugadores de FPS/MOBA, diseñadores digitales y cualquier persona que quiera un cursor más estable.',
  aboutCard2Title: 'Beneficios Motores',
  aboutCard2Text: 'Coordinación motriz fina, control del pulso, dosificación de la velocidad en giros y prevención de contracturas.',
  aboutCard3Title: 'Trazado cada vez más sinuoso',
  aboutCard3Text: 'La tolerancia (±2,5 px) no cambia; cada vuelta en racha añade quiebres y oscilación al siguiente trazado.',
  gradeLabels: {
    'S+': 'Pulso de Cirujano (Grandmaster)',
    'S': 'Control Maestro (Master)',
    'A': 'Puntería Fina (Diamond)',
    'B': 'Buena Estabilidad (Platinum)',
    'C': 'Superación Básica (Gold)',
  },
  shareDrillName: 'Juego del Pulso',
  shareUrl: 'https://skilldrills.online/es/drills/motor/precision-control/steady-hand',
  shareTextTemplate: '🖐️ ¡He superado {laps} vueltas en el {drillName} con una precisión de {acc}! Pruébalo gratis en skilldrills.online',
  copiedAlert: '¡Puntuación copiada al portapapeles!',
};

export default function SpanishSteadyHandPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <SteadyHandClient copy={esCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
