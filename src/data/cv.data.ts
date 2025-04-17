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
    "Desarrollador Backend con sólida formación académica y proyectos prácticos en automatización, bots conversacionales y despliegue de infraestructura en la nube. Domino tecnologías como Node.js, TypeScript, PostgreSQL, Docker y AWS. He implementado soluciones funcionales en proyectos personales que incluyen optimización de rendimiento backend, orquestación de contenedores y desarrollo de una API para bots de Telegram que atiende más de 100 consultas diarias. Aplico buenas prácticas en arquitectura de software, seguridad y diseño de APIs RESTful. Con fuerte capacidad de aprendizaje autónomo y resolución de problemas complejos. Actualmente estudiante de Tecnología en Desarrollo de Software en la Universidad del Valle, comprometido con aportar valor mientras continúo desarrollando mis habilidades técnicas.",

  experience: [
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2024 - Actualidad",
      company: "Plataforma de Despliegue Automatizado",
      location: "Remoto",
      tags: ["Typescript", "Node.js", "AWS", "Docker", "Cloudflare Workers", "Telegram API"],
      achievements: [
        "Desarrollé un bot con Cloudflare Workers que automatiza el despliegue de imágenes Docker en instancias EC2, reduciendo el tiempo de implementación de 25 a 3 minutos por servidor.",
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
    },
    {
      role: "Desarrollador Backend - Proyecto Personal",
      period: "2023",
      company: "MiniMarket API",
      location: "Remoto",
      tags: ["Typescript", "Express.js", "Node.js", "JWT", "PostgreSQL", "RESTful API"],
      achievements: [
        "Desarrollé una API RESTful completa para un e-commerce de supermercado como proyecto de aprendizaje, implementando los fundamentos de arquitectura cliente-servidor y mejores prácticas de la industria.",
        "Construí un sistema de autenticación y autorización con JWT, roles de usuario y middlewares personalizados, garantizando la seguridad de los endpoints y datos sensibles.",
        "Fundamentos sólidos en arquitectura REST, seguridad y estructuración de rutas.",
      ],
      repoLink: "https://github.com/Alejotamayo28/minimarket-api",
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
  skills: {
    languages: [
      { name: "TypeScript", level: "Avanzado" },
      { name: "JavaScript", level: "Intermedio" },
      { name: "SQL", level: "Intermedio" },
    ],
    frameworks: [
      { name: "Node.js", level: "Intermedio" },
      { name: "Express.js", level: "Intermedio" },
    ],
    databases: [
      { name: "PostgreSQL", level: "Intermedio" },
      { name: "Oracle", level: "Básico" },
    ],
    devOps: [
      { name: "Docker", level: "Intermedio" },
      { name: "AWS (EC2, CloudWatch, S3)", level: "Intermedio" },
      { name: "Cloudflare (Workers, Pages)", level: "Intermedio" },
    ],
    tools: [
      { name: "Git", level: "Avanzado" },
      { name: "Postman", level: "Intermedio" },
      { name: "Insomnia", level: "Intermedio" },
    ],
  }
};

