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
    linkedinLink?:string
  }>;
  education: Array<{
    degree: string;
    period: string;
    institution: string;
  }>;
  skills: string[];
}
