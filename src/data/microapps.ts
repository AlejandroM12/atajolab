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
  es: "Todavía no está disponible. Las funcionalidades descriptas son las previstas y pueden cambiar antes del lanzamiento.",
  en: "It isn't available yet. The features described are planned and may change before launch.",
};

export const microappSources: MicroappSource[] = [
  {
    id: "atajolab-qr",
    slug: { es: "atajolab-qr", en: "atajolab-qr" },
    icon: "qr",
    name: { es: "AtajoLab QR", en: "AtajoLab QR" },
    shortDescription: {
      es: "Creá un cartel con código QR para que tus clientes dejen una reseña en Google o encuentren tu negocio en Google Maps.",
      en: "Create a QR code sign that helps customers leave a Google review or find your business on Google Maps.",
    },
    fullDescription: {
      es: [
        "AtajoLab QR es una herramienta web para comercios y profesionales que quieren facilitar el acceso a su perfil de Google. Pegás el enlace para dejar una reseña o el de tu ubicación en Google Maps, y la herramienta arma un cartel con el código QR listo para imprimir.",
        "El editor trabaja sobre un cartel A6 (105 × 148 mm). Podés partir de un estilo sugerido o empezar desde cero, y modificar textos, colores, tipografías e imágenes directamente sobre el diseño.",
        "Es una herramienta de pago único. El precio y las condiciones se informan dentro de la propia aplicación.",
      ],
      en: [
        "AtajoLab QR is a web tool for shops and professionals who want to make their Google profile easier to reach. Paste your review link or your Google Maps location link, and the tool builds a print-ready sign with the QR code.",
        "The editor works on an A6 sign (105 × 148 mm). Start from a suggested style or from scratch, and edit text, colors, fonts and images right on the design.",
        "It's a one-time purchase. Pricing and terms are shown inside the app itself.",
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
        "Código QR hacia el formulario de reseñas de Google o hacia tu ubicación en Google Maps.",
        "Validación del enlace antes de armar el cartel.",
        "Editor visual sobre un cartel A6 (105 × 148 mm).",
        "Estilos sugeridos para distintos rubros, totalmente editables.",
        "Edición de textos, colores, tipografías e imágenes.",
        "Descarga en PNG, SVG y PDF una vez confirmado el pago.",
        "Sin crear una cuenta. Si cambiás de dispositivo, recuperás tus archivos con tu correo.",
      ],
      en: [
        "QR code that opens your Google review form or your location on Google Maps.",
        "Link validation before the sign is created.",
        "Visual editor on an A6 sign (105 × 148 mm).",
        "Suggested styles for different kinds of business, fully editable.",
        "Edit text, colors, fonts and images.",
        "PNG, SVG and PDF downloads once payment is confirmed.",
        "No account needed. If you switch devices, you can recover your files with your email.",
      ],
    },
    benefits: {
      es: [
        "Tus clientes llegan al formulario de reseñas con un escaneo, sin tener que buscar tu negocio.",
        "Un cartel con la estética de tu negocio, sin depender de un programa de diseño.",
        "Archivos listos para imprimir en tu casa o en una imprenta.",
      ],
      en: [
        "Customers reach your review form with a single scan, without searching for your business.",
        "A sign that matches your brand, without design software.",
        "Files ready to print at home or at a print shop.",
      ],
    },
    audience: {
      es: [
        "Comercios con atención al público.",
        "Gastronomía, peluquerías, talleres y servicios.",
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
    shortDescription: {
      es: "Una herramienta para calcular costos, márgenes y precios de venta de productos o servicios.",
      en: "A tool to work out costs, margins and selling prices for products or services.",
    },
    fullDescription: {
      es: [
        "Estamos diseñando una calculadora para que puedas sumar los costos de un producto o servicio, definir el margen que querés obtener y llegar a un precio de venta.",
        comingSoonNote.es,
      ],
      en: [
        "We're designing a calculator to add up what a product or service costs you, set the margin you want and arrive at a selling price.",
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
        "Carga de costos de un producto o servicio.",
        "Cálculo de margen.",
        "Precio de venta sugerido a partir del margen elegido.",
      ],
      en: [
        "Enter the costs of a product or service.",
        "Margin calculation.",
        "Suggested selling price based on the margin you choose.",
      ],
    },
    benefits: {
      es: ["Ver con claridad cuánto cuesta lo que vendés.", "Definir precios con un criterio, no a ojo."],
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
    shortDescription: {
      es: "Una herramienta para que profesionales independientes calculen cuánto cobrar por hora de trabajo.",
      en: "A tool to help freelancers figure out how much to charge per hour.",
    },
    fullDescription: {
      es: [
        "Estamos diseñando una calculadora para profesionales independientes que necesitan definir una tarifa por hora a partir de sus gastos, sus horas disponibles y el ingreso que buscan.",
        comingSoonNote.es,
      ],
      en: [
        "We're designing a calculator for freelancers who need to set an hourly rate based on their expenses, available hours and target income.",
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
    shortDescription: {
      es: "Una herramienta para armar presupuestos prolijos y compartirlos con tus clientes.",
      en: "A tool to put together polished quotes and share them with your clients.",
    },
    fullDescription: {
      es: [
        "Estamos diseñando un generador para crear presupuestos con una presentación profesional y compartirlos con clientes.",
        comingSoonNote.es,
      ],
      en: [
        "We're designing a generator to create professional-looking quotes and share them with clients.",
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
    shortDescription: {
      es: "Una herramienta para gestionar turnos, clientes y disponibilidad desde el navegador.",
      en: "A tool to manage appointments, clients and availability from your browser.",
    },
    fullDescription: {
      es: [
        "Estamos diseñando una agenda para organizar turnos, registrar clientes y administrar la disponibilidad de un negocio o profesional.",
        comingSoonNote.es,
      ],
      en: [
        "We're designing a scheduler to organize appointments, keep track of clients and manage availability for a business or professional.",
        comingSoonNote.en,
      ],
    },
    category: "gestion",
    pricingModel: "SUBSCRIPTION",
    status: "COMING_SOON",
    featured: false,
    images: [],
    features: {
      es: ["Agenda de turnos.", "Registro de clientes.", "Gestión de disponibilidad."],
      en: ["Appointment calendar.", "Client records.", "Availability management."],
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
