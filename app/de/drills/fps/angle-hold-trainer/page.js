import AngleHoldClient from '@/app/drills/fps/angle-hold-trainer/AngleHoldClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "CS2 Aim Training: Crosshair Placement | SkillDrills",
  description: "CS2 Aim Training im Browser: Übe Crosshair Placement und Winkel halten, indem du Ziele triffst, die an der Wandkante hervorpeeken. Kostenlos, auch für Valorant.",
  keywords: [
    "CS2 Aim Training",
    "aim trainer cs2",
    "Crosshair Placement",
    "Crosshair Placement CS2",
    "Crosshair Placement Valorant",
    "Winkel halten FPS",
    "Winkel halten",
    "Fadenkreuz-Platzierung üben",
    "Pre-Aiming Übung",
    "Peeker Advantage auskontern",
    "Wandabstand Aiming",
    "Kopfhöhe Fadenkreuz",
    "Reaktionszeit Ecken halten"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/angle-hold-trainer",
    languages: getAlternateLanguages('/drills/fps/angle-hold-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "CS2 Aim Training: Crosshair Placement | SkillDrills",
    description: "CS2 Aim Training im Browser: Übe Crosshair Placement und Winkel halten, indem du Ziele triffst, die an der Wandkante hervorpeeken. Kostenlos, auch für Valorant.",
    url: "https://skilldrills.online/de/drills/fps/angle-hold-trainer",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "CS2 Aim Training: Crosshair Placement | SkillDrills",
    description: "CS2 Aim Training im Browser: Übe Crosshair Placement und Winkel halten, indem du Ziele triffst, die an der Wandkante hervorpeeken. Kostenlos, auch für Valorant.",
  },
};

export default function GermanAngleHoldPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "CS2 Aim Training - Crosshair Placement", "item": "https://skilldrills.online/de/drills/fps/angle-hold-trainer" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CS2 Aim Training - Crosshair Placement",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "inLanguage": "de",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenloser browserbasierter Crosshair-Placement-Trainer für taktische FPS. Trainiere Wandabstand, Kopfhöhe und Pre-Aiming gegen Peeker's Advantage.",
    "genre": "FPS Training / Crosshair Placement",
    "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "CS2 Aim Training - Crosshair Placement",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "inLanguage": "de",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenlose Trainingssoftware für defensive Fadenkreuz-Platzierung, Wandabstands-Kompensation und Reaktionslatenz gegen hervorbrechende Gegner.",
    "genre": "FPS Training / Crosshair Placement",
    "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer",
    "dateModified": "2026-11-09",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "CS2 Aim Training - Crosshair Placement",
    "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer",
    "description": "Kostenloses interaktives FPS-Trainingsspiel zur Perfektionierung von Crosshair Placement, Trigger-Disziplin und Winkelhaltung in CS2 und Valorant.",
    "inLanguage": "de",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist Crosshair Placement (Fadenkreuz-Platzierung)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Crosshair Placement ist die fundamentale mechanische Fertigkeit in taktischen Shootern, das Fadenkreuz permanent vorausschauend auf Kopfhöhe an der Stelle zu positionieren, an der ein Gegner als Nächstes erscheinen wird. Dadurch entfällt ein reaktiver Flick, da das Ziel direkt in die Visierlinie läuft."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft dieses CS2 Aim Training ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach dem Start laufen Vollbild und Pointer Lock, die Uhr beginnt bei 45 Sekunden. Ziele peeken in zufälliger Höhe an der linken oder rechten Wandkante hervor und ziehen sich wieder zurück. Ein Treffer gibt 100 Punkte mal Combo- und Level-Multiplikator und +2 Sekunden (maximal 60). Alle 1400 Punkte steigt das Level, Peeks werden kürzer und Ziele kleiner, und ab höheren Levels mischen sich orange Fake-Peeks dazu. Fehlschüsse, Frühschüsse ohne Ziel und Schüsse auf Fake-Peeks setzen die Combo zurück und kosten mit aktivierter Zeitstrafe 1 Sekunde. Bei 0 Sekunden endet der Lauf."
        }
      },
      {
        "@type": "Question",
        "name": "Was versteht man unter Peeker's Advantage in Online-Shootern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Peeker's Advantage bezeichnet die netzwerkbedingte Latenzasymmetrie zwischen Angreifer und Verteidiger. Da Positionsdaten vom peekernden Client über den Server zum Verteidiger gesendet werden müssen, sieht der sich bewegende Angreifer den stationären Verteidiger etwas früher auf seinem Monitor. Wie groß der Vorsprung ist, hängt von Ping, Tickrate und Interpolation ab."
        }
      },
      {
        "@type": "Question",
        "name": "Wie hält man in CS2 und Valorant Winkel richtig?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klebe das Fadenkreuz nicht direkt an die Mauerkante. Lass einen horizontalen Abstand (Wandabstand), der zu deiner visuellen Reaktionszeit und der erwarteten Bewegungsgeschwindigkeit des Gegners passt, und halte es auf Kopfhöhe."
        }
      },
      {
        "@type": "Question",
        "name": "Wie groß sollte der Fadenkreuz-Abstand zur Wand sein?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der ideale Wandabstand hängt von der erwarteten Bewegung ab: Gegen weite Swings (Wide Peeks / Running Swings) wird breiter gehalten (mehrere Modellbreiten abseits der Wand). Gegen langsame Shoulder-Peeks oder vorsichtiges Vorantasten wird enger an der Kante gehalten."
        }
      },
      {
        "@type": "Question",
        "name": "Warum schießen viele Spieler beim Halten von Winkeln zu früh?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Frühschüsse resultieren aus Antizipationsdruck oder Fehlern bei Go/No-Go-Entscheidungen, beispielsweise wenn ein Gegner ködert (Jiggle Peek). In diesem Drill tauchen auf höheren Levels kurze orange Fake-Peeks auf; ein Schuss darauf zählt als Frühschuss. So übst du, erst bei bestätigter Ziel-Präsenz abzudrücken."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist der Unterschied zwischen Winkel halten und Jiggle Peeking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Winkel halten ist eine statische, defensive Haltung, die auf präzisem Wandabstand und Klick-Timing basiert. Jiggle Peeking ist eine aktive Aufklärungstechnik, bei der der Spieler durch schnelles AD-Strafing kurz aus der Deckung lugt, um Schüsse zu provozieren oder Gegner zu spotten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lautet die mathematische Formel für den Peeker's Advantage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Latenzverzögerung berechnet sich als: T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. Um diesen Zeitvorsprung auszugleichen, muss der Fadenkreuz-Versatz D_offset mindestens der Distanz entsprechen, die das Ziel während der Reaktionszeit zurücklegt: D_offset = v_peeker × T_reaction."
        }
      },
      {
        "@type": "Question",
        "name": "Beeinflusst die Bildwiederholfrequenz (Hz) das Halten von Winkeln?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Ein 240-Hz-Monitor liefert alle ~4,17 ms ein neues Bild im Vergleich zu 16,67 ms bei 60 Hz. Dadurch wird das erste Bild des hervortretenden Gegners im Schnitt früher angezeigt; der Gewinn entspricht höchstens dem Unterschied der Bildintervalle."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte Crosshair Placement trainiert werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine feste Regel gibt es nicht. Ein sinnvoller Rahmen sind 10 bis 15 Minuten vor dem Spielen, kombiniert mit Deathmatch für Map-Kopfhöhen. Vergleiche deine durchschnittliche Reaktionszeit und Treffsicherheit auf derselben Hardware über mehrere Tage."
        }
      },
      {
        "@type": "Question",
        "name": "Unterstützt dieser Trainer rohe Hardware-Mauseingaben?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Angle Hold Pro nutzt die HTML5 Pointer Lock API zur Mauserfassung und timestampet Klicks über performance.now(). Es wird keine unbeschleunigte Eingabe angefordert, daher können Zeigereinstellungen des Betriebssystems weiter wirken. Eine Maus ist nötig; auf reinen Touch-Geräten startet der Drill nicht."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung: Crosshair Placement & Winkel halten trainieren",
    "description": "Schritt-für-Schritt-Anleitung zur Kalibrierung von Fadenkreuzhöhe, Wandabstand und Klick-Timing gegen peekernde Gegner.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Wandabstand kalibrieren",
        "text": "Platziere das Fadenkreuz nicht direkt an der Mauerkante, sondern lasse eine Lücke, die deiner individuellen visuellen Reaktionszeit entspricht.",
        "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Fadenkreuz auf Kopfhöhe arretieren",
        "text": "Richte die Visierlinie an visuellen Markierungen der Map-Geometrie (Kisten, Kanten, Texturlinien) auf exakter Kopfhöhe aus.",
        "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Gegnerische Schwunggeschwindigkeit antizipieren",
        "text": "Passe den Abstand flexibel an: Halte breiter gegen rasante Wide-Swings und enger gegen vorsichtig herantastende Schulter-Peeks.",
        "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Beim Durchqueren der Visierlinie sofort abdrücken",
        "text": "Löse in der Millisekunde einen präzisen Einzelschuss aus, in der das Ziel das Fadenkreuz berührt – ohne korrigierenden Micro-Flick.",
        "url": "https://skilldrills.online/de/drills/fps/angle-hold-trainer#step-4"
      }
    ]
  };

  const angleHoldGuide = {
    heading: "CS2 Aim Training: Crosshair Placement und Winkel halten",
    intro: [
      "Dieses CS2 Aim Training übt Crosshair Placement: das Vorhalten auf Kopfhöhe, bevor ein Gegner um die Ecke peekt. Ziele peeken an der linken oder rechten Wandkante hervor, und du klickst, sobald sie im Fadenkreuz sind. So übst du Wandabstand, Winkel halten und Klickreaktion für CS2 und Valorant.",
      "In modernen Online-Shooter-Netcodes erzeugt der serielle Pakettransport eine asymmetrische Latenzverzögerung, den sogenannten Peeker's Advantage: T_advantage = (RTT_peeker / 2) + (RTT_holder / 2) + T_interp. Ein um die Ecke stürmender Angreifer sieht den stationären Verteidiger stets vor dem Moment, in dem die Positionsdaten den Client des Verteidigers erreichen. Um dieses Latenzdefizit systematisch zu neutralisieren, müssen stationäre Verteidiger ihr Fadenkreuz mit berechnetem Wandabstand vorhalten: D_offset = v_peeker × T_reaktion. Das Ziel läuft dadurch exakt in die Visierlinie, während der Schuss bricht.",
      "Präzise Klick-Auslösungen unterliegen dem Fitts'schen Gesetz (Fitts, 1954) und den Gesetzmäßigkeiten motorischer Impulsvariabilität: Jede zusätzliche Mauskorrektur während des Haltens kostet Zeit. Angle Hold Pro misst Klicks mit performance.now(); Bildwiederholrate und Mausabfrage des eigenen Systems beeinflussen die Werte weiterhin (Woods et al., 2015). Die Fake-Peeks fügen eine Go/No-Go-Entscheidung hinzu (Hick, 1952).",
      "Messmethodik: Jedes Ereignis wird mit dem hochauflösenden Zeitstempel performance.now() des Browsers lokal erfasst – es erfolgt kein externer Daten-Upload. Beachte messtechnische Rahmenbedingungen: Browser-Timer werden aus Sicherheitsgründen (Spectre-Mitigation) auf etwa 1 ms gerundet. Monitore quantisieren Reize auf ihr Bildintervall (~16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz nach Woods et al., 2015). Differenzen unter 5 ms stellen physikalisches Messrauschen dar. Vergleiche deine Ergebnisse daher am besten auf demselben Hardwaresystem."
    ],
    benchmarks: {
      title: "Reaktion & Netcode beim Winkel halten: Richtwerte",
      headers: ["Duell-Phase / Metrik", "Richtwert (ms)", "Faktor", "Einordnung"],
      rows: [
        ["Einfache visuelle Klick-Reaktion", "ca. 200 – 250 ms (Forschungsbereich)", "Reiz sehen, dann klicken", "Einfache Reaktion auf einen erwarteten Reiz (Woods et al., 2015)"],
        ["Unterscheidungs-Reaktion (Fake / Jiggle Peek)", "einige zehn ms länger als einfache Reaktion", "Go/No-Go-Entscheidung", "Mehr Alternativen, längere Reaktion (Hick, 1952)"],
        ["Peeker's Advantage", "abhängig von Server und Ping", "Client-Server-RTT + Interpolationspuffer", "Netzwerkbedingter Vorsprung des bewegten Angreifers"],
        ["Stabiler Wandabstand", "Referenz", "Fadenkreuz bleibt vor dem Peek auf Kopfhöhe vor der Kante", "Eigene Werte auf demselben Gerät vergleichen"]
      ],
      note: "Die Werte sind erklärende Richtwerte nach allgemeinen Bereichen der Reaktionsforschung (Donders, 1868; Hick, 1952; Woods et al., 2015), keine Ranglisten- oder Nutzerstatistik. Individuelle Reaktionszeiten variieren je nach Bildwiederholfrequenz, Mauseingabe-Polling und Wachheit."
    },
    techniques: {
      title: "Taktisches Crosshair Placement & Vorhalte-Richtlinien",
      items: [
        {
          name: "Wandabstands-Kalibrierung (Offset Gap)",
          desc: "Kleben Sie das Fadenkreuz nicht direkt an den Rand der Wand. Halten Sie einen horizontalen Puffer ein, der Ihrer Reaktionsgeschwindigkeit entspricht: weiter weg bei schnellen Wide-Swings, enger bei vorsichtigen Taps.",
          tips: "Wenn Gegner regelmäßig an Ihrem Fadenkreuz vorbeirennen, vergrößern Sie den Wandabstand etwas; schießen Sie zu früh daneben, halten Sie enger."
        },
        {
          name: "Horizontale Kopfhöhen-Disziplin (Head-Level)",
          desc: "Verankern Sie die Fadenkreuzhöhe an visuellen Referenzpunkten der Level-Geometrie (Kistenkanten, Wandbänder oder Türzargen), um vertikale Zielsuchbewegungen vollständig auszuschließen.",
          tips: "Vermeiden Sie das Absinken des Fadenkreuzes auf Brust- oder Bodenhöhe beim Begehen passiver Wege."
        },
        {
          name: "Die 'Klicken, nicht korrigieren'-Regel",
          desc: "Wenn Sie einen vorbereiteten Winkel halten, lösen Sie den Schuss aus, sobald der Gegner das Fadenkreuz schneidet. Jeder reaktive Micro-Flick fügt eine zusätzliche Korrekturbewegung und damit Verzögerung hinzu.",
          tips: "Vertrauen Sie Ihrer Vorhalteposition und fokussieren Sie Ihren Blick knapp vor das Fadenkreuz in die Anflugzone."
        },
        {
          name: "Off-Angle-Positionierung",
          desc: "Standardwinkel werden von versierten Angreifern vorab mit Prefire bestraft. Verlagern Sie Ihre Position um einen halben Schritt in unerwartete Winkel, um das gegnerische Pre-Aiming zu desynchronisieren.",
          tips: "Achten Sie bei Off-Angles stets darauf, dass Sie im Notfall eine sichere Rückzugslinie in die Deckung besitzen."
        }
      ]
    },
    steps: [
      "Klicken Sie auf 'Start', um den Vollbildmodus zu aktivieren und den Hardware-Mauszeiger zu sperren.",
      "Visieren Sie die Mauerkante auf exakter Kopfhöhe an und stellen Sie den optimalen Wandabstand ein.",
      "Halten Sie die Hand mit leichter, entspannter Muskelspannung ruhig, um Zitterbewegungen zu vermeiden.",
      "Drücken Sie in dem Moment präzise ab, in dem das Ziel das Fadenkreuz kreuzt – ohne nachzujustieren.",
      "Analysieren Sie Ihre durchschnittliche Reaktionslatenz (ms) und Ihre Treffsicherheit über mehrere Runden."
    ],
    audience: "Spieler von CS2, Valorant und Rainbow Six Siege, die defensives Crosshair Placement, Trigger-Disziplin und schnelle Reaktionen beim Winkel halten üben wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'woodworth1899'),
    related: [
      { href: "/de/drills/fps/flick-shot-training", label: "Pro Flick Trainer" },
      { href: "/de/drills/fps/180-degree-awareness", label: "180° Awareness Pro" },
      { href: "/de/drills/fps/micro-correction-precision", label: "Micro-Correction Precision" },
      { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Reaktionszeit-Test" }
    ]
  };

  const copyDe = {
    h1Prefix: null,
    h1Keyword: "CS2 Aim Training",
    h1Suffix: " – Crosshair Placement & Winkel halten",
    subtitle: "Winkel absichern, Peeks erkennen und den Abzug diszipliniert halten",
    caption: "Kostenloses CS2 Aim Training für Crosshair Placement und Reaktion beim Halten von Winkeln.",
    aboutIntro: [
      "Dieses CS2 Aim Training übt Crosshair Placement und Winkel halten: Du hältst das Fadenkreuz auf Kopfhöhe neben einer Wandkante und klickst, sobald ein Ziel hervorpeekt. Es eignet sich für CS2- und Valorant-Spieler, die Ecken diszipliniert halten wollen, und zeigt am Ende durchschnittliche Reaktion, Treffsicherheit, Combo und Level.",
      "Jeder Peek kommt zufällig von links oder rechts und in zufälliger Höhe, ein Rhythmus lässt sich also nicht auswendig lernen. Mit steigendem Level werden Peeks kürzer und Ziele kleiner, und orange Fake-Peeks bestrafen voreilige Klicks. Netcode oder Ranglisten echter Spiele werden nicht nachgebildet; nutze den Drill als Übungsergänzung."
    ],
    startTitle: "CS2 Aim Training - Crosshair Placement",
    startSubtitle: "Crosshair Placement • Wandabstand • Trigger-Disziplin",
    statScore: "Punkte",
    statTime: "Verbleibende Zeit",
    statAccuracy: "Präzision",
    statBestScore: "Highscore",
    statAvgReaction: "Ø Reaktionszeit",
    statMaxCombo: "Max Combo",
    statPeakLevel: "Erreichtes Level",
    getReady: "FADENKREUZ POSITIONIEREN",
    bottomCaption: "Halte das Fadenkreuz mit etwas Wandabstand auf Kopfhöhe und klicke, sobald das Ziel ins Fadenkreuz peekt.",
    accordionRulesTitle: "Trainingsregeln & Punktesystem",
    accordionAboutTitle: "Über dieses CS2 Aim Training und Crosshair Placement",
    overviewTitle: "Prinzipien der defensiven Fadenkreuz-Platzierung",
    overviewLead: "Winkel halten bedeutet, das Fadenkreuz genau dort zu verankern, wo der gegnerische Kopf beim Peeken erscheinen wird. Eine einfache visuelle Reaktion liegt meist bei rund 200–250 ms, und eine zusätzliche Schießen-oder-nicht-Entscheidung macht sie länger (Donders, 1868; Hick, 1952). Korrektes Vorhalten (Pre-Aiming) spart den Flick, sodass im Duell vor allem das Klick-Timing zählt.",
    rulesItems: [
      { num: "1", text: "Zieltreffer", highlight: "+100 PTS (+2s, max. 60s)", result: "×Combo-Mult" },
      { num: "2", text: "Peek-Spawns", highlight: "Linke/rechte Wandkante", result: "Kürzer & kleiner" },
      { num: "3", text: "Level-Aufstieg", highlight: "+1 Level / 1400 PTS", result: "Adaptive Skalierung" },
      { num: "4", text: "Fehlschuss / Frühschuss / Fake-Peek", highlight: "Fehler-Strafe", result: "Combo-Reset (-1s mit Zeitstrafe)" }
    ],
    aboutCards: [
      { iconBg: "bg-blue-600", title: "Empfohlen für", text: "Verteidiger (Site-Anchors) in Valorant, CS2-Holders, R6-Siege-Spieler und alle Schützen, die Ecken diszipliniert absichern wollen." },
      { iconBg: "bg-orange-600", title: "Trainierte Fertigkeiten", text: "Wandabstands-Kalibrierung (Offset Gap), Trigger-Disziplin gegen Fake-Peeks, Reaktions-Timing und Kopfhöhen-Konsistenz." },
      { iconBg: "bg-purple-600", title: "Fake-Peek-Erkennung", text: "Höhere Level mischen kurze orange Fake-Peeks (Bait-Peeks) dazu. Trainiere dein Go/No-Go-Urteilsvermögen, um erst bei voller Ziel-Präsenz auszulösen." }
    ],
    aboutSections: [
      {
        title: "Der optimale Wandabstand (Offset-Geometrie)",
        paragraphs: [
          "Der häufigste Fehler beim Halten von Winkeln ist das direkte Ankleben des Fadenkreuzes an die Wandkante. Weil zwischen Sehen und Klicken eine Reaktionszeit liegt, rennt ein peekernder Gegner an einem wandnahen Fadenkreuz vorbei, bevor der Finger abdrücken kann.",
          "Indem du einen horizontalen Abstand zur Mauerecke lässt (D_offset = v_peeker × T_reaktion), läuft der Angreifer exakt in dein Fadenkreuz, während dein Schuss bricht – ganz ohne hektische Micro-Korrekturen."
        ]
      },
      {
        title: "Peeker's Advantage ausgleichen",
        paragraphs: [
          "Aufgrund der Client-Server-Latenz (RTT) sieht der bewegte Angreifer den stationären Verteidiger etwas früher, abhängig von Ping und Server. Dieser Nachteil lässt sich durch Positionierung (Off-Angles) und einen breiteren Fadenkreuzabstand abmildern, der die gegnerische Querbeschleunigung einkalkuliert."
        ]
      },
      {
        title: "Messmethodik und Sensor-Präzision",
        paragraphs: [
          "Angle Hold Pro verwendet die HTML5 Pointer Lock API und performance.now() Zeitstempel, um Klick-Latenzen im Millisekundenbereich zu erfassen."
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

      <AngleHoldClient copy={copyDe} />

      <RelatedDrills />

      <DrillGuide guide={angleHoldGuide} />
      <DrillFooter />
    </>
  );
}
