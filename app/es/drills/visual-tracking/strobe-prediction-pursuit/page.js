import StrobePredictionPursuitClient from '@/app/drills/visual-tracking/strobe-prediction-pursuit/StrobePredictionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/strobe-prediction-pursuit';
const title = "Entrenamiento visual estroboscópico | SkillDrills";
const description = "Entrenamiento visual estroboscópico: un objetivo rebota en los bordes y desaparece a intervalos regulares. Predice dónde está. Gratis en el navegador.";

export const metadata = {
  title,
  description,
  keywords: ["entrenamiento visual estroboscópico", "entrenamiento estroboscópico", "objetivo que parpadea", "predecir trayectoria ejercicio", "seguimiento ocular ejercicio"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/strobe-prediction-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Entrenamiento visual estroboscópico", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Entrenamiento visual estroboscópico",
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
  name: "Entrenamiento visual estroboscópico",
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
  name: "Entrenamiento visual estroboscópico",
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
  name: "Cómo hacer el entrenamiento visual estroboscópico",
  description: "Cuatro pasos para seguir un objetivo que desaparece a intervalos y predecir su posición.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y el contorno visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Leer el movimiento", text: "En la fase visible, sigue la dirección y la velocidad del objetivo.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Cruzar la fase invisible", text: "Cuando el objetivo desaparece, sigue moviendo la mirada en la dirección esperada.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta el contorno o activa la velocidad aleatoria, una cosa cada vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "¿Qué es el entrenamiento visual estroboscópico?", a: "Un ejercicio en el navegador con un único objetivo que se mueve en línea recta y rebota en los bordes de la pantalla. Se ve durante unos dos tercios de cada ciclo y se oculta un tercio. Como sigue avanzando aunque no se vea, predices dónde va a reaparecer." },
  { q: "¿Qué hace el objetivo mientras está invisible?", a: "Sigue en la misma dirección y a la misma velocidad. Con la línea visible, un contorno discreto marca su posición. Si ocultas la línea, el contorno también desaparece y solo sigues tu predicción." },
  { q: "¿Cambia el ritmo del parpadeo?", a: "El ciclo se cuenta en fotogramas mostrados y se acorta con el multiplicador de velocidad. Una velocidad mayor acelera a la vez el movimiento y el parpadeo." },
  { q: "¿Es lo mismo que entrenar con gafas estroboscópicas?", a: "No. Los estudios con gafas estroboscópicas (por ejemplo, Appelbaum et al., 2011) usan gafas que tapan todo el campo visual a intervalos. Aquí solo desaparece y reaparece un objetivo en la pantalla. Los resultados de esos estudios no se aplican a este ejercicio." },
  { q: "¿Y si soy sensible a las luces que parpadean?", a: "No parpadea toda la pantalla: solo un objetivo desaparece y reaparece. Aun así, si alguna vez te ha sentado mal una luz parpadeante, evita este ejercicio y para ante la menor molestia." },
  { q: "¿El ejercicio mide los movimientos de mis ojos?", a: "No. El navegador no sabe hacia dónde miras; solo conoce la posición en la que se dibuja el objetivo y tus ajustes. No hace falta hacer clic ni tocar la pantalla; el resultado es un registro de práctica para ti." },
  { q: "¿Hay puntuación o nota?", a: "No hay nota. Al terminar, la pantalla muestra cuánto tiempo estuvo el puntero sobre el objetivo y su distancia media al centro, por separado para las fases visible y oculta, además de la duración, el multiplicador de velocidad y el total de sesiones (guardado en este navegador). Se mide el puntero, no tus ojos." },
  { q: "¿Qué ajustes hay?", a: "Duración de 30, 45, 60, 90 o 120 segundos, velocidad de 0,5x a 9,0x y tamaño del objetivo de 10 a 50 px. También puedes ocultar la línea (contorno en la fase invisible), activar velocidad aleatoria, estela, brillo, líneas de escaneo, fondo claro u oscuro y cambiar el color del objetivo. La tecla Esc termina la sesión en cualquier momento." },
  { q: "¿Mejora la vista o la puntería?", a: "No hay garantía. Es un ejercicio en el que sigues con los ojos un objetivo en movimiento y no promete mejor puntería en juegos de disparos. Compara tus sesiones en la misma pantalla y con los mismos ajustes." },
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
  heading: "Entrenamiento visual estroboscópico: guía",
  intro: [
    "El entrenamiento visual estroboscópico es un ejercicio gratis en el navegador: un objetivo se mueve en línea recta, rebota en los bordes de la pantalla y desaparece a intervalos regulares. Se ve durante unos dos tercios de cada ciclo y queda oculto alrededor de un tercio.",
    "Mientras está invisible, el objetivo sigue en la misma dirección y a la misma velocidad. Por defecto, un contorno discreto marca su posición; si ocultas la línea, el contorno también desaparece. Tras la cuenta atrás 3-2-1, el objetivo se mueve durante el tiempo elegido (de 30 a 120 segundos, 60 por defecto). No hay que hacer clic; si sigues el objetivo con el puntero, al final verás la distancia del puntero al objetivo.",
    "El navegador no registra hacia dónde miras. Trata el resultado como un registro de práctica personal, basado en la posición del puntero. Tampoco es un entrenamiento con gafas estroboscópicas, que tapan todo el campo visual.",
    "Compara sesiones en la misma pantalla y a la misma distancia; la frecuencia de actualización y el retardo de imagen influyen en la fluidez del objetivo (Woods et al., 2015). Para si sientes dolor, mareo, náuseas o visión borrosa persistente."
  ],
  benchmarks: {
    title: "Etapas de práctica orientativas",
    headers: ["Etapa", "Ajuste", "Objetivo"],
    rows: [
      ["1", "1,0x, contorno visible", "Captar dirección y velocidad antes de que desaparezca"],
      ["2", "1,0x a 2,0x", "Estar sobre el objetivo en cuanto reaparece"],
      ["3", "2,0x o más", "Seguir prediciendo con parpadeos rápidos"],
      ["4", "Línea oculta", "Cruzar la fase invisible solo con la predicción"],
      ["5", "Velocidad aleatoria", "Ajustar la predicción a una velocidad variable"]
    ],
    note: "Etapas de práctica de SkillDrills solo como orientación. No son normas oficiales, estadísticas de usuarios ni percentiles.",
  },
  techniques: {
    title: "Consejos de práctica",
    items: [
      { name: "Lee la dirección mientras se ve", desc: "En la fase visible, fíjate en la dirección y la velocidad del objetivo.", tips: "Si desaparece cerca de un borde, piensa en el rebote." },
      { name: "No detengas la mirada", desc: "Cuando el objetivo desaparece, sigue moviendo la mirada con calma en la dirección esperada.", tips: "Al reaparecer, compara su posición con tu predicción." },
      { name: "Quita el contorno poco a poco", desc: "Practica primero con el contorno y luego oculta la línea para que el contorno también desaparezca.", tips: "Cambia un solo ajuste por sesión." },
      { name: "Sesiones cortas con pausas", desc: "Practica en bloques de 5 a 10 minutos, parpadea y mira a lo lejos entre sesiones. Más tiempo no es necesariamente mejor.", tips: "Para de inmediato si sientes dolor o mareo." }
    ],
  },
  steps: [
    { title: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y el contorno visible." },
    { title: "Leer el movimiento", text: "En la fase visible, sigue la dirección y la velocidad del objetivo." },
    { title: "Cruzar la fase invisible", text: "Cuando el objetivo desaparece, sigue moviendo la mirada en la dirección esperada." },
    { title: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta el contorno o activa la velocidad aleatoria, una cosa cada vez." }
  ],
  audience: "Quien quiera practicar de forma ligera, como un juego, seguir por predicción un objetivo que se vuelve invisible por momentos.",
  faqs,
  sources: pickSources('appelbaum2011', 'bennett2007', 'mitroff2013', 'smith2016', 'woods2015', 'leigh2015'),
};

export default function StrobePredictionPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StrobePredictionPursuitClient
        copy={{
          title: "Entrenamiento visual estroboscópico",
          subtitle: "Predice la posición cuando el objetivo desaparece",
          description: "En el entrenamiento visual estroboscópico sigues un objetivo que desaparece a intervalos regulares y predices su posición. El navegador no registra tu mirada: es un registro de práctica, no una prueba.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
