import MomentumTeleportPursuitClient from '@/app/drills/visual-tracking/momentum-teleport-pursuit/MomentumTeleportPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/momentum-teleport-pursuit';
const title = "Springendes Ziel mit den Augen verfolgen | SkillDrills";
const description = "Kostenlose Augenübung: Ein Ziel läuft geradlinig und springt etwa alle 1,2 s an eine zufällige Stelle – Richtung und Tempo bleiben. Finde es wieder.";

export const metadata = {
  title,
  description,
  keywords: ["springendes Ziel verfolgen", "Ziel wiederfinden", "Augenübung Browser", "Sakkaden üben", "Blickfolge Übung", "Augentraining kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/momentum-teleport-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Visuelle Blickverfolgung", item: 'https://skilldrills.online/de/drills/visual-tracking' },
    { '@type': 'ListItem', position: 4, name: "Springendes Ziel verfolgen", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Springendes Ziel verfolgen",
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
  name: "So verfolgst du ein springendes Ziel",
  description: "In vier Schritten ein versetztes Ziel wiederfinden und seine Bewegung in gleicher Richtung weiter verfolgen.",
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
    "name": "Bewegung folgen",
    "text": "Folge dem Ziel ruhig mit den Augen, während es geradlinig läuft und an den Bildschirmrändern abprallt."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Nach dem Sprung wiederfinden",
    "text": "Springt das Ziel an eine neue Stelle, lenke den Blick in einem Zug dorthin und folge der Bewegung in derselben Richtung weiter."
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
    "q": "Was passiert bei „Springendes Ziel verfolgen“?",
    "a": "Das Ziel bewegt sich mit fester Richtung und festem Tempo geradlinig und prallt an den Rändern ab. Bei Tempo 1,0 springt es etwa alle 1,2 Sekunden an eine zufällige Stelle; Richtung und Tempo bleiben dabei erhalten. Du findest es mit den Augen wieder und folgst der Bewegung weiter. Es ist eine Browserübung, kein Sehtest und keine Therapie."
  },
  {
    "q": "Kann ich vorhersehen, wohin das Ziel springt?",
    "a": "Nein. Der neue Ort ist jedes Mal zufällig. Vorhersehbar ist nur, dass das Ziel danach in gleicher Richtung und gleichem Tempo weiterläuft. Eine kurze Linie am Ziel zeigt die Bewegungsrichtung; mit Hide Line verschwindet sie."
  },
  {
    "q": "Was ändert sich bei höherem Tempo?",
    "a": "Das Ziel wird schneller und springt öfter: Bei Tempo 2,0 etwa alle 0,6 Sekunden. Mit Random Speed schwankt das Tempo laufend, und die Sprünge kommen unregelmäßiger."
  },
  {
    "q": "Misst die Übung meine Augenbewegungen oder einen Score?",
    "a": "Nein. Der Browser weiß nicht, wohin du schaust, und es gibt weder Klicks noch Trefferwertung. Am Ende zeigt die Seite nur Zeigerwerte (Zeit auf dem Ziel, Abstand des Zeigers zum Zielmittelpunkt), nicht die Augenposition; gespeichert wird nur die Zahl abgeschlossener Durchgänge in diesem Browser. Ob dein Blick wie geplant bleibt, kontrollierst du selbst."
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
  "heading": "Springendes Ziel verfolgen – so funktioniert die Übung",
  "intro": [
    "„Springendes Ziel verfolgen“ ist eine Browserübung, in der du ein Ziel mit den Augen wiederfindest, nachdem es plötzlich versetzt wurde. Das Ziel läuft geradlinig, prallt an den Rändern ab und springt bei Tempo 1,0 etwa alle 1,2 Sekunden an eine zufällige Stelle – Richtung und Tempo bleiben dabei gleich.",
    "Das ruhige Mitführen des Blicks bei einem bewegten Ziel und der schnelle Blicksprung (Sakkade) zu einem entfernten Ziel werden als getrennte Augenbewegungen beschrieben (Rashbass, 1961; Krauzlis, 2004). Hier wechseln sich beide ständig ab.",
    "Der Browser kennt nur die Position, an der das Ziel gezeichnet wird, und deine Einstellungen – nicht, wohin deine Augen tatsächlich blicken. Angezeigt werden nur Zeigerwerte zur Zeit auf dem Ziel und zum Abstand vom Zielmittelpunkt, kein Wert für die Augen. Vergleiche deshalb dein Gefühl von Ruhe und Konzentration bei gleichem Bildschirm, Abstand und gleichen Einstellungen. Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie die Bewegung aussieht (Woods et al., 2015)."
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
        "Tempo 1,0, Richtungslinie sichtbar, entspannt wiederfinden"
      ],
      [
        "Stufe 2",
        "Nach jedem Sprung das Ziel in einem Blick erfassen"
      ],
      [
        "Stufe 3",
        "Tempo erhöhen und an kürzere Abstände gewöhnen"
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
        "name": "In einem Zug hin, dann weiter folgen",
        "desc": "Such nach einem Sprung nicht herum: Lenke den Blick in einem Zug an die neue Stelle und folge dann der Bewegung in derselben Richtung wie zuvor.",
        "tips": "Verlierst du das Ziel oft, senke das Tempo und lass die Richtungslinie sichtbar."
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
    "Springt das Ziel, lenke den Blick an die neue Stelle und folge der Bewegung in gleicher Richtung weiter.",
    "Erhöhe danach das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln zu."
  ],
  "audience": "Alle, die locker üben möchten, ein bewegtes Ziel nach einem plötzlichen Ortswechsel mit den Augen wiederzufinden."
},
  faqs,
  sources: pickSources('rashbass1961', 'bahill1980', 'findlay1999', 'krauzlis2004', 'barnes2008', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Langsame Augenfolge" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung mit Richtungswechsel" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Blickverfolgung bewegter Ziele" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Fixationsstabilität beim Sehen" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Liegende Acht: Augentraining" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Vorausschauende Blickverfolgung" }
  ],
};

export default function GermanMomentumTeleportPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <MomentumTeleportPursuitClient copy={{"title": "Springendes Ziel verfolgen", "subtitle": "Wiederfinden, wenn das Ziel plötzlich versetzt wird", "description": "Springendes Ziel verfolgen: Das Ziel läuft geradlinig und springt etwa alle 1,2 Sekunden (Tempo 1,0) an eine zufällige Stelle, wobei Richtung und Tempo erhalten bleiben. Kein Klicken; am Ende siehst du den Abstand deines Zeigers zum Ziel. Der Browser zeichnet deinen Blick nicht auf."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
