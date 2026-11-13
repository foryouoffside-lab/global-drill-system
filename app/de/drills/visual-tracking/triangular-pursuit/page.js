import TriangularPursuitClient from '@/app/drills/visual-tracking/triangular-pursuit/TriangularPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/triangular-pursuit';
const title = "Dreieckige Blickverfolgung | SkillDrills";
const description = "Dreieckige Blickverfolgung: Ein Ziel umrundet ein Dreieck mit drei scharfen Ecken, immer in derselben Richtung. Kostenlose Browserübung mit einstellbarem Tempo.";

export const metadata = {
  title,
  description,
  keywords: ["dreieckige Blickverfolgung", "Dreieck Augenübung", "Blickverfolgung Übung", "Augenübung im Browser", "Tracking Übung kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/triangular-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Dreieckige Blickverfolgung", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Dreieckige Blickverfolgung",
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
  name: "Dreieckige Blickverfolgung",
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
  name: "Dreieckige Blickverfolgung",
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
  name: "So funktioniert die dreieckige Blickverfolgung",
  description: "In vier Schritten einem Ziel auf einer Dreiecksbahn mit den Augen folgen.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendeter Linie beginnen.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Haltung finden", text: "Bequem vor den Bildschirm setzen und den Kopf gerade halten.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Dem Dreieck folgen", text: "Das Ziel über alle drei Ecken hinweg mit den Augen verfolgen.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Linie ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Was ist die dreieckige Blickverfolgung?", a: "Ein Ziel umrundet immer wieder ein Dreieck mit den Ecken oben Mitte, rechts unten und links unten, stets in derselben Richtung. Du verfolgst die zwei schrägen Seiten und die waagerechte Grundseite mit den Augen und bleibst an jeder Ecke dran. Klicken musst du nicht." },
  { q: "Ist das Tempo konstant?", a: "Jede Seite dauert gleich lang (bei 1,0-fach etwa 1,5 Sekunden), daher ändert sich das Tempo je nach Seitenlänge leicht. Auf einem Breitbildschirm ist die Grundseite am längsten und das Ziel dort am schnellsten. Geschwindigkeitsfaktor und Zufallstempo verändern es zusätzlich." },
  { q: "Warum hinke ich an den Ecken hinterher oder schieße darüber hinaus?", a: "An einer Ecke ändert sich die Richtung schlagartig. Die gleichmäßige Folgebewegung kommt da nicht mit, und die Augen holen oft mit einem schnellen Blicksprung (Aufholsakkade) auf (de Brouwer et al., 2002). Tempo senken und kurz vor der Ecke an die neue Richtung denken." },
  { q: "Was passiert beim Ausblenden der Linie?", a: "Der Dreiecksumriss verschwindet. Die Bahn bleibt gleich, aber du musst dir die Lage der Ecken selbst merken." },
  { q: "Misst die Übung meine Augenbewegungen?", a: "Nein. Der Browser kann nicht erkennen, wohin du schaust. Er kennt nur die Position, an der das Ziel gezeichnet wird, deine Einstellungen und die Pointer-Position. Du musst weder klicken noch tippen; das Ergebnis ist ein Übungsprotokoll für dich selbst." },
  { q: "Gibt es eine Punktzahl oder Bewertung?", a: "Eine Bewertung gibt es nicht. Am Ende siehst du den Zeitanteil mit dem Pointer auf dem Ziel, den mittleren und den RMS-Abstand des Pointers zur Zielmitte, Dauer, Geschwindigkeitsfaktor und die Zahl deiner bisherigen Durchgänge (in diesem Browser gespeichert). Gemessen wird der Pointer, nicht deine Augen. Wenn du Zielverluste zählen willst, notiere sie selbst." },
  { q: "Welche Einstellungen gibt es?", a: "Dauer 30, 45, 60, 90 oder 120 Sekunden, Geschwindigkeit 0,5- bis 9,0-fach, Zielgröße 10 bis 50 px. Außerdem lassen sich die Linie (Dreiecksumriss) ausblenden, Zufallstempo, Leuchtspur, Glow, Scanlines, heller oder dunkler Hintergrund und die Zielfarbe umschalten. Mit Esc beendest du den Durchgang jederzeit." },
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
  heading: "Dreieckige Blickverfolgung: Anleitung",
  intro: [
    "Die dreieckige Blickverfolgung ist eine kostenlose Browserübung: Ein Ziel läuft immer wieder ein Dreieck ab, von oben Mitte nach rechts unten, nach links unten und zurück nach oben. Gerade Strecken wechseln sich mit scharfen Richtungswechseln an den Ecken ab.",
    "Jede Seite dauert gleich lang (bei 1,0-fachem Tempo etwa 1,5 Sekunden); auf der längeren Grundseite ist das Ziel deshalb etwas schneller. Nach dem Start läuft ein Countdown 3-2-1, danach bewegt sich das Ziel für die gewählte Dauer (30 bis 120 Sekunden, Standard 60). Du musst nichts klicken oder drücken; am Ende siehst du den Abstand des Pointers zum Ziel, nicht die Position deiner Augen.",
    "Der Browser zeichnet nicht auf, wohin du schaust. Werte das Ergebnis deshalb nicht als Seh- oder Aufmerksamkeitstest, sondern als Übungsprotokoll für dich selbst.",
    "Vergleiche Durchgänge am selben Bildschirm und mit gleichem Abstand; Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie flüssig das Ziel wirkt (Woods et al., 2015). Bei Schmerzen, Schwindel, Übelkeit oder anhaltend verschwommenem Sehen brich ab."
  ],
  benchmarks: {
    title: "Übungsstufen zur Orientierung",
    headers: ["Stufe", "Einstellung", "Übungsziel"],
    rows: [
      ["1", "1,0-fach, Linie an", "Ecken und Umlaufrichtung kennenlernen"],
      ["2", "1,0- bis 2,0-fach", "An den Ecken ohne Verzögerung umlenken"],
      ["3", "ab 2,0-fach", "Auch bei schnellem Umlauf am Ziel bleiben"],
      ["4", "Linie aus", "Die nächste Ecke ohne Umriss vorhersehen"],
      ["5", "Zufallstempo", "Bei wechselnder Geschwindigkeit dranbleiben"]
    ],
    note: "Übungsstufen von SkillDrills zur Orientierung. Keine offiziellen Normen, keine Nutzerstatistik, keine Perzentile.",
  },
  techniques: {
    title: "Tipps für die Übung",
    items: [
      { name: "Auf den Strecken ruhig folgen", desc: "Auf den geraden Abschnitten die Mitte des Ziels ansehen und die Augen gleichmäßig mitführen.", tips: "Kopf und Nacken bleiben still." },
      { name: "Vor der Ecke an die neue Richtung denken", desc: "Wer die nächste Seite schon im Kopf hat, hinkt an der Ecke weniger hinterher und schießt seltener darüber hinaus.", tips: "Ziel verloren? An der nächsten Ecke wieder einsteigen." },
      { name: "Auf die schnelle Grundseite einstellen", desc: "Die Grundseite ist die längste Strecke und wird deshalb am schnellsten durchlaufen.", tips: "Erst Zufallstempo zuschalten, wenn der Tempowechsel vertraut ist." },
      { name: "Kurz üben, dann Pause", desc: "Übe in Blöcken von 5 bis 10 Minuten, blinzle bewusst und schau zwischendurch in die Ferne. Länger ist nicht automatisch besser.", tips: "Bei Schmerzen oder Schwindel sofort aufhören." }
    ],
  },
  steps: [
    { title: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendeter Linie beginnen." },
    { title: "Haltung finden", text: "Bequem vor den Bildschirm setzen und den Kopf gerade halten." },
    { title: "Dem Dreieck folgen", text: "Das Ziel über alle drei Ecken hinweg mit den Augen verfolgen." },
    { title: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Linie ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln." }
  ],
  audience: "Alle, die spielerisch üben möchten, einem Ziel über gerade Strecken und scharfe Ecken mit den Augen zu folgen.",
  faqs,
  sources: pickSources('debrouwer2002', 'heinen2005', 'orbandexivry2007', 'bennett2006', 'barnes2008', 'woods2015'),
};

export default function TriangularPursuitDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <TriangularPursuitClient
        copy={{
          title: "Dreieckige Blickverfolgung",
          subtitle: "Gerade Strecken und scharfe Ecken",
          description: "Bei der dreieckigen Blickverfolgung folgst du einem Ziel, das ein Dreieck umrundet. Der Browser zeichnet deinen Blick nicht auf; das Ergebnis ist ein Übungsprotokoll, kein Test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
