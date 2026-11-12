import type { Locale } from "../i18n/config";
import type { Service, ServiceSource } from "../types/content";

/**
 * Custom work, described by the need and not by the technology. Visitors don't have to know
 * whether they need an app, a website, a system or an automation: they recognize their problem.
 * Technical terms stay in the problem/solution text, where search engines and teams look for them.
 * `id` is also the anchor on the services page, so it never changes.
 */
export const serviceSources: ServiceSource[] = [
  {
    id: "automatizacion",
    icon: "automation",
    title: { es: "Ahorrar tiempo en tareas repetitivas", en: "Save time on repetitive tasks" },
    summary: {
      es: "Que los trabajos de todos los días se hagan solos.",
      en: "Let the everyday jobs take care of themselves.",
    },
    problem: {
      es: "Alguien de tu equipo copia los mismos datos de un lado a otro, arma el mismo reporte a mano o manda siempre los mismos avisos.",
      en: "Someone on your team copies the same data from one place to another, builds the same report by hand or sends the same notices again and again.",
    },
    solution: {
      es: "Automatizamos esos pasos para que se hagan solos. Así, las personas se ocupan de lo que requiere criterio y se reducen los errores de carga.",
      en: "We automate those steps so they happen on their own. People can focus on what needs judgment, and data entry mistakes go down.",
    },
    examples: {
      es: ["Cargar datos automáticamente", "Reportes que se arman solos", "Avisos por correo o mensajería"],
      en: ["Automatic data entry", "Reports that build themselves", "Email or messaging notices"],
    },
    fitsFor: {
      es: "Equipos que pierden horas en tareas mecánicas.",
      en: "Teams that lose hours to mechanical tasks.",
    },
  },
  {
    id: "sistemas-de-gestion",
    icon: "management",
    title: { es: "Ordenar clientes, pedidos y stock", en: "Organize clients, orders and stock" },
    summary: {
      es: "Todo en un solo lugar, en vez de en cuadernos y planillas sueltas.",
      en: "Everything in one place instead of notebooks and loose spreadsheets.",
    },
    problem: {
      es: "La información está repartida entre planillas, mensajes y papeles, y cuesta saber en qué estado está cada cliente o cada pedido.",
      en: "Information is scattered across spreadsheets, messages and paper, and it's hard to know where each client or order stands.",
    },
    solution: {
      es: "Un sistema de gestión hecho a tu medida para registrar, consultar y actualizar lo más importante de tu negocio, con estados claros y un historial de cambios.",
      en: "A management system built around your business to record, look up and update what matters most, with clear statuses and a change history.",
    },
    examples: {
      es: ["Gestión de clientes", "Seguimiento de pedidos", "Control de stock"],
      en: ["Client management", "Order tracking", "Stock control"],
    },
    fitsFor: {
      es: "Pequeñas y medianas empresas que ya trabajan de una forma definida y quieren ordenarla.",
      en: "Small and medium businesses that already have a way of working and want to organize it.",
    },
  },
  {
    id: "aplicaciones-web",
    icon: "web",
    title: { es: "Una web o aplicación propia", en: "Your own website or app" },
    summary: {
      es: "Para que tus clientes reserven, pidan o consulten desde el celular.",
      en: "So your customers can book, order or check things from their phone.",
    },
    problem: {
      es: "Tu forma de trabajar no entra en un programa genérico, o necesitás que tus clientes puedan hacer algo online y no sabés por dónde empezar.",
      en: "The way you work doesn't fit generic software, or you want your customers to be able to do something online and don't know where to start.",
    },
    solution: {
      es: "Desarrollamos una aplicación web con los pasos, permisos y pantallas que tu negocio necesita. Se usa desde el navegador, en el celular o la computadora.",
      en: "We build a web application with the steps, permissions and screens your business needs. It runs in the browser, on a phone or a computer.",
    },
    examples: {
      es: ["Portales para clientes", "Formularios con reglas propias", "Reservas o pedidos online"],
      en: ["Customer portals", "Forms with custom rules", "Online bookings or orders"],
    },
    fitsFor: {
      es: "Negocios y equipos que prefieren una herramienta propia antes que adaptarse a un programa genérico.",
      en: "Businesses and teams that would rather have their own tool than adapt to generic software.",
    },
  },
  {
    id: "herramientas-internas",
    icon: "internal",
    title: { es: "Herramientas para tu equipo", en: "Tools for your team" },
    summary: {
      es: "Una solución simple para una tarea puntual del día a día.",
      en: "A simple solution for one specific day-to-day task.",
    },
    problem: {
      es: "Hay tareas internas que se resuelven con planillas enormes, mensajes o procesos informales que nadie más sabe cómo funcionan.",
      en: "Some internal tasks run on huge spreadsheets, messages or informal routines that nobody else knows how to follow.",
    },
    solution: {
      es: "Herramientas simples y específicas para tu equipo: paneles de administración, carga de información, aprobaciones o consultas.",
      en: "Simple, specific tools for your team: admin panels, data entry, approvals or lookups.",
    },
    examples: {
      es: ["Paneles de administración", "Circuitos de aprobación", "Carga y consulta de información"],
      en: ["Admin panels", "Approval flows", "Data entry and lookup tools"],
    },
    fitsFor: {
      es: "Equipos que necesitan resolver una tarea concreta, sin un sistema enorme.",
      en: "Teams that need to solve one specific task without a huge system.",
    },
  },
  {
    id: "integraciones",
    icon: "integration",
    title: { es: "Conectar las herramientas que ya usás", en: "Connect the tools you already use" },
    summary: {
      es: "Que tus programas se comuniquen entre sí y no cargues todo dos veces.",
      en: "Get your programs talking to each other so you don't enter everything twice.",
    },
    problem: {
      es: "Usás varios sistemas que no se hablan: cargás la misma información más de una vez y cada uno muestra una versión distinta.",
      en: "You use several systems that don't talk to each other: the same data is entered more than once and each one shows a different version.",
    },
    solution: {
      es: "Integraciones (por API) entre tus sistemas y servicios externos, como medios de pago, planillas, plataformas de mensajería o herramientas que ya usás.",
      en: "API integrations between your systems and outside services, such as payment providers, spreadsheets, messaging platforms or tools you already use.",
    },
    examples: {
      es: ["Cobros online", "Sincronización con planillas", "Conexión con otros servicios"],
      en: ["Online payments", "Spreadsheet sync", "Connections to other services"],
    },
    fitsFor: {
      es: "Negocios que usan varias herramientas y quieren que compartan datos sin trabajo manual.",
      en: "Businesses that use several tools and want them to share data without manual work.",
    },
  },
  {
    id: "dashboards",
    icon: "dashboard",
    title: { es: "Ver cómo viene tu negocio", en: "See how your business is doing" },
    summary: {
      es: "Tus números claros, en una sola pantalla.",
      en: "Your numbers, clear, on a single screen.",
    },
    problem: {
      es: "Tenés datos pero no los mirás, porque armar el informe lleva tiempo o la información está en lugares distintos.",
      en: "You have the data but you don't look at it, because building the report takes time or the information lives in different places.",
    },
    solution: {
      es: "Paneles de control (dashboards) con los indicadores que importan para tu negocio, conectados a tus datos y fáciles de leer.",
      en: "Dashboards with the indicators that matter to your business, connected to your data and easy to read.",
    },
    examples: {
      es: ["Ventas por período", "Estado de las solicitudes", "Seguimiento de objetivos"],
      en: ["Sales by period", "Request status", "Goal tracking"],
    },
    fitsFor: {
      es: "Dueños y responsables de área que quieren ver el estado del negocio de un vistazo.",
      en: "Owners and team leads who want to see how the business is going at a glance.",
    },
  },
];

export function getServices(locale: Locale): Service[] {
  return serviceSources.map((s) => ({
    id: s.id,
    icon: s.icon,
    title: s.title[locale],
    summary: s.summary[locale],
    problem: s.problem[locale],
    solution: s.solution[locale],
    examples: s.examples[locale],
    fitsFor: s.fitsFor[locale],
  }));
}
