import DistanceJudgmentClient from '@/app/drills/visual/depth-perception/distance-judgment/DistanceJudgmentClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Test de percepción de profundidad online | SkillDrills',
  description: 'Test de percepción de profundidad online: haz clic cuando la esfera que se acerca encaje en el anillo. Gratis, error en %. No es un examen de la vista.',
  keywords: [
    'test de percepción de profundidad',
    'percepción de profundidad test',
    'test de percepción de profundidad online',
    'test de profundidad visual online',
    'percepción de distancia',
    'cálculo de distancias',
    'tiempo hasta el contacto',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Test de percepción de profundidad online | SkillDrills',
    description: 'Test de percepción de profundidad online: haz clic cuando la esfera que se acerca encaje en el anillo. Gratis, error en %. No es un examen de la vista.',
    type: 'article',
    url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Test de percepción de profundidad online | SkillDrills',
    description: 'Test de percepción de profundidad online: haz clic cuando la esfera que se acerca encaje en el anillo. Gratis, error en %. No es un examen de la vista.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment',
    languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Entrenamiento Visual', item: 'https://skilldrills.online/es/drills/visual' },
    { '@type': 'ListItem', position: 3, name: 'Percepción de Profundidad', item: 'https://skilldrills.online/es/drills/visual/depth-perception' },
    { '@type': 'ListItem', position: 4, name: 'Cálculo de Distancias', item: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Depth_perception"],
  name: 'Test de percepción de profundidad online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Ejercicio gratuito en el navegador: haz clic cuando la esfera que se acerca encaje en el anillo. Mide la desviación en porcentaje; no es un examen de la vista.',
  url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Test de profundidad visual online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno con soporte para HTML5 Canvas y Pointer Events',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Entrenamiento de Intercepción Visual en Profundidad',
  url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment',
  description: 'Juego de timing: haz clic cuando la esfera que crece en pantalla alcanza la profundidad del anillo.',
  genre: ['Precision Game', 'Visual Training', 'Esports'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo entrenar la percepción de profundidad y el cálculo de distancias',
  description: 'Protocolo metódico para sincronizar la expansión óptica con el momento de contacto.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Fijar el anillo de referencia en el túnel',
      text: 'Dirige tu mirada al anillo estacionario ubicado en el centro del túnel virtual.',
      url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Observar el acercamiento del objetivo',
      text: 'Sigue la esfera a medida que se aproxima y crece en la pantalla.',
      url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Pulsar en la coincidencia exacta',
      text: 'Haz clic o toca la pantalla en el instante en que la esfera coincida con el anillo.',
      url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Revisar el porcentaje de desviación',
      text: 'Analiza tu error relativo de profundidad y ajusta tu sincronización para velocidades más rápidas.',
      url: 'https://skilldrills.online/es/drills/visual/depth-perception/distance-judgment#step-4'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es el test de percepción de profundidad y qué habilidades evalúa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es una práctica de percepción de distancia en pantalla: una esfera crece como si se acercara y haces clic cuando encaja en el anillo. El juego mide la desviación en porcentaje. No es un test de estereopsis ni un examen de la vista.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia de la prueba clásica de Howard-Dolman?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La prueba de Howard-Dolman (1919) mide la estereopsis pura con varillas físicas. Como las pantallas de ordenador son planas y carecen de disparidad binocular real, este ejercicio usa solo la ampliación de la imagen (Lee, 1976) y no sustituye a ese aparato.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es la variable Tau y el tiempo hasta el contacto (TTC)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'David Lee (1976) formuló que el cerebro calcula cuándo llegará un objeto dividiendo su tamaño angular actual por su tasa de expansión, sin necesitar conocer a qué distancia física se encuentra.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Sirve como examen de la vista o del carnet de conducir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Es un juego de navegador sin valor médico ni legal. No sustituye una revisión oftalmológica ni el reconocimiento para el carnet.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede fallar una persona con visión 20/20?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, porque el juego mide sobre todo el timing del clic a partir de la ampliación de la esfera, no la nitidez de la vista. Un mal resultado aquí no indica un problema de visión.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es posible mejorar el cálculo de distancias con entrenamiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es probable que con la práctica mejores tu timing en esta tarea concreta. No hay garantía de efecto fuera de la pantalla. Para cualquier duda sobre tu visión, consulta a un oftalmólogo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se determina el porcentaje de error en la prueba?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El juego compara la profundidad de la esfera en el momento del clic con la del anillo, en porcentaje del túnel. Hasta un 7 % de desviación: +150 puntos; hasta un 16 %: +100 puntos. Estos márgenes bajan al 4 % y 10 % en niveles altos. Cada 750 puntos subes de nivel, y fallar no resta puntos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede jugar en el móvil o con el teclado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el móvil, sí: toca la pantalla. En el ordenador, haz clic con el ratón. El teclado no se usa para jugar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Influye la tasa de refresco del monitor (Hz)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede influir. A 60 Hz la pantalla se actualiza cada 16,7 ms; a 144 Hz, cada 6,9 ms (Woods et al., 2015). Compara tus resultados siempre en el mismo equipo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se recopilan datos personales o puntuaciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Todo el historial y los récords se guardan únicamente de forma local en tu navegador (LocalStorage) respetando tu privacidad.',
      },
    },
  ],
};

const distanceGuideEs = {
  heading: 'Test de percepción de profundidad y cálculo de distancias',
  intro: [
    'Este test de percepción de profundidad online muestra una esfera que crece dentro de un túnel, como si se acercara. Haces clic cuando encaja en el anillo fijo y el juego mide la desviación en porcentaje. Es una práctica de percepción de distancia en pantalla basada en la ampliación de la imagen: no es un test de estereopsis ni un examen de la vista.',
    'Fuera de la pantalla, la percepción de profundidad combina varias pistas: disparidad binocular, perspectiva, tamaño relativo y ampliación de la imagen. El aparato de Howard-Dolman (Howard, 1919) estudia la disparidad con varillas reales. Aquí solo usas la pista de ampliación descrita por Lee (1976) y Regan y Beverley (1978), que permite estimar el tiempo hasta el contacto.',
    'Una sesión dura 45 segundos y el anillo cambia de profundidad en cada intento. Hasta un 7 % de desviación: +150 puntos; hasta un 16 %: +100 puntos. Cada 750 puntos subes de nivel: la esfera llega más rápido y los márgenes bajan hasta el 4 % y el 10 %. Fallar no resta puntos.',
    'La frecuencia de la pantalla y la latencia de entrada afectan al momento del clic (Woods et al., 2015): compara resultados en el mismo equipo. Tus récords se guardan solo en el almacenamiento local (LocalStorage) del navegador.'
  ],
  benchmarks: {
    title: 'Niveles de práctica (SkillDrills)',
    headers: ['Nivel', 'Desviación típica', 'Lectura'],
    rows: [
      ['Nivel 1', 'Más del 25 %', 'Clics mucho antes del encaje.'],
      ['Nivel 2', '16 – 25 %', 'Fija el borde del anillo y espera.'],
      ['Nivel 3', '7 – 16 %', 'Intentos en la zona de +100 puntos.'],
      ['Nivel 4', '4 – 7 %', 'El timing aguanta con más velocidad.'],
      ['Nivel 5', 'Menos del 4 %', 'Mantener esa precisión toda la sesión.'],
    ],
    note: 'Niveles de práctica de SkillDrills: no son estadística de población, percentiles ni un examen de la vista.',
  },
  techniques: {
    title: 'Cómo practicar la percepción de distancia',
    items: [
      { name: 'Mira los bordes', desc: 'Fíjate en la velocidad a la que se abren los bordes de la esfera respecto al anillo, no solo en el centro (Lee, 1976).' },
      { name: 'Frena el clic prematuro', desc: 'Cuando suba la velocidad, espera al encaje completo antes de hacer clic.' },
      { name: 'Mirada en el anillo', desc: 'Deja los ojos sobre el anillo objetivo y permite que la esfera llegue hasta él.' },
      { name: 'Parpadea entre intentos', desc: 'Parpadea entre intentos para mantener la vista cómoda.' },
    ],
  },
  steps: [
    'Haz clic en "Comenzar Test" para iniciar la sesión de 45 segundos.',
    'Fija la mirada de forma estable en el anillo cian de referencia situado en el plano medio.',
    'Observa la esfera que aparece al fondo del túnel y crece hacia ti.',
    'Haz clic con el ratón o toca la pantalla cuando la esfera coincida con el anillo objetivo.',
    'Consulta tu desviación (hasta 7 %: +150 PTS; hasta 16 %: +100 PTS) y adáptate a la velocidad creciente.'
  ],
  audience: 'Jugadores y curiosos que quieren practicar la percepción de distancia y el timing del clic con un objetivo que se acerca en pantalla.',
  faqs: {
    title: 'Preguntas Frecuentes sobre Percepción de Profundidad y Distancias',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
  sources: pickSources('howard1919', 'lee1976', 'regan1978', 'julesz1971', 'woods2015'),
  related: [
    { href: "/es/drills/visual/tracking-accuracy/moving-target", label: "Intercepción de Objetivo Móvil" },
    { href: "/es/drills/visual/reaction-speed/light-reaction", label: "Test de Reacción a la Luz" },
    { href: "/es/drills/visual/tracking-accuracy/multiple-targets", label: "Seguimiento de Múltiples Objetos" },
    { href: "/es/drills/visual/tracking-accuracy/pursuit-tracker", label: "Rastreador de Persecución Ocular" },
    { href: "/es/drills/visual/reaction-speed/go/no-go", label: "Control de Impulsos Go / No-Go" },
    { href: "/es/drills/visual/visual-recognition/entropic-grid", label: "Búsqueda en Cuadrícula Entrópica" }
  ]
};

const copyEs = {
  title: 'Test de Percepción de Profundidad',
  subtitle: 'Percepción de distancia en pantalla',
  caption: 'La percepción de profundidad calcula qué tan lejos se encuentran los elementos en el espacio. En una pantalla plana, la tasa de expansión óptica (Lee, 1976; Regan & Beverley, 1978) permite estimar el tiempo hasta el contacto (TTC) sin conocer el tamaño del objeto.',
  statScore: 'Puntos',
  statTime: 'Tiempo',
  statLevel: 'Nivel',
  statBestScore: 'Récord',
  startTitle: 'Percepción de Distancia',
  startSubtitle: 'Practica el timing con un objetivo en movimiento',
  startBtn: 'Comenzar Test',
  getReady: 'PREPÁRATE',
  newBest: 'NUEVO RÉCORD',
  statPoints: 'Puntos',
  statAccuracy: 'Precisión',
  statPeakLevel: 'Nivel Máximo',
  statIntercepts: 'Aciertos Plenos',
  playAgain: 'Repetir Intento',
  shareScore: 'Compartir Puntuación',
  returnOptions: 'Volver',
  rulesTitle: 'Normas y Puntuación',
  rule1Text: 'Intercepción Perfecta',
  rule1Highlight: '+150 PTS',
  rule1Result: 'Desviación ≤ 7 % (4 % en niveles altos)',
  rule2Text: 'Intercepción Cercana',
  rule2Highlight: '+100 PTS',
  rule2Result: 'Desviación ≤ 16 % (10 % en niveles altos)',
  rule3Text: 'Aceleración Escalonada',
  rule3Highlight: 'Mayor Velocidad',
  rule3Result: 'La esfera se acerca más rápido',
  rule4Text: 'Fallo o Tiempo Agotado',
  rule4Highlight: 'Sin Penalización',
  rule4Result: 'Nuevo objetivo sin restar puntos',
  aboutTitle: 'Sobre el Test de Percepción de Profundidad',
  overviewTitle: '¿Qué mide este test?',
  overviewLead: 'Mide cuánto se acerca tu clic al encaje entre la esfera que crece y el anillo.',
  overviewBody: 'Con la repetición es probable que mejores el timing en esta tarea concreta; no hay garantía de efecto fuera de la pantalla.',
  aboutCards: [
    { iconBg: 'bg-blue-600', title: 'Recomendado para', text: 'Jugadores y curiosos que quieren practicar la estimación de distancia en pantalla.' },
    { iconBg: 'bg-cyan-600', title: 'Capacidades Entrenadas', text: 'Expansión óptica, cálculo de tiempo de impacto, anticipación visual y timing del clic.' },
    { iconBg: 'bg-purple-600', title: 'Clave del Éxito', text: 'Mantén la mirada en el anillo de referencia y activa el pulsador justo al solaparse.' }
  ]
};

export default function SpanishDistanceJudgmentPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DistanceJudgmentClient copy={copyEs} />
      <DrillGuide guide={distanceGuideEs} />
      <RelatedDrills currentCategory="visual" currentHref="/drills/visual/depth-perception/distance-judgment" locale="es" />
    </>
  );
}
