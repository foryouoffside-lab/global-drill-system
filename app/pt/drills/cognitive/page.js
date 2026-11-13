import CognitiveHubClient from '@/app/drills/cognitive/CognitiveHubClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const cognitiveDrills = DRILLS.filter((d) => d.category === 'cognitive');

export const metadata = {
  title: 'Treino cerebral e concentração | SkillDrills',
  description: 'Treino cerebral grátis: 8 jogos para treinar o cérebro online, com atenção seletiva e dividida, reação de escolha, Stroop e tabela de Schulte. Sem cadastro.',
  keywords: [
    'treino cerebral', 'jogos para treinar o cérebro', 'exercícios para o cérebro', 'treino cognitivo',
    'teste de atenção', 'velocidade de processamento', 'reação de escolha', 'atenção seletiva',
    'teste Stroop', 'tabela de Schulte', 'jogos para treinar o cérebro online', 'jogos mentais grátis',
    'ginástica cerebral', 'atenção dividida', 'agilidade mental'
  ],
  openGraph: {
    title: 'Treino cerebral e concentração | SkillDrills',
    description: 'Treino cerebral grátis: 8 jogos para treinar o cérebro online, com atenção seletiva e dividida, reação de escolha, Stroop e tabela de Schulte. Sem cadastro.',
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/cognitive',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Treino Cognitivo e Exercícios Mentais no SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Treino cerebral e concentração | SkillDrills',
    description: 'Treino cerebral grátis no navegador: 8 exercícios para o cérebro com atenção, reação de escolha e velocidade de processamento.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/cognitive',
    languages: getAlternateLanguages('/pt/drills/cognitive'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Exercícios de Performance", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Treino Cognitivo & Mental", "item": "https://skilldrills.online/pt/drills/cognitive" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12",
  "name": "Treino Cognitivo & Ginástica Cerebral (8 Exercícios)",
  "url": "https://skilldrills.online/pt/drills/cognitive",
  "description": "8 exercícios de treino cerebral no navegador para atenção seletiva e dividida, reação de escolha, efeito Stroop, tabela de Schulte e velocidade de processamento.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": cognitiveDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'pt', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/pt${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-12",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que é treino cognitivo e como ele fortalece a mente?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O treino cognitivo reúne tarefas repetíveis que exigem atenção seletiva, atenção dividida, troca de regra e velocidade de processamento. Em vez de decorar conteúdo, você pratica escolher a resposta certa sob pressão de tempo. Com prática regular, a pessoa costuma ficar mais rápida e precisa na mesma tarefa; um efeito duradouro no funcionamento do cérebro não está comprovado."
      }
    },
    {
      "@type": "Question",
      "name": "Quais capacidades mentais essenciais são trabalhadas nestes exercícios?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os 8 exercícios cobrem cinco áreas: velocidade de processamento (pareamento de símbolos e leitura RSVP), inibição de distrações (exercício Stroop), atenção dividida e multitarefa (vários fluxos ao mesmo tempo), busca visual com a tabela de Schulte e troca de regra (reação de escolha com regra que muda). Os exercícios de memória ficam na categoria Memória."
      }
    },
    {
      "@type": "Question",
      "name": "O que é o teste de Stroop e por que ele é crucial para o foco e autocontrole?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Descrito por John Ridley Stroop em 1935, o efeito Stroop é a interferência que surge quando o significado de uma palavra (como VERMELHO) entra em conflito com a cor da tinta (por exemplo, verde): é preciso frear o reflexo de leitura para responder a cor. O teste clássico mede a diferença de tempo entre itens congruentes e incongruentes. O exercício Stroop do SkillDrills é prática: você escolhe a cor da tinta e são registrados pontuação, precisão e nível, sem escore de interferência."
      }
    },
    {
      "@type": "Question",
      "name": "Como a tabela de Schulte ajuda na velocidade de leitura e visão periférica?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A tabela de Schulte é uma grade de números embaralhados, associada ao psiquiatra Walter Schulte, que você percorre a partir do 1 em ordem crescente; a versão 5×5 é a mais conhecida. No SkillDrills, a grade começa em 3×3 e aumenta a cada tabela concluída. Manter o olhar no centro e achar o próximo número com a visão periférica é uma boa estratégia de prática, mas nenhum ganho numérico em visão periférica ou leitura é garantido: acompanhe o seu próprio tempo."
      }
    },
    {
      "@type": "Question",
      "name": "Com que frequência e por quanto tempo devo praticar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não existe uma duração ideal comprovada. Sessões curtas e concentradas, de cerca de 10 a 15 minutos algumas vezes por semana, são mais fáceis de comparar do que sessões longas e cansativas. Faça uma pausa quando a sua precisão cair."
      }
    },
    {
      "@type": "Question",
      "name": "O treinamento mental e cognitivo online melhora o desempenho em esports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não de forma garantida. Os ganhos aparecem principalmente em tarefas muito parecidas com as treinadas; a transferência para jogos, trabalho ou dia a dia é incerta e varia de pessoa para pessoa. Busca visual e ignorar distrações lembram algumas ações de jogo, como ler o minimapa, e podem servir como prática complementar."
      }
    },
    {
      "@type": "Question",
      "name": "Os exercícios cognitivos são recomendados para crianças, adultos e idosos?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os exercícios podem ser usados por adolescentes e adultos, com dificuldade que aumenta a cada nível. Use-os para acompanhar os seus próprios resultados."
      }
    },
    {
      "@type": "Question",
      "name": "É necessária alguma configuração técnica ou equipamento especial para treinar?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. Todos os exercícios funcionam direto no navegador, com mouse ou toque, sem download nem cadastro. Para resultados mais comparáveis, use o mesmo aparelho e navegador, feche abas pesadas em segundo plano e evite trocar de dispositivo entre as sessões."
      }
    }
  ]
};

export default function LocalizedCognitiveHubClientPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CognitiveHubClient faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))} />
    </>
  );
}

