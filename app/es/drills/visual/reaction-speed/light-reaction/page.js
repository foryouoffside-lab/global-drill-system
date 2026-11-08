import StrobeLatencyClient from '@/app/drills/visual/reaction-speed/light-reaction/StrobeLatencyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Reacción Online: Mide tus Reflejos en ms",
  description: "Test de reacción gratis: haz clic cuando se encienda la luz y mide tu tiempo de reacción en milisegundos. Compáralo con el promedio; no es prueba médica.",
  keywords: [
    "test de reacción",
    "test de reacción online",
    "test de reflejos",
    "test de reflejos online",
    "tiempo de reacción",
    "tiempo de reacción promedio",
    "test de tiempo de reacción",
    "test de velocidad de reacción",
    "test de reacción visual",
    "test de reflejos f1",
    "test de reacción valorant",
    "tiempo de reacción en milisegundos"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Reacción Online: Mide tus Reflejos en ms",
    description: "Test de reacción gratis: espera la luz, haz clic y mira tu tiempo de reacción en milisegundos, con media y constancia.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Reacción Online: Mide tus Reflejos en ms",
    description: "Test de reflejos online: reacciona a una luz imprevisible y compara tu tiempo de reacción entre sesiones.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/light-reaction'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Catálogo de Drills", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Entrenamiento Visual", "item": "https://skilldrills.online/es/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Velocidad de Reacción", "item": "https://skilldrills.online/es/drills/visual/reaction-speed" },
    { "@type": "ListItem", "position": 5, "name": "Test de Reacción a la Luz", "item": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
  "name": "Test de Reacción a la Luz (Tiempo de Reacción Simple)",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "description": "Prueba neurocognitiva de alta precisión para medir el tiempo de reacción visual simple (SRT) y la velocidad de respuesta neuromuscular.",
  "featureList": [
    "Medición en milisegundos de latencia con la API performance.now()",
    "Intervalos aleatorios entre 300 ms y 2.500 ms para anular la anticipación",
    "Filtro anti-spam para penalizar clics especulativos previos al destello",
    "Almacenamiento 100% local en tu navegador sin telemetría"
  ],
  "dateModified": "2026-09-05"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Reacción a la Luz — Reflejos Visuales | SkillDrills",
  "alternateName": "Light Reaction Pro",
  "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction",
  "dateModified": "2026-09-05",
  "description": "Test online gratis de reflejos visuales. Haz clic tan pronto como el círculo central parpadee en blanco brillante.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador web compatible con HTML5 Canvas.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Tiempo de Reacción Visual Simple, Latencia Óptico-Motora, Reflejos Motores, Ley de Piéron, Atención Foveal"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Drill de Reflejo de Reacción a la Luz",
  "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction",
  "description": "Juego de velocidad de reacción para entrenar la respuesta neuromuscular ante destellos ópticos.",
  "genre": ["Action", "Reaction Speed", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Realizar el Test de Reacción a la Luz",
  "dateModified": "2026-09-05",
  "description": "Protocolo de 4 fases para evaluar y desarrollar el tiempo de reacción visual simple ante estímulos luminosos estroboscópicos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Fija la Mirada en el Círculo Central",
      "text": "Centra la vista en el objetivo oscuro central de la pantalla, relajando la mano sin generar tensión muscular innecesaria.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Espera el Destello Blanco Imprevisible",
      "text": "Aguarda con serenidad a lo largo del intervalo aleatorio de 300 ms a 2.500 ms sin anticipar el clic.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Haz Clic Inmediatamente al Encenderse la Luz",
      "text": "Haz clic o toca la pantalla en el preciso instante en que el blanco destelle en blanco intenso (+150 PTS × Multiplicador).",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Evita Clics Especulativos Precipitados",
      "text": "Pulsar antes del encendido activa un bloqueo anti-spam de 1,2 segundos, asegurando que la marca sea un reflejo auténtico.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/light-reaction#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-07",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un buen resultado en el test de reacción?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un buen resultado es el que puedes repetir. En un test de reacción online, la pantalla, el navegador y el ratón suman retraso a tu tiempo real, así que compara tus medias en el mismo dispositivo en lugar de un número suelto. Los tiempos bajos con clics anticipados no cuentan: el test bloquea los clics antes de la luz."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tiempo de reacción promedio de una persona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay una cifra única: cambia con la edad, la atención, el tipo de estímulo y el equipo. Para una reacción simple a una luz, la revisión de Kosinski (2008) cita medias cercanas a 190 ms en estudiantes universitarios, y la reacción a sonidos suele ser algo más rápida. Pasada la juventud, el tiempo de reacción tiende a aumentar poco a poco."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona este test de reflejos online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fija la mirada en el círculo central y haz clic, o toca la pantalla, en cuanto se ilumine en blanco. La espera antes de la luz es aleatoria para que no puedas adivinar el momento. El navegador cronometra cada respuesta en milisegundos y al final ves tu tiempo medio de reacción, el combo y la nota de precisión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Sirve como test de reacción para Valorant o juegos FPS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mide la reacción simple a una señal luminosa, que es solo una parte de un duelo. En Valorant, CS2 y otros FPS también cuentan la lectura de la partida, la colocación de la mira y la precisión del ratón. Úsalo como referencia y los ejercicios de puntería del sitio para el apuntado; no garantiza subir de rango."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es igual que el test de reflejos de la F1?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No del todo. El reto de salida de la F1 enciende cinco luces rojas y reaccionas cuando se apagan. Aquí la señal es un único destello blanco tras una espera aleatoria. Ambos miden reacción simple ante un estímulo visual, pero las cifras no son comparables entre sí ni con los tiempos de salida de los pilotos."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo influye la tasa de refresco del monitor en el resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un monitor de 60 Hz muestra un fotograma nuevo cada 16,7 ms, así que la luz puede aparecer hasta ese tiempo después de la señal. A 144 Hz y 240 Hz el intervalo entre fotogramas baja a unos 6,9 ms y 4,2 ms. Un ratón con sondeo de 1.000 Hz envía el clic en intervalos de 1 ms."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué causa el aviso de clics repetitivos (anti-spam) en esta prueba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pulsar antes de la aparición del destello o cliquear a ritmo acelerado desencadena un enfriamiento de 1,2 segundos. Esto ayuda a que la métrica refleje una reacción visual y no clics al azar."
      }
    },
    {
      "@type": "Question",
      "name": "¿El sueño, el cansancio y la cafeína cambian el tiempo de reacción?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Dormir poco, la fatiga y las distracciones suelen hacer las respuestas más lentas e irregulares, y la cafeína puede tener un efecto pequeño y variable. Para comparar sesiones de forma justa, haz el test a una hora parecida, descansado y con la misma pantalla, el mismo ratón y el mismo navegador."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se pueden mejorar los reflejos con entrenamiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La práctica suele hacer los tiempos más constantes y reducir los clics anticipados, porque aprendes a mantener la atención y la mano preparadas. Las mejoras en la reacción simple suelen ser pequeñas; el descanso y un equipo con menos latencia a menudo cambian más la cifra. La transferencia a juegos o deportes no está garantizada."
      }
    },
    {
      "@type": "Question",
      "name": "¿El test de reacción es gratis? ¿Es una prueba médica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es gratis, funciona sin registro y los resultados se guardan en el almacenamiento local de tu navegador. No es una prueba médica ni una evaluación neurológica: es una herramienta de práctica. Si notas lentitud o falta de coordinación fuera de lo habitual, consulta con un profesional sanitario."
      }
    }
  ]
};

const lightReactionGuide = {
  heading: "Test de reflejos online: entiende tu tiempo de reacción visual",
  intro: [
    "Este test de reacción online mide tu tiempo de reacción visual: espera a que el círculo central se ilumine en blanco y haz clic lo más rápido que puedas. La espera cambia en cada ronda, así que adivinar no sirve. Es el mismo tipo de test de reacción simple que se usa en estudios de cronometría mental, pero aquí el resultado también incluye el retraso de la pantalla, el navegador y el ratón.",
    "La respuesta neuromuscular encadena cuatro fases fisiológicas cardinales: (1) fototransducción retiniana (~20–40 ms por isomerización de la rodopsina), (2) propagación aferente por el tracto óptico hacia el córtex visual primario V1 (~30–50 ms), (3) preparación perceptiva y motriz en áreas parietales y motoras suplementarias (~50–80 ms), y (4) descarga eferente por el haz corticoespinal para contraer los flexores digitales (~30–50 ms) (Kosinski, 2008; Jain et al., 2015; Shelton & Kumar, 2010).",
    "Conforme a la Ley de Piéron (1952; Pins & Bonnet, 1996), la latencia decrece de modo hiperbólico al aumentar la luminancia sobre el fondo. Este drill explota ese mecanismo proyectando un destello blanco estroboscópico de gran intensidad sobre un lienzo oscuro absorbente, generando una despolarización ganglionar inmediata. Los estudios de atención encubierta (Posner, 1980) y gaming (Dye et al., 2009) sugieren que la atención dirigida puede acortar la preparación de la respuesta.",
    "Metodología y Estándares de Medición: Los estímulos y las pulsaciones se cronometran con la API de alta resolución performance.now(). La cuantización de fotogramas de la pantalla y el sondeo USB (Woods et al., 2015) siguen sumando unos milisegundos al resultado, así que compara sesiones con el mismo equipo. Los datos se quedan en tu navegador."
  ],
  benchmarks: {
    title: "Referencia del tiempo de reacción visual en navegador",
    headers: ["Banda de Rendimiento", "Latencia Media (ms)", "Puntuación y Umbral Combo", "Perfil Neuromuscular y de Reflejo"],
    rows: [
      ["Tier 1: Reflejo Neural Apex", "< 180 ms", "15.000+ PTS | Combo 28x+", "Reacción visual muy rápida; el resultado depende del dispositivo y de la anticipación."],
      ["Tier 2: Reflejo Visual Superior", "180 – 219 ms", "10.500 – 14.999 PTS | Combo 18x+", "Coordinación óptico-motora excelente; latencias regulares por debajo de 220 ms con escasa dispersión en sesiones largas."],
      ["Tier 3: Rendimiento Adulto Estándar", "220 – 259 ms", "6.000 – 10.499 PTS | Combo 10x+", "Promedio de adultos saludables; respuesta visual espontánea correcta con oscilaciones normales derivadas del cansancio."],
      ["Tier 4: Retardo Moderado de Respuesta", "260 – 319 ms", "2.500 – 5.999 PTS | Combo 5x+", "Procesamiento central dilatado; sensible a la fatiga visual, lapsos de vigilia o pantallas lentas de 60 Hz."],
      ["Tier 5: Latencia Extendida / Base", "> 320 ms", "< 2.500 PTS | Combo < 5x", "Retraso sensorial pronunciado; sobrecarga en la interpretación del estímulo o equipos sin calibrar de baja frecuencia."]
    ],
    note: "Estos baremos se fundamentan en la cronometría clásica y la psicofísica del tiempo de reacción (Kosinski, 2008; Woods et al., 2015; Pins & Bonnet, 1996; Jain et al., 2015). Las marcas varían por biorritmos circadianos, cafeína y características de la pantalla."
  },
  techniques: {
    title: "Cómo entrenar reflejos sin confundir la latencia del dispositivo",
    items: [
      {
        name: "Preactivación Foveal y Fijación Central",
        desc: "Mantener la fóvea visual inmóvil en el centro evita el retraso extra de los saltos atencionales periféricos (Posner, 1980).",
        tips: "Fija la mirada directamente en el círculo central oscuro; no dejes que los ojos recorran el marcador o los bordes de la pantalla."
      },
      {
        name: "Optimización de Contraste y Activación Retiniana",
        desc: "Un contraste alto estimula la frecuencia de disparo de las células ganglionares retinianas, minimizando la demora (Pins & Bonnet, 1996).",
        tips: "Atenúa la luz ambiental para dilatar ligeramente las pupilas, aumentando el impacto fisiológico del destello blanco."
      },
      {
        name: "Pretensión Muscular Digital Isométrica",
        desc: "La distancia de recorrido y el retardo del switch agregan latencia mecánica si los dedos se mantienen en el aire (Woods et al., 2015).",
        tips: "Apoya la yema del dedo sobre el interruptor del ratón con una suave pretensión relajada, listo para accionar sin holgura."
      },
      {
        name: "Calibración y Pantallas de Alta Frecuencia",
        desc: "Un monitor de 60 Hz introduce hasta 16,7 ms de retardo, mientras que a 240 Hz este lapso baja a unos 4,2 ms (Woods et al., 2015).",
        tips: "Utiliza monitores de 144 Hz o 240 Hz con ratones a 1.000 Hz de sondeo para medir reflejos puros sin barreras técnicas."
      }
    ]
  },
  steps: [
    "Haz clic en Iniciar Drill para arrancar la sesión de 45 segundos de reacción a la luz.",
    "Fija la mirada en el círculo oscuro situado en el centro de la pantalla.",
    "Aguarda con paciencia a lo largo de los intervalos aleatorios (300 ms a 2.500 ms) sin apresurarte.",
    "Haz clic o toca la pantalla en cuanto el objetivo brille en blanco intenso (+150 PTS × Multiplicador).",
    "Consulta al concluir tu latencia media, nivel máximo y categoría de precisión lograda."
  ],
  audience: "Competidores de esports tácticos, atletas de combate, velocistas de velocidad, pilotos y cualquier persona interesada en afinar la rapidez de sus reflejos ópticos.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('woods2015', 'kosinski2008', 'pins1996', 'posner1980', 'jain2015', 'dye2009'),
  related: [
    { href: "/es/drills/visual/reaction-speed/go/no-go", label: "Test Go / No-Go de Control de Impulsos" },
    { href: "/es/drills/visual/depth-perception/distance-judgment", label: "Juicio de Distancia y Profundidad" },
    { href: "/es/drills/visual/tracking-accuracy/moving-target", label: "Intercepción de Blanco Móvil" },
    { href: "/es/drills/visual/tracking-accuracy/multiple-targets", label: "Seguimiento de Múltiples Objetos" },
    { href: "/es/drills/visual/tracking-accuracy/pursuit-tracker", label: "Seguimiento Ocular Suave" },
    { href: "/es/drills/visual/visual-recognition/entropic-grid", label: "Búsqueda en Rejilla Entrópica" }
  ]
};

export default function StrobeLatencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <StrobeLatencyClient copy={{ title: "Test de Reacción Online (Test de Reflejos)", startCardTitle: "Test de reacción", startCardSubtitle: "Haz clic cuando se encienda la luz y mira tu tiempo en ms" }} />
      <DrillGuide guide={lightReactionGuide} />
      <RelatedDrills />
    </>
  );
}
