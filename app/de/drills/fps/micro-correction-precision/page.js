import MicroCorrectionClient from '@/app/drills/fps/micro-correction-precision/MicroCorrectionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING (DACH)
// Primary queries: "Mikrokorrektur Aiming" (Core technical micro-adjustment query in DACH)
//                  "Micro Adjustment FPS" (Widespread technical shooter term in DE/AT/CH)
// Secondary:       "Headshot Feinjustierung", "Maus Mikrokorrektur CS2", "Flick Shot Feinkorrektur",
//                  "Aim Präzision verbessern", "Mikro Flick Training", "Maus Bremskontrolle",
//                  "Valorant Headshot Training", "Mauspad Reibung Kontrolle"
// Domain / LSI:    "Zwei-Komponenten-Modell" (Woodworth 1899, Meyer 1988), "Fitts Gesetz" (Index of Difficulty),
//                  "Endphasen-Verzögerung" (Terminal Deceleration), "Mikrosakkaden" (Martinez-Conde 2004, Rolfs 2009),
//                  "Foveale Zielerfassung", "Fingertip-Feinjustierung", "Target Confirmation"
// Authentic Domain Terms: Mikrokorrektur, Micro Adjustment, Bremskontrolle (Deceleration Braking),
//                         Feinjustierung, Zielbestätigung (Target Confirmation)
// ============================================================

export const metadata = {
  title: "Mikrokorrekturen trainieren: Headshot-Präzision | SkillDrills",
  description: "Mikrokorrekturen trainieren: Nach dem Treffer aufs Ankerziel erscheint daneben ein kleines Mikroziel. Je näher am Zentrum, desto mehr Punkte. Valorant und CS2.",
  keywords: [
    "Mikrokorrekturen",
    "Mikrokorrekturen trainieren",
    "Micro Flicks",
    "Mikrokorrektur Aiming",
    "Micro Adjustment FPS",
    "Headshot Feinjustierung",
    "Maus Mikrokorrektur CS2",
    "Flick-Shot Feinkorrektur",
    "Aim Präzision verbessern",
    "Maus Bremskontrolle",
    "Valorant Headshot Training",
    "Mauspad Gleitkontrolle",
    "Sub-Pixel Aiming Deutsch",
    "Taktischer Shooter Präzision"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/micro-correction-precision",
    languages: getAlternateLanguages('/drills/fps/micro-correction-precision'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Mikrokorrekturen trainieren: Headshot-Präzision | SkillDrills",
    description: "Mikrokorrekturen trainieren: Nach dem Treffer aufs Ankerziel erscheint daneben ein kleines Mikroziel. Je näher am Zentrum, desto mehr Punkte. Valorant und CS2.",
    url: "https://skilldrills.online/de/drills/fps/micro-correction-precision",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Mikrokorrekturen trainieren: Headshot-Präzision | SkillDrills",
    description: "Mikrokorrekturen trainieren: Nach dem Treffer aufs Ankerziel erscheint daneben ein kleines Mikroziel. Je näher am Zentrum, desto mehr Punkte. Valorant und CS2.",
  },
};

export default function MicroCorrectionDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Aim Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Mikrokorrekturen trainieren", "item": "https://skilldrills.online/de/drills/fps/micro-correction-precision" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Fine_motor_skill"],
    "name": "Mikrokorrekturen trainieren - Headshot-Präzision",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mikrokorrekturen trainieren - Headshot-Präzision",
    "url": "https://skilldrills.online/de/drills/fps/micro-correction-precision",
    "applicationCategory": "Trainer",
    "browserRequirements": "Requires Pointer Lock API, modern web browser, 60Hz+ monitor recommended"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Mikrokorrekturen trainieren - Headshot-Präzision",
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
        "name": "Was versteht man unter 'Bremskontrolle' (Terminal Deceleration) beim Zielen in FPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bremskontrolle beschreibt die neuromuskuläre Fähigkeit, eine schnelle ballistische Mausbewegung kurz vor dem Zielpunkt gezielt abzubremsen. Dies geschieht durch kontrollierten Gegendruck der Fingermuskulatur und gezielte Nutzung der Mauspad-Reibung, um ein Überschießen (Overshoot) der gegnerischen Hitbox zu verhindern."
        }
      },
      {
        "@type": "Question",
        "name": "Warum verfehlt der erste schnelle Flick oft knapp den Kopf des Gegners (Overflick)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Initiale Flickbewegungen erfolgen rein ballistisch (Open-Loop), da das visuelle Feedbacksystem des Menschen etwa 120 bis 160 ms benötigt, um Korrekturen vorzunehmen. Ist die eDPI zu hoch oder die Antagonisten-Muskulatur der Finger noch nicht optimal eingespielt, überwindet die Trägheit der Hand die Zielbremse, was zu einem knappen Vorbeischießen führt."
        }
      },
      {
        "@type": "Question",
        "name": "Wie beschreibt das Zwei-Komponenten-Modell (Woodworth & Meyer) die Mikrokorrektur?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bereits 1899 stellte Robert S. Woodworth fest, dass gezielte menschliche Bewegungen in zwei Phasen ablaufen: eine schnelle Anfangsphase zur groben Raumüberbrückung und eine finale, visuell geführte Feinkorrekturphase (Closed-Loop). Meyer et al. (1988) wiesen mathematisch nach, dass die finale Mikrokorrektur über den eigentlichen Treffererfolg entscheidet."
        }
      },
      {
        "@type": "Question",
        "name": "Wie trainiert man die Feinjustierung für Valorant und CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mit einer sauberen Zweiteilung: Man führt den ersten groben Flick mit Unterarm oder Handgelenk aus, stoppt die Bewegung über das Mauspad ab und korrigiert die restlichen wenigen Pixel mit Fingern und Handgelenk. In diesem Drill erscheint das Mikroziel nach dem Ankertreffer 55 bis 90 px entfernt (mit steigendem Level bis 145 px)."
        }
      },
      {
        "@type": "Question",
        "name": "Was versteht man unter 'Target Confirmation' (Zielbestätigung) vor dem Schuss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Target Confirmation bezeichnet die bewusste blitzschnelle visuelle Verifizierung, dass das Fadenkreuz tatsächlich zentriert auf dem Kopfziel ruht, bevor der Klickimpuls ausgelöst wird (Rolfs, 2009). Dieses Prinzip verhindert hastige Fehlschüsse und Recoil-Verschwendung."
        }
      },
      {
        "@type": "Question",
        "name": "Verbessert regelmäßiges Mikro-Flick-Training die Headshot-Trefferquote messbar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es kann helfen. Der erste Flick landet selten exakt auf dem Kopf, und dieser Drill wiederholt genau die Korrektur danach. Wie stark sich das im Spiel auswirkt, hängt von Person und Trainingsumfang ab und ist nicht garantiert."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Rolle spielen Bildwiederholfrequenz (Hz) und Maus-Polling-Rate bei Mikrobewegungen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine hohe Bildwiederholfrequenz (144 Hz, 240 Hz oder 360 Hz) verkürzt den Bildabstand auf 4 bis 7 ms und eliminiert Bewegungsunschärfe. Eine Maus-Polling-Rate von 1000 Hz oder höher liefert lückenlose Mikrobewegungssignale, sodass selbst 1-Pixel-Korrekturen verzögerungsfrei umgesetzt werden."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft und wie lange sollte man Mikrokorrekturen trainieren, um Überlastung zu vermeiden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tägliche Trainingseinheiten von 15 bis 20 Minuten genügen vollkommen. Da Mikrobewegungen höchste neuromuskuläre Konzentration der kleinen Hand- und Fingermuskeln erfordern, führt Übermüdung rasch zu fehlerhaftem motorischem Lernen."
        }
      },
      {
        "@type": "Question",
        "name": "Welcher Mausgriff (Fingertip, Claw, Palm) eignet sich am besten für feine Korrekturen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fingertip-Grip und entspannter Claw-Grip bieten die größte Bewegungsfreiheit, da die Fingergelenke den Mauskörper vertikal und horizontal um wenige Millimeter verschieben können. Ein reiner Palm-Grip blockiert diese Fingerbewegung meist und zwingt zu unpräziseren Handgelenksbewegungen."
        }
      },
      {
        "@type": "Question",
        "name": "Warum führen Fehlklicks oder Zeitüberschreitungen in diesem Trainer zum Combo-Reset?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Combo-Reset belohnt Schussdisziplin statt Schnellfeuer. Ein Fehlklick auf Anker- oder Mikroziel oder ein abgelaufenes Ziel setzt die Combo auf 0 und kostet 1 Sekunde. Die Combo steigt nur bei Mikrotreffern, der Combo-Multiplikator geht bis 3,0×."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange dauert ein Durchgang und wie werden Punkte berechnet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Durchgang startet mit 45 Sekunden. Jeder Anker- und jeder Mikrotreffer gibt +1 Sekunde (maximal 60 Sekunden), bei 0 endet der Durchgang. Ein Ankertreffer bringt 10 Punkte, ein Mikrotreffer je nach Nähe zum Zentrum 100 bis 150 Punkte, multipliziert mit Combo- und Level-Multiplikator. Alle 1.400 Punkte steigt das Level um 1, ohne Obergrenze; die Ziele werden kleiner und ihre Lebensdauer (Start 1,8 s) kürzer."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Mikrokorrektur & Bremskontrolle in 4 Trainingsschritten",
    "description": "Strukturierte Anleitung zur Beherrschung von Terminal Deceleration und Fingerkuppen-Feinkorrektur im FPS-Aiming.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mausempfindlichkeit und Raw-Input kalibrieren",
        "text": "Stelle DPI und Ingame-Sensibilität identisch zu deinem Hauptspiel ein. Stelle sicher, dass die Pointer-Lock-API aktiv ist und keine Windows-Mausbeschleunigung stört."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Initial-Flick auf das primäre Ankerziel",
        "text": "Führe einen schnellen ballistischen Flick auf das erscheinende Ankerziel aus und klicke es zügig an, um das benachbarte Mikroziel freizuschalten."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Aktives Abbremsen über Handballendruck",
        "text": "Stoppe die Restenergie der Mausbewegung unmittelbar im Nahbereich des Mikroziels ab, indem du leichten Druck auf das Mauspad ausübst."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Fingertip-Feinjustierung und Zielbestätigung",
        "text": "Bewege das Fadenkreuz mit den Fingergelenken die letzten Pixel ins Zentrum des Mikroziels und löse den Klick erst nach visueller Verifizierung aus."
      }
    ]
  };

  const microCorrectionGuideDe = {
    heading: "Mikrokorrekturen trainieren – Leitfaden",
    subtitle: "Meistere Bremskontrolle, Endphasen-Verzögerung und Fingerkuppen-Feinjustierung für maximale Headshot-Präzision in taktischen Shootern",
    intro: [
      "Wer Mikrokorrekturen trainieren will, übt den letzten kurzen Stopp nach dem ersten Flick: Das Fadenkreuz erreicht die Zielzone, bremst sauber und landet für den Kopfschuss im Zentrum. Dieser Drill misst Korrekturzeit und Trefferquote, damit du Overflicks und verspätete Doppelkorrekturen in Valorant und CS2 gezielt reduzierst.",
      "Das theoretische Fundament zielgerichteter Schnellbewegungen legte Robert S. Woodworth (1899) mit seinem klassischen Zwei-Komponenten-Modell: Ein primärer, offener ballistischer Impuls (Open-Loop) beschleunigt die Hand in Richtung des visuellen Reizes, gefolgt von einer geschlossenen Kontrollphase (Closed-Loop) unter ständiger sensorischer Rückkopplung. Diese Geschwindigkeits-Genauigkeits-Abwägung wurde von Paul M. Fitts (1954) im Fitts’schen Gesetz mathematisch quantifiziert: Die Bewegungszeit skaliert logarithmisch mit der Zieldistanz und umgekehrt proportional zur Zielbreite (ID = log2(2D / W)).",
      "Spätere neurowissenschaftliche Modellierungen von David E. Meyer et al. (1988) etablierten das Stochastic Optimized Submovement Model. Dieses belegt, dass die menschliche Motorik primäre Bewegungen strategisch so plant, dass sie kurz vor oder am Rand des Zielbereichs landen, um verbleibende Koordinatendifferenzen durch blitzschnelle Korrektur-Subbewegungen ohne kinetisches Überschwingen (Overshoot) aufzulösen.",
      "In der hochauflösenden Endphase der fovealen Fixation nutzt das okulomotorische System Mikrosakkaden – unwillkürliche, hochfrequente Foveaverschiebungen von unter 1 Grad –, um retinale Signale aufzufrischen und das Sehzentrum auf mikroskopischen Trefferflächen zu zentrieren (Rolfs, 2009; Martinez-Conde et al., 2004). Dieser Trainer koppelt Raw-Pointer-Lock-Hardwareeingaben mit digitaler Hochpräzisions-Chronometrie via performance.now() (Woods et al., 2015), um Endphasen-Oszillationen und Overflick-Drift zu eliminieren.",
      "Messpräzision & Hardware-Latenz: Jedes Ereignis wird clientseitig mit der hochauflösenden Systemuhr performance.now() erfasst – es findet kein Upload von Daten statt. Zwei physikalische Grenzwerte sind zu beachten: Browser-Timer werden zum Schutz vor Spectre-Angriffen auf rund 1 ms gerundet, und der Monitor quantisiert Bildreize auf sein Bildwiederholintervall (~16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz; Woods et al., 2015). Die USB-Abtastrate (Polling Rate) addiert etwa 8 ms bei 125 Hz gegenüber 1 ms bei 1000 Hz. Zeitunterschiede unter 5 ms stellen messtechnisches Rauschen dar; vergleiche daher deine Messreihen auf identischer Hardware."
    ],
    benchmarks: {
      title: "SkillDrills-Übungsbereiche für Mikrokorrekturen (Richtwerte)",
      headers: ["Übungsbereich", "Korrekturzeit (ms)", "Mikro-Trefferquote", "Übungsfokus"],
      rows: [
        ["Bereich 1", "< 140 ms", "95% – 99%+", "Fokus: Flick und Feinjustierung zu einer Bewegung verbinden."],
        ["Bereich 2", "140 – 190 ms", "88% – 95%", "Fokus: Bremskontrolle und schnelle Korrektur verfehlter Initial-Flicks."],
        ["Bereich 3", "190 – 250 ms", "80% – 88%", "Fokus: Handgelenk locker halten, um gelegentlichen Overshoot zu vermeiden."],
        ["Bereich 4", "250 – 340 ms", "70% – 80%", "Fokus: früher bremsen, um Doppelkorrekturen nach dem Überreißen zu vermeiden."],
        ["Bereich 5", "> 340 ms", "< 70%", "Einstieg: Korrekturen noch mit dem ganzen Arm statt mit den Fingern."]
      ],
      note: "SkillDrills-Übungsrichtwerte, keine Forschungsnormen, keine Spiel-Ränge und keine Nutzerdaten. Die durchschnittliche Korrekturzeit ist das Intervall zwischen dem Ankertreffer und dem Treffer auf das Mikroziel."
    },
    techniques: {
      title: "Biomechanische Kerntechniken für fehlerfreie Mikrokorrekturen",
      items: [
        {
          name: "Fingertip-Mikro-Stroke (Fingerkuppen-Führung)",
          desc: "Verändere bei Distanzen unter 20 Pixeln nicht die Arm- oder Handgelenksposition, sondern beuge und strecke ausschließlich Daumen, Ringfinger und kleinen Finger, um die Maus feinfühlig zu verschieben.",
          tips: "Lege den Handballen als stabilen Anker leicht auf dem Pad ab, damit die Finger maximalen Hebel haben."
        },
        {
          name: "Friktionsbremsung über das Mauspad",
          desc: "Nutze die Reibung des Mauspads als aktive Bremse. Durch minimalen Abwärtsdruck kurz vor Zielerreichung wird die Trägheit des Mauskörpers schlagartig gestoppt.",
          tips: "Vermeide dauerhaftes Verkrampfen: Übe den Druck nur für den Bruchteil einer Sekunde beim Abstoppen aus."
        },
        {
          name: "Visuelle Zielbestätigung (Target Confirmation)",
          desc: "Drücke die Maustaste erst dann durch, wenn dein Auge das Fadenkreuz im Zentrum des Mikroziels fixiert hat. Unbestätigte Klicks führen zu unsauberen Treffermustern.",
          tips: "Trainiere zunächst auf 100 % Trefferquote, bevor du versuchst, die Korrekturzeit künstlich zu beschleunigen."
        },
        {
          name: "Zwei-Takt-Rhythmus (Anker – Stopp – Klick)",
          desc: "Etabliere einen gleichmäßigen Takt aus initialem Anker-Treffer, kontrolliertem Stopp und finalem Mikro-Klick, um unter Wettkampfstress Muskelblockaden zu verhindern.",
          tips: "Ein sauberer Bewegungsrhythmus verhindert hektisches Verreißen der Maus in engen Clutch-Situationen."
        }
      ]
    },
    steps: [
      "Stelle deine Ingame-Sensibilität ein und aktiviere die Pointer-Lock-API zur Mauserfassung.",
      "Führe einen raschen ballistischen Flick auf das große Ankerziel aus und klicke es an.",
      "Bremse die Mausbewegung sofort ab und lokalisiere das unmittelbar daneben auftauchende Mikro-Ziel.",
      "Justiere das Fadenkreuz mit den Fingerkuppen nach und löse bei Zielbestätigung den Schuss aus.",
      "Halte deine Trefferserie aufrecht, um hohe Combo-Boni zu erzielen und immer kleinere Zielradien zu meistern."
    ],
    audience: "Spieler von Counter-Strike 2, Valorant, Rainbow Six Siege und Apex Legends, die die Korrektur nach einem knapp verfehlten Flick üben wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'martinezConde2004', 'rolfs2009', 'woodworth1899'),
    related: [
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/recoil-control", label: "Recoil Control Training" },
      { href: "/de/drills/fps/strafe-tracking", label: "Strafe Tracking Übung" },
      { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Reaktionszeittest" }
    ]
  };

  const copyDe = {
    h1Keyword: "Mikrokorrekturen trainieren",
    h1Suffix: ": Headshot-Präzision",
    subtitle: "Mikrokorrekturen trainieren: Triff das Ankerziel und zieh das Fadenkreuz sofort auf das kleine Mikroziel daneben. Für Valorant- und CS2-Spieler.",
    statScore: "Punkte",
    statTime: "Zeit",
    statAccuracy: "Präzision",
    statBestScore: "Highscore",
    statAvgCorrection: "Korrekturzeit",
    statMaxCombo: "Max Combo",
    statPeakLevel: "Level",
    startTitle: "Mikrokorrekturen trainieren",
    startSubtitle: "Pointer Lock • Endlose Levelprogression & Bremskontrolle",
    getReady: "BEREITMACHEN",
    toggleFlash: "Fehlschuss-Aufleuchten umschalten",
    toggleSound: "Soundeffekte umschalten",
    stageCaption: "Klicke das Ankerziel an und korrigiere dein Fadenkreuz sofort mit feiner Fingerbewegung auf das Mikroziel.",
    rulesTitle: "Trainingsregeln & Punktesystem",
    rulesItems: [
      { num: "1", text: "Ankerziel treffen", highlight: "+10 Pkt (+1,0s)", result: "Mikroziel aktiv" },
      { num: "2", text: "Mikroziel treffen", highlight: "100–150 Pkt (+1,0s)", result: "Präzision × Combo × Level" },
      { num: "3", text: "Levelaufstieg", highlight: "+1 Level / 1.400 Pkt", result: "Adaptive Skalierung" },
      { num: "4", text: "Fehlschuss / Timeout", highlight: "Strafe", result: "Combo-Reset (-1,0s)" }
    ],
    aboutTitle: "Über das Mikrokorrektur-Training",
    aboutHeading: "Was ist Mikrokorrektur-Aiming?",
    aboutText: "Gezielte Zielbewegungen bestehen aus zwei Phasen: einem schnellen ballistischen Schwung und einer feinen, visuell geführten Korrekturbewegung nahe dem Ziel (Woodworth, 1899; Meyer et al., 1988). Dieser Trainer schult die zweite Phase, in der über Treffer oder Vorbeischuss entschieden wird."
  };

  return (
    <>
      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* SoftwareApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* WebApplication Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />

      {/* VideoGame Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HowTo Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <MicroCorrectionClient copy={copyDe} />

      <DrillGuide guide={microCorrectionGuideDe} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
