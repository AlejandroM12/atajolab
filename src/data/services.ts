import type { Locale } from "../i18n/config";
import type { Service, ServiceSource } from "../types/content";

export const serviceSources: ServiceSource[] = [
  {
    id: "aplicaciones-web",
    icon: "web",
    title: { es: "Aplicaciones web", en: "Web applications" },
    summary: {
      es: "Sistemas que se usan desde el navegador, en la computadora o el celular.",
      en: "Software that runs in the browser, on a computer or a phone.",
    },
    problem: {
      es: "Procesos que dependen de planillas sueltas, mensajes o papeles, y que se vuelven difíciles de sostener cuando el trabajo crece.",
      en: "Processes that rely on scattered spreadsheets, messages or paper, and become hard to keep up as the work grows.",
    },
    solution: {
      es: "Una aplicación web pensada para tu proceso, con los pasos, permisos y pantallas que tu equipo necesita, accesible desde cualquier dispositivo.",
      en: "A web application designed around your process, with the steps, permissions and screens your team needs, available on any device.",
    },
    examples: {
      es: ["Portales para clientes", "Formularios con lógica propia", "Reservas o pedidos online"],
      en: ["Customer portals", "Forms with custom logic", "Online bookings or orders"],
    },
    fitsFor: {
      es: "Negocios y equipos que necesitan una herramienta propia en lugar de adaptar su forma de trabajar a un software genérico.",
      en: "Businesses and teams that need their own tool instead of bending the way they work to fit generic software.",
    },
  },
  {
    id: "sistemas-de-gestion",
    icon: "management",
    title: { es: "Sistemas de gestión", en: "Management systems" },
    summary: {
      es: "Clientes, pedidos, stock o turnos ordenados en un solo lugar.",
      en: "Clients, orders, stock or appointments organized in one place.",
    },
    problem: {
      es: "Información repartida en varias herramientas, datos duplicados y poca visibilidad sobre el estado de cada cliente o pedido.",
      en: "Information spread across several tools, duplicated data and little visibility into the status of each client or order.",
    },
    solution: {
      es: "Un sistema a medida para registrar, consultar y actualizar la información central de tu negocio, con estados claros y un historial de cambios.",
      en: "A custom system to record, look up and update your business's core information, with clear statuses and a change history.",
    },
    examples: {
      es: ["Gestión de clientes", "Seguimiento de pedidos", "Control de stock"],
      en: ["Client management", "Order tracking", "Inventory control"],
    },
    fitsFor: {
      es: "Pequeñas y medianas empresas que ya tienen un proceso definido y necesitan ordenarlo.",
      en: "Small and mid-sized companies that already have a defined process and need to organize it.",
    },
  },
  {
    id: "automatizacion",
    icon: "automation",
    title: { es: "Automatización de procesos", en: "Process automation" },
    summary: { es: "Menos tareas manuales y repetitivas.", en: "Fewer manual, repetitive tasks." },
    problem: {
      es: "Tareas que alguien repite todos los días: copiar datos entre sistemas, armar reportes a mano o enviar los mismos avisos.",
      en: "Tasks someone repeats every day: copying data between systems, building reports by hand or sending the same notifications.",
    },
    solution: {
      es: "Automatizaciones que conectan los pasos de un proceso para que las tareas repetitivas se hagan solas y las personas se ocupen de lo que requiere criterio.",
      en: "Automations that connect the steps of a process, so repetitive tasks run on their own and people can focus on the work that needs judgment.",
    },
    examples: {
      es: ["Carga automática de datos", "Reportes periódicos", "Avisos por correo o mensajería"],
      en: ["Automatic data entry", "Scheduled reports", "Email or messaging notifications"],
    },
    fitsFor: {
      es: "Equipos que pierden horas en tareas mecánicas y quieren reducir errores de carga.",
      en: "Teams that lose hours to mechanical tasks and want fewer data-entry errors.",
    },
  },
  {
    id: "integraciones",
    icon: "integration",
    title: { es: "Integración de APIs", en: "API integrations" },
    summary: { es: "Que tus herramientas se hablen entre sí.", en: "Get your tools talking to each other." },
    problem: {
      es: "Sistemas que no se comunican: la misma información se carga varias veces y cada herramienta muestra una versión distinta.",
      en: "Systems that don't talk to each other: the same information is entered several times and each tool shows a different version.",
    },
    solution: {
      es: "Integraciones entre tus sistemas y servicios externos, como medios de pago, planillas, plataformas de mensajería o herramientas que ya usás.",
      en: "Integrations between your systems and external services, such as payment providers, spreadsheets, messaging platforms or tools you already use.",
    },
    examples: {
      es: ["Pagos online", "Sincronización con planillas", "Conexión con servicios externos"],
      en: ["Online payments", "Spreadsheet sync", "Connections to external services"],
    },
    fitsFor: {
      es: "Negocios que usan varias herramientas y necesitan que compartan datos sin trabajo manual.",
      en: "Businesses that use several tools and need them to share data without manual work.",
    },
  },
  {
    id: "dashboards",
    icon: "dashboard",
    title: { es: "Dashboards", en: "Dashboards" },
    summary: { es: "Indicadores claros para tomar decisiones.", en: "Clear indicators for better decisions." },
    problem: {
      es: "Datos que existen pero no se miran, porque armarlos lleva tiempo o están en lugares distintos.",
      en: "Data that exists but goes unused, because pulling it together takes time or it lives in different places.",
    },
    solution: {
      es: "Paneles con los indicadores que importan para tu negocio, conectados a tus fuentes de datos y fáciles de leer.",
      en: "Dashboards with the indicators that matter to your business, connected to your data sources and easy to read.",
    },
    examples: {
      es: ["Ventas por período", "Estado de solicitudes", "Seguimiento de objetivos"],
      en: ["Sales by period", "Request status", "Goal tracking"],
    },
    fitsFor: {
      es: "Responsables de área o dueños que necesitan ver el estado del negocio de un vistazo.",
      en: "Managers and owners who need to see how the business is doing at a glance.",
    },
  },
  {
    id: "herramientas-internas",
    icon: "internal",
    title: { es: "Herramientas internas", en: "Internal tools" },
    summary: {
      es: "Software pensado para el día a día de tu equipo.",
      en: "Software built for your team's day-to-day work.",
    },
    problem: {
      es: "Tareas internas que se resuelven con planillas complejas, mensajes o procesos informales difíciles de transmitir.",
      en: "Internal tasks handled with complex spreadsheets, messages or informal processes that are hard to pass on.",
    },
    solution: {
      es: "Herramientas simples y específicas para tu equipo: paneles administrativos, carga de información, aprobaciones o consultas.",
      en: "Simple, focused tools for your team: admin panels, data entry, approvals or lookups.",
    },
    examples: {
      es: ["Paneles administrativos", "Flujos de aprobación", "Herramientas de carga y consulta"],
      en: ["Admin panels", "Approval workflows", "Data entry and lookup tools"],
    },
    fitsFor: {
      es: "Equipos que necesitan una herramienta concreta para una tarea concreta.",
      en: "Teams that need a specific tool for a specific task.",
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
