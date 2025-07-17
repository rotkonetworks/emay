import type { Locale } from "../types"

export type BlogPost = {
  slug: string
  title: string
  description: string
  author: string
  date: string
  content: string
  readTime: string
}

export const blogPosts: Record<Locale, BlogPost[]> = {
  en: [
    {
      slug: "why-jmap-is-the-future-of-email",
      title: "Why JMAP is the Future of Email (And Why We Chose It)",
      description: "A deep dive into the technical advantages of JMAP over traditional protocols like IMAP.",
      author: "The emay.me Team",
      date: "July 17, 2025",
      readTime: "5 min read",
      content: `
        <p>JMAP (JSON Meta Application Protocol) isn't just another email protocol; it's a fundamental rethinking of how email clients should communicate with servers.</p>
        
        <h2>Unmatched Speed</h2>
        <p>IMAP is a "chatty" protocol. A simple action like fetching new mail can require multiple round-trips between the client and server. JMAP, on the other hand, is designed for batching.</p>
        
        <h2>Incredible Efficiency</h2>
        <p>JMAP uses JSON, a lightweight and modern data format that's easy to parse. More importantly, it's designed to minimize data transfer.</p>
        
        <h2>Built for the Modern Web</h2>
        <p>JMAP is a stateful protocol built on top of stateless HTTP. This makes it perfect for web and mobile applications.</p>
      `,
    },
  ],
  es: [
    {
      slug: "por-que-jmap-es-el-futuro-del-email",
      title: "Por Qué JMAP es el Futuro del Email (Y Por Qué Lo Elegimos)",
      description: "Un análisis profundo de las ventajas técnicas de JMAP sobre protocolos tradicionales como IMAP.",
      author: "El Equipo de emay.me",
      date: "17 de Julio, 2025",
      readTime: "5 min de lectura",
      content: `
        <p>JMAP (Protocolo de Aplicación Meta JSON) no es solo otro protocolo de email; es un replanteamiento fundamental de cómo los clientes de email deberían comunicarse con los servidores.</p>
        
        <h2>Velocidad Incomparable</h2>
        <p>IMAP es un protocolo "conversador". Una acción simple como obtener correo nuevo puede requerir múltiples viajes de ida y vuelta entre el cliente y el servidor. JMAP, por otro lado, está diseñado para el procesamiento por lotes.</p>
        
        <h2>Eficiencia Increíble</h2>
        <p>JMAP usa JSON, un formato de datos ligero y moderno que es fácil de analizar. Más importante aún, está diseñado para minimizar la transferencia de datos.</p>
        
        <h2>Construido para la Web Moderna</h2>
        <p>JMAP es un protocolo con estado construido sobre HTTP sin estado. Esto lo hace perfecto para aplicaciones web y móviles.</p>
      `,
    },
  ],
}
