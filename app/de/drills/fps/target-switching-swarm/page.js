import TargetSwitchingSwarmClient from '@/app/drills/fps/target-switching-swarm/TargetSwitchingSwarmClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Zielwechsel-Training: Multi-Target im Browser | SkillDrills",
  description: "Kostenloses Zielwechsel-Training im Browser: Triff 2–5 bewegte Ziele nacheinander. Jeder Treffer gibt +2 s (max. 60 s), jeder Fehlklick kostet 1 s.",
  keywords: [
    "Zielwechsel-Training",
    "Zielwechsel Training",
    "Target Switching",
    "Multi-Target Training",
    "Multi-Target Aiming CS2",
    "Spray Transfer Training",
    "Target Switching Übungen",
    "Flick Übergang FPS",
    "Multikill Aiming FPS",
    "schneller Zielwechsel",
    "Zielwechsel ohne Überziehen",
    "Klickrhythmus FPS"
  ],
  alternates: {
    canonical: "https://skilldrills.online/de/drills/fps/target-switching-swarm",
    languages: getAlternateLanguages('/drills/fps/target-switching-swarm'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Zielwechsel-Training: Multi-Target im Browser | SkillDrills",
    description: "Kostenloses Zielwechsel-Training im Browser: Triff 2–5 bewegte Ziele nacheinander. Jeder Treffer gibt +2 s (max. 60 s), jeder Fehlklick kostet 1 s.",
    url: "https://skilldrills.online/de/drills/fps/target-switching-swarm",
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: "Zielwechsel-Training: Multi-Target im Browser | SkillDrills",
    description: "Kostenloses Zielwechsel-Training im Browser: Triff 2–5 bewegte Ziele nacheinander. Jeder Treffer gibt +2 s (max. 60 s), jeder Fehlklick kostet 1 s.",
  },
};

export default function TargetSwitchingSwarmDePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/de" },
      { "@type": "ListItem", "position": 2, "name": "FPS Drills", "item": "https://skilldrills.online/de/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": "Target Switching Swarm", "item": "https://skilldrills.online/de/drills/fps/target-switching-swarm" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Saccade", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
    "name": "Zielwechsel-Training: Multi-Target im Browser",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "description": "Kostenloses Zielwechsel-Training im Browser: 2–5 abprallende Ziele nacheinander treffen und schnelle Multi-Target-Wechsel üben.",
    "genre": "FPS Training / Target Switching",
    "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Zielwechsel-Training: Multi-Target im Browser",
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "EUR" },
    "browserRequirements": "Erfordert Pointer Lock API, JavaScript, HTML5 Canvas",
    "description": "Kostenloses Zielwechsel-Training im Browser: 2–5 abprallende Ziele nacheinander treffen und schnelle Multi-Target-Wechsel üben.",
    "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm"
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Zielwechsel-Training: Multi-Target im Browser",
    "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm",
    "description": "Kostenloses Zielwechsel-Training im Browser: 2–5 abprallende Ziele nacheinander treffen und schnelle Multi-Target-Wechsel üben.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Aim Trainer", "Target Switching"],
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
        "name": "Was versteht man unter Target Switching im FPS-Aiming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Target Switching (Zielwechsel) beschreibt die mechanische und visuo-motorische Fähigkeit, das Fadenkreuz in schneller Abfolge von einem Ziel zum nächsten zu bewegen und jeden Treffer ohne Abstoppen oder Zögern nahtlos zu exekutieren."
        }
      },
      {
        "@type": "Question",
        "name": "Worin unterscheidet sich Target Switching von isoliertem Flick-Training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Klassische Flick-Trainer zeigen isolierte Einzelziele, die nach dem Schuss verschwinden und dem Fadenkreuz eine Neutralpause erlauben. Target Switching konfrontiert dich mit dichten Ziel-Schwärmen (Swarms), die unterbrechungsfreie kinetische Übergänge und kontinuierliche visuelle Pfadfindung fordern."
        }
      },
      {
        "@type": "Question",
        "name": "Nach welchen Regeln läuft dieses Zielwechsel-Training ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Die Uhr startet bei 45 Sekunden. Je nach Level bleiben 2 bis 5 abprallende, bewegte Ziele auf dem Bildschirm. Ein Treffer bringt +100 Punkte mal Combo- und Level-Multiplikator und +2 Sekunden (maximal 60). Ein Klick ins Leere kostet 1 Sekunde und setzt die Combo zurück. Ist die Ziel-Zeitbegrenzung aktiv, verschwinden Ziele, die nicht rechtzeitig getroffen werden (anfangs nach etwa 2,8 Sekunden, auf höheren Leveln schneller), und kosten ebenfalls 1 Sekunde. Alle 2.100 Punkte steigt das Level, die Ziele werden kleiner und schneller. Gespielt wird mit Maus und Pointer Lock, Esc beendet den Drill."
        }
      },
      {
        "@type": "Question",
        "name": "Warum zögern viele Spieler zwischen Zielen nach einem erfolgreichen Kill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dieses Zögern (Confirmation Hesitation) entsteht, wenn Spieler auf visuelle oder akustische Kill-Bestätigungen warten, bevor sie die nächste Augen- und Mausbewegung starten. In diesem Drill verschwindet ein getroffenes Ziel sofort und ein neues erscheint, sodass du übst, ohne Bestätigung direkt mit Blick und Maus zum nächsten Ziel zu wechseln."
        }
      },
      {
        "@type": "Question",
        "name": "Hilft Zielwechsel-Training bei Spray Transfers in CS2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nur teilweise. Dieser Drill wertet einzelne Klicks und simuliert weder Rückstoß noch Dauerfeuer. Das Verlagern des Fadenkreuzes von einem Ziel zum nächsten und das saubere Abstoppen sind aber die Grundlage eines Spray Transfers, daher eignet er sich als Ergänzung."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Spieletitel verlangen die ausgeprägtesten Target-Switching-Fähigkeiten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Zielwechsel sind besonders wichtig in Shootern, in denen du oft mehrere Gegner nacheinander bekämpfst, etwa Overwatch 2, Apex Legends, Warzone oder Counter-Strike 2 bei Retakes."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Mausgriffart begünstigt schnelle und flüssige Zielwechsel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Claw- und Fingertip-Grips bieten überlegene vertikale und horizontale Mikro-Anpassungsfähigkeit, da sie den MCP-Gelenken der Finger und dem Handgelenk erlauben, unabhängig von der Unterarm-Gleitbewegung feine Bremskorrekturen vorzunehmen."
        }
      },
      {
        "@type": "Question",
        "name": "Welcher Zusammenhang besteht zwischen Target Switching und dem Fitts'schen Gesetz?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nach Fitts' Gesetz (1954) und dem stochastischen Modell optimierter Subbewegungen (Meyer et al. 1988) besteht ein Zielwechsel aus einem schnellen Hauptimpuls über den größten Teil der Distanz und kurzen Korrekturbewegungen. Je kleiner und schneller das Ziel, desto mehr Korrektur ist nötig."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollten ambitionierte Gamer Target-Switching-Szenarien trainieren?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Es gibt keine belegte Ideal-Dauer. Ein paar konzentrierte Durchgänge als Aufwärmen vor dem Match sind ein guter Start. Vergleiche deine Werte auf derselben Hardware; eine Verbesserung im Match ist nicht garantiert."
        }
      },
      {
        "@type": "Question",
        "name": "Ist dieses Target Switching Swarm Trainingsprogramm komplett kostenlos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja, das Zielwechsel-Training ist kostenlos und läuft ohne Download oder Registrierung im Browser. Du brauchst eine Maus und Pointer Lock; auf reinen Touch-Geräten ist es nicht spielbar."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Target Switching und Multi-Target-Flicks trainieren",
    "description": "Vier Schritte, um mit bewegten Mehrfachzielen schnelle Zielwechsel zu üben.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Mausempfindlichkeit kalibrieren",
        "text": "Stelle die Sensitivität auf der /drills-Seite auf deine Ingame-Sensitivität ein und starte; Pointer Lock wird automatisch aktiviert.",
        "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm#step-1"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Erstes Schwarmziel erfassen",
        "text": "Flicke auf das nächstgelegene bewegte Ziel und triff es für +100 Punkte und +2 Sekunden (maximal 60).",
        "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm#step-2"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Verzögerungsfrei zum nächsten Ziel wechseln",
        "text": "Starte sofort den nächsten ballistischen Flick zum folgenden Ziel, ohne auf eine Kill-Bestätigung des ersten Schusses zu warten.",
        "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm#step-3"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Flüssigen Wechsel-Rhythmus aufrechterhalten",
        "text": "Halte das Handgelenk locker, triff Ziele, bevor sie ablaufen, und baue so Combos und höhere Level auf.",
        "url": "https://skilldrills.online/de/drills/fps/target-switching-swarm#step-4"
      }
    ]
  };

  const targetSwitchingGuide = {
    heading: "Zielwechsel-Training: schnelle Wechsel zwischen mehreren Zielen",
    intro: [
      "Dieses kostenlose Zielwechsel-Training im Browser hält ständig 2 bis 5 bewegte, abprallende Ziele auf dem Bildschirm. Sobald du eines triffst, erscheint ein neues, sodass du den Wechsel des Fadenkreuzes zum nächsten Ziel ohne Bestätigungspause übst. Die Uhr startet bei 45 Sekunden, jeder Treffer gibt 2 Sekunden dazu (maximal 60), jeder Fehlklick kostet 1 Sekunde – solange du sauber triffst, läuft der Durchgang weiter.",
      "Die Psychophysik schneller Zielwechsel gehorcht dem Fitts'schen Gesetz (Fitts, 1954) und dem stochastischen Modell optimierter Subbewegungen von David E. Meyer et al. (1988). Eine gezielte Mausbewegung besteht aus einem schnellen Primärschub über den größten Teil der Strecke und einer sensomotorisch geführten terminalen Mikrokontraktion. Viele Spieler warten nach einem Treffer kurz auf die Kill-Bestätigung. Dieser Drill zielt darauf, den Blick schon beim Klick zum nächsten Ziel zu lenken und diese Pause zu verkürzen.",
      "Die visuelle Orientierung in dichten Zielschwärmen beruht auf der Feature Integration Theory und präattentiver visueller Suche (Anne M. Treisman & Garry Gelade, 1980; Jeremy M. Wolfe, 2007). Menschen können einige bewegte Objekte gleichzeitig verfolgen. Wer sich vorab eine Reihenfolge mit kurzen Wegen zwischen nahen Zielen zurechtlegt, wechselt flüssiger.",
      "Hinweis zu den Werten: Der Ergebnisbildschirm zeigt Punkte, Präzision (Treffer ÷ alle Klicks), zerstörte Ziele, maximale Combo und erreichtes Level. Dein Highscore wird nur in diesem Browser gespeichert. Wechselzeiten in Millisekunden misst dieser Drill nicht. Bildwiederholrate und Maus-Abtastrate beeinflussen das Spielgefühl, vergleiche deine Werte deshalb auf demselben Setup."
    ],
    benchmarks: {
      title: "Präzisions-Übungsbereiche im Zielwechsel-Training",
      headers: ["Übungsbereich", "Präzision", "Bedeutung"],
      rows: [
        ["Bereich 1", "ab 95 %", "Kaum Klicks ins Leere, auch auf hohen Leveln"],
        ["Bereich 2", "88 – 95 %", "Gelegentliche Fehlklicks bei schnellen Zielen, Wechselrhythmus bleibt"],
        ["Bereich 3", "80 – 88 %", "Überschießen bei Wechseln zu weit entfernten Zielen"],
        ["Bereich 4", "70 – 80 %", "Hektische Fehlklicks kosten häufig Zeit"],
        ["Bereich 5", "unter 70 %", "Tempo drosseln und zuerst sauberes Abstoppen sichern"]
      ],
      note: "Präzision ist der Wert auf dem Ergebnisbildschirm (Treffer ÷ alle Klicks). Die Bereiche sind SkillDrills-Übungsbereiche, keine Forschungsnormen, Spielränge oder Nutzerstatistiken."
    },
    techniques: {
      title: "Evidenzbasierte Protokolle zur Perfektionierung von Target Switching",
      items: [
        {
          name: "Sakkadische Pfadplanung & Visual Indexing",
          desc: "Verschiebe deinen Blick auf das sekundäre Ziel, während deine Hand noch die finale Mikro-Anpassung auf dem primären Ziel ausführt (Treisman & Gelade, 1980; Wolfe, 2007). Meist erreicht der Blick das Ziel vor der Hand.",
          tips: "Starre niemals auf ein Ziel, nachdem du geklickt hast; lass die Zerstörung im peripheren Sehen ablaufen, während die Fovea bereits das nächste Ziel fokussiert."
        },
        {
          name: "Terminale Muskelbremsung & Subbewegungs-Optimierung",
          desc: "Bremse auf dem letzten Stück der Flick-Strecke bewusst ab, um die Maus abrupt über dem Zielzentrum zu stoppen, ohne nachzuschwingen (Meyer et al., 1988).",
          tips: "Stelle dir deine Maus wie mit hydraulischen Bremsen vor: Explosiv beschleunigen, dann direkt über dem Ziel zupacken."
        },
        {
          name: "Räumliche Pfadoptimierung (Nearest-Neighbor-Routing)",
          desc: "Löse Zielschwärme entlang minimaler Winkelabstände auf, statt erratisch über den gesamten Bildschirm hin- und herzufliegen (Fitts, 1954).",
          tips: "Räume eng beieinander liegende Paare zuerst ab, bevor du Flicks über große Bildschirmdiagonalen ansetzt."
        },
        {
          name: "Entkoppelte Griffspannung & Mikro-Mobilität",
          desc: "Halte deine Griffspannung auf einem moderaten Niveau (Stufe 3 von 10), um feine Finger- und Handgelenkskorrekturen bei Höchstgeschwindigkeit ohne Muskelblockade auszuführen.",
          tips: "Verkrampft deine Hand bei langen Zielwechseln, lockere bewusst den Druck von Daumen und kleinem Finger."
        }
      ]
    },
    steps: [
      "Stelle die Sensitivität auf der /drills-Seite auf deine Ingame-Sensitivität ein und starte (Pointer Lock automatisch).",
      "Überblicke den Zielschwarm, um dichte Gruppierungen mit minimalen Abständen zu identifizieren.",
      "Flicke auf das erste Ziel (+100 Punkte × Combo- und Level-Multiplikator, +2 s auf die Uhr, maximal 60 s).",
      "Leite den Mausimpuls unmittelbar zum nächsten Ziel weiter, ohne auf visuelle Bestätigung zu warten.",
      "Vermeide Fehlklicks (-1 s), halte den Rhythmus und erreiche höhere Level mit kleineren, schnelleren Zielen."
    ],
    audience: "FPS-Spieler in Counter-Strike 2, Apex Legends und Overwatch 2, die Zielwechsel zwischen mehreren Gegnern gezielt üben wollen. Eine Maus wird benötigt.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources: pickSources('woods2015', 'fitts1954', 'meyer1988', 'treisman1980', 'wolfe2007'),
    related: [
      { href: "/de/drills/fps/target-prioritization", label: "Zielpriorisierung FPS Training" },
      { href: "/de/drills/fps/flick-shot-training", label: "Flick Shot Training" },
      { href: "/de/drills/fps/target-acquisition", label: "Zielerfassung FPS Training" },
      { href: "/de/drills/fps/180-degree-awareness", label: "180 Grad Aiming" },
      { href: "/de/drills/fps/recoil-control", label: "Recoil Control Training" }
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
      <TargetSwitchingSwarmClient
        copy={{
    h1Keyword: "Zielwechsel-Training",
    h1Suffix: ": Multi-Target im Browser",
    subtitle: "Übe schnelle, saubere Wechsel zwischen mehreren bewegten Zielen – kostenlos im Browser.",
          statScore: "Punkte",
          statTime: "Zeit",
          statAccuracy: "Präzision",
          statBestScore: "Highscore",
          statTargetsDestroyed: "Ziele zerstört",
          statMaxCombo: "Max Combo",
          statPeakLevel: "Höchstlevel",
          startTitle: "Target Switching Swarm",
          startSubtitle: "Hardware Raw Input • Endlose Levelprogression",
          stageCaption: "Triff die bewegten Ziele nacheinander, bevor sie verschwinden. Fehlklicks kosten 1 Sekunde und die Combo.",
          rulesTitle: "Trainingsregeln & Punktesystem",
          aboutTitle: "Über Target Switching im FPS-Gaming",
          rulesItems: [
            { num: "1", text: "Zieltreffer", highlight: "+100 PKT (+2s, max. 60s)", result: "×Combo-Multiplikator" },
            { num: "2", text: "Dauerhafter Schwarm", highlight: "Sofortiger Respawn", result: "2–5 Ziele aktiv" },
            { num: "3", text: "Fehlklick / Zeitablauf", highlight: "Strafe", result: "Combo-Reset (-1s)" },
            { num: "4", text: "Level-Progression", highlight: "+1 Level / 2.100 PKT", result: "Schneller & Kleiner" }
          ]
        }}
      />
      <DrillGuide guide={targetSwitchingGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
