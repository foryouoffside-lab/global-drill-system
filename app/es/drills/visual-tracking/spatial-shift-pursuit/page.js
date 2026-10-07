import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Seguimiento visual con cambio espacial | SkillDrills",
  description: "Sigue un objetivo mientras cambia el campo visual. Ejercicio gratuito en navegador con reacción, readquisición y error de posición.",
  keywords: [
    "cambio espacial seguimiento visual",
    "remapeo visual ejercicio",
    "pantalla temblando puntería",
    "seguir objetivo con campo visual móvil",
    "atención espacial entrenamiento",
    "readquisición visual ejercicio",
    "cambio de marco visual",
    "seguimiento con pantalla en movimiento",
    "coordinación ojo objetivo",
    "error de posición visual",
    "seguimiento visual de objetivos",
    "entrenamiento de puntería"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/visual-tracking/spatial-shift-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit'),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Seguimiento visual con cambio espacial | SkillDrills",
    description: "Sigue un objetivo mientras cambia el campo visual. Ejercicio gratuito en navegador con reacción, readquisición y error de posición.",
    url: "https://skilldrills.online/es/drills/visual-tracking/spatial-shift-pursuit",
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Seguimiento visual con cambio espacial | SkillDrills",
    description: "Sigue un objetivo mientras cambia el campo visual. Ejercicio gratuito en navegador con reacción, readquisición y error de posición.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://skilldrills.online/es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Ejercicios",
      "item": "https://skilldrills.online/es/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Rastreo Visual",
      "item": "https://skilldrills.online/es/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Seguimiento con Cambio Espacial",
      "item": "https://skilldrills.online/es/drills/visual-tracking/spatial-shift-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Seguimiento con Cambio Espacial",
  "operatingSystem": "Navegador Web",
  "applicationCategory": "HealthApplication",
  "offers": {
    "@type": "Offer",
    "price": "0.00",
    "priceCurrency": "USD"
  },
  "description": "Herramienta de práctica visual para observar la recuperación de la mirada ante cambios del marco espacial.",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Ejercicio de Seguimiento con Cambio Espacial",
  "url": "https://skilldrills.online/es/drills/visual-tracking/spatial-shift-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Todos los navegadores modernos",
  "browserRequirements": "Requiere soporte para JavaScript y HTML5 Canvas",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Seguimiento visual con cambio espacial",
  "description": "Reto de coordinacion oculomotora donde el usuario preserva la fijacion visual ante desplazamientos y rotaciones bruscas del entorno.",
  "genre": ["Entrenamiento Visual", "Seguimiento Ocular", "Entrenamiento de Reflejos"],
  "playMode": "SinglePlayer",
  "gamePlatform": "Navegador Web",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Entrenar el Seguimiento ante Cambios Espaciales",
  "description": "Guia paso a paso para dominar la adaptacion de coordenadas espaciales y la recuperacion foveal instantanea.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fije el Seguimiento Inicial",
      "text": "Sitatese a 50-70 cm de la pantalla y sincronice la mirada suave con el blanco a lo largo de su rumbo de inicio."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Detecte la Traslacion Global",
      "text": "Cuando el marco espacial sufra un giro o salto repentino, procese el vector de cambio global sin buscar a tientas."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ejecute una Sacada Balística Precisa",
      "text": "Lance un salto ocular resuelto hacia las nuevas coordenadas calculadas sin vacilaciones intermedias."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Reanude el Seguimiento Suave",
      "text": "Acople el frenado de la sacada directamente con la velocidad angular del blanco para garantizar fluidez visual."
    }
  ],
  "dateModified": "2026-09-20"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que es el ejercicio Spatial Shift Pursuit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Spatial Shift Pursuit entrena la adaptabilidad oculomotora al obligar a los ojos a ajustarse a variaciones y giros bruscos del marco de referencia, optimizando la velocidad de reacquisicion (Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Que sucede neurologicamente durante un salto espacial brusco?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cuando el entorno se desplaza, la correspondencia retinotopica se pierde momentaneamente. El cerebro calcula una transformacion rapida de coordenadas para devolver la mirada al objetivo (Robinson, 1965)."
      }
    },
    {
      "@type": "Question",
      "name": "Cual es la funcion de la corteza parietal posterior (PPC)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La PPC fusiona la informacion retiniana con las seales motoras eferentes para traducir coordenadas centradas en el ojo a marcos de referencia espaciales estables (Findlay & Gilchrist, 1999)."
      }
    },
    {
      "@type": "Question",
      "name": "Que es la sacada balistica de recuperacion?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un movimiento ocular a velocidades de hasta 500 grados por segundo que acorta de forma instantanea la distancia hacia la nueva posicion del blanco antes de retomar el seguimiento continuo (Rashbass, 1961)."
      }
    },
    {
      "@type": "Question",
      "name": "Como beneficia este ejercicio la punteria en juegos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En situaciones de intenso retroceso, explosiones o sacudidas de camara, permite a los jugadores volver a centrar la mira en los oponentes de forma casi instantanea."
      }
    },
    {
      "@type": "Question",
      "name": "Que aplicacion tiene en deportes dinamicos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En baloncesto, futbol o deportes de motor, el cuerpo y la cabeza cambian de orientacion velozmente mientras se rastrea una pelota o un rival en movimiento."
      }
    },
    {
      "@type": "Question",
      "name": "Que es el handshake o acople post-sacadico?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Consiste en enlazar la deceleracion del salto ocular directamente con el vector de velocidad del blanco, evitando bloqueos y pausas visuales intermedias."
      }
    },
    {
      "@type": "Question",
      "name": "Cual es el volumen optimo de entrenamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Se recomiendan de 4 a 6 tandas de 60 segundos por sesion (5 a 8 minutos diarios). Estimulos intensos de corta duracion facilitan la neuroplasticidad sin agotar la vista."
      }
    },
    {
      "@type": "Question",
      "name": "Es gratuita esta aplicacion de entrenamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si, SkillDrills ofrece esta plataforma interactiva libre de costes y sin requerir descargas ni registro previo."
      }
    },
    {
      "@type": "Question",
      "name": "Afecta la tasa de refresco del monitor a la precision?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los monitores de 144Hz o superiores proporcionan una transicion grafica limpia sin estelas, permitiendo calcular el desplazamiento espacial con mayor exactitud (Woods et al., 2015)."
      }
    }
  ],
  "dateModified": "2026-09-20"
};

const guideProps = {
  heading: "Bases Científicas del Seguimiento con Cambio Espacial y Control Oculomotor",
  intro: [
    "En situaciones cotidianas y deportivas de alto dinamismo, el seguimiento visual rara vez se desarrolla sobre fondos estaticos y previsibles. Ya sea durante aceleraciones en pista irregular, maniobras en vehiculos veloces o enfrentamientos intensos en videojuegos de disparos caracterizados por sacudidas de camara y giros fulgurantes, el sistema de referencia espacial del observador puede desplazarse o rotar de forma instantanea (Krauzlis, 2004; Robinson, 1965). Preservar la fovea centrada en el blanco bajo tales condiciones exige una notable agilidad de adaptacion.",
    "Los estudios clasicos de Findlay & Gilchrist (1999) y Kahlon & Lisberger (1996) probaron que los impulsos visuales se codifican inicialmente en planos retinotopicos. Al desplazarse subitamente el marco general, este mapa colapsa. La corteza parietal posterior (PPC) asume el rol de fusionar las seales retinianas con copias eferentes motoras, traduciendo de inmediato los datos a coordenadas estables de referencia espacial.",
    "Bajo este nuevo esquema perceptivo, el sistema nervioso pone en marcha una accion coordinada de dos tiempos: primero, una sacada balistica de alta velocidad salda la distancia hasta la nueva ubicacion del objetivo. Justo al culminar el salto, los centros motores oculares enlazan suavemente con el nuevo vector de avance, manteniendo el seguimiento continuo sin titubeos (Rashbass, 1961)."
  ],
  benchmarks: {
    title: "Baremos de Rendimiento en Cambio Espacial y Recuperación de Coordenadas",
    headers: ["Nivel de Rendimiento", "Tiempo de Re-Centrado (ms)", "Precisión de Seguimiento (%)", "Estabilidad Post-Sacádica", "Perfil Adaptativo"],
    rows: [
      ["Élite (Esports / Pilotos)", "< 220 ms", "> 95%", "> 96% (Fijación Inmediata)", "Remapeo parietal perfecto y transición instantánea de sacada a seguimiento continuo."],
      ["Avanzado (Competitivo)", "220 – 280 ms", "88% – 94%", "90% – 95%", "Elevada flexibilidad espacial con rápida re-adquisición del blanco y mínimo desvío."],
      ["Competente (Adulto Sano)", "281 – 360 ms", "78% – 87%", "80% – 89%", "Recuperación constante con leve vacilación ante giros combinados."],
      ["En Desarrollo (Latencia)", "361 – 450 ms", "65% – 77%", "68% – 79%", "Desorientación apreciable en desplazamientos bruscos que exige sacadas secundarias."],
      ["Principiante (Ajuste Motor)", "> 450 ms", "< 65%", "< 68%", "Pérdida del marco de referencia y rastreo puramente reactivo."]
    ],
    note: "※ Mediciones registradas en monitores 1080p a 50–70 cm con velocidades de 1.0x a 1.5x bajo saltos espaciales aleatorios. Evaluado segun tiempo de re-centrado y firmeza post-sacadica."
  },
  techniques: {
    title: "Cuatro Técnicas Clave para Dominar el Seguimiento con Cambio Espacial",
    items: [
      {
        name: "Remapeo Parietal de Coordenadas",
        desc: "Durante el salto espacial, no persiga exclusivamente el punto aislado. Asimile el vector global del entorno para que la corteza parietal reconfigure el mapa de posicion de inmediato.",
        tips: "Capte conscientemente hacia donde se ha movido todo el plano visual."
      },
      {
        name: "Re-Centrado Sacádico Balístico",
        desc: "Una vez calculada la nueva orientacion, efectue un salto ocular nitido y decidido. La indecision provoca micro-saltos correctores que restan tiempo de reaccion.",
        tips: "Dirija el centro de su mirada como un latigazo directo a las nuevas coordenadas."
      },
      {
        name: "Acople Post-Sacádico Fluido",
        desc: "No detenga bruscamente los musculos de los ojos al tocar el blanco. Integre de forma continua el frenado en la direccion de marcha del objetivo.",
        tips: "Aterrice en la linea de avance como un patinador deslizandose con impulso."
      },
      {
        name: "Anclaje Rotacional Visual",
        desc: "Si el cambio incluye rotaciones angulares, conserve la estabilidad fijando mentalmente el centro del monitor como eje neutro permanente.",
        tips: "Mantenga la referencia del centro de pantalla como eje orientador."
      }
    ]
  },
  steps: [
    { title: "Fija el objetivo inicial", text: "Colócate a una distancia cómoda y sigue el objetivo sin mover la cabeza." },
    { title: "Observa el cambio del campo", text: "Cuando la pantalla se desplace, identifica primero la dirección del movimiento del conjunto." },
    { title: "Recupera el objetivo", text: "Lleva la mirada directamente a la nueva posición y observa el tiempo de readquisición." },
    { title: "Reanuda el seguimiento", text: "Al encontrarlo de nuevo, sigue su trayectoria y compara precisión y error de posición." }
  ],
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular lento y continuo" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Seguimiento con cambios de dirección" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimiento de objetivos evasivos" },
    { href: "/es/drills/visual-tracking/ghosting-suppress-pursuit", label: "Supresión de imágenes fantasma" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Ejercicio ocular en forma de ocho" },
    { href: "/es/drills/visual-tracking/sine-wave-pursuit", label: "Seguimiento en onda sinusoidal" }
  ]
};

export default function SpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{ title: "Seguimiento visual con cambio espacial", subtitle: "Sigue un objetivo mientras cambia el campo visual" }} />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
