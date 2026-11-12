import SplitScreenTrackingClient from '@/app/drills/visual-tracking/split-screen-tracking/SplitScreenTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/split-screen-tracking';
const title = "Seguimiento visual en pantalla dividida | SkillDrills";
const description = "Seguimiento visual en pantalla dividida: sigue dos objetivos a la vez, uno sube y baja a la izquierda y otro va y viene a la derecha. Ejercicio gratis en línea.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento visual en pantalla dividida", "seguir dos objetivos", "atención dividida ejercicio", "ejercicio de ojos online", "seguimiento ocular ejercicio"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/split-screen-tracking') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'es_ES', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Inicio", item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: "Seguimiento visual", item: 'https://skilldrills.online/es/drills/visual-tracking' },
    { '@type': 'ListItem', position: 3, name: "Seguimiento visual en pantalla dividida", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento visual en pantalla dividida",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  inLanguage: 'es',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Seguimiento visual en pantalla dividida",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navegador actual compatible con HTML5 Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'es',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: "Seguimiento visual en pantalla dividida",
  url,
  description,
  genre: ['Casual Game', 'Educational Game'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'es',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Cómo hacer el seguimiento visual en pantalla dividida",
  description: "Cuatro pasos para seguir con los ojos dos objetivos que se mueven por separado.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Elegir los ajustes", text: "Selecciona duración, velocidad y tamaño del objetivo. Para empezar: 60 segundos, 1,0x y líneas guía visibles.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Mirada al centro", text: "Siéntate cómodo, con los hombros relajados y la mirada cerca del centro de la pantalla.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir los dos objetivos", text: "Mantén a la vista el objetivo de la izquierda (sube y baja) y el de la derecha (va y viene) a la vez.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta las líneas guía o activa la velocidad aleatoria, una cosa cada vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "¿Qué es el seguimiento visual en pantalla dividida?", a: "Un ejercicio gratis en el navegador con la pantalla partida por la mitad: a la izquierda un objetivo sube y baja; a la derecha otro va y viene a media altura. Intentas seguir los dos con los ojos sin perder ninguno. No hace falta hacer clic." },
  { q: "¿Se pueden mirar dos objetivos a la vez?", a: "El ojo solo enfoca con nitidez un punto cada vez. Puedes mantener la mirada en el centro y percibir los dos lados con la visión periférica, o alternar la mirada entre los objetivos; lo que funciona mejor varía según la persona. Hay investigación sobre el seguimiento de varios objetos en movimiento (Pylyshyn & Storm, 1988; Alvarez & Cavanagh, 2005), pero este ejercicio no reproduce esos experimentos ni mide nada." },
  { q: "¿Por qué los dos objetivos no giran a la vez?", a: "El de la izquierda se mueve en vertical y el de la derecha en horizontal, con recorridos de distinta longitud y la misma velocidad. Los dos ritmos avanzan por separado, y quien se ajusta a uno pierde el otro con facilidad." },
  { q: "¿Qué pasa si oculto las líneas guía?", a: "Desaparecen la línea divisoria central y los dos ejes de movimiento discretos. El movimiento de los objetivos no cambia, pero sin referencia es más fácil perderlos. Pruébalo cuando domines la versión básica." },
  { q: "Siempre pierdo el mismo objetivo, ¿qué hago?", a: "Baja la velocidad, muestra las líneas guía y presta atención a propósito al lado más débil. El ejercicio no registra qué objetivo pierdes: apúntalo tú y compara con los mismos ajustes." },
  { q: "¿El ejercicio mide los movimientos de mis ojos?", a: "No. El navegador no sabe hacia dónde miras; solo conoce la posición en la que se dibuja el objetivo y tus ajustes. No hace falta hacer clic ni tocar la pantalla; el resultado es un registro de práctica para ti." },
  { q: "¿Hay puntuación o nota?", a: "No. Al terminar, la pantalla muestra solo la duración, el multiplicador de velocidad, si la velocidad aleatoria estaba activada y el total de sesiones (guardado en este navegador). Si quieres contar cuántas veces pierdes el objetivo, apúntalo tú." },
  { q: "¿Qué ajustes hay?", a: "Duración de 30, 45, 60, 90 o 120 segundos, velocidad de 0,5x a 9,0x y tamaño del objetivo de 10 a 50 px. También puedes ocultar las líneas guía (divisoria central y ejes), activar velocidad aleatoria, estela, brillo, líneas de escaneo, fondo claro u oscuro y cambiar el color del objetivo. La tecla Esc termina la sesión en cualquier momento." },
  { q: "¿Mejora la vista o la puntería?", a: "No hay garantía. Es un ejercicio en el que sigues con los ojos un objetivo en movimiento; no es un examen de la vista ni un tratamiento, y no promete mejor puntería en juegos de disparos. Si notas molestias en los ojos, consulta a un oftalmólogo." },
  { q: "¿Influye la pantalla en el resultado?", a: "Sí. La frecuencia de actualización, el brillo, el contraste, el tamaño de la pantalla y la distancia cambian cómo se ve el objetivo (Woods et al., 2015). Compara solo sesiones hechas en la misma pantalla, el mismo navegador y con los mismos ajustes." },
  { q: "¿Cuánto tiempo debo practicar?", a: "Unas cuantas sesiones de unos 60 segundos, de 5 a 10 minutos en total, con pausas. Para enseguida si notas los ojos cansados, secos o doloridos, mareo, náuseas o dolor de cabeza." }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guide = {
  heading: "Seguimiento visual en pantalla dividida: guía",
  intro: [
    "El seguimiento visual en pantalla dividida es un ejercicio gratis en el navegador en el que sigues dos objetivos con los ojos al mismo tiempo. La pantalla está partida por la mitad: a la izquierda, un objetivo sube y baja en vertical; a la derecha, otro va y viene en horizontal a media altura. Cada uno rebota al final de su recorrido.",
    "Tras la cuenta atrás 3-2-1, el objetivo se mueve durante el tiempo elegido (de 30 a 120 segundos, 60 por defecto). No hay que hacer clic ni pulsar nada, y no hay puntuación. La velocidad, el tamaño del objetivo, las líneas guía y la velocidad aleatoria ajustan la dificultad.",
    "El navegador no registra hacia dónde miras. Trata el resultado como un registro de práctica personal, no como una prueba de vista o de atención.",
    "Compara sesiones en la misma pantalla y a la misma distancia; la frecuencia de actualización y el retardo de imagen influyen en la fluidez del objetivo (Woods et al., 2015). Para si sientes dolor, mareo, náuseas o visión borrosa persistente."
  ],
  benchmarks: {
    title: "Etapas de práctica orientativas",
    headers: ["Etapa", "Ajuste", "Objetivo"],
    rows: [
      ["1", "1,0x, líneas guía visibles", "Captar el ritmo de los dos objetivos"],
      ["2", "1,0x a 2,0x", "No perder ningún objetivo durante 60 segundos"],
      ["3", "2,0x o más", "Mantener ambos lados a la vista aunque vayan rápido"],
      ["4", "Líneas guía ocultas", "Mantener las dos posiciones sin referencia"],
      ["5", "Velocidad aleatoria", "Seguir aunque cambie la velocidad"]
    ],
    note: "Etapas de práctica de SkillDrills solo como orientación. No son normas de examen visual, estadísticas de usuarios ni percentiles.",
  },
  techniques: {
    title: "Consejos de práctica",
    items: [
      { name: "Mirada al centro, atención a ambos lados", desc: "Fijar un objetivo suele hacer que pierdas el otro. Prueba a mantener la mirada cerca del centro y percibir los dos movimientos a la vez.", tips: "Si se hace demasiado difícil, baja la velocidad y vuelve a mostrar las líneas guía." },
      { name: "Dos ritmos separados", desc: "Vertical a la izquierda, horizontal a la derecha y con recorridos de distinta longitud: los giros no coinciden. Trátalos como dos ritmos distintos.", tips: "Cuando un objetivo gire, comprueba dónde está el otro." },
      { name: "Una dificultad cada vez", desc: "Sube la velocidad, oculta la línea o activa la velocidad aleatoria, pero nunca todo a la vez.", tips: "Compara solo sesiones con los mismos ajustes." },
      { name: "Sesiones cortas con pausas", desc: "Practica en bloques de 5 a 10 minutos, parpadea y mira a lo lejos entre sesiones. Más tiempo no es necesariamente mejor.", tips: "Para de inmediato si sientes dolor o mareo." }
    ],
  },
  steps: [
    { title: "Elegir los ajustes", text: "Selecciona duración, velocidad y tamaño del objetivo. Para empezar: 60 segundos, 1,0x y líneas guía visibles." },
    { title: "Mirada al centro", text: "Siéntate cómodo, con los hombros relajados y la mirada cerca del centro de la pantalla." },
    { title: "Seguir los dos objetivos", text: "Mantén a la vista el objetivo de la izquierda (sube y baja) y el de la derecha (va y viene) a la vez." },
    { title: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta las líneas guía o activa la velocidad aleatoria, una cosa cada vez." }
  ],
  audience: "Quien quiera practicar de forma ligera, como un juego, repartir la atención entre dos objetivos en movimiento.",
  faqs,
  sources: pickSources('pylyshyn1988', 'alvarez2005', 'green2006', 'cavanagh2005', 'woods2015', 'leigh2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular lento y continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimiento de objetivos evasivos" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supresión de imágenes fantasma" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en forma de ocho" },
    { href: "/es/drills/visual-tracking/sine-wave-pursuit", label: "Seguimiento en onda sinusoidal" }
  ],
};

export default function SplitScreenTrackingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SplitScreenTrackingClient
        copy={{
          title: "Seguimiento visual en pantalla dividida",
          subtitle: "Sigue dos objetivos en zonas separadas",
          description: "En el seguimiento visual en pantalla dividida sigues con los ojos dos objetivos a la vez: a la izquierda uno sube y baja; a la derecha otro va y viene. El navegador no registra tu mirada: es un registro de práctica, no una prueba.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
