import ChromaSyncClient from '@/app/drills/visual/reaction-speed/go/no-go/ChromaSyncClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Go/No-Go-Test online kostenlos | Reaktionshemmung üben | SkillDrills",
  description: "Go/No-Go-Test kostenlos im Browser: bei Grün sofort klicken, bei Rot nicht drücken. Übt die Reaktionshemmung und zählt Fehlreaktionen und Auslassungen.",
  keywords: [
    "Go/No-Go-Test",
    "Go/No-Go-Test online",
    "Go/No-Go-Aufgabe",
    "Reaktionshemmung",
    "Reaktionshemmung Test",
    "Inhibitionskontrolle",
    "Impulskontrolle Spiel",
    "Fehlreaktionen Auslassungen"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Go/No-Go-Test online kostenlos | Reaktionshemmung üben | SkillDrills",
    description: "Bei Grün sofort klicken, bei Rot stillhalten. Kostenloser Go/No-Go-Test im Browser für Reaktionshemmung und Fehlreaktionen.",
    type: 'article',
    url: 'https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Go/No-Go-Test online kostenlos | Reaktionshemmung üben | SkillDrills",
    description: "Bei Grün klicken, bei Rot stillhalten: kostenloser Go/No-Go-Test im Browser."
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go',
    languages: getAlternateLanguages('/drills/visual/reaction-speed/go/no-go'),
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
    { "@type": "ListItem", "position": 5, "name": "Go/No-Go-Test", "item": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Inhibitory_control"],
  "name": "Go/No-Go-Test (Reaktionshemmung)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "Web Browser",
  "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "description": "Browser-Version der Go/No-Go-Aufgabe: Bei grünem Go-Signal klicken, bei rotem No-Go-Signal nicht drücken. Zählt Fehlreaktionen, Auslassungen und Reaktionszeit. Übungswerkzeug.",
  "featureList": [
    "Reaktionszeitmessung in Millisekunden mit performance.now()",
    "Signaldauer sinkt mit dem Level von etwa 600 ms auf mindestens 100 ms",
    "Fehlreaktionen (Commission-Fehler) und Auslassungen (Omission-Fehler) getrennt gezählt",
    "Ergebnisse bleiben lokal im Browser (LocalStorage)"
  ],
  "dateModified": "2026-11-08"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Go/No-Go-Test online kostenlos | Reaktionshemmung üben | SkillDrills",
  "alternateName": "Go/No-Go Pro",
  "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go",
  "dateModified": "2026-11-08",
  "description": "Kostenloser Go/No-Go-Test online: bei grünem Signal klicken, bei rotem Signal stillhalten.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "browserRequirements": "Moderner Browser mit HTML5-Canvas.",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
  "author": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Reaktionshemmung, weniger Fehlreaktionen, erst Farbe prüfen, dann reagieren"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Go/No-Go-Test (Reaktionshemmung trainieren)",
  "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go",
  "description": "Browserspiel zur Reaktionshemmung: bei Grün klicken, bei Rot stoppen.",
  "genre": ["Action", "Brain Game", "Reaction Speed"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So funktioniert der Go/No-Go-Test",
  "dateModified": "2026-11-08",
  "description": "Die Browser-Version der Go/No-Go-Aufgabe in vier Schritten.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Blick auf die Bildschirmmitte",
      "text": "Schau auf die Mitte, wo die Kreise erscheinen, und lass Finger und Maus locker.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Bei grünem Go-Signal sofort klicken",
      "text": "Erscheint ein grüner Kreis, klicke oder tippe, bevor er verschwindet (+150 Punkte × Combo). Tastatureingaben werden nicht unterstützt.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Bei rotem No-Go-Signal stillhalten",
      "text": "Erscheint ein roter Kreis, drücke nicht, bis er verschwindet. Dafür gibt es +100 Punkte. Klicks ohne Kreis und schnelles Dauerklicken zählen ebenfalls als Fehlreaktion.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Auch bei hohem Tempo erst die Farbe prüfen",
      "text": "Mit Level und Combo sinkt die Anzeigedauer bis auf 100 ms. Behalte die Gewohnheit bei, erst die Farbe zu erkennen und dann zu klicken.",
      "url": "https://skilldrills.online/de/drills/visual/reaction-speed/go/no-go#step-4"
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
      "name": "Was ist ein Go/No-Go-Test?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Aufgabe, bei der man auf häufige Go-Signale schnell reagiert und bei seltenen No-Go-Signalen die Reaktion zurückhält. In der Psychologie wird sie genutzt, um die Reaktionshemmung zu untersuchen. Diese Seite ist eine Übungsversion für den Browser: bei Grün klicken, bei Rot nicht drücken."
      }
    },
    {
      "@type": "Question",
      "name": "Wie läuft der Go/No-Go-Test ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nach „Übung starten“ beginnt die Runde mit 45 Sekunden. Erscheint in der Mitte ein grüner Kreis, klickst oder tippst du; bei einem roten Kreis wartest du, bis er verschwindet. Jede richtige Antwort bringt 2 Sekunden dazu (maximal 60). Etwa 70 % der Signale sind grün, 30 % rot. Eingabe nur per Maus oder Touch, nicht per Tastatur."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Fehlreaktion und Auslassung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine Fehlreaktion (Commission-Fehler) ist ein Klick bei rotem No-Go-Signal oder wenn gar kein Kreis zu sehen ist. Eine Auslassung (Omission-Fehler) bedeutet, dass ein grünes Go-Signal verschwunden ist, bevor du geklickt hast. Das Erste zeigt, wie gut du stoppst, das Zweite eher Aufmerksamkeitslücken oder zu langsame Reaktionen."
      }
    },
    {
      "@type": "Question",
      "name": "Warum klicke ich bei Rot, obwohl ich es sehe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Weil Grün viel häufiger kommt, wird das Drücken zur Gewohnheit. Nach dem Modell von Logan & Cowan (1984) laufen ein Start- und ein Stopp-Prozess gegeneinander; nur wenn der Stopp-Prozess zuerst ankommt, wird die Reaktion verhindert. Je kürzer das Signal, desto weniger Zeit bleibt zum Stoppen."
      }
    },
    {
      "@type": "Question",
      "name": "Hilft der Test bei Shootern wie Valorant oder CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Erst die Farbe prüfen und dann klicken ähnelt dem Moment, in dem man Freund und Feind unterscheidet, bevor man schießt. Die Aufgabe enthält aber kein Zielen, keine Bewegung, keine Geräusche und kein Absuchen der Karte. Eine Verbesserung im Spiel ist nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Warum schwanken meine Ergebnisse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ergebnisse hängen von Bildschirm, Eingabegerät, Müdigkeit und Konzentration ab. Spiele mehrere Runden auf demselben Gerät und vergleiche deine Werte."
      }
    },
    {
      "@type": "Question",
      "name": "Wird die Reaktionshemmung durch Üben besser?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wer dieselbe Aufgabe wiederholt, wird darin meist besser. Ob sich das auf den Alltag oder andere Spiele überträgt, ist in der Forschung nicht einheitlich belegt und von Person zu Person verschieden. Vergleiche deine Werte am besten unter gleichen Bedingungen."
      }
    },
    {
      "@type": "Question",
      "name": "Beeinflusst die Bildwiederholrate das Ergebnis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Ein Bildschirm zeigt bei 60 Hz nur etwa alle 16,7 ms ein neues Bild, bei 240 Hz etwa alle 4,2 ms, und auch Eingabegeräte haben Verzögerungen (Woods et al., 2015). Vergleiche eigene Werte auf demselben Gerät und Browser statt mit anderen."
      }
    },
    {
      "@type": "Question",
      "name": "Werden meine Ergebnisse gesendet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Punkte und Verlauf werden in deinem Browser (LocalStorage) gespeichert. Wenn du die Browserdaten löschst, können frühere Ergebnisse verloren gehen."
      }
    }
  ]
};

const goNoGoGuide = {
  heading: "Reaktionshemmung üben mit dem Go/No-Go-Test",
  intro: [
    "Beim Go/No-Go-Test reagiert man auf häufige Signale und hält sich bei seltenen Signalen zurück. Es geht also nicht nur ums schnelle Klicken, sondern darum, im richtigen Moment nicht zu drücken. Das unterscheidet ihn von einem einfachen Reaktionstest.",
    "In dieser Browser-Version erscheint in der Mitte ein grüner Kreis (Go) oder ein roter Kreis (No-Go). Bei Grün klicken oder tippen, bei Rot warten. Klicks ohne Kreis und schnelles Dauerklicken zählen ebenfalls als Fehlreaktion. Mit steigendem Level sinkt die Anzeigedauer von etwa 600 ms auf mindestens 100 ms.",
    "Die Idee von Wahlreaktionsaufgaben geht auf die Reaktionszeitstudien von Donders (1868) zurück; den Wettlauf zwischen Start- und Stopp-Prozess haben Logan & Cowan (1984) als Modell beschrieben. Die Punktzahl hier ist ein Übungsergebnis inklusive Bildschirm, Eingabegerät und Browser.",
    "Gemessen wird mit performance.now() im Browser. Bildwiederholrate und Eingabeverzögerung fließen ins Ergebnis ein (Woods et al., 2015), daher Werte nur auf demselben Gerät vergleichen. Die Daten bleiben im Browser dieses Geräts."
  ],
  benchmarks: {
    title: "Richtwerte für Fehlreaktionen (Übungsskala dieses Drills)",
    headers: ["Stufe", "Fehlreaktionsrate", "Punkte & Combo", "Bedeutung"],
    rows: [
      ["Fortgeschritten", "unter 2,0 %", "ab 16.000 Pkt. / Combo ab 30", "Prüft auch bei kurzer Anzeige erst die Farbe"],
      ["Sicher", "2,0–4,9 %", "11.000–15.999 Pkt. / Combo ab 20", "Wenige Fehlreaktionen, Tempo kann steigen"],
      ["Mittel", "5,0–9,9 %", "6.500–10.999 Pkt. / Combo ab 12", "Bei hohem Tempo gelegentlich Klick auf Rot"],
      ["Im Aufbau", "10,0–18,0 %", "3.000–6.499 Pkt. / Combo ab 6", "Oft Klick vor dem Erkennen der Farbe; Genauigkeit vor Tempo"],
      ["Einstieg", "über 18,0 %", "unter 3.000 Pkt. / Combo unter 6", "Zuerst bei Rot stoppen und nicht dauerklicken"]
    ],
    note: "Diese Tabelle ist eine Übungsskala von SkillDrills, keine wissenschaftliche Norm und kein Altersdurchschnitt. Müdigkeit, Konzentration und Bildschirm verändern die Werte."
  },
  techniques: {
    title: "Tipps gegen Fehlreaktionen im Go/No-Go-Test",
    items: [
      {
        name: "Erst Farbe erkennen, dann klicken",
        desc: "Das Signal ist die Farbe, nicht das Auftauchen des Kreises. Wer schon beim ersten Aufblitzen klickt, drückt auch bei Rot.",
        tips: "Anfangs ruhig etwas langsamer klicken und erst bei sicherem Grün reagieren. Tempo erst erhöhen, wenn die Fehler sinken."
      },
      {
        name: "Finger locker lassen",
        desc: "Wer mit halb gedrückter Taste wartet, kann nicht mehr rechtzeitig stoppen.",
        tips: "Finger nur leicht auf Maus oder Bildschirm legen, ohne Druck."
      },
      {
        name: "Nicht im Rhythmus klicken",
        desc: "Viele grüne Signale hintereinander erzeugen einen Klickrhythmus, und beim seltenen Rot steigen die Fehler (Robertson et al., 1997).",
        tips: "Jedes Signal als neues Ereignis behandeln. Ohne Kreis nicht klicken; bei Dauerklicken erscheint kein Kreis mehr."
      },
      {
        name: "Gleiche Bedingungen nutzen",
        desc: "Bei kurzer Anzeigedauer machen sich Bildwiederholrate und Eingabeverzögerung bemerkbar (Woods et al., 2015).",
        tips: "Gleicher Monitor, Browser, gleiches Eingabegerät und ähnliche Tageszeit, dann Fehlreaktionsrate und Durchschnitt vergleichen."
      }
    ]
  },
  steps: [
    "Auf „Übung starten“ klicken; die Runde beginnt mit 45 Sekunden.",
    "Den Blick auf die Bildschirmmitte richten.",
    "Bei grünem Go-Kreis klicken oder tippen, bevor er verschwindet.",
    "Bei rotem No-Go-Kreis warten, bis er verschwindet.",
    "Am Ende Fehlreaktionsrate, Durchschnittsreaktion und erreichtes Level ansehen."
  ],
  audience: "Für alle, die einen Go/No-Go-Test online ausprobieren und neben Tempo auch das bewusste Nicht-Drücken üben wollen, etwa Gamer und Sportler.",
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('donders1868', 'logan1984', 'robertson1997', 'woods2015'),
  related: [
    { href: "/de/drills/visual/reaction-speed/light-reaction", label: "Reaktionstest" },
    { href: "/de/drills/reaction-speed", label: "Reaktionstraining" },
    { href: "/de/drills/visual/depth-perception/distance-judgment", label: "Tiefenwahrnehmung & Distanzurteil" },
    { href: "/de/drills/visual/tracking-accuracy/moving-target", label: "Bewegungsziel-Interzeption" },
    { href: "/de/drills/visual/tracking-accuracy/multiple-targets", label: "Multi-Objekt-Tracking" },
    { href: "/de/drills/visual/visual-recognition/entropic-grid", label: "Entropisches Gitter-Suchspiel" }
  ]
};

export default function ChromaSyncPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <ChromaSyncClient copy={{ title: "Go/No-Go-Test (Reaktionshemmung)", subtitle: "Grüner Kreis: sofort klicken. Roter Kreis: nicht drücken. Kostenlos im Browser." }} />
      <DrillGuide guide={goNoGoGuide} />
      <RelatedDrills />
    </>
  );
}
