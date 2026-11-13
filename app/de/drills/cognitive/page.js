import CognitiveHubClient from '@/app/drills/cognitive/CognitiveHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');

export const metadata = {
  title: 'Gehirnjogging online & Gehirntraining kostenlos | SkillDrills',
  description: 'Gehirnjogging online: 8 kostenlose Übungen für Aufmerksamkeit, Konzentration und Verarbeitungsgeschwindigkeit, mit Stroop-Test und Schulte-Tabelle.',
  keywords: [
    'Gehirntraining kostenlos', 'Gehirnjogging', 'Konzentrationsspiele', 'kognitives Training',
    'Gehirnjogging online', 'Gehirntraining', 'Verarbeitungsgeschwindigkeit Test',
    'Stroop Test', 'Schulte Tabelle', 'Aufmerksamkeit trainieren', 'Arbeitsgedächtnis trainieren',
    'Gehirnspiele online', 'Denksport kostenlos', 'geteilte Aufmerksamkeit Test', 'mentale Agilität'
  ],
  openGraph: {
    title: 'Gehirnjogging online & Gehirntraining kostenlos | SkillDrills',
    description: 'Gehirnjogging online: 8 kostenlose Übungen für Aufmerksamkeit, Konzentration und Verarbeitungsgeschwindigkeit, mit Stroop-Test und Schulte-Tabelle.',
    type: 'website',
    url: 'https://skilldrills.online/de/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Kostenloses Gehirntraining & Kognitive Übungen Übersicht' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gehirnjogging online & Gehirntraining kostenlos | SkillDrills',
    description: 'Gehirnjogging online: 8 kostenlose Übungen für Aufmerksamkeit, Konzentration und Verarbeitungsgeschwindigkeit im Browser.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/cognitive',
    languages: getAlternateLanguages('/de/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Alle Trainingsdrills", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Gehirntraining & Kognition", "item": "https://skilldrills.online/de/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12",
  "name": "Kostenloses Gehirntraining & Kognitive Übungen (8 Drills)",
  "url": "https://skilldrills.online/de/drills/cognitive",
  "description": "8 kostenlose Drills für selektive Aufmerksamkeit, Arbeitsgedächtnis, Stroop-Interferenz, visuelle Verarbeitungsgeschwindigkeit und Schulte-Tabellen.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": cognitiveDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'de', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/de${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was versteht man unter kognitivem Training und welche neurobiologischen Prozesse werden aktiviert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kognitives Training besteht aus wiederholbaren Aufgaben, die gezielt selektive Aufmerksamkeit, geteilte Aufmerksamkeit, Aufgabenwechsel und Verarbeitungsgeschwindigkeit beanspruchen. Anders als beim Auswendiglernen von Fakten übst du hier, unter Zeitdruck die richtige Reaktion zu wählen. Wer eine Aufgabe regelmäßig wiederholt, wird darin meist sicherer und schneller; eine dauerhafte Veränderung der Hirnfunktion ist damit nicht belegt."
      }
    },
    {
      "@type": "Question",
      "name": "Können gezielte Gehirntraining-Übungen die visuelle Verarbeitungsgeschwindigkeit messbar beschleunigen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei derselben Aufgabe werden Entscheidungen und Eingaben durch Wiederholung oft schneller. Dass sich dadurch die neuronale Verarbeitung allgemein beschleunigt, ist nicht belegt, und feste Prozentwerte lassen sich nicht versprechen. Vergleiche deine eigenen Ergebnisse über mehrere Sitzungen auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Worin liegt der Unterschied zwischen fokussierter Daueraufmerksamkeit und geteilter Aufmerksamkeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fokussierte Daueraufmerksamkeit (Vigilanz) beschreibt die Fähigkeit des Locus-Coeruleus-Noradrenalin-Systems und des präfrontalen Kortex, die Konzentration über lange Zeiträume auf eine einzige Aufgabe zu richten und innere wie äußere Ablenkungen zu unterdrücken. Geteilte Aufmerksamkeit (Dual-Tasking) hingegen beansprucht die frontoparietalen Aufmerksamkeitsnetzwerke, um kognitive Ressourcen parallel auf mehrere konkurrierende Informationsströme zu verteilen oder blitzschnell zwischen ihnen zu wechseln."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Stroop-Effekt und wie wird damit die exekutive Hemmungskontrolle (Inhibition) gemessen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Der Stroop-Effekt beschreibt den Konflikt zwischen automatischem Wortlesen und dem bewussten Benennen der Schriftfarbe: Steht das Wort 'Rot' in blauer Farbe, muss der Lesereflex unterdrückt werden. Im klassischen Stroop-Test wird dazu der Zeitunterschied zwischen passenden und nicht passenden Farb-Wort-Paaren gemessen. Der Stroop-Drill von SkillDrills ist eine Übung: Du wählst die Schriftfarbe, und gespeichert werden Punkte, Genauigkeit und erreichtes Level, kein Interferenzwert."
      }
    },
    {
      "@type": "Question",
      "name": "Wie trainiert das Schulte-Tabellen-Gitter das periphere Sehen und die visuelle Suchgeschwindigkeit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Schulte-Tabelle ist ein Zahlengitter, in dem du zufällig verteilte Zahlen ab 1 in aufsteigender Reihenfolge suchst; bekannt ist vor allem die 5×5-Variante. In der SkillDrills-Version beginnt das Gitter bei 3×3 und wird nach jeder vollständig gelösten Tabelle größer. Den Blick in der Mitte zu halten und die nächste Zahl peripher zu suchen, ist eine gute Übungsstrategie; dass sich peripheres Sehen oder Blicksprünge um einen festen Betrag verbessern, ist nicht belegt. Miss deinen Fortschritt an deiner eigenen Lösungszeit."
      }
    },
    {
      "@type": "Question",
      "name": "Lassen sich die Trainingserfolge aus kognitiven Drills auf Gaming und berufliche Alltagsleistungen übertragen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Forschung unterscheidet Nah-Transfer und Fern-Transfer. Verbesserungen bei sehr ähnlichen Aufgaben (Nah-Transfer) sind gut dokumentiert. Ob sich das Training auf Gaming, Beruf oder Alltag überträgt, ist nicht gesichert und individuell verschieden. Visuelle Suche und das Ausblenden von Ablenkern ähneln zwar Tätigkeiten wie dem Lesen einer Minimap, ein Transfer darauf ist aber nicht garantiert. Auch ein Effekt auf den IQ ist nicht belegt."
      }
    },
    {
      "@type": "Question",
      "name": "Wie oft und wie lange sollte man Gehirntraining durchführen, um kognitive Ermüdung zu vermeiden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein festes wissenschaftliches Optimum gibt es nicht. Kurze, konzentrierte Einheiten von etwa 10 bis 15 Minuten mehrmals pro Woche lassen sich gut vergleichen. Wenn deine Genauigkeit durch Müdigkeit sinkt, ist eine Pause sinnvoller als ein längeres Training."
      }
    },
    {
      "@type": "Question",
      "name": "Wie nutze ich kognitives Training am besten?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nutze die Drills als kurze Übung, um deine eigenen Ergebnisse in Aufmerksamkeits- und Tempoaufgaben zu verfolgen, und vergleiche deine Werte am besten auf demselben Gerät."
      }
    }
  ]
};

export default function LocalizedCognitiveHubClientPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CognitiveHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
