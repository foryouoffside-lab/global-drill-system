import DragAndDropClient from '@/app/drills/motor/hand-eye-coordination/drag-and-drop/DragAndDropClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Teste de arrastar e soltar | Precisão do mouse | SkillDrills',
  description: 'Teste de arrastar e soltar no navegador. Meça precisão ao arrastar, tempo de movimento e o momento certo de soltar o alvo.',
  keywords: [
    'teste de arrastar e soltar', 'teste de arrastar mouse', 'controle do mouse', 'precisão ao arrastar',
    'treino de arrastar e soltar', 'teste de mouse online', 'coordenação olho-mão mouse', 'velocidade de arrastar e soltar',
    'arrastar e soltar no navegador', 'controle de cursor', 'treino de mouse',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Teste de arrastar e soltar | Precisão do mouse | SkillDrills',
    description: 'Teste de arrastar e soltar no navegador. Meça precisão ao arrastar, tempo de movimento e o momento certo de soltar o alvo.',
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Teste de arrastar e soltar | Precisão do mouse | SkillDrills',
    description: 'Teste de arrastar e soltar no navegador. Meça precisão ao arrastar, tempo de movimento e o momento certo de soltar o alvo.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/drag-and-drop'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'SkillDrills Início',
      item: 'https://skilldrills.online/pt',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Treinamento Motor',
      item: 'https://skilldrills.online/pt/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Coordenação Mão-Olho',
      item: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Treinador de Drag and Drop',
      item: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Drag_and_drop", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Teste de Drag and Drop e Precisão de Mouse',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: 'Ferramenta online gratuita para aprimorar precisão de arrasto do cursor, desaceleração motora e tempo de liberação.',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Treinador de Mouse Drag and Drop',
  browserRequirements: 'Requer HTML5 Canvas e JavaScript ativado',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jogo de Treino Drag and Drop',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop',
  description: 'Treine velocidade e precisão ao segurar e arrastar alvos para recipientes em movimento sob pressão de tempo.',
  genre: ['Precisão', 'Coordenação Motora', 'Treino Esports'],
  gamePlatform: ['Web Browser', 'Desktop'],
  applicationCategory: 'Game',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que avalia o teste de Drag and Drop no mouse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Durante 45 segundos você agarra uma bola com o botão esquerdo, arrasta até um recipiente redondo que se move e solta dentro dele. O resultado mostra pontuação, precisão (proporção de entregas certas), número de entregas, combo máximo e nível alcançado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que arrastar e soltar é mais difícil do que apenas clicar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Segurar o botão exige tensão constante no dedo e limita os microajustes do punho. MacKenzie et al. (1991) mostraram que arrastar é bem mais lento e gera mais erros do que apenas apontar para o mesmo alvo com o mesmo dispositivo.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é a Lei de Pilotagem de Accot-Zhai (Steering Law)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Formulada por Johnny Accot e Shumin Zhai em 1997, ela estende a Lei de Fitts para trajetórias restritas, demonstrando que o tempo de travessia é proporcional ao comprimento dividido pela largura do corredor: um corredor com metade da largura leva cerca do dobro do tempo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como evitar passar direto (overshoot) do alvo ao arrastar rápido?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Comece a frear um pouco antes do recipiente, mirando na trajetória dele e não na posição atual, e solte quando a bola estiver dentro. Soltar fora conta como erro e zera o combo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual pegada de mouse é mais recomendada para arrasto contínuo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pegada palm grip oferece maior superfície de contato e estabilidade de antebraço para trajetórias retas, enquanto a claw grip proporciona microajustes rápidos com as pontas dos dedos.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como esse treino beneficia jogadores de FPS e MOBA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em FPS táticos como Valorant e Apex Legends, acelera a troca de escudo e looting em caixas. Em MOBAs e RTS, otimiza a seleção em caixa (box drag) e navegação precisa pelo minimapa.',
      },
    },
    {
      '@type': 'Question',
      name: 'Profissionais de design e edição de vídeo se beneficiam deste exercício?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Designers, editores de vídeo e modeladores 3D realizam milhares de movimentos de arrasto diários em linhas do tempo e curvas bezier; o gesto treinado aqui é o mesmo, mas este drill é um exercício de controle do mouse, não uma prevenção de lesões.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funcionam os multiplicadores de combo e a pontuação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada entrega vale 100 pontos × multiplicador de combo (até 3,0x) × bônus de nível. O nível sobe a cada 250 pontos (mais níveis bônus a cada 4 de combo): bola e recipiente encolhem e o recipiente acelera. Soltar fora da borda, ou deixar o tempo da bola expirar com a opção de tempo limite ligada, zera a sequência. A partida dura 45 segundos e exige mouse com bloqueio de ponteiro.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais configurações de hardware melhoram o desempenho de arrasto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desative a aceleração de ponteiro no sistema operacional, utilize DPI entre 800 e 1600, mousepad de tecido com atrito dinâmico consistente e taxa de polling de 1000 Hz ou superior.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é o tempo de treino diário recomendado para fixar a memória muscular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Algumas partidas de 45 segundos por dia bastam como rotina; pare se sentir desconforto no punho. Compare seus resultados com suas próprias partidas anteriores no mesmo equipamento.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  name: 'Como treinar precisão de drag and drop com mouse',
  description: 'Guia prático para aprimorar desaceleração de cursor, sustentação de clique e soltura precisa.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Alinhe a mira sobre o nó de captura',
      text: 'Posicione o ponteiro do mouse diretamente sobre o orbe de origem destacado na tela.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Segure o botão principal com pressão constante',
      text: 'Mantenha o botão esquerdo pressionado com força leve e estável para agarrar o objeto.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Percorra o corredor até a zona de destino',
      text: 'Transporte o objeto em linha reta sem oscilações laterais em direção ao recipiente móvel.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Solte de forma limpa dentro dos limites',
      text: 'Libere o botão do mouse exatamente quando o objeto estiver centralizado no recipiente.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/drag-and-drop#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('accot1997', 'mackenzie1991', 'fitts1954', 'elliott2010', 'woods2015'),
  intro: {
    title: 'Biomecânica do Arrasto, Pilotagem e Desaceleração Sensório-Motora',
    paragraphs: [
      'Na interação humano-computador, a ação contínua de arrastar e soltar (drag and drop) impõe demandas neuromusculares nitidamente superiores ao simples apontar e clicar. Enquanto o clique pontual obedece à Lei de Fitts (Fitts, 1954), o ato de arrastar exige co-contração isométrica sustentada dos músculos flexores dos dedos para manter o switch acionado durante a translação dinâmica do membro superior.',
      'MacKenzie, Sellen e Buxton (1991) mostraram que arrastar é bem mais lento e gera mais erros do que apenas apontar para o mesmo alvo com o mesmo dispositivo. O botão pressionado limita os ajustes finos dos dedos e do punho.',
      'Além disso, Johnny Accot e Shumin Zhai (1997) desenvolveram a Lei de Pilotagem (Steering Law) para modelar trajetórias espacialmente confinadas. Ao arrastar sob tempo restrito, o indivíduo deve equilibrar a aceleração de transporte com a desaceleração terminal (Elliott et al., 2010), recrutando músculos antagonistas para evitar o overshoot na borda do recipiente.',
      'Como funciona: 45 segundos para agarrar a bola, arrastar e soltar dentro do recipiente móvel. A taxa de atualização da tela e o polling do mouse mudam a sensação (Woods et al., 2015), então compare-se principalmente com suas partidas anteriores no mesmo equipamento. O SkillDrills guarda suas estatísticas apenas no seu navegador.',
    ],
  },
  benchmarks: {
    title: 'Faixas de treino do teste de arrastar e soltar (SkillDrills)',
    caption: 'Faixas de treino do SkillDrills: não são normas científicas nem estatísticas de usuários, e sim referências do autor do drill para interpretar seu nível, combo e precisão. O SkillDrills não coleta dados populacionais.',
    headers: ['Nível (Tier)', 'Classificação', 'Fase / Combo', 'Precisão de Acerto', 'Perfil de jogo'],
    rows: [
      [
        'Tier 1',
        'Elite / Pro Gamer',
        'Nv. 12–15 (Combo > 18x)',
        '≥ 98,0%',
        'Frenagem suave mesmo com recipientes rápidos, quase nenhuma soltura fora.',
      ],
      [
        'Tier 2',
        'Avançado / Competitivo',
        'Nv. 9–11 (Combo 12–17x)',
        '94,0%–97,9%',
        'Desaceleração controlada, recipientes pequenos acertados com microajustes curtos.',
      ],
      [
        'Tier 3',
        'Intermediário / Habilidoso',
        'Nv. 6–8 (Combo 7–11x)',
        '87,0%–93,9%',
        'Pequenas oscilações laterais durante a aceleração e ligeira perda de velocidade antes da borda.',
      ],
      [
        'Tier 4',
        'Básico / Em Desenvolvimento',
        'Nv. 3–5 (Combo 3–6x)',
        '78,0%–86,9%',
        'Múltiplos impulsos de correção, tensão excessiva nos dedos provocando atrito elevado e erros de soltura.',
      ],
      [
        'Tier 5',
        'Iniciante / Entrada',
        'Nv. 1–2 (Combo < 3x)',
        '< 78,0%',
        'Condução lenta e liberação frequente fora do recipiente.',
      ],
    ],
  },
  protocols: {
    title: 'Protocolos de Treinamento para Precisão com o Mouse',
    items: [
      {
        title: 'Protocolo 1: Estabilização de Força Isométrica (Níveis 1–4)',
        description: 'Concentre-se em manter apenas a pressão mínima necessária para não desarmar o clique durante a movimentação. Apertar forte causa rigidez e tremores de alta frequência.',
      },
      {
        title: 'Protocolo 2: Calibração de Trajetória Reta de Accot-Zhai (Níveis 5–8)',
        description: 'Minimize desvios laterais entre a origem e o recipiente. Visualize um túnel reto imaginário conectando os pontos e elimine trajetórias curvas desnecessárias.',
      },
      {
        title: 'Protocolo 3: Desaceleração com Músculos Antagonistas (Níveis 9–12)',
        description: 'Comece a frear pouco antes do recipiente móvel para parar o movimento dentro dele e então solte.',
      },
      {
        title: 'Protocolo 4: Interceptação Dinâmica por Ângulo de Lead (Níveis 13–15)',
        description: 'Em velocidades elevadas, mire no ponto futuro de interceptação do recipiente móvel em vez da posição atual, soltando suavemente na sua trajetória futura.',
      },
    ],
  },
  faqs: {
    title: 'Perguntas Frequentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

const copyPt = {
  title: "Teste Drag and Drop – Precisão de Mouse",
  subtitle: "Precisão ao arrastar · alvo no lugar certo",
  startButtonText: "INICIAR DRILL",
  playAgainText: "Jogar novamente",
  shareText: "Compartilhar resultado",
  exitText: "Sair",
  accuracyLabel: "Precisão",
  targetDropsLabel: "Alvos Entregues",
  maxComboLabel: "Combo Máximo",
  peakLevelLabel: "Nível Máximo",
  rulesTitle: "Instruções do Drill e Sistema de Pontuação",
  rulesItems: [
    { num: "1", text: "Alvo Entregue", highlight: "+100 PTS × Combo", result: "Arrastar e soltar no interior do container" },
    { num: "2", text: "Combo Contínuo", highlight: "Até 3.0× Multiplicador", result: "Encadear entregas perfeitas consecutivas" },
    { num: "3", text: "Progressão de Nível", highlight: "+1 Nível / 250 PTS", result: "Containers encolhem e aceleram" },
    { num: "4", text: "Erro ou Tempo Esgotado", highlight: "Reset de combo", result: "Soltar fora zera o multiplicador" }
  ],
};

export default function DragAndDropPage() {
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
      <DragAndDropClient copy={copyPt} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
