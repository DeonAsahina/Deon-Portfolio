import React, { useState, useEffect } from 'react';
import { 
  ExternalLink, 
  Mail, 
  Code2, 
  User2, 
  Briefcase, 
  Gamepad2,
  MessageSquare,
  Loader2,
  Palette,
  Instagram
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
}

interface LanyardData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
}

interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

// --- Constants ---
const DISCORD_ID = '737946187830919218';

// --- Data ---
const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Ziyan APP',
    description: 'A high-performance Discord bot developed using BDScript combining smart automation, clean embeds, and efficient system design.',
    image: 'https://cdn.discordapp.com/attachments/1462713721439784960/1478734583305474179/IMG_20260226_153319.png?ex=69a97a66&is=69a828e6&hm=78ec95b1dec5e08cb1f4bb54101619fafc993cb9a5d527e5a76af1786698ff9e&',
    tags: ['BDScript', 'Discord Bot', 'Automation'],
    link: 'https://discord.com/oauth2/authorize?client_id=1317864266140745800&permissions=8&integration_type=0&scope=bot'
  }
];

const SKILLS: Skill[] = [
  { name: 'BDScript', icon: <Code2 size={14} />, color: 'bg-[#5865F2]/20 text-[#5865F2]' },
  { name: 'PixelLab', icon: <Palette size={14} />, color: 'bg-[#00FF00]/20 text-[#00FF00]' },
];

// --- Components ---
const StatusIndicator = ({ status }: { status: 'online' | 'idle' | 'dnd' | 'offline' }) => {
  const colors = {
    online: 'bg-[#23a55a]',
    idle: 'bg-[#f0b232]',
    dnd: 'bg-[#f23f43]',
    offline: 'bg-[#80848e]'
  };

  return (
    <div className={`absolute bottom-1 right-1 w-6 h-6 rounded-full border-[5px] border-[#232428] ${colors[status]}`}>
      {status === 'idle' && <div className="absolute -top-1 -left-1 w-3 h-3 bg-[#232428] rounded-full" />}
      {status === 'dnd' && <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-1 bg-[#232428] rounded-full" />}
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'about' | 'projects' | 'contact'>('about');
  const [discordData, setDiscordData] = useState<LanyardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
        const json = await response.json();
        if (json.success) setDiscordData(json.data);
      } catch (err) {
        console.error('Failed to fetch Discord data.');
      } finally {
        setLoading(false);
      }
    };
    fetchDiscordData();
    const interval = setInterval(fetchDiscordData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#313338]">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
          <Loader2 size={48} className="text-[#5865f2]" />
        </motion.div>
      </div>
    );
  }

  const avatarUrl = discordData 
    ? `https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}.png?size=256`
    : "https://picsum.photos/seed/avatar/128/128";

  const username = discordData?.discord_user.username || "Karlen Wahongan";
  const status = discordData?.discord_status || "offline";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#313338]">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-[600px] bg-[#232428] rounded-lg overflow-hidden shadow-2xl border border-black/20">
        
        {/* Banner */}
        <div className="h-32 relative overflow-hidden">
          <img 
            src="https://cdn.discordapp.com/attachments/1462713721439784960/1478695161142710272/IMG_20260304_180604.jpg?ex=69a955af&is=69a8042f&hm=78b7dd78ab23ea1e8b53f90a1ed86f38c39bdcbaad5dad9b1823541085959c17&" 
            alt="Banner" className="w-full h-full object-cover" referrerPolicy="no-referrer"
          />
        </div>

        <div className="px-4 pb-4 relative">
          <div className="absolute -top-12 left-4">
            <div className="relative">
              <img src={avatarUrl} alt="Avatar" className="w-24 h-24 rounded-full border-[6px] border-[#232428] object-cover bg-[#313338]" referrerPolicy="no-referrer" />
              <StatusIndicator status={status} />
            </div>
          </div>

          <div className="pt-16 flex flex-col gap-1">
            <h1 className="text-xl font-bold text-white">{username}</h1>
            <div className="text-[#dbdee1] text-sm">Developer & Designer</div>
          </div>

          <div className="h-[1px] bg-[#3f4147] my-4" />

          <div className="flex gap-4 mb-4">
            {(['about', 'projects', 'contact'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`text-sm font-medium pb-1 transition-colors relative ${activeTab === tab ? 'text-white' : 'text-[#949ba4] hover:text-[#dbdee1]'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && <motion.div layoutId="activeTab" className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white" />}
              </button>
            ))}
          </div>

          <div className="min-h-[300px] overflow-y-auto discord-scrollbar">
            <AnimatePresence mode="wait">
              {activeTab === 'about' && (
                <motion.div key="about" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-6">
                  <section>
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">About Me</h3>
                    <p className="text-sm text-[#dbdee1] leading-relaxed">
                      Hai! Saya seorang developer lewat kode dan desainer lewat selera 😎. 
                      Saya membuat bot Discord yang fungsional dan desain yang bersih. 
                      Spesialisasi saya adalah BDScript dengan fokus pada performa dan pengalaman pengguna yang lancar.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">Roles</h3>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS.map((skill) => (
                        <div key={skill.name} className={`flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium ${skill.color}`}>
                          {skill.icon} {skill.name}
                        </div>
                      ))}
                    </div>
                  </section>
                </motion.div>
              )}

              {activeTab === 'projects' && (
                <motion.div key="projects" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-4">
                  <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">Recent Activities</h3>
                  {PROJECTS.map((project) => (
                    <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block bg-[#2b2d31] rounded-lg p-3 border border-black/10 hover:bg-[#313338] transition-colors group">
                      <div className="flex gap-3">
                        <img src={project.image} alt={project.name} className="w-16 h-16 rounded-md object-cover flex-shrink-0" referrerPolicy="no-referrer" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h4 className="text-sm font-bold text-white truncate">{project.name}</h4>
                            <ExternalLink size={14} className="text-[#949ba4] group-hover:text-white" />
                          </div>
                          <p className="text-xs text-[#949ba4] line-clamp-2 mt-1">{project.description}</p>
                        </div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}

              {activeTab === 'contact' && (
                <motion.div key="contact" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="space-y-4">
                  <h3 className="text-[11px] font-bold text-white uppercase tracking-wider mb-2">Connections</h3>
                  <div className="grid grid-cols-1 gap-2">
                    <a href="https://discord.com/users/737946187830919218" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-[#2b2d31] rounded-lg hover:bg-[#313338] transition-colors group">
                      <div className="flex items-center gap-3">
                        <MessageSquare size={18} className="text-[#5865F2]" />
                        <span className="text-sm text-white">Discord</span>
                      </div>
                      <span className="text-xs text-[#949ba4]">deonhere.</span>
                    </a>
                    <a href="mailto:ddeon2669@gmail.com" className="flex items-center justify-between p-3 bg-[#2b2d31] rounded-lg hover:bg-[#313338] transition-colors group">
                      <div className="flex items-center gap-3">
                        <Mail size={18} className="text-white" />
                        <span className="text-sm text-white">Email</span>
                      </div>
                      <span className="text-xs text-[#949ba4]">ddeon2669@gmail.com</span>
                    </a>
                    <a href="https://www.instagram.com/deon.cromwell" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-[#2b2d31] rounded-lg hover:bg-[#313338] transition-colors group">
                      <div className="flex items-center gap-3">
                        <Instagram size={18} className="text-[#E4405F]" />
                        <span className="text-sm text-white">Instagram</span>
                      </div>
                      <span className="text-xs text-[#949ba4]">@deon.cromwell</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1e1f22] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${status === 'online' ? 'bg-[#23a55a]' : 'bg-[#80848e]'}`} />
            <span className="text-[10px] font-bold text-[#949ba4] uppercase">{status}</span>
          </div>
          <div className="flex items-center gap-3">
            <Gamepad2 size={14} className="text-[#949ba4]" />
            <Briefcase size={14} className="text-[#949ba4]" />
            <User2 size={14} className="text-[#949ba4]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
