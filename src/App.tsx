import React, { useState, useEffect, useRef } from 'react';
import { 
  LayoutGrid, 
  User, 
  Users, 
  Circle,
  Code2,
  Share2,
  Mail,
  ChevronRight,
  MessageSquare,
  Plus,
  Minus,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
interface DiscordUser {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  avatar_decoration?: string;
}

interface LanyardData {
  discord_user: DiscordUser;
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: any[];
}

// --- Constants ---
const DISCORD_ID = '737946187830919218'; // ID Anda

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');
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

  const status = discordData?.discord_status || 'offline';
  const avatarUrl = discordData 
    ? `https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}.png?size=512`
    : "https://picsum.photos/seed/kydo/512/512";

  const decorationUrl = discordData?.discord_user.avatar_decoration
    ? `https://cdn.discordapp.com/avatar-decorations/${discordData.discord_user.id}/${discordData.discord_user.avatar_decoration}.png?size=512`
    : null;

  const statusColor = {
    online: 'text-[#23a55a]',
    idle: 'text-[#f0b232]',
    dnd: 'text-[#f23f43]',
    offline: 'text-[#80848e]'
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans pb-24 overflow-x-hidden">
      <AnimatePresence mode="wait">
        {activeTab === 'profile' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header / Profile Section */}
            <div className="flex flex-col items-center pt-12 pb-8 px-6">
              {/* Profile Decoration & Avatar */}
              <div className="relative mb-6">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <div className={`${decorationUrl ? 'w-[85%] h-[85%]' : 'w-full h-full'} rounded-full overflow-hidden border-2 border-white/10 transition-all duration-300`}>
                    <img 
                      src={avatarUrl} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {decorationUrl && (
                    <img 
                      src={decorationUrl} 
                      alt="Discord Decoration" 
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <h1 className="text-2xl font-bold tracking-tight">DEON</h1>
                  <img 
                    src="https://i.postimg.cc/npCwFp6T/20260314-115506.png" 
                    alt="Verified" 
                    className="w-5 h-5 object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-gray-400 font-medium text-sm">Animation Enthusiast</p>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                {status === 'idle' || status === 'offline' ? (
                  <motion.img
                    src={status === 'idle' 
                      ? "https://i.postimg.cc/9W7hryKw/20260314-120224.png"
                      : "https://i.postimg.cc/sVpNkmbq/20260314-120817.png"
                    }
                    alt={`${status} Status`}
                    className="w-3 h-3 object-contain"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Circle size={10} className={`fill-current ${statusColor[status]}`} />
                )}
                <span className="text-xs font-medium text-gray-400 lowercase">{status}</span>
              </div>
            </div>

              {/* Main Content */}
              <div className="px-8 space-y-10 max-w-2xl mx-auto">
                {/* About Me */}
                <section>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-200">About Me</h2>
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                  Hi! I’m <span className="text-white font-semibold">DEON</span>, an enthusiastic animation fan who loves watching Donghua and also enjoys swimming.
                </p>
              </section>

              {/* Personal Information */}
              <section>
                <h2 className="text-sm font-bold mb-4 tracking-[0.2em] uppercase text-gray-200">Personal Information</h2>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="w-24 text-gray-500 flex items-center gap-2">
                      <Circle size={4} className="fill-current" /> Name
                    </span>
                    <span className="text-gray-400">: Deon</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-24 text-gray-500 flex items-center gap-2">
                      <Circle size={4} className="fill-current" /> Hobby
                    </span>
                    <span className="text-gray-400">: Playing Games, Watching</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-24 text-gray-500 flex items-center gap-2">
                      <Circle size={4} className="fill-current" /> Region
                    </span>
                    <span className="text-gray-400">: Manado, Indonesia</span>
                  </li>
                </ul>
              </section>

              {/* Tech Stack & Tools */}
              <section>
                <h2 className="text-sm font-bold mb-6 tracking-[0.2em] uppercase text-gray-200">Tech Stack & Tools</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Development</p>
                      <p className="text-xs font-medium">BDScript</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                    <div className="relative w-9 h-9 flex-shrink-0">
                      {/* CSS Fallback (Kotak biru dengan huruf P) */}
                      <div className="absolute inset-0 bg-[#24a1f3] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        P
                      </div>
                      {/* Actual Image (Akan menutupi fallback jika berhasil dimuat) */}
                      <img 
                        src="https://i.postimg.cc/xQg2qj40/20260316-081249.png" 
                        alt="PixelLab" 
                        className="absolute inset-0 w-full h-full object-contain rounded-lg z-10"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">Design</p>
                      <p className="text-xs font-medium">PixelLab</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </motion.div>
        )}

        {activeTab === 'socials' && (
          <motion.div
            key="socials"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-12 px-6 max-w-2xl mx-auto"
          >
            {/* Header */}
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-4 mb-4">
                <Share2 size={32} className="text-blue-500" />
                <h1 className="text-4xl font-bold tracking-tight">Contact Me</h1>
              </div>
              <div className="w-32 h-1 bg-blue-600 rounded-full mb-8" />
              <p className="text-gray-400 text-center text-sm max-w-xs leading-relaxed">
                Feel free to contact me through the platforms below.
              </p>
            </div>

            {/* Social Cards */}
            <div className="space-y-4">
              <SocialCard 
                icon={
                  <img 
                    src="https://i.postimg.cc/9XjTvt5Y/20260316-082027.png" 
                    alt="Discord" 
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                } 
                title="@deonhere." 
                description="Chat with me on Discord"
                color="bg-transparent"
                href="https://discord.com/users/737946187830919218"
              />
              <SocialCard 
                icon={
                  <img 
                    src="https://i.postimg.cc/9XjTvt5Y/20260316-082027.png" 
                    alt="Discord Server" 
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                } 
                title="Discord Server" 
                description="Join my Discord server"
                color="bg-transparent"
                href="https://discord.gg/hvwZCXWEnh"
              />
              <SocialCard 
                icon={
                  <img 
                    src="https://i.postimg.cc/yBqFgBgh/20260316-082003.png" 
                    alt="Telegram" 
                    className="w-full h-full object-cover rounded-2xl"
                    referrerPolicy="no-referrer"
                  />
                } 
                title="@deonats" 
                description="Message me on Telegram"
                color="bg-transparent"
                href="https://t.me/deonats"
              />
            </div>

            {/* Decorative Zoom Buttons (from image) */}
            <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 opacity-50">
              <button className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10">
                <Plus size={20} />
              </button>
              <button className="p-2 bg-white/10 rounded-full backdrop-blur-md border border-white/10">
                <Minus size={20} />
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'project' && (
          <motion.div
            key="project"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="pt-20 px-8 text-center"
          >
            <LayoutGrid size={48} className="mx-auto mb-4 text-gray-600" />
            <h2 className="text-xl font-bold mb-2">Projects</h2>
            <p className="text-gray-500">Coming soon...</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/5 px-4 py-3 z-50">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <NavItem 
            icon={<LayoutGrid size={18} />} 
            label="Project" 
            active={activeTab === 'project'} 
            onClick={() => setActiveTab('project')} 
          />
          <NavItem 
            icon={<User size={18} />} 
            label="Profile" 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')} 
          />
          <NavItem 
            icon={<Users size={18} />} 
            label="Socials" 
            active={activeTab === 'socials'} 
            onClick={() => setActiveTab('socials')} 
          />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-all duration-300 ${active ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
    >
      <div className={`p-2 rounded-xl transition-all ${active ? 'bg-white/10' : ''}`}>
        {icon}
      </div>
      <span className="text-[9px] font-bold uppercase tracking-tighter">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-indicator"
          className="w-3 h-0.5 bg-white rounded-full mt-0.5"
        />
      )}
    </button>
  );
}

function SocialCard({ icon, title, description, color, href }: { icon: React.ReactNode, title: string, description: string, color: string, href?: string }) {
  const content = (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-6 cursor-pointer hover:bg-white/10 transition-all w-full text-left"
    >
      <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white shadow-lg flex-shrink-0`}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold tracking-tight mb-1">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
        {content}
      </a>
    );
  }

  return content;
    }
