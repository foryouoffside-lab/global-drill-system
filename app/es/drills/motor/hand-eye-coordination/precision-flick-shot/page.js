import PrecisionFlickShotClient from '@/app/drills/motor/hand-eye-coordination/precision-flick-shot/PrecisionFlickShotClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Test de precisión del ratón: acierta en el centro | SkillDrills',
  description: 'Test de precisión del ratón gratis: acierta a dos objetivos que se encogen; el centro de 8 px vale el doble. Muestra precisión de clic, aciertos al centro y nivel.',
  keywords: [
    'test de precisión del ratón', 'test precision raton', 'precisión del ratón', 'precisión al centro del objetivo',
    'precisión de clic', 'test de ratón',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test de precisión del ratón: acierta en el centro | SkillDrills',
    description: 'Test de precisión del ratón gratis: acierta a dos objetivos que se encogen; el centro de 8 px vale el doble. Muestra precisión de clic, aciertos al centro y nivel.',
    type: 'article',
    url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test de precisión del ratón: acierta en el centro | SkillDrills',
    description: 'Test de precisión del ratón gratis: acierta a dos objetivos que se encogen; el centro de 8 px vale el doble. Muestra precisión de clic, aciertos al centro y nivel.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/precision-flick-shot'),
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
      name: 'Flick Shot de Precisión',
      item: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Test de precisión del ratón: acierta en el centro',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Test de precisión del ratón gratis en el navegador: acierta a objetivos que se encogen y cuenta tus aciertos al centro.',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Entrenador de Flick Shot',
  browserRequirements: 'Requiere HTML5 Canvas y compatibilidad con JavaScript',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Juego de precisión del ratón: acierta en el centro',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot',
  description: 'Acierta a objetivos que se encogen, a ser posible en pleno centro.',
  genre: ['Tiro', 'Reflejos', 'Esports'],
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
      name: '¿Qué es un flick shot en el entrenamiento de puntería?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es un movimiento de puntería rápido y balístico que traslada el cursor instantáneamente desde una posición neutra hasta la cabeza o centro del blanco.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué consiste el modelo de dos fases de Woodworth (1899)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plantea que los movimientos dirigidos comprenden un impulso balístico inicial (primario) seguido por una fase de control guiada por retroalimentación visual.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué es fundamental la deceleración o frenado del ratón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Porque sobrepasar el objetivo (overshoot) exige movimientos correctivos adicionales que demoran el disparo. La frenada firme ayuda a acertar a la primera.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué ventaja tiene la puntuación adicional por diana (bulls-eye)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Premiar con doble puntaje los aciertos en el centro de 8 píxeles obliga al sistema motor a reducir la dispersión en lugar de conformarse con clics en los bordes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se traslada este entrenamiento a juegos como CS2 y Valorant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los jugadores de Valorant o CS2 pueden usarlo para practicar la parada firme tras un flick. No garantiza mejoras en el juego; usa la misma sensibilidad que en tu juego.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo actuar cuando aparecen varios blancos a la vez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Siempre hay dos objetivos; ambos se encogen, pero el activo más rápido. Acierta primero al más pequeño. Si un objetivo desaparece, el combo se reinicia y se resta 1 segundo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la sensibilidad recomendada para entrenar flickeo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 800 DPI, una sensibilidad de 30 a 45 cm por giro completo de 360 grados ofrece la estabilidad óptima entre giros con el antebrazo y microajustes de muñeca.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se determinan las calificaciones y rangos de la prueba?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada acierto da puntos base (100, o 200 en el centro de 8 px) × combo (hasta 3,0x) × bono de nivel, más 2 segundos (máx. 60). Un clic fallado o un objetivo caducado cuesta 1 segundo y el combo. La calificación depende solo de la puntuación final; no se mide tiempo de adquisición.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué configuraciones técnicas favorecen la respuesta del ratón?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una pantalla de alta frecuencia, la opción de Windows "Mejorar la precisión del puntero" desactivada y un ratón ligero. Este test mide la precisión de tus clics, no ese ajuste de Windows.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo se recomienda entrenar antes de competir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unas pocas partidas como calentamiento antes de jugar bastan. Para si notas molestias en la muñeca y compárate con tus propias partidas anteriores.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  name: 'Cómo entrenar flick shots y precisión con el ratón',
  description: 'Metodología sistemática para dominar desplazamientos balísticos, acierto en la diana y frenada de cursor.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Ajuste la sensibilidad y fije la vista',
      text: 'Haga coincidir los parámetros con su videojuego habitual y centre la mirada en la retícula.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Detecte y priorice el objetivo emergente',
      text: 'Localice la diana y compruebe los anillos de caducidad para impactar primero en la más urgente.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Ejecute el snap balístico en un solo movimiento',
      text: 'Desplace el cursor decididamente hacia el centro del blanco sin titubeos ni paradas intermedias.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Frene con firmeza sobre la diana y dispare',
      text: 'Utilice la musculatura antagonista de la muñeca para anular la inercia antes de pulsar el clic.',
      url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/precision-flick-shot#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('meyer1988', 'fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Biomecánica de Micro-Flicks Balísticos y Optimización de Submovimientos',
    paragraphs: [
      'Este test de precisión del ratón te pide acertar a objetivos que se encogen, lo más cerca posible del centro. En el marco del deporte electrónico y la ergonomía de interfaces, el flick shot es una acción manual de alta velocidad y carácter discreto ejecutada bajo fuerte presión temporal. Robert S. Woodworth (1899) postuló que los movimientos orientados a un fin se gestionan mediante una arquitectura de control en dos fases: un impulso balístico inicial que proyecta la extremidad hacia la meta, y una fase de control continuo para el ajuste ocular.',
      'En su formulación matemática, David E. Meyer et al. (1988) desarrollaron el Modelo de Submovimientos Estocásticos Optimizados, probando que la acción motriz humana conlleva ruido neuromuscular correlacionado con la velocidad. Si se acelera en demasía, aumenta la dispersión del punto final. Fallar el área diana obliga a un submovimiento corrector adicional que cuesta tiempo.',
      'Para conseguir el rendimiento de puntería más alto (MacKenzie, 1992), el jugador debe modular la velocidad del impulso primario de tal modo que coincida con el blanco. La recompensa adicional en el centro (bulls-eye) estrecha la distribución de los impactos y perfecciona el control de frenada.',
      'El compromiso clásico entre distancia y tamaño responde a la Ley de Fitts (Fitts, 1954), con bases neuromotoras complementarias en Elliott et al. (2010).',
      'Cómo funciona: empieza con 45 segundos, +2 segundos por acierto (máx. 60), -1 segundo por clic fallado u objetivo caducado. Requiere ratón con bloqueo de puntero; los dispositivos solo táctiles no son compatibles. La frecuencia del monitor y el sondeo del ratón cambian la sensación (Woods et al., 2015). SkillDrills guarda tus puntuaciones solo en tu navegador.',
    ],
  },
  benchmarks: {
    title: 'Bandas de práctica del test de precisión del ratón (SkillDrills)',
    caption: 'Bandas de práctica de SkillDrills: no son normas científicas ni estadísticas de usuarios, sino referencias del autor del drill para interpretar nivel, combo, precisión de clic y tasa de aciertos al centro. SkillDrills no recopila datos de usuarios.',
    headers: ['Nivel (Tier)', 'Clasificación', 'Fase y Racha Combo', 'Precisión de Clic', 'Ratio Bulls-Eye', 'Perfil de juego'],
    rows: [
      [
        'Tier 1',
        'Maestro del Flick Apex',
        'Nv. 15+ (Combo > 20x)',
        '≥ 96,0%',
        '> 65%',
        'Un solo flick llega al centro, casi sin correcciones.',
      ],
      [
        'Tier 2',
        'Tirador de Élite',
        'Nv. 11–14 (Combo 14–19x)',
        '91,0%–95,9%',
        '45%–64%',
        'Centro bien apuntado, microcorrecciones cortas.',
      ],
      [
        'Tier 3',
        'Tirador Competente',
        'Nv. 7–10 (Combo 8–13x)',
        '84,0%–90,9%',
        '25%–44%',
        'Aciertos reiterados en el anillo exterior, ligeras sobrecargas en transiciones rápidas de blanco.',
      ],
      [
        'Tier 4',
        'Fragger en Formación',
        'Nv. 4–6 (Combo 4–7x)',
        '74,0%–83,9%',
        '10%–24%',
        'Movimientos entrecortados en múltiples impulsos, dispersión alta por sobreacelerar, vacilación al tirar.',
      ],
      [
        'Tier 5',
        'Principiante / Base',
        'Nv. 1–3 (Combo < 4x)',
        '< 74,0%',
        '< 10%',
        'Tiros cortos que no alcanzan y fallos frecuentes.',
      ],
    ],
  },
  protocols: {
    title: 'Protocolos de Entrenamiento para Precisión de Flick Shot',
    items: [
      {
        title: 'Protocolo 1: Calibración del Impulso Primario (Niveles 1–4)',
        description: 'Priorice la fluidez de un snap único sin cortes. Descarte pausas a mitad del trayecto y confíe en la memoria motora para situar el cursor sobre el blanco.',
      },
      {
        title: 'Protocolo 2: Reducción de Submovimientos de Meyer (Niveles 5–8)',
        description: 'Concentre la puntería en la diana interior de 8 píxeles. Apuntar a un núcleo reducido estimula a la corteza cerebral a acotar la dispersión global.',
      },
      {
        title: 'Protocolo 3: Secuenciación Prioritaria de Blancos (Niveles 9–12)',
        description: 'Ante dos objetivos simultáneos, examine con la visión periférica el temporizador y liquide primero la diana en fase terminal de caducidad.',
      },
      {
        title: 'Protocolo 4: Frenado Antagonista contra el Overshoot (Niveles 13–15)',
        description: 'A altas velocidades, active los extensores de la muñeca para clavar el ratón sobre el centro de la diana, evitando derrapes indeseados.',
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
  title: "Test de precisión del ratón: acierta en el centro",
  subtitle: "Dos objetivos que se encogen · el centro vale el doble · +2 s por acierto",
  startButtonText: "INICIAR DRILL",
  playAgainText: "Jugar de nuevo",
  shareText: "Compartir resultado",
  exitText: "Salir",
  accuracyLabel: "Precisión",
  targetHitsLabel: "Impactos",
  bullseyesLabel: "Centro (Diana)",
  peakLevelLabel: "Nivel Máximo",
  rulesTitle: "Instrucciones del Drill y Sistema de Puntuación",
  rulesItems: [
    { num: "1", text: "Impacto al Centro (Diana)", highlight: "+200 PTS / +2s (máx. 60s)", result: "Precisión milimétrica en el núcleo" },
    { num: "2", text: "Impacto Estándar", highlight: "+100 PTS / +2s (máx. 60s)", result: "Adquisición periférica rápida" },
    { num: "3", text: "Progresión de Nivel", highlight: "+1 Nivel / 1400 PTS", result: "Objetivos se reducen y expiran más rápido" },
    { num: "4", text: "Fallo o Expiración", highlight: "Reinicio de combo", result: "Penalización resta -1s" }
  ],
};

export default function PrecisionFlickShotPage() {
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
      <PrecisionFlickShotClient copy={copyEs} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
