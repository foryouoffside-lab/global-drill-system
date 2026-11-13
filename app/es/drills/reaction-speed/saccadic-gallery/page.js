import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/reaction-speed/saccadic-gallery';
const title = 'Ejercicios Sacádicos Online: Saltos Oculares | SkillDrills';
const description =
  'Ejercicios sacádicos gratis en el navegador: lleva la mirada de un objetivo a otro y pulsa cada uno con precisión. Practica saltos oculares y coordinación.';

export const metadata = {
  title,
  description,
  keywords: [
    'ejercicios sacádicos',
    'movimientos sacádicos',
    'ejercicios sacádicos online',
    'saltos oculares',
    'escaneo visual',
    'coordinación ojo-mano',
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery'),
  },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title,
    description: 'Lleva la mirada de un objetivo a otro y pulsa con precisión: ejercicios sacádicos gratis en el navegador.',
    type: 'article',
    url,
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title,
    description: 'Ejercicios sacádicos gratis: salta con la mirada entre objetivos y pulsa con precisión.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Panel de Ejercicios', item: 'https://skilldrills.online/es/drills' },
    { '@type': 'ListItem', position: 3, name: 'Velocidad de Reacción', item: 'https://skilldrills.online/es/drills/reaction-speed' },
    { '@type': 'ListItem', position: 4, name: 'Ejercicios Sacádicos Online', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  sameAs: ['https://en.wikipedia.org/wiki/Saccade'],
  name: 'Ejercicios Sacádicos Online: Saltos Oculares',
  alternateName: ['Ejercicios sacádicos', 'Movimientos sacádicos', 'Saltos oculares'],
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Juego en el navegador: los objetivos aparecen de uno en uno en puntos fijos de una cuadrícula; llevas la mirada hasta ellos y pulsas. Registra aciertos y el tiempo hasta el clic.',
  browserRequirements: 'Navegador moderno con soporte para HTML5 Canvas y JavaScript',
  inLanguage: 'es',
  dateModified: '2026-11-08',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ejercicios Sacádicos Online | SkillDrills',
  url,
  description: 'Ejercicios sacádicos gratis en el navegador para practicar saltos oculares entre objetivos.',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requiere navegador moderno con JavaScript activado.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  inLanguage: 'es',
  dateModified: '2026-11-08',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Ejercicios Sacádicos - Saltos Oculares',
  url,
  description: 'Lleva la mirada rápidamente de un objetivo a otro y pulsa cada uno, directamente en el navegador.',
  genre: ['Action', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'es',
  dateModified: '2026-11-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo hacer los ejercicios sacádicos',
  description: 'Cuatro pasos para llevar la mirada a cada objetivo y pulsarlo con precisión.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Colócate', text: 'Siéntate a unos 50–70 cm de la pantalla y deja la mirada en el centro de la pantalla.' },
    { '@type': 'HowToStep', position: 2, name: 'Detecta el objetivo', text: 'Mantén la cabeza quieta y detecta el objetivo rojo en cuanto aparezca en uno de los puntos de la cuadrícula.' },
    { '@type': 'HowToStep', position: 3, name: 'Salta con la mirada', text: 'Lleva la mirada al objetivo de un solo salto, antes que la mano.' },
    { '@type': 'HowToStep', position: 4, name: 'Pulsa con precisión', text: 'Haz clic en el objetivo (en el móvil, tócalo) y revisa el resultado al final.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    q: '¿Qué son los ejercicios sacádicos?',
    a: 'Son ejercicios que repiten los saltos rápidos de la mirada (sacadas) de un punto a otro. Aquí los objetivos aparecen de uno en uno en puntos fijos de una cuadrícula (4×3 en ordenador, 3×3 en móvil), nunca dos veces seguidas en el mismo punto, y llevas la mirada hasta ellos y pulsas. Es un juego de navegador, no una revisión de la vista ni un tratamiento.',
  },
  {
    q: '¿Cómo funcionan el tiempo y los puntos?',
    a: 'Empiezas con 45 segundos y cada acierto suma 2 segundos (máximo 60). Cada acierto vale 100 puntos multiplicados por la racha (hasta 3,0x) y por un bonus de nivel. Al subir de nivel, los objetivos se hacen más pequeños y duran menos en pantalla. Un clic fallado reinicia la racha; la penalización de 1 segundo solo se aplica si la activas en los ajustes. Se juega con ratón o pantalla táctil.',
  },
  {
    q: '¿A qué velocidad se mueven los ojos en una sacada?',
    a: 'Una sacada dura unas pocas decenas de milisegundos y, en saltos grandes, la velocidad máxima llega a varios cientos de grados por segundo (Leigh & Zee, 2015). Ocurren constantemente al leer y al recorrer una pantalla (Rayner, 1998).',
  },
  {
    q: '¿Qué son las sacadas exprés?',
    a: 'En ciertas condiciones aparecen sacadas con una latencia muy corta, alrededor de 100 ms, llamadas sacadas exprés (Fischer & Weber, 1993). Este ejercicio no mide la latencia de los ojos, así que no puede detectarlas.',
  },
  {
    q: '¿El ejercicio mide mis movimientos oculares?',
    a: 'No. El navegador no sabe hacia dónde miras; solo registra el momento y la posición del clic. El resultado incluye el salto de la mirada, el movimiento de la mano, el retraso del ratón y la frecuencia de la pantalla. No es una latencia sacádica.',
  },
  {
    q: '¿Ayuda en shooters como Valorant o CS2?',
    a: 'Revisar esquinas, mirar el minimapa y localizar a un enemigo que aparece de repente se parecen a esta tarea. Pero el rendimiento en partida depende también de la puntería, el posicionamiento y el equipo, así que no hay mejora garantizada.',
  },
  {
    q: '¿Influye la tasa de refresco del monitor?',
    a: 'El intervalo entre dos fotogramas es 1000 dividido por la tasa de refresco: unos 16,7 ms a 60 Hz, 6,9 ms a 144 Hz y 4,2 ms a 240 Hz. Eso puede desplazar ligeramente el momento en que aparece el objetivo (Woods et al., 2015). No se ha medido cuánto cambia la puntuación de este juego; compara sesiones en la misma pantalla.',
  },
  {
    q: '¿Pueden estos ejercicios mejorar la velocidad de lectura?',
    a: 'Al leer la mirada salta de palabra en palabra, pero un juego en pantalla no es un ejercicio de lectura y no está demostrado que acelere la lectura.',
  },
  {
    q: '¿Con qué frecuencia debo practicar?',
    a: 'Bastan bloques cortos de 5 a 10 minutos con descansos. Si notas los ojos cansados o secos, para, parpadea y mira a lo lejos. Entrenar más tiempo no es necesariamente mejor.',
  },
  {
    q: '¿Es gratis? ¿Dónde se guardan mis resultados?',
    a: 'Sí, es gratis, sin instalación y sin cuenta. Tu récord se guarda en el almacenamiento local del navegador y este ejercicio no lo envía a ningún servidor. Si borras los datos del navegador, el récord desaparece.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  dateModified: '2026-11-08',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const saccadicGuide = {
  heading: 'Guía de los ejercicios sacádicos',
  intro: [
    'En estos ejercicios sacádicos los objetivos aparecen de uno en uno en distintos puntos de la pantalla. Llevas la mirada hasta el objetivo de un salto y pulsas. Esos saltos rápidos de la mirada se llaman movimientos sacádicos y ocurren constantemente al leer y al recorrer una imagen (Rayner, 1998).',
    'Durante la sacada el procesamiento visual se reduce, y si la mirada cae al lado del objetivo aparece una pequeña corrección (Leigh & Zee, 2015). Por eso conviene priorizar una llegada precisa antes que la velocidad.',
    'Límites de la medición: el navegador no conoce la posición de tu mirada y solo registra el momento y el lugar del clic. El resultado incluye el movimiento de la mano, el retraso del ratón y el intervalo de la pantalla (unos 16,7 ms a 60 Hz, 6,9 ms a 144 Hz, 4,2 ms a 240 Hz; Woods et al., 2015). No es una latencia sacádica ni una evaluación de la salud ocular.',
    'Practica en el mismo dispositivo, con la misma distancia y postura, y compara solo tus propias sesiones. Si notas dolor o cambios en la visión, acude a un oftalmólogo.',
  ],
  benchmarks: {
    title: 'Etapas de práctica',
    headers: ['Etapa', 'Objetivo', 'En qué fijarse'],
    rows: [
      ['Etapa 1', 'No dejar escapar objetivos', 'Coger el tacto a los clics precisos'],
      ['Etapa 2', 'Llevar la mirada de un salto', 'Mirar en cuanto aparece el objetivo'],
      ['Etapa 3', 'Mantener el ritmo de clics', 'Tempo constante, sin prisas'],
      ['Etapa 4', 'Más rápido con la misma precisión', 'Menos pasadas y correcciones'],
      ['Etapa 5', 'Sesiones más largas', 'Descansar antes de cansarse y comparar en las mismas condiciones'],
    ],
    note: 'Esta tabla es una orientación de práctica de SkillDrills. No contiene normas de tiempo de reacción, estadísticas de usuarios ni percentiles.',
  },
  techniques: {
    title: 'Consejos para saltos oculares más limpios',
    items: [
      { name: 'Cabeza quieta, solo los ojos', desc: 'No gires la cabeza; deja que solo salten los ojos. Una postura fija también hace las sesiones más comparables.', tips: 'Comprueba de vez en cuando que la cabeza no acompaña el movimiento.' },
      { name: 'Mirada suave en el centro', desc: 'No claves la vista en un punto; deja la mirada relajada en el centro de la pantalla para notar antes el objetivo nuevo.', tips: 'Mantén toda la pantalla en tu campo de visión.' },
      { name: 'Llegar de un salto', desc: 'Si la mirada se queda corta o se pasa, hay que corregir. El objetivo es frenar justo en el centro del objetivo.', tips: 'Precisión antes que prisa.' },
      { name: 'Descansar la vista', desc: 'Concentrado en la pantalla parpadeas menos y los ojos se secan.', tips: 'Parpadea a propósito entre series y mira a lo lejos.' },
    ],
  },
  steps: [
    'Siéntate a unos 50–70 cm, frente al centro de la pantalla.',
    'Inicia el ejercicio y deja la mirada en el centro de la pantalla.',
    'Cuando aparezca un objetivo, lleva primero los ojos hasta él.',
    'Haz clic en el objetivo (en el móvil, tócalo).',
    'Al acabar el tiempo, revisa precisión, reacción media, nivel máximo y racha máxima.',
  ],
  audience: 'Quien quiera practicar saltos oculares de forma lúdica, jugadores de shooters (Valorant, CS2) y aficionados a los deportes de pelota.',
  faqs,
  sources: pickSources('rayner1998', 'fischer1993', 'leigh2015', 'woods2015'),
  related: [
    { href: '/es/drills/reaction-speed', label: 'Panel de Velocidad de Reacción' },
    { href: '/es/drills/visual/reaction-speed/light-reaction', label: 'Test de Tiempo de Reacción' },
    { href: '/es/drills/reaction-speed/reflex-training-drill', label: 'Juego de Reflejos (Multi-Objetivo)' },
    { href: '/es/drills/reaction-speed/visual-tracking-speed-test', label: 'Test de Seguimiento Visual' },
  ],
};

export default function SpanishSaccadicGalleryPage() {
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
      <SaccadicGalleryWrapper copy={{ title: 'Ejercicios Sacádicos Online: Saltos Oculares', subtitle: 'Saltos Oculares · Adquisición Visual', caption: 'Desplaza la mirada entre objetivos y pulsa cada uno con precisión.' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
