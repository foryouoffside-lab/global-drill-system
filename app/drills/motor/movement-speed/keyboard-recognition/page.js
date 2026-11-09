import KeyboardRecognitionClient from './KeyboardRecognitionClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO RESEARCH FINDINGS — keyboard-recognition (motor-keyboard-speed)
// PRIMARY:  "keyboard speed test"         — Core search phrase (~3,600 searches/mo)
//           "keybind reaction trainer"    — Direct mechanism & utility search
// SECONDARY / LSI:
//           "keyboard recognition test"   — Cognitive mapping query
//           "gaming keybind trainer"      — Competitive FPS mechanic term
//           "keybind muscle memory"       — Neuromuscular conditioning search
//           "keyboard reflex test"        — Reaction speed assessment query
//           "key press reaction time"     — Chronometry query
//           "keyboard layout trainer"     — Spatial keyboard mapping search
//           "keybind speed test"          — Velocity assessment phrase
//           "response inhibition test"    — Cognitive control search
//           "keyboard dexterity test"     — Fine motor skill phrase
//           "valorant keybind practice"   — Title-specific esports query
//           "cs2 keybind practice"        — Counter-Strike utility query
// ============================================================

export const metadata = {
  title: 'Keyboard Speed Test – Free Keybind Reaction Trainer',
  description: "Free keyboard speed test. Measure how fast you press the right key for a prompt, against Hick's Law of choice reaction time. No sign-up.",
  keywords: [
    'keyboard speed test',
    'keybind reaction trainer',
    'keyboard recognition test',
    'gaming keybind trainer',
    'keybind muscle memory',
    'keyboard reflex test',
    'key press reaction time',
    'keyboard layout trainer',
    'keybind speed test',
    'response inhibition test',
    'keyboard dexterity test',
    'valorant keybind practice',
    'cs2 keybind practice',
  ],
  openGraph: {
    title: 'Keyboard Speed Test – Free Keybind Reaction Trainer | SkillDrills',
    description: 'Test keyboard layout familiarity, choice reaction time, and gaming keybind reflex speed with this free keybind trainer. Instant browser drill, zero install required.',
    type: 'article',
    url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition',
    siteName: 'SkillDrills',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keyboard Speed Test – Free Keybind Reaction Trainer | SkillDrills',
    description: 'Test keyboard layout familiarity, choice reaction time, and gaming keybind reflex speed with this free keybind trainer. Instant browser drill, zero install required.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition',
    languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-recognition'),
  },
};

// --- Structured Data ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/' },
    { '@type': 'ListItem', position: 2, name: 'Motor Training', item: 'https://skilldrills.online/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Movement Speed', item: 'https://skilldrills.online/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Keyboard Speed Test', item: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Computer_keyboard", "https://en.wikipedia.org/wiki/Reaction_time"],
  name: 'Keyboard Speed Test – Free Keybind Reaction Trainer',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description: 'Free browser-based keyboard speed test and keybind reaction trainer. Measure choice reaction latency, keybind muscle memory, and response inhibition.',
  url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-05',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Keyboard Speed Test',
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requires HTML5 Canvas and JavaScript support',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition',
  dateModified: '2026-09-05',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Keyboard Speed Test – Keybind Reaction Trainer',
  url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition',
  description: "Measure how fast you press the right key for a prompt, against Hick's Law of choice reaction time.",
  genre: ['Keyboard Game', 'Action', 'Esports Training'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a keyboard speed test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Here it means a keybind reaction drill: a key prompt appears on screen and you press that key as fast as you can, for 60 seconds. It is not a typing test (no words or WPM). It practises choice reaction time, finding keys without looking, and holding back on fake prompts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does keybind training improve FPS performance in Valorant and CS2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In tactical shooters, executing weapon switches, utility deployment (smokes, flashes), and ability casts under fire demands zero hesitation. Practising key prompts helps you find binds without glancing down. How much that transfers to a specific game varies from player to player.',
      },
    },
    {
      '@type': 'Question',
      name: "What is choice reaction time and how does Hick's Law apply here?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Choice reaction time (Donders 1868) measures decision latency when selecting among multiple stimuli. Hick's Law states that reaction time increases logarithmically as the number of possible stimulus-response alternatives grows. Well-practised key mappings reduce the time spent choosing.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does the Fake Prompt / trap mechanism test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fake prompts (shown in amber) practise response inhibition, the ability studied with the stop-signal paradigm (Logan 1984). When one appears, press nothing: letting it expire scores +200 points. Pressing any key on a fake prompt resets your combo and counts as a wrong keypress.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there an average score or reaction time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SkillDrills collects no player data, so there are no population norms. The results screen shows your average reaction time, keys per minute, accuracy and max combo, and grades you on score plus accuracy. Compare against your own earlier sessions on the same keyboard and settings.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do sequence prompts work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sequence prompts show 2 to 5 keys (depending on mode and difficulty) to press in order before the prompt timer runs out. Memory prompts show 3 keys briefly, then hide them, so you press them from short-term memory (Sternberg 1966). Reading the whole sequence as one chunk is faster than handling each key separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'What keyboard type provides the lowest input latency for testing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A keyboard with a high USB polling rate (1000 Hz reports every 1 ms) adds less delay, so more of the measured time reflects your own reaction. This drill does not test the keyboard itself; use the same keyboard between runs so your results stay comparable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many minutes per day should I practice keybind reactions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A few focused 60-second sessions with short breaks is a sensible routine. When you start falling for fake prompts more often, you are probably tired.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does keybind training benefit MOBA games like League of Legends and Dota 2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drill includes a League of Legends key preset (Q, W, E, R, D, F, item keys and more), so you can practise those binds without looking down. How much it helps in-game varies from player to player.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are KPM (Keys Per Minute) and accuracy calculated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KPM is all your key presses divided by the session length in minutes. Accuracy is correct key presses divided by all key presses, including wrong keys and presses on fake prompts.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Train Keyboard Speed & Keybind Muscle Memory',
  description: 'Step-by-step guide to practising key recognition and choice reaction speed.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Adopt the Tactical Home Position',
      text: 'Place your left hand on your default gaming cluster (WASD or custom keybind home layout) with fingers resting lightly on the switch caps.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Detect and Identify the Key Prompt',
      text: 'Keep your eyes anchored to the center display. When the target key symbol renders, resolve the required keystroke without glancing downward.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Actuate the Key with Ballistic Precision',
      text: 'Press the prompted key. If an amber fake prompt appears, press nothing and let it expire.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Evaluate Reaction Latency & Inhibition Rates',
      text: 'Review your average reaction time, keys per minute, accuracy and max combo on the results screen.',
      url: 'https://skilldrills.online/drills/motor/movement-speed/keyboard-recognition#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('donders1868', 'hick1952', 'logan1984', 'sternberg1966', 'woods2015'),
  intro: {
    title: `What Is a Keyboard Speed Test, and How Is It Measured?`,
    paragraphs: [
      `This keyboard speed test measures how fast you press the right key after a prompt appears, not how many words you type. It shows a key, times your press, and mixes in fake prompts you must ignore plus multi-key sequence and memory prompts, so it practises choice reaction time and keybind recall. It is not a typing test.`,
      'How this is measured, and what it cannot resolve: timing comes from the browser\'s performance.now() clock, which is deliberately coarsened to roughly 1 ms as a Spectre mitigation, and the display quantizes every target to its own refresh interval — about 16.7 ms at 60 Hz, 6.9 ms at 144 Hz and 4.1 ms at 240 Hz (Woods et al., 2015). Keyboard polling adds roughly 8 ms at 125 Hz against about 1 ms at 1000 Hz. Treat any difference under about 5 ms as measurement noise, and compare your own runs on the same keyboard and display rather than against someone else\'s setup. SkillDrills stores every score in your browser and collects no aggregate data, so nothing here is a population norm.',
    ],
  },
  benchmark: {
    title: 'Keybind Reaction Trainer: SkillDrills Practice Bands',
    description: 'SkillDrills practice bands, not research norms or user data: SkillDrills collects no aggregate data. They match the grade on the results screen, which needs both the score and the accuracy shown for a 60-second session.',
    columns: ['Grade', 'Rank Title', 'Score', 'Accuracy', 'Band'],
    rows: [
      { tier: 'S+', rank: 'Grandmaster', score: '3,500+', accuracy: '95%+', band: 'SkillDrills practice band' },
      { tier: 'S', rank: 'Master', score: '2,200+', accuracy: '90%+', band: 'SkillDrills practice band' },
      { tier: 'A', rank: 'Diamond', score: '1,400+', accuracy: '85%+', band: 'SkillDrills practice band' },
      { tier: 'B', rank: 'Platinum', score: '700+', accuracy: '80%+', band: 'SkillDrills practice band' },
      { tier: 'C', rank: 'Gold', score: '300+', accuracy: '75%+', band: 'SkillDrills practice band' },
      { tier: 'D', rank: 'Silver', score: '100+', accuracy: '65%+', band: 'SkillDrills practice band' },
      { tier: 'F', rank: 'Bronze', score: 'below D', accuracy: 'below D', band: 'SkillDrills practice band' },
    ],
  },
  protocols: {
    title: 'How to train keybind speed',
    description: 'Practice guidance based on the models cited above.',
    items: [
      {
        title: 'Protocol 1: Donders Choice Latency Compression (Stimulus-Response Mapping)',
        description: 'Focus your gaze strictly on the screen center without glancing downward at your keyboard. Find each key by feel from your finger position, which gets faster with practice.',
      },
      {
        title: 'Protocol 2: Hick’s Law Alternative Reduction (Sub-Cluster Zoning)',
        description: 'Mentally partition your active keyboard into functional sub-clusters (movement home keys WASD, tactical perimeter QECX, and upper numeral row 1-4). Grouping keys into zones can make each choice feel smaller than treating all keys as one unstructured set.',
      },
      {
        title: 'Protocol 3: Logan Countermanding & Stop-Signal Inhibition (Trap Pacing)',
        description: 'Check the prompt colour before you press. When you see an amber fake prompt, stop the press and let it expire for +200 points.',
      },
      {
        title: 'Protocol 4: Sternberg Working-Memory Chunking (Multi-Key Sequences)',
        description: 'When tackling 3- to 5-key sequences, do not type each key in isolation. Read the full sequence as a unified cognitive chunk, and press the keys as one smooth run.',
      },
    ],
  },
  faqs: {
    title: 'Frequently Asked Questions About Keyboard Speed & Keybinds',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function KeyboardRecognitionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
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
      <KeyboardRecognitionClient copy={{ subtitle: 'Keybind reaction trainer for choice reaction time and key recall' }} />
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
