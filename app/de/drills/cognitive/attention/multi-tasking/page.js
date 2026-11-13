import DualTargetFlowClient from '@/app/drills/cognitive/attention/multi-tasking/DualTargetFlowClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Multitasking-Test | Dual-Stream-Tracking | SkillDrills",
  description: "Kostenloser Multitasking-Test: Tippe in zwei gegenläufigen Symbolströmen nur das jeweilige Zielsymbol an. Keine klinische Diagnose, sondern ein Selbstcheck.",
  keywords: ["Multitasking Test", "Dual Stream Tracking", "Multitasking Gehirntraining", "Aufgabenumschaltung Test", "Kognitive Flexibilität Test", "zwei Symbolströme", "Multitasking Fähigkeit Test", "Exekutive Funktionen Training", "Gehirn Multitasking", "Visuelle Doppelaufgabe"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Multitasking-Test | Dual-Stream-Tracking | SkillDrills",
    description: "Kostenloser Multitasking-Test: Tippe in zwei gegenläufigen Symbolströmen nur das jeweilige Zielsymbol an. Keine klinische Diagnose, sondern ein Selbstcheck.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/attention/multi-tasking',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Multitasking-Test | Dual-Stream-Tracking | SkillDrills",
    description: "Kostenloser Multitasking-Test: Tippe in zwei gegenläufigen Symbolströmen nur das jeweilige Zielsymbol an. Keine klinische Diagnose, sondern ein Selbstcheck.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/cognitive/attention/multi-tasking',
    languages: getAlternateLanguages('/drills/cognitive/attention/multi-tasking'),
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
      "name": "Kognitives Training",
      "item": "https://skilldrills.online/de/drills/cognitive"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Multitasking-Test",
      "item": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Task_switching_(psychology)", "https://en.wikipedia.org/wiki/Human_multitasking"],
  "name": "Multitasking Dual-Stream Aufmerksamkeitstrainer",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Multitasking-Test: Zwei Symbolströme laufen gegenläufig von der Mitte nach außen; tippe in jeder Spur nur das angezeigte Zielsymbol an. Keine klinische Diagnose.",
  "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking",
  "publisher": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Multitasking Test – Dual-Stream Zielverfolgung & Gehirntraining",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Multitasking-Test – Gegenläufiges Zielsymbol-Spiel",
  "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking",
  "description": "Kostenloser Multitasking-Test: Zwei Symbolströme laufen gegenläufig von der Mitte nach außen; tippe in jeder Spur nur das angezeigte Zielsymbol an. Keine klinische Diagnose.",
  "genre": [
    "Action",
    "Brain Game",
    "Cognitive Training"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was trainiert der Multitasking-Test (Dual-Target Flow)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das gleichzeitige Überwachen zweier Spuren (Querformat links/rechts, Hochformat oben/unten), in denen Symbole von der Mitte nach außen laufen. Du klickst oder tippst nur das Zielsymbol der jeweiligen Spur an. Es ist eine Übung, kein klinischer Test."
      }
    },
    {
      "@type": "Question",
      "name": "Was sind Aufgabenwechselkosten (Switch Costs, 1995)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Zeit- und Genauigkeitsverlust beim Umschalten zwischen verschiedenen Aufgabenregeln (Rogers & Monsell, 1995)."
      }
    },
    {
      "@type": "Question",
      "name": "Können Menschen wirklich gleichzeitig multitasken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei anspruchsvollen kognitiven Entscheidungen nutzt das Gehirn schnelles serielles Time-Sharing statt echter paralleler Verarbeitung (Pashler, 1994)."
      }
    },
    {
      "@type": "Question",
      "name": "Was zeigten Ophir et al. (2009) über Multitasking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Personen mit starkem Medien-Multitasking schnitten in Aufgaben, bei denen irrelevante Reize ignoriert werden müssen, schlechter ab. Die Studie war korrelativ und zeigt keine Ursache."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Punktzahl berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Treffer bringt 100 Basispunkte mal Combo- und Level-Multiplikator sowie +2 s (maximal 60 s). Ein falsches Symbol oder ein verpasstes Zielsymbol kostet 1 s und setzt die Combo zurück. Genauigkeit = Treffer ÷ (Treffer + Fehler). Die Note richtet sich nach der Punktzahl (24.000 Punkte = beste Note) und ist eine SkillDrills-Übungsmarke."
      }
    },
    {
      "@type": "Question",
      "name": "Beste Blickstrategie für hohe Punktzahlen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fixieren Sie nicht eine einzelne Spur, sondern schauen Sie nahe der Grenze zwischen beiden Spuren und prüfen Sie beide. Die Zielsymbole wechseln alle 20 Sekunden."
      }
    },
    {
      "@type": "Question",
      "name": "Wie skaliert die Schwierigkeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Mit steigender Punktzahl steigt das Level: Die Symbole laufen schneller und erscheinen häufiger. Ab Level 3 haben die beiden Spuren unterschiedliche Zielsymbole."
      }
    },
    {
      "@type": "Question",
      "name": "Spielt die Bildwiederholrate eine Rolle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine höhere Bildwiederholrate kann schnelle Symbole schärfer darstellen; den Einfluss auf die Punktzahl haben wir nicht gemessen. Vergleichen Sie Ergebnisse auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert eine Runde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Uhr startet bei 45 Sekunden: +2 s pro Treffer (maximal 60 s), −1 s pro Fehler. Die Runde endet, wenn die Zeit abgelaufen ist. Vergleichen Sie mehrere Runden unter gleichen Bedingungen."
      }
    },
    {
      "@type": "Question",
      "name": "Läuft der Test auf Smartphones?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Im Hochformat liegen die zwei Spuren übereinander, im Querformat nebeneinander; gespielt wird per Touch."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Multitasking-Test",
  "description": "Kostenloser Multitasking-Test: Zwei Symbolströme laufen gegenläufig von der Mitte nach außen; tippe in jeder Spur nur das angezeigte Zielsymbol an. Keine klinische Diagnose.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Blick zentriert ausrichten",
      "text": "Fixieren Sie den Zwischenraum beider Streams für eine breite periphere Erfassung.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Zielsymbole prüfen",
      "text": "Prüfen Sie das Zielsymbol, das in jeder Spur angezeigt wird. Es wechselt alle 20 Sekunden.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Passende Symbole antippen",
      "text": "Klicken oder tippen Sie nur auf Symbole, die dem Zielsymbol ihrer Spur entsprechen, bevor sie den Rand erreichen (+2 s). Ein falsches Symbol kostet 1 s.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Gleichmäßigen Rhythmus halten",
      "text": "Mit steigendem Level wird der Strom schneller, ab Level 3 unterscheiden sich die Zielsymbole. Ohne Fehler wächst der Combo-Multiplikator.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/multi-tasking#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rogers1995', 'monsell2003', 'pashler1994', 'wickens2002', 'ophir2009', 'woods2015'),
  intro: {
    title: "Multitasking-Test: Anleitung",
    paragraphs: [
      "Kostenloser Multitasking-Test: Zwei Symbolströme laufen gegenläufig von der Mitte nach außen; tippe in jeder Spur nur das angezeigte Zielsymbol an. Keine klinische Diagnose.",
      "Der Zeit- und Genauigkeitsverlust beim Umschalten zwischen verschiedenen Aufgabenregeln (Rogers & Monsell, 1995).",
      "Bei anspruchsvollen kognitiven Entscheidungen nutzt das Gehirn schnelles serielles Time-Sharing statt echter paralleler Verarbeitung (Pashler, 1994).",
    ],
  },
  benchmarks: {
    title: 'SkillDrills-Übungsstufen (nach Genauigkeit)',
    headers: ['Übungsstufe', 'Bezeichnung', 'Leistungsbereich', 'Erreichte Stufe', 'Genauigkeit', 'Einordnung'],
    note: 'Die Bereiche sind redaktionelle Übungsmarken und keine Bevölkerungsstatistik.',
    rows: [
      { tier: 'Stufe 1', rank: 'Sehr sicher', stat: 'Stufe 1 von 5', level: 'Meisterschaft (Mastery)', accuracy: '98%+', category: 'Übungsmarke' },
      { tier: 'Stufe 2', rank: 'Sicher', stat: 'Stufe 2 von 5', level: 'Diamant (Exzellent)', accuracy: '94–97%', category: 'Übungsmarke' },
      { tier: 'Stufe 3', rank: 'Solide', stat: 'Stufe 3 von 5', level: 'Platin (Kompetent)', accuracy: '88–93%', category: 'Übungsmarke' },
      { tier: 'Stufe 4', rank: 'Aufbau', stat: 'Stufe 4 von 5', level: 'Gold (Standard)', accuracy: '78–87%', category: 'Übungsmarke' },
      { tier: 'Stufe 5', rank: 'Einstieg', stat: 'Stufe 5 von 5', level: 'Silber (Basis)', accuracy: '< 78%', category: 'Übungsmarke' },
    ],
  },
  protocols: {
    title: 'Multitasking-Übung in 4 Schritten',
    description: 'Übungsablauf in Anlehnung an die Forschung zu Aufgabenwechselkosten (Rogers & Monsell, 1995): beide Spuren abwechselnd prüfen.',
    items: [
      { title: "Blick zentriert ausrichten", description: "Fixieren Sie den Zwischenraum beider Streams für eine breite periphere Erfassung." },
      { title: "Zielsymbole prüfen", description: "Prüfen Sie das Zielsymbol, das in jeder Spur angezeigt wird. Es wechselt alle 20 Sekunden." },
      { title: "Passende Symbole antippen", description: "Klicken oder tippen Sie nur auf Symbole, die dem Zielsymbol ihrer Spur entsprechen, bevor sie den Rand erreichen (+2 s). Ein falsches Symbol kostet 1 s." },
      { title: "Gleichmäßigen Rhythmus halten", description: "Mit steigendem Level wird der Strom schneller, ab Level 3 unterscheiden sich die Zielsymbole. Ohne Fehler wächst der Combo-Multiplikator." },
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

export default function LocalizedCognitivePage() {
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
      <DualTargetFlowClient copy={{
        title: "Multitasking-Test", subtitle: "Zwei Zielströme gleichzeitig verfolgen",
        statScore: "Punkte", statTime: "Zeit", timeLeft: "Restzeit", statLevel: "Level", statBest: "Bestwert",
        startTitle: "Multitasking-Test", startSubtitle: "Zwei Ströme · peripherer Fokus", getReady: "Bereit machen", accuracy: "Genauigkeit", hits: "Treffer", peakLevel: "Höchstlevel", maxCombo: "Max. Combo",
        caption: "Finde passende Symbole in zwei gegenläufigen Strömen und reagiere, bevor Tempo und Formen wechseln.",
        rulesTitle: "Anleitung und Wertung", ruleItems: [
          { text: "Zielsymbol treffen", highlight: "+100 PKT, +2 s", result: "Symbol der Spur anklicken" },
          { text: "Beide Spuren prüfen", highlight: "Ab Level 3", result: "Je Spur eigenes Ziel" },
          { text: "Fehlklick / verpasst", highlight: "Combo weg", result: "−1 s" },
          { text: "Zielwechsel", highlight: "Alle 20 s", result: "Symbol neu prüfen" },
        ],
        aboutTitle: "Multitasking und Dual-Target-Flow", aboutLead: "Dieser nicht-klinische kognitive Selbstcheck verbindet zwei visuelle Zielströme und bewertet Übungsgenauigkeit sowie schnelle Aufmerksamkeitswechsel, nicht eine allgemeine Alltagstauglichkeit.",
        audienceTitle: "Für wen geeignet", audienceText: "Für Gamer mit mehreren Bildschirmelementen, Lernende und Menschen, die gleichzeitige Informationen besser ordnen möchten.",
        skillsTitle: "Trainierte Fähigkeiten", skillsText: "Beidseitiges visuelles Tracking, peripheres Erkennen, Aufmerksamkeitswechsel und exekutive Kontrolle.", flexibilityTitle: "Aufgabenwechsel", flexibilityText: "Mit jedem Level ändern sich Tempo und Muster: Wechsle schnell zwischen beiden Strömen, ohne Genauigkeit zu verlieren."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
