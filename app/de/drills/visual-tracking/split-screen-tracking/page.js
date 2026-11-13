import SplitScreenTrackingClient from '@/app/drills/visual-tracking/split-screen-tracking/SplitScreenTrackingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/split-screen-tracking';
const title = "Geteiltes Tracking: zwei Ziele gleichzeitig | SkillDrills";
const description = "Geteiltes Tracking: Verfolge zwei Ziele gleichzeitig, links läuft eines auf und ab, rechts eines hin und her. Kostenlose Browserübung mit einstellbarem Tempo.";

export const metadata = {
  title,
  description,
  keywords: ["geteiltes Tracking", "zwei Ziele gleichzeitig verfolgen", "Blickverfolgung zwei Ziele", "Augenübung im Browser", "Aufmerksamkeit aufteilen", "Tracking Übung kostenlos"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/split-screen-tracking') },
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
    { '@type': 'ListItem', position: 3, name: "Geteiltes Tracking: zwei Ziele gleichzeitig", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Geteiltes Tracking: zwei Ziele gleichzeitig",
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
  name: "Geteiltes Tracking: zwei Ziele gleichzeitig",
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
  name: "Geteiltes Tracking: zwei Ziele gleichzeitig",
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
  name: "So funktioniert geteiltes Tracking",
  description: "In vier Schritten zwei getrennt bewegte Ziele gleichzeitig mit den Augen verfolgen.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Einstellungen wählen", text: "Dauer, Tempo und Zielgröße auswählen. Für den Einstieg eignen sich 60 Sekunden, 1,0-fach und eingeblendete Hilfslinien.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Blick zur Mitte", text: "Bequem vor den Bildschirm setzen, Schultern locker, Blick in die Nähe der Bildschirmmitte.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Beide Ziele verfolgen", text: "Das linke Ziel (auf und ab) und das rechte Ziel (hin und her) gleichzeitig im Blick behalten.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Hilfslinien ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Was ist geteiltes Tracking?", a: "Eine kostenlose Browserübung mit geteiltem Bildschirm: Links läuft ein Ziel auf und ab, rechts eines hin und her auf mittlerer Höhe. Du versuchst, beide gleichzeitig mit den Augen zu verfolgen, ohne eines zu verlieren. Klicken musst du nicht." },
  { q: "Kann man zwei Ziele gleichzeitig ansehen?", a: "Scharf fixieren kann das Auge immer nur einen Punkt. Du kannst den Blick in der Mitte lassen und beide Seiten aus dem Augenwinkel wahrnehmen oder zwischen den Zielen hin und her schauen; was besser klappt, ist individuell. Zur Verfolgung mehrerer bewegter Objekte gibt es Forschung (Pylyshyn & Storm, 1988; Alvarez & Cavanagh, 2005), diese Übung bildet solche Experimente aber nicht nach und misst nichts davon." },
  { q: "Warum kehren die beiden Ziele nicht gleichzeitig um?", a: "Das linke Ziel läuft senkrecht, das rechte waagerecht, und beide Bahnen sind unterschiedlich lang, bei gleichem Tempo. Dadurch laufen zwei getrennte Rhythmen, und wer sich auf einen einstellt, verliert leicht den anderen." },
  { q: "Was passiert beim Ausblenden der Hilfslinien?", a: "Die Trennlinie in der Mitte und die zwei schwachen Bewegungsachsen verschwinden. Die Bewegung der Ziele bleibt gleich, aber ohne Orientierung verliert man sie leichter. Erst ausprobieren, wenn die Grundversion sicher klappt." },
  { q: "Ich verliere immer dasselbe Ziel. Was tun?", a: "Tempo senken, Hilfslinien einblenden und bewusst auf die schwächere Seite achten. Die Übung speichert nicht, welches Ziel du verlierst; notiere es selbst und vergleiche mit denselben Einstellungen." },
  { q: "Misst die Übung meine Augenbewegungen?", a: "Nein. Der Browser kann nicht erkennen, wohin du schaust. Er kennt nur die Position, an der das Ziel gezeichnet wird, deine Einstellungen und die Pointer-Position. Du musst weder klicken noch tippen; das Ergebnis ist ein Übungsprotokoll für dich selbst." },
  { q: "Gibt es eine Punktzahl oder Bewertung?", a: "Eine Bewertung gibt es nicht. Am Ende siehst du den Zeitanteil mit dem Pointer auf dem Ziel, den mittleren und den RMS-Abstand des Pointers zur Zielmitte, Dauer, Geschwindigkeitsfaktor und die Zahl deiner bisherigen Durchgänge (in diesem Browser gespeichert). Gemessen wird der Pointer, nicht deine Augen. Wenn du Zielverluste zählen willst, notiere sie selbst." },
  { q: "Welche Einstellungen gibt es?", a: "Dauer 30, 45, 60, 90 oder 120 Sekunden, Geschwindigkeit 0,5- bis 9,0-fach, Zielgröße 10 bis 50 px. Außerdem lassen sich die Hilfslinien (Trennlinie und Bewegungsachsen) ausblenden, Zufallstempo, Leuchtspur, Glow, Scanlines, heller oder dunkler Hintergrund und die Zielfarbe umschalten. Mit Esc beendest du den Durchgang jederzeit." },
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
  heading: "Geteiltes Tracking: Anleitung",
  intro: [
    "Geteiltes Tracking ist eine kostenlose Browserübung, bei der du zwei Ziele gleichzeitig mit den Augen verfolgst. Der Bildschirm ist in der Mitte geteilt: Links läuft ein Ziel senkrecht auf und ab, rechts läuft ein zweites waagerecht auf mittlerer Höhe hin und her. Beide prallen an den Enden ihrer Bahn ab.",
    "Nach dem Start läuft ein Countdown 3-2-1, danach bewegt sich das Ziel für die gewählte Dauer (30 bis 120 Sekunden, Standard 60). Du musst nichts klicken oder drücken; am Ende siehst du den Abstand des Pointers zum Ziel, nicht die Position deiner Augen. Mit Tempo, Zielgröße, Hilfslinien und Zufallstempo stellst du den Schwierigkeitsgrad ein.",
    "Der Browser zeichnet nicht auf, wohin du schaust. Werte das Ergebnis deshalb nicht als Seh- oder Aufmerksamkeitstest, sondern als Übungsprotokoll für dich selbst.",
    "Vergleiche Durchgänge am selben Bildschirm und mit gleichem Abstand; Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie flüssig das Ziel wirkt (Woods et al., 2015). Bei Schmerzen, Schwindel, Übelkeit oder anhaltend verschwommenem Sehen brich ab."
  ],
  benchmarks: {
    title: "Übungsstufen zur Orientierung",
    headers: ["Stufe", "Einstellung", "Übungsziel"],
    rows: [
      ["1", "1,0-fach, Hilfslinien an", "Den Rhythmus beider Ziele erfassen"],
      ["2", "1,0- bis 2,0-fach", "60 Sekunden lang keines der Ziele verlieren"],
      ["3", "ab 2,0-fach", "Auch bei hohem Tempo beide Seiten im Blick halten"],
      ["4", "Hilfslinien aus", "Ohne Orientierung beide Positionen halten"],
      ["5", "Zufallstempo", "Bei wechselnder Geschwindigkeit dranbleiben"]
    ],
    note: "Übungsstufen von SkillDrills zur Orientierung. Keine Sehtest-Normen, keine Nutzerstatistik, keine Perzentile.",
  },
  techniques: {
    title: "Tipps für die Übung",
    items: [
      { name: "Blick in die Mitte, Aufmerksamkeit auf beide Seiten", desc: "Wer ein Ziel fixiert, verliert leicht das andere. Probiere, den Blick nahe der Mitte zu lassen und beide Bewegungen gleichzeitig wahrzunehmen.", tips: "Wird es zu anstrengend, Tempo senken und Hilfslinien wieder einblenden." },
      { name: "Zwei Rhythmen getrennt wahrnehmen", desc: "Links senkrecht, rechts waagerecht und auf unterschiedlich langen Bahnen: Die Umkehrpunkte fallen deshalb nicht zusammen. Nimm sie als zwei eigene Rhythmen wahr.", tips: "Wenn ein Ziel umkehrt, kurz die Position des anderen prüfen." },
      { name: "Immer nur eine Sache schwerer machen", desc: "Erhöhe Tempo, blende die Linie aus oder schalte Zufallstempo zu, aber nie alles auf einmal.", tips: "Vergleiche nur Durchgänge mit denselben Einstellungen." },
      { name: "Kurz üben, dann Pause", desc: "Übe in Blöcken von 5 bis 10 Minuten, blinzle bewusst und schau zwischendurch in die Ferne. Länger ist nicht automatisch besser.", tips: "Bei Schmerzen oder Schwindel sofort aufhören." }
    ],
  },
  steps: [
    { title: "Einstellungen wählen", text: "Dauer, Tempo und Zielgröße auswählen. Für den Einstieg eignen sich 60 Sekunden, 1,0-fach und eingeblendete Hilfslinien." },
    { title: "Blick zur Mitte", text: "Bequem vor den Bildschirm setzen, Schultern locker, Blick in die Nähe der Bildschirmmitte." },
    { title: "Beide Ziele verfolgen", text: "Das linke Ziel (auf und ab) und das rechte Ziel (hin und her) gleichzeitig im Blick behalten." },
    { title: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Hilfslinien ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln." }
  ],
  audience: "Alle, die spielerisch üben möchten, ihre Aufmerksamkeit auf zwei bewegte Ziele zu verteilen.",
  faqs,
  sources: pickSources('pylyshyn1988', 'alvarez2005', 'awh2000', 'cavanagh2005', 'green2006', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/peripheral-ping-pursuit", label: "Peripheres Sehen Training" },
    { href: "/de/drills/visual-tracking/spatial-shift-pursuit", label: "Spatial Shift Blickverfolgung" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Prädiktives Tracking Training" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Chaotische Blickverfolgung" },
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Gleichmäßige Blickfolge-Übung" }
  ],
};

export default function SplitScreenTrackingDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SplitScreenTrackingClient
        copy={{
          title: "Geteiltes Tracking: zwei Ziele gleichzeitig",
          subtitle: "Links auf und ab, rechts hin und her",
          description: "Beim geteilten Tracking verfolgst du zwei Ziele gleichzeitig: links eines, das auf und ab läuft, rechts eines, das hin und her läuft. Der Browser zeichnet deinen Blick nicht auf; das Ergebnis ist ein Übungsprotokoll, kein Test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
