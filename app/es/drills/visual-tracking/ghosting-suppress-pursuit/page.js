import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Prueba de Ghosting del Monitor | SkillDrills",
  description: "Observa estelas y halos en un objetivo móvil y practica fijación foveal, nitidez de movimiento y estabilidad de la mirada.",
  keywords: [
    "prueba de ghosting del monitor",
    "ghosting monitor test",
    "estela en la pantalla",
    "prueba de monitor",
    "tiempo de respuesta del monitor",
    "desenfoque de movimiento",
    "prueba de estelas visuales",
    "fijación foveal",
    "estabilidad de la mirada",
    "prueba de movimiento online",
    "monitor gaming ghosting",
    "test visual gratis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/ghosting-suppress-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Prueba de Ghosting del Monitor | SkillDrills",
    description: "Observa estelas y halos en un objetivo móvil y practica fijación foveal, nitidez de movimiento y estabilidad de la mirada.",
    url: "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit",
    siteName: "SkillDrills",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prueba de Ghosting del Monitor | SkillDrills",
    description: "Observa estelas y halos en un objetivo móvil y practica fijación foveal, nitidez de movimiento y estabilidad de la mirada.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/es"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Seguimiento Visual",
      "item": "https://skilldrills.online/es/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Supresión de Estelas y Fijación",
      "item": "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Supresión de Estelas Visuales – Fijación Ocular",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navegador",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Test de Estabilidad de Fijación Ocular y Supresión de Imágenes Residuales",
  "url": "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navegador",
  "browserRequirements": "Requiere JavaScript y Canvas HTML5.",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Prueba de Ghosting del Monitor – Fijación Foveal",
  "description": "Entrenador visual en el navegador para observar estelas en un objetivo móvil y practicar fijación foveal y estabilidad de la mirada.",
  "genre": ["Prueba de Monitor", "Entrenamiento de Motilidad Ocular", "Entrenamiento de Reacción Visual"],
  "playMode": "Un jugador",
  "applicationCategory": "Game",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Cómo Entrenar la Fijación Foveal ante Estelas Visuales",
  "description": "Protocolo para optimizar la supresión cortical de borrosidad y mantener el anclaje visual en blancos con artefactos de arrastre.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Inmoviliza Cabeza y Cuello",
      "text": "Siéntate a 50-60 cm de la pantalla con la cabeza inmóvil para suprimir la ayuda refleja del sistema vestibular.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Clava la Mirada en el Núcleo Central",
      "text": "Fija la atención foveal únicamente en el centro del blanco, ignorando deliberadamente los anillos y halos que lo persiguen.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Suprime el Deslizamiento Retiniano Posterior",
      "text": "Evita que la vista retroceda hacia la estela. Mantén las microsacadas orientadas de forma continua en la dirección del desplazamiento.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Completa Series de Alta Concentración",
      "text": "Ejecuta de 5 a 8 series de 60 segundos con descansos periódicos para prevenir el agotamiento de los fotorreceptores y de la corteza visual.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la prueba de ghosting y fijación de la mirada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una práctica visual que muestra un objetivo móvil con estelas y halos para observar la claridad del movimiento y mantener la mirada en el núcleo. No sustituye una medición de laboratorio del tiempo de respuesta del panel."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo gestiona el sistema visual el desenfoque de movimiento?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El sistema visual combina señales de movimiento y contraste a lo largo del tiempo. La percepción depende tanto del procesamiento neural como de la respuesta del monitor, por lo que el resultado debe interpretarse como observación y práctica (Burr, 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la función de las microsacadas en la fijación ocular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Incluso durante la fijación estricta, los ojos generan microsacadas de alta frecuencia que renuevan la estimulación de la fóvea y evitan el desvanecimiento perceptivo (efecto Troxler) sin perder el objetivo (Martinez-Conde et al., 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué la mirada tiende a seguir la estela detrás del objetivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los cambios de brillo y contraste en la periferia pueden atraer la atención. Si sigues el halo en lugar del núcleo, la fijación se desplaza hacia atrás; baja la velocidad y vuelve al centro."
      }
    },
    {
      "@type": "Question",
      "name": "¿De qué manera favorece este ejercicio a los jugadores de FPS y deportes electrónicos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En tiroteos cargados de partículas, humo y proyectiles, fijar la retícula en el centro exacto del adversario sin distraerse por estelas luminosas permite disparar con mayor certeza y evitar fallos por fatiga visual."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué es crucial no mover la cabeza durante la prueba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El movimiento cefálico activa el reflejo vestíbulo-ocular (RVO), compensando el desajuste con el oído interno. Mantener la cabeza fija garantiza que los músculos extraoculares asuman toda la carga de estabilización."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tiempo y la frecuencia diaria recomendados para este test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De 5 a 10 minutos al día (entre 5 y 8 bloques de 60 segundos). Como la supresión de ruido visual demanda esfuerzo cognitivo continuo, series cortas evitan la astenopia y favorecen la plasticidad motora."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué relevancia tiene el tiempo de respuesta del monitor (GtG) y los Hz en esta práctica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El tiempo de respuesta y la frecuencia del monitor cambian la estela observada, pero un navegador no garantiza una medición de 1 ms. Compara 60, 120 o 144 Hz en el mismo equipo y registra las condiciones."
      }
    },
    {
      "@type": "Question",
      "name": "¿Existe transferencia de este ejercicio a disciplinas como tenis, béisbol o fútbol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí. Una pelota bateada o lanzada con rotación genera estelas visuales en la retina. Los deportistas con fijación avanzada distinguen los giros y la costura de la pelota con gran nitidez a pesar de su alta velocidad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro y gratuito realizar este ejercicio de fijación diariamente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Totalmente. El test es 100 % gratuito, opera en el navegador sin descargas ni registros, y los registros de puntuación se conservan únicamente en el almacenamiento local de tu dispositivo."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurofisiológicas de la Fijación Foveal y Supresión de Estelas Visuales",
  intro: [
    "Al seguir un objetivo rápido, la imagen puede dejar una estela por la respuesta de los píxeles, el tiempo de integración visual y el movimiento de la mirada. Esta prueba usa la estela como distracción controlada: la tarea es mantener la fijación en el núcleo, sin convertir el resultado en un examen clínico (Burr, 1980; Burr & Morgan, 1997).",
    "Filtrado visual y microsacadas: durante la fijación, pequeños movimientos oculares renuevan la estimulación retiniana y ayudan a conservar la percepción del objetivo. La práctica combina atención al núcleo, seguimiento suave y una corrección breve cuando el halo atrae la visión periférica (Martinez-Conde, Macknik, & Hubel, 2004; Rolfs, 2009; Krauzlis, 2004).",
    "Interacción con el hardware y frecuencia: 60 Hz, 120 Hz y 144 Hz muestran el movimiento con intervalos distintos, mientras que el overdrive puede producir un halo claro de sobreimpulso. Compara la misma pantalla y configuración; la herramienta funciona en el navegador y guarda los resultados localmente."
  ],
  techniques: {
    title: "Cuatro técnicas para mantener la fijación en el núcleo",
    items: [
      { name: "Estabiliza la postura antes de observar la estela", desc: "Mantener cabeza y mandíbula quietas reduce los movimientos compensatorios y facilita separar el comportamiento de la mirada del artefacto de la pantalla.", tips: "Siéntate a 50–70 cm, apoya los pies y detente si aparece ardor, dolor o visión doble." },
      { name: "Fija la mirada en el núcleo, no en el halo", desc: "El centro del objetivo es la referencia de precisión; la estela es un estímulo secundario que puede llevar la atención hacia atrás.", tips: "Empieza a baja velocidad y repite mentalmente ‘centro’ cuando el halo sea más llamativo." },
      { name: "Compara una sola variable cada vez", desc: "La frecuencia, el brillo, el overdrive y la velocidad cambian el aspecto de la estela. Cambiar todo impide una comparación fiable.", tips: "Mantén el fondo y el tamaño constantes; cambia solo la velocidad o la configuración del monitor por serie." },
      { name: "Descansa y registra las condiciones", desc: "La fatiga, el brillo y la distancia de visualización afectan la estabilidad. Series cortas producen datos más comparables.", tips: "Anota velocidad, Hz y modo de respuesta; interrumpe la sesión ante molestias visuales persistentes." }
    ]
  },
  steps: [
    "Siéntate a 50–70 cm de la pantalla, alinea la postura y mantén la cabeza estable.",
    "Empieza en 0.7x o 1.0x durante 60 segundos y observa el núcleo sin intentar medir el tiempo de respuesta del panel.",
    "Cuando aparezca el halo, mantén la mirada en el centro; si lo pierdes, haz una corrección corta y vuelve al seguimiento suave.",
    "Repite la serie cambiando una sola condición: velocidad, frecuencia de actualización o intensidad de respuesta del monitor.",
    "Haz de 5 a 8 series con pausas y registra la configuración, la frecuencia de pérdidas y cualquier molestia."
  ],
  benchmarks: {
    title: "Estándares de Rendimiento en Fijación Foveal y Supresión de Estelas Visuales",
    headers: ["Nivel de Rendimiento", "Multiplicador de Velocidad", "Estabilidad de Fijación ante Estelas Visuales", "Perfil Neuromotor y Oculomotor"],
    rows: [
      ["Nivel 1: Apex Fijación – Bloqueo Foveal Puro", "2.0x+ Ultra-Velocidad", "La mirada permanece firmemente anclada en el núcleo del blanco a pesar de los densos anillos de estela y rebotes bruscos.", "Supresión cortical perfecta del desenfoque de movimiento y precisión absoluta en microsacadas (Burr, 1980; Martinez-Conde et al., 2004). Nivel de élite para deportes y esports."],
      ["Nivel 2: Agudeza de Fijación Superior", "1.4x – 1.9x Alta Velocidad", "El contorno del blanco se percibe nítido a gran velocidad; mínima distracción ocasionada por los anillos de arrastre.", "Excelente filtrado sensoriomotor de los músculos extraoculares. Gran eficacia en situaciones colmadas de efectos visuales y partículas."],
      ["Nivel 3: Estándar Funcional Sólido", "1.0x – 1.3x Velocidad Estándar", "Seguimiento regular a velocidad habitual; breve titubeo durante rebotes rápidos o cuando los anillos se vuelven muy densos.", "Rango habitual en adultos sanos. Suficiente para la conducción vehicular, deportes recreativos y videojuegos convencionales."],
      ["Nivel 4: Deriva Visual – Requiere Práctica", "0.7x – 0.9x Velocidad Moderada", "La mirada se desvía periódicamente hacia las estelas posteriores; el núcleo del objetivo abandona frecuentemente la fóvea.", "Filtrado cortical pausado frente al ruido visual. Se aconseja consolidar la fijación en las velocidades más bajas."],
      ["Nivel 5: Pérdida de Fijación – Principiante", "< 0.7x Baja Velocidad", "Los ojos oscilan de manera errática entre el objetivo y los halos residuales, perdiendo el blanco por completo.", "La coordinación neuromuscular básica debe desarrollarse a bajas velocidades manteniendo la cabeza estrictamente fija."]
    ],
    note: "Baremos fundamentados en investigaciones neurofisiológicas sobre control de fijación foveal, dinámica de microsacadas y supresión cortical de estelas de movimiento (Burr, 1980; Martinez-Conde et al., 2004; Rolfs, 2009; Krauzlis, 2004)."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('burr1980', 'martinezconde2004', 'rolfs2009', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento Ocular Lento" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Persecución Caótica Direccional" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Seguimiento Ocular Reactivo" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Seguimiento en Ocho" }
  ]
};

export default function GhostingSuppressPursuitPageEs() {
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
      <GhostingSuppressPursuitClient
        copy={{
          title: "Prueba de Ghosting del Monitor – Fijación Ocular",
          subtitle: "Entrenamiento de Estabilidad Foveal y Supresión de Imágenes Residuales",
          description: "Al proyectar estelas de arrastre y anillos fantasma estocásticos, este ejercicio entrena a la corteza visual para inhibir activamente las distracciones lumínicas, afianzando la fóvea en el centro del blanco (Burr, 1980; Martinez-Conde et al., 2004)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="visual-tracking" currentHref="https://skilldrills.online/es/drills/visual-tracking/ghosting-suppress-pursuit" />
      </div>
      <DrillFooter />
    </>
  );
}
