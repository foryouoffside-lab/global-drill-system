import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/de/drills/visual-tracking/dynamic-evasion-pursuit';
const name = "Korrektursakkaden üben: Ziel schlägt Haken";
const title = `${name} | SkillDrills`;
const description = "Korrektursakkaden üben im Browser: Das Ziel läuft geradeaus und springt etwa alle 0,5 s in eine neue zufällige Richtung. Kostenlos, Tempo und Dauer einstellbar.";

export const metadata = {
  title,
  description,
  keywords: ["Korrektursakkaden üben","Aufholsakkaden","ausweichendes Ziel","abrupte Richtungswechsel","Blick neu ausrichten","Augenübung Browser"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/dynamic-evasion-pursuit') },
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
  name: "Korrektursakkaden üben: Ziel schlägt Haken Web-App",
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
  name: "So funktioniert: Korrektursakkaden üben: Ziel schlägt Haken",
  description: "Korrektursakkaden üben: Ziel schlägt Haken in vier ruhigen Schritten.",
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
    "name": "Richtungssprung erkennen",
    "text": "Verpasse den Moment des Richtungswechsels nicht und richte den Blick auf die neue Richtung aus."
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
    "q": "Was bedeutet Korrektursakkaden üben in dieser Übung?",
    "a": "Du verfolgst ein Ziel, das in festen kurzen Abständen abrupt die Richtung wechselt, und holst es danach mit dem Blick wieder ein. Dauer (30 bis 120 Sekunden), Tempo, Zielgröße und Linie sind einstellbar. Gemessen werden deine Sakkaden nicht."
  },
  {
    "q": "Weicht das Ziel meinem Cursor aus?",
    "a": "Nein. Die Richtungswechsel kommen zufällig etwa alle 0,5 Sekunden und hängen nicht vom Cursor ab. Bei sichtbarer Linie zeigt ein kurzer Strich die aktuelle Bewegungsrichtung."
  },
  {
    "q": "Misst die Übung meine Augenbewegungen?",
    "a": "Nein. Der Browser kann deinen Blick nicht sehen und kennt nur die gezeichnete Zielposition und die Einstellungen. Der Cursor ist nur eine Hilfe und beweist nicht, wohin du schaust. Am Ende zeigt die Seite nur Zeigerwerte (Zeit auf dem Ziel, Abstand zum Zielmittelpunkt)."
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
  "heading": "Anleitung: Korrektursakkaden üben: Ziel schlägt Haken",
  "intro": [
    "Bei dieser Übung, mit der du Korrektursakkaden üben kannst, läuft das Ziel geradeaus und wechselt etwa alle 0,5 Sekunden (mit Zufallstempo 0,35 bis 0,65 s) abrupt Richtung und Tempo; an den Rändern prallt es ab. Nach so einem Schnitt hinken die Augen hinterher, bis eine schnelle Korrekturbewegung den Abstand schließt und die glatte Blickfolge wieder einsetzt (Rashbass, 1961; Krauzlis, 2004).",
    "Der Browser kennt nur die gezeichnete Zielposition und deine Einstellungen, nicht die Position deiner Augen. Angezeigt werden nur Zeigerwerte (Zeit auf dem Ziel, Abstand zum Zielmittelpunkt); gezählt werden nur abgeschlossene Sessions. Das Ergebnis ist deshalb ein wiederholbares Übungsprotokoll, kein klinischer Messwert und kein Sehtest.",
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
        "Nach jedem Richtungswechsel schnell wieder am Ziel"
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
        "name": "Nach dem Sprung in einem Zug zurück",
        "desc": "Nach einem Richtungswechsel nicht hektisch hinterherspringen: neue Richtung erfassen, dann ruhig wieder anschließen. Du musst nicht jeden Wechsel vorhersehen.",
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
  "audience": "Alle, die Korrektursakkaden üben: Ziel schlägt Haken unverbindlich im Browser ausprobieren und das Verfolgen bewegter Ziele spielerisch üben möchten."
},
  faqs,
  sources: pickSources('bahill1980', 'rashbass1961', 'krauzlis2004', 'robinson1965', 'barnes2008', 'woods2015'),
  related: [
  {
    "href": "/de/drills/visual-tracking/constant-slow-pursuit",
    "label": "Augenfolgebewegung üben"
  },
  {
    "href": "/de/drills/visual-tracking/directional-chaos-pursuit",
    "label": "Richtungswechsel verfolgen: Zufallsbahn-Übung"
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
      <DynamicEvasionPursuitClient
        copy={{
          title: name,
          subtitle: "Gerade Bahnen, abrupte Richtungswechsel",
          description: "Korrektursakkaden üben: Das Ziel wechselt etwa alle 0,5 Sekunden abrupt die Richtung. Am Ende siehst du den Abstand deines Zeigers zum Ziel, aber der Browser zeichnet deinen Blick nicht auf; das Ergebnis ist ein Übungsprotokoll, kein medizinischer Test.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
