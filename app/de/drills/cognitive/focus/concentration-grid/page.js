import ConcentrationGridClient from '@/app/drills/cognitive/focus/concentration-grid/ConcentrationGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — de-DE (concentration-grid / schulte-tabelle)
// PRIMARY:  "Schulte-Tabelle"                 — Top DACH query
//           "Schulte Tabelle online"          — High conversion web query
// SECONDARY / LSI:
//           "Schulte Tabelle kostenlos"       — High volume free tool search
//           "Peripheres Sehen Training"       — Cognitive capability query
//           "Konzentrationsgitter"            — Direct German translation of concentration grid
//           "Schnelllesen Übungen"            — Speed reading association
//           "Visuelle Suchgeschwindigkeit"    — Scientific mechanism phrase
//           "Blickspanne erweitern"           — Cognitive training goal
// WINNER TITLE: Schulte-Tabelle Online – Konzentrationsgitter | SkillDrills
// ============================================================

export const metadata = {
  title: "Schulte-Tabelle: Konzentrationsübung online | SkillDrills",
  description: "Schulte-Tabelle als kostenlose Konzentrationsübung online: Zahlen 45 Sekunden lang der Reihe nach antippen, das Gitter wächst ab 3x3.",
  keywords: [
    "Schulte-Tabelle",
    "Konzentrationsübungen",
    "Konzentrationsübung online",
    "Konzentrationstraining",
    "Schulte Tabelle online",
    "Schulte Tabelle kostenlos",
    "Konzentrationsgitter",
    "Peripheres Sehen Training",
    "Schnelllesen Übungen",
    "Visuelle Suchgeschwindigkeit",
    "Blickspanne erweitern",
    "Sakkadentraining Zahlen",
    "Aufmerksamkeitstest Schulte",
    "schulte tabelle 5x5 interaktiv",
    "augentraining fokus test online"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Schulte-Tabelle: Konzentrationsübung online | SkillDrills",
    description: "Kostenlose Konzentrationsübung online: Zahlen auf der Schulte-Tabelle der Reihe nach antippen, 45 Sekunden lang auf wachsenden Gittern von 3x3 bis 8x8.",
    type: "website",
    url: "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Schulte-Tabelle: Konzentrationsübung online | SkillDrills",
    description: "Kostenlose Konzentrationsübung online: Zahlen auf der Schulte-Tabelle der Reihe nach antippen, 45 Sekunden lang auf wachsenden Gittern von 3x3 bis 8x8.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid",
    languages: getAlternateLanguages('/drills/cognitive/focus/concentration-grid'),
  },
};

export default function ConcentrationGridPageDe() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "Kognitive Drills", "item": "https://skilldrills.online/de/drills/cognitive" },
      { "@type": "ListItem", "position": 3, "name": "Schulte-Tabelle", "item": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Attention"],
    "name": "Schulte-Tabelle Online (Konzentrationsgitter)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Kostenloses browserbasiertes Schulte-Tabellen-Training zur Erweiterung des peripheren Sehens und der visuellen Suchgeschwindigkeit.",
    "genre": "Kognitives Training / Aufmerksamkeit",
    "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Schulte-Tabelle Online (Konzentrationsgitter)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "HTML5 Canvas, JavaScript fähiger Browser",
    "description": "Kostenlose interaktive Schulte-Tabelle online. Trainiere peripheres Sehen und Aufmerksamkeitsausdauer auf expandierenden Zahlenfeldern.",
    "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Schulte-Tabelle Online (Konzentrationsgitter)",
    "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid",
    "description": "Kostenlose interaktive Schulte-Tabelle online. Finde sequentielle Zahlen auf expandierenden Gittern von 3x3 bis 8x8.",
    "dateModified": "2026-11-12",
    "gamePlatform": "Web Browser",
    "genre": ["Kognitives Training", "Peripheres Sehen", "Schulte-Tabelle", "Konzentrationsgitter"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist eine Schulte-Tabelle und wozu dient sie?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Schulte-Tabelle ist nach dem deutschen Psychiater Walter Schulte benannt. Sie besteht aus einem Gitter mit zufällig verteilten Zahlen, die in aufsteigender Reihenfolge gefunden werden müssen, und wird heute vor allem als Konzentrationsübung für visuelles Suchen genutzt. Diese Version ist eine Übung, kein psychologischer Test."
        }
      },
      {
        "@type": "Question",
        "name": "Wie erweitert das Schulte-Training das periphere Sehen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indem der Blick auf das Zentrum des Rasters fixiert bleibt, zwingt die Übung das Gehirn, Ziffern im parafovealen und peripheren Sichtfeld wahrzunehmen, anstatt die Augen ruckartig zu jeder einzelnen Zahl zu bewegen."
        }
      },
      {
        "@type": "Question",
        "name": "Warum ist die Schulte-Tabelle für Schnellleser (Speed Reading) so wertvoll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beim Lesen wechseln sich Fixationen und Sakkaden ab (Rayner, 1998). Das Schulte-Gitter übt, Ziffern am Rand des Blickfelds zu erfassen, ohne jede Zahl einzeln anzuspringen, und wird deshalb gern als Ergänzung zum Schnelllesen genutzt. Eine schnellere Lesegeschwindigkeit ist damit nicht garantiert; der Drill misst sie nicht."
        }
      },
      {
        "@type": "Question",
        "name": "Was besagt die zentrale Fixationsregel beim Training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Blick ruht möglichst ruhig in der Mitte der Tabelle, und die nächste Ziffer wird über das periphere Blickfeld gesucht statt mit großen Augenbewegungen. Das ist die übliche Übungsregel, keine bewiesene Bestmethode."
        }
      },
      {
        "@type": "Question",
        "name": "Was versteht man unter visueller Suchlatenz und visueller Enge (Crowding)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mit wachsender Gittergröße (von 3x3 über 5x5 bis 8x8) rücken benachbarte Zahlen enger zusammen. Das Phänomen des visuellen Crowdings (Wolfe, 2007) erschwert die Zielerkennung und fordert fokussierte Aufmerksamkeitsfilterung."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es einen Richtwert für die Zeit auf einer 5x5 Schulte-Tabelle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es gibt keinen verbindlichen Richtwert; Zeiten hängen stark von Bildschirmgröße und Eingabegerät ab, und SkillDrills sammelt keine Nutzerdaten. Dieser Drill misst keine Einzelzeit für 5x5, sondern eine 45-Sekunden-Runde ab 3x3. Vergleiche Punkte und gelöste Gitter mit deinen eigenen früheren Runden."
        }
      },
      {
        "@type": "Question",
        "name": "Hilft das Konzentrationsgitter E-Sportlern und Rennfahrern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Nutzen für die Spielleistung ist nicht belegt. Die Übung ähnelt aber der Aufgabe, Anzeigen am Bildschirmrand zu erfassen, ohne den Blick von der Mitte abzuwenden; nutze sie als Ergänzung."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte man mit der Schulte-Tabelle trainieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es gibt keine feste Vorgabe. Kurze tägliche Einheiten von einigen Durchgängen (etwa 10 Minuten) mit Pausen sind angenehm für die Augen und leicht durchzuhalten."
        }
      },
      {
        "@type": "Question",
        "name": "Werden Fehlschläge oder falsche Klicks bestraft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Falsche Klicks lösen ein kurzes optisches Warnsignal aus und senken die Genauigkeitsquote in der Abschlussstatistik, beenden die 45-Sekunden-Runde jedoch nicht vorzeitig."
        }
      },
      {
        "@type": "Question",
        "name": "Ist dieser Schulte-Trainer kostenlos und ohne Installation nutzbar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, der Trainer ist vollständig kostenlos, funktioniert direkt im Browser auf PC, Tablet und Smartphone und erfordert weder Registrierung noch Download."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung zum Schulte-Tabellen-Training",
    "description": "In 4 Schritten peripheres Sehen und Suchgeschwindigkeit auf Zahlen-Gittern trainieren.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Blick im Zentrum des Rasters fixieren",
        "text": "Richte deine Augen auf den Mittelpunkt der Tabelle und halte den Fokus dort, anstatt jede Ziffer einzeln anzuschauen.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Periphere Wahrnehmung für Ziffer 1 aktivieren",
        "text": "Lokalisiere die Startzahl 1 im Randbereich deines Sichtfeldes und tippe sie sofort an.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Zahlen in strikt aufsteigender Reihenfolge abarbeiten",
        "text": "Setze die Sequenz ohne Unterbrechung fort (2, 3, 4 ...), während du den nächsten Zielwert bereits im Blickfeld vorwegnimmst.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Gitter vervollständigen und Dimension erweitern",
        "text": "Schließe das Raster vor Ablauf der 45 Sekunden ab, um auf größere Spielfelder (4x4, 5x5, 6x6) aufzusteigen.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/concentration-grid#step-4"
      }
    ]
  };

  const concentrationGridGuide = {
    heading: "Leitfaden für Schulte-Tabellen & Peripheres Sehtraining",
    intro: [
      "Die Schulte-Tabelle (Schulte Table) ist eine klassische Konzentrationsübung, benannt nach dem deutschen Psychiater Walter Schulte. Unter den Konzentrationsübungen für visuelles Suchen ist sie eine der bekanntesten: Das klassische Raster fordert Probanden auf, die Ziffern 1 bis 25 in aufsteigender Reihenfolge auf einem 5x5-Gitter zu lokalisieren, während der Blick im Idealfall auf der Mitte fixiert bleibt.",
      "In der angewandten Sportpsychologie entwickelte sich daraus das 'Konzentrationsgitter' (Harris & Harris, 1984), das in Sportpsychologie-Ratgebern als Übung für Blickgeschwindigkeit und Konzentration unter Zeitdruck beschrieben wird. Eine ereigniskorrelierte Potenzialstudie (ERP) an Kindern zeigte, dass die sequentielle Zahlensuche im Schulte-Gitter signifikant höhere neuronale Ressourcen beansprucht als die Einzelsuche und dass zusätzliche Farbdistraktoren die Latenzen im EEG messbar verzögern (Lu et al., 2022).",
      "Der SkillDrills Schulte-Tabellen-Trainer macht aus dieser statischen Tabelle eine durchgehende 45-Sekunden-Runde. Anstelle einer einzelnen isolierten Matrix erweitert sich das Gitter bei jedem Abschluss dynamisch von 3x3 bis zu 8x8, wobei ab Stufe 5x5 leichte Rotationsverzerrungen hinzutreten. Auf kleinen Bildschirmen (unter 380 px Breite) endet das Wachstum bei 7x7. So übst du, ein immer größeres Feld innerhalb eines festen 45-Sekunden-Zeitfensters abzusuchen.",
      "Messmethodik und Präzision: Jedes Klick- und Touch-Ereignis wird clientseitig über die hochauflösende performance.now() API des Browsers erfasst. Moderne Browser vergröbern Zeitgeber aus Sicherheitsgründen (Spectre-Mitigation) auf rund 1 ms, während Displays Änderungen auf ihre Bildwiederholrate quantisieren (ca. 16,7 ms pro Frame bei 60 Hz, Woods et al., 2015). Vergleichen Sie Ihre Resultate am besten auf derselben Hardwarekonfiguration.",
      "Datentransparenz: SkillDrills erhebt und überträgt keinerlei aggregierte Nutzerdaten. Alle Bestwerte und Einstellungen verbleiben ausschließlich im lokalen Speicher (localStorage) Ihres Webbrowsers. Die Hintergrundangaben stammen aus den aufgeführten Quellen; Punktstufen sind SkillDrills-Übungsbänder, keine Normwerte.",
      "Diese Übung ist ein kostenloses Trainingsspiel für Sport, Studium und persönliche Leistungssteigerung."
    ],
    benchmarks: {
      title: "Schulte-Tabelle: Notenstufen (Punkte pro 45-Sekunden-Runde)",
      headers: ["Stufe", "Punkte (45 s)"],
      rows: [
        ["S+", "ab 7.220"],
        ["S", "5.780 – 7.219"],
        ["A", "4.500 – 5.779"],
        ["B", "2.880 – 4.499"],
        ["C", "1.620 – 2.879"],
        ["D", "720 – 1.619"],
        ["F", "unter 720"]
      ],
      note: "SkillDrills-Übungsbänder, direkt aus der Notenformel des Endbildschirms berechnet (Anteil an 8.000 Referenzpunkten); keine Nutzerstatistik und keine Normwerte. Jeder richtige Tipp bringt 100 Punkte plus Tempobonus (bis 120), jedes gelöste Gitter einen Bonus proportional zur Feldzahl."
    },
    techniques: {
      title: "Wissenschaftliche Methoden für maximale Schulte-Gitter-Leistung",
      items: [
        {
          name: "Strikte Einhaltung des zentralen Fixationspunkts",
          desc: "Richte deine Augen starr auf die geometrische Mitte des Gitters. Versuche bewusst, keine Augenbewegungen zu den Ziffern am Rand auszuführen, sondern diese über das periphere Gesichtsfeld wahrzunehmen.",
          tips: "Stelle dir vor, die gesamte Matrix wie ein einheitliches Gemälde zu betrachten."
        },
        {
          name: "Parafoveales Vorab-Caching der Nachbarzahlen",
          desc: "Während du Ziffer 3 antippst, sollte deine periphere Aufmerksamkeit bereits die Ziffern 4 und 5 im Vorfeld registrieren (Rayner, 1998). Das verkürzt die Suchpause zwischen Klicks.",
          tips: "Denke immer zwei Ziffern im Voraus, anstatt erst nach dem Klick mit der neuen Suche zu beginnen."
        },
        {
          name: "Vermeidung von subvokaler Zählung",
          desc: "Das innerliche laute Mitsprechen der Zahlen im Kopf bindet dein Suchtempo leicht an dein Sprechtempo.",
          tips: "Erkenne die Form der Zahl direkt als visuelles Muster, ohne ihren Namen innerlich auszusprechen."
        },
        {
          name: "Atmung und periphere Entspannung",
          desc: "Physische Anspannung und verkrampfte Augenmuskeln verengen das Gesichtsfeld (Tunnelblick). Eine ruhige, tiefe Zwerchfellatmung hält das periphere Sehfeld weit offen.",
          tips: "Atme gleichmäßig aus, lockere deine Nackenmuskeln und blicke mit weichem Fokus auf das Display."
        }
      ]
    },
    steps: [
      "Starte die 45-Sekunden-Session und fixiere den Blick auf der Gittermitte.",
      "Lokalisiere die Ziffer 1 über dein peripheres Sichtfeld und tippe sie an.",
      "Arbeite dich in exakt aufsteigender Ziffernfolge durch das aktuelle Feld.",
      "Vollende das Raster vor Ablauf des Countdowns, um auf größere Gitterebenen aufzusteigen.",
      "Werte deine Trefferquote, gelöste Gitter und Maximaldimension in der Detailstatistik aus."
    ],
    audience: "Schnellleser, Schüler und Studierende zur Konzentrationssteigerung sowie E-Sportler und Athleten, die ihre periphere Reaktionsbereitschaft optimieren wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('lu2022', 'treisman1980', 'rayner1998', 'rayner2016', 'wolfe2007', 'woods2015'),
    related: [
      { href: "/de/drills/cognitive/processing-speed/symbol-matching", label: "Symbol Matching Speed Test" },
      { href: "/de/drills/cognitive/attention/concentration-stamina", label: "Konzentrations-Ausdauer Test" },
      { href: "/de/drills/cognitive/processing-speed/rsvp-reader", label: "RSVP Schnelllese-Trainer" },
      { href: "/de/drills/reaction-speed/visual-tracking-speed-test", label: "Visueller Tracking Speed Test" },
      { href: "/de/drills/reaction-speed/reaction-game", label: "Reaktionstest Spiel" }
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
      <ConcentrationGridClient
        copy={{
          h1Keyword: "Schulte-Tabelle",
          h1Suffix: ": Konzentrationsübung online",
          subtitle: "Zahlen der Reihe nach finden: schneller visuell suchen und die Aufmerksamkeit fokussieren",
          startTitle: "Schulte-Tabelle",
          startSubtitle: "Zahlen der Reihe nach finden • wachsende Gitter",
          startButtonText: "Training starten",
          getReady: "BEREIT MACHEN",
          caption: "Finde fortlaufende Zahlen auf expandierenden Schulte-Gittern. Trainiere peripheres Sehen, Blickspanne und visuelle Suchgeschwindigkeit.",
          statScore: "Punkte",
          statTime: "Restzeit",
          statGridSize: "Gittergröße",
          statBest: "Bestwert",
          hudTarget: "Ziel:",
          statPoints: "Punkte",
          statAccuracy: "Genauigkeit",
          statGridsCleared: "Gelöste Gitter",
          statPeakGrid: "Max Gitter",
          playAgainText: "Nochmal spielen",
          shareText: "Ergebnis teilen",
          exitText: "Beenden",
          stageCaption: "Scanne und tippe Zahlen in strikt aufsteigender Reihenfolge auf expandierenden Schulte-Gittern.",
          rulesTitle: "Drill-Anleitung & Punktesystem",
          aboutTitle: "Über die Schulte-Tabelle & Konzentrationsgitter",
          aboutLead: "Die Schulte-Tabelle ist eine klassische Konzentrationsübung: Zufällig verteilte Zahlen werden der Reihe nach gesucht, wobei Blickführung und peripheres Sehen geübt werden (Lu et al., 2022; Rayner, 1998).",
          aboutText: "Das Konzentrationsgitter schult schnelle Augenbewegungen (Sakkaden) und fokussierte Aufmerksamkeit unter progressiver visueller Enge (Treisman & Gelade, 1980; Wolfe, 2007).\n\nDurch das systematische Absuchen von Zahlenketten übst du Blickführung und periphere Zielerkennung; eine Verbesserung ist nicht garantiert.\n\nDa jede Session auf einem festen 45-Sekunden-Timer läuft, belohnt der Drill kontinuierliche Präzision ohne hastige Fehlschüsse.",
          aboutCards: [
            { title: "Für wen geeignet?", text: "Athleten, Piloten, Schnellleser und E-Sportler, die auf schnelle visuelle Informationsverarbeitung unter Zeitdruck angewiesen sind.", color: "bg-blue-600" },
            { title: "Trainierte Fähigkeiten", text: "Visuelle Suchgeschwindigkeit, mikrosakkadische Effizienz, periphere Blickspannenerweiterung und kognitive Aufmerksamkeitsausdauer.", color: "bg-emerald-600" },
            { title: "Peripheres Sehen", text: "Jedes gelöste Feld vergrößert das Gitter und zwingt das visuelle System, einen immer breiteren Bereich ohne direkte Blicksprünge zu überwachen.", color: "bg-purple-600" }
          ],
          rulesItems: [
            { title: "Sequenzielle Suche", text: "Tippe Zahlen in strikt aufsteigender Reihenfolge ab 1 bis zur höchsten Ziffer des aktuellen Gitters." },
            { title: "Expandierende Gitter", text: "Ein gelöstes Gitter schaltet größere Dimensionen frei (3x3 → 4x4 → 5x5 ...), die ein weiteres peripheres Sehfeld fordern." },
            { title: "Fester 45-Sekunden-Lauf", text: "Du hast exakt 45 Sekunden Zeit. Jedes gelöste Gitter vergrößert das Spielfeld, verlängert die Uhr jedoch nicht." },
            { title: "Präzision & Fokus", text: "Fehlklicks mindern deine Genauigkeit, beenden das Spiel jedoch nicht vorzeitig. Scanne gründlich vor jedem Tippen." }
          ]
        }}
      />
      <DrillGuide guide={concentrationGridGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
