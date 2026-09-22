import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "dynamisches Sehen" / "reaktives Augentraining"
// Secondary:    "Blickverfolgung", "Korrektursakkade", "plötzliche Richtungswechsel"
// LSI / Domain:  "Augenfolgebewegung Reaktion", "dynamische Sehkraft", "visuelle Reaktionszeit",
//               "korrektursakkade", "retinaler schlupf", "foveale zentrierung", "esport sehtraining"
// Authentic Domain Terms: Reaktives Sehen, Ausweichende Zielverfolgung, Korrektursakkade, Folgebewegungsgewinn, Retinaler Schlupf, Frontales Augenfeld (FEF), Colliculus Superior
// ============================================================

export const metadata = {
  title: "Dynamisches Sehen | Reaktive Blickverfolgung | SkillDrills",
  description: "Kostenloses Augentraining für plötzliche Richtungswechsel: Verfolge ein ausweichendes Ziel und übe schnelle foveale Refixation im Browser.",
  keywords: [
    "dynamisches Sehen Training",
    "reaktives Augentraining",
    "Blickverfolgung Training",
    "ausweichende Zielverfolgung",
    "Korrektursakkade",
    "plötzliche Richtungswechsel",
    "foveale Refixation",
    "visuelle Reaktionszeit",
    "Augenfolgebewegung",
    "Blickstabilität",
    "Sehtraining Sport",
    "Sehtraining kostenlos"
  ],
  openGraph: {
    title: "Dynamisches Sehen | Reaktive Blickverfolgung | SkillDrills",
    description: "Verfolge ein ausweichendes Ziel und trainiere schnelle foveale Refixation bei plötzlichen Richtungswechseln kostenlos im Browser.",
    type: "website",
    url: "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dynamisches Sehen | Reaktive Blickverfolgung | SkillDrills",
    description: "Trainiere dynamisches Sehen und schnelle Blick-Refixation bei ausweichenden Zielbewegungen kostenlos online.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/dynamic-evasion-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Übungen", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Blickverfolgung & Sehtraining", "item": "https://skilldrills.online/de/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "Reaktive Blickverfolgung bei Ausweichzielen", "item": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Reaktives Augentraining – Dynamische Ausweichziel-Verfolgung",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Webbrowser",
  "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Kostenloses browserbasiertes Trainingsmodul zur Schulung reaktiver Blickverfolgung und sakkadischer Neuzentrierung bei abrupt ausweichenden Zielobjekten.",
  "featureList": [
    "Simulation linearer Zielvektoren mit abrupten, unangekündigten Richtungsbrüchen",
    "Geschwindigkeitsstufen von 0.5x bis 9.0x mit millimetergenauer Fixationserfassung",
    "Visuelle Anpassungsmöglichkeiten für Nachziehtrails, Scanlines und Helligkeit",
    "Vollständige clientseitige Datenverarbeitung ohne externe Serverkommunikation"
  ],
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Reaktives Augentraining – Sakkadische Neuzentrierung Online | SkillDrills",
  "alternateName": "Dynamische Ausweichziel-Verfolgung",
  "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit",
  "dateModified": "2026-09-20",
  "description": "Wissenschaftlich fundierter Online-Trainer für reaktive okulomotorische Blickverfolgung. Schult die sofortige visuelle Fehlerkorrektur und Fovea-Neuzentrierung bei abrupt ausweichenden Stimuli.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Webbrowser",
  "browserRequirements": "Moderner Webbrowser mit Unterstützung für HTML5 Canvas",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Sehtraining-Spiel",
  "teaches": "Ausweichziel-Verfolgung, Korrektursakkaden, Folgebewegungsgewinn, Retinaler Schlupf, reaktives Zielen"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Reaktives Augentraining – Dynamische Ausweichziel-Verfolgung",
  "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit",
  "description": "Kostenloses interaktives Sehtraining-Spiel. Verfolgen Sie aktiv ausweichende Ziele und trainieren Sie Ihre okulomotorische Reaktions- und Neuzentrierungsfähigkeit.",
  "genre": ["Blickverfolgung", "Sehtraining", "Reaktionstraining"],
  "gamePlatform": ["Webbrowser", "Computer", "Mobilgerät"],
  "applicationCategory": "Game",
  "dateModified": "2026-09-20",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Anleitung für das reaktive Ausweichziel-Training",
  "dateModified": "2026-09-20",
  "description": "Schritt-für-Schritt-Anleitung zur optimalen Durchführung der reaktiven Blickverfolgung und Sakkaden-Neuzentrierung.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Geschwindigkeit und Sitzungsparameter wählen",
      "text": "Wählen Sie zu Beginn eine moderate Geschwindigkeit (1.0x) und eine Übungsdauer von 60 Sekunden, um die Dynamik der Richtungsbrüche kennenzulernen.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Kopf stabilisieren und lineare Bahn glatt verfolgen",
      "text": "Halten Sie 50 bis 70 cm Abstand zum Monitor. Stabilisieren Sie Kopf und Nacken vollständig und folgen Sie der geraden Flugbahn des Ziels.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Sofortige Korrektursakkade bei abrupten Richtungsbrüchen",
      "text": "Sobald das Ziel abrupt ausweicht und die Fovea verlässt, führen Sie eine kurze, scharfe Korrektursakkade aus, um das Ziel wieder ins Sehzentrum zu holen.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Nahtlose Wiederherstellung des Folgebewegungsgewinns",
      "text": "Stoppen Sie den Blick nach der Sakkade nicht abrupt ab, sondern schalten Sie sofort auf die neue Zielgeschwindigkeit und Richtung um.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit#step-4"
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
      "name": "Was ist das reaktive Ausweichziel-Training?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das reaktive Ausweichziel-Training ist ein hochspezifisches okulomotorisches Trainingsmodul, bei dem sich der Stimulus entlang geradliniger Vektoren bewegt und in unregelmäßigen Abständen abrupte, unangekündigte Richtungsbrüche vollzieht. Da kontinuierliche Antizipation unmöglich ist, schult die Übung die Kette aus retinaler Fehlererkennung, sofortiger Korrektursakkade und Wiederherstellung des Folgebewegungsgewinns (Rashbass, 1961; Bahill et al., 1980)."
      }
    },
    {
      "@type": "Question",
      "name": "Worin besteht der Unterschied zwischen harmonischer Blickverfolgung (z. B. Lissajous) und Ausweichziel-Verfolgung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei kontinuierlichen harmonischen Kurven baut das Kleinhirn ein prädiktives Vorwärtsmodell auf, das die sensorische Latenz fast auf null reduziert (Robinson, 1965). Bei Ausweichbewegungen bricht dieses Vorwärtsmodell schlagartig zusammen, was eine rein reaktive Antwort in einer geschlossenen Rückkopplungsschleife erzwingt."
      }
    },
    {
      "@type": "Question",
      "name": "Was geschieht neurobiologisch bei einer Korrektursakkade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Vollzieht das Ziel einen abrupten Knick, übersteigt die Zielauslenkung die physiologische Maximalgeschwindigkeit der glatten Folgebewegung (ca. 30°/s). Das Bild verlässt das Sehzentrum (retinaler Schlupf). Das frontale Augenfeld (FEF) und der Colliculus superior berechnen den Positions- und Geschwindigkeitsfehler und feuern nach ca. 150–200 ms eine ballistische Sakkade ab, um das Ziel wieder in die Fovea zu holen (Krauzlis, 2004; Barnes, 2008)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie unterscheidet sich die reaktive Ausweichziel-Verfolgung von der chaotischen Richtungsverfolgung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die chaotische Richtungsverfolgung wendet kontinuierliche mikroskopische Störungen in jedem Bild an und erzeugt einen dauerhaften Kurvendrift. Das Ausweichziel-Training bewegt sich dagegen entlang klarer linearer Vektoren mit einzelnen harten Abknickungen – mit Fokus auf dynamische Neuzentrierung statt ständiger Zitterkorrektur."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Nutzen hat diese Übung für Shooter-Gamer (z. B. Apex Legends, Overwatch 2)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In taktischen FPS-Spielen weichen Gegner dem Fadenkreuz durch abrupte Seitwärtswechsel, Rutschen oder Ausweichsprünge aus. Ein geschultes Sakkaden-Rückholvermögen reduziert die Reaktionsverzögerung beim Richtungswechsel, sodass das Fadenkreuz ohne langes Nachziehen wieder am Ziel liegt (Yang et al., 2025)."
      }
    },
    {
      "@type": "Question",
      "name": "Verbessert dieses Training auch die sportliche Leistung im Fußball oder Tennis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Bei Körpertäuschungen des Gegners im Zweikampf oder unberechenbar verspringenden Tennisbällen entscheidet die visuelle Agilität – also das blitzschnelle Wiederauffinden des Objekts nach einer unerwarteten Richtungsänderung – über erfolgreiche motorische Reaktionen (Appelbaum & Erickson, 2018)."
      }
    },
    {
      "@type": "Question",
      "name": "Warum darf der Kopf während des Tests absolut nicht mitbewegt werden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei Kopfbewegungen greift der vestibulookuläre Reflex (VOR), der die Augen reflektorisch stabilisiert. Um jedoch die kortikalen und zerebellären Zentren für Sakkaden und reine Folgebewegungen gezielt zu isolieren und zu stärken, müssen die äußeren Augenmuskeln vollkommen unabhängig vom Nacken arbeiten (Leigh & Zee, 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie viel Trainingszeit pro Tag ist optimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wir empfehlen 5 bis 8 Durchgänge à 60 Sekunden mit jeweils 30 Sekunden Pause dazwischen (ca. 5 bis 10 Minuten Gesamtdauer). Da abrupte Re-Zentrierungen eine extrem hohe neuronale Belastung darstellen, führen kurze, hochkonzentrierte Einheiten zu den besten Fortschritten."
      }
    },
    {
      "@type": "Question",
      "name": "Was tun, wenn das ausweichende Ziel zu schnell abreißt und verloren geht?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Reduzieren Sie über das Einstellungsmenü die Geschwindigkeit auf 0.6x bis 0.8x und vergrößern Sie den Zielpunkt auf 24 px. Sobald Sie die ersten Einzelbilder der Richtungsbrüche sicher erkennen und parieren können, steigern Sie das Tempo stufenweise."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Einfluss haben Monitor-Bildwiederholrate (Hz) und Maus-Pollingrate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine hohe Bildwiederholrate ist bei abrupten Ausweichbewegungen entscheidend. Während 60-Hz-Monitore den ersten Knick mit bis zu 16,7 ms Verzögerung anzeigen, liefert ein 144-Hz- oder 240-Hz-Monitor alle 4 bis 7 ms ein frisches Bild. Dies ermöglicht es dem visuellen Kortex, die Korrektursakkade physikalisch ca. 10 ms früher auszulösen (Woods et al., 2015)."
      }
    }
  ]
};

const guideProps = {
  heading: "Neurowissenschaftliche Grundlagen reaktiver Ausweichziel-Verfolgung & Sakkaden-Neuzentrierung",
  intro: [
    "Das Training für reaktive Ausweichziel-Verfolgung konfrontiert das okulomotorische System mit Stimuli, die geradlinige Vektoren mit abrupten, unangekündigten Richtungsbrüchen kombinieren. Im Gegensatz zu zyklischen Bewegungsmustern, bei denen prädiktive interne Modelle des Kleinhirns sensorische Latenzen ausgleichen, wird hier eine rein reaktive Blickverfolgung in einer geschlossenen Rückkopplungsschleife erzwungen (Bahill, Iandolo, & Troost, 1980; Robinson, 1965).",
    "Retinaler Schlupf, sakkadische Neuzentrierung und Wiederherstellung des Folgebewegungsgewinns: Vollzieht das Ziel einen plötzlichen Haken, übersteigt die Winkelgeschwindigkeit die Arbeitsgrenze der glatten Folgebewegung (ca. 30°/s). Das Netzhautbild rutscht schlagartig aus der Fovea centralis ab. Die visuelle Großhirnrinde und der Colliculus superior berechnen den Vektorfehler und feuern nach einer Latenzzeit von 150 bis 200 ms eine kompensatorische Korrektursakkade ab (Rashbass, 1961; Krauzlis, 2004). Die Schnelligkeit, mit der das Ziel nach dem Sakkadensprung ohne Überschwingen wieder stabil mit optimalem Folgebewegungsgewinn geführt werden kann, definiert die dynamische Sehkraft (Barnes, 2008).",
    "Bedeutung für professionellen E-Sport und schnelle Ballsportarten: In kompetitiven FPS-Spielen setzen Gegner komplexe Ausweichmanöver und abrupte Seitwärtswechsel ein, um das Fadenkreuz abzuschütteln (Yang et al., 2025). Auch im Ballsport (z. B. Tennis, Fußball, Basketball) treten unvorhersehbare Haken und Flugbahnänderungen auf (Appelbaum & Erickson, 2018). Dieses Training konditioniert die äußeren Augenmuskeln und die frontalen Augenfelder darauf, Zielabrisse minimal zu halten und Auslenkungen verzögerungsfrei zu parieren.",
    "Hardware-Latenzen und methodische Teststandards: Da plötzliche Richtungswechsel eine blitzschnelle visuelle Erkennung der ersten Bewegungsbilder erfordern, sind Monitore mit 144 Hz oder 240 Hz klassischen 60-Hz-Geräten deutlich überlegen (Woods et al., 2015). Ein stabiler Sitzabstand von 50–70 cm und ein fixierter Kopf stellen sicher, dass vestibuläre Kompensationsmechanismen (VOR) ausgeschaltet bleiben und die okulomotorische Muskulatur isoliert trainiert wird (Leigh & Zee, 2015). Alle Testeinstellungen und Messwerte verbleiben privat im Browser des Nutzers."
  ],
  benchmarks: {
    title: "Leistungsstandards für reaktive Ausweichziel-Verfolgung & Sakkaden-Neuzentrierung (Redaktioneller Leitfaden)",
    headers: ["Leistungsstufe", "Zielgeschwindigkeit", "Sakkadische Neuzentrierung bei Richtungsbrüchen", "Okulomotorisches und neuronales Profil"],
    rows: [
      ["Stufe 1: Spitzenreaktion – Absolute Reflexe", "Ab 2.0x sehr hohe Geschwindigkeit", "Korrektursakkade trifft mit minimaler Latenz (< 150 ms) präzise ein; sofortige foveale Kopplung ohne Überschwingen.", "Höchste synaptische Verarbeitungsgeschwindigkeit. Profi-Niveau in E-Sport und Reaktionssport."],
      ["Stufe 2: Exzellente Blickagilität", "1.4x – 1.9x hohe Geschwindigkeit", "Schnelle und verlässliche Neuzentrierung innerhalb von 1–2 Einzelbildern; nahtlose Wiederaufnahme der Folgebewegung.", "Sehr gut trainierte äußere Augenmuskeln. Ausgezeichnete Beherrschung gegnerischer Ausweichbewegungen."],
      ["Stufe 3: Solider Leistungsstandard", "1.0x – 1.3x Standardbereich", "Verlässliche Verfolgung linearer Abschnitte; bei abrupten Ausweichbrüchen tritt eine kurze Verzögerung auf.", "Normativer Leistungsbereich gesunder Erwachsener. Vollkommen ausreichend für Freizeitsport und Gaming."],
      ["Stufe 4: Verzögerte Refixation – Trainingsbedarf", "0.7x – 0.9x Niedrigbereich", "Ziel wird bei fast jedem Ausweichmanöver verloren; mehrere Sakkaden notwendig, um wieder anzuschließen.", "Verzögerte sensorimotorische Signalverarbeitung bei Richtungsbrüchen. Gezieltes Grundlagentraining angeraten."],
      ["Stufe 5: Erhöhte Latenz – Einsteigerbereich", "Unter 0.7x", "Blickbewegungen hängen stark hinterher und verbleiben auf der alten Bahn des Zielobjekts.", "Grundlegendes Okulomotorik-Training bei langsamer Geschwindigkeit und fixiertem Kopf erforderlich."]
    ],
    note: "Diese Benchmarks basieren auf biomechanischen und neurophysiologischen Studien zur Sakkadenreaktion und Folgebewegungskontrolle unter abrupten Richtungsänderungen (Bahill et al., 1980; Rashbass, 1961; Krauzlis, 2004; Barnes, 2008)."
  },
  techniques: {
    title: "Vier Kerntechniken zur Optimierung der Ausweichziel-Neuzentrierung",
    items: [
      {
        name: "Vollständige Kopfstabilisierung zur Ausschaltung des VOR",
        desc: "Wie Leigh & Zee (2015) nachweisen, aktiviert das Mitbewegen des Kopfes den vestibulookulären Reflex (VOR), wodurch der spezifische Trainingseffekt auf kortikale Sakkadenzentren verloren geht.",
        tips: "Fixieren Sie das Kinn und halten Sie den Nacken ruhig, sodass die Bewegung ausschließlich aus den Augenmuskeln generiert wird."
      },
      {
        name: "Erkennung des ersten Richtungsbruchs und ultrakurze Korrektursakkade",
        desc: "Krauzlis (2004) zeigt, dass bei abrupten Abrissen kein krampfhaftes Hinterherziehen hilft, sondern eine blitzschnelle ballistische Sakkade erforderlich ist.",
        tips: "Springen Sie mit dem Blick gezielt auf den neuen Schwerpunkt des Ziels, anstatt zu versuchen, die Kurve weich auszufahren."
      },
      {
        name: "Nahtlose Wiederaufnahme des Folgebewegungsgewinns ohne Überschwingen",
        desc: "Rashbass (1961) und Barnes (2008) betonen, dass das Auge nach dem Sakkadenstopp nicht verharren darf, sondern sofort auf die neue Zielgeschwindigkeit aufspringen muss.",
        tips: "Koppeln Sie den Blick beim Auftreffen direkt an die neue Richtung an, ohne zögerliche Zwischenstopps einzulegen."
      },
      {
        name: "Displays mit hoher Bildwiederholrate (144 Hz+) zur Latenzminimierung",
        desc: "Woods et al. (2015) heben hervor, dass höhere Bildwiederholraten die Darstellung der ersten Richtungsänderungsframes physikalisch beschleunigen.",
        tips: "Nutzen Sie wenn möglich Monitore mit 144 Hz oder mehr und sorgen Sie für eine ermüdungsfreie Raumausleuchtung."
      }
    ]
  },
  steps: [
    "Wählen Sie die gewünschte Geschwindigkeit (0.5x bis 2.0x) und starten Sie die 60-Sekunden-Sitzung.",
    "Nehmen Sie eine aufrechte Sitzposition im Abstand von 50 bis 70 cm ein und fixieren Sie Ihren Kopf vollständig.",
    "Folgen Sie der geradlinigen Flugbahn des Zielobjekts mit ruhigen, gleichmäßigen Augenbewegungen.",
    "Führen Sie beim abrupten Ausweichknick sofort eine präzise Korrektursakkade aus und koppeln Sie wieder nahtlos an.",
    "Analysieren Sie nach Ablauf der Zeit Ihre Blickkonstanz und passen Sie das Tempo für die nächste Runde an."
  ],
  audience: "FPS- und eSport-Athleten (Apex Legends, Overwatch, CS2, VALORANT), Ballsportler (Tennis, Tischtennis, Badminton, Fußball, Basketball), sowie alle Personen, die ihre visuelle Reaktionsfähigkeit und Augenmuskelpräzision wissenschaftlich fundiert steigern möchten.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('bahill1980', 'rashbass1961', 'krauzlis2004', 'robinson1965', 'barnes2008', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Langsame Augenfolgebewegung" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Chaotische Augenfolgebewegung" },
    { href: "/de/drills/visual-tracking/sine-wave-pursuit", label: "Sinuswellen-Verfolgungstraining" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Achter-Schleifen-Blickübung" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Prädiktive Blickverfolgung" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Blickstabilisierung gegen Nachbilder" }
  ]
};

export default function LocalizedPage() {
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
      <DynamicEvasionPursuitClient
        copy={{
          title: "Reaktives Augentraining – Dynamische Ausweichziel-Verfolgung",
          subtitle: "Sakkadische Neuzentrierung & Reaktives Blickverfolgungs-Training",
          description: "Die Verfolgung aktiv ausweichender Ziele erfordert den nahtlosen Wechsel zwischen glatter Folgebewegung entlang linearer Vektoren und sofortigen Korrektursakkaden bei abrupten Richtungsbrüchen (Rashbass, 1961). Sobald das Ziel ausweicht, minimiert das okulomotorische System die sensomotorische Latenz (~150–200 ms), um die Fovea blitzschnell neu zu zentrieren und den Folgebewegungsgewinn wiederherzustellen (Krauzlis, 2004; Barnes, 2008)."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
