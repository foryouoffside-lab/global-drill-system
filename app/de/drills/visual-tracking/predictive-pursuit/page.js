import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "prädiktives tracking training" (Predictive tracking training) / "flugbahn vorhersage augentraining"
// Secondary:    "vorhaltemaß training online", "antizipatorische blickführung", "okkludierte zielverfolgung", "pre-aiming training online"
// LSI / Domain:  "zerebelläres vorwärtsmodell", "mentale vektorextrapolation", "visuelle okklusion",
//               "netzhaut-schlupf latenz", "feedforward blicksteuerung", "visuelles arbeitsgedächtnis"
// Authentic Domain Terms: Prädiktives Tracking (Predictive Pursuit), Flugbahn-Vorhersage (Trajectory Prediction), Vorhaltemaß (Lead Aiming / Deflection), Okklusion (Visual Occlusion), Zerebelläres Vorwärtsmodell (Cerebellar Forward Model), Antizipatorische Blickfolge (Anticipatory Smooth Pursuit)
// ============================================================

export const metadata = {
  title: "Prädiktive Blickverfolgung | SkillDrills",
  description: "Verfolge ein bewegtes Ziel und schätze seine Position nach kurzer Verdeckung. Kostenlose Browserübung mit Reaktionszeit und Abweichung.",
  keywords: [
    "prädiktives Sehen trainieren",
    "Blickfolge Vorhersage",
    "Flugbahn vorhersagen Augentraining",
    "visuelle Antizipation Training",
    "Ziel unter Verdeckung verfolgen",
    "Vorhaltemaß üben",
    "Blickverfolgung Übung",
    "Okklusion Training",
    "Zielbahn vorhersagen",
    "visuelles Arbeitsgedächtnis Übung"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Prädiktive Blickverfolgung | SkillDrills",
    description: "Verfolge ein bewegtes Ziel und schätze seine Position nach kurzer Verdeckung. Kostenlose Browserübung mit Reaktionszeit und Abweichung.",
    type: "website",
    url: "https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Prädiktive Blickverfolgung | SkillDrills",
    description: "Kurze Browserübung für Blickfolge und Flugbahnvorhersage bei visueller Verdeckung. Miss Reaktionszeit und Positionsabweichung.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Übungen", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelles Tracking", "item": "https://skilldrills.online/de/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "Prädiktives Tracking Training & Flugbahn-Vorhersage", "item": "https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Prädiktives Tracking Training & Flugbahn-Vorhersage",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Interaktives browserbasiertes Sehtraining zur okulomotorischen Extrapolation verdeckter Bewegungsbahnen mittels zerebellärer Vorwärtsmodelle und Feedforward-Blicksteuerung.",
  "url": "https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/de" },
  "inLanguage": "de",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Prädiktiver Blickführungstracker",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas fähiger Browser (Chrome, Edge, Firefox, Safari)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit",
  "inLanguage": "de",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "dateModified": "2026-09-20",
  "name": "Training für prädiktive Blickverfolgung",
  "url": "https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit",
  "description": "Kognitives Aim- und Sehtrainingstool für E-Sportler und Athleten zur Perfektionierung von Vorhaltemaß und Antizipation verdeckter Zielbewegungen.",
  "genre": ["Zielübungen", "Blickverfolgung", "Sehtraining", "Wettkampftraining"],
  "gamePlatform": ["Webbrowser", "Desktop", "Mobilgerät"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Anleitung zur Schulung prädiktiver Blickfolgebewegungen und Vektorextrapolation",
  "description": "Methodisches Trainingsprotokoll zur Überwindung retinaler Latenzen durch zerebelläre Flugbahninterpolation.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Initialen Geschwindigkeitsvektor erfassen",
      "text": "Fixiere das Ziel in den ersten 100 bis 200 ms nach dem Start foveal, um Geschwindigkeits- und Richtungsvektor im visuellen Arbeitsgedächtnis zu speichern."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Mentale Bahnextrapolation bei Okklusion",
      "text": "Wenn die Leitlinie ausgeblendet ist oder das Ziel eine verdeckte Zone durchquert, führe den Blick kontinuierlich mit unverminderter Winkelgeschwindigkeit fort."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Antizipatorische Landezonenfokussierung",
      "text": "Positioniere den Blickpunkt exakt an den errechneten Austrittskoordinaten, noch bevor das Ziel visuell wieder in Erscheinung tritt."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Fehleranalyse und synaptische Kalibrierung",
      "text": "Vergleiche Zielposition und Blickpunkt bei Wiedererscheinen, um das interne zerebelläre Vorwärtsmodell schrittweise nachzujustieren."
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
      "name": "Was versteht man unter prädiktiver Blickverfolgung und wie unterscheidet sie sich vom reaktiven Verfolgen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Weiterleitung visueller Signale von der Netzhaut über den primären visuellen Kortex bis zu den okulomotorischen Kernen benötigt rund 130 bis 150 Millisekunden. Bei rein reaktivem Verfolgen hinkt das Auge bewegten Zielen zwangsläufig hinterher (Retinal Slip). Prädiktive Blickfolge nutzt interne Modelle im Kleinhirn und den frontalen Augenfeldern (FEF), um die künftige Trajektorie vorauszuahnen und das Auge synchron oder vorauslaufend anzusteuern (Barnes, 2008)."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Vorteil bietet dieses Training für Vorhaltemaß (Lead Aiming) und Pre-Aiming in Shootern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Shootern wie Apex Legends, CS2 oder Valorant bewegen sich Gegner häufig hinter Deckungen oder nutzen abrupte Ausweichsprünge. Wer erst schießt, wenn der Gegner wieder sichtbar ist, verliert wertvolle Reaktionszeit. Das Training konditioniert das Gehirn darauf, das Fadenkreuz instinktiv an der errechneten Austrittsstelle zu platzieren (Vorhaltemaß), wodurch Trefferquoten drastisch steigen."
      }
    },
    {
      "@type": "Question",
      "name": "Warum kann das Auge einer Bahn folgen, selbst wenn das Ziel vorübergehend völlig verschwindet (Okklusion)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Forschungen von Bennett & Barnes (2003) belegen, dass im frontalen Augenfeld (FEF) und im supplementären Augenfeld (SEF) ein okulomotorischer Geschwindigkeitsspeicher existiert. Dieser Puffer sendet auch bei vollständigem Wegfall des optischen Reizes für ca. 1 bis 2 Sekunden motorische Impulse an die Augenmuskeln, um die Bewegung mental fortzuführen."
      }
    },
    {
      "@type": "Question",
      "name": "Welcher typische Anfängerfehler tritt beim prädiktiven Tracking am häufigsten auf?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der häufigste Fehler besteht darin, die Augenbewegung in dem Moment abzustoppen, in dem das Ziel verdeckt wird, um dann nach Wiedererscheinen mit einer hektischen Korrektursakkade hinterherzuspringen. Dies führt zu massiven Latenzverlusten. Richtig ist es, die Augenbewegung gleichmäßig durch die verdeckte Zone gleiten zu lassen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist ein zerebelläres Vorwärtsmodell im Kleinhirn?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das Kleinhirn (Cerebellum) nutzt Efferenzkopien motorischer Befehle, um physikalische Konsequenzen im Raum vorauszuberechnen (Robinson, 1965; Krauzlis, 2004). Ist dieses neuronale Modell gut trainiert, weiß das Sehsystem exakt, wo sich ein Objekt in 200 oder 500 Millisekunden befinden wird, selbst ohne permanente sensorische Bestätigung."
      }
    },
    {
      "@type": "Question",
      "name": "Worin liegt der Unterschied zwischen sichtbarer und ausgeblendeter Leitlinie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit eingeblendeter Leitlinie stehen zusätzliche Raumhinweise zur Verfügung. Bei ausgeblendeter Leitlinie wird die Bahn stärker aus Richtung und Geschwindigkeit geschätzt; die Ergebnisse beider Modi lassen sich vergleichen."
      }
    },
    {
      "@type": "Question",
      "name": "Spielt diese Antizipationsfähigkeit auch im realen Sport (Tennis, Fußball, Baseball) eine Rolle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, absolut. Ein mit 150 km/h geworfener Baseball benötigt nur rund 400 Millisekunden zum Schlagmann. Kein menschliches Auge kann den Ball bis zum Treffpunkt kontinuierlich verfolgen. Spitzensportler nutzen prädiktive Blickfolge, um den Treffpunkt bereits in den ersten 100 Millisekunden nach Ballabgabe mental zu fixieren."
      }
    },
    {
      "@type": "Question",
      "name": "Beeinflusst die Bildwiederholfrequenz (Hz) des Monitors den Trainingseffekt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Monitore mit 144 Hz oder mehr liefern dem Sehsystem vor Beginn der Verdeckung wesentlich mehr Einzelbilder pro Zeiteinheit. Das Kleinhirn kann dadurch den anfänglichen Geschwindigkeitsvektor und Beschleunigungswerte deutlich fehlerfreier berechnen (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel Trainingszeit pro Tag ist für optimale neuronale Anpassung empfehlenswert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Da die Extrapolation das Arbeitsgedächtnis stark fordert, sind 5 bis 8 Runden à 60 Sekunden (insgesamt ca. 5 bis 10 Minuten) 4- bis 5-mal wöchentlich ideal. Bei Konzentrationsabfall oder brennenden Augen sollte das Training beendet werden."
      }
    },
    {
      "@type": "Question",
      "name": "Nimmt die visuelle Antizipationsfähigkeit mit dem Alter ab und lässt sie sich trainieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Während einfache Reflexe im Alter leicht langsamer werden, bleiben erfahrungsbasierte Vorwärtsmodelle im Kleinhirn (Kowler, 1989) hochgradig plastisch. Durch gezieltes Tracking-Training können auch ältere Athleten und Gamer eine exzellente Vorhersagegenauigkeit erzielen."
      }
    }
  ]
};

const guideProps = {
  heading: "Wissenschaftliche Grundlagen des prädiktiven Trackings und Flugbahn-Extrapolation",
  intro: [
    "Das menschliche Sehsystem unterliegt einer fundamentalen physiologischen Grenze: der sensomotorischen Latenzzeit von ca. 130 bis 150 Millisekunden, die Signale von der Photorezeptorebene der Netzhaut über das Sehzentrum bis zu den motorischen Augenmuskelkernen benötigen. Würde die Blicksteuerung ausschließlich über reaktive sensorische Rückkopplung funktionieren, geriete der Blick bei jedem schnelleren Ziel in einen permanenten 'Netzhaut-Schlupf (Retinal Slip)', bei dem das Auge der tatsächlichen Position hilflos hinterherhinkt. Die evolutionäre Lösung für dieses Problem ist die 'prädiktive Blickfolge (Predictive Smooth Pursuit)'.",
    "Pionierarbeiten von David Robinson (1965) und Barnes (2008) zeigten, dass das Kleinhirn (Cerebellum) in enger Kooperation mit den frontalen Augenfeldern (FEF) fähig ist, aus den ersten Bewegungsfraktionen eines Objekts dessen Geschwindigkeits- und Richtungsvektor zu extrahieren. Auf dieser Basis generiert das Gehirn ein 'internes Vorwärtsmodell (Internal Forward Model)', dessen Feedforward-Steuerimpulse das Auge genau mit der Geschwindigkeit antreiben, die der künftigen Zielposition entspricht – die biologische Verzögerung wird vollständig neutralisiert.",
    "Im wettkampforientierten E-Sport und in dynamischen Sportarten tritt zudem das Phänomen der visuellen Okklusion auf: Ziele verschwinden hinter Mauern, Rauchgranaten oder Mitspielern. Die Experimente von Bennett & Barnes (2003) wiesen nach, dass das visuelle Arbeitsgedächtnis im Frontallappen die Geschwindigkeitsinformationen speichert und den okulomotorischen Antrieb selbst bei totalem Signalverlust für bis zu zwei Sekunden autonom fortführt. Diese mentale Flugbahnextrapolation unterscheidet Spitzen-Gamer beim Vorhaltemaß (Lead Aiming) von reinen Reaktionsspielern.",
    "Dieser Drill (Predictive Pursuit) fordert das Sehsystem durch stetig wechselnde Flugbahnen und die Option zur Ausblendung der Leitlinie ('Hide Line') heraus, die Bahn rein mental zu extrapolieren. Athleten schulen damit die Fähigkeit, das Fadenkreuz oder die Sehachse exakt an die Austrittsstelle zu befördern, noch bevor das Ziel für das Auge physisch wieder sichtbar wird."
  ],
  benchmarks: {
    title: "Richtwerte für Bahnvorhersage und Genauigkeit bei Verdeckung",
    headers: ["Stufe", "Genauigkeit der Bahnvorhersage (%)", "Abweichung beim Austritt", "Übereinstimmung der Blickfolge", "Merkmal der Vorhersage"],
    rows: [
      ["Elite", "Über 94%", "Unter 15 px (Perfekte Landung)", "0.95 – 1.02", "Vollständiges zerebelläres Vorwärtsmodell & latenzfreies Vorhaltemaß"],
      ["Meister", "86% – 93%", "15 px – 28 px", "0.88 – 0.94", "Exzellente Vektorextrapolation mit minimaler Korrektur"],
      ["Diamant", "76% – 85%", "29 px – 45 px", "0.78 – 0.87", "Solide Prädiktion, leichte Drift bei langer Verdeckungsdauer"],
      ["Gold", "62% – 75%", "46 px – 65 px", "0.65 – 0.77", "Überwiegend reaktive Blicksteuerung, deutliche Korrektursakkaden"],
      ["Basis", "Unter 62%", "Über 65 px", "Unter 0.65", "Blickstopp bei Okklusion, stark verzögerte Zielwiederaufnahme"]
    ],
    note: "※ Messwerte basieren auf 1080p Auflösung, Geschwindigkeit 1.0x–1.5x im Modus 'Hide Line'. Bewertet wird das Verhältnis von fovealer Zielankunft ohne nachgelagerte Korrektursakkade."
  },
  techniques: {
    title: "Vier Kerntechniken für Bahnvorhersage und Vorhaltemaß",
    items: [
      {
        name: "Anfangsgeschwindigkeit und Richtung erfassen",
        desc: "Fokussiere das Ziel in den ersten 100 bis 200 Millisekunden nach dem Start mit maximaler Schärfe. Das Kleinhirn benötigt exakte Startparameter (Winkel und Beschleunigung), um die mentale Simulation der Flugbahn präzise aufzubauen.",
        tips: "Achte nicht auf die Zielgrafik, sondern darauf, wie schnell der Punkt relativ zum Raumhintergrund gleitet."
      },
      {
        name: "Verdeckte Strecke gedanklich fortführen",
        desc: "Wenn das Ziel verdeckt wird, halte die Augen keinesfalls an. Führe den Blick mit unveränderter, gleichmäßiger Geschwindigkeit auf der gedachten Linie zur erwarteten Austrittszone weiter.",
        tips: "Schau nicht dorthin, wo das Ziel verschwunden ist, sondern gleite mit dem Blick voraus in den leeren Raum."
      },
      {
        name: "Blick während der Verdeckung stabil halten",
        desc: "Bei Sichtverlust neigt das Gehirn dazu, unruhige Blicksprünge (Sakkaden) auszuführen, um nach dem Objekt zu fahnden. Jede Sakkade unterbricht jedoch die Reizverarbeitung. Bewahre eine ruhige, gleichmäßige Blickführung.",
        tips: "Stelle dir vor, dein Blick gleite auf einer unsichtbaren Magnetschiene vollkommen ruckelfrei durch die Dunkelzone."
      },
      {
        name: "Abweichung beim Wiederauftauchen prüfen",
        desc: "Sobald das Ziel wieder sichtbar wird, registriere blitzschnell, ob dein Blick dem Ziel voraus war (Überprädiktion) oder hinterherhinkte (Unterprädiktion). Das Kleinhirn nutzt diesen Fehlerwert zur sofortigen Feinjustierung der Synapsen.",
        tips: "Analysiere Fehlschläge nüchtern: 'Zu weit vorne = nächstes Mal etwas langsamer führen; zu weit hinten = mutiger vorausgehen'."
      }
    ]
  },
  steps: [
    "Sitzposition einnehmen: Positioniere dich in ca. 60 cm Sehabstand mittig vor dem Monitor, sodass die Bewegungsarena das zentrale Blickfeld ausfüllt.",
    "Kalibrierungsdurchlauf: Starte bei Geschwindigkeit 1.0x mit sichtbarer Leitlinie, um ein Gefühl für Flugkurven und Verdeckungsintervalle zu entwickeln.",
    "Aktivierung des Hide-Line-Modus: Blende die Führungslinie in den Optionen aus, um die zerebelläre Simulation ohne optische Krücken zu fordern.",
    "60-Sekunden-Trainingsintervall: Extrapoliere aufeinanderfolgende Zieltrajektorien und antizipiere wiederholt die Zielankunft an den Austrittspunkten.",
    "Leistungsanalyse: Überprüfe die Genauigkeitswerte (Accuracy %) und Abweichungsstatistiken zur Verfolgung deines neuroplastischen Fortschritts."
  ],
  audience: "E-Sportler in Shootern (Apex, Valorant, CS2) zur Beherrschung von Vorhaltemaß und Pre-Aiming bei Peeks, Ballsportler (Tennis, Baseball) zur antizipativen Ballflugberechnung, sowie Anwender zur Schärfung der visuellen Auffassungsgabe.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('barnes2008', 'bennett2003', 'kowler1989', 'krauzlis2004', 'robinson1965', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Konstantes langsames Blickfolgetraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung bei Richtungswechseln" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Blickverfolgung bei Ausweichbewegungen" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Blickstabilität bei Nachbildern" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Augentraining mit einer liegenden Acht" },
    { href: "/de/drills/visual-tracking/momentum-teleport-pursuit", label: "Blickverfolgung bei plötzlichem Sprung" }
  ]
};

export default function GermanPredictivePursuitPage() {
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

      <PredictivePursuitClient
        copy={{
          title: "Prädiktive Blickverfolgung bei Verdeckung",
          subtitle: "Bewegte Ziele verfolgen und ihre Position nach kurzer Verdeckung einschätzen",
          description: "Verfolge ein bewegtes Ziel und schätze seine Position während einer kurzen Verdeckung. Prüfe danach Reaktionszeit und Positionsabweichung. Die kostenlose Übung startet direkt im Browser."
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />

      <DrillFooter />
    </>
  );
}
