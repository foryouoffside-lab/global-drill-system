import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: 'Precisão do mouse e treino de mira | SkillDrills',
  description: '9 drills grátis no navegador para precisão do mouse, treino de mira, CPS, velocidade do teclado e coordenação olho-mão.',
  keywords: [
    'teste de precisão do mouse', 'treino de mira', 'teste CPS', 'coordenação olho-mão',
    'velocidade do teclado', 'controle do mouse', 'treino de mira online',
    'precisão de mouse', 'teste de cliques por segundo', 'exercícios de coordenação motora',
    'treino de mão firme', 'teste de rastreamento do mouse', 'treino de precisão FPS',
    'velocidade de digitação', 'drills motores grátis'
  ],
  openGraph: {
    title: 'Precisão do mouse e treino de mira | SkillDrills',
    description: '9 drills grátis no navegador para precisão do mouse, treino de mira, CPS, velocidade do teclado e coordenação olho-mão.',
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/motor',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Precisão do Mouse e Controle Motor no SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Precisão do mouse e treino de mira | SkillDrills',
    description: '9 drills grátis no navegador para precisão do mouse, treino de mira, CPS, velocidade do teclado e coordenação olho-mão.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/pt/drills/motor',
    languages: getAlternateLanguages('/pt/drills/motor'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/pt" },
    { "@type": "ListItem", "position": 2, "name": "Exercícios de Performance", "item": "https://skilldrills.online/pt/drills" },
    { "@type": "ListItem", "position": 3, "name": "Controle Motor & Precisão", "item": "https://skilldrills.online/pt/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-09-20",
  "name": "Teste de precisão do mouse e treino de mira (9 drills)",
  "url": "https://skilldrills.online/pt/drills/motor",
  "description": "9 drills grátis no navegador para precisão do mouse, treino de mira, CPS, velocidade do teclado e coordenação olho-mão.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": motorDrills.map((drill) => {
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
  "dateModified": "2026-09-20",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como os exercícios de habilidades motoras melhoram a coordenação olho-mão?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Os exercícios motores estimulam o ciclo visuomotor conectando a aquisição de alvos na retina pelo córtex visual, o planejamento motor no cerebelo e a transmissão eferente via córtex motor primário para a musculatura da mão. Micro-ajustes frequentes e rápidos fazem parte desse ciclo; o tempo de resposta varia de pessoa para pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Qual é a pontuação média de CPS (cliques por segundo) e quais são as técnicas de clique?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No clique tradicional com um único dedo, o ritmo costuma ser menor. Jogadores usam técnicas como o Jitter Click (vibração controlada do antebraço) e o Butterfly Click (alternância rápida entre os dedos indicador e médio), que podem aumentar o CPS, mas variam muito de pessoa para pessoa. Para prevenir LER e tendinite, recomenda-se cadência rítmica sem tensão estática excessiva."
      }
    },
    {
      "@type": "Question",
      "name": "Como o jogo da mão firme e o traçado de caminhos eliminam tremores e instabilidade na mira?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O overshooting (passar do alvo) e as oscilações bruscas costumam vir de dificuldade em frear o movimento. Conduzir o cursor por corredores estreitos e seguir ondas senoidais exige controle contínuo e fino; pratique devagar para reduzir oscilações."
      }
    },
    {
      "@type": "Question",
      "name": "O que afirma a Lei de Fitts e como ela otimiza a relação entre velocidade e precisão do mouse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Lei de Fitts estabelece que o tempo de movimento é proporcional ao logaritmo da razão entre distância e largura do alvo (MT = a + b * log2(2D/W)). O controle motor avançado divide o movimento em duas fases: uma varredura balística rápida que cobre 80% a 90% do percurso, seguida de uma micro-desaceleração guiada visualmente para travar no centro sem rebotes."
      }
    },
    {
      "@type": "Question",
      "name": "Por que a destreza dos dedos e a independência digital são cruciais para jogos e digitação rápida?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A destreza no teclado depende da independência de cada dedo, superando a ligação tendínea natural entre o anelar e o mindinho. Exercícios de sequenciamento e identificação de teclas isolam a ativação motora de cada dígito, diminuindo o tempo de transição entre teclas, elevando as palavras por minuto (PPM/WPM) e evitando toques acidentais."
      }
    },
    {
      "@type": "Question",
      "name": "Qual empunhadura e postura oferecem maior estabilidade e precisão de mira com o mouse?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Uma sugestão comum de ergonomia é o apoio do antebraço plano sobre a mesa ou mousepad, evitando pressão concentrada no punho que possa comprimir o túnel do carpo. Uma pegada claw (garra) relaxada ou fingertip (ponta dos dedos) permite micro-ajustes verticais rápidos com os dedos, enquanto o braço coordena varreduras amplas."
      }
    },
    {
      "@type": "Question",
      "name": "Quanto tempo leva para consolidar a memória muscular para controle motor fino?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sessões curtas e regulares costumam funcionar melhor do que sessões longas e raras. Acompanhe sua evolução comparando suas próprias pontuações ao longo das semanas; o ritmo de melhora varia de pessoa para pessoa."
      }
    },
    {
      "@type": "Question",
      "name": "Quão precisos são os testes de coordenação motora no navegador em comparação com softwares instalados?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "O cronômetro interno do navegador (performance.now()) tem resolução de cerca de 1 ms, mas a medição prática é limitada pela taxa de atualização da tela (aprox. 8,3 ms a 120 Hz, 16,6 ms a 60 Hz) e pela taxa de amostragem do mouse (1 ms a 1000 Hz, 8 ms a 125 Hz). Variações abaixo de 5 ms devem ser tratadas como ruído; os testes servem para acompanhar sua evolução no mesmo hardware."
      }
    }
  ]
};

export default function MotorDrillsPage() {
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
      <MotorDrillsClient
        faqs={faqSchema.mainEntity.map((e) => ({ q: e.name, a: e.acceptedAnswer.text }))}
      />
    </>
  );
}
