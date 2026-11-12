import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/physical/coordination/dynamic-grid-evasion';
const title = 'Esquivar casillas en la cuadrícula 3x3 | SkillDrills';
const description = 'Esquivar casillas en la cuadrícula: saca el cursor de las casillas que parpadean en naranja en una cuadrícula 3x3 antes de que exploten. Rondas de 45 s.';

export const metadata = {
  title,
  description,
  keywords: ['esquivar casillas en la cuadrícula', 'cuadrícula 3x3', 'zonas de peligro', 'juego con el ratón online'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion') },
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
    { '@type': 'ListItem', position: 3, name: 'Esquivar casillas en la cuadrícula', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Esquivar casillas en la cuadrícula 3x3',
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
  { q: '¿Cómo funciona este juego de esquivar casillas en la cuadrícula?', a: 'La pantalla se divide en una cuadrícula 3x3. En cada oleada algunas casillas parpadean en naranja como aviso. Cuando el aviso termina, esas casillas explotan en rojo; si en ese momento tu cursor está fuera de ellas, superas la oleada. La siguiente oleada empieza 0,35 segundos después de la explosión y una ronda dura 45 segundos.' },
  { q: '¿Cuándo se comprueba la posición del cursor?', a: 'Solo en el momento de la explosión. Puedes cruzar casillas de peligro durante el aviso; basta con estar en una casilla segura cuando explotan. El cursor empieza en el centro y la casilla central también puede ser peligrosa.' },
  { q: '¿Cómo se calculan los puntos y el combo?', a: 'Cada oleada superada da 100 puntos multiplicados por el combo. El multiplicador es 1,1x desde 3 oleadas seguidas, 1,25x con 5, 1,5x con 10, 2,0x con 20 y 2,5x con 30. El código prevé 3,0x con 50 seguidas, pero una ronda de 45 segundos apenas pasa de 40 oleadas: en la práctica, 2,5x es el máximo alcanzable.' },
  { q: '¿Cómo aumenta la dificultad?', a: 'Cada ronda empieza en el nivel 1. El nivel sube 1 cada 250 puntos y 1 más cada 4 oleadas seguidas. El aviso baja de 1,4 a 0,45 segundos y las casillas de peligro pasan de 3 a 7, de modo que solo quedan 2 casillas seguras. Ambos valores llegan a su límite en el nivel 15.' },
  { q: '¿Una explosión resta puntos o tiempo?', a: 'No. El combo vuelve a 0, con un destello rojo y una sacudida de pantalla, pero la puntuación y el tiempo restante no cambian. El destello rojo se puede desactivar durante la partida con el botón de abajo a la derecha.' },
  { q: '¿Cómo se asigna la nota?', a: 'La puntuación final se compara con una referencia de 17.000 puntos (B desde 6.120, C desde unos 3.450, D desde 1.530). Aunque superes todas las oleadas durante 45 segundos, el cálculo se queda en unos 8.400 puntos: la mejor nota realista aquí es B.' },
  { q: '¿Qué controles se usan?', a: 'Solo el ratón. Al empezar, el puntero se bloquea y se aplica la sensibilidad de los ajustes del sitio. En el teclado solo sirve la tecla Esc (salir). En un dispositivo solo táctil el cursor no se puede mover: se recomienda un ordenador con ratón.' },
  { q: '¿En qué se diferencia de un juego de esquivar proyectiles?', a: 'Aquí eliges una de las 9 casillas fijas y entras en ella antes de que acabe el aviso. Para huir de proyectiles que llegan desde los bordes, usa Quick Dodge en la misma categoría.' },
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
  'Pulsa Empezar; tras una cuenta atrás de 3 segundos, el cursor parte del centro de la cuadrícula.',
  'Localiza las casillas que parpadean en naranja y busca una casilla sin aviso.',
  'Antes de la explosión, coloca el cursor dentro de la casilla segura, lejos del borde.',
  'Encadena oleadas, mantén el combo y busca tu récord en 45 segundos.',
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo jugar a esquivar casillas en la cuadrícula 3x3',
  description: 'Cuatro pasos para salir de las casillas de peligro de la cuadrícula 3x3.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Paso ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const gridGuide = {
  heading: 'Guía para esquivar casillas en la cuadrícula',
  intro: [
    'Esquivar casillas en la cuadrícula es un juego de navegador: en una cuadrícula 3x3 sacas el cursor de las casillas marcadas en naranja antes de que exploten. No hay objetos volando: eliges una de las 9 casillas, así que decidir rápido y detenerte con precisión cuentan por igual.',
    'Al subir de nivel, el aviso baja de 1,4 a 0,45 segundos y hasta 7 de las 9 casillas se vuelven peligrosas. Al final solo quedan 2 casillas seguras y no hay tiempo para revisar una por una. Como en los experimentos de señales de atención de Posner (Posner, 1980), ayuda leer de un vistazo el contraste entre casillas que parpadean y casillas oscuras.',
    'Un movimiento rápido combina un gran impulso y una pequeña corrección final (Woodworth, 1899). Elegir la casilla correcta y pasarte del borde cuenta igualmente como impacto: practica detenerte dentro de la casilla.',
    'Los resultados son marcas de práctica propias de SkillDrills, no un examen médico, ni una prueba de la vista, ni una medida de rendimiento deportivo. Compara tus puntuaciones con el mismo ratón, la misma sensibilidad y la misma pantalla.',
  ],
  benchmarks: {
    title: 'Tramos de nota (tramos de práctica SkillDrills)',
    headers: ['Nota', 'Puntos', 'Referencia'],
    rows: [
      ['B', 'desde 6.120', 'casi todas las oleadas superadas en 45 segundos'],
      ['C', 'desde unos 3.450', 'más de la mitad de las oleadas superadas seguidas'],
      ['D', 'desde 1.530', 'llegas con fiabilidad a la casilla libre tras el aviso'],
      ['F', 'menos de 1.530', 'principiante'],
    ],
    note: 'Los tramos comparan la puntuación final con 17.000 puntos y son tramos de práctica de SkillDrills. A y superiores son inalcanzables en 45 segundos según el cálculo. No son estadísticas de usuarios ni percentiles.',
  },
  techniques: {
    title: 'Consejos para sumar más puntos',
    items: [
      { name: 'Busca las casillas oscuras', desc: 'En vez de contar las casillas que parpadean, busca directamente la casilla sin aviso.', tips: 'Al final de la ronda solo hay 2 casillas seguras: ve a la más cercana.' },
      { name: 'La casilla segura más cercana', desc: 'Con unos 0,5 segundos de aviso, los recorridos largos ya no llegan. Ve a la casilla segura más próxima.', tips: 'En horizontal o vertical suele ser más corto que en diagonal.' },
      { name: 'Detente dentro de la casilla', desc: 'Cuenta la posición exacta del cursor. En el borde puede contar como la casilla vecina.', tips: 'Apunta al centro de la casilla.' },
      { name: 'Mantén el combo', desc: 'Cuanto más larga la racha, más suben el multiplicador y el nivel. Arriesgarte con una casilla lejana y recibir el impacto te cuesta el combo.', tips: 'Prefiere la casilla segura y cercana.' },
    ],
  },
  steps,
  audience: 'Para quien busca un juego de esquivar casillas en una cuadrícula y para jugadores que quieren practicar decidir rápido y frenar el ratón con precisión.',
  faqs,
  sources: pickSources('posner1980', 'woodworth1899', 'fitts1954'),
};

export default function DynamicGridEvasionPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DynamicGridEvasionClient
        copy={{
          title: 'Esquivar casillas en la cuadrícula',
          hudLabels: { score: 'Puntuación', timeLeft: 'Tiempo restante', bestScore: 'Mejor puntuación', bestCombo: 'Mejor combo' },
          rulesTitle: 'Reglas y cálculo de puntos',
          rules: [
            { title: 'Aviso', text: 'En cada oleada algunas casillas parpadean en naranja. Cuando termina el aviso, explotan.' },
            { title: 'A la casilla segura', text: 'Si el cursor está fuera de las casillas de peligro en el momento de la explosión, ganas 100 puntos multiplicados por el combo.' },
            { title: 'Nivel', text: 'El nivel sube cada 250 puntos y cada 4 oleadas seguidas. El aviso baja de 1,4 a 0,45 s y las casillas de peligro pasan de 3 a 7.' },
            { title: 'Impacto', text: 'Solo el combo vuelve a 0. La puntuación y la ronda de 45 segundos no cambian.' },
          ],
          aboutTitle: '¿Qué es el juego de esquivar casillas en la cuadrícula?',
          aboutHeading: 'Salir de las casillas de peligro de una cuadrícula 3x3',
          aboutText: 'En este juego, casillas de una cuadrícula 3x3 parpadean en naranja antes de explotar y tú llevas el cursor a tiempo a una casilla segura. Al subir de nivel, el aviso se acorta y hay más casillas de peligro. Se trata de decidir rápido y frenar el ratón con precisión, no de una medición médica.',
          aboutCards: [
            { title: 'Para quién', desc: 'Para quien disfruta de los juegos de esquivar en una cuadrícula o quiere practicar reaccionar a un aviso con el ratón.' },
            { title: 'Qué practicas', desc: 'Distinguir casillas de peligro y seguras, elegir la más cercana y detener el cursor dentro.' },
            { title: 'Formato', desc: '45 segundos fijos, siempre desde el nivel 1. Recibir un impacto no cuesta ni puntos ni tiempo.' },
          ],
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/dynamic-grid-evasion" />
    </>
  );
}
