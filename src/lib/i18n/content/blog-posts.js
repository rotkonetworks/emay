export const enPosts = [
  {
    slug: "mastering-email-with-advanced-filters",
    title: "Beyond the Inbox: Mastering Your Email with Advanced Filters",
    description:
      "Learn how to create powerful, custom rules to automatically sort, forward, and manage your email like a pro with emay.me's server-side filtering.",
    author: "The emay.me Team",
    date: "2025-07-17",
    readTime: "6 min read",
    content: `
  <p>Are you drowning in a sea of emails? It's time to move beyond simple folders and labels. With emay.me, you can harness the power of server-side filters to create an email workflow that's truly automated and intelligent.</p>
  <h2>What Are Server-Side Filters?</h2>
  <p>Unlike filters that run in your email app, server-side filters process your mail the moment it arrives at our servers—before it ever reaches your devices. This means your rules are applied instantly, consistently, and everywhere, whether you're on your phone, laptop, or webmail.</p>
  <h3>Examples of What You Can Do:</h3>
  <ul>
    <li><strong>Auto-Sort Newsletters:</strong> Create a rule that automatically moves all emails from mailing lists into a "Reading List" folder, keeping your primary inbox clean.</li>
    <li><strong>Smart Forwarding:</strong> Automatically forward all receipts from online stores to your accounting software or a specific "Receipts" address.</li>
    <li><strong>Advanced Vacation Responders:</strong> Set up an auto-reply that only triggers for specific senders or if the email contains certain keywords, giving you more control than a standard "out of office" message.</li>
    <li><strong>Reject Spam Proactively:</strong> Create a rule to instantly discard emails from known spammy domains before they even have a chance to clutter your junk folder.</li>
  </ul>
  <p>By leveraging these advanced capabilities, you transform your inbox from a passive container into an active, intelligent assistant. Take control of your email flow and spend less time managing mail and more time on what matters.</p>
`,
  },
  {
    slug: "a-guide-to-modern-email-security",
    title: "Fort Knox for Your Email: A Guide to Modern Email Security",
    description:
      "Discover how emay.me uses advanced security protocols like DMARC, DKIM, and MTA-STS to protect you from phishing, spoofing, and other threats.",
    author: "The emay.me Team",
    date: "2025-07-16",
    readTime: "7 min read",
    content: `
  <p>In today's digital world, email security is more important than ever. Phishing and spoofing attacks are becoming increasingly sophisticated. At emay.me, we've implemented a multi-layered security strategy to protect your inbox, working silently in the background to keep you safe.</p>
  <h2>The Pillars of Email Authentication</h2>
  <p>We enforce the latest standards in email authentication to ensure the messages you receive are legitimate:</p>
  <ul>
    <li><strong>SPF (Sender Policy Framework):</strong> We check that the email is coming from a server authorized by the domain owner.</li>
    <li><strong>DKIM (DomainKeys Identified Mail):</strong> We verify a digital signature attached to the email, proving it hasn't been tampered with in transit.</li>
    <li><strong>DMARC (Domain-based Message Authentication, Reporting & Conformance):</strong> This policy tells us what to do with emails that fail SPF or DKIM checks—often, to reject them outright, preventing them from ever reaching you.</li>
  </ul>
  <h2>Encrypting the Connection</h2>
  <p><strong>MTA-STS (Mail Transfer Agent Strict Transport Security)</strong> is another crucial layer. It ensures that when other email services connect to emay.me to deliver your mail, they do so over a secure, encrypted connection, preventing eavesdropping.</p>
  <p>Together, these technologies create a robust defense system. You don't need to configure anything; it's all handled for you. With emay.me, you can be confident that you're using a service that prioritizes your security at every step.</p>
`,
  },
  {
    slug: "why-jmap-is-the-future-of-email",
    title: "The Need for Speed: Why Your Email Should Be Faster (And Use Less Data)",
    description:
      "Tired of slow-loading inboxes? Learn how emay.me's modern JMAP architecture delivers instant sync, faster search, and lower data usage on all your devices.",
    author: "The emay.me Team",
    date: "2025-07-15",
    readTime: "5 min read",
    content: `
  <p>Have you ever opened your email app and had to wait for it to sync? Or noticed your battery draining faster because of it? These are symptoms of outdated technology. We built emay.me on JMAP, a modern protocol designed for the world we live in today.</p>
  <h2>Less Waiting, More Doing</h2>
  <p>Think of old email protocols like downloading a full movie just to watch the trailer. They are "chatty" and inefficient, requiring many back-and-forth requests to do simple things. JMAP is like modern streaming—it's built for efficiency.</p>
  <ul>
    <li><strong>Instant Sync:</strong> JMAP bundles many actions into a single request. The result? Your inbox loads instantly, and actions like deleting or archiving are immediate.</li>
    <li><strong>Lower Data Usage:</strong> Our clients request only the data they need. This means less data consumed on your mobile plan, which is perfect for on-the-go access.</li>
    <li><strong>Longer Battery Life:</strong> With reliable, efficient push notifications, our app doesn't need to constantly check for new mail, which is a major cause of battery drain in other email apps.</li>
  </ul>
  <p>Your email shouldn't feel slow and clunky. It should be a fast, seamless experience. By choosing a service built on modern technology, you're choosing an inbox that respects your time, your data plan, and your battery.</p>
`,
  },
  {
    slug: "the-power-of-custom-domain-emails",
    title: "Your Brand, Your Inbox: The Power of Custom Domain Emails",
    description:
      "Elevate your professional identity with a custom email address. Learn the benefits and how easy it is to set up your own domain with emay.me.",
    author: "The emay.me Team",
    date: "2025-07-14",
    readTime: "4 min read",
    content: `
  <p>While a free @emay.me address is great, using a custom domain (like <strong>you@yourbrand.com</strong>) takes your professional presence to the next level. It's an essential tool for businesses, freelancers, and creators.</p>
  <h2>Why Use a Custom Domain?</h2>
  <ul>
    <li><strong>Builds Trust and Credibility:</strong> An email from your own domain looks far more professional and trustworthy than one from a generic free service.</li>
    <li><strong>Reinforces Your Brand:</strong> Every email you send is an opportunity to promote your brand. A custom domain keeps your brand front and center.</li>
    <li><strong>You Own It:</strong> Your email address is tied to a domain you control. You're not locked into a single provider and can move your domain if you ever need to.</li>
  </ul>
  <h2>Simple Setup with emay.me</h2>
  <p>We've made it incredibly simple to use your own domain with our service. Our Business plan allows you to connect your domain and create professional email addresses, all backed by our fast, secure, and private infrastructure. You get all the benefits of our modern platform with the professional identity of your own brand.</p>
`,
  },
  {
    slug: "embracing-a-passwordless-future",
    title: "The Password is Dead: Embracing a More Secure, Passwordless Future",
    description:
      "Passwords are a liability. Discover how emay.me uses secure magic links and OAuth to provide a safer, more convenient way to access your email.",
    author: "The emay.me Team",
    date: "2025-07-13",
    readTime: "5 min read",
    content: `
  <p>For years, we've been told to create long, complex, and unique passwords for every service. The reality? Most people don't. This leads to password reuse, which is a massive security risk. At emay.me, we believe there's a better way.</p>
  <h2>The Problem with Passwords</h2>
  <p>Passwords can be stolen in data breaches, guessed by brute-force attacks, or phished by malicious actors. They are the weakest link in your digital security. That's why we've eliminated them entirely.</p>
  <h2>How Passwordless Works</h2>
  <p>We use modern, secure authentication methods that don't rely on a password you have to remember:</p>
  <ul>
    <li><strong>Magic Links:</strong> When you want to log in, we send a unique, single-use link to your email. You click it, and you're in. No password to steal.</li>
    <li><strong>OAuth (Login with GitHub, etc.):</strong> You can use your existing, trusted accounts like GitHub to securely log in without creating a new password for our service.</li>
  </ul>
  <p>This approach is not only more secure but also far more convenient. No more forgotten passwords or struggling to type a complex password on your phone. It's a simpler, safer way to access your inbox.</p>
`,
  },
  {
    slug: "our-commitment-to-email-privacy",
    title: "Your Data, Your Rules: Our Unwavering Commitment to Email Privacy",
    description:
      "In an age of data surveillance, learn how emay.me is built from the ground up to protect your privacy. No ads, no tracking, no compromises.",
    author: "The emay.me Team",
    date: "2025-07-12",
    readTime: "4 min read",
    content: `
  <p>Many free email providers aren't truly free. You pay with your privacy. They scan your emails to build advertising profiles and sell your data. We believe this is fundamentally wrong. Our philosophy and business model are built on a foundation of privacy.</p>
  <h2>Our Business Model is Your Privacy Shield</h2>
  <p>We have a very simple business model: we offer a great core service for free, and users who need more storage or features like custom domains can upgrade to a paid plan. That's it.</p>
  <ul>
    <li><strong>We Don't Scan Your Emails:</strong> Your inbox is your private space. We never read your emails for advertising or any other purpose.</li>
    <li><strong>No Ads, Ever:</strong> Our interface is clean, fast, and completely ad-free. We're not in the advertising business.</li>
    <li><strong>We Don't Sell Your Data:</strong> Your data belongs to you. We will never sell it to third parties.</li>
  </ul>
  <p>Because our revenue comes from customers who willingly pay for our product, our incentive is to protect your data, not to exploit it. Privacy isn't just a feature for us; it's the reason we exist.</p>
`,
  },
]

export const esPosts = [
  {
    slug: "domina-tu-email-con-filtros-avanzados",
    title: "Más Allá de la Bandeja de Entrada: Domina tu Email con Filtros Avanzados",
    description:
      "Aprende a crear reglas potentes y personalizadas para ordenar, reenviar y gestionar tu email como un profesional con los filtros de servidor de emay.me.",
    author: "El Equipo de emay.me",
    date: "2025-07-17",
    readTime: "6 min de lectura",
    content: `
  <p>¿Te estás ahogando en un mar de correos electrónicos? Es hora de ir más allá de las simples carpetas y etiquetas. Con emay.me, puedes aprovechar el poder de los filtros del lado del servidor para crear un flujo de trabajo de email verdaderamente automatizado e inteligente.</p>
  <h2>¿Qué son los Filtros del Lado del Servidor?</h2>
  <p>A diferencia de los filtros que se ejecutan en tu aplicación de correo, los filtros del lado del servidor procesan tu correo en el momento en que llega a nuestros servidores, antes de que llegue a tus dispositivos. Esto significa que tus reglas se aplican al instante, de manera consistente y en todas partes, ya sea que estés en tu teléfono, portátil o en la web.</p>
  <h3>Ejemplos de lo que puedes hacer:</h3>
  <ul>
    <li><strong>Ordenar Boletines Automáticamente:</strong> Crea una regla que mueva automáticamente todos los correos de listas de correo a una carpeta de "Lista de Lectura", manteniendo tu bandeja de entrada principal limpia.</li>
    <li><strong>Reenvío Inteligente:</strong> Reenvía automáticamente todos los recibos de tiendas en línea a tu software de contabilidad o a una dirección específica de "Recibos".</li>
    <li><strong>Respuestas de Vacaciones Avanzadas:</strong> Configura una respuesta automática que solo se active para remitentes específicos o si el correo contiene ciertas palabras clave, dándote más control que un "fuera de la oficina" estándar.</li>
    <li><strong>Rechazar Spam Proactivamente:</strong> Crea una regla para descartar instantáneamente correos de dominios de spam conocidos antes de que tengan la oportunidad de saturar tu carpeta de correo no deseado.</li>
  </ul>
  <p>Al aprovechar estas capacidades avanzadas, transformas tu bandeja de entrada de un contenedor pasivo a un asistente activo e inteligente. Toma el control de tu flujo de correo y dedica menos tiempo a gestionar el correo y más a lo que importa.</p>
`,
  },
  {
    slug: "por-que-jmap-es-el-futuro-del-email",
    title: "La Necesidad de Velocidad: Por Qué tu Email Debería Ser Más Rápido (y Usar Menos Datos)",
    description:
      "Cansado de bandejas de entrada que cargan lento? Aprende cómo la arquitectura moderna JMAP de emay.me ofrece sincronización instantánea, búsqueda más rápida y menor uso de datos.",
    author: "El Equipo de emay.me",
    date: "2025-07-15",
    readTime: "5 min de lectura",
    content: `
  <p>¿Alguna vez has abierto tu aplicación de correo y has tenido que esperar a que se sincronice? ¿O has notado que tu batería se agota más rápido por su culpa? Estos son síntomas de tecnología obsoleta. Construimos emay.me sobre JMAP, un protocolo moderno diseñado para el mundo en que vivimos hoy.</p>
  <h2>Menos Espera, Más Acción</h2>
  <p>Piensa en los viejos protocolos de correo como descargar una película completa solo para ver el tráiler. Son "conversadores" e ineficientes, requiriendo muchas solicitudes de ida y vuelta para hacer cosas simples. JMAP es como el streaming moderno: está diseñado para la eficiencia.</p>
  <ul>
    <li><strong>Sincronización Instantánea:</strong> JMAP agrupa muchas acciones en una sola solicitud. ¿El resultado? Tu bandeja de entrada carga al instante, y acciones como eliminar o archivar son inmediatas.</li>
    <li><strong>Menor Uso de Datos:</strong> Nuestros clientes solicitan solo los datos que necesitan. Esto significa menos datos consumidos en tu plan móvil, perfecto para el acceso en movimiento.</li>
    <li><strong>Mayor Duración de la Batería:</strong> Con notificaciones push fiables y eficientes, nuestra aplicación no necesita comprobar constantemente si hay correo nuevo, una de las principales causas del agotamiento de la batería en otras aplicaciones de correo.</li>
  </ul>
  <p>Tu correo no debería sentirse lento y torpe. Debería ser una experiencia rápida y fluida. Al elegir un servicio construido sobre tecnología moderna, estás eligiendo una bandeja de entrada que respeta tu tiempo, tu plan de datos y tu batería.</p>
`,
  },
]

export const blogPosts = {
  en: enPosts,
  es: esPosts,
}
