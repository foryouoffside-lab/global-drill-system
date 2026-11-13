import DirectionalChaosPursuitClient from '@/app/drills/visual-tracking/directional-chaos-pursuit/DirectionalChaosPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/de/drills/visual-tracking/directional-chaos-pursuit';
const name = "Richtungswechsel verfolgen: Zufallsbahn-Übung";
const title = `${name} | SkillDrills`;
const description = "Richtungswechsel verfolgen im Browser: Ein Ziel ändert ständig zufällig Richtung und Tempo und prallt am Rand ab. Kostenlos, mit einstellbarem Tempo und Dauer.";

export const metadata = {
  title,
  description,
  keywords: ["Richtungswechsel verfolgen","unvorhersehbare Richtungswechsel","Zufallsbahn Augenübung","bewegtes Ziel verfolgen","Blickfolge üben","Augenübung Browser"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/directional-chaos-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'de_DE', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('de', url, 'visual-tracking', name, true),
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  inLanguage: 'de',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Richtungswechsel verfolgen: Zufallsbahn-Übung Web-App",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Aktueller Browser mit HTML5-Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'de',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name,
  url,
  description,
  genre: ['Visual training', 'Eye tracking exercise'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'de',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "So funktioniert: Richtungswechsel verfolgen: Zufallsbahn-Übung",
  description: "Richtungswechsel verfolgen: Zufallsbahn-Übung in vier ruhigen Schritten.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Bequem hinsetzen",
    "text": "Setz dich in angenehmem Abstand zum Bildschirm und entspanne Schultern und Hand."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Richtungswechsel wahrnehmen",
    "text": "Ändert das Ziel die Richtung, richte den Blick ruhig neu darauf aus."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Mit den Augen folgen",
    "text": "Folge dem Ziel mit den Augen, nicht dem Cursor, und bring die Session von 30 bis 120 Sekunden zu Ende."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Einstellungen einzeln ändern",
    "text": "Erhöhe erst dann das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln dazu."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "Was ist die Übung Richtungswechsel verfolgen?",
    "a": "Eine Browser-Übung, bei der du ein Ziel mit unvorhersehbaren Richtungswechseln mit den Augen verfolgst. Dauer (30 bis 120 Sekunden), Tempo, Zielgröße und Linie sind einstellbar. Sie ist kein Sehtest und keine Therapie."
  },
  {
    "q": "Wie bewegt sich das Ziel genau?",
    "a": "Jeden Frame kommt ein kleiner zufälliger Geschwindigkeitsstoß dazu, begrenzt durch ein Höchsttempo. Am Rand prallt das Ziel ab und wird dabei etwas schneller. Auf den Cursor reagiert es nicht."
  },
  {
    "q": "Misst die Übung meine Augenbewegungen?",
    "a": "Nein. Der Browser kann deinen Blick nicht sehen und kennt nur die gezeichnete Zielposition und die Einstellungen. Der Cursor ist nur eine Hilfe und beweist nicht, wohin du schaust. Am Ende siehst du nur den Abstand des Pointers zum Ziel, keine Note."
  },
  {
    "q": "Was ändert das Zufallstempo?",
    "a": "Die Geschwindigkeit des Ziels schwankt unregelmäßig, dadurch wird es schwerer vorherzusehen. Schalte es erst ein, wenn das Grundtempo entspannt klappt, und nicht gleichzeitig mit dem Ausblenden der Linie."
  },
  {
    "q": "Soll die Linie sichtbar bleiben?",
    "a": "Mit sichtbarer Linie lässt sich die Bewegung leichter abschätzen, das hilft am Anfang. Später kannst du sie ausblenden. Es gibt keine richtige Wahl, vergleiche nur gleiche Einstellungen miteinander."
  },
  {
    "q": "Mit welchen Einstellungen fange ich an?",
    "a": "Mit 30 bis 60 Sekunden, langsamem Tempo (0,5 bis 1,0×) und sichtbarer Linie. Das Tempo reicht von 0,5 bis 9,0×, die Zielgröße von 10 bis 50 px; ändere immer nur eine Sache."
  },
  {
    "q": "Verbessert die Übung meine Sehkraft oder meine Aim?",
    "a": "Das kann niemand garantieren. Die Übung ist ein Training im Verfolgen eines bewegten Ziels und verspricht weder bessere Sehkraft noch die Behandlung von Augenproblemen noch besseres Zielen in Shootern. Bei Beschwerden zum Augenarzt."
  },
  {
    "q": "Beeinflussen Bildschirm und Umgebung das Ergebnis?",
    "a": "Ja. Bildwiederholrate, Helligkeit, Kontrast, Bildschirmgröße, Abstand und Browser verändern, wie das Ziel aussieht. Auch Eingabe- und Anzeigeverzögerung spielen mit (Woods et al., 2015), also immer unter gleichen Bedingungen vergleichen."
  },
  {
    "q": "Wie lange sollte ich üben?",
    "a": "In kurzen Blöcken von 5 bis 10 Minuten mit Pausen. Wenn die Augen müde oder trocken werden, aufhören, blinzeln und in die Ferne schauen. Bei Schmerzen, Schwindel, Übelkeit oder Kopfschmerzen abbrechen."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "Anleitung: Richtungswechsel verfolgen: Zufallsbahn-Übung",
  "intro": [
    "Bei dieser Übung zum Richtungswechsel verfolgen bekommt das Ziel in jedem Frame einen kleinen zufälligen Stoß, ändert so laufend Richtung und Tempo und prallt an den Rändern ab. Weil es keine feste Bahn gibt, lässt sich die Bewegung kaum vorhersagen: Läuft das Ziel davon, holt eine schnelle Aufholbewegung der Augen es meist zurück in den zentralen Blick (Krauzlis, 2004).",
    "Der Browser kennt nur die gezeichnete Zielposition und deine Einstellungen, nicht die Position deiner Augen. Angezeigt werden nur der Abstand des Pointers zum Ziel und die Zahl abgeschlossener Sessions. Das Ergebnis ist deshalb ein wiederholbares Übungsprotokoll, kein klinischer Messwert und kein Sehtest.",
    "Nutze einen bequemen Abstand und vergleiche nur Sessions auf demselben Bildschirm und Browser. Bildwiederholrate und Eingabegerät beeinflussen die Darstellung (Woods et al., 2015). Brich bei Schmerzen, Schwindel, Übelkeit oder anhaltend verschwommenem Sehen ab."
  ],
  "benchmarks": {
    "title": "Übungsstufen (Orientierung)",
    "headers": [
      "Stufe",
      "Übungsziel"
    ],
    "rows": [
      [
        "1",
        "Langsames Tempo, Linie sichtbar"
      ],
      [
        "2",
        "Grundtempo entspannt halten"
      ],
      [
        "3",
        "Am Ziel bleiben, auch wenn es die Richtung wechselt"
      ],
      [
        "4",
        "Linie ausblenden"
      ],
      [
        "5",
        "Zufallstempo dazunehmen"
      ]
    ],
    "note": "Diese Tabelle ist eine SkillDrills-Übungsorientierung. Sie ist keine Norm für Sehfunktionen, keine Nutzerstatistik und kein Perzentil."
  },
  "techniques": {
    "title": "Vier Übungstipps",
    "items": [
      {
        "name": "Nicht zu weit vorausdenken",
        "desc": "Die Bahn ist jedes Mal anders. Versuch nicht, die nächste Position zu erraten, sondern halte das Ziel zentral im Blick und hol es in einem Zug zurück.",
        "tips": "Wird es unangenehm, Tempo senken und Linie wieder einblenden."
      },
      {
        "name": "Ziel statt Cursor ansehen",
        "desc": "Der Zeiger ist nur eine Hilfe. Folge dem Ziel mit den Augen und lass Schultern und Hand locker.",
        "tips": "Prüfe ab und zu, ob Kopf oder Nacken mitdrehen."
      },
      {
        "name": "Immer nur eine Schwierigkeit ändern",
        "desc": "Tempo, ausgeblendete Linie und Zufallstempo getrennt steigern. Wird es unbequem, zurück zur vorherigen Einstellung.",
        "tips": "Nach jeder Änderung neu vergleichen."
      },
      {
        "name": "Kurz üben, Pausen machen",
        "desc": "Übe in Blöcken von 5 bis 10 Minuten, blinzle und schau zwischendurch in die Ferne. Länger ist nicht automatisch besser.",
        "tips": "Bei Schmerzen, Schwindel oder Übelkeit sofort aufhören."
      }
    ]
  },
  "steps": [
    "Setz dich in angenehmem Abstand hin und entspanne Schultern und Hand.",
    "Starte mit 30 bis 60 Sekunden, langsamem Tempo und sichtbarer Linie.",
    "Folge dem Ziel mit den Augen, nicht dem Cursor.",
    "Steigere danach Tempo oder einzelne Optionen Schritt für Schritt."
  ],
  "audience": "Alle, die Richtungswechsel verfolgen: Zufallsbahn-Übung unverbindlich im Browser ausprobieren und das Verfolgen bewegter Ziele spielerisch üben möchten."
},
  faqs,
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
  {
    "href": "/de/drills/visual-tracking/constant-slow-pursuit",
    "label": "Augenfolgebewegung üben"
  },
  {
    "href": "/de/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Korrektursakkaden üben: Ziel mit Richtungssprüngen"
  },
  {
    "href": "/de/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "Blickstabilität trainieren: Ziel mit Geisterspur"
  },
  {
    "href": "/de/drills/visual-tracking/infinity-pursuit",
    "label": "Liegende Acht Augenübung"
  }
],
};

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DirectionalChaosPursuitClient
        copy={{
          title: name,
          subtitle: "Unvorhersehbare Bewegung mit den Augen halten",
          description: "Richtungswechsel verfolgen: Ein Ziel ändert laufend zufällig Richtung und Tempo. Der Browser zeichnet deinen Blick nicht auf und misst nur den Abstand des Pointers zum Ziel; betrachte das Ergebnis als Übungsprotokoll, nicht als medizinischen Test.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
