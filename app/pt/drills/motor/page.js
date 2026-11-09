import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: 'Jogos de Mouse: Precisão, Cliques e Controle | SkillDrills',
  description: '8 jogos de mouse grátis no navegador: alvos em movimento, cliques no centro, teste de CPS, arrastar e soltar, mão firme, rastreamento e reação do teclado.',
  keywords: [
    'jogos de mouse', 'jogos de mouse online', 'habilidade no mouse', 'controle do mouse',
    'coordenação olho-mão', 'exercícios com o mouse', 'drills motores grátis'
  ],
  openGraph: {
    title: 'Jogos de Mouse: Precisão, Cliques e Controle | SkillDrills',
    description: '8 jogos de mouse grátis no navegador: alvos em movimento, cliques no centro, teste de CPS, arrastar e soltar, mão firme, rastreamento e reação do teclado.',
    type: 'website',
    url: 'https://skilldrills.online/pt/drills/motor',
    siteName: 'SkillDrills',
    locale: 'pt_BR',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Jogos de mouse no SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jogos de Mouse: Precisão, Cliques e Controle | SkillDrills',
    description: '8 jogos de mouse grátis no navegador: alvos em movimento, cliques no centro, teste de CPS, arrastar e soltar, mão firme, rastreamento e reação do teclado.',
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
  "dateModified": "2026-11-09",
  "name": "Jogos de Mouse: precisão, cliques e controle (8 drills)",
  "url": "https://skilldrills.online/pt/drills/motor",
  "description": "8 jogos de mouse grátis no navegador: alvos em movimento, cliques no centro, teste de CPS, arrastar e soltar, mão firme, rastreamento e reação do teclado.",
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

const faqs = [
  { q: "O que são estes jogos de mouse e o que treinam?", a: "São 8 jogos de mouse grátis no navegador: clicar em alvos em movimento (Aim Trainer), acertar o centro do alvo, clicar alvos em sequência, arrastar e soltar, teste de CPS de 45 segundos, mão firme num corredor estreito, seguir um ponto em movimento e reagir às teclas mostradas na tela. Eles treinam coordenação olho-mão e controle do cursor; o ritmo de melhora varia de pessoa para pessoa." },
  { q: "Qual é a pontuação média de CPS (cliques por segundo) e quais são as técnicas de clique?", a: "No clique tradicional com um único dedo, o ritmo costuma ser menor. Jogadores usam técnicas como o Jitter Click (vibração controlada do antebraço) e o Butterfly Click (alternância rápida entre os dedos indicador e médio), que podem aumentar o CPS, mas variam muito de pessoa para pessoa. Para prevenir LER e tendinite, recomenda-se cadência rítmica sem tensão estática excessiva." },
  { q: "Como o jogo da mão firme e o traçado de caminhos eliminam tremores e instabilidade na mira?", a: "O overshooting (passar do alvo) e as oscilações bruscas costumam vir de dificuldade em frear o movimento. Conduzir o cursor por corredores estreitos e seguir ondas senoidais exige controle contínuo e fino; pratique devagar para reduzir oscilações." },
  { q: "O que afirma a Lei de Fitts e como ela otimiza a relação entre velocidade e precisão do mouse?", a: "A Lei de Fitts estabelece que o tempo de movimento é proporcional ao logaritmo da razão entre distância e largura do alvo (MT = a + b * log2(2D/W)). O controle motor avançado divide o movimento em duas fases: uma varredura balística rápida que cobre 80% a 90% do percurso, seguida de uma micro-desaceleração guiada visualmente para travar no centro sem rebotes." },
  { q: "O jogo de reação do teclado mede velocidade de digitação?", a: "Não. Teclas aparecem na tela (letras, números, símbolos, setas) e você deve apertá-las o mais rápido e certo possível durante 60 segundos, ignorando os avisos falsos. Não mede palavras por minuto (PPM) e não é um testador de teclado para detectar teclas com defeito." },
  { q: "Qual empunhadura e postura oferecem maior estabilidade e precisão de mira com o mouse?", a: "Uma sugestão comum de ergonomia é o apoio do antebraço plano sobre a mesa ou mousepad, evitando pressão concentrada no punho que possa comprimir o túnel do carpo. Uma pegada claw (garra) relaxada ou fingertip (ponta dos dedos) permite micro-ajustes verticais rápidos com os dedos, enquanto o braço coordena varreduras amplas." },
  { q: "Quanto tempo leva para consolidar a memória muscular para controle motor fino?", a: "Sessões curtas e regulares costumam funcionar melhor do que sessões longas e raras. Acompanhe sua evolução comparando suas próprias pontuações ao longo das semanas; o ritmo de melhora varia de pessoa para pessoa." },
  { q: "Quão precisos são os testes de coordenação motora no navegador em comparação com softwares instalados?", a: "O cronômetro interno do navegador (performance.now()) tem resolução de cerca de 1 ms, mas a medição prática é limitada pela taxa de atualização da tela (aprox. 8,3 ms a 120 Hz, 16,6 ms a 60 Hz) e pela taxa de amostragem do mouse (1 ms a 1000 Hz, 8 ms a 125 Hz). Variações abaixo de 5 ms devem ser tratadas como ruído; os testes servem para acompanhar sua evolução no mesmo hardware." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "pt-BR",
  "dateModified": "2026-11-09",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
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
