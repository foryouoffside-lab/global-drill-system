import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/physical/reflex-training/quick-dodge';
const title = 'Juego de esquivar con el ratón: proyectiles | SkillDrills';
const description = 'Juego de esquivar con el ratón gratis: mueve el cursor para evitar los proyectiles rojos que llegan desde todos los bordes hacia ti. Rondas de 45 s.';

export const metadata = {
  title,
  description,
  keywords: ['juego de esquivar con el ratón', 'juego de esquivar con el mouse', 'juegos de esquivar', 'esquivar proyectiles', 'esquivar balas'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
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
    { '@type': 'ListItem', position: 3, name: 'Juego de esquivar con el ratón', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Juego de esquivar con el ratón (Quick Dodge)',
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
  { q: '¿Cómo funciona este juego de esquivar con el ratón?', a: 'Proyectiles rojos y redondos aparecen en uno de los cuatro bordes de la pantalla y van en línea recta hacia el punto donde estaba tu cursor cuando aparecieron. Un proyectil que sale de la pantalla sin tocarte cuenta como esquiva. Una ronda dura 45 segundos.' },
  { q: '¿Los proyectiles persiguen el cursor?', a: 'No. Apuntan a la posición del cursor en el momento en que aparecen y luego siguen recto sin cambiar de dirección. Crecen un poco por el camino: deja algo de margen.' },
  { q: '¿Cómo se calculan los puntos y el combo?', a: 'Cada proyectil esquivado da puntos base multiplicados por el combo. Los puntos base suben de 2 a 20 con el nivel. El multiplicador es 1,1x desde 3 esquivas seguidas, 1,5x con 10, 2,0x con 20, 2,5x con 30 y 3,0x con 50.' },
  { q: '¿Cómo aumenta la dificultad?', a: 'Cada ronda empieza en el nivel 1. El nivel sube 1 cada 250 puntos y 1 más cada 4 esquivas seguidas. La velocidad pasa de 300 px/s a 1.600 px/s en el nivel 15 y sigue subiendo después; un combo largo suma hasta 200 px/s. El intervalo entre proyectiles baja de 0,65 a 0,10 segundos y puede haber de 8 a 58 proyectiles a la vez en pantalla.' },
  { q: '¿Qué pasa si me alcanza un proyectil?', a: 'El combo vuelve a 1,0x y todos los proyectiles desaparecen de la pantalla, con un destello rojo y una sacudida. La puntuación y el tiempo restante no cambian. El destello rojo se puede desactivar durante la partida con el botón de abajo a la derecha.' },
  { q: '¿Qué controles se usan?', a: 'Solo el ratón (o mouse). Al empezar, el puntero se bloquea y se aplica la sensibilidad de los ajustes del sitio. En el teclado solo sirve la tecla Esc (salir). Se recomienda un ordenador con ratón.' },
  { q: '¿Cómo se asigna la nota?', a: 'La puntuación final se compara con 17.000 puntos: S+ desde unos 15.350, S desde unos 12.300, A desde unos 9.550, B desde 6.120, C desde unos 3.450 y D desde 1.530. Son tramos de práctica de SkillDrills, no estadísticas de usuarios ni percentiles.' },
  { q: '¿En qué se diferencia de esquivar casillas en la cuadrícula?', a: 'Aquí huyes de proyectiles libres que llegan desde todos los lados. En el juego de la cuadrícula 3x3 de la misma categoría eliges una de las 9 casillas fijas antes de que explote.' },
  { q: '¿Es gratis? ¿Dónde se guardan mis récords?', a: 'Sí, gratis, sin instalación ni cuenta, directamente en el navegador. La mejor puntuación y el mejor combo se quedan en el almacenamiento local de tu navegador.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  'Pulsa Empezar; tras una cuenta atrás de 3 segundos, el cursor parte del centro de la pantalla.',
  'Cuando aparece un proyectil en un borde, apunta a tu posición actual: apártate a un lado.',
  'Haz movimientos cortos y quédate en los huecos libres entre los proyectiles.',
  'Encadena esquivas sin que te alcancen, sube el combo y busca tu récord en 45 segundos.',
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo jugar al juego de esquivar con el ratón',
  description: 'Cuatro pasos para evitar los proyectiles y subir el combo.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Paso ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dodgeGuide = {
  heading: 'Guía del juego de esquivar con el ratón',
  intro: [
    'Este juego de esquivar con el ratón (Quick Dodge) se juega en el navegador: proyectiles rojos llegan desde todos los bordes hacia tu cursor y los evitas moviendo el ratón o el mouse. El objetivo es que no te alcancen; cuantas más esquivas seguidas, más sube el multiplicador de combo.',
    'Cada proyectil apunta a la posición del cursor cuando aparece y luego va recto. Quedarse quieto significa recibir el impacto; un paso al lado suele bastar. Los movimientos rápidos se planifican antes de empezar (Kawato, 1999): decide adónde ir en cuanto aparece un proyectil.',
    'Al subir de nivel, los proyectiles son más rápidos, más frecuentes y más grandes. Cuanto más pequeños los huecos libres, más preciso debe ser el movimiento (Fitts, 1954). Un impacto vacía la pantalla y solo reinicia el combo.',
    'Los resultados son marcas de práctica propias de SkillDrills, no un examen médico ni una medida de rendimiento deportivo. La frecuencia de la pantalla y el periférico influyen en la latencia (Woods et al., 2015): compara tus puntuaciones con el mismo equipo.',
  ],
  benchmarks: {
    title: 'Tramos de nota (tramos de práctica SkillDrills)',
    headers: ['Nota', 'Puntos'],
    rows: [
      ['S+', 'desde unos 15.350'],
      ['S', 'desde unos 12.300'],
      ['A', 'desde unos 9.550'],
      ['B', 'desde 6.120'],
      ['C', 'desde unos 3.450'],
      ['D', 'desde 1.530'],
    ],
    note: 'Los tramos comparan la puntuación final con 17.000 puntos y son tramos de práctica de SkillDrills. No son estadísticas de usuarios ni percentiles.',
  },
  techniques: {
    title: 'Consejos para sumar más puntos',
    items: [
      { name: 'Fíjate en la aparición', desc: 'El proyectil va hacia donde estaba el cursor cuando apareció. Un paso corto al lado suele bastar.', tips: 'No te quedes mucho tiempo en el mismo sitio.' },
      { name: 'Movimientos pequeños', desc: 'Los gestos amplios llevan el cursor directo a nuevos proyectiles. Quédate en los huecos libres con movimientos cortos.', tips: 'El lado por el que acaba de pasar un proyectil suele estar libre.' },
      { name: 'Cuenta con el tamaño', desc: 'Los proyectiles crecen por el camino. Esquiva con margen en vez de por los pelos.', tips: 'En la fase rápida, primero la seguridad.' },
      { name: 'Mantén el combo', desc: 'Cuanto más larga la racha, más suben el multiplicador y el nivel. Tras un impacto la pantalla queda vacía: vuelve a empezar con calma.', tips: 'Relaja muñeca y hombro; para si sientes dolor.' },
    ],
  },
  steps,
  audience: 'Para quien busca juegos de esquivar en el navegador, como esquivar balas u obstáculos, y para jugadores que quieren practicar el control del ratón.',
  faqs,
  sources: pickSources('kawato1999', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuickDodgeClient
        copy={{
          title: 'Juego de esquivar con el ratón',
          hudLabels: { score: 'Puntuación', time: 'Tiempo', bestScore: 'Mejor puntuación', bestCombo: 'Mejor combo', getReady: 'PREPÁRATE' },
          resultLabels: { newBest: 'NUEVO RÉCORD', points: 'Puntos', accuracy: 'Tasa de esquiva', dodges: 'Esquivas', peakSpeed: 'Velocidad máx.', peakLevel: 'Nivel máx.', playAgain: 'Jugar de nuevo' },
          rulesTitle: 'Reglas y cálculo de puntos',
          rulesItems: [
            { title: 'Esquiva los proyectiles', text: 'Proyectiles rojos aparecen en un borde y van hacia donde estaba el cursor en ese momento. Si salen de la pantalla sin tocarte, cuenta como esquiva.' },
            { title: 'Multiplicador de combo', text: 'Las esquivas seguidas suben el multiplicador hasta 3,0x (con 50 seguidas).' },
            { title: 'Dificultad creciente', text: 'El nivel sube con los puntos y las rachas; los proyectiles pasan de 300 px/s a más de 1.600 px/s y aparecen más a menudo.' },
            { title: 'Impacto', text: 'El combo vuelve a 1,0x y la pantalla se vacía. La puntuación y la ronda de 45 segundos no cambian.' },
          ],
          aboutTitle: 'Sobre el juego de esquivar',
          aboutSections: [
            { title: 'Proyectiles en línea recta', content: 'Cada proyectil apunta al cursor cuando aparece y luego va recto. Regla básica: apártate en cuanto aparece.' },
            { title: 'Decide antes', subtitle: 'Kawato, 1999', content: 'Los movimientos rápidos se planifican de antemano. Fija tu destino en cuanto surge un proyectil.' },
            { title: 'Huecos cada vez más pequeños', subtitle: 'Fitts, 1954', content: 'Cuantos más proyectiles, más pequeños los huecos libres y más preciso debe ser el gesto.' },
            { title: 'Equipo y comparación', subtitle: 'Woods et al., 2015', content: 'La frecuencia de la pantalla y el periférico influyen en la latencia. Compara tus resultados con el mismo equipo.' },
          ],
        }}
      />
      <DrillGuide guide={dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
