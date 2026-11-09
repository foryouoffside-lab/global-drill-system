import AimTrainerClient from '@/app/drills/motor/hand-eye-coordination/aim-trainer/AimTrainerClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { pickSources } from '@/lib/drillSources';

// ============================================================
// Native research: treino de mira online, aim trainer grátis, teste de mira,
// precisão do mouse, treino de mira FPS, treino de flick, aquecer a mira,
// teste de reflexo, mira no Valorant e melhorar a mira no CS2.
// ============================================================

export const metadata = {
  title: "Aim Trainer Online Grátis | Clique nos Alvos | SkillDrills",
  description: "Aim trainer grátis no navegador: clique em dois alvos em movimento antes que sumam, acumule combos e veja sua taxa de acerto. Sem download e sem cadastro.",
  keywords: ['aim trainer', 'aim trainer online', 'aim trainer grátis', 'aim trainer no navegador', 'aquecer a mira'],
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer',
    languages: getAlternateLanguages('/drills/motor/hand-eye-coordination/aim-trainer'),
  },
  openGraph: { images: [{ url: "https://skilldrills.online/opengraph-image", width: 1200, height: 630 }],
    title: 'Aim Trainer Online Grátis | Clique nos Alvos | SkillDrills',
    description: 'Aim trainer grátis: clique em dois alvos em movimento antes que sumam e veja sua taxa de acerto.',
    url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { images: ["https://skilldrills.online/opengraph-image"],
    card: 'summary_large_image',
    title: 'Aim Trainer Online Grátis | Clique nos Alvos | SkillDrills',
    description: 'Aim trainer online no navegador: alvos que ficam menores e mais rápidos a cada nível.',
  },
  robots: { index: true, follow: true },
};

// --- Structured Data Schemas ---

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Início', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Central de Treinos', item: 'https://skilldrills.online/pt/drills' },
    { '@type': 'ListItem', position: 3, name: 'Controle Motor & Precisão', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 4, name: 'Coordenação Olho-Mão', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 5, name: 'Aim Trainer', item: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer' },
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication', "sameAs": ["https://en.wikipedia.org/wiki/Fitts%27s_law", "https://en.wikipedia.org/wiki/Hand%E2%80%93eye_coordination"],
  inLanguage: 'pt-BR',
  name: 'Aim Trainer Online Grátis',
  alternateName: ['Aim Trainer', 'Aim Trainer Online', 'Aim Trainer Grátis'],
  applicationCategory: 'HealthApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  description:
    'Aim trainer gratuito no navegador: clique em dois alvos em movimento antes que desapareçam.',
  browserRequirements: 'Navegador web moderno com suporte a JavaScript e Pointer Lock (Chrome, Edge, Safari, Firefox)',
  softwareVersion: '2.0',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'pt-BR',
  name: 'Aim Trainer Online Grátis | SkillDrills',
  url: 'https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer',
  description:
    'Aim trainer com alvos em movimento que ficam menores e mais rápidos a cada nível.',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requer navegador moderno com suporte a JavaScript e Pointer Lock.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  author: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  isAccessibleForFree: true,
  learningResourceType: 'Educational Game',
  teaches: 'Precisão de mira, micro-flicks, controle do mouse, reflexos rápidos, coordenação visuomotora',
};


const videoGameSchema = {
  "@context": "https://schema.org",
  "@type": "VideoGame",
  "inLanguage": "pt-BR",
  "name": "Aim Trainer Online",
  "url": "https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer",
  "description": "Aim trainer 2D gratuito no navegador para jogos FPS: treine aquisição de alvo, precisão do mouse e velocidade de clique.",
  "dateModified": "2026-11-09",
  "gamePlatform": "Web Browser",
  "genre": ["Aim Trainer", "FPS Training", "Hand-Eye Coordination"],
  "playMode": "SinglePlayer",
  "applicationCategory": "Game",
  "operatingSystem": "Web Browser",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'pt-BR',
  name: 'Como treinar mira e reflexos no navegador',
  description: 'Passo a passo para melhorar a mira e a velocidade de reação com o simulador da SkillDrills.',
  step: [
    {
      '@type': 'HowToStep',
      "position": 1,
      "url": "https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer#step-1",
      
      name: 'Iniciar o Treino',
      text: 'Clique em "Iniciar Treino": o cursor é travado (Pointer Lock) e, após 3 segundos de contagem, o cronômetro começa em 45 segundos. Esc encerra a qualquer momento.',
    },
    {
      '@type': 'HowToStep',
      "position": 2,
      "url": "https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer#step-2",
      
      name: 'Identificar o Alvo',
      text: 'Sempre há dois alvos na tela. Eles se movem em direções aleatórias, quicam nas bordas e somem depois de pouco tempo.',
    },
    {
      '@type': 'HowToStep',
      "position": 3,
      "url": "https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer#step-3",
      
      name: 'Flick Rápido e Clique Central',
      text: 'Coloque a mira sobre um alvo e clique. Acerto dá pontos e +2 s (máximo 60 s); clique no vazio ou alvo perdido zera o combo e tira 1 s.',
    },
    {
      '@type': 'HowToStep',
      "position": 4,
      "url": "https://skilldrills.online/pt/drills/motor/hand-eye-coordination/aim-trainer#step-4",
      
      name: 'Acumular Combos e Subir de Nível',
      text: 'Acertos seguidos sobem o multiplicador até 3,0×. O nível sobe a cada 1.750 pontos e a partida termina quando o tempo chega a 0.',
    },
  ],
};

const faqs = [
  {
    q: "O que é um Aim Trainer e como funciona este?",
    a: "Um aim trainer mede a rapidez e a precisão com que você clica em alvos com o mouse. Aqui sempre há dois alvos em movimento na tela. O tempo começa em 45 segundos: cada acerto soma +2 s (máximo 60 s), cada clique errado ou alvo perdido tira 1 s, e a partida acaba em 0. Grátis, sem download e sem cadastro.",
  },
  {
    q: "Como a pontuação é calculada?",
    a: "Cada acerto vale 100 pontos multiplicados pelo combo (1,1× a partir de 3 acertos seguidos até 3,0× a partir de 50) e por um bônus de nível. Clique errado ou alvo perdido zera o combo.",
  },
  {
    q: "Como a dificuldade aumenta?",
    a: "O nível sobe a cada 1.750 pontos, sem limite. Até o nível 15, o raio dos alvos cai de 26 px para 12 px (até 8 px com combo alto), a velocidade sobe de 80 px/s para 370 px/s e o tempo de vida de cada alvo cai de 2,8 s para 0,4 s.",
  },
  {
    q: "O que acontece quando eu erro?",
    a: "O combo volta para 1,0× e você perde 1 segundo. Clicar sem parar não compensa.",
  },
  {
    q: "Como a Lei de Fitts se aplica a este aim trainer?",
    a: "A Lei de Fitts relaciona o tempo de movimento à razão entre distância e tamanho do alvo (Índice de Dificuldade). Como os alvos ficam menores a cada nível, o índice sobe e o mouse precisa de controle mais fino.",
  },
  {
    q: "Este aim trainer ajuda no Valorant ou no CS2?",
    a: "Pode servir como aquecimento complementar. Ele treina cliques rápidos em alvos 2D em movimento, não a mira 3D de um jogo; não há garantia de melhora dentro do jogo.",
  },
  {
    q: "Qual é uma boa pontuação no Aim Trainer?",
    a: "Pelas faixas editoriais da SkillDrills: menos de 8.000 pontos iniciante, 8.000–17.999 em desenvolvimento, 18.000–31.999 boa, 32.000–47.999 alta e 48.000 ou mais muito alta. São referências de treino, não estatísticas de usuários.",
  },
  {
    q: "Posso ajustar a sensibilidade do mouse?",
    a: "Sim, pelo multiplicador de sensibilidade nas configurações dos treinos. Não existe conversão automática do seu cm/360 do jogo; ajuste pela sensação.",
  },
  {
    q: "Funciona no celular ou em tela touch?",
    a: "Não. O aim trainer usa Pointer Lock e precisa de um mouse em um navegador de computador.",
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  dateModified: '2026-11-09',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function AimTrainerPortuguesePage() {
  const sources = pickSources('fitts1954', 'mackenzie1992', 'elliott2010', 'woodworth1899', 'woods2015');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <AimTrainerClient
        copy={{
          title: 'Aim Trainer Online Grátis',
          subtitle: 'Dois alvos em movimento • Taxa de acerto • Combos',
          caption: 'Clique nos dois alvos em movimento antes que sumam. Acerto +2 s, erro ou alvo perdido -1 s.',
          startButtonText: 'INICIAR TREINO',
          playAgainText: 'Jogar Novamente',
          shareText: 'Compartilhar Pontuação',
          exitText: 'Sair',
          rulesTitle: 'Instruções & Sistema de Pontuação',
          aboutTitle: 'Sobre o Aim Trainer',
          rulesItems: [
            {
              num: "1",
              text: "Acerto no Alvo",
              highlight: "+100 PTS / +2 s (máx. 60 s)",
              result: "× multiplicador de combo"
            },
            {
              num: "2",
              text: "Combo Contínuo",
              highlight: "Até 3,0× Multiplicador",
              result: "Encadeie acertos limpos sem errar"
            },
            {
              num: "3",
              text: "Progressão de Nível",
              highlight: "+1 Nível / 1750 PTS",
              result: "Alvos encolhem e aceleram"
            },
            {
              num: "4",
              text: "Erro e Expiração",
              highlight: "Reset de Combo",
              result: "-1 s no cronômetro"
            }
          ]
        }}
      />

      <DrillGuide
        eyebrow="Psicofísica do Controle Motor & Interação Humano-Computador (IHC)"
        title="A Ciência do Aim Trainer: Lei de Fitts e Controle do Mouse"
        sources={sources}
      >
        <p>
          O <strong>Aim Trainer</strong> da SkillDrills é grátis e roda no navegador: dois alvos em movimento para clicar antes que sumam. A aquisição de alvos com mouse é uma das tarefas de coordenação motora fina mais exigentes estudadas na interação humano-computador (IHC) e na psicofísica esportiva. Seja para dominar ângulos em jogos de tiro tático ou em cirurgias guiadas por vídeo, o sistema neuromuscular humano precisa converter estímulos visuais bidimensionais em contrações físicas rápidas e submilimétricas do punho e antebraço (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>A Lei de Fitts e o Índice de Dificuldade (ID)</h3>
        <p>
          Em 1954, Paul M. Fitts provou que o tempo de movimento (\(MT\)) até um alvo é proporcional à distância (\(D\)) dividida pela largura do alvo (\(W\)):
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 my-3 text-center font-mono text-sm text-cyan-300">
          MT = a + b · log₂(2D / W) = a + b · ID
        </div>
        <p>
          O componente logarítmico é denominado <strong>Índice de Dificuldade (ID)</strong>. No <em>Aim Trainer</em> da SkillDrills, o raio dos alvos cai de 26 para 12 pixels até o nível 15 (até 8 pixels com combo alto) e a velocidade aumenta; a largura menor (\(W\)) eleva o ID (Fitts, 1954; MacKenzie, 1992).
        </p>

        <h3>O Modelo de Dois Componentes do Movimento de Mira (Woodworth 1899; Elliott et al. 2010)</h3>
        <p>
          O ato de mirar não é um movimento isolado e uniforme. Estudos indicam que ele se divide em duas etapas neurofisiológicas:
        </p>
        <ol className="list-decimal pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Impulso Balístico Inicial (Fase de Malha Aberta):</strong> Uma explosão neuromuscular disparada pelo córtex motor que cobre 80% a 90% da distância em 120 a 180 ms, sem correção visual intermediária.
          </li>
          <li>
            <strong>Desaceleração Terminal e Ajuste Fino (Fase de Malha Fechada):</strong> Ao se aproximar do alvo, o cérebro processa o erro visual e realiza microcorreções para estabilizar o cursor sobre o alvo antes do clique.
          </li>
        </ol>
        <p>
          Jogadores iniciantes sofrem com <em>over-flicking</em> (passar do alvo e precisar recuar) ou <em>under-flicking</em> (parar antes e rastejar até o alvo). Atletas de elite calibram o impulso inicial para frear exatamente em cima da área de impacto (Elliott et al., 2010; Woods et al., 2015).
        </p>

        <h3>Latenência de Entrada e Frequência de Atualização</h3>
        <p>
          Para o clique perfeito, a latência do sistema deve ser mínima. Conforme documentado por Woods et al. (2015), os atrasos neurosensoriais somam entre 130 e 190 ms. Monitores de 144Hz ou 240Hz reduzem o tempo de exibição para 6,9 ms ou 4,1 ms. Compare suas partidas sempre no mesmo equipamento e com as mesmas configurações.
        </p>

        <h3>Faixas de Pontuação no Aim Trainer (referência SkillDrills)</h3>
        <p>
          Faixas editoriais da SkillDrills para comparar suas próprias partidas, que começam com 45 segundos (+2 s por acerto, máximo 60 s). Não são percentis de população nem ranks de jogos:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left border-collapse border border-white/10 text-xs sm:text-sm">
            <thead>
              <tr className="bg-white/5 text-slate-200">
                <th className="p-2.5 border border-white/10 font-bold">Faixa</th>
                <th className="p-2.5 border border-white/10 font-bold">Pontuação</th>
                <th className="p-2.5 border border-white/10 font-bold">Nível</th>
                <th className="p-2.5 border border-white/10 font-bold">Precisão</th>
                <th className="p-2.5 border border-white/10 font-bold">Classificação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-emerald-400">Faixa 1 (Muito alta)</td>
                <td className="p-2.5 border border-white/10">&gt; 48.000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 12+</td>
                <td className="p-2.5 border border-white/10">&gt; 95% (Combo 25+)</td>
                <td className="p-2.5 border border-white/10">Pontuação muito alta no treino</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-cyan-400">Faixa 2 (Alta)</td>
                <td className="p-2.5 border border-white/10">32.000 – 47.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 9–11</td>
                <td className="p-2.5 border border-white/10">88% – 94% (Combo 18–24)</td>
                <td className="p-2.5 border border-white/10">Pontuação alta</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-blue-400">Faixa 3 (Boa)</td>
                <td className="p-2.5 border border-white/10">18.000 – 31.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 6–8</td>
                <td className="p-2.5 border border-white/10">78% – 87% (Combo 12–17)</td>
                <td className="p-2.5 border border-white/10">Pontuação boa</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-amber-400">Faixa 4 (Intermediária)</td>
                <td className="p-2.5 border border-white/10">8.000 – 17.999 PTS</td>
                <td className="p-2.5 border border-white/10">Level 3–5</td>
                <td className="p-2.5 border border-white/10">65% – 77% (Combo 6–11)</td>
                <td className="p-2.5 border border-white/10">Em desenvolvimento</td>
              </tr>
              <tr>
                <td className="p-2.5 border border-white/10 font-bold text-rose-400">Faixa 5 (Inicial)</td>
                <td className="p-2.5 border border-white/10">&lt; 8.000 PTS</td>
                <td className="p-2.5 border border-white/10">Level 1–2</td>
                <td className="p-2.5 border border-white/10">&lt; 65% (Combo &lt; 6)</td>
                <td className="p-2.5 border border-white/10">Cliques Ansiosos / Imprecisão</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>4 Princípios Práticos para Desenvolver Mira Precisa</h3>
        <p>
          Para comprimir sistematicamente a latência de aquisição de alvos e maximizar a precisão em micro-flicks, aplique estes quatro protocolos neuromotores baseados em evidências durante seu treino:
        </p>
        <ul className="list-disc pl-5 space-y-2 my-3 text-slate-300">
          <li>
            <strong>Flick Inicial Firme (Woodworth, 1899):</strong> Cubra a maior parte da distância até o alvo com um movimento contínuo e rápido, sem pausas ou hesitações no trajeto.
          </li>
          <li>
            <strong>Desaceleração Suave (Fitts, 1954):</strong> Reduza a velocidade próximo ao centro do alvo com controle suave dos dedos e pulso para absorver o momentum.
          </li>
          <li>
            <strong>Constância na Sensibilidade (MacKenzie, 1992):</strong> Mantenha a mesma rotação (cm/360) em todos os seus jogos para consolidar a memória muscular.
          </li>
          <li>
            <strong>Empunhadura Relaxada (Woods et al., 2015):</strong> Evite apertar o mouse com força excessiva para que o ato de clicar não desvie a mira da rota.
          </li>
        </ul>

        <h3>Perguntas Frequentes (FAQ)</h3>
        <div className="space-y-4 my-4">
          {faqs.map((f) => (
            <div key={f.q} className="border-b border-white/10 pb-3">
              <h4 className="font-bold text-white text-sm mb-1">{f.q}</h4>
              <p className="text-xs sm:text-sm text-slate-300">{f.a}</p>
            </div>
          ))}
        </div>
      </DrillGuide>
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
