 import profileImg from '../assets/images/profile_developer_1784799763426.jpg';
import ecommerceImg from '../assets/images/project_ecommerce_1784799779681.jpg';
import dashboardImg from '../assets/images/project_dashboard_1784799803479.jpg';
import taskappImg from '../assets/images/project_taskapp_1784799858308.jpg';

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
  { id: '1', name: 'Bot Designer for Discord (BDFD)', category: 'bdfd', level: 92, description: 'BDScript & BDScript 2 syntax' },
  { id: '2', name: 'Discord Bot Architecture', category: 'bdfd', level: 88, description: 'Command structure, callbacks, variables' },
  { id: '3', name: 'Bot Moderation & Utility System', category: 'bdfd', level: 90, description: 'Auto-mod, tickets, verification, logging' },
  { id: '4', name: 'Economy & Leveling Systems', category: 'bdfd', level: 85, description: 'Custom variables, shop commands, rank cards' },
  { id: '5', name: 'PixelLab Graphic Design', category: 'design', level: 90, description: 'Mobile graphic design & layouting' },
  { id: '6', name: 'Typography & Text Effects', category: 'design', level: 88, description: 'Custom fonts, 3D text, gradients, shadows' },
  { id: '7', name: 'Poster & Banner Design', category: 'design', level: 86, description: 'Social media banners, esports graphics, thumbnails' },
  { id: '8', name: 'Photo Editing & Manipulation', category: 'design', level: 82, description: 'Background removal, color grading, lighting' },
  { id: '9', name: 'Discord API & Webhooks', category: 'tools', level: 80, description: 'Embed structures & webhook notifications' },
  { id: '10', name: 'Canva / Mobile Editing Tools', category: 'tools', level: 85, description: 'Complementary design assets' },
];

export const initialProjects: ProjectItem[] = [
  {
    id: '1',
    title: 'Advanced Discord Economy & Ticket Bot (BDFD)',
    category: 'bdfd',
    description: 'A feature-rich BDFD Discord bot with full economy system, shop items, gambling games, and interactive ticket support.',
    longDescription: 'Built entirely using Bot Designer for Discord (BDScript). Features include custom user variables, daily reward timers, shop purchasing systems, auto moderation, and modal ticket support for Discord communities.',
    imageUrl: taskappImg,
    tags: ['BDFD', 'BDScript', 'Discord Bot', 'Economy System', 'Ticket Bot'],
    featured: true,
  },
  {
    id: '2',
    title: 'Esports Gaming Banner & Logo (PixelLab)',
    category: 'pixellab',
    description: 'High-contrast mobile banner & typography design created entirely on PixelLab for an esports team.',
    longDescription: 'Designed using custom 3D typography, lighting highlights, character masking, and gradient overlays inside PixelLab. Optimized for YouTube and Discord banner dimensions.',
    imageUrl: ecommerceImg,
    tags: ['PixelLab', 'Graphic Design', 'Esports Banner', 'Mobile Art'],
    featured: true,
  },
  {
    id: '3',
    title: 'Community Moderation & Leveling Bot (BDFD)',
    category: 'bdfd',
    description: 'Automated moderation bot with level-up rank cards, warn system, and anti-spam filters built in BDFD.',
    longDescription: 'Features automated role assignment on leveling, customizable prefix/slash commands, detailed log embeds, and kick/ban/mute administrative tools.',
    imageUrl: dashboardImg,
    tags: ['BDFD', 'Moderation Bot', 'Discord API', 'Leveling System'],
    featured: true,
  },
];

export const initialExperiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Freelance Discord Bot Developer',
    company: 'Self-Employed / Commissions',
    period: '2022 - Present',
    description: 'Developed over 50+ custom Discord bots using BDFD (Bot Designer for Discord) for various gaming and community servers.',
  },
  {
    id: '2',
    role: 'Mobile Graphic Designer',
    company: 'PixelLab Commissions',
    period: '2022 - Present',
    description: 'Created custom banners, avatars, posters, and esports logos using PixelLab for online clients and server owners.',
  },
];

export const initialEducations: EducationItem[] = [
  {
    id: '1',
    degree: 'Autodidact Discord Bot Developer & Graphic Designer',
    institution: 'Self-Taught & Community Projects',
    period: '2021 - Present',
    description: 'Focused on BDScript syntax mastering, Discord bot logic, and mobile digital graphic art composition.',
  },
];
