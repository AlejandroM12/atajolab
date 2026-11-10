/**
 * Spanish (Argentina) interface texts. This file defines the shape of every
 * dictionary: `en.ts` must provide the same keys (enforced by TypeScript).
 * Content that belongs to data (microapps, projects, services, FAQ) lives in `src/data/`.
 */
export const es = {
  meta: {
    siteDescription:
      "Microapps, automatizaciones y software a medida para simplificar el trabajo de personas, profesionales y pequeños negocios.",
    defaultTitle: "AtajoLab: ideas simples, soluciones que funcionan",
    ogImageAlt: "AtajoLab: ideas simples, soluciones que funcionan.",
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
    microapps: "Microapps",
    solutions: "Soluciones",
    projects: "Proyectos",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
    mobileCta: "Contanos tu idea",
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
    tagline: "Microapps, automatizaciones y software a medida para simplificar el trabajo de todos los días.",
    sections: "Secciones del sitio",
    navigation: "Navegación",
    microapps: "Microapps",
    upcoming: "Próximas herramientas",
    contact: "Contacto",
    madeIn: "Hecho en Argentina.",
  },
  ctaBanner: {
    title: "¿Tenés un proceso que podría ser más simple?",
    description:
      "Contanos qué necesitás. Lo conversamos y vemos si una microapp o un desarrollo a medida es la mejor opción.",
    primary: "Contanos tu idea",
  },
  coldStart: "El servidor se activa con la primera visita: la primera carga puede tardar hasta un minuto.",
  disclaimersTitle: "Para tener en cuenta",
  home: {
    metaTitle: "AtajoLab: ideas simples, soluciones que funcionan",
    metaDescription:
      "Creamos herramientas digitales, microapps y software a medida para resolver problemas reales de tu negocio. Desarrollo y automatización desde Argentina.",
    hero: {
      eyebrow: "Software · Microapps · Automatización",
      titleLine1: "Ideas simples.",
      titleLine2: "Soluciones que funcionan.",
      subtitle:
        "Creamos herramientas digitales, microapps y software a medida para resolver problemas reales de tu negocio.",
      primary: "Explorar microapps",
      secondary: "Desarrollo a medida",
      madeFor: "Hecho en Argentina, para negocios, equipos y profesionales.",
    },
    shortcuts: {
      label: "Qué hacemos",
      question: "¿Qué querés resolver?",
      microapps: { title: "Microapps listas para usar", text: "Herramientas web para tareas concretas" },
      custom: { title: "Software a medida", text: "Aplicaciones y sistemas para tu negocio" },
      automation: { title: "Automatización de procesos", text: "Menos tareas manuales y repetitivas" },
      footer: "Atajos para tu negocio",
    },
    illustration: {
      microapps: "Microapps",
      custom: "A medida",
      automation: "Automatización",
      automatic: "Automático",
      steps: ["Formulario", "Validación", "Planilla", "Aviso"],
    },
    featured: {
      eyebrow: "Biblioteca de microapps",
      title: "Microapps listas para usar",
      description:
        "Herramientas web chicas y enfocadas: cada una resuelve un problema puntual. Algunas ya están disponibles y otras están en desarrollo.",
      action: "Ver la biblioteca",
    },
    benefits: {
      eyebrow: "Cómo las pensamos",
      title: "Simples por diseño",
      description:
        "Una buena herramienta se entiende en el primer uso. Ese es el criterio con el que diseñamos cada microapp.",
      items: [
        {
          title: "Fáciles de usar",
          text: "Interfaces simples, con los pasos justos para resolver una tarea sin leer un manual.",
        },
        { title: "Desde el navegador", text: "Se abren como cualquier página web. No hace falta instalar programas." },
        {
          title: "Problemas concretos",
          text: "Cada herramienta se enfoca en una tarea específica, sin sumar funciones que no vas a usar.",
        },
        { title: "Pensadas para el celular", text: "Diseñadas para usarse desde el celular, la tablet o la computadora." },
      ],
    },
    custom: {
      eyebrow: "Desarrollo a medida",
      title: "Cuando una herramienta genérica no alcanza",
      description:
        "También desarrollamos software a medida para empresas y equipos: aplicaciones web, sistemas de gestión, automatizaciones e integraciones pensadas para tu forma de trabajar.",
      primary: "Contanos qué necesitás",
      secondary: "Ver soluciones",
    },
    caseStudy: {
      eyebrow: "Proyectos y casos de estudio",
      badge: "Caso de estudio · Desarrollo a medida",
      cta: "Ver el caso",
      allProjects: "Ver todos los proyectos",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que más nos preguntan",
      description: "Si tenés otra duda, escribinos y te respondemos por correo.",
      action: "Ver todas las preguntas",
    },
  },
  labels: {
    pricing: { FREE: "Gratis", ONE_TIME: "Pago único", SUBSCRIPTION: "Suscripción" },
    status: { AVAILABLE: "Disponible", COMING_SOON: "Próximamente", UNAVAILABLE: "No disponible" },
    planned: "previsto",
    perMonth: "/ mes",
    perYear: "/ año",
    cta: {
      "use-free": "Usar gratis",
      "open-app": "Abrir herramienta",
      checkout: "Comprar",
      contact: "Consultar disponibilidad",
      "coming-soon": "Próximamente",
      unavailable: "No disponible",
    },
    viewDetails: "Ver detalles",
    inquirySubject: (name: string) => `Consulta sobre ${name}`,
    interestSubject: (name: string) => `Interés en ${name}`,
  },
  catalog: {
    metaTitle: "Biblioteca de microapps",
    metaDescription:
      "Herramientas web para resolver tareas concretas de negocios y profesionales. Buscá por nombre y filtrá por categoría, modalidad y disponibilidad.",
    eyebrow: "Microapps",
    title: "Biblioteca de microapps",
    intro: "Herramientas web chicas y enfocadas, para resolver tareas concretas sin instalar nada.",
    counts: (available: number, upcoming: number) =>
      `${available === 1 ? "Hay 1 disponible" : `Hay ${available} disponibles`}${upcoming > 0 ? ` y ${upcoming} en desarrollo` : ""}.`,
    sectionLabel: "Catálogo",
    searchLabel: "Buscar herramientas",
    searchPlaceholder: "Por ejemplo: QR, presupuestos, turnos…",
    clearSearch: "Borrar búsqueda",
    category: "Categoría",
    pricing: "Modalidad",
    status: "Estado",
    allFeminine: "Todas",
    allMasculine: "Todos",
    results: (count: number, filtered: boolean) =>
      `${count === 1 ? "herramienta" : "herramientas"}${filtered ? " con estos filtros" : " en la biblioteca"}`,
    clearFilters: "Limpiar filtros",
    toolsHeading: "Herramientas",
    emptyTitle: "No encontramos herramientas con esos filtros",
    emptyBefore: "Probá con otra palabra o quitá algún filtro. Si buscás una herramienta que todavía no existe,",
    emptyLink: "contanos tu idea",
    bannerTitle: "¿Necesitás una herramienta que no está en la lista?",
    bannerDescription:
      "Si tenés una tarea repetitiva o un proceso que podría resolverse con una herramienta simple, contanos. Puede ser una próxima microapp o un desarrollo a medida.",
  },
  microapp: {
    whatItIs: "Qué es",
    whatWeAreBuilding: "Qué estamos preparando",
    screenshots: "Capturas",
    screenshotsNote: "Imágenes de la herramienta con datos de ejemplo.",
    features: "Funcionalidades",
    plannedFeatures: "Funcionalidades previstas",
    plannedNote: "Pueden cambiar antes del lanzamiento.",
    benefits: "Beneficios",
    audience: "Para quién es",
    pricingModel: "Modalidad",
    planned: "(prevista)",
    price: "Precio",
    priceInApp: "Se informa en la herramienta",
    priceTbd: "A definir",
    opensAt: "Se abre en",
    priceNote: "El precio y las condiciones se informan dentro de la herramienta.",
    comingSoonBefore: "Esta herramienta está en desarrollo y todavía no se puede usar. Si te interesa,",
    comingSoonLink: "escribinos",
    comingSoonAfter: ": nos ayuda a decidir qué herramientas priorizar.",
    viewDemo: "Ver demo",
    caseStudy: "Caso de estudio",
    howWeBuilt: (name: string) => `Cómo construimos ${name}`,
    otherMicroapps: "Otras microapps",
  },
  solutions: {
    metaTitle: "Soluciones a medida",
    metaDescription:
      "Desarrollo de aplicaciones web, sistemas de gestión, automatización de procesos, integraciones con APIs, dashboards y herramientas internas para empresas.",
    eyebrow: "Desarrollo a medida",
    title: "Software pensado para tu forma de trabajar",
    description:
      "Cuando una herramienta genérica no alcanza, desarrollamos aplicaciones, sistemas y automatizaciones a medida para empresas, equipos y profesionales.",
    primary: "Contanos qué necesitás",
    secondary: "Ver proyectos",
    servicesEyebrow: "Qué hacemos",
    servicesTitle: "Seis tipos de solución",
    servicesDescription:
      "Muchos proyectos combinan varias: un sistema de gestión con un dashboard, o una aplicación web con integraciones.",
    problem: "Qué resuelve",
    solution: "Qué podemos desarrollar",
    fitsFor: "Para quién",
    examples: "Ejemplos",
    processEyebrow: "Cómo trabajamos",
    processTitle: "De la idea a una herramienta en uso",
    steps: [
      {
        title: "Conversamos",
        text: "Nos contás qué necesitás y cómo trabajás hoy. Hacemos las preguntas necesarias para entender el problema antes de hablar de tecnología.",
      },
      {
        title: "Proponemos",
        text: "Te enviamos una propuesta con el alcance, las etapas y el costo, para que decidas con la información completa.",
      },
      {
        title: "Desarrollamos por etapas",
        text: "Avanzamos en entregas parciales que podés revisar y probar, en lugar de esperar al final para ver el resultado.",
      },
      {
        title: "Entregamos",
        text: "Publicamos la solución y te mostramos cómo usarla. Si aparecen ajustes o nuevas necesidades, los conversamos.",
      },
    ],
    exampleLabel: "Un ejemplo de desarrollo a medida",
    exampleTitle: "Adhera: preentrevistas conversacionales y panel para asesores",
    exampleCta: "Ver el caso",
    bannerTitle: "Contanos qué querés resolver",
    bannerDescription:
      "No hace falta un documento técnico: con una descripción del problema y de cómo lo resolvés hoy alcanza para empezar a conversar.",
  },
  projects: {
    metaTitle: "Proyectos",
    metaDescription:
      "Proyectos desarrollados por AtajoLab: Adhera, una plataforma de preentrevistas para procesos de afiliación, y AtajoLab QR, un editor de carteles QR para reseñas de Google.",
    eyebrow: "Proyectos",
    title: "Lo que construimos",
    description:
      "Desarrollos a medida y productos propios. Para cada uno contamos qué problema aborda, cómo funciona y con qué tecnologías está hecho.",
    listLabel: "Lista de proyectos",
    kinds: { CUSTOM_DEVELOPMENT: "Desarrollo a medida", OWN_PRODUCT: "Producto propio" },
    stack: "Tecnologías",
    viewCase: "Ver el caso",
    bannerTitle: "¿Querés desarrollar algo así para tu negocio?",
  },
  project: {
    metaTitle: (name: string) => `${name}: caso de estudio`,
    highlights: "Características",
    stack: "Tecnologías",
    screenshots: "Capturas",
    viewMicroapp: "Ver la microapp",
    microappTitle: "Disponible en la biblioteca",
    microappText: (name: string) =>
      `${name} también es una microapp de AtajoLab. En su ficha vas a encontrar las funcionalidades, capturas y el enlace para abrirla.`,
    microappLink: "Ir a la ficha",
    bannerTitle: "¿Tenés un proyecto parecido?",
  },
  contact: {
    metaTitle: "Contacto",
    metaDescription: (email: string) => `Contanos tu idea o consultanos por una microapp. Escribinos a ${email}.`,
    eyebrow: "Contacto",
    title: "Contanos tu idea",
    description: "Escribinos por correo para consultar por una microapp o para pedir un desarrollo a medida.",
    sectionLabel: "Datos de contacto",
    emailHeading: "Correo",
    emailHelp:
      "El botón abre tu aplicación de correo con un mensaje de ejemplo para completar. Si no tenés una configurada, copiá la dirección y escribinos desde tu correo habitual.",
    write: "Escribir un correo",
    copy: "Copiar correo",
    copied: "Correo copiado",
    copyError: "No se pudo copiar",
    mailSubject: "Consulta desde atajolab.dev",
    mailBody: ["Hola, AtajoLab:", "", "Quiero resolver…", "Hoy lo hago así…", "Lo usarían…", "", "Gracias."],
    tipsTitle: "Qué conviene contar",
    tipsIntro: "No hace falta un documento técnico. Con estos puntos alcanza para empezar:",
    tips: [
      { title: "Qué querés resolver", text: "El problema o la tarea que te gustaría simplificar." },
      { title: "Cómo lo hacés hoy", text: "Planillas, mensajes, papel u otra herramienta." },
      { title: "Quiénes lo usarían", text: "Vos, tu equipo, tus clientes o todos ellos." },
      { title: "Plazos", text: "Si hay alguna fecha que te importe." },
    ],
    faqBefore: "¿Tenés una duda sobre una microapp? Revisá antes las",
    faqLink: "preguntas frecuentes",
  },
  faq: {
    metaTitle: "Preguntas frecuentes",
    metaDescription:
      "Qué es una microapp, cómo se accede, si funciona desde el celular, diferencias entre herramientas gratuitas y de pago, y cómo pedir un desarrollo a medida.",
    eyebrow: "Ayuda",
    title: "Preguntas frecuentes",
    description: "Respuestas cortas a las dudas más comunes sobre las microapps y el desarrollo a medida.",
    groups: { microapps: "Sobre las microapps", desarrollo: "Sobre el desarrollo a medida" },
    bannerTitle: "¿No encontraste lo que buscabas?",
    bannerDescription: "Escribinos con tu pregunta y te respondemos por correo.",
  },
  notFound: {
    title: "No encontramos esta página",
    text: "Puede que la dirección esté mal escrita o que la página ya no exista.",
    home: "Volver al inicio",
    microapps: "Ver microapps",
  },
  redirect: {
    title: "AtajoLab",
    text: "Te estamos llevando a la versión en español.",
    link: "Ir a AtajoLab en español",
  },
};

export type Dictionary = typeof es;
