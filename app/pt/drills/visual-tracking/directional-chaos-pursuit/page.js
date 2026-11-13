import DirectionalChaosPursuitClient from '@/app/drills/visual-tracking/directional-chaos-pursuit/DirectionalChaosPursuitClientLoader';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';
import RelatedDrills from '@/components/drill/RelatedDrills';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { pickSources } from '@/lib/drillSources';
import { breadcrumbItems } from '@/lib/i18n/breadcrumbLabels';

const url = 'https://skilldrills.online/pt/drills/visual-tracking/directional-chaos-pursuit';
const name = "Rastreamento com Mudanças de Direção";
const title = `${name} | SkillDrills`;
const description = "Rastreamento com mudanças de direção grátis no navegador: o alvo muda de direção e velocidade ao acaso e quica nas bordas. Ajuste velocidade e duração.";

export const metadata = {
  title,
  description,
  keywords: ["rastreamento com mudanças de direção","alvo imprevisível","acompanhar alvo com os olhos","exercício de rastreamento ocular","mudança de direção","exercício para os olhos no navegador"],
  alternates: { canonical: url, languages: getAlternateLanguages('/drills/visual-tracking/directional-chaos-pursuit') },
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
  name: "Rastreamento com Mudanças de Direção (app web)",
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
  name: "Como fazer: Rastreamento com Mudanças de Direção",
  description: "Rastreamento com Mudanças de Direção em quatro passos simples.",
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
    "name": "Perceba as mudanças",
    "text": "Quando o alvo mudar de direção, reposicione o olhar nele com calma."
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
    "q": "O que é o rastreamento com mudanças de direção?",
    "a": "Um exercício no navegador em que você acompanha com os olhos um alvo que muda de direção de forma imprevisível. Duração (30 a 120 segundos), velocidade, tamanho e linha são ajustáveis. O resultado se baseia na posição do ponteiro."
  },
  {
    "q": "Como o alvo se move?",
    "a": "A cada quadro entra um pequeno impulso aleatório na velocidade, dentro de um limite máximo. Na borda, o alvo quica e fica um pouco mais rápido. Ele não reage ao cursor."
  },
  {
    "q": "O exercício mede o movimento dos meus olhos?",
    "a": "Não. O navegador não vê o seu olhar; conhece apenas a posição desenhada do alvo e os ajustes. O cursor é só um apoio e não prova para onde você olha. Ao final, a tela mostra só a distância do ponteiro ao alvo, sem nota."
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
  "heading": "Guia: Rastreamento com Mudanças de Direção",
  "intro": [
    "Neste rastreamento com mudanças de direção, o alvo recebe a cada quadro um pequeno impulso aleatório: direção e velocidade mudam o tempo todo e ele quica nas bordas da tela. Sem trajetória fixa, não dá para prever o movimento; quando o alvo se adianta, uma sacada de correção costuma trazê-lo de volta à visão central (Krauzlis, 2004).",
    "O navegador conhece apenas a posição desenhada do alvo e seus ajustes, não para onde seus olhos estão olhando. Só a distância do ponteiro ao alvo e as sessões concluídas são exibidas. O resultado é um registro de prática repetível, baseado na posição do ponteiro.",
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
        "Continuar no alvo apesar das mudanças"
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
        "name": "Não tente adivinhar demais",
        "desc": "A trajetória muda sempre. Em vez de prever a próxima posição, mantenha o alvo no centro do olhar e volte a ele num só movimento.",
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
  "audience": "Quem quer experimentar o exercício \"Rastreamento com Mudanças de Direção\" no navegador e praticar o acompanhamento de um alvo em movimento de forma leve."
},
  faqs,
  sources: pickSources('bahill1980', 'barnes2008', 'krauzlis2004', 'robinson1965', 'rashbass1961', 'woods2015'),
  related: [
  {
    "href": "/pt/drills/visual-tracking/constant-slow-pursuit",
    "label": "Exercício de Perseguição Visual"
  },
  {
    "href": "/pt/drills/visual-tracking/dynamic-evasion-pursuit",
    "label": "Alvo que Muda de Direção sem Aviso"
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
      <DirectionalChaosPursuitClient
        copy={{
          title: name,
          subtitle: "Acompanhar um alvo imprevisível com os olhos",
          description: "Rastreamento com mudanças de direção: o alvo muda de direção e velocidade ao acaso o tempo todo. O navegador não registra seu olhar e só mede a distância do ponteiro ao alvo; veja o resultado como registro de prática baseado no ponteiro.",
        }}
      />
      <DrillGuide guide={guideProps} />
      <RelatedDrills />
      <DrillFooter />
    </>
  );
}
