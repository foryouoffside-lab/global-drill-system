import DistractionFighterClient from '@/app/drills/cognitive/focus/distraction-fighter/DistractionFighterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Teste de Stroop | Atenção Seletiva | SkillDrills",
  description: "Teste de Stroop online grátis: escolha a cor da tinta, não a palavra, sinta o efeito Stroop e pratique atenção seletiva. Exercício, não diagnóstico clínico.",
  keywords: [
    "teste de stroop",
    "teste de stroop online",
    "teste de stroop o que avalia",
    "teste de stroop cores e palavras",
    "efeito stroop teste",
    "efeito stroop explicação",
    "atenção seletiva",
    "controle inibitório"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/cognitive/focus/distraction-fighter",
    languages: getAlternateLanguages('/drills/cognitive/focus/distraction-fighter')
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Teste de Stroop | Atenção Seletiva | SkillDrills",
    description: "Teste de Stroop online grátis: escolha a cor da tinta, não a palavra, sinta o efeito Stroop e pratique atenção seletiva. Exercício, não diagnóstico clínico.",
    url: "https://skilldrills.online/pt/drills/cognitive/focus/distraction-fighter",
    siteName: "SkillDrills",
    locale: "pt_BR",
    type: "website"
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Teste de Stroop | Atenção Seletiva | SkillDrills",
    description: "Teste de Stroop online grátis: escolha a cor da tinta, não a palavra, sinta o efeito Stroop e pratique atenção seletiva. Exercício, não diagnóstico clínico."
  }
};

export default function DistractionFighterPagePT() {
  const sources = pickSources('stroop1935', 'macleod1991', 'logan1984', 'posner1990', 'woods2015');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinamento Cognitivo", "item": "https://skilldrills.online/pt/drills/cognitive" },
      { "@type": "ListItem", "position": 3, "name": "Teste de Stroop", "item": "https://skilldrills.online/pt/drills/cognitive/focus/distraction-fighter" }
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Stroop_effect", "https://en.wikipedia.org/wiki/Inhibitory_control"],
    "name": "Teste de Stroop Trainer",
    "dateModified": "2026-11-12",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Any",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
    "description": "Teste de Stroop online grátis: exercício cor-palavra em que você escolhe a cor da tinta em vez do significado da palavra."
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Teste de Stroop Online Interativo",
    "dateModified": "2026-11-12",
    "url": "https://skilldrills.online/pt/drills/cognitive/focus/distraction-fighter",
    "applicationCategory": "EducationalApplication",
    "browserRequirements": "Requires JavaScript. HTML5 Canvas compatible."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": "Desafio de Inibição Cognitiva de Stroop",
    "gamePlatform": "Web Browser",
    "dateModified": "2026-11-12",
    "genre": ["Brain Training", "Cognitive Drill", "Focus Training"]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como Realizar o Teste de Stroop Online",
    "description": "Como jogar uma rodada do teste de Stroop online.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Fixação no Estímulo Central",
        "text": "Observe o termo colorido que surge no centro da tela sem vocalizar mentalmente a palavra."
      },
      {
        "@type": "HowToStep",
        "name": "Supressão do Significado Semântico",
        "text": "Iniba o impulso automático de leitura do texto escrito e foque apenas na cor da fonte."
      },
      {
        "@type": "HowToStep",
        "name": "Seleção Motora Rápida",
        "text": "Clique no botão correspondente à cor da tinta antes que a janela temporal expire."
      },
      {
        "@type": "HowToStep",
        "name": "Manutenção da Sequência de Acertos",
        "text": "O relógio começa em 45 segundos: cada acerto soma 2 s (máx. 60 s), cada erro ou palavra expirada tira 1 s. A rodada termina no zero."
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O que é o efeito Stroop e por que ele ocorre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O efeito Stroop é o atraso no tempo de reação ao nomear a cor física de uma palavra quando ela denota uma cor incongruente. Ocorre porque a leitura é um processo altamente automatizado que compete com a identificação visual da cor."
        }
      },
      {
        "@type": "Question",
        "name": "Quais regiões do cérebro são ativadas durante este teste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A resolução do conflito cognitivo recruta principalmente o córtex cingulado anterior (ACC) e o córtex pré-frontal dorsolateral (DLPFC), núcleos essenciais para o controle executivo e a inibição de respostas."
        }
      },
      {
        "@type": "Question",
        "name": "Por que é mais difícil dizer a cor do que ler a palavra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A leitura é reforçada ao longo de anos e processada com velocidade superior no cérebro alfabetizado. A nomeação da cor exige um esforço consciente de controle atencional de cima para baixo (top-down)."
        }
      },
      {
        "@type": "Question",
        "name": "Como atletas e gamers de FPS se beneficiam do treino de Stroop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há evidência de efeito no desempenho esportivo ou nos jogos. O exercício apenas pratica ignorar uma informação enganosa sob pressão de tempo; use como complemento."
        }
      },
      {
        "@type": "Question",
        "name": "Qual é a duração recomendada para uma sessão de treino?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não há regra fixa. Alguns minutos por dia, com pausas, bastam para praticar sem cansar; nenhuma melhora é garantida."
        }
      },
      {
        "@type": "Question",
        "name": "O efeito Stroop desaparece com a prática frequente?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com a prática a interferência costuma diminuir um pouco, mas não desaparece em quem lê com fluência (MacLeod, 1991). Neste exercício, o progresso aparece sobretudo na pontuação e na precisão."
        }
      },
      {
        "@type": "Question",
        "name": "O que fazer para diminuir os erros sob alta pressão de tempo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Alguns jogadores olham para a borda de uma letra em vez da palavra inteira para lê-la menos; é uma dica prática, não um método comprovado. Priorize a precisão: cada erro custa 1 segundo."
        }
      },
      {
        "@type": "Question",
        "name": "Como a pontuação de precisão é calculada?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada acerto vale 100 pontos × multiplicador de combo (até 3x) × fator de nível e soma 2 segundos ao relógio (máx. 60 s). Um erro ou palavra expirada (opção Tempo-limite ativada, padrão) zera o combo e tira 1 segundo. A precisão é acertos ÷ (acertos + erros + expiradas). As palavras de cor aparecem por enquanto em inglês (RED, BLUE…)."
        }
      },
      {
        "@type": "Question",
        "name": "Pessoas com daltonismo podem realizar este teste?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pode ser difícil: o exercício usa vermelho, verde, laranja, amarelo, azul e roxo e não tem modo para daltonismo."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a relação entre o teste de Stroop e a produtividade no trabalho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não está comprovada. A pontuação costuma subir com a prática, mas a transferência para a concentração no trabalho é incerta. Use como um aquecimento curto."
        }
      }
    ]
  };

  const guide = {
    title: "Guia Científico do Teste de Stroop e Neurobiologia da Inibição",
    intro: [
      "O efeito Stroop, documentado originalmente por J. Ridley Stroop (1935), representa um dos fenômenos mais consolidados na psicologia cognitiva experimental. Quando confrontados com estímulos incongruentes (como a palavra 'VERDE' impressa em tinta vermelha), a resposta fica mais lenta e os erros aumentam.",
      "A base mecanicista decorre da velocidade assimétrica de processamento: a leitura semântica é uma rotina altamente automatizada no córtex cerebral adulto (MacLeod, 1991). A pesquisa sobre inibição descreve a interrupção de uma resposta automática como uma corrida (Logan & Cowan, 1984): no teste de Stroop, o erro acontece quando a leitura não é freada a tempo.",
      "Estudos de neuroimagem associam o córtex cingulado anterior (ACC) e o córtex pré-frontal dorsolateral (DLPFC) à resolução desse conflito (Posner & Petersen, 1990). Este exercício pratica a atenção seletiva sob pressão de tempo, sem medir atividade cerebral nem garantir melhora.",
      "Cronometragem: o exercício não mostra tempo de reação, e sim pontuação, precisão e nível alcançado. A janela de resposta de cada palavra é controlada pelos temporizadores do navegador, no seu dispositivo. Temporizadores em navegadores modernos utilizam atenuação contra ataques como Spectre (resolução aproximada de 1 ms), e a taxa de atualização da sua tela quantiza cada quadro: cerca de 16,7 ms a 60 Hz, 6,9 ms a 144 Hz e 4,1 ms a 240 Hz (Woods et al., 2015). Avalie seu progresso longitudinal no mesmo hardware em vez de comparar números isolados entre telas e periféricos heterogêneos.",
      "Transparência de dados e aviso educacional: o SkillDrills não coleta dados agregados nem envia seu histórico para servidores remotos. Todas as suas pontuações e preferências ficam salvas apenas no localStorage do seu próprio navegador. Esta aplicação é um jogo de treino cognitivo para fins educativos e recreativos, não sendo um instrumento médico nem teste de diagnóstico para TDAH ou outras condições neurológicas."
    ],
    benchmarks: {
      title: "Teste de Stroop: faixas de nota (pontos por rodada)",
      headers: ["Nota", "Pontos"],
      rows: [
        ["S+", "21.660 ou mais"],
        ["S", "17.340 – 21.659"],
        ["A", "13.500 – 17.339"],
        ["B", "8.640 – 13.499"],
        ["C", "4.860 – 8.639"],
        ["D", "2.160 – 4.859"],
        ["F", "menos de 2.160"]
      ],
      note: "Faixas de prática da SkillDrills, calculadas diretamente da fórmula de nota da tela final (fração de 24.000 pontos de referência); não são estatísticas de usuários nem normas. Cada acerto vale 100 pontos × combo (até 3x) × fator de nível."
    },
    techniques: {
      title: "4 Estratégias para Superar a Interferência de Stroop",
      items: [
        {
          name: "Foco periférico no contorno das letras",
          desc: "Evite ler a palavra inteira; concentre seu olhar na extremidade ou serifa de uma única letra para quebrar o processamento automático da leitura.",
          tips: "Trate o caractere como uma forma geométrica abstrata colorida."
        },
        {
          name: "Supressão da subvocalização interna",
          desc: "Falar o nome da cor na mente sobrecarrega a alça fonológica. Crie uma ponte direta entre a percepção visual do pigmento e a ação motora do toque.",
          tips: "Mantenha a respiração compassada e a musculatura facial relaxada."
        },
        {
          name: "Cadência rítmica e preservação do multiplicador",
          desc: "Cliques precipitados quebram combos cruciais. Um ritmo estável e seguro evita a perda de 1 segundo por erro.",
          tips: "Priorize a exatidão absoluta sobre a velocidade cega."
        },
        {
          name: "Sessões fracionadas de fortalecimento inibitório",
          desc: "O cansaço aumenta os erros. Práticas curtas diárias de 3 a 5 minutos são fáceis de manter.",
          tips: "Pode servir de aquecimento curto antes de estudar ou trabalhar."
        }
      ]
    },
    steps: [
      "Fixe o olhar no termo central sem tentar lê-lo linguisticamente.",
      "Iniba a compreensão semântica e isole a cor física da fonte.",
      "Selecione o botão inferior que corresponde à cor visual observada.",
      "Sustente acertos consecutivos: +2 s por acerto (máx. 60 s), -1 s por erro, até o relógio chegar a zero."
    ],
    audience: "Estudantes, profissionais em ambientes de trabalho integrados, gamers e quem quer sentir o efeito Stroop na prática.",
    faqs: faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
    sources
  };

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <DistractionFighterClient
        copy={{
          title: "Teste de Stroop",
          subtitle: "Teste de Stroop online: efeito Stroop e atenção seletiva",
          caption: "Nomeie a cor da fonte e ignore o significado da palavra. A interferência entre leitura automática e reconhecimento de cores avalia seu controle inibitório executivo (Stroop, 1935).",
          stageCaption: "Clique no botão com a cor da fonte e ignore a palavra escrita contraditória.",
          rulesTitle: "Instruções do Drill e Pontuação",
          aboutTitle: "Sobre o Teste de Stroop e o Controle Inibitório",
          aboutText: "O efeito Stroop descreve a lentidão ao nomear a cor da fonte de uma palavra quando o texto e a cor entram em conflito (Stroop, 1935; MacLeod, 1991).\n\nLer é um processo profundamente automatizado. O córtex pré-frontal precisa suprimir ativamente a leitura para permitir a percepção cromática pura.\n\nO exercício permite praticar esse conflito; não garante mais concentração no dia a dia.",
          aboutCards: [
            { title: "Para quem é indicado?", desc: "Profissionais que atuam em ambientes com distrações frequentes, estudantes e competidores de esports.", color: "bg-blue-600" },
            { title: "Habilidades Desenvolvidas", desc: "Resistência à interferência de Stroop, controle inibitório, foco seletivo e supressão de impulsos.", color: "bg-emerald-600" },
            { title: "Controle Inibitório", desc: "Suprima o impulso de leitura e isole a percepção cromática sob pressão de tempo crescente.", color: "bg-purple-600" }
          ],
          rulesItems: [
            { num: "1", text: "Palavra de cor (em inglês)", highlight: "escolha a tinta", result: "ignore a palavra" },
            { num: "2", text: "Acerto", highlight: "100 × combo × nível", result: "+2 s (máx. 60 s)" },
            { num: "3", text: "Erro / palavra expirada", highlight: "combo zerado", result: "-1 s" },
            { num: "4", text: "Nível maior", highlight: "janela mais curta", result: "6 cores a partir do nív. 4" }
          ]
        }}
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
      <DrillGuide guide={guide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
