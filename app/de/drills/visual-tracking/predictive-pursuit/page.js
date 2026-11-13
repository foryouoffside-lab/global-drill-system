import PredictivePursuitClient from '@/app/drills/visual-tracking/predictive-pursuit/PredictivePursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/predictive-pursuit';
const title = "Prädiktive Blickverfolgung | SkillDrills";
const description = "Kostenlose Augenübung: Das Ziel gleitet etwa alle 2,2 s zu einem neuen Punkt und bremst ab. Ohne Ziellinie schätzt du den Haltepunkt nur aus der Bewegung.";

export const metadata = {
  title,
  description,
  keywords: ["prädiktive Blickverfolgung", "Blickfolge vorhersagen", "Zielpunkt vorhersehen", "Augenübung Browser", "Augentraining kostenlos", "Augenbewegung üben"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/predictive-pursuit') },
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
    { '@type': 'ListItem', position: 4, name: "Prädiktive Blickverfolgung", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Prädiktive Blickverfolgung",
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
  name: "So übst du prädiktive Blickverfolgung",
  description: "In vier Schritten einem Ziel zu seinem neuen Haltepunkt folgen und diesen vorhersehen.",
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
    "name": "Mit Ziellinie starten",
    "text": "Lass zuerst die Linie zwischen Ziel und Haltepunkt sichtbar und folge dem Ziel, bis es stehen bleibt."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Haltepunkt vorhersehen",
    "text": "Schalte Hide Line ein und schätze allein aus Startrichtung und Tempo, wo das Ziel anhalten wird."
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
    "q": "Wie bewegt sich das Ziel bei der prädiktiven Blickverfolgung?",
    "a": "Bei Tempo 1,0 wird etwa alle 2,2 Sekunden ein zufälliger Punkt auf dem Bildschirm zum neuen Ziel. Das Ziel startet zügig dorthin, wird immer langsamer, kommt innerhalb von etwa 1,5 Sekunden zum Stehen und wartet auf den nächsten Punkt. Es gibt keine Verdeckung und kein Verschwinden. Eine reine Blickübung im Browser, kein Sehtest."
  },
  {
    "q": "Was genau wird vorhergesagt?",
    "a": "Der Punkt, an dem das Ziel anhält. Standardmäßig verbindet eine Linie das Ziel mit diesem Punkt, er ist also sichtbar. Mit Hide Line verschwindet die Linie, und du schätzt den Haltepunkt aus Startrichtung und Abbremsen."
  },
  {
    "q": "Was ändern Tempo und Random Speed?",
    "a": "Höheres Tempo beschleunigt sowohl die Bewegung als auch den Wechsel der Zielpunkte. Mit Random Speed schwankt das Tempo laufend, und die Abstände bis zum nächsten Zielpunkt werden unregelmäßig."
  },
  {
    "q": "Misst die Übung meine Augenbewegungen oder einen Score?",
    "a": "Nein. Der Browser weiß nicht, wohin du schaust, und es gibt weder Klicks noch Trefferwertung. Eine Note gibt es nicht. Folgst du dem Ziel mit dem Pointer, zeigt das Ende, wie lange der Pointer auf dem Ziel lag und wie weit er im Mittel von der Zielmitte entfernt war; gemessen wird der Pointer, nicht deine Augen. Ob dein Blick wie geplant bleibt, kontrollierst du selbst."
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
  "heading": "Prädiktive Blickverfolgung – Anleitung",
  "intro": [
    "Bei der prädiktiven Blickverfolgung folgst du einem Ziel, das zu einem neuen Punkt gleitet und dabei abbremst, und versuchst vorherzusehen, wo es stehen bleibt. Bei Tempo 1,0 wird etwa alle 2,2 Sekunden ein zufälliger Zielpunkt gewählt; ohne Ziellinie musst du ihn allein aus der Bewegung erschließen.",
    "Die glatte Augenfolgebewegung setzt erst kurz nach Bewegungsbeginn ein; Erwartung kann diese Verzögerung verringern (Kowler, 1989; Barnes, 2008). Die Übung wiederholt Situationen, in denen solche Erwartung gefragt ist.",
    "Der Browser kennt nur die Position, an der das Ziel gezeichnet wird, und deine Einstellungen – nicht, wohin deine Augen tatsächlich blicken. Angezeigt wird nur der Abstand des Pointers zum Ziel, keine Messung der Augen. Vergleiche deshalb auch dein Gefühl von Ruhe und Konzentration bei gleichem Bildschirm, Abstand und gleichen Einstellungen. Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie die Bewegung aussieht (Woods et al., 2015)."
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
        "Tempo 1,0, Ziellinie sichtbar, Bewegung und Halt folgen"
      ],
      [
        "Stufe 2",
        "Den Haltepunkt vor dem Ziel anschauen"
      ],
      [
        "Stufe 3",
        "Hide Line an: nur aus dem Start vorhersagen"
      ],
      [
        "Stufe 4",
        "Tempo oder Random Speed einzeln dazunehmen"
      ]
    ],
    "note": "Übungsstufen von SkillDrills zur Orientierung – keine Testnormen, Nutzerstatistiken oder Perzentile."
  },
  "techniques": {
    "title": "Tipps zur Ausführung",
    "items": [
      {
        "name": "Den Start genau beobachten",
        "desc": "Achte auf Richtung und Tempo im Moment des Losfahrens. Aus dem Abbremsen lässt sich der Haltepunkt abschätzen.",
        "tips": "Ist es ohne Linie zu schwer, blende sie wieder ein und lerne das Muster neu."
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
    "Sobald das Ziel losgleitet, schätze aus Richtung und Abbremsen den Haltepunkt und folge ihm dorthin.",
    "Erhöhe danach das Tempo oder schalte Linie ausblenden bzw. Zufallstempo einzeln zu."
  ],
  "audience": "Alle, die locker üben möchten, beim Verfolgen eines Ziels dessen Haltepunkt vorherzusehen."
},
  faqs,
  sources: pickSources('barnes2008', 'bennett2003', 'kowler1989', 'krauzlis2004', 'robinson1965', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Konstantes langsames Blickfolgetraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung bei Richtungswechseln" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Blickverfolgung bei Ausweichbewegungen" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Blickstabilität bei Nachbildern" },
    { href: "/de/drills/visual-tracking/infinity-pursuit", label: "Augentraining mit einer liegenden Acht" },
    { href: "/de/drills/visual-tracking/momentum-teleport-pursuit", label: "Blickverfolgung bei plötzlichem Sprung" }
  ],
};

export default function GermanPredictivePursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PredictivePursuitClient copy={{"title": "Prädiktive Blickverfolgung", "subtitle": "Vorhersehen, wo das Ziel zum Stehen kommt", "description": "Prädiktive Blickverfolgung: Etwa alle 2,2 Sekunden (Tempo 1,0) gleitet das Ziel zu einem neuen Punkt und bremst ab. Sieh vorher, wo es anhält; Hide Line blendet die Ziellinie aus. Kein Klicken nötig; am Ende siehst du den Abstand des Pointers zum Ziel, deinen Blick zeichnet der Browser nicht auf."}} />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
