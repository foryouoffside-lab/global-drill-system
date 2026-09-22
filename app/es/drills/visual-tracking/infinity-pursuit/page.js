import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Ejercicio Ocular en Figura Ocho | SkillDrills",
  description: "Ejercicio ocular en ocho tumbado para practicar seguimiento ocular, persecución suave y coordinación binocular. Gratis en el navegador.",
  keywords: [
    "ejercicio ocular figura ocho",
    "seguimiento ocular ocho",
    "ocho tumbado",
    "coordinación binocular",
    "cruzar la línea media",
    "movimiento ocular",
    "seguimiento suave",
    "figura de ocho con los ojos",
    "ejercicio ocular online gratis",
    "entrenamiento de visión deportiva",
    "acompañamiento visual en ocho",
    "coordinación ojo-mano"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/infinity-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ejercicio Ocular en Figura Ocho | SkillDrills",
    description: "Ejercicio ocular en ocho tumbado para practicar seguimiento ocular, persecución suave y coordinación binocular. Gratis en el navegador.",
    url: "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit",
    siteName: "SkillDrills",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ejercicio Ocular en Figura Ocho | SkillDrills",
    description: "Ejercicio ocular en ocho tumbado para practicar seguimiento ocular, persecución suave y coordinación binocular. Gratis en el navegador.",
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
      "name": "Persecución en Ocho Infinito",
      "item": "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ejercicio Ocular en Figura Ocho – Seguimiento Ocular",
  "dateModified": "2026-09-20",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navegador",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Seguimiento Ocular en Ocho Tumbado y Cruce de Línea Media",
  "dateModified": "2026-09-20",
  "url": "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navegador",
  "browserRequirements": "Requiere JavaScript y Canvas HTML5.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Entrenamiento de Seguimiento Ocular en Ocho",
  "dateModified": "2026-09-20",
  "description": "Entrenamiento visual en el navegador para practicar la coordinación binocular siguiendo una trayectoria continua en forma de ocho.",
  "genre": ["Entrenamiento ocular", "Visión deportiva", "Seguimiento visual"],
  "playMode": "Un jugador",
  "applicationCategory": "Game"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo Realizar el Ejercicio del Ocho Tumbado para los Ojos",
  "dateModified": "2026-09-20",
  "description": "Protocolo para entrenar el seguimiento suave y la coordinación binocular a lo largo de la lemniscata de Bernoulli.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Estabiliza la Cabeza y la Postura",
      "text": "Siéntate a 50-70 cm de la pantalla con la cabeza inmóvil para forzar la acción exclusiva de los músculos extraoculares.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Selecciona la Velocidad Base",
      "text": "Comienza en 1.0x para habituar la mirada a la transición ininterrumpida entre el bucle izquierdo y el derecho.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Cruza el Centro sin Saltos",
      "text": "Al atravesar la intersección central de la línea media, mantén un deslizamiento foveal fluido sin parpadeos ni sacadas involuntarias.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Mantén Series Breves de Foco Puro",
      "text": "Ejecuta de 5 a 8 rondas de 60 segundos con descansos intercalados para consolidar la calibración sináptica cerebelosa.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/infinity-pursuit#step-4"
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
      "name": "¿Qué es el ejercicio ocular en ocho tumbado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es una práctica visual en la que ambos ojos siguen un objetivo que recorre una figura de ocho tumbado. Permite observar la continuidad de la mirada y el paso por el centro, pero no sustituye una valoración clínica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué conviene observar el cruce de la línea media?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El paso por el centro cambia continuamente el lado del campo visual que ocupa el objetivo. Observarlo ayuda a detectar titubeos o saltos dentro de la sesión, sin convertir el resultado en un diagnóstico."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo participan los ojos en la trayectoria del ocho tumbado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Los músculos extraoculares de cada ojo coordinan movimientos horizontales, verticales y diagonales para mantener el objetivo en la mirada. El ejercicio practica control visual; no es correcto prometer fortalecimiento ni tratar una enfermedad."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué significa seguir el objetivo con estabilidad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Significa mantener la mirada cerca del objetivo durante la curva, con pocas pérdidas o correcciones. La métrica de la página sirve para comparar sesiones en las mismas condiciones y no es una medida clínica universal."
      }
    },
    {
      "@type": "Question",
      "name": "¿Puede ayudar este ejercicio a seguir objetivos en videojuegos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ofrece una tarea controlada para practicar la continuidad de la mirada en curvas. La transferencia a videojuegos depende de la práctica específica y de cada persona; no promete mejorar la puntería."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué conviene mantener estable la cabeza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una cabeza estable hace más claro qué puede seguir la mirada por sí sola y permite comparar sesiones. No fuerces el cuello: relájalo y detente si aparece dolor o mareo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuánto tiempo se recomienda entrenar cada día?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Empieza con una o dos series breves de unos 60 segundos y descansa entre ellas. Aumenta solo si la mirada sigue cómoda; no existe una dosis diaria universal para esta práctica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Ayuda este ejercicio a aliviar la fatiga ocular frente a pantallas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Puede servir como pausa activa para variar una mirada fija en la pantalla, pero no garantiza aliviar la fatiga. Si el malestar, el dolor o la visión doble persisten, detén el ejercicio y consulta."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué beneficios aporta en deportes tradicionales como tenis o fútbol?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La tarea reproduce solo una parte del seguimiento de una trayectoria. Los deportes también requieren anticipación, profundidad, reacción y decisiones; úsala como complemento, no como sustituto del entrenamiento."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratuito y cómo se usa con seguridad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La herramienta es gratuita y funciona en el navegador sin exigir registro. Usa un ritmo cómodo, parpadea con normalidad y detente ante dolor, visión doble, náusea o mareo; busca orientación profesional si persiste."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurofisiológicas de la Lemniscata y Coordinación Binocular",
  intro: [
    "La figura de ocho tumbado, también llamada lemniscata, reúne curvas diagonales y pasos por el centro en una tarea de seguimiento visual. El objetivo se mueve de forma continua para que practiques mantener la mirada sobre él sin convertir cada giro en una serie de saltos. Es una práctica visual y no sustituye una evaluación de oftalmología u ortóptica.",
    "El cruce central permite observar la transición entre los campos visuales derecho e izquierdo. Mantén el objetivo nítido y nota si la mirada pierde el recorrido, hace un salto breve o necesita una pausa. Ese registro describe tu sesión y no diagnostica una alteración binocular o neurológica.",
    "La respuesta depende de la distancia a la pantalla, el tamaño del objetivo, la frecuencia de actualización y el cansancio. Usa una pantalla cómoda, parpadea con normalidad y prioriza la regularidad sobre la velocidad. Si aparece dolor, visión doble, náusea o mareo, detén la práctica y pide orientación profesional."
  ],
  techniques: {
    title: "Cuatro técnicas para seguir una figura de ocho",
    items: [
      { name: "Referencia central", desc: "Empieza percibiendo el cruce central antes de intentar seguir el lazo completo.", tips: "Mantén el tronco quieto, respira con normalidad y baja la velocidad si pierdes el punto." },
      { name: "Curva continua", desc: "Deja que los ojos acompañen la curva sin anticipar el siguiente lazo con un salto.", tips: "Mira el objetivo actual; no intentes abarcar todo el recorrido de una vez." },
      { name: "Simetría de los lados", desc: "Compara el lazo izquierdo y el derecho dentro de la misma sesión.", tips: "Si un lado cuesta más, repite despacio y anota la diferencia sin forzar." },
      { name: "Progresión controlada", desc: "Aumenta la velocidad solo cuando el recorrido siga siendo estable y cómodo.", tips: "Haz una serie breve, mira a lo lejos para descansar y vuelve al último nivel cómodo." }
    ]
  },
  steps: [
    "Siéntate con la espalda apoyada y coloca la pantalla a una distancia cómoda, sin acercar la cara.",
    "Ajusta el brillo y el tamaño de la ventana para ver el objetivo con claridad; relaja y estabiliza la cabeza.",
    "Empieza con la velocidad más baja y sigue el punto luminoso con ambos ojos, parpadeando con normalidad.",
    "Observa el paso por el centro y reduce el ritmo si la mirada salta o si empiezas a mover la cabeza.",
    "Registra la precisión y la comodidad, descansa mirando a lo lejos y solo después repite o sube un nivel."
  ],
  benchmarks: {
    title: "Métricas de rendimiento en ocho tumbado",
    headers: ["Nivel", "Seguimiento del objetivo", "Pérdidas en el centro", "Precisión del recorrido", "Lectura práctica"],
    rows: [
      ["Muy estable", "Casi siempre acompañado", "Raras", "98% o más", "Ritmo cómodo; úsalo como referencia personal, no como diagnóstico."],
      ["Estable", "Seguimiento continuo", "Pocas", "92%–97%", "Buena constancia; prueba una pequeña progresión de velocidad."],
      ["Funcional", "Algunas correcciones", "Ocasionales", "82%–91%", "Base adecuada para repetir sesiones lentas y observar cambios."],
      ["En desarrollo", "Retrasos perceptibles", "Frecuentes", "70%–81%", "Baja el ritmo, descansa y compara solo sesiones realizadas en condiciones similares."],
      ["Inestable", "Pierde el objetivo a menudo", "Muchas", "Menos del 70%", "Vuelve al ritmo más lento y detente si aparece incomodidad visual."]
    ],
    note: "Estas franjas sirven para comparar tus propias sesiones con la misma pantalla y distancia; no son valores normativos clínicos. El seguimiento del objetivo no mide la agudeza visual ni confirma una enfermedad."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('barnes2008', 'krauzlis2004', 'robinson1965', 'leighzee2015', 'woods2015', 'salthouse1980'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento ocular lento" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Persecución direccional variable" },
    { href: "/es/drills/visual-tracking/dynamic-evasion-pursuit", label: "Persecución evasiva dinámica" },
    { href: "/es/drills/visual-tracking/sine-wave-pursuit", label: "Seguimiento en onda sinusoidal" }
  ]
};

export default function InfinityPursuitPageEs() {
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
      <InfinityPursuitClient
        copy={{
          title: "Ejercicio Ocular en Figura Ocho",
          subtitle: "Seguimiento ocular y coordinación binocular",
          description: "Sigue un objetivo en una figura de ocho tumbado, observa el paso por la línea media y practica un seguimiento suave a un ritmo cómodo."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
