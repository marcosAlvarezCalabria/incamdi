export type LegalKind = 'privacy' | 'cookies';
export type LegalLanguage = 'es' | 'en';

type LegalTable = Readonly<{
  headers: ReadonlyArray<string>;
  rows: ReadonlyArray<ReadonlyArray<string>>;
}>;

type LegalSection = Readonly<{
  id: string;
  title: string;
  paragraphs?: ReadonlyArray<string>;
  bullets?: ReadonlyArray<string>;
  table?: LegalTable;
  links?: ReadonlyArray<Readonly<{ label: string; href: string }>>;
}>;

type LegalPage = Readonly<{
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  intro: string;
  updated: string;
  sections: ReadonlyArray<LegalSection>;
}>;

export const legalRoutes = {
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
  cookies: { es: '/cookies/', en: '/en/cookies/' },
} as const;

export const legalPageContent: Record<LegalKind, Record<LegalLanguage, LegalPage>> = {
  privacy: {
    es: {
      title: 'Política de privacidad | Incamdi',
      description: 'Cómo Incamdi trata los datos personales recibidos a través de la web, WhatsApp y el chat.',
      eyebrow: 'Privacidad',
      heading: 'Tus datos, explicados con claridad.',
      intro: 'Esta política describe qué información puede tratar Incamdi, para qué se utiliza y cómo puedes ejercer tus derechos.',
      updated: 'Última actualización: 17 de septiembre de 2026',
      sections: [
        {
          id: 'responsable',
          title: 'Quién es el responsable',
          paragraphs: [
            'El responsable del tratamiento es Marcos Álvarez, que opera bajo el nombre comercial Incamdi desde Galway, Irlanda. Incamdi no es actualmente una sociedad mercantil independiente.',
          ],
          bullets: [
            'Responsable: Marcos Álvarez',
            'Nombre comercial: Incamdi',
            'Ubicación: Galway, Irlanda',
            'Contacto: info@incamdi.com',
          ],
        },
        {
          id: 'datos',
          title: 'Qué datos podemos tratar',
          paragraphs: [
            'La web no tiene formularios de registro ni instala herramientas de analítica publicitaria. Solo se tratan los datos necesarios para prestar la web, responder consultas y mantener la seguridad.',
          ],
          bullets: [
            'Datos que facilites voluntariamente al conversar por Chatwoot o WhatsApp, como nombre, correo, teléfono, empresa, contenido del mensaje y archivos.',
            'Datos técnicos básicos generados al acceder, como dirección IP, navegador, idioma, página de referencia, fecha y hora, cuando los registren el alojamiento o Cloudflare por motivos operativos y de seguridad.',
            'Preferencia de cookies guardada localmente en tu navegador.',
          ],
        },
        {
          id: 'finalidades',
          title: 'Finalidades y bases jurídicas',
          bullets: [
            'Responder consultas y preparar una posible relación profesional: medidas precontractuales solicitadas por la persona interesada.',
            'Mantener la seguridad, disponibilidad y diagnóstico técnico de la web: interés legítimo en proteger el servicio.',
            'Cargar el chat y conservar la conversación: consentimiento para cookies funcionales y gestión de la consulta iniciada por el usuario.',
            'Cumplir obligaciones legales o atender reclamaciones cuando sea necesario.',
          ],
        },
        {
          id: 'proveedores',
          title: 'Proveedores y transferencias',
          paragraphs: [
            'Incamdi utiliza proveedores que pueden tratar datos por cuenta propia o como encargados del tratamiento. Solo debes enviar por el chat la información necesaria para tu consulta.',
          ],
          bullets: [
            'Cloudflare: DNS, entrega de contenido y seguridad de la web.',
            'Chatwoot Cloud: servicio de chat. El widget solo se carga después de aceptar las cookies funcionales. Chatwoot indica que determinados datos pueden almacenarse en Estados Unidos.',
            'WhatsApp/Meta: si eliges contactar mediante WhatsApp, el tratamiento también queda sujeto a las condiciones y política de privacidad de ese servicio.',
          ],
          links: [
            { label: 'Privacidad de Cloudflare', href: 'https://www.cloudflare.com/privacypolicy/' },
            { label: 'Privacidad de Chatwoot', href: 'https://www.chatwoot.com/privacy-policy' },
            { label: 'Privacidad de WhatsApp', href: 'https://www.whatsapp.com/legal/privacy-policy-eea' },
          ],
        },
        {
          id: 'conservacion',
          title: 'Cuánto tiempo se conservan',
          paragraphs: [
            'Los datos se mantienen mientras sean necesarios para responder la consulta y gestionar una posible relación profesional. Después se eliminan o anonimizan cuando dejan de ser necesarios, salvo que deban conservarse para cumplir una obligación legal o defender reclamaciones. Los registros técnicos se conservan según los periodos operativos de los proveedores.',
          ],
        },
        {
          id: 'derechos',
          title: 'Tus derechos',
          paragraphs: [
            'Puedes solicitar acceso, rectificación, supresión, limitación, portabilidad u oposición, y retirar un consentimiento sin afectar al tratamiento previo. Escribe a info@incamdi.com e indica qué derecho quieres ejercer. Podremos pedir información razonable para verificar tu identidad.',
            'Si consideras que tus datos no se han tratado correctamente, puedes presentar una reclamación ante la Data Protection Commission de Irlanda.',
          ],
          links: [
            { label: 'Data Protection Commission', href: 'https://www.dataprotection.ie/' },
          ],
        },
        {
          id: 'decisiones',
          title: 'Decisiones automatizadas y menores',
          paragraphs: [
            'La web no toma decisiones automatizadas con efectos jurídicos ni crea perfiles comerciales. Los servicios se dirigen a empresas y personas adultas; no se solicitan conscientemente datos de menores.',
          ],
        },
        {
          id: 'cambios',
          title: 'Cambios en esta política',
          paragraphs: [
            'Esta política se actualizará cuando cambien los servicios, proveedores o tratamientos. La fecha de la versión vigente aparece al principio de la página.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy policy | Incamdi',
      description: 'How Incamdi handles personal data received through the website, WhatsApp and live chat.',
      eyebrow: 'Privacy',
      heading: 'Your data, explained clearly.',
      intro: 'This policy explains what information Incamdi may process, why it is used and how you can exercise your rights.',
      updated: 'Last updated: 17 September 2026',
      sections: [
        {
          id: 'controller',
          title: 'Who is responsible',
          paragraphs: [
            'The data controller is Marcos Álvarez, operating under the trading name Incamdi from Galway, Ireland. Incamdi is not currently a separately incorporated company.',
          ],
          bullets: [
            'Controller: Marcos Álvarez',
            'Trading name: Incamdi',
            'Location: Galway, Ireland',
            'Contact: info@incamdi.com',
          ],
        },
        {
          id: 'data',
          title: 'Data we may process',
          paragraphs: [
            'The website has no registration forms and does not install advertising analytics. Data is processed only to provide the website, answer enquiries and maintain security.',
          ],
          bullets: [
            'Information you voluntarily provide through Chatwoot or WhatsApp, such as your name, email, phone number, company, message content and files.',
            'Basic technical data generated when you visit, such as IP address, browser, language, referrer, date and time, where recorded by the hosting provider or Cloudflare for operational and security purposes.',
            'Your cookie preference stored locally in your browser.',
          ],
        },
        {
          id: 'purposes',
          title: 'Purposes and legal bases',
          bullets: [
            'Answering enquiries and preparing a possible professional relationship: steps requested before entering a contract.',
            'Maintaining website security, availability and technical diagnostics: legitimate interests in protecting the service.',
            'Loading the chat and preserving the conversation: consent for functional cookies and management of the enquiry initiated by you.',
            'Complying with legal obligations or handling legal claims where necessary.',
          ],
        },
        {
          id: 'providers',
          title: 'Providers and transfers',
          paragraphs: [
            'Incamdi uses providers that may process data in their own capacity or on our behalf. Only send information through the chat that is necessary for your enquiry.',
          ],
          bullets: [
            'Cloudflare: DNS, content delivery and website security.',
            'Chatwoot Cloud: live chat. The widget loads only after functional cookies are accepted. Chatwoot states that certain data may be stored in the United States.',
            'WhatsApp/Meta: if you choose WhatsApp, processing is also subject to that service’s terms and privacy policy.',
          ],
          links: [
            { label: 'Cloudflare privacy policy', href: 'https://www.cloudflare.com/privacypolicy/' },
            { label: 'Chatwoot privacy policy', href: 'https://www.chatwoot.com/privacy-policy' },
            { label: 'WhatsApp privacy policy', href: 'https://www.whatsapp.com/legal/privacy-policy-eea' },
          ],
        },
        {
          id: 'retention',
          title: 'How long data is kept',
          paragraphs: [
            'Data is kept while needed to answer your enquiry and manage a possible professional relationship. It is then deleted or anonymised when no longer necessary, unless it must be retained to meet a legal obligation or defend a claim. Technical logs follow the providers’ operational retention periods.',
          ],
        },
        {
          id: 'rights',
          title: 'Your rights',
          paragraphs: [
            'You may request access, correction, erasure, restriction, portability or objection, and withdraw consent without affecting earlier processing. Email info@incamdi.com and state the right you wish to exercise. We may request reasonable information to verify your identity.',
            'If you believe your data has not been handled correctly, you may complain to the Irish Data Protection Commission.',
          ],
          links: [
            { label: 'Data Protection Commission', href: 'https://www.dataprotection.ie/' },
          ],
        },
        {
          id: 'decisions',
          title: 'Automated decisions and children',
          paragraphs: [
            'The website does not make automated decisions with legal effects or create commercial profiles. The services are intended for businesses and adults; data from children is not knowingly requested.',
          ],
        },
        {
          id: 'changes',
          title: 'Changes to this policy',
          paragraphs: [
            'This policy will be updated when the services, providers or processing activities change. The current version date appears at the top of the page.',
          ],
        },
      ],
    },
  },
  cookies: {
    es: {
      title: 'Política de cookies | Incamdi',
      description: 'Qué almacenamiento utiliza Incamdi y cómo controlar el chat funcional de Chatwoot.',
      eyebrow: 'Cookies',
      heading: 'Tú decides si activas el chat.',
      intro: 'La web no utiliza cookies publicitarias ni de analítica. Chatwoot solo se carga cuando permites expresamente sus cookies funcionales.',
      updated: 'Última actualización: 17 de septiembre de 2026',
      sections: [
        {
          id: 'que-son',
          title: 'Qué son las cookies',
          paragraphs: [
            'Las cookies y tecnologías similares guardan pequeños datos en el navegador. Algunas son necesarias para recordar elecciones; otras habilitan funciones opcionales, como conservar una conversación de chat.',
          ],
        },
        {
          id: 'uso',
          title: 'Qué utiliza esta web',
          table: {
            headers: ['Elemento', 'Proveedor', 'Finalidad', 'Duración'],
            rows: [
              ['incamdi-cookie-consent-v1', 'Incamdi · almacenamiento local', 'Recuerda si elegiste solo lo necesario o permitiste el chat.', 'Hasta que borres los datos del navegador o cambies la preferencia.'],
              ['cw_conversation', 'Chatwoot', 'Permite conservar la conversación al navegar o volver a la web.', 'Persistente, según la configuración y caducidad aplicada por Chatwoot.'],
            ],
          },
          paragraphs: [
            'La cookie de Chatwoot no se instala si eliges “Solo necesarias”. Incamdi no utiliza actualmente cookies de publicidad, perfilado ni medición de audiencia.',
          ],
        },
        {
          id: 'consentimiento',
          title: 'Cómo funciona tu elección',
          bullets: [
            'Solo necesarias: guarda únicamente tu preferencia y no carga Chatwoot.',
            'Permitir chat: carga el widget de Chatwoot y permite su almacenamiento funcional.',
            'Puedes volver a abrir el panel desde “Configurar cookies” en el pie de cualquier página.',
          ],
        },
        {
          id: 'terceros',
          title: 'Servicio de terceros',
          paragraphs: [
            'Chatwoot puede recibir datos técnicos y los mensajes que envíes mediante el widget. Consulta su documentación para conocer las cookies utilizadas y su política de privacidad.',
          ],
          links: [
            { label: 'Cookies utilizadas por Chatwoot', href: 'https://www.chatwoot.com/hc/user-guide/articles/1677778232-which-cookies-are-used-by-chatwoot' },
            { label: 'Privacidad de Chatwoot', href: 'https://www.chatwoot.com/privacy-policy' },
          ],
        },
        {
          id: 'navegador',
          title: 'Control desde el navegador',
          paragraphs: [
            'También puedes borrar o bloquear cookies desde la configuración del navegador. Si bloqueas el almacenamiento funcional, el chat puede no recordar conversaciones anteriores. El resto de la web seguirá disponible.',
          ],
        },
        {
          id: 'contacto',
          title: 'Contacto',
          paragraphs: [
            'Para preguntas sobre privacidad o cookies, escribe a info@incamdi.com.',
          ],
        },
      ],
    },
    en: {
      title: 'Cookie policy | Incamdi',
      description: 'What browser storage Incamdi uses and how to control the optional Chatwoot live chat.',
      eyebrow: 'Cookies',
      heading: 'You decide whether to enable chat.',
      intro: 'The website does not use advertising or analytics cookies. Chatwoot loads only when you expressly allow its functional cookies.',
      updated: 'Last updated: 17 September 2026',
      sections: [
        {
          id: 'what',
          title: 'What cookies are',
          paragraphs: [
            'Cookies and similar technologies store small pieces of data in your browser. Some remember necessary choices; others enable optional functions, such as preserving a chat conversation.',
          ],
        },
        {
          id: 'use',
          title: 'What this website uses',
          table: {
            headers: ['Item', 'Provider', 'Purpose', 'Duration'],
            rows: [
              ['incamdi-cookie-consent-v1', 'Incamdi · local storage', 'Remembers whether you chose necessary storage only or enabled chat.', 'Until you clear browser data or change the preference.'],
              ['cw_conversation', 'Chatwoot', 'Preserves the conversation while navigating or returning to the website.', 'Persistent, according to the configuration and expiry applied by Chatwoot.'],
            ],
          },
          paragraphs: [
            'The Chatwoot cookie is not installed when you choose “Necessary only”. Incamdi currently uses no advertising, profiling or audience measurement cookies.',
          ],
        },
        {
          id: 'consent',
          title: 'How your choice works',
          bullets: [
            'Necessary only: stores only your preference and does not load Chatwoot.',
            'Enable chat: loads the Chatwoot widget and allows its functional storage.',
            'You can reopen the panel through “Cookie settings” in the footer of every page.',
          ],
        },
        {
          id: 'third-party',
          title: 'Third-party service',
          paragraphs: [
            'Chatwoot may receive technical data and the messages you send through the widget. Review its documentation for the cookies it uses and its privacy practices.',
          ],
          links: [
            { label: 'Cookies used by Chatwoot', href: 'https://www.chatwoot.com/hc/user-guide/articles/1677778232-which-cookies-are-used-by-chatwoot' },
            { label: 'Chatwoot privacy policy', href: 'https://www.chatwoot.com/privacy-policy' },
          ],
        },
        {
          id: 'browser',
          title: 'Browser controls',
          paragraphs: [
            'You can also delete or block cookies through your browser settings. If you block functional storage, the chat may not remember earlier conversations. The rest of the website remains available.',
          ],
        },
        {
          id: 'contact',
          title: 'Contact',
          paragraphs: [
            'For questions about privacy or cookies, email info@incamdi.com.',
          ],
        },
      ],
    },
  },
};
