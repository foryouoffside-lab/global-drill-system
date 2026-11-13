import ColorSequenceClient from '@/app/drills/memory/short-term-memory/color-sequence/ColorSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';

// ============================================================
// SEO EMPIRICAL RESEARCH FINDINGS — de-DE (color-sequence)
// PRIMARY DOMESTIC: "Senso Spiel Online" — Classic Milton Bradley / MB German branding
//                   "Farben merken Spiel" — High-demand domestic search query
// SECONDARY / LSI:
//                   "Simon Says Spiel Online" — International classic query
//                   "Farben Reihenfolge merken" — Natural descriptive German query
//                   "Sequenzgedächtnis Test" — Cognitive testing phrase
//                   "Visuelles Arbeitsgedächtnis" — Memory term
//                   "Kurzzeitgedächtnis Test Online" — General memory search
//                   "Gedächtnistraining Farben" — Brain training query
//                   "Farbmuster merken" — Pattern memory term
//                   "Chunking Gedächtnistraining" — Cognitive technique search
// WINNER TITLE:     Senso Spiel Online – Farben Reihenfolge merken | SkillDrills (58 chars)
// ============================================================

export const metadata = {
  title: 'Farbsequenz-Spiel im Senso-Stil online | SkillDrills',
  description: 'Kostenloses Farbsequenz-Spiel im Senso-Stil: Merke dir die aufleuchtende Farbfolge aus 6 Farben und tippe sie in gleicher Reihenfolge nach. Start mit 3 Farben.',
  keywords: [
    'senso online kostenlos',
    'farbsequenz spiel',
    'farbenfolge merken',
    'simon spiel online',
    'senso spiel online',
    'farben merken spiel',
    'farbsequenz gedaechtnistest',
    'visuelles arbeitsgedaechtnis test',
    'farben reihenfolge merken',
    'kurzzeitgedaechtnis test online',
    'senso spiel kostenlos',
    'farben memory spiel',
    'chunking methode lernen',
    'visuelle merkspanne uben',
    'gehirntraining gedaechtnis',
  ],
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence',
    languages: getAlternateLanguages('/drills/memory/short-term-memory/color-sequence'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Farbsequenz-Spiel im Senso-Stil online | SkillDrills',
    description: 'Kostenloses Farbsequenz-Spiel im Senso-Stil: Merke dir die aufleuchtende Farbfolge aus 6 Farben und tippe sie in gleicher Reihenfolge nach. Start mit 3 Farben.',
    url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Farbsequenz-Spiel im Senso-Stil online | SkillDrills',
    description: 'Kostenloses Farbsequenz-Spiel im Senso-Stil: Merke dir die aufleuchtende Farbfolge aus 6 Farben und tippe sie in gleicher Reihenfolge nach. Start mit 3 Farben.',
  },
};

const copyDe = {
  title: 'Farbsequenz-Spiel im Senso-Stil',
  subtitle: 'Farbfolge merken und in gleicher Reihenfolge nachtippen – im Stil von Senso',
  caption: 'Im Kreis leuchtet eine Farbe nach der anderen auf. Tippe die Farbtasten danach in derselben Reihenfolge. Jede gelöste Runde macht die nächste, neue Folge um eine Farbe länger.',
  statScore: 'Punkte',
  statTime: 'Restzeit',
  statLevel: 'Stufe',
  statBestScore: 'Bestwert',
  rulesTitle: 'Drill-Anleitung & Punktesystem',
  rule1Text: 'Sequenz wiederholen',
  rule1Highlight: '+100 PTS',
  rule1Result: 'Tippe die aufleuchtenden Farbfelder in exakter Reihenfolge nach',
  rule2Text: 'Stufen-Bonus',
  rule2Highlight: '+10% PTS / Stufe',
  rule2Result: 'Runde auf Stufe L bringt 100 × (1 + 0,1 × L) Punkte',
  rule3Text: 'Fehlversuch / Timeout',
  rule3Highlight: '-1 Stufe',
  rule3Result: 'Falsche Farbe oder 8 s ohne Eingabe: kein Punkt- oder Zeitabzug, danach neue Zufallsfolge',
  rule4Text: 'Adaptive Schwierigkeit',
  rule4Highlight: 'Dynamisch',
  rule4Result: 'Stufe L = L + 2 Farben; Anzeige wird mit jeder Stufe schneller',
  aboutTitle: 'Über das Farbsequenz-Spiel im Senso-Stil & Visuelles Arbeitsgedächtnis',
  overviewTitle: 'Was trainiert das Farben-Merkspiel im Senso-Stil?',
  overviewLead: 'Das visuelle Arbeitsgedächtnis kann im Normalzustand nur etwa vier isolierte Einheiten gleichzeitig speichern (Luck & Vogel, 1997; Cowan, 2001). Eine länger werdende Farbfolge ist eine Übung genau an dieser Grenze.',
  aboutCards: [
    { title: 'Für wen geeignet?', text: 'Schüler, Studierende, E-Sportler und Senioren, die ihr kurzzeitiges visuelles Erinnerungsvermögen und ihre Konzentration stärken möchten.' },
    { title: 'Trainierte Fähigkeiten', text: 'Visuelle Merkspanne, sequenzielle Enkodierung im visuell-räumlichen Notizblock (Baddeley & Hitch, 1974) und Konzentration unter Zeitdruck.' },
    { title: 'Chunking-Strategie', text: 'Fasse Einzelfarben zu Blöcken (z. B. Rot-Blau-Paare) zusammen, um die 4-Elemente-Grenze des Kurzzeitgedächtnisses zu überwinden (Miller, 1956).' },
  ],
};

export default function GermanColorSequencePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'SkillDrills Home', item: 'https://skilldrills.online/de' },
      { '@type': 'ListItem', position: 2, name: 'Gedächtnis-Training', item: 'https://skilldrills.online/de/drills/memory' },
      { '@type': 'ListItem', position: 3, name: 'Kurzzeitgedächtnis', item: 'https://skilldrills.online/de/drills/memory/short-term-memory' },
      { '@type': 'ListItem', position: 4, name: 'Farbsequenz-Spiel im Senso-Stil', item: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence' },
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Farbsequenz-Spiel im Senso-Stil – Farbfolge merken',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    dateModified: '2026-11-12',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    description: 'Kostenloses Farbfolgen-Merkspiel im Stil von Senso: 45 Sekunden lang länger werdende Farbfolgen merken und nachtippen, um visuelles Arbeitsgedächtnis und Chunking zu üben.',
    genre: 'Cognitive Training / Visual Working Memory',
    url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence',
    publisher: {
      '@type': 'Organization',
      name: 'SkillDrills',
      url: 'https://skilldrills.online',
    },
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Farbsequenz-Spiel im Senso-Stil',
    url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence',
    description: 'Kostenloses Farbfolgen-Merkspiel im Browser mit 6 Farben: Start mit 3 Farben, jede gelöste Runde eine Farbe mehr, jeder Fehler eine weniger.',
    dateModified: '2026-11-12',
    applicationCategory: 'GameApplication',
    operatingSystem: 'All',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  const videoGameSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: 'Farben-Merkspiel im Senso-Stil',
    url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence',
    description: 'Farbfolgen-Merkspiel im Stil von Senso: Farben leuchten nacheinander im zentralen Kreis auf und werden über 6 Farbtasten in derselben Reihenfolge nachgetippt.',
    genre: ['Memory Game', 'Brain Training', 'Puzzle'],
    gamePlatform: ['Web Browser', 'Mobile', 'Tablet', 'Desktop'],
    applicationCategory: 'Game',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Wie funktioniert dieses Farbsequenz-Spiel im Senso-Stil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es ist ein Merkspiel im Stil des elektronischen Klassikers Senso (international Simon), nicht das Originalprodukt. Im zentralen Kreis leuchtet eine Farbe nach der anderen auf; danach tippst du die 6 Farbtasten in derselben Reihenfolge. Stufe 1 hat 3 Farben (Länge = Stufe + 2). Eine gelöste Runde hebt die Stufe um 1, ein Fehler senkt sie um 1. Jede Runde ist eine neue Zufallsfolge, eine Sitzung dauert 45 Sekunden.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Gehirnfunktionen werden beim Merken von Farbsequenzen trainiert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das Spiel fordert primär das visuelle Arbeitsgedächtnis und den visuell-räumlichen Notizblock (Visuospatial Sketchpad nach Baddeley & Hitch, 1974). Zudem sind selektive Aufmerksamkeit und das Enkodieren der Reihenfolge gefragt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was besagt die 4-Elemente-Grenze von Luck & Vogel (1997)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Steven J. Luck und Edward K. Vogel wiesen 1997 in Nature nach, dass das visuelle Arbeitsgedächtnis im Schnitt auf 3 bis 4 visuelle Objekte begrenzt ist. Die Studie nutzte gleichzeitig gezeigte Objekte, nicht Folgen; sie erklärt aber, warum es bei längeren Farbfolgen hilft, Farben zu Gruppen zusammenzufassen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was ist die Chunking-Methode und wie hilft sie im Spiel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Chunking (nach George A. Miller, 1956) bezeichnet das Zusammenfassen einzelner Informationseinheiten zu bedeutungsvollen Blöcken. Indem man sich nicht sechs Einzelfarben merkt, sondern zwei Dreiergruppen (z. B. Rot-Gelb-Blau als ein Block), sinkt die Zahl der Einheiten, die du einzeln halten musst.',
        },
      },
      {
        '@type': 'Question',
        name: 'Warum nutzt dieser Drill 6 statt der klassischen 4 Farben?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Klassische Geräte nutzen 4 Farben (Rot, Blau, Grün, Gelb). Dieser Drill erweitert das Spektrum um Lila und Orange auf 6 Felder, was die Auswahlentropie erhöht und fortgeschrittenen Spielern eine anspruchsvollere Herausforderung für das Arbeitsgedächtnis bietet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gibt es eine Zeitstrafe bei Fehlversuchen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nein, es gibt weder Punkt- noch Zeitabzug. Tippst du eine falsche Farbe oder 8 Sekunden lang keine Farbe, sinkt die Stufe um 1 (mindestens Stufe 1) und eine neue Zufallsfolge startet.',
        },
      },
      {
        '@type': 'Question',
        name: 'Welche Punktzahl oder Stufe ist gut?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Es gibt keinen offiziellen Normwert. SkillDrills sammelt keine Nutzerdaten und nennt daher keine Durchschnitte oder Perzentile. Stufe L zeigt L + 2 Farben, eine gelöste Runde bringt 100 × (1 + 0,1 × L) Punkte. Nutze die Übungsstufen unten und vergleiche dich mit deinen eigenen Bestwerten.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hilft das Training gegen Alltagsvergesslichkeit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Das ist nicht garantiert. Mit Übung wird man in genau diesem Spiel meist besser, ob sich das auf das Gedächtnis im Alltag überträgt, ist in der Forschung umstritten. Nutze es als Merkspiel.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist das Farbsequenz-Spiel für Touchscreens und Smartphones optimiert?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, die Farbtasten lassen sich per Touch auf Smartphone und Tablet sowie per Mausklick am PC bedienen.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ist dieses Farbsequenz-Spiel im Senso-Stil kostenlos und ohne Installation spielbar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, das Spiel ist kostenlos und braucht weder Registrierung noch Download. Alle Bestwerte bleiben lokal in deinem Browser.',
        },
      },
    ],
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Anleitung zum Farben-Merkspiel im Senso-Stil',
    description: 'In 4 Schritten die visuelle Merkspanne und Sequenzerinnerung im Farbsequenz-Spiel trainieren.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Farbsequenz aufmerksam beobachten',
        text: 'Starte das Spiel und verfolge konzentriert die Farben, die nacheinander im zentralen Kreis aufleuchten.',
        url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence#step-1',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Muster mental zu Chunks bündeln',
        text: 'Fasse aufeinanderfolgende Farben gedanklich zu Zweier- oder Dreierpaaren zusammen.',
        url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence#step-2',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Farben in exakter Reihenfolge antippen',
        text: 'Sobald die Eingabeaufforderung erscheint, tippe die Felder in der vorgegebenen Abfolge an.',
        url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence#step-3',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Stufen steigern und Highscore aufbauen',
        text: 'Jede gelöste Runde hebt die Stufe um 1: Die nächste, neue Zufallsfolge ist eine Farbe länger und bringt mehr Punkte.',
        url: 'https://skilldrills.online/de/drills/memory/short-term-memory/color-sequence#step-4',
      },
    ],
  };

  const sensoGuide = {
    heading: 'Leitfaden zum Farbsequenz-Spiel im Senso-Stil & Arbeitsgedächtnis',
    intro: [
      'Das Wiedergeben von Farbfolgen ist eine der bekanntesten Übungen für das visuelle und serielle Arbeitsgedächtnis. Bekannt geworden durch ein elektronisches Spielgerät von Ralph H. Baer und Howard J. Morrison (1978), fordert dieses adaptive Paradigma die sofortige Speicherung, strukturierte Pufferung und exakte Rekonstruktion dynamischer Reizketten in präziser zeitlicher Reihenfolge.',
      'Die neurokognitive Architektur des menschlichen Kurzzeitgedächtnisses wurde über Jahrzehnte hinweg tiefgehend erforscht. Während George A. Miller (1956) den verbalen Flaschenhals von $7 \\pm 2$ Informationseinheiten identifizierte, wiesen Nelson Cowan (2001) sowie Steven J. Luck & Edward K. Vogel (1997) nach, dass das reine visuelle Arbeitsgedächtnis strikt auf etwa 4 distinkte Objekte begrenzt ist. Ohne aktive Rekodierungsstrategien bricht die menschliche Merkspanne jenseits von vier sequentiellen Elementen rapide ein.',
      'Im Mehrkomponenten-Modell des Arbeitsgedächtnisses von Alan Baddeley (Baddeley & Hitch, 1974; Baddeley, 2000) rekrutiert die serielle Reizverarbeitung den visuell-räumlichen Notizblock (Visuospatial Sketchpad). Robert H. Logie (1995) unterteilte diesen weiter in den passiven visuellen Cache (Farben und Formen) und den aktiven \'Inner Scribe\' (räumlich-zeitliche Bewegungsmuster). Geübte Anwender koppeln diesen Pfad zudem an die phonologische Schleife, um die Folge durch duale Enkodierung (visuell und subvokal) zusätzlich zu stützen.',
      'Das Spiel zeichnet in 45 Sekunden die Punktzahl, die höchste erreichte Stufe (Länge der Farbfolge) und die Trefferquote (Anteil gelöster Runden) auf. Reaktionszeiten pro Eingabe werden nicht gemessen.',
      'So läuft eine Runde: Stufe L zeigt L + 2 Farben aus 6 möglichen, jede Runde eine neue Zufallsfolge. Mit steigender Stufe leuchtet jede Farbe kürzer (von rund 0,7 s bis mindestens 0,25 s). Danach hast du für jede Eingabe 8 Sekunden; eine falsche Farbe oder Zeitüberschreitung senkt die Stufe um 1.',
      'Datentransparenz und Privatsphäre: SkillDrills erfasst keine aggregierten Nutzerstatistiken. Ihre Punktzahlen und Rekorde verbleiben ausschließlich im lokalen Speicher (localStorage) Ihres Browsers und werden niemals hochgeladen. Deshalb nennt diese Seite keine Nutzerdurchschnitte, Perzentile oder Nutzerzahlen; zitierte Zahlen stammen aus den unten aufgeführten Studien.'
    ],
    benchmarks: {
      title: 'Farbsequenz-Spiel im Senso-Stil – Übungsstufen (SkillDrills, 45-Sekunden-Lauf)',
      headers: ['Übungsstufe', 'Erreichte Stufe', 'Punkte bei fehlerfreiem Lauf', 'Typische Merkstrategie'],
      rows: [
        ['Stufe A', 'Level 11+ (13+ Farben)', 'ca. 1.550+ PTS', 'Farbnamen mitsprechen und Chunking kombiniert'],
        ['Stufe B', 'Level 8 – 10 (10–12 Farben)', 'ca. 980 – 1.549 PTS', 'Stabiles Chunking in 2er-/3er-Gruppen'],
        ['Stufe C', 'Level 5 – 7 (7–9 Farben)', 'ca. 500 – 979 PTS', 'Mittlere Farben gehen bei schnellem Wechsel verloren'],
        ['Stufe D', 'Level 3 – 4 (5–6 Farben)', 'ca. 230 – 499 PTS', 'Farben einzeln gemerkt, noch kein Chunking'],
        ['Stufe E', 'Level 1 – 2 (3–4 Farben)', 'unter 230 PTS', 'Regeln und Tempo kennenlernen']
      ],
      note: 'SkillDrills-Übungsstufen, keine Bevölkerungsnormen. Die Punkte gelten für einen fehlerfreien Lauf bis zu dieser Stufe (Punkte pro Runde = 100 × (1 + 0,1 × Stufe)); Fehler senken die Stufe, daher weichen echte Werte ab.'
    },
    techniques: {
      title: '4 praxiserprobte Gedächtnisstrategien für längere Sequenzen',
      items: [
        {
          name: 'Rhythmisches Chunking (Miller-Prinzip)',
          desc: 'Merke dir nicht einzelne Farben, sondern rhythmische Blöcke. Sprich die Farbanfangsbuchstaben innerlich in festen Takten mit (z. B. "Rot-Blau ... Grün-Gelb").',
          tips: 'Gruppiere die Kette immer in Zweier- oder Dreierpaare, sobald sie 4 Farben überschreitet.'
        },
        {
          name: 'Weg über die Farbtasten merken',
          desc: 'Die Farben leuchten nur im zentralen Kreis auf, aber die 6 Farbtasten (3 × 2) haben feste Plätze. Stell dir bei jeder Farbe die passende Taste vor und merke dir den Weg deines Fingers (Logie, 1995).',
          tips: 'Schau dir vor dem Start einmal die Anordnung der Tasten an.'
        },
        {
          name: 'Farbnamen innerlich mitsprechen',
          desc: 'Sprich bei jeder aufleuchtenden Farbe den Namen leise mit („Rot, Blau, Grün“). So kommt zur visuellen Spur eine sprachliche hinzu (phonologische Schleife; Baddeley, 2000).',
          tips: 'Sprich in Zweiergruppen und in festem Rhythmus.'
        },
        {
          name: 'Die Mitte der Folge sichern',
          desc: 'Jede Runde ist eine komplett neue Zufallsfolge, die vorige Runde hilft also nicht. Anfang und Ende bleiben meist gut hängen, die mittleren Farben gehen am leichtesten verloren (Positionseffekt). Bündle deshalb gezielt die Mitte.',
          tips: 'Sprich den Anfang sofort als Gruppe mit und verlass dich beim Ende auf das frische Bild.'
        }
      ]
    },
    steps: [
      'Starte die 45-Sekunden-Session und blicke auf den zentralen Kreis.',
      'Beobachte, wie eine Farbe nach der anderen aufleuchtet.',
      'Reorganisiere die Kette gedanklich in rhythmische Zweier- oder Dreierblöcke.',
      'Tippe die Farben nach Beendigung des Signals in exakt derselben Reihenfolge an.',
      'Jede gelöste Runde bringt eine längere Folge und mehr Punkte pro Runde.'
    ],
    audience: 'Gedächtnissportler, Schüler, Studierende, E-Sportler und alle, die ihr Arbeitsgedächtnis, ihre Konzentration und ihre mentale Merkspanne gezielt trainieren möchten.',
    faqs: faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text })),
    sources: pickSources('cowan2001', 'luck1997', 'baddeley1974', 'baddeley2000', 'logie1995', 'miller1956'),
    related: [
      { href: '/de/drills/memory/working-memory/n-back', label: 'Dual N-Back Gedächtnistest' },
      { href: '/de/drills/memory/short-term-memory/digit-span', label: 'Digit Span Zahlenmerktest' },
      { href: '/de/drills/memory/spatial-memory/grid-memorization', label: 'Gitter Gedächtnistraining' },
      { href: '/de/drills/cognitive/focus/concentration-grid', label: 'Schulte-Tabelle Konzentrationsgitter' },
      { href: '/de/drills/cognitive/focus/distraction-fighter', label: 'Stroop-Test Online' }
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
      <ColorSequenceClient copy={copyDe} />
      <DrillGuide guide={sensoGuide} />
      <RelatedDrills />
    </>
  );
}
