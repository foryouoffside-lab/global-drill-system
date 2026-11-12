import PhysicalDrillsClient from '@/app/drills/physical/PhysicalDrillsClient';
import { DRILLS } from '@/lib/drillsRegistry';
import { getAlternateLanguages } from '@/lib/i18n/locales';
import { getLocalizedDrill } from '@/lib/i18n/drillNames';

const physicalDrills = DRILLS.filter((d) => d.category === 'physical');

const url = 'https://skilldrills.online/es/drills/physical';
const title = "Juegos de agilidad con el ratón: 11 ejercicios | SkillDrills";
const description = "Juegos de agilidad con el ratón, gratis en el navegador: 11 ejercicios para hacer clic en objetivos, esquivar, estabilizar el cursor y memorizar recorridos.";

export const metadata = {
  title,
  description,
  keywords: ["juegos de agilidad con el ratón", "juego de agilidad con el mouse", "juego de coordinación", "juegos de esquivar con el ratón", "ejercicios con el ratón en el navegador"],
  openGraph: {
    title,
    description,
    type: 'website',
    url,
    siteName: 'SkillDrills',
    locale: 'es_ES',
    images: [{ url: 'https://skilldrills.online/opengraph-image', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['https://skilldrills.online/opengraph-image'],
  },
  robots: { index: true, follow: true },
  alternates: {
    canonical: url,
    languages: getAlternateLanguages('/drills/physical'),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "SkillDrills", "item": "https://skilldrills.online/es" },
    { "@type": "ListItem", "position": 2, "name": "Todos los ejercicios", "item": "https://skilldrills.online/es/drills" },
    { "@type": "ListItem", "position": 3, "name": "Juegos de agilidad con el ratón", "item": url }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "inLanguage": "es",
  "dateModified": "2026-11-10",
  "name": "Juegos de agilidad con el ratón – 11 ejercicios",
  "url": url,
  "description": "11 ejercicios con el ratón en el navegador: hacer clic en objetivos, esquivar, estabilizar el cursor, memorizar recorridos y ajustar el timing.",
  "author": { "@type": "Organization", "name": "SkillDrills" },
  "hasPart": physicalDrills.map((drill) => {
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
  { q: "¿El juego de la escalera en pantalla ayuda al juego de pies real?", a: "El ejercicio practica el timing y el ritmo: llevas el cursor, en el orden correcto, a los peldaños izquierdo y derecho de una escalera que baja por la pantalla. No sustituye el trabajo de pies real ni el entrenamiento de fuerza, y esta página no afirma ningún efecto sobre la agilidad deportiva." },
  { q: "¿Qué practica el frenado de puntería (cadena de reacción)?", a: "Solo puntúas si detienes por completo el cursor dentro de un nodo en movimiento. Atravesarlo sin parar o dejar que se escape corta el combo y resta 1 segundo. No se garantiza una mejor puntería en juegos de disparos." },
  { q: "¿Qué practica el ejercicio de estabilidad contra fuerzas externas?", a: "Mantienes la mira dentro del anillo seguro del centro mientras un viento simulado la empuja. Salir del anillo solo reinicia el combo. Es un ejercicio de control estable del ratón, no un entrenamiento del equilibrio corporal." },
  { q: "¿Qué ocurre en el ejercicio de movimiento cruzado?", a: "Colocas el cursor sobre el nodo de inicio y luego lo guías a través de la pantalla, dentro de un corredor, hasta el nodo final. Salir del corredor reinicia el combo. Esta página no afirma ningún efecto sobre la comunicación entre los hemisferios cerebrales." },
  { q: "¿Qué practica el juego de esquivar casillas en la cuadrícula?", a: "Algunas casillas parpadean como aviso y luego se convierten en zonas de peligro; debes mover el cursor a una casilla segura antes. Esta página no promete ninguna mejora en milisegundos. Compara nivel y precisión en el mismo dispositivo." },
  { q: "¿Qué practica el ejercicio de amenazas en el borde de la pantalla?", a: "Detectas y haces clic en los nodos de amenaza que aparecen en la zona exterior de la pantalla para practicar la atención periférica. No está demostrado que amplíe el campo visual ni que prevenga lesiones; úsalo solo como práctica." },
  { q: "¿Con qué frecuencia conviene practicar?", a: "No hay una regla fija. Unas pocas sesiones de 15 a 25 minutos por semana, mientras dure la concentración, son una carga ligera. Para si notas dolor en los ojos o en la muñeca." },
  { q: "¿Complementan estos ejercicios el entrenamiento en el gimnasio o en la pista?", a: "No sustituyen la fuerza, la pliometría ni el entrenamiento específico del deporte. Sirven como pequeño complemento para practicar el timing visual y las decisiones rápidas ante señales en pantalla." },
  { q: "¿Cuántos ejercicios incluye esta lista?", a: "11 ejercicios de navegador en cuatro áreas: reflejos y evasión, agilidad y timing, coordinación y trayectorias, equilibrio y estabilidad. Cada tarjeta abre la descripción y las instrucciones del ejercicio." },
  { q: "¿Estos juegos de agilidad son una prueba física?", a: "No. No miden fuerza, salto ni resistencia. Practican el timing, la velocidad de decisión, la precisión con el ratón y las secuencias de movimiento en pantalla." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "inLanguage": "es",
  "dateModified": "2026-11-10",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
};

export default function PhysicalDrillsPage() {
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
      <PhysicalDrillsClient faqs={faqs} />
    </>
  );
}
