import ComplexPatternClient from '@/app/drills/physical/coordination/complex-pattern/ComplexPatternClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/es/drills/physical/coordination/complex-pattern';
const TITLE = 'Juego de memoria visual | Test espacial | SkillDrills';
const DESCRIPTION = 'Juego de memoria visual gratis: una ruta de 3 a 8 puntos aparece un instante. Memorízala y vuelve a trazarla con el ratón. Rondas de 45 segundos.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'juego de memoria visual',
    'memorizar y trazar patrones',
    'memoria de recorridos',
    'trazar patrones con el ratón',
  ],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/complex-pattern'),
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
    q: '¿Cómo funciona este juego de memoria visual?',
    a: 'Una ruta de puntos aparece un momento y desaparece. Mantén pulsado el botón del ratón en el nodo inicial cian, recorre los puntos en el orden que recuerdas y suelta en el nodo final magenta. Después se compara tu línea con la original.',
  },
  {
    q: '¿Cómo se calcula la similitud del trazo?',
    a: 'Tu línea y la ruta original se dividen en el mismo número de puntos. La distancia media (en píxeles) entre ellos se resta de 100. Si empiezas o terminas a más de unos 45 px del nodo, el intento cuenta como fallo.',
  },
  {
    q: '¿Qué cambia al subir de nivel?',
    a: 'La ruta pasa de 3 a 8 puntos, el tiempo de visualización baja de 2,0 a 0,6 segundos y la similitud exigida sube del 50 % al 85 %. Desde el nivel 3 pueden aparecer rutas en zigzag y desde el nivel 4, en espiral.',
  },
  {
    q: '¿Se restan puntos por fallar?',
    a: 'No. Si no alcanzas la similitud exigida solo pierdes el multiplicador de racha (vuelve a 1,0x); los puntos y el tiempo restante se mantienen. El multiplicador sube con las rachas hasta 3,0x.',
  },
  {
    q: '¿Cuánto dura una ronda?',
    a: 'Exactamente 45 segundos. El nivel vuelve a empezar en 1 en cada ronda.',
  },
  {
    q: '¿Cómo puedo trazar la ruta con más precisión?',
    a: 'A partir de 5 puntos ayuda recordar la ruta como dos o tres formas grandes en lugar de punto por punto. Empieza dentro del nodo cian, suelta en el nodo final y frena antes de cada esquina.',
  },
  {
    q: '¿Funciona en el móvil?',
    a: 'Se juega arrastrando el ratón. Lo mejor es usarlo en el navegador de un ordenador con ratón.',
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
    { '@type': 'ListItem', position: 3, name: 'Juego de memoria visual', item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Juego de memoria visual: memorizar y trazar patrones',
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
  heading: 'Juego de memoria visual: instrucciones y consejos',
  intro: [
    'Este juego de memoria visual gratis consiste en memorizar y trazar patrones: una ruta aparece un instante, la memorizas y luego la vuelves a dibujar con el ratón. Cuando la ruta desaparece, empiezas en el nodo cian, recorres los puntos en el orden recordado y sueltas el botón en el nodo final magenta. La cercanía de tu línea al original se calcula como porcentaje de similitud.',
    'Una ronda dura 45 segundos. El nivel empieza en 1 y sube con los puntos y las rachas; hacia el nivel 15 el juego llega a 8 puntos, 0,6 segundos de visualización y un 85 % de similitud exigida. Como referencia para la dificultad se usaron el modelo de memoria de trabajo con su agenda visoespacial (Baddeley y Hitch, 1974) y los estudios que sitúan su capacidad en unas cuatro unidades (Cowan, 2001). Es un ejercicio de práctica, no un test de memoria con diagnóstico ni baremos.',
  ],
  techniques: {
    title: 'Consejos para trazar con más precisión',
    items: [
      {
        name: 'Recuerda formas, no puntos',
        desc: 'A partir de 5 puntos ayuda dividir la ruta en dos o tres formas grandes, por ejemplo una N o un triángulo más una recta, en lugar de guardar cada punto por separado.',
        tips: 'Durante la visualización fíjate primero en el inicio y el final; el resto, como silueta.',
      },
      {
        name: 'Acierta el inicio y el final',
        desc: 'Si empiezas a más de unos 45 px del nodo inicial o sueltas fuera del nodo final, el intento cuenta como fallo aunque la forma sea correcta.',
        tips: 'Antes de arrastrar, comprueba que el cursor está dentro del nodo cian.',
      },
      {
        name: 'Frena en las esquinas',
        desc: 'Rápido en los tramos rectos y más despacio antes de cada vértice: así te pasas menos de la esquina.',
        tips: 'Un trazo continuo y regular suele dar más similitud que dibujar con prisa.',
      },
    ],
  },
  steps: [
    'Empieza la ronda y espera la cuenta atrás.',
    'Memoriza la forma y el orden de la ruta que aparece.',
    'Cuando la ruta desaparezca, pulsa el botón del ratón en el nodo inicial cian.',
    'Recorre los puntos en el orden recordado y suelta en el nodo final magenta.',
  ],
  audience: 'Para quien quiera practicar retener una forma vista un instante y volver a trazarla con el ratón.',
  faqs: faqItems,
  sources: pickSources('baddeley1974', 'cowan2001', 'lashley1951', 'woodworth1899'),
};

export default function ComplexPatternEsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComplexPatternClient
        copy={{
          title: 'Juego de memoria visual',
          subtitle: 'Memoriza el patrón y vuelve a trazarlo',
          hudLabels: {
            score: 'Puntos',
            time: 'Tiempo',
            accuracy: 'Precisión media',
            traced: 'Trazados',
            missed: 'Fallados',
            peakLevel: 'Nivel máx.',
            getReady: 'PREPÁRATE',
            points: 'Puntos',
            playAgain: 'Jugar de nuevo',
          },
          rulesTitle: 'Reglas del juego de memoria visual',
          rules: [
            { title: 'Memoriza la ruta', text: 'Una ruta de puntos y líneas aparece un momento. Memoriza la forma y el orden antes de que desaparezca.' },
            { title: 'Arrastra desde el inicio', text: 'Pulsa el botón del ratón en el nodo inicial cian, recorre todos los puntos y suelta en el nodo final magenta.' },
            { title: 'Similitud', text: 'Si tu línea alcanza la similitud exigida (al principio 50 %, después hasta 85 %) y aciertas inicio y final, el patrón cuenta como superado.' },
            { title: 'Sin restar puntos', text: 'Si no llegas, solo el multiplicador de racha vuelve a 1,0x. Los puntos y los 45 segundos no cambian.' },
          ],
          aboutTitle: 'Sobre el juego de memoria visual',
          aboutHeading: 'Mirar, memorizar, trazar',
          aboutText: 'En este juego ves un instante una ruta que luego desaparece y la vuelves a trazar de memoria arrastrando el ratón. Al principio la ruta tiene 3 puntos y se ve 2 segundos; al subir de nivel crece hasta 8 puntos, el tiempo de visualización baja a 0,6 segundos y aparecen formas en zigzag y espiral.',
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/complex-pattern" />
    </>
  );
}
