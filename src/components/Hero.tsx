import React from 'react';
import { Github, Instagram } from 'lucide-react';
import { ProfileData } from '../types';

interface HeroProps {
  profile: ProfileData;
  onOpenCV: () => void;
  onOpenEditProfile?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsElem = document.getElementById('projects');
    if (projectsElem) {
      projectsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>{profile.title}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.1]">
              Kreasikan Bot Discord & Visual <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">PixelLab</span>
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {profile.bio}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                View My Work
              </button>

              <button
                onClick={scrollToContact}
                className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-semibold text-sm rounded-xl border border-gray-200 shadow-sm transition-all duration-200"
              >
                Contact Me
              </button>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-4">
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

          {/* Right Image/Avatar Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Background Arch Shape */}
              <div className="absolute bottom-0 right-0 left-0 top-8 bg-gradient-to-b from-blue-100/70 to-indigo-50/50 rounded-t-[180px] rounded-b-[40px] z-0 shadow-inner" />

              {/* Profile Headshot Image */}
              <div className="relative z-10 flex justify-center pt-6 px-4">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
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
