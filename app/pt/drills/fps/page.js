import FPSHubClient from '@/app/drills/fps/FPSHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const fpsDrills = DRILLS.filter((d) => d.category === 'fps');

export const metadata = {
  title: 'Treino de mira FPS grátis | SkillDrills',
  description: 'Treino de mira FPS grátis: 15 exercícios para treinar mira no Valorant, CS2 e Apex com flick, tracking, controle de recoil e reflexos no navegador.',
  keywords: [
    'treino de mira', 'treino de mira FPS', 'treinar mira',
    'como melhorar a mira no Valorant', 'treino de mira CS2', 'flick treino',
    'tracking de mira', 'posicionamento da mira', 'sensibilidade do mouse gamer',
    'jogo de treinar a mira', 'controle de recoil', 'mirar com braço ou pulso',
    'microajustes de mira', 'eDPI Valorant', 'treino de mira sem download'
  ],
  openGraph: {
    title: 'Treino de mira FPS grátis | SkillDrills',
    description: 'Treino de mira FPS grátis: 15 exercícios para treinar mira no Valorant, CS2 e Apex com flick, tracking, controle de recoil e reflexos no navegador.',
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/fps',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Treino de Mira FPS Online Grátis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treino de mira FPS grátis | SkillDrills',
    description: 'Treino de mira FPS grátis: 15 exercícios para treinar mira no Valorant, CS2 e Apex no navegador.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/fps',
    languages: getAlternateLanguages('/pt/drills/fps'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Diretório de Treinos", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Mira FPS", "item": "https://skilldrills.online/pt/drills/fps" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-09",
  "name": "Treino de mira FPS grátis (15 exercícios)",
  "url": "https://skilldrills.online/pt/drills/fps",
  "description": `Treino de mira FPS grátis: 15 exercícios para treinar mira no Valorant, CS2 e Apex: flick, tracking, controle de recoil, troca de alvos e reflexos no navegador.`,
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": fpsDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'pt', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/pt${drill.href}`
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-09",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como o treino de mira no navegador se transfere para jogos táticos como Valorant e CS2?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Em Valorant e CS2, os primeiros tiros costumam decidir o confronto, por isso a precisão da primeira bala e os pequenos ajustes importam muito. Uma partida de Deathmatch tem tempo de renascimento e deslocamento, enquanto o treino de mira no navegador repete muito mais flicks e paradas precisas em pouco tempo. Com o movimento mais consistente, sobra mais atenção para o posicionamento de mira e a leitura do jogo na partida. O ganho varia de pessoa para pessoa, então compare também seus resultados dentro do jogo."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a diferença entre Click Timing (Flicks), Tracking e Target Switching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A mecânica de tiro em jogos FPS é sustentada por três pilares fundamentais: 1) Click Timing / Flicks: arremessar a mira velozmente até o alvo e clicar no instante exato da sobreposição, essencial para armas de tiro único e precisão como Vandal, AK-47 e snipers. 2) Tracking (rastreamento contínuo): manter a retícula colada em alvos que se movem em trajetórias dinâmicas e imprevisíveis, crucial no Apex Legends e Overwatch 2. 3) Target Switching: alternar a mira em alta velocidade entre múltiplos alvos sequenciais com estabilização imediata, vital para limpar duplas e lidar com emboscadas em desvantagem numérica."
      }
    },
    {
      "@type": "Question",
      "name": "É melhor mirar usando o braço, o pulso ou adotar uma pegada híbrida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Muitos jogadores usam um estilo híbrido: antebraço e ombro fazem os movimentos amplos e giros de 180 graus, o pulso cuida das distâncias médias e os dedos fazem os pequenos ajustes na altura da cabeça. Mirar só com o pulso limita a amplitude, e mirar só com o braço dificulta os ajustes muito pequenos. Escolha o que for confortável e pare para descansar se sentir dor."
      }
    },
    {
      "@type": "Question",
      "name": "Como encontrar a sensibilidade e a distância de giro (cm/360) ideal para o mouse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A medida padrão universal para calibrar a sensibilidade é a distância física em centímetros que o mouse precisa percorrer para girar 360 graus no jogo (cm/360). Para jogos táticos como Valorant e CS2, uma sensibilidade baixa entre 35 e 55 cm/360 (eDPI entre 200 e 320) proporciona a máxima estabilidade nas microcorreções de cabeça. Para jogos rápidos com muito tracking (Apex Legends, Overwatch 2), uma sensibilidade média de 24 a 38 cm/360 equilibra agilidade de giro e suavidade no rastreamento. A sensibilidade perfeita é aquela com a qual você consegue andar de lado (strafe) mantendo a mira cravada em um ponto fixo sem tremer."
      }
    },
    {
      "@type": "Question",
      "name": "Por que minha mira treme ou passa do alvo (overshooting) e como corrigir isso?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tremores (shakiness) e ultrapassagem do alvo (overshooting) geralmente derivam de tensão muscular excessiva no antebraço, segurar o mouse com força descomunal ou usar uma sensibilidade alta demais para sua capacidade neuromuscular de frenagem. Para solucionar: 1) aproveite a fricção mecânica do seu mousepad aplicando uma leve pressão para baixo com a base da palma da mão ao parar o movimento balístico; 2) pratique exercícios de rastreamento suave (smoothness drills) para relaxar a pegada e a musculatura; e 3) reduza sua sensibilidade entre 10% e 15% para ampliar a margem de tolerância a pequenas imprecisões motoras."
      }
    },
    {
      "@type": "Question",
      "name": "Um treinador de mira online no navegador tem a mesma precisão e resposta de um software instalado?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Para treino, em grande parte sim. O SkillDrills desenha em um Canvas HTML5 e usa a API Pointer Lock do navegador, que oculta o cursor e entrega o movimento relativo do mouse (movementX/movementY); assim, flicks longos não param na borda da tela. O movimento dos alvos é calculado pelo tempo decorrido, e não pela contagem de quadros, por isso os treinos se comportam de forma consistente em monitores de 144 Hz, 240 Hz ou 360 Hz. A entrada no navegador ainda passa pelas configurações de ponteiro do sistema operacional; mantenha DPI, sensibilidade e aceleração do mouse iguais entre as sessões ao comparar resultados."
      }
    },
    {
      "@type": "Question",
      "name": "O que faz mais diferença em partida: posicionamento de mira (pre-aim) ou flick reativo?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Um bom posicionamento de mira (deixar a mira na altura da cabeça onde o inimigo vai aparecer) ajuda com mais frequência, porque quase dispensa flicks grandes. Mas contra off-angles inesperados, aberturas largas ou vários inimigos ao mesmo tempo, o pre-aim não basta e a velocidade do flick e os microajustes decidem. Treine os dois separadamente: o posicionamento em Posicionamento de Mira e os flicks no exercício de flick."
      }
    },
    {
      "@type": "Question",
      "name": "Quantos minutos por dia devo treinar mira para evoluir sem fadiga mental e muscular?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessões curtas e concentradas são mais fáceis de manter com regularidade do que maratonas de várias horas. Um bom ponto de partida é treinar mira de 15 a 25 minutos, algumas vezes por semana, parando quando a precisão cair ou a mão cansar. Não existe um tempo ideal que sirva para todos; ajuste pelos seus próprios resultados."
      }
    }
  ]
};

export default function PortugueseFPSHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FPSHubClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
