import { ProfileData, SkillItem, ProjectItem, ExperienceItem, EducationItem } from '../types';

export const initialProfileData: ProfileData = {
  name: 'Deon',
  title: 'Discord Bot Developer & Graphic Designer',
  tagline: 'I build custom Discord bots using Bot Designer for Discord (BDFD) and create graphics with PixelLab.',
  aboutText: "I'm Deon, a passionate Discord Bot Developer and Graphic Designer. I build custom Discord bots with Bot Designer for Discord (BDFScript) and create clean, eye-catching graphics, including posters, banners, and typography using PixelLab.\n\nOutside of development and design, I enjoy swimming, riding motorcycles, watching anime, donghua, dramas, and movies, as well as exploring new ideas and learning new things.",
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  email: 'deon.dev@example.com',
  location: 'Indonesia',
  phone: '+62 812 3456 7890',
  telegram: '@deon_dev',
  discord: 'deon_dev',
  availability: 'Available for BDFD Bot & PixelLab Design Commissions',
  github: 'https://github.com',
  instagram: 'https://instagram.com',
  skillsOverview: 'Specializing in BDFD (Bot Designer for Discord), BDFScript logic, Discord server setup, and mobile graphic design with PixelLab.'
};

export const initialSkills: SkillItem[] = [
  { id: '1', name: 'Bot Designer for Discord (BDFD)', category: 'Bot Development', level: 95, iconName: 'Bot' },
  { id: '2', name: 'BDFScript Logic & Commands', category: 'Bot Development', level: 90, iconName: 'Code' },
  { id: '3', name: 'Discord Server Architecture', category: 'Bot Development', level: 92, iconName: 'MessageSquare' },
  { id: '4', name: 'PixelLab Graphic Design', category: 'Design', level: 88, iconName: 'Palette' },
  { id: '5', name: 'Mobile Poster & Banner Design', category: 'Design', level: 85, iconName: 'Image' },
  { id: '6', name: 'Custom Typography & Layout', category: 'Design', level: 85, iconName: 'Type' },
  { id: '7', name: 'Community Moderation & Setup', category: 'Community', level: 90, iconName: 'ShieldCheck' }
];

export const initialProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'BDFD Custom Moderation & Utility Bot',
    category: 'Discord Bot',
    description: 'A multi-purpose Discord bot built with Bot Designer for Discord (BDFScript) featuring moderation, economy, leveling, ticket, giveaway, and utility commands.',
    longDescription: 'Created using BDFD (Bot Designer for Discord) and BDFScript. Features include customizable server moderation commands, leveling system, tickets, giveaways, slash commands, interactive buttons, and custom embeds.',
    image: 'https://images.unsplash.com/photo-1614680376593-902f749f71c3?auto=format&fit=crop&q=80&w=800',
    tags: ['BDFD', 'BDFScript', 'Discord Bot', 'Discord API'],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'PixelLab Gaming Poster & Banner Pack',
    category: 'Graphic Design',
    description: 'A collection of creative esports banners, YouTube thumbnails, social media posters, and custom typography created in PixelLab.',
    longDescription: 'Designed using PixelLab mobile app with custom 3D typography, lighting effects, color grading, and vector mascot integrations tailored for gaming communities.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    tags: ['PixelLab', 'Graphic Design', 'Typography', 'Branding'],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true
  }
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Freelance Discord Bot Developer (BDFD)',
    company: 'Self-Employed / Discord Communities',
    period: '2022 - Present',
    description: 'Developing custom BDFD bots for various Discord servers, including moderation bots, economy systems, and ticket support systems using BDFScript.',
    technologies: ['BDFD', 'BDFScript', 'Discord API', 'Embed Builder']
  },
  {
    id: '2',
    role: 'Mobile Graphic Designer',
    company: 'Freelance PixelLab Creator',
    period: '2021 - Present',
    description: 'Creating visual content including esports banners, social media flyers, typography posters, and branding assets using PixelLab.',
    technologies: ['PixelLab', 'Typography', 'Photo Editing', 'Branding']
  }
];

export const initialEducations: EducationItem[] = [
  {
    id: '1',
    degree: 'Autodidact Developer & Graphic Designer',
    institution: 'Self-Taught / Online Learning',
    period: '2021 - Present',
    description: 'Mastered Discord bot development via Bot Designer for Discord and mobile visual design with PixelLab through hands-on community projects.'
  }
];
