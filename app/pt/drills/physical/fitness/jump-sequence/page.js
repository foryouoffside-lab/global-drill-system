import JumpSequenceClient from '@/app/drills/physical/fitness/jump-sequence/JumpSequenceClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// SEO (2026-11-10, docs/seo/research/physical-2026-11/pt.md)
// Primary: Jogo de Salto com o Mouse (no-demand descriptive).
// Deleted the dead base title and Object.assign override claiming Salto
// Vertical / Pliométrico: this is a charge-release-steer mouse game.
// "jogo de pular" = platformer intent; one body mention only (coordinator).
// ============================================================

const TITLE = 'Jogo de Salto com o Mouse: Carregue e Acerte | SkillDrills';
const DESCRIPTION = 'Jogo de salto com o mouse grátis: segure o botão para carregar, solte para pular e guie o salto no ar até um alvo em movimento. Rodadas de 45 segundos.';
const URL = 'https://skilldrills.online/pt/drills/physical/fitness/jump-sequence';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['jogo de salto com o mouse', 'jogo de salto online', 'carregar e soltar o salto', 'jogo de timing com o mouse', 'jogo de navegador grátis'],
  alternates: {
    canonical: URL,
    languages: getAlternateLanguages('/drills/physical/fitness/jump-sequence'),
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
    { "@type": "ListItem", "position": 3, "name": "Jogo de Salto com o Mouse", "item": URL }
  ]
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Jogo de Salto com o Mouse",
  "description": "Jogo grátis de 45 segundos no navegador: carregue, solte para pular e guie o salto no ar até um alvo em movimento.",
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
    q: "O que é o Jogo de Salto com o Mouse?",
    a: "É um jogo grátis no navegador: você carrega o ponto no chão (seu personagem), solta para ele pular e o guia no ar até um alvo que se move pela tela. Cada rodada dura 45 segundos."
  },
  {
    q: "Como se joga?",
    a: "Coloque a mira sobre o personagem no chão e segure o botão do mouse: o salto vai carregando (fica cheio em cerca de 1 segundo). Ao soltar, o personagem pula na vertical; no ar, ele segue a posição horizontal do mouse. A tecla Esc encerra o drill."
  },
  {
    q: "Como funcionam os pontos e o combo?",
    a: "Se o personagem encosta no alvo durante o salto, conta como acerto. No nível 1 um acerto vale 5 pontos-base, que aumentam com o nível, multiplicados pelo combo da sequência de acertos (máximo de 3,0x a partir de 50 acertos seguidos)."
  },
  {
    q: "O que muda quando o nível sobe?",
    a: "O nível sobe 1 a cada 250 pontos, e cada 4 acertos seguidos dão um nível bônus. O alvo começa a 120 px/s, chega a cerca de 800 px/s no nível 15 (até 900 px/s com uma sequência longa) e fica cada vez mais rápido depois. O raio dele encolhe de 35 px para 12 px."
  },
  {
    q: "O que acontece se eu errar o alvo?",
    a: "Se o personagem cai no chão sem tocar o alvo, a sequência e o combo zeram e a tela pisca em vermelho. Pontos e tempo restante são mantidos, e um novo alvo aparece."
  },
  {
    q: "O jogo serve como treino de salto de verdade?",
    a: "Não. É um jogo de timing em que você controla com o mouse quanto tempo carrega e para onde vai no ar. Ele não mede nem treina altura de salto ou força nas pernas e não promete nenhum efeito de treino físico."
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
  "Clique em Iniciar e, depois da contagem (3-2-1), coloque a mira sobre o personagem no chão.",
  "Calcule a altura do alvo, segure o botão do mouse para carregar e solte.",
  "No ar, mova o mouse para a esquerda ou para a direita e leve o personagem até onde o alvo vai passar.",
  "Durante 45 segundos, emende acertos para aumentar o multiplicador de combo."
];

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como jogar o Jogo de Salto com o Mouse",
  "description": "Carregue, solte para pular e guie o salto no ar até um alvo em movimento.",
  "step": STEPS.map((text, i) => ({ "@type": "HowToStep", "position": i + 1, "name": `Passo ${i + 1}`, "text": text }))
};

const jumpGuide = {
  heading: "Jogo de Salto com o Mouse: como funciona",
  intro: [
    "No Jogo de Salto com o Mouse, duas coisas decidem cada tentativa: quanto tempo você carrega e para onde guia o salto no ar. Quanto mais tempo o botão fica pressionado, mais alto o pulo; no ar, o personagem segue a posição horizontal do mouse. O alvo atravessa a tela e quica nas bordas.",
    "A rodada dura 45 segundos. Cada acerto dá pontos e aumenta a sequência; com o nível, o alvo fica mais rápido e menor. Quem cai sem acertar perde só o combo, não pontos nem tempo. Não é um jogo de pular obstáculos de plataforma: aqui o desafio é acertar o momento e a direção do salto.",
    "Para acertar um alvo em movimento é preciso prever o ponto de encontro, e não mirar a posição atual (Lee, 1976). Esse tipo de movimento tem uma parte principal planejada e uma correção no final (Woodworth, 1899). O jogo pratica esse timing com o mouse e não tem relação com saltos de verdade."
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
      { name: "Carregue só o necessário", desc: "Quem sempre carrega tudo pula por cima do alvo. Solte o botão na carga que corresponde à altura do alvo.", tips: "Compare a barra de carga com a altura do alvo." },
      { name: "Guie antecipando", desc: "Não persiga o alvo; leve o mouse até onde ele vai passar. O personagem vai se aproximando aos poucos da posição do mouse.", tips: "Conte com os quiques nas bordas." },
      { name: "Volte logo depois de cair", desc: "Depois de um acerto ou erro aparece um novo alvo. Coloque a mira de novo sobre o personagem e carregue em seguida.", tips: "Menos tempo parado significa sequências mais longas." }
    ]
  },
  steps: STEPS,
  audience: "Quem procura um jogo de timing curto com o mouse ou quer praticar a previsão de alvos em movimento.",
  faqs: FAQS,
  sources: pickSources('lee1976', 'woodworth1899', 'kawato1999', 'fitts1954')
};

export default function JumpSequencePagePt() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <JumpSequenceClient
        copy={{
          title: "Jogo de Salto com o Mouse",
          hudLabels: { score: "Pontos", timeLeft: "Tempo restante", bestScore: "Recorde", bestCombo: "Melhor combo" },
          rulesTitle: "Regras do jogo",
          rules: [
            { title: "Carregar e pular", text: "Coloque a mira sobre o personagem e segure o botão do mouse para carregar; solte para pular na vertical." },
            { title: "Guiar no ar", text: "No ar, mova o mouse para a esquerda ou para a direita; o personagem vai até lá e segue em direção ao alvo." },
            { title: "Multiplicador de combo", text: "Acertos seguidos aumentam o multiplicador até no máximo 3,0x." },
            { title: "Erro zera o combo", text: "Se cair sem acertar, o combo zera. Pontos e tempo são mantidos." }
          ],
          aboutTitle: "Sobre o Jogo de Salto com o Mouse"
        }}
      />
      <DrillGuide guide={jumpGuide} />
      <RelatedDrills />
    </>
  );
}
