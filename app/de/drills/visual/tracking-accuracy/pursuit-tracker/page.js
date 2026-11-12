import AutoPursuitClient from '@/app/drills/visual/tracking-accuracy/pursuit-tracker/AutoPursuitClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Glatte Blickfolge | Smooth Pursuit | SkillDrills",
  description: "Glatte Blickfolge (Smooth Pursuit) üben: Halte den Cursor 45 s lang auf einem umherwandernden Punkt, +5 Punkte pro Sekunde Kontakt. Kein Sehtest.",
  keywords: [
    "Glatte Blickfolge",
    "Smooth Pursuit",
    "Cursor auf bewegtem Ziel halten",
    "Tracking-Genauigkeit",
    "bewegten Punkt verfolgen",
    "Tracking üben"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Glatte Blickfolge | Smooth Pursuit | SkillDrills",
    description: "Halte den Cursor auf einem Punkt, der Tempo und Richtung wechselt. Gewertet wird nur der Cursor, nicht deine Augen. Kostenlos im Browser.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Glatte Blickfolge | Smooth Pursuit | SkillDrills",
    description: "Glatte Blickfolge im Browser: einen wandernden Punkt 45 Sekunden lang mit dem Cursor verfolgen.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/pursuit-tracker'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Trainings-Hub", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Blickverfolgung", "item": "https://skilldrills.online/de/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Glatte Blickfolge", "item": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Glatte Blickfolge (Smooth Pursuit)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "45-Sekunden-Browser-Übung: Halte den Mauszeiger (oder Finger) auf einem Punkt, der Tempo und Richtung wechselt. Gewertet wird nur die Cursorposition; keine Kamera-Blickmessung, kein Seh- oder medizinischer Test.",
  "featureList": [
    "Feste 45-Sekunden-Runde; der Punkt ändert zufällig Tempo und Richtung und prallt von den Rändern ab",
    "Je ca. 1 Sekunde Cursor auf dem Punkt (großzügige Trefferzone): +5 Punkte und Serie +1",
    "Mehr als 2 Sekunden daneben setzt nur die Serie zurück, kein Punkt- oder Zeitabzug",
    "Mit steigender Punktzahl wird der Punkt kleiner und schneller; Daten nur im lokalen Browser-Speicher"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Glatte Blickfolge (Smooth Pursuit) | SkillDrills",
  "alternateName": "Pursuit Tracker Pro",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker",
  "dateModified": "2026-11-12",
  "description": "Kostenlose Übung zur glatten Blickfolge: einen wandernden Punkt 45 Sekunden lang mit dem Cursor halten.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Moderner Browser mit HTML5-Canvas.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Ein bewegtes Ziel mit den Augen verfolgen und den Cursor darauf halten"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Glatte Blickfolge (Smooth Pursuit)",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker",
  "description": "Halte den Cursor auf einem Punkt, der Tempo und Richtung wechselt. Kostenloses Smooth-Pursuit-Spiel.",
  "genre": [
    "Action",
    "Visual Tracking"
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So funktioniert die Übung zur glatten Blickfolge",
  "dateModified": "2026-11-12",
  "description": "Vier Schritte durch die 45-Sekunden-Runde.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Cursor auf den Punkt",
      "text": "Nach dem Countdown erscheint ein oranger Punkt und wandert umher. Liegt der Cursor (am Touchscreen der Finger) darauf, wird er grün.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Jeweils ca. 1 Sekunde halten",
      "text": "Ist der Ring um den Punkt voll (ca. 1 Sekunde), gibt es +5 Punkte und die Serie steigt um 1. Wer abrutscht, beginnt den Ring von vorn.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Richtungswechsel mitgehen",
      "text": "Der Punkt wechselt ohne Vorwarnung Tempo und Richtung und prallt von den Rändern ab. Mit Punktzahl und Serie wird er schneller und kleiner.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Bis zum Ende dranbleiben",
      "text": "Mehr als 2 Sekunden daneben setzt nur die Serie zurück; Punkte und Zeit bleiben. Nach 45 Sekunden endet die Runde.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/pursuit-tracker#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert die Übung zur glatten Blickfolge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du hältst 45 Sekunden lang den Mauszeiger auf einem umherwandernden Punkt. Für jede ununterbrochene Sekunde (ca.) gibt es 5 Punkte. Gewertet wird nur die Cursorposition; Kamera oder Eye-Tracker messen deine Augen nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert, wenn ich den Punkt verliere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der laufende Sekunden-Ring startet neu, und nach mehr als 2 Sekunden daneben fällt die Serie auf 0. Punkte und Restzeit werden nicht abgezogen."
      }
    },
    {
      "@type": "Question",
      "name": "Wird es schwieriger?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit steigender Punktzahl schrumpft der Punkt (bis auf die halbe Größe) und seine Höchstgeschwindigkeit steigt. Auch eine längere Serie macht ihn schneller."
      }
    },
    {
      "@type": "Question",
      "name": "Spielt die Bildwiederholrate eine Rolle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Die Übung zählt Bilder (Frames): Auf 60 Hz gibt es etwa jede Sekunde Punkte, auf Monitoren mit höherer Rate kommen Punkte schneller und der Punkt bewegt sich schneller. Ergebnisse verschiedener Geräte sind daher kaum vergleichbar."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist glatte Blickfolge (Smooth Pursuit)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die gleitende Augenbewegung, mit der wir ein bewegtes Objekt im Zentrum des Blickfelds halten. Ist es zu schnell, fällt das Auge zurück und holt mit kurzen Sakkaden auf (Krauzlis, 2004). Die Übung bildet diese Situation mit dem Cursor nach, misst die Augenbewegung aber nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Verbessert das Training Sehkraft oder Aim?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine höhere Punktzahl zeigt, dass du in dieser Aufgabe geübter bist. Bessere Sehkraft, Spiel- oder Sportleistung ist nicht garantiert, und die Übung ersetzt keine augenärztliche Untersuchung."
      }
    },
    {
      "@type": "Question",
      "name": "Ist die Übung kostenlos und wo werden meine Werte gespeichert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, kostenlos und ohne Konto. Bestwerte bleiben nur im lokalen Speicher deines Browsers."
      }
    }
  ]
};

const guideData = {
  heading: "Glatte Blickfolge: einen bewegten Punkt mit dem Cursor halten",
  intro: [
    "Bei dieser Übung zur glatten Blickfolge (Smooth Pursuit) verfolgst du 45 Sekunden lang einen umherwandernden Punkt mit den Augen und hältst den Mauszeiger darauf. Gewertet wird nur, wie lange der Cursor auf dem Punkt bleibt; deine Augen werden nicht per Kamera erfasst.",
    "Bleibt der Cursor etwa 1 Sekunde ohne Unterbrechung auf dem Punkt (großzügige Trefferzone), gibt es +5 Punkte und die Serie steigt. Der Punkt wechselt ohne Vorwarnung Tempo und Richtung, prallt von den Rändern ab und wird mit steigender Punktzahl kleiner und schneller. Mehr als 2 Sekunden daneben setzt nur die Serie zurück.",
    "Langsamen Objekten folgen die Augen gleitend; sind sie zu schnell, fällt der Blick zurück und holt mit kurzen Sprüngen auf (Krauzlis, 2004). Die Übung macht daraus eine einfache Cursor-Aufgabe und misst oder diagnostiziert weder Sehschärfe noch Augenbewegungen."
  ],
  benchmarks: {
    "title": "SkillDrills-Übungsstufen (nur für diese Übung, 60 Hz)",
    "headers": [
      "Stufe",
      "Punkte in 45 s",
      "Beschreibung"
    ],
    "rows": [
      [
        "Oben",
        "180+",
        "Der Punkt wird fast die ganze Zeit gehalten."
      ],
      [
        "Stabil",
        "120 – 179",
        "Nur direkt nach Richtungswechseln gelegentlich daneben."
      ],
      [
        "Übung",
        "60 – 119",
        "In schnellen Phasen oft unterbrochen."
      ],
      [
        "Einstieg",
        "< 60",
        "Eingewöhnung in die Übung."
      ]
    ],
    "note": "Eigene Übungsstufen von SkillDrills, keine wissenschaftlichen Normwerte und keine Bewertung des Sehvermögens. Bildwiederholrate und Maus beeinflussen das Ergebnis."
  },
  techniques: {
    "title": "Tipps, um den Punkt zu halten",
    "items": [
      {
        "name": "Cursor in die Mitte",
        "desc": "Am Rand rutscht man schon bei kleinen Richtungswechseln ab.",
        "tips": "Halte den Cursor in der Mitte des Punkts und bewege dich mit ihm."
      },
      {
        "name": "Locker im Handgelenk",
        "desc": "Verkrampfte Hände lassen den Cursor springen.",
        "tips": "Kleine Korrekturen aus dem Handgelenk, große Wege aus dem Arm."
      },
      {
        "name": "An den Rändern vorbereitet sein",
        "desc": "Der Punkt prallt sofort von den Rändern ab.",
        "tips": "Nähert er sich einem Rand, stell dich auf die Gegenrichtung ein."
      },
      {
        "name": "Sofort zurück",
        "desc": "Innerhalb von 2 Sekunden zurück bleibt die Serie erhalten.",
        "tips": "Nicht anhalten, wenn du abrutschst, sondern direkt zurück auf den Punkt."
      }
    ]
  },
  steps: [
    "Drücke auf Start und warte den Countdown ab.",
    "Lege den Cursor auf den Punkt, bis er grün wird.",
    "Bleib dran, damit sich alle ca. 1 Sekunde 5 Punkte sammeln.",
    "Geh bei Richtungswechseln und Abprallern mit.",
    "Nach 45 Sekunden siehst du Punktzahl, Serie und Bewertung."
  ],
  audience: "Für alle, die das gleichmäßige Verfolgen eines bewegten Ziels mit dem Cursor üben möchten, und Spieler, die ihr Tracking-Gefühl kurz prüfen wollen.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('krauzlis2004', 'rashbass1961'),
  related: [
    {
      "href": "/de/drills/visual/tracking-accuracy/moving-target",
      "label": "Bewegte Ziele abfangen"
    },
    {
      "href": "/de/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Mehrfach-Objektverfolgung"
    },
    {
      "href": "/de/drills/visual/visual-recognition/visual-search",
      "label": "Visuelle Suche"
    },
    {
      "href": "/de/drills/reaction-speed/visual-tracking-speed-test",
      "label": "Zielverfolgung testen"
    }
  ]
};

export default function LocalizedPursuitTrackerDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <AutoPursuitClient copy={{  "title": "Glatte Blickfolge (Smooth Pursuit)" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
