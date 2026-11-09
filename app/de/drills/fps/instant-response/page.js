import InstantResponseClient from '@/app/drills/fps/instant-response/InstantResponseClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING (DACH)
// Primary queries: "Reaktionszeit Test" / "Reaktionstest" (Core domestic queries for reaction measurement)
//                  "Klick Reaktionszeit FPS" (High technical category intent for click latency)
// Secondary:       "Aim Reflexe Trainieren", "Reaktionsgeschwindigkeit Shooter", "Maus Klick Latenz Test",
//                  "CS2 Reaktionszeit verbessern", "Valorant Trigger Reaktionszeit",
//                  "Visuelle Reaktionszeit Test", "Reflexe testen Gaming", "Trigger Finger Speed Test"
// Domain / LSI:    "Einfache visuelle Reaktionszeit" (Donders 1969), "Hick'sches Gesetz" (Hick 1952),
//                  "Visuelle Aufmerksamkeit" (Posner 1990), "Neuromuskuläre Latenz",
//                  "Hardware-Latenzkette" (Woods et al. 2015), "Display Refresh Rate",
//                  "Schalter-Vorlaufweg" (Pre-Travel Actuation), "Feint-Unterdrückung"
// Authentic Domain Terms: Reaktionszeit, Klicklatenz, Reflex-Training, Trigger-Geschwindigkeit,
//                         Angle-Holding-Reaktion, Schalter-Vorlauf
// ============================================================

export const metadata = {
  title: "FPS-Reflextest: Klick-Reaktion in ms | SkillDrills",
  description: "FPS-Reflextest im Browser: Klicke, sobald das Ziel in der Mitte grün aufleuchtet, und miss deine Klick-Reaktion in ms. Zufällige Wartezeit und Feints. Maus nötig.",
  keywords: [
    "FPS-Reflextest",
    "Klick-Reaktion",
    "Klicklatenz messen",
    "FPS Reflexe",
    "Klick Reaktionszeit",
    "CS2 Reflextest",
    "Valorant Reflextest"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/instant-response",
    languages: getAlternateLanguages('/drills/fps/instant-response'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "FPS-Reflextest: Klick-Reaktion in ms | SkillDrills",
    description: "FPS-Reflextest im Browser: Klicke, sobald das Ziel in der Mitte grün aufleuchtet, und miss deine Klick-Reaktion in ms. Zufällige Wartezeit und Feints. Maus nötig.",
    url: "https://skilldrills.online/de/drills/fps/instant-response",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "FPS-Reflextest: Klick-Reaktion in ms | SkillDrills",
    description: "FPS-Reflextest im Browser: Klicke, sobald das Ziel in der Mitte grün aufleuchtet, und miss deine Klick-Reaktion in ms. Zufällige Wartezeit und Feints. Maus nötig.",
  },
};

export default function InstantResponseDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Aim Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "FPS-Reflextest", "item": "https://skilldrills.online/de/drills/fps/instant-response" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
    "name": "FPS-Reflextest: Klick-Reaktion in ms",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FPS-Reflextest",
    "url": "https://skilldrills.online/de/drills/fps/instant-response",
    "applicationCategory": "Trainer",
    "browserRequirements": "Requires Pointer Lock API, modern web browser, 60Hz+ monitor recommended"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "FPS-Reflextest",
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
        "name": "Was ist der Unterschied zwischen einfacher visueller Reaktionszeit und FPS-In-Game-Reaktionszeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die einfache visuelle Reaktionszeit (Donders, 1969) misst lediglich die Latenz auf einen simplen Farbumschlag. In einem FPS wie CS2 oder Valorant kommen Entscheidungszeiten (Hick, 1952), räumliche Zielidentifikation und Fadenkreuz-Ausrichtung hinzu, wodurch Ingame-Reaktionen länger dauern."
        }
      },
      {
        "@type": "Question",
        "name": "Gibt es einen Richtwert für die Klick-Reaktion in diesem Drill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Wir veröffentlichen keine Profi- oder Nutzerwerte. Die Tabelle unten zeigt SkillDrills-Übungsbereiche, die direkt aus der Punktewertung stammen: Unter 500 ms gibt es einen Tempobonus, ab 150 ms abwärts den vollen Bonus. Vergleiche deine Werte am besten mit dir selbst auf demselben Gerät."
        }
      },
      {
        "@type": "Question",
        "name": "Wie setzt sich die menschliche neuromuskuläre Kette bis zum Klick zusammen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vereinfacht: Licht trifft auf die Netzhaut, das Signal läuft über den Sehnerv zum visuellen Kortex, wird verarbeitet und an den Motorkortex weitergegeben, und schließlich löst der Zeigefinger den Mausschalter aus. Jede Station kostet Zeit; in diesem Drill kommt noch die Latenz von Monitor, Maus und Browser hinzu."
        }
      },
      {
        "@type": "Question",
        "name": "Warum bestraft dieser Trainer verfrühtes Klicken (Pre-Firing)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klicken auf Verdacht ohne echten visuellen Reiz (Anticipation) führt im echten Shooter zu fehlerhaftem Sprühen, Positionsverrat und sofortigem Duellverlust. Der Trainer erzwingt strikte Schussdisziplin, indem er ab mittleren Levels Täuschungsreize einstreut und Fehlstarts mit Combo-Verlust und 1 s Zeitabzug ahndet."
        }
      },
      {
        "@type": "Question",
        "name": "Wie viel Latenz steuern Monitor, Maus-Polling-Rate und Mausschalter bei?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein 60-Hz-Display erzeugt bis zu 16,6 ms Bildverzögerung, ein 240-Hz-Monitor nur 4,1 ms. Eine 1000-Hz-Maus liefert Signale im 1-ms-Takt, während mechanische Schalter oft 2–8 ms Entprellzeit (Debounce Delay) benötigen. Optische Schalter reduzieren diesen Wert auf unter 0,2 ms (Woods et al., 2015)."
        }
      },
      {
        "@type": "Question",
        "name": "Kann man seine Reaktionszeit durch gezieltes Training dauerhaft verkürzen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Teilweise. Die Leitungsgeschwindigkeit der Nerven ist biologisch begrenzt, aber mit Übung zögerst du weniger, und deine Werte in diesem Drill können sinken. Wie stark, ist individuell verschieden."
        }
      },
      {
        "@type": "Question",
        "name": "Welchen Einfluss haben Schlaf, Koffein und Ermüdung auf die Klicklatenz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Schlafmangel und Ermüdung können die Reaktionszeit verlängern. Vergleiche Werte aus müden Sessions daher getrennt von deinen normalen Werten."
        }
      },
      {
        "@type": "Question",
        "name": "Was unterscheidet diesen Trainer von einfachen Online-Ampel-Tests?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Drill läuft auf einem 2D-Canvas mit Pointer Lock und Fadenkreuz. Er hat zufällige Wartezeiten, ein mit dem Level schrumpfendes Anzeigefenster, ab mittleren Levels kurze Täuschungsreize (Feints), Combo-Punkte und eine Uhr, die mit 45 s startet und pro Treffer um 2 s wächst."
        }
      },
      {
        "@type": "Question",
        "name": "Wie sollte man den Zeigefinger positionieren, um die Klickverzögerung zu minimieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Zeigefinger sollte leicht vorgespannt direkt auf der Klickfläche der Maustaste ruhen, ohne Spiel (Pre-Travel). Dadurch entfällt der mechanische Leerweg, und die Auslösung erfolgt unmittelbar bei Kontraktion der Beugemuskulatur."
        }
      },
      {
        "@type": "Question",
        "name": "Warum nutzt dieser Trainer die Pointer-Lock-API?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die HTML5-Pointer-Lock-API erfasst die Mausbewegung, fordert aber keine unbeschleunigte Eingabe an; schalte die Zeigerbeschleunigung des Betriebssystems aus, damit dieselbe Handbewegung immer dieselbe Strecke ergibt."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "FPS-Reaktionszeit & Trigger-Geschwindigkeit in 4 Schritten trainieren",
    "description": "Strukturierte Anleitung zur Minimierung von Klicklatenz und Schussverzögerung in Shootern.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mauszeiger sperren und Hardware kalibrieren",
        "text": "Klicke auf Training starten, um den Vollbildmodus und die Pointer-Lock-API zu aktivieren. Schließe Hintergrundprogramme für minimale Systemlatenz."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Blickpunkt zentrieren und Finger vorspannen",
        "text": "Richte deine Aufmerksamkeit auf das Fadenkreuz im Zentrum und lege den Zeigefinger spielfrei auf die linke Maustaste."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Blitzartiges Auslösen bei echtem Farbumschlag",
        "text": "Sobald das Ziel grün aufleuchtet, löse den Klickimpuls reflexartig aus. Ignoriere dunklere Täuschungsreize."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Reaktions-Latenz analysieren und steigern",
        "text": "Prüfe deine mittlere Reaktionszeit in Millisekunden und halte deine Trefferserie aufrecht, um höhere Tempolevels freizuschalten."
      }
    ]
  };

  const instantResponseGuideDe = {
    heading: "FPS-Reflextest: Klick-Reaktion und Klicklatenz messen",
    subtitle: "Messung und Steigerung von visueller Reaktionslatenz, Klickgeschwindigkeit und Schussdisziplin für CS2 und Valorant",
    intro: [
      "Der FPS-Reflextest misst die Zeit zwischen dem grünen Aufleuchten des Ziels in der Bildschirmmitte und deinem Klick. Der Drill zeigt deine Klick-Reaktion in Millisekunden und bestraft verfrühte Klicks, damit du für CS2- und Valorant-Duelle auf das Signal statt auf den Rhythmus reagierst.",
      "Die sensorische Latenzkette gliedert sich in vier präzise Abschnitte: Zunächst treffen Photonen auf die Photorezeptoren der Netzhaut (Transduktion). Das Signal wandert über den Nervus opticus zum primären visuellen Kortex. Dort erfolgt die Reizerkennung und die Weiterleitung an den Motorkortex (Posner, 1990; Hick, 1952). Schließlich feuert das pyramidale motorische System ein efferentes Aktionspotenzial über das Rückenmark in die Beugemuskeln des Zeigefingers (Flexor digitorum).",
      "Zu dieser biologischen Latenzkette addiert sich die physikalische Hardware-Verzögerung deines Gaming-Setups (Woods et al., 2015). Ein Standard-60-Hz-Monitor zeigt Bilder nur alle 16,6 Millisekunden an. Ein 240-Hz-Display reduziert diese Anzeigelatenz auf 4,1 Millisekunden. In Kombination mit einer 1000-Hz-Maus (1 ms Abfrageintervall) und optischen Mikroschaltern (unter 0,2 ms Debounce) sinkt dieser Hardware-Anteil, verschwindet aber nie ganz.",
      "Messpräzision & Transparenz: Dieser Trainer erfasst Klickzeiten über die hochpräzise performance.now()-Schnittstelle deines Browsers . Abweichungen im Bereich von 3 bis 7 ms spiegeln das Hardware-Frame-Intervall deines Monitors wider. Vergleiche deine Werte deshalb immer auf demselben Gerät."
    ],
    benchmarks: {
      title: "SkillDrills-Übungsbereiche nach Klick-Reaktion (ms)",
      headers: ["SkillDrills-Übungsbereich", "Messwert im Drill (ms)", "Grundpunkte pro Treffer (vor Combo- und Level-Multiplikator)", "Hinweis"],
      rows: [
        ["Bereich A", "≤ 150 ms", "100 + 150 Tempobonus", "Voller Bonus. Tritt das oft auf, prüfe, ob du vorab klickst."],
        ["Bereich B", "150 – 250 ms", "100 + ca. 107–150", "Großer Teil des Bonus bleibt."],
        ["Bereich C", "250 – 350 ms", "100 + ca. 64–107", "Bonus etwa halbiert."],
        ["Bereich D", "350 – 500 ms", "100 + 0–64", "Bonus nähert sich 0."],
        ["Bereich E", "> 500 ms", "100 (kein Bonus)", "Auf Level 1 leuchtet das Ziel ca. 550 ms; mit steigendem Level kürzer, dann folgt ein Timeout."]
      ],
      note: "Diese Tabelle leitet SkillDrills-Übungsbereiche aus der Punktewertung des Drills ab. Sie sind keine Forschungsnormen und keine Nutzerdaten; Messwerte enthalten die Latenz von Monitor, Maus und Browser."
    },
    techniques: {
      title: "Biomechanische & kognitive Methoden zur Reaktionszeitverkürzung",
      items: [
        {
          name: "Fingerkuppen-Vorspannung am Mausschalter",
          desc: "Halte den Zeigefinger in permanentem, leichtem Kontakt mit dem Auslösepunkt der Maustaste. Das beseitigt den mechanischen Leerweg vor dem Auslösen.",
          tips: "Halte das Handgelenk entspannt, sodass ausschließlich das vorderste Fingerglied den Schalter betätigt."
        },
        {
          name: "Foveale Reizfokussierung",
          desc: "Fokussiere deine visuelle Aufmerksamkeit scharf auf das Fadenkreuzzentrum. Die foveale Netzhautmitte besitzt die höchste Dichte an Zapfenrezeptoren für maximale Kontrastwahrnehmung (Posner, 1990).",
          tips: "Vermeide starres Starren ohne Blinzeln; trockene Augen verlängern die Reizleitungszeit."
        },
        {
          name: "Disziplinierte Feint-Unterdrückung",
          desc: "Unterdrücke verfrühtes reflexartiges Klicken auf Verdacht. Echtes Wettkampf-Aiming verlangt die Kombination aus maximaler Schnelligkeit und konsequenter Impulskontrolle bei Täuschungsreizen.",
          tips: "Atme zwischen den Runden tief durch die Nase, um nervöse Fehlauslösungen durch Adrenalinspitzen zu neutralisieren."
        },
        {
          name: "Hardware-Latenzminimierung",
          desc: "Verwende einen Gaming-Monitor mit mindestens 144 Hz oder 240 Hz, aktiviere NVIDIA Reflex / AMD Anti-Lag und deaktiviere V-Sync, um Bildpufferverzögerungen vollständig zu eliminieren.",
          tips: "Eine Maus-Abfragerate von 1000 Hz oder höher stellt sicher, dass der Klickimpuls innerhalb von 1 ms an das Spiel übertragen wird."
        }
      ]
    },
    steps: [
      "Stelle sicher, dass Hintergrundprogramme geschlossen sind, um FPS zu erhöhen und die Systemlatenz zu senken.",
      "Klicke auf Training starten, um den Vollbildmodus und die Pointer-Lock-API zu aktivieren.",
      "Fokussiere das zentrale Fadenkreuz, während dein Zeigefinger spielfrei auf der Maustaste aufliegt.",
      "Klicke blitzartig im exakten Moment des grünen Farbumschlags und widerstehe verfrühten Täuschungsreizen.",
      "Jeder Treffer gibt +2 s (max. 60 s), jeder Frühstart, Fehlklick oder Timeout kostet 1 s. Bei 0 endet die Runde; danach siehst du Durchschnittsreaktion (ms), Präzision, höchste Combo und erreichtes Level."
    ],
    audience: "Wettkampfspieler in Counter-Strike 2, Valorant, Rainbow Six Siege, Apex Legends und Call of Duty, die ihre Klickreaktionszeit auf Millisekunden-Niveau trimmen wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'posner1990', 'donders1969', 'hick1952'),
    related: [
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/micro-correction-precision", label: "Mikrokorrektur Aiming" },
      { href: "/de/drills/fps/180-degree-awareness", label: "180 Grad Aiming" },
      { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Reaktionszeittest" }
    ]
  };

  const copyDe = {
    h1Keyword: "FPS-Reflextest",
    h1Suffix: " – Klick-Reaktion in ms",
    subtitle: "Klicklatenz messen und Schussdisziplin gegen Frühstarts und Feints trainieren",
    statScore: "Punkte",
    statTime: "Zeit",
    statAccuracy: "Präzision",
    statBestScore: "Highscore",
    startTitle: "FPS-Reflextest",
    startSubtitle: "Maus + Pointer Lock • Start mit 45 s • Endlose Levelprogression",
    getReady: "BEREITMACHEN",
    pausedTitle: "Spiel Pausiert",
    pausedSubtitle: "Klicke in das Spielfeld, um die Mauszeiger-Sperre zu reaktivieren",
    stageCaption: "Klicke im exakten Moment des grünen Aufleuchtens. Halte strikte Disziplin gegen verfrühte Täuschungsreize.",
    rulesTitle: "Trainingsregeln & Punktesystem",
    rulesItems: [
      { num: "1", text: "Reflex-Treffer", highlight: "+100 PTS (+2 s, max. 60 s)", result: "×Combo-Multiplikator" },
      { num: "2", text: "Geschwindigkeits-Bonus", highlight: "Treffer <500 ms", result: "Bis zu +150 PTS (≤150 ms)" },
      { num: "3", text: "Levelaufstieg", highlight: "+1 Level / 1400 PTS", result: "Adaptive Zeitfenster" },
      { num: "4", text: "Fehlklick / Frühstart", highlight: "Auch Feints & Timeouts", result: "Combo-Reset (-1 s)" }
    ],
    aboutTitle: "Über den FPS-Reflextest",
    aboutHeading: "Was ist das FPS-Reaktionszeit-Training?",
    aboutText1: "Die FPS-Reaktionszeit bezeichnet das zeitliche Intervall vom ersten optischen Erfassen eines Gegners bis zum physischen Mausklick. Bei gesunden Erwachsenen liegt dieser Wert bei 200 bis 250 Millisekunden (Donders, 1969; Woods et al., 2015).",
    aboutText2: "Dieser Trainer isoliert deine visuelle Klickreaktion und schult dein Nervensystem darauf, Reize im zentralen Sichtfeld mit minimaler synaptischer Verzögerung in motorische Impulse umzusetzen.",
    aboutText3: "Gleichzeitig trainierst du deine Impulskontrolle: Zufällige Verzögerungen und Täuschungsreize zwingen dich dazu, erst bei echter Reizbestätigung auszulösen, statt unkontrolliert auf Verdacht vorzuschießen."
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

      <InstantResponseClient copy={copyDe} />

      <DrillGuide guide={instantResponseGuideDe} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
