import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/de.md)
// Primary: Agility-Ladder-Rhythmusspiel (no-demand descriptive).
// Dropped Koordinationsleiter Übungen / Fußball / Sportabzeichen: that SERP is
// equipment shops, and this is a mouse sequence game, not a ladder workout.
// ============================================================

const TITLE = 'Agility-Ladder-Rhythmusspiel mit der Maus | SkillDrills';
const DESCRIPTION = 'Kostenloses Agility-Ladder-Rhythmusspiel: Fahre die 4 Sprossen jeder Leiter links-rechts-links-rechts mit dem Mauszeiger ab. 45 Sekunden, Combo, mehr Tempo.';
const URL = 'https://skilldrills.online/de/drills/physical/fitness/agility-ladder';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['Agility-Ladder-Rhythmusspiel', 'Agility Ladder Maus-Version', 'Rhythmusspiel Maus', 'Reihenfolge Mausspiel', 'Browserspiel kostenlos'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
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
    { "@type": "ListItem", "position": 3, "name": "Agility-Ladder-Rhythmusspiel", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Agility-Ladder-Rhythmusspiel",
  "description": "Kostenloses 45-Sekunden-Browserspiel: die 4 Sprossen jeder herabscrollenden Leiter links-rechts-links-rechts mit dem Mauszeiger abfahren.",
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
    q: "Was ist das Agility-Ladder-Rhythmusspiel?",
    a: "Ein kostenloses Browserspiel: Von oben scrollen Leitern herab, und du fährst bei jeder Leiter die 4 Sprossen (links, rechts, links, rechts) in fester Reihenfolge mit dem Mauszeiger ab. Eine Runde dauert 45 Sekunden, jede fertige Leiter bringt Punkte."
  },
  {
    q: "Wie steuere ich? Muss ich klicken?",
    a: "Nein, Klicken ist nicht nötig. Bewege das Fadenkreuz über die aktuelle Sprosse (grüner Rahmen); dann gilt sie als getroffen und die nächste wird aktiv. Die Reihenfolge ist 1 (links) → 2 (rechts) → 3 (links) → 4 (rechts). Mit Escape beendest du den Drill."
  },
  {
    q: "Wie werden Punkte und Combo berechnet?",
    a: "Jede fertige Leiter bringt 100 Punkte mal Combo-Multiplikator. Der Multiplikator steigt mit der Serie: ab 3 Leitern in Folge 1,1x, ab 5 1,25x, ab 10 1,5x, ab 20 2,0x und ab 50 maximal 3,0x."
  },
  {
    q: "Was ändert sich mit steigendem Level?",
    a: "Alle 250 Punkte steigt das Level um 1, dazu kommt alle 4 Leitern in Serie ein Bonuslevel. Die Leitern scrollen anfangs mit 150 px/s, auf Level 15 mit 750 px/s und danach immer schneller. Die Trefferzone der Sprossen schrumpft von 18 px auf 10 px."
  },
  {
    q: "Was passiert, wenn ich eine Sprosse verpasse?",
    a: "Erreicht eine Leiter den unteren Bildschirmrand, bevor alle 4 Sprossen abgefahren sind, wird die Combo auf 0 gesetzt, es gibt einen roten Blitz und ein kurzes Wackeln. Punkte und Restzeit werden nicht abgezogen."
  },
  {
    q: "Ersetzt das Spiel Übungen an der Koordinationsleiter?",
    a: "Nein. Das Spiel überträgt nur die Links-Rechts-Reihenfolge einer Leiterübung auf die Maus. Es misst und verspricht keine bessere Beinarbeit, Fitness oder Schnelligkeit."
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
  "Auf Start klicken; nach dem Countdown (3-2-1) beginnt die Runde (am Desktop wird der Mauszeiger gesperrt).",
  "Das Fadenkreuz über die erste Sprosse der herabscrollenden Leiter führen (links, grüner Rahmen).",
  "Sprosse 2 (rechts), 3 (links) und 4 (rechts) im selben Rhythmus abfahren, um die Leiter abzuschließen.",
  "45 Sekunden lang keine Leiter verpassen und so den Combo-Multiplikator hochtreiben."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So spielst du das Agility-Ladder-Rhythmusspiel",
  "description": "Die 4 Sprossen jeder Leiter links-rechts-links-rechts mit dem Mauszeiger abfahren.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Schritt ${i + 1}`, "text": text }))
};

const ladderGuide = {
  heading: "Agility-Ladder-Rhythmusspiel: Anleitung",
  intro: [
    "Das Agility-Ladder-Rhythmusspiel überträgt die Links-rechts-links-rechts-Schrittfolge einer Koordinationsleiter auf die Maus. Von oben scrollen Leitern herab, und du fährst die 4 Sprossen in fester Reihenfolge mit dem Fadenkreuz ab. Geklickt wird nicht, nur die Mausbewegung zählt.",
    "Eine Runde dauert 45 Sekunden. Jede fertige Leiter bringt 100 Punkte mal Combo-Multiplikator (bis 3,0x). Alle 250 Punkte steigt das Level: Die Leitern scrollen schneller und die Trefferzone der Sprossen wird kleiner.",
    "Schnelle Bewegungsfolgen laufen stabiler, wenn die vier Schritte als ein vorgeplantes Paket ausgeführt werden statt Schritt für Schritt (Lashley, 1951; Schmidt, 1975). Das Spiel übt diese Reihenfolge und den Rhythmus mit der Hand; Beinarbeit oder Fitness trainiert es nicht."
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
      { name: "Vier Sprossen als ein Zug", desc: "Wer jede Sprosse einzeln anschaut und reagiert, ist zu spät. Fahre das Zickzack links-rechts-links-rechts als eine durchgehende Bewegung.", tips: "Zwischen den Sprossen nicht anhalten." },
      { name: "Etwas tiefer zielen", desc: "Die Leiter scrollt ständig nach unten. Ziele leicht unter die aktuelle Position der Sprosse, dann liegst du in der Trefferzone.", tips: "Je höher das Tempo, desto weiter vorausplanen." },
      { name: "Blick in die Mitte", desc: "Die Sprossen erscheinen links und rechts der senkrechten Mittelachse. Mit dem Blick in der Mitte siehst du beide Seiten.", tips: "Ab Level 4 verschieben sich die Leitern leicht seitlich." }
    ]
  },
  steps: STEPS,
  audience: "Wer ein kurzes Rhythmus- und Reihenfolgespiel mit der Maus sucht oder schnelles Links-rechts-Pendeln des Mauszeigers üben will.",
  faqs: FAQS,
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954')
};

export default function AgilityLadderPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <MotorSequencingClient
        copy={{
          title: "Agility-Ladder-Rhythmusspiel",
          hudLabels: { score: "Punkte", timeLeft: "Restzeit", bestScore: "Bestwert", bestCombo: "Beste Combo" },
          rulesTitle: "Spielregeln",
          rules: [
            { title: "4 Sprossen der Reihe nach", text: "Fahre die Sprossen jeder Leiter in der Reihenfolge 1 (links) → 2 (rechts) → 3 (links) → 4 (rechts) mit dem Fadenkreuz ab. Kein Klick nötig." },
            { title: "Combo-Multiplikator", text: "Leitern in Serie erhöhen den Multiplikator bis maximal 3,0x. Jede Leiter bringt 100 Punkte mal Multiplikator." },
            { title: "Level-Anstieg", text: "Alle 250 Punkte steigt das Level: schnelleres Scrollen, kleinere Trefferzone." },
            { title: "Verpasste Leiter", text: "Erreicht eine unfertige Leiter den unteren Rand, wird die Combo zurückgesetzt. Punkte und Zeit bleiben." }
          ],
          aboutTitle: "Über das Agility-Ladder-Rhythmusspiel",
          aboutHeading: "Reihenfolge und Rhythmus mit der Maus",
          aboutText: "Das Agility-Ladder-Rhythmusspiel überträgt die Links-rechts-Schrittfolge einer Koordinationsleiter auf einen 45-Sekunden-Drill mit der Maus. Wer die 4 Sprossen einer herabscrollenden Leiter der Reihe nach mit dem Fadenkreuz abfährt, schließt sie ab; mit steigender Punktzahl wird das Tempo von 150 px/s über 750 px/s auf Level 15 hinaus immer höher. Es übt Reihenfolge und Rhythmus mit der Hand und misst keine Verbesserung von Beinarbeit oder Fitness."
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
