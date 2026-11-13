import NBackClient from '@/app/drills/memory/working-memory/n-back/NBackClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "N-Back Test online | Arbeitsgedächtnis | SkillDrills",
  description: "N-Back Test online, kostenlos: Ist der Buchstabe gleich dem von vor N Schritten? Start bei 3-Back, nach 8 richtigen Antworten eine Stufe höher.",
  keywords: ['n-back test online', 'n-back test', 'arbeitsgedächtnis trainieren', 'n-back aufgabe', '3-back', 'arbeitsgedächtnis'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "N-Back Test online | Arbeitsgedächtnis | SkillDrills",
    description: "Kostenloser N-Back Test im Browser: Buchstaben mit dem von vor N Schritten vergleichen und dein Arbeitsgedächtnis trainieren, ab 3-Back, ohne Anmeldung.",
    type: "website",
    url: "https://skilldrills.online/de/drills/memory/working-memory/n-back",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "N-Back Test online | Arbeitsgedächtnis | SkillDrills",
    description: "Kostenloser N-Back Test im Browser: Buchstaben mit dem von vor N Schritten vergleichen und dein Arbeitsgedächtnis trainieren, ab 3-Back, ohne Anmeldung.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/memory/working-memory/n-back",
    languages: getAlternateLanguages('/drills/memory/working-memory/n-back'),
  },
};

const appDescription = "Kostenloser N-Back Test im Browser: Buchstaben erscheinen einzeln, und du entscheidest per Treffer/Kein Treffer, ob der aktuelle dem von vor N Schritten entspricht. Start bei 3-Back, alle 8 richtigen Antworten eine Stufe höher.";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Gedächtnistraining", "item": "https://skilldrills.online/de/drills/memory" },
    { "@type": "ListItem", "position": 3, "name": "Arbeitsgedächtnis", "item": "https://skilldrills.online/de/drills/memory/working-memory" },
    { "@type": "ListItem", "position": 4, "name": "N-Back Test", "item": "https://skilldrills.online/de/drills/memory/working-memory/n-back" }
  ]
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "N-Back Test online (Arbeitsgedächtnis)",
  "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "isAccessibleForFree": true,
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "N-Back Test online (Arbeitsgedächtnis)",
  "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back",
  "description": appDescription,
  "dateModified": "2026-11-12",
  "gamePlatform": "Web Browser",
  "genre": ["Working Memory", "N-Back"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "N-Back Test online (Arbeitsgedächtnis)",
  "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back",
  "description": appDescription,
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "dateModified": "2026-11-12",
  "author": { "@type": "Organization", "name": "SkillDrills" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So funktioniert der N-Back Test",
  "description": "Vier Schritte, um Buchstaben mit dem von vor N Schritten zu vergleichen.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back#step-1",
      "name": "Die ersten 3 Buchstaben merken",
      "text": "Für die ersten 3 Buchstaben gibt es noch nichts zu vergleichen, du merkst sie dir nur. In dieser Zeit läuft die Uhr nicht."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back#step-2",
      "name": "Mit dem Buchstaben von vor N Schritten vergleichen",
      "text": "Prüfe bei jedem neuen Buchstaben, ob er genau dem von vor N Schritten (anfangs 3) entspricht."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back#step-3",
      "name": "Treffer oder Kein Treffer wählen",
      "text": "Klicke oder tippe auf 'Treffer', wenn er gleich ist, sonst auf 'Kein Treffer'. Das Antwortfenster beginnt bei 2 Sekunden."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "url": "https://skilldrills.online/de/drills/memory/working-memory/n-back#step-4",
      "name": "Die Liste im Kopf aktualisieren",
      "text": "Nach jeder Antwort streichst du den ältesten Buchstaben und hängst den neuen an, sodass du immer die letzten N behältst."
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
      "name": "Wie funktioniert der N-Back Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Buchstaben erscheinen einzeln nacheinander. Ist der aktuelle Buchstabe genau derselbe wie der von vor N Schritten, drückst du 'Treffer', sonst 'Kein Treffer'. Jede richtige Antwort bringt +150 Punkte. Die ersten N Buchstaben merkst du dir nur; in dieser Zeit läuft die Uhr nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Bei welcher Stufe startet der Test und wie steigt sie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Test startet bei 3-Back. Alle 1.200 Punkte (8 richtige Antworten) steigt die Stufe um 1 auf 4-Back, 5-Back usw.; ab dem nächsten Buchstaben gilt der neue Abstand. Fehler senken die Stufe nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel Zeit habe ich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pro Buchstabe hast du 2 Sekunden zum Antworten; mit jeder Stufe wird das Fenster 0,1 Sekunden kürzer, bis minimal 1,2 Sekunden. Die Sitzung dauert 45 Sekunden, und die Uhr steht still, solange du die ersten N Buchstaben einprägst."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert bei falschen oder fehlenden Antworten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es gibt keinen Punkt- oder Zeitabzug. Falsche und ausgelassene Antworten zählen in der Genauigkeit als Fehler, dann folgt der nächste Buchstabe. Etwa jeder dritte Buchstabe ist ein Treffer, deshalb ist 'Kein Treffer' genauso wichtig."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das ein Dual N-Back?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Es ist ein einfaches N-Back nur mit Buchstaben. Beim Dual N-Back werden zwei Reize gleichzeitig verglichen, etwa Position und Ton; diese Variante gibt es hier nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich mit der Tastatur spielen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Derzeit antwortest du über die beiden Schaltflächen auf dem Bildschirm, per Mausklick oder Touch. Tastenkürzel werden nicht unterstützt."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man mit N-Back den IQ steigern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das ist nicht belegt. Jaeggi et al. (2008) berichteten einen Zusammenhang zwischen N-Back-Training und fluider Intelligenz, spätere Studien kamen jedoch zu uneinheitlichen Ergebnissen. Mit Übung kann dein Ergebnis in genau dieser Aufgabe steigen."
      }
    },
    {
      "@type": "Question",
      "name": "Werden meine Ergebnisse gespeichert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bestwert und höchste Stufe werden nur im localStorage dieses Browsers gespeichert und nicht an einen Server gesendet. Die Ergebnisse sind Übungswerte."
      }
    }
  ]
};

const nBackClientCopyDe = {
  h1Keyword: "N-Back Test online",
  h1Suffix: " – Arbeitsgedächtnis",
  subtitle: "Entspricht der Buchstabe dem von vor N Schritten? Start bei 3-Back.",
  statScore: "Punkte",
  statTime: "Zeit",
  statLevel: "Stufe",
  statBest: "Bestwert",
  hudScore: "Punkte",
  hudTime: "Zeit",
  modeSuffix: "-BACK",
  memorizingText: "Erste {n} Buchstaben merken...",
  btnMatch: "TREFFER",
  btnNoMatch: "KEIN TREFFER",
  startTitle: "N-Back Test",
  startSubtitle: "Arbeitsgedächtnis • ab 3-Back",
  countdownSubtitle: "BEREITMACHEN",
  newBest: "NEUER REKORD",
  statPoints: "Punkte",
  statAccuracy: "Genauigkeit",
  statPeakLevel: "Höchste Stufe",
  statPerfects: "Richtige",
  btnPlayAgain: "Erneut spielen",
  rulesTitle: "Regeln & Punkte",
  rulesItems: [
    { num: "1", text: "Treffer / Kein Treffer (vor N Schritten)", highlight: "+150 PKT", result: "Pro richtiger Antwort" },
    { num: "2", text: "Stufenaufstieg", highlight: "3-Back → 4-Back+", result: "Alle 1.200 Punkte (8 richtige Antworten)" },
    { num: "3", text: "Kürzeres Antwortfenster", highlight: "2,0 s → min. 1,2 s", result: "0,1 s kürzer pro Stufe" },
    { num: "4", text: "Keine Antwort", highlight: "Kein Abzug", result: "Kein Punkte- oder Zeitverlust, zählt als Fehler" },
    { num: "5", text: "Falsche Antwort", highlight: "Kein Abzug", result: "Stufe bleibt, die 45-Sekunden-Uhr läuft normal weiter" }
  ]
};

const guideDe = {
  intro: [
    "Der N-Back Test online ist ein kostenloses Browser-Training für das Arbeitsgedächtnis: Buchstaben erscheinen einzeln, und du entscheidest bei jedem, ob er genau dem Buchstaben von vor N Schritten entspricht. Weil du die letzten N Buchstaben ständig behalten und mit jedem neuen aktualisieren musst, fordert die Aufgabe vor allem das Aktualisieren des Arbeitsgedächtnisses (Kirchner, 1958).",
    "Der Test startet bei 3-Back. Die ersten 3 Buchstaben merkst du dir nur, danach antwortest du bei jedem Buchstaben mit 'Treffer' oder 'Kein Treffer'. Jede richtige Antwort bringt +150 Punkte, alle 1.200 Punkte (8 richtige Antworten) steigt die Stufe auf 4-Back, 5-Back usw. Das Antwortfenster beginnt bei 2 Sekunden und wird pro Stufe 0,1 Sekunden kürzer, bis minimal 1,2 Sekunden.",
    "Die Sitzung dauert 45 Sekunden; während du die ersten Buchstaben einprägst, steht die Uhr still. Falsche oder fehlende Antworten kosten keine Punkte und keine Zeit, die Stufe sinkt nicht, sie zählen nur in der Genauigkeit als Fehler. Es ist ein einfaches N-Back mit Buchstaben, kein Dual N-Back (Position + Ton). Antworten per Klick oder Touch auf die Schaltflächen.",
    "Datentransparenz: Ergebnisse werden nur im localStorage dieses Browsers gespeichert und nicht an einen Server gesendet. Deshalb veröffentlicht SkillDrills keine Nutzer-Durchschnitte oder Ranglisten."
  ],
  benchmarks: {
    title: "SkillDrills-Übungsstufen (Punkte = richtige Antworten × 150)",
    headers: ["Übungsstufe", "Richtige Antworten", "Punkte", "Erreichte Stufe"],
    rows: [
      ["Einstieg", "0–3", "0–450", "3-Back. Regeln und Antwortrhythmus kennenlernen"],
      ["Basis", "4–7", "600–1.050", "Noch 3-Back. Die Liste der letzten 3 Buchstaben stabil aktualisieren"],
      ["Geübt", "8–15", "1.200–2.250", "4-Back erreicht, Antwortfenster 1,9 s"],
      ["Fortgeschritten", "16+", "2.400+", "5-Back oder höher, Antwortfenster 1,8 s oder kürzer"]
    ],
    note: "Diese Stufen sind aus den Punkteregeln des Spiels berechnete SkillDrills-Übungsstufen, keine Bevölkerungsnormen."
  },
  techniques: {
    title: "Tipps für den N-Back Test",
    items: [
      { name: "Leise mitsprechen", desc: "Wiederhole die letzten N Buchstaben innerlich in festem Rhythmus (z. B. B-M-T → M-T-R). Kommt ein neuer, vergleichst du ihn mit dem vordersten und streichst diesen.", tips: "Kurze Buchstabennamen halten den Rhythmus stabil." },
      { name: "Nicht auf nahe Buchstaben hereinfallen", desc: "Ein Buchstabe von vor 1 oder 2 Schritten wirkt vertraut, ist aber kein Treffer. Prüfe, ob es genau N Schritte sind.", tips: "Vertrautheit allein ist kein Grund für 'Treffer'." },
      { name: "'Kein Treffer' aktiv wählen", desc: "Nur etwa jeder dritte Buchstabe ist ein Treffer. Wer bei Unsicherheit zögert, verliert die Antwort durch Zeitablauf.", tips: "Wähle innerhalb des Fensters immer eine der beiden Antworten." },
      { name: "Nach dem Verlieren neu aufbauen", desc: "Hast du die Reihenfolge verloren, versuch nicht, dich zu erinnern, sondern baue die Liste ab dem aktuellen Buchstaben neu auf.", tips: "Nach N Buchstaben kannst du wieder sicher vergleichen." }
    ]
  },
  steps: [
    "Start drücken und den 3-Sekunden-Countdown abwarten.",
    "Die ersten 3 Buchstaben einprägen (die Uhr läuft nicht).",
    "Danach bei jedem Buchstaben 'Treffer' wählen, wenn er dem von vor 3 Schritten entspricht, sonst 'Kein Treffer'.",
    "Alle 8 richtigen Antworten steigt die Stufe auf 4-Back, 5-Back, und das Antwortfenster wird kürzer.",
    "Nach 45 Sekunden Punkte, höchste Stufe und Genauigkeit ansehen."
  ],
  audience: "Alle, die einen N-Back Test sofort im Browser ausprobieren und ihr Arbeitsgedächtnis trainieren möchten, Studierende, die die Aufgabe kennenlernen wollen, und alle, die ein kurzes Denkspiel suchen.",
  faqs: faqSchema.mainEntity.map(({ name, acceptedAnswer }) => ({ q: name, a: acceptedAnswer.text })),
  sources: pickSources('baddeley1974', 'cowan2001'),
  related: [
    { href: "/de/drills/memory/spatial-memory/path-tracing", label: "Corsi-Block-Test" },
    { href: "/de/drills/memory/spatial-memory/grid-memorization", label: "Visueller Gedächtnistest" },
    { href: "/de/drills/memory/spatial-memory/object-location", label: "Objekt-Positions-Gedächtnis" },
    { href: "/de/drills/memory/short-term-memory/digit-span", label: "Zahlenspannen-Test" },
    { href: "/de/drills/memory/short-term-memory/word-recall", label: "Verbaler Gedächtnistest" }
  ]
};

export default function NBackPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <NBackClient copy={nBackClientCopyDe} />

      <DrillGuide guide={guideDe} />

      <RelatedDrills />
    </>
  );
}
