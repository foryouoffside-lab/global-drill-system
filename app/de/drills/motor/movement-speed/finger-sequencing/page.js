import FingerSequencingClient from '@/app/drills/motor/movement-speed/finger-sequencing/FingerSequencingClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/de/drills/motor/movement-speed/finger-sequencing';
const TITLE = 'Ziele in Reihenfolge klicken | Klickfolge-Drill | SkillDrills';
const DESCRIPTION = 'Ziele in Reihenfolge klicken: Folge der gestrichelten Linie und triff 3 bis 5 Ziele mit der Maus. +2 s pro Treffer, -1 s pro Fehler. Kostenlos im Browser.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Ziele in Reihenfolge klicken',
    'Klickreihenfolge',
    'Klickfolge Training',
    'Mausgenauigkeit trainieren',
    'Maus Training',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'article',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/motor/movement-speed/finger-sequencing'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Motorik Training', item: 'https://skilldrills.online/de/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Bewegungsgeschwindigkeit', item: 'https://skilldrills.online/de/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Ziele in Reihenfolge klicken', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fine_motor_skill"],
  inLanguage: 'de-DE',
  name: 'Ziele in Reihenfolge klicken',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: DESCRIPTION,
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'de-DE',
  name: 'Ziele in Reihenfolge klicken',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Benötigt HTML5 Canvas und JavaScript',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'de-DE',
  name: 'Ziele in Reihenfolge klicken',
  url: PAGE_URL,
  description: 'Maus-Drill: Ziele, die eine gestrichelte Linie verbindet, in der vorgegebenen Reihenfolge anklicken. Mit jedem Level werden die Ziele kleiner, liegen weiter auseinander und das Zeitlimit pro Kette sinkt.',
  genre: ['Mouse Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie funktioniert der Drill?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pro Runde erscheint eine Kette aus 3 Zielen (Level 1–2), 4 Zielen (Level 3–5) oder 5 Zielen (ab Level 6). Eine violette gestrichelte Linie zeigt die Klickreihenfolge, das aktive Ziel leuchtet. Klicke die Ziele in dieser Reihenfolge mit der Maus an (auf Touch-Geräten antippen). Es werden keine Nummern angezeigt, du folgst der Linie.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktionieren Zeit und Punkte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Du startest mit 45 Sekunden. Jeder Treffer in der richtigen Reihenfolge gibt +2 s (maximal 60 s). Eine komplette Kette bringt 150 Punkte × Serien-Multiplikator (bis 3,0×) × Level-Bonus. Die Runde endet, wenn die Zeit abläuft.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was sind die roten Ziele mit „!“?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ab Level 6 tauchen Fallen auf. Ein Klick darauf zählt wie ein Fehlklick: -1 s, Serie zurückgesetzt, neue Kette. Fallen liegen nicht auf der gestrichelten Linie, also einfach überspringen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Gibt es ein Zeitlimit pro Kette?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, wenn die Timeout-Option aktiv ist (Standard). Am Anfang hat jede Kette etwa 3,2 Sekunden, mit steigendem Level und längerer Serie wird es kürzer. Läuft es ab, gibt es -1 s, die Serie wird zurückgesetzt und eine neue Kette erscheint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ändert sich mit dem Level?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alle 1.750 Punkte steigt das Level um 1, ohne Obergrenze. Höhere Level bringen mehr Ziele pro Kette, kleinere Ziele, größere Abstände und ein kürzeres Zeitlimit. In niedrigen Leveln sind spätere Ziele kleiner und blasser als Hinweis; das verschwindet etwa bei Level 10.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zu einem CPS Test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ein CPS Test zählt nur, wie oft du an einer Stelle klickst. Hier bewegst du die Maus in fester Reihenfolge von Ziel zu Ziel und musst genau stoppen. Weg und Genauigkeit zählen mehr als Klickgeschwindigkeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie wird die Genauigkeit berechnet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anteil der Ziele, die in richtiger Reihenfolge getroffen wurden, an allen Versuchen (Klicks, Fallen-Klicks und abgelaufene Ketten). Im Ergebnis siehst du Genauigkeit, abgeschlossene Ketten, höchstes Level und maximale Combo.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  name: 'So klickst du Ziele in Reihenfolge',
  description: 'Schritt für Schritt der gestrichelten Linie folgen und die Ziele der Reihe nach treffen.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Linie lesen',
      text: 'Sieh dir vor dem ersten Klick an, in welcher Reihenfolge die violette Linie die Ziele verbindet.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Beim leuchtenden Ziel starten',
      text: 'Klicke das leuchtende Ziel und folge der Linie zum nächsten.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Fallen auslassen',
      text: 'Rote Ziele mit „!“ (ab Level 6) nicht anklicken, nur Ziele auf der Linie treffen.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Ergebnis prüfen',
      text: 'Genauigkeit, abgeschlossene Ketten, höchstes Level und maximale Combo ansehen und das nächste Ziel setzen.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('lashley1951', 'keele1968', 'fitts1954'),
  intro: {
    title: 'Ziele in Reihenfolge klicken: worum es geht',
    paragraphs: [
      'Bei diesem Drill klickst du Ziele in Reihenfolge statt einfach das nächstgelegene. Die Zeit zwischen zwei Zielen hängt von Abstand und Größe ab (Fitts, 1954), und eine feste Abfolge lässt sich als ein zusammenhängender Bewegungsplan vorbereiten (Lashley, 1951; Keele, 1968).',
      'Die Messung hängt vom Browser-Timer und der Bildwiederholrate ab. Vergleiche deine Ergebnisse deshalb auf demselben Gerät mit denselben Mauseinstellungen.',
    ],
  },
  benchmark: {
    title: 'Übungsstufen',
    description: 'Von SkillDrills festgelegte Übungsstufen zur Orientierung. Keine Forschungsnormen, keine Nutzerstatistik, keine Perzentile.',
    columns: ['Stufe', 'Erreichtes Level', 'Genauigkeit'],
    rows: [
      { tier: 'Stufe 1', level: 'Level 12+', accuracy: '95 % und mehr' },
      { tier: 'Stufe 2', level: 'Level 9–11', accuracy: '90–94 %' },
      { tier: 'Stufe 3', level: 'Level 6–8', accuracy: '85–89 %' },
      { tier: 'Stufe 4', level: 'Level 3–5', accuracy: '75–84 %' },
      { tier: 'Stufe 5', level: 'Level 1–2', accuracy: 'unter 75 %' },
    ],
  },
  protocols: {
    title: 'Trainingstipps',
    description: 'So steigerst du dein Ergebnis zuverlässig.',
    items: [
      {
        title: 'Erst die Linie lesen',
        description: 'Plane die ganze Kette als eine Bewegung, bevor du klickst. So suchst du nicht nach jedem Ziel neu.',
      },
      {
        title: 'Weite Wege schnell, Ende genau',
        description: 'Große Distanzen mit dem Arm, das Abbremsen am Ziel mit Handgelenk und Fingern. Auf höheren Leveln sind die Ziele kleiner.',
      },
      {
        title: 'Nicht hetzen',
        description: 'Jeder Fehler kostet 1 Sekunde und die Serie. Ein gleichmäßiges, sauberes Tempo bringt mehr Punkte.',
      },
    ],
  },
  faqs: {
    title: 'Häufige Fragen',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const deCopy = {
  title: 'Ziele in Reihenfolge klicken',
  subtitle: 'Folge der gestrichelten Linie und klicke die Ziele der Reihe nach',
  score: 'Punkte',
  timeLeft: 'Restzeit',
  accuracy: 'Genauigkeit',
  bestScore: 'Bestwert',
  startButtonText: 'Training starten',
  startSubtitle: 'Klickreihenfolge • Start mit 45 s, +2 s pro Treffer',
  getReady: 'Bereit machen',
  rulesTitle: 'Ablauf und Punkte',
  rulesItems: [
    { num: '1', text: 'Ziel in Reihenfolge', highlight: '+2 s (max. 60 s)', result: 'Kette: 150 Pkt × Multi' },
    { num: '2', text: 'Serien-Multiplikator', highlight: 'bis 3,0×', result: 'steigt mit jeder Kette' },
    { num: '3', text: 'Level', highlight: '+1 je 1.750 Pkt', result: 'mehr, kleinere Ziele' },
    { num: '4', text: 'Fehler / Falle / Timeout', highlight: '-1 s', result: 'Serie zurückgesetzt' }
  ],
  chainsCleared: 'Ketten geschafft',
  peakLevel: 'Höchstes Level',
  maxCombo: 'Max. Combo',
  playAgain: 'Nochmal',
  shareTitle: 'Ergebnis teilen',
  exitTitle: 'Beenden'
};

export default function GermanFingerSequencingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <FingerSequencingClient copy={deCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
