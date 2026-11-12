import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/spatial-shift-pursuit';
const title = "Seguimiento visual con cambio espacial | SkillDrills";
const description = "Ejercicio gratis: el objetivo avanza en línea recta, rebota en los bordes y cambia sin aviso de dirección y velocidad. Síguelo con la vista sin perderlo.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento visual con cambio espacial", "cambio de trayectoria", "seguimiento ocular", "ejercicio de ojos online", "seguir objetivo en movimiento", "ejercicio ocular gratis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Rastreo Visual", item: 'https://skilldrills.online/es/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Seguimiento visual con cambio espacial", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento visual con cambio espacial",
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
  name: "Cómo hacer el seguimiento visual con cambio espacial",
  description: "Cuatro pasos para seguir un objetivo que cambia bruscamente de dirección y velocidad.",
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
    "name": "Seguir las rectas",
    "text": "Sigue el objetivo con calma mientras avanza en línea recta y rebota en los bordes de la pantalla."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Reajustar tras el cambio",
    "text": "Cuando la dirección y la velocidad cambien de golpe, reajusta la mirada al nuevo movimiento y continúa."
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
    "q": "¿Cómo se mueve el objetivo en el seguimiento visual con cambio espacial?",
    "a": "El objetivo avanza en línea recta, rebota en los bordes y acelera un poco en cada rebote (alrededor del 2 %). En momentos aleatorios cambia sin aviso de dirección y velocidad: el sentido horizontal y el vertical se invierten o no, y la velocidad se multiplica por 0,8 a 1,3. No hay saltos ni movimiento de la pantalla. Es un ejercicio de la mirada, no un examen de la vista."
  },
  {
    "q": "¿Con qué frecuencia cambia la trayectoria?",
    "a": "Sin ritmo fijo, al azar, normalmente alrededor de una vez por segundo. Con Random Speed, la probabilidad de cambio se duplica y la velocidad también oscila."
  },
  {
    "q": "¿Para qué sirve la línea del objetivo?",
    "a": "Muestra la dirección y la velocidad actuales. Con Hide Line desaparece y tienes que notar el cambio solo por el movimiento del objetivo."
  },
  {
    "q": "¿El ejercicio mide mis movimientos oculares o da una puntuación?",
    "a": "No. El navegador no sabe hacia dónde miras y no hay clics ni detección de aciertos. No hay puntuación: solo se guarda en este navegador el número de sesiones completadas. Mantener la mirada donde pide el ejercicio depende de ti."
  },
  {
    "q": "¿Qué ajustes puedo cambiar?",
    "a": "Tras una cuenta atrás 3-2-1, la sesión dura 30, 45, 60, 90 o 120 segundos (60 por defecto). Puedes ajustar la velocidad de 0,5x a 9,0x, el tamaño del objetivo de 10 a 50 px, su color, las opciones Hide Line (ocultar línea), Random Speed (velocidad aleatoria), Gaze Trail (estela), Neon Glow y Scanlines, y fondo claro u oscuro. La tecla Esc termina la sesión en cualquier momento."
  },
  {
    "q": "¿Mejorará mi vista o mi puntería?",
    "a": "No está garantizado. No es un examen de la vista ni una terapia, sino una herramienta para practicar la mirada sobre un objetivo. No promete mejor agudeza visual ni mejor puntería. Si notas molestias en los ojos, consulta a un profesional."
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
  "heading": "Seguimiento visual con cambio espacial: guía",
  "intro": [
    "El seguimiento visual con cambio espacial consiste en seguir con la vista un objetivo que avanza en línea recta, rebota en los bordes y cambia sin aviso de dirección y velocidad. Los cambios son aleatorios y frecuentes; el objetivo no salta y la pantalla no se mueve.",
    "Cuando un objetivo cambia bruscamente de dirección, el seguimiento suave llega tarde y se suman movimientos rápidos de corrección (Robinson, 1965; Krauzlis, 2004). El ejercicio repite esos reajustes.",
    "El navegador solo conoce la posición donde se dibuja el objetivo y tus ajustes, no hacia dónde miran realmente tus ojos. No hay puntuación ni porcentaje de precisión: compara tu comodidad y concentración con la misma pantalla, distancia y ajustes. La frecuencia de refresco y el retardo de la pantalla también cambian cómo se ve el movimiento (Woods et al., 2015)."
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
        "1,0x, línea visible, reajustar tras cada cambio"
      ],
      [
        "Etapa 2",
        "Casi no perder el objetivo en los cambios"
      ],
      [
        "Etapa 3",
        "Subir la velocidad y seguir cambios más rápidos"
      ],
      [
        "Etapa 4",
        "Añadir Hide Line o Random Speed, de uno en uno"
      ]
    ],
    "note": "Etapas de práctica sugeridas por SkillDrills: no son baremos clínicos, estadísticas de usuarios ni percentiles."
  },
  "techniques": {
    "title": "Consejos de ejecución",
    "items": [
      {
        "name": "No adelantarse demasiado",
        "desc": "Incluso en las rectas, cuenta con un cambio en cualquier momento y mantén la mirada en el objetivo. Mirar demasiado por delante hace que lo pierdas en el cambio.",
        "tips": "Si lo pierdes a menudo, baja la velocidad y deja visible la línea de dirección."
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
    "Cuando la dirección y la velocidad cambien de golpe, reajusta la mirada al nuevo movimiento y sigue.",
    "Después sube la velocidad o activa Ocultar línea y Velocidad aleatoria, de uno en uno."
  ],
  "audience": "Quien quiera practicar de forma sencilla a seguir con la vista movimientos imprevisibles."
},
  faqs,
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular lento y continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimiento de objetivos evasivos" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supresión de imágenes fantasma" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en forma de ocho" },
    { href: "/es/drills/visual-tracking/sine-wave-pursuit", label: "Seguimiento en onda sinusoidal" }
  ],
};

export default function SpanishSpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{"title": "Seguimiento visual con cambio espacial", "subtitle": "Seguir un objetivo que cambia de dirección y velocidad sin aviso", "description": "Seguimiento visual con cambio espacial: el objetivo avanza en línea recta, rebota y cambia en momentos aleatorios de dirección y velocidad. Hide Line oculta la línea de dirección. Sin clics ni puntuación; el navegador no registra tu mirada."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
