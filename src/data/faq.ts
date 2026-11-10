import type { Locale } from "../i18n/config";
import type { FaqItem, FaqSource } from "../types/content";

/**
 * Answers must not promise refunds, permanent access, guaranteed uptime
 * or commercial policies that are not defined yet.
 */
export const faqSources: FaqSource[] = [
  {
    id: "que-es-una-microapp",
    group: "microapps",
    question: { es: "¿Qué es una microapp?", en: "What is a microapp?" },
    answer: {
      es: "Es una herramienta web chica y enfocada en un problema concreto: armar un cartel QR, calcular un precio, preparar un presupuesto. En lugar de un sistema grande con muchas funciones, cada microapp hace una cosa y apunta a hacerla bien.",
      en: "It's a small web tool focused on one specific problem: making a QR sign, working out a price, preparing a quote. Instead of a large system with lots of features, each microapp does one thing and aims to do it well.",
    },
    home: true,
  },
  {
    id: "instalar",
    group: "microapps",
    question: { es: "¿Necesito instalar algo?", en: "Do I need to install anything?" },
    answer: {
      es: "No. Las microapps se abren desde el navegador, como cualquier página web. No hace falta descargar ni instalar programas.",
      en: "No. Microapps open in your browser, like any website. There's nothing to download or install.",
    },
    home: true,
  },
  {
    id: "celular",
    group: "microapps",
    question: { es: "¿Las herramientas funcionan desde el celular?", en: "Do the tools work on a phone?" },
    answer: {
      es: "Sí. Las diseñamos para que se puedan usar desde el celular, la tablet o la computadora. Algunas tareas, como editar un diseño en detalle, pueden resultar más cómodas en una pantalla grande.",
      en: "Yes. We design them to work on phones, tablets and computers. Some tasks, like detailed design editing, can be more comfortable on a larger screen.",
    },
    home: true,
  },
  {
    id: "gratis-o-pago",
    group: "microapps",
    question: {
      es: "¿Qué diferencia hay entre una herramienta gratuita y una de pago?",
      en: "What's the difference between free and paid tools?",
    },
    answer: {
      es: "Las gratuitas se usan sin costo. Las de pago pueden ser de pago único o por suscripción, y cada ficha indica qué modalidad tiene. El precio y las condiciones de cada herramienta se informan dentro de la propia herramienta antes de pagar.",
      en: "Free tools cost nothing to use. Paid tools are either a one-time purchase or a subscription, and each tool page says which. Pricing and terms are shown inside the tool before you pay.",
    },
    home: true,
  },
  {
    id: "como-acceder",
    group: "microapps",
    question: { es: "¿Cómo se accede a una microapp?", en: "How do I access a microapp?" },
    answer: {
      es: "Desde la biblioteca de microapps entrás a la ficha de cada herramienta. Si está disponible, el botón de la ficha abre la aplicación en su propia dirección web. Las que todavía están en desarrollo figuran como “Próximamente”.",
      en: "From the microapp library, open the page of the tool you want. If it's available, the button on that page opens the app at its own web address. Tools still in development are marked “Coming soon”.",
    },
  },
  {
    id: "internet",
    group: "microapps",
    question: {
      es: "¿Las herramientas requieren conexión a internet?",
      en: "Do the tools need an internet connection?",
    },
    answer: {
      es: "Sí. Las microapps funcionan desde el navegador y necesitan conexión para cargarse y, en general, para usarse. Si en el futuro alguna herramienta funciona sin conexión, lo vamos a indicar en su ficha.",
      en: "Yes. Microapps run in the browser and need a connection to load and, in general, to be used. If a tool ever works offline, we'll say so on its page.",
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
      es: "Algunas herramientas y demos están alojadas en servidores que se suspenden cuando no reciben visitas. En esos casos, la primera carga puede demorar hasta un minuto. Después funcionan con normalidad. Lo indicamos en la ficha de cada una.",
      en: "Some tools and demos run on servers that sleep when they get no visits. In those cases the first load can take up to a minute; after that they work normally. We note this on each tool's page.",
    },
  },
  {
    id: "desarrollo-a-medida",
    group: "desarrollo",
    question: { es: "¿Puedo solicitar una aplicación personalizada?", en: "Can I request a custom application?" },
    answer: {
      es: "Sí. Además de las microapps, desarrollamos aplicaciones web, sistemas de gestión, automatizaciones e integraciones a medida. Escribinos contando qué necesitás y lo conversamos.",
      en: "Yes. Besides microapps, we build custom web applications, management systems, automations and integrations. Write to us about what you need and we'll talk it through.",
    },
    home: true,
  },
  {
    id: "que-contar",
    group: "desarrollo",
    question: {
      es: "¿Qué tengo que contar para pedir un desarrollo?",
      en: "What should I include when asking for a project?",
    },
    answer: {
      es: "Con una descripción simple alcanza para empezar: qué problema querés resolver, cómo lo resolvés hoy, quiénes van a usar la herramienta y si hay alguna fecha que te importe. No hace falta tener un documento técnico.",
      en: "A simple description is enough to start: the problem you want to solve, how you handle it today, who will use the tool and any dates that matter to you. You don't need a technical document.",
    },
  },
  {
    id: "presupuesto",
    group: "desarrollo",
    question: { es: "¿Cuánto cuesta un desarrollo a medida?", en: "How much does custom development cost?" },
    answer: {
      es: "Depende del alcance de cada proyecto. Después de entender qué necesitás, te enviamos una propuesta con el alcance, las etapas y el costo, para que decidas con la información completa.",
      en: "It depends on the scope of each project. Once we understand what you need, we send you a proposal with the scope, phases and cost, so you can decide with all the information.",
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
