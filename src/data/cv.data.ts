import { CvData } from "@/types/cv";

export const cvData: CvData = {
  name: "Alejandro Vergara Tamayo",
  title: "Desarrollador Backend | Node.js, TypeScript, Docker, AWS, SQL",
  contact: {
    email: "alejandropucca0@gmail.com",
    phone: "+57 316 5087855",
    location: "Palmira, Colombia",
  },
  summary:
    "Desarrollador Backend con experiencia en automatización, bots conversacionales y despliegue de infraestructura en la nube. Cuento con sólidos conocimientos en Node.js, TypeScript, PostgreSQL, Docker y AWS. He trabajado en proyectos personales enfocados en la eficiencia backend, la orquestación de contenedores y la integración de APIs externas como Telegram. Además, tengo experiencia en el diseño y consumo de APIs RESTful, aplicando buenas prácticas de arquitectura y seguridad. Me apasiona crear soluciones funcionales, escalables y bien estructuradas. Estudiante de Tecnología en Desarrollo de Software en la Universidad del Valle.",

  experience: [
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2024 - Actualidad",
      company: "Despliegue Automatizado con Telegram, Docker y AWS",
      location: "Remoto",
      achievements: [
        "Construcción de un bot alojado en Cloudflare Workers que orquesta el despliegue de imágenes Docker en instancias EC2.",
        "Automatización completa de la instalación de Docker, ejecución de contenedores y monitoreo mediante CloudWatch.",
        "Integración con DockerHub para la gestión personalizada de imágenes por usuario y visualización del estado de las instancias activas.",
      ],
    },
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2024",
      company: "Asistente de gimnasio con Telegram Bot",
      location: "Remoto",
      achievements: [
        "Diseño e implementación de un bot de Telegram que permite registrar, consultar y analizar el historial de entrenamientos de los usuarios.",
        "Manejo de autenticación, sesiones y relaciones familiares al estilo Netflix para compartir progresos.",
        "Base de datos PostgreSQL optimizada con consultas dinámicas por intervalos (diarios, semanales, mensuales, acumulados).",
      ],
    },
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2023",
      company: "API e-commerce para supermercado",
      location: "Remoto",
      achievements: [
        "Desarrollo de una API RESTful con Express.js para entender los fundamentos de la comunicación cliente-servidor.",
        "Implementación de lógica de negocio, autenticación con JWT, middlewares personalizados y consultas SQL.",
        "Fundamentos sólidos en arquitectura REST, seguridad y estructuración de rutas.",
      ],
    },
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

  skills: [
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "Docker",
    "AWS EC2",
    "Telegram Bot API",
    "Express.js",
    "Cloudflare Workers",
    "AWS S3",
    "Git",
    "SQL",
    "Arquitectura REST",
    "AWS CloudWatch",
    "Autenticación JWT",
  ],
};

