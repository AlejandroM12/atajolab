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
    headline: { es: "Creá códigos QR con diseño listo para usar", en: "Create QR codes with a ready-to-use design" },
    shortDescription: {
      es: "Elegí qué compartir (tu web, tus redes, WhatsApp, tu menú o tus reseñas de Google) y llevate el diseño listo para imprimir o publicar.",
      en: "Pick what to share (your website, social media, WhatsApp, your menu or your Google reviews) and get a design ready to print or post.",
    },
    fullDescription: {
      es: [
        "AtajoLab QR arma códigos QR con un diseño listo para usar. Elegís qué querés compartir (un enlace, tus redes, WhatsApp, tu ubicación en Google Maps, las reseñas de Google, tu menú, un evento, el Wi-Fi, un contacto o un texto) y la herramienta te muestra diseños con tu código, que podés ajustar al estilo de tu negocio.",
        "Descargás el resultado en el formato que necesites, desde un cartel A6 para el mostrador hasta una historia para redes, en PNG, SVG y PDF. No hace falta crear una cuenta y tu primer QR es gratis.",
        "Los siguientes son de pago único, sin suscripción. El precio vigente y las condiciones se muestran dentro de la herramienta.",
      ],
      en: [
        "AtajoLab QR builds QR codes with a ready-to-use design. You pick what you want to share (a link, your social media, WhatsApp, your location on Google Maps, your Google reviews, your menu, an event, your Wi-Fi, a contact or a text) and the tool shows you designs with your code, which you can adjust to your business's style.",
        "You download the result in the format you need, from an A6 sign for the counter to a story for social media, as PNG, SVG and PDF. No account is needed and your first QR is free.",
        "The following ones are a one-time payment, with no subscription. The current price and terms are shown inside the tool.",
      ],
    },
    category: "marketing",
    pricingModel: "ONE_TIME",
    pricingLabel: { es: "Primer QR gratis, luego pago único", en: "First QR free, then one-time payment" },
    status: "AVAILABLE",
    featured: true,
    images: [
      {
        src: "/images/microapps/atajolab-qr/empezar.webp",
        width: 1400,
        height: 671,
        alt: {
          es: "Primer paso de la creación guiada de AtajoLab QR: ¿Qué querés compartir? con diez opciones, entre ellas WhatsApp, reseñas de Google, Google Maps, menú y Wi-Fi.",
          en: "First step of AtajoLab QR's guided creation: What do you want to share? with ten options, including WhatsApp, Google reviews, Google Maps, menu and Wi-Fi.",
        },
        caption: { es: "Creación guiada: elegís qué compartir.", en: "Guided creation: you choose what to share." },
      },
      {
        src: "/images/microapps/atajolab-qr/editor-avanzado.webp",
        width: 1400,
        height: 875,
        alt: {
          es: "Editor avanzado de AtajoLab QR con plantillas como Clásico, Vivo y Nocturno para empezar a diseñar.",
          en: "AtajoLab QR advanced editor with templates such as Classic, Vivid and Night to start designing.",
        },
        caption: { es: "Editor avanzado con plantillas.", en: "Advanced editor with templates." },
      },
      {
        src: "/images/microapps/atajolab-qr/cartel-whatsapp.webp",
        width: 640,
        height: 871,
        alt: {
          es: "Cartel de ejemplo «Hacé tu pedido por WhatsApp» con un código QR, hecho con AtajoLab QR.",
          en: "Sample sign “Place your order on WhatsApp” with a QR code, made with AtajoLab QR.",
        },
        caption: { es: "Ejemplo: pedidos por WhatsApp.", en: "Example: orders by WhatsApp." },
      },
      {
        src: "/images/microapps/atajolab-qr/cartel-carta.webp",
        width: 640,
        height: 871,
        alt: {
          es: "Cartel de ejemplo «Mirá nuestra carta» con un código QR sobre fondo oscuro, hecho con AtajoLab QR.",
          en: "Sample sign “See our menu” with a QR code on a dark background, made with AtajoLab QR.",
        },
        caption: { es: "Ejemplo: carta del restaurante.", en: "Example: restaurant menu." },
      },
      {
        src: "/images/microapps/atajolab-qr/cartel-resenas.webp",
        width: 640,
        height: 869,
        alt: {
          es: "Cartel de ejemplo «Tu opinión nos importa» con un código QR para dejar una reseña en Google, hecho con AtajoLab QR.",
          en: "Sample sign “Your opinion matters” with a QR code to leave a Google review, made with AtajoLab QR.",
        },
        caption: { es: "Ejemplo: reseñas de Google.", en: "Example: Google reviews." },
      },
    ],
    features: {
      es: [
        "Códigos QR para un enlace, tus redes, WhatsApp, Google Maps, reseñas de Google, menú, evento, Wi-Fi, contacto o texto.",
        "Creación guiada en pasos, con diseños listos que muestran tu código.",
        "Editor avanzado con plantillas para cambiar textos, colores e imágenes.",
        "Siete formatos: cartel A6, flyer A5, afiche A4, tarjeta, etiqueta, post cuadrado e historia.",
        "Descarga en PNG, SVG y PDF, en tamaño real y listos para imprimir o publicar.",
        "Código estático: no vence ni depende de AtajoLab, pero no se puede cambiar su destino después de descargarlo.",
        "No hace falta crear una cuenta. Si cambiás de dispositivo, recuperás tus descargas con tu correo.",
      ],
      en: [
        "QR codes for a link, your social media, WhatsApp, Google Maps, Google reviews, menu, event, Wi-Fi, contact or text.",
        "Guided creation in steps, with ready-made designs that show your code.",
        "Advanced editor with templates to change text, colors and images.",
        "Seven formats: A6 sign, A5 flyer, A4 poster, card, label, square post and story.",
        "PNG, SVG and PDF downloads, at real size and ready to print or post.",
        "Static code: it doesn't expire or depend on AtajoLab, but its destination can't be changed after downloading it.",
        "No account needed. If you switch devices, you can recover your downloads with your email.",
      ],
    },
    benefits: {
      es: [
        "Con un escaneo, tus clientes llegan a donde vos quieras: tu web, tu menú, tu WhatsApp o tus reseñas.",
        "Un diseño con el estilo de tu negocio, sin necesidad de saber diseño.",
        "Archivos listos para imprimir en tu casa o en una imprenta, o para publicar en redes.",
      ],
      en: [
        "With one scan, your customers reach wherever you want: your website, your menu, your WhatsApp or your reviews.",
        "A design in your business's style, no design skills needed.",
        "Files ready to print at home or at a print shop, or to post on social media.",
      ],
    },
    audience: {
      es: [
        "Comercios con atención al público.",
        "Restaurantes, cafés, peluquerías, talleres y servicios.",
        "Profesionales y emprendedores que quieren compartir su web, sus redes o su WhatsApp.",
      ],
      en: [
        "Businesses that serve customers in person.",
        "Restaurants, cafés, hair salons, repair shops and services.",
        "Professionals and entrepreneurs who want to share their website, social media or WhatsApp.",
      ],
    },
    steps: {
      es: [
        { title: "Contanos qué compartir", text: "Un enlace, tus redes, WhatsApp, Wi-Fi, un contacto o un texto. Cargás los datos y armamos el código." },
        { title: "Elegí y personalizá", text: "Mirá propuestas con tu código, elegí una y cambiá textos, colores e imágenes en el editor." },
        { title: "Descargá", text: "Bajá PNG, SVG y PDF en tamaño real, listos para imprimir o publicar." },
      ],
      en: [
        { title: "Tell us what to share", text: "A link, your social media, WhatsApp, Wi-Fi, a contact or a text. You enter the details and we build the code." },
        { title: "Choose and customize", text: "See proposals with your code, pick one and change text, colors and images in the editor." },
        { title: "Download", text: "Get PNG, SVG and PDF at real size, ready to print or post." },
      ],
    },
    appUrl: "https://qr.atajolab.dev/empezar",
    ctaLabel: { es: "Crear mi QR", en: "Create my QR" },
    checkout: { provider: "mercadopago", enabled: false },
    hosting: { coldStart: true },
    projectId: "atajolab-qr",
    officialLinks: [
      { label: { es: "Sitio oficial de AtajoLab QR", en: "AtajoLab QR official site" }, href: "https://qr.atajolab.dev" },
      { label: { es: "Editor avanzado", en: "Advanced editor" }, href: "https://qr.atajolab.dev/crear" },
      {
        label: { es: "Preguntas frecuentes", en: "Frequently asked questions" },
        href: "https://qr.atajolab.dev/preguntas-frecuentes",
      },
    ],
    seoTitle: {
      es: "AtajoLab QR: códigos QR con diseño listo para imprimir",
      en: "AtajoLab QR: QR codes with a ready-to-use design",
    },
    seoDescription: {
      es: "Creá códigos QR con diseño para tu web, redes, WhatsApp, Wi-Fi, menú o reseñas de Google. Siete formatos y archivos PNG, SVG y PDF. Tu primer QR es gratis.",
      en: "Create QR codes with a design for your website, social media, WhatsApp, Wi-Fi, menu or Google reviews. Seven formats and PNG, SVG and PDF files. Your first QR is free.",
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
    id: "atajolab-presupuestos",
    slug: { es: "atajolab-presupuestos", en: "atajolab-presupuestos" },
    icon: "document",
    name: { es: "AtajoLab Presupuestos", en: "AtajoLab Presupuestos" },
    headline: {
      es: "Creá presupuestos profesionales en minutos",
      en: "Create professional quotes in minutes",
    },
    shortDescription: {
      es: "Generá presupuestos personalizados con los datos de tu negocio, tu logo y tus servicios. Descargalos en PDF y compartilos fácilmente con tus clientes.",
      en: "Build quotes with your business details, your logo and your services. Download them as PDF and share them easily with your clients.",
    },
    fullDescription: {
      es: [
        "AtajoLab Presupuestos es una herramienta web para armar presupuestos prolijos sin saber de diseño. Cargás los datos de tu negocio y de tu cliente, sumás tus conceptos con cantidad y precio, y el total se calcula solo mientras ves cómo queda el documento.",
        "Cuando está listo, lo descargás en PDF o lo mandás por WhatsApp. Funciona desde el navegador del celular o de la computadora, y podés empezar gratis.",
      ],
      en: [
        "AtajoLab Presupuestos is a web tool to put together tidy quotes with no design skills. You enter your business and client details, add your items with quantity and price, and the total is worked out for you while you watch the document take shape.",
        "When it's ready, you download it as a PDF or send it by WhatsApp. It works in the browser of a phone or a computer, and you can start for free.",
      ],
    },
    category: "ventas",
    pricingModel: "FREE",
    pricingLabel: { es: "Versión gratuita disponible", en: "Free version available" },
    status: "AVAILABLE",
    featured: true,
    images: [
      {
        src: "/images/microapps/atajolab-presupuestos/editor.webp",
        width: 1600,
        height: 944,
        alt: {
          es: "Editor de AtajoLab Presupuestos con los datos del negocio y del cliente a la izquierda y la vista previa del presupuesto a la derecha, con datos de ejemplo.",
          en: "AtajoLab Presupuestos editor with the business and client details on the left and the quote preview on the right, with sample data.",
        },
        caption: {
          es: "Editor con vista previa en vivo.",
          en: "Editor with live preview.",
        },
      },
      {
        src: "/images/microapps/atajolab-presupuestos/presupuesto.webp",
        width: 900,
        height: 871,
        alt: {
          es: "Presupuesto de ejemplo de un taller mecánico, con cuatro conceptos, subtotal y total en pesos.",
          en: "Sample quote from a mechanic's workshop, with four items, subtotal and total in pesos.",
        },
        caption: { es: "Un presupuesto de ejemplo.", en: "A sample quote." },
      },
      {
        src: "/images/microapps/atajolab-presupuestos/celular.webp",
        width: 600,
        height: 974,
        alt: {
          es: "AtajoLab Presupuestos en un celular, con las pestañas Editar y Vista previa y el formulario de los datos del negocio.",
          en: "AtajoLab Presupuestos on a phone, with the Edit and Preview tabs and the business details form.",
        },
        caption: { es: "En el celular.", en: "On a phone." },
      },
    ],
    features: {
      es: [
        "Editor con vista previa del presupuesto mientras lo armás.",
        "Datos de tu negocio y de tu cliente.",
        "Tu logo en el encabezado.",
        "Conceptos con cantidad, unidad, precio y descuento.",
        "Subtotal, descuentos, recargos, impuestos y total calculados automáticamente.",
        "Número, fecha, validez, plazo, forma de pago y condiciones.",
        "PDF en tamaño A4 con texto seleccionable.",
        "Envío por WhatsApp con un resumen del presupuesto.",
        "Borrador guardado en tu dispositivo.",
        "Funciona desde el celular y desde la computadora.",
      ],
      en: [
        "Editor with a preview of the quote as you build it.",
        "Your business and your client's details.",
        "Your logo in the header.",
        "Items with quantity, unit, price and discount.",
        "Subtotal, discounts, surcharges, taxes and total worked out automatically.",
        "Number, date, validity, delivery time, payment terms and conditions.",
        "A4 PDF with selectable text.",
        "Sharing by WhatsApp with a summary of the quote.",
        "Draft saved on your device.",
        "Works on a phone and on a computer.",
      ],
    },
    benefits: {
      es: [
        "No necesitás conocimientos de diseño.",
        "Personalización con la identidad de tu negocio.",
        "Presupuestos profesionales en PDF.",
        "Compatible con celulares y computadoras.",
        "Podés comenzar gratuitamente.",
      ],
      en: [
        "No design skills needed.",
        "Customized with your business's identity.",
        "Professional quotes as PDF.",
        "Works on phones and computers.",
        "You can start for free.",
      ],
    },
    audience: {
      es: [
        "Trabajadores independientes y emprendedores.",
        "Técnicos, talleres mecánicos y constructores.",
        "Profesionales y prestadores de servicios.",
        "Comercios.",
      ],
      en: [
        "Independent workers and entrepreneurs.",
        "Technicians, mechanic workshops and builders.",
        "Professionals and service providers.",
        "Shops.",
      ],
    },
    problems: {
      es: [
        "Armar cada presupuesto a mano en un documento de texto o una planilla lleva demasiado tiempo.",
        "Las cuentas a mano se equivocan, y un error de cálculo sale caro.",
        "Un presupuesto desprolijo o mandado en un mensaje suelto no transmite confianza.",
        "Cada vez hay que volver a cargar tus datos y rehacer el formato.",
      ],
      en: [
        "Building every quote by hand in a text document or a spreadsheet takes far too long.",
        "Sums done by hand go wrong, and a calculation mistake is costly.",
        "A messy quote, or one sent as a loose message, doesn't inspire trust.",
        "Every time you have to re-enter your details and redo the layout.",
      ],
    },
    steps: {
      es: [
        { title: "Cargá tus datos", text: "Escribí los datos de tu negocio y de tu cliente, y sumá tus conceptos con cantidad y precio." },
        { title: "Mirá la vista previa", text: "El total se calcula solo y ves cómo queda el presupuesto mientras lo armás." },
        {
          title: "Descargá y compartí",
          text: "Bajá el PDF o mandá un resumen por WhatsApp. Para descargar el PDF necesitás una cuenta gratuita.",
        },
      ],
      en: [
        { title: "Enter your details", text: "Type in your business and client details, and add your items with quantity and price." },
        { title: "Watch the preview", text: "The total is worked out for you and you see how the quote looks as you build it." },
        {
          title: "Download and share",
          text: "Download the PDF or send a summary by WhatsApp. You need a free account to download the PDF.",
        },
      ],
    },
    appUrl: "https://presupuestos.atajolab.dev/crear",
    ctaLabel: { es: "Crear un presupuesto gratis", en: "Create a quote for free" },
    trial: {
      label: { es: "Conocer AtajoLab Presupuestos", en: "Get to know AtajoLab Presupuestos" },
      href: "https://presupuestos.atajolab.dev",
    },
    officialLinks: [
      {
        label: { es: "Sitio oficial de AtajoLab Presupuestos", en: "AtajoLab Presupuestos official site" },
        href: "https://presupuestos.atajolab.dev",
      },
      {
        label: { es: "Crear un presupuesto gratis", en: "Create a quote for free" },
        href: "https://presupuestos.atajolab.dev/crear",
      },
    ],
    social: {
      image: { es: "/og/presupuestos-es.png", en: "/og/presupuestos-en.png" },
      alt: {
        es: "AtajoLab Presupuestos: creá presupuestos profesionales en minutos, con un presupuesto de ejemplo.",
        en: "AtajoLab Presupuestos: create professional quotes in minutes, showing a sample quote.",
      },
    },
    seoTitle: {
      es: "AtajoLab Presupuestos: creá presupuestos profesionales en PDF, gratis",
      en: "AtajoLab Presupuestos: create professional PDF quotes for free",
    },
    seoDescription: {
      es: "Generá presupuestos personalizados con los datos de tu negocio, tu logo y tus servicios. Descargalos en PDF y compartilos con tus clientes. Podés comenzar gratis.",
      en: "Build quotes with your business details, your logo and your services. Download them as PDF and share them with your clients. You can start for free.",
    },
  },
  {
    id: "agendia",
    slug: { es: "agendia", en: "agendia" },
    icon: "calendar",
    name: { es: "Agendia", en: "Agendia" },
    headline: { es: "Que tus clientes reserven turno online", en: "Let your clients book appointments online" },
    shortDescription: {
      es: "Dejá que tus clientes reserven online, organizá tu agenda y enviá recordatorios automáticos por correo electrónico, todo en un solo lugar.",
      en: "Let your clients book online, organize your schedule and send automatic email reminders, all in one place.",
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
      es: "Precios en pesos argentinos, tal como figuran en agendia.atajolab.dev, donde siempre está el valor actualizado. También existe una licencia de pago único, con la instalación y la configuración a cargo de AtajoLab, que se coordina después del pago. Desde el segundo año, el alojamiento, el dominio y el soporte se renuevan por separado. Valores y condiciones: agendia.atajolab.dev/licencia.",
      en: "Prices in Argentine pesos, as listed on agendia.atajolab.dev, where the current price is always published. There is also a one-time license, with installation and setup handled by AtajoLab and arranged after payment. From the second year, hosting, domain and support renew separately. Prices and terms: agendia.atajolab.dev/licencia.",
    },
    plans: [
      {
        id: "profesional",
        price: 9900,
        currency: "ARS",
        billingPeriod: "MONTHLY",
        name: { es: "Plan Profesional", en: "Professional plan" },
        details: {
          es: [
            "14 días gratis para probarlo.",
            "Hasta 2 profesionales activos.",
            "Turnos, clientes y agenda sin límite.",
            "Tu página de reservas online, con tu marca, logo y colores.",
            "Confirmaciones y recordatorios automáticos por correo electrónico.",
            "Hosting y soporte incluidos.",
            "Sin permanencia: cancelás cuando quieras.",
          ],
          en: [
            "14 days free to try it.",
            "Up to 2 active professionals.",
            "Unlimited appointments, clients and schedule.",
            "Your online booking page, with your brand, logo and colors.",
            "Automatic confirmations and reminders by email.",
            "Hosting and support included.",
            "No minimum term: cancel whenever you want.",
          ],
        },
      },
      {
        id: "equipo",
        price: 19900,
        currency: "ARS",
        billingPeriod: "MONTHLY",
        name: { es: "Plan Equipo", en: "Team plan" },
        details: {
          es: [
            "Todo lo del Plan Profesional, con más profesionales.",
            "Hasta 5 profesionales activos.",
            "Una agenda para cada profesional, todas administradas desde un solo lugar.",
            "Tus clientes pueden elegir con quién reservar.",
            "Hosting y soporte incluidos.",
            "Sin permanencia: cancelás cuando quieras.",
          ],
          en: [
            "Everything in the Professional plan, with more professionals.",
            "Up to 5 active professionals.",
            "A schedule for each professional, all managed from one place.",
            "Your clients can choose who to book with.",
            "Hosting and support included.",
            "No minimum term: cancel whenever you want.",
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
        "Tu marca, tu logo y tus colores.",
        "Enlace personalizado para compartir por redes sociales y WhatsApp.",
        "Código QR descargable.",
        "Gestión de clientes y servicios, con su duración y precio.",
        "Configuración de horarios y disponibilidad.",
        "Recordatorios automáticos por correo electrónico.",
        "Consulta, cancelación y reprogramación de turnos.",
        "Una agenda para cada profesional del equipo, según el plan.",
        "Panel de administración del negocio, desde computadora, tablet y celular.",
      ],
      en: [
        "Digital schedule.",
        "Online bookings, 24 hours a day.",
        "Customized booking page.",
        "Your brand, your logo and your colors.",
        "Personal link to share on social media and WhatsApp.",
        "Downloadable QR code.",
        "Client and service management, with each service's duration and price.",
        "Working hours and availability settings.",
        "Automatic reminders by email.",
        "View, cancel and reschedule appointments.",
        "A schedule for each professional on the team, depending on the plan.",
        "Business admin panel, from a computer, tablet or phone.",
      ],
    },
    benefits: {
      es: [
        "Recibís reservas online, incluso fuera de horario.",
        "Organizás turnos, clientes y profesionales en un solo lugar.",
        "Reducís olvidos con confirmaciones y recordatorios por correo electrónico.",
        "Empezás con 14 días de prueba gratuita.",
      ],
      en: [
        "Get bookings online, even outside business hours.",
        "Organize appointments, clients and professionals in one place.",
        "Cut no-shows with confirmations and reminders by email.",
        "Start with a 14-day free trial.",
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
    appUrl: "https://agendia.atajolab.dev/registro",
    ctaLabel: { es: "Probar Agendia gratis", en: "Try Agendia for free" },
    trial: {
      label: { es: "Conocer Agendia", en: "Get to know Agendia" },
      href: "https://agendia.atajolab.dev",
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
      es: "Agendia es un sistema de turnos online para profesionales y negocios de Argentina: agenda digital, reservas las 24 horas, página de reservas propia y recordatorios por correo. Probalo 14 días gratis.",
      en: "Agendia is online appointment scheduling software for professionals and businesses in Argentina: digital schedule, 24/7 bookings, your own booking page and email reminders. Try it free for 14 days.",
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
    social: source.social && { image: source.social.image[locale], alt: source.social.alt[locale] },
    seoTitle: source.seoTitle?.[locale],
    seoDescription: source.seoDescription?.[locale],
  };
}

/** The catalog in one language. */
export function getMicroapps(locale: Locale): Microapp[] {
  return microappSources.map((source) => resolveMicroapp(source, locale));
}
