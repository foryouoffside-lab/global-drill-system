import ProSmoothPursuitClient from '@/app/drills/fps/pro-smooth-pursuit/ProSmoothPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import { pickSources } from '@/lib/drillSources';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';

export const metadata = {
  title: "Smooth Tracking üben: Kurvenziele verfolgen | SkillDrills",
  description: "Smooth Tracking üben im Browser: Halte das Fadenkreuz mit der Maus auf einem Ziel, das auf Lissajous-Kurven gleitet – kostenlos, für Apex und Overwatch 2.",
  keywords: [
    "Smooth Tracking",
    "Smooth Tracking üben",
    "flüssiges Tracking",
    "Kurvenziele verfolgen",
    "Tracking üben",
    "Smooth Pursuit"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit",
    languages: getAlternateLanguages('/drills/fps/pro-smooth-pursuit'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Smooth Tracking üben: Kurvenziele verfolgen | SkillDrills",
    description: "Smooth Tracking üben im Browser: Halte das Fadenkreuz mit der Maus auf einem Ziel, das auf Lissajous-Kurven gleitet – kostenlos, für Apex und Overwatch 2.",
    url: "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Smooth Tracking üben: Kurvenziele verfolgen | SkillDrills",
    description: "Smooth Tracking üben im Browser: Halte das Fadenkreuz mit der Maus auf einem Ziel, das auf Lissajous-Kurven gleitet – kostenlos, für Apex und Overwatch 2.",
  },
};

export default function GermanProSmoothPursuitPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Training", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Smooth Tracking üben", "item": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit" }
    ]
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Smooth Tracking üben",
    "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript and HTML5 Canvas support",
    "inLanguage": "de",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Kostenloses Smooth Tracking im Browser. Trainiere kontinuierliches Kurven-Tracking, harmonische Lissajous-Muster und zitterfreie Mausführung."
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
    "name": "Smooth Tracking üben",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "inLanguage": "de",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenlose Trainingssoftware für kontinuierliche Blickfolgebewegungen, Kurven-Tracking und Unterarm-Stabilisierung für kompetitive Shooter.",
    "genre": "FPS Training / Smooth Pursuit Aim",
    "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Smooth Tracking üben",
    "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit",
    "description": "Kostenlose Trainingssoftware für kontinuierliche Blickfolgebewegungen, Kurven-Tracking und Unterarm-Stabilisierung für kompetitive Shooter.",
    "dateModified": "2026-11-09",
    "inLanguage": "de",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Smooth Pursuit"],
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
        "name": "Was ist Smooth-Pursuit-Training beim FPS-Aiming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Smooth-Pursuit-Training schult die Fähigkeit des okulomotorischen Systems, sich kontinuierlich bewegende Ziele entlang geschwungener Bahnen flüssig zu fixieren, ohne in abrupte Korrektursakkaden oder ruckartige Flicks zu verfallen. Es trainiert den präzisen Abgleich zwischen Augenfolgebewegung und Mausgeschwindigkeit."
        }
      },
      {
        "@type": "Question",
        "name": "Wie unterscheidet sich Smooth Pursuit von Sakkaden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cyril Rashbass wies 1961 nach, dass Sakkaden und Blickfolgebewegungen (Smooth Pursuit) über voneinander unabhängige neuronale Schaltkreise gesteuert werden. Sakkaden sind ballistische Sprünge, ausgelöst durch Positionsfehler. Smooth Pursuit hingegen ist ein geschlossener Regelkreis, der auf Netzhaut-Geschwindigkeitsschlupf reagiert und über die Hirnareale MT/V5 und frontale Augenfelder vermittelt wird (Krauzlis, 2004)."
        }
      },
      {
        "@type": "Question",
        "name": "Warum zittert mein Aim beim Verfolgen gekrümmter Flugbahnen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zittern entsteht meist durch zu hohe Muskelspannung im Unterarm, übermäßige Reibung auf dem Mauspad oder das Fixieren des Fadenkreuzes statt des Ziels. Wer das Fadenkreuz anstarrt, verleitet das Gehirn zu hektischen Mikrokontrollen, die sich als Handzittern manifestieren."
        }
      },
      {
        "@type": "Question",
        "name": "Was versteht man unter fovealem Blick-Voraus-Führen (Gaze Leading)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gemeint ist, das Ziel und seine Bewegungsrichtung anzuschauen statt das eigene Fadenkreuz. Land & McLeod (2000) beschreiben, dass der Blick geübter Personen der nächsten Handlung vorausläuft; wer dem Ziel mit den Augen folgt, kann sich leichter auf Kurvenwechsel einstellen."
        }
      },
      {
        "@type": "Question",
        "name": "Warum ist Smooth Pursuit in High-TTK-Spielen wie Apex Legends und Overwatch 2 entscheidend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Shootern mit langer Time-to-Kill (High TTK) überstehen Gegner mehrere Sekunden Dauerbeschuss, während sie Ausweichmanöver wie Slides oder Wallbounces vollziehen. Duelle gewinnt man nur durch ununterbrochene Treffer-Uptime via Smooth Pursuit statt durch einzelne Glückstreffer."
        }
      },
      {
        "@type": "Question",
        "name": "Was ist eine Lissajous-Kurve und warum wird sie für Tracking-Training genutzt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Lissajous-Kurve entsteht durch zwei senkrecht aufeinanderstehende Sinusschwingungen mit unterschiedlichen Frequenzen. Sie erzeugt stetig wechselnde Beschleunigungsmuster, die lineares Auswendiglernen unmöglich machen und echte Reaktionsverfolgung fordern."
        }
      },
      {
        "@type": "Question",
        "name": "Wie beeinflussen Monitor-Bildwiederholrate und Maus-Polling das Tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Höhere Bildwiederholraten verkürzen das Bildintervall (60 Hz ≈ 16,7 ms, 144 Hz ≈ 6,9 ms), sodass Kurvenbewegungen feiner dargestellt werden. Eine Mausabfragerate von 1000 Hz kann die Eingabe gleichmäßiger machen. Für den Score zählen Übung und individuelle Unterschiede aber oft mehr als die Hardware."
        }
      },
      {
        "@type": "Question",
        "name": "Welcher Mausgriff bietet die höchste Stabilität für kontinuierliches Tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein entspannter Claw- oder Palm-Claw-Griff mit stabiler Handflächenauflage bietet überlegene Tracking-Ruhe. Er verankert die Bewegung am Ellbogen und verhindert unkontrollierte Fingerzuckungen bei weiten Kreisbögen."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte Smooth Pursuit trainiert werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tägliche Einheiten von 10 bis 15 Minuten vor kompetitiven Matches wärmen die Unterarmmuskulatur auf und synchronisieren die Augenfolgebewegung. Mach Pausen, sobald Unterarm oder Handgelenk ermüden oder schmerzen."
        }
      },
      {
        "@type": "Question",
        "name": "Warum setzt das Verlassen des Ziels den Multiplikator zurück?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das Zurücksetzen der Combo belohnt ununterbrochenes Tracking. Solange das Fadenkreuz auf dem Ziel liegt, gibt es alle 0,25 Sekunden 50 Basispunkte (mal Combo- und Level-Multiplikator) und 0,1 Sekunden Zusatzzeit (maximal 60 Sekunden); jede volle Sekunde erhöht die Combo um 1, bis 3,0×. Wer das Ziel 1,0 Sekunde am Stück verlässt, verliert die Combo. Die Runde startet mit 45 Sekunden."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung: Smooth-Pursuit-Tracking trainieren",
    "description": "Schritt-für-Schritt-Anleitung zur Verfeinerung kontinuierlicher Blickfolgebewegungen und Unterarm-Mausführung entlang Lissajous-Kurven.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sensitivität präzise einstellen",
        "text": "Stelle den Sensitivitäts-Multiplikator in den Einstellungen auf /drills so ein, dass er sich wie dein Spiel anfühlt.",
        "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Pointer Lock aktivieren",
        "text": "Klicke auf Start: Der Drill wechselt in den Vollbildmodus und sperrt den Mauszeiger nach dem Countdown (Pointer Lock). Die Windows-Zeigerbeschleunigung solltest du selbst ausschalten.",
        "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Fovealen Blick auf das Ziel richten",
        "text": "Fixiere deine Augen direkt auf die führende Kante des Zielmodells, statt auf das eigene Fadenkreuz zu schauen.",
        "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Kurvengeschwindigkeit flüssig anpassen",
        "text": "Führe die Maus mit entspanntem Unterarm aus dem Ellbogen heraus und passe dein Tempo harmonisch an Kurvenwechsel an.",
        "url": "https://skilldrills.online/de/drills/fps/pro-smooth-pursuit#step-4"
      }
    ]
  };

  const proSmoothPursuitGuide = {
    heading: "Smooth Tracking üben: Leitfaden für Kurvenziele",
    intro: [
      "Smooth Tracking üben heißt, das Fadenkreuz ruhig und ohne Unterbrechung auf einem bewegten Ziel zu führen. Dieser Drill lässt ein rundes Ziel auf Lissajous-Kurven gleiten und misst, wie viel Prozent der Zeit dein Fadenkreuz darauf liegt – nützlich als Übung für Apex, Overwatch 2 und andere Shooter mit langer TTK.",
      "Die neurobiologischen Grundlagen der Blickfolgebewegung wurden maßgeblich von Richard J. Krauzlis (2004) entschlüsselt: Oszillierende Augenbewegungen werden über kortikale Rückkopplungsschleifen zwischen dem medialen superioren temporalen Areal (MST), dem frontalen Augenfeld (FEF) und dem primären visuellen Bewegungskortex (MT/V5) reguliert. Statt bloß passiv zu reagieren, modelliert dieser neuronale Schaltkreis Geschwindigkeitsvektoren voraus, um die Augenmuskulatur in Echtzeit anzusteuern.",
      "Bereits 1961 bewies Cyril Rashbass in wegweisenden psychophysischen Experimenten, dass Blickfolgebewegungen und Sakkaden anatomisch wie funktional getrennt agieren: Sakkaden springen auf Positionsfehler an, während Smooth Pursuit rein auf visuelle Geschwindigkeitsdifferenzen (Netzhaut-Schlupf) reagiert. Versuchen Spieler, einem bewegten Ziel mit ruckartigen Mini-Flicks hinterherzujagen, unterbrechen sie diesen geschlossenen Regelkreis und provozieren unfreiwillige Korrektursakkaden, die das Fadenkreuz unruhig zucken lassen.",
      "Durch die Verbindung harmonischer Lissajous-Koordinaten mit den Prinzipien des fovealen Blick-Voraus-Führens (Land & McLeod, 2000), dynamischer Aufmerksamkeits-Erweiterung (Green & Bavelier, 2003) und browserbasierter Zeitmessung (Woods et al., 2015) zielt dieser Drill darauf ab, Unterarmspannung abzubauen und das Fadenkreuz ruhig entlang der Kurve zu führen.",
      "Messmethodik: Jedes Ereignis wird mit dem hochauflösenden performance.now()-Zeitstempel deines Browsers lokal erfasst – es werden keine Daten hochgeladen. Zu beachten: Aus Sicherheitsgründen (Spectre-Schutz) runden Browser Zeitmessungen auf etwa 1 ms. Bildschirme quantisieren die Darstellung auf Bildintervalle (~16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz nach Woods et al., 2015). Differenzen unter 5 ms stellen messtechnisches Rauschen dar. Vergleiche deine Ergebnisse daher primär auf demselben Setup."
    ],
    benchmarks: {
      title: "Smooth Tracking: SkillDrills-Übungsstufen",
      headers: ["Übungsstufe", "Ziel-Verweildauer %", "Typisches Bild", "Übungsfokus"],
      rows: [
        ["Stufe 1", "85 % – 95 %+", "Fadenkreuz bleibt auch in Wendepunkten fast durchgehend auf dem Ziel", "Verweildauer auch auf hohen Levels halten"],
        ["Stufe 2", "72 % – 85 %", "Bremst am Scheitelpunkt sauber mit dem Ziel ab", "Im schnellen Mittelteil nicht zurückfallen"],
        ["Stufe 3", "58 % – 72 %", "Gerade Abschnitte stabil, kurze Abrisse bei Richtungswechseln", "Vor dem Wendepunkt früher abbremsen"],
        ["Stufe 4", "42 % – 58 %", "Nachflicken statt Gleiten; Ruckler und Übersteuern", "Griff lockern, aus dem Unterarm führen"],
        ["Stufe 5", "Unter 42 %", "Fadenkreuz hinkt hinterher, häufige große Korrektur-Flicks", "Auf niedrigen Levels das Draufbleiben lernen"]
      ],
      note: "Die Verweildauer ist der Anteil der Frames, in denen das Fadenkreuz auf dem Ziel lag. Die Stufen sind SkillDrills-Übungsstufen zur Selbsteinschätzung – keine Forschungsnormen und keine Nutzerstatistik."
    },
    techniques: {
      title: "Vier Ansätze für ruhiges Smooth Tracking",
      items: [
        {
          name: "Foveales Blick-Voraus-Führen statt Fadenkreuz-Fixierung",
          desc: "Schauen Sie niemals direkt auf Ihr Fadenkreuz während des Trackings. Land & McLeod (2000) beschreiben, wie der Blick der Handlung vorausläuft. Richten Sie den Blick auf das Ziel und seine Bewegungsrichtung, damit Hand und Fadenkreuz leichter folgen.",
          tips: "Wenn sich das Zielen ruckelig anfühlt, richten Sie die Augen bewusst ganz auf die Zieloberfläche und atmen Sie langsam aus."
        },
        {
          name: "Lösen von Muskel-Mikrospannungen & Gelenkentkopplung",
          desc: "Muskelanspannung ist die Hauptursache für Zitterbewegungen. Ein verkrampfter Unterarm aktiviert antagonistische Muskelgruppen und erzeugt Zittern. Legen Sie den Unterarm entspannt auf das Mauspad auf und führen Sie weite Kurven aus dem Ellbogengelenk statt aus dem Handgelenk.",
          tips: "Halten Sie die Maus nur so fest wie nötig – eine lockere Hand erleichtert flüssiges Tracking."
        },
        {
          name: "Harmonische Kurvengeschwindigkeit antizipieren",
          desc: "Lissajous-Kurven folgen sinusförmigen Bewegungsgesetzen: Sie verlangsamen sich an den Wendepunkten und beschleunigen im Zentrum. Mit Übung lernen Sie diesen Rhythmus, sodass Sie vor der Kurve sanft abbremsen und danach beschleunigen, ohne den Anschluss zu verlieren.",
          tips: "Achten Sie auf den Rhythmus der Zielbewegung und antizipieren Sie die Kurvenumkehr."
        },
        {
          name: "Unterdrückung von Korrektur-Sakkaden",
          desc: "Wenn Sie vom Ziel abrutschen, widerstehen Sie dem Drang, ruckartig zurückzuflicken. Hektisches Zurückreißen führt leicht zum Übersteuern auf die andere Seite. Beschleunigen Sie Ihre Gleitbewegung stattdessen geschmeidig, um das Ziel wieder einzufangen.",
          tips: "Betrachten Sie Tracking wie das Steuern eines Wagens auf nasser Fahrbahn – weiches Nachlenken schlägt hektisches Reißen."
        }
      ]
    },
    steps: [
      "Stelle den Sensitivitäts-Multiplikator auf /drills ein und klicke auf Start; nach dem Countdown wird der Zeiger gesperrt.",
      "Fixiere das leuchtende Zielmodell, sobald es seine harmonische Lissajous-Bahn über den Bildschirm beginnt.",
      "Gleite mit entspanntem Unterarm aus dem Ellbogen heraus und passe deine Geschwindigkeit nahtlos an die Kurven an.",
      "Baue deine kontinuierliche Trefferzeit auf, um den Combo-Multiplikator auf bis zu 3,0x zu steigern und alle 1400 Punkte aufzusteigen.",
      "Analysiere deine prozentuale Verweildauer und Abrisszeiten im Abschlussbericht, um Schwachstellen bei Richtungswechseln zu erkennen."
    ],
    audience: "Kompetitive FPS-Tracking-Spezialisten in Apex Legends, Overwatch 2, The Finals und Warzone, die zitterfreie Strahlpräzision, ruhige Augenführung und hohe Schadens-Uptime gegen agile Gegner aufbauen wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'krauzlis2004', 'green2003', 'rashbass1961', 'land2000'),
    related: [
      { href: "/de/drills/fps/anti-zigzag-movement-trainer", label: "Anti-Zigzag Aim Trainer" },
      { href: "/de/drills/fps/anti-strafe-jitter-duel", label: "ADAD-Tracking (Anti-Strafe)" },
      { href: "/de/drills/fps/strafe-tracking", label: "Tracking Aim Training (Strafe-Übung)" },
      { href: "/de/drills/reaction-speed/fps-tracking-trainer", label: "FPS Tracking Trainer" },
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Trainer" },
      { href: "/de/drills/reaction-speed/visual-tracking-speed-test", label: "Visual Tracking Speed Test" }
    ]
  };

  const copyDe = {
    h1Keyword: "Smooth Tracking üben",
    h1Suffix: ": Kurvenziele verfolgen",
    statScore: "Punkte",
    statTime: "Verbleibende Zeit",
    statAccuracy: "Tracking-Präzision",
    statBestScore: "Highscore",
    startTitle: "Smooth Tracking",
    startSubtitle: "Lissajous-Kurven • Pointer Lock • Stufenlose Progression",
    getReady: "BEREIT MACHEN",
    stageCaption: "Führe dein Fadenkreuz kontinuierlich und ohne Ruckeln auf dem oszillierenden Ziel entlang flüssiger Kurvenbahnen.",
    rulesTitle: "Trainingsanleitung & Punktesystem",
    rulesItems: [
      { num: "1", text: "Auf dem Ziel", highlight: "+50 PTS je 0,25s (+0,4s/s)", result: "×Combo-Multiplikator" },
      { num: "2", text: "1s ununterbrochen", highlight: "Combo +1, bis 3,0×", result: "Max. Multiplikator" },
      { num: "3", text: "Levelaufstieg", highlight: "+1 Level / 1400 PTS", result: "Adaptive Kurven" },
      { num: "4", text: "Zielverlust", highlight: "1,0s am Stück daneben", result: "Combo-Reset" }
    ],
    aboutTitle: "Über Smooth Tracking"
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
      <ProSmoothPursuitClient copy={copyDe} />
      <RelatedDrills />
      <DrillGuide guide={proSmoothPursuitGuide} />
      <DrillFooter />
    </>
  );
}
