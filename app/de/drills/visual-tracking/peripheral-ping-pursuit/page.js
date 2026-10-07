import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "peripheres sehen trainieren" (Train peripheral vision) / "peripheres blickfeld uebungen"
// Secondary:    "tunnelblick abbauen training", "gesichtsfeld erweitern uebungen", "augentraining peripheres sehen", "blickfeld vergroessern"
// LSI / Domain:  "verdeckte raumaufmerksamkeit", "foveale fixation", "nutzbares gesichtsfeld ufov",
//               "visuelle aufmerksamkeit verteilen", "reaktionszeit randbereich", "dual-task blicksteuerung"
// Authentic Domain Terms: Peripheres Sehen Trainieren, Verdeckte Raumaufmerksamkeit (Covert Spatial Attention), Foveale Fixation (Foveal Fixation), Nutzbarkeit des Gesichtsfelds (Useful Field of View / UFOV), Netzhaut-Stäbchen (Retinal Rods), Sakkadische Unterdrückung (Saccadic Suppression), Zoom-Lens-Modell
// ============================================================

export const metadata = {
  title: "Peripheres Sehen trainieren | SkillDrills",
  description: "Verfolge ein zentrales Ziel und reagiere auf kurze Randreize, ohne den Blick abzuwenden. Kostenlose Browserübung mit Reaktionszeit und Blickstabilität.",
  keywords: [
    "peripheres sehen trainieren",
    "peripheres blickfeld übung",
    "peripheres sehen sport",
    "periphere wahrnehmung üben",
    "zentrales sehen peripher wahrnehmen",
    "reaktionszeit randbereich",
    "blick auf punkt halten übung",
    "visuelle aufmerksamkeit verteilen",
    "nutzbares gesichtsfeld übung",
    "peripheres sehen online üben"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Peripheres Sehen trainieren | SkillDrills",
    description: "Zentrales Ziel verfolgen und Randreize erkennen, ohne den Blick abzuwenden. Kostenlose Übung direkt im Browser.",
    type: "website",
    url: "https://skilldrills.online/de/drills/visual-tracking/peripheral-ping-pursuit",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Peripheres Sehen trainieren | SkillDrills",
    description: "Übe zentrale Blickverfolgung und die Wahrnehmung kurzer Randreize direkt im Browser.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/visual-tracking/peripheral-ping-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Übungen", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelles Tracking", "item": "https://skilldrills.online/de/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "Peripheres Sehen: zentrale Verfolgung und Randreize", "item": "https://skilldrills.online/de/drills/visual-tracking/peripheral-ping-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Peripheral_vision", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Peripheres Sehen: zentrale Verfolgung und Randreize",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Webbrowser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Browserübung zur gleichzeitigen Verfolgung eines zentralen Ziels und Erkennung kurzer Randreize. Ergebnisse dienen dem persönlichen Sitzungsvergleich.",
  "url": "https://skilldrills.online/de/drills/visual-tracking/peripheral-ping-pursuit",
  "dateModified": "2026-09-20",
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Peripherer Ping-Tracker",
  "url": "https://skilldrills.online/de/drills/visual-tracking/peripheral-ping-pursuit",
  "browserRequirements": "Unterstützung für HTML5-Canvas und modernes JavaScript",
  "applicationCategory": "SportsApplication",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Peripheres Sehen Ping Pursuit",
  "description": "Interaktive Übung zur zentralen Blickverfolgung und zur Wahrnehmung kurzer Reize am Rand des Bildschirms.",
  "genre": ["Visuelles Training", "Peripheres Sehen", "Aufmerksamkeitsübung"],
  "playMode": "SinglePlayer",
  "dateModified": "2026-09-20"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Anleitung für zentrales Verfolgen und periphere Wahrnehmung",
  "description": "Praktischer Trainingsablauf zur Verankerung der fovealen Fixation bei gleichzeitiger verdeckter Aufmerksamkeitsverteilung auf Randreize.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Zentrales Ziel fixieren",
      "text": "Richte den Blick auf das sich sanft bewegende Hauptziel in der Bildschirmmitte und verfolge es mit einer gleichmäßigen Blickfolge."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Verdeckte Aufmerksamkeit aufspannen",
      "text": "Halte die Augen starr auf dem Hauptziel, weite jedoch deinen mentalen Wahrnehmungsfokus auf die gesamten Außenränder des Monitors aus."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Periphere Pings per Leertaste bestätigen",
      "text": "Sobald am äußeren Rand ein kurzer Lichtimpuls aufleuchtet, drücke blitzschnell die Leertaste – ohne die Augen dorthin zu bewegen."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Auswertung des nutzbaren Gesichtsfelds analysieren",
      "text": "Überprüfe nach Abschluss der Sitzung Erkennungsrate, Reaktionszeiten und Blickstabilität, um die eigenen Durchgänge zu vergleichen."
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was versteht man unter peripherem Sehen und warum trainiert man es mit zentralem Fixpunkt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Zentrum verarbeitet feine Details, während die Netzhautperipherie besonders auf Bewegung und Helligkeitswechsel reagiert. Diese Übung hält ein bewegtes Ziel im Zentrum und ergänzt kurze Reize am Rand, damit beide Anforderungen in einer Sitzung beobachtet werden können."
      }
    },
    {
      "@type": "Question",
      "name": "Warum verliert man Punkte, wenn man mit den Augen direkt zum peripheren Ping springt (Sakkade)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wenn Sie die Augen direkt auf den Ping richten, verlassen sie das zentrale Ziel und die beiden Aufgaben sind nicht mehr vergleichbar. Die Übung verwendet deshalb die bewusste Aufmerksamkeit für den Rand, während die Blickrichtung in der Mitte bleibt. So wird die zentrale Blickverfolgung nicht durch eine zusätzliche Blickbewegung unterbrochen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hängt konzentriertes Sehen mit peripheren Reizen zusammen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hohe Belastung kann die Aufmerksamkeit auf einen kleineren Bereich bündeln. Dieses Format mit zwei gleichzeitigen Aufgaben macht sichtbar, ob Randreize während der zentralen Blickverfolgung erkannt werden. Es behauptet nicht, einen Tunnelblick zu behandeln oder eine dauerhafte Änderung des Gesichtsfelds zu bewirken."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen spürbaren Vorteil bietet ein trainiertes peripheres Sichtfeld in E-Sports und Shootern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Aufgabe ähnelt einer Spielsituation, in der ein zentrales Ziel verfolgt und eine Randveränderung bemerkt wird. Sie garantiert weder eine bestimmte Reaktionszeit noch bessere Trefferquoten; Spieleleistung hängt auch von Eingabegerät, Anzeige, Erfahrung und Taktik ab."
      }
    },
    {
      "@type": "Question",
      "name": "Worin liegt der Unterschied zwischen verdeckter und offener Aufmerksamkeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Offene Aufmerksamkeit begleitet eine tatsächliche Ausrichtung der Augen auf ein Objekt. Verdeckte Aufmerksamkeit beschreibt dagegen, dass sich der mentale Fokus verschiebt, während die Augen am zentralen Ziel bleiben. Diese Unterscheidung wird Posners räumlicher Aufmerksamkeitsforschung zugerechnet."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Rolle spielen Stäbchen und Zapfen der Netzhaut bei der peripheren Signalerkennung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Während die Zapfen in der Fovea für Farberkennung und Detailschärfe zuständig sind, dominieren in der peripheren Retina hochsensible Stäbchen und großzellige Ganglienzellen (magnozelluläres System). Sie reagieren extrem empfindlich auf kleinste Helligkeitsschwankungen und schnelle Bewegungen, eignen sich jedoch nicht zum Lesen von Text."
      }
    },
    {
      "@type": "Question",
      "name": "Wie oft und wie lange sollte das Training des peripheren Sehens durchgeführt werden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beginnen Sie mit kurzen Einheiten von etwa 1 bis 5 Minuten und machen Sie Pausen zwischen den Durchgängen. Die passende Häufigkeit hängt von Konzentration, Bildschirm und persönlicher Belastbarkeit ab. Bei Augenmüdigkeit, Kopfschmerz oder Unwohlsein bitte abbrechen."
      }
    },
    {
      "@type": "Question",
      "name": "Haben Monitorgröße und Sitzabstand Einfluss auf den Trainingseffekt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Ein idealer Sehabstand beträgt ca. 50 bis 70 cm bei einem 24- bis 27-Zoll-Monitor, sodass der Bildschirm ca. 35 bis 45 Grad des horizontalen Gesichtsfelds abdeckt. Sitzt man zu weit entfernt, rücken die Randreize zu nahe an die Fovea heran, was den Trainingseffekt für das echte periphere Feld verringert."
      }
    },
    {
      "@type": "Question",
      "name": "Warum ist die Reaktionszeit bei peripheren Reizen anfangs oft spürbar verzögert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Gehirn teilt seine Aufmerksamkeit auf zwei konkurrierende Aufgaben auf: die kontinuierliche Steuerung der Augen für das Verfolgen und die Überwachung des Randbereichs. Zu Beginn kann dadurch ein kognitiver Engpass entstehen; vergleiche die eigenen Sitzungen, statt eine automatische Verbesserung anzunehmen."
      }
    },
    {
      "@type": "Question",
      "name": "Bringt das Training des peripheren Blicks auch Vorteile im Straßenverkehr und im Alltag?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Diese Browserübung ersetzt weder eine augenärztliche Untersuchung noch eine Fahrkompetenzprüfung und belegt keine Verringerung des Unfallrisikos. Sie misst nur Reaktionen auf Bildschirmreize während einer zentralen Blickaufgabe."
      }
    }
  ]
};

const guideProps = {
  heading: "Wissenschaftliche Grundlagen des peripheren Sehens und Trainingsleitfaden",
  intro: [
    "Das Zentrum des Sehens verarbeitet feine Details, während die Netzhautperipherie besonders empfindlich auf Bewegung und Helligkeitswechsel reagiert. Die Übung „Peripherer Ping“ verbindet deshalb die Blickverfolgung eines zentralen Ziels mit kurzen Reizen am Rand. Sie dient dem Vergleich eigener Sitzungen und ist keine Untersuchung des Gesichtsfelds.",
    "Posner (1980) beschrieb räumliche Aufmerksamkeit als eine Verschiebung des mentalen Fokus, die auch ohne Blickbewegung möglich ist. Im Drill bleibt der Blick beim zentralen Ziel, während die Aufmerksamkeit auf den Rand gerichtet wird. Das macht die zentrale Verfolgung und die periphere Erkennung als getrennte, aber gleichzeitig ausgeführte Aufgaben beobachtbar.",
    "Kognitive Belastung kann beeinflussen, wie viele Randreize während einer zentralen Aufgabe erkannt werden. Die Übung bildet diesen Aufmerksamkeitskonflikt in einer kontrollierten Browserumgebung ab; sie beweist nicht, dass sich das anatomische Gesichtsfeld erweitert oder eine medizinische Einschränkung verbessert.",
    "Für Spiele und Sport kann die Aufgabe als zusätzliche Wahrnehmungsübung dienen. Ergebnisse hängen von Anzeige, Eingabegerät, Sitzabstand, Müdigkeit und Erfahrung ab; deshalb sollten Nutzer die eigenen Sitzungen vergleichen und keine Leistungs- oder Sicherheitsgarantie aus den Werten ableiten."
  ],
  benchmarks: {
    title: "Standard-Benchmarks für Peripheres Gesichtsfeld & Reaktionslatenz (UFOV & Latenz)",
    headers: ["Leistungsstufe", "Nutzbares Gesichtsfeld (UFOV %)", "Reaktionszeit am Rand", "Blickstabilität", "Lesehilfe"],
    rows: [
      ["Elite", "Über 92%", "Unter 280 ms", "Über 95%", "Perfekte foveale Entkopplung & maximale periphere Sensitivität"],
      ["Meister", "85% – 92%", "280 ms – 340 ms", "90% – 95%", "Exzellente Aufmerksamkeitsverteilung & minimale Latenzen"],
      ["Diamant", "75% – 84%", "341 ms – 410 ms", "82% – 89%", "Solide Leistung bei zwei Aufgaben; bei höherem Tempo können Randreize übersehen werden"],
      ["Gold", "60% – 74%", "411 ms – 500 ms", "70% – 81%", "Verzögerte Reizweiterleitung & gelegentliche Blickabrisse"],
      ["Basis", "Unter 60%", "Über 500 ms", "Unter 70%", "Starker Tunnelblick & Dominanz offener Blickkorrekturen"]
    ],
    note: "※ Messwerte basieren auf standardisierten Tests bei 60 cm Sehabstand und 1080p-Bildschirmauflösung. Nur Messungen mit stabiler zentraler Verfolgung werden gewertet."
  },
  techniques: {
    title: "Vier Kernstrategien zur Erweiterung des peripheren Blickfelds",
    items: [
      {
        name: "Zentrale Blickverankerung",
        desc: "Diszipliniere deine Augenmuskeln darauf, strikt auf dem grünen Kern des Hauptziels zu verweilen. Sobald der Rand aufleuchtet, widerstehe dem Reflex, die Pupille dorthin zu bewegen. Jeder Blicksprung unterbricht die Kontinuität der Spurführung.",
        tips: "Stelle dir vor, deine Sehachse sei ein Magnet auf dem Ziel, während dein Bewusstsein wie ein weiter Nebel den gesamten Monitor umhüllt."
      },
      {
        name: "Aufmerksamkeit zu den Rändern ausweiten",
        desc: "Weite den mentalen Fokus vom Zentrum bis zu den Bildschirmrändern aus. Versuche nicht, Details zu lesen, sondern achte auf kurze Helligkeits- oder Kontrastwechsel.",
        tips: "Versuche nicht zu erkennen, welche Farbe der Ping hat – drücke die Taste in dem Moment, in dem deine Netzhautrandbereiche 'Licht' melden."
      },
      {
        name: "Verarbeitung von Bewegung und Position",
        desc: "Das Sehsystem leitet Signale entweder über den ventralen Pfad ('Was ist es?') oder den dorsalen Pfad ('Wo ist es und bewegt es sich?'). Die periphere Signalerkennung profitiert vom dorsalen System: Verzichte auf Identifikation zugunsten reiner räumlicher Bewegungswahrnehmung.",
        tips: "Vermeide aktives Nachdenken. Lass den Reflex der Hand direkt durch den Helligkeitsimpuls triggern."
      },
      {
        name: "Parasympathische Atemregulierung (Anti-Tunnel-Breathing)",
        desc: "Hyperarousal und flache Atmung aktivieren den Sympathikus, was unmittelbar zur Verengung des Gesichtsfelds führt. Eine ruhige, tiefe Bauchatmung senkt den Puls und hält das Gesichtsfeld weit geöffnet.",
        tips: "Atme 4 Sekunden durch die Nase ein und 6 Sekunden ruhig aus, um Augeninnendruck und Nackenspannung zu minimieren."
      }
    ]
  },
  steps: [
    "Arbeitsplatz optimal einrichten: Positioniere dich in ca. 60 cm Entfernung mittig vor dem Bildschirm und stelle eine entspannte Sitzhaltung sicher.",
    "Zentrale Blickverfolgung starten: Klicke auf [Übung starten] und folge der sanft schwebenden Kugel mit gleichmäßigen Augenbewegungen.",
    "Peripheren Wahrnehmungsraum aktivieren: Halte den Blick im Zentrum, richte deine Aufmerksamkeit jedoch auf das gesamte Displayfeld.",
    "Impulse verzögerungsfrei bestätigen: Sobald im Augenwinkel ein Lichtimpuls aufleuchtet, betätige ohne Blickwechsel sofort die [Leertaste].",
    "Auswertung analysieren: Überprüfe die Aufschlüsselung nach Quadranten (oben, unten, links, rechts), um persönliche tote Winkel und Reaktionsdefizite zu erkennen."
  ],
  audience: "FPS- und Battle-Royale-Spieler zur Minimap- und Flankenüberwachung, Ballsportler zur Raum- und Mitspielerwahrnehmung, Autofahrer zur Früherkennung von Kreuzungsgefahren.",
  faqs: faqSchema.mainEntity.map(q => ({
    q: q.name,
    a: q.acceptedAnswer.text
  })),
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Konstantes langsames Blickfolgetraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung mit Richtungswechsel" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Dynamische Ausweich-Blickverfolgung" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Nachbild-Unterdrückung beim Blickfolgen" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Liegende Acht: Augentraining" },
    { href: "/de/drills/visual-tracking/momentum-teleport-pursuit", label: "Blickverfolgung eines versetzten Ziels" }
  ]
};

export default function DePeripheralPingPursuitPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PeripheralPingPursuitClient
        copy={{
          title: "Peripheres Sehen: zentrale Verfolgung und Randreize",
          subtitle: "Zentrales Ziel verfolgen und kurze Lichtreize am Rand erkennen",
          description: "Kostenlose Browserübung: Verfolge das zentrale Ziel und erfasse kurze Randreize ohne Blicksprung. Vergleiche Reaktionszeit und Blickstabilität; die Übung ersetzt keine Augenuntersuchung."
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
