import AntiStrafeJitterClient from '@/app/drills/fps/anti-strafe-jitter-duel/AntiStrafeJitterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "ADAD-Tracking: Anti-Strafe-Training im Browser | SkillDrills";
const DESCRIPTION = "Kostenloses ADAD-Tracking im Browser: Halte das Fadenkreuz auf einem Ziel mit zufälligen Links-rechts-Wechseln. Punkte alle 0,25 s, Combo pro gehaltener Sekunde.";
const NAME = "ADAD-Tracking – Anti-Strafe-Training";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ADAD-Tracking",
    "ADAD Tracking Training",
    "Anti-Strafe",
    "Anti-Strafe Training",
    "reaktives Tracking",
    "Strafe Tracking",
    "Nahkampf Tracking"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/anti-strafe-jitter-duel",
    languages: getAlternateLanguages('/drills/fps/anti-strafe-jitter-duel'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/de/drills/fps/anti-strafe-jitter-duel",
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

export default function AntiStrafeJitterDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Drills", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/de/drills/fps/anti-strafe-jitter-duel" }
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
    "description": "Kostenloses ADAD-Tracking-Training im Browser: Halte das Fadenkreuz auf einem Ziel, das zufällig die Richtung wechselt.",
    "genre": "FPS Training / Anti-Strafe",
    "url": "https://skilldrills.online/de/drills/fps/anti-strafe-jitter-duel",
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
    "url": "https://skilldrills.online/de/drills/fps/anti-strafe-jitter-duel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    },
    "description": "Anti-Strafe-Training im Browser: reaktives Tracking gegen ein Ziel, das wie ein ADAD-Strafe links-rechts wechselt."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/de/drills/fps/anti-strafe-jitter-duel",
    "description": "Kostenloses ADAD-Tracking-Training im Browser: Halte das Fadenkreuz auf einem Ziel, das zufällig die Richtung wechselt.",
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
        "name": "Wie funktioniert dieses ADAD-Tracking-Training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine Zielkugel bewegt sich auf mittlerer Bildschirmhöhe nur nach links und rechts und wechselt in zufälligen Abständen Richtung und Tempo. Du klickst nicht, sondern hältst das Fadenkreuz mit der Maus auf dem Ziel. Die Runde startet mit 45 Sekunden und endet, wenn die Zeit abgelaufen ist."
        }
      },
      {
        "@type": "Question",
        "name": "Wie werden Punkte und Combo berechnet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solange das Fadenkreuz auf dem Ziel liegt, gibt es alle 0,25 Sekunden 10 Punkte mal Combo-Multiplikator und Level-Bonus, und die Restzeit steigt um 0,1 Sekunden (maximal 60 Sekunden). Jede ununterbrochen gehaltene Sekunde erhöht die Combo um 1; der Multiplikator liegt bei Combo 3 bei 1,1x und erreicht bei Combo 50 maximal 3,0x."
        }
      },
      {
        "@type": "Question",
        "name": "Was passiert, wenn ich das Ziel verliere?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bist du länger als 1 Sekunde vom Ziel weg, fällt die Combo auf 0. Wenn du in den Drill-Einstellungen die Zeitstrafe aktiviert hast, werden dabei zusätzlich 0,6 Sekunden abgezogen. Standardmäßig ist sie aus."
        }
      },
      {
        "@type": "Question",
        "name": "Wie steigt die Schwierigkeit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alle 1400 Punkte steigt das Level um 1, ohne Obergrenze. Mit jedem Level wird das Ziel kleiner, der Strafe schneller und die Abstände zwischen den Richtungswechseln kürzer. Eine hohe Combo zieht die Schwierigkeit zusätzlich leicht an."
        }
      },
      {
        "@type": "Question",
        "name": "Hilft Anti-Strafe-Training in echten Spielen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Der Drill vereinfacht die Situation, in der ein Gegner auf kurze Distanz A und D abwechselnd drückt. Du übst gezielt, das Fadenkreuz direkt nach einem Richtungswechsel wieder aufs Ziel zu bringen, etwa für Valorant, CS2, Apex Legends oder Overwatch 2. Wie stark sich das auf dein Spiel überträgt, ist individuell verschieden."
        }
      },
      {
        "@type": "Question",
        "name": "Mein Aim hängt bei Richtungswechseln hinterher. Was tun?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Greif die Maus locker und schau auf das Ziel statt auf das Fadenkreuz. Statt bei jedem Wechsel weit hinterherzuflicken, kurz abbremsen und dann im Tempo des Ziels wieder anlegen – so bleibt die Zeit neben dem Ziel meist kürzer."
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
    "name": "ADAD-Tracking trainieren",
    "description": "Schritte für das Anti-Strafe-Training gegen ein links-rechts wechselndes Ziel.",
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
        "name": "Ziel verfolgen",
        "text": "Halte das Fadenkreuz auf dem Ziel und lege nach jedem Richtungswechsel sofort wieder an."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Auswerten",
        "text": "Prüfe nach der Runde Tracking-Genauigkeit, Zeit neben dem Ziel, beste Combo und erreichtes Level."
      }
    ]
  };

  const antiStrafeGuide = {
    heading: "ADAD-Tracking: Anleitung zum Anti-Strafe-Training",
    intro: [
      "Dieses ADAD-Tracking-Training von SkillDrills lässt dich das Fadenkreuz auf einem Ziel halten, das wie bei einem ADAD-Strafe zufällig nach links und rechts wechselt. Du klickst nicht – gewertet wird allein, wie lange das Fadenkreuz auf dem Ziel bleibt.",
      "Das Ziel bewegt sich nur horizontal und wechselt in unregelmäßigen Abständen Richtung und Tempo; manche Wechsel schießen schneller heraus als andere. Vorhersagen hilft kaum, entscheidend ist reaktives Tracking direkt nach dem Wechsel.",
      "Eine Runde beginnt mit 45 Sekunden. Solange du auf dem Ziel bist, kommen pro Sekunde 0,4 Sekunden dazu (maximal 60 Sekunden). Punkte und Level haben keine Obergrenze."
    ],
    techniques: {
      title: "Tipps für Anti-Strafe-Tracking",
      items: [
        {
          name: "Locker greifen",
          desc: "Wer die Maus zu fest hält, verkrampft beim Richtungswechsel und das Fadenkreuz ruckelt.",
          tips: "Nur so fest greifen, dass Finger und Handgelenk frei arbeiten, und zwischen längeren Runden die Hand lockern."
        },
        {
          name: "Aufs Ziel schauen",
          desc: "Wer auf die Kugel statt aufs Fadenkreuz schaut, erkennt den Richtungswechsel früher.",
          tips: "Wird das Ziel rot, bist du daneben – nutze den Farbwechsel als Signal."
        },
        {
          name: "Überflicken vermeiden",
          desc: "Ein großer Flick beim Wechsel schießt oft auf die andere Seite hinaus.",
          tips: "Verbinde den Wechsel zu einem Abbremsen und Wiederbeschleunigen statt zu zwei Flicks."
        },
        {
          name: "Die 1-Sekunden-Regel",
          desc: "Jede gehaltene Sekunde bringt +1 Combo, mehr als 1 Sekunde daneben löscht sie.",
          tips: "Nach einem Verlust gilt: innerhalb einer Sekunde wieder aufs Ziel."
        }
      ]
    },
    steps: [
      "Gemeinsame Maus-Sensitivität auf der Drill-Übersicht einstellen.",
      "Start klicken, um Vollbild und Pointer Lock zu aktivieren.",
      "Das Fadenkreuz auf dem links-rechts wechselnden Ziel halten.",
      "Bei Richtungswechseln kurz abbremsen statt weit zu flicken.",
      "Nach der Runde Tracking-Genauigkeit (%), Zeit neben dem Ziel, beste Combo und Level vergleichen."
    ],
    audience: "Spieler, die in Valorant, CS2, Apex Legends oder Overwatch 2 auf kurze Distanz ADAD-Strafes verlieren, und alle, die reaktives Tracking kostenlos im Browser üben wollen.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/de/drills/fps/anti-zigzag-movement-trainer", label: "Zickzack-Tracking" },
      { href: "/de/drills/fps/target-switching-swarm", label: "Target Switching Aim Trainer" },
      { href: "/de/drills/fps/pro-smooth-pursuit", label: "Smooth Pursuit Aim Trainer" },
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/instant-response", label: "FPS Reaktionszeit Test" }
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
      <AntiStrafeJitterClient
        copy={{
          h1Keyword: "ADAD-Tracking",
          h1Suffix: " – Anti-Strafe-Training im Browser",
          statScore: "Punkte",
          statTime: "Zeit",
          statAccuracy: "Genauigkeit",
          statBestScore: "Bestwert",
          startTitle: NAME,
          startSubtitle: "Reaktives Tracking gegen Strafes • Endlose Level",
          getReady: "BEREIT",
          pausedTitle: "PAUSIERT",
          pausedSubtitle: "Klicken zum Fortsetzen – der Mauszeiger wird wieder gesperrt",
          stageCaption: "Halte das Fadenkreuz auf dem Ziel, das zufällig links und rechts die Richtung wechselt. Klicken ist nicht nötig.",
          rulesTitle: "Regeln & Punktesystem",
          rulesItems: [
            { num: "1", text: "Auf dem Ziel bleiben", highlight: "10 Pkt. / 0,25 s (+0,1 s)", result: "×Combo-Multiplikator" },
            { num: "2", text: "1 s am Stück halten", highlight: "Combo +1", result: "Bis 3,0×" },
            { num: "3", text: "Level-Aufstieg", highlight: "+1 Level / 1400 Pkt.", result: "Kleiner & schneller" },
            { num: "4", text: "Über 1 s daneben", highlight: "Combo-Reset", result: "Mit Zeitstrafe -0,6 s" }
          ],
          aboutTitle: "Über ADAD-Tracking und Anti-Strafe",
          aboutHeading: "Was ist reaktives Tracking?"
        }}
      />
      <DrillGuide guide={antiStrafeGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
