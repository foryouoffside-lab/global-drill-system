import Link from 'next/link';
import KeyboardTesterClient from '@/app/drills/motor/movement-speed/keyboard-tester/KeyboardTesterClient';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import DrillFooter from '@/components/drill/DrillFooter';

const URL = 'https://skilldrills.online/es/drills/motor/movement-speed/keyboard-tester';
const TITLE = 'Test de teclado online | Keyboard Test | SkillDrills';
const DESCRIPTION = 'Test de teclado online gratis: pulsa cada tecla para probar el teclado, mira event.key y event.code y comprueba el ghosting y el rollover. Sin descargas.';

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['test de teclado', 'keyboard test', 'probar teclado', 'keyboard tester', 'test de teclado online', 'test ghosting teclado'],
  openGraph: { title: TITLE, description: DESCRIPTION, type: 'website', url: URL, siteName: 'SkillDrills', locale: 'es_ES' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION },
  robots: { index: true, follow: true },
  alternates: { canonical: URL, languages: getAlternateLanguages('/drills/motor/movement-speed/keyboard-tester') },
};

const FAQS = [
  {
    q: '¿Cómo pruebo mi teclado con este test de teclado?',
    a: 'Haz clic en el teclado de la pantalla para que tenga el foco y pulsa cada tecla una vez. Una tecla se ilumina mientras la mantienes pulsada y queda en verde al soltarla, así que cualquier tecla que nunca se pone verde no ha llegado al navegador. El contador muestra cuántas teclas del esquema has probado.',
  },
  {
    q: '¿Qué es el ghosting de un teclado?',
    a: 'El ghosting ocurre cuando el teclado no registra una tecla porque ya hay varias pulsadas. Muchos teclados comparten cableado entre teclas, por lo que algunas combinaciones no se pueden detectar a la vez. Para comprobarlo, mantén la combinación que usas de verdad, por ejemplo W, A y Mayús, y mira si todas las teclas se iluminan al mismo tiempo.',
  },
  {
    q: '¿Qué significa N-key rollover y qué muestra «Máx. a la vez»?',
    a: 'El rollover es el número de teclas que un teclado puede registrar a la vez. N-key rollover significa que puede registrarlas todas; muchos teclados están limitados a 6 teclas por USB, o a menos en combinaciones concretas. El contador «Máx. a la vez» muestra el mayor número de teclas que esta página ha visto pulsadas juntas. Es una comprobación rápida, no una medición de laboratorio: el navegador, el sistema operativo y el número de dedos limitan lo que puede mostrar.',
  },
  {
    q: '¿Por qué algunas teclas no se registran en un test de teclado online?',
    a: 'Algunas teclas se procesan antes de que una página web las vea. La tecla Windows o Comando, Fn, muchas teclas multimedia y de brillo, y atajos como Ctrl+W, Ctrl+T o Alt+F4 los captura el sistema o el navegador. Impr Pant suele registrarse solo al soltarla. Si una de estas teclas no se ilumina, no significa que esté rota; pruébala en una aplicación de escritorio.',
  },
  {
    q: '¿Funciona con teclados en español (ISO) u otras distribuciones?',
    a: 'Sí. Las teclas se reconocen por su posición física (event.code), no por el carácter que escriben, así que cada tecla de un teclado español corresponde a una del esquema. Tras pulsarla, muestra el carácter que ha producido tu distribución, por ejemplo Ñ o Ç. El dibujo es un teclado ANSI de EE. UU.: la tecla ISO adicional junto a la Mayús izquierda (< >, event.code IntlBackslash) no aparece en él. Solo se muestra en el panel «Última tecla» y no cuenta en el contador.',
  },
  {
    q: '¿Qué significan event.key, event.code y keyCode?',
    a: 'event.code identifica la tecla física (por ejemplo KeyA), event.key es el carácter o la acción que esa tecla produce con tu distribución y modificadores (por ejemplo a, A o q), y keyCode es un código numérico antiguo que los navegadores aún envían. location indica si fue la copia izquierda o derecha de la tecla, como Mayús izquierda o derecha, o una tecla del teclado numérico.',
  },
  {
    q: '¿Puedo usar este test de teclado en el móvil o la tablet?',
    a: 'Solo con un teclado físico conectado. Los teclados táctiles no envían los códigos de teclas físicas de la misma manera, así que el test necesita un teclado USB o Bluetooth.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills', item: 'https://skilldrills.online/es' },
    { '@type': 'ListItem', position: 2, name: 'Entrenamiento Motor', item: 'https://skilldrills.online/es/drills/motor' },
    { '@type': 'ListItem', position: 3, name: 'Velocidad de Movimiento', item: 'https://skilldrills.online/es/drills/motor/movement-speed' },
    { '@type': 'ListItem', position: 4, name: 'Test de teclado', item: URL },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'es-ES',
  name: 'Test de teclado online',
  description: DESCRIPTION,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Navegador con JavaScript y teclado físico',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  url: URL,
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-11-09',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  mainEntity: FAQS.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
};

const guideProps = {
  intro: {
    title: '¿Qué comprueba un test de teclado?',
    paragraphs: [
      'Un test de teclado muestra si cada tecla llega al ordenador. Pulsa una tecla y se ilumina en el dibujo; suéltala y queda marcada como probada, así destacan las teclas muertas o que fallan a ratos. Mantener varias teclas a la vez muestra si el teclado puede registrarlas juntas, que es donde aparecen el ghosting y los límites de rollover.',
      'Esta página no tiene temporizador ni puntuación. Solo muestra lo que recibió el navegador: el código físico de la tecla, el carácter producido, su posición y si fue una repetición automática. No se guarda ni se envía nada.',
    ],
  },
  faqs: { title: 'Preguntas frecuentes sobre el test de teclado', items: FAQS },
};

const copy = {
  h1: 'Test de teclado online: prueba todas las teclas',
  subtitle: 'Pulsa cualquier tecla para ver si se registra y mantén varias a la vez para comprobar el ghosting y el rollover',
  keysTested: 'Teclas probadas',
  heldNow: 'Pulsadas ahora',
  maxHeld: 'Máx. a la vez',
  touchNote: 'Este test necesita un teclado físico. Los teclados táctiles no envían códigos de teclas físicas.',
  ariaLabel: 'Test de teclado. Pulsa teclas para probarlas; haz clic fuera para liberar el teclado.',
  listening: 'Escuchando – pulsa cualquier tecla',
  clickToStart: 'Haz clic en el teclado para empezar el test',
  reset: 'Reiniciar',
  legendPressed: 'Pulsada',
  legendTested: 'Probada',
  legendUntested: 'Sin pulsar',
  lastKey: 'Última tecla',
  noKeyYet: 'Aún no has pulsado ninguna tecla.',
  note: 'Las teclas se reconocen por su posición física (event.code), así que funcionan las distribuciones española, AZERTY, QWERTZ, JIS y otras; cada tecla muestra el carácter que produjo tu distribución en cuanto la pulsas. El dibujo es un teclado ANSI de EE. UU.: la tecla ISO junto a la Mayús izquierda (< >) no aparece y solo se muestra en «Última tecla». Algunas teclas nunca llegan a una página web: los atajos de la tecla Windows/Comando, Fn, muchas teclas multimedia y atajos como Ctrl+W o Alt+F4 los procesa antes el sistema o el navegador. Impr Pant suele registrarse solo al soltarla.',
};

const jsonLd = [breadcrumbSchema, webApplicationSchema, faqSchema];

export default function SpanishKeyboardTesterPage() {
  return (
    <>
      {jsonLd.map((s) => (
        <script key={s['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <KeyboardTesterClient copy={copy} />
      <section className="max-w-6xl mx-auto px-4 pb-2 text-sm text-slate-300 leading-relaxed">
        ¿Funcionan todas las teclas? Entrena con ellas: el{' '}
        <Link href="/es/drills/motor/movement-speed/keyboard-recognition" className="text-cyan-300 underline underline-offset-2 hover:text-white">test de reacción con teclado</Link>{' '}
        mide lo rápido que pulsas la tecla indicada, y el{' '}
        <Link href="/es/drills/motor/movement-speed/rapid-tapping" className="text-cyan-300 underline underline-offset-2 hover:text-white">CPS Test</Link>{' '}
        mide cuántos clics por segundo mantienes.
      </section>
      <DrillGuide {...guideProps} />
      <DrillFooter />
    </>
  );
}
