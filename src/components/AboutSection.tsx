import React from 'react';
import { Rocket, Code, User, Download } from 'lucide-react';
import { ProfileData } from '../types';

interface AboutSectionProps {
  profile: ProfileData;
  onOpenCVModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onOpenCVModal }) => {
  const getHighlightIcon = (iconType: string) => {
    switch (iconType) {
      case 'rocket':
        return <Rocket className="w-5 h-5 text-blue-600" />;
      case 'code':
        return <Code className="w-5 h-5 text-blue-600" />;
      case 'user':
        return <User className="w-5 h-5 text-blue-600" />;
      default:
        return <Code className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-slate-50/60 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: About Me Bio */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="space-y-2">
              <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Who I Am
              </h2>
              {/* Blue accent line */}
              <div className="w-12 h-1 bg-blue-600 rounded-full mt-2" />
            </div>

            {/* Render Paragraf Aman (Penanganan String & Array) */}
            <div className="text-gray-600 text-base leading-relaxed space-y-3">
              {Array.isArray(profile?.aboutText)
                ? (profile.aboutText as string[]).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                : typeof profile?.aboutText === 'string'
                ? profile.aboutText.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                : null}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenCVModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-blue-50 text-blue-600 font-medium text-sm rounded-xl border border-blue-200 shadow-sm transition-all duration-200 hover:border-blue-300"
              >
                <span>Download CV</span>
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {(profile?.highlights || []).map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                    {getHighlightIcon(item.icon)}
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
