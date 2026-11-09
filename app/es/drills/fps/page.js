import FPSHubClient from '@/app/drills/fps/FPSHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');

export const metadata = {
  title: 'Entrenamiento de puntería FPS | SkillDrills',
  description: 'Entrenamiento de puntería FPS gratis (aim training): 15 ejercicios para Valorant, CS2 y Apex con flicks, tracking, control de retroceso y reflejos.',
  keywords: [
    'entrenamiento de puntería', 'mejorar puntería FPS', 'aim training',
    'puntería Valorant', 'puntería CS2', 'ejercicios de flicks',
    'tracking de puntería', 'colocación de la mira', 'sensibilidad ratón shooter',
    'entrenar puntería', 'control de retroceso', 'apuntar con brazo o muñeca',
    'microajustes de puntería', 'eDPI shooter', 'aim training gratis'
  ],
  openGraph: {
    title: 'Entrenamiento de puntería FPS | SkillDrills',
    description: 'Entrenamiento de puntería FPS gratis (aim training): 15 ejercicios para Valorant, CS2 y Apex con flicks, tracking, control de retroceso y reflejos.',
    type: 'website',
    url: 'https://skilldrills.online/es/drills/fps',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Aim Trainer FPS Online' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Entrenamiento de puntería FPS | SkillDrills',
    description: 'Entrenamiento de puntería FPS (aim training): 15 ejercicios gratis para Valorant, CS2 y Apex en tu navegador.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/fps',
    languages: getAlternateLanguages('/es/drills/fps'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Directorio de Ejercicios", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Puntería FPS", "item": "https://skilldrills.online/es/drills/fps" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-09",
  "name": "Entrenamiento de puntería FPS (15 ejercicios)",
  "url": "https://skilldrills.online/es/drills/fps",
  "description": `Entrenamiento de puntería FPS (aim training): 15 ejercicios gratis para Valorant, CS2 y Apex: flicks, tracking, control de retroceso, cambio de objetivos y reflejos en tu navegador.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": fpsDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'es', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/es${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo se transfiere el entrenamiento de puntería en navegador a shooters tácticos como Valorant y CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "En Valorant y CS2 los primeros disparos suelen decidir el duelo, así que la precisión del primer tiro y los pequeños ajustes importan mucho. Una partida de Deathmatch tiene tiempos de reaparición y desplazamiento, mientras que el entrenamiento de puntería en el navegador repite muchos más flicks y frenadas precisas en poco tiempo. Con un movimiento más constante queda más atención para la colocación de la mira y la lectura de la partida. La transferencia varía según el jugador, así que compara también tus resultados en el juego."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es la diferencia entre Click Timing (Flicks), Tracking y Cambio de Objetivo (Target Switching)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La mecánica de disparo en videojuegos FPS se divide en tres pilares: 1) Click Timing / Flicks: mover el ratón velozmente hacia un objetivo e interceptar la hitbox con un clic exacto, vital para armas de un solo toque como Vandal o AK-47. 2) Tracking (Seguimiento continuo): mantener la retícula sincronizada con la trayectoria de un enemigo en movimiento continuo, fundamental para el fuego automático en Apex Legends y Overwatch 2. 3) Target Switching: alternar la mira entre múltiples objetivos a máxima velocidad con mínimo tiempo de transición, esencial en situaciones de clutch y desventaja numérica."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es mejor apuntar con la muñeca, con el antebrazo o usar una técnica híbrida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muchos jugadores usan una técnica híbrida: antebrazo y hombro para los movimientos amplios y los giros de 180 grados, la muñeca para las distancias medias y los dedos para los pequeños ajustes a la altura de la cabeza. Apuntar solo con la muñeca limita el recorrido, y apuntar solo con el brazo dificulta los ajustes muy pequeños. Elige lo que te resulte cómodo y descansa si notas dolor."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo encontrar la sensibilidad y distancia de giro (cm/360) óptima en el ratón?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La sensibilidad se mide de forma estandarizada en centímetros por giro de 360 grados (cm/360). En shooters tácticos (Valorant, CS2), una sensibilidad baja de 35 a 55 cm/360 (eDPI de 200 a 320) otorga la máxima estabilidad en microcorrecciones. En shooters de arena con mucho tracking (Apex Legends, Overwatch 2), una sensibilidad media de 24 a 38 cm/360 equilibra giros rápidos y suavidad de seguimiento. La sensibilidad ideal es aquella que te permite hacer strafes laterales manteniendo la mira fija en un punto estático sin que la retícula tiemble."
      }
    },
    {
      "@type": "Question",
      "name": "¿Por qué tiembla mi puntería o sobrepasa el objetivo (overshooting) y cómo corregirlo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "El temblor y el exceso de recorrido (overshooting) suelen originarse por tensión muscular excesiva en el antebrazo, agarrar el ratón con demasiada fuerza o usar una sensibilidad que supera tu capacidad actual de control neuromuscular de frenado. Para resolverlo: 1) aprovecha la fricción de tu alfombrilla ejerciendo una ligera presión hacia abajo con la base de la palma y las yemas al detener el movimiento balístico; 2) practica ejercicios de seguimiento suave (smooth pursuit) para relajar la musculatura; y 3) reduce tu sensibilidad entre un 10% y un 15% para ampliar el margen de error."
      }
    },
    {
      "@type": "Question",
      "name": "¿Un aim trainer en navegador es tan rápido y sensible como un software descargable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para entrenar, en gran medida sí. SkillDrills dibuja en un Canvas HTML5 y usa la API Pointer Lock del navegador, que oculta el cursor y entrega el movimiento relativo del ratón (movementX/movementY), de modo que los flicks largos no se detienen en el borde de la pantalla. El movimiento de los objetivos se calcula con el tiempo transcurrido y no con el número de fotogramas, así que los ejercicios se comportan igual en pantallas de 144 Hz, 240 Hz o 360 Hz. La entrada del navegador sigue pasando por los ajustes de puntero del sistema operativo: mantén el DPI, la sensibilidad y la aceleración del ratón sin cambios entre sesiones cuando compares resultados."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es más determinante en partida: la colocación de la mira (pre-aim) o el flick reactivo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Una buena colocación de la mira (dejarla a la altura de la cabeza donde va a aparecer el rival) ayuda con más frecuencia, porque casi evita los flicks grandes. Pero ante off-angles inesperados, picos abiertos o varios enemigos a la vez, el pre-aim no basta y deciden la velocidad del flick y los microajustes. Entrena ambas cosas por separado: la colocación en Colocación de Mira y los flicks en el ejercicio de flicks."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cuántos minutos al día se debe practicar puntería para progresar de manera óptima?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Las sesiones cortas y concentradas son más fáciles de mantener que las maratones de varias horas. Un buen punto de partida son 15 a 25 minutos varias veces por semana, parando cuando baje la precisión o se canse la mano. No hay una duración ideal que sirva para todos; ajústala según tus propios resultados."
      }
    }
  ]
};

export default function SpanishFPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

