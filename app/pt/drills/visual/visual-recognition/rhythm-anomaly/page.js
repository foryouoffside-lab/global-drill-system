import RhythmAnomalyClient from '@/app/drills/visual/visual-recognition/rhythm-anomaly/RhythmAnomalyClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const PAGE_URL = "https://skilldrills.online/pt/drills/visual/visual-recognition/rhythm-anomaly";
const TITLE = "Encontre a célula fora do ritmo: teste visual | SkillDrills";
const DESCRIPTION = "Encontre a célula fora do ritmo: numa grade 6x6 que pulsa, clique na única célula que pisca em outro compasso. Teste visual grátis de 45 segundos.";
const FAQS = [
  [
    "O que este teste de ritmo visual mede?",
    "Conta quantas vezes você encontra a célula fora do ritmo em 45 segundos (10 pontos cada), sua melhor sequência e seus erros. É uma pontuação de treino para comparar ritmos, não um diagnóstico da visão nem do sistema nervoso."
  ],
  [
    "É um teste de frequência crítica de fusão (CFF)?",
    "Não. A grade pisca só de 0,6 a 2,5 vezes por segundo. A frequência crítica de fusão (cerca de 50 a 60 Hz) não é medida aqui."
  ],
  [
    "Como sobem os pontos e o nível?",
    "Cada acerto vale 10 pontos e o nível sobe a cada 3 acertos. Quanto mais você acerta, mais rápido fica o compasso (período de 1,6 s a 0,6 s) e mais frequentes ficam as piscadas de distração."
  ],
  [
    "Errar tira pontos?",
    "Não. Um clique errado mostra um flash vermelho e só zera a sequência. Se o limite de tempo estiver ativado, a célula muda de lugar quando você não a encontra a tempo."
  ],
  [
    "Para que servem as células que escurecem?",
    "São distratores aleatórios. A célula certa é a que pisca o tempo todo em outro compasso."
  ],
  [
    "Dá para jogar com o teclado?",
    "Não, o jogo é por clique ou toque. O teclado não tem função no jogo."
  ],
  [
    "A taxa de atualização da tela importa?",
    "Pouco, porque a grade pisca devagar e aparece bem até em telas de 60 Hz. Brilho, tamanho da tela e latência de entrada podem influenciar (Woods et al., 2015): compare no mesmo aparelho."
  ],
  [
    "Quem é sensível à luz pode jogar?",
    "A grade pisca devagar em tons de cinza escuro. Se telas piscando incomodam você ou se tem fotossensibilidade, não jogue. Pare se sentir dor de cabeça ou tontura."
  ]
];
const RULES = [
  "Clique na célula certa: +10 pontos, e a célula diferente muda de lugar.",
  "A cada 3 acertos o nível sobe; o compasso e as piscadas de distração ficam mais rápidos.",
  "Células aleatórias escurecem por um instante o tempo todo (distratores).",
  "Clique errado: flash vermelho e a sequência de acertos zera. Nenhum ponto ou tempo é descontado.",
  "Com o limite de tempo ativado nas configurações, a célula diferente muda de lugar após 6 s (mínimo de 1,8 s no fim) sem resposta, e a sequência zera."
];
const BANDS = [
  [
    "Faixa 1",
    "< 50",
    "0–4",
    "L1–2"
  ],
  [
    "Faixa 2",
    "50–99",
    "5–9",
    "L2–4"
  ],
  [
    "Faixa 3",
    "100–149",
    "10–14",
    "L4–5"
  ],
  [
    "Faixa 4",
    "150–199",
    "15–19",
    "L6–7"
  ],
  [
    "Faixa 5",
    "200+",
    "20+",
    "L7+"
  ]
];
const TIPS = [
  "Olhe a grade inteira em vez de célula por célula: a que está fora do ritmo aparece mais rápido.",
  "Uma célula que escurece uma vez é distrator. Clique quando uma célula piscar pelo menos duas vezes em outro compasso.",
  "Quando o nível subir, observe o novo compasso por uma batida antes de clicar.",
  "Compare resultados no mesmo aparelho e com o mesmo brilho de tela."
];
const INTRO = [
  "Neste jogo, as 36 células de uma grade 6x6 piscam devagar no mesmo compasso. Só uma célula pisca num ritmo mais rápido: encontre a célula fora do ritmo e clique nela. A sessão dura 45 segundos e roda grátis no navegador, com mouse ou toque.",
  "A célula diferente tem cerca de 72 % do período das outras: pisca cerca de 1,4 vez mais rápido e fica um pouco mais clara no pico. A cada acerto, a grade inteira acelera (período de 1,6 s até 0,6 s no mínimo). No começo é fácil; depois é preciso perceber a diferença de ritmo mais depressa.",
  "A grade pisca de 0,6 a 2,5 vezes por segundo, muito abaixo da frequência crítica de fusão (cerca de 50 a 60 Hz; De Lange, 1958; Kelly, 1961). Portanto não é um teste de cintilação (CFF), e sim uma tarefa de atenção de discriminação temporal visual, em que você compara ritmos. Julgar se dois estímulos estão no mesmo compasso só funciona em ritmos bem mais lentos do que detectar a cintilação em si (Holcombe, 2009)."
];

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
  "encontre a célula fora do ritmo",
  "discriminação temporal visual",
  "teste de ritmo visual",
  "jogo de encontrar o diferente",
  "grade que pisca"
],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: PAGE_URL,
    siteName: "SkillDrills",
    locale: "pt_BR",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/rhythm-anomaly', 'pt'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt/" },
    { "@type": "ListItem", "position": 2, "name": "Treinamento Visual", "item": "https://skilldrills.online/pt/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconhecimento Visual", "item": "https://skilldrills.online/pt/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Célula Fora do Ritmo", "item": PAGE_URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Encontre a célula fora do ritmo",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": "Jogo de 45 segundos no navegador: encontre na grade 6x6 a célula que pisca mais rápido que as outras. Mouse ou toque.",
  "url": PAGE_URL,
  "inLanguage": "pt-BR",
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como jogar: encontre a célula fora do ritmo",
  "inLanguage": "pt-BR",
  "step": [
  [
    "Olhar a grade inteira",
    "Fixe o olhar no centro da grade 6x6 e perceba o compasso comum das 36 células."
  ],
  [
    "Achar o ritmo diferente",
    "Procure a única célula que pisca mais rápido. Células que escurecem por um instante são distratores."
  ],
  [
    "Clicar ou tocar",
    "Clique ou toque na célula: +10 pontos, e ela muda de lugar."
  ],
  [
    "Acompanhar a aceleração",
    "A cada 3 acertos o nível sobe e o compasso acelera. Após 45 segundos, veja pontos e sequência."
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
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12",
  "mainEntity": FAQS.map(([q, a]) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

export default function PortugueseRhythmAnomalyPage() {
  const sources = pickSources('holcombe2009', 'kelly1961', 'delange1958', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <RhythmAnomalyClient copy={{ title: "Encontre a célula fora do ritmo", subtitle: "Teste de ritmo visual com grade 6x6" }} />
      <DrillGuide
        eyebrow={"Guia do teste de ritmo visual"}
        title={"Célula fora do ritmo: como jogar e pontuação"}
        sources={sources}
      >
        {INTRO.map((p) => <p key={p}>{p}</p>)}

        <h3>{"Regras"}</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          {RULES.map((r) => <li key={r}>{r}</li>)}
        </ul>

        <h3>{"Faixas de prática SkillDrills"}</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                {[
  "Faixa",
  "Pontos (45 s)",
  "Acertos",
  "Nível alcançado"
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
        <p>{"Faixas de prática do SkillDrills: não são estatística populacional, percentil nem diagnóstico."}</p>

        <h3>{"Dicas"}</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          {TIPS.map((t) => <li key={t}>{t}</li>)}
        </ol>

        <h3>{"Perguntas frequentes"}</h3>
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
