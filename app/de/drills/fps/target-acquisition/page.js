import TargetAcquisitionClient from '@/app/drills/fps/target-acquisition/TargetAcquisitionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Valorant Aim Trainer - Zielerfassung & First Shot",
  description: "Kostenloser Valorant Aim Trainer im Browser: Triff 3–8 unterschiedlich helle Ziele vom hellsten zum dunkelsten und übe Zielerfassung und den ersten Schuss.",
  keywords: [
    "Valorant Aim Trainer",
    "Aim Trainer Valorant",
    "Valorant Aim Training",
    "Zielerfassung",
    "Zielerkennung FPS",
    "Erster Schuss Genauigkeit",
    "First Shot Accuracy",
    "Gegner schneller erkennen",
    "Kontrast-Erkennung",
    "Fadenkreuz Platzierung",
    "FPS Zielerfassung"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/target-acquisition",
    languages: getAlternateLanguages('/drills/fps/target-acquisition'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Valorant Aim Trainer - Zielerfassung & First Shot",
    description: "Kostenloser Valorant Aim Trainer im Browser: Triff 3–8 unterschiedlich helle Ziele vom hellsten zum dunkelsten und übe Zielerfassung und den ersten Schuss.",
    url: "https://skilldrills.online/de/drills/fps/target-acquisition",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Valorant Aim Trainer - Zielerfassung & First Shot",
    description: "Kostenloser Valorant Aim Trainer im Browser: Triff 3–8 unterschiedlich helle Ziele vom hellsten zum dunkelsten und übe Zielerfassung und den ersten Schuss.",
  },
};

export default function TargetAcquisitionDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Aim Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Zielerfassung FPS", "item": "https://skilldrills.online/de/drills/fps/target-acquisition" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Reaction_time"],
    "name": "Valorant Aim Trainer - Zielerfassung & First Shot",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Zielerfassungs-Trainer",
    "url": "https://skilldrills.online/de/drills/fps/target-acquisition",
    "applicationCategory": "Trainer",
    "browserRequirements": "Requires Pointer Lock API, modern web browser, 60Hz+ monitor recommended"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Zielerfassungs-Trainer",
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
        "name": "Wie funktioniert dieser Valorant Aim Trainer für Zielerfassung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Durchgang dauert 60 Sekunden. Es erscheinen Sets aus 3 bis 8 unterschiedlich hellen Zielen, die du vom hellsten zum dunkelsten treffen musst. Ein richtiger Treffer bringt +100 Punkte mal Combo- und Level-Multiplikator, ein geräumtes Set +400 Punkte mal Level-Multiplikator und ein neues Set. Ein Klick auf das falsche Ziel oder ins Leere setzt die Combo zurück. Gespielt wird mit Maus und Pointer Lock, Esc beendet den Drill. SkillDrills ist ein unabhängiges Übungstool ohne Verbindung zu Riot Games."
        }
      },
      {
        "@type": "Question",
        "name": "Was bedeutet Zielerfassung (Target Acquisition) in taktischen Ego-Shootern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zielerfassung ist der kognitive und motorische Prozess, bei dem ein Spieler ein feindliches Ziel inmitten visueller Hintergrundreize blitzschnell identifiziert, das Fadenkreuz darauf ausrichtet und den ersten Schuss präzise platziert."
        }
      },
      {
        "@type": "Question",
        "name": "Wie unterscheidet sich Zielerfassung von reiner Reaktionszeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reine Reaktionszeit misst nur die Latenz auf einen simplen, erwarteten Reiz an bekannter Position. Zielerfassung erfordert zusätzlich visuelle Suche, räumliche Selektion, Kontrastunterscheidung und eine ballistische Zielbewegung unter Zeitdruck."
        }
      },
      {
        "@type": "Question",
        "name": "Was besagt die Merkmals-Integrations-Theorie (Treisman & Gelade) über das Erkennen von Zielen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Basale Merkmale wie Helligkeit, Farbe und Silhouette werden im menschlichen Sehsystem zunächst unbewusst und parallel verarbeitet (Pre-Attentive Phase). Erst im zweiten Schritt bündelt fokussierte Aufmerksamkeit diese Merkmale zu einem identifizierten Zielobjekt."
        }
      },
      {
        "@type": "Question",
        "name": "Wie setze ich die Augen ein, um Ziele schneller zu erfassen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach dem Guided-Search-Modell (Wolfe, 2007) lenken auffällige Merkmale die Aufmerksamkeit zuerst. Statt den Bildschirm zeilenweise abzusuchen, hältst du den Blick in der Mitte, findest das auffälligste Ziel und führst die Maus dorthin, wo dein Blick schon ist. Genau diese Abfolge wiederholst du in diesem Drill."
        }
      },
      {
        "@type": "Question",
        "name": "Warum entscheidet der erste Schuss (First Shot Accuracy) in CS2 und Valorant über den Duellsieg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bei niedriger Time-to-Kill (TTK) entscheidet oft der erste Treffer das Duell. Verfehlt der erste Schuss, bekommt der Gegner Zeit zum Kontern. Dieser Drill simuliert keine echten Kopfschüsse, isoliert aber die Gewohnheit, erst das richtige Ziel zu wählen und dann sauber den ersten Klick zu setzen."
        }
      },
      {
        "@type": "Question",
        "name": "Sollte man beim Suchen von Gegnern den Blick starr zentrieren oder die Augen bewegen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideal ist ein entspannter Soft Focus: Das Sehzentrum bleibt auf der vermuteten Vorhaltelinie (Crosshair Placement), während das periphere Sehen weite Winkel überwacht. Sobald ein Reiz auftritt, führt eine gezielte Sakkade das Fadenkreuz direkt heran."
        }
      },
      {
        "@type": "Question",
        "name": "Wie beeinflusst visuelle Unruhe (Visual Clutter) die Zielerfassungszeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partikeleffekte, Rauch und komplexe Texturen stören den automatischen Pop-Out-Effekt. Das Gehirn muss dann eher seriell suchen, und das Finden des Ziels dauert länger (Treisman & Gelade, 1980). In diesem Drill steigt mit dem Level die Zielanzahl und die Helligkeitsunterschiede sinken, sodass du diesen Effekt direkt spürst."
        }
      },
      {
        "@type": "Question",
        "name": "Welcher Mausgriff eignet sich am besten für schnelle Zielerfassung?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claw-Grip und Fingertip-Grip bieten optimale Hebelverhältnisse: Der Unterarm liefert die Kraft für weite Flicks, während die Fingergelenke im Moment der Zielankunft Mikrokontrolle ermöglichen."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Rolle spielen Monitor-Kontrast und Black-Equalizer-Einstellungen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein sauber eingestellter Gamma- und Kontrastwert sowie Gaming-Features wie Black eQualizer können dunkle Spielermodelle vor schattigen Hintergründen sichtbarer machen. Wie groß der Effekt ist, hängt von Monitor und Spiel ab."
        }
      },
      {
        "@type": "Question",
        "name": "Warum führt ein Klick auf das falsche Ziel in diesem Trainer zum Combo-Verlust?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Trainer belohnt Zielpriorisierung: Das Ziel mit der höchsten Helligkeit symbolisiert die unmittelbare Bedrohung. Unkontrolliertes Klicken ohne visuelle Unterscheidung setzt deshalb die Combo zurück."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Zielerfassung & First-Shot-Präzision in 4 Schritten trainieren",
    "description": "Vier Schritte, um im Zielerfassungs-Drill Zielerkennung und den ersten Schuss zu üben.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mausempfindlichkeit kalibrieren & Pointer Lock aktivieren",
        "text": "Stelle die Sensitivität auf der /drills-Seite auf deine gewohnte Ingame-Sensitivität ein. Beim Start wird der Mauszeiger automatisch per Pointer Lock gesperrt."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Zentralen Soft Focus einnehmen",
        "text": "Halte die Augen entspannt auf die Bildmitte gerichtet und nimm neu erscheinende Zielgruppen über dein peripheres Gesichtsfeld wahr."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Hellstes Ziel blitzschnell identifizieren",
        "text": "Filtere visuelle Störfaktoren heraus und erfasse das Ziel mit der höchsten Deckkraft (höchste Bedrohungspriorität) in Sekundenbruchteilen."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Präziser Flick und Schussabgabe",
        "text": "Bewege das Fadenkreuz in einer sauberen Linie auf das Zielzentrum, stoppe über Handballenreibung ab und löse sauber aus."
      }
    ]
  };

  const targetAcquisitionGuideDe = {
    heading: "Valorant Aim Trainer: Zielerfassung und First-Shot-Accuracy",
    subtitle: "Ziele über Helligkeit priorisieren und den ersten Schuss sauber setzen – Übung für Valorant- und CS2-Spieler",
    intro: [
      "Dieser kostenlose Valorant Aim Trainer im Browser übt Zielerfassung: 60 Sekunden lang erscheinen 3 bis 8 unterschiedlich helle Ziele, die du vom hellsten zum dunkelsten treffen musst. So trainierst du, erst das richtige Ziel zu wählen und dann den ersten Schuss sauber zu setzen – nützlich für Valorant, CS2 und andere Shooter, in denen der erste Treffer zählt. SkillDrills ist ein unabhängiges Tool ohne Verbindung zu Riot Games.",
      "Die theoretische Grundlage der visuellen Objekterkennung und Zielsuche formulierten Anne Treisman und Garry Gelade (1980) in ihrer Merkmals-Integrations-Theorie (Feature-Integration Theory). Treisman wies nach, dass elementare optische Merkmale wie Leuchtdichtekontrast, Farbunterschiede (Pop-Out) und Kantenorientierung zunächst vorattentiv und vollkommen parallel über das gesamte Sehfeld extrahiert werden. Erst wenn die fokussierte räumliche Aufmerksamkeit auf eine präzise Koordinate gerichtet wird, verschmelzen diese Einzeleigenschaften zu einer identifizierbaren Bedrohung.",
      "In Erweiterung der parallelen Informationsverarbeitung beschreibt Jeremy M. Wolfes (1994, 2007) Guided-Search-Modell, wie kognitive Erwartungshaltungen (Top-Down) und sensorische Salienz-Karten (Bottom-Up) interagieren, um die visuelle Aufmerksamkeit zu priorisieren. Durch gezieltes Training der Kontrastdiskriminierung lernt der primäre visuelle Kortex, irrelevante visuelle Störsignale und Hintergrundelemente schlagartig zu verwerfen, was die Zeit zwischen Zielerscheinen und Bewegungsbeginn in dieser Aufgabe verkürzen kann (ohne Garantie für das Match).",
      "Unter Einbeziehung von Paul M. Fitts’ (1954) motorischem Index of Difficulty, David E. Meyer et al.s (1988) Stochastic Optimized Submovement Model und digitaler Präzisionschronometrie (Woods et al., 2015) konzentriert sich dieser Drill darauf, ohne Zögern den ersten Flick zu starten und im Ziel sauber abzubremsen. Eine Verbesserung im Match ist nicht garantiert; der Drill dient dazu, deine eigenen Werte über die Zeit zu vergleichen.",
      "Hinweis zu den Werten: Der Ergebnisbildschirm zeigt Punkte, Präzision (richtige Treffer ÷ alle Klicks), geräumte Sets, maximale Combo und erreichtes Level. Dein Highscore wird nur in diesem Browser gespeichert. Reaktionszeiten in Millisekunden misst dieser Drill nicht. Bildwiederholrate und Maus-Abtastrate beeinflussen das Spielgefühl, vergleiche deshalb deine Werte auf derselben Hardware statt mit anderen Setups."
    ],
    benchmarks: {
      title: "Präzisions-Übungsbereiche im Zielerfassungs-Drill",
      headers: ["Übungsbereich", "Präzision", "Bedeutung"],
      rows: [
        ["Bereich 1", "ab 95 %", "Kaum Reihenfolgefehler oder Klicks ins Leere"],
        ["Bereich 2", "88 – 95 %", "Auch auf hohen Leveln meist zuerst das hellste Ziel gewählt"],
        ["Bereich 3", "80 – 88 %", "Bei vielen Zielen schleichen sich Reihenfolgefehler ein"],
        ["Bereich 4", "70 – 80 %", "Ähnlich helle Ziele werden oft verwechselt"],
        ["Bereich 5", "unter 70 %", "Erst Reihenfolge sichern, dann Tempo erhöhen"]
      ],
      note: "Präzision ist der Wert auf dem Ergebnisbildschirm (richtige Treffer ÷ alle Klicks). Die Bereiche sind SkillDrills-Übungsbereiche, keine Forschungsnormen, Spielränge oder Nutzerstatistiken."
    },
    techniques: {
      title: "Biomechanische & kognitive Methoden für maximale Erfassungsgeschwindigkeit",
      items: [
        {
          name: "Peripheres Scanning & Soft Focus",
          desc: "Vermeide es, den Bildschirm zeilenweise mit den Augen abzusuchen. Halte deinen Blick entspannt auf der Bildschirmmitte und nutze das periphere Sehen für automatische Helligkeits-Erkennung (Treisman & Gelade, 1980).",
          tips: "Ein weicher Blickwinkel erweitert das wahrgenommene Sichtfeld und beschleunigt das Erkennen auftauchender Konturen."
        },
        {
          name: "Sakkadische Blickkopplung",
          desc: "Kopple Augen- und Handbewegung: Zuerst springt der Blick (Sakkade) auf das Zielzentrum, gefolgt vom sofortigen Mausschwung entlang desselben Vektors.",
          tips: "Achte darauf, dass dein Blick schon auf dem Zielzentrum liegt, bevor du die Maus bewegst."
        },
        {
          name: "Helligkeits-Diskriminierungsschwelle",
          desc: "Trainiere dein Gehirn darauf, subtile Deckkraft- und Farbabweichungen zu gewichten und sekundäre Störelemente konsequent zu ignorieren.",
          tips: "Schieße erst, wenn du das hellste Ziel im Cluster eindeutig identifiziert hast – Disziplin schlägt Hektik."
        },
        {
          name: "Endphasen-Bremsung über das Mauspad",
          desc: "Nutze die Reibung deines Mauspads und leichten Fingerkuppendruck, um den ballistischen Anfangsflick exakt im Zielzentrum abzustoppen (Meyer et al., 1988).",
          tips: "Ein definierter Stopp verhindert Überschwingen und sichert die First-Shot-Accuracy."
        }
      ]
    },
    steps: [
      "Stelle die Sensitivität auf der /drills-Seite auf deine Ingame-Sensitivität ein und starte; Pointer Lock wird automatisch aktiviert.",
      "Halte das Fadenkreuz in ruhiger Bereitschaft und scanne das Display mit entspanntem Soft Focus.",
      "Erfasse im erscheinenden Cluster sofort das Ziel mit der höchsten Helligkeit/Deckkraft.",
      "Führe einen präzisen Flick auf das Ziel aus und sichere dir +100 Punkte × Combo- und Level-Multiplikator. Die Zeit ist auf 60 Sekunden fest und verlängert sich durch Treffer nicht.",
      "Räume die übrigen Ziele nach Helligkeit ab, um den Set-Bonus (+400 Punkte × Level-Multiplikator) zu holen."
    ],
    audience: "Wettkampfspieler in Counter-Strike 2, Valorant, Rainbow Six Siege, Apex Legends und Overwatch 2, die Zielauswahl und den ersten Schuss gezielt üben wollen. Eine Maus wird benötigt.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/micro-correction-precision", label: "Mikrokorrektur Aiming" },
      { href: "/de/drills/fps/180-degree-awareness", label: "180 Grad Aiming" },
      { href: "/de/drills/fps/instant-response", label: "FPS Reaktionszeit Test" }
    ]
  };

  const copyDe = {
    h1Keyword: "Valorant Aim Trainer",
    h1Suffix: " – Zielerfassung & First Shot",
    subtitle: "Kostenlos für Valorant-Spieler: Triff Ziele vom hellsten zum dunkelsten und übe den präzisen ersten Schuss im Browser.",
    statScore: "Punkte",
    statTime: "Zeit",
    statAccuracy: "Präzision",
    statBestScore: "Highscore",
    statSetsCleared: "Sets gelöscht",
    statMaxCombo: "Max Combo",
    statPeakLevel: "Level",
    startTitle: "Target Acquisition Pro",
    startSubtitle: "Visuelle Erkennung • Endlose Levelprogression & Kontrast-Aiming",
    getReady: "BEREITMACHEN",
    toggleFlash: "Fehlschuss-Aufleuchten umschalten",
    toggleSound: "Soundeffekte umschalten",
    pausedTitle: "Spiel Pausiert",
    pausedSubtitle: "Klicke in das Spielfeld, um die Mauszeiger-Sperre zu reaktivieren",
    stageCaption: "Finde und klicke in jedem Ziel-Cluster das hellste Ziel (höchste Deckkraft) mit maximaler Geschwindigkeit und Präzision.",
    rulesTitle: "Trainingsregeln & Punktesystem",
    rulesItems: [
      { num: "1", text: "Zieltreffer", highlight: "+100 PKT × Level", result: "×Combo-Multiplikator" },
      { num: "2", text: "Set geräumt", highlight: "+400 PKT × Level", result: "Neues Cluster" },
      { num: "3", text: "Levelaufstieg", highlight: "+1 / 1400 PKT", result: "Dynamische Dichte & Tempo" },
      { num: "4", text: "Fehlklick / Miss", highlight: "Strafe", result: "Combo-Reset" }
    ],
    aboutTitle: "Über das Zielerfassungs-Training",
    aboutHeading: "Was bedeutet Zielerfassung (Target Acquisition) im Shooter?",
    aboutText: "Zielerfassung ist der kognitive und motorische Prozess, feindliche Ziele in komplexen Szenarien sofort zu erkennen und mit dem ersten Schuss auszuschalten. Da Helligkeitsunterschiede im Sehsystem parallel verarbeitet werden (Treisman & Gelade, 1980), übt dieser Drill, das wichtigste Ziel über den Helligkeitsunterschied zu wählen und es mit dem ersten Klick zu treffen."
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

      <TargetAcquisitionClient copy={copyDe} />

      <DrillGuide guide={targetAcquisitionGuideDe} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
