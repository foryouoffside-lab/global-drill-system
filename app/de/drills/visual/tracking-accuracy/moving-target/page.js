import KineticInterceptClient from '@/app/drills/visual/tracking-accuracy/moving-target/KineticInterceptClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Bewegte Ziele abfangen | Flugbahn vorhersagen | SkillDrills",
  description: "Bewegte Ziele abfangen im Browser: Die Kugel prallt von den Wänden ab und springt nach kurzer Zeit weiter. Treffer +2 s, Fehlklick -1 s. Gratis, kein Sehtest.",
  keywords: [
    "Bewegte Ziele abfangen",
    "Abfangtest",
    "Flugbahn vorhersagen",
    "bewegtes Ziel anklicken",
    "Vorhalten üben",
    "Browser-Spiel bewegte Ziele"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Bewegte Ziele abfangen | Flugbahn vorhersagen | SkillDrills",
    description: "Lies die Flugbahn einer abprallenden Kugel und klicke sie an, bevor sie weiterspringt. Kostenloses Browser-Training, kein medizinischer Test.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Bewegte Ziele abfangen | Flugbahn vorhersagen | SkillDrills",
    description: "Bewegte Ziele abfangen: Flugbahn vorhersagen und rechtzeitig klicken. Kostenlos im Browser.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/moving-target'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Trainingskatalog", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Blickverfolgung", "item": "https://skilldrills.online/de/drills/visual/tracking-accuracy" },
    { "@type": "ListItem", "position": 5, "name": "Bewegte Ziele abfangen", "item": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Bewegte Ziele abfangen",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Browser-Übung: Eine Kugel bewegt sich geradlinig, prallt von den Wänden ab und springt nach einer kurzen Frist an eine neue Stelle. Ziel ist, sie vorher anzuklicken. Kein Seh- oder Augenbewegungstest.",
  "featureList": [
    "Ziel prallt von den Rändern ab und springt nach Ablauf eines Rings an eine neue Position",
    "Treffer: 150 Pkt. × Combo × Level-Bonus und +2 s (maximal 60 s Restzeit)",
    "Mit steigendem Level wird das Ziel schneller und kleiner, die Sprungfrist kürzer",
    "Bestwerte werden nur im lokalen Speicher deines Browsers abgelegt"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Bewegte Ziele abfangen | SkillDrills",
  "alternateName": "Moving Target Pro",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target",
  "dateModified": "2026-11-12",
  "description": "Kostenloses Browser-Spiel: Bewegte Ziele abfangen, bevor sie an eine neue Stelle springen.",
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
  "teaches": "Bewegte Ziele mit den Augen verfolgen, Flugbahn vorhersagen, Klickgenauigkeit mit der Maus"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Bewegte Ziele abfangen",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target",
  "description": "Klicke eine abprallende Kugel an, bevor sie weiterspringt. Kostenloses Browser-Spiel zum Abfangen bewegter Ziele.",
  "genre": [
    "Action",
    "Aim Trainer",
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
  "name": "So spielst du „Bewegte Ziele abfangen“",
  "dateModified": "2026-11-12",
  "description": "Vier Schritte vom Start bis zur höheren Punktzahl.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Kugel mit Blick und Cursor verfolgen",
      "text": "Nach dem Countdown erscheint eine orange Kugel, die sich geradlinig bewegt und von den Wänden abprallt. Führe den Cursor in ihrer Nähe mit.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Ring im Blick behalten",
      "text": "Ring und Sekundenanzeige um das Ziel zeigen, wann es an eine neue Stelle springt. Anfangs ist das etwa 1 Sekunde, mit steigendem Level und Combo wird die Frist kürzer.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ziel anklicken",
      "text": "Ein Klick (oder Tipp) auf die Kugel zählt als Treffer: 150 Pkt. × Combo × Level-Bonus und +2 s Restzeit (maximal 60 s).",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Fehlklicks vermeiden",
      "text": "Ein Klick daneben kostet 1 Sekunde und setzt die Combo zurück. Bei 0 Sekunden endet die Runde.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/moving-target#step-4"
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
      "name": "Wie funktioniert die Übung „Bewegte Ziele abfangen“?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Kugel bewegt sich geradlinig über das Spielfeld und prallt von den Rändern ab. Nach einer kurzen Frist (anfangs etwa 1 Sekunde) springt sie an eine neue Stelle. Du klickst sie vorher an. Die Runde beginnt mit 45 Sekunden, jeder Treffer bringt +2 s (maximal 60 s), bei 0 endet sie. Es ist kein Sehtest und keine medizinische Untersuchung."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Punktzahl berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Jeder Treffer bringt 150 Punkte, multipliziert mit dem Combo-Multiplikator und einem Level-Bonus. Das Level steigt fortlaufend mit der Punktzahl: Das Ziel wird schneller und kleiner, und es springt früher weiter."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert bei einem Fehlklick?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Klick neben das Ziel zieht 1 Sekunde ab und setzt die Combo auf 0. Ist in den Drill-Einstellungen „Target Timeouts“ aktiv (Standard), zählt auch ein Ziel, das ungetroffen weiterspringt, als Fehler und kostet 1 Sekunde."
      }
    },
    {
      "@type": "Question",
      "name": "Warum sollte ich vor das Ziel klicken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zwischen Sehen, Entscheiden und Klicken vergeht etwas Zeit, in der die Kugel weiterfliegt. Je schneller sie ist, desto mehr lohnt es sich, ein Stück in Bewegungsrichtung vorzuhalten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hilft es, die Flugbahn vorherzusagen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kugel ändert ihre Richtung nur an den Wänden, und zwar wie ein Ball: Einfallswinkel gleich Ausfallswinkel. Wer den Abprall früh erkennt, kann den Cursor schon dorthin bewegen, wohin die Kugel als Nächstes fliegt."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Blickfolge und Sakkaden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei der Blickfolge (Smooth Pursuit) gleiten die Augen mit einem bewegten Objekt mit; Sakkaden sind schnelle Blicksprünge zu einem neuen Punkt. Beide werden getrennt gesteuert (Rashbass, 1961). In dieser Übung brauchst du beides: mitgleiten, solange die Kugel fliegt, und neu suchen, wenn sie springt."
      }
    },
    {
      "@type": "Question",
      "name": "Verbessert das Training meine Sehkraft?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine höhere Punktzahl zeigt, dass du in genau dieser Aufgabe besser geworden bist. Eine Wirkung auf die Sehschärfe, auf Sportleistung oder andere Aufgaben ist damit nicht belegt, und die Übung ersetzt keine augenärztliche Untersuchung."
      }
    },
    {
      "@type": "Question",
      "name": "Ist die Übung kostenlos und wo werden meine Werte gespeichert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, kostenlos und ohne Konto. Bestwerte und Combos bleiben nur im lokalen Speicher deines Browsers."
      }
    }
  ]
};

const guideData = {
  heading: "Bewegte Ziele abfangen: So funktioniert die Übung",
  intro: [
    "In dieser Übung sollst du bewegte Ziele abfangen: Eine Kugel fliegt geradlinig über das Spielfeld, prallt von den Wänden ab und springt nach einer kurzen Frist an eine neue Stelle. Du klickst sie an, bevor das passiert, und musst dafür ihre Flugbahn vorhersagen.",
    "Die Runde beginnt mit 45 Sekunden. Jeder Treffer bringt 150 Punkte × Combo × Level-Bonus und +2 s Restzeit (maximal 60 s), ein Fehlklick kostet 1 Sekunde und die Combo. Mit steigender Punktzahl wird die Kugel schneller und kleiner, und die Frist bis zum nächsten Sprung wird von etwa 1 Sekunde an kürzer.",
    "Die Augen können einem langsamen Objekt glatt folgen; wird es zu schnell, fällt der Blick zurück und holt mit kurzen Sprüngen auf (Krauzlis, 2004). Die Übung verpackt diese Situation in eine einfache Klickaufgabe. Sie misst weder die Sehschärfe noch die Augenbewegungen."
  ],
  benchmarks: {
    "title": "SkillDrills-Übungsstufen (nur für diese Übung)",
    "headers": [
      "Stufe",
      "Sprungfrist des Ziels",
      "Punkte & Combo",
      "Typisches Spielbild"
    ],
    "rows": [
      [
        "Stufe 1",
        "< 0,25 s",
        "16.000+ Pkt. | Combo 25x+",
        "Sehr schnelle, kleine Ziele werden in Serie getroffen."
      ],
      [
        "Stufe 2",
        "0,25 – 0,45 s",
        "10.500 – 15.999 Pkt. | Combo 16x+",
        "Auch schnelle Ziele mit wenigen Fehlklicks."
      ],
      [
        "Stufe 3",
        "0,46 – 0,70 s",
        "6.000 – 10.499 Pkt. | Combo 9x+",
        "Gerade Strecken sicher, direkt nach dem Abprall gelegentlich daneben."
      ],
      [
        "Stufe 4",
        "0,71 – 1,00 s",
        "2.500 – 5.999 Pkt. | Combo 4x+",
        "Der Cursor läuft der Kugel oft hinterher."
      ],
      [
        "Stufe 5",
        "> 1,00 s",
        "< 2.500 Pkt. | Combo < 4x",
        "Eingewöhnung in die Übung."
      ]
    ],
    "note": "Eigene Übungsstufen von SkillDrills, keine wissenschaftlichen Normwerte und keine Bewertung des Sehvermögens. Monitor und Maus beeinflussen das Ergebnis."
  },
  techniques: {
    "title": "Tipps, um bewegte Ziele sicherer zu treffen",
    "items": [
      {
        "name": "Ein Stück vorhalten",
        "desc": "Während du klickst, fliegt die Kugel weiter. Wer auf die aktuelle Position klickt, trifft oft dahinter.",
        "tips": "Klicke ein kleines Stück in Flugrichtung vor die Kugel."
      },
      {
        "name": "Abpraller vorausahnen",
        "desc": "Die Kugel prallt wie ein Ball von den Wänden ab.",
        "tips": "Folge ihr nicht bis in die Wand, sondern bewege den Cursor schon in die Richtung, in die sie zurückprallt."
      },
      {
        "name": "Cursor mitführen",
        "desc": "Wer den Cursor stillhält und wartet, verpasst auf hohen Stufen den Moment.",
        "tips": "Führe Blick und Cursor gleichmäßig mit der Kugel mit."
      },
      {
        "name": "Nicht wild klicken",
        "desc": "Jeder Fehlklick kostet 1 Sekunde und die Combo.",
        "tips": "Klicke erst, wenn der Cursor sichtbar auf der Kugel liegt."
      }
    ]
  },
  steps: [
    "Klicke auf „Drill starten“, um die 45-Sekunden-Runde zu beginnen.",
    "Verfolge die Kugel mit Blick und Cursor.",
    "Klicke sie an, bevor der Ring abläuft, und halte dabei leicht in Flugrichtung vor.",
    "Treffer: +150 Pkt. × Multiplikator und +2 s; Fehlklick: -1 s und Combo-Reset.",
    "Nach der Runde siehst du Punktzahl, Treffer, Genauigkeit und maximale Combo."
  ],
  audience: "Für alle, die im Browser das Treffen bewegter Ziele üben möchten, zum Beispiel FPS-Spieler, oder einfach ein kurzes Reaktionsspiel suchen.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('rashbass1961', 'krauzlis2004'),
  related: [
    {
      "href": "/de/drills/visual/tracking-accuracy/multiple-targets",
      "label": "Multi-Objekt-Tracking"
    },
    {
      "href": "/de/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Glatte Blickfolge"
    },
    {
      "href": "/de/drills/visual/reaction-speed/light-reaction",
      "label": "Licht-Reaktionstest"
    },
    {
      "href": "/de/drills/visual/reaction-speed/go/no-go",
      "label": "Go / No-Go Impulskontrolle"
    },
    {
      "href": "/de/drills/visual/depth-perception/distance-judgment",
      "label": "Tiefenwahrnehmung & Distanzurteil"
    },
    {
      "href": "/de/drills/visual/visual-recognition/entropic-grid",
      "label": "Entropisches Gitter-Suchspiel"
    }
  ]
};

export default function KineticInterceptPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <KineticInterceptClient copy={{ title: "Bewegte Ziele abfangen: Flugbahn vorhersagen" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
