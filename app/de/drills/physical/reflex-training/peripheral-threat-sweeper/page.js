import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/reflex-training/peripheral-threat-sweeper';
const title = "Peripheres Blickfeld Spiel: Randziele abfangen | SkillDrills";
const description = "Peripheres Blickfeld Spiel: Blick auf den Kern in der Mitte, Ziele vom Rand abfangen. +2 s pro Treffer, 1 s Abzug bei Fehlern. Browserspiel, kein Sehtest.";

export const metadata = {
  title,
  description,
  keywords: [
    "Peripheres Blickfeld Spiel",
    "Bedrohungen am Rand abwehren",
    "Randziele abfangen",
    "Tunnelblick Spiel",
    "Peripheral Threat Sweeper"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper'),
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
    { "@type": "ListItem", "position": 3, "name": "Peripheres Blickfeld Spiel", "item": url }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Peripheres Blickfeld Spiel (Peripheral Threat Sweeper)",
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
  "name": "Peripheres Blickfeld Spiel (Web-App)",
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
  "name": "Peripheres Blickfeld Spiel (Peripheral Threat Sweeper)",
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
    q: "Was mache ich in diesem Spiel?",
    a: "Du schaust auf den Kern in der Bildschirmmitte und klickst Ziele an, die vom Rand auf ihn zukommen, bevor sie ihn erreichen. So übst du, Bewegungen am Rand zu bemerken, ohne den Blick zu bewegen. Es ist ein Browserspiel."
  },
  {
    q: "Was ist der Unterschied zwischen zentralem und peripherem Sehen?",
    a: "Mit dem zentralen Sehen erkennst du im kleinen Bereich um den Blickpunkt Schrift und Details, mit dem peripheren Sehen außerhalb davon vor allem Bewegung und größere Veränderungen. Das Spiel verlangt, den Blick in der Mitte zu halten und auf Ziele vom Rand zu reagieren."
  },
  {
    q: "Darf ich die Augen bewegen?",
    a: "Ziel ist, den Kern weiter anzuschauen und den Rand nur wahrzunehmen. Folgst du den Zielen mit den Augen, übst du etwas anderes. Der Browser kann deine Blickrichtung nicht erfassen – darauf musst du selbst achten."
  },
  {
    q: "Wie werden Punkte und Zeit berechnet?",
    a: "Ein Treffer bringt 100 Punkte mit Combo- und Level-Multiplikator und +2 Sekunden, höchstens bis 60 Sekunden. Die Runde startet mit 45 Sekunden, der Multiplikator reicht bis 3,0x. Erreicht ein Ziel den Kern oder klickst du ins Leere, fällt die Combo auf 1,0x und du verlierst 1 Sekunde. Dieser Abzug ist immer aktiv und lässt sich nicht abschalten."
  },
  {
    q: "Wie steigt die Schwierigkeit?",
    a: "Mit steigender Punktzahl werden die Ziele von etwa 80 auf bis zu 520 px/s schneller, und der Abstand zwischen neuen Zielen sinkt von etwa 1,4 auf minimal 0,20 Sekunden. Später kommen schnellere Ziele und Ziele hinzu, die seitlich schlingern."
  },
  {
    q: "Was ist Tunnelblick?",
    a: "Unter Stress oder bei starker Konzentration auf einen Punkt nimmt man die Umgebung oft schlechter wahr – das nennt man umgangssprachlich Tunnelblick. Dieses Spiel übt, die Mitte im Blick zu halten und den Rand trotzdem nicht zu übersehen. Eine krankhafte Gesichtsfeldeinschränkung kann es nicht erkennen; dafür ist eine augenärztliche Untersuchung nötig."
  },
  {
    q: "Wird mein Gesichtsfeld dadurch größer?",
    a: "Das können wir nicht versprechen. Wer eine Aufgabe übt, wird in dieser Aufgabe oft besser, aber eine Wirkung dieses Spiels ist nicht untersucht. Nutze es, um deine eigenen Ergebnisse zu vergleichen."
  },
  {
    q: "Spielen Bildschirmgröße und Abstand eine Rolle?",
    a: "Je größer und näher der Bildschirm, desto weiter außen tauchen die Ziele in deinem Blickfeld auf. Vergleiche Ergebnisse daher mit gleichem Abstand und gleicher Haltung. Bildwiederholrate und Eingabeverzögerung können ebenfalls eine Rolle spielen (Woods et al., 2015)."
  },
  {
    q: "Wo werden meine Ergebnisse gespeichert?",
    a: "Punkte, Genauigkeit und beste Combo werden im lokalen Speicher deines Browsers abgelegt und von diesem Drill nicht an einen Server gesendet. Wenn du die Browserdaten löschst, sind sie weg. Details stehen in der Datenschutzerklärung."
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
  "name": "So spielst du das periphere Blickfeld Spiel",
  "description": "Blick in der Mitte halten und Randziele abfangen – in vier Schritten.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Mitte fixieren", "text": "Schau auf den Kern in der Bildschirmmitte und bewege die Augen möglichst nicht." },
    { "@type": "HowToStep", "position": 2, "name": "Rand wahrnehmen", "text": "Bemerke Ziele, die vom Rand auf den Kern zukommen, ohne den Blick zu bewegen." },
    { "@type": "HowToStep", "position": 3, "name": "Vor dem Kern klicken", "text": "Klicke das Ziel an, bevor es den Kern erreicht." },
    { "@type": "HowToStep", "position": 4, "name": "Combo halten", "text": "Triff ohne Fehler weiter, um +2 Sekunden und den Combo-Multiplikator aufzubauen." }
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` }))
};

const guideProps = {
  heading: "Leitfaden: Peripheres Blickfeld Spiel",
  intro: [
    "Peripheral Threat Sweeper ist ein kostenloses peripheres Blickfeld Spiel im Browser: Du schaust auf den Kern in der Mitte und fängst Ziele ab, die vom Rand auf ihn zukommen. Ein Treffer bringt +2 Sekunden, ein Fehlklick oder ein Ziel im Kern kostet 1 Sekunde.",
    "Forschung zeigt, dass man die Aufmerksamkeit verschieben kann, ohne die Augen zu bewegen (Posner, 1980). Kontrastreiche, bewegte Ziele fallen auch am Rand schnell auf (Treisman & Gelade, 1980). Das Spiel macht daraus eine Klickaufgabe.",
    "Anfangs erscheinen Ziele etwa alle 1,4 Sekunden, mit steigender Punktzahl werden sie schneller (bis 520 px/s) und kommen dichter (minimal 0,20 Sekunden Abstand). Beim Klicken hilft eine große Bewegung mit kleiner Schlusskorrektur (Woodworth, 1899; Fitts, 1954).",
    "Die Ergebnisse sind Übungswerte."
  ],
  benchmarks: {
    title: "Orientierung: Punktebereiche",
    headers: ["Stufe", "Punkte", "Übungsschwerpunkt"],
    rows: [
      ["1", "unter 6.000", "Blick konsequent in der Mitte halten"],
      ["2", "6.000 – 10.999", "Ziele vor dem Kern abfangen"],
      ["3", "11.000 – 16.999", "Combo ohne Abbruch halten"],
      ["4", "17.000 – 23.999", "Auch bei schnellen Zielen nicht hinschauen"],
      ["5", "ab 24.000", "Mehrere Ziele nacheinander abarbeiten"]
    ],
    note: "Diese Bereiche sind SkillDrills-Übungsstufen. Sie sind keine Nutzerstatistik und keine Perzentile."
  },
  techniques: {
    title: "4 Tipps für mehr Punkte",
    items: [
      {
        name: "Blick in der Mitte lassen",
        desc: "Den Kern anschauen und die Augen nicht bewegen ist der Kern der Übung. Wer den Zielen nachschaut, übt etwas anderes.",
        tips: "Wandern die Augen ständig, zuerst auf niedrigem Level die Gewohnheit aufbauen."
      },
      {
        name: "Das ganze Feld weich sehen",
        desc: "Nicht auf eine Richtung konzentrieren, sondern das ganze Bild locker auf einmal wahrnehmen – so fällt Bewegung früher auf.",
        tips: "Augen entspannen, Fokus weich halten."
      },
      {
        name: "Grob bewegen, fein korrigieren",
        desc: "Kennst du die Position, bring den Cursor in einem Zug in die Nähe und bremse erst am Ende ab.",
        tips: "Hektische Fehlklicks nahe am Kern kosten Combo und 1 Sekunde."
      },
      {
        name: "Kurz spielen, Pausen machen",
        desc: "Müde Augen lassen die Konzentration schnell sinken. Spiele kurze Runden und schau zwischendurch vom Bildschirm weg.",
        tips: "Bei Schmerzen oder Schwindel aufhören."
      }
    ]
  },
  steps: [
    "Bequem hinsetzen und auf den Kern in der Bildschirmmitte schauen.",
    "Ziele vom Rand wahrnehmen, ohne die Augen zu bewegen.",
    "Das Ziel anklicken, bevor es den Kern erreicht.",
    "Mit +2 Sekunden pro Treffer und gehaltener Combo die Punktzahl steigern."
  ],
  audience: "Alle, die die Reaktion auf Bewegungen am Bildschirmrand spielerisch üben möchten, und Gamer, die ausprobieren wollen, den Blick in der Mitte zu halten und trotzdem den Rand zu sehen.",
  faqs,
  sources: pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function PeripheralThreatSweeperDePage() {
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
      <PeripheralThreatSweeperClient
        copy={{
          title: "Peripheres Blickfeld Spiel",
          subtitle: "Blick in der Mitte, Ziele vom Rand abfangen",
          hudLabels: {
            score: "Punkte",
            time: "Restzeit",
            bestScore: "Bestwert",
            bestCombo: "Max Combo",
            accuracy: "Genauigkeit",
            sweeps: "Treffer",
            breaches: "Durchbrüche",
            peakLevel: "Level",
            getReady: "BEREIT"
          },
          rulesTitle: "Regeln und Wertung",
          rulesItems: [
            { title: "Ziele abfangen & Zeitbonus", text: "Klicke Ziele an, die vom Rand auf den Kern zukommen: 100 Punkte (mit Combo- und Level-Multiplikator) und +2 Sekunden (maximal 60 Sekunden)." },
            { title: "Combo-Multiplikator", text: "Treffer ohne Fehler steigern den Multiplikator auf bis zu 3,0x." },
            { title: "Steigende Schwierigkeit", text: "Mit steigender Punktzahl werden die Ziele schneller (bis 520 px/s) und erscheinen dichter (bis 0,20 s Abstand)." },
            { title: "Kern erreicht & Fehlklicks", text: "Erreicht ein Ziel den Kern oder klickst du ins Leere, fällt die Combo auf 1,0x und du verlierst 1 Sekunde." }
          ],
          aboutTitle: "Über das periphere Blickfeld Spiel",
          aboutSections: [
            {
              title: "Aufmerksamkeit verschieben, ohne hinzuschauen",
              subtitle: "Posner (1980): räumliche Aufmerksamkeit",
              content: "Man kann die Aufmerksamkeit an eine andere Stelle lenken, ohne die Augen zu bewegen. Hier bleibt der Blick auf dem Kern, während du Ziele am Rand bemerkst."
            },
            {
              title: "Auffällige bewegte Ziele",
              subtitle: "Treisman (1980): visuelle Suche",
              content: "Kontrastreiche, bewegte Ziele fallen auch am Rand schnell auf. Wer das ganze Feld locker im Blick hat, bemerkt neue Ziele früher."
            },
            {
              title: "Grob bewegen, fein korrigieren",
              subtitle: "Woodworth (1899) und Fitts (1954)",
              content: "Schnelles Zeigen besteht aus einer großen Bewegung und einer kleinen Schlusskorrektur. Nahe am Kern abbremsen und sauber klicken."
            },
            {
              title: "Mehrere Ziele gleichzeitig",
              subtitle: "Später kürzere Abstände",
              content: "Später kommen Ziele kurz nacheinander, die Aufmerksamkeit muss geteilt werden. Blick in der Mitte lassen und die Ziele nahe am Kern zuerst abfangen."
            }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
