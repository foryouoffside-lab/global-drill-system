import GhostLinkClient from '@/app/drills/visual/tracking-accuracy/multiple-targets/GhostLinkClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Mehrfach-Objektverfolgung | MOT-Test | SkillDrills",
  description: "Kostenloser MOT-Test zur Mehrfach-Objektverfolgung: Merke dir 3 markierte Kugeln und verfolge sie 60 s lang unter gleich aussehenden Kugeln.",
  keywords: [
    "Mehrfach-Objektverfolgung",
    "Multiple Object Tracking Test",
    "MOT-Test",
    "mehrere Objekte verfolgen",
    "geteilte Aufmerksamkeit",
    "Kugeln verfolgen Spiel"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Mehrfach-Objektverfolgung | MOT-Test | SkillDrills",
    description: "Merke dir 3 markierte Kugeln und finde sie nach 60 Sekunden Bewegung wieder. Kostenloser MOT-Test im Browser.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Mehrfach-Objektverfolgung | MOT-Test | SkillDrills",
    description: "Mehrfach-Objektverfolgung im Browser: 3 Ziele unter gleich aussehenden Kugeln 60 Sekunden lang verfolgen.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets',
    languages: getAlternateLanguages('/drills/visual/tracking-accuracy/multiple-targets'),
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
    { "@type": "ListItem", "position": 5, "name": "Mehrfach-Objektverfolgung (MOT-Test)", "item": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Mehrfach-Objektverfolgung (MOT-Test)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Browser-Übung: Unter gleich aussehenden Kugeln leuchten 3 Ziele 2 Sekunden lang grün. Danach bewegen sich alle Kugeln 60 Sekunden lang und prallen voneinander ab; anschließend wählst du die 3 Ziele wieder aus.",
  "featureList": [
    "Start mit 8 Kugeln, davon 3 für 2 Sekunden grün markiert",
    "60 Sekunden Bewegung: alle Kugeln sehen gleich aus und prallen von Wänden und voneinander ab",
    "Danach 3 Kugeln wählen und bestätigen: 20 Punkte pro richtigem Ziel (max. 60), kein Abzug für Fehler",
    "Mit steigendem Bestwert mehr Kugeln und etwas mehr Tempo; Daten nur im lokalen Browser-Speicher"
  ],
  "dateModified": "2026-11-12"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Mehrfach-Objektverfolgung (MOT-Test) | SkillDrills",
  "alternateName": "GhostLink MOT",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets",
  "dateModified": "2026-11-12",
  "description": "Kostenloser Online-MOT-Test: Verfolge 3 Ziele 60 Sekunden lang unter gleich aussehenden Kugeln.",
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
  "teaches": "Mehrere bewegte Objekte gleichzeitig mit der Aufmerksamkeit verfolgen, geteilte Aufmerksamkeit"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Mehrfach-Objektverfolgung (MOT-Test)",
  "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets",
  "description": "Merke dir 3 markierte Kugeln, verfolge sie unter gleich aussehenden Kugeln und finde sie am Ende wieder. Kostenloses MOT-Spiel.",
  "genre": [
    "Puzzle",
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
  "name": "So funktioniert der MOT-Test",
  "dateModified": "2026-11-12",
  "description": "Vier Schritte durch eine Runde.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "3 Ziele merken",
      "text": "Nach dem Countdown erscheinen die Kugeln, 3 davon leuchten 2 Sekunden lang grün. Merke dir ihre Positionen.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "60 Sekunden verfolgen",
      "text": "Danach sehen alle Kugeln gleich aus und bewegen sich 60 Sekunden lang. Sie prallen von den Wänden und voneinander ab.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "3 Kugeln auswählen",
      "text": "Am Ende bleiben die Kugeln stehen. Klicke (tippe) die 3 Kugeln an, die du für die Ziele hältst. Ein zweiter Klick hebt die Auswahl auf.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Bestätigen",
      "text": "Mit 3 gewählten Kugeln drückst du auf Bestätigen: 20 Punkte pro richtigem Ziel, falsche Wahl gibt 0 Punkte ohne Abzug.",
      "url": "https://skilldrills.online/de/drills/visual/tracking-accuracy/multiple-targets#step-4"
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
      "name": "Wie läuft der Multiple Object Tracking Test (MOT) ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unter gleich aussehenden Kugeln leuchten 3 Ziele 2 Sekunden lang grün. Dann bewegen sich alle Kugeln 60 Sekunden lang, und wenn sie anhalten, wählst du die 3 Ziele aus und bestätigst. Pro richtigem Ziel gibt es 20 Punkte, maximal 60 pro Runde."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viele Kugeln gibt es und wird es schwerer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du startest mit 8 Kugeln. Für je 30 Punkte Bestwert kommt eine Kugel dazu, und das Tempo steigt mit dem Bestwert leicht an. Es sind immer genau 3 Ziele."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert bei einer falschen Wahl?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine falsche Kugel bringt 0 Punkte, einen Abzug gibt es nicht. Ein erneuter Klick hebt die Auswahl auf, du kannst also bis zum Bestätigen umentscheiden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viele Objekte kann man gleichzeitig verfolgen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seit dem ersten MOT-Experiment von Pylyshyn & Storm (1988) wird berichtet, dass die Grenze für gleich aussehende Objekte bei etwa vier liegt und mit höherem Tempo sinkt (Cavanagh & Alvarez, 2005). In diesem Test sind es immer 3 Ziele."
      }
    },
    {
      "@type": "Question",
      "name": "Sollte ich die Kugeln nacheinander anschauen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Während dein Blick zu einer Kugel springt, kann ein anderes Ziel mit einer Ablenkkugel zusammentreffen, und du verlierst die Zuordnung. Viele finden es leichter, ungefähr in die Mitte zwischen den Zielen zu schauen und alle drei gemeinsam im Blick zu behalten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie verliere ich ein Ziel bei Zusammenstößen nicht?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kugeln prallen voneinander ab. Achte auf die Richtung kurz vor dem Zusammenstoß und darauf, wohin die Kugel danach fliegt; so verwechselst du Ziel und Ablenkkugel seltener."
      }
    },
    {
      "@type": "Question",
      "name": "Verbessert das Training meine Leistung in Spielen oder im Sport?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine höhere Punktzahl zeigt, dass du in genau dieser Aufgabe geübter bist. Eine Übertragung auf Spiele, Sport oder Autofahren ist nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Ist der Test kostenlos und wo werden meine Daten gespeichert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, kostenlos und ohne Konto. Bestwerte bleiben nur im lokalen Speicher deines Browsers."
      }
    }
  ]
};

const guideData = {
  heading: "Mehrfach-Objektverfolgung: Ablauf und Tipps",
  intro: [
    "Beim MOT-Test (Multiple Object Tracking) verfolgst du 3 markierte Ziele unter gleich aussehenden Kugeln und wählst sie am Ende wieder aus. Die Aufgabe geht auf das Experiment von Pylyshyn & Storm (1988) zurück und ist hier als einfaches Browser-Spiel umgesetzt.",
    "Nach dem Countdown leuchten 3 Kugeln 2 Sekunden lang grün, danach bewegen sich alle Kugeln gleich aussehend 60 Sekunden lang und prallen von Wänden und voneinander ab. Bleiben sie stehen, wählst du 3 Kugeln und bestätigst: 20 Punkte pro richtigem Ziel (max. 60), falsche Wahl ohne Abzug. Mit steigendem Bestwert kommen Kugeln dazu und das Tempo steigt leicht.",
    "Mehrere Objekte gleichzeitig zu verfolgen gelingt nicht durch schnelles Hin- und Herschauen, sondern indem die Aufmerksamkeit auf mehrere Orte verteilt bleibt (Cavanagh & Alvarez, 2005). Der Test ist ein Übungsspiel dazu."
  ],
  benchmarks: {
    "title": "SkillDrills-Übungsstufen (nur für dieses Spiel)",
    "headers": [
      "Stufe",
      "Richtige Ziele",
      "Punkte",
      "Beschreibung"
    ],
    "rows": [
      [
        "Perfekt",
        "3 / 3",
        "60",
        "Alle 3 Ziele über 60 Sekunden gehalten."
      ],
      [
        "Gut",
        "2 / 3",
        "40",
        "Ein Ziel bei einem Zusammenstoß verloren."
      ],
      [
        "Übung",
        "1 / 3",
        "20",
        "Mehrere Verwechslungen unterwegs."
      ],
      [
        "Einstieg",
        "0 / 3",
        "0",
        "Eingewöhnung ins Spiel."
      ]
    ],
    "note": "Eigene Übungsstufen von SkillDrills für dieses Spiel, keine wissenschaftlichen Normwerte und keine Bewertung kognitiver Fähigkeiten."
  },
  techniques: {
    "title": "Tipps, um mehrere Ziele nicht zu verlieren",
    "items": [
      {
        "name": "In die Mitte schauen",
        "desc": "Wer nur einem Ziel mit den Augen folgt, verliert die anderen leicht.",
        "tips": "Schau ungefähr in die Mitte zwischen den 3 Zielen und behalte alle gemeinsam im Blick."
      },
      {
        "name": "Abpraller vorausahnen",
        "desc": "Die Kugeln prallen von Wänden und voneinander ab.",
        "tips": "Achte weniger auf den Aufprallpunkt als auf die Richtung danach."
      },
      {
        "name": "Nach Überlappungen nachzählen",
        "desc": "Am verwirrendsten ist der Moment, in dem sich Ziel und Ablenkkugel trennen.",
        "tips": "Zähle danach kurz nach, ob du noch alle 3 Ziele hast."
      },
      {
        "name": "In Ruhe auswählen",
        "desc": "Nach dem Anhalten gibt es kein Zeitlimit für die Auswahl.",
        "tips": "Bei Zweifeln die Auswahl per Klick aufheben und neu wählen."
      }
    ]
  },
  steps: [
    "Drücke auf Start und merke dir nach dem Countdown die 3 grün markierten Kugeln.",
    "Verfolge die 3 Ziele 60 Sekunden lang mit den Augen.",
    "Wenn die Kugeln stehen bleiben, klicke die 3 Kugeln an, die du für die Ziele hältst.",
    "Bestätige und sieh dir Treffer und Punkte an (20 pro richtigem Ziel).",
    "Prüfe Genauigkeit und Bewertung auf dem Ergebnisbildschirm und spiele erneut."
  ],
  audience: "Für alle, die das gleichzeitige Verfolgen mehrerer bewegter Objekte ausprobieren möchten, etwa FPS- und MOBA-Spieler, oder ein kurzes Konzentrationsspiel suchen.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('pylyshyn1988', 'cavanagh2005'),
  related: [
    {
      "href": "/de/drills/visual/tracking-accuracy/moving-target",
      "label": "Bewegte Ziele abfangen"
    },
    {
      "href": "/de/drills/visual/tracking-accuracy/pursuit-tracker",
      "label": "Glatte Blickfolge"
    },
    {
      "href": "/de/drills/visual/visual-recognition/visual-search",
      "label": "Visuelle Suche"
    },
    {
      "href": "/de/drills/visual/depth-perception/distance-judgment",
      "label": "Tiefenwahrnehmung & Distanzurteil"
    },
    {
      "href": "/de/drills/reaction-speed/visual-tracking-speed-test",
      "label": "Zielverfolgung testen"
    }
  ]
};

export default function LocalizedMultipleTargetsDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <GhostLinkClient copy={{  "title": "Mehrfach-Objektverfolgung" }} />
      <DrillGuide guide={guideData} />
      <RelatedDrills />
    </>
  );
}
