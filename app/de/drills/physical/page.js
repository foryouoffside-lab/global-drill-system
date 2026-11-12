import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

const url = 'https://skilldrills.online/de/drills/physical';
const title = "Koordinationsspiele online | 11 Maus-Drills | SkillDrills";
const description = "Koordinationsspiele online und kostenlos: 11 Maus-Drills für Zielen, Ausweichen, ruhige Cursorführung, Wege merken und Timing. Kein Fitnesstest.";

export const metadata = {
  title,
  description,
  keywords: ["Koordinationsspiele online", "Koordinationsspiele kostenlos", "Koordinationsspiel Maus", "Ausweichdrills mit der Maus", "Maus-Drills im Browser"],
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: 'SkillDrills',
    locale: 'de_DE',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Alle Drills", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Koordinationsspiele online", "item": url }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "de",
  "dateModified": "2026-11-10",
  "name": "Koordinationsspiele online – 11 Maus-Drills",
  "url": url,
  "description": "11 Browser-Drills mit der Maus: Ziele klicken, Ausweichen, ruhige Cursorführung, Wege merken und Timing.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'de', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/de${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqs = [
  { q: "Hilft das Leiter-Spiel am Bildschirm bei echter Fußarbeit?", a: "Der Drill übt Timing und Rhythmus: Sie führen den Cursor in der richtigen Reihenfolge auf die linken und rechten Sprossen einer nach unten laufenden Leiter. Echte Fußarbeit oder Krafttraining ersetzt das nicht, und eine Wirkung auf sportliche Agilität behauptet diese Seite nicht." },
  { q: "Was übt der Reaktionsketten-Drill (Overflicking stoppen)?", a: "Sie müssen den Cursor innerhalb eines bewegten Knotens vollständig anhalten, um zu punkten. Wer ohne Stopp hindurchfährt oder einen Knoten verpasst, verliert die Combo und 1 Sekunde. Bessere Treffer in Shootern garantiert das nicht." },
  { q: "Was übt der Stabilitätstest gegen äußere Kräfte?", a: "Sie halten das Fadenkreuz gegen simulierten Wind im sicheren Ring in der Mitte. Wer den Ring verlässt, verliert nur die Combo. Das ist eine Übung für ruhige Mausführung, kein Training des körperlichen Gleichgewichts." },
  { q: "Was passiert im Koordinationstest mit der Maus (Überkreuzbewegung)?", a: "Sie fahren mit dem Cursor auf den Startknoten und führen ihn dann quer über den Bildschirm innerhalb eines Korridors zum Zielknoten. Wer den Korridor verlässt, verliert die Combo. Wirkungen auf die Zusammenarbeit der Gehirnhälften behauptet diese Seite nicht." },
  { q: "Was übt das Raster-Ausweichspiel?", a: "Felder blinken als Warnung auf und werden dann zur Gefahrenzone; Sie müssen den Cursor vorher in ein sicheres Feld bewegen. Um wie viele Millisekunden Ihre Reaktion schneller wird, verspricht diese Seite nicht. Vergleichen Sie Level und Trefferquote auf demselben Gerät." },
  { q: "Was übt der Drill mit Gefahren am Bildschirmrand?", a: "Sie entdecken Gefahrenknoten im äußeren Bildbereich und klicken sie an, um die Aufmerksamkeit am Rand zu üben. Ein größeres Sehfeld oder Verletzungsschutz ist nicht belegt; nutzen Sie den Drill nur als Übung." },
  { q: "Wie oft sollte ich üben?", a: "Eine feste Regel gibt es nicht. Einige Einheiten pro Woche von etwa 15 bis 25 Minuten, solange die Konzentration hält, sind schonend. Bei Augen- oder Handgelenksschmerzen aufhören." },
  { q: "Ergänzen Browser-Drills das Training im Studio oder auf dem Platz?", a: "Sie ersetzen kein Kraft-, Sprung- oder Sporttraining. Sie üben visuelles Timing und schnelle Entscheidungen auf Bildschirmsignale – als kleine Ergänzung." },
  { q: "Wie viele Drills gibt es in dieser Übersicht?", a: "Es gibt 11 Browser-Drills in vier Bereichen: Reaktion und Ausweichen, Agilität und Timing, Koordination und Wege, Gleichgewicht und Stabilität. Über die Karten öffnen Sie Beschreibung und Anleitung jedes Drills." },
  { q: "Sind diese Koordinationsspiele ein Fitnesstest?", a: "Nein. Die Spiele messen weder Kraft noch Sprungkraft oder Ausdauer. Sie üben Timing, Entscheidungstempo, Genauigkeit der Mausführung und Bewegungsabfolgen am Bildschirm." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de",
  "dateModified": "2026-11-10",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
};

export default function PhysicalDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PhysicalDrillsClient faqs={faqs} />
    </>
  );
}
