import DragAndDropClient from '@/app/drills/motor/hand-eye-coordination/drag-and-drop/DragAndDropClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Maus-Ziehtest | Drag-and-Drop-Präzision | SkillDrills',
  description: 'Kostenloser Maus-Ziehtest im Browser: 45 Sekunden lang Bälle per Drag-and-Drop in einen beweglichen Behälter ziehen. Genauigkeit, Combo und Level messen.',
  keywords: [
    'Maus-Ziehtest', 'Drag-and-Drop-Test', 'Ziehen und Ablegen üben', 'Drag and Drop Spiel',
    'Maus-Drag-Test', 'Maus Ziehgenauigkeit', 'Drag-and-Drop-Präzision', 'Maussteuerung üben',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Maus-Ziehtest | Drag-and-Drop-Präzision | SkillDrills',
    description: 'Kostenloser Maus-Ziehtest im Browser: 45 Sekunden lang Bälle per Drag-and-Drop in einen beweglichen Behälter ziehen. Genauigkeit, Combo und Level messen.',
    type: 'article',
    url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Maus-Ziehtest | Drag-and-Drop-Präzision | SkillDrills',
    description: 'Kostenloser Maus-Ziehtest im Browser: 45 Sekunden lang Bälle per Drag-and-Drop in einen beweglichen Behälter ziehen. Genauigkeit, Combo und Level messen.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/drag-and-drop'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SkillDrills Startseite',
      item: 'https://skilldrills.online/de',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Motorisches Training',
      item: 'https://skilldrills.online/de/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Hand-Auge-Koordination',
      item: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Drag and Drop Maus-Trainer',
      item: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Drag_and_drop", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Drag and Drop Maus-Trainer und Praezisionstest',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Kostenloser Maus-Ziehtest im Browser: Ball greifen, ziehen und im beweglichen Behälter ablegen.',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Drag and Drop Maus-Trainer',
  browserRequirements: 'Benötigt HTML5 Canvas und modernes JavaScript',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Drag and Drop Maus-Trainer',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop',
  description: 'Trainiere Zieh-Genauigkeit, Bremskontrolle und Abwurf-Timing im interaktiven Browsertest.',
  genre: ['Geschicklichkeit', 'Motorik-Training', 'Esports'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'de-DE',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was wird im Drag and Drop Maus-Trainer genau gemessen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Im Maus-Ziehtest greifen Sie 45 Sekunden lang einen Ball mit gedrückter linker Maustaste, ziehen ihn zu einem beweglichen runden Behälter und lassen ihn darin los. Das Ergebnis zeigt Punkte, Genauigkeit (Anteil gelungener Ablagen), Anzahl der Ablagen, maximale Combo und erreichtes Level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum ist Drag and Drop motorisch anspruchsvoller als einfaches Klicken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weil der Zeigefinger eine kontinuierliche isometrische Haltekraft ausüben muss, während Handgelenk und Arm gleichzeitig eine dynamische Führungsbewegung über das Mauspad ausführen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was fanden MacKenzie et al. (1991) über Drag-and-Drop heraus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ihre Studie zeigte, dass Ziehen mit demselben Eingabegerät deutlich langsamer und fehleranfälliger ist als bloßes Zeigen auf dasselbe Ziel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Bedeutung hat das Steering Law (Accot und Zhai, 1997)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es beschreibt die Bewegungszeit in begrenzten Pfaden: Sie wächst mit der Länge des Korridors geteilt durch seine Breite. Ein halb so breiter Korridor dauert also etwa doppelt so lange, wenn man ihn sauber durchqueren will.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie verhindert man Handkrämpfe bei langem Ziehen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nutzen Sie minimalen Auslösedruck auf den Schalter, meiden Sie Verkrampfungen im Handgelenk und stützen Sie den Unterarm flach auf einer ergonomischen Schreibtischkante ab.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie trifft man die Ablagezone am zuverlässigsten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bremsen Sie den Cursor bereits kurz vor dem Zielkorridor sanft ab, anstatt mit maximaler Ballistik hineinzugleiten, um ein Überschwingen (Overshoot) zu vermeiden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Für welche Anwendungen ist dieses Training besonders nützlich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für RTS-Spieler (Einheiten-Auswahlrahmen), FPS-Looting (Inventar-Swaps in Apex Legends oder PUBG) sowie CAD-Konstrukteure und Videoschnitt-Editoren mit intensiver Zeitleisten-Arbeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie skaliert die Schwierigkeit im Verlauf des Tests?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle 250 Punkte (plus Bonusstufen für jede 4er-Combo) steigt das Level: Ball und Behälter werden kleiner, der Behälter bewegt sich schneller und wechselt öfter die Richtung. Ist die Zeitlimit-Option aktiv, wird auch die Zeit pro Ball kürzer. Eine Runde dauert fest 45 Sekunden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Spielt die Hardware eine wichtige Rolle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Ein moderner Sensor ohne Zeigerbeschleunigung, ein sauberes Stoff-Mauspad mit berechenbarer Gleitreibung und eine Abtastrate von 1000 Hz minimieren Hardware-Latenzen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kostet die Nutzung auf SkillDrills etwas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein, der Maus-Ziehtest ist kostenlos, läuft im Browser und braucht keine Registrierung oder Installation. Nötig sind eine Maus und Pointer Lock; reine Touch-Geräte werden nicht unterstützt.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  name: 'Drag and Drop Maus-Trainer – Präzises Ziehen und Ablegen',
  description: 'Kostenloser Drag and Drop Maus-Trainer zur Messung der Hand-Auge-Koordination beim Halten, Bewegen und präzisen Ablegen von Objekten auf dynamische Zielzonen unter Zeitdruck.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Objekt erfassen und Taste gedrückt halten',
      text: 'Bewegen Sie das Fadenkreuz auf das Objekt und drücken Sie die linke Maustaste kontinuierlich durch.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Schneller Transport auf direktem Pfad',
      text: 'Führen Sie das Objekt auf der kürzesten Linie zur vorgegebenen Zielzone.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Zentrieren im Zielslot',
      text: 'Stabilisieren Sie das Objekt innerhalb der Begrenzungslinien der Zielzone.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Präzises Loslassen (Release)',
      text: 'Lassen Sie die Maustaste los, sobald der Ball im Behälter ist: Das zählt als Treffer und bringt 100 Punkte × Combo-Multiplikator. Außerhalb loslassen setzt die Combo zurück.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/drag-and-drop#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'mackenzie1991', 'fitts1954', 'elliott2010', 'woods2015'),
  intro: {
    title: 'Biomechanik des Ziehens, Führens und sensorimotorischen Abbremsens',
    paragraphs: [
      'Dieser Maus-Ziehtest trainiert Ziehen und Ablegen mit der Maus. In der Mensch-Computer-Interaktion stellt das kontinuierliche Ziehen und Ablegen (Drag and Drop) eine grundlegend andere neuromuskuläre Herausforderung dar als einfache Klick-Aktionen. Während diskretes Zeigen durch das Fitts-Gesetz (Fitts, 1954) modelliert wird, verlangt das Ziehen eine anhaltende isometrische Ko-Kontraktion der Beugemuskulatur im Zeigefinger bei gleichzeitiger multi-axialer Translation der Gliedmaße über die Unterlage.',
      'MacKenzie, Sellen und Buxton (1991) zeigten, dass Ziehen mit demselben Gerät deutlich langsamer und fehleranfälliger ist als bloßes Zeigen auf dasselbe Ziel. Die gedrückte Taste schränkt feine Finger- und Handgelenkskorrekturen ein.',
      'Darüber hinaus formulierten Johnny Accot und Shumin Zhai (1997) das Steering Law zur mathematischen Beschreibung pfadbegrenzter Motorik. Bei dynamischen Ziehaufgaben müssen Nutzer Beschleunigungsimpulse und antagonistische Bremsungen (Elliott et al., 2010) exakt koordinieren, um ein Überschwingen der Zielzone zu verhindern.',
      'Ablauf: 45 Sekunden lang Ball greifen, ziehen und im beweglichen Behälter ablegen. Display-Bildrate und Polling-Rate der Maus beeinflussen das Eingabegefühl (Woods et al., 2015). Vergleichen Sie Ihre Ergebnisse daher vor allem mit eigenen früheren Runden am selben System.',
    ],
  },
  benchmarks: {
    title: 'Übungsstufen für den Maus-Ziehtest (SkillDrills)',
    caption: 'SkillDrills-Übungsbänder: keine Forschungsnormen und keine Nutzerstatistik, sondern Richtwerte des Drill-Autors, um Level, Combo und Genauigkeit aus dem eigenen Ergebnis einzuordnen. SkillDrills speichert Daten ausschließlich lokal im Browser.',
    headers: ['Stufe', 'Klassifizierung', 'Level & Combo', 'Abwurf-Genauigkeit', 'Typisches Spielbild'],
    rows: [
      [
        'Tier 1',
        'Höchste Übungsstufe',
        'Lv. 12–15 (Combo > 18x)',
        '≥ 98,0%',
        'Weiches Abbremsen auch bei schnellen Behältern, kaum Ablagen außerhalb.',
      ],
      [
        'Tier 2',
        'Fortgeschritten / Kompetitiv',
        'Lv. 9–11 (Combo 12–17x)',
        '94,0%–97,9%',
        'Kontrolliertes Abbremsen, auch kleine Behälter mit kurzen Mikro-Korrekturen getroffen.',
      ],
      [
        'Tier 3',
        'Geübt / Mittelfeld',
        'Lv. 6–8 (Combo 7–11x)',
        '87,0%–93,9%',
        'Gelegentliches Überschwingen in der Beschleunigungsphase, spürbare Tempoverluste kurz vor dem Zielslot.',
      ],
      [
        'Tier 4',
        'Einsteiger / In Entwicklung',
        'Lv. 3–5 (Combo 3–6x)',
        '78,0%–86,9%',
        'Ruckartige Mehrfachkorrekturen, zu hohe Griffspannung führt zu Ablagen am Rand.',
      ],
      [
        'Tier 5',
        'Basisniveau / Anfänger',
        'Lv. 1–2 (Combo < 3x)',
        '< 78,0%',
        'Zögerlicher Transport, häufiges Loslassen außerhalb des Behälters.',
      ],
    ],
  },
  protocols: {
    title: 'Wissenschaftliche Trainingsprotokolle zur Steigerung der Feinmotorik',
    items: [
      {
        title: 'Protokoll 1: Isometrische Haltekraft-Stabilisierung (Level 1–4)',
        description: 'Konzentrieren Sie sich darauf, den Auslösedruck während der gesamten Mausbewegung minimal und entspannt zu halten. Zu starkes Drücken versteift die Handgelenkbeuger und erzeugt Zittern.',
      },
      {
        title: 'Protokoll 2: Accot-Zhai Pfadtunnel-Kalibrierung (Level 5–8)',
        description: 'Minimieren Sie die räumliche Pfadabweichung zwischen Aufnahme- und Zielkoordinate. Stellen Sie sich eine gerade Verbindungslinie vor und eliminieren Sie seitliche Kurvenschwünge.',
      },
      {
        title: 'Protokoll 3: Antagonistische Dezeleration und Bremsung (Level 9–12)',
        description: 'Beginnen Sie kurz vor dem Zielbehälter abzubremsen, um den Schwung abzufangen, und lassen Sie los, sobald der Ball im Behälter ist.',
      },
      {
        title: 'Protokoll 4: Dynamischer Vorhaltewinkel bei bewegten Zielen (Level 13–15)',
        description: 'Führen Sie das Objekt nicht auf die aktuelle, sondern auf die vorausberechnete Schnittpunkt-Koordinate des Zielbehälters, um den Ball fließend in dessen Bewegungsbahn abzulegen.',
      },
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

const copyDe = {
  title: "Maus-Ziehtest: Drag-and-Drop-Präzision",
  subtitle: "Ball ziehen und im beweglichen Behälter ablegen · 45 Sekunden",
  startButtonText: "DRILL STARTEN",
  playAgainText: "Nochmal spielen",
  shareText: "Ergebnis teilen",
  exitText: "Beenden",
  accuracyLabel: "Genauigkeit",
  targetDropsLabel: "Ziel-Treffer",
  maxComboLabel: "Max Combo",
  peakLevelLabel: "Höchste Stufe",
  rulesTitle: "Drill-Anleitung & Punktesystem",
  rulesItems: [
    { num: "1", text: "Ziel-Treffer", highlight: "+100 PKT × Combo", result: "Ball in den beweglichen Behälter ziehen" },
    { num: "2", text: "Kontinuierliche Combo", highlight: "Bis zu 3,0× Multiplikator", result: "Aufeinanderfolgende Treffer verketten" },
    { num: "3", text: "Stufenaufstieg", highlight: "+1 Stufe / 250 PKT", result: "Behälter schrumpfen & beschleunigen" },
    { num: "4", text: "Fehlschuss & Zeitablauf", highlight: "Combo-Reset", result: "Ablegen außerhalb setzt Multiplikator zurück" }
  ],
};

export default function DragAndDropPage() {
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
      <DragAndDropClient copy={copyDe} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
