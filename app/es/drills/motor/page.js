import MotorDrillsClient from '@/app/drills/motor/MotorDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const motorDrills = DRILLS.filter((d) => d.category === 'motor');

export const metadata = {
  title: 'Ejercicios de ratón: precisión, clics y control | SkillDrills',
  description: '8 ejercicios de ratón gratis en el navegador: objetivos móviles, clics al centro, test de CPS, arrastrar y soltar, pulso firme, seguimiento y teclado.',
  keywords: [
    'ejercicios de ratón', 'ejercicios de ratón online', 'ejercicios de mouse', 'practicar ratón',
    'precisión del ratón', 'coordinación mano-ojo', 'control del cursor', 'ejercicios motores gratis'
  ],
  openGraph: {
    title: 'Ejercicios de ratón: precisión, clics y control | SkillDrills',
    description: '8 ejercicios de ratón gratis en el navegador: objetivos móviles, clics al centro, test de CPS, arrastrar y soltar, pulso firme, seguimiento y teclado.',
    type: 'website',
    url: 'https://skilldrills.online/es/drills/motor',
    siteName: 'SkillDrills',
    locale: 'es_ES',
    images: [{ url: 'https://skilldrills.online/icons/icon-512x512.png', width: 512, height: 512, alt: 'Ejercicios de ratón en SkillDrills' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ejercicios de ratón: precisión, clics y control | SkillDrills',
    description: '8 ejercicios de ratón gratis en el navegador: objetivos móviles, clics al centro, test de CPS, arrastrar y soltar, pulso firme, seguimiento y teclado.',
    images: ['https://skilldrills.online/icons/icon-512x512.png'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://skilldrills.online/es/drills/motor',
    languages: getAlternateLanguages('/es/drills/motor'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Ejercicios de Rendimiento", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Habilidades Motoras & Precisión", "item": "https://skilldrills.online/es/drills/motor" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-09",
  "name": "Ejercicios de ratón: precisión, clics y control (8 ejercicios)",
  "url": "https://skilldrills.online/es/drills/motor",
  "description": "8 ejercicios de ratón gratis en el navegador: objetivos móviles, clics al centro, test de CPS, arrastrar y soltar, pulso firme, seguimiento y teclado.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": motorDrills.map((drill) => {
    const loc = getLocalizedDrill(drill.href, 'es', drill.name);
    return {
      "@type": "WebApplication",
      "name": loc.name,
      "url": `https://skilldrills.online/es${drill.href}`,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript. Requires HTML5 Canvas.",
      "description": loc.tagline || drill.description,
    };
  })
};

const faqs = [
  { q: "¿Qué son estos ejercicios de ratón y qué entrenan?", a: "Son 8 ejercicios de ratón gratis en el navegador: clicar objetivos en movimiento (Aim Trainer), acertar el centro de la diana, clicar objetivos en orden, arrastrar y soltar, un test de CPS de 45 segundos, pulso firme por un pasillo estrecho, seguir un punto en movimiento y reaccionar a las teclas que aparecen en pantalla. Entrenan la coordinación mano-ojo y el control del cursor; la mejora varía según la persona." },
  { q: "¿Cuál es el promedio de CPS (clics por segundo) y qué técnicas de clic existen?", a: "No hay un promedio oficial: el CPS depende mucho del ratón, la técnica y la duración de la prueba. Las técnicas habituales son el clic normal, el jitter clicking (tensar el antebrazo para que el dedo vibre) y el butterfly clicking (alternar dos dedos). El test de CPS de SkillDrills cuenta los clics del ratón durante 45 segundos y muestra tu promedio; compáralo con tus propios resultados en el mismo equipo." },
  { q: "¿Ayudan los ejercicios de pulso firme y seguimiento contra el temblor del ratón?", a: "Ambos exigen mantener el cursor en un espacio reducido: en el pasillo, tocar la pared te devuelve al inicio; en el seguimiento debes acompañar un punto en movimiento a lo largo de un recorrido. Es práctica de control del cursor; no se garantiza ningún efecto sobre el temblor." },
  { q: "¿Qué establece la Ley de Fitts sobre velocidad y precisión?", a: "La Ley de Fitts describe el tiempo de movimiento como función logarítmica de la distancia y el ancho del objetivo (MT = a + b * log2(2D/W)). Los movimientos de apuntado suelen dividirse en una fase balística rápida y una fase final de corrección visual; cuanto más pequeño el objetivo, más pesa la corrección." },
  { q: "¿El ejercicio de teclado mide la velocidad de escritura?", a: "No. En pantalla aparecen teclas (letras, números, símbolos, flechas) que debes pulsar lo más rápido y correctamente posible durante 60 segundos, ignorando los avisos falsos. No mide palabras por minuto ni es un probador de teclado para detectar teclas defectuosas." },
  { q: "¿Qué precisión tienen las mediciones de ratón y teclado en el navegador?", a: "SkillDrills usa performance.now(), cuya resolución el navegador redondea por seguridad. La tasa de refresco del monitor (p. ej., ~4,1 ms a 240 Hz) y el polling rate del periférico (1 ms a 1000 Hz) también limitan la medición. Sirve para comparar tus propios resultados en el mismo equipo, no para diagnósticos de hardware." },
  { q: "¿Cómo influyen el DPI, la sensibilidad y el eDPI?", a: "El eDPI (DPI por sensibilidad) determina cuánto se mueve el cursor por cada movimiento de la mano. Valores altos permiten recorridos rápidos pero hacen más visible el temblor; valores bajos son más estables pero exigen más movimiento del brazo. Para comparar resultados, mantén la misma configuración." },
  { q: "¿Puedo comprobar aquí el chattering o el ghosting del teclado?", a: "No. El chattering (una pulsación registrada varias veces) y el ghosting (teclas no pulsadas que se activan o pulsaciones simultáneas que se pierden) son fallos de hardware que requieren un probador de teclado específico. El ejercicio de teclado de SkillDrills solo mide tu reacción a las teclas mostradas." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "es-ES",
  "dateModified": "2026-11-09",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function SpanishMotorHubPage() {
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

