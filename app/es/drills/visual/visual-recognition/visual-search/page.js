import VisualSearchClient from '@/app/drills/visual/visual-recognition/visual-search/VisualSearchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/es/drills/visual/visual-recognition/visual-search";
const TITLE = "Búsqueda Visual – juego de encontrar la letra | SkillDrills";
const DESCRIPTION = "Búsqueda visual gratis en el navegador: encuentra en 45 segundos, tantas veces como puedas, el carácter objetivo oculto entre 95 caracteres parecidos y girados.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "búsqueda visual",
    "juego de encontrar la letra",
    "tarea de búsqueda visual",
    "búsqueda conjuntiva",
    "escaneo visual",
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: URL,
    siteName: "SkillDrills",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/visual-search', 'es'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es/" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento Visual", "item": "https://skilldrills.online/es/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconocimiento Visual", "item": "https://skilldrills.online/es/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Búsqueda Visual", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Búsqueda Visual",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION,
  "url": URL,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo funciona la búsqueda visual",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Mira el carácter objetivo", "text": "Arriba, \"FIND\" muestra el carácter que hay que buscar, por ejemplo C, E, P o 6." },
    { "@type": "HowToStep", "position": 2, "name": "Recorre la cuadrícula", "text": "La cuadrícula tiene 12 × 8 = 96 casillas: un único objetivo y 95 distractores parecidos, todos girados al azar 0, 90, 180 o 270 grados." },
    { "@type": "HowToStep", "position": 3, "name": "Haz clic en el objetivo", "text": "Haz clic o toca el objetivo. Enseguida aparece una cuadrícula nueva con un carácter objetivo nuevo." },
    { "@type": "HowToStep", "position": 4, "name": "Aguanta 45 segundos", "text": "La ronda dura 45 segundos fijos. Cada objetivo encontrado vale 150 puntos." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona la búsqueda visual?",
      "acceptedAnswer": { "@type": "Answer", "text": "Arriba se muestra un carácter objetivo. Aparece una sola vez en la cuadrícula de 12 × 8, entre 95 distractores parecidos (por ejemplo C entre O, Q y G). Al hacer clic en él sale una cuadrícula nueva con un objetivo nuevo. Cada ronda dura 45 segundos." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se puntúa?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cada objetivo encontrado vale 150 puntos. Cada 750 puntos (5 objetivos) sube el nivel mostrado; la cuadrícula sigue teniendo 96 casillas. Al final ves la puntuación, la precisión, el nivel máximo y los objetivos encontrados." }
    },
    {
      "@type": "Question",
      "name": "¿Los clics erróneos restan?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La casilla equivocada se pone roja un instante, sin quitar puntos ni tiempo. Solo baja la precisión del resultado." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué están girados los caracteres?",
      "acceptedAnswer": { "@type": "Answer", "text": "Objetivo y distractores comparten curvas y trazos, y el giro aleatorio impide que los distractores formen una textura uniforme. Así el objetivo no salta a la vista y hay que revisar casilla por casilla. La búsqueda es más lenta cuanto más se parece el objetivo a los distractores (Duncan & Humphreys, 1989)." }
    },
    {
      "@type": "Question",
      "name": "¿Qué diferencia hay entre búsqueda por rasgo y búsqueda conjuntiva?",
      "acceptedAnswer": { "@type": "Answer", "text": "Un objetivo que se diferencia por un solo rasgo, como el color, salta a la vista sin importar cuántos distractores haya. Cuando hay que combinar varios rasgos, la búsqueda se hace más lenta con cada distractor añadido (Treisman & Gelade, 1980; Wolfe, 1994)." }
    },
    {
      "@type": "Question",
      "name": "¿Es un examen de la vista o un test psicológico?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Es un juego de práctica gratis en el navegador, no un examen de la vista ni un test psicológico estandarizado. Compara tu puntuación solo con tus propias rondas anteriores." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo encontrar el objetivo más rápido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Memoriza la forma del objetivo antes de buscar y recorre la cuadrícula fila por fila o por cuadrantes en lugar de saltar al azar. Así no revisas ninguna casilla dos veces." }
    }
  ]
};

export default function VisualSearchLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <VisualSearchClient copy={{ title: "Búsqueda Visual", subtitle: "Encuentra un carácter entre 95 distractores" }} />
      <DrillGuide
        eyebrow="Búsqueda visual"
        title="Búsqueda Visual: reglas, puntos y consejos"
        sources={sources}
      >
        <p>Esta <strong>búsqueda visual</strong> es un juego gratis de encontrar la letra en el navegador: una cuadrícula de 12 × 8 muestra 96 caracteres girados y solo uno es el objetivo. Tienes 45 segundos para encontrarlo tantas veces como puedas. Tras cada acierto cambian la cuadrícula y el carácter objetivo.</p>

        <h3>Qué pasa en la cuadrícula</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Distractores parecidos:</strong> cada objetivo tiene tres dobles, por ejemplo C entre O, Q y G, E entre F, L y P, o 6 entre 8, 9 y 0.</li>
          <li><strong>Giro aleatorio:</strong> todos los caracteres, también el objetivo, están girados 0, 90, 180 o 270 grados.</li>
          <li><strong>Tiempo fijo:</strong> 45 segundos, sin bonificación ni descuento de tiempo.</li>
          <li><strong>Control:</strong> ratón o pantalla táctil, un clic o toque en la casilla.</li>
        </ul>

        <h3>Por qué se revisa casilla por casilla</h3>
        <p>La psicología de la percepción distingue la búsqueda por rasgo, en la que el objetivo salta a la vista, de la búsqueda conjuntiva, en la que hay que combinar rasgos y examinar los elementos uno a uno (Treisman &amp; Gelade, 1980; Wolfe, 1994). Cuanto más se parece el objetivo a los distractores y más variados son estos, más lenta es la búsqueda (Duncan &amp; Humphreys, 1989). Esta cuadrícula usa justo eso: formas parecidas y giro aleatorio.</p>

        <h3>Niveles de práctica SkillDrills (45 segundos)</h3>
        <p>Estos niveles son referencias propias de SkillDrills para esta cuadrícula, no normas científicas.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Nivel</th>
                <th className="py-2.5 px-3 font-semibold">Objetivos</th>
                <th className="py-2.5 px-3 font-semibold">Puntos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Inicial</td><td className="py-2.5 px-3 tabular-nums">0–3</td><td className="py-2.5 px-3 tabular-nums">0–450</td></tr>
              <tr><td className="py-2.5 px-3">Sólido</td><td className="py-2.5 px-3 tabular-nums">4–6</td><td className="py-2.5 px-3 tabular-nums">600–900</td></tr>
              <tr><td className="py-2.5 px-3">Fuerte</td><td className="py-2.5 px-3 tabular-nums">7–9</td><td className="py-2.5 px-3 tabular-nums">1.050–1.350</td></tr>
              <tr><td className="py-2.5 px-3">Top</td><td className="py-2.5 px-3 tabular-nums">10+</td><td className="py-2.5 px-3 tabular-nums">1.500+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Consejos</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Memoriza el objetivo:</strong> fíjate en el detalle que lo separa de sus dobles, como la abertura de la C o el trazo de la G.</li>
          <li><strong>Recorre con método:</strong> fila por fila o por cuadrantes, para no revisar ninguna casilla dos veces.</li>
          <li><strong>Haz clic con calma:</strong> fallar no cuesta tiempo, pero baja la precisión.</li>
        </ol>

        <h3>Preguntas frecuentes (FAQ)</h3>
        <div className="space-y-4 my-6">
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name}>
              <h4 className="font-semibold text-white">{q.name}</h4>
              <p className="text-slate-300 mt-1">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
