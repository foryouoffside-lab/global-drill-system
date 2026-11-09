import KeyboardRecognitionClient from '@/app/drills/motor/movement-speed/keyboard-recognition/KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/es/drills/motor/movement-speed/keyboard-recognition';
const TITLE = 'Test de reacción con teclado | Teclas de juego | SkillDrills';
const DESCRIPTION = 'Test de reacción con teclado gratis: pulsa la tecla que aparece antes de que acabe el tiempo e ignora las señales falsas. 60 s: reacción, precisión y KPM.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'test de reacción con teclado',
    'test de reaccion con teclado',
    'teclas de juego',
    'keybinds',
    'WASD',
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
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Entrenamiento Motor', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Velocidad de Movimiento', item: 'https://skilldrills.online/es/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Test de reacción con teclado', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  inLanguage: 'es-ES',
  name: 'Test de reacción con teclado',
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
  name: 'Test de reacción con teclado',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador con JavaScript y teclado físico',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'es-ES',
  name: 'Test de reacción con teclado',
  url: PAGE_URL,
  description: 'Juego de teclas de 60 segundos: pulsar las teclas que aparecen (sueltas, en secuencias de 2 a 5 o de memoria) antes de que acabe el tiempo e ignorar las señales falsas.',
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
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
      name: '¿Qué mide el test de reacción con teclado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tiempo entre que aparece una tecla en pantalla y la pulsas correctamente. La pantalla final muestra el tiempo medio de reacción (ms), la precisión, el KPM (pulsaciones por minuto), el combo máximo y un rango. Mide tu reacción, no la latencia del teclado ni tu velocidad de escritura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué señales pueden aparecer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Teclas sueltas, secuencias de 2 a 3 teclas (5 en el modo de secuencias largas), un modo de memoria que enseña 3 teclas durante 1 segundo y luego las oculta, y señales falsas en las que no debes pulsar nada. Las teclas posibles son A–Z, 0–9, Espacio, Shift, Ctrl, Alt, Tab, Enter, símbolos, F1–F6 y flechas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se puntúa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acierto: 120 puntos × multiplicador de combo, ×1,4 en secuencias y ×1,8 en el modo de memoria. Dejar pasar una señal falsa sin pulsar da +200. Tecla equivocada, reaccionar a una señal falsa o dejar que se acabe el tiempo reinician el combo. La partida dura siempre 60 segundos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo funcionan la dificultad y el tiempo por señal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En el modo adaptativo (por defecto) cada señal empieza con unos 1,8 segundos, se acorta cuando encadenas aciertos (hasta unos 0,8 s) y se alarga tras un fallo. Niveles fijos: Easy 1,5×, Medium 1,0×, Hard 0,75× y Expert 0,55× del tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo practicar con las teclas de Valorant o Fortnite?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Los presets de Valorant, CS2, Fortnite, Minecraft, League of Legends y Apex Legends solo usan las teclas por defecto de cada juego. No es una herramienta oficial de esos juegos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Sirve como test de teclado o test de mecanografía?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. No comprueba si todas tus teclas funcionan ni mide palabras por minuto. Es un entrenamiento de reacción con las teclas de juego. Las teclas se leen por su posición física con etiquetas del teclado estadounidense, así que en el teclado español algunos símbolos están en otro sitio; letras y números coinciden.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Funciona en el móvil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Necesita un teclado físico. Los dispositivos solo táctiles no pueden empezar la partida; en una tableta, conecta un teclado Bluetooth.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  name: 'Cómo hacer el test de reacción con teclado',
  description: 'Reaccionar a las teclas que aparecen durante 60 segundos y frenar ante las señales falsas.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Elegir modo y preset',
      text: 'Elige modo, dificultad y, si quieres, un preset de juego, con la mano izquierda en su posición habitual.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Mirar la pantalla',
      text: 'Sin mirar el teclado, identifica la tecla que aparece en el centro de la pantalla.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Pulsar o aguantar',
      text: 'Pulsa las señales reales antes de que acabe el tiempo; ante una señal falsa, no pulses nada hasta que desaparezca.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Revisar el resultado',
      text: 'Tras 60 segundos, revisa tiempo de reacción, precisión, KPM y combo máximo.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966'),
  intro: {
    title: 'Qué es el test de reacción con teclado',
    paragraphs: [
      'El test de reacción con teclado te pide elegir, entre muchas teclas, la que aparece en pantalla: una tarea de reacción de elección (Donders, 1868). Cuantas más teclas posibles, más lenta la reacción (Hick, 1952); quedarse quieto ante una señal falsa entrena la inhibición de respuesta (Logan, 1984).',
      'Los valores dependen del temporizador del navegador, la frecuencia del monitor y el teclado: compara tus resultados en el mismo equipo.',
    ],
  },
  benchmark: {
    title: 'Rangos del ejercicio',
    description: 'El rango sale de los umbrales de puntos y precisión definidos en el código del ejercicio. No son normas científicas, estadísticas de usuarios ni percentiles.',
    columns: ['Rango', 'Puntos', 'Precisión'],
    rows: [
      { grade: 'S+', score: '3.500+', accuracy: '95 %+' },
      { grade: 'S', score: '2.200+', accuracy: '90 %+' },
      { grade: 'A', score: '1.400+', accuracy: '85 %+' },
      { grade: 'B', score: '700+', accuracy: '80 %+' },
      { grade: 'C', score: '300+', accuracy: '75 %+' },
      { grade: 'D', score: '100+', accuracy: '65 %+' },
    ],
  },
  protocols: {
    title: 'Consejos de práctica',
    description: 'Menos fallos, mejores resultados.',
    items: [
      {
        title: 'Piensa en zonas',
        description: 'Recuerda movimiento (WASD), habilidades (Q, E, C, X) y fila de números (1–4) como zonas: encontrarás el dedo correcto antes.',
      },
      {
        title: 'Frena ante las señales falsas',
        description: 'Pulsar antes de mirar rompe el combo. Primero identifica el tipo de señal y después pulsa.',
      },
      {
        title: 'Teclea las secuencias en bloque',
        description: 'Memoriza una secuencia de 2 a 5 teclas como un solo patrón y púlsala seguida (Sternberg, 1966).',
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
  title: 'Test de reacción con teclado',
  subtitle: 'Pulsa la tecla que aparece: reacción con las teclas de juego',
};

export default function SpanishKeyboardRecognitionPage() {
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
      <KeyboardRecognitionClient copy={esCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
    </>
  );
}
