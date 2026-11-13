import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Zahlen-Symbol-Test | SDMT Verarbeitungsgeschwindigkeit",
  description: "Kostenloser Zahlen-Symbol-Test im Browser: Übe Symbol-Ziffern-Zuordnung und visuelle Suche. SDMT-inspiriertes Training, kein klinischer Test.",
  keywords: ["Zahlen-Symbol-Test", "SDMT online", "Symbol-Ziffern-Zuordnung", "Verarbeitungsgeschwindigkeit üben", "visuelle Suche"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Zahlen-Symbol-Test | SDMT Verarbeitungsgeschwindigkeit",
    description: "Kostenloser Zahlen-Symbol-Test im Browser: Übe Symbol-Ziffern-Zuordnung und visuelle Suche. SDMT-inspiriertes Training, kein klinischer Test.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Zahlen-Symbol-Test | SDMT Verarbeitungsgeschwindigkeit",
    description: "Kostenloser Zahlen-Symbol-Test im Browser: Übe Symbol-Ziffern-Zuordnung und visuelle Suche. SDMT-inspiriertes Training, kein klinischer Test.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/symbol-matching'),
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
      "name": "Zahlen-Symbol-Test",
      "item": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zahlen-Symbol-Test (SDMT-Übung)",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Zahlen-Symbol-Test im Browser: Sechs Symbole sind den Ziffern 1 bis 6 zugeordnet, und du tippst die Ziffer zum angezeigten Symbol. SDMT-inspiriertes Übungsspiel, kein klinischer Test.",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching",
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
  "name": "Zahlen-Symbol-Test – SDMT-Übung",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Zahlen-Symbol-Test – Symbol-Ziffern-Zuordnungsspiel",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching",
  "description": "Kostenloser Zahlen-Symbol-Test im Browser: Sechs Symbole sind den Ziffern 1 bis 6 zugeordnet, und du tippst die Ziffer zum angezeigten Symbol. SDMT-inspiriertes Übungsspiel, kein klinischer Test.",
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
  "dateModified": "2026-11-12",
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
      "name": "Was ist der Symbol Digit Modalities Test (SDMT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein neuropsychologischer Test von Aaron Smith (1973), bei dem man anhand eines Schlüssels zu Symbolen die passenden Ziffern nennt. Dieser Drill übernimmt nur das Format und ist nicht der SDMT."
      }
    },
    {
      "@type": "Question",
      "name": "Unterschied zwischen SDMT und DSST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beim DSST schreibt man zu Ziffern die passenden Symbole, beim SDMT nennt man zu Symbolen die Ziffern. Dieser Drill funktioniert wie der SDMT: Symbol sehen, Ziffer tippen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie läuft der Zahlen-Symbol-Test ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oben stehen sechs Symbole mit den Ziffern 1 bis 6. Erscheint in der Mitte ein Symbol, tippst du die passende Zifferntaste. Der Schlüssel wird jede Sitzung neu gemischt und bleibt während der Sitzung gleich."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktionieren Zeit und Abzüge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Durchgang startet mit 45 Sekunden. Jeder Treffer bringt 2 Sekunden (maximal 60). Eine falsche Ziffer oder eine Zeitüberschreitung (wenn Target Timeouts aktiv ist) kostet 1 Sekunde und setzt die Combo zurück. Bei 0 ist Schluss."
      }
    },
    {
      "@type": "Question",
      "name": "Wie werden Punkte und Stufen berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jeder Treffer bringt 100 Punkte mal Combo- und Stufen-Multiplikator. Mit steigender Punktzahl steigt die Stufe, und pro Symbol bleibt weniger Zeit zum Antworten."
      }
    },
    {
      "@type": "Question",
      "name": "Was zeigt das Ergebnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Punkte, Genauigkeit, Treffer, Fehler, höchste Stufe und eine Note von F bis S+ gegenüber einem festen SkillDrills-Richtwert. Mit klinischen Normen oder IQ-Werten ist das nicht vergleichbar."
      }
    },
    {
      "@type": "Question",
      "name": "Handelt es sich um eine medizinische Diagnose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Es ist ein Übungsspiel im Browser und ersetzt keine ärztliche Untersuchung. Bei Sorgen um Gedächtnis oder Denken wende dich an eine Ärztin oder einen Arzt."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Strategien helfen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Präge dir den Schlüssel in den ersten Sekunden ein, halte die Blickwege zwischen Schlüssel und Symbol kurz und achte auf Genauigkeit, denn jeder Fehler kostet eine Sekunde und die Combo."
      }
    },
    {
      "@type": "Question",
      "name": "Werde ich durch Üben schneller?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In dieser Aufgabe steigt dein Ergebnis mit Übung meist an. Dass dadurch andere Alltagsaufgaben schneller gehen, ist nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert der Test auf mobilen Geräten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, die Zifferntasten 1 bis 6 werden auf dem Bildschirm angetippt. Kostenlos und ohne Anmeldung."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So funktioniert der Zahlen-Symbol-Test",
  "description": "Kostenloser Zahlen-Symbol-Test im Browser: Sechs Symbole sind den Ziffern 1 bis 6 zugeordnet, und du tippst die Ziffer zum angezeigten Symbol. SDMT-inspiriertes Übungsspiel, kein klinischer Test.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Legende mit Symbol-Ziffern-Paaren erfassen",
      "text": "Verschaffen Sie sich einen Uberblick uber die 6 Symbol-Zuordnungen am oberen Rand.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Zentrales Ziel-Symbol fixieren",
      "text": "Erfassen Sie das in der Mitte aufblitzende Symbol ohne Zogern.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Passende Zifferntaste drucken",
      "text": "Tippen oder klicken Sie die zugehörige Zifferntaste (1 bis 6) auf dem Bildschirm. Fehler oder Zeitüberschreitung kosten 1 Sekunde und die Combo.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Combo halten",
      "text": "Halten Sie die Genauigkeit hoch, damit die Combo wächst. Mit steigender Stufe bleibt pro Symbol weniger Zeit.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "Zahlen-Symbol-Test – SDMT-Übung",
    paragraphs: [
      "Der kostenlose Zahlen-Symbol-Test zeigt oben einen Schlüssel aus sechs Symbolen und den Ziffern 1 bis 6. Erscheint in der Mitte ein Symbol, tippst du die passende Zifferntaste. Der Schlüssel wird jede Sitzung neu gemischt. Ein Durchgang startet mit 45 Sekunden, jeder Treffer bringt 2 Sekunden (max. 60), Fehler und Zeitüberschreitungen kosten 1 Sekunde.",
      "Vom Symbol zur Ziffer zu antworten entspricht dem SDMT (Smith, 1973); beim DSST ist es umgekehrt (Ziffer zu Symbol). Dieser Drill ist keiner der beiden Tests, und seine Werte sind nicht mit klinischen Normen vergleichbar.",
      "Angezeigt werden Punkte, Genauigkeit, Treffer, Fehler und höchste Stufe. Es ist ein Übungsspiel, keine Diagnose und keine IQ- oder Leistungsdiagnostik.",
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
    title: 'Ablauf des Zahlen-Symbol-Tests',
    description: 'Die vier Schritte eines Durchgangs. Das Format folgt dem SDMT (Smith, 1973), ist aber kein klinischer Test.',
    items: [
      { title: "Legende mit Symbol-Ziffern-Paaren erfassen", description: "Verschaffen Sie sich einen Uberblick uber die 6 Symbol-Zuordnungen am oberen Rand." },
      { title: "Zentrales Ziel-Symbol fixieren", description: "Erfassen Sie das in der Mitte aufblitzende Symbol ohne Zogern." },
      { title: "Passende Zifferntaste drucken", description: "Tippen oder klicken Sie die zugehörige Zifferntaste (1 bis 6) auf dem Bildschirm. Fehler oder Zeitüberschreitung kosten 1 Sekunde und die Combo." },
      { title: "Combo halten", description: "Halten Sie die Genauigkeit hoch, damit die Combo wächst. Mit steigender Stufe bleibt pro Symbol weniger Zeit." },
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
      <SymbolMatchingClient
        copy={{
          title: "Zahlen-Symbol-Test",
          subtitle: "Symbol-Ziffern-Zuordnungen schnell erkennen und Verarbeitungsgeschwindigkeit trainieren",
          startTitle: "Zahlen-Symbol-Test",
          stageCaption: "Vergleiche das Zielsymbol mit der Schlüsselzeile und klicke die passende Ziffer.",
          rulesTitle: "Drill-Anleitung und Punktesystem",
          aboutTitle: "Was ist der Zahlen-Symbol-Test?",
          faqTitle: "Häufige Fragen",
          readyLabel: "BEREIT",
          labels: { score: "Punkte", time: "Zeit", level: "Stufe", bestScore: "Bestwert", timeLeft: "Restzeit", targetSymbol: "Zielsymbol", accuracy: "Genauigkeit", hits: "Treffer", misses: "Fehler", peakLevel: "Höchststufe" },
          aboutLead: "Bei einer Symbol-Ziffern-Aufgabe ordnest du unter Zeitdruck Zeichen und Zahlen zu. Dadurch trainierst du Verarbeitungsgeschwindigkeit und visuelle Suche, nicht Fachwissen. Dieser Drill ist ein Übungsspiel und kein klinisches Verfahren.",
          aboutText: "Der Drill orientiert sich am Zuordnungsformat von SDMT und DSST. Du prüfst die Schlüsselzeile und wählst die passende Ziffer zum Zielsymbol. Wiederholte Durchgänge trainieren visuelle Suche, assoziatives Gedächtnis und Reaktionsauswahl. Der Score beschreibt nur diese Spielaufgabe und ist keine medizinische Diagnose.",
          aboutCards: [
            { title: "Für wen ist das sinnvoll?", desc: "Für Studierende, Berufstätige und Gamer, die Verarbeitungsgeschwindigkeit und visuelle Suche gezielt üben möchten." },
            { title: "Welche Fähigkeiten werden trainiert?", desc: "Visuelle Suche, Symbol-Ziffern-Gedächtnis, Auswahlreaktion und anhaltende Aufmerksamkeit bei Wiederholungen." },
            { title: "Schlüssel wechselt", desc: "Die Symbol-Ziffern-Zuordnung ändert sich pro Sitzung und belohnt aktives Nachschlagen statt reines Auswendiglernen." }
          ],
          rulesItems: [
            { num: "1", text: "Symbol-Ziffern-Schlüssel", highlight: "6 Zuordnungen", result: "Ziffern oben nachsehen" },
            { num: "2", text: "Zielsymbol", highlight: "+100 Punkte", result: "Combo × Stufe, +2 s (max. 60 s)" },
            { num: "3", text: "Falsche Ziffer", highlight: "Combo zurücksetzen", result: "−1 Sekunde" },
            { num: "4", text: "Zeitüberschreitung", highlight: "Zeitfenster schrumpft", result: "−1 s und Combo weg" }
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
