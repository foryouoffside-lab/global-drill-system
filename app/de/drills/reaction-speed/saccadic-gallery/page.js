import SaccadicGalleryWrapper from '@/app/drills/reaction-speed/saccadic-gallery/SaccadicGalleryWrapperLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/reaction-speed/saccadic-gallery';
const title = 'Augentraining Online · Blicksprünge trainieren | SkillDrills';
const description =
  'Kostenloses Augentraining online: Trainiere Blicksprünge zwischen Zielpunkten und klicke jedes Ziel präzise an. Treffer und Klickzeit im Browser.';

export const metadata = {
  title,
  description,
  keywords: [
    'augentraining',
    'augentraining online',
    'blicksprünge trainieren',
    'augenbewegungen trainieren',
    'sakkadentraining',
    'sakkadische augenbewegungen',
    'zielerfassung trainieren',
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/reaction-speed/saccadic-gallery'),
  },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title,
    description: 'Trainiere Blicksprünge zwischen Zielpunkten mit einem kostenlosen Augentraining im Browser.',
    type: 'article',
    url,
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title,
    description: 'Kostenloses Augentraining im Browser: Blicksprünge üben und Ziele präzise anklicken.',
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Startseite', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Drills Übersicht', item: 'https://skilldrills.online/de/drills' },
    { '@type': 'ListItem', position: 3, name: 'Reaktionsschnelligkeit', item: 'https://skilldrills.online/de/drills/reaction-speed' },
    { '@type': 'ListItem', position: 4, name: 'Augentraining Online · Blicksprünge trainieren', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  sameAs: ['https://en.wikipedia.org/wiki/Saccade'],
  name: 'Augentraining Online · Blicksprünge trainieren',
  alternateName: ['Augentraining online', 'Blicksprünge trainieren', 'Sakkadentraining'],
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Browser-Drill: Ziele erscheinen nacheinander an festen Rasterpunkten; du springst mit dem Blick hin und klickst. Gemessen werden Treffer und Zeit bis zum Klick.',
  browserRequirements: 'Moderner Webbrowser mit HTML5 Canvas und JavaScript-Unterstützung',
  inLanguage: 'de',
  dateModified: '2026-11-08',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Augentraining Online · Blicksprünge trainieren | SkillDrills',
  url,
  description: 'Kostenloses Augentraining im Browser: Blicksprünge zwischen Zielpunkten üben und Ziele präzise anklicken.',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Erfordert einen modernen Webbrowser mit JavaScript.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  inLanguage: 'de',
  dateModified: '2026-11-08',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Augentraining - Blicksprünge trainieren',
  url,
  description: 'Schnelle Blickwechsel zwischen Zielen üben und jedes Ziel präzise anklicken, direkt im Browser.',
  genre: ['Action', 'Aim Trainer'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'de',
  dateModified: '2026-11-08',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Anleitung: Blicksprünge im Augentraining üben',
  description: 'Vier Schritte, um Blicksprünge zu Zielen zu üben und sie präzise anzuklicken.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Sitzposition einnehmen', text: 'Setz dich in etwa 50–70 cm Abstand vor den Bildschirm und richte den Blick auf die Bildschirmmitte.' },
    { '@type': 'HowToStep', position: 2, name: 'Ziel bemerken', text: 'Halte den Kopf ruhig und bemerke das rote Ziel, sobald es an einem Rasterpunkt erscheint.' },
    { '@type': 'HowToStep', position: 3, name: 'Blick springen lassen', text: 'Führe den Blick in einem Sprung zum Ziel, bevor die Hand nachzieht.' },
    { '@type': 'HowToStep', position: 4, name: 'Präzise klicken', text: 'Klicke das Ziel an (auf dem Handy antippen) und prüfe danach dein Ergebnis.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    q: 'Was macht dieses Augentraining genau?',
    a: 'Ziele erscheinen einzeln an festen Rasterpunkten (am PC 4×3, auf dem Handy 3×3), nie zweimal hintereinander am selben Punkt. Du springst mit dem Blick hin und klickst. Geübt werden schnelle Blickwechsel (Sakkaden) und das Anklicken. Es ist ein Browser-Spiel.',
  },
  {
    q: 'Wie funktionieren Zeit und Punkte?',
    a: 'Du startest mit 45 Sekunden; jeder Treffer gibt 2 Sekunden dazu (maximal 60). Ein Treffer bringt 100 Punkte mal Combo-Multiplikator (bis 3,0x) und Levelbonus. Mit steigendem Level werden die Ziele kleiner und bleiben kürzer sichtbar. Ein Fehlklick setzt die Combo zurück; 1 Sekunde Abzug gibt es nur, wenn du die Zeitstrafe in den Einstellungen einschaltest. Gespielt wird mit Maus oder Touch.',
  },
  {
    q: 'Was ist eine Sakkade?',
    a: 'Eine Sakkade ist ein schneller Blicksprung beider Augen von einem Fixationspunkt zum nächsten. Sie dauert nur einige zehn Millisekunden; bei großen Sprüngen erreicht die Spitzengeschwindigkeit mehrere hundert Grad pro Sekunde (Leigh & Zee, 2015). Beim Lesen und beim Absuchen eines Bildschirms passieren Sakkaden ständig (Rayner, 1998).',
  },
  {
    q: 'Was sind Express-Sakkaden?',
    a: 'Unter bestimmten Bedingungen treten Sakkaden mit sehr kurzer Latenz um etwa 100 ms auf; sie werden Express-Sakkaden genannt (Fischer & Weber, 1993). Dieser Drill misst keine Augenlatenz und kann Express-Sakkaden daher nicht erkennen.',
  },
  {
    q: 'Misst der Drill meine Augenbewegungen?',
    a: 'Nein. Der Browser kennt deine Blickposition nicht, er erfasst nur Zeitpunkt und Ort des Klicks. Im Ergebnis stecken neben dem Blicksprung auch Handbewegung, Mausverzögerung und Bildwiederholrate. Es ist keine Sakkadenlatenz.',
  },
  {
    q: 'Hilft das Training in Shootern?',
    a: 'Das Absuchen von Ecken, der Blick auf die Minimap und das Erfassen plötzlich auftauchender Gegner ähneln dieser Aufgabe. Ob sich deine Leistung im Spiel verbessert, hängt aber auch von Aim, Spielverständnis und Hardware ab und ist nicht garantiert.',
  },
  {
    q: 'Welche Rolle spielt die Bildwiederholrate des Monitors?',
    a: 'Der Abstand zwischen zwei Bildern beträgt 1000 geteilt durch die Bildwiederholrate: bei 60 Hz etwa 16,7 ms, bei 144 Hz etwa 6,9 ms, bei 240 Hz etwa 4,2 ms. Dadurch kann sich der Zeitpunkt, an dem ein Ziel sichtbar wird, leicht verschieben (Woods et al., 2015). Wie stark das deine Punktzahl hier beeinflusst, wurde nicht gemessen; vergleiche daher nur Durchgänge am selben Gerät.',
  },
  {
    q: 'Kann das Training die Lesegeschwindigkeit steigern?',
    a: 'Beim Lesen springt der Blick zwar von Wort zu Wort, aber ein Bildschirmspiel ist keine Leseübung. Eine schnellere Lesegeschwindigkeit ist nicht belegt.',
  },
  {
    q: 'Wie oft sollte ich üben?',
    a: 'Kurze Blöcke von 5 bis 10 Minuten mit Pausen reichen. Wenn die Augen müde oder trocken werden, hör auf, blinzle bewusst und schau in die Ferne. Länger ist nicht automatisch besser.',
  },
  {
    q: 'Ist das Augentraining kostenlos? Wo werden Ergebnisse gespeichert?',
    a: 'Ja, kostenlos, ohne Installation und ohne Konto. Dein Highscore liegt im lokalen Speicher deines Browsers und wird von diesem Drill nicht an einen Server gesendet. Löschst du die Browserdaten, ist auch der Highscore weg.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  dateModified: '2026-11-08',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const saccadicGuide = {
  heading: 'Leitfaden: Augentraining mit Blicksprüngen',
  intro: [
    'Bei diesem Augentraining erscheinen Ziele nacheinander an verschiedenen Stellen des Bildschirms. Du führst den Blick in einem Sprung zum Ziel und klickst es an. Solche schnellen Blicksprünge heißen Sakkaden; sie passieren ständig beim Lesen und beim Absuchen eines Bildes (Rayner, 1998).',
    'Während einer Sakkade wird die visuelle Verarbeitung abgeschwächt, und landet der Blick neben dem Ziel, folgt eine kleine Korrektur (Leigh & Zee, 2015). Deshalb lohnt es sich, zuerst auf eine saubere Landung statt auf reines Tempo zu achten.',
    'Grenzen der Messung: Der Browser kennt deine Blickposition nicht und erfasst nur Zeitpunkt und Ort des Klicks. Im Ergebnis stecken Handbewegung, Mausverzögerung und Bildintervall (etwa 16,7 ms bei 60 Hz, 6,9 ms bei 144 Hz, 4,2 ms bei 240 Hz; Woods et al., 2015). Es ist keine Sakkadenlatenz und keine Aussage über die Augengesundheit.',
    'Übe am selben Gerät, mit gleichem Abstand und gleicher Haltung und vergleiche nur deine eigenen Durchgänge.',
  ],
  benchmarks: {
    title: 'Übungsstufen zur Orientierung',
    headers: ['Stufe', 'Übungsziel', 'Worauf achten'],
    rows: [
      ['Stufe 1', 'Kein Ziel verpassen', 'Ein Gefühl für präzise Klicks bekommen'],
      ['Stufe 2', 'Blick in einem Sprung führen', 'Sofort nach dem Erscheinen hinschauen'],
      ['Stufe 3', 'Klickrhythmus halten', 'Ruhiges, gleichmäßiges Tempo statt Hektik'],
      ['Stufe 4', 'Schneller bei gleicher Genauigkeit', 'Überschießen und Nachkorrigieren reduzieren'],
      ['Stufe 5', 'Längere Durchgänge halten', 'Vor der Ermüdung pausieren, gleiche Bedingungen vergleichen'],
    ],
    note: 'Diese Tabelle ist eine Übungsorientierung von SkillDrills. Sie enthält keine Reaktionszeit-Normen, Nutzerstatistiken oder Perzentile.',
  },
  techniques: {
    title: 'Tipps für sauberere Blicksprünge',
    items: [
      { name: 'Kopf ruhig, nur die Augen bewegen', desc: 'Dreh den Kopf nicht mit, sondern lass nur die Augen springen. Eine feste Haltung macht Durchgänge auch besser vergleichbar.', tips: 'Prüf zwischendurch, ob sich der Kopf unbemerkt mitbewegt.' },
      { name: 'Weicher Blick auf die Mitte', desc: 'Starr nicht auf einen Punkt, sondern lass den Blick locker auf der Bildschirmmitte ruhen, dann fällt ein neues Ziel schneller auf.', tips: 'Den ganzen Bildschirm im Blick behalten.' },
      { name: 'In einem Sprung landen', desc: 'Springt der Blick zu kurz oder zu weit, musst du nachkorrigieren. Ziel ist eine Landung direkt auf dem Zielzentrum.', tips: 'Präzision geht vor Hast.' },
      { name: 'Augen entspannen', desc: 'Bei konzentrierter Bildschirmarbeit blinzelt man seltener, die Augen werden trocken.', tips: 'Zwischen den Durchgängen bewusst blinzeln und in die Ferne schauen.' },
    ],
  },
  steps: [
    'Setz dich in etwa 50–70 cm Abstand mittig vor den Bildschirm.',
    'Starte den Drill und richte den Blick auf die Bildschirmmitte.',
    'Erscheint ein Ziel, springst du zuerst mit den Augen hin.',
    'Klicke das Ziel an (auf dem Handy antippen).',
    'Nach Ablauf der Zeit Genauigkeit, durchschnittliche Reaktion, höchstes Level und maximale Combo prüfen.',
  ],
  audience: 'Für alle, die schnelle Blickwechsel spielerisch üben wollen, für FPS-Spieler und Ballsport-Fans.',
  faqs,
  sources: pickSources('rayner1998', 'fischer1993', 'leigh2015', 'woods2015'),
  related: [
    { href: '/de/drills/reaction-speed', label: 'Reaktionsschnelligkeit Hub' },
    { href: '/de/drills/visual/reaction-speed/light-reaction', label: 'Reaktionstest (Reaktionszeit Test)' },
    { href: '/de/drills/reaction-speed/reflex-training-drill', label: 'Reflextraining & Reaktionsspiel' },
    { href: '/de/drills/reaction-speed/visual-tracking-speed-test', label: 'Visueller Reaktionstest' },
  ],
};

export default function GermanSaccadicGalleryPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SaccadicGalleryWrapper copy={{ title: 'Augentraining Online · Blicksprünge trainieren', subtitle: 'Blicksprünge · Schnelle Zielerfassung', caption: 'Führe den Blick schnell zwischen Zielen und klicke jedes präzise an.' }} />
      <DrillGuide guide={saccadicGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
