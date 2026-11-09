import AimTrainerClient from '@/app/drills/motor/hand-eye-coordination/aim-trainer/AimTrainerClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native research: entrenamiento de puntería, aim trainer online, entrenador de puntería,
// test de puntería, precisión del ratón, entrenamiento de flick, puntería FPS,
// calentamiento de puntería, adquisición de objetivos, puntería Valorant y puntería CS2.
// ============================================================

export const metadata = {
  title: "Aim Trainer Online Gratis | Precisión del Ratón | SkillDrills",
  description: "Aim trainer online gratis: haz clic en dos objetivos en movimiento antes de que desaparezcan y mide la precisión del ratón y tu tasa de acierto. Sin descargas.",
  keywords: ['aim trainer', 'aim trainer online', 'aim trainer gratis', 'precisión del ratón', 'calentamiento de puntería'],
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/aim-trainer'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Aim Trainer Online Gratis | Precisión del Ratón | SkillDrills',
    description: 'Aim trainer gratis en el navegador: dos objetivos en movimiento, precisión del ratón y tasa de acierto.',
    url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Aim Trainer Online Gratis | Precisión del Ratón | SkillDrills',
    description: 'Aim trainer online: haz clic en los objetivos antes de que desaparezcan y mide tu precisión.',
  },
  robots: { index: true, follow: true },
};

// --- Structured Data Schemas ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Inicio', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Centro de Ejercicios', item: 'https://skilldrills.online/es/drills' },
    { '@type': 'ListItem', position: 3, name: 'Control Motor & Precisión', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 4, name: 'Coordinación Ojo-Mano', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 5, name: 'Aim Trainer Online', item: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'es-ES',
  name: 'Aim Trainer Online Gratis',
  alternateName: ['Aim Trainer', 'Aim Trainer Online', 'Test de Puntería'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description:
    'Aim trainer gratuito en el navegador: haz clic en dos objetivos en movimiento antes de que desaparezcan.',
  browserRequirements: 'Navegador moderno con soporte para JavaScript y Pointer Lock (Chrome, Firefox, Safari, Edge)',
  softwareVersion: '2.0',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'es-ES',
  name: 'Aim Trainer Online Gratis | SkillDrills',
  url: 'https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer',
  description:
    'Aim trainer con objetivos en movimiento que se vuelven más pequeños y rápidos en cada nivel.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador moderno con soporte para JavaScript y Pointer Lock.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Educational Game',
  teaches: 'Puntería con ratón, micro-flicks, control visomotor, reflejos rápidos, cadencia de disparo',
};


const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "es-ES",
  "name": "Aim Trainer Online",
  "url": "https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "Aim trainer 2D gratuito en el navegador: haz clic en objetivos en movimiento y mide tu precisión con el ratón.",
  "dateModified": "2026-11-09",
  "gamePlatform": "Web Browser",
  "genre": ["Aim Trainer", "FPS Training", "Hand-Eye Coordination"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  name: 'Cómo entrenar la puntería con el ratón en el navegador',
  description: 'Guía paso a paso para maximizar tu puntería y reflejos con el Aim Trainer de SkillDrills.',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer#step-1",
      
      name: 'Iniciar el Entrenamiento',
      text: 'Pulsa "Iniciar Entrenamiento": el cursor se bloquea (Pointer Lock) y, tras 3 segundos de cuenta atrás, el reloj arranca en 45 segundos. Esc termina la partida en cualquier momento.',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer#step-2",
      
      name: 'Adquisición Visual del Objetivo',
      text: 'Siempre hay dos objetivos en pantalla. Se mueven en direcciones aleatorias, rebotan en los bordes y desaparecen al poco tiempo.',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer#step-3",
      
      name: 'Micro-Flick y Disparo Preciso',
      text: 'Pon la mira sobre un objetivo y haz clic. Un acierto da puntos y +2 s (máximo 60 s); un clic fallido o un objetivo perdido reinicia el combo y resta 1 s.',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/es/drills/motor/hand-eye-coordination/aim-trainer#step-4",
      
      name: 'Mantener Combo y Superar Niveles',
      text: 'Los aciertos seguidos suben el multiplicador hasta 3,0×. El nivel sube cada 1.750 puntos y la partida termina cuando el reloj llega a 0.',
    },
  ],
};

const faqs = [
  {
    q: "¿Qué es un Aim Trainer y cómo funciona este?",
    a: "Un aim trainer mide la rapidez y precisión con que haces clic en objetivos con el ratón. Aquí siempre hay dos objetivos en movimiento. El reloj empieza en 45 segundos: cada acierto suma +2 s (máximo 60 s), cada clic fallido u objetivo perdido resta 1 s, y la partida termina en 0. Gratis, sin descargas ni registro.",
  },
  {
    q: "¿Cómo se calcula la puntuación?",
    a: "Cada acierto vale 100 puntos multiplicados por el combo (1,1× desde 3 aciertos seguidos hasta 3,0× desde 50) y por un bonus de nivel. Un clic fallido o un objetivo perdido reinicia el combo.",
  },
  {
    q: "¿Cómo aumenta la dificultad?",
    a: "El nivel sube cada 1.750 puntos, sin límite. Hasta el nivel 15, el radio del objetivo baja de 26 px a 12 px (hasta 8 px con combo alto), la velocidad sube de 80 px/s a 370 px/s y el tiempo de vida de cada objetivo baja de 2,8 s a 0,4 s.",
  },
  {
    q: "¿Qué pasa cuando fallo?",
    a: "El combo vuelve a 1,0× y pierdes 1 segundo. Hacer clic sin parar no compensa.",
  },
  {
    q: "¿Cómo se aplica la Ley de Fitts a este aim trainer?",
    a: "La Ley de Fitts relaciona el tiempo de movimiento con la razón entre distancia y tamaño del objetivo (Índice de Dificultad). Como los objetivos se hacen más pequeños en cada nivel, el índice sube y el ratón necesita un control más fino.",
  },
  {
    q: "¿Este aim trainer ayuda en Valorant o CS2?",
    a: "Puede servir como calentamiento complementario. Entrena clics rápidos sobre objetivos 2D en movimiento, no la puntería 3D de un juego; no se garantiza mejora dentro del juego.",
  },
  {
    q: "¿Qué es una buena puntuación en el Aim Trainer?",
    a: "Según los rangos editoriales de SkillDrills: menos de 8.000 puntos inicial, 8.000–17.999 en proceso, 18.000–31.999 estable, 32.000–47.999 alto y 48.000 o más el rango más alto. Son referencias de práctica, no estadísticas de usuarios.",
  },
  {
    q: "¿Puedo ajustar la sensibilidad del ratón?",
    a: "Sí, con el multiplicador de sensibilidad en los ajustes de los ejercicios. No hay conversión automática de tu cm/360 del juego; ajústala a tu sensación.",
  },
  {
    q: "¿Funciona en el móvil o en pantallas táctiles?",
    a: "No. El aim trainer usa Pointer Lock y necesita un ratón en un navegador de ordenador.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-11-09',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AimTrainerSpanishPage() {
  const sources = pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <AimTrainerClient
        copy={{
          title: 'Aim Trainer Online',
          subtitle: 'Dos objetivos en movimiento • Precisión del ratón • Tasa de acierto',
          caption: 'Haz clic en los dos objetivos en movimiento antes de que desaparezcan. Acierto +2 s, fallo u objetivo perdido -1 s.',
          startButtonText: 'INICIAR ENTRENAMIENTO',
          playAgainText: 'Jugar de Nuevo',
          shareText: 'Compartir Puntuación',
          exitText: 'Salir',
          rulesTitle: 'Instrucciones & Sistema de Puntuación',
          aboutTitle: 'Sobre Aim Trainer Elite',
          rulesItems: [
            {
              num: "1",
              text: "Impacto al Blanco",
              highlight: "+100 PTS / +2 s (máx. 60 s)",
              result: "× multiplicador de combo"
            },
            {
              num: "2",
              text: "Combo Continuo",
              highlight: "Hasta 3,0× Multiplicador",
              result: "Encadena aciertos limpios sin fallar"
            },
            {
              num: "3",
              text: "Progresión de Nivel",
              highlight: "+1 Nivel / 1750 PTS",
              result: "Los blancos se reducen y aceleran"
            },
            {
              num: "4",
              text: "Fallo y Expiración",
              highlight: "Reinicio de Combo",
              result: "-1 s al reloj"
            }
          ]
        }}
      />

      <DrillGuide
        eyebrow="Psicofísica del Control Motor & Interacción Persona-Ordenador (IPO)"
        title="La Ciencia del Aim Training: Ley de Fitts y Precisión Visomotora en Shooters"
        sources={sources}
      >
        <p>
          El <strong>Aim Trainer</strong> de SkillDrills es gratis y funciona en el navegador: dos objetivos en movimiento que debes clicar antes de que desaparezcan. La adquisición de objetivos con ratón de ordenador es una de las tareas psicomotoras de coordinación fina más complejas investigadas en ergonomía e interacción persona-ordenador (IPO). Tanto al despejar esquinas en shooters tácticos como en simulaciones de precisión, el sistema neuromuscular humano debe traducir coordenadas visuales en microcontracciones físicas instantáneas de la mano, muñeca y antebrazo (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>La Ley de Fitts y el Índice de Dificultad (ID)</h3>
        <p>
          En 1954, Paul M. Fitts demostró que el tiempo de movimiento (\(MT\)) requerido para alcanzar un objetivo se modela matemáticamente por la distancia (\(D\)) y el ancho del objetivo (\(W\)):
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 my-3 text-center font-mono text-sm text-cyan-300">
          MT = a + b · log₂(2D / W) = a + b · ID
        </div>
        <p>
          Este factor logarítmico se denomina <strong>Índice de Dificultad (ID)</strong>. En el <em>Aim Trainer</em> de SkillDrills, el radio del objetivo baja de 26 a 12 píxeles hasta el nivel 15 (hasta 8 píxeles con un combo alto) y la velocidad aumenta; el menor ancho (\(W\)) eleva el ID (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>El Modelo de Dos Fases del Disparo Guiado (Woodworth 1899; Elliott et al. 2010)</h3>
        <p>
          Mover el ratón hacia un objetivo no es un movimiento plano y continuo. La evidencia neurofisiológica demuestra que consta de dos fases:
        </p>
        <ol className="list-decimal pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Impulso Balístico Inicial (Bucle Abierto):</strong> Una orden motora preprogramada que cubre el 80% al 90% de la trayectoria en 120–180 milisegundos, demasiado veloz para incorporar correcciones visuales en vuelo.
          </li>
          <li>
            <strong>Desaceleración Terminal y Control Fino (Bucle Cerrado):</strong> Cuando el retículo entra en el perímetro del objetivo, el sistema visual detecta el error retiniano y aplica microajustes milimétricos antes del clic.
          </li>
        </ol>
        <p>
          Los tiradores novatos suelen sufrir de <em>over-flicking</em> (pasarse de largo) o <em>under-flicking</em> (frenar antes de tiempo). Los mejores jugadores calibran el impulso para frenar exactamente sobre el blanco (Elliott et al., 2010; Woods et al., 2015).
        </p>

        <h3>Frecuencia de Muestreo, Refresco y Latencia Sensorial</h3>
        <p>
          La precisión milimétrica exige minimizar el retraso de hardware. Como señalaron Woods et al. (2015), los retrasos neuronales biológicos suman entre 130 y 190 ms. Pantallas de 144Hz o 240Hz reducen el tiempo entre cuadros a 6,9 ms o 4,1 ms. Compara tus partidas siempre con el mismo equipo y la misma configuración.
        </p>

        <h3>Rangos de Puntuación del Aim Trainer (referencia SkillDrills)</h3>
        <p>
          Rangos editoriales de SkillDrills para comparar tus propias partidas, que empiezan con 45 segundos (+2 s por acierto, máximo 60 s). No son datos de usuarios ni rangos de juegos:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left border-collapse border border-white/10 text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/5 text-slate-200">
                <th className="p-2.5 border border-white/10 font-bold">Nivel</th>
                <th className="p-2.5 border border-white/10 font-bold">Puntuación</th>
                <th className="p-2.5 border border-white/10 font-bold">Fase</th>
                <th className="p-2.5 border border-white/10 font-bold">Precisión</th>
                <th className="p-2.5 border border-white/10 font-bold">Perfil</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-emerald-400">Tier 1 (Élite)</td>
                <td className="p-2.5 border border-white/10">&gt; 48.000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 12+</td>
                <td className="p-2.5 border border-white/10">&gt; 95% (Combo 25+)</td>
                <td className="p-2.5 border border-white/10">Rango más alto de práctica</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-cyan-400">Tier 2 (Experto)</td>
                <td className="p-2.5 border border-white/10">32.000 – 47.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 9–11</td>
                <td className="p-2.5 border border-white/10">88% – 94% (Combo 18–24)</td>
                <td className="p-2.5 border border-white/10">Rango alto</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-blue-400">Tier 3 (Medio)</td>
                <td className="p-2.5 border border-white/10">18.000 – 31.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 6–8</td>
                <td className="p-2.5 border border-white/10">78% – 87% (Combo 12–17)</td>
                <td className="p-2.5 border border-white/10">Puntería estable</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-amber-400">Tier 4 (Básico)</td>
                <td className="p-2.5 border border-white/10">8.000 – 17.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 3–5</td>
                <td className="p-2.5 border border-white/10">65% – 77% (Combo 6–11)</td>
                <td className="p-2.5 border border-white/10">En Proceso / Errores Frecuentes</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-rose-400">Tier 5 (Inicial)</td>
                <td className="p-2.5 border border-white/10">&lt; 8.000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 1–2</td>
                <td className="p-2.5 border border-white/10">&lt; 65% (Combo &lt; 6)</td>
                <td className="p-2.5 border border-white/10">Puntería Inestable / Disparos Apresurados</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>4 Claves para un Entrenamiento Efectivo de Puntería</h3>
        <p>
          Para comprimir sistemáticamente la latencia de adquisición y maximizar la precisión en micro-flicks, aplique estos cuatro protocolos motores basados en la evidencia durante sus sesiones:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Flick Inicial Decidido (Woodworth, 1899):</strong> Recorre la mayor parte de la distancia en un solo movimiento fluido y sin titubeos.
          </li>
          <li>
            <strong>Frenado Terminal Estable (Fitts, 1954):</strong> Desacelera suavemente justo antes de hacer clic para evitar que el ratón rebote fuera del objetivo.
          </li>
          <li>
            <strong>Sensibilidad Homogénea (MacKenzie, 1992):</strong> Mantén la misma relación cm/360 en todos tus juegos para asentar la memoria muscular.
          </li>
          <li>
            <strong>Agarre Relajado (Woods et al., 2015):</strong> No tenses la mano ni aprietes el ratón al disparar; pulsar el botón debe ser un movimiento limpio e independiente.
          </li>
        </ul>

        <h3>Preguntas Frecuentes (FAQ)</h3>
        <div className="space-y-4 my-4">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-3">
              <h4 className="font-bold text-white text-sm mb-1">{f.q}</h4>
              <p className="text-xs sm:text-sm text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
