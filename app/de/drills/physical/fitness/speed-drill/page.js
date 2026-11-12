import SpeedDrillClient from '@/app/drills/physical/fitness/speed-drill/SpeedDrillClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/de/drills/physical/fitness/speed-drill';
const title = 'Schrumpfende Ziele klicken | Maus-Zielspiel | SkillDrills';
const description = 'Schrumpfende Ziele klicken, bevor sie verschwinden: kostenloses Maus-Zielspiel im Browser. Treffer bringen +2 s, Fehlklicks und verpasste Ziele kosten 1 s.';

export const metadata = {
  title,
  description,
  keywords: ['Schrumpfende Ziele klicken', 'Ziele vor dem Verschwinden treffen', 'Tempo-Zieltraining', 'Maus-Zielspiel', 'Ziele klicken Spiel'],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/physical/fitness/speed-drill') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'de_DE', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Startseite', item: 'https://skilldrills.online/de' },
    { '@type': 'ListItem', position: 2, name: 'Koordinationsspiele', item: 'https://skilldrills.online/de/drills/physical' },
    { '@type': 'ListItem', position: 3, name: 'Schrumpfende Ziele klicken', item: url },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Schrumpfende Ziele klicken – Maus-Zielspiel',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/de' },
  inLanguage: 'de',
  dateModified: '2026-11-10',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Schrumpfende Ziele klicken – Web-App',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Aktueller Browser mit HTML5-Canvas',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'de',
  dateModified: '2026-11-10',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Speed Drill: schrumpfende Ziele klicken',
  url,
  description: 'Bewegte, schrumpfende Ziele anklicken, bevor sie verschwinden – ein Maus-Zielspiel im Browser.',
  genre: ['Action Game', 'Casual Game'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'de',
  dateModified: '2026-11-10',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqs = [
  { q: 'Worum geht es bei „Schrumpfende Ziele klicken“?', a: 'Runde Ziele bewegen sich über den Bildschirm und schrumpfen dabei. Sie müssen sie anklicken, bevor sie verschwinden. Ziele finden, den Cursor hinbewegen und genau klicken fließen in jeden Treffer ein; Punkte und Combo werden gespeichert. Das ist ein Übungsspiel im Browser, kein medizinischer Reaktionstest.' },
  { q: 'Warum werden die Ziele immer kleiner?', a: 'Kleinere Ziele sind schwerer zu treffen – das beschreibt das Fitts-Gesetz (Fitts, 1954). Jedes Ziel schrumpft nach dem Erscheinen weiter und verschwindet bei einem Radius von 4 px; wer spät klickt, hat es also schwerer (mit ausgeschalteter Timeout-Einstellung schrumpfen die Ziele nicht). Am besten treffen Sie früh, solange das Ziel noch groß ist.' },
  { q: 'Wie werden Punkte und Zeit berechnet?', a: 'Jeder Treffer bringt 100 Punkte mal Combo- und Level-Faktor und verlängert die Restzeit um 2 Sekunden (höchstens 60 Sekunden). Die Runde startet mit 45 Sekunden, alle 1.750 Punkte steigt das Level. Verschwindet ein Ziel oder klicken Sie daneben, wird die Combo zurückgesetzt und 1 Sekunde abgezogen.' },
  { q: 'Misst das Spiel Klicks pro Sekunde?', a: 'Nein. Das Spiel zählt weder Klickanzahl noch Klicktempo. Jedes Ziel muss einzeln und genau getroffen werden, und ein Klick ins Leere kostet 1 Sekunde – schnelles Dauerklicken schadet also eher.' },
  { q: 'Was ändert sich mit steigendem Level?', a: 'Ziele bewegen sich schneller und schrumpfen schneller, und neue Ziele starten kleiner (Radius von 32 px bis minimal 10 px). Fehlerfreie Treffer in Serie erhöhen den Combo-Multiplikator auf bis zu 3,0x. Hohe Punkte gibt es nur mit Tempo und Genauigkeit zugleich.' },
  { q: 'Was passiert bei einem Fehlklick?', a: 'Verschwindet ein Ziel oder klicken Sie daneben, fällt die Combo sofort zurück und die Restzeit sinkt um 1 Sekunde. Dieser Abzug gilt immer, unabhängig von Einstellungen. Gefragt ist ein Gleichgewicht aus Tempo und Ruhe.' },
  { q: 'Werde ich dadurch in Shootern besser?', a: 'Das garantiert diese Seite nicht. Kleine bewegte Ziele schnell zu treffen ähnelt Aim-Übungen, doch Empfindlichkeit, Bildschirm und Regeln im Spiel sind anders. Nutzen Sie die Ergebnisse, um Ihre eigenen Übungsstände zu vergleichen.' },
  { q: 'Welche Mauseinstellungen sind sinnvoll?', a: 'Es gibt keine allgemeingültige Antwort. Starten Sie mit Ihrer gewohnten DPI, Empfindlichkeit und Griffhaltung und vergleichen Sie nach Änderungen die Punkte unter gleichen Bedingungen. Bei Schmerzen in Handgelenk oder Fingern pausieren oder aufhören.' },
  { q: 'Spielen Bildwiederholrate und Polling-Rate eine Rolle?', a: 'Eine höhere Bildwiederholrate zeigt die Zielbewegung feiner an, eine höhere Polling-Rate meldet Mausbewegungen öfter. Beide gelten als Faktoren der Eingabeverzögerung (Woods et al., 2015), wie stark sie die Punkte in diesem Drill verändern, haben wir aber nicht gemessen.' },
  { q: 'Wo werden meine Ergebnisse gespeichert?', a: 'Punkte und beste Combo werden im lokalen Speicher Ihres Browsers abgelegt und von diesem Drill nicht an einen Server gesendet. Wenn Sie die Browserdaten löschen, sind auch die Ergebnisse weg. Details stehen in der Datenschutzerklärung.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'de',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Schrumpfende Ziele klicken in 4 Schritten',
  description: 'So treffen Sie schrumpfende Ziele schnell und bauen Punkte und Combo auf.',
  step: [
    { '@type': 'HowToStep', position: 1, name: 'Ziel finden', text: 'Den ganzen Bildschirm im Blick behalten und neue Ziele schnell entdecken.', url: `${url}#step-1` },
    { '@type': 'HowToStep', position: 2, name: 'Cursor in einem Zug bewegen', text: 'Den Cursor ohne Zögern in einer Bewegung bis kurz vor das Ziel führen.', url: `${url}#step-2` },
    { '@type': 'HowToStep', position: 3, name: 'Vor dem Schrumpfen klicken', text: 'Solange das Ziel noch groß ist, kurz abbremsen und genau klicken.', url: `${url}#step-3` },
    { '@type': 'HowToStep', position: 4, name: 'Combo halten', text: 'Ohne Fehler weitertreffen, um Combo-Faktor und Zeitbonus aufzubauen.', url: `${url}#step-4` },
  ],
};

const speedGuide = {
  heading: 'Anleitung: Schrumpfende Ziele klicken',
  intro: {
    title: 'Was ist dieses Maus-Zielspiel?',
    paragraphs: [
      'Im Speed Drill klicken Sie schrumpfende Ziele, bevor sie verschwinden: runde Ziele bewegen sich über den Bildschirm und werden dabei kleiner. Jeder Klick verbindet Suchen, Cursorbewegung und Genauigkeit – eine andere Übung als ein einfacher Reaktionszeittest.',
      'Schnelles Zielen mit der Maus wird oft in zwei Phasen beschrieben: eine große Bewegung und eine kleine Korrektur am Ende (Woodworth, 1899). Dass kleinere Ziele schwerer zu treffen sind, erklärt das Fitts-Gesetz (Fitts, 1954). Weil die Ziele hier ständig schrumpfen, lohnt es sich, die große Bewegung früh zu starten.',
      'Helle, kontrastreiche bewegte Ziele fallen auch am Rand des Blickfelds auf (Treisman & Gelade, 1980). Wer nicht auf einen Punkt starrt, sondern den ganzen Bildschirm im Blick behält, findet neue Ziele schneller.',
      'Vergleichen Sie Ergebnisse mit derselben Maus, Empfindlichkeit und demselben Monitor; Bildwiederholrate und Eingabegerät beeinflussen die Verzögerung (Woods et al., 2015). Die Werte sind Übungsstände, keine medizinische Messung und keine Spielerwertung.',
    ],
  },
  benchmarks: {
    title: 'Orientierung: Punktebereiche',
    headers: ['Stufe', 'Punkte', 'Ziel-Trefferquote', 'Übungsschwerpunkt'],
    rows: [
      ['Stufe 1', 'unter 6.000', 'unter 70 %', 'Ziele schneller finden, Fehlklicks reduzieren'],
      ['Stufe 2', '6.000 – 10.999', '70 – 81 %', 'Früh klicken, solange das Ziel groß ist'],
      ['Stufe 3', '11.000 – 16.999', '82 – 89 %', 'Combo ohne Unterbrechung halten'],
      ['Stufe 4', '17.000 – 23.999', '90 – 94 %', 'Auch bei schnellen Zielen genau bleiben'],
      ['Stufe 5', 'ab 24.000', 'ab 95 %', 'Mit dem Zeitbonus lange Runden spielen'],
    ],
    note: 'Diese Bereiche sind SkillDrills-Übungsstufen. Sie beruhen nicht auf Nutzerstatistiken, Perzentilen oder Profi-Werten.',
  },
  techniques: {
    title: '4 Übungstipps für mehr Punkte',
    items: [
      { name: 'Groß bewegen, klein korrigieren', desc: 'Führen Sie den Cursor in einem Zug bis kurz vor das Ziel und bremsen Sie erst kurz vor der Ankunft. Langsames Heranziehen kostet Zeit, in der das Ziel schrumpft.', tips: 'Große Wege mit Handgelenk und Arm, feine Korrektur mit den Fingern.' },
      { name: 'Klicken, solange das Ziel groß ist', desc: 'Je kleiner das Ziel, desto schwerer der Treffer. Zielen Sie nicht auf die perfekte Mitte, sondern klicken Sie früh innerhalb des Randes.', tips: 'Fällt die Trefferquote stark, eine Stufe langsamer spielen.' },
      { name: 'Den Bildschirm weit überblicken', desc: 'Wer auf einen Punkt starrt, entdeckt Ziele auf der anderen Seite zu spät. Blicken Sie entspannt auf die Mitte und nehmen Sie Bewegungen am Rand mit.', tips: 'Erst wandert der Blick, die Hand folgt direkt danach.' },
      { name: 'Locker greifen', desc: 'Halten Sie die Maus entspannt in Ihrer gewohnten Griffhaltung. Zu viel Kraft kostet Genauigkeit und ermüdet das Handgelenk.', tips: 'Bei Ermüdung Pause machen und mit gleicher Ausrüstung vergleichen.' },
    ],
  },
  steps: [
    'Bequem hinsetzen und den Cursor in die Bildschirmmitte legen.',
    'Sobald ein Ziel erscheint, den Cursor in einem Zug in seine Nähe bewegen.',
    'Vor dem Schrumpfen klicken und Punkte plus 2 Sekunden Zeitbonus sammeln.',
    'Mit fehlerfreien Serien die Combo aufbauen und die Punkte steigern.',
  ],
  audience: 'Gamer und alle, die genaues Treffen bewegter Ziele mit der Maus und die Hand-Auge-Abstimmung locker üben möchten.',
  faqs,
  sources: pickSources('woodworth1899', 'fitts1954', 'treisman1980', 'lee1976', 'woods2015'),
};

export default function LocalizedSpeedDrillPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <SpeedDrillClient
        copy={{
          title: 'Schrumpfende Ziele klicken',
          hudLabels: { score: 'Punkte', time: 'Restzeit', bestScore: 'Bestwert', bestCombo: 'Beste Combo' },
          rulesTitle: 'Regeln und Wertung',
          rulesItems: [
            { title: 'Ziele treffen, Zeit gewinnen', text: 'Klicken Sie jedes Ziel, bevor es verschwindet. Ein Treffer bringt 100 Punkte (mit Combo- und Level-Faktor) und 2 Sekunden Zeitbonus (höchstens 60 Sekunden).' },
            { title: 'Combo-Multiplikator', text: 'Fehlerfreie Treffer in Serie erhöhen den Combo-Multiplikator auf bis zu 3,0x.' },
            { title: 'Steigende Schwierigkeit', text: 'Alle 1.750 Punkte steigt das Level; Ziele bewegen sich und schrumpfen schneller.' },
            { title: 'Verpasst oder daneben', text: 'Verschwindet ein Ziel oder klicken Sie daneben, wird die Combo zurückgesetzt und 1 Sekunde abgezogen.' },
          ],
          aboutTitle: 'Über den Speed Drill',
          aboutSections: [
            { title: 'Groß bewegen, klein korrigieren', subtitle: 'Zwei-Phasen-Modell nach Woodworth (1899)', content: 'Schnelles Zielen besteht aus einer großen Bewegung und einer kleinen Korrektur am Ende. Mit steigendem Level bleibt weniger Zeit für die Korrektur.' },
            { title: 'Schrumpfende Ziele und das Fitts-Gesetz', subtitle: 'Kleinere Ziele, höhere Schwierigkeit', content: 'Je weiter ein Ziel bis auf 4 px Radius schrumpft, desto enger wird der Spielraum. Früh zu klicken, solange es groß ist, ist der Kern.' },
            { title: 'Auffällige bewegte Ziele', subtitle: 'Visuelle Suche nach Treisman (1980)', content: 'Kontrastreiche bewegte Ziele fallen auch am Rand des Blickfelds auf. Wer den ganzen Bildschirm überblickt, findet neue Ziele schneller.' },
            { title: 'Restzeit bis zum Verschwinden einschätzen', subtitle: 'Time-to-contact-Forschung nach Lee (1976)', content: 'Forschung dazu, wie Menschen die verbleibende Zeit bei sich nähernden oder größenveränderlichen Objekten einschätzen – eine Hilfe für das Klick-Timing vor dem Verschwinden.' },
          ],
        }}
      />
      <DrillGuide {...speedGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/fitness/speed-drill" />
    </>
  );
}
