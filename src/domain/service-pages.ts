import type { BilingualText, IconName } from './content';

type LocalizedList = ReadonlyArray<BilingualText>;

export type ServicePage = Readonly<{
  key: 'web' | 'seo' | 'software' | 'automation';
  icon: IconName;
  slug: BilingualText;
  shortTitle: BilingualText;
  title: BilingualText;
  description: BilingualText;
  eyebrow: BilingualText;
  headline: BilingualText;
  lead: BilingualText;
  image: Readonly<{ src: string; alt: BilingualText }>;
  diagnosticTitle: BilingualText;
  diagnosticIntro: BilingualText;
  diagnostics: LocalizedList;
  processTitle: BilingualText;
  processIntro: BilingualText;
  process: ReadonlyArray<Readonly<{ title: BilingualText; description: BilingualText }>>;
  deliverablesTitle: BilingualText;
  deliverables: LocalizedList;
  proofTitle: BilingualText;
  proof: BilingualText;
}>;

export const servicePages = [
  {
    key: 'web',
    icon: 'browser',
    slug: { es: 'desarrollo-web', en: 'web-development' },
    shortTitle: { es: 'Webs a medida', en: 'Custom websites' },
    title: {
      es: 'Desarrollo web a medida para negocios | Incamdi',
      en: 'Custom web development for businesses | Incamdi',
    },
    description: {
      es: 'Diseño y desarrollo de webs rápidas, accesibles y preparadas para posicionar en Google. Trato directo con el desarrollador.',
      en: 'Fast, accessible custom websites built to perform in search. Work directly with the developer.',
    },
    eyebrow: { es: 'Desarrollo web a medida', en: 'Custom web development' },
    headline: {
      es: 'Una web que trabaja tan bien como se ve.',
      en: 'A website that works as well as it looks.',
    },
    lead: {
      es: 'Diseño, contenido y código avanzan juntos para convertir tu web en una herramienta comercial clara, rápida y fácil de mantener.',
      en: 'Design, content and code move together to turn your website into a clear, fast and maintainable commercial tool.',
    },
    image: {
      src: '/assets/services/web-development.webp',
      alt: {
        es: 'Composición técnica de interfaces modulares conectadas por una línea ember.',
        en: 'Technical composition of modular interfaces connected by an ember line.',
      },
    },
    diagnosticTitle: { es: 'Cuando la web frena al negocio', en: 'When the website holds the business back' },
    diagnosticIntro: {
      es: 'No siempre hace falta añadir más. Primero identificamos qué impide que una visita entienda, confíe y actúe.',
      en: 'More is not always the answer. First we identify what stops a visitor from understanding, trusting and acting.',
    },
    diagnostics: [
      { es: 'La propuesta tarda demasiado en entenderse.', en: 'The offer takes too long to understand.' },
      { es: 'La experiencia móvil parece una adaptación tardía.', en: 'The mobile experience feels like an afterthought.' },
      { es: 'La web es lenta o difícil de actualizar.', en: 'The website is slow or difficult to maintain.' },
    ],
    processTitle: { es: 'De la idea a una web publicada', en: 'From idea to published website' },
    processIntro: {
      es: 'Un proceso corto, visible y sin capas innecesarias entre tu negocio y quien construye.',
      en: 'A short, visible process with no unnecessary layers between your business and the person building it.',
    },
    process: [
      {
        title: { es: 'Enfocar', en: 'Focus' },
        description: {
          es: 'Aclaramos audiencia, oferta, contenido y la acción principal que debe conseguir la página.',
          en: 'We clarify the audience, offer, content and primary action the page needs to earn.',
        },
      },
      {
        title: { es: 'Diseñar y construir', en: 'Design and build' },
        description: {
          es: 'Creo la estructura visual y el código responsive como un único sistema, sin depender de una plantilla genérica.',
          en: 'I create the visual structure and responsive code as one system, without relying on a generic template.',
        },
      },
      {
        title: { es: 'Verificar y publicar', en: 'Verify and publish' },
        description: {
          es: 'Reviso accesibilidad, rendimiento, SEO técnico y comportamiento real antes del lanzamiento.',
          en: 'I review accessibility, performance, technical SEO and real behaviour before launch.',
        },
      },
    ],
    deliverablesTitle: { es: 'Qué queda construido', en: 'What gets built' },
    deliverables: [
      { es: 'Arquitectura y jerarquía de contenido', en: 'Content architecture and hierarchy' },
      { es: 'Diseño responsive propio', en: 'Original responsive design' },
      { es: 'Desarrollo rápido y accesible', en: 'Fast, accessible development' },
      { es: 'Base técnica para SEO y medición', en: 'Technical foundation for SEO and measurement' },
    ],
    proofTitle: { es: 'Trabajo real, no una maqueta', en: 'Real work, not a mock-up' },
    proof: {
      es: 'Peru Inkas Travel combina una landing orientada a reservas con rendimiento, SEO, diseño mobile-first y rutas integradas con Google Maps.',
      en: 'Peru Inkas Travel combines a booking-focused landing page with performance, SEO, mobile-first design and Google Maps routes.',
    },
  },
  {
    key: 'seo',
    icon: 'search',
    slug: { es: 'seo-tecnico', en: 'technical-seo' },
    shortTitle: { es: 'SEO técnico', en: 'Technical SEO' },
    title: { es: 'SEO técnico y optimización web | Incamdi', en: 'Technical SEO and website optimisation | Incamdi' },
    description: {
      es: 'SEO técnico, estructura y contenido para que Google pueda encontrar, entender e indexar correctamente tu web.',
      en: 'Technical SEO, structure and content that help Google find, understand and index your website correctly.',
    },
    eyebrow: { es: 'SEO técnico', en: 'Technical SEO' },
    headline: { es: 'Haz visible el camino hasta tu negocio.', en: 'Make the path to your business visible.' },
    lead: {
      es: 'Ordeno las señales técnicas y el contenido para que buscadores y personas encuentren páginas claras, útiles y rápidas.',
      en: 'I organise technical signals and content so search engines and people find pages that are clear, useful and fast.',
    },
    image: {
      src: '/assets/services/technical-seo.webp',
      alt: {
        es: 'Mapa físico de páginas conectado por una ruta ember ordenada.',
        en: 'Physical map of pages connected by an ordered ember route.',
      },
    },
    diagnosticTitle: { es: 'Lo que Google necesita entender', en: 'What Google needs to understand' },
    diagnosticIntro: {
      es: 'Antes de perseguir palabras clave, comprobamos que la web pueda rastrearse, interpretarse y ofrecer una buena respuesta.',
      en: 'Before chasing keywords, we make sure the site can be crawled, interpreted and provide a useful answer.',
    },
    diagnostics: [
      { es: 'Páginas importantes sin una intención clara.', en: 'Important pages without a clear search intent.' },
      { es: 'Metadatos, canonicales o enlazado interno incoherentes.', en: 'Inconsistent metadata, canonicals or internal links.' },
      { es: 'Rendimiento y experiencia móvil mejorables.', en: 'Performance and mobile experience that need improvement.' },
    ],
    processTitle: { es: 'Diagnosticar, ordenar y medir', en: 'Diagnose, organise and measure' },
    processIntro: {
      es: 'El SEO se integra en la web y en su contenido; no se añade como una capa al final.',
      en: 'SEO is integrated into the website and its content; it is not added as a final layer.',
    },
    process: [
      {
        title: { es: 'Auditar', en: 'Audit' },
        description: {
          es: 'Reviso rastreo, indexación, estructura, velocidad, semántica y oportunidades de contenido.',
          en: 'I review crawling, indexing, structure, speed, semantics and content opportunities.',
        },
      },
      {
        title: { es: 'Corregir', en: 'Correct' },
        description: {
          es: 'Priorizo los cambios que aclaran la arquitectura y eliminan obstáculos técnicos reales.',
          en: 'I prioritise changes that clarify the architecture and remove real technical obstacles.',
        },
      },
      {
        title: { es: 'Observar', en: 'Observe' },
        description: {
          es: 'Conecto las herramientas de búsqueda y dejo una base medible para decidir los siguientes pasos.',
          en: 'I connect search tools and leave a measurable foundation for deciding what comes next.',
        },
      },
    ],
    deliverablesTitle: { es: 'Una base SEO utilizable', en: 'A usable SEO foundation' },
    deliverables: [
      { es: 'Revisión técnica priorizada', en: 'Prioritised technical review' },
      { es: 'Metadatos y datos estructurados', en: 'Metadata and structured data' },
      { es: 'Sitemap, robots y enlazado interno', en: 'Sitemap, robots and internal linking' },
      { es: 'Configuración de Search Console', en: 'Search Console configuration' },
    ],
    proofTitle: { es: 'Sin promesas de posiciones', en: 'No ranking promises' },
    proof: {
      es: 'El trabajo se centra en señales que sí podemos controlar: una web accesible, rastreable, bien organizada y útil para la búsqueda que responde.',
      en: 'The work focuses on signals we can control: a website that is accessible, crawlable, well organised and useful for the search it answers.',
    },
  },
  {
    key: 'software',
    icon: 'code',
    slug: { es: 'software-a-medida', en: 'custom-software' },
    shortTitle: { es: 'Software a medida', en: 'Custom software' },
    title: { es: 'Software y SaaS a medida para empresas | Incamdi', en: 'Custom software and SaaS for businesses | Incamdi' },
    description: {
      es: 'Aplicaciones web a medida para organizar operaciones, pedidos, documentos y flujos propios del negocio.',
      en: 'Custom web applications for organising operations, orders, documents and business-specific workflows.',
    },
    eyebrow: { es: 'Software y SaaS a medida', en: 'Custom software and SaaS' },
    headline: { es: 'Tu operativa, convertida en una herramienta.', en: 'Your operation, turned into a tool.' },
    lead: {
      es: 'Construyo aplicaciones alrededor de cómo funciona realmente tu empresa, sin obligarte a encajar en procesos genéricos.',
      en: 'I build applications around how your company actually works, without forcing it into generic processes.',
    },
    image: {
      src: '/assets/services/custom-software.webp',
      alt: {
        es: 'Sistema modular mecanizado unido por un núcleo ember.',
        en: 'Machined modular system joined by an ember core.',
      },
    },
    diagnosticTitle: { es: 'Cuando las herramientas no encajan', en: 'When the tools do not fit' },
    diagnosticIntro: {
      es: 'El software a medida tiene sentido cuando el coste de adaptar el negocio supera el de construir la herramienta correcta.',
      en: 'Custom software makes sense when the cost of adapting the business exceeds the cost of building the right tool.',
    },
    diagnostics: [
      { es: 'Datos repartidos entre hojas, mensajes y programas.', en: 'Data split across sheets, messages and software.' },
      { es: 'Procesos manuales que generan errores y retrabajo.', en: 'Manual processes that create errors and repeated work.' },
      { es: 'Un SaaS generalista que obliga a trabajar de otra manera.', en: 'Generic SaaS that forces the team to work differently.' },
    ],
    processTitle: { es: 'Construir alrededor del proceso real', en: 'Build around the real process' },
    processIntro: {
      es: 'Empezamos por la operación, no por una lista de tecnologías.',
      en: 'We start with the operation, not a list of technologies.',
    },
    process: [
      {
        title: { es: 'Modelar', en: 'Model' },
        description: {
          es: 'Mapeamos datos, roles, decisiones y excepciones para definir el núcleo útil.',
          en: 'We map data, roles, decisions and exceptions to define the useful core.',
        },
      },
      {
        title: { es: 'Entregar por partes', en: 'Deliver in parts' },
        description: {
          es: 'Construyo flujos completos en incrementos que se pueden revisar y usar.',
          en: 'I build complete workflows in increments that can be reviewed and used.',
        },
      },
      {
        title: { es: 'Afinar con uso real', en: 'Refine with real use' },
        description: {
          es: 'El feedback de la operativa diaria guía las siguientes decisiones.',
          en: 'Feedback from daily operations guides the next decisions.',
        },
      },
    ],
    deliverablesTitle: { es: 'Un sistema que puede crecer', en: 'A system that can grow' },
    deliverables: [
      { es: 'Aplicación web responsive', en: 'Responsive web application' },
      { es: 'Modelo de datos y permisos', en: 'Data model and permissions' },
      { es: 'Integraciones necesarias', en: 'Required integrations' },
      { es: 'Despliegue y base mantenible', en: 'Deployment and maintainable foundation' },
    ],
    proofTitle: { es: 'Software utilizado cada día', en: 'Software used every day' },
    proof: {
      es: 'Epoxiron es un SaaS full-stack privado para un taller industrial: gestiona albaranes, reglas de precios y entrada de pedidos por voz.',
      en: 'Epoxiron is a private full-stack SaaS for an industrial workshop: it manages delivery notes, pricing rules and voice order entry.',
    },
  },
  {
    key: 'automation',
    icon: 'monitor',
    slug: { es: 'automatizaciones-ia', en: 'ai-automation' },
    shortTitle: { es: 'Automatizaciones con IA', en: 'AI automation' },
    title: { es: 'Automatizaciones e IA para negocios | Incamdi', en: 'AI automation for businesses | Incamdi' },
    description: {
      es: 'Automatizaciones, agentes e integraciones que conectan herramientas y reducen trabajo repetitivo con control humano.',
      en: 'Automations, agents and integrations that connect tools and reduce repetitive work with human control.',
    },
    eyebrow: { es: 'Automatizaciones con IA', en: 'AI automation' },
    headline: { es: 'Menos pasos repetidos. Más trabajo que avanza.', en: 'Fewer repeated steps. More work moving forward.' },
    lead: {
      es: 'Conecto sistemas y diseño flujos fiables para que las tareas rutinarias sucedan con contexto, trazabilidad y puntos claros de control.',
      en: 'I connect systems and design reliable flows so routine tasks happen with context, traceability and clear control points.',
    },
    image: {
      src: '/assets/services/ai-automation.webp',
      alt: {
        es: 'Máquina de flujo que ordena tareas mediante una ruta ember.',
        en: 'Workflow machine organising tasks through an ember route.',
      },
    },
    diagnosticTitle: { es: 'Automatizar lo que merece la pena', en: 'Automate what is worth automating' },
    diagnosticIntro: {
      es: 'No todo necesita IA. Buscamos tareas frecuentes, reglas entendibles y puntos donde una persona debe conservar la decisión.',
      en: 'Not everything needs AI. We look for frequent tasks, understandable rules and points where a person should keep the decision.',
    },
    diagnostics: [
      { es: 'La misma información se copia entre herramientas.', en: 'The same information is copied between tools.' },
      { es: 'Las solicitudes llegan por canales distintos y se pierden.', en: 'Requests arrive through different channels and get lost.' },
      { es: 'El equipo dedica tiempo a clasificar, resumir o trasladar datos.', en: 'The team spends time classifying, summarising or moving data.' },
    ],
    processTitle: { es: 'Un flujo controlado de principio a fin', en: 'A controlled flow from end to end' },
    processIntro: {
      es: 'La automatización se diseña con límites, registros y una salida clara cuando algo necesita atención humana.',
      en: 'Automation is designed with limits, records and a clear exit when something needs human attention.',
    },
    process: [
      {
        title: { es: 'Seleccionar', en: 'Select' },
        description: {
          es: 'Identificamos el cuello de botella y medimos qué parte conviene automatizar.',
          en: 'We identify the bottleneck and determine which part is worth automating.',
        },
      },
      {
        title: { es: 'Conectar', en: 'Connect' },
        description: {
          es: 'Integro las herramientas, los datos y las reglas que el flujo necesita.',
          en: 'I integrate the tools, data and rules the workflow needs.',
        },
      },
      {
        title: { es: 'Proteger', en: 'Safeguard' },
        description: {
          es: 'Añadimos validación, trazabilidad y revisión humana donde el riesgo lo exige.',
          en: 'We add validation, traceability and human review where the risk requires it.',
        },
      },
    ],
    deliverablesTitle: { es: 'Automatización con contexto', en: 'Automation with context' },
    deliverables: [
      { es: 'Mapa del flujo y sus excepciones', en: 'Map of the workflow and its exceptions' },
      { es: 'Integraciones y agentes necesarios', en: 'Required integrations and agents' },
      { es: 'Registros y puntos de control', en: 'Logs and control points' },
      { es: 'Documentación para operar el sistema', en: 'Documentation for operating the system' },
    ],
    proofTitle: { es: 'IA conectada a software real', en: 'AI connected to real software' },
    proof: {
      es: 'Epoxi es un agente construido sobre Hermes que opera Epoxiron mediante Telegram y API, utilizando información, procesos y permisos del cliente.',
      en: 'Epoxi is an agent built on Hermes that operates Epoxiron through Telegram and API using the client’s information, processes and permissions.',
    },
  },
] as const satisfies ReadonlyArray<ServicePage>;

export const serviceHref = (service: ServicePage, language: 'es' | 'en') =>
  language === 'en'
    ? `/en/services/${service.slug.en}/`
    : `/servicios/${service.slug.es}/`;
