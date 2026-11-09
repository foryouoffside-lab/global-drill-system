import FlowStateClient from '@/app/drills/fps/flow-state/FlowStateClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: "FPS Fokus Training | Flow State & Konzentration | SkillDrills",
  description: "Kostenloses FPS Fokus Training: Halte das Fadenkreuz auf einem Ziel auf Kurvenbahnen. 1 s daneben beendet die Combo, jedes Level macht das Ziel kleiner.",
  keywords: [
    "FPS Fokus Training",
    "Flow-Zustand Gaming",
    "Konzentration beim Zielen",
    "Smooth Pursuit Tracking",
    "Aim Ausdauer",
    "Flow Zustand erreichen Gaming",
    "Flow State Training",
    "Fokus Training Valorant",
    "Konzentration Tracking",
    "Konzentration Shooter"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/flow-state",
    languages: getAlternateLanguages('/drills/fps/flow-state'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "FPS Fokus Training | Flow State & Konzentration | SkillDrills",
    description: "Kostenloses FPS Fokus Training: Halte das Fadenkreuz auf einem Ziel auf Kurvenbahnen. 1 s daneben beendet die Combo, jedes Level macht das Ziel kleiner.",
    url: "https://skilldrills.online/de/drills/fps/flow-state",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "FPS Fokus Training | Flow State & Konzentration | SkillDrills",
    description: "Kostenloses FPS Fokus Training: Halte das Fadenkreuz auf einem Ziel auf Kurvenbahnen. 1 s daneben beendet die Combo, jedes Level macht das Ziel kleiner.",
  },
};

export default function GermanFlowStatePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "FPS Fokus Training", "item": "https://skilldrills.online/de/drills/fps/flow-state" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FPS Fokus Training",
    "url": "https://skilldrills.online/de/drills/fps/flow-state",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "inLanguage": "de",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Kostenloses FPS Fokus Training im Browser: ein Ziel auf Bézier-Kurven ohne Unterbrechung verfolgen und Konzentration beim Zielen üben."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Flow_(psychology)"],
    "name": "FPS Fokus Training",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "inLanguage": "de",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Trainiere Konzentrationsausdauer, Daueraufmerksamkeit und Flow-Zustand-Tracking für kompetitive Shooter.",
    "genre": "FPS Training / Flow State",
    "url": "https://skilldrills.online/de/drills/fps/flow-state",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "FPS Fokus Training",
    "url": "https://skilldrills.online/de/drills/fps/flow-state",
    "description": "Trainiere Konzentrationsausdauer, Daueraufmerksamkeit und Flow-Zustand-Tracking für kompetitive Shooter.",
    "dateModified": "2026-11-09",
    "inLanguage": "de",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Cognitive Focus"],
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
        "name": "Was ist der Flow-Zustand beim Gaming und in FPS-Shootern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Flow-Zustand (oft als 'in the zone' bezeichnet) ist ein optimaler psychologischer Zustand tiefer Konzentration nach Mihaly Csikszentmihalyi, in dem Handlungen intuitiv und mühelos ablaufen. In Shootern äußert sich Flow in flüssigem Tracking, dem Ausbleiben bewusster Zweifel und geschärfter räumlicher Wahrnehmung."
        }
      },
      {
        "@type": "Question",
        "name": "Wie gelangt man beim kompetitiven Spielen gezielt in den Flow-Zustand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vier Voraussetzungen sind erforderlich: klare Nahziele (Zielverfolgung ohne Abriss), unmittelbares Feedback, Ausschalten von Ablenkungen und die Balance zwischen Anforderung und Können. Ein kurzes Tracking-Aufwärmen vor dem Match kann helfen, Hand und Aufmerksamkeit einzustimmen, garantiert aber keinen Flow."
        }
      },
      {
        "@type": "Question",
        "name": "Was geschieht während des Flow-Zustands im Gehirn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach Arne Dietrichs Hypothese der transienten Hypofrontalität (2004) wird die Aktivität im dorsolateralen präfrontalen Kortex (DLPFC) temporär herunterreguliert. Dies schaltet störende Selbstkritik und Grübeln stumm, während Basalganglien und Kleinhirn gelernte Reflexe automatisiert und verzögerungsfrei abrufen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie wichtig ist das Challenge-Skill-Gleichgewicht für den Flow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ist eine Trainingsaufgabe zu leicht, droht Langeweile; übersteigt sie das Können, führt dies zu Frustration und Muskelspannung. Csikszentmihalyi beschreibt Flow als wahrscheinlicher, wenn Anforderung und Können zueinander passen. In diesem Drill steigt das Level mit der Punktzahl, das Ziel wird kleiner und schneller, und eine laufende Combo erhöht die Schwierigkeit leicht."
        }
      },
      {
        "@type": "Question",
        "name": "Warum eignet sich Smooth Pursuit Tracking ideal zur Flow-Induktion?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das Verfolgen kontinuierlicher Bézier-Kurven erfordert ständigen Abgleich zwischen Netzhautbild und motorischem Input (Krauzlis, 2004). Da es kaum Pausen zwischen einzelnen Klicks gibt, übst du, die Aufmerksamkeit ununterbrochen beim Ziel zu halten."
        }
      },
      {
        "@type": "Question",
        "name": "Wie lange sollte man Flow-State-Aiming trainieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine feste Regel gibt es nicht. Zum Aufwärmen vor Matches reichen ein paar Runden (etwa 5 bis 10 Minuten); längere Sessions teilst du am besten in Blöcke von rund 15 Minuten mit kurzen Pausen. Hör auf, wenn die Hand ermüdet oder die Präzision sinkt."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Rolle spielt Dopamin beim Erreichen des Flow-Zustands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dopamin wird allgemein mit Belohnung und Motivation in Verbindung gebracht, seine genaue Rolle im Flow ist aber nicht geklärt. Dieser Drill misst keine Neurochemie; er gibt nur sofortiges Feedback über Punkte und Combo."
        }
      },
      {
        "@type": "Question",
        "name": "Warum verschlechtert mentale Ermüdung das Zielen und Tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach langer Konzentration fällt es schwerer, die Aufmerksamkeit auf einem Punkt zu halten. Dann folgst du dem Ziel weniger flüssig und korrigierst häufiger spät und ruckartig. Fokus-Abbrüche und Tracking-Präzision in diesem Drill zeigen diese Veränderung."
        }
      },
      {
        "@type": "Question",
        "name": "Wie verhindert man Konzentrationseinbrüche bei langen Spielsessions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Regelmäßige 60-sekündige Augenpausen zwischen Runden, tiefe Zwerchfellatmung, ausreichende Flüssigkeitszufuhr und das bewusste Entspannen von Handgelenk und Unterarm verhindern sensorische Überlastung."
        }
      },
      {
        "@type": "Question",
        "name": "Lässt sich durch Flow-Aiming auch die Konzentration bei der Arbeit verbessern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vielleicht. Ob sich Tracking-Übungen auf Deep Work, Programmieren oder Lernen übertragen, ist nicht belegt; als kurze Konzentrationsübung kann der Drill trotzdem nützlich sein."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung: Flow-State-Fokus im Aiming trainieren",
    "description": "Schritt-für-Schritt-Anleitung zur Steigerung von Konzentrationsausdauer und visuellem Flow-Tracking.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sensitivität anpassen",
        "text": "Stelle die Mausempfindlichkeit einmal in den Einstellungen auf der Seite /drills ein; sie gilt für alle Maus-Drills. Wähle ein Gefühl, das deinem Shooter ähnelt.",
        "url": "https://skilldrills.online/de/drills/fps/flow-state#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Hardware Pointer Lock aktivieren",
        "text": "Klicke auf 'Start', um den Vollbildmodus mit Pointer Lock zu starten. Eine Maus ist erforderlich, Touch-Geräte werden nicht unterstützt.",
        "url": "https://skilldrills.online/de/drills/fps/flow-state#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Fließende Bézier-Kurven verfolgen",
        "text": "Heftet den Blick vorausschauend an den Zielpfad und antizipiert Krümmungsänderungen, statt dem Zentrum hinterherzulaufen.",
        "url": "https://skilldrills.online/de/drills/fps/flow-state#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Kontinuierliche Flow-Ketten halten",
        "text": "Jede volle Sekunde auf dem Ziel erhöht die Combo um 1, der Punktemultiplikator steigt bis 3,0x. Nach 1 Sekunde daneben wird die Combo zurückgesetzt.",
        "url": "https://skilldrills.online/de/drills/fps/flow-state#step-4"
      }
    ]
  };

  const flowStateGuide = {
    heading: "FPS-Fokus-Training und Flow-State-Benchmarks",
    intro: [
      "FPS-Fokus-Training bedeutet, ein Ziel ruhig zu verfolgen und Ablenkungen zu reduzieren. Der Drill startet mit 45 Sekunden, verlängert die Zeit, solange du auf dem Ziel bleibst, und wird mit Punktzahl und Combo schwieriger. Er misst Tracking-Genauigkeit und Konzentrationsausdauer; er verspricht keinen erzwungenen Flow, sondern zeigt, wann deine Aufmerksamkeit und Bewegungskontrolle nachlassen.",
      "Arne Dietrichs Hypothese der transienten Hypofrontalität (2004) versucht zu erklären, warum bewusste Selbstkontrolle im Flow nachlässt. Ob dieser Drill einen solchen Zustand auslöst, lässt sich nicht garantieren; er hilft aber, ununterbrochenes Tracking zu üben und zu sehen, wann deine Konzentration abreißt.",
      "Das Ziel bewegt sich auf quadratischen Bézier-Kurven; mit jedem Level wird sein Radius kleiner und die Kurven werden enger. Gesteuert wird mit der Maus im Pointer Lock, ohne Installation direkt im Browser.",
      "Messmethodik: Jedes Ereignis wird mit dem hochauflösenden performance.now()-Zeitstempel deines Browsers lokal erfasst – es werden keine Spieldaten hochgeladen. Zu beachten: Aus Sicherheitsgründen (Spectre-Schutz) runden Browser Zeitmessungen auf rund 1 ms. Bildschirme quantisieren die Darstellung auf Bildintervalle (~16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz nach Woods et al., 2015). Unterschiede unter 5 ms stellen messtechnisches Rauschen dar. Vergleiche deine Ergebnisse daher primär auf derselben Hardware."
    ],
    benchmarks: {
      title: "Kognitive Flow-Induktions- & Aufmerksamkeitsstufen",
      headers: ["Stufe", "Flow-Dimension", "Physiologischer Indikator", "Kognitiver Mechanismus", "Zielvorgabe"],
      rows: [
        ["Stufe 1", "Aufmerksamkeits-Orientierung", "Sensorisches Gating & Fixation", "Posner-Netzwerk blendet externe Umgebungsreize aus", "Eine Runde mit mindestens 50 % Tracking-Präzision"],
        ["Stufe 2", "Herausforderung-Fähigkeit-Balance", "Dynamische Geschwindigkeits-Kalibrierung", "Csikszentmihalyi-Kanal: Zieltempo passt sich motorischer Leistung an", "70–80 % kontinuierliche Verweildauer halten"],
        ["Stufe 3", "Foveale Smooth-Pursuit-Dauer", "Kontinuierlicher Geschwindigkeitsabgleich", "Krauzlis-Kortikostriatale Bahnen eliminieren Korrektur-Sakkaden", ">85 % kontinuierliches Tracking auf komplexen Bézier-Kurven"],
        ["Stufe 4", "Transiente Hypofrontalität", "DLPFC-Herunterregulierung", "Dietrich-Hypothese: Bewusste Selbstkontrolle pausiert zugunsten von Reflex-Automation", ">30 Sekunden ununterbrochene Flow-Serie ohne Zweifel"],
        ["Stufe 5", "Maximale Konzentrationsausdauer", "Ermüdungsresistenz", "Exekutive Ausdauer verhindert Latenzdegradation und Fokusverlust", "Combo 50 erreichen (maximaler Multiplikator 3,0x)"]
      ],
      note: "Die Zielwerte sind SkillDrills-Übungsstufen, keine Forschungsnormen und keine Nutzerdaten. Die Stufennamen lehnen sich an Konzepte aus Csikszentmihalyi (1975, 1990), Dietrich (2004), Krauzlis (2004) und Posner & Petersen (1990) an."
    },
    techniques: {
      title: "Wissenschaftlich fundierte Protokolle für Gaming-Flow",
      items: [
        {
          name: "Tangentiales Blick-Voraus-Führen (Predictive Pursuit)",
          desc: "Lassen Sie Ihren Blick nicht hinter dem Zentrum des Zielpunkts herhinken, sondern schauen Sie ein Stück in die Richtung, in die sich die Kurve bewegt.",
          tips: "Blicken Sie durch das Ziel hindurch in die geplante Flugbahn und lassen Sie periphere Reize minimale Korrekturen steuern."
        },
        {
          name: "Herunterregulieren der präfrontalen Selbstkritik (Hypofrontalitäts-Protokoll)",
          desc: "Flow erfordert das Beruhigen des präfrontalen Kortex (Dietrich, 2004). Innere Dialoge ('Treffe ich noch?', 'Ich rutsche ab') reaktivieren bewusste Selbstüberwachung und stören automatische Abläufe. Konzentrieren Sie sich auf ruhige Atmung und mühelose Hingabe an die Bewegung.",
          tips: "Koppeln Sie ruhige Atemzyklen an Kurvenwechsel, um das vegetative Nervensystem zu stabilisieren."
        },
        {
          name: "Dynamische Abstimmung von Anspruch und Können",
          desc: "Der Flow-Zustand reißt ab, wenn die Übung entweder unterfordert (Langeweile) oder überfordert (Anspannung). Als Übungsziel empfiehlt SkillDrills eine Tracking-Präzision von etwa 70 bis 80 %.",
          tips: "Wenn der Fokus oft abreißt, arbeiten Sie zuerst an der Präzision statt an hohen Levels. Nach einem Combo-Reset wird das Ziel wieder etwas größer und langsamer."
        },
        {
          name: "Lösen von Muskel-Mikrospannungen im Unterarm",
          desc: "Dauerhaftes Tracking führt oft zu isometrischer Verspannung im Daumenballen und Unterarm. Zu hoher Griffdruck macht feine Korrekturen ruckartig. Lösen Sie die Finger- und Handgelenksspannung bewusst bei Richtungswechseln.",
          tips: "Halten Sie die Maus mit minimalem Kraftaufwand – Lockerheit im Handgelenk ist der Schlüssel zu gleichmäßigem Tracking."
        }
      ]
    },
    steps: [
      "Stellen Sie die Mausempfindlichkeit einmal in den Einstellungen auf /drills ein; der Wert gilt für alle Maus-Drills.",
      "Klicken Sie auf 'Start', um den Vollbildmodus mit Pointer Lock zu starten.",
      "Verfolgen Sie das Ziel fokussiert auf seinen organischen, fließenden Bézier-Kurven.",
      "Bleiben Sie im Zielradius: Jede volle Sekunde erhöht die Combo, 1 Sekunde daneben setzt sie zurück.",
      "Halten Sie die Combo, um den Multiplikator zu steigern, und vergleichen Sie danach Präzision und Fokus-Abbrüche mit Ihren früheren Runden."
    ],
    audience: "Kompetitive FPS-Spieler in CS2, Valorant, Apex Legends und Overwatch 2 sowie E-Sportler und Wissensarbeiter, die anhaltende Konzentration, Ablenkungsresistenz und Zielsicherheit trainieren wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'posner1990', 'green2003', 'dietrich2004'),
    related: [
      { href: "/de/drills/reaction-speed/fps-tracking-trainer", label: "Bewegliche Ziele treffen" },
      { href: "/de/drills/fps/anti-zigzag-movement-trainer", label: "Zickzack-Tracking" },
      { href: "/de/drills/fps/anti-strafe-jitter-duel", label: "ADAD-Tracking" },
      { href: "/de/drills/fps/flick-shot-training", label: "Aim Test: Flick-Training" },
      { href: "/de/drills/reaction-speed/visual-tracking-speed-test", label: "Visual Tracking Speed Test" }
    ]
  };

  const copyDe = {
    h1Keyword: "FPS Fokus Training",
    h1Suffix: " – Flow State & Konzentration beim Zielen",
    statScore: "Punkte",
    statTime: "Verbleibende Zeit",
    statAccuracy: "Tracking-Präzision",
    statBestScore: "Highscore",
    startTitle: "FPS Fokus Training",
    startSubtitle: "Pointer Lock • Endlose Level-Progression",
    pausedTitle: "Fokus Pausiert",
    pausedSubtitle: "Klicken zum Fortsetzen – Mauszeiger wird gesperrt.",
    stageCaption: "Halte deinen Rhythmus und verfolge kontinuierliche Bewegungen entlang fließender Kurven ohne Fokusverlust.",
    rulesTitle: "Trainingsanleitung & Punktesystem",
    rulesItems: [
      { num: "1", text: "Ziel-Tracking", highlight: "+10 PTS / 0,25 s", result: "Auf dem Ziel +0,4 s/s Zeit (max. 60 s)" },
      { num: "2", text: "Flow-Multiplikator", highlight: "Bis zu 3,0x Punkte", result: "Ununterbrochene Kette halten" },
      { num: "3", text: "Level-Progression", highlight: "+1 Level / 1400 PTS", result: "Adaptive Kurvengeschwindigkeit" },
      { num: "4", text: "Fokus-Abbruch", highlight: "1,0s Zielverlust", result: "Combo-Reset" }
    ],
    aboutTitle: "Über das FPS Fokus Training"
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
      <FlowStateClient copy={copyDe} />
      <RelatedDrills />
      <DrillGuide guide={flowStateGuide} />
      <DrillFooter />
    </>
  );
}
