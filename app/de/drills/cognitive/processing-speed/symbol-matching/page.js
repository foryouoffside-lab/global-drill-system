import SymbolMatchingClient from '@/app/drills/cognitive/processing-speed/symbol-matching/SymbolMatchingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Zahlen-Symbol-Test | SDMT Verarbeitungsgeschwindigkeit",
  description: "Kostenloser Zahlen-Symbol-Test im Browser: Übe Symbol-Ziffern-Zuordnung und visuelle Suche. SDMT-inspiriertes Training, kein klinischer Test.",
  keywords: ["Symbol Digit Modalities Test", "Informationsverarbeitungsgeschwindigkeit Test", "Symbol Ziffern Zuordnung", "SDMT Test Online", "DSST Test Kostenlos", "Visuelles Scanning Test", "Kognitives Tempo Messen", "Assoziatives Gedachtnis Test", "Gehirntraining Symbole", "Verarbeitungsgeschwindigkeit Gehirn",
    "sdmt online kostenlos",
    "informationsverarbeitung test"],
  openGraph: {
    title: "Zahlen-Symbol-Test | SDMT Verarbeitungsgeschwindigkeit",
    description: "Kostenloser Zahlen-Symbol-Test im Browser: Übe Symbol-Ziffern-Zuordnung und visuelle Suche. SDMT-inspiriertes Training, kein klinischer Test.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: {
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
      "name": "Symbol Digit Test (SDMT)",
      "item": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Symbol Digit Modalities Test und Kognitiver Geschwindigkeitstester",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Symbol Digit Modalities Test (SDMT) und Symbol-Matching-Drill. Teste deine kognitive Verarbeitungsgeschwindigkeit, visuelle Scanning-Effizienz und assoziatives Gedachtnis.",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "de-DE",
  "dateModified": "2026-09-20"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Symbol Digit Modalities Test – Informationsverarbeitung Speed",
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
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Symbol Digit Modalities Test – Symbol-Ziffern-Zuordnungsspiel",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching",
  "description": "Kostenloser Symbol Digit Modalities Test (SDMT) und Symbol-Matching-Drill. Teste deine kognitive Verarbeitungsgeschwindigkeit, visuelle Scanning-Effizienz und assoziatives Gedachtnis.",
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
  "dateModified": "2026-09-20",
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
        "text": "Ein klassischer neuropsychologischer Test von Aaron Smith (1973) zur Messung der zentralen Informationsverarbeitungsgeschwindigkeit und des visuell-raumlichen Scannings."
      }
    },
    {
      "@type": "Question",
      "name": "Unterschied zwischen SDMT und DSST?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beim DSST schreibt man Symbole zu Ziffern. Beim SDMT ordnet man Ziffern zu Symbolen zu, was feinmotorische Einschrankungen minimiert."
      }
    },
    {
      "@type": "Question",
      "name": "Welche kognitiven Fahigkeiten werden gemessen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Verarbeitungsgeschwindigkeit, visuelle Scanning-Effizienz, kurzfristiges assoziatives Lernen und geteilte Aufmerksamkeit."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist eine normale Punktzahl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erwachsene im Alter von 20–34 Jahren erreichen in 90 Sekunden typischerweise 65–75 korrekte Zuordnungen (Smith, 1973; Der & Deary, 2006)."
      }
    },
    {
      "@type": "Question",
      "name": "Handelt es sich um eine medizinische Diagnose?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein, dies ist ein browserbasiertes kognitives Trainingsspiel nach demselben Testaufbau, ersetzt jedoch keine arztliche Diagnostik."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hilft das Auswendiglernen der Legende?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wer die Symbol-Zahlen-Paare im Arbeitsgedachtnis behalt, spart zeitraubende Blicksprunge zur oberen Legende."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Strategien erhohen die Geschwindigkeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fruhes Einpragen der Paare, Zusammenfassen mehrerer Symbole (Chunking) und Minimierung unnotiger Augenbewegungen."
      }
    },
    {
      "@type": "Question",
      "name": "Verlangsamt sich die Verarbeitungsgeschwindigkeit im Alter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, sie nimmt nach dem fruhen Erwachsenenalter leicht ab, lasst sich durch geistige und korperliche Aktivitat jedoch lange erhalten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie oft sollte trainiert werden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10 Minuten taglich fordern die schnelle visuelle Zuordnungsfahigkeit spurbahr."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert das Tool auf mobilen Geraten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, mit angepassten On-Screen-Tasten von 1 bis 6 ist die Bedienung auf Touchscreens optimal."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Symbol Digit Modalities Test",
  "description": "Kostenloser Symbol Digit Modalities Test (SDMT) und Symbol-Matching-Drill. Teste deine kognitive Verarbeitungsgeschwindigkeit, visuelle Scanning-Effizienz und assoziatives Gedachtnis.",
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
      "text": "Wahlen Sie blitzschnell die zugehorige Ziffer (1 bis 6) per Tastatur oder Touchpad.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Harmonischen Zuordnungsfluss aufrechterhalten",
      "text": "Automatisieren Sie die Ziffernzuordnung fur maximale Trefferserien vor Ablauf der Zeit.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/symbol-matching#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('smith1973', 'der2006', 'woods2015'),
  intro: {
    title: "Symbol Digit Modalities Test – Informationsverarbeitung Speed",
    paragraphs: [
      "Kostenloser Symbol Digit Modalities Test (SDMT) und Symbol-Matching-Drill. Teste deine kognitive Verarbeitungsgeschwindigkeit, visuelle Scanning-Effizienz und assoziatives Gedachtnis.",
      "Beim DSST schreibt man Symbole zu Ziffern. Beim SDMT ordnet man Ziffern zu Symbolen zu, was feinmotorische Einschrankungen minimiert.",
      "Verarbeitungsgeschwindigkeit, visuelle Scanning-Effizienz, kurzfristiges assoziatives Lernen und geteilte Aufmerksamkeit.",
    ],
  },
  benchmarks: {
    title: 'Standardisierte kognitive Leistungs-Benchmarks',
    headers: ['Leistungsstufe (Tier)', 'Rangbezeichnung (Rank)', 'Leistungsbereich', 'Erreichte Stufe', 'Genauigkeit', 'Perzentil'],
    rows: [
      { tier: 'Tier 1', rank: 'Großmeister / Elite-Symbolzuordner', stat: 'Top 1%', level: 'Meisterschaft (Mastery)', accuracy: '98%+', percentile: 'Top 1%' },
      { tier: 'Tier 2', rank: 'Fortgeschrittener Assoziationsprozessor', stat: 'Top 5%', level: 'Diamant (Exzellent)', accuracy: '94–97%', percentile: 'Top 5%' },
      { tier: 'Tier 3', rank: 'Kompetenter visueller Scanner', stat: 'Top 15%', level: 'Platin (Kompetent)', accuracy: '88–93%', percentile: 'Top 15%' },
      { tier: 'Tier 4', rank: 'Durchschnittlicher Erwachsener', stat: 'Top 50%', level: 'Gold (Standard)', accuracy: '78–87%', percentile: 'Top 50%' },
      { tier: 'Tier 5', rank: 'Einsteiger-Basislinie', stat: 'Basis', level: 'Silber (Basis)', accuracy: '< 78%', percentile: 'Basislinie' },
    ],
  },
  protocols: {
    title: '4 wissenschaftliche Trainingsprotokolle zur Steigerung der kognitiven Ausdauer',
    description: 'Wissenschaftlich fundiertes SDMT-Trainingsprotokoll (Smith, 1973) zur Steigerung der visuellen Scanning-Effizienz, Paarassoziation und mentalen Verarbeitungsgeschwindigkeit.',
    items: [
      { title: "Legende mit Symbol-Ziffern-Paaren erfassen", description: "Verschaffen Sie sich einen Uberblick uber die 6 Symbol-Zuordnungen am oberen Rand." },
      { title: "Zentrales Ziel-Symbol fixieren", description: "Erfassen Sie das in der Mitte aufblitzende Symbol ohne Zogern." },
      { title: "Passende Zifferntaste drucken", description: "Wahlen Sie blitzschnell die zugehorige Ziffer (1 bis 6) per Tastatur oder Touchpad." },
      { title: "Harmonischen Zuordnungsfluss aufrechterhalten", description: "Automatisieren Sie die Ziffernzuordnung fur maximale Trefferserien vor Ablauf der Zeit." },
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
          startTitle: "Symbol-Ziffern-Zuordnung",
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
            { num: "2", text: "Zielsymbol", highlight: "+100 Punkte", result: "Combo- und Stufenmultiplikator" },
            { num: "3", text: "Falsche Ziffer", highlight: "Combo zurücksetzen", result: "Bei aktivem Strafmodus Zeitverlust" },
            { num: "4", text: "Serie und Strafe", highlight: "Timeouts·Fehltipps", result: "Aktiv: −0,8 Sekunden" }
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
