import CrossBodyMovementClient from '@/app/drills/physical/coordination/cross-body-movement/CrossBodyMovementClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/de/drills/physical/coordination/cross-body-movement';
const TITLE = "Koordinationstest mit der Maus – Korridor-Spiel | SkillDrills";
const DESCRIPTION = "Koordinationstest mit der Maus: Führe den Cursor durch einen schmalen Korridor von einem Bildschirmrand zum anderen. 45 Sekunden, kostenlos im Browser.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "Koordinationstest mit der Maus",
  "Überkreuzbewegung",
  "Korridor-Führung",
  "Maus Koordination Spiel"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/cross-body-movement'),
  },
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    images: ['https://skilldrills.online/opengraph-image'],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const faqItems = [
  {
    "q": "Wie funktioniert der Koordinationstest mit der Maus?",
    "a": "Bewege den Cursor auf den cyanfarbenen Knoten an einem Bildschirmrand; die Verbindung startet ohne Klick. Erreichst du den magentafarbenen Knoten auf der Gegenseite, ohne den Korridor um die Verbindungslinie zu verlassen, gibt es Punkte."
  },
  {
    "q": "Was passiert, wenn ich den Korridor verlasse?",
    "a": "Der Versuch endet und ein neues Knotenpaar erscheint. Der Combo-Multiplikator fällt auf 1,0x, Punkte und Restzeit bleiben erhalten."
  },
  {
    "q": "Was ändert sich mit dem Level?",
    "a": "Die Korridor-Toleranz (wie weit du von der Linie abweichen darfst) sinkt von 10 px auf 4 px, der Knotenradius von 16 px auf 8 px, und die Knoten rücken an den Rand, sodass die Wege länger werden. Die Grundpunkte pro Treffer steigen von 10 auf 40."
  },
  {
    "q": "Wie werden Punkte berechnet?",
    "a": "Jeder erreichte Zielknoten bringt die Grundpunkte des Levels mal Combo-Multiplikator. Der Multiplikator steigt mit Serien auf bis zu 3,0x."
  },
  {
    "q": "Wie lange dauert eine Runde?",
    "a": "Genau 45 Sekunden; das Level beginnt jede Runde bei 1."
  },
  {
    "q": "Misst das Spiel meine Koordination medizinisch?",
    "a": "Nein. Es ist ein Übungsspiel für die Mausführung, kein Test zur Beurteilung motorischer Fähigkeiten oder Entwicklung und keine Therapie."
  },
  {
    "q": "Funktioniert es auf dem Handy?",
    "a": "Das Spiel ist für die Maus gebaut; am besten spielst du am Computer. Mit Esc beendest du eine laufende Runde."
  },
  {
    "q": "Ist das Spiel kostenlos?",
    "a": "Ja, ohne Installation und Anmeldung. Bestwerte bleiben nur in deinem Browser gespeichert."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Startseite", item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: "Koordinationsspiele online", item: 'https://skilldrills.online/de/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "Koordinationstest mit der Maus", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Koordinationstest mit der Maus",
  description: DESCRIPTION,
  url: PAGE_URL,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Aktueller Browser mit HTML5-Canvas und Maus",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  inLanguage: 'de',
  dateModified: '2026-11-10',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  dateModified: '2026-11-10',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const guide = {
  "heading": "Koordinationstest mit der Maus: Anleitung und Tipps",
  "intro": [
    "Der Koordinationstest mit der Maus ist ein kostenloses Browser-Spiel, in dem du den Cursor präzise durch einen schmalen Korridor führst. Berühre den cyanfarbenen Knoten an einem Bildschirmrand und fahre dann entlang der Verbindungslinie zum magentafarbenen Knoten auf der Gegenseite. Verlässt du den Korridor, endet der Versuch und ein neues Knotenpaar erscheint. Jede Bahn ist eine Überkreuzbewegung von einem Bildschirmrand zum anderen, bei der saubere Korridor-Führung zählt.",
    "Eine Runde dauert 45 Sekunden, das Level startet jedes Mal bei 1. Mit steigendem Level sinkt die Korridor-Toleranz von 10 px auf 4 px, der Knotenradius von 16 px auf 8 px, und die Knoten rücken an den Rand. Als Referenz diente das Fitts'sche Gesetz (Fitts, 1954): Je weiter der Weg und je kleiner das Ziel, desto schwieriger die Bewegung. Trotz des Namens ist es ein Übungsspiel für die Mausführung, kein diagnostischer Koordinationstest."
  ],
  "techniques": {
    "title": "Tipps, um im Korridor zu bleiben",
    "items": [
      {
        "name": "Zuerst das Ziel ansehen",
        "desc": "Schau dir die Position des Gegenknotens an, bevor du den Startknoten berührst. So stimmt die Richtung vom ersten Millimeter an.",
        "tips": "Die Verbindung startet bei Berührung, plane die Richtung also schon beim Anfahren."
      },
      {
        "name": "Gleichmäßig und gerade",
        "desc": "Schnelles Reißen führt am Ende zu Wacklern und aus dem Korridor. Halte ein ruhiges, gleichmäßiges Tempo.",
        "tips": "Bei 4 px Toleranz auf hohen Levels lohnt sich etwas weniger Tempo für eine längere Serie."
      },
      {
        "name": "Kurz vor dem Ziel abbremsen",
        "desc": "Zügig anfahren und nahe am Ziel langsam abschließen (Woodworth, 1899) hilft, kleine Knoten sicher zu treffen.",
        "tips": "Kurz vor dem Knoten Spannung aus dem Handgelenk nehmen und sanft ankommen."
      }
    ]
  },
  "steps": [
    "Starte die Runde und warte den Countdown ab.",
    "Sieh dir die Position des magentafarbenen Zielknotens an.",
    "Bewege den Cursor auf den cyanfarbenen Startknoten.",
    "Fahre im Korridor bis zum magentafarbenen Knoten."
  ],
  "audience": "Erwachsene und Gamer, die lange, gerade Mausbewegungen mit wenig Abweichung üben möchten.",
  faqs: faqItems,
  sources: pickSources('carey1996', 'fitts1954', 'woodworth1899'),
};

export default function CrossBodyMovementPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CrossBodyMovementClient
        copy={{
  "title": "Koordinationstest mit der Maus",
  "subtitle": "Quer über den Bildschirm, ohne den Korridor zu verlassen",
  "rulesTitle": "Regeln: Koordinationstest mit der Maus",
  "rules": [
    {
      "title": "Startknoten berühren",
      "text": "Bewege den Cursor auf den cyanfarbenen Startknoten am Bildschirmrand. Die Verbindung startet sofort, ein Klick ist nicht nötig."
    },
    {
      "title": "Im Korridor bleiben",
      "text": "Fahre im Korridor entlang der Linie zwischen beiden Knoten bis zum magentafarbenen Knoten auf der Gegenseite."
    },
    {
      "title": "Ziel erreichen",
      "text": "Erreichst du den magentafarbenen Knoten, ohne den Korridor zu verlassen, gibt es Punkte und deine Serie wächst."
    },
    {
      "title": "Korridor verlassen",
      "text": "Verlässt du den Korridor, ist der Versuch vorbei und ein neues Knotenpaar erscheint. Nur der Combo-Multiplikator fällt auf 1,0x; Punkte und Zeit bleiben."
    }
  ],
  "aboutTitle": "Über den Koordinationstest mit der Maus",
  "aboutHeading": "Im schmalen Korridor quer über den Bildschirm",
  "aboutText": "In diesem 45-Sekunden-Spiel verbindest du zwei Knoten, die links und rechts am Bildschirmrand erscheinen. Ihre Höhe ist zufällig, daher verläuft der Weg mal diagonal, mal waagerecht. Mit steigendem Level schrumpft die Korridor-Toleranz von 10 px auf 4 px, die Knoten werden kleiner und rücken näher an den Rand, sodass die Wege länger werden."
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/cross-body-movement" />
    </>
  );
}
