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
    featured: true,
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
    id: "agenda-turnos",
    slug: { es: "agenda-turnos", en: "appointment-scheduler" },
    icon: "calendar",
    name: { es: "Agenda de turnos", en: "Appointment Scheduler" },
    headline: { es: "Ordená los turnos de tu negocio", en: "Keep your appointments organized" },
    shortDescription: {
      es: "Un lugar para tus turnos, tus clientes y los horarios en los que atendés, accesible desde el navegador.",
      en: "One place for your appointments, your clients and the hours you're available, right from your browser.",
    },
    fullDescription: {
      es: [
        "Estamos preparando una agenda para organizar turnos, registrar clientes y administrar los horarios de atención de un negocio o profesional.",
        comingSoonNote.es,
      ],
      en: [
        "We're preparing a scheduler to organize appointments, keep track of clients and manage availability for a business or professional.",
        comingSoonNote.en,
      ],
    },
    category: "gestion",
    pricingModel: "SUBSCRIPTION",
    status: "COMING_SOON",
    featured: false,
    images: [],
    features: {
      es: ["Agenda de turnos.", "Registro de clientes.", "Manejo de tus horarios de atención."],
      en: ["Appointment calendar.", "Client records.", "Management of your opening hours."],
    },
    benefits: {
      es: ["Tener los turnos en un solo lugar.", "Ordenar la disponibilidad de la semana."],
      en: ["All your appointments in one place.", "An organized view of your week."],
    },
    audience: {
      es: ["Profesionales que trabajan con turnos.", "Consultorios, estudios y centros de estética."],
      en: ["Professionals who work by appointment.", "Clinics, studios and beauty salons."],
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
    seoTitle: source.seoTitle?.[locale],
    seoDescription: source.seoDescription?.[locale],
  };
}

/** The catalog in one language. */
export function getMicroapps(locale: Locale): Microapp[] {
  return microappSources.map((source) => resolveMicroapp(source, locale));
}
