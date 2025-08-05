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
  experience: Array<{
    role: string;
    period: string;
    company: string;
    location: string;
    tags?: string[],
    achievements: string[];
    repoLink?: string,
    linkedinLink?: string
  }>;
  education: Array<{
    degree: string;
    period: string;
    institution: string;
  }>;
  skills: {
    cloud: Array<{
      name: string,
      level: string
    }>,
    languages: Array<{
      name: string,
      level: string
    }>,
    backend: Array<{
      name: string,
      level: string
    }>,
    documentation: Array<{
      name: string,
      level: string
    }>,
    integrations: Array<{
      name: string,
      level: string
    }>,
    databases: Array<{
      name: string,
      level: string
    }>,
    tools: Array<{
      name: string,
      level: string
    }>,
  };
}


export interface Skill {
  name: string;
  level: string;
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
