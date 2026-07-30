import { ProfileData, Project, SkillCategory } from '../types';

export const initialProfileData: ProfileData = {
  name: 'Deon',
  title: 'BDFD Bot Developer & PixelLab Graphic Designer',
  bio: 'Spesialis dalam pembuatan bot Discord interaktif berbasis BDFD (Bot Designer for Discord) dan desain grafis kreatif seluler menggunakan PixelLab.',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
  email: 'deon.dev@example.com',
  location: 'Indonesia',
  phone: '+62 858 2334 2058',
  telegram: '@deonats',
  discord: 'deonhere.',
  availability: 'Available for BDFD Bot & PixelLab Design Commissions',
  socials: {
    github: 'https://github.com',
    instagram: 'https://instagram.com',
    email: 'mailto:deon.dev@example.com',
  },
  aboutText: [
    'Halo! Saya Deon, seorang kreator digital yang berfokus pada pengembangan Bot Discord dengan BDFD serta Desain Grafis Ponsel menggunakan PixelLab.',
    'Saya berdedikasi menciptakan pengalaman Discord Server yang otomatis, responsif, dan kaya fitur, serta menyajikan elemen visual seperti poster, logo, banner, dan pampflet yang estetik.',
    'Setiap proyek dikerjakan dengan ketelitian tinggi untuk memastikan kepuasan klien dan performa server/visual yang optimal.'
  ],
  stats: [
    { label: 'Proyek Selesai', value: '45+' },
    { label: 'Bot Discord BDFD', value: '25+' },
    { label: 'Desain PixelLab', value: '50+' },
    { label: 'Klien Puas', value: '30+' }
  ]
};

export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Aegis Security & Economy Bot',
    category: 'bdfd',
    categoryLabel: 'Bot Designer for Discord',
    shortDescription: 'Bot Discord serbaguna dengan sistem ekonomi server, moderasi otomatis, dan tiket bantuan.',
    fullDescription: 'Aegis adalah bot kustom yang dirancang dengan ribuan baris perintah BDFD. Bot ini mengelola otomatisasi server seperti antispam, log aktivitas, sistem koin/ekonomi interaktif, hingga pendaftaran tiket layanan.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    tags: ['BDFD', 'Discord API', 'Bot Moderasi', 'Sistem Ekonomi'],
    features: ['120+ Perintah Custom', 'Sistem Tiket Support Auto-close', 'Moderasi Kustom & Auto Role', 'Sistem Leveling & Rank Card'],
    commandsCount: 120,
    date: '2024'
  },
  {
    id: '2',
    title: 'Cyberpunk Game Tournament Poster',
    category: 'pixellab',
    categoryLabel: 'PixelLab Design',
    shortDescription: 'Poster turnamen e-sports bergaya Cyberpunk futuristik yang dirancang penuh di PixelLab.',
    fullDescription: 'Poster promosi skala HD dengan teknik manipulasi pencahayaan, gradasi warna neon kustom, serta susunan tipografi tegas yang mengikat perhatian penonton turnamen e-sports.',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800',
    tags: ['PixelLab', 'Mobile Design', 'E-Sports Poster', 'Cyberpunk'],
    features: ['Resolusi Tinggi Ultra-HD 4K', 'Manipulasi Cahaya Neon Kustom', 'Aset Vektor Hand-crafted', 'Font Typography Modern'],
    canvasSize: '2160 x 3840 px',
    date: '2024'
  },
  {
    id: '3',
    title: 'Vortex Music & RPG Discord Bot',
    category: 'bdfd',
    categoryLabel: 'Bot Designer for Discord',
    shortDescription: 'Bot Discord permainan RPG teks dan sistem quest komunitas interaktif.',
    fullDescription: 'Dirancang menggunakan logika variabel BDFD tingkat lanjut, memungkinkan pengguna bertualang dalam cerita RPG interaktif, mengumpulkan item, dan bertarung antar sesama anggota server.',
    imageUrl: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800',
    tags: ['BDFD', 'Text RPG', 'Discord Bot', 'Variable Engine'],
    features: ['Sistem Inventori Item', 'Sistem Pertarungan Turn-based', 'Save Progress via Global Vars', 'Dynamic Embed Messages'],
    commandsCount: 85,
    date: '2024'
  },
  {
    id: '4',
    title: 'Minimalist Esports Team Logo & Branding',
    category: 'pixellab',
    categoryLabel: 'PixelLab Design',
    shortDescription: 'Identitas maskot logo dan kit media sosial untuk tim gaming profesional.',
    fullDescription: 'Logo maskot yang tajam dengan kombinasi warna gradien elegan, disertai jersey mockup dan pampflet media sosial.',
    imageUrl: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&q=80&w=800',
    tags: ['PixelLab', 'Vector Mascot', 'Branding', 'Social Media Kit'],
    features: ['Desain Vektor Segi Banyak', 'Kit Media Sosial Lengkap', 'Mockup Jersey & Banner', 'Format PNG Transparan HD'],
    canvasSize: '3000 x 3000 px',
    date: '2024'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Bot Designer for Discord (BDFD)',
    description: 'Pengembangan logika bot, variabel server, embed kustom, dan otomasi komunitas.',
    skills: [
      { name: 'BDFD Logic Scripting', level: 'Expert', description: 'Penguasaan logika fungsi $if, $checkCondition, $onlyIf, dan matematika $calculate.', icon: 'Code' },
      { name: 'Variables & Storage', level: 'Advanced', description: 'Pengelolaan $setUserVar, $setServerVar, dan $getVar untuk sistem data persisten.', icon: 'Database' },
      { name: 'Custom Embeds & Components', level: 'Expert', description: 'Desain pesan embed elegan, tombol interaktif, select menu, dan modal input.', icon: 'Layout' },
      { name: 'Moderation & Automation', level: 'Expert', description: 'Sistem auto-moderasi, filter kata, welcome card, dan logging aktivitas server.', icon: 'Shield' },
    ]
  },
  {
    title: 'PixelLab Mobile Graphic Design',
    description: 'Pembuatan karya visual definisi tinggi dari perangkat seluler dengan kontrol tipografi dan layer presisi.',
    skills: [
      { name: 'Typography & Layout', level: 'Expert', description: 'Penataan tata letak visual, kombinasi font kustom, dan efek teks 3D/Shadow.', icon: 'Type' },
      { name: 'Color Grading & Effects', level: 'Advanced', description: 'Manipulasi pencahayaan, overlay tekstur, vignetting, dan penyelarasan warna.', icon: 'Palette' },
      { name: 'Vector & Mascot Editing', level: 'Advanced', description: 'Pemotongan presisi, pembuatan shape kustom, dan perakitan elemen vektor.', icon: 'PenTool' },
      { name: 'Poster & Banner Composition', level: 'Expert', description: 'Komposisi poster e-sports, flyer acara, dan jersey mockup siap cetak.', icon: 'Image' },
    ]
  }
];
