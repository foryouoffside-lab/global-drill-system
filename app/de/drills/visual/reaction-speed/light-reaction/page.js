import StrobeLatencyClient from '@/app/drills/visual/reaction-speed/light-reaction/StrobeLatencyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Reaktionstest online: Reaktionszeit in ms messen",
  description: "Kostenloser Reaktionstest: Klicke, sobald das Licht aufblitzt, und miss deine Reaktionszeit in Millisekunden. Zum Üben, kein MPU- oder medizinischer Test.",
  keywords: [
    "Reaktionstest",
    "Reaktionstest online",
    "Reaktionstest kostenlos",
    "Reaktionstest üben",
    "Reaktionszeit Test",
    "Reaktionszeit messen",
    "reaction time test",
    "reaction test",
    "Reaktionszeit in Millisekunden"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Reaktionstest online: Reaktionszeit in ms messen",
    description: "Kostenloser Reaktionstest im Browser: Warte auf das Lichtsignal, klicke sofort und vergleiche deine Reaktionszeit in Millisekunden.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Reaktionstest online: Reaktionszeit in ms messen",
    description: "Reaktionstest kostenlos: Reagiere auf ein Lichtsignal und vergleiche deine Reaktionszeit in Millisekunden über mehrere Versuche.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/light-reaction'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Trainingskatalog", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" },
    { "@type": "ListItem", "position": 4, "name": "Reaktionsschnelligkeit", "item": "https://skilldrills.online/de/drills/visual/reaction-speed" },
    { "@type": "ListItem", "position": 5, "name": "Lichtreaktionstest", "item": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Reaction_time", "https://en.wikipedia.org/wiki/Mental_chronometry"],
  "name": "Lichtreaktionstest (Visuelle Reaktionszeit)",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "description": "Hochpräziser optischer Reaktionstest zur Bestimmung der einfachen visuellen Reaktionszeit (SRT) und neuromuskulären Signalübertragungszeit.",
  "featureList": [
    "Millisekundengenaue Latenzerfassung via browserinterner performance.now() API",
    "Zufallsgesteuerte inter-stimulare Verzögerungsintervalle (300 ms bis 2.500 ms)",
    "Anti-Spam-Heuristik zur Unterbindung von spekulativem Klick-Antizipieren",
    "Vollständig lokale Speicherung der Bestzeiten ohne Server-Tracking"
  ],
  "dateModified": "2026-09-05"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lichtreaktionstest — Visuelle Reflexzeit Online | SkillDrills",
  "alternateName": "Light Reaction Pro",
  "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction",
  "dateModified": "2026-09-05",
  "description": "Kostenloser visueller Reaktionstest: Klicke blitzschnell bei Aufleuchten des weißen Strobe-Signals im Zentrum des Bildschirms.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas-fähiger Browser.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Einfache visuelle Reaktionszeit, optomotorische Latenz, neuromuskuläre Reflexgeschwindigkeit, Piéron-Gesetz"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Lichtreaktions-Reflextest",
  "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction",
  "description": "Interaktives Reaktionsspiel zur Steigerung der visuellen Impulsreaktion auf Lichtblitze.",
  "genre": ["Action", "Reaction Speed", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So führst du den Lichtreaktionstest durch",
  "dateModified": "2026-09-05",
  "description": "Schritt-für-Schritt-Anleitung zur Bestimmung und Schulung der einfachen visuellen Reaktionszeit im optischen Strobe-Paradigma.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Blickpunkt auf das Zentrum fixieren",
      "text": "Richte deine Augen ruhig auf den dunklen Zielkreis in der Mitte des Canvas aus und vermeide Muskelanspannung.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Auf den unvorhersehbaren Lichtblitz warten",
      "text": "Warte geduldig das zufällige Intervall zwischen 300 ms und 2.500 ms ab, ohne voreilig zu spekulieren.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Blitzschnell beim ersten Photonenimpuls klicken",
      "text": "Klicke oder tippe in dem Moment, in dem der Kreis schneeweiß aufblitzt (+150 Pkt. × Combo × Level).",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Spekulatives Spam-Klicken vermeiden",
      "text": "Ein Klick vor dem Aufblitzen löst eine 1,2-sekündige Abklingzeit aus, um genuine neuromuskuläre Reaktionen zu sichern.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/light-reaction#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert der Reaktionstest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Klicke auf Start und schau auf den Kreis in der Mitte. Nach einer zufälligen Wartezeit blitzt er kurz weiß auf; klicke oder tippe dann sofort. Gemessen wird die Zeit vom Lichtsignal bis zu deinem Klick in Millisekunden. Wer vor dem Blitz klickt, bekommt eine kurze Sperre, damit Raten keinen Vorteil bringt."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist eine gute Reaktionszeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für die einfache Reaktion auf ein Lichtsignal nennt die Übersicht von Kosinski (2008) Mittelwerte um 190 ms bei Studierenden. Online liegt dein Wert meist höher, weil Bildschirm, Browser und Maus Verzögerung hinzufügen. Vergleiche deshalb den Durchschnitt mehrerer Versuche auf demselben Gerät statt eines einzelnen Bestwerts mit fremden Zahlen."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das ein Reaktionstest für MPU oder Führerschein?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Bei der MPU und bei Eignungsuntersuchungen für Fahrerlaubnisse werden standardisierte, computergestützte Verfahren unter Aufsicht eingesetzt. Dieser kostenlose Online-Test misst nur eine einfache Reaktion auf ein Lichtsignal im Browser. Du kannst damit die Aufgabe kennenlernen und üben, aber er ersetzt keine offizielle Testung und sagt kein Ergebnis voraus."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man die Reaktionszeit trainieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Teilweise. Mit Übung werden viele Menschen bei derselben Aufgabe schneller und gleichmäßiger, vor allem weil Aufmerksamkeit und Fingerhaltung ruhiger werden. Ausgeschlafen und ohne Ablenkung zu testen hilft am meisten. Action-Videospieler reagieren in Studien bei manchen Aufgaben schneller (Dye et al., 2009); ein Transfer auf Sport oder Straßenverkehr ist damit nicht belegt."
      }
    },
    {
      "@type": "Question",
      "name": "Warum ist mein Ergebnis am Handy oder Laptop langsamer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Wert enthält auch die Technik: Ein 60-Hz-Bildschirm zeigt nur alle 16,7 ms ein neues Bild, dazu kommen Browser, Touchscreen- oder Mauslatenz. Am Smartphone ist diese Verzögerung oft größer. Für vergleichbare Ergebnisse nutze immer dasselbe Gerät, denselben Browser und dieselbe Eingabe, am besten eine Maus am Desktop."
      }
    }
  ]
};

const lightReactionGuide = {
  heading: "Reaktionstest online: So misst du deine Reaktionszeit",
  intro: [
    "Dieser Reaktionstest misst, wie schnell du auf ein Lichtsignal reagierst: Der Kreis in der Mitte blitzt nach einer zufälligen Wartezeit weiß auf, und du klickst oder tippst so schnell wie möglich. Das Ergebnis ist deine einfache visuelle Reaktionszeit in Millisekunden, gemessen im Browser. Mehrere Versuche hintereinander zeigen deinen Durchschnitt und wie gleichmäßig du reagierst. Der Test ist kostenlos, braucht keine Anmeldung und ist ein Übungswerkzeug, kein MPU- oder medizinischer Test.",
    "Die neuromuskuläre Kaskade umfasst vier distinkte physiologische Phasen: (1) retinale Fototransduktion (~20–40 ms für Rhodopsin-Isomerisierung), (2) afferente Weiterleitung über die Sehbahn zum primären visuellen Kortex V1 (~30–50 ms), (3) kortikale Wahrnehmungs- und Bewegungsvorbereitung im motorischen Kortex (~50–80 ms), und (4) efferente Weiterleitung über die Pyramidenbahn zur Fingermuskulatur (~30–50 ms), was den typischen gesunden Standardbereich von 200–250 ms begründet (Kosinski, 2008; Jain et al., 2015; Shelton & Kumar, 2010).",
    "Gemäß dem Piéron-Gesetz (Piéron, 1952; Pins & Bonnet, 1996) verkürzt sich die Reaktionszeit als hyperbolische Funktion der Stimulus-Leuchtdichte über den Hintergrundkontrast. Dieser Drill maximiert den Effekt durch einen schneeweißen Strobe-Blitz vor tiefschwarzem Hintergrund, um die maximale Ganglienzellen-Depolarisation zu erzeugen. Erkenntnisse zur räumlichen Aufmerksamkeit (Posner, 1980) und E-Sport-Reaktionsstudien (Dye et al., 2009) belegen die Trainierbarkeit dieses Systems.",
    "Messmethodik & Hardware-Standardisierung: Alle Reize und Tastenfreigaben werden hochpräzise mit der browserinternen performance.now() API erfasst. Hardware-Latenzen durch Monitor-Quantisierung und USB-Abtastung werden nach Woods et al. (2015) berücksichtigt, während alle Daten ausschließlich lokal auf dem Endgerät gespeichert werden."
  ],
  benchmarks: {
    title: "Orientierungswerte für visuelle Reaktionszeit im Browser",
    headers: ["Leistungsklasse", "Mittlere Latenzzeit (ms)", "Score- & Combo-Schwelle", "Neuromuskuläres & Reflex-Profil"],
    rows: [
      ["Tier 1: Spitzenklasse / Apex-Reflex", "< 180 ms", "15.000+ Punkte | Combo 28x+", "Außergewöhnliche kortikospinale Erregbarkeit und minimale synaptische Verzögerung;."],
      ["Tier 2: Überdurchschnittlich / Superior", "180 – 219 ms", "10.500 – 14.999 Punkte | Combo 18x+", "Exzellente optomotorische Kopplung; gleichmäßige sub-220ms Latenzen mit minimaler Streuung über lange Sitzungen."],
      ["Tier 3: Solider Standard / Baseline", "220 – 259 ms", "6.000 – 10.499 Punkte | Combo 10x+", "Gesunder Erwachsenen-Standard; typische unvorbereitete motorische Antwort mit leichter Varianz bei Ermüdung."],
      ["Tier 4: Moderate Verzögerung", "260 – 319 ms", "2.500 – 5.999 Punkte | Combo 5x+", "Verlängerte zentrale Signalverarbeitung; anfällig für Monitor-Latenz, Augenmüdigkeit oder Konzentrationsschwankungen."],
      ["Tier 5: Verlängerte Latenz (Basis)", "> 320 ms", "< 2.500 Punkte | Combo < 5x", "Deutliche sensorische Verzögerung; unkalibrierte Hardware, 60-Hz-Display-Latenzen oder starke kognitive Ermüdung."]
    ],
    note: "Diese Richtwerte basieren auf klassischer Chronometrie und Reaktionspsychophysik (Kosinski, 2008; Woods et al., 2015; Pins & Bonnet, 1996; Jain et al., 2015). Ergebnisse variieren je nach Tageszeit, Koffein und Bildschirmlatenz."
  },
  techniques: {
    title: "Reaktionszeit testen und unter gleichen Bedingungen trainieren",
    items: [
      {
        name: "Foveale Voraktivierung & Blickverankerung",
        desc: "Das starre Fixieren der Fovea centralis auf das Zentrum eliminiert den 20–30 ms Zeitverlust für verdeckte Aufmerksamkeitssprünge (Posner, 1980).",
        tips: "Halte deinen Blick unbeweglich auf den dunklen Zielkreis gerichtet und lass die Augen nicht zu HUD-Elementen abschweifen."
      },
      {
        name: "Piéron-Kontrastoptimierung & Fotorezeptor-Priming",
        desc: "Maximaler Kontrast erzeugt die höchste retinale Entladungsfrequenz und verkürzt die Übertragungszeit (Pins & Bonnet, 1996).",
        tips: "Dunkle das Zimmer leicht ab, sodass sich deine Pupillen weiten und der weiße Blitz einen maximalen Kontrastimpuls auslöst."
      },
      {
        name: "Isometrische Fingervorspannung",
        desc: "Mechanischer Tastenhub und Entprellzeit addieren unnötige Verzögerungen, wenn die Finger über der Taste schweben (Woods et al., 2015).",
        tips: "Lege die Fingerkuppe mit leichter, entspannter Vorspannung direkt auf den Mausschalter, um ohne Leerweg auszulösen."
      },
      {
        name: "Hardware-Optimierung für minimale Verzögerung",
        desc: "Ein 60-Hz-Monitor fügt bis zu 16,7 ms Anzeigeverzug hinzu, während 240-Hz-Displays diesen auf 4,1 ms drücken (Woods et al., 2015).",
        tips: "Nutze einen Monitor mit 144 Hz oder 240 Hz sowie eine Gaming-Maus mit 1000 Hz Abtastrate für reaktionsgetreue Erfassung."
      }
    ]
  },
  steps: [
    "Klicke auf Drill Starten, um die 45-Sekunden-Lichtreaktions-Sitzung zu aktivieren.",
    "Fixiere deinen Blick ruhig auf den dunklen Kreis in der Mitte des Bildschirms.",
    "Warte geduldig die zufällige Verzögerung ab (300 ms bis 2.500 ms), ohne voreilig zu raten.",
    "Klicke sofort bei Aufleuchten des weißen Strobe-Signals (+150 Pkt. × Multiplikator).",
    "Analysiere nach Rundenende deine mittlere Reaktionszeit, den erreichten Level und die Bewertungsstufe."
  ],
  audience: "E-Sportler (FPS, MOBAs), Sprinter, Kampfsportler, Motorsportler, Piloten und alle Personen, die ihre optomotorische Reaktionszeit verbessern wollen.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('woods2015', 'kosinski2008', 'pins1996', 'posner1980', 'jain2015', 'dye2009'),
  related: [
    { href: "/de/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go Impulskontrolle" },
    { href: "/de/drills/visual/depth-perception/distance-judgment", label: "Tiefenwahrnehmung & Distanzurteil" },
    { href: "/de/drills/visual/tracking-accuracy/moving-target", label: "Bewegungsziel-Interzeption" },
    { href: "/de/drills/visual/tracking-accuracy/multiple-targets", label: "Multi-Objekt-Tracking" },
    { href: "/de/drills/visual/tracking-accuracy/pursuit-tracker", label: "Kontinuierlicher Blickfolge-Tracker" },
    { href: "/de/drills/visual/visual-recognition/entropic-grid", label: "Entropisches Gitter-Suchspiel" }
  ]
};

export default function StrobeLatencyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <StrobeLatencyClient copy={{ title: "Reaktionstest: Reaktionszeit in Millisekunden", startCardTitle: "Reaktionstest", startCardSubtitle: "Klicke, sobald das Licht aufblitzt" }} />
      <DrillGuide guide={lightReactionGuide} />
      <RelatedDrills />
    </>
  );
}
