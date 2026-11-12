import StrobePredictionPursuitClient from '@/app/drills/visual-tracking/strobe-prediction-pursuit/StrobePredictionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/visual-tracking/strobe-prediction-pursuit';
const title = "Stroboskop-Tracking: blinkendes Ziel verfolgen | SkillDrills";
const description = "Stroboskop-Tracking: Ein Ziel prallt von den Bildschirmrändern ab und verschwindet regelmäßig. Sag seine Position voraus. Kostenlose Browserübung, kein Sehtest.";

export const metadata = {
  title,
  description,
  keywords: ["Stroboskop-Tracking", "blinkendes Ziel verfolgen", "Ziel vorhersagen Übung", "Blickverfolgung Übung", "Augenübung im Browser"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/strobe-prediction-pursuit') },
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
    { '@type': 'ListItem', position: 3, name: "Stroboskop-Tracking: blinkendes Ziel verfolgen", item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: "Stroboskop-Tracking: blinkendes Ziel verfolgen",
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
  name: "Stroboskop-Tracking: blinkendes Ziel verfolgen",
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
  name: "Stroboskop-Tracking: blinkendes Ziel verfolgen",
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
  name: "So funktioniert Stroboskop-Tracking",
  description: "In vier Schritten ein regelmäßig verschwindendes Ziel verfolgen und seine Position vorhersagen.",
  step: [
    { '@type': 'HowToStep', position: 1, name: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendetem Umriss beginnen.", url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: "Bewegung erfassen", text: "In der sichtbaren Phase Richtung und Tempo des Ziels verfolgen.", url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: "Unsichtbare Phase überbrücken", text: "Wenn das Ziel verschwindet, den Blick in die erwartete Richtung weiterführen.", url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Umriss ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln.", url: `${url}#step-4` }
  ],
};

const faqs = [
  { q: "Was ist Stroboskop-Tracking?", a: "Eine Browserübung mit einem einzelnen Ziel, das geradlinig über den Bildschirm läuft und an den Rändern abprallt. Etwa zwei Drittel jedes Zyklus ist es sichtbar, ein Drittel verborgen. Da es sich auch unsichtbar weiterbewegt, sagst du voraus, wo es wieder auftaucht." },
  { q: "Was passiert, während das Ziel unsichtbar ist?", a: "Es bewegt sich mit gleicher Richtung und Geschwindigkeit weiter. Bei eingeblendeter Linie markiert ein schwacher Umriss die Position. Blendest du die Linie aus, verschwindet auch der Umriss, und du folgst nur noch deiner Vorhersage." },
  { q: "Ändert sich das Blinktempo?", a: "Der Zyklus wird in Bildschirm-Frames gezählt und verkürzt sich mit dem Geschwindigkeitsfaktor. Ein höheres Tempo beschleunigt also Bewegung und Blinken zugleich." },
  { q: "Ist das dasselbe wie Training mit Stroboskopbrillen?", a: "Nein. Studien zu Stroboskopbrillen (z. B. Appelbaum et al., 2011) verwenden Brillen, die das gesamte Sichtfeld in Intervallen abdunkeln. Hier verschwindet nur ein einzelnes Ziel auf dem Bildschirm. Die Ergebnisse dieser Studien lassen sich nicht auf diese Übung übertragen." },
  { q: "Was, wenn ich empfindlich auf Blinklicht reagiere?", a: "Es blitzt nicht der ganze Bildschirm; nur ein einzelnes Ziel verschwindet und erscheint wieder. Wenn du schon einmal auf flackerndes Licht reagiert hast, verzichte trotzdem auf die Übung und brich bei Unwohlsein sofort ab." },
  { q: "Misst die Übung meine Augenbewegungen?", a: "Nein. Der Browser kann nicht erkennen, wohin du schaust. Er kennt nur die Position, an der das Ziel gezeichnet wird, und deine Einstellungen. Du musst weder klicken noch tippen; das Ergebnis ist ein Übungsprotokoll für dich selbst." },
  { q: "Gibt es eine Punktzahl oder Bewertung?", a: "Nein. Am Ende siehst du nur Dauer, Geschwindigkeitsfaktor, ob Zufallstempo aktiv war, und die Zahl deiner bisherigen Durchgänge (in diesem Browser gespeichert). Wenn du Zielverluste zählen willst, notiere sie selbst." },
  { q: "Welche Einstellungen gibt es?", a: "Dauer 30, 45, 60, 90 oder 120 Sekunden, Geschwindigkeit 0,5- bis 9,0-fach, Zielgröße 10 bis 50 px. Außerdem lassen sich die Linie (Umriss in der unsichtbaren Phase) ausblenden, Zufallstempo, Leuchtspur, Glow, Scanlines, heller oder dunkler Hintergrund und die Zielfarbe umschalten. Mit Esc beendest du den Durchgang jederzeit." },
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
  heading: "Stroboskop-Tracking: Anleitung",
  intro: [
    "Stroboskop-Tracking ist eine kostenlose Browserübung: Ein Ziel bewegt sich geradlinig über den Bildschirm, prallt an den Rändern ab und verschwindet in regelmäßigen Abständen. Etwa zwei Drittel jedes Zyklus ist es sichtbar, etwa ein Drittel verborgen.",
    "Während es unsichtbar ist, bewegt sich das Ziel mit gleicher Richtung und Geschwindigkeit weiter. Standardmäßig zeigt ein schwacher Umriss die Position; blendest du die Linie aus, verschwindet auch der Umriss. Nach dem Start läuft ein Countdown 3-2-1, danach bewegt sich das Ziel für die gewählte Dauer (30 bis 120 Sekunden, Standard 60). Du musst nichts klicken oder drücken, und es gibt keine Punktzahl.",
    "Der Browser zeichnet nicht auf, wohin du schaust. Werte das Ergebnis deshalb nicht als Seh- oder Aufmerksamkeitstest, sondern als Übungsprotokoll für dich selbst. Es ist auch kein Training mit Stroboskopbrillen, die das ganze Sichtfeld abdecken.",
    "Vergleiche Durchgänge am selben Bildschirm und mit gleichem Abstand; Bildwiederholrate und Anzeigeverzögerung beeinflussen, wie flüssig das Ziel wirkt (Woods et al., 2015). Bei Schmerzen, Schwindel, Übelkeit oder anhaltend verschwommenem Sehen brich ab."
  ],
  benchmarks: {
    title: "Übungsstufen zur Orientierung",
    headers: ["Stufe", "Einstellung", "Übungsziel"],
    rows: [
      ["1", "1,0-fach, Umriss an", "Richtung und Tempo vor dem Verschwinden erfassen"],
      ["2", "1,0- bis 2,0-fach", "Beim Wiederauftauchen ohne Verzögerung dran sein"],
      ["3", "ab 2,0-fach", "Auch bei schnellem Blinken weiter vorhersagen"],
      ["4", "Linie aus", "Die unsichtbare Phase nur per Vorhersage überbrücken"],
      ["5", "Zufallstempo", "Die Vorhersage an wechselndes Tempo anpassen"]
    ],
    note: "Übungsstufen von SkillDrills zur Orientierung. Keine Sehtest-Normen, keine Nutzerstatistik, keine Perzentile.",
  },
  techniques: {
    title: "Tipps für die Übung",
    items: [
      { name: "Richtung erfassen, solange das Ziel sichtbar ist", desc: "Achte in der sichtbaren Phase auf Richtung und Tempo.", tips: "Verschwindet es kurz vor einem Rand, an den Abprall denken." },
      { name: "Blick nicht anhalten", desc: "Wenn das Ziel verschwindet, den Blick ruhig in die erwartete Richtung weiterführen.", tips: "Beim Wiederauftauchen den Abstand zur eigenen Erwartung prüfen." },
      { name: "Umriss schrittweise weglassen", desc: "Erst mit Umriss üben, dann die Linie ausblenden, damit auch der Umriss verschwindet.", tips: "Pro Durchgang nur eine Einstellung ändern." },
      { name: "Kurz üben, dann Pause", desc: "Übe in Blöcken von 5 bis 10 Minuten, blinzle bewusst und schau zwischendurch in die Ferne. Länger ist nicht automatisch besser.", tips: "Bei Schmerzen oder Schwindel sofort aufhören." }
    ],
  },
  steps: [
    { title: "Einstellungen wählen", text: "Mit 60 Sekunden, 1,0-fachem Tempo und eingeblendetem Umriss beginnen." },
    { title: "Bewegung erfassen", text: "In der sichtbaren Phase Richtung und Tempo des Ziels verfolgen." },
    { title: "Unsichtbare Phase überbrücken", text: "Wenn das Ziel verschwindet, den Blick in die erwartete Richtung weiterführen." },
    { title: "Schrittweise steigern", text: "Wenn es leicht fällt, Tempo erhöhen oder Umriss ausblenden bzw. Zufallstempo zuschalten, jeweils einzeln." }
  ],
  audience: "Alle, die spielerisch üben möchten, ein zeitweise unsichtbares Ziel per Vorhersage weiterzuverfolgen.",
  faqs,
  sources: pickSources('appelbaum2011', 'mitroff2013', 'smith2016', 'bennett2007', 'appelbaum2012', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Prädiktives Tracking Training" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Geisterbild-Unterdrückung Drill" },
    { href: "/de/drills/visual-tracking/sine-wave-pursuit", label: "Sinuswellen-Augentraining" },
    { href: "/de/drills/visual-tracking/spatial-shift-pursuit", label: "Spatial Shift Blickverfolgung" },
    { href: "/de/drills/visual-tracking/split-screen-tracking", label: "Split-Screen Augentraining" }
  ],
};

export default function StrobePredictionPursuitDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <StrobePredictionPursuitClient
        copy={{
          title: "Stroboskop-Tracking: blinkendes Ziel verfolgen",
          subtitle: "Position vorhersagen, wenn das Ziel verschwindet",
          description: "Beim Stroboskop-Tracking verfolgst du ein Ziel, das regelmäßig verschwindet, und sagst seine Position voraus. Der Browser zeichnet deinen Blick nicht auf; das Ergebnis ist ein Übungsprotokoll, kein Test.",
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
