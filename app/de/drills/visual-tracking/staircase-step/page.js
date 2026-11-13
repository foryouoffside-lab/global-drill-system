import StaircaseStepClient from '@/app/drills/visual-tracking/staircase-step/StaircaseStepClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/staircase-step';
const title = "Vertikale Blickverfolgung bei Höhenwechsel | SkillDrills";
const description = "Vertikale Blickverfolgung: Ein Ziel läuft im Zickzack Stufe für Stufe von oben nach unten und wieder hinauf. Kostenlose Browserübung mit einstellbarem Tempo.";

export const metadata = {
  title,
  description,
  keywords: ["vertikale Blickverfolgung", "Ziel auf und ab verfolgen", "Augenübung im Browser", "Blickverfolgung Stufen", "Tracking Übung kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/staircase-step') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'de_DE', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Startseite", item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: "Blickverfolgung & Augentraining", item: 'https://skilldrills.online/de/drills/visual-tracking' },
    { '@type': 'ListItem', position: 3, name: "Vertikale Blickverfolgung bei Höhenwechsel", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Vertikale Blickverfolgung bei Höhenwechsel",
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
  name: "Vertikale Blickverfolgung bei Höhenwechsel",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Aktueller Browser mit HTML5-Canvas-Unterstützung",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'de',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: "Vertikale Blickverfolgung bei Höhenwechsel",
  url,
  description,
  genre: ['Casual Game', 'Educational Game'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'de',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "So funktioniert die vertikale Blickverfolgung",
  description: "In vier Schritten ein Ziel verfolgen, das stufenweise nach unten und wieder nach oben läuft.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendeter Linie beginnen.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Haltung finden", text: "Bequem vor den Bildschirm setzen und den Kopf gerade halten.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Nur mit den Augen folgen", text: "Dem Ziel durch die Zickzack-Stufen nach unten und wieder hinauf folgen.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Linie ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Was ist diese vertikale Blickverfolgung?", a: "Ein Ziel pendelt im Zickzack nach links und rechts und wandert dabei stufenweise von oben (etwa 15 % der Höhe) nach unten (etwa 85 %). Unten kehrt es um und läuft denselben Weg zurück. Du verfolgst es nur mit den Augen; klicken musst du nicht." },
  { q: "Wie sieht die Bahn genau aus?", a: "Eine Zickzacklinie durch 8 Punkte mit 7 Richtungswechseln, die sich Schritt für Schritt nach unten bewegt. Bei 1,0-fachem Tempo dauert ein Weg etwa 4,5 Sekunden; höhere Faktoren machen das Ziel entsprechend schneller." },
  { q: "Sind vertikale Bewegungen schwerer zu verfolgen?", a: "Studien zeigen, dass dieselben Personen senkrechte Bewegungen oft ungenauer verfolgen als waagerechte (Rottach et al., 1996). Die Übung misst das nicht, aber du kannst selbst vergleichen, ob dir der Weg nach unten oder nach oben leichter fällt." },
  { q: "Warum verliere ich das Ziel an den Ecken?", a: "An den Ecken ändert sich die Richtung schlagartig, und die Augen hinken kurz hinterher. Folgebewegungen setzen erst mit einer kleinen Verzögerung nach Bewegungsbeginn ein (Lisberger, 2010). Tempo senken, Linie einblenden und die nächste Ecke vorausdenken." },
  { q: "Was passiert beim Ausblenden der Linie?", a: "Die Zickzackbahn verschwindet. Das Ziel bewegt sich genauso, aber du musst den nächsten Wendepunkt selbst vorhersehen." },
  { q: "Misst die Übung meine Augenbewegungen?", a: "Nein. Der Browser kann nicht erkennen, wohin du schaust. Er kennt nur die Position, an der das Ziel gezeichnet wird, deine Einstellungen und die Pointer-Position. Du musst weder klicken noch tippen; das Ergebnis ist ein Übungsprotokoll für dich selbst." },
  { q: "Gibt es eine Punktzahl oder Bewertung?", a: "Eine Bewertung gibt es nicht. Am Ende siehst du den Zeitanteil mit dem Pointer auf dem Ziel, den mittleren und den RMS-Abstand des Pointers zur Zielmitte, Dauer, Geschwindigkeitsfaktor und die Zahl deiner bisherigen Durchgänge (in diesem Browser gespeichert). Gemessen wird der Pointer, nicht deine Augen. Wenn du Zielverluste zählen willst, notiere sie selbst." },
  { q: "Welche Einstellungen gibt es?", a: "Dauer 30, 45, 60, 90 oder 120 Sekunden, Geschwindigkeit 0,5- bis 9,0-fach, Zielgröße 10 bis 50 px. Außerdem lassen sich die Linie (Zickzackbahn) ausblenden, Zufallstempo, Leuchtspur, Glow, Scanlines, heller oder dunkler Hintergrund und die Zielfarbe umschalten. Mit Esc beendest du den Durchgang jederzeit." },
  { q: "Verbessert das meine Sehkraft oder mein Aim?", a: "Das kann niemand garantieren. Die Übung ist ein Spiel, bei dem du ein bewegtes Ziel mit den Augen verfolgst, und verspricht kein besseres Aim in Shootern. Vergleiche deine Sessions auf demselben Bildschirm mit denselben Einstellungen." },
  { q: "Beeinflusst mein Bildschirm das Ergebnis?", a: "Ja. Bildwiederholrate, Helligkeit, Kontrast, Bildschirmgröße und Abstand verändern, wie das Ziel aussieht (Woods et al., 2015). Vergleiche deshalb nur Durchgänge mit gleichem Bildschirm, Browser und gleichen Einstellungen." },
  { q: "Wie lange sollte ich üben?", a: "Mehrere kurze Durchgänge von etwa 60 Sekunden, insgesamt 5 bis 10 Minuten, mit Pausen dazwischen. Hör sofort auf bei müden, trockenen oder schmerzenden Augen, Schwindel, Übelkeit oder Kopfschmerzen." }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guide = {
  heading: "Vertikale Blickverfolgung: Anleitung",
  intro: [
    "Bei dieser vertikalen Blickverfolgung folgst du mit den Augen einem Ziel, das im Zickzack von links nach rechts pendelt und dabei Stufe für Stufe vom oberen zum unteren Bildschirmrand wandert. Unten angekommen, läuft es denselben Weg wieder hinauf. Die Bahn verbindet 8 Punkte und ist etwa 60 % der Bildschirmbreite breit.",
    "Nach dem Start läuft ein Countdown 3-2-1, danach bewegt sich das Ziel für die gewählte Dauer (30 bis 120 Sekunden, Standard 60). Du musst nichts klicken oder drücken; am Ende siehst du den Abstand des Pointers zum Ziel, nicht die Position deiner Augen. Bei 1,0-fachem Tempo dauert ein Weg nach unten etwa 4,5 Sekunden.",
    "Der Browser zeichnet nicht auf, wohin du schaust. Werte das Ergebnis deshalb nicht als Seh- oder Aufmerksamkeitstest, sondern als Übungsprotokoll für dich selbst.",
    "Vergleiche Durchgänge am selben Bildschirm und mit gleichem Abstand; Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie flüssig das Ziel wirkt (Woods et al., 2015). Bei Schmerzen, Schwindel, Übelkeit oder anhaltend verschwommenem Sehen brich ab."
  ],
  benchmarks: {
    title: "Übungsstufen zur Orientierung",
    headers: ["Stufe", "Einstellung", "Übungsziel"],
    rows: [
      ["1", "1,0-fach, Linie an", "Den Weg nach unten und oben kennenlernen"],
      ["2", "1,0- bis 2,0-fach", "An den Wendepunkten ohne Verzögerung folgen"],
      ["3", "ab 2,0-fach", "Auch bei schnellem Wechsel am Ziel bleiben"],
      ["4", "Linie aus", "Den nächsten Wendepunkt vorhersehen"],
      ["5", "Zufallstempo", "Bei wechselnder Geschwindigkeit dranbleiben"]
    ],
    note: "Übungsstufen von SkillDrills zur Orientierung. Keine offiziellen Normen, keine Nutzerstatistik, keine Perzentile.",
  },
  techniques: {
    title: "Tipps für die Übung",
    items: [
      { name: "Kopf ruhig halten", desc: "Wenn Kopf oder Nacken mitgehen, übst du kaum noch die Augen. Halte den Kopf gerade und folge dem Ziel nur mit den Augen.", tips: "Schultern und Nacken locker lassen." },
      { name: "Wendepunkte vorausdenken", desc: "An jeder Ecke der Bahn ändert das Ziel schlagartig die Richtung. Denk kurz vorher an die neue Richtung.", tips: "Ziel verloren? Nicht hinterherjagen, an der nächsten Ecke wieder einsteigen." },
      { name: "Abwärts und aufwärts vergleichen", desc: "Achte darauf, ob dir der Weg nach unten oder nach oben leichter fällt.", tips: "Beobachtungen notieren und mit gleichen Einstellungen vergleichen." },
      { name: "Kurz üben, dann Pause", desc: "Übe in Blöcken von 5 bis 10 Minuten, blinzle bewusst und schau zwischendurch in die Ferne. Länger ist nicht automatisch besser.", tips: "Bei Schmerzen oder Schwindel sofort aufhören." }
    ],
  },
  steps: [
    { title: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendeter Linie beginnen." },
    { title: "Haltung finden", text: "Bequem vor den Bildschirm setzen und den Kopf gerade halten." },
    { title: "Nur mit den Augen folgen", text: "Dem Ziel durch die Zickzack-Stufen nach unten und wieder hinauf folgen." },
    { title: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Linie ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln." }
  ],
  audience: "Alle, die spielerisch üben möchten, ein Ziel bei Richtungs- und Höhenwechseln mit den Augen zu verfolgen.",
  faqs,
  sources: pickSources('rottach1996', 'collewijn1984', 'ke2013', 'buttner1997', 'lisberger2010', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/split-screen-tracking", label: "Split-Screen Augentraining" },
    { href: "/de/drills/visual-tracking/sine-wave-pursuit", label: "Sinuswellen-Augentraining" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Chaotische Blickverfolgung" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Prädiktives Tracking Training" },
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Gleichmäßige Blickfolge-Übung" }
  ],
};

export default function StaircaseStepDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StaircaseStepClient
        copy={{
          title: "Vertikale Blickverfolgung bei Höhenwechsel",
          subtitle: "Stufenweise abwärts und wieder hinauf",
          description: "Bei dieser vertikalen Blickverfolgung läuft ein Ziel im Zickzack Stufe für Stufe nach unten und wieder nach oben. Der Browser zeichnet deinen Blick nicht auf; das Ergebnis ist ein Übungsprotokoll, kein Test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
