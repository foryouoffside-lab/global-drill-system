import AimTrainerClient from '@/app/drills/motor/hand-eye-coordination/aim-trainer/AimTrainerClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native research: Aim Trainer online, Aim Trainer kostenlos, Mauspräzision testen,
// FPS Aim Training, Zielerfassung, Micro-Flick Training, Aim Test, Reaktionstest Maus,
// Valorant Aim Training und CS2 Aim Trainer.
// ============================================================

export const metadata = {
  title: "Aim Trainer online | Mauspräzision testen | SkillDrills",
  description: "Kostenloser Aim Trainer im Browser: Klicke zwei wandernde Ziele an, bevor sie verschwinden, und teste Mauspräzision und Trefferquote – ohne Download.",
  keywords: ['aim trainer', 'aim trainer online', 'aim trainer kostenlos', 'aim trainer browser', 'mauspräzision testen', 'trefferquote maus'],
  alternates: {
    canonical: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/aim-trainer'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Aim Trainer online | Mauspräzision testen | SkillDrills',
    description: 'Kostenloser Aim Trainer im Browser: zwei wandernde Ziele, Mauspräzision und Trefferquote testen.',
    url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer',
    siteName: 'SkillDrills',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Aim Trainer online | Mauspräzision testen | SkillDrills',
    description: 'Aim Trainer online: Klicke wandernde Ziele, bevor sie verschwinden, und teste deine Mauspräzision.',
  },
  robots: { index: true, follow: true },
};

// --- Structured Data Schemas ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Home', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Trainings-Hub', item: 'https://skilldrills.online/de/drills' },
    { '@type': 'ListItem', position: 3, name: 'Motorik & Maussteuerung', item: 'https://skilldrills.online/de/drills/motor' },
    { '@type': 'ListItem', position: 4, name: 'Hand-Auge-Koordination', item: 'https://skilldrills.online/de/drills/motor' },
    { '@type': 'ListItem', position: 5, name: 'Aim Trainer Online', item: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'de-DE',
  name: 'Aim Trainer Online – Kostenloser Mauspräzisionstest',
  alternateName: ['Aim Trainer', 'Aim Trainer Online', 'Aim Trainer kostenlos'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description:
    'Kostenloser Aim Trainer im Browser: zwei wandernde Ziele mit der Maus anklicken, bevor sie verschwinden.',
  browserRequirements: 'Moderner Webbrowser mit JavaScript- und Pointer-Lock-Unterstützung (Chrome, Firefox, Edge, Safari)',
  softwareVersion: '2.0',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'de-DE',
  name: 'Aim Trainer Online — Kostenloses FPS Präzisionstraining | SkillDrills',
  url: 'https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer',
  description:
    'Aim Trainer mit Zielen, die mit jedem Level kleiner und schneller werden.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  browserRequirements: 'Moderner Browser mit JavaScript und Pointer Lock API.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Educational Game',
  teaches: 'Zielgenauigkeit, Micro-Flicks, Maus-Präzision, Hand-Auge-Koordination, Klick-Timing',
};


const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "de-DE",
  "name": "Aim Trainer Online",
  "url": "https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "Kostenloser browserbasierter 2D-Aim-Trainer für FPS-Spieler: Trainiere Zielerfassung, Mauspräzision und Klicktempo.",
  "dateModified": "2026-11-09",
  "gamePlatform": "Web Browser",
  "genre": ["Aim Trainer", "FPS Training", "Hand-Eye Coordination"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'de-DE',
  name: 'Anleitung zum Aim Training im Browser',
  description: 'Schritt-für-Schritt-Anleitung zur Steigerung deiner Zielgenauigkeit mit dem SkillDrills Aim Trainer.',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer#step-1",
      
      name: 'Training starten',
      text: 'Klicke auf „Training starten“: Der Mauszeiger wird gesperrt (Pointer Lock), nach 3 Sekunden Countdown laufen 45 Sekunden. Mit Esc brichst du jederzeit ab.',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer#step-2",
      
      name: 'Ziel erfassen',
      text: 'Es sind immer zwei Ziele auf dem Feld. Sie wandern in zufällige Richtungen, prallen an den Rändern ab und verschwinden nach kurzer Zeit.',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer#step-3",
      
      name: 'Ballistischer Flick & Präzisionsklick',
      text: 'Fahre mit dem Fadenkreuz auf ein Ziel und klicke. Ein Treffer bringt Punkte und +2 Sekunden (maximal 60 s); ein Fehlklick oder ein verpasstes Ziel setzt die Combo zurück und kostet 1 Sekunde.',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/de/drills/motor/hand-eye-coordination/aim-trainer#step-4",
      
      name: 'Combo ausbauen & Level aufsteigen',
      text: 'Serientreffer erhöhen den Combo-Multiplikator bis 3,0×. Alle 1.750 Punkte steigt das Level; bei 0 Sekunden endet der Lauf.',
    },
  ],
};

const faqs = [
  {
    q: "Was ist ein Aim Trainer und wie funktioniert dieser hier?",
    a: "Ein Aim Trainer misst, wie schnell und präzise du Ziele mit der Maus anklickst. Hier sind immer zwei wandernde Ziele auf dem Feld. Der Lauf startet mit 45 Sekunden: Jeder Treffer bringt +2 s (maximal 60 s), jeder Fehlklick und jedes verpasste Ziel kostet 1 s. Bei 0 endet der Lauf. Kostenlos, ohne Download und ohne Konto.",
  },
  {
    q: "Wie werden die Punkte berechnet?",
    a: "Jeder Treffer zählt 100 Punkte mal Combo-Multiplikator (1,1× ab 3 Treffern in Folge bis 3,0× ab 50) mal Level-Faktor. Ein Fehlklick oder ein verpasstes Ziel setzt die Combo auf 0 zurück.",
  },
  {
    q: "Wie steigt der Schwierigkeitsgrad?",
    a: "Alle 1.750 Punkte steigt das Level, ohne Obergrenze. Bis Level 15 schrumpft der Zielradius von 26 px auf 12 px (bei hoher Combo bis 8 px), die Geschwindigkeit steigt von 80 px/s auf 370 px/s und die Lebensdauer eines Ziels sinkt von 2,8 s auf 0,4 s.",
  },
  {
    q: "Was passiert bei Fehlschüssen?",
    a: "Die Combo fällt auf 1,0× zurück und du verlierst 1 Sekunde. Unkontrolliertes Dauerklicken lohnt sich deshalb nicht.",
  },
  {
    q: "Wie erklärt das Fitts’sche Gesetz das Aim Training?",
    a: "Das Gesetz beschreibt die Bewegungszeit als logarithmische Funktion aus Zieldistanz und Zielgröße. Weil die Ziele hier mit jedem Level kleiner werden, steigt der Schwierigkeitsindex (ID) und die Maus muss feiner gesteuert werden.",
  },
  {
    q: "Hilft dieser Aim Trainer für Valorant oder CS2?",
    a: "Als Ergänzung zum Warm-up kann er helfen. Er trainiert schnelle Klicks auf wandernde 2D-Ziele und ist kein 3D-Spiel; eine Verbesserung im Spiel ist nicht garantiert.",
  },
  {
    q: "Welche Punktzahl gilt im Aim Trainer als gut?",
    a: "Nach den SkillDrills-Übungsbändern: unter 8.000 Einstieg, 8.000–17.999 ausbaufähig, 18.000–31.999 fortgeschritten, 32.000–47.999 hohe Stufe, ab 48.000 höchste Übungsstufe. Das sind redaktionelle Richtwerte, keine Nutzer- oder Ranglistendaten.",
  },
  {
    q: "Kann ich meine Mausempfindlichkeit anpassen?",
    a: "Ja, über den Sensitivitäts-Multiplikator in den Drill-Einstellungen. Eine automatische Umrechnung deiner cm/360 aus dem Spiel gibt es nicht; stelle sie nach Gefühl ähnlich ein.",
  },
  {
    q: "Funktioniert der Aim Trainer auf Handy oder Touchscreen?",
    a: "Nein. Er nutzt Pointer Lock und braucht eine Maus an einem Computer-Browser.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de-DE',
  dateModified: '2026-11-09',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AimTrainerGermanPage() {
  const sources = pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <AimTrainerClient
        copy={{
          title: 'Aim Trainer Online',
          subtitle: 'Zwei wandernde Ziele • Mauspräzision • Trefferquote',
          caption: 'Klicke die zwei wandernden Ziele präzise an, bevor sie verschwinden. Treffer +2 s, Fehlklick oder verpasstes Ziel -1 s.',
          startButtonText: 'TRAINING STARTEN',
          playAgainText: 'Erneut Spielen',
          shareText: 'Ergebnis Teilen',
          exitText: 'Beenden',
          rulesTitle: 'Anleitung & Punktesystem',
          aboutTitle: 'Über Aim Trainer Elite',
          rulesItems: [
            {
              num: "1",
              text: "Zielerfassung",
              highlight: "+100 PKT / +2 s (max. 60 s)",
              result: "× Combo-Multiplikator"
            },
            {
              num: "2",
              text: "Kontinuierliche Combo",
              highlight: "Bis zu 3,0× Multiplikator",
              result: "Serientreffer ohne Fehlschuss aneinanderreihen"
            },
            {
              num: "3",
              text: "Level-Progression",
              highlight: "+1 Level / 1750 PKT",
              result: "Ziele schrumpfen und beschleunigen stetig"
            },
            {
              num: "4",
              text: "Fehlschuss & Timeout",
              highlight: "Combo-Reset",
              result: "-1 s Zeitabzug"
            }
          ]
        }}
      />

      <DrillGuide
        eyebrow="Motorikforschung, Psychophysik & Human-Computer Interaction (HCI)"
        title="Die Wissenschaft des Aim Trainings: Fitts's Law und motorische Zielerfassung"
        sources={sources}
      >
        <p>
          Der SkillDrills <strong>Aim Trainer</strong> läuft kostenlos im Browser: Zwei wandernde Ziele wollen angeklickt werden, bevor sie verschwinden. Die Zielerfassung mit der Computermaus gehört zu den anspruchsvollsten feinmotorischen Aufgaben in der Psychophysik und HCI-Forschung. Ob beim Clearing von Winkeln in kompetitiven Ego-Shootern oder bei computergestützten Präzisionsaufgaben: Das menschliche neuromuskuläre System muss zweidimensionale visuelle Reize in Sekundenbruchteilen in mikrometergenaue Muskelkontraktionen von Hand, Handgelenk und Unterarm umsetzen (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>Das Fitts&apos;sche Gesetz &amp; der Index of Difficulty (ID)</h3>
        <p>
          Paul M. Fitts bewies 1954, dass die Zeit (\(MT\)), die für eine Zielbewegung benötigt wird, eine mathematische Funktion aus Distanz (\(D\)) und Zielbreite (\(W\)) ist:
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 my-3 text-center font-mono text-sm text-cyan-300">
          MT = a + b · log₂(2D / W) = a + b · ID
        </div>
        <p>
          Der logarithmische Term ist der <strong>Index of Difficulty (ID)</strong>. Im SkillDrills <em>Aim Trainer</em> sinkt der Zielradius mit steigendem Level von 26 auf 12 Pixel (bei Level 15; bei hoher Combo bis minimal 8 Pixel). Die kleinere Zielbreite (\(W\)) erhöht den ID (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>Das Zwei-Komponenten-Modell zielgerichteter Bewegungen (Woodworth 1899; Elliott et al. 2010)</h3>
        <p>
          Mausbewegungen sind keine einfachen geraden Impulse. Nach Woodworth (1899) und modernen Synthesen von Elliott et al. (2010) gliedert sich die Bewegung in zwei Phasen:
        </p>
        <ol className="list-decimal pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Initialer ballistischer Impuls (Open-Loop):</strong> Ein vorprogrammierter neuromuskulärer Schub legt 80–90% der Strecke in 120–180 Millisekunden zurück – zu schnell für visuelle Korrekturen.
          </li>
          <li>
            <strong>Terminale Abbremsung &amp; Feinkorrektur (Closed-Loop):</strong> Sobald sich das Fadenkreuz dem Zielrand nähert, verarbeitet das Gehirn Retinalfehler und führt millimetergenaue Nachkorrekturen vor dem Klick aus.
          </li>
        </ol>
        <p>
          Unerfahrene Spieler neigen zu <em>Over-Flicks</em> (Überschießen mit zeitintensiven Rückbewegungen) oder <em>Under-Flicks</em> (zaghaftes Heranschleichen). Spitzenspieler optimieren ihren Anfangsimpuls so exakt, dass der Cursor direkt am Ziel stoppt (Elliott et al., 2010; Woods et al., 2015).
        </p>

        <h3>Hardware-Latenz &amp; Bildwiederholraten</h3>
        <p>
          Echtes Aiming erfordert minimale Signalverzögerungen. Wie Woods et al. (2015) feststellten, beanspruchen physiologische Signalwege im Körper rund 130–190 ms. An einem 60Hz-Monitor entstehen alle 16,7 ms neue Bilder; bei 144Hz oder 240Hz sinkt dies auf 6,9 bzw. 4,1 ms, was schnellere visuelle Rückmeldungen in der entscheidenden Bremsphase ermöglicht.
        </p>

        <h3>Übungsstufen im Aim Trainer (SkillDrills-Richtwerte)</h3>
        <p>
          Die Stufen sind redaktionelle SkillDrills-Übungsbänder für einen Lauf, der mit 45 Sekunden startet (+2 s pro Treffer, max. 60 s). Es sind keine Nutzerdaten und keine Ranglisten-Werte:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left border-collapse border border-white/10 text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/5 text-slate-200">
                <th className="p-2.5 border border-white/10 font-bold">Stufe</th>
                <th className="p-2.5 border border-white/10 font-bold">Punkte</th>
                <th className="p-2.5 border border-white/10 font-bold">Level</th>
                <th className="p-2.5 border border-white/10 font-bold">Trefferquote</th>
                <th className="p-2.5 border border-white/10 font-bold">Einordnung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-emerald-400">Tier 1</td>
                <td className="p-2.5 border border-white/10">&gt; 48.000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 12+</td>
                <td className="p-2.5 border border-white/10">&gt; 95% (Combo 25+)</td>
                <td className="p-2.5 border border-white/10">Höchste Übungsstufe</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-cyan-400">Tier 2</td>
                <td className="p-2.5 border border-white/10">32.000 – 47.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 9–11</td>
                <td className="p-2.5 border border-white/10">88% – 94% (Combo 18–24)</td>
                <td className="p-2.5 border border-white/10">Hohe Übungsstufe</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-blue-400">Tier 3</td>
                <td className="p-2.5 border border-white/10">18.000 – 31.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 6–8</td>
                <td className="p-2.5 border border-white/10">78% – 87% (Combo 12–17)</td>
                <td className="p-2.5 border border-white/10">Fortgeschritten</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-amber-400">Tier 4</td>
                <td className="p-2.5 border border-white/10">8.000 – 17.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 3–5</td>
                <td className="p-2.5 border border-white/10">65% – 77% (Combo 6–11)</td>
                <td className="p-2.5 border border-white/10">Ausbaufähig</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-rose-400">Tier 5</td>
                <td className="p-2.5 border border-white/10">&lt; 8.000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 1–2</td>
                <td className="p-2.5 border border-white/10">&lt; 65% (Combo &lt; 6)</td>
                <td className="p-2.5 border border-white/10">Hohe Ungenauigkeit / Hektisches Klicken</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>4 wissenschaftlich fundierte Trainingsregeln</h3>
        <p>
          Um die Zielerfassungslatenz systematisch zu komprimieren und die Präzision bei Mikroflicks zu maximieren, wenden Sie während des Trainings diese vier evidenzbasierten motorischen Protokolle an:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Mut zum zügigen Anfangsimpuls (Woodworth, 1899):</strong> Starte jeden Flick entschlossen und überbrücke den Großteil der Distanz in einem Zug ohne Zögern.
          </li>
          <li>
            <strong>Präzise Endabbremsung (Fitts, 1954):</strong> Reduziere vor dem Klick sanft die Geschwindigkeit, um das Fadenkreuz im Zielzentrum zu fixieren.
          </li>
          <li>
            <strong>Konstante Mausempfindlichkeit (MacKenzie, 1992):</strong> Behalte deine cm/360-Einstellung über alle Spiele und Trainingsmodule hinweg bei.
          </li>
          <li>
            <strong>Entspannte Griffhaltung (Woods et al., 2015):</strong> Halte die Hand locker auf der Maus, um Verkrampfungen beim schnellen Klicken zu vermeiden.
          </li>
        </ul>

        <h3>Häufig gestellte Fragen (FAQ)</h3>
        <div className="space-y-4 my-4">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-3">
              <h4 className="font-bold text-white text-sm mb-1">{f.q}</h4>
              <p className="text-xs sm:text-sm text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
