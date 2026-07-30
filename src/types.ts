export interface Project {
  id: string;
  title: string;
  category: 'bdfd' | 'pixellab' | 'all';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  tags: string[];
  features: string[];
  commandsCount?: number;
  canvasSize?: string;
  demoUrl?: string;
  downloadUrl?: string;
  date: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  email: string;
  location: string;
  phone: string;
  telegram?: string;
  discord?: string;
  availability: string;
  socials: {
    github: string;
    instagram: string;
    email: string;
  };
  aboutText: string[];
  stats: {
    label: string;
    value: string;
  }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    icon: string;
  }[];
}
