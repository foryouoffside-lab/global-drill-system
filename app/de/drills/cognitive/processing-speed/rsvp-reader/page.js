import RSVPReaderClient from '@/app/drills/cognitive/processing-speed/rsvp-reader/RSVPReaderClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Schnelllesetest | RSVP-Lesetraining | SkillDrills",
  description: "Kostenloser Schnelllesetest im Browser: Verarbeite Wörter an einem festen Punkt und verfolge WPM und Genauigkeit. Kein klinischer Test.",
  keywords: ["Schnelllesetest", "Schnelllesetest online", "RSVP", "RSVP-Lesetraining", "Lesegeschwindigkeit", "Wörter pro Minute", "Schnelllesen üben"],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Schnelllesetest | RSVP-Lesetraining | SkillDrills",
    description: "Kostenloser Schnelllesetest im Browser: Verarbeite Wörter an einem festen Punkt und verfolge WPM und Genauigkeit. Kein klinischer Test.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Schnelllesetest | RSVP-Lesetraining | SkillDrills",
    description: "Kostenloser Schnelllesetest im Browser: Verarbeite Wörter an einem festen Punkt und verfolge WPM und Genauigkeit. Kein klinischer Test.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader',
    languages: getAlternateLanguages('/drills/cognitive/processing-speed/rsvp-reader'),
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
      "name": "RSVP Schnelllesetest",
      "item": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"],
  "name": "RSVP Schnelllesetest",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Kostenloser RSVP-Schnelllesetest im Browser: Wörter eines englischen Textes erscheinen einzeln an einem festen Punkt in 5 Tempostufen von 250 bis 850 WPM. Klicke, wenn das Zielwort kommt. Kein Test des Textverständnisses.",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader",
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
  "name": "Schnelllesetest – RSVP-Lesetraining",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Requires a modern web browser with JavaScript support",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "RSVP Schnelllesetest – Zielwort-Spiel",
  "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader",
  "description": "Kostenloser RSVP-Schnelllesetest im Browser: Wörter eines englischen Textes erscheinen einzeln an einem festen Punkt in 5 Tempostufen von 250 bis 850 WPM. Klicke, wenn das Zielwort kommt. Kein Test des Textverständnisses.",
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
  "dateModified": "2026-11-12",
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
      "name": "Was ist RSVP (Rapid Serial Visual Presentation)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Verfahren, bei dem Wörter nacheinander an einem festen Punkt erscheinen, sodass der Blick nicht von Wort zu Wort springen muss. Es garantiert kein besseres Textverständnis."
      }
    },
    {
      "@type": "Question",
      "name": "Wie läuft der Schnelllesetest ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oben steht ein Zielwort. In der Mitte erscheinen englische Wörter einzeln; klickst du die Erkennungstaste, während das Zielwort zu sehen ist, gibt es 100 Punkte. Ein Durchgang dauert 45 Sekunden."
      }
    },
    {
      "@type": "Question",
      "name": "Welche Tempostufen gibt es?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Stufe 1 (250 WPM), 2 (350), 3 (480), 4 (650) und Stufe 5 (850 WPM). Alle 2 erkannten Zielwörter (alle 200 Punkte) geht es eine Stufe höher."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert bei Fehlklicks oder verpassten Zielwörtern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Klick bei einem anderen Wort zählt als Fehler und sperrt die Taste 1 Sekunde. Läuft das Zielwort ohne Klick vorbei, zählt es als verpasst. Beides senkt die Genauigkeit, kostet aber keine Zeit."
      }
    },
    {
      "@type": "Question",
      "name": "Was zeigt das Ergebnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Punkte, Treffer, Fehler, Genauigkeit und die erreichte Tempostufe. WPM ist hier die Anzeigegeschwindigkeit der Stufe, nicht deine gemessene Lesegeschwindigkeit."
      }
    },
    {
      "@type": "Question",
      "name": "Misst der Test mein Leseverständnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Es gibt keine Verständnisfragen. Der Drill prüft nur, ob du das Zielwort im schnellen Wortstrom erkennst."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Optimal Recognition Point (ORP)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Stelle im Wort, an der sich der Blick gut fixieren lässt, meist etwas links der Mitte. Der Drill hebt diesen Buchstaben farbig hervor."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist die durchschnittliche Lesegeschwindigkeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für stilles Lesen englischer Texte werden oft etwa 200–300 Wörter pro Minute genannt (Rayner, 1998). Mit den Tempostufen dieses Drills ist das nicht direkt vergleichbar."
      }
    },
    {
      "@type": "Question",
      "name": "Werde ich durch Üben schneller lesen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Im Erkennen von Zielwörtern im schnellen Wortstrom wirst du mit Übung meist besser. Bei höherem Tempo kann das Verständnis sinken; schnelleres Lesen im Alltag ist nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Ist der Schnelllesetest kostenlos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, er ist kostenlos und läuft ohne Anmeldung direkt im Browser."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So funktioniert der Schnelllesetest",
  "description": "Kostenloser RSVP-Schnelllesetest im Browser: Wörter eines englischen Textes erscheinen einzeln an einem festen Punkt in 5 Tempostufen von 250 bis 850 WPM. Klicke, wenn das Zielwort kommt. Kein Test des Textverständnisses.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Zielwort in der Anzeige einpragen",
      "text": "Merken Sie sich das oben eingeblendete gesuchte Zielwort.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Fokussierung auf den roten ORP-Mittelpunkt",
      "text": "Halten Sie den Blick starr auf dem farblich markierten Ankerbuchstaben.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Dem Wortstrom folgen",
      "text": "Verfolgen Sie die englischen Wörter, die einzeln an derselben Stelle erscheinen, und warten Sie auf das Zielwort.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Rechtzeitiger Klick bei Zielwort-Erscheinen",
      "text": "Klicken Sie die Erkennungstaste, solange das Zielwort angezeigt wird. Ein Klick bei einem anderen Wort sperrt die Taste 1 Sekunde.",
      "url": "https://skilldrills.online/de/drills/cognitive/processing-speed/rsvp-reader#step-4"
    }
  ]
};

const guideProps = {
  sources: pickSources('rayner1998', 'rayner2016', 'woods2015'),
  intro: {
    title: "Schnelllesetest – RSVP-Lesetraining",
    paragraphs: [
      "Der kostenlose Schnelllesetest zeigt Wörter im RSVP-Verfahren einzeln an einem festen Punkt (ORP). Erscheint das Zielwort aus dem Banner, klickst du die Erkennungstaste; alle 2 Treffer steigt das Tempo um eine Stufe, von 250 bis maximal 850 Wörter pro Minute. Der angezeigte Text ist englisch.",
      "Der Optimal Recognition Point ist die Stelle im Wort, an der sich der Blick gut fixieren lässt, meist etwas links der Mitte. Der Drill hebt diesen Buchstaben hervor, damit der Blick an einem Punkt bleibt.",
      "Beim normalen Lesen springt der Blick von Wort zu Wort (Sakkaden) und manchmal zurück (Rayner, 1998). RSVP spart diese Sprünge, doch bei hohem Tempo kann das Verständnis sinken (Rayner u. a., 2016). Der Drill misst kein Textverständnis.",
    ],
  },
  benchmarks: {
    title: 'SkillDrills-Übungsstufen (Genauigkeit)',
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
    title: 'Ablauf des Schnelllesetests',
    description: 'Die vier Schritte eines Durchgangs: Blick auf einen Punkt halten und das Zielwort im Wortstrom erkennen.',
    items: [
      { title: "Zielwort in der Anzeige einpragen", description: "Merken Sie sich das oben eingeblendete gesuchte Zielwort." },
      { title: "Fokussierung auf den roten ORP-Mittelpunkt", description: "Halten Sie den Blick starr auf dem farblich markierten Ankerbuchstaben." },
      { title: "Dem Wortstrom folgen", description: "Verfolgen Sie die englischen Wörter, die einzeln an derselben Stelle erscheinen, und warten Sie auf das Zielwort." },
      { title: "Rechtzeitiger Klick bei Zielwort-Erscheinen", description: "Klicken Sie die Erkennungstaste, solange das Zielwort angezeigt wird. Ein Klick bei einem anderen Wort sperrt die Taste 1 Sekunde." },
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
      <RSVPReaderClient
        copy={{
          title: "Schnelllesetest",
          subtitle: "Wörter an einem festen Fokuspunkt verarbeiten und Lesetempo trainieren",
          startTitle: "Schnelllesetest",
          startSubtitle: "Worterkennung • ORP-Fokus",
          stageCaption: "Wörter erscheinen nacheinander in der Mitte. Klicke, sobald das Zielwort auftaucht.",
          rulesTitle: "Drill-Anleitung und Punktesystem",
          aboutTitle: "Was ist RSVP-Lesen?",
          faqTitle: "Häufige Fragen",
          labels: { score: "Punkte", time: "Zeit", speed: "Tempo", bestScore: "Bestwert", timeLeft: "Restzeit", targetWord: "Zielwort", detected: "ZIELWORT ERKANNT", ready: "BEREIT", accuracy: "Genauigkeit", hits: "Treffer", errors: "Fehler", points: "Punkte", playAgain: "Nochmal spielen" },
          aboutLead: "RSVP zeigt Wörter nacheinander an einem festen Punkt. Dadurch entfällt ein Teil der Blicksprünge; bei höherem Tempo kann jedoch das Textverständnis sinken.",
          aboutText: "Dieser Drill trainiert Worterkennung am optimalen Erkennungspunkt (ORP) mit einem englischen Text. WPM beschreibt die Anzeigegeschwindigkeit; Bildschirm- und Eingabelatenz beeinflussen das Ergebnis. 850 WPM ist die höchste Drill-Stufe, kein allgemeiner Verständlichkeitswert.",
          aboutCards: [
            { title: "Für wen ist das sinnvoll?", desc: "Für Studierende, Berufstätige und alle, die viele Texte lesen oder Schnelllesen üben möchten." },
            { title: "Welche Fähigkeiten werden trainiert?", desc: "Worterkennung, Arbeitsgedächtnis und anhaltende Aufmerksamkeit bei hohem visuellen Tempo." },
            { title: "Stufenweise schneller", desc: "Fünf Stufen von 250 bis 850 WPM; alle 2 erkannten Zielwörter steigt das Tempo um eine Stufe." }
          ],
          rulesItems: [
            { num: "1", text: "Zielwort", highlight: "Oberes Banner", result: "Im Wortstrom erkennen" },
            { num: "2", text: "ORP-Fokus", highlight: "Blicksprünge reduzieren", result: "An einer Stelle lesen" },
            { num: "3", text: "Zielwort erkannt", highlight: "+100 Punkte", result: "Taste klicken, solange es sichtbar ist" },
            { num: "4", text: "Tempostufe", highlight: "250 → 850 WPM", result: "Alle 2 Treffer eine Stufe höher" }
          ],
          faqItems: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
