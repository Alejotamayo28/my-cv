import { CvData } from "@/types/cv";

export const cvData: CvData = {
  name: "Alejandro Vergara Tamayo",
  title: "Desarrollador Backend | Node.js, TypeScript, Docker, AWS, SQL",
  contact: {
    email: "alejandropucca0@gmail.com",
    phone: "+57 316 5087855",
    location: "Cali, Colombia",
  },
  summary:
    "Desarrollador Backend especializado en arquitecturas escalables y sistemas en producción. Con experiencia comprobada liderando implementaciones técnicas críticas en sistemas de gestión empresarial, incluyendo migración a microservicios con GRPC, automatización de infraestructura en la nube y optimización de bases de datos relacionales. Domino el stack completo: Node.js, TypeScript, Docker, AWS, y PostgreSQL. Poseo alta versatilidad en SQL, desde diseño de esquemas eficientes hasta consultas complejas optimizadas. Mi enfoque combina resolución de problemas técnicos complejos con impacto directo en producción, contribuyendo tanto al desarrollo backend como a decisiones de arquitectura. Actualmente estudiando Tecnología en Desarrollo de Software en Universidad del Valle.",

  experience: [
    {
      role: "Desarrollador Backend",
      period: "2025 - Actualidad",
      company: "Zapenu (startup en crecimiento)",
      location: "Remoto",
      tags: [
        "TypeScript", "Node.js", "Express", "Tsoa", "PostgreSQL", "Supabase", "AWS", "VPS", "Docker", "Cloudflare", "GRPC", "Swagger", "Microservicios"
      ],
      achievements: [
        "Diseñé el modelo de datos relacional completo para productos, opciones y elecciones (choices), permitiendo a cada restaurante personalizar completamente su menú por tienda.",
        "Implementé comunicación entre microservicios usando GRPC, mejorando la eficiencia y mantenibilidad del sistema distribuido.",
        "Introduje y configuré TSOA para documentación automática con Swagger, facilitando la validación de entradas y pruebas locales con frontend.",
        "Diseñé el sistema de subida de archivos binarios desde frontend hacia R2 Object Storage, reemplazando un flujo basado en FormData que generaba errores frecuentes.",
        "Creé migraciones SQL, relaciones complejas y consultas optimizadas para mejorar el rendimiento de lectura/escritura en PostgreSQL y Supabase.",
        "Participé en la implementación de OmniPago, integrando MercadoPago y soportando flujos alternos como pagos por WhatsApp con Nequi.",
        "Mantuve código heredado, resolví conflictos de diseño, y adapté clases antiguas para soportar nuevas funcionalidades conforme el sistema crece.",
        "Tomo decisiones técnicas con impacto directo en producción, colaborando en tareas de backend, DevOps, documentación, pruebas y diseño de APIs."
      ]
    },
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2024",
      company: "Plataforma de Despliegue Automatizado",
      location: "Remoto",
      tags: ["Typescript", "Node.js", "AWS", "Docker", "Cloudflare Workers", "Telegram API"],
      achievements: [
        "Desarrollé un bot con Cloudflare Workers que automatiza el despliegue de imágenes Docker en instancias EC2, reduciendo el tiempo de implementación.",
        "Implementé un sistema completo de automatización para instalación de Docker, ejecución de contenedores y monitoreo con CloudWatch, eliminando errores manuales frecuentes en el proceso de despliegue.",
        "Diseñé una integración con DockerHub que permite a cada usuario gestionar sus propias imágenes y visualizar el estado de sus instancias en tiempo real, mejorando la experiencia de usuario y transparencia del sistema.",
      ],
      linkedinLink: "https://www.linkedin.com/in/alejandro-vergara-tamayo-/"
    },
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2024",
      company: "FitTracker: Asistente de Gimnasio",
      location: "Remoto",
      tags: ["Typescript", "PostgreSQL", "Node.js", "Docker", "Telegram API"],
      achievements: [
        "Diseño e implementación de un bot de Telegram que permite registrar, consultar y analizar el historial de entrenamientos de los usuarios.",
        "Manejo de autenticación, sesiones y relaciones familiares al estilo Netflix para compartir progresos.",
        "Base de datos PostgreSQL optimizada con consultas dinámicas por intervalos (diarios, semanales, mensuales, acumulados).",
      ],
      repoLink: "https://github.com/Alejotamayo28/fit-tracker-bot",
    }
  ],
  education: [
    {
      degree: "Tecnología en Desarrollo de Software",
      period: "2024 - Actualidad",
      institution: "Universidad del Valle",
    },
    {
      degree: "Bachiller Académico",
      period: "2022",
      institution: "Institución Educativa Cárdenas Centro",
    },
    {
      degree: "Certificado en Inglés Avanzado (B2/C1)",
      period: "2019",
      institution: "English Now Institute",
    }
  ],
  skills: {
    languages: [
      { name: "TypeScript", level: "Avanzado" },
      { name: "JavaScript", level: "Intermedio" },
      { name: "SQL", level: "Avanzado" },
    ],
    backend: [
      { name: "Node.js", level: "Avanzado" },
      { name: "Express.js", level: "Intermedio" },
      { name: "GRPC", level: "Intermedio" },
      { name: "Microservicios", level: "Avanzado" },
      { name: "API Design", level: "Intermedio" },
    ],
    databases: [
      { name: "PostgreSQL", level: "Avanzado" },
      { name: "Supabase", level: "Intermedio" },
      { name: "Database Design", level: "Intermedio" },
      { name: "Oracle", level: "Básico" },
    ],
    cloud: [
      { name: "AWS (EC2, S3, CloudWatch)", level: "Intermedio" },
      { name: "Docker", level: "Intermedio" },
      { name: "Cloudflare (Workers, R2)", level: "Intermedio" },
      { name: "VPS Management", level: "Intermedio" },
      { name: "Infrastructure Automation", level: "Intermedio" },
    ],
    documentation: [
      { name: "TSOA/Swagger", level: "Avanzado" },
      { name: "API Documentation", level: "Avanzado" },
      { name: "Technical Writing", level: "Intermedio" },
    ],
    tools: [
      { name: "Git", level: "Avanzado" },
      { name: "Postman", level: "Intermedio" },
      { name: "Insomnia", level: "Intermedio" },
    ],
    integrations: [
      { name: "Payment Gateways", level: "Básico" },
      { name: "MercadoPago API", level: "Básico" },
      { name: "Telegram API", level: "Intermedio" },
    ]
  }
};

