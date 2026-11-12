import RhythmAnomalyClient from '@/app/drills/visual/visual-recognition/rhythm-anomaly/RhythmAnomalyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = "https://skilldrills.online/es/drills/visual/visual-recognition/rhythm-anomaly";
const TITLE = "Encuentra la celda fuera de ritmo: test visual | SkillDrills";
const DESCRIPTION = "Encuentra la celda fuera de ritmo: en una cuadrícula 6x6 que late, haz clic en la única celda que parpadea a otro compás. Test visual gratis de 45 segundos.";
const FAQS = [
  [
    "¿Qué mide este test de ritmo visual?",
    "Cuenta cuántas veces encuentras la celda fuera de ritmo en 45 segundos (10 puntos cada una), tu mejor racha y tus errores. Es una puntuación de práctica para comparar ritmos, no un diagnóstico de la vista ni del sistema nervioso."
  ],
  [
    "¿Es un test de frecuencia crítica de fusión (CFF)?",
    "No. La cuadrícula solo parpadea entre 0,6 y 2,5 veces por segundo. La frecuencia crítica de fusión (unos 50 a 60 Hz) no se mide aquí."
  ],
  [
    "¿Cómo suben los puntos y el nivel?",
    "Cada acierto vale 10 puntos y el nivel sube cada 3 aciertos. Cuanto más aciertas, más rápido va el compás (periodo de 1,6 s a 0,6 s) y más frecuentes son los parpadeos de distracción."
  ],
  [
    "¿Fallar resta puntos?",
    "No. Un clic erróneo muestra un destello rojo y solo reinicia la racha. Si el límite de tiempo está activado, la celda cambia de sitio cuando no la encuentras a tiempo."
  ],
  [
    "¿Para qué sirven las celdas que se oscurecen?",
    "Son distractores aleatorios. La celda correcta es la que parpadea todo el rato a otro compás."
  ],
  [
    "¿Se puede jugar con el teclado?",
    "No, se juega con clic o toque. El teclado no tiene función en el juego."
  ],
  [
    "¿Influye la frecuencia de la pantalla?",
    "Poco, porque la cuadrícula parpadea despacio y se ve bien incluso a 60 Hz. El brillo, el tamaño de la pantalla y la latencia de entrada sí pueden influir (Woods et al., 2015): compara en el mismo dispositivo."
  ],
  [
    "¿Pueden jugar personas sensibles a la luz?",
    "La cuadrícula parpadea despacio en grises oscuros. Si las pantallas que parpadean te molestan o tienes fotosensibilidad, no juegues. Para si notas dolor de cabeza o mareo."
  ]
];
const RULES = [
  "Clic en la celda correcta: +10 puntos, y la celda distinta cambia de sitio.",
  "Cada 3 aciertos sube el nivel; el compás y los parpadeos de distracción se aceleran.",
  "Celdas al azar se oscurecen un instante continuamente (distractores).",
  "Clic erróneo: destello rojo y la racha vuelve a cero. No se resta ni puntuación ni tiempo.",
  "Con el límite de tiempo activado en los ajustes, la celda distinta cambia de sitio tras 6 s (mínimo 1,8 s al final) sin respuesta, y la racha vuelve a cero."
];
const BANDS = [
  [
    "Rango 1",
    "< 50",
    "0–4",
    "L1–2"
  ],
  [
    "Rango 2",
    "50–99",
    "5–9",
    "L2–4"
  ],
  [
    "Rango 3",
    "100–149",
    "10–14",
    "L4–5"
  ],
  [
    "Rango 4",
    "150–199",
    "15–19",
    "L6–7"
  ],
  [
    "Rango 5",
    "200+",
    "20+",
    "L7+"
  ]
];
const TIPS = [
  "Mira toda la cuadrícula en lugar de celda por celda: la que va fuera de ritmo destaca antes.",
  "Una celda que se oscurece una vez es un distractor. Haz clic cuando una celda haya parpadeado al menos dos veces a otro compás.",
  "Cuando suba el nivel, observa el nuevo compás durante un latido antes de hacer clic.",
  "Compara resultados en el mismo dispositivo y con el mismo brillo de pantalla."
];
const INTRO = [
  "En este juego, las 36 celdas de una cuadrícula 6x6 parpadean despacio al mismo compás. Solo una celda parpadea a un ritmo más rápido: encuentra la celda fuera de ritmo y haz clic en ella. La sesión dura 45 segundos y se juega gratis en el navegador, con ratón o pantalla táctil. No es un examen de la vista ni una prueba médica.",
  "La celda distinta tiene cerca del 72 % del periodo de las demás: parpadea unas 1,4 veces más rápido y se ve algo más clara en el pico. Con cada acierto, toda la cuadrícula acelera (periodo de 1,6 s hasta un mínimo de 0,6 s). Al principio es fácil; después hay que notar la diferencia de ritmo más deprisa.",
  "La cuadrícula parpadea entre 0,6 y 2,5 veces por segundo, muy por debajo de la frecuencia crítica de fusión (unos 50 a 60 Hz; De Lange, 1958; Kelly, 1961). Por eso no es un test de parpadeo (CFF), sino una tarea de atención de discriminación temporal visual en la que comparas ritmos. Juzgar si dos estímulos van al mismo compás solo es posible a ritmos mucho más lentos que detectar el parpadeo en sí (Holcombe, 2009)."
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "encuentra la celda fuera de ritmo",
  "discriminación temporal visual",
  "test de ritmo visual",
  "juego de encontrar anomalías",
  "cuadrícula que parpadea"
],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
    siteName: "SkillDrills",
    locale: "es_ES",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/rhythm-anomaly', 'es'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es/" },
    { "@type": "ListItem", "position": 2, "name": "Entrenamiento Visual", "item": "https://skilldrills.online/es/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconocimiento Visual", "item": "https://skilldrills.online/es/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Celda Fuera de Ritmo", "item": PAGE_URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Encuentra la celda fuera de ritmo",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Juego de 45 segundos en el navegador: encuentra en la cuadrícula 6x6 la celda que parpadea más rápido que las demás. Ratón o táctil, sin valor médico.",
  "url": PAGE_URL,
  "inLanguage": "es-ES",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo jugar: encuentra la celda fuera de ritmo",
  "inLanguage": "es-ES",
  "step": [
  [
    "Mirar toda la cuadrícula",
    "Fija la vista en el centro de la cuadrícula 6x6 y percibe el compás común de las 36 celdas."
  ],
  [
    "Encontrar el ritmo distinto",
    "Busca la única celda que parpadea más rápido. Las celdas que se oscurecen un instante son distractores."
  ],
  [
    "Clic o toque",
    "Haz clic o toca la celda: +10 puntos, y cambia de sitio."
  ],
  [
    "Seguir la aceleración",
    "Cada 3 aciertos sube el nivel y el compás acelera. Tras 45 segundos, revisa tus puntos y tu racha."
  ]
].map(([name, text], i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": name,
    "text": text,
    "url": `${PAGE_URL}#step-${i + 1}`
  }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-12",
  "mainEntity": FAQS.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function SpanishRhythmAnomalyPage() {
  const sources = pickSources('holcombe2009', 'kelly1961', 'delange1958', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RhythmAnomalyClient copy={{ title: "Encuentra la celda fuera de ritmo", subtitle: "Test de ritmo visual con cuadrícula 6x6" }} />
      <DrillGuide
        eyebrow={"Guía del test de ritmo visual"}
        title={"Celda fuera de ritmo: cómo se juega y puntuación"}
        sources={sources}
      >
        {INTRO.map((p) => <p key={p}>{p}</p>)}

        <h3>{"Reglas"}</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h3>{"Niveles de práctica SkillDrills"}</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                {[
  "Rango",
  "Puntos (45 s)",
  "Aciertos",
  "Nivel alcanzado"
].map((h) => <th key={h} className="py-2.5 px-3 font-semibold">{h}</th>)}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {BANDS.map((row) => (
                <tr key={row[0]}>
                  {row.map((c, i) => <td key={i} className="py-2.5 px-3 tabular-nums">{c}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>{"Niveles de práctica de SkillDrills: no son estadística de población, percentiles ni diagnóstico."}</p>

        <h3>{"Consejos"}</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ol>

        <h3>{"Preguntas frecuentes"}</h3>
        <div className="space-y-4 my-6">
          {FAQS.map(([q, a]) => (
            <div key={q}>
              <h4 className="font-semibold text-white">{q}</h4>
              <p className="text-slate-300 mt-1">{a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
