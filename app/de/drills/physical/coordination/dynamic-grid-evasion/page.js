import DynamicGridEvasionClient from '@/app/drills/physical/coordination/dynamic-grid-evasion/DynamicGridEvasionClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/coordination/dynamic-grid-evasion';
const title = "Raster-Ausweichspiel | Gefahrenfelder meiden | SkillDrills";
const description = "Kostenloses Raster-Ausweichspiel: Bring den Mauszeiger im 3x3-Raster aus orange blinkenden Gefahrenfeldern, bevor sie explodieren. 45 Sekunden pro Runde.";

export const metadata = {
  title,
  description,
  keywords: ["Raster-Ausweichspiel", "Gefahrenfeldern ausweichen", "3x3-Raster Spiel", "Ausweichspiel Maus", "Browserspiel Ausweichen"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/coordination/dynamic-grid-evasion') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'de_DE', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Startseite', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Koordinationsspiele', item: 'https://skilldrills.online/de/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Raster-Ausweichspiel', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Raster-Ausweichspiel (Dynamic Grid Evasion)',
  url,
  description,
  genre: ['Action Game', 'Browser Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  operatingSystem: 'All',
  inLanguage: 'de',
  dateModified: '2026-11-10',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: "Wie funktioniert das Raster-Ausweichspiel?", a: "Das Spielfeld ist ein 3x3-Raster. In jeder Welle blinken einige Felder orange als Warnung. Läuft die Warnzeit ab, explodieren diese Felder rot. Ist dein Mauszeiger in diesem Moment außerhalb der gewarnten Felder, hast du die Welle überstanden. 0,35 Sekunden nach der Explosion startet die nächste Welle; eine Runde dauert 45 Sekunden." },
  { q: "Wann wird die Zeigerposition geprüft?", a: "Nur im Moment der Explosion. Du darfst während der Warnung durch Gefahrenfelder fahren; entscheidend ist, dass der Zeiger bei der Explosion in einem sicheren Feld steht. Der Zeiger startet in der Mitte, und auch das Mittelfeld kann ein Gefahrenfeld werden." },
  { q: "Wie werden Punkte und Combo berechnet?", a: "Jede überstandene Welle bringt 100 Punkte mal Combo-Multiplikator. Der Multiplikator liegt bei 1,1x ab 3 Wellen in Folge, 1,25x ab 5, 1,5x ab 10, 2,0x ab 20 und 2,5x ab 30. Im Code gibt es 3,0x ab 50 in Folge, aber in 45 Sekunden sind höchstens gut 40 Wellen möglich, also ist 2,5x der real erreichbare Höchstwert." },
  { q: "Wie steigt die Schwierigkeit?", a: "Jede Runde beginnt auf Level 1. Das Level steigt pro 250 Punkte um 1 und zusätzlich um 1 pro 4 Wellen in Folge. Mit steigendem Level schrumpft die Warnzeit von 1,4 auf 0,45 Sekunden, und die Gefahrenfelder wachsen von 3 auf 7, sodass nur 2 sichere Felder bleiben. Beide Werte erreichen ihre Grenze bei Level 15." },
  { q: "Was passiert, wenn mich eine Explosion trifft?", a: "Die Combo fällt auf 0 zurück, es gibt einen roten Blitz und ein kurzes Wackeln. Punkte und Restzeit werden nicht abgezogen. Den roten Blitz kannst du während des Spiels unten rechts ausschalten." },
  { q: "Wie wird die Bewertung vergeben?", a: "Der Endscore wird mit einem Referenzwert von 17.000 Punkten verglichen (B ab 6.120, C ab etwa 3.450, D ab 1.530 Punkten). Selbst wenn du in 45 Sekunden jede Welle überstehst, sind rechnerisch nur rund 8.400 Punkte möglich; die realistisch höchste Bewertung ist hier also B." },
  { q: "Welche Steuerung wird benutzt?", a: "Nur die Maus. Beim Start wird der Zeiger gesperrt (Pointer Lock) und die Empfindlichkeit aus den Seiteneinstellungen übernommen. Auf der Tastatur gibt es nur Esc zum Beenden. Auf reinen Touch-Geräten lässt sich der Zeiger nicht bewegen, daher empfehlen wir einen PC mit Maus." },
  { q: "Was ist der Unterschied zu einem Dodge Game mit Geschossen?", a: "Im Raster-Ausweichspiel wählst du eines von 9 festen Feldern und wechselst hinein, bevor die Warnung abläuft. Wenn du lieber Geschossen ausweichst, die von allen Rändern kommen, nutze Quick Dodge in derselben Kategorie." },
  { q: "Ist das Spiel kostenlos und wo werden Ergebnisse gespeichert?", a: "Ja, kostenlos, ohne Installation oder Konto direkt im Browser. Bestscore und beste Combo liegen nur im lokalen Speicher deines Browsers." },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  dateModified: '2026-11-10',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const steps = [
  "Klicke auf Start; nach 3 Sekunden Countdown beginnt der Zeiger in der Mitte des Rasters.",
  "Erkenne die orange blinkenden Gefahrenfelder und suche ein Feld ohne Warnung.",
  "Bewege den Zeiger vor der Explosion in das sichere Feld und halte ihn innerhalb der Feldgrenzen.",
  "Übersteh Welle um Welle, halte die Combo und hol in 45 Sekunden deinen Bestscore.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So spielst du das Raster-Ausweichspiel',
  description: 'In 4 Schritten Gefahrenfeldern im 3x3-Raster ausweichen.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Schritt ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const gridGuide = {
  heading: 'Anleitung zum Raster-Ausweichspiel',
  intro: [
    "Das Raster-Ausweichspiel ist ein Browserspiel, in dem du den Mauszeiger im 3x3-Raster aus orange gewarnten Gefahrenfeldern bringst, bevor sie explodieren. Du weichst also keinen fliegenden Objekten aus, sondern wählst eines von 9 Feldern. Schnelle Entscheidung und sauberes Abbremsen gehören beide dazu.",
    "Mit steigendem Level schrumpft die Warnzeit von 1,4 auf 0,45 Sekunden, und es werden bis zu 7 der 9 Felder zu Gefahrenfeldern. Später bleiben nur 2 sichere Felder, und für ein Feld-für-Feld-Prüfen ist keine Zeit. Wie bei Posners Hinweisreiz-Versuchen (Posner, 1980) hilft es, den Kontrast zwischen blinkenden und dunklen Feldern auf einen Blick zu lesen.",
    "Schnelle Bewegungen bestehen aus einem großen Anfangsimpuls und einer kleinen Korrektur am Ende (Woodworth, 1899). Wer das richtige Feld wählt, aber über die Feldgrenze hinausschießt, wird trotzdem getroffen; also übe, innerhalb des Feldes zu stoppen.",
    "Die Ergebnisse sind Übungswerte innerhalb von SkillDrills. Vergleiche Werte nur mit derselben Maus, Empfindlichkeit und demselben Monitor.",
  ],
  benchmarks: {
    title: 'Bewertungsstufen (SkillDrills-Übungsbereiche)',
    headers: ['Bewertung', 'Punkte', 'Hinweis'],
    rows: [
      ['B', 'ab 6.120', 'fast jede Welle in 45 Sekunden überstanden'],
      ['C', 'ab ca. 3.450', 'mehr als die Hälfte der Wellen in Folge überstanden'],
      ['D', 'ab 1.530', 'sicherer Wechsel ins freie Feld nach der Warnung'],
      ['F', 'unter 1.530', 'Einstieg'],
    ],
    note: 'Die Stufen vergleichen den Endscore mit 17.000 Punkten und sind SkillDrills-Übungsbereiche. A und höher sind in einer 45-Sekunden-Runde rechnerisch nicht erreichbar. Keine Nutzerstatistik, keine Perzentile.',
  },
  techniques: {
    title: 'Tipps für mehr Punkte',
    items: [
      { name: 'Dunkle Felder zuerst suchen', desc: 'Statt die blinkenden Gefahrenfelder zu zählen, such direkt das Feld ohne Warnung.', tips: 'Spät in der Runde gibt es nur 2 sichere Felder; nimm das nähere.' },
      { name: 'Nächstes sicheres Feld', desc: 'Bei rund 0,5 Sekunden Warnzeit schaffst du weite Wege kaum noch. Wechsle ins nächstgelegene sichere Feld.', tips: 'Waagerecht oder senkrecht ist oft kürzer als diagonal.' },
      { name: 'Im Feld stoppen', desc: 'Gewertet wird die exakte Zeigerposition. Auf der Feldgrenze kann der Zeiger dem Nachbarfeld zugerechnet werden.', tips: 'Ziele auf die Feldmitte.' },
      { name: 'Combo halten', desc: 'Je länger die Serie, desto schneller steigen Multiplikator und Level. Ein riskanter weiter Weg mit Treffer kostet die Combo.', tips: 'Lieber das sichere nahe Feld.' },
    ],
  },
  steps,
  audience: 'Alle, die ein Ausweichspiel mit Gefahrenfeldern im Raster suchen, und Spieler, die schnelles Entscheiden und präzises Abbremsen mit der Maus üben wollen.',
  faqs,
  sources: pickSources('posner1980', 'woodworth1899', 'fitts1954'),
};

export default function DynamicGridEvasionPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <DynamicGridEvasionClient
        copy={{
          title: "Raster-Ausweichspiel",
          hudLabels: { score: "Punkte", timeLeft: "Restzeit", bestScore: "Bestscore", bestCombo: "Beste Combo" },
          rulesTitle: "Regeln und Punktesystem",
          rules: [
            { title: "Warnung", text: "In jeder Welle blinken einige Felder orange. Läuft die Warnzeit ab, explodieren sie." },
            { title: "Ins sichere Feld", text: "Steht der Zeiger bei der Explosion außerhalb der Gefahrenfelder, gibt es 100 Punkte mal Combo-Multiplikator." },
            { title: "Level", text: "Pro 250 Punkte und pro 4 Wellen in Folge steigt das Level. Die Warnzeit sinkt von 1,4 auf 0,45 s, die Gefahrenfelder steigen von 3 auf 7." },
            { title: "Getroffen", text: "Nur die Combo fällt auf 0. Punkte und die 45-Sekunden-Runde bleiben unverändert." },
          ],
          aboutTitle: "Was ist das Raster-Ausweichspiel?",
          aboutHeading: "Gefahrenfeldern im 3x3-Raster ausweichen",
          aboutText: "Im Raster-Ausweichspiel blinken Felder eines 3x3-Rasters orange, bevor sie explodieren. Du bringst den Mauszeiger rechtzeitig in ein sicheres Feld. Mit steigendem Level wird die Warnzeit kürzer und es gibt mehr Gefahrenfelder. Es geht um schnelles Entscheiden und präzises Abbremsen der Maus.",
          aboutCards: [
            { title: "Für wen", desc: "Für alle, die ein Ausweichspiel im Raster mögen oder schnelles Reagieren auf Warnungen üben wollen." },
            { title: "Was du übst", desc: "Gefahrenfelder und sichere Felder unterscheiden, das nächste Feld wählen, den Zeiger im Feld stoppen." },
            { title: "Ablauf", desc: "45 Sekunden fest, jede Runde ab Level 1. Treffer kosten weder Punkte noch Zeit." },
          ],
        }}
      />
      <DrillGuide guide={gridGuide} />
      <RelatedDrills />
    </>
  );
}
