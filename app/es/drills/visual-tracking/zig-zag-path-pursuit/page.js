import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/zig-zag-path-pursuit';
const title = "Seguimiento visual en zigzag | SkillDrills";
const description = "Seguimiento visual en zigzag: un objetivo sube y baja en giros cerrados, de izquierda a derecha y de vuelta. Ejercicio gratis, no es un examen visual.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento visual en zigzag", "ejercicio de ojos zigzag", "seguimiento ocular ejercicio", "ejercicio de ojos online", "seguir un objetivo con la vista"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Seguimiento visual en zigzag", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento visual en zigzag",
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
  name: "Seguimiento visual en zigzag",
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
  name: "Seguimiento visual en zigzag",
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
  name: "Cómo hacer el seguimiento visual en zigzag",
  description: "Cuatro pasos para seguir con los ojos un objetivo en una trayectoria en zigzag.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y la línea visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Postura", text: "Siéntate cómodo y mantén la cabeza recta.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir el zigzag", text: "Sigue el objetivo con los ojos en todos los giros, a la ida y a la vuelta.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta la línea o activa la velocidad aleatoria, una cosa cada vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "¿Qué es el seguimiento visual en zigzag?", a: "Un objetivo sube y baja entre la parte de arriba (cerca del 20 % de la altura) y la de abajo (cerca del 80 %) en 7 giros cerrados, del borde izquierdo al derecho, y luego vuelve por el mismo camino. Lo sigues solo con los ojos; no hace falta hacer clic." },
  { q: "¿En qué se diferencia del seguimiento visual triangular?", a: "En el triángulo, el objetivo gira siempre en el mismo sentido por tres esquinas. En el zigzag, los giros cerrados se suceden muy seguidos y, en el borde, se invierte el sentido de todo el recorrido. A 1,0x, cada recorrido dura unos 4,5 segundos." },
  { q: "¿Y del seguimiento ocular vertical?", a: "En el seguimiento ocular vertical, el objetivo va de un lado a otro mientras baja. Aquí sube y baja mientras avanza hacia la derecha, así que cada tramo es sobre todo vertical." },
  { q: "¿Por qué mi mirada se pasa del objetivo en los giros?", a: "En el giro la dirección cambia de golpe. El seguimiento suave no llega y los ojos suelen corregir con un salto rápido (de Brouwer et al., 2002). Baja la velocidad, muestra la línea y anticipa el siguiente giro." },
  { q: "¿Qué pasa si oculto la línea?", a: "Desaparece el trazado en zigzag. El objetivo se mueve igual, pero tienes que prever tú el siguiente giro." },
  { q: "¿El ejercicio mide los movimientos de mis ojos?", a: "No. El navegador no sabe hacia dónde miras; solo conoce la posición en la que se dibuja el objetivo, tus ajustes y la posición del puntero. No hace falta hacer clic ni tocar la pantalla; el resultado es un registro de práctica para ti." },
  { q: "¿Hay puntuación o nota?", a: "No hay nota. Al terminar, la pantalla muestra el porcentaje de tiempo con el puntero sobre el objetivo, la distancia media y RMS del puntero al centro del objetivo, la duración, el multiplicador de velocidad y el total de sesiones (guardado en este navegador). Mide el puntero, no tus ojos. Si quieres contar cuántas veces pierdes el objetivo, apúntalo tú." },
  { q: "¿Qué ajustes hay?", a: "Duración de 30, 45, 60, 90 o 120 segundos, velocidad de 0,5x a 9,0x y tamaño del objetivo de 10 a 50 px. También puedes ocultar la línea (trazado en zigzag), activar velocidad aleatoria, estela, brillo, líneas de escaneo, fondo claro u oscuro y cambiar el color del objetivo. La tecla Esc termina la sesión en cualquier momento." },
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
  heading: "Seguimiento visual en zigzag: guía",
  intro: [
    "El seguimiento visual en zigzag es un ejercicio gratis en el navegador: un objetivo sube y baja entre la parte de arriba y la de abajo de la pantalla mientras avanza del borde izquierdo al derecho. Al llegar a la derecha, vuelve por el mismo camino. El trazado une 8 puntos con 7 giros cerrados.",
    "Tras la cuenta atrás 3-2-1, el objetivo se mueve durante el tiempo elegido (de 30 a 120 segundos, 60 por defecto). No hay que hacer clic ni pulsar nada; al final se muestra la distancia del puntero al objetivo, no la posición de tus ojos. A 1,0x, cada recorrido dura unos 4,5 segundos.",
    "El navegador no registra hacia dónde miras. Trata el resultado como un registro de práctica personal, no como una prueba de vista o de atención.",
    "Compara sesiones en la misma pantalla y a la misma distancia; la frecuencia de actualización y el retardo de imagen influyen en la fluidez del objetivo (Woods et al., 2015). Para si sientes dolor, mareo, náuseas o visión borrosa persistente."
  ],
  benchmarks: {
    title: "Etapas de práctica orientativas",
    headers: ["Etapa", "Ajuste", "Objetivo"],
    rows: [
      ["1", "1,0x, línea visible", "Conocer la posición y el ritmo de los giros"],
      ["2", "1,0x a 2,0x", "Seguir sin retraso en los giros"],
      ["3", "2,0x o más", "No soltar el objetivo en el vaivén rápido"],
      ["4", "Línea oculta", "Prever el siguiente giro"],
      ["5", "Velocidad aleatoria", "Seguir aunque cambie la velocidad"]
    ],
    note: "Etapas de práctica de SkillDrills solo como orientación. No son normas de examen visual, estadísticas de usuarios ni percentiles.",
  },
  techniques: {
    title: "Consejos de práctica",
    items: [
      { name: "No cabecees", desc: "Con los grandes movimientos de arriba abajo, la cabeza tiende a acompañar. Mantenla recta y sigue solo con los ojos.", tips: "Relaja los hombros y el cuello." },
      { name: "Anticipa los giros", desc: "Justo antes de cada giro, piensa ya en la dirección contraria.", tips: "¿Lo perdiste? Retómalo en el siguiente tramo." },
      { name: "Prepárate para la vuelta en el borde", desc: "En los bordes izquierdo y derecho se invierte el sentido de todo el recorrido.", tips: "Piensa en el camino de vuelta justo antes del borde." },
      { name: "Sesiones cortas con pausas", desc: "Practica en bloques de 5 a 10 minutos, parpadea y mira a lo lejos entre sesiones. Más tiempo no es necesariamente mejor.", tips: "Para de inmediato si sientes dolor o mareo." }
    ],
  },
  steps: [
    { title: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y la línea visible." },
    { title: "Postura", text: "Siéntate cómodo y mantén la cabeza recta." },
    { title: "Seguir el zigzag", text: "Sigue el objetivo con los ojos en todos los giros, a la ida y a la vuelta." },
    { title: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta la línea o activa la velocidad aleatoria, una cosa cada vez." }
  ],
  audience: "Quien quiera practicar de forma ligera, como un juego, seguir con la vista un objetivo con cambios rápidos de dirección.",
  faqs,
  sources: pickSources('debrouwer2002', 'krauzlis2004', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function ZigZagPathPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ZigZagPathPursuitClient
        copy={{
          title: "Seguimiento visual en zigzag",
          subtitle: "Giros cerrados hacia arriba y hacia abajo",
          description: "En el seguimiento visual en zigzag, un objetivo sube y baja en giros cerrados, de izquierda a derecha y de vuelta. El navegador no registra tu mirada: es un registro de práctica, no una prueba.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
