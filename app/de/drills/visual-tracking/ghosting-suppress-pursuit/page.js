import GhostingSuppressPursuitClient from '@/app/drills/visual-tracking/ghosting-suppress-pursuit/GhostingSuppressPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/de/drills/visual-tracking/ghosting-suppress-pursuit';
const name = "Blickstabilität trainieren: Ziel mit Geisterspur";
const title = `${name} | SkillDrills`;
const description = "Blickstabilität trainieren im Browser: Ein Ziel läuft geradeaus und prallt am Rand ab, auf Wunsch mit blasser Geisterspur. Kein Monitor-Ghosting-Test.";

export const metadata = {
  title,
  description,
  keywords: ["Blickstabilität trainieren","Ziel mit Geisterspur verfolgen","Nachleuchtspur ignorieren","bewegtes Ziel verfolgen","Blickfolge üben","Augenübung Browser"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/ghosting-suppress-pursuit') },
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
  name: "Blickstabilität trainieren: Ziel mit Geisterspur Web-App",
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
  name: "So funktioniert: Blickstabilität trainieren: Ziel mit Geisterspur",
  description: "Blickstabilität trainieren: Ziel mit Geisterspur in vier ruhigen Schritten.",
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
    "name": "Auf dem Ziel bleiben",
    "text": "Halte den Blick auf der Mitte des festen Ziels, nicht auf den Ringen dahinter."
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
    "q": "Was ist die Übung Blickstabilität trainieren mit Geisterspur?",
    "a": "Eine Browser-Übung: Du verfolgst ein gerade laufendes Ziel und lässt dich von der optionalen Ringspur nicht ablenken. Dauer (30 bis 120 Sekunden), Tempo, Zielgröße und Linie sind einstellbar. Kein Sehtest, keine Therapie."
  },
  {
    "q": "Ist das ein Monitor-Ghosting-Test?",
    "a": "Nein. Die Übung prüft weder Reaktionszeit noch Ghosting deines Bildschirms. Die Ringe zeichnet die Seite absichtlich selbst; die Leistung des Monitors wird nicht gemessen. Dafür gibt es eigene Monitortests."
  },
  {
    "q": "Wann erscheint die Ringspur?",
    "a": "Nur wenn du die Spur in den Einstellungen einschaltest. Dann bleiben an den letzten Positionen kleine, immer blassere Ringe stehen. Ohne Spur bewegt sich nur das Ziel."
  },
  {
    "q": "Misst die Übung meine Augenbewegungen?",
    "a": "Nein. Der Browser kann deinen Blick nicht sehen und kennt nur die gezeichnete Zielposition, die Einstellungen und den Pointer. Der Cursor ist nur eine Hilfe und beweist nicht, wohin du schaust. Am Ende wird nur der Abstand des Pointers zum Ziel zusammengefasst."
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
  "heading": "Anleitung: Blickstabilität trainieren: Ziel mit Geisterspur",
  "intro": [
    "Bei dieser Übung, mit der du Blickstabilität trainieren kannst, läuft das Ziel mit gleichmäßigem Tempo geradeaus und prallt an den Rändern ab. Schaltest du die Spur ein, zeichnet die Seite blasse, verblassende Ringe hinter das Ziel (standardmäßig aus). Ziel ist, den Blick auf dem festen Ziel zu halten und den Kopien nicht zu folgen.",
    "Der Browser kennt die gezeichnete Zielposition, deine Einstellungen und den Pointer, nicht die Position deiner Augen. Am Ende siehst du, wie lange der Pointer auf dem Ziel lag und wie weit er im Mittel von der Zielmitte entfernt war, ohne Bewertung. Das Ergebnis ist deshalb ein wiederholbares Übungsprotokoll, kein klinischer Messwert und kein Sehtest.",
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
        "Mit eingeschalteter Spur am Ziel bleiben"
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
        "name": "Ziel statt Ringe ansehen",
        "desc": "Folge nicht der blassen Spur, sondern der Zielmitte. Zieht die Spur den Blick weg, kurz blinzeln und zurück zum Ziel.",
        "tips": "Wird es unangenehm, Spur ausschalten und Tempo senken."
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
  "audience": "Alle, die Blickstabilität trainieren: Ziel mit Geisterspur unverbindlich im Browser ausprobieren und das Verfolgen bewegter Ziele spielerisch üben möchten."
},
  faqs,
  sources: pickSources('burr1980', 'martinezConde2004', 'rolfs2009', 'krauzlis2004', 'leigh2015', 'woods2015'),
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
    "href": "/de/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Korrektursakkaden üben: Ziel schlägt Haken"
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
      <GhostingSuppressPursuitClient
        copy={{
          title: name,
          subtitle: "Das Ziel halten, nicht die Spur",
          description: "Blickstabilität trainieren: Verfolge ein Ziel mit optionaler Geisterspur. Das ist kein Monitor-Ghosting-Test. Der Browser zeichnet deinen Blick nicht auf, nur den Abstand des Pointers zum Ziel; das Ergebnis ist ein Übungsprotokoll.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
