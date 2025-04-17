'use client';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cvData } from "@/data/cv.data";
import { Mail, MapPin, Phone, GraduationCap, Briefcase, Code, Cpu } from "lucide-react";
import { useRef } from "react";
import "@/styles/global.css"

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null)
  return (
    <div className="max-w-3xl mx-auto" ref={resumeRef}>

      <Card className="p-8 shadow-lg border border-gray-200 bg-white">
        {/* Sección de Información Personal */}
        <div className="mb-8 text-center space-y-2">
          <h1 className="resume-title">
            Alejandro Vergara Tamayo
          </h1>

          {/* Título en dos líneas con mejor jerarquía */}
          <div className="space-y-1">
            <h2 className="text-x text-gray-800 font-sans">Desarrollador Backend</h2>
            <p className="font-sans-serif text-sm text-gray-500 max-w-2xl mx-auto">
              Especializado en Node.js · TypeScript · Docker · AWS · SQL
            </p>
          </div>

          {/* Contacto en línea única */}
          <div className="font-sans-serif flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-1 text-gray-500" />
              {cvData.contact.email}
            </div>
            <div className="flex items-center">
              <Phone className="h-4 w-4 mr-1 text-gray-500" />
              {cvData.contact.phone}
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1 text-gray-500" />
              {cvData.contact.location}
            </div>
          </div>
        </div>
        {/* Sección de Resumen Profesional */}
        <section className="mb-8">
          <h2 className="resume-title">Resumen Profesional</h2>
          <Separator className="mb-3 bg-gray-200" />
          <p className="summary">{cvData.summary}</p>
        </section>

        {/* Sección de Experiencia Laboral */}
        <section className="mb-8">
          <h2 className="resume-title-icon">
            <Briefcase className="h-5 w-5 text-blue-600" />
            Proyectos
          </h2>
          <Separator className="mb-3 bg-gray-200" />

          <div className="space-y-6">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between">
                  <h3 className="font-serif font-medium text-gray-900">{exp.role}</h3>
                  <span className="font-serif text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <div className="font-serif font-medium text-blue-600 mb-2">
                  {exp.company} • {exp.location}
                </div>
                {exp.tags && exp.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-3">
                    {exp.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="font-sans-serif list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="leading-snug">{achievement}</li>
                  ))}
                </ul>
                {exp.repoLink && (
                  <div className="mt-2">
                    <a
                      href={exp.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Ver código en GitHub
                    </a>
                  </div>
                )}
                {exp.linkedinLink && (
                  <a
                    href={exp.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" strokeWidth={2} />
                    </svg>
                    Ver en LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>








        </section>

        {/* Sección de Educación */}
        <section className="mb-8">
          <h2 className="resume-title-icon">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            Educación
          </h2>
          <Separator className="mb-3 bg-gray-200" />

          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h3 className="font-serif font-medium text-gray-900">{edu.degree}</h3>
                  <p className="font-sans-serif text-sm text-gray-600">{edu.institution}</p>
                </div>
                <span className="font-serif text-sm text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Habilidades Técnicas */}
        <section>
          <h2 className="resume-title-icon">
            <Code className="h-5 w-5 text-blue-600" />
            Habilidades Técnicas
          </h2>
          <Separator className="mb-3 bg-gray-200" />

          <div className="flex flex-wrap gap-3">
            {cvData.skills.map((skill) => (
              <div
                key={skill}
                className="font-sans-serif bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-800 flex items-center"
              >
                <Cpu className="h-3 w-3 mr-1" />
                {skill}
              </div>
            ))}
          </div>
        </section>
      </Card>
    </div>
  );
}
