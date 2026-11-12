import MotorSequencingClient from '@/app/drills/physical/fitness/agility-ladder/MotorSequencingClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/pt.md)
// Primary: Escada de Agilidade com o Mouse (no-demand descriptive).
// Bare "escada de agilidade" = equipment/gym intent; this is a mouse rhythm
// game, not a footwork workout. Dropped footwork/counter-strafe/fitness claims.
// ============================================================

const TITLE = 'Escada de Agilidade com o Mouse: Jogo de Ritmo | SkillDrills';
const DESCRIPTION = 'Escada de agilidade com o mouse: passe o cursor pelos 4 degraus de cada escada, esquerda-direita-esquerda-direita. Jogo de ritmo grátis de 45 segundos.';
const URL = 'https://skilldrills.online/pt/drills/physical/fitness/agility-ladder';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['escada de agilidade com o mouse', 'jogo de ritmo com o mouse', 'passos laterais com o cursor', 'jogo de escada de agilidade online', 'jogo de navegador grátis'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/agility-ladder'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Treinamento Físico", "item": "https://skilldrills.online/pt/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Condicionamento e Agilidade", "item": "https://skilldrills.online/pt/drills/physical/fitness" },
    { "@type": "ListItem", "position": 4, "name": "Escada de Agilidade com o Mouse", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Escada de Agilidade com o Mouse",
  "description": "Jogo de ritmo grátis de 45 segundos no navegador: passe o cursor pelos 4 degraus de cada escada que desce, na ordem esquerda-direita-esquerda-direita.",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador atual com HTML5 Canvas e mouse",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "url": URL,
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-10"
};

const FAQS = [
  {
    q: "O que é a Escada de Agilidade com o Mouse?",
    a: "É um jogo de ritmo grátis no navegador: escadas descem pela tela e você passa o cursor pelos 4 degraus de cada uma (esquerda, direita, esquerda, direita) em ordem fixa. A rodada dura 45 segundos e cada escada completa vale pontos."
  },
  {
    q: "Como se joga? Preciso clicar?",
    a: "Não precisa clicar. Basta levar a mira até o degrau atual (contorno verde); ele conta como pisado e o próximo fica ativo. A ordem é 1 (esquerda) → 2 (direita) → 3 (esquerda) → 4 (direita). A tecla Esc encerra o drill."
  },
  {
    q: "Como funcionam os pontos e o combo?",
    a: "Cada escada completa vale 100 pontos vezes o multiplicador de combo. O multiplicador sobe com a sequência: 1,1x a partir de 3 escadas seguidas, 1,25x a partir de 5, 1,5x a partir de 10, 2,0x a partir de 20 e no máximo 3,0x a partir de 50."
  },
  {
    q: "O que muda quando o nível sobe?",
    a: "O nível sobe 1 a cada 250 pontos, e cada 4 escadas seguidas dão um nível bônus. As escadas descem a 150 px/s no início, a 750 px/s no nível 15 e cada vez mais rápido depois disso. A área de acerto dos degraus encolhe de 18 px para 10 px."
  },
  {
    q: "O que acontece se eu perder um degrau?",
    a: "Se uma escada chega à borda de baixo da tela antes de os 4 degraus serem pisados, o combo volta a 0, a tela pisca em vermelho e treme. Nenhum ponto ou segundo é descontado."
  },
  {
    q: "Isso substitui o treino com escada de agilidade de verdade?",
    a: "Não. O jogo só transfere a ordem esquerda-direita de um exercício de escada para o mouse. Ele não mede nem promete melhora de passada, condicionamento ou velocidade dos pés."
  },
  {
    q: "Como a nota final é calculada?",
    a: "A nota depende só da pontuação final: S+ a partir de 15.343, S a partir de 12.283, A a partir de 9.563, B a partir de 6.120, C a partir de 3.443, D a partir de 1.530 e F abaixo disso. São faixas de prática do SkillDrills, não uma comparação com outros jogadores."
  },
  {
    q: "Onde ficam salvos meus resultados?",
    a: "Melhor pontuação, melhor combo e nível máximo ficam só no localStorage do seu navegador e não são enviados a nenhum servidor. É grátis, sem cadastro e sem instalação."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-10",
  "mainEntity": FAQS.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const STEPS = [
  "Clique em Iniciar; depois da contagem (3-2-1) a rodada começa (no computador o cursor fica travado na tela).",
  "Leve a mira até o primeiro degrau da escada que desce (esquerda, contorno verde).",
  "Passe pelos degraus 2 (direita), 3 (esquerda) e 4 (direita) no mesmo ritmo para completar a escada.",
  "Durante 45 segundos, não deixe nenhuma escada passar e aumente o multiplicador de combo."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como jogar a Escada de Agilidade com o Mouse",
  "description": "Passe o cursor pelos 4 degraus de cada escada na ordem esquerda-direita-esquerda-direita.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Passo ${i + 1}`, "text": text }))
};

const ladderGuide = {
  heading: "Escada de Agilidade com o Mouse: como funciona",
  intro: [
    "A Escada de Agilidade com o Mouse leva a sequência esquerda-direita-esquerda-direita de uma escada de agilidade para o cursor. Escadas descem pela tela e você passa a mira pelos 4 degraus em ordem fixa. Não há clique: só o movimento do mouse conta.",
    "A rodada dura 45 segundos. Cada escada completa vale 100 pontos vezes o multiplicador de combo (até 3,0x). A cada 250 pontos o nível sobe: as escadas descem mais rápido e a área de acerto dos degraus fica menor.",
    "Sequências rápidas de movimento ficam mais estáveis quando os quatro passos são executados como um pacote planejado, e não um por um (Lashley, 1951; Schmidt, 1975). O jogo pratica essa ordem e esse ritmo com a mão; não treina passada nem condicionamento físico."
  ],
  benchmarks: {
    title: "Faixas de nota (faixas de prática do SkillDrills)",
    headers: ["Nota", "Pontuação final"],
    rows: [
      ["S+", "a partir de 15.343"],
      ["S", "12.283 – 15.342"],
      ["A", "9.563 – 12.282"],
      ["B", "6.120 – 9.562"],
      ["C", "3.443 – 6.119"],
      ["D", "1.530 – 3.442"],
      ["F", "abaixo de 1.530"]
    ],
    note: "Faixas de prática do SkillDrills calculadas pela fórmula de nota do jogo; não são estatística comparativa nem percentis."
  },
  techniques: {
    title: "Dicas para fazer mais pontos",
    items: [
      { name: "Quatro degraus num só movimento", desc: "Quem olha e reage a cada degrau chega atrasado. Faça o zigue-zague esquerda-direita-esquerda-direita como um único movimento contínuo.", tips: "Não pare entre os degraus." },
      { name: "Mire um pouco abaixo", desc: "A escada desce o tempo todo. Mire um pouco abaixo da posição atual do degrau para cair na área de acerto.", tips: "Quanto maior a velocidade, mais à frente você precisa planejar." },
      { name: "Olhar no centro", desc: "Os degraus aparecem à esquerda e à direita do eixo central. Com o olhar no meio você enxerga os dois lados.", tips: "A partir do nível 4 as escadas se deslocam um pouco para os lados." }
    ]
  },
  steps: STEPS,
  audience: "Quem procura um jogo curto de ritmo e sequência com o mouse ou quer praticar o vaivém rápido do cursor entre esquerda e direita.",
  faqs: FAQS,
  sources: pickSources('lashley1951', 'schmidt1975', 'fitts1954')
};

export default function AgilityLadderPagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <MotorSequencingClient
        copy={{
          title: "Escada de Agilidade com o Mouse",
          hudLabels: { score: "Pontos", timeLeft: "Tempo restante", bestScore: "Recorde", bestCombo: "Melhor combo" },
          rulesTitle: "Regras do jogo",
          rules: [
            { title: "4 degraus em ordem", text: "Passe a mira pelos degraus de cada escada na ordem 1 (esquerda) → 2 (direita) → 3 (esquerda) → 4 (direita). Não precisa clicar." },
            { title: "Multiplicador de combo", text: "Escadas seguidas aumentam o multiplicador até no máximo 3,0x. Cada escada vale 100 pontos vezes o multiplicador." },
            { title: "Subida de nível", text: "A cada 250 pontos o nível sobe: as escadas descem mais rápido e a área de acerto diminui." },
            { title: "Escada perdida", text: "Se uma escada incompleta chega à borda de baixo, o combo zera. Pontos e tempo não são descontados." }
          ],
          aboutTitle: "Sobre a Escada de Agilidade com o Mouse",
          aboutHeading: "Ordem e ritmo com o mouse",
          aboutText: "A Escada de Agilidade com o Mouse transforma a sequência esquerda-direita de uma escada de agilidade num drill de 45 segundos com o cursor. Cada escada que desce é completada quando você passa a mira pelos 4 degraus em ordem; conforme a pontuação sobe, a velocidade vai de 150 px/s a 750 px/s no nível 15 e continua aumentando depois. É um jogo de ritmo e sequência com a mão e não mede melhora de passada ou condicionamento físico."
        }}
      />
      <DrillGuide guide={ladderGuide} />
      <RelatedDrills />
    </>
  );
}
