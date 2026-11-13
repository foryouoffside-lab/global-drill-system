import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/peripheral-ping-pursuit';
const title = "Fijación Central y Visión Periférica | SkillDrills";
const description = "Ejercicio gratis: mantén la mirada en la cruz central mientras aparecen puntos breves en otras zonas de la pantalla. Detéctalos sin mover los ojos.";

export const metadata = {
  title,
  description,
  keywords: ["fijación central y visión periférica", "visión periférica ejercicios", "fijación central", "ejercicio de ojos online", "mirada fija ejercicio", "percepción periférica"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Fijación Central y Visión Periférica", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Fijación Central y Visión Periférica",
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
  name: "Cómo practicar la visión periférica con fijación central",
  description: "Cuatro pasos para mantener la mirada en la cruz central y notar los puntos que parpadean en la periferia.",
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
    "name": "Fijar la cruz",
    "text": "Al empezar la sesión, mira la cruz del centro de la pantalla y mantén ahí la mirada."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Notar sin mirar",
    "text": "Cuando un punto parpadee en algún lugar, nótalo con el rabillo del ojo, sin girar los ojos hacia él."
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
    "q": "¿Cómo funciona el ejercicio de fijación central y visión periférica?",
    "a": "Hay una cruz fija en el centro. En posiciones aleatorias aparece un punto cada vez que enseguida desaparece: unos 0,75 segundos a velocidad 1,0x, y el siguiente llega tras una pausa corta. Los puntos no se mueven. El objetivo es notarlos manteniendo la mirada en la cruz; no hay que hacer clic. No es un examen del campo visual."
  },
  {
    "q": "¿Qué cambian la velocidad y Hide Line?",
    "a": "Más velocidad hace que los puntos aparezcan más a menudo y duren menos (como mínimo unos 0,25 segundos). Random Speed hace variar sin parar la frecuencia y la duración. Hide Line oculta la cruz y tienes que mantener el centro sin referencia."
  },
  {
    "q": "¿Puedo mirar los puntos?",
    "a": "El sentido del ejercicio es mantener la mirada en el centro. El navegador no registra tus ojos, así que comprueba tú mismo si siguen a los puntos. Si ocurre a menudo, baja la velocidad."
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
  "heading": "Fijación Central y Visión Periférica: guía",
  "intro": [
    "Fijación central y visión periférica es un ejercicio en el navegador en el que mantienes la mirada en una cruz en el centro de la pantalla y notas, sin mover los ojos, puntos que parpadean un instante. Aparecen de uno en uno en posiciones aleatorias y se ven unos 0,75 segundos a velocidad 1,0x.",
    "La visión central capta los detalles hacia donde miras; la visión periférica detecta los cambios alrededor. Cuando algo aparece a un lado, los ojos tienden a saltar hacia allí (Findlay & Walker, 1999). Este ejercicio repite situaciones en las que resistes ese impulso.",
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
        "1,0x, cruz visible, mirada mantenida en el centro"
      ],
      [
        "Etapa 2",
        "Notar la mayoría de los puntos sin mirarlos"
      ],
      [
        "Etapa 3",
        "Subir la velocidad: puntos más breves y frecuentes"
      ],
      [
        "Etapa 4",
        "Añadir Hide Line o Random Speed, de uno en uno"
      ]
    ],
    "note": "Etapas de práctica sugeridas por SkillDrills: no son baremos oficiales, estadísticas de usuarios ni percentiles."
  },
  "techniques": {
    "title": "Consejos de ejecución",
    "items": [
      {
        "name": "Mirada en el centro, atención amplia",
        "desc": "Mira la cruz sin tensión y percibe la pantalla entera. No busques los puntos con los ojos.",
        "tips": "Si los ojos se escapan a menudo, baja la velocidad y deja la cruz visible."
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
    "Mantén la mirada en la cruz y nota con el rabillo del ojo los puntos que parpadean.",
    "Después sube la velocidad o activa Ocultar línea y Velocidad aleatoria, de uno en uno."
  ],
  "audience": "Quien quiera practicar de forma sencilla a percibir cambios en la periferia sin apartar la vista del centro."
},
  faqs,
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular suave continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Persecución evasiva reactiva" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Estabilidad de la fijación ocular" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en ocho" },
    { href: "/es/drills/visual-tracking/momentum-teleport-pursuit", label: "Seguimiento de objetivo desplazado" }
  ],
};

export default function SpanishPeripheralPingPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient copy={{"title": "Fijación Central y Visión Periférica", "subtitle": "Mirar la cruz central y notar los puntos que parpadean", "description": "Mirada fija en la cruz central: en posiciones aleatorias parpadean puntos durante unos 0,75 segundos (a 1,0x). Detéctalos sin mover los ojos. Sin clics ni puntuación; el navegador no registra tu mirada."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
