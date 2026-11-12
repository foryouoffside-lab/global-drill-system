import VisualSearchClient from '@/app/drills/visual/visual-recognition/visual-search/VisualSearchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/de/drills/visual/visual-recognition/visual-search";
const TITLE = "Visuelle Suche Test – Zeichen finden | SkillDrills";
const DESCRIPTION = "Visuelle Suche Test im Browser: Finde in 45 Sekunden so oft wie möglich das eine Zielzeichen zwischen 95 gedrehten, ähnlichen Ablenkern. Kostenlos.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "visuelle Suche Test",
    "visuelle Suche",
    "Buchstaben finden",
    "Zeichen finden",
    "Konjunktionssuche",
    "visuelles Scanning",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/visual-search', 'de'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de/" },
    { "@type": "ListItem", "position": 2, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Visuelle Erkennung", "item": "https://skilldrills.online/de/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Visuelle Suche Test", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": ["https://en.wikipedia.org/wiki/Visual_search"],
  "name": "Visuelle Suche Test",
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
  "name": "So funktioniert der Visuelle Suche Test",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Zielzeichen merken", "text": "Oben steht „FIND“ mit dem gesuchten Zeichen, zum Beispiel C, E, P oder 6." },
    { "@type": "HowToStep", "position": 2, "name": "Raster absuchen", "text": "Das Raster hat 12 × 8 = 96 Zellen: genau ein Zielzeichen und 95 ähnliche Ablenker, alle zufällig um 0, 90, 180 oder 270 Grad gedreht." },
    { "@type": "HowToStep", "position": 3, "name": "Ziel anklicken", "text": "Klicke oder tippe auf das Zielzeichen. Danach erscheint sofort ein neues Raster mit einem neuen Zielzeichen." },
    { "@type": "HowToStep", "position": 4, "name": "45 Sekunden durchhalten", "text": "Die Runde dauert fest 45 Sekunden. Jeder Fund bringt 150 Punkte." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert der Visuelle Suche Test?",
      "acceptedAnswer": { "@type": "Answer", "text": "Oben wird ein Zielzeichen angezeigt. Im 12 × 8-Raster steht es genau einmal zwischen 95 ähnlichen Ablenkern (z. B. C zwischen O, Q und G). Du klickst es an, dann folgt sofort ein neues Raster mit neuem Ziel. Eine Runde dauert 45 Sekunden." }
    },
    {
      "@type": "Question",
      "name": "Wie wird gepunktet?",
      "acceptedAnswer": { "@type": "Answer", "text": "Jeder Fund bringt 150 Punkte. Alle 750 Punkte (5 Funde) steigt die Level-Anzeige; das Raster bleibt dabei 96 Zellen groß. Am Ende siehst du Punktzahl, Trefferquote, höchstes Level und Anzahl der Funde." }
    },
    {
      "@type": "Question",
      "name": "Gibt es Strafen für Fehlklicks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nein. Ein Fehlklick färbt die Zelle kurz rot, kostet aber weder Punkte noch Zeit. Er senkt nur die Trefferquote in der Auswertung." }
    },
    {
      "@type": "Question",
      "name": "Warum sind die Zeichen gedreht?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ziel und Ablenker teilen Rundungen und Striche, und die zufällige Drehung verhindert, dass die Ablenker eine gleichmäßige Textur bilden. So springt das Ziel nicht heraus, und du musst das Raster Zelle für Zelle prüfen. Suche wird langsamer, je ähnlicher Ziel und Ablenker sind (Duncan & Humphreys, 1989)." }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Merkmalssuche und Konjunktionssuche?",
      "acceptedAnswer": { "@type": "Answer", "text": "Unterscheidet sich ein Ziel durch ein einziges Merkmal, etwa eine Farbe, springt es fast sofort ins Auge, egal wie viele Ablenker es gibt. Muss man mehrere Merkmale kombinieren, wird die Suche mit jedem zusätzlichen Ablenker langsamer (Treisman & Gelade, 1980; Wolfe, 1994)." }
    },
    {
      "@type": "Question",
      "name": "Ist das ein Sehtest oder ein psychologischer Aufmerksamkeitstest?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nein. Es ist ein kostenloses Übungsspiel im Browser, kein Sehtest und kein normierter Test. Die Punktzahl lässt sich nur mit deinen eigenen früheren Runden vergleichen." }
    },
    {
      "@type": "Question",
      "name": "Wie finde ich das Ziel schneller?",
      "acceptedAnswer": { "@type": "Answer", "text": "Präge dir die Form des Zielzeichens ein, bevor du suchst, und gehe das Raster Zeile für Zeile oder in Vierteln durch, statt kreuz und quer zu springen. So prüfst du keine Zelle doppelt." }
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
      <VisualSearchClient copy={{ title: "Visuelle Suche Test", subtitle: "Ein Zielzeichen zwischen 95 Ablenkern finden" }} />
      <DrillGuide
        eyebrow="Visuelle Suche"
        title="Visuelle Suche Test: Ablauf, Punkte und Tipps"
        sources={sources}
      >
        <p>Der <strong>Visuelle Suche Test</strong> ist eine kostenlose Übung im Browser: Ein 12 × 8-Raster zeigt 96 gedrehte Zeichen, darunter genau ein Zielzeichen. Du hast 45 Sekunden, um es so oft wie möglich zu finden. Nach jedem Fund wechseln Raster und Zielzeichen.</p>

        <h3>Was im Raster passiert</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Ähnliche Ablenker:</strong> Jedes Ziel hat drei Doppelgänger, etwa C zwischen O, Q und G, E zwischen F, L und P oder 6 zwischen 8, 9 und 0.</li>
          <li><strong>Zufällige Drehung:</strong> Alle Zeichen, auch das Ziel, sind um 0, 90, 180 oder 270 Grad gedreht.</li>
          <li><strong>Feste Zeit:</strong> 45 Sekunden, ohne Zeitbonus und ohne Zeitabzug.</li>
          <li><strong>Eingabe:</strong> Maus oder Touch, ein Klick beziehungsweise Tipp auf die Zelle.</li>
        </ul>

        <h3>Warum die Suche Zelle für Zelle läuft</h3>
        <p>In der Wahrnehmungspsychologie unterscheidet man Merkmalssuche, bei der ein Ziel sofort heraussticht, von Konjunktionssuche, bei der man Merkmale kombinieren und die Elemente nacheinander prüfen muss (Treisman &amp; Gelade, 1980; Wolfe, 1994). Je ähnlicher Ziel und Ablenker sind und je uneinheitlicher die Ablenker wirken, desto langsamer wird die Suche (Duncan &amp; Humphreys, 1989). Genau das nutzt dieses Raster: gleiche Grundformen, zufällige Drehung.</p>

        <h3>SkillDrills-Übungsstufen (45 Sekunden)</h3>
        <p>Die Stufen sind Orientierungswerte von SkillDrills für dieses Raster, keine wissenschaftlichen Normen.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Übungsstufe</th>
                <th className="py-2.5 px-3 font-semibold">Funde</th>
                <th className="py-2.5 px-3 font-semibold">Punkte</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Einstieg</td><td className="py-2.5 px-3 tabular-nums">0–3</td><td className="py-2.5 px-3 tabular-nums">0–450</td></tr>
              <tr><td className="py-2.5 px-3">Solide</td><td className="py-2.5 px-3 tabular-nums">4–6</td><td className="py-2.5 px-3 tabular-nums">600–900</td></tr>
              <tr><td className="py-2.5 px-3">Stark</td><td className="py-2.5 px-3 tabular-nums">7–9</td><td className="py-2.5 px-3 tabular-nums">1.050–1.350</td></tr>
              <tr><td className="py-2.5 px-3">Top</td><td className="py-2.5 px-3 tabular-nums">10+</td><td className="py-2.5 px-3 tabular-nums">1.500+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Tipps</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Ziel kurz einprägen:</strong> Achte auf das Merkmal, das es von den Doppelgängern trennt, etwa die Öffnung beim C oder den Querstrich beim G.</li>
          <li><strong>Systematisch scannen:</strong> Zeile für Zeile oder in Vierteln, damit keine Zelle doppelt geprüft wird.</li>
          <li><strong>Ruhig klicken:</strong> Fehlklicks kosten keine Zeit, senken aber die Trefferquote.</li>
        </ol>

        <h3>Häufig gestellte Fragen (FAQ)</h3>
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
