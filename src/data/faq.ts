import type { Locale } from "../i18n/config";
import type { FaqItem, FaqSource } from "../types/content";

/**
 * Answers must not promise refunds, permanent access, guaranteed uptime
 * or commercial policies that are not defined yet.
 * Groups keep their ids ("microapps", "desarrollo"); the visible labels live in the dictionaries.
 */
export const faqSources: FaqSource[] = [
  {
    id: "que-es-una-microapp",
    group: "microapps",
    question: { es: "¿Qué son las herramientas de AtajoLab?", en: "What are AtajoLab's tools?" },
    answer: {
      es: "Son aplicaciones web chicas y fáciles de usar, pensadas para resolver una tarea concreta de tu negocio: armar un cartel para pedir reseñas, calcular un precio, preparar un presupuesto. En lugar de un programa grande con mil funciones, cada una se ocupa de una sola cosa. Internamente las llamamos microapps.",
      en: "They're small, easy-to-use web apps built to handle one specific task in your business: making a sign to ask for reviews, working out a price, preparing a quote. Instead of one big program with a thousand features, each one takes care of a single thing. Internally we call them microapps.",
    },
    home: true,
  },
  {
    id: "instalar",
    group: "microapps",
    question: { es: "¿Tengo que instalar algo?", en: "Do I need to install anything?" },
    answer: {
      es: "No. Las herramientas se abren desde el navegador, como cualquier página web. No hace falta descargar ni instalar programas.",
      en: "No. The tools open in your browser, like any website. There's nothing to download or install.",
    },
    home: true,
  },
  {
    id: "celular",
    group: "microapps",
    question: { es: "¿Se pueden usar desde el celular?", en: "Can I use them from my phone?" },
    answer: {
      es: "Sí. Las diseñamos para usarlas desde el celular, la tablet o la computadora. Algunas tareas, como retocar un diseño en detalle, pueden resultar más cómodas en una pantalla grande.",
      en: "Yes. We design them to work on phones, tablets and computers. Some tasks, like fine-tuning a design, can be more comfortable on a larger screen.",
    },
    home: true,
  },
  {
    id: "gratis-o-pago",
    group: "microapps",
    question: { es: "¿Son gratis o se pagan?", en: "Are they free or paid?" },
    answer: {
      es: "Depende de la herramienta. Algunas son gratuitas y otras son de pago único o por suscripción: en la ficha de cada una te indicamos cuál es su modalidad. El precio y las condiciones se muestran dentro de la herramienta antes de pagar.",
      en: "It depends on the tool. Some are free and others are a one-time purchase or a subscription: each tool's page says which. Pricing and terms are shown inside the tool before you pay.",
    },
    home: true,
  },
  {
    id: "como-acceder",
    group: "microapps",
    question: { es: "¿Cómo empiezo a usar una herramienta?", en: "How do I start using a tool?" },
    answer: {
      es: "Entrá a la ficha de la herramienta que te interesa. Si ya está disponible, el botón de la ficha la abre en su propia dirección web. Las que todavía estamos preparando figuran como “Próximamente” y no se pueden usar todavía.",
      en: "Open the page of the tool you're interested in. If it's available, the button on that page opens it at its own web address. The ones we're still preparing are marked “Coming soon” and can't be used yet.",
    },
  },
  {
    id: "internet",
    group: "microapps",
    question: { es: "¿Necesito internet?", en: "Do I need an internet connection?" },
    answer: {
      es: "Sí. Las herramientas funcionan desde el navegador y necesitan conexión para cargarse y, en general, para usarse. Si en el futuro alguna funciona sin conexión, lo vamos a indicar en su ficha.",
      en: "Yes. The tools run in the browser and need a connection to load and, in general, to be used. If one ever works offline, we'll say so on its page.",
    },
  },
  {
    id: "primera-carga",
    group: "microapps",
    question: {
      es: "¿Por qué una herramienta tarda en abrir la primera vez?",
      en: "Why does a tool take a while to open the first time?",
    },
    answer: {
      es: "Algunas herramientas y demos están en servidores que se suspenden cuando no reciben visitas. En esos casos, la primera carga puede demorar hasta un minuto. Después funcionan con normalidad. Lo avisamos en la ficha de cada una.",
      en: "Some tools and demos run on servers that sleep when they get no visits. In those cases the first load can take up to a minute; after that they work normally. We note this on each tool's page.",
    },
  },
  {
    id: "desarrollo-a-medida",
    group: "desarrollo",
    question: {
      es: "¿Pueden hacerme algo que no está entre las herramientas?",
      en: "Can you build something that isn't among your tools?",
    },
    answer: {
      es: "Sí. Si lo que necesitás no existe todavía, escribinos y lo conversamos. Desarrollamos soluciones a medida: una web o aplicación propia, un sistema para ordenar tu trabajo, automatizaciones para ahorrar tiempo y conexiones entre las herramientas que ya usás.",
      en: "Yes. If what you need doesn't exist yet, write to us and we'll talk it through. We build custom solutions: your own website or app, a system to organize your work, automations to save time and connections between the tools you already use.",
    },
    home: true,
  },
  {
    id: "que-contar",
    group: "desarrollo",
    question: {
      es: "¿Qué tengo que contarles para empezar?",
      en: "What do I need to tell you to get started?",
    },
    answer: {
      es: "Con una descripción simple alcanza: qué querés resolver, cómo lo hacés hoy, quiénes lo van a usar y si hay alguna fecha que te importe. No hace falta saber si necesitás una aplicación, una página o una automatización, ni tener un documento técnico: eso lo vemos juntos.",
      en: "A simple description is enough: what you want to solve, how you handle it today, who will use it and any dates that matter to you. You don't need to know whether you need an app, a website or an automation, or have a technical document: we work that out together.",
    },
    home: true,
  },
  {
    id: "presupuesto",
    group: "desarrollo",
    question: { es: "¿Cuánto cuesta una solución a medida?", en: "How much does a custom solution cost?" },
    answer: {
      es: "Depende de lo que haya que hacer en cada caso. Cuando entendemos qué necesitás, te enviamos una propuesta con el alcance, las etapas y el costo, para que decidas con toda la información.",
      en: "It depends on what each project involves. Once we understand what you need, we send you a proposal with the scope, phases and cost, so you can decide with all the information.",
    },
  },
];

export function getFaq(locale: Locale): FaqItem[] {
  return faqSources.map((f) => ({
    id: f.id,
    group: f.group,
    question: f.question[locale],
    answer: f.answer[locale],
    home: f.home,
  }));
}
