import KeyboardRecognitionClient from '@/app/drills/motor/movement-speed/keyboard-recognition/KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/de/drills/motor/movement-speed/keyboard-recognition';
const TITLE = 'Tastatur-Reaktionszeit testen | Keybind Test | SkillDrills';
const DESCRIPTION = 'Tastatur-Reaktionszeit testen: Drücke die angezeigte Taste vor Ablauf des Timers und ignoriere Fake-Prompts. 60 s, mit Reaktionszeit, Genauigkeit und KPM.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Tastatur-Reaktionszeit',
    'Tastatur Reaktionszeit Test',
    'Keybind Test',
    'WASD Training',
    'Tasten erkennen',
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
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Motorik Training', item: 'https://skilldrills.online/de/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Bewegungsgeschwindigkeit', item: 'https://skilldrills.online/de/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Tastatur-Reaktionszeit', item: PAGE_URL },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  inLanguage: 'de-DE',
  name: 'Tastatur-Reaktionszeit testen',
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
  name: 'Tastatur-Reaktionszeit testen',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Browser mit JavaScript und physische Tastatur',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: PAGE_URL,
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'de-DE',
  name: 'Tastatur-Reaktionszeit testen',
  url: PAGE_URL,
  description: '60-Sekunden-Tastenspiel: angezeigte Tasten (einzeln, als Folge von 2–5 Tasten oder aus dem Gedächtnis) vor Ablauf des Timers drücken und Fake-Prompts ignorieren.',
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
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
      name: 'Was misst der Test der Tastatur-Reaktionszeit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die Zeit zwischen dem Erscheinen einer Taste auf dem Bildschirm und deinem richtigen Tastendruck. Im Ergebnis stehen durchschnittliche Reaktionszeit (ms), Genauigkeit, KPM (Tastendrücke pro Minute), maximale Combo und Rang. Gemessen wird deine Reaktion, nicht die Latenz der Tastatur und nicht deine Tippgeschwindigkeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Welche Prompts gibt es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einzelne Tasten, Folgen aus 2–3 Tasten (im Modus „Lange Sequenzen“ 5), einen Gedächtnismodus, der 3 Tasten 1 Sekunde zeigt und dann ausblendet, und Fake-Prompts, bei denen du nichts drücken darfst. Abgefragt werden A–Z, 0–9, Space, Shift, Strg, Alt, Tab, Enter, Sonderzeichen, F1–F6 und Pfeiltasten.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie werden Punkte vergeben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Richtige Eingabe: 120 Punkte × Combo-Multiplikator, Folgen ×1,4, Gedächtnismodus ×1,8. Einen Fake-Prompt bis zum Ende auszuhalten bringt +200. Falsche Taste, Reaktion auf einen Fake oder abgelaufene Zeit setzen die Combo zurück. Eine Runde dauert immer 60 Sekunden.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie funktionieren Schwierigkeit und Zeitlimit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Im Standardmodus „Adaptiv“ startet jeder Prompt mit etwa 1,8 Sekunden, wird bei Treffern kürzer (minimal ca. 0,8 s) und nach Fehlern wieder länger. Feste Stufen: Easy 1,5×, Medium 1,0×, Hard 0,75×, Expert 0,55× der Zeit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich mit Valorant- oder CS2-Keybinds üben?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Die Presets für Valorant, CS2, Fortnite, Minecraft, League of Legends und Apex Legends fragen nur die Standardbelegung des jeweiligen Spiels ab. Es ist kein offizielles Tool dieser Spiele.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funktioniert der Test mit QWERTZ-Tastaturen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tasten werden nach ihrer physischen Position erkannt und mit US-QWERTY-Beschriftung angezeigt. Auf QWERTZ sind deshalb Y und Z vertauscht, und einige Sonderzeichen liegen anders als aufgedruckt. Buchstaben außer Y/Z, Zahlen und Spieltasten wie WASD passen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist das ein Tastatur-Tester oder Tipptest?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Er prüft nicht, ob alle Tasten funktionieren, und misst keine Wörter pro Minute. Es ist ein Reaktionstraining für Spieltasten und braucht eine physische Tastatur; reine Touch-Geräte können nicht starten.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  name: 'So testest du deine Tastatur-Reaktionszeit',
  description: 'In 60 Sekunden auf angezeigte Tasten reagieren und bei Fake-Prompts stoppen.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Modus und Preset wählen',
      text: 'Modus, Schwierigkeit und bei Bedarf ein Spiel-Preset wählen, linke Hand in Grundstellung legen.',
      url: `${PAGE_URL}#step-1`,
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Auf den Bildschirm schauen',
      text: 'Nicht auf die Tastatur sehen, sondern die Taste in der Mitte des Bildschirms erkennen.',
      url: `${PAGE_URL}#step-2`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Drücken oder stoppen',
      text: 'Echte Prompts vor Ablauf drücken, bei Fake-Prompts nichts drücken, bis sie verschwinden.',
      url: `${PAGE_URL}#step-3`,
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Ergebnis prüfen',
      text: 'Nach 60 Sekunden Reaktionszeit, Genauigkeit, KPM und maximale Combo ansehen.',
      url: `${PAGE_URL}#step-4`,
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966'),
  intro: {
    title: 'Tastatur-Reaktionszeit: worum es geht',
    paragraphs: [
      'Beim Test der Tastatur-Reaktionszeit wählst du aus vielen Tasten die eine, die gerade angezeigt wird: eine Wahlreaktion (Donders, 1868). Je mehr Tasten möglich sind, desto langsamer die Reaktion (Hick, 1952); bei Fake-Prompts stillzuhalten trainiert Reaktionshemmung (Logan, 1984).',
      'Die Werte hängen von Browser-Timer, Bildwiederholrate und Tastatur ab. Vergleiche deine Ergebnisse auf demselben Gerät.',
    ],
  },
  benchmark: {
    title: 'Ränge im Drill',
    description: 'Der Rang ergibt sich aus den im Drill-Code festgelegten Grenzen für Punkte und Genauigkeit. Keine Forschungsnormen, keine Nutzerstatistik, keine Perzentile.',
    columns: ['Rang', 'Punkte', 'Genauigkeit'],
    rows: [
      { grade: 'S+', score: '3.500+', accuracy: '95 %+' },
      { grade: 'S', score: '2.200+', accuracy: '90 %+' },
      { grade: 'A', score: '1.400+', accuracy: '85 %+' },
      { grade: 'B', score: '700+', accuracy: '80 %+' },
      { grade: 'C', score: '300+', accuracy: '75 %+' },
      { grade: 'D', score: '100+', accuracy: '65 %+' },
    ],
  },
  protocols: {
    title: 'Trainingstipps',
    description: 'Weniger Fehler, bessere Werte.',
    items: [
      {
        title: 'Tasten in Zonen denken',
        description: 'Bewegung (WASD), Fähigkeiten (Q, E, C, X) und Zahlenreihe (1–4) als Zonen merken. So findest du den richtigen Finger schneller.',
      },
      {
        title: 'Bei Fakes stoppen',
        description: 'Wer drückt, bevor er hinsieht, verliert ständig die Combo. Erst die Art des Prompts erkennen, dann drücken.',
      },
      {
        title: 'Folgen als Block tippen',
        description: 'Eine Folge aus 2–5 Tasten als ein Muster merken und am Stück drücken (Sternberg, 1966).',
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
  title: 'Tastatur-Reaktionszeit testen',
  subtitle: 'Angezeigte Tasten drücken: Keybind-Reaktionstraining für Spieler',
};

export default function GermanKeyboardRecognitionPage() {
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
      <KeyboardRecognitionClient copy={deCopy} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
    </>
  );
}
