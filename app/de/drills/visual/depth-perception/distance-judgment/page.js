import DistanceJudgmentClient from '@/app/drills/visual/depth-perception/distance-judgment/DistanceJudgmentClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Tiefenwahrnehmung testen: Entfernung schätzen | SkillDrills',
  description: 'Tiefenwahrnehmung testen im Browser: Klicke, wenn die herannahende Kugel den Zielring deckt. Kostenlos, Auswertung als Fehler in Prozent. Kein Sehtest.',
  keywords: [
    'Tiefenwahrnehmung testen',
    'Tiefenwahrnehmung Test',
    'Tiefenwahrnehmung üben',
    'Entfernung schätzen',
    'Entfernung einschätzen',
    'Time-to-Contact',
    'räumliche Wahrnehmung',
    'Abfang-Timing üben',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Tiefenwahrnehmung testen: Entfernung schätzen | SkillDrills',
    description: 'Tiefenwahrnehmung testen im Browser: Klicke, wenn die herannahende Kugel den Zielring deckt. Kostenlos, Auswertung als Fehler in Prozent. Kein Sehtest.',
    type: 'article',
    url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Tiefenwahrnehmung testen: Entfernung schätzen | SkillDrills',
    description: 'Tiefenwahrnehmung testen im Browser: Klicke, wenn die herannahende Kugel den Zielring deckt. Kostenlos, Auswertung als Fehler in Prozent. Kein Sehtest.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment',
    languages: getAlternateLanguages('/drills/visual/depth-perception/distance-judgment'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Visuelle Wahrnehmung', item: 'https://skilldrills.online/de/drills/visual' },
    { '@type': 'ListItem', position: 3, name: 'Tiefenwahrnehmung', item: 'https://skilldrills.online/de/drills/visual/depth-perception' },
    { '@type': 'ListItem', position: 4, name: 'Tiefenwahrnehmung testen', item: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Depth_perception"],
  name: 'Tiefenwahrnehmung testen: Entfernung schätzen',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Browser-Übung zur Entfernungsschätzung: Eine Kugel nähert sich, der Klick im Moment der Deckung mit dem Zielring wird als Timing-Fehler in Prozent ausgewertet. Kein Sehtest.',
  url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Tiefenwahrnehmung testen online',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Moderner Webbrowser mit HTML5 Canvas und kontinuierlicher Pointer-Event-Unterstützung',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Entfernung schätzen: Abfang-Timing-Drill',
  url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment',
  description: 'Visueller Timing-Drill zum Üben von Entfernungsschätzung, Time-to-Contact (TTC) und Abfanggenauigkeit.',
  genre: ['Precision Game', 'Visual Training', 'Esports'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Anleitung zur Übung der Entfernungsschätzung',
  description: 'Trainingsprotokoll, um die optische Expansion einer herannahenden Kugel zu beobachten und den Klick zeitlich genau zu setzen.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Referenzring und Fluchtpunkt fixieren',
      text: 'Blicke auf den stationären Zielring in der Mitte des virtuellen Tunnels.',
      url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment#step-1'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Herannahendes Objekt beobachten',
      text: 'Verfolge die Kugel, wie sie aus der Tiefe herannaht und auf der Netzhaut expandiert.',
      url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment#step-2'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Exakter Koinzidenz-Abfang',
      text: 'Klicke oder tippe in dem Moment, in dem der Rand der Kugel den Zielring deckt.',
      url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment#step-3'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Tiefenabweichung analysieren',
      text: 'Überprüfe deine prozentuale Fehlerabweichung und passe deine zeitliche Vorausschau bei höherem Tempo an.',
      url: 'https://skilldrills.online/de/drills/visual/depth-perception/distance-judgment#step-4'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was misst diese Übung zur Entfernungsschätzung, und was nicht?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du schätzt ein, wann eine herannahende Kugel den Zielring ausfüllt, und klickst in diesem Moment. Ausgewertet wird dein Timing-Fehler in Prozent. Es ist kein Sehtest und kein Test auf Stereosehen: Auf einem flachen Bildschirm gibt es keine binokulare Disparität, nur monokulare Hinweise wie die Größenzunahme (Looming).',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie unterscheidet sich dieser Test vom klassischen Howard-Dolman-Test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Der Howard-Dolman-Test (1919) verwendet drei physische Stäbchen zur Messung der binokularen Disparität (Stereosehschärfe). Auf einem flachen 2D-Bildschirm entfällt echte Stereoskopie; stattdessen übt diese Übung das Einschätzen der optischen Expansionsrate (Lee, 1976).',
      },
    },
    {
      '@type': 'Question',
      name: 'Was versteht man unter optischem Looming und Time-to-Contact (TTC)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wenn sich ein Objekt nähert, wächst sein Bild auf der Netzhaut immer schneller. David Lee (1976) beschrieb mit der Tau-Variable, wie sich die verbleibende Zeit bis zur Kollision aus dem Verhältnis von Bildgröße zu Expansionsrate ableiten lässt, ohne die absolute Größe oder Distanz zu kennen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ersetzt diese Übung den Sehtest für den Führerschein?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Diese Übung ist ein Spiel zum Üben von Abfang-Timing und liefert keine Aussage über dein Sehvermögen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wann sollte ich mein räumliches Sehen augenärztlich prüfen lassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei Doppelbildern, häufigem Danebengreifen, Schielen oder unterschiedlicher Sehstärke beider Augen (Anisometropie) lass die Augen untersuchen. Ein schlechtes Ergebnis in dieser Übung ist kein Befund; Müdigkeit, Bildschirm und Eingabegerät beeinflussen es.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann man Entfernungsschätzung und Abfang-Timing üben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Abfang-Timing in dieser Übung kannst du durch Wiederholung vermutlich verbessern, weil du Rückmeldung zu jedem Versuch bekommst. Ein Übertrag auf Straßenverkehr oder Sport ist nicht belegt, und anatomische Ursachen gehören in augenärztliche Hände.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie wird die Fehlerabweichung im Test berechnet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Gewertet wird der Abstand zwischen der Tiefe der Kugel beim Klick und der Tiefe des Zielrings in Prozent. Bis 7 % gibt es 150 Punkte, bis 16 % 100 Punkte; mit steigendem Level schrumpfen diese Grenzen auf 4 % und 10 %. Alle 750 Punkte steigt das Level und die Kugel wird schneller. Ein Fehlklick kostet keine Punkte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum ist Time-to-Contact bei Ballsportarten wichtig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bei schnellen Bällen bleibt nur ein Bruchteil einer Sekunde zum Reagieren. Die Forschung zu Time-to-Contact beschreibt, wie sich der Zeitpunkt des Treffens aus der Größenzunahme des Bildes abschätzen lässt (Lee, 1976). Die Übung zeigt dir diesen Hinweis am Bildschirm; ein Leistungsversprechen für den Sport gibt sie nicht.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Rolle spielt die Bildwiederholrate (Hz) des Monitors bei dieser Übung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Bild dauert bei 60 Hz rund 16,7 ms, bei 144 Hz rund 6,9 ms und bei 240 Hz rund 4,2 ms. Das verändert, wie fein du den Moment der Deckung sehen kannst. Vergleiche deine Ergebnisse deshalb nur auf demselben Monitor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werden persönliche Daten oder Ergebnisse auf externen Servern gespeichert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Sämtliche Messungen und Bestleistungen werden ausschließlich lokal im LocalStorage deines Browsers gespeichert. Es erfolgt keine Weitergabe oder zentrale Profilbildung.',
      },
    },
  ],
};

const distanceGuideDe = {
  heading: 'Entfernung schätzen: Tiefenwahrnehmung und Abfang-Timing üben',
  intro: [
    'Tiefenwahrnehmung ist die Fähigkeit, Entfernungen und die räumliche Reihenfolge von Objekten zu beurteilen. Dazu nutzt das Gehirn binokulare Hinweise (Stereosehen) und monokulare Hinweise wie Größenänderung, Überdeckung und Bewegungsparallaxe. Diese Übung ist kein Test des Stereosehens und keine augenärztliche Untersuchung.',
    'Auf deinem flachen Bildschirm fehlt die binokulare Disparität, die der klassische Howard-Dolman-Apparat (Howard, 1919) misst. Hier siehst du nur einen monokularen Hinweis: Eine Kugel wächst entlang eines virtuellen Tunnels auf den Zielring zu. Aus dieser Größenzunahme lässt sich die Time-to-Contact (τ) ableiten (Lee, 1976; Regan & Beverley, 1978). Du übst, den Klick genau in dem Moment zu setzen, in dem die Kugel den Ring ausfüllt, bei stetig steigendem Tempo.',
    'Eine Runde dauert 45 Sekunden. Der Zielring liegt jedes Mal auf einer anderen Tiefe. Bis 7 % Abweichung gibt es 150 Punkte, bis 16 % 100 Punkte; alle 750 Punkte steigt das Level, die Kugel kommt schneller und die Grenzen schrumpfen bis auf 4 % und 10 %. Fehlklicks kosten nichts.',
    'Bildwiederholrate und Eingabelatenz beeinflussen den Klickzeitpunkt (Woods et al., 2015). Vergleiche Ergebnisse daher nur auf demselben Gerät. Bestwerte bleiben im lokalen Speicher deines Browsers.'
  ],
  benchmarks: {
    title: 'Übungsstufen (SkillDrills)',
    headers: ['Übungsstufe', 'Typische Abweichung', 'Einordnung'],
    note: 'SkillDrills-Übungsstufen: keine Bevölkerungsstatistik, keine Perzentile und kein Sehbefund.',
    rows: [
      ['Stufe 1', 'Über 25 %', 'Klick oft deutlich vor der Deckung.'],
      ['Stufe 2', '16 – 25 %', 'Am Rand des Zielrings orientieren und warten.'],
      ['Stufe 3', '7 – 16 %', 'Treffer im 100-Punkte-Bereich, gleichmäßiger Rhythmus.'],
      ['Stufe 4', '4 – 7 %', 'Timing hält auch bei höherem Tempo.'],
      ['Stufe 5', 'Unter 4 %', 'Diese Genauigkeit über viele Runden halten.'],
    ],
  },
  techniques: {
    title: 'Tipps zur Entfernungsschätzung',
    items: [
      {
        name: 'Auf die Ausdehnung achten (Lee, 1976)',
        desc: 'Fokussiere nicht die Kugelmitte, sondern achte auf die Wachstumsgeschwindigkeit des äußeren Rands im Verhältnis zum Zielring.',
      },
      {
        name: 'Nicht zu früh klicken',
        desc: 'Widerstehe dem Impuls, bei Beschleunigung zu früh zu klicken. Warte auf die vollständige geometrische Überlappung.',
      },
      {
        name: 'Blick auf dem Zielring',
        desc: 'Halte den Blick fest auf dem Zielring verankert, anstatt mit den Augen der herannahenden Kugel hinterherzuspringen.',
      },
      {
        name: 'Augen entspannen',
        desc: 'Vermeide Verkrampfung der Augenlider; blinzle zwischen den Versuchen, um den Tränenfilm stabil zu halten.',
      },
    ],
  },
  steps: [
    'Klicke auf "Test starten", um die 45-Sekunden-Runde zu beginnen.',
    'Richte den Blick auf den gestrichelten Zielring; seine Größe wechselt jede Runde.',
    'Beobachte die Kugel, die aus der Tiefe des Tunnels auf dich zukommt.',
    'Klicke oder tippe genau in dem Moment, in dem die Kugel den Zielring ausfüllt.',
    'Bis 7 % Abweichung gibt es 150 Punkte, bis 16 % 100 Punkte. Mit jedem Level wird die Kugel schneller.'
  ],
  audience: 'Gamer, Ballsportler und alle, die ihr Abfang-Timing und ihre Entfernungsschätzung am Bildschirm üben möchten.',
  faqs: {
    title: 'Häufig gestellte Fragen zur Entfernungsschätzung',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
  sources: pickSources('howard1919', 'lee1976', 'regan1978', 'julesz1971', 'woods2015'),
  related: [
    { href: "/de/drills/visual/tracking-accuracy/moving-target", label: "Bewegtes Ziel Abfangen" },
    { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Licht-Reaktionstest" },
    { href: "/de/drills/visual/tracking-accuracy/multiple-targets", label: "Multi-Objekt-Tracking" },
    { href: "/de/drills/visual/tracking-accuracy/pursuit-tracker", label: "Blickfolge-Tracker" },
    { href: "/de/drills/visual/reaction-speed/go/no-go", label: "Go / No-Go Impulskontrolle" },
    { href: "/de/drills/visual/visual-recognition/entropic-grid", label: "Entropisches Rastersuchen" }
  ]
};

const copyDe = {
  title: 'Tiefenwahrnehmung testen',
  subtitle: 'Entfernung schätzen & Abfang-Timing üben',
  caption: 'Tiefenwahrnehmung testen, aber kein Sehtest: Auf einem flachen Bildschirm übst du, die Größenzunahme einer Kugel (optische Expansion, Lee, 1976; Regan & Beverley, 1978) zu nutzen, um den Zeitpunkt der Deckung mit dem Zielring einzuschätzen.',
  statScore: 'Punkte',
  statTime: 'Zeit',
  statLevel: 'Level',
  statBestScore: 'Rekord',
  startTitle: 'Tiefenwahrnehmung testen',
  startSubtitle: 'Bewegtes Ziel: Entfernung einschätzen und treffen',
  startBtn: 'Test starten',
  getReady: 'BEREITMACHEN',
  newBest: 'NEUER REKORD',
  statPoints: 'Punkte',
  statAccuracy: 'Genauigkeit',
  statPeakLevel: 'Höchstlevel',
  statIntercepts: 'Volltreffer',
  playAgain: 'Nochmal spielen',
  shareScore: 'Ergebnis teilen',
  returnOptions: 'Zurück',
  rulesTitle: 'Testregeln & Bewertung',
  rule1Text: 'Perfekter Koinzidenz-Abfang',
  rule1Highlight: '+150 PKT',
  rule1Result: 'Bis 7 % Tiefenfehler (später 4 %)',
  rule2Text: 'Guter Koinzidenz-Abfang',
  rule2Highlight: '+100 PKT',
  rule2Result: 'Bis 16 % Tiefenfehler (später 10 %)',
  rule3Text: 'Stufenweise Beschleunigung',
  rule3Highlight: 'Höheres Tempo',
  rule3Result: 'Alle 750 Punkte: Kugel wird schneller',
  rule4Text: 'Verfehlt',
  rule4Highlight: 'Kein Punktabzug',
  rule4Result: 'Nächstes Objekt startet sofort',
  aboutTitle: 'Über die Übung zur Entfernungsschätzung',
  overviewTitle: 'Was misst diese Übung?',
  overviewLead: 'Die Übung misst, wie genau du den Zeitpunkt der Deckung einer herannahenden Kugel mit dem Zielring einschätzt.',
  overviewBody: 'Sie nutzt die optische Expansionsrate (Looming) als Hinweis und wertet den Klick als prozentualen Timing-Fehler. Sie ist kein Sehtest und ersetzt keine augenärztliche Untersuchung.',
  aboutCards: [
    { iconBg: 'bg-blue-600', title: 'Zielgruppe', text: 'Gamer, Ballsportler und alle, die Abfang-Timing am Bildschirm üben möchten.' },
    { iconBg: 'bg-cyan-600', title: 'Trainierte Fähigkeiten', text: 'Optisches Looming, Time-to-Contact Berechnung, Auge-Hand-Timing und räumliche Antizipation.' },
    { iconBg: 'bg-purple-600', title: 'Erfolgstipp', text: 'Blicke auf den stationären Zielring und löse im Moment der vollständigen Deckungsgleichheit aus.' }
  ]
};

export default function GermanDistanceJudgmentPage() {
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
      <DistanceJudgmentClient copy={copyDe} />
      <DrillGuide guide={distanceGuideDe} />
      <RelatedDrills currentCategory="visual" currentHref="/drills/visual/depth-perception/distance-judgment" locale="de" />
    </>
  );
}
