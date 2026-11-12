import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/physical/reflex-training/reaction-chain';
const title = 'Frenado de Puntería: Para la Mira sin Pasarte | SkillDrills';
const description = 'Frenado de puntería con el ratón: detén el cursor dentro de objetivos que llegan desde los bordes. Cada paso sin frenar u objetivo perdido resta 1 segundo.';

export const metadata = {
  title,
  description,
  keywords: ['frenado de puntería', 'parar la mira dentro del objetivo', 'evitar pasarse (overflick)', 'overflick', 'frenar el ratón en el objetivo'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'es_ES', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Juegos de agilidad con el ratón', item: 'https://skilldrills.online/es/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Frenado de puntería', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Frenado de puntería: para la mira sin pasarte (Reaction Chain)',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador con HTML5 Canvas y Pointer Lock, ratón',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
};

const faqs = [
  {
    q: '¿Qué practica este ejercicio de frenado de puntería?',
    a: 'Los nodos entran en línea recta desde uno de los cuatro bordes de la pantalla. Llevas el cursor a un nodo y lo detienes por completo dentro de él. Evitar pasarte (overflick) depende justo de ese último momento de frenado, y el ejercicio lo aísla.',
  },
  {
    q: '¿Cómo se calculan los puntos?',
    a: 'Una parada dentro del nodo (indicador ARREST READY) da 50 puntos × multiplicador. No se hace clic. Desde 5 paradas seguidas: 1,2x; desde 10: 1,5x; desde 25: 2,0x; desde 40: el máximo de 3,0x.',
  },
  {
    q: '¿Qué pasa si fallo?',
    a: 'Un fallo es atravesar un nodo sin detenerte o dejar que un nodo salga de la pantalla. Cada fallo resta 1 segundo al tiempo restante y devuelve el multiplicador a 1,0x. No se restan puntos. Esta penalización de tiempo está siempre activa y no se puede desactivar.',
  },
  {
    q: '¿Cuándo cuenta una parada?',
    a: 'En cuanto el cursor, dentro del nodo, se mueve a menos de 1,5 píxeles por fotograma. Si va más rápido, el contacto cuenta como atravesarlo. Es un umbral propio del ejercicio.',
  },
  {
    q: '¿Cómo aumenta la dificultad?',
    a: 'El nivel sube con la puntuación, del 1 al 10 (a los 250, 500, 1.000, 2.000, 3.500, 5.500, 8.000, 11.000 y 15.000 puntos). La velocidad de los nodos pasa de 360 a 1.800 px/s, hay de 1 a 5 nodos a la vez y su radio baja de 15 a 6 px.',
  },
  {
    q: '¿Es más difícil frenar que arrancar?',
    a: 'Mucha gente lo siente así, aunque varía según la persona. Un modelo conocido describe el arranque y la parada como una carrera entre dos procesos (Logan & Cowan, 1984); si la parada llega tarde, la inercia lleva el cursor más allá del objetivo. La puntuación no mide un tiempo de reacción de parada.',
  },
  {
    q: '¿Mejoraré en Valorant o CS2?',
    a: 'No se puede garantizar. El ejercicio practica el frenado sobre el objetivo, pero la sensibilidad, la pantalla y las reglas de cada juego son distintas. Úsalo para comparar tus propias partidas.',
  },
  {
    q: '¿Qué necesito?',
    a: 'Un ratón. Tras la cuenta atrás se activa el Pointer Lock y juegas solo moviendo el ratón; el ejercicio no arranca en dispositivos solo táctiles. Usa tus DPI y tu sensibilidad habituales y compara los cambios en las mismas condiciones.',
  },
  {
    q: '¿Dónde se guardan los resultados?',
    a: 'La mejor puntuación, el mejor multiplicador y el nivel máximo se guardan solo en el almacenamiento local de tu navegador y no se envían a ningún servidor. Si borras los datos del navegador, se pierden.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo hacer el ejercicio de frenado de puntería',
  description: 'Cuatro pasos para detener el cursor limpiamente dentro del objetivo.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Acercarte rápido', text: 'En cuanto aparezca un nodo, lleva el cursor con rapidez a su trayectoria.' },
    { '@type': 'HowToStep', position: 2, name: 'Frenar antes del borde', text: 'Reduce la velocidad justo antes de llegar al borde del nodo.' },
    { '@type': 'HowToStep', position: 3, name: 'Parar dentro del objetivo', text: 'Detén el cursor por completo dentro del nodo hasta que aparezca ARREST READY.' },
    { '@type': 'HowToStep', position: 4, name: 'Mantener la racha', text: 'Para en un nodo tras otro sin atravesarlos. Cada fallo cuesta 1 segundo.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  heading: 'Frenado de puntería: guía',
  intro: [
    'Reaction Chain es un ejercicio de frenado de puntería en el navegador: frenas el cursor sobre nodos que llegan desde los bordes de la pantalla y lo detienes por completo dentro de ellos. No hay clic; solo cuenta la parada. Una partida dura 45 segundos y cada fallo cuesta 1 segundo.',
    'Un modelo conocido describe el arranque y la parada como una carrera entre dos procesos (Logan & Cowan, 1984). Un movimiento de apuntado rápido consta de un desplazamiento amplio y una corrección fina (Woodworth, 1899), y cuanto más pequeño es el objetivo, más precisa debe ser la parada (Fitts, 1954).',
    'Compara resultados con el mismo ratón, la misma sensibilidad y el mismo monitor; la frecuencia de refresco y el dispositivo influyen en la latencia (Woods et al., 2015). Las cifras son registros de práctica y no garantizan ningún rendimiento en juegos.',
  ],
  benchmarks: {
    title: 'Niveles y dificultad (valores del juego)',
    headers: ['Nivel', 'Desde (puntos)', 'Velocidad de los nodos', 'Nodos a la vez', 'Radio del nodo'],
    rows: [
      ['1', '0', '360 px/s', '1', '15 px'],
      ['2', '250', '420 px/s', '1', '14 px'],
      ['3', '500', '500 px/s', '2', '13 px'],
      ['4', '1.000', '600 px/s', '2', '12 px'],
      ['5', '2.000', '720 px/s', '2', '11 px'],
      ['6', '3.500', '850 px/s', '3', '10 px'],
      ['7', '5.500', '1.000 px/s', '3', '9 px'],
      ['8', '8.000', '1.200 px/s', '4', '8 px'],
      ['9', '11.000', '1.450 px/s', '4', '7 px'],
      ['10', '15.000', '1.800 px/s', '5', '6 px'],
    ],
    note: 'Estos valores están fijados en el código del ejercicio. No son estadísticas de usuarios ni percentiles.',
  },
  techniques: {
    title: 'Cuatro técnicas para una parada limpia',
    items: [
      { name: 'Frenar antes del borde', desc: 'Frenar justo en el borde del nodo es demasiado tarde. Empieza a reducir un poco antes.', tips: 'Al principio fíjate más en ARREST READY que en los puntos.' },
      { name: 'Parar con suavidad', desc: 'Los dedos y la muñeca tensos hacen temblar el cursor. Frena con suavidad, como si dejaras que la inercia se apague.', tips: 'La alfombrilla y los patines cambian la sensación de parada: compara siempre con el mismo equipo.' },
      { name: 'No atravesar', desc: 'Pasar rápido por encima de un nodo no cuenta como parada, cuesta 1 segundo y rompe la racha.', tips: 'Mantén la parada un instante.' },
      { name: 'No dejar escapar ningún nodo', desc: 'Un nodo que sale de la pantalla también cuesta 1 segundo. Con varios nodos, atiende primero el más cercano.', tips: 'El multiplicador solo llega a 3,0x tras 40 paradas seguidas: la calma compensa.' },
    ],
  },
  steps: [
    'Haz clic en Empezar y espera a que se active el Pointer Lock tras la cuenta atrás.',
    'Lleva el cursor con rapidez a la trayectoria del nodo.',
    'Frena justo antes del borde y detente por completo dentro del nodo.',
    'Encadena paradas durante 45 segundos. Cada fallo cuesta 1 segundo.',
  ],
  audience: 'Jugadores de FPS que quieren reducir el overflick con práctica específica, y cualquiera que quiera practicar el frenado del ratón.',
  faqs: { title: 'Preguntas frecuentes', items: faqs },
  sources: pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedReactionChainPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ReactionChainClient
        copy={{
          title: 'Frenado de Puntería: Para la Mira sin Pasarte',
          subtitle: 'Lleva el cursor al objetivo y detente en seco',
          description: 'Detener un movimiento rápido justo sobre el objetivo cuesta a muchos más que iniciarlo. Un modelo conocido describe el arranque y la parada como una carrera entre dos procesos (Logan & Cowan, 1984); si la parada llega tarde, la inercia lleva el cursor más allá del objetivo. Pruébalo con los nodos.',
          hudLabels: {
            score: 'Puntos',
            time: 'Tiempo restante',
            accuracy: 'Tasa de paradas',
            bestScore: 'Mejor puntuación',
            getReady: 'Prepárate',
          },
          resultLabels: {
            newBest: 'Nuevo récord',
            points: 'Puntos',
            accuracy: 'Tasa de paradas',
            totalArrests: 'Paradas',
            maxCombo: 'Mejor multiplicador',
            peakLevel: 'Nivel máximo',
            playAgain: 'Jugar otra vez',
          },
          rulesTitle: 'Reglas y puntuación',
          rulesItems: [
            { title: 'Parada en el nodo (+50 pts)', text: 'Detén el cursor por completo dentro del nodo (ARREST READY): 50 puntos × multiplicador. No se hace clic.' },
            { title: 'Multiplicador (máx. 3,0x)', text: 'Desde 5 paradas seguidas 1,2x, desde 10 1,5x, desde 25 2,0x, desde 40 3,0x.' },
            { title: 'Atravesar / objetivo perdido (-1 s)', text: 'Atravesar un nodo sin detenerte o dejar que salga de la pantalla cuesta 1 segundo y devuelve el multiplicador a 1,0x (no se restan puntos).' },
            { title: 'Niveles 1 a 10', text: 'Con la puntuación suben la velocidad de los nodos (hasta 1.800 px/s) y su número (hasta 5); los nodos se hacen más pequeños.' },
          ],
          aboutTitle: 'Sobre el frenado de puntería',
          aboutSections: [
            { title: 'Practicar solo la parada', content: 'Reaction Chain aísla el frenado sobre el objetivo. No hay clic; solo hay puntos si el cursor queda completamente quieto dentro del nodo.' },
            { title: 'Una carrera entre arrancar y parar', content: 'Un modelo conocido describe el arranque y la parada como una carrera entre dos procesos (Logan & Cowan, 1984). Si la parada llega tarde, el cursor se pasa del objetivo. El efecto del ejercicio no está demostrado; sirve para comparar tus propias partidas.' },
          ],
          aboutCards: [
            { title: 'Para quién', desc: 'Jugadores de FPS que quieren pasarse menos del objetivo, y cualquiera que quiera practicar el frenado del ratón.', bgClass: 'bg-blue-600/30', iconClass: 'text-blue-400' },
            { title: 'Qué practicas', desc: 'El momento de frenar, la parada en objetivos pequeños y la intercepción de objetivos que cruzan la pantalla.', bgClass: 'bg-emerald-600/30', iconClass: 'text-emerald-400' },
            { title: 'Criterio de parada', desc: 'Moverse a menos de 1,5 píxeles por fotograma dentro del nodo cuenta como parada.', bgClass: 'bg-purple-600/30', iconClass: 'text-purple-400' },
          ],
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills />
      </ReactionChainClient>
    </>
  );
}
