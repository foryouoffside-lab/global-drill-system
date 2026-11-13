import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Símbolos y Dígitos Online Gratis | SkillDrills",
  description: "Test gratuito de símbolos y dígitos: practica el emparejamiento símbolo-dígito y la velocidad de procesamiento. Inspirado en SDMT.",
  keywords: ["test de símbolos y dígitos", "SDMT online", "test sdmt online", "sdmt test de símbolos y dígitos", "velocidad de procesamiento", "búsqueda visual"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Símbolos y Dígitos Online Gratis | SkillDrills",
    description: "Test gratuito de símbolos y dígitos: practica el emparejamiento símbolo-dígito y la velocidad de procesamiento. Inspirado en SDMT.",
    type: 'article',
    url: 'https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test de Símbolos y Dígitos Online Gratis | SkillDrills",
    description: "Test gratuito de símbolos y dígitos: practica el emparejamiento símbolo-dígito y la velocidad de procesamiento. Inspirado en SDMT.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
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
      "name": "Cognitivo",
      "item": "https://skilldrills.online/es/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Test SDMT de Símbolos",
      "item": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Test SDMT – Símbolos y Dígitos",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Test SDMT y emparejamiento de símbolos y dígitos online gratis: Evalúa tu velocidad de procesamiento cognitivo, rastreo visual y memoria de trabajo asociativa.",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test SDMT Online",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requiere un navegador moderno con soporte JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Juego de Asociación de Símbolos y Dígitos",
  "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching",
  "description": "Test SDMT y emparejamiento de símbolos y dígitos online gratis: Evalúa tu velocidad de procesamiento cognitivo, rastreo visual y memoria de trabajo asociativa.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-11-12",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es el test SDMT (Symbol Digit Modalities Test)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una prueba creada por Aaron Smith (1973) en la que se asocian símbolos a dígitos con ayuda de una clave. Este ejercicio usa el mismo formato, pero no es el SDMT."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre el test SDMT y el DSST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En el DSST (Wechsler) se escribe el símbolo de cada dígito. En el SDMT se dice el dígito de cada símbolo. Este ejercicio sigue el SDMT: ves el símbolo y pulsas el dígito."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funciona este test de símbolos y dígitos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La clave superior muestra seis símbolos con los dígitos 1 a 6. Cuando aparece un símbolo en el centro, pulsa su dígito. La clave cambia en cada sesión y se mantiene fija durante la ronda."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo funcionan el tiempo y las penalizaciones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La ronda empieza con 45 segundos. Cada acierto suma 2 segundos (hasta 60). Un dígito incorrecto, o un símbolo que caduca (con Target Timeouts activado), resta 1 segundo y reinicia el combo. La ronda termina al llegar a 0."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se calculan los puntos y el nivel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada acierto da 100 puntos multiplicados por el combo y el nivel. Al subir la puntuación sube el nivel y se acorta el tiempo para responder cada símbolo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué muestra el resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puntos, precisión, aciertos, errores, nivel máximo y una nota de F a S+ frente a una referencia fija de SkillDrills. No es comparable con baremos del SDMT ni con el CI."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo leo mi resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al final de la partida ves puntuación, precisión, aciertos, errores, nivel máximo y una nota de F a S+. Compara estos valores con tus propias partidas anteriores en el mismo dispositivo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo mejorar la puntuación?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Memoriza la clave en los primeros segundos, mantén la mirada cerca de la clave y prioriza la precisión, porque cada error cuesta 1 segundo y el combo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Entrenar me hace procesar más rápido?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tu puntuación en esta tarea suele subir con la práctica. No hay garantía de que eso acelere otras tareas cotidianas."
      }
    },
    {
      "@type": "Question",
      "name": "¿Este test de símbolos y dígitos es totalmente gratuito?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, es gratis, directamente en el navegador, sin descargas ni registro, en ordenador o móvil."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Realizar el Test SDMT de Símbolos y Dígitos",
  "description": "Test SDMT y emparejamiento de símbolos y dígitos online gratis: Evalúa tu velocidad de procesamiento cognitivo, rastreo visual y memoria de trabajo asociativa.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Revisa la Clave de Emparejamiento Superior",
      "text": "Mira la clave que asigna a cada uno de los seis símbolos un dígito del 1 al 6.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Identifica el Símbolo Presentado",
      "text": "Observa el símbolo central y localiza mentalmente su dígito asociado en la tabla de referencia.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Introduce el Dígito Correspondiente",
      "text": "Toca o haz clic en el botón del dígito correcto en pantalla. Un error o un tiempo agotado cuestan 1 segundo y el combo.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Memoriza los Pares para Máxima Velocidad",
      "text": "La clave no cambia durante la sesión: memorizar los pares reduce las consultas. Al subir de nivel hay menos tiempo por símbolo.",
      "url": "https://skilldrills.online/es/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "Test de Símbolos y Dígitos Online",
    paragraphs: [
      "El test de símbolos y dígitos es un ejercicio gratis en el navegador: la clave superior asocia seis símbolos a los dígitos 1 a 6, aparece un símbolo en el centro y pulsas el dígito que le corresponde. La clave se mezcla en cada sesión. La ronda empieza con 45 segundos; cada acierto suma 2 segundos (máx. 60) y cada error o tiempo agotado resta 1 segundo.",
      "Responder del símbolo al dígito es el formato del SDMT (Smith, 1973); en el DSST de Wechsler es al revés (del dígito al símbolo). Este ejercicio no es ninguno de los dos tests y sus resultados no se comparan con sus baremos.",
      "El resultado muestra puntos, precisión, aciertos, errores y nivel máximo. Es un juego de práctica, no una evaluación de CI.",
    ],
  },
  benchmarks: {
    title: 'Etapas de práctica SkillDrills (precisión)',
    headers: ['Nivel', 'Categoría', 'Rango de Eficiencia', 'Precisión', 'Marcador de práctica'],
    note: "Etapas editoriales de práctica para comparar tus propias sesiones; no son estadísticas de población.",

    rows: [
      { tier: 'Etapa 1', rank: 'Muy avanzada', stat: 'Ritmo muy alto', accuracy: '98%+', marker: 'Ritmo muy alto con alta precisión' },
      { tier: 'Etapa 2', rank: 'Avanzada', stat: 'Ritmo alto', accuracy: '94-97%', marker: 'Ritmo alto y regular' },
      { tier: 'Etapa 3', rank: 'Sólida', stat: 'Ritmo estable', accuracy: '88-93%', marker: 'Ritmo estable con algunos errores' },
      { tier: 'Etapa 4', rank: 'En desarrollo', stat: 'Ritmo medio', accuracy: '78-87%', marker: 'Ritmo medio con margen de mejora' },
      { tier: 'Etapa 5', rank: 'Inicial', stat: 'Ritmo inicial', accuracy: '< 78%', marker: 'Punto de partida' },
    ],
  },
  protocols: {
    title: 'Cómo se juega',
    description: 'Los cuatro pasos de cada ronda.',
    items: [
      { title: "Revisa la Clave de Emparejamiento Superior", description: "Mira la clave que asigna a cada uno de los seis símbolos un dígito del 1 al 6." },
      { title: "Identifica el Símbolo Presentado", description: "Observa el símbolo central y localiza mentalmente su dígito asociado en la tabla de referencia." },
      { title: "Introduce el Dígito Correspondiente", description: "Toca o haz clic en el botón del dígito correcto en pantalla. Un error o un tiempo agotado cuestan 1 segundo y el combo." },
      { title: "Memorize los Pares para Máxima Velocidad", description: "La clave no cambia durante la sesión: memorizar los pares reduce las consultas. Al subir de nivel hay menos tiempo por símbolo." },
    ],
  },
  faqs: {
    title: 'Preguntas Frecuentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function EnhancedPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <SymbolMatchingClient
        copy={{
          title: "Test de Símbolos y Dígitos",
          subtitle: "Encuentra rápido la correspondencia entre símbolos y dígitos y entrena el procesamiento",
          startTitle: "Test de Símbolos y Dígitos",
          stageCaption: "Compara el símbolo objetivo con la clave superior y pulsa el dígito correspondiente.",
          rulesTitle: "Instrucciones del ejercicio y puntuación",
          aboutTitle: "¿Qué es el test de símbolos y dígitos?",
          faqTitle: "Preguntas frecuentes",
          readyLabel: "PREPÁRATE",
          labels: { score: "Puntos", time: "Tiempo", level: "Nivel", bestScore: "Mejor puntuación", timeLeft: "Tiempo restante", targetSymbol: "Símbolo objetivo", accuracy: "Precisión", hits: "Aciertos", misses: "Errores", peakLevel: "Nivel máximo" },
          aboutLead: "Una tarea de símbolos y dígitos pide asociar signos con números contra el reloj. Entrena la velocidad de procesamiento y la búsqueda visual, no conocimientos. Este ejercicio es un juego de práctica.",
          aboutText: "El formato se inspira en las tareas de asociación del SDMT y el DSST. Consulta la clave y elige el dígito del símbolo objetivo. Las rondas repetidas practican búsqueda visual, memoria asociativa y selección de respuestas. La puntuación solo describe este juego.",
          aboutCards: [
            { title: "¿Para quién sirve?", desc: "Para estudiantes, profesionales y gamers que quieren practicar velocidad de procesamiento y búsqueda visual." },
            { title: "¿Qué habilidades entrena?", desc: "Búsqueda visual, memoria asociativa símbolo-dígito, selección de respuestas y atención sostenida." },
            { title: "Clave cambiante", desc: "La relación entre símbolos y dígitos cambia en cada sesión, así que exige consulta activa y no solo memorización." }
          ],
          rulesItems: [
            { num: "1", text: "Clave símbolo-dígito", highlight: "6 relaciones", result: "Consulta la clave superior" },
            { num: "2", text: "Símbolo objetivo", highlight: "+100 puntos", result: "Combo × nivel, +2 s (máx. 60 s)" },
            { num: "3", text: "Dígito incorrecto", highlight: "Reinicia el combo", result: "−1 segundo" },
            { num: "4", text: "Tiempo agotado", highlight: "Ventana más corta", result: "−1 s y combo perdido" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
