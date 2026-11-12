import PeripheralPingPursuitClient from '@/app/drills/visual-tracking/peripheral-ping-pursuit/PeripheralPingPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/peripheral-ping-pursuit';
const title = "Randreize erkennen, Blick in der Mitte | SkillDrills";
const description = "Kostenlose Browserübung: Blick aufs Fadenkreuz in der Mitte, während irgendwo kurz Punkte aufblinken – bemerke sie, ohne hinzuschauen.";

export const metadata = {
  title,
  description,
  keywords: ["Randreize erkennen", "peripheres Sehen üben", "Blick fixieren Übung", "Fadenkreuz fixieren", "Augenübung Browser", "Wahrnehmung am Rand"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/peripheral-ping-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'de_DE', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "Startseite", item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: "Übungen", item: 'https://skilldrills.online/de/drills' },
    { '@type': 'ListItem', position: 3, name: "Visuelles Tracking", item: 'https://skilldrills.online/de/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Randreize erkennen, Blick in der Mitte", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Randreize erkennen, Blick in der Mitte",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'HTML5 Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  inLanguage: 'de',
  dateModified: '2026-11-12',
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "So übst du, Randreize mit festem Blick zu erkennen",
  description: "In vier Schritten den Blick auf das Fadenkreuz halten und kurz aufblinkende Punkte am Rand bemerken.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Bequem hinsetzen",
    "text": "Setz dich in angenehmem Abstand vor den Bildschirm und entspanne Schultern und Nacken."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Fadenkreuz fixieren",
    "text": "Schau nach dem Start auf das Fadenkreuz in der Bildschirmmitte und lass den Blick dort."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Bemerken ohne hinzuschauen",
    "text": "Blinkt irgendwo ein Punkt auf, nimm ihn nur aus dem Augenwinkel wahr, ohne die Augen hinzubewegen."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Eine Einstellung nach der anderen",
    "text": "Wenn es sich leicht anfühlt, erhöhe das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln zu."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "Wie läuft „Randreize erkennen“ ab?",
    "a": "In der Mitte steht ein festes Fadenkreuz. An zufälligen Stellen des Bildschirms erscheint jeweils ein Punkt kurz und verschwindet wieder – bei Tempo 1,0 etwa 0,75 Sekunden lang, danach folgt nach einer kurzen Pause der nächste. Die Punkte bewegen sich nicht. Ziel ist, sie mit dem Blick auf dem Fadenkreuz zu bemerken; geklickt wird nicht. Es ist kein Gesichtsfeldtest."
  },
  {
    "q": "Was bewirken Tempo und Hide Line?",
    "a": "Höheres Tempo lässt die Punkte häufiger und kürzer erscheinen (minimal etwa 0,25 Sekunden). Random Speed lässt Häufigkeit und Dauer laufend schwanken. Hide Line blendet das Fadenkreuz aus, sodass du die Mitte ohne Markierung halten musst."
  },
  {
    "q": "Darf ich zu den Punkten hinschauen?",
    "a": "Der Sinn der Übung ist, den Blick in der Mitte zu halten. Der Browser zeichnet deinen Blick nicht auf, also prüfst du selbst, ob die Augen den Punkten folgen. Passiert das oft, senke das Tempo."
  },
  {
    "q": "Misst die Übung meine Augenbewegungen oder einen Score?",
    "a": "Nein. Der Browser weiß nicht, wohin du schaust, und es gibt weder Klicks noch Trefferwertung. Es gibt keinen Score; gespeichert wird nur die Zahl abgeschlossener Durchgänge in diesem Browser. Ob dein Blick wie geplant bleibt, kontrollierst du selbst."
  },
  {
    "q": "Welche Einstellungen gibt es?",
    "a": "Nach einem 3-2-1-Countdown läuft ein Durchgang von 30, 45, 60, 90 oder 120 Sekunden (Standard 60). Einstellbar sind Tempo 0,5- bis 9,0-fach, Zielgröße 10–50 px, Zielfarbe, die Schalter Hide Line (Linie ausblenden), Random Speed (Zufallstempo), Gaze Trail (Spur), Neon Glow und Scanlines sowie heller oder dunkler Hintergrund. Mit Esc beendest du jederzeit."
  },
  {
    "q": "Werden meine Sehkraft oder mein Aim besser?",
    "a": "Das ist nicht garantiert. Die Übung ist kein Sehtest und keine Therapie, sondern ein Werkzeug zum Üben des Hinschauens. Sie verspricht weder bessere Sehschärfe noch besseres Zielen. Bei Beschwerden an den Augen wende dich an eine Fachperson."
  },
  {
    "q": "Wie lange sollte ich üben?",
    "a": "Ein paar Durchgänge von 1–2 Minuten mit Pausen reichen. Bei müden oder trockenen Augen blinzeln und in die Ferne schauen; bei Schmerzen, Schwindel, Übelkeit oder Kopfschmerzen sofort aufhören."
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
  "heading": "Randreize erkennen, Blick in der Mitte – Anleitung",
  "intro": [
    "Bei „Randreize erkennen, Blick in der Mitte“ hältst du den Blick auf einem Fadenkreuz in der Bildschirmmitte und bemerkst kurz aufblinkende Punkte, ohne die Augen zu bewegen. Die Punkte erscheinen einzeln an zufälligen Stellen und sind bei Tempo 1,0 etwa 0,75 Sekunden sichtbar.",
    "Das zentrale Sehen erfasst Details dort, wohin du schaust; das periphere Sehen bemerkt Veränderungen außerhalb davon. Taucht am Rand etwas auf, wollen die Augen schnell dorthin springen (Findlay & Walker, 1999). Diese Übung wiederholt Situationen, in denen du diesem Impuls widerstehst.",
    "Der Browser kennt nur die Position, an der das Ziel gezeichnet wird, und deine Einstellungen – nicht, wohin deine Augen tatsächlich blicken. Es gibt keinen Score und keinen Genauigkeitswert. Vergleiche deshalb dein Gefühl von Ruhe und Konzentration bei gleichem Bildschirm, Abstand und gleichen Einstellungen. Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie die Bewegung aussieht (Woods et al., 2015)."
  ],
  "benchmarks": {
    "title": "Übungsstufen (SkillDrills-Orientierung)",
    "headers": [
      "Stufe",
      "Übungsziel"
    ],
    "rows": [
      [
        "Stufe 1",
        "Tempo 1,0, Fadenkreuz sichtbar, Blick in der Mitte halten"
      ],
      [
        "Stufe 2",
        "Die meisten Punkte bemerken, ohne hinzuschauen"
      ],
      [
        "Stufe 3",
        "Tempo erhöhen: kürzere, häufigere Punkte"
      ],
      [
        "Stufe 4",
        "Hide Line oder Random Speed einzeln dazunehmen"
      ]
    ],
    "note": "Übungsstufen von SkillDrills zur Orientierung – keine Testnormen, Nutzerstatistiken oder Perzentile."
  },
  "techniques": {
    "title": "Tipps zur Ausführung",
    "items": [
      {
        "name": "Blick in der Mitte, Aufmerksamkeit weit",
        "desc": "Schau entspannt auf das Fadenkreuz und nimm den ganzen Bildschirm wahr. Such die Punkte nicht mit den Augen.",
        "tips": "Wandern die Augen oft mit, senke das Tempo und lass das Fadenkreuz eingeblendet."
      },
      {
        "name": "Das Ziel ansehen, nicht den Cursor",
        "desc": "Die Maus wird nicht gebraucht. Lass die Hand ruhen und folge nur mit den Augen.",
        "tips": "Prüfe ab und zu, ob Kopf oder Nacken mitdrehen."
      },
      {
        "name": "Nur eine Sache schwerer machen",
        "desc": "Erhöhe Tempo, Linie ausblenden und Zufallstempo getrennt voneinander. Wird es unangenehm, geh zur vorigen Einstellung zurück.",
        "tips": "Nach einer Änderung nicht direkt mit älteren Durchgängen vergleichen."
      },
      {
        "name": "Kurz üben, Pausen machen",
        "desc": "Zwischen kurzen Durchgängen blinzeln und in die Ferne schauen. Länger ist nicht besser.",
        "tips": "Bei Schmerzen oder Schwindel sofort stoppen."
      }
    ]
  },
  "steps": [
    "Setz dich in angenehmem Abstand vor den Bildschirm und entspanne Schultern und Nacken.",
    "Starte mit 30–60 Sekunden, Tempo 1,0 und sichtbarer Linie.",
    "Lass den Blick auf dem Fadenkreuz und bemerke aufblinkende Punkte nur aus dem Augenwinkel.",
    "Erhöhe danach das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln zu."
  ],
  "audience": "Alle, die locker üben möchten, mit festem Blick Veränderungen am Rand wahrzunehmen."
},
  faqs,
  sources: pickSources('posner1980', 'eriksen1986', 'wolfe1994', 'findlay1999', 'leigh2015', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Konstantes langsames Blickfolgetraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung mit Richtungswechsel" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Dynamische Ausweich-Blickverfolgung" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Nachbild-Unterdrückung beim Blickfolgen" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Liegende Acht: Augentraining" },
    { href: "/de/drills/visual-tracking/momentum-teleport-pursuit", label: "Blickverfolgung eines versetzten Ziels" }
  ],
};

export default function GermanPeripheralPingPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PeripheralPingPursuitClient copy={{"title": "Randreize erkennen, Blick in der Mitte", "subtitle": "Fadenkreuz fixieren, kurze Lichtpunkte am Rand bemerken", "description": "Blick aufs Fadenkreuz in der Mitte: An zufälligen Stellen blinken Punkte etwa 0,75 Sekunden (Tempo 1,0) auf. Bemerke sie, ohne hinzuschauen. Kein Klicken, kein Score; der Browser zeichnet deinen Blick nicht auf."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
