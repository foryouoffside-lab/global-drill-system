import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// GERMAN SEARCH KEYWORD RESEARCH & INTENT CLUSTERING
// Primary query: "liegende acht augentraining" (Lying eight eye training) / "achter schleife augenuebung"
// Secondary:    "binokulare koordination training", "mittellinienkreuzung blickuebung", "augentraining liegende 8"
// LSI / Domain:  "glatte augenfolgebewegung achterbahn", "augenmuskeltraining unendlichkeitsschleife",
//               "blickmotorik koordinationsuebung", "lemniskate augentraining online", "sakkaden unterdrueckung blick"
// Authentic Domain Terms: Liegende Acht Augentraining（Figure-8 Eye Training）, Bernoullische Lemniskate（Lemniscate of Bernoulli）, Überschreiten der Mittellinie（Midline Crossing）, Binokulare Koordination（Binocular Coordination）, Glatte Augenfolgebewegung（Smooth Pursuit）, Sakkadische Korrektursprünge（Catch-up Saccades）
// ============================================================

export const metadata = {
  title: "Liegende Acht Augentraining | Blickverfolgung | SkillDrills",
  description: "Kostenlose Augenübung mit der liegenden Acht: übe Blickverfolgung, flüssige Augenfolge und das Überqueren der visuellen Mittellinie.",
  keywords: [
    "liegende acht augentraining",
    "blickverfolgung liegende acht",
    "augenübung liegende acht",
    "blickverfolgung",
    "augenkoordination",
    "mittellinie überkreuzen",
    "beidäugige koordination",
    "glatte augenfolgebewegung",
    "blickübung acht online",
    "visuelles training sport",
    "augenübung kostenlos",
    "sichtziel verfolgen übung"
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Liegende Acht Augentraining | Blickverfolgung | SkillDrills",
    description: "Kostenlose Augenübung mit der liegenden Acht: übe Blickverfolgung und das Überqueren der visuellen Mittellinie.",
    type: "website",
    url: "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit",
    siteName: "SkillDrills",
    locale: "de_DE",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Liegende Acht: Blickverfolgung | SkillDrills",
    description: "Folge einer liegenden Acht und beobachte flüssige Augenbewegungen beim Wechsel über die Mittellinie.",
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit",
    languages: getAlternateLanguages('/drills/visual-tracking/infinity-pursuit'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://skilldrills.online/de" },
    { "@type": "ListItem", "position": 2, "name": "Übungen", "item": "https://skilldrills.online/de/drills" },
    { "@type": "ListItem", "position": 3, "name": "Visuelle Blickverfolgung", "item": "https://skilldrills.online/de/drills/visual-tracking" },
    { "@type": "ListItem", "position": 4, "name": "Liegende Acht Augentraining – Achter-Schleifen-Blickübung", "item": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit" }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Liegende Acht Augentraining – Achter-Schleifen-Blickübung",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Kostenloses interaktives Augentraining entlang der Bernoullischen Lemniskate zur Optimierung der binokularen Koordination und stufenlosen Blickführung.",
  "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/de" },
  "inLanguage": "de",
  "dateModified": "2026-09-20"
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Liegende Acht Augentraining – Achter-Schleifen-Blickübung & Binokulare Koordination | SkillDrills",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Browser",
  "browserRequirements": "HTML5 Canvas-fähiger Webbrowser (Chrome, Edge, Firefox, Safari)",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit",
  "inLanguage": "de",
  "dateModified": "2026-09-20"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Liegende Acht Augentraining – Achter-Schleifen-Blickübung",
  "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit",
  "description": "Visuelle Übung im Browser: Verfolge ein Ziel auf einer liegenden Acht mit möglichst ruhiger Augenbewegung.",
  "genre": ["Augentraining", "Sportliches Sehen", "Blickverfolgung"],
  "gamePlatform": ["Browser"],
  "dateModified": "2026-09-20",
  "applicationCategory": "Game",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "dateModified": "2026-09-20",
  "name": "Anleitung zum Liegende-Acht-Augentraining (Lemniskaten-Blickführung)",
  "description": "Vierstufiges klinisches Vorgehen zur Steigerung der binokularen Koordination und fovealen Fixationsstabilität auf der Unendlichkeitsschleife.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Sitzabstand einnehmen und Kopfhaltung fixieren",
      "text": "Positioniere dich etwa 50 bis 70 cm frontal vor dem Bildschirm. Halte den Kopf absolut ruhig und richte den Blick zentriert aus, um jegliche zervikale Mitbewegung zu unterbinden.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Sitzungsdauer und Geschwindigkeitsstufe wählen",
      "text": "Wähle eine Übungszeit (30 bis 120 Sekunden) und einen Geschwindigkeitsmultiplikator (0,5x bis 9,0x). Beginne bei 1,0x, um die stufenlose Blickfolge sicherzustellen.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Kontinuierliche foveale Zentrierung auf der Achter-Schleife",
      "text": "Fixiere das kreisende Ziel exakt im Zentrum der Fovea. Verfolge die Krümmung beider Schlaufen und gleite ruckfrei durch den zentralen Kreuzungspunkt (visuelle Mittellinie).",
      "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Sakkadenrate analysieren und Belastung adaptieren",
      "text": "Prüfe nach Abschluss der Runde deinen Tracking-Gain und die Gleichmäßigkeit der Augenführung. Erhöhe das Tempo schrittweise um 0,2x, sobald der Kreuzungspunkt ohne Blicksprünge gemeistert wird.",
      "url": "https://skilldrills.online/de/drills/visual-tracking/infinity-pursuit#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Was bewirkt das Augentraining mit der liegenden Acht (Achter-Schleife)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die liegende Acht (Bernoullische Lemniskate ∞) ist eine kontinuierliche Bewegungsschleife, bei der die Augen einem Ziel horizontal, vertikal und diagonal folgen. Die Übung macht sichtbar, wie gleichmäßig der Blick die Kurve begleitet; sie verspricht keine Behandlung oder Verbesserung der Sehkraft."
      }
    },
    {
      "@type": "Question",
      "name": "Warum ist die Bernoullische Lemniskate effektiver als einfache Kreise oder Linien?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Geradlinige Bewegungen besitzen an den Umkehrpunkten abrupte Geschwindigkeitsstillstände, während Kreisbahnen stereotyp in eine einzige Richtung rotieren. Die Lemniskate hingegen wechselt kontinuierlich zwischen Rechts- und Linksdrehung, variiert stetig ihren Krümmungsradius und zwingt die Augen, die vertikale Körpermittellinie diagonal zu kreuzen. Dies fordert die zerebelläre Vorsteuerung und die interhemisphärische Koordination ungleich intensiver."
      }
    },
    {
      "@type": "Question",
      "name": "Was versteht man unter dem „Überschreiten der Mittellinie“ und warum ist es oft fehleranfällig?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Wenn der Blick die vertikale Gesichtsfeldmitte überquert, wechselt das Ziel von einer Seite zur anderen. Beobachte, ob du es am Kreuzungspunkt kurz verlierst oder eine Korrekturbewegung machst. Das beschreibt die Übung und ist keine Diagnose."
      }
    },
    {
      "@type": "Question",
      "name": "Welche äußeren Augenmuskeln werden bei der liegenden Acht gezielt trainiert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es werden alle sechs Muskeln beansprucht: die horizontalen Musculi rectus medialis und lateralis, die vertikalen Musculi rectus superior und inferior sowie die schrägen Muskeln Musculus obliquus superior und inferior. Insbesondere in den diagonalen Kurvenpassagen und im Zentrum müssen Schräg- und Geradmuskeln in mikroskopischer Feinabstimmung zusammenwirken."
      }
    },
    {
      "@type": "Question",
      "name": "Welchen konkreten Vorteil bringt die liegende Acht für das Aiming in FPS-Games?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Übung bietet eine kontrollierte Kurve, an der du gleichmäßige Blickführung beobachten kannst. Eine Übertragung auf ein Spiel hängt von der jeweiligen Praxis und Person ab; eine bessere Zielgenauigkeit wird nicht zugesichert."
      }
    },
    {
      "@type": "Question",
      "name": "Verbessert diese Übung auch die Leseflüssigkeit und kognitive Verarbeitung?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja. Flüssiges Lesen und visuelles Scannen basieren auf präziser Koordination beider Augen beim Zeilensprung und bei Richtungswechseln. Wenn das Überschreiten der Mittellinie reibungslos funktioniert, sinkt die Neigung zu Zeilenverrutschern, Wortverdopplungen und vorzeitiger visueller Ermüdung bei Bildschirmarbeit spürbar."
      }
    },
    {
      "@type": "Question",
      "name": "Wie kann ich verhindern, dass sich mein Kopf während des Trainings mitdreht?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Kopfbewegung ist eine intuitive Ausgleichsstrategie des Nervensystems, um die Beanspruchung der Augenmuskeln zu dämpfen. Um reine Augenbewegungen zu isolieren, stütze dein Kinn locker auf deinen Daumen oder Zeigefinger auf. Achte darauf, dass Hals und Nacken vollständig entspannt bleiben und ausschließlich die Augäpfel in ihren Augenhöhlen rotieren."
      }
    },
    {
      "@type": "Question",
      "name": "Wie oft und wie lange sollte das Liegende-Acht-Training durchgeführt werden?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zwei bis drei Durchgänge von jeweils 60 bis 90 Sekunden pro Tag sind optimal. Da die Augenmuskeln hochsensibel reagieren, führt ein zu langes Üben schnell zu Ermüdungszuständen. Halte nach jeder Sitzung eine kurze Pause ein und blicke für mindestens 20 Sekunden in die Ferne (20-20-20-Regel), um die Akkommodation zu entspannen."
      }
    },
    {
      "@type": "Question",
      "name": "Welcher Bildschirmabstand und welche Displaygröße sind empfehlenswert?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein normaler Arbeitsabstand von 50 bis 70 cm ist ideal. Die Schlaufengröße auf dem Bildschirm sollte ein horizontales Blickfeld von etwa 30 bis 40 Grad abdecken. So werden die äußeren Augenmuskeln bis in ihre physiologische Enddehnung gefordert, ohne dass Überlastungen auftreten."
      }
    },
    {
      "@type": "Question",
      "name": "Was sollte ich tun, wenn ich während der Übung Augenbrennen oder Schwindel bemerke?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Leichtes Ziehen in den Muskeln ist vergleichbar mit einem leichten Muskelkater bei ungewohnten Bewegungsmustern. Bei Schwindelgefühlen brich die Übung bitte sofort ab, schließe die Augen und atme ruhig durch. Beginne bei der nächsten Einheit mit einer reduzierten Geschwindigkeit von 0,6x oder 0,8x und steigere die Intensität erst nach einigen Tagen behutsam."
      }
    }
  ]
};

const guideProps = {
  heading: "Liegende Acht Augentraining: Okulomotorische Normwerte und Neurophysiologie",
  intro: [
    "Die liegende Acht, auch Bernoullische Lemniskate genannt, verbindet zwei Kurven und einen zentralen Kreuzungspunkt. Wenn du ein bewegtes Ziel mit den Augen verfolgst, wechseln horizontale, vertikale und diagonale Blickbewegungen einander ab. Diese Seite ist eine Übung und kein Test oder Heilmittel für eine Augenerkrankung.",
    "Am zentralen Knoten wechselt das Ziel von der linken zur rechten Seite des Gesichtsfelds. Beobachte, ob der Blick die Bahn verliert, kurz springt oder dort anhält. So lässt sich die eigene Sitzung unter gleichen Bedingungen beschreiben; aus dem Ergebnis folgt keine Diagnose.",
    "Die Leichtigkeit der Blickverfolgung hängt von Abstand, Zielgröße, Bildwiederholrate und Ermüdung ab. Wähle ein angenehmes Tempo, blinzele normal und vergleiche nicht unterschiedliche Geräte direkt. Bei Schmerzen, Doppelbildern, Übelkeit oder Schwindel sofort pausieren und bei anhaltenden Beschwerden fachlichen Rat suchen.",
    "Eine Übertragung auf Lesen, Sport oder Spiele kann nicht pauschal zugesichert werden. Die Seite dient dazu, das Folgen eines bewegten Ziels kurz zu üben und eigene Werte unter gleichen Bedingungen zu vergleichen."
  ],
  benchmarks: {
    title: "Leistungswerte bei der Blickverfolgung einer liegenden Acht",
    headers: ["Stufe", "Zielverfolgung", "Verluste an der Mitte", "Bahngenauigkeit", "Praktische Einordnung"],
    rows: [
      ["Elite (Profi-Athleten & E-Sport)", "0,96 – 1,02", "< 2% (nahezu perfekt stufenlos)", "98%+", "Vollkommene Muskelkoordination. Keine Sakkaden an der Mittellinie; internes Kleinhirnmodell perfekt synchronisiert"],
      ["Fortgeschritten (Wettkampf-Level)", "0,90 – 0,95", "2% – 5%", "92% – 97%", "Hervorragende Blickfolgestabilität. Minimale Phasenverzögerung nur an extremen Scheitelpunkten; sichere Fovea-Arretierung"],
      ["Kompetent (Gesunde Erwachsene)", "0,80 – 0,89", "6% – 12%", "82% – 91%", "Solide Alltagsfähigkeit. Gelegentliche Korrektursakkaden beim Kreuzen des Zentrums oder am äußeren Scheitel"],
      ["Aufbauend (Erhöhte Latenz / Ermüdung)", "0,68 – 0,79", "13% – 22%", "70% – 81%", "Deutliche Nachlaufverzögerung. Wiederholte Blicksprünge, Anzeichen muskulärer Dysbalance oder zervikaler Mitbewegung"],
      ["Basis / Förderbedarf (Sehstress)", "< 0,68", "> 22%", "< 70%", "Stufenlose Verfolgung bricht ab. Häufige unwillkürliche Kopfdrehungen; Grundlagentraining für Binokularsehen und Augenmuskeln ratsam"]
    ],
    note: "Diese Bereiche dienen nur zum Vergleich eigener Sitzungen bei gleichem Bildschirmabstand und sind keine klinischen Normwerte. Die Zielverfolgung misst weder Sehschärfe noch eine Erkrankung."
  },
  techniques: {
    title: "Vier essenzielle Techniken für stufenlose Blickführung auf der Achter-Schleife",
    items: [
      {
        name: "Kopf ruhig halten und nur mit den Augen folgen",
        desc: "Lege zwei Finger sanft an deine Kinnspitze, um jede minimale Kopfdrehung sensorisch sofort zu registrieren. Halte Hals- und Nackenmuskulatur vollkommen entspannt und bewege ausschließlich deine Augen in den Augenhöhlen. Nur so wird der vestibulookuläre Reflex (VOR) entkoppelt und die kortikale Blickmotorik direkt trainiert.",
        tips: "Atme ruhig und gleichmäßig in den Bauch, um ein unbewusstes Anspannen der Nackenmuskeln zu verhindern."
      },
      {
        name: "Vor dem Zentrum das Tempo anpassen",
        desc: "Vor dem zentralen Kreuzungspunkt kann die Kurve schneller wirken. Halte den Blick weich auf dem Ziel und lasse ihn ohne abrupten Sprung durch die Mitte gleiten.",
        tips: "Fixiere den Kreuzungspunkt nicht starr, sondern lasse den Blick elastisch hindurchgleiten."
      },
      {
        name: "Die äußeren Schleifen vollständig verfolgen",
        desc: "An den Wendepunkten der beiden Schlaufen neigt das Sehsystem dazu, die Kurve unbewusst nach innen 'abzuschneiden'. Zwinge deine Augen, das Ziel bis zum maximalen Außenpunkt zu fixieren. Dadurch werden die Musculi obliqui bis an ihre anatomische Dehngrenze gefordert.",
        tips: "Widerstehe dem Drang, vorzeitig zur Gegenkurve zu springen; nimm die gesamte Kurvenbreite mit."
      },
      {
        name: "Tempo stufenweise erhöhen und Pausen machen",
        desc: "Absolviere zunächst fehlerfreie 60-Sekunden-Runden auf 1,0x ohne jegliche Sakkadensprünge. Steigere das Tempo erst dann in 0,2x-Schritten. Blicke nach jeder Einheit für 20 Sekunden auf ein mindestens 6 Meter entferntes Objekt, um die Ziliarmuskeln zu detonisieren.",
        tips: "Sobald deine Augen tränen oder brennen, lege eine Pause ein und blinzle mehrmals bewusst."
      }
    ]
  },
  steps: [
    "Positioniere dich etwa 50 bis 70 cm frontal vor dem Bildschirm und halte den Kopf absolut ruhig.",
    "Wähle eine Übungszeit (30 bis 120 Sekunden) und einen Geschwindigkeitsmultiplikator (0,5x bis 9,0x).",
    "Fixiere das kreisende Ziel exakt im Zentrum der Fovea und folge der doppelten Schleifenbahn.",
    "Gleite stufenlos durch den zentralen Kreuzungspunkt (Mittellinie), ohne den Blick ruckartig springen zu lassen.",
    "Prüfe nach Abschluss deinen Tracking-Gain und steigere die Geschwindigkeit schrittweise um 0,2x."
  ],
  audience: "E-Sportler (FPS-Shooter), Ballsportler (Tennis, Tischtennis, Badminton), Personen mit hoher Bildschirmarbeitszeit sowie alle, die visuelle Ermüdung und Sehachsenblockaden abbauen möchten.",
  faqs: faqSchema.mainEntity.map(item => ({
    q: item.name,
    a: item.acceptedAnswer.text
  })),
  sources: pickSources('robinson1965', 'leigh2015', 'barnes2008', 'krauzlis2004', 'woods2015'),
  related: [
    { href: "/de/drills/visual-tracking/constant-slow-pursuit", label: "Langsame Augenfolge" },
    { href: "/de/drills/visual-tracking/directional-chaos-pursuit", label: "Blickverfolgung mit Richtungswechsel" },
    { href: "/de/drills/visual-tracking/dynamic-evasion-pursuit", label: "Blickverfolgung bewegter Ziele" },
    { href: "/de/drills/visual-tracking/ghosting-suppress-pursuit", label: "Fixationsstabilität beim Sehen" },
    { href: "/de/drills/visual-tracking/sine-wave-pursuit", label: "Sinusförmige Blickverfolgung" },
    { href: "/de/drills/visual-tracking/predictive-pursuit", label: "Vorausschauende Blickverfolgung" }
  ]
};

export default function GermanInfinityPursuitPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <InfinityPursuitClient
        copy={{
          title: "Liegende Acht: Augentraining",
          subtitle: "Blickverfolgung und Mittellinienübergang",
          description: "Verfolge ein Ziel auf einer liegenden Acht, beobachte den Übergang über die Mitte und übe flüssige Augenbewegungen in einem angenehmen Tempo."
        }}
      />

      <DrillGuide guide={guideProps} />

      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
