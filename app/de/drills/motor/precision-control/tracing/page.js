import FineMotorClient from '@/app/drills/motor/precision-control/tracing/TracingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Maus-Tracking-Test | Pfad folgen | SkillDrills',
  description: 'Maus-Tracking-Test: Halte den Cursor 45 Sekunden lang auf einer fließenden Welle, die immer schneller wird, und trainiere Spurtreue und Feinmotorik. Kostenlos.',
  keywords: ['Maus-Tracking-Test', 'Maus Pfad verfolgen', 'Maus-Tracing-Spiel', 'Feinmotorik Maus', 'Maus Spurtreue', 'Maus Tracking Trainer', 'Cursor verfolgen', 'Hand-Auge-Koordination Maus', 'Maus Präzisionstraining', 'Linie mit der Maus folgen', 'flüssige Mausbewegung', 'Mausbewegung üben'],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Maus-Tracking-Test | Pfad folgen | SkillDrills',
    description: 'Maus-Tracking-Test: Halte den Cursor 45 Sekunden lang auf einer fließenden Welle, die immer schneller wird, und trainiere Spurtreue und Feinmotorik. Kostenlos.',
    type: 'article',
    url: 'https://skilldrills.online/de/drills/motor/precision-control/tracing',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Maus-Tracking-Test | Pfad folgen | SkillDrills',
    description: 'Maus-Tracking-Test: Halte den Cursor 45 Sekunden lang auf einer fließenden Welle, die immer schneller wird, und trainiere Spurtreue und Feinmotorik. Kostenlos.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor/precision-control/tracing',
    languages: getAlternateLanguages('/drills/motor/precision-control/tracing'),
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
      "name": "Trainings-Hub",
      "item": "https://skilldrills.online/de/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Motorisches Training",
      "item": "https://skilldrills.online/de/drills/motor"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Maus-Tracing-Spiel",
      "item": "https://skilldrills.online/de/drills/motor/precision-control/tracing"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  "name": "Maus-Tracing Feinmotorik-Praezisionstest",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Maus-Tracking-Test: Halte den Mauszeiger auf der fließenden Welle. Punkte gibt es nur, solange der Cursor höchstens 22 Pixel über oder unter der Linie liegt.",
  "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Maus-Tracing-Spiel – Pfad-Verfolgung & Feinmotorik-Präzisionstest",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "HTML5 Canvas, Pointer Lock API, modern web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "de-DE",
  "name": "Maus-Tracing-Spiel – Dynamische Pfadverfolgung und Feinmotorik-Game",
  "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing",
  "description": "Kostenloser Maus-Tracking-Test: Halte den Mauszeiger auf der fließenden Welle. Punkte gibt es nur, solange der Cursor höchstens 22 Pixel über oder unter der Linie liegt.",
  "genre": [
    "Action",
    "Aim Trainer",
    "Esports Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "dateModified": "2026-11-09"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was ist das Maus-Tracing-Spiel (Mouse Tracing)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Präzisionsspiel, bei dem du den Mauszeiger 45 Sekunden lang auf einer von rechts nach links fließenden Wellenlinie hältst. Solange der Cursor höchstens 22 Pixel über oder unter der Linie liegt, gibt es 1 Punkt pro Frame, +5 für jeweils 4 Sekunden ohne Unterbrechung und +10, wenn du nach einem Abrutschen wieder auf die Linie kommst."
      }
    },
    {
      "@type": "Question",
      "name": "Worin liegt der Unterschied zum statischen Mausklick?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tracing erfordert eine kontinuierliche Regelung im geschlossenen Regelkreis (Closed-Loop), bei der Handgeschwindigkeit und Zielgeschwindigkeit standig synchronisiert werden."
      }
    },
    {
      "@type": "Question",
      "name": "Was versteht man unter Smooth Pursuit Augenbewegungen (Krauzlis, 2004)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Fahigkeit der Augen, sich kontinuierlich bewegenden Zielen glatt zu folgen, ohne standig ruckartige Korrektursakkaden ausfuhren zu mussen."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Bedeutung haben Rashbass' Experimente (1961)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Rashbass bewies, dass visuelle Positionsfehler und Zielgeschwindigkeiten uber getrennte neuronale Bahnen zur motorischen Steuerung verarbeitet werden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wirkt sich das Steering Law (Accot & Zhai, 1997) aus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die maximale Lenkgeschwindigkeit entlang einer Bahn ist durch das Verhaltnis von Spurbreite und Krummungsradius mathematisch begrenzt."
      }
    },
    {
      "@type": "Question",
      "name": "Was geschieht beim Verlassen des Pfades (Off-Path)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Neben der Linie gibt es keine Punkte, die Serie fällt auf 0 und die Flow-Stabilität sinkt um 25 % pro Sekunde (auf der Linie steigt sie um 15 % pro Sekunde). Beim Abrutschen gibt es einen roten Warnblitz und einen Ton. Bereits erzielte Punkte werden nicht abgezogen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie fuhrt man die Maus am ruhigsten auf der Linie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stutzen Sie den Handballen leicht auf dem Mauspad ab, um einen stabilen Reibungspunkt zu schaffen, und steuern Sie die Welle mit feinen Fingerbewegungen."
      }
    },
    {
      "@type": "Question",
      "name": "Wie hilft dieser Drill in FPS-Titeln?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für Spieler von Apex Legends, CS2 oder Overwatch, die Gegnern mit dem Fadenkreuz folgen müssen, übt er eine ähnliche Handbewegung. Wie viel davon im Spiel ankommt, ist individuell verschieden."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Mauseinstellungen sind optimal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine moderate DPI-Einstellung (z. B. 800 DPI) ohne Sensorbeschleunigung verhindert Mikroruckler beim Folgen der Kurve."
      }
    },
    {
      "@type": "Question",
      "name": "Funktioniert das Tool ohne Registrierung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, der Drill läuft sofort im Browser, ist kostenlos und braucht keine Installation. Der Bestwert wird nur im localStorage deines Browsers gespeichert."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09",
  "name": "Maus-Tracing-Spiel – Pfad-Verfolgung & Feinmotorik-Präzisionstest",
  "description": "Kostenloser Maus-Tracking-Test: Halte den Mauszeiger auf der fließenden Welle. Punkte gibt es nur, solange der Cursor höchstens 22 Pixel über oder unter der Linie liegt.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Pointer-Lock aktivieren und Kurs aufnehmen",
      "text": "Nach „Training Starten“ und 3 Sekunden Countdown wird der Mauszeiger gesperrt (auf Touch-Geräten steuerst du mit dem Finger) und steht bei einem Viertel der Bildschirmbreite. Bring ihn sofort auf die Welle. Esc beendet den Drill.",
      "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Geschwindigkeitssynchrones Tracking",
      "text": "Passen Sie die Gleitgeschwindigkeit der Maus exakt an die Wellenbewegung an, um die Spurmitte zu halten.",
      "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Sanfte Feinjustierung in Kurvenscheiteln",
      "text": "Bremsen und lenken Sie an den Scheitelpunkten gefuhlvoll mit den Fingermuskeln, um Uberschwinger zu verhindern.",
      "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Aufrechterhaltung des Super-Flows",
      "text": "Je 4 Sekunden ohne Abrutschen bringen +5 Punkte und +10 % Flow. Die Welle beschleunigt in 45 Sekunden von 2,2 auf 3,8 px pro Frame und schwingt stärker aus, also halte den Rhythmus bis zum Ende.",
      "url": "https://skilldrills.online/de/drills/motor/precision-control/tracing#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('accot1997', 'krauzlis2004', 'rashbass1961', 'woodworth1899', 'woods2015'),
  intro: {
    title: "Maus-Tracing-Spiel – Pfad-Verfolgung & Feinmotorik-Präzisionstest",
    paragraphs: [
      "Der Maus-Tracking-Test ist ein kostenloses Browserspiel: Du hältst den Cursor 45 Sekunden lang auf einer Wellenlinie, die von rechts nach links fließt und dabei schneller und höher wird.",
      "Tracing erfordert eine kontinuierliche Regelung im geschlossenen Regelkreis (Closed-Loop), bei der Handgeschwindigkeit und Zielgeschwindigkeit standig synchronisiert werden.",
      "Die Fahigkeit der Augen, sich kontinuierlich bewegenden Zielen glatt zu folgen, ohne standig ruckartige Korrektursakkaden ausfuhren zu mussen.",
    ],
  },
  benchmarks: {
    title: 'Maus-Tracking-Test: SkillDrills-Übungsstufen',
    headers: ['Note', 'Bezeichnung', 'Flow-Stabilität am Ende', 'Punkte-Bedingung', 'Einordnung'],
    note: 'SkillDrills-Übungsstufen, keine Forschungsnormen und keine Nutzerdaten. Sie entsprechen der Note auf dem Ergebnisbildschirm (Flow-Stabilität zum Sitzungsende und Punktzahl). Es gibt 1 Punkt pro Frame, Monitore mit höherer Bildrate erzielen also mehr Punkte; vergleiche nur auf demselben Gerät.',
    rows: [
      { tier: 'S+', rank: 'Grandmaster-Flow', flow: 'ab 90 %', score: 'ab 1.400 Punkten', band: 'SkillDrills-Übungsstufe' },
      { tier: 'S', rank: 'Spitzen-Flow', flow: 'ab 80 %', score: '-', band: 'SkillDrills-Übungsstufe' },
      { tier: 'A', rank: 'Sicheres Tracking', flow: 'ab 60 %', score: '-', band: 'SkillDrills-Übungsstufe' },
      { tier: 'B', rank: 'Stetiges Tracking', flow: 'ab 35 %', score: '-', band: 'SkillDrills-Übungsstufe' },
      { tier: 'C', rank: 'Tracing beendet', flow: 'unter 35 %', score: '-', band: 'SkillDrills-Übungsstufe' },
    ],
  },
  protocols: {
    title: '4 wissenschaftliche Trainingsprotokolle zur Steigerung der Feinmotorik',
    description: 'Wissenschaftlich kalibriertes Feinmotorik-Protokoll auf Basis des Steering Law (Accot & Zhai, 1997) und der Blickfolgebewegung (Smooth Pursuit) zur Maximierung von Kurventreue und Zeigerstabilität.',
    items: [
      { title: "Direkt nach dem Start auf die Welle", description: "Nach dem Countdown steht der Cursor bei einem Viertel der Bildschirmbreite. Bring ihn sofort auf die Welle, um die ersten Punkte zu sammeln." },
      { title: "Geschwindigkeitssynchrones Tracking", description: "Passen Sie die Gleitgeschwindigkeit der Maus exakt an die Wellenbewegung an, um die Spurmitte zu halten." },
      { title: "Sanfte Feinjustierung in Kurvenscheiteln", description: "Bremsen und lenken Sie an den Scheitelpunkten gefuhlvoll mit den Fingermuskeln, um Uberschwinger zu verhindern." },
      { title: "Aufrechterhaltung des Super-Flows", description: "Je 4 Sekunden ohne Abrutschen gibt es +5 Punkte und +10 % Flow. Die Note hängt von der Flow-Stabilität am Sitzungsende ab, die letzten Sekunden zählen also besonders." },
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

const deCopy = {
  title: "Maus-Tracking-Test",
  subtitle: "Kontinuierliches Tracking • 45 s",
  startButtonText: "Training Starten",
  startBtn: "Training Starten",
  trainAgain: "Erneut Trainieren",
  shareTitle: "Ergebnis Teilen",
  exitTitle: "Beenden",
  statFlowScore: "Flow-Punkte",
  statTimeLeft: "Verbleibende Zeit",
  statFlowIntegrity: "Flow-Stabilität",
  statBestScore: "Bestergebnis",
  maxStreakLabel: "Max. Streak-Frames",
  peakFlowLabel: "Flow-Stabilität am Ende",
  bestScoreLabel: "Persönliche Bestleistung",
  rulesTitle: "Trainingsanleitung & Bewertungssystem",
  rulesItems: [
    { num: "1", text: "Pfad Verfolgen", highlight: "Smaragdwelle", result: "+1 Punkt / Frame auf Pfad" },
    { num: "2", text: "Geschwindigkeit", highlight: "Dynamische Welle", result: "2,2 → 3,8 px/f über 45s" },
    { num: "3", text: "Flow-Bonus", highlight: "Super Flow", result: "4s Pfadtreue bringt +5 Punkte" },
    { num: "4", text: "Abrutschen", highlight: "Toleranz ±22 px", result: "Serie 0, Flow sinkt" }
  ],
};

export default function LocalizedMotorPage() {
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
      <FineMotorClient copy={deCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
