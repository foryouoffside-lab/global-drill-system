import Link from 'next/link';
import KeyboardTesterClient from '@/app/drills/motor/movement-speed/keyboard-tester/KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const PAGE_URL = 'https://skilldrills.online/pt/drills/motor/movement-speed/keyboard-tester';
const TITLE = 'Teste de Teclado Online – Todas as Teclas | SkillDrills';
const DESCRIPTION = 'Teste de teclado online grátis: aperte qualquer tecla para ver se ela funciona, veja event.key e event.code e verifique ghosting e rollover. Funciona com ABNT2.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['teste de teclado', 'teste de teclado online', 'testar teclado', 'teste de teclado abnt2', 'teste anti ghosting', 'teste de rollover'],
  openGraph: {
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630 }],
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    url: PAGE_URL,
    siteName: 'SkillDrills',
    locale: 'pt_BR',
  },
  twitter: { images: ['https://skilldrills.online/opengraph-image'], card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: 'Como faço o teste de teclado nesta página?',
    a: 'Clique no teclado da tela para dar foco a ele e aperte cada tecla uma vez. A tecla acende enquanto está pressionada e fica verde depois de solta; qualquer tecla que nunca ficar verde não chegou ao navegador. O contador mostra quantas teclas do layout você já testou.',
  },
  {
    q: 'O que é ghosting no teclado?',
    a: 'Ghosting é quando o teclado deixa de registrar uma tecla porque outras já estão pressionadas. Muitos teclados compartilham a fiação entre teclas, então certas combinações não são detectadas juntas. Para verificar, segure a combinação que você realmente usa, por exemplo W, A e Shift, e veja se todas as teclas acendem ao mesmo tempo.',
  },
  {
    q: 'O que é N-key rollover e qual a relação com o contador "máximo ao mesmo tempo"?',
    a: 'Rollover é a quantidade de teclas que o teclado consegue registrar simultaneamente. N-key rollover significa que todas as teclas podem ser registradas ao mesmo tempo; muitos teclados ficam limitados a 6 teclas via USB, ou menos em combinações específicas. O contador "máximo ao mesmo tempo" mostra o maior número de teclas que esta página viu pressionadas juntas. É uma verificação rápida, não uma medição de laboratório: o navegador, o sistema operacional e a quantidade de dedos que você tem limitam o que ele consegue mostrar.',
  },
  {
    q: 'Por que algumas teclas não aparecem em um teste de teclado no navegador?',
    a: 'Algumas teclas são tratadas antes de chegar à página. A tecla Windows ou Command, Fn, muitas teclas de mídia e de brilho, e atalhos como Ctrl+W, Ctrl+T ou Alt+F4 são capturados pelo sistema operacional ou pelo navegador. O Print Screen costuma ser registrado só ao soltar. Se uma dessas teclas não acender, isso não significa que ela está quebrada; teste-a em um aplicativo de desktop.',
  },
  {
    q: 'Funciona com teclado ABNT2?',
    a: 'Sim. As teclas são reconhecidas pela posição física (event.code), não pelo caractere que digitam, então cada tecla do ABNT2 corresponde a uma posição no teclado da tela. Ao apertar uma tecla, o caractere que o seu layout produziu aparece no painel da última tecla. O desenho, porém, é de um teclado ANSI americano: teclas que só existem no ABNT2, como a tecla extra ao lado do Shift esquerdo (\\ |) e a tecla / ? perto do Shift direito, podem não estar no desenho; confira essas no painel da última tecla. O Ç fica na mesma posição do ; no ANSI.',
  },
  {
    q: 'O que significam event.key, event.code e keyCode?',
    a: 'event.code identifica a tecla física (por exemplo, KeyA), event.key é o caractere ou a ação que essa tecla produziu com o seu layout e modificadores (por exemplo, a, A ou ç), e keyCode é um código numérico antigo que os navegadores ainda informam. Location indica se a tecla é a cópia da esquerda ou da direita, como Shift esquerdo ou direito, ou uma tecla do teclado numérico.',
  },
  {
    q: 'Posso usar este teste no celular ou tablet?',
    a: 'Só com um teclado físico conectado. Teclados virtuais de tela sensível ao toque não informam códigos de tecla físicos da mesma forma, então o teste precisa de um teclado USB ou Bluetooth.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/pt' },
    { '@type': 'ListItem', position: 2, name: 'Treinamento Motor', item: 'https://skilldrills.online/pt/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Velocidade de Movimento', item: 'https://skilldrills.online/pt/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Teste de Teclado', item: PAGE_URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'pt-BR',
  name: 'Teste de Teclado Online',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requer JavaScript e um teclado físico',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
  url: PAGE_URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'pt-BR',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: 'O que um teste de teclado verifica?',
    paragraphs: [
      'Um teste de teclado mostra se cada tecla chega ao computador. Aperte uma tecla e ela acende no desenho; solte e ela continua marcada como testada, então teclas mortas ou que falham de vez em quando ficam evidentes. Segurar várias teclas juntas mostra se o teclado consegue registrá-las ao mesmo tempo, e é aí que aparecem o ghosting e os limites de rollover.',
      'Esta página não tem cronômetro nem pontuação. Ela só mostra o que o navegador recebeu: o código físico da tecla, o caractere produzido, a posição e se foi uma repetição automática. Nada é gravado nem enviado.',
    ],
  },
  faqs: { title: 'Perguntas frequentes sobre o teste de teclado', items: FAQS },
};

const copy = {
  h1: 'Teste de Teclado Online – Teste Todas as Teclas',
  subtitle: 'Aperte qualquer tecla para ver se ela funciona e segure várias ao mesmo tempo para verificar ghosting e rollover',
  keysTested: 'Teclas testadas',
  heldNow: 'Pressionadas agora',
  maxHeld: 'Máximo ao mesmo tempo',
  touchNote: 'Este teste precisa de um teclado físico. Teclados virtuais de toque não informam códigos de tecla físicos.',
  ariaLabel: 'Teste de teclado. Aperte as teclas para testá-las; clique fora para liberar o teclado.',
  listening: 'Aguardando – aperte qualquer tecla',
  clickToStart: 'Clique no teclado para começar o teste',
  reset: 'Reiniciar',
  legendPressed: 'Pressionada',
  legendTested: 'Testada',
  legendUntested: 'Ainda não pressionada',
  lastKey: 'Último evento de tecla',
  noKeyYet: 'Nenhuma tecla pressionada ainda.',
  note: 'As teclas são reconhecidas pela posição física (event.code), então ABNT2, AZERTY, QWERTZ, JIS e outros layouts funcionam; cada tecla mostra o caractere que o seu layout produziu quando você a aperta. O desenho é um teclado ANSI americano, então teclas extras do ABNT2 (como \\ | ao lado do Shift esquerdo e / ? perto do Shift direito) podem não aparecer nele. Algumas teclas nunca chegam a uma página web: combinações com a tecla Windows/Command, Fn, muitas teclas de mídia e atalhos como Ctrl+W ou Alt+F4 são tratados primeiro pelo sistema operacional ou pelo navegador. O Print Screen costuma ser registrado só ao soltar.',
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];
const linkClass = 'text-cyan-300 underline underline-offset-2 hover:text-white';

export default function PortugueseKeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient copy={copy} />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        Todas as teclas funcionando? Agora pratique: o{' '}
        <Link href="/pt/drills/motor/movement-speed/keyboard-recognition" className={linkClass}>teste de reação do teclado</Link>{' '}
        mede a rapidez com que você aperta a tecla certa quando ela aparece, e o{' '}
        <Link href="/pt/drills/motor/movement-speed/rapid-tapping" className={linkClass}>teste de CPS</Link>{' '}
        mede quantos cliques por segundo você consegue manter.
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
