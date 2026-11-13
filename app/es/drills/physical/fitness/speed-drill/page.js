import SpeedDrillClient from '@/app/drills/physical/fitness/speed-drill/SpeedDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/physical/fitness/speed-drill';
const title = 'Test de Clic Rápido: Objetivos que se Encogen | SkillDrills';
const description = 'Clic rápido en objetivos que se encogen: juego gratis con el ratón en el navegador. Cada acierto suma 2 s; cada fallo o objetivo perdido resta 1 s.';

export const metadata = {
  title,
  description,
  keywords: ['clic rápido en objetivos que se encogen', 'objetivos que se encogen', 'objetivos móviles', 'juego de clic con el ratón', 'clic rápido y preciso'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/fitness/speed-drill') },
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
    { '@type': 'ListItem', position: 3, name: 'Test de Clic Rápido', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Test de Clic Rápido: objetivos que se encogen',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Test de Clic Rápido – aplicación web',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador actual compatible con HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Speed Drill: clic rápido en objetivos que se encogen',
  url,
  description: 'Haz clic en objetivos móviles que se encogen antes de que desaparezcan: un juego con el ratón en el navegador.',
  genre: ['Action Game', 'Casual Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: '¿Cómo funciona el Test de Clic Rápido?', a: 'Objetivos redondos se mueven por la pantalla y se encogen; tienes que hacer clic en ellos antes de que desaparezcan. Cada acierto combina localizar el objetivo, mover el cursor y hacer un clic preciso, y se guardan la puntuación y la racha. Es un juego de práctica en el navegador.' },
  { q: '¿Por qué los objetivos son cada vez más pequeños?', a: 'Un objetivo más pequeño es más difícil de acertar, como describe la ley de Fitts (Fitts, 1954). Cada objetivo se encoge desde que aparece y desaparece al llegar a 4 px de radio: cuanto más tarde hagas clic, más difícil (con la opción de tiempo límite desactivada, los objetivos no se encogen). Lo mejor es acertar pronto, mientras el objetivo aún es grande.' },
  { q: '¿Cómo se calculan los puntos y el tiempo?', a: 'Cada acierto da 100 puntos multiplicados por la racha y el nivel, y suma 2 segundos al tiempo restante (máximo 60 segundos). La partida empieza con 45 segundos y el nivel sube cada 1.750 puntos. Si un objetivo desaparece o haces clic en el vacío, la racha vuelve a cero y se resta 1 segundo.' },
  { q: '¿Mide los clics por segundo?', a: 'No. El juego no cuenta cuántos clics haces ni a qué velocidad. Cada objetivo hay que acertarlo con un clic preciso, y un clic en el vacío resta 1 segundo, así que hacer clics sin parar te perjudica.' },
  { q: '¿Qué cambia al subir de nivel?', a: 'Los objetivos se mueven y se encogen más rápido, y los nuevos aparecen más pequeños (radio de 32 px hasta un mínimo de 10 px). Los aciertos sin fallos suben el multiplicador de racha hasta 3,0x. Una puntuación alta exige velocidad y precisión a la vez.' },
  { q: '¿Qué pasa si fallo?', a: 'Si un objetivo desaparece o haces clic fuera, la racha vuelve a cero al instante y el tiempo restante baja 1 segundo. Esta penalización se aplica siempre, sin depender de ningún ajuste. La clave es equilibrar velocidad y calma.' },
  { q: '¿Me hará mejor en los juegos de disparos?', a: 'Esta página no lo garantiza. Acertar rápido objetivos pequeños en movimiento se parece a un ejercicio de puntería, pero la sensibilidad, la pantalla y las reglas de cada juego son distintas. Usa los resultados para comparar tu propia práctica.' },
  { q: '¿Qué ajustes de ratón conviene usar?', a: 'No hay una respuesta única. Empieza con tus DPI, sensibilidad y agarre habituales, y compara las puntuaciones en las mismas condiciones después de cada cambio. Si notas dolor en la muñeca o los dedos, haz una pausa o para.' },
  { q: '¿Influyen la frecuencia del monitor y el polling rate?', a: 'Una frecuencia de refresco alta muestra el movimiento de los objetivos con más detalle, y un polling rate alto envía los movimientos del ratón más a menudo. Ambos son factores conocidos de latencia (Woods et al., 2015), pero no hemos medido cuánto cambian la puntuación en este ejercicio.' },
  { q: '¿Dónde se guardan mis resultados?', a: 'La puntuación y la mejor racha se guardan en el almacenamiento local de tu navegador; este ejercicio no las envía a ningún servidor. Si borras los datos del navegador, los resultados también se borran. Más detalles en la política de privacidad.' },
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
  name: 'Jugar al Test de Clic Rápido en 4 pasos',
  description: 'Cómo acertar objetivos que se encogen y acumular puntos y racha.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Localiza el objetivo', text: 'Mantén toda la pantalla a la vista y detecta rápido cada objetivo nuevo.', url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: 'Mueve el cursor de un solo gesto', text: 'Sin dudar, lleva el cursor con un solo movimiento cerca del objetivo.', url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: 'Haz clic antes de que se encoja', text: 'Mientras el objetivo aún es grande, frena al final y haz clic con precisión.', url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: 'Mantén la racha', text: 'Encadena aciertos sin fallos para acumular multiplicador y tiempo extra.', url: `${url}#step-4` },
  ],
};

const speedGuide = {
  heading: 'Guía del Test de Clic Rápido',
  intro: {
    title: '¿Qué es este juego de clic rápido en objetivos que se encogen?',
    paragraphs: [
      'El Speed Drill es un juego de clic rápido en objetivos que se encogen: objetivos redondos se mueven por la pantalla y se hacen más pequeños hasta desaparecer, y tienes que acertarlos antes. Cada clic combina búsqueda, movimiento del cursor y precisión; es un ejercicio distinto de un simple test de tiempo de reacción y no cuenta clics por segundo.',
      'Apuntar rápido con el ratón suele describirse en dos fases: un movimiento amplio y una pequeña corrección final (Woodworth, 1899). La ley de Fitts (Fitts, 1954) explica por qué los objetivos pequeños son más difíciles. Como aquí los objetivos se encogen sin parar, conviene iniciar el movimiento amplio pronto.',
      'Los objetivos móviles claros y con contraste llaman la atención incluso en el borde del campo visual (Treisman & Gelade, 1980). En lugar de fijar la vista en un punto, mira toda la pantalla para detectar antes los objetivos nuevos.',
      'Compara resultados con el mismo ratón, la misma sensibilidad y el mismo monitor; la frecuencia de refresco y el dispositivo influyen en la latencia (Woods et al., 2015). Las cifras son registros de práctica.',
    ],
  },
  benchmarks: {
    title: 'Referencias de puntuación',
    headers: ['Nivel', 'Puntos', 'Precisión', 'En qué trabajar'],
    rows: [
      ['Nivel 1', 'menos de 6.000', 'menos del 70 %', 'Detectar antes los objetivos y reducir clics fallidos'],
      ['Nivel 2', '6.000 – 10.999', '70 – 81 %', 'Hacer clic pronto, mientras el objetivo es grande'],
      ['Nivel 3', '11.000 – 16.999', '82 – 89 %', 'Mantener la racha sin cortes'],
      ['Nivel 4', '17.000 – 23.999', '90 – 94 %', 'Seguir siendo preciso con objetivos rápidos'],
      ['Nivel 5', '24.000 o más', '95 % o más', 'Aprovechar el tiempo extra para partidas largas'],
    ],
    note: 'Estos niveles son bandas de práctica definidas por SkillDrills. No se basan en estadísticas de usuarios, percentiles ni valores de jugadores profesionales.',
  },
  techniques: {
    title: '4 consejos para sumar más puntos',
    items: [
      { name: 'Gesto amplio, corrección pequeña', desc: 'Lleva el cursor de un solo movimiento cerca del objetivo y frena solo al llegar. Acercarte despacio le da tiempo al objetivo para encogerse.', tips: 'Trayectos largos con muñeca y brazo, ajuste fino con los dedos.' },
      { name: 'Clic mientras el objetivo es grande', desc: 'Cuanto más pequeño el objetivo, más difícil acertarlo. No busques el centro perfecto: haz clic pronto, dentro del borde.', tips: 'Si la precisión cae mucho, juega un poco más despacio.' },
      { name: 'Mira toda la pantalla', desc: 'Fijar la vista en un punto hace que detectes tarde los objetivos del otro lado. Mira el centro con calma y percibe los movimientos de la periferia.', tips: 'Primero los ojos, la mano justo después.' },
      { name: 'Agarre relajado', desc: 'Mantén tu agarre habitual sin tensión. Apretar demasiado cuesta precisión y cansa la muñeca.', tips: 'Descansa si notas fatiga y compara siempre con el mismo equipo.' },
    ],
  },
  steps: [
    'Siéntate cómodo y deja el cursor en el centro de la pantalla.',
    'En cuanto aparezca un objetivo, lleva el cursor cerca de él de un solo gesto.',
    'Haz clic antes de que se encoja para sumar puntos y 2 segundos extra.',
    'Encadena aciertos sin fallos para subir la racha y la puntuación.',
  ],
  audience: 'Jugadores y cualquier persona que quiera practicar, sin presión, el clic rápido y preciso sobre objetivos móviles que se encogen.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'treisman1980', 'lee1976', 'woods2015'),
};

export default function LocalizedSpeedDrillPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SpeedDrillClient
        copy={{
          title: 'Test de Clic Rápido: Objetivos que se Encogen',
          hudLabels: { score: 'Puntuación', time: 'Tiempo', bestScore: 'Mejor puntuación', bestCombo: 'Mejor racha', getReady: 'PREPÁRATE' },
          resultLabels: { accuracy: 'Precisión', hits: 'Aciertos', bestReaction: 'Mejor reacción', peakLevel: 'Nivel máximo' },
          rulesTitle: 'Reglas y puntuación',
          rulesItems: [
            { title: 'Acierta y gana tiempo', text: 'Haz clic en cada objetivo antes de que desaparezca. Cada acierto da 100 puntos (con multiplicador de racha y nivel) y 2 segundos extra (máximo 60 segundos).' },
            { title: 'Multiplicador de racha', text: 'Los aciertos sin fallos suben el multiplicador de racha hasta 3,0x.' },
            { title: 'Dificultad creciente', text: 'Cada 1.750 puntos sube el nivel; los objetivos se mueven y se encogen más rápido.' },
            { title: 'Objetivo perdido o clic fuera', text: 'Si un objetivo desaparece o haces clic fuera, la racha vuelve a cero y se resta 1 segundo.' },
          ],
          aboutTitle: 'Sobre el Speed Drill',
          aboutSections: [
            { title: 'Gesto amplio, corrección pequeña', subtitle: 'Modelo de dos fases de Woodworth (1899)', content: 'Apuntar rápido es un movimiento amplio seguido de una pequeña corrección final. Cuanto más sube el nivel, menos tiempo queda para corregir.' },
            { title: 'Objetivos que se encogen y ley de Fitts', subtitle: 'Objetivos más pequeños, mayor dificultad', content: 'A medida que el objetivo se encoge hasta 4 px de radio, el margen se reduce. Hacer clic pronto, mientras es grande, es lo esencial.' },
            { title: 'Objetivos móviles que llaman la atención', subtitle: 'Búsqueda visual según Treisman (1980)', content: 'Los objetivos móviles con contraste destacan incluso en el borde de la visión. Mirar toda la pantalla ayuda a detectar antes los objetivos nuevos.' },
            { title: 'Estimar el tiempo antes de que desaparezca', subtitle: 'Trabajos de Lee (1976) sobre el tiempo hasta el contacto', content: 'Investigación sobre cómo estimamos el tiempo restante en objetos que se acercan o cambian de tamaño; útil para calcular el clic antes de que el objetivo desaparezca.' },
          ],
        }}
      />
      <DrillGuide {...speedGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/fitness/speed-drill" />
    </>
  );
}
