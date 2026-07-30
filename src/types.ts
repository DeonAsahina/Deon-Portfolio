export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  aboutText: string;
  avatarUrl: string;
  avatarDecorationUrl?: string;
  email: string;
  location: string;
  phone: string;
  whatsapp?: string;
  telegram?: string;
  discord?: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
  highlights: {
    icon: 'rocket' | 'code' | 'user';
    title: string;
    description: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: number; // 0-100
  category: 'Frontend' | 'Backend' | 'Tools & Design';
  iconName?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Discord Bot' | 'Graphic Design' | string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  skillsUsed: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}
