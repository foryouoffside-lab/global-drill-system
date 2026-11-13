import VisualDrillsClient from '@/app/drills/visual/VisualDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const visualDrills = DRILLS.filter((d) => d.category === 'visual');

export const metadata = {
  title: 'Visuelles Training online: Reaktion & Tracking | SkillDrills',
  description: 'Visuelles Training online: 9 kostenlose Browser-Drills für visuelle Reaktion, bewegte Ziele, visuelle Suche und Entfernungen. Kein Sehtest, ohne Anmeldung.',
  keywords: ['visuelles Training online', 'visuelle Reaktion', 'bewegte Ziele verfolgen', 'visuelle Suche', 'mehrere Objekte verfolgen', 'Entfernung einschätzen', 'Blickfolge', 'kostenlose Browser-Drills'],
  openGraph: {
    title: 'Visuelles Training online: Reaktion & Tracking | SkillDrills',
    description: 'Visuelles Training online: 9 kostenlose Browser-Drills für visuelle Reaktion, bewegte Ziele, visuelle Suche und Entfernungen. Kein Sehtest, ohne Anmeldung.',
    type: 'website',
    url: 'https://skilldrills.online/de/drills/visual',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Visuelles Training online auf SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visuelles Training online: Reaktion & Tracking | SkillDrills',
    description: 'Visuelles Training online: 9 kostenlose Browser-Drills für visuelle Reaktion, bewegte Ziele, visuelle Suche und Entfernungen. Kein Sehtest, ohne Anmeldung.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/visual',
    languages: getAlternateLanguages('/drills/visual'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Leistungsübungen", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelles Training", "item": "https://skilldrills.online/de/drills/visual" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "de",
  "dateModified": "2026-11-12",
  "name": "Visuelles Training online (9 Drills)",
  "url": "https://skilldrills.online/de/drills/visual",
  "description": "9 kostenlose Browser-Drills für visuelle Reaktion, Impulskontrolle, bewegte Ziele, mehrere Objekte, visuelle Suche und das Einschätzen von Entfernungen.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": visualDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'de', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/de${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "de",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hilft visuelles Training im Browser beim Sport oder in FPS-Spielen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Drills üben, bewegte Ziele mit Blick und Maus zu verfolgen, auf visuelle Signale zu reagieren und Ziele zu suchen. Eine Verbesserung im Ballsport oder in FPS-Spielen ist damit nicht garantiert. Nutze sie als Zusatzübung und vergleiche deine eigenen Werte auf demselben Gerät."
      }
    },
    {
      "@type": "Question",
      "name": "Ist die Entfernungsübung ein Test für räumliches Sehen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nein. Ein flacher Bildschirm hat keine binokulare Disparität, daher wird kein Stereo- oder 3D-Sehen geprüft. Eine Kugel nähert sich und wird auf dem Bildschirm größer; du klickst, wenn sie die markierte Tiefe erreicht. Geübt wird das Einschätzen von Entfernung und Timing."
      }
    },
    {
      "@type": "Question",
      "name": "Was übt das Verfolgen mehrerer Objekte (MOT)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du behältst markierte Ziele zwischen gleich aussehenden, bewegten Objekten im Blick. Das beansprucht geteilte Aufmerksamkeit und visuelles Arbeitsgedächtnis. Dass sich dadurch das Blickfeld erweitert oder Leistungen im Straßenverkehr steigen, ist nicht belegt."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Blickfolge und Sakkaden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bei der glatten Blickfolge folgen die Augen einem bewegten Ziel gleichmäßig, Sakkaden sind schnelle Blicksprünge. Die Tracking-Drills fordern vor allem Blickfolge, die Seite misst deine Augenbewegungen aber nicht."
      }
    },
    {
      "@type": "Question",
      "name": "Was misst die Lichtreaktions-Übung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Zeit zwischen dem Lichtsignal auf dem Bildschirm und deinem Klick. Darin stecken auch Verzögerungen von Bildschirm, Maus und Browser; es ist keine reine Nervenleitzeit."
      }
    },
    {
      "@type": "Question",
      "name": "Was übt die visuelle Suche?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du suchst ein Ziel zwischen ablenkenden Elementen. Das trainiert gezielte Aufmerksamkeit und Suchgeschwindigkeit in genau dieser Aufgabe; ein Transfer in den Alltag ist individuell und nicht garantiert."
      }
    },
    {
      "@type": "Question",
      "name": "Hängen meine Ergebnisse von der Hardware ab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Ein Bildschirm aktualisiert bei 60 Hz etwa alle 16,7 ms, bei 144 Hz alle 6,9 ms und bei 240 Hz alle 4,1 ms. Vergleiche Durchgänge deshalb mit demselben Bildschirm, derselben Maus und demselben Browser."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange sollte eine Trainingseinheit dauern?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eine belegte Idealdauer gibt es nicht. Halte die Einheiten kurz und regelmäßig, schau zwischendurch in die Ferne und hör bei Ermüdung, Kopfschmerzen oder Unwohlsein auf."
      }
    }
  ]
};

faqSchema.mainEntity.push(
  { "@type": "Question", "name": "Wie viele Übungen enthält der Bereich für visuelles Training?", "acceptedAnswer": { "@type": "Answer", "text": "Der Bereich enthält 9 Browser-Drills in drei Schwerpunkten: Reaktion und Impulskontrolle, Zielverfolgung und Augenbewegung sowie Erkennung und Tiefenwahrnehmung. Jede Karte öffnet die passende Übung." } },
  { "@type": "Question", "name": "Was messen visuelle Browser-Drills?", "acceptedAnswer": { "@type": "Answer", "text": "Sie üben wiederholbare Aufgaben zu Reaktion, Verfolgung, Suche und räumlichem Urteil. Vergleiche deine Ergebnisse auf demselben Gerät mit denselben Einstellungen." } }
);

export default function VisualDrillsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VisualDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
