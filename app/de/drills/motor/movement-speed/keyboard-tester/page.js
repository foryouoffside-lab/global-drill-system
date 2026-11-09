import Link from 'next/link';
import KeyboardTesterClient from '@/app/drills/motor/movement-speed/keyboard-tester/KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const URL = 'https://skilldrills.online/de/drills/motor/movement-speed/keyboard-tester';
const TITLE = 'Tastatur Test & Keyboard Tester online | SkillDrills';
const DESCRIPTION = 'Kostenloser Tastatur Test online: Drücke jede Taste, sieh event.key und event.code und prüfe Ghosting und Key Rollover. Funktioniert mit QWERTZ, ohne Download.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Tastatur Test', 'Keyboard Tester', 'Keyboard Test', 'Tastatur Tester', 'Tastatur Test online', 'Ghosting Test', 'QWERTZ'],
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: URL, siteName: 'SkillDrills', locale: 'de_DE' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: 'Wie teste ich meine Tastatur mit diesem Tastatur Test?',
    a: 'Klicke auf die Bildschirmtastatur, damit sie den Fokus hat, und drücke jede Taste einmal. Eine Taste leuchtet hell, solange sie gedrückt ist, und bleibt danach grün. Jede Taste, die nie grün wird, ist nicht im Browser angekommen. Der Zähler zeigt, wie viele Tasten der Darstellung du schon getestet hast.',
  },
  {
    q: 'Was ist Ghosting bei Tastaturen?',
    a: 'Ghosting bedeutet, dass die Tastatur eine Taste nicht meldet, weil schon mehrere andere gedrückt sind. Viele Tastaturen teilen sich Leitungen zwischen Tasten, deshalb lassen sich manche Kombinationen nicht gleichzeitig erkennen. Halte zum Prüfen die Kombination, die du wirklich nutzt, zum Beispiel W, A und Shift, und achte darauf, ob alle Tasten gleichzeitig aufleuchten.',
  },
  {
    q: 'Was bedeutet N-Key Rollover und was zeigt „Max. gleichzeitig“?',
    a: 'Rollover ist die Zahl der Tasten, die eine Tastatur gleichzeitig melden kann. N-Key Rollover heißt, dass jede Taste gleichzeitig gemeldet werden kann; viele Tastaturen sind über USB auf 6 Tasten oder bei bestimmten Kombinationen auf weniger begrenzt. Der Zähler „Max. gleichzeitig“ zeigt die höchste Zahl gleichzeitig gedrückter Tasten, die diese Seite gesehen hat. Das ist ein schneller Check, keine Labormessung: Browser, Betriebssystem und die Zahl deiner Finger begrenzen, was er anzeigen kann.',
  },
  {
    q: 'Warum werden manche Tasten im Browser nicht erkannt?',
    a: 'Einige Tasten werden abgefangen, bevor eine Webseite sie sieht. Die Windows- bzw. Command-Taste, Fn, viele Medien- und Helligkeitstasten sowie Kürzel wie Strg+W, Strg+T oder Alt+F4 verarbeitet das Betriebssystem oder der Browser. Druck (Print Screen) meldet sich oft erst beim Loslassen. Leuchtet eine dieser Tasten nicht auf, ist sie deshalb nicht kaputt; teste sie in einem Desktop-Programm.',
  },
  {
    q: 'Funktioniert der Test mit QWERTZ-Tastaturen?',
    a: 'Ja. Tasten werden nach ihrer physischen Position (event.code) erkannt, nicht nach dem Zeichen, das sie tippen. Deshalb passt jede QWERTZ-Taste auf die Bildschirmtastatur, und nach dem Drücken zeigt sie das Zeichen, das dein Layout erzeugt hat, also etwa Z statt Y oder Ö und Ü. Die Zeichnung ist aber eine US-ANSI-Tastatur: Die zusätzliche ISO-Taste neben der linken Shift-Taste (< > |, event.code IntlBackslash) fehlt darauf. Sie erscheint nur im Feld „Letzte Taste“ und zählt nicht zum Zähler.',
  },
  {
    q: 'Was bedeuten event.key, event.code und keyCode?',
    a: 'event.code bezeichnet die physische Taste (zum Beispiel KeyA), event.key das Zeichen oder die Aktion, die diese Taste mit deinem Layout und den Modifikatortasten erzeugt hat (zum Beispiel a, A oder q), und keyCode ist ein älterer Zahlencode, den Browser noch melden. location sagt, ob es die linke oder rechte Ausführung war, etwa linke oder rechte Shift-Taste, oder eine Ziffernblock-Taste.',
  },
  {
    q: 'Kann ich den Tastatur Test am Handy oder Tablet nutzen?',
    a: 'Nur mit angeschlossener physischer Tastatur. Bildschirmtastaturen melden keine physischen Tastencodes auf dieselbe Weise, deshalb braucht der Test eine USB- oder Bluetooth-Tastatur.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Motorik Training', item: 'https://skilldrills.online/de/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Bewegungsgeschwindigkeit', item: 'https://skilldrills.online/de/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Tastatur Test', item: URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'de-DE',
  name: 'Tastatur Test',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Browser mit JavaScript und physische Tastatur',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: 'Was prüft ein Tastatur Test?',
    paragraphs: [
      'Ein Tastatur Test zeigt, ob jede Taste deiner Tastatur beim Computer ankommt. Drückst du eine Taste, leuchtet sie auf der Zeichnung auf; nach dem Loslassen bleibt sie als getestet markiert, so fallen tote oder wackelige Tasten auf. Hältst du mehrere Tasten gleichzeitig, siehst du, ob die Tastatur sie zusammen melden kann. So zeigen sich Ghosting und Grenzen beim Key Rollover.',
      'Diese Seite hat keinen Timer und keine Punkte. Sie zeigt nur, was der Browser empfangen hat: den physischen Code der Taste, das erzeugte Zeichen, die Position und ob es eine automatische Wiederholung war. Nichts wird gespeichert oder gesendet.',
    ],
  },
  faqs: { title: 'Häufige Fragen zum Tastatur Test', items: FAQS },
};

const copy = {
  h1: 'Tastatur Test online – jede Taste prüfen',
  subtitle: 'Drücke eine beliebige Taste, um zu sehen, ob sie erkannt wird, und halte dann mehrere gleichzeitig, um Ghosting und Key Rollover zu prüfen',
  keysTested: 'Getestete Tasten',
  heldNow: 'Gerade gedrückt',
  maxHeld: 'Max. gleichzeitig',
  touchNote: 'Dieser Test braucht eine physische Tastatur. Bildschirmtastaturen melden keine physischen Tastencodes.',
  ariaLabel: 'Tastatur Test. Drücke Tasten, um sie zu testen; klicke daneben, um die Tastatur freizugeben.',
  listening: 'Bereit – drücke eine beliebige Taste',
  clickToStart: 'Klicke auf die Tastatur, um den Test zu starten',
  reset: 'Zurücksetzen',
  legendPressed: 'Gedrückt',
  legendTested: 'Getestet',
  legendUntested: 'Noch nicht gedrückt',
  lastKey: 'Letzte Taste',
  noKeyYet: 'Noch keine Taste gedrückt.',
  note: 'Tasten werden nach ihrer physischen Position (event.code) erkannt, daher funktionieren QWERTZ, AZERTY, JIS und andere Layouts; nach dem Drücken zeigt jede Taste das Zeichen, das dein Layout erzeugt hat. Die Zeichnung ist eine US-ANSI-Tastatur: Die ISO-Taste neben der linken Shift-Taste (< > |) fehlt darauf und erscheint nur unter „Letzte Taste“. Manche Tasten erreichen nie eine Webseite: Windows-/Command-Kürzel, Fn, viele Medientasten und Kürzel wie Strg+W oder Alt+F4 verarbeitet zuerst das Betriebssystem oder der Browser. Druck meldet sich oft erst beim Loslassen.',
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];

export default function GermanKeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient copy={copy} />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        Alle Tasten funktionieren? Dann trainiere mit ihnen: Der{' '}
        <Link href="/de/drills/motor/movement-speed/keyboard-recognition" className="text-cyan-300 underline underline-offset-2 hover:text-white">Test der Tastatur-Reaktionszeit</Link>{' '}
        misst, wie schnell du die angezeigte Taste triffst, und der{' '}
        <Link href="/de/drills/motor/movement-speed/rapid-tapping" className="text-cyan-300 underline underline-offset-2 hover:text-white">CPS Test</Link>{' '}
        zeigt, wie viele Klicks pro Sekunde du halten kannst.
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
