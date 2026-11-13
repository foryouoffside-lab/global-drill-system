import WordRecallClient from '@/app/drills/memory/short-term-memory/word-recall/WordRecallClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Wortgedächtnis Test online | Wörter merken | SkillDrills",
  description: "Kostenloser Wortgedächtnis-Test: Merke dir eine Wortliste, rufe die Wörter frei ab und trainiere dein verbales Arbeitsgedächtnis im Browser.",
  keywords: [
    "wortgedächtnis test online",
    "wortgedächtnis test",
    "verbaler gedächtnistest",
    "wörter merken test",
    "wortliste gedächtnis",
    "freier abruf test",
    "serielle position test",
    "verbales arbeitsgedächtnis",
    "wortabruf test online",
    "kurzzeitgedächtnis wörter",
    "semantisches chunking",
    "gedächtnistraining wörter",
    "wortlisten lernen",
    "verbale merkfähigkeit"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall",
    languages: getAlternateLanguages('/drills/memory/short-term-memory/word-recall', 'de'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Wortgedächtnis Test online | Wörter merken | SkillDrills",
    description: "Kostenloser Wortgedächtnis-Test: Merke dir eine Wortliste, rufe die Wörter frei ab und trainiere dein verbales Arbeitsgedächtnis im Browser.",
    url: "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Wortgedächtnis Test online | Wörter merken | SkillDrills",
    description: "Kostenloser Wortgedächtnis-Test: Merke dir eine Wortliste, rufe die Wörter frei ab und trainiere dein verbales Arbeitsgedächtnis im Browser.",
  },
};

export const dynamic = 'force-static';

export default function LocalizedWordRecallPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "Gedächtnistraining", "item": "https://skilldrills.online/de/drills/memory" },
      { "@type": "ListItem", "position": 3, "name": "Kurzzeitgedächtnis", "item": "https://skilldrills.online/de/drills/memory/short-term-memory" },
      { "@type": "ListItem", "position": 4, "name": "Wortgedächtnis Test", "item": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Wortgedächtnis Test online",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Kostenloser Wortgedächtnis Test: Eine Wortliste ist 2 Sekunden sichtbar, danach tippst du die Wörter in beliebiger Reihenfolge ein. Start mit 3 Wörtern.",
    "genre": "Cognitive Assessment / Verbal Memory",
    "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Wortgedächtnis Test online",
    "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall",
    "description": "Kostenloser Wortgedächtnis Test: Eine Wortliste ist 2 Sekunden sichtbar, danach tippst du die Wörter in beliebiger Reihenfolge ein. Start mit 3 Wörtern.",
    "dateModified": "2026-11-12",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "isAccessibleForFree": true,
  "sameAs": ["https://de.wikipedia.org/wiki/Arbeitsged%C3%A4chtnis"],
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Wortgedächtnis Test online",
    "description": "Kostenloser Wortgedächtnis Test: Eine Wortliste ist 2 Sekunden sichtbar, danach tippst du die Wörter in beliebiger Reihenfolge ein. Start mit 3 Wörtern.",
    "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall",
    "genre": ["Memory Game", "Cognitive Training", "Brain Game"],
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
        "name": "Wie funktioniert dieser Wortgedächtnis Test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Wortliste erscheint 2 Sekunden lang auf einmal. Danach tippst du innerhalb von 12 Sekunden alle Wörter, die du behalten hast, getrennt durch Leerzeichen oder Komma, und schickst mit Enter ab. Die Reihenfolge ist egal (freie Wiedergabe). Du startest mit 3 Wörtern; sind alle richtig und kein falsches dabei, kommt ein Wort dazu (maximal 12), sonst fällt eins weg (mindestens 3). Ein Lauf dauert 45 Sekunden."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wird die Punktzahl berechnet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nur Runden, in denen du alle Wörter ohne zusätzliche Wörter eingibst, bringen Punkte: 150 × (1 + 0,15 × (Wörter − 3)). 3 Wörter = 150 Punkte, 12 Wörter = rund 353 Punkte. Fehler kosten weder Punkte noch Zeit, nur ein Wort Listenlänge."
        }
      },
      {
        "@type": "Question",
        "name": "Wie viele Wörter kann man sich durchschnittlich merken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SkillDrills sammelt keine Nutzerdaten und nennt daher keine Durchschnitte oder Perzentile. Wegen 2 Sekunden Anzeige und 12 Sekunden Eingabezeit ist das Spiel nicht mit klinischen Wortlisten-Tests vergleichbar. Vergleiche dich mit den Übungsstufen unten und deinen eigenen Bestwerten."
        }
      },
      {
        "@type": "Question",
        "name": "Was passiert bei Tippfehlern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jedes Wort muss genau mit der Liste übereinstimmen (Groß-/Kleinschreibung und Akzente werden ignoriert). Ein Tippfehler zählt als falsches Wort, und das richtige Wort gilt als vergessen, also ist die Runde verloren."
        }
      },
      {
        "@type": "Question",
        "name": "Was unterscheidet freie Wiedergabe von Wiedererkennen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei der freien Wiedergabe holst du die Wörter ohne Hinweise aus dem Gedächtnis; beim Wiedererkennen wählst du Gesehenes aus Vorgaben aus. Dieser Test nutzt freie Wiedergabe und ist daher schwerer."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der serielle Positionseffekt bei Wortlisten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wörter am Anfang (Primacy) und am Ende (Recency) einer Liste werden besser behalten als die in der Mitte (Murdock, 1962). Da hier alle Wörter gleichzeitig erscheinen, übernimmt deine Lesereihenfolge diese Rolle."
        }
      },
      {
        "@type": "Question",
        "name": "Warum hilft es, Wörter zu einem Bild zu verknüpfen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wer über die Bedeutung nachdenkt oder Wörter verbindet, verarbeitet sie tiefer und behält sie meist besser (Verarbeitungstiefe, Craik & Lockhart, 1972). Bei nur 2 Sekunden ist eine einfache gemeinsame Szene realistischer als eine lange Geschichte."
        }
      },
      {
        "@type": "Question",
        "name": "Spielt die Reihenfolge bei der Eingabe eine Rolle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein. Die Runde zählt, wenn alle Wörter der Liste enthalten sind, egal in welcher Reihenfolge. Es lohnt sich, die zuletzt gelesenen Wörter zuerst zu tippen."
        }
      },
      {
        "@type": "Question",
        "name": "Verbessert dieses Training das Gedächtnis im Alltag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das ist nicht garantiert. Mit Übung wird man in genau diesem Spiel meist besser; ob sich das auf den Alltag überträgt, ist in der Forschung umstritten. Der Test ist kein Diagnoseverfahren; bei Gedächtnissorgen wende dich an eine Ärztin oder einen Arzt."
        }
      },
      {
        "@type": "Question",
        "name": "Ist dieser Online-Wortgedächtnistest kostenlos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, kostenlos, ohne Installation und ohne Konto. Deine Bestwerte bleiben nur im Browser gespeichert."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "So funktioniert der Wortgedächtnis Test",
    "description": "In 4 Schritten eine 2 Sekunden sichtbare Wortliste merken und eintippen (45-Sekunden-Lauf).",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall#step-1",
        "name": "Wortliste 2 Sekunden ansehen",
        "text": "Die ganze Liste erscheint auf einmal für 2 Sekunden. Lies sie zügig durch."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall#step-2",
        "name": "Zu einer Szene verbinden",
        "text": "Stell dir alle Wörter in einer kurzen gemeinsamen Szene vor."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall#step-3",
        "name": "Letzte Wörter zuerst tippen",
        "text": "Sobald das Eingabefeld erscheint, tippe zuerst die zuletzt gelesenen Wörter. Die Reihenfolge ist egal."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "url": "https://skilldrills.online/de/drills/memory/short-term-memory/word-recall#step-4",
        "name": "Innerhalb von 12 Sekunden absenden",
        "text": "Trenne die Wörter mit Leerzeichen oder Komma und schicke sie mit Enter ab. Für die Eingabe hast du 12 Sekunden."
      }
    ]
  };

  const wordRecallGuide = {
    heading: "Wortgedächtnis Test – Leitfaden zur freien Wiedergabe",
    intro: [
      "Der Wortgedächtnis Test zeigt dir kurz eine Wortliste; danach tippst du alle Wörter, die du dir merken konntest, in beliebiger Reihenfolge ein. Er ist eine Übungsversion der freien Wiedergabe aus der Gedächtnispsychologie und kein klinischer Test oder Diagnoseverfahren.",
      "Die Forschung zu Wortlisten beginnt mit Hermann Ebbinghaus (1885). Bennet Murdock (1962) beschrieb bei freier Wiedergabe den seriellen Positionseffekt – Anfang und Ende einer Liste bleiben besser hängen –, und Endel Tulving (1962) zeigte, dass Menschen Wörter von sich aus zu Gruppen ordnen.",
      "Nach dem Ansatz der Verarbeitungstiefe (Craik & Lockhart, 1972) bleiben Wörter besser haften, wenn man über ihre Bedeutung nachdenkt oder sie verknüpft. Bei der kurzen Anzeige in diesem Spiel hilft es, die Wörter schnell zu einer Szene zu verbinden.",
      "So läuft der Test: Start mit 3 Wörtern; die ganze Liste erscheint 2 Sekunden lang auf einmal. Danach hast du 12 Sekunden, um die Wörter getrennt durch Leerzeichen oder Komma einzutippen und mit Enter abzusenden. Sind alle richtig und kein falsches dabei, kommt ein Wort dazu (maximal 12); fehlt eins, ist eins falsch oder läuft die Zeit ab, fällt eins weg (mindestens 3). Aufgezeichnet werden Punktzahl, längste Liste und Trefferquote (Anteil gelöster Runden); Reaktionszeiten werden nicht gemessen.",
      "Datentransparenz: SkillDrills sammelt keine Ergebnisse auf Servern. Alle Werte bleiben im localStorage deines Browsers, deshalb nennt diese Seite keine Nutzerdurchschnitte, Perzentile oder Nutzerzahlen; die zitierten Studien stehen unten.",
      "Medizinischer Hinweis: Dieses Übungsspiel ist kein Medizinprodukt und kein Diagnoseverfahren. Bei Sorgen um dein Gedächtnis wende dich an eine Fachärztin oder einen Facharzt."
    ],
    benchmarks: {
      title: "Wortgedächtnis Test – Übungsstufen (SkillDrills, 45-Sekunden-Lauf)",
      headers: ["Übungsstufe", "Erreichte Wortanzahl", "Punkte bei fehlerfreiem Lauf", "Typische Merkstrategie"],
      rows: [
        ["Stufe A", "12 Wörter", "ca. 2.160+", "Ganze Liste sofort zu einer Szene verbunden"],
        ["Stufe B", "10–11 Wörter", "ca. 1.520–2.159", "Wörter nach Bedeutung in 2er/3er-Gruppen"],
        ["Stufe C", "8–9 Wörter", "ca. 980–1.519", "Anfang und Ende sitzen, Wörter in der Mitte fehlen"],
        ["Stufe D", "6–7 Wörter", "ca. 520–979", "Wörter einzeln gelesen und gemerkt"],
        ["Stufe E", "3–5 Wörter", "unter 520", "2-Sekunden-Anzeige und Eingabe kennenlernen"]
      ],
      note: "SkillDrills-Übungsstufen, keine Bevölkerungsnormen. Die Punkte gelten für einen fehlerfreien Lauf ab 3 Wörtern bis zu dieser Länge (Punkte pro Runde = 150 × (1 + 0,15 × (Wörter − 3))). In 45 Sekunden sind nur begrenzt viele Runden möglich und Fehler verkürzen die Liste, daher weichen echte Werte ab."
    },
    techniques: {
      title: "Strategien, um mehr Wörter zu merken",
      items: [
        {
          "name": "Eine gemeinsame Szene bilden",
          "desc": "Setze alle Wörter in ein Bild (z. B. „Fluss“, „Kerze“, „Drache“ → ein Drache mit Kerze über einem Fluss). Bedeutungsvolles Verknüpfen sorgt für tiefere Verarbeitung (Craik & Lockhart, 1972).",
          "tips": "Halte die Szene einfach, damit sie in 2 Sekunden steht."
        },
        {
          "name": "Nach Kategorien ordnen",
          "desc": "Fasse ähnliche Wörter zusammen, etwa Tiere, Orte, Gegenstände. Menschen gruppieren Wörter von sich aus (Tulving, 1962).",
          "tips": "Ruf die Wörter auch beim Tippen Kategorie für Kategorie ab."
        },
        {
          "name": "Die letzten Wörter zuerst",
          "desc": "Frisch gelesene Wörter verblassen schnell (Recency). Tippe sie zuerst und hol dann Anfang und Mitte zurück (Murdock, 1962).",
          "tips": "Die Reihenfolge der Eingabe beeinflusst die Wertung nicht."
        },
        {
          "name": "Auf Tippfehler achten",
          "desc": "Ein Tippfehler zählt als falsches Wort und kostet die ganze Runde. Genau tippen ist innerhalb der 12 Sekunden wichtiger als raten.",
          "tips": "Unsichere Wörter lieber weglassen? Auch ein fehlendes Wort kostet die Runde – tippe, was du sicher weißt, sorgfältig."
        }
      ]
    },
    steps: [
      "Starte den 45-Sekunden-Lauf und richte den Blick auf die Wortanzeige in der Mitte.",
      "Lies die 2 Sekunden lang sichtbare Liste zügig und verbinde die Wörter zu einer Szene.",
      "Tippe im Eingabefeld zuerst die zuletzt gelesenen Wörter.",
      "Gib alle Wörter getrennt durch Leerzeichen oder Komma innerhalb von 12 Sekunden ein und sende mit Enter ab.",
      "Volle Treffer verlängern die Liste, Fehler verkürzen sie: Vergleiche Punktzahl und längste Liste mit deinen eigenen Bestwerten."
    ],
    audience: "Schüler, Studierende, Berufstätige und alle, die ausprobieren möchten, wie viele Wörter sie sich merken können.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('craik1972', 'murdock1962', 'tulving1962'),
    related: [
      { href: "/de/drills/memory/short-term-memory/digit-span", label: "Zahlenspannen-Test" },
      { href: "/de/drills/memory/short-term-memory/color-sequence", label: "Farbsequenz-Spiel im Senso-Stil" },
      { href: "/de/drills/memory/spatial-memory/grid-memorization", label: "Visueller Gedächtnistest" },
      { href: "/de/drills/memory/spatial-memory/object-location", label: "Objekt-Ortungstest" },
      { href: "/de/drills/memory/working-memory/n-back", label: "3-Back-Arbeitsgedächtnistest" }
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
      <WordRecallClient copy={{
          "h1Keyword": "Wortgedächtnis-Test",
          "h1Suffix": " – Wörter merken und abrufen",
          "subtitle": "Wortliste merken und frei wiedergeben",
          "statScore": "Punkte",
          "statTime": "Zeit",
          "statWords": "Wörter",
          "wordsUnit": "Wörter",
          "statBestScore": "Bestwert",
          "memorizePhase": "WÖRTER EINPRÄGEN",
          "btnSkip": "Überspringen",
          "inputPhase": "ERINNERTE WÖRTER EINGEBEN",
          "inputPlaceholder": "Erinnerte Wörter mit Leerzeichen getrennt eingeben...",
          "btnSubmit": "ANTWORT ABSENDEN",
          "inputHint": "Enter-Taste zum Absenden drücken",
          "feedbackPhase": "ERGEBNISAUSWERTUNG",
          "extraWordsLabel": "Überflüssige oder falsch eingegebene Wörter:",
          "startTitle": "Wort-Recall Pro",
          "startSubtitle": "Wortgedächtnis • freier Abruf",
          "countdownSubtitle": "BEREITMACHEN",
          "newBest": "NEUER REKORD",
          "pointsLabel": "Punkte",
          "statAccuracy": "Genauigkeit",
          "statPeakWords": "Max. Wörter",
          "statPerfects": "Perfekt",
          "btnPlayAgain": "Nochmal spielen",
          "rulesTitle": "Regeln & Punktesystem",
          "aboutTitle": "Über den verbalen Gedächtnistest (Word Recall)",
          "rulesItems": [
                    {
                              "num": "1",
                              "text": "Wortlisten-Abruf",
                              "highlight": "+150 PKT",
                              "result": "Wörter während der Merkphase einprägen und danach frei eintippen"
                    },
                    {
                              "num": "2",
                              "text": "Stufen-Bonus",
                              "highlight": "Bis zu +135%",
                              "result": "Runde = 150 × (1 + 0,15 × (Wörter − 3)) Punkte"
                    },
                    {
                              "num": "3",
                              "text": "Fehlversuch / Timeout",
                              "highlight": "-1 Wort",
                              "result": "Fehlendes/falsches Wort oder 12 s abgelaufen: kein Punkt- oder Zeitabzug, 1 Wort weniger"
                    },
                    {
                              "num": "4",
                              "text": "Adaptive Wortspanne",
                              "highlight": "Steigt & fällt",
                              "result": "Alle richtig +1 Wort, Fehler −1 Wort (3 bis 12)"
                    }
          ],
          "wordBank": [
                    "Apfel",
                    "Brücke",
                    "Schloss",
                    "Diamant",
                    "Adler",
                    "Wald",
                    "Garten",
                    "Hammer",
                    "Insel",
                    "Dschungel",
                    "Ritter",
                    "Laterne",
                    "Berg",
                    "Nadel",
                    "Ozean",
                    "Palast",
                    "Königin",
                    "Rakete",
                    "Sonnenuntergang",
                    "Tempel",
                    "Regenschirm",
                    "Tal",
                    "Fenster",
                    "Zebra",
                    "Kerze",
                    "Drache",
                    "Feder",
                    "Silber",
                    "Gold",
                    "Marmor",
                    "Samt",
                    "Kristall",
                    "Bronze",
                    "Kupfer",
                    "Schatten",
                    "Geist",
                    "Weisheit",
                    "Ehre",
                    "Ruhm",
                    "Traum",
                    "Sturm",
                    "Fluss",
                    "Wolke",
                    "Flamme",
                    "Stein",
                    "Donner",
                    "Regenbogen",
                    "Phönix",
                    "Uhr",
                    "Spiegel"
          ]
}} />
      <DrillGuide guide={wordRecallGuide} />
      <RelatedDrills />
    </>
  );
}
