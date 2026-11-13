import DistractionFighterClient from '@/app/drills/cognitive/focus/distraction-fighter/DistractionFighterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test de Stroop | Atención Selectiva | SkillDrills",
  description: "Test de Stroop online gratis: elige el color de la tinta, no la palabra, y comprueba el efecto Stroop en ti. Practica atención selectiva.",
  keywords: [
    "test de stroop",
    "test de stroop online",
    "test de stroop que mide",
    "test de stroop online gratis",
    "efecto stroop",
    "efecto stroop ejercicios",
    "efecto stroop para que sirve",
    "atención selectiva",
    "control inhibitorio"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/cognitive/focus/distraction-fighter",
    languages: getAlternateLanguages('/drills/cognitive/focus/distraction-fighter')
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test de Stroop | Atención Selectiva | SkillDrills",
    description: "Test de Stroop online gratis: elige el color de la tinta, no la palabra, y comprueba el efecto Stroop en ti. Practica atención selectiva.",
    url: "https://skilldrills.online/es/drills/cognitive/focus/distraction-fighter",
    siteName: "SkillDrills",
    locale: "es_ES",
    type: "website"
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Test de Stroop | Atención Selectiva | SkillDrills",
    description: "Test de Stroop online gratis: elige el color de la tinta, no la palabra, y comprueba el efecto Stroop en ti. Practica atención selectiva."
  }
};

export default function DistractionFighterPageES() {
  const sources = pickSources('stroop1935', 'macleod1991', 'logan1984', 'posner1990', 'woods2015');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://skilldrills.online/es" },
      { "@type": "ListItem", "position": 2, "name": "Entrenamiento Cognitivo", "item": "https://skilldrills.online/es/drills/cognitive" },
      { "@type": "ListItem", "position": 3, "name": "Test de Stroop", "item": "https://skilldrills.online/es/drills/cognitive/focus/distraction-fighter" }
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Stroop_effect", "https://en.wikipedia.org/wiki/Inhibitory_control"],
    "name": "Test de Stroop Trainer",
    "dateModified": "2026-11-12",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Test de Stroop online gratis: ejercicio color-palabra en el que eliges el color de la tinta en lugar del significado de la palabra."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Test de Stroop Online Interactivo",
    "dateModified": "2026-11-12",
    "url": "https://skilldrills.online/es/drills/cognitive/focus/distraction-fighter",
    "applicationCategory": "EducationalApplication",
    "browserRequirements": "Requires JavaScript. HTML5 Canvas compatible."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Desafío de Inhibición Cognitiva de Stroop",
    "gamePlatform": "Web Browser",
    "dateModified": "2026-11-12",
    "genre": ["Brain Training", "Cognitive Drill", "Focus Training"]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Cómo Realizar el Test de Stroop Online",
    "description": "Cómo se juega una ronda del test de Stroop online.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enfoque en el Estímulo Central",
        "text": "Mire la palabra en pantalla sin pronunciar interiormente su significado textual."
      },
      {
        "@type": "HowToStep",
        "name": "Supresión del Impulso Lector",
        "text": "Inhiba activamente la respuesta automática de lectura y fíjese solo en el color de la tinta."
      },
      {
        "@type": "HowToStep",
        "name": "Selección del Botón Correcto",
        "text": "Pulse el botón del color físico correspondiente antes de que finalice la ventana de tiempo."
      },
      {
        "@type": "HowToStep",
        "name": "Sostenimiento del Ritmo",
        "text": "El reloj empieza en 45 segundos: cada acierto suma 2 s (máx. 60 s) y cada error o palabra caducada resta 1 s. La ronda termina al llegar a cero."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué es el efecto Stroop y a qué se debe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El efecto Stroop es el retraso (y los errores extra) al nombrar el color de la tinta cuando la palabra escrita nombra otro color, por ejemplo 'ROJO' escrito en azul. Se produce porque leer es casi automático y compite con la identificación voluntaria del color (Stroop, 1935; MacLeod, 1991). En este test de Stroop online lo notarás como dudas o fallos al elegir el botón."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué estructuras cerebrales modulan este conflicto cognitivo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los estudios de neuroimagen asocian la corteza cingulada anterior (ACC) y la corteza prefrontal dorsolateral (DLPFC) con la detección y resolución del conflicto (Posner & Petersen, 1990). Este ejercicio no mide la actividad cerebral."
        }
      },
      {
        "@type": "Question",
        "name": "¿Por qué cuesta más nombrar el color que leer la palabra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La lectura de palabras familiares es una habilidad sobreaprendida que se procesa de forma pasiva e instantánea, requiriendo un esfuerzo cognitivo activo para ser bloqueada."
        }
      },
      {
        "@type": "Question",
        "name": "¿En qué medida ayuda este ejercicio a deportistas y jugadores de videojuegos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay evidencia de un efecto sobre el rendimiento deportivo o en videojuegos. El ejercicio solo practica ignorar una información engañosa bajo presión de tiempo; úsalo como complemento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo se aconseja entrenar al día?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No hay una regla fija. Unos minutos al día con pausas bastan para practicar sin cansarse; no se garantiza ninguna mejora."
        }
      },
      {
        "@type": "Question",
        "name": "¿Desaparece el efecto Stroop tras entrenar de forma continuada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Con la práctica la interferencia suele reducirse algo, pero no desaparece en quien lee con fluidez (MacLeod, 1991). En este ejercicio el progreso se ve sobre todo en la puntuación y la precisión."
        }
      },
      {
        "@type": "Question",
        "name": "¿Existe algún truco para mejorar la velocidad en el test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Algunos jugadores miran el borde de una letra en lugar de la palabra completa para leerla menos; es un truco práctico, no un método probado. Prioriza la precisión: cada error cuesta 1 segundo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo pondera el sistema la puntuación final?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada acierto vale 100 puntos × multiplicador de combo (hasta 3x) × factor de nivel y suma 2 segundos al reloj (máx. 60 s). Un error o una palabra caducada (opción Tiempo límite activada, por defecto) reinicia el combo y resta 1 segundo. La precisión es aciertos ÷ (aciertos + errores + caducadas). Las palabras de color se muestran en español (ROJO, AZUL…)."
        }
      },
      {
        "@type": "Question",
        "name": "¿Pueden realizarlo personas con dificultades para distinguir colores?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Puede resultar difícil: el ejercicio usa rojo, verde, naranja, amarillo, azul y morado y no tiene modo para daltonismo."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo repercute este entrenamiento en la capacidad de concentración diaria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No está demostrado. La puntuación suele subir con la práctica, pero la transferencia a la concentración diaria es incierta. Úsalo como un calentamiento breve."
        }
      }
    ]
  };

  const guide = {
    title: "Efecto Stroop: qué es y cómo funciona este test de Stroop online",
    intro: [
      "El efecto Stroop, descrito originalmente por J. Ridley Stroop en 1935, constituye uno de los hallazgos más sólidos de la psicología cognitiva. Al enfrentarse a palabras donde el texto contradice la tinta (por ejemplo, 'AMARILLO' en letras rojas), los tiempos de respuesta se alargan y aumentan los errores: eso es el efecto Stroop.",
      "La explicación reside en la velocidad disimétrica de procesamiento cerebral: leer es una conducta casi refleja y automática (MacLeod, 1991). La investigación sobre inhibición describe la detención de una respuesta automática como una carrera (Logan & Cowan, 1984): en el test de Stroop, el error aparece cuando la lectura no se frena a tiempo.",
      "Estudios de neuroimagen asocian la corteza cingulada anterior y la corteza prefrontal a la resolución de esta interferencia (Posner & Petersen, 1990). Este ejercicio permite practicar la atención selectiva bajo presión de tiempo, sin medir actividad cerebral ni garantizar mejoras.",
      "Cronometraje: el ejercicio no muestra tiempos de reacción, sino puntuación, precisión y nivel alcanzado. La ventana de respuesta de cada palabra la controlan los temporizadores del navegador en su propio dispositivo. Los temporizadores del navegador aplican una atenuación de seguridad frente a vulnerabilidades como Spectre (alrededor de 1 ms), mientras que la pantalla cuantiza los cambios según su frecuencia de actualización: aproximadamente 16,7 ms por fotograma a 60 Hz, 6,9 ms a 144 Hz y 4,1 ms a 240 Hz (Woods et al., 2015). Se recomienda valorar tendencias personales en un mismo dispositivo en lugar de comparar cifras aisladas entre hardware dispar.",
      "Transparencia de datos y aviso educativo: SkillDrills no recopila datos agregados ni almacena información en servidores remotos. Sus métricas y configuraciones se conservan exclusivamente en el almacenamiento local (localStorage) de su navegador. Este ejercicio es una herramienta interactiva de entrenamiento cognitivo para fines educativos y recreativos."
    ],
    benchmarks: {
      title: "Test de Stroop: niveles de nota (puntos por ronda)",
      headers: ["Nota", "Puntos"],
      rows: [
        ["S+", "21.660 o más"],
        ["S", "17.340 – 21.659"],
        ["A", "13.500 – 17.339"],
        ["B", "8.640 – 13.499"],
        ["C", "4.860 – 8.639"],
        ["D", "2.160 – 4.859"],
        ["F", "menos de 2.160"]
      ],
      note: "Bandas de práctica de SkillDrills, calculadas directamente con la fórmula de nota de la pantalla final (fracción de 24.000 puntos de referencia); no son estadísticas de usuarios. Cada acierto vale 100 puntos × combo (hasta 3x) × factor de nivel."
    },
    techniques: {
      title: "4 Estrategias para Superar la Interferencia de Stroop",
      items: [
        {
          name: "Enfoque periférico en los bordes de las letras",
          desc: "No lea la palabra como una unidad semántica; fije la mirada en la esquina o remate de una sola letra para evitar la activación automática del área del lenguaje.",
          tips: "Perciba la letra como una forma geométrica abstracta y no como texto."
        },
        {
          name: "Supresión estricta de la voz interior",
          desc: "Pronunciar mentalmente el nombre del color suele aumentar la interferencia. Conecte de forma directa la percepción visual con el botón motor.",
          tips: "Mantenga la lengua relajada y respire con tranquilidad sin susurrar los colores."
        },
        {
          name: "Cadencia de respuesta rítmica y controlada",
          desc: "Hacer clics apresurados multiplica los errores por impulsividad y rompe el multiplicador. Un ritmo estable y pausado protege la racha y evita perder 1 segundo por error.",
          tips: "Priorice la precisión absoluta sobre la velocidad ciega."
        },
        {
          name: "Micro-sesiones de resistencia a la distracción",
          desc: "El cansancio aumenta los errores. Sesiones diarias de 3 a 5 minutos son fáciles de mantener.",
          tips: "Realice este ejercicio como activación mental previa a tareas de estudio o trabajo intensivo."
        }
      ]
    },
    steps: [
      "Observe el término presentado en pantalla sin leerlo mentalmente.",
      "Ignore el significado del texto y fíjese solo en el color de la tinta.",
      "Seleccione el botón inferior correspondiente al color real del pigmento.",
      "Encadene aciertos: +2 s por acierto (máx. 60 s), -1 s por error, hasta que el reloj llegue a cero."
    ],
    audience: "Estudiantes, opositores, profesionales en oficinas abiertas, deportistas, jugadores y cualquiera que quiera comprobar el efecto Stroop en sí mismo.",
    faqs: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <DistractionFighterClient
        copy={{
          title: "Test de Stroop",
          subtitle: "Test de Stroop online: efecto Stroop y atención selectiva",
          caption: "Indique el color de la tinta e ignore el significado del texto. La interferencia entre lectura automática y discriminación de color mide su control inhibitorio ejecutivo (Stroop, 1935).",
          stageCaption: "Pulse el botón del color de la tinta e ignore la palabra contradictoria.",
          rulesTitle: "Instrucciones del Ejercicio y Puntuación",
          aboutTitle: "Acerca del Test de Stroop y la Inhibición Cognitiva",
          aboutText: "El efecto Stroop refleja la ralentización al indicar el color de una palabra cuando el significado entra en desacuerdo con la tinta (Stroop, 1935; MacLeod, 1991).\n\nLeer es una acción muy arraigada. La corteza cerebral debe inhibir voluntariamente la lectura para dar prioridad al color.\n\nEl ejercicio permite practicar ese conflicto; no garantiza más concentración en el día a día.",
          aboutCards: [
            { title: "¿Para quién es útil?", desc: "Personas en entornos de oficina compartida, estudiantes y competidores de videojuegos de acción.", color: "bg-blue-600" },
            { title: "Capacidades Entrenadas", desc: "Tolerancia a la interferencia, inhibición cognitiva, atención focalizada y autocontrol.", color: "bg-emerald-600" },
            { title: "Control Inhibitorio", desc: "Suprima el impulso reflejo de lectura e identifique los colores con rapidez y precisión.", color: "bg-purple-600" }
          ],
          rulesItems: [
            { num: "1", text: "Palabra de color (en español)", highlight: "elige la tinta", result: "ignora la palabra" },
            { num: "2", text: "Acierto", highlight: "100 × combo × nivel", result: "+2 s (máx. 60 s)" },
            { num: "3", text: "Error / palabra caducada", highlight: "combo a cero", result: "-1 s" },
            { num: "4", text: "Nivel superior", highlight: "ventana más corta", result: "6 colores desde nivel 4" }
          ]
        }}
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
