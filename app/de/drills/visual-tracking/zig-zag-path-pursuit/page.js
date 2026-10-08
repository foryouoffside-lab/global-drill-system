import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Blickfolge Übungen: Zickzack-Bahn | SkillDrills",
  description: "Blickfolge üben: Verfolge ein Ziel auf einer Zickzackbahn und zähle Zielverluste an den Knickpunkten. Kostenlos im Browser, kein Augentest.",
  keywords: [
    "Zickzack Blickverfolgung Übung",
    "Zickzack Augentraining",
    "Blickfolgebewegung Richtungswechsel",
    "Augenbewegungen Zickzack",
    "Blickverfolgung Übung online",
    "Augentraining schnelle Richtungswechsel",
    "visuelles Training Zickzack",
    "Blickfolge Zielverlust reduzieren",
    "Augenübung für Sportler",
    "okulomotorisches Training Zickzack",
    "visuelle Reaktionszeit Übung",
    "kostenloses Augentraining online"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Blickfolge Übungen: Zickzack-Bahn | SkillDrills",
    description: "Blickfolge üben: Verfolge ein Ziel auf einer Zickzackbahn und zähle Zielverluste an den Knickpunkten. Kostenlos im Browser, kein Augentest.",
    url: 'https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Blickfolge Übungen: Zickzack-Bahn | SkillDrills",
    description: "Blickfolge üben: Verfolge ein Ziel auf einer Zickzackbahn und zähle Zielverluste an den Knickpunkten. Kostenlos im Browser, kein Augentest.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit',
    languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Startseite",
      "item": "https://skilldrills.online/de"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Trainingsübersicht",
      "item": "https://skilldrills.online/de/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Blickverfolgung & Okulomotorik",
      "item": "https://skilldrills.online/de/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Zickzack-Blickverfolgung",
      "item": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit", "https://en.wikipedia.org/wiki/Saccade"],
  "name": "Zickzack-Blickverfolgung",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Trainieren Sie Blickfolge und Fangsakkaden an Zickzack-Vektorbahnen. Meistern Sie abrupte Richtungswechsel und Zielverluste online.",
  "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Zickzack-Blickverfolgung",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Benötigt HTML5 Canvas und JavaScript-fähigen Browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Zickzack-Blickverfolgung",
  "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit",
  "description": "Trainieren Sie Blickfolge und Fangsakkaden an Zickzack-Vektorbahnen. Meistern Sie abrupte Richtungswechsel und Zielverluste online.",
  "genre": [
    "Action",
    "Augentraining",
    "Aim Trainer"
  ],
  "gamePlatform": [
    "Webbrowser",
    "Desktop",
    "Mobil"
  ],
  "applicationCategory": "Game",
  "dateModified": "2026-09-20",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Anleitung zum Zickzack-Blickverfolgungstraining",
  "description": "Methodischer 4-Schritte-Leitfaden zur Koordination stetiger Blickfolgebewegungen und reaktiver Fangsakkaden an hochfrequenten Zickzack-Scheitelpunkten.",
  "dateModified": "2026-09-20",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Zickzack-Parameter konfigurieren",
      "text": "Wählen Sie Sessiondauer (30 bis 120 Sekunden), Zielgeschwindigkeit, Punktgröße und Farbe. Aktivieren Sie 'Hilfslinie ausblenden' zur Ausschaltung visueller Führungslinien.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Diagonale Blickfolgebewegung etablieren",
      "text": "Verankern Sie den Blick foveal auf dem Ziel entlang der geraden Zickzack-Segmente und stimmen Sie horizontale und vertikale Augenmuskeln synchron ab.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Prädiktives Bremsen und Fangsakkaden an Eckpunkten",
      "text": "Drosseln Sie die Folgebewegung unmittelbar vor dem spitzen Knickpunkt, um Überschwinger zu verhindern, und schnappen Sie mit einer Fangsakkade auf das neue Segment.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Progression mit Geschwindigkeit und Zufallstempo",
      "text": "Erhöhen Sie den Geschwindigkeitsmultiplikator und schalten Sie 'Zufallstempo' hinzu, um dynamische, unvorhersehbare Rhythmuswechsel zu trainieren.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit#step-4"
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
      "name": "Was ist die Zickzack-Blickverfolgung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Zickzack-Blickverfolgung ist ein okulomotorisches Visualtraining, bei dem ein Stimulus entlang einer alternierenden Zickzack-Trajektorie verfolgt wird. Sie schult den Wechsel zwischen stetiger Blickfolgebewegung und antagonistischer Augenmuskelbremsung an hochfrequenten Knickpunkten (de Brouwer et al., 2002)."
      }
    },
    {
      "@type": "Question",
      "name": "Worin liegt der Unterschied zwischen polygonaler Blickverfolgung und Zickzack-Blickverfolgung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Während ein Dreieck nur 3 Ecken pro Umlauf aufweist, erzeugt der Zickzack-Pfad eine dichte, pausenlose Abfolge von 120°-Richtungsbrüchen. Agonistische und antagonistische Augenmuskeln (Rectus medialis/lateralis) müssen in rascher Folge Brems- und Beschleunigungskräfte austauschen (Krauzlis, 2004)."
      }
    },
    {
      "@type": "Question",
      "name": "Warum schießt der Blick an den Scheitelpunkten regelmäßig über das Ziel hinaus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aufgrund der Trägheit der Augenbewegung und einer sensorischen Rückkopplungslatenz von ca. 100 bis 150 ms erreicht die Richtungsänderung des Ziels das Mittelhirn erst, wenn das Auge bereits über die Kante hinausgewandert ist. Training konditioniert ein prädiktives Abbremsen im Kleinhirn (Barnes, 2008)."
      }
    },
    {
      "@type": "Question",
      "name": "Was führt zum vorzeitigen Kurvenschneiden (Cutting Corners) an den Knickpunkten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das frontale Blickfeld antizipiert die nächste Kante übermäßig und löst eine verfrühte Sakkade aus, bevor das Ziel den Scheitelpunkt berührt (Heinen et al., 2005). Die Unterdrückung dieses Musters trainiert foveale Fixationsdisziplin."
      }
    },
    {
      "@type": "Question",
      "name": "Wie verbessert diese Übung das Strafe-Aiming in Ego-Shootern (CS2, Valorant, Apex)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gegner wechseln beim Strafen schnell die Richtung. Die Übung trainiert, ein Ziel über abrupte Richtungsumkehren im Blick zu behalten. Ob sich das im Spiel auszahlt, hängt von deinem Aim-Training ab; ein Leistungsversprechen gibt es dafür nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Vorteile ergeben sich für dynamische Sportarten (Tennis, Fußball, Kampfsport)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei Zickzack-Läufen eines Balls oder schnellen Ausweichbewegungen im Boxen muss der Blick Richtungswechseln folgen. Die Übung lässt dich genau das am Bildschirm üben. Ein nachgewiesener Transfer auf den Sport ist damit nicht belegt."
      }
    },
    {
      "@type": "Question",
      "name": "Wie sieht das optimale tägliche Trainingsprogramm aus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Empfohlen werden 2 bis 3 Sätze von jeweils 45 bis 60 Sekunden Dauer (insgesamt ca. 3 bis 5 Minuten täglich). Kurze, hochintensive Wiederholungen verhindern okuläre Ermüdung und festigen die neuronale Steuerung am wirksamsten."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen Trainingseffekt erzielt das Ausblenden der Leitlinie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ohne Orientierungslinie muss das visuelle System die räumlichen Koordinaten der Knickpunkte rein intern im Kleinhirn und prämotorischen Kortex antizipieren. Die sensomotorische Vorwärtssteuerung wird dadurch maximal gefordert (Orban de Xivry & Lefèvre, 2007)."
      }
    },
    {
      "@type": "Question",
      "name": "Warum ist ein 144Hz- oder 240Hz-Bildschirm für Zickzack-Drills überlegen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Bild dauert bei 60 Hz rund 16,7 ms, bei 144 Hz rund 6,9 ms und bei 240 Hz rund 4,2 ms. Das mindert Bewegungsunschärfe an den Umkehrpunkten. Die Übung läuft auch auf 60 Hz; vergleiche Ergebnisse nur auf demselben Bildschirm (Woods et al., 2015)."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Hirnstrukturen passen sich bei regelmäßiger Zickzack-Blickverfolgung an?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für Blickfolge und Sakkaden sind unter anderem das frontale Augenfeld (FEF), das supplementäre Augenfeld (SEF) und der Kleinhirnwurm beteiligt. Wie stark sich diese Systeme durch diese Übung verändern, ist nicht gemessen; die Übung dient als Selbsttraining und ersetzt keine augenärztliche Untersuchung."
      }
    }
  ]
};

const guide = {
  heading: "Zickzack-Blickverfolgung – Richtungswechsel-Training: Antagonistische Augenmuskelbremsung und Fangsakkaden",
  intro: [
    "Das Nachverfolgen visueller Reize entlang einer mehrgliedrigen, alternierenden Zickzack- oder Sägezahn-Trajektorie ist eine anspruchsvolle Aufgabe für das Zusammenspiel von stetiger Blickfolgebewegung und abrupter Vektorumkehr dar. Entlang der geraden Schrägsegmente feuern horizontale und vertikale Augenmuskelgruppen in präziser Synchronisation, um den retinalen Schlupf auf null zu minimieren. Doch im Moment des spitzen Knickpunkts müssen die bisherigen Beschleunigungsmuskeln schlagartig als elastische Bremsen fungieren, während die Antagonisten explosionsartig kontrahieren (Krauzlis, 2004).",
    "Die wesentliche Hürde dieses hochfrequenten Bewegungsmusters liegt in der sensomotorischen Übertragungslatenz des Menschen (~100 bis 150 ms). Bis die Information über den plötzlichen Richtungswechsel des Stimulus über die Fovea und das Sehzentrum im Mittelhirn ankommt, treibt die mechanische Trägheit der Augen den Blick über den Scheitelpunkt hinaus. Wie Arbeiten von de Brouwer et al. (2002) und Orban de Xivry & Lefèvre (2007) demonstrieren, schaltet das Zentralnervensystem an solchen Kanten blitzschnell von Folgebewegung auf Fangsakkaden um, koordiniert über die frontalen Augenfelder (FEF).",
    "Systematisches Training an Zickzack-Bahnen baut im Kleinhirn hochpräzise interne Vorwärtsmodelle (Internal Forward Models) auf (Bennett & Barnes, 2006; Barnes, 2008). Dadurch wird das okulomotorische System befähigt, bereits vor Erreichen des Scheitelpunkts einen prädiktiven Bremsimpuls zu setzen. Der Blick 'haftet' regelrecht am Knickpunkt und wird mit einer einzigen, hochpräzisen Sakkade ohne zittrige Nachkorrekturen auf das nächste Bewegungssegment überführt. Okulärer Jitter wird eliminiert und die visuelle Sehschärfe bleibt ununterbrochen erhalten.",
    "Die Übung 'Zickzack-Blickverfolgung' wurde entwickelt, um diese hochdynamische Vektorkontrolle online zu trainieren. Durch das wiederholte Bewältigen spitzer Richtungswechsel eliminieren Sie Unruhe und Reaktionsverzögerungen bei unregelmäßig manövrierenden Zielen. Nutzen Sie 'Hilfslinie ausblenden' für reines internes Raumtraining und 'Zufallstempo' zur Ausschaltung starrer Rhythmusmuster.",
    "Hardware-Latenz und Messmethodik: Die Hardware-Latenz unterliegt der Bildschirmquantisierung (~16,7 ms bei 60 Hz, ~6,9 ms bei 144 Hz, ~4,1 ms bei 240 Hz) sowie den Polling-Intervallen der Eingabegeräte (~8 ms bei 125 Hz vs. ~1 ms bei 1.000 Hz), wie von Woods et al. (2015) dokumentiert. Alle Leistungsdaten und Reaktionsprofile werden ausschließlich lokal im Browser-Speicher (localStorage) gesichert und niemals extern übertragen."
  ],
  benchmarks: {
    title: "Leistungsstandards der Zickzack-Blickverfolgung (Geschwindigkeit & Scheitelpunkt-Präzision)",
    headers: ["Leistungsstufe", "Empfohlene Geschwindigkeit", "Landefehler am Knickpunkt", "Umkehr-Sakkadenlatenz", "Einordnung"],
    rows: [
      ["Elite / Perfekte neuronale Adaptation (Elite)", "3.5x〜5.0x+", "Fehler < 12px (vollständige Haftung an Knickpunkten)", "Latenz < 110ms (perfekte Vorwärtsbremsung)", "Stufe 1"],
      ["Meister / Höchste Richtungsdisziplin (Master)", "2.5x〜3.5x", "Fehler < 22px (nur minimale Mikrosakkaden)", "Latenz < 140ms (geschmeidige Umkehr)", "Stufe 2"],
      ["Fortgeschritten / Wettkampfniveau (Advanced)", "1.8x〜2.5x", "Fehler < 38px (schnelle Wiedererfassung)", "Latenz < 180ms (solide Richtungswechsel)", "Stufe 3"],
      ["Mittelstufe / Grundlegend geübt (Intermediate)", "1.2x〜1.8x", "Fehler 38〜70px (Überschwinger & Kurvenschneiden)", "Latenz 180〜240ms (mehrere Korrekturen)", "Stufe 4"],
      ["Einsteiger / Untrainiert", "0.5x〜1.2x", "Fehler > 70px (völliger Zielverlust an Knickpunkten)", "Latenz > 250ms (ausgeprägtes Überschwingen)", "Stufe 5"]
    ],
    note: "Die Richtwerte basieren auf de Brouwer et al. (2002) zur Dynamik von Fangsakkaden sowie Krauzlis (2004) zur neuronalen Steuerung bei abrupten Geschwindigkeits- und Richtungsumkehren. Die Bereiche sind redaktionelle Übungsmarken, keine Bevölkerungsstatistik."
  },
  steps: [
    { title: "Das Ziel mittig erfassen", text: "Halten Sie den Kopf ruhig und verfolgen Sie das Ziel im ersten diagonalen Abschnitt." },
    { title: "Die Gerade bis zum Ende verfolgen", text: "Folgen Sie jedem Abschnitt ohne Abkürzung bis zum Knickpunkt." },
    { title: "Vor dem Richtungswechsel bremsen", text: "Verringern Sie den Blickimpuls vor der Umkehr, damit der Blick die Ecke nicht überschießt." },
    { title: "Tempo erst bei stabiler Genauigkeit erhöhen", text: "Steigern Sie die Geschwindigkeit erst, wenn Zielverluste und Knickpunktfehler stabil bleiben." }
  ],
  techniques: [
    {
      title: "Gleichmäßige Muskelspannung und Entspannung auf linearen Schrägsegmenten",
      description: "Während der Passage der geraden Zickzack-Abschnitte führt eine Verkrampfung der Augenmuskulatur zu verspäteter Bremsung an der nächsten Kante. Halten Sie die Fovea entspannt auf dem Führungspunkt des Ziels.",
      tips: [
        "Richten Sie den Blick gelassen auf die vordere Kante des Stimulus und lassen Sie das Auge geradlinig gleiten",
        "Halten Sie Kopf und Nacken ruhig; isolieren Sie bewusst ausschließlich die Bewegung der Augäpfel",
        "Vermeiden Sie Lidschläge während der linearen Passage, um die kontinuierliche Netzhautabbildung zu sichern"
      ]
    },
    {
      title: "Prädiktives Bremsen vor dem Knickpunkt gegen Überschwingen",
      description: "Aktivieren Sie kurz vor Erreichen des spitzen Scheitelpunkts die cerebelläre Vorwärtsbremse. Verhindern Sie, dass die Bewegungsträgheit den Blick unkontrolliert über die Ecke schiebt.",
      tips: [
        "Fokussieren Sie etwa 30 ms vor dem Knickpunkt die beginnende Geschwindigkeitsdrosselung des Ziels",
        "Stellen Sie sich vor, die Fovea am Scheitelpunkt für einen winzigen Moment wie mit einer Stecknadel zu fixieren",
        "Atmen Sie beim Passieren der Richtungswechsel ruhig und flach aus, um okulären Spannungsaufbau zu lösen"
      ]
    },
    {
      title: "Einzelne, präzise Fangsakkade nach der Vektorumkehr",
      description: "Falls der Blick nach dem Richtungswechsel hinterherhinkt, korrigieren Sie nicht mit zittrigen Mikrosakkaden, sondern mit einem einzigen, sauberen Fangsakkadensprung direkt auf die neue Bahn.",
      tips: [
        "Lassen Sie den Blick nach dem Richtungsbruch präzise auf den neuen Bewegungsvektor aufschnappen",
        "Warten Sie das tatsächliche Erreichen des Scheitelpunkts ab, statt die Kurve spekulativ innen abzukürzen",
        "Schalten Sie innerhalb von 100 ms nach der Sakkade nahtlos wieder in die kontinuierliche Blickfolge um"
      ]
    },
    {
      title: "Aktivierung des internen geometrischen Taktes ohne Hilfslinie",
      description: "Blenden Sie die Pfadlinie aus, um die räumlichen Koordinaten des Zickzack-Musters rein intern im Gedächtnis abzubilden. Nutzen Sie den rhythmischen Takt (links, rechts, links, rechts) zur mentalen Vorhersage.",
      tips: [
        "Leiten Sie aus der Bildschirmbreite und dem Wendewinkel die Raumkoordinaten des nächsten Umkehrpunkts ab",
        "Verinnerlichen Sie die konstante Zielgeschwindigkeit wie den gleichmäßigen Schlag eines Metronoms",
        "Trainieren Sie ohne Führungslinie, bis die Landeabweichung am Scheitelpunkt stabil unter 20 Pixeln bleibt"
      ]
    }
  ],
  deviceCalibration: {
    title: "Hardware- und Ergonomie-Standards für Zickzack-Blickverfolgung",
    points: [
      "Bildschirmwiederholrate: Um Bewegungsunschärfe und Ruckeln an den hochfrequenten Knickpunkten zu eliminieren, wird ein Display mit mindestens 144 Hz empfohlen. 6,9 ms Bildabfolge sichert exaktes Scheitelpunkt-Timing (Woods et al., 2015).",
      "Reaktionszeit und Ghosting-Kontrolle: Bei schnellen Vektorumkehren führen Schlieren zur optischen Täuschung bezüglich der exakten Scheitelpunktposition; Panels mit ≤ 1 ms Reaktionszeit sind ideal.",
      "Betrachtungsabstand und Ausrichtung: Halten Sie 50 bis 65 cm Abstand, damit die gesamte Zickzack-Spannweite in einem Blickwinkel von 35° bis 40° liegt. Die Bildmitte sollte knapp unter Augenhöhe liegen.",
      "Kontrast- und Beleuchtungsabstimmung: Maximieren Sie den Kontrast zwischen tiefschwarzem Hintergrund (#050508) und rotem Ziel (#ef4444) bei reflexionsfreier, blendfreier Raumbeleuchtung."
    ]
  },
  faqs: [
    {
      "q": "Was ist die Zickzack-Blickverfolgung?",
      "a": "Die Zickzack-Blickverfolgung ist ein okulomotorisches Visualtraining, bei dem ein Stimulus entlang einer alternierenden Zickzack-Trajektorie verfolgt wird. Sie schult den Wechsel zwischen stetiger Blickfolgebewegung und antagonistischer Augenmuskelbremsung an hochfrequenten Knickpunkten (de Brouwer et al., 2002)."
    },
    {
      "q": "Worin liegt der Unterschied zwischen polygonaler Blickverfolgung und Zickzack-Blickverfolgung?",
      "a": "Während ein Dreieck nur 3 Ecken pro Umlauf aufweist, erzeugt der Zickzack-Pfad eine dichte, pausenlose Abfolge von 120°-Richtungsbrüchen. Agonistische und antagonistische Augenmuskeln (Rectus medialis/lateralis) müssen in rascher Folge Brems- und Beschleunigungskräfte austauschen (Krauzlis, 2004)."
    },
    {
      "q": "Warum schießt der Blick an den Scheitelpunkten regelmäßig über das Ziel hinaus?",
      "a": "Aufgrund der Trägheit der Augenbewegung und einer sensorischen Rückkopplungslatenz von ca. 100 bis 150 ms erreicht die Richtungsänderung des Ziels das Mittelhirn erst, wenn das Auge bereits über die Kante hinausgewandert ist. Training konditioniert ein prädiktives Abbremsen im Kleinhirn (Barnes, 2008)."
    },
    {
      "q": "Was führt zum vorzeitigen Kurvenschneiden (Cutting Corners) an den Knickpunkten?",
      "a": "Das frontale Blickfeld antizipiert die nächste Kante übermäßig und löst eine verfrühte Sakkade aus, bevor das Ziel den Scheitelpunkt berührt (Heinen et al., 2005). Die Unterdrückung dieses Musters trainiert foveale Fixationsdisziplin."
    },
    {
      "q": "Wie verbessert diese Übung das Strafe-Aiming in Ego-Shootern (CS2, Valorant, Apex)?",
      "a": "Gegner wechseln beim Strafen schnell die Richtung. Die Übung trainiert, ein Ziel über abrupte Richtungsumkehren im Blick zu behalten. Ob sich das im Spiel auszahlt, hängt von deinem Aim-Training ab; ein Leistungsversprechen gibt es dafür nicht."
    },
    {
      "q": "Welche Vorteile ergeben sich für dynamische Sportarten (Tennis, Fußball, Kampfsport)?",
      "a": "Bei Zickzack-Läufen eines Balls oder schnellen Ausweichbewegungen im Boxen muss der Blick Richtungswechseln folgen. Die Übung lässt dich genau das am Bildschirm üben. Ein nachgewiesener Transfer auf den Sport ist damit nicht belegt."
    },
    {
      "q": "Wie sieht das optimale tägliche Trainingsprogramm aus?",
      "a": "Empfohlen werden 2 bis 3 Sätze von jeweils 45 bis 60 Sekunden Dauer (insgesamt ca. 3 bis 5 Minuten täglich). Kurze, hochintensive Wiederholungen verhindern okuläre Ermüdung und festigen die neuronale Steuerung am wirksamsten."
    },
    {
      "q": "Welchen Trainingseffekt erzielt das Ausblenden der Leitlinie?",
      "a": "Ohne Orientierungslinie muss das visuelle System die räumlichen Koordinaten der Knickpunkte rein intern im Kleinhirn und prämotorischen Kortex antizipieren. Die sensomotorische Vorwärtssteuerung wird dadurch maximal gefordert (Orban de Xivry & Lefèvre, 2007)."
    },
    {
      "q": "Warum ist ein 144Hz- oder 240Hz-Bildschirm für Zickzack-Drills überlegen?",
      "a": "Ein Bild dauert bei 60 Hz rund 16,7 ms, bei 144 Hz rund 6,9 ms und bei 240 Hz rund 4,2 ms. Das mindert Bewegungsunschärfe an den Umkehrpunkten. Die Übung läuft auch auf 60 Hz; vergleiche Ergebnisse nur auf demselben Bildschirm (Woods et al., 2015)."
    },
    {
      "q": "Welche Hirnstrukturen passen sich bei regelmäßiger Zickzack-Blickverfolgung an?",
      "a": "Für Blickfolge und Sakkaden sind unter anderem das frontale Augenfeld (FEF), das supplementäre Augenfeld (SEF) und der Kleinhirnwurm beteiligt. Wie stark sich diese Systeme durch diese Übung verändern, ist nicht gemessen; die Übung dient als Selbsttraining und ersetzt keine augenärztliche Untersuchung."
    }
  ],
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'krauzlis2004', 'barnes2008', 'woods2015'),
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

      <ZigZagPathPursuitClient copy={{
        title: "Zickzack-Blickverfolgung",
        subtitle: "Diagonale Blickfolge und schnelle Umkehr",
        description: "Verfolge ein Ziel auf einer Zickzackbahn und prüfe Blickverluste und Fehler an den Knickpunkten."
      }} />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
