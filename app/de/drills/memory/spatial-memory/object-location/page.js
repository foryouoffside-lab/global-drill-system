import ObjectLocationClient from '@/app/drills/memory/spatial-memory/object-location/ObjectLocationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Räumlicher Gedächtnistest online | SkillDrills",
  description: "Räumlicher Gedächtnistest online: Objektposition merken – Emojis erscheinen 1,5 Sekunden im Raster, dann tippst du an, wo das gesuchte Objekt lag. Kostenlos.",
  keywords: ['räumlicher gedächtnistest', 'räumliches gedächtnis', 'gedächtnisraster', 'objektposition merken', 'objektlokalisierung', 'visuell-räumliches arbeitsgedächtnis', 'positionsgedächtnis', 'räumliche orientierung test', 'räumliches gedächtnistraining', 'wo war was test'],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/memory/spatial-memory/object-location",
    languages: getAlternateLanguages('/drills/memory/spatial-memory/object-location', 'de'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Räumlicher Gedächtnistest online | SkillDrills",
    description: "Räumlicher Gedächtnistest online: Objektposition merken – Emojis erscheinen 1,5 Sekunden im Raster, dann tippst du an, wo das gesuchte Objekt lag. Kostenlos.",
    url: "https://skilldrills.online/de/drills/memory/spatial-memory/object-location",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Räumlicher Gedächtnistest online | SkillDrills",
    description: "Räumlicher Gedächtnistest online: Objektposition merken – Emojis erscheinen 1,5 Sekunden im Raster, dann tippst du an, wo das gesuchte Objekt lag. Kostenlos.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedObjectLocationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "Gedächtnistraining", "item": "https://skilldrills.online/de/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Räumliches Gedächtnis", "item": "https://skilldrills.online/de/drills/memory/spatial-memory" },
      { "@type": "ListItem", "position": 4, "name": "Räumliches Gedächtnistest", "item": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Räumlicher Gedächtnistest (Objektposition merken)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Kostenloser räumlicher Gedächtnistest im Browser: Emoji-Objekte 1,5 Sekunden im Raster einprägen und danach die Position des gesuchten Objekts antippen.",
    "genre": "Memory Game / Spatial Memory",
    "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Räumlicher Gedächtnistest (Objektposition merken)",
    "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location",
    "description": "Kostenloser räumlicher Gedächtnistest im Browser: Emoji-Objekte 1,5 Sekunden im Raster einprägen und danach die Position des gesuchten Objekts antippen.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "sameAs": "https://de.wikipedia.org/wiki/R%C3%A4umliches_Ged%C3%A4chtnis",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Räumlicher Gedächtnistest (Objektposition merken)",
    "description": "Kostenloser räumlicher Gedächtnistest im Browser: Emoji-Objekte 1,5 Sekunden im Raster einprägen und danach die Position des gesuchten Objekts antippen.",
    "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location",
    "genre": ["Memory Game", "Cognitive Training", "Spatial Memory"],
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
            "name": "Was ist ein räumlicher Gedächtnistest (Object Location Memory Test)?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hier ist es ein kostenloses Übungsspiel: Sie merken sich, welches Objekt wo im Raster lag, und finden danach die Position eines gesuchten Objekts wieder. Das Ergebnis ist ein persönlicher Übungswert."
            }
      },
      {
            "@type": "Question",
            "name": "Wie funktioniert dieser Übungsmodus?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Auf einem 3x3-Raster erscheinen 2 Emoji-Objekte für 1,5 Sekunden. Danach wird oben ein Zielobjekt angezeigt, und Sie haben 8 Sekunden, um das Feld anzutippen, auf dem es lag. Ein Treffer bringt 150 Punkte und ein Level mehr; pro Level kommt ein Objekt hinzu (maximal 10). Ab Level 8 ist das Raster 4x4, ab Level 15 5x5. Die Gesamtzeit beträgt 45 Sekunden."
            }
      },
      {
            "@type": "Question",
            "name": "Ist das die Objektpositions-Aufgabe von Silverman und Eals?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nein. Eals und Silverman (1994) untersuchten das Objektortsgedächtnis mit einer Forschungsaufgabe, bei der nach dem Betrachten einer Objektanordnung Positionen abgefragt wurden. Dieses Spiel nutzt eine ähnliche Idee, folgt aber weder deren Ablauf noch deren Normwerten."
            }
      },
      {
            "@type": "Question",
            "name": "Was bedeutet 'Feature Binding' in den kognitiven Neurowissenschaften?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Der Prozess, bei dem der ventrale visuelle Pfad (Objekterkennung) und der dorsale Pfad (räumliche Lokalisation) im Hippocampus und parahippocampalen Kortex zu einer zusammenhängenden Erinnerung verschmolzen werden."
            }
      },
      {
            "@type": "Question",
            "name": "Wie wird die Punktzahl berechnet?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Jede richtig gefundene Zielposition bringt 150 Punkte. Die Bewertung im Ergebnisbildschirm ist eine SkillDrills-Übungsstufe mit 1.000 Punkten als oberer Marke – kein Durchschnittswert."
            }
      },
      {
            "@type": "Question",
            "name": "Worin liegt der Unterschied zu einem reinen Matrix-Gedächtnistest?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Beim visuellen Gedächtnistest (Gitter-Muster) tippen Sie das ganze leuchtende Muster nach und können es zu Formen bündeln. Hier merken Sie sich, welches Objekt auf welchem Feld lag, und suchen dann nur die Position eines einzigen Zielobjekts."
            }
      },
      {
            "@type": "Question",
            "name": "Warum ist das Merken von Objektpositionen anspruchsvoller als einfache Formen?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Weil das Verknüpfen zweier Merkmalsdimensionen (Identität und Raum) erhebliche Aufmerksamkeitsressourcen im Arbeitsgedächtnis bindet (Luck & Vogel, 1997)."
            }
      },
      {
            "@type": "Question",
            "name": "Welche Hirnareale steuern das räumliche Objektgedächtnis?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hauptsächlich der bilaterale Hippocampus, der Gyrus parahippocampalis, der posteriore Parietalkortex sowie der dorsolaterale präfrontale Kortex (DLPFC) zur aktiven Koordination."
            }
      },
      {
            "@type": "Question",
            "name": "Gibt es Strafpunkte für Fehlklicks?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nein. Ein falscher Klick oder das Überschreiten der 8 Sekunden beendet nur die Runde, ohne Punktabzug. Das Level sinkt nicht, es folgt eine neue Anordnung auf derselben Stufe. Die 45-Sekunden-Uhr läuft dabei weiter."
            }
      },
      {
            "@type": "Question",
            "name": "Wie hilft das Training im Alltag und beim Gaming?",
            "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Die Übung ähnelt Situationen, in denen Sie sich kurz eine Anordnung merken – etwa wo Schlüssel oder Werkzeuge liegen oder was auf der Minikarte zu sehen war. Eine Verbesserung in anderen Bereichen ist nicht garantiert."
            }
      }
]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Wie Sie das Objekt-Positions-Gedächtnis und räumliche Anker trainieren",
    "description": "Vier praktische Schritte mit Quadranten-Scanning und Landmark-Verankerung, um Objektpositionen in 1,5 Sekunden zu merken und wiederzufinden.",
    "step": [
      {
            "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location#step-1",
            
            "name": "Quadranten-Scanning durchführen",
            "text": "Teilen Sie das Raster beim Erscheinen der Objekte mental in 4 Sektoren (oben links, oben rechts, unten links, unten rechts) ein, um die Verteilung zu erfassen."
      },
      {
            "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location#step-2",
            
            "name": "An markanten Fixpunkten verankern",
            "text": "Binden Sie die Position jedes Objekts an topologische Landmarken wie Ecken, Außenkanten oder die Rastermitte."
      },
      {
            "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location#step-3",
            
            "name": "Semantisch-räumliche Paare bilden",
            "text": "Erstellen Sie blitzschnelle gedankliche Verknüpfungen zwischen Objektidentität und Position (z. B. 'Stern oben rechts, Schlüssel unten')."
      },
      {
            "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/object-location#step-4",
            
            "name": "Zielkoordinaten abrufen und anklicken",
            "text": "Sobald das Raster geleert und das Zielsymbol angezeigt wird, rufen Sie Ihre mentale Karte ab und tippen auf die exakte Zelle."
      }
]
  };

  const objectLocationGuide = {
    intro: [
      "Dieser räumliche Gedächtnistest online zeigt Emoji-Objekte 1,5 Sekunden lang in einem Raster. Danach wird ein Zielobjekt genannt, und Sie tippen das Feld an, auf dem es lag – Objektposition merken statt Muster nachtippen. Sie starten mit 2 Objekten auf 3x3; jeder Treffer bringt ein Objekt mehr (maximal 10), ab Level 8 wird das Raster 4x4, ab Level 15 5x5.",
      "Die wissenschaftliche Grundlage schufen Marion Eals und Irwin Silverman (1994) in ihren Pionierarbeiten zur Raumkognition. Sie wiesen nach, dass das Gedächtnis für Objektpositionen als spezialisierter evolutionärer Mechanismus getrennt von mentaler Rotation agiert. Dieses Spiel ist nicht deren Forschungsaufgabe, sondern eine ähnlich aufgebaute Übung. Bereits zuvor begründete Edward C. Tolman (1948) das Konzept der kognitiven Landkarte (Cognitive Map), das beschreibt, wie Organismen interne Raummodelle ihrer Umwelt konstruieren.",
      "Im Modell des Arbeitsgedächtnisses zeigten Robert H. Logie (1995) und Alan Baddeley (2000), dass die Objekt-Orts-Bindung durch den episodischen Puffer (Episodic Buffer) gesteuert wird, der Eingaben des visuellen Zwischenspeichers (Objektidentitäten) mit denen des inneren Schreibers (Raumkoordinaten) zusammenführt. Steven J. Luck und Edward K. Vogel (1997) bewiesen, dass Merkmalsverknüpfungen erhebliche Aufmerksamkeitsressourcen binden, während Nelson Cowan (2001) die Kapazität des fokalen Arbeitsgedächtnisses auf etwa 3 bis 4 Elemente schätzte.",
      "Ablauf: Die Anordnung ist 1,5 Sekunden sichtbar, danach haben Sie 8 Sekunden für die Antwort. Ein Treffer bringt 150 Punkte und ein Level mehr; ein Fehlklick oder Zeitablauf beendet die Runde ohne Punktabzug, und es folgt eine neue Anordnung auf derselben Stufe. Die Gesamtzeit beträgt 45 Sekunden; Reaktionszeiten werden nicht gemessen.",
      "Daten: Punktzahl und Bestwert werden nur im localStorage Ihres Browsers gespeichert und nicht an einen Server gesendet."
],
    benchmarks: {
      title: "SkillDrills-Übungsstufen (ein Durchgang)",
      headers: ["Stufe", "Punkte", "Treffer", "Erreichte Schwierigkeit"],
      rows: [
        ["Obere Übungsstufe", "ab 1.050", "7 oder mehr", "Level 8+, 9–10 Objekte, 4x4 (ab 14 Treffern 5x5)"],
        ["Mittlere Übungsstufe", "600 – 900", "4 – 6", "Level 5–7, 6–8 Objekte, 3x3"],
        ["Einstiegsstufe", "150 – 450", "1 – 3", "Level 2–4, 3–5 Objekte, 3x3"],
        ["Start", "0", "0", "Level 1, 2 Objekte, 3x3"]
      ],
      note: "Punkte = Treffer × 150. Die Stufen sind aus den Spielregeln abgeleitete SkillDrills-Übungsmarken, keine Bevölkerungsstatistik."
    },
    techniques: {
      title: "Evidenzbasierte Strategien zur Steigerung der Objekt-Orts-Bindung",
      items: [
        {
                "name": "Landmark-Verankerung (Landmark Anchoring)",
                "desc": "Verankern Sie Objekte an festen topologischen Fixpunkten wie den 4 Ecken, Kanten oder der Mitte (Tolman, 1948). 'Der Diamant ist in der linken oberen Ecke' ersetzt komplexe Koordinatenberechnungen durch markante Baken.",
                "tips": "Prüfen Sie direkt nach dem Erscheinen gezielt, welche Symbole an Ecken oder Rändern liegen."
        },
        {
                "name": "Semantisch-räumliche Paarung",
                "desc": "Knüpfen Sie assoziative Geschichten zwischen Objektbedeutung und Raumposition (Baddeley, 2000). Ein Stern oben wird mit dem Himmel verknüpft, ein Schlüssel unten mit einer Bodenschublade.",
                "tips": "Nutzen Sie kurze mentale Etiketten wie 'Stern oben, Schlüssel unten'."
        },
        {
                "name": "Quadranten-Zoning",
                "desc": "Unterteilen Sie größere 4x4- oder 5x5-Raster mental in 4 Quadranten. Das Vorabzählen der Objekte pro Quadrant schränkt das spätere Suchfeld enorm ein.",
                "tips": "Zählen Sie erst die Anzahl der Objekte pro Sektor, bevor Sie deren genaue Zellen fixieren."
        },
        {
                "name": "Parafovealer Zentrums-Blick",
                "desc": "Fixieren Sie die Rastermitte, um die globale Verteilung periphere zu erfassen, und nutzen Sie 1–2 gezielte Mikrosakkaden zur Verifikation unklarer Icons.",
                "tips": "Vermeiden Sie hektische Augenbewegungen; halten Sie den Kopf ruhig und scannen Sie gleichmäßig."
        }
]
    },
    steps: [
      "Fokussieren Sie die Mitte des Rasters und erfassen Sie die Gesamtanordnung.",
      "Verbinden Sie während der 1,5 s Präsentation jedes Objekt mit festen Landmarken.",
      "Bilden Sie blitzschnelle semantisch-räumliche Assoziationen zwischen Symbol und Ort.",
      "Rufen Sie nach dem Leeren des Rasters Ihre mentale Karte ab und tippen Sie das gesuchte Feld an.",
      "Mit jedem Level kommt ein Objekt hinzu und das Raster wächst von 3x3 auf 4x4 und 5x5 – wenden Sie dieselben Anker auf mehr Objekte an."
],
    audience: "Gamer (Minimap- und Cooldown-Tracking), Radiologen, Studierende technischer Fächer und alle, die ihr visuell-räumliches Arbeitsgedächtnis trainieren möchten.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'luck1997', 'tolman1948', 'eals1994'),
    related: [
      {
            "href": "/de/drills/memory/spatial-memory/grid-memorization",
            "label": "Visueller Gedächtnistest (Memory Matrix)"
      },
      {
            "href": "/de/drills/memory/spatial-memory/path-tracing",
            "label": "Pfade-Nachzeichnen Test (Path Tracing)"
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
            "label": "Dual N-Back Test"
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
      <ObjectLocationClient
        copy={{
        "h1Keyword": "Räumlicher Gedächtnistest online",
        "h1Suffix": "",
        "subtitle": "Objekte im Raster merken und wiederfinden",
        "statScore": "Punkte",
        "statTime": "Zeit",
        "statLevel": "Level",
        "statBestScore": "Bester Score",
        "levelPrefix": "Lv.",
        "memorizePrompt": "OBJEKTPOSITIONEN EINPRÄGEN",
        "targetPrompt": "ZIEL:",
        "startTitle": "Objektposition Pro",
        "startSubtitle": "Räumliches Gedächtnis • Objektposition",
        "countdownSubtitle": "BEREITMACHEN",
        "newBest": "NEUER REKORD",
        "pointsLabel": "Punkte",
        "statAccuracy": "Genauigkeit",
        "statPeakLevel": "Höchstes Level",
        "statPerfects": "Perfekt",
        "btnPlayAgain": "Erneut spielen",
        "rulesTitle": "Anleitung & Punktesystem",
        "aboutTitle": "Über das Objekt-Positions-Training",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Positionen merken & Ziel finden",
                        "highlight": "+150 PKT",
                        "result": "Objekte in 1,5 s einprägen und danach das gesuchte Ziel anklicken"
                },
                {
                        "num": "2",
                        "text": "Raster-Progression",
                        "highlight": "3x3 → 4x4 → 5x5",
                        "result": "Pro Level ein Objekt mehr (max. 10), ab Level 8 4x4, ab Level 15 5x5"
                },
                {
                        "num": "3",
                        "text": "Fehlklick / Zeitablauf",
                        "highlight": "Keine Strafpunkte",
                        "result": "Runde endet ohne Punktabzug; 8 s Antwortzeit, die 45-s-Uhr läuft weiter"
                },
                {
                        "num": "4",
                        "text": "Level bleibt stabil",
                        "highlight": "Kein Abstieg",
                        "result": "Schwierigkeit sinkt nicht, sodass Sie Ihre Raumanker festigen können"
                }
        ]
}}
      />
      <DrillGuide guide={objectLocationGuide} />
      <RelatedDrills />
    </>
  );
}
