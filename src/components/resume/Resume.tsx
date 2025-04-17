'use client';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cvData } from "@/data/cv.data";
import { Mail, MapPin, Phone, GraduationCap, Briefcase, Code, Cpu } from "lucide-react";
import { useRef } from "react";

export function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null)
  return (
    <div className="max-w-3xl mx-auto" ref={resumeRef}>
      {/* Header con botón de descarga */}

      <Card className="p-8 shadow-lg border border-gray-200 bg-white"> {/* Cambiado */}
        {/* Sección de Información Personal */}
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-xl font-bold text-gray-800 leading-tight">
            Alejandro Vergara Tamayo
          </h1>

          {/* Título en dos líneas con mejor jerarquía */}
          <div className="space-y-1">
            <h2 className="text-x text-gray-800 font-medium">Desarrollador Backend</h2>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              Especializado en Node.js · TypeScript · Docker · AWS · SQL
            </p>
          </div>

          {/* Contacto en línea única */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-3 text-sm text-gray-600">
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
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Resumen Profesional</h2>
          <Separator className="mb-3 bg-gray-200" />
          <p className="text-gray-700 text-justify">{cvData.summary}</p>
        </section>

        {/* Sección de Experiencia Laboral */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-600" />
           Proyectos 
          </h2>
          <Separator className="mb-3 bg-gray-200" />

          <div className="space-y-6">
            {cvData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex justify-between">
                  <h3 className="font-medium text-gray-900">{exp.role}</h3>
                  <span className="text-sm text-gray-500 bg-blue-50 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <div className="text-sm font-medium text-blue-600 mb-2">
                  {exp.company} • {exp.location}
                </div>
                <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="leading-snug">{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Educación */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600" />
            Educación
          </h2>
          <Separator className="mb-3 bg-gray-200" />

          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index} className="flex justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-gray-600">{edu.institution}</p>
                </div>
                <span className="text-sm text-gray-500">{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sección de Habilidades Técnicas */}
        <section>
          <h2 className="text-xl font-semibold mb-2 text-gray-800 flex items-center gap-2">
            <Code className="h-5 w-5 text-blue-600" />
            Habilidades Técnicas
          </h2>
          <Separator className="mb-3 bg-gray-200" />

          <div className="flex flex-wrap gap-3">
            {cvData.skills.map((skill) => (
              <div
                key={skill}
                className="bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-800 flex items-center"
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
