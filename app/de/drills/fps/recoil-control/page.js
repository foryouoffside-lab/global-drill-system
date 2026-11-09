import RecoilControlClient from '@/app/drills/fps/recoil-control/RecoilControlClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING (DACH)
// Primary query: "recoil control lernen" (Core German tactical shooter query)
//                "rueckstosskontrolle fps" (High domestic measurement intent)
// Secondary:    "spray pattern cs2", "maus nachuntenziehen training", "aim trainer recoil",
//               "rueckstoss kontrollieren", "waffen spray ueben", "spray kontrolle valorant",
//               "recoil pattern lernen", "maus kontrolle shooter"
// LSI / Domain:  "vertikale mauskompensation", "horizontale driftkorrektur", "feuerstoss-kompensation",
//               "trefferdichte", "isometrische unterarmkraft", "kinaesthetische rueckkopplung"
// Authentic Domain Terms: Recoil Control, Rückstoßkontrolle, Spray Pattern Kompensation,
//                         Trefferdichte (Shot Grouping), Abzugskontrolle (Trigger Discipline)
// ============================================================

export const metadata = {
  title: "Rückstoßkontrolle lernen | FPS Spray Control | SkillDrills",
  description: "Kostenloses Recoil-Control-Training im Browser: Lerne Spray Patterns und Rückstoßkompensation für CS2, Valorant und Apex.",
  keywords: [
    "Rückstoßkontrolle",
    "Recoil Control lernen",
    "Spray kontrollieren",
    "Spray Pattern",
    "Rückstoßkontrolle FPS",
    "Recoil Training",
    "CS2 Recoil Control",
    "Valorant Recoil",
    "Spray Control lernen",
    "Recoil Trainer online",
    "vertikale Rückstoßkontrolle",
    "horizontale Rückstoßkontrolle"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/recoil-control",
    languages: getAlternateLanguages('/drills/fps/recoil-control'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Rückstoßkontrolle lernen | FPS Spray Control | SkillDrills",
    description: "Kostenloses Recoil-Control-Training im Browser: Lerne Spray Patterns und Rückstoßkompensation für CS2, Valorant und Apex.",
    url: "https://skilldrills.online/de/drills/fps/recoil-control",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Rückstoßkontrolle lernen | FPS Spray Control | SkillDrills",
    description: "Kostenloses Recoil-Control-Training im Browser: Lerne Spray Patterns und Rückstoßkompensation für CS2, Valorant und Apex.",
  },
};

export default function RecoilControlDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Aim Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Recoil Control", "item": "https://skilldrills.online/de/drills/fps/recoil-control" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Recoil Control Trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenloser Browser-Trainer zur Beherrschung von Waffen-Rückstoß, vertikaler Mauskompensation und Spray-Mustern.",
    "genre": "FPS Training / Recoil Control",
    "url": "https://skilldrills.online/de/drills/fps/recoil-control",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Recoil Control Trainer",
    "url": "https://skilldrills.online/de/drills/fps/recoil-control",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Benötigt JavaScript und HTML5 Canvas Unterstützung",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Kostenloser Browser-Trainer zur Beherrschung von Waffen-Rückstoß, vertikaler Mauskompensation und Spray-Mustern."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Recoil Control Trainer",
    "url": "https://skilldrills.online/de/drills/fps/recoil-control",
    "description": "Kostenloser Browser-Trainer zur Beherrschung von Waffen-Rückstoß, vertikaler Mauskompensation und Spray-Mustern.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Recoil Control", "Spray Pattern"],
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
        "name": "Was versteht man unter Recoil Control (Rückstoßkontrolle) im FPS-Gaming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Recoil Control ist die kontinuierliche manuelle Gegenbewegung der Maus gegen den programmierten Waffenrückstoß, um die Geschosse auch bei Dauerfeuer präzise in einem engen Zielbereich zu bündeln."
        }
      },
      {
        "@type": "Question",
        "name": "Warum steigen automatische Waffen nach oben und wie gleicht man das aus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spielentwickler simulieren den physikalischen Hochschlag realer Feuerwaffen. Man kompensiert dies, indem man die Maus unmittelbar nach dem ersten Schuss mit konstanter, fein dosierter Geschwindigkeit nach unten zieht."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen vertikalem Rückstoß und horizontalem Spray-Bloom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der vertikale Rückstoß folgt meist einem deterministischen Anstieg, während der horizontale Bloom (Streuung) oft pseudozufällige Schwankungen aufweist, die eine reaktive Sichtkorrektur erfordern."
        }
      },
      {
        "@type": "Question",
        "name": "Wie trainiert man die ersten 5 bis 8 Schüsse eines automatischen Feuerstoßes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die ersten Schüsse zeigen die linearste Aufwärtsbewegung. Trainiere das exakte Einrasten der Zughandlung direkt beim Klick, um den Gegner noch vor dem Einsetzen horizontaler Streuung auszuschalten."
        }
      },
      {
        "@type": "Question",
        "name": "Sollte man für Recoil Control eher das Handgelenk oder den Unterarm nutzen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei mittlerer bis niedriger Mausempfindlichkeit zieht der Unterarm die Maus gleichmäßig nach unten, während das Handgelenk und die Finger feine horizontale Abweichungen korrigieren."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Rolle spielt das Mauspad (Gleit- vs. Bremsreibung) beim Spray-Control?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Mauspad mit spürbarer dynamischer Reibung (Control Pad) erleichtert gleichmäßige, langsame Zugbewegungen, da es ruckartige Mikrosprünge durch Handzittern dämpft."
        }
      },
      {
        "@type": "Question",
        "name": "Wie unterscheidet sich das Recoil-Verhalten zwischen CS2, Valorant und Apex Legends?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CS2 nutzt feste, reproduzierbare Spray-Muster. Valorant besitzt ab Kugel 7 eine zufällige Rechts-Links-Auslenkung. Apex Legends erfordert kontinuierliches Tracking bei relativ sanfter vertikaler Steigung."
        }
      },
      {
        "@type": "Question",
        "name": "Was versteht man unter Spray Transfer (Zielwechsel während des Dauerfeuers)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spray Transfer ist die fortgeschrittene Technik, bei anhaltendem Dauerfeuer das Fadenkreuz auf einen zweiten Gegner zu ziehen, während man den aktuellen Fortschritt im Spray-Muster beibehält."
        }
      },
      {
        "@type": "Question",
        "name": "Warum führt krampfhaftes Festhalten der Maus zu schlechterem Recoil Control?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Übermäßige Muskelanspannung blockiert die Propriozeption und Sehnenelastizität (Schmidt et al., 1979), was zu ruckartigen Korrekturen und vorzeitiger Ermüdung führt."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert es, bis ein Waffen-Spray-Pattern im Muskelgedächtnis verankert ist?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dafür gibt es keinen festen Zeitraum, er hängt von Ausgangsniveau, Sensitivität und Trainingsmenge ab. Kurze, regelmäßige Einheiten (z. B. 10–15 Minuten vor dem Spielen) sind meist sinnvoller als seltene lange Sessions. Vergleiche deine Magazin-Trefferquote über mehrere Wochen auf demselben Setup."
        }
      },
      {
        "@type": "Question",
        "name": "Welches Spray Pattern und welche Regeln nutzt dieses Recoil-Control-Training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein einziges AK-47-artiges 30-Schuss-Muster: etwa die ersten 10 Schüsse steigen vertikal, danach pendelt der Spray nach links und rechts. Es ist keine exakte Kopie einer Waffe aus einem bestimmten Spiel. Gedrückte linke Maustaste feuert alle 120 ms (500 Schuss/min); Loslassen setzt das Muster zurück. Nach 30 Schuss wird automatisch 1,2 s nachgeladen. Kopf 100, Brust 40, Gliedmaßen 20 Punkte, multipliziert mit Kombo- und Level-Faktor; ein Fehlschuss setzt die Kombo zurück. Die Startzeit beträgt 45 s, Treffer verlängern sie nicht. Alle 1400 Punkte steigt das Level, Zieltempo und Rückstoß nehmen zu. Gespielt wird mit Maus und Pointer Lock; Esc beendet die Runde, reine Touch-Geräte werden nicht unterstützt."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung: Recoil Control in 4 Phasen meistern",
    "description": "Wissenschaftlich fundierte Anleitung zur Perfektionierung von Spray-Kompensation und Abzugskontrolle.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Identifikation des Musters",
        "text": "Feuere eine unkontrollierte Salve an eine Wand, um den spezifischen Verlauf (Höhe, Rechts-Links-Kurven) der Waffe visuell zu analysieren."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Initiales Herunterziehen",
        "text": "Initiiere simultan mit dem ersten Mausklick eine gleichmäßige Zugbewegung nach unten, um die ersten 5 bis 8 Schüsse auf Kopfhöhe zu fixieren."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Horizontale Kurvenkompensation",
        "text": "Sobald das Muster nach rechts oder links abdriftet, lenke die Maus mit feinen Fingerbewegungen exakt entgegengesetzt."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Automatisierung und Reset",
        "text": "Beende das Dauerfeuer nach erfolgreichem Kill sofort, lasse das Fadenkreuz zentrieren und bereite den nächsten Feuerstoß vor."
      }
    ]
  };

  const recoilGuideDe = {
    heading: "Leitfaden für Rückstoßkontrolle und Spray Control",
    subtitle: "Wissenschaftliche Trainingsmethodik für ballistische Zugkompensation, Muskelgedächtnis und maximale Trefferdichte bei Dauerfeuer",
    intro: [
      "Mit diesem kostenlosen Browser-Drill kannst du Rückstoßkontrolle lernen: Du hältst die linke Maustaste auf ein seitlich ausweichendes Ziel gedrückt und gleichst ein AK-47-artiges 30-Schuss-Spray Pattern mit Abwärtszug und seitlicher Gegenlenkung aus. Liegt die Trefferquote eines Magazins unter 40 %, verfällt die Kombo. Spray Control und Recoil Control für CS2, VALORANT, Apex Legends und PUBG als kurzes Warm-up.",
      "Das motorische Lernframework zur Beherrschung schneller Rückstoßkompensation basiert auf der Theorie des Generalisierten Motorischen Programms (GMP) von Richard A. Schmidt und Timothy D. Lee (Schmidt & Lee, 2011). Weil ein festes Spray Pattern sich jedes Mal gleich verhält, muss nicht jeder Einschlag einzeln visuell korrigiert werden: Der Abwärtszug kann als gelerntes Open-Loop-Bewegungsprogramm mit festen relativen Timing- und Kraftparametern beginnen.",
      "Dieser Bewegungsablauf folgt Robert S. Woodworths (1899) klassischem Zwei-Komponenten-Modell des Zielens sowie David E. Meyers (1988) optimiertem Submovement-Modell: Auf eine initiale, ballistische Abwärtszugbewegung der Maus (Open-Loop-Phase) folgen feinmotorische Korrekturbewegungen (Submovements), um horizontale Abweichungen und dynamische Bewegungen des Ziels in Echtzeit auszugleichen.",
      "Die motorische Treffsicherheit unterliegt Fitts' Gesetz (Fitts, 1954) sowie der Impuls-Variabilitäts-Theorie von Schmidt et al. (1979): Mit steigender Geschwindigkeit und Kraftanstrengung beim Herunterziehen der Maus nimmt die neuromuskuläre Streuung logarithmisch zu. Deshalb lohnt es sich, eine gleichmäßige, ruhige Zuggeschwindigkeit zu üben statt ruckartig zu ziehen.",
      "Messmethodik & Hardware-Latenzen: Jede Mauseingabe wird lokal über die Schnittstelle performance.now() des Browsers horodatiert – es werden keinerlei Daten an externe Server übertragen. Browser-Timer werden zum Schutz vor Spectre-Angriffen meist auf ca. 1 ms gerundet, während Monitore die visuelle Darstellung an ihre Bildwiederholrate koppeln (ca. 16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz) (Woods et al., 2015). Die USB-Abfragerate der Maus trägt ca. 8 ms bei 125 Hz gegenüber 1 ms bei 1000 Hz bei. Betrachte Unterschiede von unter 5 ms als technisches Messrauschen und vergleiche deine Resultate stets auf demselben Hardware-Setup."
    ],
    benchmarks: {
      title: "Magazin-Trefferquote: SkillDrills-Übungsstufen",
      headers: ["Übungsstufe", "Trefferquote pro Magazin", "Typisches Bild"],
      rows: [
        ["Stufe 1", "< 40 %", "Unter der Magazin-Disziplin-Grenze; Abwärtszug zu spät oder ungleichmäßig, Kombo verfällt"],
        ["Stufe 2", "40 – 55 %", "Die ersten Schüsse sitzen, die seitliche Pendelbewegung wird kaum ausgeglichen"],
        ["Stufe 3", "55 – 70 %", "Sauberer vertikaler Zug, kleine Überkorrekturen beim Richtungswechsel"],
        ["Stufe 4", "70 – 85 %", "Gute horizontale Gegenlenkung auch bei schnellerem Ziel"],
        ["Stufe 5", "> 85 %", "Fast ganze Magazine im Ziel, auch auf höheren Levels"]
      ],
      note: "Eigene Übungsstufen von SkillDrills, keine wissenschaftlichen Normwerte, Nutzerstatistiken oder Spielränge. Trefferquote = Treffer ÷ abgefeuerte Schüsse."
    },
    techniques: {
      title: "Waffenspezifische Rückstoß-Kalibrierung nach Spiel",
      items: [
        {
          name: "CS2 AK-47 & M4A1-S Spray-Muster",
          desc: "Schüsse 1–5: Stark nach unten ziehen. Schüsse 6–9: Leicht nach links unten halten. Schüsse 10–20: Sanft nach rechts driften.",
          tips: "Kombiniere die Abwärtsbewegung mit konstanter Schulterstabilisierung und lockeren Fingern."
        },
        {
          name: "Valorant Vandal & Phantom Kontrolle",
          desc: "Schüsse 1–7: Linear vertikal nach unten. Ab Schuss 8: Horizontales Zufalls-Wackeln — achte auf die Mündungsausrichtung.",
          tips: "In Valorant sind kurze 3- bis 5-Schuss-Bursts meist effizienter als das Ausfeuern voller Magazine."
        },
        {
          name: "Apex Legends R-99 & Flatline Tracking",
          desc: "Hohe Feuerrate bei ständiger Gegnerbewegung. Erfordert simultanes horizontales Tracking bei kontinuierlicher Abwärtsspannung.",
          tips: "Nutze ein Hybrid-Mauspad, um weiche Richtungswechsel ohne Haftreibungswiderstand zu ermöglichen."
        },
        {
          name: "Call of Duty Warzone Full-Auto Sustained Fire",
          desc: "Hohe vertikale Anfangssteigung gefolgt von optischer Waffenunruhe (Visual Recoil).",
          tips: "Passe die vertikale Sensitivitäts-Multiplikator-Einstellung im Spiel an, falls du das Pad überstreckst."
        }
      ]
    },
    steps: [
      "Stelle auf der /drills-Seite die globale Mausempfindlichkeit ein und klicke auf Start; nach dem Countdown wird der Zeiger gesperrt (Pointer Lock).",
      "Halte die linke Maustaste auf das seitlich ausweichende Ziel gedrückt.",
      "Ziehe die Maus simultan mit dem einsetzenden Rückstoß gleichmäßig und feinfühlig nach unten.",
      "Gleiche horizontale Seitwärtsbewegungen mit minimalen Mikrokorrekturen aus.",
      "Prüfe auf der Ergebniskarte Präzision, Headshots, Max Combo und erreichtes Level."
    ],
    audience: "PC-Spieler in CS2, Valorant, Apex Legends, PUBG und Call of Duty, die Spray Control bei Dauerfeuer im Browser üben wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'schmidtLee2011', 'schmidt1979', 'woodworth1899'),
    related: [
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training Online" },
      { href: "/de/drills/motor/hand-eye-coordination/aim-trainer", label: "Allgemeiner Aim Trainer Online" },
      { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Reaktionszeit Test Online" },
      { href: "/de/drills/motor/movement-speed/rapid-tapping", label: "Klick-Geschwindigkeitstest (CPS)" }
    ]
  };

  const copyDe = {
    h1Keyword: "Rückstoßkontrolle lernen",
    h1Suffix: " – FPS Spray Control",
    caption: "Rückstoßkontrolle lernen im Browser: Das Spray Pattern ist fest, also ziehst du die Maus gleich mit dem ersten Schuss gleichmäßig nach unten. Weil motorische Streuung mit der Kraft steigt (Schmidt et al., 1979), ist ein ruhiger Zug besser als ein ruckartiger.",
    statScore: "Punkte",
    statTime: "Verbleibende Zeit",
    statAccuracy: "Präzision",
    statBest: "Highscore",
    statAmmo: "Munition",
    statReloading: "Nachladen...",
    pausedTitle: "Pausiert",
    pausedPrompt: "Klicke in den Bildschirm, um die Mauszeiger-Sperre zu reaktivieren und fortzufahren.",
    startTitle: "Recoil Control lernen",
    startSubtitle: "AK-47-artiges Spray Pattern & Zugkompensation • Endlose Levelprogression",
    startButtonText: "Training starten",
    getReady: "Bereithalten",
    statHeadshots: "Headshots",
    statMaxCombo: "Max Combo",
    statPeakLevel: "Erreichtes Level",
    playAgainText: "Erneut versuchen",
    shareText: "Ergebnis teilen",
    exitText: "Beenden",
    bottomCaption: "Ziehe die Maus synchron zum einsetzenden Waffenrückstoß gleichmäßig nach unten, um die Schüsse präzise im Zielzentrum zu bündeln.",
    rulesTitle: "Trainingsregeln & Punktesystem",
    rulesItems: [
      { num: "1", text: "Kopftreffer-Präzision", highlight: "+100 PKT (kein Zeitbonus)", result: "×Kombo-Faktor" },
      { num: "2", text: "Brust- & Beintreffer", highlight: "+40 / +20 PKT", result: "Hält Kombo-Serie" },
      { num: "3", text: "Level-Progression", highlight: "+1 Level / 1400 PKT", result: "Tempo & Rückstoß steigen" },
      { num: "4", text: "Fehlschuss / Magazin-Disziplin", highlight: "<40% Treffer-Strafe", result: "Setzt Kombo zurück" }
    ],
    aboutTitle: "Über Rückstoßkontrolle und Spray Control",
    whyMattersTitle: "Warum Rückstoßkontrolle über den Duellausgang entscheidet",
    whyMattersLead: "Rückstoßkontrolle ist ein gelerntes Bewegungsmuster. Weil das Spray Pattern fest ist, kannst du die Ausgleichsbewegung starten, ohne jeden Einschlag abzuwarten.",
    aboutIntro: [
      "Dieser Trainer schult die feindosierte Muskulatur deines Unterarms und deiner Finger, um dem Aufsteigen der Waffe bei Dauerfeuer punktgenau entgegenzuwirken. Während Einzelschüsse primär reaktive Flicks erfordern, verlangt Recoil Control eine kontrollierte, langanhaltende Zugbewegung.",
      "Durch das wiederholte Einprägen der vertikalen Anfangsbremsung und der seitlichen Gegenlenkung übst du die Spray Control, die du in CS2, Valorant und Apex Legends brauchst."
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "Zielgruppe", text: "FPS-Spieler in CS2, Valorant, Apex Legends und CoD, die ihre Dauerfeuer-Präzision und Spray Transfers verbessern wollen." },
      { iconBg: "bg-red-600", title: "Schüsse 1–8 sind entscheidend", text: "Im Muster dieses Drills steigen etwa die ersten 10 Schüsse vertikal. Diesen Abschnitt gleichmäßig auszugleichen ist das erste Ziel." },
      { iconBg: "bg-orange-600", title: "Abzugskontrolle wahren", text: "Verhindert sinnloses Verballern kompletter Magazine. Gezieltes Absetzen und Zurücksetzen des Musters spart Munition und Trefferzeit." }
    ],
    aboutSections: [
      {
        title: "Der Einfluss mechanischer Rückstoßdämpfung auf die Siegquote",
        paragraphs: [
          "In Taktik-Shootern wie CS2 und Valorant gewinnt derjenige das Gefecht, der zuerst zwei bis drei Treffer ins Ziel bringt. Wer den Rückstoß instinktiv kompensiert, kann sich voll auf die gegnerische Bewegung und das Positioning konzentrieren.",
          "Eine gleichmäßige Abwärtsführung verhindert übermäßiges Hochschlagen und reduziert das vertikale Streufeld auf ein Minimum."
        ]
      }
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <RecoilControlClient copy={copyDe} />

      <DrillGuide guide={recoilGuideDe} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
