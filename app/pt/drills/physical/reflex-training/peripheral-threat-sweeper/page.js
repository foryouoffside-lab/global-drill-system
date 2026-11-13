import PeripheralThreatSweeperClient from '@/app/drills/physical/reflex-training/peripheral-threat-sweeper/PeripheralThreatSweeperClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

const url = 'https://skilldrills.online/pt/drills/physical/reflex-training/peripheral-threat-sweeper';
const title = "Defesa Radial: Treino de Visão Periférica | SkillDrills";
const description = "Defesa Radial: olhe para o núcleo central e clique nas ameaças das bordas antes que cheguem. +2 s por acerto, -1 s por erro. Grátis.";

export const metadata = {
  title,
  description,
  keywords: [
    "Defesa Radial",
    "visão periférica no jogo",
    "ameaças vindo das bordas",
    "jogo de visão periférica",
    "Peripheral Threat Sweeper"
  ],
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical/reflex-training/peripheral-threat-sweeper'),
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
    { "@type": "ListItem", "position": 3, "name": "Defesa Radial", "item": url }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Defesa Radial (Peripheral Threat Sweeper)",
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
  "name": "Defesa Radial (app web)",
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
  "name": "Defesa Radial (Peripheral Threat Sweeper)",
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
    q: "O que eu faço na Defesa Radial?",
    a: "Você olha para o núcleo no centro da tela e clica nas ameaças que vêm das bordas em direção a ele, antes que cheguem. É um jeito de praticar perceber movimentos ao redor sem mover os olhos. É um jogo de navegador."
  },
  {
    q: "Qual a diferença entre visão central e visão periférica?",
    a: "A visão central enxerga letras e detalhes numa área pequena em volta do ponto para onde você olha; a periférica percebe, fora dessa área, principalmente movimento e mudanças maiores. O jogo pede que você mantenha o olhar no centro e reaja às ameaças que vêm das bordas."
  },
  {
    q: "Posso mexer os olhos?",
    a: "A ideia é continuar olhando para o núcleo e só perceber as bordas. Se você segue as ameaças com os olhos, está praticando outra coisa. O navegador não consegue registrar para onde você olha, então isso depende de você."
  },
  {
    q: "Como são calculados pontos e tempo?",
    a: "Cada acerto vale 100 pontos com multiplicador de combo e de nível e dá +2 segundos, até no máximo 60 segundos. A partida começa com 45 segundos e o multiplicador vai até 3,0x. Se uma ameaça chega ao núcleo ou você clica no vazio, o combo volta para 1,0x e você perde 1 segundo. Essa penalidade vale sempre e não pode ser desligada."
  },
  {
    q: "Como a dificuldade aumenta?",
    a: "Conforme a pontuação sobe, as ameaças ficam mais rápidas, de cerca de 80 até 520 px/s, e o intervalo entre novas ameaças cai de cerca de 1,4 para no mínimo 0,20 segundo. Mais adiante aparecem ameaças mais rápidas e outras que vêm oscilando de lado."
  },
  {
    q: "O que é visão de túnel?",
    a: "Sob estresse ou muito concentrado num ponto, a gente tende a perceber menos o que está em volta; isso costuma ser chamado de visão de túnel. Este jogo pratica manter o centro em foco sem perder as bordas."
  },
  {
    q: "Este treino aumenta meu campo de visão?",
    a: "Não podemos prometer isso. Quem pratica uma tarefa costuma melhorar naquela tarefa, mas o efeito deste jogo não foi estudado. Use-o para comparar seus próprios resultados."
  },
  {
    q: "Tamanho e distância da tela fazem diferença?",
    a: "Quanto maior e mais perto a tela, mais para fora do seu campo de visão as ameaças aparecem. Compare resultados sempre com a mesma distância e postura. Taxa de atualização e atraso de entrada também podem influenciar (Woods et al., 2015)."
  },
  {
    q: "Onde ficam salvos meus resultados?",
    a: "Pontuação, precisão e melhor combo ficam no armazenamento local do seu navegador e este drill não os envia para nenhum servidor. Se você apagar os dados do navegador, eles somem. Veja os detalhes na política de privacidade."
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
  "name": "Como jogar Defesa Radial",
  "description": "Olhar no centro e interceptar as ameaças das bordas, em quatro passos.",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Olhe para o centro", "text": "Olhe para o núcleo no centro da tela e evite mexer os olhos." },
    { "@type": "HowToStep", "position": 2, "name": "Perceba as bordas", "text": "Note as ameaças que vêm das bordas sem tirar o olhar do centro." },
    { "@type": "HowToStep", "position": 3, "name": "Clique antes do núcleo", "text": "Clique na ameaça antes que ela chegue ao núcleo." },
    { "@type": "HowToStep", "position": 4, "name": "Mantenha o combo", "text": "Continue acertando sem erros para somar +2 segundos e o multiplicador de combo." }
  ].map((st) => ({ ...st, url: `${url}#step-${st.position}` }))
};

const guideProps = {
  heading: "Guia da Defesa Radial",
  intro: [
    "Defesa Radial é um jogo grátis de navegador para treinar a atenção à visão periférica dentro do jogo: você olha para o núcleo no centro e clica nas ameaças que vêm das bordas antes que cheguem nele. Cada acerto dá +2 segundos; cada erro ou ameaça no núcleo tira 1 segundo.",
    "Pesquisas mostram que dá para deslocar a atenção sem mover os olhos (Posner, 1980). Alvos em movimento e de alto contraste chamam atenção rápido mesmo nas bordas (Treisman & Gelade, 1980). O jogo transforma isso numa tarefa de clique.",
    "No começo as ameaças surgem a cada 1,4 segundo, mais ou menos; com a pontuação elas ficam mais rápidas (até 520 px/s) e mais frequentes (até 0,20 segundo de intervalo). Para clicar, ajuda fazer um movimento grande e uma pequena correção final (Woodworth, 1899; Fitts, 1954).",
    "Os resultados são registros de treino."
  ],
  benchmarks: {
    title: "Faixas de pontuação (referência)",
    headers: ["Faixa", "Pontos", "Foco do treino"],
    rows: [
      ["1", "menos de 6.000", "Manter o olhar no centro"],
      ["2", "6.000 – 10.999", "Interceptar antes do núcleo"],
      ["3", "11.000 – 16.999", "Manter o combo sem interrupção"],
      ["4", "17.000 – 23.999", "Não olhar direto nem com ameaças rápidas"],
      ["5", "24.000 ou mais", "Resolver várias ameaças em sequência"]
    ],
    note: "Estas faixas são níveis de treino da SkillDrills. Não são estatísticas de usuários nem percentis."
  },
  techniques: {
    title: "4 dicas para pontuar mais",
    items: [
      {
        name: "Olhar fixo no centro",
        desc: "Olhar para o núcleo sem mexer os olhos é o centro do exercício. Seguir as ameaças com os olhos é praticar outra coisa.",
        tips: "Se os olhos escapam, crie o hábito primeiro nos níveis baixos."
      },
      {
        name: "Ver a tela inteira de forma suave",
        desc: "Não se concentre numa direção; perceba a tela toda de uma vez, de forma relaxada. Assim o movimento chama atenção antes.",
        tips: "Relaxe os olhos e deixe o foco suave."
      },
      {
        name: "Movimento grande, ajuste fino",
        desc: "Sabendo a posição, leve o cursor de uma vez para perto e só desacelere no final.",
        tips: "Cliques afobados perto do núcleo custam o combo e 1 segundo."
      },
      {
        name: "Partidas curtas, com pausas",
        desc: "Olhos cansados derrubam a concentração. Jogue partidas curtas e desvie o olhar da tela entre elas.",
        tips: "Pare se sentir dor ou tontura."
      }
    ]
  },
  steps: [
    "Sente-se confortável e olhe para o núcleo no centro da tela.",
    "Perceba as ameaças vindo das bordas sem mexer os olhos.",
    "Clique na ameaça antes que ela chegue ao núcleo.",
    "Some +2 segundos por acerto e mantenha o combo para subir a pontuação."
  ],
  audience: "Quem quer praticar de forma leve a reação a movimentos nas bordas da tela, e gamers que querem testar manter o olhar no centro sem perder o que acontece em volta.",
  faqs,
  sources: pickSources('posner1980', 'treisman1980', 'woodworth1899', 'fitts1954', 'woods2015')
};

export default function PeripheralThreatSweeperPtPage() {
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
      <PeripheralThreatSweeperClient
        copy={{
          title: "Defesa Radial",
          subtitle: "Olhar no centro, ameaças vindo das bordas",
          hudLabels: {
            score: "Pontos",
            time: "Tempo",
            bestScore: "Recorde",
            bestCombo: "Melhor combo",
            accuracy: "Precisão",
            sweeps: "Acertos",
            breaches: "No núcleo",
            peakLevel: "Nível",
            getReady: "PREPARE-SE"
          },
          rulesTitle: "Regras e pontuação",
          rulesItems: [
            { title: "Intercepte e ganhe tempo", text: "Clique nas ameaças que vêm das bordas para ganhar 100 pontos (com multiplicador de combo e nível) e +2 segundos (máximo de 60 segundos)." },
            { title: "Multiplicador de combo", text: "Acertos seguidos sem erro elevam o multiplicador até 3,0x." },
            { title: "Dificuldade crescente", text: "Com a pontuação, as ameaças ficam mais rápidas (até 520 px/s) e mais frequentes (até 0,20 s de intervalo)." },
            { title: "Núcleo atingido e cliques errados", text: "Se uma ameaça chega ao núcleo ou você clica no vazio, o combo volta para 1,0x e você perde 1 segundo." }
          ],
          aboutTitle: "Sobre a Defesa Radial",
          aboutSections: [
            {
              title: "Mover a atenção sem mover os olhos",
              subtitle: "Posner (1980): atenção espacial",
              content: "Dá para levar a atenção a outro ponto sem mexer os olhos. Aqui o olhar fica no núcleo enquanto você percebe as ameaças nas bordas."
            },
            {
              title: "Alvos em movimento chamam atenção",
              subtitle: "Treisman (1980): busca visual",
              content: "Alvos de alto contraste e em movimento se destacam rápido mesmo nas bordas. Quem observa a tela toda de forma relaxada percebe novas ameaças antes."
            },
            {
              title: "Movimento grande, ajuste fino",
              subtitle: "Woodworth (1899) e Fitts (1954)",
              content: "Apontar rápido combina um movimento grande com uma pequena correção final. Perto do núcleo, desacelere e clique com precisão."
            },
            {
              title: "Várias ameaças ao mesmo tempo",
              subtitle: "Intervalos menores mais adiante",
              content: "Mais adiante as ameaças chegam em sequência e a atenção precisa ser dividida. Mantenha o olhar no centro e resolva primeiro as mais próximas do núcleo."
            }
          ]
        }}
      />
      <DrillGuide {...guideProps} />
      <RelatedDrills currentCategory="physical" currentHref="/drills/physical/reflex-training/peripheral-threat-sweeper" />
    </>
  );
}
