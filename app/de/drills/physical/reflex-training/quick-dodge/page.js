import QuickDodgeClient from '@/app/drills/physical/reflex-training/quick-dodge/QuickDodgeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/reflex-training/quick-dodge';
const title = "Dodge Game | Maus-Ausweichspiel im Browser | SkillDrills";
const description = "Kostenloses Dodge Game im Browser: Weiche mit der Maus roten Geschossen aus, die von allen Rändern auf deinen Zeiger zufliegen. 45 Sekunden pro Runde.";

export const metadata = {
  title,
  description,
  keywords: ["Dodge Game", "Maus-Ausweichspiel", "Geschossen ausweichen", "Ausweichspiel online", "Browserspiel Maus"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/quick-dodge') },
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
    { '@type': 'ListItem', position: 3, name: 'Reflex-Drills', item: 'https://skilldrills.online/de/drills/physical/reflex-training' },
    { '@type': 'ListItem', position: 4, name: 'Dodge Game', item: url },
  ],
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Dodge Game (Quick Dodge)',
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
  { q: "Wie funktioniert das Dodge Game?", a: "Rote, runde Geschosse erscheinen an einem der vier Bildschirmränder und fliegen geradlinig auf die Stelle zu, an der dein Zeiger beim Erscheinen war. Verlässt ein Geschoss den Bildschirm, ohne dich zu treffen, zählt das als Ausweichen. Eine Runde dauert 45 Sekunden." },
  { q: "Verfolgen die Geschosse meinen Zeiger?", a: "Nein. Sie zielen beim Erscheinen auf deine Zeigerposition und fliegen danach ohne Kurskorrektur geradeaus. Unterwegs werden sie etwas größer, also weiche mit etwas Abstand aus." },
  { q: "Wie werden Punkte und Combo berechnet?", a: "Für jedes ausgewichene Geschoss gibt es Grundpunkte mal Combo-Multiplikator. Die Grundpunkte steigen mit dem Level von 2 auf 20. Der Multiplikator liegt bei 1,1x ab 3 Ausweichern in Folge, 1,5x ab 10, 2,0x ab 20, 2,5x ab 30 und 3,0x ab 50." },
  { q: "Wie steigt die Schwierigkeit?", a: "Jede Runde beginnt auf Level 1. Das Level steigt pro 250 Punkte und zusätzlich pro 4 Ausweicher in Folge. Die Geschossgeschwindigkeit wächst von 300 px/s auf 1.600 px/s bei Level 15 und danach weiter; eine lange Combo legt bis zu 200 px/s drauf. Der Abstand zwischen neuen Geschossen sinkt von 0,65 auf 0,10 Sekunden, und gleichzeitig können 8 bis 58 Geschosse unterwegs sein." },
  { q: "Was passiert bei einem Treffer?", a: "Die Combo fällt auf 1,0x, alle Geschosse verschwinden vom Bildschirm, und es gibt einen roten Blitz und ein kurzes Wackeln. Punkte und Restzeit werden nicht abgezogen. Den roten Blitz kannst du während des Spiels unten rechts ausschalten." },
  { q: "Welche Steuerung wird benutzt?", a: "Nur die Maus. Beim Start wird der Zeiger gesperrt (Pointer Lock) und die Empfindlichkeit aus den Seiteneinstellungen übernommen. Auf der Tastatur gibt es nur Esc zum Beenden. Wir empfehlen einen PC mit Maus." },
  { q: "Wie wird die Bewertung vergeben?", a: "Der Endscore wird mit 17.000 Punkten verglichen: S+ ab etwa 15.350, S ab etwa 12.300, A ab etwa 9.550, B ab 6.120, C ab etwa 3.450, D ab 1.530 Punkten. Das sind SkillDrills-Übungsbereiche, keine Nutzerstatistik und keine Perzentile." },
  { q: "Was unterscheidet das Spiel vom Raster-Ausweichspiel?", a: "Hier weichst du frei beweglichen Geschossen aus, die von allen Seiten kommen. Im Raster-Ausweichspiel derselben Kategorie wählst du dagegen eines von 9 festen Feldern, bevor es explodiert." },
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
  "Klicke auf Start; nach 3 Sekunden Countdown beginnt der Zeiger in der Bildschirmmitte.",
  "Erscheint am Rand ein Geschoss, fliegt es auf deine aktuelle Position zu: geh zur Seite.",
  "Bewege die Maus kurz und kontrolliert und bleib in den freien Lücken zwischen den Geschossen.",
  "Weiche ohne Treffer in Serie aus, steigere die Combo und hol in 45 Sekunden deinen Bestscore.",
];

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So spielst du das Dodge Game',
  description: 'In 4 Schritten Geschossen mit der Maus ausweichen und die Combo steigern.',
  step: steps.map((text, i) => ({ '@type': 'HowToStep', position: i + 1, name: `Schritt ${i + 1}`, text, url: `${url}#step-${i + 1}` })),
};

const dodgeGuide = {
  heading: 'Anleitung zum Dodge Game',
  intro: [
    "Das Dodge Game (Quick Dodge) ist ein Maus-Ausweichspiel im Browser: Rote Geschosse fliegen von allen Bildschirmrändern auf deinen Zeiger zu, und du weichst ihnen mit der Maus aus. Ziel ist, nicht getroffen zu werden; je mehr Ausweicher in Folge, desto höher der Combo-Multiplikator.",
    "Jedes Geschoss zielt beim Erscheinen auf deine Zeigerposition und fliegt dann geradeaus. Wer stillhält, wird getroffen; wer kurz zur Seite geht, entkommt. Schnelle Bewegungen werden vorab geplant (Kawato, 1999), daher lohnt es sich, beim Erscheinen eines Geschosses das Ziel schon festzulegen.",
    "Mit steigendem Level werden die Geschosse schneller, häufiger und größer. Je enger die freien Lücken, desto genauer musst du dich bewegen (Fitts, 1954). Ein Treffer leert den Bildschirm und setzt nur die Combo zurück.",
    "Die Ergebnisse sind Übungswerte innerhalb von SkillDrills, kein medizinischer Test und keine Messung sportlicher Leistung. Bildwiederholrate und Eingabegerät beeinflussen die Latenz (Woods et al., 2015); vergleiche Werte daher mit derselben Ausstattung.",
  ],
  benchmarks: {
    title: 'Bewertungsstufen (SkillDrills-Übungsbereiche)',
    headers: ['Bewertung', 'Punkte'],
    rows: [
      ['S+', 'ab ca. 15.350'],
      ['S', 'ab ca. 12.300'],
      ['A', 'ab ca. 9.550'],
      ['B', 'ab 6.120'],
      ['C', 'ab ca. 3.450'],
      ['D', 'ab 1.530'],
    ],
    note: 'Die Stufen vergleichen den Endscore mit 17.000 Punkten und sind SkillDrills-Übungsbereiche. Keine Nutzerstatistik, keine Perzentile.',
  },
  techniques: {
    title: 'Tipps für mehr Punkte',
    items: [
      { name: 'Auf das Erscheinen achten', desc: 'Geschosse fliegen auf die Position zu, an der du beim Erscheinen warst. Ein kurzer Schritt zur Seite reicht meist.', tips: 'Bleib nicht lange an einer Stelle.' },
      { name: 'Klein bewegen', desc: 'Große Mausbewegungen führen oft direkt in neue Geschosse. Bleib mit kurzen Bewegungen in freien Lücken.', tips: 'Die Seite, an der ein Geschoss gerade vorbeigeflogen ist, ist oft frei.' },
      { name: 'Wachstum einplanen', desc: 'Geschosse werden im Flug größer. Weiche lieber mit Abstand aus als haarscharf.', tips: 'Im schnellen Spätteil geht Sicherheit vor.' },
      { name: 'Combo halten', desc: 'Je länger die Serie, desto schneller steigen Multiplikator und Level. Nach einem Treffer ist der Bildschirm leer: in Ruhe neu ansetzen.', tips: 'Handgelenk und Schulter locker lassen, bei Schmerzen pausieren.' },
    ],
  },
  steps,
  audience: 'Alle, die ein Dodge Game oder Maus-Ausweichspiel im Browser spielen wollen, und Spieler, die ihre Maussteuerung üben möchten.',
  faqs,
  sources: pickSources('kawato1999', 'fitts1954', 'woods2015'),
};

export default function LocalizedQuickDodgePageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <QuickDodgeClient
        copy={{
          title: "Dodge Game",
          hudLabels: { score: "Punkte", time: "Zeit", bestScore: "Bestscore", bestCombo: "Beste Combo", getReady: "BEREIT" },
          resultLabels: { newBest: "NEUER REKORD", points: "Punkte", accuracy: "Ausweichquote", dodges: "Ausweicher", peakSpeed: "Max. Tempo", peakLevel: "Max. Level", playAgain: "Nochmal spielen" },
          rulesTitle: "Regeln und Punktesystem",
          rulesItems: [
            { title: "Geschossen ausweichen", text: "Rote Geschosse erscheinen am Rand und fliegen auf die Stelle, an der dein Zeiger in diesem Moment war. Verlassen sie ohne Treffer den Bildschirm, zählt das als Ausweicher." },
            { title: "Combo-Multiplikator", text: "Ausweicher in Folge erhöhen den Multiplikator bis maximal 3,0x (ab 50 in Folge)." },
            { title: "Steigende Schwierigkeit", text: "Mit Punkten und Serien steigt das Level; die Geschosse werden von 300 px/s auf über 1.600 px/s schneller und erscheinen öfter." },
            { title: "Getroffen", text: "Die Combo fällt auf 1,0x und der Bildschirm wird geleert. Punkte und die 45-Sekunden-Runde bleiben unverändert." },
          ],
          aboutTitle: "Über das Dodge Game",
          aboutSections: [
            { title: "Geradeaus fliegende Geschosse", content: "Jedes Geschoss zielt beim Erscheinen auf deinen Zeiger und fliegt dann geradeaus. Grundregel: beim Erscheinen zur Seite gehen." },
            { title: "Vorher entscheiden", subtitle: "Kawato, 1999", content: "Schnelle Bewegungen werden vorab geplant. Leg dein Ziel fest, sobald ein Geschoss auftaucht." },
            { title: "Enger werdende Lücken", subtitle: "Fitts, 1954", content: "Je mehr Geschosse, desto kleiner die freien Lücken und desto genauer muss die Bewegung sein." },
            { title: "Ausstattung und Vergleich", subtitle: "Woods et al., 2015", content: "Bildwiederholrate und Eingabegerät beeinflussen die Latenz. Vergleiche Ergebnisse mit derselben Ausstattung." },
          ],
        }}
      />
      <DrillGuide guide={dodgeGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/quick-dodge" />
    </>
  );
}
