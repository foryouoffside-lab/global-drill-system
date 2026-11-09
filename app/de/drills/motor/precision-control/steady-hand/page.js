import SteadyHandClient from '@/app/drills/motor/precision-control/steady-hand/SteadyHandClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native keyword research: docs/seo/research/steady-hand-2026-09-20.md
// ============================================================

export const metadata = {
  title: 'Ruhige Hand trainieren | Heißer Draht online | SkillDrills',
  description: 'Ruhige Hand trainieren im Heißer-Draht-Spiel: Führe den Cursor über die Leuchtlinie ins Ziel, ohne Abrutschen. Jede Serie macht die Strecke kurviger. Gratis.',
  keywords: [
    'Ruhige Hand trainieren', 'Ruhige Hand Test', 'Heißer Draht Spiel', 'Cursor Präzision',
    'Maus Genauigkeit testen', 'Pfad folgen Maus', 'Feinmotorik Maus',
    'Hand-Auge-Koordination Maus', 'Maus Spurtreue', 'Heißer Draht online',
    'Maus Präzisionstraining', 'Cursor Kontrolle', 'Handzittern Maus',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Ruhige Hand trainieren | Heißer Draht online | SkillDrills',
    description: 'Ruhige Hand trainieren im Heißer-Draht-Spiel: Führe den Cursor über die Leuchtlinie ins Ziel, ohne Abrutschen. Jede Serie macht die Strecke kurviger. Gratis.',
    type: 'article',
    url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Ruhige Hand trainieren | Heißer Draht online | SkillDrills',
    description: 'Ruhige Hand trainieren im Heißer-Draht-Spiel: Führe den Cursor über die Leuchtlinie ins Ziel, ohne Abrutschen. Jede Serie macht die Strecke kurviger. Gratis.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand',
    languages: getAlternateLanguages('/drills/motor/precision-control/steady-hand'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Motorik-Training', item: 'https://skilldrills.online/de/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Präzisionskontrolle', item: 'https://skilldrills.online/de/drills/motor/precision-control' },
    { '@type': 'ListItem', position: 4, name: 'Heißer Draht', item: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'de-DE',
  name: 'Heißer Draht – Ruhige Hand trainieren',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Kostenloses Heißer-Draht-Spiel im Browser. Wer mehr als 2,5 Pixel von der Mittellinie abweicht, muss zurück zum Start; jede Runde in Serie macht die nächste Strecke kurviger.',
  url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'de-DE',
  name: 'Heißer Draht Online Parcours',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Moderner Webbrowser mit HTML5 Canvas und Pointer Lock API',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'de-DE',
  name: 'Heißer Draht Feinmotorik-Drill',
  url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand',
  description: 'Online-Geschicklichkeitsspiel zum Üben von Mauspräzision, Handruhe und Lenkgeschwindigkeit.',
  genre: ['Precision Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was ist das Online-Spiel „Heißer Draht“ und was trainiert es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Im Heißer-Draht-Spiel führst du den Cursor von der Startzone links über eine gewundene Leuchtlinie bis in die Zielzone rechts, ohne von der Linie abzurutschen. Es geht nicht um Reaktionszeit, sondern um ruhige, gleichmäßige Mausführung mit laufender visueller Korrektur. Gewertet werden die Runden, die du schaffst, bevor die 45-Sekunden-Uhr abläuft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welches wissenschaftliche Gesetz bestimmt die Mausbewegung in engen Kanälen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Bewegung in begrenzten Korridoren folgt dem Accot-Zhai-Steuerungsgesetz (Accot & Zhai, 1997), einer Erweiterung von Fitts\' Gesetz für Trajektorien. Es besagt, dass die Lenkzeit proportional zum Integral aus Pfadlänge dividiert durch Kanalbreite ist: Schmalere Wege erzwingen mathematisch ein langsameres Tempo, um Kollisionen zu vermeiden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum setzt sich der Cursor bei Wandkontakt sofort an den Start zurück?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Engine berechnet in jedem Frame den Abstand zwischen Cursor und Pfadmittellinie. Liegt er zwischen Start- und Zielzone über 2,5 Pixel, zählt das als Wandberührung: Der Cursor springt zurück an den Start, der Fehlerzähler steigt um 1 und die Serie fällt auf 0. Die Uhr läuft weiter.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie wird es mit jeder Runde schwieriger?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Toleranz (±2,5 Pixel um die Mittellinie) bleibt immer gleich. Mit jeder Runde in Serie bekommt die nächste Strecke mehr Knicke (15 bis maximal 120 Segmente) und größere Ausschläge nach oben und unten. Eine Wandberührung setzt die Serie auf 0, die nächste Strecke wird dann wieder flacher. Jede geschaffte Runde setzt die Uhr auf 45 Sekunden zurück.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was verursacht Handzittern (physiologischen Tremor) bei feinen Mausbewegungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normaler physiologischer Tremor (8–12 Hz) entsteht durch synchrone Entladungen von motorischen Einheiten und mechanische Resonanz des Arms. Zu starkes Verkrampfen der Finger, Nervosität oder Koffein verstärken diese Schwingung und führen zu Wandkollisionen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welcher Mausgriff und welche DPI-Einstellung eignen sich am besten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein entspannter Fingertip- oder Claw-Grip, der Unterarmgleiten mit feinen Fingermikrokorrekturen kombiniert, ist ideal. Niedrigere Empfindlichkeiten von 400 bis 800 DPI filtern feine Zitterbewegungen mechanisch besser heraus als extrem hohe DPI-Werte.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie erklärt Woodworths Zwei-Komponenten-Modell (1899) die Pfadnavigation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Robert S. Woodworth zeigte, dass Zielbewegungen aus einem ballistischen Anfangsimpuls und einer nachfolgenden Rückkopplungsphase bestehen. Beim Heißen Draht dominiert die geschlossene Regelkreis-Phase, in der das Auge kontinuierlich Mikrokurskorrekturen vor dem Wandkontakt veranlasst.',
      },
    },
    {
      '@type': 'Question',
      name: 'Hilft der Heiße Draht Grafikern und E-Sportlern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Übung ähnelt Bewegungen aus digitaler Illustration und Tracking im E-Sport, bei denen der Zeiger ruhig auf einer schmalen Bahn bleiben muss. Wie stark sich das überträgt, ist individuell verschieden. Das Spiel ist kein medizinischer Tremor-Test.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie beugt man Unterarmkrämpfen und Ermüdung vor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Halte den Ellenbogen im 90-Grad-Winkel gestützt und drücke die Maus nicht fest auf das Pad. Atme vor engen Kurven bewusst aus, um Schultern und Unterarmmuskeln zu entspannen, und lege nach 5 Minuten kurze Pausen ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funktioniert der Heiße Draht auch mit Trackball oder Touchscreen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Am PC liest der Drill über Pointer Lock die Mausbewegung, daher funktionieren Maus und Trackball. Auf reinen Touch-Geräten steuerst du per Fingerziehen. Grafiktablett-Stifte verhalten sich je nach Gerät unterschiedlich. Vergleiche Ergebnisse nur auf demselben Gerät.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  name: 'Anleitung zur Steigerung der Handruhe und Mauspräzision',
  description: 'Schritt-für-Schritt-Protokoll für immer kurvigere Strecken und das Steuerungsgesetz.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand#step-1',
      name: 'Cursor in der Startzone platzieren',
      text: 'Klicke auf „Drill starten“. Nach 3 Sekunden Countdown steht der Cursor in der grünen Startzone links und die 45-Sekunden-Uhr läuft. Am PC wird der Mauszeiger fixiert (Pointer Lock), Esc beendet den Drill.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand#step-2',
      name: 'Gleichmäßige Geschwindigkeit auf der Linie halten',
      text: 'Gleite gleichmäßig durch den leuchtenden Pfad. Finde die Balance zwischen Vorwärtsdrang und Präzision, um das 45-Sekunden-Zeitfenster einzuhalten.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand#step-3',
      name: 'Kurven vorausschauend ansteuern',
      text: 'Verringere vor engen Haarnadelkurven die Geschwindigkeit um ca. 40 % und richte deinen Blick ca. 20 bis 30 Pixel vor den Cursor.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand#step-4',
      name: 'Zielzone erreichen für die nächste Runde',
      text: 'Erreiche die grüne Zielzone rechts, um die Runde abzuschließen. Die Uhr springt auf 45 Sekunden zurück, und je länger deine Serie, desto mehr Knicke und Ausschläge hat die nächste Strecke.',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'woodworth1899', 'fitts1954', 'woods2015'),
  intro: {
    title: 'Wie Handruhe und Feinmotorik gemessen werden',
    paragraphs: [
      'Ruhige Hand trainieren funktioniert hier wie beim klassischen Heißen Draht: Du führst den Cursor über eine schmale Leuchtlinie ins Ziel, und jedes Abrutschen schickt dich zurück an den Start. Gewertet wird, wie viele Runden du schaffst, bevor die 45-Sekunden-Uhr abläuft.',
      'Messgenauigkeit und Hardware-Einflüsse: Die Zeitmessung basiert auf der performance.now() API des Browsers, die zur Abwehr von Seitenkanalangriffen auf etwa 1 ms gerundet wird. Die optische Anzeige ist an die Bildwiederholrate des Monitors gebunden — ca. 16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz (Woods et al., 2015). Die USB-Abfragerate der Maus fügt bei 125 Hz ca. 8 ms Verzögerung hinzu, gegenüber ca. 1 ms bei 1000 Hz. Abweichungen unter 5 ms stellen messtechnisches Rauschen dar. SkillDrills speichert alle Ergebnisse lokal in deinem Browser und sammelt keine aggregierten Daten.',
    ],
  },
  benchmark: {
    title: 'Heißer Draht: SkillDrills-Übungsstufen',
    description: 'SkillDrills-Übungsstufen, keine Forschungsnormen und keine Nutzerdaten. Sie entsprechen der Bewertung auf dem Ergebnisbildschirm: geschaffte Runden und Wandberührungen in einer Sitzung.',
    columns: ['Note', 'Rang-Titel', 'Runden', 'Wandberührungen', 'Einordnung'],
    rows: [
      { tier: 'S+', rank: 'Höchste Stabilitätsstufe', stat: '8+ Runden', errors: '0', band: 'SkillDrills-Übungsstufe' },
      { tier: 'S', rank: 'Meisterhafte Führung', stat: '6+ Runden', errors: 'höchstens 1', band: 'SkillDrills-Übungsstufe' },
      { tier: 'A', rank: 'Präziser Steuermann', stat: '4+ Runden', errors: 'höchstens 2', band: 'SkillDrills-Übungsstufe' },
      { tier: 'B', rank: 'Gute Handruhe', stat: '2+ Runden', errors: 'beliebig', band: 'SkillDrills-Übungsstufe' },
      { tier: 'C', rank: 'Basis-Kontrolle', stat: 'unter 2 Runden', errors: 'beliebig', band: 'SkillDrills-Übungsstufe' },
    ],
  },
  protocols: {
    title: 'Trainingsprotokolle für maximale Handruhe',
    description: 'Übungsanleitungen auf Basis der zitierten Modelle für ruhigere Mausführung in engen Kurven.',
    items: [
      {
        title: 'Protokoll 1: Geschwindigkeitsregulierung nach Accot-Zhai (Tunnel-Pacing)',
        description: 'Gemäß dem Steuerungsgesetz von Accot & Zhai (1997) dauert das Durchfahren eines Pfads umso länger, je schmaler und länger er ist. Nutze flache Abschnitte zum Zeitgewinn und bremse vor scharfen Knicken deutlich ab, um Wandberührungen zu vermeiden.',
      },
      {
        title: 'Protokoll 2: Blickantizipation nach Woodworth (Feedback-Vorlauf)',
        description: 'Fokussiere deinen Blick ca. 20 bis 30 Pixel vor den Cursor statt direkt auf den Mauszeiger. Dieser visuelle Vorlauf verschafft deinem motorischen Kortex ca. 150 ms Pufferzeit, um feinste Kursabweichungen rechtzeitig auszugleichen.',
      },
      {
        title: 'Protokoll 3: Dämpfung des 8–12 Hz Tremors & Gelenkentkopplung',
        description: 'Führe weite Bogenbewegungen aus dem Ellenbogen und Unterarm aus und nutze die Finger nur für Mikronivellierungen. Vermeide krampfhaften Druck auf die Maus, da gleichzeitige Anspannung von Beuge- und Streckmuskeln das Zittern massiv verstärkt.',
      },
      {
        title: 'Protokoll 4: Apex-Navigation in scharfen Haarnadelkurven',
        description: 'Wenn die Strecke mit wachsender Serie dicht geknickt ist, steht die Mittellinie vor Geschwindigkeit. Ziele in Kurven leicht auf den inneren Scheitelpunkt (Apex), damit der Cursor beim Richtungswechsel nicht nach außen driftet.',
      },
    ],
  },
  faqs: {
    title: 'Häufig gestellte Fragen zu Heißer Draht & Handruhe-Training',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const deCopy = {
  h1Keyword: 'Ruhige Hand trainieren',
  h1Suffix: ' – Heißer Draht online',
  subtitle: 'Cursor über die Leuchtlinie ins Ziel führen, ohne abzurutschen',
  caption: 'Mit dem Heißer-Draht-Spiel übst du Handruhe und Spurtreue: Führe den Cursor über eine gewundene Leuchtlinie, ohne abzurutschen. Geregelt durch das Accot-Zhai-Steuerungsgesetz (1997) und geschlossene visuelle Feedback-Korrekturen (Woodworth, 1899).',
  statLaps: 'Runden',
  statTime: 'Restzeit',
  statStreak: 'Serie',
  statBest: 'Rekord',
  pausedTitle: 'Pausiert',
  pausedPrompt: 'Klicke auf das Spielfeld, um den Zeiger zu fixieren und fortzusetzen.',
  startTitle: 'Heißer Draht Parcours',
  startSubtitle: 'Ruhige Hand und Spurtreue • 45 s',
  startBtn: 'Drill starten',
  countdownSubtitle: 'KONZENTRATION',
  newBest: 'NEUER REKORD',
  errorsLabel: 'Wandberührungen',
  maxStreakLabel: 'Max. Serie',
  difficultyLabel: 'Erreichtes Level',
  trainAgain: 'Erneut versuchen',
  shareTitle: 'Ergebnis teilen',
  exitTitle: 'Beenden & Zurück',
  rulesTitle: 'Spielregeln & Steuerung',
  rulesItems: [
    { num: '1', text: 'Folge dem leuchtenden', highlight: 'Smaragd-Parcours exakt', result: 'Ziel setzt Timer auf 45s' },
    { num: '2', text: 'Rundenerfolg', highlight: 'Endlose Steigerung', result: 'Mehr Knicke & Ausschläge' },
    { num: '3', text: 'Wandberührung', highlight: 'Sofortiger Reset', result: 'Start, Fehler +1, Serie 0' },
    { num: '4', text: 'Maus mit Pointer Lock', highlight: 'Touch möglich', result: 'Esc beendet' },
  ],
  rule1Text: 'Folge dem leuchtenden',
  rule1Highlight: 'Smaragd-Parcours exakt',
  rule1Result: 'Ziel setzt Timer auf 45s',
  rule2Text: 'Rundenerfolg',
  rule2Highlight: 'Endlose Steigerung',
  rule2Result: 'Mehr Knicke & Ausschläge',
  rule3Text: 'Wandberührung',
  rule3Highlight: 'Sofortiger Reset',
  rule3Result: 'Start, Fehler +1, Serie 0',
  rule4Text: 'Maus mit Pointer Lock',
  rule4Highlight: 'Touch möglich',
  rule4Result: 'Esc beendet',
  aboutTitle: 'Über das Heißer Draht Spiel',
  aboutHeading: 'Feinmotorische Spurtreue & Unterdrückung von Handzittern',
  aboutP1: 'Heißer Draht (Steady Hand Game) trainiert die Hand-Auge-Koordination, präzise Mikrobewegungen und die Stabilität der Handführung. Du steuerst entlang einer schmalen Leuchtlinie, die mit wachsender Serie immer kurviger wird, und übst so feine Korrekturen aus Handgelenk und Unterarm.',
  aboutP2: 'Basierend auf dem Steuerungsgesetz von Johnny Accot & Shumin Zhai (1997) verdoppelt eine Halbierung der Pfadbreite die erforderliche Führungszeit. In diesem Drill bleibt die Toleranz bei ±2,5 px, doch mit wachsender Serie wird die Strecke länger und kurviger, sodass ständige visuelle Korrektur nötig ist.',
  aboutCard1Title: 'Zielgruppe',
  aboutCard1Text: 'E-Sportler, Grafikdesigner und alle, die eine ruhigere Hand und genauere Mausführung üben möchten.',
  aboutCard2Title: 'Trainierte Fähigkeiten',
  aboutCard2Text: 'Feinmotorische Koordination, Handstabilität, Kurvengeschwindigkeitskontrolle und Vermeidung von Muskelverkrampfung.',
  aboutCard3Title: 'Immer kurvigere Strecken',
  aboutCard3Text: 'Die Toleranz (±2,5 px) bleibt gleich; mit jeder Runde in Serie bekommt die nächste Strecke mehr Knicke und größere Ausschläge.',
  gradeLabels: {
    'S+': 'Höchste Stabilitätsstufe',
    'S': 'Meisterhafte Führung (Master)',
    'A': 'Präziser Steuermann (Diamond)',
    'B': 'Gute Handruhe (Platinum)',
    'C': 'Basis-Kontrolle (Gold)',
  },
  shareDrillName: 'Heißer Draht',
  shareUrl: 'https://skilldrills.online/de/drills/motor/precision-control/steady-hand',
  shareTextTemplate: '🖐️ {drillName}: {laps} Runden geschafft (Genauigkeit: {acc})! Kostenlos ausprobieren auf skilldrills.online!',
  copiedAlert: 'Ergebniskarte in die Zwischenablage kopiert!',
};

export default function GermanSteadyHandPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <SteadyHandClient copy={deCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
