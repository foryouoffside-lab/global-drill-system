import Link from 'next/link';
import KeyboardTesterClient from './KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const URL = 'https://skilldrills.online/drills/motor/movement-speed/keyboard-tester';
const TITLE = 'Keyboard Tester – Test Every Key Online | SkillDrills';
const DESCRIPTION = 'Free online keyboard tester. Press any key to check it registers, see event.key and event.code, and check ghosting and key rollover. No download.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['keyboard tester', 'keyboard test', 'key tester', 'keyboard ghosting test', 'n-key rollover test', 'test keyboard keys online'],
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: URL, siteName: 'SkillDrills', locale: 'en_US' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: 'How do I test my keyboard with this tester?',
    a: 'Click the on-screen keyboard so it has focus, then press each key once. A key turns bright while held and stays green after release, so any key that never turns green did not reach the browser. The counter shows how many of the keys on the layout you have tested so far.',
  },
  {
    q: 'What is keyboard ghosting?',
    a: 'Ghosting is when a keyboard fails to report a key because several other keys are already held. Many keyboards share wiring between keys, so certain combinations cannot be detected together. To check it, hold the combination you actually use, for example W, A and Shift, and see whether every key lights up at the same time.',
  },
  {
    q: 'What does N-key rollover mean, and how does the "max held at once" counter relate to it?',
    a: 'Rollover is the number of keys a keyboard can report simultaneously. N-key rollover means every key can be reported at once; many keyboards are limited to 6 keys over USB or fewer on specific combinations. The "max held at once" counter shows the highest number of keys this page saw down together. It is a quick check, not a lab measurement: the browser, the operating system and how many fingers you have all limit what it can show.',
  },
  {
    q: 'Why do some keys not register in a browser keyboard test?',
    a: 'Some keys are handled before a web page ever sees them. The Windows or Command key, Fn, many media and brightness keys, and shortcuts such as Ctrl+W, Ctrl+T or Alt+F4 are taken by the operating system or the browser. Print Screen often reports only on release. If one of these does not light up, that does not mean the key is broken; test it in a desktop app instead.',
  },
  {
    q: 'Does this keyboard tester work with AZERTY, QWERTZ or JIS layouts?',
    a: 'Yes. Keys are matched by their physical position (event.code), not by the character they type, so every physical layout maps onto the on-screen keyboard. After you press a key, it shows the character your layout produced. The drawing itself is a US ANSI keyboard, so keys that only exist on other layouts, such as the extra JIS keys, appear in the last-key panel rather than on the drawing.',
  },
  {
    q: 'What do event.key, event.code and keyCode mean?',
    a: 'event.code identifies the physical key (for example KeyA), event.key is the character or action that key produced with your layout and modifiers (for example a, A or q), and keyCode is an older numeric code browsers still report. Location tells you whether the key was the left or right copy, such as left Shift versus right Shift, or a numpad key.',
  },
  {
    q: 'Can I use this tester on a phone or tablet?',
    a: 'Only with a physical keyboard attached. On-screen touch keyboards do not report physical key codes in the same way, so the test needs a USB or Bluetooth keyboard.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/' },
    { '@type': 'ListItem', position: 2, name: 'Motor Training', item: 'https://skilldrills.online/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Movement Speed', item: 'https://skilldrills.online/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Keyboard Tester', item: URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Keyboard Tester',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires JavaScript and a physical keyboard',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: 'What Does a Keyboard Tester Check?',
    paragraphs: [
      'A keyboard tester shows whether each key on your keyboard reaches the computer. Press a key and it lights up on the drawing; release it and it stays marked as tested, so dead or intermittent keys stand out. Holding several keys together shows whether the keyboard can report them at the same time, which is how ghosting and key rollover limits show up.',
      'This page has no timer and no score. It only reports what the browser received: the key\'s physical code, the character it produced, its location and whether it was an auto-repeat. Nothing is recorded or sent anywhere.',
    ],
  },
  faqs: { title: 'Keyboard Tester FAQ', items: FAQS },
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];

export default function KeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        Every key working? Practise with them next: the{' '}
        <Link href="/drills/motor/movement-speed/keyboard-recognition" className="text-cyan-300 underline underline-offset-2 hover:text-white">keyboard speed test</Link>{' '}
        times how fast you hit the right key on a prompt, and the{' '}
        <Link href="/drills/motor/movement-speed/rapid-tapping" className="text-cyan-300 underline underline-offset-2 hover:text-white">CPS test</Link>{' '}
        measures how many clicks per second you can sustain.
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
