import AntiStrafeJitterClient from '@/app/drills/fps/anti-strafe-jitter-duel/AntiStrafeJitterClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import RelatedDrills from '@/components/drill/RelatedDrills';

const TITLE = "Tracking contra Strafe ADAD: treino grátis | SkillDrills";
const DESCRIPTION = "Tracking contra strafe ADAD grátis: mantenha a mira num alvo que troca de lado ao acaso. Pontos a cada 0,25 s, combo por segundo mantido e níveis sem limite.";
const NAME = "Tracking contra Strafe ADAD";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "tracking contra strafe ADAD",
    "tracking contra strafe",
    "tracking reativo",
    "tracking ADAD",
    "treino de tracking",
    "anti strafe"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/fps/anti-strafe-jitter-duel",
    languages: getAlternateLanguages('/drills/fps/anti-strafe-jitter-duel'),
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    url: "https://skilldrills.online/pt/drills/fps/anti-strafe-jitter-duel",
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

export default function AntiStrafeJitterPtPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
      { "@type": "ListItem", "position": 2, "name": "Treinos de FPS", "item": "https://skilldrills.online/pt/drills/fps" },
      { "@type": "ListItem", "position": 3, "name": NAME, "item": "https://skilldrills.online/pt/drills/fps/anti-strafe-jitter-duel" }
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
    "description": "Treino grátis de tracking contra strafe ADAD no navegador: mantenha a mira num alvo que troca de lado ao acaso.",
    "genre": "FPS Training / Anti-Strafe",
    "url": "https://skilldrills.online/pt/drills/fps/anti-strafe-jitter-duel",
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
    "url": "https://skilldrills.online/pt/drills/fps/anti-strafe-jitter-duel",
    "applicationCategory": "GameApplication",
    "operatingSystem": "All",
    "browserRequirements": "Requires JavaScript, HTML5 Canvas, a mouse and Pointer Lock support",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "description": "Tracking reativo no navegador contra um alvo que faz strafe para a esquerda e a direita, como um inimigo no ADAD."
  };

  const videoGameSchema = {
    "@context": "https://schema.org",
    "@type": "VideoGame",
    "name": NAME,
    "url": "https://skilldrills.online/pt/drills/fps/anti-strafe-jitter-duel",
    "description": "Treino grátis de tracking contra strafe ADAD no navegador: mantenha a mira num alvo que troca de lado ao acaso.",
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
        "name": "Como funciona este treino de tracking contra strafe ADAD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Uma esfera se move só para a esquerda e para a direita, na altura do meio da tela, e troca de direção e velocidade em intervalos aleatórios. Você não clica: mantém a mira sobre o alvo com o mouse. A partida começa com 45 segundos e termina quando o tempo zera."
        }
      },
      {
        "@type": "Question",
        "name": "Como são calculados os pontos e o combo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enquanto a mira está no alvo, a cada 0,25 segundo você ganha 10 pontos vezes o multiplicador de combo e um bônus de nível, e o relógio ganha 0,1 segundo (máximo de 60 segundos). Cada segundo mantido sem interrupção soma 1 ao combo; o multiplicador é 1,1× com combo 3 e chega ao máximo de 3,0× com combo 50."
        }
      },
      {
        "@type": "Question",
        "name": "O que acontece se eu perder o alvo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depois de mais de 1 segundo fora do alvo, o combo volta a 0."
        }
      },
      {
        "@type": "Question",
        "name": "Como a dificuldade aumenta?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O nível sobe 1 a cada 1400 pontos, sem limite. A cada nível o alvo fica menor, o strafe fica mais rápido e as trocas de direção ficam mais próximas. Um combo alto também aperta um pouco a dificuldade."
        }
      },
      {
        "@type": "Question",
        "name": "Tracking reativo ajuda no jogo de verdade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O treino simplifica a situação em que o inimigo alterna A e D a curta distância. Você repete o movimento de recolocar a mira logo depois de uma troca de direção, útil por exemplo no Valorant, CS2, Apex Legends ou Overwatch 2. Quanto isso se transfere para o seu jogo varia de pessoa para pessoa."
        }
      },
      {
        "@type": "Question",
        "name": "Minha mira fica para trás nas trocas de direção. O que faço?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Segure o mouse sem apertar e olhe para o alvo, não para a mira. Em vez de dar um flick longo a cada troca, freie rápido e volte a acompanhar na velocidade do alvo: assim o tempo fora do alvo costuma cair."
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
    "name": "Como treinar tracking contra strafe ADAD",
    "description": "Passos para manter a mira num alvo que troca de lado entre esquerda e direita.",
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
        "name": "Acompanhar o alvo",
        "text": "Mantenha a mira no alvo e recoloque-a logo após cada troca de direção."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Analisar",
        "text": "No fim, compare precisão de tracking, tempo fora do alvo, melhor combo e nível alcançado."
      }
    ]
  };

  const antiStrafeGuide = {
    heading: "Tracking contra Strafe ADAD: guia do treino",
    intro: [
      "Este treino de tracking contra strafe ADAD da SkillDrills pede que você mantenha a mira num alvo que vai para a esquerda ou para a direita ao acaso. Não há clique: conta apenas o tempo em cima do alvo.",
      "O alvo só se move na horizontal e troca de direção e velocidade em intervalos irregulares; algumas trocas saem mais rápidas que outras. Prever ajuda pouco: o que decide é o tracking reativo logo depois da troca.",
      "A partida começa com 45 segundos. Enquanto você está no alvo, o relógio ganha 0,4 segundo por segundo (máximo de 60 segundos). Pontos e níveis não têm teto."
    ],
    techniques: {
      title: "Dicas de tracking contra strafe",
      items: [
        {
          name: "Pegada leve",
          desc: "Apertar o mouse trava o pulso nas trocas de direção e deixa a mira tremida.",
          tips: "Segure só o necessário para dedos e pulso se moverem livres e solte a mão entre partidas longas."
        },
        {
          name: "Olhar para o alvo",
          desc: "Olhar para a esfera, e não para a mira, ajuda a perceber a troca de direção mais cedo.",
          tips: "Se o alvo fica vermelho, você saiu dele: use a mudança de cor como sinal."
        },
        {
          name: "Evitar o flick exagerado",
          desc: "Um flick grande na troca costuma jogar a mira para o outro lado do alvo.",
          tips: "Faça a troca como uma freada e uma nova aceleração, não como dois flicks."
        },
        {
          name: "A regra de 1 segundo",
          desc: "Cada segundo mantido dá +1 de combo; mais de 1 segundo fora apaga o combo.",
          tips: "Depois de perder o alvo, tente voltar em menos de um segundo."
        }
      ]
    },
    steps: [
      "Ajustar a sensibilidade de mouse comum na página de treinos.",
      "Clicar em Iniciar para ativar tela cheia e Pointer Lock.",
      "Manter a mira no alvo que vai da esquerda para a direita.",
      "Em cada troca, frear rápido em vez de dar um flick longo.",
      "No fim, comparar precisão (%), tempo fora do alvo, melhor combo e nível."
    ],
    audience: "Jogadores de Valorant, CS2, Apex Legends ou Overwatch 2 que perdem duelos de perto para strafes ADAD, e quem quer praticar tracking reativo de graça no navegador.",
    faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
    related: [
      { href: "/pt/drills/fps/anti-zigzag-movement-trainer", label: "Tracking em Zigue-Zague" },
      { href: "/pt/drills/reaction-speed/fps-tracking-trainer", label: "Treinador de Tracking FPS" },
      { href: "/pt/drills/fps/pro-smooth-pursuit", label: "Treino de Perseguição Suave" },
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
      <AntiStrafeJitterClient
        copy={{
          h1Keyword: "Tracking contra Strafe ADAD",
          h1Suffix: " — treino reativo no navegador",
          statScore: "Pontos",
          statTime: "Tempo",
          statAccuracy: "Precisão",
          statBestScore: "Recorde",
          startTitle: NAME,
          startSubtitle: "Tracking reativo • Níveis sem fim",
          getReady: "PREPARAR",
          pausedTitle: "PAUSADO",
          pausedSubtitle: "Clique para continuar — o cursor será travado de novo.",
          stageCaption: "Mantenha a mira no alvo que troca de lado ao acaso. Não precisa clicar.",
          rulesTitle: "Regras e pontuação",
          rulesItems: [
            { num: "1", text: "Ficar no alvo", highlight: "10 pts / 0,25 s (+0,1 s)", result: "×Combo" },
            { num: "2", text: "Manter 1 s seguido", highlight: "Combo +1", result: "Até 3,0×" },
            { num: "3", text: "Progressão", highlight: "+1 nível / 1400 pts", result: "Menor e mais rápido" },
            { num: "4", text: "Mais de 1 s fora", highlight: "Penalidade", result: "Combo zera" }
          ],
          aboutTitle: "Sobre o tracking contra strafe ADAD"
        }}
      />
      <DrillGuide guide={antiStrafeGuide} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
