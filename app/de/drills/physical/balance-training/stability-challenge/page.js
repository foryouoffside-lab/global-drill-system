import StabilityChallengeClient from '@/app/drills/physical/balance-training/stability-challenge/StabilityChallengeClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/balance-training/stability-challenge';
const title = 'Maus-Stabilitätstest: Fadenkreuz im Ring halten | SkillDrills';
const description = 'Kostenloser Maus-Stabilitätstest: Ein wechselnder Wind schiebt dein Fadenkreuz weg. Gleiche die Drift 45 Sekunden lang aus und bleib im schrumpfenden Ring.';

export const metadata = {
  title,
  description,
  keywords: ['Maus-Stabilitätstest', 'Fadenkreuz im Ring halten', 'Wind-Drift ausgleichen', 'Cursor-Stabilität', 'Maus Stabilität Spiel'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/balance-training/stability-challenge') },
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
    { '@type': 'ListItem', position: 3, name: 'Maus-Stabilitätstest', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Maus-Stabilitätstest',
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
    q: 'Was ist der Maus-Stabilitätstest?',
    a: 'In der Bildmitte liegt ein Sicherheitsring. Eine Art Wind schiebt dein Fadenkreuz ständig nach außen, und du gleichst die Drift mit der Maus aus, um 45 Sekunden lang im Ring zu bleiben. Es ist ein Drill für Cursor-Stabilität.',
  },
  {
    q: 'Wie werden Punkte vergeben?',
    a: 'Solange das Fadenkreuz im Ring ist, steigt die Combo alle 0,15 Sekunden um 1 und du erhältst 15 Punkte × Combo-Multiplikator. Der Multiplikator beginnt bei Combo 3 mit 1,1x und erreicht bei Combo 50 das Maximum von 3,0x. Klicken ist nicht nötig.',
  },
  {
    q: 'Was passiert, wenn ich aus dem Ring gedrückt werde?',
    a: 'Die Combo fällt auf 0 und ein roter Blitz erscheint (per Schalter im Spiel abschaltbar). Punkte und Zeit werden nicht abgezogen. Sobald du wieder im Ring bist, baust du die Combo neu auf.',
  },
  {
    q: 'Wie steigt die Schwierigkeit?',
    a: 'Das Level steigt alle 250 Punkte und zusätzlich bei langen Serien im Ring, ohne Obergrenze. Der Ring schrumpft von 45 px bis auf mindestens 16 px, und die Windstärke beginnt bei 250 und wächst weiter (850 auf Level 15).',
  },
  {
    q: 'Misst der Test Gleichgewicht oder Gesundheit?',
    a: 'Nein. Es ist ein Mausspiel und misst oder diagnostiziert weder Gleichgewicht noch Gesundheitszustand. Wenn dich körperliche Beschwerden beunruhigen, wende dich an medizinisches Fachpersonal.',
  },
  {
    q: 'Wie wird die Note berechnet?',
    a: 'Deine Endpunktzahl wird mit einem SkillDrills-Referenzwert von 17.000 Punkten verglichen. Ungefähr ab 9.563 Punkten gibt es A, ab 12.283 S und ab 15.342 S+. Das sind Übungsstufen, keine Nutzerstatistik und keine Perzentile.',
  },
  {
    q: 'Hilft mir das in Shootern?',
    a: 'Das lässt sich nicht garantieren. Du übst kleine, laufende Korrekturen gegen eine Drift, aber Rückstoßmuster und Empfindlichkeit im Spiel sind anders. Ein Transfer ist nicht belegt.',
  },
  {
    q: 'Funktioniert der Test auf dem Handy?',
    a: 'Nein, er braucht eine Maus und Pointer Lock und startet nicht auf reinen Touch-Geräten. Mit der Escape-Taste beendest du den Drill und kehrst zum Startbildschirm zurück.',
  },
  {
    q: 'Wo werden meine Ergebnisse gespeichert?',
    a: 'Bestwert, beste Combo und höchstes Level werden nur im lokalen Speicher deines Browsers abgelegt. Der Test ist kostenlos und ohne Anmeldung.',
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
  name: 'So funktioniert der Maus-Stabilitätstest',
  description: 'In vier Schritten das Fadenkreuz gegen den Wind im Ring halten.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Starten', text: 'Nach dem Start läuft ein 3-Sekunden-Countdown, danach wird Pointer Lock aktiviert.' },
    { '@type': 'HowToStep', position: 2, name: 'Drift lesen', text: 'Beobachte, wohin das Fadenkreuz gedrückt wird, und bewege die Maus leicht in die Gegenrichtung.' },
    { '@type': 'HowToStep', position: 3, name: 'Im Ring bleiben', text: 'Je länger du im Ring bleibst, desto höher steigen Combo und Multiplikator.' },
    { '@type': 'HowToStep', position: 4, name: 'Auf den kleineren Ring reagieren', text: 'Mit steigendem Level wird der Ring kleiner und der Wind stärker – korrigiere früher und feiner.' },
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const guide = {
  heading: 'Maus-Stabilitätstest: Anleitung',
  intro: [
    'Beim Maus-Stabilitätstest schiebt ein Wind mit zufällig wechselnder Richtung dein Fadenkreuz aus der Bildmitte. Du gleichst die Wind-Drift mit der Maus aus und hältst das Fadenkreuz im Ring. Eine Runde dauert fest 45 Sekunden.',
    'Schnelle Zielbewegungen werden als grobe Bewegung mit anschließender, visuell gesteuerter Feinkorrektur beschrieben (Woodworth, 1899). Dieser Drill lässt dich diese Feinkorrektur ohne Pause wiederholen; je kleiner der Ring, desto genauer muss sie sein (Fitts, 1954).',
    'Es ist ein Spiel für Cursor-Stabilität und misst weder Gleichgewicht noch Gesundheit. Vergleiche deine Ergebnisse nur mit eigenen Runden auf derselben Maus, Empfindlichkeit und demselben Monitor; Bildwiederholrate und Polling-Rate beeinflussen die Eingabeverzögerung (Woods et al., 2015).',
  ],
  benchmarks: {
    title: 'SkillDrills-Übungsstufen',
    headers: ['Note', 'Punkte', 'Anzeige'],
    rows: [
      ['S+', 'ab 15.342', 'LEGENDARY'],
      ['S', '12.283 – 15.341', 'Elite'],
      ['A', '9.563 – 12.282', 'Excellent'],
      ['B', '6.120 – 9.562', 'Great'],
      ['C', '3.443 – 6.119', 'Good'],
      ['D', '1.530 – 3.442', 'Keep Going'],
      ['F', 'unter 1.530', 'Needs Practice'],
    ],
    note: 'Die Noten vergleichen die Endpunktzahl mit dem Referenzwert von 17.000 Punkten. Es sind SkillDrills-Übungsstufen, keine Nutzerstatistik, keine Perzentile und keine medizinischen Normen.',
  },
  techniques: {
    title: 'Vier Tipps, um länger im Ring zu bleiben',
    items: [
      { name: 'Aus der Mitte starten', desc: 'Während des Countdowns steht das Fadenkreuz in der Mitte. Mach zu Beginn keine großen Bewegungen, sondern lies zuerst die Drift.', tips: 'Die ersten Sekunden gehören der Richtung, nicht den Punkten.' },
      { name: 'Früh und klein korrigieren', desc: 'Wer erst am Ringrand kräftig zurückzieht, schießt leicht auf die andere Seite. Korrigiere, sobald die Drift einsetzt.', tips: 'Achte auf den Abstand zwischen Ringmitte und Fadenkreuz.' },
      { name: 'Auf Windwechsel gefasst sein', desc: 'Die Windrichtung wechselt zufällig und dreht dann allmählich. Bleib locker, damit die Korrektur nicht plötzlich zu groß wird.', tips: 'Verkrampfte Hand und Unterarm machen das Fadenkreuz unruhiger.' },
      { name: 'Die Combo schützen', desc: 'Der Multiplikator erreicht bei Combo 50 sein Maximum von 3,0x. Jeder Austritt setzt die Combo auf 0, daher bringt ruhiges Halten mehr als hektische Korrekturen.', tips: 'Die Zahl der Austritte steht im Ergebnis unter Blowouts.' },
    ],
  },
  steps: [
    'Starte mit deiner gewohnten Maus und Empfindlichkeit.',
    'Bewege die Maus leicht entgegen der Richtung, in die das Fadenkreuz gedrückt wird.',
    'Bleib im Ring und baue Combo und Multiplikator auf.',
    'Prüfe nach 45 Sekunden Note, Stabilität in %, Austritte und höchstes Level.',
  ],
  audience: 'Spieler, die üben wollen, ein Fadenkreuz gegen eine Drift ruhig zu halten, und alle, die ihre Cursor-Stabilität spielerisch ausprobieren möchten.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'woods2015'),
};

export default function StabilityChallengeDePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <StabilityChallengeClient
        copy={{
          title: 'Maus-Stabilitätstest',
          hudLabels: {
            score: 'Punkte',
            time: 'Zeit',
            getReady: 'Bereit machen',
            points: 'Punkte',
            stability: 'Stabilität',
            blowouts: 'Austritte',
            maxStreak: 'Beste Combo',
            peakLevel: 'Höchstes Level',
            playAgain: 'Nochmal',
          },
          rulesTitle: 'Regeln und Punktesystem',
          rulesItems: [
            { title: 'Im Sicherheitsring bleiben', text: 'Ein Wind mit zufällig wechselnder Richtung schiebt das Fadenkreuz weg. Gleiche die Drift mit der Maus aus und bleib im Ring.' },
            { title: 'Combo-Multiplikator (max. 3,0x)', text: 'Im Ring steigt die Combo alle 0,15 s und bringt 15 Punkte × Multiplikator. Bei Combo 50 sind es 3,0x.' },
            { title: 'Level-Aufstieg', text: 'Alle 250 Punkte und bei langen Serien steigt das Level. Der Ring schrumpft bis 16 px, der Wind wird immer stärker.' },
            { title: 'Austritt', text: 'Wer aus dem Ring gedrückt wird, verliert die Combo (zurück auf 0). Punkte und Zeit werden nicht abgezogen.' },
          ],
        }}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
    </>
  );
}
