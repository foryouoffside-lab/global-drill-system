import AntiZigzagClient from '@/app/drills/fps/anti-zigzag-movement-trainer/AntiZigzagClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Tracking em Zigue-Zague: alvos evasivos | SkillDrills";
const DESCRIPTION = "Tracking em zigue-zague grátis: mantenha a mira num alvo que muda de direção de repente e zere a barra de vida dele antes que ele fuja. Níveis sem limite.";
const NAME = "Tracking em Zigue-Zague";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tracking em zigue-zague",
    "tracking zigue zague",
    "alvos evasivos",
    "tracking reativo",
    "treino de tracking"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    languages: getAlternateLanguages('/drills/fps/anti-zigzag-movement-trainer'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AntiZigzagPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer" }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": NAME,
    "applicationCategory": "GameApplication",
    "operatingSystem": "Web Browser",
    "dateModified": "2026-11-09",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" },
    "description": "Treino grátis de tracking em zigue-zague no navegador: mantenha a mira num alvo evasivo até zerar a barra de vida.",
    "genre": "FPS Training / Reactive Tracking",
    "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    "publisher": {
      "@type": "Organization",
      "name": "SkillDrills",
      "url": "https://skilldrills.online"
    }
  };

  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": NAME,
    "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "description": "Tracking reativo no navegador contra alvos evasivos que mudam de direção em zigue-zague."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/pt/drills/fps/anti-zigzag-movement-trainer",
    "description": "Treino grátis de tracking em zigue-zague no navegador: mantenha a mira num alvo evasivo até zerar a barra de vida.",
    "dateModified": "2026-11-09",
    "gamePlatform": "Web Browser",
    "genre": ["FPS Training", "Reactive Tracking"],
    "playMode": "SinglePlayer",
    "applicationCategory": "Game",
    "operatingSystem": "Web Browser",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "BRL" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "dateModified": "2026-11-09",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Como funciona o tracking em zigue-zague?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Um alvo aparece num ponto aleatório, corre para a esquerda ou para a direita com uma leve oscilação para cima ou para baixo e muda de direção em intervalos irregulares. Você não clica: enquanto a mira está sobre o alvo, a barra de vida dele diminui. A partida começa com 45 segundos."
        }
      },
      {
        "@type": "Question",
        "name": "Como eu destruo um alvo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Com a mira em cima, o alvo perde 65 de vida por segundo: cerca de 1,5 segundo no total basta. Aí você ganha um bônus de 25 pontos vezes o combo e surge um novo alvo. A vida já tirada não volta, mesmo que você saia do alvo no meio."
        }
      },
      {
        "@type": "Question",
        "name": "Como são calculados os pontos e o combo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No alvo, a cada 0,25 segundo você ganha 10 pontos vezes o combo e um bônus de nível, e o relógio ganha 0,1 segundo (máximo de 60 segundos). Cada segundo mantido sem interrupção soma 1 ao combo; o multiplicador chega ao máximo de 3,0× com combo 50."
        }
      },
      {
        "@type": "Question",
        "name": "Por que o alvo some?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cada alvo tem um tempo de vida: cerca de 4,2 segundos no nível 1, caindo até cerca de 1,8 segundo nos níveis altos. Se você não o destruir a tempo, ele foge, o combo volta a 0 e aparece um novo alvo. Mais de 1 segundo fora do alvo também zera o combo."
        }
      },
      {
        "@type": "Question",
        "name": "Como a dificuldade aumenta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O nível sobe 1 a cada 1400 pontos, sem limite. A cada nível o alvo fica menor e mais rápido, e o intervalo entre as mudanças de direção diminui a partir de cerca de 1,2 segundo."
        }
      },
      {
        "@type": "Question",
        "name": "Como acompanhar melhor alvos evasivos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Um flick grande a cada mudança de direção quase sempre passa do alvo. Olhe para o centro dele, freie rápido depois da troca e acompanhe a nova velocidade. O treino reproduz mudanças bruscas de direção, não deslizes: útil por exemplo no Apex Legends, Valorant ou Call of Duty contra inimigos que se esquivam. Quanto isso se transfere para o jogo varia de pessoa para pessoa."
        }
      },
      {
        "@type": "Question",
        "name": "Funciona no celular ou em tela touch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Não. O treino lê o movimento do mouse com Pointer Lock, então precisa de mouse. Em aparelhos só com toque aparece um aviso no lugar do botão de início. A tecla Esc encerra o treino a qualquer momento."
        }
      }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Como treinar tracking em zigue-zague",
    "description": "Passos para acompanhar e destruir um alvo evasivo que muda de direção em zigue-zague.",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Ajustar a sensibilidade",
        "text": "Na página de treinos, ajuste a sensibilidade de mouse comum para ficar parecida com a que você usa."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Começar",
        "text": "Clique em Iniciar: o treino entra em tela cheia e ativa o Pointer Lock depois da contagem."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Ficar no alvo",
        "text": "Mantenha a mira no alvo para zerar a barra de vida dele."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Destruir a tempo",
        "text": "Destrua o alvo antes que ele fuja para ganhar o bônus e manter o combo."
      }
    ]
  };

  const ptGuide = {
    heading: "Tracking em Zigue-Zague: guia contra alvos evasivos",
    intro: [
      "Neste treino de tracking em zigue-zague da SkillDrills, você mantém a mira num alvo que muda de direção de repente para zerar a barra de vida dele. Não há clique: o tempo em cima do alvo é o dano.",
      "O alvo aparece ao acaso, anda para os lados com uma leve oscilação vertical e quica nas bordas. No nível 1 ele muda de direção mais ou menos a cada 1,2 segundo, e cada vez com mais frequência depois. Cada alvo tem tempo de vida limitado e foge se você demorar.",
      "A partida começa com 45 segundos; no alvo, o relógio ganha 0,4 segundo por segundo (máximo de 60 segundos). Pontos e níveis não têm teto."
    ],
    techniques: {
      title: "Dicas de tracking em zigue-zague",
      items: [
        {
          name: "Sem flick exagerado",
          desc: "Um flick grande na mudança de direção joga a mira para o outro lado e desperdiça tempo de dano.",
          tips: "Depois da troca, freie rápido e entre na nova velocidade."
        },
        {
          name: "Ler o rastro",
          desc: "Um traço curto atrás do alvo mostra o último trecho que ele percorreu.",
          tips: "A direção do traço indica para onde o alvo está indo agora."
        },
        {
          name: "Destruir primeiro",
          desc: "Se o tempo de vida acabar, o combo some: junte tempo em cima do alvo e acabe com ele rápido.",
          tips: "Abaixo de metade da vida a barra fica vermelha. Não solte agora."
        },
        {
          name: "Pegada leve",
          desc: "Com a mão tensa, as pequenas correções em todas as direções ficam travadas.",
          tips: "Segure só o necessário para dedos e pulso se moverem livres."
        }
      ]
    },
    steps: [
      "Ajustar a sensibilidade de mouse comum na página de treinos.",
      "Clicar em Iniciar para ativar tela cheia e Pointer Lock.",
      "Manter a mira no alvo em zigue-zague para zerar a barra de vida.",
      "Destruí-lo antes do fim do tempo de vida para ganhar 25 pontos × combo.",
      "No fim, comparar precisão, melhor combo e nível."
    ],
    audience: "Jogadores de Apex Legends, Valorant ou Call of Duty que perdem inimigos que se esquivam, e quem quer praticar tracking em zigue-zague de graça no navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/pt/drills/fps/anti-strafe-jitter-duel", label: "Tracking contra Strafe ADAD" },
      { href: "/pt/drills/reaction-speed/fps-tracking-trainer", label: "Treino de Tracking FPS" },
      { href: "/pt/drills/fps/pro-smooth-pursuit", label: "Tracking Suave Smooth Pursuit" },
      { href: "/pt/drills/fps/flick-shot-training", label: "Treino de Flick Shot" },
      { href: "/pt/drills/visual/reaction-speed/light-reaction", label: "Teste de Tempo de Reação" }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <AntiZigzagClient
        copy={{
          h1Keyword: "Tracking em Zigue-Zague",
          h1Suffix: " — acerte alvos evasivos",
          statScore: "Pontos",
          statTime: "Tempo",
          statAccuracy: "Precisão",
          statBestScore: "Recorde",
          startTitle: NAME,
          startSubtitle: "Tracking reativo • Níveis sem fim",
          getReady: "PREPARAR",
          stageCaption: "Mantenha a mira no alvo em zigue-zague e zere a barra de vida dele. Não precisa clicar.",
          rulesTitle: "Regras e pontuação",
          rulesItems: [
            { num: "1", text: "Ficar no alvo", highlight: "10 pts / 0,25 s (+0,1 s)", result: "×Combo" },
            { num: "2", text: "Alvo destruído", highlight: "25 pts × combo", result: "Novo alvo" },
            { num: "3", text: "Progressão", highlight: "+1 nível / 1400 pts", result: "Menor e mais rápido" },
            { num: "4", text: "Alvo fugiu / 1 s fora", highlight: "Penalidade", result: "Combo zera" }
          ],
          aboutTitle: "Sobre o tracking em zigue-zague"
        }}
      />
      <DrillGuide guide={ptGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
