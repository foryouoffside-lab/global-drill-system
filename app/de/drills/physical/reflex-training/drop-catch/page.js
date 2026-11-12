import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/reflex-training/drop-catch';
const title = "Fallende Ziele fangen: Grün ja, Rot nein | SkillDrills";
const description = "Fallende Ziele fangen im Browser: nur grüne Ziele klicken, rote Köder fallen lassen. +2 s pro Fang, 1 s Abzug bei Fehlern. Kostenlos, ohne Anmeldung.";

export const metadata = {
  title,
  description,
  keywords: [
    "Fallende Ziele fangen",
    "grüne Ziele klicken",
    "rote Köder ignorieren",
    "Klickspiel mit fallenden Zielen",
    "Drop Catch"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url,
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Physisches Training", "item": "https://skilldrills.online/de/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Fallende Ziele fangen", "item": url }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Drop Catch – Fallende Ziele fangen",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  description,
  url,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/de" },
  "inLanguage": "de",
  "dateModified": "2026-11-10"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Drop Catch – Fallende Ziele fangen (Web-App)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Aktueller Browser mit HTML5-Canvas und Zeigereingabe",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  url,
  "inLanguage": "de",
  "dateModified": "2026-11-10"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Drop Catch – Fallende Ziele fangen",
  url,
  description,
  "genre": ["Action Game", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "inLanguage": "de",
  "dateModified": "2026-11-10",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqs = [
  {
    q: "Wie funktioniert das Spiel „Fallende Ziele fangen“?",
    a: "Von oben fallen Ziele herunter. Du klickst nur die grünen und lässt rote Köder ungeklickt durchfallen. Jeder grüne Fang bringt 100 Punkte (mit Combo- und Level-Multiplikator) und +2 Sekunden, höchstens bis 60 Sekunden. Die Runde startet mit 45 Sekunden."
  },
  {
    q: "Ist das der Lineal-Falltest aus dem Sportunterricht?",
    a: "Nein. Beim Lineal-Falltest wird ein echtes Lineal gefangen und aus der Fallstrecke eine Reaktionszeit berechnet. Dieses Spiel misst keine Reaktionszeit: Du unterscheidest Farben und klickst nur Grün, das Ergebnis ist eine Punktzahl."
  },
  {
    q: "Was passiert bei einem Fehler?",
    a: "Lässt du ein grünes Ziel unten aus dem Bild fallen, klickst einen roten Köder oder klickst ins Leere, fällt die Combo auf 1,0x zurück und du verlierst 1 Sekunde. Dieser Abzug ist immer aktiv und lässt sich nicht abschalten."
  },
  {
    q: "Was ändert sich mit steigendem Level?",
    a: "Alle 1.750 Punkte steigt das Level, ohne Obergrenze. Die Fallgeschwindigkeit steigt von etwa 400 auf 1.250 px/s, der Abstand zwischen neuen Zielen sinkt von etwa 0,8 auf minimal 0,18 Sekunden, der Anteil roter Köder steigt von 15 % auf bis zu 45 %, und die Ziele werden kleiner."
  },
  {
    q: "Wie klicke ich rote Köder nicht versehentlich an?",
    a: "Erst die Farbe prüfen, dann klicken. Ein Modell beschreibt einen Wettlauf zwischen dem Impuls zu klicken und dem Stoppen (Logan et al., 1984). Ein roter Köder, den du fallen lässt, kostet nichts – im Zweifel also nicht klicken."
  },
  {
    q: "Wohin sollte ich schauen?",
    a: "Statt einen Punkt am oberen Rand zu fixieren, hilft ein breiter Blick über das obere und mittlere Drittel. Wenn du den Cursor schon unter die Fallbahn setzt, wird der Weg kürzer. Was am besten funktioniert, ist individuell – probiere es aus."
  },
  {
    q: "Spielt die Bildwiederholrate des Monitors eine Rolle?",
    a: "Bei höherer Bildwiederholrate springt ein schnelles Ziel pro Frame weniger weit, und die Eingabeverzögerung sinkt tendenziell (Woods et al., 2015). Wie stark sich das auf deine Punkte in diesem Spiel auswirkt, haben wir nicht gemessen. Vergleiche Ergebnisse daher auf demselben Gerät."
  },
  {
    q: "Wo werden meine Ergebnisse gespeichert?",
    a: "Punkte und beste Combo werden im lokalen Speicher deines Browsers abgelegt und von diesem Drill nicht an einen Server gesendet. Wenn du die Browserdaten löschst, sind sie weg. Details stehen in der Datenschutzerklärung."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "So spielst du „Fallende Ziele fangen“",
  "description": "Grün fangen, Rot fallen lassen – in vier Schritten.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Farbe zuerst prüfen", "text": "Sobald ein Ziel erscheint, prüfst du zuerst, ob es grün oder rot ist." },
    { "@type": "HowToStep", "position": 2, "name": "Rot nicht klicken", "text": "Rote Köder klickst du nicht an, sondern lässt sie nach unten durchfallen." },
    { "@type": "HowToStep", "position": 3, "name": "Unter der Fallbahn warten", "text": "Bei Grün setzt du den Cursor unter die Fallbahn und klickst, sobald das Ziel darüber ist." },
    { "@type": "HowToStep", "position": 4, "name": "Combo halten", "text": "Fange ohne Fehler weiter, um +2 Sekunden und den Combo-Multiplikator aufzubauen." }
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` }))
};

const dropGuide = {
  heading: "Leitfaden: Fallende Ziele fangen",
  intro: [
    "Drop Catch ist ein kostenloses Browserspiel zum Fallende-Ziele-Fangen: Von oben fallen Ziele herunter, du klickst nur die grünen und lässt rote Köder durchfallen. Ein Fang bringt +2 Sekunden, ein Fehler kostet 1 Sekunde.",
    "Wer erst zwischen Reizen unterscheiden muss, reagiert in der Regel langsamer als bei einer einfachen Reaktion (Donders, 1868). Außerdem beschreibt ein Modell einen Wettlauf zwischen dem Impuls zu klicken und dem Stoppen (Logan et al., 1984). Das Spiel macht beides spielerisch erfahrbar.",
    "Wie Menschen die Zeit bis zum Eintreffen eines sich nähernden Objekts abschätzen, untersucht Lee (1976). Die Fallgeschwindigkeit steigt mit dem Level von etwa 400 auf 1.250 px/s – je später du entscheidest, desto schwerer wird es.",
    "Die Punkte sind ein Übungsergebnis, kein medizinischer Reaktionstest und keine Sportlerbewertung. Vergleiche Ergebnisse auf demselben Gerät und Monitor."
  ],
  benchmarks: {
    title: "Orientierung: Punktebereiche",
    headers: ["Stufe", "Punkte", "Genauigkeit", "Übungsschwerpunkt"],
    rows: [
      ["1", "unter 6.000", "unter 70 %", "Rote Köder konsequent nicht klicken"],
      ["2", "6.000 – 10.999", "70 – 81 %", "Erst Farbe prüfen, dann klicken"],
      ["3", "11.000 – 16.999", "82 – 89 %", "Combo ohne Abbruch halten"],
      ["4", "17.000 – 23.999", "90 – 94 %", "Auch bei hohem Tempo Köder fallen lassen"],
      ["5", "ab 24.000", "ab 95 %", "Mit dem +2-s-Bonus lange Runden spielen"]
    ],
    note: "Diese Bereiche sind SkillDrills-Übungsstufen. Sie sind keine Nutzerstatistik, keine Perzentile und kein Profi-Maßstab."
  },
  techniques: {
    title: "4 Tipps für mehr Punkte",
    items: [
      {
        name: "Breit schauen, Farbe zuerst",
        desc: "Fixiere keinen einzelnen Punkt, sondern überblicke das obere und mittlere Drittel. Taucht ein Ziel auf, prüfe zuerst die Farbe.",
        tips: "Spanne den Finger erst an, wenn die Farbe klar ist."
      },
      {
        name: "Rot einfach fallen lassen",
        desc: "Ein roter Köder, den du fallen lässt, kostet nichts. Klickst du ihn, sind Combo und 1 Sekunde weg – im Zweifel nicht klicken.",
        tips: "Wenn später mehr Köder kommen, geht Genauigkeit vor Tempo."
      },
      {
        name: "Unter der Fallbahn warten",
        desc: "Statt dem Ziel hinterherzujagen, setze den Cursor vorab unter seine Bahn. Das verkürzt den Weg.",
        tips: "In der Bildschirmmitte zu fangen gibt dir mehr Puffer."
      },
      {
        name: "Locker greifen",
        desc: "Für schnelle Auf-und-ab-Bewegungen die Hand entspannen und mit Fingern und Handgelenk fein nachkorrigieren.",
        tips: "Bei Ermüdung pausieren und auf demselben Gerät vergleichen."
      }
    ]
  },
  steps: [
    "Cursor in die Bildschirmmitte setzen und das obere und mittlere Drittel im Blick behalten.",
    "Fällt ein Ziel, zuerst prüfen: grün oder rot?",
    "Grüne Ziele anklicken, rote Köder ungeklickt fallen lassen.",
    "Mit +2 Sekunden pro Fang und gehaltener Combo die Punktzahl steigern."
  ],
  audience: "Alle, die ein Klickspiel mit fallenden Zielen und Farbunterscheidung suchen, und Gamer, die Auswahlreaktion und Impulskontrolle spielerisch üben möchten.",
  faqs,
  sources: pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedDropCatchPageDe() {
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
      <DropCatchClient
        copy={{
          title: "Fallende Ziele fangen",
          subtitle: "Grün klicken, rote Köder fallen lassen",
          hudLabels: {
            score: "Punkte",
            time: "Zeit",
            bestScore: "Bestwert",
            bestCombo: "Beste Combo"
          },
          rulesTitle: "Regeln und Wertung",
          rulesItems: [
            { title: "Grüne Ziele fangen & Zeitbonus", text: "Klicke fallende grüne Ziele für 100 Punkte (mit Combo- und Level-Multiplikator) und +2 Sekunden (maximal 60 Sekunden)." },
            { title: "Combo-Multiplikator", text: "Treffer ohne Fehler steigern den Multiplikator auf bis zu 3,0x." },
            { title: "Level-Steigerung", text: "Alle 1.750 Punkte steigt das Level. Fallgeschwindigkeit (bis 1.250 px/s) und Köderanteil (bis 45 %) nehmen zu." },
            { title: "Fehler und Zeitabzug", text: "Ein verpasstes grünes Ziel, ein Klick auf einen roten Köder oder ins Leere setzt die Combo zurück und kostet 1 Sekunde." }
          ],
          aboutTitle: "Über Drop Catch",
          aboutSections: [
            {
              title: "Timing bei fallenden Zielen",
              subtitle: "Lee (1976): Zeit bis zum Kontakt",
              content: "Die Fallgeschwindigkeit steigt mit dem Level. Lees Forschung dazu, wie Menschen die Zeit bis zum Eintreffen eines Objekts abschätzen, hilft beim Verständnis des Klick-Timings."
            },
            {
              title: "Klicken oder stoppen",
              subtitle: "Logan (1984): Stopp-Signal-Modell",
              content: "Bei roten Ködern konkurrieren der Impuls zu klicken und das Stoppen. Das Spiel übt, Köder nicht anzuklicken."
            },
            {
              title: "Auswahlreaktion",
              subtitle: "Donders (1868): Reaktionszeitforschung",
              content: "Muss man zwischen Reizen unterscheiden, dauert die Reaktion meist länger als bei einer einfachen Reaktion. Hier klickst du nur Grün."
            },
            {
              title: "Grob bewegen, fein korrigieren",
              subtitle: "Woodworth (1899) und Fitts (1954)",
              content: "Schnelles Zeigen besteht aus einer großen Bewegung und einer kleinen Schlusskorrektur. Erst unter die Fallbahn ziehen, dann abbremsen und klicken."
            }
          ]
        }}
      />
      <DrillGuide {...dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
