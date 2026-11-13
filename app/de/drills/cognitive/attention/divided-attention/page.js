import DividedAttentionClient from '@/app/drills/cognitive/attention/divided-attention/DividedAttentionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Test der geteilten Aufmerksamkeit | SkillDrills",
  description: "Kostenloser Test der geteilten Aufmerksamkeit: Klicke auftauchende Ziele an und prüfe gleichzeitig, ob die Zahl gerade ist. Dual-Task-Übung, keine Diagnose.",
  keywords: ["Test der geteilten Aufmerksamkeit", "geteilte Aufmerksamkeit Test", "Dual-Task-Test", "Dual Task Training", "Multitasking Aufmerksamkeit", "geteilte Aufmerksamkeit Übungen", "kognitiver Engpass", "visuelles Multitasking", "Gehirntraining Dual Task", "Konzentrationstest",
    "dual task test online",
    "geteilte aufmerksamkeit aufgaben"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Test der geteilten Aufmerksamkeit | SkillDrills",
    description: "Kostenloser Test der geteilten Aufmerksamkeit: Klicke auftauchende Ziele an und prüfe gleichzeitig, ob die Zahl gerade ist. Dual-Task-Übung, keine Diagnose.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/attention/divided-attention',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Test der geteilten Aufmerksamkeit | SkillDrills",
    description: "Kostenloser Test der geteilten Aufmerksamkeit: Klicke auftauchende Ziele an und prüfe gleichzeitig, ob die Zahl gerade ist. Dual-Task-Übung, keine Diagnose.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/cognitive/attention/divided-attention',
    languages: getAlternateLanguages('/drills/cognitive/attention/divided-attention'),
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
      "name": "Geteilte Aufmerksamkeit",
      "item": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Divided_attention"],
  "name": "Geteilte Aufmerksamkeit Dual-Task Trainer",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser Test der geteilten Aufmerksamkeit (Dual-Task): Klicke blaue Ziele an, die an zufälligen Stellen auftauchen, und drücke gleichzeitig „Prüfen“, wenn im Zahlenstrom eine gerade Zahl steht. Keine klinische Diagnose.",
  "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention",
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
  "name": "Geteilte Aufmerksamkeit Test – Dual-Task Aufmerksamkeits-Drill",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Geteilte Aufmerksamkeit – Dual-Task Zielverfolgungs-Spiel",
  "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention",
  "description": "Kostenloser Test der geteilten Aufmerksamkeit (Dual-Task): Klicke blaue Ziele an, die an zufälligen Stellen auftauchen, und drücke gleichzeitig „Prüfen“, wenn im Zahlenstrom eine gerade Zahl steht. Keine klinische Diagnose.",
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
      "name": "Was ist geteilte Aufmerksamkeit und wie läuft der Test ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geteilte Aufmerksamkeit heißt, zwei Informationsquellen gleichzeitig zu beachten. Hier klickst du blaue Ziele an, die an zufälligen Stellen auftauchen, und drückst „Prüfen“, wenn die Zahl (0–9) im Seitenfeld gerade ist. Es ist eine Übung, kein klinischer Test."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist die psychologische Refraktärperiode (PRP, Pashler 1994)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Verzögerung der zweiten Reaktion, wenn zwei Reize sehr kurz nacheinander folgen – erklärt durch einen zentralen Verarbeitungsengpass."
      }
    },
    {
      "@type": "Question",
      "name": "Was besagt die Multiple-Ressourcen-Theorie (Wickens, 2002)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Aufgaben teilen sich Aufmerksamkeit besser, wenn sie unterschiedliche Sinneskanäle und Kodes ansprechen (z. B. räumlich-visuell vs. numerisch-verbal)."
      }
    },
    {
      "@type": "Question",
      "name": "Kann man geteilte Aufmerksamkeit trainieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dein Punktestand in diesem Drill kann mit Übung steigen; eine Übertragung auf andere Aufgaben oder den Alltag ist aber nicht garantiert. Spelke et al. (1976) berichteten, dass lange Übung das gleichzeitige Ausführen zweier Aufgaben verbessern kann."
      }
    },
    {
      "@type": "Question",
      "name": "Was hat das mit Alltag und Gaming zu tun?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Drill übt die Belastung, zwei Informationsströme gleichzeitig zu beachten – ähnlich wie Tacho und Straße beim Fahren oder Gefecht und Minimap im Spiel. Bessere Fahr- oder Spielleistung ist damit nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Bewertung berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Note richtet sich nach der Punktzahl; 24.000 Punkte sind die Marke für die beste Note. Jeder Treffer bringt 100 Basispunkte mal Combo- und Level-Multiplikator. Die Genauigkeit wird separat angezeigt. Alles sind SkillDrills-Übungsmarken, keine Bevölkerungsstatistik."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wirkt sich Müdigkeit aus?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schlafmangel und Müdigkeit können dazu führen, dass du einen Kanal öfter übersiehst. Vergleiche Ergebnisse daher unter ähnlichen Bedingungen."
      }
    },
    {
      "@type": "Question",
      "name": "Spielt die Bildwiederholrate eine Rolle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kaum: Die Ziele bewegen sich nicht, sie erscheinen an zufälligen Stellen und verschwinden wieder. Vergleiche Ergebnisse trotzdem auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange dauert eine Runde?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Uhr startet bei 45 Sekunden: +2 s pro Treffer (maximal 60 s), −1 s pro Fehler oder verpasstem Ziel. Die Runde läuft, bis die Zeit abgelaufen ist; mit steigender Punktzahl steigt das Level, die Reize wechseln schneller und die Ziele werden kleiner."
      }
    },
    {
      "@type": "Question",
      "name": "Ist der Test vollständig kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, SkillDrills stellt den Drill komplett kostenfrei ohne Registrierung im Webbrowser bereit."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Geteilte Aufmerksamkeit Test",
  "description": "Kostenloser Test der geteilten Aufmerksamkeit (Dual-Task): Klicke blaue Ziele an, die an zufälligen Stellen auftauchen, und drücke gleichzeitig „Prüfen“, wenn im Zahlenstrom eine gerade Zahl steht. Keine klinische Diagnose.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Dual-Task-Sitzung starten",
      "text": "Klicken Sie auf Start, um sowohl das visuelle Zielfeld als auch die seitliche Zahlenreihe zu aktivieren.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Blaue Ziele anklicken",
      "text": "Klicken oder tippen Sie auf die blauen Zielkreise, die an zufälligen Stellen auftauchen, bevor sie verschwinden: +2 s pro Treffer (maximal 60 s).",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Zahlenreihe simultan klassifizieren",
      "text": "Behalten Sie das Seitenfeld im Blick und klicken Sie bei GERADEN Zahlen (0, 2, 4, 6, 8) auf „Prüfen“. Ein Klick bei ungerader Zahl oder ein zweiter Klick auf dieselbe Zahl zählt als Fehler.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Balance beider Kanäle wahren",
      "text": "Ohne Fehler auf beiden Kanälen wächst der Combo-Multiplikator. Jeder Fehler setzt die Combo zurück und kostet 1 Sekunde.",
      "url": "https://skilldrills.online/de/drills/cognitive/attention/divided-attention#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('pashler1994', 'wickens2002', 'strayer2001', 'spelke1976', 'woods2015'),
  intro: {
    title: "Test der geteilten Aufmerksamkeit: Anleitung",
    paragraphs: [
      "Kostenloser Test der geteilten Aufmerksamkeit (Dual-Task): Klicke blaue Ziele an, die an zufälligen Stellen auftauchen, und drücke gleichzeitig „Prüfen“, wenn im Zahlenstrom eine gerade Zahl steht. Keine klinische Diagnose.",
      "Die Verzögerung der zweiten Reaktion, wenn zwei Reize sehr kurz nacheinander folgen – erklärt durch einen zentralen Verarbeitungsengpass.",
      "Aufgaben teilen sich Aufmerksamkeit besser, wenn sie unterschiedliche Sinneskanäle und Kodes ansprechen (z. B. räumlich-visuell vs. numerisch-verbal).",
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
    title: 'Dual-Task-Übung in 4 Schritten',
    description: 'Übungsablauf in Anlehnung an die Multiple-Ressourcen-Theorie (Wickens, 2002): beide Kanäle gleichzeitig bedienen.',
    items: [
      { title: "Dual-Task-Sitzung starten", description: "Klicken Sie auf Start, um sowohl das visuelle Zielfeld als auch die seitliche Zahlenreihe zu aktivieren." },
      { title: "Blaue Ziele anklicken", description: "Klicken oder tippen Sie auf die blauen Zielkreise, die an zufälligen Stellen auftauchen, bevor sie verschwinden: +2 s pro Treffer (maximal 60 s)." },
      { title: "Zahlenreihe simultan klassifizieren", description: "Behalten Sie das Seitenfeld im Blick und klicken Sie bei GERADEN Zahlen (0, 2, 4, 6, 8) auf „Prüfen“. Ein Klick bei ungerader Zahl oder ein zweiter Klick auf dieselbe Zahl zählt als Fehler." },
      { title: "Balance beider Kanäle wahren", description: "Ohne Fehler auf beiden Kanälen wächst der Combo-Multiplikator. Jeder Fehler setzt die Combo zurück und kostet 1 Sekunde." },
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
      <DividedAttentionClient copy={{
        title: "Test der geteilten Aufmerksamkeit", subtitle: "Auftauchende Ziele und Zahlen gleichzeitig verarbeiten",
        statScore: "Punkte", statTime: "Zeit", timeLeft: "Restzeit", statLevel: "Level", statBest: "Bestwert",
        match: "Prüfen", evenNumbers: "GERADE ZAHLEN", tapEven: "Bei gerade tippen", startTitle: "Test der geteilten Aufmerksamkeit", startSubtitle: "Dual-Task · Fokuswechsel",
        getReady: "Bereit machen", dualAccuracy: "Gesamtgenauigkeit", hits: "Treffer", misses: "Fehler", peakLevel: "Höchstlevel",
        caption: "Klicke das auftauchende Ziel an und prüfe parallel, ob im Zahlenstrom eine gerade Zahl erscheint.",
        rulesTitle: "Anleitung und Wertung", ruleItems: [
          { text: "Ziel treffen", highlight: "+100 PKT", result: "Kreis anklicken (+2 s, max. 60 s)" },
          { text: "Gerade Zahl prüfen", highlight: "Richtig reagieren", result: "Bei geraden Zahlen klicken" },
          { text: "Ungerade ignorieren", highlight: "Keine Fehlklicks", result: "Bei ungeraden Zahlen nicht klicken" },
          { text: "Fehler / verpasst", highlight: "Combo weg", result: "−1 s" },
        ],
        aboutTitle: "Geteilte Aufmerksamkeit und Dual-Task-Training", aboutLead: "Dieser nicht-klinische Selbstcheck verbindet das Anklicken visueller Ziele mit Zahlenklassifikation und zeigt, wie stabil beide Kanäle zusammen funktionieren.",
        audienceTitle: "Für wen geeignet", audienceText: "Für Gamer mit Minimap- und Zielaufgaben, Lernende und Menschen, die mehrere Eingaben schnell verarbeiten möchten.",
        skillsTitle: "Trainierte Fähigkeiten", skillsText: "Dual-Task-Verarbeitung, visuelles Tracking, Zahlenentscheidung und Aufmerksamkeitsverteilung.", flexibilityTitle: "Parallele Verarbeitung", flexibilityText: "Wechsle zwischen beiden Informationsströmen, ohne die Genauigkeit eines Kanals zu vernachlässigen."
      }} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
