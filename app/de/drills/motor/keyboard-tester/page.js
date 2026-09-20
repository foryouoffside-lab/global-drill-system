import { pickSources } from '@/lib/drillSources';
import KeyboardTesterClient from '@/app/drills/motor/keyboard-tester/KeyboardTesterClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: 'Tastatur testen online | Ghosting prüfen | SkillDrills',
  description: 'Kostenloser Tastaturtest im Browser: Prüfe Tasten, Ghosting, Chattering und N-Key-Rollover ohne Download.',
  keywords: [
    'tastatur testen online',
    'tastatur test',
    'tastaturtester',
    'tasten prüfen',
    'tastatur ghosting test',
    'anti-ghosting testen',
    'n-key-rollover testen',
    'taste klemmt',
    'tastatur reagiert nicht',
    'mechanische tastatur testen',
  ],
  openGraph: {
    title: 'Tastatur testen online | Ghosting prüfen | SkillDrills',
    description: 'Browser-Test für Tasten, Ghosting, Chattering und N-Key-Rollover ohne Installation.',
    type: 'article',
    url: 'https://skilldrills.online/de/drills/motor/keyboard-tester',
    siteName: 'SkillDrills',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tastatur testen online | Ghosting prüfen | SkillDrills',
    description: 'Prüfe deine Tastatur im Browser auf defekte Tasten und Probleme bei mehreren Eingaben.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor/keyboard-tester',
    languages: getAlternateLanguages('/drills/motor/keyboard-tester'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Startseite', item: 'https://skilldrills.online/de' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Motorisches Training',
      item: 'https://skilldrills.online/de/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Tastatur-Tester',
      item: 'https://skilldrills.online/de/drills/motor/keyboard-tester',
    },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'de-DE',
  name: 'Tastatur-Tester Online',
  alternateName: ['Tastatur Test', 'Tasten Checker'],
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Erfordert einen modernen Webbrowser und eine physische Tastatur',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description:
    'Kostenloses Browsertool zum Testen aller Tasten, Erkennen hängender Schalter, Prüfen von N-Key-Rollover und Einsehen von Tastatur-Events.',
  url: 'https://skilldrills.online/de/drills/motor/keyboard-tester',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-20',
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  inLanguage: 'de-DE',
  name: 'Tastatur-Tester und Ghosting-Test Online',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Kostenloses Browsertool zum Testen aller Tasten, Erkennen hängender Schalter und Prüfen von Tastatur-Events.',
  url: 'https://skilldrills.online/de/drills/motor/keyboard-tester',
  dateModified: '2026-09-20',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' }
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'de-DE',
  name: 'Tastatur-Tester und Key-Rollover Spiel',
  url: 'https://skilldrills.online/de/drills/motor/keyboard-tester',
  description: 'Interaktives Diagnosetool zur Überprüfung von Schalterreaktionen und Tastenkombinationen.',
  dateModified: '2026-09-20',
  gamePlatform: 'Web Browser',
  genre: ['Tastatur-Tester', 'Dienstprogramme', 'Hardware-Diagnose'],
  playMode: 'SinglePlayer',
  applicationCategory: 'Game',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  name: 'So testen Sie Ihre Tastatur online',
  description: 'Schritt-für-Schritt-Anleitung zur Erkennung defekter Tasten, Chattering und Key-Rollover.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/de/drills/motor/keyboard-tester#step-1',
      name: 'Tasten einzeln drücken',
      text: 'Drücken Sie jede Taste systematisch durch. Funktionierende Tasten leuchten blau bei Druck und bleiben grün bestätigt.'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/de/drills/motor/keyboard-tester#step-2',
      name: 'Key-Rollover und Ghosting prüfen',
      text: 'Drücken Sie mehrere Tasten gleichzeitig (z. B. WASD, Shift, Leertaste), um die maximale gleichzeitige Registrierung (NKRO) zu testen.'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/de/drills/motor/keyboard-tester#step-3',
      name: 'Tastatur-Telemetrie einsehen',
      text: 'Überprüfen Sie das Echtzeit-Protokoll mit event.code, event.key und Hardware-KeyCodes für tiefere Fehleranalysen.'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/de/drills/motor/keyboard-tester#step-4',
      name: 'Diagnose abschließen und zurücksetzen',
      text: 'Prüfen Sie nicht reagierende Tasten, um Schalterdefekte von Softwareproblemen zu isolieren, und setzen Sie den Test zurück.'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  dateModified: '2026-09-20',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Wie teste ich, ob alle Tasten meiner Tastatur funktionieren?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Öffnen Sie diese Seite und drücken Sie jede Taste nacheinander. Jede Taste leuchtet blau auf und bleibt nach dem Loslassen grün markiert. Nicht reagierende Tasten bleiben grau.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was bedeutet es, wenn eine Taste nicht aufleuchtet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Das Signal der Taste erreicht den Browser nicht. Das weist auf einen Defekt am Schalter, Schmutz unter der Tastenkappe, einen Leiterbahnfehler oder ein Treiberproblem hin.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Key-Rollover (NKRO) und wie teste ich es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key-Rollover gibt an, wie viele Tasten gleichzeitig erkannt werden können. Halten Sie mehrere Tasten gedrückt: Hochwertige Gaming-Tastaturen mit echtem NKRO erkennen unbegrenzt viele Tasten ohne Ghosting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Warum reagieren Tasten wie Alt+Tab oder Druck im Browser nicht immer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Einige Tastenkombinationen werden direkt vom Betriebssystem abgefangen (z. B. Strg+Alt+Entf). Zudem leitet dieser Tester Tasten wie F5 oder F11 bewusst weiter, damit Browserfunktionen erhalten bleiben.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie erkenne ich eine dauerhaft hängende Taste (Stuck Key)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lassen Sie alle Tasten los: Wenn eine Taste auf dem Bildschirm weiterhin als gedrückt (blau) angezeigt wird, klemmt der Schalter oder die Rückholfeder mechanisch fest.',
      },
    },
    {
      '@type': 'Question',
      name: 'Werden meine Tastatureingaben oder Passwörter gespeichert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nein. Sämtliche Tastenereignisse werden ausschließlich lokal in der Sandbox Ihres Browsers verarbeitet. Es erfolgt keinerlei Speicherung oder Datenübertragung an externe Server.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen event.code und event.key?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'event.code identifiziert die physische Position der Taste unabhängig vom Sprachlayout. event.key beschreibt das erzeugte Zeichen, das sich durch Sprache und Modifikatoren wie Shift ändert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was ist Ghosting bei Tastaturen und wodurch entsteht es?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ghosting tritt auf, wenn einfache Tastaturmatrizen bei gleichzeitigen Tastendrücken zusätzliche, nicht gedrückte Tasten fälschlicherweise auslösen oder Blockaden erzeugen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Funktioniert der Test mit mechanischen und Membran-Tastaturen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, dieser Test unterstützt alle Tastaturtypen: mechanische Tastaturen, optische Schalter, Hall-Effekt-Magnetschalter sowie klassische Membran- und Rubberdome-Modelle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Ist der Online-Tastatur-Tester kostenlos nutzbar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, das Werkzeug auf SkillDrills ist zu 100 % kostenlos, erfordert keine Registrierung und läuft direkt ohne Software-Installation im Browser.',
      },
    },
  ],
};

const GERMAN_COPY = {
  title: 'Tastaturtest online',
  subtitle: 'Tasten prüfen • Ghosting • Rollover',
  intro: 'Drücke jede Taste deiner Tastatur, um zu prüfen, ob sie korrekt erkannt wird.',
  keysConfirmed: 'Bestätigte Tasten',
  rollover: 'Rollover',
  capturing: 'Tastenerfassung',
  paused: 'Pausiert',
  reset: 'Zurücksetzen',
  captureNotice: 'Die Tastenerfassung ist aktiv. Drücke Umschalt + Esc oder klicke auf „Tastenerfassung“, um sie zu beenden.',
  lastKeyEvent: 'Letztes Tastenereignis',
  eventCode: 'event.code',
  eventKey: 'event.key',
  keyCode: 'keyCode',
  location: 'Position',
  autoRepeat: 'Automatische Wiederholung',
  yes: 'Ja',
  no: 'Nein',
  space: '(Leertaste)',
  pressAnyKey: 'Drücke eine Taste, um zu sehen, was der Browser empfängt.',
  keysNotOnLayout: 'Tasten außerhalb des gewählten Layouts',
  notYetConfirmed: 'Noch nicht bestätigt',
  allConfirmed: 'Jede Taste des Layouts wurde erkannt. Deine Tastatur funktioniert.',
  untestedSingular: 'Taste muss noch gedrückt werden. Reagiert sie auch nach mehreren festen Anschlägen nicht, sollte sie geprüft werden.',
  untestedPlural: 'Tasten müssen noch gedrückt werden. Reagiert eine auch nach mehreren festen Anschlägen nicht, sollte sie geprüft werden.',
  mobileWarning: 'Dieses Werkzeug benötigt eine physische Tastatur. Öffne es am Desktop oder Laptop oder verbinde eine externe Tastatur.',
  aboutTitle: 'Über den Tastaturtest',
  aboutP1: 'Jede Taste leuchtet bei der Erkennung auf und bleibt nach einer Bestätigung grün. Tasten ohne Signal können auf einen defekten Schalter, eine klemmende Taste oder ein Treiberproblem hindeuten.',
  aboutP2: 'Es wird nichts hochgeladen und nichts gespeichert.',
  howTitle: 'So testest du deine Tastatur',
  howStep1: 'Drücke jede Taste einmal und arbeite dich zeilenweise von links nach rechts vor.',
  howStep2: 'Gedrückte Tasten werden cyan, nach der ersten Erkennung bleiben sie grün.',
  howStep3: 'Beobachte, wie die Liste „Noch nicht bestätigt“ leer wird. Übrig gebliebene Tasten sind verdächtig.',
  howStep4: 'Halte mehrere Tasten gleichzeitig gedrückt, um die maximale Rollover-Anzahl abzulesen.',
  rolloverTitle: 'Key-Rollover und Ghosting',
  rolloverP1: 'Rollover bezeichnet die Anzahl der Tasten, die eine Tastatur gleichzeitig melden kann. Viele Membran-Tastaturen erkennen zwei bis sechs Tasten; weitere Eingaben können still verworfen werden. NKRO-Tastaturen melden jede gedrückte Taste.',
  rolloverP2: 'Halte mehrere Tasten gedrückt und lies den Rollover-Wert ab. Steigt er bei drei oder vier Tasten nicht weiter, ist das die Grenze der Tastatur und nicht automatisch ein Defekt. Einige Systemkombinationen erreicht der Browser grundsätzlich nicht.',
  limitsTitle: 'Was dieser Test nicht feststellen kann',
  limitsP1: 'Die Seite prüft das Signal, das im Browser ankommt. Zwischen Schalter, Controller, Kabel oder Funkverbindung, Treiber und Betriebssystem kann ein Fehler liegen; die genaue Komponente lässt sich im Browser nicht bestimmen.',
  limitsP2: 'Das Betriebssystem fängt Kombinationen wie Alt+Tab und Strg+Alt+Entf ab. F5, F11 und F12 bleiben für Browserfunktionen reserviert. Dass diese Eingaben fehlen, ist normal und kein Beweis für einen Hardwaredefekt.',
};

const guideProps = {
  intro: {
    title: 'Was ein Tastatur-Tester wirklich überprüft',
    sources: pickSources('woods2015'),
    paragraphs: [
      'Ein Tastatur-Tester stellt sicher, dass jede physische Taste ein gültiges Signal erzeugt, das am Computer ankommt. Wird eine Taste betätigt, übergibt das Betriebssystem dem Browser einen hardwarenahen Tastencode; trifft kein Signal ein, wird die Taste nicht gelesen.',
      'Dieses Tool identifiziert zuverlässig, ob der Tastenanschlag am Ziel ankommt, und isoliert Schalterdefekte von Software-Fehlkonfigurationen direkt im Browser.',
    ],
  },
  benchmarks: {
    title: 'Tastatur-Rollover und Leistungs-Klassifizierung',
    caption: 'Technische Klassifizierung basierend auf Matrix-Abtastung, Schalter-Debounce und Polling-Raten. SkillDrills verarbeitet Signale ausschließlich lokal.',
    headers: ['Stufe', 'Hardware-Architektur', 'Rollover-Kapazität', 'Anti-Ghosting-Matrix', 'Schalter-Latenz', 'Diagnose- und Gaming-Profil'],
    rows: [
      [
        'Tier 1',
        'Vollständiges NKRO (Magnetisch / Optisch)',
        'Echtes N-Key (> 50 Tasten)',
        'Separate Sperrdiode je Schalter; null Matrix-Blockierung',
        'Unter 1,0 ms (8000 Hz / 1000 Hz Polling)',
        'Elite-Niveau: Perfekt synchrone Mehrfacheingaben, Rapid-Trigger-Unterstützung, null Chattering.',
      ],
      [
        'Tier 2',
        '6KRO / 10KRO Mechanisch (Standard-Switches)',
        '6 bis 10 Tasten simultan',
        'Dedizierte Dioden auf allen Haupt- und Modifikatortasten',
        '2,0–5,0 ms (1000 Hz Polling, mechanischer Debounce)',
        'Gaming-Standard: Fehlerfreie Akkordeingaben für komplexe Bewegungskombinationen und Makros.',
      ],
      [
        'Tier 3',
        'Optimierte Gaming-Matrix (Hybrid-Membran)',
        '4 bis 6 Tasten (WASD-Cluster)',
        'Bereichs-Anti-Ghosting für typische Shooter-Tasten',
        '8,0–15,0 ms (125–500 Hz Polling)',
        'Solide Freizeit-Nutzung: Zuverlässig in Standard-FPS, gelegentliche Blockaden bei Tastenabseits.',
      ],
      [
        'Tier 4',
        'Standard Office-Matrix (Einfache Membran)',
        '2 bis 3 Tasten (2KRO)',
        'Gemeinsame Zeilen/Spalten-Matrix; häufige Ghosting-Abbrüche',
        '15,0–30,0 ms (125 Hz USB Polling)',
        'Büro-Grundausstattung: Neigt bei schnellen 3-Tasten-Kombinationen zu Blockaden oder Signalverlust.',
      ],
      [
        'Tier 5',
        'Defekte Schalter / Chattering (Kontaktprellen)',
        'Sporadischer Ausfall / Doppelkontakt',
        'Oxidierte Kontakte, Federermüdung oder Platinenkorrosion',
        'Errant / Doppelimpuls (> 35 ms Prellen)',
        'Hardwarefehler: Ungewolltes Doppelauslösen (Chattering), tote Tasten oder dauerhaftes Klemmen.',
      ],
    ],
  },
  faqs: {
    title: 'Häufig gestellte Fragen (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function KeyboardTesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KeyboardTesterClient copy={GERMAN_COPY} />
      <DrillGuide {...guideProps} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="motor" currentHref="/de/drills/motor/keyboard-tester" />
      </div>
    </>
  );
}
