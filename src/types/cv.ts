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
    languages: Array<{
      name: string,
      level: string
    }>,
    frameworks: Array<{
      name: string,
      level: string
    }>,
    databases: Array<{
      name: string,
      level: string
    }>,
    devOps: Array<{
      name: string,
      level: string
    }>
    tools: Array<{
      name: string,
      level: string
    }>,
  };
}
