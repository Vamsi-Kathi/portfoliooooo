export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
}

export interface Achievement {
    title: string;
}