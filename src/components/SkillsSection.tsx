import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code, Database, Layout, Shield, Type, Palette, PenTool, Image } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'Shield': return <Shield className="w-5 h-5" />;
      case 'Type': return <Type className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'PenTool': return <PenTool className="w-5 h-5" />;
      case 'Image': return <Image className="w-5 h-5" />;
      default: return <Code className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50/60 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-blue-600 font-bold text-xs sm:text-sm tracking-widest uppercase">
            MY SKILLS & EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Keahlian Utama
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Penguasaan mendalam dalam pengembangan bot Discord BDFD dan desain grafis berbasis PixelLab.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-sm space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-gray-100 hover:border-blue-200 transition-colors space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2 bg-white rounded-lg shadow-xs text-blue-600">
                        {getIcon(skill.icon)}
                      </div>
                      <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-blue-100 text-blue-700">
                        {skill.level}
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-900 text-sm">{skill.name}</h4>
                    <p className="text-xs text-gray-500 leading-snug">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
