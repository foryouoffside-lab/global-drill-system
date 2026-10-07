import EliteNeuroSwitchClient from '@/app/drills/cognitive/processing-speed/reaction-time/EliteNeuroSwitchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Reaktionszeit-Test mit Regelwechsel | SkillDrills",
  description: "Kostenloser Reaktionszeit-Test im Browser (Wahlreaktion): Wähle das Ziel nach einer wechselnden Regel. Übung für Entscheidungstempo, kein klinischer Test.",
  keywords: ["Reaktionstest", "Reaktionszeit Test", "Reaktionszeit Test online", "Reaktionszeit messen", "Wahlreaktionszeit", "Entscheidungsgeschwindigkeit", "Reaktionstest kostenlos", "visuelle Reaktionszeit"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Reaktionszeit-Test mit Regelwechsel | SkillDrills",
    description: "Kostenloser Reaktionszeit-Test im Browser (Wahlreaktion): Wähle das Ziel nach einer wechselnden Regel. Übung für Entscheidungstempo, kein klinischer Test.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Reaktionszeit-Test mit Regelwechsel | SkillDrills",
    description: "Kostenloser Reaktionszeit-Test im Browser (Wahlreaktion): Wähle das Ziel nach einer wechselnden Regel. Übung für Entscheidungstempo, kein klinischer Test.",
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
      "name": "Wahlreaktionszeit Test",
      "item": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Mental_chronometry", "https://en.wikipedia.org/wiki/Reaction_time"],
  "name": "Wahlreaktionszeit und kognitiver Geschwindigkeitstest",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Wahlreaktionszeit-Test (Choice Reaction Time). Miss deine Entscheidungsgeschwindigkeit, visuelle Diskrimination und kognitive Flexibilitat bei dynamischen Farbwechseln.",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time",
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
  "name": "Wahlreaktionszeit Test – Kognitive Reaktionszeit & Hick's Law",
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
    "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Wahlreaktionszeit Test – Dynamisches Regel-Reaktionsspiel",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time",
  "description": "Kostenloser Wahlreaktionszeit-Test (Choice Reaction Time). Miss deine Entscheidungsgeschwindigkeit, visuelle Diskrimination und kognitive Flexibilitat bei dynamischen Farbwechseln.",
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
      "name": "Was ist die Wahlreaktionszeit (Choice Reaction Time: CRT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Zeitspanne zur Identifikation eines spezifischen Reizes unter mehreren Optionen und zur Ausfuhrung der korrekten motorischen Antwort."
      }
    },
    {
      "@type": "Question",
      "name": "Unterschied zur einfachen Reaktionszeit (SRT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SRT erfordert nur eine Reaktion auf einen bekannten Reiz (~200 ms). CRT fugt einen mentalen Entscheidungsschritt hinzu (~280–350 ms, Donders 1868)."
      }
    },
    {
      "@type": "Question",
      "name": "Was besagt das Hick'sche Gesetz (Hick, 1952)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Reaktionszeit steigt logarithmisch mit der Anzahl der verfugbaren Entscheidungsalternativen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist ein guter Durchschnittswert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Durchschnitt liegt bei 280–350 ms. Profispieler und Spitzenathleten erreichen Werte von 180–230 ms (Der & Deary, 2006)."
      }
    },
    {
      "@type": "Question",
      "name": "Warum wechseln die Farbregeln standig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dies fordert das Frontalhirn, automatisierte Reaktionsmuster sofort zu hemmen und sich neuen Vorgaben anzupassen."
      }
    },
    {
      "@type": "Question",
      "name": "Lasst sich die Wahlreaktionszeit verbessern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, gezieltes Training beschleunigt die neuronale Signalubertragung und eliminiert Zogern."
      }
    },
    {
      "@type": "Question",
      "name": "Einfluss des Alters auf die Reaktionszeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ab Mitte 20 verlangsamt sich die Reaktionszeit allmahlich, lasst sich jedoch durch Training lange stabilisieren."
      }
    },
    {
      "@type": "Question",
      "name": "Einfluss von Monitor und Maus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein 144Hz-Monitor und 1000Hz-Sensor minimieren Geratelatenzen auf ein Minimum (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Optimale Trainingsdauer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "10 bis 15 Minuten vor mentalen Spitzenanforderungen reichen vollig aus."
      }
    },
    {
      "@type": "Question",
      "name": "Ist die Nutzung kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, SkillDrills stellt diesen Test vollig kostenfrei im Browser bereit."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Wahlreaktionszeit Test",
  "description": "Kostenloser Wahlreaktionszeit-Test (Choice Reaction Time). Miss deine Entscheidungsgeschwindigkeit, visuelle Diskrimination und kognitive Flexibilitat bei dynamischen Farbwechseln.",
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
      "name": "Auftauchende Knoten visuell diskriminieren",
      "text": "Wahlen Sie blitzschnell den Knoten aus, der der aktuellen Regel entspricht.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/reaction-time#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Prazisen Reaktionsklick setzen",
      "text": "Treffen Sie den passenden Knoten vor Ablauf der Verfallszeit.",
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
    title: "Wahlreaktionszeit Test & Hicksches Gesetz",
    paragraphs: [
      "Kostenloser Wahlreaktionszeit-Test (Choice Reaction Time). Miss deine Entscheidungsgeschwindigkeit, visuelle Diskrimination und kognitive Flexibilitat bei dynamischen Farbwechseln.",
      "SRT erfordert nur eine Reaktion auf einen bekannten Reiz (~200 ms). CRT fugt einen mentalen Entscheidungsschritt hinzu (~280–350 ms, Donders 1868).",
      "Die Reaktionszeit steigt logarithmisch mit der Anzahl der verfugbaren Entscheidungsalternativen.",
    ],
  },
  benchmarks: {
    title: 'Standardisierte kognitive Leistungs-Benchmarks',
    headers: ['Leistungsstufe (Tier)', 'Rangbezeichnung (Rank)', 'Leistungsbereich', 'Erreichte Stufe', 'Genauigkeit', 'Perzentil'],
    rows: [
      { tier: 'Tier 1', rank: 'Großmeister / Elite-Entscheider', stat: 'Top 1%', level: 'Meisterschaft (Mastery)', accuracy: '98%+', percentile: 'Top 1%' },
      { tier: 'Tier 2', rank: 'Fortgeschrittener Diskriminator', stat: 'Top 5%', level: 'Diamant (Exzellent)', accuracy: '94–97%', percentile: 'Top 5%' },
      { tier: 'Tier 3', rank: 'Kompetenter Operator', stat: 'Top 15%', level: 'Platin (Kompetent)', accuracy: '88–93%', percentile: 'Top 15%' },
      { tier: 'Tier 4', rank: 'Durchschnittlicher Erwachsener', stat: 'Top 50%', level: 'Gold (Standard)', accuracy: '78–87%', percentile: 'Top 50%' },
      { tier: 'Tier 5', rank: 'Einsteiger-Basislinie', stat: 'Basis', level: 'Silber (Basis)', accuracy: '< 78%', percentile: 'Basislinie' },
    ],
  },
  protocols: {
    title: '4 wissenschaftliche Trainingsprotokolle zur Steigerung der kognitiven Ausdauer',
    description: 'Wissenschaftliche Trainingsprotokolle auf Basis des Hickschen Gesetzes (Hick, 1952) und der Donders-Subtraktionsmethode (1969) zur Minimierung von Entscheidungs- und Diskriminationslatenzen.',
    items: [
      { title: "Aktive Regel im Banner ablesen", description: "Beachten Sie die aktuell geforderte Farbe (z. B. TAP RED oder TAP BLUE)." },
      { title: "Auftauchende Knoten visuell diskriminieren", description: "Wahlen Sie blitzschnell den Knoten aus, der der aktuellen Regel entspricht." },
      { title: "Prazisen Reaktionsklick setzen", description: "Treffen Sie den passenden Knoten vor Ablauf der Verfallszeit." },
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
          title: "Reaktionszeit-Test mit Regelwechsel",
          subtitle: "Wähle das passende Ziel nach wechselnden Farben und trainiere Entscheidungstempo",
          startTitle: "Reaktionszeit-Test mit Regelwechsel",
          startSubtitle: "Wahlreaktion • Entscheidungstempo",
          stageCaption: "Klicke das Ziel, das zur aktiven Regel passt. Farbe und Regel wechseln schnell.",
          rulesTitle: "Drill-Anleitung und Punktesystem",
          aboutTitle: "Was misst der Reaktionszeit-Test?",
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
            { num: "2", text: "Richtiges Ziel", highlight: "+100 Pkt.", result: "Combo- und Stufenbonus" },
            { num: "3", text: "Regelwechsel", highlight: "Automatisch", result: "Wird mit der Stufe schneller" },
            { num: "4", text: "Fehlziel / Timeout", highlight: "Combo zurücksetzen", result: "Bei Strafe -0,8 s" }
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
