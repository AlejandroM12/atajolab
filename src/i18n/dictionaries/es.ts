/**
 * Spanish (Argentina) interface texts. This file defines the shape of every
 * dictionary: `en.ts` must provide the same keys (enforced by TypeScript).
 * Content that belongs to data (microapps, projects, services, FAQ) lives in `src/data/`.
 *
 * Voice: plain, warm and direct, for people who need a solution and not for people who build software.
 * Internal names (microapps, `solutions` route) stay in code and URLs; visitors see the plain wording.
 */
export const es = {
  meta: {
    siteDescription:
      "Herramientas fáciles de usar y soluciones a medida para que comercios, profesionales y pymes consigan clientes, ordenen su trabajo y ahorren tiempo.",
    defaultTitle: "AtajoLab: herramientas y soluciones para tu negocio",
    ogImageAlt: "AtajoLab: herramientas y soluciones para tu negocio.",
  },
  a11y: {
    skipToContent: "Saltar al contenido",
    opensInNewTab: " (se abre en otra pestaña)",
    breadcrumb: "Ruta de navegación",
    mainNav: "Principal",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    logoHome: "AtajoLab, ir al inicio",
  },
  nav: {
    home: "Inicio",
    microapps: "Herramientas",
    shop: "Tienda",
    solutions: "Servicios",
    howWeWork: "Cómo trabajamos",
    projects: "Proyectos",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
    mobileCta: "Contanos qué necesitás",
  },
  language: {
    label: "Idioma",
    switchTo: "Cambiar a",
  },
  theme: {
    label: "Tema",
    button: "Cambiar tema",
    light: "Claro",
    dark: "Oscuro",
    system: "Sistema",
  },
  footer: {
    tagline: "Herramientas simples y soluciones a medida para que tu negocio ahorre tiempo y llegue a más clientes.",
    sections: "Secciones del sitio",
    navigation: "Navegación",
    microapps: "Herramientas",
    allMicroapps: "Ver todas",
    contact: "Contacto",
    madeIn: "Hecho en Argentina.",
  },
  ctaBanner: {
    title: "Contanos qué necesitás",
    description:
      "Escribinos con tus palabras: qué querés resolver y cómo lo hacés hoy. Te respondemos por correo y vemos juntos si te sirve una de nuestras herramientas o una solución a tu medida.",
    primary: "Contanos qué necesitás",
  },
  coldStart: "El servidor se activa con la primera visita: la primera carga puede tardar hasta un minuto.",
  disclaimersTitle: "Para tener en cuenta",
  home: {
    metaTitle: "AtajoLab: herramientas y soluciones a medida para tu negocio",
    metaDescription:
      "Herramientas fáciles de usar para conseguir reseñas, ordenar tu trabajo y ahorrar tiempo. Soluciones a medida y productos QR y NFC personalizados para tu negocio.",
    hero: {
      eyebrow: "Para comercios, profesionales y empresas",
      titleLine1: "Tu negocio puede funcionar mejor.",
      titleLine2: "Nosotros te ayudamos.",
      subtitle:
        "Creamos herramientas fáciles de usar para conseguir reseñas, ordenar tu trabajo y ahorrar tiempo. Y si lo que necesitás no existe, lo desarrollamos con vos.",
      primary: "Ver herramientas",
      secondary: "Contanos qué necesitás",
      madeFor: "Hecho en Argentina. Te respondemos por correo y te explicamos todo sin tecnicismos.",
    },
    choices: {
      label: "Qué necesitás resolver",
      question: "¿Qué querés resolver?",
      reviews: { title: "Conseguir más reseñas en Google", text: "AtajoLab QR" },
      appointments: { title: "Ordenar tus turnos y reservas", text: "Agendia" },
      quotes: { title: "Armar presupuestos profesionales", text: "AtajoLab Presupuestos" },
      planning: { title: "Poner precios y tarifas", text: "Herramientas que estamos preparando" },
      custom: { title: "Algo que no encontrás en la lista", text: "Lo desarrollamos a tu medida" },
      footer: "Atajos para tu negocio",
    },
    featured: {
      eyebrow: "Herramientas",
      title: "Soluciones listas para usar",
      description:
        "Se usan desde el celular o la computadora, sin instalar nada. Cada una resuelve una tarea concreta de tu negocio. Algunas ya están disponibles y otras las estamos preparando.",
      action: "Ver todas las herramientas",
    },
    custom: {
      eyebrow: "Servicios a medida",
      title: "¿Necesitás algo que no está en la lista? Lo creamos con vos",
      description:
        "Contanos tu problema con tus palabras. Nosotros vemos si lo resolvemos con una página, una aplicación, un sistema o una automatización, y te explicamos cómo sería.",
      primary: "Contanos qué necesitás",
      secondary: "Ver qué podemos resolver",
    },
    benefits: {
      eyebrow: "Por qué AtajoLab",
      title: "Soluciones simples, con alguien que te escucha",
      description: "Pensamos cada herramienta para quien no es técnico: que se entienda desde el primer uso.",
      items: [
        {
          title: "Fáciles de usar",
          text: "Pocos pasos y textos claros. No hace falta leer un manual ni saber de tecnología.",
        },
        {
          title: "Sin instalar nada",
          text: "Se abren desde el navegador, en el celular, la tablet o la computadora.",
        },
        {
          title: "Precio claro antes de avanzar",
          text: "En las herramientas ves el precio antes de pagar. En lo hecho a medida, te enviamos una propuesta con alcance y costo antes de empezar.",
        },
        {
          title: "Hecho en Argentina",
          text: "Pensamos las soluciones para negocios como el tuyo: sin vueltas y en tu idioma.",
        },
      ],
    },
    how: {
      eyebrow: "Cómo trabajamos",
      title: "Así se empieza",
      description: "Hay dos caminos, según lo que necesites.",
      ready: {
        title: "Quiero una herramienta que ya existe",
        steps: [
          {
            title: "Elegí la que resuelve tu problema",
            text: "Mirá las herramientas y fijate cuál se parece a lo que necesitás.",
          },
          {
            title: "Abrila desde el navegador",
            text: "Se abre desde el celular o la computadora, sin instalar nada.",
          },
          {
            title: "Empezá a usarla",
            text: "Si es de pago, ves el precio y las condiciones antes de pagar.",
          },
        ],
        action: "Ver herramientas",
      },
      custom: {
        title: "Quiero algo hecho a mi medida",
        steps: [
          {
            title: "Nos contás",
            text: "Escribinos qué querés resolver y cómo lo hacés hoy. Con tus palabras alcanza.",
          },
          {
            title: "Te proponemos",
            text: "Te enviamos una propuesta con lo que vamos a hacer, las etapas y el costo, para que decidas con toda la información.",
          },
          {
            title: "Lo desarrollamos por etapas",
            text: "Vas viendo avances y los probás, para ajustar lo que haga falta antes de que esté terminado.",
          },
          {
            title: "Lo entregamos",
            text: "Lo dejamos funcionando y te explicamos cómo usarlo. Si después surgen ajustes, los conversamos.",
          },
        ],
        action: "Contanos qué necesitás",
      },
    },
    agendia: {
      eyebrow: "Turnos y reservas online",
      headline: "Tus turnos, organizados. Tus clientes, siempre al día.",
      intro:
        "Dejá que tus clientes reserven online, organizá tu agenda y enviá recordatorios automáticos por correo electrónico. Todo en un solo lugar, para profesionales y negocios que trabajan con turnos.",
      benefits: [
        "Recibí reservas online, incluso fuera de horario.",
        "Organizá turnos, clientes y profesionales.",
        "Reducí olvidos con confirmaciones y recordatorios por correo electrónico.",
        "Tu página de reservas con tu marca, tu logo y tus colores.",
      ],
      primary: "Probar Agendia gratis",
      secondary: "Conocer Agendia",
      note: "14 días de prueba con todas las funciones. Agendia se abre en agendia.atajolab.dev.",
    },
    presupuestos: {
      eyebrow: "Presupuestos en PDF",
      headline: "Creá presupuestos profesionales en minutos.",
      intro:
        "Generá presupuestos personalizados con los datos de tu negocio, tu logo y tus servicios. Descargalos en PDF y compartilos fácilmente con tus clientes.",
      benefits: [
        "No necesitás conocimientos de diseño.",
        "Personalización con la identidad de tu negocio.",
        "Presupuestos profesionales en PDF.",
        "Compatible con celulares y computadoras.",
        "Podés comenzar gratuitamente.",
      ],
      primary: "Crear un presupuesto gratis",
      secondary: "Conocer AtajoLab Presupuestos",
      detail: "Ver la ficha completa",
      note: "Armás y previsualizás sin cuenta. Para descargar el PDF necesitás una cuenta gratuita. Se abre en presupuestos.atajolab.dev.",
    },
    caseStudy: {
      eyebrow: "Conocé lo que podemos crear",
      badge: "Demo funcional",
      headline: "Una forma más simple de gestionar interesados y entrevistas",
      intro:
        "Cuando se anota mucha gente, repetir las mismas preguntas una por una lleva tiempo y los datos quedan desparramados en mensajes. Adhera muestra cómo se puede ordenar: cada interesado completa una preentrevista online y el equipo lo gestiona todo desde un panel.",
      points: [
        "Los interesados responden paso a paso, como en una conversación.",
        "Las preguntas cambian según lo que van contestando.",
        "Quien atiende ve todas las solicitudes ordenadas en un panel.",
        "Se pueden dejar notas, asignar responsables y agendar entrevistas.",
      ],
      note: "Adhera es un proyecto propio de AtajoLab, hecho para mostrar el tipo de solución a medida que podemos desarrollar. No es un producto a la venta ni una implementación para un cliente.",
      cta: "Ver el proyecto",
      allProjects: "Ver todos los proyectos",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que más nos preguntan",
      description: "Si te queda alguna duda, escribinos y te respondemos por correo.",
      action: "Ver todas las preguntas",
    },
  },
  shop: {
    eyebrow: "Tienda",
    headline: "Productos QR y NFC personalizados para conectar tu negocio con tus clientes.",
    intro:
      "AtajoLab Shop es nuestra tienda de productos físicos con tecnología QR y NFC para negocios, restaurantes, eventos y profesionales. Elegís el producto, lo personalizás y hacés tu pedido por WhatsApp.",
    benefits: [
      "Conseguí reseñas de Google: tus clientes llegan directo a dejar su opinión.",
      "Compartí tu menú digital para que lo abran desde el celular.",
      "Conectá a tus clientes con tus redes sociales y tus datos de contacto.",
      "Personalizá los productos para tu negocio o tu evento.",
    ],
    cta: "Explorar la tienda",
    imageAlt:
      "Productos de AtajoLab Shop: un soporte para mostrador con código QR para dejar reseñas, un cartel de mesa con QR para ver el menú, una tarjeta NFC y un sticker QR.",
    note: "Se abre en tienda.atajolab.dev.",
    bannerTitle: "¿Buscás productos físicos con QR y NFC?",
    bannerText:
      "En AtajoLab Shop encontrás soportes, tarjetas y stickers personalizados para tu negocio o tu evento.",
  },
  labels: {
    pricing: { FREE: "Gratis", ONE_TIME: "Pago único", SUBSCRIPTION: "Suscripción" },
    status: { AVAILABLE: "Disponible", COMING_SOON: "Próximamente", UNAVAILABLE: "No disponible" },
    planned: "previsto",
    perMonth: "/ mes",
    perYear: "/ año",
    cta: {
      "use-free": "Usar gratis",
      "open-app": "Empezar ahora",
      checkout: "Comprar",
      contact: "Consultar disponibilidad",
      "coming-soon": "Próximamente",
      unavailable: "No disponible",
    },
    viewDetails: "Conocer más",
    audience: "Pensada para",
    inquirySubject: (name: string) => `Consulta sobre ${name}`,
    interestSubject: (name: string) => `Interés en ${name}`,
  },
  catalog: {
    metaTitle: "Soluciones listas para usar",
    metaDescription:
      "Microapps y herramientas web listas para usar: conseguí reseñas en Google, calculá precios, armá presupuestos y ordená tus turnos. Buscá por nombre o elegí un tema.",
    eyebrow: "Herramientas",
    title: "Soluciones listas para usar",
    intro:
      "Herramientas simples para resolver una tarea de tu negocio, sin instalar nada. Elegí la que se parezca a tu problema.",
    counts: (available: number, upcoming: number) =>
      `${available === 1 ? "Hoy hay 1 disponible" : `Hoy hay ${available} disponibles`}${upcoming > 0 ? ` y ${upcoming} en preparación` : ""}.`,
    sectionLabel: "Lista de herramientas",
    searchLabel: "Buscar herramientas",
    searchPlaceholder: "Por ejemplo: reseñas, precios, turnos…",
    clearSearch: "Borrar búsqueda",
    category: "Tema",
    all: "Todas",
    results: (count: number, filtered: boolean) =>
      `${count === 1 ? "herramienta" : "herramientas"}${filtered ? (count === 1 ? " encontrada" : " encontradas") : " para elegir"}`,
    showAll: "Ver todas las herramientas",
    toolsHeading: "Herramientas",
    emptyTitle: "No encontramos herramientas",
    emptyBefore: "Probá con otra palabra o con otro tema. Si lo que buscás todavía no existe,",
    emptyLink: "contanos qué necesitás",
    bannerTitle: "¿No encontrás lo que necesitás?",
    bannerDescription:
      "Si tenés una tarea repetitiva o algo que querés ordenar, contanos. Puede que lo resolvamos con una herramienta nueva o con una solución hecha a tu medida.",
  },
  microapp: {
    whatItIs: "Cómo te ayuda",
    whatWeAreBuilding: "Qué estamos preparando",
    problems: "Qué problemas resuelve",
    howItWorks: "Cómo funciona",
    plansTitle: "Información comercial",
    plansIntro: "Dos planes mensuales. Incluyen lo mismo: solo cambia cuántos profesionales podés tener.",
    oneTimePayment: "pago único",
    seePlans: "Ver planes",
    officialLinks: "Enlaces oficiales",
    screenshots: "Capturas",
    screenshotsNote: "Imágenes de la herramienta con datos de ejemplo.",
    features: "Qué incluye",
    plannedFeatures: "Qué tenemos previsto",
    plannedNote: "Puede cambiar antes del lanzamiento.",
    benefits: "Qué ganás",
    audience: "Para quién es",
    pricingModel: "Forma de pago",
    planned: "(prevista)",
    price: "Precio",
    priceInApp: "Se muestra dentro de la herramienta",
    priceTbd: "Todavía sin definir",
    opensAt: "Se abre en",
    priceNote: "El precio y las condiciones se muestran dentro de la herramienta.",
    comingSoonBefore: "Todavía no se puede usar: la estamos preparando. Si te interesa,",
    comingSoonLink: "escribinos",
    comingSoonAfter: ". Nos ayuda a decidir qué herramientas hacer primero.",
    viewDemo: "Ver demo",
    caseStudy: "Caso de estudio",
    howWeBuilt: (name: string) => `Cómo construimos ${name}`,
    otherMicroapps: "Otras herramientas",
  },
  solutions: {
    metaTitle: "Soluciones a medida para tu negocio",
    metaDescription:
      "Software a medida para comercios, profesionales y empresas: aplicaciones web, sistemas de gestión, automatización de tareas e integraciones. Contanos qué necesitás.",
    eyebrow: "Servicios",
    title: "Creamos la solución que necesitás",
    description:
      "Si lo que necesitás no está entre nuestras herramientas, lo desarrollamos con vos. No hace falta que sepas si es una aplicación, una página, un sistema o una automatización: contanos el problema con tus palabras.",
    primary: "Contanos qué necesitás",
    secondary: "Ver proyectos",
    servicesEyebrow: "Qué podemos resolver",
    servicesTitle: "Algunos problemas que resolvemos",
    servicesDescription:
      "Muchos proyectos combinan varias de estas cosas. Si no ves exactamente tu caso, escribinos igual.",
    problem: "Te puede pasar que",
    solution: "Cómo podemos ayudarte",
    fitsFor: "Es para",
    examples: "Ejemplos",
    processEyebrow: "Cómo trabajamos",
    processTitle: "De tu idea a una solución en uso",
    exampleLabel: "Una demo de lo que podemos crear",
    exampleTitle: "Adhera: preentrevistas online y un panel para los asesores",
    exampleCta: "Ver el proyecto",
    bannerTitle: "Contanos qué querés resolver",
    bannerDescription:
      "No hace falta un documento técnico: con una descripción del problema y de cómo lo resolvés hoy alcanza para empezar a conversar.",
  },
  projects: {
    metaTitle: "Proyectos",
    metaDescription:
      "Proyectos de AtajoLab: Adhera, una plataforma de preentrevistas para procesos de afiliación, y AtajoLab QR, una herramienta para crear códigos QR con diseño listo para usar.",
    eyebrow: "Proyectos",
    title: "Lo que ya construimos",
    description:
      "Soluciones a medida y herramientas propias. De cada una contamos qué problema resuelve, cómo funciona y, al final, con qué tecnologías está hecha.",
    listLabel: "Lista de proyectos",
    kinds: { CUSTOM_DEVELOPMENT: "Demo funcional", OWN_PRODUCT: "Herramienta propia" },
    stack: "Tecnologías",
    viewCase: "Ver el proyecto",
    bannerTitle: "¿Querés algo parecido para tu negocio?",
  },
  project: {
    metaTitle: (name: string) => `${name}: proyecto de AtajoLab`,
    highlights: "Qué hace",
    stack: "Tecnologías",
    screenshots: "Capturas",
    viewMicroapp: "Ver la herramienta",
    microappTitle: "También podés usarla vos",
    microappText: (name: string) =>
      `${name} es una de las herramientas listas para usar de AtajoLab. En su ficha vas a ver qué incluye, capturas y el enlace para abrirla.`,
    microappLink: "Ir a la ficha",
    bannerTitle: "¿Tenés un proyecto parecido?",
  },
  contact: {
    metaTitle: "Contacto",
    metaDescription: (email: string) =>
      `Contanos qué necesitás o consultá por una herramienta de AtajoLab. Escribinos a ${email}.`,
    eyebrow: "Contacto",
    title: "Contanos qué necesitás",
    description: "Escribinos con tus palabras: qué querés resolver y cómo lo hacés hoy. Te respondemos por correo.",
    sectionLabel: "Datos de contacto",
    emailHeading: "Escribinos por correo",
    emailHelp:
      "Elegí un tema y se abre tu correo con un mensaje para completar. Si no tenés una aplicación de correo configurada, copiá la dirección y escribinos desde tu correo habitual.",
    customLabel: "Necesito una solución a medida",
    customSubject: "Consulta por una solución a medida",
    customBody: ["Hola, AtajoLab:", "", "Quiero resolver…", "Hoy lo hago así…", "Lo usarían…", "", "Gracias."],
    toolLabel: "Quiero usar una herramienta",
    toolSubject: "Consulta sobre una herramienta",
    toolBody: ["Hola, AtajoLab:", "", "Me interesa la herramienta…", "Mi negocio es…", "Mi duda es…", "", "Gracias."],
    copy: "Copiar correo",
    copied: "Correo copiado",
    copyError: "No se pudo copiar",
    tipsTitle: "Qué conviene contarnos",
    tipsIntro: "No hace falta saber de tecnología. Con estos datos alcanza para empezar:",
    tips: [
      { title: "Qué querés resolver", text: "El problema o la tarea que te gustaría simplificar." },
      { title: "Cómo lo hacés hoy", text: "Planillas, mensajes, papel u otra herramienta." },
      { title: "Quiénes lo usarían", text: "Vos, tu equipo, tus clientes o todos." },
      { title: "Plazos", text: "Si hay alguna fecha que te importe." },
    ],
    nextTitle: "Qué pasa después",
    nextText:
      "Te respondemos por correo, te hacemos las preguntas que falten y, si corresponde, te enviamos una propuesta con el alcance, las etapas y el costo.",
    faqBefore: "¿Tenés una duda sobre cómo funcionan las herramientas? Mirá antes las",
    faqLink: "preguntas frecuentes",
  },
  faq: {
    metaTitle: "Preguntas frecuentes",
    metaDescription:
      "Respuestas simples sobre las herramientas de AtajoLab (microapps): cómo se usan, si funcionan desde el celular, cuánto cuestan y cómo pedir una solución a medida.",
    eyebrow: "Ayuda",
    title: "Preguntas frecuentes",
    description: "Respuestas cortas a las dudas más comunes sobre nuestras herramientas y las soluciones a medida.",
    groups: { microapps: "Sobre las herramientas", desarrollo: "Sobre las soluciones a medida" },
    bannerTitle: "¿No encontraste lo que buscabas?",
    bannerDescription: "Escribinos con tu pregunta y te respondemos por correo.",
  },
  notFound: {
    title: "No encontramos esta página",
    text: "Puede que la dirección esté mal escrita o que la página ya no exista.",
    home: "Volver al inicio",
    microapps: "Ver herramientas",
  },
  redirect: {
    title: "AtajoLab",
    text: "Te estamos llevando a la versión en español.",
    link: "Ir a AtajoLab en español",
  },
};

export type Dictionary = typeof es;
