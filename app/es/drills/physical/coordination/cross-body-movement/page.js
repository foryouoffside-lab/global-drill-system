import CrossBodyMovementClient from '@/app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/es/drills/physical/coordination/cross-body-movement';
const TITLE = 'Test de coordinación ojo-mano con el ratón | SkillDrills';
const DESCRIPTION = 'Test de coordinación ojo-mano online: lleva el cursor por un pasillo estrecho de un borde de la pantalla al otro sin salirte. 45 segundos, gratis.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'test de coordinación ojo-mano',
    'test de coordinación online',
    'coordinación mano-ojo con el ratón',
    'juego de pasillo con el ratón',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/cross-body-movement'),
  },
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    q: '¿Cómo funciona este test de coordinación ojo-mano?',
    a: 'Mueve el cursor sobre el nodo cian en un borde de la pantalla; la conexión empieza sin hacer clic. Si llegas al nodo magenta del lado opuesto sin salirte del pasillo que rodea la línea que los une, sumas puntos.',
  },
  {
    q: '¿Qué pasa si me salgo del pasillo?',
    a: 'El intento termina y aparece un nuevo par de nodos. El multiplicador de racha vuelve a 1,0x; los puntos y el tiempo restante se mantienen.',
  },
  {
    q: '¿Qué cambia al subir de nivel?',
    a: 'La tolerancia del pasillo (cuánto puedes desviarte de la línea) baja de 10 px a 4 px, el radio de los nodos de 16 px a 8 px y los nodos se acercan al borde, así que los recorridos son más largos. Los puntos base por acierto suben de 10 a 40.',
  },
  {
    q: '¿Cómo se calculan los puntos?',
    a: 'Cada nodo de destino alcanzado da los puntos base del nivel multiplicados por la racha. El multiplicador sube con las rachas hasta 3,0x.',
  },
  {
    q: '¿Cuánto dura una ronda?',
    a: 'Exactamente 45 segundos; el nivel vuelve a empezar en 1 en cada ronda.',
  },
  {
    q: '¿Cómo puedo no salirme del pasillo?',
    a: 'Mira primero el nodo de destino, mantén una velocidad tranquila y constante y frena justo antes del final. Con 4 px de tolerancia en niveles altos compensa ir algo más lento para alargar la racha.',
  },
  {
    q: '¿Funciona en el móvil?',
    a: 'Está pensado para ratón; lo mejor es jugar en un ordenador. Con Esc terminas una ronda en curso.',
  },
  {
    q: '¿Es gratis?',
    a: 'Sí, sin instalación ni registro. Tus mejores marcas solo se guardan en tu navegador.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Juegos de agilidad con el ratón', item: 'https://skilldrills.online/es/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Test de coordinación ojo-mano', item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Test de coordinación ojo-mano con el ratón',
  description: DESCRIPTION,
  url: PAGE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador actual con HTML5 Canvas y ratón',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const guide = {
  heading: 'Test de coordinación ojo-mano: instrucciones y consejos',
  intro: [
    'Este test de coordinación ojo-mano es un juego gratis de navegador en el que llevas el cursor con precisión por un pasillo estrecho. Toca el nodo cian en un borde de la pantalla y sigue la línea hasta el nodo magenta del lado opuesto. Si te sales del pasillo, el intento termina y aparece un nuevo par de nodos. Cada recorrido cruza la pantalla de un borde al otro y lo que cuenta es mantener el cursor dentro.',
    'Una ronda dura 45 segundos y el nivel empieza siempre en 1. Al subir de nivel, la tolerancia del pasillo baja de 10 px a 4 px, el radio de los nodos de 16 px a 8 px y los nodos se acercan al borde. Como referencia se usó la ley de Fitts (Fitts, 1954): cuanto más largo el recorrido y más pequeño el objetivo, más difícil el movimiento. Es un juego de práctica con el ratón.',
  ],
  techniques: {
    title: 'Consejos para no salirte del pasillo',
    items: [
      {
        name: 'Mira primero el destino',
        desc: 'Fíjate en la posición del nodo opuesto antes de tocar el nodo inicial. Así la dirección es correcta desde el primer milímetro.',
        tips: 'La conexión empieza al tocar el nodo, así que planifica la dirección mientras te acercas.',
      },
      {
        name: 'Ritmo regular y recto',
        desc: 'Los tirones rápidos acaban en temblores y fuera del pasillo. Mantén una velocidad tranquila y constante.',
        tips: 'Con 4 px de tolerancia en niveles altos compensa ir algo más lento para alargar la racha.',
      },
      {
        name: 'Frena justo antes del final',
        desc: 'Acercarse rápido y terminar despacio cerca del objetivo (Woodworth, 1899) ayuda a acertar nodos pequeños.',
        tips: 'Relaja la muñeca justo antes del nodo y llega con suavidad.',
      },
    ],
  },
  steps: [
    'Empieza la ronda y espera la cuenta atrás.',
    'Fíjate en la posición del nodo magenta de destino.',
    'Mueve el cursor sobre el nodo inicial cian.',
    'Avanza dentro del pasillo hasta el nodo magenta.',
  ],
  audience: 'Adultos y jugadores que quieren practicar movimientos de ratón largos y rectos con poca desviación.',
  faqs: faqItems,
  sources: pickSources('carey1996', 'fitts1954', 'woodworth1899'),
};

export default function CrossBodyMovementPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CrossBodyMovementClient
        copy={{
          title: 'Test de coordinación ojo-mano',
          subtitle: 'Cruza la pantalla sin salirte del pasillo',
          hudLabels: {
            score: 'Puntuación',
            timeLeft: 'Tiempo restante',
            bestScore: 'Mejor puntuación',
            bestCombo: 'Mejor racha',
          },
          rulesTitle: 'Reglas del test de coordinación ojo-mano',
          rules: [
            { title: 'Toca el nodo inicial', text: 'Mueve el cursor sobre el nodo cian en el borde de la pantalla. La conexión empieza al instante, no hace falta hacer clic.' },
            { title: 'Quédate en el pasillo', text: 'Avanza dentro del pasillo, a lo largo de la línea entre los dos nodos, hasta el nodo magenta del lado opuesto.' },
            { title: 'Llega al destino', text: 'Si alcanzas el nodo magenta sin salirte del pasillo, sumas puntos y tu racha crece.' },
            { title: 'Salir del pasillo', text: 'Si te sales, el intento termina y aparece un nuevo par de nodos. Solo el multiplicador de racha vuelve a 1,0x; los puntos y el tiempo se mantienen.' },
          ],
          aboutTitle: 'Sobre el test de coordinación ojo-mano',
          aboutHeading: 'Un pasillo estrecho de lado a lado de la pantalla',
          aboutText: 'En este juego de 45 segundos unes dos nodos que aparecen en los bordes izquierdo y derecho de la pantalla. Su altura es aleatoria, así que el recorrido a veces es diagonal y a veces horizontal. Al subir de nivel, la tolerancia del pasillo baja de 10 px a 4 px, los nodos se hacen más pequeños y se acercan al borde, de modo que los recorridos son más largos.',
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/cross-body-movement" />
    </>
  );
}
