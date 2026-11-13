import DigitSpanClient from '@/app/drills/memory/short-term-memory/digit-span/DigitSpanClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Zahlenspanne Test online | Zahlen merken | SkillDrills",
  description: "Kostenloser Zahlenspanne Test online: Ziffernfolge kurz merken und in gleicher Reihenfolge eingeben. Start mit 3 Ziffern, je Treffer eine mehr, bis 15.",
  keywords: [
    "zahlenspanne test online",
    "zahlenspanne test",
    "zahlengedächtnis test",
    "zahlen merken test",
    "ziffernspanne test",
    "arbeitsgedächtnis zahlen",
    "kurzzeitgedächtnis zahlen",
    "phonologische schleife test",
    "digit span test deutsch",
    "zahlenreihe merken",
    "zahlenspanne vorwärts",
    "zahlenspanne rückwärts",
    "chunking zahlen",
    "gedächtnistest zahlen",
    "numerisches arbeitsgedächtnis"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Zahlenspanne Test online | Zahlen merken | SkillDrills",
    description: "Kostenloser Zahlenspanne Test online: Ziffernfolge kurz merken und in gleicher Reihenfolge eingeben. Start mit 3 Ziffern, je Treffer eine mehr, bis 15.",
    type: 'website',
    url: 'https://skilldrills.online/de/drills/memory/short-term-memory/digit-span',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Zahlenspanne Test online | Zahlen merken | SkillDrills",
    description: "Kostenloser Zahlenspanne Test online: Ziffernfolge kurz merken und in gleicher Reihenfolge eingeben. Start mit 3 Ziffern, je Treffer eine mehr, bis 15.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/memory/short-term-memory/digit-span',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/digit-span'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Gedächtnistraining", "item": "https://skilldrills.online/de/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Kurzzeitgedächtnis", "item": "https://skilldrills.online/de/drills/memory/short-term-memory" },
    { "@type": "ListItem", "position": 4, "name": "Zahlenspannen-Test", "item": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Zahlenspannen-Test Online (Digit Span)",
  "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "sameAs": ["https://de.wikipedia.org/wiki/Arbeitsged%C3%A4chtnis"],
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Zahlenspannen-Test Online (Digit Span)",
  "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span",
  "description": "Kostenloses Zahlen-merken-Spiel: Eine Ziffernfolge erscheint kurz auf einmal und wird in derselben Reihenfolge eingegeben. Start mit 3 Ziffern, je Treffer eine mehr.",
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Memory Game", "Cognitive Training", "Brain Training", "Working Memory"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};


const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zahlenspannen-Test Online (Digit Span)",
  "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So funktioniert der Zahlenspanne Test",
  "description": "In 4 Schritten Ziffernfolgen merken und in derselben Reihenfolge eingeben (45-Sekunden-Lauf).",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span#step-1",
      "name": "Ziffernfolge auf einen Blick erfassen",
      "text": "Die ganze Ziffernfolge erscheint auf einmal. Anfangs ist sie 2,5 Sekunden sichtbar, nach jedem Treffer 0,1 Sekunden kürzer (mindestens 0,8 Sekunden)."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span#step-2",
      "name": "In 2er- oder 3er-Gruppen teilen",
      "text": "Teile die Ziffern wie eine Telefonnummer in Gruppen (z. B. '739-281'), damit du weniger Einheiten halten musst."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span#step-3",
      "name": "Innerlich wiederholen",
      "text": "Sprich die Gruppen nach dem Ausblenden leise im Kopf weiter (phonologische Schleife), bis du eingibst."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/de/drills/memory/short-term-memory/digit-span#step-4",
      "name": "Innerhalb von 8 Sekunden eingeben",
      "text": "Tippe die Ziffern über das Tastenfeld oder die Zifferntasten der Tastatur in derselben Reihenfolge ein und bestätige mit Enter. Mit Backspace löschst du; für die Eingabe hast du 8 Sekunden."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert dieser Zahlenspanne Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine zufällige Ziffernfolge wird kurz auf einmal angezeigt. Danach gibst du sie in derselben Reihenfolge (vorwärts) ein. Du startest mit 3 Ziffern; ein Treffer verlängert die nächste Folge um 1 Ziffer (maximal 15), ein Fehler oder 8 Sekunden ohne Eingabe verkürzt sie um 1 (mindestens 3). Ein Lauf dauert 45 Sekunden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viele Zahlen kann man sich durchschnittlich merken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In der Forschung nannte Miller (1956) etwa 7 ± 2 Einheiten; ohne Wiederholen und Gruppieren liegt die Kapazität laut Cowan (2001) eher bei etwa 4. SkillDrills sammelt keine Nutzerdaten und nennt daher keine Durchschnitte oder Perzentile für dieses Spiel. Wegen Zeitlimit und automatischer Anpassung ist es mit Laborwerten nicht direkt vergleichbar; nutze die Übungsstufen unten."
      }
    },
    {
      "@type": "Question",
      "name": "Gibt es auch eine Rückwärts-Zahlenspanne?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein, dieser Test fragt nur vorwärts ab. Bei der Rückwärts-Variante müssen die Ziffern im Kopf umgedreht werden, was das Arbeitsgedächtnis stärker fordert; sie wird hier nicht angeboten."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das der Zahlennachsprechen-Untertest aus dem WAIS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Das Format ähnelt dem Zahlennachsprechen, es ist aber kein WAIS-Untertest und berechnet weder IQ noch Wertpunkte. Es ist ein kostenloses Übungsspiel."
      }
    },
    {
      "@type": "Question",
      "name": "Wie beeinflusst die phonologische Schleife die Leistung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Im Arbeitsgedächtnismodell von Baddeley werden Ziffern als Klang im phonologischen Speicher gehalten und durch inneres Wiederholen aufgefrischt. Ohne Wiederholen verblasst die Spur nach etwa 2 Sekunden, deshalb hilft es, sofort nach dem Ausblenden innerlich mitzusprechen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Punktzahl berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine richtig eingegebene Folge bringt 100 × (1 + 0,1 × (Ziffern − 3)) Punkte: 3 Ziffern = 100, 15 Ziffern = 220 Punkte. Fehler kosten weder Punkte noch Zeit, nur eine Ziffer Länge."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hilft Chunking beim Zahlen merken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wer Ziffern wie eine Telefonnummer gruppiert ('839-241'), merkt sich 6 Ziffern als 2 Blöcke. Weniger Einheiten lassen sich leichter halten, auch bei langen Folgen."
      }
    },
    {
      "@type": "Question",
      "name": "Warum verringert sich die Ziffernlänge nach einem Fehler?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Treffer verlängern um 1 Ziffer, Fehler verkürzen um 1 (1-up/1-down). So pendelt die Länge um deine aktuelle Grenze. Zusätzlich wird die Anzeigezeit nach einem Treffer 0,1 s kürzer und nach einem Fehler 0,2 s länger (0,8 bis 2,5 s)."
      }
    },
    {
      "@type": "Question",
      "name": "Kann Zahlenspannentraining Konzentration und Denkleistung steigern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das ist nicht garantiert. Mit Übung steigt meist der Wert in genau diesem Spiel; ob sich das auf Alltag, Lernen oder Denkleistung überträgt, ist in der Forschung umstritten."
      }
    },
    {
      "@type": "Question",
      "name": "Ist dieser Online-Test kostenlos und ohne Installation nutzbar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, kostenlos, ohne Installation und ohne Konto. Eingabe per Tastenfeld (Touch oder Klick) oder über die Zifferntasten der Tastatur; deine Bestwerte bleiben nur im Browser gespeichert."
      }
    }
  ]
};

const digitSpanGuide = {
  intro: [
  "Der Zahlenspanne Test zeigt dir kurz eine Ziffernfolge, die du danach in derselben Reihenfolge eingibst. Er ist eine Übungsversion der Zahlenspanne-Aufgabe (Digit Span), mit der die Psychologie seit Langem das Kurzzeitgedächtnis untersucht.",
  "Bekannt wurde die Frage nach der Spanne durch George A. Millers „magische Zahl 7 ± 2“ (1956). Ein ähnliches Zahlennachsprechen steckt auch im Wechsler-Intelligenztest (WAIS); dieses Spiel ist aber kein WAIS-Untertest und berechnet keine Wertpunkte.",
  "Im Arbeitsgedächtnismodell von Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000) werden Ziffernfolgen in der phonologischen Schleife gehalten und verblassen ohne inneres Wiederholen nach etwa 2 Sekunden. Nelson Cowan (2001) zufolge liegt die reine Kapazität ohne Wiederholen und Gruppieren bei etwa 4 Einheiten; für lange Folgen hilft daher Chunking.",
  "So läuft der Test: Start mit 3 Ziffern; die ganze Folge erscheint auf einmal (anfangs 2,5 s, nach jedem Treffer 0,1 s kürzer bis mindestens 0,8 s, nach einem Fehler 0,2 s länger). Danach hast du 8 Sekunden für die Eingabe über das Tastenfeld oder die Tastatur. Ein Treffer bringt 1 Ziffer mehr (maximal 15), ein Fehler oder Zeitablauf 1 weniger (mindestens 3). Aufgezeichnet werden Punktzahl, längste Folge und Trefferquote (Anteil gelöster Runden); Reaktionszeiten werden nicht gemessen.",
  "Datentransparenz: SkillDrills sammelt keine Punktzahlen auf Servern. Alle Werte bleiben im localStorage deines Browsers. Deshalb nennt diese Seite keine Nutzerdurchschnitte, Perzentile oder Nutzerzahlen; zitierte Zahlen stammen aus den unten aufgeführten Studien."
],
  benchmarks: {
    title: "Zahlenspanne Test – Übungsstufen (SkillDrills, 45-Sekunden-Lauf)",
    headers: ["Übungsstufe", "Erreichte Ziffernlänge", "Punkte bei fehlerfreiem Lauf", "Typische Merkstrategie"],
    rows: [
  ["Stufe A", "13+ Ziffern", "ca. 1.450+", "3er-/4er-Chunking plus schnelles inneres Wiederholen"],
  ["Stufe B", "11–12 Ziffern", "ca. 1.080–1.449", "Stabile 3er-Gruppen"],
  ["Stufe C", "9–10 Ziffern", "ca. 750–1.079", "Gruppiert in 2er/3er, verliert aber oft Ziffern in der Mitte"],
  ["Stufe D", "7–8 Ziffern", "ca. 460–749", "Ziffern einzeln wiederholt, noch kein Gruppieren"],
  ["Stufe E", "3–6 Ziffern", "unter 460", "Regeln und Anzeigetempo kennenlernen"]
],
    note: "SkillDrills-Übungsstufen, keine Bevölkerungsnormen und keine WAIS-Werte. Die Punkte gelten für einen fehlerfreien Lauf ab 3 Ziffern bis zu dieser Länge (Punkte pro Runde = 100 × (1 + 0,1 × (Ziffern − 3))); Fehler verkürzen die Folge, daher weichen echte Werte ab."
  },
  techniques: {
    title: "Strategien für eine längere Zahlenspanne",
    items: [
  {
    "name": "Rhythmisches 3er-Chunking",
    "desc": "Teile die Ziffern wie eine Telefonnummer in 3er-Gruppen (z. B. '739 - 281 - 405'; Miller, 1956). Aus 9 Ziffern werden 3 Blöcke.",
    "tips": "Betone innerlich die erste Ziffer jeder Gruppe leicht, dann bleiben die Grenzen klar."
  },
  {
    "name": "Schnelles inneres Wiederholen",
    "desc": "Sprich die Gruppen im Kopf zügig im Kreis (phonologische Schleife; Baddeley, 2000). Ohne Wiederholen verblasst die Spur nach etwa 2 Sekunden, also direkt nach dem Ausblenden beginnen.",
    "tips": "Sprich jede Gruppe als ein Wort, nicht Ziffer für Ziffer."
  },
  {
    "name": "Fingerweg auf dem Tastenfeld vorstellen",
    "desc": "Verwandle die Folge in einen Weg über das Tastenfeld (Logie, 1995). So kommt zur Klangspur eine räumliche Spur hinzu.",
    "tips": "Zeichne beim Anschauen gedanklich die Linie über die Tasten."
  },
  {
    "name": "Die Mitte sichern (Positionseffekt)",
    "desc": "Anfang und Ende bleiben meist besser hängen, Ziffern in der Mitte gehen am leichtesten verloren. Richte dein Wiederholen gezielt auf die mittleren Gruppen.",
    "tips": "Leg die ersten 3 Ziffern sofort fest und verlass dich bei den letzten 2 auf das frische Bild."
  }
]
  },
  steps: [
  "Starte den 45-Sekunden-Lauf und richte den Blick auf die Bildschirmmitte.",
  "Sobald die Ziffernfolge erscheint, teile sie sofort in 2er- oder 3er-Gruppen.",
  "Wiederhole die Gruppen nach dem Ausblenden schnell im Kopf.",
  "Gib die Ziffern innerhalb von 8 Sekunden in derselben Reihenfolge ein und bestätige mit Enter.",
  "Treffer verlängern die Folge, Fehler verkürzen sie: Vergleiche Punktzahl und längste Folge mit deinen eigenen Bestwerten."
],
  audience: "Schüler, Studierende, Berufstätige und alle, die ausprobieren möchten, wie viele Zahlen sie sich merken können, und ihr Arbeitsgedächtnis spielerisch üben wollen.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('miller1956', 'cowan2001', 'baddeley1974', 'baddeley2000', 'logie1995'),
  related: [
  {
    "href": "/de/drills/memory/working-memory/n-back",
    "label": "N-Back Arbeitsgedächtnis-Test"
  },
  {
    "href": "/de/drills/memory/spatial-memory/grid-memorization",
    "label": "Visueller Gedächtnistest (Grid)"
  },
  {
    "href": "/de/drills/cognitive/focus/concentration-grid",
    "label": "Schulte-Tabelle (Konzentrationsgitter)"
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

export default function LocalizedDigitSpanPage() {
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
      <DigitSpanClient copy={{
        "h1Keyword": "Zahlenspanne-Test",
        "h1Suffix": " – Zahlenfolgen merken",
        "subtitle": "Ziffernfolgen merken und exakt eingeben",
        "caption": "Merke dir die wachsende Ziffernfolge und gib sie anschließend in derselben Reihenfolge ein.",
        "statScore": "Punkte",
        "statTime": "Restzeit",
        "statSpan": "Spanne",
        "digitsUnit": "Ziffern",
        "statBest": "Bestwert",
        "hudScore": "Punkte",
        "hudTime": "Zeit",
        "memorizeTitle": "ZAHLENFOLGE MERKEN",
        "evaluating": "Auswertung...",
        "startTitle": "Zahlenspanne Pro",
        "startSubtitle": "Zahlengedächtnis • Arbeitsgedächtnis trainieren",
        "countdownSubtitle": "BEREIT MACHEN",
        "newBest": "NEUER REKORD",
        "pointsLabel": "Punkte",
        "statAccuracy": "Präzision",
        "statPeakSpan": "Spitzenspanne",
        "statPerfects": "Perfekt",
        "btnPlayAgain": "Erneut spielen",
        "rulesTitle": "Übungsregeln & Bewertungssystem",
        "rulesItems": [
                {
                        "num": "1",
                        "text": "Zahlenabruf",
                        "highlight": "+100 PKT",
                        "result": "Kurz angezeigte Ziffernfolge merken und per Tastenfeld oder Tastatur eingeben"
                },
                {
                        "num": "2",
                        "text": "Level-Bonus",
                        "highlight": "Bis zu +120% PKT",
                        "result": "Runde = 100 × (1 + 0,1 × (Ziffern − 3)) Punkte"
                },
                {
                        "num": "3",
                        "text": "Fehler / Timeout",
                        "highlight": "-1 Ziffer",
                        "result": "Fehler oder 8 s ohne Eingabe: kein Punkt- oder Zeitabzug, neue Folge 1 Ziffer kürzer"
                },
                {
                        "num": "4",
                        "text": "Adaptiver Test",
                        "highlight": "Steigt & fällt",
                        "result": "Treffer +1 Ziffer, Fehler −1 Ziffer (3 bis 15)"
                }
        ]
}} />
      <DrillGuide guide={digitSpanGuide} />
      <RelatedDrills />
    </>
  );
}
