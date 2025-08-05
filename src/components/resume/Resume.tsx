import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Code,
  Terminal,
  Database,
  Cloud,
  PenTool,
  Server,
  FileText,
  Link,
  ExternalLink,
  Github,
  LucideIcon
} from 'lucide-react';
import { cvData } from '@/data/cv.data';

interface Skill {
  name: string;
  level: string;
}

interface Experience {
  role: string;
  period: string;
  company: string;
  location: string;
  tags?: string[];
  achievements: string[];
  repoLink?: string;
  linkedinLink?: string;
}

interface SkillCardProps {
  skill: Skill;
}

interface SkillSectionProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

interface ExperienceCardProps {
  exp: Experience;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div className="group relative bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
    <div className="flex justify-between items-start mb-2">
      <div className="font-semibold text-slate-800 text-sm">{skill.name}</div>
      <div className="text-xs font-medium text-slate-500 bg-slate-50 px-2 py-0.5 rounded-full">
        {skill.level}
      </div>
    </div>
    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-300 ${skill.level === "Avanzado"
          ? "bg-gradient-to-r from-emerald-500 to-emerald-400"
          : skill.level === "Intermedio"
            ? "bg-gradient-to-r from-blue-500 to-blue-400"
            : "bg-gradient-to-r from-amber-500 to-amber-400"
          }`}
        style={{
          width: skill.level === "Avanzado" ? "88%" :
            skill.level === "Intermedio" ? "65%" : "35%"
        }}
      />
    </div>
  </div>
);

const SkillSection: React.FC<SkillSectionProps> = ({ title, icon: Icon, skills }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <Icon className="h-5 w-5 mr-2 text-slate-600" />
      <h3 className="text-lg font-bold text-slate-800">{title}</h3>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {skills.map((skill, index) => (
        <SkillCard key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const ExperienceCard: React.FC<ExperienceCardProps> = ({ exp }) => (
  <div className="group relative bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-t-2xl" />

    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.role}</h3>
        <div className="text-slate-600 font-medium mb-2">
          {exp.company}
        </div>
        <div className="flex items-center text-sm text-slate-500 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          {exp.location}
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm font-semibold px-3 py-1.5 rounded-full border border-blue-200">
        {exp.period}
      </div>
    </div>

    {exp.tags && exp.tags.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {exp.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-md transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
    )}

    <ul className="space-y-2.5">
      {exp.achievements.map((achievement, i) => (
        <li key={i} className="flex items-start text-slate-700 text-sm leading-relaxed">
          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
          {achievement}
        </li>
      ))}
    </ul>

    <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100">
      {exp.repoLink && (
        <a
          href={exp.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 group"
        >
          <Github className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" />
          Código
        </a>
      )}
      {exp.linkedinLink && (
        <a
          href={exp.linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200 group"
        >
          <ExternalLink className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" />
          LinkedIn
        </a>
      )}
    </div>
  </div>
);

export default function Resume() {
  const resumeRef = useRef(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      <div className="max-w-5xl mx-auto" ref={resumeRef}>
        <Card className="overflow-hidden bg-white shadow-xl border-0 rounded-3xl">
          {/* Header con gradiente */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>

            <div className="relative z-10 text-center">
              <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                {cvData.name}
              </h1>
              <div className="space-y-2 mb-6">
                <h2 className="text-xl lg:text-2xl font-semibold text-slate-200">Desarrollador Backend</h2>
                <p className="text-slate-300 text-sm lg:text-base max-w-2xl mx-auto">
                  Especializado en Node.js · TypeScript · Docker · AWS · Arquitecturas Escalables
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  {cvData.contact.email}
                </div>
                <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 mr-2" />
                  {cvData.contact.phone}
                </div>
                <div className="flex items-center text-slate-300 hover:text-white transition-colors">
                  <MapPin className="h-4 w-4 mr-2" />
                  {cvData.contact.location}
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            {/* Resumen Profesional */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Resumen Profesional</h2>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-6">
                <p className="text-slate-700 leading-relaxed text-base">{cvData.summary}</p>
              </div>
            </section>

            {/* Experiencia */}
            <section className="mb-12">
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-3">
                  <Briefcase className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Experiencia y Proyectos</h2>
              </div>

              <div className="space-y-6">
                {cvData.experience.map((exp, index) => (
                  <ExperienceCard key={index} exp={exp} />
                ))}
              </div>
            </section>

            {/* Educación */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Educación</h2>
              </div>

              <div className="grid gap-4">
                {cvData.education.map((edu, index) => (
                  <div key={index}
                    className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold text-slate-900">{edu.degree}</h3>
                        <p className="text-slate-600 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                        {edu.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Habilidades Técnicas */}
            <section>
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                  <Code className="h-4 w-4 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Habilidades Técnicas</h2>
              </div>

              <SkillSection
                title="Lenguajes de Programación"
                icon={Terminal}
                skills={cvData.skills.languages}
              />

              <SkillSection
                title="Backend y Arquitectura"
                icon={Server}
                skills={cvData.skills.backend}
              />

              <SkillSection
                title="Bases de Datos"
                icon={Database}
                skills={cvData.skills.databases}
              />

              <SkillSection
                title="Cloud e Infraestructura"
                icon={Cloud}
                skills={cvData.skills.cloud}
              />

              <SkillSection
                title="Documentación y APIs"
                icon={FileText}
                skills={cvData.skills.documentation}
              />

              <SkillSection
                title="Herramientas de Desarrollo"
                icon={PenTool}
                skills={cvData.skills.tools}
              />

              <SkillSection
                title="Integraciones y APIs"
                icon={Link}
                skills={cvData.skills.integrations}
              />
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
