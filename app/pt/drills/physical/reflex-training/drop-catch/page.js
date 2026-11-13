import DropCatchClient from '@/app/drills/physical/reflex-training/drop-catch/DropCatchClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/reflex-training/drop-catch';
const title = "Pegar Alvos em Queda: Evite as Iscas Vermelhas | SkillDrills";
const description = "Pegar alvos em queda no navegador: clique só nos verdes e deixe as iscas vermelhas passarem. +2 s por acerto, -1 s por erro. Jogo grátis, sem cadastro.";

export const metadata = {
  title,
  description,
  keywords: [
    "pegar alvos em queda",
    "jogo de pegar objetos caindo",
    "ignorar iscas vermelhas",
    "clicar nos alvos verdes",
    "Drop Catch"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/drop-catch'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title,
    description,
    url,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills Início", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Centro de Treino Físico", "item": "https://skilldrills.online/pt/drills/physical" },
    { "@type": "ListItem", "position": 3, "name": "Pegar Alvos em Queda", "item": url }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Drop Catch – Pegar Alvos em Queda",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  description,
  url,
  "publisher": { "@type": "Organization", "name": "SkillDrills", "url": "https://skilldrills.online/pt" },
  "inLanguage": "pt",
  "dateModified": "2026-11-10"
};

const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Drop Catch – Pegar Alvos em Queda (app web)",
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "browserRequirements": "Navegador atual com HTML5 Canvas e entrada por ponteiro",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  url,
  "inLanguage": "pt",
  "dateModified": "2026-11-10"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Drop Catch – Pegar Alvos em Queda",
  url,
  description,
  "genre": ["Action Game", "Reflex Game"],
  "gamePlatform": ["Web Browser", "Desktop", "Mobile"],
  "applicationCategory": "Game",
  "inLanguage": "pt",
  "dateModified": "2026-11-10",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const faqs = [
  {
    q: "Como funciona o jogo de pegar alvos em queda?",
    a: "Alvos caem do alto da tela. Você clica só nos verdes e deixa as iscas vermelhas passarem sem clicar. Cada alvo verde vale 100 pontos (com multiplicador de combo e de nível) e +2 segundos, até no máximo 60 segundos. A partida começa com 45 segundos."
  },
  {
    q: "É o teste da régua da aula de educação física?",
    a: "Não. No teste da régua você segura uma régua de verdade e calcula o tempo de reação pela distância da queda. Este jogo não mede tempo de reação: você distingue as cores e clica só no verde, e o resultado é uma pontuação."
  },
  {
    q: "O que acontece quando eu erro?",
    a: "Se um alvo verde sai pela parte de baixo da tela, se você clica numa isca vermelha ou clica no vazio, o combo volta para 1,0x e você perde 1 segundo. Essa penalidade vale sempre e não pode ser desligada nas configurações."
  },
  {
    q: "O que muda quando o nível sobe?",
    a: "O nível sobe a cada 1.750 pontos, sem limite. A velocidade de queda vai de cerca de 400 para 1.250 px/s, o intervalo entre novos alvos cai de cerca de 0,8 para no mínimo 0,18 segundo, a proporção de iscas vermelhas sobe de 15% para até 45% e os alvos ficam menores."
  },
  {
    q: "Como evitar clicar nas iscas vermelhas?",
    a: "Primeiro confira a cor, depois clique. Um modelo descreve uma corrida entre o impulso de clicar e o de parar (Logan et al., 1984). Deixar uma isca vermelha passar não custa nada, então na dúvida não clique."
  },
  {
    q: "Para onde devo olhar?",
    a: "Em vez de fixar um ponto no topo, olhe de forma ampla o terço superior e o meio da tela. Deixar o cursor já embaixo da trajetória encurta o movimento. O que funciona melhor varia de pessoa para pessoa; teste e compare."
  },
  {
    q: "A taxa de atualização do monitor faz diferença?",
    a: "Com taxa maior, um alvo rápido anda menos por quadro e o atraso de entrada tende a cair (Woods et al., 2015). Não medimos quanto isso muda a pontuação neste jogo, então compare resultados no mesmo equipamento."
  },
  {
    q: "Onde ficam salvos meus resultados?",
    a: "Pontuação e melhor combo ficam no armazenamento local do seu navegador e este drill não os envia para nenhum servidor. Se você apagar os dados do navegador, eles somem. Veja os detalhes na política de privacidade."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como jogar Pegar Alvos em Queda",
  "description": "Pegue o verde, deixe o vermelho passar – em quatro passos.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Confira a cor primeiro", "text": "Quando um alvo aparecer, confira primeiro se é verde ou vermelho." },
    { "@type": "HowToStep", "position": 2, "name": "Não clique no vermelho", "text": "Deixe as iscas vermelhas caírem sem clicar." },
    { "@type": "HowToStep", "position": 3, "name": "Espere embaixo da trajetória", "text": "Se for verde, posicione o cursor embaixo da trajetória e clique quando o alvo passar." },
    { "@type": "HowToStep", "position": 4, "name": "Mantenha o combo", "text": "Continue acertando sem erros para somar +2 segundos e o multiplicador de combo." }
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` }))
};

const dropGuide = {
  heading: "Guia: Pegar Alvos em Queda",
  intro: [
    "Drop Catch é um jogo grátis de pegar alvos em queda no navegador: alvos caem do alto da tela, você clica só nos verdes e deixa as iscas vermelhas passarem. Cada acerto dá +2 segundos; cada erro tira 1 segundo.",
    "Quando é preciso distinguir estímulos antes de responder, a resposta costuma demorar mais do que uma reação simples (Donders, 1868). Um modelo também descreve uma corrida entre o impulso de clicar e o de parar (Logan et al., 1984). O jogo transforma as duas coisas em desafio.",
    "Como as pessoas estimam o tempo até um objeto chegar foi estudado por Lee (1976). A velocidade de queda sobe com o nível, de cerca de 400 para 1.250 px/s; quanto mais você demora para decidir, mais difícil fica.",
    "A pontuação é um registro de treino. Compare resultados no mesmo equipamento e monitor."
  ],
  benchmarks: {
    title: "Faixas de pontuação (referência)",
    headers: ["Faixa", "Pontos", "Precisão", "Foco do treino"],
    rows: [
      ["1", "menos de 6.000", "menos de 70%", "Não clicar nas iscas vermelhas"],
      ["2", "6.000 – 10.999", "70 – 81%", "Conferir a cor antes de clicar"],
      ["3", "11.000 – 16.999", "82 – 89%", "Manter o combo sem interrupção"],
      ["4", "17.000 – 23.999", "90 – 94%", "Deixar iscas passarem mesmo em alta velocidade"],
      ["5", "24.000 ou mais", "95% ou mais", "Usar o bônus de +2 s para partidas longas"]
    ],
    note: "Estas faixas são níveis de treino da SkillDrills. Não são estatísticas de usuários, percentis nem padrão de jogadores profissionais."
  },
  techniques: {
    title: "4 dicas para pontuar mais",
    items: [
      {
        name: "Olhar amplo, cor primeiro",
        desc: "Não fixe um único ponto; acompanhe o terço superior e o meio da tela. Quando um alvo surgir, confira a cor primeiro.",
        tips: "Só prepare o clique depois de ter certeza da cor."
      },
      {
        name: "Deixe o vermelho passar",
        desc: "Uma isca vermelha que cai sem clique não custa nada. Clicar nela zera o combo e tira 1 segundo; na dúvida, não clique.",
        tips: "Quando as iscas aumentarem, priorize a precisão."
      },
      {
        name: "Espere embaixo da trajetória",
        desc: "Em vez de perseguir o alvo, coloque o cursor antes embaixo da linha de queda. O movimento fica mais curto.",
        tips: "Pegar no meio da tela dá mais margem."
      },
      {
        name: "Pegada relaxada",
        desc: "Para subir e descer rápido, relaxe a mão e faça os ajustes finos com dedos e punho.",
        tips: "Se cansar, pare e compare sempre no mesmo equipamento."
      }
    ]
  },
  steps: [
    "Deixe o cursor no centro e acompanhe o terço superior e o meio da tela.",
    "Quando um alvo cair, confira primeiro: verde ou vermelho?",
    "Clique nos verdes e deixe as iscas vermelhas passarem.",
    "Some +2 segundos por acerto e mantenha o combo para subir a pontuação."
  ],
  audience: "Quem procura um jogo de pegar objetos caindo com escolha de cores, e gamers que querem praticar reação de escolha e controle de impulso de forma leve.",
  faqs,
  sources: pickSources('donders1868', 'lee1976', 'logan1984', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function LocalizedDropCatchPagePt() {
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
      <DropCatchClient
        copy={{
          title: "Pegar Alvos em Queda",
          subtitle: "Clique no verde, deixe o vermelho passar",
          hudLabels: {
            score: "Pontos",
            time: "Tempo",
            bestScore: "Recorde",
            bestCombo: "Melhor combo"
          },
          rulesTitle: "Regras e pontuação",
          rulesItems: [
            { title: "Pegue os verdes e ganhe tempo", text: "Clique nos alvos verdes que caem para ganhar 100 pontos (com multiplicador de combo e nível) e +2 segundos (máximo de 60 segundos)." },
            { title: "Multiplicador de combo", text: "Acertos seguidos sem erro elevam o multiplicador até 3,0x." },
            { title: "Dificuldade crescente", text: "O nível sobe a cada 1.750 pontos. A velocidade de queda (até 1.250 px/s) e a proporção de iscas (até 45%) aumentam." },
            { title: "Erros e perda de tempo", text: "Deixar um verde escapar, clicar numa isca vermelha ou clicar no vazio zera o combo e tira 1 segundo." }
          ],
          aboutTitle: "Sobre o Drop Catch",
          aboutSections: [
            {
              title: "O tempo dos alvos em queda",
              subtitle: "Lee (1976): tempo até o contato",
              content: "A velocidade de queda sobe com o nível. A pesquisa de Lee sobre como estimamos o tempo até um objeto chegar ajuda a pensar no momento do clique."
            },
            {
              title: "Clicar ou parar",
              subtitle: "Logan (1984): modelo do sinal de parada",
              content: "Diante de uma isca vermelha, o impulso de clicar e o de parar competem. O jogo treina não clicar nas iscas."
            },
            {
              title: "Reação de escolha",
              subtitle: "Donders (1868): pesquisa sobre tempo de reação",
              content: "Quando é preciso distinguir estímulos, a resposta costuma levar mais tempo do que uma reação simples. Aqui você clica só no verde."
            },
            {
              title: "Movimento grande, ajuste fino",
              subtitle: "Woodworth (1899) e Fitts (1954)",
              content: "Apontar rápido combina um movimento grande com uma pequena correção final. Leve o cursor para baixo da trajetória e desacelere para clicar."
            }
          ]
        }}
      />
      <DrillGuide {...dropGuide} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/drop-catch" />
    </>
  );
}
