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
      company: "Plataformad de Despliegue Automatizado",
      location: "Remoto",
      tags: ["Typescript", "Node.js", "AWS", "Docker", "Cloudflare Workers", "Telegram API"],
      achievements: [
        "Desarrollé un bot con Cloudflare Workers que automatiza el despliegue de imágenes Docker en instancias EC2, reduciendo el tiempo de implementación de 25 a 3 minutos por servidor.",
        "Implementé un sistema completo de automatización para instalación de Docker, ejecución de contenedores y monitoreo con CloudWatch, eliminando errores manuales frecuentes en el proceso de despliegue.",
        "Diseñé una integración con DockerHub que permite a cada usuario gestionar sus propias imágenes y visualizar el estado de sus instancias en tiempo real, mejorando la experiencia de usuario y transparencia del sistema.",
      ],
      repoLink: "https://github.com/Alejotamayo28?tab=repositories",
      linkedinLink: "https://www.linkedin.com/in/alejandro-vergara-tamayo-1b3aa1263/"
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

