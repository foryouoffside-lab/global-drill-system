import ZigZagPathPursuitClient from '@/app/drills/visual-tracking/zig-zag-path-pursuit/ZigZagPathPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/zig-zag-path-pursuit';
const title = "Blickfolge Übungen: Zickzack-Bahn | SkillDrills";
const description = "Blickfolge Übungen auf einer Zickzack-Bahn: Ein Ziel läuft in steilen Kehren auf und ab, von links nach rechts und zurück. Kostenlos im Browser, kein Augentest.";

export const metadata = {
  title,
  description,
  keywords: ["Blickfolge Übungen", "Zickzack Augenübung", "Blickverfolgung Zickzack", "Augenübung im Browser", "Tracking Übung kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/zig-zag-path-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Blickfolge Übungen: Zickzack-Bahn", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Blickfolge Übungen: Zickzack-Bahn",
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
  name: "Blickfolge Übungen: Zickzack-Bahn",
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
  name: "Blickfolge Übungen: Zickzack-Bahn",
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
  name: "So funktioniert die Zickzack-Blickfolge",
  description: "In vier Schritten einem Ziel auf einer Zickzack-Bahn mit den Augen folgen.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendeter Linie beginnen.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Haltung finden", text: "Bequem vor den Bildschirm setzen und den Kopf gerade halten.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Dem Zickzack folgen", text: "Das Ziel durch alle Kehren hin und zurück mit den Augen verfolgen.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Linie ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Was ist die Zickzack-Blickfolge?", a: "Ein Ziel läuft zwischen oberem (etwa 20 % der Höhe) und unterem Bereich (etwa 80 %) in 7 steilen Kehren vom linken zum rechten Rand und dann denselben Weg zurück. Du folgst ihm nur mit den Augen; klicken musst du nicht." },
  { q: "Was unterscheidet sie von der dreieckigen Blickverfolgung?", a: "Beim Dreieck läuft das Ziel immer in derselben Richtung über drei Ecken. Beim Zickzack folgen die steilen Kehren dicht aufeinander, und am Rand kehrt sich die ganze Laufrichtung um. Bei 1,0-fachem Tempo dauert ein Weg etwa 4,5 Sekunden." },
  { q: "Und der Unterschied zur vertikalen Blickverfolgung mit Stufen?", a: "Dort pendelt das Ziel nach links und rechts und wandert dabei nach unten. Hier pendelt es nach oben und unten und wandert nach rechts, jeder Abschnitt ist also überwiegend senkrecht." },
  { q: "Warum schießt der Blick an den Kehren über das Ziel hinaus?", a: "An einer Kehre ändert sich die Richtung schlagartig. Die gleichmäßige Folgebewegung kommt nicht mit, und die Augen korrigieren oft mit einem schnellen Blicksprung (de Brouwer et al., 2002). Tempo senken, Linie einblenden und die nächste Kehre vorausdenken." },
  { q: "Was passiert beim Ausblenden der Linie?", a: "Die Zickzackbahn verschwindet. Das Ziel bewegt sich genauso, aber du musst die nächste Kehre selbst vorhersehen." },
  { q: "Misst die Übung meine Augenbewegungen?", a: "Nein. Der Browser kann nicht erkennen, wohin du schaust. Er kennt nur die Position, an der das Ziel gezeichnet wird, und deine Einstellungen. Du musst weder klicken noch tippen; das Ergebnis ist ein Übungsprotokoll für dich selbst." },
  { q: "Gibt es eine Punktzahl oder Bewertung?", a: "Nein. Am Ende siehst du nur Dauer, Geschwindigkeitsfaktor, ob Zufallstempo aktiv war, und die Zahl deiner bisherigen Durchgänge (in diesem Browser gespeichert). Wenn du Zielverluste zählen willst, notiere sie selbst." },
  { q: "Welche Einstellungen gibt es?", a: "Dauer 30, 45, 60, 90 oder 120 Sekunden, Geschwindigkeit 0,5- bis 9,0-fach, Zielgröße 10 bis 50 px. Außerdem lassen sich die Linie (Zickzackbahn) ausblenden, Zufallstempo, Leuchtspur, Glow, Scanlines, heller oder dunkler Hintergrund und die Zielfarbe umschalten. Mit Esc beendest du den Durchgang jederzeit." },
  { q: "Verbessert das meine Sehkraft oder mein Aim?", a: "Das kann niemand garantieren. Die Übung ist ein Spiel, bei dem du ein bewegtes Ziel mit den Augen verfolgst. Sie ist kein Sehtest, keine Therapie und verspricht kein besseres Aim in Shootern. Bei Beschwerden mit den Augen wende dich an eine Augenärztin oder einen Augenarzt." },
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
  heading: "Blickfolge auf der Zickzack-Bahn: Anleitung",
  intro: [
    "Diese Blickfolge-Übung ist kostenlos im Browser: Ein Ziel läuft auf einer Zickzack-Bahn zwischen oberem und unterem Bildschirmbereich auf und ab und arbeitet sich dabei vom linken zum rechten Rand vor. Rechts angekommen, läuft es denselben Weg zurück. Die Bahn verbindet 8 Punkte mit 7 steilen Kehren.",
    "Nach dem Start läuft ein Countdown 3-2-1, danach bewegt sich das Ziel für die gewählte Dauer (30 bis 120 Sekunden, Standard 60). Du musst nichts klicken oder drücken, und es gibt keine Punktzahl. Bei 1,0-fachem Tempo dauert ein Weg etwa 4,5 Sekunden.",
    "Der Browser zeichnet nicht auf, wohin du schaust. Werte das Ergebnis deshalb nicht als Seh- oder Aufmerksamkeitstest, sondern als Übungsprotokoll für dich selbst.",
    "Vergleiche Durchgänge am selben Bildschirm und mit gleichem Abstand; Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie flüssig das Ziel wirkt (Woods et al., 2015). Bei Schmerzen, Schwindel, Übelkeit oder anhaltend verschwommenem Sehen brich ab."
  ],
  benchmarks: {
    title: "Übungsstufen zur Orientierung",
    headers: ["Stufe", "Einstellung", "Übungsziel"],
    rows: [
      ["1", "1,0-fach, Linie an", "Lage und Rhythmus der Kehren erfassen"],
      ["2", "1,0- bis 2,0-fach", "An den Kehren ohne Verzögerung folgen"],
      ["3", "ab 2,0-fach", "Auch bei schnellem Hin und Her am Ziel bleiben"],
      ["4", "Linie aus", "Die nächste Kehre vorhersehen"],
      ["5", "Zufallstempo", "Bei wechselnder Geschwindigkeit dranbleiben"]
    ],
    note: "Übungsstufen von SkillDrills zur Orientierung. Keine Sehtest-Normen, keine Nutzerstatistik, keine Perzentile.",
  },
  techniques: {
    title: "Tipps für die Übung",
    items: [
      { name: "Nicht mit dem Kopf nicken", desc: "Bei den großen Auf-und-ab-Bewegungen geht der Kopf leicht mit. Halte ihn gerade und folge nur mit den Augen.", tips: "Schultern und Nacken locker lassen." },
      { name: "Kehren vorausdenken", desc: "Kurz vor jeder Kehre schon an die Gegenrichtung denken.", tips: "Ziel verloren? Im nächsten Abschnitt wieder einsteigen." },
      { name: "Auf die Umkehr am Rand vorbereiten", desc: "Am linken und rechten Rand kehrt sich die ganze Laufrichtung um.", tips: "Kurz vor dem Rand an den Rückweg denken." },
      { name: "Kurz üben, dann Pause", desc: "Übe in Blöcken von 5 bis 10 Minuten, blinzle bewusst und schau zwischendurch in die Ferne. Länger ist nicht automatisch besser.", tips: "Bei Schmerzen oder Schwindel sofort aufhören." }
    ],
  },
  steps: [
    { title: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendeter Linie beginnen." },
    { title: "Haltung finden", text: "Bequem vor den Bildschirm setzen und den Kopf gerade halten." },
    { title: "Dem Zickzack folgen", text: "Das Ziel durch alle Kehren hin und zurück mit den Augen verfolgen." },
    { title: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Linie ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln." }
  ],
  audience: "Alle, die spielerisch üben möchten, einem Ziel durch schnelle Richtungswechsel mit den Augen zu folgen.",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'krauzlis2004', 'barnes2008', 'woods2015'),
};

export default function ZigZagPathPursuitDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ZigZagPathPursuitClient
        copy={{
          title: "Blickfolge Übungen: Zickzack-Bahn",
          subtitle: "Steile Kehren auf und ab",
          description: "Bei dieser Blickfolge-Übung läuft ein Ziel auf einer Zickzack-Bahn auf und ab, von links nach rechts und zurück. Der Browser zeichnet deinen Blick nicht auf; das Ergebnis ist ein Übungsprotokoll, kein Test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
