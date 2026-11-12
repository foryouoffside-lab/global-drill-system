import VisualSearchClient from '@/app/drills/visual/visual-recognition/visual-search/VisualSearchClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

const URL = "https://skilldrills.online/pt/drills/visual/visual-recognition/visual-search";
const TITLE = "Busca Visual – jogo de encontrar a letra | SkillDrills";
const DESCRIPTION = "Busca visual grátis no navegador: encontre em 45 segundos, o máximo de vezes possível, o caractere-alvo escondido entre 95 caracteres parecidos e girados.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "busca visual",
    "jogo de encontrar a letra",
    "tarefa de busca visual",
    "busca conjuntiva",
    "varredura visual",
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
    languages: getAlternateLanguages('/drills/visual/visual-recognition/visual-search', 'pt'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt/" },
    { "@type": "ListItem", "position": 2, "name": "Treinamento Visual", "item": "https://skilldrills.online/pt/drills/visual" },
    { "@type": "ListItem", "position": 3, "name": "Reconhecimento Visual", "item": "https://skilldrills.online/pt/drills/visual/visual-recognition" },
    { "@type": "ListItem", "position": 4, "name": "Busca Visual", "item": URL }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Busca Visual",
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
  "name": "Como funciona a busca visual",
  "dateModified": "2026-11-12",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Veja o caractere-alvo", "text": "No topo, \"FIND\" mostra o caractere a procurar, por exemplo C, E, P ou 6." },
    { "@type": "HowToStep", "position": 2, "name": "Percorra a grade", "text": "A grade tem 12 × 8 = 96 casas: um único alvo e 95 distratores parecidos, todos girados ao acaso em 0, 90, 180 ou 270 graus." },
    { "@type": "HowToStep", "position": 3, "name": "Clique no alvo", "text": "Clique ou toque no alvo. Logo aparece uma nova grade com um novo caractere-alvo." },
    { "@type": "HowToStep", "position": 4, "name": "Aguente 45 segundos", "text": "A rodada dura 45 segundos fixos. Cada alvo encontrado vale 150 pontos." }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como funciona a busca visual?",
      "acceptedAnswer": { "@type": "Answer", "text": "Um caractere-alvo aparece no topo. Ele está uma única vez na grade 12 × 8, entre 95 distratores parecidos (por exemplo C entre O, Q e G). Ao clicar nele, surge uma nova grade com um novo alvo. Cada rodada dura 45 segundos." }
    },
    {
      "@type": "Question",
      "name": "Como é a pontuação?",
      "acceptedAnswer": { "@type": "Answer", "text": "Cada alvo encontrado vale 150 pontos. A cada 750 pontos (5 alvos) o nível exibido sobe; a grade continua com 96 casas. No fim aparecem pontuação, precisão, nível máximo e número de alvos encontrados." }
    },
    {
      "@type": "Question",
      "name": "Clique errado tira pontos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. A casa errada fica vermelha por um instante, sem tirar pontos nem tempo. Só a precisão do resultado cai." }
    },
    {
      "@type": "Question",
      "name": "Por que os caracteres estão girados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Alvo e distratores têm curvas e traços parecidos, e a rotação aleatória impede que os distratores formem uma textura uniforme. Assim o alvo não salta aos olhos e é preciso conferir casa por casa. A busca fica mais lenta quanto mais o alvo se parece com os distratores (Duncan & Humphreys, 1989)." }
    },
    {
      "@type": "Question",
      "name": "Qual a diferença entre busca por traço e busca conjuntiva?",
      "acceptedAnswer": { "@type": "Answer", "text": "Um alvo que difere por um único traço, como a cor, salta aos olhos não importa quantos distratores haja. Quando é preciso combinar vários traços, a busca fica mais lenta a cada distrator a mais (Treisman & Gelade, 1980; Wolfe, 1994)." }
    },
    {
      "@type": "Question",
      "name": "É um exame de vista ou um teste psicológico?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. É um jogo de treino grátis no navegador, não é exame de vista nem teste psicológico padronizado. Compare sua pontuação apenas com suas próprias rodadas anteriores." }
    },
    {
      "@type": "Question",
      "name": "Como achar o alvo mais rápido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Memorize a forma do alvo antes de procurar e percorra a grade linha por linha ou em quadrantes, em vez de pular ao acaso. Assim nenhuma casa é conferida duas vezes." }
    }
  ]
};

export default function VisualSearchLocalePage() {
  const sources = pickSources('treisman1980', 'wolfe1994', 'duncan1989');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <VisualSearchClient copy={{ title: "Busca Visual", subtitle: "Encontre um caractere entre 95 distratores" }} />
      <DrillGuide
        eyebrow="Busca visual"
        title="Busca Visual: regras, pontos e dicas"
        sources={sources}
      >
        <p>Esta <strong>busca visual</strong> é um jogo grátis de encontrar a letra no navegador: uma grade 12 × 8 mostra 96 caracteres girados, e só um deles é o alvo. Você tem 45 segundos para encontrá-lo o máximo de vezes possível. A cada acerto, a grade e o caractere-alvo mudam.</p>

        <h3>O que acontece na grade</h3>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li><strong>Distratores parecidos:</strong> cada alvo tem três sósias, por exemplo C entre O, Q e G, E entre F, L e P, ou 6 entre 8, 9 e 0.</li>
          <li><strong>Rotação aleatória:</strong> todos os caracteres, inclusive o alvo, são girados em 0, 90, 180 ou 270 graus.</li>
          <li><strong>Tempo fixo:</strong> 45 segundos, sem bônus nem perda de tempo.</li>
          <li><strong>Controle:</strong> mouse ou toque, um clique ou toque na casa.</li>
        </ul>

        <h3>Por que a busca é casa por casa</h3>
        <p>A psicologia da percepção separa a busca por traço, em que o alvo salta aos olhos, da busca conjuntiva, em que é preciso combinar traços e examinar os itens um a um (Treisman &amp; Gelade, 1980; Wolfe, 1994). Quanto mais o alvo se parece com os distratores e quanto mais variados eles são, mais lenta fica a busca (Duncan &amp; Humphreys, 1989). Esta grade usa exatamente isso: formas parecidas e rotação aleatória.</p>

        <h3>Faixas de treino SkillDrills (45 segundos)</h3>
        <p>As faixas são referências próprias do SkillDrills para esta grade, não normas científicas.</p>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="py-2.5 px-3 font-semibold">Faixa</th>
                <th className="py-2.5 px-3 font-semibold">Alvos</th>
                <th className="py-2.5 px-3 font-semibold">Pontos</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr><td className="py-2.5 px-3">Inicial</td><td className="py-2.5 px-3 tabular-nums">0–3</td><td className="py-2.5 px-3 tabular-nums">0–450</td></tr>
              <tr><td className="py-2.5 px-3">Sólida</td><td className="py-2.5 px-3 tabular-nums">4–6</td><td className="py-2.5 px-3 tabular-nums">600–900</td></tr>
              <tr><td className="py-2.5 px-3">Forte</td><td className="py-2.5 px-3 tabular-nums">7–9</td><td className="py-2.5 px-3 tabular-nums">1.050–1.350</td></tr>
              <tr><td className="py-2.5 px-3">Topo</td><td className="py-2.5 px-3 tabular-nums">10+</td><td className="py-2.5 px-3 tabular-nums">1.500+</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Dicas</h3>
        <ol className="list-decimal pl-5 space-y-2 my-4 text-slate-300">
          <li><strong>Memorize o alvo:</strong> note o detalhe que o separa dos sósias, como a abertura do C ou o traço do G.</li>
          <li><strong>Varra com método:</strong> linha por linha ou em quadrantes, para não conferir nenhuma casa duas vezes.</li>
          <li><strong>Clique com calma:</strong> errar não custa tempo, mas baixa a precisão.</li>
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
