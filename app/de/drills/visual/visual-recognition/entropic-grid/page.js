import EntropicGridClient from '@/app/drills/visual/visual-recognition/entropic-grid/EntropicGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/de/drills/visual/visual-recognition/entropic-grid";
const TITLE = "Codes im Raster finden – visuelles Suchspiel | SkillDrills";
const DESCRIPTION = "Codes im Raster finden: Klicke in 45 Sekunden jede Kopie des Zielcodes in einem 10 × 10-Raster aus zweistelligen Codes, während sich Ablenker ständig ändern.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Codes im Raster finden",
    "Suchraster",
    "visuelles Abtasten",
    "Suchspiel online",
    "Zeichencode finden",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/entropic-grid', 'de'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de/" },
    { "@type": "ListItem", "position": 2, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Visuelle Erkennung", "item": "https://skilldrills.online/de/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Codes im Raster finden", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Codes im Raster finden",
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
  "name": "So funktioniert „Codes im Raster finden“",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Zielcode ablesen", "text": "Oben steht unter „FIND TARGET CODE“ ein zweistelliger Code aus Buchstaben und Ziffern, zum Beispiel K7." },
    { "@type": "HowToStep", "position": 2, "name": "Raster absuchen", "text": "Das 10 × 10-Raster zeigt 100 zweistellige Codes. Der Zielcode steht darin mindestens zweimal." },
    { "@type": "HowToStep", "position": 3, "name": "Alle Kopien anklicken", "text": "Jede angeklickte Kopie bringt 150 Punkte. Sind alle gefunden, erscheinen ein neuer Zielcode und ein neues Raster." },
    { "@type": "HowToStep", "position": 4, "name": "45 Sekunden durchhalten", "text": "Alle 700 ms wechseln drei Ablenker-Zellen ihren Code, und spätestens alle 12 Sekunden kommt ein neuer Zielcode." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert „Codes im Raster finden“?",
      "acceptedAnswer": { "@type": "Answer", "text": "Oben wird ein zweistelliger Zielcode angezeigt. Im 10 × 10-Raster aus 100 Codes steht er mehrmals; du klickst jede Kopie an. Sind alle gefunden oder sind 12 Sekunden vergangen, kommen ein neuer Zielcode und ein neues Raster. Eine Runde dauert 45 Sekunden." }
    },
    {
      "@type": "Question",
      "name": "Wie viele Kopien des Zielcodes gibt es?",
      "acceptedAnswer": { "@type": "Answer", "text": "Zu Beginn zwei. Mit steigendem Level werden es mehr: drei ab Level 3, vier ab Level 6, fünf ab Level 9 und höchstens sechs ab Level 12." }
    },
    {
      "@type": "Question",
      "name": "Was bedeutet das Rauschen im Raster?",
      "acceptedAnswer": { "@type": "Answer", "text": "Alle 700 Millisekunden bekommen drei zufällige Ablenker-Zellen einen neuen Code. Kopien des Zielcodes bleiben dabei stehen. So kannst du dir das Raster nicht einprägen." }
    },
    {
      "@type": "Question",
      "name": "Wie wird gepunktet?",
      "acceptedAnswer": { "@type": "Answer", "text": "Jede gefundene Kopie bringt 150 Punkte, alle 750 Punkte (5 Funde) steigt das Level. Am Ende siehst du Punktzahl, Trefferquote, höchstes Level und Anzahl der Funde." }
    },
    {
      "@type": "Question",
      "name": "Gibt es Strafen für Fehlklicks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nein. Ein Fehlklick färbt die Zelle kurz rot, kostet aber weder Punkte noch Zeit. Er senkt nur die Trefferquote." }
    },
    {
      "@type": "Question",
      "name": "Ist das ein Konzentrationstest oder Sehtest?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nein. Es ist ein kostenloses Übungsspiel im Browser, kein normierter psychologischer Test und kein Sehtest. Vergleiche deine Punktzahl nur mit deinen eigenen früheren Runden." }
    },
    {
      "@type": "Question",
      "name": "Wie finde ich die Codes schneller?",
      "acceptedAnswer": { "@type": "Answer", "text": "Merke dir den Code als Paar, nicht als zwei Einzelzeichen, und suche das Raster in Vierteln oder Zeile für Zeile ab. Weil sich Ablenker ändern, lohnt es nicht, sich Positionen zu merken." }
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
      <EntropicGridClient copy={{ title: "Codes im Raster finden", subtitle: "Zielcode in einem sich verändernden 100-Zellen-Raster" }} />
      <DrillGuide
        eyebrow="Visuelles Suchspiel"
        title="Codes im Raster finden: Ablauf, Punkte und Tipps"
        sources={sources}
      >
        <p>Bei <strong>Codes im Raster finden</strong> suchst du in einem 10 × 10-Raster aus 100 zweistelligen Codes jede Kopie eines Zielcodes. Die Runde dauert 45 Sekunden, und das Raster bleibt nie gleich: Ablenker wechseln laufend ihren Code. Eine kostenlose Übung im Browser, bedienbar mit Maus oder Touch.</p>

        <h3>Was im Raster passiert</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Zielcode:</strong> zwei Zeichen aus Buchstaben (ohne I und O) und den Ziffern 2 bis 9.</li>
          <li><strong>Mehrere Kopien:</strong> anfangs zwei, je nach Level bis zu sechs gleichzeitig im Raster.</li>
          <li><strong>Rauschen:</strong> alle 700 ms erhalten drei Ablenker-Zellen einen neuen Code.</li>
          <li><strong>Zielwechsel:</strong> neuer Zielcode, sobald alle Kopien gefunden sind, spätestens nach 12 Sekunden.</li>
        </ul>

        <h3>Warum die Suche Mühe macht</h3>
        <p>Ein zweistelliger Code unterscheidet sich von den Ablenkern nicht durch ein einzelnes auffälliges Merkmal, sondern nur durch die Kombination zweier Zeichen. Solche Suchen laufen eher Element für Element ab (Treisman &amp; Gelade, 1980; Wolfe, 1994), und sie werden langsamer, je ähnlicher Ziel und Ablenker sind (Duncan &amp; Humphreys, 1989). Das wechselnde Rauschen verhindert zusätzlich, dass du dich auf auswendig gelernte Positionen verlässt.</p>

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
              <tr><td className="py-2.5 px-3">Einstieg</td><td className="py-2.5 px-3 tabular-nums">0–2</td><td className="py-2.5 px-3 tabular-nums">0–300</td></tr>
              <tr><td className="py-2.5 px-3">Solide</td><td className="py-2.5 px-3 tabular-nums">3–4</td><td className="py-2.5 px-3 tabular-nums">450–600</td></tr>
              <tr><td className="py-2.5 px-3">Stark</td><td className="py-2.5 px-3 tabular-nums">5–6</td><td className="py-2.5 px-3 tabular-nums">750–900</td></tr>
              <tr><td className="py-2.5 px-3">Top</td><td className="py-2.5 px-3 tabular-nums">7+</td><td className="py-2.5 px-3 tabular-nums">1.050+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Tipps</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Code als Paar lesen:</strong> Suche nach der Zeichenfolge, nicht nach einem einzelnen Buchstaben.</li>
          <li><strong>In Vierteln suchen:</strong> Gehe das Raster Viertel für Viertel durch, statt kreuz und quer zu springen.</li>
          <li><strong>Nach dem Treffer weitersuchen:</strong> Es gibt fast immer noch eine weitere Kopie desselben Codes.</li>
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
