import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  "title": "Zeitgefühl-Test: Zielzeit treffen | SkillDrills",
  "description": "Zeitgefühl-Test: Eine Zielzeit erscheint, du klickst, wenn sie verstrichen ist. Ein Timing-Spiel, kein Reaktionstest. Dafür: Reaktionstest (Lichtsignal).",
  "keywords": [
    "Zeitgefühl Test",
    "Zeitschätzung Spiel",
    "Timing Spiel",
    "Zielzeit treffen",
    "innere Uhr Test",
    "Zeitgefühl trainieren",
    "Timer stoppen Spiel",
    "Klick-Timing üben"
  ],
  "alternates": {
    "canonical": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test",
    "languages": getAlternateLanguages('/drills/reaction-speed/reaction-time-test')
  },
  "openGraph": {
    "images": [
      {
        "url": "https://skilldrills.online/opengraph-image",
        "width": 1200,
        "height": 630
      }
    ],
    "title": "Zeitgefühl-Test: Zielzeit treffen | SkillDrills",
    "description": "Schätze eine Zielzeit zwischen 1 und 8 Sekunden, klicke im richtigen Moment und sieh deinen Fehler in Millisekunden.",
    "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test",
    "siteName": "SkillDrills",
    "locale": "de_DE",
    "type": "website"
  },
  "twitter": {
    "images": [
      "https://skilldrills.online/opengraph-image"
    ],
    "card": "summary_large_image",
    "title": "Zeitgefühl-Test: Zielzeit treffen | SkillDrills",
    "description": "Timing-Spiel zur Zeitschätzung: Zielzeit merken, im richtigen Moment klicken, Abweichung in Millisekunden sehen."
  },
  "robots": {
    "index": true,
    "follow": true
  }
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
      "name": "Drills Übersicht",
      "item": "https://skilldrills.online/de/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Reaktionsschnelligkeit",
      "item": "https://skilldrills.online/de/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Zeitgefühl-Test",
      "item": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Time_perception"
  ],
  "name": "Zeitgefühl-Test: Zielzeit treffen",
  "alternateName": [
    "Zeitschätzung-Spiel",
    "Timer-stoppen-Spiel",
    "Innere-Uhr-Training"
  ],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "description": "Browser-Spiel zur Zeitschätzung: Eine Zielzeit erscheint kurz, du klickst, sobald du sie für verstrichen hältst, und siehst die Abweichung in Millisekunden."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Zeitgefühl-Test: Zielzeit treffen | SkillDrills",
  "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test",
  "description": "Kostenloses Online-Spiel zur Zeitschätzung. Es misst, wie nah dein Klick an einer Zielzeit liegt, und ist kein Test der Reaktionszeit auf ein Signal.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Zeitschätzung, Intervall-Timing, gleichmäßiges Klick-Timing"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Zeitgefühl-Test: Zielzeit treffen",
  "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test",
  "description": "Timing-Spiel: Eine Zielzeit zwischen 1 und 8 Sekunden merken und im richtigen Moment klicken.",
  "genre": [
    "Timing Game",
    "Casual"
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So spielst du den Zeitgefühl-Test",
  "description": "Zielzeit merken, klicken, wenn sie verstrichen ist, und die Abweichung in Millisekunden ablesen.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Drill starten",
      "text": "Klicke oder tippe auf Drill Starten, um die Vollbild-Arena zu öffnen.",
      "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Zielzeit merken",
      "text": "Lies die Zielzeit zwischen einer und acht Sekunden. Sie verschwindet nach kurzer Zeit wieder.",
      "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Klicken, wenn die Zeit um ist",
      "text": "Klicke oder tippe, sobald du glaubst, dass die Zielzeit verstrichen ist. Während die Uhr läuft, gibt es keine Zahlenanzeige.",
      "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Abweichung prüfen",
      "text": "Spiele mehrere Runden und vergleiche deinen durchschnittlichen Fehler und deine Konstanz.",
      "url": "https://skilldrills.online/de/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Ist das ein Reaktionstest?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Es ist ein Spiel zur Zeitschätzung. Eine Zielzeit wird gezeigt, du klickst, wenn du sie für verstrichen hältst, und der Drill zeigt deine Abweichung in Millisekunden. Wie schnell du auf ein Signal reagierst, misst der Reaktionstest (Lichtsignal)."
      }
    },
    {
      "@type": "Question",
      "name": "Wie funktioniert das Spiel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Zielzeit erscheint kurz und verschwindet dann. Ein leuchtender Orb ohne Zahlenanzeige läuft, während im Hintergrund die Uhr zählt, und du klickst, wenn du die Zielzeit für verstrichen hältst. Danach zeigt der Drill deine genaue Klickzeit und deinen Fehler."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lang sind die Zielzeiten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Ziele beginnen zwischen 1 und etwa 2 Sekunden, die Obergrenze steigt mit dem Level bis maximal 8 Sekunden. Die Zielzeit wird mit drei Nachkommastellen angezeigt, zum Beispiel 3,250 s."
      }
    },
    {
      "@type": "Question",
      "name": "Wie wird die Punktzahl berechnet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dein Fehler ist die Klickzeit minus die Zielzeit. Ein Klick zählt als Treffer, wenn der Fehler innerhalb von 50 ms plus 5 % der Zielzeit liegt; bei 3 Sekunden sind das 200 ms. Je näher, desto mehr Punkte, unter 10 ms gibt es die Wertung EXACT, und aufeinanderfolgende Treffer erhöhen den Combo-Multiplikator bis 3,0x."
      }
    },
    {
      "@type": "Question",
      "name": "Was passiert bei zu frühem oder zu spätem Klick?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Beides zählt als Fehler. Ein Klick außerhalb des erlaubten Fensters ist ein Fehlversuch: Die Combo wird zurückgesetzt und ein roter Warnblitz erscheint, die Punktzahl bleibt aber erhalten."
      }
    },
    {
      "@type": "Question",
      "name": "Darf ich im Kopf mitzählen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, Zählen ist deine eigene Strategie. Der Orb hat keine Zahlenanzeige, seine Ringe pulsieren einmal pro Sekunde, was du als Takt nutzen kannst. Probiere Methoden aus und behalte die mit dem kleinsten durchschnittlichen Fehler."
      }
    },
    {
      "@type": "Question",
      "name": "Beeinflussen Bildwiederholrate und Eingabeverzögerung das Ergebnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leicht. Klicks werden mit der Browser-Uhr performance.now() erfasst, aber dein Display zeigt bei 60 Hz alle 16,7 ms ein neues Bild, bei 144 Hz alle 6,9 ms und bei 240 Hz alle 4,2 ms, und Eingabegeräte fügen Abtastverzögerung hinzu (Woods et al., 2015). Vergleiche Ergebnisse auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Kann ich mein Timing durch Üben verbessern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Übung verbessert meist die geübte Aufgabe, dein durchschnittlicher Fehler in diesem Drill dürfte also sinken. Wie weit sich das auf andere Aufgaben überträgt, ist unterschiedlich und nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Ist das dasselbe wie die 10-Sekunden-Challenge?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Idee ist ähnlich, ein Intervall ohne sichtbare Uhr einzuschätzen, aber das Ziel ändert sich jede Runde und ist nicht auf 10 Sekunden festgelegt. Bewertet wird außerdem die Größe deines Fehlers statt nur bestanden oder nicht bestanden."
      }
    },
    {
      "@type": "Question",
      "name": "Ist es kostenlos und läuft es auf dem Handy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, kostenlos und ohne Anmeldung oder Download. Es läuft im mobilen Browser, aber Touch-Eingabe bringt eigene Latenz mit, vergleiche Ergebnisse daher nur mit anderen Versuchen auf demselben Gerät."
      }
    }
  ]
};

const reactionGuide = {
  "heading": "Zeitgefühl-Test: So funktioniert das Zeitschätzungs-Spiel",
  "intro": [
    "Dies ist ein Spiel zur Zeitschätzung und kein Test der Reaktionszeit auf ein Signal. Eine Zielzeit zwischen einer und acht Sekunden wird kurz gezeigt, verschwindet, und du klickst, wenn du sie für verstrichen hältst. Der Drill zeigt den Abstand zwischen Klick und Ziel in Millisekunden. Wie schnell du auf ein visuelles Signal reagierst, testest du mit dem Reaktionstest (Lichtsignal).",
    "Jeder Klick wird mit der Browser-Uhr performance.now() vollständig auf deinem Gerät erfasst. Dein Display rundet das Gesehene auf sein Aktualisierungsintervall: etwa 16,7 ms pro Bild bei 60 Hz, 6,9 ms bei 144 Hz und 4,2 ms bei 240 Hz (Woods et al., 2015). Die Mausabtastung fügt bei 125 Hz etwa 8 ms hinzu, bei 1000 Hz etwa 1 ms.",
    "Unterschiede unter etwa 5 ms sind Messrauschen. Vergleiche deine eigenen Durchläufe auf derselben Hardware und nicht mit fremden Setups. Dies ist ein Übungswerkzeug, keine klinische Messung."
  ],
  "benchmarks": {
    "title": "So wird der Timing-Fehler gewertet",
    "headers": [
      "Wertung",
      "Erlaubter Fehler",
      "Beispiel bei 3,000 s Zielzeit"
    ],
    "rows": [
      [
        "EXACT",
        "Bis 10 ms",
        "Klick zwischen 2,990 s und 3,010 s"
      ],
      [
        "PERFECT",
        "Bis 20 % des Trefferfensters",
        "Innerhalb von 40 ms"
      ],
      [
        "EXCELLENT",
        "Bis 40 % des Trefferfensters",
        "Innerhalb von 80 ms"
      ],
      [
        "GOOD",
        "Bis 60 % des Trefferfensters",
        "Innerhalb von 120 ms"
      ],
      [
        "OK",
        "Bis 80 % des Trefferfensters",
        "Innerhalb von 160 ms"
      ],
      [
        "HIT",
        "Bis zum vollen Trefferfenster",
        "Innerhalb von 200 ms"
      ]
    ],
    "note": "Das Trefferfenster beträgt 50 ms plus 5 % der Zielzeit, längere Ziele sind in absoluten Zahlen also nachsichtiger. Das sind die Wertungsregeln dieses Drills, keine Bevölkerungsnormen."
  },
  "techniques": {
    "title": "Wege, ein kurzes Intervall einzuschätzen",
    "items": [
      {
        "name": "Gleichmäßig zählen",
        "desc": "Stilles Zählen in Unterteilungen gibt dir einen wiederholbaren inneren Takt. Unterschiedliche Zählgeschwindigkeiten passen zu unterschiedlichen Zielen.",
        "tips": "Wähle eine Zählgeschwindigkeit und behalte sie für die ganze Sitzung, damit deine Fehler vergleichbar bleiben."
      },
      {
        "name": "Den Sekundenpuls nutzen",
        "desc": "Die Ringe um den Orb pulsieren einmal pro Sekunde. Wenn du jeden Puls als Tick zählst, addierst du ganze Sekunden und schätzt nur den Rest.",
        "tips": "Bei Zielzeiten mit Nachkommastellen wie 3,250 s fällt der letzte Klick zwischen zwei Pulse."
      },
      {
        "name": "Den Fehler auswerten",
        "desc": "Nach jedem Klick zeigt der Drill, wann du geklickt hast. Bist du immer zu früh oder zu spät, verschiebe deinen inneren Takt entsprechend.",
        "tips": "Eine gleichbleibende kleine Abweichung lässt sich leichter beheben als eine große zufällige Streuung."
      }
    ]
  },
  "steps": [
    "Drücke Drill Starten, um die Vollbild-Arena zu öffnen.",
    "Lies die Zielzeit, bevor sie verschwindet.",
    "Klicke oder tippe, sobald du glaubst, dass die Zielzeit verstrichen ist.",
    "Spiele mehrere Runden und vergleiche deinen durchschnittlichen Fehler und deine Konstanz."
  ],
  "audience": "Gamer, Musiker, Sportler und alle, die gleichmäßigeres Trigger-Timing und ein besseres Gefühl für kurze Intervalle üben möchten.",
  "faqs": faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('woods2015'),
  "related": [
    {
      "href": "/de/drills/visual/reaction-speed/light-reaction",
      "label": "Reaktionstest (Lichtsignal)"
    },
    {
      "href": "/de/drills/reaction-speed",
      "label": "Reaktionsschnelligkeit Hub"
    },
    {
      "href": "/de/drills/motor/movement-speed/rapid-tapping",
      "label": "CPS Test & Klick-Geschwindigkeit"
    },
    {
      "href": "/de/drills/reaction-speed/fps-tracking-trainer",
      "label": "FPS Tracking Trainer"
    },
    {
      "href": "/de/drills/fps/flick-shot-training",
      "label": "Flick Shot Trainer"
    }
  ]
};

export default function GermanReactionTimeTestPage() {
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
      <ReactionTimeTestWrapper
        copy={{
          title: "Zeitgefühl-Test: Zielzeit treffen",
          subtitle: "Zeitschätzung: Zielzeit merken, im richtigen Moment klicken und die Abweichung in Millisekunden sehen",
          caption: "Eine Zielzeit erscheint und verschwindet. Klicke, wenn du glaubst, dass diese Zeit vergangen ist.",
        }}
      />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
