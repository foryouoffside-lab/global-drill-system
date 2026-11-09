import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Zickzack-Tracking: ausweichende Ziele treffen | SkillDrills";
const DESCRIPTION = "Kostenloses Zickzack-Tracking im Browser: Halte das Fadenkreuz auf einem Ziel mit abrupten Richtungswechseln und leere seine HP-Leiste, bevor es entkommt.";
const NAME = "Zickzack-Tracking";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Zickzack-Tracking",
    "Zickzack Tracking Training",
    "ausweichende Ziele",
    "reaktives Tracking",
    "Richtungswechsel Tracking",
    "Slide-Cancel Tracking"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/de/drills/fps/anti-zigzag-movement-trainer",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AntiZigzagDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Drills", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/de/drills/fps/anti-zigzag-movement-trainer" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenloses Zickzack-Tracking im Browser: Halte das Fadenkreuz auf einem ausweichenden Ziel, bis seine HP-Leiste leer ist.",
    "genre": "FPS Training / Reactive Tracking",
    "url": "https://skilldrills.online/de/drills/fps/anti-zigzag-movement-trainer",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": NAME,
    "url": "https://skilldrills.online/de/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Reaktives Tracking im Browser gegen ausweichende Ziele, die im Zickzack die Richtung wechseln."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/de/drills/fps/anti-zigzag-movement-trainer",
    "description": "Kostenloses Zickzack-Tracking im Browser: Halte das Fadenkreuz auf einem ausweichenden Ziel, bis seine HP-Leiste leer ist.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Wie funktioniert das Zickzack-Tracking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein Ziel erscheint an einer zufälligen Stelle, läuft nach links oder rechts, driftet dabei leicht nach oben oder unten und wechselt in unregelmäßigen Abständen die Richtung. Du klickst nicht: Solange das Fadenkreuz auf dem Ziel liegt, sinkt seine HP-Leiste. Eine Runde startet mit 45 Sekunden."
        }
      },
      {
        "@type": "Question",
        "name": "Wie zerstöre ich ein Ziel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Auf dem Ziel verliert es 65 HP pro Sekunde, nach insgesamt etwa 1,5 Sekunden ist es zerstört. Dafür gibt es 25 Punkte mal Combo-Multiplikator als Bonus, danach erscheint ein neues Ziel. Abgezogene HP bleiben erhalten, auch wenn du zwischendurch danebenliegst."
        }
      },
      {
        "@type": "Question",
        "name": "Wie werden Punkte und Combo berechnet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Auf dem Ziel gibt es alle 0,25 Sekunden 10 Punkte mal Combo-Multiplikator und Level-Bonus, und die Restzeit steigt um 0,1 Sekunden (maximal 60 Sekunden). Jede am Stück gehaltene Sekunde erhöht die Combo um 1; der Multiplikator erreicht bei Combo 50 maximal 3,0x."
        }
      },
      {
        "@type": "Question",
        "name": "Warum verschwindet das Ziel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Jedes Ziel hat eine Lebensdauer: etwa 4,2 Sekunden auf Level 1, mit steigendem Level bis etwa 1,8 Sekunden. Zerstörst du es nicht rechtzeitig, entkommt es, die Combo fällt auf 0 und ein neues Ziel erscheint. Auch mehr als 1 Sekunde neben dem Ziel setzt die Combo zurück."
        }
      },
      {
        "@type": "Question",
        "name": "Wie steigt die Schwierigkeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle 1400 Punkte steigt das Level um 1, ohne Obergrenze. Mit jedem Level wird das Ziel kleiner und schneller, und der Abstand zwischen den Richtungswechseln schrumpft von etwa 1,2 Sekunden immer weiter."
        }
      },
      {
        "@type": "Question",
        "name": "Wie treffe ich ausweichende Ziele besser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ein großer Flick bei jedem Richtungswechsel schießt meist über das Ziel hinaus. Schau auf die Zielmitte, brems nach dem Wechsel kurz ab und passe dich dann dem neuen Tempo an. Der Drill bildet keine Slides nach, sondern abrupte Zickzack-Wechsel – nützlich etwa für Apex Legends, Valorant oder Call of Duty, wenn Gegner ausweichend laufen. Wie viel davon ins Spiel übergeht, ist individuell."
        }
      },
      {
        "@type": "Question",
        "name": "Funktioniert das auf Handy oder Touchscreen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nein. Der Drill liest Mausbewegungen über Pointer Lock und braucht deshalb eine Maus. Auf reinen Touch-Geräten erscheint statt des Start-Buttons ein Hinweis. Mit Esc beendest du den Drill jederzeit."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Zickzack-Tracking trainieren",
    "description": "Schritte, um ein ausweichendes Ziel im Zickzack zu verfolgen und zu zerstören.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Sensitivität einstellen",
        "text": "Stelle auf der Drill-Übersicht die gemeinsame Maus-Sensitivität so ein, dass sie sich wie gewohnt anfühlt."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Starten",
        "text": "Klicke auf Start: Der Drill geht in den Vollbildmodus und aktiviert nach dem Countdown Pointer Lock."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Dranbleiben",
        "text": "Halte das Fadenkreuz auf dem Ziel, um seine HP-Leiste zu leeren."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Rechtzeitig zerstören",
        "text": "Zerstöre das Ziel, bevor es entkommt, um den Bonus zu holen und die Combo zu halten."
      }
    ]
  };

  const antiZigzagGuide = {
    heading: "Zickzack-Tracking: Anleitung gegen ausweichende Ziele",
    intro: [
      "Beim Zickzack-Tracking von SkillDrills hältst du das Fadenkreuz auf einem Ziel, das abrupt die Richtung wechselt, und leerst so seine HP-Leiste. Klicken ist nicht nötig – die Zeit auf dem Ziel ist der Schaden.",
      "Das Ziel erscheint zufällig, läuft seitlich mit leichter Auf- und Abbewegung und prallt an den Rändern ab. Auf Level 1 wechselt es etwa alle 1,2 Sekunden die Richtung, mit steigendem Level immer öfter. Jedes Ziel hat eine begrenzte Lebensdauer und entkommt, wenn du zu lange brauchst.",
      "Eine Runde beginnt mit 45 Sekunden; auf dem Ziel kommen pro Sekunde 0,4 Sekunden dazu (maximal 60 Sekunden). Punkte und Level haben keine Obergrenze."
    ],
    techniques: {
      title: "Tipps für Zickzack-Tracking",
      items: [
        {
          name: "Nicht überflicken",
          desc: "Ein weiter Flick beim Richtungswechsel landet auf der anderen Seite und kostet Schadenszeit.",
          tips: "Nach dem Wechsel kurz abbremsen und dann ins neue Tempo einsteigen."
        },
        {
          name: "Die Spur lesen",
          desc: "Hinter dem Ziel wird seine letzte Bewegung als kurze Linie gezeichnet.",
          tips: "Die Richtung der Linie zeigt dir, wohin das Ziel gerade läuft."
        },
        {
          name: "Zerstören hat Vorrang",
          desc: "Läuft die Lebensdauer ab, ist die Combo weg – sammle Zeit auf dem Ziel und mach es schnell kaputt.",
          tips: "Unter halben HP färbt sich die Leiste rot. Jetzt nicht loslassen."
        },
        {
          name: "Locker greifen",
          desc: "Mit verkrampfter Hand werden die kleinen Korrekturen in alle Richtungen ruckelig.",
          tips: "Nur so fest greifen, dass Finger und Handgelenk frei arbeiten."
        }
      ]
    },
    steps: [
      "Gemeinsame Maus-Sensitivität auf der Drill-Übersicht einstellen.",
      "Start klicken, um Vollbild und Pointer Lock zu aktivieren.",
      "Das Fadenkreuz auf dem Zickzack-Ziel halten und die HP-Leiste leeren.",
      "Das Ziel vor Ablauf seiner Lebensdauer zerstören, um 25 Punkte × Combo zu holen.",
      "Nach der Runde Tracking-Genauigkeit, beste Combo und Level vergleichen."
    ],
    audience: "Spieler, die in Apex Legends, Valorant oder Call of Duty ausweichende Gegner aus dem Fadenkreuz verlieren, und alle, die Zickzack-Tracking kostenlos im Browser üben wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/de/drills/fps/anti-strafe-jitter-duel", label: "ADAD-Tracking" },
      { href: "/de/drills/fps/target-switching-swarm", label: "Target Switching Aim Trainer" },
      { href: "/de/drills/fps/pro-smooth-pursuit", label: "Smooth Pursuit Aim Trainer" },
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/180-degree-awareness", label: "180 Grad Aiming" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
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
      <AntiZigzagClient
        copy={{
          h1Keyword: "Zickzack-Tracking",
          h1Suffix: " – ausweichende Ziele treffen",
          statScore: "Punkte",
          statTime: "Zeit",
          statAccuracy: "Genauigkeit",
          statBestScore: "Bestwert",
          startTitle: NAME,
          startSubtitle: "Reaktives Tracking gegen Richtungswechsel • Endlose Level",
          getReady: "BEREIT",
          stageCaption: "Halte das Fadenkreuz auf dem Zickzack-Ziel und leere seine HP-Leiste. Klicken ist nicht nötig.",
          rulesTitle: "Regeln & Punktesystem",
          rulesItems: [
            { num: "1", text: "Auf dem Ziel bleiben", highlight: "10 Pkt. / 0,25 s (+0,4 s/s)", result: "×Combo-Multiplikator" },
            { num: "2", text: "Ziel zerstört", highlight: "25 Pkt. × Combo", result: "Neues Ziel" },
            { num: "3", text: "Level-Aufstieg", highlight: "+1 Level / 1400 Pkt.", result: "Kleiner & schneller" },
            { num: "4", text: "Ziel entkommt / 1 s daneben", highlight: "Combo-Reset", result: "Combo neu aufbauen" }
          ],
          aboutTitle: "Über Zickzack-Tracking"
        }}
      />
      <DrillGuide guide={antiZigzagGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
