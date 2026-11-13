import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/predictive-pursuit';
const title = "Seguimiento ocular predictivo | SkillDrills";
const description = "Ejercicio gratis: cada 2,2 s aprox. el objetivo se desliza hacia un nuevo punto y frena hasta parar. Sin la línea, anticipa dónde se detendrá.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento ocular predictivo", "seguimiento predictivo", "anticipar trayectoria", "ejercicio de ojos online", "seguimiento ocular", "ejercicio ocular gratis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'es_ES', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Inicio", item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: "Ejercicios", item: 'https://skilldrills.online/es/drills' },
    { '@type': 'ListItem', position: 3, name: "Seguimiento Visual", item: 'https://skilldrills.online/es/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Seguimiento ocular predictivo", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento ocular predictivo",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/es' },
  inLanguage: 'es',
  dateModified: '2026-11-12',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Cómo practicar el seguimiento ocular predictivo",
  description: "Cuatro pasos para seguir un objetivo hasta su nuevo punto de parada y anticiparlo.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Postura cómoda",
    "text": "Siéntate a una distancia cómoda de la pantalla y relaja hombros y cuello."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Empezar con la línea",
    "text": "Deja al principio visible la línea que une el objetivo con su punto de llegada y síguelo hasta que se detenga."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Anticipar la parada",
    "text": "Activa Hide Line y calcula, por la dirección y la velocidad de salida, dónde se detendrá el objetivo."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Un ajuste cada vez",
    "text": "Cuando resulte fácil, sube la velocidad o activa Ocultar línea y Velocidad aleatoria, de uno en uno."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "¿Cómo se mueve el objetivo en el seguimiento ocular predictivo?",
    "a": "A velocidad 1,0x, cada 2,2 segundos aproximadamente un punto aleatorio de la pantalla pasa a ser el nuevo destino. El objetivo sale rápido hacia allí, frena poco a poco, se detiene en unos 1,5 segundos y espera al siguiente destino. No hay oclusión ni desapariciones. Es un ejercicio de la mirada en el navegador."
  },
  {
    "q": "¿Qué se anticipa exactamente?",
    "a": "El punto donde se detiene el objetivo. Por defecto, una línea une el objetivo con ese punto, así que es visible. Con Hide Line la línea desaparece y debes deducir el punto de parada por la dirección de salida y la frenada."
  },
  {
    "q": "¿Qué cambian la velocidad y Random Speed?",
    "a": "Más velocidad acelera tanto el movimiento como el cambio de destino. Random Speed hace oscilar la velocidad sin parar y vuelve irregular el intervalo hasta el siguiente destino."
  },
  {
    "q": "¿El ejercicio mide mis movimientos oculares o da una puntuación?",
    "a": "No. El navegador no sabe hacia dónde miras y no hay clics ni detección de aciertos. No hay nota. Si sigues el objetivo con el puntero, al final verás cuánto tiempo estuvo sobre el objetivo y su distancia media al centro; se mide el puntero, no tus ojos. Mantener la mirada donde pide el ejercicio depende de ti."
  },
  {
    "q": "¿Qué ajustes puedo cambiar?",
    "a": "Tras una cuenta atrás 3-2-1, la sesión dura 30, 45, 60, 90 o 120 segundos (60 por defecto). Puedes ajustar la velocidad de 0,5x a 9,0x, el tamaño del objetivo de 10 a 50 px, su color, las opciones Hide Line (ocultar línea), Random Speed (velocidad aleatoria), Gaze Trail (estela), Neon Glow y Scanlines, y fondo claro u oscuro. La tecla Esc termina la sesión en cualquier momento."
  },
  {
    "q": "¿Mejorará mi vista o mi puntería?",
    "a": "No está garantizado. Es una herramienta para practicar la mirada sobre un objetivo y no promete mejor agudeza visual ni mejor puntería. Compara tus sesiones en la misma pantalla y con los mismos ajustes."
  },
  {
    "q": "¿Cuánto tiempo debo practicar?",
    "a": "Unas cuantas sesiones de 1 a 2 minutos con pausas son suficientes. Si notas los ojos cansados o secos, parpadea y mira a lo lejos; detente si aparece dolor, mareo, náuseas o dolor de cabeza."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "Seguimiento ocular predictivo: guía",
  "intro": [
    "El seguimiento ocular predictivo consiste en seguir con la vista un objetivo que se desliza hacia un nuevo punto y frena hasta parar, anticipando dónde quedará. A velocidad 1,0x se elige un destino aleatorio cada 2,2 segundos aproximadamente; sin la línea de destino, tienes que deducirlo por el movimiento.",
    "El seguimiento suave de los ojos arranca con un pequeño retraso tras el inicio del movimiento; la anticipación ayuda a reducir ese retraso (Kowler, 1989; Barnes, 2008). El ejercicio repite situaciones en las que esa anticipación es útil.",
    "El navegador solo conoce la posición donde se dibuja el objetivo y tus ajustes, no hacia dónde miran realmente tus ojos. Solo se muestra la distancia del puntero al objetivo, no una medida de los ojos: compara también tu comodidad y concentración con la misma pantalla, distancia y ajustes. La frecuencia de refresco y el retardo de la pantalla también cambian cómo se ve el movimiento (Woods et al., 2015)."
  ],
  "benchmarks": {
    "title": "Etapas de práctica (guía de SkillDrills)",
    "headers": [
      "Etapa",
      "Objetivo de práctica"
    ],
    "rows": [
      [
        "Etapa 1",
        "1,0x, línea visible, seguir el trayecto y la parada"
      ],
      [
        "Etapa 2",
        "Mirar el punto de llegada antes que el objetivo"
      ],
      [
        "Etapa 3",
        "Hide Line activo: anticipar solo por la salida"
      ],
      [
        "Etapa 4",
        "Añadir velocidad o Random Speed, de uno en uno"
      ]
    ],
    "note": "Etapas de práctica sugeridas por SkillDrills: no son baremos oficiales, estadísticas de usuarios ni percentiles."
  },
  "techniques": {
    "title": "Consejos de ejecución",
    "items": [
      {
        "name": "Observa bien la salida",
        "desc": "Fíjate en la dirección y la velocidad en el instante en que el objetivo arranca. La frenada permite estimar el punto de parada.",
        "tips": "Si sin línea resulta demasiado difícil, vuelve a mostrarla y reaprende el patrón."
      },
      {
        "name": "Mira el objetivo, no el cursor",
        "desc": "No hace falta usar el ratón. Deja la mano quieta y sigue solo con los ojos.",
        "tips": "Comprueba de vez en cuando que la cabeza y el cuello no giran."
      },
      {
        "name": "Dificulta una sola cosa cada vez",
        "desc": "Sube por separado la velocidad, Ocultar línea y Velocidad aleatoria. Si pierdes la comodidad, vuelve al ajuste anterior.",
        "tips": "Tras cambiar un ajuste, no compares directamente con sesiones antiguas."
      },
      {
        "name": "Sesiones cortas y pausas",
        "desc": "Entre sesiones cortas, parpadea y mira a lo lejos. Más tiempo no es mejor.",
        "tips": "Para enseguida si notas dolor o mareo."
      }
    ]
  },
  "steps": [
    "Siéntate a una distancia cómoda de la pantalla y relaja hombros y cuello.",
    "Empieza con 30 a 60 segundos, velocidad 1,0x y línea visible.",
    "Cuando el objetivo arranque, estima su punto de parada por la dirección y la frenada y síguelo hasta allí.",
    "Después sube la velocidad o activa Ocultar línea y Velocidad aleatoria, de uno en uno."
  ],
  "audience": "Quien quiera practicar de forma sencilla a anticipar dónde se detendrá un objetivo en movimiento."
},
  faqs,
  sources: pickSources('robinson1965', 'kowler1989', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular suave continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Persecución de objetivo evasivo" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Estabilidad de fijación ocular" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en ocho" },
    { href: "/es/drills/visual-tracking/momentum-teleport-pursuit", label: "Seguimiento de objetivo con salto" }
  ],
};

export default function SpanishPredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{"title": "Seguimiento ocular predictivo", "subtitle": "Anticipar dónde se detendrá el objetivo", "description": "Seguimiento ocular predictivo: cada 2,2 segundos aprox. (a 1,0x) el objetivo se desliza hacia un nuevo punto y frena hasta parar. Anticipa dónde queda; Hide Line oculta la línea de destino. Sin clics; al final verás la distancia del puntero al objetivo, y el navegador no registra tu mirada."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
