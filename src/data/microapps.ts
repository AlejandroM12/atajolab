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
    headline: {
      es: "Creá códigos QR con el diseño de tu negocio",
      en: "Create QR codes in your business's own design",
    },
    shortDescription: {
      es: "Elegí a dónde llevar a tus clientes, personalizá el diseño con tu marca y descargalo listo para imprimir o compartir.",
      en: "Choose where to send your customers, customize the design with your brand and download it ready to print or share.",
    },
    fullDescription: {
      es: [
        "Tus ideas, listas para escanear. AtajoLab QR va más allá de generar un código: te acompaña desde el destino hasta una pieza visual lista para usar. Elegís qué compartir (un enlace, tus redes, WhatsApp, tu ubicación en Google Maps, las reseñas de Google, tu menú o catálogo, un evento, el Wi-Fi, un contacto o un texto) y la herramienta te propone diseños con tu código.",
        "Podés seguir un camino guiado, pensado para quien nunca usó una herramienta de diseño, o abrir el editor y armar el cartel a tu manera: cambiar textos, tipografías y colores, sumar tu logo y mover cada elemento. Tu primer QR es gratis. Si se habilitan más, sus condiciones se informan en la herramienta.",
      ],
      en: [
        "Your ideas, ready to scan. AtajoLab QR goes beyond generating a code: it takes you from the destination to a visual piece ready to use. You choose what to share (a link, your social media, WhatsApp, your location on Google Maps, your Google reviews, your menu or catalog, an event, your Wi-Fi, a contact or a text) and the tool proposes designs with your code.",
        "You can follow a guided path, made for people who have never used a design tool, or open the editor and build the sign your way: change text, fonts and colors, add your logo and move every element. Your first QR is free. If more become available, their terms are announced in the tool.",
      ],
    },
    category: "marketing",
    pricingModel: "ONE_TIME",
    pricingLabel: { es: "Primer QR gratis", en: "First QR free" },
    pricingNote: {
      es: "Hoy se puede crear y descargar tu primer QR sin costo. Si se habilitan más, sus condiciones se informan en la propia herramienta.",
      en: "Today you can create and download your first QR at no cost. If more become available, their terms are announced in the tool itself.",
    },
    priceInfo: { es: "Primer QR sin costo", en: "First QR at no cost" },
    status: "AVAILABLE",
    featured: true,
    images: [
      {
        src: "/images/microapps/atajolab-qr/editor-plantillas.webp",
        width: 1500,
        height: 938,
        alt: {
          es: "Editor de AtajoLab QR con un cartel de reseñas de Google en el centro, plantillas y formatos a la izquierda y herramientas para agregar elementos.",
          en: "AtajoLab QR editor with a Google reviews sign in the center, templates and formats on the left and tools to add elements.",
        },
        caption: { es: "El editor de AtajoLab QR.", en: "The AtajoLab QR editor." },
      },
    ],
    capabilities: {
      es: [
        {
          title: "Un QR para cada destino",
          text: "Tu web, tus redes, WhatsApp, Google Maps, las reseñas de Google, tu menú, un evento, el Wi-Fi, un contacto o un texto.",
        },
        {
          title: "Diseños listos para tu negocio",
          text: "Elegís un estilo y la herramienta te muestra propuestas con tu código y el nombre de tu negocio.",
        },
        {
          title: "Tu identidad visual",
          text: "Cambiá textos, tipografías y colores, y sumá tu logo o una imagen.",
        },
        {
          title: "Listo para imprimir",
          text: "Carteles, flyers, afiches, tarjetas y etiquetas, con descarga en PNG, SVG y PDF.",
        },
        {
          title: "Pensado para tus redes",
          text: "Posts cuadrados e historias con el tamaño que piden las redes sociales.",
        },
        {
          title: "Sin saber de diseño",
          text: "Un camino guiado en cinco pasos, y la posibilidad de ajustar todo después.",
        },
      ],
      en: [
        {
          title: "A QR for every destination",
          text: "Your website, social media, WhatsApp, Google Maps, Google reviews, your menu, an event, Wi-Fi, a contact or a text.",
        },
        {
          title: "Designs ready for your business",
          text: "Pick a style and the tool shows you proposals with your code and your business name.",
        },
        {
          title: "Your visual identity",
          text: "Change text, fonts and colors, and add your logo or an image.",
        },
        {
          title: "Ready to print",
          text: "Signs, flyers, posters, cards and labels, downloaded as PNG, SVG and PDF.",
        },
        {
          title: "Made for social media",
          text: "Square posts and stories at the size social networks ask for.",
        },
        {
          title: "No design skills needed",
          text: "A guided path in five steps, and the option to adjust everything afterwards.",
        },
      ],
    },
    steps: {
      es: [
        {
          title: "Elegí a dónde querés llevar a tus clientes",
          text: "Un enlace, tus redes, WhatsApp, reseñas de Google, tu menú o el Wi-Fi. Cargás los datos y el código se arma solo.",
          image: {
            src: "/images/microapps/atajolab-qr/empezar.webp",
            width: 1400,
            height: 671,
            alt: "Primer paso de AtajoLab QR: ¿Qué querés compartir? con diez opciones, entre ellas WhatsApp, reseñas de Google, Google Maps, menú y Wi-Fi.",
          },
        },
        {
          title: "Elegí un estilo y un formato",
          text: "Clásico, Vivo, Nocturno o Profesional, y un tamaño para imprimir o para tus redes.",
          image: {
            src: "/images/microapps/atajolab-qr/paso-estilo.webp",
            width: 1040,
            height: 720,
            alt: "Paso de estilo de AtajoLab QR con cuatro opciones (Clásico, Vivo, Nocturno y Profesional) aplicadas a un cartel de ejemplo.",
          },
        },
        {
          title: "Elegí un diseño y personalizalo",
          text: "Mirá propuestas con tu código y tocá la que más te guste. Después podés cambiar todo en el editor.",
          image: {
            src: "/images/microapps/atajolab-qr/paso-diseno.webp",
            width: 1040,
            height: 960,
            alt: "Paso de diseño de AtajoLab QR con seis propuestas de cartel para WhatsApp y una vista grande del diseño elegido.",
          },
        },
        {
          title: "Descargá y usalo",
          text: "Bajá tu diseño en PNG, SVG y PDF, listo para imprimir o publicar. No hace falta crear una cuenta.",
        },
      ],
      en: [
        {
          title: "Choose where to send your customers",
          text: "A link, your social media, WhatsApp, Google reviews, your menu or Wi-Fi. You enter the details and the code builds itself.",
          image: {
            src: "/images/microapps/atajolab-qr/empezar.webp",
            width: 1400,
            height: 671,
            alt: "First step of AtajoLab QR: What do you want to share? with ten options, including WhatsApp, Google reviews, Google Maps, menu and Wi-Fi.",
          },
        },
        {
          title: "Pick a style and a format",
          text: "Classic, Vivid, Night or Professional, and a size to print or for your social media.",
          image: {
            src: "/images/microapps/atajolab-qr/paso-estilo.webp",
            width: 1040,
            height: 720,
            alt: "Style step of AtajoLab QR with four options (Classic, Vivid, Night and Professional) applied to a sample sign.",
          },
        },
        {
          title: "Choose a design and customize it",
          text: "See proposals with your code and tap the one you like. Then you can change everything in the editor.",
          image: {
            src: "/images/microapps/atajolab-qr/paso-diseno.webp",
            width: 1040,
            height: 960,
            alt: "Design step of AtajoLab QR with six WhatsApp sign proposals and a large view of the chosen design.",
          },
        },
        {
          title: "Download and use it",
          text: "Get your design as PNG, SVG and PDF, ready to print or post. No account needed.",
        },
      ],
    },
    spotlight: {
      es: {
        title: "Un editor para hacerlo a tu manera",
        text: "Si querés ir más allá de las propuestas, el editor te deja diseñar tu pieza sobre el mismo lienzo que se descarga.",
        points: [
          "Tocás un elemento y lo editás: texto, tipografía, tamaño, color y alineación.",
          "Sumás textos, formas, tu logo o una imagen, y cambiás el color de fondo.",
          "Movés, agrandás o rotás cada elemento, o escribís las medidas exactas en milímetros.",
          "Partís de seis plantillas (Clásico, Vivo, Nocturno, Mi negocio, Corporativo y Creativo): son un punto de partida, no un molde.",
          "Cambiás de formato sin empezar de nuevo, deshacés y rehacés cambios, duplicás o eliminás elementos y mirás una vista previa antes de descargar.",
          "El editor cuida que el código se pueda leer: lo mantiene cuadrado, con buen contraste y de un tamaño mínimo, y te avisa si algo lo tapa.",
        ],
        image: {
          src: "/images/microapps/atajolab-qr/editor-edicion.webp",
          width: 1500,
          height: 938,
          alt: "Editor de AtajoLab QR con un título seleccionado y el panel de edición con texto, tipografía, tamaño, color, alineación, posición, medidas y rotación.",
        },
        phone: {
          src: "/images/microapps/atajolab-qr/editor-celular.webp",
          width: 600,
          height: 1103,
          alt: "Editor de AtajoLab QR en un celular, con el cartel, los botones Deshacer y Rehacer y las pestañas Editar, Plantilla, Formato y Agregar.",
        },
      },
      en: {
        title: "An editor to do it your way",
        text: "If you want to go beyond the proposals, the editor lets you design your piece on the same canvas that gets downloaded.",
        points: [
          "Tap an element and edit it: text, font, size, color and alignment.",
          "Add text, shapes, your logo or an image, and change the background color.",
          "Move, resize or rotate each element, or type exact measurements in millimeters.",
          "Start from six templates (Classic, Vivid, Night, My business, Corporate and Creative): they are a starting point, not a mold.",
          "Switch formats without starting over, undo and redo changes, duplicate or delete elements and see a preview before downloading.",
          "The editor looks after readability: it keeps the code square, with good contrast and a minimum size, and warns you if something covers it.",
        ],
        image: {
          src: "/images/microapps/atajolab-qr/editor-edicion.webp",
          width: 1500,
          height: 938,
          alt: "AtajoLab QR editor with a title selected and the editing panel with text, font, size, color, alignment, position, measurements and rotation.",
        },
        phone: {
          src: "/images/microapps/atajolab-qr/editor-celular.webp",
          width: 600,
          height: 1103,
          alt: "AtajoLab QR editor on a phone, with the sign, the Undo and Redo buttons and the Edit, Template, Format and Add tabs.",
        },
      },
    },
    formats: {
      es: {
        title: "Formatos para cada necesidad",
        intro:
          "Elegís el tamaño según dónde lo vas a usar. Los archivos salen en tamaño real, y los de redes con la medida en píxeles que piden las plataformas.",
        image: {
          src: "/images/microapps/atajolab-qr/paso-formato.webp",
          width: 1040,
          height: 800,
          alt: "Paso de formato de AtajoLab QR con cinco formatos para imprimir y dos para redes, cada uno con su medida.",
        },
        groups: [
          {
            title: "Para imprimir",
            items: [
              { name: "Cartel A6", size: "105 × 148 mm", use: "Mostradores y mesas" },
              { name: "Flyer A5", size: "148 × 210 mm", use: "Flyers y mostradores" },
              { name: "Afiche A4", size: "210 × 297 mm", use: "Vidrieras y paredes" },
              { name: "Tarjeta", size: "85 × 55 mm", use: "Tarjetas personales" },
              { name: "Etiqueta", size: "60 × 60 mm", use: "Etiquetas y stickers" },
            ],
          },
          {
            title: "Para compartir",
            items: [
              { name: "Post cuadrado", size: "1080 × 1080 px", use: "Publicaciones en redes" },
              { name: "Historia", size: "1080 × 1920 px", use: "Historias y estados" },
            ],
          },
        ],
      },
      en: {
        title: "Formats for every need",
        intro:
          "You pick the size according to where you'll use it. Files come out at real size, and the social ones at the pixel size platforms ask for.",
        image: {
          src: "/images/microapps/atajolab-qr/paso-formato.webp",
          width: 1040,
          height: 800,
          alt: "Format step of AtajoLab QR with five print formats and two for social media, each with its size.",
        },
        groups: [
          {
            title: "To print",
            items: [
              { name: "A6 sign", size: "105 × 148 mm", use: "Counters and tables" },
              { name: "A5 flyer", size: "148 × 210 mm", use: "Flyers and counters" },
              { name: "A4 poster", size: "210 × 297 mm", use: "Shop windows and walls" },
              { name: "Card", size: "85 × 55 mm", use: "Business cards" },
              { name: "Label", size: "60 × 60 mm", use: "Labels and stickers" },
            ],
          },
          {
            title: "To share",
            items: [
              { name: "Square post", size: "1080 × 1080 px", use: "Social media posts" },
              { name: "Story", size: "1080 × 1920 px", use: "Stories and status" },
            ],
          },
        ],
      },
    },
    examples: {
      es: [
        {
          title: "Un taller que pide reseñas",
          text: "Cartel A6 con un QR que lleva al formulario de reseñas de Google, con la identidad de un taller.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-resenas.webp",
            width: 700,
            height: 985,
            alt: "Cartel de ejemplo de Electromecánica Morel, con fondo oscuro y detalles ámbar, con el texto «Tu opinión nos importa» y un código QR para dejar una reseña en Google.",
          },
        },
        {
          title: "Una carnicería con su catálogo",
          text: "Afiche A4 con un QR que abre el catálogo online.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-catalogo.webp",
            width: 700,
            height: 989,
            alt: "Afiche de ejemplo de una carnicería con el texto «Mirá nuestro catálogo» y un código QR sobre fondo oscuro.",
          },
        },
        {
          title: "Un comercio que atiende por WhatsApp",
          text: "Cartel A6 con un QR que abre el chat con el mensaje ya escrito.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-whatsapp.webp",
            width: 700,
            height: 985,
            alt: "Cartel de ejemplo de Electromecánica Morel con el texto «Escribinos por WhatsApp» y un código QR dentro de un círculo verde.",
          },
        },
        {
          title: "Una tarjeta para que te agenden",
          text: "Tarjeta de 85 × 55 mm con un QR que guarda tus datos de contacto.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-tarjeta.webp",
            width: 700,
            height: 453,
            alt: "Tarjeta de ejemplo de un profesional con su nombre, el texto «Escaneá y agendame» y un código QR de contacto.",
          },
        },
        {
          title: "Una publicación para tus redes",
          text: "Post cuadrado con un QR que lleva a tu perfil de Instagram (el usuario es de ejemplo).",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-post.webp",
            width: 700,
            height: 700,
            alt: "Publicación cuadrada de ejemplo con el texto «Seguinos en Instagram», un código QR y un botón sobre fondo naranja.",
          },
        },
      ],
      en: [
        {
          title: "A workshop asking for reviews",
          text: "A6 sign with a QR that opens the Google review form, with a workshop's identity.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-resenas.webp",
            width: 700,
            height: 985,
            alt: "Sample sign from Electromecánica Morel, with a dark background and amber details, with the text “Your opinion matters” and a QR code to leave a Google review.",
          },
        },
        {
          title: "A butcher shop with its catalog",
          text: "A4 poster with a QR that opens the online catalog.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-catalogo.webp",
            width: 700,
            height: 989,
            alt: "Sample poster for a butcher shop with the text “See our catalog” and a QR code on a dark background.",
          },
        },
        {
          title: "A shop that serves customers on WhatsApp",
          text: "A6 sign with a QR that opens the chat with the message already written.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-whatsapp.webp",
            width: 700,
            height: 985,
            alt: "Sample sign from Electromecánica Morel with the text “Message us on WhatsApp” and a QR code inside a green circle.",
          },
        },
        {
          title: "A card so people can save your details",
          text: "85 × 55 mm card with a QR that saves your contact details.",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-tarjeta.webp",
            width: 700,
            height: 453,
            alt: "Sample business card with a name, the text “Scan and add me” and a contact QR code.",
          },
        },
        {
          title: "A post for your social media",
          text: "Square post with a QR that leads to your Instagram profile (the username is made up).",
          image: {
            src: "/images/microapps/atajolab-qr/ejemplo-post.webp",
            width: 700,
            height: 700,
            alt: "Sample square post with the text “Follow us on Instagram”, a QR code and a button on an orange background.",
          },
        },
      ],
    },
    features: {
      es: [
        "Descarga en PNG a 300 dpi, SVG vectorial y PDF.",
        "Avisos antes de descargar si algo se sale del área imprimible o si una imagen queda con poca resolución.",
        "Código estático: no vence ni depende de AtajoLab, pero no se puede cambiar su destino después de descargarlo.",
        "Tu primer QR es gratis (uno por navegador y por correo). Si se habilitan más, sus condiciones se informan en la herramienta.",
        "No hace falta crear una cuenta: te pedimos un correo para que puedas recuperar tus archivos.",
        "Mientras trabajás, tu diseño se conserva en este navegador si recargás la página; no se guarda en una cuenta.",
        "Funciona desde el celular y desde la computadora.",
      ],
      en: [
        "Download as 300 dpi PNG, vector SVG and PDF.",
        "Warnings before downloading if something goes outside the printable area or an image has low resolution.",
        "Static code: it doesn't expire or depend on AtajoLab, but its destination can't be changed after downloading it.",
        "Your first QR is free (one per browser and per email). If more become available, their terms are announced in the tool.",
        "No account needed: we ask for an email so you can recover your files.",
        "While you work, your design is kept in this browser if you reload the page; it isn't saved to an account.",
        "Works on a phone and on a computer.",
      ],
    },
    benefits: {
      es: [
        "Con un escaneo, tus clientes llegan a donde vos quieras: tu web, tu menú, tu WhatsApp o tus reseñas.",
        "Un diseño con la identidad de tu negocio, sin necesidad de saber diseño.",
        "Archivos listos para imprimir en tu casa o en una imprenta, o para publicar en redes.",
      ],
      en: [
        "With one scan, your customers reach wherever you want: your website, your menu, your WhatsApp or your reviews.",
        "A design with your business's identity, no design skills needed.",
        "Files ready to print at home or at a print shop, or to post on social media.",
      ],
    },
    audience: {
      es: [
        "Comercios con atención al público.",
        "Talleres, restaurantes, cafés, peluquerías y servicios.",
        "Profesionales y emprendedores que quieren compartir su web, sus redes o su WhatsApp.",
      ],
      en: [
        "Businesses that serve customers in person.",
        "Repair shops, restaurants, cafés, hair salons and services.",
        "Professionals and entrepreneurs who want to share their website, social media or WhatsApp.",
      ],
    },
    faq: {
      es: [
        {
          question: "¿Necesito saber diseñar?",
          answer:
            "No. Podés seguir el camino guiado: elegís qué compartir, un estilo y un formato, y la herramienta te propone diseños con tu código. Si querés, después ajustás lo que quieras en el editor.",
        },
        {
          question: "¿Puedo agregar mi logo?",
          answer:
            "Sí. En el editor, con «+ Imagen o logo», subís una imagen PNG, JPG o WebP de hasta 8 MB y la ubicás en el diseño.",
        },
        {
          question: "¿Puedo cambiar los colores?",
          answer:
            "Sí. Podés cambiar el color de los textos, de las formas y del fondo, y también el del código QR, siempre que quede oscuro sobre un fondo claro para que se pueda leer.",
        },
        {
          question: "¿Qué formatos puedo crear?",
          answer:
            "Cartel A6, flyer A5, afiche A4, tarjeta de 85 × 55 mm y etiqueta de 60 × 60 mm para imprimir, y post cuadrado e historia para redes. Por ahora no hay medidas personalizadas.",
        },
        {
          question: "¿Puedo imprimir el diseño?",
          answer:
            "Sí. Descargás un PDF para llevar a una imprenta o un PNG para imprimirlo en casa. Imprimilo a tamaño real y sin estirarlo para que el código se lea bien. AtajoLab QR es un producto digital: no incluye impresión ni envío.",
        },
        {
          question: "¿Puedo compartirlo por redes?",
          answer:
            "Sí. Con los formatos Post cuadrado (1080 × 1080 px) e Historia (1080 × 1920 px) obtenés la imagen con la medida que piden las redes.",
        },
        {
          question: "¿Es gratis?",
          answer:
            "Tu primer QR es gratis y se descarga completo, en PNG, SVG y PDF. Es uno por navegador y por correo, y depende de la disponibilidad: si tu QR gratis no está disponible, la herramienta te lo indica. Por ahora, el primer QR es la opción disponible; si se habilitan más, sus condiciones se informan en la propia herramienta.",
        },
        {
          question: "¿Necesito crear una cuenta?",
          answer:
            "No. Para descargar te pedimos un correo, que usamos para que puedas recuperar tus archivos desde otro dispositivo.",
        },
        {
          question: "¿El código vence o se puede cambiar después?",
          answer:
            "No vence: es un código estático que guarda directamente el enlace, el Wi-Fi, el contacto o el texto, y no depende de AtajoLab para funcionar. Por eso mismo no se puede cambiar a dónde lleva después de descargarlo; si cambia tu enlace, creás uno nuevo.",
        },
        {
          question: "¿Puedo usarlo con un producto NFC?",
          answer:
            "AtajoLab QR crea el código QR y el diseño para imprimir; no programa chips NFC. Una etiqueta o tarjeta NFC es un producto físico aparte, como los de AtajoLab Shop, y su destino se configura por separado.",
        },
      ],
      en: [
        {
          question: "Do I need to know how to design?",
          answer:
            "No. You can follow the guided path: you choose what to share, a style and a format, and the tool proposes designs with your code. If you want, you can then adjust whatever you like in the editor.",
        },
        {
          question: "Can I add my logo?",
          answer:
            "Yes. In the editor, with “+ Image or logo”, you upload a PNG, JPG or WebP image of up to 8 MB and place it in the design.",
        },
        {
          question: "Can I change the colors?",
          answer:
            "Yes. You can change the color of the text, shapes and background, and also the QR code's, as long as it stays dark on a light background so it can be read.",
        },
        {
          question: "Which formats can I create?",
          answer:
            "A6 sign, A5 flyer, A4 poster, 85 × 55 mm card and 60 × 60 mm label to print, and square post and story for social media. There are no custom sizes for now.",
        },
        {
          question: "Can I print the design?",
          answer:
            "Yes. You download a PDF to take to a print shop or a PNG to print at home. Print it at real size without stretching it so the code reads well. AtajoLab QR is a digital product: it doesn't include printing or shipping.",
        },
        {
          question: "Can I share it on social media?",
          answer:
            "Yes. With the Square post (1080 × 1080 px) and Story (1080 × 1920 px) formats you get the image at the size social networks ask for.",
        },
        {
          question: "Is it free?",
          answer:
            "Your first QR is free and downloads in full, as PNG, SVG and PDF. It's one per browser and per email, and depends on availability: if your free QR isn't available, the tool tells you. For now, the first QR is the available option; if more become available, their terms are announced in the tool itself.",
        },
        {
          question: "Do I need to create an account?",
          answer:
            "No. To download we ask for an email, which we use so you can recover your files from another device.",
        },
        {
          question: "Does the code expire, or can it be changed later?",
          answer:
            "It doesn't expire: it's a static code that stores the link, the Wi-Fi, the contact or the text directly, and doesn't depend on AtajoLab to work. For that same reason its destination can't be changed after downloading it; if your link changes, you create a new one.",
        },
        {
          question: "Can I use it with an NFC product?",
          answer:
            "AtajoLab QR creates the QR code and the design to print; it doesn't program NFC chips. An NFC tag or card is a separate physical product, like the ones from AtajoLab Shop, and its destination is set up separately.",
        },
      ],
    },
    closing: {
      es: {
        title: "Tu próximo diseño empieza con un QR.",
        text: "Elegí a dónde llevar a tus clientes y armá tu pieza en pocos pasos. Tu primer QR es gratis.",
        cta: "Crear mi QR",
      },
      en: {
        title: "Your next design starts with a QR.",
        text: "Choose where to send your customers and build your piece in a few steps. Your first QR is free.",
        cta: "Create my QR",
      },
    },
    appUrl: "https://qr.atajolab.dev",
    ctaLabel: { es: "Crear mi QR gratis", en: "Create my QR for free" },
    trial: {
      label: { es: "Descubrir cómo funciona", en: "See how it works" },
      href: "#como-funciona",
    },
    checkout: { provider: "mercadopago", enabled: false },
    projectId: "atajolab-qr",
    officialLinks: [
      { label: { es: "Sitio oficial de AtajoLab QR", en: "AtajoLab QR official site" }, href: "https://qr.atajolab.dev" },
      { label: { es: "Editor avanzado", en: "Advanced editor" }, href: "https://qr.atajolab.dev/crear" },
      {
        label: { es: "Preguntas frecuentes", en: "Frequently asked questions" },
        href: "https://qr.atajolab.dev/preguntas-frecuentes",
      },
    ],
    social: {
      image: { es: "/og/qr-es.png", en: "/og/qr-en.png" },
      alt: {
        es: "AtajoLab QR: tus ideas, listas para escanear, con carteles de ejemplo con código QR.",
        en: "AtajoLab QR: your ideas, ready to scan, with sample signs with a QR code.",
      },
    },
    seoTitle: {
      es: "AtajoLab QR: creá códigos QR con diseño para tu negocio",
      en: "AtajoLab QR: create QR codes with a design for your business",
    },
    seoDescription: {
      es: "Creá códigos QR para tu web, redes, WhatsApp, Google Maps o reseñas de Google y diseñá tu cartel, tarjeta o publicación en un editor visual. Tu primer QR es gratis.",
      en: "Create QR codes for your website, social media, WhatsApp, Google Maps or Google reviews and design your sign, card or post in a visual editor. Your first QR is free.",
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
    priceInfo: source.priceInfo?.[locale],
    ctaLabel: source.ctaLabel?.[locale],
    problems: source.problems?.[locale],
    steps: source.steps?.[locale],
    capabilities: source.capabilities?.[locale],
    spotlight: source.spotlight?.[locale],
    formats: source.formats?.[locale],
    examples: source.examples?.[locale],
    faq: source.faq?.[locale],
    closing: source.closing?.[locale],
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
