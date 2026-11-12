import JumpSequenceClient from '@/app/drills/physical/fitness/jump-sequence/JumpSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/es.md)
// Primary: Juego de saltar y apuntar (no-demand descriptive).
// Deleted the dead base title and Object.assign override claiming Pliometría /
// Salto Vertical and "Juego de Reflejos" (TAKEN by reaction).
// ============================================================

const TITLE = 'Juego de Saltar y Apuntar con el Ratón | SkillDrills';
const DESCRIPTION = 'Juego de saltar y apuntar gratis: mantén pulsado el ratón para cargar, suelta para saltar y guía el salto en el aire hacia un objetivo móvil. 45 segundos.';
const URL = 'https://skilldrills.online/es/drills/physical/fitness/jump-sequence';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['juego de saltar y apuntar', 'juego de salto con el ratón', 'carga y suelta el salto', 'trayectoria en el aire', 'juego de navegador gratis'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/jump-sequence'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento Físico", "item": "https://skilldrills.online/es/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Juego de Saltar y Apuntar", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Juego de Saltar y Apuntar",
  "description": "Juego gratis de 45 segundos en el navegador: carga, salta y guía el salto en el aire hacia un objetivo móvil.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador actual con HTML5 Canvas y ratón",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": URL,
  "inLanguage": "es-ES",
  "dateModified": "2026-11-10"
};

const FAQS = [
  {
    q: "¿Qué es el juego de saltar y apuntar?",
    a: "Es un juego gratis en el navegador: cargas el punto que está en el suelo (tu personaje), lo haces saltar y lo guías en el aire hacia un objetivo que cruza la pantalla. Cada partida dura 45 segundos."
  },
  {
    q: "¿Cómo se juega?",
    a: "Pon la mira sobre el personaje en el suelo y mantén pulsado el botón del ratón: el salto se va cargando (se llena en 1 segundo aproximadamente). Al soltar, el personaje salta en vertical; en el aire sigue la posición horizontal del ratón. La tecla Esc termina el ejercicio."
  },
  {
    q: "¿Cómo se calculan los puntos y el combo?",
    a: "Si el personaje toca el objetivo durante el salto, es un acierto. En el nivel 1 vale 5 puntos base, que suben con el nivel, multiplicados por el combo de la racha (máximo 3,0x desde 50 aciertos seguidos)."
  },
  {
    q: "¿Qué cambia al subir de nivel?",
    a: "El nivel sube 1 cada 250 puntos y cada 4 aciertos seguidos dan un nivel extra. El objetivo empieza a 120 px/s, llega a unos 800 px/s en el nivel 15 (hasta 900 px/s con una racha larga) y luego va aún más rápido. Su radio se reduce de 35 px a 12 px."
  },
  {
    q: "¿Qué pasa si fallo el objetivo?",
    a: "Si el personaje vuelve al suelo sin tocar el objetivo, la racha y el combo vuelven a cero y la pantalla parpadea en rojo. Se mantienen los puntos y el tiempo restante, y aparece un objetivo nuevo."
  },
  {
    q: "¿Sirve como entrenamiento de salto real?",
    a: "No. Es un juego de sincronización en el que controlas con el ratón cuánto cargas y hacia dónde vas en el aire. No mide ni entrena la altura de salto ni la fuerza de piernas y no promete ningún efecto de entrenamiento físico."
  },
  {
    q: "¿Cómo se asigna la nota final?",
    a: "La nota depende solo de la puntuación final: S+ desde 15.343, S desde 12.283, A desde 9.563, B desde 6.120, C desde 3.443, D desde 1.530 y F por debajo. Son niveles de práctica de SkillDrills, no una comparación con otros jugadores."
  },
  {
    q: "¿Dónde se guardan mis resultados?",
    a: "La mejor puntuación, el mejor combo y el nivel máximo se guardan solo en el localStorage de tu navegador y no se envían a ningún servidor. Gratis, sin registro y sin instalación."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-10",
  "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const STEPS = [
  "Pulsa Empezar y, tras la cuenta atrás (3-2-1), pon la mira sobre el personaje en el suelo.",
  "Calcula la altura del objetivo, mantén pulsado el botón del ratón para cargar y suelta.",
  "En el aire, mueve el ratón a la izquierda o a la derecha y lleva al personaje adonde va a pasar el objetivo.",
  "Durante 45 segundos, encadena aciertos para subir el multiplicador de combo."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo jugar al juego de saltar y apuntar",
  "description": "Carga, salta y guía el salto en el aire hacia un objetivo móvil.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Paso ${i + 1}`, "text": text }))
};

const jumpGuide = {
  heading: "Juego de saltar y apuntar: cómo funciona",
  intro: [
    "En este juego de saltar y apuntar, dos cosas deciden cada intento: cuánto tiempo cargas y hacia dónde guías el salto en el aire. Cuanto más tiempo mantienes pulsado el botón, más alto saltas; en el aire, el personaje sigue la posición horizontal del ratón. El objetivo cruza la pantalla y rebota en los bordes.",
    "La partida dura 45 segundos. Cada acierto suma puntos y alarga la racha; al subir de nivel, el objetivo es más rápido y más pequeño. Caer sin acertar solo cuesta el combo, no puntos ni tiempo.",
    "Para alcanzar un objetivo en movimiento hay que prever el punto de encuentro, no apuntar a su posición actual (Lee, 1976). Este tipo de movimiento combina una fase principal planificada y una corrección final (Woodworth, 1899). El juego practica esa sincronización con el ratón y no tiene nada que ver con saltos reales."
  ],
  benchmarks: {
    title: "Rangos de nota (niveles de práctica de SkillDrills)",
    headers: ["Nota", "Puntuación final"],
    rows: [
      ["S+", "desde 15.343"],
      ["S", "12.283 – 15.342"],
      ["A", "9.563 – 12.282"],
      ["B", "6.120 – 9.562"],
      ["C", "3.443 – 6.119"],
      ["D", "1.530 – 3.442"],
      ["F", "menos de 1.530"]
    ],
    note: "Niveles de práctica de SkillDrills calculados con la fórmula de nota del juego; no son estadísticas comparativas ni percentiles."
  },
  techniques: {
    title: "Consejos para sumar más puntos",
    items: [
      { name: "Carga solo lo necesario", desc: "Si siempre cargas al máximo, saltas por encima del objetivo. Suelta cuando la carga corresponda a la altura del objetivo.", tips: "Compara la barra de carga con la altura del objetivo." },
      { name: "Guía anticipándote", desc: "No persigas el objetivo: lleva el ratón adonde va a pasar. El personaje se acerca poco a poco a la posición del ratón.", tips: "Ten en cuenta los rebotes en los bordes." },
      { name: "Vuelve a empezar enseguida", desc: "Tras un acierto o un fallo aparece un objetivo nuevo. Pon otra vez la mira sobre el personaje y carga de inmediato.", tips: "Menos tiempo muerto, rachas más largas." }
    ]
  },
  steps: STEPS,
  audience: "Quien busque un juego corto de sincronización con el ratón o quiera practicar la anticipación de objetivos en movimiento.",
  faqs: FAQS,
  sources: pickSources('lee1976', 'woodworth1899', 'kawato1999', 'fitts1954')
};

export default function JumpSequencePageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <JumpSequenceClient
        copy={{
          title: "Juego de Saltar y Apuntar",
          hudLabels: { score: "Puntos", timeLeft: "Tiempo restante", bestScore: "Récord", bestCombo: "Mejor combo" },
          rulesTitle: "Reglas del juego",
          rules: [
            { title: "Cargar y saltar", text: "Pon la mira sobre el personaje y mantén pulsado el botón del ratón para cargar; suelta para saltar en vertical." },
            { title: "Guiar en el aire", text: "En el aire, mueve el ratón a la izquierda o a la derecha; el personaje va hacia allí y se dirige al objetivo." },
            { title: "Multiplicador de combo", text: "Los aciertos seguidos suben el multiplicador hasta un máximo de 3,0x." },
            { title: "Un fallo reinicia el combo", text: "Si caes sin acertar, el combo vuelve a cero. Se mantienen los puntos y el tiempo." }
          ],
          aboutTitle: "Sobre el juego de saltar y apuntar"
        }}
      />
      <DrillGuide guide={jumpGuide} />
      <RelatedDrills />
    </>
  );
}
