const provisionalSiteUrl = 'https://incamdi.com';
const whatsappBookingUrl = 'https://wa.me/34687414574';

const envSiteUrl = import.meta.env.PUBLIC_SITE_URL?.trim();
const envContactEmail = import.meta.env.PUBLIC_CONTACT_EMAIL?.trim();

export const siteConfig = {
  name: 'Incamdi',
  url: (envSiteUrl || provisionalSiteUrl).replace(/\/$/, ''),
  email: envContactEmail || 'info@incamdi.com',
  phone: '+34687414574',
  bookingUrl: whatsappBookingUrl,
  bookingIsExternal: true,
  bookingLabel: { es: 'Reservar por WhatsApp', en: 'Book via WhatsApp' },
  locale: 'es_ES',
  alternateLocale: 'en_IE',
  title: {
    es: 'Agencia web y desarrollo a medida | Incamdi',
    en: 'Web development agency in Galway | Incamdi',
  },
  description: {
    es: 'Agencia web de desarrollo a medida, SEO técnico y automatizaciones con IA para empresas de España e Irlanda. Trabaja directamente con Marcos Álvarez.',
    en: 'Web development agency in Galway for custom websites, technical SEO, software and AI automation. Work directly with Marcos Álvarez.',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/marcos-alvarez-calabria',
    github: 'https://github.com/marcosAlvarezCalabria',
    x: 'https://x.com/MarcosGalwayDev',
  },
} as const;
