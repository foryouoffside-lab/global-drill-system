import FineMotorClient from '@/app/drills/motor/precision-control/tracing/TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/tracing-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Test de seguimiento del ratón | Trazado | SkillDrills',
  description: 'Test de seguimiento del ratón gratis: mantén el cursor 45 segundos sobre una onda cada vez más rápida y entrena la precisión del trazado y el control motor.',
  keywords: [
    'test de seguimiento del ratón', 'seguir una línea con el ratón', 'juego de trazado con ratón',
    'prueba de trazado y precisión', 'seguimiento de cursor', 'control motor fino',
    'seguir la ruta con el cursor', 'precisión del trazado', 'juego de seguir la línea',
    'coordinación visomotora', 'trazado de onda con ratón',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test de seguimiento del ratón | Trazado | SkillDrills',
    description: 'Test de seguimiento del ratón gratis: mantén el cursor 45 segundos sobre una onda cada vez más rápida y entrena la precisión del trazado y el control motor.',
    type: 'article',
    url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test de seguimiento del ratón | Trazado | SkillDrills',
    description: 'Test de seguimiento del ratón gratis: mantén el cursor 45 segundos sobre una onda cada vez más rápida y entrena la precisión del trazado y el control motor.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Entrenamiento Motor', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Control de Precisión', item: 'https://skilldrills.online/es/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Juego de Trazado', item: 'https://skilldrills.online/es/drills/motor/precision-control/tracing' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'es-ES',
  name: 'Juego de Trazado con Ratón – Test de Precisión Motora',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Test de seguimiento del ratón: mantén el cursor sobre una onda que se desplaza. Los puntos solo suman mientras el cursor está a 22 píxeles o menos por encima o por debajo de la línea.',
  url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'es-ES',
  name: 'Juego de Seguimiento Continuo Online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno con HTML5 Canvas y Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'es-ES',
  name: 'Entrenamiento de Trazado y Fluidez con Ratón',
  url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing',
  description: 'Juego de precisión en el que mantienes el cursor sobre una onda en movimiento durante 45 segundos.',
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
      name: '¿Qué es este test de seguimiento del ratón y cómo se puntúa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mantienes el cursor durante 45 segundos sobre una onda que se desplaza de derecha a izquierda. Mientras el cursor esté a 22 píxeles o menos de la línea (por encima o por debajo), sumas 1 punto por fotograma, +5 cada 4 segundos sin interrupción y +10 al volver a la línea tras salirte.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué la onda avanza de forma continua sin esperar al usuario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El desplazamiento permanente exige una acción cinemática constante. A diferencia de las pruebas estáticas, no permite pausas para reajustar el pulso; requiere anticipación visual continua y microcorrecciones inmediatas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la Integridad de Flujo (Flow Integrity) y cómo se calcula?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Integridad de Flujo (0–100 %) empieza en 100 %. Sube un 15 % por segundo mientras el cursor está en la línea (±22 px), gana un 10 % con cada bonus de 4 segundos y baja un 25 % por segundo fuera de la línea. La nota final depende de su valor al terminar la sesión. Salirte no resta puntos ya ganados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evolucionan la velocidad y la amplitud a lo largo del ejercicio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La onda empieza a 2,2 px por fotograma y acelera de forma continua hasta 3,8 px por fotograma a los 45 segundos. La amplitud principal pasa de 90 a 125 px y una ondulación secundaria de 8 a 32 px, lo que hace la curva más alta e irregular.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué principios científicos sustentan el seguimiento continuo de rutas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se fundamenta en la Ley de Dirección de Accot-Zhai (1997) y en el modelo motor de Woodworth (1899), operando bajo un bucle cerrado continuo donde la visión ajusta la trayectoria cada 150–200 ms.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencian el seguimiento ocular suave y los movimientos sacádicos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como demostraron Krauzlis (2004) y Rashbass (1961), el seguimiento suave empareja la velocidad del estímulo de forma continua, mientras que las sacadas son saltos rápidos. Al salirse de la línea, la corteza visual ejecuta una sacada de alcance y desacelera para reenganchar el trazado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿De qué manera beneficia este entrenamiento en videojuegos competitivos de disparos (FPS)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los títulos con tiempo de eliminación alto (TTK) requieren mantener la mira sobre rivales en movimiento. Este ejercicio practica un gesto parecido: deslizamiento regular del antebrazo y cambios de sentido. Cuánto se transfiere al juego varía según la persona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué sensibilidad y DPI son más recomendables?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sensibilidades medias a bajas (800 DPI con 25–45 cm/360°) brindan mayor solidez física e involucran el antebrazo, atenuando el temblor involuntario. Es conveniente configurar el ratón a una tasa de sondeo de 1000 Hz.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evitar sobrecargas musculares y fatiga en la mano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No presiones el ratón con excesiva fuerza contra la alfombrilla. Utiliza un agarre relajado tipo fingertip o claw, desliza desde el codo en desplazamientos amplios y reserva los dedos para ajustes milimétricos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede entrenar con trackball o pantalla táctil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En ordenador el test lee el movimiento del ratón mediante Pointer Lock, así que funcionan ratón y trackball. En dispositivos solo táctiles se arrastra el dedo. Los lápices de tableta gráfica se comportan distinto según el equipo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  name: 'Cómo entrenar el trazado y el seguimiento continuo con ratón',
  description: 'Protocolo metódico para mantenerte más tiempo sobre la onda.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Situar el cursor en el punto inicial',
      text: 'Tras la cuenta atrás de 3 segundos, el puntero se bloquea (en táctil, usa el dedo) y aparece a un cuarto del ancho de la pantalla. Llévalo enseguida a la onda. Esc sale.',
      url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Emparejar la velocidad y el recorrido de la onda',
      text: 'Desplaza el ratón de forma uniforme sobre el filamento mientras recorre la pantalla a velocidad constante.',
      url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Atenuar sacudidas involuntarias y microtemblores',
      text: 'Afirma el antebrazo sin tensionar los dedos y mira unos 20 píxeles por delante del cursor.',
      url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Comprobar puntuación e Integridad de Flujo',
      text: 'Al acabar los 45 segundos, revisa tu puntuación, tu racha más larga de fotogramas en la línea y la Integridad de Flujo al final de la sesión.',
      url: 'https://skilldrills.online/es/drills/motor/precision-control/tracing#step-4'
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Cómo se evalúa el seguimiento continuo',
    paragraphs: [
      'Este test de seguimiento del ratón te pide mantener el cursor sobre una onda que avanza de derecha a izquierda durante 45 segundos, cada vez más rápida y más alta. Los puntos se acumulan fotograma a fotograma mientras sigas la ruta con el cursor.',
      'Precisión de la medición y consideraciones técnicas: El registro del tiempo proviene del reloj performance.now() del navegador (~1 ms por seguridad). La pantalla refresca las imágenes según su frecuencia nativa — unos 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz (Woods et al., 2015). El muestreo del ratón aporta ~8 ms a 125 Hz frente a 1 ms a 1000 Hz. Variaciones menores a 5 ms representan ruido técnico. SkillDrills no almacena datos en servidores externos.',
    ],
  },
  benchmark: {
    title: 'Test de seguimiento del ratón: niveles de práctica SkillDrills',
    description: 'Niveles de práctica SkillDrills, no normas de investigación ni datos de usuarios. Siguen la nota de la pantalla de resultados (Integridad de Flujo al final de la sesión y puntuación). La puntuación es 1 punto por fotograma: los monitores con más hercios suman más, así que compara en el mismo dispositivo.',
    columns: ['Nota', 'Rango', 'Flujo al final', 'Condición de puntos', 'Nivel'],
    rows: [
      { tier: 'S+', rank: 'Flujo de gran maestro', flow: '90 % o más', score: '1.400 puntos o más', band: 'Nivel de práctica SkillDrills' },
      { tier: 'S', rank: 'Flujo máximo', flow: '80 % o más', score: '-', band: 'Nivel de práctica SkillDrills' },
      { tier: 'A', rank: 'Seguimiento fijado', flow: '60 % o más', score: '-', band: 'Nivel de práctica SkillDrills' },
      { tier: 'B', rank: 'Seguimiento estable', flow: '35 % o más', score: '-', band: 'Nivel de práctica SkillDrills' },
      { tier: 'C', rank: 'Trazado completado', flow: 'menos de 35 %', score: '-', band: 'Nivel de práctica SkillDrills' },
    ],
  },
  protocols: {
    title: 'Protocolos de Entrenamiento para Seguimiento Continuo',
    description: 'Instrucciones para seguir la onda con la vista y asentar el pulso.',
    items: [
      {
        title: 'Protocolo 1: Enfoque Anticipado y Seguimiento Feedforward (Krauzlis 2004)',
        description: 'Fija la mirada entre 15 y 25 píxeles por delante de la onda en lugar de hacerlo directamente sobre el cursor. Esto permite a la corteza premotora prever la aceleración en las curvas antes de los puntos de inflexión.',
      },
      {
        title: 'Protocolo 2: Seguimiento de Doble Modo de Rashbass (1961)',
        description: 'Si sales del canal de 22 px, efectúa una corrección sacádica rápida y relaja la musculatura de inmediato para retomar el seguimiento suave, evitando rebotes erráticos con los bordes.',
      },
      {
        title: 'Protocolo 3: Modulación de Curvatura de Accot-Zhai (Crestas y Valles)',
        description: 'Según la Ley de Accot-Zhai (1997), las crestas y valles demandan velocidades tangenciales menores que los tramos planos. Modula levemente la velocidad en las zonas de curva para no derrapar.',
      },
      {
        title: 'Protocolo 4: Apoyo de Antebrazo y Reducción de la Fricción',
        description: 'Apoya el antebrazo sin clavar la muñeca en el escritorio. Pivota desde el codo para abarcar las oscilaciones sinusoidales y reserva los dedos para microajustes de 1–2 px.',
      },
    ],
  },
  faqs: {
    title: 'Preguntas Frequentes sobre Trazado de Ratón y Seguimiento de Ondas',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const esCopy = {
  title: "Test de Seguimiento del Ratón",
  subtitle: "Seguimiento continuo • 45 s",
  startButtonText: "Comenzar Entrenamiento",
  startBtn: "Comenzar Entrenamiento",
  trainAgain: "Entrenar de Nuevo",
  shareTitle: "Compartir Puntuación",
  exitTitle: "Salir",
  statFlowScore: "Puntos de Flujo",
  statTimeLeft: "Tiempo Restante",
  statFlowIntegrity: "Integridad de Flujo",
  statBestScore: "Mejor Puntuación",
  maxStreakLabel: "Racha Máxima de Frames",
  peakFlowLabel: "Flujo al Final de la Sesión",
  bestScoreLabel: "Récord Personal",
  rulesTitle: "Instrucciones del Ejercicio y Sistema de Puntos",
  rulesItems: [
    { num: "1", text: "Trazar Trayectoria", highlight: "Onda Esmeralda", result: "+1 PT / frame dentro de ruta" },
    { num: "2", text: "Velocidad Progresiva", highlight: "Onda Dinámica", result: "2.2 → 3.8 px/f en 45s" },
    { num: "3", text: "Integridad de Flujo", highlight: "Súper Flujo", result: "4s seguidos otorgan +5 Bonus" },
    { num: "4", text: "Salida de la línea", highlight: "Tolerancia ±22 px", result: "Racha a 0, el flujo baja" }
  ],
};

export default function SpanishTracingPage() {
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
      <FineMotorClient copy={esCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
