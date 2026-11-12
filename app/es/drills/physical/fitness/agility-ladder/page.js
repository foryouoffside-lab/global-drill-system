import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/es.md)
// Primary: Juego de escalera de agilidad (no-demand descriptive).
// "Ejercicios de escalera de agilidad" promised real footwork drills; this is a
// mouse rhythm game. Dropped footwork/counter-strafe/fitness claims.
// ============================================================

const TITLE = 'Juego de Escalera de Agilidad con el Ratón | SkillDrills';
const DESCRIPTION = 'Juego de escalera de agilidad online: pasa el cursor por los 4 peldaños de cada escalera, izquierda-derecha-izquierda-derecha. Gratis, 45 segundos, combo.';
const URL = 'https://skilldrills.online/es/drills/physical/fitness/agility-ladder';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['juego de escalera de agilidad', 'escalera de agilidad online', 'juego de ritmo con el ratón', 'secuencia izquierda-derecha con el ratón', 'juego de navegador gratis'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
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
    { "@type": "ListItem", "position": 3, "name": "Juego de Escalera de Agilidad", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Juego de Escalera de Agilidad",
  "description": "Juego de ritmo gratis de 45 segundos en el navegador: pasa el cursor por los 4 peldaños de cada escalera que baja, en el orden izquierda-derecha-izquierda-derecha.",
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
    q: "¿Qué es el juego de escalera de agilidad?",
    a: "Es un juego de ritmo gratis en el navegador: bajan escaleras por la pantalla y pasas el cursor por los 4 peldaños de cada una (izquierda, derecha, izquierda, derecha) en un orden fijo. La partida dura 45 segundos y cada escalera completada suma puntos."
  },
  {
    q: "¿Cómo se juega? ¿Hay que hacer clic?",
    a: "No hace falta hacer clic. Lleva la mira al peldaño activo (contorno verde): cuenta como pisado y se activa el siguiente. El orden es 1 (izquierda) → 2 (derecha) → 3 (izquierda) → 4 (derecha). La tecla Esc termina el ejercicio."
  },
  {
    q: "¿Cómo se calculan los puntos y el combo?",
    a: "Cada escalera completada vale 100 puntos por el multiplicador de combo. El multiplicador sube con la racha: 1,1x desde 3 escaleras seguidas, 1,25x desde 5, 1,5x desde 10, 2,0x desde 20 y un máximo de 3,0x desde 50."
  },
  {
    q: "¿Qué cambia al subir de nivel?",
    a: "El nivel sube 1 cada 250 puntos y cada 4 escaleras seguidas dan un nivel extra. Las escaleras bajan a 150 px/s al principio, a 750 px/s en el nivel 15 y cada vez más rápido después. La zona de acierto de los peldaños se reduce de 18 px a 10 px."
  },
  {
    q: "¿Qué pasa si se me escapa un peldaño?",
    a: "Si una escalera llega al borde inferior de la pantalla antes de pisar sus 4 peldaños, el combo vuelve a 0, la pantalla parpadea en rojo y tiembla. No se restan puntos ni segundos."
  },
  {
    q: "¿Sustituye a los ejercicios con una escalera de agilidad real?",
    a: "No. El juego solo traslada al ratón el orden izquierda-derecha de un ejercicio de escalera. No mide ni promete mejoras en el juego de pies, la forma física o la velocidad."
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
  "Pulsa Empezar; tras la cuenta atrás (3-2-1) empieza la partida (en ordenador el cursor queda bloqueado en la pantalla).",
  "Lleva la mira al primer peldaño de la escalera que baja (izquierda, contorno verde).",
  "Pasa por los peldaños 2 (derecha), 3 (izquierda) y 4 (derecha) con el mismo ritmo para completar la escalera.",
  "Durante 45 segundos no dejes escapar ninguna escalera y haz subir el multiplicador de combo."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo jugar al juego de escalera de agilidad",
  "description": "Pasa el cursor por los 4 peldaños de cada escalera en el orden izquierda-derecha-izquierda-derecha.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Paso ${i + 1}`, "text": text }))
};

const ladderGuide = {
  heading: "Juego de escalera de agilidad: cómo funciona",
  intro: [
    "Este juego de escalera de agilidad lleva al cursor la secuencia izquierda-derecha-izquierda-derecha de una escalera de agilidad. Bajan escaleras por la pantalla y pasas la mira por los 4 peldaños en un orden fijo. No se hace clic: solo cuenta el movimiento del ratón.",
    "La partida dura 45 segundos. Cada escalera completada vale 100 puntos por el multiplicador de combo (hasta 3,0x). Cada 250 puntos sube el nivel: las escaleras bajan más rápido y la zona de acierto de los peldaños se hace más pequeña.",
    "Las secuencias rápidas de movimientos son más estables cuando los cuatro pasos se ejecutan como un bloque planificado y no uno a uno (Lashley, 1951; Schmidt, 1975). El juego practica ese orden y ese ritmo con la mano; no entrena el juego de pies ni la forma física."
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
      { name: "Cuatro peldaños en un solo gesto", desc: "Si miras cada peldaño y reaccionas, llegas tarde. Haz el zigzag izquierda-derecha-izquierda-derecha como un único movimiento continuo.", tips: "No te detengas entre peldaños." },
      { name: "Apunta un poco más abajo", desc: "La escalera baja sin parar. Apunta ligeramente por debajo de la posición actual del peldaño para caer en la zona de acierto.", tips: "Cuanto más rápido vaya, más tienes que anticiparte." },
      { name: "Mirada en el centro", desc: "Los peldaños aparecen a izquierda y derecha del eje central. Con la mirada en el medio ves ambos lados.", tips: "Desde el nivel 4 las escaleras se desplazan un poco hacia los lados." }
    ]
  },
  steps: STEPS,
  audience: "Quien busque un juego corto de ritmo y secuencia con el ratón o quiera practicar el vaivén rápido del cursor entre izquierda y derecha.",
  faqs: FAQS,
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954')
};

export default function AgilityLadderPageEs() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <MotorSequencingClient
        copy={{
          title: "Juego de Escalera de Agilidad",
          hudLabels: { score: "Puntos", timeLeft: "Tiempo restante", bestScore: "Récord", bestCombo: "Mejor combo" },
          rulesTitle: "Reglas del juego",
          rules: [
            { title: "4 peldaños en orden", text: "Pasa la mira por los peldaños de cada escalera en el orden 1 (izquierda) → 2 (derecha) → 3 (izquierda) → 4 (derecha). No hace falta hacer clic." },
            { title: "Multiplicador de combo", text: "Las escaleras seguidas suben el multiplicador hasta un máximo de 3,0x. Cada escalera vale 100 puntos por el multiplicador." },
            { title: "Subida de nivel", text: "Cada 250 puntos sube el nivel: las escaleras bajan más rápido y la zona de acierto se reduce." },
            { title: "Escalera perdida", text: "Si una escalera incompleta llega al borde inferior, el combo vuelve a cero. No se restan puntos ni tiempo." }
          ],
          aboutTitle: "Sobre el juego de escalera de agilidad",
          aboutHeading: "Orden y ritmo con el ratón",
          aboutText: "El juego de escalera de agilidad convierte la secuencia izquierda-derecha de una escalera de agilidad en un ejercicio de 45 segundos con el ratón. Cada escalera que baja se completa al pasar la mira por sus 4 peldaños en orden; a medida que sube la puntuación, la velocidad pasa de 150 px/s a 750 px/s en el nivel 15 y sigue aumentando después. Es un juego de ritmo y secuencia con la mano y no mide mejoras del juego de pies ni de la forma física."
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
