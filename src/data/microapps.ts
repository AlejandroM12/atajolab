import type { Locale } from "../i18n/config";
import type { Microapp, MicroappImage, MicroappImageSource, MicroappSource } from "../types/microapp";

/**
 * Microapp catalog, written once with every text in Spanish and English.
 * Adding a tool here is enough: the catalog, filters, detail pages, sitemap
 * and metadata of both languages read from this list.
 *
 * Rules (checked by tests):
 * - Never set `price` until it is confirmed and public.
 * - Tools that do not exist yet use status COMING_SOON and no `appUrl`.
 * - `checkout.enabled` stays false until a real checkout exists.
 */
const comingSoonNote = {
  es: "Todavía no está disponible. Lo que describimos es lo que tenemos previsto y puede cambiar antes del lanzamiento.",
  en: "It isn't available yet. What we describe here is what we have planned, and it may change before launch.",
};

export const microappSources: MicroappSource[] = [
  {
    id: "atajolab-qr",
    slug: { es: "atajolab-qr", en: "atajolab-qr" },
    icon: "qr",
    name: { es: "AtajoLab QR", en: "AtajoLab QR" },
    headline: { es: "Conseguí más reseñas en Google", en: "Get more Google reviews" },
    shortDescription: {
      es: "Facilitá que tus clientes dejen una opinión sobre tu negocio escaneando un código desde su celular.",
      en: "Make it easy for customers to review your business by scanning a code with their phone.",
    },
    fullDescription: {
      es: [
        "Cuando un cliente quedó conforme es el mejor momento para pedirle una opinión. Con AtajoLab QR armás un cartel con un código QR que lleva directo al formulario de reseñas de tu negocio en Google: tu cliente lo escanea con el celular y deja su comentario. También podés usarlo para que te encuentren en Google Maps.",
        "Pegás el enlace de tu negocio y la herramienta arma el cartel, listo para imprimir. Es de tamaño A6 (105 × 148 mm). Podés partir de un diseño sugerido o empezar de cero, y cambiar textos, colores, tipografías e imágenes hasta que quede con el estilo de tu negocio.",
        "Es de pago único. El precio y las condiciones se muestran dentro de la herramienta.",
      ],
      en: [
        "The best moment to ask for a review is right after a customer had a good experience. With AtajoLab QR you build a sign with a QR code that opens your business's Google review form: customers scan it with their phone and leave a comment. You can also use it to help people find you on Google Maps.",
        "Paste your business link and the tool builds the sign, ready to print. It's A6 size (105 × 148 mm). Start from a suggested design or from scratch, and change the text, colors, fonts and images until it matches your business.",
        "It's a one-time purchase. Pricing and terms are shown inside the tool.",
      ],
    },
    category: "marketing",
    pricingModel: "ONE_TIME",
    status: "AVAILABLE",
    featured: true,
    images: [
      {
        src: "/images/microapps/atajolab-qr/editor.webp",
        width: 880,
        height: 540,
        alt: {
          es: "Editor de AtajoLab QR con un cartel de ejemplo para una cafetería y estilos sugeridos a la izquierda.",
          en: "AtajoLab QR editor showing a sample sign for a café, with suggested styles on the left.",
        },
        caption: {
          es: "Editor sobre lienzo A6 con estilos sugeridos.",
          en: "A6 canvas editor with suggested styles.",
        },
      },
      {
        src: "/images/microapps/atajolab-qr/cartel-cafeteria.webp",
        width: 800,
        height: 1128,
        alt: {
          es: "Cartel de ejemplo para una cafetería ficticia con el texto “¿Cómo estuvo el café?” y un código QR.",
          en: "Sample sign for a fictional café with the text “¿Cómo estuvo el café?” and a QR code.",
        },
        caption: { es: "Cartel de ejemplo: cafetería.", en: "Sample sign: café." },
      },
      {
        src: "/images/microapps/atajolab-qr/cartel-peluqueria.webp",
        width: 800,
        height: 1128,
        alt: {
          es: "Cartel de ejemplo para una peluquería ficticia con un código QR.",
          en: "Sample sign for a fictional hair salon with a QR code.",
        },
        caption: { es: "Cartel de ejemplo: peluquería.", en: "Sample sign: hair salon." },
      },
      {
        src: "/images/microapps/atajolab-qr/cartel-taller.webp",
        width: 800,
        height: 1128,
        alt: {
          es: "Cartel de ejemplo para un taller mecánico ficticio con un código QR.",
          en: "Sample sign for a fictional auto repair shop with a QR code.",
        },
        caption: { es: "Cartel de ejemplo: taller.", en: "Sample sign: repair shop." },
      },
    ],
    features: {
      es: [
        "Código QR que lleva al formulario de reseñas de Google o a tu ubicación en Google Maps.",
        "Revisa que el enlace funcione antes de armar el cartel.",
        "Cartel A6 (105 × 148 mm) que editás directamente en pantalla.",
        "Diseños sugeridos para distintos rubros, que podés modificar.",
        "Cambio de textos, colores, tipografías e imágenes.",
        "Descarga en PNG, SVG y PDF, listos para imprimir, una vez confirmado el pago.",
        "No hace falta crear una cuenta. Si cambiás de dispositivo, recuperás tus archivos con tu correo.",
      ],
      en: [
        "QR code that opens your Google review form or your location on Google Maps.",
        "Checks that your link works before building the sign.",
        "A6 sign (105 × 148 mm) that you edit right on screen.",
        "Suggested designs for different kinds of business, which you can change.",
        "Change text, colors, fonts and images.",
        "PNG, SVG and PDF downloads, ready to print, once payment is confirmed.",
        "No account needed. If you switch devices, you can recover your files with your email.",
      ],
    },
    benefits: {
      es: [
        "Tus clientes llegan al formulario de reseñas con un escaneo, sin tener que buscar tu negocio.",
        "Un cartel con el estilo de tu negocio, sin necesidad de saber diseño.",
        "Archivos listos para imprimir en tu casa o en una imprenta.",
      ],
      en: [
        "Customers reach your review form with a single scan, without searching for your business.",
        "A sign in your business's style, no design skills needed.",
        "Files ready to print at home or at a print shop.",
      ],
    },
    audience: {
      es: [
        "Comercios con atención al público.",
        "Restaurantes, cafés, peluquerías, talleres y servicios.",
        "Profesionales con perfil de empresa en Google.",
      ],
      en: [
        "Businesses that serve customers in person.",
        "Restaurants, cafés, hair salons, repair shops and services.",
        "Professionals with a Google Business Profile.",
      ],
    },
    appUrl: "https://qr.atajolab.dev",
    checkout: { provider: "mercadopago", enabled: false },
    hosting: { coldStart: true },
    projectId: "atajolab-qr",
    seoTitle: {
      es: "AtajoLab QR: carteles QR para reseñas de Google",
      en: "AtajoLab QR: QR code signs for Google reviews",
    },
    seoDescription: {
      es: "Creá un cartel con código QR para recibir reseñas en Google o compartir tu ubicación en Google Maps. Editor A6 y archivos PNG, SVG y PDF.",
      en: "Create a QR code sign to get Google reviews or share your location on Google Maps. A6 editor with PNG, SVG and PDF files.",
    },
  },
  {
    id: "calculadora-costos-precios",
    slug: { es: "calculadora-costos-precios", en: "cost-pricing-calculator" },
    icon: "calculator",
    name: { es: "Calculadora de costos y precios", en: "Cost and Pricing Calculator" },
    headline: { es: "Sabé cuánto cobrar por lo que vendés", en: "Know what to charge for what you sell" },
    shortDescription: {
      es: "Una calculadora para sumar tus costos, elegir cuánto querés ganar y llegar a un precio de venta.",
      en: "A calculator to add up your costs, choose how much you want to earn and arrive at a selling price.",
    },
    fullDescription: {
      es: [
        "Estamos preparando una calculadora para que sumes los costos de un producto o servicio, definas cuánto querés ganar y llegues a un precio de venta.",
        comingSoonNote.es,
      ],
      en: [
        "We're preparing a calculator so you can add up what a product or service costs you, set how much you want to earn and arrive at a selling price.",
        comingSoonNote.en,
      ],
    },
    category: "finanzas",
    pricingModel: "FREE",
    status: "COMING_SOON",
    featured: true,
    images: [],
    features: {
      es: [
        "Carga de los costos de un producto o servicio.",
        "Cálculo de la ganancia.",
        "Precio de venta sugerido según lo que querés ganar.",
      ],
      en: [
        "Enter the costs of a product or service.",
        "Profit calculation.",
        "Suggested selling price based on what you want to earn.",
      ],
    },
    benefits: {
      es: ["Ver con claridad cuánto te cuesta lo que vendés.", "Poner precios con un criterio, no a ojo."],
      en: ["See clearly what each thing you sell costs you.", "Set prices with a method, not by guesswork."],
    },
    audience: {
      es: ["Emprendedores y pequeños comercios.", "Personas que venden productos o servicios propios."],
      en: ["Entrepreneurs and small shops.", "People who sell their own products or services."],
    },
  },
  {
    id: "calculadora-tarifa-hora",
    slug: { es: "calculadora-tarifa-hora", en: "hourly-rate-calculator" },
    icon: "clock",
    name: { es: "Calculadora de tarifa por hora", en: "Hourly Rate Calculator" },
    headline: { es: "Definí cuánto cobrar por tu hora de trabajo", en: "Work out what to charge for your time" },
    shortDescription: {
      es: "Para profesionales independientes: calculá una tarifa por hora a partir de tus gastos, tus horas disponibles y lo que querés ganar.",
      en: "For freelancers: work out an hourly rate from your expenses, your available hours and what you want to earn.",
    },
    fullDescription: {
      es: [
        "Estamos preparando una calculadora para profesionales independientes que necesitan definir una tarifa por hora a partir de sus gastos, sus horas disponibles y el ingreso que buscan.",
        comingSoonNote.es,
      ],
      en: [
        "We're preparing a calculator for freelancers who need to set an hourly rate based on their expenses, available hours and target income.",
        comingSoonNote.en,
      ],
    },
    category: "finanzas",
    pricingModel: "FREE",
    status: "COMING_SOON",
    featured: false,
    images: [],
    features: {
      es: [
        "Carga de gastos mensuales.",
        "Horas de trabajo disponibles.",
        "Tarifa por hora calculada a partir del ingreso buscado.",
      ],
      en: ["Monthly expenses.", "Available working hours.", "Hourly rate based on your target income."],
    },
    benefits: {
      es: [
        "Tener un punto de partida concreto para presupuestar.",
        "Entender qué necesitás cobrar para cubrir tus gastos.",
      ],
      en: [
        "A concrete starting point for your quotes.",
        "Understand what you need to charge to cover your costs.",
      ],
    },
    audience: {
      es: ["Profesionales independientes y freelancers.", "Personas que cobran por hora o por proyecto."],
      en: ["Freelancers and independent professionals.", "People who charge by the hour or by project."],
    },
  },
  {
    id: "generador-presupuestos",
    slug: { es: "generador-presupuestos", en: "quote-generator" },
    icon: "document",
    name: { es: "Generador de presupuestos", en: "Quote Generator" },
    headline: { es: "Presentá presupuestos prolijos a tus clientes", en: "Send your clients tidy, professional quotes" },
    shortDescription: {
      es: "Armá tus presupuestos con una buena presentación y compartilos con tus clientes.",
      en: "Put your quotes together with a polished look and share them with your clients.",
    },
    fullDescription: {
      es: [
        "Estamos preparando una herramienta para crear presupuestos con una presentación profesional y compartirlos con tus clientes.",
        comingSoonNote.es,
      ],
      en: [
        "We're preparing a tool to create professional-looking quotes and share them with your clients.",
        comingSoonNote.en,
      ],
    },
    category: "ventas",
    pricingModel: "ONE_TIME",
    status: "COMING_SOON",
    featured: false,
    images: [],
    features: {
      es: [
        "Carga de ítems, cantidades y precios.",
        "Presupuesto con formato profesional.",
        "Opciones para compartirlo con tus clientes.",
      ],
      en: ["Items, quantities and prices.", "Professionally formatted quote.", "Options to share it with your clients."],
    },
    benefits: {
      es: ["Presupuestos con una presentación cuidada.", "Menos tiempo armando documentos a mano."],
      en: ["Quotes with a polished presentation.", "Less time spent building documents by hand."],
    },
    audience: {
      es: ["Profesionales independientes.", "Oficios y empresas de servicios."],
      en: ["Independent professionals.", "Trades and service businesses."],
    },
  },
  {
    id: "agendia",
    slug: { es: "agendia", en: "agendia" },
    icon: "calendar",
    name: { es: "Agendia", en: "Agendia" },
    headline: { es: "Que tus clientes reserven turno online", en: "Let your clients book appointments online" },
    shortDescription: {
      es: "Organizá tus turnos, automatizá tus reservas y dedicá más tiempo a tu negocio.",
      en: "Organize your appointments, automate your bookings and spend more time on your business.",
    },
    fullDescription: {
      es: [
        "Agendia es una plataforma de gestión de turnos pensada para profesionales, emprendedores y negocios que trabajan con citas. Permite administrar la agenda, recibir reservas online y ofrecer a los clientes una página personalizada con la identidad de cada negocio.",
        "Tus clientes reservan desde tu propio enlace, sin crear cuentas ni instalar aplicaciones, y cada reserva aparece al instante en tu agenda. Funciona desde el navegador de la computadora, la tablet o el celular.",
      ],
      en: [
        "Agendia is an appointment management platform for professionals, entrepreneurs and businesses that work by appointment. It lets you manage your schedule, take bookings online and give your clients a booking page that carries your business's identity.",
        "Your clients book from your own link, without creating accounts or installing apps, and every booking shows up instantly in your schedule. It works in the browser of a computer, a tablet or a phone.",
      ],
    },
    category: "gestion",
    pricingModel: "SUBSCRIPTION",
    pricingLabel: {
      es: "Suscripción mensual o licencia de pago único",
      en: "Monthly subscription or one-time license",
    },
    pricingNote: {
      es: "Precios en pesos argentinos, tal como figuran en agendia.atajolab.dev, donde siempre está el valor actualizado. En la licencia independiente, a partir del mes 13 el hosting, el dominio y el soporte se renuevan cada año al valor vigente en ese momento.",
      en: "Prices in Argentine pesos, as listed on agendia.atajolab.dev, where the current price is always published. On the independent license, from month 13 hosting, domain and support renew every year at the price in force at that time.",
    },
    plans: [
      {
        id: "profesional",
        price: 14000,
        currency: "ARS",
        billingPeriod: "MONTHLY",
        name: { es: "Plan Profesional", en: "Professional plan" },
        details: {
          es: [
            "7 días gratis con todas las funciones.",
            "Agenda, turnos y clientes sin límite.",
            "Tu página de reservas online.",
            "Confirmaciones y recordatorios por correo electrónico.",
            "Hosting y soporte incluidos.",
            "Sin permanencia: cancelás cuando quieras.",
          ],
          en: [
            "7 days free with every feature.",
            "Unlimited schedule, appointments and clients.",
            "Your online booking page.",
            "Confirmations and reminders by email.",
            "Hosting and support included.",
            "No minimum term: cancel whenever you want.",
          ],
        },
      },
      {
        id: "licencia",
        price: 199000,
        currency: "ARS",
        name: { es: "Licencia independiente", en: "Independent license" },
        details: {
          es: [
            "Licencia de uso permanente, sin código fuente.",
            "Instalación y configuración incluidas.",
            "Instalación independiente, con base de datos propia.",
            "Hosting, dominio y soporte incluidos durante 12 meses.",
            "Agenda, reservas online y recordatorios.",
          ],
          en: [
            "Permanent license to use, source code not included.",
            "Installation and setup included.",
            "Independent installation with its own database.",
            "Hosting, domain and support included for 12 months.",
            "Schedule, online bookings and reminders.",
          ],
        },
      },
    ],
    status: "AVAILABLE",
    featured: true,
    imageStyle: "stage",
    logo: "/images/microapps/agendia/icon.svg",
    images: [
      {
        src: "/images/microapps/agendia/agenda.webp",
        width: 1152,
        height: 1182,
        alt: {
          es: "Agenda de Agendia con la semana, el día seleccionado y los turnos de la jornada, con datos de ejemplo.",
          en: "Agendia schedule showing the week, the selected day and the day's appointments, with sample data.",
        },
        caption: { es: "Agenda del día.", en: "The day's schedule." },
      },
      {
        src: "/images/microapps/agendia/reservas.webp",
        width: 672,
        height: 828,
        alt: {
          es: "Página de reservas de un negocio de ejemplo en Agendia, con servicio, día y horarios disponibles en un celular.",
          en: "Booking page of a sample business in Agendia, with service, day and available times on a phone.",
        },
        caption: { es: "Página de reservas del negocio.", en: "The business's booking page." },
      },
      {
        src: "/images/microapps/agendia/recordatorio.webp",
        width: 960,
        height: 516,
        alt: {
          es: "Correo de recordatorio de Agendia con el servicio, la fecha y un botón para ver, reprogramar o cancelar el turno.",
          en: "Agendia reminder email with the service, the date and a button to view, reschedule or cancel the appointment.",
        },
        caption: { es: "Recordatorio por correo electrónico.", en: "Reminder by email." },
      },
    ],
    features: {
      es: [
        "Agenda digital.",
        "Reservas online las 24 horas.",
        "Página de reservas personalizada.",
        "Logo, portada, colores y tipografía propios.",
        "Enlace personalizado para compartir por redes sociales y WhatsApp.",
        "Código QR descargable.",
        "Gestión de clientes y servicios.",
        "Configuración de horarios y disponibilidad.",
        "Recordatorios automáticos por correo electrónico.",
        "Consulta, cancelación y reprogramación de turnos.",
        "Tus clientes reservan sin instalar aplicaciones.",
        "Acceso desde computadora, tablet y celular.",
      ],
      en: [
        "Digital schedule.",
        "Online bookings, 24 hours a day.",
        "Customized booking page.",
        "Your own logo, cover image, colors and typeface.",
        "Personal link to share on social media and WhatsApp.",
        "Downloadable QR code.",
        "Client and service management.",
        "Working hours and availability settings.",
        "Automatic reminders by email.",
        "View, cancel and reschedule appointments.",
        "Your clients book without installing any app.",
        "Access from a computer, tablet or phone.",
      ],
    },
    benefits: {
      es: [
        "Dedicás menos tiempo a coordinar turnos por mensaje.",
        "Tus clientes reservan solos, a cualquier hora.",
        "Una página de reservas con la imagen de tu negocio.",
        "Recordatorios que se envían solos por correo electrónico.",
      ],
      en: [
        "Spend less time arranging appointments by message.",
        "Your clients book on their own, at any hour.",
        "A booking page that looks like your business.",
        "Reminders that go out by themselves, by email.",
      ],
    },
    audience: {
      es: [
        "Psicólogos, nutricionistas, kinesiólogos y osteópatas.",
        "Barberías, peluquerías, centros de estética y manicuristas.",
        "Otros profesionales y negocios que trabajan con turnos.",
      ],
      en: [
        "Psychologists, nutritionists, physiotherapists and osteopaths.",
        "Barbershops, hair salons, beauty centers and nail artists.",
        "Other professionals and businesses that work by appointment.",
      ],
    },
    problems: {
      es: [
        "Coordinar turnos por mensaje, a cualquier hora, con mucho ida y vuelta.",
        "Tener los turnos repartidos entre cuadernos, mensajes y la memoria.",
        "Clientes que se olvidan del turno o necesitan cambiarlo y tienen que escribirte.",
        "Turnos pisados cuando dos personas piden el mismo horario.",
      ],
      en: [
        "Arranging appointments by message at all hours, with lots of back and forth.",
        "Having appointments scattered across notebooks, messages and memory.",
        "Clients who forget their appointment or need to change it and have to message you.",
        "Double bookings when two people ask for the same time.",
      ],
    },
    steps: {
      es: [
        { title: "Creá tu cuenta", text: "Registrate con tu nombre, tu correo y una contraseña." },
        { title: "Contanos cómo trabajás", text: "Cargá tus servicios, cuánto duran y en qué horarios atendés." },
        {
          title: "Compartí tu enlace",
          text: "Pegalo en tu Instagram o en WhatsApp y empezá a recibir reservas en tu agenda.",
        },
      ],
      en: [
        { title: "Create your account", text: "Sign up with your name, your email and a password." },
        { title: "Tell us how you work", text: "Add your services, how long they last and the hours you work." },
        {
          title: "Share your link",
          text: "Paste it in your Instagram or in WhatsApp and start getting bookings in your schedule.",
        },
      ],
    },
    appUrl: "https://agendia.atajolab.dev",
    ctaLabel: { es: "Ir a Agendia", en: "Go to Agendia" },
    trial: {
      label: { es: "Probar 7 días gratis", en: "Try it free for 7 days" },
      href: "https://agendia.atajolab.dev/registro",
    },
    officialLinks: [
      { label: { es: "Sitio oficial de Agendia", en: "Agendia official site" }, href: "https://agendia.atajolab.dev" },
      { label: { es: "Precios y planes", en: "Pricing and plans" }, href: "https://agendia.atajolab.dev/precios" },
      {
        label: { es: "Licencia independiente", en: "Independent license" },
        href: "https://agendia.atajolab.dev/licencia",
      },
    ],
    seoTitle: {
      es: "Agendia: software de turnos y agenda online para profesionales",
      en: "Agendia: online appointment scheduling software for professionals",
    },
    seoDescription: {
      es: "Agendia es un sistema de turnos online para profesionales y negocios de Argentina: agenda digital, reservas las 24 horas, página de reservas propia y recordatorios por correo.",
      en: "Agendia is online appointment scheduling software for professionals and businesses in Argentina: digital schedule, 24/7 bookings, your own booking page and email reminders.",
    },
  },
];

export function resolveImage(image: MicroappImageSource, locale: Locale): MicroappImage {
  return {
    src: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt[locale],
    caption: image.caption?.[locale],
  };
}

export function resolveMicroapp(source: MicroappSource, locale: Locale): Microapp {
  return {
    ...source,
    slug: source.slug[locale],
    name: source.name[locale],
    headline: source.headline[locale],
    shortDescription: source.shortDescription[locale],
    fullDescription: source.fullDescription[locale],
    images: source.images.map((image) => resolveImage(image, locale)),
    features: source.features[locale],
    benefits: source.benefits[locale],
    audience: source.audience[locale],
    pricingLabel: source.pricingLabel?.[locale],
    pricingNote: source.pricingNote?.[locale],
    ctaLabel: source.ctaLabel?.[locale],
    problems: source.problems?.[locale],
    steps: source.steps?.[locale],
    plans: source.plans?.map((plan) => ({
      ...plan,
      name: plan.name[locale],
      details: plan.details[locale],
    })),
    trial: source.trial && { label: source.trial.label[locale], href: source.trial.href },
    officialLinks: source.officialLinks?.map((link) => ({ label: link.label[locale], href: link.href })),
    seoTitle: source.seoTitle?.[locale],
    seoDescription: source.seoDescription?.[locale],
  };
}

/** The catalog in one language. */
export function getMicroapps(locale: Locale): Microapp[] {
  return microappSources.map((source) => resolveMicroapp(source, locale));
}
