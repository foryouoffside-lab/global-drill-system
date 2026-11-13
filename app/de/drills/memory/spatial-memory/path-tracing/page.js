import PathTracingClient from '@/app/drills/memory/spatial-memory/path-tracing/PathTracingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Corsi-Block-Test online | SkillDrills",
  description: "Kostenloser Corsi-Block-Test online: Merke dir, welche Felder nacheinander aufleuchten, und tippe sie in derselben Reihenfolge an. Pfade wachsen bis 7x7.",
  keywords: ['corsi-block-test', 'corsi block test online', 'räumliche blockspanne', 'räumliches sequenzgedächtnis', 'visuell-räumliches arbeitsgedächtnis', 'block-tapping-test'],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/path-tracing', 'de'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Corsi-Block-Test online | SkillDrills",
    description: "Kostenloser Corsi-Block-Test: aufleuchtende Felder in derselben Reihenfolge antippen. Übe deine räumliche Blockspanne im Browser, ohne Anmeldung.",
    url: "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Corsi-Block-Test online | SkillDrills",
    description: "Kostenloser Corsi-Block-Test: aufleuchtende Felder in derselben Reihenfolge antippen. Übe deine räumliche Blockspanne im Browser, ohne Anmeldung.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedPathTracingPage() {
  const appDescription = "Kostenloser Corsi-Block-Test im Browser: Benachbarte Felder leuchten nacheinander auf und bilden einen Pfad, den du in derselben Reihenfolge antippst. Jeder gelöste Pfad wird einen Schritt länger.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "Gedächtnistraining", "item": "https://skilldrills.online/de/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Räumliches Gedächtnis", "item": "https://skilldrills.online/de/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Corsi-Block-Test", "item": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Corsi-Block-Test online",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": appDescription,
    "genre": "Spatial Memory",
    "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Corsi-Block-Test online",
    "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing",
    "description": appDescription,
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Corsi-Block-Test online",
    "description": appDescription,
    "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing",
    "genre": ["Memory Game", "Spatial Sequence Memory"],
    "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
    "applicationCategory": "Game",
    "operatingSystem": "Any",
    "numberOfPlayers": {
      "@type": "QuantitativeValue",
      "value": 1
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie läuft der Corsi-Block-Test ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Felder im Raster leuchten im Abstand von 0,5 Sekunden nacheinander auf und zeigen einen Pfad. Danach hast du 10 Sekunden, um dieselben Felder in derselben Reihenfolge anzuklicken oder anzutippen. Ein vollständiger Pfad bringt +150 Punkte, und der nächste Pfad ist einen Schritt länger."
        }
      },
      {
        "@type": "Question",
        "name": "Ist das der Corsi-Block-Tapping-Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein. Das Prinzip entspricht der Corsi-Block-Aufgabe (Corsi, 1972): Positionen in ihrer Reihenfolge merken und wiedergeben. Hier wird jedoch ein quadratisches Raster verwendet, jeder Schritt führt nur zu einem direkt angrenzenden Feld (oben, unten, links, rechts), und kein Feld wird zweimal besucht. Es ist ein Übungsspiel."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wachsen Pfadlänge und Rastergröße?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Level 1 beginnt mit einem Pfad aus 3 Schritten. Jeder gelöste Pfad erhöht Level und Pfadlänge um 1. Das Raster ist bis 5 Schritte 3x3, bei 6 bis 8 Schritten 4x4, bei 9 bis 12 Schritten 5x5, bei 13 bis 16 Schritten 6x6 und ab 17 Schritten 7x7."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wird die Zeit gezählt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Sitzungsuhr hat 60 Sekunden und läuft nur, während du den Pfad eingibst. Die Vorführung des Pfads und die Ergebnisanzeige zählen nicht. Jeder einzelne Pfad muss innerhalb von 10 Sekunden nach Eingabebeginn fertig sein."
        }
      },
      {
        "@type": "Question",
        "name": "Was passiert bei einem falschen Feld?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Runde endet sofort und ein neuer Pfad gleicher Länge erscheint. Es gibt keinen Punkt- oder Zeitabzug, und das Level sinkt nicht. Eine Überschreitung der 10 Sekunden wird genauso behandelt; beides zählt in der Genauigkeit als Fehlversuch."
        }
      },
      {
        "@type": "Question",
        "name": "Wie merke ich mir lange Pfade besser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Da der Pfad immer zu einem Nachbarfeld weiterläuft, hilft es, Richtungsblöcke statt Einzelfelder zu speichern, etwa 'zwei rechts, eins hoch' (Chunking, Miller, 1956). Behalte während der Vorführung das ganze Raster im Blick und merke dir vor allem die Knickpunkte."
        }
      },
      {
        "@type": "Question",
        "name": "Was unterscheidet den Test vom visuellen Gedächtnistest (Memory Matrix)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei der Memory Matrix leuchten mehrere Felder gleichzeitig auf und lassen sich als ein Muster merken. Beim Corsi-Block-Test leuchten die Felder einzeln nacheinander auf, du musst also neben den Positionen auch die Reihenfolge behalten."
        }
      },
      {
        "@type": "Question",
        "name": "Werden meine Ergebnisse gespeichert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bestwert und höchstes Level werden nur im localStorage dieses Browsers gespeichert und nicht an einen Server gesendet. Die Ergebnisse sind Übungswerte und sagen nichts über Gedächtnisstörungen oder die Gesundheit des Gehirns aus."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "So spielst du den Corsi-Block-Test",
    "description": "Vier Schritte, um einen nacheinander aufleuchtenden Pfad in derselben Reihenfolge wiederzugeben.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing#step-1",
        "name": "Das ganze Raster ansehen",
        "text": "Verfolge während der Vorführung nicht nur das erste Feld, sondern achte auf das ganze Raster und darauf, wo der Pfad abbiegt."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing#step-2",
        "name": "In Richtungen bündeln",
        "text": "Jeder Schritt geht zu einem Nachbarfeld, also merke dir Richtungsblöcke wie 'rechts 2, hoch 1'."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing#step-3",
        "name": "In derselben Reihenfolge antippen",
        "text": "Nach der Vorführung klickst oder tippst du innerhalb von 10 Sekunden die Felder ab dem Startfeld in derselben Reihenfolge an."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/de/drills/memory/spatial-memory/path-tracing#step-4",
        "name": "Nach Fehlern direkt weitermachen",
        "text": "Fehler kosten weder Punkte noch ein Level, konzentriere dich also gleich auf den neuen Pfad gleicher Länge."
      }
    ]
  };

  const pathTracingGuide = {
    intro: [
      "Der Corsi-Block-Test online ist ein kostenloses Reihenfolge-Gedächtnisspiel: Felder in einem Raster leuchten nacheinander auf, und du tippst sie danach in derselben Reihenfolge an. Er überträgt das Prinzip der Corsi-Block-Aufgabe (Milner, 1971; Corsi, 1972) auf einen Pfad im Raster und trainiert so deine räumliche Blockspanne und das visuell-räumliche Arbeitsgedächtnis.",
      "Level 1 zeigt einen Pfad aus 3 Schritten auf einem 3x3-Raster. Die Felder leuchten im Abstand von 0,5 Sekunden auf; jeder Schritt führt zu einem Feld oben, unten, links oder rechts, und kein Feld wird zweimal besucht. Jeder gelöste Pfad bringt +150 Punkte, Level +1 und einen Schritt mehr; das Raster wächst über 4x4, 5x5 und 6x6 bis 7x7.",
      "Die Sitzungsuhr hat 60 Sekunden und läuft nur während der Eingabe. Jeder Pfad muss innerhalb von 10 Sekunden fertig sein. Ein falsches Feld oder eine Zeitüberschreitung beendet die Runde ohne Abzug; es folgt ein neuer Pfad gleicher Länge, und das Level sinkt nicht. Eingabe per Mausklick oder Touch.",
      "Datentransparenz: Ergebnisse werden nur im localStorage dieses Browsers gespeichert und nicht an einen Server gesendet. Deshalb veröffentlicht SkillDrills keine Nutzer-Durchschnitte oder Ranglisten."
    ],
    benchmarks: {
      title: "SkillDrills-Übungsstufen (Punkte = gelöste Pfade × 150)",
      headers: ["Übungsstufe", "Erreichte Pfadlänge · Raster", "Punkte", "Bedeutung"],
      rows: [
        ["Einstieg", "3–4 Schritte · 3x3", "0–150", "0–1 Pfade gelöst. Regeln und Eingaberhythmus kennenlernen"],
        ["Basis", "5–7 Schritte · 3x3–4x4", "300–600", "2–4 Pfade gelöst. Das Raster wird 4x4"],
        ["Geübt", "8–12 Schritte · 4x4–5x5", "750–1.350", "5–9 Pfade gelöst. Richtungsblöcke werden nötig"],
        ["Fortgeschritten", "13+ Schritte · 6x6–7x7", "1.500+", "10+ Pfade gelöst. Lange Pfade in 60 Sekunden Eingabezeit hintereinander"]
      ],
      note: "Diese Stufen sind aus den Punkteregeln des Spiels berechnete SkillDrills-Übungsstufen, keine Bevölkerungsnormen."
    },
    techniques: {
      title: "Tipps für längere Pfade",
      items: [
        {
          "name": "Richtungsblöcke bilden",
          "desc": "Der Pfad läuft immer zu einem Nachbarfeld weiter. Merke dir daher Richtungsblöcke wie 'rechts 2, hoch 1, links 1' statt einzelner Felder (Miller, 1956).",
          "tips": "Gib Formen Namen: L, Treppe, Zickzack."
        },
        {
          "name": "Knickpunkte markieren",
          "desc": "Gerade Abschnitte bleiben leicht hängen. Präge dir vor allem das Startfeld und die Felder ein, an denen die Richtung wechselt.",
          "tips": "Ruf vor der Eingabe Startfeld und letzten Richtungswechsel ab."
        },
        {
          "name": "Das ganze Raster im Blick behalten",
          "desc": "Statt jedem aufleuchtenden Feld hinterherzuspringen, schaust du nahe der Rastermitte und verfolgst den Verlauf.",
          "tips": "Besonders hilfreich auf 6x6- und 7x7-Rastern."
        },
        {
          "name": "Gleichmäßig eingeben",
          "desc": "Mit 10 Sekunden Eingabezeit musst du nicht hetzen, aber lange Pausen lassen die späteren Schritte verblassen.",
          "tips": "Gib Block für Block ein."
        }
      ]
    },
    steps: [
      "Start drücken und den 3-Sekunden-Countdown abwarten.",
      "Den Pfad ansehen, während die Felder einzeln aufleuchten.",
      "Innerhalb von 10 Sekunden dieselben Felder in derselben Reihenfolge anklicken oder antippen.",
      "Bei Erfolg wird der Pfad einen Schritt länger, bei einem Fehler kommt ein neuer Pfad gleicher Länge.",
      "Nach 60 Sekunden Eingabezeit Punkte, höchstes Level und Genauigkeit ansehen."
    ],
    audience: "Alle, die ihre räumliche Blockspanne und ihr visuell-räumliches Arbeitsgedächtnis spielerisch üben wollen, Gamer und Sportler, die sich Laufwege oder Bewegungsfolgen merken müssen, und alle, die ein kurzes Gedächtnisspiel suchen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('corsi1972', 'milner1971', 'logie1995', 'miller1956'),
    related: [
      {
        "href": "/de/drills/memory/spatial-memory/grid-memorization",
        "label": "Visueller Gedächtnistest (Memory Matrix)"
      },
      {
        "href": "/de/drills/memory/spatial-memory/object-location",
        "label": "Objekt-Positions-Gedächtnis (Object Location)"
      },
      {
        "href": "/de/drills/memory/short-term-memory/digit-span",
        "label": "Zahlenspannen-Test (Digit Span)"
      },
      {
        "href": "/de/drills/memory/short-term-memory/word-recall",
        "label": "Verbaler Gedächtnistest (Word Recall)"
      },
      {
        "href": "/de/drills/memory/working-memory/n-back",
        "label": "N-Back Test"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <PathTracingClient
        copy={{
        "h1Keyword": "Corsi-Block-Test online",
        "h1Suffix": " – räumliche Blockspanne",
        "subtitle": "Merke dir, welche Felder nacheinander aufleuchten, und tippe sie in derselben Reihenfolge an.",
        "statScore": "Punkte",
        "statTime": "Zeit",
        "statLevel": "Level",
        "statBestScore": "Bester Score",
        "levelPrefix": "Lv.",
        "startTitle": "Corsi-Block-Test",
        "startSubtitle": "Räumliche Blockspanne • Sequenzgedächtnis",
        "countdownSubtitle": "BEREITMACHEN",
        "newBest": "NEUER REKORD",
        "pointsLabel": "Punkte",
        "statAccuracy": "Genauigkeit",
        "statPeakLevel": "Höchstes Level",
        "statPerfects": "Perfekt",
        "btnPlayAgain": "Erneut spielen",
        "rulesTitle": "Regeln & Punkte",
        "aboutTitle": "Über den Corsi-Block-Test",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Pfad in derselben Reihenfolge wiedergeben",
                        "highlight": "+150 PKT",
                        "result": "Bei Erfolg Level +1 und ein Schritt mehr (10 s Eingabezeit)"
                },
                {
                        "num": "2",
                        "text": "Raster wächst",
                        "highlight": "3x3 → 7x7",
                        "result": "Mit längeren Pfaden wird das Raster automatisch größer"
                },
                {
                        "num": "3",
                        "text": "Fehlklick / Zeitablauf",
                        "highlight": "Kein Abzug",
                        "result": "Kein Punkte- oder Zeitverlust; neuer Pfad gleicher Länge"
                },
                {
                        "num": "4",
                        "text": "Level bleibt",
                        "highlight": "Kein Abstieg",
                        "result": "Das Level sinkt nie; die 60 Sekunden laufen nur während der Eingabe"
                }
        ]
}}
      />
      <DrillGuide guide={pathTracingGuide} />
      <RelatedDrills />
    </>
  );
}
