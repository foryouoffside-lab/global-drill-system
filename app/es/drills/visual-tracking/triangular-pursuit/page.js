import TriangularPursuitClient from '@/app/drills/visual-tracking/triangular-pursuit/TriangularPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/triangular-pursuit';
const title = "Seguimiento visual triangular | SkillDrills";
const description = "Seguimiento visual triangular: un objetivo da vueltas a un triángulo con tres esquinas marcadas, en el mismo sentido. Ejercicio gratis, velocidad ajustable.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento visual triangular", "ejercicio de ojos triángulo", "seguimiento ocular ejercicio", "ejercicio de ojos online", "seguir un objetivo con la vista"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/triangular-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Seguimiento visual triangular", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento visual triangular",
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
  name: "Seguimiento visual triangular",
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
  name: "Seguimiento visual triangular",
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
  name: "Cómo hacer el seguimiento visual triangular",
  description: "Cuatro pasos para seguir con los ojos un objetivo en una trayectoria triangular.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y la línea visible.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Postura", text: "Siéntate cómodo y mantén la cabeza recta.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Seguir el triángulo", text: "Sigue el objetivo con los ojos por las tres esquinas.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta la línea o activa la velocidad aleatoria, una cosa cada vez.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "¿Qué es el seguimiento visual triangular?", a: "Un objetivo da vueltas sin parar a un triángulo con vértices arriba en el centro, abajo a la derecha y abajo a la izquierda, siempre en el mismo sentido. Sigues con los ojos los dos lados inclinados y la base horizontal sin perderte en las esquinas. No hace falta hacer clic." },
  { q: "¿La velocidad es constante?", a: "Cada lado dura lo mismo (unos 1,5 segundos a 1,0x), así que la velocidad cambia un poco según la longitud del lado. En pantallas anchas, la base es el lado más largo y el objetivo va más rápido en ella. El multiplicador y la velocidad aleatoria también la cambian." },
  { q: "¿Por qué me retraso o me paso en las esquinas?", a: "En la esquina la dirección cambia de golpe. El seguimiento suave no llega, y los ojos suelen alcanzar el objetivo con un salto rápido (sacada de recuperación) (de Brouwer et al., 2002). Baja la velocidad y piensa en la nueva dirección justo antes de la esquina." },
  { q: "¿Qué pasa si oculto la línea?", a: "Desaparece el contorno del triángulo. El recorrido es el mismo, pero tienes que recordar tú dónde están las esquinas." },
  { q: "¿El ejercicio mide los movimientos de mis ojos?", a: "No. El navegador no sabe hacia dónde miras; solo conoce la posición en la que se dibuja el objetivo y tus ajustes. No hace falta hacer clic ni tocar la pantalla; el resultado es un registro de práctica para ti." },
  { q: "¿Hay puntuación o nota?", a: "No. Al terminar, la pantalla muestra solo la duración, el multiplicador de velocidad, si la velocidad aleatoria estaba activada y el total de sesiones (guardado en este navegador). Si quieres contar cuántas veces pierdes el objetivo, apúntalo tú." },
  { q: "¿Qué ajustes hay?", a: "Duración de 30, 45, 60, 90 o 120 segundos, velocidad de 0,5x a 9,0x y tamaño del objetivo de 10 a 50 px. También puedes ocultar la línea (contorno del triángulo), activar velocidad aleatoria, estela, brillo, líneas de escaneo, fondo claro u oscuro y cambiar el color del objetivo. La tecla Esc termina la sesión en cualquier momento." },
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
  heading: "Seguimiento visual triangular: guía",
  intro: [
    "El seguimiento visual triangular es un ejercicio gratis en el navegador: un objetivo recorre un triángulo sin parar, de arriba en el centro hacia abajo a la derecha, luego abajo a la izquierda y de vuelta arriba. Los tramos rectos se alternan con cambios bruscos de dirección en las esquinas.",
    "Cada lado dura lo mismo (unos 1,5 segundos a 1,0x); por eso, en la base, que es más larga, el objetivo va algo más rápido. Tras la cuenta atrás 3-2-1, el objetivo se mueve durante el tiempo elegido (de 30 a 120 segundos, 60 por defecto). No hay que hacer clic ni pulsar nada, y no hay puntuación.",
    "El navegador no registra hacia dónde miras. Trata el resultado como un registro de práctica personal, no como una prueba de vista o de atención.",
    "Compara sesiones en la misma pantalla y a la misma distancia; la frecuencia de actualización y el retardo de imagen influyen en la fluidez del objetivo (Woods et al., 2015). Para si sientes dolor, mareo, náuseas o visión borrosa persistente."
  ],
  benchmarks: {
    title: "Etapas de práctica orientativas",
    headers: ["Etapa", "Ajuste", "Objetivo"],
    rows: [
      ["1", "1,0x, línea visible", "Conocer las esquinas y el sentido de la vuelta"],
      ["2", "1,0x a 2,0x", "Girar en las esquinas sin retraso"],
      ["3", "2,0x o más", "No soltar el objetivo en vueltas rápidas"],
      ["4", "Línea oculta", "Prever la siguiente esquina sin contorno"],
      ["5", "Velocidad aleatoria", "Seguir aunque cambie la velocidad"]
    ],
    note: "Etapas de práctica de SkillDrills solo como orientación. No son normas de examen visual, estadísticas de usuarios ni percentiles.",
  },
  techniques: {
    title: "Consejos de práctica",
    items: [
      { name: "Sigue los lados con calma", desc: "En los tramos rectos, mira el centro del objetivo y mueve los ojos de forma regular.", tips: "La cabeza y el cuello se quedan quietos." },
      { name: "Piensa en la siguiente dirección antes de la esquina", desc: "Tener ya en mente el siguiente lado reduce el retraso y el pasarse de largo en la esquina.", tips: "¿Lo perdiste? Retómalo en la siguiente esquina." },
      { name: "Acostúmbrate a la base más rápida", desc: "La base es el lado más largo y es donde el objetivo va más rápido.", tips: "Activa la velocidad aleatoria cuando esa diferencia te resulte familiar." },
      { name: "Sesiones cortas con pausas", desc: "Practica en bloques de 5 a 10 minutos, parpadea y mira a lo lejos entre sesiones. Más tiempo no es necesariamente mejor.", tips: "Para de inmediato si sientes dolor o mareo." }
    ],
  },
  steps: [
    { title: "Elegir los ajustes", text: "Empieza con 60 segundos, 1,0x y la línea visible." },
    { title: "Postura", text: "Siéntate cómodo y mantén la cabeza recta." },
    { title: "Seguir el triángulo", text: "Sigue el objetivo con los ojos por las tres esquinas." },
    { title: "Subir poco a poco", text: "Cuando resulte fácil, sube la velocidad u oculta la línea o activa la velocidad aleatoria, una cosa cada vez." }
  ],
  audience: "Quien quiera practicar de forma ligera, como un juego, seguir con la vista un objetivo por rectas y esquinas marcadas.",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function TriangularPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TriangularPursuitClient
        copy={{
          title: "Seguimiento visual triangular",
          subtitle: "Rectas y esquinas marcadas",
          description: "En el seguimiento visual triangular sigues con los ojos un objetivo que da vueltas a un triángulo. El navegador no registra tu mirada: es un registro de práctica, no una prueba.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
