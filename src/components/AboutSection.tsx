import React from 'react';
import { Bot, Image, Code2, Award } from 'lucide-react';
import { ProfileData } from '../types';

interface AboutSectionProps {
  profile: ProfileData;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
              ABOUT ME
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Menggabungkan Logika BDFD & Kreativitas Visual
            </h2>

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              {profile.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Specialization Badges */}
            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 bg-blue-100 text-blue-600 rounded-lg shrink-0">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">BDFD Developer</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Automasi & Komunitas Discord</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-gray-100 flex items-start gap-3">
                <div className="p-2.5 bg-purple-100 text-purple-600 rounded-lg shrink-0">
                  <Image className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">PixelLab Design</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Poster, Banner & Logo Vektor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stats Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50/40 rounded-2xl border border-blue-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Code2 className="w-5 h-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-gray-900">25+</p>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Bot BDFD Selesai</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50/40 rounded-2xl border border-purple-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-purple-600 text-white flex items-center justify-center">
                <Image className="w-5 h-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-gray-900">50+</p>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Desain PixelLab</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50/40 rounded-2xl border border-emerald-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-gray-900">30+</p>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Klien Puas</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50/40 rounded-2xl border border-amber-100 text-center space-y-2">
              <div className="w-10 h-10 mx-auto rounded-xl bg-amber-600 text-white flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-black text-gray-900">99%</p>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Uptime & Performa</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
