import EntropicGridClient from '@/app/drills/visual/visual-recognition/entropic-grid/EntropicGridClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/pt/drills/visual/visual-recognition/entropic-grid";
const TITLE = "Treino de Atenção Concentrada em Grade | SkillDrills";
const DESCRIPTION = "Treino de atenção concentrada grátis: em 45 segundos, clique em cada cópia do código-alvo numa grade 10 × 10 de códigos de dois caracteres que muda sem parar.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "treino de atenção concentrada",
    "teste de atenção concentrada online",
    "escaneamento visual",
    "encontrar o código",
    "grade de códigos",
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: URL,
    siteName: "SkillDrills",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/visual/visual-recognition/entropic-grid', 'pt'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt/" },
    { "@type": "ListItem", "position": 2, "name": "Treinamento Visual", "item": "https://skilldrills.online/pt/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconhecimento Visual", "item": "https://skilldrills.online/pt/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Treino de Atenção Concentrada em Grade", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Treino de Atenção Concentrada em Grade",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "description": DESCRIPTION,
  "url": URL,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online" },
  "dateModified": "2026-11-12"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como funciona o treino de atenção concentrada em grade",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Leia o código-alvo", "text": "No topo, abaixo de \"FIND TARGET CODE\", aparece um código de dois caracteres com letras e números, por exemplo K7." },
    { "@type": "HowToStep", "position": 2, "name": "Percorra a grade", "text": "A grade 10 × 10 tem 100 códigos de dois caracteres; o código-alvo aparece nela pelo menos duas vezes." },
    { "@type": "HowToStep", "position": 3, "name": "Clique em cada cópia", "text": "Cada cópia encontrada vale 150 pontos. Quando todas são encontradas, surgem um novo código e uma nova grade." },
    { "@type": "HowToStep", "position": 4, "name": "Aguente 45 segundos", "text": "A cada 700 ms três casas distratoras trocam de código, e o código-alvo muda no máximo a cada 12 segundos." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona o treino de atenção concentrada em grade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Um código-alvo de dois caracteres aparece no topo. Ele está em vários lugares entre os 100 códigos da grade 10 × 10; clique em cada cópia. Quando todas forem encontradas ou após 12 segundos, vêm um novo código e uma nova grade. Cada rodada dura 45 segundos." }
    },
    {
      "@type": "Question",
      "name": "Isto é o teste de atenção concentrada do Detran ou o BPA?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. É um treino grátis no navegador, sem relação com o teste psicológico oficial (AC, BPA ou exame do Detran) e sem norma de aprovação. Serve só para praticar busca visual e comparar com suas próprias rodadas." }
    },
    {
      "@type": "Question",
      "name": "Quantas cópias do código-alvo existem?",
      "acceptedAnswer": { "@type": "Answer", "text": "Duas no início. O número cresce com o nível: três a partir do nível 3, quatro a partir do nível 6, cinco a partir do nível 9 e no máximo seis a partir do nível 12." }
    },
    {
      "@type": "Question",
      "name": "Por que a grade muda o tempo todo?",
      "acceptedAnswer": { "@type": "Answer", "text": "A cada 700 milissegundos, três casas distratoras sorteadas recebem um novo código. As cópias do código-alvo ficam no lugar. Assim não dá para decorar a grade." }
    },
    {
      "@type": "Question",
      "name": "Como é a pontuação?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cada cópia encontrada vale 150 pontos e o nível sobe a cada 750 pontos (5 cópias). No fim aparecem pontuação, precisão, nível máximo e número de cópias encontradas." }
    },
    {
      "@type": "Question",
      "name": "Clique errado tira pontos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. A casa errada fica vermelha por um instante, sem tirar pontos nem tempo. Só a precisão cai." }
    },
    {
      "@type": "Question",
      "name": "Como achar os códigos mais rápido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Memorize o código como um par, não como dois caracteres soltos, e varra a grade em quadrantes ou linha por linha. Como os distratores mudam, decorar posições não ajuda." }
    }
  ]
};

export default function EntropicGridLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <EntropicGridClient copy={{ title: "Treino de Atenção Concentrada em Grade", subtitle: "Encontre o código-alvo numa grade de 100 casas que muda" }} />
      <DrillGuide
        eyebrow="Busca visual em grade"
        title="Treino de atenção concentrada: regras, pontos e dicas"
        sources={sources}
      >
        <p>Este <strong>treino de atenção concentrada</strong> é um exercício grátis no navegador: numa grade 10 × 10 com 100 códigos de dois caracteres, você clica em cada cópia do código-alvo. A rodada dura 45 segundos e a grade nunca fica igual, porque os distratores mudam sem parar. É prática, não o teste psicológico oficial do Detran ou o BPA. Funciona com mouse ou toque.</p>

        <h3>O que acontece na grade</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Código-alvo:</strong> dois caracteres entre letras (sem I e O) e os números 2 a 9.</li>
          <li><strong>Várias cópias:</strong> duas no início, até seis ao mesmo tempo conforme o nível.</li>
          <li><strong>Ruído:</strong> a cada 700 ms, três casas distratoras trocam de código.</li>
          <li><strong>Troca de alvo:</strong> novo código quando todas as cópias são encontradas, no máximo após 12 segundos.</li>
        </ul>

        <h3>Por que a busca exige esforço</h3>
        <p>Um código de dois caracteres não se destaca dos distratores por um único traço chamativo, mas só pela combinação de dois caracteres. Esse tipo de busca acontece mais item por item (Treisman &amp; Gelade, 1980; Wolfe, 1994) e fica mais lenta quanto mais o alvo se parece com os distratores (Duncan &amp; Humphreys, 1989). O ruído que muda ainda impede que você se apoie em posições decoradas.</p>

        <h3>Faixas de treino SkillDrills (45 segundos)</h3>
        <p>As faixas são referências próprias do SkillDrills para esta grade, não normas científicas nem critério de aprovação.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Faixa</th>
                <th className="py-2.5 px-3 font-semibold">Cópias</th>
                <th className="py-2.5 px-3 font-semibold">Pontos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Inicial</td><td className="py-2.5 px-3 tabular-nums">0–2</td><td className="py-2.5 px-3 tabular-nums">0–300</td></tr>
              <tr><td className="py-2.5 px-3">Sólida</td><td className="py-2.5 px-3 tabular-nums">3–4</td><td className="py-2.5 px-3 tabular-nums">450–600</td></tr>
              <tr><td className="py-2.5 px-3">Forte</td><td className="py-2.5 px-3 tabular-nums">5–6</td><td className="py-2.5 px-3 tabular-nums">750–900</td></tr>
              <tr><td className="py-2.5 px-3">Topo</td><td className="py-2.5 px-3 tabular-nums">7+</td><td className="py-2.5 px-3 tabular-nums">1.050+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Dicas</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Leia o código como par:</strong> procure a sequência de dois caracteres, não uma letra solta.</li>
          <li><strong>Varra em quadrantes:</strong> percorra a grade quadrante por quadrante em vez de pular ao acaso.</li>
          <li><strong>Continue depois de acertar:</strong> quase sempre há outra cópia do mesmo código.</li>
        </ol>

        <h3>Perguntas frequentes (FAQ)</h3>
        <div className="space-y-4 my-6">
          {faqSchema.mainEntity.map((q) => (
            <div key={q.name}>
              <h4 className="font-semibold text-white">{q.name}</h4>
              <p className="text-slate-300 mt-1">{q.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
    </>
  );
}
