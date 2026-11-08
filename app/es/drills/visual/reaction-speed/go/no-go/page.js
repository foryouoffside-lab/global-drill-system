import ChromaSyncClient from '@/app/drills/visual/reaction-speed/go/no-go/ChromaSyncClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test Go/No-Go online gratis | Control inhibitorio | SkillDrills",
  description: "Test Go/No-Go gratis en el navegador: haz clic rápido en verde y no pulses en rojo. Entrena el control inhibitorio y cuenta errores de comisión y omisión. No es un diagnóstico.",
  keywords: [
    "control inhibitorio",
    "test go no go",
    "test Go/No-Go online",
    "tarea Go/No-Go",
    "control inhibitorio test",
    "inhibición de respuesta",
    "juego de impulsividad",
    "errores de comisión y omisión"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test Go/No-Go online gratis | Control inhibitorio | SkillDrills",
    description: "Clic en verde, quieto en rojo. Test Go/No-Go gratis en el navegador para practicar el control inhibitorio. No es un diagnóstico.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test Go/No-Go online gratis | Control inhibitorio | SkillDrills",
    description: "Verde: clic. Rojo: no pulses. Test Go/No-Go gratis en el navegador."
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/go/no-go'),
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
    { "@type": "ListItem", "position": 5, "name": "Test Go/No-Go", "item": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Inhibitory_control"],
  "name": "Test Go/No-Go (control inhibitorio)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "description": "Versión para navegador de la tarea Go/No-Go: hacer clic en la señal verde Go y no pulsar en la señal roja No-Go. Cuenta errores de comisión, omisiones y tiempo de reacción. Herramienta de práctica, no una prueba médica.",
  "featureList": [
    "Tiempo de reacción medido en milisegundos con performance.now()",
    "La señal se muestra cada vez menos: de unos 600 ms a un mínimo de 100 ms",
    "Errores de comisión y omisiones contados por separado",
    "Resultados guardados solo en el navegador (LocalStorage)"
  ],
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test Go/No-Go online gratis | Control inhibitorio | SkillDrills",
  "alternateName": "Go/No-Go Pro",
  "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go",
  "dateModified": "2026-11-08",
  "description": "Test Go/No-Go online gratis: clic en verde, quieto en rojo.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador actual compatible con HTML5 Canvas.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Control inhibitorio, menos errores de comisión, comprobar el color antes de pulsar"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Test Go/No-Go (entrenamiento del control inhibitorio)",
  "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go",
  "description": "Juego de navegador: clic en verde, para en rojo.",
  "genre": ["Action", "Brain Game", "Reaction Speed"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo hacer el test Go/No-Go",
  "dateModified": "2026-11-08",
  "description": "La versión para navegador de la tarea Go/No-Go en cuatro pasos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Mira al centro de la pantalla",
      "text": "Mantén la vista en el centro, donde salen los círculos, con el dedo y el ratón relajados.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Señal verde Go: clic al momento",
      "text": "Cuando salga un círculo verde, haz clic o toca antes de que desaparezca (+150 puntos × combo). No funciona con teclado.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Señal roja No-Go: no pulses",
      "text": "Cuando salga un círculo rojo, espera a que desaparezca sin pulsar (+100 puntos). Pulsar sin círculo en pantalla o hacer clic sin parar también cuenta como error.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Comprueba el color aunque vaya más rápido",
      "text": "Con el nivel y el combo, el tiempo en pantalla baja hasta 100 ms. Mantén la costumbre de reconocer el color antes de pulsar.",
      "url": "https://skilldrills.online/es/drills/visual/reaction-speed/go/no-go#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el test Go/No-Go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una tarea en la que respondes rápido a una señal frecuente (Go) y frenas la respuesta ante una señal poco frecuente (No-Go). En psicología se usa para estudiar el control inhibitorio. Esta página es una versión de práctica en el navegador: clic en el círculo verde y nada en el rojo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona el test Go/No-Go?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tras pulsar «Comenzar Entrenamiento», la partida empieza con 45 segundos. Círculo verde en el centro: haz clic o toca. Círculo rojo: espera a que desaparezca. Cada acierto suma 2 segundos (máximo 60). Alrededor del 70 % de las señales son verdes y el 30 % rojas. Solo ratón o pantalla táctil, sin teclado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre error de comisión y omisión?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Un error de comisión es pulsar en el rojo No-Go o cuando no hay ningún círculo. Una omisión es dejar que el círculo verde Go desaparezca sin pulsar. El primero indica cómo frenas; el segundo apunta más a despistes o lentitud."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué pulso en rojo aunque lo veo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Como el verde sale mucho más, pulsar se vuelve un hábito. Según el modelo de Logan y Cowan (1984), un proceso de iniciar y otro de parar compiten en una carrera; la respuesta solo se frena si el de parar llega antes. Cuanto menos dura la señal, menos margen queda para frenar."
      }
    },
    {
      "@type": "Question",
      "name": "¿Sirve para shooters como Valorant o CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comprobar el color antes de pulsar se parece a distinguir aliado de enemigo antes de disparar. Pero la tarea no incluye apuntar, moverse, sonido ni lectura del mapa. No se garantiza ninguna mejora en el juego."
      }
    },
    {
      "@type": "Question",
      "name": "¿Sirve para diagnosticar TDAH o impulsividad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Es un juego de práctica en el navegador, no una prueba médica ni un diagnóstico. El resultado también depende de la pantalla, el ratón, el cansancio y la concentración. Si te preocupa la atención o la impulsividad, consulta con un profesional sanitario."
      }
    },
    {
      "@type": "Question",
      "name": "¿El control inhibitorio mejora con práctica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repetir la misma tarea suele mejorar el resultado en esa tarea. Si eso se traslada a la vida diaria o a otros juegos, la investigación no lo muestra de forma constante y varía según la persona. Compara tus puntuaciones siempre en las mismas condiciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Influye la frecuencia del monitor en el resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Una pantalla de 60 Hz solo muestra un fotograma nuevo cada 16,7 ms, una de 240 Hz cada 4,2 ms, y el ratón y la pantalla táctil también tienen retardo (Woods et al., 2015). Compara tus propios resultados en el mismo dispositivo y navegador."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se envían mis resultados a algún sitio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La puntuación y el historial se guardan en tu navegador (LocalStorage). Si borras los datos del navegador, pueden perderse los resultados anteriores."
      }
    }
  ]
};

const goNoGoGuide = {
  heading: "Practica el control inhibitorio con el test Go/No-Go",
  intro: [
    "En el test Go/No-Go respondes a las señales frecuentes y te contienes ante las poco frecuentes. No basta con pulsar rápido: hay que saber no pulsar en el momento justo. Eso lo diferencia de un test de reacción simple.",
    "En esta versión para navegador aparece en el centro un círculo verde (Go) o rojo (No-Go). Verde: haz clic o toca. Rojo: espera. Pulsar sin círculo o hacer clic sin parar también cuenta como error. Al subir de nivel, la señal dura menos: de unos 600 ms a un mínimo de 100 ms.",
    "La idea de las tareas de elección viene de los estudios de tiempo de reacción de Donders (1868); la carrera entre iniciar y parar la modelaron Logan y Cowan (1984). Aun así, la puntuación de esta página es un resultado de práctica que incluye pantalla, ratón y navegador, no una prueba médica.",
    "La medición usa performance.now() en el navegador. El refresco de la pantalla y el retardo del ratón o del táctil se suman al resultado (Woods et al., 2015), así que compara puntuaciones en el mismo dispositivo. Los datos se quedan en el navegador de este dispositivo."
  ],
  benchmarks: {
    title: "Referencias de práctica para la tasa de errores (escala propia de este drill)",
    headers: ["Nivel", "Tasa de errores", "Puntos y combo", "Cómo leerlo"],
    rows: [
      ["Avanzado", "menos del 2,0 %", "16.000+ pts / combo 30+", "Comprueba el color aunque la señal dure muy poco"],
      ["Sólido", "2,0–4,9 %", "11.000–15.999 pts / combo 20+", "Pocos errores; puedes subir el ritmo poco a poco"],
      ["Medio", "5,0–9,9 %", "6.500–10.999 pts / combo 12+", "A veces pulsa en rojo cuando sube el ritmo"],
      ["En progreso", "10,0–18,0 %", "3.000–6.499 pts / combo 6+", "Pulsa antes de ver el color; prioriza la precisión"],
      ["Inicial", "más del 18,0 %", "menos de 3.000 pts / combo < 6", "Primero aprende a parar en rojo y a no pulsar sin parar"]
    ],
    note: "Esta tabla es una escala de práctica de SkillDrills, no una norma científica ni una media por edad. El cansancio, la concentración y la pantalla cambian los resultados."
  },
  techniques: {
    title: "Consejos para cometer menos errores en el test Go/No-Go",
    items: [
      {
        name: "Mira el color y luego pulsa",
        desc: "La señal es el color, no la aparición del círculo. Si pulsas al primer destello, acabarás pulsando también en rojo.",
        tips: "Al principio acepta ir un poco más lento y pulsa solo cuando tengas claro que es verde. Acelera cuando bajen los errores."
      },
      {
        name: "Dedo relajado",
        desc: "Esperar con el botón medio pulsado impide frenar a tiempo.",
        tips: "Apoya el dedo suavemente en el ratón o la pantalla, sin presionar."
      },
      {
        name: "No pulses al ritmo",
        desc: "Una racha de verdes crea un ritmo de clic, y los errores suben cuando aparece el rojo (Robertson et al., 1997).",
        tips: "Trata cada señal como nueva. No pulses sin círculo; si haces clic sin parar, el círculo deja de aparecer."
      },
      {
        name: "Mismas condiciones",
        desc: "Con señales muy cortas, el refresco de la pantalla y el retardo del ratón se notan en la puntuación (Woods et al., 2015).",
        tips: "Mismo monitor, navegador, ratón y hora del día; luego compara tasa de errores y media."
      }
    ]
  },
  steps: [
    "Pulsa «Comenzar Entrenamiento»: la partida empieza con 45 segundos.",
    "Mira al centro de la pantalla.",
    "Círculo verde Go: haz clic o toca antes de que desaparezca.",
    "Círculo rojo No-Go: espera a que desaparezca sin pulsar.",
    "Al terminar, revisa la tasa de errores, la reacción media y el nivel alcanzado."
  ],
  audience: "Para quien quiera probar el test Go/No-Go online y practicar, además de la velocidad, la capacidad de no pulsar: jugadores, deportistas y curiosos. No sirve para una evaluación médica.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('donders1868', 'logan1984', 'robertson1997', 'woods2015'),
  related: [
    { href: "/es/drills/visual/reaction-speed/light-reaction", label: "Test de reacción" },
    { href: "/es/drills/reaction-speed", label: "Test de reflejos" },
    { href: "/es/drills/visual/depth-perception/distance-judgment", label: "Juicio de Distancia y Profundidad" },
    { href: "/es/drills/visual/tracking-accuracy/moving-target", label: "Intercepción de Blanco Móvil" },
    { href: "/es/drills/visual/tracking-accuracy/multiple-targets", label: "Seguimiento de Múltiples Objetos" },
    { href: "/es/drills/visual/visual-recognition/entropic-grid", label: "Búsqueda en Rejilla Entrópica" }
  ]
};

export default function ChromaSyncPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <ChromaSyncClient copy={{ title: "Test Go/No-Go (control inhibitorio)", subtitle: "Círculo verde: clic. Círculo rojo: no pulses. Gratis en el navegador." }} />
      <DrillGuide guide={goNoGoGuide} />
      <RelatedDrills />
    </>
  );
}
