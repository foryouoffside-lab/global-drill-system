import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Wahlreaktionstest mit Regelwechsel | SkillDrills",
  description: "Kostenloser Wahlreaktionstest im Browser: Klicke das rote oder blaue Ziel nach einer wechselnden Farbregel. Übung für Entscheidungstempo.",
  keywords: ["Wahlreaktionstest", "Wahlreaktionstest online", "Wahlreaktionszeit", "Regelwechsel", "Entscheidungstempo", "Entscheidungsgeschwindigkeit"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Wahlreaktionstest mit Regelwechsel | SkillDrills",
    description: "Kostenloser Wahlreaktionstest im Browser: Klicke das rote oder blaue Ziel nach einer wechselnden Farbregel. Übung für Entscheidungstempo.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Wahlreaktionstest mit Regelwechsel | SkillDrills",
    description: "Kostenloser Wahlreaktionstest im Browser: Klicke das rote oder blaue Ziel nach einer wechselnden Farbregel. Übung für Entscheidungstempo.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/reaction-time'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Startseite",
      "item": "https://skilldrills.online/de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Trainings-Hub",
      "item": "https://skilldrills.online/de/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Kognitives Training",
      "item": "https://skilldrills.online/de/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Wahlreaktionstest",
      "item": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Wahlreaktionstest mit Regelwechsel",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Wahlreaktionstest im Browser: Wähle zwischen rotem und blauem Ziel nach der aktiven Farbregel. Ergebnis sind Punkte, Genauigkeit und höchste Stufe, keine Millisekunden-Messung.",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "de-DE",
    "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Wahlreaktionstest mit Regelwechsel – Entscheidungstempo üben",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time",
  "inLanguage": "de-DE",
    "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Wahlreaktionstest – Farbregel-Spiel",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time",
  "description": "Kostenloser Wahlreaktionstest im Browser: Wähle zwischen rotem und blauem Ziel nach der aktiven Farbregel. Ergebnis sind Punkte, Genauigkeit und höchste Stufe, keine Millisekunden-Messung.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist ein Wahlreaktionstest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Test, bei dem du aus mehreren Reizen den passenden erkennen und die richtige Antwort wählen musst. Hier erscheinen ein rotes und ein blaues Ziel, und du klickst die Farbe, die die aktive Regel vorgibt."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zur einfachen Reaktionszeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei der einfachen Reaktion antwortest du auf einen einzigen erwarteten Reiz. Bei der Wahlreaktion kommen Unterscheidung und Antwortauswahl hinzu, deshalb ist sie in der Regel langsamer (Donders). Dieser Drill ergänzt zusätzlich Regelwechsel."
      }
    },
    {
      "@type": "Question",
      "name": "Was besagt das Hicksche Gesetz (Hick, 1952)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Reaktionszeit steigt logarithmisch mit der Anzahl der Entscheidungsalternativen. Weil du hier vor jedem Klick die Regel prüfen musst, übst du genau diesen Entscheidungsschritt."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert der Regelwechsel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Banner oben zeigt, welche Farbe (Rot oder Blau) zu klicken ist. Ab Stufe 2 kippt die Regel nach einer Serie richtiger Treffer; je höher die Stufe, desto weniger Treffer bis zum Wechsel (mindestens 2)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert die Zeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Durchgang startet mit 45 Sekunden. Jeder richtige Klick bringt 2 Sekunden, bis maximal 60. Ein Klick auf die falsche Farbe oder ein abgelaufenes Zielpaar (wenn Target Timeouts aktiv ist) kostet 1 Sekunde und setzt die Combo zurück. Bei 0 endet der Durchgang."
      }
    },
    {
      "@type": "Question",
      "name": "Wie werden Punkte und Noten berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jeder richtige Klick bringt 100 Punkte mal Combo-Multiplikator und Stufen-Multiplikator. Die Endpunktzahl wird mit einem festen SkillDrills-Richtwert verglichen und als Note von F bis S+ angezeigt."
      }
    },
    {
      "@type": "Question",
      "name": "Misst der Test meine Reaktionszeit in Millisekunden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Angezeigt werden Punkte, Genauigkeit (richtige Klicks im Verhältnis zu allen Versuchen), höchste Stufe und beste Combo. Einzelne Reaktionszeiten werden nicht in Millisekunden erfasst."
      }
    },
    {
      "@type": "Question",
      "name": "Werde ich mit Übung besser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dein Ergebnis in dieser Aufgabe steigt mit Übung meist an. Lies vor jedem Klick die Regel und halte die Genauigkeit hoch, damit die Combo wächst. Schnellere Reaktionen in anderen Situationen sind damit nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Wie vergleiche ich meine Ergebnisse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ergebnisse hängen auch von Gerät und Tagesform ab; vergleiche am besten deine eigenen Werte auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Ist die Nutzung kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, der Wahlreaktionstest ist kostenlos und läuft ohne Anmeldung direkt im Browser."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Wahlreaktionstest",
  "description": "Kostenloser Wahlreaktionstest im Browser: Wähle zwischen rotem und blauem Ziel nach der aktiven Farbregel. Ergebnis sind Punkte, Genauigkeit und höchste Stufe, keine Millisekunden-Messung.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Aktive Regel im Banner ablesen",
      "text": "Beachten Sie die aktuell geforderte Farbe (z. B. TAP RED oder TAP BLUE).",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Rotes und blaues Ziel unterscheiden",
      "text": "Von den gleichzeitig erscheinenden roten und blauen Zielen das finden, das zur aktuellen Regel passt.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Prazisen Reaktionsklick setzen",
      "text": "Das passende Ziel klicken, bevor das Paar wechselt. Fehlklick oder Zeitüberschreitung kosten 1 Sekunde und die Combo.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Sofortige Anpassung bei Farbwechsel",
      "text": "Schalten Sie bei Regelwechsel ohne Zogern auf die neue Zielfarbe um.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('donders1969', 'hick1952', 'hyman1953', 'der2006', 'woods2015'),
  intro: {
    title: "Wahlreaktionstest mit Regelwechsel",
    paragraphs: [
      "Der Wahlreaktionstest ist eine kostenlose Browser-Übung: Ein rotes und ein blaues Ziel erscheinen gleichzeitig, und du klickst das Ziel, dessen Farbe das Banner oben vorgibt. Ab Stufe 2 wechselt die Regel, darum musst du sie vor jedem Klick prüfen.",
      "Anders als bei einer einfachen Reaktion auf einen einzigen Reiz kommen bei der Wahlreaktion Reizunterscheidung und Antwortauswahl hinzu; sie ist deshalb in der Regel langsamer (Donders).",
      "Dass die Entscheidungszeit mit der Zahl der Alternativen logarithmisch steigt, beschreibt das Hicksche Gesetz (Hick, 1952). Der Drill zeigt Punkte, Genauigkeit, höchste Stufe und beste Combo, misst aber keine Millisekunden.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills-Übungsstufen (Genauigkeit)',
    headers: ['Übungsstufe', 'Bezeichnung', 'Leistungsbereich', 'Erreichte Stufe', 'Genauigkeit', 'Einordnung'],
    note: 'Die Bereiche sind redaktionelle Übungsmarken und keine Bevölkerungsstatistik.',
    rows: [
      { tier: 'Stufe 1', rank: 'Sehr sicher', stat: 'Stufe 1 von 5', level: 'Meisterschaft (Mastery)', accuracy: '98%+', category: 'Übungsmarke' },
      { tier: 'Stufe 2', rank: 'Sicher', stat: 'Stufe 2 von 5', level: 'Diamant (Exzellent)', accuracy: '94–97%', category: 'Übungsmarke' },
      { tier: 'Stufe 3', rank: 'Solide', stat: 'Stufe 3 von 5', level: 'Platin (Kompetent)', accuracy: '88–93%', category: 'Übungsmarke' },
      { tier: 'Stufe 4', rank: 'Aufbau', stat: 'Stufe 4 von 5', level: 'Gold (Standard)', accuracy: '78–87%', category: 'Übungsmarke' },
      { tier: 'Stufe 5', rank: 'Einstieg', stat: 'Stufe 5 von 5', level: 'Silber (Basis)', accuracy: '< 78%', category: 'Übungsmarke' },
    ],
  },
  protocols: {
    title: 'Ablauf des Wahlreaktionstests',
    description: 'Die vier Schritte eines Durchgangs. Warum mehr Alternativen die Entscheidung verlangsamen, beschreibt das Hicksche Gesetz (Hick, 1952).',
    items: [
      { title: "Aktive Regel im Banner ablesen", description: "Beachten Sie die aktuell geforderte Farbe (z. B. TAP RED oder TAP BLUE)." },
      { title: "Rotes und blaues Ziel unterscheiden", description: "Von den gleichzeitig erscheinenden roten und blauen Zielen das finden, das zur aktuellen Regel passt." },
      { title: "Prazisen Reaktionsklick setzen", description: "Das passende Ziel klicken, bevor das Paar wechselt. Fehlklick oder Zeitüberschreitung kosten 1 Sekunde und die Combo." },
      { title: "Sofortige Anpassung bei Farbwechsel", description: "Schalten Sie bei Regelwechsel ohne Zogern auf die neue Zielfarbe um." },
    ],
  },
  faqs: {
    title: 'Häufig gestellte Fragen (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function LocalizedCognitivePage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <EliteNeuroSwitchClient
        copy={{
          title: "Wahlreaktionstest mit Regelwechsel",
          subtitle: "Wähle das passende Ziel nach wechselnden Farben und trainiere Entscheidungstempo",
          startTitle: "Wahlreaktionstest mit Regelwechsel",
          startSubtitle: "Wahlreaktion • Entscheidungstempo",
          stageCaption: "Klicke das Ziel, das zur aktiven Regel passt. Farbe und Regel wechseln schnell.",
          rulesTitle: "Drill-Anleitung und Punktesystem",
          aboutTitle: "Was ist ein Wahlreaktionstest?",
          faqTitle: "Häufige Fragen",
          labels: { score: "Punkte", time: "Zeit", level: "Stufe", bestScore: "Bestwert", timeLeft: "Restzeit", rule: "REGEL", ready: "BEREIT", accuracy: "Genauigkeit", hits: "Treffer", peakLevel: "Höchste Stufe", maxCombo: "Max. Combo" },
          ruleBanner: { RED: "ROTES ZIEL", BLUE: "BLAUES ZIEL" },
          aboutLead: "Wahlreaktionszeit bezeichnet die Zeit, die du brauchst, um aus mehreren Reizen die passende Antwort auszuwählen. Mit mehr Alternativen steigt die Entscheidungszeit typischerweise nach dem Hickschen Gesetz.",
          aboutText: "Dieser Drill verbindet visuelle Unterscheidung, Regelprüfung und schnelle Bewegung. Das Ergebnis enthält auch Verzögerungen durch Bildschirm, Eingabegerät und Browser. Weil die aktive Farbe wechselt, musst du vor jedem Klick die aktuelle Zuordnung prüfen.",
          aboutCards: [
            { title: "Für wen geeignet?", desc: "Für Spieler, Lernende und alle, die schnelle visuelle Entscheidungen und genaue Reaktionen üben möchten." },
            { title: "Trainierte Fähigkeiten", desc: "Wahlreaktion, visuelle Diskrimination, motorische Ausführung und Aufmerksamkeit bei Regelwechseln." },
            { title: "Regelwechsel", desc: "Die aktive Farbvorgabe wird aktualisiert, damit du dein Reaktionsschema flexibel anpasst." }
          ],
          rulesItems: [
            { num: "1", text: "Aktive Regel", highlight: "ROT / BLAU", result: "Oberes Banner beachten" },
            { num: "2", text: "Richtiges Ziel", highlight: "+100 Pkt.", result: "Combo × Stufe, +2 s (max. 60 s)" },
            { num: "3", text: "Regelwechsel", highlight: "Ab Stufe 2", result: "Mit steigender Stufe häufiger" },
            { num: "4", text: "Fehlziel / Timeout", highlight: "Combo zurücksetzen", result: "-1 s" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
