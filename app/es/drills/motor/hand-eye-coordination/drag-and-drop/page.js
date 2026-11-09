import DragAndDropClient from '@/app/drills/motor/hand-eye-coordination/drag-and-drop/DragAndDropClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Prueba de arrastrar y soltar con el ratón | SkillDrills',
  description: 'Prueba de arrastrar y soltar gratis: durante 45 segundos agarra la bola con el ratón y suéltala dentro de un contenedor móvil. Mide precisión, combo y nivel.',
  keywords: [
    'prueba de arrastrar y soltar', 'juego de arrastrar y soltar con el ratón', 'arrastrar y soltar', 'prueba de arrastre del ratón',
    'test de arrastre', 'entrenamiento de arrastre', 'arrastre del ratón online', 'control del cursor',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Prueba de arrastrar y soltar con el ratón | SkillDrills',
    description: 'Prueba de arrastrar y soltar gratis: durante 45 segundos agarra la bola con el ratón y suéltala dentro de un contenedor móvil. Mide precisión, combo y nivel.',
    type: 'article',
    url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Prueba de arrastrar y soltar con el ratón | SkillDrills',
    description: 'Prueba de arrastrar y soltar gratis: durante 45 segundos agarra la bola con el ratón y suéltala dentro de un contenedor móvil. Mide precisión, combo y nivel.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/drag-and-drop'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SkillDrills Inicio',
      item: 'https://skilldrills.online/es',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Entrenamiento Motor',
      item: 'https://skilldrills.online/es/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Coordinación Ojo-Mano',
      item: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Entrenador de Drag and Drop',
      item: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Drag_and_drop", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Test de Drag and Drop y Precisión con Ratón',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Prueba de arrastrar y soltar gratuita en el navegador: agarra la bola, arrástrala y suéltala dentro de un contenedor móvil.',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Entrenador de Drag and Drop',
  browserRequirements: 'Requiere HTML5 Canvas y soporte para JavaScript',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Juego de Precisión Drag and Drop',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop',
  description: 'Juego de arrastrar y soltar con el ratón: lleva la bola a un contenedor móvil y suéltala dentro, en 45 segundos.',
  genre: ['Precisión', 'Coordinación Motora', 'Esports'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'es-ES',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué mide el entrenador de Drag and Drop con ratón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Durante 45 segundos agarras una bola con el botón izquierdo, la arrastras hasta un contenedor redondo que se mueve y la sueltas dentro. El resultado muestra puntuación, precisión (porcentaje de entregas logradas), número de entregas, combo máximo y nivel alcanzado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué arrastrar es más exigente que hacer clic simple?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mantener el botón pulsado exige tensión continua en el dedo índice y limita las microcorrecciones de la muñeca. MacKenzie et al. (1991) mostraron que arrastrar es claramente más lento y produce más errores que solo apuntar al mismo objetivo con el mismo dispositivo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué establece la Ley de Pilotaje de Accot-Zhai (Steering Law)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulada en 1997 por Accot y Zhai, demuestra que el tiempo para recorrer un túnel estrecho es proporcional a su longitud dividida por su anchura: un túnel la mitad de ancho tarda aproximadamente el doble.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo evitar sobrepasar (overshoot) el contenedor móvil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empieza a frenar un poco antes del contenedor, apuntando a su trayectoria y no a su posición actual, y suelta cuando la bola esté dentro. Soltar fuera cuenta como fallo y reinicia el combo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tipo de agarre del ratón es más eficaz para arrastrar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El agarre de palma (palm grip) brinda mayor estabilidad y consistencia de fricción para líneas rectas, mientras que el agarre de garra (claw grip) facilita microcorrecciones verticales rápidas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Ayuda este ejercicio en videojuegos competitivos de FPS y MOBA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutamente. En shooters tácticos y battle royales (Apex Legends, Warzone), acelera el saqueo de inventarios y cambio de armaduras. En MOBAs y RTS, mejora la selección de unidades en recuadro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué beneficia este test a diseñadores gráficos y editores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Editores de vídeo y diseñadores CAD arrastran miles de fotogramas clave y manejadores bezier al día. El gesto es el mismo, pero este drill es un ejercicio de control del ratón, no una prevención de lesiones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se calculan la precisión y las rachas de combo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La precisión es el porcentaje de entregas logradas sobre el total de soltados. Cada entrega vale 100 puntos × multiplicador de combo (hasta 3,0x) × bono de nivel. El nivel sube cada 250 puntos (más niveles extra por cada 4 de combo): bola y contenedor se reducen y el contenedor acelera. La partida dura 45 segundos y requiere ratón con bloqueo de puntero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué ajustes de hardware optimizan la precisión de arrastre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desactive la aceleración en Windows, configure entre 800 y 1600 DPI, emplee una alfombrilla de tela con fricción controlada y sondeo de 1000 Hz o superior.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo de práctica diaria se aconseja para fijar la memoria motora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unas pocas partidas de 45 segundos al día bastan como rutina; para si notas molestias en la muñeca. Compara tus resultados con tus propias partidas anteriores en el mismo equipo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  name: 'Protocolo de entrenamiento de precisión en drag and drop',
  description: 'Entrenamiento sistemático para perfeccionar desaceleración de cursor, arrastre estable y soltado certero.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Posicione el cursor sobre el orbe de origen',
      text: 'Sitúe el puntero del ratón exactamente sobre el nodo marcado en el lienzo.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Presione y mantenga con tensión controlada',
      text: 'Accione el clic izquierdo con fuerza mínima constante para fijar el objeto sin agarrotar la muñeca.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Desplace el objeto en trayectoria directa',
      text: 'Lleve el orbe hacia la zona del contenedor reduciendo oscilaciones laterales y curvas innecesarias.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Suelte con precisión dentro de los límites',
      text: 'Suelte el botón cuando la bola esté dentro del contenedor: cuenta como entrega y suma 100 puntos × combo.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/drag-and-drop#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'mackenzie1991', 'fitts1954', 'elliott2010', 'woods2015'),
  intro: {
    title: 'Biomecánica del Arrastre, Dirección de Cursor y Frenado Sensoriomotor',
    paragraphs: [
      'Esta prueba de arrastrar y soltar entrena el control del ratón en movimiento continuo. En la interacción persona-ordenador, la operación continua de arrastrar y soltar (drag and drop) impone una exigencia neuromuscular muy superior a la del simple apuntar y cliquear. Mientras que el apuntamiento discreto se rige por la Ley de Fitts (Fitts, 1954), arrastrar requiere una co-contracción isométrica prolongada de los flexores digitales mientras se coordina la traslación multiaxial del brazo sobre la superficie de apoyo.',
      'MacKenzie, Sellen y Buxton (1991) mostraron que arrastrar es claramente más lento y produce más errores que solo apuntar al mismo objetivo con el mismo dispositivo. El botón pulsado limita los ajustes finos de dedos y muñeca.',
      'Posteriormente, Johnny Accot y Shumin Zhai (1997) desarrollaron la Ley de Pilotaje (Steering Law) para modelar movimientos en trayectorias acotadas. En arrastres dinámicos, el usuario debe equilibrar la aceleración inicial con un frenado antagonista oportuno (Elliott et al., 2010), amortiguando el impulso para no sobrepasar el límite del receptáculo.',
      'Cómo funciona: 45 segundos para agarrar la bola, arrastrarla y soltarla dentro del contenedor móvil. La tasa de refresco del monitor y el sondeo del ratón cambian la sensación (Woods et al., 2015), así que compárate sobre todo con tus partidas anteriores en el mismo equipo. SkillDrills almacena tus datos solo en tu navegador.',
    ],
  },
  benchmarks: {
    title: 'Bandas de práctica de la prueba de arrastrar y soltar (SkillDrills)',
    caption: 'Bandas de práctica de SkillDrills: no son normas científicas ni estadísticas de usuarios, sino referencias del autor del drill para interpretar tu nivel, combo y precisión. SkillDrills no recopila datos de usuarios.',
    headers: ['Nivel (Tier)', 'Clasificación', 'Fase / Racha Combo', 'Porcentaje de Acierto', 'Perfil de juego'],
    rows: [
      [
        'Tier 1',
        'Élite / Diseñador Pro',
        'Nv. 12–15 (Combo > 18x)',
        '≥ 98,0%',
        'Frenado suave incluso con contenedores rápidos, casi ningún soltado fuera.',
      ],
      [
        'Tier 2',
        'Avanzado / Competitivo',
        'Nv. 9–11 (Combo 12–17x)',
        '94,0%–97,9%',
        'Desaceleración controlada, contenedores pequeños acertados con microajustes cortos.',
      ],
      [
        'Tier 3',
        'Competente / Intermedio',
        'Nv. 6–8 (Combo 7–11x)',
        '87,0%–93,9%',
        'Ligeras desviaciones en fase de aceleración con desaceleración tardía antes del marco del contenedor.',
      ],
      [
        'Tier 4',
        'Inicial / En Desarrollo',
        'Nv. 3–5 (Combo 3–6x)',
        '78,0%–86,9%',
        'Múltiples impulsos bruscos, rigidez en los dedos con rozamiento excesivo y fallos en el borde.',
      ],
      [
        'Tier 5',
        'Principiante / Base',
        'Nv. 1–2 (Combo < 3x)',
        '< 78,0%',
        'Desplazamiento lento y soltados frecuentes fuera de zona.',
      ],
    ],
  },
  protocols: {
    title: 'Protocolos de Entrenamiento para Precisión con el Ratón',
    items: [
      {
        title: 'Protocolo 1: Estabilización de la Fuerza Isométrica (Niveles 1–4)',
        description: 'Enfóquese en aplicar únicamente la fuerza mínima indispensable para no perder el clic durante el movimiento. La presión excesiva agarrota la muñeca y causa temblores.',
      },
      {
        title: 'Protocolo 2: Calibración del Túnel de Pilotaje Accot-Zhai (Niveles 5–8)',
        description: 'Reduzca la desviación lateral entre el origen y el destino. Trace mentalmente una línea recta que conecte ambos puntos y elimine oscilaciones en curva innecesarias.',
      },
      {
        title: 'Protocolo 3: Frenado Antagonista y Soltado Oportuno (Niveles 9–12)',
        description: 'Empiece a frenar poco antes del contenedor móvil para detener el movimiento dentro de él y luego suelte.',
      },
      {
        title: 'Protocolo 4: Intercepción Dinámica con Ángulo de Adelanto (Niveles 13–15)',
        description: 'A altas velocidades, anticipe la coordenada de intercepción del contenedor en vez de perseguir su posición instantánea, soltando con fluidez en su trayectoria futura.',
      },
    ],
  },
  faqs: {
    title: 'Preguntas Frecuentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyEs = {
  title: "Prueba de arrastrar y soltar con el ratón",
  subtitle: "Arrastra la bola y suéltala en el contenedor móvil · 45 segundos",
  startButtonText: "INICIAR DRILL",
  playAgainText: "Jugar de nuevo",
  shareText: "Compartir resultado",
  exitText: "Salir",
  accuracyLabel: "Precisión",
  targetDropsLabel: "Entregas en Blanco",
  maxComboLabel: "Combo Máximo",
  peakLevelLabel: "Nivel Máximo",
  rulesTitle: "Instrucciones del Drill y Sistema de Puntuación",
  rulesItems: [
    { num: "1", text: "Entrega en Blanco", highlight: "+100 PTS × Combo", result: "Arrastrar y soltar dentro del contenedor" },
    { num: "2", text: "Combo Continuo", highlight: "Hasta 3.0× Multiplicador", result: "Encadenar entregas exitosas seguidas" },
    { num: "3", text: "Progresión de Nivel", highlight: "+1 Nivel / 250 PTS", result: "Los contenedores se reducen y aceleran" },
    { num: "4", text: "Fallo o Expiración", highlight: "Reinicio de combo", result: "Soltar fuera reinicia el multiplicador" }
  ],
};

export default function DragAndDropPage() {
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
      <DragAndDropClient copy={copyEs} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
