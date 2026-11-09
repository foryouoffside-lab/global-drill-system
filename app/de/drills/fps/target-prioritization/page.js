import TargetPrioritizationClient from '@/app/drills/fps/target-prioritization/TargetPrioritizationClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Zielpriorisierung im FPS: Zielauswahl üben | SkillDrills",
  description: "Zielpriorisierung im Browser üben: Triff rote Ziele vor gelben, schieße nie auf grüne Verbündete. Kostenloses Training für Zielauswahl und Schusshemmung.",
  keywords: [
    "Zielpriorisierung",
    "Zielauswahl",
    "Zielpriorisierung FPS",
    "Bedrohungseinschätzung Shooter",
    "Zielauswahl üben",
    "Schusshemmung FPS",
    "taktische Entscheidungszeit"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/target-prioritization",
    languages: getAlternateLanguages('/drills/fps/target-prioritization'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Zielpriorisierung im FPS: Zielauswahl üben | SkillDrills",
    description: "Zielpriorisierung im Browser üben: Triff rote Ziele vor gelben, schieße nie auf grüne Verbündete. Kostenloses Training für Zielauswahl und Schusshemmung.",
    url: "https://skilldrills.online/de/drills/fps/target-prioritization",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Zielpriorisierung im FPS: Zielauswahl üben | SkillDrills",
    description: "Zielpriorisierung im Browser üben: Triff rote Ziele vor gelben, schieße nie auf grüne Verbündete. Kostenloses Training für Zielauswahl und Schusshemmung.",
  },
};

export default function TargetPrioritizationDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Drills", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Zielpriorisierung - Zielauswahl üben", "item": "https://skilldrills.online/de/drills/fps/target-prioritization" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Visual_search", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Zielpriorisierung - Zielauswahl und Schusshemmung",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenloses Browsertraining mit roten, gelben und grünen Zielen für Bedrohungseinschätzung, visuelle Filterung und Trigger-Disziplin in taktischen Shootern.",
    "genre": "FPS Training / Target Prioritization",
    "url": "https://skilldrills.online/de/drills/fps/target-prioritization",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Zielpriorisierung - Zielauswahl und Schusshemmung",
    "url": "https://skilldrills.online/de/drills/fps/target-prioritization",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Erfordert JavaScript und HTML5 Canvas Unterstützung",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Kostenloses Browsertraining mit roten, gelben und grünen Zielen für Bedrohungseinschätzung, visuelle Filterung und Trigger-Disziplin in taktischen Shootern."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Zielpriorisierung - Zielauswahl und Schusshemmung",
    "url": "https://skilldrills.online/de/drills/fps/target-prioritization",
    "description": "Kostenloses Browsertraining mit roten, gelben und grünen Zielen für Bedrohungseinschätzung, visuelle Filterung und Trigger-Disziplin in taktischen Shootern.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Prioritization"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was versteht man unter Zielpriorisierung in taktischen FPS-Spielen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zielpriorisierung (Target Prioritization) ist der exekutive kognitive Prozess, bei dem in Gefechtssituationen mit mehreren sichtbaren Zielen blitzschnell die Gefährlichkeitsstufe jedes Gegners bewertet und die unmittelbar tödlichste Bedrohung zuerst eliminiert wird, während Ablenkungsziele oder Verbündete ignoriert werden."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft dieses Zielpriorisierungs-Training ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach dem Start laufen Vollbild und Pointer Lock, die Uhr beginnt bei 45 Sekunden. Gleichzeitig bewegen sich 2 bis 4 Ziele über das Feld und prallen an den Rändern ab. Rot (hohe Bedrohung) gibt 100 Punkte, Gelb (mittlere Bedrohung) 50 Punkte, jeweils mal Combo- und Level-Multiplikator, und jeder Treffer bringt +2 Sekunden (maximal 60). Gelb wird nach kurzer Zeit zu Rot; Grün (Verbündete) darf nicht beschossen werden und verschwindet nach etwa 3 Sekunden. Wer Gelb trifft, solange noch ein rotes Ziel sichtbar ist, macht einen Prioritätsfehler: keine Punkte, Combo weg. Auch Friendly Fire und Fehlschüsse setzen die Combo zurück; jeder Fehler kostet 1 Sekunde. Alle 1400 Punkte steigt das Level und mit ihm Zielanzahl, Tempo und Rot-Anteil."
        }
      },
      {
        "@type": "Question",
        "name": "Warum neigen Spieler in Teamkämpfen zu reflexartigem Panikfeuer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unter Stress reagiert man leicht auf die nächstbeste sichtbare Bewegung, bevor geprüft ist, ob sie überhaupt eine Bedrohung ist. Das führt zu Schüssen auf Attrappen oder zu Friendly Fire."
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert das Go/No-Go-Prinzip bei der Schusshemmung im Shooter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basierend auf den Forschungen von Franciscus Cornelis Donders (1868) verlangt das Go/No-Go-Paradigma, einen vorbereiteten Klick zu unterdrücken, sobald prohibitive Merkmale erkannt werden – wie etwa grüne Team-Outlines oder Decoy-Projektile."
        }
      },
      {
        "@type": "Question",
        "name": "Was besagt die Stop-Signal Reaction Time (SSRT) nach Logan & Cowan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Stop-Signal Reaction Time (SSRT) beziffert die Latenz, die das Gehirn benötigt, um einen bereits initiierten motorischen Impuls abzublasen. Im Horse-Race-Modell von Logan und Cowan (1984) laufen Handlungsausführung und Handlungsstopp wie zwei konkurrierende Prozesse gegeneinander. Dieser Drill misst die SSRT nicht direkt; er übt, auf grüne Ziele nicht zu schießen."
        }
      },
      {
        "@type": "Question",
        "name": "Nach welchen Kriterien stuft man Bedrohungen beim Site-Push ein?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Übliche Kriterien sind Sichtlinienexposition, Waffenletalität auf die gegebene Distanz (z. B. Schrotflinte im Nahkampf vs. Gewehr auf Distanz), Crosshair Placement des Gegners und Verbleib von Teamressourcen, damit der gefährlichste Winkel zuerst bekämpft wird. Dieser Drill vereinfacht das auf eine feste Reihenfolge: Rot vor Gelb."
        }
      },
      {
        "@type": "Question",
        "name": "Was bewirkt die Ablenkungsunterdrückung (Distractor Suppression) im Gehirn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die von Broadbent (1958) und Treisman (1964) postulierte Aufmerksamkeitsfilterung hilft, aufgabenirrelevante Reize wie kreuzende Teamkollegen abzuschwächen, damit die Aufmerksamkeit bei den echten Bedrohungen bleibt."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wirkt sich das Beschießen von Attrappen auf die Runden-Siegquote in CS2 und Valorant aus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das Verschwenden von Munition oder das Verraten der Fadenkreuzposition an Attrappen (z. B. Yoru-Klone oder Mirage-Illusionen) verschafft echten Gegnern ein Zeitfenster. Gerade im 1vX, wo jeder Schuss zählt, ist das teuer."
        }
      },
      {
        "@type": "Question",
        "name": "Welcher Einfluss hat die Mausempfindlichkeit auf präzise Zielwechsel und Stoppkraft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sehr hohe Empfindlichkeit erschwert sauberes Abbremsen auf dem Ziel, sehr niedrige verlangsamt Wechsel zu weit entfernten Zielen. Nutze am besten deine gewohnte Spiel-Empfindlichkeit, mit der du zuverlässig stoppen kannst."
        }
      },
      {
        "@type": "Question",
        "name": "Warum verringert starker Adrenalinausstoß die taktische Entscheidungsgeschwindigkeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Starke Anspannung kann zu Tunnelblick führen: Das Umfeld wird später wahrgenommen, und es kommt eher zu unüberlegten Klicks auf den erstbesten Reiz."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte kognitive Zielpriorisierung trainiert werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine feste Regel gibt es nicht. Ein kurzes Warm-up von etwa 10 Minuten ist ein sinnvoller Rahmen; vergleiche Präzision und Friendly-Fire-Anzahl auf derselben Hardware über mehrere Tage."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Zielpriorisierung und Bedrohungseinschätzung trainieren",
    "description": "Schritt-für-Schritt-Anleitung zur Entwicklung blitzschneller Bedrohungsdifferenzierung, Ablenkungsunterdrückung und Schusshemmung.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mausempfindlichkeit kalibrieren",
        "text": "Passe DPI und In-Game-Sensitivität in den Session-Einstellungen exakt an dein Hauptspiel an, um dein Muskelgedächtnis konsistent zu halten.",
        "url": "https://skilldrills.online/de/drills/fps/target-prioritization#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Rote Primärbedrohungen erfassen",
        "text": "Scanne das Zielfeld aktiv nach auftauchenden roten Zielen mit hoher Bedrohung und schalte diese vor Ablauf des Timers ballistisch aus.",
        "url": "https://skilldrills.online/de/drills/fps/target-prioritization#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Gelbe Sekundärziele neutralisieren",
        "text": "Wechsle nach Klärung der roten Bedrohungen sofort zu gelben Zielen, bevor deren Countdown abläuft und sie zu Hochrisikozielen eskalieren.",
        "url": "https://skilldrills.online/de/drills/fps/target-prioritization#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Schusshemmung bei grünen Verbündeten wahren",
        "text": "Unterdrücke den Abzugsimpuls diszipliniert bei grünen Einheiten; das Unterlassen von Fehlschüssen erhält deine Combo-Multiplikatoren aufrecht.",
        "url": "https://skilldrills.online/de/drills/fps/target-prioritization#step-4"
      }
    ]
  };

  const targetPrioritizationGuide = {
    heading: "Zielpriorisierung im FPS: Zielauswahl und Schusshemmung üben",
    intro: [
      "Dieses Zielpriorisierungs-Training übt die Entscheidung, welches Ziel zuerst bekämpft werden muss: Bewegte rote Ziele (hohe Bedrohung) zuerst, dann gelbe, und grüne Verbündete nie. So übst du Bedrohungseinschätzung, Ablenkungsfilterung und Schusshemmung, etwa für Gefechte in Valorant und CS2.",
      "Die neurophysiologische Grundlage motorischer Hemmungsprozesse wurde von Gordon D. Logan und William B. Cowan (1984) im wegweisenden Stop-Signal-Paradigma formuliert. In ihrem 'Horse-Race'-Modell laufen Handlungsausführung (Go-Prozess) und Handlungsunterdrückung (Stop-Prozess) unabhängig gegeneinander. Unter Druck gewinnt oft der Klick, bevor das Ziel geprüft ist: Panikfeuer.",
      "Die Mechanismen der visuellen Reizfilterung wurden durch Donald E. Broadbent (1958) und Anne Treisman (1964) in den Modellen der selektiven Aufmerksamkeit begründet. Treffen mehrere konkurrierende Reize auf die Netzhaut ein, aktiviert das Gehirn Top-Down-Aufmerksamkeitsfilter (Posner & Petersen, 1990), um irrelevante Bewegungen peripher abzuschwächen und foveale Ressourcen voll auf die gefährlichste Bedrohungsachse zu lenken.",
      "Durch die Verknüpfung von Franciscus Cornelis Donders' (1868) Go/No-Go-Diskriminationsmodellen mit hochauflösender digitaler Chronometrie via performance.now() (Woods et al., 2015) verbindet dieser Drill Mausführung mit schnellen Entscheidungen unter Zeitdruck.",
      "Messmethodik: Jedes Ereignis wird clientseitig über die hochpräzise performance.now()-Uhr deines Browsers erfasst – ohne Serververzögerung oder Datenübertragung. Zu beachten: Browser-Timer werden aus Sicherheitsgründen (Spectre-Schutz) auf ca. 1 ms gerundet; Bildschirme quantisieren visuelle Reize über die Bildwiederholrate (16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz, 4,1 ms bei 240 Hz). Die USB-Abfragerate der Maus fügt ca. 1 ms bei 1000 Hz bzw. 8 ms bei 125 Hz hinzu. Latenzunterschiede unter 5 ms stellen messtechnisches Rauschen dar; vergleiche deine Trainingsläufe daher stets auf identischer Hardware."
    ],
    benchmarks: {
      title: "So liest du die Ergebnisanzeige",
      headers: ["Wert", "So zählt der Drill", "Bedeutung", "Verbessern"],
      rows: [
        ["Präzision", "(rote + gelbe Treffer) ÷ alle Klicks", "Anteil korrekt priorisierter Treffer", "Eigene Werte auf demselben Gerät vergleichen"],
        ["Gefahren neutralisiert", "Treffer auf rote und gelbe Ziele", "Wie viele Bedrohungen du in der Zeit geschafft hast", "Mit gehaltener Combo steigern"],
        ["Friendly Fire / Prioritätsfehler", "Schuss auf Grün oder auf Gelb, solange Rot sichtbar ist", "Fehler bei Schusshemmung und Bedrohungseinschätzung", "Erst nach Rot suchen"],
        ["Max Combo · Höchstlevel", "Treffer ohne Fehler am Stück, 1 Level pro 1400 Punkte", "Konstanz und erreichte Schwierigkeit", "Fehler vor Tempo reduzieren"]
      ],
      note: "Die Tabelle erklärt die Werte, die dieser Drill tatsächlich erfasst; sie ist keine Rang-, Tier- oder Nutzerstatistik."
    },
    techniques: {
      title: "Evidenzbasierte Protokolle für perfekte Zielpriorisierung",
      items: [
        {
          name: "Exekutive Reaktionshemmung (Go/No-Go Trigger-Disziplin)",
          desc: "Übe, vorbereitete Klicks zu stoppen, sobald du ein grünes Ziel erkennst (Logan & Cowan, 1984). Trainiere bewusste Fingerentspannung statt reflexartigem Abdrücken auf jede Bewegung.",
          tips: "Lass deinen Zeigefinger locker ohne Muskelvorspannung auf der Maustaste ruhen, bis der Status des Ziels zweifelsfrei verifiziert ist."
        },
        {
          name: "Dynamisches Bedrohungshierarchie-Scanning",
          desc: "Fokussiere deine primäre visuelle Suche auf aktive rote Hochrisiko-Ziele und betrachte gelbe Ziele als sekundäre Bereitstellungsphase. Im Spiel entspricht das dem Gegner mit direkter Schusslinie.",
          tips: "Befindet sich ein gelbes Ziel näher am Fadenkreuz, aber ein rotes Ziel ist aktiv, ziehe das Fadenkreuz zwingend zuerst zum roten Ziel."
        },
        {
          name: "Periphere Ablenkungsunterdrückung (Distractor Suppression)",
          desc: "Setze selektive Aufmerksamkeitsfilterung ein (Broadbent, 1958; Treisman, 1964), um kreuzende verbündete Einheiten im Sichtfeld auszublenden, ohne gegnerische Bewegungskorridore aus dem Auge zu verlieren.",
          tips: "Erweitere dein peripheres Sichtfeld mental, sodass freundliche Silhouetten als Hintergrundrauschen verarbeitet werden."
        },
        {
          name: "Kadenzierte ballistische Zielentscheidung",
          desc: "Vermeide unkontrolliertes Klicken. Prüfe zuerst kurz die Farbe des Ziels und führe erst dann den Flick aus.",
          tips: "Eine kurze Bestätigung vor dem Klick verhindert Fehlschüsse und Combo-Verluste."
        }
      ]
    },
    steps: [
      "Passe In-Game-Sensitivität und DPI in den Session-Einstellungen für eine konsistente Hand-zu-Cursor-Zuordnung an und aktiviere die Mauszeigersperre.",
      "Überwache das Zielfeld kontinuierlich auf das Auftauchen roter Hochrisiko-Bedrohungen.",
      "Schalte vorrangig aktive rote Ziele aus (+100 Punkte, +2 s auf die Uhr, maximal 60 s).",
      "Neutralisiere gelbe Sekundärziele erst, wenn kein rotes Ziel mehr sichtbar ist, und bevor sie zu Rot eskalieren.",
      "Wahre strikte Trigger-Disziplin und ignoriere grüne Einheiten vollständig, um deine Combo-Multiplikatoren aufzubauen."
    ],
    audience: "Ambitionierte FPS-Spieler in Counter-Strike 2, Valorant, Rainbow Six Siege und Apex Legends, die exzellente Bedrohungsdifferenzierung, reduzierte Panikschüsse und überlegene Entscheidungsgeschwindigkeit in Clutch-Situationen anstreben.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'green2003', 'donders1969', 'treisman1980', 'logan1984'),
    related: [
      { href: "/de/drills/fps/target-acquisition", label: "Zielerfassung FPS Training" },
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/180-degree-awareness", label: "180 Grad Aiming" },
      { href: "/de/drills/fps/instant-response", label: "FPS Reaktionszeit Test" },
      { href: "/de/drills/fps/recoil-control", label: "Recoil Control Training" }
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
      <TargetPrioritizationClient
        copy={{
          h1Keyword: "Zielpriorisierung",
          h1Suffix: " – Zielauswahl & Schusshemmung üben",
          subtitle: "Trainiere Zielauswahl, Bedrohungseinschätzung und kontrollierte Schusshemmung direkt im Browser.",
          statScore: "Punkte",
          statTime: "Zeit",
          statAccuracy: "Präzision",
          statBestScore: "Highscore",
          statThreatsCleared: "Gefahren neutralisiert",
          statMaxCombo: "Max Combo",
          statPeakLevel: "Höchstlevel",
          startTitle: "Zielpriorisierung",
          startSubtitle: "Bedrohungseinschätzung & Kognitives Filtern • Endlose Levelprogression",
          getReady: "BEREIT MACHEN",
          toggleFlash: "Fehlschuss-Blitz an/aus",
          toggleSound: "Audio an/aus",
          pausedTitle: "PAUSIERT",
          pausedSubtitle: "Klicken zum Fortsetzen — Mauszeiger wird wieder gesperrt.",
          stageCaption: "Eliminiere zuerst rote Primärbedrohungen und anschließend gelbe Sekundärziele. Schieße niemals auf grüne Verbündete!",
          rulesTitle: "Trainingsregeln & Punktesystem",
          rulesItems: [
            { num: "1", text: "Hohe Bedrohung", highlight: "Rot (+100 PTS / +2s, max. 60s)", result: "Höchste Priorität" },
            { num: "2", text: "Mittlere Bedrohung", highlight: "Gelb (+50 PTS / +2s)", result: "Punkte nur ohne sichtbares Rot; wird nach Timer zu Rot" },
            { num: "3", text: "Eigene Einheiten", highlight: "Grün (NICHT SCHIESSEN)", result: "Friendly Fire, Prioritätsfehler oder Fehlschuss: Combo-Reset (-1s)" },
            { num: "4", text: "Levelaufstieg", highlight: "+1 / 1400 PTS", result: "Dynamische Dichte & Tempo" }
          ],
          aboutTitle: "Über dieses Zielpriorisierungs-Training",
          aboutHeading: "Was ist Zielpriorisierung (Target Prioritization)?",
          aboutText: "Zielpriorisierung beschreibt die Fähigkeit, mehrere sichtbare Gegner nach ihrer unmittelbaren Gefährlichkeit zu gewichten und den tödlichsten Kontrahenten zuerst auszuschalten. Gleichzeitig erfordert dies Schusshemmung (Trigger-Disziplin), um nicht reflexartig auf Verbündete oder harmlose Attrappen zu feuern. Nach Logan und Cowan (1984) ist das Abbrechen einer vorbereiteten Bewegung ein eigener Prozess, der gegen den Start der Bewegung läuft. Dieser Drill übt das mit der Regel Rot vor Gelb und keinem Schuss auf Grün."
        }}
      />
      <DrillGuide guide={targetPrioritizationGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
