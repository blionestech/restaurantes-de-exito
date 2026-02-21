// ─── RESTAURANTE DE ÉXITO — Centralized Content ───

export const site = {
  title: "Restaurante de Éxito | Paquete Integral para Tu Restaurante",
  description:
    "Paquete integral para abrir o profesionalizar tu restaurante. Branding, marketing, impresión, presencia digital, uniformes y formación estratégica por solo $5,000 USD.",
  ogImage: "/og-image.jpg",
  url: "https://restaurantedeexito.com",
};

export const hero = {
  headline: "Abre Tu Restaurante o Llévalo al Éxito Absoluto",
  subheadline:
    "Ya sea que estés por abrir tu restaurante o quieras llevar el que ya tienes al éxito, este paquete tiene todo lo que necesitas: branding, menús, web, redes sociales, uniformes y más.",
  cta: "Quiero Mi Paquete Ahora",
  ctaHref: "#cta-final",
  videoId: "dQw4w9WgXcQ",
  videoThumbnail: "/images/miniatura_hero.webp",
  benefits: ["Hasta 40% más ventas", "Imagen profesional desde el día 1", "Todo en un solo paquete"],
};

export const packageIncludes = {
  title: "Todo Lo Que Incluye Tu Paquete",
  subtitle: "Cada detalle pensado para que tú solo te enfoques en cocinar",
  categories: [
    {
      name: "Marca e Imagen",
      icon: "🎨",
      items: [
        { name: "Branding Básico (Logo, Paleta de colores, Fuentes)", value: "$299" },
      ],
    },
    {
      name: "Menús e Impresos",
      icon: "📋",
      items: [
        { name: "50 Menús 003 (6 u 8 vistas)", value: "$2,125" },
        { name: "1,000 Menús To-Go Medianos", value: "$585" },
        { name: "1,000 Flyers Promocionales 4\"x6\"", value: "$196" },
        { name: "Banner \"COMING SOON\" 3'x4'", value: "$175" },
        { name: "500 Tarjetas de Presentación o Lealtad", value: "$93" },
      ],
    },
    {
      name: "Presencia Digital",
      icon: "🌐",
      items: [
        { name: "Página Web de Éxito (Creación, 12 meses mantenimiento, dominio, hosting, cambios ilimitados)", value: "$1,487" },
        { name: "3 Meses Redes Sociales FB & IG (perfil, 8 posts/mes, publicidad, segmentación)", value: "$420" },
        { name: "Código QR Estándar", value: "$100" },
      ],
    },
    {
      name: "Uniformes",
      icon: "👕",
      items: [
        { name: "25 Polos Bordadas", value: "$620" },
        { name: "6 Mandiles Bordados", value: "$98" },
      ],
    },
    {
      name: "Formación",
      icon: "🎓",
      items: [
        { name: "Curso Secretos de la Restaurantería", value: "$1,500" },
        { name: "Checklist de Apertura", value: "$199" },
      ],
    },
  ],
  shippingNote: "Costo de envío: $99",
};

export const valueVsPrice = {
  title: "El Valor Real de Tu Inversión",
  totalValue: "$7,897",
  finalPrice: "$5,000",
  savings: "Pero hoy tú ahorras $2,897 USD",
  urgencyMessage: "Oferta por tiempo limitado - Solo 30 paquetes disponibles",
  optionsTitle: "Opciones de Pago Flexibles",
  options: [
    {
      type: "full",
      title: "Pago de Contado",
      badge: "Ahorras $500",
      badgeColor: "green",
      price: "$5,000",
      subtitle: "La opción más inteligente.",
      features: [
        "Un solo pago, sin preocupaciones",
        "Ahorras $500 USD adicionales",
        "Prioridad de inicio inmediata"
      ],
      cta: "Estoy listo para el éxito",
      checkoutType: "full",
      ctaHref: "#",
    },
    {
      type: "reserve",
      title: "Reserva Tu Paquete",
      badge: "Flexible",
      badgeColor: "orange",
      price: "$500",
      subtitle: "Costo total final: $5,500 USD.",
      features: [
        "Aparta tu paquete con solo $500",
        "El resto lo puedes liquidar después",
        "Ideal para asegurar tu lugar hoy"
      ],
      cta: "Quiero apartar mi paquete",
      checkoutType: "reserve",
      ctaHref: "#",
    }
  ]
};

export const faqs = {
  title: "Preguntas Frecuentes",
  items: [
    {
      question: "¿El paquete incluye todo o hay costos ocultos?",
      answer:
        "Todo lo que ves listado está incluido en los $5,000 USD. El único costo adicional es el envío de $99. No hay costos ocultos ni sorpresas.",
    },
    {
      question: "¿Puedo personalizar lo que incluye el paquete?",
      answer:
        "El paquete está diseñado como un sistema integral, pero podemos ajustar cantidades y detalles según tus necesidades específicas. Hablemos sobre tu proyecto.",
    },
    {
      question: "¿Cuánto tiempo toma tener todo listo?",
      answer:
        "Los tiempos dependen de cada proyecto y sus necesidades específicas. Al contactarnos, te damos un cronograma personalizado para que sepas exactamente qué esperar.",
    },
    {
      question: "¿Qué pasa después de los 3 meses de redes sociales?",
      answer:
        "Puedes continuar con nosotros con un plan mensual, o puedes tomar el control de tus redes con todo el material y la estrategia que te entregamos.",
    },
    {
      question: "¿Trabajan con restaurantes fuera de Estados Unidos?",
      answer:
        "Sí, trabajamos con restaurantes en toda Latinoamérica y Estados Unidos. Todo se maneja de forma digital, así que la ubicación no es un problema.",
    },
    {
      question: "¿Cómo es el proceso de pago?",
      answer:
        "Al contactarnos, te explicamos las opciones de pago disponibles y armamos un plan que se ajuste a ti. Escríbenos por WhatsApp para conocer los detalles.",
    },
  ],
};

export const footer = {
  brand: "Restaurante de Éxito",
  tagline: "Un producto de Bliones",
  links: [
    { label: "Política de Privacidad", href: "/privacidad" },
    { label: "Términos de Servicio", href: "/terminos" },
  ],
  contact: {
    email: "info@bliones.com",
    phone: "+1 (423) 424-6674",
  },
  copyright: `© ${new Date().getFullYear()} Bliones. Todos los derechos reservados.`,
};

export const exitPopup = {
  title: "¡Espera! No Te Vayas Sin Tu Regalo",
  description:
    "Solicita totalmente gratis nuestro Checklist de Apertura de Restaurante — la guía que usan los profesionales.",
  cta: "Solicita gratis checklist",
  ctaHref: "https://wa.me/14234246674?text=Hola%2C%20me%20interesa%20solicitar%20el%20Checklist%20gratis",
  note: "Sin spam. Solo valor para tu negocio.",
};

export const whatsappButton = {
  phone: "14234246674",
  message: "Hola, me interesa el paquete Restaurante de Éxito",
};

export const successBanner = {
  title: "Es el momento de",
  highlight: "Llevar tu restaurante al ÉXITO.",
  description: "Estás a un paso de hacer las cosas bien desde el primer día.",
  cta: "SÍ, quiero llevarlo al éxito",
  ctaHref: "#precio",
  cards: [
    {
      icon: "💡",
      title: "No empieces sin un sistema",
      description:
        "El 60% de los restaurantes que cierran lo hacen porque nunca tuvieron un plan real. Este paquete es ese plan: todo pensado, todo listo, todo profesional.",
    },
    {
      icon: "🔥",
      title: "Deja de improvisar",
      description: "Tu competencia ya invirtió en su imagen. Es tu turno.",
    },
    {
      icon: "💰",
      title: "Ahorras $2,897",
      description:
        "Todo junto cuesta menos que contratar cada cosa por separado.",
    },
  ],
};

export const benefits = {
  title: "Diseñado para",
  titleHighlight: "Multiplicar tus Ventas",
  subtitle:
    'No solo hacemos "diseños bonitos", construimos sistemas rentables para dueños de restaurantes que quieren ver resultados reales.',
  cards: [
    {
      icon: "📈",
      title: "Imagen Profesional que",
      titleHighlight: "Justifica tus Precios",
      description:
        "Branding, menús impresos y diseño de alto nivel que transforman la forma en que los clientes perciben tu negocio. Deja de competir por precio y empieza a cobrar lo que realmente vale tu comida.",
      image: "/images/resource-branding.webp",
      badge: { title: "+ Mayor Ticket", subtitle: "Percepción de alto valor" },
    },
    {
      icon: "🌐",
      title: "Tu Presencia Digital",
      titleHighlight: "Completa",
      description:
        "Página web profesional con dominio y hosting incluido, 3 meses de redes sociales (Facebook e Instagram) con publicaciones y publicidad, y código QR para tu menú digital.",
      image: "/images/resource-social.webp",
    },
    {
      icon: "✓",
      badgeLabel: "Listo Para Operar",
      title: "Uniformes y Formación",
      titleHighlight: "Incluidos",
      description:
        'Polos y mandiles bordados con tu marca para que tu equipo luzca profesional, junto con el curso "Secretos de la Restaurantería" y un checklist de apertura para arrancar con el pie derecho.',
      image: "/images/resource-uniforms.webp",
      miniCards: [
        {
          icon: "👕",
          title: "25 Polos + 6 Mandiles",
          subtitle: "Bordados con tu logo",
        },
        {
          icon: "🎓",
          title: "Curso + Checklist",
          subtitle: "Arranca sin errores",
        },
      ],
    },
  ],
};

export const videoReviews = {
  title: "Lo Que Dicen Nuestros Clientes",
  subtitle:
    "Escucha directamente de restauranteros que han trabajado con nosotros",
  audioCta: "Toca un video para escuchar su historia",
  reviews: [
    { name: "Review 1", video: "/videos/review-1.mp4" },
    { name: "Review 2", video: "/videos/review-2.mp4" },
    { name: "Review 3", video: "/videos/review-3.mp4" },
    { name: "Review 4", video: "/videos/review-4.mp4" },
    { name: "Review 5", video: "/videos/review-5.mp4" },
    { name: "Review 6", video: "/videos/review-6.mp4" },
  ],
};
