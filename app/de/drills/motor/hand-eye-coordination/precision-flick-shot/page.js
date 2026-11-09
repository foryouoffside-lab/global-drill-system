import PrecisionFlickShotClient from '@/app/drills/motor/hand-eye-coordination/precision-flick-shot/PrecisionFlickShotClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Mausgenauigkeit testen: Präzisions-Flicks ins Zentrum | SkillDrills',
  description: 'Mausgenauigkeit testen im Browser: zwei schrumpfende Ziele per Flick treffen, Treffer im 8-px-Zentrum zählen doppelt. Trefferquote, Volltreffer und Level.',
  keywords: [
    'Mausgenauigkeit testen', 'Maus Genauigkeit Test', 'Zielgenauigkeit testen', 'Treffer ins Zentrum',
    'Klickgenauigkeit Maus', 'Präzisions-Flicks',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Mausgenauigkeit testen: Präzisions-Flicks ins Zentrum | SkillDrills',
    description: 'Mausgenauigkeit testen im Browser: zwei schrumpfende Ziele per Flick treffen, Treffer im 8-px-Zentrum zählen doppelt. Trefferquote, Volltreffer und Level.',
    type: 'article',
    url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Mausgenauigkeit testen: Präzisions-Flicks ins Zentrum | SkillDrills',
    description: 'Mausgenauigkeit testen im Browser: zwei schrumpfende Ziele per Flick treffen, Treffer im 8-px-Zentrum zählen doppelt. Trefferquote, Volltreffer und Level.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/precision-flick-shot'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SkillDrills Startseite',
      item: 'https://skilldrills.online/de',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Motorisches Training',
      item: 'https://skilldrills.online/de/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Hand-Auge-Koordination',
      item: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Präzisions-Flick-Shot',
      item: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Mausgenauigkeit testen: Präzisions-Flick-Shot',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Kostenloser Browsertest der Mausgenauigkeit: schrumpfende Ziele treffen, Trefferquote und Volltreffer im Zentrum zählen.',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Präzisions-Flick-Shot-Trainer',
  browserRequirements: 'Benötigt HTML5 Canvas und modernes JavaScript',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Präzisions-Flick-Shot-Spiel',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot',
  description: 'Schrumpfende Ziele per Flick treffen und dabei möglichst das Zentrum erwischen.',
  genre: ['Shooter-Training', 'Reaktion', 'Esports'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'de-DE',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Was versteht man unter einem Flick Shot (Flick Aiming)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Flick Shot ist eine extrem schnelle, ballistische Mausbewegung zur spontanen Erfassung eines Ziels, gefolgt von sofortiger Dezeleration und Schussabgabe.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie erklärt das Zwei-Phasen-Modell (Woodworth, 1899) gezielte Mausbewegungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es unterteilt die Bewegung in einen ersten ballistischen Impuls (Hauptbewegung) und eine optionale zweite Kontrollphase zur optischen Nachjustierung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum ist das Abstoppen der Maus (Deceleration) so entscheidend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Weil ein unkontrolliertes Überschwingen (Overshoot) wertvolle Zeit für korrigierende Gegenbewegungen kostet. Gezieltes Abbremsen verhindert Trefferstreuung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was bringt der Bulls-Eye-Bonus im Training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Er belohnt Treffer exakt im 8-Pixel-Zentrum mit doppelten Punkten. Das zwingt das Nervensystem zur Verringerung der Streuung statt nur grober Randtreffer.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie hilft dieses Training in CS2, Valorant oder Apex Legends?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spieler von CS2, Valorant oder Apex Legends können damit das saubere Abstoppen nach einem Flick üben. Eine Verbesserung im Spiel ist nicht garantiert; stellen Sie am besten dieselbe Empfindlichkeit wie im Spiel ein.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Rolle spielt die visuelle Priorisierung bei mehreren Zielen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es sind immer zwei Ziele sichtbar; beide schrumpfen, das aktive aber schneller. Treffen Sie zuerst das kleinere Ziel. Schrumpft ein Ziel ganz weg, wird die Combo zurückgesetzt und 1 Sekunde abgezogen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Mausempfindlichkeit (DPI) ist optimal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Für FPS-Flicks empfehlen sich 800 DPI bei mittlerer Empfindlichkeit (ca. 30 bis 45 cm für eine 360-Grad-Drehung), um Armschwung und Handgelenksfeinmotorik zu balancieren.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie wird die Treffgenauigkeit und Bewertung berechnet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Genauigkeit misst Treffer pro Klick. Jeder Treffer bringt Grundpunkte (100, im 8-px-Zentrum 200) × Combo-Multiplikator (bis 3,0×) × Level-Bonus, dazu +2 Sekunden (max. 60). Fehlklick oder abgelaufenes Ziel kosten 1 Sekunde und die Combo. Der Rang ergibt sich allein aus der Endpunktzahl; eine Reaktionszeit wird nicht gemessen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Hardware-Einstellungen optimieren das Flick-Training?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein Monitor mit hoher Bildrate, deaktivierte Zeigerbeschleunigung (Windows: „Zeigerbeschleunigung verbessern“ aus) und eine leichte Maus. Dieser Test prüft Ihre Klickgenauigkeit, nicht die Windows-Einstellung.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie oft sollte man Flick Shots trainieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein paar Runden als Aufwärmen vor dem Spielen reichen. Bei Beschwerden im Handgelenk pausieren und Ergebnisse vor allem mit eigenen früheren Runden vergleichen.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  name: 'Anleitung: Präzises Flick-Shot-Training für Shooter',
  description: 'Schritt-für-Schritt-Methode zur Perfektionierung von ballistischen Flicks, Bulls-Eye-Präzision und Cursor-Abbremsung.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Fadenkreuz zentrieren',
      text: 'Bringen Sie die Maus in eine neutrale Ausgangsposition und fokussieren Sie das zentrale Fadenkreuz.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Zielerscheinung antizipieren',
      text: 'Erfassen Sie das auftauchende Ziel mit dem peripheren Blickfeld und prüfen Sie den Verfallstimer.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Ballistischen Flick ausführen',
      text: 'Führen Sie eine blitzschnelle, direkte Bewegung in Richtung des Zielzentrums ohne Zwischenstopps aus.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Präzise abbremsen und klicken',
      text: 'Aktivieren Sie die Antagonistenmuskeln zur punktgenauen Arretierung über dem Zentrum und lösen Sie den Schuss aus.',
      url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/precision-flick-shot#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('meyer1988', 'fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Biomechanik ballistischer Micro-Flicks und Submovement-Optimierung',
    paragraphs: [
      'Mit diesem Test können Sie Ihre Mausgenauigkeit testen: Ziele erscheinen, schrumpfen und müssen möglichst im Zentrum getroffen werden. Im wettkampforientierten E-Sport und der Mensch-Computer-Interaktion ist der Flick Shot eine hochdynamische, diskrete Zielbewegung unter extremem Zeitdruck. Robert S. Woodworth (1899) beschrieb als Erster die Zwei-Phasen-Steuerung zielgerichteter Bewegungen: ein primärer ballistischer Bewegungsimpuls schleudert das Glied zum Ziel, gefolgt von einer Kontrollphase zur visuellen Feinjustierung.',
      'In ihrem richtungsweisenden Modell (Stochastic Optimized Submovement Model) zeigten David E. Meyer et al. (1988), dass menschliche Muskelbewegungen geschwindigkeitsabhängigem neuronalen Rauschen unterliegen. Wer zu hastig flicked, riskiert eine hohe Streuung der Endpunkte. Liegt der erste Impuls außerhalb der Zielzone, muss eine zusätzliche Korrekturbewegung folgen, die Zeit kostet.',
      'Für herausragende Trefferleistungen (MacKenzie, 1992) müssen Schützen die Geschwindigkeit des Primärimpulses so tarieren, dass der Endpunkt zuverlässig im Kern liegt. Die Belohnung von Bulls-Eye-Zentrumstreffern trainiert das sensorimotorische System, Zielstreuung zu minimieren und Nachkorrekturen komplett zu eliminieren.',
      'Das Verhältnis zwischen Zieldistanz und Zielgröße gehorcht dem Fitts-Gesetz (Fitts, 1954). Die moderne Synthese von Elliott et al. (2010) belegt zudem die zentrale Rolle antagonistischer Muskelaktivierung beim Abbremsen.',
      'Ablauf: Start mit 45 Sekunden, +2 Sekunden pro Treffer (max. 60), -1 Sekunde bei Fehlklick oder abgelaufenem Ziel. Nötig sind Maus und Pointer Lock; reine Touch-Geräte werden nicht unterstützt. Bildrate und Polling-Rate beeinflussen das Eingabegefühl (Woods et al., 2015), vergleichen Sie daher vor allem mit eigenen Werten am selben Setup.',
    ],
  },
  benchmarks: {
    title: 'Übungsstufen: Mausgenauigkeit testen (SkillDrills)',
    caption: 'SkillDrills-Übungsbänder: keine Forschungsnormen und keine Nutzerstatistik, sondern Richtwerte des Drill-Autors, um Level, Combo, Trefferquote und Volltreffer-Anteil einzuordnen. SkillDrills speichert Daten ausschließlich lokal im Browser.',
    headers: ['Stufe', 'Klassifizierung', 'Level & Combo', 'Klick-Genauigkeit', 'Bulls-Eye-Quote', 'Typisches Spielbild'],
    rows: [
      [
        'Tier 1',
        'Apex Flick Meister',
        'Lv. 15+ (Combo > 20x)',
        '≥ 96,0%',
        '> 65%',
        'Ein Flick landet im Zentrum, kaum Nachkorrekturen.',
      ],
      [
        'Tier 2',
        'Elite Gunfighter',
        'Lv. 11–14 (Combo 14–19x)',
        '91,0%–95,9%',
        '45%–64%',
        'Sicheres Zentrum, kurze Mikrokorrekturen.',
      ],
      [
        'Tier 3',
        'Sicherer Schütze',
        'Lv. 7–10 (Combo 8–13x)',
        '84,0%–90,9%',
        '25%–44%',
        'Häufige Treffer im Außenring, leichtes Überschwingen bei schnellen Zielwechseln.',
      ],
      [
        'Tier 4',
        'Aufstrebender Fragger',
        'Lv. 4–6 (Combo 4–7x)',
        '74,0%–83,9%',
        '10%–24%',
        'Ruckartige Mehrfachkorrekturen, erhöhte Streuung durch Überbeschleunigung, zögerliches Auslösen.',
      ],
      [
        'Tier 5',
        'Basisniveau / Anfänger',
        'Lv. 1–3 (Combo < 4x)',
        '< 74,0%',
        '< 10%',
        'Zu kurze Flicks, häufige Fehlschüsse.',
      ],
    ],
  },
  protocols: {
    title: '4 wissenschaftliche Trainingsprotokolle zur Steigerung der Flick-Präzision',
    items: [
      {
        title: 'Protokoll 1: Primärimpuls-Kalibrierung (Level 1–4)',
        description: 'Fokussieren Sie sich auf eine saubere, ununterbrochene Gleitbewegung ohne Zögern. Vertrauen Sie auf das motorische Gedächtnis für den primären Bewegungsschub.',
      },
      {
        title: 'Protokoll 2: Meyer Submovement-Minimierung (Level 5–8)',
        description: 'Zielen Sie bewusst auf das innerste 8-Pixel-Zentrum (Bulls-Eye). Die optische Verkleinerung des Sollbereichs zwingt das Gehirn zu geringerer Streuung.',
      },
      {
        title: 'Protokoll 3: Priorisierung bei Mehrfachzielen (Level 9–12)',
        description: 'Erscheinen zwei Ziele, schätzen Sie über das periphere Sehen die Ablaufzeiten ab und eliminieren Sie das ältere Ziel zuerst vor dem nächsten Snap.',
      },
      {
        title: 'Protokoll 4: Antagonistisches Bremsen gegen Overshooting (Level 13–15)',
        description: 'Aktivieren Sie bei hohem Tempo gezielt die Handgelenkstrecker kurz vor dem Ziel, um die Maus punktgenau über dem Zentrum zu stoppen.',
      },
    ],
  },
  faqs: {
    title: 'Häufig gestellte Fragen (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyDe = {
  title: "Mausgenauigkeit testen: Präzisions-Flicks ins Zentrum",
  subtitle: "Zwei schrumpfende Ziele · Zentrum zählt doppelt · +2 s pro Treffer",
  startButtonText: "DRILL STARTEN",
  playAgainText: "Nochmal spielen",
  shareText: "Ergebnis teilen",
  exitText: "Beenden",
  accuracyLabel: "Genauigkeit",
  targetHitsLabel: "Zieltreffer",
  bullseyesLabel: "Volltreffer (Kern)",
  peakLevelLabel: "Höchste Stufe",
  rulesTitle: "Drill-Anleitung & Punktesystem",
  rulesItems: [
    { num: "1", text: "Volltreffer (Kern)", highlight: "+200 PKT / +2s (max. 60s)", result: "Präziser Schuss ins Zentrum" },
    { num: "2", text: "Standardtreffer", highlight: "+100 PKT / +2s (max. 60s)", result: "Schnelle periphere Zielerfassung" },
    { num: "3", text: "Stufenaufstieg", highlight: "+1 Stufe / 1400 PKT", result: "Ziele schrumpfen & verfallen schneller" },
    { num: "4", text: "Fehlschuss & Zeitablauf", highlight: "Combo-Reset", result: "Abzug von -1s" }
  ],
};

export default function PrecisionFlickShotPage() {
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
      <PrecisionFlickShotClient copy={copyDe} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
