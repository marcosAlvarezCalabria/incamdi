import type { BilingualText } from './content';

type CaseStudyImage = Readonly<{
  src: string;
  srcSmall: string;
  width: number;
  height: number;
  alt: BilingualText;
}>;

type CaseStudy = Readonly<{
  slug: string;
  name: string;
  kind: BilingualText;
  status: BilingualText;
  summary: BilingualText;
  detail: BilingualText;
  tags: ReadonlyArray<BilingualText>;
  image: CaseStudyImage;
  secondaryImage?: CaseStudyImage;
}>;

export const caseStudyRoutes = { es: '/casos-de-exito/', en: '/en/case-studies/' } as const;

export const caseStudies = [
  {
    slug: 'epoxiron', name: 'Epoxiron',
    kind: { es: 'Software a medida', en: 'Custom software' },
    status: { es: 'Privado · En uso diario', en: 'Private · Used daily' },
    summary: { es: 'SaaS full-stack para la gestión diaria de un taller industrial, conectado a un Agente como Servicio (AaaS).', en: 'Full-stack SaaS for the daily operation of an industrial workshop, connected to an Agent as a Service (AaaS).' },
    detail: { es: 'Centraliza albaranes, facturas, clientes y documentación en una interfaz construida alrededor del flujo real del equipo. Epoxi, su Agente como Servicio, utiliza Google Gemini con un harness propio para operar el sistema mediante Telegram y API.', en: 'It brings delivery notes, invoices, customers and documents into an interface built around the team’s real workflow. Epoxi, its Agent as a Service, uses Google Gemini with a custom harness to operate the system through Telegram and API.' },
    tags: [{ es: 'Full-stack', en: 'Full-stack' }, { es: 'SaaS', en: 'SaaS' }, { es: 'AaaS', en: 'AaaS' }],
    image: { src: '/assets/case-studies/epoxiron.webp', srcSmall: '/assets/case-studies/epoxiron-720.webp', width: 1600, height: 802, alt: { es: 'Panel real de gestión diaria del taller en Epoxiron.', en: 'Real daily workshop management dashboard in Epoxiron.' } },
  },
  {
    slug: 'peru-inkas-travel', name: 'Peru Inkas Travel',
    kind: { es: 'Web de turismo', en: 'Travel website' },
    status: { es: 'Proyecto público', en: 'Public project' },
    summary: { es: 'Landing de turismo pensada para presentar rutas y captar consultas.', en: 'Travel landing page designed to present routes and capture enquiries.' },
    detail: { es: 'La experiencia combina una portada visual, navegación bilingüe, enfoque mobile-first y visualización de rutas con Google Maps. La estructura prioriza destinos, confianza y una llamada a la acción clara.', en: 'The experience combines a visual opening, bilingual navigation, a mobile-first approach and route visualisation with Google Maps. Its structure prioritises destinations, trust and a clear call to action.' },
    tags: [{ es: 'SEO', en: 'SEO' }, { es: 'Landing', en: 'Landing' }, { es: 'Google Maps', en: 'Google Maps' }],
    image: { src: '/assets/case-studies/peru-inkas-travel.webp', srcSmall: '/assets/case-studies/peru-inkas-travel-720.webp', width: 1600, height: 733, alt: { es: 'Portada real de Peru Inkas Travel con Machu Picchu entre las nubes.', en: 'Real Peru Inkas Travel homepage featuring Machu Picchu among the clouds.' } },
  },
  {
    slug: 'koko-atelier-saas', name: 'Koko Atelier SaaS',
    kind: { es: 'Software a medida', en: 'Custom software' },
    status: { es: 'Aplicación privada', en: 'Private application' },
    summary: { es: 'SaaS móvil para gestionar la operativa diaria de un taller de arreglos.', en: 'Mobile SaaS for managing the daily operation of an alterations workshop.' },
    detail: { es: 'Reúne pedidos, clientes, agenda, cobros y estadísticas en una interfaz bilingüe pensada para trabajar desde el móvil. Las capturas muestran el seguimiento de pedidos por estado y el panel de actividad y pagos.', en: 'It brings orders, clients, bookings, payments and reporting into a bilingual interface designed for mobile use. The captures show order tracking by status and the activity and payments dashboard.' },
    tags: [{ es: 'SaaS', en: 'SaaS' }, { es: 'Pedidos', en: 'Orders' }, { es: 'Pagos', en: 'Payments' }, { es: 'Agenda', en: 'Bookings' }],
    image: { src: '/assets/case-studies/koko-atelier-saas-orders.webp', srcSmall: '/assets/case-studies/koko-atelier-saas-orders-240.webp', width: 337, height: 747, alt: { es: 'Lista móvil de pedidos de Koko Atelier organizada por estado.', en: 'Koko Atelier mobile order list organised by status.' } },
    secondaryImage: { src: '/assets/case-studies/koko-atelier-saas-stats.webp', srcSmall: '/assets/case-studies/koko-atelier-saas-stats-240.webp', width: 350, height: 760, alt: { es: 'Panel móvil de estadísticas, pagos y pedidos de Koko Atelier.', en: 'Koko Atelier mobile dashboard showing statistics, payments and orders.' } },
  },
  {
    slug: 'koko-atelier-galway', name: 'Koko Atelier Galway',
    kind: { es: 'Web de negocio local', en: 'Local business website' },
    status: { es: 'Web real', en: 'Real website' },
    summary: { es: 'Web para un servicio de arreglos y confección en Galway.', en: 'Website for an alterations and tailoring service in Galway.' },
    detail: { es: 'Presenta los servicios, precios, horarios, trabajos y contacto del negocio con una apertura audiovisual ligada al oficio. La navegación conduce directamente a solicitar presupuesto.', en: 'It presents the business services, prices, hours, work and contact details through an audiovisual opening rooted in the craft. Navigation leads directly to requesting a quote.' },
    tags: [{ es: 'Negocio local', en: 'Local business' }, { es: 'Responsive', en: 'Responsive' }, { es: 'Conversión', en: 'Conversion' }],
    image: { src: '/assets/case-studies/koko-atelier-galway.webp', srcSmall: '/assets/case-studies/koko-atelier-galway-720.webp', width: 1600, height: 720, alt: { es: 'Portada real de Koko Atelier Galway con una máquina de coser en funcionamiento.', en: 'Real Koko Atelier Galway homepage showing a sewing machine at work.' } },
  },
  {
    slug: 'cinehub', name: 'CineHub',
    kind: { es: 'Aplicación web', en: 'Web application' },
    status: { es: 'Proyecto funcional', en: 'Functional project' },
    summary: { es: 'SPA para descubrir películas, guardar favoritas y explorar géneros.', en: 'SPA for discovering films, saving favourites and exploring genres.' },
    detail: { es: 'La interfaz organiza el catálogo alrededor de una portada editorial, navegación por contenido y acceso de usuario. El proyecto incluye autenticación mediante JWT.', en: 'The interface organises the catalogue around an editorial opening, content browsing and user access. The project includes JWT authentication.' },
    tags: [{ es: 'SPA', en: 'SPA' }, { es: 'JWT', en: 'JWT' }, { es: 'Catálogo', en: 'Catalogue' }],
    image: { src: '/assets/case-studies/cinehub.webp', srcSmall: '/assets/case-studies/cinehub-720.webp', width: 1600, height: 721, alt: { es: 'Portada real de la aplicación CineHub para descubrir películas.', en: 'Real homepage of the CineHub movie discovery application.' } },
  },
  {
    slug: 'conoxchange', name: 'ConoXchange',
    kind: { es: 'Marketplace P2P', en: 'P2P marketplace' },
    status: { es: 'Proyecto funcional', en: 'Functional project' },
    summary: { es: 'Plataforma para intercambiar habilidades y conectar con personas cercanas.', en: 'Platform for exchanging skills and connecting with nearby people.' },
    detail: { es: 'La búsqueda de habilidades es la acción principal. Las categorías permiten explorar la comunidad por intereses y el acceso de usuario prepara el intercambio entre particulares.', en: 'Skill search is the primary action. Categories let people explore the community by interest, while user access prepares peer-to-peer exchange.' },
    tags: [{ es: 'Marketplace', en: 'Marketplace' }, { es: 'Búsqueda', en: 'Search' }, { es: 'Comunidad', en: 'Community' }],
    image: { src: '/assets/case-studies/conoxchange.webp', srcSmall: '/assets/case-studies/conoxchange-720.webp', width: 1600, height: 723, alt: { es: 'Portada real de ConoXchange con búsqueda de habilidades.', en: 'Real ConoXchange homepage featuring skill search.' } },
  },
] as const satisfies ReadonlyArray<CaseStudy>;
