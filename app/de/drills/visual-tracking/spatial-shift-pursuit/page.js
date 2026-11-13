import SpatialShiftPursuitClient from '@/app/drills/visual-tracking/spatial-shift-pursuit/SpatialShiftPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/spatial-shift-pursuit';
const title = "Blickfolge bei plötzlichem Kurswechsel | SkillDrills";
const description = "Kostenlose Augenübung: Das Ziel läuft geradlinig, prallt an den Rändern ab und ändert ohne Vorwarnung Richtung und Tempo. Bleib mit dem Blick dran.";

export const metadata = {
  title,
  description,
  keywords: ["Blickfolge Kurswechsel", "plötzlicher Richtungswechsel Ziel", "Augenübung Browser", "Augenfolgebewegung üben", "bewegtes Ziel verfolgen", "Augentraining kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/spatial-shift-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Blickfolge bei plötzlichem Kurswechsel", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Blickfolge bei plötzlichem Kurswechsel",
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
  name: "So übst du die Blickfolge bei plötzlichem Kurswechsel",
  description: "In vier Schritten einem Ziel folgen, das unvermittelt Richtung und Tempo wechselt.",
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
    "name": "Geraden folgen",
    "text": "Folge dem Ziel ruhig, während es geradlinig läuft und an den Bildschirmrändern abprallt."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Nach dem Wechsel neu ansetzen",
    "text": "Ändern sich Richtung und Tempo plötzlich, stell den Blick auf die neue Bewegung ein und folge weiter."
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
    "q": "Wie bewegt sich das Ziel bei dieser Übung?",
    "a": "Das Ziel läuft geradlinig, prallt an den Rändern ab und wird bei jedem Abprall etwas schneller (etwa 2 %). Zu zufälligen Zeitpunkten ändern sich ohne Vorwarnung Richtung und Tempo: Die waagrechte und die senkrechte Richtung kehren sich jeweils um oder bleiben, das Tempo ändert sich um den Faktor 0,8 bis 1,3. Es gibt keine Sprünge und kein Wackeln des Bildschirms. Eine reine Blickübung, kein Sehtest."
  },
  {
    "q": "Wie oft wechselt der Kurs?",
    "a": "Ohne festen Rhythmus, zufällig und meist etwa einmal pro Sekunde. Mit Random Speed verdoppelt sich die Wahrscheinlichkeit eines Wechsels, und das Tempo schwankt zusätzlich."
  },
  {
    "q": "Was zeigt die Linie am Ziel?",
    "a": "Die aktuelle Bewegungsrichtung und das Tempo. Mit Hide Line verschwindet sie, und du erkennst den Kurswechsel nur noch an der Bewegung selbst."
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
  "heading": "Blickfolge bei plötzlichem Kurswechsel – Anleitung",
  "intro": [
    "Bei der Blickfolge bei plötzlichem Kurswechsel folgst du einem Ziel, das geradlinig läuft, an den Rändern abprallt und ohne Vorwarnung Richtung und Tempo ändert. Die Wechsel kommen zufällig und häufig; das Ziel springt nicht, und der Bildschirm bewegt sich nicht.",
    "Ändert ein bewegtes Ziel abrupt die Richtung, kommt die glatte Augenfolgebewegung zu spät, und schnelle Korrekturbewegungen mischen sich ein (Robinson, 1965; Krauzlis, 2004). Die Übung wiederholt genau solche Neuanpassungen.",
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
        "Tempo 1,0, Richtungslinie sichtbar, nach Wechseln neu ansetzen"
      ],
      [
        "Stufe 2",
        "Das Ziel auch bei Wechseln kaum verlieren"
      ],
      [
        "Stufe 3",
        "Tempo erhöhen, schnellere Wechsel verfolgen"
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
        "name": "Nicht vorauseilen",
        "desc": "Rechne auch auf Geraden jederzeit mit einem Wechsel und bleib mit dem Blick auf dem Ziel. Wer vorausschaut, verliert es beim Kurswechsel stärker.",
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
    "Ändern sich Richtung und Tempo plötzlich, stell den Blick auf die neue Bewegung ein und folge weiter.",
    "Erhöhe danach das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln zu."
  ],
  "audience": "Alle, die locker üben möchten, unvorhersehbaren Bewegungen mit den Augen zu folgen."
},
  faqs,
  sources: pickSources('krauzlis2004', 'findlay1999', 'robinson1965', 'rashbass1961', 'kahlon1996', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Konstantes langsames Blickfolgetraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung bei Richtungswechseln" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Dynamische Ausweich-Blickverfolgung" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Blickverfolgung mit Nachbild-Unterdrückung" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Augentraining in Form einer Acht" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Prädiktive Blickführung" }
  ],
};

export default function GermanSpatialShiftPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SpatialShiftPursuitClient copy={{"title": "Blickfolge bei plötzlichem Kurswechsel", "subtitle": "Einem Ziel folgen, das ohne Vorwarnung Richtung und Tempo ändert", "description": "Blickfolge bei plötzlichem Kurswechsel: Das Ziel läuft geradlinig, prallt ab und ändert zu zufälligen Zeitpunkten Richtung und Tempo. Hide Line blendet die Richtungslinie aus. Kein Klicken; am Ende siehst du den Abstand deines Zeigers zum Ziel, aber der Browser zeichnet deinen Blick nicht auf."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
