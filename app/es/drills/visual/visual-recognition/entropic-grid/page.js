import EntropicGridClient from '@/app/drills/visual/visual-recognition/entropic-grid/EntropicGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/es/drills/visual/visual-recognition/entropic-grid";
const TITLE = "Concentración en Cuadrícula – escaneo visual | SkillDrills";
const DESCRIPTION = "Concentración en cuadrícula: en 45 segundos, haz clic en cada copia del código objetivo en una cuadrícula 10 × 10 de códigos de dos caracteres que cambia.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "concentración en cuadrícula",
    "escaneo visual",
    "test de concentración visual",
    "encontrar el código",
    "cuadrícula de códigos",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/entropic-grid', 'es'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es/" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento Visual", "item": "https://skilldrills.online/es/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconocimiento Visual", "item": "https://skilldrills.online/es/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Concentración en Cuadrícula", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Concentración en Cuadrícula",
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
  "name": "Cómo funciona la concentración en cuadrícula",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Lee el código objetivo", "text": "Arriba, bajo \"FIND TARGET CODE\", aparece un código de dos caracteres con letras y números, por ejemplo K7." },
    { "@type": "HowToStep", "position": 2, "name": "Recorre la cuadrícula", "text": "La cuadrícula 10 × 10 tiene 100 códigos de dos caracteres; el código objetivo aparece al menos dos veces." },
    { "@type": "HowToStep", "position": 3, "name": "Haz clic en cada copia", "text": "Cada copia encontrada vale 150 puntos. Cuando encuentras todas, salen un código nuevo y una cuadrícula nueva." },
    { "@type": "HowToStep", "position": 4, "name": "Aguanta 45 segundos", "text": "Cada 700 ms tres casillas distractoras cambian de código, y el código objetivo cambia como máximo cada 12 segundos." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona la concentración en cuadrícula?",
      "acceptedAnswer": { "@type": "Answer", "text": "Arriba aparece un código objetivo de dos caracteres. Está en varios sitios entre los 100 códigos de la cuadrícula 10 × 10; haz clic en cada copia. Cuando las encuentras todas o pasan 12 segundos, llegan un código nuevo y una cuadrícula nueva. Cada ronda dura 45 segundos." }
    },
    {
      "@type": "Question",
      "name": "¿Es el test d2, el Toulouse-Piéron o un psicotécnico?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Es un ejercicio gratis en el navegador, sin relación con tests psicológicos oficiales como el d2 o el Toulouse-Piéron y sin baremo. Sirve para practicar la búsqueda visual y compararte con tus propias rondas." }
    },
    {
      "@type": "Question",
      "name": "¿Cuántas copias del código objetivo hay?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dos al principio. El número sube con el nivel: tres desde el nivel 3, cuatro desde el nivel 6, cinco desde el nivel 9 y como máximo seis desde el nivel 12." }
    },
    {
      "@type": "Question",
      "name": "¿Por qué cambia la cuadrícula todo el tiempo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cada 700 milisegundos, tres casillas distractoras al azar reciben un código nuevo. Las copias del código objetivo no se mueven. Así no se puede memorizar la cuadrícula." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo se puntúa?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cada copia encontrada vale 150 puntos y el nivel sube cada 750 puntos (5 copias). Al final ves la puntuación, la precisión, el nivel máximo y las copias encontradas." }
    },
    {
      "@type": "Question",
      "name": "¿Los clics erróneos restan?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La casilla equivocada se pone roja un instante, sin quitar puntos ni tiempo. Solo baja la precisión." }
    },
    {
      "@type": "Question",
      "name": "¿Cómo encontrar los códigos más rápido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Memoriza el código como una pareja, no como dos caracteres sueltos, y recorre la cuadrícula por cuadrantes o fila por fila. Como los distractores cambian, memorizar posiciones no sirve." }
    }
  ]
};

export default function EntropicGridLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <EntropicGridClient copy={{ title: "Concentración en Cuadrícula", subtitle: "Encuentra el código objetivo en una cuadrícula de 100 casillas que cambia" }} />
      <DrillGuide
        eyebrow="Búsqueda visual en cuadrícula"
        title="Concentración en cuadrícula: reglas, puntos y consejos"
        sources={sources}
      >
        <p>La <strong>concentración en cuadrícula</strong> es un ejercicio gratis en el navegador: en una cuadrícula 10 × 10 de 100 códigos de dos caracteres, haces clic en cada copia del código objetivo. La ronda dura 45 segundos y la cuadrícula nunca queda igual, porque los distractores cambian sin parar. Funciona con ratón o pantalla táctil.</p>

        <h3>Qué pasa en la cuadrícula</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Código objetivo:</strong> dos caracteres entre letras (sin I ni O) y los números 2 a 9.</li>
          <li><strong>Varias copias:</strong> dos al principio, hasta seis a la vez según el nivel.</li>
          <li><strong>Ruido:</strong> cada 700 ms, tres casillas distractoras cambian de código.</li>
          <li><strong>Cambio de objetivo:</strong> código nuevo en cuanto encuentras todas las copias, como máximo a los 12 segundos.</li>
        </ul>

        <h3>Por qué la búsqueda cuesta</h3>
        <p>Un código de dos caracteres no se distingue de los distractores por un único rasgo llamativo, sino solo por la combinación de dos caracteres. Este tipo de búsqueda se hace más bien elemento a elemento (Treisman &amp; Gelade, 1980; Wolfe, 1994) y es más lenta cuanto más se parece el objetivo a los distractores (Duncan &amp; Humphreys, 1989). El ruido cambiante impide además apoyarse en posiciones memorizadas.</p>

        <h3>Niveles de práctica SkillDrills (45 segundos)</h3>
        <p>Estos niveles son referencias propias de SkillDrills para esta cuadrícula, no normas científicas.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Nivel</th>
                <th className="py-2.5 px-3 font-semibold">Copias</th>
                <th className="py-2.5 px-3 font-semibold">Puntos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Inicial</td><td className="py-2.5 px-3 tabular-nums">0–2</td><td className="py-2.5 px-3 tabular-nums">0–300</td></tr>
              <tr><td className="py-2.5 px-3">Sólido</td><td className="py-2.5 px-3 tabular-nums">3–4</td><td className="py-2.5 px-3 tabular-nums">450–600</td></tr>
              <tr><td className="py-2.5 px-3">Fuerte</td><td className="py-2.5 px-3 tabular-nums">5–6</td><td className="py-2.5 px-3 tabular-nums">750–900</td></tr>
              <tr><td className="py-2.5 px-3">Top</td><td className="py-2.5 px-3 tabular-nums">7+</td><td className="py-2.5 px-3 tabular-nums">1.050+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Consejos</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Lee el código como pareja:</strong> busca la secuencia de dos caracteres, no una letra suelta.</li>
          <li><strong>Recorre por cuadrantes:</strong> revisa la cuadrícula cuadrante a cuadrante en lugar de saltar al azar.</li>
          <li><strong>Sigue tras acertar:</strong> casi siempre queda otra copia del mismo código.</li>
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
