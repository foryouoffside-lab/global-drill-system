import { pickSources } from '@/lib/drillSources';
import KeyboardTesterClient from '@/app/drills/motor/keyboard-tester/KeyboardTesterClientLoader';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import DrillGuide from '@/components/drill/DrillGuide';
import RelatedDrills from '@/components/drill/RelatedDrills';

export const metadata = {
  title: 'Test de teclado online | Teclas y ghosting | SkillDrills',
  description: 'Prueba tu teclado gratis en el navegador: comprueba teclas, ghosting, rollover y fallos sin instalar programas.',
  keywords: [
    'test de teclado online',
    'probar teclado',
    'comprobar teclas',
    'tecla no funciona',
    'tecla atascada',
    'test de ghosting',
    'test de rollover',
    'test teclado mecánico',
    'teclado gaming',
    'teclas simultáneas',
  ],
  openGraph: {
    title: 'Test de teclado online | Teclas y ghosting | SkillDrills',
    description: 'Comprueba teclas, ghosting y rollover en el navegador con un diagnóstico rápido y gratuito.',
    type: 'article',
    url: 'https://skilldrills.online/es/drills/motor/keyboard-tester',
    siteName: 'SkillDrills',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test de teclado online | Teclas y ghosting | SkillDrills',
    description: 'Test de teclado para detectar teclas defectuosas, ghosting y problemas de entradas simultáneas.',
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor/keyboard-tester',
    languages: getAlternateLanguages('/drills/motor/keyboard-tester'),
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'SkillDrills Inicio', item: 'https://skilldrills.online/es' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Entrenamiento Motor',
      item: 'https://skilldrills.online/es/drills/motor',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Test de Teclado',
      item: 'https://skilldrills.online/es/drills/motor/keyboard-tester',
    },
  ],
};

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  inLanguage: 'es-ES',
  name: 'Test de Teclado Online',
  alternateName: ['Comprobador de Teclado', 'Test de Teclas'],
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
  browserRequirements: 'Requiere un navegador web moderno y un teclado físico',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description:
    'Herramienta web gratuita para probar teclas, detectar interruptores atascados, evaluar key rollover y verificar eventos.',
  url: 'https://skilldrills.online/es/drills/motor/keyboard-tester',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' },
  dateModified: '2026-09-20',
};

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  inLanguage: 'es-ES',
  name: 'Comprobador de Teclado y Test de Ghosting Online',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Herramienta web gratuita para probar pulsaciones, detectar teclas atascadas y medir key rollover.',
  url: 'https://skilldrills.online/es/drills/motor/keyboard-tester',
  dateModified: '2026-09-20',
  publisher: { '@type': 'Organization', name: 'SkillDrills', url: 'https://skilldrills.online' }
};

const videoGameSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  inLanguage: 'es-ES',
  name: 'Comprobador de Teclado y Diagnóstico de Pulsaciones',
  url: 'https://skilldrills.online/es/drills/motor/keyboard-tester',
  description: 'Herramienta interactiva para verificar la respuesta de interruptores y combinaciones de teclas.',
  dateModified: '2026-09-20',
  gamePlatform: 'Web Browser',
  genre: ['Test de Teclado', 'Utilidades', 'Diagnóstico de Hardware'],
  playMode: 'SinglePlayer',
  applicationCategory: 'Game',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  inLanguage: 'es-ES',
  name: 'Cómo probar las teclas del teclado online',
  description: 'Guía paso a paso para comprobar el funcionamiento de teclas, detectar fallos y medir el rollover.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      url: 'https://skilldrills.online/es/drills/motor/keyboard-tester#step-1',
      name: 'Presione cada tecla de forma individual',
      text: 'Pulse ordenadamente cada tecla del teclado. Las teclas funcionales se iluminarán de azul y quedarán en verde al soltarlas.'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      url: 'https://skilldrills.online/es/drills/motor/keyboard-tester#step-2',
      name: 'Compruebe el key rollover y ghosting',
      text: 'Presione varias teclas a la vez (WASD, Shift y Espacio) para comprobar el registro simultáneo máximo (NKRO).'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      url: 'https://skilldrills.online/es/drills/motor/keyboard-tester#step-3',
      name: 'Revise la telemetría de pulsaciones',
      text: 'Inspeccione el registro en tiempo real con datos de event.code, event.key y keyCode para diagnósticos precisos.'
    },
    {
      '@type': 'HowToStep',
      position: 4,
      url: 'https://skilldrills.online/es/drills/motor/keyboard-tester#step-4',
      name: 'Analice el diagnóstico y reinicie',
      text: 'Compruebe las teclas no marcadas para aislar fallos físicos o suciedad en los interruptores, y pulse Reiniciar.'
    }
  ]
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es-ES',
  dateModified: '2026-09-20',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo puedo probar si todas las teclas de mi teclado funcionan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Abra esta página y pulse cada tecla del teclado. Cada tecla se ilumina en azul al mantenerla pulsada y queda marcada en verde al registrarse. Las teclas que no responden permanecen apagadas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si una tecla no se ilumina en el comprobador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La señal no llega al navegador. Esto indica un fallo en el interruptor mecánico, suciedad acumulada, una pista rota en la placa de circuito o un conflicto en el controlador.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el key rollover (NKRO) y cómo se comprueba?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el número máximo de teclas que el teclado puede registrar simultáneamente. Mantenga pulsadas varias teclas: los teclados con NKRO reconocen todas las teclas sin bloqueos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué algunas teclas o atajos no aparecen en el navegador?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Determinadas combinaciones son interceptadas por el sistema operativo (como Ctrl+Alt+Supr). Además, este test permite deliberadamente el paso de F5 y F11 para conservar las funciones del navegador.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo identificar una tecla atascada (stuck key)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Suelte todas las teclas: si en la pantalla una tecla permanece en azul como si estuviera pulsada continuamente, significa que el muelle o mecanismo físico se ha quedado trabado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Este comprobador registra o guarda lo que escribo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Todos los eventos de teclado se gestionan localmente en su navegador y se descartan al salir. No se almacena ni se transmite ninguna información a servidores externos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre event.code y event.key?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'event.code identifica la posición física de la tecla en el teclado sin importar el idioma. event.key representa el carácter producido según la distribución activa y las teclas modificadoras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el ghosting y por qué ocurre en teclados convencionales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ocurre cuando la matriz eléctrica compartida de teclados de membrana genera pulsaciones falsas o bloquea teclas adicionales al pulsar varias a la vez. Los teclados mecánicos evitan esto con diodos individuales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es compatible con teclados mecánicos, magnéticos y de membrana?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es compatible con cualquier teclado USB, inalámbrico Bluetooth, mecánico, magnético Hall-effect, óptico o de membrana conectado al equipo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Este test de teclado online es gratuito y seguro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, es totalmente gratuito, sin publicidad intrusiva y opera dentro del entorno de seguridad local de su navegador sin instalar software.',
      },
    },
  ],
};

const SPANISH_COPY = {
  title: 'Test de teclado online',
  subtitle: 'Comprobar teclas • Ghosting • Rollover',
  intro: 'Pulsa cada tecla del teclado para confirmar que se registra correctamente.',
  keysConfirmed: 'Teclas confirmadas',
  rollover: 'Rollover',
  capturing: 'Capturando teclas',
  paused: 'Pausado',
  reset: 'Reiniciar',
  captureNotice: 'La captura de teclas está activa. Pulsa Mayús + Esc o haz clic en «Capturando» para liberar el teclado.',
  lastKeyEvent: 'Último evento de tecla',
  eventCode: 'event.code',
  eventKey: 'event.key',
  keyCode: 'keyCode',
  location: 'Ubicación',
  autoRepeat: 'Repetición automática',
  yes: 'Sí',
  no: 'No',
  space: '(espacio)',
  pressAnyKey: 'Pulsa cualquier tecla para ver qué recibe el navegador.',
  keysNotOnLayout: 'Teclas fuera de la distribución seleccionada',
  notYetConfirmed: 'Aún no confirmadas',
  allConfirmed: 'Se han registrado todas las teclas de la distribución. El teclado funciona correctamente.',
  untestedSingular: 'tecla pendiente de pulsar. Si no responde tras varias pulsaciones firmes, conviene revisarla.',
  untestedPlural: 'teclas pendientes de pulsar. Si alguna no responde tras varias pulsaciones firmes, conviene revisarla.',
  mobileWarning: 'Esta herramienta necesita un teclado físico. Ábrela en un ordenador portátil o de sobremesa, o conecta un teclado externo.',
  aboutTitle: 'Sobre el test de teclado',
  aboutP1: 'Cada tecla se ilumina al registrarse y queda verde cuando ya ha sido confirmada. Las teclas que nunca se iluminan pueden indicar un interruptor averiado, una tecla atascada o un problema del controlador.',
  aboutP2: 'No se sube ni se guarda ningún dato.',
  howTitle: 'Cómo probar el teclado',
  howStep1: 'Pulsa cada tecla una vez, recorriendo las filas de izquierda a derecha.',
  howStep2: 'La tecla se vuelve cian mientras la mantienes pulsada y verde después de registrarse.',
  howStep3: 'Observa cómo se vacía la lista «Aún no confirmadas». Las teclas que queden son sospechosas.',
  howStep4: 'Mantén varias teclas pulsadas para leer el número máximo de entradas simultáneas.',
  rolloverTitle: 'Key rollover y ghosting',
  rolloverP1: 'El rollover indica cuántas teclas puede comunicar el teclado al mismo tiempo. Muchos teclados de membrana registran entre dos y seis; las pulsaciones adicionales pueden descartarse. Los teclados NKRO informan de todas las teclas pulsadas.',
  rolloverP2: 'Mantén varias teclas y observa el valor de rollover. Si deja de subir con tres o cuatro, es el límite del teclado, no necesariamente un fallo. Algunas combinaciones del sistema nunca llegan al navegador.',
  limitsTitle: 'Qué no puede diagnosticar este test',
  limitsP1: 'La página solo ve lo que recibe el navegador: el final de la cadena formada por interruptor, controlador, cable o conexión inalámbrica, controlador del sistema y sistema operativo. No puede señalar qué componente concreto falla.',
  limitsP2: 'El sistema operativo intercepta Alt+Tab y Ctrl+Alt+Supr antes de que lleguen al navegador. F5, F11 y F12 se reservan para funciones del navegador. Que falten esas combinaciones es normal y no demuestra un fallo físico.',
};

const guideProps = {
  intro: {
    title: 'Qué verifica exactamente un test de teclado online',
    sources: pickSources('woods2015'),
    paragraphs: [
      'Un test de teclado confirma que cada tecla física genera un evento de entrada válido que llega al ordenador. Al pulsar una tecla, el sistema entrega un código de hardware al navegador; si no se detecta señal, la tecla no está siendo leída.',
      'Esta herramienta permite verificar con certeza si cada pulsación es registrada con éxito, facilitando el diagnóstico de averías mecánicas o fallos de software.',
    ],
  },
  benchmarks: {
    title: 'Baremos Técnicos de Rollover y Calidad de Teclado',
    caption: 'Clasificación basada en el escaneo de matriz, tiempo de debounce y frecuencia de muestreo USB. SkillDrills no almacena datos externamente.',
    headers: ['Nivel (Tier)', 'Arquitectura de Hardware', 'Capacidad de Rollover', 'Matriz Anti-Ghosting', 'Latencia de Interruptor', 'Perfil de Diagnóstico y Juego'],
    rows: [
      [
        'Tier 1',
        'NKRO Total (Efecto Hall Magnético / Óptico)',
        'N-Key Real (> 50 teclas)',
        'Diodo individual por tecla; bloqueo cero en la matriz',
        'Menos de 1,0 ms (Polling de 8000 Hz / 1000 Hz)',
        'Nivel competitivo de élite: Reconocimiento simultáneo impecable, función rapid trigger, cero chattering.',
      ],
      [
        'Tier 2',
        '6KRO / 10KRO Mecánico (Switches Mecánicos)',
        '6 a 10 teclas simultáneas',
        'Diodos dedicados en el bloque principal y modificadores',
        '2,0–5,0 ms (Polling 1000 Hz, debounce de contacto)',
        'Estándar gaming: Acordes fluidos para macros complejos y combinaciones de movimiento táctico.',
      ],
      [
        'Tier 3',
        'Matriz Gaming Optimizada (Membrana Híbrida)',
        '4 a 6 teclas (Bloque WASD)',
        'Anti-ghosting localizado en la zona habitual de juego',
        '8,0–15,0 ms (Polling de 125–500 Hz)',
        'Gama entusiasta básica: Fiable para shooters en primera persona con bloqueos ocasionales en teclas lejanas.',
      ],
      [
        'Tier 4',
        'Matriz de Oficina Estándar (Membrana Básica)',
        '2 a 3 teclas (2KRO)',
        'Matriz compartida por filas/columnas; pérdidas habituales',
        '15,0–30,0 ms (Polling USB de 125 Hz)',
        'Ofimática elemental: Propensa a bloqueos o pérdida de señal al pulsar 3 o más teclas al mismo tiempo.',
      ],
      [
        'Tier 5',
        'Hardware con Avería / Chattering (Switch Desgastado)',
        'Fallo intermitente / Tecla inoperativa',
        'Oxidación en láminas de contacto, resorte cedido o pista rota',
        'Inestable / Doble rebote (> 35 ms jitter)',
        'Fallo de hardware: Doble pulsación involuntaria (chattering), teclas muertas o accionamiento continuo.',
      ],
    ],
  },
  faqs: {
    title: 'Preguntas Frecuentes (FAQ)',
    items: faqSchema.mainEntity.map((q) => ({
      q: q.name,
      a: q.acceptedAnswer.text,
    })),
  },
};

export default function KeyboardTesterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoGameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <KeyboardTesterClient copy={SPANISH_COPY} />
      <DrillGuide {...guideProps} />
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <RelatedDrills currentCategory="motor" currentHref="/es/drills/motor/keyboard-tester" />
      </div>
    </>
  );
}
