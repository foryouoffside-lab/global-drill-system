import FPSHubClient from '@/app/drills/fps/FPSHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');

export const metadata = {
  title: 'Aim Training & kostenloser FPS-Trainer | SkillDrills',
  description: 'Kostenloses Aim Training für Valorant, CS2 und Apex: 15 FPS-Übungen für Flicks, Tracking, Recoil Control und Reaktion direkt im Browser.',
  keywords: [
    'Aim Training', 'Aim Training kostenlos', 'Aiming verbessern',
    'Valorant Aim Training', 'CS2 Aim Training', 'Flick-Shots üben',
    'Tracking trainieren', 'Recoil Kontrolle', 'Aim Übungen',
    'Fadenkreuz Platzierung', 'Maus Sensitivität', 'Zielgenauigkeit Test',
    'Maus Präzision verbessern', 'eDPI Rechner Shooter', 'FPS Trainer'
  ],
  openGraph: {
    title: 'Aim Training & kostenloser FPS-Trainer | SkillDrills',
    description: 'Kostenloses Aim Training für Valorant, CS2 und Apex: 15 FPS-Übungen für Flicks, Tracking, Recoil Control und Reaktion direkt im Browser.',
    type: 'website',
    url: 'https://skilldrills.online/de/drills/fps',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Kostenloser FPS Aim Trainer Hub' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aim Training & kostenloser FPS-Trainer | SkillDrills',
    description: 'Kostenloses Aim Training mit 15 FPS-Übungen für Valorant, CS2 und Apex direkt im Browser.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/fps',
    languages: getAlternateLanguages('/de/drills/fps'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Trainingsdrills Übersicht", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "FPS Aiming", "item": "https://skilldrills.online/de/drills/fps" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "de-DE",
  "dateModified": "2026-11-09",
  "name": "Aim Training & kostenloser FPS-Trainer (15 Übungen)",
  "url": "https://skilldrills.online/de/drills/fps",
  "description": `Kostenloses Aim Training für Valorant, CS2 und Apex: Flicks, Tracking, Recoil Control, Target Switching und Reaktion direkt im Browser.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": fpsDrills.map((drill) => {
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
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie überträgt sich gezieltes Aim-Training auf taktische Shooter wie Valorant und CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In Valorant und CS2 entscheiden oft die ersten Schüsse ein Duell, deshalb zählen Treffsicherheit beim ersten Schuss und kleine Korrekturen. Ein Deathmatch im Spiel hat Respawn- und Laufzeiten, während ein Browser-Aim-Training in kurzer Zeit viel mehr Flicks und saubere Stopps wiederholt. Wird die Bewegung gleichmäßiger, bleibt im Match mehr Aufmerksamkeit für Crosshair Placement und Spielübersicht. Wie gut sich das überträgt, ist individuell, vergleiche deshalb auch deine Ergebnisse im Spiel."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen Klicktiming (Flicks), Tracking und Target Switching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die mechanische Zielgenauigkeit in FPS-Spielen basiert auf drei Säulen: 1) Klicktiming / Flicks: Die Maus wird explosionsartig auf ein Ziel bewegt und genau im Schnittpunkt der Hitbox ausgelöst – essenziell für Einzelschusswaffen wie Vandal oder AK-47. 2) Tracking (Verfolgung): Das Fadenkreuz synchronisiert sich kontinuierlich mit der Bewegungsbahn eines Ziels, was bei Dauerfeuerwaffen in Apex Legends und Overwatch 2 entscheidend ist. 3) Target Switching: Schnelles, ballistisches Umschalten zwischen mehreren Zielen mit minimaler Verweilzeit, unabdingbar in 1-gegen-Mehrere-Kupplungssituationen."
      }
    },
    {
      "@type": "Question",
      "name": "Sollte man mit dem Handgelenk, dem Unterarm oder einer Hybridtechnik zielen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Viele Spieler nutzen eine Hybridtechnik: Unterarm und Schulter übernehmen große Bewegungen wie 180°-Drehungen, das Handgelenk mittlere Distanzen und die Finger kleine Korrekturen auf Kopfhöhe. Reines Handgelenk-Zielen schränkt den Bewegungsradius ein, reines Arm-Zielen erschwert sehr kleine Korrekturen. Wähle, was sich angenehm anfühlt, und pausiere, wenn Schmerzen auftreten."
      }
    },
    {
      "@type": "Question",
      "name": "Wie ermittelt man die optimale Mausempfindlichkeit und cm/360?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Empfindlichkeit wird am verlässlichsten in Zentimetern pro 360-Grad-Umdrehung (cm/360) gemessen. Für taktische Shooter (Valorant, CS2) bietet eine niedrige Sensitivität von 35 bis 55 cm/360 (eDPI 200 bis 320) maximale Stabilität für Mikroadjustierungen. Für tracking-lastige Arena-Shooter (Apex Legends, Overwatch 2) ist eine mittlere Sensitivität von 24 bis 38 cm/360 ideal. Teste die Einstellung, indem du während des seitlichen Ausweichens (Strafing) ein festes Ziel ohne Fadenkreuz-Zittern dauerhaft anvisierst."
      }
    },
    {
      "@type": "Question",
      "name": "Warum zittert mein Aim oder schießt über das Ziel hinaus (Overshooting), und wie behebe ich das?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unruhiges Zielen und Überschwingen entstehen meist durch zu hohe Muskelanspannung im Unterarm, einen verkrampften Mausgriff oder eine Sensitivität, die über der aktuellen motorischen Bremskontrolle liegt. Zur Behebung: 1) Trainiere die gezielte Reibung auf dem Mauspad, indem du die Maus am Endpunkt des Flicks sanft andrückst (Braking-Mechanismus); 2) Absolviere Smooth-Pursuit-Tracking-Drills, um flüssige, spannungsfreie Bewegungen zu konditionieren; 3) Senke die Sensitivität um 10 bis 15%, um die Fehlertoleranz zu vergrößern."
      }
    },
    {
      "@type": "Question",
      "name": "Ist ein Online-Browser-Aim-Trainer genauso reaktionsschnell wie installierte Software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Für das Training im Wesentlichen ja. SkillDrills zeichnet auf einem HTML5-Canvas und nutzt die Pointer-Lock-API des Browsers, die den Mauszeiger ausblendet und relative Mausbewegungen (movementX/movementY) liefert, sodass auch lange Flicks nicht am Bildschirmrand enden. Die Zielbewegung wird aus der verstrichenen Zeit statt aus der Bildzahl berechnet und bleibt daher auf 144-, 240- und 360-Hz-Displays konsistent. Die Browsereingabe läuft aber weiterhin über die Zeigereinstellungen Ihres Betriebssystems; halten Sie DPI, Empfindlichkeit und Mausbeschleunigung zwischen den Sitzungen konstant, wenn Sie Ergebnisse vergleichen."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist wichtiger: Fadenkreuz-Platzierung (Crosshair Placement) oder rohes Flick-Aiming?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gutes Crosshair Placement (Vorzielen auf Kopfhöhe an der Stelle, an der ein Gegner erscheinen wird) hilft häufiger, weil dann kaum noch ein großer Flick nötig ist. Bei unerwarteten Off-Angles, weiten Swings oder mehreren Gegnern gleichzeitig reicht Vorzielen aber nicht, und schnelle Flicks mit Mikrokorrekturen entscheiden. Trainiere beides getrennt: Placement im Crosshair Placement Training, Flicks im Flick-Training."
      }
    },
    {
      "@type": "Question",
      "name": "Wie lange sollte man täglich Aim-Drills für optimalen Fortschritt trainieren?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kurze, konzentrierte Einheiten lassen sich leichter regelmäßig durchhalten als stundenlange Sessions am Wochenende. Ein praktischer Startpunkt sind 15 bis 25 Minuten an mehreren Tagen pro Woche; hör auf, wenn die Trefferquote sinkt oder die Hand ermüdet. Eine feste Zahl, die für alle passt, gibt es nicht, orientiere dich an deinen eigenen Werten."
      }
    }
  ]
};

export default function GermanFPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
