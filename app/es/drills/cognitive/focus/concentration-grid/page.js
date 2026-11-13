import ConcentrationGridClient from '@/app/drills/cognitive/focus/concentration-grid/ConcentrationGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — es-ES / es-419 (concentration-grid)
// PRIMARY:  "tabla de schulte"               — Top domestic query (10 Google suggestions)
//           "tabla de schulte online"        — High conversion intent
// SECONDARY / LSI:
//           "tabla schulte"                  — High volume variant (9 suggestions)
//           "tabla schulte online"           — Web app query
//           "tabla de schulte resultados"    — Benchmark intent
//           "test rejilla de concentracion"  — Alternative psychological term
//           "entrenamiento vision periferica"— Cognitive benefit phrase
//           "lectura rapida tabla schulte"   — Speed reading intent
// ============================================================

export const metadata = {
  title: "Tabla de Schulte online | Rejilla de foco | SkillDrills",
  description: "Tabla de Schulte online gratis: pulsa los números en orden durante 45 segundos en una cuadrícula que crece de 3x3 a 8x8. Ejercicio de foco.",
  keywords: [
    "tabla de schulte",
    "tabla de schulte online",
    "tabla schulte",
    "tabla schulte online",
    "tabla de schulte resultados",
    "rejilla de concentracion",
    "test rejilla de concentracion",
    "entrenamiento vision periferica",
    "lectura rapida tabla schulte",
    "ejercicios de concentracion online",
    "tabla de schulte 5x5 interactiva",
    "test de atencion y concentracion online"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Tabla de Schulte online | Rejilla de foco | SkillDrills",
    description: "Tabla de Schulte online gratis: encuentra los números en orden ascendente durante 45 segundos en cuadrículas que crecen de 3x3 a 8x8. Sin descargas.",
    type: "website",
    url: "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid",
    siteName: "SkillDrills",
    locale: "es_ES",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Tabla de Schulte online | Rejilla de foco | SkillDrills",
    description: "Tabla de Schulte online gratis: encuentra los números en orden ascendente durante 45 segundos en cuadrículas que crecen de 3x3 a 8x8. Sin descargas.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid",
    languages: getAlternateLanguages('/drills/cognitive/focus/concentration-grid'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento Cognitivo", "item": "https://skilldrills.online/es/drills/cognitive" },
    { "@type": "ListItem", "position": 3, "name": "Tabla de Schulte", "item": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tabla de Schulte Online (Concentration Grid)",
  "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid",
  "description": "Tabla de Schulte online gratis: encuentra los números en orden ascendente en cuadrículas que crecen de 3x3 a 8x8 durante una ronda de 45 segundos.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12",
  "educationalUse": ["Búsqueda Visual", "Visión Periférica", "Atención Sostenida"]
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Attention"],
  "name": "Tabla de Schulte Online (Concentration Grid)",
  "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid",
  "description": "Tabla de Schulte online gratis: encuentra los números en orden ascendente en cuadrículas que crecen de 3x3 a 8x8 durante una ronda de 45 segundos.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Tabla de Schulte Online (Concentration Grid)",
  "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid",
  "description": "Juego de búsqueda secuencial de números en tablas de Schulte en expansión, en una ronda fija de 45 segundos.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Entrenamiento Cognitivo", "Búsqueda Visual", "Tabla de Schulte", "Concentration Grid"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo entrenar con la Tabla de Schulte y Rejilla de Concentración",
  "description": "Cómo jugar una ronda de 45 segundos en la tabla de Schulte online.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid#step-1",
      "name": "Fija la mirada en el centro de la cuadrícula",
      "text": "Mantén la vista relajada en el centro de la matriz en lugar de mover los ojos desordenadamente de casilla en casilla."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid#step-2",
      "name": "Localiza y toca los números en orden ascendente",
      "text": "Encuentra y pulsa cada número en secuencia numérica estricta empezando desde el 1 (1, 2, 3...) con la máxima rapidez."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid#step-3",
      "name": "Utiliza tu visión periférica",
      "text": "Aprovecha el campo visual periférico para ubicar los siguientes números mientras confirmas el número actual con el dedo o ratón."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/es/drills/cognitive/focus/concentration-grid#step-4",
      "name": "Avanza por cuadrículas en expansión",
      "text": "Al completar cada cuadrícula pasarás a matrices más grandes (3x3, 4x4, 5x5...) con números ligeramente girados desde 5x5, dentro de la misma ronda de 45 segundos; en pantallas de menos de 380 px el máximo es 7x7."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es una tabla de Schulte y para qué sirve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La tabla de Schulte lleva el nombre del psiquiatra alemán Walter Schulte: una cuadrícula con números desordenados que hay que encontrar en orden ascendente. Hoy se usa sobre todo como ejercicio de búsqueda visual y concentración, también en cursos de lectura rápida. Esta versión online es un ejercicio, no un test psicológico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo ayuda la tabla de Schulte a mejorar la lectura rápida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al leer, la mirada alterna fijaciones y movimientos sacádicos (Rayner, 1998). La tabla practica captar dígitos fuera del punto de fijación sin saltar a cada casilla, por eso se asocia a la lectura rápida. No garantiza leer más rápido y el ejercicio no mide la velocidad de lectura."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la técnica adecuada para resolver una tabla de Schulte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La consigna habitual es mantener la vista cerca del centro de la tabla y localizar los números con la visión periférica, en lugar de recorrerla de esquina a esquina. Es una regla de práctica, no un método demostrado."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué puntuación o tiempo se considera bueno en la tabla de Schulte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay un tiempo de referencia oficial y SkillDrills no recopila datos de usuarios. Este ejercicio no mide una tabla 5x5 aislada, sino una ronda de 45 segundos desde 3x3: cada acierto suma 100 puntos más un bonus de rapidez (hasta 120) y cada cuadrícula completada un bonus proporcional a sus casillas. Compara tus puntos y cuadrículas completadas con tus propias rondas anteriores."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué las casillas cambian de tamaño y los números rotan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Cada cuadrícula completada da paso a otra con una casilla más por lado (hasta 8x8, o 7x7 en pantallas estrechas), así que hay más área que recorrer. Desde 5x5 los dígitos aparecen ligeramente girados (hasta 12°, y hasta 20° desde 7x7), lo que dificulta reconocerlos de un vistazo (Treisman & Gelade, 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Esta herramienta es utilizada por deportistas profesionales?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay evidencia de un efecto sobre el rendimiento deportivo. El ejercicio se parece a captar información en el borde de la pantalla sin apartar la vista del centro; úsalo como complemento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos minutos al día se recomienda practicar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No hay una regla fija. Sesiones breves de 5 a 10 minutos (unas pocas rondas) con pausas cuidan la vista y son fáciles de mantener; no se garantiza ninguna mejora."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cometer errores penaliza el tiempo restante?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Un toque incorrecto no resta tiempo ni puntos: genera un destello rojo de aviso y reduce tu porcentaje final de precisión."
      }
    },
    {
      "@type": "Question",
      "name": "¿Se puede utilizar esta herramienta en teléfonos móviles y tablets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, funciona con pantalla táctil y con ratón. En pantallas de menos de 380 px de ancho la cuadrícula máxima es 7x7."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es necesario registrarse o pagar para usar la tabla de Schulte?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. La herramienta es 100% gratuita, de libre acceso en el navegador y no requiere registro, instalación ni descargas."
      }
    }
  ]
};

const concentrationGridGuideEs = {
  heading: "Guía Completa de la Tabla de Schulte y Psicología de la Atención Visual",
  intro: [
    "La Tabla de Schulte es un ejercicio clásico de búsqueda visual y concentración que lleva el nombre del psiquiatra alemán Walter Schulte. Su formato tradicional exige localizar los números del 1 al 25 en orden estrictamente ascendente sobre una matriz de 5x5 manteniendo la fijación en el centro.",
    "En la psicología del deporte aplicada, este ejercicio evolucionó hacia la denominada 'cuadrícula de concentración' (Harris & Harris, 1984), descrita en manuales de psicología del deporte como ejercicio de barrido ocular y concentración bajo presión de tiempo. Un estudio de potenciales relacionados con eventos (ERP) en niños de 8 a 11 años reveló que la búsqueda secuencial activa componentes neuronales sensiblemente más lentos que la localización simple, acentuándose la latencia ante estímulos dicromáticos (Lu et al., 2022).",
    "La tabla de Schulte online de SkillDrills convierte la hoja estática en una ronda continua de 45 segundos. La cuadrícula crece desde 3x3 hasta 8x8 a medida que completas fases (7x7 en pantallas de menos de 380 px), con dígitos ligeramente girados desde 5x5. Así practicas recorrer un área cada vez mayor dentro de una ventana fija de 45 segundos (Treisman & Gelade, 1980; Wolfe, 2007).",
    "Metodología de cronometría: cada evento de pulsación se registra con el reloj de alta resolución performance.now() del navegador en su propio dispositivo. Los navegadores web aplican una atenuación deliberada por motivos de seguridad (mitigación de Spectre a ~1 ms) y la pantalla cuantiza las actualizaciones a su tasa de refresco: aproximadamente 16,7 ms por fotograma a 60 Hz (Woods et al., 2015). Se recomienda evaluar progresos en el mismo dispositivo.",
    "Transparencia de datos: SkillDrills no recopila datos agregados de los usuarios. Sus mejores registros y configuraciones permanecen almacenados exclusivamente en el localStorage local de su navegador, sin transmisión a servidores remotos. Los niveles de puntuación son bandas de práctica de SkillDrills, no normas.",
    "Este ejercicio es una herramienta interactiva de práctica de búsqueda visual con fines formativos."
  ],
  benchmarks: {
    title: "Tabla de Schulte: niveles de nota (puntos por ronda de 45 s)",
    headers: ["Nota", "Puntos (45 s)"],
    rows: [
      ["S+", "7.220 o más"],
      ["S", "5.780 – 7.219"],
      ["A", "4.500 – 5.779"],
      ["B", "2.880 – 4.499"],
      ["C", "1.620 – 2.879"],
      ["D", "720 – 1.619"],
      ["F", "menos de 720"]
    ],
    note: "Bandas de práctica de SkillDrills, calculadas directamente con la fórmula de nota de la pantalla final (fracción de 8.000 puntos de referencia); no son estadísticas de usuarios. Cada acierto suma 100 puntos más un bonus de rapidez (hasta 120) y cada cuadrícula completada un bonus proporcional a sus casillas."
  },
  techniques: {
    title: "Protocolos y Estrategias Científicas de Optimización",
    items: [
      {
        name: "Anclaje Central Fóveo-Parafoveal",
        desc: "Mantén la mirada descansada en el centro geométrico de la matriz. En lugar de mover activamente los ojos hacia cada número, intenta detectar las siluetas numéricas con la visión periférica.",
        tips: "Evita girar la cabeza o perseguir los dígitos uno por uno con la mirada."
      },
      {
        name: "Técnica de Anticipación Doble (Lookahead Chunking)",
        desc: "Mientras tu mano se desplaza para pulsar el número actual (por ejemplo, el 4), tus ojos ya deben estar identificando y almacenando en la memoria de trabajo visuoespacial la posición del siguiente (el 5) (Rayner, 1998).",
        tips: "Nunca busques un solo dígito de manera aislada; procesa siempre en parejas secuenciales."
      },
      {
        name: "Búsqueda Guiada e Integración de Rasgos (Wolfe, 2007)",
        desc: "Las expectativas de arriba hacia abajo (top-down) guían la búsqueda visual. Tener presente la forma del próximo número ayuda a reconocerlo al recorrer la tabla.",
        tips: "Visualiza mentalmente la forma del siguiente número antes de escanear la tabla."
      },
      {
        name: "Invarianza a la Rotación Perceptual",
        desc: "Los números invertidos o inclinados rompen las plantillas visuales habituales. La vía ventral del cerebro debe extraer características estructurales invariantes (como el bucle del 6/9 o el travesaño del 4) para confirmar el objetivo.",
        tips: "Identifica elementos clave de la forma en lugar de intentar enderezar el número mentalmente."
      }
    ]
  },
  steps: [
    "Coloca tu mirada de forma suave en el centro de la cuadrícula.",
    "Ubica el número 1 y pulsa sobre él para activar el conteo secuencial.",
    "Aplica anticipación visual: al pulsar el número actual, busca periféricamente el siguiente.",
    "Avanza rápidamente para desbloquear cuadrículas superiores de 5x5, 6x6 y 7x7.",
    "Mantén la concentración frente a dígitos rotados durante los 45 segundos ininterrumpidos."
  ],
  audience: "Lectores rápidos, estudiantes, pilotos, atletas de alto rendimiento, jugadores de videojuegos y cualquiera que quiera practicar la búsqueda visual.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('lu2022', 'treisman1980', 'rayner1998', 'rayner2016', 'wolfe2007', 'woods2015'),
  related: [
    { href: "/es/drills/cognitive/attention/concentration-stamina", label: "Test de Atención Sostenida" },
    { href: "/es/drills/cognitive/focus/distraction-fighter", label: "Test Stroop Online" },
    { href: "/es/drills/cognitive/attention/divided-attention", label: "Test de Atención Dividida" },
    { href: "/es/drills/cognitive/processing-speed/rsvp-reader", label: "Test de Lectura Rápida" },
    { href: "/es/drills/cognitive/processing-speed/symbol-matching", label: "Test de Sustitución de Símbolos" },
    { href: "/es/drills/cognitive/processing-speed/reaction-time", label: "Test de Velocidad de Reacción" }
  ]
};

const copyEs = {
  h1Keyword: "Tabla de Schulte",
  h1Suffix: " Online – Rejilla de Concentración",
  caption: "Pulsa los números en orden ascendente en tablas de Schulte que crecen con cada cuadrícula completada. Practica búsqueda visual y concentración durante 45 segundos.",
  statScore: "Puntos",
  statTime: "Tiempo",
  statGridSize: "Cuadrícula",
  statBest: "Récord",
  hudTarget: "Objetivo:",
  startTitle: "Tabla de Schulte Trainer",
  startSubtitle: "Búsqueda Numérica Secuencial • Cuadrículas Schulte Dinámicas",
  startButtonText: "Iniciar Entrenamiento",
  getReady: "PREPÁRATE",
  statPoints: "Puntos",
  statAccuracy: "Precisión",
  statGridsCleared: "Completadas",
  statPeakGrid: "Máx. Cuadrícula",
  playAgainText: "Jugar de Nuevo",
  shareText: "Compartir Resultado",
  exitText: "Salir",
  stageCaption: "Encuentra y pulsa los números en orden ascendente en cuadrículas cada vez mayores antes de que expire el tiempo.",
  rulesTitle: "Reglas y Sistema de Puntuación",
  rulesItems: [
    { title: "Búsqueda Secuencial", text: "Toca los números en orden numérico estricto desde el 1 hasta el número más alto de la matriz." },
    { title: "Cuadrículas en Expansión", text: "Completar una cuadrícula te hace avanzar a tamaños mayores (3x3 → 4x4 → 5x5...), retando tu visión periférica." },
    { title: "Sesión Fija de 45s", text: "Dispones de una única ventana de 45 segundos. Cada cuadrícula limpia amplía el tablero sin alterar el reloj." },
    { title: "Precisión y Enfoque", text: "Los toques incorrectos emiten un destello de aviso y reducen tu precisión final, sin restar puntos ni tiempo." }
  ],
  aboutTitle: "Acerca de la Tabla de Schulte y Rejilla de Concentración",
  aboutLead: "La tabla de Schulte es una cuadrícula clásica de búsqueda visual: hay que encontrar números desordenados en orden ascendente, practicando la fijación de la mirada y la visión periférica (Lu et al., 2022; Rayner, 1998).",
  aboutCards: [
    { title: "¿Quién debería usarla?", text: "Estudiantes, lectores, deportistas y jugadores que quieren practicar búsqueda visual rápida bajo presión de tiempo.", color: "bg-blue-600" },
    { title: "Habilidades Desarrolladas", text: "Velocidad de búsqueda visual, control de la mirada, uso de la visión periférica y atención sostenida.", color: "bg-emerald-600" },
    { title: "Visión Periférica", text: "Cada nivel superado amplía la cuadrícula, así que hay que recorrer un área más ancha sin perder la secuencia.", color: "bg-purple-600" }
  ]
};

export default function ConcentrationGridPageEs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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

      <ConcentrationGridClient copy={copyEs} />
      <DrillGuide guide={concentrationGridGuideEs} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
