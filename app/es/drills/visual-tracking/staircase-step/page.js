import StaircaseStepClient from '@/app/drills/visual-tracking/staircase-step/StaircaseStepClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/staircase-step';
const title = "Seguimiento ocular vertical | SkillDrills";
const description = "Seguimiento ocular vertical: un objetivo baja la pantalla en zigzag, escalón a escalón, y luego vuelve a subir. Ejercicio gratis, velocidad ajustable.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento ocular vertical", "seguir un objetivo que sube y baja", "ejercicio de ojos online", "seguimiento ocular ejercicio", "zigzag en escalera"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/staircase-step') },
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
    { '@type': 'ListItem', position: 3, name: "Seguimiento ocular vertical", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento ocular vertical",
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
  name: "Seguimiento ocular vertical",
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
  name: "Seguimiento ocular vertical",
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
  name: "Cómo hacer el seguimiento ocular vertical",
  description: "Cuatro pasos para seguir con los ojos un objetivo que baja y sube en escalones.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y la línea visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Postura", text: "Siéntate cómodo y mantén la cabeza recta.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir solo con los ojos", text: "Sigue el objetivo por los escalones en zigzag, bajando y luego subiendo.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta la línea o activa la velocidad aleatoria, una cosa cada vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "¿Qué es el seguimiento ocular vertical?", a: "Un objetivo va de izquierda a derecha en zigzag mientras baja por escalones, desde arriba (cerca del 15 % de la altura) hasta abajo (cerca del 85 %). Al final da la vuelta y sube por el mismo camino. Lo sigues solo con los ojos; no hace falta hacer clic." },
  { q: "¿Cómo es exactamente el trazado?", a: "Una línea en zigzag que une 8 puntos, con 7 cambios de dirección, y que baja un poco en cada tramo. A 1,0x, cada recorrido dura unos 4,5 segundos; un multiplicador mayor acelera el objetivo en la misma proporción." },
  { q: "¿Los movimientos verticales son más difíciles de seguir?", a: "Hay estudios que muestran que las mismas personas suelen seguir con menos precisión un movimiento vertical que uno horizontal (Rottach et al., 1996). El ejercicio no lo mide, pero puedes comparar tú mismo la bajada y la subida." },
  { q: "¿Por qué pierdo el objetivo en las esquinas?", a: "En la esquina la dirección cambia de golpe y los ojos se quedan un instante atrás. El seguimiento suave empieza con un pequeño retraso tras el inicio del movimiento (Lisberger, 2010). Baja la velocidad, muestra la línea y anticipa la siguiente esquina." },
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
  heading: "Seguimiento ocular vertical: guía",
  intro: [
    "El seguimiento ocular vertical es un ejercicio gratis en el navegador: un objetivo va de izquierda a derecha en zigzag mientras baja, escalón a escalón, desde la parte de arriba hasta la de abajo de la pantalla. Abajo, vuelve a subir por el mismo camino. El trazado une 8 puntos y ocupa cerca del 60 % del ancho de la pantalla.",
    "Tras la cuenta atrás 3-2-1, el objetivo se mueve durante el tiempo elegido (de 30 a 120 segundos, 60 por defecto). No hay que hacer clic ni pulsar nada; al final se muestra la distancia del puntero al objetivo, no la posición de tus ojos. A 1,0x, cada recorrido dura unos 4,5 segundos.",
    "El navegador no registra hacia dónde miras. Trata el resultado como un registro de práctica personal, no como una prueba de vista o de atención.",
    "Compara sesiones en la misma pantalla y a la misma distancia; la frecuencia de actualización y el retardo de imagen influyen en la fluidez del objetivo (Woods et al., 2015). Para si sientes dolor, mareo, náuseas o visión borrosa persistente."
  ],
  benchmarks: {
    title: "Etapas de práctica orientativas",
    headers: ["Etapa", "Ajuste", "Objetivo"],
    rows: [
      ["1", "1,0x, línea visible", "Conocer el camino de bajada y subida"],
      ["2", "1,0x a 2,0x", "Seguir sin retraso en los giros"],
      ["3", "2,0x o más", "No soltar el objetivo aunque vaya rápido"],
      ["4", "Línea oculta", "Prever el siguiente giro"],
      ["5", "Velocidad aleatoria", "Seguir aunque cambie la velocidad"]
    ],
    note: "Etapas de práctica de SkillDrills solo como orientación. No son normas de examen visual, estadísticas de usuarios ni percentiles.",
  },
  techniques: {
    title: "Consejos de práctica",
    items: [
      { name: "Mantén la cabeza quieta", desc: "Si la cabeza o el cuello acompañan, los ojos apenas trabajan. Mantén la cabeza recta y sigue el objetivo solo con los ojos.", tips: "Relaja los hombros y el cuello." },
      { name: "Anticipa los giros", desc: "En cada esquina del trazado el objetivo cambia de dirección de golpe. Piensa en la nueva dirección justo antes.", tips: "¿Lo perdiste? No lo persigas; retómalo en el siguiente giro." },
      { name: "Compara bajada y subida", desc: "Fíjate en si la bajada o la subida te resulta más fácil.", tips: "Apunta lo que notes y compara con los mismos ajustes." },
      { name: "Sesiones cortas con pausas", desc: "Practica en bloques de 5 a 10 minutos, parpadea y mira a lo lejos entre sesiones. Más tiempo no es necesariamente mejor.", tips: "Para de inmediato si sientes dolor o mareo." }
    ],
  },
  steps: [
    { title: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y la línea visible." },
    { title: "Postura", text: "Siéntate cómodo y mantén la cabeza recta." },
    { title: "Seguir solo con los ojos", text: "Sigue el objetivo por los escalones en zigzag, bajando y luego subiendo." },
    { title: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta la línea o activa la velocidad aleatoria, una cosa cada vez." }
  ],
  audience: "Quien quiera practicar de forma ligera, como un juego, seguir con la vista un objetivo que cambia de dirección y de altura.",
  faqs,
  sources: pickSources('buttner1997', 'rottach1996', 'ke2013', 'collewijn1984', 'lisberger2010', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento lento continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento en caos direccional" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimiento con evasión dinámica" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supresión de imágenes fantasma" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en forma de ocho" },
    { href: "/es/drills/visual-tracking/sine-wave-pursuit", label: "Seguimiento en onda sinusoidal" }
  ],
};

export default function StaircaseStepPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StaircaseStepClient
        copy={{
          title: "Seguimiento ocular vertical",
          subtitle: "Baja escalón a escalón y vuelve a subir",
          description: "En este seguimiento ocular vertical, un objetivo baja la pantalla en zigzag, escalón a escalón, y luego vuelve a subir. El navegador no registra tu mirada: es un registro de práctica, no una prueba.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
