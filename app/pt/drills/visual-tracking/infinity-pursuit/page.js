import InfinityPursuitClient from '@/app/drills/visual-tracking/infinity-pursuit/InfinityPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: "Exercício Ocular em Oito | SkillDrills",
  description: "Exercício ocular em oito deitado para praticar rastreamento ocular, perseguição suave e coordenação binocular. Grátis no navegador.",
  keywords: [
    "exercício ocular oito deitado",
    "exercício de figura 8 para os olhos",
    "rastreamento ocular",
    "coordenação binocular",
    "cruzamento da linha média",
    "movimento ocular",
    "perseguição suave",
    "figura do oito com os olhos",
    "exercício ocular online grátis",
    "treino de visão esportiva",
    "acompanhamento visual em oito",
    "coordenação olho-mão"
  ],
  alternates: {
    canonical: "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit",
    languages: getAlternateLanguages("/drills/visual-tracking/infinity-pursuit"),
  },
  robots: { index: true, follow: true },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: "Exercício Ocular em Oito | SkillDrills",
    description: "Exercício ocular em oito deitado para praticar rastreamento ocular, perseguição suave e coordenação binocular. Grátis no navegador.",
    url: "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit",
    siteName: "SkillDrills",
    locale: "pt_BR",
    type: "website",
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: "summary_large_image",
    title: "Exercício Ocular em Oito | SkillDrills",
    description: "Exercício ocular em oito deitado para praticar rastreamento ocular, perseguição suave e coordenação binocular. Grátis no navegador.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "SkillDrills",
      "item": "https://skilldrills.online/pt"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Rastreamento Visual",
      "item": "https://skilldrills.online/pt/drills/visual-tracking"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Perseguição em Oito Infinito",
      "item": "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit"
    }
  ]
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication", "sameAs": ["https://en.wikipedia.org/wiki/Smooth_pursuit"],
  "name": "Exercício Ocular em Oito – Rastreamento Ocular",
  "dateModified": "2026-09-20",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Navegador",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Rastreamento Ocular em Oito Deitado e Cruzamento da Linha Média",
  "dateModified": "2026-09-20",
  "url": "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit",
  "applicationCategory": "SportsApplication",
  "operatingSystem": "Navegador",
  "browserRequirements": "Requer JavaScript e Canvas HTML5.",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
};

const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "name": "Treino de Perseguição Ocular em Oito",
  "dateModified": "2026-09-20",
  "description": "Treino visual no navegador para praticar a coordenação binocular em uma trajetória contínua de oito deitado.",
  "genre": ["Treino ocular", "Visão esportiva", "Rastreamento visual"],
  "playMode": "Um jogador",
  "applicationCategory": "Game"
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Realizar o Exercício do Oito Deitado para os Olhos",
  "dateModified": "2026-09-20",
  "description": "Protocolo para treinar a perseguição ocular contínua e a coordenação binocular ao longo da lemniscata de Bernoulli.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Alinhe a Postura e Fixe a Cabeça",
      "text": "Sente-se ereto a 50-70 cm da tela. Mantenha o queixo imóvel para evitar que a rotação da cabeça substitua o trabalho dos músculos oculares.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit#step-1"
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Inicie na Velocidade Padrão",
      "text": "Selecione 1.0x para habituar os olhos à transição contínua entre os laços esquerdo e direito da curva.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit#step-2"
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Flua sem Saltos pelo Centro",
      "text": "Ao cruzar a interseção central (linha média), evite piscadelas ou sacadas compensatórias. Mantenha um deslizamento suave e ininterrupto.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit#step-3"
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Complete Sessões Curtas e Focadas",
      "text": "Execute de 5 a 8 blocos de 60 segundos com descansos oculares para consolidar o ganho de perseguição no cerebelo.",
      "url": "https://skilldrills.online/pt/drills/visual-tracking/infinity-pursuit#step-4"
    }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é o exercício ocular em oito deitado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "É uma prática visual em que os dois olhos acompanham um alvo que percorre uma figura de oito deitado. Ela permite observar a continuidade do olhar e a passagem pelo centro, mas não substitui uma avaliação clínica."
      }
    },
    {
      "@type": "Question",
      "name": "Por que observar o cruzamento da linha média?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A passagem pelo centro muda continuamente o lado do campo visual que o alvo ocupa. Observar esse trecho ajuda a identificar hesitações ou saltos do olhar dentro da sessão, sem transformar o resultado em diagnóstico."
      }
    },
    {
      "@type": "Question",
      "name": "Como os olhos participam da trajetória em oito deitado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os músculos extraoculares de cada olho coordenam movimentos horizontais, verticais e diagonais para manter o alvo na visão. O exercício pratica controle do olhar; não é correto prometer fortalecimento ou tratamento de uma doença."
      }
    },
    {
      "@type": "Question",
      "name": "O que significa acompanhar o alvo com estabilidade?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Significa manter o olhar próximo do alvo durante a curva, com poucas perdas ou correções. A métrica da página é uma referência de treino nas mesmas condições e não uma medida clínica universal."
      }
    },
    {
      "@type": "Question",
      "name": "Este treino pode ajudar quem acompanha alvos em jogos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ele oferece uma tarefa controlada para praticar a continuidade do olhar em curvas. Qualquer transferência para jogos depende da prática específica, do descanso e da habilidade individual; a página não promete melhorar a mira."
      }
    },
    {
      "@type": "Question",
      "name": "Por que manter a cabeça estável durante o exercício?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cabeça estável deixa mais claro o que os olhos conseguem acompanhar sozinhos e torna as sessões comparáveis. Não force uma imobilidade rígida: relaxe o pescoço e pare se surgir dor ou tontura."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a recomendação ideal de tempo de prática diária?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Comece com uma ou duas séries curtas de cerca de 60 segundos, com pausa entre elas. Aumente apenas se o olhar continuar confortável; não há uma dose diária universal para este exercício."
      }
    },
    {
      "@type": "Question",
      "name": "O exercício auxilia na redução do cansaço visual de telas de computador?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pode funcionar como uma pausa ativa para variar um olhar preso à tela, mas não há garantia de aliviar a fadiga. Para desconforto persistente, visão dupla ou dor, interrompa a prática e procure um profissional."
      }
    },
    {
      "@type": "Question",
      "name": "Existe benefício para esportes tradicionais de campo e quadra?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tarefa reproduz apenas uma parte do acompanhamento de uma trajetória. Esportes reais também exigem antecipação, profundidade, reação e decisões; use o exercício como complemento, não como substituto do treino esportivo."
      }
    },
    {
      "@type": "Question",
      "name": "O exercício ocular em oito é gratuito e como usar com segurança?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A ferramenta é gratuita e funciona no navegador, sem exigir cadastro. Use em ritmo confortável, pisque normalmente e pare diante de dor, visão dupla, náusea ou tontura; procure orientação profissional se os sintomas persistirem."
      }
    }
  ]
};

const guideProps = {
  heading: "Fundamentos Neurofisiológicos da Lemniscata e Coordenação Binocular",
  intro: [
    "A figura do oito deitado, também chamada de lemniscata, combina curvas diagonais e passagens pelo centro em uma única tarefa de perseguição visual. O alvo se move continuamente para que você pratique manter a fixação sem transformar cada curva em uma sequência de saltos do olhar. A página treina uma habilidade visual; não substitui avaliação com oftalmologista ou ortoptista.",
    "O ponto central é útil para observar a transição entre os campos visuais direito e esquerdo. Ao atravessar a linha média, mantenha o alvo nítido e note se o olhar perde a trajetória, faz um pequeno salto ou precisa de uma pausa. Esse registro descreve o desempenho no exercício, não diagnostica uma alteração neurológica ou binocular.",
    "A resposta percebida depende da distância da tela, do tamanho do alvo, da taxa de atualização e da fadiga. Use uma tela confortável, pisque normalmente e priorize regularidade em vez de velocidade. As métricas ficam no dispositivo; se surgir dor, visão dupla, náusea ou tontura, pare e procure orientação profissional."
  ],
  techniques: {
    title: "Quatro técnicas para a perseguição visual em oito",
    items: [
      { name: "Âncora no centro", desc: "Comece percebendo o cruzamento central antes de tentar acompanhar a volta inteira.", tips: "Mantenha o tronco quieto, pisque sem prender a respiração e reduza a velocidade se perder o ponto." },
      { name: "Curva contínua", desc: "Deixe os olhos acompanharem a curva sem antecipar o próximo laço com um salto.", tips: "Olhe para o alvo atual; não tente enxergar o caminho inteiro de uma vez." },
      { name: "Simetria dos dois lados", desc: "Compare a passagem pelo laço esquerdo e pelo laço direito na mesma sessão.", tips: "Se um lado parecer mais difícil, repita em ritmo lento e registre a diferença sem forçar." },
      { name: "Progressão controlada", desc: "Aumente a velocidade apenas quando a trajetória continuar estável e confortável.", tips: "Faça uma sessão curta, descanse olhando para longe e retorne ao último nível confortável." }
    ]
  },
  steps: [
    "Sente-se com as costas apoiadas e deixe a tela a uma distância confortável, sem aproximar o rosto.",
    "Ajuste o brilho e o tamanho da janela para enxergar o alvo com nitidez; mantenha a cabeça relaxada e estável.",
    "Comece na velocidade mais baixa e acompanhe o ponto luminoso com os dois olhos, piscando normalmente.",
    "Observe com atenção a passagem pelo centro e reduza a velocidade se o olhar começar a saltar ou se você mover a cabeça.",
    "Registre a precisão e o conforto percebido, faça uma pausa olhando para longe e só então repita ou avance um nível."
  ],
  benchmarks: {
    title: "Métricas de desempenho no oito deitado",
    headers: ["Nível", "Acompanhamento do alvo", "Perdas no centro", "Precisão da trajetória", "Leitura prática"],
    rows: [
      ["Muito estável", "Alvo quase sempre acompanhado", "Raras", "98% ou mais", "Ritmo confortável; use como referência pessoal, não como diagnóstico."],
      ["Estável", "Acompanhamento contínuo", "Poucas", "92%–97%", "Boa consistência; teste uma pequena progressão de velocidade."],
      ["Funcional", "Algumas correções", "Ocasionalmente", "82%–91%", "Base adequada para repetir sessões lentas e observar evolução."],
      ["Em desenvolvimento", "Atrasos perceptíveis", "Frequentes", "70%–81%", "Diminua o ritmo, faça pausas e compare apenas sessões feitas nas mesmas condições."],
      ["Instável", "Perde o alvo com frequência", "Muitas", "Abaixo de 70%", "Volte ao ritmo mais lento; interrompa se houver desconforto visual."]
    ],
    note: "As faixas são referências internas para comparar sessões na mesma tela e distância; não são valores normativos clínicos. O acompanhamento do alvo não mede acuidade visual nem confirma uma condição médica."
  },
  faqs: faqSchema.mainEntity.map(e => ({ q: e.name, a: e.acceptedAnswer.text })),
  sources: pickSources('barnes2008', 'krauzlis2004', 'robinson1965', 'leighzee2015', 'woods2015', 'salthouse1980'),
  related: [
    { href: "/pt/drills/visual-tracking/constant-slow-pursuit", label: "Perseguição ocular lenta" },
    { href: "/pt/drills/visual-tracking/directional-chaos-pursuit", label: "Perseguição direcional variável" },
    { href: "/pt/drills/visual-tracking/dynamic-evasion-pursuit", label: "Perseguição evasiva dinâmica" },
    { href: "/pt/drills/visual-tracking/sine-wave-pursuit", label: "Rastreamento em onda senoidal" }
  ]
};

export default function InfinityPursuitPagePt() {
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
      <InfinityPursuitClient
        copy={{
          title: "Exercício Ocular em Oito",
          subtitle: "Rastreamento ocular e coordenação binocular",
          description: "Acompanhe um alvo em uma figura de oito deitado, observe a passagem pela linha média e pratique uma perseguição visual suave em ritmo confortável."
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
