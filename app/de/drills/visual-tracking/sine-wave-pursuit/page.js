import SineWavePursuitClient from '@/app/drills/visual-tracking/sine-wave-pursuit/SineWavePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/sine-wave-pursuit';
const title = "Sinuswellen-Blickverfolgung | SkillDrills";
const description = "Kostenlose Augenübung: Folge einem Ziel, das auf einer festen Sinuskurve von links nach rechts und zurück pendelt und dabei auf- und absteigt. Tempo einstellbar.";

export const metadata = {
  title,
  description,
  keywords: ["Sinuswellen-Blickverfolgung", "Sinuskurve Augenübung", "Wellenbahn verfolgen", "Augenübung Browser", "Augenfolgebewegung üben", "Augentraining kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/sine-wave-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Sinuswellen-Blickverfolgung", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Sinuswellen-Blickverfolgung",
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
  name: "So übst du die Sinuswellen-Blickverfolgung",
  description: "In vier Schritten einem Ziel folgen, das auf einer Wellenbahn hin- und herläuft.",
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
    "name": "Bahn ansehen",
    "text": "Lass die Kurve zu Beginn sichtbar und präge dir die Wellenbahn ein, auf der das Ziel läuft."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Ruhig folgen",
    "text": "Folge dem Ziel ohne Unterbrechung, während es auf der Kurve auf- und absteigt und an den Rändern umkehrt."
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
    "q": "Wie bewegt sich das Ziel bei der Sinuswellen-Blickverfolgung?",
    "a": "Das Ziel pendelt mit gleichbleibendem Seitwärtstempo zwischen etwa 5 % und 95 % der Bildschirmbreite (bei Tempo 1,0 rund 220 Pixel pro Sekunde) und folgt dabei einer festen Sinuskurve mit einer Ausschlaghöhe von etwa 28 % der Bildschirmhöhe. An den Rändern kehrt es um und läuft dieselbe Kurve zurück. Eine reine Blickübung im Browser, kein Sehtest."
  },
  {
    "q": "Warum ändert sich das Tempo nach oben und unten ständig?",
    "a": "Das Seitwärtstempo bleibt gleich, aber die Steigung der Kurve ändert sich. In der Mitte der Welle ist die Auf- und Abbewegung am schnellsten, an Wellenberg und -tal scheint sie kurz stillzustehen."
  },
  {
    "q": "Was bewirken Hide Line und Random Speed?",
    "a": "Hide Line blendet die Kurve aus; du folgst dann aus dem Gedächtnis oder nur der Bewegung. Random Speed lässt das Tempo laufend schwanken. Die Bahn selbst bleibt gleich."
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
  "heading": "Sinuswellen-Blickverfolgung – Anleitung",
  "intro": [
    "Bei der Sinuswellen-Blickverfolgung folgst du mit den Augen einem Ziel, das auf einer festen Sinuskurve von links nach rechts und zurück pendelt und dabei auf- und absteigt. Das Seitwärtstempo ist konstant, an den Rändern kehrt das Ziel um.",
    "Langsamen Zielen folgt die glatte Augenfolgebewegung fast im gleichen Tempo, bei schnelleren fällt der Blick leichter zurück (Robinson, 1965). Hier variierst du das Tempo und folgst der wechselnden Bewegung an Wellenberg und Wellenmitte.",
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
        "Tempo 1,0, Kurve sichtbar, ohne Abreißen folgen"
      ],
      [
        "Stufe 2",
        "Auch beim Umkehren an den Rändern dranbleiben"
      ],
      [
        "Stufe 3",
        "Tempo erhöhen, schnelle Wellenmitte verfolgen"
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
        "name": "Den Rhythmus der Welle nutzen",
        "desc": "Am Wellenberg wird es kurz langsam, in der Mitte schnell. Wer diesen Rhythmus kennt, folgt gleichmäßiger.",
        "tips": "Hängst du hinterher, senke das Tempo."
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
    "Folge dem Ziel ohne Unterbrechung, während es auf der Wellenbahn hin- und herläuft.",
    "Erhöhe danach das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln zu."
  ],
  "audience": "Alle, die locker üben möchten, einem Ziel auf einer gleichmäßigen Kurve mit den Augen zu folgen."
},
  faqs,
  sources: pickSources('stark1962', 'robinson1965', 'rashbass1961', 'bahill1980', 'barnes2008', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Konstantes langsames Blickfolgetraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung bei Richtungswechseln" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Blickverfolgung bei Ausweichbewegungen" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Blickstabilität bei Nachbildern" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Augentraining mit einer liegenden Acht" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Prädiktive Blickverfolgung bei Verdeckung" }
  ],
};

export default function GermanSineWavePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SineWavePursuitClient copy={{"title": "Sinuswellen-Blickverfolgung", "subtitle": "Einem Ziel auf einer Wellenbahn folgen", "description": "Sinuswellen-Blickverfolgung: Das Ziel pendelt von links nach rechts und zurück und steigt dabei auf einer festen Wellenbahn auf und ab. Hide Line blendet die Kurve aus. Kein Klicken, kein Score; der Browser zeichnet deinen Blick nicht auf."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
