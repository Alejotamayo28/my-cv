import { LucideIcon } from "lucide-react";

export interface CvData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  summary: string;
  experience: Experience[];
  education: EducationSkill[];
  skills: {
    cloud: Skill[],
    languages: Skill[],
    backend: Skill[],
    documentation: Skill[],
    integrations: Skill[],
    databases: Skill[],
    tools: Skill[],
  };
}

export interface Skill {
  name: string;
  level?: string;
}

interface EducationSkill {
  degree: string,
  period: string,
  institution: string
}

export interface Experience {
  role: string;
  period: string;
  company: string;
  location: string;
  tags?: string[];
  achievements: string[];
  repoLink?: string;
  linkedinLink?: string;
}

export interface SkillCardProps {
  skill: Skill;
}

export interface SkillSectionProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export interface ExperienceCardProps {
  exp: Experience;
}
