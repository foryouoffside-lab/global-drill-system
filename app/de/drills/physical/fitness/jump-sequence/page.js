import JumpSequenceClient from '@/app/drills/physical/fitness/jump-sequence/JumpSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/de.md)
// Primary: Sprung-Zielspiel (no-demand descriptive).
// Deleted the dead base title and override claiming Sprungkraft / Plyometrik:
// this is a charge-release-steer mouse game, not jump training.
// ============================================================

const TITLE = 'Sprung-Zielspiel: aufladen, springen, steuern | SkillDrills';
const DESCRIPTION = 'Kostenloses Sprung-Zielspiel: Maustaste halten zum Aufladen, loslassen zum Abspringen und in der Luft auf ein bewegtes Ziel lenken. 45 Sekunden pro Runde.';
const URL = 'https://skilldrills.online/de/drills/physical/fitness/jump-sequence';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Sprung-Zielspiel', 'Sprungspiel Maus', 'Timing-Spiel', 'aufladen abspringen steuern', 'Browserspiel kostenlos'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/jump-sequence'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Körperliches Training", "item": "https://skilldrills.online/de/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Sprung-Zielspiel", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Sprung-Zielspiel",
  "description": "Kostenloses 45-Sekunden-Browserspiel: aufladen, abspringen und in der Luft auf ein bewegtes Ziel lenken.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Aktueller Browser mit HTML5 Canvas und Maus",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": URL,
  "inLanguage": "de",
  "dateModified": "2026-11-10"
};

const FAQS = [
  {
    q: "Was ist das Sprung-Zielspiel?",
    a: "Ein kostenloses Browserspiel: Du lädst den Punkt am Boden (deine Spielfigur) auf, lässt ihn abspringen und lenkst ihn in der Luft auf ein Ziel, das über den Bildschirm treibt. Eine Runde dauert 45 Sekunden."
  },
  {
    q: "Wie steuere ich?",
    a: "Fadenkreuz auf die Spielfigur am Boden legen und die Maustaste gedrückt halten: Der Sprung lädt sich auf (nach etwa 1 Sekunde voll). Loslassen, und die Figur springt senkrecht nach oben; in der Luft folgt sie der waagerechten Position der Maus. Mit Escape beendest du den Drill."
  },
  {
    q: "Wie werden Punkte und Combo berechnet?",
    a: "Berührt die Figur in der Luft das Ziel, ist es ein Treffer. Ein Treffer bringt auf Level 1 5 Grundpunkte, mit steigendem Level mehr, multipliziert mit dem Combo-Multiplikator der Trefferserie (maximal 3,0x ab 50 Treffern in Folge)."
  },
  {
    q: "Was ändert sich mit steigendem Level?",
    a: "Alle 250 Punkte steigt das Level um 1, dazu alle 4 Treffer in Serie ein Bonuslevel. Das Ziel fliegt anfangs mit 120 px/s, auf Level 15 mit etwa 800 px/s (bei langer Serie bis 900 px/s) und danach immer schneller. Sein Radius schrumpft von 35 px auf 12 px."
  },
  {
    q: "Was passiert, wenn ich das Ziel verfehle?",
    a: "Landet die Figur, ohne das Ziel berührt zu haben, werden Trefferserie und Combo zurückgesetzt und es gibt einen roten Blitz. Punkte und Restzeit bleiben, und ein neues Ziel erscheint."
  },
  {
    q: "Hat das Spiel einen echten Trainingseffekt?",
    a: "Nein. Es ist ein Timing-Spiel, bei dem du Ladedauer und Flugrichtung mit der Maus steuerst. Es misst und trainiert weder Sprunghöhe noch Beinkraft und verspricht keinen Trainingseffekt."
  },
  {
    q: "Wie wird die Note am Ende vergeben?",
    a: "Die Note hängt nur von der Endpunktzahl ab: ab 15.343 S+, ab 12.283 S, ab 9.563 A, ab 6.120 B, ab 3.443 C, ab 1.530 D, darunter F. Das sind SkillDrills-Übungsstufen, keine Vergleichsstatistik mit anderen Spielern."
  },
  {
    q: "Wo werden meine Ergebnisse gespeichert?",
    a: "Bestwert, beste Combo und höchstes Level werden nur im localStorage deines Browsers gespeichert und nicht an einen Server gesendet. Ohne Anmeldung und ohne Installation kostenlos spielbar."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de",
  "dateModified": "2026-11-10",
  "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const STEPS = [
  "Auf Start klicken und nach dem Countdown (3-2-1) das Fadenkreuz auf die Spielfigur am Boden legen.",
  "Die Höhe des Ziels abschätzen, Maustaste gedrückt halten zum Aufladen und loslassen.",
  "In der Luft die Maus nach links oder rechts bewegen und die Figur dorthin lenken, wo das Ziel vorbeikommt.",
  "45 Sekunden lang Treffer aneinanderreihen und so den Combo-Multiplikator hochtreiben."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So spielst du das Sprung-Zielspiel",
  "description": "Aufladen, abspringen und in der Luft auf ein bewegtes Ziel lenken.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Schritt ${i + 1}`, "text": text }))
};

const jumpGuide = {
  heading: "Sprung-Zielspiel: Anleitung",
  intro: [
    "Beim Sprung-Zielspiel kommt es auf zwei Dinge an: wie lange du auflädst und wohin du in der Luft lenkst. Je länger die Maustaste gedrückt bleibt, desto höher der Sprung; in der Luft folgt die Figur der waagerechten Mausposition. Das Ziel treibt über den Bildschirm und prallt an den Rändern ab.",
    "Eine Runde dauert 45 Sekunden. Jeder Treffer bringt Punkte und verlängert die Serie; mit steigendem Level wird das Ziel schneller und kleiner. Wer landet, ohne zu treffen, verliert nur die Combo, nicht Punkte oder Zeit.",
    "Um ein bewegtes Ziel zu treffen, muss man den Treffpunkt vorhersagen, nicht die aktuelle Position anpeilen (Lee, 1976). Eine solche Bewegung besteht aus einem vorgeplanten Hauptteil und einer Korrektur am Ende (Woodworth, 1899). Das Spiel übt dieses Timing mit der Maus und hat mit echten Sprüngen nichts zu tun."
  ],
  benchmarks: {
    title: "Notenstufen (SkillDrills-Übungsstufen)",
    headers: ["Note", "Endpunktzahl"],
    rows: [
      ["S+", "ab 15.343"],
      ["S", "12.283 – 15.342"],
      ["A", "9.563 – 12.282"],
      ["B", "6.120 – 9.562"],
      ["C", "3.443 – 6.119"],
      ["D", "1.530 – 3.442"],
      ["F", "unter 1.530"]
    ],
    note: "Aus der Notenformel des Spiels berechnete SkillDrills-Übungsstufen; keine Vergleichsstatistik und keine Perzentile."
  },
  techniques: {
    title: "Tipps für mehr Punkte",
    items: [
      { name: "Nur so viel aufladen wie nötig", desc: "Wer immer voll auflädt, springt über das Ziel hinaus. Brich das Aufladen passend zur Höhe des Ziels ab.", tips: "Ladebalken und Zielhöhe vergleichen." },
      { name: "Vorausschauend lenken", desc: "Nicht dem Ziel hinterherfahren, sondern die Maus dorthin bewegen, wo es gleich vorbeikommt. Die Figur zieht allmählich zur Maus hin.", tips: "Abpraller an den Rändern mit einplanen." },
      { name: "Nach der Landung sofort weiter", desc: "Nach Treffer oder Fehlversuch erscheint ein neues Ziel. Fadenkreuz gleich wieder auf die Figur legen und neu aufladen.", tips: "Weniger Leerlauf heißt längere Serien." }
    ]
  },
  steps: STEPS,
  audience: "Wer ein kurzes Timing-Spiel mit der Maus sucht oder das Vorhersagen bewegter Ziele üben will.",
  faqs: FAQS,
  sources: pickSources('lee1976', 'woodworth1899', 'kawato1999', 'fitts1954')
};

export default function JumpSequencePageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <JumpSequenceClient
        copy={{
          title: "Sprung-Zielspiel",
          hudLabels: { score: "Punkte", timeLeft: "Restzeit", bestScore: "Bestwert", bestCombo: "Beste Combo" },
          rulesTitle: "Spielregeln",
          rules: [
            { title: "Aufladen und abspringen", text: "Fadenkreuz auf die Spielfigur legen und Maustaste gedrückt halten zum Aufladen; loslassen zum senkrechten Absprung." },
            { title: "In der Luft lenken", text: "Bewege die Maus in der Luft nach links oder rechts; die Figur zieht dorthin und steuert auf das Ziel zu." },
            { title: "Combo-Multiplikator", text: "Treffer in Serie erhöhen den Multiplikator bis maximal 3,0x." },
            { title: "Fehlversuch setzt Combo zurück", text: "Landest du ohne Treffer, wird die Combo zurückgesetzt. Punkte und Zeit bleiben." }
          ],
          aboutTitle: "Über das Sprung-Zielspiel"
        }}
      />
      <DrillGuide guide={jumpGuide} />
      <RelatedDrills />
    </>
  );
}
