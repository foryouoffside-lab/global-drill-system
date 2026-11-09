import PrecisionFlickShotClient from '@/app/drills/motor/hand-eye-coordination/precision-flick-shot/PrecisionFlickShotClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

export const metadata = {
  title: 'Teste de precisão do mouse: flicks no centro | SkillDrills',
  description: 'Teste de precisão do mouse grátis: acerte dois alvos que encolhem; tiro no centro de 8 px vale o dobro. Mostra taxa de acerto, tiros no centro e nível.',
  keywords: [
    'teste de precisão do mouse', 'precisão do mouse', 'jogo de precisão do mouse', 'testar precisão do mouse',
    'precisão de clique', 'tiro no centro do alvo',
  ],
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Teste de precisão do mouse: flicks no centro | SkillDrills',
    description: 'Teste de precisão do mouse grátis: acerte dois alvos que encolhem; tiro no centro de 8 px vale o dobro. Mostra taxa de acerto, tiros no centro e nível.',
    type: 'article',
    url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Teste de precisão do mouse: flicks no centro | SkillDrills',
    description: 'Teste de precisão do mouse grátis: acerte dois alvos que encolhem; tiro no centro de 8 px vale o dobro. Mostra taxa de acerto, tiros no centro e nível.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/precision-flick-shot'),
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
      name: 'Flick Shot de Precisão',
      item: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot',
    },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  name: 'Teste de precisão do mouse: flicks no centro',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description: 'Teste de precisão do mouse grátis no navegador: acerte alvos que encolhem e conte seus tiros no centro.',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Treinador de Flick Shot',
  browserRequirements: 'Requer HTML5 Canvas e JavaScript ativado',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot',
  applicationCategory: 'EducationalApplication',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: 'Jogo de precisão do mouse: flicks no centro',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot',
  description: 'Acerte alvos que encolhem, de preferência bem no centro.',
  genre: ['Tiro', 'Reflexos', 'Esports'],
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
      name: 'O que é um flick shot no treino de mira de FPS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Um flick shot é um movimento balístico rápido e discreto executado para transferir o retículo do ponto de espera até a cabeça do oponente em fração de segundo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como funciona o modelo de duas fases de Woodworth (1899)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ele define que miras rápidas consistem em um impulso balístico primário que cobre a maior parte da distância, seguido por ajustes finos guiados por visão terminal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual é a importância da frenagem (deceleration) no mouse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Acelerar o mouse é fácil; pará-lo exatamente sobre o alvo exige contração dos músculos antagonistas do antebraço para evitar o overshoot (passar direto).',
      },
    },
    {
      '@type': 'Question',
      name: 'Por que acertar no centro (bulls-eye) rende mais pontos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ao conceder pontos em dobro no núcleo central de 8 pixels, o cérebro é forçado a diminuir a variância de dispersão em vez de se acomodar com acertos nas bordas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Esse treino melhora o desempenho no CS2 e no Valorant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jogadores de Valorant ou CS2 podem usar o drill para treinar a parada firme depois de um flick. Não há garantia de melhora no jogo; use a mesma sensibilidade do seu jogo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como lidar com múltiplos alvos aparecendo ao mesmo tempo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sempre há dois alvos na tela; os dois encolhem, mas o ativo encolhe mais rápido. Acerte primeiro o menor. Se um alvo some, o combo zera e 1 segundo é descontado.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual sensibilidade e DPI são recomendados?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Geralmente 800 DPI com sensibilidade entre 30 e 45 cm por volta completa de 360 graus favorece velocidade com o braço e controle fino com o punho.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como a pontuação e as patentes são calculadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada acerto vale pontos base (100, ou 200 no centro de 8 px) × combo (até 3,0x) × bônus de nível, mais 2 segundos (máx. 60). Clique errado ou alvo expirado custa 1 segundo e o combo. A nota depende só da pontuação final; não há medição de tempo de aquisição.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais ajustes de equipamento otimizam o flick?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Monitor de alta taxa de atualização, a opção do Windows "Aumentar a precisão do ponteiro" desativada e um mouse leve. Este teste mede a precisão dos seus cliques, não essa configuração do Windows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quantos minutos por dia são indicados para aquecimento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Algumas partidas como aquecimento antes de jogar bastam. Pare se sentir desconforto no punho e compare-se com suas próprias partidas anteriores.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  name: 'Como treinar flick shots e precisão de mira no mouse',
  description: 'Guia estruturado para dominar tiros rápidos de flick, mira no centro e frenagem precisa.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Calibre a sensibilidade e centralize o foco',
      text: 'Ajuste as configurações para coincidir com seu jogo principal e mantenha a mira no centro.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Identifique o alvo com anel prioritário',
      text: 'Observe o surgimento das esferas e priorize aquela cujo tempo de expiração esteja mais adiantado.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Execute o snap balístico em movimento único',
      text: 'Desloque o mouse em um gesto direto e contínuo, sem pausas ou correções hesitantes no meio do percurso.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Freie bruscamente sobre o centro e atire',
      text: 'Acione a musculatura extensora do punho para travar a inércia exatamente sobre o núcleo antes de clicar.',
      url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/precision-flick-shot#step-4',
    },
  ],
};

const guideProps = {
  sources: pickSources('meyer1988', 'fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015'),
  intro: {
    title: 'Biomecânica de Micro-Flicks Balísticos e Otimização de Submovimentos',
    paragraphs: [
      'Este teste de precisão do mouse pede que você acerte alvos que encolhem, o mais perto possível do centro. Em jogos competitivos de tiro e ergonomia computacional, o flick shot é um movimento manual rápido e discreto realizado sob severo limite de tempo. Robert S. Woodworth (1899) estabeleceu que movimentos voluntários funcionam por arquitetura de controle bifásico: um impulso balístico inicial que lança o membro rumo ao objetivo, seguido por uma fase de controle visual para correções terminais.',
      'No influente Modelo de Submovimentos Estocásticos Otimizados de David E. Meyer et al. (1988), provou-se que o sistema motor humano está sujeito a ruído neural proporcional à velocidade. Movimentar-se excessivamente rápido eleva a dispersão dos pontos de parada. Se o impulso inicial errar o alvo, é preciso um submovimento corretivo extra, que custa tempo.',
      'Para atingir rendimento de elite (MacKenzie, 1992), o jogador deve calibrar a velocidade do impulso primário para que sua distribuição atinja com segurança o perímetro do alvo. A bonificação por acertos bulls-eye estreita a dispersão de impacto e treina a frenagem antagonista imediata.',
      'A relação de compromisso entre distância e tamanho segue a Lei de Fitts (Fitts, 1954), com fundamentação motora atualizada em Elliott et al. (2010).',
      'Como funciona: começa com 45 segundos, +2 segundos por acerto (máx. 60), -1 segundo por clique errado ou alvo expirado. Exige mouse com bloqueio de ponteiro; aparelhos só com toque não são suportados. A taxa de atualização e o polling do mouse mudam a sensação (Woods et al., 2015). Seus registros ficam apenas no seu navegador.',
    ],
  },
  benchmarks: {
    title: 'Faixas de treino do teste de precisão do mouse (SkillDrills)',
    caption: 'Faixas de treino do SkillDrills: não são normas científicas nem estatísticas de usuários, e sim referências do autor do drill para interpretar nível, combo, precisão de clique e taxa de tiros no centro. O SkillDrills não coleta dados externos.',
    headers: ['Nível (Tier)', 'Classificação', 'Fase e Combo', 'Precisão de Clique', 'Taxa Bulls-Eye', 'Perfil de jogo'],
    rows: [
      [
        'Tier 1',
        'Mestre do Flick Apex',
        'Nv. 15+ (Combo > 20x)',
        '≥ 96,0%',
        '> 65%',
        'Um único flick chega ao centro, quase sem correções.',
      ],
      [
        'Tier 2',
        'Atirador de Elite',
        'Nv. 11–14 (Combo 14–19x)',
        '91,0%–95,9%',
        '45%–64%',
        'Centro bem visado, microcorreções curtas.',
      ],
      [
        'Tier 3',
        'Atirador Competente',
        'Nv. 7–10 (Combo 8–13x)',
        '84,0%–90,9%',
        '25%–44%',
        'Acertos frequentes no anel externo, ligeiro overshoot em trocas rápidas de alvo.',
      ],
      [
        'Tier 4',
        'Fragger em Evolução',
        'Nv. 4–6 (Combo 4–7x)',
        '74,0%–83.9%',
        '10%–24%',
        'Múltiplos impulsos truncados, dispersão alta por excesso de aceleração, hesitação antes do tiro.',
      ],
      [
        'Tier 5',
        'Iniciante / Entrada',
        'Nv. 1–3 (Combo < 4x)',
        '< 74,0%',
        '< 10%',
        'Flicks curtos (under-flick) e erros frequentes.',
      ],
    ],
  },
  protocols: {
    title: 'Protocolos de Treino para Precisão de Flick Shot',
    items: [
      {
        title: 'Protocolo 1: Calibração do Impulso Primário (Níveis 1–4)',
        description: 'Priorize um snap fluido e sem interrupções. Elimine pausas a meio caminho e confie na memória motora para alcançar a área do alvo.',
      },
      {
        title: 'Protocolo 2: Redução de Submovimentos de Meyer (Níveis 5–8)',
        description: 'Mire deliberadamente no centro bulls-eye de 8 pixels. Encolher o alvo mental faz o córtex motor suprimir ruídos e fechar a dispersão dos tiros.',
      },
      {
        title: 'Protocolo 3: Sequenciamento Prioritário de Alvos (Níveis 9–12)',
        description: 'Em caso de alvos simultâneos, processe com a visão periférica o anel de tempo e elimine primeiro o alvo em risco de desaparecer.',
      },
      {
        title: 'Protocolo 4: Frenagem com Músculos Antagonistas (Níveis 13–15)',
        description: 'Em velocidades altas, acione os extensores do punho para frear o cursor rigidamente sobre o centro, evitando derrapagens por inércia.',
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
  title: "Teste de precisão do mouse: flicks no centro",
  subtitle: "Dois alvos que encolhem · centro vale o dobro · +2 s por acerto",
  startButtonText: "INICIAR DRILL",
  playAgainText: "Jogar novamente",
  shareText: "Compartilhar resultado",
  exitText: "Sair",
  accuracyLabel: "Precisão",
  targetHitsLabel: "Alvos atingidos",
  bullseyesLabel: "No Alvo (Centro)",
  peakLevelLabel: "Nível Máximo",
  rulesTitle: "Instruções do Drill e Sistema de Pontuação",
  rulesItems: [
    { num: "1", text: "Tiro no Centro (Alvo)", highlight: "+200 PTS / +2s (máx. 60s)", result: "Precisão cirúrgica no núcleo" },
    { num: "2", text: "Tiro Padrão", highlight: "+100 PTS / +2s (máx. 60s)", result: "Aquisição periférica rápida" },
    { num: "3", text: "Progressão de Nivel", highlight: "+1 Nível / 1400 PTS", result: "Alvos encolhem e decaem mais rápido" },
    { num: "4", text: "Erro ou Tempo Esgotado", highlight: "Reset de combo", result: "Penalidade deduz -1s" }
  ],
};

export default function PrecisionFlickShotPage() {
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
      <PrecisionFlickShotClient copy={copyPt} />
      <DrillGuide {...guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
