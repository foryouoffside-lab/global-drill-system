import DistractionFighterClient from '@/app/drills/cognitive/focus/distraction-fighter/DistractionFighterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — de-DE (cognitive/focus/distraction-fighter)
// PRIMARY:  "Stroop-Test"                    — High search volume domestic test query
//           "Stroop-Test online"             — High conversion direct tool query
// SECONDARY / LSI:
//           "Stroop-Effekt"                  — Academic & psychometric query
//           "Farb-Wort-Interferenz"          — Classical German scientific term
//           "Kognitive Inhibition"           — Cognitive mechanism term
//           "Selektive Aufmerksamkeit Test"  — Secondary phrase
//           "Konzentrationstest kostenlos"   — Casual brain training query
//           "Stroop Test online kostenlos"   — High-intent free tool search
// WINNER TITLE: Stroop-Test Online – Kostenloser Farb-Wort-Test | SkillDrills
// ============================================================

export const metadata = {
  title: "Stroop-Test online kostenlos | Farb-Wort-Test | SkillDrills",
  description: "Stroop-Test online kostenlos: Tippe die Schriftfarbe, nicht das Wort, und übe selektive Aufmerksamkeit. Start mit 45 s, +2 s pro Treffer.",
  keywords: [
    "Stroop-Test",
    "Stroop-Test online",
    "Stroop-Test online kostenlos",
    "Farb-Wort-Test",
    "stroop test farben",
    "stroop test auswertung",
    "Stroop-Effekt-Test",
    "selektive Aufmerksamkeit",
    "kognitive Inhibition"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Stroop-Test online kostenlos | Farb-Wort-Test | SkillDrills",
    description: "Stroop-Test online kostenlos: Tippe die Schriftfarbe, nicht das Wort, und übe selektive Aufmerksamkeit. Start mit 45 s, +2 s pro Treffer.",
    type: "website",
    url: "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Stroop-Test online kostenlos | Farb-Wort-Test | SkillDrills",
    description: "Stroop-Test online kostenlos: Tippe die Schriftfarbe, nicht das Wort, und übe selektive Aufmerksamkeit. Start mit 45 s, +2 s pro Treffer.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter",
    languages: getAlternateLanguages('/drills/cognitive/focus/distraction-fighter'),
  },
};

export default function DistractionFighterPageDe() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "Kognitive Drills", "item": "https://skilldrills.online/de/drills/cognitive" },
      { "@type": "ListItem", "position": 3, "name": "Stroop-Test", "item": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Stroop_effect", "https://en.wikipedia.org/wiki/Inhibitory_control"],
    "name": "Stroop-Test online kostenlos (Farb-Wort-Test)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Kostenloser Stroop-Test online: Schriftfarbe statt Wortbedeutung wählen und so selektive Aufmerksamkeit und Hemmung üben.",
    "genre": "Kognitives Training / Aufmerksamkeit / Stroop-Effekt",
    "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Stroop-Test online kostenlos (Farb-Wort-Test)",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-12",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "browserRequirements": "HTML5, JavaScript fähiger Webbrowser",
    "description": "Kostenloser Stroop-Test online: Schriftfarbe statt Wortbedeutung wählen und so selektive Aufmerksamkeit und Hemmung üben.",
    "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Stroop-Test online kostenlos (Farb-Wort-Test)",
    "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter",
    "description": "Kostenloser browserbasierter Stroop-Test. Bestimme die Schriftfarbe inkongruenter Farbwörter und unterdrücke automatisierte Leseimpulse.",
    "dateModified": "2026-11-12",
    "gamePlatform": "Web Browser",
    "genre": ["Kognitives Training", "Gehirntraining", "Stroop-Test", "Aufmerksamkeit"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-12",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist der Stroop-Test und was misst er?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Stroop-Test ist ein klassisches psychologisches Experiment, das 1935 von J. Ridley Stroop entwickelt wurde. In der Forschung untersucht er Interferenzkontrolle und selektive Aufmerksamkeit, indem er prüft, wie schnell und präzise eine Person die Druckfarbe eines Wortes benennen kann, dessen Textbedeutung eine andere Farbe beschreibt (z. B. das Wort 'BLAU' in roter Schrift). Diese Online-Version ist eine Übung, kein psychologischer Test."
        }
      },
      {
        "@type": "Question",
        "name": "Warum entsteht der Stroop-Effekt im menschlichen Gehirn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das Lesen geschriebener Wörter ist bei geübten Erwachsenen ein automatisierter, unwillkürlicher Prozess (MacLeod, 1991). Die semantische Wortbedeutung wird schneller verarbeitet als die visuelle Farbwahrnehmung. Um die richtige Farbe auszuwählen, muss das Gehirn im präfrontalen Kortex den automatischen Leseimpuls aktiv hemmen."
        }
      },
      {
        "@type": "Question",
        "name": "Was versteht man unter kognitiver Inhibition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kognitive Inhibition ist die exekutive Funktion des Gehirns, irrelevante Reize, störende Gedanken oder gewohnheitsmäßige Verhaltensweisen zu unterdrücken, um zielgerichtet handeln zu können. Sie ist unverzichtbar für Konzentration in lauten Umgebungen und Impulskontrolle."
        }
      },
      {
        "@type": "Question",
        "name": "Wie kann man seine Leistung im Stroop-Test verbessern?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Versuche, die Buchstaben nicht innerlich vorzulesen (keine Subvokalisation). Richte deinen Blick auf die visuelle Kontur oder Randpixel der Buchstaben, um die reine Farbwahrnehmung vor der semantischen Bedeutung zu isolieren."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Hirnareale werden beim Stroop-Test aktiviert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Studien berichten eine Beteiligung des dorsolateralen präfrontalen Kortex (DLPFC) und des anterioren cingulären Kortex (ACC) an der Konfliktverarbeitung (Posner & Petersen, 1990). Dieser Drill misst keine Hirnaktivität."
        }
      },
      {
        "@type": "Question",
        "name": "Was unterscheidet den Stroop-Test von der Eriksen-Flanker-Aufgabe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beim Stroop-Test tritt der Konflikt innerhalb desselben Stimulus auf (Textbedeutung versus Druckfarbe). Bei der Flanker-Aufgabe entsteht die Interferenz durch räumlich benachbarte Ablenker (z. B. Pfeile, die in die entgegengesetzte Richtung zeigen)."
        }
      },
      {
        "@type": "Question",
        "name": "Hilft das Training gegen Ablenkungen im Großraumbüro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Das ist nicht belegt. Mit Übung steigt meist dein Punktestand in diesem Drill, aber ob sich das auf Ablenkungen im Alltag überträgt, ist wissenschaftlich offen. Nutze ihn als kurzes Aufwärmen."
        }
      },
      {
        "@type": "Question",
        "name": "Was beeinflusst meine Punktzahl?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jeder Treffer bringt 100 Punkte × Combo-Multiplikator × Stufenfaktor, daher zählt eine lange Serie richtiger Antworten am meisten. Eine falsche Antwort oder ein abgelaufenes Wort setzt die Combo zurück und kostet 1 Sekunde; konzentriere dich also darauf, die Schriftfarbe statt der Wortbedeutung zu wählen."
        }
      },
      {
        "@type": "Question",
        "name": "Werden Fehlklicks mit Zeitstrafen belegt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Eine falsche Antwort setzt die Combo zurück und zieht immer 1 Sekunde ab. Dasselbe gilt, wenn ein Wort unbeantwortet abläuft (bei aktivierter Zeitlimit-Option, standardmäßig an). Jeder Treffer bringt +2 Sekunden, die Uhr ist auf 60 Sekunden begrenzt."
        }
      },
      {
        "@type": "Question",
        "name": "Ist dieser Online-Stroop-Test kostenlos und touch-kompatibel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, der Test ist vollständig kostenlos und läuft ohne Installation auf PCs (Mausklick), Tablets und Smartphones (Tippen). Eine Tastatursteuerung gibt es nicht."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Anleitung zum Stroop-Farb-Wort-Interferenztest",
    "description": "So läuft eine Runde des Stroop-Tests online ab.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Farbwort auf dem Bildschirm fixieren",
        "text": "Betrachte das angezeigte Wort (z. B. 'BLAU' in roter Farbe), ohne es innerlich laut vorzulesen.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Automatisierte Wortbedeutung aktiv unterdrücken",
        "text": "Hemme den Leseimpuls und isoliere die reine Farbwahrnehmung der Buchstabenpixel.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Schaltfläche der Schriftfarbe auswählen",
        "text": "Tippe auf den Farb-Button, der der tatsächlichen Druckfarbe entspricht (im Beispiel: Rot).",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Combo-Serien aufbauen und Tempo steigern",
        "text": "Halte einen gleichmäßigen Rhythmus ohne Fehlklicks: Treffer bringen +2 s (max. 60 s), Fehler und abgelaufene Wörter kosten 1 s. Bei 0 Sekunden endet die Runde.",
        "url": "https://skilldrills.online/de/drills/cognitive/focus/distraction-fighter#step-4"
      }
    ]
  };

  const distractionFighterGuide = {
    heading: "Leitfaden zum Stroop-Test & Neurobiologie der kognitiven Inhibition",
    intro: [
      "Der Stroop-Effekt zählt seit seiner Erstveröffentlichung durch J. Ridley Stroop (1935) zu den am gründlichsten erforschten und replizierten Phänomenen der experimentellen Kognitionspsychologie und Neurowissenschaft. Werden Probanden mit Farbwörtern konfrontiert, deren Textinhalt von der Druckfarbe abweicht (z. B. das Wort 'GRÜN' in roter Farbe), verlangsamen sich die Reaktionszeiten und die Fehleranfälligkeit steigt.",
      "Die neurobiologische Ursache liegt in der asymmetrischen Verarbeitungsgeschwindigkeit: Das semantische Lesen geschriebener Wörter ist im erwachsenen Gehirn durch jahrelange Praxis hochgradig automatisiert (MacLeod, 1991). Die Benennung der reinen Farbe erfordert hingegen willkürliche, kontrollierte visuelle Aufmerksamkeit. Das Stoppen automatischer Reaktionen wird in der Forschung zur Reaktionshemmung als Wettlauf beschrieben (Logan & Cowan, 1984); beim Stroop-Test entsteht ein Fehler, wenn der Leseimpuls nicht rechtzeitig gebremst wird.",
      "Funktionelle Bildgebungsstudien belegen, dass diese kognitive Konfliktlösung primär im vorderen cingulären Kortex (ACC) und im dorsolateralen präfrontalen Kortex (DLPFC) stattfindet (Posner & Petersen, 1990). Dieser Drill lässt dich diesen Konflikt wiederholt üben; eine bessere Konzentration im Alltag ist damit nicht garantiert.",
      "Zeitmessung: Der Drill zeigt keine Reaktionszeiten an, sondern Punkte, Genauigkeit und erreichte Stufe. Das Zeitfenster pro Wort läuft clientseitig über Browser-Timer. Moderne Browser vergröbern Zeitgeber als Sicherheitsmaßnahme gegen spekulative Seitenkanalangriffe wie Spectre auf rund 1 ms, während der Bildschirm Aktualisierungen auf die jeweilige Bildwiederholrate quantisiert: ca. 16,7 ms pro Frame bei 60 Hz, 6,9 ms bei 144 Hz und 4,1 ms bei 240 Hz (Woods et al., 2015). Vergleichen Sie Ihre Fortschritte am besten auf demselben Endgerät statt Rohwerte zwischen unterschiedlichen Systemen gegenüberzustellen.",
      "Datentransparenz: SkillDrills erfasst und speichert keinerlei aggregierte Nutzerdaten auf externen Servern. Sämtliche Punktzahlen und Einstellungen verbleiben ausschließlich im lokalen Speicher (localStorage) Ihres Webbrowsers. Diese Übung ist ein kostenloses kognitives Trainingsspiel zu Bildungs- und Unterhaltungszwecken."
    ],
    benchmarks: {
      title: "Stroop-Test: Notenstufen (Punkte pro Runde)",
      headers: ["Stufe", "Punkte"],
      rows: [
        ["S+", "ab 21.660"],
        ["S", "17.340 – 21.659"],
        ["A", "13.500 – 17.339"],
        ["B", "8.640 – 13.499"],
        ["C", "4.860 – 8.639"],
        ["D", "2.160 – 4.859"],
        ["F", "unter 2.160"]
      ],
      note: "SkillDrills-Übungsbänder, direkt aus der Notenformel des Endbildschirms berechnet (Anteil an 24.000 Referenzpunkten); keine Nutzerstatistik und keine Normwerte. Jeder Treffer bringt 100 Punkte × Combo-Multiplikator (bis 3x) × Stufenfaktor."
    },
    techniques: {
      title: "4 Strategien zur Überwindung der Stroop-Interferenz",
      items: [
        {
          name: "Visuelle Fokussierung auf Buchstabenkanten",
          desc: "Blicke nicht auf das Wort als Ganzes, sondern isoliere die äußeren Kanten oder Serifen eines einzelnen Buchstabens, um das automatische Lesemuster zu unterbrechen.",
          tips: "Betrachte das Schriftzeichen wie ein abstraktes geometrisches Farbmuster."
        },
        {
          name: "Strikte Unterdrückung innerer Vorlese-Stimmen",
          desc: "Wer das Wort im Kopf ausspricht, verstärkt die Interferenz im Sprachzentrum. Das Ziel ist die direkte Verbindung von Farbwahrnehmung und motorischer Tippreaktion.",
          tips: "Atme ruhig aus und vermeide es, die Farbnamen innerlich zu murmeln."
        },
        {
          name: "Rhythmisches Reaktions-Timing",
          desc: "Hektisches Schnellklicken führt zu Fehlerserien, und jeder Fehler kostet 1 Sekunde. Ein gleichmäßiges, kontrolliertes Tempo schützt deinen Combo-Multiplikator.",
          tips: "Priorisiere Präzision vor Höchstgeschwindigkeit; die Geschwindigkeit stellt sich automatisch ein."
        },
        {
          name: "Kurze tägliche Reizüberflutungs-Resilienz",
          desc: "Mit Ermüdung steigen die Fehler. Kurze tägliche Einheiten von 3 bis 5 Minuten lassen sich gut durchhalten.",
          tips: "Nutze diesen Drill ideal als Aufwärmübung vor anspruchsvoller Denkarbeit oder Wettkampf-Matches."
        }
      ]
    },
    steps: [
      "Klicke auf Start und richte deinen Fokus auf den Bildschirmmittelpunkt.",
      "Ein Farbwort erscheint in einer abweichenden Schriftfarbe (z. B. 'GELB' in blauer Farbe).",
      "Unterdrücke den Impuls, das Wort 'GELB' zu lesen, und erkenne die blaue Farbe.",
      "Tippe am unteren Bildschirmrand auf den Button der entsprechenden Druckfarbe.",
      "Die Uhr startet bei 45 Sekunden; halte die Serie fehlerfrei, um Combo-Punkte, Zeitgutschriften und höhere Stufen zu erreichen."
    ],
    audience: "Schüler, Studierende, Wissensarbeiter, E-Sportler und alle, die den Stroop-Effekt selbst ausprobieren wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('macLeod1991', 'logan1984', 'posner1990', 'woods2015'),
    related: [
      { href: "/de/drills/cognitive/focus/concentration-grid", label: "Schulte-Tabelle Konzentrationsgitter" },
      { href: "/de/drills/cognitive/attention/concentration-stamina", label: "Konzentrations-Ausdauer Test" },
      { href: "/de/drills/cognitive/processing-speed/symbol-matching", label: "Symbol Matching Speed Test" },
      { href: "/de/drills/reaction-speed/reaction-game", label: "Reaktionstest Spiel" },
      { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Reaktionszeit Test" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <DistractionFighterClient
        copy={{
          title: "Stroop-Test online kostenlos",
          subtitle: "Farb-Wort-Test: Schriftfarbe statt Wortbedeutung wählen",
          caption: "Benenne die Schriftfarbe und ignoriere die Textbedeutung. Die Interferenz zwischen automatischem Lesen und Farberkennung misst deine kognitive Hemmungskontrolle (Stroop, 1935).",
          stageCaption: "Wähle den Button der Schriftfarbe aus und ignoriere die widersprüchliche Wortbedeutung.",
          rulesTitle: "Drill-Anleitung & Punktesystem",
          aboutTitle: "Über den Stroop-Test & Kognitive Inhibition",
          aboutText: "Der Stroop-Effekt beschreibt die Verzögerung beim Benennen der Schriftfarbe eines Wortes, wenn Text und Farbe im Widerspruch stehen (Stroop, 1935; MacLeod, 1991).\n\nLesen ist ein hochgradig automatisierter Prozess. Das Gehirn muss im präfrontalen Kortex den Leseimpuls aktiv unterdrücken, um die reine Farbwahrnehmung durchzusetzen.\n\nDer Drill macht diesen Konflikt übbar; eine bessere Konzentration im Alltag ist nicht garantiert.",
          aboutCards: [
            { title: "Für wen geeignet?", desc: "Wissensarbeiter im Großraumbüro, Schüler und Studierende sowie Gamer, die ihre Impulskontrolle gegen Benachrichtigungen schärfen wollen.", color: "bg-blue-600" },
            { title: "Trainierte Fähigkeiten", desc: "Widerstandskraft gegen Stroop-Interferenz, kognitive Hemmung, Top-down-Aufmerksamkeitssteuerung und Impulsdämpfung.", color: "bg-emerald-600" },
            { title: "Inhibitionskontrolle", desc: "Unterdrücke den automatischen Leseimpuls und isoliere die reine Farbwahrnehmung unter steigendem Zeitdruck.", color: "bg-purple-600" }
          ],
          rulesItems: [
            { num: "1", text: "Farbwort in fremder Farbe", highlight: "Schriftfarbe wählen", result: "Wort ignorieren" },
            { num: "2", text: "Treffer", highlight: "100 × Combo × Stufe", result: "+2 s (max. 60 s)" },
            { num: "3", text: "Fehler / abgelaufen", highlight: "Combo weg", result: "-1 s" },
            { num: "4", text: "Höhere Stufe", highlight: "kürzeres Zeitfenster", result: "ab Stufe 4: 6 Farben" }
          ]
        }}
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
      <DrillGuide guide={distractionFighterGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
