export interface HighlightItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  aboutText: string;
  avatarUrl: string;
  email: string;
  location: string;
  phone: string;
  whatsapp?: string;
  telegram: string;
  discord: string;
  availability: string;
  socials: {
    github: string;
    linkedin: string;
    instagram: string;
    email: string;
  };
  highlights: HighlightItem[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'bdfd' | 'design' | 'tools' | 'other';
  level: number;
  iconName?: string;
  description?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'bdfd' | 'pixellab' | 'all';
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}
