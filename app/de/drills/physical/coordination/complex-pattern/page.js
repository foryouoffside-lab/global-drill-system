import ComplexPatternClient from '@/app/drills/physical/coordination/complex-pattern/ComplexPatternClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = 'https://skilldrills.online/de/drills/physical/coordination/complex-pattern';
const TITLE = "Muster merken Spiel – Pfad nachzeichnen | SkillDrills";
const DESCRIPTION = "Muster merken Spiel: Ein Pfad aus 3 bis 8 Punkten blitzt kurz auf. Merk ihn dir und zeichne ihn mit der Maus nach. 45 Sekunden, kostenlos im Browser.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "Muster merken Spiel",
  "Pfad nachzeichnen",
  "Bewegungsmuster merken",
  "Muster nachzeichnen Maus"
],
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/physical/coordination/complex-pattern'),
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
    "q": "Wie funktioniert das Muster merken Spiel?",
    "a": "Ein Pfad wird kurz angezeigt und verschwindet. Halte die Maustaste im cyanfarbenen Startknoten gedrückt, fahre die Punkte in der gemerkten Reihenfolge ab und lass im magentafarbenen Endknoten los. Danach wird deine Linie mit dem Original verglichen."
  },
  {
    "q": "Wie wird die Übereinstimmung berechnet?",
    "a": "Deine Linie und der Originalpfad werden in gleich viele Punkte zerlegt. Aus dem mittleren Abstand zum jeweils nächsten Punkt (in Pixeln) ergibt sich der Wert, der von 100 abgezogen wird. Liegen Start oder Ende mehr als etwa 45 px neben dem Knoten, zählt der Versuch als Fehler."
  },
  {
    "q": "Was ändert sich mit dem Level?",
    "a": "Der Pfad wächst von 3 auf 8 Punkte, die Anzeigezeit sinkt von 2,0 auf 0,6 Sekunden und die nötige Übereinstimmung steigt von 50 % auf 85 %. Ab Level 3 sind Zickzack-, ab Level 4 Spiralpfade möglich."
  },
  {
    "q": "Gibt es Punktabzug für Fehler?",
    "a": "Nein. Wer die Vorgabe verfehlt, verliert nur den Combo-Multiplikator (zurück auf 1,0x); Punkte und Restzeit bleiben. Der Multiplikator steigt mit Serien auf bis zu 3,0x."
  },
  {
    "q": "Wie lange dauert eine Runde?",
    "a": "Genau 45 Sekunden. Das Level startet jede Runde wieder bei 1."
  },
  {
    "q": "Ist das ein Test des visuellen Gedächtnisses?",
    "a": "Nein, es ist ein Übungsspiel ohne Normwerte. Für klassische Gedächtnistests gibt es eigene Seiten im Memory-Bereich von SkillDrills."
  },
  {
    "q": "Funktioniert es auf dem Handy?",
    "a": "Gesteuert wird per Mausziehen. Am besten spielst du im Browser am Computer mit Maus."
  },
  {
    "q": "Ist das Spiel kostenlos?",
    "a": "Ja, ohne Installation und ohne Anmeldung. Bestwerte werden nur in deinem Browser gespeichert."
  }
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: "SkillDrills Startseite", item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: "Koordinationsspiele online", item: 'https://skilldrills.online/de/drills/physical' },
    { '@type': 'ListItem', position: 3, name: "Muster merken Spiel", item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Muster merken Spiel",
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
  "heading": "Muster merken Spiel: Anleitung und Tipps",
  "intro": [
    "Das Muster merken Spiel ist ein kostenloses Browser-Spiel: Ein Pfad blitzt kurz auf, du merkst ihn dir und zeichnest ihn danach mit der Maus nach. Sobald der Pfad verschwindet, startest du im cyanfarbenen Knoten, fährst die Punkte in der gemerkten Reihenfolge ab und lässt die Maustaste im magentafarbenen Endknoten los. Wie nah deine Linie am Original liegt, wird als Übereinstimmung in Prozent berechnet.",
    "Eine Runde dauert 45 Sekunden. Das Level beginnt jede Runde bei 1 und steigt mit Punkten und Serien; um Level 15 erreicht das Spiel 8 Punkte, 0,6 Sekunden Anzeigezeit und 85 % geforderte Übereinstimmung. Als Referenz für die Schwierigkeit dienten das Arbeitsgedächtnismodell mit seinem visuell-räumlichen Notizblock (Baddeley & Hitch, 1974) und Befunde, nach denen dort etwa vier Einheiten Platz haben (Cowan, 2001). Das Spiel ist eine Übung ohne Normwerte."
  ],
  "techniques": {
    "title": "Tipps für genaueres Nachzeichnen",
    "items": [
      {
        "name": "Formen statt Punkte merken",
        "desc": "Ab 5 Punkten hilft es, den Pfad in zwei, drei große Formen zu zerlegen, etwa ein N oder ein Dreieck plus Gerade, statt jeden Punkt einzeln zu speichern.",
        "tips": "Prüfe während der Anzeige zuerst Start- und Endpunkt, den Rest merkst du dir als Umriss."
      },
      {
        "name": "Start und Ende genau treffen",
        "desc": "Beginnst du mehr als etwa 45 px vom Startknoten entfernt oder lässt du neben dem Endknoten los, zählt der Versuch als Fehler, auch wenn die Form stimmt.",
        "tips": "Kontrolliere vor dem Ziehen, dass der Cursor im cyanfarbenen Knoten liegt."
      },
      {
        "name": "An Ecken abbremsen",
        "desc": "Auf geraden Stücken zügig, vor Knickpunkten langsamer: So schießt du seltener über die Ecke hinaus.",
        "tips": "Ein gleichmäßiger Zug in einem Stück bringt meist mehr Übereinstimmung als hastiges Zeichnen."
      }
    ]
  },
  "steps": [
    "Starte die Runde und warte den Countdown ab.",
    "Präge dir Form und Reihenfolge des angezeigten Pfads ein.",
    "Wenn der Pfad verschwindet, drücke die Maustaste im cyanfarbenen Startknoten.",
    "Fahre die Punkte in der gemerkten Reihenfolge ab und lass im magentafarbenen Endknoten los."
  ],
  "audience": "Alle, die üben möchten, eine kurz gesehene Form zu behalten und mit der Maus sauber nachzuzeichnen.",
  faqs: faqItems,
  sources: pickSources('baddeley1974', 'cowan2001', 'lashley1951', 'woodworth1899'),
};

export default function ComplexPatternPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ComplexPatternClient
        copy={{
  "title": "Muster merken Spiel",
  "subtitle": "Pfad einprägen und mit der Maus nachzeichnen",
  "rulesTitle": "Regeln: Muster merken Spiel",
  "rules": [
    {
      "title": "Pfad einprägen",
      "text": "Ein Pfad aus Punkten und Linien wird kurz angezeigt. Merk dir Form und Reihenfolge, bevor er verschwindet."
    },
    {
      "title": "Vom Start ziehen",
      "text": "Drücke die Maustaste im cyanfarbenen Startknoten, fahre alle Punkte ab und lass im magentafarbenen Endknoten los."
    },
    {
      "title": "Übereinstimmung",
      "text": "Erreicht deine Linie die geforderte Übereinstimmung (anfangs 50 %, später bis 85 %) und treffen Start und Ende, ist das Muster geschafft."
    },
    {
      "title": "Kein Punktabzug",
      "text": "Verfehlst du die Vorgabe, fällt nur der Combo-Multiplikator auf 1,0x zurück. Punkte und die 45 Sekunden bleiben unberührt."
    }
  ],
  "aboutTitle": "Über das Muster merken Spiel",
  "aboutHeading": "Ansehen, merken, nachzeichnen",
  "aboutText": "Im Muster merken Spiel siehst du kurz einen Pfad, der danach verschwindet. Dann zeichnest du ihn per Mausziehen aus dem Gedächtnis nach. Zu Beginn hat der Pfad 3 Punkte und bleibt 2 Sekunden sichtbar; mit steigendem Level wächst er auf bis zu 8 Punkte, die Anzeigezeit sinkt auf 0,6 Sekunden und es kommen Zickzack- und Spiralformen dazu."
}}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/coordination/complex-pattern" />
    </>
  );
}
