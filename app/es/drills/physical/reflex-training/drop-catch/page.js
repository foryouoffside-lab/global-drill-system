import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/physical/reflex-training/drop-catch';
const title = 'Atrapar objetos que caen: verdes sí, rojos no | SkillDrills';
const description = 'Atrapar objetos que caen: haz clic solo en los verdes y deja pasar los señuelos rojos. +2 s por captura, -1 s por error. Gratis y sin registro.';

export const metadata = {
  title,
  description,
  keywords: [
    'atrapar objetos que caen',
    'atrapa los verdes, evita los rojos',
    'juego de clic con objetivos que caen',
    'señuelos rojos',
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch'),
  },
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
    { '@type': 'ListItem', position: 3, name: 'Atrapar objetos que caen', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Atrapar objetos que caen (Drop Catch)',
  url,
  description,
  genre: ['Action Game', 'Browser Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  operatingSystem: 'All',
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: '¿Cómo funciona el juego de atrapar objetos que caen?', a: 'Desde arriba caen objetivos. Haces clic solo en los verdes y dejas pasar los señuelos rojos sin tocarlos. Cada captura verde da 100 puntos (con multiplicadores de combo y nivel) y +2 segundos, hasta un máximo de 60 segundos. La ronda empieza con 45 segundos.' },
  { q: '¿Es el test de la regla?', a: 'No. En el test de la regla se atrapa una regla real y se calcula un tiempo de reacción a partir de la distancia de caída. Este juego no mide tiempos de reacción: distingues colores y solo haces clic en el verde; el resultado es una puntuación.' },
  { q: '¿Qué pasa si fallo?', a: 'Si un objetivo verde sale por abajo, haces clic en un señuelo rojo o haces clic en el vacío, el combo vuelve a 1,0x y pierdes 1 segundo. Esta penalización siempre está activa y no se puede desactivar.' },
  { q: '¿Qué cambia al subir de nivel?', a: 'El nivel sube cada 1.750 puntos, sin límite. La velocidad de caída pasa de unos 400 a 1.250 px/s, el intervalo entre objetivos nuevos baja de unos 0,8 a un mínimo de 0,18 segundos, la proporción de señuelos rojos sube del 15 % al 45 % y los objetivos se hacen más pequeños.' },
  { q: '¿Cómo evito hacer clic en los rojos sin querer?', a: 'Primero comprueba el color y después haz clic. Un modelo describe una carrera entre el impulso de hacer clic y la orden de parar (Logan et al., 1984). Un señuelo rojo que dejas caer no cuesta nada: ante la duda, no hagas clic.' },
  { q: '¿Hacia dónde debo mirar?', a: 'En vez de fijar un punto en el borde superior, ayuda abarcar con la vista el tercio superior y el central. Si colocas el cursor bajo la trayectoria, el recorrido es más corto. Lo que mejor funciona depende de cada persona: pruébalo.' },
  { q: '¿Influye la frecuencia del monitor?', a: 'Con más hercios, un objetivo rápido salta menos distancia entre fotogramas y la latencia tiende a bajar (Woods et al., 2015). No hemos medido cuánto afecta a tu puntuación en este juego, así que compara resultados en el mismo equipo.' },
  { q: '¿Dónde se guardan mis resultados?', a: 'La puntuación y el mejor combo se guardan en el almacenamiento local de tu navegador y este juego no los envía a ningún servidor. Si borras los datos del navegador, se pierden.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  'Coloca el cursor en el centro de la pantalla y vigila el tercio superior y el central.',
  'Cuando cae un objetivo, comprueba primero: ¿verde o rojo?',
  'Haz clic en los verdes y deja caer los señuelos rojos sin tocarlos.',
  'Con +2 segundos por captura y el combo mantenido, sube la puntuación.',
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo jugar a atrapar objetos que caen',
  description: 'Atrapa los verdes y deja pasar los rojos en cuatro pasos.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Paso ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dropGuide = {
  heading: 'Guía: atrapar objetos que caen',
  intro: [
    'Drop Catch es un juego gratis de navegador para atrapar objetos que caen: los objetivos bajan desde arriba, haces clic solo en los verdes y dejas pasar los señuelos rojos. Atrapa los verdes, evita los rojos: cada captura suma +2 segundos y cada error resta 1 segundo.',
    'Cuando primero hay que distinguir entre estímulos, se responde por lo general más despacio que en una reacción simple (Donders, 1868). Además, un modelo describe una carrera entre el impulso de hacer clic y la orden de parar (Logan et al., 1984). El juego permite notar ambas ideas jugando.',
    'Lee (1976) estudió cómo se estima el tiempo que falta para que llegue un objeto que se acerca. La velocidad de caída sube con el nivel de unos 400 a 1.250 px/s: cuanto más tarde decides, más difícil es.',
    'La puntuación es un resultado de práctica. Compara tus resultados en el mismo equipo y la misma pantalla.',
  ],
  benchmarks: {
    title: 'Orientación: tramos de puntuación',
    headers: ['Tramo', 'Puntos', 'Precisión', 'En qué centrarte'],
    rows: [
      ['1', 'menos de 6.000', 'menos del 70 %', 'No hacer clic nunca en los señuelos rojos'],
      ['2', '6.000 – 10.999', '70 – 81 %', 'Primero el color, después el clic'],
      ['3', '11.000 – 16.999', '82 – 89 %', 'Mantener el combo sin cortes'],
      ['4', '17.000 – 23.999', '90 – 94 %', 'Dejar pasar señuelos también a alta velocidad'],
      ['5', 'desde 24.000', 'desde el 95 %', 'Alargar la ronda con el bonus de +2 s'],
    ],
    note: 'Estos tramos son niveles de práctica de SkillDrills. No son estadísticas de usuarios, ni percentiles, ni una referencia profesional.',
  },
  techniques: {
    title: '4 consejos para sumar más puntos',
    items: [
      { name: 'Mirada amplia, color primero', desc: 'No fijes un solo punto: abarca el tercio superior y el central. Cuando aparece un objetivo, comprueba primero el color.', tips: 'Prepara el clic solo cuando el color esté claro.' },
      { name: 'Deja caer el rojo', desc: 'Un señuelo rojo que dejas caer no cuesta nada. Si haces clic, pierdes el combo y 1 segundo: ante la duda, no hagas clic.', tips: 'Cuando haya más señuelos, la precisión va antes que la velocidad.' },
      { name: 'Espera bajo la trayectoria', desc: 'En vez de perseguir el objetivo, coloca el cursor antes bajo su trayectoria. El recorrido es más corto.', tips: 'Atrapar en el centro de la pantalla te da más margen.' },
      { name: 'Agarre relajado', desc: 'Para los movimientos rápidos arriba y abajo, relaja la mano y corrige con dedos y muñeca.', tips: 'Descansa si notas cansancio y compara en el mismo equipo.' },
    ],
  },
  steps,
  audience: 'Para quien busca un juego de clic con objetivos que caen y distinción de colores, y para jugadores que quieren practicar contener el clic.',
  faqs,
  sources: pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedDropCatchPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DropCatchClient
        copy={{
          title: 'Atrapar objetos que caen',
          hudLabels: { score: 'Puntuación', time: 'Tiempo', bestScore: 'Mejor puntuación', bestCombo: 'Mejor racha', getReady: 'PREPÁRATE' },
          resultLabels: { accuracy: 'Precisión', catches: 'Capturas', fatalDecoys: 'Señuelos tocados', peakLevel: 'Nivel máximo' },
          rulesTitle: 'Reglas y puntuación',
          rulesItems: [
            { title: 'Atrapa los verdes y gana tiempo', text: 'Haz clic en los objetivos verdes que caen para ganar 100 puntos (con multiplicadores de combo y nivel) y +2 segundos (máximo 60 segundos).' },
            { title: 'Multiplicador de combo', text: 'Las capturas sin errores suben el multiplicador hasta 3,0x.' },
            { title: 'Subida de nivel', text: 'El nivel sube cada 1.750 puntos. Aumentan la velocidad de caída (hasta 1.250 px/s) y la proporción de señuelos (hasta el 45 %).' },
            { title: 'Errores y penalización de tiempo', text: 'Un objetivo verde que se escapa, un clic en un señuelo rojo o en el vacío reinicia el combo y cuesta 1 segundo.' },
          ],
          aboutTitle: 'Sobre Drop Catch',
          aboutSections: [
            { title: 'El momento justo con objetivos que caen', subtitle: 'Lee (1976): tiempo hasta el contacto', content: 'La velocidad de caída sube con el nivel. Los estudios de Lee sobre cómo estimamos cuándo llega un objeto ayudan a entender el momento del clic.' },
            { title: 'Hacer clic o parar', subtitle: 'Logan (1984): modelo de señal de parada', content: 'Ante los señuelos rojos compiten el impulso de hacer clic y la orden de parar. El juego practica no hacer clic en los señuelos.' },
            { title: 'Reacción de elección', subtitle: 'Donders (1868): estudios sobre el tiempo de reacción', content: 'Cuando hay que distinguir entre estímulos, la respuesta suele ser más lenta que una reacción simple. Aquí solo haces clic en el verde.' },
            { title: 'Movimiento amplio, corrección fina', subtitle: 'Woodworth (1899) y Fitts (1954)', content: 'Apuntar rápido combina un movimiento grande y una pequeña corrección final. Primero colócate bajo la trayectoria, luego frena y haz clic.' },
          ],
        }}
      />
      <DrillGuide guide={dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
