import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Seguimiento Ocular Reactivo | Objetivo Móvil | SkillDrills",
  description: "Recaptura un objetivo móvil que cambia de dirección. Practica visión dinámica, reacción visual y refijación foveal gratis.",
  keywords: [
    "seguimiento ocular",
    "visión dinámica",
    "objetivo móvil",
    "seguimiento visual reactivo",
    "refijación foveal",
    "sacadas correctoras",
    "reacción visual",
    "cambios bruscos de dirección",
    "entrenamiento de motilidad ocular",
    "seguimiento ocular para deporte",
    "ejercicio visual online",
    "test de seguimiento ocular gratis"
  ],
  alternates: {
    canonical: "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/dynamic-evasion-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Seguimiento Ocular Reactivo | Objetivo Móvil | SkillDrills",
    description: "Recaptura un objetivo móvil que cambia de dirección y practica visión dinámica, reacción visual y refijación foveal gratis.",
    url: "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit",
    siteName: "SkillDrills",
    locale: "es_ES",
    type: "website",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Seguimiento Ocular Reactivo | Objetivo Móvil | SkillDrills",
    description: "Recaptura un objetivo móvil que cambia de dirección y practica visión dinámica, reacción visual y refijación foveal gratis.",
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
      "name": "Persecución Evasiva Dinámica",
      "item": "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Seguimiento Ocular Reactivo – Objetivo Móvil",
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
  "name": "Test de Seguimiento de Objetivos Evasivos y Refijación Foveal",
  "url": "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit",
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
  "name": "Seguimiento Ocular Reactivo – Entrenador Visual",
  "description": "Entrenador visual en el navegador para seguir un objetivo móvil que cambia de dirección y practicar reacción visual.",
  "genre": ["Entrenamiento de Motilidad Ocular", "Visión Deportiva", "Entrenamiento de Reacción Visual"],
  "playMode": "Un jugador",
  "applicationCategory": "Game",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Cómo Entrenar la Refijación Sacádica ante Blancos Evasivos",
  "description": "Protocolo para optimizar respuestas visomotoras de reacción inmediata y suprimir la latencia en giros bruscos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Estabiliza tu Postura",
      "text": "Siéntate a 50-60 cm de la pantalla. Mantén la cabeza inmóvil para evitar la intervención del reflejo vestíbulo-ocular (RVO).",
      "url": "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Sigue los Tramos Lineales",
      "text": "Mantén el seguimiento suave continuo mientras el objetivo vuela a velocidad regular en su trayectoria recta.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Dispara Sacadas Inmediatas al Quiebre",
      "text": "Cuando el blanco quiebre bruscamente, detecta el deslizamiento de la imagen en la retina y dispara una sacada veloz para recentrar la fóvea.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Mantén Series Cortas e Intensas",
      "text": "Realiza de 5 a 8 series de 60 segundos con descansos intercalados para preservar la velocidad de respuesta sin fatigar los ojos.",
      "url": "https://skilldrills.online/es/drills/visual-tracking/dynamic-evasion-pursuit#step-4"
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
      "name": "¿Qué es el ejercicio de seguimiento ocular reactivo con objetivo móvil?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es un ejercicio de motilidad ocular que combina tramos de seguimiento suave con cambios bruscos de dirección, ayudando al sistema visual a volver a centrar el objetivo con rapidez."
      }
    },
    {
      "@type": "Question",
      "name": "¿En qué se diferencia de la persecución caótica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El movimiento caótico cambia continuamente; este ejercicio presenta trayectorias rectas uniformes interrumpidas por giros discretos y repentinos, por lo que exige volver a leer la dirección."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué ocurre en la retina durante un quiebre imprevisto de dirección?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Al virar bruscamente el objetivo, la imagen se desliza sobre la retina. El colículo superior participa en una sacada correctora que vuelve a centrar la fóvea sobre la nueva trayectoria (Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo mejora este entrenamiento la puntería en juegos de disparos (FPS)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En juegos de disparos, los rivales alternan desplazamientos laterales rápidos. Este ejercicio practica la readquisición visual del objetivo, reduciendo la pérdida de fijación cuando cambia la trayectoria."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué es crucial mantener la cabeza inmóvil durante la prueba?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Girar la cabeza activa el reflejo vestíbulo-ocular (RVO) a través de los canales vestibulares del oído interno, ocultando la lentitud muscular ocular. Inmovilizar la cabeza fuerza el trabajo puro de los seis músculos extraoculares."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la frecuencia y el tiempo de entrenamiento aconsejado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Recomendamos de 5 a 10 minutos diarios (5 a 8 rondas de 60 segundos). Como las sacadas de compensación exigen alta concentración y velocidad de disparo, series breves previenen la fatiga visual y consolidan la plasticidad sináptica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué debo hacer si pierdo de vista el blanco tras una maniobra de escape?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No muevas la mirada a lo loco por la pantalla. Mantén el foco en la región central inmediata, detecta el movimiento periférico y lanza una sacada directa hacia el nuevo rumbo. Si sucede continuamente, baja la velocidad a 0.8x."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué relevancia tiene la tasa de refresco del monitor (Hz) en el seguimiento de esquivas?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Monitores de 144 Hz o superiores reducen el retraso entre cuadros a menos de 6,9 ms (Woods et al., 2015), mostrando el quiebre angular de inmediato, lo que posibilita una reacción sacádica mucho más rápida y limpia."
      }
    },
    {
      "@type": "Question",
      "name": "¿Existe transferencia de este ejercicio a deportes tradicionales como fútbol o tenis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Totalmente. En deportes de pelota o contacto, los oponentes realizan amagos y cambios de ritmo repentinos. La velocidad con la que los ojos refijan la trayectoria permite anticipar jugadas y reaccionar a tiempo."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratuito y seguro realizar este test de seguimiento evasivo a diario?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, este test es 100 % gratuito, opera de forma nativa en el navegador sin registros ni descargas, y todos los registros de tiempos se almacenan únicamente en el almacenamiento local de tu equipo."
      }
    }
  ]
};

const guideProps = {
  heading: "Bases Neurofisiológicas del Seguimiento Ocular Reactivo",
  intro: [
    "El seguimiento visual común suele desarrollarse sobre trayectorias predecibles, en las cuales el cerebelo ayuda a anticipar el movimiento mediante modelos motores (Bahill, Iandolo, & Troost, 1980). Aquí el objetivo recorre tramos rectos y cambia de dirección de forma inesperada, una exigencia parecida a la de los deportes rápidos y los videojuegos competitivos.",
    "Deslizamiento retiniano y sacadas correctoras: cuando el objetivo gira, la imagen se desplaza sobre la retina más rápido de lo que el seguimiento suave puede compensar. La corteza visual y el colículo superior procesan ese error y orientan una sacada correctora que devuelve la fóvea al objetivo (Rashbass, 1961; Krauzlis, 2004; Barnes, 2008).",
    "Latencia de visualización y frecuencia de refresco: una pantalla de 60 Hz puede introducir hasta 16,7 ms entre cuadros, mientras que 144 Hz o 240 Hz reducen ese intervalo. La plataforma funciona en el navegador y conserva los resultados localmente, sin registro."
  ],
  techniques: {
    title: "Cuatro técnicas para mejorar la recuperación sacádica",
    items: [
      { name: "Estabiliza la cabeza para aislar el movimiento ocular", desc: "Mantener cabeza y mandíbula quietas reduce la participación del reflejo vestíbulo-ocular y deja la corrección de la mirada a los músculos extraoculares.", tips: "Siéntate a 50–70 cm de la pantalla, apoya los pies y descansa ante ardor, visión borrosa o visión doble." },
      { name: "Lee el nuevo vector antes de volver a fijar", desc: "Tras un giro, la retina periférica detecta el desplazamiento antes de que la fóvea vuelva al objetivo. Una sacada corta y dirigida es más eficiente que arrastrar la mirada.", tips: "Observa el primer desplazamiento tras el giro y salta hacia el centro probable del objetivo, sin perseguir el rastro." },
      { name: "Reacciona sin anticipar la siguiente curva", desc: "Como la trayectoria no repite un patrón seguro, adivinar el giro aumenta los errores de dirección. La práctica debe priorizar la información recién observada.", tips: "Si notas que esperas una curva conocida, reduce la velocidad y vuelve a responder solo al movimiento que aparece." },
      { name: "Progresa con velocidad y descansos", desc: "La calidad de la refijación es más útil que una velocidad alta con pérdidas constantes. Series breves permiten comparar la estabilidad sin acumular fatiga.", tips: "Empieza en 1.0x, sube en pasos pequeños solo cuando recuperes el objetivo con regularidad y descansa entre series." }
    ]
  },
  steps: [
    "Siéntate a 50–70 cm de la pantalla, alinea la postura y mantén cabeza y mandíbula estables.",
    "Empieza en 1.0x con una serie de 60 segundos para observar cuántas veces pierdes el objetivo.",
    "Cuando llegue un giro, detecta el nuevo vector con la visión periférica y haz una sacada corta para recentrar la fóvea.",
    "Reanuda el seguimiento continuo al reencontrar el objetivo; no recorras la pantalla al azar.",
    "Haz de 5 a 8 series con pausas, anota la velocidad en la que cae la estabilidad y úsala para ajustar la próxima sesión."
  ],
  benchmarks: {
    title: "Estándares de Rendimiento en Persecución Evasiva y Refijación Sacádica",
    headers: ["Nivel de Rendimiento", "Multiplicador de Velocidad", "Refijación Sacádica en Quiebres Evasivos", "Perfil Neuromotor y Oculomotor"],
    rows: [
      ["Nivel 1: Apex Reactivo – Reflejos de Élite", "2.0x+ Ultra-Velocidad", "La sacada correctiva se ejecuta en menos de 150 ms; fijación foveal inmediata sin oscilaciones residuales.", "Máxima velocidad de conducción sináptica entre fóvea y centros oculomotores. Nivel de élite para esports y deportes dinámicos."],
      ["Nivel 2: Agilidad Visual Superior", "1.4x – 1.9x Alta Velocidad", "Recentrado rápido y fiable en 1 a 2 cuadros de vídeo; recuperación fluida de la velocidad de seguimiento.", "Músculos extraoculares muy entrenados. Gran control frente a maniobras de esquiva y desplazamientos laterales impredecibles."],
      ["Nivel 3: Estándar Funcional Sólido", "1.0x – 1.3x Velocidad Estándar", "Seguimiento estable en tramos lineales; leve retardo de latencia en giros de ángulos agudos.", "Rango habitual en adultos sanos. Suficiente para conducción cotidiana, deportes recreativos y videojuegos."],
      ["Nivel 4: Refijación Tardía – Requiere Práctica", "0.7x – 0.9x Velocidad Moderada", "El blanco escapa de la fóvea en la mayoría de quiebres; requiere múltiples sacadas sucesivas para reenganchar.", "Latencia sensoriomotora aumentada ante rupturas de trayectoria. Se sugiere practicar primero a velocidades lentas."],
      ["Nivel 5: Inestabilidad Ocular – Principiante", "< 0.7x Baja Velocidad", "La mirada se demora en la trayectoria antigua del blanco antes de poder iniciar una reacción compensatoria.", "La coordinación ocular elemental requiere desarrollo en trayectorias continuas con inmovilización rigurosa de la cabeza."]
    ],
    note: "Baremos basados en estudios neurofisiológicos sobre latencia sacádica, compensación de deslizamiento retiniano y readquisición del seguimiento ante quiebres bruscos (Bahill et al., 1980; Rashbass, 1961; Krauzlis, 2004; Barnes, 2008)."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
    { href: "/es/drills/visual-tracking/constant-slow-pursuit", label: "Seguimiento Ocular Lento" },
    { href: "/es/drills/visual-tracking/directional-chaos-pursuit", label: "Persecución Caótica Direccional" },
    { href: "/es/drills/visual-tracking/sine-wave-pursuit", label: "Seguimiento en Onda Sinusoidal" },
    { href: "/es/drills/visual-tracking/infinity-pursuit", label: "Seguimiento en Ocho" }
  ]
};

export default function DynamicEvasionPursuitPageEs() {
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
      <DynamicEvasionPursuitClient
        copy={{
          title: "Seguimiento Ocular Reactivo – Objetivo Móvil",
          subtitle: "Entrenamiento de Refijación Foveal y Reacción a Quiebres Bruscos",
          description: "Al intercalar trayectorias lineales con giros repentinos e imprevistos, este ejercicio impide la predicción automática del cerebelo. El sistema oculomotor se ve obligado a reaccionar en circuito cerrado, disparando microsacadas de alta velocidad para centrar el blanco en la fóvea (Bahill et al., 1980; Krauzlis, 2004)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
