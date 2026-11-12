import type { Locale } from "../i18n/config";
import type { Project, ProjectSource } from "../types/project";
import { resolveImage } from "./microapps";

/** Case studies. Only real projects, described with verified facts. */
export const projectSources: ProjectSource[] = [
  {
    id: "adhera",
    slug: { es: "adhera", en: "adhera" },
    name: "Adhera",
    kind: "CUSTOM_DEVELOPMENT",
    summary: {
      es: "Plataforma de preentrevistas para procesos de afiliación, con cuestionarios configurables y un panel de gestión para asesores.",
      en: "A pre-interview platform for membership enrollment, with configurable questionnaires and a management dashboard for advisors.",
    },
    description: {
      es: "Adhera es una plataforma de preentrevistas para procesos de afiliación. Combina cuestionarios conversacionales con respuestas condicionales, seguimiento de interesados y un panel de gestión para asesores.",
      en: "Adhera is a pre-interview platform for membership enrollment. It combines conversational questionnaires with conditional logic, prospect follow-up and a management dashboard for advisors.",
    },
    sections: {
      es: [
        {
          title: "El punto de partida",
          paragraphs: [
            "En un proceso de afiliación, la primera conversación con cada interesado suele repetirse: las mismas preguntas, respuestas repartidas en distintos mensajes y datos que después hay que ordenar a mano antes de la entrevista.",
          ],
        },
        {
          title: "La propuesta",
          paragraphs: [
            "El interesado responde una preentrevista paso a paso, en formato de conversación. Las preguntas cambian según sus respuestas, y lo que responde queda guardado: si recarga la página, retoma donde estaba.",
            "Del otro lado, los asesores reciben cada solicitud ordenada en un panel. Desde ahí asignan responsables, dejan notas, marcan aclaraciones pendientes, agendan entrevistas y descargan la ficha en PDF.",
            "Los cuestionarios se editan desde el panel y se publican por versiones: las conversaciones nuevas usan la versión publicada y las anteriores conservan la suya.",
          ],
        },
      ],
      en: [
        {
          title: "The starting point",
          paragraphs: [
            "In a membership enrollment process, the first conversation with each prospect tends to repeat itself: the same questions, answers scattered across several messages, and details that have to be organized by hand before the interview.",
          ],
        },
        {
          title: "The approach",
          paragraphs: [
            "Prospects complete a step-by-step pre-interview in a conversational format. Questions adapt to their answers, and progress is saved: if they reload the page, they pick up where they left off.",
            "On the other side, advisors get every application organized in a dashboard. From there they assign owners, add notes, flag pending clarifications, schedule interviews and download each record as a PDF.",
            "Questionnaires are edited from the dashboard and published as versions: new conversations use the published version, while earlier ones keep theirs.",
          ],
        },
      ],
    },
    features: {
      es: [
        "Cuestionarios conversacionales.",
        "Preguntas condicionales según las respuestas.",
        "Gestión de interesados con asignación de asesores.",
        "Seguimiento con notas, aclaraciones e historial.",
        "Agenda de entrevistas.",
        "Exportación de la ficha a PDF.",
        "Cuestionarios editables y versionados.",
      ],
      en: [
        "Conversational questionnaires.",
        "Conditional questions based on answers.",
        "Prospect management with advisor assignment.",
        "Follow-up with notes, clarifications and history.",
        "Interview scheduling.",
        "PDF export of each record.",
        "Editable, versioned questionnaires.",
      ],
    },
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma"],
    images: [
      {
        src: "/images/projects/adhera/panel.webp",
        width: 1600,
        height: 1000,
        alt: {
          es: "Panel de asesores de Adhera con indicadores de la semana, solicitudes para revisar, próximas entrevistas, embudo comercial y actividad reciente. Datos ficticios.",
          en: "Adhera advisor dashboard with weekly indicators, applications to review, upcoming interviews, sales funnel and recent activity. Fictional data.",
        },
        caption: { es: "Resumen del panel de asesores.", en: "Advisor dashboard overview." },
      },
      {
        src: "/images/projects/adhera/ficha.webp",
        width: 1600,
        height: 681,
        alt: {
          es: "Ficha de una solicitud en Adhera con estado, tipo de plan, localidad, puntos para revisar en la entrevista y gestión del asesor responsable. Datos ficticios.",
          en: "Application record in Adhera with status, plan type, location, points to review in the interview and advisor assignment. Fictional data.",
        },
        caption: { es: "Ficha de una solicitud.", en: "Application record." },
      },
      {
        src: "/images/projects/adhera/observaciones.webp",
        width: 1290,
        height: 768,
        alt: {
          es: "Respuestas de una preentrevista en Adhera con observaciones y aclaraciones pendientes agregadas por el asesor. Datos ficticios.",
          en: "Pre-interview answers in Adhera with notes and pending clarifications added by the advisor. Fictional data.",
        },
        caption: { es: "Observaciones y aclaraciones del asesor.", en: "Advisor notes and clarifications." },
      },
    ],
    links: [
      {
        label: { es: "Probar la demo", en: "Try the demo" },
        href: "https://adhera.atajolab.dev",
        note: {
          es: "La demo está en un servidor que se suspende cuando no tiene visitas. La primera carga puede tardar hasta un minuto.",
          en: "The demo runs on a server that sleeps when idle. The first load can take up to a minute.",
        },
      },
    ],
    disclaimers: {
      es: [
        "La demo pública simula una conversación de WhatsApp desde el navegador. No está conectada a WhatsApp.",
        "Todos los nombres y datos que aparecen en la demo y en estas capturas son ficticios.",
        "Adhera es un proyecto propio de AtajoLab, creado como demostración. No es una implementación para un cliente ni un producto a la venta.",
      ],
      en: [
        "The public demo simulates a WhatsApp conversation in the browser. It is not connected to WhatsApp.",
        "All names and data shown in the demo and in these screenshots are fictional.",
        "Adhera is an AtajoLab project built as a demonstration. It is not an implementation for a client or a product for sale.",
      ],
    },
    featured: true,
    seoDescription: {
      es: "Caso de estudio: Adhera, plataforma de preentrevistas conversacionales para procesos de afiliación con panel de gestión para asesores.",
      en: "Case study: Adhera, a conversational pre-interview platform for membership enrollment with a management dashboard for advisors.",
    },
  },
  {
    id: "atajolab-qr",
    slug: { es: "atajolab-qr", en: "atajolab-qr" },
    name: "AtajoLab QR",
    kind: "OWN_PRODUCT",
    summary: {
      es: "Producto propio: un editor web de carteles con código QR para reseñas de Google y ubicaciones de Google Maps.",
      en: "Our own product: a web editor for QR code signs that link to Google reviews and Google Maps locations.",
    },
    description: {
      es: "AtajoLab QR es la primera herramienta de AtajoLab: sirve para armar carteles con código QR que llevan a las reseñas de Google o a la ubicación de un negocio en Google Maps.",
      en: "AtajoLab QR is AtajoLab's first tool: a web tool for building QR code signs that link to a business's Google reviews or its location on Google Maps.",
    },
    sections: {
      es: [
        {
          title: "Qué construimos",
          paragraphs: [
            "Un editor visual que trabaja sobre un cartel A6, con estilos sugeridos y edición directa de textos, colores, tipografías e imágenes.",
            "Los archivos finales (PNG, SVG y PDF) se generan en el servidor. La compra no requiere crear una cuenta, y el acceso a los archivos se puede recuperar con el correo desde otro dispositivo.",
          ],
        },
      ],
      en: [
        {
          title: "What we built",
          paragraphs: [
            "A visual editor that works on an A6 sign, with suggested styles and direct editing of text, colors, fonts and images.",
            "Final files (PNG, SVG and PDF) are generated on the server. Buying doesn't require an account, and access to the files can be recovered by email from another device.",
          ],
        },
      ],
    },
    features: {
      es: [
        "Validación de enlaces de Google Maps y de reseñas.",
        "Editor visual sobre lienzo A6.",
        "Generación de PNG, SVG y PDF en el servidor.",
        "Integración con Mercado Pago Checkout Pro.",
        "Recuperación de acceso por correo.",
      ],
      en: [
        "Validation of Google Maps and review links.",
        "Visual editor on an A6 canvas.",
        "Server-side PNG, SVG and PDF generation.",
        "Mercado Pago Checkout Pro integration.",
        "Access recovery by email.",
      ],
    },
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Mercado Pago"],
    images: [
      {
        src: "/images/microapps/atajolab-qr/editor.webp",
        width: 880,
        height: 600,
        alt: {
          es: "Editor de AtajoLab QR con un cartel de ejemplo para una cafetería.",
          en: "AtajoLab QR editor with a sample sign for a café.",
        },
      },
    ],
    links: [],
    microappId: "atajolab-qr",
    disclaimers: { es: [], en: [] },
    featured: false,
    seoDescription: {
      es: "Caso de estudio: AtajoLab QR, editor web de carteles con código QR para reseñas de Google y ubicaciones de Google Maps.",
      en: "Case study: AtajoLab QR, a web editor for QR code signs that link to Google reviews and Google Maps locations.",
    },
  },
];

export function resolveProject(source: ProjectSource, locale: Locale): Project {
  return {
    ...source,
    slug: source.slug[locale],
    summary: source.summary[locale],
    description: source.description[locale],
    sections: source.sections[locale],
    features: source.features[locale],
    images: source.images.map((image) => resolveImage(image, locale)),
    links: source.links.map((link) => ({ label: link.label[locale], href: link.href, note: link.note?.[locale] })),
    disclaimers: source.disclaimers[locale],
    seoDescription: source.seoDescription?.[locale],
  };
}

export function getProjects(locale: Locale): Project[] {
  return projectSources.map((source) => resolveProject(source, locale));
}
