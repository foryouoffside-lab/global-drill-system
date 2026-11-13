import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/es.md)
// Primary: Ejercicios de visión periférica (no-demand descriptive).
// Dropped "Test" (DGT field-test intent) and UFOV-expansion claims.
// Visual peripheral-ping-pursuit keeps "Fijación Central".
// ============================================================

const url = 'https://skilldrills.online/es/drills/physical/reflex-training/peripheral-threat-sweeper';
const title = "Ejercicios de Visión Periférica: Juego Online | SkillDrills";
const description = "Ejercicios de visión periférica como juego: mira el núcleo central y haz clic en las amenazas que llegan del borde. +2 s por acierto, -1 s por fallo.";

export const metadata = {
  title,
  description,
  keywords: [
    "ejercicios de visión periférica",
    "visión periférica en juegos",
    "amenazas desde el borde",
    "juego de visión periférica",
    "Peripheral Threat Sweeper"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url,
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Centro de Entrenamiento Físico", "item": "https://skilldrills.online/es/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Ejercicios de Visión Periférica", "item": url }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ejercicios de Visión Periférica",
  description,
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador actual con HTML5 Canvas y ratón o pantalla táctil",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  url,
  "inLanguage": "es-ES",
  "dateModified": "2026-11-10"
};

const faqs = [
  {
    q: "¿Qué hago en estos ejercicios de visión periférica?",
    a: "Mantienes la vista en el núcleo del centro de la pantalla y haces clic en las amenazas que llegan desde el borde hacia él, antes de que lo alcancen. Así practicas notar movimientos alrededor sin mover los ojos. Es un juego de navegador."
  },
  {
    q: "¿En qué se diferencian la visión central y la periférica?",
    a: "La visión central distingue letras y detalles en una zona pequeña alrededor del punto que miras; la periférica percibe, fuera de esa zona, sobre todo movimiento y cambios más grandes. El juego te pide mantener la mirada en el centro y reaccionar a las amenazas que vienen del borde."
  },
  {
    q: "¿Puedo mover los ojos?",
    a: "La idea es seguir mirando el núcleo y solo percibir los bordes. Si sigues las amenazas con los ojos, estás practicando otra cosa. El navegador no puede saber adónde miras, así que depende de ti."
  },
  {
    q: "¿Cómo se calculan los puntos y el tiempo?",
    a: "Cada acierto vale 100 puntos multiplicados por el combo y un bonus de nivel, y suma 2 segundos, hasta un máximo de 60 segundos. La partida empieza con 45 segundos y el combo llega hasta 3,0x. Si una amenaza alcanza el núcleo o haces clic en el vacío, el combo vuelve a 1,0x y pierdes 1 segundo. Esta penalización está siempre activa y no se puede desactivar."
  },
  {
    q: "¿Cómo aumenta la dificultad?",
    a: "A medida que sube la puntuación, las amenazas pasan de unos 80 px/s a cerca de 520 px/s (algo más durante un combo largo) y el intervalo entre apariciones baja de unos 1,4 segundos a un mínimo de 0,20 segundos. Más adelante aparecen también amenazas más rápidas y otras que se mueven ondulando de lado."
  },
  {
    q: "¿Qué es la visión de túnel?",
    a: "Bajo estrés o muy concentrado en un punto, solemos percibir peor lo que hay alrededor; a eso se le suele llamar visión de túnel. Este juego practica mantener el centro a la vista sin perder los bordes."
  },
  {
    q: "¿Este juego amplía mi campo visual?",
    a: "No podemos prometerlo. Quien practica una tarea suele mejorar en esa tarea, pero el efecto de este juego no se ha estudiado. Úsalo para comparar tus propios resultados."
  },
  {
    q: "¿Influyen el tamaño y la distancia de la pantalla?",
    a: "Cuanto más grande y cercana es la pantalla, más hacia fuera de tu campo visual aparecen las amenazas. Compara tus resultados siempre con la misma distancia y postura. La frecuencia de refresco y el retraso de entrada también pueden influir (Woods et al., 2015)."
  },
  {
    q: "¿Dónde se guardan mis resultados?",
    a: "La mejor puntuación, la precisión y el mejor combo se guardan en el almacenamiento local de tu navegador y este ejercicio no los envía a ningún servidor. Si borras los datos del navegador, desaparecen."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-10",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const steps = [
  "Siéntate cómodo y mira el núcleo del centro de la pantalla.",
  "Percibe las amenazas que llegan desde el borde sin mover los ojos.",
  "Haz clic en la amenaza antes de que alcance el núcleo.",
  "Suma 2 segundos por acierto y mantén el combo para subir la puntuación."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo jugar a los ejercicios de visión periférica",
  "description": "Mantener la mirada en el centro e interceptar las amenazas que llegan desde el borde, en cuatro pasos.",
  "step": steps.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Paso ${i + 1}`, "text": text }))
};

const guideProps = {
  heading: "Ejercicios de visión periférica: guía",
  intro: [
    "Estos ejercicios de visión periférica son un juego gratis en el navegador: mantienes la vista en el núcleo central e interceptas las amenazas que llegan desde el borde. Cada acierto suma 2 segundos; un clic en el vacío o una amenaza que toca el núcleo resta 1.",
    "La investigación muestra que se puede desplazar la atención sin mover los ojos (Posner, 1980). Los objetivos con contraste y en movimiento se detectan rápido incluso en la periferia (Treisman & Gelade, 1980). El juego lo convierte en una tarea de clic.",
    "Al principio aparece una amenaza cada 1,4 segundos aproximadamente; con la puntuación se vuelven más rápidas y más frecuentes (hasta 0,20 segundos de intervalo). Para hacer clic ayuda un movimiento amplio seguido de una pequeña corrección final (Woodworth, 1899; Fitts, 1954).",
    "Los resultados son registros de práctica."
  ],
  benchmarks: {
    title: "Rangos de nota (niveles de práctica de SkillDrills)",
    headers: ["Nota", "Puntuación final"],
    rows: [
      ["S+", "desde 21.660"],
      ["S", "17.340 – 21.659"],
      ["A", "13.500 – 17.339"],
      ["B", "8.640 – 13.499"],
      ["C", "4.860 – 8.639"],
      ["D", "2.160 – 4.859"],
      ["F", "menos de 2.160"]
    ],
    note: "Niveles de práctica de SkillDrills calculados con la fórmula de nota del juego; no son estadísticas de usuarios ni percentiles."
  },
  techniques: {
    title: "4 consejos para sumar más",
    items: [
      { name: "Mirada fija en el centro", desc: "Mirar el núcleo sin mover los ojos es la base del ejercicio. Seguir las amenazas con la vista es practicar otra cosa.", tips: "Si los ojos se escapan, crea el hábito primero en los niveles bajos." },
      { name: "Ver toda la pantalla de forma relajada", desc: "No te concentres en una dirección; percibe toda la pantalla a la vez, relajado. Así el movimiento llama la atención antes.", tips: "Relaja los ojos y mantén un enfoque suave." },
      { name: "Movimiento amplio, ajuste fino", desc: "Cuando sepas la posición, lleva el cursor cerca de una vez y frena solo al final.", tips: "Los clics precipitados cerca del núcleo cuestan el combo y 1 segundo." },
      { name: "Partidas cortas, con pausas", desc: "Los ojos cansados bajan la concentración. Juega partidas cortas y aparta la vista de la pantalla entre ellas.", tips: "Para si notas dolor o mareo." }
    ]
  },
  steps,
  audience: "Quien quiera practicar de forma lúdica la reacción a movimientos en el borde de la pantalla, y jugadores que quieran probar a mantener la mirada en el centro sin perder lo que pasa alrededor.",
  faqs,
  sources: pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function PeripheralThreatSweeperEsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <PeripheralThreatSweeperClient
        copy={{
          title: "Ejercicios de Visión Periférica",
          hudLabels: {
            score: "Puntos",
            time: "Tiempo",
            bestScore: "Récord",
            bestCombo: "Mejor combo",
            accuracy: "Precisión",
            sweeps: "Aciertos",
            breaches: "En el núcleo",
            peakLevel: "Nivel máx.",
            getReady: "PREPÁRATE"
          },
          rulesTitle: "Reglas y puntuación",
          rulesItems: [
            { title: "Intercepta y gana tiempo", text: "Haz clic en las amenazas que llegan desde el borde: 100 puntos (multiplicados por el combo y el nivel) y +2 segundos (máximo 60 segundos)." },
            { title: "Multiplicador de combo", text: "Los aciertos seguidos sin fallo suben el multiplicador hasta 3,0x." },
            { title: "Dificultad creciente", text: "Con la puntuación, las amenazas van más rápido y aparecen más a menudo (hasta 0,20 s de intervalo)." },
            { title: "Núcleo alcanzado y clics fallidos", text: "Si una amenaza alcanza el núcleo o haces clic en el vacío, el combo vuelve a 1,0x y pierdes 1 segundo." }
          ],
          aboutTitle: "Sobre los ejercicios de visión periférica",
          aboutSections: [
            { title: "Mover la atención sin mover los ojos", subtitle: "Posner (1980): atención espacial", content: "Se puede llevar la atención a otro punto sin mover los ojos. Aquí la mirada se queda en el núcleo mientras notas las amenazas del borde." },
            { title: "Los objetivos en movimiento llaman la atención", subtitle: "Treisman (1980): búsqueda visual", content: "Los objetivos con contraste y en movimiento destacan rápido incluso en la periferia. Quien mira toda la pantalla de forma relajada detecta antes las amenazas nuevas." },
            { title: "Movimiento amplio, ajuste fino", subtitle: "Woodworth (1899) y Fitts (1954)", content: "Apuntar rápido combina un movimiento amplio con una pequeña corrección final. Cerca del núcleo, frena y haz clic con precisión." },
            { title: "Varias amenazas a la vez", subtitle: "Intervalos más cortos más adelante", content: "Más adelante las amenazas llegan seguidas y hay que repartir la atención. Mantén la mirada en el centro y resuelve primero las más cercanas al núcleo." }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
