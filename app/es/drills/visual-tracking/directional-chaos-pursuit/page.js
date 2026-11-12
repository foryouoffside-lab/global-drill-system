import DirectionalChaosPursuitClient from '@/app/drills/visual-tracking/directional-chaos-pursuit/DirectionalChaosPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/es/drills/visual-tracking/directional-chaos-pursuit';
const name = "Seguimiento ocular con cambios de dirección";
const title = `${name} | SkillDrills`;
const description = "Seguimiento ocular con cambios de dirección gratis: el objetivo cambia de dirección y velocidad al azar y rebota en los bordes. Ajusta velocidad y duración.";

export const metadata = {
  title,
  description,
  keywords: ["seguimiento ocular con cambios de dirección","seguimiento con cambios de dirección","objetivo imprevisible","seguir un objetivo con la mirada","ejercicio de seguimiento ocular","ejercicio para los ojos en el navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/directional-chaos-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'es_ES', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('es', url, 'visual-tracking', name, true),
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
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
  name: "Seguimiento ocular con cambios de dirección (aplicación web)",
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
  name,
  url,
  description,
  genre: ['Visual training', 'Eye tracking exercise'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'es',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Cómo hacer: Seguimiento ocular con cambios de dirección",
  description: "Seguimiento ocular con cambios de dirección en cuatro pasos sencillos.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Ponte cómodo",
    "text": "Siéntate a una distancia cómoda de la pantalla, con hombros y mano relajados."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Detecta los cambios",
    "text": "Cuando el objetivo cambie de dirección, vuelve a colocar la mirada sobre él con calma."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Sigue con la mirada",
    "text": "Sigue el objetivo con los ojos, no el cursor, y termina la sesión de 30 a 120 segundos."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Cambia un ajuste cada vez",
    "text": "Después sube la velocidad o activa Ocultar línea o la velocidad aleatoria, de uno en uno."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "¿Qué es el seguimiento ocular con cambios de dirección?",
    "a": "Un ejercicio en el navegador en el que sigues con los ojos un objetivo que cambia de dirección de forma imprevisible. Duración (30 a 120 segundos), velocidad, tamaño y línea son ajustables. No es un test de visión ni un tratamiento."
  },
  {
    "q": "¿Cómo se mueve el objetivo?",
    "a": "En cada fotograma se suma un pequeño impulso aleatorio a su velocidad, dentro de un límite máximo. En el borde rebota y acelera un poco. No reacciona al cursor."
  },
  {
    "q": "¿Mide el movimiento de mis ojos?",
    "a": "No. El navegador no ve tu mirada; solo conoce la posición dibujada del objetivo y los ajustes. El cursor es solo una ayuda y no demuestra hacia dónde miras. No hay puntuación."
  },
  {
    "q": "¿Qué cambia la velocidad aleatoria?",
    "a": "La velocidad del objetivo varía de forma irregular y cuesta más anticiparla. Actívala cuando la velocidad base sea cómoda, y no a la vez que ocultas la línea."
  },
  {
    "q": "¿Conviene dejar la línea visible?",
    "a": "Con la línea visible es más fácil prever el movimiento, lo que ayuda al principio. Después puedes ocultarla para subir la dificultad. No hay opción correcta: compara solo ajustes iguales."
  },
  {
    "q": "¿Con qué ajustes empiezo?",
    "a": "Sesiones de 30 a 60 segundos, velocidad lenta (0,5 a 1,0×) y línea visible. La velocidad va de 0,5 a 9,0× y el tamaño del objetivo de 10 a 50 px; cambia un ajuste cada vez."
  },
  {
    "q": "¿Mejora la vista o la puntería?",
    "a": "No se puede garantizar. Es un ejercicio para seguir un objetivo con los ojos; no promete mejorar la vista, tratar problemas oculares ni mejorar la puntería en FPS. Si notas molestias oculares, consulta a un profesional."
  },
  {
    "q": "¿Influyen la pantalla y el entorno?",
    "a": "Sí. Frecuencia de refresco, brillo, contraste, tamaño y distancia de la pantalla y el navegador cambian cómo se ve el objetivo. También influyen los retrasos de entrada y de imagen (Woods et al., 2015): compara en las mismas condiciones."
  },
  {
    "q": "¿Cuánto tiempo practicar?",
    "a": "En bloques cortos de 5 a 10 minutos, con pausas. Si los ojos se cansan o se secan, para, parpadea y mira a lo lejos. Para si aparece dolor, mareo, náuseas o dolor de cabeza."
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
  "heading": "Guía: Seguimiento ocular con cambios de dirección",
  "intro": [
    "En este seguimiento ocular con cambios de dirección, el objetivo recibe en cada fotograma un pequeño impulso aleatorio: su dirección y su velocidad cambian todo el tiempo y rebota en los bordes. Sin trayectoria fija no se puede anticipar del todo; cuando se adelanta, una sacada de corrección suele devolverlo a la visión central (Krauzlis, 2004).",
    "El navegador solo conoce la posición dibujada del objetivo y tus ajustes, no hacia dónde miran tus ojos. No hay puntuación: solo se cuentan las sesiones completadas. El resultado es un registro de práctica repetible, no una medida clínica ni un test de visión.",
    "Usa una distancia cómoda y compara siempre la misma pantalla y el mismo navegador. La frecuencia de refresco y el dispositivo de entrada cambian la imagen (Woods et al., 2015). Para si notas dolor, mareo, náuseas o visión borrosa persistente."
  ],
  "benchmarks": {
    "title": "Etapas de práctica (referencia)",
    "headers": [
      "Etapa",
      "Objetivo"
    ],
    "rows": [
      [
        "1",
        "Velocidad lenta, línea visible"
      ],
      [
        "2",
        "Mantener la velocidad base con comodidad"
      ],
      [
        "3",
        "Seguir en el objetivo pese a los cambios"
      ],
      [
        "4",
        "Ocultar la línea"
      ],
      [
        "5",
        "Añadir velocidad aleatoria"
      ]
    ],
    "note": "Esta tabla es una orientación de práctica de SkillDrills. No es una norma de función visual, ni una estadística de usuarios, ni un percentil."
  },
  "techniques": {
    "title": "4 consejos de práctica",
    "items": [
      {
        "name": "No anticipes demasiado",
        "desc": "La trayectoria cambia cada vez. En lugar de adivinar la próxima posición, mantén el objetivo en el centro de la mirada y vuelve a él en un solo movimiento.",
        "tips": "Si resulta incómodo, baja la velocidad y vuelve a mostrar la línea."
      },
      {
        "name": "Mira el objetivo, no el cursor",
        "desc": "El puntero es solo una ayuda. Sigue el objetivo con los ojos y relaja hombros y mano.",
        "tips": "Comprueba de vez en cuando que la cabeza y el cuello no giran con él."
      },
      {
        "name": "Una dificultad cada vez",
        "desc": "Sube por separado la velocidad, la línea oculta y la velocidad aleatoria. Si baja la comodidad, vuelve al ajuste anterior.",
        "tips": "Tras cada cambio, compara de nuevo."
      },
      {
        "name": "Sesiones cortas con pausas",
        "desc": "Practica en bloques de 5 a 10 minutos, parpadea y mira a lo lejos. Más tiempo no es necesariamente mejor.",
        "tips": "Dolor, mareo o náuseas: para enseguida."
      }
    ]
  },
  "steps": [
    "Siéntate a una distancia cómoda, con hombros y mano relajados.",
    "Empieza con 30 a 60 segundos, velocidad lenta y línea visible.",
    "Sigue el objetivo con los ojos, no el cursor.",
    "Después sube la velocidad o un ajuste cada vez."
  ],
  "audience": "Quien quiera probar el ejercicio «Seguimiento ocular con cambios de dirección» en el navegador y practicar de forma ligera el seguimiento de un objetivo en movimiento."
},
  faqs,
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
  {
    "href": "/es/drills/visual-tracking/constant-slow-pursuit",
    "label": "Ejercicio de Seguimiento Lento Constante"
  },
  {
    "href": "/es/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Objetivo que Cambia de Dirección sin Aviso"
  },
  {
    "href": "/es/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "Seguimiento con Imágenes Fantasma"
  },
  {
    "href": "/es/drills/visual-tracking/infinity-pursuit",
    "label": "Ejercicio Ocular en Figura Ocho"
  }
],
};

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DirectionalChaosPursuitClient
        copy={{
          title: name,
          subtitle: "Seguir con la mirada un objetivo imprevisible",
          description: "Seguimiento ocular con cambios de dirección: el objetivo cambia de dirección y velocidad al azar todo el tiempo. El navegador no registra tu mirada y no hay puntuación; toma el resultado como registro de práctica, no como prueba médica.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
