import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/es/drills/visual-tracking/sine-wave-pursuit';
const title = "Seguimiento ocular sinusoidal | SkillDrills";
const description = "Ejercicio gratis: sigue con la vista un objetivo que va y viene de izquierda a derecha, subiendo y bajando por una trayectoria sinusoidal fija.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento ocular sinusoidal", "trayectoria sinusoidal", "seguimiento ocular", "ejercicio de ojos online", "seguimiento suave", "ejercicio ocular gratis"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Seguimiento ocular sinusoidal", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Seguimiento ocular sinusoidal",
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
  name: "Cómo hacer el seguimiento ocular sinusoidal",
  description: "Cuatro pasos para seguir con suavidad un objetivo que va y viene por una curva en onda.",
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
    "name": "Ver la curva",
    "text": "Al principio deja la curva visible y observa la onda que recorrerá el objetivo."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Seguir sin cortes",
    "text": "Sigue el objetivo sin interrupciones mientras sube y baja por la curva y cambia de sentido en los bordes."
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
    "q": "¿Cómo se mueve el objetivo en el seguimiento ocular sinusoidal?",
    "a": "El objetivo va y viene con velocidad horizontal constante entre el 5 % y el 95 % del ancho de la pantalla, aproximadamente (unos 220 píxeles por segundo a 1,0x), y sigue una curva sinusoidal fija con una amplitud de cerca del 28 % de la altura de la pantalla. En los bordes cambia de sentido y recorre la misma curva de vuelta. Es un ejercicio de la mirada en el navegador, no un examen de la vista."
  },
  {
    "q": "¿Por qué cambia todo el tiempo la velocidad vertical?",
    "a": "La velocidad horizontal es constante, pero la pendiente de la curva varía. En el centro de la onda el movimiento vertical es más rápido; en crestas y valles parece detenerse un instante."
  },
  {
    "q": "¿Qué cambian Hide Line y Random Speed?",
    "a": "Hide Line oculta la curva: sigues entonces de memoria o solo por el movimiento. Random Speed hace oscilar la velocidad sin parar. La trayectoria en sí no cambia."
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
  "heading": "Seguimiento ocular sinusoidal: guía",
  "intro": [
    "El seguimiento ocular sinusoidal consiste en seguir con la vista un objetivo que va y viene de izquierda a derecha subiendo y bajando por una curva sinusoidal fija. La velocidad horizontal es constante y el objetivo cambia de sentido en los bordes de la pantalla.",
    "El seguimiento suave de los ojos acompaña un objetivo lento casi a su misma velocidad, pero se queda atrás con más facilidad cuando acelera (Robinson, 1965). Aquí varías la velocidad y sigues un movimiento que cambia entre las crestas y el centro de la onda.",
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
        "1,0x, curva visible, seguir sin interrupciones"
      ],
      [
        "Etapa 2",
        "No perder el objetivo en los cambios de sentido"
      ],
      [
        "Etapa 3",
        "Subir la velocidad y seguir el centro rápido de la onda"
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
        "name": "Coge el ritmo de la onda",
        "desc": "El objetivo frena un instante en las crestas y acelera en el centro. Conocer ese ritmo ayuda a seguirlo sin cortes.",
        "tips": "Si te quedas detrás del objetivo, baja la velocidad."
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
    "Sigue el objetivo sin interrupciones mientras va y viene por la curva en onda.",
    "Después sube la velocidad o activa Ocultar línea y Velocidad aleatoria, de uno en uno."
  ],
  "audience": "Quien quiera practicar de forma sencilla a seguir con la vista un objetivo por una curva regular."
},
  faqs,
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento lento continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimiento de objetivo evasivo" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supresión de imágenes residuales" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en ocho" },
    { href: "/es/drills/visual-tracking/momentum-teleport-pursuit", label: "Seguimiento de objetivo con salto" }
  ],
};

export default function SpanishSineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{"title": "Seguimiento ocular sinusoidal", "subtitle": "Seguir un objetivo por una trayectoria en onda", "description": "Seguimiento ocular sinusoidal: el objetivo va y viene de izquierda a derecha subiendo y bajando por una curva en onda fija. Hide Line oculta la curva. Sin clics ni puntuación; el navegador no registra tu mirada."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
