import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/momentum-teleport-pursuit';
const title = "Seguimiento de Blanco Teletransportado | SkillDrills";
const description = "Ejercicio ocular gratis: el blanco avanza en línea recta y se teletransporta cada 1,2 s a un punto aleatorio sin cambiar de rumbo. Reencuéntralo con la vista.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento de blanco teletransportado", "blanco teletransportado", "ejercicio de ojos online", "sacadas ejercicio", "seguimiento visual", "ejercicio ocular gratis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Seguimiento de Blanco Teletransportado", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento de Blanco Teletransportado",
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
  name: "Cómo hacer el seguimiento de blanco teletransportado",
  description: "Cuatro pasos para reencontrar un blanco que cambió de lugar y seguir su movimiento en la misma dirección.",
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
    "name": "Seguir el movimiento",
    "text": "Sigue el blanco con calma mientras avanza en línea recta y rebota en los bordes de la pantalla."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Reencontrarlo tras el salto",
    "text": "Cuando el blanco se teletransporte, lleva la mirada de una vez a la nueva posición y sigue su movimiento en la misma dirección."
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
    "q": "¿Cómo funciona el seguimiento de blanco teletransportado?",
    "a": "El blanco avanza en línea recta con dirección y velocidad constantes y rebota en los bordes. A velocidad 1,0x se teletransporta aproximadamente cada 1,2 segundos a una posición aleatoria, sin cambiar dirección ni velocidad. Lo reencuentras con la vista y sigues su movimiento. Es un ejercicio en el navegador, no un examen de la vista ni una terapia."
  },
  {
    "q": "¿Se puede prever adónde saltará el blanco?",
    "a": "No. La nueva posición es aleatoria en cada salto. Lo único previsible es que, tras el salto, sigue en la misma dirección y a la misma velocidad. Una línea corta muestra hacia dónde se mueve; la opción Hide Line la oculta."
  },
  {
    "q": "¿Qué cambia al subir la velocidad?",
    "a": "El blanco va más rápido y salta más a menudo: aproximadamente cada 0,6 segundos a 2,0x. Con Random Speed, la velocidad oscila sin parar y los saltos se vuelven irregulares."
  },
  {
    "q": "¿El ejercicio mide mis movimientos oculares o da una puntuación?",
    "a": "No. El navegador no sabe hacia dónde miras y no hay clics ni detección de aciertos. Al final solo se muestran datos del puntero (tiempo sobre el objetivo y distancia al centro), no de los ojos; en este navegador solo se guarda el número de sesiones completadas. Mantener la mirada donde pide el ejercicio depende de ti."
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
  "heading": "Seguimiento de Blanco Teletransportado: guía",
  "intro": [
    "El seguimiento de blanco teletransportado es un ejercicio en el navegador en el que reencuentras con la vista un blanco que cambia de lugar de golpe. El blanco avanza en línea recta, rebota en los bordes y, a velocidad 1,0x, se teletransporta cada 1,2 segundos aproximadamente a un punto aleatorio, manteniendo dirección y velocidad.",
    "Seguir con suavidad un objeto en movimiento y llevar la mirada rápidamente a un objeto lejano (sacada) se describen como movimientos oculares distintos (Rashbass, 1961; Krauzlis, 2004). Aquí ambos se alternan continuamente.",
    "El navegador solo conoce la posición donde se dibuja el objetivo y tus ajustes, no hacia dónde miran realmente tus ojos. Solo se muestran datos del puntero (tiempo sobre el objetivo y distancia al centro), no de los ojos: compara tu comodidad y concentración con la misma pantalla, distancia y ajustes. La frecuencia de refresco y el retardo de la pantalla también cambian cómo se ve el movimiento (Woods et al., 2015)."
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
        "1,0x, línea de dirección visible, reencontrar sin esfuerzo"
      ],
      [
        "Etapa 2",
        "Tras cada salto, encontrar el blanco de un solo vistazo"
      ],
      [
        "Etapa 3",
        "Subir la velocidad y acostumbrarse a saltos más frecuentes"
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
        "name": "Un solo movimiento y seguir",
        "desc": "Tras un salto, no busques por toda la pantalla: lleva la mirada de una vez a la nueva posición y sigue el blanco en la misma dirección que antes.",
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
    "Cuando el blanco se teletransporte, lleva la mirada a la nueva posición y sigue su movimiento en la misma dirección.",
    "Después sube la velocidad o activa Ocultar línea y Velocidad aleatoria, de uno en uno."
  ],
  "audience": "Quien quiera practicar de forma sencilla a reencontrar con la vista un blanco en movimiento que cambia de lugar de repente."
},
  faqs,
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular suave continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Persecución evasiva reactiva" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Estabilidad de la fijación ocular" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en ocho" },
    { href: "/es/drills/visual-tracking/predictive-pursuit", label: "Seguimiento ocular predictivo" }
  ],
};

export default function SpanishMomentumTeleportPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient copy={{"title": "Seguimiento de Blanco Teletransportado", "subtitle": "Reencontrar un blanco que salta pero mantiene el rumbo", "description": "Seguimiento de blanco teletransportado: el blanco avanza en línea recta y se teletransporta cada 1,2 segundos aprox. (a 1,0x) a un punto aleatorio, manteniendo dirección y velocidad. Sin clics; al final verás la distancia del puntero al objetivo, pero el navegador no registra tus ojos."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
