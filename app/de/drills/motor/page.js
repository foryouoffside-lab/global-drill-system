import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: 'Maus-Präzisionstest & Feinmotorik-Übungen | SkillDrills',
  description: 'Kostenloser Maus-Präzisionstest mit 8 Browser-Übungen: Zielklicks, CPS über 45 Sekunden, Drag & Drop, heißer Draht, Nachfahren und Tasten-Reaktion.',
  keywords: [
    'Maus-Präzisionstest', 'Mausgenauigkeit', 'Hand-Auge-Koordination',
    'Feinmotorik Maus', 'Maus Präzisionstraining', 'Cursor Kontrolle',
    'ruhige Hand Training', 'Maus Übungen'
  ],
  openGraph: {
    title: 'Maus-Präzisionstest & Feinmotorik-Übungen | SkillDrills',
    description: 'Kostenloser Maus-Präzisionstest mit 8 Browser-Übungen: Zielklicks, CPS über 45 Sekunden, Drag & Drop, heißer Draht, Nachfahren und Tasten-Reaktion.',
    type: 'website',
    url: 'https://skilldrills.online/de/drills/motor',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Maus-Präzision und Motorik-Training auf SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maus-Präzisionstest & Feinmotorik-Übungen | SkillDrills',
    description: 'Kostenloser Maus-Präzisionstest mit 8 Browser-Übungen: Zielklicks, CPS über 45 Sekunden, Drag & Drop, heißer Draht, Nachfahren und Tasten-Reaktion.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor',
    languages: getAlternateLanguages('/de/drills/motor'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Alle Trainingsdrills", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Motorik & Maus-Präzision", "item": "https://skilldrills.online/de/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09",
  "name": "Maus-Präzisionstest & Feinmotorik-Übungen (8 Übungen)",
  "url": "https://skilldrills.online/de/drills/motor",
  "description": "8 kostenlose Browser-Übungen für Mausgenauigkeit, Zielklicks, CPS, Tasten-Reaktion und Hand-Auge-Koordination.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": motorDrills.map((drill) => {
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
  { q: "Was misst der Maus-Präzisionstest auf dieser Seite?", a: "Die Seite bündelt 8 kostenlose Browser-Übungen: wandernde Ziele anklicken (Aim Trainer), Treffer ins Zentrum (Präzisions-Flicks), Ziele in Reihenfolge klicken, Drag & Drop, CPS über 45 Sekunden, einen schmalen Korridor ohne Wandberührung (heißer Draht), einem bewegten Punkt entlang einer Bahn folgen und angezeigte Tasten schnell drücken." },
  { q: "Wie hoch ist ein durchschnittlicher CPS-Wert und welche Klicktechniken gibt es?", a: "Einen offiziellen Durchschnitt gibt es nicht: CPS hängt stark von Maus, Technik und Messdauer ab. Übliche Techniken sind normales Klicken, Jitter-Clicking (Unterarm anspannen, Finger vibrieren lassen) und Butterfly-Clicking (zwei Finger abwechselnd). Der SkillDrills CPS-Test zählt 45 Sekunden lang Mausklicks und zeigt deinen Durchschnitt; vergleiche ihn am besten mit deinen eigenen Werten auf demselben Gerät." },
  { q: "Helfen Nachfahr- und Heißer-Draht-Übungen gegen Maus-Zittern?", a: "Beide Übungen verlangen, den Cursor in einem schmalen Bereich zu halten: im Korridor setzt jede Wandberührung dich an den Start zurück, beim Nachfahren musst du einem bewegten Punkt entlang einer Bahn folgen. Das ist gezieltes Üben von Cursorkontrolle; eine bestimmte Wirkung auf Tremor ist nicht garantiert." },
  { q: "Was besagt das Fitts’sche Gesetz für Geschwindigkeit und Zielgenauigkeit?", a: "Das Fitts’sche Gesetz beschreibt die Bewegungszeit als logarithmische Funktion aus Distanz und Zielbreite (MT = a + b * log2(2D/W)). Zielbewegungen werden meist in eine schnelle ballistische Anfangsphase und eine visuell gesteuerte Korrekturphase zerlegt; je kleiner das Ziel, desto wichtiger die Korrektur." },
  { q: "Was trainiert die Tasten-Erkennungsübung?", a: "Auf dem Bildschirm erscheinen Tasten (Buchstaben, Zahlen, Sonderzeichen, Pfeiltasten), die du 60 Sekunden lang so schnell und korrekt wie möglich drückst; Fake-Anzeigen musst du ignorieren. Es ist weder ein Tippgeschwindigkeitstest noch ein Tastaturtester für Hardware." },
  { q: "Wie genau sind browserbasierte Maus- und Tastaturmessungen?", a: "SkillDrills nutzt performance.now(), dessen Auflösung der Browser aus Sicherheitsgründen rundet. Bildwiederholrate (z. B. ~4,1 ms bei 240 Hz) und Polling-Rate von Maus oder Tastatur (1 ms bei 1000 Hz) begrenzen die Messung zusätzlich. Für den Vergleich eigener Werte auf demselben Gerät reicht das; für Hardware-Prüfungen ist es nicht gedacht." },
  { q: "Welchen Einfluss haben DPI, In-Game-Sensitivität und eDPI?", a: "eDPI (DPI mal Sensitivität) bestimmt, wie weit sich der Cursor pro Handbewegung bewegt. Hohe Werte erlauben schnelle Wege, machen aber kleines Zittern sichtbarer; niedrige Werte wirken ruhiger, brauchen aber mehr Armbewegung. Für vergleichbare Ergebnisse solltest du beim Üben dieselbe Einstellung behalten." },
  { q: "Kann ich hier Tastatur-Chattering oder Ghosting prüfen?", a: "Nein. Chattering (ein Anschlag wird mehrfach registriert) und Ghosting (nicht gedrückte Tasten lösen aus oder gleichzeitige Eingaben fehlen) sind Hardwarefehler, für die ein eigener Tastaturtester nötig ist. Die SkillDrills-Tastenübung misst nur deine Reaktion auf angezeigte Tasten." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function GermanMotorHubPage() {
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
      <MotorDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}

