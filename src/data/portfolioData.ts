import profileImg from '../assets/images/profile_developer_1784799763426.jpg';
import ecommerceImg from '../assets/images/project_ecommerce_1784799779681.jpg';
import dashboardImg from '../assets/images/project_dashboard_1784799803479.jpg';

import { ProfileData, SkillItem, ProjectItem, ExperienceItem, EducationItem } from '../types';

export const initialProfileData: ProfileData = {
  name: 'Deon',
  title: 'Discord Bot Developer & Graphic Designer',
  tagline: 'I build custom Discord bots using Bot Designer for Discord (BDFD) and create graphics with PixelLab.',
  aboutText: "I'm Deon, a passionate Discord Bot Developer and Graphic Designer. I build custom Discord bots with Bot Designer for Discord (BDFScript) and create clean, eye-catching graphics, including posters, banners, and typography using PixelLab.\n\nOutside of development and design, I enjoy swimming, riding motorcycles, watching anime, donghua, dramas, and movies, as well as exploring new ideas and learning new things.",
  avatarUrl: profileImg,
  email: 'deon.dev@example.com',
  location: 'Indonesia',
  phone: '+62 812 3456 7890',
  whatsapp: '+62 812 3456 7890',
  telegram: '@deon_dev',
  discord: 'deon_dev',
  availability: 'Available for BDFD Bot & PixelLab Design Commissions',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    instagram: 'https://instagram.com',
    email: 'mailto:deon.dev@example.com',
  },
  highlights: [
    {
      icon: 'code',
      title: 'Bot Designer for Discord (BDFD)',
      description: 'Building moderation, economy, leveling, ticket, giveaway, and utility commands with BDScript.',
    },
    {
      icon: 'user',
      title: 'PixelLab Graphic Design',
      description: 'Crafting creative posters, banners, logos, and typography art with PixelLab.',
    },
  ],
};

export const initialSkills: SkillItem[] = [
  { name: 'Bot Designer for Discord (BDFD)', level: 98, category: 'Tools & Design' },
  { name: 'PixelLab', level: 95, category: 'Tools & Design' },
];

export const initialProjects: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Custom Discord Bot (BDFD)',
    category: 'Discord Bot',
    description: 'A multi-purpose Discord bot built with Bot Designer for Discord (BDFScript) featuring moderation, economy, leveling, ticket, giveaway, and utility commands.',
    longDescription: 'Created using BDFD (Bot Designer for Discord) and BDFScript. Features include customizable server moderation commands, leveling system, tickets, giveaways, slash commands, interactive buttons, and custom embeds.',
    image: ecommerceImg,
    tags: ['BDFD', 'BDFScript', 'Discord Bot', 'Discord API'],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'PixelLab Graphic Design Portfolio',
    category: 'Graphic Design',
    description: 'A collection of creative esports banners, YouTube thumbnails, social media posters, and custom typography created in PixelLab.',
    longDescription: 'Designed using PixelLab mobile app with custom 3D typography, lighting effects, color grading, and vector mascot integrations tailored for gaming communities.',
    image: dashboardImg,
    tags: ['PixelLab', 'Graphic Design', 'Typography', 'Branding'],
    liveUrl: '#',
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export const initialExperiences: ExperienceItem[] = [
  {
    period: '2022 - Present',
    role: 'Discord Bot Developer',
    company: 'Freelance & Community Projects',
    description: 'Building moderation, economy, leveling, ticket, giveaway, and utility commands with BDScript.',
    skillsUsed: ['BDFD', 'BDFScript', 'Bot Development', 'Discord'],
  },
  {
    period: '2021 - Present',
    role: 'PixelLab Graphic Designer',
    company: 'Freelance Design',
    description: 'Creating custom visual assets, logos, social media banners, and promotional posters for clients using PixelLab.',
    skillsUsed: ['PixelLab', 'Graphic Design', 'Typography', 'Branding'],
  },
];

export const initialEducations: EducationItem[] = [
  {
    period: '2020 - 2024',
    degree: 'Software Engineering & Creative Digital Design',
    institution: 'Technology & Design Academy',
    description: 'Focused on programming fundamentals, bot architecture, API development, and mobile digital graphic design.',
  },
];
