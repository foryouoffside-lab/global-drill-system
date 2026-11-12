import RhythmAnomalyClient from '@/app/drills/visual/visual-recognition/rhythm-anomaly/RhythmAnomalyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = "https://skilldrills.online/de/drills/visual/visual-recognition/rhythm-anomaly";
const TITLE = "Visueller Rhythmustest: Taktabweichung finden | SkillDrills";
const DESCRIPTION = "Visueller Rhythmustest: Finde im pulsierenden 6x6-Raster die eine Zelle, die in einem anderen Takt blinkt. 45 Sekunden, kostenlos, kein Flimmertest.";
const FAQS = [
  [
    "Was misst der visuelle Rhythmustest?",
    "Er zählt, wie oft du in 45 Sekunden die Zelle im abweichenden Takt findest (10 Punkte pro Treffer), dazu Trefferserie und Fehlklicks. Das ist ein Übungswert für den Rhythmusvergleich, keine Diagnose des Sehens oder des Nervensystems."
  ],
  [
    "Ist das ein Flimmerfusionstest (CFF)?",
    "Nein. Das Raster blinkt nur etwa 0,6- bis 2,5-mal pro Sekunde. Die Flimmerverschmelzungsfrequenz (etwa 50 bis 60 Hz) wird hier nicht gemessen."
  ],
  [
    "Wie steigen Punkte und Level?",
    "Jeder Treffer bringt 10 Punkte, alle 3 Treffer steigt das Level um 1. Mit jedem Treffer wird der Takt schneller (Periode von 1,6 s bis 0,6 s) und das Störblinken häufiger."
  ],
  [
    "Gibt es Punktabzug bei Fehlern?",
    "Nein. Ein Fehlklick löst einen roten Blitz aus und setzt nur die Trefferserie zurück. Ist das Zeitlimit aktiv, wechselt die Zelle den Platz, wenn du sie nicht rechtzeitig findest."
  ],
  [
    "Was sind die Zellen, die kurz dunkler werden?",
    "Zufällige Störreize. Richtig ist nur die Zelle, die dauerhaft in einem anderen Takt blinkt."
  ],
  [
    "Kann ich mit der Tastatur spielen?",
    "Nein, gespielt wird per Mausklick oder Touch. Die Tastatur hat im Spiel keine Funktion."
  ],
  [
    "Spielt die Bildwiederholrate eine Rolle?",
    "Kaum, weil das Raster langsam blinkt und auch auf 60-Hz-Bildschirmen sauber dargestellt wird. Helligkeit, Bildschirmgröße und Eingabelatenz können das Ergebnis aber beeinflussen (Woods et al., 2015): vergleiche nur auf demselben Gerät."
  ],
  [
    "Ist das Spiel für lichtempfindliche Menschen geeignet?",
    "Das Raster blinkt langsam in dunklem Grau. Wenn dir blinkende Bildschirme Beschwerden machen oder du lichtempfindlich bist, spiele es nicht. Bei Kopfschmerz oder Schwindel sofort aufhören."
  ]
];
const RULES = [
  "Richtige Zelle anklicken: +10 Punkte, die abweichende Zelle springt an eine neue Stelle.",
  "Alle 3 Treffer steigt das Level; Takt und Störblinken werden schneller.",
  "Zufällige Zellen werden immer wieder kurz dunkler (Störreize).",
  "Falscher Klick: roter Blitz, die Trefferserie wird zurückgesetzt. Keine Punkte und keine Zeit werden abgezogen.",
  "Ist das Zeitlimit in den Einstellungen aktiv, wechselt die abweichende Zelle nach 6 s (später minimal 1,8 s) den Platz, wenn du sie nicht findest, und die Serie wird zurückgesetzt."
];
const BANDS = [
  [
    "Stufe 1",
    "< 50",
    "0–4",
    "L1–2"
  ],
  [
    "Stufe 2",
    "50–99",
    "5–9",
    "L2–4"
  ],
  [
    "Stufe 3",
    "100–149",
    "10–14",
    "L4–5"
  ],
  [
    "Stufe 4",
    "150–199",
    "15–19",
    "L6–7"
  ],
  [
    "Stufe 5",
    "200+",
    "20+",
    "L7+"
  ]
];
const TIPS = [
  "Schau locker auf das ganze Raster statt Zelle für Zelle. So fällt die Zelle im falschen Takt eher auf.",
  "Eine Zelle, die einmal kurz dunkler wird, ist ein Störreiz. Klicke erst, wenn eine Zelle mindestens zweimal im anderen Takt geblinkt hat.",
  "Wenn das Level steigt, schau dir den neuen Takt einen Schlag lang an, bevor du klickst.",
  "Vergleiche Ergebnisse nur auf demselben Gerät mit gleicher Bildschirmhelligkeit."
];
const INTRO = [
  "Im visuellen Rhythmustest blinken alle 36 Zellen eines 6x6-Rasters langsam im gleichen Takt. Eine einzige Zelle blinkt in einem schnelleren Takt: Diese klickst du an. Eine Runde dauert 45 Sekunden, gespielt wird kostenlos im Browser mit Maus oder Touch. Es ist kein Sehtest und keine medizinische Untersuchung.",
  "Die abweichende Zelle hat etwa 72 % der Periode der übrigen Zellen, blinkt also rund 1,4-mal so schnell und wird am Höhepunkt etwas heller. Mit jedem Treffer wird der Takt des ganzen Rasters schneller (Periode von 1,6 s bis minimal 0,6 s). Am Anfang ist der Unterschied leicht zu sehen, später musst du ihn schneller erkennen.",
  "Das Raster blinkt etwa 0,6- bis 2,5-mal pro Sekunde, weit unter der Flimmerverschmelzungsfrequenz von etwa 50 bis 60 Hz (De Lange, 1958; Kelly, 1961). Die Übung misst also keine Flimmerfusion, sondern ist eine Aufmerksamkeitsaufgabe, bei der du Rhythmen vergleichst. Zu beurteilen, ob zwei Reize im selben Takt laufen, gelingt nur bei deutlich langsameren Raten als das bloße Erkennen von Flimmern (Holcombe, 2009)."
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "Visueller Rhythmustest",
  "abweichenden Takt erkennen",
  "Pulsraster",
  "visuelle Wahrnehmung Spiel",
  "Takt erkennen Test"
],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/rhythm-anomaly', 'de'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de/" },
    { "@type": "ListItem", "position": 2, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Visuelle Erkennung", "item": "https://skilldrills.online/de/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Visueller Rhythmustest", "item": PAGE_URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Visueller Rhythmustest",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "45-Sekunden-Browserspiel: Finde im pulsierenden 6x6-Raster die eine Zelle, die schneller blinkt. Steuerung per Maus oder Touch, kein medizinischer Test.",
  "url": PAGE_URL,
  "inLanguage": "de-DE",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So spielst du den visuellen Rhythmustest",
  "inLanguage": "de-DE",
  "step": [
  [
    "Ganzes Raster ansehen",
    "Richte den Blick auf die Mitte des 6x6-Rasters und erfasse den gemeinsamen Grundtakt der 36 Zellen."
  ],
  [
    "Abweichenden Takt finden",
    "Suche die eine Zelle, die schneller blinkt. Kurz dunkler werdende Zellen sind Störreize."
  ],
  [
    "Klicken oder tippen",
    "Klicke oder tippe auf die Zelle: +10 Punkte, danach springt sie an eine neue Stelle."
  ],
  [
    "Tempo mitgehen",
    "Alle 3 Treffer steigt das Level und der Takt wird schneller. Nach 45 Sekunden siehst du Punkte und Serie."
  ]
].map(([name, text], i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": name,
    "text": text,
    "url": `${PAGE_URL}#step-${i + 1}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12",
  "mainEntity": FAQS.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function GermanRhythmAnomalyPage() {
  const sources = pickSources('holcombe2009', 'kelly1961', 'delange1958', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RhythmAnomalyClient copy={{ title: "Visueller Rhythmustest", subtitle: "Finde die Zelle im abweichenden Takt" }} />
      <DrillGuide
        eyebrow={"Visueller Rhythmustest: Anleitung"}
        title={"Visueller Rhythmustest: Ablauf und Punkte"}
        sources={sources}
      >
        {INTRO.map((p) => <p key={p}>{p}</p>)}

        <h3>{"Regeln"}</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h3>{"SkillDrills-Übungsstufen"}</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                {[
  "Stufe",
  "Punkte (45 s)",
  "Treffer",
  "Erreichtes Level"
].map((h) => <th key={h} className="py-2.5 px-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {BANDS.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => <td key={i} className="py-2.5 px-3 tabular-nums">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{"SkillDrills-Übungsstufen: keine Bevölkerungsstatistik, keine Perzentile und kein Befund."}</p>

        <h3>{"Tipps"}</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ol>

        <h3>{"Häufige Fragen"}</h3>
        <div className="space-y-4 my-6">
          {FAQS.map(([q, a]) => (
            <div key={q}>
              <h4 className="font-semibold text-white">{q}</h4>
              <p className="text-slate-300 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
