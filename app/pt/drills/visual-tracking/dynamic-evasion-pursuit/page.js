import DynamicEvasionPursuitClient from '@/app/drills/visual-tracking/dynamic-evasion-pursuit/DynamicEvasionPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/dynamic-evasion-pursuit';
const name = "Alvo que Muda de Direção sem Aviso";
const title = `${name} | SkillDrills`;
const description = "Alvo que muda de direção sem aviso: ele segue em linha reta e vira para uma direção aleatória a cada 0,5 s. Exercício grátis de rastreamento no navegador.";

export const metadata = {
  title,
  description,
  keywords: ["alvo que muda de direção sem aviso","rastreamento reativo","mudança de direção brusca","sacada de correção","acompanhar alvo com os olhos","exercício para os olhos no navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/dynamic-evasion-pursuit') },
  openGraph: { images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }], title, description, url, siteName: 'SkillDrills', locale: 'pt_BR', type: 'website' },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbItems('pt', url, 'visual-tracking', name, true),
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name,
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  description,
  url,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online/pt' },
  inLanguage: 'pt',
  dateModified: '2026-11-12',
};

const webAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: "Alvo que Muda de Direção sem Aviso (app web)",
  applicationCategory: 'GameApplication',
  operatingSystem: 'All',
  browserRequirements: "Navegador atual com suporte a HTML5 Canvas",
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  url,
  inLanguage: 'pt',
  dateModified: '2026-11-12',
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name,
  url,
  description,
  genre: ['Visual training', 'Eye tracking exercise'],
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  applicationCategory: 'Game',
  inLanguage: 'pt',
  dateModified: '2026-11-12',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: "Como fazer: Alvo que Muda de Direção sem Aviso",
  description: "Alvo que Muda de Direção sem Aviso em quatro passos simples.",
  step: [
  {
    "@type": "HowToStep",
    "position": 1,
    "name": "Fique em posição confortável",
    "text": "Sente a uma distância confortável da tela, com ombros e mão relaxados."
  },
  {
    "@type": "HowToStep",
    "position": 2,
    "name": "Perceba a virada",
    "text": "Não perca o momento em que o alvo vira e reposicione o olhar na nova direção."
  },
  {
    "@type": "HowToStep",
    "position": 3,
    "name": "Acompanhe com os olhos",
    "text": "Siga o alvo com os olhos, não o cursor, e termine a sessão de 30 a 120 segundos."
  },
  {
    "@type": "HowToStep",
    "position": 4,
    "name": "Mude um ajuste por vez",
    "text": "Depois aumente a velocidade ou ative Ocultar linha ou a velocidade aleatória, um de cada vez."
  }
].map((st) => ({ ...st, url: `${url}#step-${st.position}` })),
};

const faqs = [
  {
    "q": "O que é o exercício do alvo que muda de direção sem aviso?",
    "a": "Um exercício no navegador em que você acompanha com os olhos um alvo que vira bruscamente em intervalos curtos. Duração (30 a 120 segundos), velocidade, tamanho e linha são ajustáveis. Não é teste de visão nem tratamento."
  },
  {
    "q": "O alvo foge do meu cursor?",
    "a": "Não. As viradas acontecem ao acaso a cada 0,5 segundo, mais ou menos, e não dependem do cursor. Com a linha visível, um traço curto mostra a direção atual."
  },
  {
    "q": "O exercício mede o movimento dos meus olhos?",
    "a": "Não. O navegador não vê o seu olhar; conhece apenas a posição desenhada do alvo e os ajustes. O cursor é só um apoio e não prova para onde você olha. Não há pontuação."
  },
  {
    "q": "O que muda com a velocidade aleatória?",
    "a": "A velocidade do alvo varia de forma irregular e fica mais difícil de prever. Ative depois que a velocidade base estiver confortável, e não junto com a linha oculta."
  },
  {
    "q": "Devo deixar a linha visível?",
    "a": "Com a linha visível fica mais fácil prever o movimento, o que ajuda no começo. Depois você pode ocultá-la para aumentar a dificuldade. Não existe escolha certa: compare apenas ajustes iguais."
  },
  {
    "q": "Com quais ajustes devo começar?",
    "a": "Sessões de 30 a 60 segundos, velocidade lenta (0,5 a 1,0×) e linha visível. A velocidade vai de 0,5 a 9,0× e o tamanho do alvo de 10 a 50 px; mude um ajuste por vez."
  },
  {
    "q": "O exercício melhora a visão ou a mira?",
    "a": "Não há garantia. É um exercício de acompanhar um alvo com os olhos; não promete melhorar a visão, tratar problemas oculares nem melhorar a mira em FPS. Em caso de desconforto ocular, procure um profissional."
  },
  {
    "q": "A tela e o ambiente influenciam?",
    "a": "Sim. Taxa de atualização, brilho, contraste, tamanho e distância da tela e o navegador mudam a aparência do alvo. Atrasos de entrada e de exibição também contam (Woods et al., 2015), então compare nas mesmas condições."
  },
  {
    "q": "Por quanto tempo devo praticar?",
    "a": "Em blocos curtos de 5 a 10 minutos, com pausas. Se os olhos cansarem ou ressecarem, pare, pisque e olhe para longe. Pare se houver dor, tontura, náusea ou dor de cabeça."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

const guideProps = {
  ...{
  "heading": "Guia: Alvo que Muda de Direção sem Aviso",
  "intro": [
    "No exercício do alvo que muda de direção sem aviso, o alvo anda em linha reta e, a cada 0,5 segundo mais ou menos (0,35 a 0,65 s com velocidade aleatória), vira para uma nova direção e velocidade ao acaso; nas bordas, ele quica. Depois da virada o olho fica para trás até que uma sacada de correção feche a distância e o acompanhamento suave recomece (Rashbass, 1961; Krauzlis, 2004).",
    "O navegador conhece apenas a posição desenhada do alvo e seus ajustes, não para onde seus olhos estão olhando. Não há pontuação: só as sessões concluídas são contadas. O resultado é um registro de prática repetível, não uma medida clínica nem um teste de visão.",
    "Use uma distância confortável e compare sempre a mesma tela e o mesmo navegador. Taxa de atualização e dispositivo de entrada mudam a exibição (Woods et al., 2015). Pare se sentir dor, tontura, náusea ou visão embaçada persistente."
  ],
  "benchmarks": {
    "title": "Etapas de prática (referência)",
    "headers": [
      "Etapa",
      "Objetivo"
    ],
    "rows": [
      [
        "1",
        "Velocidade lenta, linha visível"
      ],
      [
        "2",
        "Manter a velocidade base com conforto"
      ],
      [
        "3",
        "Voltar rápido ao alvo depois de cada virada"
      ],
      [
        "4",
        "Ocultar a linha"
      ],
      [
        "5",
        "Adicionar velocidade aleatória"
      ]
    ],
    "note": "Esta tabela é uma orientação de prática do SkillDrills. Não é norma de função visual, estatística de usuários nem percentil."
  },
  "techniques": {
    "title": "4 dicas de prática",
    "items": [
      {
        "name": "Volte num só movimento",
        "desc": "Depois da virada, não varra a tela com os olhos: identifique a nova direção e retome o acompanhamento com suavidade. Não é preciso prever cada mudança.",
        "tips": "Se ficar desconfortável, reduza a velocidade e mostre a linha de novo."
      },
      {
        "name": "Olhe o alvo, não o cursor",
        "desc": "O ponteiro é só um apoio. Siga o alvo com os olhos e relaxe ombros e mão.",
        "tips": "Confira de vez em quando se a cabeça ou o pescoço estão girando junto."
      },
      {
        "name": "Uma dificuldade por vez",
        "desc": "Aumente separadamente a velocidade, a linha oculta e a velocidade aleatória. Se o conforto cair, volte ao ajuste anterior.",
        "tips": "Depois de cada mudança, compare de novo."
      },
      {
        "name": "Sessões curtas com pausas",
        "desc": "Pratique em blocos de 5 a 10 minutos, pisque e olhe para longe. Mais tempo não é necessariamente melhor.",
        "tips": "Dor, tontura ou náusea: pare na hora."
      }
    ]
  },
  "steps": [
    "Sente a uma distância confortável, com ombros e mão relaxados.",
    "Comece com 30 a 60 segundos, velocidade lenta e linha visível.",
    "Siga o alvo com os olhos, não o cursor.",
    "Depois aumente a velocidade ou um ajuste por vez."
  ],
  "audience": "Quem quer experimentar o exercício \"Alvo que Muda de Direção sem Aviso\" no navegador e praticar o acompanhamento de um alvo em movimento de forma leve."
},
  faqs,
  sources: pickSources('bahill1980', 'rashbass1961', 'krauzlis2004', 'robinson1965', 'barnes2008', 'woods2015'),
  related: [
  {
    "href": "/pt/drills/visual-tracking/constant-slow-pursuit",
    "label": "Exercício de Perseguição Visual"
  },
  {
    "href": "/pt/drills/visual-tracking/directional-chaos-pursuit",
    "label": "Rastreamento com Mudanças de Direção"
  },
  {
    "href": "/pt/drills/visual-tracking/ghosting-suppress-pursuit",
    "label": "Rastreamento com Rastros Fantasma"
  },
  {
    "href": "/pt/drills/visual-tracking/infinity-pursuit",
    "label": "Exercício Ocular em Oito"
  }
],
};

export default function LocalizedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <DynamicEvasionPursuitClient
        copy={{
          title: name,
          subtitle: "Linhas retas e viradas bruscas",
          description: "Alvo que muda de direção sem aviso: ele vira bruscamente a cada 0,5 s, mais ou menos. O navegador não registra seu olhar e não há pontuação; veja o resultado como registro de prática, não como exame médico.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
