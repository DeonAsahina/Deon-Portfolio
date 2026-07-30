import React from 'react';
import { Github, Instagram } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 space-y-6 text-left z-10">
            <div className="space-y-2">
              <span className="text-blue-600 font-semibold text-lg sm:text-xl tracking-wide block">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {profile?.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-500 pt-1">
                {profile?.title}
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              {profile?.tagline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base rounded-xl transition-all duration-200 shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
              >
                <span>View My Work</span>
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium text-sm sm:text-base rounded-xl transition-all duration-200 border border-gray-200 shadow-sm hover:border-gray-300"
              >
                <span>Contact Me</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-5 pt-4 text-gray-700">
              {profile?.socials?.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {profile?.socials?.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Circular Profile Image with Discord Avatar Decoration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative flex items-center justify-center p-4">
              
              {/* Soft Ambient Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 via-indigo-300/20 to-purple-400/20 rounded-full blur-2xl transform scale-110 -z-10" />

              {/* Dot Grid Matrix Accent (Top Right) */}
              <div className="absolute -top-2 -right-2 z-0 hidden sm:block">
                <div className="grid grid-cols-5 gap-2.5">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-80" />
                  ))}
                </div>
              </div>

              {/* Circular Avatar Wrapper */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full border-4 border-white shadow-2xl bg-slate-100 flex items-center justify-center group transition-transform duration-300 hover:scale-[1.02]">
                
                {/* Profile Image (Circular) */}
                <img
                  src={profile?.avatarUrl || (profile as any)?.imageUrl || ''}
                  alt={profile?.name || 'Profile'}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Discord Avatar Decoration Overlay */}
                {profile.avatarDecorationUrl && (
                  <img
                    src={profile.avatarDecorationUrl}
                    alt="Discord Avatar Decoration"
                    referrerPolicy="no-referrer"
                    className="absolute -inset-[12%] w-[124%] h-[124%] max-w-none object-contain pointer-events-none z-20 select-none"
                  />
                )}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
