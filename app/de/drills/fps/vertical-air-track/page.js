import VerticalAirTrackClient from '@/app/drills/fps/vertical-air-track/VerticalAirTrackClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — de-DE (fps / vertical-air-track)
// PRIMARY DOMESTIC: "Vertikales Aim Training"   — High-intent core query
//                   "Y-Achse Aiming"             — Common DACH competitive FPS term
//                   "Vertikales Tracking"        — Technical smooth pursuit search
//                   "Luftziel Tracking"          — High conversion tactical query
//                   "Flugkurven Tracking FPS"    — Trajectory prediction phrase
// SECONDARY / LSI:
//                   "Apex Legends vertikales Zielen" — High demand game-specific term
//                   "Overwatch 2 Luftziele"          — Game-specific anti-air phrase
//                   "Aim Trainer kostenlos"          — High volume category query
//                   "Y-Achsen Mauskontrolle"         — Mechanical precision keyword
//                   "Smooth Pursuit Y-Achse"         — Scientific motor control term
// WINNER TITLE:     Vertikales Aim Training – Y-Achse Tracking | SkillDrills
// ============================================================

export const metadata = {
  title: "Vertikales Tracking: Y-Achse & Luftziele | SkillDrills",
  description: "Vertikales Tracking im Browser: Halte die Maustaste auf Luftziele, die hochschießen und in Parabeln fallen. Kostenloses Y-Achsen-Training für Apex und Overwatch 2.",
  keywords: [
    "vertikales Aim Training",
    "vertikales Tracking",
    "Y-Achse Aiming",
    "Luftziel Tracking",
    "Y-Achsen Mauskontrolle",
    "Apex Legends vertikales Zielen",
    "Overwatch 2 Luftziele",
    "Vertical Tracking Trainer",
    "Parabelflug Zielen",
    "Smooth Pursuit Y-Achse"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/vertical-air-track",
    languages: getAlternateLanguages('/drills/fps/vertical-air-track'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Vertikales Tracking: Y-Achse & Luftziele | SkillDrills",
    description: "Vertikales Tracking im Browser: Halte die Maustaste auf Luftziele, die hochschießen und in Parabeln fallen. Kostenloses Y-Achsen-Training für Apex und Overwatch 2.",
    url: "https://skilldrills.online/de/drills/fps/vertical-air-track",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Vertikales Tracking: Y-Achse & Luftziele | SkillDrills",
    description: "Vertikales Tracking im Browser: Halte die Maustaste auf Luftziele, die hochschießen und in Parabeln fallen. Kostenloses Y-Achsen-Training für Apex und Overwatch 2.",
  },
};

export default function VerticalAirTrackPageDe() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Drills", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Vertikales Aim Training", "item": "https://skilldrills.online/de/drills/fps/vertical-air-track" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Vertikales Tracking - Y-Achse & Luftziele",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Kostenloser Browser-Drill für vertikales Tracking mit Pointer Lock. Luftziele steigen auf, weichen aus und fallen in Parabeln; trainiert Y-Achsen-Tracking.",
    "genre": "FPS Training / Vertikales Tracking",
    "url": "https://skilldrills.online/de/drills/fps/vertical-air-track",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vertikales Tracking - Y-Achse & Luftziele",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "Pointer Lock API, JavaScript, HTML5 Canvas fähiger Webbrowser",
    "description": "Kostenloser Browser-Drill für vertikales Tracking mit Pointer Lock. Luftziele steigen auf, weichen aus und fallen in Parabeln; trainiert Y-Achsen-Tracking.",
    "url": "https://skilldrills.online/de/drills/fps/vertical-air-track"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Vertikales Tracking - Y-Achse & Luftziele",
    "url": "https://skilldrills.online/de/drills/fps/vertical-air-track",
    "description": "Kostenloser Browser-Drill für vertikales Tracking mit Pointer Lock. Luftziele steigen auf, weichen aus und fallen in Parabeln; trainiert Y-Achsen-Tracking.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Vertikales Tracking"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was versteht man unter vertikalem Aim Training auf der Y-Achse?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vertikales Aim Training isoliert die Auf- und Abwärtsbewegungen der Maus entlang der Y-Achse. Da die meisten Standard-Shooter primär horizontales Crosshair-Placement fordern, ist die motorische Koordination für vertikale Kurven oft unterentwickelt und bedarf gezielter Isolation."
        }
      },
      {
        "@type": "Question",
        "name": "Warum fällt vielen FPS-Spielern vertikales Tracking schwerer als horizontales?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Biomechanisch nutzt horizontales Tracking die natürliche Drehbewegung des Unterarms um den Ellenbogen oder das Handgelenk. Vertikale Mausbewegungen hingegen erfordern Fingerbeugung, Handgelenksextension oder das Verschieben des gesamten Unterarms gegen den Reibungswiderstand des Mauspads."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Vorteile bringt dieser Drill für Apex Legends Spieler?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Apex Legends nutzen Legenden wie Octane (Sprungkissen), Horizon (Gravitationslift) oder Pathfinder (Greifhaken) häufig vertikale Mobilität. Der Drill isoliert das Nachführen solcher parabolischen Flugkurven, damit du es gezielt wiederholen kannst."
        }
      },
      {
        "@type": "Question",
        "name": "Wie hilft das vertikale Tracking gegen Pharah und Echo in Overwatch 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flugziele wie Pharah oder Echo bewegen sich permanent im dreidimensionalen Raum oberhalb der normalen Sichtlinie. Der Drill übt kontinuierliches Tracking auf der Y-Achse, wie es Hitscan-Helden wie Cassidy oder Soldier: 76 gegen Flugziele brauchen. Hitboxen und Bewegungen aus dem Spiel werden nicht nachgebildet."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist Popcorn-Tracking und wie wird es simuliert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popcorn-Tracking bezeichnet das Nachführen von Zielen, die wie Maiskörner in einer Pfanne nach oben katapultiert werden und unter Schwerkrafteinfluss wieder herabfallen. In diesem Drill werden die Ziele vom unteren Rand hochgeschossen, bremsen am Scheitelpunkt ab und fallen beschleunigt zurück."
        }
      },
      {
        "@type": "Question",
        "name": "Sollte vertikales Zielen aus dem Handgelenk oder aus den Fingern erfolgen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für feinste Mikro-Anpassungen auf der Y-Achse eignen sich die Fingerglieder (Fingertip- oder Claw-Grip). Für größere vertikale Distanzen sollte der Unterarm gleichmäßig über das Pad gleiten, um Handgelenkskrämpfe zu vermeiden."
        }
      },
      {
        "@type": "Question",
        "name": "Hilft ein Gaming-Arm-Sleeve bei vertikalen Mausbewegungen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, ein Arm-Sleeve reduziert die Hautreibung auf Stoff- oder Glas-Mauspads drastisch. Das kann Ruckeln oder Hängenbleiben bei schnellen Abwärtszügen verringern."
        }
      },
      {
        "@type": "Question",
        "name": "Wie funktioniert das Punktesystem im Vertical Air-Track Drill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solange du die linke Maustaste hältst und das Fadenkreuz im Ziel ist, verliert es Lebenspunkte (100); bei 0 ist es zerstört. Jede Zerstörung bringt 100 Punkte plus Höhenbonus (ab 25 %/50 %/75 % Bildschirmhöhe +25/+50/+75), multipliziert mit Kombo- und Level-Faktor, und +2 Sekunden (maximal 60 s). Die Runde startet mit 45 s. Fällt ein Ziel unten aus dem Bild, verfällt die Kombo und es gibt -1 s (bei ausgeschalteter Timeout-Option springt es zurück). Kurz vom Ziel abzurutschen bricht die Kombo nicht, senkt aber die Tracking-Quote. Alle 1400 Punkte steigt das Level: mehr Schwerkraft und Ausweichmanöver, kleinere Ziele, ab Level 5 zwei Ziele gleichzeitig."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte ich vertikales Aiming trainieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine kurze, konzentrierte Trainingseinheit von 10 bis 15 Minuten vor deinen Wettkampf-Matches genügt. Vergleiche deine Tracking-Quote über mehrere Wochen auf demselben Setup."
        }
      },
      {
        "@type": "Question",
        "name": "Ist dieses vertikale Tracking-Training kostenlos und ohne Download nutzbar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, es läuft im PC-Browser ohne Download und ohne Anmeldung. Du brauchst eine Maus; beim Start wird der Zeiger gesperrt (Pointer Lock). Esc oder der Verlust des Pointer Locks beendet die Runde, reine Touch-Geräte werden nicht unterstützt."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung für vertikales Y-Achsen Aim Training",
    "description": "In 4 Schritten parabolische Flugbahnen meistern und vertikale Mauskontrolle perfektionieren.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mausempfindlichkeit anpassen und Pointer-Lock aktivieren",
        "text": "Stelle auf der /drills-Seite die globale Mausempfindlichkeit ein (1,00x = 30 cm/360) und klicke auf Start, um den Pointer Lock zu aktivieren.",
        "url": "https://skilldrills.online/de/drills/fps/vertical-air-track#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Aufstiegsgeschwindigkeit und Scheitelpunkt antizipieren",
        "text": "Verfolge das aufsteigende Ziel gleichmäßig und passe deine Tracking-Geschwindigkeit an, wenn das Ziel am Scheitelpunkt abbremst.",
        "url": "https://skilldrills.online/de/drills/fps/vertical-air-track#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Sanftes Abwärts-Tracking unter Gravitationsbeschleunigung",
        "text": "Ziehe die Maus flüssig nach unten, während das Ziel durch die Schwerkraft beschleunigt, ohne die Maus verkrampft auf das Pad zu drücken.",
        "url": "https://skilldrills.online/de/drills/fps/vertical-air-track#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Ziel vor Bodenkontakt zerstören und Fadenkreuz zentrieren",
        "text": "Eliminiere das Ziel rechtzeitig in der Luft, um den Höhenbonus zu sichern, und bringe das Fadenkreuz zügig in die neutrale Ausgangslage.",
        "url": "https://skilldrills.online/de/drills/fps/vertical-air-track#step-4"
      }
    ]
  };

  const verticalAirTrackGuide = {
    heading: "Vertikales Tracking: Y-Achse und Luftziele",
    intro: [
      "Dieser kostenlose Browser-Drill trainiert vertikales Tracking: Luftziele werden vom unteren Bildschirmrand hochgeschossen, weichen in der Luft mit Sprüngen, Seitwärts-Dashes oder Sturzflügen aus und fallen unter Schwerkraft zurück. Du hältst die linke Maustaste und führst das Fadenkreuz auf der Y-Achse nach, bis das Ziel zerstört ist. Gemessen wird der Zeitanteil, in dem das Fadenkreuz beim Feuern auf dem Ziel liegt. Passend als Warm-up für Luftziele in Apex Legends und Overwatch 2.",
      "Die neurologische Steuerung vertikaler Augenfolgebewegungen (Smooth Pursuit) unterscheidet sich fundamental von horizontalen Blickwechseln. Krauzlis (2004) beschreibt, dass Smooth Pursuit bis etwa 30°/s genau folgt, und Rashbass (1961) demonstrierte, dass kontinuierliches Tracking nicht durch Positionsfehler, sondern durch Geschwindigkeitsfehler (Retinal Slip) angetrieben wird. Deshalb zählt gleichmäßiges Mitführen mehr als ruckartiges Nachspringen.",
      "Zusätzlich verlangt das Abfangen fliegender Gegner das intuitive Verinnerlichen der Erdbeschleunigung (g = 9,81 m/s²). Land & McLeod (2000) zeigen, dass geübte Fänger eher vorhersagen, wo ein Ziel sein wird, und den Scheitelpunkt (Apex) antizipieren und ihre Augen-Hand-Koordination vorausschauend synchronisieren.",
      "Die Ziele haben auch seitliche Geschwindigkeit und Dashes, der Schwerpunkt liegt aber auf Aufstieg, Scheitelpunkt und Fall entlang der Y-Achse. Wer sonst vor allem horizontal trackt, kann damit gezielt die vertikale Komponente üben.",
      "Hinweis zur Messgenauigkeit: Sämtliche Messungen erfolgen clientseitig im Browser über die hochauflösende performance.now() API. Durch browserinterne Sicherheitsmechanismen gegen Timing-Angriffe und Bildwiederholraten (z. B. 16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz oder 4,1 ms bei 240 Hz) treten minimale Quantisierungsabweichungen auf. Nutze die Werte als persönlichen Fortschrittsindikator unter identischen Hardware-Bedingungen."
    ],
    benchmarks: {
      title: "Tracking-Quote: SkillDrills-Übungsstufen",
      headers: ["Übungsstufe", "Tracking-Quote", "Typisches Bild"],
      rows: [
        ["Stufe 5", "Mindestens 82%", "Flüssiger Übergang von Abbremsen am Scheitelpunkt zu beschleunigtem Fall; Ausweichmanöver werfen kaum ab"],
        ["Stufe 4", "70% – 82%", "Stabile Y-Achsen-Führung; kurzes Wackeln direkt nach einem Ausweichmanöver"],
        ["Stufe 3", "56% – 70%", "Berechenbare Parabeln sitzen; seitliche Dashes bringen Verzögerung"],
        ["Stufe 2", "40% – 56%", "Fadenkreuz fällt im beschleunigten Sinkflug zurück; ruckartige Überkorrekturen"],
        ["Stufe 1", "Unter 40%", "Verkrampftes Handgelenk; Ziel geht nach dem Scheitelpunkt oft verloren"]
      ],
      note: "Tracking-Quote = Zeitanteil bei gehaltener Maustaste, in dem das Fadenkreuz auf einem Ziel liegt. Eigene Übungsstufen von SkillDrills, keine wissenschaftlichen Normwerte, Nutzerstatistiken oder Spielränge."
    },
    techniques: {
      title: "Neuronale Techniken für maximale Y-Achsen-Präzision",
      items: [
        {
          name: "Entkoppelte Fingerbeugung für Mikro-Korrekturen",
          desc: "Vermeide es, den gesamten Arm bei winzigen Höhenänderungen anzuspannen. Nutze das Beugen und Strecken der Fingerglieder für feine Justierungen entlang der Y-Achse (Fitts, 1954).",
          tips: "Ziehe die Maus mit den Fingerspitzen sanft nach hinten und drücke sie nach vorne, ohne das Handgelenk zu verdrehen."
        },
        {
          name: "Geschwindigkeitssynchronisation am Scheitelpunkt",
          desc: "Am höchsten Punkt der Flugbahn sinkt die Vertikalgeschwindigkeit kurzzeitig gegen null (Rashbass, 1961; Land & McLeod, 2000). Verlangsame deine Handbewegung rechtzeitig vor dem Stillstand.",
          tips: "Der Scheitelpunkt bietet das größte Trefferfenster. Halte kurz inne, bevor der beschleunigte Fall beginnt."
        },
        {
          name: "Blickführung unterhalb des Ziels im Sinkflug",
          desc: "Im Sturzflug beschleunigt das Ziel kontinuierlich durch die Schwerkraft. Richte deinen visuellen Fokus auf die Unterkante des Ziels, um der Bewegung voraus zu sein.",
          tips: "Schau nicht auf die Oberseite des fallenden Gegners; führe das Fadenkreuz von unten nach oben nach."
        },
        {
          name: "Reduktion der Unterarmreibung auf dem Mauspad",
          desc: "Feuchte Haut oder hohe Reibung auf Stoffpads blockieren vertikale Zugbewegungen und erzeugen ruckartiges Tracking.",
          tips: "Ein Kompressions-Sleeve oder ein glattes Hybridpad sorgen für gleichmäßigen Gleitwiderstand auf der Y-Achse."
        }
      ]
    },
    steps: [
      "Stelle auf der /drills-Seite die globale Mausempfindlichkeit ein und klicke auf Start, um den Pointer Lock zu aktivieren.",
      "Platziere das Fadenkreuz im unteren Bildschirmbereich nahe der Auswurfzone der Flugziele.",
      "Führe die Maus beim Hochschießen des Ziels mit gleichmäßiger Fingerstreckung flüssig nach oben.",
      "Atme am Scheitelpunkt kurz aus, nutze das temporäre Geschwindigkeitsminimum und feuere kontinuierlich.",
      "Ziehe die Maus im Sinkflug beschleunigt nach unten und zerstöre das Ziel, bevor es unten aus dem Bild fällt."
    ],
    audience: "FPS-Gamer in Apex Legends, Overwatch 2, Halo Infinite und schnellen Arena-Shootern, die vertikales Tracking gegen fliegende und springende Gegner gezielt im Browser üben wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'fitts1954', 'rashbass1961', 'land2000'),
    related: [
      { href: "/de/drills/fps/strafe-tracking", label: "Strafe Tracking Aim Trainer" },
      { href: "/de/drills/fps/pro-smooth-pursuit", label: "Smooth Pursuit Aim Trainer" },
      { href: "/de/drills/fps/target-acquisition", label: "Target Acquisition Training" },
      { href: "/de/drills/reaction-speed/reaction-game", label: "Reaktionstest Spiel" },
      { href: "/de/drills/motor/hand-eye-coordination/aim-trainer", label: "Hand-Auge Aim Trainer" }
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
      <VerticalAirTrackClient
        copy={{
          h1Keyword: "Vertikales Tracking",
          h1Suffix: " – Y-Achse & Luftziele",
          statScore: "Punkte",
          statTime: "Restzeit",
          statAccuracy: "Trefferquote",
          statBestScore: "Bestwert",
          statTargetsDestroyed: "Ziele Zerstört",
          statMaxCombo: "Max Combo",
          statPeakLevel: "Höchste Stufe",
          startTitle: "Vertical Air-Track",
          startSubtitle: "Hardware Raw Input • Dynamische Stufen-Progression",
          startButtonText: "Drill Starten",
          playAgainText: "Nochmal Spielen",
          shareText: "Ergebnis Teilen",
          exitText: "Beenden",
          stageCaption: "Vertikales Tracking: Halte die linke Maustaste auf den Luftzielen, bis ihre Lebenspunkte leer sind, bevor sie unten aus dem Bild fallen.",
          rulesTitle: "Drill-Anleitung & Punktesystem",
          aboutTitle: "Über den Vertical Air-Track Trainer",
          rulesItems: [
            {
              num: "1",
              text: "Luftziel verfolgen",
              highlight: "+100 Pkt / +2s bei Zerstörung (max. 60s)",
              result: "Parabolische Flugbahn stetig nachführen"
            },
            {
              num: "2",
              text: "Höhen-Bonus",
              highlight: "Bis zu +75 Bonus-Punkte",
              result: "Ziele nahe am Scheitelpunkt eliminieren"
            },
            {
              num: "3",
              text: "Straf-Regel",
              highlight: "Combo-Reset / -1s",
              result: "Wenn ein Ziel unten aus dem Bild fällt (Timeout-Option)"
            },
            {
              num: "4",
              text: "Stufen-Progression",
              highlight: "+1 Stufe je 1400 Punkte",
              result: "Mehr Gravitation & Ausweichen, kleinere Ziele, ab Level 5 zwei Ziele"
            }
          ]
        }}
      />
      <DrillGuide guide={verticalAirTrackGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
