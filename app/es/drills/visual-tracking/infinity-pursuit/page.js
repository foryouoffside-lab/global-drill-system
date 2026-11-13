import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit';
const name = "Ejercicio Ocular en Figura Ocho";
const title = `${name} | SkillDrills`;
const description = "Ejercicio ocular en figura ocho en el navegador: sigue con la mirada un objetivo que recorre un ocho tumbado (lemniscata) cruzando el centro. Gratis.";

export const metadata = {
  title,
  description,
  keywords: ["ejercicio ocular en figura ocho","ejercicio ocular en ocho","ocho tumbado ojos","lemniscata","seguir un objetivo con la mirada","ejercicio para los ojos en el navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/infinity-pursuit') },
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
  name: "Ejercicio Ocular en Figura Ocho (aplicación web)",
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
  name: "Cómo hacer: Ejercicio Ocular en Figura Ocho",
  description: "Ejercicio Ocular en Figura Ocho en cuatro pasos sencillos.",
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
    "name": "Atención al centro",
    "text": "Sigue en el objetivo sin cortes cuando cruce el centro."
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
    "q": "¿Qué es el ejercicio ocular en figura ocho?",
    "a": "Un ejercicio en el navegador en el que sigues con los ojos un objetivo que recorre un ocho tumbado. Duración (30 a 120 segundos), velocidad, tamaño y línea son ajustables. El resultado se basa en la posición del puntero."
  },
  {
    "q": "¿Por qué un ocho tumbado?",
    "a": "El ocho es una trayectoria continua con partes horizontales y verticales que se cruzan en el centro. Al no haber saltos de posición, es fácil comparar sesiones con los mismos ajustes."
  },
  {
    "q": "¿Mide el movimiento de mis ojos?",
    "a": "No. El navegador no ve tu mirada; solo conoce la posición dibujada del objetivo, los ajustes y el puntero. El cursor es solo una ayuda y no demuestra hacia dónde miras. Al final solo se resume la distancia del puntero al objetivo."
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
  "heading": "Guía: Ejercicio Ocular en Figura Ocho",
  "intro": [
    "En el ejercicio ocular en figura ocho, el objetivo recorre una y otra vez un ocho tumbado (lemniscata). La trayectoria combina movimientos horizontales y verticales y cruza el centro en cada vuelta, así que practicas mantener la mirada en el objetivo sin cortes al pasar por el medio (Barnes, 2008). Ocultar la línea o activar la velocidad aleatoria hace la vuelta más difícil de anticipar.",
    "El navegador conoce la posición dibujada del objetivo, tus ajustes y el puntero, no hacia dónde miran tus ojos. Al final se muestra el tiempo con el puntero sobre el objetivo y su distancia media al centro, sin nota. El resultado es un registro de práctica repetible, basado en la posición del puntero.",
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
        "Seguir en el objetivo al cruzar el centro"
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
        "name": "Cruza el centro sin perder el objetivo",
        "desc": "En el cruce la mirada tiende a detenerse o saltar. Mantén el centro del objetivo a la vista y pasa con suavidad.",
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
  "audience": "Quien quiera probar el ejercicio «Ejercicio Ocular en Figura Ocho» en el navegador y practicar de forma ligera el seguimiento de un objetivo en movimiento."
},
  faqs,
  sources: pickSources('robinson1965', 'leigh2015', 'barnes2008', 'krauzlis2004', 'woods2015'),
  related: [
  {
    "href": "/es/drills/visual-tracking/constant-slow-pursuit",
    "label": "Ejercicio de Seguimiento Lento Constante"
  },
  {
    "href": "/es/drills/visual-tracking/directional-chaos-pursuit",
    "label": "Seguimiento ocular con cambios de dirección"
  },
  {
    "href": "/es/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Objetivo que Cambia de Dirección sin Aviso"
  },
  {
    "href": "/es/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "Seguimiento con Imágenes Fantasma"
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
      <InfinityPursuitClient
        copy={{
          title: name,
          subtitle: "Seguir el objetivo en un ocho tumbado",
          description: "Ejercicio ocular en figura ocho: sigue un objetivo en un ocho tumbado que cruza el centro. El navegador no registra tu mirada, solo la distancia del puntero al objetivo; toma el resultado como registro de práctica basado en el puntero.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
