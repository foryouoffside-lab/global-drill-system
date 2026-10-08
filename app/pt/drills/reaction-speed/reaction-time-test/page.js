import ReactionTimeTestWrapper from '@/app/drills/reaction-speed/reaction-time-test/ReactionTimeTestWrapperLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  "title": "Jogo de noção de tempo: acerte o tempo-alvo | SkillDrills",
  "description": "Jogo de noção de tempo: um tempo-alvo aparece e você clica quando ele passa. Não é um teste de reação: para isso, veja o Teste de reação (sinal luminoso).",
  "keywords": [
    "jogo de noção de tempo",
    "jogo de estimativa de tempo",
    "jogo de timing",
    "acertar o tempo-alvo",
    "relógio interno jogo",
    "treinar noção de tempo",
    "jogo parar o cronômetro",
    "praticar timing de clique"
  ],
  "alternates": {
    "canonical": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test",
    "languages": getAlternateLanguages('/drills/reaction-speed/reaction-time-test')
  },
  "openGraph": {
    "images": [
      {
        "url": "https://skilldrills.online/opengraph-image",
        "width": 1200,
        "height": 630
      }
    ],
    "title": "Jogo de noção de tempo: acerte o tempo-alvo | SkillDrills",
    "description": "Estime um tempo-alvo entre 1 e 8 segundos, clique no momento certo e veja seu erro em milissegundos.",
    "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test",
    "siteName": "SkillDrills",
    "locale": "pt_BR",
    "type": "website"
  },
  "twitter": {
    "images": [
      "https://skilldrills.online/opengraph-image"
    ],
    "card": "summary_large_image",
    "title": "Jogo de noção de tempo: acerte o tempo-alvo | SkillDrills",
    "description": "Jogo de estimativa de tempo: memorize o tempo-alvo, clique quando passar e veja seu desvio em milissegundos."
  },
  "robots": {
    "index": true,
    "follow": true
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills Início",
      "item": "https://skilldrills.online/pt"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Treinos",
      "item": "https://skilldrills.online/pt/drills"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Velocidade de Reação",
      "item": "https://skilldrills.online/pt/drills/reaction-speed"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Jogo de Noção de Tempo",
      "item": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "sameAs": [
    "https://en.wikipedia.org/wiki/Time_perception"
  ],
  "name": "Jogo de noção de tempo: acerte o tempo-alvo",
  "alternateName": [
    "Jogo de estimativa de tempo",
    "Jogo de parar o cronômetro",
    "Treino do relógio interno"
  ],
  "applicationCategory": "GameApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "description": "Jogo no navegador para estimar o tempo: um tempo-alvo aparece, você clica quando acha que ele passou e vê seu desvio em milissegundos."
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Jogo de noção de tempo: acerte o tempo-alvo | SkillDrills",
  "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test",
  "description": "Jogo online gratuito de estimativa de tempo. Mede o quão perto seu clique fica de um tempo-alvo e não mede a reação a um sinal.",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  },
  "author": {
    "@type": "Organization",
    "name": "SkillDrills",
    "url": "https://skilldrills.online"
  },
  "isAccessibleForFree": true,
  "learningResourceType": "Educational Game",
  "teaches": "Estimativa de tempo, timing de intervalos, regularidade no momento do clique"
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Jogo de noção de tempo: acerte o tempo-alvo",
  "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test",
  "description": "Jogo de timing: memorize um tempo-alvo entre 1 e 8 segundos e clique no momento certo.",
  "genre": [
    "Timing Game",
    "Casual"
  ],
  "gamePlatform": [
    "Web Browser",
    "Desktop",
    "Mobile"
  ],
  "applicationCategory": "Game",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "BRL"
  }
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como jogar o jogo de noção de tempo",
  "description": "Memorize o tempo-alvo, clique quando ele passar e veja seu erro em milissegundos.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Iniciar o drill",
      "text": "Clique ou toque em Iniciar Drill para entrar na arena em tela cheia.",
      "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Memorizar o tempo-alvo",
      "text": "Leia o tempo-alvo, entre um e oito segundos. Ele some depois de um instante.",
      "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Clicar quando o tempo passar",
      "text": "Clique ou toque quando achar que o tempo-alvo passou. Enquanto o relógio corre, não há leitura numérica.",
      "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Conferir seu erro",
      "text": "Jogue várias rodadas e compare seu erro médio e sua consistência.",
      "url": "https://skilldrills.online/pt/drills/reaction-speed/reaction-time-test#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-10-08",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Isto é um teste de reação?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. É um jogo de estimativa de tempo. Um tempo-alvo é mostrado, você clica quando acha que ele passou e o drill mostra seu desvio em milissegundos. Para medir a rapidez com que você reage a um sinal, use o Teste de reação (sinal luminoso)."
      }
    },
    {
      "@type": "Question",
      "name": "Como o jogo funciona?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um tempo-alvo aparece por um instante e some. Um orbe luminoso sem leitura numérica continua ativo enquanto o relógio conta ao fundo, e você clica quando acha que o tempo-alvo passou. Depois o drill mostra o momento exato do seu clique e o seu erro."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto duram os tempos-alvo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os alvos começam entre 1 e cerca de 2 segundos, e o limite superior sobe com o nível até o máximo de 8 segundos. O alvo é exibido com três casas decimais, por exemplo 3,250 s."
      }
    },
    {
      "@type": "Question",
      "name": "Como a pontuação é calculada?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seu erro é o momento do clique menos o tempo-alvo. O clique conta como acerto se o erro estiver dentro de 50 ms mais 5 % do alvo; para 3 segundos, são 200 ms. Quanto mais perto, mais pontos, erro abaixo de 10 ms recebe a nota EXACT e acertos consecutivos aumentam um multiplicador de combo de até 3,0x."
      }
    },
    {
      "@type": "Question",
      "name": "O que acontece se eu clicar cedo ou tarde demais?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os dois casos contam como erro. Um clique fora da janela permitida é um erro: reinicia o combo e mostra um alerta vermelho, mas a pontuação é mantida."
      }
    },
    {
      "@type": "Question",
      "name": "Posso contar de cabeça?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, contar é a sua própria estratégia. O orbe não tem leitura numérica e seus anéis pulsam uma vez por segundo, o que você pode usar como batida. Teste métodos diferentes e fique com o que der o menor erro médio."
      }
    },
    {
      "@type": "Question",
      "name": "A taxa de atualização ou o atraso de entrada afetam o resultado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Levemente. Os cliques são marcados com o relógio performance.now() do navegador, mas a tela mostra um novo quadro a cada 16,7 ms a 60 Hz, 6,9 ms a 144 Hz e 4,2 ms a 240 Hz, e os dispositivos de entrada somam atraso de leitura (Woods et al., 2015). Compare resultados no mesmo dispositivo."
      }
    },
    {
      "@type": "Question",
      "name": "A prática pode melhorar meu timing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A prática costuma melhorar o desempenho na tarefa treinada, então seu erro médio neste drill deve diminuir. Até onde isso se transfere para outras tarefas varia e não é garantido."
      }
    },
    {
      "@type": "Question",
      "name": "É o mesmo que o desafio dos 10 segundos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A ideia é parecida, julgar um intervalo sem relógio visível, mas o alvo muda a cada rodada e não é fixo em 10 segundos. O drill também pontua o tamanho do seu erro, em vez de apenas passar ou falhar."
      }
    },
    {
      "@type": "Question",
      "name": "É grátis e funciona no celular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sim, é grátis, sem cadastro nem download. Funciona no navegador do celular, mas a entrada por toque tem latência própria, então compare resultados apenas com outras tentativas no mesmo dispositivo."
      }
    }
  ]
};

const reactionGuide = {
  "heading": "Jogo de noção de tempo: como funciona o drill de estimativa",
  "intro": [
    "Este é um jogo de estimativa de tempo, não um teste de reação. Um tempo-alvo entre um e oito segundos aparece brevemente, some, e você clica quando acha que ele passou. O drill mostra a diferença entre o clique e o alvo em milissegundos. Para testar a rapidez com que você reage a um sinal visual, use o Teste de reação (sinal luminoso).",
    "Cada clique é marcado com o relógio performance.now() do navegador, inteiramente no seu dispositivo. A tela quantiza o que você vê pelo intervalo de atualização: cerca de 16,7 ms por quadro a 60 Hz, 6,9 ms a 144 Hz e 4,2 ms a 240 Hz (Woods et al., 2015). A leitura do mouse soma cerca de 8 ms a 125 Hz contra 1 ms a 1000 Hz.",
    "Trate diferenças menores que cerca de 5 ms como ruído de medição e compare suas próprias sessões no mesmo equipamento, não com o de outra pessoa. É uma ferramenta de prática, não uma medição clínica."
  ],
  "benchmarks": {
    "title": "Como o erro de timing é avaliado",
    "headers": [
      "Nota",
      "Erro permitido",
      "Exemplo com alvo de 3,000 s"
    ],
    "rows": [
      [
        "EXACT",
        "Até 10 ms",
        "Clique entre 2,990 s e 3,010 s"
      ],
      [
        "PERFECT",
        "Até 20 % da janela de acerto",
        "Dentro de 40 ms"
      ],
      [
        "EXCELLENT",
        "Até 40 % da janela de acerto",
        "Dentro de 80 ms"
      ],
      [
        "GOOD",
        "Até 60 % da janela de acerto",
        "Dentro de 120 ms"
      ],
      [
        "OK",
        "Até 80 % da janela de acerto",
        "Dentro de 160 ms"
      ],
      [
        "HIT",
        "Até a janela de acerto completa",
        "Dentro de 200 ms"
      ]
    ],
    "note": "A janela de acerto é de 50 ms mais 5 % do tempo-alvo, então alvos mais longos são mais tolerantes em valores absolutos. Estas são as regras de pontuação deste drill, não normas populacionais."
  },
  "techniques": {
    "title": "Formas de julgar um intervalo curto",
    "items": [
      {
        "name": "Contar em ritmo constante",
        "desc": "Contar subdivisões em silêncio dá uma batida interna repetível. Velocidades de contagem diferentes combinam com alvos diferentes.",
        "tips": "Escolha uma velocidade de contagem e mantenha-a durante toda a sessão para que seus erros sejam comparáveis."
      },
      {
        "name": "Usar o pulso de um segundo",
        "desc": "Os anéis ao redor do orbe pulsam uma vez por segundo. Se você contar cada pulso como um tique, soma segundos inteiros e estima apenas o restante.",
        "tips": "Com alvos decimais, como 3,250 s, o último clique cai entre dois pulsos."
      },
      {
        "name": "Analisar o erro com sinal",
        "desc": "Depois de cada clique, o drill mostra quando você clicou. Se você sempre adianta ou atrasa, ajuste sua contagem interna.",
        "tips": "Um pequeno viés constante é mais fácil de corrigir do que uma grande dispersão aleatória."
      }
    ]
  },
  "steps": [
    "Pressione Iniciar Drill para entrar na arena em tela cheia.",
    "Leia o tempo-alvo antes que ele suma.",
    "Clique ou toque quando achar que o tempo-alvo passou.",
    "Jogue várias rodadas e compare seu erro médio e sua consistência."
  ],
  "audience": "Jogadores, músicos, atletas e qualquer pessoa que queira praticar um timing de clique mais regular e melhor noção de intervalos curtos.",
  "faqs": faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text })),
  "sources": pickSources('woods2015'),
  "related": [
    {
      "href": "/pt/drills/visual/reaction-speed/light-reaction",
      "label": "Teste de reação (sinal luminoso)"
    },
    {
      "href": "/pt/drills/reaction-speed",
      "label": "Hub de Velocidade de Reação"
    },
    {
      "href": "/pt/drills/motor/movement-speed/rapid-tapping",
      "label": "Teste de CPS e Cliques por Segundo"
    },
    {
      "href": "/pt/drills/reaction-speed/fps-tracking-trainer",
      "label": "Treinador de Rastreamento FPS"
    },
    {
      "href": "/pt/drills/fps/flick-shot-training",
      "label": "Treino de Flick Shot"
    }
  ]
};

export default function PortugueseReactionTimeTestPage() {
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
      <ReactionTimeTestWrapper
        copy={{
          title: "Jogo de noção de tempo: acerte o tempo-alvo",
          subtitle: "Estimativa de tempo: memorize o tempo-alvo, clique no momento certo e veja seu erro em milissegundos",
          caption: "Um tempo-alvo aparece e some. Clique quando achar que esse tempo passou.",
        }}
      />
      <DrillGuide guide={reactionGuide} />
      <DrillFooter />
    </>
  );
}
