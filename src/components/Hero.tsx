import React from 'react';
import { Github, Instagram } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenEditProfile?: () => void;
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
                {profile.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-medium text-gray-500 pt-1">
                {profile.title}
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              {profile.tagline}
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
              {profile.socials.github && (
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
              {profile.socials.instagram && (
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

          {/* Right Column: Profile Image */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-md">
              
              {/* Dot Grid Matrix Accent */}
              <div className="absolute -top-4 -right-4 z-0 hidden sm:block">
                <div className="grid grid-cols-5 gap-2.5">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-300 opacity-80" />
                  ))}
                </div>
              </div>

              {/* Large Arch Soft Backdrop */}
              <div className="absolute bottom-0 right-0 left-0 top-8 bg-gradient-to-b from-blue-100/70 to-indigo-50/50 rounded-t-[180px] rounded-b-[40px] z-0 shadow-inner" />

              {/* Profile Headshot Image */}
              <div className="relative z-10 flex justify-center pt-6 px-4">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-full max-w-[340px] sm:max-w-[380px] h-auto object-cover rounded-t-[160px] rounded-b-[30px] drop-shadow-md transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
