import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "sprungziel tracking training" (Jump target tracking) / "sakkadische reakquisition"
// Secondary:    "ziel neuzentrierung sehtraining", "antizipatives tracking training", "schnelle blickspruenge uebung"
// LSI / Domain:  "augentraining blicksakkaden", "teleport zielverfolgung", "post-sakkadische folgebewegung",
//               "foveale neuzentrierung blick", "blickmotorik traegheit", "fps teleport blickziel"
// Authentic Domain Terms: Sprungziel Tracking（Jump Target Tracking）, Sakkadische Reakquisition（Saccadic Re-acquisition）, Trägheitserhaltung（Momentum Preservation）, Sakkadische Suppression（Saccadic Suppression）, Post-sakkadische Folgebewegung（Post-saccadic Smooth Pursuit）, Ballistischer Blicksprung（Ballistic Saccade）
// ============================================================

export const metadata = {
  title: "Sprungziel | Blickverfolgung | SkillDrills",
  description: "Kostenlose Blickübung: Finde ein versetztes Ziel mit einer Sakkade wieder und nimm anschließend seine Bewegung erneut auf.",
  keywords: [
    "teleportierendes Ziel Blickverfolgung",
    "Sakkaden Blickverfolgung",
    "Ziel wiederfinden Blickübung",
    "sakkadische Augenbewegung",
    "Blicksprung Übung",
    "Blickfolge",
    "visuelle Reaktionsübung",
    "bewegtes Ziel verfolgen",
    "schnelle Blickverfolgung",
    "Augentraining Zielwechsel",
    "dynamische Blickreaktion",
    "Blickziel neu finden"
  ],
  openGraph: {
    title: "Sprungziel | Blickverfolgung | SkillDrills",
    description: "Finde ein versetztes Ziel mit einer Sakkade wieder und nimm anschließend seine Bewegung erneut auf.",
    type: "website",
    url: "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sprungziel wiederfinden | SkillDrills",
    description: "Übe den Blicksprung zu einem versetzten Ziel und die anschließende Blickfolge.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Übungen", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelle Blickverfolgung", "item": "https://skilldrills.online/de/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "Sprungziel-Blickverfolgung – sakkadische Reakquisition", "item": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Sprungziel-Blickverfolgung – sakkadische Reakquisition",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Kostenloses interaktives Blickverfolgungstraining zur Schulung ballistischer Sakkaden und post-sakkadischer Folgebewegungen auf teleportierende Ziele.",
  "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/de" },
  "inLanguage": "de",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sprungziel-Blickverfolgung und vorausschauende Blickführung | SkillDrills",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Browser",
  "browserRequirements": "HTML5 Canvas-fähiger Webbrowser (Chrome, Edge, Firefox, Safari)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit",
  "inLanguage": "de",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Sprungziel-Blickverfolgung – sakkadische Reakquisition",
  "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit",
  "description": "Reaktive Blickübung: Verfolge Ziele, die schnell im Raum springen, und richte den Blick nach der Sakkade neu aus.",
  "genre": ["Augentraining", "Sportliches Sehen", "Blickverfolgung"],
  "gamePlatform": ["Browser"],
  "dateModified": "2026-09-20",
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Anleitung zur Sprungziel-Blickverfolgung und Reakquisition",
  "description": "Vierstufiges Vorgehen zur Konditionierung schneller Blicksprünge und sofortiger post-sakkadischer Geschwindigkeitsanpassung.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Kopfhaltung fixieren und frontale Distanz einnehmen",
      "text": "Nimm einen stabilen Abstand von 50 bis 70 cm frontal zum Display ein. Halte Kopf und Hals absolut regungslos, um die Blickmotorik rein über die äußeren Augenmuskeln zu steuern.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Testdauer und Basisgeschwindigkeit festlegen",
      "text": "Wähle eine Rundenzeit (30 bis 120 Sekunden) und die Zielgeschwindigkeit (0,5x bis 9,0x). Starte bei 1,0x, um den Übergang von Sakkade zu Folgebewegung sicher zu beherrschen.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Ballistischer Blicksprung auf den Teleportationsort",
      "text": "Verfolge das Ziel foveal in seiner Bewegung. Teleportiert das Ziel abrupt an eine neue Koordinate, führe unverzüglich eine direkte ballistische Sakkade auf das neue Zielzentrum aus.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
       "name": "Bewegung nach dem Blicksprung wieder aufnehmen",
       "text": "Passe die Blickbewegung am Zielpunkt an die weitere Zielrichtung an. Beobachte die Zeit bis zum Wiederfinden und eine mögliche Überschreitung.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit#step-4"
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
       "name": "Was übt die Sprungziel-Blickverfolgung?",
      "acceptedAnswer": {
        "@type": "Answer",
         "text": "Die Übung verbindet einen schnellen Blicksprung zum neuen Ort mit der anschließenden Blickfolge eines weiter bewegten Ziels. Sie beschreibt eine Trainingsaufgabe und ersetzt keine Untersuchung der Augenbewegungen."
      }
    },
    {
      "@type": "Question",
       "name": "Warum ist ein plötzlich versetztes Ziel schwieriger zu verfolgen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei kontinuierlicher Bewegung kann das Kleinhirn den Pfad stufenlos extrapolieren. Teleportiert ein Ziel jedoch sofort, bricht die räumliche Kontinuität ab. Das Gehirn muss die bisherige Blickbewegung schlagartig abbremsen, einen hochpräzisen Neuausrichtungs-Blicksprung berechnen und im selben Sekundenbruchteil die Geschwindigkeitsinformation für die Blickverfolgung nach der Sakkade abrufen."
      }
    },
    {
      "@type": "Question",
       "name": "Wie arbeiten Blicksprung und Blickfolge zusammen?",
      "acceptedAnswer": {
        "@type": "Answer",
         "text": "Der Blicksprung bringt die Augen schnell in Richtung des neuen Ziels. Danach muss die Blickfolge dessen weitere Bewegung aufnehmen. Die Seite zeigt, wie gut dieser Übergang in der jeweiligen Sitzung gelingt; sie beweist keine bestimmte Hirnleistung."
      }
    },
    {
      "@type": "Question",
       "name": "Warum wirkt die Sicht während eines Blicksprungs kurz anders?",
      "acceptedAnswer": {
        "@type": "Answer",
         "text": "Während eines schnellen Blicksprungs verändert sich die visuelle Wahrnehmung kurz. Die Übung ist kein Test für diese Funktion. Wenn dabei Schwindel, Doppelbilder oder Schmerzen auftreten, beenden Sie die Sitzung."
      }
    },
    {
      "@type": "Question",
       "name": "Warum kann der Blick am neuen Ziel vorbeigehen?",
      "acceptedAnswer": {
        "@type": "Answer",
         "text": "Der erste Blicksprung kann zu kurz oder zu weit ausfallen und eine kleine Korrektur nötig machen. Die Seite erfasst diese Abweichung als Trainingswert; sie verspricht keine millimetergenaue neurologische Kalibrierung."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Nutzen hat diese Übung für Shooter wie Apex Legends, Overwatch oder Valorant?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gegner nutzen Fähigkeiten wie kurze Sprünge, Blinks oder Teleporter (z. B. Tracer, Jett, Wraith), um Visierlinien zu brechen. Spieler ohne gezieltes Reakquisitionstraining stoppen ihr Fadenkreuz nach einem schnellen Blicksprung oft völlig ab. Diese Übung schult den direkten Übergang vom Blicksprung in eine flüssige Blickverfolgung ohne Reaktionspause."
      }
    },
    {
      "@type": "Question",
      "name": "Was tun, wenn das Auge nach dem Teleport zu langsam hinter dem Ziel herhinkt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dies geschieht, wenn der visuelle Kortex erst nach dem Aufsetzen abwartet, bis das Ziel wieder sichtbar loswandert. Da neuronale Feedbackschleifen ca. 100 ms benötigen, bist du dann stets zu spät. Speichere die Bewegungsrichtung vor dem Teleport mental im sensorischen Speicher und beschleunige den Blick bereits vorwegnehmend am Landepunkt."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Einfluss haben Bildwiederholrate (Hz) und Input-Lag auf die Zielreakquisition?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei 60 Hz vergehen bis zu 16,7 ms, bevor das Ziel nach dem Sprung überhaupt gerendert wird. 144-Hz- oder 240-Hz-Monitore halbieren bzw. vierteln diese Latenz und minimieren Schlieren, wodurch die Fovea das Zielzentrum wesentlich früher lokalisieren und arretieren kann."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange sollte eine Trainingseinheit dauern und wie sehen optimale Pausen aus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vier bis sechs Durchgänge à 60 Sekunden mit jeweils 30 bis 45 Sekunden Pause sind optimal. Die maximale Kontraktionskraft der Augenmuskeln bei ballistischen Sprüngen verbraucht rasch Glykogen. Bei Anzeichen von Konzentrationsabfall sollte das Training beendet werden."
      }
    },
    {
      "@type": "Question",
      "name": "Was tun bei muskulärer Überanstrengung oder Schläfendruck während schneller Blicksprünge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dies rührt von Verspannungen der äußeren Augenmuskeln und einer unbewussten Verkrampfung der Nacken- oder Kiefermuskulatur her. Beende die Übung, reibe deine Handflächen warm und lege sie sanft für 30 Sekunden über die geschlossenen Augen (Palming), um den okulomotorischen Tonus zu senken."
      }
    }
  ]
};

const guideProps = {
  heading: "Sprungziel-Blickverfolgung und sakkadische Reakquisition: neurophysiologische Standards",
  intro: [
    "Bei der Sprungziel-Blickverfolgung wechselt ein bewegtes Ziel plötzlich an eine andere Koordinate. Die Aufgabe verbindet den schnellen Blicksprung zum neuen Ort mit der anschließenden Blickfolge. Sie dient dem Vergleich eigener Sitzungen und ist keine okulomotorische Diagnose.",
    "Trennung und Verschaltung von Positions- und Geschwindigkeitsregelkreisen: Die Arbeiten von Rashbass (1961) zeigen, dass das okulomotorische System Positionsfehler (räumlicher Versatz auf der Netzhaut) und Geschwindigkeitsfehler (Netzhautgleiten) über getrennte kortikale Netzwerke verarbeitet. Positionsfehler aktivieren die Colliculi superiores und das frontale Augenfeld (FEF) zur Erzeugung eines pulsförmigen Sakkadenbefehls. Geschwindigkeitsfehler hingegen durchlaufen die Areale MT/MST und das pontine Moosfasersystem zum Kleinhirn. Beim Teleportieren muss das Gehirn beide Programme im Millisekundentakt verketten: Der Sakkadenbremspuls muss punktgenau in den Blickfolgeimpuls übergehen (Krauzlis, 2004).",
    "Sakkadische Suppression und zerebelläre Trägheitsrepräsentation: Während des ballistischen Blicksprungs, der Geschwindigkeiten von bis zu 500 Grad pro Sekunde erreicht, setzt die sakkadische Suppression ein – eine zentrale Dämpfung visueller Reize zur Verhinderung von Bewegungsunschärfe (Bahill et al., 1980). Landet der Blick am neuen Zielpunkt, steht dem Sehsystem zunächst kein Echtzeit-Feedback über die Zielgeschwindigkeit zur Verfügung, da die sensorische Reizweiterleitung rund 100 bis 130 ms beansprucht. Um ein Abreißen des Blicks zu verhindern, muss das Kleinhirn den vor dem Sprung erfassten Geschwindigkeitsvektor in einem prädiktiven internen Modell konservieren und die Augenmuskeln antizipativ beschleunigen (Barnes, 2008).",
    "Bedeutung für professionellen E-Sport und reaktive Zielsicherheit: In modernen kompetitiven Shootern wie Apex Legends, Overwatch oder Call of Duty führen abrupte Bewegungsausbrüche wie Teleports, kurze Sprünge oder Rutschbewegungen zu einem abrupten Abbruch visueller Linien. Konventionelle Zielerfassung scheitert hier oft daran, dass das Fadenkreuz nach dem Blicksprung für Sekundenbruchteile regungslos verharrt. Dieses Training schließt diese Reaktionslücke: Es übt den direkten Übergang von der ruckartigen Neuausrichtung in eine flüssige Blickverfolgung (Woods et al., 2015)."
  ],
  benchmarks: {
    title: "Leistungswerte für Zielwechsel und Blickverfolgung",
    headers: ["Stufe", "Zeit zum Wiederfinden", "Abweichung bei der Ankunft", "Bewegungssynchronisation", "Praktische Einordnung"],
    rows: [
      ["Spitzenklasse (Profi-Zielsicherheit und E-Sport)", "< 140 ms", "< 3% (punktgenaue Arretierung)", "97%+", "Exzellente ballistische Präzision. Unmittelbare Trägheitssynchronisation am Landepunkt ohne jegliches Nachzittern"],
      ["Fortgeschritten (Wettkampf-Level)", "140 – 180 ms", "3% – 6%", "91% – 96%", "Sehr rasche Zielreakquisition. Minimalste Korrektur nach der Landung; hohe post-sakkadische Spurtreue"],
      ["Kompetent (Gesunde Erwachsene)", "181 – 240 ms", "7% – 14%", "80% – 90%", "Solider Standardbereich. Kurze sensorische Refraktärzeit nach der Sakkade, gefolgt von stabiler Nachführung"],
      ["Aufbauend (Erhöhte Latenz)", "241 – 320 ms", "15% – 24%", "68% – 79%", "Spürbare Verzögerung beim Auslösen des Blicksprungs. Häufiges Überschießen und wiederholter Zielverlust"],
      ["Basis / Förderbedarf", "> 320 ms", "> 24%", "< 68%", "Überforderung bei Raumdistanzsprüngen. Zervikale Ausgleichsbewegungen; Grundlagenübung für Blickmotorik ratsam"]
    ],
    note: "※ Die Referenzdaten basieren auf okulomotorischen Messungen bei 50–70 cm Betrachtungsabstand und Geschwindigkeiten von 1,0x bis 2,0x über 60 Sekunden Testzeit. Die Reakquisitionslatenz misst das Intervall vom Teleportationszeitpunkt bis zum Eintreffen der Fovea auf den neuen Koordinaten."
  },
  techniques: {
    title: "Vier essenzielle Techniken für blitzschnelle Zielreakquisition",
    items: [
      {
        name: "Direkte ballistische Flugbahn ohne Krümmung (Direct Ballistic Projection)",
        desc: "Führe den Blicksprung auf die neue Koordinate als kürzeste lineare Verbindungslinie aus. Findlay & Walker (1999) betonen, dass jede zögerliche bogenförmige Suchbewegung die Latenz dramatisch verlängert.",
        tips: "Fokussiere dich nicht auf den Zwischenraum, sondern 'wirf' deinen Blick entschlossen direkt auf den peripher wahrgenommenen Lichtpunkt."
      },
      {
        name: "Mentale Konservierung des Geschwindigkeitsvektors (Velocity Vector Caching)",
        desc: "Das Ziel ändert zwar sprunghaft seine Position, behält jedoch Betrag und Richtung seiner Geschwindigkeit bei. Nutze das interne Vorwärtsmodell nach Barnes (2008) und halte den Geschwindigkeitsvektor aktiv im Arbeitsspeicher.",
        tips: "Lass dein Gehirn nicht annehmen, das Ziel sei zum Stillstand gekommen – erwarte das Weitergleiten am Landepunkt."
      },
      {
        name: "Antizipatives Vorhalten während der Sakkadenflugzeit (Anticipatory Landing Lead)",
        desc: "Da die Sakkade 20 bis 40 ms Flugzeit beansprucht, wandert das Ziel in dieser Zeit bereits weiter. Ziele deshalb nicht starr auf den Teleportationspunkt, sondern setze deinen Blick minimal vor die erwartete Zielposition auf.",
        tips: "Ein minimaler Vorhaltewinkel von wenigen Pixeln verhindert, dass du dem Ziel nach der Landung hinterherhinkst."
      },
      {
        name: "Reine okulomotorische Entkopplung ohne Kopfbewegung (Cervical Motion Isolation)",
        desc: "Große Winkelsprünge verleiten intuitiv zum Mitreißen des Kopfes. Leigh & Zee (2015) zeigen, dass Kopfbewegungen den VOR aktivieren und die Foveazentrierung destabilisieren. Fixiere dein Kinn bewusst.",
        tips: "Stütze die Kinnspitze mit den Fingern ab, um sicherzustellen, dass ausschließlich die Augäpfel beschleunigen."
      }
    ]
  },
  steps: [
    "Nimm eine aufrechte Sitzhaltung in 50 bis 70 cm Distanz ein und halte den Kopf vollkommen ruhig.",
    "Wähle Testdauer (30 bis 120 Sekunden) und Geschwindigkeitsmultiplikator (0,5x bis 9,0x).",
    "Fixiere das wandernde Ziel im Foveazentrum und folge seiner linearen Flugbahn.",
    "Teleportiert das Ziel, springe unverzüglich mit einer geradlinigen Sakkade auf die neue Position.",
    "Gleite am Landepunkt ansatzlos in die Folgebewegung über und analysiere abschließend deine Latenzwerte."
  ],
  audience: "FPS-Gamer (Apex Legends, Overwatch, Valorant, CS2), Ballsportler zur Antizipation unvorhersehbarer Abpraller sowie alle Personen, die schnelle Blicksakkaden und Reaktionspräzision trainieren wollen.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Langsame Augenfolge" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung mit Richtungswechsel" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Blickverfolgung bewegter Ziele" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Fixationsstabilität beim Sehen" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Liegende Acht: Augentraining" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Vorausschauende Blickverfolgung" }
  ]
};

export default function GermanMomentumTeleportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient
        copy={{
          title: "Sprungziel wiederfinden",
          subtitle: "Blicksprung und anschließende Blickverfolgung",
          description: "Finde ein versetztes Ziel mit einem Blicksprung wieder und nimm danach seine Bewegung erneut auf. Vergleiche Zeit, Genauigkeit und Komfort unter gleichen Bedingungen."
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
