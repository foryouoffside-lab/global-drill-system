import GridMemorizationClient from '@/app/drills/memory/spatial-memory/grid-memorization/GridMemorizationClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Visueller Gedächtnistest online | SkillDrills",
  description: "Visueller Gedächtnistest online: Merke dir die Felder, die 1,5 Sekunden in einer Matrix leuchten, und tippe das Muster nach – von 4x4 bis 5x5 mit 12 Feldern.",
  keywords: ['visueller gedächtnistest', 'visuelles gedächtnis test', 'muster in matrix merken', 'gedächtnistest matrix', 'memory matrix', 'muster merken test', 'visuell-räumliches gedächtnis', 'räumliches gedächtnis test', 'visuelles arbeitsgedächtnis', 'muster gedächtnis', 'gedächtnistraining online'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Visueller Gedächtnistest online | SkillDrills",
    description: "Visueller Gedächtnistest online: Merke dir die Felder, die 1,5 Sekunden in einer Matrix leuchten, und tippe das Muster nach – von 4x4 bis 5x5 mit 12 Feldern.",
    type: 'website',
    url: 'https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Visueller Gedächtnistest online | SkillDrills",
    description: "Visueller Gedächtnistest online: Merke dir die Felder, die 1,5 Sekunden in einer Matrix leuchten, und tippe das Muster nach – von 4x4 bis 5x5 mit 12 Feldern.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization',
    languages: getAlternateLanguages('/drills/memory/spatial-memory/grid-memorization'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Gedächtnistraining", "item": "https://skilldrills.online/de/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Räumliches Gedächtnis", "item": "https://skilldrills.online/de/drills/memory/spatial-memory" },
    { "@type": "ListItem", "position": 4, "name": "Visueller Gedächtnistest", "item": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Visueller Gedächtnistest Online (Memory Matrix)",
  "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "sameAs": "https://de.wikipedia.org/wiki/Visuelles_Ged%C3%A4chtnis",
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Visueller Gedächtnistest Online (Memory Matrix)",
  "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization",
  "description": "Kostenloser visueller Gedächtnistest im Browser: 1,5 Sekunden leuchtende Felder in einem 4x4- bis 5x5-Gitter merken und das Muster nachtippen.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Spatial Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Visueller Gedächtnistest Online (Memory Matrix)",
  "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Wie man das visuelle Arbeitsgedächtnis auf Matrixgittern trainiert",
  "description": "Vier praktische Schritte, um leuchtende Gittermuster in 1,5 Sekunden zu erfassen, zu Formen zu bündeln und nachzutippen.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization#step-1",
      
      "name": "Zentralen Blick fixieren",
      "text": "Richte deine Augen vor dem Aufleuchten fest auf das Gitterzentrum, um das parafoveale Sehfeld über die gesamte Matrix zu nutzen."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization#step-2",
      
      "name": "Gestalt-Form-Chunking anwenden",
      "text": "Gruppiere leuchtende Zellen in geometrische Einheiten (Ecken, Linien, Blöcke), statt isolierte Einzelkoordinaten zu memorieren."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization#step-3",
      
      "name": "Motorisch-räumliches Nachzeichnen",
      "text": "Ziehe während der 1,5-sekündigen Einprägephase mental eine kontinuierliche Linie durch die markierten Zellen, um den motorischen Abruf vorzubereiten."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/de/drills/memory/spatial-memory/grid-memorization#step-4",
      
      "name": "Systematische Matrix-Rekonstruktion",
      "text": "Klicke zuerst die erkannten zusammenhängenden Formcluster an und fülle anschließend isolierte Randzellen auf."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist ein visueller Gedächtnistest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hier ist es eine Übung für das visuell-räumliche Arbeitsgedächtnis: Du merkst dir, welche Felder in einer Matrix kurz aufleuchten, und tippst sie danach aus dem Gedächtnis nach – ohne die Positionen in Worten aufzusagen. Es ist ein kostenloses Übungsspiel."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert die Gitter-Gedächtnisübung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Auf einem 4x4-Gitter leuchten 5 Felder 1,5 Sekunden lang violett auf. Danach tippst du alle zuvor leuchtenden Felder an. Jedes vollständige Muster bringt 150 Punkte und ein zusätzliches Feld. Nach 7 Feldern auf 4x4 geht es auf 5x5 weiter (5 bis maximal 12 Felder). Die 60-Sekunden-Uhr läuft nur, während du das Muster nachtippst."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das der Visual Patterns Test (VPT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Der Visual Patterns Test (Della Sala et al., 1997) ist ein Forschungsverfahren mit Gittermustern. Diese Übung ist ein kostenloses Trainingsspiel in ähnlichem Format, folgt aber weder dessen Ablauf noch dessen Normwerten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie unterscheidet sich dieser Test vom Corsi-Block-Tapping-Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Corsi-Block-Test (Corsi, 1972) misst das sequenzielle räumliche Gedächtnis (zeitliche Tippabfolge) über den aktiven 'Inner Scribe'. Diese Gitterübung präsentiert alle Zellen simultan und isoliert die statische Kapazität des 'Visual Cache'."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Punktzahl berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jedes vollständig nachgetippte Muster bringt 150 Punkte. Die Bewertung im Ergebnisbildschirm ist eine SkillDrills-Übungsstufe mit 1.150 Punkten als oberer Marke – kein Durchschnitts- oder Normwert."
      }
    },
    {
      "@type": "Question",
      "name": "Wie verbessert räumliches Chunking das visuelle Erinnerungsvermögen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das visuelle Arbeitsgedächtnis hält nur etwa 3 bis 4 Objekte gleichzeitig (Luck & Vogel, 1997; Cowan, 2001). Fasst du benachbarte Felder zu Formen wie Linien, Dreiecken oder 'L'-Formen zusammen, musst du dir weniger Einheiten merken."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Visual Cache und Inner Scribe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Logies (1995) Modell ist der 'Visual Cache' ein passiver Speicher für statische visuelle Formen, Farben und Matrizen. Der 'Inner Scribe' ist ein aktiver Mechanismus zur Planung und mentalen Wiederholung räumlicher Bewegungen."
      }
    },
    {
      "@type": "Question",
      "name": "Warum verblassen Gittermuster nach 1,5 Sekunden so schnell?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Anzeige dauert in dieser Übung fest 1,5 Sekunden. Das ikonische Gedächtnis hält ein Bild nur sehr kurz; was du in dieser Zeit nicht zu Formen oder einer gedachten Linie bündelst, ist beim Nachtippen meist schon weg."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es Punktabzüge für falsche Klicks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Ein falscher Klick beendet nur die aktuelle Runde – ohne Punkt- oder Zeitabzug. Danach erscheint ein neues Muster auf derselben Schwierigkeitsstufe."
      }
    },
    {
      "@type": "Question",
      "name": "Wie nützt visuelles Gedächtnis im Alltag und beim Gaming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Übung ähnelt Situationen, in denen du eine Anordnung kurz siehst und dir merken musst – etwa Positionen auf einer Minikarte oder eine Stellung auf dem Schachbrett. Eine Verbesserung in anderen Bereichen ist nicht garantiert."
      }
    }
  ]
};

const gridGuide = {
  intro: [
  "Dieser visuelle Gedächtnistest online zeigt dir 1,5 Sekunden lang leuchtende Felder in einer Matrix. Danach tippst du das Muster aus dem Gedächtnis nach. Du startest mit 5 Feldern auf einem 4x4-Gitter, jedes gelöste Muster bringt ein Feld mehr, und auf dem 5x5-Gitter geht es bis zu 12 Feldern. Es geht darum, Muster in der Matrix zu merken, nicht darum, sie in Worte zu fassen.",
  "Die Untersuchung der räumlich-visuellen Gedächtnisspanne wurde durch Pietro Corsi (1972) mit dem Corsi-Block-Tapping-Test begründet, der nachwies, dass räumliche Gedächtnissysteme anatomisch getrennt von der verbalen Zahlenspanne arbeiten (Milner, 1971). 1997 veröffentlichten Sergio Della Sala, Robert H. Logie und Kollegen den Visual Patterns Test (VPT), um statische Matrixmuster von sequenziellen Bewegungspfaden abzugrenzen. Diese Übung nutzt ein ähnliches Format, ist aber nicht der VPT.",
  "In der modernen kognitiven Neurowissenschaft unterteilten Robert H. Logie (1995) und Alan Baddeley (2000) den räumlich-visuellen Notizblock in den passiven 'Visual Cache' (Speicher für Farben, Helligkeit und statische Formen) und den aktiven 'Inner Scribe' (Mechanismus für räumliche Bewegungsplanung). Studien von Steven J. Luck & Edward K. Vogel (1997) sowie Nelson Cowan (2001) belegen, dass ungebündelte visuelle Information strikt auf 3 bis 4 Objekte begrenzt ist. Das Erweitern der Gedächtnisspanne erfordert räumliches Chunking – das Zusammenfassen von Feldern zu ganzheitlichen Gestaltmustern.",
  "Ablauf: Jedes Muster wird 1,5 Sekunden gezeigt. Die 60-Sekunden-Uhr läuft nur, während du nachtippst. Ein vollständiges Muster bringt 150 Punkte; ein falsches Feld beendet die Runde ohne Punkt- oder Zeitabzug, und es folgt ein neues Muster auf derselben Stufe. Reaktionszeiten werden nicht gemessen.",
  "Daten: Punktzahl und Bestwert werden nur lokal in deinem Browser (localStorage) gespeichert und nicht an einen Server gesendet."
],
  benchmarks: {
    title: "SkillDrills-Übungsstufen (ein Durchgang)",
    headers: ["Stufe", "Punkte", "Gelöste Muster", "Erreichte Schwierigkeit"],
    rows: [
      ["Obere Übungsstufe", "ab 1.200", "8 oder mehr", "5x5-Gitter, 10–12 Felder"],
      ["Mittlere Übungsstufe", "600 – 1.050", "4 – 7", "5x5-Gitter, 6–9 Felder"],
      ["Einstiegsstufe", "150 – 450", "1 – 3", "4x4 mit 6–7 Feldern, nach 3 Mustern 5x5"],
      ["Start", "0", "0", "4x4-Gitter, 5 Felder"]
    ],
    note: "Punkte = gelöste Muster × 150. Die Stufen sind aus den Spielregeln abgeleitete SkillDrills-Übungsmarken, keine Bevölkerungsstatistik oder Normwerte."
  },
  techniques: {
    title: "Evidenzbasierte Techniken zur Steigerung des Matrix-Gedächtnisses",
    items: [
  {
    "name": "Gestalt-Form-Chunking",
    "desc": "Gruppiere benachbarte leuchtende Felder mental zu bekannten geometrischen Grundformen wie Dreiecken, Linien oder Buchstaben (Wertheimer, 1923; Della Sala et al., 1999). Wer 7 Koordinaten zu 2 bis 3 Formen bündelt, muss sich weniger Einheiten merken.",
    "tips": "Suche gezielt nach zusammenhängenden Kanten und Eckblöcken statt isolierten Einzelfeldern."
  },
  {
    "name": "Negativraum-Enkodierung (Ausschlussprinzip)",
    "desc": "Wenn ein Bereich dicht mit leuchtenden Feldern gefüllt ist, merke dir die unbeleuchteten dunklen Lücken. In einem 6er-Block 2 dunkle Aussparungen zu kodieren ist effizienter, als 4 Leuchtfelder zu speichern.",
    "tips": "Fokussiere dich bei hoher Felddichte bewusst auf die dunklen 'Löcher'."
  },
  {
    "name": "Kinästhetisches Linientracking",
    "desc": "Aktiviere den 'Inner Scribe' (Logie, 1995), indem du während der 1,5 Sekunden Einprägezeit mental eine durchgehende Linie durch alle Punkte ziehst. Das Vorplanen von Bewegungspfaden stärkt den passiven Abruf.",
    "tips": "Folge einem festen Lesemuster (z.B. von oben links nach unten rechts), um dem Muster Struktur zu verleihen."
  },
  {
    "name": "Zentrale Blickanker & Parafoveales Abbild",
    "desc": "Halte deinen Blick starr auf das Zentrum des Gitters gerichtet. Hektische Blicksprünge (Sakkaden) verwischen das Bild; das parafoveale Sehfeld erfasst das Gesamtmuster simultan.",
    "tips": "Entspanne deinen Fokus leicht, um das Muster wie ein fotografisches Standbild aufzunehmen."
  }
]
  },
  steps: [
  "Blicke auf die Mitte des Gitters und warte auf das Aufleuchten des Musters.",
  "Fasse die leuchtenden Felder innerhalb von 1,5 Sekunden zu 2 bis 3 geometrischen Formen zusammen.",
  "Nutze bei dichten Clustern den Negativraum (dunkle Lücken), um die Informationsmenge zu reduzieren.",
  "Tippe nach dem Erlöschen die gemerkten Formen zügig auf dem Gitter ein.",
  "Steigere dich von 4x4- auf 5x5-Matrizen, um deine visuelle Kapazitätsgrenze kontinuierlich zu verschieben."
],
  audience: "Gamer für verbesserte Minikarten-Wahrnehmung, MINT-Studenten für räumliches Denken, Schachspieler, Radiologen und alle, die ihr nonverbales Arbeitsgedächtnis trainieren wollen.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('cowan2001', 'baddeley2000', 'logie1995', 'corsi1972', 'luck1997', 'milner1971'),
  related: [
  {
    "href": "/de/drills/memory/working-memory/n-back",
    "label": "N-Back Arbeitsgedächtnis-Test"
  },
  {
    "href": "/de/drills/cognitive/focus/concentration-grid",
    "label": "Schulte-Tabelle (Konzentrationsgitter)"
  },
  {
    "href": "/de/drills/memory/short-term-memory/digit-span",
    "label": "Zahlenspannen-Test"
  },
  {
    "href": "/de/drills/visual/reaction-speed/light-reaction",
    "label": "Reaktionstest (Reaktionszeit messen)"
  },
  {
    "href": "/de/drills/reaction-speed/reflex-training-drill",
    "label": "Reflex-Training & Reaktionsspiel"
  }
]
};

export default function LocalizedGridMemorizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GridMemorizationClient copy={{
        "h1Keyword": "Visueller Gedächtnistest online",
        "h1Suffix": "",
        "subtitle": "Leuchtende Muster in einer Matrix merken",
        "caption": "Das visuelle Arbeitsgedächtnis speichert etwa vier separate Objekte gleichzeitig, wobei die Kapazitätsgrenze durch die Objektanzahl und nicht durch den Detailgrad bestimmt wird (Luck & Vogel, 1997). Statische Matrixgitter testen den visuellen Cache – den passiven Speicher für Form und räumliche Anordnung (Logie, 1995).",
        "statScore": "Punkte",
        "statTime": "Restzeit",
        "statGridSize": "Gittergröße",
        "statBest": "Bestwert",
        "hudScore": "Punkte",
        "hudTime": "Zeit",
        "startTitle": "Visueller Gedächtnistest Pro",
        "startSubtitle": "Visuelles Gedächtnis • Matrix",
        "countdownSubtitle": "BEREIT MACHEN",
        "newBest": "NEUER REKORD",
        "pointsLabel": "Punkte",
        "statAccuracy": "Präzision",
        "cellsUnit": "Felder",
        "statPeakPattern": "Spitzenmuster",
        "statPerfects": "Perfekt",
        "btnPlayAgain": "Erneut spielen",
        "rulesTitle": "Übungsregeln & Bewertungssystem",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Musterabruf",
                        "highlight": "+150 PKT",
                        "result": "Positionen aufleuchtender Felder einprägen und antippen"
                },
                {
                        "num": "2",
                        "text": "Level-Progression",
                        "highlight": "4x4 → 5x5",
                        "result": "Jedes gelöste Muster bringt ein Feld mehr, bis 12 Felder auf 5x5"
                },
                {
                        "num": "3",
                        "text": "Fehlklick",
                        "highlight": "Keine Abzüge",
                        "result": "Runde endet, kein Punkte- oder Zeitabzug"
                },
                {
                        "num": "4",
                        "text": "Schwierigkeit bleibt",
                        "highlight": "Aktuelles Level",
                        "result": "Nach einem Fehler folgt ein neues Muster auf gleicher Stufe"
                }
        ]
}} />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
