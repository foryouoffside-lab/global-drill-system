import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/physical/balance-training/stability-challenge';
const title = 'Estabilidad del cursor con el ratón | SkillDrills';
const description = 'Estabilidad del cursor con el ratón: un viento que cambia de dirección empuja la mira. Compénsalo y mantente 45 s dentro del anillo. Ejercicio gratis.';

export const metadata = {
  title,
  description,
  keywords: ['estabilidad del cursor', 'mantener la mira dentro del anillo', 'deriva del viento', 'juego de estabilidad con el ratón', 'cursor estable'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge') },
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
    { '@type': 'ListItem', position: 3, name: 'Estabilidad del cursor', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Estabilidad del cursor con el ratón',
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
    q: '¿En qué consiste este ejercicio de estabilidad del cursor?',
    a: 'Un anillo de seguridad ocupa el centro de la pantalla. Una fuerza parecida al viento empuja la mira hacia fuera sin parar; la compensas con el ratón para seguir dentro del anillo durante 45 segundos. Es un ejercicio de estabilidad del cursor.',
  },
  {
    q: '¿Cómo se calculan los puntos?',
    a: 'Mientras la mira está dentro del anillo, la racha sube 1 cada 0,15 segundos y ganas 15 puntos × multiplicador. El multiplicador empieza en 1,1x con racha 3 y llega a su máximo de 3,0x con racha 50. No hace falta hacer clic.',
  },
  {
    q: '¿Qué pasa si salgo del anillo?',
    a: 'La racha vuelve a 0 y aparece un destello rojo (se puede desactivar con el botón en pantalla). No se restan puntos ni segundos. Al volver al anillo, reconstruyes la racha.',
  },
  {
    q: '¿Cómo aumenta la dificultad?',
    a: 'El nivel sube cada 250 puntos y también con las rachas largas dentro del anillo, sin límite. El anillo se reduce de 45 px hasta un mínimo de 16 px, y la fuerza del viento empieza en 250 y sigue aumentando (850 en el nivel 15).',
  },
  {
    q: 'Si mi mira tiembla en los juegos, ¿esto lo corrige?',
    a: 'No directamente. Una mira que tiembla en un juego suele deberse a la sensibilidad, los DPI, la configuración o el hardware, y este ejercicio no cambia nada de eso. Es un juego de pequeñas correcciones continuas con el ratón.',
  },
  {
    q: '¿Cómo se asigna la nota?',
    a: 'La puntuación final se compara con una referencia de SkillDrills de 17.000 puntos. Aproximadamente: A desde 9.563 puntos, S desde 12.283 y S+ desde 15.342. Son niveles de práctica, no estadísticas de usuarios ni percentiles.',
  },
  {
    q: '¿Me ayudará en los shooters?',
    a: 'No se puede garantizar. Practicas pequeñas correcciones continuas contra una deriva, pero los patrones de retroceso y la sensibilidad de cada juego son distintos. No está demostrado que se transfiera.',
  },
  {
    q: '¿Funciona en el móvil?',
    a: 'No. Necesita un ratón y Pointer Lock, y no arranca en dispositivos solo táctiles. La tecla Escape termina el ejercicio y vuelve a la pantalla de inicio.',
  },
  {
    q: '¿Dónde se guardan mis resultados?',
    a: 'La mejor puntuación, la mejor racha y el nivel máximo se guardan solo en el almacenamiento local de tu navegador. Es gratis y sin registro.',
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
  name: 'Cómo hacer el ejercicio de estabilidad del cursor',
  description: 'Cuatro pasos para mantener la mira dentro del anillo a pesar del viento.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Empezar', text: 'Tras una cuenta atrás de 3 segundos se activa el Pointer Lock.' },
    { '@type': 'HowToStep', position: 2, name: 'Leer el empuje', text: 'Observa hacia dónde se desplaza la mira y mueve el ratón ligeramente en sentido contrario.' },
    { '@type': 'HowToStep', position: 3, name: 'Quedarse en el anillo', text: 'Cuanto más tiempo sigas dentro del anillo, más suben la racha y el multiplicador.' },
    { '@type': 'HowToStep', position: 4, name: 'Adaptarse al anillo más pequeño', text: 'Al subir de nivel, el anillo se estrecha y el viento se intensifica: corrige antes y con más finura.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guide = {
  heading: 'Estabilidad del cursor con el ratón: guía',
  intro: [
    'Este ejercicio de estabilidad del cursor con el ratón es sencillo: un viento cuya dirección cambia al azar empuja la mira fuera del centro, y la devuelves con el ratón para seguir dentro del anillo de seguridad. Una partida dura exactamente 45 segundos.',
    'Un movimiento de apuntado rápido se describe como un desplazamiento amplio seguido de una corrección fina guiada por la vista (Woodworth, 1899). Aquí repites esa corrección sin parar, y cuanto más pequeño es el anillo, más precisa tiene que ser (Fitts, 1954).',
    'Es un juego de estabilidad del cursor: no mide el equilibrio ni la salud. Compara tus resultados solo con tus propias partidas, con el mismo ratón, la misma sensibilidad y el mismo monitor; la frecuencia de refresco y el polling rate influyen en la latencia (Woods et al., 2015).',
  ],
  benchmarks: {
    title: 'Niveles de práctica de SkillDrills',
    headers: ['Nota', 'Puntos', 'Etiqueta'],
    rows: [
      ['S+', '15.342 o más', 'LEGENDARY'],
      ['S', '12.283 – 15.341', 'Élite'],
      ['A', '9.563 – 12.282', 'Excelente'],
      ['B', '6.120 – 9.562', 'Muy bien'],
      ['C', '3.443 – 6.119', 'Bien'],
      ['D', '1.530 – 3.442', 'Sigue así'],
      ['F', 'menos de 1.530', 'Necesita práctica'],
    ],
    note: 'La nota compara la puntuación final con la referencia de 17.000 puntos. Son niveles de práctica de SkillDrills, no estadísticas de usuarios ni percentiles.',
  },
  techniques: {
    title: 'Cuatro consejos para seguir más tiempo en el anillo',
    items: [
      { name: 'Empezar desde el centro', desc: 'Durante la cuenta atrás la mira está centrada. Evita los movimientos grandes al principio: primero lee la dirección del viento.', tips: 'Los primeros segundos sirven para leer el empuje, no para puntuar.' },
      { name: 'Corregir pronto y poco', desc: 'Tirar fuerte una vez en el borde del anillo suele llevarte al otro lado. Corrige en cuanto empieza el empuje.', tips: 'Vigila la distancia entre el centro del anillo y la mira.' },
      { name: 'Anticipar los cambios de viento', desc: 'La dirección del viento cambia al azar y luego gira poco a poco. Mantén la mano suelta para evitar una corrección repentina demasiado grande.', tips: 'Una mano o un antebrazo tensos hacen la mira más inestable.' },
      { name: 'Proteger la racha', desc: 'El multiplicador llega a su máximo de 3,0x con racha 50. Cada salida devuelve la racha a 0: mantener la calma rinde más que corregir a golpes.', tips: 'El número de salidas aparece en los resultados como Blowouts.' },
    ],
  },
  steps: [
    'Empieza con tu ratón y tu sensibilidad habituales.',
    'Mueve el ratón ligeramente en sentido contrario al empuje.',
    'Quédate en el anillo para subir la racha y el multiplicador.',
    'Tras 45 segundos, revisa la nota, la estabilidad en %, las salidas y el nivel máximo.',
  ],
  audience: 'Jugadores que quieren practicar cómo mantener la mira estable frente a un empuje, y cualquiera que quiera probar la estabilidad de su cursor de forma lúdica.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
};

export default function StabilityChallengeEsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <StabilityChallengeClient
        copy={{
          title: 'Estabilidad del cursor con el ratón',
          hudLabels: {
            score: 'Puntos',
            time: 'Tiempo',
            getReady: 'Prepárate',
            points: 'Puntos',
            stability: 'Estabilidad',
            blowouts: 'Salidas',
            maxStreak: 'Mejor racha',
            peakLevel: 'Nivel máximo',
            playAgain: 'Jugar otra vez',
          },
          rulesTitle: 'Reglas y puntuación',
          rulesItems: [
            { title: 'Quédate en el anillo central', text: 'Un viento de dirección aleatoria empuja la mira. Compénsalo con el ratón para seguir dentro del anillo.' },
            { title: 'Multiplicador de racha (hasta 3,0x)', text: 'Dentro del anillo, la racha sube cada 0,15 s y da 15 puntos × multiplicador. Con racha 50: 3,0x.' },
            { title: 'Subida de nivel', text: 'El nivel sube cada 250 puntos y con las rachas largas. El anillo se reduce hasta 16 px y el viento es cada vez más fuerte.' },
            { title: 'Salida del anillo', text: 'Si el viento te saca del anillo, pierdes la racha (vuelve a 0). No se restan puntos ni tiempo.' },
          ],
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
