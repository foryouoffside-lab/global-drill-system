import ReactionChainClient from '@/app/drills/physical/reflex-training/reaction-chain/ReactionChainClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/reflex-training/reaction-chain';
const title = 'Overflicking stoppen | Flick-Stopp-Training | SkillDrills';
const description = 'Overflicking stoppen: Bremse den Cursor auf Zielen, die vom Bildrand heranfliegen. Jedes Durchrauschen oder verpasste Ziel kostet 1 Sekunde. Gratis im Browser.';

export const metadata = {
  title,
  description,
  keywords: ['Overflicking stoppen', 'Flick-Stopp-Training', 'Flick abbremsen', 'Cursor im Ziel stoppen', 'Overflick'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/reflex-training/reaction-chain') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'de_DE', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Start', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Physische Drills', item: 'https://skilldrills.online/de/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Overflicking stoppen', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Overflicking stoppen – Flick-Stopp-Training (Reaction Chain)',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Browser mit HTML5 Canvas und Pointer Lock, Maus',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  inLanguage: 'de',
  dateModified: '2026-11-10',
};

const faqs = [
  {
    q: 'Was übt das Flick-Stopp-Training?',
    a: 'Knoten fliegen geradlinig von einem der vier Bildränder herein. Du führst den Cursor auf einen Knoten und bringst ihn darin vollständig zum Stehen. Wer Overflicking stoppen will, braucht genau diesen letzten Bremsmoment – der Drill übt ihn isoliert.',
  },
  {
    q: 'Wie werden Punkte berechnet?',
    a: 'Ein Stopp im Knoten (Anzeige ARREST READY) bringt 50 Punkte × Combo-Multiplikator. Geklickt wird nicht. Ab 5 Stopps in Folge gilt 1,2x, ab 10 1,5x, ab 25 2,0x und ab 40 das Maximum von 3,0x.',
  },
  {
    q: 'Was passiert bei einem Fehler?',
    a: 'Fehler sind: durch einen Knoten hindurchrauschen, ohne zu stoppen, oder einen Knoten aus dem Bild fliegen lassen. Jeder Fehler zieht 1 Sekunde von der Restzeit ab und setzt den Multiplikator auf 1,0x zurück. Punkte werden nicht abgezogen. Die Zeitstrafe ist immer aktiv und lässt sich nicht abschalten.',
  },
  {
    q: 'Wann zählt ein Stopp?',
    a: 'Sobald sich der Cursor innerhalb des Knotens langsamer als 1,5 Pixel pro Frame bewegt. Ist er schneller, zählt der Kontakt als Durchrauschen. Das ist ein drillinterner Grenzwert.',
  },
  {
    q: 'Wie steigt die Schwierigkeit?',
    a: 'Das Level steigt mit der Punktzahl von 1 bis 10 (bei 250, 500, 1.000, 2.000, 3.500, 5.500, 8.000, 11.000 und 15.000 Punkten). Die Knotengeschwindigkeit wächst von 360 auf 1.800 px/s, gleichzeitig sind 1 bis 5 Knoten unterwegs, und der Knotenradius schrumpft von 15 auf 6 px.',
  },
  {
    q: 'Ist Stoppen schwerer als Losbewegen?',
    a: 'Viele empfinden es so, es gibt aber individuelle Unterschiede. Ein bekanntes Modell beschreibt Starten und Stoppen als Wettlauf zweier Prozesse (Logan & Cowan, 1984); kommt der Stopp zu spät, trägt der Schwung über das Ziel hinaus. Die Punktzahl misst keine Stopp-Reaktionszeit.',
  },
  {
    q: 'Werde ich dadurch in Valorant oder CS2 besser?',
    a: 'Das lässt sich nicht garantieren. Der Drill übt das Abbremsen auf dem Ziel, aber Empfindlichkeit, Bildschirm und Regeln im Spiel sind anders. Nutze ihn, um eigene Runden zu vergleichen.',
  },
  {
    q: 'Was brauche ich dafür?',
    a: 'Eine Maus. Nach dem Countdown wird Pointer Lock aktiviert und du steuerst nur über Mausbewegung; auf reinen Touch-Geräten startet der Drill nicht. Spiele mit deiner gewohnten DPI und Empfindlichkeit und vergleiche Änderungen unter gleichen Bedingungen.',
  },
  {
    q: 'Wo werden Ergebnisse gespeichert?',
    a: 'Bestwert, bester Multiplikator und höchstes Level liegen nur im lokalen Speicher deines Browsers und werden nicht an einen Server gesendet. Löschst du die Browserdaten, sind sie weg.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'So funktioniert das Flick-Stopp-Training',
  description: 'In vier Schritten den Cursor sauber im Ziel stoppen.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Grob annähern', text: 'Sobald ein Knoten erscheint, führe den Cursor zügig in seine Bahn.' },
    { '@type': 'HowToStep', position: 2, name: 'Vor dem Rand bremsen', text: 'Verlangsame kurz bevor du den Rand des Knotens erreichst.' },
    { '@type': 'HowToStep', position: 3, name: 'Im Ziel stoppen', text: 'Bring den Cursor im Knoten vollständig zum Stehen, bis ARREST READY erscheint.' },
    { '@type': 'HowToStep', position: 4, name: 'Serie halten', text: 'Stoppe Knoten für Knoten ohne Durchrauschen. Jeder Fehler kostet 1 Sekunde.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guideProps = {
  heading: 'Overflicking stoppen: Anleitung zum Flick-Stopp-Training',
  intro: [
    'Reaction Chain ist ein Browser-Drill, mit dem du Overflicking stoppen übst: Du bremst den Cursor auf Knoten, die vom Bildrand heranfliegen, und bringst ihn darin vollständig zum Stehen. Es gibt keinen Klick – gewertet wird nur der Stopp. Eine Runde dauert 45 Sekunden, jeder Fehler kostet 1 Sekunde.',
    'Ein bekanntes Modell beschreibt Starten und Stoppen als Wettlauf zweier Prozesse (Logan & Cowan, 1984). Schnelle Zielbewegungen bestehen aus einer groben Bewegung und einer feinen Korrektur (Woodworth, 1899), und je kleiner das Ziel, desto genauer muss der Stopp sein (Fitts, 1954).',
    'Vergleiche Ergebnisse auf derselben Maus, Empfindlichkeit und demselben Monitor; Bildwiederholrate und Eingabegerät beeinflussen die Verzögerung (Woods et al., 2015). Die Werte sind Übungsprotokolle und garantieren keine Spielleistung.',
  ],
  benchmarks: {
    title: 'Level und Schwierigkeit (Werte aus dem Spiel)',
    headers: ['Level', 'Ab Punkten', 'Knotentempo', 'Knoten gleichzeitig', 'Knotenradius'],
    rows: [
      ['1', '0', '360 px/s', '1', '15 px'],
      ['2', '250', '420 px/s', '1', '14 px'],
      ['3', '500', '500 px/s', '2', '13 px'],
      ['4', '1.000', '600 px/s', '2', '12 px'],
      ['5', '2.000', '720 px/s', '2', '11 px'],
      ['6', '3.500', '850 px/s', '3', '10 px'],
      ['7', '5.500', '1.000 px/s', '3', '9 px'],
      ['8', '8.000', '1.200 px/s', '4', '8 px'],
      ['9', '11.000', '1.450 px/s', '4', '7 px'],
      ['10', '15.000', '1.800 px/s', '5', '6 px'],
    ],
    note: 'Diese Werte sind im Code des Drills festgelegt. Keine Nutzerstatistik, keine Perzentile.',
  },
  techniques: {
    title: 'Vier Techniken für einen sauberen Stopp',
    items: [
      { name: 'Vor dem Rand bremsen', desc: 'Wer erst am Knotenrand abbremst, ist zu spät. Beginne kurz davor zu verlangsamen.', tips: 'Achte anfangs mehr auf ARREST READY als auf Punkte.' },
      { name: 'Locker stoppen', desc: 'Verkrampfte Finger und Handgelenke lassen den Cursor zittern. Bremse locker, als würdest du den Schwung auslaufen lassen.', tips: 'Mauspad und Gleitfüße verändern das Stoppgefühl – vergleiche nur mit gleichem Setup.' },
      { name: 'Nicht durchrauschen', desc: 'Schnelles Überfahren eines Knotens zählt nicht als Stopp, kostet 1 Sekunde und die Serie.', tips: 'Halte den Stopp einen Augenblick.' },
      { name: 'Keinen Knoten entkommen lassen', desc: 'Auch ein Knoten, der aus dem Bild fliegt, kostet 1 Sekunde. Bei mehreren Knoten zuerst den nächsten abarbeiten.', tips: 'Der Multiplikator erreicht erst nach 40 Stopps in Folge 3,0x – Ruhe zahlt sich aus.' },
    ],
  },
  steps: [
    'Klicke auf Start und warte, bis nach dem Countdown Pointer Lock aktiv ist.',
    'Führe den Cursor zügig in die Bahn des Knotens.',
    'Bremse kurz vor dem Rand und stoppe im Knoten vollständig.',
    'Sammle 45 Sekunden lang Stopps in Folge. Jeder Fehler kostet 1 Sekunde.',
  ],
  audience: 'FPS-Spieler, die ihr Overflicking mit gezielter Übung reduzieren möchten, und alle, die das Abbremsen der Maus üben wollen.',
  faqs: { title: 'Häufige Fragen', items: faqs },
  sources: pickSources('logan1984', 'woodworth1899', 'fitts1954', 'woods2015'),
};

export default function LocalizedReactionChainPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <ReactionChainClient
        copy={{
          title: 'Overflicking stoppen',
          subtitle: 'Cursor aufs Ziel führen und sauber stoppen',
          description: 'Eine schnelle Bewegung genau auf dem Ziel zu stoppen, fällt vielen schwerer, als sie zu starten. Ein bekanntes Modell beschreibt Starten und Stoppen als Wettlauf zweier Prozesse (Logan & Cowan, 1984); kommt der Stopp zu spät, trägt der Schwung über das Ziel hinaus. Probiere es auf den Knoten aus.',
          hudLabels: {
            score: 'Punkte',
            time: 'Restzeit',
            accuracy: 'Stopp-Quote',
            bestScore: 'Bestwert',
            getReady: 'Bereit machen',
          },
          resultLabels: {
            newBest: 'Neuer Rekord',
            points: 'Punkte',
            accuracy: 'Stopp-Quote',
            totalArrests: 'Stopps',
            maxCombo: 'Bester Multiplikator',
            peakLevel: 'Höchstes Level',
            playAgain: 'Nochmal',
          },
          rulesTitle: 'Regeln und Punktesystem',
          rulesItems: [
            { title: 'Stopp im Knoten (+50 Pkt.)', text: 'Bring den Cursor im Knoten vollständig zum Stehen (ARREST READY): 50 Punkte × Multiplikator. Geklickt wird nicht.' },
            { title: 'Multiplikator (max. 3,0x)', text: 'Ab 5 Stopps in Folge 1,2x, ab 10 1,5x, ab 25 2,0x, ab 40 3,0x.' },
            { title: 'Durchrauschen / Verpassen (-1 s)', text: 'Ohne Stopp durch einen Knoten fahren oder ihn aus dem Bild fliegen lassen kostet 1 Sekunde und setzt den Multiplikator auf 1,0x (keine Punktabzüge).' },
            { title: 'Level 1–10', text: 'Mit der Punktzahl steigen Knotentempo (bis 1.800 px/s) und Knotenzahl (bis 5); die Knoten werden kleiner.' },
          ],
          aboutTitle: 'Über das Flick-Stopp-Training',
          aboutSections: [
            { title: 'Nur das Stoppen üben', content: 'Reaction Chain isoliert das Abbremsen auf dem Ziel. Es gibt keinen Klick; Punkte gibt es nur, wenn der Cursor im Knoten vollständig steht.' },
            { title: 'Wettlauf zwischen Start und Stopp', content: 'Ein bekanntes Modell beschreibt Starten und Stoppen als Wettlauf zweier Prozesse (Logan & Cowan, 1984). Kommt der Stopp zu spät, schießt der Cursor übers Ziel. Eine Wirkung des Drills ist nicht belegt; er dient dem Vergleich eigener Runden.' },
          ],
          aboutCards: [
            { title: 'Für wen', desc: 'FPS-Spieler, die weniger überflicken wollen, und alle, die das Abbremsen der Maus üben möchten.', bgClass: 'bg-blue-600/30', iconClass: 'text-blue-400' },
            { title: 'Was du übst', desc: 'Bremszeitpunkt, Stoppen in kleinen Zielen und das Abfangen von Zielen, die quer durchs Bild fliegen.', bgClass: 'bg-emerald-600/30', iconClass: 'text-emerald-400' },
            { title: 'Stopp-Kriterium', desc: 'Langsamer als 1,5 Pixel pro Frame innerhalb des Knotens zählt als Stopp.', bgClass: 'bg-purple-600/30', iconClass: 'text-purple-400' },
          ],
        }}
      >
        <DrillGuide {...guideProps} />
        <RelatedDrills />
      </ReactionChainClient>
    </>
  );
}
