import FingerSequencingClient from '@/app/drills/motor/movement-speed/finger-sequencing/FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/es/drills/motor/movement-speed/finger-sequencing';
const TITLE = 'Clics en orden: sigue la secuencia de objetivos | SkillDrills';
const DESCRIPTION = 'Clics en orden: sigue la línea discontinua y acierta de 3 a 5 objetivos con el ratón. +2 s por acierto, -1 s por fallo o trampa. Gratis en el navegador.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'clics en orden',
    'secuencia de objetivos',
    'ruta de clics',
    'precisión con el ratón',
    'ejercicio de ratón',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Entrenamiento Motor', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Velocidad de Movimiento', item: 'https://skilldrills.online/es/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Clics en orden', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'es-ES',
  name: 'Clics en orden',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'es-ES',
  name: 'Clics en orden',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requiere HTML5 Canvas y JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'es-ES',
  name: 'Clics en orden',
  url: PAGE_URL,
  description: 'Ejercicio de ratón: hacer clic en orden en los objetivos unidos por una línea discontinua. Con cada nivel los objetivos se hacen más pequeños, se separan más y baja el tiempo por cadena.',
  genre: ['Mouse Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
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
      name: '¿Cómo funciona el ejercicio de clics en orden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada ronda muestra una cadena de 3 objetivos (niveles 1–2), 4 objetivos (niveles 3–5) o 5 objetivos (desde el nivel 6). Una línea discontinua morada marca el orden y el objetivo activo brilla. Haz clic en ese orden con el ratón (o toca en pantallas táctiles). Los objetivos no llevan números: sigue la línea.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funcionan el tiempo y los puntos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empiezas con 45 segundos. Cada objetivo acertado en orden suma 2 s (máximo 60 s). Una cadena completa da 150 puntos × multiplicador de racha (hasta 3,0×) × bonus de nivel. La partida termina cuando el tiempo llega a cero.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué son los objetivos rojos con «!»?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Son trampas que aparecen desde el nivel 6. Hacer clic en una cuenta como fallo: -1 s, racha a cero y nueva cadena. No están en la línea discontinua, así que basta con saltarlas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hay límite de tiempo por cadena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, si la opción Timeout está activada (por defecto). Al principio cada cadena tiene unos 3,2 segundos y el tiempo baja al subir el nivel y la racha. Si se agota: -1 s, racha a cero y nueva cadena.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cambia al subir de nivel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El nivel sube 1 cada 1.750 puntos, sin tope. Más objetivos por cadena, objetivos más pequeños y separados, y menos tiempo por cadena. En los primeros niveles los siguientes objetivos se ven más pequeños y tenues como pista; desaparece hacia el nivel 10.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia de un CPS test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un CPS test solo cuenta clics en el mismo punto. Aquí mueves el ratón de objetivo en objetivo en un orden fijo y tienes que frenar con precisión: el recorrido y la precisión pesan más que la velocidad de clic.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se calcula la precisión?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es la proporción de objetivos acertados en el orden correcto sobre todos los intentos (clics, clics en trampas y cadenas agotadas). La pantalla final muestra precisión, cadenas completadas, nivel máximo y combo máximo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  name: 'Cómo hacer clics en orden',
  description: 'Pasos para seguir la línea discontinua y acertar los objetivos uno tras otro.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Leer la línea',
      text: 'Antes del primer clic, mira en qué orden une la línea morada los objetivos.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Empezar por el objetivo que brilla',
      text: 'Haz clic en el objetivo que brilla y sigue la línea hasta el siguiente.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Saltar las trampas',
      text: 'No hagas clic en los objetivos rojos con «!» (desde el nivel 6), solo en los de la línea.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Revisar el resultado',
      text: 'Mira precisión, cadenas completadas, nivel máximo y combo máximo para fijar tu próxima meta.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954'),
  intro: {
    title: 'Qué es el ejercicio de clics en orden',
    paragraphs: [
      'En este ejercicio haces clics en orden sobre una secuencia de objetivos en lugar de ir al más cercano. El tiempo entre dos objetivos depende de su distancia y tamaño (Fitts, 1954), y una secuencia fija de movimientos puede prepararse como un solo plan motor (Lashley, 1951; Keele, 1968).',
      'La medición depende del temporizador del navegador y de la frecuencia del monitor: compara tus resultados en el mismo equipo y con los mismos ajustes de ratón.',
    ],
  },
  benchmark: {
    title: 'Niveles de práctica',
    description: 'Rangos orientativos definidos por SkillDrills para practicar. No son normas científicas, estadísticas de usuarios ni percentiles.',
    columns: ['Rango', 'Nivel alcanzado', 'Precisión'],
    rows: [
      { tier: 'Rango 1', level: 'Nivel 12+', accuracy: '95 % o más' },
      { tier: 'Rango 2', level: 'Nivel 9–11', accuracy: '90–94 %' },
      { tier: 'Rango 3', level: 'Nivel 6–8', accuracy: '85–89 %' },
      { tier: 'Rango 4', level: 'Nivel 3–5', accuracy: '75–84 %' },
      { tier: 'Rango 5', level: 'Nivel 1–2', accuracy: 'menos del 75 %' },
    ],
  },
  protocols: {
    title: 'Consejos de práctica',
    description: 'Para mejorar de forma constante.',
    items: [
      {
        title: 'Lee la línea primero',
        description: 'Planifica la cadena entera como un solo movimiento antes de hacer clic, en vez de buscar cada objetivo.',
      },
      {
        title: 'Rápido en la distancia, preciso al llegar',
        description: 'Los desplazamientos largos con el brazo, la frenada en el objetivo con muñeca y dedos. Los objetivos se encogen con el nivel.',
      },
      {
        title: 'Sin prisas',
        description: 'Cada fallo cuesta 1 segundo y la racha. Un ritmo constante y limpio da más puntos.',
      },
    ],
  },
  faqs: {
    title: 'Preguntas frecuentes',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const esCopy = {
  title: 'Clics en orden',
  subtitle: 'Sigue la secuencia de objetivos por la línea discontinua',
  score: 'Puntos',
  timeLeft: 'Tiempo restante',
  accuracy: 'Precisión',
  bestScore: 'Mejor puntuación',
  startButtonText: 'Empezar',
  startSubtitle: 'Clics en orden • empiezas con 45 s, +2 s por acierto',
  getReady: 'Prepárate',
  rulesTitle: 'Cómo se juega y puntos',
  rulesItems: [
    { num: '1', text: 'Objetivo en orden', highlight: '+2 s (máx. 60 s)', result: 'Cadena: 150 pts × multi' },
    { num: '2', text: 'Multiplicador de racha', highlight: 'hasta 3,0×', result: 'sube con cada cadena' },
    { num: '3', text: 'Nivel', highlight: '+1 cada 1.750 pts', result: 'más objetivos, más pequeños' },
    { num: '4', text: 'Fallo / trampa / tiempo agotado', highlight: '-1 s', result: 'racha a cero' }
  ],
  chainsCleared: 'Cadenas completadas',
  peakLevel: 'Nivel máximo',
  maxCombo: 'Combo máximo',
  playAgain: 'Jugar otra vez',
  shareTitle: 'Compartir',
  exitTitle: 'Salir'
};

export default function SpanishFingerSequencingPage() {
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
      <FingerSequencingClient copy={esCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
